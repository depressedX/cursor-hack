import '../../../../../require.js';
import '../../../../../exports.js';
import '../../dom.js';
import '../scrollbar/scrollableElement.js';
import '../../../common/arrays.js';
import '../../../common/themables.js';
import '../../../common/event.js';
import '../../../common/lifecycle.js';
import '../../../common/scrollable.js';
import '../../../../css!vs/base/browser/ui/breadcrumbs/breadcrumbsWidget.js';
define(
			de[2681],
			he([1, 0, 7, 203, 24, 26, 6, 3, 195, 2232]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*scrollableElement*/,
 w /*arrays*/,
 E /*themables*/,
 C /*event*/,
 d /*lifecycle*/,
 m /*scrollable*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$fob = e.$eob = void 0),
					(t = mt(t));
				class r {}
				e.$eob = r;
				class u {
					constructor(h, c, n, g) {
						(this.c = new d.$Zc()),
							(this.g = new C.$re()),
							(this.h = new C.$re()),
							(this.j = new C.$re()),
							(this.onDidSelectItem = this.g.event),
							(this.onDidFocusItem = this.h.event),
							(this.onDidChangeFocus = this.j.event),
							(this.k = new Array()),
							(this.l = new Array()),
							(this.m = new Array()),
							(this.o = !0),
							(this.p = -1),
							(this.q = -1),
							(this.d = document.createElement("div")),
							(this.d.className = "monaco-breadcrumbs"),
							(this.d.tabIndex = 0),
							this.d.setAttribute("role", "list"),
							(this.f = new i.$8hb(this.d, {
								vertical: m.ScrollbarVisibility.Hidden,
								horizontal: m.ScrollbarVisibility.Auto,
								horizontalScrollbarSize: c,
								useShadows: !1,
								scrollYToX: !0,
							})),
							(this.n = n),
							this.c.add(this.f),
							this.c.add(t.$$fb(this.d, "click", (f) => this.C(f))),
							h.appendChild(this.f.getDomNode());
						const p = t.$Rgb(this.d);
						this.w(p, g);
						const o = t.$dhb(this.d);
						this.c.add(o),
							this.c.add(o.onDidBlur((f) => this.j.fire(!1))),
							this.c.add(o.onDidFocus((f) => this.j.fire(!0)));
					}
					setHorizontalScrollbarSize(h) {
						this.f.updateOptions({ horizontalScrollbarSize: h });
					}
					dispose() {
						this.c.dispose(),
							this.s?.dispose(),
							this.r?.dispose(),
							this.g.dispose(),
							this.h.dispose(),
							this.j.dispose(),
							this.d.remove(),
							(this.l.length = 0),
							(this.m.length = 0);
					}
					layout(h) {
						(h && t.$pgb.equals(h, this.t)) ||
							(h
								? (this.r?.dispose(), (this.r = this.u(h)))
								: (this.s?.dispose(), (this.s = this.v())));
					}
					u(h) {
						const c = new d.$Zc();
						return (
							c.add(
								t.$lgb(t.getWindow(this.d), () => {
									(this.t = h),
										(this.d.style.width = `${h.width}px`),
										(this.d.style.height = `${h.height}px`),
										c.add(this.v());
								}),
							),
							c
						);
					}
					v() {
						return t.$kgb(t.getWindow(this.d), () => {
							t.$kgb(t.getWindow(this.d), () => {
								this.f.setRevealOnScroll(!1),
									this.f.scanDomNode(),
									this.f.setRevealOnScroll(!0);
							});
						});
					}
					w(h, c) {
						let n = "";
						c.breadcrumbsBackground &&
							(n += `.monaco-breadcrumbs { background-color: ${c.breadcrumbsBackground}}`),
							c.breadcrumbsForeground &&
								(n += `.monaco-breadcrumbs .monaco-breadcrumb-item { color: ${c.breadcrumbsForeground}}
`),
							c.breadcrumbsFocusForeground &&
								(n += `.monaco-breadcrumbs .monaco-breadcrumb-item.focused { color: ${c.breadcrumbsFocusForeground}}
`),
							c.breadcrumbsFocusAndSelectionForeground &&
								(n += `.monaco-breadcrumbs .monaco-breadcrumb-item.focused.selected { color: ${c.breadcrumbsFocusAndSelectionForeground}}
`),
							c.breadcrumbsHoverForeground &&
								(n += `.monaco-breadcrumbs:not(.disabled	) .monaco-breadcrumb-item:hover:not(.focused):not(.selected) { color: ${c.breadcrumbsHoverForeground}}
`),
							(h.innerText = n);
					}
					setEnabled(h) {
						(this.o = h), this.d.classList.toggle("disabled", !this.o);
					}
					domFocus() {
						const h = this.p >= 0 ? this.p : this.k.length - 1;
						h >= 0 && h < this.k.length ? this.x(h, void 0) : this.d.focus();
					}
					isDOMFocused() {
						return t.$Lgb(this.d);
					}
					getFocused() {
						return this.k[this.p];
					}
					setFocused(h, c) {
						this.x(this.k.indexOf(h), c);
					}
					focusPrev(h) {
						this.p > 0 && this.x(this.p - 1, h);
					}
					focusNext(h) {
						this.p + 1 < this.l.length && this.x(this.p + 1, h);
					}
					x(h, c) {
						this.p = -1;
						for (let n = 0; n < this.l.length; n++) {
							const g = this.l[n];
							n !== h
								? g.classList.remove("focused")
								: ((this.p = n), g.classList.add("focused"), g.focus());
						}
						this.y(this.p, !0),
							this.h.fire({
								type: "focus",
								item: this.k[this.p],
								node: this.l[this.p],
								payload: c,
							});
					}
					reveal(h) {
						const c = this.k.indexOf(h);
						c >= 0 && this.y(c, !1);
					}
					revealLast() {
						this.y(this.k.length - 1, !1);
					}
					y(h, c) {
						if (h < 0 || h >= this.l.length) return;
						const n = this.l[h];
						if (!n) return;
						const { width: g } = this.f.getScrollDimensions(),
							{ scrollLeft: p } = this.f.getScrollPosition();
						(!c || n.offsetLeft > p + g || n.offsetLeft < p) &&
							(this.f.setRevealOnScroll(!1),
							this.f.setScrollPosition({ scrollLeft: n.offsetLeft }),
							this.f.setRevealOnScroll(!0));
					}
					getSelection() {
						return this.k[this.q];
					}
					setSelection(h, c) {
						this.z(this.k.indexOf(h), c);
					}
					z(h, c) {
						this.q = -1;
						for (let n = 0; n < this.l.length; n++) {
							const g = this.l[n];
							n !== h
								? g.classList.remove("selected")
								: ((this.q = n), g.classList.add("selected"));
						}
						this.g.fire({
							type: "select",
							item: this.k[this.q],
							node: this.l[this.q],
							payload: c,
						});
					}
					getItems() {
						return this.k;
					}
					setItems(h) {
						let c,
							n = [];
						try {
							(c = (0, w.$Ub)(this.k, h, (g, p) => g.equals(p))),
								(n = this.k.splice(c, this.k.length - c, ...h.slice(c))),
								this.A(c),
								(0, d.$Vc)(n),
								this.x(-1, void 0);
						} catch (g) {
							const p = new Error(
								`BreadcrumbsItem#setItems: newItems: ${h.length}, prefix: ${c}, removed: ${n.length}`,
							);
							throw ((p.name = g.name), (p.stack = g.stack), p);
						}
					}
					A(h) {
						let c = !1;
						for (; h < this.k.length && h < this.l.length; h++) {
							const n = this.k[h],
								g = this.l[h];
							this.B(n, g), (c = !0);
						}
						for (; h < this.l.length; ) {
							const n = this.l.pop();
							n && (this.m.push(n), n.remove(), (c = !0));
						}
						for (; h < this.k.length; h++) {
							const n = this.k[h],
								g =
									this.m.length > 0
										? this.m.pop()
										: document.createElement("div");
							g &&
								(this.B(n, g), this.d.appendChild(g), this.l.push(g), (c = !0));
						}
						c && this.layout(void 0);
					}
					B(h, c) {
						t.$9fb(c), (c.className = "");
						try {
							h.render(c);
						} catch (g) {
							(c.innerText = "<<RENDER ERROR>>"), console.error(g);
						}
						(c.tabIndex = -1),
							c.setAttribute("role", "listitem"),
							c.classList.add("monaco-breadcrumb-item");
						const n = t.$(E.ThemeIcon.asCSSSelector(this.n));
						c.appendChild(n);
					}
					C(h) {
						if (this.o)
							for (let c = h.target; c; c = c.parentElement) {
								const n = this.l.indexOf(c);
								if (n >= 0) {
									this.x(n, h), this.z(n, h);
									break;
								}
							}
					}
				}
				e.$fob = u;
			},
		),
		