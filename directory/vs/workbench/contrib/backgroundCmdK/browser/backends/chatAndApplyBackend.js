import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../../services/ai/browser/aiService.js';
import '../../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../../platform/cursor/browser/aiEverythingProviderService.js';
import '../../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../utils/duplicateAsyncIterable.js';
import '../../../../services/history/common/history.js';
import '../../../../../../proto/aiserver/v1/chat_pb.js';
import '../../../../../base/common/resources.js';
import '../../../../services/ai/browser/repositoryService.js';
import '../../../../services/shadowWorkspace/common/shadowWorkspaceService.js';
import '../../../../../../proto/aiserver/v1/shadow_workspace_pb.js';
import '../../../../../base/common/cppUtils/diff/line.js';
define(
			de[3947],
			he([
				1, 0, 3, 42, 25, 118, 148, 83, 280, 134, 1234, 245, 126, 19, 226, 626,
				454, 901,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$m7b = void 0);
				let f = class extends t.$1c {
					constructor(s, l, y, $, v, S, I) {
						super(),
							(this.c = s),
							(this.f = l),
							(this.g = y),
							(this.h = $),
							(this.j = v),
							(this.n = S),
							(this.q = I);
					}
					async buildRequest(s, l) {
						const y = s.getRangeToGenerate();
						if (y === null) return;
						let $, v;
						const S = await this.f.createModelReference(s.uri);
						try {
							const L = S.object.textEditorModel;
							($ = new d.$Ws({
								relativeWorkspacePath: this.c.asRelativePath(s.uri),
								contents: L.getValue(),
							})),
								(v = {
									startLineNumber: y.startLineNumber,
									startColumn: 1,
									endLineNumberInclusive: y.endLineNumber,
									endColumn: L.getLineMaxColumn(y.endLineNumber),
								});
						} finally {
							S.dispose();
						}
						const I = await this.h.onlyLocalProvider?.runCommand(
								r.EditHistoryActions.CompileGlobalDiffTrajectories,
								{},
							),
							T = await this.getRecentlyViewedFiles(),
							P = this.formatRecentChangesAsDiff(l.recentModelStates);
						return new C.$jE({
							instruction: s.getInstruction(),
							currentFile: $,
							selectionRange: v,
							type:
								l.multipleCompletions === "chat and apply"
									? C.BackgroundCmdKRequest_Type.CHAT_AND_APPLY_UNDERSPECIFIED
									: C.BackgroundCmdKRequest_Type.UNSPECIFIED,
							diffHistory: I,
							recentlyViewedFiles: T,
							recentDiffs: P,
							multipleCompletions:
								l.multipleCompletions === "chat and apply" ||
								l.multipleCompletions === "immediately output",
						});
					}
					formatRecentChangesAsDiff(s) {
						const l = [];
						for (const [y, $] of s.entries()) {
							if (y.trim() === "" || $.length < 2) continue;
							const v = $.sort((k, L) => k.editedAt - L.editedAt),
								S = v[0].content,
								I = v[v.length - 1].content,
								T = (0, o.$gqb)(S, I);
							let P = [];
							T.forEach((k, L) => {
								const D = k.added ? "+" : k.removed ? "-" : " ",
									M = k.value
										.split(`
`)
										.slice(0, -1)
										.map((N) => `${D}${N}`);
								k.added || k.removed
									? P.push(
											M.join(`
`),
										)
									: L === 0
										? P.push(
												M.slice(-3).join(`
`),
											)
										: L === T.length - 1
											? P.push(
													M.slice(0, 3).join(`
`),
												)
											: M.length < 6
												? P.push(
														M.join(`
`),
													)
												: (P.push(
														M.slice(0, 3).join(`
`),
													),
													P.push("..."),
													P.push(
														M.slice(-3).join(`
`),
													));
							}),
								l.push(
									new C.$rE({
										relativeWorkspacePath: y,
										diff: P.join(`
`),
									}),
								);
						}
						return l;
					}
					async getRecentlyViewedFiles() {
						const s = this.j.getRecentLocations(),
							l = new Map();
						for (const [y, $] of s.entries()) {
							const v = this.c.asRelativePath($.uri);
							if (!l.has(v)) {
								const I = await this.f.createModelReference($.uri);
								let T = "";
								try {
									T = I.object.textEditorModel.getValue();
								} finally {
									I.dispose();
								}
								l.set(
									v,
									new C.$pE({
										relativeWorkspacePath: v,
										contents: T,
										visibleRanges: [],
									}),
								);
							}
							let S = l.get(v);
							if (S) {
								const I = new C.$qE({
									startLineNumberInclusive: $.location.startLineNumber,
									endLineNumberExclusive: $.location.endLineNumber + 1,
									globalOrderDescending: y,
								});
								S.visibleRanges.push(I);
							}
						}
						return Array.from(l.values());
					}
					async generate(s, l) {
						const $ = (await this.g.aiClient()).backgroundCmdK(s, {
							signal: l.signal,
						});
						let v = [];
						for await (const I of $) v.push(I.proposedChange);
						let S = v;
						return (
							s.type === C.BackgroundCmdKRequest_Type.LOOP_ON_LINTS &&
								(S = await this.loopOnLints(s, v)),
							S
						);
					}
					async getLints(s, l) {
						const y = s.currentFile?.contents
								.split(`
`)
								.slice(0, (s.selectionRange?.startLineNumber ?? 1) - 1)
								.join(`
`),
							$ = s.currentFile?.contents
								.split(`
`)
								.slice((s.selectionRange?.endLineNumberInclusive ?? 1) - 1)
								.join(`
`),
							v =
								y +
								`
` +
								l +
								`
` +
								$;
						return [
							(
								await (
									await this.q.getClient()
								).getLintsForChange(
									new p.$tx({
										files: [
											{
												relativeWorkspacePath:
													s.currentFile?.relativeWorkspacePath,
												initialContent: s.currentFile?.contents,
												finalContent: v,
											},
										],
									}),
								)
							).lints,
							v,
						];
					}
					async loopOnLints(s, l) {
						const [y, $] = await this.getLints(s, l[0]);
						if (y.length === 0) return l;
						const v = l[0],
							S = new C.$jE({
								instruction: s.instruction,
								currentFile: new d.$Ws({
									relativeWorkspacePath: s.currentFile?.relativeWorkspacePath,
									contents: $,
								}),
								selectionRange: {
									startLineNumber: s.selectionRange?.startLineNumber ?? 1,
									startColumn: 1,
									endLineNumberInclusive:
										(s.selectionRange?.startLineNumber ?? 1) +
										v.split(`
`).length,
									endColumn: 1,
								},
								type: C.BackgroundCmdKRequest_Type.LOOP_ON_LINTS,
								proposedChangeHistory: [{ change: v, linterErrors: y }],
							}),
							T = (await this.g.aiClient()).backgroundCmdK(S);
						let P = [];
						for await (const k of T) P.push(k.proposedChange);
						return P;
					}
					async *generateSingleRequest(s, l) {
						const y = await this.buildRequest(s, l);
						if (y === void 0 || y.currentFile === void 0) return;
						const $ = await this.generate(y, l.abortController);
						for (const v of $) yield v;
					}
					async *generateRequests(s, l) {
						const y = [
								C.BackgroundCmdKRequest_Type.LOOP_ON_LINTS,
								C.BackgroundCmdKRequest_Type.UNSPECIFIED,
								C.BackgroundCmdKRequest_Type.REFLECT,
								C.BackgroundCmdKRequest_Type.CHAT_AND_APPLY_UNDERSPECIFIED,
								C.BackgroundCmdKRequest_Type.CODEBASE_CHUNKS,
								C.BackgroundCmdKRequest_Type.SPEC_AND_APPLY,
							],
							$ = await this.buildRequest(s, l);
						if ($ === void 0 || $.currentFile === void 0) return;
						const v = new Map();
						for (const S of y) {
							let I = new C.$jE({ ...$, type: S });
							if (S === C.BackgroundCmdKRequest_Type.CODEBASE_CHUNKS) {
								const T = I.currentFile?.contents
										.split(`
`)
										.slice(
											(I.selectionRange?.startLineNumber ?? 1) - 1,
											I.selectionRange?.endLineNumberInclusive ?? 1,
										)
										.join(`
`),
									P = await this.getCodebaseChunks(
										I.instruction,
										T,
										I.currentFile?.relativeWorkspacePath ?? "",
									);
								if (P === void 0) continue;
								I.relatedCodeBlocks = P;
							}
							v.set(
								S,
								this.generate(I, l.abortController).then((T) => ({
									type: S,
									results: T,
								})),
							);
						}
						for (; v.size > 0; ) {
							const { type: S, results: I } = await Promise.race(
								Array.from(v.values()),
							);
							if (I !== void 0) for (const T of I) console.log(S, T), yield T;
							v.delete(S);
						}
					}
					async run(s, l) {
						let y;
						l.multipleCompletions === "chat and apply" ||
						l.multipleCompletions === "immediately output"
							? (y = this.generateSingleRequest(s, l))
							: (y = this.generateRequests(s, l));
						const $ = (0, u.$j7b)(y),
							v = new Promise((I) => {
								const T = $();
								(async () => {
									let k = "";
									for await (const L of T)
										if (L) {
											k += L;
											break;
										}
									I(k);
								})();
							});
						async function* S(I) {
							for await (const T of I) T && (yield T);
						}
						return { finalResultPromise: v, alternativesStream: S($()) };
					}
					async getCodebaseChunks(s, l, y) {
						let $ = `${s}

Please make sure to mention any files or code blocks that seem potentially relevant.`;
						if (l !== void 0 && l.trim() !== "") {
							const k = "```\n" + l + "\n```";
							$ = `${s}
Here is the code I'm looking at:
${k}

Please make sure to mention any files or code blocks that seem potentially relevant.`;
						}
						const v = [
								new h.$SA({
									type: h.ConversationMessage_MessageType.HUMAN,
									text: $,
								}),
							]
								.map((k, L) => (k.text !== "" ? k.text : null))
								.filter((k) => k !== null)
								.join(`
`),
							S = { topK: 100, minK: 20, finalK: 200 },
							I = [{ text: v, globsNewLineSeparated: "" }],
							P = (await this.n.searchMultipleQueries(I, S))
								.map((k) => k.codeBlock)
								.filter(
									(k) =>
										k !== void 0 &&
										k.contents.length < 2e4 &&
										!c.$dh.isEqual(
											this.c.resolveRelativePath(k.relativeWorkspacePath),
											this.c.resolveRelativePath(y),
										),
								);
						if (P.length !== 0) return P;
					}
				};
				(e.$m7b = f),
					(e.$m7b = f =
						Ne(
							[
								j(0, w.$Vi),
								j(1, i.$MO),
								j(2, E.$Nfc),
								j(3, m.$3Db),
								j(4, a.$Feb),
								j(5, n.$J6b),
								j(6, g.$k7b),
							],
							f,
						));
			},
		),
		