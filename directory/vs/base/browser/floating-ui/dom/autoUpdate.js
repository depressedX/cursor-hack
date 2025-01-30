import '../../../../../require.js';
import '../../../../../exports.js';
import './utils/getBoundingClientRect.js';
import './utils/getOverflowAncestors.js';
import './utils/is.js';
import '../../dom.js';
define(
			de[2663],
			he([1, 0, 663, 1163, 324, 7]),
			function (ce /*require*/,
 e /*exports*/,
 t /*getBoundingClientRect*/,
 i /*getOverflowAncestors*/,
 w /*is*/,
 E /*dom*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Bmb = C),
					(E = mt(E));
				function C(d, m, r, u = {}) {
					const {
							ancestorScroll: a = !0,
							ancestorResize: h = !0,
							elementResize: c = !0,
							animationFrame: n = !1,
						} = u,
						g =
							a || h
								? [
										...((0, w.$hmb)(d)
											? (0, i.$Amb)(d)
											: d.contextElement
												? (0, i.$Amb)(d.contextElement)
												: []),
										...(0, i.$Amb)(m),
									]
								: [];
					g.forEach((s) => {
						const l = !(0, w.$hmb)(s) && s.toString().includes("V");
						a && (!n || l) && s.addEventListener("scroll", r, { passive: !0 });
						const y = h && s.addEventListener("resize", r);
					});
					let p = null;
					if (c) {
						p = new ResizeObserver(() => {
							r();
						});
						const s = (0, w.$hmb)(d) && !n && p.observe(d);
						!(0, w.$hmb)(d) &&
							d.contextElement &&
							!n &&
							p.observe(d.contextElement),
							p.observe(m);
					}
					let o,
						f = n ? (0, t.$wmb)(d) : null;
					n && b();
					function b() {
						const s = (0, t.$wmb)(d);
						f &&
							(s.x !== f.x ||
								s.y !== f.y ||
								s.width !== f.width ||
								s.height !== f.height) &&
							r(),
							(f = s),
							(o = E.getWindow(m).requestAnimationFrame(b));
					}
					return (
						r(),
						() => {
							g.forEach((s) => {
								const l = a && s.removeEventListener("scroll", r),
									y = h && s.removeEventListener("resize", r);
							}),
								p?.disconnect(),
								(p = null),
								n && E.getWindow(m).cancelAnimationFrame(o);
						}
					);
				}
			},
		),
		