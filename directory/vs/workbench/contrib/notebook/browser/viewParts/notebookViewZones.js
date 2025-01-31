import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/fastDomNode.js';
import '../../../../../base/common/errors.js';
import '../../../../../base/common/lifecycle.js';
define(de[3111], he([1, 0, 194, 29, 3]), function (ce /*require*/,
 e /*exports*/,
 t /*fastDomNode*/,
 i /*errors*/,
 w /*lifecycle*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$z2b = void 0);
			const E = () => {
				throw new Error("Invalid notebook view zone change accessor");
			};
			class C extends w.$1c {
				constructor(r, u) {
					super(),
						(this.b = r),
						(this.c = u),
						(this.domNode = (0, t.$Shb)(document.createElement("div"))),
						this.domNode.setClassName("view-zones"),
						this.domNode.setPosition("absolute"),
						this.domNode.setAttribute("role", "presentation"),
						this.domNode.setAttribute("aria-hidden", "true"),
						this.domNode.setWidth("100%"),
						(this.a = {}),
						this.b.containerDomNode.appendChild(this.domNode.domNode);
				}
				changeViewZones(r) {
					let u = !1;
					const a = {
						addZone: (h) => ((u = !0), this.g(h)),
						removeZone: (h) => {
							(u = !0), this.h(h);
						},
						layoutZone: (h) => {
							(u = !0), this.j(h);
						},
					};
					return (
						d(r, a), (a.addZone = E), (a.removeZone = E), (a.layoutZone = E), u
					);
				}
				onCellsChanged(r) {
					r.splices
						.slice()
						.reverse()
						.forEach((a) => {
							const [h, c, n] = a,
								g = h,
								p = h + c;
							for (const o in this.a) {
								const f = this.a[o].zone,
									b = f.afterModelPosition - 1;
								if (b >= g && b < p)
									(f.afterModelPosition = g), this.f(this.a[o]);
								else if (b >= p) {
									const l = n.length - c;
									(f.afterModelPosition += l), this.f(this.a[o]);
								}
							}
						});
				}
				onHiddenRangesChange() {
					for (const r in this.a) this.f(this.a[r]);
				}
				f(r) {
					const u = r.whitespaceId,
						a = this.c.convertModelIndexToViewIndex(r.zone.afterModelPosition),
						h = this.m(r.zone);
					(r.isInHiddenArea = h),
						this.b.changeOneWhitespace(u, a, h ? 0 : r.zone.heightInPx);
				}
				layout() {
					for (const r in this.a) this.j(r);
				}
				g(r) {
					const u = this.c.convertModelIndexToViewIndex(r.afterModelPosition),
						a = this.b.insertWhitespace(u, r.heightInPx),
						h = this.m(r),
						c = {
							whitespaceId: a,
							zone: r,
							domNode: (0, t.$Shb)(r.domNode),
							isInHiddenArea: h,
						};
					return (
						(this.a[a] = c),
						c.domNode.setPosition("absolute"),
						(c.domNode.domNode.style.width = "100%"),
						c.domNode.setDisplay("none"),
						c.domNode.setAttribute("notebook-view-zone", a),
						this.domNode.appendChild(c.domNode),
						a
					);
				}
				h(r) {
					this.b.removeWhitespace(r), delete this.a[r];
				}
				j(r) {
					const u = this.a[r];
					if (!u) return;
					if ((this.f(this.a[r]), this.m(u.zone))) u.domNode.setDisplay("none");
					else {
						const h = this.b.getWhitespacePosition(u.whitespaceId);
						u.domNode.setTop(h),
							u.domNode.setDisplay("block"),
							u.domNode.setHeight(u.zone.heightInPx);
					}
				}
				m(r) {
					const u = r.afterModelPosition;
					return !this.c.modelIndexIsVisible(u);
				}
				dispose() {
					super.dispose(), (this.a = {});
				}
			}
			e.$z2b = C;
			function d(m, r) {
				try {
					return m(r);
				} catch (u) {
					(0, i.$4)(u);
				}
			}
		})
