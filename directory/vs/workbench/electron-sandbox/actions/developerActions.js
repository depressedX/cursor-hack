import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../../platform/native/common/native.js';
import '../../services/editor/common/editorService.js';
import '../../../platform/actions/common/actions.js';
import '../../../platform/action/common/actionCommonCategories.js';
import '../../services/environment/common/environmentService.js';
import '../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../platform/contextkey/common/contextkeys.js';
import '../../../base/common/keyCodes.js';
import '../../../platform/files/common/files.js';
import '../../services/environment/electron-sandbox/environmentService.js';
import '../../../base/common/uri.js';
import '../../../base/browser/dom.js';
define(
			de[3290],
			he([1, 0, 4, 110, 18, 11, 99, 78, 43, 179, 27, 22, 151, 9, 7]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3cd = e.$2cd = e.$1cd = e.$Zcd = void 0);
				class g extends E.$3X {
					constructor() {
						super({
							id: "workbench.action.toggleDevTools",
							title: (0, t.localize2)(11810, "Toggle Developer Tools"),
							category: C.$ck.Developer,
							f1: !0,
							keybinding: {
								weight: m.KeybindingWeight.WorkbenchContrib + 50,
								when: r.$$Lb,
								primary: u.KeyMod.CtrlCmd | u.KeyMod.Shift | u.KeyCode.KeyI,
								mac: {
									primary: u.KeyMod.CtrlCmd | u.KeyMod.Alt | u.KeyCode.KeyI,
								},
							},
							menu: { id: E.$XX.MenubarHelpMenu, group: "5_tools", order: 1 },
						});
					}
					async run(s) {
						return s
							.get(i.$y7c)
							.toggleDevTools({ targetWindowId: (0, n.$Ogb)().vscodeWindowId });
					}
				}
				e.$Zcd = g;
				class p extends E.$3X {
					constructor() {
						super({
							id: "workbench.action.configureRuntimeArguments",
							title: (0, t.localize2)(11811, "Configure Runtime Arguments"),
							category: C.$ck.Preferences,
							f1: !0,
						});
					}
					async run(s) {
						const l = s.get(w.$IY),
							y = s.get(d.$r8);
						await l.openEditor({
							resource: y.argvResource,
							options: { pinned: !0 },
						});
					}
				}
				e.$1cd = p;
				class o extends E.$3X {
					constructor() {
						super({
							id: "workbench.action.reloadWindowWithExtensionsDisabled",
							title: (0, t.localize2)(11812, "Reload With Extensions Disabled"),
							category: C.$ck.Developer,
							f1: !0,
						});
					}
					async run(s) {
						return s.get(i.$y7c).reload({ disableExtensions: !0 });
					}
				}
				e.$2cd = o;
				class f extends E.$3X {
					constructor() {
						super({
							id: "workbench.action.openUserDataFolder",
							title: (0, t.localize2)(11813, "Open User Data Folder"),
							category: C.$ck.Developer,
							f1: !0,
						});
					}
					async run(s) {
						const l = s.get(i.$y7c),
							y = s.get(a.$ll),
							$ = s.get(h.$ucd),
							v = c.URI.file($.userDataPath),
							S = await y.resolve(v);
						let I;
						return (
							S.children && S.children.length > 0
								? (I = S.children[0].resource)
								: (I = v),
							l.showItemInFolder(I.fsPath)
						);
					}
				}
				e.$3cd = f;
			},
		),
		