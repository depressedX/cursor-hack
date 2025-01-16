define(
			de[830],
			he([1, 0, 6, 3, 37, 28, 11, 20, 4, 621, 357, 286, 53]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hsb = void 0),
					(e.$fsb = c),
					(e.$gsb = n);
				function c(p) {
					return `onAuthenticationRequest:${p}`;
				}
				async function n(p, o) {
					const f = await p.get(`${o.urlProtocol}.loginAccount`);
					if (f)
						try {
							const b = JSON.parse(f);
							if (
								b &&
								(0, E.$lg)(b.id) &&
								(0, E.$lg)(b.accessToken) &&
								(0, E.$lg)(b.providerId)
							)
								return b;
						} catch (b) {
							console.error(`Failed parsing current auth session value: ${b}`);
						}
				}
				let g = class extends i.$1c {
					constructor(o, f, b) {
						super(),
							(this.j = o),
							(this.m = b),
							(this.a = this.D(new t.$re())),
							(this.onDidRegisterAuthenticationProvider = this.a.event),
							(this.b = this.D(new t.$re())),
							(this.onDidUnregisterAuthenticationProvider = this.b.event),
							(this.c = this.D(new t.$re())),
							(this.onDidChangeSessions = this.c.event),
							(this.f = this.D(new t.$re())),
							(this.onDidChangeDeclaredProviders = this.f.event),
							(this.g = new Map()),
							(this.h = this.D(new i.$0c())),
							(this.n = []),
							this.D(
								f.onDidChangeExtensionSessionAccess((s) => {
									this.c.fire({
										providerId: s.providerId,
										label: s.accountName,
										event: { added: [], changed: [], removed: [] },
									});
								}),
							),
							this.q();
					}
					get declaredProviders() {
						return this.n;
					}
					q() {
						if (this.m.options?.authenticationProviders?.length)
							for (const o of this.m.options.authenticationProviders)
								this.registerAuthenticationProvider(o.id, o);
					}
					registerDeclaredAuthenticationProvider(o) {
						if ((0, w.$jf)(o.id)) throw new Error((0, m.localize)(12100, null));
						if ((0, w.$jf)(o.label))
							throw new Error((0, m.localize)(12101, null));
						if (this.declaredProviders.some((f) => f.id === o.id))
							throw new Error((0, m.localize)(12102, null, o.id));
						this.n.push(o), this.f.fire();
					}
					unregisterDeclaredAuthenticationProvider(o) {
						const f = this.declaredProviders.findIndex((b) => b.id === o);
						f > -1 && this.declaredProviders.splice(f, 1), this.f.fire();
					}
					isAuthenticationProviderRegistered(o) {
						return this.g.has(o);
					}
					registerAuthenticationProvider(o, f) {
						this.g.set(o, f);
						const b = new i.$Zc();
						b.add(
							f.onDidChangeSessions((s) =>
								this.c.fire({ providerId: o, label: f.label, event: s }),
							),
						),
							(0, i.$Uc)(f) && b.add(f),
							this.h.set(o, b),
							this.a.fire({ id: o, label: f.label });
					}
					unregisterAuthenticationProvider(o) {
						const f = this.g.get(o);
						f && (this.g.delete(o), this.b.fire({ id: o, label: f.label })),
							this.h.deleteAndDispose(o);
					}
					getProviderIds() {
						const o = [];
						return (
							this.g.forEach((f) => {
								o.push(f.id);
							}),
							o
						);
					}
					getProvider(o) {
						if (this.g.has(o)) return this.g.get(o);
						throw new Error(
							`No authentication provider '${o}' is currently registered.`,
						);
					}
					async getAccounts(o) {
						const f = await this.getSessions(o),
							b = new Array(),
							s = new Set();
						for (const l of f)
							s.has(l.account.label) ||
								(s.add(l.account.label), b.push(l.account));
						return b;
					}
					async getSessions(o, f, b, s = !1) {
						const l = this.g.get(o) || (await this.r(o, s));
						if (l) return await l.getSessions(f, { account: b });
						throw new Error(
							`No authentication provider '${o}' is currently registered.`,
						);
					}
					async createSession(o, f, b) {
						const s =
							this.g.get(o) || (await this.r(o, !!b?.activateImmediate));
						if (s) return await s.createSession(f, { account: b?.account });
						throw new Error(
							`No authentication provider '${o}' is currently registered.`,
						);
					}
					async removeSession(o, f) {
						const b = this.g.get(o);
						if (b) return b.removeSession(f);
						throw new Error(
							`No authentication provider '${o}' is currently registered.`,
						);
					}
					async r(o, f) {
						await this.j.activateByEvent(
							c(o),
							f ? h.ActivationKind.Immediate : h.ActivationKind.Normal,
						);
						let b = this.g.get(o);
						if (b) return b;
						const s = new i.$Zc(),
							l = new Promise(($, v) => {
								s.add(
									t.Event.once(this.onDidRegisterAuthenticationProvider)(
										(S) => {
											if (S.id === o)
												if (((b = this.g.get(o)), b)) $(b);
												else
													throw new Error(
														`No authentication provider '${o}' is currently registered.`,
													);
										},
									),
								);
							}),
							y = new Promise(($, v) => {
								const S = setTimeout(() => {
									v(
										"Timed out waiting for authentication provider to register",
									);
								}, 5e3);
								s.add((0, i.$Yc)(() => clearTimeout(S)));
							});
						return Promise.race([l, y]).finally(() => s.dispose());
					}
				};
				(e.$hsb = g),
					(e.$hsb = g = Ne([j(0, h.$q2), j(1, r.$dsb), j(2, a.$5rb)], g)),
					(0, d.$lK)(u.$$7, g, d.InstantiationType.Delayed),
					(0, C.$4X)(
						class extends C.$3X {
							constructor() {
								super({
									id: "authentication.command.anysphere.signOut",
									title: {
										value: "Sign Out of GitHub",
										original: "Sign Out of GitHub",
									},
									f1: !0,
								});
							}
							run(o, ...f) {
								this.runAsync(o, ...f);
							}
							async runAsync(o, ...f) {
								const b = o.get(u.$$7),
									l = b.getProviderIds().map(async ($) => {
										try {
											const v = await b.getSessions($),
												S = {};
											return (
												v.forEach((I) => {
													S[I.account.label]
														? S[I.account.label].push(I)
														: (S[I.account.label] = [I]);
												}),
												{ providerId: $, sessions: S }
											);
										} catch {
											return { providerId: $ };
										}
									}),
									y = await Promise.all(l);
								for (const $ of y)
									if ($.sessions) {
										for (const v of Object.keys($.sessions))
											if ($.providerId === "github")
												for (const S of $.sessions[v])
													b.removeSession($.providerId, S.id);
									}
							}
						},
					);
			},
		),
		