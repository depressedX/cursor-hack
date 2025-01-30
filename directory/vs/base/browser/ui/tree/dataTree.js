import '../../../../../require.js';
import '../../../../../exports.js';
import './abstractTree.js';
import './objectTreeModel.js';
import './tree.js';
import '../../../common/iterator.js';
define(
			de[1582],
			he([1, 0, 411, 931, 264, 103]),
			function (ce /*require*/,
 e /*exports*/,
 t /*abstractTree*/,
 i /*objectTreeModel*/,
 w /*tree*/,
 E /*iterator*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Hpb = void 0);
				class C extends t.$wpb {
					constructor(m, r, u, a, h, c = {}) {
						super(m, r, u, a, c),
							(this.f = m),
							(this.g = h),
							(this.d = new Map()),
							(this.c = c.identityProvider);
					}
					getInput() {
						return this.b;
					}
					setInput(m, r) {
						if (r && !this.c)
							throw new w.$mpb(
								this.f,
								"Can't restore tree view state without an identity provider",
							);
						if (((this.b = m), !m)) {
							this.d.clear(), this.o.setChildren(null, E.Iterable.empty());
							return;
						}
						if (!r) {
							this.m(m);
							return;
						}
						const u = [],
							a = [],
							h = (n) => {
								const g = this.c.getId(n).toString();
								return !r.expanded[g];
							},
							c = (n) => {
								const g = this.c.getId(n.element).toString();
								r.focus.has(g) && u.push(n.element),
									r.selection.has(g) && a.push(n.element);
							};
						this.m(m, h, c),
							this.setFocus(u),
							this.setSelection(a),
							r &&
								typeof r.scrollTop == "number" &&
								(this.scrollTop = r.scrollTop);
					}
					updateChildren(m = this.b) {
						if (typeof this.b > "u")
							throw new w.$mpb(this.f, "Tree input not set");
						let r;
						this.c &&
							(r = (u) => {
								const a = this.c.getId(u).toString(),
									h = this.d.get(a);
								if (h) return h.collapsed;
							}),
							this.m(m, r);
					}
					resort(m = this.b, r = !0) {
						this.o.resort(m === this.b ? null : m, r);
					}
					refresh(m) {
						if (m === void 0) {
							this.j.rerender();
							return;
						}
						this.o.rerender(m);
					}
					m(m, r, u) {
						let a;
						if (this.c) {
							const h = new Set(),
								c = u;
							(u = (n) => {
								const g = this.c.getId(n.element).toString();
								h.add(g), this.d.set(g, n), c?.(n);
							}),
								(a = (n) => {
									const g = this.c.getId(n.element).toString();
									h.has(g) || this.d.delete(g);
								});
						}
						this.o.setChildren(m === this.b ? null : m, this.s(m, r).elements, {
							onDidCreateNode: u,
							onDidDeleteNode: a,
						});
					}
					s(m, r) {
						const u = [...this.g.getChildren(m)];
						return {
							elements: E.Iterable.map(u, (h) => {
								const { elements: c, size: n } = this.s(h, r),
									g = this.g.hasChildren ? this.g.hasChildren(h) : void 0,
									p = n === 0 ? void 0 : r && r(h);
								return {
									element: h,
									children: c,
									collapsible: g,
									collapsed: p,
								};
							}),
							size: u.length,
						};
					}
					M(m, r, u) {
						return new i.$xpb(m, r, u);
					}
				}
				e.$Hpb = C;
			},
		),
		