import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/bufbuild/connect.js';
import '../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../../base/common/event.js';
import '../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/map.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/telemetry/common/telemetry.js';
import './aiService.js';
import './toolformer/addTestHandler.js';
import './toolformer/createRmFilesHandler.js';
import './toolformer/deleteTestHandler.js';
import './toolformer/editHandler.js';
import './toolformer/endHandler.js';
import './toolformer/getSymbolsHandler.js';
import './toolformer/getTestsHandler.js';
import './toolformer/goToDefHandler.js';
import './toolformer/newEditHandler.js';
import './toolformer/newFileHandler.js';
import './toolformer/projectStructureHandler.js';
import './toolformer/readChunkHandler.js';
import './toolformer/saveFileHandler.js';
import './toolformer/searchHandler.js';
import './toolformer/semanticSearchHandler.js';
import './toolformer/undoEditHandler.js';
import '../common/toolformerHandlerRegistryService.js';
import '../../aiErrors/browser/aiErrorService.js';
import './toolformer/readWithLinterHandler.js';
import '../../../../../proto/aiserver/v1/aiserver_connectweb.js';
import '../../../../../proto/aiserver/v1/chat_pb.js';
import './utils.js';
import '../../../../base/common/uuid.js';
define(
			de[1054],
			he([
				1, 0, 340, 148, 6, 124, 3, 59, 20, 5, 40, 45, 32, 118, 3960, 3961, 3962,
				3965, 3230, 3966, 3967, 3968, 3969, 3970, 3665, 3971, 3973, 3974, 3701,
				3231, 1011, 401, 3972, 341, 126, 191, 47,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*connect*/,
				i /*aiserver_pb*/,
				w /*event*/,
				E /*tools_pb*/,
				C /*lifecycle*/,
				d /*map*/,
				m /*extensions*/,
				r /*instantiation*/,
				u /*notification*/,
				a /*reactiveStorageService*/,
				h /*telemetry*/,
				c /*aiService*/,
				n /*addTestHandler*/,
				g /*createRmFilesHandler*/,
				p /*deleteTestHandler*/,
				o /*editHandler*/,
				f /*endHandler*/,
				b /*getSymbolsHandler*/,
				s /*getTestsHandler*/,
				l /*goToDefHandler*/,
				y /*newEditHandler*/,
				$ /*newFileHandler*/,
				v /*projectStructureHandler*/,
				S /*readChunkHandler*/,
				I /*saveFileHandler*/,
				T /*searchHandler*/,
				P /*semanticSearchHandler*/,
				k /*undoEditHandler*/,
				L /*toolformerHandlerRegistryService*/,
				D /*aiErrorService*/,
				M /*readWithLinterHandler*/,
				N /*aiserver_connectweb*/,
				A /*chat_pb*/,
				R /*utils*/,
				O /*uuid*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$V8b = e.$U8b = e.$T8b = void 0),
					(e.$T8b = (0, r.$Mi)("toolformerService"));
				class B extends Error {
					constructor(F) {
						super(F), (this.name = "ImplementationError");
					}
				}
				e.$U8b = B;
				let U = class extends C.$1c {
					constructor(F, x, H, q, V, G) {
						super(),
							(this.f = F),
							(this.g = x),
							(this.h = H),
							(this.j = q),
							(this.m = V),
							(this.n = G),
							(this.taskIdToRemoteTaskId = new d.$Jc(100)),
							(this.sessionData = new d.$Jc(100)),
							(this.a = 0),
							(this.b = this.D(new w.$re())),
							(this.onDidSessionDataChange = this.b.event),
							(this.q = new d.$Jc(1e3)),
							this.n.registerHandler(
								E.BuiltinTool.SEARCH,
								"searchParams",
								"searchResult",
								T.$P8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.READ_CHUNK,
								"readChunkParams",
								"readChunkResult",
								S.$N8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.GOTODEF,
								"gotodefParams",
								"gotodefResult",
								l.$I8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.EDIT,
								"editParams",
								"editResult",
								o.$E8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.UNDO_EDIT,
								"undoEditParams",
								"undoEditResult",
								k.$R8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.NEW_EDIT,
								"newEditParams",
								"newEditResult",
								y.$J8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.GET_PROJECT_STRUCTURE,
								"getProjectStructureParams",
								"getProjectStructureResult",
								v.$M8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.NEW_FILE,
								"newFileParams",
								"newFileResult",
								$.$K8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.CREATE_RM_FILES,
								"createRmFilesParams",
								"createRmFilesResult",
								g.$w8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.END,
								"endParams",
								"endResult",
								f.$F8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.ADD_TEST,
								"addTestParams",
								"addTestResult",
								n.$v8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.DELETE_TEST,
								"deleteTestParams",
								"deleteTestResult",
								p.$x8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.GET_TESTS,
								"getTestsParams",
								"getTestsResult",
								s.$H8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.SAVE_FILE,
								"saveFileParams",
								"saveFileResult",
								I.$O8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.GET_SYMBOLS,
								"getSymbolsParams",
								"getSymbolsResult",
								b.$G8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.SEMANTIC_SEARCH,
								"semanticSearchParams",
								"semanticSearchResult",
								P.$Q8b,
							),
							this.n.registerHandler(
								E.BuiltinTool.READ_WITH_LINTER,
								"readWithLinterParams",
								"readWithLinterResult",
								M.$S8b,
							);
					}
					async *streamChatToolformer(F, x, H) {
						const [q, V] = this.f.registerNewGeneration({ metadata: x }),
							G = await this.f.getCurrentFileInfo(),
							K = F.filter(
								(ie) => ie.type === A.ConversationMessage_MessageType.HUMAN,
							);
						this.h.publicLogCapture("Submitted toolformer");
						const J =
							H?.overrideModelDetails ||
							this.f.getModelDetails({ specificModelField: "regular-chat" });
						this.h.publicLogCapture("submitted.toolformer", {
							model: J.modelName,
						});
						const W = 5 * 60 * 1e3;
						(J.modelName?.includes("cursor-small") ||
							J.modelName?.includes("gpt-3.5")) &&
							(this.a === null || Date.now() - this.a >= W) &&
							(this.m.warn(
								"You are using an AI model which is not optimized for tool usage. Please consider using claude-3.5-sonnet or gpt-4o for a better experience.",
							),
							(this.a = Date.now()));
						const Y = (await this.f.aiClient()).streamChatToolformer(
							{ currentFile: G, conversation: F, modelDetails: J },
							{ signal: V.signal, headers: (0, R.$m6b)((0, O.$9g)()) },
						);
						try {
							let ie;
							for await (const ee of Y) {
								if (ee.toolformerSessionId) {
									ie = ee.toolformerSessionId;
									break;
								}
								console.warn("First message was not the toolformer ID!!!");
							}
							if (!ie) throw new Error("Toolformer ID was not set!");
							let ne = this.sessionData.get(ie);
							ne || ((ne = new L.$t8b(ie)), this.sessionData.set(ie, ne)),
								yield* this.handleStream(ne, Y, V);
						} catch (ie) {
							if (!(ie instanceof t.ConnectError)) throw ie;
							if (ie.code !== t.Code.Canceled) {
								const ne =
									N.$q0.typeName +
									"/" +
									N.$q0.methods.streamChatToolformer.name;
								this.j.handleError(ie, J, q, ne, "chat", H?.rerun);
							}
						} finally {
							this.g.setNonPersistentStorage("inprogressAIGenerations", (ie) =>
								ie.filter((ne) => ne.generationUUID !== q),
							);
						}
					}
					async detachFromTaskExecution({ taskUuid: F }) {
						const x = this.q.get(F);
						x && ((x.isRunning = !1), x.abortController.abort());
					}
					async getSessionData({ taskUuid: F }) {
						const x = this.sessionData.get(F);
						return x !== void 0
							? x
							: await new Promise((H, q) => {
									const V = this.onDidSessionDataChange((G) => {
										if (G === F) {
											const K = this.sessionData.get(F);
											K !== void 0 && (V.dispose(), H(K));
										}
									});
									setTimeout(() => {
										V.dispose(), q();
									}, 5e3);
								});
					}
					async attachToTaskExecution({
						taskUuid: F,
						executedActionCallback: x,
						lastExecutedActionSequenceNumber: H,
					}) {
						if (this.q.has(F) && this.q.get(F).isRunning) {
							console.error("Task is already in progress!", F);
							return;
						}
						const q = new AbortController(),
							V = {
								taskUuid: F,
								abortController: q,
								isRunning: !0,
								lastExecutedActionSequenceNumber: H,
							};
						this.q.set(F, V);
						try {
							let J = this.sessionData.get(F);
							J || ((J = new L.$t8b(F)), this.sessionData.set(F, J)),
								await this.handleTaskStream(
									J,
									q,
									x,
									V.lastExecutedActionSequenceNumber,
								);
						} catch (J) {
							console.error(
								"(ignoring, rechecking state) Error in task stream",
								J,
							);
						}
						if (!V.isRunning) return;
						V.isRunning = !1;
						const G = setTimeout(() => {
								q.abort();
							}, 1e4),
							K = await this.f.aiClient();
						try {
							const J = await K.taskInfo(
								{ taskUuid: F },
								{ signal: q.signal, headers: (0, R.$m6b)((0, O.$9g)()) },
							);
							if (
								(clearTimeout(G),
								J.taskStatus !== i.TaskStatus.DONE &&
									J.taskStatus !== i.TaskStatus.PAUSED)
							) {
								this.attachToTaskExecution({
									taskUuid: F,
									executedActionCallback: x,
									lastExecutedActionSequenceNumber:
										V.lastExecutedActionSequenceNumber,
								});
								return;
							}
						} catch (J) {
							clearTimeout(G),
								console.error(
									"(detaching from task, not retrying) error getting task info: ",
									J,
								);
						}
					}
					async handleTaskStream(F, x, H, q) {
						const G = (await this.f.aiClient()).taskStreamLog(
							{
								taskUuid: F.toolformerId,
								startSequenceNumber: q ? q + 1 : void 0,
							},
							{ signal: x.signal, headers: (0, R.$m6b)((0, O.$9g)()) },
						);
						for await (const K of G)
							switch (K.response.case) {
								case "initialTaskInfo":
								case "infoUpdate": {
									const J = K.response.value;
									if (J.taskStatus === i.TaskStatus.DONE) {
										const W = this.q.get(F.toolformerId);
										W
											? (W.isRunning = !1)
											: console.error(
													"Task was not in progress! We may have reached the boundary of our LRU Cache. just make it bigger!",
													F.toolformerId,
												),
											x.abort();
										return;
									}
									if (J.taskStatus === i.TaskStatus.PAUSED) {
										const W = this.q.get(F.toolformerId);
										W
											? (W.isRunning = !1)
											: console.error(
													"Task was not in progress! We may have reached the boundary of our LRU Cache. just make it bigger!",
													F.toolformerId,
												),
											x.abort();
										return;
									}
									break;
								}
								case "streamedLogItem": {
									const J = K.response.value;
									if (J.logItem.case === "toolAction") {
										const W = J.logItem.value;
										if (W.toolCall) {
											let X;
											try {
												(X = await this.s(F, W.toolCall, x)),
													!X &&
														!J.isNotDone &&
														(X = await this.t(F, W.toolCall, x));
											} catch (Y) {
												X = new E.$Wy({
													toolResult: {
														case: "errorToolResult",
														value: new E.$qz({ errorMessage: Y.message }),
													},
												});
											}
											if (X !== void 0)
												try {
													H(J.sequenceNumber);
													const Y = this.q.get(F.toolformerId);
													Y
														? (Y.lastExecutedActionSequenceNumber =
																J.sequenceNumber)
														: console.error(
																"Task was not in progress! We may have reached the boundary of our LRU Cache. just make it bigger!",
																F.toolformerId,
															),
														(await this.f.aiClient()).taskProvideResult(
															{
																toolResult: X,
																taskUuid: F.toolformerId,
																actionSequenceNumber: J.sequenceNumber,
															},
															{ signal: x.signal },
														);
												} catch (Y) {
													throw (
														(console.error("Error providing result to task", Y),
														Y)
													);
												}
										}
									}
									break;
								}
							}
					}
					async *handleStream(F, x, H) {
						for await (const q of x)
							if ((yield q, q.responseType.case === "toolAction")) {
								const V = q.responseType.value.toolCall;
								if (!V)
									throw new Error(
										"Tool call is empty in toolformer... shouldnt happen!",
									);
								let G = await this.s(F, V, H);
								if (!G && q.responseType.value.moreToCome) continue;
								if (
									(!G &&
										!q.responseType.value.moreToCome &&
										(G = await this.t(F, V, H)),
									G &&
										G.toolResult.case === "builtinToolResult" &&
										G.toolResult.value.tool === E.BuiltinTool.END)
								)
									break;
								const K = (
									await this.f.aiClient()
								).streamChatToolformerContinue(
									{ toolResult: G, toolformerSessionId: F.toolformerId },
									{ signal: H.signal },
								);
								yield* this.handleStream(F, K, H);
								break;
							}
					}
					async s(F, x, H) {
						try {
							await this.callTool(F, x, H);
							return;
						} catch (q) {
							if (q instanceof B) throw q;
							return (
								console.log(q),
								new E.$Wy({
									toolResult: {
										case: "errorToolResult",
										value: new E.$qz({ errorMessage: q.message }),
									},
								})
							);
						}
					}
					async t(F, x, H) {
						try {
							return await this.finishTool(F, x, H);
						} catch (q) {
							if (q instanceof B) throw q;
							return (
								console.log("error in executing agent action"),
								console.log(q),
								new E.$Wy({
									toolResult: {
										case: "errorToolResult",
										value: new E.$qz({ errorMessage: q.message }),
									},
								})
							);
						}
					}
					async callTool(F, x, H) {
						switch (x.toolCall.case) {
							case "builtinToolCall": {
								await this.callBuiltinTool(F, x.toolCall.value, H);
								break;
							}
							case "customToolCall": {
								await this.callCustomTool(F, x.toolCall.value, H);
								break;
							}
							default:
								throw new B("unknown tool called... shouldnt happen!");
						}
					}
					async finishTool(F, x, H) {
						switch (x.toolCall.case) {
							case "builtinToolCall": {
								const q = await this.finishBuiltinTool(F, x.toolCall.value, H);
								return new E.$Wy({
									toolResult: { case: "builtinToolResult", value: q },
								});
							}
							case "customToolCall": {
								const q = await this.finishCustomTool(F, x.toolCall.value, H);
								return new E.$Wy({
									toolResult: { case: "customToolResult", value: q },
								});
							}
							default:
								throw new B("unknown tool called... shouldnt happen!");
						}
					}
					async callBuiltinTool(F, x, H) {
						const q = async (G, K) => {
								if (x.params.case !== G && x.params.case)
									throw new B("wrong params provided... shouldnt happen!");
								await K.call(F, x.params.value, H, x.toolCallId);
							},
							V = this.n.toolHandlers.get(x.tool);
						if (!V)
							throw new B(
								"callBuiltinTool: unknown builtin tool called... shouldnt happen!",
							);
						await q(V.paramName, V.handler);
					}
					async finishBuiltinTool(F, x, H) {
						let q = new E.$Py({ tool: x.tool });
						const V = async (K, J) => {
								if (x.params.case !== K && x.params.case)
									throw new B("wrong params provided... shouldnt happen!");
								return await J.finish(F, x.params.value, H, x.toolCallId);
							},
							G = this.n.toolHandlers.get(x.tool);
						if (!G)
							throw new B(
								"finishBuiltinTool: unknown builtin tool called... shouldnt happen!",
							);
						return (
							(q.result = {
								case: G.returnName,
								value: await V(G.paramName, G.handler),
							}),
							q
						);
					}
					async callCustomTool(F, x, H) {
						throw new B("custom tool calls not implemented yet!");
					}
					async finishCustomTool(F, x, H) {
						throw new B("custom tool calls not implemented yet!");
					}
				};
				(e.$V8b = U),
					(e.$V8b = U =
						Ne(
							[
								j(0, c.$Nfc),
								j(1, a.$0zb),
								j(2, h.$km),
								j(3, D.$W6b),
								j(4, u.$4N),
								j(5, L.$s8b),
							],
							U,
						)),
					(0, m.$lK)(e.$T8b, U, m.InstantiationType.Delayed);
			},
		)
