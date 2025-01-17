import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/codicons.js';
import './composerCapabilitySchemas.js';
import '../../../../base/common/lifecycle.js';
import './composerData.js';
import '../../../../../proto/aiserver/v1/chat_pb.js';
import '../../../../../external/solid/solid.js';
import '../../../../../external/solid/store.js';
import '../../../../../proto/aiserver/v1/composer_pb.js';
import './composerCapabilitySchemas.js';
import './composerCapabilitySchemas.js';
import '../../../../base/common/types.js';
define(
			de[262],
			he([1, 0, 14, 351, 3, 225, 126, 13, 193, 167, 351, 351, 28]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerCapability =
						e.defaultCapabilityData =
						e.availableCapabilities =
						e.capabilitySchemas =
						e.capabilityTypeLabels =
						e.capabilityTypeIcons =
						e.createEditTrailParamsSignal =
							void 0),
					(e.registerComposerCapability = f),
					(e.getComposerCapabilities = b),
					(e.createComposerCapability = s),
					(e.getComposerCapabilitySchema = l),
					(e.renderCapabilityDataHover = y),
					(e.filterEnabledCapabilities = $),
					(e.sortCapabilities = v),
					(e.getFilteredAndSortedCapabilities = S),
					(e.deserialize = I),
					(e.getCapabilitiesForProcess = T),
					(e.getNonSilentCapabilitiesForGivenProcess = P),
					(e.countCapabilityIterationsFromLastHumanMessageExcludingCurrent = k),
					(e.createSignal = L),
					(e.createStore = D),
					(e.unwrap = M);
				const c = () => {
					const [N, A] = D({ isTrailing: !1, hasModifiedAnyModel: !1 });
					return [() => N, A];
				};
				(e.createEditTrailParamsSignal = c),
					(e.capabilityTypeIcons = {
						[r.ComposerCapabilityRequest_ComposerCapabilityType.UNSPECIFIED]:
							void 0,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.LOOP_ON_LINTS]:
							t.$ak.debugStart,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.LOOP_ON_TESTS]:
							t.$ak.runAll,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.MEGA_PLANNER]:
							t.$ak.symbolEvent,
						[r.ComposerCapabilityRequest_ComposerCapabilityType
							.LOOP_ON_COMMAND]: t.$ak.terminal,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_CALL]:
							t.$ak.tools,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_REVIEW]:
							t.$ak.openPreview,
						[r.ComposerCapabilityRequest_ComposerCapabilityType
							.CONTEXT_PICKING]: t.$ak.squirrel,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.EDIT_TRAIL]:
							t.$ak.history,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.AUTO_CONTEXT]:
							t.$ak.squirrel,
						[r.ComposerCapabilityRequest_ComposerCapabilityType
							.CONTEXT_PLANNER]: t.$ak.squirrel,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_HISTORY]:
							t.$ak.history,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.REMEMBER_THIS]:
							t.$ak.bookmark,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.USES_CODEBASE]:
							t.$ak.repo,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.DECOMPOSER]:
							void 0,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_FORMER]:
							t.$ak.tools,
					}),
					(e.capabilityTypeLabels = {
						[r.ComposerCapabilityRequest_ComposerCapabilityType.UNSPECIFIED]:
							"",
						[r.ComposerCapabilityRequest_ComposerCapabilityType.LOOP_ON_LINTS]:
							"Iterate on Lints",
						[r.ComposerCapabilityRequest_ComposerCapabilityType.LOOP_ON_TESTS]:
							"Loop on Tests",
						[r.ComposerCapabilityRequest_ComposerCapabilityType.MEGA_PLANNER]:
							"Mega Planner",
						[r.ComposerCapabilityRequest_ComposerCapabilityType
							.LOOP_ON_COMMAND]: "Loop on Command",
						[r.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_CALL]:
							"Tool Call",
						[r.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_REVIEW]:
							"Review Changes",
						[r.ComposerCapabilityRequest_ComposerCapabilityType
							.CONTEXT_PICKING]: "Context Picking",
						[r.ComposerCapabilityRequest_ComposerCapabilityType.EDIT_TRAIL]:
							"Edit Trail",
						[r.ComposerCapabilityRequest_ComposerCapabilityType.AUTO_CONTEXT]:
							"Auto Context",
						[r.ComposerCapabilityRequest_ComposerCapabilityType
							.CONTEXT_PLANNER]: "Context Planner",
						[r.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_HISTORY]:
							"Diff History",
						[r.ComposerCapabilityRequest_ComposerCapabilityType.REMEMBER_THIS]:
							"Remember This",
						[r.ComposerCapabilityRequest_ComposerCapabilityType.USES_CODEBASE]:
							"Uses Codebase",
						[r.ComposerCapabilityRequest_ComposerCapabilityType.DECOMPOSER]: "",
						[r.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_FORMER]:
							"Tool Former",
					}),
					(e.capabilitySchemas = {
						[r.ComposerCapabilityRequest_ComposerCapabilityType.UNSPECIFIED]:
							{},
						[r.ComposerCapabilityRequest_ComposerCapabilityType.LOOP_ON_LINTS]:
							i.loopOnLintsSchema,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.LOOP_ON_TESTS]:
							{},
						[r.ComposerCapabilityRequest_ComposerCapabilityType.MEGA_PLANNER]:
							i.megaPlannerSchema,
						[r.ComposerCapabilityRequest_ComposerCapabilityType
							.LOOP_ON_COMMAND]: u.loopOnCommandSchema,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_CALL]:
							u.toolCallSchema,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_REVIEW]:
							i.diffReviewSchema,
						[r.ComposerCapabilityRequest_ComposerCapabilityType
							.CONTEXT_PICKING]: i.contextPickingSchema,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.EDIT_TRAIL]:
							i.editTrailSchema,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.AUTO_CONTEXT]:
							i.autoContextSchema,
						[r.ComposerCapabilityRequest_ComposerCapabilityType
							.CONTEXT_PLANNER]: i.contextPlannerSchema,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_HISTORY]:
							i.diffHistorySchema,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.REMEMBER_THIS]:
							i.rememberThisSchema,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.USES_CODEBASE]:
							i.usesCodebaseSchema,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.DECOMPOSER]: {},
						[r.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_FORMER]:
							a.toolFormerSchema,
					});
				const n = [
					r.ComposerCapabilityRequest_ComposerCapabilityType.UNSPECIFIED,
					r.ComposerCapabilityRequest_ComposerCapabilityType.LOOP_ON_TESTS,
					r.ComposerCapabilityRequest_ComposerCapabilityType.LOOP_ON_COMMAND,
				];
				e.availableCapabilities = Object.values(
					r.ComposerCapabilityRequest_ComposerCapabilityType,
				).filter((N) => typeof N == "number" && !n.includes(N));
				function g(N) {
					const A = {};
					for (const R in N) {
						const O = N[R];
						"defaultValue" in O && (A[R] = O.defaultValue);
					}
					return A;
				}
				e.defaultCapabilityData = Object.fromEntries(
					Object.entries(e.capabilitySchemas).map(([N, A]) => [N, g(A)]),
				);
				class p extends w.$1c {
					constructor(A, R) {
						super(),
							(this.abortController = null),
							(this.composerId = A),
							(this.data = { ...R }),
							([this.isEnabled, this.setIsEnabled] = (0, d.createSignal)(!0));
					}
					isBackgroundOnly() {
						return !1;
					}
					supportsCacheWarming() {
						return !1;
					}
					silentOnStartSubmitChat(A) {
						return !1;
					}
					silentOnBeforeSubmitChat(A) {
						return !1;
					}
					silentRunInPlaceMutateRequestBeforeSubmit(A) {
						return !1;
					}
					silentProcessStream(A) {
						return !1;
					}
					silentOnAfterSubmitChat(A) {
						return !1;
					}
					silentOnComposerSettled(A) {
						return !1;
					}
					silentOnComposerDone(A) {
						return !1;
					}
					shouldRunOnStartSubmitChat(A) {
						return !!this.onStartSubmitChatReturnShouldStop;
					}
					shouldRunOnBeforeSubmitChat(A) {
						return !!this.onBeforeSubmitChat;
					}
					shouldRunInPlaceMutateRequestBeforeSubmit(A) {
						return !!this.runInPlaceMutateRequestBeforeSubmit;
					}
					shouldProcessStream(A) {
						return !!this.processStream;
					}
					shouldProcessCodeBlock(A) {
						return !1;
					}
					shouldRunOnAfterSubmitChat(A) {
						return !!this.onAfterSubmitChat;
					}
					shouldRunOnComposerSettled(A) {
						return !!this.onComposerSettledReturnShouldLoop;
					}
					shouldRunOnComposerDone(A) {
						return !!this.onComposerDone;
					}
					toString() {
						return this.serialize();
					}
					serialize() {
						return JSON.stringify(this.toJSON());
					}
					deserialize(A) {
						const R = JSON.parse(A),
							O = this.constructor;
						return new O(this.composerId, R);
					}
					toJSON() {
						return this.onWillSaveState(), { type: this.type, data: this.data };
					}
					cancel() {
						this.abortController &&
							(this.abortController.abort(), (this.abortController = null));
					}
					onWillSaveState() {}
					onAborted(A) {}
					isAborted() {
						return this.abortController
							? this.abortController.signal.aborted
							: !0;
					}
					getAbortSignal() {
						return (
							this.abortController ||
								(this.abortController = new AbortController()),
							this.abortController.signal
						);
					}
					dispose() {
						this.cancel(), super.dispose();
					}
				}
				e.ComposerCapability = p;
				class o {
					static {
						this.INSTANCE = new o();
					}
					static registerCapability(A, R) {
						this.INSTANCE.capabilitiesMap[A] = R;
					}
					static getCapabilities(A, R, O, B = []) {
						const z = (
								R.applicationUserPersistentStorage.composerState
									.defaultCapabilities ?? []
							).filter((H) => !B.some((q) => q.type === H.type)),
							F = E.HARDCODED_CAPABILITIES.filter(
								(H) =>
									!B.some((q) => q.type === H) && !z.some((q) => q.type === H),
							).map((H) => ({ type: H, data: e.defaultCapabilityData[H] })),
							x = [...B, ...F, ...z]
								.map((H) => {
									const q = this.INSTANCE.capabilitiesMap[H.type];
									if (!q || !this.getSchema(H.type)) return;
									const K = {
										...this.INSTANCE.getDefaultDataForCapability(H.type),
										...(H.data || {}),
									};
									return A.createInstance(q, O, K);
								})
								.filter(h.$tg);
						return S(x);
					}
					static getSchema(A) {
						return e.capabilitySchemas[A];
					}
					static createInstance(A, R, O, B) {
						const U = this.INSTANCE.capabilitiesMap[O];
						if (!U)
							throw new Error(`No constructor found for capability type: ${O}`);
						return A.createInstance(U, R, B);
					}
					getDefaultDataForCapability(A) {
						return e.defaultCapabilityData[A] || {};
					}
					constructor() {
						this.capabilitiesMap = {};
					}
				}
				function f(N, A) {
					o.registerCapability(N, A);
				}
				function b(N, A, R, O = []) {
					return o.getCapabilities(N, A, R, O);
				}
				function s(N, A, R, O) {
					return o.createInstance(N, A, R, O);
				}
				function l(N) {
					return o.getSchema(N);
				}
				function y(N) {
					return `\`\`\`json
${JSON.stringify(N.data, null, 2)}
\`\`\``;
				}
				function $(N) {
					return N.filter((A) => A.isEnabled);
				}
				function v(N) {
					return N.sort((A, R) => A.priority - R.priority);
				}
				function S(N) {
					return v($(N));
				}
				function I(N, A, R) {
					return o.createInstance(N, A, R.type, R.data);
				}
				function T(N, A, R) {
					const O = Array.isArray(A) ? A : [A];
					if (
						O.includes("process-codeblock") &&
						(!("capabilityCodeBlock" in R) || !("aiBubbleId" in R))
					)
						throw new Error(
							"[composer] process-codeblock status requires a capabilityCodeBlock and aiBubbleId",
						);
					if (O.includes("after-submit-chat") && !("aiBubbleId" in R))
						throw new Error(
							"[composer] after-submit-chat status requires an aiBubbleId",
						);
					if (O.includes("process-stream") && !("stream" in R))
						throw new Error(
							"[composer] process-stream status requires a stream",
						);
					return N.filter((U) =>
						!U.isEnabled() ||
						(R.isCacheWarming === !0 && U.supportsCacheWarming?.() !== !0)
							? !1
							: O.some((z) => {
									switch (z) {
										case "mutate-request":
											return (
												!!U.runInPlaceMutateRequestBeforeSubmit &&
												U.shouldRunInPlaceMutateRequestBeforeSubmit(R)
											);
										case "start-submit-chat":
											return (
												!!U.onStartSubmitChatReturnShouldStop &&
												U.shouldRunOnStartSubmitChat(R)
											);
										case "before-submit-chat":
											return (
												!!U.onBeforeSubmitChat &&
												U.shouldRunOnBeforeSubmitChat(R)
											);
										case "after-submit-chat":
											return (
												!!U.onAfterSubmitChat && U.shouldRunOnAfterSubmitChat(R)
											);
										case "after-apply":
											return !!U.onAfterApply;
										case "process-codeblock":
											return (
												!!U.processCodeBlock && U.shouldProcessCodeBlock(R)
											);
										case "composer-settled":
											return (
												!!U.onComposerSettledReturnShouldLoop &&
												U.shouldRunOnComposerSettled(R)
											);
										case "composer-done":
											return !!U.onComposerDone && U.shouldRunOnComposerDone(R);
										case "process-stream":
											return !!U.processStream && U.shouldProcessStream(R);
										default:
											return !1;
									}
								}),
					);
				}
				function P(N, A, R) {
					if (A === "after-submit-chat" && !("aiBubbleId" in R))
						throw new Error(
							"[composer] after-submit-chat status requires an aiBubbleId",
						);
					if (A === "process-codeblock" && !("aiBubbleId" in R))
						throw new Error(
							"[composer] process-codeblock status requires an aiBubbleId",
						);
					return N.filter((O) => {
						switch (A) {
							case "mutate-request":
								return (
									!!O.runInPlaceMutateRequestBeforeSubmit &&
									!O.silentRunInPlaceMutateRequestBeforeSubmit(R)
								);
							case "start-submit-chat":
								return (
									!!O.onStartSubmitChatReturnShouldStop &&
									!O.silentOnStartSubmitChat(R)
								);
							case "before-submit-chat":
								return !!O.onBeforeSubmitChat && !O.silentOnBeforeSubmitChat(R);
							case "composer-settled":
								return (
									!!O.onComposerSettledReturnShouldLoop &&
									!O.silentOnComposerSettled(R)
								);
							case "after-submit-chat":
								return !!O.onAfterSubmitChat && !O.silentOnAfterSubmitChat(R);
							case "composer-done":
								return !!O.onComposerDone && !O.silentOnComposerDone(R);
							default:
								return !1;
						}
					});
				}
				function k(N) {
					let A = 0,
						R = -1;
					for (let O = N.length - 1; O >= 0; O--)
						if (
							N[O].type === C.ConversationMessage_MessageType.HUMAN &&
							!N[O].isCapabilityIteration
						) {
							R = O;
							break;
						}
					if (R === -1) return 0;
					for (let O = R + 1; O < N.length; O++)
						N[O].isCapabilityIteration === !0 && A++;
					return A - 1;
				}
				function L(N) {
					return (0, d.createSignal)(N);
				}
				function D(N) {
					return (0, m.createStore)(N);
				}
				function M(N) {
					return (0, m.unwrap)(N);
				}
			},
		),
		