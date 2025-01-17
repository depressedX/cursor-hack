import '../../../../../require.js';
import '../../../../../exports.js';
import '../../dom.js';
import '../../dompurify/dompurify.js';
import '../../keyboardEvent.js';
import '../../markdownRenderer.js';
import '../../touch.js';
import '../hover/hoverDelegateFactory.js';
import '../iconLabel/iconLabels.js';
import '../../../common/actions.js';
import '../../../common/codicons.js';
import '../../../common/color.js';
import '../../../common/event.js';
import '../../../common/htmlContent.js';
import '../../../common/keyCodes.js';
import '../../../common/lifecycle.js';
import '../../../common/themables.js';
import '../../../../nls.js';
import '../hover/hoverDelegate2.js';
import '../../../../css!vs/base/browser/ui/button/button.js';
define(
			de[183],
			he([
				1, 0, 7, 920, 114, 267, 159, 95, 182, 50, 14, 97, 6, 94, 27, 3, 26, 4,
				317, 2233,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rob = e.$qob = e.$pob = e.$oob = e.$nob = void 0),
					(e.$nob = {
						buttonBackground: "#0E639C",
						buttonHoverBackground: "#006BB3",
						buttonSeparator: a.$UL.white.toString(),
						buttonForeground: a.$UL.white.toString(),
						buttonBorder: void 0,
						buttonSecondaryBackground: void 0,
						buttonSecondaryForeground: void 0,
						buttonSecondaryHoverBackground: void 0,
					});
				class b extends g.$1c {
					get onDidClick() {
						return this.j.event;
					}
					get onDidEscape() {
						return this.m.event;
					}
					constructor(v, S) {
						super(),
							(this.c = ""),
							(this.j = this.D(new h.$re())),
							(this.m = this.D(new h.$re())),
							(this.a = S),
							(this.b = document.createElement("a")),
							this.b.classList.add("monaco-button"),
							(this.b.tabIndex = 0),
							this.b.setAttribute("role", "button"),
							this.b.classList.toggle("secondary", !!S.secondary);
						const I = S.secondary
								? S.buttonSecondaryBackground
								: S.buttonBackground,
							T = S.secondary
								? S.buttonSecondaryForeground
								: S.buttonForeground;
						(this.b.style.color = T || ""),
							(this.b.style.backgroundColor = I || ""),
							S.supportShortLabel &&
								((this.g = document.createElement("div")),
								this.g.classList.add("monaco-button-label-short"),
								this.b.appendChild(this.g),
								(this.f = document.createElement("div")),
								this.f.classList.add("monaco-button-label"),
								this.b.appendChild(this.f),
								this.b.classList.add("monaco-text-button-with-short-label")),
							typeof S.title == "string" && this.setTitle(S.title),
							typeof S.ariaLabel == "string" &&
								this.b.setAttribute("aria-label", S.ariaLabel),
							v.appendChild(this.b),
							this.D(C.$Qhb.addTarget(this.b)),
							[t.$$gb.CLICK, C.EventType.Tap].forEach((P) => {
								this.D(
									(0, t.$0fb)(this.b, P, (k) => {
										if (!this.enabled) {
											t.$ahb.stop(k);
											return;
										}
										this.j.fire(k);
									}),
								);
							}),
							this.D(
								(0, t.$0fb)(this.b, t.$$gb.KEY_DOWN, (P) => {
									const k = new w.$7fb(P);
									let L = !1;
									this.enabled &&
									(k.equals(n.KeyCode.Enter) || k.equals(n.KeyCode.Space))
										? (this.j.fire(P), (L = !0))
										: k.equals(n.KeyCode.Escape) &&
											(this.m.fire(P), this.b.blur(), (L = !0)),
										L && t.$ahb.stop(k, !0);
								}),
							),
							this.D(
								(0, t.$0fb)(this.b, t.$$gb.MOUSE_OVER, (P) => {
									this.b.classList.contains("disabled") || this.r(!0);
								}),
							),
							this.D(
								(0, t.$0fb)(this.b, t.$$gb.MOUSE_OUT, (P) => {
									this.r(!1);
								}),
							),
							(this.n = this.D((0, t.$dhb)(this.b))),
							this.D(
								this.n.onDidFocus(() => {
									this.enabled && this.r(!0);
								}),
							),
							this.D(
								this.n.onDidBlur(() => {
									this.enabled && this.r(!1);
								}),
							);
					}
					dispose() {
						super.dispose(), this.b.remove();
					}
					q(v) {
						const S = [];
						for (let I of (0, m.$Sib)(v))
							if (typeof I == "string") {
								if (((I = I.trim()), I === "")) continue;
								const T = document.createElement("span");
								(T.textContent = I), S.push(T);
							} else S.push(I);
						return S;
					}
					r(v) {
						let S;
						this.a.secondary
							? (S = v
									? this.a.buttonSecondaryHoverBackground
									: this.a.buttonSecondaryBackground)
							: (S = v
									? this.a.buttonHoverBackground
									: this.a.buttonBackground),
							S && (this.b.style.backgroundColor = S);
					}
					get element() {
						return this.b;
					}
					set label(v) {
						if (
							this.c === v ||
							((0, c.$el)(this.c) && (0, c.$el)(v) && (0, c.$fl)(this.c, v))
						)
							return;
						this.b.classList.add("monaco-text-button");
						const S = this.a.supportShortLabel ? this.f : this.b;
						if ((0, c.$el)(v)) {
							const T = (0, E.$Uib)(v, { inline: !0 });
							T.dispose();
							const P = T.element.querySelector("p")?.innerHTML;
							if (P) {
								const k = (0, i.sanitize)(P, {
									ADD_TAGS: ["b", "i", "u", "code", "span"],
									ALLOWED_ATTR: ["class"],
									RETURN_TRUSTED_TYPE: !0,
								});
								S.innerHTML = k;
							} else (0, t.$hhb)(S);
						} else
							this.a.supportIcons
								? (0, t.$hhb)(S, ...this.q(v))
								: (S.textContent = v);
						let I = "";
						typeof this.a.title == "string"
							? (I = this.a.title)
							: this.a.title && (I = (0, E.$Wib)(v)),
							this.setTitle(I),
							typeof this.a.ariaLabel == "string"
								? this.b.setAttribute("aria-label", this.a.ariaLabel)
								: this.a.ariaLabel && this.b.setAttribute("aria-label", I),
							(this.c = v);
					}
					get label() {
						return this.c;
					}
					set labelShort(v) {
						!this.a.supportShortLabel ||
							!this.g ||
							(this.a.supportIcons
								? (0, t.$hhb)(this.g, ...this.q(v))
								: (this.g.textContent = v));
					}
					set icon(v) {
						this.b.classList.add(...p.ThemeIcon.asClassNameArray(v));
					}
					set enabled(v) {
						v
							? (this.b.classList.remove("disabled"),
								this.b.setAttribute("aria-disabled", String(!1)),
								(this.b.tabIndex = 0))
							: (this.b.classList.add("disabled"),
								this.b.setAttribute("aria-disabled", String(!0)));
					}
					get enabled() {
						return !this.b.classList.contains("disabled");
					}
					set checked(v) {
						v
							? (this.b.classList.add("checked"),
								this.b.setAttribute("aria-checked", "true"))
							: (this.b.classList.remove("checked"),
								this.b.setAttribute("aria-checked", "false"));
					}
					get checked() {
						return this.b.classList.contains("checked");
					}
					setTitle(v) {
						!this.h && v !== ""
							? (this.h = this.D(
									(0, f.$1ib)().setupManagedHover(
										this.a.hoverDelegate ?? (0, d.$cib)("mouse"),
										this.b,
										v,
									),
								))
							: this.h && this.h.update(v);
					}
					focus() {
						this.b.focus();
					}
					hasFocus() {
						return (0, t.$Kgb)(this.b);
					}
				}
				e.$oob = b;
				class s extends g.$1c {
					constructor(v, S) {
						super(),
							(this.h = this.D(new h.$re())),
							(this.onDidClick = this.h.event),
							(this.element = document.createElement("div")),
							this.element.classList.add("monaco-button-dropdown"),
							v.appendChild(this.element),
							(this.a = this.D(new b(this.element, S))),
							this.D(this.a.onDidClick((P) => this.h.fire(P))),
							(this.b = this.D(
								new r.$rj(
									"primaryAction",
									(0, E.$Wib)(this.a.label),
									void 0,
									!0,
									async () => this.h.fire(void 0),
								),
							)),
							(this.f = document.createElement("div")),
							this.f.classList.add("monaco-button-dropdown-separator"),
							(this.g = document.createElement("div")),
							this.f.appendChild(this.g),
							this.element.appendChild(this.f);
						const I = S.buttonBorder;
						I &&
							((this.f.style.borderTop = "1px solid " + I),
							(this.f.style.borderBottom = "1px solid " + I));
						const T = S.secondary
							? S.buttonSecondaryBackground
							: S.buttonBackground;
						(this.f.style.backgroundColor = T ?? ""),
							(this.g.style.backgroundColor = S.buttonSeparator ?? ""),
							(this.c = this.D(
								new b(this.element, { ...S, title: !1, supportIcons: !0 }),
							)),
							this.D(
								(0, f.$1ib)().setupManagedHover(
									(0, d.$cib)("mouse"),
									this.c.element,
									(0, o.localize)(1, null),
								),
							),
							this.c.element.setAttribute("aria-haspopup", "true"),
							this.c.element.setAttribute("aria-expanded", "false"),
							this.c.element.classList.add("monaco-dropdown-button"),
							(this.c.icon = u.$ak.dropDownButton),
							this.D(
								this.c.onDidClick((P) => {
									const k = Array.isArray(S.actions)
										? S.actions
										: S.actions.getActions();
									S.contextMenuProvider.showContextMenu({
										getAnchor: () => this.c.element,
										getActions: () =>
											S.addPrimaryActionToDropdown === !1
												? [...k]
												: [this.b, ...k],
										actionRunner: S.actionRunner,
										onHide: () =>
											this.c.element.setAttribute("aria-expanded", "false"),
									}),
										this.c.element.setAttribute("aria-expanded", "true");
								}),
							);
					}
					dispose() {
						super.dispose(), this.element.remove();
					}
					set label(v) {
						(this.a.label = v), (this.b.label = v);
					}
					set icon(v) {
						this.a.icon = v;
					}
					set enabled(v) {
						(this.a.enabled = v),
							(this.c.enabled = v),
							this.element.classList.toggle("disabled", !v);
					}
					get enabled() {
						return this.a.enabled;
					}
					set checked(v) {
						this.a.checked = v;
					}
					get checked() {
						return this.a.checked;
					}
					focus() {
						this.a.focus();
					}
					hasFocus() {
						return this.a.hasFocus() || this.c.hasFocus();
					}
				}
				e.$pob = s;
				class l {
					constructor(v, S) {
						(this.d = S),
							(this.b = document.createElement("div")),
							this.b.classList.add("monaco-description-button"),
							(this.a = new b(this.b, S)),
							(this.c = document.createElement("div")),
							this.c.classList.add("monaco-button-description"),
							this.b.appendChild(this.c),
							v.appendChild(this.b);
					}
					get onDidClick() {
						return this.a.onDidClick;
					}
					get element() {
						return this.b;
					}
					set label(v) {
						this.a.label = v;
					}
					set icon(v) {
						this.a.icon = v;
					}
					get enabled() {
						return this.a.enabled;
					}
					set enabled(v) {
						this.a.enabled = v;
					}
					set checked(v) {
						this.a.checked = v;
					}
					get checked() {
						return this.a.checked;
					}
					focus() {
						this.a.focus();
					}
					hasFocus() {
						return this.a.hasFocus();
					}
					dispose() {
						this.a.dispose();
					}
					set description(v) {
						this.d.supportIcons
							? (0, t.$hhb)(this.c, ...(0, m.$Sib)(v))
							: (this.c.textContent = v);
					}
				}
				e.$qob = l;
				class y {
					constructor(v) {
						(this.c = v), (this.a = []), (this.b = new g.$Zc());
					}
					dispose() {
						this.b.dispose();
					}
					get buttons() {
						return this.a;
					}
					clear() {
						this.b.clear(), (this.a.length = 0);
					}
					addButton(v) {
						const S = this.b.add(new b(this.c, v));
						return this.d(S), S;
					}
					addButtonWithDescription(v) {
						const S = this.b.add(new l(this.c, v));
						return this.d(S), S;
					}
					addButtonWithDropdown(v) {
						const S = this.b.add(new s(this.c, v));
						return this.d(S), S;
					}
					d(v) {
						this.a.push(v);
						const S = this.a.length - 1;
						this.b.add(
							(0, t.$0fb)(v.element, t.$$gb.KEY_DOWN, (I) => {
								const T = new w.$7fb(I);
								let P = !0,
									k;
								T.equals(n.KeyCode.LeftArrow)
									? (k = S > 0 ? S - 1 : this.a.length - 1)
									: T.equals(n.KeyCode.RightArrow)
										? (k = S === this.a.length - 1 ? 0 : S + 1)
										: (P = !1),
									P &&
										typeof k == "number" &&
										(this.a[k].focus(), t.$ahb.stop(I, !0));
							}),
						);
					}
				}
				e.$rob = y;
			},
		),
		