import '../../../../../require.js';
import '../../../../../exports.js';
import './utils.js';
import './solid-primitives/utils/utils.js';
import '../../../../../external/solid/solid.js';
import './create-controllable-signal.js';
define(
			de[2615],
			he([1, 0, 369, 302, 13, 897]),
			function (ce /*require*/,
 e /*exports*/,
 t /*utils*/,
 i /*utils*/,
 w /*solid*/,
 E /*create-controllable-signal*/) {
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
		