import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../../base/common/uri.js';
import '../../../base/common/uuid.js';
import '../../../base/common/types.js';
import '../../../base/common/platform.js';
import '../../../base/common/lifecycle.js';
import '../../../platform/workspace/common/workspace.js';
import '../../contrib/tasks/common/tasks.js';
import '../../contrib/tasks/common/taskService.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../common/extHost.protocol.js';
import '../../services/configurationResolver/common/configurationResolver.js';
import '../../../base/common/errors.js';
define(
			de[3369],
			he([1, 0, 4, 9, 47, 28, 12, 3, 25, 424, 419, 101, 88, 358, 29]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1pc = void 0),
					(t = mt(t)),
					(E = mt(E)),
					(C = mt(C));
				var g;
				(function (M) {
					function N(A) {
						return { id: A.id, task: P.from(A.task) };
					}
					M.from = N;
				})(g || (g = {}));
				var p;
				(function (M) {
					function N(A, R) {
						return { id: A.id, processId: R };
					}
					M.from = N;
				})(p || (p = {}));
				var o;
				(function (M) {
					function N(A, R) {
						return { id: A.id, exitCode: R };
					}
					M.from = N;
				})(o || (o = {}));
				var f;
				(function (M) {
					function N(R) {
						const O = Object.assign(Object.create(null), R);
						return delete O._key, O;
					}
					M.from = N;
					function A(R, O) {
						let B = r.TaskDefinition.createTaskIdentifier(R, console);
						return (
							B === void 0 &&
								O &&
								(B = { _key: (0, w.$9g)(), type: "$executeOnly" }),
							B
						);
					}
					M.to = A;
				})(f || (f = {}));
				var b;
				(function (M) {
					function N(R) {
						if (R != null) return Object.assign(Object.create(null), R);
					}
					M.from = N;
					function A(R) {
						return R == null
							? r.PresentationOptions.defaults
							: Object.assign(
									Object.create(null),
									r.PresentationOptions.defaults,
									R,
								);
					}
					M.to = A;
				})(b || (b = {}));
				var s;
				(function (M) {
					function N(R) {
						if (R != null) return Object.assign(Object.create(null), R);
					}
					M.from = N;
					function A(R) {
						return R == null
							? r.RunOptions.defaults
							: Object.assign(Object.create(null), r.RunOptions.defaults, R);
					}
					M.to = A;
				})(s || (s = {}));
				var l;
				(function (M) {
					function N(R) {
						if (R != null) return { cwd: R.cwd, env: R.env };
					}
					M.from = N;
					function A(R) {
						return R == null
							? r.CommandOptions.defaults
							: { cwd: R.cwd || r.CommandOptions.defaults.cwd, env: R.env };
					}
					M.to = A;
				})(l || (l = {}));
				var y;
				(function (M) {
					function N(O) {
						const B = O;
						return B && !!B.process;
					}
					M.is = N;
					function A(O) {
						const B = E.$lg(O.name) ? O.name : O.name.value,
							U = O.args ? O.args.map((F) => (E.$lg(F) ? F : F.value)) : [],
							z = { process: B, args: U };
						return O.options && (z.options = l.from(O.options)), z;
					}
					M.from = A;
					function R(O) {
						const B = {
							runtime: r.RuntimeType.Process,
							name: O.process,
							args: O.args,
							presentation: void 0,
						};
						return (B.options = l.to(O.options)), B;
					}
					M.to = R;
				})(y || (y = {}));
				var $;
				(function (M) {
					function N(R) {
						if (R == null) return;
						const O = {
							cwd: R.cwd || r.CommandOptions.defaults.cwd,
							env: R.env,
						};
						return (
							R.shell &&
								((O.executable = R.shell.executable),
								(O.shellArgs = R.shell.args),
								(O.shellQuoting = R.shell.quoting)),
							O
						);
					}
					M.from = N;
					function A(R) {
						if (R == null) return;
						const O = { cwd: R.cwd, env: R.env };
						return (
							R.executable &&
								((O.shell = { executable: R.executable }),
								R.shellArgs && (O.shell.args = R.shellArgs),
								R.shellQuoting && (O.shell.quoting = R.shellQuoting)),
							O
						);
					}
					M.to = A;
				})($ || ($ = {}));
				var v;
				(function (M) {
					function N(O) {
						const B = O;
						return B && (!!B.commandLine || !!B.command);
					}
					M.is = N;
					function A(O) {
						const B = {};
						return (
							O.name &&
							E.$lg(O.name) &&
							(O.args === void 0 || O.args === null || O.args.length === 0)
								? (B.commandLine = O.name)
								: ((B.command = O.name), (B.args = O.args)),
							O.options && (B.options = $.from(O.options)),
							B
						);
					}
					M.from = A;
					function R(O) {
						const B = {
							runtime: r.RuntimeType.Shell,
							name: O.commandLine ? O.commandLine : O.command,
							args: O.args,
							presentation: void 0,
						};
						return O.options && (B.options = $.to(O.options)), B;
					}
					M.to = R;
				})(v || (v = {}));
				var S;
				(function (M) {
					function N(O) {
						const B = O;
						return B && B.customExecution === "customExecution";
					}
					M.is = N;
					function A(O) {
						return { customExecution: "customExecution" };
					}
					M.from = A;
					function R(O) {
						return {
							runtime: r.RuntimeType.CustomExecution,
							presentation: void 0,
						};
					}
					M.to = R;
				})(S || (S = {}));
				var I;
				(function (M) {
					function N(R) {
						const O = { label: R.label };
						return (
							R.kind === r.TaskSourceKind.Extension
								? ((O.extensionId = R.extension),
									R.workspaceFolder
										? (O.scope = R.workspaceFolder.uri)
										: (O.scope = R.scope))
								: R.kind === r.TaskSourceKind.Workspace &&
									((O.extensionId = "$core"),
									(O.scope = R.config.workspaceFolder
										? R.config.workspaceFolder.uri
										: r.TaskScope.Global)),
							O
						);
					}
					M.from = N;
					function A(R, O) {
						let B, U;
						return (
							R.scope === void 0 ||
							(typeof R.scope == "number" && R.scope !== r.TaskScope.Global)
								? O.getWorkspace().folders.length === 0
									? ((B = r.TaskScope.Global), (U = void 0))
									: ((B = r.TaskScope.Folder),
										(U = O.getWorkspace().folders[0]))
								: typeof R.scope == "number"
									? (B = R.scope)
									: ((B = r.TaskScope.Folder),
										(U =
											O.getWorkspaceFolder(i.URI.revive(R.scope)) ?? void 0)),
							{
								kind: r.TaskSourceKind.Extension,
								label: R.label,
								extension: R.extensionId,
								scope: B,
								workspaceFolder: U,
							}
						);
					}
					M.to = A;
				})(I || (I = {}));
				var T;
				(function (M) {
					function N(A) {
						const R = A;
						return R && E.$lg(R.id) && !!R.workspaceFolder;
					}
					M.is = N;
				})(T || (T = {}));
				var P;
				(function (M) {
					function N(R) {
						if (R == null || (!r.$e4.is(R) && !r.$g4.is(R) && !r.$f4.is(R)))
							return;
						const O = {
							_id: R._id,
							name: R.configurationProperties.name,
							definition: f.from(R.getDefinition(!0)),
							source: I.from(R._source),
							execution: void 0,
							presentationOptions:
								!r.$f4.is(R) && R.command
									? b.from(R.command.presentation)
									: void 0,
							isBackground: R.configurationProperties.isBackground,
							problemMatchers: [],
							hasDefinedMatchers: r.$g4.is(R) ? R.hasDefinedMatchers : !1,
							runOptions: s.from(R.runOptions),
						};
						if (
							((O.group = k.from(R.configurationProperties.group)),
							R.configurationProperties.detail &&
								(O.detail = R.configurationProperties.detail),
							!r.$f4.is(R) && R.command)
						)
							switch (R.command.runtime) {
								case r.RuntimeType.Process:
									O.execution = y.from(R.command);
									break;
								case r.RuntimeType.Shell:
									O.execution = v.from(R.command);
									break;
								case r.RuntimeType.CustomExecution:
									O.execution = S.from(R.command);
									break;
							}
						if (R.configurationProperties.problemMatchers)
							for (const B of R.configurationProperties.problemMatchers)
								E.$lg(B) && O.problemMatchers.push(B);
						return O;
					}
					M.from = N;
					function A(R, O, B, U, z) {
						if (!R || typeof R.name != "string") return;
						let F;
						if (
							(R.execution &&
								(v.is(R.execution)
									? (F = v.to(R.execution))
									: y.is(R.execution)
										? (F = y.to(R.execution))
										: S.is(R.execution) && (F = S.to(R.execution))),
							!F)
						)
							return;
						F.presentation = b.to(R.presentationOptions);
						const x = I.to(R.source, O),
							H = t.localize(2579, null, x.label, R.name),
							q = f.to(R.definition, B),
							V =
								S.is(R.execution) && R._id
									? R._id
									: `${R.source.extensionId}.${q._key}`;
						return new r.$g4(
							V,
							x,
							H,
							q.type,
							q,
							F,
							R.hasDefinedMatchers,
							s.to(R.runOptions),
							{
								name: R.name,
								identifier: H,
								group: R.group,
								isBackground: !!R.isBackground,
								problemMatchers: R.problemMatchers.slice(),
								detail: R.detail,
								icon: U,
								hide: z,
							},
						);
					}
					M.to = A;
				})(P || (P = {}));
				var k;
				(function (M) {
					function N(A) {
						if (A !== void 0)
							return {
								_id: typeof A == "string" ? A : A._id,
								isDefault:
									typeof A == "string" || typeof A.isDefault == "string"
										? !1
										: A.isDefault,
							};
					}
					M.from = N;
				})(k || (k = {}));
				var L;
				(function (M) {
					function N(R) {
						return R;
					}
					M.from = N;
					function A(R) {
						return R;
					}
					M.to = A;
				})(L || (L = {}));
				let D = class extends d.$1c {
					constructor(N, A, R, O) {
						super(),
							(this.f = A),
							(this.g = R),
							(this.h = O),
							(this.b = N.getProxy(h.$mbb.ExtHostTask)),
							(this.c = new Map()),
							this.D(
								this.f.onDidStateChange(async (B) => {
									if (B.kind === r.TaskEventKind.Changed) return;
									const U = B.__task;
									if (B.kind === r.TaskEventKind.Start) {
										const z = g.from(U.getTaskExecution());
										let F = z.task.definition;
										if (
											z.task?.execution &&
											S.is(z.task.execution) &&
											B.resolvedVariables
										) {
											const x = {};
											for (const [H, q] of B.resolvedVariables.entries())
												x[H] = q;
											F = await this.h.resolveAnyAsync(
												U.getWorkspaceFolder(),
												z.task.definition,
												x,
											);
										}
										this.b.$onDidStartTask(z, B.terminalId, F);
									} else
										B.kind === r.TaskEventKind.ProcessStarted
											? this.b.$onDidStartTaskProcess(
													p.from(U.getTaskExecution(), B.processId),
												)
											: B.kind === r.TaskEventKind.ProcessEnded
												? this.b.$onDidEndTaskProcess(
														o.from(U.getTaskExecution(), B.exitCode),
													)
												: B.kind === r.TaskEventKind.End &&
													this.b.$OnDidEndTask(g.from(U.getTaskExecution()));
								}),
							);
					}
					dispose() {
						for (const N of this.c.values()) N.disposable.dispose();
						this.c.clear(), super.dispose();
					}
					$createTaskId(N) {
						return new Promise((A, R) => {
							const O = P.to(N, this.g, !0);
							O ? A(O._id) : R(new Error("Task could not be created from DTO"));
						});
					}
					$registerTaskProvider(N, A) {
						const R = {
								provideTasks: (B) =>
									Promise.resolve(this.b.$provideTasks(N, B)).then((U) => {
										const z = [];
										for (const F of U.tasks) {
											const x = P.to(F, this.g, !0);
											x
												? z.push(x)
												: console.error(
														`Task System: can not convert task: ${JSON.stringify(F.definition, void 0, 0)}. Task will be dropped`,
													);
										}
										return { tasks: z, extension: U.extension };
									}),
								resolveTask: (B) => {
									const U = P.from(B);
									return U
										? ((U.name = U.name === void 0 ? "" : U.name),
											Promise.resolve(this.b.$resolveTask(N, U)).then((z) => {
												if (z)
													return P.to(
														z,
														this.g,
														!0,
														B.configurationProperties.icon,
														B.configurationProperties.hide,
													);
											}))
										: Promise.resolve(void 0);
								},
							},
							O = this.f.registerTaskProvider(R, A);
						return (
							this.c.set(N, { disposable: O, provider: R }),
							Promise.resolve(void 0)
						);
					}
					$unregisterTaskProvider(N) {
						const A = this.c.get(N);
						return (
							A && (A.disposable.dispose(), this.c.delete(N)),
							Promise.resolve(void 0)
						);
					}
					$fetchTasks(N) {
						return this.f.tasks(L.to(N)).then((A) => {
							const R = [];
							for (const O of A) {
								const B = P.from(O);
								B && R.push(B);
							}
							return R;
						});
					}
					j(N) {
						let A;
						if (typeof N == "string") A = N;
						else {
							const R = this.g.getWorkspace(),
								O = i.URI.revive(N);
							R.configuration?.toString() === O.toString()
								? (A = R)
								: (A = this.g.getWorkspaceFolder(O));
						}
						return A;
					}
					async $getTaskExecution(N) {
						if (T.is(N)) {
							const A = this.j(N.workspaceFolder);
							if (A) {
								const R = await this.f.getTask(A, N.id, !0);
								if (R) return { id: R._id, task: P.from(R) };
								throw new Error("Task not found");
							} else throw new Error("No workspace folder");
						} else {
							const A = P.to(N, this.g, !0);
							return { id: A._id, task: P.from(A) };
						}
					}
					$executeTask(N) {
						return new Promise((A, R) => {
							if (T.is(N)) {
								const O = this.j(N.workspaceFolder);
								O
									? this.f.getTask(O, N.id, !0).then(
											(B) => {
												if (!B) R(new Error("Task not found"));
												else {
													const U = { id: N.id, task: P.from(B) };
													this.f.run(B).then(
														(z) => {
															(z?.exitCode === void 0 || z.exitCode !== 0) &&
																this.b.$OnDidEndTask(U);
														},
														(z) => {},
													),
														A(U);
												}
											},
											(B) => {
												R(new Error("Task not found"));
											},
										)
									: R(new Error("No workspace folder"));
							} else {
								const O = P.to(N, this.g, !0);
								this.f.run(O).then(void 0, (U) => {});
								const B = { id: O._id, task: P.from(O) };
								A(B);
							}
						});
					}
					$customExecutionComplete(N, A) {
						return new Promise((R, O) => {
							this.f.getActiveTasks().then((B) => {
								for (const U of B)
									if (N === U._id) {
										this.f.extensionCallbackTaskComplete(U, A).then(
											(z) => {
												R(void 0);
											},
											(z) => {
												O(z);
											},
										);
										return;
									}
								O(new Error("Task to mark as complete not found"));
							});
						});
					}
					$terminateTask(N) {
						return new Promise((A, R) => {
							this.f.getActiveTasks().then((O) => {
								for (const B of O)
									if (N === B._id) {
										this.f.terminate(B).then(
											(U) => {
												A(void 0);
											},
											(U) => {
												R(void 0);
											},
										);
										return;
									}
								R(new n.$fb("Task to terminate not found"));
							});
						});
					}
					$registerTaskSystem(N, A) {
						let R;
						switch (A.platform) {
							case "Web":
								R = C.Platform.Web;
								break;
							case "win32":
								R = C.Platform.Windows;
								break;
							case "darwin":
								R = C.Platform.Mac;
								break;
							case "linux":
								R = C.Platform.Linux;
								break;
							default:
								R = C.$x;
						}
						this.f.registerTaskSystem(N, {
							platform: R,
							uriProvider: (O) =>
								i.URI.from({
									scheme: A.scheme,
									authority: A.authority,
									path: O,
								}),
							context: this.a,
							resolveVariables: (O, B, U) => {
								const z = [];
								return (
									B.variables.forEach((F) => z.push(F)),
									Promise.resolve(
										this.b.$resolveVariables(O.uri, {
											process: B.process,
											variables: z,
										}),
									).then((F) => {
										const x = Array.from(Object.values(F.variables));
										return new Promise((H, q) => {
											this.h
												.resolveWithInteraction(O, x, "tasks", void 0, U)
												.then(
													(V) => {
														V || H(void 0);
														const G = { process: void 0, variables: new Map() };
														for (let K = 0; K < x.length; K++) {
															const J = z[K].substring(2, z[K].length - 1);
															if (V && F.variables[z[K]] === z[K]) {
																const W = V.get(J);
																typeof W == "string" && G.variables.set(J, W);
															} else G.variables.set(J, x[K]);
														}
														E.$lg(F.process) && (G.process = F.process), H(G);
													},
													(V) => {
														q(V);
													},
												);
										});
									})
								);
							},
							findExecutable: (O, B, U) => this.b.$findExecutable(O, B, U),
						});
					}
					async $registerSupportedExecutions(N, A, R) {
						return this.f.registerSupportedExecutions(N, A, R);
					}
				};
				(e.$1pc = D),
					(e.$1pc = D =
						Ne(
							[
								(0, a.$tmc)(h.$lbb.MainThreadTask),
								j(1, u.$Zpc),
								j(2, m.$Vi),
								j(3, c.$zeb),
							],
							D,
						));
			},
		),
		