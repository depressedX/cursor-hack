import '../../../../../require.js';
import '../../../../../exports.js';
import '../../browser.js';
import '../../dnd.js';
import '../../dom.js';
import '../../touch.js';
import '../hover/hoverDelegateFactory.js';
import '../selectBox/selectBox.js';
import '../../../common/actions.js';
import '../../../common/lifecycle.js';
import '../../../common/platform.js';
import '../../../common/types.js';
import '../../../../nls.js';
import '../hover/hoverDelegate2.js';
import '../../../../css!vs/base/browser/ui/actionbar/actionbar.js';
define(
			de[198],
			he([1, 0, 139, 323, 7, 159, 95, 596, 50, 3, 12, 28, 4, 317, 1508]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ajb = e.$_ib = e.$$ib = void 0),
					(u = mt(u)),
					(a = mt(a)),
					(h = mt(h));
				class n extends r.$1c {
					get action() {
						return this._action;
					}
					constructor(f, b, s = {}) {
						super(),
							(this.m = s),
							(this._context = f || this),
							(this._action = b),
							b instanceof m.$rj &&
								this.D(
									b.onDidChange((l) => {
										this.element && this.q(l);
									}),
								);
					}
					q(f) {
						f.enabled !== void 0 && this.t(),
							f.checked !== void 0 && this.H(),
							f.class !== void 0 && this.G(),
							f.label !== void 0 && (this.u(), this.C()),
							f.tooltip !== void 0 && this.C();
					}
					get actionRunner() {
						return this.j || (this.j = this.D(new m.$sj())), this.j;
					}
					set actionRunner(f) {
						this.j = f;
					}
					isEnabled() {
						return this._action.enabled;
					}
					setActionContext(f) {
						this._context = f;
					}
					render(f) {
						const b = (this.element = f);
						this.D(E.$Qhb.addTarget(f));
						const s = this.m && this.m.draggable;
						s &&
							((f.draggable = !0),
							t.$Ofb &&
								this.D(
									(0, w.$0fb)(f, w.$$gb.DRAG_START, (l) =>
										l.dataTransfer?.setData(i.$Ohb.TEXT, this._action.label),
									),
								)),
							this.D(
								(0, w.$0fb)(b, E.EventType.Tap, (l) => this.onClick(l, !0)),
							),
							this.D(
								(0, w.$0fb)(b, w.$$gb.MOUSE_DOWN, (l) => {
									s || w.$ahb.stop(l, !0),
										this._action.enabled &&
											l.button === 0 &&
											b.classList.add("active");
								}),
							),
							u.$m &&
								this.D(
									(0, w.$0fb)(b, w.$$gb.CONTEXT_MENU, (l) => {
										l.button === 0 && l.ctrlKey === !0 && this.onClick(l);
									}),
								),
							this.D(
								(0, w.$0fb)(b, w.$$gb.CLICK, (l) => {
									w.$ahb.stop(l, !0),
										(this.m && this.m.isMenu) || this.onClick(l);
								}),
							),
							this.D(
								(0, w.$0fb)(b, w.$$gb.DBLCLICK, (l) => {
									w.$ahb.stop(l, !0);
								}),
							),
							[w.$$gb.MOUSE_UP, w.$$gb.MOUSE_OUT].forEach((l) => {
								this.D(
									(0, w.$0fb)(b, l, (y) => {
										w.$ahb.stop(y), b.classList.remove("active");
									}),
								);
							});
					}
					onClick(f, b = !1) {
						w.$ahb.stop(f, !0);
						const s = a.$ug(this._context)
							? this.m?.useEventAsContext
								? f
								: { preserveFocus: b }
							: this._context;
						this.actionRunner.run(this._action, s);
					}
					focus() {
						this.element &&
							((this.element.tabIndex = 0),
							this.element.focus(),
							this.element.classList.add("focused"));
					}
					isFocused() {
						return !!this.element?.classList.contains("focused");
					}
					blur() {
						this.element &&
							(this.element.blur(),
							(this.element.tabIndex = -1),
							this.element.classList.remove("focused"));
					}
					setFocusable(f) {
						this.element && (this.element.tabIndex = f ? 0 : -1);
					}
					get trapsArrowNavigation() {
						return !1;
					}
					t() {}
					u() {}
					w() {
						return this.action.class;
					}
					z() {
						return this.action.tooltip;
					}
					C() {
						if (!this.element) return;
						const f = this.z() ?? "";
						if ((this.F(), this.m.hoverDelegate?.showNativeHover))
							this.element.title = f;
						else if (!this.f && f !== "") {
							const b = this.m.hoverDelegate ?? (0, C.$cib)("element");
							this.f = this.B.add(
								(0, c.$1ib)().setupManagedHover(b, this.element, f),
							);
						} else this.f && this.f.update(f);
					}
					F() {
						if (this.element) {
							const f = this.z() ?? "";
							this.element.setAttribute("aria-label", f);
						}
					}
					G() {}
					H() {}
					dispose() {
						this.element && (this.element.remove(), (this.element = void 0)),
							(this._context = void 0),
							super.dispose();
					}
				}
				e.$$ib = n;
				class g extends n {
					constructor(f, b, s) {
						super(f, b, s),
							(this.m = s),
							(this.m.icon = s.icon !== void 0 ? s.icon : !1),
							(this.m.label = s.label !== void 0 ? s.label : !0),
							(this.L = "");
					}
					render(f) {
						if ((super.render(f), a.$vg(this.element), this.M)) {
							const b = document.createElement("a");
							b.classList.add("action-label"),
								(b.style.display = "flex"),
								(b.style.alignItems = "center"),
								(b.style.gap = "4px"),
								(b.style.flexDirection = "row"),
								b.setAttribute("role", this.N()),
								b.appendChild(this.M);
							const s = document.createElement("span");
							(this.I = s), b.appendChild(s), this.element.appendChild(b);
						} else {
							const b = document.createElement("a");
							if (
								(b.classList.add("action-label"),
								b.setAttribute("role", this.N()),
								(this.I = b),
								this.element.appendChild(b),
								this.m.label && this.m.keybinding)
							) {
								const s = document.createElement("span");
								s.classList.add("keybinding"),
									(s.textContent = this.m.keybinding),
									this.element.appendChild(s);
							}
						}
						this.G(), this.u(), this.C(), this.t(), this.H();
					}
					N() {
						return this._action.id === m.$tj.ID
							? "presentation"
							: this.m.isMenu
								? "menuitem"
								: this.m.isTabList
									? "tab"
									: "button";
					}
					focus() {
						this.I && ((this.I.tabIndex = 0), this.I.focus());
					}
					isFocused() {
						return !!this.I && this.I?.tabIndex === 0;
					}
					blur() {
						this.I && (this.I.tabIndex = -1);
					}
					setFocusable(f) {
						this.I && (this.I.tabIndex = f ? 0 : -1);
					}
					u() {
						this.m.label && this.I && (this.I.textContent = this.action.label);
					}
					z() {
						let f = null;
						return (
							this.action.tooltip
								? (f = this.action.tooltip)
								: !this.m.label &&
									this.action.label &&
									this.m.icon &&
									((f = this.action.label),
									this.m.keybinding &&
										(f = h.localize(0, null, f, this.m.keybinding))),
							f ?? void 0
						);
					}
					G() {
						this.L && this.I && this.I.classList.remove(...this.L.split(" ")),
							this.m.icon
								? ((this.L = this.w()),
									this.I &&
										(this.I.classList.add("codicon"),
										this.L && this.I.classList.add(...this.L.split(" "))),
									this.t())
								: this.I?.classList.remove("codicon");
					}
					t() {
						this.action.enabled
							? (this.I &&
									(this.I.removeAttribute("aria-disabled"),
									this.I.classList.remove("disabled")),
								this.element?.classList.remove("disabled"))
							: (this.I &&
									(this.I.setAttribute("aria-disabled", "true"),
									this.I.classList.add("disabled")),
								this.element?.classList.add("disabled"));
					}
					F() {
						if (this.I) {
							const f = this.z() ?? "";
							this.I.setAttribute("aria-label", f);
						}
					}
					H() {
						this.I &&
							(this.action.checked !== void 0
								? (this.I.classList.toggle("checked", this.action.checked),
									this.m.isTabList
										? this.I.setAttribute(
												"aria-selected",
												this.action.checked ? "true" : "false",
											)
										: (this.I.setAttribute(
												"aria-checked",
												this.action.checked ? "true" : "false",
											),
											this.I.setAttribute("role", "checkbox")))
								: (this.I.classList.remove("checked"),
									this.I.removeAttribute(
										this.m.isTabList ? "aria-selected" : "aria-checked",
									),
									this.I.setAttribute("role", this.N())));
					}
				}
				e.$_ib = g;
				class p extends n {
					constructor(f, b, s, l, y, $, v) {
						super(f, b),
							(this.b = new d.$5ib(s, l, y, $, v)),
							this.b.setFocusable(!1),
							this.D(this.b),
							this.g();
					}
					setOptions(f, b) {
						this.b.setOptions(f, b);
					}
					select(f) {
						this.b.select(f);
					}
					g() {
						this.D(this.b.onDidSelect((f) => this.n(f.selected, f.index)));
					}
					n(f, b) {
						this.actionRunner.run(this._action, this.r(f, b));
					}
					r(f, b) {
						return f;
					}
					setFocusable(f) {
						this.b.setFocusable(f);
					}
					focus() {
						this.b?.focus();
					}
					blur() {
						this.b?.blur();
					}
					render(f) {
						this.b.render(f);
					}
				}
				e.$ajb = p;
			},
		),
		