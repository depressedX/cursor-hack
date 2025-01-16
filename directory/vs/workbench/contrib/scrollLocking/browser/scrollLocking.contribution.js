define(de[3636], he([1, 0, 55, 3635]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(0, t.$s6)(i.$N2c.ID, i.$N2c, t.WorkbenchPhase.Eventually);
		}),
		define(
			de[1873],
			he([1, 0, 6, 3, 23, 4, 166, 1765]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$dUc = void 0);
				class m extends i.$1c {
					get isResponsive() {
						return !this.a;
					}
					constructor(u, a, h, c, n, g) {
						super(),
							(this.h = u),
							(this.j = a),
							(this.m = g),
							(this.a = !1),
							(this.b = this.D(new t.$re())),
							(this.onPtyHostConnected = this.b.event),
							(this.c = this.D(new t.$re())),
							(this.onPtyHostRestart = this.c.event),
							(this.f = this.D(new t.$re())),
							(this.onPtyHostUnresponsive = this.f.event),
							(this.g = this.D(new t.$re())),
							(this.onPtyHostResponsive = this.g.event);
						let p,
							o,
							f = !1;
						this.D(
							this.h.onPtyHostExit(() => {
								this.j.error(
									"The terminal's pty host process exited, the connection to all terminal processes was lost",
								);
							}),
						),
							this.D(this.onPtyHostConnected(() => (f = !0))),
							this.D(
								this.h.onPtyHostStart(() => {
									this.j.debug("The terminal's pty host process is starting"),
										f &&
											(this.j.trace("IPtyHostController#onPtyHostRestart"),
											this.c.fire()),
										o?.dispose(),
										(this.a = !1);
								}),
							),
							this.D(
								this.h.onPtyHostUnresponsive(() => {
									o?.dispose(),
										p ||
											(p = {
												name: (0, E.localize)(9961, null),
												text: `$(debug-disconnect) ${(0, E.localize)(9962, null)}`,
												tooltip: (0, E.localize)(9963, null),
												ariaLabel: (0, E.localize)(9964, null),
												command: d.TerminalDeveloperCommandId.RestartPtyHost,
												kind: "warning",
											}),
										(o = n.addEntry(
											p,
											"ptyHostStatus",
											C.StatusbarAlignment.LEFT,
										)),
										(this.a = !0),
										this.f.fire();
								}),
							),
							this.D(
								this.h.onPtyHostResponsive(() => {
									this.a &&
										(this.j.info("The pty host became responsive again"),
										o?.dispose(),
										(this.a = !1),
										this.g.fire());
								}),
							),
							this.D(
								this.h.onPtyHostRequestResolveVariables(async (b) => {
									if (b.workspaceId !== this.m.getWorkspace().id) return;
									const s = h.getLastActiveWorkspaceRoot(w.Schemas.file),
										l = s ? (this.m.getWorkspaceFolder(s) ?? void 0) : void 0,
										y = b.originalText.map((v) => c.resolveAsync(l, v)),
										$ = await Promise.all(y);
									this.h.acceptPtyHostResolvedVariables(b.requestId, $);
								}),
							);
					}
					restartPtyHost() {
						this.h.restartPtyHost();
					}
					n(u) {
						if (u === void 0) return;
						const a = JSON.parse(u);
						if (
							!("version" in a) ||
							!("state" in a) ||
							!Array.isArray(a.state)
						) {
							this.j.warn(
								"Could not revive serialized processes, wrong format",
								a,
							);
							return;
						}
						const h = a;
						if (h.version !== 1) {
							this.j.warn(
								`Could not revive serialized processes, wrong version "${h.version}"`,
								h,
							);
							return;
						}
						return h.state;
					}
					q() {
						return this.m.getWorkspace().id;
					}
				}
				e.$dUc = m;
			},
		),
		define(
			de[3637],
			he([
				1, 0, 15, 6, 197, 240, 12, 162, 31, 10, 5, 30, 211, 21, 117, 25, 1873,
				3565, 107, 3269, 145, 691, 358, 245, 143, 166,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gUc = void 0);
				let I = class {
					static {
						this.ID = "remoteTerminalBackend";
					}
					constructor(k, L, D) {
						const M = L.getConnection();
						if (M?.remoteAuthority) {
							const N = k.createInstance(
									b.$Seb,
									M.remoteAuthority,
									M.getChannel(b.$Reb),
								),
								A = k.createInstance(T, M.remoteAuthority, N);
							a.$Io.as(n.$WJ.Backend).registerTerminalBackend(A),
								D.didRegisterBackend(A.remoteAuthority);
						}
					}
				};
				(e.$gUc = I),
					(e.$gUc = I = Ne([j(0, u.$Li), j(1, v.$$m), j(2, f.$mIb)], I));
				let T = class extends p.$dUc {
					get whenReady() {
						return this.s.p;
					}
					setReady() {
						this.s.complete();
					}
					constructor(k, L, D, M, N, A, R, O, B, U, z, F, x) {
						super(L, N, z, U, x, B),
							(this.remoteAuthority = k),
							(this.y = L),
							(this.z = D),
							(this.C = M),
							(this.F = A),
							(this.G = R),
							(this.H = O),
							(this.I = z),
							(this.J = F),
							(this.r = new Map()),
							(this.s = new t.$0h()),
							(this.u = this.D(new i.$re())),
							(this.onDidRequestDetach = this.u.event),
							(this.w = this.D(new i.$re())),
							(this.onRestoreCommands = this.w.event),
							this.y.onProcessData((V) =>
								this.r.get(V.id)?.handleData(V.event),
							),
							this.y.onProcessReplay((V) => {
								this.r.get(V.id)?.handleReplay(V.event),
									V.event.commands.commands.length > 0 &&
										this.w.fire({
											id: V.id,
											commands: V.event.commands.commands,
										});
							}),
							this.y.onProcessOrphanQuestion((V) =>
								this.r.get(V.id)?.handleOrphanQuestion(),
							),
							this.y.onDidRequestDetach((V) => this.u.fire(V)),
							this.y.onProcessReady((V) =>
								this.r.get(V.id)?.handleReady(V.event),
							),
							this.y.onDidChangeProperty((V) =>
								this.r.get(V.id)?.handleDidChangeProperty(V.property),
							),
							this.y.onProcessExit((V) => {
								const G = this.r.get(V.id);
								G && (G.handleExit(V.event), this.r.delete(V.id));
							});
						const H = [
							"_remoteCLI.openExternal",
							"_remoteCLI.windowOpen",
							"_remoteCLI.getSystemStatus",
							"_remoteCLI.manageExtensions",
						];
						this.y.onExecuteCommand(async (V) => {
							if (!this.r.get(V.persistentProcessId)) return;
							const K = V.reqId,
								J = V.commandId;
							if (!H.includes(J)) {
								this.y.sendCommandResult(
									K,
									!0,
									"Invalid remote cli command: " + J,
								);
								return;
							}
							const W = V.commandArgs.map((X) => (0, w.$ji)(X));
							try {
								const X = await this.F.executeCommand(V.commandId, ...W);
								this.y.sendCommandResult(K, !1, X);
							} catch (X) {
								this.y.sendCommandResult(K, !0, X);
							}
						});
						const q = this.J.getValue(s.$ieb);
						for (const V of Object.keys(q.autoReplies)) {
							const G = q.autoReplies[V];
							G && this.y.installAutoReply(V, G);
						}
						this.D(
							this.J.onDidChangeConfiguration(async (V) => {
								if (V.affectsConfiguration(n.TerminalSettingId.AutoReplies)) {
									this.y.uninstallAllAutoReplies();
									const G = this.J.getValue(s.$ieb);
									for (const K of Object.keys(G.autoReplies)) {
										const J = G.autoReplies[K];
										J && (await this.y.installAutoReply(K, J));
									}
								}
							}),
						),
							this.b.fire();
					}
					async requestDetachInstance(k, L) {
						if (!this.y)
							throw new Error(
								"Cannot request detach instance when there is no remote!",
							);
						return this.y.requestDetachInstance(k, L);
					}
					async acceptDetachInstanceReply(k, L) {
						if (this.y) {
							if (!L) {
								this.j.warn(
									"Cannot attach to feature terminals, custom pty terminals, or those without a persistentProcessId",
								);
								return;
							}
						} else
							throw new Error(
								"Cannot accept detached instance when there is no remote!",
							);
						return this.y.acceptDetachInstanceReply(k, L);
					}
					async persistTerminalState() {
						if (!this.y)
							throw new Error(
								"Cannot persist terminal state when there is no remote!",
							);
						const k = Array.from(this.r.keys()),
							L = await this.y.serializeTerminalState(k);
						this.G.store(
							l.TerminalStorageKeys.TerminalBufferState,
							L,
							c.StorageScope.WORKSPACE,
							c.StorageTarget.MACHINE,
						);
					}
					async createProcess(k, L, D, M, N, A, R, O) {
						if (!this.y)
							throw new Error(
								"Cannot create remote terminal when there is no remote!",
							);
						if (!(await this.z.getEnvironment()))
							throw new Error("Could not fetch remote environment");
						const U = this.J.getValue(s.$ieb),
							z = {
								"terminal.integrated.env.windows": this.J.getValue(
									n.TerminalSettingId.EnvWindows,
								),
								"terminal.integrated.env.osx": this.J.getValue(
									n.TerminalSettingId.EnvMacOs,
								),
								"terminal.integrated.env.linux": this.J.getValue(
									n.TerminalSettingId.EnvLinux,
								),
								"terminal.integrated.cwd": this.J.getValue(
									n.TerminalSettingId.Cwd,
								),
								"terminal.integrated.detectLocale": U.detectLocale,
							},
							F = {
								name: k.name,
								executable: k.executable,
								args: k.args,
								cwd: k.cwd,
								env: k.env,
								useShellEnvironment: k.useShellEnvironment,
								reconnectionProperties: k.reconnectionProperties,
								type: k.type,
								isFeatureTerminal: k.isFeatureTerminal,
							},
							x = this.I.getLastActiveWorkspaceRoot(),
							H = await this.y.createProcess(F, z, x, R, O, D, M, N),
							q = this.C.createInstance(
								o.$fUc,
								H.persistentTerminalId,
								O,
								this.y,
							);
						return this.r.set(H.persistentTerminalId, q), q;
					}
					async attachToProcess(k) {
						if (!this.y)
							throw new Error(
								"Cannot create remote terminal when there is no remote!",
							);
						try {
							await this.y.attachToProcess(k);
							const L = this.C.createInstance(o.$fUc, k, !0, this.y);
							return this.r.set(k, L), L;
						} catch (L) {
							this.j.trace(`Couldn't attach to process ${L.message}`);
						}
					}
					async attachToRevivedProcess(k) {
						if (!this.y)
							throw new Error(
								"Cannot create remote terminal when there is no remote!",
							);
						try {
							const L = (await this.y.getRevivedPtyNewId(k)) ?? k;
							return await this.attachToProcess(L);
						} catch (L) {
							this.j.trace(`Couldn't attach to process ${L.message}`);
						}
					}
					async listProcesses() {
						return this.y.listProcesses();
					}
					async getLatency() {
						const k = new d.$le(),
							L = await this.y.getLatency();
						return (
							k.stop(),
							[
								{
									label: "window<->ptyhostservice<->ptyhost",
									latency: k.elapsed(),
								},
								...L,
							]
						);
					}
					async updateProperty(k, L, D) {
						await this.y.updateProperty(k, L, D);
					}
					async updateTitle(k, L, D) {
						await this.y.updateTitle(k, L, D);
					}
					async updateIcon(k, L, D, M) {
						await this.y.updateIcon(k, L, D, M);
					}
					async getDefaultSystemShell(k) {
						return this.y.getDefaultSystemShell(k) || "";
					}
					async getProfiles(k, L, D) {
						return this.y.getProfiles(k, L, D) || [];
					}
					async getEnvironment() {
						return this.y.getEnvironment() || {};
					}
					async getShellEnvironment() {
						const k = this.z.getConnection();
						return k
							? (await this.H.resolveAuthority(k.remoteAuthority)).options
									?.extensionHostEnv
							: void 0;
					}
					async getWslPath(k, L) {
						return (await this.z.getEnvironment())?.os !==
							C.OperatingSystem.Windows
							? k
							: this.y.getWslPath(k, L) || k;
					}
					async setTerminalLayoutInfo(k) {
						if (!this.y)
							throw new Error(
								"Cannot call setActiveInstanceId when there is no remote",
							);
						return this.y.setTerminalLayoutInfo(k);
					}
					async reduceConnectionGraceTime() {
						if (!this.y)
							throw new Error(
								"Cannot reduce grace time when there is no remote",
							);
						return this.y.reduceConnectionGraceTime();
					}
					async getTerminalLayoutInfo() {
						if (!this.y)
							throw new Error(
								"Cannot call getActiveInstanceId when there is no remote",
							);
						const k = this.q(),
							L = this.G.get(
								l.TerminalStorageKeys.TerminalBufferState,
								c.StorageScope.WORKSPACE,
							),
							D = this.n(L);
						if (D && D.length > 0)
							try {
								(0, E.mark)("code/terminal/willReviveTerminalProcessesRemote"),
									await this.y.reviveTerminalProcesses(
										k,
										D,
										Intl.DateTimeFormat().resolvedOptions().locale,
									),
									(0, E.mark)("code/terminal/didReviveTerminalProcessesRemote"),
									this.G.remove(
										l.TerminalStorageKeys.TerminalBufferState,
										c.StorageScope.WORKSPACE,
									);
								const M = this.G.get(
									l.TerminalStorageKeys.TerminalLayoutInfo,
									c.StorageScope.WORKSPACE,
								);
								M &&
									((0, E.mark)("code/terminal/willSetTerminalLayoutInfoRemote"),
									await this.y.setTerminalLayoutInfo(JSON.parse(M)),
									(0, E.mark)("code/terminal/didSetTerminalLayoutInfoRemote"),
									this.G.remove(
										l.TerminalStorageKeys.TerminalLayoutInfo,
										c.StorageScope.WORKSPACE,
									));
							} catch (M) {
								this.j.warn(
									"RemoteTerminalBackend#getTerminalLayoutInfo Error",
									M && typeof M == "object" && "message" in M ? M.message : M,
								);
							}
						return this.y.getTerminalLayoutInfo();
					}
					async getPerformanceMarks() {
						return this.y.getPerformanceMarks();
					}
				};
				T = Ne(
					[
						j(2, v.$$m),
						j(3, u.$Li),
						j(4, n.$YJ),
						j(5, m.$ek),
						j(6, c.$lq),
						j(7, h.$3l),
						j(8, g.$Vi),
						j(9, y.$zeb),
						j(10, $.$Feb),
						j(11, r.$gj),
						j(12, S.$d6b),
					],
					T,
				);
			},
		),
		define(
			de[3638],
			he([
				1, 0, 6, 12, 10, 5, 73, 30, 21, 117, 25, 107, 145, 691, 3151, 358, 1020,
				245, 1262, 62, 807, 1873, 110, 1173, 904, 305, 240, 52, 15, 166, 138,
				162, 143, 775,
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
				N,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ogd = void 0),
					(f = mt(f));
				let A = class {
					static {
						this.ID = "workbench.contrib.localTerminalBackend";
					}
					constructor(B, U) {
						const z = B.createInstance(R);
						d.$Io.as(r.$WJ.Backend).registerTerminalBackend(z),
							U.didRegisterBackend(z.remoteAuthority);
					}
				};
				(e.$ogd = A), (e.$ogd = A = Ne([j(0, E.$Li), j(1, a.$mIb)], A));
				let R = class extends l.$dUc {
					get y() {
						return this.w || this.G;
					}
					get whenReady() {
						return this.z.p;
					}
					setReady() {
						this.z.complete();
					}
					constructor(B, U, z, F, x, H, q, V, G, K, J, W, X, Y, ie, ne, ee) {
						super(F, z, Y, V, ne, B),
							(this.F = U),
							(this.G = F),
							(this.H = x),
							(this.I = H),
							(this.J = q),
							(this.L = V),
							(this.M = G),
							(this.N = K),
							(this.O = J),
							(this.P = W),
							(this.Q = X),
							(this.R = ie),
							(this.S = ee),
							(this.remoteAuthority = void 0),
							(this.s = new Map()),
							(this.z = new P.$0h()),
							(this.C = this.D(new t.$re())),
							(this.onDidRequestDetach = this.C.event),
							this.D(
								this.onPtyHostRestart(() => {
									(this.w = void 0), (this.u = void 0), this.U();
								}),
							);
					}
					async U() {
						if (this.u) {
							await this.u.p;
							return;
						}
						this.j.debug("Starting pty host");
						const B = new P.$0h();
						this.u = B;
						const U = S.ProxyChannel.toService(
							(0, S.$si)(
								this.u.p.then((z) =>
									z.getChannel(r.TerminalIpcChannels.PtyHostWindow),
								),
							),
						);
						(this.w = U),
							this.S.getConnection()?.remoteAuthority ||
								(await this.F.when(T.LifecyclePhase.Restored)),
							(0, I.mark)("code/terminal/willConnectPtyHost"),
							this.j.trace("Renderer->PtyHost#connect: before acquirePort"),
							(0, v.$lrb)(
								"vscode:createPtyHostMessageChannel",
								"vscode:createPtyHostMessageChannelResult",
							).then((z) => {
								(0, I.mark)("code/terminal/didConnectPtyHost"),
									this.j.trace(
										"Renderer->PtyHost#connect: connection established",
									);
								const F = new $.$erb(z, `window:${this.R.windowId}`);
								B.complete(F),
									this.b.fire(),
									U.onProcessData((H) => this.s.get(H.id)?.handleData(H.event)),
									U.onDidChangeProperty((H) =>
										this.s.get(H.id)?.handleDidChangeProperty(H.property),
									),
									U.onProcessExit((H) => {
										const q = this.s.get(H.id);
										q && (q.handleExit(H.event), this.s.delete(H.id));
									}),
									U.onProcessReady((H) =>
										this.s.get(H.id)?.handleReady(H.event),
									),
									U.onProcessReplay((H) =>
										this.s.get(H.id)?.handleReplay(H.event),
									),
									U.onProcessOrphanQuestion((H) =>
										this.s.get(H.id)?.handleOrphanQuestion(),
									),
									U.onDidRequestDetach((H) => this.C.fire(H));
								const x = this.M.getValue(h.$ieb);
								for (const H of Object.keys(x.autoReplies)) {
									const q = x.autoReplies[H];
									q && U.installAutoReply(H, q);
								}
								this.D(
									this.M.onDidChangeConfiguration(async (H) => {
										if (
											H.affectsConfiguration(r.TerminalSettingId.AutoReplies)
										) {
											U.uninstallAllAutoReplies();
											const q = this.M.getValue(h.$ieb);
											for (const V of Object.keys(q.autoReplies)) {
												const G = q.autoReplies[V];
												G && this.y.installAutoReply(V, G);
											}
										}
									}),
								),
									this.getEnvironment();
							});
					}
					async requestDetachInstance(B, U) {
						return this.y.requestDetachInstance(B, U);
					}
					async acceptDetachInstanceReply(B, U) {
						if (!U) {
							this.j.warn(
								"Cannot attach to feature terminals, custom pty terminals, or those without a persistentProcessId",
							);
							return;
						}
						return this.y.acceptDetachInstanceReply(B, U);
					}
					async persistTerminalState() {
						const B = Array.from(this.s.keys()),
							U = await this.y.serializeTerminalState(B);
						this.J.store(
							c.TerminalStorageKeys.TerminalBufferState,
							U,
							m.StorageScope.WORKSPACE,
							m.StorageTarget.MACHINE,
						);
					}
					async updateTitle(B, U, z) {
						await this.y.updateTitle(B, U, z);
					}
					async updateIcon(B, U, z, F) {
						await this.y.updateIcon(B, U, z, F);
					}
					async updateProperty(B, U, z) {
						return this.y.updateProperty(B, U, z);
					}
					async createProcess(B, U, z, F, x, H, q, V) {
						await this.U();
						const G = await this.I.getShellEnv(),
							K = await this.y.createProcess(
								B,
								U,
								z,
								F,
								x,
								H,
								G,
								q,
								V,
								this.q(),
								this.X(),
							),
							J = new n.$ngd(K, V, this.y);
						return this.s.set(K, J), J;
					}
					async attachToProcess(B) {
						await this.U();
						try {
							await this.y.attachToProcess(B);
							const U = new n.$ngd(B, !0, this.y);
							return this.s.set(B, U), U;
						} catch (U) {
							this.j.warn(`Couldn't attach to process ${U.message}`);
						}
					}
					async attachToRevivedProcess(B) {
						await this.U();
						try {
							const U = (await this.y.getRevivedPtyNewId(this.q(), B)) ?? B;
							return await this.attachToProcess(U);
						} catch (U) {
							this.j.warn(`Couldn't attach to process ${U.message}`);
						}
					}
					async listProcesses() {
						return await this.U(), this.y.listProcesses();
					}
					async getLatency() {
						const B = [],
							U = new D.$le();
						this.w &&
							(await this.w.getLatency(),
							U.stop(),
							B.push({
								label: "window<->ptyhost (message port)",
								latency: U.elapsed(),
							}),
							U.reset());
						const z = await this.G.getLatency();
						return (
							U.stop(),
							B.push({
								label: "window<->ptyhostservice<->ptyhost",
								latency: U.elapsed(),
							}),
							[...B, ...z]
						);
					}
					async getPerformanceMarks() {
						return this.y.getPerformanceMarks();
					}
					async reduceConnectionGraceTime() {
						this.y.reduceConnectionGraceTime();
					}
					async getDefaultSystemShell(B) {
						return this.y.getDefaultSystemShell(B);
					}
					async getProfiles(B, U, z) {
						return this.G.getProfiles(this.m.getWorkspace().id, B, U, z) || [];
					}
					async getEnvironment() {
						return this.y.getEnvironment();
					}
					async getShellEnvironment() {
						return this.I.getShellEnv();
					}
					async getWslPath(B, U) {
						return this.y.getWslPath(B, U);
					}
					async setTerminalLayoutInfo(B) {
						const U = { workspaceId: this.q(), tabs: B ? B.tabs : [] };
						await this.y.setTerminalLayoutInfo(U),
							this.J.store(
								c.TerminalStorageKeys.TerminalLayoutInfo,
								JSON.stringify(U),
								m.StorageScope.WORKSPACE,
								m.StorageTarget.MACHINE,
							);
					}
					async getTerminalLayoutInfo() {
						const B = this.q(),
							U = { workspaceId: B },
							z = this.J.get(
								c.TerminalStorageKeys.TerminalBufferState,
								m.StorageScope.WORKSPACE,
							),
							F = this.n(z);
						if (F && F.length > 0)
							try {
								const x = this.O.getLastActiveWorkspaceRoot(),
									H = x ? (this.m.getWorkspaceFolder(x) ?? void 0) : void 0,
									q = f.$Leb(
										H,
										await this.P.getEnvironment(this.remoteAuthority),
										this.L,
									);
								(0, I.mark)("code/terminal/willGetReviveEnvironments"),
									await Promise.all(
										F.map(
											(G) =>
												new Promise((K) => {
													this.W(q, G.shellLaunchConfig).then((J) => {
														(G.processLaunchConfig.env = J), K();
													});
												}),
										),
									),
									(0, I.mark)("code/terminal/didGetReviveEnvironments"),
									(0, I.mark)("code/terminal/willReviveTerminalProcesses"),
									await this.y.reviveTerminalProcesses(
										B,
										F,
										Intl.DateTimeFormat().resolvedOptions().locale,
									),
									(0, I.mark)("code/terminal/didReviveTerminalProcesses"),
									this.J.remove(
										c.TerminalStorageKeys.TerminalBufferState,
										m.StorageScope.WORKSPACE,
									);
								const V = this.J.get(
									c.TerminalStorageKeys.TerminalLayoutInfo,
									m.StorageScope.WORKSPACE,
								);
								V &&
									((0, I.mark)("code/terminal/willSetTerminalLayoutInfo"),
									await this.y.setTerminalLayoutInfo(JSON.parse(V)),
									(0, I.mark)("code/terminal/didSetTerminalLayoutInfo"),
									this.J.remove(
										c.TerminalStorageKeys.TerminalLayoutInfo,
										m.StorageScope.WORKSPACE,
									));
							} catch (x) {
								this.j.warn(
									"LocalTerminalBackend#getTerminalLayoutInfo Error",
									x && typeof x == "object" && "message" in x ? x.message : x,
								);
							}
						return this.y.getTerminalLayoutInfo(U);
					}
					async W(B, U) {
						const z = i.$l ? "windows" : i.$m ? "osx" : "linux",
							F = this.M.getValue(`terminal.integrated.env.${z}`),
							x = await (U.useShellEnvironment
								? this.getShellEnvironment()
								: this.getEnvironment()),
							H = await f.$Meb(
								U,
								F,
								B,
								this.N.version,
								this.M.getValue(r.TerminalSettingId.DetectLocale),
								x,
							);
						if ((0, N.$Eeb)(U)) {
							const q = f.$Oeb(U.cwd, this.m, this.O);
							await this.Q.mergedCollection.applyToProcessEnvironment(
								H,
								{ workspaceFolder: q },
								B,
							);
						}
						return H;
					}
					X() {
						return this.H.getWorkspaceLabel(this.m.getWorkspace());
					}
				};
				Ne([L.$ei], R.prototype, "getEnvironment", null),
					Ne([L.$ei], R.prototype, "getShellEnvironment", null),
					(R = Ne(
						[
							j(0, u.$Vi),
							j(1, T.$n6),
							j(2, r.$YJ),
							j(3, r.$XJ),
							j(4, C.$3N),
							j(5, p.$Cdd),
							j(6, m.$lq),
							j(7, g.$zeb),
							j(8, w.$gj),
							j(9, b.$Bk),
							j(10, o.$Feb),
							j(11, h.$reb),
							j(12, s.$ceb),
							j(13, o.$Feb),
							j(14, y.$y7c),
							j(15, k.$d6b),
							j(16, M.$$m),
						],
						R,
					));
			},
		),
		define(
			de[476],
			he([1, 0, 7, 75, 166, 66, 158]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Oac = e.$Nac = e.$Mac = e.$Lac = e.$Kac = void 0),
					(e.$Hac = d),
					(e.$Iac = m),
					(e.$Jac = r),
					(e.$Pac = g),
					(t = mt(t));
				function d(p, o, f = {}) {
					let b,
						s = null;
					return (...l) => {
						const y = () => {
								(b = void 0), !f.leading && s && (p(...s), (s = null));
							},
							$ = f.leading && !b;
						clearTimeout(b), (b = setTimeout(y, o)), $ ? p(...l) : (s = l);
					};
				}
				function m(p) {
					return p.getEditorState().read(() => {
						const o = (0, C.$getSelection)();
						if (!(0, C.$isRangeSelection)(o)) return !1;
						const f = o.anchor,
							b = o.focus;
						if (f.key !== b.key || f.offset !== b.offset) return !1;
						const s = f.getNode();
						if (f.offset !== 0) return !1;
						if (s === (0, C.$getRoot)().getFirstChild()) return !0;
						let l = s.getPreviousSibling();
						for (; l; ) {
							if (l.getTextContent().trim() !== "") return !1;
							l = l.getPreviousSibling();
						}
						return !0;
					});
				}
				function r(p, o) {
					const b = t.getWindow(p).getSelection();
					if (!b || b.rangeCount === 0) return !1;
					try {
						const s = b.getRangeAt(0);
						if (s.collapsed) {
							const l = s.cloneRange();
							l.selectNodeContents(p), l.setStart(s.endContainer, s.endOffset);
							const y = l.toString(),
								$ = p.innerText.trim(),
								v = y.trim(),
								S = v === "",
								I = $.length === $.length - v.length;
							return S && I;
						}
					} catch {}
					return !1;
				}
				const u = () => i.$Bfb.vscodeWindowId !== t.$Ogb()?.vscodeWindowId;
				e.$Kac = u;
				const a = async (p) => {
					const o = await p.getInstalled();
					for (const f of o) if (f.identifier.id === "vscodevim.vim") return !0;
					return !1;
				};
				e.$Lac = a;
				const h = (p) => {
					const o = p.statusbarService.getViewModel();
					let f = !1,
						b = !1;
					for (const s of [
						...o.getEntries(w.StatusbarAlignment.LEFT),
						...o.getEntries(w.StatusbarAlignment.RIGHT),
					])
						if (s.id === "vscodevim.vim.primary") {
							(f = !0),
								["NORMAL"].some((l) => s.container.innerText.includes(l)) &&
									(b = !0);
							break;
						}
					return { didFindVimStatusbar: f, isInNormalMode: b };
				};
				e.$Mac = h;
				const c = (p) => {
					const o = p.getGroups(E.GroupsOrder.MOST_RECENTLY_ACTIVE);
					o.length > 1 && o[1].focus();
				};
				e.$Nac = c;
				const n = (p, o, f = {}) => {
					const b = f.maxTries ?? 10,
						s = f.delayMs ?? 300;
					let l = 0;
					const y = () => {
						if (l >= b) return;
						if ((l++, !o.window.document.hasFocus())) {
							setTimeout(y, s);
							return;
						}
						p();
					};
					y();
				};
				e.$Oac = n;
				function g(p) {
					const o = Date.now(),
						f = Math.floor((o - p) / 1e3);
					return f < 60
						? `${f} seconds ago`
						: f < 3600
							? `${Math.floor(f / 60)} minutes ago`
							: f < 86400
								? `${Math.floor(f / 3600)} hours ago`
								: `${Math.floor(f / 86400)} days ago`;
				}
			},
		),
		define(
			de[477],
			he([1, 0, 20, 5, 27, 11, 43, 45, 6, 166, 3]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$l6b = e.$k6b = e.$j6b = e.$i6b = void 0),
					(e.$i6b = (0, i.$Mi)("cursorCredsService"));
				const a = "https://staging.cursor.sh",
					h = "https://dev-staging.cursor.sh",
					c = "https://dev-staging.cursor.sh",
					n = "OzaBXLClY5CAGxNzUhQ2vlknpi07tGuE",
					g = "dev.authentication.cursor.sh";
				(e.$j6b = "https://localhost:"), (e.$k6b = 8e3);
				const p = "http://localhost:4000";
				e.$l6b = 5;
				const o = {
					PROD: "Prod",
					STAGING: "Staging",
					DEV_STAGING: "DevStaging(w/local-website)`",
					STAGING_LOCAL_WEBSITE: "Staging(w/local-website)",
					LOCAL_EXCEPT_CPP_AND_EMBEDDINGS: "DefaultLocal(no cpp/embeddings)",
					STAGING_LOCAL_EXCEPT_CPP_AND_EMBEDDINGS:
						"StagingLocal(cpp/embeddings on Staging)",
					LOCAL_EXCEPT_CPP: "Local(except cpp)",
					FULL_LOCAL: "FullLocal",
					LOCAL_EXCEPT_EMBEDDINGS: "Local(except embeddings)",
				};
				let f = class extends u.$1c {
					constructor(v, S) {
						super(),
							(this.c = v),
							(this.f = S),
							(this.a = new m.$re()),
							(this.onDidRequestRelogin = this.a.event),
							(this.b = d.$eAb),
							(this.namingMap = {
								[o.PROD]: () => this.switchToProdServer,
								[o.LOCAL_EXCEPT_CPP]: () => this.switchToLocalExceptCppServer,
								[o.FULL_LOCAL]: () => this.switchToFullLocalServer,
								[o.STAGING]: () => this.switchToStagingServer,
								[o.DEV_STAGING]: () => this.switchToDevStagingServer,
								[o.STAGING_LOCAL_WEBSITE]: () =>
									this.switchToStagingServerLocalWebsite,
								[o.LOCAL_EXCEPT_CPP_AND_EMBEDDINGS]: () =>
									this.switchToLocalExceptCppAndEmbeddingsServer,
								[o.STAGING_LOCAL_EXCEPT_CPP_AND_EMBEDDINGS]: () =>
									this.switchToLocalExceptCppAndEmbeddingsServerStagingProd,
								[o.LOCAL_EXCEPT_EMBEDDINGS]: () =>
									this.switchToLocalExceptEmbeddingsServer,
							}),
							this.switchToProdServer(),
							this.h();
					}
					h() {}
					getAuth0ClientId() {
						return this.c.applicationUserPersistentStorage.cursorCreds
							.authClientId;
					}
					reloginIfNeeded(v) {
						const S = this.getAuth0ClientId();
						v !== S && this.a.fire();
					}
					hallucinatedFunctionsDebugUrl() {
						return this.c.workspaceUserPersistentStorage
							.hallucinatedFunctionsWorkspaceState
							?.hallucinatedFunctionsLocalBackend === !0
							? e.$j6b + this.localBackendPort()
							: d.$hAb;
					}
					localBackendPort() {
						return (
							this.c.applicationUserPersistentStorage.localBackendPort || e.$k6b
						);
					}
					switchToProdServer() {
						const v = this.getAuth0ClientId();
						this.c.setApplicationUserPersistentStorage("cursorCreds", {
							websiteUrl: d.$bAb,
							backendUrl: d.$cAb,
							authClientId: d.$jAb,
							authDomain: d.$kAb,
							repoBackendUrl: d.$iAb,
							telemBackendUrl: d.$dAb,
							geoCppBackendUrl: this.b,
							cppConfigBackendUrl: d.$fAb,
							cmdkBackendUrl: d.$gAb,
							hfUrl: d.$hAb,
							credentialsDisplayName: o.PROD,
						}),
							this.reloginIfNeeded(v),
							this.h();
					}
					switchToLocalExceptCppServer() {
						const v = this.localBackendPort();
						this.c.setApplicationUserPersistentStorage("cursorCreds", {
							websiteUrl: p,
							backendUrl: e.$j6b + v,
							authClientId: n,
							authDomain: g,
							repoBackendUrl: e.$j6b + v,
							telemBackendUrl: d.$dAb,
							geoCppBackendUrl: this.b,
							cppConfigBackendUrl: d.$fAb,
							cmdkBackendUrl: e.$j6b + v,
							hfUrl: this.hallucinatedFunctionsDebugUrl(),
							credentialsDisplayName: o.LOCAL_EXCEPT_CPP,
						}),
							this.h();
					}
					switchToFullLocalServer() {
						const v = this.localBackendPort();
						this.c.setApplicationUserPersistentStorage("cursorCreds", {
							websiteUrl: p,
							backendUrl: e.$j6b + v,
							authClientId: n,
							authDomain: g,
							repoBackendUrl: e.$j6b + v,
							telemBackendUrl: e.$j6b + v,
							geoCppBackendUrl: e.$j6b + v,
							cppConfigBackendUrl: e.$j6b + v,
							cmdkBackendUrl: e.$j6b + v,
							hfUrl: this.hallucinatedFunctionsDebugUrl(),
							credentialsDisplayName: o.FULL_LOCAL,
						}),
							this.h();
					}
					switchToLocalExceptCppAndEmbeddingsServerStagingProd() {
						const v = this.localBackendPort();
						this.c.setApplicationUserPersistentStorage("cursorCreds", {
							websiteUrl: p,
							backendUrl: e.$j6b + v,
							authClientId: n,
							authDomain: g,
							repoBackendUrl: h,
							telemBackendUrl: a,
							geoCppBackendUrl: a,
							cppConfigBackendUrl: a,
							cmdkBackendUrl: e.$j6b + v,
							hfUrl: this.hallucinatedFunctionsDebugUrl(),
							credentialsDisplayName: o.STAGING_LOCAL_EXCEPT_CPP_AND_EMBEDDINGS,
						}),
							this.h();
					}
					switchToLocalExceptCppAndEmbeddingsServer() {
						const v = this.localBackendPort();
						this.c.setApplicationUserPersistentStorage("cursorCreds", {
							websiteUrl: p,
							backendUrl: e.$j6b + v,
							authClientId: n,
							authDomain: g,
							repoBackendUrl: h,
							telemBackendUrl: d.$dAb,
							geoCppBackendUrl: this.b,
							cppConfigBackendUrl: d.$fAb,
							cmdkBackendUrl: e.$j6b + v,
							hfUrl: this.hallucinatedFunctionsDebugUrl(),
							credentialsDisplayName: o.LOCAL_EXCEPT_CPP_AND_EMBEDDINGS,
						}),
							this.h();
					}
					switchToStagingServer() {
						this.c.setApplicationUserPersistentStorage("cursorCreds", {
							websiteUrl: d.$bAb,
							backendUrl: a,
							authClientId: d.$jAb,
							authDomain: d.$kAb,
							repoBackendUrl: a,
							telemBackendUrl: a,
							geoCppBackendUrl: a,
							cppConfigBackendUrl: a,
							cmdkBackendUrl: a,
							hfUrl: a,
							credentialsDisplayName: o.STAGING,
						}),
							this.h();
					}
					switchToDevStagingServer() {
						this.c.setApplicationUserPersistentStorage("cursorCreds", {
							websiteUrl: p,
							backendUrl: c,
							authClientId: n,
							authDomain: g,
							repoBackendUrl: c,
							telemBackendUrl: c,
							geoCppBackendUrl: c,
							cppConfigBackendUrl: c,
							cmdkBackendUrl: c,
							hfUrl: c,
							credentialsDisplayName: o.DEV_STAGING,
						});
					}
					switchToStagingServerLocalWebsite() {
						this.c.setApplicationUserPersistentStorage("cursorCreds", {
							websiteUrl: p,
							backendUrl: a,
							authClientId: n,
							authDomain: g,
							repoBackendUrl: a,
							telemBackendUrl: a,
							geoCppBackendUrl: a,
							cppConfigBackendUrl: a,
							cmdkBackendUrl: a,
							hfUrl: a,
							credentialsDisplayName: o.STAGING_LOCAL_WEBSITE,
						}),
							this.h();
					}
					switchToLocalExceptEmbeddingsServer() {
						const v =
							this.c.applicationUserPersistentStorage.localBackendPort ||
							e.$k6b;
						this.c.setApplicationUserPersistentStorage("cursorCreds", {
							websiteUrl: p,
							backendUrl: e.$j6b + v,
							authClientId: n,
							authDomain: g,
							repoBackendUrl: h,
							telemBackendUrl: d.$dAb,
							geoCppBackendUrl: e.$j6b + v,
							cppConfigBackendUrl: e.$j6b + v,
							cmdkBackendUrl: e.$j6b + v,
							hfUrl: this.hallucinatedFunctionsDebugUrl(),
							credentialsDisplayName: o.LOCAL_EXCEPT_EMBEDDINGS,
						}),
							this.h();
					}
					getCredentials() {
						return this.c.applicationUserPersistentStorage.cursorCreds;
					}
					getLoginUrl() {
						return `${this.c.applicationUserPersistentStorage.cursorCreds.websiteUrl}/loginDeepControl`;
					}
					getLogoutUrl() {
						return `${this.c.applicationUserPersistentStorage.cursorCreds.websiteUrl}/api/auth/logout`;
					}
					getSettingsUrl() {
						return `${this.c.applicationUserPersistentStorage.cursorCreds.websiteUrl}/settings`;
					}
					getCheckoutUrl() {
						return `${this.c.applicationUserPersistentStorage.cursorCreds.websiteUrl}/pricing`;
					}
					getPollingEndpoint() {
						return `${this.c.applicationUserPersistentStorage.cursorCreds.backendUrl}/auth/poll`;
					}
					getBackendUrl() {
						return this.c.applicationUserPersistentStorage.cursorCreds
							.backendUrl;
					}
					getRepoBackendUrl() {
						return this.c.applicationUserPersistentStorage.cursorCreds
							.repoBackendUrl;
					}
					getTelemBackendUrl() {
						return this.c.applicationUserPersistentStorage.cursorCreds
							.telemBackendUrl;
					}
					getGeoCppBackendUrl() {
						return this.c.applicationUserPersistentStorage.cursorCreds
							.geoCppBackendUrl;
					}
					getCppConfigBackendUrl() {
						return this.c.applicationUserPersistentStorage.cursorCreds
							.cppConfigBackendUrl;
					}
					setGeoCppBackendUrl(v) {
						(v === "" || !v.includes("cursor.sh")) && (v = d.$eAb),
							(this.b = v),
							this.c.setApplicationUserPersistentStorage("cursorCreds", (S) =>
								S.credentialsDisplayName !== o.LOCAL_EXCEPT_EMBEDDINGS &&
								S.credentialsDisplayName !== o.FULL_LOCAL
									? { ...S, geoCppBackendUrl: v }
									: S,
							);
					}
				};
				(f = Ne([j(0, d.$0zb), j(1, r.$d6b)], f)),
					(0, t.$lK)(e.$i6b, f, t.InstantiationType.Delayed);
				var b;
				(function ($) {
					($.Prod = "prod"),
						($.Staging = "staging"),
						($.DevStaging = "devStagingEverything"),
						($.StagingLocalWebsite = "stagingLocalWebsite"),
						($.LocalExceptCppAndEmbeddings = "local"),
						($.LocalExceptCppAndEmbeddingsStaging = "localStaging"),
						($.LocalExceptCPP = "fullLocal"),
						($.LocalExceptEmbeddings = "localExceptEmbeddings"),
						($.FullLocal = "fullLocalincludingcpp");
				})(b || (b = {}));
				const s = {
					[b.Prod]:
						w.KeyMod.WinCtrl | w.KeyMod.Shift | w.KeyMod.Alt | w.KeyCode.Digit1,
					[b.Staging]:
						w.KeyMod.WinCtrl | w.KeyMod.Shift | w.KeyMod.Alt | w.KeyCode.Digit2,
					[b.StagingLocalWebsite]:
						w.KeyMod.WinCtrl | w.KeyMod.Shift | w.KeyMod.Alt | w.KeyCode.Digit3,
					[b.LocalExceptCppAndEmbeddings]:
						w.KeyMod.WinCtrl | w.KeyMod.Shift | w.KeyMod.Alt | w.KeyCode.Digit4,
					[b.LocalExceptCPP]:
						w.KeyMod.WinCtrl | w.KeyMod.Shift | w.KeyMod.Alt | w.KeyCode.Digit5,
					[b.FullLocal]:
						w.KeyMod.WinCtrl | w.KeyMod.Shift | w.KeyMod.Alt | w.KeyCode.Digit6,
					[b.LocalExceptEmbeddings]:
						w.KeyMod.WinCtrl | w.KeyMod.Shift | w.KeyMod.Alt | w.KeyCode.Digit7,
					[b.DevStaging]:
						w.KeyMod.WinCtrl | w.KeyMod.Shift | w.KeyMod.Alt | w.KeyCode.Digit8,
					[b.LocalExceptCppAndEmbeddingsStaging]:
						w.KeyMod.WinCtrl | w.KeyMod.Shift | w.KeyMod.Alt | w.KeyCode.Digit9,
				};
				function l($, v, ...S) {
					const I = v.get(e.$i6b),
						T = I.getAuth0ClientId();
					switch ($) {
						case b.Prod:
							I.switchToProdServer();
							break;
						case b.Staging:
							I.switchToStagingServer();
							break;
						case b.StagingLocalWebsite:
							I.switchToStagingServerLocalWebsite();
							break;
						case b.LocalExceptCppAndEmbeddings:
							I.switchToLocalExceptCppAndEmbeddingsServer();
							break;
						case b.LocalExceptCPP:
							I.switchToLocalExceptCppServer();
							break;
						case b.FullLocal:
							I.switchToFullLocalServer();
							break;
						case b.LocalExceptEmbeddings:
							I.switchToLocalExceptEmbeddingsServer();
							break;
						case b.DevStaging:
							I.switchToDevStagingServer();
							break;
						case b.LocalExceptCppAndEmbeddingsStaging:
							I.switchToLocalExceptCppAndEmbeddingsServerStagingProd();
							break;
						default: {
							const P = $;
							throw new Error(`Invalid backend: ${P}`);
						}
					}
					I.reloginIfNeeded(T);
				}
				function y() {
					return Object.values(b).map(
						($) =>
							class extends E.$3X {
								constructor() {
									super({
										id: `debug.switchTo${$}Backend`,
										title: {
											value: `Switch to ${$} Backend`,
											original: `Switch to ${$} Backend`,
										},
										f1: !0,
										keybinding: {
											primary: s[$],
											weight: C.KeybindingWeight.WorkbenchContrib,
										},
									});
								}
								run(v, ...S) {
									l($, v, ...S);
								}
							},
					);
				}
			},
		),
		define(
			de[232],
			he([
				1, 0, 5, 465, 20, 41, 47, 21, 76, 477, 34, 32, 45, 1107, 1469, 3, 894,
				78, 119, 191, 11, 6, 75, 1468, 62, 134, 285, 551, 1280, 13, 58, 216,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$H6b =
						e.SignUpType =
						e.$G6b =
						e.$F6b =
						e.$E6b =
						e.$D6b =
						e.$C6b =
						e.$B6b =
						e.$A6b =
						e.$z6b =
						e.$y6b =
						e.$x6b =
							void 0),
					(e.$x6b = (0, t.$Mi)("authenticationService")),
					(e.$y6b = "cursorAuth/stripeCustomerId"),
					(e.$z6b = "cursorAuth/stripeMembershipType"),
					(e.$A6b = "cursorAuth/cachedEmail"),
					(e.$B6b = "cursorAuth/cachedSignUpType"),
					(e.$C6b = "cursorai/donotchange/privacyMode"),
					(e.$D6b = [
						"claude-3-opus-20240229",
						"claude-3-sonnet-20240229",
						"claude-3-haiku-20240307",
					]),
					(e.$E6b = ["gemini-1.5-flash", "gemini-1.5-flash-8b"]);
				const M = ["gemini-1.5-preview"],
					N = (F) => e.$D6b.includes(F) || F.startsWith("claude-");
				e.$F6b = N;
				const A = (F) =>
					e.$E6b.includes(F) || (F.startsWith("gemini-") && !M.includes(F));
				e.$G6b = A;
				var R;
				(function (F) {
					(F.UNKNOWN = "unknown"),
						(F.AUTH_0 = "Auth_0"),
						(F.GOOGLE = "Google"),
						(F.GITHUB = "Github");
				})(R || (e.SignUpType = R = {}));
				const O = 2 * 60 * 60 * 1e3;
				let B = class extends g.$1c {
					constructor(x, H, q) {
						super(),
							(this.a = x),
							(this.c = H),
							(this.f = q),
							(this.g = []),
							(this.h = []),
							(this.j = []),
							(this.m = []),
							(this.n = []),
							(this.q = new l.$re()),
							(this.r = null),
							(this.onDidChangeSubscription = this.q.event),
							(this.s = () =>
								this.a.get(
									"cursorAuth/refreshToken",
									d.StorageScope.APPLICATION,
								)),
							(this.t = () =>
								this.c.overrideCursorAuthToken
									? this.c.overrideCursorAuthToken
									: this.a.get(
											"cursorAuth/accessToken",
											d.StorageScope.APPLICATION,
										)),
							(this.u = () => this.a.get(e.$z6b, d.StorageScope.APPLICATION)),
							(this.membershipType = () => {
								switch (this.u()) {
									case S.MembershipType.ENTERPRISE:
										return S.MembershipType.ENTERPRISE;
									case S.MembershipType.PRO:
										return S.MembershipType.PRO;
									case S.MembershipType.FREE_TRIAL:
										return S.MembershipType.FREE_TRIAL;
									default:
										return S.MembershipType.FREE;
								}
							}),
							(this.openAIKey = () =>
								this.a.get("cursorAuth/openAIKey", d.StorageScope.APPLICATION)),
							(this.claudeKey = () =>
								this.a.get("cursorAuth/claudeKey", d.StorageScope.APPLICATION)),
							(this.googleKey = () =>
								this.a.get("cursorAuth/googleKey", d.StorageScope.APPLICATION)),
							(this.w = (V, G) => {
								this.a.store(
									"cursorAuth/refreshToken",
									G,
									d.StorageScope.APPLICATION,
									d.StorageTarget.MACHINE,
								),
									this.a.store(
										"cursorAuth/accessToken",
										V,
										d.StorageScope.APPLICATION,
										d.StorageTarget.MACHINE,
									);
								const K = !!V && !!G;
								for (const J of this.m) J(K);
								if (K) {
									const J = (0, m.$bf)(V),
										W = new Date(J.exp * 1e3),
										X = new Date(W.getTime() - O);
									X.getTime() > Date.now() &&
										setTimeout(() => {
											this.refreshAccessToken();
										}, X.getTime() - Date.now());
								}
							}),
							(this.y = (V, G) => {
								this.a.store(
									e.$A6b,
									V,
									d.StorageScope.APPLICATION,
									d.StorageTarget.MACHINE,
								),
									this.a.store(
										e.$B6b,
										G,
										d.StorageScope.APPLICATION,
										d.StorageTarget.MACHINE,
									);
							}),
							(this.z = () => {
								this.a.store(
									e.$A6b,
									"",
									d.StorageScope.APPLICATION,
									d.StorageTarget.MACHINE,
								),
									this.a.store(
										e.$B6b,
										R.UNKNOWN,
										d.StorageScope.APPLICATION,
										d.StorageTarget.MACHINE,
									);
							}),
							(this.isTokenExpired = (V) => {
								const G = (0, m.$bf)(V);
								return new Date(G.exp * 1e3).getTime() < Date.now();
							}),
							(this.H = (V) => {
								const G = this.membershipType();
								(V = V ?? S.MembershipType.FREE),
									this.a.store(
										e.$z6b,
										V,
										d.StorageScope.APPLICATION,
										d.StorageTarget.MACHINE,
									),
									G !== V && this.C(V, G),
									this.q.fire(V);
							}),
							(this.storeOpenAIKey = (V) => {
								for (const G of this.g) G(V);
								this.a.store(
									"cursorAuth/openAIKey",
									V,
									d.StorageScope.APPLICATION,
									d.StorageTarget.MACHINE,
								);
							}),
							(this.storeClaudeKey = (V) => {
								for (const G of this.h) G(V);
								this.a.store(
									"cursorAuth/claudeKey",
									V,
									d.StorageScope.APPLICATION,
									d.StorageTarget.MACHINE,
								);
							}),
							(this.storeGoogleKey = (V) => {
								for (const G of this.j) G(V);
								this.a.store(
									"cursorAuth/googleKey",
									V,
									d.StorageScope.APPLICATION,
									d.StorageTarget.MACHINE,
								);
							});
					}
					getApiKeyForModel(x) {
						return (0, e.$F6b)(x) &&
							this.f.applicationUserPersistentStorage.useClaudeKey
							? this.claudeKey()
							: (0, e.$G6b)(x) &&
									this.f.applicationUserPersistentStorage.useGoogleKey
								? this.googleKey()
								: this.openAIKey();
					}
					getExpirationTime(x) {
						return (0, m.$bf)(x).exp * 1e3;
					}
					isAlmostExpired(x) {
						if (
							this.r === null ||
							this.r.accessToken !== x ||
							this.r.cacheExpiration < Date.now()
						) {
							const q = this.getExpirationTime(x) - 5 * 60 * 1e3;
							return Date.now() > q
								? ((this.r = null), !0)
								: ((this.r = { accessToken: x, cacheExpiration: q }), !1);
						} else return !1;
					}
					addOpenAIKeyChangedListener(x) {
						this.g.push(x);
					}
					addClaudeKeyChangedListener(x) {
						this.h.push(x);
					}
					addGoogleKeyChangedListener(x) {
						this.j.push(x);
					}
					addLoginChangedListener(x) {
						this.m.push(x);
					}
					addSubscriptionChangedListener(x) {
						this.n.push(x);
					}
					removeOpenAIKeyChangedListener(x) {
						this.g = this.g.filter((H) => H !== x);
					}
					removeClaudeKeyChangedListener(x) {
						this.h = this.h.filter((H) => H !== x);
					}
					removeGoogleKeyChangedListener(x) {
						this.j = this.j.filter((H) => H !== x);
					}
					removeLoginChangedListener(x) {
						this.m = this.m.filter((H) => H !== x);
					}
					removeSubscriptionChangedListener(x) {
						this.n = this.n.filter((H) => H !== x);
					}
					C(x, H) {
						for (const q of this.n) q(x, H);
					}
					F(x) {
						for (const H of this.m) H(x);
					}
					G(x) {
						this.q.fire(x);
					}
				};
				B = Ne([j(0, d.$lq), j(1, o.$r8), j(2, h.$0zb)], B);
				let U = class extends B {
					constructor(x, H, q, V, G, K, J, W, X, Y, ie, ne) {
						super(x, H, q),
							(this.X = V),
							(this.Y = G),
							(this.Z = K),
							(this.$ = J),
							(this.ab = W),
							(this.bb = X),
							(this.cb = Y),
							(this.db = ie),
							(this.eb = ne),
							(this.L = () => {}),
							(this.M = () => {}),
							(this.N = () => {}),
							(this.R = () => !0),
							(this.S = () => {}),
							(this.U = !0),
							(this.W = new l.$re()),
							(this.onDidPotentiallyChangePrivacyMode = this.W.event),
							(this.getDaysRemainingOnTrial = async () => {
								const te = await this.getAccessToken();
								return te
									? (
											await (
												await fetch(
													`${this.X.getBackendUrl()}/auth/full_stripe_profile`,
													{
														headers: {
															Authorization: `Bearer ${te}`,
															[S.$oJ]: (0, S.$pJ)(this.reactivePrivacyMode()),
															[D.$HOb]: (0, D.$NOb)(),
														},
													},
												)
											).json()
										).daysRemainingOnTrial
									: void 0;
							}),
							(this.logout = async () => {
								this.a.store(
									"cursorAuth/refreshToken",
									null,
									d.StorageScope.APPLICATION,
									d.StorageTarget.MACHINE,
								),
									this.a.store(
										"cursorAuth/accessToken",
										null,
										d.StorageScope.APPLICATION,
										d.StorageTarget.MACHINE,
									),
									this.a.store(
										e.$y6b,
										null,
										d.StorageScope.APPLICATION,
										d.StorageTarget.MACHINE,
									),
									this.a.store(
										e.$z6b,
										S.MembershipType.FREE,
										d.StorageScope.APPLICATION,
										d.StorageTarget.MACHINE,
									),
									this.z(),
									this.C(S.MembershipType.FREE, S.MembershipType.FREE),
									this.G(S.MembershipType.FREE),
									this.F(!1),
									this.refreshMembershipType(),
									await this.Y.open(`${this.X.getLogoutUrl()}`, {
										openExternal: !0,
									});
							}),
							(this.debouncedRefetchIsTeamsPrivacyModeOn = (0, T.$t6b)(() => {
								this.S();
							}, 3e4)),
							(this.fb = !1),
							(this.lb = !1),
							(this.refreshAccessToken = async (te = !1) => {
								if (this.lb) return;
								this.lb = !0;
								let Q;
								try {
									const Z = this.t();
									if (
										Z &&
										!te &&
										new Date((0, m.$bf)(Z).exp * 1e3).getTime() - Date.now() > O
									)
										return;
									const se = this.s();
									if (se) {
										const re = new AbortController();
										Q = setTimeout(() => re.abort(), 2e4);
										const le = {
												method: "POST",
												headers: { "content-type": "application/json" },
												body: JSON.stringify({
													grant_type: "refresh_token",
													client_id: this.X.getCredentials().authClientId,
													refresh_token: se,
												}),
												signal: re.signal,
											},
											oe = `https://${this.X.getCredentials().authDomain}/oauth/token`,
											ae = await fetch(oe, le);
										if ((clearTimeout(Q), ae instanceof Error))
											throw new Error("Failed to refresh access token");
										console.log("successfully refreshed access token!");
										const pe = await ae.json();
										pe.shouldLogout === !0
											? this.logout()
											: this.w(pe.access_token, se);
									}
								} catch (Z) {
									console.error(Z);
								} finally {
									(this.lb = !1), Q && clearTimeout(Q);
								}
							}),
							(this.getDidUserLastPaymentFailed = async () => {
								const te = await this.getAccessToken();
								return await (
									await fetch(
										`${this.X.getBackendUrl()}/auth/last_payment_failed`,
										{
											headers: {
												Authorization: `Bearer ${te}`,
												[S.$oJ]: (0, S.$pJ)(this.reactivePrivacyMode()),
												[D.$HOb]: (0, D.$NOb)(),
											},
										},
									)
								).json();
							}),
							(this.refreshMembershipType = async () => {
								const te = this.t();
								if (!te) {
									this.H(S.MembershipType.FREE),
										this.f.applicationUserPersistentStorage.aiSettings.teamIds
											?.length !== 0 &&
											this.f.setApplicationUserPersistentStorage(
												"aiSettings",
												"teamIds",
												[],
											);
									return;
								}
								const Q = await this.getTeams();
								if (Q.some((se) => se.hasBilling && se.seats > 0)) {
									const se =
										this.f.applicationUserPersistentStorage.aiSettings
											.teamIds || [];
									(se.length !== Q.length ||
										se.some((re) => !Q.some((le) => le.id === re))) &&
										this.f.setApplicationUserPersistentStorage(
											"aiSettings",
											"teamIds",
											Q.map((re) => re.id),
										),
										this.H(S.MembershipType.ENTERPRISE),
										(0, k.untrack)(() => {
											this.W.fire(this.reactivePrivacyMode());
										});
									return;
								} else
									this.f.applicationUserPersistentStorage.aiSettings.teamIds
										?.length !== 0 &&
										this.f.setApplicationUserPersistentStorage(
											"aiSettings",
											"teamIds",
											[],
										);
								let Z;
								try {
									const se = await fetch(
										`${this.X.getBackendUrl()}/auth/full_stripe_profile`,
										{
											headers: {
												Authorization: `Bearer ${te}`,
												[S.$oJ]: (0, S.$pJ)(this.reactivePrivacyMode()),
												[D.$HOb]: (0, D.$NOb)(),
											},
										},
									);
									if (se.status === 404) throw new Error("404 Not found");
									Z = await se.json();
								} catch {
									const re = await fetch(
										`${this.X.getBackendUrl()}/auth/stripe_profile`,
										{
											headers: {
												Authorization: `Bearer ${te}`,
												[S.$oJ]: (0, S.$pJ)(this.reactivePrivacyMode()),
												[D.$HOb]: (0, D.$NOb)(),
											},
										},
									).then((le) => le.json());
									re && typeof re == "string"
										? (Z = {
												membershipType: S.MembershipType.PRO,
												paymentId: re,
											})
										: (Z = void 0);
								}
								Z !== void 0
									? this.H(Z.membershipType)
									: this.H(S.MembershipType.FREE);
							}),
							(this.mb = (0, k.createSignal)(0)),
							(this.reactiveMembershipType = () => {
								const te = this.mb[0]();
								return this.membershipType();
							}),
							(this.Q = this.D(this.f.createScoped(this))),
							(this.I = new g.$Zc()),
							this.D(this.I),
							this.f.setApplicationUserPersistentStorage(
								"membershipType",
								this.membershipType(),
							),
							this.a.onDidChangeValue(
								d.StorageScope.APPLICATION,
								e.$z6b,
								this.I,
							)(() => {
								this.f.setApplicationUserPersistentStorage(
									"membershipType",
									this.a.get(e.$z6b, d.StorageScope.APPLICATION),
								);
							}),
							this.Q.onChangeEffect({
								deps: [() => this.reactivePrivacyMode()],
								onChange: ({ deps: te }) => {
									this.W.fire(te[0]);
								},
								runNowToo: !0,
							}),
							this.bb.registerBearerTokenProvider(() => this.getAccessToken()),
							this.Z.registerHandler({
								handleURL: async (te, Q) => {
									if (
										(te.scheme === "control" || te.scheme === "cursor") &&
										te.authority === "cursorAuth"
									) {
										const Z = te.query,
											se = new URLSearchParams(Z);
										return this.hb(se), !0;
									}
									return !1;
								},
							}),
							(this.O = this.cb.createInstance(I.$q6b, { service: c.$X$ })),
							(this.P = this.cb.createInstance(I.$q6b, { service: n.$I0 })),
							this.addLoginChangedListener((te) => {
								if ((this.O.createServer(), this.P.createServer(), te)) {
									const Q = this.t();
									if (Q) {
										const Z = this.getAuthIdFromToken(Q);
										this.ab.registerAuthId(Z);
										return;
									}
								}
								this.ab.registerAuthId(void 0);
							});
						const ee = this.t();
						if (ee) {
							const te = this.getAuthIdFromToken(ee);
							this.ab.registerAuthId(te);
						} else this.ab.registerAuthId(void 0);
						this.D(
							this.db.onDidChangeTransport(() => {
								this.sendPrivacySettings().catch(console.error);
							}),
						),
							this.reconcilePrivacyMode(),
							this.Q.onChangeEffect({
								deps: [() => this.reactivePrivacyMode()],
								onChange: ({ deps: te }) => {
									this.sendPrivacySettings().catch(console.error);
									try {
										this.a.store(
											e.$C6b,
											(0, S.$pJ)(this.reactivePrivacyMode()),
											d.StorageScope.APPLICATION,
											d.StorageTarget.USER,
										);
									} catch (Q) {
										console.error(Q);
									}
								},
							});
						const _ = this.Q.createImplicitResource({
							depFn: () =>
								this.f.applicationUserPersistentStorage.aiSettings.teamIds,
							produceFn: async (te) => {
								let Q;
								try {
									if (te === void 0 || te.length === 0)
										return (this.U = !0), !0;
									const Z = new AbortController();
									Q = setTimeout(() => {
										Z.abort();
									}, 5e3);
									const se = await this.dashboardClient();
									return await Promise.allSettled(
										te.map(
											async (le) =>
												await se
													.getTeamPrivacyModeForced(new p.$T0({ teamId: le }), {
														headers: (0, b.$m6b)((0, C.$9g)()),
														signal: Z.signal,
													})
													.then((oe) => oe.privacyModeForced),
										),
									).then((le) => {
										if (
											le.filter((pe) => pe.status === "fulfilled").length === 0
										)
											return this.U;
										const ae = le.some(
											(pe) => pe.status === "fulfilled" && pe.value,
										);
										return (this.U = ae), ae;
									});
								} finally {
									Q && clearTimeout(Q),
										(0, k.untrack)(() => {
											this.W.fire(this.reactivePrivacyMode());
										});
								}
							},
							initialValue: !0,
						});
						(this.R = _[0]),
							(this.S = _[1].refetch),
							this.S(),
							y.$Bfb.setInterval(() => {
								this.S();
							}, 5 * 6e4),
							(this.J = new Promise((te, Q) => {
								this.L = te;
							})),
							this.refreshAuthentication(),
							this.D(
								this.X.onDidRequestRelogin(() => {
									this.a.store(
										"cursorAuth/refreshToken",
										null,
										d.StorageScope.APPLICATION,
										d.StorageTarget.MACHINE,
									),
										this.a.store(
											"cursorAuth/accessToken",
											null,
											d.StorageScope.APPLICATION,
											d.StorageTarget.MACHINE,
										),
										this.a.store(
											e.$y6b,
											null,
											d.StorageScope.APPLICATION,
											d.StorageTarget.MACHINE,
										),
										this.a.store(
											e.$z6b,
											S.MembershipType.FREE,
											d.StorageScope.APPLICATION,
											d.StorageTarget.MACHINE,
										),
										this.C(S.MembershipType.FREE, S.MembershipType.FREE),
										this.G(S.MembershipType.FREE),
										this.F(!1),
										this.login();
								}),
							),
							this.D(
								this.onDidChangeSubscription((te) => {
									this.mb[1]((Q) => Q + 1);
								}),
							),
							setTimeout(() => {
								this.getDidUserLastPaymentFailed().then((te) => {
									this.f.setNonPersistentStorage({
										...this.f.nonPersistentStorage,
										lastPaymentWasFailed: te,
									});
								});
							}, 1e3);
					}
					reconcilePrivacyMode() {
						try {
							this.a.get(e.$C6b, d.StorageScope.APPLICATION) === "true" &&
								this.reactivePrivacyMode() !== !0 &&
								this.f.setApplicationUserPersistentStorage("noStorageMode", !0);
						} catch (x) {
							console.error(x);
						}
					}
					shouldHaveGhostModeFromEnterprise() {
						return this.debouncedRefetchIsTeamsPrivacyModeOn(), this.R();
					}
					belongsToDevTeam() {
						const x =
							this.f.applicationUserPersistentStorage.aiSettings.teamIds;
						return x === void 0 ? !1 : x.includes(1);
					}
					reactivePrivacyMode() {
						const x = this.f.applicationUserPersistentStorage.noStorageMode;
						return this.reactiveMembershipType() === S.MembershipType.ENTERPRISE
							? this.belongsToDevTeam()
								? (x !== !1 &&
										this.f.setApplicationUserPersistentStorage(
											"noStorageMode",
											!1,
										),
									!1)
								: this.shouldHaveGhostModeFromEnterprise()
									? (this.f.setApplicationUserPersistentStorage(
											"noStorageMode",
											!0,
										),
										!0)
									: x
							: x === void 0 &&
									this.a.get(L.$IV, d.StorageScope.APPLICATION, "true") !==
										"true"
								? (this.f.setApplicationUserPersistentStorage(
										"noStorageMode",
										!0,
									),
									!0)
								: x;
					}
					async refreshAuthService() {
						this.P.createServer(), this.O.createServer();
					}
					async dashboardClient() {
						return await this.O.get();
					}
					async authClient() {
						return await this.P.get();
					}
					async getTeams() {
						const x = await this.dashboardClient();
						try {
							return (
								await x.getTeams(new p.$_0({}), {
									headers: (0, b.$m6b)((0, C.$9g)()),
								})
							).teams;
						} catch (H) {
							if ("rawMessage" in H && H.rawMessage.includes("404"))
								return console.error("Using pre-teams backend"), [];
							throw H;
						}
					}
					async sendPrivacySettings() {
						(0, T.$s6b)(async () => {
							if (!this.fb) {
								this.fb = !0;
								try {
									await (0, T.$w6b)(
										async () => {
											const x = await this.authClient();
											if (this.t() === void 0)
												throw new Error("No access token");
											await x.markPrivacy({
												currentPrivacyMode: this.reactivePrivacyMode(),
												onboardingPrivacyMode:
													this.f.applicationUserPersistentStorage
														.selectedPrivacyForOnboarding,
												isUsingCurrentAndOnboardingFormat: !0,
											});
										},
										{ initialRetryTimeMs: 3e3, maxNumberOfRetries: 5 },
									);
								} catch (x) {
									console.error(x);
								} finally {
									this.fb = !1;
								}
							}
						}, 10 * 1e3);
					}
					async getEmailAndSignUpType() {
						const x = this.a.get(e.$A6b, d.StorageScope.APPLICATION),
							H = this.a.get(e.$B6b, d.StorageScope.APPLICATION);
						if (x && x !== "" && H) {
							const J = Object.values(R).includes(H) ? H : R.UNKNOWN;
							return { email: x, signUpType: J };
						}
						const q = (0, C.$9g)(),
							G = await (await this.authClient()).getEmail(
								{},
								{ headers: (0, b.$m6b)(q) },
							);
						let K = R.UNKNOWN;
						switch (G.signUpType) {
							case $.GetEmailResponse_SignUpType.AUTH_0:
								K = R.AUTH_0;
								break;
							case $.GetEmailResponse_SignUpType.GOOGLE:
								K = R.GOOGLE;
								break;
							case $.GetEmailResponse_SignUpType.GITHUB:
								K = R.GITHUB;
								break;
						}
						return this.y(G.email, K), { email: G.email, signUpType: K };
					}
					gb() {
						this.J = new Promise((x, H) => {
							this.L = x;
						});
					}
					async hb(x) {
						switch (x.get("route")) {
							case "login": {
								const q = x.get("refreshToken"),
									V = x.get("accessToken");
								q &&
									V &&
									(this.w(V, q), await this.refreshMembershipType(), this.L());
								return;
							}
							case "pay":
								await this.refreshAccessToken(), this.L();
								return;
							default:
								return;
						}
					}
					ib(x) {
						const H = m.$Te.wrap(x);
						return (0, m.$cf)(H, !1, !0);
					}
					async jb(x) {
						if (!crypto.subtle)
							throw new Error(
								"'crypto.subtle' is not available so webviews will not work. This is likely because the editor is not running in a secure context (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).",
							);
						const q = new TextEncoder().encode(x);
						return await crypto.subtle.digest("sha-256", q);
					}
					kb(x) {
						this.ab.publicLogCapture("$identify_cursordelimiter_" + x);
					}
					async login(x = "login") {
						this.gb();
						const H = new Uint8Array(32);
						crypto.getRandomValues(H);
						const q = this.ib(H),
							V = this.ib(new Uint8Array(await this.jb(q))),
							G = (0, C.$9g)();
						await this.Y.open(
							`${this.X.getLoginUrl()}?challenge=${V}&uuid=${G}&mode=${x}`,
							{ openExternal: !0 },
						);
						let K = 0;
						this.M(), this.$.info("Starting polling for login");
						const J = y.$Bfb.setInterval(async () => {
							this.$.info("Beginning of Login Poll");
							const W = await fetch(
								`${this.X.getPollingEndpoint()}?uuid=${G}&verifier=${q}`,
								{
									headers: {
										[S.$oJ]: (0, S.$pJ)(this.reactivePrivacyMode()),
										[D.$HOb]: (0, D.$NOb)(),
									},
								},
							);
							if ((this.$.info("Got login result", W.status), W.status == 404))
								return;
							const X = await W.json();
							this.$.info("Got login json", X),
								X !== void 0 &&
									(X.authId && this.kb(X.authId),
									X.accessToken &&
										X.refreshToken &&
										(this.w(X.accessToken, X.refreshToken),
										await this.refreshMembershipType(),
										this.L(),
										y.$Bfb.clearInterval(J))),
								K++,
								K >= 30 && y.$Bfb.clearInterval(J);
						}, 200);
						(this.M = () => {
							y.$Bfb.clearInterval(J);
						}),
							await Promise.race([
								new Promise((W) => setTimeout(() => W(!1), 180 * 1e3)),
							]),
							y.$Bfb.clearInterval(J),
							this.gb();
					}
					async pay() {
						this.gb(),
							await this.Y.open(this.X.getCheckoutUrl(), { openExternal: !0 }),
							this.N();
						const x = y.$Bfb.setInterval(async () => {
							await this.refreshAuthentication(),
								this.membershipType() !== S.MembershipType.FREE &&
									y.$Bfb.clearInterval(x);
						}, 200);
						(this.N = () => {
							y.$Bfb.clearInterval(x);
						}),
							await Promise.race([
								new Promise((H) => setTimeout(() => H(!1), 3 * 60 * 1e3)),
							]),
							y.$Bfb.clearInterval(x),
							this.gb();
					}
					getAuthIdFromToken(x) {
						try {
							return (0, m.$bf)(x).sub;
						} catch {
							return;
						}
					}
					async signup() {
						await this.login("signup");
					}
					async settings() {
						await this.Y.open(this.X.getSettingsUrl(), { openExternal: !0 });
					}
					async refreshAuthentication() {
						(await this.getAccessToken()) || (await this.refreshAccessToken()),
							await this.refreshMembershipType();
					}
					isAuthenticated() {
						const x = this.t(),
							H = this.s();
						return !!(x && H);
					}
					async getAuthenticationHeader() {
						const x = await this.getAccessToken();
						return x ? { Authorization: `Bearer ${x}` } : {};
					}
					async getAccessToken() {
						const x = this.t();
						if (x === void 0) return;
						const H = new Date(),
							q = (0, m.$bf)(x),
							V = new Date(q.exp * 1e3);
						if (V.getTime() < H.getTime() + O)
							return await this.refreshAccessToken(), this.t();
						{
							const G = new Date(V.getTime() - O);
							let K;
							K && clearTimeout(K),
								(K = setTimeout(
									() => {
										this.refreshAccessToken();
									},
									Math.max(G.getTime() - H.getTime(), 0),
								));
						}
						return x;
					}
					setCommonHeaders(x) {
						(0, S.$rJ)({
							req: x,
							machineId: this.ab.machineId,
							macMachineId: this.ab.macMachineId,
							base64Fn: (H) => (0, m.$cf)(m.$Te.wrap(H), !1, !0),
							cursorVersion: this.eb.version,
							privacyMode: this.reactivePrivacyMode(),
						});
					}
				};
				(e.$H6b = U),
					(e.$H6b = U =
						Ne(
							[
								j(0, d.$lq),
								j(1, o.$r8),
								j(2, h.$0zb),
								j(3, r.$i6b),
								j(4, E.$7rb),
								j(5, i.$2rb),
								j(6, u.$ik),
								j(7, a.$km),
								j(8, f.$Ep),
								j(9, t.$Li),
								j(10, P.$o6b),
								j(11, v.$Bk),
							],
							U,
						)),
					(0, w.$lK)(e.$x6b, U, w.InstantiationType.Delayed);
				class z extends s.$3X {
					constructor() {
						super({
							id: "cursorAuth.triggerTokenRefresh",
							title: {
								value: "Trigger Token Refresh",
								original: "Trigger Token Refresh",
							},
							f1: !0,
						});
					}
					run(x, H = !0) {
						x.get(e.$x6b).refreshAccessToken(H);
					}
				}
				(0, s.$4X)(z);
			},
		),
		define(
			de[3639],
			he([
				1, 0, 20, 3, 137, 6, 45, 25, 47, 367, 62, 646, 67, 619, 18, 56, 356,
				232, 285, 341, 5, 477, 22, 17, 40, 78, 54, 134, 23, 42,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ifd = void 0);
				const L = [P.Schemas.file, P.Schemas.untitled, P.Schemas.vscodeRemote];
				var D;
				(function (H) {
					(H.StopTrackingModelForLargeChange =
						"stopTrackingModelForLargeChange"),
						(H.StopTrackingModelForLargeModel =
							"stopTrackingModelForLargeModel"),
						(H.UpdatedSettings = "updatedSettings"),
						(H.Ok = "ok");
				})(D || (D = {}));
				const M = 256e3,
					N = 1e6,
					A = 1e6;
				async function R(H, q) {
					return await Promise.race([
						H,
						new Promise((V) => setTimeout(() => V(void 0), q)),
					]);
				}
				const O = "<|SECRET_TEXT_OMITTED|>";
				class B extends i.$1c {
					getSessionId() {
						return this.c;
					}
					getChangeHistoryByRelativePath(q, V) {
						const G = this.changeHistoryByRelativePath[q];
						if (G === void 0) return;
						const K = G[V];
						if (K !== void 0) return K;
					}
					constructor(q, V, G, K, J, W, X) {
						super(),
							(this.g = q),
							(this.h = V),
							(this.j = G),
							(this.m = K),
							(this.n = J),
							(this.q = W),
							(this.s = X),
							(this.shouldExit = !1),
							(this.c = (0, m.$9g)()),
							(this.changeHistoryByRelativePath = {}),
							(this.sessionEvents = []),
							(this.monotonicallyIncreasingChangeCounter = 0),
							(this.runningPayloadSizeInBytes = 0),
							(this.lastPerformanceNowTimestamp = 0),
							(this.f = void 0),
							(this.u = !1),
							(this.w = !1),
							(this.modelsTooBig = new Set());
					}
					registerCppTelemProvider(q) {
						this.f = q;
					}
					dispose() {
						super.dispose(),
							(this.u = !0),
							(this.sessionEvents = []),
							(this.changeHistoryByRelativePath = {});
					}
					get flushing() {
						return this.w;
					}
					isCopyEventWithMaybeSecretText(q) {
						if (q.event.case !== "copyEvent") return !1;
						const V = q.event.value.clipboardContents;
						return !(V.length > 1e3 || V.length <= 3);
					}
					isDefinitelySecretText(q) {
						return q.clipboardContents.startsWith("sk-");
					}
					async secretTextIndices(q) {
						return (
							await this.m.tokenizeTexts(
								q.map((G) => G.clipboardContents.slice(0, 1e3)),
							)
						)
							.map((G, K) => {
								if (q[K].clipboardContents.length * 0.5 < G.length) return K;
							})
							.filter((G) => G !== void 0);
					}
					async removeSecretsInCopyEventsByMutation(q) {
						try {
							const V = q
								.filter((K) => this.isCopyEventWithMaybeSecretText(K))
								.map((K) => K.event.value);
							V.filter((K) => this.isDefinitelySecretText(K)).map(
								(K) => (K.clipboardContents = O),
							);
							const G = V.filter((K) => !this.isDefinitelySecretText(K));
							G.length > 0 &&
								(await this.secretTextIndices(G)).forEach(
									(J) => (G[J].clipboardContents = O),
								);
						} catch {}
					}
					y(q, ...V) {}
					async flush(q) {
						if (!this.w && !this.u) {
							this.lastPerformanceNowTimestamp = q;
							try {
								this.w = !0;
								for (const V in this.changeHistoryByRelativePath) {
									if (this.u) return;
									for (const G in this.changeHistoryByRelativePath[V]) {
										if (this.u) return;
										const K = this.getChangeHistoryByRelativePath(V, G);
										if (K === void 0) continue;
										const {
											startingModelValue: J,
											startingModelVersion: W,
											changes: X,
											modelUuid: Y,
											modelChangesMayBeOutOfOrder: ie,
											uri: ne,
										} = K;
										if (
											!(
												X.length === 0 &&
												this.sessionEvents.length === 0 &&
												J === void 0
											)
										)
											try {
												(K.changes = []), (K.startingModelValue = void 0);
												const ee = this.sessionEvents;
												(this.sessionEvents = []),
													(this.runningPayloadSizeInBytes = 0),
													this.y("Removing secrets..."),
													await this.removeSecretsInCopyEventsByMutation(ee),
													this.y("Done removing secrets..."),
													K.shouldBeCleanedUpAfterNextSend &&
														this.clearModel({ modelId: V, relativePath: G }),
													this.y("Cpp Telem ID", this.getSessionId());
												let _ = 0;
												for (
													;
													this.f === void 0 &&
													(await new Promise((te) => setTimeout(te, 1e3)),
													_++,
													!(_ > 60));
												);
												this.y("Appending cpp to exthost..."),
													await this.f?.appendCppTelem({
														sessionId: this.getSessionId(),
														modelUuid: Y,
														startingModelValue: J,
														startingModelVersion: W,
														relativePath: G,
														timeOrigin: performance.timeOrigin,
														modelChangesMayBeOutOfOrder: ie,
														clientVersion: this.g.version,
														clientCommit: this.g.commit,
														privacyModeStatus: this.z(),
														changes: X,
														sessionEvents: ee,
														uri: ne,
														events: [],
													});
											} catch (ee) {
												this.y("Error appending cpp to exthost", ee);
											}
									}
								}
								if (this.sessionEvents.length > 0) {
									const V = this.sessionEvents;
									(this.sessionEvents = []),
										(this.runningPayloadSizeInBytes = 0),
										await this.removeSecretsInCopyEventsByMutation(V),
										await this.f?.appendCppTelem({
											sessionId: this.getSessionId(),
											modelUuid: "",
											startingModelValue: void 0,
											startingModelVersion: void 0,
											relativePath: "",
											timeOrigin: performance.timeOrigin,
											modelChangesMayBeOutOfOrder: !1,
											clientVersion: this.g.version,
											clientCommit: this.g.commit,
											privacyModeStatus: this.z(),
											changes: [],
											sessionEvents: V,
											uri: "",
											events: [],
										});
								}
							} finally {
								this.w = !1;
							}
						}
					}
					z() {
						const q = this.q.reactivePrivacyMode();
						return q === !0
							? r.EditHistoryAppendChangesRequest_PrivacyModeStatus
									.PRIVACY_ENABLED
							: q === !1
								? r.EditHistoryAppendChangesRequest_PrivacyModeStatus
										.EXPLICIT_NO_PRIVACY
								: q === void 0
									? r.EditHistoryAppendChangesRequest_PrivacyModeStatus
											.IMPLICIT_NO_PRIVACY
									: r.EditHistoryAppendChangesRequest_PrivacyModeStatus
											.UNSPECIFIED;
					}
					clearModelContents({ modelId: q, relativePath: V }) {
						const G = this.getChangeHistoryByRelativePath(q, V);
						G !== void 0 && (G.startingModelValue = void 0);
					}
					clearModel({ modelId: q, relativePath: V }) {
						const G = this.changeHistoryByRelativePath[q];
						G !== void 0 &&
							(delete G[V],
							Object.keys(G).length === 0 &&
								delete this.changeHistoryByRelativePath[q]);
					}
					totalChanges() {
						let q = 0;
						for (const V in this.changeHistoryByRelativePath)
							for (const G in this.changeHistoryByRelativePath[V]) {
								const K = this.getChangeHistoryByRelativePath(V, G);
								K !== void 0 && (q += K.changes.length);
							}
						return (q += this.sessionEvents.length), q;
					}
					totalChangesOrSessionEventsEarlyExitIfTooBig(q) {
						let V = 0;
						for (const G in this.changeHistoryByRelativePath)
							for (const K in this.changeHistoryByRelativePath[G]) {
								const J = this.getChangeHistoryByRelativePath(G, K);
								if (J !== void 0 && ((V += J.changes.length), V > q)) return V;
							}
						return (V += this.sessionEvents.length), V;
					}
					async processFinalModelHash({
						hash: q,
						relativePath: V,
						modelId: G,
						modelVersion: K,
						performanceNowTimestamp: J,
						modelIsAttachedToEditor: W,
					}) {
						const X = this.getChangeHistoryByRelativePath(G, V);
						X !== void 0 &&
							(X.changes.push({
								text: "",
								range: {
									startColumn: 1,
									startLineNumber: 1,
									endColumn: 1,
									endLineNumber: 1,
								},
								finalModelHash: q,
								modelIsAttachedToEditor: W,
								modelVersionImmediatelyAfterThisChange: K,
								performanceNowTimestamp: J,
								modelIsAttachedToTheActiveEditor: !1,
								modelVersionAtMetadataRetrievalTime: K,
								cursorSelections: [],
							}),
							(X.shouldBeCleanedUpAfterNextSend = !0));
					}
					ensureModelExistsHelper({
						modelId: q,
						relativePath: V,
						model: G,
						onlyIfSmallEnough: K,
					}) {
						let J = (() => {
							const W = this.changeHistoryByRelativePath[q];
							if (W !== void 0) return W;
							{
								const X = {};
								return (this.changeHistoryByRelativePath[q] = X), X;
							}
						})();
						if (J[V] === void 0) {
							const W = F(G);
							if (K && W) {
								this.modelsTooBig.add(q);
								return;
							}
							J[V] = {
								startingModelValue: W || x(G) ? void 0 : G.getValue(),
								startingModelVersion: G.getVersionId(),
								changes: [],
								modelUuid: (0, m.$9g)(),
								shouldBeCleanedUpAfterNextSend: !1,
								totalChangeEventsCounterMonotonicallyIncreasing: 0,
								modelChangesMayBeOutOfOrder: !1,
								consistencyCounter: void 0,
								uri: G.uri.toString(),
							};
						}
					}
					ensureModelExists({ modelId: q, relativePath: V, model: G }) {
						return this.ensureModelExistsHelper({
							modelId: q,
							relativePath: V,
							model: G,
							onlyIfSmallEnough: !1,
						});
					}
					ensureModelExistsUnlessTooBig({
						modelId: q,
						relativePath: V,
						model: G,
					}) {
						return this.ensureModelExistsHelper({
							modelId: q,
							relativePath: V,
							model: G,
							onlyIfSmallEnough: !0,
						});
					}
					notifyOnDevModelStoppedTracking(q, V) {}
					nukeAndExit(q) {
						this.shouldExit = !0;
						for (const V in this.changeHistoryByRelativePath)
							delete this.changeHistoryByRelativePath[V];
						(this.sessionEvents = []),
							this.j.increment({
								stat: "cppclient.telem.somethingBadFlushedEverythingForever",
								tags: { from: q },
							});
					}
					async processModelChange({
						changeEvent: q,
						model: V,
						modelIsAttachedToEditor: G,
						modelVersionAtMetadataRetrievalTime: K,
						relativePath: J,
						modelIsAttachedToTheActiveEditor: W,
						modelId: X,
						consistencyCounter: Y,
						cursorSelections: ie,
						performanceNowTimestamp: ne,
					}) {
						if (q.changes.length === 0) return D.Ok;
						if (this.totalChangesOrSessionEventsEarlyExitIfTooBig(2e3) > 2e3)
							return (
								this.nukeAndExit("processModelChange-toobig"), D.UpdatedSettings
							);
						if (q.changes.some((Z) => Z.text.length > 5e4))
							return D.StopTrackingModelForLargeChange;
						const ee = this.totalChanges();
						this.ensureModelExistsUnlessTooBig({
							modelId: X,
							model: V,
							relativePath: J,
						});
						const _ = this.getChangeHistoryByRelativePath(X, J);
						if (_ === void 0) return D.StopTrackingModelForLargeModel;
						_.consistencyCounter === void 0 ||
							(_.consistencyCounter + 1 !== Y &&
								(_.modelChangesMayBeOutOfOrder = !0)),
							(_.consistencyCounter = Y);
						const te = [...q.changes].sort((Z, se) =>
							Z.range.startLineNumber === se.range.startLineNumber
								? se.range.startColumn - Z.range.startColumn
								: se.range.startLineNumber - Z.range.startLineNumber,
						);
						for (const Z of te)
							_.changes.push({
								text: Z.text,
								performanceNowTimestamp: ne,
								range: Z.range,
								modelIsAttachedToEditor: G,
								modelVersionAtMetadataRetrievalTime: K,
								modelIsAttachedToTheActiveEditor: W,
								cursorSelections: ie,
							}),
								(this.runningPayloadSizeInBytes += new r.$Qv(
									_.changes.at(_.changes.length - 1),
								).toBinary().byteLength);
						_.totalChangeEventsCounterMonotonicallyIncreasing++,
							this.monotonicallyIncreasingChangeCounter++;
						const Q = _.changes.at(_.changes.length - 1);
						return (
							Q !== void 0 &&
								((Q.isRedoing = q.isRedoing),
								(Q.isUndoing = q.isUndoing),
								(Q.modelVersionImmediatelyAfterThisChange = q.versionId),
								_.totalChangeEventsCounterMonotonicallyIncreasing % 500 === 0 &&
									(Q.finalModelHash = (0, a.$vqb)(V.getValue(), 0))),
							(this.monotonicallyIncreasingChangeCounter % 200 === 0 ||
								ee > 1e3 ||
								this.lastPerformanceNowTimestamp + 10 * 6e4 < ne ||
								this.runningPayloadSizeInBytes > M) &&
								(await this.flush(ne)),
							D.Ok
						);
					}
					async processCppTelemEvent(q, V, G) {
						try {
							if (this.totalChangesOrSessionEventsEarlyExitIfTooBig(2e3) > 2e3)
								return (
									this.nukeAndExit("processCppTelemEvent-toobig"),
									"updatedSettings"
								);
							let K;
							switch (q.case) {
								case "acceptCpp":
								case "rejectCpp":
								case "acceptCppPartial":
								case "suggestCpp":
								case "cppTrigger":
								case "finishedCppGeneration":
								case "debouncedCursorPosition":
								case "editorChanged":
								case "linterError":
								case "quickActionsChange":
								case "quickActionFired":
								case "cmdKEvent":
								case "modelOpened":
								case "scrollEvent":
								case "rejectCursorPredictionEvent":
								case "acceptCursorPredictionEvent":
								case "suggestCursorPredictionEvent":
								case "bugBotLinterEvent":
								case "manualTrigger": {
									const J = q.model.id,
										W = this.h.asRelativePath(q.model.uri);
									this.ensureModelExists({
										model: q.model,
										modelId: J,
										relativePath: W,
									});
									const X = this.getChangeHistoryByRelativePath(J, W);
									if (X === void 0) return "ok";
									const Y = {
										modelUuid: X.modelUuid,
										modelVersion: q.modelVersion,
										relativePath: W,
										modelId: J,
									};
									switch (q.case) {
										case "acceptCpp": {
											(K = {
												case: "acceptEvent",
												value: {
													cppSuggestion: q.currentlyShownCppSuggestion,
													pointInTimeModel: Y,
												},
											}),
												this.j.increment({ stat: "cppclient.telem.accepted" });
											break;
										}
										case "rejectCpp": {
											(K = {
												case: "rejectEvent",
												value: {
													cppSuggestion: q.currentlyShownCppSuggestion,
													pointInTimeModel: Y,
												},
											}),
												this.j.increment({ stat: "cppclient.telem.rejected" });
											break;
										}
										case "acceptCppPartial": {
											K = {
												case: "partialAcceptEvent",
												value: {
													cppSuggestion: q.currentlyShownCppSuggestion,
													edit: {
														text: q.edit.text ?? "",
														range: q.edit.range,
													},
													pointInTimeModel: Y,
												},
											};
											break;
										}
										case "suggestCpp": {
											K = {
												case: "suggestEvent",
												value: {
													cppSuggestion: q.currentlyShownCppSuggestion,
													pointInTimeModel: Y,
													recoverableCppData: q.recoverableData,
												},
											};
											break;
										}
										case "finishedCppGeneration": {
											K = {
												case: "finishedCppGenerationEvent",
												value: {
													pointInTimeModel: Y,
													recoverableCppData: q.recoverableData,
												},
											};
											break;
										}
										case "cppTrigger": {
											let ie;
											switch (q.source) {
												case T.CppSource.Unknown:
													ie = r.CppSource.UNSPECIFIED;
													break;
												case T.CppSource.LineChange:
													ie = r.CppSource.LINE_CHANGE;
													break;
												case T.CppSource.Typing:
													ie = r.CppSource.TYPING;
													break;
												case T.CppSource.OptionHold:
													ie = r.CppSource.OPTION_HOLD;
													break;
												case T.CppSource.LinterErrors:
													ie = r.CppSource.LINTER_ERRORS;
													break;
												case T.CppSource.ParameterHints:
													ie = r.CppSource.PARAMETER_HINTS;
													break;
												case T.CppSource.CursorPrediction:
													ie = r.CppSource.CURSOR_PREDICTION;
													break;
												case T.CppSource.ManualTrigger:
													ie = r.CppSource.MANUAL_TRIGGER;
													break;
												case T.CppSource.EditorChange:
													ie = r.CppSource.EDITOR_CHANGE;
													break;
											}
											K = {
												case: "cppTriggerEvent",
												value: {
													generationUuid: q.generationUUID,
													modelVersion: q.modelVersion,
													cursorPosition: q.cursorPosition,
													pointInTimeModel: Y,
													source: ie,
												},
											};
											break;
										}
										case "debouncedCursorPosition": {
											K = {
												case: "debouncedCursorMovementEvent",
												value: {
													cursorPosition: {
														lineNumberOneIndexed: q.position.lineNumber,
														columnOneIndexed: q.position.column,
													},
													pointInTimeModel: Y,
												},
											};
											break;
										}
										case "editorChanged": {
											K = {
												case: "editorChangedEvent",
												value: {
													pointInTimeModel: Y,
													cursorPosition: q.position
														? {
																lineNumberOneIndexed: q.position.lineNumber,
																columnOneIndexed: q.position.column,
															}
														: void 0,
													visibleRanges: q.visibleRanges,
													editorId: q.editorId,
												},
											};
											break;
										}
										case "manualTrigger": {
											(K = {
												case: "manualTriggerEvent",
												value: {
													lineNumberOneIndexed: q.lineNumberOneIndexed,
													columnNumberOneIndexed: q.columnNumberOneIndexed,
													pointInTimeModel: Y,
												},
											}),
												this.j.increment({
													stat: "cppclient.telem.manualTriggered",
												});
											break;
										}
										case "linterError": {
											K = {
												case: "linterErrorEvent",
												value: {
													addedErrors: [],
													removedErrors: [],
													errors: q.errors,
													pointInTimeModel: Y,
												},
											};
											break;
										}
										case "quickActionsChange": {
											K = {
												case: "quickActionEvent",
												value: {
													actions: q.actions,
													added: [],
													removed: [],
													pointInTimeModel: Y,
												},
											};
											break;
										}
										case "quickActionFired": {
											"command" in q
												? (K = {
														case: "quickActionFireEvent",
														value: {
															pointInTimeModel: Y,
															actionIdentifier: {
																case: "quickActionCommand",
																value: q.command,
															},
														},
													})
												: (K = {
														case: "quickActionFireEvent",
														value: {
															pointInTimeModel: Y,
															actionIdentifier: {
																case: "quickActionEvent",
																value: q.action,
															},
														},
													});
											break;
										}
										case "cmdKEvent": {
											K = {
												case: "cmdKEvent",
												value: { pointInTimeModel: Y, ...q.event },
											};
											break;
										}
										case "modelOpened": {
											K = {
												case: "modelOpenedEvent",
												value: { pointInTimeModel: Y },
											};
											break;
										}
										case "scrollEvent": {
											K = {
												case: "scrollEvent",
												value: {
													pointInTimeModel: Y,
													visibleRanges: q.visibleRanges,
													editorId: q.editorId,
												},
											};
											break;
										}
										case "acceptCursorPredictionEvent":
										case "rejectCursorPredictionEvent":
										case "suggestCursorPredictionEvent": {
											K = {
												case: q.case,
												value: {
													pointInTimeModel: Y,
													cursorPrediction: {
														requestId: q.prediction.requestId,
														predictionId:
															q.prediction.monotonicallyIncreasingPredictionId,
														lineNumber: q.prediction.lineNumber,
														source: q.prediction.source,
													},
												},
											};
											break;
										}
										case "bugBotLinterEvent": {
											K = {
												case: "bugBotLinterEvent",
												value: {
													requestId: q.requestId,
													eventType: q.eventType,
													pointInTimeModel: Y,
												},
											};
											break;
										}
										default: {
											const ie = q;
											throw new Error(`Unhandled case: ${ie}`);
										}
									}
									break;
								}
								case "tabClose": {
									const J = this.h.asRelativePath(q.model.uri),
										W = q.model.id;
									K = {
										case: "tabCloseEvent",
										value: {
											pointInTimeModel: {
												modelUuid: this.getChangeHistoryByRelativePath(W, J)
													?.modelUuid,
												modelVersion: q.modelVersion,
												relativePath: J,
												modelId: W,
											},
										},
									};
									break;
								}
								case "modelAdded": {
									const J = this.h.asRelativePath(q.model.uri),
										W = q.model.id;
									K = {
										case: "modelAddedEvent",
										value: {
											pointInTimeModel: {
												modelUuid: this.getChangeHistoryByRelativePath(W, J)
													?.modelUuid,
												modelVersion: q.modelVersion,
												relativePath: J,
												modelId: W,
											},
											fullUri: q.model.uri.toString(),
											uriScheme: q.model.uri.scheme,
											modelId: q.model.id,
											isTooLargeForSyncing: q.model.isTooLargeForSyncing(),
											isTooLargeForTokenization:
												q.model.isTooLargeForTokenization(),
											isTooLargeForHeapOperation:
												q.model.isTooLargeForHeapOperation(),
										},
									};
									break;
								}
								case "stoppedTrackingModelWhenModelTooLarge": {
									const J = q.model.id,
										W = this.h.asRelativePath(q.model.uri),
										X = this.getChangeHistoryByRelativePath(J, W);
									let Y;
									X !== void 0 ? (Y = X.modelUuid) : (Y = (0, m.$9g)()),
										this.clearModelContents({ modelId: J, relativePath: W }),
										(K = {
											case: "stoppedTrackingModelEvent",
											value: {
												modelUuid: Y,
												relativePath: W,
												reason:
													r
														.CppStoppedTrackingModelEvent_StoppedTrackingModelReason
														.FILE_TOO_BIG,
											},
										});
									break;
								}
								case "stoppedTrackingModelWhenChangeTooLarge": {
									const J = q.model.id,
										W = this.h.asRelativePath(q.model.uri),
										X = this.getChangeHistoryByRelativePath(J, W);
									let Y;
									X !== void 0 ? (Y = X.modelUuid) : (Y = (0, m.$9g)()),
										this.clearModel({ modelId: J, relativePath: W }),
										(K = {
											case: "stoppedTrackingModelEvent",
											value: {
												modelUuid: Y,
												relativePath: W,
												reason:
													r
														.CppStoppedTrackingModelEvent_StoppedTrackingModelReason
														.CHANGE_TOO_BIG,
											},
										});
									break;
								}
								case "clipboardChange": {
									K = {
										case: "copyEvent",
										value: { clipboardContents: q.text },
									};
									break;
								}
								case "chatEvent": {
									K = { case: "chatEvent", value: q.event };
									break;
								}
								case "aiEvent": {
									K = {
										case: "aiEvent",
										value: {
											requestId: q.requestId,
											requestType: q.startOrEnd,
										},
									};
									break;
								}
								case "cmdKEndEvent": {
									K = {
										case: "cmdKEvent",
										value: {
											requestId: q.requestId,
											eventType: { case: "endOfGeneration", value: {} },
										},
									};
									break;
								}
								case "editorClose": {
									K = {
										case: "editorCloseEvent",
										value: { editorId: q.editorId },
									};
									break;
								}
								case "bugBotEvent": {
									K = { case: "bugBotEvent", value: q.event };
									break;
								}
								case "anythingQuickAccessSelectionEvent": {
									const J = await Promise.all(
										q.items.map(async (W) => {
											if (W.type === "separator")
												return {
													item: { case: "separator", value: W.separatorLabel },
												};
											const X = {
												item: {
													case: "resource",
													value: { uri: W.resource.toString(), range: W.range },
												},
											};
											let Y;
											try {
												Y =
													W.textModelPromise !== void 0
														? await R(W.textModelPromise, 100)
														: void 0;
											} catch {
												return X;
											}
											if (Y === void 0) return X;
											const ie = Y.object.textEditorModel;
											this.ensureModelExists({
												model: ie,
												modelId: ie.id,
												relativePath: this.h.asRelativePath(ie.uri),
											});
											const ne = this.h.asRelativePath(ie.uri),
												ee = this.getChangeHistoryByRelativePath(ie.id, ne);
											if (ee === void 0) return X;
											const _ = {
												modelUuid: ee.modelUuid,
												modelVersion: ie.getVersionId(),
												relativePath: ne,
												modelId: ie.id,
											};
											return {
												item: {
													case: "resource",
													value: {
														uri: W.resource.toString(),
														range: W.range,
														pointInTimeModel: _,
													},
												},
											};
										}),
									);
									K = {
										case: "anythingQuickAccessSelectionEvent",
										value: {
											query: q.query,
											items: J,
											selectedIndices: q.selectedIndices,
										},
									};
									break;
								}
								default: {
									const J = q;
									throw new Error(`Unhandled case: ${J}`);
								}
							}
							if (K) {
								const J = {
										event: K,
										performanceNowTimestamp: V,
										performanceTimeOrigin: performance.timeOrigin,
									},
									W = new r.$$w(J).toBinary().byteLength;
								if (W > N) return "ok";
								this.sessionEvents.push(J),
									this.monotonicallyIncreasingChangeCounter++,
									(this.runningPayloadSizeInBytes += W);
							}
							return (
								(this.monotonicallyIncreasingChangeCounter % 200 === 0 ||
									this.lastPerformanceNowTimestamp + 10 * 6e4 < V ||
									this.runningPayloadSizeInBytes > M) &&
									(await this.flush(V)),
								"ok"
							);
						} finally {
							G.dispose();
						}
					}
				}
				let U = class extends i.$1c {
					registerCppTelemProvider(q) {
						this.c.registerCppTelemProvider(q);
					}
					getCurrentSessionId() {
						return this.c.getSessionId();
					}
					async flushAll() {
						this.c.flushing
							? await new Promise((q) => setTimeout(q, 1e3))
							: await this.c.flush(performance.now());
					}
					n(q = 60 * 1e3) {
						for (const V of Object.keys(this.m)) {
							const G = this.m[V];
							G && (this.m[V] = G.filter((K) => performance.now() - K < q));
						}
					}
					constructor(q, V, G, K, J, W, X, Y, ie, ne, ee, _, te, Q) {
						super(),
							(this.q = q),
							(this.s = K),
							(this.u = J),
							(this.w = W),
							(this.y = X),
							(this.z = Y),
							(this.C = ie),
							(this.F = ne),
							(this.G = ee),
							(this.H = _),
							(this.I = te),
							(this.J = Q),
							(this.f = !1),
							(this.g = this.D(new E.$re())),
							(this.onDidChangeCppSessionId = this.g.event),
							(this.h = this.D(new E.$re())),
							(this.onDidChangeCppTelemEnabled = this.h.event),
							(this.m = {}),
							(this.L = new r.$ex({ on: !0 })),
							(this.U = new Set()),
							(this.avgTimes = []),
							(this.lastModelChangeTimestamp = 0),
							(this.SHOULD_MEASURE_MODEL_CHANGE_PERF = !1),
							(this.W = new Map()),
							(this.P = 0),
							(this.c = new B(
								this.u,
								this.s,
								this.y,
								this.F,
								this.G,
								this.H,
								this.I,
							)),
							this.g.fire(this.c.getSessionId());
						const Z = V.createInstance(f.$q6b, { service: b.$q0 });
						this.j = Z;
					}
					get M() {
						return this.H.reactivePrivacyMode();
					}
					get N() {
						return this.c.shouldExit;
					}
					O() {
						return this.z.shadowWindowForWorkspaceId
							? !1
							: this.L.on === !0 && this.M === !1;
					}
					async pollTelemEnabled() {
						const q = await (await this.j.get()).cppEditHistoryStatus(
							new r.$dx({}),
						);
						(this.L = q), this.S(this.O()), this.X();
					}
					Q() {
						(this.c.shouldExit = !1),
							this.c.dispose(),
							(this.c = new B(
								this.u,
								this.s,
								this.y,
								this.F,
								this.G,
								this.H,
								this.I,
							)),
							this.g.fire(this.c.getSessionId());
					}
					async R() {
						if (Date.now() - this.P < 5 * 60 * 1e3) return;
						this.X();
						const q = this.O();
						q === !0
							? (q !== this.f || this.N === !0) && (this.S(q), this.Q())
							: this.S(!1);
					}
					S(q) {
						const V = this.f;
						(this.f = q), V !== q && this.h.fire(this.f);
					}
					async onStartupChangeWatcher() {
						try {
							this.pollTelemEnabled(),
								this.D(
									this.w.onModelAdded((q) => {
										if (
											(this.R(),
											this.recordCppSessionEvent({
												case: "modelAdded",
												model: q,
												modelVersion: q.getVersionId(),
											}),
											this.D(
												q.onWillDispose(() => {
													this.recordCppSessionEvent({
														case: "tabClose",
														model: q,
														modelVersion: q.getVersionId(),
													});
												}),
											),
											this.setModelTooBig(q.id, !1),
											q && L.includes(q.uri.scheme))
										) {
											if (
												q.isTooLargeForTokenization() ||
												q.isTooLargeForSyncing() ||
												x(q)
											)
												return;
											if (!this.U.has(q.id)) {
												this.U.add(q.id);
												let V = !1,
													G = (J) => {
														(V = J),
															this.setModelTooBig(q.id, J),
															V &&
																this.recordCppSessionEvent({
																	case: "stoppedTrackingModelWhenModelTooLarge",
																	model: q,
																});
													},
													K = this.D(
														q.onDidChangeContent((J) => {
															if (V === !0) {
																K.dispose(), this.U.delete(q.id);
																return;
															}
															if (
																q.isTooLargeForTokenization() ||
																q.isTooLargeForSyncing()
															) {
																G(!0);
																return;
															}
															if (
																this.SHOULD_MEASURE_MODEL_CHANGE_PERF === !0
															) {
																const W =
																	Date.now() - this.lastModelChangeTimestamp;
																this.lastModelChangeTimestamp !== 0 &&
																	W < 500 &&
																	this.avgTimes.push(W),
																	(this.lastModelChangeTimestamp = Date.now()),
																	this.avgTimes.length > 200 &&
																		this.avgTimes.shift(),
																	console.log(
																		"avgtime",
																		this.avgTimes.reduce((X, Y) => X + Y, 0) /
																			this.avgTimes.length,
																	);
															}
															if (!z(J))
																try {
																	this.processModelChangeTelemetry(J, q)
																		.then(
																			({ modelTooBig: W, changeTooBig: X }) => {
																				if ((G(V || W), X)) {
																					if (
																						(this.n(),
																						(this.m[q.id]?.length ?? 0) >= 2)
																					) {
																						G(!0), delete this.m[q.id];
																						return;
																					}
																					this.m[q.id] === void 0
																						? (this.m[q.id] = [
																								performance.now(),
																							])
																						: this.m[q.id]?.push(
																								performance.now(),
																							),
																						this.c.processCppTelemEvent(
																							{
																								case: "stoppedTrackingModelWhenChangeTooLarge",
																								model: q,
																							},
																							performance.now(),
																							i.$1c.None,
																						);
																				}
																			},
																		)
																		.catch((W) => {
																			this.c.nukeAndExit(
																				"processmodelchange-error",
																			),
																				this.S(!1),
																				this.X();
																		});
																} catch {
																	this.c.nukeAndExit(
																		"processmodelchange-supererror",
																	),
																		this.S(!1),
																		this.X();
																}
														}),
													);
												this.D(
													q.onWillDispose(() => {
														K.dispose(),
															this.U.delete(q.id),
															!V && this.processModelWillEnd(q);
													}),
												);
											}
										}
									}),
								);
						} catch (q) {
							console.error("Cpp: error", q);
						}
					}
					async processModelChangeTelemetry(q, V) {
						const G = V.isAttachedToEditor();
						let K = !1;
						const J = V.getVersionId();
						let W = [];
						const X = this.C.activeTextEditorControl;
						if (X !== void 0 && (0, g.$0sb)(X) && X.getModel()?.id === V.id) {
							K = !0;
							const ee = X.getSelections();
							ee !== null &&
								(W = ee.map((_) => ({
									positionColumn: _.positionColumn,
									positionLineNumber: _.positionLineNumber,
									selectionStartColumn: _.selectionStartColumn,
									selectionStartLineNumber: _.selectionStartLineNumber,
								})));
						}
						let Y = this.W.get(V.id);
						Y === void 0 && (Y = 1), this.W.set(V.id, Y + 1);
						const ie = performance.now();
						if ((await new Promise((ne) => setTimeout(ne, 0)), this.Y(V)))
							return { modelTooBig: !0, changeTooBig: !1 };
						if (this.canWeTrackTelem()) {
							const ne = await this.c.processModelChange({
								changeEvent: q,
								model: V,
								relativePath: this.s.asRelativePath(V.uri),
								modelId: V.id,
								modelIsAttachedToEditor: G,
								cursorSelections: W,
								modelIsAttachedToTheActiveEditor: K,
								modelVersionAtMetadataRetrievalTime: J,
								consistencyCounter: Y,
								performanceNowTimestamp: ie,
							});
							switch (ne) {
								case D.StopTrackingModelForLargeChange:
									return this.X(), { modelTooBig: !1, changeTooBig: !0 };
								case D.StopTrackingModelForLargeModel:
									return (
										this.X(),
										this.c.modelsTooBig.add(V.id),
										this.y.increment({
											stat: "cppclient.telem.somethingWeirdInTtracker",
										}),
										{ modelTooBig: !0, changeTooBig: !1 }
									);
								case D.UpdatedSettings: {
									this.X();
									break;
								}
								case D.Ok:
									return { modelTooBig: !1, changeTooBig: !1 };
								default: {
									const ee = ne;
									throw new Error(`Unhandled case: ${ee}`);
								}
							}
						}
						return { modelTooBig: !1, changeTooBig: !1 };
					}
					X() {
						this.P = Date.now();
					}
					Y(q) {
						return q.isDisposed() ? !0 : this.isModelTooBigFullCheck(q);
					}
					canWeTrackTelem() {
						return (
							this.f === !0 &&
							this.c.shouldExit === !1 &&
							this.H.reactivePrivacyMode() !== !0
						);
					}
					processModelWillEnd(q) {
						const V = performance.now();
						if (this.canWeTrackTelem()) {
							const G = (0, a.$vqb)(q.getValue(), 0);
							this.c
								.processFinalModelHash({
									relativePath: this.s.asRelativePath(q.uri),
									modelId: q.id,
									hash: G,
									modelVersion: q.getVersionId(),
									modelIsAttachedToEditor: q.isAttachedToEditor(),
									performanceNowTimestamp: V,
								})
								.catch((K) => {});
						}
					}
					recordCppSessionEvent(q, V = void 0) {
						const G = performance.now();
						this.recordCppSessionEventWithPerfProvided(q, G, V);
					}
					recordCppSessionEventWithPerfProvided(q, V, G = void 0) {
						const K = G ?? i.$1c.None;
						Promise.resolve().then(() => {
							const J = new i.$Zc();
							J.add(K);
							try {
								this.canWeTrackTelem() &&
									(J.deleteAndLeak(K),
									this.c
										.processCppTelemEvent(q, V, K)
										.then((W) => {
											W === "updatedSettings" && this.X();
										})
										.catch((W) => {}));
							} catch {
							} finally {
								J.dispose();
							}
						});
					}
					isModelTooBig(q) {
						return this.c.modelsTooBig.has(q);
					}
					markModelAsTooBig(q) {
						this.c.modelsTooBig.add(q);
					}
					setModelTooBig(q, V) {
						V ? this.c.modelsTooBig.add(q) : this.c.modelsTooBig.delete(q);
					}
					isModelTooBigFullCheck(q) {
						return this.isModelTooBig(q.id)
							? !0
							: F(q)
								? (this.markModelAsTooBig(q.id), !0)
								: !1;
					}
				};
				(e.$ifd = U),
					(e.$ifd = U =
						Ne(
							[
								j(0, C.$0zb),
								j(1, s.$Li),
								j(2, l.$i6b),
								j(3, d.$Vi),
								j(4, u.$Bk),
								j(5, h.$QO),
								j(6, c.$wcc),
								j(7, S.$r8),
								j(8, n.$IY),
								j(9, p.$zIb),
								j(10, v.$4N),
								j(11, o.$x6b),
								j(12, y.$ll),
								j(13, k.$MO),
							],
							U,
						));
				function z(H) {
					return (
						H.changes.length === 1 &&
						$.$iL.lift(H.changes[0].range).isEmpty() &&
						H.changes[0].text.length === 0
					);
				}
				function F(H) {
					return (
						H.isTooLargeForTokenization() ||
						H.isTooLargeForSyncing() ||
						H.getValueLength() > A
					);
				}
				function x(H) {
					if (!L.includes(H.uri.scheme)) return !1;
					const q = (0, I.$sc)(H.uri.fsPath).toLowerCase();
					return q.startsWith(".env") ||
						q.endsWith(".env") ||
						q.endsWith(".pem")
						? !0
						: [
								"id_rsa",
								"id_ed25519",
								"id_ecdsa",
								"id_dsa",
								"id_ecdsa_sk",
								"id_ed25519_sk",
								"id_rsa_sk",
								"id_dsa_sk",
								"id_ecdsa_sk",
								"id_ed25519_sk",
								"known_hosts",
								"password",
								"passphrase",
								"secret",
								"key",
								"token",
								"credentials",
								"private_key",
								"public_key",
							].some((G) => q === G || q.endsWith("." + G) || q === G + ".txt");
				}
				(0, t.$lK)(w.$hfc, U, t.InstantiationType.Delayed);
			},
		),
		define(
			de[3640],
			he([1, 0, 1467, 1466, 75, 3, 20, 5, 45, 216, 137, 285, 232]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$izc = void 0);
				let c = class extends E.$1c {
					constructor(p, o, f) {
						super(),
							(this.g = p),
							(this.h = o),
							(this.j = f),
							(this.b = []),
							(this.f = 6e4),
							(this.a = this.j.createInstance(a.$q6b, { service: t.$hbb })),
							this.a.createServer(),
							(this.c = w.$Bfb.setInterval(() => this.flushAll(), this.f)),
							this.D({
								dispose: () => {
									this.c && w.$Bfb.clearInterval(this.c);
								},
							});
					}
					trackEvent(p, o) {
						this.g.reactivePrivacyMode() !== !0 &&
							(this.h.applicationUserPersistentStorage
								.internalAnalyticsDebugMode && console.log("[track]", p, o),
							(0, r.$LOb)({ category: "event", message: p, data: { ...o } }),
							this.b.push({
								eventName: p,
								eventData: o || {},
								timestamp: BigInt(Date.now()),
							}));
					}
					async flushAll() {
						if (this.b.length === 0) return;
						const p = [...this.b];
						(this.b = []),
							this.h.applicationUserPersistentStorage
								.internalAnalyticsDebugMode &&
								console.log("[track] flushing:", p);
						try {
							await (await this.a.get()).trackEvents({
								events: p.map((f) => ({ ...f, eventData: n(f.eventData) })),
							});
						} catch (o) {
							console.error("Failed to flush analytics events:", o),
								(this.b = [...this.b, ...p]);
						}
					}
				};
				(e.$izc = c),
					(e.$izc = c = Ne([j(0, h.$x6b), j(1, m.$0zb), j(2, d.$Li)], c));
				function n(g) {
					const p = {};
					for (const o in g)
						typeof g[o] == "string"
							? (p[o] = new i.$dbb({
									data: { value: g[o], case: "stringValue" },
								}))
							: typeof g[o] == "number"
								? Number.isInteger(g[o])
									? (p[o] = new i.$dbb({
											data: { value: BigInt(g[o]), case: "intValue" },
										}))
									: (p[o] = new i.$dbb({
											data: { value: g[o], case: "doubleValue" },
										}))
								: typeof g[o] == "boolean"
									? (p[o] = new i.$dbb({
											data: { value: g[o], case: "boolValue" },
										}))
									: (p[o] = new i.$dbb({
											data: {
												value: JSON.stringify(g[o]),
												case: "stringValue",
											},
										}));
					return p;
				}
				(0, C.$lK)(u.$ifc, c, C.InstantiationType.Eager);
			},
		),
		