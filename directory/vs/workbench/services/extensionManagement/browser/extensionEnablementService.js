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
	