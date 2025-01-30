import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/keyCodes.js';
import '../../../browser/editorExtensions.js';
import '../../../../nls.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../common/editorContextKeys.js';
import './stickyScrollController.js';
define(
			de[3611],
			he([1, 0, 27, 46, 4, 99, 11, 10, 43, 8, 71, 1317]),
			function (ce /*require*/,
 e /*exports*/,
 t /*keyCodes*/,
 i /*editorExtensions*/,
 w /*nls*/,
 E /*actionCommonCategories*/,
 C /*actions*/,
 d /*configuration*/,
 m /*keybindingsRegistry*/,
 r /*contextkey*/,
 u /*editorContextKeys*/,
 a /*stickyScrollController*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vkc = e.$ukc = e.$tkc = e.$skc = e.$rkc = e.$qkc = void 0);
				class h extends C.$3X {
					constructor() {
						super({
							id: "editor.action.toggleStickyScroll",
							title: {
								...(0, w.localize2)(1470, "Toggle Editor Sticky Scroll"),
								mnemonicTitle: (0, w.localize)(1466, null),
							},
							metadata: {
								description: (0, w.localize2)(
									1471,
									"Toggle/enable the editor sticky scroll which shows the nested scopes at the top of the viewport",
								),
							},
							category: E.$ck.View,
							toggled: {
								condition: r.$Kj.equals(
									"config.editor.stickyScroll.enabled",
									!0,
								),
								title: (0, w.localize)(1467, null),
								mnemonicTitle: (0, w.localize)(1468, null),
							},
							menu: [
								{ id: C.$XX.CommandPalette },
								{
									id: C.$XX.MenubarAppearanceMenu,
									group: "4_editor",
									order: 3,
								},
								{ id: C.$XX.StickyScrollContext },
							],
						});
					}
					async run(s) {
						const l = s.get(d.$gj),
							y = !l.getValue("editor.stickyScroll.enabled");
						return l.updateValue("editor.stickyScroll.enabled", y);
					}
				}
				e.$qkc = h;
				const c = m.KeybindingWeight.EditorContrib;
				class n extends i.$ktb {
					constructor() {
						super({
							id: "editor.action.focusStickyScroll",
							title: {
								...(0, w.localize2)(1472, "Focus on the editor sticky scroll"),
								mnemonicTitle: (0, w.localize)(1469, null),
							},
							precondition: r.$Kj.and(
								r.$Kj.has("config.editor.stickyScroll.enabled"),
								u.EditorContextKeys.stickyScrollVisible,
							),
							menu: [{ id: C.$XX.CommandPalette }],
						});
					}
					runEditorCommand(s, l) {
						a.$pkc.get(l)?.focus();
					}
				}
				e.$rkc = n;
				class g extends i.$ktb {
					constructor() {
						super({
							id: "editor.action.selectNextStickyScrollLine",
							title: (0, w.localize2)(
								1473,
								"Select the next editor sticky scroll line",
							),
							precondition: u.EditorContextKeys.stickyScrollFocused.isEqualTo(
								!0,
							),
							keybinding: { weight: c, primary: t.KeyCode.DownArrow },
						});
					}
					runEditorCommand(s, l) {
						a.$pkc.get(l)?.focusNext();
					}
				}
				e.$skc = g;
				class p extends i.$ktb {
					constructor() {
						super({
							id: "editor.action.selectPreviousStickyScrollLine",
							title: (0, w.localize2)(
								1474,
								"Select the previous sticky scroll line",
							),
							precondition: u.EditorContextKeys.stickyScrollFocused.isEqualTo(
								!0,
							),
							keybinding: { weight: c, primary: t.KeyCode.UpArrow },
						});
					}
					runEditorCommand(s, l) {
						a.$pkc.get(l)?.focusPrevious();
					}
				}
				e.$tkc = p;
				class o extends i.$ktb {
					constructor() {
						super({
							id: "editor.action.goToFocusedStickyScrollLine",
							title: (0, w.localize2)(
								1475,
								"Go to the focused sticky scroll line",
							),
							precondition: u.EditorContextKeys.stickyScrollFocused.isEqualTo(
								!0,
							),
							keybinding: { weight: c, primary: t.KeyCode.Enter },
						});
					}
					runEditorCommand(s, l) {
						a.$pkc.get(l)?.goToFocused();
					}
				}
				e.$ukc = o;
				class f extends i.$ktb {
					constructor() {
						super({
							id: "editor.action.selectEditor",
							title: (0, w.localize2)(1476, "Select Editor"),
							precondition: u.EditorContextKeys.stickyScrollFocused.isEqualTo(
								!0,
							),
							keybinding: { weight: c, primary: t.KeyCode.Escape },
						});
					}
					runEditorCommand(s, l) {
						a.$pkc.get(l)?.selectEditor();
					}
				}
				e.$vkc = f;
			},
		),
		