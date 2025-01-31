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
import '../../../../base/browser/ui/scrollbar/scrollableElement.js';
import '../../../../base/common/scrollable.js';
import '../../controlCommon/browser/solid.js';
import '../../../../css!vs/workbench/contrib/ui/browser/scrollableDiv.js';
define(
			de[135],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 13, 7, 203, 195, 36, 2527]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*web*/,
 m /*web*/,
 r /*web*/,
 u /*solid*/,
 a /*dom*/,
 h /*scrollableElement*/,
 c /*scrollable*/,
 n /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$w0b = o),
					(e.$x0b = f),
					(e.$y0b = b),
					(a = mt(a));
				const g = (0, t.template)("<div><div>"),
					p = (0, t.template)("<div>");
				function o(s) {
					const l = s.scrollable ?? b(s.stableScrollable);
					(0, u.onCleanup)(() => {
						l.dispose();
					});
					let y,
						$,
						v = { value: void 0 };
					const S = a.$Ogb()?.ResizeObserver;
					let I = 0;
					const [T, P] = (0, u.createSignal)(void 0);
					(0, u.createEffect)(() => {
						s.scrollingDirection === "vertical"
							? P({ width: "100%", "min-height": "100%" })
							: s.scrollingDirection === "horizontal"
								? P({ height: "100%", "min-width": "100%" })
								: P(void 0);
					});
					const k = s.triggerOnHeightChange,
						L = (0, u.createMemo)(() => {
							const z = s.onScroll;
							return () => {
								if (!y) return;
								const F = y.getBoundingClientRect().height;
								let x = !0;
								F !== I ? ((I = F), (x = k ?? !1)) : N(), x && z && z();
							};
						}),
						[D, M] = (0, u.createSignal)(!1),
						N = () => {
							if (!v.value) return;
							const z = v.value.getBoundingClientRect(),
								{ scrollHeight: F } = l.getScrollDimensions(),
								{ scrollTop: x } = l.getCurrentScrollPosition();
							M(x + z.height >= F - 4);
						},
						A = () => {
							l.setScrollPositionNow({ scrollTop: l.getScrollHeight() });
						},
						R = () => {
							const z = l.getScrollHeight(),
								F = l.getScrollDimensions().height,
								x = z - F;
							l.setScrollPositionNow({ scrollTop: Math.max(0, x) });
						};
					(0, u.createEffect)(
						(0, u.on)(
							() => s.scrollToBottomTrigger,
							(z) => {
								z !== void 0 &&
									setTimeout(() => {
										s.autoScrollToBottom ? A() : R();
									}, 0);
							},
						),
					),
						l.onScroll((z) => {
							L()(),
								v.value &&
									(z.scrollTopChanged && (v.value.scrollTop = z.scrollTop),
									z.scrollLeftChanged && (v.value.scrollLeft = z.scrollLeft));
						}),
						(0, u.createEffect)(
							(0, u.on)(
								() => s.resetScrollable,
								() => {
									l.setScrollPositionNow({ scrollLeft: 0, scrollTop: 0 });
								},
							),
						),
						(0, u.createEffect)(
							(0, u.on)(
								() => s.resetScrollableSize,
								() => {
									if (!y) return;
									const z = y.parentElement;
									if (!z) return;
									const F = z.getBoundingClientRect();
									F &&
										l.setScrollDimensions(
											{ scrollWidth: F.width, scrollHeight: F.height },
											!0,
										);
								},
							),
						),
						(0, u.onMount)(() => {
							const z = new S((F) => {
								for (const x of F) {
									const { width: H, height: q } = x.contentRect;
									l.setScrollDimensions(
										{ scrollWidth: H, scrollHeight: q },
										!0,
									);
								}
							});
							y && z.observe(y),
								(0, u.onCleanup)(() => {
									z.disconnect();
								});
						}),
						(0, u.onMount)(() => {
							const z = new S((F) => {
								for (const x of F) {
									const { width: H, height: q } = x.contentRect;
									l.setScrollDimensions({ width: H, height: q }, !0),
										v.value &&
											(s.scrollingDirection === "horizontal"
												? (v.value.style.width = `${H}px`)
												: s.scrollingDirection === "vertical"
													? (v.value.style.height = `${q}px`)
													: ((v.value.style.width = `${H}px`),
														(v.value.style.height = `${q}px`)));
								}
							});
							$ && z.observe($),
								(0, u.onCleanup)(() => {
									z.disconnect();
								});
						}),
						(0, u.onMount)(() => {
							const z = new S(() => {
								const F = D();
								N(), s.autoScrollToBottom && F && A();
							});
							y && z.observe(y),
								(0, u.onCleanup)(() => {
									z.disconnect();
								});
						});
					const O = (0, u.createMemo)(() =>
							s.scrollingDirection === "both"
								? { overflow: "hidden" }
								: s.scrollingDirection === "horizontal"
									? { overflowX: "hidden", height: "100%" }
									: { overflowY: "hidden", width: "100%" },
						),
						B = (() => {
							const z = g(),
								F = z.firstChild;
							(0, d.use)((H) => (v.value = H), z),
								(0, m.spread)(
									z,
									(0, r.mergeProps)(
										{
											get style() {
												return { ...O(), ...s.contentStyle };
											},
										},
										() => s.innerContainerDivProps,
									),
									!1,
									!0,
								);
							const x = y;
							return (
								typeof x == "function" ? (0, d.use)(x, F) : (y = F),
								(0, C.insert)(F, () => s.children),
								(0, E.effect)(
									(H) => {
										const q = {
												display: "inline-block",
												...T(),
												...s.innerContainerStyle,
											},
											V = s.innerContainerClass;
										return (
											(H._v$ = (0, w.style)(F, q, H._v$)),
											V !== H._v$2 && (0, i.className)(F, (H._v$2 = V)),
											H
										);
									},
									{ _v$: void 0, _v$2: void 0 },
								),
								z
							);
						})(),
						U = new h.$7hb(
							B,
							{
								mouseWheelSmoothScroll: !1,
								...(s.nonReactiveElementOptions ?? {}),
							},
							l,
						);
					if (s.childStyle)
						for (const [z, F] of Object.entries(s.childStyle)) {
							const x = z;
							U.getDomNode().style[x] = F;
						}
					return (
						(0, u.createEffect)(() => {
							s.disableScroll
								? U.updateOptions({
										horizontal: c.ScrollbarVisibility.Hidden,
										vertical: c.ScrollbarVisibility.Hidden,
										handleMouseWheel: !1,
									})
								: U.updateOptions({
										horizontal:
											s.scrollingDirection === "horizontal" ||
											s.scrollingDirection === "both"
												? c.ScrollbarVisibility.Auto
												: void 0,
										vertical:
											s.scrollingDirection === "vertical" ||
											s.scrollingDirection === "both"
												? c.ScrollbarVisibility.Auto
												: void 0,
										handleMouseWheel: !0,
									});
						}),
						(0, u.createEffect)(() => {
							s.scrollingDirection === "horizontal"
								? ((U.getDomNode().style.height = "100%"),
									(U.getDomNode().style.width = "unset"))
								: s.scrollingDirection === "vertical"
									? ((U.getDomNode().style.width = "100%"),
										(U.getDomNode().style.height = "unset"))
									: ((U.getDomNode().style.width = "unset"),
										(U.getDomNode().style.height = "unset"));
						}),
						(0, u.createEffect)(() => {
							s.reactiveElementOptions &&
								U.updateOptions(s.reactiveElementOptions);
						}),
						(() => {
							const z = p(),
								F = $;
							return (
								typeof F == "function" ? (0, d.use)(F, z) : ($ = z),
								(0, C.insert)(z, () => U.getDomNode()),
								(0, E.effect)(
									(x) => {
										const H = `scrollable-div-container ${s.class} ${s.onlyShowScrollbarOnHover ? "show-only-on-hover" : ""}`,
											q = { ...s.style };
										return (
											H !== x._v$3 && (0, i.className)(z, (x._v$3 = H)),
											(x._v$4 = (0, w.style)(z, q, x._v$4)),
											x
										);
									},
									{ _v$3: void 0, _v$4: void 0 },
								),
								z
							);
						})()
					);
				}
				function f(s) {
					const l = (0, n.$pdc)();
					return {
						forceIntegerValues: !1,
						smoothScrollDuration: 0,
						scheduleAtNextAnimationFrame: (y) => a.$hgb(l.window, y),
						stickyScrollVertical: s ? "down" : void 0,
					};
				}
				function b(s) {
					return new c.$KK(f(s));
				}
			},
		)
