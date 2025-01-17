import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/solid.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/async.js';
define(
			de[1004],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 13, 7, 15]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$q$b = p);
				const c = (0, t.template)("<div><div>"),
					n = (0, t.template)("<div>");
				function g(o, f) {
					return Math.round(o.left) >= Math.round(f.left);
				}
				function p(o) {
					const [f, b] = (0, u.createSignal)([]);
					let s, l;
					const y = [],
						$ = new h.$Gh(),
						S = (0, a.$Ogb)()?.ResizeObserver,
						I = () => {
							if (!s) return;
							const T = s.getBoundingClientRect();
							$.queue(async () => {
								const P = [];
								let k = !1;
								for (let L = 0; L < y.length; L++) {
									const D = y[L];
									if (D) {
										const M = D.getBoundingClientRect(),
											N = g(M, T),
											A = (k || N) && M.width > 0;
										P.push(A), A && (k = !0);
									} else P.push(!1);
								}
								b(P);
							});
						};
					return (
						(0, u.createEffect)(() => {
							if (!s) return;
							const T = new S(() => {
								I();
							});
							T.observe(s),
								I(),
								(0, u.onCleanup)(() => {
									T.disconnect();
								});
						}),
						(0, u.createEffect)(() => {
							if (!l) return;
							const T = new S(() => {
								I();
							});
							T.observe(l),
								(0, u.onCleanup)(() => {
									T.disconnect();
								});
						}),
						(0, u.createEffect)(
							(0, u.on)(
								() => o.forceRerender,
								() => {
									I();
								},
							),
						),
						(() => {
							const T = c(),
								P = T.firstChild,
								k = s;
							typeof k == "function" ? (0, r.use)(k, T) : (s = T);
							const L = l;
							return (
								typeof L == "function" ? (0, r.use)(L, P) : (l = P),
								(0, d.spread)(
									P,
									(0, m.mergeProps)(
										{
											get style() {
												return {
													display: "flex",
													"justify-content": "flex-end",
													"justify-self": "flex-end",
													"flex-shrink": 0,
													position: "relative",
													...o.style,
												};
											},
										},
										o,
										{
											get class() {
												return o.class;
											},
										},
									),
									!1,
									!0,
								),
								(0, E.insert)(
									P,
									(0, C.createComponent)(u.For, {
										get each() {
											return o.children;
										},
										children: (D, M) =>
											(() => {
												const N = n();
												return (
													(0, r.use)((A) => {
														A && (y[M()] = A);
													}, N),
													N.style.setProperty("flex-shrink", "0"),
													N.style.setProperty("height", "100%"),
													(0, E.insert)(N, D),
													(0, w.effect)(
														(A) => {
															const R = f()[M()] ? 1 : 0,
																O = f()[M()] ? "auto" : "none",
																B =
																	f()[M()] && o.forceGap
																		? `${o.forceGap}px`
																		: void 0,
																U = o.noTransition
																	? "none"
																	: "opacity 0.1s ease-in-out";
															return (
																R !== A._v$ &&
																	((A._v$ = R) != null
																		? N.style.setProperty("opacity", R)
																		: N.style.removeProperty("opacity")),
																O !== A._v$2 &&
																	((A._v$2 = O) != null
																		? N.style.setProperty("pointer-events", O)
																		: N.style.removeProperty("pointer-events")),
																B !== A._v$3 &&
																	((A._v$3 = B) != null
																		? N.style.setProperty("margin-left", B)
																		: N.style.removeProperty("margin-left")),
																U !== A._v$4 &&
																	((A._v$4 = U) != null
																		? N.style.setProperty("transition", U)
																		: N.style.removeProperty("transition")),
																A
															);
														},
														{
															_v$: void 0,
															_v$2: void 0,
															_v$3: void 0,
															_v$4: void 0,
														},
													),
													N
												);
											})(),
									}),
								),
								(0, w.effect)((D) =>
									(0, i.style)(
										T,
										{
											overflow: "hidden",
											display: "flex",
											"justify-content": "flex-end",
											"align-items": "center",
											position: "relative",
											...o.outerContainerStyle,
										},
										D,
									),
								),
								T
							);
						})()
					);
				}
			},
		),
		