import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/uri.js';
import '../../../base/common/async.js';
import '../../../base/common/event.js';
import './extHost.protocol.js';
import './extHostTypes.js';
import './extHostWorkspace.js';
import './extHostDocumentsAndEditors.js';
import './extHostConfiguration.js';
import '../../../base/common/cancellation.js';
import './extHostTerminalService.js';
import './extHostRpcService.js';
import './extHostInitDataService.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../../base/common/network.js';
import '../../../base/common/platform.js';
import '../../../platform/log/common/log.js';
import './extHostApiDeprecationService.js';
import '../../contrib/tasks/common/tasks.js';
import '../../../base/common/errors.js';
import '../../../base/common/arrays.js';
define(
			Pe[148],
			Ne([
				1, 0, 2, 9, 4, 6, 11, 63, 93, 56, 23, 62, 21, 34, 5, 16, 13, 14, 144,
				539, 12, 20,
			]),
			function (
				we,
				t,
				e,
				r,
				S,
				N,
				P,
				I,
				l,
				n,
				p,
				y,
				d,
				k,
				g,
				c,
				h,
				$,
				T,
				a,
				u,
				s,
			) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$8id =
						t.$7id =
						t.$6id =
						t.TaskDTO =
						t.TaskHandleDTO =
						t.CustomExecutionDTO =
							void 0),
					(P = tt(P)),
					(h = tt(h));
				var f;
				(function (M) {
					function z(H) {
						if (H != null) return H;
					}
					M.from = z;
					function Q(H) {
						if (H != null) return H;
					}
					M.to = Q;
				})(f || (f = {}));
				var o;
				(function (M) {
					function z(H) {
						if (H != null) return H;
					}
					M.from = z;
					function Q(H) {
						if (H != null) return H;
					}
					M.to = Q;
				})(o || (o = {}));
				var w;
				(function (M) {
					function z(H) {
						if (H != null) return H;
					}
					M.from = z;
					function Q(H) {
						if (H != null) return H;
					}
					M.to = Q;
				})(w || (w = {}));
				var m;
				(function (M) {
					function z(B) {
						if (B) {
							const U = B;
							return U && !!U.process;
						} else return !1;
					}
					M.is = z;
					function Q(B) {
						if (B == null) return;
						const U = { process: B.process, args: B.args };
						return B.options && (U.options = w.from(B.options)), U;
					}
					M.from = Q;
					function H(B) {
						if (B != null) return new P.$_bb(B.process, B.args, B.options);
					}
					M.to = H;
				})(m || (m = {}));
				var E;
				(function (M) {
					function z(H) {
						if (H != null) return H;
					}
					M.from = z;
					function Q(H) {
						if (H != null) return H;
					}
					M.to = Q;
				})(E || (E = {}));
				var R;
				(function (M) {
					function z(B) {
						if (B) {
							const U = B;
							return U && (!!U.commandLine || !!U.command);
						} else return !1;
					}
					M.is = z;
					function Q(B) {
						if (B == null) return;
						const U = {};
						return (
							B.commandLine !== void 0
								? (U.commandLine = B.commandLine)
								: ((U.command = B.command), (U.args = B.args)),
							B.options && (U.options = E.from(B.options)),
							U
						);
					}
					M.from = Q;
					function H(B) {
						if (
							!(B == null || (B.command === void 0 && B.commandLine === void 0))
						)
							return B.commandLine
								? new P.$acb(B.commandLine, B.options)
								: new P.$acb(B.command, B.args ? B.args : [], B.options);
					}
					M.to = H;
				})(R || (R = {}));
				var C;
				(function (M) {
					function z(B) {
						if (B) {
							const U = B;
							return U && U.customExecution === "customExecution";
						} else return !1;
					}
					M.is = z;
					function Q(B) {
						return { customExecution: "customExecution" };
					}
					M.from = Q;
					function H(B, U) {
						return U.get(B);
					}
					M.to = H;
				})(C || (t.CustomExecutionDTO = C = {}));
				var O;
				(function (M) {
					function z(Q, H) {
						let B;
						return (
							Q.scope !== void 0 && typeof Q.scope != "number"
								? (B = Q.scope.uri)
								: Q.scope !== void 0 &&
									typeof Q.scope == "number" &&
									(Q.scope === P.TaskScope.Workspace && H && H.workspaceFile
										? (B = H.workspaceFile)
										: (B = a.$_3)),
							{ id: Q._id, workspaceFolder: B }
						);
					}
					M.from = z;
				})(O || (t.TaskHandleDTO = O = {}));
				var A;
				(function (M) {
					function z(Q) {
						if (Q != null) return { _id: Q.id, isDefault: Q.isDefault };
					}
					M.from = z;
				})(A || (A = {}));
				var J;
				(function (M) {
					function z(B, U) {
						if (B == null) return [];
						const Z = [];
						for (const W of B) {
							const G = Q(W, U);
							G && Z.push(G);
						}
						return Z;
					}
					M.fromMany = z;
					function Q(B, U) {
						if (B == null) return;
						let Z;
						B.execution instanceof P.$_bb
							? (Z = m.from(B.execution))
							: B.execution instanceof P.$acb
								? (Z = R.from(B.execution))
								: B.execution &&
									B.execution instanceof P.$bcb &&
									(Z = C.from(B.execution));
						const W = f.from(B.definition);
						let G;
						return (
							B.scope
								? typeof B.scope == "number"
									? (G = B.scope)
									: (G = B.scope.uri)
								: (G = P.TaskScope.Workspace),
							!W || !G
								? void 0
								: {
										_id: B._id,
										definition: W,
										name: B.name,
										source: {
											extensionId: U.identifier.value,
											label: B.source,
											scope: G,
										},
										execution: Z,
										isBackground: B.isBackground,
										group: A.from(B.group),
										presentationOptions: o.from(B.presentationOptions),
										problemMatchers: (0, s.$6b)(B.problemMatchers),
										hasDefinedMatchers: B.hasDefinedMatchers,
										runOptions: B.runOptions
											? B.runOptions
											: { reevaluateOnRerun: !0 },
										detail: B.detail,
									}
						);
					}
					M.from = Q;
					async function H(B, U, Z) {
						if (B == null) return;
						let W;
						m.is(B.execution)
							? (W = m.to(B.execution))
							: R.is(B.execution)
								? (W = R.to(B.execution))
								: C.is(B.execution) && (W = C.to(B._id, Z));
						const G = f.to(B.definition);
						let fe;
						if (
							(B.source &&
								(B.source.scope !== void 0
									? typeof B.source.scope == "number"
										? (fe = B.source.scope)
										: (fe = await U.resolveWorkspaceFolder(
												e.URI.revive(B.source.scope),
											))
									: (fe = P.TaskScope.Workspace)),
							!G || !fe)
						)
							return;
						const ae = new P.Task(
							G,
							fe,
							B.name,
							B.source.label,
							W,
							B.problemMatchers,
						);
						return (
							B.isBackground !== void 0 && (ae.isBackground = B.isBackground),
							B.group !== void 0 &&
								((ae.group = P.$$bb.from(B.group._id)),
								ae.group &&
									B.group.isDefault &&
									((ae.group = new P.$$bb(ae.group.id, ae.group.label)),
									B.group.isDefault === !0 &&
										(ae.group.isDefault = B.group.isDefault))),
							B.presentationOptions &&
								(ae.presentationOptions = o.to(B.presentationOptions)),
							B._id && (ae._id = B._id),
							B.detail && (ae.detail = B.detail),
							ae
						);
					}
					M.to = H;
				})(J || (t.TaskDTO = J = {}));
				var L;
				(function (M) {
					function z(H) {
						return H;
					}
					M.from = z;
					function Q(H) {
						if (H) return Object.assign(Object.create(null), H);
					}
					M.to = Q;
				})(L || (L = {}));
				class b {
					#e;
					constructor(z, Q, H) {
						(this._id = Q), (this.a = H), (this.#e = z);
					}
					get task() {
						return this.a;
					}
					terminate() {
						this.#e.terminateTask(this);
					}
					fireDidStartProcess(z) {}
					fireDidEndProcess(z) {}
				}
				let F = class {
					constructor(z, Q, H, B, U, Z, W, G) {
						(this.q = new S.$re()),
							(this.r = new S.$re()),
							(this.s = new S.$re()),
							(this.u = new S.$re()),
							(this.a = z.getProxy(N.$lbb.MainThreadTask)),
							(this.b = H),
							(this.c = B),
							(this.d = U),
							(this.e = Z),
							(this.h = 0),
							(this.j = new Map()),
							(this.k = new Map()),
							(this.l = new Map()),
							(this.m = new Map()),
							(this.n = new Set()),
							(this.o = new Map()),
							(this.f = W),
							(this.g = G),
							this.a.$registerSupportedExecutions(!0);
					}
					registerTaskProvider(z, Q, H) {
						if (!H) return new P.$nbb(() => {});
						const B = this.x();
						return (
							this.j.set(B, { type: Q, provider: H, extension: z }),
							this.a.$registerTaskProvider(B, Q),
							new P.$nbb(() => {
								this.j.delete(B), this.a.$unregisterTaskProvider(B);
							})
						);
					}
					registerTaskSystem(z, Q) {
						this.a.$registerTaskSystem(z, Q);
					}
					fetchTasks(z) {
						return this.a.$fetchTasks(L.from(z)).then(async (Q) => {
							const H = [];
							for (const B of Q) {
								const U = await J.to(B, this.b, this.m);
								U && H.push(U);
							}
							return H;
						});
					}
					get taskExecutions() {
						const z = [];
						return this.k.forEach((Q) => z.push(Q)), z;
					}
					terminateTask(z) {
						if (!(z instanceof b))
							throw new Error("No valid task execution provided");
						return this.a.$terminateTask(z._id);
					}
					get onDidStartTask() {
						return this.q.event;
					}
					async $onDidStartTask(z, Q, H) {
						const B = this.m.get(z.id);
						B &&
							(this.o.set(z.id, B),
							this.e.attachPtyToTerminal(Q, await B.callback(H))),
							(this.p = z.id),
							this.q.fire({ execution: await this.z(z) });
					}
					get onDidEndTask() {
						return this.r.event;
					}
					async $OnDidEndTask(z) {
						if (!this.l.has(z.id)) return;
						const Q = await this.z(z);
						this.l.delete(z.id),
							this.k.delete(z.id),
							this.B(z),
							this.r.fire({ execution: Q });
					}
					get onDidStartTaskProcess() {
						return this.s.event;
					}
					async $onDidStartTaskProcess(z) {
						const Q = await this.z(z.id);
						this.s.fire({ execution: Q, processId: z.processId });
					}
					get onDidEndTaskProcess() {
						return this.u.event;
					}
					async $onDidEndTaskProcess(z) {
						const Q = await this.z(z.id);
						this.u.fire({ execution: Q, exitCode: z.exitCode });
					}
					$provideTasks(z, Q) {
						const H = this.j.get(z);
						if (!H) return Promise.reject(new Error("no handler found"));
						const B = [],
							U = (0, r.$Eh)(() =>
								H.provider.provideTasks(p.CancellationToken.None),
							).then((Z) => this.v(Q, B, H, Z));
						return new Promise((Z) => {
							U.then((W) => {
								Promise.all(B).then(() => {
									Z(W);
								});
							});
						});
					}
					async $resolveTask(z, Q) {
						const H = this.j.get(z);
						if (!H) return Promise.reject(new Error("no handler found"));
						if (Q.definition.type !== H.type)
							throw new Error(
								`Unexpected: Task of type [${Q.definition.type}] cannot be resolved by provider of type [${H.type}].`,
							);
						const B = await J.to(Q, this.b, this.m);
						if (!B) throw new Error("Unexpected: Task cannot be resolved.");
						const U = await H.provider.resolveTask(B, p.CancellationToken.None);
						if (!U) return;
						this.A(U, H);
						const Z = J.from(U, H.extension);
						if (!Z) throw new Error("Unexpected: Task cannot be resolved.");
						if (U.definition !== B.definition)
							throw new Error(
								"Unexpected: The resolved task definition must be the same object as the original task definition. The task definition cannot be changed.",
							);
						return (
							C.is(Z.execution) && (await this.y(Z, U, !0)), await this.w(Z)
						);
					}
					x() {
						return this.h++;
					}
					async y(z, Q, H) {
						const B = await this.a.$createTaskId(z);
						!H && !this.m.has(B) && (this.n.add(B), this.o.set(B, Q.execution)),
							this.m.set(B, Q.execution);
					}
					async z(z, Q) {
						if (typeof z == "string") {
							const U = this.l.get(z);
							if (!U)
								throw new u.$fb(
									"Unexpected: The specified task is missing an execution",
								);
							return U;
						}
						const H = this.l.get(z.id);
						if (H) return H;
						let B;
						return (
							Q
								? (B = Promise.resolve(new b(this, z.id, Q)))
								: (B = J.to(z.task, this.b, this.m).then((U) => {
										if (!U) throw new u.$fb("Unexpected: Task does not exist.");
										return new b(this, z.id, U);
									})),
							this.l.set(z.id, B),
							B.then((U) => (this.k.set(z.id, U), U))
						);
					}
					A(z, Q) {
						z._deprecated &&
							this.g.report(
								"Task.constructor",
								Q.extension,
								"Use the Task constructor that takes a `scope` instead.",
							);
					}
					B(z) {
						this.o.get(z.id) && this.o.delete(z.id),
							this.n.has(z.id) &&
								this.p !== z.id &&
								(this.m.delete(z.id), this.n.delete(z.id));
						const H = this.n.values();
						let B = H.next();
						for (; !B.done; )
							!this.o.has(B.value) &&
								this.p !== B.value &&
								(this.m.delete(B.value), this.n.delete(B.value)),
								(B = H.next());
					}
				};
				(t.$6id = F),
					(t.$6id = F =
						wt(
							[
								rt(0, d.$08),
								rt(1, k.$98),
								rt(2, I.$m9),
								rt(3, l.$Xdb),
								rt(4, n.$phd),
								rt(5, y.$Qhd),
								rt(6, $.$ik),
								rt(7, T.$9gd),
							],
							F,
						));
				let D = class extends F {
					constructor(z, Q, H, B, U, Z, W, G) {
						super(z, Q, H, B, U, Z, W, G),
							this.registerTaskSystem(c.Schemas.vscodeRemote, {
								scheme: c.Schemas.vscodeRemote,
								authority: "",
								platform: h.$k(h.Platform.Web),
							});
					}
					async executeTask(z, Q) {
						if (!Q.execution)
							throw new Error("Tasks to execute must include an execution");
						const H = J.from(Q, z);
						if (H === void 0) throw new Error("Task is not valid");
						if (C.is(H.execution)) await this.y(H, Q, !1);
						else throw new u.$db();
						const B = await this.z(await this.a.$getTaskExecution(H), Q);
						return (
							this.a.$executeTask(H).catch((U) => {
								throw new Error(U);
							}),
							B
						);
					}
					v(z, Q, H, B) {
						const U = [];
						if (B)
							for (const Z of B) {
								if ((this.A(Z, H), !Z.definition || !z[Z.definition.type])) {
									const G = Z.source ? Z.source : "No task source";
									this.f.warn(
										`The task [${G}, ${Z.name}] uses an undefined task type. The task will be ignored in the future.`,
									);
								}
								const W = J.from(Z, H.extension);
								W && C.is(W.execution)
									? (U.push(W), Q.push(this.y(W, Z, !0)))
									: this.f.warn("Only custom execution tasks supported.");
							}
						return { tasks: U, extension: H.extension };
					}
					async w(z) {
						if (C.is(z.execution)) return z;
						this.f.warn("Only custom execution tasks supported.");
					}
					async $resolveVariables(z, Q) {
						return { process: void 0, variables: Object.create(null) };
					}
					async $jsonTasksSupported() {
						return !1;
					}
					async $findExecutable(z, Q, H) {}
				};
				(t.$7id = D),
					(t.$7id = D =
						wt(
							[
								rt(0, d.$08),
								rt(1, k.$98),
								rt(2, I.$m9),
								rt(3, l.$Xdb),
								rt(4, n.$phd),
								rt(5, y.$Qhd),
								rt(6, $.$ik),
								rt(7, T.$9gd),
							],
							D,
						)),
					(t.$8id = (0, g.$Mi)("IExtHostTask"));
			},
		),
		