define(
			de[2782],
			he([1, 0, 4, 30, 3, 39, 348, 63]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				var m;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$JMc = void 0);
				let r = class {
					static {
						m = this;
					}
					static {
						this.PREFIX = "?";
					}
					constructor(a, h) {
						(this.b = a), (this.c = h), (this.a = i.$Io.as(C.$1r.Quickaccess));
					}
					provide(a) {
						const h = new w.$Zc();
						return (
							h.add(
								a.onDidAccept(() => {
									const [c] = a.selectedItems;
									c && this.b.quickAccess.show(c.prefix, { preserveValue: !0 });
								}),
							),
							h.add(
								a.onDidChangeValue((c) => {
									const n = this.a.getQuickAccessProvider(
										c.substr(m.PREFIX.length),
									);
									n &&
										n.prefix &&
										n.prefix !== m.PREFIX &&
										this.b.quickAccess.show(n.prefix, { preserveValue: !0 });
								}),
							),
							(a.items = this.getQuickAccessProviders().filter(
								(c) => c.prefix !== m.PREFIX,
							)),
							h
						);
					}
					getQuickAccessProviders() {
						return this.a
							.getQuickAccessProviders()
							.sort((h, c) => h.prefix.localeCompare(c.prefix))
							.flatMap((h) => this.d(h));
					}
					d(a) {
						return a.helpEntries.map((h) => {
							const c = h.prefix || a.prefix,
								n = c || "\u2026";
							return {
								prefix: c,
								label: n,
								keybinding: h.commandId
									? this.c.lookupKeybinding(h.commandId)
									: void 0,
								ariaLabel: (0, t.localize)(2039, null, n, h.description),
								description: h.description,
							};
						});
					}
				};
				(e.$JMc = r), (e.$JMc = r = m = Ne([j(0, d.$DJ), j(1, E.$uZ)], r));
			},
		),
		