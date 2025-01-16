define(de[4384], he([1, 0, 3, 8, 153, 1384]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$8Vc = void 0);
			let C = class {
				static {
					this.Id = "terminalChat.enabler";
				}
				constructor(m, r) {
					(this.b = new t.$Zc()),
						(this.a = E.TerminalChatContextKeys.hasChatAgent.bindTo(m)),
						this.b.add(
							r.onDidChangeAgents(() => {
								const u = !!r.getDefaultAgent(w.ChatAgentLocation.Terminal);
								this.a.set(u);
							}),
						);
				}
				dispose() {
					this.a.reset(), this.b.dispose();
				}
			};
			(e.$8Vc = C), (e.$8Vc = C = Ne([j(0, i.$6j), j(1, w.$c3)], C));
		}),
		define(
			de[4385],
			he([1, 0, 378, 4382, 867, 412, 4381, 55, 4384, 4383]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, t.$qLc)(w.$4Vc.ID, w.$4Vc, !1),
					E.$Whc.register(new i.$5Vc()),
					E.$Whc.register(new C.$6Vc()),
					(0, d.$s6)(m.$8Vc.Id, m.$8Vc, d.WorkbenchPhase.AfterRestored);
			},
		),
		define(
			de[4386],
			he([1, 0, 4, 11, 10, 8, 363, 378, 2004, 808, 1144, 1767]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, d.$qLc)(m.$2Vc.ID, m.$2Vc, !0);
				var u;
				(function (a) {
					a.ToggleStickyScroll = "workbench.action.terminal.toggleStickyScroll";
				})(u || (u = {})),
					(0, C.$EUc)({
						id: u.ToggleStickyScroll,
						title: (0, t.localize2)(10569, "Toggle Sticky Scroll"),
						toggled: {
							condition: E.$Kj.equals(
								`config.${r.TerminalStickyScrollSettingId.Enabled}`,
								!0,
							),
							title: (0, t.localize)(10567, null),
							mnemonicTitle: (0, t.localize)(10568, null),
						},
						run: (a, h) => {
							const c = h.get(w.$gj),
								n = !c.getValue(r.TerminalStickyScrollSettingId.Enabled);
							return c.updateValue(r.TerminalStickyScrollSettingId.Enabled, n);
						},
						menu: [{ id: i.$XX.TerminalStickyScrollContext }],
					});
			},
		),
		define(
			de[4387],
			he([
				1, 0, 4375, 3314, 3331, 1949, 4040, 4041, 4042, 4176, 4385, 3154, 4043,
				4046, 4386, 4044, 3174, 4045, 4376,
			]),
			function (ce, e) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
			},
		),
		define(
			de[4388],
			he([
				1, 0, 4, 6, 3, 119, 157, 154, 25, 21, 78, 109, 10, 20, 959, 53, 1212,
				150, 52, 40, 87, 1834, 174, 384, 349, 34, 5,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ywc = void 0);
				const T = "IWorkbenchExtensionEnablementService";
				let P = class extends w.$1c {
					constructor(D, M, N, A, R, O, B, U, z, F, x, H, q, V, G, K, J) {
						super(),
							(this.g = M),
							(this.h = N),
							(this.j = A),
							(this.m = O),
							(this.n = B),
							(this.q = U),
							(this.s = z),
							(this.t = F),
							(this.u = x),
							(this.w = q),
							(this.y = V),
							(this.z = G),
							(this.C = K),
							(this.b = new i.$re()),
							(this.onEnablementChanged = this.b.event),
							(this.f = this.D(new n.$uwc(D)));
						const W = this.D(
							i.Event.filter(
								R.onDidUninstallExtension,
								(Y) => !Y.error,
							)(({ identifier: Y }) => this.ob(Y)),
						);
						let X = !1;
						this.D((0, w.$Yc)(() => (X = !0))),
							(this.c = this.D(J.createInstance(k))),
							this.c.whenInitialized().then(() => {
								X ||
									(this.D(
										this.c.onDidChangeExtensions(
											({ added: Y, removed: ie, isProfileSwitch: ne }) =>
												this.mb(Y, ie, ne),
										),
									),
									W.dispose());
							}),
							this.D(
								this.g.onDidChangeEnablement(({ extensions: Y, source: ie }) =>
									this.lb(Y, ie),
								),
							),
							this.G &&
								this.t.when(f.LifecyclePhase.Eventually).then(() => {
									this.u.prompt(
										b.Severity.Info,
										(0, t.localize)(12272, null),
										[
											{
												label: (0, t.localize)(12273, null),
												run: () => H.reload({ disableExtensions: !1 }),
											},
										],
										{ sticky: !0, priority: b.NotificationPriority.URGENT },
									);
								});
					}
					get F() {
						return this.h.getWorkbenchState() !== m.WorkbenchState.EMPTY;
					}
					get G() {
						return this.j.disableExtensions === !0;
					}
					getEnablementState(D) {
						return this.N(D, this.c.extensions, this.nb());
					}
					getEnablementStates(D, M = {}) {
						const N = new Map(),
							A = { ...this.nb(), ...M };
						return D.map((R) => this.N(R, D, A, N));
					}
					getDependenciesEnablementStates(D) {
						return (0, d.$eq)(this.c.extensions, D).map((M) => [
							M,
							this.getEnablementState(M),
						]);
					}
					canChangeEnablement(D) {
						try {
							return this.H(D), !0;
						} catch {
							return !1;
						}
					}
					canChangeWorkspaceEnablement(D) {
						if (!this.canChangeEnablement(D)) return !1;
						try {
							return this.J(D), !0;
						} catch {
							return !1;
						}
					}
					H(D, M) {
						if ((0, a.$Kn)(D.manifest))
							throw new Error(
								(0, t.localize)(
									12274,
									null,
									D.manifest.displayName || D.identifier.id,
								),
							);
						if (
							this.q.isEnabled() &&
							this.s.account &&
							(0, a.$Ln)(D.manifest) &&
							D.manifest.contributes.authentication.some(
								(N) => N.id === this.s.account.authenticationProviderId,
							)
						)
							throw new Error(
								(0, t.localize)(
									12275,
									null,
									D.manifest.displayName || D.identifier.id,
								),
							);
						if (this.P(D))
							throw new Error(
								(0, t.localize)(
									12276,
									null,
									D.manifest.displayName || D.identifier.id,
								),
							);
						this.I(D, this.getEnablementState(D), M);
					}
					I(D, M, N) {
						switch (M) {
							case C.EnablementState.DisabledByEnvironment:
								throw new Error(
									(0, t.localize)(
										12277,
										null,
										D.manifest.displayName || D.identifier.id,
									),
								);
							case C.EnablementState.DisabledByVirtualWorkspace:
								throw new Error(
									(0, t.localize)(
										12278,
										null,
										D.manifest.displayName || D.identifier.id,
									),
								);
							case C.EnablementState.DisabledByExtensionKind:
								throw new Error(
									(0, t.localize)(
										12279,
										null,
										D.manifest.displayName || D.identifier.id,
									),
								);
							case C.EnablementState.DisabledByExtensionDependency:
								if (N) break;
								for (const A of (0, d.$eq)(this.c.extensions, D))
									if (!this.isEnabled(A))
										try {
											this.H(A, !0);
										} catch {
											throw new Error(
												(0, t.localize)(
													12280,
													null,
													D.manifest.displayName || D.identifier.id,
													A.manifest.displayName || A.identifier.id,
												),
											);
										}
						}
					}
					J(D) {
						if (!this.F) throw new Error((0, t.localize)(12281, null));
						if ((0, a.$Ln)(D.manifest))
							throw new Error(
								(0, t.localize)(
									12282,
									null,
									D.manifest.displayName || D.identifier.id,
								),
							);
					}
					async setEnablement(D, M) {
						await this.c.whenInitialized(),
							(M === C.EnablementState.EnabledGlobally ||
								M === C.EnablementState.EnabledWorkspace) &&
								D.push(
									...this.L(D, this.c.extensions, M, {
										dependencies: !0,
										pack: !0,
									}),
								);
						const N =
							M === C.EnablementState.DisabledWorkspace ||
							M === C.EnablementState.EnabledWorkspace;
						for (const O of D) N ? this.J(O) : this.H(O);
						const A = [];
						for (const O of D) {
							const B = this.getEnablementState(O);
							if (
								B === C.EnablementState.DisabledByTrustRequirement ||
								(B === C.EnablementState.DisabledByExtensionDependency &&
									this.getDependenciesEnablementStates(O).every(
										([, U]) =>
											this.isEnabledEnablementState(U) ||
											U === C.EnablementState.DisabledByTrustRequirement,
									))
							) {
								const U = await this.z.requestWorkspaceTrust();
								A.push(U ?? !1);
							} else A.push(await this.M(O, M));
						}
						const R = D.filter((O, B) => A[B]);
						return R.length && this.b.fire(R), A;
					}
					L(D, M, N, A, R = []) {
						if (!A.dependencies && !A.pack) return [];
						const O = D.filter((U) => R.indexOf(U) === -1);
						if (!O.length) return [];
						for (const U of O) R.push(U);
						const B = [];
						for (const U of M) {
							if (R.some((F) => (0, d.$7p)(F.identifier, U.identifier)))
								continue;
							const z = this.getEnablementState(U);
							if (
								!this.isEnabledEnablementState(z) &&
								z !== C.EnablementState.DisabledByExtensionKind &&
								D.some(
									(F) =>
										(A.dependencies &&
											F.manifest.extensionDependencies?.some((x) =>
												(0, d.$7p)({ id: x }, U.identifier),
											)) ||
										(A.pack &&
											F.manifest.extensionPack?.some((x) =>
												(0, d.$7p)({ id: x }, U.identifier),
											)),
								)
							) {
								const F = B.findIndex((x) =>
									(0, d.$7p)(x.identifier, U.identifier),
								);
								if (F === -1) B.push(U);
								else
									try {
										this.I(U, z, !0), B.splice(F, 1, U);
									} catch {}
							}
						}
						return B.length && B.push(...this.L(B, M, N, A, R)), B;
					}
					M(D, M) {
						if (this.W(D.identifier) === M) return Promise.resolve(!1);
						switch (M) {
							case C.EnablementState.EnabledGlobally:
								this.Y(D.identifier);
								break;
							case C.EnablementState.DisabledGlobally:
								this.Z(D.identifier);
								break;
							case C.EnablementState.EnabledWorkspace:
								this.$(D.identifier);
								break;
							case C.EnablementState.DisabledWorkspace:
								this.ab(D.identifier);
								break;
						}
						return Promise.resolve(!0);
					}
					isEnabled(D) {
						const M = this.getEnablementState(D);
						return this.isEnabledEnablementState(M);
					}
					isEnabledEnablementState(D) {
						return (
							D === C.EnablementState.EnabledByEnvironment ||
							D === C.EnablementState.EnabledWorkspace ||
							D === C.EnablementState.EnabledGlobally
						);
					}
					isDisabledGlobally(D) {
						return this.X(D.identifier);
					}
					N(D, M, N, A) {
						A = A ?? new Map();
						let R = A.get(D);
						return (
							R !== void 0 ||
								((R = this.W(D.identifier)),
								this.w.isDisabledByBisect(D) || this.O(D)
									? (R = C.EnablementState.DisabledByEnvironment)
									: this.Q(D, N)
										? (R = C.EnablementState.DisabledByVirtualWorkspace)
										: this.isEnabledEnablementState(R) && this.S(D, N)
											? (R = C.EnablementState.DisabledByTrustRequirement)
											: this.R(D)
												? (R = C.EnablementState.DisabledByExtensionKind)
												: this.isEnabledEnablementState(R) && this.U(D, M, N, A)
													? (R =
															C.EnablementState.DisabledByExtensionDependency)
													: !this.isEnabledEnablementState(R) &&
														this.P(D) &&
														(R = C.EnablementState.EnabledByEnvironment),
								A.set(D, R)),
							R
						);
					}
					O(D) {
						if (this.G)
							return (
								!D.isBuiltin && !(0, a.$Mn)(D.manifest, this.j.remoteAuthority)
							);
						const M = this.j.disableExtensions;
						return Array.isArray(M)
							? M.some((N) => (0, d.$7p)({ id: N }, D.identifier))
							: !!(0, d.$7p)({ id: d.$dq.value }, D.identifier);
					}
					P(D) {
						const M = this.j.enableExtensions;
						return Array.isArray(M)
							? M.some((N) => (0, d.$7p)({ id: N }, D.identifier))
							: !1;
					}
					Q(D, M) {
						return !(
							!M.virtual ||
							this.C.getExtensionVirtualWorkspaceSupportType(D.manifest) !==
								!1 ||
							(this.n.getExtensionManagementServer(D) ===
								this.n.webExtensionManagementServer &&
								this.C.canExecuteOnWeb(D.manifest))
						);
					}
					R(D) {
						if (
							this.n.remoteExtensionManagementServer ||
							this.n.webExtensionManagementServer
						) {
							const M = this.n.getExtensionInstallLocation(D);
							for (const N of this.C.getExtensionKind(D.manifest)) {
								if (
									(N === "ui" && M === C.ExtensionInstallLocation.Local) ||
									(N === "workspace" && M === C.ExtensionInstallLocation.Remote)
								)
									return !1;
								if (N === "web") {
									if (this.n.webExtensionManagementServer) {
										if (
											M === C.ExtensionInstallLocation.Web ||
											M === C.ExtensionInstallLocation.Remote
										)
											return !1;
									} else if (M === C.ExtensionInstallLocation.Local) {
										const A = this.m.getValue(g.$p2);
										if (A === !0 || A === "auto") return !1;
									}
								}
							}
							return !0;
						}
						return !1;
					}
					S(D, M) {
						return M.trusted
							? !1
							: this.h.isInsideWorkspace(D.location)
								? !0
								: this.C.getExtensionUntrustedWorkspaceSupportType(
										D.manifest,
									) === !1;
					}
					U(D, M, N, A) {
						const R = D.manifest.extensionDependencies
							? M.filter((B) =>
									D.manifest.extensionDependencies.some(
										(U) =>
											(0, d.$7p)(B.identifier, { id: U }) &&
											this.n.getExtensionManagementServer(B) ===
												this.n.getExtensionManagementServer(D),
									),
								)
							: [];
						if (!R.length) return !1;
						const O = A.has(D);
						O || A.set(D, C.EnablementState.EnabledGlobally);
						try {
							for (const B of R) {
								const U = this.N(B, M, N, A);
								if (
									!this.isEnabledEnablementState(U) &&
									U !== C.EnablementState.DisabledByExtensionKind
								)
									return !0;
							}
						} finally {
							O || A.delete(D);
						}
						return !1;
					}
					W(D) {
						if (this.F) {
							if (this.fb().filter((M) => (0, d.$7p)(M, D))[0])
								return C.EnablementState.EnabledWorkspace;
							if (this.hb().filter((M) => (0, d.$7p)(M, D))[0])
								return C.EnablementState.DisabledWorkspace;
						}
						return this.X(D)
							? C.EnablementState.DisabledGlobally
							: C.EnablementState.EnabledGlobally;
					}
					X(D) {
						return this.g.getDisabledExtensions().some((M) => (0, d.$7p)(M, D));
					}
					Y(D) {
						return this.cb(D), this.eb(D), this.g.enableExtension(D, T);
					}
					Z(D) {
						return this.cb(D), this.eb(D), this.g.disableExtension(D, T);
					}
					$(D) {
						this.cb(D), this.db(D);
					}
					ab(D) {
						this.bb(D), this.eb(D);
					}
					bb(D) {
						if (!this.F) return Promise.resolve(!1);
						const M = this.hb();
						return M.every((N) => !(0, d.$7p)(N, D))
							? (M.push(D), this.ib(M), Promise.resolve(!0))
							: Promise.resolve(!1);
					}
					async cb(D) {
						if (!this.F) return !1;
						const M = this.hb();
						for (let N = 0; N < M.length; N++) {
							const A = M[N];
							if ((0, d.$7p)(A, D)) return M.splice(N, 1), this.ib(M), !0;
						}
						return !1;
					}
					db(D) {
						if (!this.F) return !1;
						const M = this.fb();
						return M.every((N) => !(0, d.$7p)(N, D))
							? (M.push(D), this.gb(M), !0)
							: !1;
					}
					eb(D) {
						if (!this.F) return !1;
						const M = this.fb();
						for (let N = 0; N < M.length; N++) {
							const A = M[N];
							if ((0, d.$7p)(A, D)) return M.splice(N, 1), this.gb(M), !0;
						}
						return !1;
					}
					fb() {
						return this.jb(E.$Jp);
					}
					gb(D) {
						this.kb(E.$Jp, D);
					}
					hb() {
						return this.jb(E.$Ip);
					}
					ib(D) {
						this.kb(E.$Ip, D);
					}
					jb(D) {
						return this.F ? this.f.get(D, r.StorageScope.WORKSPACE) : [];
					}
					kb(D, M) {
						this.f.set(D, M, r.StorageScope.WORKSPACE);
					}
					async lb(D, M) {
						if (M !== T) {
							await this.c.whenInitialized();
							const N = this.c.extensions.filter((A) =>
								D.some((R) => (0, d.$7p)(R, A.identifier)),
							);
							this.b.fire(N);
						}
					}
					mb(D, M, N) {
						const A = D.filter(
							(R) => !this.isEnabledEnablementState(this.getEnablementState(R)),
						);
						A.length && this.b.fire(A),
							N || M.forEach(({ identifier: R }) => this.ob(R));
					}
					async updateExtensionsEnablementsWhenWorkspaceTrustChanges() {
						await this.c.whenInitialized();
						const D = (O) => {
								const B = new Map();
								return this.c.extensions.map((U) => [
									U,
									this.N(U, this.c.extensions, O, B),
								]);
							},
							M = this.nb(),
							N = D({ ...M, trusted: !0 }),
							A = D({ ...M, trusted: !1 }),
							R = N.filter(([, O], B) => O !== A[B][1]).map(([O]) => O);
						R.length && this.b.fire(R);
					}
					nb() {
						return {
							trusted: this.y.isWorkspaceTrusted(),
							virtual: (0, v.$H8)(this.h.getWorkspace()),
						};
					}
					ob(D) {
						this.cb(D), this.eb(D), this.g.enableExtension(D);
					}
				};
				(e.$ywc = P),
					(e.$ywc = P =
						Ne(
							[
								j(0, r.$lq),
								j(1, E.$Kp),
								j(2, m.$Vi),
								j(3, u.$r8),
								j(4, E.$Hp),
								j(5, h.$gj),
								j(6, C.$EQb),
								j(7, o.$4Rb),
								j(8, p.$vwc),
								j(9, f.$n6),
								j(10, b.$4N),
								j(11, s.$asb),
								j(12, l.$xwc),
								j(13, y.$pO),
								j(14, y.$qO),
								j(15, $.$JSb),
								j(16, I.$Li),
							],
							P,
						));
				let k = class extends w.$1c {
					get extensions() {
						return this.b;
					}
					constructor(D, M, N) {
						super(),
							(this.h = D),
							(this.j = M),
							(this.m = N),
							(this.b = []),
							(this.c = this.D(new i.$re())),
							(this.onDidChangeExtensions = this.c.event),
							(this.g = !1),
							this.D((0, w.$Yc)(() => (this.g = !0))),
							(this.f = this.n());
					}
					whenInitialized() {
						return this.f;
					}
					async n() {
						try {
							if (
								((this.b = [
									...(await this.h.getInstalled()),
									...(await this.h.getInstalledWorkspaceExtensions(!0)),
								]),
								this.g)
							)
								return;
							this.c.fire({
								added: this.extensions,
								removed: [],
								isProfileSwitch: !1,
							});
						} catch (D) {
							this.m.error(D);
						}
						this.D(
							this.h.onDidInstallExtensions((D) =>
								this.q(
									D.reduce(
										(M, { local: N, operation: A }) => (
											N && A !== E.InstallOperation.Migrate && M.push(N), M
										),
										[],
									),
									[],
									void 0,
									!1,
								),
							),
						),
							this.D(
								i.Event.filter(
									this.h.onDidUninstallExtension,
									(D) => !D.error,
								)((D) => this.q([], [D.identifier], D.server, !1)),
							),
							this.D(
								this.h.onDidChangeProfile(
									({ added: D, removed: M, server: N }) => {
										this.q(
											D,
											M.map(({ identifier: A }) => A),
											N,
											!0,
										);
									},
								),
							);
					}
					q(D, M, N, A) {
						D.length && this.b.push(...D);
						const R = [];
						for (const O of M) {
							const B = this.b.findIndex(
								(U) =>
									(0, d.$7p)(U.identifier, O) &&
									this.j.getExtensionManagementServer(U) === N,
							);
							B !== -1 && R.push(...this.b.splice(B, 1));
						}
						(D.length || R.length) &&
							this.c.fire({ added: D, removed: R, isProfileSwitch: A });
					}
				};
				(k = Ne([j(0, C.$GQb), j(1, C.$EQb), j(2, S.$ik)], k)),
					(0, c.$lK)(C.$IQb, P, c.InstantiationType.Delayed);
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[4389],
		he([
			1, 0, 6, 119, 157, 109, 9, 3, 10, 33, 154, 4, 62, 23, 665, 24, 57, 111,
			150, 15, 174, 384, 5, 31, 28, 22, 34, 29, 133, 25, 958, 21, 68, 32,
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
			var A;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$T5c = void 0),
				(o = xi(o));
			function R(U) {
				return U.type === "gallery";
			}
			let O = class extends d.$1c {
				constructor(z, F, x, H, q, V, G, K, J, W, X, Y, ie, ne, ee) {
					super(),
						(this.j = z),
						(this.m = F),
						(this.n = x),
						(this.q = H),
						(this.t = q),
						(this.u = V),
						(this.w = G),
						(this.y = K),
						(this.z = J),
						(this.C = W),
						(this.F = X),
						(this.G = Y),
						(this.H = ie),
						(this.I = ne),
						(this.J = ee),
						(this.a = this.D(new t.$re())),
						(this.b = this.D(new t.$re())),
						(this.c = this.D(new t.$re())),
						(this.f = this.D(new t.$re())),
						(this.g = []),
						(this.h = this.D(this.H.createInstance(B))),
						(this.onDidEnableExtensions = this.h.onDidChangeInvalidExtensions),
						this.j.localExtensionManagementServer &&
							this.g.push(this.j.localExtensionManagementServer),
						this.j.remoteExtensionManagementServer &&
							this.g.push(this.j.remoteExtensionManagementServer),
						this.j.webExtensionManagementServer &&
							this.g.push(this.j.webExtensionManagementServer);
					const _ = this.D(new t.$xe());
					this.D(_.add(this.a.event)), (this.onInstallExtension = _.event);
					const te = this.D(new t.$xe());
					this.D(te.add(this.b.event)),
						(this.onDidInstallExtensions = te.event);
					const Q = this.D(new t.$xe());
					this.D(Q.add(this.c.event)), (this.onUninstallExtension = Q.event);
					const Z = this.D(new t.$xe());
					this.D(Z.add(this.f.event)), (this.onDidUninstallExtension = Z.event);
					const se = this.D(new t.$xe());
					this.onDidUpdateExtensionMetadata = se.event;
					const re = this.D(new t.$xe());
					this.onDidChangeProfile = re.event;
					for (const le of this.g)
						this.D(
							_.add(
								t.Event.map(
									le.extensionManagementService.onInstallExtension,
									(oe) => ({ ...oe, server: le }),
								),
							),
						),
							this.D(
								te.add(le.extensionManagementService.onDidInstallExtensions),
							),
							this.D(
								Q.add(
									t.Event.map(
										le.extensionManagementService.onUninstallExtension,
										(oe) => ({ ...oe, server: le }),
									),
								),
							),
							this.D(
								Z.add(
									t.Event.map(
										le.extensionManagementService.onDidUninstallExtension,
										(oe) => ({ ...oe, server: le }),
									),
								),
							),
							this.D(
								se.add(
									le.extensionManagementService.onDidUpdateExtensionMetadata,
								),
							),
							this.D(
								re.add(
									t.Event.map(
										le.extensionManagementService.onDidChangeProfile,
										(oe) => ({ ...oe, server: le }),
									),
								),
							);
				}
				async getInstalled(z, F, x) {
					const H = [];
					return (
						await Promise.all(
							this.g.map(async (q) => {
								const V = await q.extensionManagementService.getInstalled(
									z,
									F,
									x,
								);
								if (q === this.Z()) {
									const G = await this.getInstalledWorkspaceExtensions(!0);
									V.push(...G);
								}
								H.push(...V);
							}),
						),
						H
					);
				}
				uninstall(z, F) {
					return this.uninstallExtensions([{ extension: z, options: F }]);
				}
				async uninstallExtensions(z) {
					const F = [],
						x = new Map(),
						H = (K, J, W) => {
							let X = x.get(K);
							X || x.set(K, (X = [])), X.push({ extension: J, options: W });
						};
					for (const { extension: K, options: J } of z) {
						if (K.isWorkspaceScoped) {
							F.push(K);
							continue;
						}
						const W = this.Y(K);
						if (!W)
							throw new Error(`Invalid location ${K.location.toString()}`);
						if ((H(W, K, J), this.g.length > 1 && (0, E.$Kn)(K.manifest))) {
							const X = this.g.filter((Y) => Y !== W);
							for (const Y of X) {
								const ne = (
									await Y.extensionManagementService.getInstalled()
								).find(
									(ee) =>
										!ee.isBuiltin && (0, u.$7p)(ee.identifier, K.identifier),
								);
								ne && H(Y, ne, J);
							}
						}
					}
					const q = [];
					for (const K of F) q.push(this.R(K));
					for (const [K, J] of x.entries()) q.push(this.L(K, J));
					const G = (await Promise.allSettled(q))
						.filter((K) => K.status === "rejected")
						.map((K) => K.reason);
					if (G.length)
						throw new Error(
							G.map((K) => K.message).join(`
`),
						);
				}
				async L(z, F) {
					if (
						z === this.j.localExtensionManagementServer &&
						this.j.remoteExtensionManagementServer
					)
						for (const { extension: x } of F) {
							const q = (
								await this.j.remoteExtensionManagementServer.extensionManagementService.getInstalled(
									E.ExtensionType.User,
								)
							).filter(
								(V) =>
									!this.C.prefersExecuteOnUI(V.manifest) &&
									V.manifest.extensionDependencies &&
									V.manifest.extensionDependencies.some((G) =>
										(0, u.$7p)({ id: G }, x.identifier),
									),
							);
							if (q.length) throw new Error(this.M(x, q));
						}
					return z.extensionManagementService.uninstallExtensions(F);
				}
				M(z, F) {
					return F.length === 1
						? (0, a.localize)(
								12292,
								null,
								z.manifest.displayName || z.manifest.name,
								F[0].manifest.displayName || F[0].manifest.name,
							)
						: F.length === 2
							? (0, a.localize)(
									12293,
									null,
									z.manifest.displayName || z.manifest.name,
									F[0].manifest.displayName || F[0].manifest.name,
									F[1].manifest.displayName || F[1].manifest.name,
								)
							: (0, a.localize)(
									12294,
									null,
									z.manifest.displayName || z.manifest.name,
									F[0].manifest.displayName || F[0].manifest.name,
									F[1].manifest.displayName || F[1].manifest.name,
								);
				}
				async reinstallFromGallery(z) {
					const F = this.Y(z);
					return F
						? (await this.$(z.manifest, !1),
							F.extensionManagementService.reinstallFromGallery(z))
						: Promise.reject(`Invalid location ${z.location.toString()}`);
				}
				updateMetadata(z, F) {
					const x = this.Y(z);
					return x
						? x.extensionManagementService.updateMetadata(
								z,
								F,
								this.n.currentProfile.extensionsResource,
							)
						: Promise.reject(`Invalid location ${z.location.toString()}`);
				}
				async resetPinnedStateForAllUserExtensions(z) {
					await Promise.allSettled(
						this.g.map((F) =>
							F.extensionManagementService.resetPinnedStateForAllUserExtensions(
								z,
							),
						),
					);
				}
				zip(z) {
					const F = this.Y(z);
					return F
						? F.extensionManagementService.zip(z)
						: Promise.reject(`Invalid location ${z.location.toString()}`);
				}
				download(z, F, x) {
					if (this.j.localExtensionManagementServer)
						return this.j.localExtensionManagementServer.extensionManagementService.download(
							z,
							F,
							x,
						);
					throw new Error("Cannot download extension");
				}
				async install(z, F) {
					const x = await this.getManifest(z);
					return this.installVSIX(z, x, F);
				}
				async installVSIX(z, F, x) {
					const H = this.N(F);
					if (H?.length) {
						await this.$(F, !1);
						const [q] = await b.Promises.settled(H.map((V) => this.O(z, V, x)));
						return q;
					}
					return Promise.reject("No Servers to Install");
				}
				N(z) {
					if (
						this.j.localExtensionManagementServer &&
						this.j.remoteExtensionManagementServer
					)
						return (0, E.$Kn)(z)
							? [
									this.j.localExtensionManagementServer,
									this.j.remoteExtensionManagementServer,
								]
							: this.C.prefersExecuteOnUI(z)
								? [this.j.localExtensionManagementServer]
								: [this.j.remoteExtensionManagementServer];
					if (this.j.localExtensionManagementServer)
						return [this.j.localExtensionManagementServer];
					if (this.j.remoteExtensionManagementServer)
						return [this.j.remoteExtensionManagementServer];
				}
				async installFromLocation(z) {
					if (z.scheme === c.Schemas.file) {
						if (this.j.localExtensionManagementServer)
							return this.j.localExtensionManagementServer.extensionManagementService.installFromLocation(
								z,
								this.n.currentProfile.extensionsResource,
							);
						throw new Error("Local extension management server is not found");
					}
					if (z.scheme === c.Schemas.vscodeRemote) {
						if (this.j.remoteExtensionManagementServer)
							return this.j.remoteExtensionManagementServer.extensionManagementService.installFromLocation(
								z,
								this.n.currentProfile.extensionsResource,
							);
						throw new Error("Remote extension management server is not found");
					}
					if (!this.j.webExtensionManagementServer)
						throw new Error("Web extension management server is not found");
					return this.j.webExtensionManagementServer.extensionManagementService.installFromLocation(
						z,
						this.n.currentProfile.extensionsResource,
					);
				}
				O(z, F, x) {
					return F.extensionManagementService.install(z, x);
				}
				getManifest(z) {
					return z.scheme === c.Schemas.file &&
						this.j.localExtensionManagementServer
						? this.j.localExtensionManagementServer.extensionManagementService.getManifest(
								z,
							)
						: z.scheme === c.Schemas.file &&
								this.j.remoteExtensionManagementServer
							? this.j.remoteExtensionManagementServer.extensionManagementService.getManifest(
									z,
								)
							: z.scheme === c.Schemas.vscodeRemote &&
									this.j.remoteExtensionManagementServer
								? this.j.remoteExtensionManagementServer.extensionManagementService.getManifest(
										z,
									)
								: Promise.reject("No Servers");
				}
				async canInstall(z) {
					return R(z) ? this.P(z) : this.Q(z);
				}
				async P(z) {
					if (
						this.j.localExtensionManagementServer &&
						(await this.j.localExtensionManagementServer.extensionManagementService.canInstall(
							z,
						))
					)
						return !0;
					const F = await this.m.getManifest(z, r.CancellationToken.None);
					return F
						? !!(
								(this.j.remoteExtensionManagementServer &&
									(await this.j.remoteExtensionManagementServer.extensionManagementService.canInstall(
										z,
									)) &&
									this.C.canExecuteOnWorkspace(F)) ||
								(this.j.webExtensionManagementServer &&
									(await this.j.webExtensionManagementServer.extensionManagementService.canInstall(
										z,
									)) &&
									this.C.canExecuteOnWeb(F))
							)
						: !1;
				}
				Q(z) {
					return !!(
						this.j.localExtensionManagementServer ||
						(this.j.remoteExtensionManagementServer &&
							this.C.canExecuteOnWorkspace(z.manifest)) ||
						(this.j.webExtensionManagementServer &&
							this.C.canExecuteOnWeb(z.manifest))
					);
				}
				async updateFromGallery(z, F, x) {
					const H = this.Y(F);
					if (!H)
						return Promise.reject(`Invalid location ${F.location.toString()}`);
					const q = [];
					return (
						(0, E.$Kn)(F.manifest)
							? q.push(
									...this.g.filter(
										(V) => V !== this.j.webExtensionManagementServer,
									),
								)
							: q.push(H),
						(x = { ...(x || {}), isApplicationScoped: F.isApplicationScoped }),
						b.Promises.settled(
							q.map((V) =>
								V.extensionManagementService.installFromGallery(z, x),
							),
						).then(([V]) => V)
					);
				}
				async installGalleryExtensions(z) {
					const F = new Map(),
						x = new Map();
					return (
						await Promise.all(
							z.map(async ({ extension: H, options: q }) => {
								try {
									const V = await this.S(H, q);
									!q.isMachineScoped &&
										this.W() &&
										this.j.localExtensionManagementServer &&
										!V.includes(this.j.localExtensionManagementServer) &&
										(await this.j.localExtensionManagementServer.extensionManagementService.canInstall(
											H,
										)) &&
										V.push(this.j.localExtensionManagementServer);
									for (const G of V) {
										let K = x.get(G);
										K || x.set(G, (K = [])),
											K.push({ extension: H, options: q });
									}
								} catch (V) {
									F.set(H.identifier.id.toLowerCase(), {
										identifier: H.identifier,
										source: H,
										error: V,
										operation: i.InstallOperation.Install,
										profileLocation:
											q.profileLocation ??
											this.n.currentProfile.extensionsResource,
									});
								}
							}),
						),
						await Promise.all(
							[...x.entries()].map(async ([H, q]) => {
								const V =
									await H.extensionManagementService.installGalleryExtensions(
										q,
									);
								for (const G of V) F.set(G.identifier.id.toLowerCase(), G);
							}),
						),
						[...F.values()]
					);
				}
				async installFromGallery(z, F) {
					const x = await this.S(z, F);
					if (!F || (0, v.$sg)(F.isMachineScoped)) {
						const H = await this.X([z]);
						F = { ...(F || {}), isMachineScoped: H };
					}
					return (
						!F.isMachineScoped &&
							this.W() &&
							this.j.localExtensionManagementServer &&
							!x.includes(this.j.localExtensionManagementServer) &&
							(await this.j.localExtensionManagementServer.extensionManagementService.canInstall(
								z,
							)) &&
							x.push(this.j.localExtensionManagementServer),
						b.Promises.settled(
							x.map((H) =>
								H.extensionManagementService.installFromGallery(z, F),
							),
						).then(([H]) => H)
					);
				}
				async getExtensions(z) {
					const F = await this.I.scanMultipleExtensions(
							z,
							E.ExtensionType.User,
							{ includeInvalid: !0 },
						),
						x = [];
					return (
						await Promise.all(
							F.map(async (H) => {
								const q = await this.h.toLocalWorkspaceExtension(H);
								q &&
									x.push({
										type: "resource",
										identifier: q.identifier,
										location: q.location,
										manifest: q.manifest,
										changelogUri: q.changelogUrl,
										readmeUri: q.readmeUrl,
									});
							}),
						),
						x
					);
				}
				getInstalledWorkspaceExtensionLocations() {
					return this.h.getInstalledWorkspaceExtensionsLocations();
				}
				async getInstalledWorkspaceExtensions(z) {
					return this.h.getInstalled(z);
				}
				async installResourceExtension(z, F) {
					if (!this.Q(z))
						throw new Error(
							"This extension cannot be installed in the current workspace.",
						);
					if (!F.isWorkspaceScoped) return this.installFromLocation(z.location);
					this.G.info(
						`Installing the extension ${z.identifier.id} from ${z.location.toString()} in workspace`,
					);
					const x = this.Z();
					this.a.fire({
						identifier: z.identifier,
						source: z.location,
						server: x,
						applicationScoped: !1,
						profileLocation: this.n.currentProfile.extensionsResource,
						workspaceScoped: !0,
					});
					try {
						await this.$(z.manifest, !0);
						const H = await this.h.install(z);
						return (
							this.G.info(
								`Successfully installed the extension ${H.identifier.id} from ${z.location.toString()} in the workspace`,
							),
							this.b.fire([
								{
									identifier: H.identifier,
									source: z.location,
									operation: i.InstallOperation.Install,
									applicationScoped: !1,
									profileLocation: this.n.currentProfile.extensionsResource,
									local: H,
									workspaceScoped: !0,
								},
							]),
							H
						);
					} catch (H) {
						throw (
							(this.G.error(
								`Failed to install the extension ${z.identifier.id} from ${z.location.toString()} in the workspace`,
								(0, T.$bb)(H),
							),
							this.b.fire([
								{
									identifier: z.identifier,
									source: z.location,
									operation: i.InstallOperation.Install,
									applicationScoped: !1,
									profileLocation: this.n.currentProfile.extensionsResource,
									error: H,
									workspaceScoped: !0,
								},
							]),
							H)
						);
					}
				}
				async R(z) {
					if (!z.isWorkspaceScoped)
						throw new Error("The extension is not a workspace extension");
					this.G.info(
						`Uninstalling the workspace extension ${z.identifier.id} from ${z.location.toString()}`,
					);
					const F = this.Z();
					this.c.fire({
						identifier: z.identifier,
						server: F,
						applicationScoped: !1,
						workspaceScoped: !0,
						profileLocation: this.n.currentProfile.extensionsResource,
					});
					try {
						await this.h.uninstall(z),
							this.G.info(
								`Successfully uninstalled the workspace extension ${z.identifier.id} from ${z.location.toString()}`,
							),
							this.J.publicLog2("workspaceextension:uninstall"),
							this.f.fire({
								identifier: z.identifier,
								server: F,
								applicationScoped: !1,
								workspaceScoped: !0,
								profileLocation: this.n.currentProfile.extensionsResource,
							});
					} catch (x) {
						throw (
							(this.G.error(
								`Failed to uninstall the workspace extension ${z.identifier.id} from ${z.location.toString()}`,
								(0, T.$bb)(x),
							),
							this.f.fire({
								identifier: z.identifier,
								server: F,
								error: x,
								applicationScoped: !1,
								workspaceScoped: !0,
								profileLocation: this.n.currentProfile.extensionsResource,
							}),
							x)
						);
					}
				}
				async S(z, F) {
					const x = await this.m.getManifest(z, r.CancellationToken.None);
					if (!x)
						return Promise.reject(
							(0, a.localize)(12295, null, z.displayName || z.name),
						);
					const H = [];
					if ((0, E.$Kn)(x))
						H.push(
							...this.g.filter(
								(q) => q !== this.j.webExtensionManagementServer,
							),
						);
					else {
						const q = this.U(x);
						q && H.push(q);
					}
					if (!H.length) {
						const q = new Error(
							(0, a.localize)(12296, null, z.displayName || z.name),
						);
						throw ((q.name = i.ExtensionManagementErrorCode.Unsupported), q);
					}
					return (
						F?.context?.[i.$vp] !== i.ExtensionInstallSource.SETTINGS_SYNC &&
							(await this.$(x, !1)),
						F?.donotIncludePackAndDependencies || (await this.ab(z, x)),
						H
					);
				}
				U(z) {
					if (this.g.length === 1 && this.j.localExtensionManagementServer)
						return this.j.localExtensionManagementServer;
					const F = this.C.getExtensionKind(z);
					for (const x of F) {
						if (x === "ui" && this.j.localExtensionManagementServer)
							return this.j.localExtensionManagementServer;
						if (x === "workspace" && this.j.remoteExtensionManagementServer)
							return this.j.remoteExtensionManagementServer;
						if (x === "web" && this.j.webExtensionManagementServer)
							return this.j.webExtensionManagementServer;
					}
					return this.j.localExtensionManagementServer;
				}
				W() {
					return (
						this.w.isEnabled() &&
						this.w.isResourceEnabled(f.SyncResource.Extensions)
					);
				}
				async X(z) {
					if (this.W()) {
						const { result: F } = await this.y.prompt({
							type: o.default.Info,
							message:
								z.length === 1
									? (0, a.localize)(12297, null)
									: (0, a.localize)(12298, null),
							detail:
								z.length === 1
									? (0, a.localize)(12299, null, z[0].displayName)
									: (0, a.localize)(12300, null),
							buttons: [
								{ label: (0, a.localize)(12301, null), run: () => !1 },
								{ label: (0, a.localize)(12302, null), run: () => !0 },
							],
							cancelButton: {
								run: () => {
									throw new T.$9();
								},
							},
						});
						return F;
					}
					return !1;
				}
				getExtensionsControlManifest() {
					return this.j.localExtensionManagementServer
						? this.j.localExtensionManagementServer.extensionManagementService.getExtensionsControlManifest()
						: this.j.remoteExtensionManagementServer
							? this.j.remoteExtensionManagementServer.extensionManagementService.getExtensionsControlManifest()
							: this.j.webExtensionManagementServer
								? this.j.webExtensionManagementServer.extensionManagementService.getExtensionsControlManifest()
								: Promise.resolve({
										malicious: [],
										deprecated: {},
										search: [],
									});
				}
				Y(z) {
					return z.isWorkspaceScoped
						? this.Z()
						: this.j.getExtensionManagementServer(z);
				}
				Z() {
					if (this.j.remoteExtensionManagementServer)
						return this.j.remoteExtensionManagementServer;
					if (this.j.localExtensionManagementServer)
						return this.j.localExtensionManagementServer;
					if (this.j.webExtensionManagementServer)
						return this.j.webExtensionManagementServer;
					throw new Error("No extension server found");
				}
				async $(z, F) {
					if (F || this.C.getExtensionUntrustedWorkspaceSupportType(z) === !1) {
						const x = [];
						if (
							(x.push({
								label: (0, a.localize)(12303, null),
								type: "ContinueWithTrust",
							}),
							F ||
								x.push({
									label: (0, a.localize)(12304, null),
									type: "ContinueWithoutTrust",
								}),
							x.push({ label: (0, a.localize)(12305, null), type: "Manage" }),
							(await this.z.requestWorkspaceTrust({
								message: (0, a.localize)(12306, null),
								buttons: x,
							})) === void 0)
						)
							throw new T.$9();
					}
				}
				async ab(z, F) {
					if (
						this.g.length !== 1 ||
						this.g[0] !== this.j.webExtensionManagementServer
					)
						return;
					const x = [];
					if (F.extensionPack?.length) {
						const ne = await this.m.getExtensions(
							F.extensionPack.map((ee) => ({ id: ee })),
							r.CancellationToken.None,
						);
						for (const ee of ne)
							(await this.g[0].extensionManagementService.canInstall(ee)) ||
								x.push(ee);
						if (x.length && x.length === ne.length)
							throw new i.$Gp(
								"Not supported in Web",
								i.ExtensionManagementErrorCode.Unsupported,
							);
					}
					const H = (0, a.localize)(12307, null, this.t.nameLong),
						q = this.C.getExtensionVirtualWorkspaceSupportType(F),
						V = (0, E.$En)(F.capabilities?.virtualWorkspaces),
						G = q === "limited" || !!V;
					if (!x.length && !G) return;
					const K = (0, a.localize)(
						12308,
						null,
						z.displayName || z.identifier.id,
						H,
					);
					let J,
						W = [],
						X;
					const Y = { label: (0, a.localize)(12309, null), run: () => {} },
						ie = {
							label: (0, a.localize)(12310, null),
							run: () =>
								this.H.invokeFunction((ne) =>
									ne
										.get($.$ek)
										.executeCommand(
											"extension.open",
											z.identifier.id,
											"extensionPack",
										),
								),
						};
					x.length && G
						? ((J = K),
							(X = `${
								V
									? `${V}
`
									: ""
							}${(0, a.localize)(12311, null)}`),
							(W = [Y, ie]))
						: G
							? ((J = K), (X = V || void 0), (W = [Y]))
							: ((J = (0, a.localize)(
									12312,
									null,
									z.displayName || z.identifier.id,
									H,
								)),
								(W = [Y, ie])),
						await this.y.prompt({
							type: o.default.Info,
							message: J,
							detail: X,
							buttons: W,
							cancelButton: {
								run: () => {
									throw new T.$9();
								},
							},
						});
				}
				getTargetPlatform() {
					return this.bb || (this.bb = (0, u.$fq)(this.F, this.G)), this.bb;
				}
				async cleanUp() {
					await Promise.allSettled(
						this.g.map((z) => z.extensionManagementService.cleanUp()),
					);
				}
				toggleAppliationScope(z, F) {
					const x = this.Y(z);
					if (x)
						return x.extensionManagementService.toggleAppliationScope(z, F);
					throw new Error("Not Supported");
				}
				copyExtensions(z, F) {
					if (this.j.remoteExtensionManagementServer)
						throw new Error("Not Supported");
					return this.j.localExtensionManagementServer
						? this.j.localExtensionManagementServer.extensionManagementService.copyExtensions(
								z,
								F,
							)
						: this.j.webExtensionManagementServer
							? this.j.webExtensionManagementServer.extensionManagementService.copyExtensions(
									z,
									F,
								)
							: Promise.resolve();
				}
				registerParticipant() {
					throw new Error("Not Supported");
				}
				installExtensionsFromProfile(z, F, x) {
					throw new Error("Not Supported");
				}
			};
			(e.$T5c = O),
				(e.$T5c = O =
					Ne(
						[
							j(0, w.$EQb),
							j(1, i.$Ep),
							j(2, P.$P8),
							j(3, m.$gj),
							j(4, h.$Bk),
							j(5, n.$gp),
							j(6, f.$4Rb),
							j(7, p.$GO),
							j(8, s.$qO),
							j(9, l.$JSb),
							j(10, S.$ll),
							j(11, I.$ik),
							j(12, y.$Li),
							j(13, L.$dr),
							j(14, N.$km),
						],
						O,
					));
			let B = class extends d.$1c {
				static {
					A = this;
				}
				static {
					this.a = "workspaceExtensions.locations";
				}
				constructor(z, F, x, H, q, V, G) {
					super(),
						(this.h = z),
						(this.j = F),
						(this.m = x),
						(this.n = H),
						(this.q = q),
						(this.t = V),
						(this.u = G),
						(this.b = this.D(new t.$re())),
						(this.onDidChangeInvalidExtensions = this.b.event),
						(this.c = []),
						(this.g = this.D(new d.$Zc())),
						this.D(
							t.Event.debounce(
								this.h.onDidFilesChange,
								(K, J) => ((K = K ?? []).push(J), K),
								1e3,
							)((K) => {
								const J = this.c.filter(
									(W) => !W.isValid && K.some((X) => X.affects(W.location)),
								);
								J.length && this.z(J);
							}),
						),
						(this.f = this.w());
				}
				async w() {
					const z = this.getInstalledWorkspaceExtensionsLocations();
					z.length &&
						(await Promise.allSettled(
							z.map(async (F) => {
								if (!this.m.isInsideWorkspace(F)) {
									this.j.info(
										`Removing the workspace extension ${F.toString()} as it is not inside the workspace`,
									);
									return;
								}
								if (!(await this.h.exists(F))) {
									this.j.info(
										`Removing the workspace extension ${F.toString()} as it does not exist`,
									);
									return;
								}
								try {
									const x = await this.scanWorkspaceExtension(F);
									x
										? this.c.push(x)
										: this.j.info(
												`Skipping workspace extension ${F.toString()} as it does not exist`,
											);
								} catch (x) {
									this.j.error(
										"Skipping the workspace extension",
										F.toString(),
										x,
									);
								}
							}),
						),
						this.C());
				}
				y() {
					this.g.clear();
					for (const z of this.c)
						z.isValid || this.g.add(this.h.watch(z.location));
				}
				async z(z) {
					const F = [];
					await Promise.all(
						z.map(async (H) => {
							const q = await this.scanWorkspaceExtension(H.location);
							q?.isValid && F.push(q);
						}),
					);
					let x = !1;
					for (const H of F) {
						const q = this.c.findIndex((V) =>
							this.t.extUri.isEqual(V.location, H.location),
						);
						q !== -1 && ((x = !0), this.c.splice(q, 1, H));
					}
					x && (this.C(), this.b.fire(F));
				}
				async getInstalled(z) {
					return await this.f, this.c.filter((F) => z || F.isValid);
				}
				async install(z) {
					await this.f;
					const F = await this.scanWorkspaceExtension(z.location);
					if (!F)
						throw new Error(
							"Cannot install the extension as it does not exist.",
						);
					const x = this.c.findIndex((H) =>
						(0, u.$7p)(H.identifier, z.identifier),
					);
					return (
						x === -1 ? this.c.push(F) : this.c.splice(x, 1, F),
						this.C(),
						this.u.publicLog2("workspaceextension:install"),
						F
					);
				}
				async uninstall(z) {
					await this.f;
					const F = this.c.findIndex((x) =>
						(0, u.$7p)(x.identifier, z.identifier),
					);
					F !== -1 && (this.c.splice(F, 1), this.C()),
						this.u.publicLog2("workspaceextension:uninstall");
				}
				getInstalledWorkspaceExtensionsLocations() {
					const z = [];
					try {
						const F = JSON.parse(
							this.q.get(A.a, D.StorageScope.WORKSPACE, "[]"),
						);
						if (Array.isArray(z))
							for (const x of F)
								(0, v.$lg)(x)
									? this.m.getWorkbenchState() === k.WorkbenchState.FOLDER
										? z.push(this.m.getWorkspace().folders[0].toResource(x))
										: this.j.warn(
												`Invalid value for 'extensions' in workspace storage: ${x}`,
											)
									: z.push(C.URI.revive(x));
						else
							this.j.warn(
								`Invalid value for 'extensions' in workspace storage: ${z}`,
							);
					} catch (F) {
						this.j.warn(
							`Error parsing workspace extensions locations: ${(0, T.$bb)(F)}`,
						);
					}
					return z;
				}
				C() {
					const z = this.c.map((F) => F.location);
					this.m.getWorkbenchState() === k.WorkbenchState.FOLDER
						? this.q.store(
								A.a,
								JSON.stringify(
									(0, g.$Lb)(
										z.map((F) =>
											this.t.extUri.relativePath(
												this.m.getWorkspace().folders[0].uri,
												F,
											),
										),
									),
								),
								D.StorageScope.WORKSPACE,
								D.StorageTarget.MACHINE,
							)
						: this.q.store(
								A.a,
								JSON.stringify(z),
								D.StorageScope.WORKSPACE,
								D.StorageTarget.MACHINE,
							),
						this.y();
				}
				async scanWorkspaceExtension(z) {
					const F = await this.n.scanExistingExtension(
						z,
						E.ExtensionType.User,
						{ includeInvalid: !0 },
					);
					return F ? this.toLocalWorkspaceExtension(F) : null;
				}
				async toLocalWorkspaceExtension(z) {
					const F = await this.h.resolve(z.location);
					let x, H;
					F.children &&
						((x = F.children.find(({ name: G }) =>
							/^readme(\.txt|\.md|)$/i.test(G),
						)?.resource),
						(H = F.children.find(({ name: G }) =>
							/^changelog(\.txt|\.md|)$/i.test(G),
						)?.resource));
					const q = [...z.validations];
					let V = z.isValid;
					return (
						z.manifest.main &&
							((await this.h.exists(
								this.t.extUri.joinPath(z.location, z.manifest.main),
							)) ||
								((V = !1),
								q.push([
									o.default.Error,
									(0, a.localize)(12313, null, z.manifest.main),
								]))),
						{
							identifier: z.identifier,
							type: z.type,
							isBuiltin: z.isBuiltin || !!z.metadata?.isBuiltin,
							location: z.location,
							manifest: z.manifest,
							targetPlatform: z.targetPlatform,
							validations: q,
							isValid: V,
							readmeUrl: x,
							changelogUrl: H,
							publisherDisplayName: z.metadata?.publisherDisplayName,
							publisherId: z.metadata?.publisherId || null,
							isApplicationScoped: !!z.metadata?.isApplicationScoped,
							isMachineScoped: !!z.metadata?.isMachineScoped,
							isPreReleaseVersion: !!z.metadata?.isPreReleaseVersion,
							hasPreReleaseVersion: !!z.metadata?.hasPreReleaseVersion,
							preRelease: !!z.metadata?.preRelease,
							installedTimestamp: z.metadata?.installedTimestamp,
							updated: !!z.metadata?.updated,
							pinned: !!z.metadata?.pinned,
							isWorkspaceScoped: !0,
							source: "resource",
						}
					);
				}
			};
			B = A = Ne(
				[
					j(0, S.$ll),
					j(1, I.$ik),
					j(2, k.$Vi),
					j(3, L.$dr),
					j(4, D.$lq),
					j(5, M.$Vl),
					j(6, N.$km),
				],
				B,
			);
		},
	),
		define(
			de[4390],
			he([
				1, 0, 47, 119, 4389, 20, 157, 23, 10, 665, 62, 151, 19, 150, 57, 174,
				384, 5, 22, 34, 133, 958, 32,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ldd = void 0);
				let $ = class extends w.$T5c {
					constructor(S, I, T, P, k, L, D, M, N, A, R, O, B, U, z, F) {
						super(I, T, P, k, L, D, M, N, A, R, O, B, U, z, F), (this.cb = S);
					}
					async O(S, I, T) {
						if (
							S.scheme === d.Schemas.vscodeRemote &&
							I === this.j.localExtensionManagementServer
						) {
							const P = (0, h.$nh)(this.cb.tmpDir, (0, t.$9g)());
							await this.u.download(S, P), (S = P);
						}
						return super.O(S, I, T);
					}
				};
				(e.$Ldd = $),
					(e.$Ldd = $ =
						Ne(
							[
								j(0, a.$ucd),
								j(1, C.$EQb),
								j(2, i.$Ep),
								j(3, s.$P8),
								j(4, m.$gj),
								j(5, u.$Bk),
								j(6, r.$gp),
								j(7, c.$4Rb),
								j(8, n.$GO),
								j(9, g.$qO),
								j(10, p.$JSb),
								j(11, f.$ll),
								j(12, b.$ik),
								j(13, o.$Li),
								j(14, l.$dr),
								j(15, y.$km),
							],
							$,
						)),
					(0, E.$lK)(C.$GQb, $, E.InstantiationType.Delayed);
			},
		),
		define(
			de[4391],
			he([
				1, 0, 119, 109, 154, 34, 163, 24, 33, 4, 62, 10, 15, 384, 22, 3789, 129,
				133, 1044, 68, 772,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Qdd = void 0);
				let l = class extends g.$c5c {
					constructor($, v, S, I, T, P, k, L, D, M, N, A) {
						super($, S, I, T, P),
							(this.M = v),
							(this.N = k),
							(this.P = L),
							(this.Q = D),
							(this.R = M),
							(this.S = N),
							(this.U = A);
					}
					async install($, v) {
						const S = await super.install($, v);
						return await this.$(S), S;
					}
					async installFromGallery($, v) {
						const S = await this.W($, v);
						return await this.$(S), S;
					}
					async W($, v) {
						if (this.Q.getValue("remote.downloadExtensionsLocally"))
							return this.X($, v || {});
						try {
							const S =
								await this.M.extensionManagementService.getTargetPlatform();
							return await super.installFromGallery($, {
								...v,
								context: { ...v?.context, [t.$xp]: S },
							});
						} catch (S) {
							switch (S.name) {
								case t.ExtensionManagementErrorCode.Download:
								case t.ExtensionManagementErrorCode.DownloadSignature:
								case t.ExtensionManagementErrorCode.Gallery:
								case t.ExtensionManagementErrorCode.Internal:
								case t.ExtensionManagementErrorCode.Unknown:
									try {
										return (
											this.N.error(
												`Error while installing '${$.identifier.id}' extension in the remote server.`,
												(0, C.$xj)(S),
											),
											await this.X($, v || {})
										);
									} catch (I) {
										throw (this.N.error(I), I);
									}
								default:
									throw (this.N.debug("Remote Install Error Name", S.name), S);
							}
						}
					}
					async X($, v) {
						this.N.info(
							`Downloading the '${$.identifier.id}' extension locally and install`,
						);
						const S = await this.Z($, !!v.installPreReleaseVersion);
						v = { ...v, donotIncludePackAndDependencies: !0 };
						const I = await this.getInstalled(
								i.ExtensionType.User,
								void 0,
								v.productVersion,
							),
							T = await this.bb(S, m.CancellationToken.None);
						if (T.length) {
							this.N.info(
								`Downloading the workspace dependencies and packed extensions of '${S.identifier.id}' locally and install`,
							);
							for (const P of T) await this.Y(P, I, v);
						}
						return await this.Y(S, I, v);
					}
					async Y($, v, S) {
						const I = await this.Z($, !!S.installPreReleaseVersion);
						this.N.trace("Downloading extension:", I.identifier.id);
						const T = await this.M.extensionManagementService.download(
							I,
							v.filter((P) => (0, w.$7p)(P.identifier, I.identifier))[0]
								? t.InstallOperation.Update
								: t.InstallOperation.Install,
							!!S.donotVerifySignature,
						);
						this.N.info("Downloaded extension:", I.identifier.id, T.path);
						try {
							const P = await super.install(T, { ...S, keepExisting: !0 });
							return (
								this.N.info(
									`Successfully installed '${I.identifier.id}' extension`,
								),
								P
							);
						} finally {
							try {
								await this.S.del(T);
							} catch (P) {
								this.N.error(P);
							}
						}
					}
					async Z($, v) {
						const S = await this.getTargetPlatform();
						let I = null;
						if (
							($.hasPreReleaseVersion &&
								$.properties.isPreReleaseVersion !== v &&
								(I =
									(
										await this.P.getExtensions(
											[{ ...$.identifier, preRelease: v }],
											{ targetPlatform: S, compatible: !0 },
											m.CancellationToken.None,
										)
									)[0] || null),
							!I && (await this.P.isExtensionCompatible($, v, S)) && (I = $),
							I || (I = await this.P.getCompatibleExtension($, v, S)),
							!I)
						) {
							const T = [];
							throw (0, s.$zq)($.properties.enabledApiProposals ?? [], T)
								? !v &&
									$.properties.isPreReleaseVersion &&
									(
										await this.P.getExtensions(
											[$.identifier],
											m.CancellationToken.None,
										)
									)[0]
									? new t.$Gp(
											(0, r.localize)(12317, null, $.identifier.id),
											t.ExtensionManagementErrorCode.ReleaseVersionNotFound,
										)
									: new t.$Gp(
											(0, r.localize)(
												12318,
												null,
												$.identifier.id,
												this.R.nameLong,
												this.R.version,
											),
											t.ExtensionManagementErrorCode.Incompatible,
										)
								: new t.$Gp(
										(0, r.localize)(
											12316,
											null,
											$.displayName ?? $.identifier.id,
											T[0],
										),
										t.ExtensionManagementErrorCode.IncompatibleApi,
									);
						}
						return I;
					}
					async $($) {
						const v = await this.ab($.manifest, m.CancellationToken.None),
							S = await this.M.extensionManagementService.getInstalled(),
							I = v.filter((T) =>
								S.every((P) => !(0, w.$7p)(P.identifier, T.identifier)),
							);
						I.length &&
							(this.N.info(
								`Installing UI dependencies and packed extensions of '${$.identifier.id}' locally`,
							),
							await h.Promises.settled(
								I.map((T) =>
									this.M.extensionManagementService.installFromGallery(T),
								),
							));
					}
					async ab($, v) {
						const S = new Map(),
							I = [
								...($.extensionPack || []),
								...($.extensionDependencies || []),
							];
						return await this.cb(I, S, !0, v), [...S.values()];
					}
					async bb($, v) {
						const S = new Map();
						S.set($.identifier.id.toLowerCase(), $);
						const I = await this.P.getManifest($, v);
						if (I) {
							const T = [
								...(I.extensionPack || []),
								...(I.extensionDependencies || []),
							];
							await this.cb(T, S, !1, v);
						}
						return S.delete($.identifier.id), [...S.values()];
					}
					async cb($, v, S, I) {
						if ($.length === 0) return Promise.resolve();
						const T = await this.P.getExtensions(
								$.map((L) => ({ id: L })),
								I,
							),
							P = await Promise.all(T.map((L) => this.P.getManifest(L, I))),
							k = [];
						for (let L = 0; L < T.length; L++) {
							const D = T[L],
								M = P[L];
							M &&
								this.U.prefersExecuteOnUI(M) === S &&
								(v.set(D.identifier.id.toLowerCase(), D), k.push(M));
						}
						$ = [];
						for (const L of k) {
							if ((0, d.$Pb)(L.extensionDependencies))
								for (const D of L.extensionDependencies)
									v.has(D.toLowerCase()) || $.push(D);
							if ((0, d.$Pb)(L.extensionPack))
								for (const D of L.extensionPack)
									v.has(D.toLowerCase()) || $.push(D);
						}
						return this.cb($, v, S, I);
					}
				};
				(e.$Qdd = l),
					(e.$Qdd = l =
						Ne(
							[
								j(2, o.$P8),
								j(3, p.$Xl),
								j(4, f.$nxc),
								j(5, b.$Vl),
								j(6, E.$ik),
								j(7, t.$Ep),
								j(8, a.$gj),
								j(9, u.$Bk),
								j(10, n.$ll),
								j(11, c.$JSb),
							],
							l,
						));
			},
		),
		define(
			de[4392],
			he([1, 0, 4, 23, 157, 143, 230, 20, 4391, 73, 5, 3781, 3]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Sdd = void 0);
				let c = class extends h.$1c {
					constructor(g, p, o, f) {
						super(),
							(this.remoteExtensionManagementServer = null),
							(this.webExtensionManagementServer = null);
						const b = this.D(
							f.createInstance(a.$Rdd, g.getChannel("extensions")),
						);
						this.localExtensionManagementServer = {
							extensionManagementService: b,
							id: "local",
							label: (0, t.localize)(12314, null),
						};
						const s = p.getConnection();
						if (s) {
							const l = f.createInstance(
								m.$Qdd,
								s.getChannel("extensions"),
								this.localExtensionManagementServer,
							);
							this.remoteExtensionManagementServer = {
								id: "remote",
								extensionManagementService: l,
								get label() {
									return (
										o.getHostLabel(i.Schemas.vscodeRemote, s.remoteAuthority) ||
										(0, t.localize)(12315, null)
									);
								},
							};
						}
					}
					getExtensionManagementServer(g) {
						if (g.location.scheme === i.Schemas.file)
							return this.localExtensionManagementServer;
						if (
							this.remoteExtensionManagementServer &&
							g.location.scheme === i.Schemas.vscodeRemote
						)
							return this.remoteExtensionManagementServer;
						throw new Error(`Invalid Extension ${g.location}`);
					}
					getExtensionInstallLocation(g) {
						return this.getExtensionManagementServer(g) ===
							this.remoteExtensionManagementServer
							? w.ExtensionInstallLocation.Remote
							: w.ExtensionInstallLocation.Local;
					}
				};
				(e.$Sdd = c),
					(e.$Sdd = c =
						Ne([j(0, C.$Vbd), j(1, E.$$m), j(2, r.$3N), j(3, u.$Li)], c)),
					(0, d.$lK)(w.$EQb, c, d.InstantiationType.Delayed);
			},
		),
		define(
			de[2006],
			he([1, 0, 58, 23, 10, 109, 34, 78, 517, 384, 1294]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$T4c = void 0),
					(e.$U4c = h),
					(e.$V4c = c);
				let a = class {
					get maxLocalProcessAffinity() {
						return this.b;
					}
					get maxLocalWebWorkerAffinity() {
						return this.c;
					}
					constructor(g, p, o, f, b, s) {
						(this.d = g),
							(this.f = p),
							(this.g = o),
							(this.h = f),
							(this.i = b),
							(this.j = s),
							(this.a = new E.$In()),
							(this.b = 0),
							(this.c = 0);
					}
					set(g, p) {
						this.a.set(g, p);
					}
					readExtensionKinds(g) {
						return g.isUnderDevelopment && this.g.extensionDevelopmentKind
							? this.g.extensionDevelopmentKind
							: this.j.getExtensionKind(g);
					}
					getRunningLocation(g) {
						return this.a.get(g) || null;
					}
					filterByRunningLocation(g, p) {
						return h(g, this.a, (o) => p.equals(o), {
							environmentService: this.g,
						});
					}
					filterByExtensionHostKind(g, p) {
						return h(g, this.a, (o) => o.kind === p, {
							environmentService: this.g,
						});
					}
					filterByExtensionHostManager(g, p) {
						return h(g, this.a, (o) => p.representsRunningLocation(o), {
							environmentService: this.g,
						});
					}
					k(g, p, o) {
						const f = new E.$In();
						for (const S of g) (S.main || S.browser) && f.set(S.identifier, S);
						for (const S of this.d.getAllExtensionDescriptions())
							if (S.main || S.browser) {
								const I = this.a.get(S.identifier);
								I && I.kind === p && f.set(S.identifier, S);
							}
						const b = new E.$In();
						let s = 0;
						for (const [S, I] of f) b.set(I.identifier, ++s);
						const l = (S, I) => {
							for (const [T, P] of b) P === S && b.set(T, I);
						};
						for (const [S, I] of f) {
							if (!I.extensionDependencies) continue;
							const T = b.get(I.identifier);
							for (const P of I.extensionDependencies) {
								const k = b.get(P);
								k && k !== T && l(k, T);
							}
						}
						const y = new Map();
						let $ = 0;
						for (const [S, I] of f) {
							const T = this.a.get(I.identifier);
							if (T) {
								const P = b.get(I.identifier);
								y.set(P, T.affinity), ($ = Math.max($, T.affinity));
							}
						}
						if (!this.g.isExtensionDevelopment) {
							const S =
									this.h.getValue("extensions.experimental.affinity") || {},
								I = Object.keys(S),
								T = new Map();
							for (const P of I) {
								const k = S[P];
								if (typeof k != "number" || k <= 0 || Math.floor(k) !== k) {
									this.i.info(
										`Ignoring configured affinity for '${P}' because the value is not a positive integer.`,
									);
									continue;
								}
								const L = b.get(P);
								if (!L) continue;
								const D = y.get(L);
								if (D) {
									T.set(k, D);
									continue;
								}
								const M = T.get(k);
								if (M) {
									y.set(L, M);
									continue;
								}
								if (!o) {
									this.i.info(
										`Ignoring configured affinity for '${P}' because extension host(s) are already running. Reload window.`,
									);
									continue;
								}
								const N = ++$;
								T.set(k, N), y.set(L, N);
							}
						}
						const v = new E.$In();
						for (const S of g) {
							const I = b.get(S.identifier) || 0,
								T = y.get(I) || 0;
							v.set(S.identifier, T);
						}
						if ($ > 0 && o)
							for (let S = 1; S <= $; S++) {
								const I = [];
								for (const T of g)
									v.get(T.identifier) === S && I.push(T.identifier);
								this.i.info(
									`Placing extension(s) ${I.map((T) => T.value).join(", ")} on a separate extension host.`,
								);
							}
						return { affinities: v, maxAffinity: $ };
					}
					computeRunningLocation(g, p, o) {
						return this.l(this.a, g, p, o).runningLocation;
					}
					l(g, p, o, f) {
						(p = p.filter((P) => !g.has(P.identifier))),
							(o = o.filter((P) => !g.has(P.identifier)));
						const b = (0, m.$e2)(
								p,
								o,
								(P) => this.readExtensionKinds(P),
								(P, k, L, D, M) => this.f.pickExtensionHostKind(P, k, L, D, M),
							),
							s = new E.$In();
						for (const P of p) s.set(P.identifier, P);
						for (const P of o) s.set(P.identifier, P);
						const l = new E.$In(),
							y = [],
							$ = [];
						for (const [P, k] of b) {
							let L = null;
							if (k === m.ExtensionHostKind.LocalProcess) {
								const D = s.get(P);
								D && y.push(D);
							} else if (k === m.ExtensionHostKind.LocalWebWorker) {
								const D = s.get(P);
								D && $.push(D);
							} else k === m.ExtensionHostKind.Remote && (L = new u.$h2());
							l.set(P, L);
						}
						const { affinities: v, maxAffinity: S } = this.k(
							y,
							m.ExtensionHostKind.LocalProcess,
							f,
						);
						for (const P of y) {
							const k = v.get(P.identifier) || 0;
							l.set(P.identifier, new u.$f2(k));
						}
						const { affinities: I, maxAffinity: T } = this.k(
							$,
							m.ExtensionHostKind.LocalWebWorker,
							f,
						);
						for (const P of $) {
							const k = I.get(P.identifier) || 0;
							l.set(P.identifier, new u.$g2(k));
						}
						for (const [P, k] of g) k && l.set(P, k);
						return {
							runningLocation: l,
							maxLocalProcessAffinity: S,
							maxLocalWebWorkerAffinity: T,
						};
					}
					initializeRunningLocation(g, p) {
						const {
							runningLocation: o,
							maxLocalProcessAffinity: f,
							maxLocalWebWorkerAffinity: b,
						} = this.l(this.a, g, p, !0);
						(this.a = o), (this.b = f), (this.c = b);
					}
					deltaExtensions(g, p) {
						const o = new E.$In();
						for (const f of p) {
							const b = f;
							o.set(b, this.a.get(b) || null), this.a.delete(b);
						}
						return this.m(g), o;
					}
					m(g) {
						const p = [],
							o = [];
						for (const s of g) {
							const l = this.readExtensionKinds(s),
								y = s.extensionLocation.scheme === i.Schemas.vscodeRemote,
								$ = this.f.pickExtensionHostKind(
									s.identifier,
									l,
									!y,
									y,
									m.ExtensionRunningPreference.None,
								);
							let v = null;
							$ === m.ExtensionHostKind.LocalProcess
								? p.push(s)
								: $ === m.ExtensionHostKind.LocalWebWorker
									? o.push(s)
									: $ === m.ExtensionHostKind.Remote && (v = new u.$h2()),
								this.a.set(s.identifier, v);
						}
						const { affinities: f } = this.k(
							p,
							m.ExtensionHostKind.LocalProcess,
							!1,
						);
						for (const s of p) {
							const l = f.get(s.identifier) || 0;
							this.a.set(s.identifier, new u.$f2(l));
						}
						const { affinities: b } = this.k(
							o,
							m.ExtensionHostKind.LocalWebWorker,
							!1,
						);
						for (const s of o) {
							const l = b.get(s.identifier) || 0;
							this.a.set(s.identifier, new u.$g2(l));
						}
					}
				};
				(e.$T4c = a),
					(e.$T4c = a =
						Ne([j(2, d.$r8), j(3, w.$gj), j(4, C.$ik), j(5, r.$JSb)], a));
				function h(n, g, p, { environmentService: o }) {
					return n.filter((f) => {
						let b = g.get(f.identifier);
						return !b ||
							(o.shadowWindowForWorkspaceId &&
								!t.$8V.includes(f.identifier._lower))
							? !1
							: b && p(b);
					});
				}
				function c(n, g, p, { environmentService: o }) {
					return n.filter((f) => {
						let b = g.get(f);
						return !b ||
							(o.shadowWindowForWorkspaceId && !t.$8V.includes(f._lower))
							? !1
							: b && p(b);
					});
				}
			},
		),
		define(
			de[4393],
			he([
				1, 0, 15, 163, 6, 94, 3, 23, 240, 12, 19, 162, 28, 4, 10, 57, 119, 1200,
				109, 22, 102, 5, 1619, 34, 40, 62, 30, 211, 951, 32, 25, 78, 244, 157,
				3302, 698, 517, 1822, 384, 1294, 2006, 53, 175, 3380, 1821, 1315, 52,
				143,
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
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
			) {
				"use strict";
				var W;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$64c = e.$54c = e.$44c = e.$Z4c = e.$Y4c = void 0),
					(e.$14c = Q),
					(e.$24c = Z),
					(e.$34c = se),
					(m = mt(m)),
					(c = mt(c));
				const X = Object.hasOwnProperty,
					Y = Promise.resolve(void 0);
				let ie = (W = class extends C.$1c {
					constructor(
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
						be,
						Ce,
						Le,
						Fe,
						Oe,
						xe,
						He,
						Ke,
						Je,
						Te,
						Ee,
						Ie,
						Be,
						Se,
					) {
						super(),
							(this.G = ye),
							(this.H = ue),
							(this.I = fe),
							(this.J = me),
							(this.L = ve),
							(this.M = ge),
							(this.N = be),
							(this.O = Ce),
							(this.P = Le),
							(this.Q = Fe),
							(this.R = Oe),
							(this.S = xe),
							(this.U = He),
							(this.W = Ke),
							(this.X = Je),
							(this.Y = Te),
							(this.Z = Ee),
							(this.$ = Ie),
							(this.ab = Be),
							(this.bb = Se),
							(this.a = this.D(new w.$re())),
							(this.onDidRegisterExtensions = this.a.event),
							(this.b = this.D(new w.$re())),
							(this.onDidChangeExtensionsStatus = this.b.event),
							(this.c = this.D(new w.$re({ leakWarningThreshold: 400 }))),
							(this.onDidChangeExtensions = this.c.event),
							(this.f = this.D(new w.$re())),
							(this.onWillActivateByEvent = this.f.event),
							(this.g = this.D(new w.$re())),
							(this.onDidChangeResponsiveChange = this.g.event),
							(this.h = this.D(new w.$re())),
							(this.onWillStop = this.h.event),
							(this.j = new ae()),
							(this.m = new A.$K4c(this.j)),
							(this.n = new t.$Lh()),
							(this.q = new f.$In()),
							(this.s = new Set()),
							(this.u = new oe()),
							(this.y = []),
							(this.z = !1),
							(this.C = this.D(new ne())),
							(this.F = 0),
							this.D(
								this.P.onWillActivateFileSystemProvider((ke) => {
									ke.scheme !== d.Schemas.vscodeRemote &&
										ke.join(this.activateByEvent(`onFileSystem:${ke.scheme}`));
								}),
							),
							(this.t = new F.$T4c(
								this.m,
								this.I,
								this.M,
								this.U,
								this.X,
								this.W,
							)),
							this.D(
								this.O.onEnablementChanged((ke) => {
									const Ue = [],
										qe = [];
									for (const Ae of ke) this.Fb(Ae) ? Ue.push(Ae) : qe.push(Ae);
									r.$w &&
										this.X.info(
											`AbstractExtensionService.onEnablementChanged fired for ${ke.map((Ae) => Ae.identifier.id).join(", ")}`,
										),
										this.db(new te(Ue, qe));
								}),
							),
							this.D(
								this.R.onDidChangeProfile(({ added: ke, removed: Ue }) => {
									(ke.length || Ue.length) &&
										(r.$w &&
											this.X.info(
												"AbstractExtensionService.onDidChangeProfile fired",
											),
										this.db(new te(ke, Ue)));
								}),
							),
							this.D(
								this.R.onDidEnableExtensions((ke) => {
									ke.length &&
										(r.$w &&
											this.X.info(
												"AbstractExtensionService.onDidEnableExtensions fired",
											),
										this.db(new te(ke, [])));
								}),
							),
							this.D(
								this.R.onDidInstallExtensions((ke) => {
									const Ue = [];
									for (const { local: qe, operation: Ae } of ke)
										qe &&
											qe.isValid &&
											Ae !== p.InstallOperation.Migrate &&
											this.Fb(qe) &&
											Ue.push(qe);
									Ue.length &&
										(r.$w &&
											this.X.info(
												`AbstractExtensionService.onDidInstallExtensions fired for ${Ue.map((qe) => qe.identifier.id).join(", ")}`,
											),
										this.db(new te(Ue, [])));
								}),
							),
							this.D(
								this.R.onDidUninstallExtension((ke) => {
									ke.error ||
										(r.$w &&
											this.X.info(
												`AbstractExtensionService.onDidUninstallExtension fired for ${ke.identifier.id}`,
											),
										this.db(new te([], [ke.identifier.id])));
								}),
							),
							this.D(
								this.$.onWillShutdown((ke) => {
									this.Y.getConnection()
										? ke.join(
												async () => {
													await this.Y.endConnection(),
														await this.tb(),
														this.Y.getConnection()?.dispose();
												},
												{
													id: "join.disconnectRemote",
													label: c.localize(12335, null),
													order: K.WillShutdownJoinerOrder.Last,
												},
											)
										: ke.join(this.tb(), {
												id: "join.stopExtensionHosts",
												label: c.localize(12336, null),
											});
								}),
							);
					}
					cb(ye) {
						return this.C.getByKind(ye);
					}
					async db(ye) {
						if ((this.y.push(ye), this.z)) return;
						let ue = null;
						try {
							for (
								this.z = !0,
									await this.n.wait(),
									ue = await this.m.acquireLock("handleDeltaExtensions");
								this.y.length > 0;
							) {
								const fe = this.y.shift();
								await this.eb(ue, fe.toAdd, fe.toRemove);
							}
						} finally {
							(this.z = !1), ue?.dispose();
						}
					}
					async eb(ye, ue, fe) {
						r.$w &&
							this.X.info(
								`AbstractExtensionService._deltaExtensions: toAdd: [${ue.map((be) => be.identifier.id).join(",")}] toRemove: [${fe.map((be) => (typeof be == "string" ? be : be.identifier.id)).join(",")}]`,
							);
						let me = [];
						for (let be = 0, Ce = fe.length; be < Ce; be++) {
							const Le = fe[be],
								Fe = typeof Le == "string" ? Le : Le.identifier.id,
								Oe = typeof Le == "string" ? null : Le,
								xe = this.m.getExtensionDescription(Fe);
							xe &&
								((Oe && xe.extensionLocation.scheme !== Oe.location.scheme) ||
									(this.canRemoveExtension(xe) && me.push(xe)));
						}
						const ve = [];
						for (let be = 0, Ce = ue.length; be < Ce; be++) {
							const Le = ue[be],
								Fe = (0, x.$y2)(Le, !1);
							Fe && this.hb(Fe, me) && ve.push(Fe);
						}
						if (ve.length === 0 && me.length === 0) return;
						const ge = this.m.deltaExtensions(
							ye,
							ve,
							me.map((be) => be.identifier),
						);
						this.c.fire({ added: ve, removed: me }),
							(me = me.concat(ge.removedDueToLooping)),
							ge.removedDueToLooping.length > 0 &&
								this.L.notify({
									severity: v.Severity.Error,
									message: c.localize(
										12337,
										null,
										ge.removedDueToLooping
											.map((be) => `'${be.identifier.value}'`)
											.join(", "),
									),
								}),
							this.G.updateEnabledApiProposals(ve),
							this.Gb([].concat(ve).concat(me)),
							await this.fb(
								ge.versionId,
								ve,
								me.map((be) => be.identifier),
							),
							await this.ib(ve);
						for (let be = 0; be < ve.length; be++) this.jb(ve[be]);
					}
					async fb(ye, ue, fe) {
						const me = this.t.deltaExtensions(ue, fe),
							ve = this.C.map((ge) => this.gb(ge, ye, ue, fe, me));
						await Promise.all(ve);
					}
					async gb(ye, ue, fe, me, ve) {
						const ge = this.t.filterByExtensionHostManager(fe, ye),
							be = (0, F.$V4c)(
								me,
								ve,
								(Le) => ye.representsRunningLocation(Le),
								{ environmentService: this.M },
							),
							Ce = o.$a2.createActivationEventsMap(fe);
						if (r.$w) {
							const Le = (Oe) => Oe.map((xe) => xe.identifier.value).join(","),
								Fe = (Oe) => Oe.map((xe) => xe.value).join(",");
							this.X.info(
								`AbstractExtensionService: Calling deltaExtensions: toRemove: [${Fe(me)}], toAdd: [${Le(fe)}], myToRemove: [${Fe(be)}], myToAdd: [${Le(ge)}],`,
							);
						}
						await ye.deltaExtensions({
							versionId: ue,
							toRemove: me,
							toAdd: fe,
							addActivationEvents: Ce,
							myToRemove: be,
							myToAdd: ge.map((Le) => Le.identifier),
						});
					}
					canAddExtension(ye) {
						return this.hb(ye, []);
					}
					hb(ye, ue) {
						if (
							this.m.getExtensionDescriptionByIdOrUUID(ye.identifier, ye.id) &&
							!ue.some((Ce) => f.$Gn.equals(ye.identifier, Ce.identifier))
						)
							return !1;
						const me = this.t.readExtensionKinds(ye),
							ve = ye.extensionLocation.scheme === d.Schemas.vscodeRemote;
						return (
							this.I.pickExtensionHostKind(
								ye.identifier,
								me,
								!ve,
								ve,
								O.ExtensionRunningPreference.None,
							) !== null
						);
					}
					canRemoveExtension(ye) {
						const ue = this.m.getExtensionDescription(ye.identifier);
						return !(!ue || this.q.get(ue.identifier)?.activationStarted);
					}
					registerHotfixExtensionsProvider(ye) {
						this.w = ye;
					}
					async ib(ye) {
						this.w && (await this.w(ye));
					}
					async jb(ye) {
						let ue = !1,
							fe = null,
							me = !1;
						const ve = this.j.readActivationEvents(ye);
						for (const ge of ve) {
							if (this.s.has(ge)) {
								(ue = !0), (fe = ge);
								break;
							}
							if (ge === "*") {
								(ue = !0), (fe = ge);
								break;
							}
							if (
								(/^workspaceContains/.test(ge) && (me = !0),
								ge === "onStartupFinished")
							) {
								(ue = !0), (fe = ge);
								break;
							}
						}
						if (ue)
							await Promise.all(
								this.C.map((ge) =>
									ge.activate(ye.identifier, {
										startup: !1,
										extensionId: ye.identifier,
										activationEvent: fe,
									}),
								),
							).then(() => {});
						else if (me) {
							const ge = await this.S.getCompleteWorkspace(),
								be = !!this.M.remoteAuthority,
								Ce = {
									logService: this.X,
									folders: ge.folders.map((Fe) => Fe.uri),
									forceUsingSearch: be,
									exists: (Fe) => this.P.exists(Fe),
									checkExists: (Fe, Oe, xe) =>
										this.J.invokeFunction((He) => (0, G.$7oc)(He, Fe, Oe, xe)),
								},
								Le = await (0, G.$6oc)(Ce, ye);
							if (!Le) return;
							await Promise.all(
								this.C.map((Fe) =>
									Fe.activate(ye.identifier, {
										startup: !1,
										extensionId: ye.identifier,
										activationEvent: Le.activationEvent,
									}),
								),
							).then(() => {});
						}
					}
					async kb() {
						m.mark("code/willLoadExtensions"), this.vb(!0, []);
						const ye = await this.m.acquireLock("_initialize");
						try {
							const ue = await this.Pb();
							this.lb(ye, ue);
							const fe = this.m.getSnapshot();
							for (const me of this.C)
								if (me.startup !== x.ExtensionHostStartup.EagerAutoStart) {
									const ve = this.t.filterByExtensionHostManager(
										fe.extensions,
										me,
									);
									me.start(
										fe.versionId,
										fe.extensions,
										ve.map((ge) => ge.identifier),
									);
								}
						} finally {
							ye.dispose();
						}
						this.ob(), m.mark("code/didLoadExtensions"), await this.mb();
					}
					lb(ye, ue) {
						const {
								allowRemoteExtensionsInLocalWebWorker: fe,
								hasLocalProcess: me,
							} = ue,
							ve = Q(this.X, this.O, this.G, ue.local, !1);
						let ge = Q(this.X, this.O, this.G, ue.remote, !1);
						this.t.initializeRunningLocation(ve, ge), this.vb(!0, []);
						const be = fe
								? this.t.filterByExtensionHostKind(
										ge,
										O.ExtensionHostKind.LocalWebWorker,
									)
								: [],
							Ce = me
								? this.t.filterByExtensionHostKind(
										ve,
										O.ExtensionHostKind.LocalProcess,
									)
								: [],
							Le = this.t.filterByExtensionHostKind(
								ve,
								O.ExtensionHostKind.LocalWebWorker,
							);
						ge = this.t.filterByExtensionHostKind(
							ge,
							O.ExtensionHostKind.Remote,
						);
						for (const xe of be) re(Le, xe.identifier) || Le.push(xe);
						const Fe = ge.concat(Ce).concat(Le),
							Oe = this.m.deltaExtensions(ye, Fe, []);
						Oe.removedDueToLooping.length > 0 &&
							this.L.notify({
								severity: v.Severity.Error,
								message: c.localize(
									12338,
									null,
									Oe.removedDueToLooping
										.map((xe) => `'${xe.identifier.value}'`)
										.join(", "),
								),
							}),
							this.Gb(this.m.getAllExtensionDescriptions());
					}
					async mb() {
						if (
							!this.M.isExtensionDevelopment ||
							!this.M.extensionTestsLocationURI
						)
							return;
						const ye = this.nb(this.M.extensionTestsLocationURI);
						if (!ye) {
							const fe = c.localize(
								12339,
								null,
								this.M.extensionTestsLocationURI.toString(),
							);
							console.error(fe), this.L.error(fe);
							return;
						}
						let ue;
						try {
							(ue = await ye.extensionTestsExecute()),
								r.$w &&
									this.X.info(`Extension host test runner exit code: ${ue}`);
						} catch (fe) {
							r.$w && this.X.error("Extension host test runner error", fe),
								console.error(fe),
								(ue = 1);
						}
						this.Qb(ue);
					}
					nb(ye) {
						let ue = null;
						for (const fe of this.m.getAllExtensionDescriptions())
							if ((0, u.$hh)(ye, fe.extensionLocation)) {
								ue = this.t.getRunningLocation(fe.identifier);
								break;
							}
						return (
							ue === null &&
								(ye.scheme === d.Schemas.vscodeRemote
									? (ue = new z.$h2())
									: (ue = new z.$f2(0))),
							ue !== null ? this.C.getByRunningLocation(ue) : null
						);
					}
					ob() {
						this.n.open(),
							this.a.fire(void 0),
							this.b.fire(
								this.m.getAllExtensionDescriptions().map((ye) => ye.identifier),
							);
					}
					async pb(ye) {
						for (let fe = 1; ; fe++)
							try {
								return this.rb(ye);
							} catch (me) {
								if (
									T.$6l.isNoResolverFound(me) ||
									T.$6l.isNotAvailable(me) ||
									fe >= 5
								)
									throw me;
							}
					}
					async qb() {
						const ye = this.M.remoteAuthority;
						if (ye) {
							this.ab._clearResolvedAuthority(ye);
							try {
								const ue = await this.rb(ye);
								this.ab._setResolvedAuthority(ue.authority, ue.options);
							} catch (ue) {
								this.ab._setResolvedAuthorityError(ye, ue);
							}
						}
					}
					async rb(ye) {
						const ue = (0, T.$7l)(ye),
							fe = a.$le.create(!1);
						this.X.info(`Invoking resolveAuthority(${ue})...`);
						try {
							m.mark(`code/willResolveAuthority/${ue}`);
							const me = await this.Rb(ye);
							return (
								m.mark(`code/didResolveAuthorityOK/${ue}`),
								this.X.info(
									`resolveAuthority(${ue}) returned '${me.authority.connectTo}' after ${fe.elapsed()} ms`,
								),
								me
							);
						} catch (me) {
							throw (
								(m.mark(`code/didResolveAuthorityError/${ue}`),
								this.X.error(
									`resolveAuthority(${ue}) returned an error after ${fe.elapsed()} ms`,
									me,
								),
								me)
							);
						}
					}
					async sb(ye, ue) {
						const fe = this.cb(ye);
						if (fe.length === 0) throw new Error("Cannot resolve authority");
						this.F++;
						const me = await Promise.all(
							fe.map((ge) => ge.resolveAuthority(ue, this.F)),
						);
						let ve = null;
						for (const ge of me) {
							if (ge.type === "ok") return ge.value;
							if (!ve) {
								ve = ge;
								continue;
							}
							const be =
									ve.error.code === T.RemoteAuthorityResolverErrorCode.Unknown,
								Ce =
									ge.error.code === T.RemoteAuthorityResolverErrorCode.Unknown;
							be && !Ce && (ve = ge);
						}
						throw new T.$6l(ve.error.message, ve.error.code, ve.error.detail);
					}
					stopExtensionHosts(ye, ue) {
						return this.ub(ye, ue);
					}
					async tb() {
						const ye = [];
						for (const ue of this.q.values())
							ue.activationStarted && ye.push(ue.id);
						await this.C.stopAllInReverse();
						for (const ue of this.q.values()) ue.clearRuntimeStatus();
						ye.length > 0 && this.b.fire(ye);
					}
					async ub(ye, ue = !1) {
						const fe = [],
							me = new Set();
						this.h.fire({
							reason: ye,
							auto: ue,
							veto(ge, be) {
								fe.push(ge),
									typeof ge == "boolean"
										? ge === !0 && me.add(be)
										: ge
												.then((Ce) => {
													Ce && me.add(be);
												})
												.catch((Ce) => {
													me.add(c.localize(12340, null, be, (0, i.$xj)(Ce)));
												});
							},
						});
						const ve = await (0, y.$G4c)(fe, (ge) => this.X.error(ge));
						if (!ve) await this.tb();
						else if (!ue) {
							const ge = Array.from(me);
							this.X.warn(
								`Extension host was not stopped because of veto (stop reason: ${ye}, veto reason: ${ge.join(", ")})`,
							),
								await this.bb.warn(
									c.localize(12341, null, ye),
									ge.length === 1
										? c.localize(12342, null, ge[0])
										: c.localize(
												12343,
												null,
												ge.join(`
 -`),
											),
								);
						}
						return !ve;
					}
					vb(ye, ue) {
						const fe = [];
						for (let me = 0; me <= this.t.maxLocalProcessAffinity; me++)
							fe.push(new z.$f2(me));
						for (let me = 0; me <= this.t.maxLocalWebWorkerAffinity; me++)
							fe.push(new z.$g2(me));
						fe.push(new z.$h2());
						for (const me of fe) {
							if (this.C.getByRunningLocation(me)) continue;
							const ve = this.wb(me, ye, ue);
							if (ve) {
								const [ge, be] = ve;
								this.C.add(ge, be);
							}
						}
					}
					wb(ye, ue, fe) {
						const me = this.H.createExtensionHost(this.t, ye, ue);
						if (!me) return null;
						const ve = this.xb(me, fe),
							ge = new C.$Zc();
						return (
							ge.add(ve.onDidExit(([be, Ce]) => this.yb(ve, be, Ce))),
							ge.add(
								ve.onDidChangeResponsiveState((be) => {
									this.X.info(
										`Extension host (${ve.friendyName}) is ${be === V.ResponsiveState.Responsive ? "responsive" : "unresponsive"}.`,
									),
										this.g.fire({
											extensionHostKind: ve.kind,
											isResponsive: be === V.ResponsiveState.Responsive,
											getInspectListener: (Ce) => ve.getInspectPort(Ce),
										});
								}),
							),
							[ve, ge]
						);
					}
					xb(ye, ue) {
						const fe = this.Kb(ye);
						return ye.startup === x.ExtensionHostStartup.Lazy && ue.length === 0
							? this.J.createInstance(q.$X4c, ye, fe)
							: this.J.createInstance(B.$R4c, ye, ue, fe);
					}
					yb(ye, ue, fe) {
						if (!(0, R.$Umc)(this.M).isExtensionDevHost) {
							this.zb(ye, ue, fe);
							return;
						}
						this.Qb(ue);
					}
					zb(ye, ue, fe) {
						console.error(
							`Extension host (${ye.friendyName}) terminated unexpectedly. Code: ${ue}, Signal: ${fe}`,
						),
							ye.kind === O.ExtensionHostKind.LocalProcess
								? this.tb()
								: ye.kind === O.ExtensionHostKind.Remote &&
									(fe && this.Bb(ye, fe), this.C.stopOne(ye));
					}
					Ab(ye) {
						return new Promise((ue, fe) => {
							const me = setTimeout(() => {
								fe(new Error("getExtensionHostExitInfo timed out"));
							}, 2e3);
							this.Y.getExtensionHostExitInfo(ye).then((ve) => {
								clearTimeout(me), ue(ve);
							}, fe);
						});
					}
					async Bb(ye, ue) {
						try {
							const fe = await this.Ab(ue);
							fe &&
								this.X.error(
									`Extension host (${ye.friendyName}) terminated unexpectedly with code ${fe.code}.`,
								),
								this.Cb(ye),
								this.u.registerCrash(),
								this.u.shouldAutomaticallyRestart()
									? (this.X.info(
											"Automatically restarting the remote extension host.",
										),
										this.L.status(c.localize(12344, null), { hideAfter: 5e3 }),
										this.vb(!1, Array.from(this.s.keys())))
									: this.L.prompt(v.Severity.Error, c.localize(12345, null), [
											{
												label: c.localize(12346, null),
												run: () => {
													this.vb(!1, Array.from(this.s.keys()));
												},
											},
										]);
						} catch {}
					}
					Cb(ye) {
						const ue = [];
						for (const fe of this.q.values())
							fe.activationStarted &&
								ye.containsExtension(fe.id) &&
								ue.push(fe.id);
						ue.length > 0
							? this.X.error(
									`Extension host (${ye.friendyName}) terminated unexpectedly. The following extensions were running: ${ue.map((fe) => fe.value).join(", ")}`,
								)
							: this.X.error(
									`Extension host (${ye.friendyName}) terminated unexpectedly. No extensions were activated.`,
								);
					}
					async startExtensionHosts(ye) {
						await this.tb(),
							ye && (await this.db(new te(ye.toAdd, ye.toRemove)));
						const ue = await this.m.acquireLock("startExtensionHosts");
						try {
							this.vb(!1, Array.from(this.s.keys()));
							const fe = this.cb(O.ExtensionHostKind.LocalProcess);
							await Promise.all(fe.map((me) => me.ready()));
						} finally {
							ue.dispose();
						}
					}
					activateByEvent(ye, ue = x.ActivationKind.Normal) {
						return this.n.isOpen()
							? (this.s.add(ye),
								this.m.containsActivationEvent(ye) ? this.Db(ye, ue) : Y)
							: (this.s.add(ye),
								ue === x.ActivationKind.Immediate
									? this.Db(ye, ue)
									: this.n.wait().then(() => this.Db(ye, ue)));
					}
					Db(ye, ue) {
						const fe = Promise.all(
							this.C.map((me) => me.activateByEvent(ye, ue)),
						).then(() => {});
						return this.f.fire({ event: ye, activation: fe }), fe;
					}
					activateById(ye, ue) {
						return this._activateById(ye, ue);
					}
					activationEventIsDone(ye) {
						return this.n.isOpen()
							? this.m.containsActivationEvent(ye)
								? this.C.every((ue) => ue.activationEventIsDone(ye))
								: !0
							: !1;
					}
					whenInstalledExtensionsRegistered() {
						return this.n.wait();
					}
					get extensions() {
						return this.m.getAllExtensionDescriptions();
					}
					Eb() {
						return this.n.wait().then(() => this.m.getSnapshot());
					}
					getExtension(ye) {
						return this.n.wait().then(() => this.m.getExtensionDescription(ye));
					}
					readExtensionPointContributions(ye) {
						return this.n.wait().then(() => {
							const ue = this.m.getAllExtensionDescriptions(),
								fe = [];
							for (const me of ue)
								me.contributes &&
									X.call(me.contributes, ye.name) &&
									fe.push(new x.$w2(me, me.contributes[ye.name]));
							return fe;
						});
					}
					getExtensionsStatus() {
						const ye = Object.create(null);
						if (this.m) {
							const ue = this.m.getAllExtensionDescriptions();
							for (const fe of ue) {
								const me = this.q.get(fe.identifier);
								ye[fe.identifier.value] = {
									id: fe.identifier,
									messages: me?.messages ?? [],
									activationStarted: me?.activationStarted ?? !1,
									activationTimes: me?.activationTimes ?? void 0,
									runtimeErrors: me?.runtimeErrors ?? [],
									runningLocation: this.t.getRunningLocation(fe.identifier),
								};
							}
						}
						return ye;
					}
					async getInspectPorts(ye, ue) {
						return (
							await Promise.all(this.cb(ye).map((me) => me.getInspectPort(ue)))
						).filter(h.$tg);
					}
					async setRemoteEnvironment(ye) {
						await this.C.map((ue) => ue.setRemoteEnvironment(ye));
					}
					Fb(ye) {
						try {
							return this.O.isEnabled(ye);
						} catch {
							return !1;
						}
					}
					Gb(ye) {
						const ue = Object.create(null);
						for (const ge of ye)
							if (ge.contributes)
								for (const be in ge.contributes)
									X.call(ge.contributes, be) && (ue[be] = !0);
						const fe = (ge) => this.Ib(ge),
							me = this.m.getAllExtensionDescriptions(),
							ve = H.$n2.getExtensionPoints();
						m.mark("code/willHandleExtensionPoints");
						for (const ge of ve)
							ue[ge.name] &&
								(m.mark(`code/willHandleExtensionPoint/${ge.name}`),
								W.Jb(ge, me, fe),
								m.mark(`code/didHandleExtensionPoint/${ge.name}`));
						m.mark("code/didHandleExtensionPoints");
					}
					Hb(ye) {
						return this.q.has(ye) || this.q.set(ye, new le(ye)), this.q.get(ye);
					}
					Ib(ye) {
						this.Hb(ye.extensionId).addMessage(ye);
						const fe = this.m.getExtensionDescription(ye.extensionId),
							me = `[${ye.extensionId.value}]: ${ye.message}`;
						if (
							(ye.type === v.Severity.Error
								? (fe &&
										fe.isUnderDevelopment &&
										this.L.notify({ severity: v.Severity.Error, message: me }),
									this.X.error(me))
								: ye.type === v.Severity.Warning
									? (fe &&
											fe.isUnderDevelopment &&
											this.L.notify({
												severity: v.Severity.Warning,
												message: me,
											}),
										this.X.warn(me))
									: this.X.info(me),
							ye.extensionId &&
								this.M.isBuilt &&
								!this.M.isExtensionDevelopment)
						) {
							const {
								type: ve,
								extensionId: ge,
								extensionPointId: be,
								message: Ce,
							} = ye;
							this.N.publicLog2("extensionsMessage", {
								type: ve,
								extensionId: ge.value,
								extensionPointId: be,
								message: Ce,
							});
						}
					}
					static Jb(ye, ue, fe) {
						const me = [];
						for (const ve of ue)
							ve.contributes &&
								X.call(ve.contributes, ye.name) &&
								me.push({
									description: ve,
									value: ve.contributes[ye.name],
									collector: new H.$i2(fe, ve, ye.name),
								});
						ye.acceptUsers(me);
					}
					Kb(ye) {
						return {
							_activateById: (ue, fe) => this._activateById(ue, fe),
							_onWillActivateExtension: (ue) => this.Lb(ue, ye.runningLocation),
							_onDidActivateExtension: (ue, fe, me, ve, ge) =>
								this.Mb(ue, fe, me, ve, ge),
							_onDidActivateExtensionError: (ue, fe) => this.Nb(ue, fe),
							_onExtensionRuntimeError: (ue, fe) => this.Ob(ue, fe),
						};
					}
					async _activateById(ye, ue) {
						if (
							!(
								await Promise.all(this.C.map((ve) => ve.activate(ye, ue)))
							).some((ve) => ve)
						)
							throw new Error(`Unknown extension ${ye.value}`);
					}
					Lb(ye, ue) {
						this.t.set(ye, ue), this.Hb(ye).onWillActivate();
					}
					Mb(ye, ue, fe, me, ve) {
						this.Hb(ye).setActivationTimes(new x.$v2(ue, fe, me, ve)),
							this.b.fire([ye]);
					}
					Nb(ye, ue) {
						this.N.publicLog2("extensionActivationError", {
							extensionId: ye.value,
							error: ue.message,
						});
					}
					Ob(ye, ue) {
						this.Hb(ye).addRuntimeError(ue), this.b.fire([ye]);
					}
				});
				(e.$Y4c = ie),
					(e.$Y4c =
						ie =
						W =
							Ne(
								[
									j(3, l.$Li),
									j(4, v.$4N),
									j(5, D.$r8),
									j(6, k.$km),
									j(7, N.$IQb),
									j(8, b.$ll),
									j(9, S.$Bk),
									j(10, N.$GQb),
									j(11, L.$Vi),
									j(12, n.$gj),
									j(13, U.$JSb),
									j(14, $.$ik),
									j(15, J.$$m),
									j(16, P.$bfb),
									j(17, K.$n6),
									j(18, T.$3l),
									j(19, g.$GO),
								],
								ie,
							));
				class ne extends C.$1c {
					constructor() {
						super(...arguments), (this.a = []);
					}
					dispose() {
						for (let ye = this.a.length - 1; ye >= 0; ye--) {
							const ue = this.a[ye];
							ue.extensionHost.disconnect(), ue.dispose();
						}
						(this.a = []), super.dispose();
					}
					add(ye, ue) {
						this.a.push(new ee(ye, ue));
					}
					async stopAllInReverse() {
						for (let ye = this.a.length - 1; ye >= 0; ye--) {
							const ue = this.a[ye];
							await ue.extensionHost.disconnect(), ue.dispose();
						}
						this.a = [];
					}
					async stopOne(ye) {
						const ue = this.a.findIndex((fe) => fe.extensionHost === ye);
						ue >= 0 &&
							(this.a.splice(ue, 1), await ye.disconnect(), ye.dispose());
					}
					getByKind(ye) {
						return this.filter((ue) => ue.kind === ye);
					}
					getByRunningLocation(ye) {
						for (const ue of this.a)
							if (ue.extensionHost.representsRunningLocation(ye))
								return ue.extensionHost;
						return null;
					}
					*[Symbol.iterator]() {
						for (const ye of this.a) yield ye.extensionHost;
					}
					map(ye) {
						return this.a.map((ue) => ye(ue.extensionHost));
					}
					every(ye) {
						return this.a.every((ue) => ye(ue.extensionHost));
					}
					filter(ye) {
						return this.a
							.filter((ue) => ye(ue.extensionHost))
							.map((ue) => ue.extensionHost);
					}
				}
				class ee {
					constructor(ye, ue) {
						(this.extensionHost = ye), (this.disposableStore = ue);
					}
					dispose() {
						this.disposableStore.dispose(), this.extensionHost.dispose();
					}
				}
				class _ {
					constructor(ye, ue, fe, me) {
						(this.local = ye),
							(this.remote = ue),
							(this.hasLocalProcess = fe),
							(this.allowRemoteExtensionsInLocalWebWorker = me);
					}
				}
				e.$Z4c = _;
				class te {
					constructor(ye, ue) {
						(this.toAdd = ye), (this.toRemove = ue);
					}
				}
				function Q($e, ye, ue, fe, me) {
					return ue.updateEnabledApiProposals(fe), Z($e, ye, fe, me);
				}
				function Z($e, ye, ue, fe) {
					const me = [],
						ve = [],
						ge = [];
					for (const Ce of ue)
						Ce.isUnderDevelopment
							? me.push(Ce)
							: (ve.push(Ce), ge.push((0, x.$x2)(Ce)));
					const be = ye.getEnablementStates(ge, fe ? { trusted: !0 } : void 0);
					for (let Ce = 0; Ce < be.length; Ce++)
						ye.isEnabledEnablementState(be[Ce])
							? me.push(ve[Ce])
							: r.$w &&
								$e.info(
									`filterEnabledExtensions: extension '${ve[Ce].identifier.value}' is disabled`,
								);
					return me;
				}
				function se($e, ye, ue, fe) {
					return Z($e, ye, [ue], fe).includes(ue);
				}
				function re($e, ye) {
					for (const ue of $e) if (f.$Gn.equals(ue.identifier, ye)) return !0;
					return !1;
				}
				class le {
					get messages() {
						return this.a;
					}
					get activationTimes() {
						return this.b;
					}
					get runtimeErrors() {
						return this.c;
					}
					get activationStarted() {
						return this.d;
					}
					constructor(ye) {
						(this.id = ye),
							(this.a = []),
							(this.b = null),
							(this.c = []),
							(this.d = !1);
					}
					clearRuntimeStatus() {
						(this.d = !1), (this.b = null), (this.c = []);
					}
					addMessage(ye) {
						this.a.push(ye);
					}
					setActivationTimes(ye) {
						this.b = ye;
					}
					addRuntimeError(ye) {
						this.c.push(ye);
					}
					onWillActivate() {
						this.d = !0;
					}
				}
				e.$44c = le;
				class oe {
					constructor() {
						this.c = [];
					}
					static {
						this.a = 5 * 60 * 1e3;
					}
					static {
						this.b = 3;
					}
					d() {
						const ye = Date.now() - oe.a;
						for (; this.c.length > 0 && this.c[0].timestamp < ye; )
							this.c.shift();
					}
					registerCrash() {
						this.d(), this.c.push({ timestamp: Date.now() });
					}
					shouldAutomaticallyRestart() {
						return this.d(), this.c.length < oe.b;
					}
				}
				e.$54c = oe;
				class ae {
					readActivationEvents(ye) {
						return o.$a2.readActivationEvents(ye);
					}
				}
				e.$64c = ae;
				class pe extends C.$1c {
					constructor() {
						super(...arguments), (this.type = "markdown");
					}
					shouldRender(ye) {
						return !!ye.activationEvents;
					}
					render(ye) {
						const ue = ye.activationEvents || [],
							fe = new E.$cl();
						if (ue.length)
							for (const me of ue)
								fe.appendMarkdown(`- \`${me}\`
`);
						return { data: fe, dispose: () => {} };
					}
				}
				I.$Io
					.as(M.Extensions.ExtensionFeaturesRegistry)
					.registerExtensionFeature({
						id: "activationEvents",
						label: c.localize(12347, null),
						access: { canToggle: !1 },
						renderer: new s.$Ji(pe),
					});
			},
		),
		define(
			de[4394],
			he([
				1, 0, 7, 75, 33, 23, 240, 12, 4, 99, 11, 31, 10, 81, 57, 119, 22, 20, 5,
				34, 110, 40, 41, 62, 604, 211, 951, 438, 327, 32, 25, 174, 78, 157,
				3321, 4393, 698, 517, 1021, 384, 2006, 53, 3322, 3379, 3782, 3453, 87,
				52, 143, 519,
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
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
			) {
				"use strict";
				var Y;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5dd = e.$4dd = void 0),
					(C = mt(C)),
					(m = mt(m));
				let ie = class extends R.$Y4c {
					constructor(
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
						be,
						Ce,
						Le,
						Fe,
						Oe,
						xe,
						He,
						Ke,
						Je,
					) {
						const Te = se.createInstance(H.$W4c),
							Ee = se.createInstance(V.$1dd),
							Ie = new ne(Te, Ee, () => this.Eb(), se, le, ae, fe, ge, Le, ve);
						super(
							Te,
							Ie,
							new te(le, fe, ve),
							se,
							re,
							le,
							oe,
							ae,
							pe,
							$e,
							ye,
							ue,
							fe,
							me,
							ve,
							ge,
							be,
							Ce,
							Le,
							Je,
						),
							(this.Ub = Fe),
							(this.Vb = Oe),
							(this.Wb = xe),
							(this.Xb = He),
							(this.Yb = Ke),
							(this.Tb = new R.$54c()),
							(this.Sb = Ee),
							Ce.when(J.LifecyclePhase.Ready).then(() => {
								(0, t.$egb)(
									i.$Bfb,
									() => {
										this.kb();
									},
									50,
								);
							});
					}
					async Zb() {
						return this.Sb.scannedExtensions;
					}
					zb(se, re, le) {
						const oe = [],
							ae = this.getExtensionsStatus();
						for (const pe of Object.keys(ae)) {
							const $e = ae[pe];
							$e.activationStarted &&
								se.containsExtension($e.id) &&
								oe.push($e.id);
						}
						if (
							(super.zb(se, re, le),
							se.kind === B.ExtensionHostKind.LocalProcess)
						) {
							if (re === U.ExtensionHostExitCode.VersionMismatch) {
								this.L.prompt(l.Severity.Error, m.localize(12443, null), [
									{
										label: m.localize(12444, null),
										run: () => {
											this.J.invokeFunction((pe) => {
												pe.get(K.$asb).restart();
											});
										},
									},
								]);
								return;
							}
							if (
								(this.Cb(se),
								this.ac(re, le, oe),
								this.Tb.registerCrash(),
								this.Tb.shouldAutomaticallyRestart())
							)
								this.X.info("Automatically restarting the extension host."),
									this.L.status(m.localize(12445, null), { hideAfter: 5e3 }),
									this.startExtensionHosts();
							else {
								const pe = [];
								this.M.isBuilt
									? pe.push({
											label: m.localize(12446, null),
											run: () => {
												this.J.invokeFunction(($e) => {
													$e.get(a.$ek).executeCommand(
														"extension.bisect.start",
													);
												});
											},
										})
									: pe.push({
											label: m.localize(12447, null),
											run: () => this.Ub.openDevTools(),
										}),
									pe.push({
										label: m.localize(12448, null),
										run: () => this.startExtensionHosts(),
									}),
									this.M.isBuilt &&
										pe.push({
											label: m.localize(12449, null),
											run: () => {
												this.J.invokeFunction(($e) => {
													$e.get(y.$7rb).open(
														"https://aka.ms/vscode-extension-bisect",
													);
												});
											},
										}),
									this.L.prompt(l.Severity.Error, m.localize(12450, null), pe);
							}
						}
					}
					ac(se, re, le) {
						this.N.publicLog2("extensionHostCrash", {
							code: se,
							signal: re,
							extensionIds: le.map((oe) => oe.value),
						});
						for (const oe of le)
							this.N.publicLog2("extensionHostCrashExtension", {
								code: se,
								signal: re,
								extensionId: oe.value,
							});
					}
					async Rb(se) {
						if (se.indexOf("+") === -1) {
							const { host: le, port: oe } = (0, T.$yn)(se);
							return {
								authority: {
									authority: se,
									connectTo: {
										type: S.RemoteConnectionType.WebSocket,
										host: le,
										port: oe,
									},
									connectionToken: void 0,
								},
							};
						}
						return this.sb(B.ExtensionHostKind.LocalProcess, se);
					}
					async cc(se, re) {
						if (se.indexOf("+") === -1) return re;
						const oe = this.cb(B.ExtensionHostKind.LocalProcess);
						if (oe.length === 0)
							throw new Error("Cannot resolve canonical URI");
						const ae = await Promise.all(
							oe.map((pe) => pe.getCanonicalURI(se, re)),
						);
						for (const pe of ae) if (pe) return pe;
						throw new Error(
							`Cannot get canonical URI because no extension is installed to resolve ${(0, S.$7l)(se)}`,
						);
					}
					async Pb() {
						this.Sb.startScanningExtensions();
						const se = this.M.remoteAuthority;
						let re = null,
							le = [];
						if (se) {
							this.ab._setCanonicalURIProvider(async (pe) => {
								if (pe.scheme !== E.Schemas.vscodeRemote || pe.authority !== se)
									return pe;
								C.mark(`code/willGetCanonicalURI/${(0, S.$7l)(se)}`),
									d.$w &&
										this.X.info(
											`Invoking getCanonicalURI for authority ${(0, S.$7l)(se)}...`,
										);
								try {
									return this.cc(se, pe);
								} finally {
									C.mark(`code/didGetCanonicalURI/${(0, S.$7l)(se)}`),
										d.$w &&
											this.X.info(
												`getCanonicalURI returned for authority ${(0, S.$7l)(se)}.`,
											);
								}
							}),
								d.$w &&
									this.X.info(
										"Starting to wait on IWorkspaceTrustManagementService.workspaceResolved...",
									),
								await this.Yb.workspaceResolved,
								d.$w &&
									this.X.info(
										"Finished waiting on IWorkspaceTrustManagementService.workspaceResolved.",
									);
							let oe;
							try {
								oe = await this.pb(se);
							} catch (pe) {
								return (
									S.$6l.isNoResolverFound(pe)
										? (pe.isHandled = await this.gc(se))
										: S.$6l.isHandled(pe) &&
											console.log(
												"Error handled: Not showing a notification for the error",
											),
									this.ab._setResolvedAuthorityError(se, pe),
									this.ec()
								);
							}
							this.ab._setResolvedAuthority(oe.authority, oe.options),
								this.Wb.setTunnelInformation(oe.tunnelInformation);
							const ae = this.Y.getConnection();
							if (
								(ae &&
									(ae.onDidStateChange(async (pe) => {
										pe.type ===
											v.PersistentConnectionEventType.ConnectionLost &&
											this.ab._clearResolvedAuthority(se);
									}),
									ae.onReconnecting(() => this.qb())),
								([re, le] = await Promise.all([
									this.Y.getEnvironment(),
									this.Z.scanExtensions(),
								])),
								!re)
							)
								return (
									this.L.notify({
										severity: l.Severity.Error,
										message: m.localize(12451, null),
									}),
									this.ec()
								);
							(0, P.$Hq)(
								re.useHostProxy
									? c.ConfigurationScope.APPLICATION
									: c.ConfigurationScope.MACHINE,
							);
						} else this.ab._setCanonicalURIProvider(async (oe) => oe);
						return this.ec(le);
					}
					async ec(se = []) {
						return (
							await this.Yb.workspaceTrustInitialized,
							new R.$Z4c(await this.Zb(), se, !0, !1)
						);
					}
					async Qb(se) {
						await this.tb(),
							this.Y.getConnection()?.dispose(),
							(0, O.$Umc)(this.M).isExtensionDevTestFromCli
								? (d.$w &&
										this.X.info(
											`Asking native host service to exit with code ${se}.`,
										),
									this.Ub.exit(se))
								: this.Ub.closeWindow();
					}
					async gc(se) {
						const re = (0, T.$xn)(se),
							le = this.Q.remoteExtensionTips?.[re],
							oe = this.Q.remoteExtensionTips?.[`open-${re}`];
						if (!le) return !1;
						const ae = (fe) => {
								this.N.publicLog("remoteExtensionRecommendations:popup", {
									userReaction: fe,
									extensionId: pe,
								});
							},
							pe = le.extensionId,
							$e = await this.Zb(),
							ye = $e.filter((fe) => fe.identifier.value === pe)[0],
							ue = $e.filter(
								(fe) => fe.identifier.value === oe?.extensionId,
							)[0];
						if (ye) {
							if (!(0, R.$34c)(this.X, this.O, ye, !1)) {
								const fe = m.localize(12452, null, le.friendlyName);
								this.L.prompt(
									l.Severity.Info,
									fe,
									[
										{
											label: m.localize(12453, null),
											run: async () => {
												ae("enable"),
													await this.O.setEnablement(
														[(0, x.$x2)(ye)],
														N.EnablementState.EnabledGlobally,
													),
													await this.Vb.reload();
											},
										},
									],
									{ sticky: !0, priority: l.NotificationPriority.URGENT },
								);
							}
						} else if (ue) {
							if (!(0, R.$34c)(this.X, this.O, ye, !1)) {
								const fe = m.localize(12454, null, le.friendlyName);
								this.L.prompt(
									l.Severity.Info,
									fe,
									[
										{
											label: m.localize(12455, null),
											run: async () => {
												ae("enable"),
													await this.O.setEnablement(
														[(0, x.$x2)(ue)],
														N.EnablementState.EnabledGlobally,
													),
													await this.Vb.reload();
											},
										},
									],
									{ sticky: !0, priority: l.NotificationPriority.URGENT },
								);
							}
						} else {
							const fe = m.localize(12456, null, le.friendlyName);
							this.L.prompt(
								l.Severity.Info,
								fe,
								[
									{
										label: m.localize(12457, null),
										run: async () => {
											ae("install");
											const [me] = await this.Xb.getExtensions(
												[{ id: pe }],
												w.CancellationToken.None,
											);
											if (me)
												await this.R.installFromGallery(me),
													await this.Vb.reload();
											else if (oe) {
												const [ve] = await this.Xb.getExtensions(
													[{ id: oe.extensionId }],
													w.CancellationToken.None,
												);
												ve
													? (await this.R.installFromGallery(ve),
														await this.Vb.reload())
													: this.L.error(
															m.localize(12458, null, oe.friendlyName),
														);
											} else
												this.L.error(m.localize(12459, null, le.friendlyName));
										},
									},
								],
								{
									sticky: !0,
									priority: l.NotificationPriority.URGENT,
									onCancel: () => ae("cancel"),
								},
							);
						}
						return !0;
					}
				};
				(e.$4dd = ie),
					(e.$4dd = ie =
						Ne(
							[
								j(0, f.$Li),
								j(1, l.$4N),
								j(2, M.$r8),
								j(3, k.$km),
								j(4, N.$IQb),
								j(5, p.$ll),
								j(6, $.$Bk),
								j(7, N.$GQb),
								j(8, L.$Vi),
								j(9, h.$gj),
								j(10, z.$JSb),
								j(11, b.$ik),
								j(12, W.$$m),
								j(13, I.$bfb),
								j(14, J.$n6),
								j(15, S.$3l),
								j(16, s.$y7c),
								j(17, K.$asb),
								j(18, X.$5pc),
								j(19, g.$Ep),
								j(20, D.$pO),
								j(21, n.$GO),
							],
							ie,
						));
				let ne = class {
					constructor(se, re, le, oe, ae, pe, $e, ye, ue, fe) {
						(this.b = se),
							(this.c = re),
							(this.d = le),
							(this.f = oe),
							(this.g = ae),
							(this.h = pe),
							(this.i = ye),
							(this.j = ue),
							(this.l = fe),
							(this.a = ee(ae, $e));
					}
					createExtensionHost(se, re, le) {
						switch (re.kind) {
							case B.ExtensionHostKind.LocalProcess: {
								const oe = le
									? x.ExtensionHostStartup.EagerManualStart
									: x.ExtensionHostStartup.EagerAutoStart;
								return this.f.createInstance(
									G.$3dd,
									re,
									oe,
									this.m(se, le, re),
								);
							}
							case B.ExtensionHostKind.LocalWebWorker: {
								if (this.a !== _.Disabled) {
									const oe = le
										? this.a === _.Lazy
											? x.ExtensionHostStartup.Lazy
											: x.ExtensionHostStartup.EagerManualStart
										: x.ExtensionHostStartup.EagerAutoStart;
									return this.f.createInstance(A.$E4c, re, oe, this.n(se, re));
								}
								return null;
							}
							case B.ExtensionHostKind.Remote: {
								const oe = this.i.getConnection();
								return oe
									? this.f.createInstance(
											q.$74c,
											re,
											this.o(se, oe.remoteAuthority),
										)
									: null;
							}
						}
					}
					m(se, re, le) {
						return {
							getInitData: async () => {
								if (re) {
									const oe = await this.c.scannedExtensions;
									d.$w &&
										this.l.info(
											`NativeExtensionHostFactory._createLocalProcessExtensionHostDataProvider.scannedExtensions: ${oe.map((ue) => ue.identifier.value).join(",")}`,
										);
									const ae = (0, R.$14c)(this.l, this.h, this.b, oe, !0);
									d.$w &&
										this.l.info(
											`NativeExtensionHostFactory._createLocalProcessExtensionHostDataProvider.localExtensions: ${ae.map((ue) => ue.identifier.value).join(",")}`,
										);
									const pe = se.computeRunningLocation(ae, [], !1),
										$e = (0, F.$U4c)(ae, pe, (ue) => le.equals(ue), {
											environmentService: this.g,
										}),
										ye = new x.$s2(
											0,
											ae,
											$e.map((ue) => ue.identifier),
										);
									return (
										d.$w &&
											this.l.info(
												`NativeExtensionHostFactory._createLocalProcessExtensionHostDataProvider.myExtensions: ${$e.map((ue) => ue.identifier.value).join(",")}`,
											),
										{ extensions: ye }
									);
								} else {
									const oe = await this.d(),
										ae = se.filterByRunningLocation(oe.extensions, le);
									return {
										extensions: new x.$s2(
											oe.versionId,
											oe.extensions,
											ae.map(($e) => $e.identifier),
										),
									};
								}
							},
						};
					}
					n(se, re) {
						return {
							getInitData: async () => {
								const le = await this.d(),
									oe = se.filterByRunningLocation(le.extensions, re);
								return {
									extensions: new x.$s2(
										le.versionId,
										le.extensions,
										oe.map((pe) => pe.identifier),
									),
								};
							},
						};
					}
					o(se, re) {
						return {
							remoteAuthority: re,
							getInitData: async () => {
								const le = await this.d(),
									oe = await this.i.getEnvironment();
								if (!oe)
									throw new Error(
										"Cannot provide init data for remote extension host!",
									);
								const ae = se.filterByExtensionHostKind(
										le.extensions,
										B.ExtensionHostKind.Remote,
									),
									pe = new x.$s2(
										le.versionId,
										le.extensions,
										ae.map(($e) => $e.identifier),
									);
								return {
									connectionData: this.j.getConnectionData(re),
									pid: oe.pid,
									appRoot: oe.appRoot,
									rendererPerformanceTimeOrigin: performance.timeOrigin,
									extensionHostLogsPath: oe.extensionHostLogsPath,
									globalStorageHome: oe.globalStorageHome,
									workspaceStorageHome: oe.workspaceStorageHome,
									extensions: pe,
								};
							},
						};
					}
				};
				ne = Ne(
					[
						j(3, f.$Li),
						j(4, M.$r8),
						j(5, N.$IQb),
						j(6, h.$gj),
						j(7, W.$$m),
						j(8, S.$3l),
						j(9, b.$ik),
					],
					ne,
				);
				function ee(Z, se) {
					if (
						Z.isExtensionDevelopment &&
						Z.extensionDevelopmentKind?.some((re) => re === "web")
					)
						return _.Eager;
					{
						const re = se.getValue(x.$p2);
						return re === !0 ? _.Eager : re === "auto" ? _.Lazy : _.Disabled;
					}
				}
				var _;
				(function (Z) {
					(Z[(Z.Disabled = 0)] = "Disabled"),
						(Z[(Z.Eager = 1)] = "Eager"),
						(Z[(Z.Lazy = 2)] = "Lazy");
				})(_ || (_ = {}));
				let te = (Y = class {
					constructor(se, re, le) {
						(this.c = le), (this.a = !!se.remoteAuthority);
						const oe = ee(se, re);
						this.b = oe !== _.Disabled;
					}
					pickExtensionHostKind(se, re, le, oe, ae) {
						const pe = Y.pickExtensionHostKind(re, le, oe, ae, this.a, this.b);
						return (
							this.c.trace(
								`pickRunningLocation for ${se.value}, extension kinds: [${re.join(", ")}], isInstalledLocally: ${le}, isInstalledRemotely: ${oe}, preference: ${(0, B.$d2)(ae)} => ${(0, B.$c2)(pe)}`,
							),
							pe
						);
					}
					static pickExtensionHostKind(se, re, le, oe, ae, pe) {
						const $e = [];
						for (const ye of se) {
							if (ye === "ui" && re) {
								if (
									oe === B.ExtensionRunningPreference.None ||
									oe === B.ExtensionRunningPreference.Local
								)
									return B.ExtensionHostKind.LocalProcess;
								$e.push(B.ExtensionHostKind.LocalProcess);
							}
							if (ye === "workspace" && le) {
								if (
									oe === B.ExtensionRunningPreference.None ||
									oe === B.ExtensionRunningPreference.Remote
								)
									return B.ExtensionHostKind.Remote;
								$e.push(B.ExtensionHostKind.Remote);
							}
							if (ye === "workspace" && !ae) {
								if (
									oe === B.ExtensionRunningPreference.None ||
									oe === B.ExtensionRunningPreference.Local
								)
									return B.ExtensionHostKind.LocalProcess;
								$e.push(B.ExtensionHostKind.LocalProcess);
							}
							if (ye === "web" && re && pe) {
								if (
									oe === B.ExtensionRunningPreference.None ||
									oe === B.ExtensionRunningPreference.Local
								)
									return B.ExtensionHostKind.LocalWebWorker;
								$e.push(B.ExtensionHostKind.LocalWebWorker);
							}
						}
						return $e.length > 0 ? $e[0] : null;
					}
				});
				(e.$5dd = te),
					(e.$5dd = te = Y = Ne([j(0, M.$r8), j(1, h.$gj), j(2, b.$ik)], te));
				class Q extends u.$3X {
					constructor() {
						super({
							id: "workbench.action.restartExtensionHost",
							title: m.localize2(12461, "Restart Extension Host"),
							category: r.$ck.Developer,
							f1: !0,
						});
					}
					async run(se) {
						const re = se.get(x.$q2);
						(await re.stopExtensionHosts(m.localize(12460, null))) &&
							re.startExtensionHosts();
					}
				}
				(0, u.$4X)(Q), (0, o.$lK)(x.$q2, ie, o.InstantiationType.Eager);
			},
		),
		define(
			de[2007],
			he([1, 0, 2, 2, 2, 13, 272, 58, 36, 385, 298, 83]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Pbc = e.$Obc = void 0),
					(e.$Qbc = g),
					(e.$Rbc = p),
					(e.$Sbc = o);
				const h = (0, t.template)(
						'<div><div></div><div>Files to include: <input type="text" placeholder="e.g. *.py,*.js"></div><div>Files to exclude: <input type="text" placeholder="e.g. *.py,*.js">',
					),
					c = (f) => {
						switch (f) {
							case a.EmbeddingModel.VOYAGE_CODE_2:
								return "VoyageCode2";
							case a.EmbeddingModel.TEXT_EMBEDDINGS_LARGE_3:
								return "TextEmbeddingsLarge3";
							case a.EmbeddingModel.QWEN_1_5B_CUSTOM:
								return "Qwen1_5B_Custom";
							case a.EmbeddingModel.UNSPECIFIED:
								return "unspecified";
							default:
								return f;
						}
					};
				e.$Obc = c;
				const n = (f) => {
					switch (f) {
						case "VoyageCode2":
							return a.EmbeddingModel.VOYAGE_CODE_2;
						case "TextEmbeddingsLarge3":
							return a.EmbeddingModel.TEXT_EMBEDDINGS_LARGE_3;
						case "Qwen1_5B_Custom":
							return a.EmbeddingModel.QWEN_1_5B_CUSTOM;
						case "unspecified":
						default:
							return a.EmbeddingModel.UNSPECIFIED;
					}
				};
				e.$Pbc = n;
				function g(f) {
					const b = (0, m.$odc)(),
						s = (0, E.createMemo)(() =>
							typeof f.getContext().usesCodebase == "object"
								? f.getContext().usesCodebase.searchBehavior
								: u.$Tgc,
						),
						l = (0, E.createMemo)(() =>
							typeof f.getContext().usesCodebase == "object"
								? (f.getContext().usesCodebase.options ?? u.$Ugc)
								: u.$Ugc,
						),
						y = (P) => {
							f.setContext("usesCodebase", (k) =>
								typeof k == "object"
									? { ...k, searchBehavior: P }
									: { searchBehavior: P, options: u.$Ugc },
							);
						},
						$ = (P) => {
							f.setContext("usesCodebase", (k) =>
								typeof k == "object"
									? { ...k, options: P }
									: { searchBehavior: u.$Tgc, options: P },
							);
						},
						v = (0, r.$5$b)(d.$yV),
						S = {
							"font-size": "0.6rem",
							display: "flex",
							"align-items": "center",
							gap: "4px",
						},
						I = {
							width: "100px",
							"background-color": "var(--vscode-input-background)",
							color: "var(--vscode-input-foreground)",
							border: "1px solid var(--vscode-settings-dropdownBorder)",
							"border-radius": "5px",
							padding: "2px 4px",
							"font-size": "0.6rem",
						},
						T = (0, E.createMemo)(
							() =>
								b.reactiveStorageService.nonPersistentStorage
									.forceChatDropdownRerender,
						);
					return (() => {
						const P = h(),
							k = P.firstChild,
							L = k.nextSibling,
							D = L.firstChild,
							M = D.nextSibling,
							N = L.nextSibling,
							A = N.firstChild,
							R = A.nextSibling;
						return (
							P.style.setProperty("display", "flex"),
							P.style.setProperty("flex-direction", "column"),
							P.style.setProperty("gap", "5px"),
							(0, w.style)(k, S),
							(0, w.style)(L, S),
							M.addEventListener("input", (O) => {
								f.setCodebaseSearchSettings({
									...f.getCodebaseSearchSettings(),
									filesToInclude: O.target.value,
								});
							}),
							M.addEventListener("keydown", (O) => {
								O.stopImmediatePropagation();
							}),
							(0, w.style)(M, I),
							(0, w.style)(N, S),
							R.addEventListener("input", (O) => {
								f.setCodebaseSearchSettings({
									...f.getCodebaseSearchSettings(),
									filesToExclude: O.target.value,
								});
							}),
							R.addEventListener("keydown", (O) => {
								O.stopImmediatePropagation();
							}),
							(0, w.style)(R, I),
							(0, i.effect)(
								() =>
									(M.value =
										f.getCodebaseSearchSettings()?.filesToInclude ?? ""),
							),
							(0, i.effect)(
								() =>
									(R.value =
										f.getCodebaseSearchSettings()?.filesToExclude ?? ""),
							),
							P
						);
					})();
				}
				function p(f) {
					switch (f) {
						case C.RerankerAlgorithm.GPT_3_5_LOGPROBS:
							return "gpt-3.5-instant";
						case C.RerankerAlgorithm.UMEA:
							return "fast";
						case C.RerankerAlgorithm.LULEA:
							return "smart";
						case C.RerankerAlgorithm.LULEA_HAIKU:
							return "haiku-chain-of-thought";
						case C.RerankerAlgorithm.COHERE:
							return "cohere";
						case C.RerankerAlgorithm.VOYAGE:
							return "voyage";
						case C.RerankerAlgorithm.VOYAGE_EMBEDS:
							return "voyage-embeds";
						case C.RerankerAlgorithm.NONE:
							return "none";
						default:
							return "unknown";
					}
				}
				function o(f) {
					switch (f) {
						case "fast":
							return C.RerankerAlgorithm.UMEA;
						case "smart":
							return C.RerankerAlgorithm.LULEA;
						case "haiku-chain-of-thought":
							return C.RerankerAlgorithm.LULEA_HAIKU;
						case "cohere":
							return C.RerankerAlgorithm.COHERE;
						case "voyage":
							return C.RerankerAlgorithm.VOYAGE;
						case "voyage-embeds":
							return C.RerankerAlgorithm.VOYAGE_EMBEDS;
						case "none":
							return C.RerankerAlgorithm.NONE;
						case "cursor-fast":
							return C.RerankerAlgorithm.STARCODER_V1;
						case "gpt-3.5-instant":
							return C.RerankerAlgorithm.GPT_3_5_LOGPROBS;
						default:
							throw new Error(`Unknown reranker name: ${f}`);
					}
				}
			},
		),
		define(
			de[4395],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 272, 140, 2007, 523, 484, 36]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$6bc = v);
				const g = (0, t.template)(
						"<div><span>Number of results per search:</span><div>",
					),
					p = (0, t.template)(
						'<div><span>Files to include:</span><input type="text" placeholder="e.g. *.py,*.js">',
					),
					o = (0, t.template)(
						'<div><span>Files to exclude:</span><input type="text" placeholder="e.g. *.py,*.js">',
					),
					f = (0, t.template)("<div><span>Reranker:"),
					b = (0, t.template)("<div><span>Reasoning step:"),
					s = (0, t.template)("<div><div><span>Search behavior:"),
					l = {
						numResultsPerSearch: 100,
						includePattern: "",
						excludePattern: "",
						reranker: r.RerankerAlgorithm.LULEA,
						reasoningStep: !1,
					},
					y = [
						{ id: "embeddings", label: "embeddings" },
						{ id: "reranker", label: "reranker" },
					],
					$ = y[0];
				function v(S) {
					const I = (0, n.$odc)(),
						T = (0, m.useContext)(u.$ygc),
						P = (0, m.createMemo)(() => {
							const N = S.getContext();
							return (N.dropdownAdvancedCodebaseSearchBehavior ??
								"embeddings") === "embeddings"
								? null
								: N.dropdownAdvancedCodebaseContextOptions;
						}),
						k = (0, m.createMemo)(() => S.getContext()),
						L = (N) => {
							(k().dropdownAdvancedCodebaseSearchBehavior ?? "embeddings") !==
								"embeddings" &&
								S.setContext("dropdownAdvancedCodebaseContextOptions", N);
						},
						D = (0, m.createMemo)(
							() =>
								I.reactiveStorageService.nonPersistentStorage
									.repositoryIndexingStatus?.case === "synced" ||
								(I.reactiveStorageService.nonPersistentStorage
									.mainLocalRepositoryProgress?.progress ?? 0) > 0.8,
						),
						M = {
							display: "flex",
							"align-items": "center",
							gap: "4px",
							"font-size": "0.65rem",
						};
					return (0, d.createComponent)(m.Show, {
						get when() {
							return S.position;
						},
						children: (N) =>
							(0, d.createComponent)(c.Menu, {
								isRelative: !1,
								get position() {
									return N();
								},
								get close() {
									return S.close;
								},
								width: "auto",
								get anchor() {
									return S.anchor;
								},
								get nonBlockingRoot() {
									return `#${S.nonBlockingRootId}`;
								},
								nonBlockingDirection: "vertical",
								shouldMountInPortal: !0,
								marginToNonBlockingRoot: 6,
								get reactiveCloser() {
									return I.reactiveStorageService.nonPersistentStorage
										.forceChatDropdownRerender;
								},
								style: {
									padding: "6px 8px",
									opacity: "1",
									"background-color": "var(--vscode-editor-background)",
								},
								get children() {
									const A = s(),
										R = A.firstChild,
										O = R.firstChild;
									return (
										A.style.setProperty("display", "flex"),
										A.style.setProperty("flex-direction", "column"),
										A.style.setProperty("gap", "5px"),
										(0, C.style)(R, M),
										(0, w.insert)(
											R,
											(0, d.createComponent)(h.$Mbc, {
												get cannotToggle() {
													return !D();
												},
												buttonStyle: { "font-size": "0.65rem" },
												liStyles: { "font-size": "0.65rem" },
												preventPropagation: !0,
												get value() {
													return (0, E.memo)(() => !!D())()
														? (y.find(
																(B) =>
																	B.id ===
																	k().dropdownAdvancedCodebaseSearchBehavior,
															)?.label ?? "embeddings")
														: $.label;
												},
												get origLabel() {
													return (0, E.memo)(() => !!D())()
														? (y.find(
																(B) =>
																	B.id ===
																	k().dropdownAdvancedCodebaseSearchBehavior,
															)?.label ?? "embeddings")
														: $.label;
												},
												get items() {
													return D() ? y : [$];
												},
												onSelect: (B) => {
													S.setContext(
														"dropdownAdvancedCodebaseSearchBehavior",
														B === "reranker" ? "reranker" : "embeddings",
													);
												},
											}),
											null,
										),
										(0, w.insert)(
											A,
											(0, d.createComponent)(m.Show, {
												get when() {
													return (
														(0, E.memo)(() => !!D())() &&
														k().dropdownAdvancedCodebaseSearchBehavior ===
															"reranker"
													);
												},
												get children() {
													return [
														(() => {
															const B = g(),
																U = B.firstChild,
																z = U.nextSibling;
															return (
																(0, C.style)(B, M),
																z.style.setProperty("display", "inline-block"),
																(0, w.insert)(
																	z,
																	(0, d.createComponent)(h.$Mbc, {
																		buttonStyle: { "font-size": "0.65rem" },
																		liStyles: { "font-size": "0.65rem" },
																		preventPropagation: !0,
																		get origLabel() {
																			return (
																				P()?.numResultsPerSearch.toString() ??
																				l.numResultsPerSearch.toString()
																			);
																		},
																		items: [
																			{ id: "10", label: "10" },
																			{ id: "40", label: "40" },
																			{ id: "100", label: "100 (default)" },
																			{ id: "400", label: "400" },
																			{ id: "1200", label: "1200" },
																		],
																		onSelect: (F) => {
																			const x = P() ?? l;
																			L({
																				...x,
																				numResultsPerSearch: parseInt(F),
																			});
																		},
																		get value() {
																			return (
																				P()?.numResultsPerSearch.toString() ??
																				l.numResultsPerSearch.toString()
																			);
																		},
																	}),
																),
																B
															);
														})(),
														(() => {
															const B = p(),
																U = B.firstChild,
																z = U.nextSibling;
															return (
																(0, C.style)(B, M),
																z.addEventListener("input", (F) => {
																	const x = P() ?? l;
																	L({ ...x, includePattern: F.target.value });
																}),
																z.addEventListener("click", (F) => {
																	F.stopImmediatePropagation(),
																		F.preventDefault(),
																		F.currentTarget.focus();
																}),
																z.style.setProperty("width", "100px"),
																z.style.setProperty(
																	"background-color",
																	"var(--vscode-input-background)",
																),
																z.style.setProperty(
																	"color",
																	"var(--vscode-input-foreground)",
																),
																z.style.setProperty(
																	"border",
																	"1px solid var(--vscode-settings-dropdownBorder)",
																),
																z.style.setProperty("border-radius", "5px"),
																z.style.setProperty("padding", "2px 4px"),
																z.style.setProperty("font-size", "0.65rem"),
																(0, i.effect)(
																	() => (z.value = P()?.includePattern ?? ""),
																),
																B
															);
														})(),
														(() => {
															const B = o(),
																U = B.firstChild,
																z = U.nextSibling;
															return (
																(0, C.style)(B, M),
																z.addEventListener("input", (F) => {
																	const x = P() ?? l;
																	L({ ...x, excludePattern: F.target.value });
																}),
																z.addEventListener("click", (F) => {
																	F.stopImmediatePropagation(),
																		F.preventDefault(),
																		F.currentTarget.focus();
																}),
																z.style.setProperty("width", "100px"),
																z.style.setProperty(
																	"background-color",
																	"var(--vscode-input-background)",
																),
																z.style.setProperty(
																	"color",
																	"var(--vscode-input-foreground)",
																),
																z.style.setProperty(
																	"border",
																	"1px solid var(--vscode-settings-dropdownBorder)",
																),
																z.style.setProperty("border-radius", "5px"),
																z.style.setProperty("padding", "2px 4px"),
																z.style.setProperty("font-size", "0.65rem"),
																(0, i.effect)(
																	() => (z.value = P()?.excludePattern ?? ""),
																),
																B
															);
														})(),
														(() => {
															const B = f(),
																U = B.firstChild;
															return (
																(0, C.style)(B, M),
																(0, w.insert)(
																	B,
																	(0, d.createComponent)(h.$Mbc, {
																		buttonStyle: { "font-size": "0.65rem" },
																		liStyles: { "font-size": "0.65rem" },
																		preventPropagation: !0,
																		get origLabel() {
																			return (0, a.$Rbc)(
																				P()?.reranker ??
																					r.RerankerAlgorithm.LULEA,
																			);
																		},
																		get items() {
																			return [
																				{
																					id: (0, a.$Rbc)(
																						r.RerankerAlgorithm.UMEA,
																					),
																					label: (0, a.$Rbc)(
																						r.RerankerAlgorithm.UMEA,
																					),
																				},
																				{
																					id: (0, a.$Rbc)(
																						r.RerankerAlgorithm.LULEA,
																					),
																					label: (0, a.$Rbc)(
																						r.RerankerAlgorithm.LULEA,
																					),
																				},
																				...(I.reactiveStorageService
																					.applicationUserPersistentStorage
																					.isEvalMode
																					? [
																							{
																								id: (0, a.$Rbc)(
																									r.RerankerAlgorithm.COHERE,
																								),
																								label: (0, a.$Rbc)(
																									r.RerankerAlgorithm.COHERE,
																								),
																							},
																							{
																								id: (0, a.$Rbc)(
																									r.RerankerAlgorithm.COHERE,
																								),
																								label: (0, a.$Rbc)(
																									r.RerankerAlgorithm.COHERE,
																								),
																							},
																							{
																								id: (0, a.$Rbc)(
																									r.RerankerAlgorithm.VOYAGE,
																								),
																								label: (0, a.$Rbc)(
																									r.RerankerAlgorithm.VOYAGE,
																								),
																							},
																							{
																								id: (0, a.$Rbc)(
																									r.RerankerAlgorithm
																										.VOYAGE_EMBEDS,
																								),
																								label: (0, a.$Rbc)(
																									r.RerankerAlgorithm
																										.VOYAGE_EMBEDS,
																								),
																							},
																						]
																					: []),
																				{
																					id: (0, a.$Rbc)(
																						r.RerankerAlgorithm.NONE,
																					),
																					label: (0, a.$Rbc)(
																						r.RerankerAlgorithm.NONE,
																					),
																				},
																			];
																		},
																		onSelect: (z) => {
																			const F = (0, a.$Sbc)(z);
																			L({ ...(P() ?? l), reranker: F });
																		},
																		get value() {
																			return (0, a.$Rbc)(
																				P()?.reranker ??
																					r.RerankerAlgorithm.LULEA,
																			);
																		},
																	}),
																	null,
																),
																B
															);
														})(),
														(() => {
															const B = b(),
																U = B.firstChild;
															return (
																(0, C.style)(B, M),
																(0, w.insert)(
																	B,
																	(0, d.createComponent)(h.$Mbc, {
																		buttonStyle: { "font-size": "0.65rem" },
																		liStyles: { "font-size": "0.65rem" },
																		preventPropagation: !0,
																		origLabel: "no",
																		items: [
																			{ id: "yes", label: "yes" },
																			{ id: "no", label: "no" },
																		],
																		onSelect: (z) => {
																			L({
																				...(P() ?? l),
																				reasoningStep: z === "yes",
																			});
																		},
																		get value() {
																			return P()?.reasoningStep ? "yes" : "no";
																		},
																	}),
																	null,
																),
																B
															);
														})(),
													];
												},
											}),
											null,
										),
										A
									);
								},
							}),
					});
				}
			},
		),
		define(
			de[573],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 14, 26, 36, 156, 9, 23, 160,
				422, 1777, 428, 2539,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ibc = e.$gbc = e.$fbc = e.$ebc = e.PillGenerationStage = void 0),
					(e.$hbc = M);
				const v = (0, t.template)("<span>"),
					S = (0, t.template)('<div tabindex="0"><span>'),
					I = (0, t.template)('<div><img alt="Image preview">'),
					T = (0, t.template)("<div>"),
					P = (0, t.template)('<div tabindex="0"><div>');
				var k;
				(function (R) {
					(R.Using = "using"), (R.WillUse = "will use"), (R.Used = "used");
				})(k || (e.PillGenerationStage = k = {}));
				const L = {
					diff: "Diff of Working State",
					diffToMain: "Diff with Main Branch",
					pr: "Pull Request",
					commit: "Commit",
					web: "Web",
					repo_map: "Repo Map (will be slow!)",
					link: "Link",
					lint: "Lint errors",
					currentFile: "Current file",
					recentFiles: "Recent files",
					atSymbols: "Mentions",
					codebase: "Codebase",
					cursor: "Cursor position",
					image: "Image",
					docs: "Docs",
					nocontext: "No context",
					folder: "Folder",
					file: "File",
					code: "Code",
					pinned: "Pinned",
					mentionedFiles: "Mentioned files",
					contextBank: "Context bank",
					quote: "Quote",
					terminal: "Terminal",
					terminalFile: "Terminal",
					notepad: "Notepad",
					editTrailContext: "Edit trail",
					rememberThis: "Remember This",
				};
				(e.$ebc = {
					selections: "code",
					fileSelections: "file",
					folderSelections: "folder",
					selectedDocs: "docs",
					selectedCommits: "commit",
					selectedPullRequests: "pr",
					terminalSelections: "terminal",
					terminalFiles: "terminalFile",
					quotes: "quote",
					selectedImages: "image",
					gitDiff: "diff",
					gitDiffFromBranchToMain: "diffToMain",
					usesCodebase: "codebase",
					useWeb: "web",
					externalLinks: "link",
					notepads: "notepad",
					useLinterErrors: "lint",
					editTrailContexts: "editTrailContext",
					useDiffReview: "*",
					useContextPicking: "*",
					diffHistory: "*",
					useRememberThis: "rememberThis",
				}),
					(e.$fbc = Object.fromEntries(
						Object.entries(e.$ebc).map(([R, O]) => [O, R]),
					));
				const D = {
					diff: n.$ak.diff,
					diffToMain: n.$ak.diff,
					pr: n.$ak.gitPullRequest,
					repo_map: n.$ak.map,
					commit: n.$ak.gitCommit,
					lint: n.$ak.warning,
					image: n.$ak.paintcan,
					currentFile: n.$ak.file,
					recentFiles: n.$ak.history,
					atSymbols: "@",
					codebase: n.$ak.repo,
					docs: n.$ak.book,
					cursor: n.$ak.search,
					nocontext: "",
					link: n.$ak.link,
					folder: n.$ak.folderActive,
					pinned: n.$ak.pinned,
					file: n.$ak.file,
					code: n.$ak.code,
					web: n.$ak.globe,
					mentionedFiles: n.$ak.fileSymlinkFile,
					contextBank: n.$ak.library,
					quote: n.$ak.quote,
					terminal: n.$ak.terminal,
					terminalFile: n.$ak.terminal,
					gitGraphFileSuggestion: n.$ak.file,
					notepad: n.$ak.book,
					editTrailContext: n.$ak.history,
					rememberThis: n.$ak.bookmark,
					"*": "",
				};
				e.$gbc = { gitGraphFileSuggestion: "Suggested (Click to add)" };
				function M(R) {
					let O;
					return (
						(0, c.createEffect)(() => {
							R.isSelected && !R.disableFocusOnSelect && O?.focus();
						}),
						(() => {
							const B = S(),
								U = B.firstChild;
							return (
								B.addEventListener("mouseleave", (z) => R.onMouseLeave?.(z)),
								B.addEventListener("mouseenter", (z) => R.onMouseEnter?.(z)),
								B.addEventListener("click", (z) => R.onClick(z)),
								(0, h.use)((z) => {
									(O = z), R.setDomRef(z);
								}, B),
								U.style.setProperty("font-size", "10px"),
								U.style.setProperty(
									"color",
									"var(--vscode-input-placeholderForeground)",
								),
								(0, a.insert)(
									B,
									(0, u.createComponent)(c.Show, {
										get when() {
											return R.label;
										},
										get children() {
											const z = v();
											return (
												z.style.setProperty(
													"color",
													"var(--vscode-input-placeholderForeground)",
												),
												z.style.setProperty("font-size", "12px"),
												z.style.setProperty("margin-inline", "4px"),
												(0, a.insert)(z, () => R.label),
												z
											);
										},
									}),
									null,
								),
								(0, r.effect)(
									(z) => {
										const F = R.id,
											x = `premium-pill premium-pill-default ${R.isSelected ? "premium-pill-selected" : ""}`,
											H = {
												cursor: "pointer",
												display: "flex",
												"align-items": "center",
												"justify-content": "center",
												padding: "2px 2px",
												height: "18px",
												width: R.label ? "auto" : "18px",
												"box-sizing": "border-box",
												"border-radius": "3px",
												border: R.isSelected
													? "1px solid var(--vscode-editorGutter-modifiedBackground)"
													: "1px solid var(--vscode-list-inactiveSelectionBackground)",
												outline: "none",
												"flex-shrink": 0,
												...R.style,
											},
											q = g.ThemeIcon.asClassName(n.$ak.add),
											V = R.label ? "1px" : "0px";
										return (
											F !== z._v$ && (0, m.setAttribute)(B, "id", (z._v$ = F)),
											x !== z._v$2 && (0, d.className)(B, (z._v$2 = x)),
											(z._v$3 = (0, C.style)(B, H, z._v$3)),
											q !== z._v$4 && (0, d.className)(U, (z._v$4 = q)),
											V !== z._v$5 &&
												((z._v$5 = V) != null
													? U.style.setProperty("padding-left", V)
													: U.style.removeProperty("padding-left")),
											z
										);
									},
									{
										_v$: void 0,
										_v$2: void 0,
										_v$3: void 0,
										_v$4: void 0,
										_v$5: void 0,
									},
								),
								B
							);
						})()
					);
				}
				const N = (R) => {
					const O = (0, p.$odc)(),
						{ showHover: B, hideHover: U } = A(),
						{ showHover: z, hideHover: F } = A({ delay: 800 }),
						x = () => {
							R.onClick && R.onClick();
						};
					let H;
					(0, c.createEffect)(() => {
						R.isSelected && H?.focus();
					});
					const q = (0, c.createMemo)(() => {
							if (R.type !== "image" || !R.data) return "";
							const W = R.data;
							if (!W.path) return "";
							const X = f.URI.file(W.path);
							return b.$7g.uriToBrowserUri(X).toString();
						}),
						[V, G] = (0, c.createSignal)(!0);
					(0, c.createEffect)(() => {
						if (R.type !== "image" || !R.data) return;
						const W = R.data;
						if (!W.path) return;
						const X = f.URI.file(W.path);
						O.fileService
							.exists(X)
							.then((Y) => {
								G(Y);
							})
							.catch(() => {
								G(!1);
							});
					});
					const K = (0, c.createMemo)(
							() =>
								R.hideTypeTitle && !R.hoverText && !R.extraString && L[R.type],
						),
						J = (0, $.$b$b)();
					return (() => {
						const W = P(),
							X = W.firstChild,
							Y = H;
						return (
							typeof Y == "function" ? (0, h.use)(Y, W) : (H = W),
							(0, w.spread)(
								W,
								(0, E.mergeProps)(
									{
										get id() {
											return R.id;
										},
										get style() {
											return {
												display: "inline-flex",
												"max-width": "100%",
												overflow: "hidden",
												"white-space": "nowrap",
												"text-overflow": "ellipsis",
												"flex-shrink": 0,
												position: "relative",
												outline: "none",
												...R.style,
											};
										},
									},
									() =>
										(e.$gbc[R.type] || R.hoverText) && !R.isLoading
											? {
													onMouseEnter: (ie) =>
														R.hoverText
															? z(ie, R.hoverText)
															: B(ie, e.$gbc[R.type]),
													onMouseLeave: R.hoverText ? F : U,
												}
											: {},
								),
								!1,
								!0,
							),
							X.addEventListener("click", x),
							(0, w.spread)(
								X,
								(0, E.mergeProps)(
									{
										get class() {
											return `context-pill context-pill-default ${R.isSelected ? "context-pill-selected" : ""}`;
										},
										get style() {
											return {
												cursor: R.isLoading
													? "not-allowed"
													: R.onClick
														? "pointer"
														: "default",
												border: R.isSelected
													? R.type === "gitGraphFileSuggestion"
														? "1px dashed var(--vscode-editorGutter-modifiedBackground)"
														: "1px solid var(--vscode-editorGutter-modifiedBackground)"
													: R.type === "gitGraphFileSuggestion"
														? "1px dashed var(--vscode-list-inactiveSelectionBackground)"
														: "1px solid var(--vscode-list-inactiveSelectionBackground)",
												background:
													(R.type === "gitGraphFileSuggestion",
													"var(--vscode-editor-background)"),
												"border-style":
													R.type === "gitGraphFileSuggestion"
														? "dashed"
														: "solid",
												transition: "opacity 0.2s",
												opacity:
													(R.type === "gitGraphFileSuggestion" &&
														!R.isSelected) ||
													R.willBeOmitted
														? "0.6"
														: "1",
											};
										},
									},
									() =>
										K()
											? {
													onMouseEnter: (ie) => B(ie, L[R.type]),
													onMouseLeave: U,
												}
											: {},
								),
								!1,
								!0,
							),
							(0, a.insert)(
								X,
								(0, u.createComponent)(c.Show, {
									get when() {
										return R.type === "image";
									},
									get fallback() {
										return [
											(0, u.createComponent)(c.Show, {
												get when() {
													return (
														R.type === "file" ||
														R.type === "code" ||
														R.type === "currentFile" ||
														R.type === "gitGraphFileSuggestion"
													);
												},
												get fallback() {
													return (0, u.createComponent)(c.Show, {
														get when() {
															return R.iconOverride || D[R.type];
														},
														get children() {
															const ie = T();
															return (
																ie.style.setProperty("font-size", "10px"),
																(0, a.insert)(
																	ie,
																	(0, u.createComponent)(c.Show, {
																		get when() {
																			return (
																				typeof D[R.type] == "string" &&
																				!R.iconOverride
																			);
																		},
																		get children() {
																			return D[R.type];
																		},
																	}),
																),
																(0, r.effect)(() =>
																	(0, d.className)(
																		ie,
																		R.iconOverride
																			? g.ThemeIcon.asClassName(R.iconOverride)
																			: typeof D[R.type] != "string"
																				? g.ThemeIcon.asClassName(D[R.type])
																				: "",
																	),
																),
																ie
															);
														},
													});
												},
												get children() {
													return (0, u.createComponent)(c.Show, {
														get when() {
															return J();
														},
														get children() {
															const ie = T();
															return (
																ie.style.setProperty("margin-left", "-4px"),
																ie.style.setProperty("margin-right", "-4px"),
																ie.style.setProperty("scale", "0.8"),
																(0, a.insert)(
																	ie,
																	(0, u.createComponent)(o.$k$b, {
																		get fileName() {
																			return R.fileName || "";
																		},
																		get workspaceContextService() {
																			return O.workspaceContextService;
																		},
																		get modelService() {
																			return O.modelService;
																		},
																		get languageService() {
																			return O.languageService;
																		},
																	}),
																),
																ie
															);
														},
													});
												},
											}),
											(0, u.createComponent)(c.Show, {
												get when() {
													return (
														R.extraString === void 0 || R.extraString === ""
													);
												},
												get fallback() {
													return [
														(() => {
															const ie = T();
															return (
																ie.style.setProperty("flex-shrink", "0"),
																(0, a.insert)(
																	ie,
																	(() => {
																		const ne = (0, i.memo)(
																			() =>
																				typeof R.extraString == "string" &&
																				(R.extraString ?? "").length >
																					(R.extraStringCutoff ?? y.$cbc),
																		);
																		return () =>
																			ne()
																				? (R.extraString ?? "").substring(
																						0,
																						R.extraStringCutoff ?? y.$cbc,
																					) + "..."
																				: R.extraString;
																	})(),
																),
																(0, r.effect)(() =>
																	(R.type === "gitGraphFileSuggestion" &&
																	!R.isSelected
																		? "var(--vscode-input-placeholderForeground)"
																		: "var(--vscode-editor-foreground)") != null
																		? ie.style.setProperty(
																				"color",
																				R.type === "gitGraphFileSuggestion" &&
																					!R.isSelected
																					? "var(--vscode-input-placeholderForeground)"
																					: "var(--vscode-editor-foreground)",
																			)
																		: ie.style.removeProperty("color"),
																),
																ie
															);
														})(),
														(0, u.createComponent)(c.Show, {
															get when() {
																return (
																	!R.hideTypeTitle &&
																	(R.secondaryTextOverride || L[R.type])
																);
															},
															get children() {
																const ie = T();
																return (
																	ie.style.setProperty(
																		"color",
																		"var(--vscode-input-placeholderForeground)",
																	),
																	ie.style.setProperty("flex-shrink", "0"),
																	ie.style.setProperty("overflow", "hidden"),
																	ie.style.setProperty("white-space", "nowrap"),
																	ie.style.setProperty(
																		"text-overflow",
																		"ellipsis",
																	),
																	(0, a.insert)(
																		ie,
																		() =>
																			R.secondaryTextOverride ||
																			(R.type === "file" &&
																			R.data?.isCurrentFile
																				? "Current File"
																				: L[R.type]),
																	),
																	ie
																);
															},
														}),
													];
												},
												get children() {
													return (0, u.createComponent)(c.Show, {
														get when() {
															return !R.hideTypeTitle;
														},
														get children() {
															const ie = T();
															return (
																(0, a.insert)(
																	ie,
																	() => R.secondaryTextOverride || L[R.type],
																),
																ie
															);
														},
													});
												},
											}),
											(0, u.createComponent)(c.Show, {
												get when() {
													return (
														R.onRemove && R.type !== "gitGraphFileSuggestion"
													);
												},
												get children() {
													const ie = T();
													return (
														ie.addEventListener("click", (ne) => {
															ne.stopPropagation(), R.onRemove?.();
														}),
														ie.style.setProperty("font-size", "10px"),
														ie.style.setProperty("cursor", "pointer"),
														(0, r.effect)(() =>
															(0, d.className)(
																ie,
																g.ThemeIcon.asClassName(n.$ak.close),
															),
														),
														ie
													);
												},
											}),
											(0, u.createComponent)(c.Show, {
												get when() {
													return R.type === "gitGraphFileSuggestion";
												},
												get children() {
													return (0, u.createComponent)(c.Show, {
														get when() {
															return R.keyboardHint;
														},
														get children() {
															const ie = T();
															return (
																ie.style.setProperty(
																	"color",
																	"var(--vscode-editorWarning-foreground)",
																),
																ie.style.setProperty("font-size", "8px"),
																(0, a.insert)(ie, () => R.keyboardHint),
																ie
															);
														},
													});
												},
											}),
										];
									},
									get children() {
										return [
											(() => {
												const ie = I(),
													ne = ie.firstChild;
												return (
													ie.style.setProperty("width", "10px"),
													ie.style.setProperty("height", "10px"),
													ie.style.setProperty("border-radius", "2px"),
													ie.style.setProperty("overflow", "hidden"),
													ie.style.setProperty("display", "flex"),
													ie.style.setProperty("justify-content", "center"),
													ie.style.setProperty("align-items", "center"),
													ne.style.setProperty("width", "100%"),
													ne.style.setProperty("height", "100%"),
													ne.style.setProperty("object-fit", "cover"),
													(0, r.effect)(() =>
														(0, m.setAttribute)(
															ne,
															"src",
															V() ? `${q()}?t=${R.data.loadedAt}` : "",
														),
													),
													ie
												);
											})(),
											(0, u.createComponent)(c.Show, {
												get when() {
													return !R.hideTypeTitle;
												},
												get children() {
													const ie = T();
													return (
														(0, a.insert)(
															ie,
															() => R.secondaryTextOverride || L[R.type],
														),
														ie
													);
												},
											}),
											(0, u.createComponent)(c.Show, {
												get when() {
													return R.onRemove;
												},
												get children() {
													const ie = T();
													return (
														ie.addEventListener("click", (ne) => {
															ne.stopPropagation(), R.onRemove?.();
														}),
														ie.style.setProperty("font-size", "10px"),
														ie.style.setProperty("cursor", "pointer"),
														(0, r.effect)(() =>
															(0, d.className)(
																ie,
																g.ThemeIcon.asClassName(n.$ak.close),
															),
														),
														ie
													);
												},
											}),
										];
									},
								}),
								null,
							),
							(0, a.insert)(
								X,
								(0, u.createComponent)(c.Show, {
									get when() {
										return R.rightElement;
									},
									get children() {
										const ie = T();
										return (
											ie.style.setProperty("display", "flex"),
											ie.style.setProperty("align-items", "center"),
											(0, a.insert)(ie, () => R.rightElement),
											ie
										);
									},
								}),
								null,
							),
							W
						);
					})();
				};
				e.$ibc = N;
				function A({
					position: R = s.HoverPosition.ABOVE,
					delay: O = 300,
				} = {}) {
					const { showHover: B, hideHover: U } = (0, l.$z$b)(O);
					return {
						showHover: (F, x) => {
							B({
								target: F.currentTarget,
								appearance: { compact: !0 },
								content: x,
								position: { hoverPosition: R },
								additionalClasses: ["chat-hover-tooltip"],
							});
						},
						hideHover: U,
					};
				}
			},
		),
		define(
			de[4396],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 140, 36, 573, 54, 135, 26, 14, 694, 299]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$gcc = s);
				const f = (0, t.template)("<div>"),
					b = (0, t.template)("<div><div></div><div>");
				function s() {
					const { chatData: y } = (0, r.$zgc)(),
						$ = (0, u.$odc)(),
						{ showHover: v, hideHover: S } = (0, p.$G$b)(),
						I = (0, m.createMemo)(() => [
							...y.pinnedContexts.fileSelections.map(l("file", $)),
							...y.pinnedContexts.codeSelections.map(l("code", $)),
						]);
					return (0, C.createComponent)(m.Show, {
						get when() {
							return I().length > 0;
						},
						get children() {
							const T = b(),
								P = T.firstChild,
								k = P.nextSibling;
							return (
								T.style.setProperty("box-sizing", "border-box"),
								T.style.setProperty("margin", "4px 10px"),
								T.style.setProperty(
									"background-color",
									"var(--vscode-input-background)",
								),
								T.style.setProperty("border-radius", "0.25rem"),
								T.style.setProperty(
									"border",
									"solid 1px var(--vscode-input-border,transparent)",
								),
								T.style.setProperty("display", "flex"),
								T.style.setProperty("padding", "4px"),
								T.style.setProperty("align-items", "center"),
								T.style.setProperty("gap", "4px"),
								(0, d.addEventListener)(P, "mouseleave", S),
								P.addEventListener("mouseenter", (L) =>
									v(L, "Pinned Contexts"),
								),
								P.style.setProperty("font-size", "14px"),
								P.style.setProperty("transform", "rotate(-45deg)"),
								P.style.setProperty(
									"color",
									"var(--vscode-input-placeholderForeground)",
								),
								k.style.setProperty("flex", "1"),
								k.style.setProperty("overflow", "hidden"),
								k.style.setProperty("height", "20px"),
								(0, E.insert)(
									k,
									(0, C.createComponent)(c.$w0b, {
										style: { height: "100%" },
										scrollingDirection: "horizontal",
										nonReactiveElementOptions: {
											horizontalScrollbarSize: 8,
											verticalScrollbarSize: 0,
										},
										get children() {
											const L = f();
											return (
												L.style.setProperty("display", "flex"),
												L.style.setProperty("height", "100%"),
												L.style.setProperty("align-items", "center"),
												L.style.setProperty("gap", "4px"),
												(0, E.insert)(
													L,
													(0, C.createComponent)(m.For, {
														get each() {
															return I();
														},
														children: (D) => (0, C.createComponent)(a.$ibc, D),
													}),
												),
												L
											);
										},
									}),
								),
								(0, w.effect)(() =>
									(0, i.className)(P, n.ThemeIcon.asClassName(g.$ak.pin)),
								),
								T
							);
						},
					});
				}
				const l = (y, $) => (v) => ({
					type: y,
					data: { ...v, isCurrentFile: !1 },
					onRemove: () => {
						$.aiChatService.removePinnedContext({ type: y, data: v });
					},
					onClick: () => {
						(0, o.$9gc)($, {
							filePathOrUri: v.uri.path ?? "",
							selection:
								"range" in v
									? {
											startLineNumber: v.range.selectionStartLineNumber,
											startColumn: v.range.selectionStartColumn,
											endLineNumber: v.range.positionLineNumber,
											endColumn: v.range.positionColumn,
										}
									: void 0,
						});
					},
					fileName: v.uri.path,
					extraString: (0, h.$sc)(v.uri.path ?? ""),
				});
			},
		),
		define(
			de[4397],
			he([1, 0, 2, 2, 2, 13, 262, 573, 3205]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerCapabilitiesMessage = u);
				const r = (0, t.template)("<div>");
				function u(a) {
					const h = (0, E.createMemo)(() => a.status ?? []),
						c = (0, E.createMemo)(() =>
							h().some((n) => n.status === "generating"),
						);
					return (() => {
						const n = r();
						return (
							n.style.setProperty("display", "flex"),
							n.style.setProperty("align-items", "center"),
							n.style.setProperty("flex-wrap", "wrap"),
							n.style.setProperty("gap", "4px"),
							(0, i.insert)(
								n,
								(0, w.createComponent)(E.For, {
									get each() {
										return h();
									},
									children: (g) =>
										(0, w.createComponent)(d.$ibc, {
											type: "*",
											get extraString() {
												return C.capabilityTypeLabels[g.type];
											},
											get iconOverride() {
												return C.capabilityTypeIcons[g.type];
											},
											get rightElement() {
												return (0, w.createComponent)(
													m.ComposerConstantSizeStatusIndicator,
													{
														get status() {
															return g.status === "completed"
																? "accepted"
																: g.status;
														},
													},
												);
											},
										}),
								}),
							),
							n
						);
					})();
				}
			},
		),
		define(
			de[2008],
			he([1, 0, 2, 13, 36, 4397, 177]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerCapabilityMessageRenderer = void 0);
				const d = (m) => {
					const r = (0, w.$odc)(),
						{ composerDataService: u } = r,
						{ composerDataHandle: a, currentComposer: h } = (0,
						C.useComposerDataHandle)(() => m.composerDataHandle),
						c = (0, i.createMemo)(() => m.process),
						n = (0, i.createMemo)(() => {
							const g = [],
								p = [],
								o = m.statuses;
							for (const f of o) {
								const b = u.getComposerCapability(h().composerId, f.type);
								let s;
								if (b) {
									switch (c()) {
										case "start-submit-chat":
											s = b.renderStartSubmitChat?.();
											break;
										case "before-submit-chat":
											s = b.renderBeforeSubmitChat?.();
											break;
										case "after-submit-chat":
											s = b.renderAfterSubmitChat?.();
											break;
										case "composer-settled":
											s = b.renderComposerSettled?.();
											break;
										case "composer-done":
											s = b.renderComposerDone?.();
											break;
										case "mutate-request":
											s = b.renderMutateRequest?.();
											break;
									}
									if (s) {
										p.push([s, f]);
										continue;
									}
								}
								g.push(f);
							}
							return [g, p];
						});
					return [
						(0, t.createComponent)(i.Show, {
							get when() {
								return n()[0];
							},
							children: (g) =>
								(0, t.createComponent)(E.ComposerCapabilitiesMessage, {
									get status() {
										return g();
									},
								}),
						}),
						(0, t.createComponent)(i.Show, {
							get when() {
								return n()[1];
							},
							children: (g) =>
								(0, t.createComponent)(i.For, {
									get each() {
										return g();
									},
									children: (p) => {
										const o = p[0];
										return (0, t.createComponent)(o, {
											get composerDataHandle() {
												return a();
											},
											get bubbleId() {
												return m.bubbleId;
											},
											get status() {
												return p[1];
											},
											get location() {
												return m.location;
											},
										});
									},
								}),
						}),
					];
				};
				e.ComposerCapabilityMessageRenderer = d;
			},
		),
		define(
			de[4398],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 225, 13, 36, 1975, 26, 14, 338, 1378,
				1379, 1974, 4285, 4287, 169, 4286, 2008, 126, 242, 177, 1370, 270, 58,
				216, 167, 311,
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
					(e.ComposerAiMessage = void 0);
				const A = (0, t.template)("<div>No code block found"),
					R = (0, t.template)("<div>"),
					O = (0, t.template)('<div class="cursor-pointer ml-2 mt-1"><div>'),
					B = (0, t.template)("<span>"),
					U = (0, t.template)("<div>hi");
				function z() {
					var V =
							typeof SuppressedError == "function"
								? SuppressedError
								: function (W, X) {
										var Y = Error();
										return (
											(Y.name = "SuppressedError"),
											(Y.error = W),
											(Y.suppressed = X),
											Y
										);
									},
						G = {},
						K = [];
					function J(W, X) {
						if (X != null) {
							if (Object(X) !== X)
								throw new TypeError(
									"using declarations can only be used with objects, functions, null, or undefined.",
								);
							if (W)
								var Y =
									X[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
							if (
								Y === void 0 &&
								((Y = X[Symbol.dispose || Symbol.for("Symbol.dispose")]), W)
							)
								var ie = Y;
							if (typeof Y != "function")
								throw new TypeError("Object is not disposable.");
							ie &&
								(Y = function () {
									try {
										ie.call(X);
									} catch (ne) {
										return Promise.reject(ne);
									}
								}),
								K.push({ v: X, d: Y, a: W });
						} else W && K.push({ d: X, a: W });
						return X;
					}
					return {
						e: G,
						u: J.bind(null, !1),
						a: J.bind(null, !0),
						d: function () {
							var W,
								X = this.e,
								Y = 0;
							function ie() {
								for (; (W = K.pop()); )
									try {
										if (!W.a && Y === 1)
											return (Y = 0), K.push(W), Promise.resolve().then(ie);
										if (W.d) {
											var ee = W.d.call(W.v);
											if (W.a)
												return (Y |= 2), Promise.resolve(ee).then(ie, ne);
										} else Y |= 1;
									} catch (_) {
										return ne(_);
									}
								if (Y === 1)
									return X !== G ? Promise.reject(X) : Promise.resolve();
								if (X !== G) throw X;
							}
							function ne(ee) {
								return (X = X !== G ? new V(ee, X) : ee), ie();
							}
							return ie();
						},
					};
				}
				const F = () => A(),
					x = 6,
					H = 10,
					q = (V) => {
						try {
							var G = z();
							const K = G.u((0, D.span)("ComposerAiMessage")),
								J = (0, h.$odc)(),
								{ composerDataService: W, composerService: X } = J,
								{
									currentComposer: Y,
									forceMode: ie,
									composerDataHandle: ne,
									updateCurrentComposer: ee,
								} = (0, T.useComposerDataHandle)(() => V.composerDataHandle),
								_ = (0, a.createMemo)(() => V.message, void 0, {
									equals: (Le, Fe) => Le === Fe,
								}),
								te = (0, a.createMemo)(() => Y().status === "generating"),
								Q = (0, a.createMemo)(() => Y().conversation[V.index() - 1]),
								[Z, se] = (0, a.createSignal)(!0),
								re = (0, a.createMemo)(() => {
									try {
										var Le = z();
										const Fe = Le.u(
												(0, D.span)("afterSubmitChatCapabilityMessage"),
											),
											Oe = _().capabilityStatuses;
										return !Oe ||
											!Oe["after-submit-chat"] ||
											Oe["after-submit-chat"].length === 0
											? void 0
											: Oe["after-submit-chat"];
									} catch (Fe) {
										Le.e = Fe;
									} finally {
										Le.d();
									}
								}),
								le = (0, a.createMemo)(() => {
									try {
										var Le = z();
										const Fe = Le.u(
												(0, D.span)("onComposerSettledCapabilityMessage"),
											),
											Oe = _().capabilityStatuses;
										return !Oe ||
											!Oe["composer-settled"] ||
											Oe["composer-settled"].length === 0
											? void 0
											: Oe["composer-settled"];
									} catch (Fe) {
										Le.e = Fe;
									} finally {
										Le.d();
									}
								}),
								oe = (0, a.createMemo)(() => {
									try {
										var Le = z();
										const Fe = Le.u(
												(0, D.span)("onComposerDoneCapabilityMessage"),
											),
											Oe = _().capabilityStatuses;
										return !Oe ||
											!Oe["composer-done"] ||
											Oe["composer-done"].length === 0
											? void 0
											: Oe["composer-done"];
									} catch (Fe) {
										Le.e = Fe;
									} finally {
										Le.d();
									}
								}),
								ae = (Le) =>
									Le > 2e3 ? `${(Le / 1e3).toFixed(2)}s` : `${Le.toFixed(0)}ms`,
								pe = (Le) => {
									if (
										!Le.clientStartTime ||
										!Le.clientRpcSendTime ||
										!Le.serverStartTime ||
										!Le.serverRequestSentTime ||
										!Le.serverFirstTokenTime ||
										!Le.serverEndTime ||
										!Le.clientEndTime ||
										!Le.clientSettleTime
									)
										return (
											`Incomplete timing info:
` + JSON.stringify(Le, null, 2)
										);
									const Fe = Le.clientRpcSendTime - Le.clientStartTime,
										Oe = Le.serverRequestSentTime - Le.serverStartTime,
										xe = Le.serverFirstTokenTime - Le.serverRequestSentTime,
										He = Le.serverEndTime - Le.serverFirstTokenTime,
										Ke = Le.clientSettleTime - Le.clientEndTime;
									return `Client prep: ${ae(Fe)}, Server processing: ${ae(Oe)}, Server TTFT: ${ae(xe)}, Stream: ${ae(He)}, Apply: ${ae(Ke)}`;
								},
								$e = (0, a.createMemo)(() => {
									const Le = Y();
									if (!Le) return !1;
									const Fe = Le.conversation.filter(
										(Oe) => Oe.type === S.ConversationMessage_MessageType.AI,
									);
									return Fe[Fe.length - 1]?.bubbleId === _().bubbleId;
								}),
								ye = (0, a.createMemo)(() => {
									const Le = V.message.timingInfo;
									return Le ? pe(Le) : void 0;
								}),
								ue = (0, a.createMemo)(() => (Y() ? ie() === "chat" : !1)),
								[fe] = (0, k.$K0b)(L.$HW, J.configurationService, !1),
								me = (0, a.createMemo)(
									() => (fe() || V.location === "bar") && ie() !== "chat",
								),
								ve = (0, a.createMemo)(
									() =>
										_().capabilityType ===
											M.ComposerCapabilityRequest_ComposerCapabilityType
												.TOOL_FORMER && _().checkpoint,
								),
								{ showHover: ge, hideHover: be } = (0,
								N.useComposerHoverTooltip)({
									delay: y.COMPOSER_HOVER_TOOLTIP_DELAY,
								}),
								Ce = (Le) => {
									Le.stopPropagation(),
										V.message.bubbleId &&
											X.checkoutToCheckpoint(
												Y().composerId,
												V.message.bubbleId,
											);
								};
							return [
								(0, r.createComponent)(a.Show, {
									get when() {
										return _().serviceStatusUpdate;
									},
									children: (Le) =>
										(() => {
											const Fe = R();
											return (
												Fe.style.setProperty("margin-bottom", "10px"),
												Fe.style.setProperty("padding", "2px 8px"),
												Fe.style.setProperty("font-size", "12px"),
												Fe.style.setProperty("border-radius", "4px"),
												Fe.style.setProperty(
													"background-color",
													"var(--vscode-commandCenter-background)",
												),
												Fe.style.setProperty(
													"color",
													"var(--vscode-commandCenter-foreground)",
												),
												Fe.style.setProperty("display", "flex"),
												Fe.style.setProperty("flex-direction", "row"),
												Fe.style.setProperty("gap", "8px"),
												Fe.style.setProperty("align-items", "center"),
												(0, d.insert)(
													Fe,
													(0, r.createComponent)(a.Show, {
														get when() {
															return n.ThemeIcon.fromId(Le().codicon);
														},
														children: (Oe) =>
															(() => {
																const xe = B();
																return (
																	xe.style.setProperty("font-size", "12px"),
																	(0, C.effect)(() =>
																		(0, w.className)(
																			xe,
																			n.ThemeIcon.asClassName(Oe()),
																		),
																	),
																	xe
																);
															})(),
													}),
													null,
												),
												(0, d.insert)(
													Fe,
													(0, r.createComponent)(p.$4$b, {
														get rawText() {
															return Le().message;
														},
														get allowCommandLinks_POTENTIALLY_UNSAFE_PLEASE_ONLY_USE_FOR_HANDWRITTEN_TRUSTED_MARKDOWN() {
															return (
																Le()
																	.allowCommandLinksPotentiallyUnsafePleaseOnlyUseForHandwrittenTrustedMarkdown ??
																!1
															);
														},
														get codeBlockProps() {
															return {
																shouldRecompute:
																	Y().shouldRecomputeCodeBlock ?? 0,
															};
														},
														finished: !0,
													}),
													null,
												),
												Fe
											);
										})(),
								}),
								(0, r.createComponent)(a.Show, {
									get when() {
										return V.shouldShowTurboModeUpsell;
									},
									get children() {
										return (0, r.createComponent)(I.$D$b, {});
									},
								}),
								(0, r.createComponent)(a.Show, {
									get when() {
										return (
											(_().webCitations ?? []).length > 0 ||
											(_().docsCitations ?? []).length > 0
										);
									},
									get children() {
										const Le = R();
										return (
											Le.style.setProperty("display", "flex"),
											Le.style.setProperty("align-items", "center"),
											Le.style.setProperty("flex-wrap", "wrap"),
											Le.style.setProperty("gap", "4px"),
											Le.style.setProperty("margin-bottom", "8px"),
											(0, d.insert)(
												Le,
												(0, r.createComponent)(a.Show, {
													get when() {
														return (_().webCitations ?? []).length > 0;
													},
													get children() {
														return (0, r.createComponent)(a.For, {
															get each() {
																return [
																	...new Set(
																		(_().webCitations ?? []).map((Fe) =>
																			JSON.stringify({
																				title: Fe.title,
																				url: Fe.url,
																			}),
																		),
																	),
																].map((Fe) => JSON.parse(Fe));
															},
															children: (Fe) =>
																(0, r.createComponent)(
																	c.ComposerWebReferenceComponent,
																	{
																		get url() {
																			return Fe.url;
																		},
																		get title() {
																			return Fe.title;
																		},
																	},
																),
														});
													},
												}),
												null,
											),
											(0, d.insert)(
												Le,
												(0, r.createComponent)(a.Show, {
													get when() {
														return (_().docsCitations ?? []).length > 0;
													},
													get children() {
														return [
															(0, r.createComponent)(a.For, {
																get each() {
																	return (0, m.memo)(() => !!Z())()
																		? _().docsCitations?.slice(0, x)
																		: _().docsCitations;
																},
																children: (Fe) =>
																	(0, r.createComponent)(
																		c.ComposerDocsReferenceComponent,
																		{
																			get url() {
																				return Fe.url;
																			},
																			get title() {
																				return Fe.title;
																			},
																		},
																	),
															}),
															(0, r.createComponent)(a.Show, {
																get when() {
																	return (_().docsCitations?.length ?? 0) > x;
																},
																get children() {
																	return (0, r.createComponent)(
																		c.ComposerDocsReferenceComponent,
																		{
																			get title() {
																				return (0, m.memo)(() => !!Z())()
																					? `+${(_().docsCitations?.length ?? 0) - x} more`
																					: "Show less";
																			},
																			onClick: () => se((Fe) => !Fe),
																			get iconReplace() {
																				return (0, m.memo)(() => !Z())()
																					? n.ThemeIcon.asClassName(
																							g.$ak.eyeClosed,
																						)
																					: void 0;
																			},
																		},
																	);
																},
															}),
														];
													},
												}),
												null,
											),
											Le
										);
									},
								}),
								(0, r.createComponent)(P.$2cc, {
									nonReactiveDelay: 25,
									get children() {
										return (0, r.createComponent)(p.$4$b, {
											get rawText() {
												return _().text;
											},
											get showSectionToolbar() {
												return ue();
											},
											get canQuoteMessages() {
												return ue();
											},
											get composerExtras() {
												return {
													composerId: Y().composerId,
													bubbleId: _().bubbleId,
													messageIndex: V.index(),
												};
											},
											get symbolLinks() {
												return _().symbolLinks;
											},
											get fileLinks() {
												return _().fileLinks;
											},
											get codeBlockProps() {
												return {
													shouldRecompute: Y().shouldRecomputeCodeBlock ?? 0,
													setResetCodeBlockCount: V.setResetCodeBlockCount,
													resetCodeBlockCount: V.resetCodeBlockCount,
													shouldCallRenderCodeBlock: (Le, Fe) => {
														const {
															predictedUri: Oe,
															codeBlockIdx: xe,
															capabilityAlias: He,
														} = Fe;
														if (!Oe && !He) return !1;
														if (He) return !0;
														if (!Oe) return !1;
														const Ke =
																(V.codeCountByFile()[Oe.toString()] ?? -1) + 1,
															Je = _().codeBlocks?.find(
																(Te) =>
																	Te.uri.toString() === Oe.toString() &&
																	Te.codeBlockIdx === xe,
															);
														return Je
															? (V.setCodeCountByFile((Te) => {
																	const Ee = { ...Te };
																	return (Ee[Oe.toString()] = Ke), Ee;
																}),
																{ predictedUri: Oe, version: Je.version })
															: !1;
													},
													renderCodeBlock: (Le, Fe) => {
														let {
															predictedUri: Oe,
															codeBlockIdx: xe,
															capabilityAlias: He,
														} = Fe;
														if (!Oe && !He)
															throw new Error(
																"[composer] No predicted uri available",
															);
														J.composerService.isBackground(Y().composerId) &&
															!He &&
															(Oe = J.selectedContextService.getWorktreeUri(
																Oe,
																Y().backgroundInfo?.worktreePath,
															));
														const Ke = Fe.version,
															Je = (0, a.createMemo)(() =>
																_().codeBlocks?.find(
																	(Ie) =>
																		Ie.uri.toString() === Oe?.toString() &&
																		Ie.version === Ke,
																),
															),
															Te = (0, a.createMemo)(() =>
																Oe
																	? W.getComposerCodeBlock(
																			Y().composerId,
																			Oe,
																			Ke,
																		)
																	: void 0,
															),
															Ee = (0, a.createMemo)(() =>
																_().capabilityCodeBlocks?.find(
																	(Ie) =>
																		Ie.type === He && Ie.codeBlockIdx === xe,
																),
															);
														return (0, r.createComponent)(a.Show, {
															get when() {
																return Ee();
															},
															get fallback() {
																return (0, r.createComponent)(a.Show, {
																	get when() {
																		return (0, m.memo)(() => !!Je())() && Te();
																	},
																	get fallback() {
																		return (0, r.createComponent)(F, {});
																	},
																	children: (Ie) => {
																		const Be = (0, a.createMemo)(() => ({
																			tabs: V.tabs,
																			setTabs: V.setTabs,
																			codeBlock: Ie(),
																			setSelectedTabIndex:
																				V.setSelectedTabIndex,
																			renderHint:
																				Ke === 0 &&
																				!V.hideHints &&
																				Fe.predictedUri?.toString() ===
																					V.tabs()[2]?.uri?.toString() &&
																				V.isInputFocused,
																			isInputFocused: V.isInputFocused,
																		}));
																		return (0, r.createComponent)(a.Show, {
																			get when() {
																				return !me();
																			},
																			get fallback() {
																				return (0, r.createComponent)(
																					b.ComposerMessageCodePill,
																					{
																						get codeBlock() {
																							return Ie();
																						},
																						get composerDataHandle() {
																							return V.composerDataHandle;
																						},
																						get renderHint() {
																							return Be().renderHint;
																						},
																					},
																				);
																			},
																			get children() {
																				return (0, r.createComponent)(
																					o.ComposerMessageCodeblock,
																					(0, i.mergeProps)(Be, {
																						get composerDataHandle() {
																							return V.composerDataHandle;
																						},
																					}),
																				);
																			},
																		});
																	},
																});
															},
															children: (Ie) => {
																const Be = (0, a.createMemo)(() => {
																	try {
																		return JSON.parse(Ie().content ?? "").type;
																	} catch {
																		return;
																	}
																});
																return (0, r.createComponent)(a.Switch, {
																	get fallback() {
																		return (() => {
																			const Se = U();
																			return (
																				Se.style.setProperty("display", "none"),
																				Se
																			);
																		})();
																	},
																	get children() {
																		return [
																			(0, r.createComponent)(a.Match, {
																				when: He === u.ToolCallCodeBlockAlias,
																				get children() {
																					return (0, r.createComponent)(
																						a.Show,
																						{
																							get when() {
																								return !y.COMPOSER_EXPANDED_BLOCK_TOOLS.includes(
																									Be(),
																								);
																							},
																							get fallback() {
																								return (0, r.createComponent)(
																									s.ComposerMessageToolCallBlock,
																									{
																										get bubbleId() {
																											return _().bubbleId;
																										},
																										get codeBlockIdx() {
																											return Ie().codeBlockIdx;
																										},
																										get composerDataHandle() {
																											return V.composerDataHandle;
																										},
																									},
																								);
																							},
																							get children() {
																								return (0, r.createComponent)(
																									f.ComposerMessageToolCallPill,
																									{
																										get bubbleId() {
																											return _().bubbleId;
																										},
																										get codeBlockIdx() {
																											return Ie().codeBlockIdx;
																										},
																										get composerDataHandle() {
																											return V.composerDataHandle;
																										},
																									},
																								);
																							},
																						},
																					);
																				},
																			}),
																			(0, r.createComponent)(a.Match, {
																				when:
																					He === u.ContextPickingCodeBlockAlias,
																				get children() {
																					return (0, r.createComponent)(
																						l.ComposerMessageContextPickingCodeBlock,
																						{
																							get composerDataHandle() {
																								return V.composerDataHandle;
																							},
																							get bubbleId() {
																								return _().bubbleId;
																							},
																							get codeBlockIdx() {
																								return Ie().codeBlockIdx;
																							},
																						},
																					);
																				},
																			}),
																			(0, r.createComponent)(a.Match, {
																				when:
																					He === u.AutoContextCodeBlockAlias,
																				get children() {
																					return (0, r.createComponent)(
																						$.ComposerMessageAutoContextCodeBlock,
																						{
																							get composerDataHandle() {
																								return V.composerDataHandle;
																							},
																							get bubbleId() {
																								return _().bubbleId;
																							},
																							get codeBlockIdx() {
																								return Ie().codeBlockIdx;
																							},
																						},
																					);
																				},
																			}),
																		];
																	},
																});
															},
														});
													},
												};
											},
											shouldFade: !1,
											get finished() {
												return !Y().generatingBubbleIds?.includes(_().bubbleId);
											},
										});
									},
								}),
								(0, r.createComponent)(a.Show, {
									get when() {
										return re();
									},
									children: (Le) =>
										(0, r.createComponent)(
											v.ComposerCapabilityMessageRenderer,
											{
												process: "after-submit-chat",
												get statuses() {
													return Le();
												},
												get bubbleId() {
													return _().bubbleId;
												},
												get composerDataHandle() {
													return V.composerDataHandle;
												},
												get location() {
													return V.location;
												},
											},
										),
								}),
								(0, r.createComponent)(a.Show, {
									get when() {
										return le();
									},
									children: (Le) =>
										(0, r.createComponent)(
											v.ComposerCapabilityMessageRenderer,
											{
												process: "composer-settled",
												get statuses() {
													return Le();
												},
												get bubbleId() {
													return _().bubbleId;
												},
												get composerDataHandle() {
													return V.composerDataHandle;
												},
												get location() {
													return V.location;
												},
											},
										),
								}),
								(0, r.createComponent)(a.Show, {
									get when() {
										return oe();
									},
									children: (Le) =>
										(0, r.createComponent)(
											v.ComposerCapabilityMessageRenderer,
											{
												process: "composer-done",
												get statuses() {
													return Le();
												},
												get bubbleId() {
													return _().bubbleId;
												},
												get composerDataHandle() {
													return V.composerDataHandle;
												},
												get location() {
													return V.location;
												},
											},
										),
								}),
								(0, r.createComponent)(a.Show, {
									get when() {
										return _().timingInfo && !1;
									},
									get children() {
										const Le = O(),
											Fe = Le.firstChild;
										return (
											Le.addEventListener("click", () => {
												console.log(_().timingInfo);
											}),
											Fe.style.setProperty("font-size", "10px"),
											(0, C.effect)(
												(Oe) => {
													const xe = ye(),
														He = n.ThemeIcon.asClassName(g.$ak.clock);
													return (
														xe !== Oe._v$ &&
															(0, E.setAttribute)(Le, "title", (Oe._v$ = xe)),
														He !== Oe._v$2 &&
															(0, w.className)(Fe, (Oe._v$2 = He)),
														Oe
													);
												},
												{ _v$: void 0, _v$2: void 0 },
											),
											Le
										);
									},
								}),
							];
						} catch (K) {
							G.e = K;
						} finally {
							G.d();
						}
					};
				e.ComposerAiMessage = q;
			},
		),
		define(
			de[4399],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 83, 58, 9, 354, 1363, 4140, 1980, 4141,
				1364, 4247, 36, 1004, 135, 865, 2007, 573, 298,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Tbc = void 0);
				const T = (0, t.template)('<div class="fade-in-fast">'),
					P = (0, t.template)("<span>(Enter)"),
					k = (0, t.template)(
						'<div><div class="codicon codicon-open-preview"></div>Open',
					),
					L = (0, t.template)("<span>(\u232B)"),
					D = (0, t.template)(
						'<div><div class="codicon codicon-trash"></div>Remove',
					),
					M = (0, t.template)("<span>(Esc)"),
					N = (0, t.template)(
						'<div><div class="codicon codicon-eye-closed"></div>Collapse',
					),
					A = (0, t.template)("<div>"),
					R = (0, t.template)("<div><div>Edit <!>: "),
					O = (0, t.template)(
						"<div>Advanced options are only available if you index your codebase. <a>Open Settings",
					),
					B = (F) =>
						(() => {
							const x = T();
							return (
								x.addEventListener("mouseleave", () => F.onMouseLeave?.()),
								x.addEventListener("mouseenter", () => F.onMouseEnter?.()),
								(0, m.insert)(x, () => F.children),
								(0, d.effect)((H) =>
									(0, C.style)(
										x,
										{
											border: F.isHighlighted
												? "1px solid var(--vscode-editorGutter-modifiedBackground)"
												: "1px solid var(--vscode-list-inactiveSelectionBackground, transparent)",
											"border-radius": "4px",
											...F.style,
										},
										H,
									),
								),
								x
							);
						})(),
					U = (F) => {
						const x = (0, s.$odc)(),
							[H, q] = (0, r.createSignal)(!1),
							[V, G] = (0, r.createSignal)(),
							K = (0, r.createMemo)(() => F.getContext()),
							[J, W] = (0, r.createSignal)(void 0),
							[X, Y] = (0, r.createSignal)(void 0);
						(0, r.createEffect)(() => {
							const Z = X(),
								se = J(),
								re = F.pillProps?.data,
								le = F.pillProps?.type;
							if (!(!le && !se)) {
								if (!se && le) {
									W(le), Y(re);
									return;
								}
								if (!le && se) {
									W(void 0), Y(void 0);
									return;
								}
								(le !== se ||
									((0, I.$Ygc)(S.$fbc[le]) &&
										!(0, I.$1gc)(S.$fbc[le], re, Z))) &&
									(W(le), Y(re));
							}
						});
						const ie = (0, r.createMemo)(() => {
							if (J() === "docs") {
								const { docId: Z } = F.pillProps?.data ?? {},
									se = K()?.selectedDocs?.find((re) => re.docId === Z);
								return se || void 0;
							}
						});
						(0, r.createEffect)(() => {
							const Z = J(),
								se = G;
							(Z === "diffToMain" ||
								Z === "diff" ||
								Z === "commit" ||
								Z === "pr") &&
								(async () => {
									let le = x.everythingProviderService.provider;
									if (
										(le ||
											(await x.gitContextService.waitForGitContextProvider(),
											(le = x.everythingProviderService.provider)),
										Z === "diffToMain")
									) {
										try {
											const oe = await (0, c.$4fc)(
												x.selectedContextService,
												u.GitDiff_DiffType.DIFF_FROM_BRANCH_TO_MAIN,
											);
											!oe || oe.diffs.length === 0 ? se(void 0) : se(oe);
										} catch {
											se(void 0);
										}
										return;
									}
									if (Z === "diff") {
										try {
											const oe = await (0, c.$4fc)(
												x.selectedContextService,
												u.GitDiff_DiffType.DIFF_TO_HEAD,
											);
											!oe || oe.diffs.length === 0 ? se(void 0) : se(oe);
										} catch {
											se(void 0);
										}
										return;
									}
									if (Z === "commit") {
										const oe = F.pillProps?.data?.sha;
										if (!oe) {
											console.error(
												"No commit found even though there's a commit pill",
											),
												se(void 0);
											return;
										}
										const ae = K()?.selectedCommits?.find(
											(pe) => pe.sha === oe,
										);
										if (!ae) {
											console.error(
												"No commit found even though there's a commit pill",
											),
												se(void 0);
											return;
										}
										try {
											const pe = await (0, c.$5fc)(
												x.selectedContextService,
												ae,
											);
											se(pe);
										} catch {
											se(void 0);
										}
										return;
									}
									if (Z === "pr") {
										const oe = F.pillProps?.data;
										if (!oe) {
											console.error(
												"No PR found even though there's a PR pill",
											),
												se(void 0);
											return;
										}
										const ae = await (0, c.$6fc)(x.selectedContextService, oe);
										console.log("diff", ae), se(ae);
										return;
									}
								})();
						});
						const ne = {
								display: "flex",
								"align-items": "center",
								"justify-content": "center",
								gap: "2px",
								padding: "1px 4px",
								"line-height": "125%",
								background: "var(--vscode-editor-background)",
								color: "var(--vscode-input-placeholderForeground)",
								border:
									"1px solid var(--vscode-list-inactiveSelectionBackground)",
								"border-radius": "2px",
								"font-size": "11px",
								cursor: "pointer",
								"white-space": "nowrap",
								transition: "background-color 0.2s",
								"font-weight": "400",
							},
							ee = {
								"font-size": "11px",
								color: "var(--vscode-input-placeholderForeground)",
							},
							_ = [
								"currentFile",
								"codebase",
								"code",
								"terminal",
								"file",
								"diffToMain",
								"diff",
								"commit",
								"image",
								"quote",
								"docs",
								"editTrailContext",
								"pr",
							],
							te = !1,
							Q = (0, r.createMemo)(() => {
								const Z = J();
								return Z === "diffToMain" ||
									Z === "diff" ||
									Z === "commit" ||
									Z === "pr"
									? !!V()
									: !0;
							});
						return (0, w.createComponent)(r.Show, {
							get when() {
								return (
									Q() &&
									(X() !== void 0 || J() === "codebase") &&
									J() &&
									_.includes(J()) &&
									F.pillProps
								);
							},
							children: (Z) =>
								(0, w.createComponent)(B, {
									onMouseEnter: () => q(!0),
									onMouseLeave: () => q(!1),
									style: { overflow: "hidden", position: "relative" },
									get isHighlighted() {
										return F.isHighlighted;
									},
									get children() {
										return [
											(0, w.createComponent)(r.Show, {
												get when() {
													return H() || F.isHighlighted;
												},
												get children() {
													return (0, w.createComponent)(l.$q$b, {
														outerContainerStyle: {
															position: "absolute",
															top: 0,
															right: 0,
															"max-width": "100%",
															margin: "4px",
															"z-index": 303,
															display: "flex",
															"justify-content": "right",
															"flex-direction": "row",
														},
														forceGap: 4,
														class: "fade-in-fast",
														get children() {
															return [
																(0, w.createComponent)(r.Show, {
																	get when() {
																		return Z().onClick;
																	},
																	get children() {
																		const se = k(),
																			re = se.firstChild,
																			le = re.nextSibling;
																		return (
																			(0, i.addEventListener)(
																				se,
																				"click",
																				Z().onClick,
																			),
																			(0, C.style)(se, ne),
																			(0, C.style)(re, ee),
																			(0, m.insert)(
																				se,
																				(0, w.createComponent)(r.Show, {
																					get when() {
																						return F.isHighlighted && te;
																					},
																					get children() {
																						const oe = P();
																						return (
																							oe.style.setProperty(
																								"font-size",
																								"0.9em",
																							),
																							oe.style.setProperty(
																								"color",
																								"var(--vscode-input-placeholderForeground)",
																							),
																							oe
																						);
																					},
																				}),
																				null,
																			),
																			se
																		);
																	},
																}),
																(0, w.createComponent)(r.Show, {
																	get when() {
																		return Z().onRemove;
																	},
																	get children() {
																		const se = D(),
																			re = se.firstChild,
																			le = re.nextSibling;
																		return (
																			se.addEventListener("click", () =>
																				Z().onRemove?.(),
																			),
																			(0, C.style)(se, ne),
																			(0, C.style)(re, ee),
																			(0, m.insert)(
																				se,
																				(0, w.createComponent)(r.Show, {
																					get when() {
																						return F.isHighlighted && te;
																					},
																					get children() {
																						const oe = L();
																						return (
																							oe.style.setProperty(
																								"font-size",
																								"0.9em",
																							),
																							oe.style.setProperty(
																								"color",
																								"var(--vscode-input-placeholderForeground)",
																							),
																							oe
																						);
																					},
																				}),
																				null,
																			),
																			se
																		);
																	},
																}),
																(() => {
																	const se = N(),
																		re = se.firstChild,
																		le = re.nextSibling;
																	return (
																		(0, i.addEventListener)(
																			se,
																			"click",
																			F.hidePreview,
																		),
																		(0, C.style)(se, ne),
																		(0, C.style)(re, ee),
																		(0, m.insert)(
																			se,
																			(0, w.createComponent)(r.Show, {
																				get when() {
																					return F.isHighlighted && te;
																				},
																				get children() {
																					const oe = M();
																					return (
																						oe.style.setProperty(
																							"color",
																							"var(--vscode-input-placeholderForeground)",
																						),
																						oe.style.setProperty(
																							"font-size",
																							"0.9em",
																						),
																						oe
																					);
																				},
																			}),
																			null,
																		),
																		se
																	);
																})(),
															];
														},
													});
												},
											}),
											(0, w.createComponent)(r.Switch, {
												get children() {
													return [
														(0, w.createComponent)(r.Match, {
															get when() {
																return (
																	(0, E.memo)(() => J() === "docs")() && ie()
																);
															},
															children: (se) =>
																(0, w.createComponent)(p.$Dbc, {
																	get selection() {
																		return se();
																	},
																}),
														}),
														(0, w.createComponent)(r.Match, {
															get when() {
																return (
																	J() === "codebase" &&
																	F.setCodebaseSearchSettings &&
																	F.getCodebaseSearchSettings
																);
															},
															get children() {
																return (0, w.createComponent)(z, {
																	get getContext() {
																		return F.getContext;
																	},
																	get setContext() {
																		return F.setContext;
																	},
																	get setCodebaseSearchSettings() {
																		return F.setCodebaseSearchSettings;
																	},
																	get getCodebaseSearchSettings() {
																		return F.getCodebaseSearchSettings;
																	},
																});
															},
														}),
														(0, w.createComponent)(r.Match, {
															get when() {
																return J() === "code" || J() === "terminal";
															},
															get children() {
																return (0, w.createComponent)(n.$xbc, {
																	get selection() {
																		return X();
																	},
																	style: { "border-radius": "4px" },
																});
															},
														}),
														(0, w.createComponent)(r.Match, {
															get when() {
																return J() === "file" || J() === "terminalFile";
															},
															get children() {
																return (0, w.createComponent)(o.$Ebc, {
																	get selection() {
																		return X();
																	},
																	style: { "border-radius": "4px" },
																});
															},
														}),
														(0, w.createComponent)(r.Match, {
															get when() {
																return (
																	(0, E.memo)(() => J() === "diffToMain")() &&
																	V()
																);
															},
															children: (se) =>
																(0, w.createComponent)(g.$Bbc, {
																	get removeSelection() {
																		return Z().onRemove ?? (() => {});
																	},
																	get diff() {
																		return se();
																	},
																	style: { "border-radius": "4px" },
																}),
														}),
														(0, w.createComponent)(r.Match, {
															get when() {
																return (
																	(0, E.memo)(() => J() === "diff")() && V()
																);
															},
															children: (se) =>
																(0, w.createComponent)(g.$Bbc, {
																	get removeSelection() {
																		return Z().onRemove ?? (() => {});
																	},
																	get diff() {
																		return se();
																	},
																	style: { "border-radius": "4px" },
																}),
														}),
														(0, w.createComponent)(r.Match, {
															get when() {
																return (
																	(0, E.memo)(() => J() === "commit")() && V()
																);
															},
															children: (se) =>
																(0, w.createComponent)(g.$Bbc, {
																	get removeSelection() {
																		return Z().onRemove ?? (() => {});
																	},
																	get diff() {
																		return se();
																	},
																	style: { "border-radius": "4px" },
																}),
														}),
														(0, w.createComponent)(r.Match, {
															get when() {
																return (0, E.memo)(() => J() === "pr")() && V();
															},
															children: (se) =>
																(0, w.createComponent)(g.$Bbc, {
																	get removeSelection() {
																		return Z().onRemove ?? (() => {});
																	},
																	get diff() {
																		return se();
																	},
																	style: { "border-radius": "4px" },
																}),
														}),
														(0, w.createComponent)(r.Match, {
															get when() {
																return J() === "image";
															},
															get children() {
																return (0, w.createComponent)(f.$Gbc, {
																	get image() {
																		return X();
																	},
																});
															},
														}),
														(0, w.createComponent)(r.Match, {
															get when() {
																return J() === "quote";
															},
															get children() {
																return (0, w.createComponent)(b.$Hbc, {
																	get quote() {
																		return X();
																	},
																	style: { "border-radius": "4px" },
																});
															},
														}),
														(0, w.createComponent)(r.Match, {
															get when() {
																return J() === "editTrailContext";
															},
															get children() {
																const se = A();
																return (
																	se.style.setProperty("display", "flex"),
																	se.style.setProperty(
																		"flex-direction",
																		"column",
																	),
																	se.style.setProperty("gap", "4px"),
																	se.style.setProperty("height", "200px"),
																	se.style.setProperty(
																		"background-color",
																		"var(--vscode-editor-background)",
																	),
																	(0, m.insert)(
																		se,
																		(0, w.createComponent)(y.$w0b, {
																			scrollingDirection: "vertical",
																			style: { height: "100%" },
																			get children() {
																				return (0, w.createComponent)(r.For, {
																					get each() {
																						return X().editTrailSorted;
																					},
																					children: (re, le) =>
																						(() => {
																							const oe = R(),
																								ae = oe.firstChild,
																								pe = ae.firstChild,
																								$e = pe.nextSibling,
																								ye = $e.nextSibling;
																							return (
																								oe.style.setProperty(
																									"font-family",
																									"var(--monaco-monospace-font)",
																								),
																								oe.style.setProperty(
																									"font-size",
																									"12px",
																								),
																								oe.style.setProperty(
																									"border-radius",
																									"4px",
																								),
																								oe.style.setProperty(
																									"flex-direction",
																									"column",
																								),
																								oe.style.setProperty(
																									"display",
																									"flex",
																								),
																								oe.style.setProperty(
																									"gap",
																									"4px",
																								),
																								ae.style.setProperty(
																									"color",
																									"var(--vscode-descriptionForeground)",
																								),
																								ae.style.setProperty(
																									"font-size",
																									"10px",
																								),
																								ae.style.setProperty(
																									"padding",
																									"2px 6px",
																								),
																								ae.style.setProperty(
																									"max-width",
																									"100%",
																								),
																								ae.style.setProperty(
																									"overflow",
																									"hidden",
																								),
																								ae.style.setProperty(
																									"text-overflow",
																									"ellipsis",
																								),
																								ae.style.setProperty(
																									"white-space",
																									"nowrap",
																								),
																								(0, m.insert)(
																									ae,
																									() => le() + 1,
																									$e,
																								),
																								(0, m.insert)(
																									ae,
																									() =>
																										x.labelService.getUriLabel(
																											h.URI.revive(re.uri),
																											{ relative: !0 },
																										),
																									null,
																								),
																								(0, m.insert)(
																									oe,
																									(0, w.createComponent)(
																										$.$Ibc,
																										{
																											style: {
																												"white-space": "pre",
																												overflow: "hidden",
																												"text-overflow":
																													"ellipsis",
																												padding: "0px 6px",
																											},
																											get text() {
																												return re.contextLines;
																											},
																											get language() {
																												return re.uri.path
																													?.split(".")
																													.pop();
																											},
																											get resourceForLanguage() {
																												return h.URI.revive(
																													re.uri,
																												);
																											},
																											get highlightLines() {
																												return Array.from({
																													length:
																														re.textRange
																															.endLineInclusive -
																														re.textRange
																															.startLine +
																														1,
																												}).map(
																													(ue, fe) =>
																														fe +
																														re.textRange
																															.startLine,
																												);
																											},
																											nonReactiveEditorOptions:
																												{
																													scrollbar: {
																														alwaysConsumeMouseWheel:
																															!1,
																														ignoreHorizontalScrollbarInContentHeight:
																															!0,
																													},
																												},
																										},
																									),
																									null,
																								),
																								oe
																							);
																						})(),
																				});
																			},
																		}),
																	),
																	se
																);
															},
														}),
													];
												},
											}),
										];
									},
								}),
						});
					};
				e.$Tbc = U;
				function z(F) {
					const x = (0, s.$odc)(),
						H = (0, r.createMemo)(() => {
							const q =
								x.reactiveStorageService.nonPersistentStorage
									.repositoryIndexingStatus?.case;
							return [
								"synced",
								"out-of-sync",
								"indexing",
								"indexing-setup",
								"loading",
							].includes(q ?? "");
						});
					return (() => {
						const q = A();
						return (
							q.style.setProperty(
								"background-color",
								"var(--vscode-editor-background)",
							),
							q.style.setProperty("border-radius", "4px"),
							q.style.setProperty("padding", "0.25rem 0.5rem"),
							q.style.setProperty("position", "relative"),
							(0, m.insert)(
								q,
								(0, w.createComponent)(r.Show, {
									get when() {
										return H();
									},
									get fallback() {
										return (() => {
											const V = O(),
												G = V.firstChild,
												K = G.nextSibling;
											return (
												V.style.setProperty("font-style", "italic"),
												V.style.setProperty("opacity", "0.6"),
												V.style.setProperty("font-size", "12px"),
												K.addEventListener("click", () => {
													x.commandService.executeCommand(
														a.$QV,
														"features",
														"cursor-settings-codebase-indexing",
													);
												}),
												K.style.setProperty("font-size", "12px"),
												K.style.setProperty(
													"color",
													"var(--vscode-textLink-foreground)",
												),
												K.style.setProperty("text-decoration", "underline"),
												K.style.setProperty("cursor", "pointer"),
												V
											);
										})();
									},
									get children() {
										return (0, w.createComponent)(v.$Qbc, {
											get getContext() {
												return F.getContext;
											},
											get setContext() {
												return F.setContext;
											},
											get setCodebaseSearchSettings() {
												return F.setCodebaseSearchSettings;
											},
											get getCodebaseSearchSettings() {
												return F.getCodebaseSearchSettings;
											},
										});
									},
								}),
							),
							q
						);
					})();
				}
			},
		),
		define(
			de[2009],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 922, 158, 13, 7, 160, 12, 9, 47, 606, 205,
				1994, 1727, 36, 450, 4319, 310, 4320, 1777, 422, 364, 1982, 135, 4399,
				573, 1523,
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
					(e.$Vbc = e.$Ubc = void 0);
				const A = (0, t.template)('<div tabindex="0">'),
					R = (0, t.template)("<div>"),
					O = (0, t.template)(
						'<div class="full-input-box"><div><div tabindex="0"><div></div></div></div><div>',
					);
				e.$Ubc =
					"solid 1px var(--vscode-input-border,var(--vscode-commandCenter-inactiveBorder))";
				function B(z) {
					return (0, m.createComponent)(
						L.$ubc,
						(0, r.mergeProps)(
							{
								get position() {
									return z.position;
								},
								get close() {
									return z.close;
								},
								get nonBlockingRoot() {
									return z.nonBlockingRoot;
								},
							},
							() => z.getPickerMenuProps(),
						),
					);
				}
				const U = (z) => {
					const F = (0, y.$odc)();
					let x, H;
					const q = (0, h.createMemo)(() => z.role ?? "bottom"),
						[V, G] = (0, h.createSignal)(!1),
						[K, J] = (0, h.createSignal)(!1),
						[W, X] = (0, h.createSignal)(null),
						[Y, ie] = (0, h.createSignal)(-1),
						[ne, ee] = (0, h.createSignal)(-1),
						[_, te] = (0, h.createSignal)(null),
						[Q, Z] = (0, h.createSignal)(!1),
						se = (0, h.createMemo)(() => z.inputBoxDelegate ?? new b.$Zzb()),
						[re, le, oe] = (0, k.$A0b)();
					(0, h.onCleanup)(() => {
						oe();
					});
					const ae = (ht) => {
							le(ht), z.setIsPickerMenuOpen?.(!0);
						},
						pe = () => {
							oe(), z.setIsPickerMenuOpen?.(!1);
						};
					let $e;
					const ye = (ht) => {
							q() === "bottom"
								? ae({ x: ht.left, y: ht.top - 4 })
								: ae({ x: ht.left, y: ht.bottom + 4 });
						},
						ue = (ht) => {
							if (re()) {
								pe();
								return;
							}
							ht.stopPropagation();
							const Rt = $e?.getBoundingClientRect();
							Rt && ye(Rt);
						},
						fe = {
							...(0, $.$Rac)(),
							namespace: "chat-input" + z.id,
							onError: (ht) => {
								console.error(ht);
							},
						},
						me = () => (z.text?.trim() ?? "").length === 0,
						ve = (ht) => (
							ct(!1),
							G(!1),
							z.triggerScrollToBottom && z.triggerScrollToBottom(),
							ge(),
							z.onSubmit?.(ht)
						),
						ge = () => {
							z.onPreSubmit?.(), G(!1);
						},
						be = (0, h.createMemo)(() =>
							z.shouldMergeSuggestedPillsWithAllPills
								? [...z.allPills(), ...(z.suggestedPills?.() ?? [])]
								: z.allPills(),
						),
						Ce = (0, h.createMemo)(() =>
							z.shouldMergeSuggestedPillsWithAllPills
								? []
								: (z.suggestedPills?.() ?? []),
						),
						Le = () => {
							if (K()) return !1;
							const ht = _()?.getRootElement();
							if (!ht || !(0, $.$Vac)(ht)) return !1;
							const Rt = Be();
							let Nt = Rt === -1 ? -2 : Math.min(Rt, be().length - 1);
							return (
								(Nt = Nt === -1 ? -2 : Nt), ie(Nt), se().getRef()?.blur(), !0
							);
						},
						Fe = (0, h.createMemo)(() => [
							{
								command: a.KEY_ALT_UP_COMMAND,
								callback: (ht) =>
									z.setIsAltPressed ? (z.setIsAltPressed(!1), !0) : !1,
							},
							{
								command: a.KEY_ALT_COMMAND,
								callback: (ht) =>
									z.setIsAltPressed ? (z.setIsAltPressed(!0), !0) : !1,
							},
							{
								command: a.KEY_COMMAND_COMMAND,
								callback: (ht) =>
									z.setIsCmdPressed ? (z.setIsCmdPressed(!0), !0) : !1,
							},
							{
								command: a.KEY_COMMAND_UP_COMMAND,
								callback: (ht) =>
									z.setIsCmdPressed ? (z.setIsCmdPressed(!1), !0) : !1,
							},
							{
								command: a.KEY_ARROW_UP_COMMAND,
								callback: (ht) => (ht.shiftKey ? !1 : Le()),
								priority: a.COMMAND_PRIORITY_LOW,
							},
							{
								command: a.KEY_COMMAND_K_COMMAND,
								callback: (ht) =>
									(g.$m && (!ht.ctrlKey || ht.metaKey)) ||
									(!g.$m && (!ht.metaKey || ht.ctrlKey))
										? !1
										: Le(),
							},
							{
								command: a.KEY_ARROW_DOWN_COMMAND,
								callback: (ht) => {
									const Rt = _()?.getRootElement();
									if (!Rt || !(0, $.$Wac)(Rt) || ht.shiftKey) return !1;
									if (Ce() && Ce().length > 0) {
										const Nt = ke(),
											jt = Nt === -1 ? 0 : Math.min(Nt, Ce().length - 1);
										return ee(jt), !0;
									}
									return z.onFurtherArrowDown ? z.onFurtherArrowDown() : !1;
								},
								priority: a.COMMAND_PRIORITY_LOW,
							},
							...(z.allowCmdPFilePicker
								? [
										{
											command: a.KEY_COMMAND_P_COMMAND,
											callback: (ht) =>
												ht.shiftKey
													? !1
													: z.makeCmdPAlt
														? ht.altKey
															? (ue(ht), !0)
															: !1
														: (ue(ht), !0),
										},
									]
								: []),
							...(z.extraCommandListeners?.find(
								(ht) => ht.command === a.KEY_COMMAND_ENTER_COMMAND,
							)
								? []
								: [
										{
											command: a.KEY_COMMAND_ENTER_COMMAND,
											callback: (ht) => !!ve(ht),
										},
									]),
							{
								command: a.KEY_COMMAND_R_COMMAND,
								callback: (ht) =>
									ht.shiftKey ? !1 : (G(!1), z.onReset?.(), !0),
							},
							...(z.extraCommandListeners ?? []),
						]);
					(0, h.onMount)(() => {
						(0, h.createEffect)(() => {
							if (x) {
								z.setContainerWidth?.(x.offsetWidth);
								const ht = (0, c.$Ogb)(),
									Rt = z.setContainerWidth;
								new ht.ResizeObserver((jt) => {
									for (const ti of jt) Rt?.(ti.contentRect.width);
								}).observe(x);
							}
						});
					});
					const Oe = () => {
						let ht = 3;
						const Rt = (Nt = 0) => {
							Nt >= ht ||
								setTimeout(() => {
									se().focus(), se().isFocused() || Rt(Nt + 1);
								}, 10);
						};
						Rt();
					};
					(0, h.createEffect)(() => {
						const ht = z.autofocus;
						(0, h.onMount)(() => {
							ht && Oe();
						});
					}),
						(0, h.createEffect)(() => {
							Y() >= be().length && ie(be().length - 1);
						});
					let xe = !1,
						He,
						Ke,
						Je = !1;
					const Te = [];
					function Ee() {
						const ht = Te.shift();
						ht && X(ht);
					}
					(0, h.createEffect)(() => {
						const ht = z.mentionIdsToDelete?.();
						if (ht && ht.length > 0) {
							for (const Rt of ht) Te.push(Rt);
							Je || ((Je = !0), Ee());
						}
					}),
						(0, h.createEffect)(() => {
							const ht = z.forceShouldShowPillPreview,
								Rt = be().length;
							ht !== void 0 &&
								ht !== -1 &&
								ht < Rt &&
								(G(!0), Se(ht), z.resetForceShouldShowPillPreview?.());
						}),
						(0, h.createEffect)(
							(0, h.on)(
								() => W(),
								(ht) => {
									ht === null && Te.length > 0 ? Ee() : (Je = !1);
								},
							),
						);
					const Ie = (ht, Rt = !0) => {
						if (!ht.onRemove) return;
						const Nt = Y();
						let jt = Nt;
						const ti =
							ht.type === "gitGraphFileSuggestion"
								? be().length
								: be().filter((hi) => hi.type !== "gitGraphFileSuggestion")
										.length;
						Nt === ti - 1 ? (jt = Nt - 1) : Nt === 0 && ti === 1 && (jt = -1);
						const kt = () => {
							jt === -1 ? (ie(-1), se().isFocused() || se().focus()) : ie(jt);
						};
						setTimeout(() => {
							kt();
						}),
							ht.onRemove?.(Rt),
							G(!1);
					};
					(0, h.createEffect)(() => {
						const ht = Y() !== -1 ? "pill" : "suggestedPill",
							Rt = ht === "pill" ? Y() : ne(),
							Nt = ht === "pill" ? ie : ee,
							jt = ht === "pill" ? be().length : Ce().length,
							ti = ht === "pill" ? be() : Ce();
						if (
							(Rt !== void 0 && Rt !== -1 && jt === 0 && Nt?.(-2),
							Nt && Rt !== -1 && Rt !== void 0)
						) {
							const kt = (0, c.$Ogb)(),
								hi = (Kt) => {
									if (!Q) {
										Nt(-1);
										return;
									}
									if (Rt === -1) {
										se().focus();
										return;
									}
									const di = (xt, Vt) => {
											if (!xt) return;
											const Bt = De(xt, Vt, ht === "suggestedPill"),
												Gt = kt.document.getElementById(Bt);
											if (Gt) return Gt;
										},
										Ye = () => {
											if (Rt === -2) return $e;
											const xt = ti[Rt];
											if (xt) return di(xt, Rt);
										},
										ze = (xt) => {
											const Vt = Ye();
											if (!Vt) return;
											const Bt = [],
												Gt = $e;
											Gt && ht === "pill" && Bt.push({ dom: Gt, index: -2 });
											for (let Jt = 0; Jt < ti.length; Jt++) {
												const si = ti[Jt],
													Zt = di(si, Jt);
												Zt && Bt.push({ dom: Zt, index: Jt });
											}
											const Mt = new Map(),
												Ut = (Jt) => Math.floor((Jt.top + Jt.height / 2) / 10);
											for (const Jt of Bt) {
												const si = Jt.dom.getBoundingClientRect(),
													Zt = Ut(si);
												Mt.has(Zt) || Mt.set(Zt, []), Mt.get(Zt)?.push(Jt);
											}
											const ei = Array.from(Mt.entries()).sort(
													(Jt, si) => Jt[0] - si[0],
												),
												mi = Vt.getBoundingClientRect(),
												ii = Ut(mi),
												Dt = ei.findIndex((Jt) => Jt[0] === ii);
											if (Dt !== -1) {
												if (xt === "up") {
													const Jt = Dt - 1,
														[si, Zt] = ei[Jt] ?? [];
													if (!Zt) return;
													const ci = Vt.getBoundingClientRect(),
														ri = ci.left + ci.width / 2,
														$i = ci.top + ci.height / 2;
													let Wt = 1 / 0,
														tt;
													for (const at of Zt) {
														const pi = at.dom.getBoundingClientRect(),
															Li = pi.left + pi.width / 2,
															Di = pi.top + pi.height / 2,
															Ui = (Li - ri) ** 2 + (Di - $i) ** 2;
														Ui < Wt && ((Wt = Ui), (tt = at));
													}
													return tt;
												} else if (xt === "down") {
													const Jt = Dt + 1,
														[si, Zt] = ei[Jt] ?? [];
													if (!Zt) return;
													const ci = Vt.getBoundingClientRect(),
														ri = ci.left + ci.width / 2,
														$i = ci.top + ci.height / 2;
													let Wt = 1 / 0,
														tt;
													for (const at of Zt) {
														const pi = at.dom.getBoundingClientRect(),
															Li = pi.left + pi.width / 2,
															Di = pi.top + pi.height / 2,
															Ui = (Li - ri) ** 2 + (Di - $i) ** 2;
														Ui < Wt && ((Wt = Ui), (tt = at));
													}
													return tt;
												} else if (xt === "left" || xt === "right") {
													const [Jt, si] = ei[Dt] ?? [],
														Zt = si.findIndex((ci) => ci.dom === Vt);
													return xt === "left"
														? si[Zt - 1] || si[si.length - 1]
														: si[Zt + 1] || si[0];
												}
											}
										},
										Xe =
											Kt.key === "ArrowUp" || Kt.key === "k"
												? "up"
												: Kt.key === "ArrowDown" || Kt.key === "j"
													? "down"
													: Kt.key === "ArrowLeft" || Kt.key === "h"
														? "left"
														: Kt.key === "ArrowRight" || Kt.key === "l"
															? "right"
															: void 0,
										It = Xe ? ze(Xe) : void 0,
										Lt = g.$m
											? Kt.ctrlKey && !Kt.metaKey
											: Kt.metaKey && !Kt.ctrlKey;
									switch (Kt.key) {
										case "ArrowUp":
										case "k": {
											if (Kt.key === "k" && !Lt) break;
											Kt.preventDefault(),
												Kt.stopImmediatePropagation(),
												It
													? Nt(It.index)
													: ht === "suggestedPill"
														? se().focus()
														: q() === "bottom" && z.onFurtherArrowUp?.();
											break;
										}
										case "ArrowDown":
										case "j": {
											if (Kt.key === "j" && !Lt) break;
											Kt.preventDefault(),
												Kt.stopImmediatePropagation(),
												It
													? Nt(It.index)
													: ht === "pill" || !z.onFurtherArrowDown
														? se().focus()
														: z.onFurtherArrowDown?.();
											break;
										}
										case "ArrowLeft":
										case "h": {
											if (Kt.key === "h" && !Lt) break;
											Kt.preventDefault(),
												Kt.stopImmediatePropagation(),
												It && Nt(It.index);
											break;
										}
										case "ArrowRight":
										case "l": {
											if (Kt.key === "l" && !Lt) break;
											Kt.preventDefault(),
												Kt.stopImmediatePropagation(),
												It && Nt(It.index);
											break;
										}
										case "Delete":
										case "Backspace": {
											Ie(ti[Rt]);
											break;
										}
										case "Enter": {
											if (Rt === -2) {
												$e?.click();
												break;
											}
											const xt = ti[Rt];
											xt.onClick &&
												(xt.onClick(),
												Kt.preventDefault(),
												Kt.stopPropagation()),
												!z.disablePreview &&
													!V() &&
													xt.type !== "gitGraphFileSuggestion" &&
													G(!0);
											break;
										}
										case "Escape": {
											V() ? G(!1) : (Nt(-1), se().focus());
											break;
										}
									}
								};
							kt.document.addEventListener("keydown", hi),
								(0, h.onCleanup)(() => {
									kt.document.removeEventListener("keydown", hi);
								});
						}
					});
					const [Be, Se] = (0, h.createSignal)(-2),
						[ke, Ue] = (0, h.createSignal)(-1);
					(0, h.createEffect)(() => {
						Y() !== -1 && Se(Y());
					}),
						(0, h.createEffect)(() => {
							ne() !== -1 && Ue(ne());
						}),
						(0, h.createEffect)(
							(0, h.on)(
								() => z.suggestedPills?.(),
								() => {
									const ht = z.suggestedPills?.().length ?? 0;
									ht === 0 ? ee(-1) : ne() >= ht && ee(ht - 1);
								},
							),
						);
					const qe = (0, h.createMemo)(() => {
							const ht = Be();
							return be()[ht];
						}),
						Ae = (0, o.$9g)(),
						Me = (0, h.createMemo)(() => `add-file-pill-${z.id}-${Ae}`);
					function De(ht, Rt, Nt = !1) {
						return `pill-${z.id}-${Rt}-${ht.type}-${Ae}-${Nt ? "suggested" : ""}`;
					}
					(0, h.createEffect)(() => {
						if (z.selectPillSignal) {
							if (!z.turnOffSelectPillSignal) {
								console.error(
									"[fullInputBox] turnOffSelectPillSignal is not defined",
								);
								return;
							}
							const ht = Be();
							ie(ht !== -1 ? ht : 0), z.turnOffSelectPillSignal?.();
						}
					}),
						(0, h.createEffect)(() => {
							if (z.selectSuggestedPillSignal) {
								if (!z.turnOffSelectSuggestedPillSignal) {
									console.error(
										"[fullInputBox] turnOffSelectSuggestedPillSignal is not defined",
									);
									return;
								}
								if (!z.suggestedPills?.().length) se().focus();
								else {
									const ht = ke();
									ee(ht !== -1 ? ht : 0);
								}
								z.turnOffSelectSuggestedPillSignal?.();
							}
						});
					function Re(ht, Rt) {
						if (ht.type === "gitGraphFileSuggestion") {
							ht.onAdd?.(), ht.onRemove?.();
							return;
						}
						const Nt = Rt === Y();
						((V() && Nt) || z.disablePreview) && ht.onClick && ht.onClick(),
							z.disablePreview ||
								(Rt !== Y() || !V() ? (ie(Rt), G(!0)) : (ie(-1), G(!1)));
					}
					const je = (0, h.createMemo)(() => (0, T.$dbc)(be())),
						Ve = ["file", "code"];
					(0, h.createEffect)(() => {
						F.reactiveStorageService.nonPersistentStorage
							.reactiveDragTakeover && ct(!1);
					});
					const { showHover: Ze, hideHover: et } = (0, P.$z$b)(500),
						rt = [
							(() => {
								const ht = A();
								return (
									ht.addEventListener("focusout", () => {
										Z(!1);
									}),
									ht.addEventListener("focusin", () => {
										Z(!0);
									}),
									ht.style.setProperty("display", "flex"),
									ht.style.setProperty("gap", "4px"),
									ht.style.setProperty("align-items", "center"),
									ht.style.setProperty("outline", "none"),
									(0, C.insert)(
										ht,
										(0, m.createComponent)(N.$hbc, {
											get id() {
												return Me();
											},
											get isSelected() {
												return Y() === -2 || !!re();
											},
											setDomRef: (Rt) => {
												$e = Rt;
											},
											onClick: (Rt) => {
												ue(Rt);
											},
											onMouseEnter: (Rt) => {
												if (!z.allowCmdPFilePicker) return;
												const Nt = z.makeCmdPAlt
													? `${g.$m ? "\u2318\u2325P" : "Ctrl+Alt+P"}`
													: `${g.$m ? "\u2318P" : "Ctrl+P"}`;
												Nt &&
													Ze({
														content: Nt,
														target: Rt.target,
														position: { hoverPosition: n.HoverPosition.RIGHT },
														appearance: { showPointer: !0, compact: !0 },
														additionalClasses: ["chat-hover-tooltip"],
													});
											},
											onMouseLeave: () => {
												et();
											},
											get disableFocusOnSelect() {
												return !!re();
											},
											get label() {
												return be().length === 0 ? "Add context" : void 0;
											},
										}),
										null,
									),
									(0, C.insert)(
										ht,
										(0, m.createComponent)(h.Show, {
											get when() {
												return be().length > 0;
											},
											children: (Rt) => {
												const Nt = (0, h.createMemo)(() => {
													const jt = be()[0];
													if (
														jt.type === "file" &&
														jt.data &&
														typeof jt.data == "object" &&
														"uri" in jt.data
													) {
														const ti = F.customEditorLabelService.getName(
															p.URI.revive(jt.data.uri),
														);
														if (ti) return { ...jt, extraString: ti };
													}
													return jt;
												});
												return (0, m.createComponent)(
													N.$ibc,
													(0, r.mergeProps)(
														{
															get id() {
																return De(Nt(), 0);
															},
														},
														Nt,
														{
															get onRemove() {
																return Nt().onRemove
																	? () => {
																			Ie(Nt());
																		}
																	: void 0;
															},
															get isSelected() {
																return Y() === 0;
															},
															onClick: () => {
																Re(Nt(), 0);
															},
														},
													),
												);
											},
										}),
										null,
									),
									ht
								);
							})(),
							(0, m.createComponent)(h.For, {
								get each() {
									return je();
								},
								children: (ht, Rt) => {
									const Nt = (0, h.createMemo)(() => {
										if (
											ht.type === "file" &&
											ht.data &&
											typeof ht.data == "object" &&
											"uri" in ht.data
										) {
											const jt = F.customEditorLabelService.getName(
												p.URI.revive(ht.data.uri),
											);
											if (jt) return { ...ht, extraString: jt };
										}
										return ht;
									});
									return (0, m.createComponent)(h.Show, {
										get when() {
											return Rt() !== 0;
										},
										get children() {
											return (0, m.createComponent)(
												N.$ibc,
												(0, r.mergeProps)(
													{
														get id() {
															return De(Nt(), Rt());
														},
													},
													Nt,
													{
														get onRemove() {
															return Nt().onRemove
																? () => {
																		Ie(Nt());
																	}
																: void 0;
														},
														get isSelected() {
															return Rt() === Y();
														},
														onClick: () => {
															Re(Nt(), Rt());
														},
													},
												),
											);
										},
									});
								},
							}),
						],
						ft = (0, D.$y0b)();
					(0, l.useAutoHorizontalScroll)(
						ft,
						() => H,
						() =>
							Y() === -2
								? Me()
								: Y() !== -1 && be().length > 0
									? De(be()[Y()], Y())
									: "",
						() => [be(), Y()],
						() => !!z.shouldDisplayMultiRowPills,
					);
					const bt = (0, m.createComponent)(M.$Tbc, {
							get getContext() {
								return z.getContext;
							},
							get setContext() {
								return z.setContext;
							},
							get pillProps() {
								return qe();
							},
							hidePreview: () => G(!1),
							get setCodebaseSearchSettings() {
								return z.setCodebaseSearchSettings;
							},
							get getCodebaseSearchSettings() {
								return z.getCodebaseSearchSettings;
							},
							get isHighlighted() {
								return Y() !== -1;
							},
							onPinContext: () => {
								z.onPinContext && z.onPinContext(qe());
							},
							onUnpinContext: () => {
								z.onUnpinContext && z.onUnpinContext(qe());
							},
							get isContextPinned() {
								return z.checkIsContextPinned?.(qe());
							},
						}),
						nt = (0, h.createMemo)(
							() => !z.role || z.role === "top" || z.role === "selected",
						),
						[lt, ct] = (0, h.createSignal)(!1);
					let gt;
					return (() => {
						const ht = O(),
							Rt = ht.firstChild,
							Nt = Rt.firstChild,
							jt = Nt.firstChild,
							ti = Rt.nextSibling;
						ht.addEventListener("mouseup", () => {
							ct(!1);
						}),
							ht.addEventListener("mousedown", (Kt) => {
								Kt.target === Kt.currentTarget && z.onStartDrag?.(Kt);
							}),
							ht.addEventListener("click", (Kt) => {
								Kt.target === Kt.currentTarget &&
									!F.window.getSelection()?.toString() &&
									se().focus();
							}),
							ht.addEventListener("drop", (Kt) => {
								if (
									(clearTimeout(gt),
									ct(!1),
									Kt.defaultPrevented || Kt.hardCodedStopper)
								)
									return;
								Kt.preventDefault(), Kt.stopPropagation();
								const di = x?.querySelector(".aislash-editor-input");
								if (di) {
									const Ye = new DragEvent(Kt.type, Kt);
									(Ye.hardCodedStopper = !0), di.dispatchEvent(Ye);
								}
							}),
							ht.addEventListener("mouseleave", () => {
								ct(!1);
							}),
							ht.addEventListener("dragleave", (Kt) => {
								Kt.preventDefault(),
									(gt = setTimeout(() => {
										ct(!1);
									}, 50));
							}),
							ht.addEventListener("dragover", (Kt) => {
								Kt.preventDefault(), clearTimeout(gt), ct(!0);
							}),
							ht.addEventListener("dragenter", (Kt) => {
								Kt.preventDefault(), clearTimeout(gt), ct(!0);
							}),
							(0, E.use)((Kt) => {
								(x = Kt), z.setContainerRef?.(Kt);
							}, ht),
							(0, C.insert)(ht, () => z.children, Rt),
							(0, C.insert)(
								ht,
								(0, m.createComponent)(h.Show, {
									get when() {
										return z.topContent;
									},
									get children() {
										return z.topContent;
									},
								}),
								Rt,
							),
							(0, C.insert)(
								ht,
								(0, m.createComponent)(h.Show, {
									get when() {
										return re();
									},
									children: (Kt) =>
										(0, m.createComponent)(B, {
											get position() {
												return Kt();
											},
											close: (di) => {
												pe(), di || se().focus();
											},
											get nonBlockingRoot() {
												return `#${Me()}`;
											},
											get getPickerMenuProps() {
												return z.getPickerMenuProps;
											},
										}),
								}),
								Rt,
							),
							Rt.style.setProperty("border-bottom", "none"),
							Rt.style.setProperty("display", "flex"),
							Rt.style.setProperty("flex-direction", "column"),
							Rt.style.setProperty("gap", "2px"),
							Nt.addEventListener("focusout", () => {
								setTimeout(() => {
									(!He || !He.contains(F.window.document.activeElement)) &&
										((xe = !1), ie(-1));
								});
							}),
							Nt.addEventListener("focusin", () => {
								xe || (xe = !0);
							});
						const kt = He;
						typeof kt == "function" ? (0, E.use)(kt, Nt) : (He = Nt),
							Nt.style.setProperty("display", "flex"),
							Nt.style.setProperty("flex-direction", "column"),
							Nt.style.setProperty("gap", "4px"),
							Nt.style.setProperty("outline", "none"),
							Nt.style.setProperty("overflow", "hidden"),
							(0, C.insert)(
								Nt,
								(0, m.createComponent)(h.Show, {
									get when() {
										return (
											(0, d.memo)(
												() => !!(!nt() && V() && !z.disablePreview),
											)() &&
											(z.disableCodebasePillPreview !== !0 ||
												qe()?.type !== "codebase")
										);
									},
									children: bt,
								}),
								jt,
							);
						const hi = H;
						return (
							typeof hi == "function" ? (0, E.use)(hi, jt) : (H = jt),
							jt.style.setProperty("flex", "1"),
							jt.style.setProperty("display", "flex"),
							jt.style.setProperty("align-items", "center"),
							jt.style.setProperty("gap", "4px"),
							(0, C.insert)(
								jt,
								(0, m.createComponent)(h.Show, {
									get when() {
										return z.shouldDisplayMultiRowPills;
									},
									get fallback() {
										return [
											(0, m.createComponent)(D.$w0b, {
												scrollable: ft,
												scrollingDirection: "horizontal",
												style: { flex: 1, width: "1px", height: "20px" },
												innerContainerStyle: {
													display: "inline-flex",
													"align-items": "center",
													"padding-right": "4px",
												},
												nonReactiveElementOptions: {
													horizontalScrollbarSize: 4,
													verticalScrollbarSize: 0,
												},
												onlyShowScrollbarOnHover: !0,
												get children() {
													const Kt = R();
													return (
														Kt.addEventListener("mouseup", (di) => {
															di.target === di.currentTarget &&
																!F.window.getSelection()?.toString() &&
																se().focus();
														}),
														Kt.addEventListener("mousedown", (di) => {
															di.target === di.currentTarget &&
																z.onStartDrag &&
																z.onStartDrag(di);
														}),
														Kt.style.setProperty("display", "flex"),
														Kt.style.setProperty("gap", "4px"),
														Kt.style.setProperty("width", "100%"),
														(0, C.insert)(Kt, rt),
														Kt
													);
												},
											}),
											(0, m.createComponent)(h.Show, {
												get when() {
													return z.buttonArea;
												},
												get children() {
													const Kt = R();
													return (
														Kt.style.setProperty("margin-left", "auto"),
														(0, C.insert)(Kt, () => z.buttonArea),
														Kt
													);
												},
											}),
										];
									},
									get children() {
										const Kt = R();
										return (
											Kt.addEventListener("click", (di) => {
												di.target === di.currentTarget && se().focus();
											}),
											Kt.style.setProperty("align-items", "center"),
											Kt.style.setProperty("display", "flex"),
											Kt.style.setProperty("gap", "4px"),
											Kt.style.setProperty("width", "100%"),
											(0, C.insert)(Kt, rt),
											(0, w.effect)(() =>
												(be().length > 1 ? "wrap" : "nowrap") != null
													? Kt.style.setProperty(
															"flex-wrap",
															be().length > 1 ? "wrap" : "nowrap",
														)
													: Kt.style.removeProperty("flex-wrap"),
											),
											Kt
										);
									},
								}),
							),
							(0, C.insert)(
								Nt,
								(0, m.createComponent)(h.Show, {
									get when() {
										return (
											(0, d.memo)(
												() => !!(nt() && V() && !z.disablePreview),
											)() &&
											(z.disableCodebasePillPreview !== !0 ||
												qe()?.type !== "codebase")
										);
									},
									children: bt,
								}),
								null,
							),
							ti.addEventListener("click", (Kt) => {
								Kt.target === Kt.currentTarget && se().focus();
							}),
							ti.style.setProperty("position", "relative"),
							ti.style.setProperty("overflow", "hidden"),
							ti.style.setProperty("padding-top", "0px"),
							(0, C.insert)(
								ti,
								(0, m.createComponent)(
									I.$sbc,
									(0, r.mergeProps)(
										z,
										{
											get placeholder() {
												return z.placeholder;
											},
											get reactiveScrollableOptions() {
												return {
													verticalScrollbarSize: z.shouldNarrowScrollbar
														? 6
														: 10,
												};
											},
											ignoreTextForLastSelectionRemoval: !0,
											get minHeight() {
												return z.minHeight ?? 40;
											},
											get maxHeight() {
												return z.maxHeight ?? 240;
											},
										},
										S.$w_b,
										() => z.sideEffects(),
										() => z.supports(),
										{
											onMentionsMenuOpen: () => J(!0),
											onMentionsMenuClose: () => J(!1),
											get onEscape() {
												return z.onEscape;
											},
											get extraPlugins() {
												return [
													(0, m.createComponent)(v.$rbc, {}),
													(0, m.createComponent)(s.$_ac, {
														get text() {
															return z.text;
														},
														get richText() {
															return z.richText;
														},
														get force() {
															return z.forceText;
														},
														get setForce() {
															return z.setForceText;
														},
													}),
													...(z.extraPlugins ?? []),
												];
											},
											enableAddFilePlugin: !0,
											showDocs: !0,
											source: "chat",
											editorConfig: () => fe,
											useArrowsForHistory: !1,
											get isLongContextMode() {
												return z.longContextModeEnabled ?? !1;
											},
											get extraCommandListeners() {
												return Fe();
											},
											onFocus: () => {
												ie(-1), z.onFocus?.();
											},
											onBlur: () => {
												z.setIsAltPressed?.(!1),
													z.setIsCmdPressed?.(!1),
													z.onBlur?.();
											},
											get initText() {
												return z.richText;
											},
											get setText() {
												return z.setText;
											},
											get setRichText() {
												return z.setRichText;
											},
											get inputBoxDelegate() {
												return se();
											},
											style: { padding: "0px" },
											placeholderStyle: { padding: "0px" },
											setEditor: (Kt) => {
												z.setEditor?.(Kt),
													te(Kt),
													Kt.registerCommand(
														a.DROP_COMMAND,
														(di) => (ct(!1), !1),
														a.COMMAND_PRIORITY_LOW,
													);
											},
											get mentionIdToDelete() {
												return W();
											},
											setMentionIdToDelete: X,
											onTryDeleteContext: () => {
												const Kt = be();
												if (Kt.length === 0) return !1;
												const di = Kt.slice()
													.reverse()
													.find((Ye) => Ye.type !== "gitGraphFileSuggestion");
												return di?.onRemove ? (Ie(di, !0), !0) : !1;
											},
											externalHistoryBundle: {
												runExternalUndo: () => {
													z.undoRedoUri &&
														F.undoRedoService.undo(z.undoRedoUri);
												},
												runExternalRedo: () => {
													z.undoRedoUri &&
														F.undoRedoService.redo(z.undoRedoUri);
												},
												addToExternalUndoStack: (Kt) => {
													const di = _();
													if (!di) return;
													const Ye = JSON.stringify(di.getEditorState()),
														ze = JSON.stringify(
															Kt.historyState.current?.editorState,
														);
													if (Ye === ze) return;
													const Xe = z.undoRedoUri;
													Xe &&
														F.undoRedoService.pushElement(
															new f.$x7b(
																"Lexical Operation",
																"lexical-op",
																Xe,
																() => {
																	const It = _();
																	It && (0, u.undo)(It, Kt.historyState);
																},
																() => {
																	const It = _();
																	It && (0, u.redo)(It, Kt.historyState);
																},
															),
														);
												},
											},
											onSubmit: (Kt) => {
												ve?.(Kt);
											},
											onAddFile: (Kt) => {
												F.selectedContextService.addContext({
													contextType: "fileSelections",
													value: { uri: Kt },
													setContext: z.setContext,
													getContext: z.getContext,
												});
											},
										},
									),
								),
								null,
							),
							(0, C.insert)(
								ti,
								(0, m.createComponent)(h.Show, {
									get when() {
										return (
											z.bottomContent ||
											z.bottomLeftContent ||
											z.bottomRightContent
										);
									},
									get children() {
										const Kt = R();
										return (
											(0, C.insert)(
												Kt,
												(0, m.createComponent)(h.Show, {
													get when() {
														return z.bottomContent;
													},
													get fallback() {
														return [
															(0, d.memo)(() => z.bottomLeftContent),
															(() => {
																const di = R();
																return di.style.setProperty("flex", "1"), di;
															})(),
															(0, d.memo)(() => z.bottomRightContent),
														];
													},
													get children() {
														return z.bottomContent;
													},
												}),
											),
											(0, w.effect)((di) =>
												(0, i.style)(
													Kt,
													{
														display: "flex",
														"align-items": "center",
														"justify-content": "space-between",
														gap: "0.25rem",
														"flex-shrink": "0",
														height: "19px",
														...z.bottomContainerStyle,
													},
													di,
												),
											),
											Kt
										);
									},
								}),
								null,
							),
							(0, C.insert)(
								ht,
								(0, m.createComponent)(h.Show, {
									get when() {
										return lt();
									},
									get children() {
										const Kt = R();
										return (
											Kt.style.setProperty("position", "absolute"),
											Kt.style.setProperty("top", "0"),
											Kt.style.setProperty("left", "0"),
											Kt.style.setProperty("right", "0"),
											Kt.style.setProperty("bottom", "0"),
											Kt.style.setProperty("border-radius", "0.25rem"),
											Kt.style.setProperty(
												"background-color",
												"var(--vscode-editor-hoverHighlightBackground)",
											),
											Kt.style.setProperty("z-index", "1000"),
											Kt.style.setProperty("display", "flex"),
											Kt.style.setProperty("justify-content", "center"),
											Kt.style.setProperty("align-items", "center"),
											Kt.style.setProperty("font-size", "16px"),
											Kt.style.setProperty(
												"color",
												"var(--vscode-editor-foreground)",
											),
											Kt.style.setProperty("cursor", "copy"),
											Kt.style.setProperty("pointer-events", "none"),
											Kt.style.setProperty("opacity", "0.5"),
											Kt
										);
									},
								}),
								null,
							),
							(0, w.effect)((Kt) =>
								(0, i.style)(
									ht,
									{
										display: "flex",
										"flex-direction": "column",
										"align-items": "stretch",
										margin: q() !== "selected" ? "10px" : "0px",
										"flex-shrink": "0",
										border: e.$Ubc,
										"border-radius": "0.25rem",
										padding: "6px",
										gap: "6px",
										contain: "paint",
										"background-color": "var(--vscode-input-background)",
										position: "relative",
										...z.style,
									},
									Kt,
								),
							),
							ht
						);
					})();
				};
				e.$Vbc = U;
			},
		),
		define(
			de[1385],
			he([1, 0, 13, 9, 397, 36, 299, 1273, 54]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$jbc = a);
				const r = 20,
					u = 3;
				function a(h, c, n = {}) {
					const g = (0, E.$odc)(),
						p = (0, t.createMemo)(
							() =>
								g.reactiveStorageService.applicationUserPersistentStorage
									.notepadState.isNotepadEnabled ?? !0,
						),
						{ readonly: o = !1 } = n,
						f = (s) => (n.disablePillClicks ? void 0 : s);
					return (0, t.createMemo)(() => {
						const s = h(),
							l = c?.(),
							y = [];
						if (
							(s.editTrailContexts &&
								s.editTrailContexts.length > 0 &&
								s.editTrailContexts.forEach(($) => {
									y.push({
										type: "editTrailContext",
										extraString: "Edit trail",
										data: $,
										onRemove: o
											? void 0
											: (v = !0) => l?.removeEditTrailContext(v),
										onAdd: (v = !0) => {
											l?.insertEditTrailContext($, v);
										},
										secondaryTextOverride: `${$.editTrailSorted.length} edit${$.editTrailSorted.length === 1 ? "" : "s"}`,
									});
								}),
							s.notepads && s.notepads.length > 0 && p())
						)
							for (const $ of s.notepads) {
								const v =
									g.notepadDataService.notepadsData.notepads[$.notepadId];
								v &&
									y.push({
										type: "notepad",
										extraString: v.name,
										onRemove: o
											? void 0
											: (S = !0) => l?.removeNotepad($.notepadId, S),
										onAdd: (S = !0) => {
											l?.insertNotepad({ notepadId: $.notepadId }, S);
										},
										onClick: f(() => {
											g.notepadService.openNotepad($.notepadId);
										}),
										data: $.notepadId,
									});
							}
						if (
							(s.quotes &&
								s.quotes.length > 0 &&
								s.quotes.forEach(($, v) => {
									y.push({
										type: "quote",
										extraString: (0, C.$_gc)($.markdown),
										extraStringCutoff: 10,
										onRemove: o ? void 0 : (S = !0) => l?.removeQuote(v, S),
										onAdd: (S = !0) => {
											l?.insertQuote($, S);
										},
										data: $,
									});
								}),
							s.selectedCommits &&
								s.selectedCommits.length > 0 &&
								s.selectedCommits.forEach(($, v) => {
									y.push({
										type: "commit",
										extraString:
											$.message.length > r
												? $.message.slice(0, r) + "..."
												: $.message,
										onRemove: o ? void 0 : (S = !0) => l?.removeCommit(v, S),
										mentionPayload: { type: "selectedCommits", index: v },
										data: $,
										onAdd: (S = !0) => {
											l?.insertCommit($, S);
										},
									});
								}),
							s.selectedPullRequests &&
								s.selectedPullRequests.length > 0 &&
								s.selectedPullRequests.forEach(($, v) => {
									y.push({
										type: "pr",
										extraString: `#${$.number}`,
										onRemove: o
											? void 0
											: (S = !0) => l?.removePullRequest(v, S),
										mentionPayload: { type: "selectedPullRequests", index: v },
										data: $,
										onAdd: (S = !0) => {
											l?.insertPullRequest($, S);
										},
									});
								}),
							s.gitDiff &&
								y.push({
									type: "diff",
									onRemove: o ? void 0 : ($ = !0) => l?.removeGitDiff($),
									mentionPayload: { type: "gitDiff" },
									data: s.gitDiff,
								}),
							s.gitDiffFromBranchToMain &&
								y.push({
									type: "diffToMain",
									extraString: "PR",
									onRemove: o ? void 0 : ($ = !0) => l?.removeDiffToMain($),
									mentionPayload: { type: "gitDiffFromBranchToMain" },
									data: s.gitDiffFromBranchToMain,
								}),
							s.selectedImages &&
								s.selectedImages.forEach(($) => {
									y.push({
										type: "image",
										data: $,
										onRemove: o
											? void 0
											: (v = !0) => l?.removeImage($.uuid, v),
										onAdd: (v = !0) => {
											l?.insertImage(
												{ uri: i.URI.file($.path), uuid: $.uuid },
												v,
											);
										},
									});
								}),
							s.usesCodebase &&
								(!s.folderSelections || s.folderSelections.length === 0) &&
								y.push({
									type: "codebase",
									onRemove: o ? void 0 : ($ = !0) => l?.removeCodebase($),
									data: void 0,
									onAdd: ($ = !0) => {
										l?.addCodebase(void 0, $);
									},
									mentionPayload: { type: "usesCodebase" },
								}),
							s.useWeb &&
								y.push({
									type: "web",
									onRemove: o ? void 0 : ($ = !0) => l?.removeWeb($),
									data: void 0,
								}),
							s.folderSelections &&
								s.folderSelections.length > 0 &&
								s.folderSelections.forEach(($, v) => {
									y.push({
										type: "folder",
										extraString: (0, C.$$gc)($.relativePath),
										onRemove: o
											? void 0
											: (S = !0) => l?.removeFolderSelection(v, S),
										mentionPayload: { type: "folderSelections", index: v },
										onAdd: (S = !0) => {
											l?.insertFolderSelection($, S);
										},
									});
								}),
							(s.fileSelections && s.fileSelections.length > 0) ||
								(s.selections && s.selections.length > 0))
						) {
							const $ = [
									...(s.fileSelections || []).map((S) => ({
										type: "file",
										...S,
									})),
									...(s.selections || []).map((S) => ({ type: "code", ...S })),
								],
								v = (0, d.$j$b)($, (S) => i.URI.parse(S.uri.path ?? ""), {
									renderFolder: (S) => S,
									rootFolder:
										g.workspaceContextService.getWorkspace().folders[0].uri
											.fsPath,
								});
							$.forEach((S, I) => {
								const T = v[I],
									P = T.folderPath
										? `${T.folderPath}${m.sep}${T.fileName}`
										: T.fileName,
									k = I,
									L = I - (s.fileSelections?.length ?? 0);
								S.type === "file"
									? y.push({
											type: "file",
											extraString: P,
											hideTypeTitle: !0,
											onRemove: o
												? void 0
												: (D = !0) => {
														l?.removeFileSelection(k, D);
													},
											onAdd: (D = !0) => {
												l?.insertFileSelection(S, D);
											},
											fileName: S.uri.path ?? "",
											hoverText: g.labelService.getUriLabel(i.URI.from(S.uri), {
												relative: !0,
											}),
											onClick: f(() =>
												(0, C.$9gc)(g, { filePathOrUri: S.uri.path ?? "" }),
											),
											mentionPayload: { type: "fileSelections", index: k },
											data: S,
										})
									: S.type === "code" &&
										y.push({
											type: "code",
											extraString: `${P} (${S.range.selectionStartLineNumber}-${S.range.positionLineNumber})`,
											hideTypeTitle: !0,
											fileName: S.uri.path ?? "",
											hoverText: g.labelService.getUriLabel(i.URI.from(S.uri), {
												relative: !0,
											}),
											onClick: f(() =>
												(0, C.$9gc)(g, {
													filePathOrUri: S.uri.path ?? "",
													selection: {
														startLineNumber: S.range.selectionStartLineNumber,
														startColumn: S.range.selectionStartColumn,
														endLineNumber: S.range.positionLineNumber,
														endColumn: S.range.positionColumn,
													},
												}),
											),
											onRemove: o
												? void 0
												: (D = !0) => {
														l?.removeSelection(L, D);
													},
											onAdd: (D = !0) => {
												l?.insertSelection(S, D);
											},
											mentionPayload: { type: "selections", index: L },
											data: S,
										});
							});
						}
						return (
							s.terminalFiles &&
								s.terminalFiles.length > 0 &&
								s.terminalFiles.forEach(($, v) => {
									y.push({
										type: "terminalFile",
										extraString: $.text
											? $.text
											: (0, C.$$gc)($.uri.path ?? ""),
										onRemove: o
											? void 0
											: (S = !0) => {
													l?.removeTerminalFile?.(v, S);
												},
										fileName: $.text ?? $.uri.path ?? "",
										onClick: f(() =>
											(0, C.$9gc)(g, { filePathOrUri: $.uri.path ?? "" }),
										),
										mentionPayload: { type: "terminalFiles", index: v },
										data: $,
									});
								}),
							s.terminalSelections &&
								s.terminalSelections.length > 0 &&
								s.terminalSelections.forEach(($, v) => {
									y.push({
										type: "terminal",
										extraString: `Lines ${$.range.selectionStartLineNumber}-${$.range.positionLineNumber}`,
										fileName: $.uri.path ?? "",
										onClick: f(() =>
											(0, w.$fgc)(g.terminalService, {
												startLineNumber: $.range.selectionStartLineNumber,
												startColumn: $.range.selectionStartColumn,
												endLineNumber: $.range.positionLineNumber,
												endColumn: $.range.positionColumn,
											}),
										),
										onAdd: (S = !0) => {
											l?.insertTerminalSelection?.($, S);
										},
										onRemove: o
											? void 0
											: (S = !0) => {
													l?.removeTerminalSelection?.(v, S);
												},
										data: $,
									});
								}),
							s.selectedDocs &&
								s.selectedDocs.length > 0 &&
								(s.selectedDocs.length > u
									? (s.selectedDocs.slice(0, u).forEach(($) => {
											y.push({
												type: "docs",
												extraString: $.name,
												onRemove:
													o || !$.uuid
														? void 0
														: (v = !0) => l?.removeDocs($.uuid ?? "", v),
												onAdd: (v = !0) => {
													l?.insertDocs($, v);
												},
												data: $,
											});
										}),
										y.push({
											type: "docs",
											extraString: `+${s.selectedDocs.length - u} more`,
											data: void 0,
										}))
									: s.selectedDocs.forEach(($) => {
											y.push({
												type: "docs",
												extraString: $.name,
												hoverText: $.url,
												onRemove: o
													? void 0
													: (v = !0) => l?.removeDocs($.uuid ?? "", v),
												onAdd: (v = !0) => {
													l?.insertDocs($, v);
												},
												data: $,
												mentionPayload: { type: "selectedDocs", uuid: $.uuid },
											});
										})),
							s.externalLinks &&
								s.externalLinks.length > 0 &&
								s.externalLinks.forEach(($) => {
									y.push({
										type: "link",
										extraString: $.url,
										hoverText: $.url,
										onRemove: o ? void 0 : (v = !0) => l?.removeLink($.uuid, v),
										onAdd: (v = !0) => {
											l?.insertLink($, v);
										},
										data: $,
									});
								}),
							s.useLinterErrors &&
								y.push({
									type: "lint",
									onRemove: o ? void 0 : ($ = !0) => l?.removeLinterErrors($),
									mentionPayload: { type: "useLinterErrors" },
								}),
							y
						);
					});
				}
			},
		),
		define(
			de[2010],
			he([1, 0, 13, 58, 140, 1712, 270, 1385, 299, 36, 15, 9, 1273, 54, 1007]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$kbc = o);
				const g = 100,
					p = 300;
				function o(f, b, s, l = {}) {
					const y = (0, r.$odc)(),
						{ chatService: $ } = (0, w.$zgc)(),
						v = (0, E.$abc)(f, b),
						[S] = (0, C.$K0b)(i.$CW, y.configurationService, !1),
						[I] = (0, C.$K0b)(i.$oW, y.configurationService, !1),
						[T, P] = (0, t.createSignal)([]),
						[k, L] = (0, t.createSignal)(!1);
					let D;
					const M = () => {
						D && D.dispose(),
							L(!0),
							(D = (0, u.$Oh)(() => {
								y.aiChatService
									.getSortedCandidateFilesForBubble(f(), b())
									.then((A) => {
										P(A.slice(0, g).map((R) => ({ uri: R.uri }))), L(!1);
									});
							}, p));
					};
					return (
						(0, t.createEffect)(
							(0, t.on)([() => v().fileSelections, () => v().text], () => {
								l.readonly || !S() || M();
							}),
						),
						(0, t.createMemo)(() => {
							let A = (0, d.$jbc)(v, s, l)();
							if (!s || l.readonly || !S()) return A;
							const R = s();
							if (
								(I() && (A = A.filter((U) => U.data.isCurrentFile !== !0)),
								v().fileSelections.length === 0)
							)
								return A;
							const O = T().filter(
								(U) =>
									!v().fileSelections.some((z) => (0, a.$Ac)(z.uri, U.uri)),
							);
							return (
								(0, h.$j$b)(O, (U) => a.URI.parse(U.uri.path ?? ""), {
									renderFolder: (U) => U,
									rootFolder:
										y.workspaceContextService.getWorkspace().folders[0].uri
											.fsPath,
								})
									.slice(0, n.$k0b)
									.forEach((U, z) => {
										const F = O[z];
										if (
											v().fileSelections.find((H) => (0, a.$Ac)(H.uri, F.uri))
										)
											return;
										const x = U.folderPath
											? `${U.folderPath}${c.sep}${U.fileName}`
											: U.fileName;
										A.push({
											type: "gitGraphFileSuggestion",
											extraString: (0, m.$$gc)(F.uri.path ?? ""),
											isLoading: k(),
											keyboardHint: z < n.$k0b ? `\u2387${z + 1}` : void 0,
											fileName: F.uri.path ?? "",
											onClick: k()
												? void 0
												: () => {
														$.addContext({
															tabId: f(),
															bubbleId: b(),
															contextType: "fileSelections",
															value: F,
															shouldShowPreview: !1,
														}),
															P(T().filter((H, q) => q !== z));
													},
											onAdd: k()
												? void 0
												: (H = !0) => {
														$.addContext({
															tabId: f(),
															bubbleId: b(),
															contextType: "fileSelections",
															value: F,
															shouldShowPreview: !1,
														});
													},
											onRemove: k()
												? void 0
												: () => {
														P(T().filter((H, q) => q !== z));
													},
											data: F,
										});
									}),
								A
							);
						})
					);
				}
			},
		),
		define(
			de[4400],
			he([1, 0, 13, 7, 58, 12, 47, 270, 177, 36, 1385, 1046]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.useComposerPills = h);
				function h(c, n, g) {
					const p = (0, r.$odc)(),
						[o, f] = (0, t.createSignal)(-1),
						{ composerDataService: b } = p,
						s = g.inputDelegate,
						{ currentComposer: l } = (0, m.useComposerDataHandle)(() => c()),
						y = (0, t.createMemo)(() => {
							if (g.bubbleId) {
								const N = b.getComposerBubble(l().composerId, g.bubbleId);
								if (!N || !N.context)
									throw new Error("[composer] No context available");
								return N.context;
							}
							const M = c().data;
							if (!M)
								throw new Error("[composer] No current composer available");
							return M.context;
						}),
						[$] = (0, d.$K0b)(w.$DW, p.configurationService, !1),
						v = (0, t.createMemo)(() => {
							const M = (0, u.$jbc)(y, n)();
							return !n || !$(), M;
						}),
						S = (0, C.$9g)(),
						I = `add-file-pill-${l().composerId}-${S}`;
					function T(M, N) {
						return M === -2
							? I
							: N
								? `pill-${l().composerId}-${M}-${N.type}-${S}`
								: `pill-${l().composerId}-${M}-${S}`;
					}
					function P(M, N = !0) {
						const A = o();
						let R = A;
						const O =
							M.type === "gitGraphFileSuggestion"
								? v().length
								: v().filter((U) => U.type !== "gitGraphFileSuggestion").length;
						A === O - 1 ? (R = A - 1) : A === 0 && O === 1 && (R = -1);
						const B = () => {
							R === -1 ? (f(-1), s.isFocused() || s.focus()) : f(R);
						};
						setTimeout(() => {
							B();
						}),
							M.onRemove?.(N);
					}
					function k(M) {
						(g.disablePillClicks && M.type !== "gitGraphFileSuggestion") ||
							M.onClick?.();
					}
					const L = () => {
							if (g.filePickerOpen()) return;
							const M = T(o(), v()[o()]),
								N = (0, i.$Ogb)()?.document.getElementById(M);
							N && N.focus();
						},
						D = () => {
							const M = v();
							if (M.length === 0) return !1;
							const N = M.slice()
								.reverse()
								.find((A) => A.type !== "gitGraphFileSuggestion");
							return N?.onRemove ? (P(N, !0), !0) : !1;
						};
					return (
						(0, t.createEffect)(() => {
							const M = g.filePickerOpen,
								N = g.handleAddPillClick,
								A = g.barRef,
								R = (O) => {
									if (
										M() ||
										(A() &&
											!A().contains((0, i.$Ogb)()?.document.activeElement) &&
											!((0, i.$Ogb)()?.document.activeElement).contains(A()))
									)
										return;
									const B = o(),
										U = v().length,
										z = E.$m
											? O.ctrlKey && !O.metaKey
											: O.metaKey && !O.ctrlKey;
									if (B !== -1)
										if ((0, a.$dcc)(O, "Escape"))
											O.preventDefault(),
												O.stopImmediatePropagation(),
												f(-1),
												s?.focus();
										else if ((0, a.$dcc)(O, "ArrowDown"))
											O.preventDefault(),
												O.stopImmediatePropagation(),
												f(-1),
												s?.focus();
										else if (
											(0, a.$dcc)(O, "ArrowRight") ||
											(z && O.key === "l")
										) {
											if (
												(O.preventDefault(),
												O.stopImmediatePropagation(),
												U === 0)
											)
												return;
											B === -2 ? f(0) : B === U - 1 ? f(-2) : f(B + 1);
										} else if (
											(0, a.$dcc)(O, "ArrowLeft") ||
											(z && O.key === "h")
										) {
											if (
												(O.preventDefault(),
												O.stopImmediatePropagation(),
												U === 0)
											)
												return;
											f(B === 0 ? -2 : B === -2 ? U - 1 : B - 1);
										} else
											(0, a.$dcc)(O, "Enter")
												? (O.preventDefault(),
													O.stopImmediatePropagation(),
													B === -2 ? N(O) : k(v()[B]))
												: (0, a.$dcc)(O, "Backspace") ||
														(0, a.$dcc)(O, "Delete")
													? (O.preventDefault(),
														O.stopImmediatePropagation(),
														B >= 0 && P(v()[B]))
													: (O.preventDefault(),
														O.stopImmediatePropagation(),
														f(-1),
														s?.focus());
								};
							(0, i.$Ogb)()?.document.addEventListener("keydown", R),
								(0, t.onCleanup)(() => {
									(0, i.$Ogb)()?.document.removeEventListener("keydown", R);
								});
						}),
						(0, t.createEffect)(() => {
							o() !== -1 && L();
						}),
						{
							allPills: v,
							selectedPillIndex: o,
							setSelectedPillIndex: f,
							generatePillIdByIndex: T,
							onPillsRemoveWrapper: P,
							deleteLastPill: D,
							onPillsClickWrapper: k,
						}
					);
				}
			},
		),
		define(
			de[2011],
			he([1, 0, 13, 23, 9, 36, 310]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$bbc = void 0);
				const d = {
						...C.$w_b,
						insertQuote: () => {},
						removeQuote: () => {},
						addImage: () => {},
						insertEditTrailContext: () => {},
						removeEditTrailContext: () => {},
					},
					m = (r, u, a, h, c) => {
						const n = (0, E.$odc)();
						return (0, t.createMemo)(() => ({
							...d,
							...(h().supportsEditTrail
								? {
										insertEditTrailContext: (p, o) => {
											r("editTrailContexts", p, void 0, o ?? !1);
										},
										removeEditTrailContext: (p) => {
											u("editTrailContexts", void 0, p ?? !1);
										},
									}
								: {}),
							...(h().supportsGit
								? {
										insertCommit: (p, o) => {
											r("selectedCommits", p, p.uuid, o ?? !1);
										},
										commits: c().selectedCommits ?? [],
										removeCommit: (p, o) => {
											u("selectedCommits", p, o ?? !1);
										},
										insertPullRequest: (p, o) => {
											r("selectedPullRequests", p, p.uuid, o ?? !1);
										},
										pullRequests: c().selectedPullRequests ?? [],
										removePullRequest: (p, o) => {
											u("selectedPullRequests", p, o ?? !1);
										},
										insertGitDiff: (p, o) => {
											r("gitDiff", !0, p, o ?? !1);
										},
										removeGitDiff: (p) => {
											u("gitDiff", void 0, p ?? !1);
										},
										insertDiffToMain: (p, o) => {
											r("gitDiffFromBranchToMain", !0, p, o ?? !1);
										},
										removeDiffToMain: (p) => {
											u("gitDiffFromBranchToMain", void 0, p ?? !1);
										},
									}
								: {}),
							...(h().supportsFolderSelections
								? {
										folderSelections: c().folderSelections ?? [],
										insertFolderSelection: (p, o) => {
											r("folderSelections", p, p.uuid, o ?? !1);
										},
										removeFolderSelection: (p, o) => {
											u("folderSelections", p, o ?? !1);
										},
									}
								: {}),
							selections: c().selections ?? [],
							insertSelection(p, o) {
								r("selections", p, p.uuid, o ?? !1),
									n.aiChatService.maybeCheckLongFilesFit(!0);
							},
							removeSelection: (p, o) => {
								u("selections", p, o ?? !1);
							},
							...(h().supportsDocs !== !1
								? {
										selectedDocs: c().selectedDocs ?? [],
										insertDocs(p, o) {
											r("selectedDocs", p, p.uuid, o ?? !1);
										},
										removeDocs: (p, o) => {
											const f =
												c().selectedDocs?.findIndex((b) => b.uuid === p) ?? -1;
											f !== -1 && u("selectedDocs", f, o ?? !1);
										},
									}
								: {}),
							...(h().supportsLint
								? {
										addLinterErrors: (p, o) => {
											r("useLinterErrors", !0, p, o ?? !1);
										},
										removeLinterErrors: (p) => {
											u("useLinterErrors", void 0, p ?? !1);
										},
									}
								: {}),
							...(h().supportsCodebase
								? {
										addCodebase: (p, o) => {
											r("usesCodebase", !0, p, o ?? !1);
										},
										removeCodebase: (p) => {
											u("usesCodebase", void 0, p ?? !1);
										},
									}
								: {}),
							...(h().supportsWeb
								? {
										addWeb: (p, o) => {
											r("useWeb", !0, p, o ?? !1);
										},
										removeWeb: (p) => {
											u("useWeb", void 0, p ?? !1);
										},
									}
								: {}),
							...(h().supportsLink
								? {
										insertLink: (p, o) => {
											r("externalLinks", p, p.uuid, o ?? !1);
										},
										linksSelections: c().externalLinks ?? [],
										removeLink: (p, o) => {
											const f =
												c().externalLinks?.findIndex((b) => b.uuid === p) ?? -1;
											f !== -1 && u("externalLinks", f, o ?? !1);
										},
									}
								: {}),
							addImage: (p, o) => {
								r("selectedImages", {
									uuid: p,
									path: o.path,
									dimension: o.dimension,
									loadedAt: o.loadedAt,
								});
							},
							insertImage: (p, o) => {
								const f = new Image();
								(f.src = i.$7g.uriToBrowserUri(w.URI.from(p.uri)).toString()),
									(f.onload = () => {
										r(
											"selectedImages",
											{
												uuid: p.uuid,
												path: w.URI.from(p.uri).fsPath,
												dimension: {
													width: f.naturalWidth,
													height: f.naturalHeight,
												},
												loadedAt: Date.now(),
											},
											p.uuid,
											o ?? !1,
										);
									});
							},
							imageUuids: c().selectedImages
								? c().selectedImages.map((p) => p.uuid)
								: [],
							removeImage: (p, o) => {
								const f =
									c().selectedImages?.findIndex((b) => b.uuid === p) ?? -1;
								f !== -1 && u("selectedImages", f, o ?? !1);
							},
							...(h().supportsQuotes
								? {
										insertQuote: (p, o) => {
											r("quotes", p, void 0, o ?? !1);
										},
										quotes: c().quotes ?? [],
										removeQuote: (p, o) => {
											u("quotes", p, o ?? !1);
										},
									}
								: {}),
							insertFileSelection: (p, o) => {
								r("fileSelections", p, p.uuid, o ?? !1);
							},
							fileSelections: c().fileSelections ?? [],
							removeFileSelection: (p, o) => {
								u("fileSelections", p, o ?? !1);
							},
							terminalSelections: c().terminalSelections ?? [],
							insertTerminalSelection(p, o) {
								r("terminalSelections", p, p.uuid, o ?? !1),
									n.aiChatService.maybeCheckLongFilesFit(!0);
							},
							removeTerminalSelection(p, o) {
								u("terminalSelections", p, o ?? !1);
							},
							terminalFiles: c().terminalFiles ?? [],
							insertTerminalFile(p, o) {
								r("terminalFiles", p, p.uuid, o ?? !1),
									n.aiChatService.maybeCheckLongFilesFit(!0);
							},
							removeTerminalFile(p, o) {
								u("terminalFiles", p, o ?? !1);
							},
							removeMention: (p) => (a(p), !0),
							...(h().supportsNotepads
								? {
										insertNotepad: (p, o) => {
											r(
												"notepads",
												{ notepadId: p.notepadId },
												p.uuid,
												o ?? !1,
											);
										},
										notepads: c().notepads ?? [],
										removeNotepad: (p, o) => {
											const f =
												c().notepads?.findIndex((b) => b.notepadId === p) ?? -1;
											f !== -1 && u("notepads", f, o ?? !1);
										},
									}
								: {}),
							...(h().supportsDiffReview
								? {
										addDiffReview: (p, o) => {
											r("useDiffReview", !0, p, o ?? !1);
										},
										removeDiffReview: (p) => {
											u("useDiffReview", void 0, p ?? !1);
										},
									}
								: {}),
							...(h().supportsContextPicking
								? {
										addContextPicking: (p, o) => {
											r("useContextPicking", !0, p, o ?? !1);
										},
										removeContextPicking: (p) => {
											u("useContextPicking", void 0, p ?? !1);
										},
									}
								: {}),
							...(h().supportsRememberThis
								? {
										addRememberThis: (p, o) => {
											r("useRememberThis", !0, p, o ?? !1);
										},
										removeRememberThis: (p) => {
											u("useRememberThis", void 0, p ?? !1);
										},
									}
								: {}),
						}));
					};
				e.$bbc = m;
			},
		),
		