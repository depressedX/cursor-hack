import '../../../../../require.js';
import '../../../../../exports.js';
import '../../dom.js';
import '../aria/aria.js';
import '../inputbox/inputBox.js';
import '../scrollbar/scrollableElement.js';
import '../../../common/event.js';
import '../../../common/lifecycle.js';
import '../../../common/themables.js';
import '../../../../nls.js';
import '../../../common/scrollable.js';
import '../highlightedlabel/highlightedLabel.js';
import '../../../../css!vs/base/browser/ui/icons/iconSelectBox.js';
define(
			de[2685],
			he([1, 0, 7, 127, 292, 203, 6, 3, 26, 4, 195, 410, 2241]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*aria*/,
 w /*inputBox*/,
 E /*scrollableElement*/,
 C /*event*/,
 d /*lifecycle*/,
 m /*themables*/,
 r /*nls*/,
 u /*scrollable*/,
 a /*highlightedLabel*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Zob = void 0),
					(t = mt(t));
				class h extends d.$1c {
					static {
						this.a = 0;
					}
					constructor(n) {
						super(),
							(this.s = n),
							(this.domId = `icon_select_box_id_${++h.a}`),
							(this.b = this.D(new C.$re())),
							(this.onDidSelect = this.b.event),
							(this.c = []),
							(this.f = 0),
							(this.g = 1),
							(this.q = 36),
							(this.r = 36),
							(this.domNode = t.$(".icon-select-box")),
							this.D(this.t());
					}
					t() {
						const n = new d.$Zc(),
							g = t.$fhb(this.domNode, t.$(".icon-select-box-container"));
						g.style.margin = "10px 15px";
						const p = t.$fhb(g, t.$(".icon-select-input-container"));
						(p.style.paddingBottom = "10px"),
							(this.h = n.add(
								new w.$Mob(p, void 0, {
									placeholder: (0, r.localize)(17, null),
									inputBoxStyles: this.s.inputBoxStyles,
								}),
							));
						const o = (this.m = t.$(".icon-select-icons-container", {
							id: `${this.domId}_icons`,
						}));
						(o.role = "listbox"),
							(o.tabIndex = 0),
							(this.j = n.add(
								new E.$8hb(o, {
									useShadows: !1,
									horizontal: u.ScrollbarVisibility.Hidden,
								}),
							)),
							t.$fhb(g, this.j.getDomNode()),
							this.s.showIconInfo &&
								(this.n = this.D(
									new a.$Wob(
										t.$fhb(
											t.$fhb(g, t.$(".icon-select-id-container")),
											t.$(".icon-select-id-label"),
										),
									),
								));
						const f = n.add(new d.$2c());
						return (
							(f.value = this.u(this.s.icons, [], o)),
							this.j.scanDomNode(),
							n.add(
								this.h.onDidChange((b) => {
									const s = [],
										l = [];
									for (const y of this.s.icons) {
										const $ = this.z(b, y.id);
										$ && (s.push(y), l.push($));
									}
									s.length &&
										((f.value = this.u(s, l, o)), this.j?.scanDomNode());
								}),
							),
							(this.h.inputElement.role = "combobox"),
							(this.h.inputElement.ariaHasPopup = "menu"),
							(this.h.inputElement.ariaAutoComplete = "list"),
							(this.h.inputElement.ariaExpanded = "true"),
							this.h.inputElement.setAttribute("aria-controls", o.id),
							n
						);
					}
					u(n, g, p) {
						const o = new d.$Zc();
						t.$9fb(p);
						const f = this.c[this.f]?.icon;
						let b = 0;
						const s = [];
						if (n.length)
							for (let l = 0; l < n.length; l++) {
								const y = n[l],
									$ = t.$fhb(
										p,
										t.$(".icon-container", { id: `${this.domId}_icons_${l}` }),
									);
								($.style.width = `${this.q}px`),
									($.style.height = `${this.r}px`),
									($.title = y.id),
									($.role = "button"),
									$.setAttribute("aria-setsize", `${n.length}`),
									$.setAttribute("aria-posinset", `${l + 1}`),
									t.$fhb($, t.$(m.ThemeIcon.asCSSSelector(y))),
									s.push({ icon: y, element: $, highlightMatches: g[l] }),
									o.add(
										t.$0fb($, t.$$gb.CLICK, (v) => {
											v.stopPropagation(), this.setSelection(l);
										}),
									),
									y === f && (b = l);
							}
						else {
							const l = (0, r.localize)(18, null);
							t.$fhb(p, t.$(".icon-no-results", void 0, l)), (0, i.$oib)(l);
						}
						return this.c.splice(0, this.c.length, ...s), this.w(b), o;
					}
					w(n) {
						const g = this.c[this.f];
						g && g.element.classList.remove("focused"), (this.f = n);
						const p = this.c[n];
						p && p.element.classList.add("focused"),
							this.h &&
								(p
									? this.h.inputElement.setAttribute(
											"aria-activedescendant",
											p.element.id,
										)
									: this.h.inputElement.removeAttribute(
											"aria-activedescendant",
										)),
							this.n &&
								(p
									? this.n.set(p.icon.id, p.highlightMatches)
									: this.n.set("")),
							this.y(n);
					}
					y(n) {
						if (!this.j || n < 0 || n >= this.c.length) return;
						const g = this.c[n].element;
						if (!g) return;
						const { height: p } = this.j.getScrollDimensions(),
							{ scrollTop: o } = this.j.getScrollPosition();
						g.offsetTop + this.r > o + p
							? this.j.setScrollPosition({
									scrollTop: g.offsetTop + this.r - p,
								})
							: g.offsetTop < o &&
								this.j.setScrollPosition({ scrollTop: g.offsetTop });
					}
					z(n, g) {
						const p = g.toLowerCase().indexOf(n.toLowerCase());
						return p !== -1 ? [{ start: p, end: p + n.length }] : null;
					}
					layout(n) {
						(this.domNode.style.width = `${n.width}px`),
							(this.domNode.style.height = `${n.height}px`);
						const g = n.width - 30;
						if (((this.g = Math.floor(g / this.q)), this.g === 0))
							throw new Error("Insufficient width");
						const p = g % this.q,
							o = Math.floor(p / this.g);
						for (const { element: b } of this.c) b.style.marginRight = `${o}px`;
						const f = p % this.g;
						this.m &&
							((this.m.style.paddingLeft = `${Math.floor(f / 2)}px`),
							(this.m.style.paddingRight = `${Math.ceil(f / 2)}px`)),
							this.j &&
								((this.j.getDomNode().style.height = `${this.n ? n.height - 80 : n.height - 40}px`),
								this.j.scanDomNode());
					}
					getFocus() {
						return [this.f];
					}
					setSelection(n) {
						if (n < 0 || n >= this.c.length)
							throw new Error(`Invalid index ${n}`);
						this.w(n), this.b.fire(this.c[n].icon);
					}
					clearInput() {
						this.h && (this.h.value = "");
					}
					focus() {
						this.h?.focus(), this.w(0);
					}
					focusNext() {
						this.w((this.f + 1) % this.c.length);
					}
					focusPrevious() {
						this.w((this.f - 1 + this.c.length) % this.c.length);
					}
					focusNextRow() {
						let n = this.f + this.g;
						n >= this.c.length &&
							((n = (n + 1) % this.g), (n = n >= this.c.length ? 0 : n)),
							this.w(n);
					}
					focusPreviousRow() {
						let n = this.f - this.g;
						if (n < 0) {
							const g = Math.floor(this.c.length / this.g);
							(n = this.f + this.g * g - 1),
								(n =
									n < 0
										? this.c.length - 1
										: n >= this.c.length
											? n - this.g
											: n);
						}
						this.w(n);
					}
					getFocusedIcon() {
						return this.c[this.f].icon;
					}
				}
				e.$Zob = h;
			},
		),
		