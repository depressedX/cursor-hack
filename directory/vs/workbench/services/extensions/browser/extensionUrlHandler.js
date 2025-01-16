define(
			de[1835],
			he([
				1, 0, 4, 3, 9, 10, 57, 5, 21, 465, 87, 53, 109, 20, 55, 11, 63, 179, 32,
				62, 7, 75, 31, 29, 40, 78,
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
				var I;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Loc = void 0);
				const T = 5 * 60 * 1e3,
					P = 30 * 1e3,
					k = "extensionUrlHandler.urlToHandle",
					L = "extensions.confirmedUriHandlerExtensionIds",
					D = "extensionUrlHandler.confirmedExtensions";
				function M(B) {
					return /^[a-z0-9][a-z0-9\-]*\.[a-z0-9][a-z0-9\-]*$/i.test(B);
				}
				class N {
					get extensions() {
						const U = this.a.get(D, m.StorageScope.PROFILE, "[]");
						try {
							return JSON.parse(U);
						} catch {
							return [];
						}
					}
					constructor(U) {
						this.a = U;
					}
					has(U) {
						return this.extensions.indexOf(U) > -1;
					}
					add(U) {
						this.set([...this.extensions, U]);
					}
					set(U) {
						this.a.store(
							D,
							JSON.stringify(U),
							m.StorageScope.PROFILE,
							m.StorageTarget.MACHINE,
						);
					}
				}
				e.$Loc = (0, d.$Mi)("extensionUrlHandler");
				let A = class {
					constructor(U, z, F, x, H, q, V, G, K, J, W) {
						(this.e = z),
							(this.f = F),
							(this.g = x),
							(this.h = H),
							(this.i = q),
							(this.j = V),
							(this.k = G),
							(this.l = K),
							(this.m = J),
							(this.n = W),
							(this.a = new Map()),
							(this.b = new Map()),
							(this.c = new N(q));
						const X = (0, s.$igb)(l.$Bfb, () => this.q(), P),
							Y = this.i.get(k, m.StorageScope.WORKSPACE);
						Y &&
							(this.i.remove(k, m.StorageScope.WORKSPACE),
							this.handleURL(w.URI.revive(JSON.parse(Y)), { trusted: !0 })),
							(this.d = (0, i.$Xc)(U.registerHandler(this), X));
						const ie = R.cache;
						setTimeout(() => ie.forEach(([ne, ee]) => this.handleURL(ne, ee)));
					}
					async handleURL(U, z) {
						if (!M(U.authority)) return !1;
						const F = U.authority;
						this.k.publicLog2("uri_invoked/start", { extensionId: F });
						const x = this.a.get(h.$Gn.toKey(F));
						let H;
						if (x) H = x.extensionDisplayName;
						else {
							const J = await this.e.getExtension(F);
							if (J) H = J.displayName ?? "";
							else return await this.p(U, F, z), !0;
						}
						if (
							!(
								z?.trusted ||
								this.m.trustedExtensionProtocolHandlers?.includes(F) ||
								this.r(h.$Gn.toKey(F))
							)
						) {
							let J = U.toString(!1);
							J.length > 40 &&
								(J = `${J.substring(0, 30)}...${J.substring(J.length - 5)}`);
							const W = await this.f.confirm({
								message: (0, t.localize)(12325, null, H),
								checkbox: { label: (0, t.localize)(12326, null) },
								detail: J,
								primaryButton: (0, t.localize)(12327, null),
							});
							if (!W.confirmed)
								return (
									this.k.publicLog2("uri_invoked/cancel", { extensionId: F }),
									!0
								);
							W.checkboxChecked && this.c.add(h.$Gn.toKey(F));
						}
						const V = this.a.get(h.$Gn.toKey(F));
						if (V) return x ? !1 : await this.o(F, V, U, z);
						const G = new Date().getTime();
						let K = this.b.get(h.$Gn.toKey(F));
						return (
							K || ((K = []), this.b.set(h.$Gn.toKey(F), K)),
							K.push({ timestamp: G, uri: U }),
							await this.e.activateByEvent(
								`onUri:${h.$Gn.toKey(F)}`,
								a.ActivationKind.Immediate,
							),
							!0
						);
					}
					registerExtensionHandler(U, z) {
						this.a.set(h.$Gn.toKey(U), z);
						const F = this.b.get(h.$Gn.toKey(U)) || [];
						for (const { uri: x } of F) this.o(U, z, x);
						this.b.delete(h.$Gn.toKey(U));
					}
					unregisterExtensionHandler(U) {
						this.a.delete(h.$Gn.toKey(U));
					}
					async o(U, z, F, x) {
						return (
							this.k.publicLog2("uri_invoked/end", {
								extensionId: h.$Gn.toKey(U),
							}),
							await z.handleURL(F, x)
						);
					}
					async p(U, z, F) {
						this.k.publicLog2("uri_invoked/install_extension/start", {
							extensionId: z,
						});
						try {
							await this.g.executeCommand(
								"workbench.extensions.installExtension",
								z,
								{
									justification: {
										reason: `${(0, t.localize)(12328, null)}
${U.toString()}`,
										action: (0, t.localize)(12329, null),
									},
									enable: !0,
								},
							),
								this.k.publicLog2("uri_invoked/install_extension/accept", {
									extensionId: z,
								});
						} catch (H) {
							(0, $.$8)(H)
								? this.k.publicLog2("uri_invoked/install_extension/cancel", {
										extensionId: z,
									})
								: (this.k.publicLog2("uri_invoked/install_extension/error", {
										extensionId: z,
									}),
									this.l.error(H));
							return;
						}
						if (await this.e.getExtension(z))
							await this.handleURL(U, { ...F, trusted: !0 });
						else {
							if (
								(this.k.publicLog2("uri_invoked/install_extension/reload", {
									extensionId: z,
									isRemote: !!this.n.remoteAuthority,
								}),
								!(
									await this.f.confirm({
										message: (0, t.localize)(12330, null, z),
										primaryButton: (0, t.localize)(12331, null),
									})
								).confirmed)
							)
								return;
							this.i.store(
								k,
								JSON.stringify(U.toJSON()),
								m.StorageScope.WORKSPACE,
								m.StorageTarget.MACHINE,
							),
								await this.h.reload();
						}
					}
					q() {
						const U = new Date().getTime(),
							z = new Map();
						this.b.forEach((F, x) => {
							(F = F.filter(({ timestamp: H }) => U - H < T)),
								F.length > 0 && z.set(x, F);
						}),
							(this.b = z);
					}
					r(U) {
						return this.c.has(U) ? !0 : this.s().indexOf(U) > -1;
					}
					s() {
						const U = this.j.getValue(L);
						return Array.isArray(U) ? U : [];
					}
					dispose() {
						this.d.dispose(), this.a.clear(), this.b.clear();
					}
				};
				(A = Ne(
					[
						j(0, r.$2rb),
						j(1, a.$q2),
						j(2, C.$GO),
						j(3, y.$ek),
						j(4, u.$asb),
						j(5, m.$lq),
						j(6, E.$gj),
						j(7, f.$km),
						j(8, v.$4N),
						j(9, b.$Bk),
						j(10, S.$r8),
					],
					A,
				)),
					(0, c.$lK)(e.$Loc, A, c.InstantiationType.Eager);
				let R = class {
					static {
						I = this;
					}
					static {
						this.ID = "workbench.contrib.extensionUrlBootstrapHandler";
					}
					static {
						this.a = [];
					}
					static get cache() {
						I.b.dispose();
						const U = I.a;
						return (I.a = []), U;
					}
					constructor(U) {
						I.b = U.registerHandler(this);
					}
					async handleURL(U, z) {
						return M(U.authority) ? (I.a.push([U, z]), !0) : !1;
					}
				};
				(R = I = Ne([j(0, r.$2rb)], R)),
					(0, n.$s6)(R.ID, R, n.WorkbenchPhase.BlockRestore);
				class O extends g.$3X {
					constructor() {
						super({
							id: "workbench.extensions.action.manageAuthorizedExtensionURIs",
							title: (0, t.localize2)(
								12333,
								"Manage Authorized Extension URIs...",
							),
							category: (0, t.localize2)(12334, "Extensions"),
							menu: { id: g.$XX.CommandPalette, when: o.$7Lb.toNegated() },
						});
					}
					async run(U) {
						const z = U.get(m.$lq),
							F = U.get(p.$DJ),
							x = new N(z),
							H = x.extensions.map((V) => ({ label: V, picked: !0 }));
						if (H.length === 0) {
							await F.pick([{ label: (0, t.localize)(12332, null) }]);
							return;
						}
						const q = await F.pick(H, { canPickMany: !0 });
						q && x.set(q.map((V) => V.label));
					}
				}
				(0, g.$4X)(O);
			},
		),
		