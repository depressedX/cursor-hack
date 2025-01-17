import '../../../../../require.js';
import '../../../../../exports.js';
import '../actionbar/actionViewItems.js';
import '../widget.js';
import '../../../common/codicons.js';
import '../../../common/themables.js';
import '../../../common/event.js';
import '../../../common/keyCodes.js';
import '../../dom.js';
import '../hover/hoverDelegateFactory.js';
import '../hover/hoverDelegate2.js';
import '../../../../css!vs/base/browser/ui/toggle/toggle.js';
define(
			de[268],
			he([1, 0, 198, 235, 14, 26, 6, 27, 7, 95, 317, 2257]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0ib = e.$9ib = e.$8ib = e.$7ib = e.$6ib = void 0),
					(e.$6ib = {
						inputActiveOptionBorder: "#007ACC00",
						inputActiveOptionForeground: "#FFFFFF",
						inputActiveOptionBackground: "#0E639C50",
					});
				class a extends t.$$ib {
					constructor(p, o, f) {
						super(p, o, f),
							(this.a = this.D(
								new h({
									actionClassName: this._action.class,
									isChecked: !!this._action.checked,
									title: this.m.keybinding
										? `${this._action.label} (${this.m.keybinding})`
										: this._action.label,
									notFocusable: !0,
									inputActiveOptionBackground:
										f.toggleStyles?.inputActiveOptionBackground,
									inputActiveOptionBorder:
										f.toggleStyles?.inputActiveOptionBorder,
									inputActiveOptionForeground:
										f.toggleStyles?.inputActiveOptionForeground,
									hoverDelegate: f.hoverDelegate,
								}),
							)),
							this.D(
								this.a.onChange(
									() => (this._action.checked = !!this.a && this.a.checked),
								),
							);
					}
					render(p) {
						(this.element = p), this.element.appendChild(this.a.domNode);
					}
					t() {
						this.a && (this.isEnabled() ? this.a.enable() : this.a.disable());
					}
					H() {
						this.a.checked = !!this._action.checked;
					}
					focus() {
						(this.a.domNode.tabIndex = 0), this.a.focus();
					}
					blur() {
						(this.a.domNode.tabIndex = -1), this.a.domNode.blur();
					}
					setFocusable(p) {
						this.a.domNode.tabIndex = p ? 0 : -1;
					}
				}
				e.$7ib = a;
				class h extends i.$Uhb {
					constructor(p) {
						super(),
							(this.a = this.D(new C.$re())),
							(this.onChange = this.a.event),
							(this.b = this.D(new C.$re())),
							(this.onKeyDown = this.b.event),
							(this.c = p),
							(this.s = this.c.isChecked);
						const o = ["monaco-custom-toggle"];
						this.c.icon &&
							((this.g = this.c.icon),
							o.push(...E.ThemeIcon.asClassNameArray(this.g))),
							this.c.actionClassName &&
								o.push(...this.c.actionClassName.split(" ")),
							this.s && o.push("checked"),
							(this.domNode = document.createElement("div")),
							(this.t = this.D(
								(0, u.$1ib)().setupManagedHover(
									p.hoverDelegate ?? (0, r.$cib)("mouse"),
									this.domNode,
									this.c.title,
								),
							)),
							this.domNode.classList.add(...o),
							this.c.notFocusable || (this.domNode.tabIndex = 0),
							this.domNode.setAttribute("role", "checkbox"),
							this.domNode.setAttribute("aria-checked", String(this.s)),
							this.domNode.setAttribute("aria-label", this.c.title),
							this.w(),
							this.f(this.domNode, (f) => {
								this.enabled &&
									((this.checked = !this.s),
									this.a.fire(!1),
									f.preventDefault());
							}),
							this.D(this.I(this.domNode)),
							this.u(this.domNode, (f) => {
								if (
									f.keyCode === d.KeyCode.Space ||
									f.keyCode === d.KeyCode.Enter
								) {
									(this.checked = !this.s),
										this.a.fire(!0),
										f.preventDefault(),
										f.stopPropagation();
									return;
								}
								this.b.fire(f);
							});
					}
					get enabled() {
						return this.domNode.getAttribute("aria-disabled") !== "true";
					}
					focus() {
						this.domNode.focus();
					}
					get checked() {
						return this.s;
					}
					set checked(p) {
						(this.s = p),
							this.domNode.setAttribute("aria-checked", String(this.s)),
							this.domNode.classList.toggle("checked", this.s),
							this.w();
					}
					setIcon(p) {
						this.g &&
							this.domNode.classList.remove(
								...E.ThemeIcon.asClassNameArray(this.g),
							),
							(this.g = p),
							this.g &&
								this.domNode.classList.add(
									...E.ThemeIcon.asClassNameArray(this.g),
								);
					}
					width() {
						return 22;
					}
					w() {
						this.domNode &&
							((this.domNode.style.borderColor =
								(this.s && this.c.inputActiveOptionBorder) || ""),
							(this.domNode.style.color =
								(this.s && this.c.inputActiveOptionForeground) || "inherit"),
							(this.domNode.style.backgroundColor =
								(this.s && this.c.inputActiveOptionBackground) || ""));
					}
					enable() {
						this.domNode.setAttribute("aria-disabled", String(!1));
					}
					disable() {
						this.domNode.setAttribute("aria-disabled", String(!0));
					}
					setTitle(p) {
						this.t.update(p), this.domNode.setAttribute("aria-label", p);
					}
					set visible(p) {
						this.domNode.style.display = p ? "" : "none";
					}
					get visible() {
						return this.domNode.style.display !== "none";
					}
				}
				e.$8ib = h;
				class c extends i.$Uhb {
					static {
						this.CLASS_NAME = "monaco-checkbox";
					}
					constructor(p, o, f) {
						super(),
							(this.g = p),
							(this.h = o),
							(this.a = this.D(new C.$re())),
							(this.onChange = this.a.event),
							(this.b = this.D(
								new h({
									title: this.g,
									isChecked: this.h,
									icon: w.$ak.check,
									actionClassName: c.CLASS_NAME,
									...e.$6ib,
								}),
							)),
							(this.domNode = this.b.domNode),
							(this.c = f),
							this.n(),
							this.D(
								this.b.onChange((b) => {
									this.n(), this.a.fire(b);
								}),
							);
					}
					get checked() {
						return this.b.checked;
					}
					set checked(p) {
						(this.b.checked = p), this.n();
					}
					focus() {
						this.domNode.focus();
					}
					hasFocus() {
						return (0, m.$Kgb)(this.domNode);
					}
					enable() {
						this.b.enable();
					}
					disable() {
						this.b.disable();
					}
					n() {
						(this.domNode.style.color = this.c.checkboxForeground || ""),
							(this.domNode.style.backgroundColor =
								this.c.checkboxBackground || ""),
							(this.domNode.style.borderColor = this.c.checkboxBorder || "");
					}
				}
				e.$9ib = c;
				class n extends t.$$ib {
					constructor(p, o, f) {
						super(p, o, f),
							(this.a = this.D(
								new c(
									this._action.label,
									!!this._action.checked,
									f.checkboxStyles,
								),
							)),
							this.D(this.a.onChange(() => this.c()));
					}
					render(p) {
						if (
							((this.element = p),
							this.element.classList.add("checkbox-action-item"),
							this.element.appendChild(this.a.domNode),
							this.m.label && this._action.label)
						) {
							const o = this.element.appendChild(
								(0, m.$)("span.checkbox-label", void 0, this._action.label),
							);
							this.D(
								(0, m.$0fb)(o, m.$$gb.CLICK, (f) => {
									(this.a.checked = !this.a.checked),
										f.stopPropagation(),
										f.preventDefault(),
										this.c();
								}),
							);
						}
						this.t(), this.G(), this.H();
					}
					c() {
						(this._action.checked = !!this.a && this.a.checked),
							this.actionRunner.run(this._action, this._context);
					}
					t() {
						this.isEnabled() ? this.a.enable() : this.a.disable(),
							this.action.enabled
								? this.element?.classList.remove("disabled")
								: this.element?.classList.add("disabled");
					}
					H() {
						this.a.checked = !!this._action.checked;
					}
					G() {
						this.b && this.a.domNode.classList.remove(...this.b.split(" ")),
							(this.b = this.w()),
							this.b && this.a.domNode.classList.add(...this.b.split(" "));
					}
					focus() {
						(this.a.domNode.tabIndex = 0), this.a.focus();
					}
					blur() {
						(this.a.domNode.tabIndex = -1), this.a.domNode.blur();
					}
					setFocusable(p) {
						this.a.domNode.tabIndex = p ? 0 : -1;
					}
				}
				e.$0ib = n;
			},
		),
		