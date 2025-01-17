import '../../../require.js';
import '../../../exports.js';
import '../common/component.js';
import '../../base/browser/dom.js';
import '../../base/common/event.js';
import '../../base/common/types.js';
import '../../base/common/lifecycle.js';
import '../../css!vs/workbench/browser/media/part.js';
define(
			de[550],
			he([1, 0, 969, 7, 6, 28, 3, 2332]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lEb = e.Part = void 0);
				class d extends t.$fEb {
					get dimension() {
						return this.f;
					}
					get contentPosition() {
						return this.g;
					}
					constructor(a, h, c, n, g) {
						super(a, c, n),
							(this.L = h),
							(this.M = g),
							(this.j = this.D(new w.$re())),
							(this.onDidVisibilityChange = this.j.event),
							(this.ab = this.D(new w.$re())),
							this.D(g.registerPart(this));
					}
					q(a) {
						this.m && super.q(a);
					}
					create(a, h) {
						(this.m = a),
							(this.s = this.O(a, h)),
							(this.t = this.Q(a, h)),
							(this.J = new m(this.L, this.t)),
							this.updateStyles();
					}
					getContainer() {
						return this.m;
					}
					O(a, h) {}
					P() {
						return this.s;
					}
					Q(a, h) {}
					R() {
						return this.t;
					}
					S(a) {
						if (this.r) throw new Error("Header already exists");
						!this.m ||
							!this.s ||
							((0, i.$ghb)(this.m, a),
							a.classList.add("header-or-footer"),
							a.classList.add("header"),
							(this.r = a),
							this.J?.setHeaderVisibility(!0),
							this.Y());
					}
					U(a) {
						if (this.u) throw new Error("Footer already exists");
						!this.m ||
							!this.s ||
							(this.m.appendChild(a),
							a.classList.add("header-or-footer"),
							a.classList.add("footer"),
							(this.u = a),
							this.J?.setFooterVisibility(!0),
							this.Y());
					}
					W() {
						this.r &&
							(this.r.remove(),
							(this.r = void 0),
							this.J?.setHeaderVisibility(!1),
							this.Y());
					}
					X() {
						this.u &&
							(this.u.remove(),
							(this.u = void 0),
							this.J?.setFooterVisibility(!1),
							this.Y());
					}
					Y() {
						this.dimension &&
							this.contentPosition &&
							this.layout(
								this.dimension.width,
								this.dimension.height,
								this.contentPosition.top,
								this.contentPosition.left,
							);
					}
					Z(a, h) {
						return (0, E.$wg)(this.J).layout(a, h);
					}
					get onDidChange() {
						return this.ab.event;
					}
					layout(a, h, c, n) {
						(this.f = new i.$pgb(a, h)), (this.g = { top: c, left: n });
					}
					setVisible(a) {
						this.j.fire(a);
					}
				}
				e.Part = d;
				class m {
					static {
						this.a = 35;
					}
					static {
						this.b = 35;
					}
					static {
						this.c = 35;
					}
					constructor(a, h) {
						(this.f = a), (this.g = h), (this.d = !1), (this.e = !1);
					}
					layout(a, h) {
						let c;
						this.f.hasTitle
							? (c = new i.$pgb(a, Math.min(h, m.b)))
							: (c = i.$pgb.None);
						let n;
						this.d ? (n = new i.$pgb(a, Math.min(h, m.a))) : (n = i.$pgb.None);
						let g;
						this.e ? (g = new i.$pgb(a, Math.min(h, m.c))) : (g = i.$pgb.None);
						let p = a;
						this.f &&
							typeof this.f.borderWidth == "function" &&
							(p -= this.f.borderWidth());
						const o = new i.$pgb(p, h - c.height - n.height - g.height);
						return (
							this.g && (0, i.size)(this.g, o.width, o.height),
							{ headerSize: n, titleSize: c, contentSize: o, footerSize: g }
						);
					}
					setFooterVisibility(a) {
						this.e = a;
					}
					setHeaderVisibility(a) {
						this.d = a;
					}
				}
				class r extends t.$fEb {
					constructor() {
						super(...arguments), (this.f = new Set());
					}
					get parts() {
						return Array.from(this.f);
					}
					registerPart(a) {
						return this.f.add(a), (0, C.$Yc)(() => this.g(a));
					}
					g(a) {
						this.f.delete(a);
					}
					getPart(a) {
						return this.j(a.ownerDocument);
					}
					j(a) {
						if (this.f.size > 1) {
							for (const h of this.f)
								if (h.element?.ownerDocument === a) return h;
						}
						return this.mainPart;
					}
					get activePart() {
						return this.j((0, i.$Ngb)());
					}
				}
				e.$lEb = r;
			},
		),
		