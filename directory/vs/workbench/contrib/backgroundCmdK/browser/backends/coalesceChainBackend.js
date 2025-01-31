import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../../services/ai/browser/aiService.js';
import '../../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../services/shadowWorkspace/common/shadowWorkspaceService.js';
import '../../../../../../proto/aiserver/v1/shadow_workspace_pb.js';
import '../../../../services/ai/browser/repositoryService.js';
import '../../../../../../proto/aiserver/v1/chat_pb.js';
import '../../../../../base/common/resources.js';
import '../../../../../platform/cursor/browser/aiEverythingProviderService.js';
import '../../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../../../../../base/common/cancellation.js';
define(
			de[3948],
			he([1, 0, 3, 42, 25, 118, 148, 83, 626, 454, 226, 126, 19, 280, 134, 33]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*resolverService*/,
 w /*workspace*/,
 E /*aiService*/,
 C /*aiserver_pb*/,
 d /*utils_pb*/,
 m /*shadowWorkspaceService*/,
 r /*shadow_workspace_pb*/,
 u /*repositoryService*/,
 a /*chat_pb*/,
 h /*resources*/,
 c /*aiEverythingProviderService*/,
 n /*reactiveStorageTypes*/,
 g /*cancellation*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$n7b = void 0);
				let p = class extends t.$1c {
					constructor(f, b, s, l, y, $) {
						super(),
							(this.a = f),
							(this.b = b),
							(this.c = s),
							(this.f = l),
							(this.g = y),
							(this.h = $);
					}
					async generate(f, b) {
						const l = (await this.c.aiClient()).backgroundCmdK(f, {
							signal: b.signal,
						});
						let y = "";
						for await (const v of l) y += v.proposedChange;
						let $ = y;
						return (
							f.type === C.BackgroundCmdKRequest_Type.LOOP_ON_LINTS
								? ($ = await this.loopOnLints(f, y))
								: f.type === C.BackgroundCmdKRequest_Type.ASK_CODEBASE &&
									($ = await this.askCodebase(f, y)),
							$
						);
					}
					async buildRequest(f, b) {
						const s = f.getRangeToGenerate();
						if (s === null) return;
						let l, y;
						const $ = await this.b.createModelReference(f.uri);
						try {
							const I = $.object.textEditorModel;
							(l = new d.$Ws({
								relativeWorkspacePath: this.a.asRelativePath(f.uri),
								contents: I.getValue(),
							})),
								(y = {
									startLineNumber: s.startLineNumber,
									startColumn: 1,
									endLineNumberInclusive: s.endLineNumber,
									endColumn: I.getLineMaxColumn(s.endLineNumber),
								});
						} finally {
							$.dispose();
						}
						const v = await this.h.onlyLocalProvider?.runCommand(
							n.EditHistoryActions.CompileGlobalDiffTrajectories,
							{},
						);
						return new C.$jE({
							instruction: f.getInstruction(),
							currentFile: l,
							selectionRange: y,
							type: b,
							diffHistory: v,
						});
					}
					async getLints(f, b) {
						const s = f.currentFile?.contents
								.split(`
`)
								.slice(0, (f.selectionRange?.startLineNumber ?? 1) - 1)
								.join(`
`),
							l = f.currentFile?.contents
								.split(`
`)
								.slice((f.selectionRange?.endLineNumberInclusive ?? 1) - 1)
								.join(`
`),
							y =
								s +
								`
` +
								b +
								`
` +
								l;
						return [
							(
								await (
									await this.f.getClient()
								).getLintsForChange(
									new r.$tx({
										files: [
											{
												relativeWorkspacePath:
													f.currentFile?.relativeWorkspacePath,
												initialContent: f.currentFile?.contents,
												finalContent: y,
											},
										],
									}),
								)
							).lints,
							y,
						];
					}
					async run(f, b) {
						const s = [
								C.BackgroundCmdKRequest_Type.LOOP_ON_LINTS,
								C.BackgroundCmdKRequest_Type.UNSPECIFIED,
								C.BackgroundCmdKRequest_Type.REFLECT,
								C.BackgroundCmdKRequest_Type.CHAT_AND_APPLY,
								C.BackgroundCmdKRequest_Type.CODEBASE_CHUNKS,
								C.BackgroundCmdKRequest_Type.SPEC_AND_APPLY,
								C.BackgroundCmdKRequest_Type.ASK_CODEBASE,
								C.BackgroundCmdKRequest_Type.USEFUL_TYPES,
							],
							l = await this.buildRequest(f, s[0]);
						if (l === void 0 || l.currentFile === void 0) return;
						const y = [];
						for (const T of s) {
							let P = new C.$jE({ ...l, type: T });
							if (T === C.BackgroundCmdKRequest_Type.CODEBASE_CHUNKS) {
								const k = await this.getCodebaseChunks(
									P.instruction,
									P.currentFile?.relativeWorkspacePath ?? "",
								);
								if (k === void 0) continue;
								P.relatedCodeBlocks = k;
							} else if (T === C.BackgroundCmdKRequest_Type.USEFUL_TYPES) {
								const k = await this.getUsefulTypes(P);
								P = new C.$jE({ ...P, usefulTypes: k });
							}
							y.push(this.generate(P, b.abortController));
						}
						if (b.abortController.signal.aborted) return;
						const $ = (await Promise.all(y)).filter((T) => T !== void 0);
						if (b.abortController.signal.aborted) return;
						const v = await Promise.all(
							$.map(async (T) => {
								const [P, k] = await this.getLints(l, T);
								return new C.$nE({ change: T, linterErrors: P });
							}),
						);
						if (b.abortController.signal.aborted) return;
						const S = new C.$jE({
							...l,
							type: C.BackgroundCmdKRequest_Type.COALESCE_GENERATIONS,
							proposedChangeHistory: v,
						});
						return { finalResultPromise: this.generate(S, b.abortController) };
					}
					async getCodebaseChunks(f, b) {
						const s = [
								new a.$SA({
									type: a.ConversationMessage_MessageType.HUMAN,
									text:
										f +
										`
Please make sure to mention any files or code blocks that seem potentially relevant.`,
								}),
							]
								.map((S, I) => (S.text !== "" ? S.text : null))
								.filter((S) => S !== null)
								.join(`
`),
							l = { topK: 100, minK: 20, finalK: 200 },
							y = [{ text: s, globsNewLineSeparated: "" }],
							v = (await this.g.searchMultipleQueries(y, l))
								.map((S) => S.codeBlock)
								.filter(
									(S) =>
										S !== void 0 &&
										S.contents.length < 2e4 &&
										!h.$dh.isEqual(
											this.a.resolveRelativePath(S.relativeWorkspacePath),
											this.a.resolveRelativePath(b),
										),
								);
						if (v.length !== 0) return v;
					}
					async loopOnLints(f, b) {
						const [s, l] = await this.getLints(f, b);
						if (s.length === 0) return b;
						const y = new C.$jE({
								instruction: f.instruction,
								currentFile: new d.$Ws({
									relativeWorkspacePath: f.currentFile?.relativeWorkspacePath,
									contents: l,
								}),
								selectionRange: {
									startLineNumber: f.selectionRange?.startLineNumber ?? 1,
									startColumn: 1,
									endLineNumberInclusive:
										(f.selectionRange?.startLineNumber ?? 1) +
										b.split(`
`).length,
									endColumn: 1,
								},
								type: C.BackgroundCmdKRequest_Type.LOOP_ON_LINTS,
								proposedChangeHistory: [{ change: b, linterErrors: s }],
							}),
							v = (await this.c.aiClient()).backgroundCmdK(y);
						let S = "";
						for await (const I of v) S += I.proposedChange;
						return S;
					}
					async askCodebase(f, b) {
						const s = b
							.split(`
`)
							.filter((I) => I.trim() !== "");
						let l = new Map();
						for (const I of s) {
							const T = await this.getCodebaseChunks(
								I,
								f.currentFile?.relativeWorkspacePath ?? "",
							);
							if (T !== void 0)
								for (const P of T) {
									const k = `${P.relativeWorkspacePath}:${P.range?.startPosition?.line}`;
									l.has(k) || l.set(k, P);
								}
						}
						if (l.size === 0) return b;
						const y = new C.$jE({ ...f, relatedCodeBlocks: [...l.values()] }),
							v = (await this.c.aiClient()).backgroundCmdK(y);
						let S = "";
						for await (const I of v) S += I.proposedChange;
						return S;
					}
					async getUsefulTypes(f) {
						const b = f.currentFile?.relativeWorkspacePath,
							s = f.selectionRange;
						if (b === void 0 || s === void 0) return [];
						const l = this.a.resolveRelativePath(b),
							y = await this.b.createModelReference(l);
						let $ = [];
						try {
							const v = y.object.textEditorModel,
								S = new g.$Ce();
						} finally {
							y.dispose();
						}
						return $;
					}
				};
				(e.$n7b = p),
					(e.$n7b = p =
						Ne(
							[
								j(0, w.$Vi),
								j(1, i.$MO),
								j(2, E.$Nfc),
								j(3, m.$k7b),
								j(4, u.$J6b),
								j(5, c.$3Db),
							],
							p,
						));
			},
		)
