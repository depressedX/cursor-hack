import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../../../../proto/aiserver/v1/chat_pb.js';
import '../../../../../../proto/aiserver/v1/composer_pb.js';
import '../../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../../base/common/uri.js';
import '../../../../../platform/files/common/files.js';
import '../../../../../platform/markers/common/markers.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../composer.js';
import '../composerCapabilities.js';
import '../composerCapabilityDecorators.js';
import '../composerCapabilitySchemas.js';
import '../composerData.js';
import '../composerDataService.js';
import '../constants.js';
import '../../../../services/ai/browser/aiService.js';
import '../../../../services/ai/browser/repositoryService.js';
import '../../../../services/selectedContext/browser/utils.js';
import '../utils.js';
import '../../../../../base/common/codicons.js';
import '../../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../../base/common/errors.js';
define(
			de[3953],
			he([
				1, 0, 148, 126, 167, 83, 9, 22, 90, 25, 219, 262, 395, 351, 225, 209,
				169, 118, 226, 299, 246, 14, 45, 29,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*aiserver_pb*/,
				i /*chat_pb*/,
				w /*composer_pb*/,
				E /*utils_pb*/,
				C /*uri*/,
				d /*files*/,
				m /*markers*/,
				r /*workspace*/,
				u /*composer*/,
				a /*composerCapabilities*/,
				h /*composerCapabilityDecorators*/,
				c /*composerCapabilitySchemas*/,
				n /*composerData*/,
				g /*composerDataService*/,
				p /*constants*/,
				o /*aiService*/,
				f /*repositoryService*/,
				b /*utils*/,
				s /*utils*/,
				l /*codicons*/,
				y /*reactiveStorageService*/,
				$ /*errors*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.validateAgainstSchema = e.parseToolCall = e.ToolCall = void 0);
				let v = class extends a.ComposerCapability {
					constructor(k, L, D, M, N, A, R, O, B, U) {
						super(k, L),
							(this.composerDataService = D),
							(this.composerService = M),
							(this.fileService = N),
							(this.workspaceContextService = A),
							(this.repositoryService = R),
							(this.reactiveStorageService = O),
							(this.markerService = B),
							(this.aiService = U),
							(this.priority = 1),
							(this.type =
								w.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_CALL),
							(this.name =
								a.capabilityTypeLabels[
									w.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_CALL
								]),
							(this.schema = c.toolCallSchema),
							(this.forceIterate = !1),
							(this.mutateRequestCause = null),
							(this.instructionFromAI = null),
							(this.isProcessing = !1),
							(this.processingQueue = []),
							(this.pendingDecisions = new Map()),
							(this.activeToolCalls = new Set()),
							(this.currentParams = null),
							(this.allToolCallsCompletedResolver = null),
							(this.simultaneousSearchPromise = null),
							(this.simultaneousSearchAbortController = null),
							(this.skipMaxIterationsCheck = !1),
							(this.currentIterationSideEffects = []);
					}
					silentOnBeforeSubmitChat(k) {
						return !0;
					}
					async onBeforeSubmitChat(k) {
						if (this.mutateRequestCause === "tool-call") return;
						const L = this.composerDataService.getComposerData(k.composerId);
						if (!L) return;
						const D = L.conversation.find(
							(R) => R.bubbleId === k.humanBubbleId,
						);
						if (!D) return;
						const M = D.text,
							N = new AbortController(),
							A = this.repositoryService.parallelSearch(
								M,
								p.COMPOSER_SIMULTANEOUS_SEMANTIC_SEARCH_TOP_K,
								p.COMPOSER_SIMULTANEOUS_SEMANTIC_SEARCH_FINAL_K,
								{ fast: !0, raceNRequests: 6, abortSignal: N.signal },
							);
						(this.simultaneousSearchPromise = A),
							(this.simultaneousSearchAbortController = N);
					}
					silentRunInPlaceMutateRequestBeforeSubmit(k) {
						return this.mutateRequestCause !== "tool-call";
					}
					async runInPlaceMutateRequestBeforeSubmit(k, L) {
						const { composerId: D } = L,
							M = this.composerDataService.getComposerData(D);
						if (!M) return;
						if (
							this.composerDataService.getComposerBubble(D, L.humanBubbleId)
								?.context?.useDiffReview !== !0
						) {
							await new Promise((O) => setTimeout(O, 1e3));
							const R = await this.getLinterErrorsForComposer(M);
							k.multiFileLinterErrors = R;
						}
						if (
							(this.mutateRequestCause !== "tool-call" &&
								(k.conversation = k.conversation?.filter((R, O) => {
									if (R.type === i.ConversationMessage_MessageType.HUMAN)
										return !R.capabilities?.some((B) => B.type === this.type);
									if (
										R.type === i.ConversationMessage_MessageType.AI &&
										O > 0
									) {
										const B = k.conversation?.[O - 1];
										if (B && B.type === i.ConversationMessage_MessageType.HUMAN)
											return !B.capabilities?.some((U) => U.type === this.type);
									}
									return !0;
								})),
							!this.mutateRequestCause)
						)
							return;
						const N = k.conversation?.[k.conversation.length - 1];
						if (!N || !M || N.type !== i.ConversationMessage_MessageType.HUMAN)
							return;
						const A = this.mutateRequestCause;
						switch (((this.mutateRequestCause = null), A)) {
							case "iterate-instructions": {
								this.composerDataService.updateComposerData(D, {
									conversation: M.conversation.map((R) =>
										R.bubbleId === L.humanBubbleId
											? { ...R, text: this.instructionFromAI ?? R.text }
											: R,
									),
								}),
									(N.text = this.instructionFromAI ?? N.text),
									(this.instructionFromAI = null);
								break;
							}
							case "tool-call": {
								const R = this.convertToolSchemasToProto(n.TOOL_SCHEMAS),
									O = await this.composerDataService.getRelevantFiles(D),
									B = M.context.fileSelections.map((q) => q.uri.toString()),
									U = M.context,
									F = O.filter(
										(q) =>
											!U.fileSelections.find(
												(V) => (0, b.$8gc)(V) === (0, b.$8gc)(q),
											),
									).map((q) =>
										this.workspaceContextService.asRelativePath(
											C.URI.parse((0, b.$8gc)(q)),
											!1,
										),
									);
								let x = [];
								try {
									x = this.simultaneousSearchPromise
										? (0, s.dedupeCodeResults)(
												await this.simultaneousSearchPromise,
											)
										: [];
								} catch (q) {
									console.error("Error during simultaneous search:", q);
								} finally {
									(this.simultaneousSearchPromise = null),
										this.simultaneousSearchAbortController &&
											(this.simultaneousSearchAbortController.abort(),
											(this.simultaneousSearchAbortController = null));
								}
								const H = new w.$1z({
									type: w.ComposerCapabilityRequest_ComposerCapabilityType
										.TOOL_CALL,
									data: {
										case: "toolCall",
										value: {
											toolSchemas: R,
											customInstructions: this.data.customInstructions,
											relevantFiles: F,
											semanticSearchFiles: x,
											filesInContext: B,
										},
									},
								});
								(N.capabilities = [...(N.capabilities ?? []), H]),
									this.composerDataService.updateComposerBubble(
										D,
										L.humanBubbleId,
										{ capabilities: N.capabilities },
									);
								break;
							}
						}
					}
					convertToolSchemasToProto(k) {
						return Object.entries(k).map(
							([L, D]) =>
								new w.$2z({
									type: parseInt(L, 10),
									name: D.name,
									properties: this.convertPropertiesToProto(
										D.schema.properties,
									),
									required: D.schema.required ?? [],
								}),
						);
					}
					convertPropertiesToProto(k) {
						const L = {};
						for (const [D, M] of Object.entries(k)) L[D] = { type: M.type };
						return L;
					}
					silentOnComposerSettled(k) {
						return !0;
					}
					async onComposerSettledReturnShouldLoop(k) {
						const L = this.composerDataService.getComposerData(k.composerId);
						if (!L) return !1;
						const D = T(L.conversation);
						if (D !== 0 && D % this.data.maxIterations === 0)
							if (this.skipMaxIterationsCheck) this.skipMaxIterationsCheck = !1;
							else
								return (
									this.composerDataService.addActionButton(
										k.composerId,
										"Confirm and continue",
										() => (
											(this.skipMaxIterationsCheck = !0),
											this.composerService.onComposerSettled(k.composerId),
											!0
										),
										{ icon: l.$ak.runAll },
									),
									!1
								);
						if (
							((this.forceIterate = !1),
							(this.mutateRequestCause = "tool-call"),
							(this.currentParams = k),
							await this.composerService.submitChatMaybeAbortCurrent(
								k.composerId,
								"",
								{
									isCapabilityIteration: !0,
									capabilityProcessesToSkip: ["composer-settled"],
									modelOverride: this.data.pickerModel,
								},
							),
							this.composerDataService.getComposerData(k.composerId)?.status ===
								"aborted" || this.isAborted())
						)
							throw new Error("[composer] User aborted tool call chat");
						if (
							(await this.waitForAllToolCallsToComplete(),
							this.composerDataService.setCapabilityStatus(
								k.composerId,
								this.currentParams.aiBubbleId,
								"composer-settled",
								w.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_CALL,
								"completed",
							),
							this.forceIterate)
						) {
							const M = await new Promise((N) => {
								if (
									this.reactiveStorageService.applicationUserPersistentStorage
										.composerState.shouldAutoContinueToolCall
								) {
									N(!0);
									return;
								}
								this.composerDataService.addActionButton(
									k.composerId,
									"Continue iterating",
									() => (N(!0), !0),
									{
										icon: l.$ak.runAll,
										onRemove: () => {
											N(!1);
										},
									},
								),
									this.composerService.onComposerDone(k.composerId, k);
							});
							if (
								(this.composerDataService.clearActionButtons(k.composerId), !M)
							)
								return (
									(this.mutateRequestCause = null), (this.forceIterate = !1), !1
								);
							await Promise.all(
								this.currentIterationSideEffects.map((N) => N()),
							),
								(this.currentIterationSideEffects = []);
						}
						return (
							this.mutateRequestCause === "tool-call" &&
								(this.mutateRequestCause = null),
							this.forceIterate ? ((this.forceIterate = !1), !0) : !1
						);
					}
					waitForAllToolCallsToComplete() {
						return this.activeToolCalls.size === 0
							? Promise.resolve()
							: new Promise((k) => {
									this.allToolCallsCompletedResolver = k;
								});
					}
					checkAndResolveAllToolCallsCompleted() {
						this.activeToolCalls.size === 0 &&
							this.allToolCallsCompletedResolver &&
							(this.allToolCallsCompletedResolver(),
							(this.allToolCallsCompletedResolver = null));
					}
					shouldProcessCodeBlock(k) {
						const L = k.capabilityCodeBlock;
						return !(!L || L.type !== n.ToolCallCodeBlockAlias || !L.content);
					}
					async addSideEffectToCurrentIteration(k) {
						this.currentIterationSideEffects.push(k);
					}
					async runToolCall(k, L) {
						switch (k) {
							case w.ComposerCapabilityRequest_ToolType.RUN_TERMINAL_COMMAND: {
								const { command: D } = L;
								await new Promise((M) => setTimeout(M, 1e4));
								break;
							}
							case w.ComposerCapabilityRequest_ToolType.ADD_FILE_TO_CONTEXT: {
								const { filePath: D, query: M } = L,
									N = this.workspaceContextService.resolveRelativePath(D);
								if (
									(await new Promise((R) => setTimeout(R, 3e3)),
									!(await this.fileService.exists(N)) &&
										this.currentParams !== null)
								)
									throw new Error(
										`[composer] File from Tool Call does not exist: ${D}`,
									);
								this.addSideEffectToCurrentIteration(async () => {
									this.composerService.addContext({
										composerId: this.composerId,
										contextType: "fileSelections",
										value: { uri: N },
										shouldShowPreview: !1,
									});
								}),
									(this.forceIterate = !0),
									(this.instructionFromAI = M),
									(this.mutateRequestCause = "iterate-instructions");
								break;
							}
							case w.ComposerCapabilityRequest_ToolType
								.REMOVE_FILE_FROM_CONTEXT: {
								const { filePath: D } = L,
									M = this.workspaceContextService.resolveRelativePath(D),
									N = this.composerDataService.getComposerData(this.composerId);
								if (N)
									if (
										N.context.fileSelections.findIndex((R) =>
											(0, C.$Ac)(R.uri, M),
										) !== -1
									)
										this.addSideEffectToCurrentIteration(() => {
											const R = this.composerDataService.getComposerData(
												this.composerId,
											);
											if (R) {
												const O = R.context.fileSelections.findIndex((B) =>
													(0, C.$Ac)(B.uri, M),
												);
												O !== -1 &&
													this.composerService.removeContext({
														composerId: this.composerId,
														contextType: "fileSelections",
														index: O,
													});
											}
										});
									else throw new Error("[composer] File not found in context");
								else throw new Error("[composer] Composer not found");
								this.forceIterate = !0;
								break;
							}
							case w.ComposerCapabilityRequest_ToolType
								.SEMANTIC_SEARCH_CODEBASE: {
								const { query: D } = L,
									M = new AbortController(),
									N = this.repositoryService.parallelSearch(
										D,
										p.COMPOSER_SEMANTIC_SEARCH_TOOL_TOP_K,
										p.COMPOSER_SEMANTIC_SEARCH_TOOL_FINAL_K,
										{ fast: !0, raceNRequests: 6, abortSignal: M.signal },
									),
									A = setTimeout(() => {
										console.error(
											"[composer] Aborting tool call semantic search",
										),
											M.abort();
									}, p.COMPOSER_SEMANTIC_SEARCH_TOOL_TIMEOUT),
									R = await N;
								if ((clearTimeout(A), R.length === 0))
									throw new Error(
										"[composer] No results found from semantic search",
									);
								const B = (0, s.dedupeCodeResults)(R).slice(
									0,
									p.COMPOSER_SEMANTIC_SEARCH_TOOL_ONLY_TAKE_TOP_K,
								);
								this.addSideEffectToCurrentIteration(() => {
									for (const U of B) {
										const z =
											this.workspaceContextService.resolveRelativePath(U);
										this.composerService.addContext({
											composerId: this.composerId,
											contextType: "fileSelections",
											value: { uri: z },
											shouldShowPreview: !1,
										});
									}
								}),
									(this.forceIterate = !0);
								break;
							}
							case w.ComposerCapabilityRequest_ToolType.ITERATE: {
								(this.forceIterate = !0),
									(this.instructionFromAI = L.instructions),
									(this.mutateRequestCause = "iterate-instructions");
								break;
							}
							default:
								throw new Error(`[composer] Unsupported tool call type: ${k}`);
						}
					}
					async processCodeBlock(k) {
						const { capabilityCodeBlock: L, aiBubbleId: D, composerId: M } = k;
						if (!L.content)
							throw new Error("[composer] Code block content is undefined");
						const N = (0, e.parseToolCall)(L.content);
						if (!N) throw new Error("[composer] Failed to parse tool call");
						const A = `${D}:${L.codeBlockIdx}`;
						this.activeToolCalls.add(A),
							this.composerDataService.updateComposerCapabilityCodeBlock(
								M,
								D,
								L.codeBlockIdx,
								{ toolCallType: N.type, parsedToolCall: N },
							);
						let R = null;
						n.ToolCallTypesWithDecision.includes(N.type) &&
							(this.composerDataService.updateComposerCapabilityCodeBlock(
								M,
								D,
								L.codeBlockIdx,
								{ status: "pending_decision", toolCallType: N.type },
							),
							(R = await new Promise((B, U) => {
								const z = `${D}:${L.codeBlockIdx}`;
								this.pendingDecisions.set(z, { resolve: B, reject: U });
							})),
							this.composerDataService.updateComposerCapabilityCodeBlock(
								M,
								D,
								L.codeBlockIdx,
								{ decision: R ? "accepted" : "rejected" },
							));
						const O = async () => {
							try {
								if (R === !1) return;
								await this.runToolCall(N.type, N.params);
							} catch (B) {
								throw (
									(console.error("[composer] Error running tool call:", B), B)
								);
							} finally {
								this.activeToolCalls.delete(A),
									this.checkAndResolveAllToolCallsCompleted();
							}
						};
						if (this.isProcessing)
							await new Promise((B) => {
								this.processingQueue.push(async () => {
									await O(), B();
								});
							});
						else {
							this.isProcessing = !0;
							try {
								await O();
							} finally {
								(this.isProcessing = !1), this.processNextInQueue();
							}
						}
					}
					async processNextInQueue() {
						const k = this.processingQueue.shift();
						if (k) {
							this.isProcessing = !0;
							try {
								await k();
							} finally {
								(this.isProcessing = !1), this.processNextInQueue();
							}
						}
					}
					onAborted(k) {
						if (k instanceof $.$9) {
							(this.forceIterate = !1),
								(this.mutateRequestCause = null),
								(this.instructionFromAI = null);
							for (const L of this.processingQueue) L(!0);
							this.processingQueue = [];
						}
					}
					async acceptToolCall(k, L) {
						const D = `${k}:${L}`,
							M = this.pendingDecisions.get(D);
						if (!M)
							throw new Error(
								"[composer] No pending decision found for this code block",
							);
						const { resolve: N } = M;
						this.pendingDecisions.delete(D), N(!0);
					}
					async rejectToolCall(k, L) {
						const D = `${k}:${L}`,
							M = this.pendingDecisions.get(D);
						if (!M)
							throw new Error(
								"[composer] No pending decision found for this code block",
							);
						const { resolve: N } = M;
						this.pendingDecisions.delete(D), N(!1);
					}
					async getLinterErrorsForComposer(k) {
						const L = new Set([
								...Object.keys(k.codeBlockData ?? {}),
								...k.context.fileSelections.map((N) => N.uri.toString()),
							]),
							D = Array.from(L).map((N) => C.URI.parse(N)),
							M = [];
						for (const N of D) {
							const R = this.markerService
								.read({ resource: N })
								.filter((O) => O.severity === m.MarkerSeverity.Error)
								.map(
									(O) =>
										new t.$yF({
											message: O.message,
											source: O.source,
											range: new E.$Ns({
												startPosition: {
													line: O.startLineNumber,
													column: O.startColumn,
												},
												endPosition: {
													line: O.endLineNumber,
													column: O.endColumn,
												},
											}),
											relativeWorkspacePath:
												this.workspaceContextService.asRelativePath(N),
										}),
								);
							if (R.length > 0) {
								const O = new E.$4s({
									relativeWorkspacePath:
										this.workspaceContextService.asRelativePath(N),
									errors: R,
									fileContents: (
										await this.aiService.getCurrentFileInfo(N, {
											actuallyReadFromOverrideURI: !0,
										})
									)?.contents,
								});
								M.push(O);
							}
						}
						return M;
					}
				};
				(e.ToolCall = v),
					(e.ToolCall = v =
						Ne(
							[
								(0, h.autoCancellableAndStatusUpdater)(),
								j(2, g.IComposerDataService),
								j(3, u.IComposerService),
								j(4, d.$ll),
								j(5, r.$Vi),
								j(6, f.$J6b),
								j(7, y.$0zb),
								j(8, m.$aM),
								j(9, o.$Nfc),
							],
							v,
						)),
					(0, a.registerComposerCapability)(
						w.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_CALL,
						v,
					);
				const S = (P) => {
					try {
						const k = JSON.parse(P);
						if (
							typeof k != "object" ||
							k === null ||
							!(k.type in n.TOOL_SCHEMAS)
						)
							return null;
						const L = n.TOOL_SCHEMAS[k.type]?.schema;
						return !L || !(0, e.validateAgainstSchema)(k.params, L)
							? null
							: { type: k.type, params: k.params };
					} catch {
						return null;
					}
				};
				e.parseToolCall = S;
				const I = (P, k) => {
					if (k.type !== "object" || typeof P != "object" || P === null)
						return !1;
					for (const [L, D] of Object.entries(k.properties))
						if (
							(k.required?.includes(L) && !(L in P)) ||
							(L in P && typeof P[L] !== D.type)
						)
							return !1;
					return !0;
				};
				e.validateAgainstSchema = I;
				function T(P) {
					let k = 0;
					for (let L = P.length - 1; L >= 0; L--) {
						const D = P[L];
						if (D.type === i.ConversationMessage_MessageType.HUMAN) {
							if (
								D.capabilities?.some(
									(M) =>
										M.type ===
										w.ComposerCapabilityRequest_ComposerCapabilityType
											.TOOL_CALL,
								)
							)
								k++;
							else if (!D.isCapabilityIteration) break;
						}
					}
					return k;
				}
			},
		);
	var ms =
			(this && this.__addDisposableResource) ||
			function (ce, e, t) {
				if (e != null) {
					if (typeof e != "object" && typeof e != "function")
						throw new TypeError("Object expected.");
					var i, w;
					if (t) {
						if (!Symbol.asyncDispose)
							throw new TypeError("Symbol.asyncDispose is not defined.");
						i = e[Symbol.asyncDispose];
					}
					if (i === void 0) {
						if (!Symbol.dispose)
							throw new TypeError("Symbol.dispose is not defined.");
						(i = e[Symbol.dispose]), t && (w = i);
					}
					if (typeof i != "function")
						throw new TypeError("Object not disposable.");
					w &&
						(i = function () {
							try {
								w.call(this);
							} catch (E) {
								return Promise.reject(E);
							}
						}),
						ce.stack.push({ value: e, dispose: i, async: t });
				} else t && ce.stack.push({ async: !0 });
				return e;
			},
		ps =
			(this && this.__disposeResources) ||
			(function (ce) {
				return function (e) {
					function t(C) {
						(e.error = e.hasError
							? new ce(C, e.error, "An error was suppressed during disposal.")
							: C),
							(e.hasError = !0);
					}
					var i,
						w = 0;
					function E() {
						for (; (i = e.stack.pop()); )
							try {
								if (!i.async && w === 1)
									return (w = 0), e.stack.push(i), Promise.resolve().then(E);
								if (i.dispose) {
									var C = i.dispose.call(i.value);
									if (i.async)
										return (
											(w |= 2),
											Promise.resolve(C).then(E, function (d) {
												return t(d), E();
											})
										);
								} else w |= 1;
							} catch (d) {
								t(d);
							}
						if (w === 1)
							return e.hasError ? Promise.reject(e.error) : Promise.resolve();
						if (e.hasError) throw e.error;
					}
					return E();
				};
			})(
				typeof SuppressedError == "function"
					? SuppressedError
					: function (ce, e, t) {
							var i = new Error(t);
							return (
								(i.name = "SuppressedError"),
								(i.error = ce),
								(i.suppressed = e),
								i
							);
						},
			);
	