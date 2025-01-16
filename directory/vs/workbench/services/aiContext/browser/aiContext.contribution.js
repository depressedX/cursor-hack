define(de[3997], he([1, 0, 3996]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
			const t = !0;
		}),
		define(
			de[3998],
			he([
				1, 0, 3, 20, 45, 1054, 529, 148, 47, 118, 32, 340, 401, 59, 516, 341,
				191, 2195,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
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
		define(
			de[3999],
			he([
				1, 0, 4, 9, 44, 18, 245, 22, 25, 3, 21, 6, 10, 66, 186, 5, 96, 8, 24,
				20, 7, 256, 23, 29, 970, 165, 68, 52, 34, 718, 75, 287,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
			) {
				"use strict";
				var M, N;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Dvc = e.$Cvc = void 0);
				let A = class extends r.$1c {
					static {
						M = this;
					}
					static {
						this.a = "workbench.editor.mouseBackForwardToNavigate";
					}
					static {
						this.b = "workbench.editor.navigationScope";
					}
					constructor(x, H, q, V, G, K, J, W, X, Y, ie) {
						super(),
							(this.h = x),
							(this.j = H),
							(this.m = q),
							(this.n = V),
							(this.q = G),
							(this.r = K),
							(this.s = J),
							(this.t = W),
							(this.u = X),
							(this.w = Y),
							(this.y = ie),
							(this.c = this.D(new r.$Zc())),
							(this.f = void 0),
							(this.g = this.t.createInstance(z)),
							(this.Q = new o.$5j(
								"canNavigateBack",
								!1,
								(0, t.localize)(12471, null),
							).bindTo(this.w)),
							(this.R = new o.$5j(
								"canNavigateForward",
								!1,
								(0, t.localize)(12472, null),
							).bindTo(this.w)),
							(this.S = new o.$5j(
								"canNavigateBackInNavigationLocations",
								!1,
								(0, t.localize)(12473, null),
							).bindTo(this.w)),
							(this.U = new o.$5j(
								"canNavigateForwardInNavigationLocations",
								!1,
								(0, t.localize)(12474, null),
							).bindTo(this.w)),
							(this.W = new o.$5j(
								"canNavigateToLastNavigationLocation",
								!1,
								(0, t.localize)(12475, null),
							).bindTo(this.w)),
							(this.X = new o.$5j(
								"canNavigateBackInEditLocations",
								!1,
								(0, t.localize)(12476, null),
							).bindTo(this.w)),
							(this.Y = new o.$5j(
								"canNavigateForwardInEditLocations",
								!1,
								(0, t.localize)(12477, null),
							).bindTo(this.w)),
							(this.Z = new o.$5j(
								"canNavigateToLastEditLocation",
								!1,
								(0, t.localize)(12478, null),
							).bindTo(this.w)),
							(this.$ = new o.$5j(
								"canReopenClosedEditor",
								!1,
								(0, t.localize)(12479, null),
							).bindTo(this.w)),
							(this.ab = this.D(new a.$re())),
							(this.onDidChangeEditorNavigationStack = this.ab.event),
							(this.bb = void 0),
							(this.cb = new Map()),
							(this.db = new Map()),
							(this.eb = C.GoScope.DEFAULT),
							(this.qb = void 0),
							(this.rb = 0),
							(this.sb = void 0),
							(this.tb = 0),
							(this.ub = !1),
							(this.vb = !1),
							(this.Ab = []),
							(this.Bb = !1),
							(this.Hb = void 0),
							(this.Ib = new Map()),
							(this.Jb = this.D(
								new s.$fgb(L.$Bfb, () => {
									const ne = this.D(
										this.t.createInstance(
											v.$0Y,
											(ee) =>
												(0, n.$x7)(
													ee
														? this.q.getValue({ resource: ee })
														: this.q.getValue(),
												) || Object.create(null),
											(ee) =>
												ee.affectsConfiguration(d.$Ml) ||
												ee.affectsConfiguration(n.$n7),
										),
									);
									return this.D(ne.onExpressionChange(() => this.Ob())), ne;
								}),
							)),
							this.z(),
							this.h.activeEditorPane && this.I();
					}
					getRecentLocations(x = 100) {
						return this.gb().getRecentLocations(x);
					}
					z() {
						this.F(),
							this.D(this.h.onDidActiveEditorChange(() => this.I())),
							this.D(this.h.onDidOpenEditorFail((x) => this.O(x.editor))),
							this.D(this.h.onDidCloseEditor((x) => this.C(x))),
							this.D(
								this.h.onDidMostRecentlyActiveEditorsChange(() => this.yb()),
							),
							this.D(this.j.onDidRemoveGroup((x) => this.H(x))),
							this.D(this.r.onDidFilesChange((x) => this.J(x))),
							this.D(this.r.onDidRunOperation((x) => this.J(x))),
							this.D(this.n.onWillSaveState(() => this.Ub())),
							this.fb(),
							this.D(
								this.onDidChangeEditorNavigationStack(() =>
									this.updateContextKeys(),
								),
							),
							this.D(
								this.j.onDidChangeActiveGroup(() => this.updateContextKeys()),
							);
					}
					C(x) {
						this.jb(x), this.Cb(x);
					}
					F() {
						const x = this.D(new r.$Zc()),
							H = () => {
								x.clear(),
									this.q.getValue(M.a) &&
										this.D(
											a.Event.runAndSubscribe(
												this.u.onDidAddContainer,
												({ container: q, disposables: V }) => {
													const G = V.add(new r.$Zc());
													G.add(
														(0, s.$0fb)(q, s.$$gb.MOUSE_DOWN, (K) =>
															this.G(K, !0),
														),
													),
														G.add(
															(0, s.$0fb)(q, s.$$gb.MOUSE_UP, (K) =>
																this.G(K, !1),
															),
														),
														x.add(G);
												},
												{
													container: this.u.mainContainer,
													disposables: this.B,
												},
											),
										);
							};
						this.D(
							this.q.onDidChangeConfiguration((q) => {
								q.affectsConfiguration(M.a) && H();
							}),
						),
							H();
					}
					G(x, H) {
						switch (x.button) {
							case 3:
								s.$ahb.stop(x), H && this.goBack();
								break;
							case 4:
								s.$ahb.stop(x), H && this.goForward();
								break;
						}
					}
					H(x) {
						this.kb(x);
					}
					I() {
						const x = this.j.activeGroup,
							H = x.activeEditorPane;
						if (!(this.f && this.g.matchesEditorIdentifier(this.f, H))) {
							if (
								((this.f = H?.input
									? { editor: H.input, groupId: H.group.id }
									: void 0),
								this.c.clear(),
								!H?.group.isTransient(H.input))
							)
								this.L(x, H);
							else {
								this.y.trace(
									`[History]: ignoring transient editor change until becoming non-transient (editor: ${H.input?.resource?.toString()}})`,
								);
								const q = x.onDidModelChange((V) => {
									V.kind === w.GroupModelChangeKind.EDITOR_TRANSIENT &&
										V.editor === H.input &&
										!H.group.isTransient(H.input) &&
										(q.dispose(), this.L(x, H));
								});
								this.c.add(q);
							}
							(0, w.$f1)(H) &&
								this.c.add(
									H.onDidChangeSelection((q) => {
										H.group.isTransient(H.input)
											? this.y.trace(
													`[History]: ignoring transient editor selection change (editor: ${H.input?.resource?.toString()}})`,
												)
											: this.M(x, H, q);
									}),
								),
								this.updateContextKeys();
						}
					}
					J(x) {
						x instanceof d.$El
							? x.gotDeleted() && this.O(x)
							: x.isOperation(d.FileOperation.DELETE)
								? this.O(x)
								: x.isOperation(d.FileOperation.MOVE) &&
									x.target.isFile &&
									this.N(x);
					}
					L(x, H) {
						this.Kb(H), this.hb(x, H);
					}
					M(x, H, q) {
						this.ib(x, H, q);
					}
					N(x) {
						this.Pb(x), this.nb(x);
					}
					O(x) {
						this.removeFromHistory(x), this.mb(x), this.Eb(x), this.P(x);
					}
					P(x) {
						let H;
						(0, w.$r1)(x)
							? (H = w.$A1.getOriginalUri(x))
							: x instanceof d.$El || (H = x.resource),
							H && this.s.removeRecentlyOpened([H]);
					}
					clear() {
						this.clearRecentlyOpened(),
							this.lb(),
							(this.Ab = []),
							this.updateContextKeys();
					}
					updateContextKeys() {
						this.w.bufferChangeEvents(() => {
							const x = this.gb();
							this.Q.set(x.canGoBack(C.GoFilter.NONE)),
								this.R.set(x.canGoForward(C.GoFilter.NONE)),
								this.S.set(x.canGoBack(C.GoFilter.NAVIGATION)),
								this.U.set(x.canGoForward(C.GoFilter.NAVIGATION)),
								this.W.set(x.canGoLast(C.GoFilter.NAVIGATION)),
								this.X.set(x.canGoBack(C.GoFilter.EDITS)),
								this.Y.set(x.canGoForward(C.GoFilter.EDITS)),
								this.Z.set(x.canGoLast(C.GoFilter.EDITS)),
								this.$.set(this.Ab.length > 0);
						});
					}
					fb() {
						const x = () => {
							this.pb();
							const H = this.q.getValue(M.b);
							H === "editorGroup"
								? (this.eb = C.GoScope.EDITOR_GROUP)
								: H === "editor"
									? (this.eb = C.GoScope.EDITOR)
									: (this.eb = C.GoScope.DEFAULT);
						};
						this.D(
							this.q.onDidChangeConfiguration((H) => {
								H.affectsConfiguration(M.b) && x();
							}),
						),
							x();
					}
					gb(x = this.j.activeGroup, H = x.activeEditor) {
						switch (this.eb) {
							case C.GoScope.EDITOR: {
								if (!H) return new B();
								let q = this.db.get(x.id);
								q || ((q = new Map()), this.db.set(x.id, q));
								let V = q.get(H)?.stack;
								if (!V) {
									const G = new r.$Zc();
									(V = G.add(this.t.createInstance(O, C.GoScope.EDITOR))),
										G.add(V.onDidChange(() => this.ab.fire())),
										q.set(H, { stack: V, disposable: G });
								}
								return V;
							}
							case C.GoScope.EDITOR_GROUP: {
								let q = this.cb.get(x.id)?.stack;
								if (!q) {
									const V = new r.$Zc();
									(q = V.add(this.t.createInstance(O, C.GoScope.EDITOR_GROUP))),
										V.add(q.onDidChange(() => this.ab.fire())),
										this.cb.set(x.id, { stack: q, disposable: V });
								}
								return q;
							}
							case C.GoScope.DEFAULT:
								return (
									this.bb ||
										((this.bb = this.D(
											this.t.createInstance(O, C.GoScope.DEFAULT),
										)),
										this.D(this.bb.onDidChange(() => this.ab.fire()))),
									this.bb
								);
						}
					}
					goForward(x) {
						return this.gb().goForward(x);
					}
					goBack(x) {
						return this.gb().goBack(x);
					}
					goPrevious(x) {
						return this.gb().goPrevious(x);
					}
					goLast(x) {
						return this.gb().goLast(x);
					}
					hb(x, H) {
						this.gb(x, H?.input).handleActiveEditorChange(H);
					}
					ib(x, H, q) {
						this.gb(x, H.input).handleActiveEditorSelectionChange(H, q);
					}
					jb(x) {
						const H = this.db.get(x.groupId);
						if (H) {
							const q = H.get(x.editor);
							q && (q.disposable.dispose(), H.delete(x.editor)),
								H.size === 0 && this.db.delete(x.groupId);
						}
					}
					kb(x) {
						this.bb?.remove(x.id);
						const H = this.cb.get(x.id);
						H && (H.disposable.dispose(), this.cb.delete(x.id));
					}
					lb() {
						this.ob((x) => x.clear());
					}
					mb(x) {
						this.ob((H) => H.remove(x));
					}
					nb(x) {
						this.ob((H) => H.move(x));
					}
					ob(x) {
						this.bb && x(this.bb);
						for (const [, H] of this.cb) x(H.stack);
						for (const [, H] of this.db) for (const [, q] of H) x(q.stack);
					}
					pb() {
						this.bb?.dispose(), (this.bb = void 0);
						for (const [, x] of this.cb) x.disposable.dispose();
						this.cb.clear();
						for (const [, x] of this.db)
							for (const [, H] of x) H.disposable.dispose();
						this.db.clear();
					}
					openNextRecentlyUsedEditor(x) {
						const [H, q] = this.xb((V) => V - 1, x);
						return this.wb(H[q], x);
					}
					openPreviouslyUsedEditor(x) {
						const [H, q] = this.xb((V) => V + 1, x);
						return this.wb(H[q], x);
					}
					async wb(x, H) {
						if (x) {
							const q = typeof H != "number" || !this.j.getGroup(H);
							q ? (this.ub = !0) : (this.vb = !0);
							const V = this.j.getGroup(x.groupId) ?? this.j.activeGroup;
							try {
								await V.openEditor(x.editor);
							} finally {
								q ? (this.ub = !1) : (this.vb = !1);
							}
						}
					}
					xb(x, H) {
						let q, V;
						const G = typeof H == "number" ? this.j.getGroup(H) : void 0;
						G
							? ((q =
									this.sb ||
									G.getEditors(w.EditorsOrder.MOST_RECENTLY_ACTIVE).map(
										(J) => ({ groupId: G.id, editor: J }),
									)),
								(V = this.tb))
							: ((q =
									this.qb ||
									this.h.getEditors(w.EditorsOrder.MOST_RECENTLY_ACTIVE)),
								(V = this.rb));
						let K = x(V);
						return (
							K < 0 ? (K = 0) : K > q.length - 1 && (K = q.length - 1),
							G
								? ((this.sb = q), (this.tb = K))
								: ((this.qb = q), (this.rb = K)),
							[q, K]
						);
					}
					yb() {
						this.ub || ((this.qb = void 0), (this.rb = 0)),
							this.vb || ((this.sb = void 0), (this.tb = 0));
					}
					static {
						this.zb = 20;
					}
					Cb(x) {
						if (this.Bb) return;
						const { editor: H, context: q } = x;
						if (
							q === w.EditorCloseContext.REPLACE ||
							q === w.EditorCloseContext.MOVE
						)
							return;
						const V = H.toUntyped();
						if (!V) return;
						const G = [],
							K = w.$A1.getOriginalUri(H, {
								supportSideBySide: w.SideBySideEditor.BOTH,
							});
						i.URI.isUri(K)
							? G.push(K)
							: K && G.push(...(0, f.$Lb)([K.primary, K.secondary])),
							this.Eb(H),
							this.Ab.push({
								editorId: H.editorId,
								editor: V,
								resource: w.$A1.getOriginalUri(H),
								associatedResources: G,
								index: x.index,
								sticky: x.sticky,
							}),
							this.Ab.length > M.zb && this.Ab.shift(),
							this.$.set(!0);
					}
					async reopenLastClosedEditor() {
						const x = this.Ab.pop();
						let H;
						return x && (H = this.Db(x)), this.$.set(this.Ab.length > 0), H;
					}
					async Db(x) {
						const H = {
							pinned: !0,
							sticky: x.sticky,
							index: x.index,
							ignoreError: !0,
						};
						((x.sticky && !this.j.activeGroup.isSticky(x.index)) ||
							(!x.sticky && this.j.activeGroup.isSticky(x.index))) &&
							(H.index = void 0);
						let q;
						if (!this.j.activeGroup.contains(x.editor)) {
							this.Bb = !0;
							try {
								q = await this.h.openEditor({
									...x.editor,
									options: { ...x.editor.options, ...H },
								});
							} finally {
								this.Bb = !1;
							}
						}
						q || ((0, f.$Yb)(this.Ab, x), this.reopenLastClosedEditor());
					}
					Eb(x) {
						(this.Ab = this.Ab.filter((H) =>
							(0, w.$r1)(x) && H.editorId !== x.editorId
								? !0
								: !(
										(H.resource && this.g.matchesFile(H.resource, x)) ||
										H.associatedResources.some((q) => this.g.matchesFile(q, x))
									),
						)),
							this.$.set(this.Ab.length > 0);
					}
					static {
						this.Fb = 200;
					}
					static {
						this.Gb = "history.entries";
					}
					Kb(x) {
						const H = x?.input;
						!H ||
							H.isDisposed() ||
							!this.Nb(H) ||
							(this.removeFromHistory(H), this.Lb(H));
					}
					Lb(x, H = !0) {
						this.Rb(this.Hb);
						const q = this.g.preferResourceEditorInput(x);
						q &&
							(H ? this.Hb.unshift(q) : this.Hb.push(q),
							this.Hb.length > M.Fb &&
								this.g.clearOnEditorDispose(this.Hb.pop(), this.Ib),
							(0, w.$r1)(x) &&
								this.g.onEditorDispose(x, () => this.Mb(q), this.Ib));
					}
					Mb(x) {
						if ((0, w.$r1)(x))
							if (!(0, w.$s1)(x)) this.removeFromHistory(x);
							else {
								const H = [],
									q = x.primary.matches(x.secondary)
										? [x.primary]
										: [x.primary, x.secondary];
								for (const V of q) {
									const G = this.g.preferResourceEditorInput(V);
									(0, w.$i1)(G) && this.Nb(G) && H.push(G);
								}
								this.Qb(x, ...H);
							}
						else this.Nb(x) || this.removeFromHistory(x);
					}
					Nb(x) {
						return (0, w.$r1)(x) ? !0 : !this.Jb.value.matches(x.resource);
					}
					Ob() {
						this.Rb(this.Hb),
							(this.Hb = this.Hb.filter((x) => {
								const H = this.Nb(x);
								return H || this.g.clearOnEditorDispose(x, this.Ib), H;
							}));
					}
					Pb(x) {
						x.isOperation(d.FileOperation.MOVE) &&
							this.removeFromHistory(x) &&
							this.Lb({ resource: x.target.resource });
					}
					removeFromHistory(x) {
						let H = !1;
						return (
							this.Rb(this.Hb),
							(this.Hb = this.Hb.filter((q) => {
								const V = this.g.matchesEditor(x, q);
								return (
									V && (this.g.clearOnEditorDispose(x, this.Ib), (H = !0)), !V
								);
							})),
							H
						);
					}
					Qb(x, ...H) {
						this.Rb(this.Hb);
						let q = !1;
						const V = [];
						for (const G of this.Hb)
							this.g.matchesEditor(x, G)
								? (this.g.clearOnEditorDispose(x, this.Ib),
									q || (V.push(...H), (q = !0)))
								: H.some((K) => this.g.matchesEditor(K, G)) || V.push(G);
						q || V.push(...H), (this.Hb = V);
					}
					clearRecentlyOpened() {
						this.Hb = [];
						for (const [, x] of this.Ib) (0, r.$Vc)(x);
						this.Ib.clear();
					}
					getHistory() {
						return this.Rb(this.Hb), this.Hb;
					}
					Rb(x) {
						this.Hb ||
							((this.Hb = []),
							this.j.isReady
								? this.Sb()
								: (async () => (await this.j.whenReady, this.Sb()))());
					}
					Sb() {
						this.Hb = [];
						const x = this.Tb(),
							H = [
								...this.h.getEditors(w.EditorsOrder.MOST_RECENTLY_ACTIVE),
							].reverse(),
							q = new Set();
						for (const { editor: V } of H)
							this.Nb(V) &&
								(this.Lb(V),
								V.resource && q.add(`${V.resource.toString()}/${V.editorId}`));
						for (const V of x)
							!q.has(`${V.resource.toString()}/${V.options?.override}`) &&
								this.Nb(V) &&
								this.Lb(V, !1);
					}
					Tb() {
						const x = [],
							H = this.n.get(M.Gb, u.StorageScope.WORKSPACE);
						if (H)
							try {
								const q = JSON.parse(H);
								for (const V of q)
									if (!(!V.editor || !V.editor.resource))
										try {
											x.push({
												...V.editor,
												resource:
													typeof V.editor.resource == "string"
														? i.URI.parse(V.editor.resource)
														: i.URI.from(V.editor.resource),
											});
										} catch (G) {
											(0, $.$4)(G);
										}
							} catch (q) {
								(0, $.$4)(q);
							}
						return x;
					}
					Ub() {
						if (!this.Hb) return;
						const x = [];
						for (const H of this.Hb)
							(0, w.$r1)(H) ||
								!(0, w.$i1)(H) ||
								x.push({ editor: { ...H, resource: H.resource.toString() } });
						this.n.store(
							M.Gb,
							JSON.stringify(x),
							u.StorageScope.WORKSPACE,
							u.StorageTarget.MACHINE,
						);
					}
					getLastActiveWorkspaceRoot(x, H) {
						const q = this.m.getWorkspace().folders;
						if (q.length !== 0) {
							if (q.length === 1) {
								const V = q[0].uri;
								return (!x || V.scheme === x) && (!H || V.authority === H)
									? V
									: void 0;
							}
							for (const V of this.getHistory()) {
								if (
									(0, w.$r1)(V) ||
									(x && V.resource.scheme !== x) ||
									(H && V.resource.authority !== H)
								)
									continue;
								const G = this.m.getWorkspaceFolder(V.resource);
								if (G) return G.uri;
							}
							for (const V of q) {
								const G = V.uri;
								if ((!x || G.scheme === x) && (!H || G.authority === H))
									return G;
							}
						}
					}
					getLastActiveFile(x, H) {
						for (const q of this.getHistory()) {
							let V;
							if (
								((0, w.$r1)(q)
									? (V = w.$A1.getOriginalUri(q, { filterByScheme: x }))
									: (V = q.resource),
								V && V.scheme === x && (!H || V.authority === H))
							)
								return V;
						}
					}
					dispose() {
						super.dispose();
						for (const [, x] of this.cb) x.disposable.dispose();
						for (const [, x] of this.db)
							for (const [, H] of x) H.disposable.dispose();
						for (const [, x] of this.Ib) x.dispose();
					}
				};
				(e.$Cvc = A),
					(e.$Cvc =
						A =
						M =
							Ne(
								[
									j(0, E.$IY),
									j(1, c.$EY),
									j(2, m.$Vi),
									j(3, u.$lq),
									j(4, h.$gj),
									j(5, d.$ll),
									j(6, l.$cRb),
									j(7, g.$Li),
									j(8, p.$mEb),
									j(9, o.$6j),
									j(10, P.$ik),
								],
								A,
							)),
					(0, b.$lK)(C.$Feb, A, b.InstantiationType.Eager);
				class R {
					constructor(x, H, q) {
						(this.a = x), (this.selection = H), (this.b = q);
					}
					justifiesNewNavigationEntry(x) {
						if (
							this.a.groupId !== x.a.groupId ||
							!this.a.editor.matches(x.a.editor) ||
							!this.selection ||
							!x.selection
						)
							return !0;
						const H = this.selection.compare(x.selection);
						return H === w.EditorPaneSelectionCompareResult.SIMILAR &&
							(x.b === w.EditorPaneSelectionChangeReason.NAVIGATION ||
								x.b === w.EditorPaneSelectionChangeReason.JUMP)
							? !0
							: H === w.EditorPaneSelectionCompareResult.DIFFERENT;
					}
				}
				let O = class extends r.$1c {
					constructor(x, H) {
						super(),
							(this.g = x),
							(this.h = H),
							(this.a = this.D(
								this.h.createInstance(U, C.GoFilter.NONE, this.g),
							)),
							(this.b = this.D(
								this.h.createInstance(U, C.GoFilter.EDITS, this.g),
							)),
							(this.c = this.D(
								this.h.createInstance(U, C.GoFilter.NAVIGATION, this.g),
							)),
							(this.f = [this.a, this.b, this.c]),
							(this.onDidChange = a.Event.any(
								this.a.onDidChange,
								this.b.onDidChange,
								this.c.onDidChange,
							));
					}
					canGoForward(x) {
						return this.j(x).canGoForward();
					}
					goForward(x) {
						return this.j(x).goForward();
					}
					canGoBack(x) {
						return this.j(x).canGoBack();
					}
					goBack(x) {
						return this.j(x).goBack();
					}
					goPrevious(x) {
						return this.j(x).goPrevious();
					}
					canGoLast(x) {
						return this.j(x).canGoLast();
					}
					goLast(x) {
						return this.j(x).goLast();
					}
					j(x = C.GoFilter.NONE) {
						switch (x) {
							case C.GoFilter.NONE:
								return this.a;
							case C.GoFilter.EDITS:
								return this.b;
							case C.GoFilter.NAVIGATION:
								return this.c;
						}
					}
					getRecentLocations(x, H) {
						return this.j(H).getRecentLocations(x);
					}
					handleActiveEditorChange(x) {
						this.a.notifyNavigation(x);
					}
					handleActiveEditorSelectionChange(x, H) {
						const q = this.a.s;
						this.a.notifyNavigation(x, H),
							H.reason === w.EditorPaneSelectionChangeReason.EDIT
								? this.b.notifyNavigation(x, H)
								: (H.reason === w.EditorPaneSelectionChangeReason.NAVIGATION ||
										H.reason === w.EditorPaneSelectionChangeReason.JUMP) &&
									!this.a.isNavigating() &&
									(H.reason === w.EditorPaneSelectionChangeReason.JUMP &&
										!this.c.isNavigating() &&
										q &&
										this.c.addOrReplace(q.groupId, q.editor, q.selection),
									this.c.notifyNavigation(x, H));
					}
					clear() {
						for (const x of this.f) x.clear();
					}
					remove(x) {
						for (const H of this.f) H.remove(x);
					}
					move(x) {
						for (const H of this.f) H.move(x);
					}
				};
				O = Ne([j(1, g.$Li)], O);
				class B {
					constructor() {
						this.onDidChange = a.Event.None;
					}
					canGoForward() {
						return !1;
					}
					async goForward() {}
					canGoBack() {
						return !1;
					}
					async goBack() {}
					async goPrevious() {}
					canGoLast() {
						return !1;
					}
					async goLast() {}
					handleActiveEditorChange() {}
					handleActiveEditorSelectionChange() {}
					getRecentLocations(x, H) {
						return [];
					}
					clear() {}
					remove() {}
					move() {}
					dispose() {}
				}
				let U = class extends r.$1c {
					static {
						N = this;
					}
					static {
						this.a = 50;
					}
					static {
						this.b = 100;
					}
					get s() {
						return this.j[this.m];
					}
					getRecentLocations(x) {
						const H = [];
						if (this.m === -1) return H;
						const q = (K) => {
							const J = this.j[K].editor.resource,
								W = this.j[K].selection;
							J !== void 0 &&
								W !== void 0 &&
								W instanceof k.$CVb &&
								H.push({ uri: J, location: W.getSelection() });
						};
						let V = this.m + 1,
							G = this.m - 1;
						for (; V < this.j.length || G >= 0; ) {
							if (V < this.j.length) {
								if (H.length >= x) break;
								q(V), V++;
							}
							if (G >= 0) {
								if (H.length >= x) break;
								q(G), G--;
							}
						}
						return H;
					}
					set s(x) {
						x && (this.j[this.m] = x);
					}
					constructor(x, H, q, V, G, K, J) {
						super(),
							(this.t = x),
							(this.u = H),
							(this.w = q),
							(this.y = V),
							(this.z = G),
							(this.C = K),
							(this.F = J),
							(this.c = this.D(new a.$re())),
							(this.onDidChange = this.c.event),
							(this.f = new Map()),
							(this.g = new Map()),
							(this.h = this.w.createInstance(z)),
							(this.j = []),
							(this.m = -1),
							(this.n = -1),
							(this.q = !1),
							(this.r = void 0),
							this.G();
					}
					G() {
						this.D(this.onDidChange(() => this.H())),
							this.D(this.C.onDidChangeLogLevel(() => this.H()));
					}
					H() {
						if (this.C.getLevel() !== P.LogLevel.Trace) return;
						const x = [];
						for (const H of this.j)
							typeof H.selection?.log == "function"
								? x.push(
										`- group: ${H.groupId}, editor: ${H.editor.resource?.toString()}, selection: ${H.selection.log()}`,
									)
								: x.push(
										`- group: ${H.groupId}, editor: ${H.editor.resource?.toString()}, selection: <none>`,
									);
						x.length === 0
							? this.I(
									`index: ${this.m}, navigating: ${this.isNavigating()}: <empty>`,
								)
							: this.I(`index: ${this.m}, navigating: ${this.isNavigating()}
${x.join(`
`)}
			`);
					}
					I(x, H = null, q) {
						if (this.C.getLevel() !== P.LogLevel.Trace) return;
						let V;
						switch (this.t) {
							case C.GoFilter.NONE:
								V = "global";
								break;
							case C.GoFilter.EDITS:
								V = "edits";
								break;
							case C.GoFilter.NAVIGATION:
								V = "navigation";
								break;
						}
						let G;
						switch (this.u) {
							case C.GoScope.DEFAULT:
								G = "default";
								break;
							case C.GoScope.EDITOR_GROUP:
								G = "editorGroup";
								break;
							case C.GoScope.EDITOR:
								G = "editor";
								break;
						}
						H !== null
							? this.C.trace(
									`[History stack ${V}-${G}]: ${x} (editor: ${H?.resource?.toString()}, event: ${this.J(q)})`,
								)
							: this.C.trace(`[History stack ${V}-${G}]: ${x}`);
					}
					J(x) {
						if (!x) return "<none>";
						switch (x.reason) {
							case w.EditorPaneSelectionChangeReason.EDIT:
								return "edit";
							case w.EditorPaneSelectionChangeReason.NAVIGATION:
								return "navigation";
							case w.EditorPaneSelectionChangeReason.JUMP:
								return "jump";
							case w.EditorPaneSelectionChangeReason.PROGRAMMATIC:
								return "programmatic";
							case w.EditorPaneSelectionChangeReason.USER:
								return "user";
						}
					}
					L(x) {
						if (!this.g.has(x)) {
							const H = this.z.getGroup(x);
							H &&
								this.g.set(
									x,
									H.onWillMoveEditor((q) => this.M(q)),
								);
						}
					}
					M(x) {
						if (
							(this.I("onWillMoveEditor()", x.editor),
							this.u !== C.GoScope.EDITOR_GROUP)
						)
							for (const H of this.j)
								H.groupId === x.groupId &&
									this.h.matchesEditor(x.editor, H.editor) &&
									(H.groupId = x.target);
					}
					notifyNavigation(x, H) {
						this.I("notifyNavigation()", x?.input, H);
						const q = (0, w.$f1)(x),
							V = x?.input && !x.input.isDisposed();
						this.q
							? (this.I(
									"notifyNavigation() ignoring (navigating)",
									x?.input,
									H,
								),
								q && V
									? (this.I(
											"notifyNavigation() updating current selection state",
											x?.input,
											H,
										),
										(this.r = new R(
											{ groupId: x.group.id, editor: x.input },
											x.getSelection(),
											H?.reason,
										)))
									: (this.I(
											"notifyNavigation() dropping current selection state",
											x?.input,
											H,
										),
										(this.r = void 0)))
							: (this.I("notifyNavigation() not ignoring", x?.input, H),
								q && V
									? this.N(x.group.id, x.input, x.getSelection(), H)
									: ((this.r = void 0), V && this.O(x.group.id, x.input)));
					}
					N(x, H, q, V) {
						if (
							this.s?.groupId === x &&
							!q &&
							this.h.matchesEditor(this.s.editor, H)
						)
							return;
						this.I("onSelectionAwareEditorNavigation()", H, V);
						const G = new R({ groupId: x, editor: H }, q, V?.reason);
						!this.r || this.r.justifiesNewNavigationEntry(G)
							? this.P(x, H, G.selection)
							: this.Q(x, H, G.selection),
							(this.r = G);
					}
					O(x, H) {
						(this.s?.groupId === x && this.h.matchesEditor(this.s.editor, H)) ||
							(this.I("onNonSelectionAwareEditorNavigation()", H),
							this.P(x, H));
					}
					P(x, H, q) {
						this.q || this.addOrReplace(x, H, q);
					}
					Q(x, H, q) {
						this.q || this.addOrReplace(x, H, q, !0);
					}
					addOrReplace(x, H, q, V) {
						this.L(x);
						let G = !1;
						this.s &&
							(V || this.R(this.s, { groupId: x, editor: H, selection: q })) &&
							(G = !0);
						const K = this.h.preferResourceEditorInput(H);
						if (!K) return;
						G ? this.I("replace()", K) : this.I("add()", K);
						const J = { groupId: x, editor: K, selection: q },
							W = [];
						if (G) this.s && W.push(this.s), (this.s = J);
						else {
							if (this.j.length > this.m + 1) {
								for (let ie = this.m + 1; ie < this.j.length; ie++)
									W.push(this.j[ie]);
								this.j = this.j.slice(0, this.m + 1);
							}
							this.j.splice(this.m + 1, 0, J),
								Promise.resolve()
									.then(() => {
										this.F?.maybeRefreshFeatureStatus(
											"shouldUseLongHistoryStack",
										);
									})
									.catch(() => {});
							let X = !1;
							try {
								X =
									this.F?.getCachedFeatureStatus("shouldUseLongHistoryStack") ??
									!1;
							} catch (ie) {
								console.warn("aiFeatureService error in historyService", ie);
							}
							const Y = X ? N.b : N.a;
							this.j.length > Y
								? (W.push(this.j.shift()), this.n >= 0 && this.n--)
								: this.X(this.m + 1, !0);
						}
						for (const X of W) this.h.clearOnEditorDispose(X.editor, this.f);
						(0, w.$r1)(K) &&
							this.h.onEditorDispose(K, () => this.remove(K), this.f),
							this.c.fire();
					}
					R(x, H) {
						return x.groupId !== H.groupId ||
							!this.h.matchesEditor(x.editor, H.editor)
							? !1
							: x.selection
								? H.selection
									? x.selection.compare(H.selection) ===
										w.EditorPaneSelectionCompareResult.IDENTICAL
									: !1
								: !0;
					}
					move(x) {
						if (x.isOperation(d.FileOperation.MOVE))
							for (const H of this.j)
								this.h.matchesEditor(x, H.editor) &&
									(H.editor = { resource: x.target.resource });
					}
					remove(x) {
						const H = this.j.length;
						(this.j = this.j.filter((q) => {
							const V =
								typeof x == "number"
									? q.groupId === x
									: this.h.matchesEditor(x, q.editor);
							return V && this.h.clearOnEditorDispose(q.editor, this.f), !V;
						})),
							H !== this.j.length &&
								(this.S(),
								(this.m = this.j.length - 1),
								(this.n = -1),
								typeof x == "number" &&
									(this.g.get(x)?.dispose(), this.g.delete(x)),
								this.c.fire());
					}
					S() {
						const x = [];
						let H;
						for (const q of this.j) (H && this.R(q, H)) || ((H = q), x.push(q));
						this.j = x;
					}
					clear() {
						(this.m = -1), (this.n = -1), this.j.splice(0);
						for (const [, x] of this.f) (0, r.$Vc)(x);
						this.f.clear();
						for (const [, x] of this.g) (0, r.$Vc)(x);
						this.g.clear();
					}
					dispose() {
						super.dispose(), this.clear();
					}
					canGoForward() {
						return this.j.length > this.m + 1;
					}
					async goForward() {
						if (!(await this.U()) && this.canGoForward())
							return this.X(this.m + 1), this.Y();
					}
					canGoBack() {
						return this.m > 0;
					}
					async goBack() {
						if (!(await this.U()) && this.canGoBack())
							return this.X(this.m - 1), this.Y();
					}
					async goPrevious() {
						if (!(await this.U()))
							return this.n === -1 ? this.goBack() : (this.X(this.n), this.Y());
					}
					canGoLast() {
						return this.j.length > 0;
					}
					async goLast() {
						if (this.canGoLast()) return this.X(this.j.length - 1), this.Y();
					}
					async U() {
						return this.t === C.GoFilter.NONE || this.W()
							? !1
							: (await this.Y(), !0);
					}
					W() {
						if (!this.s?.selection) return !1;
						const x = this.y.activeEditorPane;
						if (
							!(0, w.$f1)(x) ||
							x.group.id !== this.s.groupId ||
							!x.input ||
							!this.h.matchesEditor(x.input, this.s.editor)
						)
							return !1;
						const H = x.getSelection();
						return H
							? H.compare(this.s.selection) ===
									w.EditorPaneSelectionCompareResult.IDENTICAL
							: !1;
					}
					X(x, H) {
						(this.n = this.m), (this.m = x), H || this.c.fire();
					}
					async Y() {
						this.q = !0;
						try {
							this.s && (await this.Z(this.s));
						} finally {
							this.q = !1;
						}
					}
					Z(x) {
						let H = Object.create(null);
						return (
							x.selection && (H = x.selection.restore(H)),
							(0, w.$r1)(x.editor)
								? this.y.openEditor(x.editor, H, x.groupId)
								: this.y.openEditor(
										{ ...x.editor, options: { ...x.editor.options, ...H } },
										x.groupId,
									)
						);
					}
					isNavigating() {
						return this.q;
					}
				};
				(e.$Dvc = U),
					(e.$Dvc =
						U =
						N =
							Ne(
								[
									j(2, g.$Li),
									j(3, E.$IY),
									j(4, c.$EY),
									j(5, P.$ik),
									j(6, D.$H7b),
								],
								U,
							));
				let z = class {
					constructor(x, H, q, V) {
						(this.a = x), (this.b = H), (this.c = q), (this.d = V);
					}
					preferResourceEditorInput(x) {
						const H = w.$A1.getOriginalUri(x);
						if (
							H?.scheme === y.Schemas.file ||
							H?.scheme === y.Schemas.vscodeRemote ||
							H?.scheme === y.Schemas.vscodeUserData ||
							H?.scheme === this.d.defaultUriScheme
						) {
							if ((0, w.$r1)(x)) {
								const V = x.toUntyped();
								if ((0, w.$i1)(V)) return V;
							}
							return x;
						} else return (0, w.$r1)(x) ? x : void 0;
					}
					matchesEditor(x, H) {
						return x instanceof d.$El || x instanceof d.$Dl
							? (0, w.$r1)(H)
								? !1
								: x instanceof d.$El
									? x.contains(H.resource, d.FileChangeType.DELETED)
									: this.matchesFile(H.resource, x)
							: (0, w.$r1)(x)
								? (0, w.$r1)(H)
									? x.matches(H)
									: this.matchesFile(H.resource, x)
								: (0, w.$r1)(H)
									? this.matchesFile(x.resource, H)
									: x && H && this.a.extUri.isEqual(x.resource, H.resource);
					}
					matchesFile(x, H) {
						if (H instanceof d.$El)
							return H.contains(x, d.FileChangeType.DELETED);
						if (H instanceof d.$Dl)
							return this.a.extUri.isEqualOrParent(x, H.resource);
						if ((0, w.$r1)(H)) {
							const q = H.resource;
							return !q ||
								(this.b.phase >= T.LifecyclePhase.Restored &&
									!this.c.hasProvider(q))
								? !1
								: this.a.extUri.isEqual(q, x);
						}
						return this.a.extUri.isEqual(H?.resource, x);
					}
					matchesEditorIdentifier(x, H) {
						return !H?.group || x.groupId !== H.group.id
							? !1
							: H.input
								? x.editor.matches(H.input)
								: !1;
					}
					onEditorDispose(x, H, q) {
						const V = a.Event.once(x.onWillDispose)(() => H());
						let G = q.get(x);
						G || ((G = new r.$Zc()), q.set(x, G)), G.add(V);
					}
					clearOnEditorDispose(x, H) {
						if (!(0, w.$r1)(x)) return;
						const q = H.get(x);
						q && ((0, r.$Vc)(q), H.delete(x));
					}
				};
				z = Ne([j(0, I.$Vl), j(1, T.$n6), j(2, d.$ll), j(3, S.$I8)], z);
			},
		),
		define(de[4e3], he([1, 0, 241]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
			const t = !0;
		}),
		