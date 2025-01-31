import '../../../../../require.js';
import '../../../../../exports.js';
import './abstractTree.js';
import './compressedObjectTreeModel.js';
import './objectTreeModel.js';
import '../../../common/decorators.js';
import '../../../common/iterator.js';
define(
			de[1169],
			he([1, 0, 411, 2678, 931, 138, 103]),
			function (ce /*require*/,
 e /*exports*/,
 t /*abstractTree*/,
 i /*compressedObjectTreeModel*/,
 w /*objectTreeModel*/,
 E /*decorators*/,
 C /*iterator*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Epb = e.$Dpb = void 0);
				class d extends t.$wpb {
					get onDidChangeCollapseState() {
						return this.o.onDidChangeCollapseState;
					}
					constructor(c, n, g, p, o = {}) {
						super(c, n, g, p, o), (this.P = c);
					}
					setChildren(c, n = C.Iterable.empty(), g) {
						this.o.setChildren(c, n, g);
					}
					rerender(c) {
						if (c === void 0) {
							this.j.rerender();
							return;
						}
						this.o.rerender(c);
					}
					updateElementHeight(c, n) {
						this.o.updateElementHeight(c, n);
					}
					resort(c, n = !0) {
						this.o.resort(c, n);
					}
					hasElement(c) {
						return this.o.has(c);
					}
					M(c, n, g) {
						return new w.$xpb(c, n, g);
					}
				}
				e.$Dpb = d;
				class m {
					get a() {
						return this.b();
					}
					constructor(c, n, g) {
						(this.b = c),
							(this.c = n),
							(this.d = g),
							(this.templateId = g.templateId),
							g.onDidChangeTwistieState &&
								(this.onDidChangeTwistieState = g.onDidChangeTwistieState);
					}
					renderTemplate(c) {
						return {
							compressedTreeNode: void 0,
							data: this.d.renderTemplate(c),
						};
					}
					renderElement(c, n, g, p) {
						let o = this.c.getCompressedNode(c);
						o || (o = this.a.getCompressedTreeNode(c.element)),
							o.element.elements.length === 1
								? ((g.compressedTreeNode = void 0),
									this.d.renderElement(c, n, g.data, p))
								: ((g.compressedTreeNode = o),
									this.d.renderCompressedElements(o, n, g.data, p));
					}
					disposeElement(c, n, g, p) {
						g.compressedTreeNode
							? this.d.disposeCompressedElements?.(
									g.compressedTreeNode,
									n,
									g.data,
									p,
								)
							: this.d.disposeElement?.(c, n, g.data, p);
					}
					disposeTemplate(c) {
						this.d.disposeTemplate(c.data);
					}
					renderTwistie(c, n) {
						return this.d.renderTwistie ? this.d.renderTwistie(c, n) : !1;
					}
				}
				Ne([E.$ei], m.prototype, "a", null);
				class r {
					constructor(c) {
						(this.b = c), (this.a = new Map());
					}
					getCompressedNode(c) {
						return this.a.get(c);
					}
					constrainStickyScrollNodes(c, n, g) {
						if ((this.a.clear(), c.length === 0)) return [];
						for (let p = 0; p < c.length; p++) {
							const o = c[p],
								f = o.position + o.height;
							if (
								(p + 1 < c.length && f + c[p + 1].height > g) ||
								(p >= n - 1 && n < c.length)
							) {
								const s = c.slice(0, p),
									l = c.slice(p),
									y = this.c(l);
								return [...s, y];
							}
						}
						return c;
					}
					c(c) {
						if (c.length === 0)
							throw new Error("Can't compress empty sticky nodes");
						const n = this.b();
						if (!n.isCompressionEnabled()) return c[0];
						const g = [];
						for (let l = 0; l < c.length; l++) {
							const y = c[l],
								$ = n.getCompressedTreeNode(y.node.element);
							if ($.element) {
								if (l !== 0 && $.element.incompressible) break;
								g.push(...$.element.elements);
							}
						}
						if (g.length < 2) return c[0];
						const p = c[c.length - 1],
							o = { elements: g, incompressible: !1 },
							f = { ...p.node, children: [], element: o },
							b = new Proxy(c[0].node, {}),
							s = {
								node: b,
								startIndex: c[0].startIndex,
								endIndex: p.endIndex,
								position: c[0].position,
								height: c[0].height,
							};
						return this.a.set(b, f), s;
					}
				}
				function u(h, c) {
					return (
						c && {
							...c,
							keyboardNavigationLabelProvider:
								c.keyboardNavigationLabelProvider && {
									getKeyboardNavigationLabel(n) {
										let g;
										try {
											g = h().getCompressedTreeNode(n);
										} catch {
											return c.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(
												n,
											);
										}
										return g.element.elements.length === 1
											? c.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(
													n,
												)
											: c.keyboardNavigationLabelProvider.getCompressedNodeKeyboardNavigationLabel(
													g.element.elements,
												);
									},
								},
						}
					);
				}
				class a extends d {
					constructor(c, n, g, p, o = {}) {
						const f = () => this,
							b = new r(() => this.o),
							s = p.map((l) => new m(f, b, l));
						super(c, n, g, s, { ...u(f, o), stickyScrollDelegate: b });
					}
					setChildren(c, n = C.Iterable.empty(), g) {
						this.o.setChildren(c, n, g);
					}
					M(c, n, g) {
						return new i.$Cpb(c, n, g);
					}
					updateOptions(c = {}) {
						super.updateOptions(c),
							typeof c.compressionEnabled < "u" &&
								this.o.setCompressionEnabled(c.compressionEnabled);
					}
					getCompressedTreeNode(c = null) {
						return this.o.getCompressedTreeNode(c);
					}
				}
				e.$Epb = a;
			},
		)
