define(de[3590], he([1, 0, 3, 286, 519]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$oXc = void 0);
			let E = class extends t.$1c {
				static {
					this.ID = "workbench.contrib.showPortCandidate";
				}
				constructor(d, m) {
					super();
					const r = m.options?.tunnelProvider?.showPortCandidate;
					r &&
						this.D(
							d.setCandidateFilter(async (u) => {
								const a = await Promise.all(
										u.map((c) => r(c.host, c.port, c.detail ?? "")),
									),
									h = [];
								if (a.length !== u.length) return u;
								for (let c = 0; c < u.length; c++) a[c] && h.push(u[c]);
								return h;
							}),
						);
				}
			};
			(e.$oXc = E), (e.$oXc = E = Ne([j(0, w.$5pc), j(1, i.$5rb)], E));
		}),
		define(
			de[3591],
			he([1, 0, 4, 374, 3, 286, 41, 9, 519, 34, 8, 839]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pXc = void 0),
					(t = mt(t));
				let h = class extends w.$1c {
					static {
						this.ID = "workbench.contrib.tunnelFactory";
					}
					constructor(n, g, p, o, f, b) {
						super(), (this.a = p);
						const s = g.options?.tunnelProvider?.tunnelFactory;
						if (s) {
							b.createKey(a.$t8.key, !0);
							let l = g.options?.tunnelProvider?.features?.privacyOptions ?? [];
							g.options?.tunnelProvider?.features?.public &&
								l.length === 0 &&
								(l = [
									{
										id: "private",
										label: t.localize(8808, null),
										themeIcon: "lock",
									},
									{
										id: "public",
										label: t.localize(8809, null),
										themeIcon: "eye",
									},
								]),
								this.D(
									n.setTunnelProvider({
										forwardPort: async ($, v) => {
											let S;
											try {
												S = s($, v);
											} catch {
												f.trace("tunnelFactory: tunnel provider error");
											}
											if (!S) return;
											let I;
											try {
												I = await S;
											} catch (k) {
												return (
													f.trace(
														"tunnelFactory: tunnel provider promise error",
													),
													k instanceof Error ? k.message : void 0
												);
											}
											const T = I.localAddress.startsWith("http")
												? I.localAddress
												: `http://${I.localAddress}`;
											return {
												tunnelRemotePort: I.remoteAddress.port,
												tunnelRemoteHost: I.remoteAddress.host,
												localAddress: await this.b(T),
												privacy:
													I.privacy ??
													(I.public
														? i.TunnelPrivacyId.Public
														: i.TunnelPrivacyId.Private),
												protocol: I.protocol ?? i.TunnelProtocol.Http,
												dispose: async () => {
													await I.dispose();
												},
											};
										},
									}),
								);
							const y = g.options?.tunnelProvider?.features
								? {
										features: {
											elevation:
												!!g.options?.tunnelProvider?.features?.elevation,
											public: !!g.options?.tunnelProvider?.features?.public,
											privacyOptions: l,
											protocol:
												g.options?.tunnelProvider?.features?.protocol === void 0
													? !0
													: !!g.options?.tunnelProvider?.features?.protocol,
										},
									}
								: void 0;
							o.setTunnelInformation(y);
						}
					}
					async b(n) {
						try {
							return (
								await this.a.resolveExternalUri(d.URI.parse(n))
							).resolved.toString();
						} catch {
							return n;
						}
					}
				};
				(e.$pXc = h),
					(e.$pXc = h =
						Ne(
							[
								j(0, i.$cO),
								j(1, E.$5rb),
								j(2, C.$7rb),
								j(3, m.$5pc),
								j(4, r.$ik),
								j(5, u.$6j),
							],
							h,
						));
			},
		),
		define(
			de[3592],
			he([1, 0, 10, 34, 2792, 20, 327, 110]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ydd = void 0);
				let m = class extends w.$O3c {
					constructor(u, a, h) {
						super(u, a), (this.g = h);
					}
					async resolveProxy(u) {
						return this.g.resolveProxy(u);
					}
					async lookupAuthorization(u) {
						return this.g.lookupAuthorization(u);
					}
					async lookupKerberosAuthorization(u) {
						return this.g.lookupKerberosAuthorization(u);
					}
					async loadCertificates() {
						return this.g.loadCertificates();
					}
				};
				(e.$ydd = m),
					(e.$ydd = m = Ne([j(0, t.$gj), j(1, i.$jk), j(2, d.$y7c)], m)),
					(0, E.$lK)(C.$Aq, m, E.InstantiationType.Delayed);
			},
		),
		