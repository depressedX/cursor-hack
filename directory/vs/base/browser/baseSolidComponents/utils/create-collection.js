define(de[2614], he([1, 0, 369, 302, 13]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$zkb = C),
				(e.$Akb = d),
				(e.$Bkb = m);
			const E = new WeakMap();
			function C(r) {
				let u = E.get(r);
				if (u != null) return u;
				u = 0;
				for (const a of r) a.type === "item" && u++;
				return E.set(r, u), u;
			}
			function d(r, u = []) {
				const a = m({
						dataSource: (0, i.$_jb)(r.dataSource),
						getKey: (0, i.$_jb)(r.getKey),
						getTextValue: (0, i.$_jb)(r.getTextValue),
						getDisabled: (0, i.$_jb)(r.getDisabled),
						getSectionChildren: (0, i.$_jb)(r.getSectionChildren),
					}),
					[h, c] = (0, w.createSignal)(r.factory(a));
				return (
					(0, w.createEffect)(
						(0, w.on)(
							[
								() => (0, i.$_jb)(r.dataSource),
								() => (0, i.$_jb)(r.getKey),
								() => (0, i.$_jb)(r.getTextValue),
								() => (0, i.$_jb)(r.getDisabled),
								() => (0, i.$_jb)(r.getSectionChildren),
								() => r.factory,
								...u,
							],
							([n, g, p, o, f, b]) => {
								const s = m({
									dataSource: n,
									getKey: g,
									getTextValue: p,
									getDisabled: o,
									getSectionChildren: f,
								});
								c(() => b(s));
							},
							{ defer: !0 },
						),
					),
					h
				);
			}
			function m(r) {
				let u = r.startIndex ?? 0;
				const a = r.startLevel ?? 0,
					h = [],
					c = (o) => {
						const f = r.getKey ?? "key",
							b = (0, t.$zjb)(f) ? o[f] : f(o);
						return b != null ? String(b) : "";
					},
					n = (o) => {
						const f = r.getTextValue ?? "textValue",
							b = (0, t.$zjb)(f) ? o[f] : f(o);
						return b != null ? String(b) : "";
					},
					g = (o) => {
						const f = r.getDisabled ?? "disabled";
						return ((0, t.$zjb)(f) ? o[f] : f(o)) ?? !1;
					},
					p = (o) =>
						(0, t.$zjb)(r.getSectionChildren)
							? o[r.getSectionChildren]
							: r.getSectionChildren?.(o);
				for (const o of r.dataSource) {
					if ((0, t.$zjb)(o) || (0, t.$xjb)(o)) {
						h.push({
							type: "item",
							rawValue: o,
							key: String(o),
							textValue: String(o),
							disabled: g(o),
							level: a,
							index: u,
						}),
							u++;
						continue;
					}
					if (p(o) != null) {
						h.push({
							type: "section",
							rawValue: o,
							key: "",
							textValue: "",
							disabled: !1,
							level: a,
							index: u,
						}),
							u++;
						const f = p(o) ?? [];
						if (f.length > 0) {
							const b = m({
								dataSource: f,
								getKey: r.getKey,
								getTextValue: r.getTextValue,
								getDisabled: r.getDisabled,
								getSectionChildren: r.getSectionChildren,
								startIndex: u,
								startLevel: a + 1,
							});
							h.push(...b), (u += b.length);
						}
					} else
						h.push({
							type: "item",
							rawValue: o,
							key: c(o),
							textValue: n(o),
							disabled: g(o),
							level: a,
							index: u,
						}),
							u++;
				}
				return h;
			}
		}),
		define(
			de[2615],
			he([1, 0, 369, 302, 13, 897]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$skb = void 0),
					(e.$tkb = C),
					(e.$ukb = d),
					(e.$vkb = m),
					(e.$wkb = r),
					(e.$xkb = a),
					(e.$ykb = p),
					(e.$skb = (0, w.createContext)());
				function C() {
					return (0, w.useContext)(e.$skb);
				}
				function d() {
					const o = C();
					if (o === void 0)
						throw new Error(
							"[kobalte]: `useDomCollectionContext` must be used within a `DomCollectionProvider` component",
						);
					return o;
				}
				function m(o) {
					const f = d(),
						b = (0, t.$wjb)({ shouldRegisterItem: !0 }, o);
					(0, w.createEffect)(() => {
						if (!b.shouldRegisterItem) return;
						const s = f.registerItem(b.getItem());
						(0, w.onCleanup)(s);
					});
				}
				function r(o = {}) {
					const [f, b] = (0, E.$qkb)({
						value: () => (0, i.$_jb)(o.items),
						onChange: (y) => o.onItemsChange?.(y),
					});
					p(f, b);
					const s = (y) => (
						b(($) => {
							const v = a($, y);
							return (0, t.$Mjb)($, y, v);
						}),
						() => {
							b(($) => {
								const v = $.filter((S) => S.ref() !== y.ref());
								return $.length === v.length ? $ : v;
							});
						}
					);
					return {
						DomCollectionProvider: (y) =>
							(0, w.createComponent)(e.$skb.Provider, {
								value: { registerItem: s },
								get children() {
									return y.children;
								},
							}),
					};
				}
				function u(o, f) {
					return !!(
						f.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_PRECEDING
					);
				}
				function a(o, f) {
					const b = f.ref();
					if (!b) return -1;
					let s = o.length;
					if (!s) return -1;
					for (; s--; ) {
						const l = o[s]?.ref();
						if (l && u(l, b)) return s + 1;
					}
					return 0;
				}
				function h(o) {
					const f = o.map((s, l) => [l, s]);
					let b = !1;
					return (
						f.sort(([s, l], [y, $]) => {
							const v = l.ref(),
								S = $.ref();
							return v === S || !v || !S
								? 0
								: u(v, S)
									? (s > y && (b = !0), -1)
									: (s < y && (b = !0), 1);
						}),
						b ? f.map(([s, l]) => l) : o
					);
				}
				function c(o, f) {
					const b = h(o);
					o !== b && f(b);
				}
				function n(o) {
					const f = o[0],
						b = o[o.length - 1]?.ref();
					let s = f?.ref()?.parentElement;
					for (; s; ) {
						if (b && s.contains(b)) return s;
						s = s.parentElement;
					}
					return (0, t.$Rjb)(s).body;
				}
				function g(o, f) {
					(0, w.createEffect)(() => {
						const b = setTimeout(() => {
							c(o(), f);
						});
						(0, w.onCleanup)(() => clearTimeout(b));
					});
				}
				function p(o, f) {
					if (typeof IntersectionObserver != "function") {
						g(o, f);
						return;
					}
					let b = [];
					(0, w.createEffect)(() => {
						const s = () => {
								const $ = !!b.length;
								(b = o()), $ && c(o(), f);
							},
							l = n(o()),
							y = new IntersectionObserver(s, { root: l });
						o().forEach(($) => {
							const v = $.ref();
							v && y.observe(v);
						}),
							(0, w.onCleanup)(() => y.disconnect());
					});
				}
			},
		),
		