import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/cancellation.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
define(de[468], he([1, 0, 33, 8, 5]), function (ce /*require*/,
 e /*exports*/,
 t /*cancellation*/,
 i /*contextkey*/,
 w /*instantiation*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$ZBc =
					e.$YBc =
					e.$XBc =
					e.$WBc =
					e.$VBc =
					e.$UBc =
					e.$TBc =
					e.$SBc =
					e.$RBc =
					e.$QBc =
					e.$PBc =
					e.$OBc =
					e.$NBc =
					e.$MBc =
					e.$LBc =
					e.$KBc =
					e.$JBc =
					e.$IBc =
					e.$HBc =
					e.$GBc =
					e.$FBc =
					e.$EBc =
					e.$DBc =
					e.$CBc =
					e.$BBc =
					e.$ABc =
					e.$zBc =
					e.$yBc =
					e.$xBc =
					e.$wBc =
					e.$vBc =
					e.$uBc =
					e.$tBc =
					e.$sBc =
					e.$rBc =
					e.$qBc =
					e.$pBc =
					e.$oBc =
					e.$nBc =
					e.$mBc =
					e.$lBc =
					e.$kBc =
					e.$jBc =
					e.$iBc =
					e.$hBc =
						void 0),
				(e.$1Bc = C),
				(e.$2Bc = d),
				(e.$hBc = (0, w.$Mi)("preferencesSearchService")),
				(e.$iBc = "settings.action.clearSearchResults"),
				(e.$jBc = "settings.action.showContextMenu"),
				(e.$kBc = "settings.action.suggestFilters"),
				(e.$lBc = new i.$5j("inSettingsEditor", !1)),
				(e.$mBc = new i.$5j("inSettingsJSONEditor", !1)),
				(e.$nBc = new i.$5j("inSettingsSearch", !1)),
				(e.$oBc = new i.$5j("settingsTocRowFocus", !1)),
				(e.$pBc = new i.$5j("settingRowFocus", !1)),
				(e.$qBc = new i.$5j("inKeybindings", !1)),
				(e.$rBc = new i.$5j("inKeybindingsSearch", !1)),
				(e.$sBc = new i.$5j("keybindingFocus", !1)),
				(e.$tBc = new i.$5j("whenFocus", !1)),
				(e.$uBc = "keybindings.editor.searchKeybindings"),
				(e.$vBc = "keybindings.editor.clearSearchResults"),
				(e.$wBc = "keybindings.editor.clearSearchHistory"),
				(e.$xBc = "keybindings.editor.recordSearchKeys"),
				(e.$yBc = "keybindings.editor.toggleSortByPrecedence"),
				(e.$zBc = "keybindings.editor.defineKeybinding"),
				(e.$ABc = "keybindings.editor.addKeybinding"),
				(e.$BBc = "keybindings.editor.defineWhenExpression"),
				(e.$CBc = "keybindings.editor.acceptWhenExpression"),
				(e.$DBc = "keybindings.editor.rejectWhenExpression"),
				(e.$EBc = "keybindings.editor.removeKeybinding"),
				(e.$FBc = "keybindings.editor.resetKeybinding"),
				(e.$GBc = "keybindings.editor.copyKeybindingEntry"),
				(e.$HBc = "keybindings.editor.copyCommandKeybindingEntry"),
				(e.$IBc = "keybindings.editor.copyCommandTitle"),
				(e.$JBc = "keybindings.editor.showConflicts"),
				(e.$KBc = "keybindings.editor.focusKeybindings"),
				(e.$LBc = "keybindings.editor.showDefaultKeybindings"),
				(e.$MBc = "keybindings.editor.showUserKeybindings"),
				(e.$NBc = "keybindings.editor.showExtensionKeybindings"),
				(e.$OBc = "modified"),
				(e.$PBc = "ext:"),
				(e.$QBc = "feature:"),
				(e.$RBc = "id:"),
				(e.$SBc = "lang:"),
				(e.$TBc = "tag:"),
				(e.$UBc = "hasPolicy"),
				(e.$VBc = "workspaceTrust"),
				(e.$WBc = "requireTrustedWorkspace"),
				(e.$XBc = "workbench.action.openKeyboardLayoutPicker"),
				(e.$YBc = !0),
				(e.$ZBc = !0);
			let E;
			async function C(m, r) {
				if (e.$ZBc && m.isEnabled()) {
					if (E) return E;
					if (r.extensionRecommendations && r.commonlyUsedSettings) {
						const u = {};
						Object.keys(r.extensionRecommendations).forEach((h) => {
							const c = r.extensionRecommendations[h];
							c.onSettingsEditorOpen && (u[h] = c);
						});
						const a = {};
						for (const h in u) {
							const c = h,
								n = r.quality === "stable";
							try {
								const [g] = await m.getExtensions(
									[{ id: c, preRelease: !n }],
									t.CancellationToken.None,
								);
								if (g) a[h] = g;
								else return;
							} catch {
								return;
							}
						}
						return (
							(E = {
								settingsEditorRecommendedExtensions: u,
								recommendedExtensionsGalleryInfo: a,
								commonlyUsed: r.commonlyUsedSettings,
							}),
							E
						);
					}
				}
			}
			function d(m, r) {
				const u = m ?? Number.MAX_SAFE_INTEGER,
					a = r ?? Number.MAX_SAFE_INTEGER;
				return u < a ? -1 : u > a ? 1 : 0;
			}
		})
