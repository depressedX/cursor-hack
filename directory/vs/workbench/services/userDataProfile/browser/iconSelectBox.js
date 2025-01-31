import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/ui/icons/iconSelectBox.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/browser/dom.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
define(
			de[1896],
			he([1, 0, 2685, 27, 7, 8, 43]),
			function (ce /*require*/,
 e /*exports*/,
 t /*iconSelectBox*/,
 i /*keyCodes*/,
 w /*dom*/,
 E /*contextkey*/,
 C /*keybindingsRegistry*/) {
				"use strict";
				var d;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iVc = e.$hVc = e.$gVc = e.$fVc = void 0),
					(w = mt(w)),
					(e.$fVc = new E.$5j("iconSelectBoxFocus", !0)),
					(e.$gVc = new E.$5j("iconSelectBoxInputFocus", !0)),
					(e.$hVc = new E.$5j("iconSelectBoxInputEmpty", !0));
				let m = class extends t.$Zob {
					static {
						d = this;
					}
					static getFocusedWidget() {
						return d.C;
					}
					constructor(u, a) {
						if (
							(super(u),
							(this.F = this.D(a.createScoped(this.domNode))),
							e.$fVc.bindTo(this.F),
							(this.G = e.$gVc.bindTo(this.F)),
							(this.H = e.$hVc.bindTo(this.F)),
							this.h)
						) {
							const h = this.D(w.$dhb(this.h.inputElement));
							this.D(h.onDidFocus(() => this.G.set(!0))),
								this.D(h.onDidBlur(() => this.G.set(!1))),
								this.D(
									this.h.onDidChange(() =>
										this.H.set(this.h?.value.length === 0),
									),
								);
						}
					}
					focus() {
						super.focus(), (d.C = this);
					}
				};
				(e.$iVc = m),
					(e.$iVc = m = d = Ne([j(1, E.$6j)], m)),
					C.$TX.registerCommandAndKeybindingRule({
						id: "iconSelectBox.focusUp",
						weight: C.KeybindingWeight.WorkbenchContrib,
						when: e.$fVc,
						primary: i.KeyCode.UpArrow,
						handler: () => {
							const r = m.getFocusedWidget();
							r && r.focusPreviousRow();
						},
					}),
					C.$TX.registerCommandAndKeybindingRule({
						id: "iconSelectBox.focusDown",
						weight: C.KeybindingWeight.WorkbenchContrib,
						when: e.$fVc,
						primary: i.KeyCode.DownArrow,
						handler: () => {
							const r = m.getFocusedWidget();
							r && r.focusNextRow();
						},
					}),
					C.$TX.registerCommandAndKeybindingRule({
						id: "iconSelectBox.focusNext",
						weight: C.KeybindingWeight.WorkbenchContrib,
						when: E.$Kj.and(e.$fVc, E.$Kj.or(e.$hVc, e.$gVc.toNegated())),
						primary: i.KeyCode.RightArrow,
						handler: () => {
							const r = m.getFocusedWidget();
							r && r.focusNext();
						},
					}),
					C.$TX.registerCommandAndKeybindingRule({
						id: "iconSelectBox.focusPrevious",
						weight: C.KeybindingWeight.WorkbenchContrib,
						when: E.$Kj.and(e.$fVc, E.$Kj.or(e.$hVc, e.$gVc.toNegated())),
						primary: i.KeyCode.LeftArrow,
						handler: () => {
							const r = m.getFocusedWidget();
							r && r.focusPrevious();
						},
					}),
					C.$TX.registerCommandAndKeybindingRule({
						id: "iconSelectBox.selectFocused",
						weight: C.KeybindingWeight.WorkbenchContrib,
						when: e.$fVc,
						primary: i.KeyCode.Enter,
						handler: () => {
							const r = m.getFocusedWidget();
							r && r.setSelection(r.getFocus()[0]);
						},
					});
			},
		)
