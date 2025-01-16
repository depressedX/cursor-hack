define(
			de[1891],
			he([1, 0, 4, 28, 30, 81, 1321, 51, 778, 333, 10, 12, 212]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$8vc = e.$4vc = e.$2vc = void 0),
					(e.$3vc = y),
					(e.$5vc = H),
					(e.$6vc = q),
					(e.$7vc = V),
					(t = mt(t)),
					(i = mt(i));
				const c = "Anysphere",
					n = "Anysphere",
					g = "Default High Contrast",
					p = "Default High Contrast Light",
					o = "vs-seti";
				e.$2vc = "Default";
				const f = w.$Io.as(E.$No.Configuration),
					b = [],
					s = [],
					l = [];
				function y(J) {
					return `\`#${J}#\``;
				}
				e.$4vc = "colorThemeConfiguration";
				const $ = {
						type: "string",
						markdownDescription: t.localize(
							12816,
							null,
							y(r.ThemeSettings.DETECT_COLOR_SCHEME),
						),
						default: a.$r ? n : c,
						tags: [e.$4vc],
						enum: b,
						enumDescriptions: l,
						enumItemLabels: s,
						errorMessage: t.localize(12817, null),
					},
					v = {
						type: "string",
						markdownDescription: t.localize(
							12818,
							null,
							y(r.ThemeSettings.DETECT_COLOR_SCHEME),
						),
						default: c,
						tags: [e.$4vc],
						enum: b,
						enumDescriptions: l,
						enumItemLabels: s,
						errorMessage: t.localize(12819, null),
					},
					S = {
						type: "string",
						markdownDescription: t.localize(
							12820,
							null,
							y(r.ThemeSettings.DETECT_COLOR_SCHEME),
						),
						default: n,
						tags: [e.$4vc],
						enum: b,
						enumDescriptions: l,
						enumItemLabels: s,
						errorMessage: t.localize(12821, null),
					},
					I = {
						type: "string",
						markdownDescription: t.localize(
							12822,
							null,
							y(r.ThemeSettings.DETECT_HC),
						),
						default: g,
						tags: [e.$4vc],
						enum: b,
						enumDescriptions: l,
						enumItemLabels: s,
						errorMessage: t.localize(12823, null),
					},
					T = {
						type: "string",
						markdownDescription: t.localize(
							12824,
							null,
							y(r.ThemeSettings.DETECT_HC),
						),
						default: p,
						tags: [e.$4vc],
						enum: b,
						enumDescriptions: l,
						enumItemLabels: s,
						errorMessage: t.localize(12825, null),
					},
					P = {
						type: "boolean",
						markdownDescription: t.localize(
							12826,
							null,
							y(r.ThemeSettings.PREFERRED_DARK_THEME),
							y(r.ThemeSettings.PREFERRED_LIGHT_THEME),
						),
						default: !1,
						tags: [e.$4vc],
					},
					k = {
						type: "object",
						description: t.localize(12827, null),
						allOf: [{ $ref: d.$HP }],
						default: {},
						defaultSnippets: [{ body: {} }],
					},
					L = {
						type: ["string", "null"],
						default: o,
						description: t.localize(12828, null),
						enum: [null],
						enumItemLabels: [t.localize(12829, null)],
						enumDescriptions: [t.localize(12830, null)],
						errorMessage: t.localize(12831, null),
					},
					D = {
						type: ["string", "null"],
						default: r.ThemeSettingDefaults.PRODUCT_ICON_THEME,
						description: t.localize(12832, null),
						enum: [r.ThemeSettingDefaults.PRODUCT_ICON_THEME],
						enumItemLabels: [t.localize(12833, null)],
						enumDescriptions: [t.localize(12834, null)],
						errorMessage: t.localize(12835, null),
					},
					M = {
						type: "boolean",
						default: !0,
						markdownDescription: t.localize(
							12836,
							null,
							y(r.ThemeSettings.PREFERRED_HC_DARK_THEME),
							y(r.ThemeSettings.PREFERRED_HC_LIGHT_THEME),
						),
						scope: E.ConfigurationScope.APPLICATION,
						tags: [e.$4vc],
					},
					N = {
						id: "workbench",
						order: 7.1,
						type: "object",
						properties: {
							[r.ThemeSettings.COLOR_THEME]: $,
							[r.ThemeSettings.PREFERRED_DARK_THEME]: v,
							[r.ThemeSettings.PREFERRED_LIGHT_THEME]: S,
							[r.ThemeSettings.PREFERRED_HC_DARK_THEME]: I,
							[r.ThemeSettings.PREFERRED_HC_LIGHT_THEME]: T,
							[r.ThemeSettings.FILE_ICON_THEME]: L,
							[r.ThemeSettings.COLOR_CUSTOMIZATIONS]: k,
							[r.ThemeSettings.PRODUCT_ICON_THEME]: D,
						},
					};
				f.registerConfiguration(N);
				const A = {
					id: "window",
					order: 8.1,
					type: "object",
					properties: {
						[r.ThemeSettings.DETECT_HC]: M,
						[r.ThemeSettings.DETECT_COLOR_SCHEME]: P,
					},
				};
				f.registerConfiguration(A);
				function R(J) {
					return { description: J, $ref: C.$Xvc };
				}
				const O = "^\\[[^\\]]*(\\]\\s*\\[[^\\]]*)*\\]$",
					B = {
						type: "object",
						properties: {
							comments: R(t.localize(12837, null)),
							strings: R(t.localize(12838, null)),
							keywords: R(t.localize(12839, null)),
							numbers: R(t.localize(12840, null)),
							types: R(t.localize(12841, null)),
							functions: R(t.localize(12842, null)),
							variables: R(t.localize(12843, null)),
							textMateRules: {
								description: t.localize(12844, null),
								$ref: C.$Wvc,
							},
							semanticHighlighting: {
								description: t.localize(12845, null),
								deprecationMessage: t.localize(12846, null),
								markdownDeprecationMessage: t.localize(
									12847,
									null,
									y("editor.semanticTokenColorCustomizations"),
								),
								type: "boolean",
							},
						},
						additionalProperties: !1,
					},
					U = {
						description: t.localize(12848, null),
						default: {},
						allOf: [{ ...B, patternProperties: { "^\\[": {} } }],
					},
					z = {
						type: "object",
						properties: {
							enabled: {
								type: "boolean",
								description: t.localize(12849, null),
								suggestSortText: "0_enabled",
							},
							rules: {
								$ref: m.$omc,
								description: t.localize(12850, null),
								suggestSortText: "0_rules",
							},
						},
						additionalProperties: !1,
					},
					F = {
						description: t.localize(12851, null),
						default: {},
						allOf: [{ ...z, patternProperties: { "^\\[": {} } }],
					},
					x = {
						id: "editor",
						order: 7.2,
						type: "object",
						properties: {
							[r.ThemeSettings.TOKEN_COLOR_CUSTOMIZATIONS]: U,
							[r.ThemeSettings.SEMANTIC_TOKEN_COLOR_CUSTOMIZATIONS]: F,
						},
					};
				f.registerConfiguration(x);
				function H(J) {
					J.sort((ee, _) => ee.label.localeCompare(_.label)),
						b.splice(0, b.length, ...J.map((ee) => ee.settingsId)),
						l.splice(0, l.length, ...J.map((ee) => ee.description || "")),
						s.splice(0, s.length, ...J.map((ee) => ee.label || ""));
					const W = { properties: {} },
						X = { properties: {} },
						Y = { properties: {} },
						ie = { $ref: d.$HP, additionalProperties: !1 },
						ne = { properties: B.properties, additionalProperties: !1 };
					for (const ee of J) {
						const _ = `[${ee.settingsId}]`;
						(W.properties[_] = ie),
							(X.properties[_] = ne),
							(Y.properties[_] = z);
					}
					(W.patternProperties = { [O]: ie }),
						(X.patternProperties = { [O]: ne }),
						(Y.patternProperties = { [O]: z }),
						(k.allOf[1] = W),
						(U.allOf[1] = X),
						(F.allOf[1] = Y),
						f.notifyConfigurationSchemaUpdated(N, x);
				}
				function q(J) {
					L.enum.splice(1, Number.MAX_VALUE, ...J.map((W) => W.settingsId)),
						L.enumItemLabels.splice(
							1,
							Number.MAX_VALUE,
							...J.map((W) => W.label),
						),
						L.enumDescriptions.splice(
							1,
							Number.MAX_VALUE,
							...J.map((W) => W.description || ""),
						),
						f.notifyConfigurationSchemaUpdated(N);
				}
				function V(J) {
					D.enum.splice(1, Number.MAX_VALUE, ...J.map((W) => W.settingsId)),
						D.enumItemLabels.splice(
							1,
							Number.MAX_VALUE,
							...J.map((W) => W.label),
						),
						D.enumDescriptions.splice(
							1,
							Number.MAX_VALUE,
							...J.map((W) => W.description || ""),
						),
						f.notifyConfigurationSchemaUpdated(N);
				}
				const G = {
					[h.ColorScheme.DARK]: r.ThemeSettings.PREFERRED_DARK_THEME,
					[h.ColorScheme.LIGHT]: r.ThemeSettings.PREFERRED_LIGHT_THEME,
					[h.ColorScheme.HIGH_CONTRAST_DARK]:
						r.ThemeSettings.PREFERRED_HC_DARK_THEME,
					[h.ColorScheme.HIGH_CONTRAST_LIGHT]:
						r.ThemeSettings.PREFERRED_HC_LIGHT_THEME,
				};
				class K {
					constructor(W, X) {
						(this.c = W), (this.d = X);
					}
					get colorTheme() {
						return this.c.getValue(this.getColorThemeSettingId());
					}
					get fileIconTheme() {
						return this.c.getValue(r.ThemeSettings.FILE_ICON_THEME);
					}
					get productIconTheme() {
						return this.c.getValue(r.ThemeSettings.PRODUCT_ICON_THEME);
					}
					get colorCustomizations() {
						return this.c.getValue(r.ThemeSettings.COLOR_CUSTOMIZATIONS) || {};
					}
					get tokenColorCustomizations() {
						return (
							this.c.getValue(r.ThemeSettings.TOKEN_COLOR_CUSTOMIZATIONS) || {}
						);
					}
					get semanticTokenColorCustomizations() {
						return this.c.getValue(
							r.ThemeSettings.SEMANTIC_TOKEN_COLOR_CUSTOMIZATIONS,
						);
					}
					getPreferredColorScheme() {
						if (
							this.c.getValue(r.ThemeSettings.DETECT_HC) &&
							this.d.highContrast
						)
							return this.d.dark
								? h.ColorScheme.HIGH_CONTRAST_DARK
								: h.ColorScheme.HIGH_CONTRAST_LIGHT;
						if (this.c.getValue(r.ThemeSettings.DETECT_COLOR_SCHEME))
							return this.d.dark ? h.ColorScheme.DARK : h.ColorScheme.LIGHT;
					}
					isDetectingColorScheme() {
						return this.c.getValue(r.ThemeSettings.DETECT_COLOR_SCHEME);
					}
					getColorThemeSettingId() {
						const W = this.getPreferredColorScheme();
						return W ? G[W] : r.ThemeSettings.COLOR_THEME;
					}
					async setColorTheme(W, X) {
						return (
							await this.e(this.getColorThemeSettingId(), W.settingsId, X), W
						);
					}
					async setFileIconTheme(W, X) {
						return (
							await this.e(r.ThemeSettings.FILE_ICON_THEME, W.settingsId, X), W
						);
					}
					async setProductIconTheme(W, X) {
						return (
							await this.e(r.ThemeSettings.PRODUCT_ICON_THEME, W.settingsId, X),
							W
						);
					}
					isDefaultColorTheme() {
						const W = this.c.inspect(this.getColorThemeSettingId());
						return W && W.default?.value === W.value;
					}
					findAutoConfigurationTarget(W) {
						const X = this.c.inspect(W);
						if (i.$sg(X.workspaceFolderValue))
							if (i.$sg(X.workspaceValue)) {
								if (!i.$sg(X.userRemote))
									return u.ConfigurationTarget.USER_REMOTE;
							} else return u.ConfigurationTarget.WORKSPACE;
						else return u.ConfigurationTarget.WORKSPACE_FOLDER;
						return u.ConfigurationTarget.USER;
					}
					async e(W, X, Y) {
						if (Y === void 0 || Y === "preview") return;
						const ie = this.c.inspect(W);
						if (Y === "auto") return this.c.updateValue(W, X);
						if (Y === u.ConfigurationTarget.USER) {
							if (X === ie.userValue) return Promise.resolve(void 0);
							if (X === ie.defaultValue) {
								if (i.$sg(ie.userValue)) return Promise.resolve(void 0);
								X = void 0;
							}
						} else if (
							(Y === u.ConfigurationTarget.WORKSPACE ||
								Y === u.ConfigurationTarget.WORKSPACE_FOLDER ||
								Y === u.ConfigurationTarget.USER_REMOTE) &&
							X === ie.value
						)
							return Promise.resolve(void 0);
						return this.c.updateValue(W, X, Y);
					}
				}
				e.$8vc = K;
			},
		),
		