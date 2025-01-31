import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/network.js';
import '../../../../platform/native/common/native.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../editor/common/editorContextKeys.js';
import '../../../../base/common/keyCodes.js';
import '../browser/files.js';
import '../../../services/editor/common/editorService.js';
import './fileCommands.js';
import '../../../../platform/actions/common/actions.js';
import '../../../common/contextkeys.js';
import '../browser/fileActions.contribution.js';
import '../../../common/editor.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/list/browser/listService.js';
import '../../../services/editor/common/editorGroupsService.js';
define(
			de[4302],
			he([
				1, 0, 4, 25, 12, 23, 110, 43, 71, 27, 382, 18, 3063, 11, 100, 1993, 44,
				8, 93, 66,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*workspace*/,
 w /*platform*/,
 E /*network*/,
 C /*native*/,
 d /*keybindingsRegistry*/,
 m /*editorContextKeys*/,
 r /*keyCodes*/,
 u /*files*/,
 a /*editorService*/,
 h /*fileCommands*/,
 c /*actions*/,
 n /*contextkeys*/,
 g /*fileActions.contribution*/,
 p /*editor*/,
 o /*contextkey*/,
 f /*listService*/,
 b /*editorGroupsService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (t = mt(t));
				const s = "revealFileInOS",
					l = w.$l
						? t.localize2(7036, "Reveal in File Explorer")
						: w.$m
							? t.localize2(7037, "Reveal in Finder")
							: t.localize2(7038, "Open Containing Folder"),
					y = o.$Kj.or(
						n.$BQb.Scheme.isEqualTo(E.Schemas.file),
						n.$BQb.Scheme.isEqualTo(E.Schemas.vscodeUserData),
					);
				d.$TX.registerCommandAndKeybindingRule({
					id: s,
					weight: d.KeybindingWeight.WorkbenchContrib,
					when: m.EditorContextKeys.focus.toNegated(),
					primary: r.KeyMod.CtrlCmd | r.KeyMod.Alt | r.KeyCode.KeyR,
					win: { primary: r.KeyMod.Shift | r.KeyMod.Alt | r.KeyCode.KeyR },
					handler: (I, T) => {
						const P = (0, u.$NWb)(
							T,
							I.get(f.$fMb),
							I.get(a.$IY),
							I.get(b.$EY),
							I.get(u.$LWb),
						);
						(0, h.$Ufd)(P, I.get(C.$y7c), I.get(i.$Vi));
					},
				}),
					d.$TX.registerCommandAndKeybindingRule({
						weight: d.KeybindingWeight.WorkbenchContrib,
						when: void 0,
						primary: (0, r.$os)(r.$ps, r.KeyCode.KeyR),
						mac: { primary: (0, r.$os)(r.$qs, r.KeyCode.KeyR) },
						id: "workbench.action.files.revealActiveFileInWindows",
						handler: (I) => {
							const P = I.get(a.$IY).activeEditor,
								k = p.$A1.getOriginalUri(P, {
									filterByScheme: E.Schemas.file,
									supportSideBySide: p.SideBySideEditor.PRIMARY,
								}),
								L = k ? [k] : [];
							(0, h.$Ufd)(L, I.get(C.$y7c), I.get(i.$Vi));
						},
					}),
					(0, g.$YMc)(s, l.value, y, "2_files", !1, 0);
				const v = { id: s, title: l.value };
				c.$ZX.appendMenuItem(c.$XX.OpenEditorsContext, {
					group: "navigation",
					order: 20,
					command: v,
					when: y,
				}),
					c.$ZX.appendMenuItem(c.$XX.OpenEditorsContextShare, {
						title: t.localize(7035, null),
						submenu: c.$XX.MenubarShare,
						group: "share",
						order: 3,
					}),
					c.$ZX.appendMenuItem(c.$XX.ExplorerContext, {
						group: "navigation",
						order: 20,
						command: v,
						when: y,
					});
				const S = t.localize2(7039, "File");
				(0, g.$ZMc)({ id: s, title: l, category: S }, y);
			},
		)
