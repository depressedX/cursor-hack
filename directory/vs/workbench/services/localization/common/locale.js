define(de[704], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$8Sb = e.$7Sb = void 0),
				(e.$7Sb = (0, t.$Mi)("localizationService")),
				(e.$8Sb = (0, t.$Mi)("activeLanguageService"));
		}),
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
		define(
			de[3458],
			he([1, 0, 3, 4, 11, 102, 30, 3457, 244, 175]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$75c = void 0);
				class u extends t.$1c {
					constructor() {
						super(),
							(0, w.$4X)(d.$55c),
							(0, w.$4X)(d.$65c),
							r.$n2.registerExtensionPoint({
								extensionPoint: "localizations",
								defaultExtensionKind: ["ui", "workspace"],
								jsonSchema: {
									description: (0, i.localize)(7395, null),
									type: "array",
									default: [],
									items: {
										type: "object",
										required: ["languageId", "translations"],
										defaultSnippets: [
											{
												body: {
													languageId: "",
													languageName: "",
													localizedLanguageName: "",
													translations: [{ id: "vscode", path: "" }],
												},
											},
										],
										properties: {
											languageId: {
												description: (0, i.localize)(7396, null),
												type: "string",
											},
											languageName: {
												description: (0, i.localize)(7397, null),
												type: "string",
											},
											localizedLanguageName: {
												description: (0, i.localize)(7398, null),
												type: "string",
											},
											translations: {
												description: (0, i.localize)(7399, null),
												type: "array",
												default: [{ id: "vscode", path: "" }],
												items: {
													type: "object",
													required: ["id", "path"],
													properties: {
														id: {
															type: "string",
															description: (0, i.localize)(7400, null),
															pattern:
																"^((vscode)|([a-z0-9A-Z][a-z0-9A-Z-]*)\\.([a-z0-9A-Z][a-z0-9A-Z-]*))$",
															patternErrorMessage: (0, i.localize)(7401, null),
														},
														path: {
															type: "string",
															description: (0, i.localize)(7402, null),
														},
													},
													defaultSnippets: [{ body: { id: "", path: "" } }],
												},
											},
										},
									},
								},
							});
					}
				}
				e.$75c = u;
				class a extends t.$1c {
					constructor() {
						super(...arguments), (this.type = "table");
					}
					shouldRender(c) {
						return !!c.contributes?.localizations;
					}
					render(c) {
						const n = c.contributes?.localizations || [];
						if (!n.length)
							return { data: { headers: [], rows: [] }, dispose: () => {} };
						const g = [
								(0, i.localize)(7403, null),
								(0, i.localize)(7404, null),
								(0, i.localize)(7405, null),
							],
							p = n
								.sort((o, f) => o.languageId.localeCompare(f.languageId))
								.map((o) => [
									o.languageId,
									o.languageName ?? "",
									o.localizedLanguageName ?? "",
								]);
						return { data: { headers: g, rows: p }, dispose: () => {} };
					}
				}
				C.$Io
					.as(m.Extensions.ExtensionFeaturesRegistry)
					.registerExtensionFeature({
						id: "localizations",
						label: (0, i.localize)(7406, null),
						access: { canToggle: !1 },
						renderer: new E.$Ji(a),
					});
			},
		),
		