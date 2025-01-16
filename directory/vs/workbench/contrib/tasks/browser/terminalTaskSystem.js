define(
		de[1817],
		he([
			1, 0, 24, 15, 6, 249, 3, 59, 82, 54, 12, 19, 111, 28, 4, 90, 25, 555, 570,
			14, 23, 26, 9, 776, 60, 3329, 1814, 1816, 1757, 424, 3143, 1758, 145,
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
			M,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$dXc = void 0),
				(i = mt(i)),
				(m = mt(m)),
				(r = mt(r)),
				(u = mt(u)),
				(a = mt(a)),
				(h = xi(h)),
				(c = mt(c)),
				(n = mt(n));
			const N = "Task";
			class A {
				static {
					this.b = /\$\{(.*?)\}/g;
				}
				constructor(x, H, q, V) {
					(this.workspaceFolder = x),
						(this.taskSystemInfo = H),
						(this.values = q),
						(this.c = V);
				}
				async resolve(x) {
					const H = [];
					x.replace(A.b, (V, ...G) => (H.push(this.d(V, G)), V));
					const q = await Promise.all(H);
					return x.replace(A.b, () => q.shift());
				}
				async d(x, H) {
					const q = this.values.get(x.substring(2, x.length - 1));
					return (
						q ?? (this.c ? this.c.resolveAsync(this.workspaceFolder, x) : x)
					);
				}
			}
			class R {
				constructor(x, H, q) {
					(this.task = x), (this.resolver = H), (this.trigger = q);
				}
				verify() {
					let x = !1;
					return (
						this.trigger &&
							this.resolvedVariables &&
							this.workspaceFolder &&
							this.shellLaunchConfig !== void 0 &&
							(x = !0),
						x
					);
				}
				getVerifiedTask() {
					if (this.verify())
						return {
							task: this.task,
							resolver: this.resolver,
							trigger: this.trigger,
							resolvedVariables: this.resolvedVariables,
							systemInfo: this.systemInfo,
							workspaceFolder: this.workspaceFolder,
							shellLaunchConfig: this.shellLaunchConfig,
						};
					throw new Error(
						"VerifiedTask was not checked. verify must be checked before getVerifiedTask.",
					);
				}
			}
			class O extends C.$1c {
				static {
					this.TelemetryEventName = "taskService";
				}
				static {
					this.b = "__process__";
				}
				static {
					this.c = {
						cmd: { strong: '"' },
						powershell: {
							escape: { escapeChar: "`", charsToEscape: ` "'()` },
							strong: "'",
							weak: '"',
						},
						bash: {
							escape: { escapeChar: "\\", charsToEscape: ` "'` },
							strong: "'",
							weak: '"',
						},
						zsh: {
							escape: { escapeChar: "\\", charsToEscape: ` "'` },
							strong: "'",
							weak: '"',
						},
					};
				}
				static {
					this.f = { Linux: O.c.bash, Mac: O.c.bash, Windows: O.c.powershell };
				}
				taskShellIntegrationStartSequence(x) {
					return (
						(0, L.$bXc)(L.VSCodeOscPt.PromptStart) +
						(0, L.$bXc)(
							L.VSCodeOscPt.Property,
							`${L.VSCodeOscProperty.Task}=True`,
						) +
						(x
							? (0, L.$bXc)(
									L.VSCodeOscPt.Property,
									`${L.VSCodeOscProperty.Cwd}=${typeof x == "string" ? x : x.fsPath}`,
								)
							: "") +
						(0, L.$bXc)(L.VSCodeOscPt.CommandStart)
					);
				}
				get taskShellIntegrationOutputSequence() {
					return (0, L.$bXc)(L.VSCodeOscPt.CommandExecuted);
				}
				constructor(
					x,
					H,
					q,
					V,
					G,
					K,
					J,
					W,
					X,
					Y,
					ie,
					ne,
					ee,
					_,
					te,
					Q,
					Z,
					se,
					re,
				) {
					super(),
						(this.L = x),
						(this.M = H),
						(this.N = q),
						(this.O = V),
						(this.P = G),
						(this.Q = K),
						(this.R = J),
						(this.S = W),
						(this.U = X),
						(this.W = Y),
						(this.X = ie),
						(this.Y = ne),
						(this.Z = ee),
						(this.$ = _),
						(this.ab = te),
						(this.bb = Q),
						(this.cb = Z),
						(this.y = !1),
						(this.G = Promise.resolve()),
						(this.H = !1),
						(this.g = Object.create(null)),
						(this.h = Object.create(null)),
						(this.j = Object.create(null)),
						(this.m = new d.$Ic()),
						(this.n = Object.create(null)),
						(this.I = new w.$re()),
						(this.q = re),
						this.D((this.F = se.createInstance(S.$aXc)));
				}
				get onDidStateChange() {
					return this.I.event;
				}
				db(x) {
					this.Sb(
						x +
							`
`,
					);
				}
				eb() {
					this.N.showChannel(this.X, !0);
				}
				reconnect(x, H) {
					return this.Db(), this.run(x, H, P.Triggers.reconnect);
				}
				run(x, H, q = P.Triggers.command) {
					x = x.clone();
					const V = k.$h4.is(x) || this.vb(x) ? [] : this.gb(x),
						G = V.length < ((x.runOptions && x.runOptions.instanceLimit) ?? 1),
						K = V[0]?.count?.count ?? 0;
					if (((this.w = new R(x, H, q)), K > 0 && (x.instance = K), !G)) {
						const J = V[V.length - 1];
						return (
							(this.u = this.w),
							{
								kind: P.TaskExecuteKind.Active,
								task: J.task,
								active: {
									same: !0,
									background: x.configurationProperties.isBackground,
								},
								promise: J.promise,
							}
						);
					}
					try {
						const J = {
							kind: P.TaskExecuteKind.Started,
							task: x,
							started: {},
							promise: this.kb(x, H, q, new Set(), new Map(), void 0),
						};
						return (
							J.promise.then((W) => {
								this.u = this.w;
							}),
							J
						);
					} catch (J) {
						throw J instanceof P.$Spc
							? J
							: J instanceof Error
								? (this.db(J.message),
									new P.$Spc(
										h.default.Error,
										J.message,
										P.TaskErrors.UnknownError,
									))
								: (this.db(J.toString()),
									new P.$Spc(
										h.default.Error,
										n.localize(9711, null),
										P.TaskErrors.UnknownError,
									));
					}
				}
				rerun() {
					if (this.u && this.u.verify()) {
						this.u.task.runOptions.reevaluateOnRerun !== void 0 &&
							!this.u.task.runOptions.reevaluateOnRerun &&
							(this.y = !0);
						const x = this.run(this.u.task, this.u.resolver);
						return (
							x.promise.then((H) => {
								this.y = !1;
							}),
							x
						);
					} else return;
				}
				fb(x) {
					x.taskLoadMessages &&
						x.taskLoadMessages.length > 0 &&
						(x.taskLoadMessages.forEach((q) => {
							this.db(
								q +
									`
`,
							);
						}),
						this.cb.prompt(
							h.default.Warning,
							n.localize(9712, null, x._label),
							[{ label: "Show Output", run: () => this.eb() }],
						));
				}
				isTaskVisible(x) {
					const H = this.g[x.getMapKey()];
					if (!H?.terminal) return !1;
					const q = this.L.activeInstance;
					return (
						!!this.P.getActiveViewWithId(M.$geb) &&
						q?.instanceId === H.terminal.instanceId
					);
				}
				revealTask(x) {
					const H = this.g[x.getMapKey()];
					if (!H?.terminal) return !1;
					const q =
						this.ab.getViewLocationById(M.$geb) ===
						v.ViewContainerLocation.Panel;
					return (
						q && this.isTaskVisible(x)
							? (this.z
									? (this.C && this.L.setActiveInstance(this.C),
										this.O.openPaneComposite(
											this.z,
											v.ViewContainerLocation.Panel,
										))
									: this.O.hideActivePaneComposite(
											v.ViewContainerLocation.Panel,
										),
								(this.z = void 0),
								(this.C = void 0))
							: (q &&
									((this.z = this.O.getActivePaneComposite(
										v.ViewContainerLocation.Panel,
									)?.getId()),
									this.z === M.$geb &&
										(this.C = this.L.activeInstance ?? void 0)),
								this.L.setActiveInstance(H.terminal),
								(k.$e4.is(x) || k.$g4.is(x)) &&
									this.M.showPanel(x.command.presentation.focus)),
						!0
					);
				}
				isActive() {
					return Promise.resolve(this.isActiveSync());
				}
				isActiveSync() {
					return Object.values(this.g).some((x) => !!x.terminal);
				}
				canAutoTerminate() {
					return Object.values(this.g).every(
						(x) => !x.task.configurationProperties.promptOnClose,
					);
				}
				getActiveTasks() {
					return Object.values(this.g).flatMap((x) =>
						x.terminal ? x.task : [],
					);
				}
				getLastInstance(x) {
					const H = x.getKey();
					return Object.values(this.g)
						.reverse()
						.find((q) => H && H === q.task.getKey())?.task;
				}
				getBusyTasks() {
					return Object.keys(this.h).map((x) => this.h[x]);
				}
				customExecutionComplete(x, H) {
					return this.g[x.getMapKey()]?.terminal
						? new Promise((V) => {
								V();
							})
						: Promise.reject(
								new Error(
									"Expected to have a terminal for a custom execution task",
								),
							);
				}
				gb(x) {
					const H = x.getKey();
					return Object.values(this.g).filter(
						(q) => H && H === q.task.getKey(),
					);
				}
				hb(x) {
					const H = typeof x == "string" ? x : x.getMapKey();
					this.g[H] && delete this.g[H];
				}
				ib(x) {
					if (x.kind !== k.TaskEventKind.Changed) {
						const H = this.g[x.__task.getMapKey()];
						H && (H.state = x.kind);
					}
					this.I.fire(x);
				}
				terminate(x) {
					const H = this.g[x.getMapKey()];
					if (!H) return Promise.resolve({ success: !1, task: void 0 });
					const q = H.terminal;
					return q
						? new Promise((V, G) => {
								q.onDisposed((J) => {
									this.ib(
										k.TaskEvent.terminated(x, J.instanceId, J.exitReason),
									);
								});
								const K = q.onExit(() => {
									const J = H.task;
									try {
										K.dispose(),
											this.ib(
												k.TaskEvent.terminated(J, q.instanceId, q.exitReason),
											);
									} catch {}
									V({ success: !0, task: J });
								});
								q.dispose();
							})
						: Promise.resolve({ success: !1, task: void 0 });
				}
				terminateAll() {
					const x = [];
					for (const [H, q] of Object.entries(this.g)) {
						const V = q?.terminal;
						V &&
							(x.push(
								new Promise((G, K) => {
									const J = V.onExit(() => {
										const W = q.task;
										try {
											J.dispose(),
												this.ib(
													k.TaskEvent.terminated(W, V.instanceId, V.exitReason),
												);
										} catch {}
										this.g[H] === q && delete this.g[H],
											G({ success: !0, task: q.task });
									});
								}),
							),
							V.dispose());
					}
					return Promise.all(x);
				}
				jb(x) {
					this.db(n.localize(9713, null, x._label)), this.eb();
				}
				kb(x, H, q, V, G, K) {
					this.fb(x);
					const J = x.getMapKey(),
						W = Promise.resolve()
							.then(async () => {
								K = K ?? new Map();
								const ne = [];
								if (x.configurationProperties.dependsOn) {
									const ee = new Set(V).add(x.getCommonTaskId());
									for (const _ of x.configurationProperties.dependsOn) {
										const te = await H.resolve(_.uri, _.task);
										if (te) {
											this.mb(te, x);
											let Q;
											const Z = te.getCommonTaskId();
											if (ee.has(Z)) this.jb(te), (Q = Promise.resolve({}));
											else if (((Q = G.get(Z)), !Q)) {
												const se = this.g[te.getMapKey()] ?? this.gb(te).pop();
												Q = se && this.nb(se);
											}
											if (
												(Q ||
													(this.ib(
														k.TaskEvent.general(
															k.TaskEventKind.DependsOnStarted,
															x,
														),
													),
													(Q = this.ob(te, H, q, ee, G, K))),
												G.set(Z, Q),
												ne.push(Q),
												x.configurationProperties.dependsOrder ===
													k.DependsOrder.sequence && (await Q).exitCode !== 0)
											)
												break;
										} else
											this.db(
												n.localize(
													9714,
													null,
													c.$lg(_.task)
														? _.task
														: JSON.stringify(_.task, void 0, 0),
													_.uri.toString(),
												),
											),
												this.eb();
									}
								}
								return Promise.all(ne).then((ee) => {
									for (const _ of ee)
										if (_.exitCode !== 0) return { exitCode: _.exitCode };
									return (k.$g4.is(x) || k.$e4.is(x)) && x.command
										? this.y
											? this.wb(x, q, K)
											: this.ub(x, q, K)
										: { exitCode: 0 };
								});
							})
							.finally(() => {
								delete this.g[J];
							}),
						Y = this.gb(x).pop()?.count ?? { count: 0 };
					Y.count++;
					const ie = { task: x, promise: W, count: Y };
					return (this.g[J] = ie), W;
				}
				lb(x) {
					return new Promise((H) => {
						const q = this.onDidStateChange((V) => {
							V.kind === k.TaskEventKind.Inactive &&
								V.__task === x &&
								(q.dispose(), H({ exitCode: 0 }));
						});
					});
				}
				mb(x, H) {
					x.configurationProperties.icon
						? ((x.configurationProperties.icon.id ||=
								H.configurationProperties.icon?.id),
							(x.configurationProperties.icon.color ||=
								H.configurationProperties.icon?.color))
						: (x.configurationProperties.icon = H.configurationProperties.icon);
				}
				async nb(x) {
					return !x.task.configurationProperties.isBackground ||
						!x.task.configurationProperties.problemMatchers ||
						x.task.configurationProperties.problemMatchers.length === 0
						? x.promise
						: x.state === k.TaskEventKind.Inactive
							? { exitCode: 0 }
							: this.lb(x.task);
				}
				async ob(x, H, q, V, G, K) {
					if (!x.configurationProperties.isBackground)
						return this.kb(x, H, q, V, G, K);
					const J = this.lb(x);
					return Promise.race([J, this.kb(x, H, q, V, G, K)]);
				}
				async pb(x, H, q, V, G) {
					const K = await this.S.resolveAsync(
						H,
						k.CommandString.value(q.command.name),
					);
					V = V ? await this.S.resolveAsync(H, V) : void 0;
					const J = G
						? await Promise.all(
								G.split(r.$yc).map((X) => this.S.resolveAsync(H, X)),
							)
						: void 0;
					let W = await x?.findExecutable(K, V, J);
					return W || (W = r.$oc(V ?? "", K)), W;
				}
				qb(x, H) {
					if (H.size === 0) return x;
					const q = new Set();
					for (const V of x) H.has(V.substring(2, V.length - 1)) || q.add(V);
					return q;
				}
				rb(x, H) {
					for (const q of H) x.has(q[0]) || x.set(q[0], q[1]);
				}
				async sb(x, H, q, V, G) {
					const K = await this.tb(x, H, q, V, G);
					return (
						this.ib(k.TaskEvent.general(k.TaskEventKind.AcquiredInput, q)), K
					);
				}
				tb(x, H, q, V, G) {
					const K = q.command && q.command.runtime === k.RuntimeType.Process,
						J = q.command && q.command.options ? q.command.options : void 0,
						W = J ? J.cwd : void 0;
					let X;
					if (J && J.env) {
						for (const ne of Object.keys(J.env))
							if (ne.toLowerCase() === "path") {
								c.$lg(J.env[ne]) && (X = J.env[ne]);
								break;
							}
					}
					const Y = this.qb(V, G);
					let ie;
					if (x && H) {
						const ne = { variables: Y };
						return (
							x.platform === u.Platform.Windows &&
								K &&
								((ne.process = { name: k.CommandString.value(q.command.name) }),
								W && (ne.process.cwd = W),
								X && (ne.process.path = X)),
							(ie = x
								.resolveVariables(
									H,
									ne,
									k.TaskSourceKind.toConfigurationTarget(q._source.kind),
								)
								.then(async (ee) => {
									if (ee) {
										if (
											(this.rb(G, ee.variables), (ee.variables = new Map(G)), K)
										) {
											let _ = k.CommandString.value(q.command.name);
											x.platform === u.Platform.Windows &&
												(_ = await this.pb(x, H, q, W, X)),
												ee.variables.set(O.b, _);
										}
										return ee;
									}
								})),
							ie
						);
					} else {
						const ne = new Array();
						return (
							Y.forEach((ee) => ne.push(ee)),
							new Promise((ee, _) => {
								this.S.resolveWithInteraction(
									H,
									ne,
									"tasks",
									void 0,
									k.TaskSourceKind.toConfigurationTarget(q._source.kind),
								).then(
									async (te) => {
										if (te) {
											if ((this.rb(G, te), (te = new Map(G)), K)) {
												let Z;
												u.$l
													? (Z = await this.pb(x, H, q, W, X))
													: (Z = await this.S.resolveAsync(
															H,
															k.CommandString.value(q.command.name),
														)),
													te.set(O.b, Z);
											}
											ee({ variables: te });
										} else ee(void 0);
									},
									(te) => {
										_(te);
									},
								);
							})
						);
					}
				}
				ub(x, H, q) {
					const V = x.getWorkspaceFolder();
					let G;
					if (V) G = this.w.workspaceFolder = V;
					else {
						const X = this.U.getWorkspace().folders;
						G = X.length > 0 ? X[0] : void 0;
					}
					const K = (this.w.systemInfo = this.q(G)),
						J = new Set();
					return (
						this.Ib(J, x),
						this.sb(K, G, x, J, q).then(
							(X) =>
								X && !this.vb(x)
									? ((this.w.resolvedVariables = X),
										this.xb(x, H, new A(G, K, X.variables, this.S), G))
									: (this.ib(k.TaskEvent.general(k.TaskEventKind.End, x)),
										Promise.resolve({ exitCode: 0 })),
							(X) => Promise.reject(X),
						)
					);
				}
				vb(x) {
					const H = x.command.runtime === k.RuntimeType.CustomExecution;
					return !(
						x.command !== void 0 &&
						x.command.runtime &&
						(H || x.command.name !== void 0)
					);
				}
				wb(x, H, q) {
					const V = this.u;
					if (!V) return Promise.reject(new Error("No task previously run"));
					const G = (this.w.workspaceFolder = V.workspaceFolder),
						K = new Set();
					this.Ib(K, x);
					let J = !0;
					return (
						K.forEach((W) => {
							W.substring(2, W.length - 1) in
								V.getVerifiedTask().resolvedVariables && (J = !1);
						}),
						J
							? ((this.w.resolvedVariables =
									V.getVerifiedTask().resolvedVariables),
								this.xb(
									x,
									H,
									new A(
										V.getVerifiedTask().workspaceFolder,
										V.getVerifiedTask().systemInfo,
										V.getVerifiedTask().resolvedVariables.variables,
										this.S,
									),
									G,
								))
							: this.sb(
									V.getVerifiedTask().systemInfo,
									V.getVerifiedTask().workspaceFolder,
									x,
									K,
									q,
								).then(
									(W) =>
										W
											? ((this.w.resolvedVariables = W),
												this.xb(
													x,
													H,
													new A(
														V.getVerifiedTask().workspaceFolder,
														V.getVerifiedTask().systemInfo,
														W.variables,
														this.S,
													),
													G,
												))
											: (this.ib(k.TaskEvent.general(k.TaskEventKind.End, x)),
												{ exitCode: 0 }),
									(W) => Promise.reject(W),
								)
					);
				}
				async xb(x, H, q, V) {
					let G, K, J;
					if (x.configurationProperties.isBackground) {
						const X = await this.Pb(
								q,
								x.configurationProperties.problemMatchers,
							),
							Y = new I.$9Wc(X, this.Q, this.R, this.Y);
						X.length > 0 &&
							!Y.isWatching() &&
							(this.Sb(n.localize(9715, null, x._label)), this.eb());
						const ie = new C.$Zc();
						let ne = 0;
						const ee = x.getMapKey();
						ie.add(
							Y.onDidStateChange((Z) => {
								if (
									Z.kind ===
									I.ProblemCollectorEventKind.BackgroundProcessingBegins
								)
									ne++,
										(this.h[ee] = x),
										this.ib(
											k.TaskEvent.general(
												k.TaskEventKind.Active,
												x,
												G?.instanceId,
											),
										);
								else if (
									Z.kind ===
										I.ProblemCollectorEventKind.BackgroundProcessingEnds &&
									(ne--,
									this.h[ee] && delete this.h[ee],
									this.ib(
										k.TaskEvent.general(
											k.TaskEventKind.Inactive,
											x,
											G?.instanceId,
										),
									),
									ne === 0 &&
										Y.numberOfMatches > 0 &&
										Y.maxMarkerSeverity &&
										Y.maxMarkerSeverity >= g.MarkerSeverity.Error)
								) {
									const se = x.command.presentation.reveal;
									x.command.presentation.revealProblems ===
									k.RevealProblemKind.OnProblem
										? this.P.openView(o.Markers.MARKERS_VIEW_ID, !0)
										: se === k.RevealKind.Silent &&
											(this.L.setActiveInstance(G), this.M.showPanel(!1));
								}
							}),
						),
							Y.aboutToStart();
						let _;
						if ((([G, K] = await this.Fb(x, q, V)), K))
							return Promise.reject(new Error(K.message));
						if (!G)
							return Promise.reject(
								new Error(`Failed to create terminal for task ${x._label}`),
							);
						this.F.addTerminal(x, G, Y);
						let te = !1;
						G.processReady.then(
							() => {
								te ||
									(this.ib(
										k.TaskEvent.processStarted(x, G.instanceId, G.processId),
									),
									(te = !0));
							},
							(Z) => {
								this.bb.error("Task terminal process never got ready");
							},
						),
							this.ib(k.TaskEvent.start(x, G.instanceId, q.values));
						let Q;
						if (
							(X.length &&
								(Q = G.onLineData((Z) => {
									Y.processLine(Z),
										_ || (_ = new i.$Jh(3e3)),
										_.trigger(() => {
											Y.forceDelivery(), (_ = void 0);
										});
								})),
							(J = new Promise((Z, se) => {
								const re = G.onExit((le) => {
									const oe = typeof le == "number" ? le : le?.code;
									Q?.dispose(), re.dispose();
									const ae = x.getMapKey();
									if (
										(this.h[ee] && delete this.h[ee],
										this.hb(x),
										this.ib(k.TaskEvent.changed()),
										le !== void 0)
									)
										switch (x.command.presentation.panel) {
											case k.PanelKind.Dedicated:
												this.n[ae] = G.instanceId.toString();
												break;
											case k.PanelKind.Shared:
												this.m.set(ae, G.instanceId.toString(), d.Touch.AsOld);
												break;
										}
									if (
										x.command.presentation.reveal === k.RevealKind.Silent &&
										(oe !== 0 ||
											(Y.numberOfMatches > 0 &&
												Y.maxMarkerSeverity &&
												Y.maxMarkerSeverity >= g.MarkerSeverity.Error))
									)
										try {
											this.L.setActiveInstance(G), this.M.showPanel(!1);
										} catch {}
									Y.done(),
										Y.dispose(),
										te ||
											(this.ib(
												k.TaskEvent.processStarted(
													x,
													G.instanceId,
													G.processId,
												),
											),
											(te = !0)),
										this.ib(k.TaskEvent.processEnded(x, G.instanceId, oe));
									for (let $e = 0; $e < ne; $e++)
										this.ib(
											k.TaskEvent.general(
												k.TaskEventKind.Inactive,
												x,
												G.instanceId,
											),
										);
									(ne = 0),
										this.ib(k.TaskEvent.general(k.TaskEventKind.End, x)),
										ie.dispose(),
										Z({ exitCode: oe ?? void 0 });
								});
							})),
							H === P.Triggers.reconnect && G.xterm)
						) {
							const Z = [],
								se = G.xterm.getBufferReverseIterator(),
								re = new RegExp(
									Y.beginPatterns.map((oe) => oe.source).join("|"),
								);
							for (const oe of se) if ((Z.push(oe), re.test(oe))) break;
							let le;
							for (let oe = Z.length - 1; oe >= 0; oe--)
								Y.processLine(Z[oe]),
									le || (le = new i.$Jh(3e3)),
									le.trigger(() => {
										Y.forceDelivery(), (le = void 0);
									});
						}
					} else {
						if ((([G, K] = await this.Fb(x, q, V)), K))
							return Promise.reject(new Error(K.message));
						if (!G)
							return Promise.reject(
								new Error(`Failed to create terminal for task ${x._label}`),
							);
						this.ib(k.TaskEvent.start(x, G.instanceId, q.values));
						const X = x.getMapKey();
						(this.h[X] = x),
							this.ib(
								k.TaskEvent.general(k.TaskEventKind.Active, x, G.instanceId),
							);
						const Y = await this.Pb(
								q,
								x.configurationProperties.problemMatchers,
							),
							ie = new I.$8Wc(
								Y,
								this.Q,
								this.R,
								I.ProblemHandlingStrategy.Clean,
								this.Y,
							);
						this.F.addTerminal(x, G, ie);
						let ne = !1;
						G.processReady.then(
							() => {
								ne ||
									(this.ib(
										k.TaskEvent.processStarted(x, G.instanceId, G.processId),
									),
									(ne = !0));
							},
							(_) => {},
						);
						const ee = G.onLineData((_) => {
							ie.processLine(_);
						});
						J = new Promise((_, te) => {
							const Q = G.onExit((Z) => {
								const se = typeof Z == "number" ? Z : Z?.code;
								Q.dispose();
								const re = x.getMapKey();
								if ((this.hb(x), this.ib(k.TaskEvent.changed()), Z !== void 0))
									switch (x.command.presentation.panel) {
										case k.PanelKind.Dedicated:
											this.n[re] = G.instanceId.toString();
											break;
										case k.PanelKind.Shared:
											this.m.set(re, G.instanceId.toString(), d.Touch.AsOld);
											break;
									}
								const le = x.command.presentation.reveal,
									oe = x.command.presentation.revealProblems;
								if (
									G &&
									oe === k.RevealProblemKind.OnProblem &&
									ie.numberOfMatches > 0
								)
									this.P.openView(o.Markers.MARKERS_VIEW_ID);
								else if (
									G &&
									le === k.RevealKind.Silent &&
									(se !== 0 ||
										(ie.numberOfMatches > 0 &&
											ie.maxMarkerSeverity &&
											ie.maxMarkerSeverity >= g.MarkerSeverity.Error))
								)
									try {
										this.L.setActiveInstance(G), this.M.showPanel(!1);
									} catch {}
								setTimeout(() => {
									ee.dispose(), ie.done(), ie.dispose();
								}, 100),
									!ne &&
										G &&
										(this.ib(
											k.TaskEvent.processStarted(x, G.instanceId, G.processId),
										),
										(ne = !0)),
									this.ib(
										k.TaskEvent.processEnded(x, G?.instanceId, se ?? void 0),
									),
									this.h[X] && delete this.h[X],
									this.ib(
										k.TaskEvent.general(
											k.TaskEventKind.Inactive,
											x,
											G?.instanceId,
										),
									),
									this.ib(
										k.TaskEvent.general(k.TaskEventKind.End, x, G?.instanceId),
									),
									_({ exitCode: se ?? void 0 });
							});
						});
					}
					return (
						x.command.presentation &&
						x.command.presentation.revealProblems === k.RevealProblemKind.Always
							? this.P.openView(o.Markers.MARKERS_VIEW_ID)
							: x.command.presentation &&
								(x.command.presentation.focus ||
									x.command.presentation.reveal === k.RevealKind.Always) &&
								(this.L.setActiveInstance(G),
								await this.L.revealTerminal(G),
								x.command.presentation.focus && this.L.focusInstance(G)),
						(this.g[x.getMapKey()].terminal = G),
						this.ib(k.TaskEvent.changed()),
						J
					);
				}
				yb(x) {
					return this.U.getWorkbenchState() === p.WorkbenchState.WORKSPACE
						? x.getQualifiedLabel()
						: x.configurationProperties.name || "";
				}
				async zb(x, H, q, V, G, K, J, W) {
					let X;
					const Y = x.command.runtime === k.RuntimeType.Shell,
						ie = this.U.getWorkbenchState() === p.WorkbenchState.WORKSPACE,
						ne = this.yb(x),
						ee = N,
						_ = x.command.name;
					let te;
					if (
						(G.cwd &&
							((te = G.cwd),
							r.$nc(te) ||
								(H &&
									H.uri.scheme === s.Schemas.file &&
									(te = r.$oc(H.uri.fsPath, te))),
							(te = (0, E.$Ig)(te)
								? te
								: a.$xh(
										y.URI.from({ scheme: s.Schemas.file, path: te }),
										this.W.remoteAuthority,
										this.$.defaultUriScheme,
									))),
						Y)
					) {
						let Q;
						switch (V) {
							case u.Platform.Windows:
								Q = u.OperatingSystem.Windows;
								break;
							case u.Platform.Mac:
								Q = u.OperatingSystem.Macintosh;
								break;
							case u.Platform.Linux:
							default:
								Q = u.OperatingSystem.Linux;
								break;
						}
						const Z = await this.Z.getDefaultProfile({
							allowAutomationShell: !0,
							os: Q,
							remoteAuthority: this.W.remoteAuthority,
						});
						let se;
						if (x.configurationProperties.icon?.id)
							se = l.ThemeIcon.fromId(x.configurationProperties.icon.id);
						else {
							const fe = x.configurationProperties.group
								? T.GroupKind.to(x.configurationProperties.group)
								: void 0;
							se =
								(typeof fe == "string" ? fe : fe?.kind) === "test"
									? l.ThemeIcon.fromId(b.$ak.beaker.id)
									: Z.icon;
						}
						X = {
							name: ne,
							type: ee,
							executable: Z.path,
							args: Z.args,
							env: { ...Z.env },
							icon: se,
							color: x.configurationProperties.icon?.color || void 0,
							waitOnExit: W,
						};
						let re = !1;
						const le = x.command.options && x.command.options.shell;
						le &&
							(le.executable &&
								(le.executable !== X.executable && (X.args = void 0),
								(X.executable = await this.Qb(q, le.executable)),
								(re = !0)),
							le.args && (X.args = await this.Ob(q, le.args.slice()))),
							X.args === void 0 && (X.args = []);
						const oe = Array.isArray(X.args) ? X.args.slice(0) : [X.args],
							ae = [],
							pe = r.$lc
								.basename((await this.$.fileURI(X.executable)).path)
								.toLowerCase(),
							$e = this.Gb(V, pe, le, K, _, J);
						let ye = !1;
						if (V === u.Platform.Windows) {
							ye = !0;
							const fe = await this.$.userHome();
							if (
								pe === "cmd.exe" &&
								((G.cwd && (0, E.$Ig)(G.cwd)) ||
									(!G.cwd && (0, E.$Ig)(fe.fsPath)))
							)
								return;
							pe === "powershell.exe" || pe === "pwsh.exe"
								? re || ae.push("-Command")
								: pe === "bash.exe" || pe === "zsh.exe"
									? ((ye = !1), re || ae.push("-c"))
									: pe === "wsl.exe"
										? re || ae.push("-e")
										: re || ae.push("/d", "/c");
						} else re || (u.Platform.Mac, ae.push("-c"));
						const ue = this.Ab(ae, oe);
						if (
							(ue.push($e),
							(X.args = ye ? ue.join(" ") : ue),
							x.command.presentation && x.command.presentation.echo)
						)
							if (ie && H) {
								const fe =
									te && typeof te == "object" && "path" in te
										? r.$sc(te.path)
										: H.name;
								X.initialText =
									this.taskShellIntegrationStartSequence(te) +
									(0, $.$aIb)(n.localize(9716, null, fe, $e), {
										excludeLeadingNewLine: !0,
									}) +
									this.taskShellIntegrationOutputSequence;
							} else
								X.initialText =
									this.taskShellIntegrationStartSequence(te) +
									(0, $.$aIb)(n.localize(9717, null, $e), {
										excludeLeadingNewLine: !0,
									}) +
									this.taskShellIntegrationOutputSequence;
						else
							X.initialText = {
								text:
									this.taskShellIntegrationStartSequence(te) +
									this.taskShellIntegrationOutputSequence,
								trailingNewLine: !1,
							};
					} else {
						const Q =
								x.command.runtime !== k.RuntimeType.CustomExecution
									? k.CommandString.value(K)
									: void 0,
							Z = Y ? Q : await this.Qb(q, await this.Qb(q, "${" + O.b + "}"));
						if (
							((X = {
								name: ne,
								type: ee,
								icon: x.configurationProperties.icon?.id
									? l.ThemeIcon.fromId(x.configurationProperties.icon.id)
									: void 0,
								color: x.configurationProperties.icon?.color || void 0,
								executable: Z,
								args: J.map((se) => (c.$lg(se) ? se : se.value)),
								waitOnExit: W,
							}),
							x.command.presentation && x.command.presentation.echo)
						) {
							const se = (re) =>
								!re || re.length === 0 ? "" : c.$lg(re) ? re : re.join(" ");
							ie && H
								? (X.initialText =
										this.taskShellIntegrationStartSequence(te) +
										(0, $.$aIb)(
											n.localize(
												9718,
												null,
												H.name,
												`${X.executable} ${se(X.args)}`,
											),
											{ excludeLeadingNewLine: !0 },
										) +
										this.taskShellIntegrationOutputSequence)
								: (X.initialText =
										this.taskShellIntegrationStartSequence(te) +
										(0, $.$aIb)(
											n.localize(9719, null, `${X.executable} ${se(X.args)}`),
											{ excludeLeadingNewLine: !0 },
										) +
										this.taskShellIntegrationOutputSequence);
						} else
							X.initialText = {
								text:
									this.taskShellIntegrationStartSequence(te) +
									this.taskShellIntegrationOutputSequence,
								trailingNewLine: !1,
							};
					}
					return (
						te && (X.cwd = te),
						G.env &&
							(X.env ? (X.env = { ...X.env, ...G.env }) : (X.env = G.env)),
						(X.isFeatureTerminal = !0),
						(X.useShellEnvironment = !0),
						X
					);
				}
				Ab(x, H) {
					const q = m.$vo(H);
					return (
						x.forEach((V) => {
							H.every((K, J) =>
								K.toLowerCase() === V && H.length > J + 1
									? !H.slice(J + 1).every((W) => W.startsWith("-"))
									: K.toLowerCase() !== V,
							) && q.push(V);
						}),
						q
					);
				}
				async Bb(x) {
					if (this.J)
						for (let H = 0; H < this.J.length; H++) {
							const q = this.J[H];
							if (z(q)?.lastTask === x.getCommonTaskId())
								return this.J.splice(H, 1), q;
						}
				}
				async Cb(x, H, q) {
					const V = await this.Bb(x),
						G = (J) =>
							this.ib(k.TaskEvent.terminated(x, J.instanceId, J.exitReason));
					if (V)
						return (
							"command" in x &&
								x.command.presentation &&
								(V.waitOnExit = B(
									x.command.presentation,
									x.configurationProperties,
								)),
							V.onDisposed(G),
							this.bb.trace("reconnected to task and terminal", x._id),
							V
						);
					if (H) {
						for (const J of Object.values(this.j))
							if (J.group === H) {
								this.bb.trace(`Found terminal to split for group ${H}`);
								const W = J.terminal,
									X = await this.L.createTerminal({
										location: { parentTerminal: W },
										config: q,
									});
								if ((X.onDisposed(G), X)) return X;
							}
						this.bb.trace(`No terminal found to split for group ${H}`);
					}
					const K = await this.L.createTerminal({ config: q });
					return K.onDisposed(G), K;
				}
				Db() {
					if (this.H) {
						this.bb.trace(
							`Already reconnected, to ${this.J?.length} terminals so returning`,
						);
						return;
					}
					if (
						((this.J =
							this.L.getReconnectedTerminals(N)?.filter(
								(x) => !x.isDisposed && z(x),
							) || []),
						this.bb.trace(
							`Attempting reconnection of ${this.J?.length} terminals`,
						),
						!this.J?.length)
					)
						this.bb.trace("No terminals to reconnect to so returning");
					else
						for (const x of this.J) {
							const H = z(x);
							if (H) {
								const q = { lastTask: H.lastTask, group: H.group, terminal: x };
								(this.j[x.instanceId] = q),
									this.bb.trace(
										"Reconnecting to task terminal",
										q.lastTask,
										x.instanceId,
									);
							}
						}
					this.H = !0;
				}
				Eb(x, H) {
					delete this.j[x.instanceId],
						delete this.n[H.lastTask],
						this.m.delete(H.lastTask);
					const q = H.lastTask;
					this.hb(q), this.h[q] && delete this.h[q];
				}
				async Fb(x, H, q) {
					const V = H.taskSystemInfo ? H.taskSystemInfo.platform : u.$x,
						G = await this.Rb(H, x.command.options),
						K = x.command.presentation;
					if (!K)
						throw new Error(
							"Task presentation options should not be undefined here.",
						);
					const J = B(K, x.configurationProperties);
					let W, X, Y;
					if (x.command.runtime === k.RuntimeType.CustomExecution)
						this.w.shellLaunchConfig = Y = {
							customPtyImplementation: (re, le, oe) =>
								new D.$voc(re, le, oe, this.L),
							waitOnExit: J,
							name: this.yb(x),
							initialText:
								x.command.presentation && x.command.presentation.echo
									? (0, $.$aIb)(n.localize(9720, null, x._label), {
											excludeLeadingNewLine: !0,
										})
									: void 0,
							isFeatureTerminal: !0,
							icon: x.configurationProperties.icon?.id
								? l.ThemeIcon.fromId(x.configurationProperties.icon.id)
								: void 0,
							color: x.configurationProperties.icon?.color || void 0,
						};
					else {
						const re = await this.Nb(H, x.command);
						if (
							((W = re.command),
							(X = re.args),
							(this.w.shellLaunchConfig = Y =
								await this.zb(x, q, H, V, G, W, X, J)),
							Y === void 0)
						)
							return [
								void 0,
								new P.$Spc(
									h.default.Error,
									n.localize(9721, null),
									P.TaskErrors.UnknownError,
								),
							];
					}
					const ie = K.panel === k.PanelKind.Dedicated,
						ne = K.panel === k.PanelKind.Shared,
						ee = K.group,
						_ = x.getMapKey();
					let te;
					if (ie) {
						const re = this.n[_];
						re && ((te = this.j[re]), delete this.n[_]);
					} else if (ne) {
						let re = this.m.remove(_);
						if (!re)
							for (const le of this.m.keys()) {
								const oe = this.m.get(le);
								if (oe && this.j[oe] && this.j[oe].group === ee) {
									re = this.m.remove(le);
									break;
								}
							}
						re && (te = this.j[re]);
					}
					if (te) {
						if (!Y)
							throw new Error(
								"Task shell launch configuration should not be undefined here.",
							);
						return (
							te.terminal.scrollToBottom(),
							x.configurationProperties.isBackground &&
								(Y.reconnectionProperties = {
									ownerId: N,
									data: {
										lastTask: x.getCommonTaskId(),
										group: ee,
										label: x._label,
										id: x._id,
									},
								}),
							await te.terminal.reuseTerminal(Y),
							x.command.presentation &&
								x.command.presentation.clear &&
								te.terminal.clearBuffer(),
							(this.j[te.terminal.instanceId.toString()].lastTask = _),
							[te.terminal, void 0]
						);
					}
					this.G = this.G.then(() => this.Cb(x, ee, Y));
					const Q = await this.G;
					x.configurationProperties.isBackground &&
						(Q.shellLaunchConfig.reconnectionProperties = {
							ownerId: N,
							data: {
								lastTask: x.getCommonTaskId(),
								group: ee,
								label: x._label,
								id: x._id,
							},
						});
					const Z = Q.instanceId.toString(),
						se = { terminal: Q, lastTask: _, group: ee };
					return (
						Q.onDisposed(() => this.Eb(Q, se)), (this.j[Z] = se), [Q, void 0]
					);
				}
				Gb(x, H, q, V, G, K) {
					const J = r.$vc(H).name.toLowerCase(),
						W = this.Hb(J, q, x);
					function X(se) {
						if (
							se.length >= 2 &&
							(se[0] === W.strong
								? W.strong
								: se[0] === W.weak
									? W.weak
									: void 0) === se[se.length - 1]
						)
							return !1;
						let re;
						for (let le = 0; le < se.length; le++) {
							const oe = se[le];
							if (oe === re) re = void 0;
							else {
								if (re !== void 0) continue;
								if (oe === W.escape) le++;
								else if (oe === W.strong || oe === W.weak) re = oe;
								else if (oe === " ") return !0;
							}
						}
						return !1;
					}
					function Y(se, re) {
						if (re === k.ShellQuoting.Strong && W.strong)
							return [W.strong + se + W.strong, !0];
						if (re === k.ShellQuoting.Weak && W.weak)
							return [W.weak + se + W.weak, !0];
						if (re === k.ShellQuoting.Escape && W.escape) {
							if (c.$lg(W.escape))
								return [se.replace(/ /g, W.escape + " "), !0];
							{
								const le = [];
								for (const pe of W.escape.charsToEscape) le.push(`\\${pe}`);
								const oe = new RegExp("[" + le.join(",") + "]", "g"),
									ae = W.escape.escapeChar;
								return [se.replace(oe, (pe) => ae + pe), !0];
							}
						}
						return [se, !1];
					}
					function ie(se) {
						return c.$lg(se)
							? X(se)
								? Y(se, k.ShellQuoting.Strong)
								: [se, !1]
							: Y(se.value, se.quoting);
					}
					if ((!K || K.length === 0) && c.$lg(V) && (V === G || X(G))) return V;
					const ne = [];
					let ee = !1,
						_ = !1,
						te,
						Q;
					([te, Q] = ie(V)), ne.push(te), (ee = Q);
					for (const se of K) ([te, Q] = ie(se)), ne.push(te), (_ = _ || Q);
					let Z = ne.join(" ");
					return (
						x === u.Platform.Windows &&
							(J === "cmd" && ee && _
								? (Z = '"' + Z + '"')
								: (J === "powershell" || J === "pwsh") && ee && (Z = "& " + Z)),
						Z
					);
				}
				Hb(x, H, q) {
					return H && H.quoting ? H.quoting : O.c[x] || O.f[u.$k(q)];
				}
				Ib(x, H) {
					if (
						(H.command && H.command.name && this.Kb(x, H.command, H),
						this.Lb(x, H.configurationProperties.problemMatchers),
						H.command.runtime === k.RuntimeType.CustomExecution &&
							(k.$e4.is(H) || k.$g4.is(H)))
					) {
						let q;
						k.$e4.is(H)
							? (q = H._source.config.element)
							: ((q = m.$vo(H.defines)), delete q._key, delete q.type),
							this.Jb(x, q);
					}
				}
				Jb(x, H) {
					if (c.$lg(H)) this.Mb(x, H);
					else if (Array.isArray(H)) H.forEach((q) => this.Jb(x, q));
					else if (c.$ng(H)) for (const q in H) this.Jb(x, H[q]);
				}
				Kb(x, H, q) {
					if (H.runtime === k.RuntimeType.CustomExecution) return;
					if (H.name === void 0)
						throw new Error("Command name should never be undefined here.");
					if (
						(this.Mb(x, H.name),
						H.args?.forEach((G) => this.Mb(x, G)),
						q._source.scope !== k.TaskScope.Global &&
							x.add("${workspaceFolder}"),
						H.options)
					) {
						const G = H.options;
						G.cwd && this.Mb(x, G.cwd);
						const K = G.env;
						K &&
							Object.keys(K).forEach((J) => {
								const W = K[J];
								c.$lg(W) && this.Mb(x, W);
							}),
							G.shell &&
								(G.shell.executable && this.Mb(x, G.shell.executable),
								G.shell.args?.forEach((J) => this.Mb(x, J)));
					}
				}
				Lb(x, H) {
					H == null ||
						H.length === 0 ||
						H.forEach((q) => {
							let V;
							if (
								(c.$lg(q)
									? q[0] === "$"
										? (V = f.$03.get(q.substring(1)))
										: (V = f.$03.get(q))
									: (V = q),
								V && V.filePrefix)
							)
								if (c.$lg(V.filePrefix)) this.Mb(x, V.filePrefix);
								else
									for (const G of [
										...(0, t.$6b)(V.filePrefix.include || []),
										...(0, t.$6b)(V.filePrefix.exclude || []),
									])
										this.Mb(x, G);
						});
				}
				Mb(x, H) {
					const q = c.$lg(H) ? H : H.value,
						V = /\$\{(.*?)\}/g;
					let G;
					do (G = V.exec(q)), G && x.add(G[0]);
					while (G);
				}
				async Nb(x, H) {
					let q = H.args ? H.args.slice() : [];
					return (
						(q = await this.Ob(x, q)),
						{ command: await this.Qb(x, H.name), args: q }
					);
				}
				async Ob(x, H) {
					return Promise.all(H.map((q) => this.Qb(x, q)));
				}
				async Pb(x, H) {
					if (H == null || H.length === 0) return [];
					const q = [];
					for (const V of H) {
						let G;
						if (
							(c.$lg(V)
								? V[0] === "$"
									? (G = f.$03.get(V.substring(1)))
									: (G = f.$03.get(V))
								: (G = V),
							!G)
						) {
							this.Sb(n.localize(9722, null));
							continue;
						}
						const K = x.taskSystemInfo,
							J = G.filePrefix !== void 0,
							W = K !== void 0 && K.uriProvider !== void 0;
						if (!J && !W) q.push(G);
						else {
							const X = m.$vo(G);
							if ((W && K !== void 0 && (X.uriProvider = K.uriProvider), J)) {
								const Y = X.filePrefix;
								c.$lg(Y)
									? (X.filePrefix = await this.Qb(x, Y))
									: Y !== void 0 &&
										(Y.include &&
											(Y.include = Array.isArray(Y.include)
												? await Promise.all(
														Y.include.map((ie) => this.Qb(x, ie)),
													)
												: await this.Qb(x, Y.include)),
										Y.exclude &&
											(Y.exclude = Array.isArray(Y.exclude)
												? await Promise.all(
														Y.exclude.map((ie) => this.Qb(x, ie)),
													)
												: await this.Qb(x, Y.exclude)));
							}
							q.push(X);
						}
					}
					return q;
				}
				async Qb(x, H) {
					if (c.$lg(H)) return x.resolve(H);
					if (H !== void 0)
						return { value: await x.resolve(H.value), quoting: H.quoting };
					throw new Error("Should never try to resolve undefined.");
				}
				async Rb(x, H) {
					if (H == null) {
						let V;
						try {
							V = await this.Qb(x, "${workspaceFolder}");
						} catch {}
						return { cwd: V };
					}
					const q = c.$lg(H.cwd)
						? { cwd: await this.Qb(x, H.cwd) }
						: { cwd: await this.Qb(x, "${workspaceFolder}") };
					if (H.env) {
						q.env = Object.create(null);
						for (const V of Object.keys(H.env)) {
							const G = H.env[V];
							c.$lg(G)
								? (q.env[V] = await this.Qb(x, G))
								: (q.env[V] = G.toString());
						}
					}
					return q;
				}
				static {
					this.WellKnownCommands = {
						ant: !0,
						cmake: !0,
						eslint: !0,
						gradle: !0,
						grunt: !0,
						gulp: !0,
						jake: !0,
						jenkins: !0,
						jshint: !0,
						make: !0,
						maven: !0,
						msbuild: !0,
						msc: !0,
						nmake: !0,
						npm: !0,
						rake: !0,
						tsc: !0,
						xbuild: !0,
					};
				}
				getSanitizedCommand(x) {
					let H = x.toLowerCase();
					const q = H.lastIndexOf(r.sep);
					return (
						q !== -1 && (H = H.substring(q + 1)),
						O.WellKnownCommands[H] ? H : "other"
					);
				}
				Sb(x) {
					this.N.getChannel(this.X)?.append(x);
				}
			}
			e.$dXc = O;
			function B(F, x) {
				return (F.close === void 0 || F.close === !1) &&
					(F.reveal !== k.RevealKind.Never || !x.isBackground || F.close === !1)
					? F.panel === k.PanelKind.New
						? U(n.localize(9723, null))
						: F.showReuseMessage
							? U(n.localize(9724, null))
							: !0
					: !F.close;
			}
			function U(F) {
				return (x) =>
					`${(0, L.$bXc)(L.VSCodeOscPt.CommandFinished, x.toString())}${F}`;
			}
			function z(F) {
				return F.shellLaunchConfig.attachPersistentProcess
					?.reconnectionProperties?.data;
			}
		},
	),
		