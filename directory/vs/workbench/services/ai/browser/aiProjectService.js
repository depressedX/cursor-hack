import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './cursorCredsService.js';
import '../../cursorAuth/browser/authenticationService.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../base/common/lifecycle.js';
import '../../../../../proto/aiserver/v1/utils_pb.js';
import '../../aiSettings/browser/aiSettingsService.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageTypes.js';
import '../../../../../proto/aiserver/v1/ai_project_pb.js';
import '../../../../base/common/uuid.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../../proto/aiserver/v1/tools_pb.js';
import '../../aiTasks/browser/aiTaskServiceInterface.js';
import '../../../contrib/aichat/browser/chatData.js';
import '../../../contrib/aichat/browser/aichat.js';
import './aiService.js';
import '../common/toolformerHandlerRegistryService.js';
import '../../../contrib/aichat/browser/chatDataService.js';
import './utils.js';
import '../../../../platform/product/common/productService.js';
import '../../../contrib/composer/browser/utils.js';
define(
			de[1932],
			he([
				1, 0, 5, 477, 232, 45, 3, 83, 315, 205, 1111, 47, 20, 124, 516, 140,
				418, 118, 1011, 337, 191, 62, 246,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*instantiation*/,
				i /*cursorCredsService*/,
				w /*authenticationService*/,
				E /*reactiveStorageService*/,
				C /*lifecycle*/,
				d /*utils_pb*/,
				m /*aiSettingsService*/,
				r /*reactiveStorageTypes*/,
				u /*ai_project_pb*/,
				a /*uuid*/,
				h /*extensions*/,
				c /*tools_pb*/,
				n /*aiTaskServiceInterface*/,
				g /*chatData*/,
				p /*aichat*/,
				o /*aiService*/,
				f /*toolformerHandlerRegistryService*/,
				b /*chatDataService*/,
				s /*utils*/,
				l /*productService*/,
				y /*utils*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ucc = e.$tcc = e.$scc = e.$rcc = void 0);
				const $ = "\u26E2Thought\u2624",
					v = "\u26E2/Thought\u2624";
				(e.$rcc = "<MIRRORED_FILE>"),
					(e.$scc = "</MIRRORED_FILE>"),
					(e.$tcc = (0, t.$Mi)("aiProjectService"));
				let S = class extends C.$1c {
					constructor(T, P, k, L, D, M, N, A, R, O) {
						super(),
							(this.b = T),
							(this.c = P),
							(this.f = k),
							(this.g = L),
							(this.h = D),
							(this.j = M),
							(this.m = N),
							(this.n = A),
							(this.q = R),
							(this.r = O);
					}
					createProject(T, P) {
						throw new Error("Method not implemented.");
					}
					s({ currentTabId: T, assistantBubbleId: P }) {
						const k = { type: "codeInterpreter", bubbleId: P, tabId: T },
							[L, D] = this.m.registerNewGeneration({ metadata: k });
						return { generationUUID: L, abortController: D };
					}
					async createAiProjectClient(T) {
						throw new Error(
							"DEPRECATED. DEPRECATED. DEPRECATED. DEPRECATED. DEPRECATED. DEPRECATED. DEPRECATED.",
						);
					}
					getModelDetails() {
						let T = this.g.getModel() ?? void 0,
							P = this.b.getApiKeyForModel(T);
						const k = this.g.getUseApiKeyForModel(T),
							L = this.b.reactivePrivacyMode(),
							D = this.f.applicationUserPersistentStorage.azureState;
						return (
							(!k || !P) && (P = void 0),
							new d.$Zs({
								apiKey: P,
								modelName: T,
								azureState: D,
								openaiApiBaseUrl:
									this.f.applicationUserPersistentStorage.openAIBaseUrl,
							})
						);
					}
					appendToSolidStore(T, P, k) {
						this.q.setChatData(
							"codeInterpreterTabs",
							({ tabId: L }) => L === T,
							"bubbles",
							({ id: L }) => L === P,
							"text",
							(L) => (L ? L + k : k),
						);
					}
					replaceStringSolidStore(T, P, k) {
						this.q.setChatData(
							"codeInterpreterTabs",
							({ tabId: L }) => L === T,
							"bubbles",
							({ id: L }) => L === P,
							"text",
							k,
						);
					}
					replaceServerChat(T, P, k) {
						this.q.setChatData(
							"codeInterpreterTabs",
							({ tabId: L, tabState: D }) => L === T && D === "codeInterpreter",
							"bubbles",
							({ id: L }) => L === P,
							"serverMessages",
							k,
						);
					}
					getHelperMods({
						currentTabId: T,
						userBubbleId: P,
						assistantBubbleId: k,
					}) {
						return {
							appendAssistant: (N) => this.appendToSolidStore(T, k, N),
							replaceUserServer: (...N) => this.replaceServerChat(T, P, N),
							replaceAssistantServer: (...N) => this.replaceServerChat(T, k, N),
						};
					}
					async *streamWithGenerationHandler(T, P) {
						try {
							for await (const k of T) yield k;
						} catch (k) {
							console.error(k);
						} finally {
							this.f.setNonPersistentStorage("inprogressAIGenerations", (k) =>
								k.filter((L) => L.generationUUID !== P),
							),
								this.q.persistSelectedChat(!0);
						}
					}
					async startProject(
						T,
						{ currentTabId: P, userBubbleId: k, assistantBubbleId: L },
					) {
						if (this.a === void 0)
							throw new Error(
								"DEPRECATED. AiProjectServicePromise is undefined",
							);
						const D = await this.a,
							{ generationUUID: M, abortController: N } = this.s({
								assistantBubbleId: L,
								currentTabId: P,
							}),
							A = this.streamWithGenerationHandler(
								D.aiProjectAgentInit(
									{ prompt: T, modelDetails: this.getModelDetails() },
									{ signal: N.signal, headers: (0, s.$m6b)(M) },
								),
								M,
							),
							{
								appendAssistant: R,
								replaceUserServer: O,
								replaceAssistantServer: B,
							} = this.getHelperMods({
								currentTabId: P,
								userBubbleId: k,
								assistantBubbleId: L,
							});
						this.q.setChatData(
							"codeInterpreterTabs",
							({ tabId: z }) => z === P,
							"additionalData",
							"simpleDescription",
							T,
						);
						let U = !1;
						try {
							for await (const z of A)
								if (z.response.case === "clarification") {
									const F = z.response.value.response;
									F.case === "thought"
										? (U || (R($), (U = !0)), R(F.value))
										: F.case === "output"
											? (U && (R(v), (U = !1)), R(F.value))
											: F.case === "messagePayload" &&
												(O({
													messageType: d.PureMessage_MessageType.USER,
													content: F.value.fullUserMessage,
												}),
												B({
													messageType: d.PureMessage_MessageType.ASSISTANT,
													content: F.value.fullBotMessage,
												}));
								} else if (z.response.case === "repeatClarification")
									return { clarify: z.response.value };
							return { clarify: !1 };
						} finally {
							this.f.setNonPersistentStorage("inprogressAIGenerations", (z) =>
								z.filter((F) => F.generationUUID !== M),
							);
						}
					}
					getPreviousMessages({ currentTabId: T, lastBubbleId: P }, k) {
						const L = this.q.chatData.codeInterpreterTabs.find(
							({ tabId: M }) => M === T,
						)?.bubbles;
						if (L === void 0)
							throw new Error(
								`Could not find bubbles when getting previous project messages! - ${T} - ${P}`,
							);
						const D = [];
						for (const M of L) {
							if (M.id === P) break;
							(k !== void 0 && !k(M)) || D.push(...M.serverMessages);
						}
						return D;
					}
					async clarifyProject(
						T,
						{ currentTabId: P, userBubbleId: k, assistantBubbleId: L },
					) {
						if (this.a === void 0)
							throw new Error(
								"DEPRECATED. AiProjectServicePromise is undefined",
							);
						const D = this.getPreviousMessages({
								currentTabId: P,
								lastBubbleId: k,
							}),
							M = await this.a,
							{ generationUUID: N, abortController: A } = this.s({
								assistantBubbleId: L,
								currentTabId: P,
							}),
							R = this.streamWithGenerationHandler(
								M.aiProjectClarification(
									{
										modelDetails: this.getModelDetails(),
										previousMessages: D,
										clarificationResponse: T,
									},
									{ signal: A.signal, headers: (0, s.$m6b)(N) },
								),
								N,
							),
							{
								appendAssistant: O,
								replaceUserServer: B,
								replaceAssistantServer: U,
							} = this.getHelperMods({
								currentTabId: P,
								userBubbleId: k,
								assistantBubbleId: L,
							});
						let z = !1;
						for await (const F of R)
							if (F.response.case === "clarification") {
								const x = F.response.value.response;
								x.case === "thought"
									? (z || (O($), (z = !0)), O(x.value))
									: x.case === "output"
										? (z && (O(v), (z = !1)), O(x.value))
										: x.case === "messagePayload" &&
											(B({
												messageType: d.PureMessage_MessageType.USER,
												content: x.value.fullUserMessage,
											}),
											U({
												messageType: d.PureMessage_MessageType.ASSISTANT,
												content: x.value.fullBotMessage,
											}));
							} else if (F.response.case === "repeatClarification")
								return { clarify: F.response.value };
						return { clarify: !1 };
					}
					async getProjectPlan(T, P) {
						if (this.a === void 0)
							throw new Error(
								"DEPRECATED. AiProjectServicePromise is undefined",
							);
						const k = this.getPreviousMessages({
								currentTabId: T,
								lastBubbleId: P,
							}),
							{ appendAssistant: L, replaceAssistantServer: D } =
								this.getHelperMods({
									currentTabId: T,
									userBubbleId: P,
									assistantBubbleId: P,
								}),
							M = await this.a,
							{ generationUUID: N, abortController: A } = this.s({
								assistantBubbleId: P,
								currentTabId: T,
							}),
							R = this.streamWithGenerationHandler(
								M.aiProjectPlan(
									{ modelDetails: this.getModelDetails(), previousMessages: k },
									{ signal: A.signal, headers: (0, s.$m6b)(N) },
								),
								N,
							);
						let O = "",
							B = !1;
						for await (const U of R) {
							const z = U.response;
							z.case === "thought"
								? (B || (L($), (B = !0)), L(z.value))
								: z.case === "output"
									? (B && (L(v), (B = !1)), L(z.value), (O += z.value))
									: z.case === "messagePayload" &&
										D(
											{
												messageType: d.PureMessage_MessageType.USER,
												content: z.value.fullUserMessage,
											},
											{
												messageType: d.PureMessage_MessageType.ASSISTANT,
												content: z.value.fullBotMessage,
											},
										);
						}
						this.q.setChatData(
							"codeInterpreterTabs",
							({ tabId: U }) => U === T,
							"additionalData",
							"aiProjectPlan",
							O,
						),
							B && L(v),
							L(`

Any feedback/suggestions on the spec?

`);
					}
					async getProjectPlanFeedback(
						T,
						{ currentTabId: P, assistantBubbleId: k, userBubbleId: L },
					) {
						if (this.a === void 0)
							throw new Error(
								"DEPRECATED. AiProjectServicePromise is undefined",
							);
						const D = this.getPreviousMessages({
								currentTabId: P,
								lastBubbleId: L,
							}),
							M = await this.a,
							{ generationUUID: N, abortController: A } = this.s({
								assistantBubbleId: k,
								currentTabId: P,
							}),
							R = this.streamWithGenerationHandler(
								M.aiProjectPlanFeedback(
									{
										modelDetails: this.getModelDetails(),
										previousMessages: D,
										feedbackOrProgress: T,
									},
									{ signal: A.signal, headers: (0, s.$m6b)(N) },
								),
								N,
							);
						let O = !1;
						const {
							appendAssistant: B,
							replaceUserServer: U,
							replaceAssistantServer: z,
						} = this.getHelperMods({
							currentTabId: P,
							userBubbleId: L,
							assistantBubbleId: k,
						});
						let F = !1,
							x = "";
						for await (const H of R)
							if (H.response.case === "revisedPlan") {
								const q = H.response.value.response;
								q.case === "thought"
									? (F || (B($), (F = !0)), B(q.value))
									: q.case === "output"
										? (F && (B(v), (F = !1)), B(q.value), (x += q.value))
										: q.case === "messagePayload" &&
											(U({
												messageType: d.PureMessage_MessageType.USER,
												content: q.value.fullUserMessage,
											}),
											z({
												messageType: d.PureMessage_MessageType.ASSISTANT,
												content: q.value.fullBotMessage,
											}));
							} else
								H.response.case === "repeatFeedback" && (O = H.response.value);
						return (
							O &&
								(this.q.setChatData(
									"codeInterpreterTabs",
									({ tabId: H }) => H === P,
									"additionalData",
									"aiProjectPlan",
									(H) =>
										H
											? H +
												`

_____

After incorporating feedback:

` +
												x
											: x,
								),
								B(`

Any further feedback on the revised plan?

`)),
							console.log(
								"FULL PLAN",
								this.q.chatData.codeInterpreterTabs.find(
									({ tabId: H }) => H === P,
								)?.additionalData.aiProjectPlan,
							),
							{ repeatStep: O }
						);
					}
					async getBreakdown(T, P) {
						if (this.a === void 0)
							throw new Error(
								"DEPRECATED. AiProjectServicePromise is undefined",
							);
						let k = 0;
						const {
								appendAssistant: L,
								replaceAssistantServer: D,
								replaceUserServer: M,
							} = this.getHelperMods({
								currentTabId: T,
								userBubbleId: P,
								assistantBubbleId: P,
							}),
							N = (H) =>
								this.q.setChatData(
									"codeInterpreterTabs",
									({ tabId: q }) => q === T,
									"additionalData",
									"aiProjectSteps",
									(q) => (
										(k = q.length), [...q, { description: "", stepType: H }]
									),
								),
							A = (H) =>
								this.q.setChatData(
									"codeInterpreterTabs",
									({ tabId: q }) => q === T,
									"additionalData",
									"aiProjectSteps",
									k,
									"description",
									(q) => q + H,
								),
							R = this.q.chatData.codeInterpreterTabs.find(
								({ tabId: H }) => H === T,
							);
						if (R === void 0)
							throw new Error(`No tab details found for tab ${T}`);
						this.q.setChatData(
							"codeInterpreterTabs",
							({ tabId: H }) => H === T,
							"additionalData",
							"aiProjectSteps",
							[],
						);
						const O = await this.a,
							{ generationUUID: B, abortController: U } = this.s({
								assistantBubbleId: P,
								currentTabId: T,
							}),
							z = this.streamWithGenerationHandler(
								O.aiProjectBreakdown(
									{
										modelDetails: this.getModelDetails(),
										description: R.additionalData.simpleDescription,
										spec: R.additionalData.aiProjectPlan,
									},
									{ signal: U.signal, headers: (0, s.$m6b)(B) },
								),
								B,
							);
						let F = !1,
							x = -1;
						for await (const H of z) {
							const q = H.response;
							q.case === "thought"
								? (F || (L($), (F = !0)), L(q.value))
								: q.case === "step"
									? (F && (L(v), (F = !1)),
										q.value.stepNumber !== x &&
											(N(q.value.stepType), (x = q.value.stepNumber)),
										A(q.value.stepDescription),
										L(q.value.stepDescription))
									: q.case === "messagePayload" &&
										(M({
											messageType: d.PureMessage_MessageType.USER,
											content: q.value.fullUserMessage,
										}),
										D({
											messageType: d.PureMessage_MessageType.ASSISTANT,
											content: q.value.fullBotMessage,
										}));
						}
					}
					async getBreakdownFeedback(
						T,
						{ currentTabId: P, assistantBubbleId: k, userBubbleId: L },
					) {
						if (this.a === void 0)
							throw new Error(
								"DEPRECATED. AiProjectServicePromise is undefined",
							);
						let D = 0;
						const {
								appendAssistant: M,
								replaceAssistantServer: N,
								replaceUserServer: A,
							} = this.getHelperMods({
								currentTabId: P,
								userBubbleId: k,
								assistantBubbleId: k,
							}),
							R = (J) =>
								this.q.setChatData(
									"codeInterpreterTabs",
									({ tabId: W }) => W === P,
									"additionalData",
									"aiProjectSteps",
									(W) => (
										(D = W.length), [...W, { description: "", stepType: J }]
									),
								),
							O = () =>
								this.q.setChatData(
									"codeInterpreterTabs",
									({ tabId: J }) => J === P,
									"additionalData",
									"aiProjectSteps",
									[],
								),
							B = (J) =>
								this.q.setChatData(
									"codeInterpreterTabs",
									({ tabId: W }) => W === P,
									"additionalData",
									"aiProjectSteps",
									D,
									"description",
									(W) => W + J,
								);
						if (
							this.q.chatData.codeInterpreterTabs.find(
								({ tabId: J }) => J === P,
							) === void 0
						)
							throw new Error(`No tab details found for tab ${P}`);
						this.q.setChatData(
							"codeInterpreterTabs",
							({ tabId: J }) => J === P,
							"additionalData",
							"aiProjectSteps",
							[],
						);
						const z = this.getPreviousMessages(
								{ currentTabId: P, lastBubbleId: L },
								(J) =>
									J.bubbleState === r.NewProjectState.breakdown ||
									J.bubbleState === r.NewProjectState.breakdownFeedback,
							),
							F = await this.a,
							{ generationUUID: x, abortController: H } = this.s({
								assistantBubbleId: k,
								currentTabId: P,
							}),
							q = this.streamWithGenerationHandler(
								F.aiProjectBreakdownFeedback(
									{
										modelDetails: this.getModelDetails(),
										previousMessages: z,
										feedbackOrProgress: T,
									},
									{ signal: H.signal, headers: (0, s.$m6b)(x) },
								),
								x,
							);
						let V = !1,
							G = !1,
							K = -1;
						for await (const J of q) {
							const W = J.response;
							if (W.case === "revisedBreakdown") {
								const X = W.value.response;
								X.case === "thought"
									? (G || (M($), (G = !0)), M(X.value))
									: X.case === "step"
										? (G && (M(v), (G = !1)),
											K === -1 && O(),
											X.value.stepNumber !== K &&
												(R(X.value.stepType), (K = X.value.stepNumber)),
											B(X.value.stepDescription),
											M(X.value.stepDescription))
										: X.case === "messagePayload" &&
											(A({
												messageType: d.PureMessage_MessageType.USER,
												content: X.value.fullUserMessage,
											}),
											N({
												messageType: d.PureMessage_MessageType.ASSISTANT,
												content: X.value.fullBotMessage,
											}));
							} else W.case === "repeatFeedback" && (V = W.value);
						}
						return { repeatStep: V };
					}
					async performStep(
						T,
						{ currentTabId: P, userBubbleId: k, assistantBubbleId: L },
					) {
						if (this.a === void 0)
							throw new Error(
								"DEPRECATED. AiProjectServicePromise is undefined",
							);
						const D = this.q.chatData.codeInterpreterTabs.find(
							({ tabId: V }) => V === P,
						);
						if (D === void 0) throw new Error(`No tab data found for tab ${P}`);
						const { appendAssistant: M, replaceAssistantServer: N } =
							this.getHelperMods({
								currentTabId: P,
								userBubbleId: k,
								assistantBubbleId: L,
							});
						if (
							this.q.chatData.codeInterpreterTabs
								.find(({ tabId: V }) => V === P)
								?.bubbles.find(
									({ id: V, type: G, bubbleState: K }) =>
										V === L &&
										G === g.BubbleType.AI_CODE_INTERPRETER &&
										K === r.NewProjectState.steps,
								) === void 0
						)
							throw new Error(`No bubble found for bubble ${L}`);
						const R = D.additionalData.aiProjectSteps,
							O = await this.a,
							{ generationUUID: B, abortController: U } = this.s({
								assistantBubbleId: L,
								currentTabId: P,
							});
						console.log("RUNNING STEP", R[T].description);
						const z = O.aiProjectStep(
								{
									modelDetails: this.getModelDetails(),
									stepDescription: R[T].description,
									stepType: R[T].stepType,
									shellType: c.ShellType.BASH,
									projectBreakdown: D.additionalData.aiProjectSteps.map(
										(V) => V.description,
									),
									projectPlan: D.additionalData.aiProjectPlan,
								},
								{ signal: U.signal, headers: (0, s.$m6b)(B) },
							),
							{ stream: F, toolformerSessionFuture: x } =
								this.h.handleTaskWithSessionData(z, U.signal);
						x.then((V) => {
							V.onDidTerminalChangeEvent((G) => {
								console.log("HANDLING PAYLOAD", G),
									G.type === f.WriteTerminalState.newTerminal
										? (M(`

### Terminal

`),
											M("```"))
										: G.type === f.WriteTerminalState.writingCommand
											? M(`
$ ${G.value}
`)
											: G.type === f.WriteTerminalState.writingResponse
												? M(G.value)
												: G.type === f.WriteTerminalState.endTerminal &&
													M("\n```\n\n");
							});
						});
						let H = !1,
							q = !0;
						for await (const V of F)
							if (V.response.case === "thought")
								H || (M($), (H = !0)), M(V.response.value);
							else if (V.response.case === "output")
								H && (M(v), (H = !1)), M(V.response.value);
							else if (V.response.case === "messagePayload")
								N(
									new d.$7s({
										messageType: d.PureMessage_MessageType.USER,
										content: V.response.value.fullUserMessage,
									}),
									new d.$7s({
										messageType: d.PureMessage_MessageType.ASSISTANT,
										content: V.response.value.fullBotMessage,
									}),
								);
							else if (V.response.case === "stepPayload") {
								const G = V.response.value;
								if (G.payload.case !== "runTerm") {
									if (G.payload.case === "writeCode")
										this.q.setChatData(
											"codeInterpreterTabs",
											({ tabId: K }) => K === P,
											"additionalData",
											"aiProjectSteps",
											T,
											"stepPayload",
											{
												type: u.AiProjectStepType.READ_WRITE_FILE,
												fileName: G.payload.value.filename,
											},
										),
											M(e.$rcc + G.payload.value.filename + e.$scc);
									else if (G.payload.case === "creatingFiles") {
										const K = G.payload.value.payload;
										this.q.setChatData(
											"codeInterpreterTabs",
											({ tabId: J }) => J === P,
											"additionalData",
											"aiProjectSteps",
											T,
											"stepPayload",
											(J) => {
												let W;
												if (J === void 0 || q)
													console.log("resetting!!"),
														(W = {
															type: u.AiProjectStepType.CREATE_RM_FILES,
															fileNames: [],
															directories: [],
														});
												else if (
													J?.type === u.AiProjectStepType.CREATE_RM_FILES
												)
													W = { ...J };
												else
													throw new Error(
														`Expected creatingFiles, got ${J?.type}`,
													);
												return K.case === "directory"
													? (console.log("ADDING DIRECTORY", K.value),
														{ ...W, directories: [...W.directories, K.value] })
													: K.case === "filename"
														? { ...W, fileNames: [...W.fileNames, K.value] }
														: W;
											},
										);
									}
								}
								q = !1;
							}
						H && M(v),
							M(`

Any feedback/suggestions on this step?

`);
					}
					async currentStepFeedback(
						T,
						P,
						k,
						{ currentTabId: L, userBubbleId: D, assistantBubbleId: M },
					) {
						if (this.a === void 0)
							throw new Error(
								"DEPRECATED. AiProjectServicePromise is undefined",
							);
						const N = this.q.chatData.codeInterpreterTabs.find(
							({ tabId: J }) => J === L,
						);
						if (N === void 0) throw new Error(`No tab data found for tab ${L}`);
						const {
								appendAssistant: A,
								replaceAssistantServer: R,
								replaceUserServer: O,
							} = this.getHelperMods({
								currentTabId: L,
								userBubbleId: M,
								assistantBubbleId: M,
							}),
							B = await this.a,
							{ generationUUID: U, abortController: z } = this.s({
								assistantBubbleId: M,
								currentTabId: L,
							}),
							F = this.getPreviousMessages(
								{ currentTabId: L, lastBubbleId: D },
								(J) =>
									J.bubbleState === r.NewProjectState.steps ||
									J.bubbleState === r.NewProjectState.stepsFeedback
										? J.stepIndex === P
										: !1,
							);
						console.log("USING CURRENT STEP", P, k);
						let x;
						if (k.stepPayload?.type === u.AiProjectStepType.READ_WRITE_FILE)
							x = k.stepPayload.fileName;
						else
							throw new Error(
								`Expected READ_WRITE_FILE, got ${k.stepPayload?.type}`,
							);
						const H = B.aiProjectStepFeedback(
								{
									modelDetails: this.getModelDetails(),
									stepDescription: k.description,
									stepType: k.stepType,
									shellType: c.ShellType.BASH,
									projectBreakdown: N.additionalData.aiProjectSteps.map(
										(J) => J.description,
									),
									projectPlan: N.additionalData.aiProjectPlan,
									previousFeedbackMessages: F,
									feedbackPayload: {
										case: "modifyCodePayload",
										value: { feedbackText: T, filesToModify: [x] },
									},
								},
								{ signal: z.signal, headers: (0, s.$m6b)(U) },
							),
							{ stream: q, toolformerSessionFuture: V } =
								this.h.handleTaskWithSessionData(H, z.signal);
						V.then((J) => {
							J.onDidTerminalChangeEvent((W) => {
								console.log("HANDLING PAYLOAD", W),
									W.type === f.WriteTerminalState.newTerminal
										? (A(`

### Terminal

`),
											A("```"))
										: W.type === f.WriteTerminalState.writingCommand
											? A(`
$ ${W.value}
`)
											: W.type === f.WriteTerminalState.writingResponse
												? A(W.value)
												: W.type === f.WriteTerminalState.endTerminal &&
													A("\n```\n\n");
							});
						});
						let G = !1,
							K = !0;
						console.log("going to stream now");
						for await (const J of q)
							if (
								(console.log("GOTTT", J),
								J.response.case === "responseFromFeedback")
							) {
								const W = J.response.value;
								if (W.response.case === "thought")
									G || (A($), (G = !0)), A(W.response.value);
								else if (W.response.case === "output")
									G && (A(v), (G = !1)), A(W.response.value);
								else if (W.response.case === "stepPayload") {
									const X = W.response.value;
									if (X.payload.case !== "runTerm") {
										if (X.payload.case === "writeCode")
											A(e.$rcc + X.payload.value.filename + e.$scc);
										else if (X.payload.case === "creatingFiles") {
											const Y = X.payload.value.payload;
											console.log("GOT PAYLOAD", Y),
												this.q.setChatData(
													"codeInterpreterTabs",
													({ tabId: ie }) => ie === L,
													"additionalData",
													"aiProjectSteps",
													P,
													"stepPayload",
													(ie) => {
														let ne;
														if (ie === void 0 || K)
															console.log("resetting!!"),
																(ne = {
																	type: u.AiProjectStepType.CREATE_RM_FILES,
																	fileNames: [],
																	directories: [],
																});
														else if (
															ie?.type === u.AiProjectStepType.CREATE_RM_FILES
														)
															ne = { ...ie };
														else
															throw new Error(
																`Expected creatingFiles, got ${ie?.type}`,
															);
														return Y.case === "directory"
															? (console.log("ADDING DIRECTORY", Y.value),
																{
																	...ne,
																	directories: [...ne.directories, Y.value],
																})
															: Y.case === "filename"
																? {
																		...ne,
																		fileNames: [...ne.fileNames, Y.value],
																	}
																: ne;
													},
												);
										}
									}
									K = !1;
								}
							} else if (J.response.case === "repeatFeedback")
								return (
									J.response.value &&
										A(`

Any additional feedback/suggestions?

`),
									{ repeatStep: J.response.value }
								);
						return { repeatStep: !1 };
					}
					async nextStep(T, P, k) {
						console.log("CALLING NEXT STEP WITH", k);
						const L = this.q.chatData.codeInterpreterTabs.find(
							({ tabId: F }) => F === T,
						);
						if (L === void 0) throw new Error(`No tab data found for tab ${T}`);
						const D = k ?? L.additionalData.stepIndex;
						console.log("RUNNING NEXT STEP");
						let M = 0;
						const N = L.bubbles.find((F, x) =>
							F.id === P ? ((M = x), !0) : !1,
						);
						if (N === void 0)
							throw new Error(
								`No bubble data found for tab ${T} and bubble ${P}`,
							);
						this.q.setChatData(
							"codeInterpreterTabs",
							({ tabId: F }) => F === T,
							"bubbles",
							(F) => F.slice(0, M + 1),
						);
						const A = ({
								type: F,
								state: x = N.nextBubbleState,
								nextBubbleState: H = r.NewProjectState.undecided,
								stepIndex: q = D,
								origUUID: V,
							}) => {
								let G;
								return (
									V === void 0 ? (G = (0, a.$9g)()) : (G = V),
									this.q.setChatData(
										"codeInterpreterTabs",
										({ tabId: K }) => K === T,
										"bubbles",
										(K) => {
											let J;
											if (F === d.PureMessage_MessageType.ASSISTANT) {
												let W = {
													id: G,
													bubbleState: x,
													nextBubbleState: H,
													messageType: F,
													type: g.BubbleType.AI_CODE_INTERPRETER,
													text: "",
													modelType: this.g.getModel(),
													serverMessages: [],
													aiType: "newProject",
												};
												x === r.NewProjectState.breakdown ||
												x === r.NewProjectState.breakdownFeedback
													? (J = { ...W, bubbleState: x, steps: [] })
													: x === r.NewProjectState.plan ||
															x === r.NewProjectState.planFeedback
														? (J = { ...W, bubbleState: x, plan: "" })
														: x === r.NewProjectState.steps ||
																x === r.NewProjectState.stepsFeedback
															? (J = { ...W, bubbleState: x, stepIndex: q })
															: (J = { ...W, bubbleState: x });
											} else if (F === d.PureMessage_MessageType.USER)
												J = (0, y.createCodeInterpreterUserBubble)(
													this.q.setChatData,
													T,
													x,
													H,
													void 0,
													void 0,
													q,
												);
											else return K;
											return [...K, J];
										},
									),
									G
								);
							},
							R = (F) => {
								this.q.setChatData(
									"codeInterpreterTabs",
									({ tabId: x }) => x === T,
									"additionalData",
									"stepIndex",
									F,
								);
							},
							O = (F) => {
								const x = this.q.chatData.codeInterpreterTabs.find(
									({ tabId: q }) => q === T,
								)?.bubbles;
								if (x === void 0 || x.length === 0)
									throw new Error(`No bubbles found for tab ${T}`);
								const H = x[x.length - 1];
								this.q.setChatData(
									"codeInterpreterTabs",
									({ tabId: q }) => q === T,
									"bubbles",
									({ id: q }) => q === H.id,
									"nextBubbleState",
									F,
								);
							},
							B = (0, a.$9g)(),
							U = { currentTabId: T, userBubbleId: P, assistantBubbleId: B };
						console.log("NEXT STEP", N.bubbleState, U);
						const z = N.nextBubbleState;
						if (z === r.NewProjectState.initial) {
							const F = A({
									type: d.PureMessage_MessageType.ASSISTANT,
									state: r.NewProjectState.initial,
									nextBubbleState: r.NewProjectState.clarification,
									origUUID: B,
								}),
								{ clarify: x } = await this.startProject(N.text ?? "", U);
							x
								? A({
										type: d.PureMessage_MessageType.USER,
										state: r.NewProjectState.clarification,
										nextBubbleState: r.NewProjectState.clarification,
									})
								: (O(r.NewProjectState.plan), await this.nextStep(T, F));
						} else if (z === r.NewProjectState.clarification) {
							const F = A({
									type: d.PureMessage_MessageType.ASSISTANT,
									state: r.NewProjectState.clarification,
									nextBubbleState: r.NewProjectState.clarification,
									origUUID: B,
								}),
								{ clarify: x } = await this.clarifyProject(N.text ?? "", U);
							x
								? A({
										type: d.PureMessage_MessageType.USER,
										state: r.NewProjectState.clarification,
										nextBubbleState: r.NewProjectState.clarification,
									})
								: (O(r.NewProjectState.plan), await this.nextStep(T, F));
						} else if (z === r.NewProjectState.plan)
							A({
								type: d.PureMessage_MessageType.ASSISTANT,
								state: r.NewProjectState.plan,
								nextBubbleState: r.NewProjectState.breakdown,
								origUUID: B,
							}),
								await this.getProjectPlan(T, B),
								A({
									type: d.PureMessage_MessageType.USER,
									state: r.NewProjectState.planFeedback,
									nextBubbleState: r.NewProjectState.planFeedback,
								});
						else if (z === r.NewProjectState.planFeedback) {
							console.log("IN PLAN FEEDBACK STEP!!");
							const F = A({
									type: d.PureMessage_MessageType.ASSISTANT,
									state: r.NewProjectState.planFeedback,
									nextBubbleState: r.NewProjectState.planFeedback,
									origUUID: B,
								}),
								{ repeatStep: x } = await this.getProjectPlanFeedback(
									N.text ?? "",
									U,
								);
							x
								? A({
										type: d.PureMessage_MessageType.USER,
										state: r.NewProjectState.planFeedback,
										nextBubbleState: r.NewProjectState.planFeedback,
									})
								: (O(r.NewProjectState.breakdown), await this.nextStep(T, F));
						} else if (z === r.NewProjectState.breakdown)
							A({
								type: d.PureMessage_MessageType.ASSISTANT,
								state: r.NewProjectState.breakdown,
								nextBubbleState: r.NewProjectState.steps,
								origUUID: B,
							}),
								await this.getBreakdown(T, B),
								R(0),
								await this.nextStep(T, B);
						else if (z === r.NewProjectState.steps) {
							const F = D;
							if (F >= L.additionalData.aiProjectSteps.length) return;
							L.additionalData.aiProjectSteps[F].stepType ===
							u.AiProjectStepType.READ_WRITE_FILE
								? (A({
										type: d.PureMessage_MessageType.ASSISTANT,
										state: r.NewProjectState.steps,
										nextBubbleState: r.NewProjectState.stepsFeedback,
										stepIndex: F,
										origUUID: B,
									}),
									await this.performStep(F, U),
									A({
										type: d.PureMessage_MessageType.USER,
										state: r.NewProjectState.stepsFeedback,
										nextBubbleState: r.NewProjectState.stepsFeedback,
										stepIndex: F,
										origUUID: B,
									}),
									console.log("CREATING FEEDBACK STEP", F))
								: (A({
										type: d.PureMessage_MessageType.ASSISTANT,
										state: r.NewProjectState.steps,
										nextBubbleState: r.NewProjectState.steps,
										stepIndex: F,
										origUUID: B,
									}),
									await this.performStep(F, U),
									R(F + 1),
									await this.nextStep(T, B));
						} else if (z === r.NewProjectState.stepsFeedback) {
							const F = D;
							if (
								(console.log("running steps feedback step", F),
								F >= L.additionalData.aiProjectSteps.length)
							)
								return;
							const x = L.additionalData.aiProjectSteps[F];
							console.log("ALL STEPS", L.additionalData.aiProjectSteps),
								console.log("step index", F);
							const H = A({
								type: d.PureMessage_MessageType.ASSISTANT,
								state: r.NewProjectState.stepsFeedback,
								nextBubbleState: r.NewProjectState.stepsFeedback,
								stepIndex: F,
								origUUID: B,
							});
							console.log("Created bubble!");
							const { repeatStep: q } = await this.currentStepFeedback(
								N.text ?? "",
								D,
								x,
								U,
							);
							console.log("FINISHED REPEAT STEP!"),
								console.log("got repeated step!"),
								q
									? A({
											type: d.PureMessage_MessageType.USER,
											state: r.NewProjectState.stepsFeedback,
											nextBubbleState: r.NewProjectState.stepsFeedback,
											stepIndex: F,
										})
									: (R(F + 1),
										O(r.NewProjectState.steps),
										await this.nextStep(T, H));
						}
					}
				};
				(e.$ucc = S),
					(e.$ucc = S =
						Ne(
							[
								j(0, w.$x6b),
								j(1, i.$i6b),
								j(2, E.$0zb),
								j(3, m.$S6b),
								j(4, n.$a9b),
								j(5, p.$qgc),
								j(6, o.$Nfc),
								j(7, m.$S6b),
								j(8, b.$kgc),
								j(9, l.$Bk),
							],
							S,
						)),
					(0, h.$lK)(e.$tcc, S, h.InstantiationType.Delayed);
			},
		),
		