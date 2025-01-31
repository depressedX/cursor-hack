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
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/platform.js';
import '../../../controlCommon/browser/solid.js';
import '../highlightedLabel/HighlightedLabel.js';
import '../menu/hooks.js';
import '../menu/menu.js';
import '../scrollableDiv.js';
import '../../../composer/browser/hooks/useAutoVerticalScroll.js';
import '../../../../../base/common/async.js';
import '../loadingSpinner/loadingSpinner.js';
import '../../../../../css!vs/workbench/contrib/ui/browser/pickerMenu/pickerMenu2.js';
define(
			de[1982],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 12, 36, 818, 364, 484, 135, 794,
				15, 295, 2526,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*web*/,
				i /*web*/,
				w /*web*/,
				E /*web*/,
				C /*web*/,
				d /*web*/,
				m /*web*/,
				r /*web*/,
				u /*web*/,
				a /*solid*/,
				h /*platform*/,
				c /*solid*/,
				n /*HighlightedLabel*/,
				g /*hooks*/,
				p /*menu*/,
				o /*scrollableDiv*/,
				f /*useAutoVerticalScroll*/,
				b /*async*/,
				s /*loadingSpinner*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$ubc = L);
				const l = (0, t.template)(
						'<div><input placeholder="Search files by name">',
					),
					y = (0, t.template)('<div class="picker-menu-section-header">Added'),
					$ = (0, t.template)('<div class="picker-menu-section-header">'),
					v = (0, t.template)("<div><div>"),
					S = (0, t.template)('<div class="error-message">'),
					I = (0, t.template)(
						'<div><div class="picker-menu-item-content"><span class="picker-menu-item-title"></span><span class="picker-menu-item-subtitle">',
					),
					[T, P] = (0, a.createSignal)(null),
					k = (D) => {
						const M = (0, c.$odc)(),
							[N, A, R] = (0, g.$A0b)(),
							[O, B] = (0, a.createSignal)(!1);
						return (
							(0, a.onMount)(() => {
								setTimeout(() => {
									B(!0);
								}, 100);
							}),
							(0, a.createEffect)(() => {
								if (
									!O() ||
									!D.items[D.hoveredIndex ?? D.selectedIndex]?.renderPreview
								) {
									A(null);
									return;
								}
								const U = D.optionsListRef?.getBoundingClientRect();
								if (!U) {
									A(null);
									return;
								}
								const z = D.hoveredIndex ?? D.selectedIndex,
									F = D.pickerId;
								queueMicrotask(() => {
									const x = M.window.document.getElementById(`${F}-item-${z}`);
									if (!x) {
										R();
										return;
									}
									const H = x.getBoundingClientRect();
									A({ x: U.right + 4, y: H.top - 1 });
								});
							}),
							(0, r.createComponent)(a.Show, {
								get when() {
									return (
										(0, u.memo)(
											() =>
												!!(
													O() &&
													D.items[D.hoveredIndex ?? D.selectedIndex]
														?.renderPreview
												),
										)() && N()
									);
								},
								get children() {
									return (0, r.createComponent)(p.Menu, {
										get position() {
											return N();
										},
										close: () => {},
										width: "auto",
										get nonBlockingRoot() {
											return `#${D.pickerId}`;
										},
										nonBlockingDirection: "horizontal",
										animationType: "fade",
										zIndexModifier: 2,
										shouldMountInPortal: !0,
										style: {
											"border-radius": "2px",
											padding: "0px",
											"background-color": "var(--vscode-quickInput-background)",
											color: "var(--vscode-quickInput-foreground)",
											border: "1px solid var(--vscode-widget-border)",
											"box-shadow": "0 0 4px 1px var(--vscode-widget-shadow)",
											"max-width": "300px",
										},
										get children() {
											return D.items[
												D.hoveredIndex ?? D.selectedIndex
											]?.renderPreview?.();
										},
									});
								},
							})
						);
					};
				function L(D) {
					const M = (0, c.$odc)();
					let N;
					const A = "picker-menu-" + Date.now(),
						R = (0, o.$y0b)();
					let O;
					const [B, U] = (0, a.createSignal)(""),
						[z] = (0, a.createSignal)(new b.$Jh(200));
					(0, f.useAutoVerticalScroll)(
						R,
						() => O,
						() => `${A}-item-${D.selectedIndex}`,
						() => [D.selectedIndex],
						{ paddingToEdge: 24 },
					);
					const F = (J) => {
							D.isLoading ||
								(D.onItemAdd(J),
								D.onFill &&
									D.items.filter((W) => W.isAdded).length === 1 &&
									D.onFill());
						},
						x = (J) => {
							D.isLoading ||
								(D.onItemRemove(J),
								D.onEmpty &&
									D.items.filter((W) => W.isAdded).length === 0 &&
									D.onEmpty());
						},
						H = (J) => {
							D.setSelectedIndex(0), D.close(J);
						},
						q = (J) => {
							if (D.isLoading) return;
							const W = D.items.length,
								X = G().length,
								Y = h.$m ? J.ctrlKey && !J.metaKey : J.metaKey && !J.ctrlKey;
							if ((J.ctrlKey || J.metaKey) && J.code === "KeyP") {
								J.preventDefault(), J.stopImmediatePropagation(), H();
								return;
							}
							if (
								J.code === "ArrowDown" ||
								(J.altKey && J.code === "KeyJ") ||
								(Y && J.code === "KeyJ")
							)
								J.preventDefault(),
									J.stopImmediatePropagation(),
									D.setSelectedIndex((ie) => (ie + 1) % W);
							else if (
								J.code === "ArrowUp" ||
								(J.altKey && J.code === "KeyK") ||
								(Y && J.code === "KeyK")
							)
								J.preventDefault(),
									J.stopImmediatePropagation(),
									D.setSelectedIndex((ie) =>
										ie === -1 ? W - 1 : (ie - 1 + W) % W,
									);
							else if (J.code === "Enter")
								if (
									(J.preventDefault(),
									J.stopImmediatePropagation(),
									D.selectedIndex < X)
								) {
									const ie = G()[D.selectedIndex];
									ie && x(ie.item);
								} else {
									const ie = K()[D.selectedIndex - X];
									ie && F(ie.item);
								}
							else if (J.code === "Escape")
								J.preventDefault(), J.stopImmediatePropagation(), H();
							else if (J.code === "Backspace" && N?.value === "") {
								J.preventDefault(), J.stopImmediatePropagation();
								const ie = G()[X - 1];
								ie && D.onItemRemove(ie.item);
							} else N?.focus();
						};
					(0, a.createEffect)(() => {
						(0, a.onMount)(() => {
							(async () => {
								for (
									let W = 0;
									W < 5 && M.window.document.activeElement !== N;
									W++
								)
									N?.focus(), await new Promise((X) => setTimeout(X, 150));
							})();
						});
					}),
						(0, a.createEffect)(() => {
							D.items.length > 0 &&
								D.selectedIndex >= D.items.length &&
								D.setSelectedIndex(0);
						}),
						(0, a.createEffect)(() => {
							const J = B();
							z().cancel(),
								z().trigger(() => {
									D.onSearch(J);
								});
						});
					const V = (J) => {
						U(J),
							z().cancel(),
							z().trigger(() => {
								D.onSearch(J);
							});
					};
					(0, a.onCleanup)(() => {
						z().dispose();
					});
					const G = (0, a.createMemo)(() => D.items.filter((J) => J.isAdded)),
						K = (0, a.createMemo)(() => D.items.filter((J) => !J.isAdded));
					return (0, r.createComponent)(
						p.Menu,
						(0, E.mergeProps)(D, {
							get position() {
								return D.position;
							},
							close: H,
							width: 286.333,
							get height() {
								return D.height ?? 300;
							},
							get nonBlockingRoot() {
								return D.nonBlockingRoot;
							},
							get nonBlockingDirection() {
								return D.nonBlockingDirection ?? "vertical";
							},
							get animationType() {
								return D.animationType ?? "none";
							},
							get zIndexModifier() {
								return D.zIndexModifier ?? 1;
							},
							get shouldMountInPortal() {
								return D.shouldMountInPortal ?? !0;
							},
							get tabIndex() {
								return D.tabIndex ?? 0;
							},
							onKeyDown: q,
							get style() {
								return {
									padding: 0,
									gap: 0,
									outline: "none",
									"overflow-y": "hidden",
									"z-index": 1,
									"background-color": "var(--vscode-quickInput-background)",
									color: "var(--vscode-quickInput-foreground)",
									border: "1px solid var(--vscode-widget-border)",
									"box-shadow": "0 0 4px 1px var(--vscode-widget-shadow)",
									...(typeof D.style == "object" ? D.style : {}),
								};
							},
							id: A,
							get class() {
								return `picker-menu ${D.class ?? ""}`;
							},
							get children() {
								return [
									(() => {
										const J = l(),
											W = J.firstChild;
										J.style.setProperty("padding", "4px"),
											W.addEventListener("input", (Y) => {
												V(Y.currentTarget.value);
											});
										const X = N;
										return (
											typeof X == "function" ? (0, m.use)(X, W) : (N = W),
											W.style.setProperty(
												"background-color",
												"var(--vscode-editor-background)",
											),
											W.style.setProperty(
												"color",
												"var(--vscode-input-foreground)",
											),
											W.style.setProperty(
												"border",
												"1px solid var(--vscode-input-border)",
											),
											W.style.setProperty("border-radius", "3px"),
											W.style.setProperty("padding", "2px 4px"),
											W.style.setProperty("width", "100%"),
											W.style.setProperty("font-size", "12px"),
											W.style.setProperty("outline", "none"),
											W.style.setProperty("box-sizing", "border-box"),
											J
										);
									})(),
									(() => {
										const J = v(),
											W = J.firstChild,
											X = O;
										return (
											typeof X == "function" ? (0, m.use)(X, J) : (O = J),
											J.style.setProperty("flex", "1"),
											J.style.setProperty("overflow", "hidden"),
											J.style.setProperty("position", "relative"),
											W.style.setProperty("position", "absolute"),
											W.style.setProperty("top", "0"),
											W.style.setProperty("left", "0"),
											W.style.setProperty("right", "0"),
											W.style.setProperty("bottom", "0"),
											W.style.setProperty(
												"background-color",
												"rgba(0, 0, 0, 0.15)",
											),
											W.style.setProperty("display", "flex"),
											W.style.setProperty("justify-content", "center"),
											W.style.setProperty("align-items", "center"),
											W.style.setProperty("z-index", "10"),
											W.style.setProperty("pointer-events", "none"),
											W.style.setProperty(
												"transition",
												"opacity 0.1s ease-in-out",
											),
											(0, d.insert)(
												J,
												(0, r.createComponent)(o.$w0b, {
													scrollingDirection: "vertical",
													style: {
														height: "100%",
														"border-top":
															"1px solid var(--vscode-widget-border)",
													},
													scrollable: R,
													get children() {
														return [
															(0, r.createComponent)(a.Show, {
																get when() {
																	return G().length > 0;
																},
																get children() {
																	return [
																		y(),
																		(0, r.createComponent)(a.Index, {
																			get each() {
																				return G();
																			},
																			children: (Y, ie) =>
																				(() => {
																					const ne = I(),
																						ee = ne.firstChild,
																						_ = ee.firstChild,
																						te = _.nextSibling;
																					return (
																						ne.addEventListener(
																							"mouseleave",
																							() => P(null),
																						),
																						ne.addEventListener(
																							"mouseenter",
																							() => P(ie),
																						),
																						ne.addEventListener("click", () =>
																							x(Y().item),
																						),
																						(0, w.setAttribute)(
																							ne,
																							"id",
																							`${A}-item-${ie}`,
																						),
																						(0, d.insert)(
																							ne,
																							() => Y().icon,
																							ee,
																						),
																						(0, d.insert)(
																							_,
																							(0, r.createComponent)(n.$tbc, {
																								get text() {
																									return Y().title;
																								},
																								get highlights() {
																									return (
																										Y().titleHighlights || []
																									);
																								},
																								style: {
																									direction: "ltr",
																									"unicode-bidi": "embed",
																								},
																							}),
																						),
																						(0, d.insert)(
																							te,
																							(0, r.createComponent)(n.$tbc, {
																								get text() {
																									return Y().subtitle;
																								},
																								get highlights() {
																									return (
																										Y().subtitleHighlights || []
																									);
																								},
																								style: {
																									direction: "ltr",
																									"unicode-bidi": "embed",
																								},
																							}),
																						),
																						(0, d.insert)(
																							ee,
																							(0, r.createComponent)(a.Show, {
																								get when() {
																									return Y().badge;
																								},
																								get children() {
																									return Y().badge;
																								},
																							}),
																							null,
																						),
																						(0, C.effect)(() =>
																							(0, i.className)(
																								ne,
																								`picker-menu-item ${ie === D.selectedIndex ? "selected" : ""}`,
																							),
																						),
																						ne
																					);
																				})(),
																		}),
																	];
																},
															}),
															(0, r.createComponent)(a.Show, {
																get when() {
																	return K().length > 0;
																},
																get children() {
																	return [
																		(() => {
																			const Y = $();
																			return (
																				(0, d.insert)(
																					Y,
																					() =>
																						B()
																							? "Search Results"
																							: "Available",
																					null,
																				),
																				(0, d.insert)(
																					Y,
																					(0, r.createComponent)(a.Show, {
																						get when() {
																							return D.isLoading;
																						},
																						get children() {
																							return (0, r.createComponent)(
																								s.$Z8b,
																								{ small: !0 },
																							);
																						},
																					}),
																					null,
																				),
																				Y
																			);
																		})(),
																		(0, r.createComponent)(a.Index, {
																			get each() {
																				return K();
																			},
																			children: (Y, ie) =>
																				(() => {
																					const ne = I(),
																						ee = ne.firstChild,
																						_ = ee.firstChild,
																						te = _.nextSibling;
																					return (
																						ne.addEventListener(
																							"mouseleave",
																							() => P(null),
																						),
																						ne.addEventListener(
																							"mouseenter",
																							() => P(G().length + ie),
																						),
																						ne.addEventListener("click", () =>
																							F(Y().item),
																						),
																						(0, d.insert)(
																							ne,
																							() => Y().icon,
																							ee,
																						),
																						(0, d.insert)(
																							_,
																							(0, r.createComponent)(n.$tbc, {
																								get text() {
																									return Y().title;
																								},
																								get highlights() {
																									return (
																										Y().titleHighlights || []
																									);
																								},
																								style: {
																									direction: "ltr",
																									"unicode-bidi": "embed",
																								},
																							}),
																						),
																						(0, d.insert)(
																							te,
																							(0, r.createComponent)(n.$tbc, {
																								get text() {
																									return Y().subtitle;
																								},
																								get highlights() {
																									return (
																										Y().subtitleHighlights || []
																									);
																								},
																								style: {
																									direction: "ltr",
																									"unicode-bidi": "embed",
																								},
																							}),
																						),
																						(0, d.insert)(
																							ee,
																							(0, r.createComponent)(a.Show, {
																								get when() {
																									return Y().badge;
																								},
																								get children() {
																									return Y().badge;
																								},
																							}),
																							null,
																						),
																						(0, C.effect)(
																							(Q) => {
																								const Z = `${A}-item-${G().length + ie}`,
																									se = `picker-menu-item ${G().length + ie === D.selectedIndex ? "selected" : ""}`;
																								return (
																									Z !== Q._v$ &&
																										(0, w.setAttribute)(
																											ne,
																											"id",
																											(Q._v$ = Z),
																										),
																									se !== Q._v$2 &&
																										(0, i.className)(
																											ne,
																											(Q._v$2 = se),
																										),
																									Q
																								);
																							},
																							{ _v$: void 0, _v$2: void 0 },
																						),
																						ne
																					);
																				})(),
																		}),
																	];
																},
															}),
														];
													},
												}),
												null,
											),
											(0, d.insert)(
												J,
												(0, r.createComponent)(k, {
													get items() {
														return D.items;
													},
													get hoveredIndex() {
														return T();
													},
													get selectedIndex() {
														return D.selectedIndex;
													},
													optionsListRef: O,
													pickerId: A,
												}),
												null,
											),
											(0, C.effect)(() =>
												(D.isLoading ? 1 : 0) != null
													? W.style.setProperty("opacity", D.isLoading ? 1 : 0)
													: W.style.removeProperty("opacity"),
											),
											J
										);
									})(),
									(0, r.createComponent)(a.Show, {
										get when() {
											return D.error;
										},
										get children() {
											const J = S();
											return (0, d.insert)(J, () => D.error), J;
										},
									}),
								];
							},
						}),
					);
				}
			},
		)
