define(de[931], he([1, 0, 1165, 264, 103]), function (ce, e, t, i, w) {
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
		}),
		define(
			de[2678],
			he([1, 0, 931, 264, 24, 6, 103]),
			function (ce, e, t, i, w, E, C) {
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
		define(
			de[235],
			he([1, 0, 7, 114, 168, 159, 3]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Uhb = void 0),
					(t = mt(t));
				class d extends C.$1c {
					f(r, u) {
						this.D(
							t.$0fb(r, t.$$gb.CLICK, (a) => u(new w.$2fb(t.getWindow(r), a))),
						);
					}
					j(r, u) {
						this.D(
							t.$0fb(r, t.$$gb.MOUSE_DOWN, (a) =>
								u(new w.$2fb(t.getWindow(r), a)),
							),
						);
					}
					m(r, u) {
						this.D(
							t.$0fb(r, t.$$gb.MOUSE_OVER, (a) =>
								u(new w.$2fb(t.getWindow(r), a)),
							),
						);
					}
					q(r, u) {
						this.D(
							t.$0fb(r, t.$$gb.MOUSE_LEAVE, (a) =>
								u(new w.$2fb(t.getWindow(r), a)),
							),
						);
					}
					u(r, u) {
						this.D(t.$0fb(r, t.$$gb.KEY_DOWN, (a) => u(new i.$7fb(a))));
					}
					z(r, u) {
						this.D(t.$0fb(r, t.$$gb.KEY_UP, (a) => u(new i.$7fb(a))));
					}
					C(r, u) {
						this.D(t.$0fb(r, t.$$gb.INPUT, u));
					}
					F(r, u) {
						this.D(t.$0fb(r, t.$$gb.BLUR, u));
					}
					G(r, u) {
						this.D(t.$0fb(r, t.$$gb.FOCUS, u));
					}
					H(r, u) {
						this.D(t.$0fb(r, t.$$gb.CHANGE, u));
					}
					I(r) {
						return E.$Qhb.ignoreTarget(r);
					}
				}
				e.$Uhb = d;
			},
		),
		define(
			de[1166],
			he([1, 0, 757, 235, 15, 26, 7]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Whb = e.$Vhb = void 0),
					(C = mt(C)),
					(e.$Vhb = 11);
				class d extends i.$Uhb {
					constructor(r) {
						super(),
							(this.a = r.onActivate),
							(this.bgDomNode = document.createElement("div")),
							(this.bgDomNode.className = "arrow-background"),
							(this.bgDomNode.style.position = "absolute"),
							(this.bgDomNode.style.width = r.bgWidth + "px"),
							(this.bgDomNode.style.height = r.bgHeight + "px"),
							typeof r.top < "u" && (this.bgDomNode.style.top = "0px"),
							typeof r.left < "u" && (this.bgDomNode.style.left = "0px"),
							typeof r.bottom < "u" && (this.bgDomNode.style.bottom = "0px"),
							typeof r.right < "u" && (this.bgDomNode.style.right = "0px"),
							(this.domNode = document.createElement("div")),
							(this.domNode.className = r.className),
							this.domNode.classList.add(
								...E.ThemeIcon.asClassNameArray(r.icon),
							),
							(this.domNode.style.position = "absolute"),
							(this.domNode.style.width = e.$Vhb + "px"),
							(this.domNode.style.height = e.$Vhb + "px"),
							typeof r.top < "u" && (this.domNode.style.top = r.top + "px"),
							typeof r.left < "u" && (this.domNode.style.left = r.left + "px"),
							typeof r.bottom < "u" &&
								(this.domNode.style.bottom = r.bottom + "px"),
							typeof r.right < "u" &&
								(this.domNode.style.right = r.right + "px"),
							(this.g = this.D(new t.$Thb())),
							this.D(
								C.$$fb(this.bgDomNode, C.$$gb.POINTER_DOWN, (u) => this.h(u)),
							),
							this.D(
								C.$$fb(this.domNode, C.$$gb.POINTER_DOWN, (u) => this.h(u)),
							),
							(this.b = this.D(new C.$jgb())),
							(this.c = this.D(new w.$Wh()));
					}
					h(r) {
						if (!r.target || !(r.target instanceof Element)) return;
						const u = () => {
							this.b.cancelAndSet(() => this.a(), 1e3 / 24, C.getWindow(r));
						};
						this.a(),
							this.b.cancel(),
							this.c.cancelAndSet(u, 200),
							this.g.startMonitoring(
								r.target,
								r.pointerId,
								r.buttons,
								(a) => {},
								() => {
									this.b.cancel(), this.c.cancel();
								},
							),
							r.preventDefault();
					}
				}
				e.$Whb = d;
			},
		),
		define(
			de[1577],
			he([1, 0, 7, 194, 757, 1166, 2676, 235, 12]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Zhb = void 0),
					(t = mt(t)),
					(m = mt(m));
				const r = 140;
				class u extends d.$Uhb {
					constructor(h) {
						super(),
							(this.g = h.lazyRender),
							(this.a = h.host),
							(this.b = h.scrollable),
							(this.c = h.scrollByPage),
							(this.h = h.scrollbarState),
							(this.n = this.D(
								new C.$Yhb(
									h.visibility,
									"visible scrollbar " + h.extraScrollbarClassName,
									"invisible scrollbar " + h.extraScrollbarClassName,
								),
							)),
							this.n.setIsNeeded(this.h.isNeeded()),
							(this.r = this.D(new w.$Thb())),
							(this.s = !0),
							(this.domNode = (0, i.$Shb)(document.createElement("div"))),
							this.domNode.setAttribute("role", "presentation"),
							this.domNode.setAttribute("aria-hidden", "true"),
							this.n.setDomNode(this.domNode),
							this.domNode.setPosition("absolute"),
							this.D(
								t.$0fb(this.domNode.domNode, t.$$gb.POINTER_DOWN, (c) =>
									this.M(c),
								),
							);
					}
					t(h) {
						const c = this.D(new E.$Whb(h));
						this.domNode.domNode.appendChild(c.bgDomNode),
							this.domNode.domNode.appendChild(c.domNode);
					}
					w(h, c, n, g) {
						(this.slider = (0, i.$Shb)(document.createElement("div"))),
							this.slider.setClassName("slider"),
							this.slider.setPosition("absolute"),
							this.slider.setTop(h),
							this.slider.setLeft(c),
							typeof n == "number" && this.slider.setWidth(n),
							typeof g == "number" && this.slider.setHeight(g),
							this.slider.setLayerHinting(!0),
							this.slider.setContain("strict"),
							this.domNode.domNode.appendChild(this.slider.domNode),
							this.D(
								t.$0fb(this.slider.domNode, t.$$gb.POINTER_DOWN, (p) => {
									p.button === 0 && (p.preventDefault(), this.O(p));
								}),
							),
							this.f(this.slider.domNode, (p) => {
								p.leftButton && p.stopPropagation();
							});
					}
					y(h) {
						return (
							this.h.setVisibleSize(h) &&
								(this.n.setIsNeeded(this.h.isNeeded()),
								(this.s = !0),
								this.g || this.render()),
							this.s
						);
					}
					J(h) {
						return (
							this.h.setScrollSize(h) &&
								(this.n.setIsNeeded(this.h.isNeeded()),
								(this.s = !0),
								this.g || this.render()),
							this.s
						);
					}
					L(h) {
						return (
							this.h.setScrollPosition(h) &&
								(this.n.setIsNeeded(this.h.isNeeded()),
								(this.s = !0),
								this.g || this.render()),
							this.s
						);
					}
					beginReveal() {
						this.n.setShouldBeVisible(!0);
					}
					beginHide() {
						this.n.setShouldBeVisible(!1);
					}
					render() {
						this.s &&
							((this.s = !1),
							this.Q(
								this.h.getRectangleLargeSize(),
								this.h.getRectangleSmallSize(),
							),
							this.R(
								this.h.getSliderSize(),
								this.h.getArrowSize() + this.h.getSliderPosition(),
							));
					}
					M(h) {
						h.target === this.domNode.domNode && this.N(h);
					}
					delegatePointerDown(h) {
						const c = this.domNode.domNode.getClientRects()[0].top,
							n = c + this.h.getSliderPosition(),
							g = c + this.h.getSliderPosition() + this.h.getSliderSize(),
							p = this.U(h);
						n <= p && p <= g
							? h.button === 0 && (h.preventDefault(), this.O(h))
							: this.N(h);
					}
					N(h) {
						let c, n;
						if (
							h.target === this.domNode.domNode &&
							typeof h.offsetX == "number" &&
							typeof h.offsetY == "number"
						)
							(c = h.offsetX), (n = h.offsetY);
						else {
							const p = t.$tgb(this.domNode.domNode);
							(c = h.pageX - p.left), (n = h.pageY - p.top);
						}
						const g = this.S(c, n);
						this.P(
							this.c
								? this.h.getDesiredScrollPositionFromOffsetPaged(g)
								: this.h.getDesiredScrollPositionFromOffset(g),
						),
							h.button === 0 && (h.preventDefault(), this.O(h));
					}
					O(h) {
						if (!h.target || !(h.target instanceof Element)) return;
						const c = this.U(h),
							n = this.W(h),
							g = this.h.clone();
						this.slider.toggleClassName("active", !0),
							this.r.startMonitoring(
								h.target,
								h.pointerId,
								h.buttons,
								(p) => {
									const o = this.W(p),
										f = Math.abs(o - n);
									if (m.$l && f > r) {
										this.P(g.getScrollPosition());
										return;
									}
									const s = this.U(p) - c;
									this.P(g.getDesiredScrollPositionFromDelta(s));
								},
								() => {
									this.slider.toggleClassName("active", !1), this.a.onDragEnd();
								},
							),
							this.a.onDragStart();
					}
					P(h) {
						const c = {};
						this.writeScrollPosition(c, h), this.b.setScrollPositionNow(c);
					}
					updateScrollbarSize(h) {
						this.X(h),
							this.h.setScrollbarSize(h),
							(this.s = !0),
							this.g || this.render();
					}
					isNeeded() {
						return this.h.isNeeded();
					}
				}
				e.$Zhb = u;
			},
		),
		define(
			de[2679],
			he([1, 0, 168, 1577, 1166, 1128, 14, 195]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1hb = void 0);
				class m extends i.$Zhb {
					constructor(u, a, h) {
						const c = u.getScrollDimensions(),
							n = u.getCurrentScrollPosition();
						if (
							(super({
								lazyRender: a.lazyRender,
								host: h,
								scrollbarState: new E.$Xhb(
									a.horizontalHasArrows ? a.arrowSize : 0,
									a.horizontal === d.ScrollbarVisibility.Hidden
										? 0
										: a.horizontalScrollbarSize,
									a.vertical === d.ScrollbarVisibility.Hidden
										? 0
										: a.verticalScrollbarSize,
									c.width,
									c.scrollWidth,
									n.scrollLeft,
								),
								visibility: a.horizontal,
								extraScrollbarClassName: "horizontal",
								scrollable: u,
								scrollByPage: a.scrollByPage,
							}),
							a.horizontalHasArrows)
						) {
							const g = (a.arrowSize - w.$Vhb) / 2,
								p = (a.horizontalScrollbarSize - w.$Vhb) / 2;
							this.t({
								className: "scra",
								icon: C.$ak.scrollbarButtonLeft,
								top: p,
								left: g,
								bottom: void 0,
								right: void 0,
								bgWidth: a.arrowSize,
								bgHeight: a.horizontalScrollbarSize,
								onActivate: () => this.a.onMouseWheel(new t.$4fb(null, 1, 0)),
							}),
								this.t({
									className: "scra",
									icon: C.$ak.scrollbarButtonRight,
									top: p,
									left: void 0,
									bottom: void 0,
									right: g,
									bgWidth: a.arrowSize,
									bgHeight: a.horizontalScrollbarSize,
									onActivate: () =>
										this.a.onMouseWheel(new t.$4fb(null, -1, 0)),
								});
						}
						this.w(
							Math.floor(
								(a.horizontalScrollbarSize - a.horizontalSliderSize) / 2,
							),
							0,
							void 0,
							a.horizontalSliderSize,
						);
					}
					R(u, a) {
						this.slider.setWidth(u), this.slider.setLeft(a);
					}
					Q(u, a) {
						this.domNode.setWidth(u),
							this.domNode.setHeight(a),
							this.domNode.setLeft(0),
							this.domNode.setBottom(0);
					}
					onDidScroll(u) {
						return (
							(this.s = this.J(u.scrollWidth) || this.s),
							(this.s = this.L(u.scrollLeft) || this.s),
							(this.s = this.y(u.width) || this.s),
							this.s
						);
					}
					S(u, a) {
						return u;
					}
					U(u) {
						return u.pageX;
					}
					W(u) {
						return u.pageY;
					}
					X(u) {
						this.slider.setHeight(u);
					}
					writeScrollPosition(u, a) {
						u.scrollLeft = a;
					}
					updateOptions(u) {
						this.updateScrollbarSize(
							u.horizontal === d.ScrollbarVisibility.Hidden
								? 0
								: u.horizontalScrollbarSize,
						),
							this.h.setOppositeScrollbarSize(
								u.vertical === d.ScrollbarVisibility.Hidden
									? 0
									: u.verticalScrollbarSize,
							),
							this.n.setVisibility(u.horizontal),
							(this.c = u.scrollByPage);
					}
				}
				e.$1hb = m;
			},
		),
		define(
			de[2680],
			he([1, 0, 168, 1577, 1166, 1128, 14, 195]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2hb = void 0);
				class m extends i.$Zhb {
					constructor(u, a, h) {
						const c = u.getScrollDimensions(),
							n = u.getCurrentScrollPosition();
						if (
							(super({
								lazyRender: a.lazyRender,
								host: h,
								scrollbarState: new E.$Xhb(
									a.verticalHasArrows ? a.arrowSize : 0,
									a.vertical === d.ScrollbarVisibility.Hidden
										? 0
										: a.verticalScrollbarSize,
									0,
									c.height,
									c.scrollHeight,
									n.scrollTop,
								),
								visibility: a.vertical,
								extraScrollbarClassName: "vertical",
								scrollable: u,
								scrollByPage: a.scrollByPage,
							}),
							a.verticalHasArrows)
						) {
							const g = (a.arrowSize - w.$Vhb) / 2,
								p = (a.verticalScrollbarSize - w.$Vhb) / 2;
							this.t({
								className: "scra",
								icon: C.$ak.scrollbarButtonUp,
								top: g,
								left: p,
								bottom: void 0,
								right: void 0,
								bgWidth: a.verticalScrollbarSize,
								bgHeight: a.arrowSize,
								onActivate: () => this.a.onMouseWheel(new t.$4fb(null, 0, 1)),
							}),
								this.t({
									className: "scra",
									icon: C.$ak.scrollbarButtonDown,
									top: void 0,
									left: p,
									bottom: g,
									right: void 0,
									bgWidth: a.verticalScrollbarSize,
									bgHeight: a.arrowSize,
									onActivate: () =>
										this.a.onMouseWheel(new t.$4fb(null, 0, -1)),
								});
						}
						this.w(
							0,
							Math.floor((a.verticalScrollbarSize - a.verticalSliderSize) / 2),
							a.verticalSliderSize,
							void 0,
						);
					}
					R(u, a) {
						this.slider.setHeight(u), this.slider.setTop(a);
					}
					Q(u, a) {
						this.domNode.setWidth(a),
							this.domNode.setHeight(u),
							this.domNode.setRight(0),
							this.domNode.setTop(0);
					}
					onDidScroll(u) {
						return (
							(this.s = this.J(u.scrollHeight) || this.s),
							(this.s = this.L(u.scrollTop) || this.s),
							(this.s = this.y(u.height) || this.s),
							this.s
						);
					}
					S(u, a) {
						return a;
					}
					U(u) {
						return u.pageY;
					}
					W(u) {
						return u.pageX;
					}
					X(u) {
						this.slider.setWidth(u);
					}
					writeScrollPosition(u, a) {
						u.scrollTop = a;
					}
					updateOptions(u) {
						this.updateScrollbarSize(
							u.vertical === d.ScrollbarVisibility.Hidden
								? 0
								: u.verticalScrollbarSize,
						),
							this.h.setOppositeScrollbarSize(0),
							this.n.setVisibility(u.vertical),
							(this.c = u.scrollByPage);
					}
				}
				e.$2hb = m;
			},
		),
		define(
			de[203],
			he([1, 0, 139, 7, 194, 168, 2679, 2680, 235, 15, 6, 3, 12, 195, 2251]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$8hb = e.$7hb = e.$6hb = e.$5hb = e.$4hb = e.$3hb = void 0),
					(i = mt(i)),
					(h = mt(h));
				const n = 500,
					g = 50,
					p = !0;
				class o {
					constructor(I, T, P) {
						(this.timestamp = I),
							(this.deltaX = T),
							(this.deltaY = P),
							(this.score = 0);
					}
				}
				class f {
					static {
						this.INSTANCE = new f();
					}
					constructor() {
						(this.a = 5), (this.b = []), (this.c = -1), (this.d = -1);
					}
					isPhysicalMouseWheel() {
						if (this.c === -1 && this.d === -1) return !1;
						let I = 1,
							T = 0,
							P = 1,
							k = this.d;
						do {
							const L = k === this.c ? I : Math.pow(2, -P);
							if (((I -= L), (T += this.b[k].score * L), k === this.c)) break;
							(k = (this.a + k - 1) % this.a), P++;
						} while (!0);
						return T <= 0.5;
					}
					acceptStandardWheelEvent(I) {
						if (t.$Qfb) {
							const T = i.getWindow(I.browserEvent),
								P = (0, t.$Jfb)(T);
							this.accept(Date.now(), I.deltaX * P, I.deltaY * P);
						} else this.accept(Date.now(), I.deltaX, I.deltaY);
					}
					accept(I, T, P) {
						let k = null;
						const L = new o(I, T, P);
						this.c === -1 && this.d === -1
							? ((this.b[0] = L), (this.c = 0), (this.d = 0))
							: ((k = this.b[this.d]),
								(this.d = (this.d + 1) % this.a),
								this.d === this.c && (this.c = (this.c + 1) % this.a),
								(this.b[this.d] = L)),
							(L.score = this.f(L, k));
					}
					f(I, T) {
						if (Math.abs(I.deltaX) > 0 && Math.abs(I.deltaY) > 0) return 1;
						let P = 0.5;
						if (((!this.g(I.deltaX) || !this.g(I.deltaY)) && (P += 0.25), T)) {
							const k = Math.abs(I.deltaX),
								L = Math.abs(I.deltaY),
								D = Math.abs(T.deltaX),
								M = Math.abs(T.deltaY),
								N = Math.max(Math.min(k, D), 1),
								A = Math.max(Math.min(L, M), 1),
								R = Math.max(k, D),
								O = Math.max(L, M);
							R % N === 0 && O % A === 0 && (P -= 0.5);
						}
						return Math.min(Math.max(P, 0), 1);
					}
					g(I) {
						return Math.abs(Math.round(I) - I) < 0.01;
					}
				}
				e.$3hb = f;
				class b extends m.$Uhb {
					get options() {
						return this.a;
					}
					constructor(I, T, P) {
						super(),
							(this.O = this.D(new u.$re())),
							(this.onScroll = this.O.event),
							(this.P = this.D(new u.$re())),
							(this.onWillScroll = this.P.event),
							(I.style.overflow = "hidden"),
							(this.a = v(T)),
							(this.b = P),
							this.D(
								this.b.onScroll((D) => {
									this.P.fire(D), this.S(D), this.O.fire(D);
								}),
							);
						const k = {
							onMouseWheel: (D) => this.R(D),
							onDragStart: () => this.W(),
							onDragEnd: () => this.X(),
						};
						(this.c = this.D(new d.$2hb(this.b, this.a, k))),
							(this.g = this.D(new C.$1hb(this.b, this.a, k))),
							(this.h = document.createElement("div")),
							(this.h.className =
								"monaco-scrollable-element " + this.a.className),
							this.h.setAttribute("role", "presentation"),
							(this.h.style.position = "relative");
						const L =
							T.horizontal && T.vertical
								? "both"
								: T.horizontal
									? "horizontal"
									: "vertical";
						L === "both"
							? (this.h.style.overflow = "hidden")
							: L === "horizontal"
								? (this.h.style.overflowX = "hidden")
								: (this.h.style.overflowY = "hidden"),
							this.h.appendChild(I),
							this.h.appendChild(this.g.domNode.domNode),
							this.h.appendChild(this.c.domNode.domNode),
							this.a.useShadows
								? ((this.n = (0, w.$Shb)(document.createElement("div"))),
									this.n.setClassName("shadow"),
									this.h.appendChild(this.n.domNode),
									(this.r = (0, w.$Shb)(document.createElement("div"))),
									this.r.setClassName("shadow"),
									this.h.appendChild(this.r.domNode),
									(this.s = (0, w.$Shb)(document.createElement("div"))),
									this.s.setClassName("shadow"),
									this.h.appendChild(this.s.domNode))
								: ((this.n = null), (this.r = null), (this.s = null)),
							(this.t = this.a.listenOnDomNode || this.h),
							(this.w = []),
							this.Q(this.a.handleMouseWheel),
							this.m(this.t, (D) => this.Z(D)),
							this.q(this.t, (D) => this.Y(D)),
							(this.L = this.D(new r.$Wh())),
							(this.y = !1),
							(this.J = !1),
							(this.M = !0),
							(this.N = !0);
					}
					dispose() {
						(this.w = (0, a.$Vc)(this.w)), super.dispose();
					}
					getDomNode() {
						return this.h;
					}
					getOverviewRulerLayoutInfo() {
						return { parent: this.h, insertBefore: this.c.domNode.domNode };
					}
					delegateVerticalScrollbarPointerDown(I) {
						this.c.delegatePointerDown(I);
					}
					getScrollDimensions() {
						return this.b.getScrollDimensions();
					}
					setScrollDimensions(I) {
						this.b.setScrollDimensions(I, !1);
					}
					updateClassName(I) {
						(this.a.className = I),
							h.$m && (this.a.className += " mac"),
							(this.h.className =
								"monaco-scrollable-element " + this.a.className);
					}
					updateOptions(I) {
						typeof I.handleMouseWheel < "u" &&
							((this.a.handleMouseWheel = I.handleMouseWheel),
							this.Q(this.a.handleMouseWheel)),
							typeof I.ignoreVerticalScrolling < "u" &&
								(this.a.ignoreVerticalScrolling = I.ignoreVerticalScrolling),
							typeof I.mouseWheelScrollSensitivity < "u" &&
								(this.a.mouseWheelScrollSensitivity =
									I.mouseWheelScrollSensitivity),
							typeof I.fastScrollSensitivity < "u" &&
								(this.a.fastScrollSensitivity = I.fastScrollSensitivity),
							typeof I.scrollPredominantAxis < "u" &&
								(this.a.scrollPredominantAxis = I.scrollPredominantAxis),
							typeof I.horizontal < "u" && (this.a.horizontal = I.horizontal),
							typeof I.vertical < "u" && (this.a.vertical = I.vertical),
							typeof I.horizontalScrollbarSize < "u" &&
								(this.a.horizontalScrollbarSize = I.horizontalScrollbarSize),
							typeof I.verticalScrollbarSize < "u" &&
								(this.a.verticalScrollbarSize = I.verticalScrollbarSize),
							typeof I.scrollByPage < "u" &&
								(this.a.scrollByPage = I.scrollByPage),
							this.g.updateOptions(this.a),
							this.c.updateOptions(this.a),
							this.a.lazyRender || this.U();
					}
					setRevealOnScroll(I) {
						this.N = I;
					}
					delegateScrollFromMouseWheelEvent(I) {
						this.R(new E.$4fb(I));
					}
					Q(I) {
						if (this.w.length > 0 !== I && ((this.w = (0, a.$Vc)(this.w)), I)) {
							const P = (k) => {
								this.R(new E.$4fb(k));
							};
							this.w.push(
								i.$0fb(this.t, i.$$gb.MOUSE_WHEEL, P, { passive: !1 }),
							);
						}
					}
					R(I) {
						if (I.browserEvent?.defaultPrevented) return;
						const T = f.INSTANCE;
						p && T.acceptStandardWheelEvent(I);
						let P = !1;
						if (I.deltaY || I.deltaX) {
							let L = I.deltaY * this.a.mouseWheelScrollSensitivity,
								D = I.deltaX * this.a.mouseWheelScrollSensitivity;
							this.a.scrollPredominantAxis &&
								(this.a.scrollYToX && D + L === 0
									? (D = L = 0)
									: Math.abs(L) >= Math.abs(D)
										? (D = 0)
										: (L = 0)),
								this.a.ignoreVerticalScrolling === !0 && (L = 0),
								this.a.flipAxes && ([L, D] = [D, L]);
							const M = !h.$m && I.browserEvent && I.browserEvent.shiftKey;
							(this.a.scrollYToX || M) && !D && ((D = L), (L = 0)),
								I.browserEvent &&
									I.browserEvent.altKey &&
									((D = D * this.a.fastScrollSensitivity),
									(L = L * this.a.fastScrollSensitivity));
							const N = this.b.getFutureScrollPosition();
							let A = {};
							if (L) {
								const R = g * L,
									O = N.scrollTop - (R < 0 ? Math.floor(R) : Math.ceil(R));
								this.c.writeScrollPosition(A, O);
							}
							if (D) {
								const R = g * D,
									O = N.scrollLeft - (R < 0 ? Math.floor(R) : Math.ceil(R));
								this.g.writeScrollPosition(A, O);
							}
							(A = this.b.validateScrollPosition(A)),
								(N.scrollLeft !== A.scrollLeft ||
									N.scrollTop !== A.scrollTop) &&
									(p &&
									this.a.mouseWheelSmoothScroll &&
									T.isPhysicalMouseWheel()
										? this.b.setScrollPositionSmooth(A)
										: this.b.setScrollPositionNow(A),
									(P = !0));
						}
						let k = P;
						!k && this.a.alwaysConsumeMouseWheel && (k = !0),
							!k &&
								this.a.consumeMouseWheelIfScrollbarIsNeeded &&
								(this.c.isNeeded() || this.g.isNeeded()) &&
								(k = !0),
							k && (I.preventDefault(), I.stopPropagation());
					}
					S(I) {
						(this.M = this.g.onDidScroll(I) || this.M),
							(this.M = this.c.onDidScroll(I) || this.M),
							this.a.useShadows && (this.M = !0),
							this.N && this.$(),
							this.a.lazyRender || this.U();
					}
					renderNow() {
						if (!this.a.lazyRender)
							throw new Error(
								"Please use `lazyRender` together with `renderNow`!",
							);
						this.U();
					}
					U() {
						if (
							this.M &&
							((this.M = !1),
							this.g.render(),
							this.c.render(),
							this.a.useShadows)
						) {
							const I = this.b.getCurrentScrollPosition(),
								T = I.scrollTop > 0,
								P = I.scrollLeft > 0,
								k = P ? " left" : "",
								L = T ? " top" : "",
								D = P || T ? " top-left-corner" : "";
							this.n.setClassName(`shadow${k}`),
								this.r.setClassName(`shadow${L}`),
								this.s.setClassName(`shadow${D}${L}${k}`);
						}
					}
					W() {
						(this.y = !0), this.$();
					}
					X() {
						(this.y = !1), this.ab();
					}
					Y(I) {
						(this.J = !1), this.ab();
					}
					Z(I) {
						(this.J = !0), this.$();
					}
					$() {
						this.c.beginReveal(), this.g.beginReveal(), this.bb();
					}
					ab() {
						!this.J && !this.y && (this.c.beginHide(), this.g.beginHide());
					}
					bb() {
						!this.J && !this.y && this.L.cancelAndSet(() => this.ab(), n);
					}
				}
				e.$4hb = b;
				class s extends b {
					constructor(I, T) {
						(T = T || {}), (T.mouseWheelSmoothScroll = !1);
						const P = new c.$KK({
							forceIntegerValues: !0,
							smoothScrollDuration: 0,
							scheduleAtNextAnimationFrame: (k) => i.$hgb(i.getWindow(I), k),
						});
						super(I, T, P), this.D(P);
					}
					setScrollPosition(I) {
						this.b.setScrollPositionNow(I);
					}
					getScrollPosition() {
						return this.b.getCurrentScrollPosition();
					}
				}
				e.$5hb = s;
				class l extends b {
					constructor(I, T, P) {
						super(I, T, P);
					}
					setScrollPosition(I) {
						I.reuseAnimation
							? this.b.setScrollPositionSmooth(I, I.reuseAnimation)
							: this.b.setScrollPositionNow(I);
					}
					getScrollPosition() {
						return this.b.getCurrentScrollPosition();
					}
				}
				e.$6hb = l;
				class y extends b {
					constructor(I, T, P) {
						super(I, T, P);
					}
				}
				e.$7hb = y;
				class $ extends b {
					constructor(I, T) {
						(T = T || {}), (T.mouseWheelSmoothScroll = !1);
						const P = new c.$KK({
							forceIntegerValues: !1,
							smoothScrollDuration: 0,
							scheduleAtNextAnimationFrame: (k) => i.$hgb(i.getWindow(I), k),
						});
						super(I, T, P),
							this.D(P),
							(this.cb = I),
							this.D(
								this.onScroll((k) => {
									k.scrollTopChanged && (this.cb.scrollTop = k.scrollTop),
										k.scrollLeftChanged && (this.cb.scrollLeft = k.scrollLeft);
								}),
							),
							this.scanDomNode();
					}
					setScrollPosition(I) {
						this.b.setScrollPositionNow(I);
					}
					getScrollPosition() {
						return this.b.getCurrentScrollPosition();
					}
					scanDomNode() {
						this.setScrollDimensions({
							width: this.cb.clientWidth,
							scrollWidth: this.cb.scrollWidth,
							height: this.cb.clientHeight,
							scrollHeight: this.cb.scrollHeight,
						}),
							this.setScrollPosition({
								scrollLeft: this.cb.scrollLeft,
								scrollTop: this.cb.scrollTop,
							});
					}
				}
				e.$8hb = $;
				function v(S) {
					const I = {
						lazyRender: typeof S.lazyRender < "u" ? S.lazyRender : !1,
						className: typeof S.className < "u" ? S.className : "",
						useShadows: typeof S.useShadows < "u" ? S.useShadows : !0,
						handleMouseWheel:
							typeof S.handleMouseWheel < "u" ? S.handleMouseWheel : !0,
						ignoreVerticalScrolling:
							typeof S.ignoreVerticalScrolling < "u"
								? S.ignoreVerticalScrolling
								: !1,
						flipAxes: typeof S.flipAxes < "u" ? S.flipAxes : !1,
						consumeMouseWheelIfScrollbarIsNeeded:
							typeof S.consumeMouseWheelIfScrollbarIsNeeded < "u"
								? S.consumeMouseWheelIfScrollbarIsNeeded
								: !1,
						alwaysConsumeMouseWheel:
							typeof S.alwaysConsumeMouseWheel < "u"
								? S.alwaysConsumeMouseWheel
								: !1,
						scrollYToX: typeof S.scrollYToX < "u" ? S.scrollYToX : !1,
						mouseWheelScrollSensitivity:
							typeof S.mouseWheelScrollSensitivity < "u"
								? S.mouseWheelScrollSensitivity
								: 1,
						fastScrollSensitivity:
							typeof S.fastScrollSensitivity < "u"
								? S.fastScrollSensitivity
								: 5,
						scrollPredominantAxis:
							typeof S.scrollPredominantAxis < "u"
								? S.scrollPredominantAxis
								: !0,
						mouseWheelSmoothScroll:
							typeof S.mouseWheelSmoothScroll < "u"
								? S.mouseWheelSmoothScroll
								: !0,
						arrowSize: typeof S.arrowSize < "u" ? S.arrowSize : 11,
						listenOnDomNode:
							typeof S.listenOnDomNode < "u" ? S.listenOnDomNode : null,
						horizontal:
							typeof S.horizontal < "u"
								? S.horizontal
								: c.ScrollbarVisibility.Auto,
						horizontalScrollbarSize:
							typeof S.horizontalScrollbarSize < "u"
								? S.horizontalScrollbarSize
								: 10,
						horizontalSliderSize:
							typeof S.horizontalSliderSize < "u" ? S.horizontalSliderSize : 0,
						horizontalHasArrows:
							typeof S.horizontalHasArrows < "u" ? S.horizontalHasArrows : !1,
						vertical:
							typeof S.vertical < "u" ? S.vertical : c.ScrollbarVisibility.Auto,
						verticalScrollbarSize:
							typeof S.verticalScrollbarSize < "u"
								? S.verticalScrollbarSize
								: 10,
						verticalHasArrows:
							typeof S.verticalHasArrows < "u" ? S.verticalHasArrows : !1,
						verticalSliderSize:
							typeof S.verticalSliderSize < "u" ? S.verticalSliderSize : 0,
						scrollByPage: typeof S.scrollByPage < "u" ? S.scrollByPage : !1,
					};
					return (
						(I.horizontalSliderSize =
							typeof S.horizontalSliderSize < "u"
								? S.horizontalSliderSize
								: I.horizontalScrollbarSize),
						(I.verticalSliderSize =
							typeof S.verticalSliderSize < "u"
								? S.verticalSliderSize
								: I.verticalScrollbarSize),
						h.$m && (I.className += " mac"),
						I
					);
				}
			},
		),
		define(
			de[2681],
			he([1, 0, 7, 203, 24, 26, 6, 3, 195, 2232]),
			function (ce, e, t, i, w, E, C, d, m) {
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
		define(
			de[160],
			he([1, 0, 7, 114, 203, 27, 3, 4, 2239]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$aib = e.$_hb = e.$0hb = e.$9hb = e.HoverPosition = void 0),
					(e.$$hb = h),
					(t = mt(t));
				const m = t.$;
				var r;
				(function (g) {
					(g[(g.LEFT = 0)] = "LEFT"),
						(g[(g.RIGHT = 1)] = "RIGHT"),
						(g[(g.BELOW = 2)] = "BELOW"),
						(g[(g.ABOVE = 3)] = "ABOVE");
				})(r || (e.HoverPosition = r = {}));
				class u extends C.$1c {
					constructor() {
						super(),
							(this.containerDomNode = document.createElement("div")),
							(this.containerDomNode.className = "monaco-hover"),
							(this.containerDomNode.tabIndex = 0),
							this.containerDomNode.setAttribute("role", "tooltip"),
							(this.contentsDomNode = document.createElement("div")),
							(this.contentsDomNode.className = "monaco-hover-content"),
							(this.scrollbar = this.D(
								new w.$8hb(this.contentsDomNode, {
									consumeMouseWheelIfScrollbarIsNeeded: !0,
								}),
							)),
							this.containerDomNode.appendChild(this.scrollbar.getDomNode());
					}
					onContentsChanged() {
						this.scrollbar.scanDomNode();
					}
				}
				e.$9hb = u;
				class a extends C.$1c {
					static render(p, o, f) {
						return new a(p, o, f);
					}
					constructor(p, o, f) {
						super(),
							(this.actionLabel = o.label),
							(this.actionKeybindingLabel = f),
							(this.a = t.$fhb(p, m("div.action-container"))),
							this.a.setAttribute("tabindex", "0"),
							(this.b = t.$fhb(this.a, m("a.action"))),
							this.b.setAttribute("role", "button"),
							o.iconClass && t.$fhb(this.b, m(`span.icon.${o.iconClass}`));
						const b = t.$fhb(this.b, m("span"));
						(b.textContent = f ? `${o.label} (${f})` : o.label),
							this.B.add(new c(this.a, o.run)),
							this.B.add(
								new n(this.a, o.run, [E.KeyCode.Enter, E.KeyCode.Space]),
							),
							this.setEnabled(!0);
					}
					setEnabled(p) {
						p
							? (this.a.classList.remove("disabled"),
								this.a.removeAttribute("aria-disabled"))
							: (this.a.classList.add("disabled"),
								this.a.setAttribute("aria-disabled", "true"));
					}
				}
				e.$0hb = a;
				function h(g, p) {
					return g && p
						? (0, d.localize)(15, null, p)
						: g
							? (0, d.localize)(16, null)
							: "";
				}
				class c extends C.$1c {
					constructor(p, o) {
						super(),
							this.D(
								t.$0fb(p, t.$$gb.CLICK, (f) => {
									f.stopPropagation(), f.preventDefault(), o(p);
								}),
							);
					}
				}
				e.$_hb = c;
				class n extends C.$1c {
					constructor(p, o, f) {
						super(),
							this.D(
								t.$0fb(p, t.$$gb.KEY_DOWN, (b) => {
									const s = new i.$7fb(b);
									f.some((l) => s.equals(l)) &&
										(b.stopPropagation(), b.preventDefault(), o(p));
								}),
							);
					}
				}
				e.$aib = n;
			},
		),
		define(
			de[539],
			he([
				1, 0, 323, 7, 265, 159, 203, 24, 15, 138, 6, 3, 902, 195, 431, 2222,
				2675, 29, 201,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zib = e.$yib = e.$xib = e.$wib = e.ListViewTargetSector = void 0);
				const b = { CurrentDragAndDropData: void 0 };
				var s;
				(function (P) {
					(P[(P.TOP = 0)] = "TOP"),
						(P[(P.CENTER_TOP = 1)] = "CENTER_TOP"),
						(P[(P.CENTER_BOTTOM = 2)] = "CENTER_BOTTOM"),
						(P[(P.BOTTOM = 3)] = "BOTTOM");
				})(s || (e.ListViewTargetSector = s = {}));
				const l = {
					useShadows: !0,
					verticalScrollMode: c.ScrollbarVisibility.Auto,
					setRowLineHeight: !0,
					setRowHeight: !0,
					supportDynamicHeights: !1,
					dnd: {
						getDragElements(P) {
							return [P];
						},
						getDragURI() {
							return null;
						},
						onDragStart() {},
						onDragOver() {
							return !1;
						},
						drop() {},
						dispose() {},
					},
					horizontalScrolling: !1,
					transformOptimization: !0,
					alwaysConsumeMouseWheel: !0,
				};
				class y {
					get context() {
						return this.d;
					}
					set context(k) {
						this.d = k;
					}
					constructor(k) {
						this.elements = k;
					}
					update() {}
					getData() {
						return this.elements;
					}
				}
				e.$wib = y;
				class $ {
					constructor(k) {
						this.elements = k;
					}
					update() {}
					getData() {
						return this.elements;
					}
				}
				e.$xib = $;
				class v {
					constructor() {
						(this.types = []), (this.files = []);
					}
					update(k) {
						if (
							(k.types && this.types.splice(0, this.types.length, ...k.types),
							k.files)
						) {
							this.files.splice(0, this.files.length);
							for (let L = 0; L < k.files.length; L++) {
								const D = k.files.item(L);
								D && (D.size || D.type) && this.files.push(D);
							}
						}
					}
					getData() {
						return { types: this.types, files: this.files };
					}
				}
				e.$yib = v;
				function S(P, k) {
					return Array.isArray(P) && Array.isArray(k)
						? (0, d.$yb)(P, k)
						: P === k;
				}
				class I {
					constructor(k) {
						k?.getSetSize
							? (this.getSetSize = k.getSetSize.bind(k))
							: (this.getSetSize = (L, D, M) => M),
							k?.getPosInSet
								? (this.getPosInSet = k.getPosInSet.bind(k))
								: (this.getPosInSet = (L, D) => D + 1),
							k?.getRole
								? (this.getRole = k.getRole.bind(k))
								: (this.getRole = (L) => "listitem"),
							k?.isChecked
								? (this.isChecked = k.isChecked.bind(k))
								: (this.isChecked = (L) => {});
					}
				}
				class T {
					static {
						this.c = 0;
					}
					get contentHeight() {
						return this.g.size;
					}
					get contentWidth() {
						return this.E ?? 0;
					}
					get onDidScroll() {
						return this.q.onScroll;
					}
					get onWillScroll() {
						return this.q.onWillScroll;
					}
					get containerDomNode() {
						return this.o;
					}
					get scrollableElementDomNode() {
						return this.q.getDomNode();
					}
					get Q() {
						return this.P;
					}
					set Q(k) {
						if (k !== this.P) {
							if (k && this.B)
								throw new Error(
									"Horizontal scrolling and dynamic heights not supported simultaneously",
								);
							if (
								((this.P = k),
								this.domNode.classList.toggle("horizontal-scrolling", this.P),
								this.P)
							) {
								for (const L of this.d) this.ab(L);
								this.X(),
									this.q.setScrollDimensions({
										width: (0, i.$wgb)(this.domNode),
									}),
									(this.o.style.width = `${Math.max(this.E || 0, this.n)}px`);
							} else
								this.u.cancel(),
									this.q.setScrollDimensions({
										width: this.n,
										scrollWidth: this.n,
									}),
									(this.o.style.width = "");
						}
					}
					constructor(k, L, D, M = l) {
						if (
							((this.R = L),
							(this.domId = `list_id_${++T.c}`),
							(this.j = new Map()),
							(this.n = 0),
							(this.s = 0),
							(this.t = null),
							(this.u = new m.$Jh(50)),
							(this.v = !1),
							(this.x = a.$1c.None),
							(this.y = 0),
							(this.G = !1),
							(this.K = a.$1c.None),
							(this.L = a.$1c.None),
							(this.M = new a.$Zc()),
							(this.N = new u.$re()),
							(this.O = new u.$re()),
							(this.onDidChangeContentHeight = u.Event.latch(
								this.N.event,
								void 0,
								this.M,
							)),
							(this.onDidChangeContentWidth = u.Event.latch(
								this.O.event,
								void 0,
								this.M,
							)),
							(this.P = !1),
							M.horizontalScrolling && M.supportDynamicHeights)
						)
							throw new Error(
								"Horizontal scrolling and dynamic heights not supported simultaneously",
							);
						(this.d = []), (this.f = 0), (this.g = this.S(M.paddingTop ?? 0));
						for (const A of D) this.j.set(A.templateId, A);
						(this.h = this.M.add(new p.$vib(this.j))),
							(this.k = 0),
							(this.m = 0),
							(this.domNode = document.createElement("div")),
							(this.domNode.className = "monaco-list"),
							this.domNode.classList.add(this.domId),
							(this.domNode.tabIndex = 0),
							this.domNode.classList.toggle(
								"mouse-support",
								typeof M.mouseSupport == "boolean" ? M.mouseSupport : !0,
							),
							(this.P = M.horizontalScrolling ?? l.horizontalScrolling),
							this.domNode.classList.toggle("horizontal-scrolling", this.P),
							(this.C = typeof M.paddingBottom > "u" ? 0 : M.paddingBottom),
							(this.D = new I(M.accessibilityProvider)),
							(this.o = document.createElement("div")),
							(this.o.className = "monaco-list-rows"),
							(M.transformOptimization ?? l.transformOptimization) &&
								((this.o.style.transform = "translate3d(0px, 0px, 0px)"),
								(this.o.style.overflow = "hidden"),
								(this.o.style.contain = "strict")),
							this.M.add(E.$Qhb.addTarget(this.o)),
							(this.p = this.M.add(
								new c.$KK({
									forceIntegerValues: !0,
									smoothScrollDuration: (M.smoothScrolling ?? !1) ? 125 : 0,
									scheduleAtNextAnimationFrame: (A) =>
										(0, i.$hgb)((0, i.getWindow)(this.domNode), A),
								}),
							)),
							(this.q = this.M.add(
								new C.$6hb(
									this.o,
									{
										alwaysConsumeMouseWheel:
											M.alwaysConsumeMouseWheel ?? l.alwaysConsumeMouseWheel,
										horizontal: c.ScrollbarVisibility.Auto,
										vertical: M.verticalScrollMode ?? l.verticalScrollMode,
										useShadows: M.useShadows ?? l.useShadows,
										mouseWheelScrollSensitivity: M.mouseWheelScrollSensitivity,
										fastScrollSensitivity: M.fastScrollSensitivity,
										scrollByPage: M.scrollByPage,
									},
									this.p,
								),
							)),
							this.domNode.appendChild(this.q.getDomNode()),
							k.appendChild(this.domNode),
							this.q.onScroll(this.ib, this, this.M),
							this.M.add(
								(0, i.$0fb)(this.o, E.EventType.Change, (A) => this.jb(A)),
							),
							this.M.add(
								(0, i.$0fb)(
									this.q.getDomNode(),
									"scroll",
									(A) => (A.target.scrollTop = 0),
								),
							),
							this.M.add(
								(0, i.$0fb)(this.domNode, "dragover", (A) =>
									this.lb(this.hb(A)),
								),
							),
							this.M.add(
								(0, i.$0fb)(this.domNode, "drop", (A) => this.nb(this.hb(A))),
							),
							this.M.add(
								(0, i.$0fb)(this.domNode, "dragleave", (A) =>
									this.mb(this.hb(A)),
								),
							),
							this.M.add(
								(0, i.$0fb)(this.domNode, "dragend", (A) => this.ob(A)),
							),
							(this.z = M.setRowLineHeight ?? l.setRowLineHeight),
							(this.A = M.setRowHeight ?? l.setRowHeight),
							(this.B = M.supportDynamicHeights ?? l.supportDynamicHeights),
							(this.F = M.dnd ?? this.M.add(l.dnd)),
							this.layout(M.initialSize?.height, M.initialSize?.width);
					}
					updateOptions(k) {
						k.paddingBottom !== void 0 &&
							((this.C = k.paddingBottom),
							this.q.setScrollDimensions({ scrollHeight: this.scrollHeight })),
							k.smoothScrolling !== void 0 &&
								this.p.setSmoothScrollDuration(k.smoothScrolling ? 125 : 0),
							k.horizontalScrolling !== void 0 &&
								(this.Q = k.horizontalScrolling);
						let L;
						if (
							(k.scrollByPage !== void 0 &&
								(L = { ...(L ?? {}), scrollByPage: k.scrollByPage }),
							k.mouseWheelScrollSensitivity !== void 0 &&
								(L = {
									...(L ?? {}),
									mouseWheelScrollSensitivity: k.mouseWheelScrollSensitivity,
								}),
							k.fastScrollSensitivity !== void 0 &&
								(L = {
									...(L ?? {}),
									fastScrollSensitivity: k.fastScrollSensitivity,
								}),
							L && this.q.updateOptions(L),
							k.paddingTop !== void 0 && k.paddingTop !== this.g.paddingTop)
						) {
							const D = this.vb(this.k, this.m),
								M = k.paddingTop - this.g.paddingTop;
							(this.g.paddingTop = k.paddingTop),
								this.Y(D, Math.max(0, this.k + M), this.m, void 0, void 0, !0),
								this.setScrollTop(this.k),
								this.V(),
								this.B && this.wb(this.k, this.m);
						}
					}
					delegateScrollFromMouseWheelEvent(k) {
						this.q.delegateScrollFromMouseWheelEvent(k);
					}
					delegateVerticalScrollbarPointerDown(k) {
						this.q.delegateVerticalScrollbarPointerDown(k);
					}
					updateElementHeight(k, L, D) {
						if (k < 0 || k >= this.d.length) return;
						const M = this.d[k].size;
						if (typeof L > "u") {
							if (!this.B) {
								console.warn(
									"Dynamic heights not supported",
									new Error().stack,
								);
								return;
							}
							(this.d[k].lastDynamicHeightWidth = void 0), (L = M + this.xb(k));
						}
						if (M === L) return;
						const N = this.vb(this.k, this.m);
						let A = 0;
						k < N.start || (D !== null && D > k && D < N.end)
							? (A = L - M)
							: (A = 0),
							this.g.splice(k, 1, [{ size: L }]),
							(this.d[k].size = L),
							this.Y(N, Math.max(0, this.k + A), this.m, void 0, void 0, !0),
							this.setScrollTop(this.k),
							this.V(),
							this.B && this.wb(this.k, this.m);
					}
					S(k) {
						return new g.$uib(k);
					}
					splice(k, L, D = []) {
						if (this.v) throw new Error("Can't run recursive splices.");
						this.v = !0;
						try {
							return this.U(k, L, D);
						} finally {
							(this.v = !1), this.N.fire(this.contentHeight);
						}
					}
					U(k, L, D = []) {
						const M = this.vb(this.k, this.m),
							N = { start: k, end: k + L },
							A = h.Range.intersect(M, N),
							R = new Map();
						for (let X = A.end - 1; X >= A.start; X--) {
							const Y = this.d[X];
							if (
								(Y.dragStartDisposable.dispose(),
								Y.checkedDisposable.dispose(),
								Y.row)
							) {
								let ie = R.get(Y.templateId);
								ie || ((ie = []), R.set(Y.templateId, ie));
								const ne = this.j.get(Y.templateId);
								ne &&
									ne.disposeElement &&
									ne.disposeElement(Y.element, X, Y.row.templateData, Y.size),
									ie.unshift(Y.row);
							}
							(Y.row = null), (Y.stale = !0);
						}
						const O = { start: k + L, end: this.d.length },
							B = h.Range.intersect(O, M),
							U = h.Range.relativeComplement(O, M),
							z = D.map((X) => ({
								id: String(this.f++),
								element: X,
								templateId: this.R.getTemplateId(X),
								size: this.R.getHeight(X),
								width: void 0,
								hasDynamicHeight:
									!!this.R.hasDynamicHeight && this.R.hasDynamicHeight(X),
								lastDynamicHeightWidth: void 0,
								row: null,
								uri: void 0,
								dropTarget: !1,
								dragStartDisposable: a.$1c.None,
								checkedDisposable: a.$1c.None,
								stale: !1,
							}));
						let F;
						k === 0 && L >= this.d.length
							? ((this.g = this.S(this.g.paddingTop)),
								this.g.splice(0, 0, z),
								(F = this.d),
								(this.d = z))
							: (this.g.splice(k, L, z), (F = this.d.splice(k, L, ...z)));
						const x = D.length - L,
							H = this.vb(this.k, this.m),
							q = (0, g.$sib)(B, x),
							V = h.Range.intersect(H, q);
						for (let X = V.start; X < V.end; X++) this.bb(this.d[X], X);
						const G = h.Range.relativeComplement(q, H);
						for (const X of G) for (let Y = X.start; Y < X.end; Y++) this.db(Y);
						const K = U.map((X) => (0, g.$sib)(X, x)),
							W = [{ start: k, end: k + D.length }, ...K]
								.map((X) => h.Range.intersect(H, X))
								.reverse();
						for (const X of W)
							for (let Y = X.end - 1; Y >= X.start; Y--) {
								const ie = this.d[Y],
									ee = R.get(ie.templateId)?.pop();
								this.Z(Y, ee);
							}
						for (const X of R.values()) for (const Y of X) this.h.release(Y);
						return (
							this.V(),
							this.B && this.wb(this.scrollTop, this.renderHeight),
							F.map((X) => X.element)
						);
					}
					V() {
						(this.s = this.contentHeight),
							(this.o.style.height = `${this.s}px`),
							this.t ||
								(this.t = (0, i.$hgb)((0, i.getWindow)(this.domNode), () => {
									this.q.setScrollDimensions({
										scrollHeight: this.scrollHeight,
									}),
										this.X(),
										(this.t = null);
								}));
					}
					W() {
						if (!this.Q) {
							this.u.cancel();
							return;
						}
						this.u.trigger(() => this.X());
					}
					X() {
						if (!this.Q) return;
						let k = 0;
						for (const L of this.d)
							typeof L.width < "u" && (k = Math.max(k, L.width));
						(this.E = k),
							this.q.setScrollDimensions({ scrollWidth: k === 0 ? 0 : k + 10 }),
							this.O.fire(this.E);
					}
					updateWidth(k) {
						if (!this.Q || typeof this.E > "u") return;
						const L = this.d[k];
						this.ab(L),
							typeof L.width < "u" &&
								L.width > this.E &&
								((this.E = L.width),
								this.q.setScrollDimensions({ scrollWidth: this.E + 10 }),
								this.O.fire(this.E));
					}
					rerender() {
						if (this.B) {
							for (const k of this.d) k.lastDynamicHeightWidth = void 0;
							this.wb(this.k, this.m);
						}
					}
					get length() {
						return this.d.length;
					}
					get renderHeight() {
						return this.q.getScrollDimensions().height;
					}
					get firstVisibleIndex() {
						return this.vb(this.k, this.m).start;
					}
					get firstMostlyVisibleIndex() {
						const k = this.firstVisibleIndex,
							L = this.g.positionAt(k),
							D = this.g.positionAt(k + 1);
						return D !== -1 && (D - L) / 2 + L < this.scrollTop ? k + 1 : k;
					}
					get lastVisibleIndex() {
						return this.vb(this.k, this.m).end - 1;
					}
					element(k) {
						return this.d[k].element;
					}
					indexOf(k) {
						return this.d.findIndex((L) => L.element === k);
					}
					domElement(k) {
						const L = this.d[k].row;
						return L && L.domNode;
					}
					elementHeight(k) {
						return this.d[k].size;
					}
					elementTop(k) {
						return this.g.positionAt(k);
					}
					indexAt(k) {
						return this.g.indexAt(k);
					}
					indexAfter(k) {
						return this.g.indexAfter(k);
					}
					layout(k, L) {
						const D = {
							height: typeof k == "number" ? k : (0, i.$ygb)(this.domNode),
						};
						this.t &&
							(this.t.dispose(),
							(this.t = null),
							(D.scrollHeight = this.scrollHeight)),
							this.q.setScrollDimensions(D),
							typeof L < "u" &&
								((this.n = L),
								this.B && this.wb(this.scrollTop, this.renderHeight)),
							this.Q &&
								this.q.setScrollDimensions({
									width: typeof L == "number" ? L : (0, i.$wgb)(this.domNode),
								});
					}
					Y(k, L, D, M, N, A = !1) {
						const R = this.vb(L, D),
							O = h.Range.relativeComplement(R, k).reverse(),
							B = h.Range.relativeComplement(k, R);
						if (A) {
							const U = h.Range.intersect(k, R);
							for (let z = U.start; z < U.end; z++) this.bb(this.d[z], z);
						}
						this.h.transact(() => {
							for (const U of B)
								for (let z = U.start; z < U.end; z++) this.db(z);
							for (const U of O)
								for (let z = U.end - 1; z >= U.start; z--) this.Z(z);
						}),
							M !== void 0 && (this.o.style.left = `-${M}px`),
							(this.o.style.top = `-${L}px`),
							this.Q &&
								N !== void 0 &&
								(this.o.style.width = `${Math.max(N, this.n)}px`),
							(this.k = L),
							(this.m = D);
					}
					Z(k, L) {
						const D = this.d[k];
						if (!D.row)
							if (L) (D.row = L), (D.stale = !0);
							else {
								const O = this.h.alloc(D.templateId);
								(D.row = O.row), (D.stale ||= O.isReusingConnectedDomNode);
							}
						const M = this.D.getRole(D.element) || "listitem";
						D.row.domNode.setAttribute("role", M);
						const N = this.D.isChecked(D.element);
						if (typeof N == "boolean")
							D.row.domNode.setAttribute("aria-checked", String(!!N));
						else if (N) {
							const O = (B) =>
								D.row.domNode.setAttribute("aria-checked", String(!!B));
							O(N.value),
								(D.checkedDisposable = N.onDidChange(() => O(N.value)));
						}
						if (D.stale || !D.row.domNode.parentElement) {
							const O = this.d.at(k + 1)?.row?.domNode ?? null;
							(D.row.domNode.parentElement !== this.o ||
								D.row.domNode.nextElementSibling !== O) &&
								this.o.insertBefore(D.row.domNode, O),
								(D.stale = !1);
						}
						this.bb(D, k);
						const A = this.j.get(D.templateId);
						if (!A)
							throw new Error(
								`No renderer found for template id ${D.templateId}`,
							);
						A?.renderElement(D.element, k, D.row.templateData, D.size);
						const R = this.F.getDragURI(D.element);
						D.dragStartDisposable.dispose(),
							(D.row.domNode.draggable = !!R),
							R &&
								(D.dragStartDisposable = (0, i.$0fb)(
									D.row.domNode,
									"dragstart",
									(O) => this.kb(D.element, R, O),
								)),
							this.Q && (this.ab(D), this.W());
					}
					ab(k) {
						if (!k.row || !k.row.domNode) return;
						(k.row.domNode.style.width = "fit-content"),
							(k.width = (0, i.$wgb)(k.row.domNode));
						const L = (0, i.getWindow)(k.row.domNode).getComputedStyle(
							k.row.domNode,
						);
						L.paddingLeft && (k.width += parseFloat(L.paddingLeft)),
							L.paddingRight && (k.width += parseFloat(L.paddingRight)),
							(k.row.domNode.style.width = "");
					}
					bb(k, L) {
						(k.row.domNode.style.top = `${this.elementTop(L)}px`),
							this.A && (k.row.domNode.style.height = `${k.size}px`),
							this.z && (k.row.domNode.style.lineHeight = `${k.size}px`),
							k.row.domNode.setAttribute("data-index", `${L}`),
							k.row.domNode.setAttribute(
								"data-last-element",
								L === this.length - 1 ? "true" : "false",
							),
							k.row.domNode.setAttribute(
								"data-parity",
								L % 2 === 0 ? "even" : "odd",
							),
							k.row.domNode.setAttribute(
								"aria-setsize",
								String(this.D.getSetSize(k.element, L, this.length)),
							),
							k.row.domNode.setAttribute(
								"aria-posinset",
								String(this.D.getPosInSet(k.element, L)),
							),
							k.row.domNode.setAttribute("id", this.getElementDomId(L)),
							k.row.domNode.classList.toggle("drop-target", k.dropTarget);
					}
					db(k) {
						const L = this.d[k];
						if (
							(L.dragStartDisposable.dispose(),
							L.checkedDisposable.dispose(),
							L.row)
						) {
							const D = this.j.get(L.templateId);
							D &&
								D.disposeElement &&
								D.disposeElement(L.element, k, L.row.templateData, L.size),
								this.h.release(L.row),
								(L.row = null);
						}
						this.Q && this.W();
					}
					getScrollTop() {
						return this.q.getScrollPosition().scrollTop;
					}
					setScrollTop(k, L) {
						this.t &&
							(this.t.dispose(),
							(this.t = null),
							this.q.setScrollDimensions({ scrollHeight: this.scrollHeight })),
							this.q.setScrollPosition({ scrollTop: k, reuseAnimation: L });
					}
					getScrollLeft() {
						return this.q.getScrollPosition().scrollLeft;
					}
					setScrollLeft(k) {
						this.t &&
							(this.t.dispose(),
							(this.t = null),
							this.q.setScrollDimensions({ scrollWidth: this.E })),
							this.q.setScrollPosition({ scrollLeft: k });
					}
					get scrollTop() {
						return this.getScrollTop();
					}
					set scrollTop(k) {
						this.setScrollTop(k);
					}
					get scrollHeight() {
						return this.s + (this.Q ? 10 : 0) + this.C;
					}
					get onMouseClick() {
						return u.Event.map(
							this.M.add(new w.$mib(this.domNode, "click")).event,
							(k) => this.eb(k),
							this.M,
						);
					}
					get onMouseDblClick() {
						return u.Event.map(
							this.M.add(new w.$mib(this.domNode, "dblclick")).event,
							(k) => this.eb(k),
							this.M,
						);
					}
					get onMouseMiddleClick() {
						return u.Event.filter(
							u.Event.map(
								this.M.add(new w.$mib(this.domNode, "auxclick")).event,
								(k) => this.eb(k),
								this.M,
							),
							(k) => k.browserEvent.button === 1,
							this.M,
						);
					}
					get onMouseUp() {
						return u.Event.map(
							this.M.add(new w.$mib(this.domNode, "mouseup")).event,
							(k) => this.eb(k),
							this.M,
						);
					}
					get onMouseDown() {
						return u.Event.map(
							this.M.add(new w.$mib(this.domNode, "mousedown")).event,
							(k) => this.eb(k),
							this.M,
						);
					}
					get onMouseOver() {
						return u.Event.map(
							this.M.add(new w.$mib(this.domNode, "mouseover")).event,
							(k) => this.eb(k),
							this.M,
						);
					}
					get onMouseMove() {
						return u.Event.map(
							this.M.add(new w.$mib(this.domNode, "mousemove")).event,
							(k) => this.eb(k),
							this.M,
						);
					}
					get onMouseOut() {
						return u.Event.map(
							this.M.add(new w.$mib(this.domNode, "mouseout")).event,
							(k) => this.eb(k),
							this.M,
						);
					}
					get onContextMenu() {
						return u.Event.any(
							u.Event.map(
								this.M.add(new w.$mib(this.domNode, "contextmenu")).event,
								(k) => this.eb(k),
								this.M,
							),
							u.Event.map(
								this.M.add(new w.$mib(this.domNode, E.EventType.Contextmenu))
									.event,
								(k) => this.gb(k),
								this.M,
							),
						);
					}
					get onTouchStart() {
						return u.Event.map(
							this.M.add(new w.$mib(this.domNode, "touchstart")).event,
							(k) => this.fb(k),
							this.M,
						);
					}
					get onTap() {
						return u.Event.map(
							this.M.add(new w.$mib(this.o, E.EventType.Tap)).event,
							(k) => this.gb(k),
							this.M,
						);
					}
					eb(k) {
						const L = this.ub(k.target || null),
							D = typeof L > "u" ? void 0 : this.d[L],
							M = D && D.element;
						return { browserEvent: k, index: L, element: M };
					}
					fb(k) {
						const L = this.ub(k.target || null),
							D = typeof L > "u" ? void 0 : this.d[L],
							M = D && D.element;
						return { browserEvent: k, index: L, element: M };
					}
					gb(k) {
						const L = this.ub(k.initialTarget || null),
							D = typeof L > "u" ? void 0 : this.d[L],
							M = D && D.element;
						return { browserEvent: k, index: L, element: M };
					}
					hb(k) {
						const L = this.ub(k.target || null),
							D = typeof L > "u" ? void 0 : this.d[L],
							M = D && D.element,
							N = this.tb(k, L);
						return { browserEvent: k, index: L, element: M, sector: N };
					}
					ib(k) {
						try {
							const L = this.vb(this.k, this.m);
							this.Y(L, k.scrollTop, k.height, k.scrollLeft, k.scrollWidth),
								this.B && this.wb(k.scrollTop, k.height, k.inSmoothScrolling);
						} catch (L) {
							throw (console.error("Got bad scroll event:", k), L);
						}
					}
					jb(k) {
						k.preventDefault(),
							k.stopPropagation(),
							(this.scrollTop -= k.translationY);
					}
					kb(k, L, D) {
						if (!D.dataTransfer) return;
						const M = this.F.getDragElements(k);
						if (
							((D.dataTransfer.effectAllowed = "copyMove"),
							D.dataTransfer.setData(t.$Ohb.TEXT, L),
							D.dataTransfer.setDragImage)
						) {
							let N;
							this.F.getDragLabel && (N = this.F.getDragLabel(M, D)),
								typeof N > "u" && (N = String(M.length));
							const A = (0, i.$)(".monaco-drag-image");
							(A.textContent = N),
								((B) => {
									for (; B && !B.classList.contains("monaco-workbench"); )
										B = B.parentElement;
									return B || this.domNode.ownerDocument;
								})(this.domNode).appendChild(A),
								D.dataTransfer.setDragImage(A, -10, -10),
								setTimeout(() => A.remove(), 0);
						}
						this.domNode.classList.add("dragging"),
							(this.H = new y(M)),
							(b.CurrentDragAndDropData = new $(M)),
							this.F.onDragStart?.(this.H, D);
					}
					lb(k) {
						if (
							(k.browserEvent.preventDefault(),
							this.L.dispose(),
							(b.CurrentDragAndDropData &&
								b.CurrentDragAndDropData.getData() === "vscode-ui") ||
								(this.qb(k.browserEvent), !k.browserEvent.dataTransfer))
						)
							return !1;
						if (!this.H)
							if (b.CurrentDragAndDropData) this.H = b.CurrentDragAndDropData;
							else {
								if (!k.browserEvent.dataTransfer.types) return !1;
								this.H = new v();
							}
						const L = this.F.onDragOver(
							this.H,
							k.element,
							k.index,
							k.sector,
							k.browserEvent,
						);
						if (((this.G = typeof L == "boolean" ? L : L.accept), !this.G))
							return (this.I = void 0), this.K.dispose(), !1;
						k.browserEvent.dataTransfer.dropEffect =
							typeof L != "boolean" &&
							L.effect?.type === n.ListDragOverEffectType.Copy
								? "copy"
								: "move";
						let D;
						typeof L != "boolean" && L.feedback
							? (D = L.feedback)
							: typeof k.index > "u"
								? (D = [-1])
								: (D = [k.index]),
							(D = (0, d.$Qb)(D)
								.filter((N) => N >= -1 && N < this.length)
								.sort((N, A) => N - A)),
							(D = D[0] === -1 ? [-1] : D);
						let M =
							typeof L != "boolean" && L.effect && L.effect.position
								? L.effect.position
								: n.ListDragOverEffectPosition.Over;
						if (S(this.I, D) && this.J === M) return !0;
						if (((this.I = D), (this.J = M), this.K.dispose(), D[0] === -1))
							this.domNode.classList.add(M),
								this.o.classList.add(M),
								(this.K = (0, a.$Yc)(() => {
									this.domNode.classList.remove(M), this.o.classList.remove(M);
								}));
						else {
							if (D.length > 1 && M !== n.ListDragOverEffectPosition.Over)
								throw new Error(
									"Can't use multiple feedbacks with position different than 'over'",
								);
							M === n.ListDragOverEffectPosition.After &&
								D[0] < this.length - 1 &&
								((D[0] += 1), (M = n.ListDragOverEffectPosition.Before));
							for (const N of D) {
								const A = this.d[N];
								(A.dropTarget = !0), A.row?.domNode.classList.add(M);
							}
							this.K = (0, a.$Yc)(() => {
								for (const N of D) {
									const A = this.d[N];
									(A.dropTarget = !1), A.row?.domNode.classList.remove(M);
								}
							});
						}
						return !0;
					}
					mb(k) {
						this.L.dispose(),
							(this.L = (0, m.$Oh)(() => this.pb(), 100, this.M)),
							this.H &&
								this.F.onDragLeave?.(
									this.H,
									k.element,
									k.index,
									k.browserEvent,
								);
					}
					nb(k) {
						if (!this.G) return;
						const L = this.H;
						this.sb(),
							this.pb(),
							this.domNode.classList.remove("dragging"),
							(this.H = void 0),
							(b.CurrentDragAndDropData = void 0),
							!(!L || !k.browserEvent.dataTransfer) &&
								(k.browserEvent.preventDefault(),
								L.update(k.browserEvent.dataTransfer),
								this.F.drop(L, k.element, k.index, k.sector, k.browserEvent));
					}
					ob(k) {
						(this.G = !1),
							this.sb(),
							this.pb(),
							this.domNode.classList.remove("dragging"),
							(this.H = void 0),
							(b.CurrentDragAndDropData = void 0),
							this.F.onDragEnd?.(k);
					}
					pb() {
						(this.I = void 0),
							(this.J = void 0),
							this.K.dispose(),
							(this.K = a.$1c.None);
					}
					qb(k) {
						if (!this.w) {
							const L = (0, i.$qgb)(this.domNode).top;
							this.w = (0, i.$uhb)(
								(0, i.getWindow)(this.domNode),
								this.rb.bind(this, L),
							);
						}
						this.x.dispose(),
							(this.x = (0, m.$Oh)(
								() => {
									this.w && (this.w.dispose(), (this.w = void 0));
								},
								1e3,
								this.M,
							)),
							(this.y = k.pageY);
					}
					rb(k) {
						if (this.y === void 0) return;
						const L = this.y - k,
							D = this.renderHeight - 35;
						L < 35
							? (this.scrollTop += Math.max(-14, Math.floor(0.3 * (L - 35))))
							: L > D &&
								(this.scrollTop += Math.min(14, Math.floor(0.3 * (L - D))));
					}
					sb() {
						this.x.dispose(), this.w && (this.w.dispose(), (this.w = void 0));
					}
					tb(k, L) {
						if (L === void 0) return;
						const D = k.offsetY / this.d[L].size,
							M = Math.floor(D / 0.25);
						return (0, f.$Zm)(M, 0, 3);
					}
					ub(k) {
						const L = this.q.getDomNode();
						let D = k;
						for (
							;
							((0, i.$Ygb)(D) || (0, i.$6gb)(D)) &&
							D !== this.o &&
							L.contains(D);
						) {
							const M = D.getAttribute("data-index");
							if (M) {
								const N = Number(M);
								if (!isNaN(N)) return N;
							}
							D = D.parentElement;
						}
					}
					vb(k, L) {
						return {
							start: this.g.indexAt(k),
							end: this.g.indexAfter(k + L - 1),
						};
					}
					wb(k, L, D) {
						const M = this.vb(k, L);
						let N, A;
						k === this.elementTop(M.start)
							? ((N = M.start), (A = 0))
							: M.end - M.start > 1 &&
								((N = M.start + 1), (A = this.elementTop(N) - k));
						let R = 0;
						for (;;) {
							const O = this.vb(k, L);
							let B = !1;
							for (let U = O.start; U < O.end; U++) {
								const z = this.xb(U);
								z !== 0 && this.g.splice(U, 1, [this.d[U]]),
									(R += z),
									(B = B || z !== 0);
							}
							if (!B) {
								R !== 0 && this.V();
								const U = h.Range.relativeComplement(M, O);
								for (const F of U)
									for (let x = F.start; x < F.end; x++)
										this.d[x].row && this.db(x);
								const z = h.Range.relativeComplement(O, M).reverse();
								for (const F of z)
									for (let x = F.end - 1; x >= F.start; x--) this.Z(x);
								for (let F = O.start; F < O.end; F++)
									this.d[F].row && this.bb(this.d[F], F);
								if (typeof N == "number") {
									const F = this.p.getFutureScrollPosition().scrollTop - k,
										x = this.elementTop(N) - A + F;
									this.setScrollTop(x, D);
								}
								this.N.fire(this.contentHeight);
								return;
							}
						}
					}
					xb(k) {
						const L = this.d[k];
						if (this.R.getDynamicHeight) {
							const A = this.R.getDynamicHeight(L.element);
							if (A !== null) {
								const R = L.size;
								return (L.size = A), (L.lastDynamicHeightWidth = this.n), A - R;
							}
						}
						if (
							!L.hasDynamicHeight ||
							L.lastDynamicHeightWidth === this.n ||
							(this.R.hasDynamicHeight && !this.R.hasDynamicHeight(L.element))
						)
							return 0;
						const D = L.size;
						if (L.row)
							return (
								(L.row.domNode.style.height = ""),
								(L.size = L.row.domNode.offsetHeight),
								L.size === 0 &&
									!(0, i.$Bgb)(
										L.row.domNode,
										(0, i.getWindow)(L.row.domNode).document.body,
									) &&
									console.warn(
										"Measuring item node that is not in DOM! Add ListView to the DOM before measuring row height!",
										new Error().stack,
									),
								(L.lastDynamicHeightWidth = this.n),
								L.size - D
							);
						const { row: M } = this.h.alloc(L.templateId);
						(M.domNode.style.height = ""), this.o.appendChild(M.domNode);
						const N = this.j.get(L.templateId);
						if (!N)
							throw new o.$gb(
								"Missing renderer for templateId: " + L.templateId,
							);
						return (
							N.renderElement(L.element, k, M.templateData, void 0),
							(L.size = M.domNode.offsetHeight),
							N.disposeElement?.(L.element, k, M.templateData, void 0),
							this.R.setDynamicHeight?.(L.element, L.size),
							(L.lastDynamicHeightWidth = this.n),
							M.domNode.remove(),
							this.h.release(M),
							L.size - D
						);
					}
					getElementDomId(k) {
						return `${this.domId}_${k}`;
					}
					dispose() {
						for (const k of this.d)
							if (
								(k.dragStartDisposable.dispose(),
								k.checkedDisposable.dispose(),
								k.row)
							) {
								const L = this.j.get(k.row.templateId);
								L &&
									(L.disposeElement?.(
										k.element,
										-1,
										k.row.templateData,
										void 0,
									),
									L.disposeTemplate(k.row.templateData));
							}
						(this.d = []),
							this.domNode?.remove(),
							this.w?.dispose(),
							this.M.dispose();
					}
				}
				(e.$zib = T),
					Ne([r.$ei], T.prototype, "onMouseClick", null),
					Ne([r.$ei], T.prototype, "onMouseDblClick", null),
					Ne([r.$ei], T.prototype, "onMouseMiddleClick", null),
					Ne([r.$ei], T.prototype, "onMouseUp", null),
					Ne([r.$ei], T.prototype, "onMouseDown", null),
					Ne([r.$ei], T.prototype, "onMouseOver", null),
					Ne([r.$ei], T.prototype, "onMouseMove", null),
					Ne([r.$ei], T.prototype, "onMouseOut", null),
					Ne([r.$ei], T.prototype, "onContextMenu", null),
					Ne([r.$ei], T.prototype, "onTouchStart", null),
					Ne([r.$ei], T.prototype, "onTap", null);
			},
		),
		define(
			de[278],
			he([
				1, 0, 7, 265, 114, 159, 127, 2210, 24, 15, 97, 138, 6, 132, 27, 3, 201,
				12, 28, 431, 539, 168, 77, 1512,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.List =
						e.$Qib =
						e.$Pib =
						e.$Oib =
						e.$Lib =
						e.TypeNavigationMode =
							void 0),
					(e.$Dib = T),
					(e.$Eib = k),
					(e.$Fib = L),
					(e.$Gib = D),
					(e.$Hib = M),
					(e.$Iib = N),
					(e.$Jib = A),
					(e.$Kib = R),
					(e.$Mib = x),
					(e.$Nib = H),
					(o = mt(o));
				class $ {
					constructor(Z) {
						(this.d = Z), (this.c = []);
					}
					get templateId() {
						return `template:${this.d.name}`;
					}
					renderTemplate(Z) {
						return Z;
					}
					renderElement(Z, se, re) {
						const le = this.c.findIndex((oe) => oe.templateData === re);
						if (le >= 0) {
							const oe = this.c[le];
							this.d.unrender(re), (oe.index = se);
						} else {
							const oe = { index: se, templateData: re };
							this.c.push(oe);
						}
						this.d.renderIndex(se, re);
					}
					splice(Z, se, re) {
						const le = [];
						for (const oe of this.c)
							oe.index < Z
								? le.push(oe)
								: oe.index >= Z + se &&
									le.push({
										index: oe.index + re - se,
										templateData: oe.templateData,
									});
						this.c = le;
					}
					renderIndexes(Z) {
						for (const { index: se, templateData: re } of this.c)
							Z.indexOf(se) > -1 && this.d.renderIndex(se, re);
					}
					disposeTemplate(Z) {
						const se = this.c.findIndex((re) => re.templateData === Z);
						se < 0 || this.c.splice(se, 1);
					}
				}
				class v {
					get name() {
						return this.g;
					}
					get renderer() {
						return new $(this);
					}
					constructor(Z) {
						(this.g = Z),
							(this.c = []),
							(this.d = []),
							(this.f = new h.$re()),
							(this.onChange = this.f.event);
					}
					splice(Z, se, re) {
						const le = re.length - se,
							oe = Z + se,
							ae = [];
						let pe = 0;
						for (; pe < this.d.length && this.d[pe] < Z; )
							ae.push(this.d[pe++]);
						for (let $e = 0; $e < re.length; $e++) re[$e] && ae.push($e + Z);
						for (; pe < this.d.length && this.d[pe] >= oe; )
							ae.push(this.d[pe++] + le);
						this.renderer.splice(Z, se, re.length), this.h(ae, ae);
					}
					renderIndex(Z, se) {
						se.classList.toggle(this.g, this.contains(Z));
					}
					unrender(Z) {
						Z.classList.remove(this.g);
					}
					set(Z, se) {
						return this.h(Z, [...Z].sort(ie), se);
					}
					h(Z, se, re) {
						const le = this.c,
							oe = this.d;
						(this.c = Z), (this.d = se);
						const ae = X(oe, Z);
						return (
							this.renderer.renderIndexes(ae),
							this.f.fire({ indexes: Z, browserEvent: re }),
							le
						);
					}
					get() {
						return this.c;
					}
					contains(Z) {
						return (0, m.$Ab)(this.d, Z, ie) >= 0;
					}
					dispose() {
						(0, g.$Vc)(this.f);
					}
				}
				Ne([a.$ei], v.prototype, "renderer", null);
				class S extends v {
					constructor(Z) {
						super("selected"), (this.k = Z);
					}
					renderIndex(Z, se) {
						super.renderIndex(Z, se),
							this.k &&
								(this.contains(Z)
									? se.setAttribute("aria-selected", "true")
									: se.setAttribute("aria-selected", "false"));
					}
				}
				class I {
					constructor(Z, se, re) {
						(this.c = Z), (this.d = se), (this.f = re);
					}
					splice(Z, se, re) {
						if (!this.f)
							return this.c.splice(Z, se, new Array(re.length).fill(!1));
						const le = this.c
							.get()
							.map((pe) => this.f.getId(this.d.element(pe)).toString());
						if (le.length === 0)
							return this.c.splice(Z, se, new Array(re.length).fill(!1));
						const oe = new Set(le),
							ae = re.map((pe) => oe.has(this.f.getId(pe).toString()));
						this.c.splice(Z, se, ae);
					}
				}
				function T(Q) {
					return Q.tagName === "INPUT" || Q.tagName === "TEXTAREA";
				}
				function P(Q, Z) {
					return Q.classList.contains(Z)
						? !0
						: Q.classList.contains("monaco-list") || !Q.parentElement
							? !1
							: P(Q.parentElement, Z);
				}
				function k(Q) {
					return P(Q, "monaco-editor");
				}
				function L(Q) {
					return P(Q, "monaco-custom-toggle");
				}
				function D(Q) {
					return P(Q, "action-item");
				}
				function M(Q) {
					return P(Q, "monaco-tl-twistie");
				}
				function N(Q) {
					return P(Q, "monaco-tree-sticky-row");
				}
				function A(Q) {
					return Q.classList.contains("monaco-tree-sticky-container");
				}
				function R(Q) {
					return (Q.tagName === "A" && Q.classList.contains("monaco-button")) ||
						(Q.tagName === "DIV" &&
							Q.classList.contains("monaco-button-dropdown"))
						? !0
						: Q.classList.contains("monaco-list") || !Q.parentElement
							? !1
							: R(Q.parentElement);
				}
				class O {
					get g() {
						return h.Event.chain(
							this.c.add(new i.$mib(this.k.domNode, "keydown")).event,
							(Z) =>
								Z.filter((se) => !T(se.target)).map((se) => new w.$7fb(se)),
						);
					}
					constructor(Z, se, re) {
						(this.h = Z),
							(this.k = se),
							(this.c = new g.$Zc()),
							(this.d = new g.$Zc()),
							(this.f = re.multipleSelectionSupport),
							this.c.add(
								this.g((le) => {
									switch (le.keyCode) {
										case n.KeyCode.Enter:
											return this.l(le);
										case n.KeyCode.UpArrow:
											return this.o(le);
										case n.KeyCode.DownArrow:
											return this.p(le);
										case n.KeyCode.PageUp:
											return this.q(le);
										case n.KeyCode.PageDown:
											return this.s(le);
										case n.KeyCode.Escape:
											return this.u(le);
										case n.KeyCode.KeyA:
											this.f && (o.$m ? le.metaKey : le.ctrlKey) && this.t(le);
									}
								}),
							);
					}
					updateOptions(Z) {
						Z.multipleSelectionSupport !== void 0 &&
							(this.f = Z.multipleSelectionSupport);
					}
					l(Z) {
						Z.preventDefault(),
							Z.stopPropagation(),
							this.h.setSelection(this.h.getFocus(), Z.browserEvent);
					}
					o(Z) {
						Z.preventDefault(),
							Z.stopPropagation(),
							this.h.focusPrevious(1, !1, Z.browserEvent);
						const se = this.h.getFocus()[0];
						this.h.setAnchor(se), this.h.reveal(se), this.k.domNode.focus();
					}
					p(Z) {
						Z.preventDefault(),
							Z.stopPropagation(),
							this.h.focusNext(1, !1, Z.browserEvent);
						const se = this.h.getFocus()[0];
						this.h.setAnchor(se), this.h.reveal(se), this.k.domNode.focus();
					}
					q(Z) {
						Z.preventDefault(),
							Z.stopPropagation(),
							this.h.focusPreviousPage(Z.browserEvent);
						const se = this.h.getFocus()[0];
						this.h.setAnchor(se), this.h.reveal(se), this.k.domNode.focus();
					}
					s(Z) {
						Z.preventDefault(),
							Z.stopPropagation(),
							this.h.focusNextPage(Z.browserEvent);
						const se = this.h.getFocus()[0];
						this.h.setAnchor(se), this.h.reveal(se), this.k.domNode.focus();
					}
					t(Z) {
						Z.preventDefault(),
							Z.stopPropagation(),
							this.h.setSelection((0, m.$Vb)(this.h.length), Z.browserEvent),
							this.h.setAnchor(void 0),
							this.k.domNode.focus();
					}
					u(Z) {
						this.h.getSelection().length &&
							(Z.preventDefault(),
							Z.stopPropagation(),
							this.h.setSelection([], Z.browserEvent),
							this.h.setAnchor(void 0),
							this.k.domNode.focus());
					}
					dispose() {
						this.c.dispose(), this.d.dispose();
					}
				}
				Ne([a.$ei], O.prototype, "g", null);
				var B;
				(function (Q) {
					(Q[(Q.Automatic = 0)] = "Automatic"),
						(Q[(Q.Trigger = 1)] = "Trigger");
				})(B || (e.TypeNavigationMode = B = {}));
				var U;
				(function (Q) {
					(Q[(Q.Idle = 0)] = "Idle"), (Q[(Q.Typing = 1)] = "Typing");
				})(U || (U = {})),
					(e.$Lib = new (class {
						mightProducePrintableCharacter(Q) {
							return Q.ctrlKey || Q.metaKey || Q.altKey
								? !1
								: (Q.keyCode >= n.KeyCode.KeyA &&
										Q.keyCode <= n.KeyCode.KeyZ) ||
										(Q.keyCode >= n.KeyCode.Digit0 &&
											Q.keyCode <= n.KeyCode.Digit9) ||
										(Q.keyCode >= n.KeyCode.Numpad0 &&
											Q.keyCode <= n.KeyCode.Numpad9) ||
										(Q.keyCode >= n.KeyCode.Semicolon &&
											Q.keyCode <= n.KeyCode.Quote);
						}
					})());
				class z {
					constructor(Z, se, re, le, oe) {
						(this.o = Z),
							(this.p = se),
							(this.q = re),
							(this.s = le),
							(this.t = oe),
							(this.c = !1),
							(this.d = U.Idle),
							(this.f = B.Automatic),
							(this.g = !1),
							(this.h = -1),
							(this.k = new g.$Zc()),
							(this.l = new g.$Zc()),
							this.updateOptions(Z.options);
					}
					updateOptions(Z) {
						(Z.typeNavigationEnabled ?? !0) ? this.u() : this.v(),
							(this.f = Z.typeNavigationMode ?? B.Automatic);
					}
					trigger() {
						this.g = !this.g;
					}
					u() {
						if (this.c) return;
						let Z = !1;
						const se = h.Event.chain(
								this.k.add(new i.$mib(this.p.domNode, "keydown")).event,
								(oe) =>
									oe
										.filter((ae) => !T(ae.target))
										.filter(() => this.f === B.Automatic || this.g)
										.map((ae) => new w.$7fb(ae))
										.filter((ae) => Z || this.s(ae))
										.filter((ae) => this.t.mightProducePrintableCharacter(ae))
										.forEach((ae) => t.$ahb.stop(ae, !0))
										.map((ae) => ae.browserEvent.key),
							),
							re = h.Event.debounce(
								se,
								() => null,
								800,
								void 0,
								void 0,
								void 0,
								this.k,
							);
						h.Event.reduce(
							h.Event.any(se, re),
							(oe, ae) => (ae === null ? null : (oe || "") + ae),
							void 0,
							this.k,
						)(this.x, this, this.k),
							re(this.w, this, this.k),
							se(() => (Z = !0), void 0, this.k),
							re(() => (Z = !1), void 0, this.k),
							(this.c = !0),
							(this.g = !1);
					}
					v() {
						this.c && (this.k.clear(), (this.c = !1), (this.g = !1));
					}
					w() {
						const Z = this.o.getFocus();
						if (Z.length > 0 && Z[0] === this.h) {
							const se = this.o.options.accessibilityProvider?.getAriaLabel(
								this.o.element(Z[0]),
							);
							typeof se == "string"
								? (0, C.$oib)(se)
								: se && (0, C.$oib)(se.get());
						}
						this.h = -1;
					}
					x(Z) {
						if (!Z) {
							(this.d = U.Idle), (this.g = !1);
							return;
						}
						const se = this.o.getFocus(),
							re = se.length > 0 ? se[0] : 0,
							le = this.d === U.Idle ? 1 : 0;
						this.d = U.Typing;
						for (let oe = 0; oe < this.o.length; oe++) {
							const ae = (re + oe + le) % this.o.length,
								pe = this.q.getKeyboardNavigationLabel(this.p.element(ae)),
								$e = pe && pe.toString();
							if (this.o.options.typeNavigationEnabled) {
								if (typeof $e < "u") {
									if ((0, c.$Tk)(Z, $e)) {
										(this.h = re), this.o.setFocus([ae]), this.o.reveal(ae);
										return;
									}
									const ye = (0, c.$1k)(Z, $e);
									if (ye && ye[0].end - ye[0].start > 1 && ye.length === 1) {
										(this.h = re), this.o.setFocus([ae]), this.o.reveal(ae);
										return;
									}
								}
							} else if (typeof $e > "u" || (0, c.$Tk)(Z, $e)) {
								(this.h = re), this.o.setFocus([ae]), this.o.reveal(ae);
								return;
							}
						}
					}
					dispose() {
						this.v(), this.k.dispose(), this.l.dispose();
					}
				}
				class F {
					constructor(Z, se) {
						(this.d = Z), (this.f = se), (this.c = new g.$Zc());
						const re = h.Event.chain(
							this.c.add(new i.$mib(se.domNode, "keydown")).event,
							(oe) =>
								oe.filter((ae) => !T(ae.target)).map((ae) => new w.$7fb(ae)),
						);
						h.Event.chain(re, (oe) =>
							oe.filter(
								(ae) =>
									ae.keyCode === n.KeyCode.Tab &&
									!ae.ctrlKey &&
									!ae.metaKey &&
									!ae.shiftKey &&
									!ae.altKey,
							),
						)(this.g, this, this.c);
					}
					g(Z) {
						if (Z.target !== this.f.domNode) return;
						const se = this.d.getFocus();
						if (se.length === 0) return;
						const re = this.f.domElement(se[0]);
						if (!re) return;
						const le = re.querySelector("[tabIndex]");
						if (!le || !(0, t.$Ygb)(le) || le.tabIndex === -1) return;
						const oe = (0, t.getWindow)(le).getComputedStyle(le);
						oe.visibility === "hidden" ||
							oe.display === "none" ||
							(Z.preventDefault(), Z.stopPropagation(), le.focus());
					}
					dispose() {
						this.c.dispose();
					}
				}
				function x(Q) {
					return o.$m ? Q.browserEvent.metaKey : Q.browserEvent.ctrlKey;
				}
				function H(Q) {
					return Q.browserEvent.shiftKey;
				}
				function q(Q) {
					return (0, t.$7gb)(Q) && Q.button === 2;
				}
				const V = {
					isSelectionSingleChangeEvent: x,
					isSelectionRangeChangeEvent: H,
				};
				class G {
					constructor(Z) {
						(this.k = Z),
							(this.f = new g.$Zc()),
							(this.g = new h.$re()),
							(this.onPointer = this.g.event),
							Z.options.multipleSelectionSupport !== !1 &&
								(this.c = this.k.options.multipleSelectionController || V),
							(this.d =
								typeof Z.options.mouseSupport > "u" ||
								!!Z.options.mouseSupport),
							this.d &&
								(Z.onMouseDown(this.s, this, this.f),
								Z.onContextMenu(this.t, this, this.f),
								Z.onMouseDblClick(this.v, this, this.f),
								Z.onTouchStart(this.s, this, this.f),
								this.f.add(E.$Qhb.addTarget(Z.getHTMLElement()))),
							h.Event.any(Z.onMouseClick, Z.onMouseMiddleClick, Z.onTap)(
								this.u,
								this,
								this.f,
							);
					}
					updateOptions(Z) {
						Z.multipleSelectionSupport !== void 0 &&
							((this.c = void 0),
							Z.multipleSelectionSupport &&
								(this.c = this.k.options.multipleSelectionController || V));
					}
					o(Z) {
						return this.c ? this.c.isSelectionSingleChangeEvent(Z) : !1;
					}
					p(Z) {
						return this.c ? this.c.isSelectionRangeChangeEvent(Z) : !1;
					}
					q(Z) {
						return this.o(Z) || this.p(Z);
					}
					s(Z) {
						k(Z.browserEvent.target) ||
							((0, t.$Jgb)() !== Z.browserEvent.target && this.k.domFocus());
					}
					t(Z) {
						if (T(Z.browserEvent.target) || k(Z.browserEvent.target)) return;
						const se = typeof Z.index > "u" ? [] : [Z.index];
						this.k.setFocus(se, Z.browserEvent);
					}
					u(Z) {
						if (
							!this.d ||
							T(Z.browserEvent.target) ||
							k(Z.browserEvent.target) ||
							Z.browserEvent.isHandledByList
						)
							return;
						Z.browserEvent.isHandledByList = !0;
						const se = Z.index;
						if (typeof se > "u") {
							this.k.setFocus([], Z.browserEvent),
								this.k.setSelection([], Z.browserEvent),
								this.k.setAnchor(void 0);
							return;
						}
						if (this.q(Z)) return this.w(Z);
						this.k.setFocus([se], Z.browserEvent),
							this.k.setAnchor(se),
							q(Z.browserEvent) || this.k.setSelection([se], Z.browserEvent),
							this.g.fire(Z);
					}
					v(Z) {
						if (
							T(Z.browserEvent.target) ||
							k(Z.browserEvent.target) ||
							this.q(Z) ||
							Z.browserEvent.isHandledByList
						)
							return;
						Z.browserEvent.isHandledByList = !0;
						const se = this.k.getFocus();
						this.k.setSelection(se, Z.browserEvent);
					}
					w(Z) {
						const se = Z.index;
						let re = this.k.getAnchor();
						if (this.p(Z)) {
							typeof re > "u" &&
								((re = this.k.getFocus()[0] ?? se), this.k.setAnchor(re));
							const le = Math.min(re, se),
								oe = Math.max(re, se),
								ae = (0, m.$Vb)(le, oe + 1),
								pe = this.k.getSelection(),
								$e = W(X(pe, [re]), re);
							if ($e.length === 0) return;
							const ye = X(ae, Y(pe, $e));
							this.k.setSelection(ye, Z.browserEvent),
								this.k.setFocus([se], Z.browserEvent);
						} else if (this.o(Z)) {
							const le = this.k.getSelection(),
								oe = le.filter((ae) => ae !== se);
							this.k.setFocus([se]),
								this.k.setAnchor(se),
								le.length === oe.length
									? this.k.setSelection([...oe, se], Z.browserEvent)
									: this.k.setSelection(oe, Z.browserEvent);
						}
					}
					dispose() {
						this.f.dispose();
					}
				}
				e.$Oib = G;
				class K {
					constructor(Z, se) {
						(this.c = Z), (this.d = se);
					}
					style(Z) {
						const se = this.d && `.${this.d}`,
							re = [];
						Z.listBackground &&
							re.push(
								`.monaco-list${se} .monaco-list-rows { background: ${Z.listBackground}; }`,
							),
							Z.listFocusBackground &&
								(re.push(
									`.monaco-list${se}:focus .monaco-list-row.focused { background-color: ${Z.listFocusBackground}; }`,
								),
								re.push(
									`.monaco-list${se}:focus .monaco-list-row.focused:hover { background-color: ${Z.listFocusBackground}; }`,
								)),
							Z.listFocusForeground &&
								re.push(
									`.monaco-list${se}:focus .monaco-list-row.focused { color: ${Z.listFocusForeground}; }`,
								),
							Z.listActiveSelectionBackground &&
								(re.push(
									`.monaco-list${se}:focus .monaco-list-row.selected { background-color: ${Z.listActiveSelectionBackground}; }`,
								),
								re.push(
									`.monaco-list${se}:focus .monaco-list-row.selected:hover { background-color: ${Z.listActiveSelectionBackground}; }`,
								)),
							Z.listActiveSelectionForeground &&
								re.push(
									`.monaco-list${se}:focus .monaco-list-row.selected { color: ${Z.listActiveSelectionForeground}; }`,
								),
							Z.listActiveSelectionIconForeground &&
								re.push(
									`.monaco-list${se}:focus .monaco-list-row.selected .codicon { color: ${Z.listActiveSelectionIconForeground}; }`,
								),
							Z.listFocusAndSelectionBackground &&
								re.push(`
				.monaco-drag-image,
				.monaco-list${se}:focus .monaco-list-row.selected.focused { background-color: ${Z.listFocusAndSelectionBackground}; }
			`),
							Z.listFocusAndSelectionForeground &&
								re.push(`
				.monaco-drag-image,
				.monaco-list${se}:focus .monaco-list-row.selected.focused { color: ${Z.listFocusAndSelectionForeground}; }
			`),
							Z.listInactiveFocusForeground &&
								(re.push(
									`.monaco-list${se} .monaco-list-row.focused { color:  ${Z.listInactiveFocusForeground}; }`,
								),
								re.push(
									`.monaco-list${se} .monaco-list-row.focused:hover { color:  ${Z.listInactiveFocusForeground}; }`,
								)),
							Z.listInactiveSelectionIconForeground &&
								re.push(
									`.monaco-list${se} .monaco-list-row.focused .codicon { color:  ${Z.listInactiveSelectionIconForeground}; }`,
								),
							Z.listInactiveFocusBackground &&
								(re.push(
									`.monaco-list${se} .monaco-list-row.focused { background-color:  ${Z.listInactiveFocusBackground}; }`,
								),
								re.push(
									`.monaco-list${se} .monaco-list-row.focused:hover { background-color:  ${Z.listInactiveFocusBackground}; }`,
								)),
							Z.listInactiveSelectionBackground &&
								(re.push(
									`.monaco-list${se} .monaco-list-row.selected { background-color:  ${Z.listInactiveSelectionBackground}; }`,
								),
								re.push(
									`.monaco-list${se} .monaco-list-row.selected:hover { background-color:  ${Z.listInactiveSelectionBackground}; }`,
								)),
							Z.listInactiveSelectionForeground &&
								re.push(
									`.monaco-list${se} .monaco-list-row.selected { color: ${Z.listInactiveSelectionForeground}; }`,
								),
							Z.listHoverBackground &&
								re.push(
									`.monaco-list${se}:not(.drop-target):not(.dragging) .monaco-list-row:hover:not(.selected):not(.focused) { background-color: ${Z.listHoverBackground}; }`,
								),
							Z.listHoverForeground &&
								re.push(
									`.monaco-list${se}:not(.drop-target):not(.dragging) .monaco-list-row:hover:not(.selected):not(.focused) { color:  ${Z.listHoverForeground}; }`,
								);
						const le = (0, t.$xhb)(
							Z.listFocusAndSelectionOutline,
							(0, t.$xhb)(Z.listSelectionOutline, Z.listFocusOutline ?? ""),
						);
						le &&
							re.push(
								`.monaco-list${se}:focus .monaco-list-row.focused.selected { outline: 1px solid ${le}; outline-offset: -1px;}`,
							),
							Z.listFocusOutline &&
								re.push(`
				.monaco-drag-image,
				.monaco-list${se}:focus .monaco-list-row.focused { outline: 1px solid ${Z.listFocusOutline}; outline-offset: -1px; }
				.monaco-workbench.context-menu-visible .monaco-list${se}.last-focused .monaco-list-row.focused { outline: 1px solid ${Z.listFocusOutline}; outline-offset: -1px; }
			`);
						const oe = (0, t.$xhb)(
							Z.listSelectionOutline,
							Z.listInactiveFocusOutline ?? "",
						);
						oe &&
							re.push(
								`.monaco-list${se} .monaco-list-row.focused.selected { outline: 1px dotted ${oe}; outline-offset: -1px; }`,
							),
							Z.listSelectionOutline &&
								re.push(
									`.monaco-list${se} .monaco-list-row.selected { outline: 1px dotted ${Z.listSelectionOutline}; outline-offset: -1px; }`,
								),
							Z.listInactiveFocusOutline &&
								re.push(
									`.monaco-list${se} .monaco-list-row.focused { outline: 1px dotted ${Z.listInactiveFocusOutline}; outline-offset: -1px; }`,
								),
							Z.listHoverOutline &&
								re.push(
									`.monaco-list${se} .monaco-list-row:hover { outline: 1px dashed ${Z.listHoverOutline}; outline-offset: -1px; }`,
								),
							Z.listDropOverBackground &&
								re.push(`
				.monaco-list${se}.drop-target,
				.monaco-list${se} .monaco-list-rows.drop-target,
				.monaco-list${se} .monaco-list-row.drop-target { background-color: ${Z.listDropOverBackground} !important; color: inherit !important; }
			`),
							Z.listDropBetweenBackground &&
								(re.push(`
			.monaco-list${se} .monaco-list-rows.drop-target-before .monaco-list-row:first-child::before,
			.monaco-list${se} .monaco-list-row.drop-target-before::before {
				content: ""; position: absolute; top: 0px; left: 0px; width: 100%; height: 1px;
				background-color: ${Z.listDropBetweenBackground};
			}`),
								re.push(`
			.monaco-list${se} .monaco-list-rows.drop-target-after .monaco-list-row:last-child::after,
			.monaco-list${se} .monaco-list-row.drop-target-after::after {
				content: ""; position: absolute; bottom: 0px; left: 0px; width: 100%; height: 1px;
				background-color: ${Z.listDropBetweenBackground};
			}`)),
							Z.tableColumnsBorder &&
								re.push(`
				.monaco-table > .monaco-split-view2,
				.monaco-table > .monaco-split-view2 .monaco-sash.vertical::before,
				.monaco-workbench:not(.reduce-motion) .monaco-table:hover > .monaco-split-view2,
				.monaco-workbench:not(.reduce-motion) .monaco-table:hover > .monaco-split-view2 .monaco-sash.vertical::before {
					border-color: ${Z.tableColumnsBorder};
				}

				.monaco-workbench:not(.reduce-motion) .monaco-table > .monaco-split-view2,
				.monaco-workbench:not(.reduce-motion) .monaco-table > .monaco-split-view2 .monaco-sash.vertical::before {
					border-color: transparent;
				}
			`),
							Z.tableOddRowsBackgroundColor &&
								re.push(`
				.monaco-table .monaco-list-row[data-parity=odd]:not(.focused):not(.selected):not(:hover) .monaco-table-tr,
				.monaco-table .monaco-list:not(:focus) .monaco-list-row[data-parity=odd].focused:not(.selected):not(:hover) .monaco-table-tr,
				.monaco-table .monaco-list:not(.focused) .monaco-list-row[data-parity=odd].focused:not(.selected):not(:hover) .monaco-table-tr {
					background-color: ${Z.tableOddRowsBackgroundColor};
				}
			`),
							(this.c.textContent = re.join(`
`));
					}
				}
				(e.$Pib = K),
					(e.$Qib = {
						listFocusBackground: "#7FB0D0",
						listActiveSelectionBackground: "#0E639C",
						listActiveSelectionForeground: "#FFFFFF",
						listActiveSelectionIconForeground: "#FFFFFF",
						listFocusAndSelectionOutline: "#90C2F9",
						listFocusAndSelectionBackground: "#094771",
						listFocusAndSelectionForeground: "#FFFFFF",
						listInactiveSelectionBackground: "#3F3F46",
						listInactiveSelectionIconForeground: "#FFFFFF",
						listHoverBackground: "#2A2D2E",
						listDropOverBackground: "#383B3D",
						listDropBetweenBackground: "#EEEEEE",
						treeIndentGuidesStroke: "#a9a9a9",
						treeInactiveIndentGuidesStroke: u.$UL
							.fromHex("#a9a9a9")
							.transparent(0.4)
							.toString(),
						tableColumnsBorder: u.$UL
							.fromHex("#cccccc")
							.transparent(0.2)
							.toString(),
						tableOddRowsBackgroundColor: u.$UL
							.fromHex("#cccccc")
							.transparent(0.04)
							.toString(),
						listBackground: void 0,
						listFocusForeground: void 0,
						listInactiveSelectionForeground: void 0,
						listInactiveFocusForeground: void 0,
						listInactiveFocusBackground: void 0,
						listHoverForeground: void 0,
						listFocusOutline: void 0,
						listInactiveFocusOutline: void 0,
						listSelectionOutline: void 0,
						listHoverOutline: void 0,
						treeStickyScrollBackground: void 0,
						treeStickyScrollBorder: void 0,
						treeStickyScrollShadow: void 0,
					});
				const J = {
					keyboardSupport: !0,
					mouseSupport: !0,
					multipleSelectionSupport: !0,
					dnd: {
						getDragURI() {
							return null;
						},
						onDragStart() {},
						onDragOver() {
							return !1;
						},
						drop() {},
						dispose() {},
					},
				};
				function W(Q, Z) {
					const se = Q.indexOf(Z);
					if (se === -1) return [];
					const re = [];
					let le = se - 1;
					for (; le >= 0 && Q[le] === Z - (se - le); ) re.push(Q[le--]);
					for (
						re.reverse(), le = se;
						le < Q.length && Q[le] === Z + (le - se);
					)
						re.push(Q[le++]);
					return re;
				}
				function X(Q, Z) {
					const se = [];
					let re = 0,
						le = 0;
					for (; re < Q.length || le < Z.length; )
						if (re >= Q.length) se.push(Z[le++]);
						else if (le >= Z.length) se.push(Q[re++]);
						else if (Q[re] === Z[le]) {
							se.push(Q[re]), re++, le++;
							continue;
						} else Q[re] < Z[le] ? se.push(Q[re++]) : se.push(Z[le++]);
					return se;
				}
				function Y(Q, Z) {
					const se = [];
					let re = 0,
						le = 0;
					for (; re < Q.length || le < Z.length; )
						if (re >= Q.length) se.push(Z[le++]);
						else if (le >= Z.length) se.push(Q[re++]);
						else if (Q[re] === Z[le]) {
							re++, le++;
							continue;
						} else Q[re] < Z[le] ? se.push(Q[re++]) : le++;
					return se;
				}
				const ie = (Q, Z) => Q - Z;
				class ne {
					constructor(Z, se) {
						(this.c = Z), (this.d = se);
					}
					get templateId() {
						return this.c;
					}
					renderTemplate(Z) {
						return this.d.map((se) => se.renderTemplate(Z));
					}
					renderElement(Z, se, re, le) {
						let oe = 0;
						for (const ae of this.d) ae.renderElement(Z, se, re[oe++], le);
					}
					disposeElement(Z, se, re, le) {
						let oe = 0;
						for (const ae of this.d)
							ae.disposeElement?.(Z, se, re[oe], le), (oe += 1);
					}
					disposeTemplate(Z) {
						let se = 0;
						for (const re of this.d) re.disposeTemplate(Z[se++]);
					}
				}
				class ee {
					constructor(Z) {
						(this.c = Z), (this.templateId = "a18n");
					}
					renderTemplate(Z) {
						return { container: Z, disposables: new g.$Zc() };
					}
					renderElement(Z, se, re) {
						const le = this.c.getAriaLabel(Z),
							oe =
								le && typeof le != "string" ? le : (0, y.constObservable)(le);
						re.disposables.add(
							(0, y.autorun)((pe) => {
								this.d(pe.readObservable(oe), re.container);
							}),
						);
						const ae = this.c.getAriaLevel && this.c.getAriaLevel(Z);
						typeof ae == "number"
							? re.container.setAttribute("aria-level", `${ae}`)
							: re.container.removeAttribute("aria-level");
					}
					d(Z, se) {
						Z
							? se.setAttribute("aria-label", Z)
							: se.removeAttribute("aria-label");
					}
					disposeElement(Z, se, re, le) {
						re.disposables.clear();
					}
					disposeTemplate(Z) {
						Z.disposables.dispose();
					}
				}
				class _ {
					constructor(Z, se) {
						(this.c = Z), (this.d = se);
					}
					getDragElements(Z) {
						const se = this.c.getSelectedElements();
						return se.indexOf(Z) > -1 ? se : [Z];
					}
					getDragURI(Z) {
						return this.d.getDragURI(Z);
					}
					getDragLabel(Z, se) {
						if (this.d.getDragLabel) return this.d.getDragLabel(Z, se);
					}
					onDragStart(Z, se) {
						this.d.onDragStart?.(Z, se);
					}
					onDragOver(Z, se, re, le, oe) {
						return this.d.onDragOver(Z, se, re, le, oe);
					}
					onDragLeave(Z, se, re, le) {
						this.d.onDragLeave?.(Z, se, re, le);
					}
					onDragEnd(Z) {
						this.d.onDragEnd?.(Z);
					}
					drop(Z, se, re, le, oe) {
						this.d.drop(Z, se, re, le, oe);
					}
					dispose() {
						this.d.dispose();
					}
				}
				class te {
					get onDidChangeFocus() {
						return h.Event.map(
							this.g.wrapEvent(this.c.onChange),
							(Z) => this.G(Z),
							this.y,
						);
					}
					get onDidChangeSelection() {
						return h.Event.map(
							this.g.wrapEvent(this.d.onChange),
							(Z) => this.G(Z),
							this.y,
						);
					}
					get domId() {
						return this.k.domId;
					}
					get onDidScroll() {
						return this.k.onDidScroll;
					}
					get onMouseClick() {
						return this.k.onMouseClick;
					}
					get onMouseDblClick() {
						return this.k.onMouseDblClick;
					}
					get onMouseMiddleClick() {
						return this.k.onMouseMiddleClick;
					}
					get onPointer() {
						return this.w.onPointer;
					}
					get onMouseUp() {
						return this.k.onMouseUp;
					}
					get onMouseDown() {
						return this.k.onMouseDown;
					}
					get onMouseOver() {
						return this.k.onMouseOver;
					}
					get onMouseMove() {
						return this.k.onMouseMove;
					}
					get onMouseOut() {
						return this.k.onMouseOut;
					}
					get onTouchStart() {
						return this.k.onTouchStart;
					}
					get onTap() {
						return this.k.onTap;
					}
					get onContextMenu() {
						let Z = !1;
						const se = h.Event.chain(
								this.y.add(new i.$mib(this.k.domNode, "keydown")).event,
								(oe) =>
									oe
										.map((ae) => new w.$7fb(ae))
										.filter(
											(ae) =>
												(Z =
													ae.keyCode === n.KeyCode.ContextMenu ||
													(ae.shiftKey && ae.keyCode === n.KeyCode.F10)),
										)
										.map((ae) => t.$ahb.stop(ae, !0))
										.filter(() => !1),
							),
							re = h.Event.chain(
								this.y.add(new i.$mib(this.k.domNode, "keyup")).event,
								(oe) =>
									oe
										.forEach(() => (Z = !1))
										.map((ae) => new w.$7fb(ae))
										.filter(
											(ae) =>
												ae.keyCode === n.KeyCode.ContextMenu ||
												(ae.shiftKey && ae.keyCode === n.KeyCode.F10),
										)
										.map((ae) => t.$ahb.stop(ae, !0))
										.map(({ browserEvent: ae }) => {
											const pe = this.getFocus(),
												$e = pe.length ? pe[0] : void 0,
												ye = typeof $e < "u" ? this.k.element($e) : void 0,
												ue =
													typeof $e < "u"
														? this.k.domElement($e)
														: this.k.domNode;
											return {
												index: $e,
												element: ye,
												anchor: ue,
												browserEvent: ae,
											};
										}),
							),
							le = h.Event.chain(this.k.onContextMenu, (oe) =>
								oe
									.filter((ae) => !Z)
									.map(({ element: ae, index: pe, browserEvent: $e }) => ({
										element: ae,
										index: pe,
										anchor: new l.$2fb((0, t.getWindow)(this.k.domNode), $e),
										browserEvent: $e,
									})),
							);
						return h.Event.any(se, re, le);
					}
					get onKeyDown() {
						return this.y.add(new i.$mib(this.k.domNode, "keydown")).event;
					}
					get onKeyUp() {
						return this.y.add(new i.$mib(this.k.domNode, "keyup")).event;
					}
					get onKeyPress() {
						return this.y.add(new i.$mib(this.k.domNode, "keypress")).event;
					}
					get onDidFocus() {
						return h.Event.signal(
							this.y.add(new i.$mib(this.k.domNode, "focus", !0)).event,
						);
					}
					get onDidBlur() {
						return h.Event.signal(
							this.y.add(new i.$mib(this.k.domNode, "blur", !0)).event,
						);
					}
					constructor(Z, se, re, le, oe = J) {
						(this.A = Z),
							(this.B = oe),
							(this.c = new v("focused")),
							(this.f = new v("anchor")),
							(this.g = new h.$ze()),
							(this.x = ""),
							(this.y = new g.$Zc()),
							(this.z = new h.$re()),
							(this.onDidDispose = this.z.event);
						const ae =
							this.B.accessibilityProvider &&
							this.B.accessibilityProvider.getWidgetRole
								? this.B.accessibilityProvider?.getWidgetRole()
								: "list";
						this.d = new S(ae !== "listbox");
						const pe = [this.c.renderer, this.d.renderer];
						(this.u = oe.accessibilityProvider),
							this.u &&
								(pe.push(new ee(this.u)),
								this.u.onDidChangeActiveDescendant?.(this.I, this, this.y)),
							(le = le.map((ye) => new ne(ye.templateId, [...pe, ye])));
						const $e = { ...oe, dnd: oe.dnd && new _(this, oe.dnd) };
						if (
							((this.k = this.C(se, re, le, $e)),
							this.k.domNode.setAttribute("role", ae),
							oe.styleController)
						)
							this.q = oe.styleController(this.k.domId);
						else {
							const ye = (0, t.$Rgb)(this.k.domNode);
							this.q = new K(ye, this.k.domId);
						}
						if (
							((this.o = new d.$qib([
								new I(this.c, this.k, oe.identityProvider),
								new I(this.d, this.k, oe.identityProvider),
								new I(this.f, this.k, oe.identityProvider),
								this.k,
							])),
							this.y.add(this.c),
							this.y.add(this.d),
							this.y.add(this.f),
							this.y.add(this.k),
							this.y.add(this.z),
							this.y.add(new F(this, this.k)),
							(typeof oe.keyboardSupport != "boolean" || oe.keyboardSupport) &&
								((this.v = new O(this, this.k, oe)), this.y.add(this.v)),
							oe.keyboardNavigationLabelProvider)
						) {
							const ye = oe.keyboardNavigationDelegate || e.$Lib;
							(this.t = new z(
								this,
								this.k,
								oe.keyboardNavigationLabelProvider,
								oe.keyboardNavigationEventFilter ?? (() => !0),
								ye,
							)),
								this.y.add(this.t);
						}
						(this.w = this.D(oe)),
							this.y.add(this.w),
							this.onDidChangeFocus(this.H, this, this.y),
							this.onDidChangeSelection(this.J, this, this.y),
							this.u && (this.ariaLabel = this.u.getWidgetAriaLabel()),
							this.B.multipleSelectionSupport !== !1 &&
								this.k.domNode.setAttribute("aria-multiselectable", "true");
					}
					C(Z, se, re, le) {
						return new s.$zib(Z, se, re, le);
					}
					D(Z) {
						return new G(this);
					}
					updateOptions(Z = {}) {
						(this.B = { ...this.B, ...Z }),
							this.t?.updateOptions(this.B),
							this.B.multipleSelectionController !== void 0 &&
								(this.B.multipleSelectionSupport
									? this.k.domNode.setAttribute("aria-multiselectable", "true")
									: this.k.domNode.removeAttribute("aria-multiselectable")),
							this.w.updateOptions(Z),
							this.v?.updateOptions(Z),
							this.k.updateOptions(Z);
					}
					get options() {
						return this.B;
					}
					splice(Z, se, re = []) {
						if (Z < 0 || Z > this.k.length)
							throw new b.$Bib(this.A, `Invalid start index: ${Z}`);
						if (se < 0) throw new b.$Bib(this.A, `Invalid delete count: ${se}`);
						(se === 0 && re.length === 0) ||
							this.g.bufferEvents(() => this.o.splice(Z, se, re));
					}
					updateWidth(Z) {
						this.k.updateWidth(Z);
					}
					updateElementHeight(Z, se) {
						this.k.updateElementHeight(Z, se, null);
					}
					rerender() {
						this.k.rerender();
					}
					element(Z) {
						return this.k.element(Z);
					}
					indexOf(Z) {
						return this.k.indexOf(Z);
					}
					indexAt(Z) {
						return this.k.indexAt(Z);
					}
					get length() {
						return this.k.length;
					}
					get contentHeight() {
						return this.k.contentHeight;
					}
					get contentWidth() {
						return this.k.contentWidth;
					}
					get onDidChangeContentHeight() {
						return this.k.onDidChangeContentHeight;
					}
					get onDidChangeContentWidth() {
						return this.k.onDidChangeContentWidth;
					}
					get scrollTop() {
						return this.k.getScrollTop();
					}
					set scrollTop(Z) {
						this.k.setScrollTop(Z);
					}
					get scrollLeft() {
						return this.k.getScrollLeft();
					}
					set scrollLeft(Z) {
						this.k.setScrollLeft(Z);
					}
					get scrollHeight() {
						return this.k.scrollHeight;
					}
					get renderHeight() {
						return this.k.renderHeight;
					}
					get firstVisibleIndex() {
						return this.k.firstVisibleIndex;
					}
					get firstMostlyVisibleIndex() {
						return this.k.firstMostlyVisibleIndex;
					}
					get lastVisibleIndex() {
						return this.k.lastVisibleIndex;
					}
					get ariaLabel() {
						return this.x;
					}
					set ariaLabel(Z) {
						(this.x = Z), this.k.domNode.setAttribute("aria-label", Z);
					}
					domFocus() {
						this.k.domNode.focus({ preventScroll: !0 });
					}
					layout(Z, se) {
						this.k.layout(Z, se);
					}
					triggerTypeNavigation() {
						this.t?.trigger();
					}
					setSelection(Z, se) {
						for (const re of Z)
							if (re < 0 || re >= this.length)
								throw new b.$Bib(this.A, `Invalid index ${re}`);
						this.d.set(Z, se);
					}
					getSelection() {
						return this.d.get();
					}
					getSelectedElements() {
						return this.getSelection().map((Z) => this.k.element(Z));
					}
					setAnchor(Z) {
						if (typeof Z > "u") {
							this.f.set([]);
							return;
						}
						if (Z < 0 || Z >= this.length)
							throw new b.$Bib(this.A, `Invalid index ${Z}`);
						this.f.set([Z]);
					}
					getAnchor() {
						return (0, m.$Sb)(this.f.get(), void 0);
					}
					getAnchorElement() {
						const Z = this.getAnchor();
						return typeof Z > "u" ? void 0 : this.element(Z);
					}
					setFocus(Z, se) {
						for (const re of Z)
							if (re < 0 || re >= this.length)
								throw new b.$Bib(this.A, `Invalid index ${re}`);
						this.c.set(Z, se);
					}
					focusNext(Z = 1, se = !1, re, le) {
						if (this.length === 0) return;
						const oe = this.c.get(),
							ae = this.E(oe.length > 0 ? oe[0] + Z : 0, se, le);
						ae > -1 && this.setFocus([ae], re);
					}
					focusPrevious(Z = 1, se = !1, re, le) {
						if (this.length === 0) return;
						const oe = this.c.get(),
							ae = this.F(oe.length > 0 ? oe[0] - Z : 0, se, le);
						ae > -1 && this.setFocus([ae], re);
					}
					async focusNextPage(Z, se) {
						let re = this.k.indexAt(
							this.k.getScrollTop() + this.k.renderHeight,
						);
						re = re === 0 ? 0 : re - 1;
						const le = this.getFocus()[0];
						if (le !== re && (le === void 0 || re > le)) {
							const oe = this.F(re, !1, se);
							oe > -1 && le !== oe
								? this.setFocus([oe], Z)
								: this.setFocus([re], Z);
						} else {
							const oe = this.k.getScrollTop();
							let ae = oe + this.k.renderHeight;
							re > le && (ae -= this.k.elementHeight(re)),
								this.k.setScrollTop(ae),
								this.k.getScrollTop() !== oe &&
									(this.setFocus([]),
									await (0, r.$Nh)(0),
									await this.focusNextPage(Z, se));
						}
					}
					async focusPreviousPage(Z, se, re = () => 0) {
						let le;
						const oe = re(),
							ae = this.k.getScrollTop() + oe;
						ae === 0
							? (le = this.k.indexAt(ae))
							: (le = this.k.indexAfter(ae - 1));
						const pe = this.getFocus()[0];
						if (pe !== le && (pe === void 0 || pe >= le)) {
							const $e = this.E(le, !1, se);
							$e > -1 && pe !== $e
								? this.setFocus([$e], Z)
								: this.setFocus([le], Z);
						} else {
							const $e = ae;
							this.k.setScrollTop(ae - this.k.renderHeight - oe),
								this.k.getScrollTop() + re() !== $e &&
									(this.setFocus([]),
									await (0, r.$Nh)(0),
									await this.focusPreviousPage(Z, se, re));
						}
					}
					focusLast(Z, se) {
						if (this.length === 0) return;
						const re = this.F(this.length - 1, !1, se);
						re > -1 && this.setFocus([re], Z);
					}
					focusFirst(Z, se) {
						this.focusNth(0, Z, se);
					}
					focusNth(Z, se, re) {
						if (this.length === 0) return;
						const le = this.E(Z, !1, re);
						le > -1 && this.setFocus([le], se);
					}
					E(Z, se = !1, re) {
						for (let le = 0; le < this.length; le++) {
							if (Z >= this.length && !se) return -1;
							if (((Z = Z % this.length), !re || re(this.element(Z)))) return Z;
							Z++;
						}
						return -1;
					}
					F(Z, se = !1, re) {
						for (let le = 0; le < this.length; le++) {
							if (Z < 0 && !se) return -1;
							if (
								((Z = (this.length + (Z % this.length)) % this.length),
								!re || re(this.element(Z)))
							)
								return Z;
							Z--;
						}
						return -1;
					}
					getFocus() {
						return this.c.get();
					}
					getFocusedElements() {
						return this.getFocus().map((Z) => this.k.element(Z));
					}
					reveal(Z, se, re = 0) {
						if (Z < 0 || Z >= this.length)
							throw new b.$Bib(this.A, `Invalid index ${Z}`);
						const le = this.k.getScrollTop(),
							oe = this.k.elementTop(Z),
							ae = this.k.elementHeight(Z);
						if ((0, f.$pg)(se)) {
							const pe = ae - this.k.renderHeight + re;
							this.k.setScrollTop(pe * (0, p.$Zm)(se, 0, 1) + oe - re);
						} else {
							const pe = oe + ae,
								$e = le + this.k.renderHeight;
							(oe < le + re && pe >= $e) ||
								(oe < le + re || (pe >= $e && ae >= this.k.renderHeight)
									? this.k.setScrollTop(oe - re)
									: pe >= $e && this.k.setScrollTop(pe - this.k.renderHeight));
						}
					}
					getRelativeTop(Z, se = 0) {
						if (Z < 0 || Z >= this.length)
							throw new b.$Bib(this.A, `Invalid index ${Z}`);
						const re = this.k.getScrollTop(),
							le = this.k.elementTop(Z),
							oe = this.k.elementHeight(Z);
						if (le < re + se || le + oe > re + this.k.renderHeight) return null;
						const ae = oe - this.k.renderHeight + se;
						return Math.abs((re + se - le) / ae);
					}
					isDOMFocused() {
						return (0, t.$Kgb)(this.k.domNode);
					}
					getHTMLElement() {
						return this.k.domNode;
					}
					getScrollableElement() {
						return this.k.scrollableElementDomNode;
					}
					getElementID(Z) {
						return this.k.getElementDomId(Z);
					}
					getElementTop(Z) {
						return this.k.elementTop(Z);
					}
					style(Z) {
						this.q.style(Z);
					}
					G({ indexes: Z, browserEvent: se }) {
						return {
							indexes: Z,
							elements: Z.map((re) => this.k.element(re)),
							browserEvent: se,
						};
					}
					H() {
						const Z = this.c.get();
						this.k.domNode.classList.toggle("element-focused", Z.length > 0),
							this.I();
					}
					I() {
						const Z = this.c.get();
						if (Z.length > 0) {
							let se;
							this.u?.getActiveDescendantId &&
								(se = this.u.getActiveDescendantId(this.k.element(Z[0]))),
								this.k.domNode.setAttribute(
									"aria-activedescendant",
									se || this.k.getElementDomId(Z[0]),
								);
						} else this.k.domNode.removeAttribute("aria-activedescendant");
					}
					J() {
						const Z = this.d.get();
						this.k.domNode.classList.toggle("selection-none", Z.length === 0),
							this.k.domNode.classList.toggle(
								"selection-single",
								Z.length === 1,
							),
							this.k.domNode.classList.toggle(
								"selection-multiple",
								Z.length > 1,
							);
					}
					dispose() {
						this.z.fire(), this.y.dispose(), this.z.dispose();
					}
				}
				(e.List = te),
					Ne([a.$ei], te.prototype, "onDidChangeFocus", null),
					Ne([a.$ei], te.prototype, "onDidChangeSelection", null),
					Ne([a.$ei], te.prototype, "onContextMenu", null),
					Ne([a.$ei], te.prototype, "onKeyDown", null),
					Ne([a.$ei], te.prototype, "onKeyUp", null),
					Ne([a.$ei], te.prototype, "onKeyPress", null),
					Ne([a.$ei], te.prototype, "onDidFocus", null),
					Ne([a.$ei], te.prototype, "onDidBlur", null);
			},
		),
		define(
			de[1578],
			he([1, 0, 24, 33, 6, 3, 278, 7, 1512]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$8ob = void 0);
				class m {
					get templateId() {
						return this.a.templateId;
					}
					constructor(c, n) {
						(this.a = c), (this.b = n);
					}
					renderTemplate(c) {
						return { data: this.a.renderTemplate(c), disposable: E.$1c.None };
					}
					renderElement(c, n, g, p) {
						if ((g.disposable?.dispose(), !g.data)) return;
						const o = this.b();
						if (o.isResolved(c))
							return this.a.renderElement(o.get(c), c, g.data, p);
						const f = new i.$Ce(),
							b = o.resolve(c, f.token);
						(g.disposable = { dispose: () => f.cancel() }),
							this.a.renderPlaceholder(c, g.data),
							b.then((s) => this.a.renderElement(s, c, g.data, p));
					}
					disposeTemplate(c) {
						c.disposable && (c.disposable.dispose(), (c.disposable = void 0)),
							c.data && (this.a.disposeTemplate(c.data), (c.data = void 0));
					}
				}
				class r {
					constructor(c, n) {
						(this.a = c), (this.b = n);
					}
					getWidgetAriaLabel() {
						return this.b.getWidgetAriaLabel();
					}
					getAriaLabel(c) {
						const n = this.a();
						return n.isResolved(c) ? this.b.getAriaLabel(n.get(c)) : null;
					}
				}
				function u(h, c) {
					return {
						...c,
						accessibilityProvider:
							c.accessibilityProvider && new r(h, c.accessibilityProvider),
					};
				}
				class a {
					constructor(c, n, g, p, o = {}) {
						const f = () => this.model,
							b = p.map((s) => new m(s, f));
						this.a = new C.List(c, n, g, b, u(f, o));
					}
					updateOptions(c) {
						this.a.updateOptions(c);
					}
					getHTMLElement() {
						return this.a.getHTMLElement();
					}
					isDOMFocused() {
						return (0, d.$Kgb)(this.getHTMLElement());
					}
					domFocus() {
						this.a.domFocus();
					}
					get onDidFocus() {
						return this.a.onDidFocus;
					}
					get onDidBlur() {
						return this.a.onDidBlur;
					}
					get widget() {
						return this.a;
					}
					get onDidDispose() {
						return this.a.onDidDispose;
					}
					get onMouseClick() {
						return w.Event.map(
							this.a.onMouseClick,
							({ element: c, index: n, browserEvent: g }) => ({
								element: c === void 0 ? void 0 : this.b.get(c),
								index: n,
								browserEvent: g,
							}),
						);
					}
					get onMouseDblClick() {
						return w.Event.map(
							this.a.onMouseDblClick,
							({ element: c, index: n, browserEvent: g }) => ({
								element: c === void 0 ? void 0 : this.b.get(c),
								index: n,
								browserEvent: g,
							}),
						);
					}
					get onTap() {
						return w.Event.map(
							this.a.onTap,
							({ element: c, index: n, browserEvent: g }) => ({
								element: c === void 0 ? void 0 : this.b.get(c),
								index: n,
								browserEvent: g,
							}),
						);
					}
					get onPointer() {
						return w.Event.map(
							this.a.onPointer,
							({ element: c, index: n, browserEvent: g }) => ({
								element: c === void 0 ? void 0 : this.b.get(c),
								index: n,
								browserEvent: g,
							}),
						);
					}
					get onDidChangeFocus() {
						return w.Event.map(
							this.a.onDidChangeFocus,
							({ elements: c, indexes: n, browserEvent: g }) => ({
								elements: c.map((p) => this.b.get(p)),
								indexes: n,
								browserEvent: g,
							}),
						);
					}
					get onDidChangeSelection() {
						return w.Event.map(
							this.a.onDidChangeSelection,
							({ elements: c, indexes: n, browserEvent: g }) => ({
								elements: c.map((p) => this.b.get(p)),
								indexes: n,
								browserEvent: g,
							}),
						);
					}
					get onContextMenu() {
						return w.Event.map(
							this.a.onContextMenu,
							({ element: c, index: n, anchor: g, browserEvent: p }) =>
								typeof c > "u"
									? { element: c, index: n, anchor: g, browserEvent: p }
									: {
											element: this.b.get(c),
											index: n,
											anchor: g,
											browserEvent: p,
										},
						);
					}
					get model() {
						return this.b;
					}
					set model(c) {
						(this.b = c), this.a.splice(0, this.a.length, (0, t.$Vb)(c.length));
					}
					get length() {
						return this.a.length;
					}
					get scrollTop() {
						return this.a.scrollTop;
					}
					set scrollTop(c) {
						this.a.scrollTop = c;
					}
					get scrollLeft() {
						return this.a.scrollLeft;
					}
					set scrollLeft(c) {
						this.a.scrollLeft = c;
					}
					setAnchor(c) {
						this.a.setAnchor(c);
					}
					getAnchor() {
						return this.a.getAnchor();
					}
					setFocus(c) {
						this.a.setFocus(c);
					}
					focusNext(c, n) {
						this.a.focusNext(c, n);
					}
					focusPrevious(c, n) {
						this.a.focusPrevious(c, n);
					}
					focusNextPage() {
						return this.a.focusNextPage();
					}
					focusPreviousPage() {
						return this.a.focusPreviousPage();
					}
					focusLast() {
						this.a.focusLast();
					}
					focusFirst() {
						this.a.focusFirst();
					}
					getFocus() {
						return this.a.getFocus();
					}
					setSelection(c, n) {
						this.a.setSelection(c, n);
					}
					getSelection() {
						return this.a.getSelection();
					}
					getSelectedElements() {
						return this.getSelection().map((c) => this.model.get(c));
					}
					layout(c, n) {
						this.a.layout(c, n);
					}
					triggerTypeNavigation() {
						this.a.triggerTypeNavigation();
					}
					reveal(c, n) {
						this.a.reveal(c, n);
					}
					style(c) {
						this.a.style(c);
					}
					dispose() {
						this.a.dispose();
					}
				}
				e.$8ob = a;
			},
		),
		define(
			de[279],
			he([1, 0, 7, 265, 277, 203, 24, 97, 6, 3, 201, 195, 28, 277, 2255]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vob = e.Sizing = e.LayoutPriority = e.Orientation = void 0),
					(h = mt(h)),
					Object.defineProperty(e, "Orientation", {
						enumerable: !0,
						get: function () {
							return c.Orientation;
						},
					});
				const n = { separatorBorder: d.$UL.transparent };
				var g;
				(function (y) {
					(y[(y.Normal = 0)] = "Normal"),
						(y[(y.Low = 1)] = "Low"),
						(y[(y.High = 2)] = "High");
				})(g || (e.LayoutPriority = g = {}));
				class p {
					set size($) {
						this.a = $;
					}
					get size() {
						return this.a;
					}
					get cachedVisibleSize() {
						return this.b;
					}
					get visible() {
						return typeof this.b > "u";
					}
					setVisible($, v) {
						if ($ !== this.visible) {
							$
								? ((this.size = (0, u.$Zm)(
										this.b,
										this.viewMinimumSize,
										this.viewMaximumSize,
									)),
									(this.b = void 0))
								: ((this.b = typeof v == "number" ? v : this.size),
									(this.size = 0)),
								this.c.classList.toggle("visible", $);
							try {
								this.view.setVisible?.($);
							} catch (S) {
								console.error("Splitview: Failed to set visible view"),
									console.error(S);
							}
						}
					}
					get minimumSize() {
						return this.visible ? this.view.minimumSize : 0;
					}
					get viewMinimumSize() {
						return this.view.minimumSize;
					}
					get maximumSize() {
						return this.visible ? this.view.maximumSize : 0;
					}
					get viewMaximumSize() {
						return this.view.maximumSize;
					}
					get priority() {
						return this.view.priority;
					}
					get proportionalLayout() {
						return this.view.proportionalLayout ?? !0;
					}
					get snap() {
						return !!this.view.snap;
					}
					set enabled($) {
						this.c.style.pointerEvents = $ ? "" : "none";
					}
					constructor($, v, S, I) {
						(this.c = $),
							(this.view = v),
							(this.d = I),
							(this.b = void 0),
							typeof S == "number"
								? ((this.a = S), (this.b = void 0), $.classList.add("visible"))
								: ((this.a = 0), (this.b = S.cachedVisibleSize));
					}
					layout($, v) {
						this.layoutContainer($);
						try {
							this.view.layout(this.size, $, v);
						} catch (S) {
							console.error("Splitview: Failed to layout view"),
								console.error(S);
						}
					}
					dispose() {
						this.d.dispose();
					}
				}
				class o extends p {
					layoutContainer($) {
						(this.c.style.top = `${$}px`),
							(this.c.style.height = `${this.size}px`);
					}
				}
				class f extends p {
					layoutContainer($) {
						(this.c.style.left = `${$}px`),
							(this.c.style.width = `${this.size}px`);
					}
				}
				var b;
				(function (y) {
					(y[(y.Idle = 0)] = "Idle"), (y[(y.Busy = 1)] = "Busy");
				})(b || (b = {}));
				var s;
				(function (y) {
					y.Distribute = { type: "distribute" };
					function $(I) {
						return { type: "split", index: I };
					}
					y.Split = $;
					function v(I) {
						return { type: "auto", index: I };
					}
					y.Auto = v;
					function S(I) {
						return { type: "invisible", cachedVisibleSize: I };
					}
					y.Invisible = S;
				})(s || (e.Sizing = s = {}));
				class l extends r.$1c {
					get contentSize() {
						return this.j;
					}
					get length() {
						return this.n.length;
					}
					get minimumSize() {
						return this.n.reduce(($, v) => $ + v.minimumSize, 0);
					}
					get maximumSize() {
						return this.length === 0
							? Number.POSITIVE_INFINITY
							: this.n.reduce(($, v) => $ + v.maximumSize, 0);
					}
					get orthogonalStartSash() {
						return this.F;
					}
					get orthogonalEndSash() {
						return this.G;
					}
					get startSnappingEnabled() {
						return this.H;
					}
					get endSnappingEnabled() {
						return this.I;
					}
					set orthogonalStartSash($) {
						for (const v of this.sashItems) v.sash.orthogonalStartSash = $;
						this.F = $;
					}
					set orthogonalEndSash($) {
						for (const v of this.sashItems) v.sash.orthogonalEndSash = $;
						this.G = $;
					}
					get sashes() {
						return this.sashItems.map(($) => $.sash);
					}
					set startSnappingEnabled($) {
						this.H !== $ && ((this.H = $), this.X());
					}
					set endSnappingEnabled($) {
						this.I !== $ && ((this.I = $), this.X());
					}
					constructor($, v = {}) {
						super(),
							(this.g = 0),
							(this.j = 0),
							(this.m = void 0),
							(this.n = []),
							(this.sashItems = []),
							(this.t = b.Idle),
							(this.z = this.D(new m.$re())),
							(this.C = this.D(new m.$re())),
							(this.H = !0),
							(this.I = !0),
							(this.onDidSashChange = this.z.event),
							(this.onDidSashReset = this.C.event),
							(this.orientation = v.orientation ?? w.Orientation.VERTICAL),
							(this.u = v.inverseAltBehavior ?? !1),
							(this.w = v.proportionalLayout ?? !0),
							(this.y = v.getSashOrthogonalSize),
							(this.el = document.createElement("div")),
							this.el.classList.add("monaco-split-view2"),
							this.el.classList.add(
								this.orientation === w.Orientation.VERTICAL
									? "vertical"
									: "horizontal",
							),
							$.appendChild(this.el),
							(this.a = (0, t.$fhb)(this.el, (0, t.$)(".sash-container"))),
							(this.b = (0, t.$)(".split-view-container")),
							(this.c = this.D(
								new a.$KK({
									forceIntegerValues: !0,
									smoothScrollDuration: 125,
									scheduleAtNextAnimationFrame: (I) =>
										(0, t.$hgb)((0, t.getWindow)(this.el), I),
								}),
							)),
							(this.f = this.D(
								new E.$6hb(
									this.b,
									{
										vertical:
											this.orientation === w.Orientation.VERTICAL
												? (v.scrollbarVisibility ?? a.ScrollbarVisibility.Auto)
												: a.ScrollbarVisibility.Hidden,
										horizontal:
											this.orientation === w.Orientation.HORIZONTAL
												? (v.scrollbarVisibility ?? a.ScrollbarVisibility.Auto)
												: a.ScrollbarVisibility.Hidden,
									},
									this.c,
								),
							));
						const S = this.D(new i.$mib(this.b, "scroll")).event;
						this.D(
							S((I) => {
								const T = this.f.getScrollPosition(),
									P =
										Math.abs(this.b.scrollLeft - T.scrollLeft) <= 1
											? void 0
											: this.b.scrollLeft,
									k =
										Math.abs(this.b.scrollTop - T.scrollTop) <= 1
											? void 0
											: this.b.scrollTop;
								(P !== void 0 || k !== void 0) &&
									this.f.setScrollPosition({ scrollLeft: P, scrollTop: k });
							}),
						),
							(this.onDidScroll = this.f.onScroll),
							this.D(
								this.onDidScroll((I) => {
									I.scrollTopChanged && (this.b.scrollTop = I.scrollTop),
										I.scrollLeftChanged && (this.b.scrollLeft = I.scrollLeft);
								}),
							),
							(0, t.$fhb)(this.el, this.f.getDomNode()),
							this.style(v.styles || n),
							v.descriptor &&
								((this.g = v.descriptor.size),
								v.descriptor.views.forEach((I, T) => {
									const P =
											h.$sg(I.visible) || I.visible
												? I.size
												: { type: "invisible", cachedVisibleSize: I.size },
										k = I.view;
									this.P(k, P, T, !0);
								}),
								(this.j = this.n.reduce((I, T) => I + T.size, 0)),
								this.J());
					}
					style($) {
						$.separatorBorder.isTransparent()
							? (this.el.classList.remove("separator-border"),
								this.el.style.removeProperty("--separator-border"))
							: (this.el.classList.add("separator-border"),
								this.el.style.setProperty(
									"--separator-border",
									$.separatorBorder.toString(),
								));
					}
					addView($, v, S = this.n.length, I) {
						this.P($, v, S, I);
					}
					removeView($, v) {
						if ($ < 0 || $ >= this.n.length)
							throw new Error("Index out of bounds");
						if (this.t !== b.Idle) throw new Error("Cant modify splitview");
						this.t = b.Busy;
						try {
							v?.type === "auto" &&
								(this.ab()
									? (v = { type: "distribute" })
									: (v = { type: "split", index: v.index }));
							const S = v?.type === "split" ? this.n[v.index] : void 0,
								I = this.n.splice($, 1)[0];
							if ((S && (S.size += I.size), this.n.length >= 1)) {
								const P = Math.max($ - 1, 0);
								this.sashItems.splice(P, 1)[0].disposable.dispose();
							}
							this.Q(), v?.type === "distribute" && this.distributeViewSizes();
							const T = I.view;
							return I.dispose(), T;
						} finally {
							this.t = b.Idle;
						}
					}
					removeAllViews() {
						if (this.t !== b.Idle) throw new Error("Cant modify splitview");
						this.t = b.Busy;
						try {
							const $ = this.n.splice(0, this.n.length);
							for (const S of $) S.dispose();
							const v = this.sashItems.splice(0, this.sashItems.length);
							for (const S of v) S.disposable.dispose();
							return this.Q(), $.map((S) => S.view);
						} finally {
							this.t = b.Idle;
						}
					}
					moveView($, v) {
						if (this.t !== b.Idle) throw new Error("Cant modify splitview");
						const S = this.getViewCachedVisibleSize($),
							I = typeof S > "u" ? this.getViewSize($) : s.Invisible(S),
							T = this.removeView($);
						this.addView(T, I, v);
					}
					swapViews($, v) {
						if (this.t !== b.Idle) throw new Error("Cant modify splitview");
						if ($ > v) return this.swapViews(v, $);
						const S = this.getViewSize($),
							I = this.getViewSize(v),
							T = this.removeView(v),
							P = this.removeView($);
						this.addView(T, S, $), this.addView(P, I, v);
					}
					isViewVisible($) {
						if ($ < 0 || $ >= this.n.length)
							throw new Error("Index out of bounds");
						return this.n[$].visible;
					}
					setViewVisible($, v) {
						if ($ < 0 || $ >= this.n.length)
							throw new Error("Index out of bounds");
						this.n[$].setVisible(v), this.S($), this.U(), this.J();
					}
					getViewCachedVisibleSize($) {
						if ($ < 0 || $ >= this.n.length)
							throw new Error("Index out of bounds");
						return this.n[$].cachedVisibleSize;
					}
					layout($, v) {
						const S = Math.max(this.g, this.j);
						if (((this.g = $), (this.h = v), this.m)) {
							let I = 0;
							for (let T = 0; T < this.n.length; T++) {
								const P = this.n[T],
									k = this.m[T];
								typeof k == "number" ? (I += k) : ($ -= P.size);
							}
							for (let T = 0; T < this.n.length; T++) {
								const P = this.n[T],
									k = this.m[T];
								typeof k == "number" &&
									I > 0 &&
									(P.size = (0, u.$Zm)(
										Math.round((k * $) / I),
										P.minimumSize,
										P.maximumSize,
									));
							}
						} else {
							const I = (0, C.$Vb)(this.n.length),
								T = I.filter((k) => this.n[k].priority === g.Low),
								P = I.filter((k) => this.n[k].priority === g.High);
							this.R(this.n.length - 1, $ - S, void 0, T, P);
						}
						this.S(), this.U();
					}
					J() {
						this.w &&
							this.j > 0 &&
							(this.m = this.n.map(($) =>
								$.proportionalLayout && $.visible ? $.size / this.j : void 0,
							));
					}
					L({ sash: $, start: v, alt: S }) {
						for (const k of this.n) k.enabled = !1;
						const I = this.sashItems.findIndex((k) => k.sash === $),
							T = (0, r.$Xc)(
								(0, t.$0fb)(this.el.ownerDocument.body, "keydown", (k) =>
									P(this.q.current, k.altKey),
								),
								(0, t.$0fb)(this.el.ownerDocument.body, "keyup", () =>
									P(this.q.current, !1),
								),
							),
							P = (k, L) => {
								const D = this.n.map((O) => O.size);
								let M = Number.NEGATIVE_INFINITY,
									N = Number.POSITIVE_INFINITY;
								if ((this.u && (L = !L), L))
									if (I === this.sashItems.length - 1) {
										const B = this.n[I];
										(M = (B.minimumSize - B.size) / 2),
											(N = (B.maximumSize - B.size) / 2);
									} else {
										const B = this.n[I + 1];
										(M = (B.size - B.maximumSize) / 2),
											(N = (B.size - B.minimumSize) / 2);
									}
								let A, R;
								if (!L) {
									const O = (0, C.$Vb)(I, -1),
										B = (0, C.$Vb)(I + 1, this.n.length),
										U = O.reduce(
											(K, J) => K + (this.n[J].minimumSize - D[J]),
											0,
										),
										z = O.reduce(
											(K, J) => K + (this.n[J].viewMaximumSize - D[J]),
											0,
										),
										F =
											B.length === 0
												? Number.POSITIVE_INFINITY
												: B.reduce(
														(K, J) => K + (D[J] - this.n[J].minimumSize),
														0,
													),
										x =
											B.length === 0
												? Number.NEGATIVE_INFINITY
												: B.reduce(
														(K, J) => K + (D[J] - this.n[J].viewMaximumSize),
														0,
													),
										H = Math.max(U, x),
										q = Math.min(F, z),
										V = this.Z(O),
										G = this.Z(B);
									if (typeof V == "number") {
										const K = this.n[V],
											J = Math.floor(K.viewMinimumSize / 2);
										A = {
											index: V,
											limitDelta: K.visible ? H - J : H + J,
											size: K.size,
										};
									}
									if (typeof G == "number") {
										const K = this.n[G],
											J = Math.floor(K.viewMinimumSize / 2);
										R = {
											index: G,
											limitDelta: K.visible ? q + J : q - J,
											size: K.size,
										};
									}
								}
								this.q = {
									start: k,
									current: k,
									index: I,
									sizes: D,
									minDelta: M,
									maxDelta: N,
									alt: L,
									snapBefore: A,
									snapAfter: R,
									disposable: T,
								};
							};
						P(v, S);
					}
					M({ current: $ }) {
						const {
							index: v,
							start: S,
							sizes: I,
							alt: T,
							minDelta: P,
							maxDelta: k,
							snapBefore: L,
							snapAfter: D,
						} = this.q;
						this.q.current = $;
						const M = $ - S,
							N = this.R(v, M, I, void 0, void 0, P, k, L, D);
						if (T) {
							const A = v === this.sashItems.length - 1,
								R = this.n.map((x) => x.size),
								O = A ? v : v + 1,
								B = this.n[O],
								U = B.size - B.maximumSize,
								z = B.size - B.minimumSize,
								F = A ? v - 1 : v + 1;
							this.R(F, -N, R, void 0, void 0, U, z);
						}
						this.S(), this.U();
					}
					N($) {
						this.z.fire($), this.q.disposable.dispose(), this.J();
						for (const v of this.n) v.enabled = !0;
					}
					O($, v) {
						const S = this.n.indexOf($);
						S < 0 ||
							S >= this.n.length ||
							((v = typeof v == "number" ? v : $.size),
							(v = (0, u.$Zm)(v, $.minimumSize, $.maximumSize)),
							this.u && S > 0
								? (this.R(S - 1, Math.floor(($.size - v) / 2)),
									this.S(),
									this.U())
								: (($.size = v), this.Q([S], void 0)));
					}
					resizeView($, v) {
						if (!($ < 0 || $ >= this.n.length)) {
							if (this.t !== b.Idle) throw new Error("Cant modify splitview");
							this.t = b.Busy;
							try {
								const S = (0, C.$Vb)(this.n.length).filter((k) => k !== $),
									I = [...S.filter((k) => this.n[k].priority === g.Low), $],
									T = S.filter((k) => this.n[k].priority === g.High),
									P = this.n[$];
								(v = Math.round(v)),
									(v = (0, u.$Zm)(
										v,
										P.minimumSize,
										Math.min(P.maximumSize, this.g),
									)),
									(P.size = v),
									this.Q(I, T);
							} finally {
								this.t = b.Idle;
							}
						}
					}
					isViewExpanded($) {
						if ($ < 0 || $ >= this.n.length) return !1;
						for (const v of this.n)
							if (v !== this.n[$] && v.size > v.minimumSize) return !1;
						return !0;
					}
					distributeViewSizes() {
						const $ = [];
						let v = 0;
						for (const k of this.n)
							k.maximumSize - k.minimumSize > 0 && ($.push(k), (v += k.size));
						const S = Math.floor(v / $.length);
						for (const k of $)
							k.size = (0, u.$Zm)(S, k.minimumSize, k.maximumSize);
						const I = (0, C.$Vb)(this.n.length),
							T = I.filter((k) => this.n[k].priority === g.Low),
							P = I.filter((k) => this.n[k].priority === g.High);
						this.Q(T, P);
					}
					getViewSize($) {
						return $ < 0 || $ >= this.n.length ? -1 : this.n[$].size;
					}
					P($, v, S = this.n.length, I) {
						if (this.t !== b.Idle) throw new Error("Cant modify splitview");
						this.t = b.Busy;
						try {
							const T = (0, t.$)(".split-view-view");
							S === this.n.length
								? this.b.appendChild(T)
								: this.b.insertBefore(T, this.b.children.item(S));
							const P = $.onDidChange((A) => this.O(M, A)),
								k = (0, r.$Yc)(() => T.remove()),
								L = (0, r.$Xc)(P, k);
							let D;
							typeof v == "number"
								? (D = v)
								: (v.type === "auto" &&
										(this.ab()
											? (v = { type: "distribute" })
											: (v = { type: "split", index: v.index })),
									v.type === "split"
										? (D = this.getViewSize(v.index) / 2)
										: v.type === "invisible"
											? (D = { cachedVisibleSize: v.cachedVisibleSize })
											: (D = $.minimumSize));
							const M =
								this.orientation === w.Orientation.VERTICAL
									? new o(T, $, D, L)
									: new f(T, $, D, L);
							if ((this.n.splice(S, 0, M), this.n.length > 1)) {
								const A = {
										orthogonalStartSash: this.orthogonalStartSash,
										orthogonalEndSash: this.orthogonalEndSash,
									},
									R =
										this.orientation === w.Orientation.VERTICAL
											? new w.Sash(
													this.a,
													{
														getHorizontalSashTop: (K) => this.Y(K),
														getHorizontalSashWidth: this.y,
													},
													{ ...A, orientation: w.Orientation.HORIZONTAL },
												)
											: new w.Sash(
													this.a,
													{
														getVerticalSashLeft: (K) => this.Y(K),
														getVerticalSashHeight: this.y,
													},
													{ ...A, orientation: w.Orientation.VERTICAL },
												),
									O =
										this.orientation === w.Orientation.VERTICAL
											? (K) => ({
													sash: R,
													start: K.startY,
													current: K.currentY,
													alt: K.altKey,
												})
											: (K) => ({
													sash: R,
													start: K.startX,
													current: K.currentX,
													alt: K.altKey,
												}),
									U = m.Event.map(R.onDidStart, O)(this.L, this),
									F = m.Event.map(R.onDidChange, O)(this.M, this),
									H = m.Event.map(R.onDidEnd, () =>
										this.sashItems.findIndex((K) => K.sash === R),
									)(this.N, this),
									q = R.onDidReset(() => {
										const K = this.sashItems.findIndex((ie) => ie.sash === R),
											J = (0, C.$Vb)(K, -1),
											W = (0, C.$Vb)(K + 1, this.n.length),
											X = this.Z(J),
											Y = this.Z(W);
										(typeof X == "number" && !this.n[X].visible) ||
											(typeof Y == "number" && !this.n[Y].visible) ||
											this.C.fire(K);
									}),
									V = (0, r.$Xc)(U, F, H, q, R),
									G = { sash: R, disposable: V };
								this.sashItems.splice(S - 1, 0, G);
							}
							T.appendChild($.element);
							let N;
							typeof v != "number" && v.type === "split" && (N = [v.index]),
								I || this.Q([S], N),
								!I &&
									typeof v != "number" &&
									v.type === "distribute" &&
									this.distributeViewSizes();
						} finally {
							this.t = b.Idle;
						}
					}
					Q($, v) {
						const S = this.n.reduce((I, T) => I + T.size, 0);
						this.R(this.n.length - 1, this.g - S, void 0, $, v),
							this.S(),
							this.U(),
							this.J();
					}
					R(
						$,
						v,
						S = this.n.map((M) => M.size),
						I,
						T,
						P = Number.NEGATIVE_INFINITY,
						k = Number.POSITIVE_INFINITY,
						L,
						D,
					) {
						if ($ < 0 || $ >= this.n.length) return 0;
						const M = (0, C.$Vb)($, -1),
							N = (0, C.$Vb)($ + 1, this.n.length);
						if (T) for (const G of T) (0, C.$2b)(M, G), (0, C.$2b)(N, G);
						if (I) for (const G of I) (0, C.$3b)(M, G), (0, C.$3b)(N, G);
						const A = M.map((G) => this.n[G]),
							R = M.map((G) => S[G]),
							O = N.map((G) => this.n[G]),
							B = N.map((G) => S[G]),
							U = M.reduce((G, K) => G + (this.n[K].minimumSize - S[K]), 0),
							z = M.reduce((G, K) => G + (this.n[K].maximumSize - S[K]), 0),
							F =
								N.length === 0
									? Number.POSITIVE_INFINITY
									: N.reduce((G, K) => G + (S[K] - this.n[K].minimumSize), 0),
							x =
								N.length === 0
									? Number.NEGATIVE_INFINITY
									: N.reduce((G, K) => G + (S[K] - this.n[K].maximumSize), 0),
							H = Math.max(U, x, P),
							q = Math.min(F, z, k);
						let V = !1;
						if (L) {
							const G = this.n[L.index],
								K = v >= L.limitDelta;
							(V = K !== G.visible), G.setVisible(K, L.size);
						}
						if (!V && D) {
							const G = this.n[D.index],
								K = v < D.limitDelta;
							(V = K !== G.visible), G.setVisible(K, D.size);
						}
						if (V) return this.R($, v, S, I, T, P, k);
						v = (0, u.$Zm)(v, H, q);
						for (let G = 0, K = v; G < A.length; G++) {
							const J = A[G],
								W = (0, u.$Zm)(R[G] + K, J.minimumSize, J.maximumSize),
								X = W - R[G];
							(K -= X), (J.size = W);
						}
						for (let G = 0, K = v; G < O.length; G++) {
							const J = O[G],
								W = (0, u.$Zm)(B[G] - K, J.minimumSize, J.maximumSize),
								X = W - B[G];
							(K += X), (J.size = W);
						}
						return v;
					}
					S($) {
						const v = this.n.reduce((k, L) => k + L.size, 0);
						let S = this.g - v;
						const I = (0, C.$Vb)(this.n.length - 1, -1),
							T = I.filter((k) => this.n[k].priority === g.Low),
							P = I.filter((k) => this.n[k].priority === g.High);
						for (const k of P) (0, C.$2b)(I, k);
						for (const k of T) (0, C.$3b)(I, k);
						typeof $ == "number" && (0, C.$3b)(I, $);
						for (let k = 0; S !== 0 && k < I.length; k++) {
							const L = this.n[I[k]],
								D = (0, u.$Zm)(L.size + S, L.minimumSize, L.maximumSize),
								M = D - L.size;
							(S -= M), (L.size = D);
						}
					}
					U() {
						this.j = this.n.reduce((v, S) => v + S.size, 0);
						let $ = 0;
						for (const v of this.n) v.layout($, this.h), ($ += v.size);
						this.sashItems.forEach((v) => v.sash.layout()), this.X(), this.W();
					}
					W() {
						this.orientation === w.Orientation.VERTICAL
							? this.f.setScrollDimensions({
									height: this.g,
									scrollHeight: this.j,
								})
							: this.f.setScrollDimensions({
									width: this.g,
									scrollWidth: this.j,
								});
					}
					X() {
						let $ = !1;
						const v = this.n.map((L) => ($ = L.size - L.minimumSize > 0 || $));
						$ = !1;
						const S = this.n.map((L) => ($ = L.maximumSize - L.size > 0 || $)),
							I = [...this.n].reverse();
						$ = !1;
						const T = I.map(
							(L) => ($ = L.size - L.minimumSize > 0 || $),
						).reverse();
						$ = !1;
						const P = I.map(
							(L) => ($ = L.maximumSize - L.size > 0 || $),
						).reverse();
						let k = 0;
						for (let L = 0; L < this.sashItems.length; L++) {
							const { sash: D } = this.sashItems[L],
								M = this.n[L];
							k += M.size;
							const N = !(v[L] && P[L + 1]),
								A = !(S[L] && T[L + 1]);
							if (N && A) {
								const R = (0, C.$Vb)(L, -1),
									O = (0, C.$Vb)(L + 1, this.n.length),
									B = this.Z(R),
									U = this.Z(O),
									z = typeof B == "number" && !this.n[B].visible,
									F = typeof U == "number" && !this.n[U].visible;
								z && T[L] && (k > 0 || this.startSnappingEnabled)
									? (D.state = w.SashState.AtMinimum)
									: F && v[L] && (k < this.j || this.endSnappingEnabled)
										? (D.state = w.SashState.AtMaximum)
										: (D.state = w.SashState.Disabled);
							} else
								N && !A
									? (D.state = w.SashState.AtMinimum)
									: !N && A
										? (D.state = w.SashState.AtMaximum)
										: (D.state = w.SashState.Enabled);
						}
					}
					Y($) {
						let v = 0;
						for (let S = 0; S < this.sashItems.length; S++)
							if (((v += this.n[S].size), this.sashItems[S].sash === $))
								return v;
						return 0;
					}
					Z($) {
						for (const v of $) {
							const S = this.n[v];
							if (S.visible && S.snap) return v;
						}
						for (const v of $) {
							const S = this.n[v];
							if (S.visible && S.maximumSize - S.minimumSize > 0) return;
							if (!S.visible && S.snap) return v;
						}
					}
					ab() {
						let $, v;
						for (const S of this.n)
							if (
								(($ = $ === void 0 ? S.size : Math.min($, S.size)),
								(v = v === void 0 ? S.size : Math.max(v, S.size)),
								v - $ > 2)
							)
								return !1;
						return !0;
					}
					dispose() {
						this.q?.disposable.dispose(),
							(0, r.$Vc)(this.n),
							(this.n = []),
							this.sashItems.forEach(($) => $.disposable.dispose()),
							(this.sashItems = []),
							super.dispose();
					}
				}
				e.$vob = l;
			},
		),
		