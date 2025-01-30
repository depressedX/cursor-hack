import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../ai/browser/toolformerService.js';
import '../../../../base/common/result.js';
import '../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../../base/common/uuid.js';
import '../../ai/browser/aiService.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../../external/bufbuild/connect.js';
import '../../aiErrors/browser/aiErrorService.js';
import '../../../../base/common/map.js';
import './aiTaskServiceInterface.js';
import '../../../../../proto/aiserver/v1/aiserver_connectweb.js';
import '../../ai/browser/utils.js';
import '../../../../base/browser/externalTypes.js';
define(
			de[3998],
			he([
				1, 0, 3, 20, 45, 1054, 529, 148, 47, 118, 32, 340, 401, 59, 516, 341,
				191, 2195,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*extensions*/,
 w /*reactiveStorageService*/,
 E /*toolformerService*/,
 C /*result*/,
 d /*aiserver_pb*/,
 m /*uuid*/,
 r /*aiService*/,
 u /*telemetry*/,
 a /*connect*/,
 h /*aiErrorService*/,
 c /*map*/,
 n /*aiTaskServiceInterface*/,
 g /*aiserver_connectweb*/,
 p /*utils*/,
 o /*externalTypes*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$GAc = void 0);
				const f = {
					[d.TaskStatus.RUNNING]: "running",
					[d.TaskStatus.PAUSED]: "paused",
					[d.TaskStatus.DONE]: "done",
				};
				let b = class extends t.$1c {
					constructor($, v, S, I, T) {
						super(),
							(this.b = $),
							(this.c = v),
							(this.f = S),
							(this.g = I),
							(this.h = T),
							(this.j = new c.$Jc(1e3)),
							(this.q = new c.$Jc(1e3)),
							(this.t = new Set()),
							(this.a = this.D(this.b.createScoped(this))),
							this.a.onChangeEffect({
								onChange: () => {
									const P = [];
									for (const k of this.j.keys())
										this.b.workspaceUserPersistentStorage.tasksData.activeServerTaskUuids.includes(
											k,
										) || (this.j.get(k)?.dispose(), P.push(k));
									for (const k of P) this.j.delete(k);
								},
								deps: [
									() =>
										this.b.workspaceUserPersistentStorage.tasksData
											.activeServerTaskUuids,
								],
								runNowToo: !1,
							});
					}
					m($, v) {
						this.j.has($) || this.j.set($, new t.$Zc()), this.j.get($)?.add(v);
					}
					isTaskEmpty($) {
						const v =
							this.b.workspaceUserPersistentStorage.tasksData.tasks.find(
								(S) => S.taskId === $,
							);
						return v?.type === "draft" && v.instruction === "";
					}
					async pauseTask($) {
						const v = await this.f.aiClient(),
							S = (0, m.$9g)();
						try {
							await v.taskPause({ taskUuid: $ }, { headers: (0, p.$m6b)(S) });
						} catch (I) {
							return (
								console.error("error pausing task: ", I),
								(0, C.Err)(`Error pausing task: ${I}`)
							);
						}
						return (0, C.Ok)(void 0);
					}
					async killTask($) {
						this.c.detachFromTaskExecution({ taskUuid: $ }),
							this.b.setWorkspaceUserPersistentStorage(
								"tasksData",
								"activeServerTaskUuids",
								(P) => P.filter((k) => k !== $),
							),
							this.b.setNonPersistentStorage(
								"nonPersistentTasksData",
								"backgroundTasks",
								(P) => P.filter((k) => k.serverTaskUuid !== $),
							);
						const v = new AbortController(),
							S = setTimeout(() => {
								v.abort();
							}, 4e3),
							I = await this.f.aiClient(),
							T = (0, m.$9g)();
						try {
							await I.taskPause(
								{ taskUuid: $ },
								{ signal: v.signal, headers: (0, p.$m6b)(T) },
							);
						} catch (P) {
							return (
								console.error("error pausing task: ", P),
								(0, C.Err)(`Error pausing task: ${P}`)
							);
						} finally {
							clearTimeout(S);
						}
						return (0, C.Ok)(void 0);
					}
					async pauseTaskFromUI($) {
						const v =
							this.b.workspaceUserPersistentStorage.tasksData.tasks.find(
								(S) => S.taskId === $,
							);
						return v === void 0 || v.type !== "started"
							? (console.warn("task not found or not started"),
								(0, C.Err)("Task not found or not started"))
							: this.pauseTask(v.serverTaskUuid);
					}
					async sendMessage($, v) {
						const S =
							this.b.workspaceUserPersistentStorage.tasksData.tasks.find(
								(k) => k.taskId === $,
							);
						if (S === void 0 || S.type !== "started")
							return (
								console.warn("task not found or not started"),
								(0, C.Err)("Task not found or not started")
							);
						const I = (0, m.$9g)(),
							T = await this.f.aiClient();
						try {
							await T.taskSendMessage(
								{
									taskUuid: S.serverTaskUuid,
									userMessage: { text: v, attachedCodeChunks: [] },
									wantsAttentionRightNow: !0,
								},
								{ headers: (0, p.$m6b)(I) },
							);
						} catch (k) {
							return (
								console.error("error pausing task: ", k),
								(0, C.Err)(`Error pausing task: ${k}`)
							);
						}
						const P = this.n({ taskUuid: S.serverTaskUuid });
						return P.err
							? (console.error("error re-attaching to task: ", P.err),
								(0, C.Err)(`Error re-attaching to task: ${P.err}`))
							: (0, C.Ok)(void 0);
					}
					n({ taskUuid: $ }) {
						let v = this.b.workspaceUserPersistentStorage.tasksData.tasks.find(
							(I) => I.type === "started" && I.serverTaskUuid === $,
						);
						v === void 0 &&
							(v =
								this.b.nonPersistentStorage.nonPersistentTasksData.backgroundTasks.find(
									(I) => I.serverTaskUuid === $,
								));
						const S = v;
						return S === void 0 ||
							(S.type !== "started" && S.type !== "background")
							? (console.warn("task not found or not started"),
								(0, C.Err)("Task not found or not started"))
							: (this.c.attachToTaskExecution({
									taskUuid: S.serverTaskUuid,
									lastExecutedActionSequenceNumber:
										S.lastExecutedActionSequenceNumber,
									executedActionCallback: (I) => {
										S.type === "started"
											? this.b.setWorkspaceUserPersistentStorage(
													"tasksData",
													"tasks",
													(T, P) =>
														T.type === "started" &&
														T.serverTaskUuid === S.serverTaskUuid,
													"lastExecutedActionSequenceNumber",
													I,
												)
											: this.b.setNonPersistentStorage(
													"nonPersistentTasksData",
													"backgroundTasks",
													(T, P) => T.serverTaskUuid === S.serverTaskUuid,
													"lastExecutedActionSequenceNumber",
													I,
												);
									},
								}),
								S.type !== "background" &&
									this.s({ taskUuid: S.serverTaskUuid }),
								(0, C.Ok)(void 0));
					}
					async s({ taskUuid: $ }) {
						if (this.q.has($)) return;
						this.q.set($, !0);
						try {
							await this.w({ taskUuid: $ });
						} catch (P) {
							console.error(
								"(ignoring, rechecking state) error handling task stream: ",
								P,
							);
						}
						this.q.delete($);
						const v = new AbortController(),
							S = setTimeout(() => {
								v.abort();
							}, 1e4),
							I = await this.f.aiClient(),
							T = (0, m.$9g)();
						try {
							const P = await I.taskInfo(
								{ taskUuid: $ },
								{ signal: v.signal, headers: (0, p.$m6b)(T) },
							);
							if ((clearTimeout(S), P.taskStatus === d.TaskStatus.RUNNING)) {
								console.log("reattaching to task"), this.s({ taskUuid: $ });
								return;
							}
							const k =
								this.b.workspaceUserPersistentStorage.tasksData.tasks.find(
									(L) => L.type === "started" && L.serverTaskUuid === $,
								);
							if (k === void 0 || k.type !== "started") {
								console.error("task log not found, shouldnt happen");
								return;
							}
							if (
								k.log.length === 0 ||
								P.lastLogSequenceNumber > k.log[k.log.length - 1].sequenceNumber
							) {
								console.log("reattaching to task"), this.s({ taskUuid: $ });
								return;
							}
							console.log(
								"task is done or paused and we have seen all elements, so we are done here",
							);
						} catch (P) {
							clearTimeout(S),
								console.error(
									"(detaching from task, not retrying) error getting task info: ",
									P,
								);
						}
					}
					registerAgentDebuggerRecorder($) {
						this.t.add($);
					}
					unregisterAgentDebuggerRecorder($) {
						this.t.delete($);
					}
					async startTaskFromUI($) {
						const v =
							this.b.workspaceUserPersistentStorage.tasksData.tasks.find(
								(T) => T.taskId === $,
							);
						if (v === void 0) return (0, C.Err)("Task not found");
						if (v.type !== "draft")
							return (0, C.Err)(
								"Cannot start task that has already been started",
							);
						if (!v.instruction)
							return (
								console.warn("instruction is empty; cannot submit task"),
								(0, C.Err)("instruction is empty; cannot submit task")
							);
						const S = await this.f.getCurrentFileInfo(),
							I = new d.$eI({
								text: v.instruction,
								currentFile: S,
								explicitContext: await this.f.getExplicitContext(),
								attachedCodeChunks: [],
								repositories: [],
							});
						try {
							this.t.forEach((T) => T(v, I));
						} catch (T) {
							console.error(
								"error recording task, but we dont really care: ",
								T,
							);
						}
						return (
							this.g.publicLogCapture("Submitted tasks from UI"),
							await this.startTask({ instruction: I, uiTaskId: $ })
						);
					}
					async startTask({ instruction: $, uiTaskId: v }) {
						const S = this.f.getModelDetails(),
							I = new AbortController(),
							T = setTimeout(() => {
								I.abort();
							}, 1e4),
							P = await this.f.aiClient(),
							k = v ?? (0, m.$9g)(),
							L = g.$q0.typeName + "/" + g.$q0.methods.taskInit.name,
							D = (0, m.$9g)();
						try {
							const M = await P.taskInit(
									{
										instruction: $,
										modelDetails: S,
										debuggingOnlyLiveMode:
											this.b.applicationUserPersistentStorage.agentDebuggerState
												.priomptLiveMode,
										engineId:
											this.b.applicationUserPersistentStorage.agentDebuggerState
												.engineId,
									},
									{ signal: I.signal, headers: (0, p.$m6b)(D) },
								),
								N = this.createTask({ taskInitResponse: M, uiTaskId: k });
							if (N.err)
								return (
									console.error("error creating task: ", N.err),
									(0, C.Err)(`Error creating task: ${N.err}`)
								);
						} catch (M) {
							if (!(M instanceof a.ConnectError)) throw M;
							return (
								M.code === a.Code.Canceled ||
									this.h.handleError(M, S, k, L, "other"),
								console.error("error starting task: ", M),
								(0, C.Err)("Error starting task")
							);
						} finally {
							clearTimeout(T);
						}
						return (0, C.Ok)(void 0);
					}
					createTask({ taskInitResponse: $, uiTaskId: v, nonPersistent: S }) {
						const T = {
							type: "started",
							taskId: v ?? (0, m.$9g)(),
							serverTaskUuid: $.taskUuid,
							title: $.humanReadableTitle,
							log: [],
							userMessage: "",
							state: "running",
							lastExecutedActionSequenceNumber: void 0,
							SPECIAL_KEY_doNotPersist: S === !0,
						};
						this.b.setWorkspaceUserPersistentStorage(
							"tasksData",
							"tasks",
							(k) =>
								k.find((D) => D.taskId === T.taskId) === void 0
									? [...k, T]
									: k.map((D) => (D.taskId === T.taskId ? T : D)),
						);
						const P = this.n({ taskUuid: $.taskUuid });
						return P.err
							? (console.error("error attaching to task: ", P.err),
								(0, C.Err)(`Error attaching to task: ${P.err}`))
							: (0, C.Ok)(void 0);
					}
					createBackgroundTask({ taskUuid: $ }) {
						const v = {
							type: "background",
							serverTaskUuid: $,
							lastExecutedActionSequenceNumber: void 0,
						};
						this.b.setNonPersistentStorage(
							"nonPersistentTasksData",
							"backgroundTasks",
							(I) =>
								I.find((P) => P.serverTaskUuid === v.serverTaskUuid) === void 0
									? [...I, v]
									: I.map((P) =>
											P.serverTaskUuid === v.serverTaskUuid ? v : P,
										),
						);
						const S = this.n({ taskUuid: $ });
						return S.err
							? (console.error("error attaching to task: ", S.err),
								(0, C.Err)(`Error attaching to task: ${S.err}`))
							: (0, C.Ok)(void 0);
					}
					newTask() {
						const $ = (0, m.$9g)(),
							v = { type: "draft", taskId: $, instruction: "" };
						return (
							this.b.setWorkspaceUserPersistentStorage(
								"tasksData",
								"tasks",
								(S) => [...S, v],
							),
							$
						);
					}
					displayTask($) {
						this.b.setWorkspaceUserPersistentStorage(
							"tasksData",
							"displayedTaskId",
							$,
						);
					}
					async u($, v) {
						switch ($.response.case) {
							case "initialTaskInfo":
							case "infoUpdate": {
								const S = $.response.value;
								S.taskStatus === d.TaskStatus.DONE ||
								S.taskStatus === d.TaskStatus.PAUSED
									? this.b.setWorkspaceUserPersistentStorage(
											"tasksData",
											"activeServerTaskUuids",
											(I) => I.filter((T) => T !== v),
										)
									: this.b.setWorkspaceUserPersistentStorage(
											"tasksData",
											"activeServerTaskUuids",
											(I) => [...I.filter((T) => T !== v), v],
										),
									S.taskStatus !== void 0 &&
										S.taskStatus !== d.TaskStatus.UNSPECIFIED &&
										S.taskStatus !== d.TaskStatus.NOT_STARTED &&
										this.b.setWorkspaceUserPersistentStorage(
											"tasksData",
											"tasks",
											(I, T) => I.type === "started" && I.serverTaskUuid === v,
											"state",
											f[S.taskStatus],
										),
									S.humanReadableTitle &&
										this.b.setWorkspaceUserPersistentStorage(
											"tasksData",
											"tasks",
											(I, T) => I.type === "started" && I.serverTaskUuid === v,
											"title",
											S.humanReadableTitle,
										);
								break;
							}
							case "streamedLogItem": {
								const S = (0, o.messageToPlainMessage)($.response.value);
								this.b.setWorkspaceUserPersistentStorage(
									"tasksData",
									"tasks",
									(I, T) => I.type === "started" && I.serverTaskUuid === v,
									"log",
									(I) => {
										if (
											I.length > 0 &&
											I[I.length - 1].logItem.case === S.logItem.case &&
											I[I.length - 1].isNotDone &&
											I[I.length - 1].sequenceNumber === S.sequenceNumber
										) {
											const T = l(I[I.length - 1], S);
											return T.ok()
												? [...I.slice(0, I.length - 1), T.v]
												: (console.error("error merging log items: ", T.err),
													[...I, S]);
										} else return [...I, S];
									},
								);
								break;
							}
						}
					}
					async w({ taskUuid: $ }) {
						const v =
							this.b.workspaceUserPersistentStorage.tasksData.tasks.find(
								(M) => M.type === "started" && M.serverTaskUuid === $,
							);
						if (v === void 0 || v.type !== "started")
							throw new Error("task log not found, shouldnt happen");
						let S = -1,
							I =
								v.log.length > 0 ? v.log[v.log.length - 1].sequenceNumber : -1;
						for (let M = v.log.length - 1; M >= 0; M--)
							if (v.log[M].isNotDone) {
								if (v.log[M].sequenceNumber < I) {
									S = v.log[M].sequenceNumber;
									break;
								}
							} else {
								S = v.log[M].sequenceNumber;
								break;
							}
						const T = S + 1;
						this.b.setWorkspaceUserPersistentStorage(
							"tasksData",
							"tasks",
							(M, N) => M.type === "started" && M.serverTaskUuid === $,
							"log",
							(M) => M.filter((N) => N.sequenceNumber < T),
						);
						const P = await this.f.aiClient(),
							k = new AbortController();
						this.m($, {
							dispose: () => {
								k.abort();
							},
						});
						const L = (0, m.$9g)(),
							D = P.taskStreamLog(
								{ taskUuid: $, startSequenceNumber: T },
								{ signal: k.signal, headers: (0, p.$m6b)(L) },
							);
						try {
							for await (const M of D) await this.u(M, $);
						} catch (M) {
							if (!(M instanceof a.ConnectError)) throw M;
							M.code === a.Code.Canceled ||
								console.error("error streaming task log: ", M);
						}
					}
					async *handleTaskGetStream($, v, S) {
						let I;
						try {
							for await (const T of $)
								if (T.response.case === "backgroundTaskUuid") {
									if (I !== void 0)
										throw new Error(
											"got multiple background task uuids, this is bad",
										);
									I = T.response.value;
									const P = this.createBackgroundTask({ taskUuid: I });
									if (!P.ok())
										throw new Error(`Error creating background task: ${P.err}`);
									const k = I;
									if (S) {
										console.log("GETTING DATA");
										const L = await this.c.getSessionData({ taskUuid: k });
										S(L);
									}
									v.addEventListener("abort", () => {
										this.killTask(k);
									});
								} else if (T.response.case === "realResponse")
									yield T.response.value;
								else continue;
						} finally {
							I !== void 0 && this.killTask(I);
						}
					}
					handleTaskWithSessionData($, v) {
						let S = (P) => {
							console.log("vanilla resolving!!");
						};
						const I = new Promise((P) => {
							S = P;
						});
						console.log("GETTING STREAM AND DATA");
						const T = this.handleTaskGetStream($, v, S);
						return { toolformerSessionFuture: I, stream: T };
					}
					async handleTaskGet($, v) {
						let S;
						try {
							for await (const I of $)
								if (I.response.case === "backgroundTaskUuid") {
									if (S !== void 0)
										return (
											console.error(
												"got multiple background task uuids, this is bad",
											),
											(0, C.Err)(
												"Got multiple background task uuids, this is bad",
											)
										);
									S = I.response.value;
									const T = this.createBackgroundTask({ taskUuid: S });
									if (!T.ok())
										return (
											console.error("error creating background task: ", T.err),
											(0, C.Err)(`Error creating background task: ${T.err}`)
										);
									const P = S;
									v.addEventListener("abort", () => {
										this.killTask(P);
									});
								} else {
									if (I.response.case === "realResponse")
										return (
											this.b.setNonPersistentStorage(
												"nonPersistentTasksData",
												"backgroundTasks",
												(T) => T.filter((P) => P.serverTaskUuid !== S),
											),
											(0, C.Ok)(I.response.value)
										);
									continue;
								}
							return (0, C.Err)("Task never returned the real response");
						} finally {
							S !== void 0 && this.killTask(S);
						}
					}
				};
				(e.$GAc = b),
					(e.$GAc = b =
						Ne(
							[
								j(0, w.$0zb),
								j(1, E.$T8b),
								j(2, r.$Nfc),
								j(3, u.$km),
								j(4, h.$W6b),
							],
							b,
						)),
					(0, i.$lK)(n.$a9b, b, i.InstantiationType.Delayed);
				function s(y, $) {
					return y === void 0 ? $ : $ === void 0 ? y : $;
				}
				function l(y, $) {
					if (y.sequenceNumber !== $.sequenceNumber)
						return (0, C.Err)(
							"Cannot merge log items with different sequence numbers",
						);
					switch (y.logItem.case) {
						case "output":
							return $.logItem.case !== "output"
								? (0, C.Err)("Cannot merge log items of different types")
								: (0, C.Ok)({
										sequenceNumber: y.sequenceNumber,
										isNotDone: $.isNotDone,
										logItem: {
											case: "output",
											value: {
												text: y.logItem.value.text + $.logItem.value.text,
											},
										},
									});
						case "toolAction":
							return $.logItem.case !== "toolAction"
								? (0, C.Err)("Cannot merge log items of different types")
								: (0, C.Ok)({
										sequenceNumber: y.sequenceNumber,
										isNotDone: $.isNotDone,
										logItem: {
											case: "toolAction",
											value: {
												userFacingText:
													y.logItem.value.userFacingText +
													$.logItem.value.userFacingText,
												rawModelOutput: $.logItem.value.rawModelOutput,
												toolCall: s(
													y.logItem.value.toolCall,
													$.logItem.value.toolCall,
												),
											},
										},
									});
						case "thought":
							return $.logItem.case !== "thought"
								? (0, C.Err)("Cannot merge log items of different types")
								: (0, C.Ok)({
										sequenceNumber: y.sequenceNumber,
										isNotDone: $.isNotDone,
										logItem: {
											case: "thought",
											value: {
												text: y.logItem.value.text + $.logItem.value.text,
											},
										},
									});
						default:
							throw new Error(
								"Cannot merge log items of type " + y.logItem.case,
							);
					}
				}
			},
		),
		