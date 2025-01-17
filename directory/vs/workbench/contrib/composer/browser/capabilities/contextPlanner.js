import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/chat_pb.js';
import '../../../../../../proto/aiserver/v1/composer_pb.js';
import '../../../../../base/common/uri.js';
import '../composer.js';
import '../composerCapabilities.js';
import '../composerCapabilityDecorators.js';
import '../composerCapabilitySchemas.js';
import '../composerData.js';
import '../composerDataService.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../../services/ai/browser/repositoryService.js';
import '../../../../../platform/files/common/files.js';
import '../utils.js';
import '../../../../services/selectedContext/browser/selectedContext.js';
define(
			de[3922],
			he([
				1, 0, 126, 167, 9, 219, 262, 395, 351, 225, 209, 25, 226, 22, 246, 271,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ContextPlanner = void 0);
				const p = 50,
					o = 100,
					f = 50,
					b = 1e4;
				let s = class extends C.ComposerCapability {
					constructor(y, $, v, S, I, T, P, k) {
						super(y, $),
							(this.composerDataService = v),
							(this.composerService = S),
							(this.workspaceContextService = I),
							(this.repositoryService = T),
							(this.fileService = P),
							(this.selectedContextService = k),
							(this.priority = 1),
							(this.type =
								i.ComposerCapabilityRequest_ComposerCapabilityType.CONTEXT_PLANNER),
							(this.name =
								C.capabilityTypeLabels[
									i.ComposerCapabilityRequest_ComposerCapabilityType.CONTEXT_PLANNER
								]),
							(this.schema = m.contextPlannerSchema),
							(this._semSearchFiles = []),
							(this._newFilesToAdd = []),
							(this._needsToMutateRequest = !1);
					}
					shouldRunOnBeforeSubmitChat(y) {
						return !y.isCapabilityIteration;
					}
					async onBeforeSubmitChat(y) {
						const $ = this.composerDataService.getComposerData(this.composerId);
						if (!$) return;
						const v = this.composerDataService.getComposerBubble(
							this.composerId,
							y.humanBubbleId,
						);
						if (!v) return;
						if (this._newFilesToAdd.length > 0) {
							y.contextUsed &&
								(y.contextUsed.fileSelections = [
									...y.contextUsed.fileSelections,
									...this._newFilesToAdd.map((T) => ({ uri: T })),
								]),
								(this._newFilesToAdd = []);
							return;
						}
						const S = new AbortController();
						let I = [];
						try {
							const T = this.repositoryService.parallelSearch(v.text, o, f, {
									fast: !0,
									raceNRequests: 6,
									abortSignal: S.signal,
								}),
								P = setTimeout(() => {
									console.error(
										"[composer] Aborting context planner semantic search",
									),
										S.abort();
								}, b),
								k = await T;
							if ((clearTimeout(P), k.length > 0)) {
								const L = new Set(
									$.context.fileSelections.map((D) =>
										this.workspaceContextService.asRelativePath(
											w.URI.revive(D.uri),
										),
									),
								);
								(I = (0, n.dedupeCodeResults)(k)
									.filter((D) => !L.has(D))
									.slice(0, p)),
									console.log("[composer] Semantic search results:", I);
							}
						} catch (T) {
							console.error("[composer] Error during semantic search:", T);
						}
						(this._semSearchFiles = I.map((T) =>
							this.workspaceContextService.resolveRelativePath(T),
						)),
							(this._needsToMutateRequest = !0),
							await this.composerService.submitChatMaybeAbortCurrent(
								this.composerId,
								"",
								{
									isThought: !0,
									isCapabilityIteration: !0,
									skipAddNewHumanMessage: !0,
									capabilityProcessesToSkip: [
										"composer-settled",
										"before-submit-chat",
									],
									modelOverride: this.data.model,
								},
							),
							(this._needsToMutateRequest = !1);
					}
					silentRunInPlaceMutateRequestBeforeSubmit(y) {
						return !0;
					}
					shouldRunInPlaceMutateRequestBeforeSubmit(y) {
						return this._semSearchFiles.length > 0;
					}
					async runInPlaceMutateRequestBeforeSubmit(y, $) {
						const v = y.conversation?.[y.conversation.length - 1];
						if (
							!v ||
							v.type !== t.ConversationMessage_MessageType.HUMAN ||
							((y.conversation = y.conversation?.filter((P, k) => {
								if (P.type === t.ConversationMessage_MessageType.AI)
									return !P.capabilityCodeBlocks?.some(
										(L) => L.type === r.ContextPlannerCodeBlockAlias,
									);
								if (
									P.type === t.ConversationMessage_MessageType.HUMAN &&
									k < (y.conversation?.length ?? 0) - 1
								) {
									const L = y.conversation?.[k + 1];
									if (L && L.type === t.ConversationMessage_MessageType.AI)
										return !L.capabilityCodeBlocks?.some(
											(D) => D.type === r.ContextPlannerCodeBlockAlias,
										);
								}
								return !0;
							})),
							!this._needsToMutateRequest)
						)
							return;
						const S = this._semSearchFiles.map((P) => ({ uri: P })),
							I =
								await this.selectedContextService.getCodeChunksFromFileSelections(
									S,
								),
							T = new i.$1z({
								type: i.ComposerCapabilityRequest_ComposerCapabilityType
									.CONTEXT_PLANNER,
								data: {
									case: "contextPlanner",
									value: {
										customInstructions: this.data.customInstructions,
										attachedCodeChunks: I,
									},
								},
							});
						(v.capabilities = [...(v.capabilities ?? []), T]),
							(this._semSearchFiles = []);
					}
					shouldProcessCodeBlock(y) {
						const $ = y.capabilityCodeBlock;
						return $?.type === r.ContextPlannerCodeBlockAlias && !!$.content;
					}
					async processCodeBlock(y) {
						const $ = y.capabilityCodeBlock;
						if (!$?.content || $.type !== r.ContextPlannerCodeBlockAlias)
							throw new Error(
								"[composer] Invalid code block for ContextPlanner",
							);
						try {
							const v = await this.parseContextPlannerContent($.content);
							if (!v)
								throw new Error(
									"[composer] Invalid context planner content format",
								);
							this.composerDataService.updateComposerCapabilityCodeBlock(
								this.composerId,
								y.aiBubbleId,
								$.codeBlockIdx,
								{
									type: r.ContextPlannerCodeBlockAlias,
									parsedContextPlanner: v,
									status: "completed",
								},
							),
								(this._newFilesToAdd = v);
						} catch (v) {
							throw (
								(console.error(
									"[composer] Error processing context planner code block:",
									v,
								),
								v)
							);
						}
					}
					async parseContextPlannerContent(y) {
						try {
							const $ = JSON.parse(y);
							if (!Array.isArray($)) return null;
							const v = [];
							for (const S of $) {
								if (typeof S != "string") continue;
								const I = this.workspaceContextService.resolveRelativePath(S);
								!I || !(await this.fileService.exists(I)) || v.push(I);
							}
							return v;
						} catch ($) {
							throw (
								(console.error(
									"[composer] Error parsing context planner content:",
									$,
								),
								$)
							);
						}
					}
				};
				(e.ContextPlanner = s),
					(e.ContextPlanner = s =
						Ne(
							[
								(0, d.autoCancellableAndStatusUpdater)(),
								j(2, u.IComposerDataService),
								j(3, E.IComposerService),
								j(4, a.$Vi),
								j(5, h.$J6b),
								j(6, c.$ll),
								j(7, g.$Q9b),
							],
							s,
						)),
					(0, C.registerComposerCapability)(
						i.ComposerCapabilityRequest_ComposerCapabilityType.CONTEXT_PLANNER,
						s,
					);
			},
		),
		