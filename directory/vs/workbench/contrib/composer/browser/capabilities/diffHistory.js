import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/uri.js';
import '../../../../../editor/common/services/model.js';
import '../../../../services/editor/common/editorService.js';
import '../../../../../../proto/aiserver/v1/composer_pb.js';
import '../composer.js';
import '../composerCapabilities.js';
import '../composerCapabilityDecorators.js';
import '../composerCapabilitySchemas.js';
import '../composerDataService.js';
import '../composerViews.js';
import '../../../../../base/common/uuid.js';
import '../../../../../editor/common/services/editorWorker.js';
import '../../../../../../proto/aiserver/v1/chat_pb.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../../../editor/common/services/resolverService.js';
import '../composerUtilsService.js';
define(
			de[3954],
			he([
				1, 0, 9, 67, 18, 167, 219, 262, 395, 351, 209, 506, 47, 200, 126, 25,
				42, 426,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*uri*/,
 i /*model*/,
 w /*editorService*/,
 E /*composer_pb*/,
 C /*composer*/,
 d /*composerCapabilities*/,
 m /*composerCapabilityDecorators*/,
 r /*composerCapabilitySchemas*/,
 u /*composerDataService*/,
 a /*composerViews*/,
 h /*uuid*/,
 c /*editorWorker*/,
 n /*chat_pb*/,
 g /*workspace*/,
 p /*resolverService*/,
 o /*composerUtilsService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.DiffHistory = void 0);
				let f = class extends d.ComposerCapability {
					constructor(s, l, y, $, v, S, I, T, P, k, L) {
						super(s, l),
							(this.composerDataService = y),
							(this.composerService = $),
							(this.composerViewService = v),
							(this.modelService = S),
							(this.editorService = I),
							(this.editorWorkerService = T),
							(this.workspaceContextService = P),
							(this.textModelService = k),
							(this.composerUtilsService = L),
							(this.priority = 1),
							(this.type =
								E.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_HISTORY),
							(this.name =
								d.capabilityTypeLabels[
									E.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_HISTORY
								]),
							(this.schema = r.diffHistorySchema),
							(this.diffHistories = new Map()),
							this.D(
								$.onDidAiEditFile(({ path: D, version: M }) => {
									this.recordAiEdit(D, M);
								}),
							),
							this.D(
								$.onDidFinishAiEditToolCall(() => {
									const D = Array.from(this.diffHistories.keys());
									this.resetDiffHistories(D);
								}),
							);
					}
					recordAiEdit(s, l) {
						const y = this.composerDataService.getComposerCodeBlock(
							this.composerId,
							s,
							l,
						);
						if (!y || !y.originalModelDiffWrtV0 || !y.newModelDiffWrtV0) return;
						const $ = this.workspaceContextService.asRelativePath(s),
							v =
								this.composerUtilsService.getCodeBlockOriginalModelLines(
									this.composerId,
									s,
									l,
								) ?? [];
						this.diffHistories.has($) ||
							this.diffHistories.set($, {
								originalContent: v.join(`
`),
								events: [],
								relativeWorkspacePath: $,
							});
						const S = this.diffHistories.get($),
							I = S.events[S.events.length - 1],
							P =
								this.composerUtilsService
									.getCodeBlockNewModelLines(this.composerId, s, l)
									?.join(`
`) ?? "";
						if (I?.type === "ai_edit") {
							if (
								I.content ===
								v.join(`
`)
							) {
								I.content = P;
								return;
							}
							S.events.push({
								type: "user_edit",
								content: v.join(`
`),
								timestamp: Date.now() - 1,
							});
						}
						(S.events[S.events.length - 1]?.content ?? S.originalContent) !==
							P &&
							S.events.push({
								type: "ai_edit",
								content: P,
								timestamp: Date.now(),
							});
					}
					async compressHistory(s) {
						const l = [];
						let y = null;
						for (const T of s.events) {
							const k =
								T.type === "ai_edit"
									? n.ComposerFileDiff_Editor.AI
									: n.ComposerFileDiff_Editor.HUMAN;
							!y || y.editor !== k
								? (y && l.push(y),
									(y = {
										startContent: y?.endContent ?? s.originalContent,
										endContent: T.content,
										editor: k,
										events: [T],
									}))
								: (y.events.push(T), (y.endContent = T.content));
						}
						y && l.push(y);
						const $ = l[l.length - 1];
						$ &&
							$.endContent !== s.events[s.events.length - 1].content &&
							l.push({
								startContent: $.endContent,
								endContent: s.events[s.events.length - 1].content,
								editor: n.ComposerFileDiff_Editor.HUMAN,
								events: [
									{
										type: "user_edit",
										content: s.events[s.events.length - 1].content,
										timestamp: Date.now(),
									},
								],
							});
						const S = (
							await Promise.all(
								l.map(async (T, P) => {
									const k = await this.composerUtilsService.computeDiff(
										T.startContent,
										T.endContent,
										s.relativeWorkspacePath,
									);
									return k.chunks.length === 0
										? null
										: new n.$dB({
												chunks: k.chunks,
												editor: T.editor,
												hitTimeout: k.hitTimeout,
											});
								}),
							)
						).filter((T) => T !== null);
						if (S.length === 0) return null;
						const I = void 0;
						return new n.$fB({
							relativeWorkspacePath: s.relativeWorkspacePath,
							diffs: S,
							timestamp: Date.now(),
							uniqueId: (0, h.$9g)(),
							startToEndDiff: I,
						});
					}
					silentOnStartSubmitChat(s) {
						return !1;
					}
					supportsCacheWarming() {
						return !0;
					}
					async onStartSubmitChatReturnShouldStop(s) {
						if (s.submitChatProps.extra?.bubbleId !== void 0) return !1;
						const l = this.composerDataService.getComposerData(this.composerId);
						if (!l || l.currentBubbleId !== void 0) return !1;
						const y = [],
							$ = new Set(),
							v = Array.from(this.diffHistories.entries()),
							S = await Promise.allSettled(
								v.map(async ([T, P]) => {
									const k = [...P.events];
									try {
										const L =
											this.workspaceContextService.resolveRelativePath(T);
										$.add(T);
										let D;
										try {
											const N =
												await this.textModelService.createModelReference(L);
											(D = N.object.textEditorModel.getValue()), N.dispose();
										} catch (N) {
											console.error(
												`[diff-history] Failed to get current content for ${T}:`,
												N,
											);
										}
										if (
											(D !== void 0 &&
												D !== (k[k.length - 1]?.content ?? P.originalContent) &&
												k.push({
													type: "user_edit",
													content: D,
													timestamp: Date.now(),
												}),
											k.length === 0)
										)
											return null;
										const M = await this.compressHistory({ ...P, events: k });
										return M || null;
									} catch (L) {
										return (
											console.error(
												`[diff-history] Error processing history for ${T}:`,
												L,
											),
											null
										);
									}
								}),
							).then((T) =>
								T.map((P) => (P.status === "fulfilled" ? P.value : null)),
							);
						y.push(...S.filter((T) => T !== null));
						const I = {
							files: Array.from($).map((T) => t.URI.parse(T)),
							diffHistories: y,
							uniqueId: (0, h.$9g)(),
						};
						return (
							this.composerService.addContext({
								composerId: this.composerId,
								contextType: "diffHistory",
								value: I,
							}),
							!1
						);
					}
					silentRunInPlaceMutateRequestBeforeSubmit(s) {
						return !0;
					}
					async runInPlaceMutateRequestBeforeSubmit(s, l) {
						if (
							!this.composerDataService.getComposerData(l.composerId) ||
							s.conversation === void 0
						)
							return;
						for (let S = 0; S < s.conversation.length; S++) {
							const I = s.conversation[S];
							I.context?.diffHistory &&
								(s.conversation[S].diffHistories =
									I.context.diffHistory.diffHistories.map((T) =>
										n.$fB.fromJson(JSON.parse(JSON.stringify(T))),
									));
						}
						if (l.isCacheWarming) return;
						const v =
							s.conversation[s.conversation.length - 1]?.attachedCodeChunks;
						await this.resetDiffHistories(
							v?.map((S) => S.relativeWorkspacePath),
						);
					}
					async resetDiffHistories(s) {
						if ((this.diffHistories.clear(), s))
							for (const l of s) {
								const y = this.workspaceContextService.resolveRelativePath(l),
									$ = this.workspaceContextService.asRelativePath(y);
								let v;
								try {
									v = await this.textModelService.createModelReference(y);
									const I = v.object.textEditorModel?.getValue();
									if (I === void 0) continue;
									this.diffHistories.set($, {
										originalContent: I,
										events: [],
										relativeWorkspacePath: $,
									});
								} catch (S) {
									console.error(
										`[diff-history] Error recording original content for ${$}:`,
										S,
									);
								} finally {
									v?.dispose();
								}
							}
					}
				};
				(e.DiffHistory = f),
					(e.DiffHistory = f =
						Ne(
							[
								(0, m.autoCancellableAndStatusUpdater)(),
								j(2, u.IComposerDataService),
								j(3, C.IComposerService),
								j(4, a.IComposerViewsService),
								j(5, i.$QO),
								j(6, w.$IY),
								j(7, c.$Cxb),
								j(8, g.$Vi),
								j(9, p.$MO),
								j(10, o.IComposerUtilsService),
							],
							f,
						)),
					(0, d.registerComposerCapability)(
						E.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_HISTORY,
						f,
					);
			},
		)
