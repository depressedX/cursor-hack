import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/chat_pb.js';
import '../../../../../../proto/aiserver/v1/composer_pb.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../editor/common/languages/language.js';
import '../../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../../platform/workspace/common/workspace.js';
import './serializeToolformerBubbleData.js';
import '../components/ComposerToolFormerMessage.js';
import '../composer.js';
import '../composerCapabilities.js';
import '../composerCapabilityDecorators.js';
import '../composerCapabilitySchemas.js';
import '../composerData.js';
import '../composerDataService.js';
import '../composerUtilsService.js';
import '../../../terminal/browser/terminalExecutionService.js';
define(
			de[4344],
			he([
				1, 0, 126, 167, 124, 6, 3, 61, 45, 25, 3033, 4343, 219, 262, 395, 351,
				225, 209, 426, 617,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*chat_pb*/,
 i /*composer_pb*/,
 w /*tools_pb*/,
 E /*event*/,
 C /*lifecycle*/,
 d /*language*/,
 m /*reactiveStorageService*/,
 r /*workspace*/,
 u /*serializeToolformerBubbleData*/,
 a /*ComposerToolFormerMessage*/,
 h /*composer*/,
 c /*composerCapabilities*/,
 n /*composerCapabilityDecorators*/,
 g /*composerCapabilitySchemas*/,
 p /*composerData*/,
 o /*composerDataService*/,
 f /*composerUtilsService*/,
 b /*terminalExecutionService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ToolFormer = void 0);
				const s = 5e3;
				let l = class extends c.ComposerCapability {
					getToolCategory($) {
						for (const [v, S] of this.toolCategories) if (S.has($)) return v;
					}
					areToolsSimilar($, v) {
						if ($ === v) return !0;
						const S = this.getToolCategory($),
							I = this.getToolCategory(v);
						return S !== void 0 && S === I;
					}
					constructor($, v, S, I, T, P, k, L, D) {
						super($, v),
							(this.composerDataService = S),
							(this.composerService = I),
							(this.terminalExecutionService = T),
							(this.reactiveStorageService = P),
							(this.composerUtilsService = k),
							(this.workspaceContextService = L),
							(this.languageService = D),
							(this.priority = 1),
							(this.type =
								i.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_FORMER),
							(this.name = "Tool Former"),
							(this.schema = g.toolFormerSchema),
							(this._disposableStore = new C.$Zc()),
							(this.toolCategories = new Map([
								[
									"file_modification",
									new Set([
										w.ClientSideToolV2.EDIT_FILE,
										w.ClientSideToolV2.PARALLEL_APPLY,
									]),
								],
							])),
							(this._onTerminalPoppedOutIntoBackground = new E.$re()),
							(this.onTerminalPoppedOutIntoBackground =
								this._onTerminalPoppedOutIntoBackground.event);
						let M;
						try {
							M = this.parseBubbleDataMap(this.data.bubbleDataMap || "{}");
						} catch (N) {
							console.error("[composer] unable to parse bubbleDataMap", N);
						}
						([this.toolFormerData, this.setToolFormerData] = (0, c.createStore)(
							M || {},
						)),
							([this.bubbleCounter, this.setBubbleCounter] = (0,
							c.createSignal)(0)),
							([this.pendingDecisions, this.setPendingDecisions] = (0,
							c.createSignal)({
								userInteractionBubbleIds: [],
								pendingDecisions: {},
							})),
							([
								this.shouldShowCancelAndResume,
								this.setShouldShowCancelAndResume,
							] = (0, c.createSignal)(!1));
					}
					silentOnBeforeSubmitChat($) {
						return !0;
					}
					async onBeforeSubmitChat($) {
						const v = this.composerDataService.getComposerData(this.composerId);
						if (!v) return;
						this.clearShowCancelAndResume();
						const S = this.pendingDecisions();
						if (
							(Object.entries(S.pendingDecisions).forEach(([L, D]) => {
								const M = D;
								M.blocking && this.rejectToolCall(M.toolCallId);
							}),
							this.composerDataService.getLastBubble(this.composerId)?.type ===
								t.ConversationMessage_MessageType.AI)
						)
							return;
						const I = v.conversation.findIndex(
							(L) => L.bubbleId === $.humanBubbleId,
						);
						if (I === -1) return;
						v.conversation
							.slice(I + 1)
							.map((L) => L.bubbleId)
							.forEach((L) => {
								L in this.toolFormerData && this.deleteBubbleData(L);
							});
						const P = {},
							k = [];
						Object.entries(S.pendingDecisions).forEach(([L, D]) => {
							const M = D;
							M.blocking || ((P[L] = M), k.push(L));
						}),
							this.setPendingDecisions({
								userInteractionBubbleIds: k,
								pendingDecisions: P,
							});
					}
					parseBubbleDataMap($) {
						let v;
						try {
							if (
								((v = (0, u.parseToolformerBubbleDataMap)($)),
								typeof v != "object")
							)
								throw new Error("[composer] unable to parse bubbleDataMap");
							for (const [S, I] of Object.entries(v))
								if (
									(I.status === "loading" && (v[S].status = "cancelled"),
									I.tool === w.ClientSideToolV2.RUN_TERMINAL_COMMAND_V2)
								) {
									const T = I.additionalData?.status;
									(T === "pending" || T === "loading" || T === "running") &&
										v[S].additionalData &&
										(v[S].additionalData.status = "cancelled");
								}
						} catch (S) {
							console.error("[composer] unable to parse bubbleDataMap", S);
						}
						return v || {};
					}
					async getSessionIdAndTerminalInstance() {
						const $ = await this.composerDataService.getComposerHandleById(
							this.composerId,
						);
						let v = 1e7;
						$ && (v = $.data.conversation.length);
						try {
							if (this._sessionId && v > (this._sessionIdNumBubbles ?? 0)) {
								const T = this.terminalExecutionService.getTerminalInstance(
									this._sessionId,
								);
								if (T)
									return { sessionId: this._sessionId, terminalInstance: T };
							}
							this.clearSessionId();
							const { sessionId: S, terminalInstance: I } =
								await this.terminalExecutionService.startSession(void 0);
							return (
								(this._sessionId = S), { sessionId: S, terminalInstance: I }
							);
						} finally {
							(this._sessionIdNumBubbles = v), $?.dispose();
						}
					}
					popOutTerminalIntoBackground() {
						const $ = this._sessionId;
						$ &&
							(this._onTerminalPoppedOutIntoBackground.fire($),
							this.clearSessionId());
					}
					clearSessionId() {
						if (this._sessionId) {
							try {
								this.terminalExecutionService.endSession(this._sessionId);
							} catch {}
							this._sessionId = void 0;
						}
					}
					dispose() {
						this._disposableStore.dispose(),
							this.shouldShowCancelAndResumeTimeout &&
								(clearTimeout(this.shouldShowCancelAndResumeTimeout),
								(this.shouldShowCancelAndResumeTimeout = void 0)),
							this.clearSessionId(),
							super.dispose();
					}
					getBubbleData($) {
						return this.toolFormerData[$];
					}
					getBubbleDataAsPlainText($) {
						const v = this.getBubbleData($);
						if (!v) return "";
						switch (v.tool) {
							case w.ClientSideToolV2.EDIT_FILE: {
								const S = v.additionalData?.version,
									I = v.params?.relativeWorkspacePath;
								if (S === void 0 || I === void 0) return "";
								const T = this.workspaceContextService.resolveRelativePath(I),
									P = this.composerDataService.getComposerCodeBlock(
										this.composerId,
										T,
										S,
									);
								return P
									? `\`\`\`${(this.languageService.getLanguageName(P.languageId ?? "") ?? "plaintext").toLowerCase()}:${I}
${P.content}
\`\`\``
									: "";
							}
							case w.ClientSideToolV2.RUN_TERMINAL_COMMAND_V2:
								return `\`\`\`bash
${v.params?.command || ""}
\`\`\``;
							case w.ClientSideToolV2.READ_FILE:
								return `Read file: ${v.params?.relativeWorkspacePath || ""}`;
							case w.ClientSideToolV2.READ_FILE_FOR_IMPORTS:
								return "Read files...";
							case w.ClientSideToolV2.READ_SEMSEARCH_FILES:
								return "Search files...";
						}
						return "Ran tool";
					}
					getLastBubbleIdWithTerminalSessionIdShownReactive($) {
						const v = this.bubbleCounter();
						for (const [S, I] of Object.entries(this.toolFormerData).reverse())
							if (
								I.tool === w.ClientSideToolV2.RUN_TERMINAL_COMMAND_V2 &&
								I.additionalData?.sessionId === $ &&
								["running", "error", "cancelled", "success"].includes(
									I.additionalData?.status,
								)
							)
								return S;
					}
					deleteBubbleData($) {
						this.setToolFormerData($, void 0), delete this.toolFormerData[$];
					}
					setBubbleData($, v) {
						try {
							this.setToolFormerData($, (S) => ({
								...S,
								...v,
								additionalData: { ...S?.additionalData, ...v.additionalData },
							}));
						} catch {}
					}
					onWillSaveState() {
						this.data.bubbleDataMap = (0, u.stringifyToolformerBubbleDataMap)(
							this.toolFormerData,
						);
					}
					renderAIBubble() {
						return a.ComposerToolFormerMessage;
					}
					async processStream($) {
						const v = this.composerDataService.getComposerData(this.composerId);
						if (!v) throw new Error("[composer] Composer data not found");
						return (
							(this._params = $),
							async function* () {
								for await (const I of $.stream)
									if (!(I === null || typeof I != "object")) {
										if (I.toolCall) {
											const T = I.toolCall.toolCallId,
												P = this.getOrCreateBubbleId({
													toolCallId: T,
													toolCallType: I.toolCall.tool,
													params: void 0,
													rawArgs: I.toolCall.rawArgs,
													name: I.toolCall.name,
												});
											I.toolCall.error !== void 0 &&
												I.toolCall.error !== null &&
												this.setBubbleData(P, {
													status: "error",
													error: I.toolCall.error,
												});
										}
										if (I.shouldBreakAiMessage) {
											const T = [...(v?.conversation ?? [])]
												.reverse()
												.find(
													(P) =>
														P.type === t.ConversationMessage_MessageType.AI,
												)?.bubbleId;
											T &&
												this.composerDataService.updateComposerData(
													this.composerId,
													{
														generatingBubbleIds:
															v?.generatingBubbleIds?.filter((P) => P !== T) ??
															[],
													},
												);
										}
										I.finalToolResult?.result !== void 0 &&
											this.handleToolResult(
												I.finalToolResult.result,
												I.finalToolResult.toolCallId,
											),
											I.partialToolCall &&
												this.getOrCreateBubbleId({
													toolCallId: I.partialToolCall.toolCallId,
													toolCallType: I.partialToolCall.tool,
													name: I.partialToolCall.name,
													params: void 0,
													rawArgs: void 0,
												}),
											yield I;
									}
							}.bind(this)()
						);
					}
					getBubbleDataByToolCallId($) {
						for (const [v, S] of Object.entries(this.toolFormerData))
							if (S.toolCallId === $) return S;
					}
					getBubbleIdByToolCallId($) {
						for (const [v, S] of Object.entries(this.toolFormerData))
							if (S.toolCallId === $) return v;
					}
					createBubbleFromToolCall({
						toolCallId: $,
						toolCallType: v,
						params: S,
						rawArgs: I,
						name: T,
					}) {
						const P = this.composerDataService.getComposerData(this.composerId);
						if (!P || !this._params)
							throw new Error("[composer] Composer data not found");
						let k = {
							...(0, p.createDefaultConversationMessage)(),
							codeBlocks: [],
							type: t.ConversationMessage_MessageType.AI,
							text: "",
							isThought: !1,
							isCapabilityIteration: !1,
							capabilityType:
								i.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_FORMER,
						};
						const L = S?.value ? this.createInitialDataForTool(v, S) : void 0;
						this.setBubbleData(k.bubbleId, {
							tool: v,
							toolCallId: $,
							status: "loading",
							rawArgs: I,
							name: T,
							...L,
						}),
							this.setBubbleCounter((A) => A + 1);
						const D = [...P.conversation];
						let M = {
							...(0, p.createDefaultConversationMessage)(),
							codeBlocks: [],
							type: t.ConversationMessage_MessageType.AI,
							text: "",
							isThought: this._params.submitChatProps.extra?.isThought,
							isCapabilityIteration:
								this._params.submitChatProps.extra?.isCapabilityIteration,
						};
						const N = P.conversation[P.conversation.length - 1];
						return (
							N && N.text === "" && D.pop(),
							D.push(k, M),
							this.composerDataService.updateComposerDataSetStore(
								this.composerId,
								(A) =>
									A("generatingBubbleIds", (R) => [
										...(R || []).filter((O) => O !== N?.bubbleId),
										M.bubbleId,
									]),
							),
							this.composerDataService.updateComposerData(this.composerId, {
								conversation: D,
							}),
							p.TOOLS_WITH_CHECKPOINTS.includes(v) &&
								this.composerUtilsService
									.createCurrentCheckpoint(this.composerId)
									.then((A) => {
										A &&
											this.composerDataService.updateComposerBubble(
												this.composerId,
												k.bubbleId,
												{ checkpoint: A },
											);
									}),
							k.bubbleId
						);
					}
					getOrCreateBubbleId({
						toolCallId: $,
						toolCallType: v,
						params: S,
						rawArgs: I,
						name: T,
					}) {
						const P = this.getBubbleIdByToolCallId($);
						return P
							? (this.setBubbleData(P, {
									...(I ? { rawArgs: I } : {}),
									...(T ? { name: T } : {}),
									...(S?.value ? this.createInitialDataForTool(v, S) : {}),
								}),
								P)
							: this.createBubbleFromToolCall({
									toolCallId: $,
									toolCallType: v,
									params: S,
									rawArgs: I,
									name: T,
								});
					}
					startShowCancelAndResumeTimeout($ = !1) {
						$ ||
							(this.shouldShowCancelAndResumeTimeout &&
								clearTimeout(this.shouldShowCancelAndResumeTimeout),
							(this.shouldShowCancelAndResumeTimeout = setTimeout(() => {
								this.setShouldShowCancelAndResume(!0);
							}, s)));
					}
					shouldUseYoloMode() {
						return (
							this.reactiveStorageService.applicationUserPersistentStorage
								.composerState.useYoloMode ?? !1
						);
					}
					handleInitialToolCall({
						toolCallId: $,
						toolCallType: v,
						params: S,
						rawArgs: I,
						name: T,
						blocking: P = !0,
						isStreaming: k = !1,
					}) {
						if (
							!this.composerDataService.getComposerData(this.composerId) ||
							!this._params
						)
							throw new Error("[composer] Composer data not found");
						return (
							this.getOrCreateBubbleId({
								toolCallId: $,
								toolCallType: v,
								params: S,
								rawArgs: I,
								name: T,
							}),
							Promise.resolve(!0)
						);
					}
					addPendingDecision($, v, S, I, T = !0) {
						return (
							this.setPendingDecisions((P) => ({
								userInteractionBubbleIds: [...P.userInteractionBubbleIds, $],
								pendingDecisions: {
									...P.pendingDecisions,
									[$]: {
										decide: I,
										toolCallId: S,
										clientSideTool: v,
										accept: () => this.acceptToolCall(S),
										reject: () => this.rejectToolCall(S),
										blocking: T,
									},
								},
							})),
							() => {
								this.setPendingDecisions((P) => {
									const { userInteractionBubbleIds: k, pendingDecisions: L } =
											P,
										{ [$]: D, ...M } = L;
									return {
										userInteractionBubbleIds: k.filter((N) => N !== $),
										pendingDecisions: M,
									};
								});
							}
						);
					}
					acceptToolCall($) {
						console.log("[lukas] toolformer: accepting decision", $);
						const v = this.getBubbleIdByToolCallId($);
						if (v) {
							this.setBubbleData(v, { userDecision: "accepted" });
							const S = this.pendingDecisions().pendingDecisions[v];
							S &&
								(S.decide(!0),
								console.log("[lukas] toolformer: accepted decision", $),
								this.setPendingDecisions((I) => {
									const { userInteractionBubbleIds: T, pendingDecisions: P } =
											I,
										{ [v]: k, ...L } = P;
									return {
										userInteractionBubbleIds: T.filter((D) => D !== v),
										pendingDecisions: L,
									};
								}));
						}
					}
					rejectToolCall($) {
						console.log("[lukas] toolformer: rejecting decision", $);
						const v = this.getBubbleIdByToolCallId($);
						if (v) {
							this.setBubbleData(v, {
								userDecision: "rejected",
								status: "cancelled",
							});
							const S = this.pendingDecisions().pendingDecisions[v];
							S &&
								(S.decide(!1),
								console.log("[lukas] toolformer: rejected decision", $),
								this.setPendingDecisions((I) => {
									const { userInteractionBubbleIds: T, pendingDecisions: P } =
											I,
										{ [v]: k, ...L } = P;
									return {
										userInteractionBubbleIds: T.filter((D) => D !== v),
										pendingDecisions: L,
									};
								}));
						}
					}
					getPendingUserDecisionGroup() {
						return () => {
							const $ = this.pendingDecisions(),
								v = $.userInteractionBubbleIds;
							if (v.length === 0) return [];
							const S = [];
							for (const I of v) {
								const T = $.pendingDecisions[I];
								if (T)
									if (
										S.length === 0 ||
										this.areToolsSimilar(
											S[S.length - 1].clientSideTool,
											T.clientSideTool,
										)
									)
										S.push(T);
									else break;
							}
							return S;
						};
					}
					getIsBlockingUserDecision() {
						return () => {
							const $ = this.pendingDecisions(),
								v = $.userInteractionBubbleIds;
							return v.length === 0
								? !1
								: v.some((S) => $.pendingDecisions[S]?.blocking);
						};
					}
					handleToolResult($, v, S = !0) {
						const I = this.getBubbleIdByToolCallId(v);
						if (!I) throw new Error("[composer] ToolFormer: bubble not found");
						const T = this.getBubbleData(I);
						if (!T)
							throw new Error("[composer] ToolFormer: bubble data not found");
						if (
							(S && this.clearShowCancelAndResume(),
							$.tool === T.tool && $.result.value !== void 0)
						)
							this.setBubbleData(I, {
								result: $.result.value,
								status: S ? "completed" : T.status,
							});
						else
							throw (
								(this.setBubbleData(I, { status: "error" }),
								new Error("[composer] ToolFormer: tool types do not match"))
							);
					}
					handleToolError($) {
						this.setToolFormerData((v) => {
							const S = {};
							for (const [I, T] of Object.entries(v))
								T.status !== "completed" &&
									(S[I] = {
										...T,
										additionalData: { ...T?.additionalData, status: "error" },
									});
							return S;
						});
					}
					createInitialDataForTool($, v) {
						switch ($) {
							case w.ClientSideToolV2.READ_SEMSEARCH_FILES: {
								if (v.case !== "readSemsearchFilesParams")
									throw new Error(
										"[composer] ToolFormer: Invalid params for READ_SEMSEARCH_FILES",
									);
								return {
									params: v.value,
									result: void 0,
									additionalData: void 0,
								};
							}
							case w.ClientSideToolV2.READ_FILE_FOR_IMPORTS: {
								if (v.case !== "readFileForImportsParams")
									throw new Error(
										"[composer] ToolFormer: Invalid params for READ_FILE_FOR_IMPORTS",
									);
								return {
									params: v.value,
									result: void 0,
									additionalData: void 0,
								};
							}
							case w.ClientSideToolV2.RIPGREP_SEARCH: {
								if (v.case !== "ripgrepSearchParams")
									throw new Error(
										"[composer] ToolFormer: Invalid params for RIPGREP_SEARCH",
									);
								return {
									params: v.value,
									result: void 0,
									additionalData: void 0,
								};
							}
							case w.ClientSideToolV2.FILE_SEARCH: {
								if (v.case !== "fileSearchParams")
									throw new Error(
										"[composer] ToolFormer: Invalid params for FILE_SEARCH",
									);
								return {
									params: v.value,
									result: void 0,
									additionalData: void 0,
								};
							}
							case w.ClientSideToolV2.RUN_TERMINAL_COMMAND_V2: {
								if (v.case !== "runTerminalCommandV2Params")
									throw new Error(
										"[composer] ToolFormer: Invalid params for RUN_TERMINAL_COMMAND",
									);
								return {
									params: v.value,
									result: void 0,
									additionalData: { status: "pending" },
								};
							}
							case w.ClientSideToolV2.RUN_TERMINAL_COMMAND: {
								if (v.case !== "runTerminalCommandParams")
									throw new Error(
										"[composer] ToolFormer: Invalid params for RUN_TERMINAL_COMMAND",
									);
								return {
									params: v.value,
									result: void 0,
									additionalData: void 0,
								};
							}
							case w.ClientSideToolV2.READ_FILE: {
								if (v.case !== "readFileParams")
									throw new Error(
										"[composer] ToolFormer: Invalid params for READ_FILE",
									);
								return {
									params: v.value,
									result: void 0,
									additionalData: void 0,
								};
							}
							case w.ClientSideToolV2.LIST_DIR: {
								if (v.case !== "listDirParams")
									throw new Error(
										"[composer] ToolFormer: Invalid params for LIST_DIR",
									);
								return {
									params: v.value,
									result: void 0,
									additionalData: void 0,
								};
							}
							case w.ClientSideToolV2.EDIT_FILE: {
								if (v.case !== "editFileParams")
									throw new Error(
										"[composer] ToolFormer: Invalid params for EDIT_FILE",
									);
								return { params: v.value, result: void 0, additionalData: {} };
							}
							case w.ClientSideToolV2.SEMANTIC_SEARCH_FULL: {
								if (v.case !== "semanticSearchFullParams")
									throw new Error(
										"[composer] ToolFormer: Invalid params for SEMANTIC_SEARCH_FULL",
									);
								return {
									params: v.value,
									result: void 0,
									additionalData: void 0,
								};
							}
							case w.ClientSideToolV2.CREATE_FILE: {
								if (v.case !== "createFileParams")
									throw new Error(
										"[composer] ToolFormer: Invalid params for CREATE_FILE",
									);
								return {
									params: v.value,
									result: void 0,
									additionalData: void 0,
								};
							}
							case w.ClientSideToolV2.DELETE_FILE: {
								if (v.case !== "deleteFileParams")
									throw new Error(
										"[composer] ToolFormer: Invalid params for DELETE_FILE",
									);
								return {
									params: v.value,
									result: new w.$Iy(),
									additionalData: void 0,
								};
							}
							case w.ClientSideToolV2.REAPPLY: {
								if (v.case !== "reapplyParams")
									throw new Error(
										"[composer] ToolFormer: Invalid params for REAPPLY",
									);
								return {
									params: v.value,
									result: void 0,
									additionalData: void 0,
								};
							}
							case w.ClientSideToolV2.PARALLEL_APPLY: {
								if (v.case !== "parallelApplyParams")
									throw new Error(
										"[composer] ToolFormer: Invalid params for PARALLEL_APPLY",
									);
								return {
									params: v.value,
									result: void 0,
									additionalData: void 0,
								};
							}
							case w.ClientSideToolV2.UNSPECIFIED:
								return {
									params: void 0,
									result: void 0,
									additionalData: void 0,
								};
							case w.ClientSideToolV2.GET_RELATED_FILES: {
								if (v.case !== "getRelatedFilesParams")
									throw new Error(
										"[composer] ToolFormer: Invalid params for GET_RELATED_FILES",
									);
								return {
									params: v.value,
									result: void 0,
									additionalData: void 0,
								};
							}
							default:
								return $;
						}
					}
					updateToolCallParams($, v) {
						const S = this.getBubbleIdByToolCallId($);
						if (!S) {
							console.error(
								`[ToolFormer] No bubble found for tool call ID: ${$}`,
							);
							return;
						}
						this.setToolFormerData((I) => {
							const T = I[S];
							return T
								? { ...I, [S]: { ...T, params: { ...T.params, ...v } } }
								: (console.error(
										`[ToolFormer] No bubble data found for bubble ID: ${S}`,
									),
									I);
						});
					}
					cancel() {
						super.cancel(), this.clearShowCancelAndResume();
					}
					clearShowCancelAndResume() {
						this.shouldShowCancelAndResumeTimeout &&
							(clearTimeout(this.shouldShowCancelAndResumeTimeout),
							(this.shouldShowCancelAndResumeTimeout = void 0)),
							this.setShouldShowCancelAndResume(!1);
					}
					setLoadingToolsToCancelled() {
						for (const [$, v] of Object.entries(this.toolFormerData))
							v.status === "loading" &&
								this.setBubbleData($, { status: "cancelled" });
					}
					addDisposable($) {
						this._disposableStore.add($);
					}
				};
				(e.ToolFormer = l),
					(e.ToolFormer = l =
						Ne(
							[
								(0, n.autoCancellableAndStatusUpdater)(),
								j(2, o.IComposerDataService),
								j(3, h.IComposerService),
								j(4, b.$Ycc),
								j(5, m.$0zb),
								j(6, f.IComposerUtilsService),
								j(7, r.$Vi),
								j(8, d.$nM),
							],
							l,
						)),
					(0, c.registerComposerCapability)(
						i.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_FORMER,
						l,
					);
			},
		),
		