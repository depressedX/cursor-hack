import '../../../../../require.js';
import '../../../../../exports.js';
import '../../dom.js';
import '../toggle/toggle.js';
import '../inputbox/inputBox.js';
import '../widget.js';
import '../../../common/codicons.js';
import '../../../common/event.js';
import '../../../common/keyCodes.js';
import '../../../../nls.js';
import '../hover/hoverDelegateFactory.js';
import '../../../../css!vs/base/browser/ui/findinput/findInput.js';
define(
			de[2687],
			he([1, 0, 7, 268, 292, 235, 14, 6, 27, 4, 95, 1510]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*toggle*/,
 w /*inputBox*/,
 E /*widget*/,
 C /*codicons*/,
 d /*event*/,
 m /*keyCodes*/,
 r /*nls*/,
 u /*hoverDelegateFactory*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Vob = void 0),
					(t = mt(t)),
					(r = mt(r));
				const a = r.localize(13, null),
					h = r.localize(14, null);
				class c extends i.$8ib {
					constructor(p) {
						super({
							icon: C.$ak.preserveCase,
							title: h + p.appendTitle,
							isChecked: p.isChecked,
							hoverDelegate: p.hoverDelegate ?? (0, u.$cib)("element"),
							inputActiveOptionBorder: p.inputActiveOptionBorder,
							inputActiveOptionForeground: p.inputActiveOptionForeground,
							inputActiveOptionBackground: p.inputActiveOptionBackground,
						});
					}
				}
				class n extends E.$Uhb {
					static {
						this.OPTION_CHANGE = "optionChange";
					}
					constructor(p, o, f, b) {
						super(),
							(this.M = f),
							(this.h = !0),
							(this.r = 0),
							(this.s = this.D(new d.$re())),
							(this.onDidOptionChange = this.s.event),
							(this.t = this.D(new d.$re())),
							(this.onKeyDown = this.t.event),
							(this.w = this.D(new d.$re())),
							(this.onMouseDown = this.w.event),
							(this.y = this.D(new d.$re())),
							(this.onInput = this.y.event),
							(this.J = this.D(new d.$re())),
							(this.onKeyUp = this.J.event),
							(this.L = this.D(new d.$re())),
							(this.onPreserveCaseKeyDown = this.L.event),
							(this.O = 0),
							(this.a = o),
							(this.b = b.placeholder || ""),
							(this.c = b.validation),
							(this.g = b.label || a);
						const s = b.appendPreserveCaseLabel || "",
							l = b.history || [],
							y = !!b.flexibleHeight,
							$ = !!b.flexibleWidth,
							v = b.flexibleMaxHeight;
						(this.domNode = document.createElement("div")),
							this.domNode.classList.add("monaco-findInput"),
							(this.inputBox = this.D(
								new w.$Nob(this.domNode, this.a, {
									ariaLabel: this.g || "",
									placeholder: this.b || "",
									validationOptions: { validation: this.c },
									history: l,
									showHistoryHint: b.showHistoryHint,
									flexibleHeight: y,
									flexibleWidth: $,
									flexibleMaxHeight: v,
									inputBoxStyles: b.inputBoxStyles,
								}),
							)),
							(this.n = this.D(
								new c({ appendTitle: s, isChecked: !1, ...b.toggleStyles }),
							)),
							this.D(
								this.n.onChange((T) => {
									this.s.fire(T),
										!T && this.h && this.inputBox.focus(),
										this.validate();
								}),
							),
							this.D(
								this.n.onKeyDown((T) => {
									this.L.fire(T);
								}),
							),
							this.M ? (this.r = this.n.width()) : (this.r = 0);
						const S = [this.n.domNode];
						this.u(this.domNode, (T) => {
							if (
								T.equals(m.KeyCode.LeftArrow) ||
								T.equals(m.KeyCode.RightArrow) ||
								T.equals(m.KeyCode.Escape)
							) {
								const P = S.indexOf(this.domNode.ownerDocument.activeElement);
								if (P >= 0) {
									let k = -1;
									T.equals(m.KeyCode.RightArrow)
										? (k = (P + 1) % S.length)
										: T.equals(m.KeyCode.LeftArrow) &&
											(P === 0 ? (k = S.length - 1) : (k = P - 1)),
										T.equals(m.KeyCode.Escape)
											? (S[P].blur(), this.inputBox.focus())
											: k >= 0 && S[k].focus(),
										t.$ahb.stop(T, !0);
								}
							}
						});
						const I = document.createElement("div");
						(I.className = "controls"),
							(I.style.display = this.M ? "block" : "none"),
							I.appendChild(this.n.domNode),
							this.domNode.appendChild(I),
							p?.appendChild(this.domNode),
							this.u(this.inputBox.inputElement, (T) => this.t.fire(T)),
							this.z(this.inputBox.inputElement, (T) => this.J.fire(T)),
							this.C(this.inputBox.inputElement, (T) => this.y.fire()),
							this.j(this.inputBox.inputElement, (T) => this.w.fire(T));
					}
					enable() {
						this.domNode.classList.remove("disabled"),
							this.inputBox.enable(),
							this.n.enable();
					}
					disable() {
						this.domNode.classList.add("disabled"),
							this.inputBox.disable(),
							this.n.disable();
					}
					setFocusInputOnOptionClick(p) {
						this.h = p;
					}
					setEnabled(p) {
						p ? this.enable() : this.disable();
					}
					clear() {
						this.P(), this.setValue(""), this.focus();
					}
					getValue() {
						return this.inputBox.value;
					}
					setValue(p) {
						this.inputBox.value !== p && (this.inputBox.value = p);
					}
					onSearchSubmit() {
						this.inputBox.addToHistory();
					}
					N() {}
					select() {
						this.inputBox.select();
					}
					focus() {
						this.inputBox.focus();
					}
					getPreserveCase() {
						return this.n.checked;
					}
					setPreserveCase(p) {
						this.n.checked = p;
					}
					focusOnPreserve() {
						this.n.focus();
					}
					highlightFindOptions() {
						this.domNode.classList.remove("highlight-" + this.O),
							(this.O = 1 - this.O),
							this.domNode.classList.add("highlight-" + this.O);
					}
					validate() {
						this.inputBox?.validate();
					}
					showMessage(p) {
						this.inputBox?.showMessage(p);
					}
					clearMessage() {
						this.inputBox?.hideMessage();
					}
					P() {
						this.inputBox?.hideMessage();
					}
					set width(p) {
						(this.inputBox.paddingRight = this.r),
							(this.domNode.style.width = p + "px");
					}
					dispose() {
						super.dispose();
					}
				}
				e.$Vob = n;
			},
		)
