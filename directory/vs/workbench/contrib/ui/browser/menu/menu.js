import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import './hooks.js';
import '../../../../../../external/solid/solid.js';
import '../../../controlCommon/browser/solid.js';
import '../../../../../../external/solid/web.js';
import '../../../../../css!vs/workbench/contrib/ui/browser/menu/menu.js';
define(
			de[484],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 364, 13, 36, 2, 2521]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.Menu = p);
				const n = (0, t.template)("<div>"),
					g = { top: 0, left: 0, right: 0, bottom: 0, width: 0, height: 0 };
				function p(o) {
					const f = (0, h.$odc)();
					let b;
					const [s, l] = (0, u.$A0b)();
					let y = !1;
					(0, a.createEffect)(() => {
						o.reactiveCloser && y && o.close();
					}),
						(0, a.createEffect)(() => {
							(0, a.onMount)(() => {
								y = !0;
							});
						}),
						(0, a.createEffect)(() => {
							o.shouldAutoFocus && b?.focus();
						});
					const $ = () => {
						const I = f.window,
							T = o.marginToOverflowRoot ?? 2,
							P = o.marginToNonBlockingRoot ?? 2,
							k = o.anchor ?? "top-left",
							L = o.isRelative ?? !1,
							D = o.nonBlockingDirection ?? "horizontal",
							M = o.preventOverflow ?? !0,
							N = o.overflowRoot ?? I.document.body;
						if (!M) {
							l(o.position);
							return;
						}
						const A = { ...o.position },
							R = b?.getBoundingClientRect() ?? { ...g },
							O = b?.parentElement?.getBoundingClientRect() ?? { ...g };
						switch ((L && ((A.x += O.left), (A.y += O.top)), k)) {
							case "top":
								A.x -= R.width / 2;
								break;
							case "bottom":
								(A.x -= R.width / 2), (A.y -= R.height);
								break;
							case "left":
								A.y -= R.height / 2;
								break;
							case "right":
								(A.x -= R.width), (A.y -= R.height / 2);
								break;
							case "top-right":
								A.x -= R.width;
								break;
							case "bottom-left":
								A.y -= R.height;
								break;
							case "bottom-right":
								(A.x -= R.width), (A.y -= R.height);
								break;
						}
						const B = N?.getBoundingClientRect() ?? {
							top: 0,
							left: 0,
							right: I.innerWidth,
							bottom: I.innerHeight,
							width: I.innerWidth,
							height: I.innerHeight,
						};
						let U = {
							...A,
							x: Math.max(Math.min(A.x, B.right - R.width - T), T),
							y: Math.max(Math.min(A.y, B.bottom - R.height - T), T),
						};
						if (o.nonBlockingRoot) {
							const z =
								typeof o.nonBlockingRoot == "string"
									? I.document
											.querySelector(o.nonBlockingRoot)
											?.getBoundingClientRect()
									: o.nonBlockingRoot.getBoundingClientRect();
							z &&
								(D === "horizontal"
									? U.x < z.right + P
										? (U = { ...U, x: z.left - P - R.width })
										: U.x + R.width > z.left - P &&
											(U = { ...U, x: z.right + P })
									: D === "vertical" &&
										(U.y < z.bottom + P
											? (U = { ...U, y: z.top - P - R.height })
											: U.y + R.height > z.top - P &&
												(U = { ...U, y: z.bottom + P })));
						}
						L && (U = { ...U, x: U.x - O.left, y: U.y - O.top }), l(U);
					};
					(0, u.$z0b)(() => b, $),
						(0, a.createEffect)(() => {
							(0, a.on)([() => o.position], $);
						}),
						(0, a.createEffect)(() => {
							const I = o.close,
								T = (P) => {
									P.key === "Escape" && (P.preventDefault(), I());
								};
							f.window.document.addEventListener("keydown", T),
								(0, a.onCleanup)(() => {
									f.window.document.removeEventListener("keydown", T);
								});
						}),
						(0, u.$B0b)(
							() => b,
							(I) => {
								!I ||
									f.window.document
										.querySelector(o.nonBlockingRoot)
										?.contains(I.target) ||
									o.close(!0);
							},
							300,
						);
					const v = {
							"box-sizing": "border-box",
							padding: "2px",
							"border-radius": "4px",
							"background-color": "var(--vscode-settings-dropdownBackground)",
							border: "1px solid var(--vscode-settings-dropdownBorder)",
							"align-items": "stretch",
							"font-size": "10px",
							display: "flex",
							"flex-direction": "column",
							gap: "2px",
						},
						S = (() => {
							const I = n();
							return (
								(0, d.use)((T) => {
									o.setRef?.(T), (b = T);
								}, I),
								(0, m.spread)(
									I,
									(0, r.mergeProps)(o, {
										get class() {
											return (
												(o.animationType === "scale"
													? "scale-in-fast"
													: o.animationType === "fade"
														? "fade-in-fast"
														: "") + (o.class ? ` ${o.class}` : "")
											);
										},
										get style() {
											return {
												...v,
												position: o.isRelative ? "absolute" : "fixed",
												visibility: s() ? "visible" : "hidden",
												...(s() && { top: `${s().y}px`, left: `${s().x}px` }),
												width:
													typeof o.width == "number" ? `${o.width}px` : o.width,
												height:
													typeof o.height == "number"
														? `${o.height}px`
														: o.height,
												"z-index": 100 + (o.zIndexModifier ?? 0),
												"transform-origin": (o.anchor ?? "top-left").replace(
													"-",
													" ",
												),
												"box-shadow": "2px 4px 10px 0px rgba(89, 89, 89, 0.10)",
												...(typeof o.style == "string" ? {} : (o.style ?? {})),
											};
										},
									}),
									!1,
									!0,
								),
								(0, C.insert)(I, () => o.children),
								I
							);
						})();
					return [
						(0, i.createComponent)(a.Show, {
							get when() {
								return o.shouldUseBackdrop ?? !1;
							},
							get children() {
								const I = n();
								return (
									I.addEventListener("click", () => o.close()),
									(0, E.effect)((T) =>
										(0, w.style)(
											I,
											{
												"z-index": 100 + (o.zIndexModifier ?? 0) - 1,
												position: "fixed",
												top: 0,
												left: 0,
												bottom: 0,
												right: 0,
												...(o.shouldShadeOverlay
													? { "background-color": "rgba(0, 0, 0, 0.3)" }
													: {}),
											},
											T,
										),
									),
									I
								);
							},
						}),
						(0, i.createComponent)(a.Show, {
							get when() {
								return o.shouldMountInPortal;
							},
							fallback: S,
							get children() {
								return (0, i.createComponent)(c.Portal, {
									get mount() {
										return f.portalElement;
									},
									children: S,
								});
							},
						}),
					];
				}
			},
		),
		