define(
			de[3305],
			he([1, 0, 275, 3, 4, 11, 57, 5, 62, 63, 621, 822, 357, 53]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$a1c = void 0);
				class n extends E.$3X {
					constructor() {
						super({
							id: "_manageTrustedExtensionsForAccount",
							title: (0, w.localize2)(
								4443,
								"Manage Trusted Extensions For Account",
							),
							category: (0, w.localize2)(4444, "Accounts"),
							f1: !0,
						});
					}
					run(o, f) {
						return o.get(d.$Li).createInstance(g).run(f);
					}
				}
				e.$a1c = n;
				let g = class {
					constructor(o, f, b, s, l, y, $) {
						(this.c = o),
							(this.d = f),
							(this.e = b),
							(this.f = s),
							(this.g = l),
							(this.h = y),
							(this.j = $);
					}
					async run(o) {
						const { providerId: f, accountLabel: b } = await this.k(
							o?.providerId,
							o?.accountLabel,
						);
						if (!f || !b) return;
						const s = await this.l(f, b);
						if (!s.length) return;
						const l = new i.$Zc(),
							y = this.n(l, f, b);
						(y.items = s),
							(y.selectedItems = s.filter(
								($) => $.type !== "separator" && !!$.picked,
							)),
							y.show();
					}
					async k(o, f) {
						if (!o || !f) {
							const b = new Array();
							for (const l of this.g.getProviderIds()) {
								const y = this.g.getProvider(l).label,
									$ = await this.g.getSessions(l),
									v = new Set();
								for (const S of $)
									v.has(S.account.label) ||
										(v.add(S.account.label),
										b.push({
											providerId: l,
											providerLabel: y,
											accountLabel: S.account.label,
										}));
							}
							const s = await this.f.pick(
								b.map((l) => ({
									providerId: l.providerId,
									label: l.accountLabel,
									description: l.providerLabel,
								})),
								{
									placeHolder: (0, w.localize)(4434, null),
									matchOnDescription: !0,
								},
							);
							if (s) (o = s.providerId), (f = s.label);
							else return { providerId: void 0, accountLabel: void 0 };
						}
						return { providerId: o, accountLabel: f };
					}
					async l(o, f) {
						const b = this.j.readAllowedExtensions(o, f),
							s = this.c.trustedExtensionAuthAccess,
							l = Array.isArray(s)
								? s
								: typeof s == "object"
									? (s[o] ?? [])
									: [];
						for (const T of l) {
							const P = b.find((k) => k.id === T);
							if (P) (P.allowed = !0), (P.trusted = !0);
							else {
								const k = await this.d.getExtension(T);
								k &&
									b.push({
										id: T,
										name: k.displayName || k.name,
										allowed: !0,
										trusted: !0,
									});
							}
						}
						if (!b.length) return this.e.info((0, w.localize)(4435, null)), [];
						const y = this.h.readAccountUsages(o, f),
							$ = [],
							v = [];
						for (const T of b) {
							const P = y.find((k) => T.id === k.extensionId);
							(T.lastUsed = P?.lastUsed), T.trusted ? $.push(T) : v.push(T);
						}
						const S = (T, P) => (P.lastUsed || 0) - (T.lastUsed || 0);
						return [
							...v.sort(S).map(this.m),
							{ type: "separator", label: (0, w.localize)(4436, null) },
							...$.sort(S).map(this.m),
						];
					}
					m(o) {
						const f = o.lastUsed,
							b = f
								? (0, w.localize)(4437, null, (0, t.$dn)(f, !0))
								: (0, w.localize)(4438, null);
						let s, l;
						return (
							o.trusted && ((s = (0, w.localize)(4439, null)), (l = !0)),
							{
								label: o.name,
								extension: o,
								description: b,
								tooltip: s,
								disabled: l,
								picked: o.allowed === void 0 || o.allowed,
							}
						);
					}
					n(o, f, b) {
						const s = o.add(this.f.createQuickPick({ useSeparators: !0 }));
						return (
							(s.canSelectMany = !0),
							(s.customButton = !0),
							(s.customLabel = (0, w.localize)(4440, null)),
							(s.title = (0, w.localize)(4441, null)),
							(s.placeholder = (0, w.localize)(4442, null)),
							o.add(
								s.onDidAccept(() => {
									const l = s.items
											.filter(($) => $.type !== "separator")
											.map(($) => $.extension),
										y = new Set(s.selectedItems.map(($) => $.extension));
									l.forEach(($) => {
										$.allowed = y.has($);
									}),
										this.j.updateAllowedExtensions(f, b, l),
										s.hide();
								}),
							),
							o.add(
								s.onDidHide(() => {
									o.dispose();
								}),
							),
							o.add(
								s.onDidCustom(() => {
									s.hide();
								}),
							),
							s
						);
					}
				};
				g = Ne(
					[
						j(0, m.$Bk),
						j(1, c.$q2),
						j(2, C.$GO),
						j(3, r.$DJ),
						j(4, h.$$7),
						j(5, a.$dqc),
						j(6, u.$dsb),
					],
					g,
				);
			},
		),
		