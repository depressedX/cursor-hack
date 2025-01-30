import '../../../../../require.js';
import '../../../../../exports.js';
import './objectTreeModel.js';
import './tree.js';
import '../../../common/arrays.js';
import '../../../common/event.js';
import '../../../common/iterator.js';
define(
			de[2678],
			he([1, 0, 931, 264, 24, 6, 103]),
			function (ce /*require*/,
 e /*exports*/,
 t /*objectTreeModel*/,
 i /*tree*/,
 w /*arrays*/,
 E /*event*/,
 C /*iterator*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Cpb = e.$Bpb = e.$Apb = void 0),
					(e.$ypb = m),
					(e.$zpb = u);
				function d(b) {
					const s = [b.element],
						l = b.incompressible || !1;
					return {
						element: { elements: s, incompressible: l },
						children: C.Iterable.map(C.Iterable.from(b.children), d),
						collapsible: b.collapsible,
						collapsed: b.collapsed,
					};
				}
				function m(b) {
					const s = [b.element],
						l = b.incompressible || !1;
					let y, $;
					for (
						;
						([$, y] = C.Iterable.consume(C.Iterable.from(b.children), 2)),
							!($.length !== 1 || $[0].incompressible);
					)
						(b = $[0]), s.push(b.element);
					return {
						element: { elements: s, incompressible: l },
						children: C.Iterable.map(C.Iterable.concat($, y), m),
						collapsible: b.collapsible,
						collapsed: b.collapsed,
					};
				}
				function r(b, s = 0) {
					let l;
					return (
						s < b.element.elements.length - 1
							? (l = [r(b, s + 1)])
							: (l = C.Iterable.map(C.Iterable.from(b.children), (y) =>
									r(y, 0),
								)),
						s === 0 && b.element.incompressible
							? {
									element: b.element.elements[s],
									children: l,
									incompressible: !0,
									collapsible: b.collapsible,
									collapsed: b.collapsed,
								}
							: {
									element: b.element.elements[s],
									children: l,
									collapsible: b.collapsible,
									collapsed: b.collapsed,
								}
					);
				}
				function u(b) {
					return r(b, 0);
				}
				function a(b, s, l) {
					return b.element === s
						? { ...b, children: l }
						: {
								...b,
								children: C.Iterable.map(C.Iterable.from(b.children), (y) =>
									a(y, s, l),
								),
							};
				}
				const h = (b) => ({
					getId(s) {
						return s.elements.map((l) => b.getId(l).toString()).join("\0");
					},
				});
				class c {
					get onDidSplice() {
						return this.c.onDidSplice;
					}
					get onDidChangeCollapseState() {
						return this.c.onDidChangeCollapseState;
					}
					get onDidChangeRenderNodeCount() {
						return this.c.onDidChangeRenderNodeCount;
					}
					get size() {
						return this.d.size;
					}
					constructor(s, l, y = {}) {
						(this.h = s),
							(this.rootRef = null),
							(this.d = new Map()),
							(this.c = new t.$xpb(s, l, y)),
							(this.f =
								typeof y.compressionEnabled > "u" ? !0 : y.compressionEnabled),
							(this.g = y.identityProvider);
					}
					setChildren(s, l = C.Iterable.empty(), y) {
						const $ = y.diffIdentityProvider && h(y.diffIdentityProvider);
						if (s === null) {
							const N = C.Iterable.map(l, this.f ? m : d);
							this.i(null, N, { diffIdentityProvider: $, diffDepth: 1 / 0 });
							return;
						}
						const v = this.d.get(s);
						if (!v) throw new i.$mpb(this.h, "Unknown compressed tree node");
						const S = this.c.getNode(v),
							I = this.c.getParentNodeLocation(v),
							T = this.c.getNode(I),
							P = u(S),
							k = a(P, s, l),
							L = (this.f ? m : d)(k),
							D = y.diffIdentityProvider
								? (N, A) =>
										y.diffIdentityProvider.getId(N) ===
										y.diffIdentityProvider.getId(A)
								: void 0;
						if ((0, w.$yb)(L.element.elements, S.element.elements, D)) {
							this.i(v, L.children || C.Iterable.empty(), {
								diffIdentityProvider: $,
								diffDepth: 1,
							});
							return;
						}
						const M = T.children.map((N) => (N === S ? L : N));
						this.i(T.element, M, {
							diffIdentityProvider: $,
							diffDepth: S.depth - T.depth,
						});
					}
					isCompressionEnabled() {
						return this.f;
					}
					setCompressionEnabled(s) {
						if (s === this.f) return;
						this.f = s;
						const y = this.c.getNode().children,
							$ = C.Iterable.map(y, u),
							v = C.Iterable.map($, s ? m : d);
						this.i(null, v, { diffIdentityProvider: this.g, diffDepth: 1 / 0 });
					}
					i(s, l, y) {
						const $ = new Set(),
							v = (I) => {
								for (const T of I.element.elements)
									$.add(T), this.d.set(T, I.element);
							},
							S = (I) => {
								for (const T of I.element.elements)
									$.has(T) || this.d.delete(T);
							};
						this.c.setChildren(s, l, {
							...y,
							onDidCreateNode: v,
							onDidDeleteNode: S,
						});
					}
					has(s) {
						return this.d.has(s);
					}
					getListIndex(s) {
						const l = this.getCompressedNode(s);
						return this.c.getListIndex(l);
					}
					getListRenderCount(s) {
						const l = this.getCompressedNode(s);
						return this.c.getListRenderCount(l);
					}
					getNode(s) {
						if (typeof s > "u") return this.c.getNode();
						const l = this.getCompressedNode(s);
						return this.c.getNode(l);
					}
					getNodeLocation(s) {
						const l = this.c.getNodeLocation(s);
						return l === null ? null : l.elements[l.elements.length - 1];
					}
					getParentNodeLocation(s) {
						const l = this.getCompressedNode(s),
							y = this.c.getParentNodeLocation(l);
						return y === null ? null : y.elements[y.elements.length - 1];
					}
					getFirstElementChild(s) {
						const l = this.getCompressedNode(s);
						return this.c.getFirstElementChild(l);
					}
					getLastElementAncestor(s) {
						const l = typeof s > "u" ? void 0 : this.getCompressedNode(s);
						return this.c.getLastElementAncestor(l);
					}
					isCollapsible(s) {
						const l = this.getCompressedNode(s);
						return this.c.isCollapsible(l);
					}
					setCollapsible(s, l) {
						const y = this.getCompressedNode(s);
						return this.c.setCollapsible(y, l);
					}
					isCollapsed(s) {
						const l = this.getCompressedNode(s);
						return this.c.isCollapsed(l);
					}
					setCollapsed(s, l, y) {
						const $ = this.getCompressedNode(s);
						return this.c.setCollapsed($, l, y);
					}
					expandTo(s) {
						const l = this.getCompressedNode(s);
						this.c.expandTo(l);
					}
					rerender(s) {
						const l = this.getCompressedNode(s);
						this.c.rerender(l);
					}
					updateElementHeight(s, l) {
						const y = this.getCompressedNode(s);
						y && this.c.updateElementHeight(y, l);
					}
					refilter() {
						this.c.refilter();
					}
					resort(s = null, l = !0) {
						const y = this.getCompressedNode(s);
						this.c.resort(y, l);
					}
					getCompressedNode(s) {
						if (s === null) return null;
						const l = this.d.get(s);
						if (!l) throw new i.$mpb(this.h, `Tree element not found: ${s}`);
						return l;
					}
				}
				e.$Apb = c;
				const n = (b) => b[b.length - 1];
				e.$Bpb = n;
				class g {
					get element() {
						return this.d.element === null ? null : this.c(this.d.element);
					}
					get children() {
						return this.d.children.map((s) => new g(this.c, s));
					}
					get depth() {
						return this.d.depth;
					}
					get visibleChildrenCount() {
						return this.d.visibleChildrenCount;
					}
					get visibleChildIndex() {
						return this.d.visibleChildIndex;
					}
					get collapsible() {
						return this.d.collapsible;
					}
					get collapsed() {
						return this.d.collapsed;
					}
					get visible() {
						return this.d.visible;
					}
					get filterData() {
						return this.d.filterData;
					}
					constructor(s, l) {
						(this.c = s), (this.d = l);
					}
				}
				function p(b, s) {
					return {
						splice(l, y, $) {
							s.splice(
								l,
								y,
								$.map((v) => b.map(v)),
							);
						},
						updateElementHeight(l, y) {
							s.updateElementHeight(l, y);
						},
					};
				}
				function o(b, s) {
					return {
						...s,
						identityProvider: s.identityProvider && {
							getId(l) {
								return s.identityProvider.getId(b(l));
							},
						},
						sorter: s.sorter && {
							compare(l, y) {
								return s.sorter.compare(l.elements[0], y.elements[0]);
							},
						},
						filter: s.filter && {
							filter(l, y) {
								return s.filter.filter(b(l), y);
							},
						},
					};
				}
				class f {
					get onDidSplice() {
						return E.Event.map(
							this.f.onDidSplice,
							({ insertedNodes: s, deletedNodes: l }) => ({
								insertedNodes: s.map((y) => this.d.map(y)),
								deletedNodes: l.map((y) => this.d.map(y)),
							}),
						);
					}
					get onDidChangeCollapseState() {
						return E.Event.map(
							this.f.onDidChangeCollapseState,
							({ node: s, deep: l }) => ({ node: this.d.map(s), deep: l }),
						);
					}
					get onDidChangeRenderNodeCount() {
						return E.Event.map(this.f.onDidChangeRenderNodeCount, (s) =>
							this.d.map(s),
						);
					}
					constructor(s, l, y = {}) {
						(this.rootRef = null), (this.c = y.elementMapper || e.$Bpb);
						const $ = (v) => this.c(v.elements);
						(this.d = new i.$npb((v) => new g($, v))),
							(this.f = new c(s, p(this.d, l), o($, y)));
					}
					setChildren(s, l = C.Iterable.empty(), y = {}) {
						this.f.setChildren(s, l, y);
					}
					isCompressionEnabled() {
						return this.f.isCompressionEnabled();
					}
					setCompressionEnabled(s) {
						this.f.setCompressionEnabled(s);
					}
					has(s) {
						return this.f.has(s);
					}
					getListIndex(s) {
						return this.f.getListIndex(s);
					}
					getListRenderCount(s) {
						return this.f.getListRenderCount(s);
					}
					getNode(s) {
						return this.d.map(this.f.getNode(s));
					}
					getNodeLocation(s) {
						return s.element;
					}
					getParentNodeLocation(s) {
						return this.f.getParentNodeLocation(s);
					}
					getFirstElementChild(s) {
						const l = this.f.getFirstElementChild(s);
						return l === null || typeof l > "u" ? l : this.c(l.elements);
					}
					getLastElementAncestor(s) {
						const l = this.f.getLastElementAncestor(s);
						return l === null || typeof l > "u" ? l : this.c(l.elements);
					}
					isCollapsible(s) {
						return this.f.isCollapsible(s);
					}
					setCollapsible(s, l) {
						return this.f.setCollapsible(s, l);
					}
					isCollapsed(s) {
						return this.f.isCollapsed(s);
					}
					setCollapsed(s, l, y) {
						return this.f.setCollapsed(s, l, y);
					}
					expandTo(s) {
						return this.f.expandTo(s);
					}
					rerender(s) {
						return this.f.rerender(s);
					}
					updateElementHeight(s, l) {
						this.f.updateElementHeight(s, l);
					}
					refilter() {
						return this.f.refilter();
					}
					resort(s = null, l = !0) {
						return this.f.resort(s, l);
					}
					getCompressedTreeNode(s = null) {
						return this.f.getNode(s);
					}
				}
				e.$Cpb = f;
			},
		),
		