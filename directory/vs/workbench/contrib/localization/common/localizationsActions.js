define(
			de[3457],
			he([1, 0, 4, 63, 33, 3, 11, 672, 704, 141]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$65c = e.$55c = void 0);
				class u extends C.$3X {
					static {
						this.ID = "workbench.action.configureLocale";
					}
					constructor() {
						super({
							id: u.ID,
							title: (0, t.localize2)(7411, "Configure Display Language"),
							menu: { id: C.$XX.CommandPalette },
							metadata: {
								description: (0, t.localize2)(
									7412,
									"Changes the locale of VS Code based on installed language packs. Common languages include French, Chinese, Spanish, Japanese, German, Korean, and more.",
								),
							},
						});
					}
					async run(c) {
						const n = c.get(d.$FJ),
							g = c.get(i.$DJ),
							p = c.get(m.$7Sb),
							o = c.get(r.$MQb),
							f = await n.getInstalledLanguages(),
							b = new E.$Zc(),
							s = b.add(g.createQuickPick({ useSeparators: !0 }));
						if (
							((s.matchOnDescription = !0),
							(s.placeholder = (0, t.localize)(7407, null)),
							f?.length)
						) {
							const $ = [
								{ type: "separator", label: (0, t.localize)(7408, null) },
							];
							s.items = $.concat(this.a(f));
						}
						const l = new w.$Ce();
						b.add(
							s.onDispose(() => {
								l.cancel(), b.dispose();
							}),
						);
						const y = new Set(f?.map(($) => $.id) ?? []);
						n.getAvailableLanguages().then(($) => {
							const v = $.filter((S) => S.id && !y.has(S.id));
							v.length &&
								(s.items = [
									...s.items,
									{ type: "separator", label: (0, t.localize)(7409, null) },
									...this.a(v),
								]),
								(s.busy = !1);
						}),
							b.add(
								s.onDidAccept(async () => {
									const $ = s.activeItems[0];
									$ && (s.hide(), await p.setLocale($));
								}),
							),
							b.add(
								s.onDidTriggerItemButton(async ($) => {
									s.hide(),
										$.item.extensionId && (await o.open($.item.extensionId));
								}),
							),
							s.show(),
							(s.busy = !0);
					}
					a(c) {
						for (const n of c)
							n.extensionId &&
								(n.buttons = [
									{
										tooltip: (0, t.localize)(7410, null),
										iconClass: "codicon-info",
									},
								]);
						return c;
					}
				}
				e.$55c = u;
				class a extends C.$3X {
					static {
						this.ID = "workbench.action.clearLocalePreference";
					}
					static {
						this.LABEL = (0, t.localize2)(
							7413,
							"Clear Display Language Preference",
						);
					}
					constructor() {
						super({
							id: a.ID,
							title: a.LABEL,
							menu: { id: C.$XX.CommandPalette },
						});
					}
					async run(c) {
						await c.get(m.$7Sb).clearLocalePreference();
					}
				}
				e.$65c = a;
			},
		),
		