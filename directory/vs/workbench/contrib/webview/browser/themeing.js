import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/fonts.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/theme.js';
import '../../../services/themes/common/workbenchThemeService.js';
define(
			de[3718],
			he([1, 0, 661, 6, 3, 38, 10, 51, 212, 333]),
			function (ce /*require*/,
 e /*exports*/,
 t /*fonts*/,
 i /*event*/,
 w /*lifecycle*/,
 E /*editorOptions*/,
 C /*configuration*/,
 d /*colorRegistry*/,
 m /*theme*/,
 r /*workbenchThemeService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$b6c = void 0),
					(d = mt(d));
				let u = class extends w.$1c {
					constructor(c, n) {
						super(),
							(this.c = c),
							(this.f = n),
							(this.a = void 0),
							(this.b = this.D(new i.$re())),
							(this.onThemeDataChanged = this.b.event),
							this.D(
								this.c.onDidColorThemeChange(() => {
									this.g();
								}),
							);
						const g = [
							"editor.fontFamily",
							"editor.fontWeight",
							"editor.fontSize",
							"accessibility.underlineLinks",
						];
						this.D(
							this.f.onDidChangeConfiguration((p) => {
								g.some((o) => p.affectsConfiguration(o)) && this.g();
							}),
						);
					}
					getTheme() {
						return this.c.getColorTheme();
					}
					getWebviewThemeData() {
						if (!this.a) {
							const c = this.f.getValue("editor"),
								n = c.fontFamily || E.EDITOR_FONT_DEFAULTS.fontFamily,
								g = c.fontWeight || E.EDITOR_FONT_DEFAULTS.fontWeight,
								p = c.fontSize || E.EDITOR_FONT_DEFAULTS.fontSize,
								o = this.f.getValue("accessibility.underlineLinks"),
								f = this.c.getColorTheme(),
								b = d
									.$xP()
									.getColors()
									.reduce((y, $) => {
										const v = f.getColor($.id);
										return (
											v &&
												(y["vscode-" + $.id.replace(".", "-")] = v.toString()),
											y
										);
									}, {}),
								s = {
									"vscode-font-family": t.$njb,
									"vscode-font-weight": "normal",
									"vscode-font-size": "13px",
									"vscode-editor-font-family": n,
									"vscode-editor-font-weight": g,
									"vscode-editor-font-size": p + "px",
									"text-link-decoration": o ? "underline" : "none",
									...b,
								},
								l = a.fromTheme(f);
							this.a = {
								styles: s,
								activeTheme: l,
								themeLabel: f.label,
								themeId: f.settingsId,
							};
						}
						return this.a;
					}
					g() {
						(this.a = void 0), this.b.fire();
					}
				};
				(e.$b6c = u), (e.$b6c = u = Ne([j(0, r.$rRb), j(1, C.$gj)], u));
				var a;
				(function (h) {
					(h.light = "vscode-light"),
						(h.dark = "vscode-dark"),
						(h.highContrast = "vscode-high-contrast"),
						(h.highContrastLight = "vscode-high-contrast-light");
				})(a || (a = {})),
					(function (h) {
						function c(n) {
							switch (n.type) {
								case m.ColorScheme.LIGHT:
									return h.light;
								case m.ColorScheme.DARK:
									return h.dark;
								case m.ColorScheme.HIGH_CONTRAST_DARK:
									return h.highContrast;
								case m.ColorScheme.HIGH_CONTRAST_LIGHT:
									return h.highContrastLight;
							}
						}
						h.fromTheme = c;
					})(a || (a = {}));
			},
		),
		