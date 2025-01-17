import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../floating-ui/dom/dom.js';
import '../utils/api.js';
import '../../../../../external/solid/solid.js';
import './popper-context.js';
import './utils.js';
import '../../window.js';
define(
			de[2669],
			he([1, 0, 2, 2668, 115, 13, 896, 2179, 75]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Nmb = r);
				function r(u) {
					const a = (0, w.$wjb)(
							{
								getAnchorRect: (l) => l?.getBoundingClientRect(),
								placement: "bottom",
								gutter: 0,
								shift: 0,
								flip: !0,
								slide: !0,
								overlap: !1,
								sameWidth: !1,
								fitViewport: !1,
								hideWhenDetached: !1,
								detachedPadding: 0,
								arrowPadding: 4,
								overflowPadding: 8,
							},
							u,
						),
						[h, c] = (0, E.createSignal)(),
						[n, g] = (0, E.createSignal)(),
						[p, o] = (0, E.createSignal)(a.placement),
						f = () => (0, d.$zlb)(a.anchorRef(), a.getAnchorRect);
					async function b() {
						const l = f(),
							y = h(),
							$ = n();
						if (!l || !y) return;
						const v = ($?.clientHeight || 0) / 2,
							S = typeof a.gutter == "number" ? a.gutter + v : (a.gutter ?? v);
						y.style.setProperty(
							"--kb-popper-content-overflow-padding",
							`${a.overflowPadding}px`,
						),
							l.getBoundingClientRect();
						const I = [
							(0, i.offset)(({ placement: D }) => {
								const M = !!D.split("-")[1];
								return {
									mainAxis: S,
									crossAxis: M ? void 0 : a.shift,
									alignmentAxis: a.shift,
								};
							}),
						];
						if (a.flip !== !1) {
							const D = typeof a.flip == "string" ? a.flip.split(" ") : void 0;
							if (D !== void 0 && !D.every(d.$Alb))
								throw new Error(
									"`flip` expects a spaced-delimited list of placements",
								);
							I.push(
								(0, i.flip)({
									padding: a.overflowPadding,
									fallbackPlacements: D,
								}),
							);
						}
						(a.slide || a.overlap) &&
							I.push(
								(0, i.shift)({
									mainAxis: a.slide,
									crossAxis: a.overlap,
									padding: a.overflowPadding,
								}),
							),
							I.push(
								(0, i.size)({
									padding: a.overflowPadding,
									apply({ availableWidth: D, availableHeight: M, rects: N }) {
										const A = Math.round(N.reference.width);
										(D = Math.floor(D)),
											(M = Math.floor(M)),
											y.style.setProperty("--kb-popper-anchor-width", `${A}px`),
											y.style.setProperty(
												"--kb-popper-content-available-width",
												`${D}px`,
											),
											y.style.setProperty(
												"--kb-popper-content-available-height",
												`${M}px`,
											),
											a.sameWidth && (y.style.width = `${A}px`),
											a.fitViewport &&
												((y.style.maxWidth = `${D}px`),
												(y.style.maxHeight = `${M}px`));
									},
								}),
							),
							a.hideWhenDetached &&
								I.push((0, i.hide)({ padding: a.detachedPadding })),
							$ &&
								I.push((0, i.arrow)({ element: $, padding: a.arrowPadding }));
						const T = await (0, i.$Mmb)(l, y, {
							placement: a.placement,
							strategy: "absolute",
							middleware: I,
							platform: { ...i.platform, isRTL: () => !1 },
						});
						if ((o(T.placement), a.onCurrentPlacementChange?.(T.placement), !y))
							return;
						y.style.setProperty(
							"--kb-popper-content-transform-origin",
							(0, d.$Blb)(T.placement),
						);
						const P = Math.round(T.x),
							k = Math.round(T.y);
						let L;
						if (
							(a.hideWhenDetached &&
								(L = T.middlewareData.hide?.referenceHidden
									? "hidden"
									: "visible"),
							Object.assign(y.style, {
								top: "0",
								left: "0",
								transform: `translate3d(${P}px, ${k}px, 0)`,
								visibility: L,
							}),
							$ && T.middlewareData.arrow)
						) {
							const { x: D, y: M } = T.middlewareData.arrow,
								N = T.placement.split("-")[0];
							Object.assign($.style, {
								left: D != null ? `${D}px` : "",
								top: M != null ? `${M}px` : "",
								[N]: "100%",
							});
						}
					}
					(0, E.createEffect)(() => {
						const l = f(),
							y = h();
						if (!l || !y) return;
						const $ = (0, i.autoUpdate)(l, y, b, {
							elementResize: typeof ResizeObserver == "function",
						});
						(0, E.onCleanup)($);
					}),
						(0, E.createEffect)(() => {
							const l = h(),
								y = a.contentRef();
							!l ||
								!y ||
								queueMicrotask(() => {
									l.style.zIndex = m.$Bfb.getComputedStyle(y).zIndex;
								});
						});
					const s = {
						currentPlacement: p,
						contentRef: () => a.contentRef(),
						setPositionerRef: c,
						setArrowRef: g,
					};
					return (0, t.createComponent)(C.$Clb.Provider, {
						value: s,
						get children() {
							return a.children;
						},
					});
				}
			},
		);
	var Yi =
		(this && this.__exportStar) ||
		function (ce, e) {
			for (var t in ce)
				t !== "default" &&
					!Object.prototype.hasOwnProperty.call(e, t) &&
					Ns(e, ce, t);
		};
	