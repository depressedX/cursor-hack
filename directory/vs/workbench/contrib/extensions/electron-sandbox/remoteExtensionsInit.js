define(
			de[4078],
			he([
				1, 0, 33, 113, 119, 154, 22, 5, 128, 34, 211, 21, 68, 129, 2936, 957,
				150, 966, 357, 157, 384, 143,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0fd = void 0);
				let y = class {
					constructor(S, I, T, P, k, L, D, M, N) {
						(this.a = S),
							(this.b = I),
							(this.c = T),
							(this.d = P),
							(this.f = k),
							(this.g = L),
							(this.h = D),
							(this.i = M),
							(this.j = N),
							this.k();
					}
					async k() {
						const S = this.c.getConnection(),
							I = this.a.localExtensionManagementServer,
							T = this.a.remoteExtensionManagementServer;
						if (!S || !T || !I || !this.d.userDataSyncStore) return;
						const P = `${a.$jq}.${S.remoteAuthority}`;
						if (!this.b.getBoolean(P, a.StorageScope.APPLICATION, !0)) {
							this.g.trace(
								"Skipping initializing remote extensions because the window with this remote authority was opened before.",
							);
							return;
						}
						if (
							(this.b.store(
								P,
								!1,
								a.StorageScope.APPLICATION,
								a.StorageTarget.MACHINE,
							),
							!this.b.isNew(a.StorageScope.WORKSPACE))
						) {
							this.g.trace(
								"Skipping initializing remote extensions because this workspace was opened before.",
							);
							return;
						}
						if (!this.j.isEnabled()) return;
						const k = await this.i.resolveAuthority(S.remoteAuthority);
						if (!k.options?.authenticationSession) return;
						const D = (
							await this.h.getSessions(
								k.options?.authenticationSession.providerId,
							)
						).find((B) => B.id === k.options?.authenticationSession?.id);
						if (!D) {
							this.g.info(
								"Skipping initializing remote extensions because the account with given session id is not found",
								k.options.authenticationSession.id,
							);
							return;
						}
						const M = this.f.createInstance(
							o.$5xc,
							this.d.userDataSyncStore.url,
						);
						M.setAuthToken(
							D.accessToken,
							k.options.authenticationSession.providerId,
						);
						const N = await M.readResource(p.SyncResource.Extensions, null),
							A = new m.$Ki();
						A.set(w.$Hp, T.extensionManagementService),
							await this.f.createChild(A).createInstance($).initialize(N);
					}
				};
				(e.$0fd = y),
					(e.$0fd = y =
						Ne(
							[
								j(0, b.$EQb),
								j(1, a.$lq),
								j(2, l.$$m),
								j(3, p.$SRb),
								j(4, d.$Li),
								j(5, r.$ik),
								j(6, f.$$7),
								j(7, u.$3l),
								j(8, p.$4Rb),
							],
							y,
						));
				let $ = class extends n.$Z3c {
					constructor(S, I, T, P, k, L, D, M, N, A) {
						super(S, I, T, P, k, L, N, D), (this.c = M), (this.v = A);
					}
					async o(S) {
						const I = await this.t(S);
						if (!I) {
							this.j.info(
								"No synced extensions exist while initializing remote extensions.",
							);
							return;
						}
						const T = await this.p.getInstalled(),
							{ newExtensions: P } = this.u(I, T);
						if (!P.length) {
							this.j.trace("No new remote extensions to install.");
							return;
						}
						const k = await this.p.getTargetPlatform(),
							L = await this.c.getExtensions(
								P,
								{ targetPlatform: k, compatible: !0 },
								t.CancellationToken.None,
							);
						L.length &&
							(await Promise.allSettled(
								L.map(async (D) => {
									const M = await this.c.getManifest(
										D,
										t.CancellationToken.None,
									);
									if (M && this.v.canExecuteOnWorkspace(M)) {
										const N = I.find((A) =>
											(0, E.$7p)(A.identifier, A.identifier),
										);
										await this.p.installFromGallery(D, {
											installPreReleaseVersion: N?.preRelease,
											donotIncludePackAndDependencies: !0,
										});
									}
								}),
							));
					}
				};
				$ = Ne(
					[
						j(0, w.$Hp),
						j(1, g.$UAc),
						j(2, C.$ll),
						j(3, c.$Xl),
						j(4, i.$Ti),
						j(5, r.$ik),
						j(6, h.$Vl),
						j(7, w.$Ep),
						j(8, a.$lq),
						j(9, s.$JSb),
					],
					$,
				);
			},
		),
		