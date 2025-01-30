import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../utils/api.js';
import '../../../../../external/solid/solid.js';
import '../utils/api.js';
import './popper-context.js';
define(
			de[2642],
			he([1, 0, 2, 2, 2, 2, 2, 115, 13, 115, 896]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*api*/,
 m /*solid*/,
 r /*api*/,
 u /*popper-context*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Elb = void 0),
					(e.$Flb = g);
				const a = (0, t.template)(
						'<svg display="block" viewBox="0 0 30 30"><g><path fill="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path><path stroke="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z">',
					),
					h = 30,
					c = h / 2,
					n = { top: 180, right: -90, bottom: 0, left: 90 };
				e.$Elb =
					"M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z";
				function g(o) {
					const f = (0, u.$Dlb)(),
						b = (0, d.$wjb)({ size: h }, o),
						[s, l] = (0, m.splitProps)(b, ["ref", "style", "children", "size"]),
						y = () => f.currentPlacement().split("-")[0],
						$ = p(f.contentRef),
						v = () => $()?.getPropertyValue("background-color") || "none",
						S = () => $()?.getPropertyValue(`border-${y()}-color`) || "none",
						I = () => $()?.getPropertyValue(`border-${y()}-width`) || "0px",
						T = () => parseInt(I()) * 2 * (h / s.size),
						P = () => `rotate(${n[y()]} ${c} ${c})`;
					return (0, i.createComponent)(
						r.$5kb,
						(0, w.mergeProps)(
							{
								as: "div",
								ref(k) {
									const L = (0, d.mergeRefs)(f.setArrowRef, s.ref);
									typeof L == "function" && L(k);
								},
								"aria-hidden": "true",
								get style() {
									return {
										position: "absolute",
										"font-size": `${s.size}px`,
										width: "1em",
										height: "1em",
										"pointer-events": "none",
										fill: v(),
										stroke: S(),
										"stroke-width": T(),
										...s.style,
									};
								},
							},
							l,
							{
								get children() {
									const k = a(),
										L = k.firstChild,
										D = L.firstChild,
										M = D.nextSibling;
									return (
										(0, C.effect)(() =>
											(0, E.setAttribute)(L, "transform", P()),
										),
										k
									);
								},
							},
						),
					);
				}
				function p(o) {
					const [f, b] = (0, m.createSignal)();
					return (
						(0, m.createEffect)(() => {
							const s = o();
							s && b((0, d.$Qjb)(s).getComputedStyle(s));
						}),
						f
					);
				}
			},
		),
		