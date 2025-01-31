import '../../../../../require.js';
import '../../../../../exports.js';
import './indexTreeModel.js';
import './tree.js';
import '../../../common/iterator.js';
define(de[931], he([1, 0, 1165, 264, 103]), function (ce /*require*/,
 e /*exports*/,
 t /*indexTreeModel*/,
 i /*tree*/,
 w /*iterator*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$xpb = void 0);
			class E {
				get size() {
					return this.d.size;
				}
				constructor(d, m, r = {}) {
					(this.k = d),
						(this.rootRef = null),
						(this.d = new Map()),
						(this.f = new Map()),
						(this.c = new t.$qpb(d, m, null, r)),
						(this.onDidSplice = this.c.onDidSplice),
						(this.onDidChangeCollapseState = this.c.onDidChangeCollapseState),
						(this.onDidChangeRenderNodeCount =
							this.c.onDidChangeRenderNodeCount),
						r.sorter &&
							(this.j = {
								compare(u, a) {
									return r.sorter.compare(u.element, a.element);
								},
							}),
						(this.h = r.identityProvider);
				}
				setChildren(d, m = w.Iterable.empty(), r = {}) {
					const u = this.o(d);
					this.l(u, this.m(m), r);
				}
				l(d, m = w.Iterable.empty(), r) {
					const u = new Set(),
						a = new Set(),
						h = (n) => {
							if (n.element === null) return;
							const g = n;
							if ((u.add(g.element), this.d.set(g.element, g), this.h)) {
								const p = this.h.getId(g.element).toString();
								a.add(p), this.f.set(p, g);
							}
							r.onDidCreateNode?.(g);
						},
						c = (n) => {
							if (n.element === null) return;
							const g = n;
							if ((u.has(g.element) || this.d.delete(g.element), this.h)) {
								const p = this.h.getId(g.element).toString();
								a.has(p) || this.f.delete(p);
							}
							r.onDidDeleteNode?.(g);
						};
					this.c.splice([...d, 0], Number.MAX_VALUE, m, {
						...r,
						onDidCreateNode: h,
						onDidDeleteNode: c,
					});
				}
				m(d = w.Iterable.empty()) {
					return (
						this.j && (d = [...d].sort(this.j.compare.bind(this.j))),
						w.Iterable.map(d, (m) => {
							let r = this.d.get(m.element);
							if (!r && this.h) {
								const h = this.h.getId(m.element).toString();
								r = this.f.get(h);
							}
							if (!r) {
								let h;
								return (
									typeof m.collapsed > "u"
										? (h = void 0)
										: m.collapsed ===
													i.ObjectTreeElementCollapseState.Collapsed ||
												m.collapsed ===
													i.ObjectTreeElementCollapseState.PreserveOrCollapsed
											? (h = !0)
											: m.collapsed ===
														i.ObjectTreeElementCollapseState.Expanded ||
													m.collapsed ===
														i.ObjectTreeElementCollapseState.PreserveOrExpanded
												? (h = !1)
												: (h = !!m.collapsed),
									{ ...m, children: this.m(m.children), collapsed: h }
								);
							}
							const u =
								typeof m.collapsible == "boolean"
									? m.collapsible
									: r.collapsible;
							let a;
							return (
								typeof m.collapsed > "u" ||
								m.collapsed ===
									i.ObjectTreeElementCollapseState.PreserveOrCollapsed ||
								m.collapsed ===
									i.ObjectTreeElementCollapseState.PreserveOrExpanded
									? (a = r.collapsed)
									: m.collapsed === i.ObjectTreeElementCollapseState.Collapsed
										? (a = !0)
										: m.collapsed === i.ObjectTreeElementCollapseState.Expanded
											? (a = !1)
											: (a = !!m.collapsed),
								{
									...m,
									collapsible: u,
									collapsed: a,
									children: this.m(m.children),
								}
							);
						})
					);
				}
				rerender(d) {
					const m = this.o(d);
					this.c.rerender(m);
				}
				updateElementHeight(d, m) {
					const r = this.o(d);
					this.c.updateElementHeight(r, m);
				}
				resort(d = null, m = !0) {
					if (!this.j) return;
					const r = this.o(d),
						u = this.c.getNode(r);
					this.l(r, this.n(u, m), {});
				}
				n(d, m, r = !0) {
					let u = [...d.children];
					return (
						(m || r) && (u = u.sort(this.j.compare.bind(this.j))),
						w.Iterable.map(u, (a) => ({
							element: a.element,
							collapsible: a.collapsible,
							collapsed: a.collapsed,
							children: this.n(a, m, !1),
						}))
					);
				}
				getFirstElementChild(d = null) {
					const m = this.o(d);
					return this.c.getFirstElementChild(m);
				}
				getLastElementAncestor(d = null) {
					const m = this.o(d);
					return this.c.getLastElementAncestor(m);
				}
				has(d) {
					return this.d.has(d);
				}
				getListIndex(d) {
					const m = this.o(d);
					return this.c.getListIndex(m);
				}
				getListRenderCount(d) {
					const m = this.o(d);
					return this.c.getListRenderCount(m);
				}
				isCollapsible(d) {
					const m = this.o(d);
					return this.c.isCollapsible(m);
				}
				setCollapsible(d, m) {
					const r = this.o(d);
					return this.c.setCollapsible(r, m);
				}
				isCollapsed(d) {
					const m = this.o(d);
					return this.c.isCollapsed(m);
				}
				setCollapsed(d, m, r) {
					const u = this.o(d);
					return this.c.setCollapsed(u, m, r);
				}
				expandTo(d) {
					const m = this.o(d);
					this.c.expandTo(m);
				}
				refilter() {
					this.c.refilter();
				}
				getNode(d = null) {
					if (d === null) return this.c.getNode(this.c.rootRef);
					const m = this.d.get(d);
					if (!m) throw new i.$mpb(this.k, `Tree element not found: ${d}`);
					return m;
				}
				getNodeLocation(d) {
					return d.element;
				}
				getParentNodeLocation(d) {
					if (d === null)
						throw new i.$mpb(this.k, "Invalid getParentNodeLocation call");
					const m = this.d.get(d);
					if (!m) throw new i.$mpb(this.k, `Tree element not found: ${d}`);
					const r = this.c.getNodeLocation(m),
						u = this.c.getParentNodeLocation(r);
					return this.c.getNode(u).element;
				}
				o(d) {
					if (d === null) return [];
					const m = this.d.get(d);
					if (!m) throw new i.$mpb(this.k, `Tree element not found: ${d}`);
					return this.c.getNodeLocation(m);
				}
			}
			e.$xpb = E;
		})
