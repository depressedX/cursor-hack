define(
			de[3537],
			he([
				1, 0, 50, 3, 23, 19, 28, 9, 4, 11, 121, 31, 81, 8, 57, 113, 34, 40, 41,
				62, 84, 63, 30, 1638, 21, 25, 55, 357, 53, 52, 297, 131,
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
					(e.$Pgd = e.$Ogd = e.$Ngd = e.$Mgd = void 0),
					(e.$Mgd = (0, m.localize2)(8959, "Remote Tunnels")),
					(e.$Ngd = "remoteTunnelConnection"),
					(e.$Ogd = new c.$5j(e.$Ngd, "disconnected"));
				const M = "remoteTunnelServiceUsed",
					N = "remoteTunnelServicePromptedPreview",
					A = "remoteTunnelExtensionRecommended",
					R = "remoteTunnelHasUsed",
					O = 4 * 60 * 1e3,
					B = 2;
				var U;
				(function (H) {
					(H.turnOn = "workbench.remoteTunnel.actions.turnOn"),
						(H.turnOff = "workbench.remoteTunnel.actions.turnOff"),
						(H.connecting = "workbench.remoteTunnel.actions.connecting"),
						(H.manage = "workbench.remoteTunnel.actions.manage"),
						(H.showLog = "workbench.remoteTunnel.actions.showLog"),
						(H.configure = "workbench.remoteTunnel.actions.configure"),
						(H.copyToClipboard =
							"workbench.remoteTunnel.actions.copyToClipboard"),
						(H.learnMore = "workbench.remoteTunnel.actions.learnMore");
				})(U || (U = {}));
				var z;
				(function (H) {
					(H.turnOn = (0, m.localize)(8919, null)),
						(H.turnOff = (0, m.localize)(8920, null)),
						(H.showLog = (0, m.localize)(8921, null)),
						(H.configure = (0, m.localize)(8922, null)),
						(H.copyToClipboard = (0, m.localize)(8923, null)),
						(H.learnMore = (0, m.localize)(8924, null));
				})(z || (z = {}));
				let F = class extends i.$1c {
					constructor(q, V, G, K, J, W, X, Y, ie, ne, ee, _, te, Q) {
						super(),
							(this.j = q),
							(this.m = V),
							(this.n = G),
							(this.q = K),
							(this.r = W),
							(this.t = Y),
							(this.u = ie),
							(this.w = ne),
							(this.y = ee),
							(this.z = _),
							(this.C = te),
							(this.F = Q),
							(this.h = new Set()),
							(this.g = this.D(
								X.createLogger((0, E.$nh)(ie.logsHome, `${$.$z9c}.log`), {
									id: $.$z9c,
									name: $.$A9c,
								}),
							)),
							(this.a = e.$Ogd.bindTo(this.q));
						const Z = J.tunnelApplicationConfig;
						if (!Z || !J.tunnelApplicationName) {
							this.g.error(
								"Missing 'tunnelApplicationConfig' or 'tunnelApplicationName' in product.json. Remote tunneling is not available.",
							),
								(this.b = {
									authenticationProviders: {},
									editorWebUrl: "",
									extension: { extensionId: "", friendlyName: "" },
								});
							return;
						}
						(this.b = Z),
							this.D(this.w.onDidChangeTunnelStatus((se) => this.G(se))),
							this.S(),
							this.I(),
							this.H();
					}
					G(q) {
						(this.f = void 0),
							q.type === "disconnected"
								? (q.onTokenFailed && this.h.add(q.onTokenFailed.sessionId),
									this.a.set("disconnected"))
								: q.type === "connecting"
									? this.a.set("connecting")
									: q.type === "connected" &&
										((this.f = q.info), this.a.set("connected"));
					}
					async H() {
						await this.n.whenInstalledExtensionsRegistered();
						const q = this.b.extension,
							V = async () => {
								if (
									this.r.getBoolean(A, v.StorageScope.APPLICATION) ||
									(await this.n.getExtension(q.extensionId))
								)
									return !1;
								const K = this.r.get(M, v.StorageScope.APPLICATION);
								if (!K) return !1;
								let J;
								try {
									const X = JSON.parse(K);
									if (!(0, C.$ng)(X)) return !1;
									const { hostName: Y, timeStamp: ie } = X;
									if (
										!(0, C.$lg)(Y) ||
										!(0, C.$pg)(ie) ||
										new Date().getTime() > ie + O
									)
										return !1;
									J = Y;
								} catch {
									return !1;
								}
								const W = await this.w.getTunnelName();
								return !W || W === J ? !1 : J;
							},
							G = async () => {
								const K = await V();
								return K
									? (this.F.notify({
											severity: o.Severity.Info,
											message: (0, m.localize)(8925, null, K, q.friendlyName),
											actions: {
												primary: [
													new t.$rj(
														"showExtension",
														(0, m.localize)(8926, null),
														void 0,
														!0,
														() =>
															this.y.executeCommand(
																"workbench.extensions.action.showExtensionsWithIds",
																[q.extensionId],
															),
													),
													new t.$rj(
														"doNotShowAgain",
														(0, m.localize)(8927, null),
														void 0,
														!0,
														() => {
															this.r.store(
																A,
																!0,
																v.StorageScope.APPLICATION,
																v.StorageTarget.USER,
															);
														},
													),
												],
											},
										}),
										!0)
									: !1;
							};
						if (await V()) {
							const K = this.D(new i.$Zc());
							K.add(
								this.r.onDidChangeValue(
									v.StorageScope.APPLICATION,
									M,
									K,
								)(async () => {
									(await G()) && K.dispose();
								}),
							);
						}
					}
					async I() {
						const [q, V] = await Promise.all([
							this.w.getMode(),
							this.w.getTunnelStatus(),
						]);
						if ((this.G(V), q.active && q.session.token)) return;
						const G = async (J) => {
							const W =
								J &&
								this.w.onDidChangeTunnelStatus((ie) => {
									switch (ie.type) {
										case "connecting":
											ie.progress && J.report({ message: ie.progress });
											break;
									}
								});
							let X;
							if (q.active) {
								const ie = await this.Q(q.session);
								ie && (X = { ...q.session, token: ie });
							}
							const Y = await this.w.initialize(
								q.active && X ? { ...q, session: X } : $.$v9c,
							);
							if ((W?.dispose(), Y.type === "connected")) {
								(this.f = Y.info), this.a.set("connected");
								return;
							}
						};
						this.r.getBoolean(R, v.StorageScope.APPLICATION, !1)
							? await this.C.withProgress(
									{
										location: s.ProgressLocation.Window,
										title: (0, m.localize)(8928, null, U.showLog),
									},
									G,
								)
							: G(void 0);
					}
					J(q) {
						return q.session.accessToken || q.session.idToken;
					}
					async L(q) {
						if (this.f) return this.f;
						this.r.store(
							R,
							!0,
							v.StorageScope.APPLICATION,
							v.StorageTarget.MACHINE,
						);
						let V = !1;
						for (let G = 0; G < B; G++) {
							V = !1;
							const K = await this.M();
							if (K === void 0) {
								this.g.info(
									"No authentication session available, not starting tunnel",
								);
								return;
							}
							const J = await this.C.withProgress(
								{
									location: s.ProgressLocation.Notification,
									title: (0, m.localize)(8929, null, U.showLog),
								},
								(W) =>
									new Promise((X, Y) => {
										let ie = !1;
										const ne = this.w.onDidChangeTunnelStatus((te) => {
												switch (te.type) {
													case "connecting":
														te.progress && W.report({ message: te.progress });
														break;
													case "connected":
														ne.dispose(),
															(ie = !0),
															X(te.info),
															te.serviceInstallFailed &&
																this.F.notify({
																	severity: o.Severity.Warning,
																	message: (0, m.localize)(
																		8930,
																		null,
																		U.showLog,
																	),
																});
														break;
													case "disconnected":
														ne.dispose(),
															(ie = !0),
															(V = !!te.onTokenFailed),
															X(void 0);
														break;
												}
											}),
											ee = this.J(K),
											_ = {
												sessionId: K.session.id,
												token: ee,
												providerId: K.providerId,
												accountLabel: K.session.account.label,
											};
										this.w
											.startTunnel({ active: !0, asService: q, session: _ })
											.then((te) => {
												!ie &&
													(te.type === "connected" ||
														te.type === "disconnected") &&
													(ne.dispose(),
													te.type === "connected"
														? X(te.info)
														: ((V = !!te.onTokenFailed), X(void 0)));
											});
									}),
							);
							if (J || !V) return J;
						}
					}
					async M() {
						const q = await this.P(),
							V = new i.$Zc(),
							G = V.add(this.t.createQuickPick({ useSeparators: !0 }));
						return (
							(G.ok = !1),
							(G.placeholder = (0, m.localize)(8931, null)),
							(G.ignoreFocusOut = !0),
							(G.items = await this.O(q)),
							new Promise((K, J) => {
								V.add(
									G.onDidHide((W) => {
										K(void 0), V.dispose();
									}),
								),
									V.add(
										G.onDidAccept(async (W) => {
											const X = G.selectedItems[0];
											if ("provider" in X) {
												const Y = await this.j.createSession(
													X.provider.id,
													X.provider.scopes,
												);
												K(this.N(Y, X.provider.id));
											} else "session" in X ? K(X) : K(void 0);
											G.hide();
										}),
									),
									G.show();
							})
						);
					}
					N(q, V) {
						return {
							label: q.account.label,
							description: this.j.getProvider(V).label,
							session: q,
							providerId: V,
						};
					}
					async O(q) {
						const V = [];
						q.length &&
							(V.push({
								type: "separator",
								label: (0, m.localize)(8932, null),
							}),
							V.push(...q),
							V.push({
								type: "separator",
								label: (0, m.localize)(8933, null),
							}));
						for (const G of await this.R()) {
							const K = q.some((W) => W.providerId === G.id),
								J = this.j.getProvider(G.id);
							(!K || J.supportsMultipleAccounts) &&
								V.push({
									label: (0, m.localize)(8934, null, J.label),
									provider: G,
								});
						}
						return V;
					}
					async P() {
						const q = await this.R(),
							V = new Map(),
							G = await this.w.getMode();
						let K;
						for (const J of q) {
							const W = await this.j.getSessions(J.id, J.scopes);
							for (const X of W)
								if (!this.h.has(X.id)) {
									const Y = this.N(X, J.id);
									V.set(Y.session.account.id, Y),
										G.active && G.session.sessionId === X.id && (K = Y);
								}
						}
						return (
							K !== void 0 && V.set(K.session.account.id, K), [...V.values()]
						);
					}
					async Q(q) {
						if (q) {
							const V = (await this.P()).find(
								(G) => G.session.id === q.sessionId,
							);
							if (V) return this.J(V);
						}
					}
					async R() {
						const q = this.b.authenticationProviders,
							V = Object.keys(q).reduce(
								(K, J) => (K.push({ id: J, scopes: q[J].scopes }), K),
								[],
							),
							G = this.j.declaredProviders;
						return V.filter(({ id: K }) => G.some((J) => J.id === K));
					}
					S() {
						const q = this;
						this.D(
							(0, r.$4X)(
								class extends r.$3X {
									constructor() {
										super({
											id: U.turnOn,
											title: z.turnOn,
											category: e.$Mgd,
											precondition: c.$Kj.equals(e.$Ngd, "disconnected"),
											menu: [
												{ id: r.$XX.CommandPalette },
												{
													id: r.$XX.AccountsContext,
													group: "2_remoteTunnel",
													when: c.$Kj.equals(e.$Ngd, "disconnected"),
												},
											],
										});
									}
									async run(V) {
										const G = V.get(o.$4N),
											K = V.get(u.$Vxb),
											J = V.get(a.$ek),
											W = V.get(v.$lq),
											X = V.get(n.$GO),
											Y = V.get(l.$DJ),
											ie = V.get(b.$Bk);
										if (!W.getBoolean(N, v.StorageScope.APPLICATION, !1)) {
											const { confirmed: Z } = await X.confirm({
												message: (0, m.localize)(8935, null),
												primaryButton: (0, m.localize)(8936, null),
											});
											if (!Z) return;
											W.store(
												N,
												!0,
												v.StorageScope.APPLICATION,
												v.StorageTarget.USER,
											);
										}
										const ee = new i.$Zc(),
											_ = Y.createQuickPick();
										(_.placeholder = (0, m.localize)(8937, null)),
											(_.items = [
												{
													service: !1,
													label: (0, m.localize)(8938, null),
													description: (0, m.localize)(
														8939,
														null,
														ie.nameShort,
													),
												},
												{
													service: !0,
													label: (0, m.localize)(8940, null),
													description: (0, m.localize)(8941, null),
												},
											]);
										const te = await new Promise((Z) => {
											ee.add(
												_.onDidAccept(() => Z(_.selectedItems[0]?.service)),
											),
												ee.add(_.onDidHide(() => Z(void 0))),
												_.show();
										});
										if ((_.dispose(), te === void 0)) return;
										const Q = await q.L(te);
										if (Q) {
											const Z = q.U(Q),
												se = q.b.extension,
												re = Z.toString(!1).replace(/\)/g, "%29");
											G.notify({
												severity: o.Severity.Info,
												message: (0, m.localize)(
													8942,
													null,
													Q.tunnelName,
													Q.domain,
													re,
													U.manage,
													U.configure,
													U.turnOff,
													se.friendlyName,
													"https://code.visualstudio.com/docs/remote/tunnels",
												),
												actions: {
													primary: [
														new t.$rj(
															"copyToClipboard",
															(0, m.localize)(8943, null),
															void 0,
															!0,
															() => K.writeText(Z.toString(!0)),
														),
														new t.$rj(
															"showExtension",
															(0, m.localize)(8944, null),
															void 0,
															!0,
															() =>
																J.executeCommand(
																	"workbench.extensions.action.showExtensionsWithIds",
																	[se.extensionId],
																),
														),
													],
												},
											});
											const le = {
												hostName: Q.tunnelName,
												timeStamp: new Date().getTime(),
											};
											W.store(
												M,
												JSON.stringify(le),
												v.StorageScope.APPLICATION,
												v.StorageTarget.USER,
											);
										} else
											G.notify({
												severity: o.Severity.Info,
												message: (0, m.localize)(8945, null),
											}),
												await J.executeCommand(U.showLog);
									}
								},
							),
						),
							this.D(
								(0, r.$4X)(
									class extends r.$3X {
										constructor() {
											super({
												id: U.manage,
												title: (0, m.localize)(8946, null),
												category: e.$Mgd,
												menu: [
													{
														id: r.$XX.AccountsContext,
														group: "2_remoteTunnel",
														when: c.$Kj.equals(e.$Ngd, "connected"),
													},
												],
											});
										}
										async run() {
											q.W();
										}
									},
								),
							),
							this.D(
								(0, r.$4X)(
									class extends r.$3X {
										constructor() {
											super({
												id: U.connecting,
												title: (0, m.localize)(8947, null),
												category: e.$Mgd,
												menu: [
													{
														id: r.$XX.AccountsContext,
														group: "2_remoteTunnel",
														when: c.$Kj.equals(e.$Ngd, "connecting"),
													},
												],
											});
										}
										async run() {
											q.W();
										}
									},
								),
							),
							this.D(
								(0, r.$4X)(
									class extends r.$3X {
										constructor() {
											super({
												id: U.turnOff,
												title: z.turnOff,
												category: e.$Mgd,
												precondition: c.$Kj.notEquals(e.$Ngd, "disconnected"),
												menu: [
													{
														id: r.$XX.CommandPalette,
														when: c.$Kj.notEquals(e.$Ngd, ""),
													},
												],
											});
										}
										async run() {
											const V = q.f?.isAttached
													? (0, m.localize)(8948, null)
													: (0, m.localize)(8949, null),
												{ confirmed: G } = await q.m.confirm({ message: V });
											G && q.w.stopTunnel();
										}
									},
								),
							),
							this.D(
								(0, r.$4X)(
									class extends r.$3X {
										constructor() {
											super({
												id: U.showLog,
												title: z.showLog,
												category: e.$Mgd,
												menu: [
													{
														id: r.$XX.CommandPalette,
														when: c.$Kj.notEquals(e.$Ngd, ""),
													},
												],
											});
										}
										async run(V) {
											V.get(L.$o8).showChannel($.$z9c);
										}
									},
								),
							),
							this.D(
								(0, r.$4X)(
									class extends r.$3X {
										constructor() {
											super({
												id: U.configure,
												title: z.configure,
												category: e.$Mgd,
												menu: [
													{
														id: r.$XX.CommandPalette,
														when: c.$Kj.notEquals(e.$Ngd, ""),
													},
												],
											});
										}
										async run(V) {
											V.get(D.$7Z).openSettings({ query: $.$w9c });
										}
									},
								),
							),
							this.D(
								(0, r.$4X)(
									class extends r.$3X {
										constructor() {
											super({
												id: U.copyToClipboard,
												title: z.copyToClipboard,
												category: e.$Mgd,
												precondition: c.$Kj.equals(e.$Ngd, "connected"),
												menu: [
													{
														id: r.$XX.CommandPalette,
														when: c.$Kj.equals(e.$Ngd, "connected"),
													},
												],
											});
										}
										async run(V) {
											const G = V.get(u.$Vxb);
											if (q.f) {
												const K = q.U(q.f);
												G.writeText(K.toString(!0));
											}
										}
									},
								),
							),
							this.D(
								(0, r.$4X)(
									class extends r.$3X {
										constructor() {
											super({
												id: U.learnMore,
												title: z.learnMore,
												category: e.$Mgd,
												menu: [],
											});
										}
										async run(V) {
											await V.get(f.$7rb).open(
												"https://aka.ms/vscode-server-doc",
											);
										}
									},
								),
							);
					}
					U(q) {
						const V = this.z.getWorkspace(),
							G = V.folders;
						let K;
						G.length === 1
							? (K = G[0].uri)
							: V.configuration &&
								!(0, S.$aj)(V.configuration, this.u) &&
								(K = V.configuration);
						const J = d.URI.parse(q.link);
						return K?.scheme === w.Schemas.file
							? (0, E.$nh)(J, K.path)
							: (0, E.$nh)(J, this.u.userHome.path);
					}
					async W() {
						const q = await this.w.getMode();
						return new Promise((V, G) => {
							const K = new i.$Zc(),
								J = this.t.createQuickPick({ useSeparators: !0 });
							(J.placeholder = (0, m.localize)(8950, null)), K.add(J);
							const W = [];
							W.push({ id: U.learnMore, label: z.learnMore }),
								this.f
									? ((J.title = this.f.isAttached
											? (0, m.localize)(8951, null, this.f.tunnelName)
											: (0, m.localize)(8952, null, this.f.tunnelName)),
										W.push({
											id: U.copyToClipboard,
											label: z.copyToClipboard,
											description: this.f.domain,
										}))
									: (J.title = (0, m.localize)(8953, null)),
								W.push({ id: U.showLog, label: (0, m.localize)(8954, null) }),
								W.push({ type: "separator" }),
								W.push({
									id: U.configure,
									label: (0, m.localize)(8955, null),
									description: this.f?.tunnelName,
								}),
								W.push({
									id: U.turnOff,
									label: z.turnOff,
									description: q.active
										? `${q.session.accountLabel} (${q.session.providerId})`
										: void 0,
								}),
								(J.items = W),
								K.add(
									J.onDidAccept(() => {
										J.selectedItems[0] &&
											J.selectedItems[0].id &&
											this.y.executeCommand(J.selectedItems[0].id),
											J.hide();
									}),
								),
								K.add(
									J.onDidHide(() => {
										K.dispose(), V();
									}),
								),
								J.show();
						});
					}
				};
				(e.$Pgd = F),
					(e.$Pgd = F =
						Ne(
							[
								j(0, T.$$7),
								j(1, n.$GO),
								j(2, P.$q2),
								j(3, c.$6j),
								j(4, b.$Bk),
								j(5, v.$lq),
								j(6, p.$jk),
								j(7, l.$DJ),
								j(8, g.$Ui),
								j(9, $.$u9c),
								j(10, a.$ek),
								j(11, S.$Vi),
								j(12, s.$8N),
								j(13, o.$4N),
							],
							F,
						)),
					y.$Io
						.as(I.Extensions.Workbench)
						.registerWorkbenchContribution(F, k.LifecyclePhase.Restored),
					y.$Io
						.as(h.$No.Configuration)
						.registerConfiguration({
							type: "object",
							properties: {
								[$.$x9c]: {
									description: (0, m.localize)(8956, null),
									type: "string",
									scope: h.ConfigurationScope.APPLICATION,
									ignoreSync: !0,
									pattern: "^(\\w[\\w-]*)?$",
									patternErrorMessage: (0, m.localize)(8957, null),
									maxLength: 20,
									default: "",
								},
								[$.$y9c]: {
									description: (0, m.localize)(8958, null),
									type: "boolean",
									scope: h.ConfigurationScope.APPLICATION,
									default: !1,
								},
							},
						});
			},
		),
		