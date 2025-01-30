import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../services/statusbar/browser/statusbar.js';
import '../../../../base/common/actions.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../services/editor/common/editorService.js';
import '../../../common/contextkeys.js';
import '../../../../base/browser/dom.js';
define(
			de[3624],
			he([1, 0, 4, 166, 50, 96, 27, 43, 11, 99, 18, 100, 7]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*statusbar*/,
 w /*actions*/,
 E /*layoutService*/,
 C /*keyCodes*/,
 d /*keybindingsRegistry*/,
 m /*actions*/,
 r /*actionCommonCategories*/,
 u /*editorService*/,
 a /*contextkeys*/,
 h /*dom*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$05b = e.$95b = void 0);
				class c extends w.$rj {
					constructor(o, f, b) {
						super(o, f, void 0, !0),
							(this.a = b),
							(this.checked = !b.isHidden(o));
					}
					async run() {
						this.a.isHidden(this.id)
							? this.a.show(this.id)
							: this.a.hide(this.id);
					}
				}
				e.$95b = c;
				class n extends w.$rj {
					constructor(o, f, b) {
						super(o, (0, t.localize)(3687, null, f), void 0, !0), (this.a = b);
					}
					async run() {
						this.a.hide(this.id);
					}
				}
				(e.$05b = n),
					d.$TX.registerCommandAndKeybindingRule({
						id: "workbench.statusBar.focusPrevious",
						weight: d.KeybindingWeight.WorkbenchContrib,
						primary: C.KeyCode.LeftArrow,
						secondary: [C.KeyCode.UpArrow],
						when: a.$jQb,
						handler: (p) => {
							p.get(i.$d6b).focusPreviousEntry();
						},
					}),
					d.$TX.registerCommandAndKeybindingRule({
						id: "workbench.statusBar.focusNext",
						weight: d.KeybindingWeight.WorkbenchContrib,
						primary: C.KeyCode.RightArrow,
						secondary: [C.KeyCode.DownArrow],
						when: a.$jQb,
						handler: (p) => {
							p.get(i.$d6b).focusNextEntry();
						},
					}),
					d.$TX.registerCommandAndKeybindingRule({
						id: "workbench.statusBar.focusFirst",
						weight: d.KeybindingWeight.WorkbenchContrib,
						primary: C.KeyCode.Home,
						when: a.$jQb,
						handler: (p) => {
							const o = p.get(i.$d6b);
							o.focus(!1), o.focusNextEntry();
						},
					}),
					d.$TX.registerCommandAndKeybindingRule({
						id: "workbench.statusBar.focusLast",
						weight: d.KeybindingWeight.WorkbenchContrib,
						primary: C.KeyCode.End,
						when: a.$jQb,
						handler: (p) => {
							const o = p.get(i.$d6b);
							o.focus(!1), o.focusPreviousEntry();
						},
					}),
					d.$TX.registerCommandAndKeybindingRule({
						id: "workbench.statusBar.clearFocus",
						weight: d.KeybindingWeight.WorkbenchContrib,
						primary: C.KeyCode.Escape,
						when: a.$jQb,
						handler: (p) => {
							const o = p.get(i.$d6b),
								f = p.get(u.$IY);
							o.isEntryFocused()
								? o.focus(!1)
								: f.activeEditorPane && f.activeEditorPane.focus();
						},
					});
				class g extends m.$3X {
					constructor() {
						super({
							id: "workbench.action.focusStatusBar",
							title: (0, t.localize2)(3688, "Focus Status Bar"),
							category: r.$ck.View,
							f1: !0,
						});
					}
					async run(o) {
						o.get(E.$mEb).focusPart(E.Parts.STATUSBAR_PART, (0, h.$Ogb)());
					}
				}
				(0, m.$4X)(g);
			},
		),
		