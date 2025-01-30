import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/browser/dom.js';
import '../../../base/browser/ui/actionbar/actionbar.js';
import '../../../base/common/keyCodes.js';
import '../../../base/common/lifecycle.js';
import '../../../nls.js';
import './actionList.js';
import '../../actions/common/actions.js';
import '../../contextkey/common/contextkey.js';
import '../../contextview/browser/contextView.js';
import '../../instantiation/common/extensions.js';
import '../../instantiation/common/instantiation.js';
import '../../keybinding/common/keybindingsRegistry.js';
import '../../theme/common/colorRegistry.js';
import '../../../css!vs/platform/actionWidget/browser/actionWidget.js';
define(
			de[1659],
			he([1, 0, 7, 105, 27, 3, 4, 1206, 11, 8, 49, 20, 5, 43, 51, 1513]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*actionbar*/,
 w /*keyCodes*/,
 E /*lifecycle*/,
 C /*nls*/,
 d /*actionList*/,
 m /*actions*/,
 r /*contextkey*/,
 u /*contextView*/,
 a /*extensions*/,
 h /*instantiation*/,
 c /*keybindingsRegistry*/,
 n /*colorRegistry*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xBb = void 0),
					(t = mt(t)),
					(0, n.$wP)(
						"actionBar.toggledBackground",
						n.$YR,
						(0, C.localize)(1667, null),
					);
				const g = {
					Visible: new r.$5j(
						"codeActionMenuVisible",
						!1,
						(0, C.localize)(1668, null),
					),
				};
				e.$xBb = (0, h.$Mi)("actionWidgetService");
				let p = class extends E.$1c {
					get isVisible() {
						return g.Visible.getValue(this.c) || !1;
					}
					constructor(b, s, l) {
						super(),
							(this.b = b),
							(this.c = s),
							(this.f = l),
							(this.a = this.D(new E.$2c()));
					}
					show(b, s, l, y, $, v, S) {
						const I = g.Visible.bindTo(this.c),
							T = this.f.createInstance(d.$uBb, b, s, l, y);
						this.b.showContextView(
							{
								getAnchor: () => $,
								render: (P) => (I.set(!0), this.g(P, T, S ?? [])),
								onHide: (P) => {
									I.reset(), this.j(P);
								},
							},
							v,
							!1,
						);
					}
					acceptSelected(b) {
						this.a.value?.acceptSelected(b);
					}
					focusPrevious() {
						this.a?.value?.focusPrevious();
					}
					focusNext() {
						this.a?.value?.focusNext();
					}
					hide(b) {
						this.a.value?.hide(b), this.a.clear();
					}
					clear() {
						this.a.clear();
					}
					g(b, s, l) {
						const y = document.createElement("div");
						if (
							(y.classList.add("action-widget"),
							b.appendChild(y),
							(this.a.value = s),
							this.a.value)
						)
							y.appendChild(this.a.value.domNode);
						else throw new Error("List has no value");
						const $ = new E.$Zc(),
							v = document.createElement("div"),
							S = b.appendChild(v);
						S.classList.add("context-view-block"),
							$.add(t.$0fb(S, t.$$gb.MOUSE_DOWN, (D) => D.stopPropagation()));
						const I = document.createElement("div"),
							T = b.appendChild(I);
						T.classList.add("context-view-pointerBlock"),
							$.add(t.$0fb(T, t.$$gb.POINTER_MOVE, () => T.remove())),
							$.add(t.$0fb(T, t.$$gb.MOUSE_DOWN, () => T.remove()));
						let P = 0;
						if (l.length) {
							const D = this.h(".action-widget-action-bar", l);
							D &&
								(y.appendChild(D.getContainer().parentElement),
								$.add(D),
								(P = D.getContainer().offsetWidth));
						}
						const k = this.a.value?.layout(P);
						y.style.width = `${k}px`;
						const L = $.add(t.$dhb(b));
						return $.add(L.onDidBlur(() => this.hide(!0))), $;
					}
					h(b, s) {
						if (!s.length) return;
						const l = t.$(b),
							y = new i.$eib(l);
						return y.push(s, { icon: !1, label: !0 }), y;
					}
					j(b) {
						this.a.value?.hide(b);
					}
				};
				(p = Ne([j(0, u.$Wxb), j(1, r.$6j), j(2, h.$Li)], p)),
					(0, a.$lK)(e.$xBb, p, a.InstantiationType.Delayed);
				const o = c.KeybindingWeight.EditorContrib + 1e3;
				(0, m.$4X)(
					class extends m.$3X {
						constructor() {
							super({
								id: "hideCodeActionWidget",
								title: (0, C.localize2)(1669, "Hide action widget"),
								precondition: g.Visible,
								keybinding: {
									weight: o,
									primary: w.KeyCode.Escape,
									secondary: [w.KeyMod.Shift | w.KeyCode.Escape],
								},
							});
						}
						run(f) {
							f.get(e.$xBb).hide(!0);
						}
					},
				),
					(0, m.$4X)(
						class extends m.$3X {
							constructor() {
								super({
									id: "selectPrevCodeAction",
									title: (0, C.localize2)(1670, "Select previous action"),
									precondition: g.Visible,
									keybinding: {
										weight: o,
										primary: w.KeyCode.UpArrow,
										secondary: [w.KeyMod.CtrlCmd | w.KeyCode.UpArrow],
										mac: {
											primary: w.KeyCode.UpArrow,
											secondary: [
												w.KeyMod.CtrlCmd | w.KeyCode.UpArrow,
												w.KeyMod.WinCtrl | w.KeyCode.KeyP,
											],
										},
									},
								});
							}
							run(f) {
								const b = f.get(e.$xBb);
								b instanceof p && b.focusPrevious();
							}
						},
					),
					(0, m.$4X)(
						class extends m.$3X {
							constructor() {
								super({
									id: "selectNextCodeAction",
									title: (0, C.localize2)(1671, "Select next action"),
									precondition: g.Visible,
									keybinding: {
										weight: o,
										primary: w.KeyCode.DownArrow,
										secondary: [w.KeyMod.CtrlCmd | w.KeyCode.DownArrow],
										mac: {
											primary: w.KeyCode.DownArrow,
											secondary: [
												w.KeyMod.CtrlCmd | w.KeyCode.DownArrow,
												w.KeyMod.WinCtrl | w.KeyCode.KeyN,
											],
										},
									},
								});
							}
							run(f) {
								const b = f.get(e.$xBb);
								b instanceof p && b.focusNext();
							}
						},
					),
					(0, m.$4X)(
						class extends m.$3X {
							constructor() {
								super({
									id: d.$sBb,
									title: (0, C.localize2)(1672, "Accept selected action"),
									precondition: g.Visible,
									keybinding: {
										weight: o,
										primary: w.KeyCode.Enter,
										secondary: [w.KeyMod.CtrlCmd | w.KeyCode.Period],
									},
								});
							}
							run(f) {
								const b = f.get(e.$xBb);
								b instanceof p && b.acceptSelected();
							}
						},
					),
					(0, m.$4X)(
						class extends m.$3X {
							constructor() {
								super({
									id: d.$tBb,
									title: (0, C.localize2)(1673, "Preview selected action"),
									precondition: g.Visible,
									keybinding: {
										weight: o,
										primary: w.KeyMod.CtrlCmd | w.KeyCode.Enter,
									},
								});
							}
							run(f) {
								const b = f.get(e.$xBb);
								b instanceof p && b.acceptSelected(!0);
							}
						},
					);
			},
		),
		