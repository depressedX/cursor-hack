import '../../../../../require.js';
import '../../../../../exports.js';
import './tree.js';
import '../../../common/arrays.js';
import '../../../common/async.js';
import '../../../common/symbols.js';
import '../../../common/diff/diff.js';
import '../../../common/event.js';
import '../../../common/iterator.js';
define(
			de[1165],
			he([1, 0, 264, 24, 15, 649, 745, 6, 103]),
			function (ce /*require*/,
 e /*exports*/,
 t /*tree*/,
 i /*arrays*/,
 w /*async*/,
 E /*symbols*/,
 C /*diff*/,
 d /*event*/,
 m /*iterator*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qpb = void 0),
					(e.$opb = r),
					(e.$ppb = u);
				function r(c) {
					return typeof c == "object" && "visibility" in c && "data" in c;
				}
				function u(c) {
					switch (c) {
						case !0:
							return t.TreeVisibility.Visible;
						case !1:
							return t.TreeVisibility.Hidden;
						default:
							return c;
					}
				}
				function a(c) {
					return typeof c.collapsible == "boolean";
				}
				class h {
					constructor(n, g, p, o = {}) {
						(this.p = n),
							(this.q = g),
							(this.rootRef = []),
							(this.d = new d.$ze()),
							(this.f = new d.$re()),
							(this.onDidChangeCollapseState = this.d.wrapEvent(this.f.event)),
							(this.g = new d.$re()),
							(this.onDidChangeRenderNodeCount = this.d.wrapEvent(
								this.g.event,
							)),
							(this.m = new d.$re()),
							(this.onDidSplice = this.m.event),
							(this.o = new w.$Jh(E.$me)),
							(this.h =
								typeof o.collapseByDefault > "u" ? !1 : o.collapseByDefault),
							(this.j = o.allowNonCollapsibleParents ?? !1),
							(this.k = o.filter),
							(this.l =
								typeof o.autoExpandSingleChildren > "u"
									? !1
									: o.autoExpandSingleChildren),
							(this.c = {
								parent: void 0,
								element: p,
								children: [],
								depth: 0,
								visibleChildrenCount: 0,
								visibleChildIndex: -1,
								collapsible: !1,
								collapsed: !1,
								renderNodeCount: 0,
								visibility: t.TreeVisibility.Visible,
								visible: !0,
								filterData: void 0,
							});
					}
					splice(n, g, p = m.Iterable.empty(), o = {}) {
						if (n.length === 0)
							throw new t.$mpb(this.p, "Invalid tree location");
						o.diffIdentityProvider
							? this.s(o.diffIdentityProvider, n, g, p, o)
							: this.t(n, g, p, o);
					}
					s(n, g, p, o = m.Iterable.empty(), f, b = f.diffDepth ?? 0) {
						const { parentNode: s } = this.H(g);
						if (!s.lastDiffIds) return this.t(g, p, o, f);
						const l = [...o],
							y = g[g.length - 1],
							$ = new C.$oL(
								{ getElements: () => s.lastDiffIds },
								{
									getElements: () =>
										[
											...s.children.slice(0, y),
											...l,
											...s.children.slice(y + p),
										].map((P) => n.getId(P.element).toString()),
								},
							).ComputeDiff(!1);
						if ($.quitEarly)
							return (s.lastDiffIds = void 0), this.t(g, p, l, f);
						const v = g.slice(0, -1),
							S = (P, k, L) => {
								if (b > 0)
									for (let D = 0; D < L; D++)
										P--,
											k--,
											this.s(
												n,
												[...v, P, 0],
												Number.MAX_SAFE_INTEGER,
												l[k].children,
												f,
												b - 1,
											);
							};
						let I = Math.min(s.children.length, y + p),
							T = l.length;
						for (const P of $.changes.sort(
							(k, L) => L.originalStart - k.originalStart,
						))
							S(I, T, I - (P.originalStart + P.originalLength)),
								(I = P.originalStart),
								(T = P.modifiedStart - y),
								this.t(
									[...v, I],
									P.originalLength,
									m.Iterable.slice(l, T, T + P.modifiedLength),
									f,
								);
						S(I, T, I);
					}
					t(
						n,
						g,
						p = m.Iterable.empty(),
						{ onDidCreateNode: o, onDidDeleteNode: f, diffIdentityProvider: b },
					) {
						const {
								parentNode: s,
								listIndex: l,
								revealed: y,
								visible: $,
							} = this.H(n),
							v = [],
							S = m.Iterable.map(p, (A) =>
								this.x(
									A,
									s,
									s.visible
										? t.TreeVisibility.Visible
										: t.TreeVisibility.Hidden,
									y,
									v,
									o,
								),
							),
							I = n[n.length - 1];
						let T = 0;
						for (let A = I; A >= 0 && A < s.children.length; A--) {
							const R = s.children[A];
							if (R.visible) {
								T = R.visibleChildIndex;
								break;
							}
						}
						const P = [];
						let k = 0,
							L = 0;
						for (const A of S)
							P.push(A),
								(L += A.renderNodeCount),
								A.visible && (A.visibleChildIndex = T + k++);
						const D = (0, i.$9b)(s.children, I, g, P);
						b
							? s.lastDiffIds
								? (0, i.$9b)(
										s.lastDiffIds,
										I,
										g,
										P.map((A) => b.getId(A.element).toString()),
									)
								: (s.lastDiffIds = s.children.map((A) =>
										b.getId(A.element).toString(),
									))
							: (s.lastDiffIds = void 0);
						let M = 0;
						for (const A of D) A.visible && M++;
						if (M !== 0)
							for (let A = I + P.length; A < s.children.length; A++) {
								const R = s.children[A];
								R.visible && (R.visibleChildIndex -= M);
							}
						if (((s.visibleChildrenCount += k - M), y && $)) {
							const A = D.reduce(
								(R, O) => R + (O.visible ? O.renderNodeCount : 0),
								0,
							);
							this.C(s, L - A), this.q.splice(l, A, v);
						}
						if (D.length > 0 && f) {
							const A = (R) => {
								f(R), R.children.forEach(A);
							};
							D.forEach(A);
						}
						this.m.fire({ insertedNodes: P, deletedNodes: D });
						let N = s;
						for (; N; ) {
							if (N.visibility === t.TreeVisibility.Recurse) {
								this.o.trigger(() => this.refilter());
								break;
							}
							N = N.parent;
						}
					}
					rerender(n) {
						if (n.length === 0)
							throw new t.$mpb(this.p, "Invalid tree location");
						const { node: g, listIndex: p, revealed: o } = this.G(n);
						g.visible && o && this.q.splice(p, 1, [g]);
					}
					updateElementHeight(n, g) {
						if (n.length === 0)
							throw new t.$mpb(this.p, "Invalid tree location");
						const { listIndex: p } = this.G(n);
						this.q.updateElementHeight(p, g);
					}
					has(n) {
						return this.E(n);
					}
					getListIndex(n) {
						const { listIndex: g, visible: p, revealed: o } = this.G(n);
						return p && o ? g : -1;
					}
					getListRenderCount(n) {
						return this.F(n).renderNodeCount;
					}
					isCollapsible(n) {
						return this.F(n).collapsible;
					}
					setCollapsible(n, g) {
						const p = this.F(n);
						typeof g > "u" && (g = !p.collapsible);
						const o = { collapsible: g };
						return this.d.bufferEvents(() => this.u(n, o));
					}
					isCollapsed(n) {
						return this.F(n).collapsed;
					}
					setCollapsed(n, g, p) {
						const o = this.F(n);
						typeof g > "u" && (g = !o.collapsed);
						const f = { collapsed: g, recursive: p || !1 };
						return this.d.bufferEvents(() => this.u(n, f));
					}
					u(n, g) {
						const { node: p, listIndex: o, revealed: f } = this.G(n),
							b = this.v(p, o, f, g);
						if (
							p !== this.c &&
							this.l &&
							b &&
							!a(g) &&
							p.collapsible &&
							!p.collapsed &&
							!g.recursive
						) {
							let s = -1;
							for (let l = 0; l < p.children.length; l++)
								if (p.children[l].visible)
									if (s > -1) {
										s = -1;
										break;
									} else s = l;
							s > -1 && this.u([...n, s], g);
						}
						return b;
					}
					v(n, g, p, o) {
						const f = this.w(n, o, !1);
						if (!p || !n.visible || !f) return f;
						const b = n.renderNodeCount,
							s = this.y(n),
							l = b - (g === -1 ? 0 : 1);
						return this.q.splice(g + 1, l, s.slice(1)), f;
					}
					w(n, g, p) {
						let o;
						if (
							(n === this.c
								? (o = !1)
								: (a(g)
										? ((o = n.collapsible !== g.collapsible),
											(n.collapsible = g.collapsible))
										: n.collapsible
											? ((o = n.collapsed !== g.collapsed),
												(n.collapsed = g.collapsed))
											: (o = !1),
									o && this.f.fire({ node: n, deep: p })),
							!a(g) && g.recursive)
						)
							for (const f of n.children) o = this.w(f, g, !0) || o;
						return o;
					}
					expandTo(n) {
						this.d.bufferEvents(() => {
							let g = this.F(n);
							for (; g.parent; )
								(g = g.parent),
									(n = n.slice(0, n.length - 1)),
									g.collapsed && this.u(n, { collapsed: !1, recursive: !1 });
						});
					}
					refilter() {
						const n = this.c.renderNodeCount,
							g = this.A(this.c);
						this.q.splice(0, n, g), this.o.cancel();
					}
					x(n, g, p, o, f, b) {
						const s = {
								parent: g,
								element: n.element,
								children: [],
								depth: g.depth + 1,
								visibleChildrenCount: 0,
								visibleChildIndex: -1,
								collapsible:
									typeof n.collapsible == "boolean"
										? n.collapsible
										: typeof n.collapsed < "u",
								collapsed: typeof n.collapsed > "u" ? this.h : n.collapsed,
								renderNodeCount: 1,
								visibility: t.TreeVisibility.Visible,
								visible: !0,
								filterData: void 0,
							},
							l = this.D(s, p);
						(s.visibility = l), o && f.push(s);
						const y = n.children || m.Iterable.empty(),
							$ = o && l !== t.TreeVisibility.Hidden && !s.collapsed;
						let v = 0,
							S = 1;
						for (const I of y) {
							const T = this.x(I, s, l, $, f, b);
							s.children.push(T),
								(S += T.renderNodeCount),
								T.visible && (T.visibleChildIndex = v++);
						}
						return (
							this.j ||
								(s.collapsible = s.collapsible || s.children.length > 0),
							(s.visibleChildrenCount = v),
							(s.visible =
								l === t.TreeVisibility.Recurse
									? v > 0
									: l === t.TreeVisibility.Visible),
							s.visible
								? s.collapsed || (s.renderNodeCount = S)
								: ((s.renderNodeCount = 0), o && f.pop()),
							b?.(s),
							s
						);
					}
					y(n) {
						const g = n.renderNodeCount,
							p = [];
						return this.z(n, p), this.C(n.parent, p.length - g), p;
					}
					z(n, g) {
						if (n.visible === !1) return 0;
						if ((g.push(n), (n.renderNodeCount = 1), !n.collapsed))
							for (const p of n.children) n.renderNodeCount += this.z(p, g);
						return this.g.fire(n), n.renderNodeCount;
					}
					A(n) {
						const g = n.renderNodeCount,
							p = [];
						return (
							this.B(
								n,
								n.visible ? t.TreeVisibility.Visible : t.TreeVisibility.Hidden,
								p,
							),
							this.C(n.parent, p.length - g),
							p
						);
					}
					B(n, g, p, o = !0) {
						let f;
						if (n !== this.c) {
							if (((f = this.D(n, g)), f === t.TreeVisibility.Hidden))
								return (n.visible = !1), (n.renderNodeCount = 0), !1;
							o && p.push(n);
						}
						const b = p.length;
						n.renderNodeCount = n === this.c ? 0 : 1;
						let s = !1;
						if (!n.collapsed || f !== t.TreeVisibility.Hidden) {
							let l = 0;
							for (const y of n.children)
								(s = this.B(y, f, p, o && !n.collapsed) || s),
									y.visible && (y.visibleChildIndex = l++);
							n.visibleChildrenCount = l;
						} else n.visibleChildrenCount = 0;
						return (
							n !== this.c &&
								((n.visible =
									f === t.TreeVisibility.Recurse
										? s
										: f === t.TreeVisibility.Visible),
								(n.visibility = f)),
							n.visible
								? n.collapsed || (n.renderNodeCount += p.length - b)
								: ((n.renderNodeCount = 0), o && p.pop()),
							this.g.fire(n),
							n.visible
						);
					}
					C(n, g) {
						if (g !== 0)
							for (; n; )
								(n.renderNodeCount += g), this.g.fire(n), (n = n.parent);
					}
					D(n, g) {
						const p = this.k
							? this.k.filter(n.element, g)
							: t.TreeVisibility.Visible;
						return typeof p == "boolean"
							? ((n.filterData = void 0),
								p ? t.TreeVisibility.Visible : t.TreeVisibility.Hidden)
							: r(p)
								? ((n.filterData = p.data), u(p.visibility))
								: ((n.filterData = void 0), u(p));
					}
					E(n, g = this.c) {
						if (!n || n.length === 0) return !0;
						const [p, ...o] = n;
						return p < 0 || p > g.children.length
							? !1
							: this.E(o, g.children[p]);
					}
					F(n, g = this.c) {
						if (!n || n.length === 0) return g;
						const [p, ...o] = n;
						if (p < 0 || p > g.children.length)
							throw new t.$mpb(this.p, "Invalid tree location");
						return this.F(o, g.children[p]);
					}
					G(n) {
						if (n.length === 0)
							return { node: this.c, listIndex: -1, revealed: !0, visible: !1 };
						const {
								parentNode: g,
								listIndex: p,
								revealed: o,
								visible: f,
							} = this.H(n),
							b = n[n.length - 1];
						if (b < 0 || b > g.children.length)
							throw new t.$mpb(this.p, "Invalid tree location");
						const s = g.children[b];
						return {
							node: s,
							listIndex: p,
							revealed: o,
							visible: f && s.visible,
						};
					}
					H(n, g = this.c, p = 0, o = !0, f = !0) {
						const [b, ...s] = n;
						if (b < 0 || b > g.children.length)
							throw new t.$mpb(this.p, "Invalid tree location");
						for (let l = 0; l < b; l++) p += g.children[l].renderNodeCount;
						return (
							(o = o && !g.collapsed),
							(f = f && g.visible),
							s.length === 0
								? { parentNode: g, listIndex: p, revealed: o, visible: f }
								: this.H(s, g.children[b], p + 1, o, f)
						);
					}
					getNode(n = []) {
						return this.F(n);
					}
					getNodeLocation(n) {
						const g = [];
						let p = n;
						for (; p.parent; )
							g.push(p.parent.children.indexOf(p)), (p = p.parent);
						return g.reverse();
					}
					getParentNodeLocation(n) {
						if (n.length !== 0) return n.length === 1 ? [] : (0, i.$xb)(n)[0];
					}
					getFirstElementChild(n) {
						const g = this.F(n);
						if (g.children.length !== 0) return g.children[0].element;
					}
					getLastElementAncestor(n = []) {
						const g = this.F(n);
						if (g.children.length !== 0) return this.I(g);
					}
					I(n) {
						return n.children.length === 0
							? n.element
							: this.I(n.children[n.children.length - 1]);
					}
				}
				e.$qpb = h;
			},
		)
