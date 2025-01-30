import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/common/types.js';
define(de[333], he([1, 0, 5, 35, 28]), function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/,
 i /*themeService*/,
 w /*types*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ExtensionData =
					e.$BRb =
					e.$ARb =
					e.ThemeSettingDefaults =
					e.ThemeSettings =
					e.$zRb =
					e.$yRb =
					e.$xRb =
					e.$wRb =
					e.$vRb =
					e.$uRb =
					e.$tRb =
					e.$sRb =
					e.$rRb =
						void 0),
				(e.$rRb = (0, t.$Ni)(i.$iP)),
				(e.$sRb = "vs"),
				(e.$tRb = "vs-dark"),
				(e.$uRb = "hc-black"),
				(e.$vRb = "hc-light"),
				(e.$wRb = "["),
				(e.$xRb = "]"),
				(e.$yRb = "*"),
				(e.$zRb = /\[(.+?)\]/g);
			var E;
			(function (m) {
				(m.COLOR_THEME = "workbench.colorTheme"),
					(m.FILE_ICON_THEME = "workbench.iconTheme"),
					(m.PRODUCT_ICON_THEME = "workbench.productIconTheme"),
					(m.COLOR_CUSTOMIZATIONS = "workbench.colorCustomizations"),
					(m.TOKEN_COLOR_CUSTOMIZATIONS = "editor.tokenColorCustomizations"),
					(m.SEMANTIC_TOKEN_COLOR_CUSTOMIZATIONS =
						"editor.semanticTokenColorCustomizations"),
					(m.PREFERRED_DARK_THEME = "workbench.preferredDarkColorTheme"),
					(m.PREFERRED_LIGHT_THEME = "workbench.preferredLightColorTheme"),
					(m.PREFERRED_HC_DARK_THEME =
						"workbench.preferredHighContrastColorTheme"),
					(m.PREFERRED_HC_LIGHT_THEME =
						"workbench.preferredHighContrastLightColorTheme"),
					(m.DETECT_COLOR_SCHEME = "window.autoDetectColorScheme"),
					(m.DETECT_HC = "window.autoDetectHighContrast"),
					(m.SYSTEM_COLOR_THEME = "window.systemColorTheme");
			})(E || (e.ThemeSettings = E = {}));
			var C;
			(function (m) {
				(m.COLOR_THEME_DARK = "Default Dark Modern"),
					(m.COLOR_THEME_LIGHT = "Default Light Modern"),
					(m.COLOR_THEME_HC_DARK = "Default High Contrast"),
					(m.COLOR_THEME_HC_LIGHT = "Default High Contrast Light"),
					(m.COLOR_THEME_DARK_OLD = "Default Dark+"),
					(m.COLOR_THEME_LIGHT_OLD = "Default Light+"),
					(m.FILE_ICON_THEME = "vs-seti"),
					(m.PRODUCT_ICON_THEME = "Default");
			})(C || (e.ThemeSettingDefaults = C = {})),
				(e.$ARb = {
					"activityBar.activeBorder": "#0078d4",
					"activityBar.background": "#181818",
					"activityBar.border": "#2b2b2b",
					"activityBar.foreground": "#d7d7d7",
					"activityBar.inactiveForeground": "#868686",
					"editorGroup.border": "#ffffff17",
					"editorGroupHeader.tabsBackground": "#181818",
					"editorGroupHeader.tabsBorder": "#2b2b2b",
					"statusBar.background": "#181818",
					"statusBar.border": "#2b2b2b",
					"statusBar.foreground": "#cccccc",
					"statusBar.noFolderBackground": "#1f1f1f",
					"tab.activeBackground": "#1f1f1f",
					"tab.activeBorder": "#1f1f1f",
					"tab.activeBorderTop": "#0078d4",
					"tab.activeForeground": "#ffffff",
					"tab.border": "#2b2b2b",
					"textLink.foreground": "#4daafc",
					"titleBar.activeBackground": "#181818",
					"titleBar.activeForeground": "#cccccc",
					"titleBar.border": "#2b2b2b",
					"titleBar.inactiveBackground": "#1f1f1f",
					"titleBar.inactiveForeground": "#9d9d9d",
					"welcomePage.tileBackground": "#2b2b2b",
				}),
				(e.$BRb = {
					"activityBar.activeBorder": "#005FB8",
					"activityBar.background": "#f8f8f8",
					"activityBar.border": "#e5e5e5",
					"activityBar.foreground": "#1f1f1f",
					"activityBar.inactiveForeground": "#616161",
					"editorGroup.border": "#e5e5e5",
					"editorGroupHeader.tabsBackground": "#f8f8f8",
					"editorGroupHeader.tabsBorder": "#e5e5e5",
					"statusBar.background": "#f8f8f8",
					"statusBar.border": "#e5e5e5",
					"statusBar.foreground": "#3b3b3b",
					"statusBar.noFolderBackground": "#f8f8f8",
					"tab.activeBackground": "#ffffff",
					"tab.activeBorder": "#f8f8f8",
					"tab.activeBorderTop": "#005fb8",
					"tab.activeForeground": "#3b3b3b",
					"tab.border": "#e5e5e5",
					"textLink.foreground": "#005fb8",
					"titleBar.activeBackground": "#f8f8f8",
					"titleBar.activeForeground": "#1e1e1e",
					"titleBar.border": "#E5E5E5",
					"titleBar.inactiveBackground": "#f8f8f8",
					"titleBar.inactiveForeground": "#8b949e",
					"welcomePage.tileBackground": "#f3f3f3",
				});
			var d;
			(function (m) {
				function r(h) {
					return (
						h && {
							_extensionId: h.extensionId,
							_extensionIsBuiltin: h.extensionIsBuiltin,
							_extensionName: h.extensionName,
							_extensionPublisher: h.extensionPublisher,
						}
					);
				}
				m.toJSONObject = r;
				function u(h) {
					if (
						h &&
						(0, w.$lg)(h._extensionId) &&
						(0, w.$rg)(h._extensionIsBuiltin) &&
						(0, w.$lg)(h._extensionName) &&
						(0, w.$lg)(h._extensionPublisher)
					)
						return {
							extensionId: h._extensionId,
							extensionIsBuiltin: h._extensionIsBuiltin,
							extensionName: h._extensionName,
							extensionPublisher: h._extensionPublisher,
						};
				}
				m.fromJSONObject = u;
				function a(h, c, n = !1) {
					return {
						extensionPublisher: h,
						extensionId: `${h}.${c}`,
						extensionName: c,
						extensionIsBuiltin: n,
					};
				}
				m.fromName = a;
			})(d || (e.ExtensionData = d = {}));
		}),
		