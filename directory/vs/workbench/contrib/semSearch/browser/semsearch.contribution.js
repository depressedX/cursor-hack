define(de[4218], he([1, 0, 993, 4217, 3135]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		define(
			de[1982],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 12, 36, 818, 364, 484, 135, 794,
				15, 295, 2526,
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
		),
		define(
			de[147],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 26, 14, 36, 295, 7, 2528]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sdc = e.$rdc = void 0);
				const f = (0, t.template)("<div>"),
					b = (0, t.template)("<div><div>"),
					s = (0, t.template)(
						'<div><div></div><div class="cursor-simple-button-hover-list"><div>',
					),
					l = (0, t.template)("<div> <!> "),
					y = (0, t.template)("<option>Loading..."),
					$ = (0, t.template)(
						'<div class="cursor-simple-button-hover-list-item">',
					),
					v = (I) => {
						const T = () => I.size ?? "medium",
							P = (k) =>
								(0, u.createComponent)(h.Show, {
									get when() {
										return (
											I.codicon &&
											(k === "left"
												? !I.renderCodiconOnRight
												: I.renderCodiconOnRight)
										);
									},
									get children() {
										return (0, a.memo)(() => typeof I.codicon == "object")()
											? (() => {
													const L = f();
													return (
														(0, r.effect)(
															(D) => {
																const M = {
																		"font-size": "12px",
																		...I.codiconStyle,
																	},
																	N = c.ThemeIcon.asClassName(I.codicon);
																return (
																	(D._v$ = (0, m.style)(L, M, D._v$)),
																	N !== D._v$2 &&
																		(0, d.className)(L, (D._v$2 = N)),
																	D
																);
															},
															{ _v$: void 0, _v$2: void 0 },
														),
														L
													);
												})()
											: (() => {
													const L = f();
													return (
														(0, C.insert)(L, () => I.codicon),
														(0, r.effect)((D) =>
															(0, m.style)(
																L,
																{ "font-size": "12px", ...I.codiconStyle },
																D,
															),
														),
														L
													);
												})();
									},
								});
						return (() => {
							const k = f();
							return (
								(0, i.use)((L) => I.setRef?.(L), k),
								k.addEventListener("blur", () => I.onBlur?.()),
								k.addEventListener("keydown", (L) => {
									(L.key === "Enter" || L.key === " ") &&
										(L.preventDefault(),
										!I.disabled && I.onClick != null && I.onClick(L));
								}),
								k.addEventListener("mouseleave", () => I.onMouseLeave?.()),
								k.addEventListener("mouseenter", (L) => I.onMouseEnter?.(L)),
								k.addEventListener("mousedown", (L) => {
									!I.disabled && I.onClick != null && I.onClick(L);
								}),
								(0, w.spread)(
									k,
									(0, E.mergeProps)(
										{
											get id() {
												return I.id;
											},
											get class() {
												return [
													`cursor-button cursor-button-${I.type ?? "primary"}`,
													I.isNotClickable
														? "cursor-button-not-clickable"
														: `cursor-button-${I.type ?? "primary"}-clickable`,
													I.type === "disabled" || I.disabled ? "disabled" : "",
													I.tabFocusable ? "tab-focusable" : "",
													T() === "small" ? "cursor-button-small" : "",
													I.class,
												]
													.filter(Boolean)
													.join(" ");
											},
											get style() {
												return {
													"user-select": "none",
													"flex-shrink": 0,
													...I.style,
												};
											},
											get tabIndex() {
												return I.tabFocusable ? 0 : void 0;
											},
										},
										() => I.extras,
									),
									!1,
									!0,
								),
								(0, C.insert)(k, () => P("left"), null),
								(0, C.insert)(k, () => I.title, null),
								(0, C.insert)(k, () => I.children, null),
								(0, C.insert)(
									k,
									(0, u.createComponent)(h.Show, {
										get when() {
											return I.keyboardShortcut;
										},
										get children() {
											const L = f();
											return (
												L.style.setProperty("font-size", "10px"),
												L.style.setProperty("opacity", "0.6"),
												(0, C.insert)(L, () => I.keyboardShortcut),
												L
											);
										},
									}),
									null,
								),
								(0, C.insert)(k, () => P("right"), null),
								(0, C.insert)(
									k,
									(0, u.createComponent)(h.Show, {
										get when() {
											return I.isLoading;
										},
										get children() {
											return (0, u.createComponent)(p.$Z8b, {
												get onPrimaryButton() {
													return (I.type ?? "primary") === "primary";
												},
												extras: { style: { "margin-left": "4px" } },
												get small() {
													return I.smallSpinner;
												},
											});
										},
									}),
									null,
								),
								k
							);
						})();
					};
				e.$rdc = v;
				const S = (I) => {
					const [T, P] = (0, h.createSignal)(!1),
						k = (0, g.$pdc)(),
						L = { value: void 0 };
					return (
						(0, h.createEffect)(() => {
							const D = (M) => {
								(0, o.$Ygb)(M.target) &&
									!M.target.closest(".cursor-simple-button-hover-list-item") &&
									!M.target.closest(".cursor-simple-button-hover-list") &&
									!L.value?.contains(M.target) &&
									P(!1);
							};
							return (
								k.window.document.addEventListener("click", D),
								() => {
									k.window.document.removeEventListener("click", D);
								}
							);
						}),
						(() => {
							const D = s(),
								M = D.firstChild,
								N = M.nextSibling,
								A = N.firstChild;
							return (
								D.addEventListener("click", (R) => {
									!I.disabled && I.onClick != null && I.onClick(R);
								}),
								(0, i.use)((R) => {
									L.value = R;
								}, D),
								(0, w.spread)(
									D,
									(0, E.mergeProps)(
										{
											get class() {
												return [
													`cursor-button cursor-button-${I.type ?? "primary"}`,
													I.disabled ? "disabled" : "",
													I.class,
												]
													.filter(Boolean)
													.join(" ");
											},
											get style() {
												return {
													position: "relative",
													"user-select": "none",
													cursor: I.isNotClickable ? "default" : "pointer",
													...I.style,
												};
											},
										},
										() => I.extras,
									),
									!1,
									!0,
								),
								(0, C.insert)(
									D,
									(() => {
										const R = (0, a.memo)(
											() => !!(I.codicon && typeof I.codicon == "object"),
										);
										return () =>
											R() &&
											(() => {
												const O = f();
												return (
													(0, r.effect)(
														(B) => {
															const U = {
																	"font-size": "12px",
																	...I.codiconStyle,
																},
																z = c.ThemeIcon.asClassName(I.codicon);
															return (
																(B._v$5 = (0, m.style)(O, U, B._v$5)),
																z !== B._v$6 &&
																	(0, d.className)(O, (B._v$6 = z)),
																B
															);
														},
														{ _v$5: void 0, _v$6: void 0 },
													),
													O
												);
											})();
									})(),
									M,
								),
								(0, C.insert)(
									D,
									(() => {
										const R = (0, a.memo)(
											() => !!(I.codicon && typeof I.codicon == "string"),
										);
										return () =>
											R() &&
											(() => {
												const O = l(),
													B = O.firstChild,
													U = B.nextSibling,
													z = U.nextSibling;
												return (
													(0, C.insert)(O, () => I.codicon, U),
													(0, r.effect)((F) =>
														(0, m.style)(
															O,
															{ "font-size": "12px", ...I.codiconStyle },
															F,
														),
													),
													O
												);
											})();
									})(),
									M,
								),
								(0, C.insert)(
									D,
									(() => {
										const R = (0, a.memo)(() => !!(I.title && I.codicon));
										return () =>
											R() &&
											(() => {
												const O = f();
												return (
													O.style.setProperty("display", "inline-block"),
													O.style.setProperty("width", "4px"),
													O
												);
											})();
									})(),
									M,
								),
								M.style.setProperty("flex-grow", "1"),
								M.style.setProperty("display", "flex"),
								M.style.setProperty("align-items", "center"),
								M.style.setProperty("justify-content", "center"),
								(0, C.insert)(M, () => I.title),
								(0, C.insert)(
									D,
									(() => {
										const R = (0, a.memo)(() => !!I.keyboardShortcut);
										return () =>
											R() &&
											(() => {
												const O = f();
												return (
													O.style.setProperty("margin-left", "4px"),
													O.style.setProperty("font-size", "10px"),
													(0, C.insert)(O, () => I.keyboardShortcut),
													O
												);
											})();
									})(),
									N,
								),
								N.addEventListener("click", (R) => {
									R.stopPropagation(), R.preventDefault(), P(!T());
								}),
								N.style.setProperty("position", "absolute"),
								N.style.setProperty("display", "flex"),
								N.style.setProperty("align-items", "center"),
								N.style.setProperty("justify-content", "center"),
								N.style.setProperty("padding", "0px 8px"),
								N.style.setProperty("right", "0px"),
								(0, C.insert)(
									N,
									(0, u.createComponent)(h.Show, {
										get when() {
											return T();
										},
										get children() {
											const R = b(),
												O = R.firstChild;
											return (
												R.addEventListener("mouseenter", (B) =>
													B.stopPropagation(),
												),
												R.style.setProperty("position", "absolute"),
												R.style.setProperty("top", "100%"),
												R.style.setProperty("right", "0px"),
												R.style.setProperty("align-items", "center"),
												R.style.setProperty("justify-content", "flex-end"),
												R.style.setProperty("display", "flex"),
												R.style.setProperty("width", "250px"),
												R.style.setProperty("z-index", "100"),
												O.style.setProperty("display", "flex"),
												O.style.setProperty("z-index", "1000"),
												O.style.setProperty("font-size", "12px"),
												O.style.setProperty("border-radius", "4px"),
												O.style.setProperty(
													"border",
													"1px solid var(--vscode-editorWidget-border)",
												),
												O.style.setProperty(
													"background",
													"var(--vscode-editorWidget-background)",
												),
												O.style.setProperty("align-items", "center"),
												O.style.setProperty("justify-content", "center"),
												O.style.setProperty("flex-direction", "column"),
												(0, C.insert)(
													O,
													(0, u.createComponent)(h.For, {
														get each() {
															return I.dropdowns;
														},
														get fallback() {
															return y();
														},
														children: (B, U) =>
															(() => {
																const z = $();
																return (
																	z.addEventListener("click", (F) => {
																		F.stopPropagation(),
																			F.preventDefault(),
																			I.onClickDropdown &&
																				I.onClickDropdown(U()),
																			P(!1);
																	}),
																	z.style.setProperty("cursor", "pointer"),
																	z.style.setProperty("z-index", "1001"),
																	z.style.setProperty("padding", "8px 12px"),
																	z.style.setProperty(
																		"color",
																		"var(--vscode-button-foreground)",
																	),
																	(0, C.insert)(z, B),
																	z
																);
															})(),
													}),
												),
												R
											);
										},
									}),
									null,
								),
								(0, r.effect)(
									(R) => {
										const O =
												I.type !== "secondary"
													? "1px solid var(--vscode-button-separator)"
													: "none",
											B = c.ThemeIcon.asClassName(n.$ak.chevronDown);
										return (
											O !== R._v$3 &&
												((R._v$3 = O) != null
													? N.style.setProperty("border-left", O)
													: N.style.removeProperty("border-left")),
											B !== R._v$4 && (0, d.className)(A, (R._v$4 = B)),
											R
										);
									},
									{ _v$3: void 0, _v$4: void 0 },
								),
								D
							);
						})()
					);
				};
				e.$sdc = S;
			},
		),
		define(
			de[4219],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 160, 14, 54, 12, 9, 36, 156, 428, 422, 147,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$nlc = I);
				const b = (0, t.template)("<span>"),
					s = (0, t.template)("<span><span>"),
					l = (0, t.template)("<div>/"),
					y = (0, t.template)("<div><div>"),
					$ = (0, t.template)("<div>");
				function v(T) {
					const P = (0, n.$odc)(),
						k = (0, p.$b$b)(),
						L = (0, m.createMemo)(() => (0, a.$sc)(T.uri.fsPath));
					return (() => {
						const D = s(),
							M = D.firstChild;
						return (
							D.style.setProperty("display", "flex"),
							D.style.setProperty("align-items", "center"),
							D.style.setProperty("justify-content", "center"),
							D.style.setProperty("font-size", "11px"),
							(0, C.insert)(
								D,
								(0, d.createComponent)(m.Show, {
									get when() {
										return k();
									},
									get children() {
										const N = b();
										return (
											N.style.setProperty("margin-right", "-4px"),
											(0, C.insert)(
												N,
												(0, d.createComponent)(g.$k$b, {
													get fileName() {
														return L();
													},
													get workspaceContextService() {
														return P.workspaceContextService;
													},
													get modelService() {
														return P.modelService;
													},
													get languageService() {
														return P.languageService;
													},
												}),
											),
											N
										);
									},
								}),
								M,
							),
							(0, C.insert)(M, L),
							D
						);
					})();
				}
				function S(T) {
					return (() => {
						const P = l(),
							k = P.firstChild;
						return (
							P.addEventListener("click", (L) => T.onClick(L)),
							P.style.setProperty("font-size", "11px"),
							P.style.setProperty(
								"color",
								"var(--vscode-descriptionForeground)",
							),
							P.style.setProperty("margin", "0 4px"),
							P.style.setProperty("cursor", "pointer"),
							P.style.setProperty("font-feature-settings", '"tnum"'),
							P.style.setProperty("font-variant-numeric", "tabular-nums"),
							P.style.setProperty("text-align", "center"),
							(0, C.insert)(P, () => T.current, k),
							(0, C.insert)(P, () => T.total, null),
							P
						);
					})();
				}
				function I(T) {
					const P = (0, m.createMemo)(() => T.uniqueFileUris.length > 1),
						k = (0, m.createMemo)(() =>
							T.inlineDiffs.some(
								(J) =>
									J.uri.toString() === T.uri?.toString() ||
									J.uri.fsPath === T.uri?.fsPath,
							),
						),
						L = (0, m.createMemo)(() => T.inlineDiffs.length > 0),
						D = (0, m.createMemo)(() =>
							T.inlineDiffs.some(
								(J) =>
									J.uri.toString() !== T.uri?.toString() &&
									J.uri.fsPath !== T.uri?.fsPath,
							),
						),
						M = (J) => (J ? (0, a.$sc)(J.fsPath) : ""),
						{ showHover: N, hideHover: A } = (0, o.$z$b)(500),
						R = (J, W) => ({
							onMouseEnter: (X) => {
								const Y = X.currentTarget;
								N({
									appearance: { compact: !0, showPointer: !0 },
									content: J + (W ? ` (${W})` : ""),
									target: Y,
									position: { hoverPosition: r.HoverPosition.ABOVE },
									additionalClasses: ["vscode-hover-widget-compact"],
								});
							},
							onMouseLeave: () => A(),
						}),
						O = {
							"font-size": "11px",
							padding: "2px 4px",
							height: "14px",
							display: "flex",
							"align-items": "center",
							"justify-content": "center",
						},
						B = {
							display: "flex",
							"align-items": "center",
							"justify-content": "center",
							"font-size": "12px",
						},
						U = (0, m.createMemo)(
							() =>
								T.uniqueFileUris.indexOf(T.uri?.toString() ?? "") === -1 ||
								T.uniqueFileUris.length > 1,
						),
						z = (0, m.createMemo)(
							() =>
								T.uniqueFileUris.indexOf(T.uri?.toString() ?? "") === -1 ||
								T.uniqueFileUris.length > 1,
						),
						F = (0, m.createMemo)(() => {
							const J = T.uniqueFileUris.indexOf(T.uri?.toString() ?? "");
							return J > 0
								? T.uniqueFileUris[J - 1]
								: T.uniqueFileUris[T.uniqueFileUris.length - 1];
						}),
						x = (0, m.createMemo)(() => {
							const J = T.uniqueFileUris.indexOf(T.uri?.toString() ?? "");
							return J < T.uniqueFileUris.length - 1
								? T.uniqueFileUris[J + 1]
								: J === T.uniqueFileUris.length - 1 &&
										T.uniqueFileUris.length >= 1
									? T.uniqueFileUris[0]
									: void 0;
						}),
						H = (0, m.createMemo)(() => {
							const J = F(),
								W = x();
							return !J || !W ? !1 : J.toString() === W.toString();
						}),
						q = () =>
							(0, d.createComponent)(m.Show, {
								get when() {
									return U();
								},
								get children() {
									return (0, d.createComponent)(
										f.$rdc,
										(0, w.mergeProps)(
											{
												type: "secondary",
												get codicon() {
													return u.$ak.chevronLeft;
												},
												get onClick() {
													return T.onNavigateToPreviousFile;
												},
												get style() {
													return {
														...O,
														"padding-right": !H() && !k() ? "6px" : void 0,
													};
												},
												codiconStyle: B,
												get title() {
													return (0, E.memo)(() => !!(H() || k() || !F()))()
														? void 0
														: (0, d.createComponent)(v, {
																get uri() {
																	return c.URI.parse(F());
																},
															});
												},
											},
											() =>
												R(
													`Navigate to previous file${F() ? ": " + M(c.URI.parse(F())) : ""}`,
													T.previousFileKeybinding,
												),
										),
									);
								},
							}),
						V = () =>
							(0, d.createComponent)(m.Show, {
								get when() {
									return z();
								},
								get children() {
									return (0, d.createComponent)(
										f.$rdc,
										(0, w.mergeProps)(
											{
												type: "secondary",
												get codicon() {
													return u.$ak.chevronRight;
												},
												get onClick() {
													return T.onNavigateToNextFile;
												},
												get style() {
													return {
														...O,
														"padding-left": !H() && !k() ? "6px" : void 0,
													};
												},
												codiconStyle: B,
											},
											() =>
												R(
													`Navigate to next file${x() ? ": " + M(c.URI.parse(x())) : ""}`,
													T.nextFileKeybinding,
												),
											{
												renderCodiconOnRight: !0,
												get title() {
													return (0, E.memo)(() => !!(H() || k() || !x()))()
														? void 0
														: (0, d.createComponent)(v, {
																get uri() {
																	return c.URI.parse(x());
																},
															});
												},
											},
										),
									);
								},
							}),
						G = () =>
							(0, d.createComponent)(
								f.$rdc,
								(0, w.mergeProps)(
									{
										type: "secondary",
										title: "Cancel",
										get codicon() {
											return u.$ak.stop;
										},
										get onClick() {
											return T.onCancelGeneration;
										},
										style: O,
										codiconStyle: B,
									},
									() => R("Cancel", void 0),
								),
							),
						K = () => [
							(0, d.createComponent)(
								f.$rdc,
								(0, w.mergeProps)(
									{
										get title() {
											return [
												"Accept file",
												(() => {
													const J = b();
													return (
														J.style.setProperty("font-size", "0.8em"),
														(0, C.insert)(J, () => T.acceptKeybinding ?? ""),
														J
													);
												})(),
											];
										},
										get onClick() {
											return T.onAcceptChanges;
										},
										style: O,
										codiconStyle: B,
									},
									() =>
										R("Accept all changes in this file", T.acceptKeybinding),
								),
							),
							(0, d.createComponent)(
								f.$rdc,
								(0, w.mergeProps)(
									{
										type: "secondary",
										get title() {
											return [
												"Reject file",
												(() => {
													const J = b();
													return (
														J.style.setProperty(
															"color",
															"var(--vscode-input-placeholderForeground)",
														),
														J.style.setProperty("font-size", "0.8em"),
														(0, C.insert)(
															J,
															() =>
																T.rejectKeybinding ??
																(h.$m ? "\u2318\u232B" : "ctrl+\u232B"),
														),
														J
													);
												})(),
											];
										},
										get onClick() {
											return T.onRejectChanges;
										},
										style: O,
										codiconStyle: B,
									},
									() =>
										R("Reject all changes in this file", T.rejectKeybinding),
								),
							),
							(0, d.createComponent)(
								f.$rdc,
								(0, w.mergeProps)(
									{
										type: "secondary",
										get codicon() {
											return u.$ak.chevronUp;
										},
										get onClick() {
											return T.onNavigateToPreviousChange;
										},
										style: O,
										codiconStyle: B,
									},
									() =>
										R(
											"Navigate to previous change in this file",
											T.previousChangeKeybinding,
										),
								),
							),
							(0, d.createComponent)(m.Show, {
								get when() {
									return T.totalChanges > 0;
								},
								get children() {
									return (0, d.createComponent)(S, {
										get current() {
											return T.currentVisibleChange;
										},
										get total() {
											return T.totalChanges;
										},
										onClick: (J) => T.onNavigateToCurrentChange(J),
									});
								},
							}),
							(0, d.createComponent)(
								f.$rdc,
								(0, w.mergeProps)(
									{
										type: "secondary",
										get codicon() {
											return u.$ak.chevronDown;
										},
										get onClick() {
											return T.onNavigateToNextChange;
										},
										style: O,
										codiconStyle: B,
									},
									() =>
										R(
											"Navigate to next change in this file",
											T.nextChangeKeybinding,
										),
								),
							),
						];
					return (0, d.createComponent)(m.Show, {
						get when() {
							return L() || T.uniqueFileUris.length > 1;
						},
						get children() {
							const J = y(),
								W = J.firstChild;
							return (
								J.style.setProperty("display", "flex"),
								J.style.setProperty("justify-content", "center"),
								J.style.setProperty("width", "100%"),
								J.style.setProperty("margin-bottom", "6px"),
								J.style.setProperty("pointer-events", "none"),
								W.style.setProperty("display", "flex"),
								W.style.setProperty("flex-direction", "row"),
								W.style.setProperty("padding", "3px"),
								W.style.setProperty(
									"border",
									"1px solid var(--vscode-commandCenter-inactiveBorder)",
								),
								W.style.setProperty(
									"box-shadow",
									"0 2px 4px var(--vscode-inlineChat-shadow)",
								),
								W.style.setProperty(
									"background-color",
									"var(--vscode-editorWidget-background)",
								),
								W.style.setProperty("border-radius", "4px"),
								W.style.setProperty("align-items", "center"),
								W.style.setProperty("justify-content", "center"),
								W.style.setProperty("min-width", "fit-content"),
								W.style.setProperty("gap", "4px"),
								W.style.setProperty("pointer-events", "auto"),
								(0, C.insert)(W, q, null),
								(0, C.insert)(
									W,
									(0, d.createComponent)(m.Show, {
										get when() {
											return !T.isGenerating;
										},
										get fallback() {
											return G();
										},
										get children() {
											return (0, d.createComponent)(m.Show, {
												get when() {
													return k();
												},
												get fallback() {
													return (0, d.createComponent)(m.Show, {
														get when() {
															return H();
														},
														get fallback() {
															return (() => {
																const X = $();
																return (
																	X.style.setProperty("font-size", "11px"),
																	X.style.setProperty("opacity", "0.4"),
																	X.style.setProperty("width", "1px"),
																	X.style.setProperty("height", "12px"),
																	X.style.setProperty("margin", "0px 2px"),
																	X.style.setProperty(
																		"background",
																		"var(--vscode-input-placeholderForeground)",
																	),
																	X.style.setProperty("border-radius", "50%"),
																	X
																);
															})();
														},
														get children() {
															const X = $();
															return (
																X.style.setProperty("display", "flex"),
																X.style.setProperty("align-items", "center"),
																X.style.setProperty(
																	"justify-content",
																	"center",
																),
																X.style.setProperty("margin-left", "-4px"),
																X.style.setProperty("gap", "4px"),
																X.style.setProperty("cursor", "pointer"),
																(0, i.spread)(
																	X,
																	(0, w.mergeProps)(
																		{
																			get onClick() {
																				return T.onNavigateToNextFile;
																			},
																		},
																		() =>
																			R(
																				`Navigate to next file${x() ? ": " + M(c.URI.parse(x())) : ""}`,
																				T.nextFileKeybinding,
																			),
																	),
																	!1,
																	!0,
																),
																(0, C.insert)(
																	X,
																	(0, d.createComponent)(v, {
																		get uri() {
																			return c.URI.parse(F());
																		},
																	}),
																),
																X
															);
														},
													});
												},
												get children() {
													return K();
												},
											});
										},
									}),
									null,
								),
								(0, C.insert)(W, V, null),
								J
							);
						},
					});
				}
			},
		),
		define(
			de[4220],
			he([1, 0, 2, 13, 36, 19, 480, 4219, 385, 534, 851]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$olc = a),
					(e.$plc = h);
				function a(c) {
					const n = (0, w.$odc)(),
						g = (0, m.$5$b)(r.$97b),
						p = (0, m.$5$b)(r.$_7b),
						o = (0, m.$5$b)(r.$g8b),
						f = (0, m.$5$b)(r.$h8b),
						b = (0, m.$5$b)(r.$j8b),
						s = (0, m.$5$b)(r.$i8b),
						l = (0, i.createMemo)(() =>
							n.reactiveStorageService.nonPersistentStorage.inlineDiffs.filter(
								(F) => F.source === C.$a0b || F.source === C.$_9b,
							),
						),
						y = (0, i.createMemo)(() => {
							const F = l();
							return F.length === 0
								? []
								: F.sort((x, H) =>
										x.createdAt !== void 0 && H.createdAt !== void 0
											? x.createdAt < H.createdAt
												? -1
												: 1
											: x.uri.toString() === H.uri.toString() ||
													x.uri.fsPath === H.uri.fsPath
												? x.currentRange.startLineNumber -
													H.currentRange.startLineNumber
												: x.uri.toString() < H.uri.toString()
													? -1
													: 1,
									).flatMap((x) =>
										x.changes
											.sort(
												(H, q) =>
													H.addedRange.startLineNumber -
													q.addedRange.startLineNumber,
											)
											.map((H) => ({
												uri: x.uri,
												startLineNumber:
													x.currentRange.startLineNumber +
													H.addedRange.startLineNumber -
													1,
											})),
									);
						}),
						$ = (0, i.createMemo)(() => {
							const F = l();
							return F.length === 0
								? !1
								: F.some((x) =>
										n.reactiveStorageService.nonPersistentStorage.inprogressAIGenerations.some(
											(H) =>
												H.generationUUID === x.generationUUID &&
												(E.$dh.isEqual(x.uri, c.uri) ||
													x.uri.fsPath === c.uri?.fsPath),
										),
									);
						}),
						v = (0, i.createMemo)(() =>
							y().filter(
								(F) =>
									E.$dh.isEqual(F.uri, c.uri) || F.uri.fsPath === c.uri?.fsPath,
							),
						),
						S = (0, i.createMemo)(() => [
							...new Set(y().map((F) => F.uri.toString())),
						]),
						I = () => {
							n.commandService.executeCommand(r.$c8b, c.editor);
						},
						T = () => {
							n.commandService.executeCommand(r.$i8b);
						},
						P = () => {
							n.commandService.executeCommand(r.$97b);
						},
						k = () => {
							n.commandService.executeCommand(r.$_7b);
						},
						[L, D] = (0, i.createSignal)(0),
						[M, N] = (0, i.createSignal)(0),
						A = () => {
							if (!U()) {
								D(0), N(0);
								return;
							}
							if (u.$Ddc.get(c.editor)) {
								const x = c.uri,
									H = l()
										.filter((J) => E.$dh.isEqual(J.uri, x))
										.flatMap((J) =>
											J.changes.map((W) => ({
												startLineNumber:
													J.currentRange.startLineNumber +
													W.addedRange.startLineNumber -
													1,
												endLineNumber:
													J.currentRange.startLineNumber +
													W.addedRange.endLineNumberExclusive -
													1,
												startColumn: 1,
												endColumn: 1,
											})),
										),
									q = H.length;
								N(q);
								const V = c.editor.getPosition(),
									G = c.editor.getVisibleRanges();
								let K = -1;
								if (
									(V &&
										G.some((J) => J.containsPosition(V)) &&
										(K = H.findIndex(
											(J) =>
												V.lineNumber >= J.startLineNumber &&
												V.lineNumber <= J.endLineNumber,
										)),
									K === -1 &&
										G.length > 0 &&
										(K = H.findIndex(
											(J) =>
												J.startLineNumber >= G[0].startLineNumber &&
												J.endLineNumber <= G[G.length - 1].endLineNumber,
										)),
									K === -1 && G.length > 0)
								) {
									const J = Math.floor(
										(G[0].startLineNumber + G[G.length - 1].endLineNumber) / 2,
									);
									K = H.reduce(
										(W, X, Y) =>
											Math.abs(X.startLineNumber - J) <
											Math.abs(H[W].startLineNumber - J)
												? Y
												: W,
										0,
									);
								}
								D(K + 1);
							}
						};
					(0, i.createEffect)(() => {
						if (U()) {
							A();
							const F = c.editor.onDidScrollChange(A),
								x = c.editor.onDidChangeCursorPosition(A),
								H = c.editor.onDidChangeModelContent(A);
							(0, i.onCleanup)(() => {
								F.dispose(), x.dispose(), H.dispose();
							});
						}
					});
					const R = (F = !1) => {
							const x = u.$Ddc.get(c.editor);
							if (x) {
								const H = F ? L() : void 0;
								x.navigateToChange("previous", H), A();
							}
						},
						O = (F = !1) => {
							const x = u.$Ddc.get(c.editor);
							if (x) {
								const H = F ? L() : void 0;
								x.navigateToChange("next", H), A();
							}
						},
						B = () => {
							n.commandService.executeCommand(r.$j8b);
						},
						U = (0, i.createMemo)(() =>
							l().some(
								(F) =>
									F.uri.toString() === c.uri?.toString() ||
									F.uri.fsPath === c.uri?.fsPath,
							),
						),
						z = (F) => {
							const x = u.$Ddc.get(c.editor);
							if (x) {
								const H = L();
								H > 0 && H <= M() && x.focusOnCurrentChange(H);
							}
						};
					return (0, t.createComponent)(d.$nlc, {
						get isGenerating() {
							return $();
						},
						get isActiveEditor() {
							return c.isActiveEditor;
						},
						get inlineDiffs() {
							return l();
						},
						get changesInCurrentFile() {
							return v();
						},
						get uniqueFileUris() {
							return S();
						},
						get uri() {
							return c.uri;
						},
						onCancelGeneration: I,
						onNavigateToPreviousFile: T,
						onAcceptChanges: P,
						onRejectChanges: k,
						onNavigateToPreviousChange: () => R(!0),
						onNavigateToNextChange: () => O(!0),
						onNavigateToCurrentChange: z,
						onNavigateToNextFile: B,
						get acceptKeybinding() {
							return g();
						},
						get rejectKeybinding() {
							return p();
						},
						get nextChangeKeybinding() {
							return o();
						},
						get previousChangeKeybinding() {
							return f();
						},
						get nextFileKeybinding() {
							return b();
						},
						get previousFileKeybinding() {
							return s();
						},
						get currentVisibleChange() {
							return L();
						},
						get totalChanges() {
							return M();
						},
					});
				}
				function h(c, n, g, p) {
					return (0, w.$ndc)(
						() =>
							(0, t.createComponent)(a, {
								get uri() {
									return n.getURI();
								},
								get isActiveEditor() {
									return n.isActiveEditor;
								},
								editor: p,
							}),
						c,
						g,
					);
				}
			},
		),
		define(
			de[1983],
			he([1, 0, 46, 149, 3, 56, 5, 45, 7, 159, 6, 4220, 25, 18, 255, 8]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				var p;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rlc = e.$qlc = void 0),
					(m = mt(m));
				let o = class extends w.$1c {
					static {
						p = this;
					}
					static {
						this.ID = "aiFullFilePromptBar";
					}
					static get(s) {
						return s.getContribution(p.ID);
					}
					constructor(s, l, y, $, v) {
						super(),
							(this.c = l),
							(this.f = y),
							(this.g = $),
							(this.h = v),
							(this.a = s),
							(this.reactiveStorageRoot = this.D(this.f.createScoped(this))),
							(this.b = new i.$Y(() => {
								const D = this.D(l.createInstance(f, this.a));
								return this.D(D.onClick((M) => {})), D;
							}));
						const S = n.PeekContext.inPeekEditor.getValue(this.h),
							I = this.a.getDomNode(),
							T = Array.from(I?.classList.values() ?? []).find((D) =>
								D.includes("monaco-diff-editor"),
							),
							k = I?.getAttribute("data-uri")?.startsWith("output:");
						!S &&
							!T &&
							!k &&
							(this.reactiveStorageRoot.onChangeEffect({
								deps: [
									() =>
										this.f.applicationUserPersistentStorage.hideChatEditTooltip,
									() => this.f.nonPersistentStorage.inlineDiffs,
								],
								onChange: () => {
									this.j();
								},
							}),
							this.D(
								this.a.onDidChangeModelContent(() => {
									this.j();
								}),
							),
							this.b.value.update(this.g.activeTextEditorControl === this.a),
							this.D(
								this.g.onDidActiveEditorChange(() => {
									this.j();
								}),
							));
					}
					j() {
						const l = this.f.nonPersistentStorage.inlineDiffs.length > 0,
							y = this.g.activeTextEditorControl === this.a;
						l
							? (this.b.value.show(), this.b.value.update(y))
							: this.b.value.hide();
					}
				};
				(e.$qlc = o),
					(e.$qlc =
						o =
						p =
							Ne([j(1, C.$Li), j(2, d.$0zb), j(3, c.$IY), j(4, g.$6j)], o));
				let f = class extends w.$1c {
					constructor(s, l, y, $) {
						super(),
							(this.f = s),
							(this.g = l),
							(this.h = y),
							(this.j = $),
							(this.allowEditorOverflow = !0),
							(this.c = this.D(new u.$re())),
							(this.onClick = this.c.event),
							(this.isWordWrap = !1),
							(this.isActiveEditor = !1),
							(this.a = m.$("div.aiFullFilePromptBarWidget")),
							(this.a.style.width = "100%"),
							(this.a.style.pointerEvents = "none"),
							(this.a.style.display = "flex"),
							(this.a.style.justifyContent = "center"),
							(this.b = m.$("div")),
							(this.b.style.position = "relative"),
							(this.b.style.zIndex = "2530"),
							this.a.appendChild(this.b),
							this.D(r.$Qhb.ignoreTarget(this.a)),
							this.f.addOverlayWidget(this),
							(this.disposeRender = this.D(
								(0, a.$plc)(this.b, this, this.j, this.f),
							)),
							this.D(
								this.f.onDidChangeModelContent(() => {
									this.f.layoutOverlayWidget(this);
								}),
							),
							this.D(
								this.f.onDidChangeModel(() => {
									this.rerender();
								}),
							),
							this.D(
								this.f.onDidLayoutChange(() => {
									this.rerender();
								}),
							);
					}
					rerender() {
						this.disposeRender?.dispose(),
							(this.disposeRender = this.D(
								(0, a.$plc)(this.b, this, this.j, this.f),
							));
					}
					getId() {
						return "aiFullFilePromptBarWidget";
					}
					getDomNode() {
						return this.a;
					}
					getPosition() {
						return {
							preference: E.OverlayWidgetPositionPreference.BOTTOM_CENTER,
						};
					}
					getURI() {
						const s = this.f.getModel()?.uri.path;
						if (s) return this.h.resolveRelativePath(s);
					}
					show() {
						this.a.style.display = "block";
					}
					hide() {
						this.a.style.display = "none";
					}
					update(s) {
						(this.isActiveEditor = s), this.rerender();
					}
				};
				(e.$rlc = f),
					(e.$rlc = f = Ne([j(1, d.$0zb), j(2, h.$Vi), j(3, C.$Li)], f)),
					(0, t.$qtb)(o.ID, o, t.EditorContributionInstantiation.Eventually);
			},
		),
		define(
			de[4221],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 147, 14, 58, 26, 312, 36, 851, 251, 534]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Edc = void 0);
				const f = (0, t.template)("<div>"),
					b = (0, t.template)("<hr>"),
					s = (0, t.template)("<div><span>"),
					l = (0, t.template)(
						"<div><div><div><span></span><div><span></span></div><div></div><div></div></div></div><div>",
					),
					y = ($) => {
						const v = (0, n.$odc)(),
							S = (0, o.$n8b)(),
							I = (0, m.createMemo)(() =>
								S.nonPersistentStorage.promptBars.find((H) => H.id === $.id),
							),
							T = (0, m.createMemo)(() =>
								S.nonPersistentStorage.promptBars.filter(
									(H) =>
										(I() && H.dependencyPromptBarIds?.includes(I().id)) ?? !1,
								),
							),
							P = (H) => {
								z(H),
									A(void 0),
									v.commandService.executeCommand(a.$RW, H, !0),
									v.inlineDiffService.hidePromptBar(H);
							},
							k = (H) => {
								z(H), A(void 0);
								const q = T().find((V) => V.id === H);
								q && q.diffId && v.inlineDiffService.acceptDiff(q.diffId);
							},
							L = (0, m.createMemo)(async () =>
								(
									await Promise.all(
										T().map(async (q) => {
											const V = await v.textModelService.createModelReference(
												q.uri,
											);
											let G;
											try {
												const K = V.object.textEditorModel;
												G = v.cmdKService.getPromptBarCurrentRange(q, K);
											} finally {
												V.dispose();
											}
											return { id: q.id, range: G };
										}),
									)
								).reduce(
									(q, { id: V, range: G }) => ((q[V] = G?.startLineNumber), q),
									{},
								),
							),
							[D, M] = (0, m.createSignal)({});
						(0, m.createEffect)(async () => {
							const H = await L();
							M(H);
						});
						const [N, A] = (0, m.createSignal)(),
							R = 350,
							O = () =>
								(() => {
									const H = f();
									return H.style.setProperty("height", "350px"), H;
								})(),
							B = (0, m.createMemo)(() =>
								T().map((H) => ({
									promptBar: H,
									element: O(),
									editor: void 0,
									inlineDiffController: void 0,
								})),
							),
							U = async (H) => {
								const q = B().find((W) => W.promptBar.id === H);
								if (!q || q.promptBar.visible === !1) return;
								const V = c.$X0b.getEditorOptions(v.configurationService);
								V.scrollbar &&
									((V.scrollbar.vertical = "auto"),
									(V.scrollbar.verticalScrollbarSize = 10),
									(V.scrollbar.horizontal = "hidden"));
								const G = v.instantiationService.createInstance(
										c.$X0b,
										q.element,
										V,
										{},
									),
									K = v.instantiationService.createInstance(g.$Ddc, G),
									J = await v.textModelService.createModelReference(
										q.promptBar.uri,
									);
								try {
									G.setModel(J.object.textEditorModel),
										G.revealLine(D()[q.promptBar.id] ?? 1);
								} finally {
									J.dispose();
								}
								G.onMouseDown((W) => {
									v.commandService.executeCommand(a.$hW, q.promptBar.id);
								}),
									G.onMouseWheel((W) => {}),
									(q.editor = G),
									(q.inlineDiffController = K);
							},
							z = async (H) => {
								const q = B().find((V) => V.promptBar.id === H);
								q &&
									(q.editor?.dispose(),
									q.inlineDiffController?.dispose(),
									q.element.remove(),
									(q.element = O()));
							},
							F = (0, m.createMemo)(
								() => 26 * T().length + (N() !== void 0 ? R : 0),
							);
						(0, m.onCleanup)(() => {
							for (const H of B()) H.element.remove(), H.editor?.dispose();
							x().dispose();
						});
						const x = () => {
							const H = { value: $.multiFileEditChainOfThought, isTrusted: !0 },
								V = v.instantiationService.createInstance(p.$Qzb, {}).render(H);
							return (V.element.style.whiteSpace = "normal"), V;
						};
						return (0, C.createComponent)(m.Show, {
							get when() {
								return (
									(0, d.memo)(() => I() !== void 0)() &&
									(T().length > 0 || $.multiFileEditChainOfThought !== "")
								);
							},
							get children() {
								return [
									(() => {
										const H = b();
										return (
											H.style.setProperty("opacity", "0.1"),
											H.style.setProperty("height", "1px"),
											H
										);
									})(),
									(() => {
										const H = f();
										return (
											H.style.setProperty("margin-bottom", "5px"),
											(0, E.insert)(
												H,
												(0, C.createComponent)(m.For, {
													get each() {
														return B();
													},
													get fallback() {
														return (() => {
															const q = s(),
																V = q.firstChild;
															return (
																q.style.setProperty(
																	"color",
																	"var(--vscode-input-placeholderForeground)",
																),
																q.style.setProperty("margin", "10px"),
																q.style.setProperty("max-height", "350px"),
																q.style.setProperty("overflow-y", "auto"),
																q.style.setProperty("display", "flex"),
																q.style.setProperty(
																	"flex-direction",
																	"column-reverse",
																),
																(0, E.insert)(V, () => x().element),
																q
															);
														})();
													},
													children: (q) =>
														(() => {
															const V = l(),
																G = V.firstChild,
																K = G.firstChild,
																J = K.firstChild,
																W = J.nextSibling,
																X = W.firstChild,
																Y = W.nextSibling,
																ie = Y.nextSibling,
																ne = G.nextSibling;
															return (
																G.addEventListener("click", () => {
																	const ee = N();
																	A((_) =>
																		_ === q.promptBar.id
																			? void 0
																			: q.promptBar.id,
																	),
																		ee === q.promptBar.id
																			? z(q.promptBar.id)
																			: (ee && z(ee), U(q.promptBar.id));
																}),
																K.style.setProperty("display", "flex"),
																K.style.setProperty(
																	"justify-content",
																	"space-between",
																),
																K.style.setProperty("align-items", "center"),
																K.style.setProperty(
																	"color",
																	"var(--vscode-input-placeholderForeground)",
																),
																W.style.setProperty("white-space", "nowrap"),
																W.style.setProperty("overflow", "hidden"),
																W.style.setProperty(
																	"text-overflow",
																	"ellipsis",
																),
																W.style.setProperty("direction", "rtl"),
																W.style.setProperty("cursor", "pointer"),
																X.style.setProperty("direction", "ltr"),
																(0, E.insert)(X, () =>
																	v.workspaceContextService.asRelativePath(
																		q.promptBar.uri,
																	),
																),
																Y.style.setProperty("flex-grow", "1"),
																ie.style.setProperty("display", "flex"),
																(0, E.insert)(
																	ie,
																	(0, C.createComponent)(m.Show, {
																		get when() {
																			return (
																				N() === q.promptBar.id &&
																				!q.promptBar.generating
																			);
																		},
																		get children() {
																			return (0, C.createComponent)(r.$rdc, {
																				title: "Accept",
																				type: "primary",
																				style: {
																					"font-size": "12px",
																					"margin-left": "10px",
																				},
																				onClick: () => k(q.promptBar.id),
																			});
																		},
																	}),
																	null,
																),
																(0, E.insert)(
																	ie,
																	(0, C.createComponent)(r.$rdc, {
																		get title() {
																			return q.promptBar.generating
																				? "Cancel"
																				: "Reject";
																		},
																		type: "secondary",
																		style: {
																			"font-size": "12px",
																			"margin-left": "10px",
																		},
																		onClick: () => P(q.promptBar.id),
																	}),
																	null,
																),
																ne.style.setProperty("cursor", "pointer"),
																(0, E.insert)(
																	ne,
																	(0, C.createComponent)(m.Show, {
																		get when() {
																			return N() === q.promptBar.id;
																		},
																		get children() {
																			return q.element;
																		},
																	}),
																),
																(0, w.effect)(() =>
																	(0, i.className)(
																		J,
																		N() === q.promptBar.id
																			? h.ThemeIcon.asClassName(
																					u.$ak.chevronDown,
																				)
																			: h.ThemeIcon.asClassName(
																					u.$ak.chevronRight,
																				),
																	),
																),
																V
															);
														})(),
												}),
											),
											(0, w.effect)(() =>
												(B().length > 0 ? `${F()}px` : void 0) != null
													? H.style.setProperty(
															"height",
															B().length > 0 ? `${F()}px` : void 0,
														)
													: H.style.removeProperty("height"),
											),
											H
										);
									})(),
								];
							},
						});
					};
				e.$Edc = y;
			},
		),
		define(
			de[4222],
			he([1, 0, 2, 2, 2, 2, 13, 147, 534, 534, 1137]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Gdc = void 0);
				const u = (0, t.template)(
						'<div class="inline-prompt-button-area"><hr><div>Which files should we edit?</div><hr>',
					),
					a = (0, t.template)("<div>"),
					h = (0, t.template)(
						'<div class="inline-prompt-button-area"><div><div><span>',
					),
					c = (n) => {
						const g = (0, r.$n8b)(),
							p = (0, C.createMemo)(() =>
								g.nonPersistentStorage.promptBars.find((f) => f.id === n.id),
							),
							o = (0, C.createMemo)(() =>
								g.nonPersistentStorage.promptBars.filter(
									(f) => f.dependencyPromptBarIds?.includes(p().id) ?? !1,
								),
							);
						return (0, E.createComponent)(C.Show, {
							get when() {
								return (
									p() !== void 0 &&
									o().length === 0 &&
									n.multiFileEditingState ===
										m.MultiFileEditingState.WaitingForUserInput &&
									n.potentialFilesToEdit.length > 0
								);
							},
							get children() {
								const f = u(),
									b = f.firstChild,
									s = b.nextSibling,
									l = s.firstChild,
									y = s.nextSibling;
								return (
									b.style.setProperty("opacity", "0.1"),
									b.style.setProperty("height", "1px"),
									s.style.setProperty(
										"color",
										"var(--vscode-input-placeholderForeground)",
									),
									(0, w.insert)(
										s,
										(0, E.createComponent)(C.For, {
											get each() {
												return n.potentialFilesToEdit;
											},
											get fallback() {
												return a();
											},
											children: ($, v) =>
												(() => {
													const S = h(),
														I = S.firstChild,
														T = I.firstChild,
														P = T.firstChild;
													return (
														I.style.setProperty("display", "flex"),
														I.style.setProperty(
															"justify-content",
															"space-between",
														),
														I.style.setProperty("align-items", "center"),
														T.style.setProperty("white-space", "nowrap"),
														T.style.setProperty("overflow", "hidden"),
														T.style.setProperty("text-overflow", "ellipsis"),
														T.style.setProperty("max-width", "400px"),
														T.style.setProperty("direction", "rtl"),
														T.style.setProperty("cursor", "pointer"),
														T.style.setProperty("font-size", "12px"),
														(0, w.insert)(P, $),
														(0, w.insert)(
															I,
															(0, E.createComponent)(C.Show, {
																get when() {
																	return !n.selectedFilesToEdit.includes($);
																},
																get children() {
																	const k = a();
																	return (
																		k.style.setProperty("display", "flex"),
																		k.style.setProperty(
																			"white-space",
																			"nowrap",
																		),
																		(0, w.insert)(
																			k,
																			(0, E.createComponent)(d.$rdc, {
																				get title() {
																					return v() ===
																						n.potentialFilesToEditCurrentIndex
																						? "\u2318Y Select"
																						: "Select";
																				},
																				type: "secondary",
																				style: {
																					"font-size": "10px",
																					"margin-right": "1px",
																				},
																				onClick: () => {
																					n.setSelectedFilesToEdit([
																						...n.selectedFilesToEdit.filter(
																							(M) => M !== $,
																						),
																						$,
																					]);
																					const L =
																							n.potentialFilesToEdit.indexOf($),
																						D =
																							L + 1 >=
																							n.potentialFilesToEdit.length
																								? 0
																								: L + 1;
																					n.setPotentialFilesToEditCurrentIndex(
																						D,
																					);
																				},
																			}),
																			null,
																		),
																		(0, w.insert)(
																			k,
																			(0, E.createComponent)(C.Show, {
																				get when() {
																					return (
																						n.potentialFilesToEditCurrentIndex ===
																						v()
																					);
																				},
																				get children() {
																					return (0, E.createComponent)(
																						d.$rdc,
																						{
																							title: "\u2318N Ignore",
																							type: "secondary",
																							style: { "font-size": "10px" },
																							onClick: () => {
																								n.setSelectedFilesToEdit([
																									...n.selectedFilesToEdit.filter(
																										(M) => M !== $,
																									),
																								]);
																								const L =
																										n.potentialFilesToEdit.indexOf(
																											$,
																										),
																									D =
																										L + 1 >=
																										n.potentialFilesToEdit
																											.length
																											? 0
																											: L + 1;
																								n.setPotentialFilesToEditCurrentIndex(
																									D,
																								);
																							},
																						},
																					);
																				},
																			}),
																			null,
																		),
																		k
																	);
																},
															}),
															null,
														),
														(0, w.insert)(
															I,
															(0, E.createComponent)(C.Show, {
																get when() {
																	return n.selectedFilesToEdit.includes($);
																},
																get children() {
																	const k = a();
																	return (
																		k.style.setProperty("display", "flex"),
																		k.style.setProperty(
																			"white-space",
																			"nowrap",
																		),
																		(0, w.insert)(
																			k,
																			(0, E.createComponent)(d.$rdc, {
																				get title() {
																					return v() ===
																						n.potentialFilesToEditCurrentIndex
																						? "\u2318N Remove"
																						: "Remove";
																				},
																				type: "secondary",
																				style: { "font-size": "10px" },
																				onClick: () => {
																					n.setSelectedFilesToEdit([
																						...n.selectedFilesToEdit.filter(
																							(M) => M !== $,
																						),
																					]);
																					const L =
																							n.potentialFilesToEdit.indexOf($),
																						D =
																							L + 1 >=
																							n.potentialFilesToEdit.length
																								? 0
																								: L + 1;
																					n.setPotentialFilesToEditCurrentIndex(
																						D,
																					);
																				},
																			}),
																		),
																		k
																	);
																},
															}),
															null,
														),
														(0, i.effect)(
															(k) => {
																const L =
																		v() === n.potentialFilesToEditCurrentIndex
																			? "1px solid var(--vscode-commandCenter-activeBorder)"
																			: "none",
																	D = n.selectedFilesToEdit.includes($)
																		? "rgba(180, 180, 180, 0.1)"
																		: "transparent";
																return (
																	L !== k._v$ &&
																		((k._v$ = L) != null
																			? S.style.setProperty("border", L)
																			: S.style.removeProperty("border")),
																	D !== k._v$2 &&
																		((k._v$2 = D) != null
																			? S.style.setProperty(
																					"background-color",
																					D,
																				)
																			: S.style.removeProperty(
																					"background-color",
																				)),
																	k
																);
															},
															{ _v$: void 0, _v$2: void 0 },
														),
														S
													);
												})(),
										}),
										null,
									),
									y.style.setProperty("opacity", "0.1"),
									y.style.setProperty("height", "1px"),
									f
								);
							},
						});
					};
				e.$Gdc = c;
			},
		),
		define(
			de[4223],
			he([1, 0, 2, 2, 2, 13, 147, 14, 222, 73, 256, 36, 571, 141, 60, 2347]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Cuc = s);
				const g = (0, t.template)(
						'<div class="on-hover-please-highlight-editor-empty-screen">More...',
					),
					p = (0, t.template)("<div><div>"),
					o = (0, t.template)("<div>"),
					f = (0, t.template)(
						'<div class="on-hover-please-highlight-editor-empty-screen"> <span>',
					),
					b = [
						"workspacesService",
						"commandService",
						"labelService",
						"hostService",
						"remoteAgentService",
						"extensionService",
						"paneCompositeService",
					];
				function s(y, $) {
					return (0, a.$ndc)(() => (0, w.createComponent)(l, {}), y, $, {
						restrictToServices: b,
					});
				}
				function l() {
					const y = (0, a.$pdc)(),
						[$, v] = (0, E.createSignal)([]);
					(0, E.onMount)(() => {
						(async () => {
							const T = await y.workspacesService.getRecentlyOpened();
							v(T.workspaces);
						})();
					});
					const S = () => y.remoteAgentService.getConnection() !== null;
					return (() => {
						const I = o();
						return (
							I.style.setProperty("display", "flex"),
							I.style.setProperty("justify-content", "center"),
							I.style.setProperty("align-items", "center"),
							I.style.setProperty("height", "100%"),
							I.style.setProperty("width", "100%"),
							I.style.setProperty("flex-direction", "column"),
							(0, i.insert)(
								I,
								(0, w.createComponent)(C.$rdc, {
									title: "Open a folder",
									type: "primary",
									get codicon() {
										return d.$ak.folder;
									},
									style: {
										"font-size": "16px",
										"padding-top": "14px",
										"padding-bottom": "14px",
										"padding-left": "23px",
										"padding-right": "23px",
										"border-radius": "6px",
										margin: "8px",
									},
									codiconStyle: { "font-size": "16px", "margin-right": "6px" },
									onClick: () => {
										y.commandService.executeCommand(
											"workbench.action.files.openFolder",
										);
									},
								}),
								null,
							),
							(0, i.insert)(
								I,
								(0, w.createComponent)(E.Show, {
									get when() {
										return !S();
									},
									get children() {
										return (0, w.createComponent)(C.$rdc, {
											title: "Open with SSH",
											type: "secondary",
											get codicon() {
												return d.$ak.terminal;
											},
											style: {
												"font-size": "16px",
												"padding-top": "14px",
												"padding-bottom": "14px",
												"padding-left": "23px",
												"padding-right": "23px",
												"border-radius": "6px",
											},
											codiconStyle: {
												"font-size": "16px",
												"margin-right": "6px",
											},
											onClick: () => {
												const T = y.extensionService,
													P = y.commandService,
													k = y.paneCompositeService;
												(async () => {
													const L = await T.getExtension(
															"ms-vscode-remote.remote-ssh",
														),
														D = await T.getExtension(
															"jeanp413.open-remote-ssh",
														);
													if (L)
														P.executeCommand(
															"opensshremotes.openEmptyWindowInCurrentWindow",
														);
													else if (D)
														P.executeCommand(
															"openremotessh.openEmptyWindowInCurrentWindow",
														);
													else
														return k
															.openPaneComposite(
																c.$LQb,
																n.ViewContainerLocation.Sidebar,
																!0,
															)
															.then((M) => {
																M &&
																	((M?.getViewPaneContainer()).search(
																		"@recommended:remotes",
																	),
																	M.focus());
															});
												})();
											},
										});
									},
								}),
								null,
							),
							(0, i.insert)(
								I,
								(0, w.createComponent)(E.Show, {
									get when() {
										return $().length > 0;
									},
									get children() {
										const T = p(),
											P = T.firstChild;
										return (
											T.style.setProperty("margin-top", "20px"),
											P.style.setProperty("display", "flex"),
											P.style.setProperty("flex-direction", "column"),
											P.style.setProperty("gap", "5px"),
											P.style.setProperty("font-size", "14px"),
											(0, i.insert)(
												P,
												(0, w.createComponent)(E.For, {
													get each() {
														return $().slice(0, 5);
													},
													children: (k, L) => {
														let D, M;
														(0, u.$eRb)(k)
															? ((M = { folderUri: k.folderUri }),
																(D =
																	k.label ||
																	y.labelService.getWorkspaceLabel(
																		k.folderUri,
																		{ verbose: r.Verbosity.LONG },
																	)))
															: ((D =
																	k.label ||
																	y.labelService.getWorkspaceLabel(
																		k.workspace,
																		{ verbose: r.Verbosity.LONG },
																	)),
																(M = { workspaceUri: k.workspace.configPath }));
														const { name: N, parentPath: A } = (0, m.$FO)(D);
														return (() => {
															const R = f(),
																O = R.firstChild,
																B = O.nextSibling;
															return (
																R.addEventListener("click", (U) => {
																	y.hostService.openWindow([M], {
																		forceNewWindow: U.ctrlKey || U.metaKey,
																		remoteAuthority: k.remoteAuthority || null,
																	}),
																		U.preventDefault(),
																		U.stopPropagation();
																}),
																R.style.setProperty("cursor", "pointer"),
																R.style.setProperty("opacity", "0.7"),
																R.style.setProperty("margin", "2px"),
																(0, i.insert)(R, N, O),
																B.style.setProperty("margin-left", "10px"),
																B.style.setProperty("opacity", "0.5"),
																(0, i.insert)(B, A),
																R
															);
														})();
													},
												}),
												null,
											),
											(0, i.insert)(
												P,
												(0, w.createComponent)(E.Show, {
													get when() {
														return $().length > 5;
													},
													get children() {
														const k = g();
														return (
															k.addEventListener("click", (L) => {
																y.commandService.executeCommand(h.$Yqc.ID);
															}),
															k.style.setProperty("cursor", "pointer"),
															k.style.setProperty("opacity", "0.7"),
															k
														);
													},
												}),
												null,
											),
											T
										);
									},
								}),
								null,
							),
							I
						);
					})();
				}
			},
		),
		define(
			de[4224],
			he([1, 0, 3, 39, 32, 25, 52, 10, 7, 31, 8, 143, 18, 44, 4223, 5]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Duc = void 0);
				let p = class extends t.$1c {
					constructor(f, b, s, l, y, $, v, S, I, T, P) {
						super(),
							(this.c = b),
							(this.f = s),
							(this.g = l),
							(this.j = y),
							(this.m = $),
							(this.n = v),
							(this.q = S),
							(this.r = I),
							(this.s = T),
							(this.t = P),
							(this.a = (0, m.h)(".editorCursorMainDiv").root),
							(this.a.style.height = "100%"),
							(0, m.$fhb)(f, this.a),
							this.D((0, n.$Cuc)(this.a, this.t)),
							(this.b = l.getWorkbenchState()),
							this.u(),
							this.w();
					}
					u() {
						this.D(this.c.onDidShutdown(() => this.dispose())),
							this.D(
								this.g.onDidChangeWorkbenchState((f) => {
									this.b !== f && ((this.b = f), this.w());
								}),
							),
							this.D(
								this.s.onDidEditorsChange((f) => {
									this.w();
								}),
							);
					}
					w() {
						this.b !== E.WorkbenchState.EMPTY ||
						this.s.getEditors(c.EditorsOrder.SEQUENTIAL).length > 0
							? (this.a.style.display = "none")
							: (this.a.style.display = "block"),
							this.n.publicLog("actionMenu open");
					}
					dispose() {
						super.dispose();
					}
				};
				(e.$Duc = p),
					(e.$Duc = p =
						Ne(
							[
								j(1, C.$n6),
								j(2, i.$uZ),
								j(3, E.$Vi),
								j(4, u.$6j),
								j(5, d.$gj),
								j(6, w.$km),
								j(7, r.$ek),
								j(8, a.$$m),
								j(9, h.$IY),
								j(10, g.$Li),
							],
							p,
						));
			},
		),
		define(
			de[1984],
			he([
				1, 0, 1287, 44, 100, 313, 6, 5, 7, 128, 8, 436, 35, 51, 123, 66, 3860,
				84, 707, 4, 24, 3, 32, 15, 159, 548, 105, 39, 11, 168, 92, 49, 18, 136,
				671, 19, 23, 116, 57, 170, 9, 68, 12, 34, 269, 106, 4224, 4012, 217,
				231, 87, 296, 22, 2339,
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
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
				Y,
				ie,
				ne,
			) {
				"use strict";
				var ee;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Euc = void 0);
				let _ = (ee = class extends h.$pP {
					static createNew(Q, Z, se, re, le, oe) {
						return le.createInstance(ee, null, Q, Z, se, re, oe);
					}
					static createFromSerialized(Q, Z, se, re, le, oe, ae) {
						return oe.createInstance(ee, Q, Z, se, re, le, ae);
					}
					static createCopy(Q, Z, se, re, le, oe, ae) {
						return oe.createInstance(ee, Q, Z, se, re, le, ae);
					}
					constructor(
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
						be,
						Ce,
						Le,
						Fe,
						Oe,
						xe,
						He,
					) {
						super($e),
							(this.P = Z),
							(this.groupsView = se),
							(this.Q = re),
							(this.R = le),
							(this.S = ae),
							(this.U = pe),
							(this.W = ye),
							(this.X = ue),
							(this.Y = fe),
							(this.Z = me),
							(this.$ = ve),
							(this.ab = ge),
							(this.bb = be),
							(this.cb = Ce),
							(this.db = Le),
							(this.eb = Fe),
							(this.fb = Oe),
							(this.gb = xe),
							(this.hb = He),
							(this.a = this.D(new C.$re())),
							(this.onDidFocus = this.a.event),
							(this.b = this.D(new C.$re())),
							(this.onWillDispose = this.b.event),
							(this.c = this.D(new C.$re())),
							(this.onDidModelChange = this.c.event),
							(this.f = this.D(new C.$re())),
							(this.onDidActiveEditorChange = this.f.event),
							(this.g = this.D(new C.$re())),
							(this.onDidOpenEditorFail = this.g.event),
							(this.j = this.D(new C.$re())),
							(this.onWillCloseEditor = this.j.event),
							(this.m = this.D(new C.$re())),
							(this.onDidCloseEditor = this.m.event),
							(this.r = this.D(new C.$re())),
							(this.onWillMoveEditor = this.r.event),
							(this.s = this.D(new C.$re())),
							(this.onWillOpenEditor = this.s.event),
							(this.L = this.D(new $.$1h((Je) => this.zb(Je), 0))),
							(this.M = new Map()),
							(this.N = this.D(new l.$2c())),
							(this.O = new $.$0h()),
							(this.whenRestored = this.O.p),
							(this.Hb = !1),
							(this.element = document.createElement("div")),
							(this.Yb = this.D(new C.$Ae())),
							(this.onDidChange = this.Yb.event),
							Q instanceof ee
								? (this.t = this.D(Q.t.clone()))
								: (0, t.$lY)(Q)
									? (this.t = this.D(ae.createInstance(t.$qY, Q)))
									: (this.t = this.D(ae.createInstance(t.$qY, void 0))),
							(this.scopedContextKeyService = this.D(
								this.U.createScoped(this.element),
							)),
							this.element.classList.add(
								...(0, s.$Lb)([
									"editor-group-container",
									this.t.isLocked ? "locked" : void 0,
								]),
							),
							this.jb(),
							this.kb(),
							this.lb(),
							this.D(this.S.createInstance(K.$Duc, this.element)),
							(this.H = this.D(new a.$bpb(this.element, G.$nyb))),
							this.H.hide(),
							(this.z = this.D(
								this.S.createChild(
									new r.$Ki(
										[u.$6j, this.scopedContextKeyService],
										[o.$bO, this.D(new f.$JMb(this.H, this))],
									),
								),
							)),
							(this.C = this.D(this.z.createInstance(w.$BQb))),
							this.ib(),
							(this.F = document.createElement("div")),
							this.F.classList.add("title"),
							this.element.appendChild(this.F),
							(this.G = this.D(
								this.z.createInstance(
									J.$otc,
									this.F,
									this.P,
									this.groupsView,
									this,
									this.t,
								),
							)),
							(this.I = document.createElement("div")),
							this.I.classList.add("editor-container"),
							this.element.appendChild(this.I),
							(this.J = this.D(
								this.z.createInstance(p.$Auc, this.element, this.I, this),
							)),
							(this.Yb.input = this.J.onDidChangeSizeConstraints),
							this.nb(),
							this.pb(),
							this.ob(),
							this.updateStyles(),
							(this.qb(Q, oe) ?? Promise.resolve()).finally(() => {
								this.O.complete();
							}),
							this.rb();
					}
					ib() {
						const Q = this.P.bind(w.$JPb, this),
							Z = this.P.bind(w.$KPb, this),
							se = this.P.bind(w.$LPb, this),
							re = this.P.bind(w.$MPb, this),
							le = this.P.bind(w.$NPb, this),
							oe = this.P.bind(w.$YPb, this),
							ae = this.P.bind(w.$3Pb, this),
							pe = w.$6Pb.bindTo(this.scopedContextKeyService),
							$e = w.$7Pb.bindTo(this.scopedContextKeyService),
							ye = w.$8Pb.bindTo(this.scopedContextKeyService),
							ue = this.P.bind(w.$TPb, this),
							fe = this.P.bind(w.$OPb, this),
							me = this.P.bind(w.$RPb, this),
							ve = this.P.bind(w.$QPb, this),
							ge = this.P.bind(w.$PPb, this),
							be = this.P.bind(w.$VPb, this),
							Ce = this.P.bind(w.$WPb, this),
							Le = this.P.bind(w.$UPb, this),
							Fe = this.P.bind(w.$SPb, this),
							Oe = this.P.bind(w.$XPb, this),
							xe = this.D(new l.$2c()),
							He = () => {
								xe.clear(),
									this.scopedContextKeyService.bufferChangeEvents(() => {
										const Je = this.activeEditor,
											Te = this.activeEditorPane;
										if (
											(this.C.set(
												i.$A1.getOriginalUri(Je, {
													supportSideBySide: i.SideBySideEditor.PRIMARY,
												}),
											),
											(0, w.$CQb)(Le, Je, this.eb),
											Je
												? (Fe.set(
														Je.hasCapability(
															i.EditorInputCapabilities.CanSplitInGroup,
														),
													),
													Oe.set(Je.typeId === E.$iY.ID),
													Q.set(Je.isDirty() && !Je.isSaving()),
													(xe.value = Je.onDidChangeDirty(() => {
														Q.set(Je.isDirty() && !Je.isSaving());
													})))
												: (Fe.set(!1), Oe.set(!1), Q.set(!1)),
											Te)
										) {
											ue.set(Te.getId()),
												me.set(
													!Te.input.hasCapability(
														i.EditorInputCapabilities.Untitled,
													),
												),
												fe.set(!!Te.input.isReadonly());
											const Ee = i.$A1.getOriginalUri(Te.input, {
													supportSideBySide: i.SideBySideEditor.PRIMARY,
												}),
												Ie = i.$A1.getOriginalUri(Te.input, {
													supportSideBySide: i.SideBySideEditor.SECONDARY,
												});
											ge.set(
												Te.input instanceof ie.$GVb &&
													!Te.input.original.isReadonly() &&
													!!Ee &&
													(this.hb.hasProvider(Ee) ||
														Ee.scheme === O.Schemas.untitled) &&
													!!Ie &&
													(this.hb.hasProvider(Ie) ||
														Ie.scheme === O.Schemas.untitled),
											),
												ve.set(
													!!Ee &&
														this.hb.hasProvider(Ee) &&
														!this.hb.hasCapability(
															Ee,
															ne.FileSystemProviderCapabilities.Readonly,
														),
												);
											const Be = Te?.getId() === i.$d1;
											Ce.set(Be), be.set(Be);
										} else
											ue.reset(),
												me.reset(),
												fe.reset(),
												ge.reset(),
												ve.reset();
									});
							},
							Ke = (Je) => {
								switch (Je.kind) {
									case i.GroupModelChangeKind.GROUP_LOCKED:
										ae.set(this.isLocked);
										break;
									case i.GroupModelChangeKind.EDITOR_ACTIVE:
										se.set(this.t.isFirst(this.t.activeEditor)),
											re.set(this.t.isLast(this.t.activeEditor)),
											Z.set(
												this.t.activeEditor
													? this.t.isPinned(this.t.activeEditor)
													: !1,
											),
											le.set(
												this.t.activeEditor
													? this.t.isSticky(this.t.activeEditor)
													: !1,
											);
										break;
									case i.GroupModelChangeKind.EDITOR_CLOSE:
										Z.set(
											this.t.activeEditor
												? this.t.isPinned(this.t.activeEditor)
												: !1,
										),
											le.set(
												this.t.activeEditor
													? this.t.isSticky(this.t.activeEditor)
													: !1,
											);
									case i.GroupModelChangeKind.EDITOR_OPEN:
									case i.GroupModelChangeKind.EDITOR_MOVE:
										se.set(this.t.isFirst(this.t.activeEditor)),
											re.set(this.t.isLast(this.t.activeEditor));
										break;
									case i.GroupModelChangeKind.EDITOR_PIN:
										Je.editor &&
											Je.editor === this.t.activeEditor &&
											Z.set(this.t.isPinned(this.t.activeEditor));
										break;
									case i.GroupModelChangeKind.EDITOR_STICKY:
										Je.editor &&
											Je.editor === this.t.activeEditor &&
											le.set(this.t.isSticky(this.t.activeEditor));
										break;
									case i.GroupModelChangeKind.EDITORS_SELECTION:
										pe.set(this.t.selectedEditors.length > 1),
											$e.set(this.t.selectedEditors.length === 2),
											ye.set(
												this.t.selectedEditors.every(
													(Te) =>
														Te.resource &&
														(this.hb.hasProvider(Te.resource) ||
															Te.resource.scheme === O.Schemas.untitled),
												),
											);
										break;
								}
								oe.set(this.count);
							};
						this.D(this.onDidModelChange((Je) => Ke(Je))),
							this.D(this.onDidActiveEditorChange(() => He())),
							He(),
							Ke({ kind: i.GroupModelChangeKind.EDITOR_ACTIVE }),
							Ke({ kind: i.GroupModelChangeKind.GROUP_LOCKED });
					}
					jb() {
						this.D(
							(0, m.$0fb)(this.element, m.$$gb.DBLCLICK, (Q) => {
								this.isEmpty && m.$ahb.stop(Q);
							}),
						),
							this.D(
								(0, m.$0fb)(this.element, m.$$gb.AUXCLICK, (Q) => {
									this.isEmpty &&
										Q.button === 1 &&
										(m.$ahb.stop(Q, !0), this.groupsView.removeGroup(this));
								}),
							);
					}
					kb() {
						const Q = document.createElement("div");
						Q.classList.add("editor-group-container-toolbar"),
							this.element.appendChild(Q);
						const Z = this.D(
								new I.$eib(Q, {
									ariaLabel: (0, b.localize)(3441, null),
									highlightToggledItems: !0,
								}),
							),
							se = this.D(
								this.Y.createMenu(
									P.$XX.EmptyEditorGroup,
									this.scopedContextKeyService,
								),
							),
							re = () => {
								const le = { primary: [], secondary: [] };
								(this.N.value = (0, l.$Yc)(() => Z.clear())),
									(0, L.$Kyb)(
										se,
										{ arg: { groupId: this.id }, shouldForwardArgs: !0 },
										le,
										"navigation",
									);
								for (const oe of [...le.primary, ...le.secondary]) {
									const ae = this.X.lookupKeybinding(oe.id);
									Z.push(oe, {
										icon: !0,
										label: !1,
										keybinding: ae?.getLabel(),
									});
								}
							};
						re(), this.D(se.onDidChange(re));
					}
					lb() {
						this.D(
							(0, m.$0fb)(this.element, m.$$gb.CONTEXT_MENU, (Q) => this.mb(Q)),
						),
							this.D(
								(0, m.$0fb)(this.element, v.EventType.Contextmenu, () =>
									this.mb(),
								),
							);
					}
					mb(Q) {
						if (!this.isEmpty) return;
						let Z = this.element;
						Q && (Z = new k.$2fb((0, m.getWindow)(this.element), Q)),
							this.Z.showContextMenu({
								menuId: P.$XX.EmptyEditorGroupContext,
								contextKeyService: this.U,
								getAnchor: () => Z,
								onHide: () => {
									this.focus();
								},
							});
					}
					nb() {
						const Q = this.D((0, m.$dhb)(this.element));
						this.D(
							Q.onDidFocus(() => {
								this.isEmpty && this.a.fire();
							}),
						);
						const Z = (se) => {
							let re;
							if ((0, m.$7gb)(se)) {
								if (se.button !== 0 || (H.$m && se.ctrlKey)) return;
								re = se.target;
							} else re = se.initialTarget;
							(0, m.$Egb)(re, "monaco-action-bar", this.F) ||
								(0, m.$Egb)(re, "monaco-breadcrumb-item", this.F) ||
								setTimeout(() => {
									this.focus();
								});
						};
						this.D((0, m.$0fb)(this.F, m.$$gb.MOUSE_DOWN, (se) => Z(se))),
							this.D((0, m.$0fb)(this.F, v.EventType.Tap, (se) => Z(se))),
							this.D(
								this.J.onDidFocus(() => {
									this.a.fire();
								}),
							);
					}
					ob() {
						this.isEmpty
							? (this.element.classList.add("empty"),
								(this.element.tabIndex = 0),
								this.element.setAttribute(
									"aria-label",
									(0, b.localize)(3442, null, this.ariaLabel),
								))
							: (this.element.classList.remove("empty"),
								this.element.removeAttribute("tabIndex"),
								this.element.removeAttribute("aria-label")),
							this.updateStyles();
					}
					pb() {
						this.F.classList.toggle(
							"tabs",
							this.groupsView.partOptions.showTabs === "multiple",
						),
							this.F.classList.toggle(
								"show-file-icons",
								this.groupsView.partOptions.showIcons,
							);
					}
					qb(Q, Z) {
						if (this.count === 0) return;
						let se;
						Q instanceof ee
							? (se = (0, S.$IEb)(Q))
							: (se = Object.create(null));
						const re = this.t.activeEditor;
						if (!re) return;
						(se.pinned = this.t.isPinned(re)),
							(se.sticky = this.t.isSticky(re)),
							(se.preserveFocus = !0);
						const le = { preserveWindowOrder: !0, skipTitleUpdate: !0 },
							oe = (0, m.$Jgb)(),
							ae = this.Kb(re, { active: !0, isNew: !1 }, se, le).then(() => {
								this.groupsView.activeGroup === this &&
									oe &&
									(0, m.$Kgb)(oe) &&
									!Z?.preserveFocus &&
									this.focus();
							});
						return this.G.openEditors(this.editors), ae;
					}
					rb() {
						this.D(this.t.onDidModelChange((Q) => this.sb(Q))),
							this.D(
								this.groupsView.onDidChangeEditorPartOptions((Q) => this.Ab(Q)),
							),
							this.D(this.groupsView.onDidVisibilityChange((Q) => this.Fb(Q))),
							this.D(this.onDidFocus(() => this.Gb()));
					}
					sb(Q) {
						switch ((this.c.fire(Q), Q.kind)) {
							case i.GroupModelChangeKind.GROUP_LOCKED:
								this.element.classList.toggle("locked", this.isLocked);
								break;
							case i.GroupModelChangeKind.EDITORS_SELECTION:
								this.Eb();
								break;
						}
						if (Q.editor)
							switch (Q.kind) {
								case i.GroupModelChangeKind.EDITOR_OPEN:
									(0, t.$nY)(Q) && this.tb(Q.editor, Q.editorIndex);
									break;
								case i.GroupModelChangeKind.EDITOR_CLOSE:
									(0, t.$pY)(Q) &&
										this.ub(Q.editor, Q.editorIndex, Q.context, Q.sticky);
									break;
								case i.GroupModelChangeKind.EDITOR_WILL_DISPOSE:
									this.yb(Q.editor);
									break;
								case i.GroupModelChangeKind.EDITOR_DIRTY:
									this.Bb(Q.editor);
									break;
								case i.GroupModelChangeKind.EDITOR_TRANSIENT:
									this.Cb(Q.editor);
									break;
								case i.GroupModelChangeKind.EDITOR_LABEL:
									this.Db(Q.editor);
									break;
							}
					}
					tb(Q, Z) {
						this.W.publicLog("editorOpened", this.xb(Q)), this.ob();
					}
					ub(Q, Z, se, re) {
						this.j.fire({
							groupId: this.id,
							editor: Q,
							context: se,
							index: Z,
							sticky: re,
						});
						const le = [Q];
						Q instanceof E.$iY && le.push(Q.primary, Q.secondary);
						for (const oe of le) this.vb(oe) && oe.dispose();
						this.W.publicLog("editorClosed", this.xb(Q)),
							this.ob(),
							this.m.fire({
								groupId: this.id,
								editor: Q,
								context: se,
								index: Z,
								sticky: re,
							});
					}
					vb(Q) {
						for (const Z of this.P.groups)
							if (
								Z instanceof ee &&
								Z.t.contains(Q, {
									strictEquals: !0,
									supportSideBySide: i.SideBySideEditor.ANY,
								})
							)
								return !1;
						return !0;
					}
					wb(Q) {
						if (!Q) return;
						const Z = Q
							? Q.scheme === O.Schemas.file
								? Q.fsPath
								: Q.path
							: void 0;
						if (!Z) return;
						let se = (0, R.$lh)(Q);
						const re = se.indexOf("?");
						return (
							(se = re !== -1 ? se.substr(0, re) : se),
							{
								mimeType: new V.$Qp((0, A.$lYb)(Q).join(", ")),
								scheme: Q.scheme,
								ext: se,
								path: (0, N.$Aj)(Z),
							}
						);
					}
					xb(Q) {
						const Z = Q.getTelemetryDescriptor(),
							se = i.$A1.getOriginalUri(Q, {
								supportSideBySide: i.SideBySideEditor.BOTH,
							});
						return F.URI.isUri(se)
							? ((Z.resource = this.wb(se)), Z)
							: (se &&
									(se.primary && (Z.resource = this.wb(se.primary)),
									se.secondary &&
										(Z.resourceSecondary = this.wb(se.secondary))),
								Z);
					}
					yb(Q) {
						this.L.work(Q);
					}
					zb(Q) {
						let Z;
						const se = [];
						for (const re of Q) {
							const le = this.t.findEditor(re);
							if (!le) continue;
							const oe = le[0];
							oe.isDisposed() && (this.t.isActive(oe) ? (Z = oe) : se.push(oe));
						}
						for (const re of se) this.Ob(re, !0);
						Z && this.Ob(Z, !0);
					}
					Ab(Q) {
						this.pb(),
							this.G.updateOptions(Q.oldPartOptions, Q.newPartOptions),
							(Q.oldPartOptions.showTabs !== Q.newPartOptions.showTabs ||
								Q.oldPartOptions.tabHeight !== Q.newPartOptions.tabHeight ||
								(Q.oldPartOptions.showTabs === "multiple" &&
									Q.oldPartOptions.pinnedTabsOnSeparateRow !==
										Q.newPartOptions.pinnedTabsOnSeparateRow)) &&
								(this.relayout(),
								this.t.activeEditor &&
									this.G.openEditors(
										this.t.getEditors(i.EditorsOrder.SEQUENTIAL),
									)),
							this.updateStyles(),
							Q.oldPartOptions.enablePreview &&
								!Q.newPartOptions.enablePreview &&
								this.t.previewEditor &&
								this.pinEditor(this.t.previewEditor);
					}
					Bb(Q) {
						this.pinEditor(Q), this.G.updateEditorDirty(Q);
					}
					Cb(Q) {
						!this.t.isTransient(Q) &&
							!this.groupsView.partOptions.enablePreview &&
							this.pinEditor(Q);
					}
					Db(Q) {
						this.G.updateEditorLabel(Q);
					}
					Eb() {
						this.G.updateEditorSelections();
					}
					Fb(Q) {
						this.J.setVisible(Q);
					}
					Gb() {
						this.activeEditor && this.t.setTransient(this.activeEditor, !1);
					}
					get index() {
						return this.R;
					}
					get label() {
						return this.Q
							? (0, b.localize)(3443, null, this.Q, this.R + 1)
							: (0, b.localize)(3444, null, this.R + 1);
					}
					get ariaLabel() {
						return this.Q
							? (0, b.localize)(3445, null, this.Q, this.R + 1)
							: (0, b.localize)(3446, null, this.R + 1);
					}
					get disposed() {
						return this.Hb;
					}
					get isEmpty() {
						return this.count === 0;
					}
					get titleHeight() {
						return this.G.getHeight();
					}
					notifyIndexChanged(Q) {
						this.R !== Q && ((this.R = Q), this.t.setIndex(Q));
					}
					notifyLabelChanged(Q) {
						this.Q !== Q && ((this.Q = Q), this.t.setLabel(Q));
					}
					setActive(Q) {
						(this.u = Q),
							!Q &&
								this.activeEditor &&
								this.selectedEditors.length > 1 &&
								this.setSelection(this.activeEditor, []),
							this.element.classList.toggle("active", Q),
							this.element.classList.toggle("inactive", !Q),
							this.G.setActive(Q),
							this.updateStyles(),
							this.t.setActive(void 0);
					}
					get id() {
						return this.t.id;
					}
					get windowId() {
						return this.groupsView.windowId;
					}
					get editors() {
						return this.t.getEditors(i.EditorsOrder.SEQUENTIAL);
					}
					get count() {
						return this.t.count;
					}
					get stickyCount() {
						return this.t.stickyCount;
					}
					get activeEditorPane() {
						return this.J ? (this.J.activeEditorPane ?? void 0) : void 0;
					}
					get activeEditor() {
						return this.t.activeEditor;
					}
					get selectedEditors() {
						return this.t.selectedEditors;
					}
					get previewEditor() {
						return this.t.previewEditor;
					}
					isPinned(Q) {
						return this.t.isPinned(Q);
					}
					isSticky(Q) {
						return this.t.isSticky(Q);
					}
					isSelected(Q) {
						return this.t.isSelected(Q);
					}
					isTransient(Q) {
						return this.t.isTransient(Q);
					}
					isActive(Q) {
						return this.t.isActive(Q);
					}
					async setSelection(Q, Z) {
						this.isActive(Q)
							? this.t.setSelection(Q, Z)
							: await this.openEditor(
									Q,
									{ activation: B.EditorActivation.ACTIVATE },
									{ inactiveSelection: Z },
								);
					}
					contains(Q, Z) {
						return this.t.contains(Q, Z);
					}
					getEditors(Q, Z) {
						return this.t.getEditors(Q, Z);
					}
					findEditors(Q, Z) {
						const se = this.cb.asCanonicalUri(Q);
						return this.getEditors(i.EditorsOrder.SEQUENTIAL).filter((re) => {
							if (re.resource && (0, R.$gh)(re.resource, se)) return !0;
							if (
								Z?.supportSideBySide === i.SideBySideEditor.PRIMARY ||
								Z?.supportSideBySide === i.SideBySideEditor.ANY
							) {
								const le = i.$A1.getCanonicalUri(re, {
									supportSideBySide: i.SideBySideEditor.PRIMARY,
								});
								if (le && (0, R.$gh)(le, se)) return !0;
							}
							if (
								Z?.supportSideBySide === i.SideBySideEditor.SECONDARY ||
								Z?.supportSideBySide === i.SideBySideEditor.ANY
							) {
								const le = i.$A1.getCanonicalUri(re, {
									supportSideBySide: i.SideBySideEditor.SECONDARY,
								});
								if (le && (0, R.$gh)(le, se)) return !0;
							}
							return !1;
						});
					}
					getEditorByIndex(Q) {
						return this.t.getEditorByIndex(Q);
					}
					getIndexOfEditor(Q) {
						return this.t.indexOf(Q);
					}
					isFirst(Q) {
						return this.t.isFirst(Q);
					}
					isLast(Q) {
						return this.t.isLast(Q);
					}
					focus() {
						this.activeEditorPane
							? this.activeEditorPane.focus()
							: this.element.focus(),
							this.a.fire();
					}
					pinEditor(Q = this.activeEditor || void 0) {
						if (Q && !this.t.isPinned(Q)) {
							const Z = this.t.pin(Q);
							Z && this.G.pinEditor(Z);
						}
					}
					stickEditor(Q = this.activeEditor || void 0) {
						this.Ib(Q, !0);
					}
					unstickEditor(Q = this.activeEditor || void 0) {
						this.Ib(Q, !1);
					}
					Ib(Q, Z) {
						if (Q && this.t.isSticky(Q) !== Z) {
							const se = this.getIndexOfEditor(Q),
								re = Z ? this.t.stick(Q) : this.t.unstick(Q);
							if (!re) return;
							const le = this.getIndexOfEditor(re);
							le !== se && this.G.moveEditor(re, se, le, !0),
								Z ? this.G.stickEditor(re) : this.G.unstickEditor(re);
						}
					}
					async openEditor(Q, Z, se) {
						return this.Jb(Q, Z, {
							...se,
							supportSideBySide: i.SideBySideEditor.BOTH,
						});
					}
					async Jb(Q, Z, se) {
						if (!Q || Q.isDisposed()) return;
						this.s.fire({ editor: Q, groupId: this.id });
						const re =
								Z?.sticky ||
								(!this.groupsView.partOptions.enablePreview && !Z?.transient) ||
								Q.isDirty() ||
								(Z?.pinned ?? typeof Z?.index == "number") ||
								(typeof Z?.index == "number" && this.t.isSticky(Z.index)) ||
								Q.hasCapability(i.EditorInputCapabilities.Scratchpad),
							le = {
								index: Z ? Z.index : void 0,
								pinned: re,
								sticky:
									Z?.sticky ||
									(typeof Z?.index == "number" && this.t.isSticky(Z.index)),
								transient: !!Z?.transient,
								inactiveSelection: se?.inactiveSelection,
								active: this.count === 0 || !Z || !Z.inactive,
								supportSideBySide: se?.supportSideBySide,
							};
						!le.active &&
							!le.pinned &&
							this.t.activeEditor &&
							!this.t.isPinned(this.t.activeEditor) &&
							(le.active = !0);
						let oe = !1,
							ae = !1;
						if (
							(Z?.activation === B.EditorActivation.ACTIVATE
								? (oe = !0)
								: Z?.activation === B.EditorActivation.RESTORE
									? (ae = !0)
									: Z?.activation === B.EditorActivation.PRESERVE
										? ((oe = !1), (ae = !1))
										: le.active && ((oe = !Z || !Z.preserveFocus), (ae = !oe)),
							typeof le.index == "number")
						) {
							const ue = this.t.indexOf(Q);
							ue !== -1 && ue !== le.index && this.Lb(Q, le);
						}
						const { editor: pe, isNew: $e } = this.t.openEditor(Q, le);
						$e &&
							this.count === 1 &&
							this.P.groups.length > 1 &&
							pe.editorId &&
							this.groupsView.partOptions.autoLockGroups?.has(pe.editorId) &&
							this.lock(!0);
						const ye = this.Kb(pe, { active: !!le.active, isNew: $e }, Z, se);
						return (
							oe
								? this.groupsView.activateGroup(this)
								: ae && this.groupsView.restoreGroup(this),
							ye
						);
					}
					Kb(Q, Z, se, re) {
						let le;
						return (
							Z.active
								? (le = (async () => {
										const {
											pane: oe,
											changed: ae,
											cancelled: pe,
											error: $e,
										} = await this.J.openEditor(Q, se, re, {
											newInGroup: Z.isNew,
										});
										if (!pe)
											return (
												ae && this.f.fire({ editor: Q }),
												$e && this.g.fire(Q),
												!oe &&
													this.activeEditor === Q &&
													this.Ob(Q, se?.preserveFocus, { fromError: !0 }),
												oe
											);
									})())
								: (le = Promise.resolve(void 0)),
							re?.skipTitleUpdate || this.G.openEditor(Q, re),
							le
						);
					}
					async openEditors(Q) {
						const Z = (0, s.$Lb)(Q).filter(
								({ editor: ae }) => !ae.isDisposed(),
							),
							se = (0, s.$Sb)(Z);
						if (!se) return;
						const re = { supportSideBySide: i.SideBySideEditor.BOTH };
						await this.Jb(se.editor, se.options, re);
						const le = Z.slice(1),
							oe = this.getIndexOfEditor(se.editor) + 1;
						return (
							await $.Promises.settled(
								le.map(({ editor: ae, options: pe }, $e) =>
									this.Jb(
										ae,
										{ ...pe, inactive: !0, pinned: !0, index: oe + $e },
										{ ...re, skipTitleUpdate: !0 },
									),
								),
							),
							this.G.openEditors(le.map(({ editor: ae }) => ae)),
							this.J.activeEditorPane ?? void 0
						);
					}
					moveEditors(Q, Z) {
						const se = { skipTitleUpdate: this !== Z };
						let re = !1;
						const le = new Set();
						for (const { editor: oe, options: ae } of Q)
							this.moveEditor(oe, Z, ae, se) ? le.add(oe) : (re = !0);
						return (
							se.skipTitleUpdate &&
								(Z.G.openEditors(Array.from(le)),
								this.G.closeEditors(Array.from(le))),
							!re
						);
					}
					moveEditor(Q, Z, se, re) {
						return this === Z
							? (this.Lb(Q, se), !0)
							: this.Mb(Q, Z, se, { ...re, keepCopy: !1 });
					}
					Lb(Q, Z) {
						const se = Z ? Z.index : void 0;
						if (typeof se != "number") return;
						const re = this.t.indexOf(Q),
							le = this.t.getEditorByIndex(re);
						if (le) {
							if (re !== se) {
								const oe = this.t.stickyCount;
								this.t.moveEditor(le, se),
									this.t.pin(le),
									this.G.moveEditor(le, re, se, oe !== this.t.stickyCount),
									this.G.pinEditor(le);
							}
							Z?.sticky && this.stickEditor(le);
						}
					}
					Mb(Q, Z, se, re) {
						const le = re?.keepCopy;
						if (!le || Q.hasCapability(i.EditorInputCapabilities.Singleton)) {
							const ae = Q.canMove(this.id, Z.id);
							if (typeof ae == "string")
								return this.gb.error(ae, (0, b.localize)(3447, null)), !1;
						}
						const oe = (0, S.$IEb)(this, Q, {
							...se,
							pinned: !0,
							sticky: se?.sticky ?? (!le && this.t.isSticky(Q)),
						});
						return (
							le || this.r.fire({ groupId: this.id, editor: Q, target: Z.id }),
							Z.Jb(le ? Q.copy() : Q, oe, re),
							le ||
								this.Ob(Q, !0, { ...re, context: i.EditorCloseContext.MOVE }),
							!0
						);
					}
					copyEditors(Q, Z) {
						const se = { skipTitleUpdate: this !== Z };
						for (const { editor: re, options: le } of Q)
							this.copyEditor(re, Z, le, se);
						if (se.skipTitleUpdate) {
							const re = Q.map(({ editor: le }) => le);
							Z.G.openEditors(re);
						}
					}
					copyEditor(Q, Z, se, re) {
						this === Z
							? this.Lb(Q, se)
							: this.Mb(Q, Z, se, { ...re, keepCopy: !0 });
					}
					async closeEditor(Q = this.activeEditor || void 0, Z) {
						return this.Nb(Q, Z);
					}
					async Nb(Q = this.activeEditor || void 0, Z, se) {
						return !Q || (await this.Sb([Q]))
							? !1
							: (this.Ob(Q, Z?.preserveFocus, se), !0);
					}
					Ob(Q, Z = this.groupsView.activeGroup !== this, se) {
						se?.skipTitleUpdate || this.G.beforeCloseEditor(Q),
							this.t.isActive(Q) ? this.Pb(Z, se) : this.Rb(Q, se),
							se?.skipTitleUpdate || this.G.closeEditor(Q);
					}
					Pb(Q = this.groupsView.activeGroup !== this, Z) {
						const se = this.activeEditor,
							re = !Q && this.Qb(this.element),
							le = this.groupsView.partOptions.closeEmptyGroups;
						if (le && this.u && this.count === 1) {
							const pe = this.groupsView.getGroups(
								g.GroupsOrder.MOST_RECENTLY_ACTIVE,
							)[1];
							pe && (re ? pe.focus() : this.groupsView.activateGroup(pe, !0));
						}
						se && this.t.closeEditor(se, Z?.context);
						const oe = this.t.activeEditor;
						if (oe) {
							let ae;
							Q &&
								this.groupsView.activeGroup !== this &&
								(ae = B.EditorActivation.PRESERVE);
							const pe = {
									preserveFocus: Q,
									activation: ae,
									ignoreError: Z?.fromError,
								},
								$e = { preserveWindowOrder: !0 };
							this.Jb(oe, pe, $e);
						} else
							se && this.J.closeEditor(se),
								re && !le && this.focus(),
								this.f.fire({ editor: void 0 }),
								le && this.groupsView.removeGroup(this, Q);
					}
					Qb(Q) {
						const Z = (0, m.$Jgb)();
						return Z === Q.ownerDocument.body ? !0 : (0, m.$Bgb)(Z, Q);
					}
					Rb(Q, Z) {
						this.t.closeEditor(Q, Z?.context);
					}
					async Sb(Q, Z = !1) {
						if (!Q.length) return !1;
						const se = Q.shift();
						let re = this.M.get(se);
						re ||
							(Z
								? (se.revert(this.id), (re = Promise.resolve(!1)))
								: ((re = this.Tb(se)), this.M.set(se, re)));
						let le;
						try {
							le = await re;
						} finally {
							this.M.delete(se);
						}
						return le || this.Sb(Q);
					}
					async Tb(Q, Z, se = !1) {
						if (
							!this.Ub(Q) ||
							(Q instanceof E.$iY && this.t.contains(Q.primary)) ||
							this.P.groups.some((ae) => {
								if (ae === this) return !1;
								const pe = ae;
								return !!(
									pe.contains(Q, {
										supportSideBySide: i.SideBySideEditor.BOTH,
									}) ||
									(Q instanceof E.$iY && pe.contains(Q.primary))
								);
							})
						)
							return !1;
						let re = U.ConfirmResult.CANCEL,
							le = i.SaveReason.EXPLICIT,
							oe = !1;
						if (
							(!Q.hasCapability(i.EditorInputCapabilities.Untitled) &&
								!Z?.skipAutoSave &&
								!Q.closeHandler &&
								(this.bb.getAutoSaveMode(Q).mode ===
								z.AutoSaveMode.ON_FOCUS_CHANGE
									? ((oe = !0),
										(re = U.ConfirmResult.SAVE),
										(le = i.SaveReason.FOCUS_CHANGE))
									: H.$p &&
										(H.$l || H.$n) &&
										this.bb.getAutoSaveMode(Q).mode ===
											z.AutoSaveMode.ON_WINDOW_CHANGE &&
										((oe = !0),
										(re = U.ConfirmResult.SAVE),
										(le = i.SaveReason.WINDOW_CHANGE))),
							!oe)
						)
							if (
								((!this.activeEditor || !this.activeEditor.matches(Q)) &&
									(await this.Jb(Q)),
								await this.fb.focus((0, m.getWindow)(this.element)),
								typeof Q.closeHandler?.confirm == "function")
							)
								re = await Q.closeHandler.confirm([
									{ editor: Q, groupId: this.id },
								]);
							else {
								let ae;
								Q instanceof E.$iY
									? (ae = Q.primary.getName())
									: (ae = Q.getName()),
									(re = await this.$.showSaveConfirm([ae]));
							}
						if (!Q.closeHandler && !this.Ub(Q))
							return re === U.ConfirmResult.CANCEL;
						switch (re) {
							case U.ConfirmResult.SAVE:
								return !(await Q.save(this.id, { reason: le })) && oe
									? this.Tb(Q, { skipAutoSave: !0 })
									: Q.isDirty();
							case U.ConfirmResult.DONT_SAVE:
								try {
									return await Q.revert(this.id), Q.isDirty();
								} catch (ae) {
									return (
										this.db.error(ae),
										await Q.revert(this.id, { soft: !0 }),
										Q.isDirty()
									);
								}
							case U.ConfirmResult.CANCEL:
								return !0;
						}
					}
					Ub(Q) {
						return Q.closeHandler
							? Q.closeHandler.showConfirm()
							: Q.isDirty() && !Q.isSaving();
					}
					async closeEditors(Q, Z) {
						if (this.isEmpty) return !0;
						const se = this.Vb(Q);
						return (await this.Sb(se.slice(0))) ? !1 : (this.Wb(se, Z), !0);
					}
					Vb(Q) {
						if (Array.isArray(Q)) return Q;
						const Z = Q,
							se = typeof Z.direction == "number";
						let re = this.t.getEditors(
							se
								? i.EditorsOrder.SEQUENTIAL
								: i.EditorsOrder.MOST_RECENTLY_ACTIVE,
							Z,
						);
						return (
							Z.savedOnly
								? (re = re.filter((le) => !le.isDirty() || le.isSaving()))
								: se && Z.except
									? (re =
											Z.direction === i.CloseDirection.LEFT
												? re.slice(0, this.t.indexOf(Z.except, re))
												: re.slice(this.t.indexOf(Z.except, re) + 1))
									: Z.except &&
										(re = re.filter((le) => Z.except && !le.matches(Z.except))),
							re
						);
					}
					Wb(Q, Z) {
						let se = !1;
						for (const re of Q) this.isActive(re) ? (se = !0) : this.Rb(re);
						se && this.Pb(Z?.preserveFocus), Q.length && this.G.closeEditors(Q);
					}
					async closeAllEditors(Q, Z = !1) {
						if (this.isEmpty)
							return (
								this.groupsView.partOptions.closeEmptyGroups &&
									this.groupsView.removeGroup(this),
								!0
							);
						let se = this.t.getEditors(i.EditorsOrder.MOST_RECENTLY_ACTIVE, Q);
						return (
							Q?.excludeConfirming && (se = se.filter((le) => !this.Ub(le))),
							(await this.Sb(se, Z)) ? !1 : (this.Xb(Q), !0)
						);
					}
					Xb(Q) {
						let Z = this.t.getEditors(i.EditorsOrder.SEQUENTIAL, Q);
						Q?.excludeConfirming && (Z = Z.filter((re) => !this.Ub(re)));
						const se = [];
						for (const re of Z) this.isActive(re) || this.Rb(re), se.push(re);
						this.activeEditor && se.includes(this.activeEditor) && this.Pb(),
							se.length && this.G.closeEditors(se);
					}
					async replaceEditors(Q) {
						let Z;
						const se = [];
						for (let {
							editor: re,
							replacement: le,
							forceReplaceDirty: oe,
							options: ae,
						} of Q) {
							const pe = this.getIndexOfEditor(re);
							if (pe >= 0) {
								const $e = this.isActive(re);
								ae ? (ae.index = pe) : (ae = { index: pe }),
									(ae.inactive = !$e),
									(ae.pinned = ae.pinned ?? !0);
								const ye = {
									editor: re,
									replacement: le,
									forceReplaceDirty: oe,
									options: ae,
								};
								$e ? (Z = ye) : se.push(ye);
							}
						}
						for (const {
							editor: re,
							replacement: le,
							forceReplaceDirty: oe,
							options: ae,
						} of se)
							if ((await this.Jb(le, ae), !re.matches(le))) {
								let pe = !1;
								if (
									(oe
										? (this.Ob(re, !0, {
												context: i.EditorCloseContext.REPLACE,
											}),
											(pe = !0))
										: (pe = await this.Nb(
												re,
												{ preserveFocus: !0 },
												{ context: i.EditorCloseContext.REPLACE },
											)),
									!pe)
								)
									return;
							}
						if (Z) {
							const re = this.Jb(Z.replacement, Z.options);
							Z.editor.matches(Z.replacement) ||
								(Z.forceReplaceDirty
									? this.Ob(Z.editor, !0, {
											context: i.EditorCloseContext.REPLACE,
										})
									: await this.Nb(
											Z.editor,
											{ preserveFocus: !0 },
											{ context: i.EditorCloseContext.REPLACE },
										)),
								await re;
						}
					}
					get isLocked() {
						return this.t.isLocked;
					}
					lock(Q) {
						this.t.lock(Q);
					}
					createEditorActions(Q) {
						const Z = [],
							se = [];
						let re;
						const le = this.activeEditorPane;
						if (le instanceof W.$JEb) {
							const oe =
									le.scopedContextKeyService ?? this.scopedContextKeyService,
								ae = Q.add(
									this.Y.createMenu(P.$XX.EditorTitle, oe, {
										emitEventsForSubmenuChanges: !0,
										eventDebounceDelay: 0,
									}),
								);
							re = ae.onDidChange;
							const pe = ($e, ye) =>
								ye === "navigation" && $e.actions.length <= 1;
							(0, L.$Kyb)(
								ae,
								{ arg: this.C.get(), shouldForwardArgs: !0 },
								{ primary: Z, secondary: se },
								"navigation",
								pe,
							);
						} else {
							const oe = Q.add(new C.$re());
							(re = oe.event),
								Q.add(this.onDidActiveEditorChange(() => oe.fire()));
						}
						return { actions: { primary: Z, secondary: se }, onDidChange: re };
					}
					updateStyles() {
						const Q = this.isEmpty;
						Q
							? (this.element.style.backgroundColor = this.w(n.$dFb) || "")
							: (this.element.style.backgroundColor = "");
						const Z = this.w(n.$iFb) || this.w(c.$OP);
						!Q && Z
							? (this.F.classList.add("title-border-bottom"),
								this.F.style.setProperty("--title-border-bottom-color", Z))
							: (this.F.classList.remove("title-border-bottom"),
								this.F.style.removeProperty("--title-border-bottom-color"));
						const { showTabs: se } = this.groupsView.partOptions;
						(this.F.style.backgroundColor =
							this.w(se === "multiple" ? n.$fFb : n.$hFb) || ""),
							(this.I.style.backgroundColor = this.w(c.$8P) || "");
					}
					get minimumWidth() {
						return this.J.minimumWidth;
					}
					get minimumHeight() {
						return this.J.minimumHeight;
					}
					get maximumWidth() {
						return this.J.maximumWidth;
					}
					get maximumHeight() {
						return this.J.maximumHeight;
					}
					get proportionalLayout() {
						return this.y
							? !(
									this.y.width === this.minimumWidth ||
									this.y.height === this.minimumHeight
								)
							: !0;
					}
					layout(Q, Z, se, re) {
						(this.y = { width: Q, height: Z, top: se, left: re }),
							this.element.classList.toggle("max-height-478px", Z <= 478);
						const le = this.G.layout({
							container: new m.$pgb(Q, Z),
							available: new m.$pgb(Q, Z - this.J.minimumHeight),
						});
						this.H.getContainer().style.top = `${Math.max(this.titleHeight.offset - 2, 0)}px`;
						const oe = Math.max(0, Z - le.height);
						(this.I.style.height = `${oe}px`),
							this.J.layout({
								width: Q,
								height: oe,
								top: se + le.height,
								left: re,
							});
					}
					relayout() {
						if (this.y) {
							const { width: Q, height: Z, top: se, left: re } = this.y;
							this.layout(Q, Z, se, re);
						}
					}
					setBoundarySashes(Q) {
						this.J.setBoundarySashes(Q);
					}
					toJSON() {
						return this.t.serialize();
					}
					dispose() {
						(this.Hb = !0), this.b.fire(), super.dispose();
					}
				});
				(e.$Euc = _),
					(e.$Euc =
						_ =
						ee =
							Ne(
								[
									j(6, d.$Li),
									j(7, u.$6j),
									j(8, h.$iP),
									j(9, y.$km),
									j(10, T.$uZ),
									j(11, P.$YX),
									j(12, D.$Xxb),
									j(13, U.$IO),
									j(14, M.$IY),
									j(15, z.$_Y),
									j(16, x.$Vl),
									j(17, q.$ik),
									j(18, X.$E6),
									j(19, Y.$asb),
									j(20, U.$GO),
									j(21, ne.$ll),
								],
								_,
							));
			},
		),
		define(
			de[1985],
			he([
				1, 0, 35, 550, 7, 6, 51, 66, 5, 759, 44, 123, 24, 548, 1984, 10, 3, 21,
				1287, 4008, 97, 2682, 29, 96, 28, 362, 15, 1291, 18, 87, 8, 128, 100,
				75,
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
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
			) {
				"use strict";
				var A;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Huc = e.$Guc = void 0);
				class R {
					constructor() {
						(this.element = (0, w.$)(".grid-view-container")),
							(this.a = new E.$Ae()),
							(this.onDidChange = this.a.event);
					}
					get minimumWidth() {
						return this.gridWidget ? this.gridWidget.minimumWidth : 0;
					}
					get maximumWidth() {
						return this.gridWidget
							? this.gridWidget.maximumWidth
							: Number.POSITIVE_INFINITY;
					}
					get minimumHeight() {
						return this.gridWidget ? this.gridWidget.minimumHeight : 0;
					}
					get maximumHeight() {
						return this.gridWidget
							? this.gridWidget.maximumHeight
							: Number.POSITIVE_INFINITY;
					}
					get gridWidget() {
						return this.b;
					}
					set gridWidget(z) {
						(this.element.innerText = ""),
							z
								? (this.element.appendChild(z.element),
									(this.a.input = z.onDidChange))
								: (this.a.input = E.Event.None),
							(this.b = z);
					}
					layout(z, F, x, H) {
						this.gridWidget?.layout(z, F, x, H);
					}
					dispose() {
						this.a.dispose();
					}
				}
				let O = class extends i.Part {
					static {
						A = this;
					}
					static {
						this.a = "editorpart.state";
					}
					static {
						this.b = "editorpart.centeredview";
					}
					constructor(z, F, x, H, q, V, G, K, J, W, X) {
						super(F, { hasTitle: !1 }, V, K, J),
							(this.Ab = z),
							(this.Bb = x),
							(this.windowId = H),
							(this.Cb = q),
							(this.Db = G),
							(this.Eb = W),
							(this.Fb = X),
							(this.y = this.D(new E.$re())),
							(this.onDidFocus = this.y.event),
							(this.bb = this.D(new E.$re())),
							(this.onDidLayout = this.bb.event),
							(this.cb = this.D(new E.$re())),
							(this.onDidChangeActiveGroup = this.cb.event),
							(this.db = this.D(new E.$re())),
							(this.onDidChangeGroupIndex = this.db.event),
							(this.eb = this.D(new E.$re())),
							(this.onDidChangeGroupLabel = this.eb.event),
							(this.fb = this.D(new E.$re())),
							(this.onDidChangeGroupLocked = this.fb.event),
							(this.gb = this.D(new E.$re())),
							(this.onDidChangeGroupMaximized = this.gb.event),
							(this.hb = this.D(new E.$re())),
							(this.onDidActivateGroup = this.hb.event),
							(this.ib = this.D(new E.$ue())),
							(this.onDidAddGroup = this.ib.event),
							(this.jb = this.D(new E.$ue())),
							(this.onDidRemoveGroup = this.jb.event),
							(this.kb = this.D(new E.$re())),
							(this.onDidMoveGroup = this.kb.event),
							(this.lb = this.D(new E.$re())),
							(this.mb = this.D(new E.$Ae())),
							(this.onDidChangeSizeConstraints = E.Event.any(
								this.lb.event,
								this.mb.event,
							)),
							(this.nb = this.D(new E.$Ae())),
							(this.onDidScroll = E.Event.any(this.lb.event, this.nb.event)),
							(this.ob = this.D(new E.$re())),
							(this.onDidChangeEditorPartOptions = this.ob.event),
							(this.pb = this.D(new E.$re())),
							(this.onWillDispose = this.pb.event),
							(this.qb = this.F(
								o.StorageScope.WORKSPACE,
								o.StorageTarget.USER,
							)),
							(this.rb = this.F(
								o.StorageScope.PROFILE,
								o.StorageTarget.MACHINE,
							)),
							(this.sb = new Map()),
							(this.tb = []),
							(this.yb = this.D(new p.$Zc())),
							(this.zb = this.D(new R())),
							(this.Jb = []),
							(this.Kb = (0, c.$HEb)(this.Db, this.n)),
							(this.Lb = 0),
							(this.Mb = 0),
							(this.sideGroup = {
								openEditor: (Y, ie) => {
									const [ne] = this.vb.invokeFunction((ee) =>
										(0, T.$ydc)(ee, { editor: Y, options: ie }, P.$KY),
									);
									return ne.openEditor(Y, ie);
								},
							}),
							(this.Pb = !1),
							(this.Qb = new I.$0h()),
							(this.whenReady = this.Qb.p),
							(this.Rb = new I.$0h()),
							(this.whenRestored = this.Rb.p),
							(this.Sb = !1),
							(this.priority = r.LayoutPriority.High),
							this.Gb();
					}
					Gb() {
						this.D(this.Db.onDidChangeConfiguration((z) => this.Hb(z))),
							this.D(this.n.onDidFileIconThemeChange(() => this.Ib())),
							this.D(
								this.H(o.StorageScope.WORKSPACE, this.B)((z) => this.Cc(z)),
							);
					}
					Hb(z) {
						(0, c.$GEb)(z) && this.Ib();
					}
					Ib() {
						const z = this.Kb,
							F = (0, c.$HEb)(this.Db, this.n);
						for (const x of this.Jb) Object.assign(F, x);
						(this.Kb = F),
							this.ob.fire({ oldPartOptions: z, newPartOptions: F });
					}
					get partOptions() {
						return this.Kb;
					}
					enforcePartOptions(z) {
						return (
							this.Jb.push(z),
							this.Ib(),
							(0, p.$Yc)(() => {
								this.Jb.splice(this.Jb.indexOf(z), 1), this.Ib();
							})
						);
					}
					get contentDimension() {
						return this.Nb;
					}
					get activeGroup() {
						return this.Ob;
					}
					get groups() {
						return Array.from(this.sb.values());
					}
					get count() {
						return this.sb.size;
					}
					get orientation() {
						return this.xb && this.xb.orientation === r.Orientation.VERTICAL
							? d.GroupOrientation.VERTICAL
							: d.GroupOrientation.HORIZONTAL;
					}
					get isReady() {
						return this.Pb;
					}
					get hasRestorableState() {
						return !!this.qb[A.a];
					}
					get willRestoreState() {
						return this.Sb;
					}
					getGroups(z = d.GroupsOrder.CREATION_TIME) {
						switch (z) {
							case d.GroupsOrder.CREATION_TIME:
								return this.groups;
							case d.GroupsOrder.MOST_RECENTLY_ACTIVE: {
								const F = (0, h.$Lb)(this.tb.map((x) => this.getGroup(x)));
								return (0, h.$Qb)([...F, ...this.groups]);
							}
							case d.GroupsOrder.GRID_APPEARANCE: {
								const F = [];
								return this.xb && this.Tb(F, this.xb.getViews()), F;
							}
						}
					}
					Tb(z, F) {
						(0, r.$zob)(F)
							? F.children.forEach((x) => this.Tb(z, x))
							: z.push(F.view);
					}
					hasGroup(z) {
						return this.sb.has(z);
					}
					getGroup(z) {
						return this.sb.get(z);
					}
					findGroup(z, F = this.activeGroup, x) {
						if (typeof z.direction == "number")
							return this.Ub(z.direction, F, x);
						if (typeof z.location == "number") return this.Vb(z.location, F, x);
						throw new Error("invalid arguments");
					}
					Ub(z, F, x) {
						const H = this.jc(F),
							q = this.xb.getNeighborViews(H, this.fc(z), x);
						return (
							q.sort((V, G) => this.tb.indexOf(V.id) - this.tb.indexOf(G.id)),
							q[0]
						);
					}
					Vb(z, F, x) {
						const H = this.jc(F),
							q = this.getGroups(d.GroupsOrder.GRID_APPEARANCE),
							V = q.indexOf(H);
						switch (z) {
							case d.GroupLocation.FIRST:
								return q[0];
							case d.GroupLocation.LAST:
								return q[q.length - 1];
							case d.GroupLocation.NEXT: {
								let G = q[V + 1];
								return !G && x && (G = this.Vb(d.GroupLocation.FIRST, F)), G;
							}
							case d.GroupLocation.PREVIOUS: {
								let G = q[V - 1];
								return !G && x && (G = this.Vb(d.GroupLocation.LAST, F)), G;
							}
						}
					}
					activateGroup(z, F) {
						const x = this.jc(z);
						return (
							this.cc(x),
							F || this.Eb.moveTop((0, w.getWindow)(this.element)),
							x
						);
					}
					restoreGroup(z) {
						const F = this.jc(z);
						return this.dc(F), F;
					}
					getSize(z) {
						const F = this.jc(z);
						return this.xb.getViewSize(F);
					}
					setSize(z, F) {
						const x = this.jc(z);
						this.xb.resizeView(x, F);
					}
					arrangeGroups(z, F = this.activeGroup) {
						if (this.count < 2 || !this.xb) return;
						const x = this.jc(F);
						switch (z) {
							case d.GroupsArrangement.EVEN:
								this.xb.distributeViewSizes();
								break;
							case d.GroupsArrangement.MAXIMIZE:
								if (this.groups.length < 2) return;
								this.xb.maximizeView(x), x.focus();
								break;
							case d.GroupsArrangement.EXPAND:
								this.xb.expandView(x);
								break;
						}
					}
					toggleMaximizeGroup(z = this.activeGroup) {
						this.hasMaximizedGroup()
							? this.Wb()
							: this.arrangeGroups(d.GroupsArrangement.MAXIMIZE, z);
					}
					toggleExpandGroup(z = this.activeGroup) {
						this.isGroupExpanded(this.activeGroup)
							? this.arrangeGroups(d.GroupsArrangement.EVEN)
							: this.arrangeGroups(d.GroupsArrangement.EXPAND, z);
					}
					Wb() {
						this.xb.exitMaximizedView(), this.Ob.focus();
					}
					hasMaximizedGroup() {
						return this.xb.hasMaximizedView();
					}
					Xb(z) {
						return this.xb.isViewMaximized(z);
					}
					isGroupExpanded(z) {
						return this.xb.isViewExpanded(z);
					}
					setGroupOrientation(z) {
						if (!this.xb) return;
						const F =
							z === d.GroupOrientation.HORIZONTAL
								? r.Orientation.HORIZONTAL
								: r.Orientation.VERTICAL;
						this.xb.orientation !== F && (this.xb.orientation = F);
					}
					applyLayout(z) {
						const F = this.Zb(this.ub);
						let x = 0;
						function H(K) {
							for (const J of K) Array.isArray(J.groups) ? H(J.groups) : x++;
						}
						H(z.groups);
						let q = this.getGroups(d.GroupsOrder.GRID_APPEARANCE);
						if (x < q.length) {
							const K = q[x - 1];
							q.forEach((J, W) => {
								W >= x && this.mergeGroup(J, K);
							}),
								(q = this.getGroups(d.GroupsOrder.GRID_APPEARANCE));
						}
						const V = this.activeGroup,
							G = (0, r.$Eob)({
								orientation: this.gc(
									z.orientation,
									this.$b()
										? this.xb.orientation
										: (0, r.orthogonal)(this.xb.orientation),
								),
								groups: z.groups,
							});
						this.Bc(G, V.id, q), F && this.Ob.focus();
					}
					getLayout() {
						const z = this.xb.serialize(),
							F =
								z.orientation === r.Orientation.HORIZONTAL
									? d.GroupOrientation.HORIZONTAL
									: d.GroupOrientation.VERTICAL,
							x = this.Yb(z.root);
						return { orientation: F, groups: x.groups };
					}
					Yb(z) {
						return z.type === "branch"
							? { size: z.size, groups: z.data.map((F) => this.Yb(F)) }
							: { size: z.size };
					}
					Zb(z) {
						return z
							? (0, w.$Jgb)() === z.ownerDocument.body
								? !0
								: (0, w.$Lgb)(z)
							: !1;
					}
					$b() {
						const z = this.xb.getViews();
						return (0, r.$zob)(z) ? z.children.some((F) => (0, r.$zob)(F)) : !1;
					}
					addGroup(z, F, x) {
						const H = this.jc(z);
						let q;
						if (H.groupsView === this) {
							const V = this.Zb(H.element),
								G = this.sb.size > 1 && this.isGroupExpanded(H);
							(q = this.bc(x)),
								this.xb.addView(q, this.ac(), H, this.fc(F)),
								this.sc(),
								this.ib.fire(q),
								this.tc(),
								G && this.arrangeGroups(d.GroupsArrangement.EXPAND, q),
								V && H.focus();
						} else q = H.groupsView.addGroup(H, F, x);
						return q;
					}
					ac() {
						switch (this.Kb.splitSizing) {
							case "distribute":
								return r.Sizing.Distribute;
							case "split":
								return r.Sizing.Split;
							default:
								return r.Sizing.Auto;
						}
					}
					bc(z, F) {
						let x;
						z instanceof n.$Euc
							? (x = n.$Euc.createCopy(
									z,
									this.Ab,
									this,
									this.Bb,
									this.count,
									this.vb,
									F,
								))
							: (0, f.$lY)(z)
								? (x = n.$Euc.createFromSerialized(
										z,
										this.Ab,
										this,
										this.Bb,
										this.count,
										this.vb,
										F,
									))
								: (x = n.$Euc.createNew(
										this.Ab,
										this,
										this.Bb,
										this.count,
										this.vb,
										F,
									)),
							this.sb.set(x.id, x);
						const H = new p.$Zc();
						return (
							H.add(
								x.onDidFocus(() => {
									this.cc(x), this.y.fire();
								}),
							),
							H.add(
								x.onDidModelChange((q) => {
									switch (q.kind) {
										case u.GroupModelChangeKind.GROUP_LOCKED:
											this.fb.fire(x);
											break;
										case u.GroupModelChangeKind.GROUP_INDEX:
											this.db.fire(x);
											break;
										case u.GroupModelChangeKind.GROUP_LABEL:
											this.eb.fire(x);
											break;
									}
								}),
							),
							H.add(
								x.onDidActiveEditorChange(() => {
									this.sc();
								}),
							),
							E.Event.once(x.onWillDispose)(() => {
								(0, p.$Vc)(H), this.sb.delete(x.id), this.ec(x);
							}),
							x
						);
					}
					cc(z) {
						if (this.Ob !== z) {
							const F = this.Ob;
							(this.Ob = z),
								this.ec(z, !0),
								F && !F.disposed && F.setActive(!1),
								z.setActive(!0),
								this.dc(z),
								this.cb.fire(z);
						}
						this.hb.fire(z);
					}
					dc(z) {
						if (this.xb) {
							this.hasMaximizedGroup() && !this.Xb(z) && this.Wb();
							try {
								const F = this.xb.getViewSize(z);
								(F.width === z.minimumWidth || F.height === z.minimumHeight) &&
									this.arrangeGroups(d.GroupsArrangement.EXPAND, z);
							} catch {}
						}
					}
					ec(z, F) {
						const x = this.tb.indexOf(z.id);
						x !== -1 && this.tb.splice(x, 1), F && this.tb.unshift(z.id);
					}
					fc(z) {
						switch (z) {
							case d.GroupDirection.UP:
								return r.Direction.Up;
							case d.GroupDirection.DOWN:
								return r.Direction.Down;
							case d.GroupDirection.LEFT:
								return r.Direction.Left;
							case d.GroupDirection.RIGHT:
								return r.Direction.Right;
						}
					}
					gc(z, F) {
						return typeof z == "number"
							? z === d.GroupOrientation.HORIZONTAL
								? r.Orientation.HORIZONTAL
								: r.Orientation.VERTICAL
							: F;
					}
					removeGroup(z, F) {
						const x = this.jc(z);
						this.count !== 1 && (x.isEmpty ? this.ic(x, F) : this.hc(x));
					}
					hc(z) {
						const F = this.getGroups(d.GroupsOrder.MOST_RECENTLY_ACTIVE);
						let x;
						this.Ob === z ? (x = F[1]) : (x = F[0]), this.mergeGroup(z, x);
					}
					ic(z, F) {
						const x = !F && this.Zb(this.ub);
						if (this.Ob === z) {
							const q = this.getGroups(d.GroupsOrder.MOST_RECENTLY_ACTIVE)[1];
							this.cc(q);
						}
						this.xb.removeView(z, this.ac()),
							z.dispose(),
							x && this.Ob.focus(),
							this.tc(),
							this.sc(),
							this.jb.fire(z);
					}
					moveGroup(z, F, x) {
						const H = this.jc(z),
							q = this.jc(F);
						if (H.id === q.id)
							throw new Error("Cannot move group into its own");
						const V = this.Zb(H.element);
						let G;
						return (
							H.groupsView === q.groupsView
								? (this.xb.moveView(H, this.ac(), q, this.fc(x)), (G = H))
								: ((G = q.groupsView.addGroup(q, x, H)),
									H.closeAllEditors(),
									this.removeGroup(H, V)),
							V && G.focus(),
							this.kb.fire(G),
							this.tc(),
							G
						);
					}
					copyGroup(z, F, x) {
						const H = this.jc(z),
							q = this.jc(F),
							V = this.Zb(H.element),
							G = this.addGroup(q, x, H);
						return V && G.focus(), G;
					}
					mergeGroup(z, F, x) {
						const H = this.jc(z),
							q = this.jc(F),
							V = [];
						let G = x && typeof x.index == "number" ? x.index : q.count;
						for (const J of H.editors) {
							const W = !H.isActive(J) || this.Ob !== H,
								Y = {
									index: H.isSticky(J) ? void 0 : G,
									inactive: W,
									preserveFocus: W,
								};
							V.push({ editor: J, options: Y }), G++;
						}
						let K = !0;
						return (
							x?.mode === d.MergeGroupMode.COPY_EDITORS
								? H.copyEditors(V, q)
								: (K = H.moveEditors(V, q)),
							H.isEmpty && !H.disposed && this.removeGroup(H, !0),
							K
						);
					}
					mergeAllGroups(z) {
						const F = this.jc(z);
						let x = !0;
						for (const H of this.getGroups(
							d.GroupsOrder.MOST_RECENTLY_ACTIVE,
						)) {
							if (H === F) continue;
							this.mergeGroup(H, F) || (x = !1);
						}
						return x;
					}
					jc(z) {
						let F;
						if (
							(typeof z == "number" ? (F = this.Ab.getGroup(z)) : (F = z), !F)
						)
							throw new Error("Invalid editor group provided!");
						return F;
					}
					createEditorDropTarget(z, F) {
						return (
							(0, v.$vg)((0, w.$Ygb)(z)), this.vb.createInstance(b.$Fuc, z, F)
						);
					}
					get minimumWidth() {
						return Math.min(
							this.wb.minimumWidth,
							this.M.getMaximumEditorDimensions(
								this.M.getContainer((0, w.getWindow)(this.ub)),
							).width,
						);
					}
					get maximumWidth() {
						return this.wb.maximumWidth;
					}
					get minimumHeight() {
						return Math.min(
							this.wb.minimumHeight,
							this.M.getMaximumEditorDimensions(
								this.M.getContainer((0, w.getWindow)(this.ub)),
							).height,
						);
					}
					get maximumHeight() {
						return this.wb.maximumHeight;
					}
					get snap() {
						return this.M.getPanelAlignment() === "center";
					}
					get onDidChange() {
						return E.Event.any(this.wb.onDidChange, this.lb.event);
					}
					get kc() {
						return (
							this.h.getColor(a.$jFb) ||
							this.h.getColor(C.$OP) ||
							s.$UL.transparent
						);
					}
					updateStyles() {
						const z = (0, v.$wg)(this.ub);
						z.style.backgroundColor = this.w(C.$8P) || "";
						const F = {
							separatorBorder: this.kc,
							background: this.h.getColor(a.$cFb) || s.$UL.transparent,
						};
						this.xb.style(F), this.wb.styles(F);
					}
					Q(z, F) {
						(this.element = z),
							(this.ub = document.createElement("div")),
							this.ub.classList.add("content"),
							this.windowId !== N.$Bfb.vscodeWindowId &&
								this.ub.classList.add("auxiliary"),
							z.appendChild(this.ub);
						const x = this.D(this.Fb.createScoped(this.ub));
						return (
							(this.vb = this.D(this.Cb.createChild(new D.$Ki([L.$6j, x])))),
							(this.Sb = !F || F.restorePreviousState),
							this.oc(),
							(this.wb = this.D(
								new l.$Fob(
									this.ub,
									this.zb,
									this.rb[A.b],
									this.Kb.centeredLayoutFixedWidth,
								),
							)),
							this.D(
								this.onDidChangeEditorPartOptions((H) =>
									this.wb.setFixedWidth(
										H.newPartOptions.centeredLayoutFixedWidth ?? !1,
									),
								),
							),
							this.nc(z, this.ub),
							this.mc(x),
							this.Qb.complete(),
							(this.Pb = !0),
							I.Promises.settled(
								this.groups.map((H) => H.whenRestored),
							).finally(() => {
								this.Rb.complete();
							}),
							this.ub
						);
					}
					mc(z) {
						M.$_Pb.bindTo(z).set(this.windowId !== N.$Bfb.vscodeWindowId);
						const x = M.$9Pb.bindTo(z),
							H = M.$$Pb.bindTo(z),
							q = () => {
								this.count > 1 ? x.set(!0) : x.reset(),
									this.hasMaximizedGroup() ? H.set(!0) : H.reset();
							};
						q(),
							this.D(this.onDidAddGroup(() => q())),
							this.D(this.onDidRemoveGroup(() => q())),
							this.D(this.onDidChangeGroupMaximized(() => q()));
					}
					nc(z, F) {
						this.D(this.createEditorDropTarget(F, Object.create(null)));
						const x = document.createElement("div");
						x.classList.add("drop-block-overlay"),
							z.appendChild(x),
							this.D((0, w.$bgb)(x, () => x.classList.remove("visible"))),
							this.D(
								S.$TSb.INSTANCE.registerTarget(this.element, {
									onDragStart: (W) => x.classList.add("visible"),
									onDragEnd: (W) => x.classList.remove("visible"),
								}),
							);
						let H, q, V, G;
						const K = (W) => {
								!this.M.isVisible($.Parts.PANEL_PART) &&
								W === this.M.getPanelPosition()
									? this.M.setPartHidden(!1, $.Parts.PANEL_PART)
									: !this.M.isVisible($.Parts.AUXILIARYBAR_PART) &&
										W ===
											(this.M.getSideBarPosition() === $.Position.RIGHT
												? $.Position.LEFT
												: $.Position.RIGHT) &&
										this.M.setPartHidden(!1, $.Parts.AUXILIARYBAR_PART);
							},
							J = () => {
								H && (clearTimeout(H), (H = void 0)),
									q && (clearTimeout(q), (q = void 0));
							};
						this.D(
							S.$TSb.INSTANCE.registerTarget(x, {
								onDragOver: (W) => {
									w.$ahb.stop(W.eventData, !0),
										W.eventData.dataTransfer &&
											(W.eventData.dataTransfer.dropEffect = "none");
									const X = x.getBoundingClientRect();
									let Y, ie;
									const ne = 100;
									W.eventData.clientX < X.left + ne && (Y = $.Position.LEFT),
										W.eventData.clientX > X.right - ne &&
											(Y = $.Position.RIGHT),
										W.eventData.clientY > X.bottom - ne &&
											(ie = $.Position.BOTTOM),
										W.eventData.clientY < X.top + ne && (ie = $.Position.TOP),
										H && Y !== V && (clearTimeout(H), (H = void 0)),
										q && ie !== G && (clearTimeout(q), (q = void 0)),
										!H &&
											Y !== void 0 &&
											((V = Y), (H = setTimeout(() => K(Y), 200))),
										!q &&
											ie !== void 0 &&
											((G = ie), (q = setTimeout(() => K(ie), 200)));
								},
								onDragLeave: () => J(),
								onDragEnd: () => J(),
								onDrop: () => J(),
							}),
						);
					}
					centerLayout(z) {
						this.wb.activate(z), this.Ob.focus();
					}
					isLayoutCentered() {
						return this.wb ? this.wb.isActive() : !1;
					}
					oc() {
						let z = !1;
						if ((this.Sb && (z = !this.pc()), !this.xb || z)) {
							const F = this.bc();
							this.rc(new r.$Cob(F)), this.cc(F);
						}
						this.sc(), this.tc();
					}
					pc() {
						const z = this.xc();
						if (z?.serializedGrid)
							try {
								(this.tb = z.mostRecentActiveGroups),
									this.qc(z.serializedGrid, z.activeGroup);
							} catch (F) {
								return (
									(0, y.$4)(
										new Error(
											`Error restoring editor grid widget: ${F} (with state: ${JSON.stringify(z)})`,
										),
									),
									this.Dc(),
									!1
								);
							}
						return !0;
					}
					qc(z, F, x, H) {
						let q;
						x ? (q = x.slice(0)) : (q = []);
						const V = [],
							G = r.$Cob.deserialize(
								z,
								{
									fromJSON: (K) => {
										let J;
										return (
											q.length > 0 ? (J = q.shift()) : (J = this.bc(K, H)),
											V.push(J),
											J.id === F && this.cc(J),
											J
										);
									},
								},
								{ styles: { separatorBorder: this.kc } },
							);
						this.Ob || this.cc(V[0]),
							this.tb.some((K) => !this.getGroup(K)) &&
								(this.tb = V.map((K) => K.id)),
							this.rc(G);
					}
					rc(z) {
						let F = {};
						this.xb && ((F = this.xb.boundarySashes), this.xb.dispose()),
							(this.xb = z),
							(this.xb.boundarySashes = F),
							(this.zb.gridWidget = z),
							(this.mb.input = z.onDidChange),
							(this.nb.input = z.onDidScroll),
							this.yb.clear(),
							this.yb.add(z.onDidChangeViewMaximized((x) => this.gb.fire(x))),
							this.gb.fire(this.hasMaximizedGroup()),
							this.lb.fire(void 0);
					}
					sc() {
						(0, v.$wg)(this.ub).classList.toggle("empty", this.uc);
					}
					tc() {
						this.getGroups(d.GroupsOrder.GRID_APPEARANCE).forEach((z, F) =>
							z.notifyIndexChanged(F),
						);
					}
					notifyGroupsLabelChange(z) {
						for (const F of this.groups) F.notifyLabelChanged(z);
					}
					get uc() {
						return this.count === 1 && this.Ob.isEmpty;
					}
					setBoundarySashes(z) {
						(this.xb.boundarySashes = z), (this.wb.boundarySashes = z);
					}
					layout(z, F, x, H) {
						(this.Lb = x), (this.Mb = H);
						const q = super.Z(z, F).contentSize;
						this.vc(w.$pgb.lift(q), x, H);
					}
					vc(z, F = this.Lb, x = this.Mb) {
						(this.Nb = z),
							this.wb.layout(this.Nb.width, this.Nb.height, F, x),
							this.bb.fire(z);
					}
					I() {
						if (
							(this.xb &&
								(this.uc
									? delete this.qb[A.a]
									: (this.qb[A.a] = this.createState())),
							this.wb)
						) {
							const z = this.wb.state;
							this.wb.isDefault(z) ? delete this.rb[A.b] : (this.rb[A.b] = z);
						}
						super.I();
					}
					xc() {
						return this.qb[A.a];
					}
					createState() {
						return {
							serializedGrid: this.xb.serialize(),
							activeGroup: this.Ob.id,
							mostRecentActiveGroups: this.tb,
						};
					}
					applyState(z, F) {
						return z === "empty" ? this.zc() : this.yc(z, F);
					}
					async yc(z, F) {
						const x = await this.Ac();
						this.ib.pause(),
							this.jb.pause(),
							this.Dc(),
							(this.tb = z.mostRecentActiveGroups);
						try {
							this.Bc(z.serializedGrid, z.activeGroup, void 0, F);
						} finally {
							this.jb.resume(), this.ib.resume();
						}
						await this.activeGroup.openEditors(
							x
								.flatMap((H) => H.editors)
								.filter((H) => this.Ab.groups.every((q) => !q.contains(H)))
								.map((H) => ({
									editor: H,
									options: { pinned: !0, preserveFocus: !0, inactive: !0 },
								})),
						);
					}
					async zc() {
						await this.Ac(), this.mergeAllGroups(this.activeGroup);
					}
					async Ac() {
						const z = this.getGroups(d.GroupsOrder.MOST_RECENTLY_ACTIVE);
						for (const F of z)
							await F.closeAllEditors({ excludeConfirming: !0 });
						return z;
					}
					Bc(z, F, x, H) {
						this.qc(z, F, x, H), this.vc(this.Nb), this.sc();
						for (const q of this.getGroups(d.GroupsOrder.GRID_APPEARANCE))
							x?.includes(q) || this.ib.fire(q);
						this.tc();
					}
					Cc(z) {
						if (z.external && z.scope === o.StorageScope.WORKSPACE) {
							this.G(z.scope);
							const F = this.xc();
							F && this.applyState(F);
						}
					}
					toJSON() {
						return { type: $.Parts.EDITOR_PART };
					}
					Dc() {
						for (const z of this.groups) z.dispose(), this.jb.fire(z);
						this.sb.clear(), (this.tb = []);
					}
					dispose() {
						this.pb.fire(), this.Dc(), this.xb?.dispose(), super.dispose();
					}
				};
				(e.$Guc = O),
					(e.$Guc =
						O =
						A =
							Ne(
								[
									j(4, m.$Li),
									j(5, t.$iP),
									j(6, g.$gj),
									j(7, o.$lq),
									j(8, $.$mEb),
									j(9, k.$asb),
									j(10, L.$6j),
								],
								O,
							));
				let B = class extends O {
					constructor(z, F, x, H, q, V, G, K) {
						super(
							z,
							$.Parts.EDITOR_PART,
							"",
							N.$Bfb.vscodeWindowId,
							F,
							x,
							H,
							q,
							V,
							G,
							K,
						);
					}
				};
				(e.$Huc = B),
					(e.$Huc = B =
						Ne(
							[
								j(1, m.$Li),
								j(2, t.$iP),
								j(3, g.$gj),
								j(4, o.$lq),
								j(5, $.$mEb),
								j(6, k.$asb),
								j(7, L.$6j),
							],
							B,
						));
			},
		),
		define(
			de[4225],
			he([
				1, 0, 139, 7, 6, 3, 12, 10, 8, 5, 128, 21, 35, 253, 1985, 1327, 703, 66,
				18, 87, 96, 52, 166, 713,
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
				$,
			) {
				"use strict";
				var v, S;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Iuc = void 0);
				let I = class {
					static {
						v = this;
					}
					static {
						this.a = "workbench.statusBar.visible";
					}
					constructor(k, L, D, M, N, A, R, O, B) {
						(this.b = k),
							(this.c = L),
							(this.d = D),
							(this.f = M),
							(this.g = N),
							(this.h = A),
							(this.i = R),
							(this.j = O),
							(this.k = B);
					}
					async create(k, L) {
						function D() {
							let G = 0;
							return H && (G += x.height), U && z && (G += U.height), G;
						}
						function M(G) {
							H ? (0, i.show)(x.container) : (0, i.hide)(x.container),
								G && R.layout();
						}
						function N(G) {
							U &&
								(z ? (0, i.show)(U.container) : (0, i.hide)(U.container),
								G && R.layout());
						}
						const A = new E.$Zc(),
							R = A.add(await this.d.open(L)),
							O = document.createElement("div");
						O.classList.add("part", "editor"),
							O.setAttribute("role", "main"),
							(O.style.position = "relative"),
							R.container.appendChild(O);
						const B = A.add(
							this.c.createInstance(
								T,
								R.window.vscodeWindowId,
								this.b,
								L?.state,
								k,
							),
						);
						A.add(this.b.registerPart(B)), B.create(O);
						let U,
							z = !1;
						if (C.$p && (0, c.$xY)(this.g)) {
							(U = A.add(this.i.createAuxiliaryTitlebarPart(R.container, B))),
								(z = (0, s.$rEb)(this.g, R.window, void 0, !1));
							const G = () => {
								const K = z;
								(z = (0, s.$rEb)(this.g, R.window, void 0, !1)),
									K !== z && N(!0);
							};
							A.add(U.onDidChange(() => R.layout())),
								A.add(this.k.onDidChangePartVisibility(() => G())),
								A.add(
									(0, t.$Nfb)((K) => {
										K === R.window.vscodeWindowId && G();
									}),
								),
								N(!1);
						} else A.add(this.c.createInstance(g.$ztc, R.window, B));
						const x = A.add(this.h.createAuxiliaryStatusbarPart(R.container));
						let H = this.g.getValue(v.a) !== !1;
						A.add(
							this.g.onDidChangeConfiguration((G) => {
								G.affectsConfiguration(v.a) &&
									((H = this.g.getValue(v.a) !== !1), M(!0));
							}),
						),
							M(!1);
						const q = A.add(
							w.Event.once(B.onWillClose)(() => R.window.close()),
						);
						A.add(
							w.Event.once(R.onUnload)(() => {
								A.isDisposed || (q.dispose(), B.close(), A.dispose());
							}),
						),
							A.add(w.Event.once(this.f.onDidShutdown)(() => A.dispose())),
							A.add(
								R.onBeforeUnload((G) => {
									for (const K of B.groups)
										for (const J of K.editors) {
											const W = J.canMove(K.id, this.b.mainPart.activeGroup.id);
											if (typeof W == "string") {
												K.openEditor(J), G.veto(W);
												break;
											}
										}
								}),
							),
							A.add(
								R.onWillLayout((G) => {
									const K = U?.height ?? 0;
									U?.layout(G.width, K, 0, 0);
									const J = G.height - D();
									B.layout(G.width, J, K, 0),
										x.layout(G.width, x.height, G.height - x.height, 0);
								}),
							),
							R.layout();
						const V = A.add(
							this.c.createChild(
								new u.$Ki(
									[y.$d6b, this.h.createScoped(x, A)],
									[f.$IY, this.j.createScoped(B, A)],
								),
							),
						);
						return { part: B, instantiationService: V, disposables: A };
					}
				};
				(e.$Iuc = I),
					(e.$Iuc =
						I =
						v =
							Ne(
								[
									j(1, r.$Li),
									j(2, p.$AEb),
									j(3, l.$n6),
									j(4, d.$gj),
									j(5, y.$d6b),
									j(6, $.$Wqc),
									j(7, f.$IY),
									j(8, s.$mEb),
								],
								I,
							));
				let T = class extends n.$Guc {
					static {
						S = this;
					}
					static {
						this.c = 1;
					}
					constructor(k, L, D, M, N, A, R, O, B, U, z) {
						const F = S.c++;
						super(
							L,
							`workbench.parts.auxiliaryEditor.${F}`,
							M,
							k,
							N,
							A,
							R,
							O,
							B,
							U,
							z,
						),
							(this.Fc = D),
							(this.Ec = this.D(new w.$re())),
							(this.onWillClose = this.Ec.event);
					}
					removeGroup(k, L) {
						const D = this.jc(k);
						this.count === 1 && this.activeGroup === D
							? this.Gc(L)
							: super.removeGroup(k, L);
					}
					Gc(k) {
						const L = !k && this.Zb(this.ub),
							M = this.Ab.getGroups(o.GroupsOrder.MOST_RECENTLY_ACTIVE)[1];
						M && (M.groupsView.activateGroup(M), L && M.focus()), this.Jc(!1);
					}
					xc() {
						return this.Fc;
					}
					I() {}
					close() {
						return this.Jc(!0);
					}
					Jc(k) {
						let L = !0;
						return k && (L = this.Kc()), this.Ec.fire(), L;
					}
					Kc() {
						if (!this.groups.some((D) => D.count > 0)) return !0;
						let k;
						for (const D of this.Ab.mainPart.getGroups(
							o.GroupsOrder.MOST_RECENTLY_ACTIVE,
						))
							if (!D.isLocked) {
								k = D;
								break;
							}
						k ||
							(k = this.Ab.mainPart.addGroup(
								this.Ab.mainPart.activeGroup,
								this.partOptions.openSideBySideDirection === "right"
									? o.GroupDirection.RIGHT
									: o.GroupDirection.DOWN,
							));
						const L = this.mergeAllGroups(k);
						return k.focus(), L;
					}
				};
				T = S = Ne(
					[
						j(4, r.$Li),
						j(5, h.$iP),
						j(6, d.$gj),
						j(7, a.$lq),
						j(8, s.$mEb),
						j(9, b.$asb),
						j(10, m.$6j),
					],
					T,
				);
			},
		),
		define(
			de[4226],
			he([
				1, 0, 4, 66, 6, 3, 1985, 20, 5, 24, 4225, 550, 15, 21, 35, 703, 47, 8,
				7, 128, 18,
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
			) {
				"use strict";
				var l;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Juc = void 0);
				let y = class extends a.$lEb {
					static {
						l = this;
					}
					constructor(v, S, I, T, P) {
						super("workbench.editorParts", I, S),
							(this.b = v),
							(this.m = S),
							(this.r = T),
							(this.s = P),
							(this.mainPart = this.D(this.u())),
							(this.a = [this.mainPart]),
							(this.y = new Map()),
							(this.J = this.D(new w.$re())),
							(this.onDidCreateAuxiliaryEditorPart = this.J.event),
							(this.Q = this.F(c.StorageScope.WORKSPACE, c.StorageTarget.USER)),
							(this.R = !1),
							(this.S = new h.$0h()),
							(this.whenReady = this.S.p),
							(this.U = new h.$0h()),
							(this.whenRestored = this.U.p),
							(this.db = (() => {
								const k = this.m.get(l.cb, c.StorageScope.WORKSPACE);
								return k ? JSON.parse(k) : [];
							})()),
							(this.gb = this.D(new w.$re())),
							(this.onDidChangeActiveGroup = this.gb.event),
							(this.hb = this.D(new w.$re())),
							(this.onDidAddGroup = this.hb.event),
							(this.ib = this.D(new w.$re())),
							(this.onDidRemoveGroup = this.ib.event),
							(this.jb = this.D(new w.$re())),
							(this.onDidMoveGroup = this.jb.event),
							(this.kb = this.D(new w.$re())),
							(this.onDidActivateGroup = this.kb.event),
							(this.lb = this.D(new w.$re())),
							(this.onDidChangeGroupIndex = this.lb.event),
							(this.mb = this.D(new w.$re())),
							(this.onDidChangeGroupLocked = this.mb.event),
							(this.nb = this.D(new w.$re())),
							(this.onDidChangeGroupMaximized = this.nb.event),
							(this.pb = new Map()),
							(this.qb = new Map()),
							(this.tb = new Map()),
							(this.ub = new Map()),
							(this.vb = this.D(new E.$0c())),
							this.D(this.registerPart(this.mainPart)),
							this.W(),
							this.t();
					}
					t() {
						this.D(this.H(c.StorageScope.WORKSPACE, this.B)((v) => this.ab(v))),
							this.whenReady.then(() => this.rb());
					}
					u() {
						return this.b.createInstance(C.$Huc, this);
					}
					getScopedInstantiationService(v) {
						return (
							v === this.mainPart &&
								(this.y.has(v.windowId) ||
									this.b.invokeFunction((S) => {
										const I = S.get(s.$IY);
										this.y.set(
											v.windowId,
											this.D(
												this.b.createChild(
													new b.$Ki([s.$IY, I.createScoped("main", this.B)]),
												),
											),
										);
									})),
							this.y.get(v.windowId) ?? this.b
						);
					}
					async createAuxiliaryEditorPart(v) {
						const {
							part: S,
							instantiationService: I,
							disposables: T,
						} = await this.b
							.createInstance(u.$Iuc, this)
							.create(this.O(this.f.size), v);
						return (
							this.y.set(S.windowId, I),
							T.add((0, E.$Yc)(() => this.y.delete(S.windowId))),
							this.hb.fire(S.activeGroup),
							this.J.fire(S),
							S
						);
					}
					registerPart(v) {
						const S = this.D(new E.$Zc());
						return S.add(super.registerPart(v)), this.M(v, S), S;
					}
					g(v) {
						super.g(v),
							this.parts.forEach((S, I) => {
								S !== this.mainPart && S.notifyGroupsLabelChange(this.O(I));
							});
					}
					M(v, S) {
						S.add(
							v.onDidFocus(() => {
								this.N(v, !0),
									this.f.size > 1 && this.gb.fire(this.activeGroup);
							}),
						),
							S.add((0, E.$Yc)(() => this.N(v))),
							S.add(v.onDidChangeActiveGroup((I) => this.gb.fire(I))),
							S.add(v.onDidAddGroup((I) => this.hb.fire(I))),
							S.add(v.onDidRemoveGroup((I) => this.ib.fire(I))),
							S.add(v.onDidMoveGroup((I) => this.jb.fire(I))),
							S.add(v.onDidActivateGroup((I) => this.kb.fire(I))),
							S.add(v.onDidChangeGroupMaximized((I) => this.nb.fire(I))),
							S.add(v.onDidChangeGroupIndex((I) => this.lb.fire(I))),
							S.add(v.onDidChangeGroupLocked((I) => this.mb.fire(I)));
					}
					N(v, S) {
						const I = this.a.indexOf(v);
						I !== -1 && this.a.splice(I, 1), S && this.a.unshift(v);
					}
					O(v) {
						return (0, t.localize)(3468, null, v + 1);
					}
					getPart(v) {
						if (this.f.size > 1)
							if ((0, f.$Ygb)(v)) {
								const S = v;
								return this.j(S.ownerDocument);
							} else {
								const S = v;
								let I;
								typeof S == "number" ? (I = S) : (I = S.id);
								for (const T of this.f) if (T.hasGroup(I)) return T;
							}
						return this.mainPart;
					}
					static {
						this.P = "editorparts.state";
					}
					get isReady() {
						return this.R;
					}
					async W() {
						if (
							(await this.mainPart.whenReady, this.mainPart.willRestoreState)
						) {
							const S = this.X();
							S && (await this.$(S));
						}
						(0, r.$Sb)(this.a)?.activeGroup.focus(),
							(this.R = !0),
							this.S.complete(),
							await Promise.allSettled(this.parts.map((S) => S.whenRestored)),
							this.U.complete();
					}
					X() {
						return this.Q[l.P];
					}
					I() {
						const v = this.Z();
						v.auxiliary.length === 0 ? delete this.Q[l.P] : (this.Q[l.P] = v);
					}
					Z() {
						return {
							auxiliary: this.parts
								.filter((v) => v !== this.mainPart)
								.map((v) => {
									const S = this.r.getWindow(v.windowId);
									return { state: v.createState(), ...S?.createState() };
								}),
							mru: this.a.map((v) => this.parts.indexOf(v)),
						};
					}
					async $(v) {
						if (v.auxiliary.length) {
							const S = [];
							for (const I of v.auxiliary)
								S.push(this.createAuxiliaryEditorPart(I));
							await Promise.allSettled(S),
								v.mru.length === this.parts.length
									? (this.a = v.mru.map((I) => this.parts[I]))
									: (this.a = [...this.parts]),
								await Promise.allSettled(this.parts.map((I) => I.whenReady));
						}
					}
					get hasRestorableState() {
						return this.parts.some((v) => v.hasRestorableState);
					}
					ab(v) {
						if (v.external && v.scope === c.StorageScope.WORKSPACE) {
							this.G(v.scope);
							const S = this.X();
							S && this.bb(S);
						}
					}
					async bb(v) {
						for (const S of this.parts) {
							if (S === this.mainPart) continue;
							for (const T of S.getGroups(i.GroupsOrder.MOST_RECENTLY_ACTIVE))
								await T.closeAllEditors({ excludeConfirming: !0 });
							if (!S.close()) return !1;
						}
						return v !== "empty" && (await this.$(v)), !0;
					}
					static {
						this.cb = "editor.workingSets";
					}
					saveWorkingSet(v) {
						const S = {
							id: (0, p.$9g)(),
							name: v,
							main: this.mainPart.createState(),
							auxiliary: this.Z(),
						};
						return this.db.push(S), this.fb(), { id: S.id, name: S.name };
					}
					getWorkingSets() {
						return this.db.map((v) => ({ id: v.id, name: v.name }));
					}
					deleteWorkingSet(v) {
						const S = this.eb(v);
						typeof S == "number" && (this.db.splice(S, 1), this.fb());
					}
					async applyWorkingSet(v, S) {
						let I;
						if (
							(v === "empty" ? (I = "empty") : (I = this.db[this.eb(v) ?? -1]),
							!I || !(await this.bb(I === "empty" ? I : I.auxiliary)))
						)
							return !1;
						if (
							(await this.mainPart.applyState(I === "empty" ? I : I.main, S),
							!S?.preserveFocus)
						) {
							const P = (0, r.$Sb)(this.a);
							P && (await P.whenReady, P.activeGroup.focus());
						}
						return !0;
					}
					eb(v) {
						for (let S = 0; S < this.db.length; S++)
							if (this.db[S].id === v.id) return S;
					}
					fb() {
						this.m.store(
							l.cb,
							JSON.stringify(this.db),
							c.StorageScope.WORKSPACE,
							c.StorageTarget.MACHINE,
						);
					}
					get activeGroup() {
						return this.activePart.activeGroup;
					}
					get sideGroup() {
						return this.activePart.sideGroup;
					}
					get groups() {
						return this.getGroups();
					}
					get count() {
						return this.groups.length;
					}
					getGroups(v = i.GroupsOrder.CREATION_TIME) {
						if (this.f.size > 1) {
							let S;
							switch (v) {
								case i.GroupsOrder.GRID_APPEARANCE:
								case i.GroupsOrder.CREATION_TIME:
									S = this.parts;
									break;
								case i.GroupsOrder.MOST_RECENTLY_ACTIVE:
									S = (0, r.$Qb)([...this.a, ...this.parts]);
									break;
							}
							return S.map((I) => I.getGroups(v)).flat();
						}
						return this.mainPart.getGroups(v);
					}
					getGroup(v) {
						if (this.f.size > 1)
							for (const S of this.f) {
								const I = S.getGroup(v);
								if (I) return I;
							}
						return this.mainPart.getGroup(v);
					}
					ob(v) {
						let S;
						if ((typeof v == "number" ? (S = this.getGroup(v)) : (S = v), !S))
							throw new Error("Invalid editor group provided!");
						return S;
					}
					activateGroup(v) {
						return this.getPart(v).activateGroup(v);
					}
					getSize(v) {
						return this.getPart(v).getSize(v);
					}
					setSize(v, S) {
						this.getPart(v).setSize(v, S);
					}
					arrangeGroups(v, S = this.activePart.activeGroup) {
						this.getPart(S).arrangeGroups(v, S);
					}
					toggleMaximizeGroup(v = this.activePart.activeGroup) {
						this.getPart(v).toggleMaximizeGroup(v);
					}
					toggleExpandGroup(v = this.activePart.activeGroup) {
						this.getPart(v).toggleExpandGroup(v);
					}
					restoreGroup(v) {
						return this.getPart(v).restoreGroup(v);
					}
					applyLayout(v) {
						this.activePart.applyLayout(v);
					}
					getLayout() {
						return this.activePart.getLayout();
					}
					get orientation() {
						return this.activePart.orientation;
					}
					setGroupOrientation(v) {
						this.activePart.setGroupOrientation(v);
					}
					findGroup(v, S = this.activeGroup, I) {
						const T = this.getPart(S);
						if (this.f.size > 1) {
							const P = this.getGroups(i.GroupsOrder.GRID_APPEARANCE);
							if (
								v.location === i.GroupLocation.FIRST ||
								v.location === i.GroupLocation.LAST
							)
								return v.location === i.GroupLocation.FIRST
									? P[0]
									: P[P.length - 1];
							const k = T.findGroup(v, S, !1);
							if (k) return k;
							if (
								v.location === i.GroupLocation.NEXT ||
								v.location === i.GroupLocation.PREVIOUS
							) {
								const L = this.ob(S),
									D = P.indexOf(L);
								if (v.location === i.GroupLocation.NEXT) {
									let M = P[D + 1];
									return !M && I && (M = P[0]), M;
								} else {
									let M = P[D - 1];
									return !M && I && (M = P[P.length - 1]), M;
								}
							}
						}
						return T.findGroup(v, S, I);
					}
					addGroup(v, S) {
						return this.getPart(v).addGroup(v, S);
					}
					removeGroup(v) {
						this.getPart(v).removeGroup(v);
					}
					moveGroup(v, S, I) {
						return this.getPart(v).moveGroup(v, S, I);
					}
					mergeGroup(v, S, I) {
						return this.getPart(v).mergeGroup(v, S, I);
					}
					mergeAllGroups(v) {
						return this.activePart.mergeAllGroups(v);
					}
					copyGroup(v, S, I) {
						return this.getPart(v).copyGroup(v, S, I);
					}
					createEditorDropTarget(v, S) {
						return this.getPart(v).createEditorDropTarget(v, S);
					}
					rb() {
						this.D(this.onDidChangeActiveGroup(() => this.sb())),
							this.groups.forEach((v) => this.wb(v)),
							this.D(this.onDidAddGroup((v) => this.wb(v))),
							this.D(
								this.onDidRemoveGroup((v) => {
									this.qb.delete(v.id),
										this.ub.delete(v.id),
										this.vb.deleteAndDispose(v.id);
								}),
							);
					}
					sb() {
						const v = this.qb.get(this.activeGroup.id);
						if (v)
							for (const [S, I] of this.pb) {
								const T = v.get(S);
								T ? I.set(T.get()) : I.reset();
							}
					}
					bind(v, S) {
						let I = this.pb.get(v.key);
						I || ((I = v.bindTo(this.s)), this.pb.set(v.key, I));
						let T = this.qb.get(S.id);
						T || ((T = new Map()), this.qb.set(S.id, T));
						let P = T.get(v.key);
						P || ((P = v.bindTo(S.scopedContextKeyService)), T.set(v.key, P));
						const k = this;
						return {
							get() {
								return P.get();
							},
							set(L) {
								k.activeGroup === S && I.set(L), P.set(L);
							},
							reset() {
								k.activeGroup === S && I.reset(), P.reset();
							},
						};
					}
					registerContextKeyProvider(v) {
						if (this.tb.has(v.contextKey.key) || this.pb.has(v.contextKey.key))
							throw new Error(
								`A context key provider for key ${v.contextKey.key} already exists.`,
							);
						this.tb.set(v.contextKey.key, v);
						const S = () => {
							for (const T of this.groups) this.xb(T, v);
						};
						S();
						const I = v.onDidChange?.(() => S());
						return (0, E.$Yc)(() => {
							I?.dispose(),
								this.pb.delete(v.contextKey.key),
								this.qb.forEach((T) => T.delete(v.contextKey.key)),
								this.tb.delete(v.contextKey.key),
								this.ub.forEach((T) => T.delete(v.contextKey.key));
						});
					}
					wb(v) {
						const S = v.onDidActiveEditorChange(() => {
							for (const I of this.tb.values()) this.xb(v, I);
						});
						this.vb.set(v.id, S);
					}
					xb(v, S) {
						let I = this.ub.get(v.id);
						I || ((I = new Map()), this.ub.set(v.id, I));
						let T = I.get(S.contextKey.key);
						T || ((T = this.bind(S.contextKey, v)), I.set(S.contextKey.key, T)),
							T.set(S.getGroupContextKeyValue(v));
					}
					get partOptions() {
						return this.mainPart.partOptions;
					}
					get onDidChangeEditorPartOptions() {
						return this.mainPart.onDidChangeEditorPartOptions;
					}
				};
				(e.$Juc = y),
					(e.$Juc =
						y =
						l =
							Ne(
								[
									j(0, m.$Li),
									j(1, c.$lq),
									j(2, n.$iP),
									j(3, g.$AEb),
									j(4, o.$6j),
								],
								y,
							)),
					(0, d.$lK)(i.$EY, y, d.InstantiationType.Eager);
			},
		),
		define(
			de[4227],
			he([1, 0, 2, 2, 2, 13, 134, 36, 1374, 147]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Jfd = void 0);
				const u = (0, t.template)(
						"<div><h2>Your Free Trial Has Ended</h2><p>Thank you for trying Cursor Pro! To continue enjoying premium features like:</p><ul><li>Unlimited completions</li><li>Unlimited chat and composer</li><li>Fast premium requests</li><li>And more...</li></ul><div>",
					),
					a = (h) => {
						const c = (0, d.$odc)(),
							[n, g] = (0, E.createSignal)(!1),
							p = () => {
								g(!1);
							};
						return (
							(0, E.createEffect)(() => {
								const o = async (f, b) => {
									if (
										b === C.MembershipType.FREE_TRIAL &&
										f === C.MembershipType.FREE
									) {
										const s =
											await c.cursorAuthenticationService.getDaysRemainingOnTrial();
										s !== void 0 && s <= 0 && g(!0);
									}
								};
								c.cursorAuthenticationService.addSubscriptionChangedListener(o),
									(0, E.onCleanup)(() => {
										c.cursorAuthenticationService.removeSubscriptionChangedListener(
											o,
										);
									});
							}),
							(0, w.createComponent)(E.Show, {
								get when() {
									return n();
								},
								get children() {
									return (0, w.createComponent)(m.$ufd, {
										closeModal: p,
										disableClickOff: !1,
										extras: { style: { width: "500px", padding: "24px" } },
										get children() {
											const o = u(),
												f = o.firstChild,
												b = f.nextSibling,
												s = b.nextSibling,
												l = s.nextSibling;
											return (
												o.style.setProperty("display", "flex"),
												o.style.setProperty("flex-direction", "column"),
												o.style.setProperty("gap", "16px"),
												f.style.setProperty("margin", "0"),
												f.style.setProperty("font-size", "18px"),
												f.style.setProperty("font-weight", "600"),
												b.style.setProperty("margin", "0"),
												b.style.setProperty("line-height", "1.5"),
												b.style.setProperty(
													"color",
													"var(--vscode-foreground)",
												),
												b.style.setProperty("opacity", "0.8"),
												s.style.setProperty("margin", "0"),
												s.style.setProperty("padding", "0 0 0 20px"),
												s.style.setProperty("line-height", "1.5"),
												l.style.setProperty("display", "flex"),
												l.style.setProperty("gap", "12px"),
												l.style.setProperty("margin-top", "8px"),
												(0, i.insert)(
													l,
													(0, w.createComponent)(r.$rdc, {
														type: "primary",
														onClick: () => {
															p(), c.cursorAuthenticationService.pay();
														},
														children: "Upgrade to Pro",
													}),
													null,
												),
												(0, i.insert)(
													l,
													(0, w.createComponent)(r.$rdc, {
														type: "secondary",
														onClick: p,
														children: "Maybe Later",
													}),
													null,
												),
												o
											);
										},
									});
								},
							})
						);
					};
				e.$Jfd = a;
			},
		),
		define(
			de[4228],
			he([1, 0, 2, 2, 2, 2, 2, 13, 36, 147, 894, 14]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ifd = void 0);
				const h = (0, t.template)(
						'<div><div><span>Invite team members</span></div><div><div>Invite link</div><div><input type="text" readonly></div></div><div><div>Invite by email</div><div><input type="email" placeholder="Email, comma separated">',
					),
					c = (n) => {
						const g = (0, m.$odc)(),
							[p, o] = (0, d.createSignal)(!1),
							[f, b] = (0, d.createSignal)(""),
							s = (D) => /\S+@\S+\.\S+/.test(D),
							[l, y] = (0, d.createSignal)(!1);
						(0, d.createEffect)(() => {
							l() &&
								setTimeout(() => {
									y(!1);
								}, 2e3);
						});
						const $ = (g.reactiveStorageService.applicationUserPersistentStorage
								.aiSettings.teamIds ?? [])[0],
							v = async (D) => {
								if (!s(D)) return;
								const N = await (
									await g.cursorAuthenticationService.dashboardClient()
								).sendTeamInvite({
									teamId: $,
									email: D,
									role: u.TeamRole.MEMBER,
								});
							},
							[S, I] = (0, d.createSignal)(null);
						(0, d.createEffect)(() => {
							(async () => {
								const N = await (
									await g.cursorAuthenticationService.dashboardClient()
								).getTeamInviteLink({ teamId: $ });
								N.inviteLink
									? I(N.inviteLink)
									: console.error("Failed to fetch invite link");
							})();
						});
						const T = async () => {
								console.log("clicked"), o(!0);
								const D = f().split(","),
									M = Date.now();
								await Promise.all(D.map((N) => v(N))),
									Date.now() - M < 200 &&
										(await new Promise((N) =>
											setTimeout(N, 200 - (Date.now() - M)),
										)),
									console.log("done"),
									o(!1),
									n.setShowInvite(!1);
							},
							[P, k] = (0, d.createSignal)(!0);
						(0, d.createEffect)(() => {
							const D = f();
							console.log("e", D), k(!s(D));
						});
						const L = { value: void 0 };
						return (
							(0, d.createEffect)(() => {
								setTimeout(() => {
									L.value && L.value.focus();
								}, 100);
							}),
							(() => {
								const D = h(),
									M = D.firstChild,
									N = M.firstChild,
									A = M.nextSibling,
									R = A.firstChild,
									O = R.nextSibling,
									B = O.firstChild,
									U = A.nextSibling,
									z = U.firstChild,
									F = z.nextSibling,
									x = F.firstChild;
								return (
									D.style.setProperty(
										"background-color",
										"var(--vscode-editor-background)",
									),
									D.style.setProperty("border-radius", "6px"),
									D.style.setProperty("padding", "16px"),
									D.style.setProperty(
										"color",
										"var(--vscode-editor-foreground)",
									),
									D.style.setProperty("width", "auto"),
									D.style.setProperty("min-width", "500px"),
									D.style.setProperty("position", "relative"),
									D.style.setProperty("display", "flex"),
									D.style.setProperty("flex-direction", "column"),
									D.style.setProperty("gap", "16px"),
									M.style.setProperty("font-size", "14px"),
									M.style.setProperty("display", "flex"),
									M.style.setProperty("align-items", "center"),
									M.style.setProperty("justify-content", "space-between"),
									N.style.setProperty("font-weight", "bold"),
									(0, E.insert)(
										M,
										(0, C.createComponent)(r.$rdc, {
											title: "",
											get codicon() {
												return a.$ak.close;
											},
											type: "secondary",
											onClick: () => n.setShowInvite(!1),
											style: { padding: 0 },
											codiconStyle: {
												width: "14px",
												height: "14px",
												display: "flex",
												"align-items": "center",
												"justify-content": "center",
											},
										}),
										null,
									),
									R.style.setProperty("margin-bottom", "8px"),
									R.style.setProperty("font-size", "12px"),
									O.style.setProperty("display", "flex"),
									O.style.setProperty("align-items", "center"),
									O.style.setProperty("gap", "8px"),
									O.style.setProperty("user-select", "none"),
									B.style.setProperty("flex-grow", "1"),
									B.style.setProperty("padding", "8px 10px"),
									B.style.setProperty("border-radius", "4px"),
									B.style.setProperty(
										"border",
										"1px solid var(--vscode-settings-dropdownBorder)",
									),
									B.style.setProperty("user-select", "none"),
									B.style.setProperty(
										"background-color",
										"var(--vscode-input-background)",
									),
									B.style.setProperty(
										"color",
										"var(--vscode-input-foreground)",
									),
									B.style.setProperty("font-size", "12px"),
									B.style.setProperty("outline", "none"),
									(0, E.insert)(
										O,
										(0, C.createComponent)(r.$rdc, {
											title: "Copy link",
											type: "primary",
											get codicon() {
												return l() ? a.$ak.check : a.$ak.copy;
											},
											get disabled() {
												return !S();
											},
											onClick: () => {
												S() && (g.clipboardService.writeText(S() ?? ""), y(!0));
											},
											style: {
												"border-radius": "4px",
												width: "110px",
												padding: "6px 0px",
											},
										}),
										null,
									),
									z.style.setProperty("margin-bottom", "8px"),
									z.style.setProperty("font-size", "12px"),
									F.style.setProperty("display", "flex"),
									F.style.setProperty("align-items", "center"),
									F.style.setProperty("gap", "8px"),
									x.addEventListener("change", (H) => b(H.target.value)),
									x.addEventListener("keyup", (H) => {
										L.value && L.value.value && b(L.value.value);
									}),
									x.addEventListener("keydown", (H) => {
										H.key === "Enter" && T();
									}),
									(0, i.use)((H) => {
										L.value = H;
									}, x),
									x.style.setProperty("flex-grow", "1"),
									x.style.setProperty("padding", "8px 10px"),
									x.style.setProperty("border-radius", "4px"),
									x.style.setProperty(
										"border",
										"1px solid var(--vscode-settings-dropdownBorder)",
									),
									x.style.setProperty(
										"background-color",
										"var(--vscode-input-background)",
									),
									x.style.setProperty("font-size", "12px"),
									x.style.setProperty(
										"color",
										"var(--vscode-input-foreground)",
									),
									x.style.setProperty("outline", "none"),
									(0, E.insert)(
										F,
										(0, C.createComponent)(r.$rdc, {
											title: "Send invite",
											get codicon() {
												return p() ? a.$ak.loading : a.$ak.arrowRight;
											},
											onClick: async () => {
												T();
											},
											style: {
												padding: "6px 0px",
												width: "110px",
												"border-radius": "4px",
											},
											get disabled() {
												return P();
											},
										}),
										null,
									),
									(0, w.effect)(() => (B.value = S() ?? "Loading...")),
									D
								);
							})()
						);
					};
				e.$Ifd = c;
			},
		),
		define(
			de[4229],
			he([1, 0, 2, 2, 2, 2, 815, 147]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$BDc = r);
				const m = (0, t.template)(
					"<div><h3>Enable <!> API Key</h3><div>Are you sure you want to enable your own <!> API key? Several of Cursor's features require custom models (Tab, Apply from Chat, Composer), which cannot be billed to an API key.</div><div>",
				);
				function r(u) {
					return (0, i.createComponent)(C.$fzc, {
						get isOpen() {
							return !!u.apiName && u.isOpen;
						},
						get onClose() {
							return u.onClose;
						},
						get children() {
							const a = m(),
								h = a.firstChild,
								c = h.firstChild,
								n = c.nextSibling,
								g = n.nextSibling,
								p = h.nextSibling,
								o = p.firstChild,
								f = o.nextSibling,
								b = f.nextSibling,
								s = p.nextSibling;
							return (
								a.style.setProperty("display", "flex"),
								a.style.setProperty("flex-direction", "column"),
								a.style.setProperty("gap", "8px"),
								h.style.setProperty("margin", "0"),
								(0, w.insert)(h, () => u.apiName, n),
								(0, w.insert)(p, () => u.apiName, f),
								s.style.setProperty("display", "flex"),
								s.style.setProperty("justify-content", "flex-end"),
								s.style.setProperty("gap", "8px"),
								(0, w.insert)(
									s,
									(0, i.createComponent)(d.$rdc, {
										type: "secondary",
										get onClick() {
											return u.onClose;
										},
										children: "Cancel",
									}),
									null,
								),
								(0, w.insert)(
									s,
									(0, i.createComponent)(d.$rdc, {
										get onClick() {
											return u.onConfirm;
										},
										get children() {
											return [
												"Enable ",
												(0, E.memo)(() => u.apiName),
												" API Key",
											];
										},
									}),
									null,
								),
								a
							);
						},
					});
				}
			},
		),
		define(
			de[4230],
			he([
				1, 0, 2, 2, 2, 2, 13, 14, 36, 58, 147, 722, 974, 973, 1064, 1231, 4137,
				364, 484, 523, 1981, 4205, 1714, 385, 12, 134,
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
				$,
				v,
				S,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$ADc = O);
				const I = (0, t.template)("<div>"),
					T = (0, t.template)(
						"<div><span>Open editor settings.</span> (font, auto-save, word wrap, etc)<br><br><span>Configure keyboard shortcuts.</span> <br><br>Use <span></span> for the command palette, where many editor functions can be controlled.",
					),
					P = (0, t.template)(
						"<div>Check out our <span>docs</span> or join our <span>forum</span>.<br><br>Feel free to reach out at <span>hi@cursor.com</span>.",
					),
					k = (0, t.template)("<div>Business"),
					L = (0, t.template)("<div>Pro"),
					D = (0, t.template)("<div>Pro Trial"),
					M = (0, t.template)('<div class="settings__buttons">'),
					N = (0, t.template)('<div class="openai-model-dropdown-container">'),
					A = (0, t.template)(
						"<div>Are you sure? This replaces your settings and extensions with your vscode ones. This cannot be undone.",
					),
					R = (0, t.template)("<span>Read more");
				function O(B) {
					const U = (0, m.$odc)(),
						z = U.cursorAuthenticationService;
					(0, C.createEffect)(() => {
						z.refreshAuthentication();
						const Z = U.window.setInterval(z.refreshAuthentication, 1e3);
						(0, C.onCleanup)(() => {
							U.window.clearInterval(Z);
						});
					});
					const [F, x, H] = (0, o.$A0b)(),
						[q, V] = (0, C.createSignal)(!1),
						[G, K] = (0, C.createSignal)(!1),
						J = [
							{ id: "enabled", label: "enabled" },
							{ id: "disabled", label: "disabled" },
						],
						[W, X] = (0, C.createSignal)(!1),
						Y = U.window.setInterval(() => {
							X(
								U.cursorAuthenticationService.shouldHaveGhostModeFromEnterprise(),
							);
						}, 1e3);
					(0, C.onCleanup)(() => {
						U.window.clearInterval(Y);
					});
					const ie = (0, C.createMemo)(() =>
							W()
								? [{ id: "enabled", label: "enabled (enforced)" }]
								: [
										{ id: "disabled", label: "disabled" },
										{ id: "enabled", label: "enabled" },
									],
						),
						[ne, ee] = (0, y.$lDc)(
							U.storageService,
							l.$zDc.Id + ".experimental-index.data",
						),
						[_, te] = (0, a.$B$b)(),
						Q = (0, $.$5$b)("workbench.action.showCommands");
					return (0, w.createComponent)(h.$eDc, {
						get children() {
							return [
								(0, w.createComponent)(c.$VCc, {
									title: "Account",
									get titleExtra() {
										return [
											(0, w.createComponent)(C.Show, {
												get when() {
													return te() === S.MembershipType.ENTERPRISE;
												},
												get children() {
													const Z = k();
													return (
														Z.style.setProperty("font-size", "0.6rem"),
														Z.style.setProperty("padding", "0.05rem 0.25rem"),
														Z.style.setProperty("border-radius", "0.25rem"),
														Z.style.setProperty(
															"background",
															"var(--vscode-input-background)",
														),
														Z.style.setProperty(
															"color",
															"var(--vscode-foreground)",
														),
														Z
													);
												},
											}),
											(0, w.createComponent)(C.Show, {
												get when() {
													return te() === S.MembershipType.PRO;
												},
												get children() {
													const Z = L();
													return (
														Z.style.setProperty("font-size", "0.6rem"),
														Z.style.setProperty("padding", "0.05rem 0.25rem"),
														Z.style.setProperty("border-radius", "0.25rem"),
														Z.style.setProperty(
															"background",
															"var(--vscode-input-background)",
														),
														Z.style.setProperty(
															"color",
															"var(--vscode-foreground)",
														),
														Z
													);
												},
											}),
											(0, w.createComponent)(C.Show, {
												get when() {
													return te() === S.MembershipType.FREE_TRIAL;
												},
												get children() {
													const Z = D();
													return (
														Z.style.setProperty("font-size", "0.6rem"),
														Z.style.setProperty("padding", "0.05rem 0.25rem"),
														Z.style.setProperty("border-radius", "0.25rem"),
														Z.style.setProperty(
															"background",
															"var(--vscode-input-background)",
														),
														Z.style.setProperty(
															"color",
															"var(--vscode-foreground)",
														),
														Z
													);
												},
											}),
										];
									},
									get description() {
										return [
											(0, E.memo)(() =>
												_() !== !0
													? "To avoid abuse on our backend, we ask that you login to use the AI features."
													: "",
											),
											(0, w.createComponent)(p.$jDc, {}),
										];
									},
									style: { gap: "8px" },
									get children() {
										return (0, w.createComponent)(C.Show, {
											get when() {
												return _();
											},
											get fallback() {
												return (() => {
													const Z = M();
													return (
														(0, i.insert)(
															Z,
															(0, w.createComponent)(u.$rdc, {
																title: "Sign in",
																onClick: () => z.login(),
															}),
														),
														Z
													);
												})();
											},
											get children() {
												return (0, w.createComponent)(C.Show, {
													get when() {
														return (
															(0, E.memo)(
																() => te() !== S.MembershipType.FREE,
															)() && te() !== S.MembershipType.FREE_TRIAL
														);
													},
													get fallback() {
														return (() => {
															const Z = I();
															return (
																Z.style.setProperty("display", "flex"),
																Z.style.setProperty("gap", "8px"),
																Z.style.setProperty("align-items", "center"),
																Z.style.setProperty("transform-origin", "left"),
																(0, i.insert)(
																	Z,
																	(0, w.createComponent)(u.$rdc, {
																		title: "Upgrade to Pro",
																		size: "small",
																		get codicon() {
																			return d.$ak.rocket;
																		},
																		get onClick() {
																			return z.pay;
																		},
																	}),
																	null,
																),
																(0, i.insert)(
																	Z,
																	(0, w.createComponent)(u.$rdc, {
																		title: "Manage",
																		type: "tertiary",
																		size: "small",
																		get codicon() {
																			return d.$ak.settingsGear;
																		},
																		get onClick() {
																			return z.settings;
																		},
																	}),
																	null,
																),
																(0, i.insert)(
																	Z,
																	(0, w.createComponent)(u.$rdc, {
																		title: "Log out",
																		type: "tertiary",
																		size: "small",
																		get codicon() {
																			return d.$ak.logOut;
																		},
																		onClick: () => z.logout(),
																	}),
																	null,
																),
																Z
															);
														})();
													},
													get children() {
														const Z = I();
														return (
															Z.style.setProperty("display", "flex"),
															Z.style.setProperty("gap", "8px"),
															Z.style.setProperty("align-items", "center"),
															(0, i.insert)(
																Z,
																(0, w.createComponent)(C.Show, {
																	get when() {
																		return te() === S.MembershipType.ENTERPRISE;
																	},
																	get children() {
																		return (0, w.createComponent)(u.$rdc, {
																			title: "Invite To Team",
																			type: "primary",
																			size: "small",
																			get codicon() {
																				return d.$ak.plus;
																			},
																			onClick: (se) => {
																				U.reactiveStorageService.setNonPersistentStorage(
																					"showingInviteModal",
																					!0,
																				);
																			},
																		});
																	},
																}),
																null,
															),
															(0, i.insert)(
																Z,
																(0, w.createComponent)(u.$rdc, {
																	title: "Manage",
																	type: "tertiary",
																	size: "small",
																	get codicon() {
																		return d.$ak.settingsGear;
																	},
																	get onClick() {
																		return z.settings;
																	},
																}),
																null,
															),
															(0, i.insert)(
																Z,
																(0, w.createComponent)(u.$rdc, {
																	title: "Log out",
																	type: "tertiary",
																	size: "small",
																	get codicon() {
																		return d.$ak.logOut;
																	},
																	onClick: () => z.logout(),
																}),
																null,
															),
															Z
														);
													},
												});
											},
										});
									},
								}),
								(0, w.createComponent)(n.$YCc, {
									label: "VS Code Import",
									description:
										"Instantly use all of your extensions, settings and keybindings",
									get extra() {
										return (() => {
											const Z = N();
											return (
												Z.style.setProperty("transform-origin", "right"),
												Z.style.setProperty("position", "relative"),
												(0, i.insert)(
													Z,
													(0, w.createComponent)(u.$rdc, {
														get title() {
															return q() ? "Importing" : "Import";
														},
														type: "tertiary",
														size: "small",
														get codicon() {
															return G() ? d.$ak.check : d.$ak.add;
														},
														get isLoading() {
															return q();
														},
														get style() {
															return {
																opacity: q() ? 0.5 : 1,
																transition: "opacity 0.1s",
																"pointer-events": q() ? "none" : "auto",
															};
														},
														onClick: (se) => {
															const re =
																se?.currentTarget?.getBoundingClientRect();
															re && x({ x: 0, y: re.height + 6 });
														},
													}),
													null,
												),
												(0, i.insert)(
													Z,
													(0, w.createComponent)(C.Show, {
														get when() {
															return F();
														},
														children: (se) =>
															(0, w.createComponent)(f.Menu, {
																isRelative: !0,
																anchor: "top-left",
																get position() {
																	return se();
																},
																close: H,
																width: "240px",
																zIndexModifier: 1e9,
																style: {
																	padding: "8px 12px",
																	gap: "8px",
																	"z-index": "10000",
																},
																animationType: "fade",
																get children() {
																	return [
																		(() => {
																			const re = A();
																			return (
																				re.style.setProperty(
																					"font-size",
																					"12px",
																				),
																				re
																			);
																		})(),
																		(() => {
																			const re = I();
																			return (
																				re.style.setProperty("display", "flex"),
																				re.style.setProperty(
																					"align-items",
																					"center",
																				),
																				re.style.setProperty(
																					"justify-content",
																					"flex-end",
																				),
																				re.style.setProperty("gap", "6px"),
																				(0, i.insert)(
																					re,
																					(0, w.createComponent)(u.$rdc, {
																						title: "Cancel",
																						type: "secondary",
																						onClick: H,
																						style: {
																							"font-size": "12px",
																							padding: "4px",
																							"line-height": "80%",
																						},
																					}),
																					null,
																				),
																				(0, i.insert)(
																					re,
																					(0, w.createComponent)(u.$rdc, {
																						title: "Confirm",
																						style: {
																							"font-size": "12px",
																							padding: "4px",
																							"line-height": "80%",
																						},
																						onClick: () => {
																							(async () => {
																								if ((H(), V(!0), !1))
																									await new Promise((ae) =>
																										setTimeout(ae, 3e3),
																									),
																										V(!1),
																										K(!0),
																										await new Promise((ae) =>
																											setTimeout(ae, 5e3),
																										),
																										K(!1);
																								else
																									try {
																										await U.commandService.executeCommand(
																											r.$9W,
																											!0,
																										),
																											V(!1),
																											K(!0),
																											await new Promise((ae) =>
																												setTimeout(ae, 5e3),
																											),
																											K(!1),
																											U.notificationService.info(
																												"VS Code import completed!",
																											);
																									} catch (ae) {
																										console.error(
																											"Error importing extensions:",
																											ae,
																										),
																											U.notificationService.error(
																												"Error importing extensions, please try again.",
																											),
																											V(!1);
																									}
																							})();
																						},
																					}),
																					null,
																				),
																				re
																			);
																		})(),
																	];
																},
															}),
													}),
													null,
												),
												Z
											);
										})();
									},
								}),
								(0, w.createComponent)(g.$dDc, {}),
								(0, w.createComponent)(c.$VCc, {
									title: "Rules for AI",
									description: `These rules get shown to the AI on all chats and ${v.$m ? "Command" : "Ctrl"}-K sessions.`,
									get children() {
										const Z = I();
										return (
											Z.style.setProperty("display", "flex"),
											Z.style.setProperty("flex-direction", "column"),
											Z.style.setProperty("gap", "4px"),
											(0, i.insert)(
												Z,
												(0, w.createComponent)(s.$tDc, {
													get inputBoxDelegate() {
														return ne.inputBoxDelegate;
													},
												}),
												null,
											),
											(0, i.insert)(
												Z,
												(0, w.createComponent)(n.$YCc, {
													label: "Include .cursorrules file",
													description:
														"If off, we will not include any .cursorrules files in your Rules for AI.",
													get value() {
														return (
															U.reactiveStorageService
																.workspaceUserPersistentStorage
																.ignoreCursorRules !== !0
														);
													},
													onChange: (se) => {
														U.reactiveStorageService.setWorkspaceUserPersistentStorage(
															"ignoreCursorRules",
															!se,
														);
													},
												}),
												null,
											),
											Z
										);
									},
								}),
								(0, w.createComponent)(g.$dDc, {}),
								(0, w.createComponent)(c.$VCc, {
									title: "Editor",
									get children() {
										const Z = T(),
											se = Z.firstChild,
											re = se.nextSibling,
											le = re.nextSibling,
											oe = le.nextSibling,
											ae = oe.nextSibling,
											pe = ae.nextSibling,
											$e = pe.nextSibling,
											ye = $e.nextSibling,
											ue = ye.nextSibling,
											fe = ue.nextSibling;
										return (
											Z.style.setProperty("font-size", "12px"),
											Z.style.setProperty(
												"color",
												"var(--vscode-input-placeholderForeground)",
											),
											se.addEventListener("click", () => {
												U.commandService.executeCommand(
													"workbench.action.openGlobalSettings",
												);
											}),
											se.style.setProperty("cursor", "pointer"),
											se.style.setProperty("text-decoration", "underline"),
											se.style.setProperty("text-underline-offset", "2px"),
											ae.addEventListener("click", () => {
												U.commandService.executeCommand(
													"workbench.action.openGlobalKeybindings",
												);
											}),
											ae.style.setProperty("cursor", "pointer"),
											ae.style.setProperty("text-decoration", "underline"),
											ae.style.setProperty("text-underline-offset", "2px"),
											fe.addEventListener("click", () => {
												U.commandService.executeCommand(
													"workbench.action.showCommands",
												);
											}),
											fe.style.setProperty("cursor", "pointer"),
											fe.style.setProperty("text-decoration", "underline"),
											fe.style.setProperty("text-underline-offset", "2px"),
											(0, i.insert)(fe, Q),
											Z
										);
									},
								}),
								(0, w.createComponent)(g.$dDc, {}),
								(0, w.createComponent)(c.$VCc, {
									title: "Privacy mode",
									get description() {
										return [
											"If on, none of your code will be stored by us. If off, we may save prompts and collect telemetry data to improve Cursor.",
											" ",
											(() => {
												const Z = R();
												return (
													Z.addEventListener("click", () => {
														U.openerService.open("https://cursor.com/privacy", {
															openExternal: !0,
														});
													}),
													Z.style.setProperty("cursor", "pointer"),
													Z.style.setProperty("text-decoration", "underline"),
													Z.style.setProperty("text-underline-offset", "2px"),
													Z
												);
											})(),
											".",
										];
									},
									get children() {
										return (0, w.createComponent)(b.$Kbc, {
											chevronRight: !0,
											get origLabel() {
												return U.cursorAuthenticationService.reactivePrivacyMode() ===
													!0
													? "enabled"
													: "disabled";
											},
											get items() {
												return (0, E.memo)(
													() => te() === S.MembershipType.ENTERPRISE,
												)()
													? ie()
													: J;
											},
											onSelect: (Z) => {
												U.reactiveStorageService.setApplicationUserPersistentStorage(
													"noStorageMode",
													Z === "enabled",
												);
											},
											get value() {
												return U.cursorAuthenticationService.reactivePrivacyMode() !==
													!0
													? "disabled"
													: "enabled";
											},
											isRelative: !0,
										});
									},
								}),
								(0, w.createComponent)(g.$dDc, {}),
								(0, w.createComponent)(c.$VCc, {
									title: "Any questions?",
									get children() {
										const Z = P(),
											se = Z.firstChild,
											re = se.nextSibling,
											le = re.nextSibling,
											oe = le.nextSibling,
											ae = oe.nextSibling,
											pe = ae.nextSibling,
											$e = pe.nextSibling,
											ye = $e.nextSibling,
											ue = ye.nextSibling;
										return (
											Z.style.setProperty("font-size", "12px"),
											Z.style.setProperty(
												"color",
												"var(--vscode-input-placeholderForeground)",
											),
											re.addEventListener("click", () => {
												U.openerService.open("https://docs.cursor.com", {
													openExternal: !0,
												});
											}),
											re.style.setProperty("cursor", "pointer"),
											re.style.setProperty("text-decoration", "underline"),
											re.style.setProperty("text-underline-offset", "2px"),
											oe.addEventListener("click", () => {
												U.openerService.open("https://forum.cursor.com", {
													openExternal: !0,
												});
											}),
											oe.style.setProperty("cursor", "pointer"),
											oe.style.setProperty("text-decoration", "underline"),
											oe.style.setProperty("text-underline-offset", "2px"),
											ue.addEventListener("click", () => {
												U.openerService.open("mailto:hi@cursor.com", {
													openExternal: !0,
												});
											}),
											ue.style.setProperty("cursor", "pointer"),
											ue.style.setProperty("text-decoration", "underline"),
											ue.style.setProperty("text-underline-offset", "2px"),
											Z
										);
									},
								}),
							];
						},
					});
				}
			},
		),
		define(
			de[4231],
			he([1, 0, 2, 2, 2, 2, 13, 147, 14, 1008, 36, 694]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$3ac = n);
				const h = (0, t.template)("<div>"),
					c = (0, t.template)("<div><div><div>");
				function n(g) {
					const p = (0, u.$odc)(),
						{ showHover: o, hideHover: f } = (0, a.$G$b)(),
						[b, s] = (0, C.createSignal)(null),
						[l, y] = (0, C.createSignal)(!1),
						[$, v] = (0, C.createSignal)(!1),
						S = (P) => {
							b() === P
								? (s(null), g.onSubmitFeedback(null))
								: (s(P),
									g.onSubmitFeedback(P),
									y(!0),
									setTimeout(() => y(!1), 4e3));
						},
						I = () => {
							(0, r.$Y$b)(g.copyText) && (v(!0), setTimeout(() => v(!1), 2e3));
						},
						T = (() => {
							const P = h();
							return (
								P.style.setProperty("display", "flex"),
								P.style.setProperty("flex-direction", "row"),
								P.style.setProperty("width", "fit-content"),
								P.style.setProperty("gap", "2px"),
								(0, w.insert)(
									P,
									(0, E.createComponent)(d.$rdc, {
										style: {
											padding: "4px 4px",
											display: "flex",
											"justify-content": "center",
											"align-items": "center",
										},
										codiconStyle: { "font-size": "14px" },
										type: "secondary",
										onClick: () => S(!0),
										get codicon() {
											return b() === !0 ? m.$ak.thumbsUpFilled : m.$ak.thumbsup;
										},
									}),
									null,
								),
								(0, w.insert)(
									P,
									(0, E.createComponent)(d.$rdc, {
										style: {
											padding: "4px 4px",
											display: "flex",
											"justify-content": "center",
											"align-items": "center",
										},
										codiconStyle: { "font-size": "14px" },
										type: "secondary",
										onClick: () => S(!1),
										get codicon() {
											return b() === !1
												? m.$ak.thumbsDownFilled
												: m.$ak.thumbsdown;
										},
									}),
									null,
								),
								P
							);
						})();
					return (() => {
						const P = c(),
							k = P.firstChild,
							L = k.firstChild;
						return (
							P.style.setProperty("display", "flex"),
							P.style.setProperty("flex-direction", "row"),
							P.style.setProperty("justify-content", "flex-end"),
							P.style.setProperty("overflow", "visible"),
							P.style.setProperty("align-self", "flex-end"),
							P.style.setProperty("flex-shrink", "0"),
							k.style.setProperty("display", "flex"),
							k.style.setProperty("flex-direction", "row"),
							k.style.setProperty("width", "fit-content"),
							k.style.setProperty("height", "fit-content"),
							k.style.setProperty("gap", "2px"),
							k.style.setProperty("opacity", "0.4"),
							(0, w.insert)(
								k,
								(0, E.createComponent)(C.Show, {
									get when() {
										return (
											g.shouldShowOpenInComposer &&
											p.reactiveStorageService.applicationUserPersistentStorage
												.composerState.isComposerEnabled2
										);
									},
									get children() {
										const D = h();
										return (
											(0, i.addEventListener)(D, "mouseleave", f),
											D.addEventListener("mouseenter", (M) => {
												o(M, "Open in Composer");
											}),
											D.style.setProperty("opacity", "1"),
											(0, w.insert)(
												D,
												(0, E.createComponent)(d.$rdc, {
													style: {
														padding: "4px 4px",
														display: "flex",
														"justify-content": "center",
														"align-items": "center",
													},
													codiconStyle: {
														"font-size": "14px",
														color: "var(--vscode-editor-foreground)",
													},
													type: "secondary",
													get codicon() {
														return m.$ak.symbolMethod;
													},
													onClick: (M) => {
														M?.stopImmediatePropagation(), g.onOpenInComposer();
													},
												}),
											),
											D
										);
									},
								}),
								L,
							),
							(0, i.addEventListener)(L, "mouseleave", f),
							L.addEventListener("mouseenter", (D) => {
								o(D, "Copy Message");
							}),
							L.style.setProperty("opacity", "1"),
							(0, w.insert)(
								L,
								(0, E.createComponent)(d.$rdc, {
									style: {
										padding: "4px 4px",
										display: "flex",
										"justify-content": "center",
										"align-items": "center",
									},
									codiconStyle: { "font-size": "14px" },
									type: "secondary",
									onClick: I,
									get disabled() {
										return $();
									},
									get codicon() {
										return $() ? m.$ak.check : m.$ak.copy;
									},
								}),
							),
							P
						);
					})();
				}
			},
		),
		define(
			de[242],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 36, 14, 285, 1107, 894, 147, 58, 191]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$C$b = void 0),
					(e.$D$b = k),
					(e.$E$b = L),
					(e.$F$b = D);
				const f = (0, t.template)("<span>"),
					b = (0, t.template)(
						'<div><span>Consider <span>enabling Composer Turbo Mode</span> for lower wait times and faster edits.</span><a href="#"><span>Dismiss',
					),
					s = (0, t.template)("<span>Update Fast Requests:"),
					l = (0, t.template)('<div class="request-adjuster"><span>'),
					y = (0, t.template)("<div>"),
					$ = (0, t.template)("<span>Loading..."),
					v = (0, t.template)('<span class="success-message">'),
					S = (0, t.template)('<span class="price-info">'),
					I = (0, t.template)(
						"<span>Error, please add requests <span>here</span>.",
					),
					T = (0, t.template)("<div>Error, add requests <span>here</span>."),
					P = (M) => {
						const [N, A] = (0, r.createSignal)(1),
							R = (0, u.$pdc)();
						return (
							(0, r.createEffect)(() => {
								if (M.show === !1) return;
								A(1);
								const O = R.window.setInterval(
									() => {
										A((B) => (B === 3 ? 0 : B + 1));
									},
									M.speed === "slow" ? 350 : 175,
								);
								(0, r.onCleanup)(() => {
									R.window.clearInterval(O);
								});
							}),
							(() => {
								const O = f();
								return (
									(0, C.insert)(
										O,
										(0, d.createComponent)(r.Show, {
											get when() {
												return M.show !== !1;
											},
											get fallback() {
												return "\xA0";
											},
											get children() {
												return [
													(0, m.memo)(() => ".".repeat(N())),
													(0, d.createComponent)(r.Show, {
														get when() {
															return N() === 0;
														},
														children: "\xA0",
													}),
												];
											},
										}),
									),
									(0, E.effect)((B) =>
										(0, w.style)(O, { "user-select": "text", ...M.style }, B),
									),
									O
								);
							})()
						);
					};
				e.$C$b = P;
				function k() {
					const M = (0, u.$odc)(),
						[N, A] = (0, r.createSignal)(!1);
					return (0, d.createComponent)(r.Show, {
						get when() {
							return !N();
						},
						get children() {
							const R = b(),
								O = R.firstChild,
								B = O.firstChild,
								U = B.nextSibling,
								z = O.nextSibling,
								F = z.firstChild;
							return (
								R.style.setProperty("display", "flex"),
								R.style.setProperty("justify-content", "space-between"),
								R.style.setProperty("align-items", "center"),
								R.style.setProperty("gap", "16px"),
								R.style.setProperty("padding-bottom", "10px"),
								U.addEventListener("click", () => {
									M.commandService.executeCommand(p.$ZW);
								}),
								U.style.setProperty("display", "inline"),
								U.style.setProperty(
									"color",
									"var(--vscode-textLink-foreground)",
								),
								U.style.setProperty("cursor", "pointer"),
								z.addEventListener("click", (x) => {
									x.preventDefault(), A(!0);
								}),
								z.style.setProperty("font-size", "0.75rem"),
								z.style.setProperty(
									"color",
									"var(--vscode-textLink-foreground)",
								),
								z.style.setProperty("text-decoration", "none"),
								z.style.setProperty("display", "flex"),
								z.style.setProperty("align-items", "center"),
								z.style.setProperty("flex-shrink", "0"),
								z.style.setProperty("cursor", "pointer"),
								F.style.setProperty("font-size", "0.75rem"),
								F.style.setProperty("flex-shrink", "0"),
								R
							);
						},
					});
				}
				function L(M) {
					const N = (0, u.$odc)(),
						[A, R] = (0, r.createSignal)(500),
						[O, B] = (0, r.createSignal)("idle"),
						[U, z] = (0, r.createSignal)(500);
					let F;
					(0, r.onMount)(async () => {
						try {
							const H = N.instantiationService.createInstance(h.$q6b, {
								service: c.$X$,
							});
							H.createServer(), (F = await H.get());
							const q = await F.getFastRequests(new n.$N0({}));
							z(q.requestQuota);
						} catch (H) {
							console.error("Error in UpsellFastRequests onMount:", H),
								B("error");
						}
					}),
						(0, r.createEffect)(() => {
							R(U());
						});
					const x = async () => {
						if ((B("loading"), F !== void 0))
							try {
								await F.updateFastRequests(new n.$L0({ requestQuota: A() })),
									B("done"),
									z(A()),
									setTimeout(() => {
										M.setIsUpsellFastRequestsShowing(!1);
									}, 2e3);
							} catch (H) {
								console.error("Error in handleUpgrade:", H), B("error");
							}
					};
					return (() => {
						const H = y();
						return (
							H.style.setProperty("display", "flex"),
							H.style.setProperty("justify-content", "space-between"),
							H.style.setProperty("align-items", "center"),
							H.style.setProperty("gap", "16px"),
							(0, C.insert)(
								H,
								(0, d.createComponent)(r.Show, {
									get when() {
										return O() !== "error";
									},
									get fallback() {
										return (0, d.createComponent)(r.Show, {
											get when() {
												return !M.conciseMessage;
											},
											get fallback() {
												return (() => {
													const q = T(),
														V = q.firstChild,
														G = V.nextSibling;
													return (
														q.style.setProperty(
															"color",
															"var(--vscode-editorError-foreground)",
														),
														(0, i.addEventListener)(
															G,
															"click",
															N.cursorAuthenticationService.settings,
														),
														G.style.setProperty("display", "inline"),
														G.style.setProperty(
															"color",
															"var(--vscode-textLink-foreground)",
														),
														G.style.setProperty("cursor", "pointer"),
														q
													);
												})();
											},
											get children() {
												const q = I(),
													V = q.firstChild,
													G = V.nextSibling;
												return (
													q.style.setProperty(
														"color",
														"var(--vscode-editorError-foreground)",
													),
													(0, i.addEventListener)(
														G,
														"click",
														N.cursorAuthenticationService.settings,
													),
													G.style.setProperty("display", "inline"),
													G.style.setProperty(
														"color",
														"var(--vscode-textLink-foreground)",
													),
													G.style.setProperty("cursor", "pointer"),
													q
												);
											},
										});
									},
									get children() {
										return [
											(() => {
												const q = l(),
													V = q.firstChild;
												return (
													q.style.setProperty("display", "flex"),
													q.style.setProperty("align-items", "center"),
													q.style.setProperty("gap", "8px"),
													(0, C.insert)(
														q,
														(0, d.createComponent)(r.Show, {
															get when() {
																return !M.conciseMessage;
															},
															get fallback() {
																return "\xA0";
															},
															get children() {
																return s();
															},
														}),
														V,
													),
													(0, C.insert)(
														q,
														(0, d.createComponent)(g.$rdc, {
															onClick: () => R((G) => Math.max(500, G - 500)),
															get disabled() {
																return A() <= 500;
															},
															get style() {
																return {
																	"background-color":
																		"var(--vscode-editor-background)",
																	color: "var(--vscode-editor-foreground)",
																	border: "none",
																	cursor: A() <= 500 ? "default" : "pointer",
																	opacity: A() <= 500 ? "0.5" : "1",
																	width: "16px",
																	height: "16px",
																	display: "flex",
																	"align-items": "center",
																	"justify-content": "center",
																	"font-size": "12px",
																	"box-sizing": "border-box",
																};
															},
															get codicon() {
																return a.$ak.dash;
															},
															codiconStyle: {
																color: "var(--vscode-editor-foreground)",
															},
														}),
														V,
													),
													(0, C.insert)(V, A),
													(0, C.insert)(
														q,
														(0, d.createComponent)(g.$rdc, {
															onClick: () => R((G) => Math.min(5e3, G + 500)),
															get disabled() {
																return A() >= 5e3;
															},
															get style() {
																return {
																	"background-color":
																		"var(--vscode-editor-background)",
																	color: "var(--vscode-editor-foreground)",
																	border: "none",
																	cursor: A() >= 5e3 ? "default" : "pointer",
																	opacity: A() >= 5e3 ? "0.5" : "1",
																	width: "16px",
																	height: "16px",
																	display: "flex",
																	"align-items": "center",
																	"justify-content": "center",
																	"font-size": "12px",
																	"box-sizing": "border-box",
																};
															},
															get codicon() {
																return a.$ak.plus;
															},
															codiconStyle: {
																color: "var(--vscode-editor-foreground)",
															},
														}),
														null,
													),
													q
												);
											})(),
											(0, d.createComponent)(r.Show, {
												get when() {
													return !M.conciseMessage;
												},
												get children() {
													const q = y();
													return q.style.setProperty("flex", "1"), q;
												},
											}),
											(0, d.createComponent)(r.Switch, {
												get children() {
													return [
														(0, d.createComponent)(r.Match, {
															get when() {
																return O() === "loading";
															},
															get children() {
																return $();
															},
														}),
														(0, d.createComponent)(r.Match, {
															get when() {
																return O() === "done";
															},
															get children() {
																const q = v();
																return (
																	(0, C.insert)(
																		q,
																		(0, d.createComponent)(r.Show, {
																			get when() {
																				return !M.conciseMessage;
																			},
																			get fallback() {
																				return "Updated successfully!";
																			},
																			get children() {
																				return [
																					"Updated successfully! You now have ",
																					(0, m.memo)(() => A()),
																					" fast requests.",
																				];
																			},
																		}),
																	),
																	q
																);
															},
														}),
														(0, d.createComponent)(r.Match, {
															get when() {
																return O() === "idle";
															},
															get children() {
																const q = S();
																return (
																	(0, C.insert)(
																		q,
																		(0, d.createComponent)(g.$rdc, {
																			type: "primary",
																			onClick: x,
																			get style() {
																				return {
																					"font-size": "12px",
																					padding: "2px 4px",
																					cursor:
																						A() === U() ? "default" : "pointer",
																					opacity:
																						A() === U() || M.conciseMessage
																							? "0.5"
																							: "1",
																				};
																			},
																			get disabled() {
																				return A() === U();
																			},
																			get children() {
																				return [
																					(0, m.memo)(() =>
																						(0, m.memo)(() => A() > U())()
																							? "+"
																							: A() < U()
																								? "-"
																								: "",
																					),
																					"$",
																					(0, m.memo)(
																						() =>
																							(Math.abs(A() - U()) / 500) * 20,
																					),
																					(0, d.createComponent)(r.Show, {
																						get when() {
																							return !M.conciseMessage;
																						},
																						get fallback() {
																							return "/mo";
																						},
																						children: "/mo Confirm",
																					}),
																				];
																			},
																		}),
																	),
																	q
																);
															},
														}),
													];
												},
											}),
											(0, d.createComponent)(r.Show, {
												get when() {
													return M.conciseMessage;
												},
												get children() {
													const q = y();
													return q.style.setProperty("flex", "1"), q;
												},
											}),
										];
									},
								}),
							),
							H
						);
					})();
				}
				function D() {
					const M = (0, u.$odc)(),
						N = (B) => {
							if (B && (0, o.$n6b)(B.scheme)) return B;
						},
						[A, R] = (0, r.createSignal)(
							N(M.aiService.getLastActiveFileEditor()?.input?.resource),
						),
						O = M.editorService.onDidActiveEditorChange(() => {
							R(N(M.aiService.getLastActiveFileEditor()?.input?.resource));
						});
					return (
						(0, r.onCleanup)(() => {
							O.dispose();
						}),
						A
					);
				}
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[4232],
		he([
			1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 13, 14, 26, 364, 428, 484, 1372, 36, 156,
			1373, 1708, 126, 196, 41, 74, 311, 160, 135, 177, 693, 246, 242, 19, 694,
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
			$,
			v,
			S,
			I,
			T,
			P,
			k,
			L,
			D,
			M,
			N,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$H$b = void 0),
				(p = xi(p));
			const A = (0, t.template)("<div><div></div>Ask"),
				R = (0, t.template)("<div><div>"),
				O = (0, t.template)("<div><div></div>Run"),
				B = (0, t.template)(
					'<div class="composer-markdown-codeblock-header"><div>',
				),
				U = (0, t.template)("<div>"),
				z = (0, t.template)("<span>"),
				F = (0, t.template)("<span><span>"),
				x = 12;
			function H(G) {
				if (G === void 0) return "property";
				switch (G) {
					case v.SymbolKind.Method:
						return "method";
					case v.SymbolKind.Function:
						return "function";
					case v.SymbolKind.Constructor:
						return "constructor";
					case v.SymbolKind.Field:
						return "field";
					case v.SymbolKind.Variable:
						return "variable";
					case v.SymbolKind.Class:
						return "class";
					case v.SymbolKind.Struct:
						return "struct";
					case v.SymbolKind.Interface:
						return "interface";
					case v.SymbolKind.Module:
						return "module";
					case v.SymbolKind.Property:
						return "property";
					case v.SymbolKind.Event:
						return "event";
					case v.SymbolKind.Operator:
						return "operator";
					case v.SymbolKind.Constant:
						return "constant";
					case v.SymbolKind.Enum:
						return "enum";
					case v.SymbolKind.EnumMember:
						return "enum-member";
					case v.SymbolKind.File:
						return "file";
					default:
						return "property";
				}
			}
			function q(G, K, J) {
				const W = /```[\w-]*(?::[\w\/.]+)?\n[\s\S]*?```/g;
				let X = 0,
					Y = G;
				const ie = (ne) => {
					if (X === K) {
						const [ee, ..._] = ne.split(`
`),
							te = ee.slice(3).trim(),
							Q = te ? `\`\`\`${te}:${J}` : `\`\`\`${J}`;
						return (
							X++,
							[Q, ..._].join(`
`)
						);
					} else return X++, ne;
				};
				return (Y = Y.replace(W, ie)), Y;
			}
			const V = (G) => {
				const K = (0, o.$odc)(),
					{ composerDataService: J, composerService: W } = K,
					[X, Y] = (0, u.createSignal)(!0),
					[ie, ne, ee] = (0, c.$A0b)(),
					[_, te] = (0, u.createSignal)(!1),
					Q = (0, u.createMemo)(() => G.bubbleId),
					{ currentComposer: Z, composerDataHandle: se } = (0,
					P.useComposerDataHandle)(
						(0, u.createMemo)(() => G.composerDataHandler()),
					),
					re = (0, u.createMemo)(() => Z().composerId),
					le = (0, u.createMemo)(() => {
						const Re = Q(),
							Ve = J.getComposerBubble(re(), Re)?.codeBlocks?.find(
								(Ze) => Ze.codeBlockIdx === G.codeBlockIdx,
							);
						if (!(!Ve || !Ve.uri))
							return J.getComposerCodeBlock(se(), Ve.uri, Ve.version);
					}),
					oe = async (Re, je) =>
						!G.slashEditFileUri && !le()
							? []
							: K.applyToFileActionsService.getImportantSymbolsDefinedInCodeblockThatExistInURICanThrowIfExtHostIsNotReady(
									le()?.uri ?? G.slashEditFileUri,
									Re.getValue(),
								),
					[ae, pe] = (0, b.$r$b)({
						getModel: G.getModelOfCodeBlock,
						initialValue: [],
						updateFunc: oe,
						debounceTime: 1e3,
					}),
					$e = (0, u.createMemo)(() => J.getComposerData(re())),
					[ye, ue] = (0, u.createSignal)(!1);
				(0, u.createEffect)(() => {
					G.slashEditFileUri &&
						K.fileService.exists(G.slashEditFileUri).then((Re) => {
							ue(!Re);
						});
				});
				const fe = (0, D.$F$b)(),
					me = (0, u.createMemo)(() => {
						const Re = fe();
						if (!Re) {
							const je =
								K.recentFilesTrackerService.getRecentlyViewedFiles(1)[0];
							if (je) return je.uri;
						}
						return Re;
					}),
					ve = (0, u.createMemo)(() => {
						const Re = le(),
							je = [];
						if (Re || G.slashEditFileUri) {
							const et = Re?.uri ?? G.slashEditFileUri;
							if (et)
								if (ye()) {
									je.push({ uri: et });
									const rt = me();
									return rt && je.push({ uri: rt }), je;
								} else {
									je.push({ uri: et });
									const rt = ae();
									return (
										rt.length > 0 &&
											je.push(...rt.map((ft) => ({ uri: et, symbol: ft }))),
										je
									);
								}
						} else {
							const et = me();
							et && je.push({ uri: et });
						}
						const Ve = new Set();
						return je.filter((et) => {
							const rt = et.uri.toString();
							return Ve.has(rt) ? !1 : (Ve.add(rt), !0);
						});
					}),
					ge = (0, u.createMemo)(() => {
						const Re = re(),
							je = G.bubbleId,
							Ve = le(),
							Ze = G.codeBlockIdx,
							et = G.languageId,
							rt = G.resetCodeBlockIndex,
							ft = G.getEditorOfCodeBlock,
							bt = G.slashEditFileUri;
						return (nt) => {
							(async () => {
								const lt = nt.uri;
								if (nt.range) {
									if (!ye() || lt.toString() !== bt?.toString()) {
										const Rt = (0, $.$8rb)(lt, {
											startLineNumber: nt.range.startLineNumber || 1,
											startColumn: nt.range.startColumn || 1,
											endLineNumber: nt.range.endLineNumber || 1,
											endColumn: nt.range.endColumn || 1,
										});
										K.openerService?.open(Rt);
									}
								} else {
									const Rt = K.editorService.findEditors(lt);
									if (Rt.length > 0) {
										const Nt = K.editorGroupService.getGroup(Rt[0].groupId);
										K.editorService.openEditor(Rt[0].editor, Nt);
									} else await K.openerService?.open(lt);
								}
								if (Ve) {
									let Rt;
									nt.range &&
										(Rt = new y.$rL(
											nt.range.startLineNumber,
											nt.range.endLineNumber + 1,
										)),
										W.applyCachedCodeBlock(Re, lt, Ve.version, { range: Rt });
									return;
								}
								const ct = W.registerNewCodeBlock(
									Re,
									lt,
									ft().getModel().getValue(),
									Ze,
									{ languageId: et, bubbleId: je },
								);
								W.runFastApplyOnCodeBlock(Re, ct);
								const gt = K.workspaceContextService.asRelativePath(lt);
								await new Promise((Rt) => setTimeout(Rt, 100));
								let ht =
									$e().conversation.find((Rt) => Rt.bubbleId === je)?.text ??
									"";
								bt && lt.toString() !== bt.toString()
									? (ht = (0, L.replaceUriInCodeBlock)(ht, Ze, gt))
									: bt
										? J.updateComposerDataSetStore(Re, (Rt) =>
												Rt(
													"conversation",
													(Nt) => Nt.bubbleId === je,
													"text",
													ht + " ",
												),
											)
										: (ht = q(ht, Ze, gt)),
									J.updateComposerDataSetStore(Re, (Rt) =>
										Rt("conversation", (Nt) => Nt.bubbleId === je, "text", ht),
									);
								for (
									let Rt =
										$e().conversation.findIndex((Nt) => Nt.bubbleId === je) + 1;
									Rt < $e().conversation.length;
									Rt++
								)
									if (
										$e().conversation[Rt].type ===
										l.ConversationMessage_MessageType.AI
									) {
										const Nt = $e().conversation[Rt].text;
										J.updateComposerDataSetStore(Re, (jt) =>
											jt(
												"conversation",
												(ti, kt) => kt === Rt,
												"text",
												(ti) => ti + " ",
											),
										),
											J.updateComposerDataSetStore(Re, (jt) =>
												jt("conversation", (ti, kt) => kt === Rt, "text", Nt),
											);
									}
							})();
						};
					}),
					be = (0, u.createMemo)(() => {
						const Re = $e().conversation.length - 1,
							je =
								$e().status === "generating" &&
								$e().conversation[Re].bubbleId === Q(),
							Ve = ve().length > 0;
						return je || !Ve || G.disableApply;
					}),
					Ce = () => {
						const Re = G.getModelOfCodeBlock().getValue();
						K.clipboardService.writeText(Re),
							Y(!1),
							setTimeout(() => Y(!0), 2e3);
					},
					Le = {
						display: "flex",
						"align-items": "center",
						"justify-content": "center",
						gap: "2px",
						padding: "1px 4px",
						"line-height": "125%",
						background: "var(--vscode-editor-background)",
						color: "var(--vscode-input-placeholderForeground)",
						border: "1px solid var(--vscode-commandCenter-inactiveBorder)",
						"border-radius": "2px",
						"font-size": "11px",
						cursor: "pointer",
						"white-space": "nowrap",
						transition: "background-color 0.2s",
						"font-weight": "400",
						position: "relative",
						"user-select": "none",
					},
					Fe = {
						"font-size": "11px",
						color: "var(--vscode-input-placeholderForeground)",
					},
					Oe = async () => {
						try {
							const je = G.getModelOfCodeBlock().getValue();
							await (0, s.$o$b)(K, je, G.cwd, G.commandLanguage);
						} catch {}
					},
					xe = (Re) => {
						if (!Re) return;
						const je = Re.closest(".markdown-section"),
							Ve = je?.getAttribute("data-markdown-raw"),
							Ze = parseInt(je?.getAttribute("data-section-index") ?? "");
						!Ve ||
							isNaN(Ze) ||
							(K.composerService.addContextToLastFocused({
								composerId: re(),
								contextType: "quotes",
								value: { bubbleId: Q(), sectionIndex: Ze, markdown: Ve },
							}),
							K.composerService.focus(re()));
					},
					{ showHover: He, hideHover: Ke } = (0, S.useComposerHoverTooltip)({
						delay: 500,
						position: I.HoverPosition.LEFT,
					}),
					[Je, Te] = (0, u.createSignal)(null),
					[Ee, Ie] = (0, u.createSignal)(0);
				(0, u.createEffect)(() => {
					const Re = ve();
					Ie(Je()?.clientHeight ?? 0);
				});
				const Be = (0, n.$b$b)(),
					Se = (0, u.createMemo)(() => {
						const Re = ve();
						return Re.length === 1 ? Re[0] : null;
					}),
					{ showHover: ke, hideHover: Ue } = (0, N.$G$b)(),
					qe = (0, u.createMemo)(() => {
						const Re = Se();
						if (Re) {
							const je = (0, M.$kh)(Re.uri);
							return je.length > x
								? `Apply to ${je.slice(0, x)}...`
								: `Apply to ${je}`;
						}
						return "Apply";
					}),
					Ae = async (Re) => {
						Re.stopPropagation();
						const je = Se();
						if (je) {
							ge()(je);
							return;
						}
						const Ve = Re.currentTarget.getBoundingClientRect();
						ne({ x: Ve.width, y: Ve.height + 2 });
					};
				let Me;
				const De = (0, k.$A$b)(() => Me);
				return (() => {
					const Re = B(),
						je = Re.firstChild;
					Re.addEventListener("mouseleave", () => te(!1)),
						Re.addEventListener("mouseenter", () => te(!0));
					const Ve = Me;
					return (
						typeof Ve == "function" ? (0, r.use)(Ve, Re) : (Me = Re),
						Re.style.setProperty("position", "relative"),
						Re.style.setProperty("width", "100%"),
						je.style.setProperty("position", "absolute"),
						je.style.setProperty("transform", "translateY(calc(-50%))"),
						je.style.setProperty("top", "0"),
						je.style.setProperty("right", "4px"),
						je.style.setProperty("z-index", "303"),
						je.style.setProperty("display", "flex"),
						je.style.setProperty("justify-content", "right"),
						je.style.setProperty("flex-direction", "row"),
						je.style.setProperty("gap", "4px"),
						(0, w.insert)(
							je,
							(0, E.createComponent)(u.Show, {
								get when() {
									return De().width > 300;
								},
								get children() {
									const Ze = A(),
										et = Ze.firstChild;
									return (
										Ze.addEventListener("click", (rt) => xe(rt.currentTarget)),
										(0, m.style)(Ze, Le),
										(0, m.style)(et, Fe),
										(0, d.effect)(() =>
											(0, C.className)(
												et,
												h.ThemeIcon.asClassName(a.$ak.reply),
											),
										),
										Ze
									);
								},
							}),
							null,
						),
						(0, w.insert)(
							je,
							(0, E.createComponent)(u.Show, {
								get when() {
									return De().width > 200;
								},
								get children() {
									const Ze = R(),
										et = Ze.firstChild;
									return (
										Ze.addEventListener("click", Ce),
										(0, m.style)(Ze, Le),
										(0, m.style)(et, Fe),
										(0, w.insert)(Ze, () => (X() ? "Copy" : "Copied"), null),
										(0, d.effect)(() =>
											(0, C.className)(
												et,
												X()
													? h.ThemeIcon.asClassName(a.$ak.copy)
													: h.ThemeIcon.asClassName(a.$ak.check),
											),
										),
										Ze
									);
								},
							}),
							null,
						),
						(0, w.insert)(
							je,
							(0, E.createComponent)(u.Show, {
								get when() {
									return !be();
								},
								get children() {
									return (0, E.createComponent)(u.Show, {
										get when() {
											return !Se();
										},
										get fallback() {
											return (() => {
												const Ze = R(),
													et = Ze.firstChild;
												return (
													(0, i.addEventListener)(Ze, "mouseleave", Ue),
													Ze.addEventListener("mouseenter", (rt) => {
														const ft = Se();
														ft &&
															(0, M.$kh)(ft.uri).length > x &&
															ke(rt, (0, M.$kh)(ft.uri));
													}),
													Ze.addEventListener("click", Ae),
													(0, m.style)(Ze, Le),
													(0, m.style)(et, Fe),
													(0, w.insert)(Ze, qe, null),
													(0, d.effect)(() =>
														(0, C.className)(
															et,
															h.ThemeIcon.asClassName(a.$ak.listFilter),
														),
													),
													Ze
												);
											})();
										},
										get children() {
											const Ze = R(),
												et = Ze.firstChild;
											return (
												Ze.addEventListener("click", Ae),
												(0, m.style)(Ze, Le),
												(0, m.style)(et, Fe),
												(0, w.insert)(Ze, qe, null),
												(0, w.insert)(
													Ze,
													(0, E.createComponent)(u.Show, {
														get when() {
															return ie();
														},
														children: (rt) =>
															(0, E.createComponent)(g.Menu, {
																isRelative: !0,
																width: "auto",
																get position() {
																	return rt();
																},
																close: ee,
																get reactiveCloser() {
																	return K.reactiveStorageService
																		.nonPersistentStorage
																		.forceChatDropdownRerender;
																},
																anchor: "top-right",
																style: {
																	"background-color":
																		"var(--vscode-editor-background)",
																	border:
																		"1px solid var(--vscode-commandCenter-inactiveBorder)",
																	"border-radius": "2px",
																	overflow: "hidden",
																	"z-index": 1e3,
																	"max-width": "240px",
																	"font-size": "11px",
																	padding: "0px",
																},
																get children() {
																	return (0, E.createComponent)(T.$w0b, {
																		get style() {
																			return {
																				height: Math.min(120, Ee()) + "px",
																			};
																		},
																		contentStyle: {
																			display: "flex",
																			"flex-direction": "column",
																		},
																		innerContainerStyle: {
																			"min-height": "unset",
																		},
																		scrollingDirection: "vertical",
																		nonReactiveElementOptions: {
																			alwaysConsumeMouseWheel: !0,
																		},
																		get children() {
																			const ft = U();
																			return (
																				(0, r.use)(Te, ft),
																				ft.style.setProperty("display", "flex"),
																				ft.style.setProperty(
																					"flex-direction",
																					"column",
																				),
																				ft.style.setProperty("gap", "2px"),
																				ft.style.setProperty("padding", "2px"),
																				ft.style.setProperty(
																					"box-sizing",
																					"border-box",
																				),
																				(0, w.insert)(
																					ft,
																					(0, E.createComponent)(u.For, {
																						get each() {
																							return ve();
																						},
																						children: (bt) => {
																							const nt = (0, u.createMemo)(() =>
																									K.workspaceContextService.asRelativePath(
																										bt.uri,
																									),
																								),
																								lt = bt.symbol
																									? ` (${bt.symbol.name})`
																									: "";
																							return (0, E.createComponent)(
																								p.default,
																								{
																									style: {
																										"text-overflow": "ellipsis",
																										"white-space": "nowrap",
																										overflow: "hidden",
																										padding: "2px 0px",
																										"padding-left": "1px",
																										"padding-right": "3px",
																										"border-radius": "2px",
																										cursor: "pointer",
																										display: "flex",
																										"align-items": "center",
																										gap: "4px",
																									},
																									onClick: () => {
																										ge()({
																											uri: bt.uri,
																											range: bt.symbol?.range,
																										}),
																											ee();
																									},
																									onMouseEnter: (ct) =>
																										He(
																											ct,
																											nt() +
																												(bt.symbol
																													? ` (${bt.symbol.name})`
																													: ""),
																										),
																									onMouseLeave: Ke,
																									get children() {
																										return [
																											(0, E.createComponent)(
																												u.Show,
																												{
																													get when() {
																														return Be();
																													},
																													get children() {
																														const ct = z();
																														return (
																															ct.style.setProperty(
																																"margin-right",
																																"-4px",
																															),
																															ct.style.setProperty(
																																"scale",
																																"0.8",
																															),
																															ct.style.setProperty(
																																"height",
																																"14px",
																															),
																															ct.style.setProperty(
																																"display",
																																"flex",
																															),
																															ct.style.setProperty(
																																"align-items",
																																"center",
																															),
																															(0, w.insert)(
																																ct,
																																(0,
																																E.createComponent)(
																																	u.Show,
																																	{
																																		get when() {
																																			return bt.symbol;
																																		},
																																		get fallback() {
																																			return (0,
																																			E.createComponent)(
																																				f.$k$b,
																																				{
																																					get fileName() {
																																						return nt();
																																					},
																																					get workspaceContextService() {
																																						return K.workspaceContextService;
																																					},
																																					get modelService() {
																																						return K.modelService;
																																					},
																																					get languageService() {
																																						return K.languageService;
																																					},
																																				},
																																			);
																																		},
																																		get children() {
																																			const gt =
																																				U();
																																			return (
																																				gt.style.setProperty(
																																					"font-size",
																																					"14px",
																																				),
																																				gt.style.setProperty(
																																					"margin-left",
																																					"2px",
																																				),
																																				gt.style.setProperty(
																																					"margin-right",
																																					"4px",
																																				),
																																				(0,
																																				d.effect)(
																																					() =>
																																						(0,
																																						C.className)(
																																							gt,
																																							`codicon codicon-symbol-${H(bt.symbol?.kind)}`,
																																						),
																																				),
																																				gt
																																			);
																																		},
																																	},
																																),
																															),
																															ct
																														);
																													},
																												},
																											),
																											(() => {
																												const ct = F(),
																													gt = ct.firstChild;
																												return (
																													ct.style.setProperty(
																														"text-overflow",
																														"ellipsis",
																													),
																													ct.style.setProperty(
																														"overflow",
																														"hidden",
																													),
																													ct.style.setProperty(
																														"white-space",
																														"nowrap",
																													),
																													ct.style.setProperty(
																														"direction",
																														"rtl",
																													),
																													gt.style.setProperty(
																														"direction",
																														"ltr",
																													),
																													gt.style.setProperty(
																														"unicode-bidi",
																														"embed",
																													),
																													(0, w.insert)(
																														gt,
																														() => nt() + lt,
																													),
																													ct
																												);
																											})(),
																										];
																									},
																								},
																							);
																						},
																					}),
																				),
																				ft
																			);
																		},
																	});
																},
															}),
													}),
													null,
												),
												(0, d.effect)(() =>
													(0, C.className)(
														et,
														h.ThemeIcon.asClassName(a.$ak.listFilter),
													),
												),
												Ze
											);
										},
									});
								},
							}),
							null,
						),
						(0, w.insert)(
							je,
							(0, E.createComponent)(u.Show, {
								get when() {
									return G.isCommand;
								},
								get children() {
									const Ze = O(),
										et = Ze.firstChild;
									return (
										Ze.addEventListener("click", Oe),
										(0, m.style)(Ze, Le),
										(0, m.style)(et, Fe),
										(0, d.effect)(() =>
											(0, C.className)(et, h.ThemeIcon.asClassName(a.$ak.play)),
										),
										Ze
									);
								},
							}),
							null,
						),
						(0, d.effect)(
							(Ze) => {
								const et = G.hasCustomRenderCodeBlock
										? "1px solid var(--vscode-commandCenter-inactiveBorder)"
										: "none",
									rt =
										_() || G.isMouseInCodeBlock() || ie()
											? "visible"
											: "hidden";
								return (
									et !== Ze._v$ &&
										((Ze._v$ = et) != null
											? Re.style.setProperty("border-top", et)
											: Re.style.removeProperty("border-top")),
									rt !== Ze._v$2 &&
										((Ze._v$2 = rt) != null
											? je.style.setProperty("visibility", rt)
											: je.style.removeProperty("visibility")),
									Ze
								);
							},
							{ _v$: void 0, _v$2: void 0 },
						),
						Re
					);
				})();
			};
			e.$H$b = V;
		},
	),
		define(
			de[4233],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 33, 322, 59, 9, 116, 41, 4232, 1709, 236,
				1373, 225, 36, 1934, 312, 4147, 169,
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
				$,
				v,
				S,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$L$b = void 0);
				const I = (0, t.template)("<div>"),
					T = (0, t.template)('<div class="markdown-code-outer-container">'),
					P = (0, t.template)("<div><button>Run as cell"),
					k = (0, t.template)('<div class="markdown-code-block-header">'),
					L = !S.ENABLED_BETTER_MARKDOWN_PARSING;
				function D() {
					let O = "abcdefghijklmnopqrstuvwxyz",
						B = "";
					for (let U = 0; U < 10; U++)
						B += O.charAt(Math.floor(Math.random() * O.length));
					return B;
				}
				const N = !1 ? console.log : () => {},
					A = {
						elementType: f.MarkdownElementType.BLOCK_CODE,
						start: (O, B, U, z) => {
							const F = O[O.length - 1];
							if (
								F.type === f.MarkdownElementType.INLINE_CODE ||
								F.type === f.MarkdownElementType.BLOCK_CODE ||
								F.type === f.MarkdownElementType.BLOCK_LATEX ||
								F.type === f.MarkdownElementType.BASH_RESPONSE ||
								F.type === f.MarkdownElementType.ROOT
							)
								return { state: "failed" };
							const H = /^[\t ]*```+[^\n]*\n/.exec(B);
							if (H && z.currentNestLevel === 0)
								return (
									N("[ian] start", JSON.stringify(H[0]), z.currentNestLevel),
									{
										state: "success",
										length: H[0].length,
										elementType: f.MarkdownElementType.BLOCK_CODE,
										startOrEnd: "start",
									}
								);
							const V = /^[\t ]*`*/.exec(B);
							if (V && V[0].length === B.length) return { state: "possible" };
							const K = /^[\t ]*```+[^\n]*/.exec(B);
							return K && K[0].length === B.length
								? { state: "possible" }
								: { state: "failed" };
						},
						end: (O, B, U) => {
							N("[ian] text", JSON.stringify(B));
							const z = O[O.length - 1];
							if (z.type !== f.MarkdownElementType.BLOCK_CODE)
								return { state: "failed" };
							const F = z.backtickCount ?? 3,
								H = new RegExp(
									U.markdownProps?.finished
										? `^\\n([\\t ]*)\`{${F}}\\s*(?:\\n|$)`
										: `^\\n([\\t ]*)\`{${F}}\\s*\\n`,
								).exec(B);
							if (H && U.currentNestLevel === 0) {
								const J = H[1].length;
								if (
									(N("[ian] end", JSON.stringify(H[0]), U.currentNestLevel),
									z.indentationLevel !== void 0 && J > z.indentationLevel)
								)
									return { state: "failed" };
								const W = H[0];
								let X = 0;
								for (
									let ie = W.length - 1;
									ie >= 0 &&
									W[ie] ===
										`
`;
									ie--
								)
									X++;
								return {
									state: "success",
									length: W.length - X,
									elementType: f.MarkdownElementType.BLOCK_CODE,
									startOrEnd: "end",
								};
							}
							const V = new RegExp(`^([\\t ]*)\`{${F}}\\S+`).exec(B);
							if (V)
								return (
									N(
										"[ian] " + ">".repeat((U.currentNestLevel ?? 0) + 1),
										JSON.stringify(V[0]),
										U.currentNestLevel,
									),
									{
										state: "intermediate",
										nestLevel: (U.currentNestLevel ?? 0) + 1,
									}
								);
							if (U.currentNestLevel !== void 0 && U.currentNestLevel > 0) {
								const W = new RegExp(
									U.markdownProps?.finished
										? `^\\n([\\t ]*)\`{${F}}\\s*(?:\\n|$)`
										: `^\\n([\\t ]*)\`{${F}}\\s*\\n`,
								).exec(B);
								if (W)
									return (
										N(
											"[ian] " + "<".repeat(U.currentNestLevel ?? 0),
											JSON.stringify(W[0]),
											U.currentNestLevel,
										),
										{
											state: "intermediate",
											nestLevel: (U.currentNestLevel ?? 0) - 1,
										}
									);
							}
							const K = /^(?:\n)?[\t ]*`*\s*/.exec(B);
							return K && K[0].length === B.length
								? (N("[ian] possible", JSON.stringify(K[0])),
									{ state: "possible" })
								: { state: "failed" };
						},
						createElement: (O, B, U, z, F) => {
							const x = F.codeBlockCount();
							F.setCodeBlockCount((xe) => xe + 1);
							let H = "",
								q = null,
								V = null,
								G = null,
								K = null,
								J = !1;
							if (B.includes(":")) {
								const xe = B.split(":");
								if (xe.length === 3)
									try {
										(V = parseInt(xe[0].split(/```+/)[1])),
											(G = parseInt(xe[1])),
											(K = xe[2].trim()),
											(J = !0),
											console.log("[balta] parts", V, G, K),
											K.includes(".") && (H = K.split(".").pop()?.trim() ?? "");
									} catch (He) {
										console.error(He);
									}
								else if (xe.length === 2) {
									const Ke = /```+([^:]*):/.exec(B);
									Ke && ((H = Ke[1].trim()), (q = xe[1].trim()));
								}
							} else {
								const xe = B.match(/```+([^\n]*)/)?.[1]?.trim();
								xe?.includes(".")
									? ((H = xe.split(".").pop()?.trim() ?? ""), (q = xe))
									: (H = xe?.trim() ?? "");
							}
							let W, X;
							B.trimStart().startsWith("```") &&
								((X = B.match(/^(\n|\n\n)?(```+)/)?.[2]?.length ?? void 0),
								(W = B.match(/^(\n|\n\n)?(.*)```+/m)?.[2]?.length ?? void 0));
							const Y = b.$w$b[H],
								ie =
									Y !== void 0 &&
									(q === null || q.trim().length === 0 || q.endsWith("/")),
								ne = ie ? (q ?? void 0) : void 0,
								ee = q
									? z.workspaceContextService.resolveRelativePath(q)
									: void 0,
								_ = ee
									? (F.codeBlockProps.getCodeBlockVersion?.(ee) ?? 0)
									: void 0,
								te = s.ComposerCapabilitiesCodeBlockAliases.find(
									(xe) => xe === H,
								);
							let Q = {
								version: _ ?? 0,
								codeBlockIdx: x,
								capabilityAlias: te,
								startLine: V ?? void 0,
								endLine: G ?? void 0,
								predictedUri: ee,
							};
							const Z =
									z.languageService.createByLanguageNameOrFilepathOrFirstLine(
										H,
										null,
										void 0,
									),
								se = (() => {
									const xe = I();
									return (
										xe.addEventListener("click", (He) => {
											if (V !== null && G !== null && K !== null) {
												const Ke = (0, g.$8rb)(
													z.workspaceContextService.resolveRelativePath(K),
													{
														startLineNumber: V,
														startColumn: 1,
														endLineNumber: V,
														endColumn: 1,
													},
												);
												z.openerService.open(Ke, {
													openToSide: !1,
													editorOptions: {
														revealIfVisible: !0,
														revealIfOpened: !0,
														source: n.EditorOpenSource.USER,
													},
													fromUserGesture: !0,
												});
											}
										}),
										(0, m.insert)(
											xe,
											J === !0 &&
												(() => {
													const He = I();
													return (
														He.style.setProperty("position", "absolute"),
														He.style.setProperty("top", "0px"),
														He.style.setProperty("right", "0px"),
														`calc(100% - ${$.$W0b + 4}px)` != null
															? He.style.setProperty(
																	"height",
																	`calc(100% - ${$.$W0b + 4}px)`,
																)
															: He.style.removeProperty("height"),
														He.style.setProperty("width", "100%"),
														He.style.setProperty("cursor", "pointer"),
														He.style.setProperty("z-index", "1"),
														He
													);
												})(),
										),
										(0, d.effect)((He) =>
											(0, C.style)(
												xe,
												{
													width: "100%",
													"box-sizing": "border-box",
													position: "relative",
													...(V !== null ? { cursor: "pointer" } : {}),
												},
												He,
											),
										),
										xe
									);
								})(),
								re = o.$I$b,
								[le] = (0, r.createResource)(
									async () =>
										await z.applyToFileActionsService.canApplyToFile(q ?? ""),
								),
								oe = q && !F.codeBlockProps.renderCodeBlock,
								ae = z.instantiationService.createInstance(
									$.$X0b,
									se,
									{
										...$.$X0b.getEditorOptions(z.configurationService),
										hover: { enabled: !0 },
										renderValidationDecorations: "on",
										fontSize: re,
									},
									{
										enableSemanticSyntaxHighlighting: !1,
										customContributions: oe ? [y.$K$b.ID] : [],
									},
								);
							ae && U.push(ae);
							let pe = c.URI.parse(`aichat-code-block-anysphere://${D()}`);
							const $e = z.modelService.createModel("", Z, pe, !1);
							if (
								($e && U.push($e),
								ae?.setModel($e),
								(0, r.createEffect)(() => {
									if (oe && (le() ?? !1) && F.chatExtras) {
										const xe = y.$K$b.get(ae);
										if (xe)
											try {
												xe.updateUri(ee),
													xe.updateSlashEditOptions({ ...F.chatExtras });
											} catch (He) {
												console.error(He);
											}
									}
								}),
								ee)
							) {
								const xe = F.codeBlockProps.onNewCodeBlock?.(ae, Q);
								xe && typeof xe == "object" && (Q = { ...Q, ...xe });
							}
							const ye = new ResizeObserver(() => {
								me(!0);
							});
							ye.observe(ae.getDomNode()),
								U.push({
									dispose: () => {
										ye.disconnect();
									},
								});
							const ue = ae?.onDidChangeModelContent(() => {
								me(!1);
							});
							ue && U.push(ue);
							let fe = 0;
							const me = (xe) => {
									if (!ae) return;
									const He = ae.getDomNode();
									if (!He) return;
									const Ke = re * 1.5,
										Je = ae.getModel()?.getLineCount() || 1,
										Te = ae.getTopForLineNumber(Je) + Ke + 10;
									(fe !== Te || xe) &&
										((fe = Te), (He.style.height = `${Te}px`), ae.layout());
								},
								ve = (0, f.$30b)(ae.getId()),
								[ge, be] = (0, r.createSignal)(!0);
							let Ce = (() => {
								const xe = T();
								return (
									xe.style.setProperty("display", "flex"),
									xe.style.setProperty("flex-direction", "column"),
									xe.style.setProperty("justify-content", "center"),
									xe.style.setProperty("align-items", "center"),
									xe.style.setProperty("position", "relative"),
									xe.style.setProperty(
										"border",
										"1px solid var(--vscode-commandCenter-inactiveBorder)",
									),
									xe.style.setProperty("border-radius", "2px"),
									(0, E.setAttribute)(xe, "id", ve),
									(0, d.effect)(() =>
										(F.codeBlockProps.renderCodeBlock
											? "none"
											: "1px solid var(--vscode-commandCenter-inactiveBorder)") !=
										null
											? xe.style.setProperty(
													"border-top",
													F.codeBlockProps.renderCodeBlock
														? "none"
														: "1px solid var(--vscode-commandCenter-inactiveBorder)",
												)
											: xe.style.removeProperty("border-top"),
									),
									xe
								);
							})();
							if (F.codeBlockProps.renderCodeBlock && (ee || te)) {
								const xe = F.codeBlockProps.shouldCallRenderCodeBlock
									? F.codeBlockProps.shouldCallRenderCodeBlock(ae, Q)
									: !0;
								xe !== !1
									? (typeof xe == "object" && (Q = { ...Q, ...xe }),
										(Ce = (() => {
											const He = T();
											return (
												He.style.setProperty("display", "flex"),
												He.style.setProperty("flex-direction", "column"),
												He.style.setProperty("justify-content", "center"),
												He.style.setProperty("align-items", "center"),
												He.style.setProperty("position", "relative"),
												(0, E.setAttribute)(He, "id", ve),
												He
											);
										})()),
										U.push(
											(0, l.$ndc)(
												() => F.codeBlockProps.renderCodeBlock?.(ae, Q),
												Ce,
												z.instantiationService,
											),
										))
									: Le();
							} else Le();
							function Le() {
								let xe;
								const [He, Ke] = (0, r.createSignal)(!1),
									Je = (() => {
										const Ue = I(),
											qe = xe;
										return (
											typeof qe == "function" ? (0, w.use)(qe, Ue) : (xe = Ue),
											Ue.addEventListener("mouseleave", () => {
												Ie(!1);
											}),
											Ue.addEventListener("mouseenter", () => {
												Ie(!0);
											}),
											Ue.style.setProperty("width", "100%"),
											Ue.style.setProperty("box-sizing", "border-box"),
											Ue.style.setProperty("position", "relative"),
											Ue.style.setProperty(
												"background-color",
												"var(--vscode-editor-background)",
											),
											Ue.style.setProperty("padding", "12px 12px"),
											Ue.style.setProperty("padding-bottom", "1px"),
											Ue
										);
									})(),
									Te = (() => {
										const Ue = P(),
											qe = Ue.firstChild;
										return (
											Ue.style.setProperty("display", "none"),
											Ue.style.setProperty("justify-content", "right"),
											Ue.style.setProperty("z-index", "303"),
											Ue.style.setProperty("margin-top", "5px"),
											Ue.style.setProperty("margin-bottom", "5px"),
											qe.addEventListener("click", () => {
												const Ae = $e?.getValue();
												Ae &&
													F.codeBlockProps.runAsCellReceiver &&
													F.codeBlockProps.runAsCellReceiver(Ae);
											}),
											qe.style.setProperty(
												"background-color",
												"var(--vscode-keybindingLabel-background)",
											),
											qe.style.setProperty("border", "none"),
											qe.style.setProperty("color", "var(--vscode-foreground)"),
											qe.style.setProperty("border-radius", "3px"),
											qe.style.setProperty("padding", "4px 8px"),
											qe.style.setProperty("cursor", "pointer"),
											qe.style.setProperty("user-select", "none"),
											Ue
										);
									})(),
									[Ee, Ie] = (0, r.createSignal)(!1),
									Be = (() => {
										const Ue = k();
										return (
											Ue.style.setProperty("display", "flex"),
											Ue.style.setProperty("flex-direction", "row"),
											Ue.style.setProperty("align-items", "center"),
											Ue.style.setProperty("width", "100%"),
											Ue.style.setProperty("position", "sticky"),
											Ue.style.setProperty("top", "0px"),
											Ue.style.setProperty("margin-bottom", "-1px"),
											Ue.style.setProperty("z-index", "1000"),
											(0, d.effect)(() =>
												(F.codeBlockProps.renderCodeBlock
													? "none"
													: "1px solid var(--vscode-commandCenter-inactiveBorder)") !=
												null
													? Ue.style.setProperty(
															"border-top",
															F.codeBlockProps.renderCodeBlock
																? "none"
																: "1px solid var(--vscode-commandCenter-inactiveBorder)",
														)
													: Ue.style.removeProperty("border-top"),
											),
											Ue
										);
									})(),
									Se = F.chatExtras,
									ke = F.composerExtras;
								if (ke !== void 0) {
									let Ue = function () {
										return (0, i.createComponent)(
											v.ComposerDataHandlerProvider,
											{
												get composerId() {
													return ke.composerId;
												},
												children: (qe) =>
													(0, i.createComponent)(p.$H$b, {
														composerDataHandler: qe,
														get bubbleId() {
															return ke.bubbleId;
														},
														getModelOfCodeBlock: () => $e,
														getEditorOfCodeBlock: () => ae,
														isMouseInCodeBlock: Ee,
														codeBlockIdx: x,
														get languageId() {
															return Z.languageId;
														},
														resetCodeBlockIndex: () => F.setCodeBlockCount(0),
														slashEditFileUri: ee,
														get disableApply() {
															return ke.disableApply || J;
														},
														get hasCustomRenderCodeBlock() {
															return !!F.codeBlockProps.renderCodeBlock;
														},
														isCommand: ie,
														commandLanguage: Y,
														cwd: ne,
													}),
											},
										);
									};
									U.push((0, l.$ndc)(Ue, Be, z.instantiationService));
								} else if (Se !== void 0) {
									const Ue = { ...Se };
									if (q !== null) {
										let qe = function () {
											return (
												be(!!q),
												xe &&
													!q &&
													((xe.style.borderTopLeftRadius = "4px"),
													(xe.style.borderTopRightRadius = "4px")),
												(0, i.createComponent)(b.$s$b, {
													editorDomId: ve,
													aiPredictedFilePath: q ?? void 0,
													getModelOfCodeBlock: () => $e,
													isMouseInCodeBlock: Ee,
													codeCellDone: () => !1,
													slashEditOptions: Ue,
													isCommand: ie,
													commandLanguage: Y,
													cwd: ne,
													setIsGenerating: Ke,
												})
											);
										};
										U.push((0, l.$ndc)(qe, Be, z.instantiationService));
									} else {
										let qe = function () {
											return (
												xe &&
													((xe.style.borderTopLeftRadius = "4px"),
													(xe.style.borderTopRightRadius = "4px")),
												be(!1),
												(0, i.createComponent)(b.$s$b, {
													editorDomId: ve,
													aiPredictedFilePath: void 0,
													getModelOfCodeBlock: () => $e,
													isMouseInCodeBlock: Ee,
													codeCellDone: () => !1,
													slashEditOptions: Ue,
													isCommand: ie,
													commandLanguage: Y,
													cwd: ne,
													setIsGenerating: Ke,
												})
											);
										};
										U.push((0, l.$ndc)(qe, Be, z.instantiationService));
									}
								}
								Ce.appendChild(Be),
									Ce.appendChild(Je),
									Je.appendChild(se),
									Je.appendChild(Te),
									q
										? (Ce.classList.add("markdown-block-code-slash-edit"),
											(Ce.style.margin = "1rem 0px"))
										: (Ce.classList.add("markdown-block-code"),
											(Ce.style.margin = "4px 0px")),
									(0, r.createRoot)((Ue) => {
										U.push({ dispose: () => Ue() }),
											(0, r.createEffect)(() => {
												F.codeBlockProps.runAsCellReceiver !== void 0
													? (Te.style.display = "flex")
													: (Te.style.display = "none");
											}),
											(0, r.createEffect)(() => {
												F.codeBlockProps.shouldRecompute > 0 && me(!0);
											});
									});
							}
							const Fe = {
								type: f.MarkdownElementType.BLOCK_CODE,
								ref: Ce,
								indentationLevel: W,
								backtickCount: X,
								codeEditor: ae,
								codeTextModel: $e,
								endElementHook: () => {
									const xe = F.chatExtras;
									return (
										xe !== void 0 &&
											q !== null &&
											z.aiFeatureStatusService
												.maybeRefreshFeatureStatus("cachedApplies")
												.then(async () => {
													if (q === null) return null;
													const He =
														z.workspaceContextService.resolveRelativePath(q);
													if (await z.fileService.exists(He)) return He;
													const Je = new u.$Ce();
													try {
														const Ee = (
															await z.anythingQuickAccessProvider.getFilePicks(
																(0, a.$hs)(q),
																new h.$Gc(),
																Je.token,
															)
														)
															.map((Ie) => Ie.resource?.path)
															.filter((Ie) => q && Ie?.endsWith(q));
														return Ee.length === 1 && Ee[0]
															? z.workspaceContextService.resolveRelativePath(
																	Ee[0],
																)
															: null;
													} finally {
														Je.cancel();
													}
												})
												.then(async (He) => {
													z.aiFeatureStatusService.getCachedFeatureStatus(
														"cachedApplies",
													) === !0 &&
														q !== null &&
														He !== null &&
														z.applyToFileActionsService.cacheCodeBlockApplyButton(
															He,
															$e,
															xe,
														);
												}),
										ee && F.codeBlockProps.onCodeBlockEnd?.(ae, Q),
										`
`
									);
								},
							};
							O[O.length - 1].ref.appendChild(Ce), O.push(Fe);
						},
					},
					R = {
						elementType: f.MarkdownElementType.BLOCK_CODE,
						start: (O, B, U) => {
							const z = O[O.length - 1];
							if (
								z.type === f.MarkdownElementType.INLINE_CODE ||
								z.type === f.MarkdownElementType.BLOCK_CODE ||
								z.type === f.MarkdownElementType.BLOCK_LATEX ||
								z.type === f.MarkdownElementType.BASH_RESPONSE ||
								z.type === f.MarkdownElementType.ROOT
							)
								return { state: "failed" };
							const x = (
								U
									? /^(\n|\n\n)?[\t ]*```+[^\n]*\n/
									: /^(\n|\n\n)[\t ]*```+[^\n]*\n/
							).exec(B);
							if (x)
								return {
									state: "success",
									length: x[0].length,
									elementType: f.MarkdownElementType.BLOCK_CODE,
									startOrEnd: "start",
								};
							const q = (U ? /^(\n|\n\n)?[\t ]*`*/ : /^(\n|\n\n)[\t ]*`*/).exec(
								B,
							);
							if (q && q[0].length === B.length) return { state: "possible" };
							const G = (
								U ? /^(\n|\n\n)?[\t ]*```+[^\n]*/ : /^(\n|\n\n)[\t ]*```+[^\n]*/
							).exec(B);
							return G && G[0].length === B.length
								? { state: "possible" }
								: { state: "failed" };
						},
						end: (O, B) => {
							const U = O[O.length - 1];
							if (U.type !== f.MarkdownElementType.BLOCK_CODE)
								return { state: "failed" };
							const z = U.backtickCount ?? 3,
								x = new RegExp(`^\\n([\\t ]*)\`{${z}}`).exec(B);
							if (x) {
								const V = x[1].length;
								return U.indentationLevel !== void 0 && V > U.indentationLevel
									? { state: "failed" }
									: {
											state: "success",
											length: x[0].length,
											elementType: f.MarkdownElementType.BLOCK_CODE,
											startOrEnd: "end",
										};
							}
							const q = /^\n[\t ]*`*/.exec(B);
							return q && q[0].length === B.length
								? { state: "possible" }
								: { state: "failed" };
						},
						createElement: (O, B, U, z, F) => {
							const x = F.codeBlockCount();
							F.setCodeBlockCount((xe) => xe + 1);
							let H = "";
							if (B.split(":").length === 2) {
								const He = /```+([^:]*):/.exec(B);
								He && (H = He[1].trim());
							} else if (B.includes(".")) {
								const He = /```+.*\.(\w*)\s*(:|$)/.exec(B);
								He && (H = He[1]);
							} else {
								const He = /```+(\w*)/.exec(B);
								He && (H = He[1]);
							}
							let q, V;
							B.trimStart().startsWith("```") &&
								((V = B.match(/^(\n|\n\n)?(```+)/)?.[2]?.length ?? void 0),
								(q = B.match(/^(\n|\n\n)?(.*)```+/m)?.[2]?.length ?? void 0));
							let G = null,
								K = null,
								J = null,
								W = null,
								X = !1;
							if (B.split(":").length === 2) W = B.split(":")[1].trim();
							else if (B.includes(":") && B.includes(".")) {
								const xe = B.split(":");
								if (xe.length === 3)
									try {
										(J = xe[2].trim()),
											(G = parseInt(xe[0].split(/```+/)[1])),
											(K = parseInt(xe[1])),
											(X = !0);
									} catch (He) {
										console.error(He);
									}
							}
							const Y = b.$w$b[H],
								ie =
									Y !== void 0 &&
									(W === null || W.trim().length === 0 || W.endsWith("/")),
								ne = ie ? (W ?? void 0) : void 0;
							ie && (W = null);
							const ee = W
									? z.workspaceContextService.resolveRelativePath(W)
									: void 0,
								_ = ee
									? (F.codeBlockProps.getCodeBlockVersion?.(ee) ?? 0)
									: void 0,
								te = s.ComposerCapabilitiesCodeBlockAliases.find(
									(xe) => xe === H,
								);
							let Q = {
								version: _ ?? 0,
								codeBlockIdx: x,
								capabilityAlias: te,
								startLine: G ?? void 0,
								endLine: K ?? void 0,
								predictedUri: ee,
							};
							const Z =
									z.languageService.createByLanguageNameOrFilepathOrFirstLine(
										H,
										J ? c.URI.parse(J) : null,
										void 0,
									),
								se = (() => {
									const xe = I();
									return (
										xe.addEventListener("click", (He) => {
											if (G !== null && K !== null && J !== null) {
												const Ke = (0, g.$8rb)(
													z.workspaceContextService.resolveRelativePath(J),
													{
														startLineNumber: G,
														startColumn: 1,
														endLineNumber: G,
														endColumn: 1,
													},
												);
												z.openerService.open(Ke, {
													openToSide: !1,
													editorOptions: {
														revealIfVisible: !0,
														revealIfOpened: !0,
														source: n.EditorOpenSource.USER,
													},
													fromUserGesture: !0,
												});
											}
										}),
										xe.style.setProperty("width", "100%"),
										xe.style.setProperty("box-sizing", "border-box"),
										xe.style.setProperty("position", "relative"),
										(0, m.insert)(
											xe,
											X === !0 &&
												(() => {
													const He = I();
													return (
														He.style.setProperty("position", "absolute"),
														He.style.setProperty("top", "0px"),
														He.style.setProperty("right", "0px"),
														`calc(100% - ${$.$W0b + 4}px)` != null
															? He.style.setProperty(
																	"height",
																	`calc(100% - ${$.$W0b + 4}px)`,
																)
															: He.style.removeProperty("height"),
														He.style.setProperty("width", "100%"),
														He.style.setProperty("cursor", "pointer"),
														He.style.setProperty("z-index", "1"),
														He
													);
												})(),
										),
										xe
									);
								})(),
								re = o.$I$b,
								[le] = (0, r.createResource)(
									async () =>
										await z.applyToFileActionsService.canApplyToFile(W ?? ""),
								),
								oe = W && !F.codeBlockProps.renderCodeBlock,
								ae = z.instantiationService.createInstance(
									$.$X0b,
									se,
									{
										...$.$X0b.getEditorOptions(z.configurationService),
										hover: { enabled: !0 },
										renderValidationDecorations: "on",
										fontSize: re,
									},
									{
										enableSemanticSyntaxHighlighting: !1,
										customContributions: oe ? [y.$K$b.ID] : [],
									},
								);
							ae && U.push(ae);
							let pe = c.URI.parse(`aichat-code-block-anysphere://${D()}`);
							const $e = z.modelService.createModel("", Z, pe, !1);
							if (
								($e && U.push($e),
								ae?.setModel($e),
								(0, r.createEffect)(() => {
									if (oe && (le() ?? !1) && F.chatExtras) {
										const xe = y.$K$b.get(ae);
										if (xe)
											try {
												xe.updateUri(ee),
													xe.updateSlashEditOptions({ ...F.chatExtras });
											} catch (He) {
												console.error(He);
											}
									}
								}),
								ee)
							) {
								const xe = F.codeBlockProps.onNewCodeBlock?.(ae, Q);
								xe && typeof xe == "object" && (Q = { ...Q, ...xe });
							}
							const ye = new ResizeObserver(() => {
								me(!0);
							});
							ye.observe(ae.getDomNode()),
								U.push({
									dispose: () => {
										ye.disconnect();
									},
								});
							const ue = ae?.onDidChangeModelContent(() => {
								me(!1);
							});
							ue && U.push(ue);
							let fe = 0;
							const me = (xe) => {
									if (!ae) return;
									const He = ae.getDomNode();
									if (!He) return;
									const Ke = re * 1.5,
										Je = ae.getModel()?.getLineCount() || 1,
										Te = ae.getTopForLineNumber(Je) + Ke + 10;
									(fe !== Te || xe) &&
										((fe = Te), (He.style.height = `${Te}px`), ae.layout());
								},
								ve = (0, f.$30b)(ae.getId()),
								[ge, be] = (0, r.createSignal)(!0);
							let Ce = (() => {
								const xe = T();
								return (
									xe.style.setProperty("display", "flex"),
									xe.style.setProperty("flex-direction", "column"),
									xe.style.setProperty("justify-content", "center"),
									xe.style.setProperty("align-items", "center"),
									xe.style.setProperty("position", "relative"),
									xe.style.setProperty(
										"border",
										"1px solid var(--vscode-commandCenter-inactiveBorder)",
									),
									xe.style.setProperty("border-radius", "2px"),
									(0, E.setAttribute)(xe, "id", ve),
									(0, d.effect)(() =>
										(F.codeBlockProps.renderCodeBlock
											? "none"
											: "1px solid var(--vscode-commandCenter-inactiveBorder)") !=
										null
											? xe.style.setProperty(
													"border-top",
													F.codeBlockProps.renderCodeBlock
														? "none"
														: "1px solid var(--vscode-commandCenter-inactiveBorder)",
												)
											: xe.style.removeProperty("border-top"),
									),
									xe
								);
							})();
							if (F.codeBlockProps.renderCodeBlock && (ee || te)) {
								const xe = F.codeBlockProps.shouldCallRenderCodeBlock
									? F.codeBlockProps.shouldCallRenderCodeBlock(ae, Q)
									: !0;
								xe !== !1
									? (typeof xe == "object" && (Q = { ...Q, ...xe }),
										(Ce = (() => {
											const He = T();
											return (
												He.style.setProperty("display", "flex"),
												He.style.setProperty("flex-direction", "column"),
												He.style.setProperty("justify-content", "center"),
												He.style.setProperty("align-items", "center"),
												He.style.setProperty("position", "relative"),
												(0, E.setAttribute)(He, "id", ve),
												He
											);
										})()),
										U.push(
											(0, l.$ndc)(
												() => F.codeBlockProps.renderCodeBlock?.(ae, Q),
												Ce,
												z.instantiationService,
											),
										))
									: Le();
							} else Le();
							function Le() {
								let xe;
								const [He, Ke] = (0, r.createSignal)(!1),
									Je = (() => {
										const Ue = I(),
											qe = xe;
										return (
											typeof qe == "function" ? (0, w.use)(qe, Ue) : (xe = Ue),
											Ue.addEventListener("mouseleave", () => {
												Ie(!1);
											}),
											Ue.addEventListener("mouseenter", () => {
												Ie(!0);
											}),
											Ue.style.setProperty("width", "100%"),
											Ue.style.setProperty("box-sizing", "border-box"),
											Ue.style.setProperty("position", "relative"),
											Ue.style.setProperty(
												"background-color",
												"var(--vscode-editor-background)",
											),
											Ue.style.setProperty("padding", "12px 12px"),
											Ue.style.setProperty("padding-bottom", "1px"),
											Ue
										);
									})(),
									Te = (() => {
										const Ue = P(),
											qe = Ue.firstChild;
										return (
											Ue.style.setProperty("display", "none"),
											Ue.style.setProperty("justify-content", "right"),
											Ue.style.setProperty("z-index", "303"),
											Ue.style.setProperty("margin-top", "5px"),
											Ue.style.setProperty("margin-bottom", "5px"),
											qe.addEventListener("click", () => {
												const Ae = $e?.getValue();
												Ae &&
													F.codeBlockProps.runAsCellReceiver &&
													F.codeBlockProps.runAsCellReceiver(Ae);
											}),
											qe.style.setProperty(
												"background-color",
												"var(--vscode-keybindingLabel-background)",
											),
											qe.style.setProperty("border", "none"),
											qe.style.setProperty("color", "var(--vscode-foreground)"),
											qe.style.setProperty("border-radius", "3px"),
											qe.style.setProperty("padding", "4px 8px"),
											qe.style.setProperty("cursor", "pointer"),
											qe.style.setProperty("user-select", "none"),
											Ue
										);
									})(),
									[Ee, Ie] = (0, r.createSignal)(!1),
									Be = (() => {
										const Ue = k();
										return (
											Ue.style.setProperty("display", "flex"),
											Ue.style.setProperty("flex-direction", "row"),
											Ue.style.setProperty("align-items", "center"),
											Ue.style.setProperty("width", "100%"),
											Ue.style.setProperty("position", "sticky"),
											Ue.style.setProperty("top", "0px"),
											Ue.style.setProperty("margin-bottom", "-1px"),
											Ue.style.setProperty("z-index", "1000"),
											(0, d.effect)(() =>
												(F.codeBlockProps.renderCodeBlock
													? "none"
													: "1px solid var(--vscode-commandCenter-inactiveBorder)") !=
												null
													? Ue.style.setProperty(
															"border-top",
															F.codeBlockProps.renderCodeBlock
																? "none"
																: "1px solid var(--vscode-commandCenter-inactiveBorder)",
														)
													: Ue.style.removeProperty("border-top"),
											),
											Ue
										);
									})(),
									Se = F.chatExtras,
									ke = F.composerExtras;
								if (ke !== void 0) {
									let Ue = function () {
										return (0, i.createComponent)(
											v.ComposerDataHandlerProvider,
											{
												get composerId() {
													return ke.composerId;
												},
												children: (qe) =>
													(0, i.createComponent)(p.$H$b, {
														composerDataHandler: qe,
														get bubbleId() {
															return ke.bubbleId;
														},
														getModelOfCodeBlock: () => $e,
														getEditorOfCodeBlock: () => ae,
														isMouseInCodeBlock: Ee,
														codeBlockIdx: x,
														get languageId() {
															return Z.languageId;
														},
														resetCodeBlockIndex: () => F.setCodeBlockCount(0),
														slashEditFileUri: ee,
														get disableApply() {
															return ke.disableApply || X;
														},
														get hasCustomRenderCodeBlock() {
															return !!F.codeBlockProps.renderCodeBlock;
														},
														isCommand: ie,
														commandLanguage: Y,
														cwd: ne,
													}),
											},
										);
									};
									U.push((0, l.$ndc)(Ue, Be, z.instantiationService));
								} else if (Se !== void 0) {
									const Ue = { ...Se };
									if (W !== null) {
										let qe = function () {
											return (
												be(!!W),
												xe &&
													!W &&
													((xe.style.borderTopLeftRadius = "4px"),
													(xe.style.borderTopRightRadius = "4px")),
												(0, i.createComponent)(b.$s$b, {
													editorDomId: ve,
													aiPredictedFilePath: W ?? void 0,
													getModelOfCodeBlock: () => $e,
													isMouseInCodeBlock: Ee,
													codeCellDone: () => !1,
													slashEditOptions: Ue,
													isCommand: ie,
													commandLanguage: Y,
													cwd: ne,
													setIsGenerating: Ke,
												})
											);
										};
										U.push((0, l.$ndc)(qe, Be, z.instantiationService));
									} else {
										let qe = function () {
											return (
												xe &&
													((xe.style.borderTopLeftRadius = "4px"),
													(xe.style.borderTopRightRadius = "4px")),
												be(!1),
												(0, i.createComponent)(b.$s$b, {
													editorDomId: ve,
													aiPredictedFilePath: void 0,
													getModelOfCodeBlock: () => $e,
													isMouseInCodeBlock: Ee,
													codeCellDone: () => !1,
													slashEditOptions: Ue,
													isCommand: ie,
													commandLanguage: Y,
													cwd: ne,
													setIsGenerating: Ke,
												})
											);
										};
										U.push((0, l.$ndc)(qe, Be, z.instantiationService));
									}
								}
								Ce.appendChild(Be),
									Ce.appendChild(Je),
									Je.appendChild(se),
									Je.appendChild(Te),
									W
										? (Ce.classList.add("markdown-block-code-slash-edit"),
											(Ce.style.margin = "1rem 0px"))
										: (Ce.classList.add("markdown-block-code"),
											(Ce.style.margin = "4px 0px")),
									(0, r.createRoot)((Ue) => {
										U.push({ dispose: () => Ue() }),
											(0, r.createEffect)(() => {
												F.codeBlockProps.runAsCellReceiver !== void 0
													? (Te.style.display = "flex")
													: (Te.style.display = "none");
											}),
											(0, r.createEffect)(() => {
												F.codeBlockProps.shouldRecompute > 0 && me(!0);
											});
									});
							}
							const Fe = {
								type: f.MarkdownElementType.BLOCK_CODE,
								ref: Ce,
								indentationLevel: q,
								backtickCount: V,
								codeEditor: ae,
								codeTextModel: $e,
								endElementHook: () => {
									const xe = F.chatExtras;
									return (
										xe !== void 0 &&
											W !== null &&
											z.aiFeatureStatusService
												.maybeRefreshFeatureStatus("cachedApplies")
												.then(async () => {
													if (W === null) return null;
													const He =
														z.workspaceContextService.resolveRelativePath(W);
													if (await z.fileService.exists(He)) return He;
													const Je = new u.$Ce();
													try {
														const Ee = (
															await z.anythingQuickAccessProvider.getFilePicks(
																(0, a.$hs)(W),
																new h.$Gc(),
																Je.token,
															)
														)
															.map((Ie) => Ie.resource?.path)
															.filter((Ie) => W && Ie?.endsWith(W));
														return Ee.length === 1 && Ee[0]
															? z.workspaceContextService.resolveRelativePath(
																	Ee[0],
																)
															: null;
													} finally {
														Je.cancel();
													}
												})
												.then(async (He) => {
													z.aiFeatureStatusService.getCachedFeatureStatus(
														"cachedApplies",
													) === !0 &&
														W !== null &&
														He !== null &&
														z.applyToFileActionsService.cacheCodeBlockApplyButton(
															He,
															$e,
															xe,
														);
												}),
										ee && F.codeBlockProps.onCodeBlockEnd?.(ae, Q),
										`
`
									);
								},
							};
							O[O.length - 1].ref.appendChild(Ce), O.push(Fe);
						},
					};
				e.$L$b = L ? R : A;
			},
		),
		define(
			de[338],
			he([
				1, 0, 2, 2, 2, 2, 2, 13, 58, 270, 36, 551, 236, 2983, 2990, 3921, 3616,
				4233, 2982, 2988, 2984, 2992, 2985, 2989, 2977, 2979, 2978, 2991, 2986,
				4128, 4129, 2987, 2980, 1519, 1520,
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
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4$b = void 0);
				const N = (0, t.template)("<span>"),
					A = [
						c.$00b,
						n.$$0b,
						g.$_0b,
						p.$a$b,
						o.$L$b,
						f.$M$b,
						b.$N$b,
						s.$O$b,
						l.$P$b,
						y.$Q$b,
						$.$R$b,
						v.$S$b,
						S.$T$b,
						I.$U$b,
						T.$V$b,
						P.$W$b,
						k.$X$b,
						L.$1$b,
						D.$2$b,
						M.$3$b,
					],
					R = [P.$W$b, c.$00b, n.$$0b, v.$S$b, S.$T$b, I.$U$b, o.$L$b, M.$3$b],
					O = (U) => {
						const z = (0, u.$odc)(),
							F = [];
						let x = 0;
						const H = [],
							[q, V] = (0, d.createSignal)({}),
							[G, K] = (0, d.createSignal)(0);
						(0, d.createEffect)(() => {
							U.forTestsMostlyOnUsedLengthChanged?.(G());
						}),
							(0, d.onCleanup)(() => {
								F.forEach((ee) => ee.dispose()),
									(F.length = 0),
									H.forEach((ee) => {
										ee.ref.remove();
									});
							});
						const J = { isRendering: !1 },
							W = (0, d.createMemo)(() => [
								...A,
								...(U.customRecognizers ?? []),
							]),
							X = (0, d.createMemo)(() => [
								...(U.customRecognizers?.filter((ee) => ee.isSectionStarter) ??
									[]),
								...R,
							]);
						let Y = 0;
						const ie = new Map();
						W().forEach((ee) => {
							ie.set(ee.elementType, ee);
						});
						const ne = (0, a.$t6b)(() => {
							if (H.length === 0 || J.isRendering) return;
							(J.isRendering = !0),
								(async () => {
									try {
										let Q = function (re) {
												if (re === "") return;
												const le = H[H.length - 1];
												(0, h.$90b)(le, re);
											},
											Z = function () {
												let re = H.length - 1;
												for (
													;
													re > 1 &&
													H[re].type !== h.MarkdownElementType.SECTION;
												)
													re--;
												const le = H[re];
												if (le.type !== h.MarkdownElementType.SECTION) {
													console.log("SOMETHING WENT WRONG!!!!!", H);
													return;
												}
												const oe = U.rawText.slice(x, G());
												(x = G()), (le.rawText = oe);
											},
											_ = "",
											te = "",
											se = Date.now();
										for (; U.rawText.length > G(); ) {
											Date.now() - se > (U.frameCutoffTime ?? 100) &&
												((se = Date.now()),
												await new Promise((pe) => {
													z.window.requestAnimationFrame(pe);
												}));
											const re = U.rawText.slice(G());
											if (_.length > 0)
												if (_[0] === re[0]) {
													(_ = _.slice(1)), K(G() + 1);
													continue;
												} else _ = "";
											const le = W().flatMap((pe) => {
												const $e = pe.end(H, re, {
													markdownProps: U,
													usedLength: G(),
													sectionStarters: X(),
													currentNestLevel:
														pe.elementType === h.MarkdownElementType.BLOCK_CODE
															? Y
															: void 0,
												});
												if (H.at(-1)?.disallowAnyRecognitionInside === !0)
													return [$e];
												const ye = pe.start(H, re, G() === 0, {
													markdownProps: U,
													usedLength: G(),
													currentNestLevel:
														pe.elementType === h.MarkdownElementType.BLOCK_CODE
															? Y
															: void 0,
												});
												return (
													pe.elementType === h.MarkdownElementType.BLOCK_CODE &&
														($e.state === "intermediate"
															? (Y = $e.nestLevel ?? 0)
															: $e.state === "success" && (Y = 0)),
													[ye, $e]
												);
											});
											if (
												le.some((pe) => pe.state === "possible") &&
												!U.finished
											)
												break;
											const oe = le.filter((pe) => pe.state === "success");
											if (oe.length === 0) {
												K(G() + 1), (te += re[0]);
												continue;
											}
											Q(te), (te = "");
											const ae = oe.reduce((pe, $e) =>
												pe.length < $e.length ? $e : pe,
											);
											if (ae.startOrEnd === "end") {
												ae.elementType === h.MarkdownElementType.SECTION && Z();
												let pe = H.pop();
												for (
													pe.endElementHook && (_ = pe.endElementHook());
													pe.type !== ae.elementType;
												)
													(pe = H.pop()),
														pe.endElementHook && (_ += pe.endElementHook());
												K(G() + ae.length);
											} else if (ae.startOrEnd === "start") {
												const pe = re.slice(0, ae.length);
												ae.elementType &&
													H.length === 2 &&
													H[1].type === h.MarkdownElementType.SECTION &&
													X().find(($e) => $e.elementType === ae.elementType) &&
													H[H.length - 1].ref.innerHTML.trim().length > 0 &&
													(Z(),
													H.pop()?.endElementHook?.(),
													L.$1$b.createElement(H, "", F, z, U)),
													ie
														.get(ae.elementType)
														.createElement(H, pe, F, z, U, q, V),
													K(G() + pe.length);
											}
										}
										if ((te.length > 0 && Q(te), U.finished)) {
											for (; H.length > 1; ) {
												H.length === 2 && Z();
												const re = H.pop();
												re.endElementHook && re.endElementHook();
											}
											U.onFinish?.();
										}
									} finally {
										J.isRendering = !1;
									}
								})();
						}, 20);
						return (
							(0, d.createEffect)(
								(0, d.on)([() => U.rawText, () => U.finished], () => {
									ne();
								}),
							),
							(0, d.createEffect)(() => {
								U.codeBlockProps?.resetCodeBlockCount?.() &&
									(U.setCodeBlockCount(0),
									U.codeBlockProps?.setResetCodeBlockCount?.(!1));
							}),
							(() => {
								const ee = N();
								return (
									(0, C.use)((_) => {
										H.push({ ref: _, type: h.MarkdownElementType.ROOT });
									}, ee),
									ee.style.setProperty("user-select", "text"),
									(0, E.effect)(() =>
										(0, w.className)(
											ee,
											"anysphere-markdown-container-root" +
												(U.class ? ` ${U.class}` : ""),
										),
									),
									ee
								);
							})()
						);
					},
					B = (U) => {
						const [z, F] = (0, d.createSignal)(""),
							[x, H] = (0, d.createSignal)(!1),
							[q, V] = (0, d.createSignal)(1),
							G = (0, u.$odc)(),
							[K] = (0, r.$K0b)(m.$lW, G.configurationService, !1),
							[J, W] = (0, d.createSignal)(0);
						return (
							(0, d.createEffect)(() => {
								let X = !1;
								!U.finished && x() && (X = !0),
									U.rawText.startsWith(z()) || (X = !0),
									X && V(q() + 1),
									F(U.rawText),
									H(U.finished);
							}),
							(0, i.createComponent)(d.Show, {
								get when() {
									return q();
								},
								keyed: !0,
								children: (X) =>
									(0, i.createComponent)(O, {
										get rawText() {
											return U.rawText;
										},
										get codeBlockProps() {
											return U.codeBlockProps;
										},
										get finished() {
											return U.finished;
										},
										get components() {
											return U.components;
										},
										get chatExtras() {
											return U.chatExtras;
										},
										get composerExtras() {
											return U.composerExtras;
										},
										get canQuoteMessages() {
											return U.canQuoteMessages;
										},
										get showSectionToolbar() {
											return U.showSectionToolbar;
										},
										get symbolLinks() {
											return U.symbolLinks;
										},
										get fileLinks() {
											return U.fileLinks;
										},
										get class() {
											return U.class;
										},
										get shouldFade() {
											return U.shouldFade ?? K();
										},
										get frameCutoffTime() {
											return U.frameCutoffTime;
										},
										get customRecognizers() {
											return U.customRecognizers;
										},
										get allowCommandLinks_POTENTIALLY_UNSAFE_PLEASE_ONLY_USE_FOR_HANDWRITTEN_TRUSTED_MARKDOWN() {
											return U.allowCommandLinks_POTENTIALLY_UNSAFE_PLEASE_ONLY_USE_FOR_HANDWRITTEN_TRUSTED_MARKDOWN;
										},
										get onFinish() {
											return U.onFinish;
										},
										codeBlockCount: J,
										setCodeBlockCount: W,
									}),
							})
						);
					};
				e.$4$b = B;
			},
		),
		define(
			de[4234],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 193, 14, 12, 26, 47, 242, 3804, 338, 135,
				36, 2358,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$KDc = D),
					(e.$LDc = N),
					(e.$MDc = A);
				const s = (0, t.template)("<p>:"),
					l = (0, t.template)("<div><p>"),
					y = (0, t.template)("<div>"),
					$ = (0, t.template)("<div><div>"),
					v = (0, t.template)('<span class="cursor-help-action-item">'),
					S = (0, t.template)("<span>"),
					I = (0, t.template)(
						'<div><div></div><div><div></div><div><input placeholder="Ask a question about Cursor..."><div><div>\u23CE Submit</div><div><div><span> ',
					),
					T = (0, t.template)("<div><h1></h1><div>"),
					P = (0, t.template)(
						'<div class="cursor-help-suggested-question"><div>',
					),
					k = { user: "You", ai: "Cursor Bot" },
					L = (R = 5) => {
						const O = p.$JDc
							.map((B) => ({ value: B, sort: Math.random() }))
							.sort((B, U) => B.sort - U.sort)
							.map(({ value: B }) => B)
							.slice(0, R - 1);
						return [
							{ question: "What's new in Cursor?", priority: 100 },
							...O.sort((B, U) => B.question.localeCompare(U.question)),
						];
					};
				function D(R) {
					return (() => {
						const O = s(),
							B = O.firstChild;
						return (
							O.style.setProperty("font-weight", "bold"),
							O.style.setProperty("font-size", "13px"),
							O.style.setProperty("color", "var(--vscode-input-foreground)"),
							O.style.setProperty("opacity", "0.6"),
							O.style.setProperty("margin", "0"),
							O.style.setProperty("width", "100%"),
							O.style.setProperty("display", "flex"),
							O.style.setProperty("justify-content", "space-between"),
							O.style.setProperty("align-items", "center"),
							(0, d.insert)(O, () => R.title, B),
							(0, d.insert)(
								O,
								(0, m.createComponent)(g.$C$b, {
									get show() {
										return R.isGenerating;
									},
								}),
								null,
							),
							O
						);
					})();
				}
				const M = "1px solid var(--vscode-commandCenter-inactiveBorder)";
				function N(R) {
					const O = (0, b.$odc)(),
						B = { shouldRecompute: 0 };
					let U;
					const z = O.telemetryService;
					return (0, m.createComponent)(r.Switch, {
						get children() {
							return [
								(0, m.createComponent)(r.Match, {
									get when() {
										return R.role === "user";
									},
									get children() {
										const F = l(),
											x = F.firstChild;
										return (
											(0, d.insert)(
												F,
												(0, m.createComponent)(D, {
													get title() {
														return k[R.role];
													},
													get isGenerating() {
														return R.isGenerating;
													},
												}),
												x,
											),
											x.style.setProperty(
												"color",
												"var(--vscode-input-foreground)",
											),
											x.style.setProperty("margin", "0"),
											(0, d.insert)(x, () => R.content),
											(0, C.effect)((H) =>
												(0, E.style)(
													F,
													{
														"background-color":
															"var(--vscode-input-background)",
														padding: "0.6rem 1rem",
														display: "flex",
														"flex-direction": "column",
														gap: "2px",
														...(R.renderBubbleLeftRightBorders
															? { border: M }
															: {
																	"border-top": R.isFirst ? "none" : M,
																	"border-bottom": M,
																}),
													},
													H,
												),
											),
											F
										);
									},
								}),
								(0, m.createComponent)(r.Match, {
									get when() {
										return R.role === "ai";
									},
									get children() {
										const F = $(),
											x = F.firstChild;
										return (
											F.style.setProperty("padding", "0.6rem 1rem"),
											F.style.setProperty("display", "flex"),
											F.style.setProperty("flex-direction", "column"),
											F.style.setProperty("gap", "2px"),
											(0, d.insert)(
												F,
												(0, m.createComponent)(D, {
													get title() {
														return k[R.role];
													},
													get isGenerating() {
														return R.isGenerating;
													},
												}),
												x,
											),
											(0, d.insert)(
												x,
												(0, m.createComponent)(o.$4$b, {
													get rawText() {
														return R.content;
													},
													codeBlockProps: B,
													get finished() {
														return !R.isGenerating || !R.isLast;
													},
												}),
											),
											(0, d.insert)(
												F,
												(0, m.createComponent)(r.Show, {
													get when() {
														return R.actions.length;
													},
													get children() {
														const H = y();
														return (
															H.style.setProperty("display", "flex"),
															H.style.setProperty("gap", "6px"),
															H.style.setProperty("flex-wrap", "wrap"),
															H.style.setProperty("align-items", "center"),
															H.style.setProperty("margin-top", "4px"),
															(0, d.insert)(
																H,
																(0, m.createComponent)(r.For, {
																	get each() {
																		return R.actions.filter((q) => q in p.$IDc);
																	},
																	children: (q) =>
																		(() => {
																			const V = v();
																			return (
																				V.addEventListener("click", () => {
																					const G = p.$IDc[q].action(O);
																					z.publicLogCapture(
																						"Cursor Help: action clicked",
																						{ action: q },
																					),
																						G && R.actionClickHook?.(q);
																				}),
																				V.style.setProperty("display", "flex"),
																				V.style.setProperty(
																					"align-items",
																					"center",
																				),
																				V.style.setProperty("gap", "2px"),
																				V.style.setProperty(
																					"background-color",
																					"var(--vscode-toolbar-hoverBackground)",
																				),
																				V.style.setProperty(
																					"padding",
																					"0 0.35rem",
																				),
																				V.style.setProperty(
																					"border-radius",
																					"0.5rem",
																				),
																				V.style.setProperty(
																					"line-height",
																					"150%",
																				),
																				V.style.setProperty(
																					"font-size",
																					"0.75rem",
																				),
																				V.style.setProperty(
																					"cursor",
																					"pointer",
																				),
																				(0, d.insert)(V, () => p.$IDc[q].name),
																				V
																			);
																		})(),
																}),
															),
															H
														);
													},
												}),
												null,
											),
											F
										);
									},
								}),
							];
						},
					});
				}
				function A(R) {
					const O = (0, b.$odc)(),
						[B, U] = (0, u.createStore)({ messages: [] }),
						[z, F] = (0, u.createStore)({}),
						[x, H] = (0, r.createSignal)(L(R.topKQuestions)),
						[q, V] = (0, r.createSignal)(navigator.platform),
						[G, K] = (0, r.createSignal)("");
					(0, r.createEffect)(() => {
						const _ = O.window.navigator.userAgent;
						_.indexOf("Mac") !== -1
							? V("mac")
							: _.indexOf("Windows") !== -1
								? V("windows")
								: _.indexOf("Linux") !== -1
									? V("linux")
									: V("mac");
					}, []);
					let J = new Map();
					const W = (_) => {
						J.forEach((Q, Z) => {
							Q.abort(), J.delete(Z);
						});
						const te = new AbortController();
						return J.set(_, te), te;
					};
					let X, Y;
					const ie = O.telemetryService,
						ne = (_ = !1) => {
							const te = G(),
								Q = () => {
									ie.publicLogCapture("Cursor Help: cleared chat"),
										U("messages", []),
										F({}),
										H(L(R.topKQuestions)),
										J.forEach((se) => se.abort()),
										J.clear();
								};
							if (!te) {
								_ && Q();
								return;
							}
							H([]),
								_ && Q(),
								K(""),
								(async () => {
									ie.publicLogCapture("Cursor Help: submit attempt", {
										text: te,
									});
									const se = {
											role: "user",
											id: (0, n.$9g)(),
											content: te,
											actions: [],
										},
										re = (0, n.$9g)(),
										le = { role: "ai", id: re, content: "", actions: [] },
										oe = W(re);
									U("messages", [...B.messages, se]);
									const pe = (await O.aiService.aiClient()).streamAiCursorHelp(
										{ messages: B.messages, userOs: q() },
										{ signal: oe.signal },
									);
									F(re, !0), U("messages", [...B.messages, le]);
									try {
										for await (const $e of pe) {
											if ($e.actions.length) {
												const ye = $e.actions.filter((ue) => ue in p.$IDc);
												ye.length &&
													(ie.publicLogCapture(
														"Cursor Help: actions received",
														{ actions: ye },
													),
													U("messages", (ue) => ue.id === le.id, {
														actions: ye,
													}));
											}
											U("messages", (ye) => ye.id === le.id, {
												id: le.id,
												content: $e.text,
											});
										}
										F(re, !1);
									} catch ($e) {
										if ($e.name === "AbortError")
											console.log("Request aborted"),
												ie.publicLogCapture("Cursor Help: request aborted", {
													aiBubbleId: re,
												});
										else throw $e;
									} finally {
										F(re, !1), Y?.focus();
									}
								})();
						},
						ee = (_) => {
							if (_.key === "Escape") {
								R.onCloseAttempt?.(),
									ie.publicLogCapture("Cursor Help: close attempt");
								return;
							}
							_.key !== "Enter" ||
								_.isComposing ||
								ne(h.$m ? _.metaKey : _.ctrlKey);
						};
					return (
						(0, r.createEffect)(() => {
							(0, r.onMount)(() => {
								Y?.focus();
							});
						}),
						(() => {
							const _ = I(),
								te = _.firstChild,
								Q = te.nextSibling,
								Z = Q.firstChild,
								se = Z.nextSibling,
								re = se.firstChild,
								le = re.nextSibling,
								oe = le.firstChild,
								ae = oe.nextSibling,
								pe = ae.firstChild,
								$e = pe.firstChild,
								ye = $e.firstChild;
							te.style.setProperty("flex", "1"),
								te.style.setProperty("overflow", "hidden"),
								te.style.setProperty("display", "flex"),
								te.style.setProperty("flex-direction", "column"),
								(0, d.insert)(
									te,
									(0, m.createComponent)(r.Show, {
										get when() {
											return B.messages.length;
										},
										get fallback() {
											return (() => {
												const me = T(),
													ve = me.firstChild,
													ge = ve.nextSibling;
												return (
													me.style.setProperty("flex", "1"),
													me.style.setProperty("display", "flex"),
													me.style.setProperty("flex-direction", "column"),
													me.style.setProperty("gap", "12px"),
													me.style.setProperty("text-align", "center"),
													me.style.setProperty("align-items", "center"),
													me.style.setProperty("justify-content", "center"),
													ve.style.setProperty("font-size", "1.2rem"),
													ve.style.setProperty("font-weight", "600"),
													ve.style.setProperty("margin", "0"),
													ve.style.setProperty("opacity", "0.6"),
													(0, d.insert)(
														ve,
														() => R.customTitle || "Discover Cursor",
													),
													ge.style.setProperty("opacity", "0.4"),
													(0, d.insert)(
														ge,
														() =>
															R.customSubtitle ||
															"Explore how Cursor can assist you.",
													),
													me
												);
											})();
										},
										get children() {
											return (0, m.createComponent)(f.$w0b, {
												scrollingDirection: "vertical",
												style: { height: "100%" },
												innerContainerStyle: {
													display: "flex",
													"flex-direction": "column",
													gap: "4px",
												},
												get children() {
													const me = y();
													return (
														(0, d.insert)(
															me,
															(0, m.createComponent)(r.For, {
																get each() {
																	return B.messages;
																},
																children: (ve, ge) => {
																	const be = ge() === B.messages.length - 1;
																	return (0, m.createComponent)(r.Show, {
																		get when() {
																			return ve.id;
																		},
																		keyed: !0,
																		get children() {
																			return (0, m.createComponent)(N, {
																				get role() {
																					return ve.role;
																				},
																				get content() {
																					return ve.content;
																				},
																				isLast: be,
																				get isFirst() {
																					return ge() === 0;
																				},
																				get isGenerating() {
																					return z[ve.id];
																				},
																				get actions() {
																					return ve.actions;
																				},
																				get renderBubbleLeftRightBorders() {
																					return (
																						R.renderBubbleLeftRightBorders ?? !0
																					);
																				},
																				get actionClickHook() {
																					return R.actionClickHook;
																				},
																			});
																		},
																	});
																},
															}),
														),
														(0, C.effect)((ve) =>
															(0, E.style)(
																me,
																{
																	"flex-direction": "column",
																	display: "flex",
																	...(B.messages.length === 0
																		? {
																				flex: "1",
																				"justify-content": "center",
																				"align-items": "center",
																			}
																		: {}),
																},
																ve,
															),
														),
														me
													);
												},
											});
										},
									}),
								),
								Q.style.setProperty("display", "flex"),
								Q.style.setProperty("flex-direction", "column"),
								Q.style.setProperty("margin", "12px"),
								Z.style.setProperty("margin", "0px 4px"),
								Z.style.setProperty("flex-direction", "column"),
								Z.style.setProperty("gap", "4px"),
								Z.style.setProperty(
									"background",
									"var(--vscode-input-background)",
								),
								Z.style.setProperty("padding", "6px"),
								Z.style.setProperty("border-top-left-radius", "4px"),
								Z.style.setProperty("border-top-right-radius", "4px"),
								Z.style.setProperty(
									"border",
									"solid 1px var(--vscode-input-border,transparent)",
								),
								Z.style.setProperty("border-bottom", "none"),
								Z.style.setProperty("transition", "opacity 0.2s ease-in-out"),
								(0, d.insert)(
									Z,
									(0, m.createComponent)(r.For, {
										get each() {
											return x();
										},
										children: (me) =>
											(() => {
												const ve = P(),
													ge = ve.firstChild;
												return (
													ve.addEventListener("click", () => {
														K(me.question),
															ne(),
															ie.publicLogCapture(
																"Cursor Help: suggested question clicked",
																{ question: me },
															);
													}),
													ve.style.setProperty("cursor", "pointer"),
													ve.style.setProperty("font-size", "0.85em"),
													ve.style.setProperty("line-height", "140%"),
													ve.style.setProperty("overflow", "hidden"),
													ve.style.setProperty("text-overflow", "ellipsis"),
													ve.style.setProperty("white-space", "nowrap"),
													(0, d.insert)(ve, () => me.question, ge),
													ge.style.setProperty("margin-left", "6px"),
													ge.style.setProperty("font-size", "0.85em"),
													(0, C.effect)(() =>
														(0, i.className)(
															ge,
															c.ThemeIcon.asClassName(a.$ak.arrowRight) +
																" show-on-hover",
														),
													),
													ve
												);
											})(),
									}),
								);
							const ue = X;
							typeof ue == "function" ? (0, w.use)(ue, se) : (X = se),
								se.style.setProperty("border-radius", "6px"),
								se.style.setProperty("display", "flex"),
								se.style.setProperty("gap", "4px"),
								se.style.setProperty("flex-direction", "column"),
								se.style.setProperty("padding", "8px 8px"),
								se.style.setProperty(
									"background-color",
									"var(--vscode-input-background)",
								),
								se.style.setProperty(
									"border",
									"1px solid var(--vscode-commandCenter-inactiveBorder)",
								),
								re.addEventListener("input", (me) => K(me.currentTarget.value)),
								re.addEventListener("keydown", ee);
							const fe = Y;
							return (
								typeof fe == "function" ? (0, w.use)(fe, re) : (Y = re),
								re.style.setProperty("width", "100%"),
								re.style.setProperty("border", "none"),
								re.style.setProperty("outline", "none"),
								re.style.setProperty("background", "transparent"),
								re.style.setProperty("color", "var(--vscode-input-foreground)"),
								le.style.setProperty("display", "flex"),
								le.style.setProperty("justify-content", "space-between"),
								le.style.setProperty("align-items", "center"),
								le.style.setProperty("padding-left", "4px"),
								le.style.setProperty("gap", "6px"),
								oe.addEventListener("click", () => ne()),
								oe.style.setProperty("display", "flex"),
								oe.style.setProperty("align-items", "center"),
								oe.style.setProperty("line-height", "80%"),
								oe.style.setProperty("gap", "2px"),
								oe.style.setProperty("font-size", "0.65rem"),
								oe.style.setProperty(
									"color",
									"var(--vscode-input-placeholderForeground)",
								),
								oe.style.setProperty("cursor", "pointer"),
								pe.addEventListener("click", () => ne(!0)),
								pe.style.setProperty("display", "flex"),
								pe.style.setProperty("align-items", "center"),
								pe.style.setProperty("gap", "2px"),
								pe.style.setProperty(
									"background-color",
									"var(--vscode-toolbar-hoverBackground)",
								),
								pe.style.setProperty("padding", "0 0.25rem"),
								pe.style.setProperty("border-radius", "0.25rem"),
								pe.style.setProperty("line-height", "150%"),
								pe.style.setProperty("font-size", "0.65rem"),
								pe.style.setProperty("cursor", "pointer"),
								pe.style.setProperty("opacity", "0.5"),
								(0, d.insert)(
									pe,
									(0, m.createComponent)(r.Show, {
										get when() {
											return G();
										},
										get children() {
											const me = S();
											return (
												me.style.setProperty("font-size", "0.55rem"),
												(0, C.effect)(() =>
													(0, i.className)(
														me,
														c.ThemeIcon.asClassName(a.$ak.plus),
													),
												),
												me
											);
										},
									}),
									$e,
								),
								(0, d.insert)(
									pe,
									(0, m.createComponent)(r.Show, {
										get when() {
											return G();
										},
										get fallback() {
											return (0, m.createComponent)(r.Show, {
												get when() {
													return B.messages.length;
												},
												fallback: "Refresh",
												children: "New question",
											});
										},
										children: "New question",
									}),
									$e,
								),
								(0, d.insert)($e, `${h.$m ? "\u2318" : "ctrl+"}\u23CE`, ye),
								(0, C.effect)(
									(me) => {
										const ve = {
												height: "100%",
												position: "relative",
												display: "flex",
												"flex-direction": "column",
												overflow: "hidden",
												...R.style,
											},
											ge = G() ? 0 : 1,
											be = B.messages.length > 0 ? "none" : "flex";
										return (
											(me._v$ = (0, E.style)(_, ve, me._v$)),
											ge !== me._v$2 &&
												((me._v$2 = ge) != null
													? Z.style.setProperty("opacity", ge)
													: Z.style.removeProperty("opacity")),
											be !== me._v$3 &&
												((me._v$3 = be) != null
													? Z.style.setProperty("display", be)
													: Z.style.removeProperty("display")),
											me
										);
									},
									{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
								),
								(0, C.effect)(() => (re.value = G())),
								_
							);
						})()
					);
				}
			},
		),
		define(
			de[4235],
			he([1, 0, 2, 2, 2, 2, 2, 13, 14, 26, 338, 1272, 972, 36]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$eZc = g);
				const n = (0, t.template)(
					'<div><div class="ai-preview-summary-toolbar-item"><div>',
				);
				function g(p) {
					const o = (0, c.$odc)(),
						[f, b] = (0, d.createSignal)(""),
						[s, l] = (0, d.createSignal)(!1),
						[y, $] = (0, d.createSignal)(!1);
					(0, d.createEffect)(() => {
						p.isRunning && ($(!y()), p.stopRunning());
					});
					const v = (0, d.createMemo)(
						() =>
							o.reactiveStorageService.applicationUserPersistentStorage
								.aiPreviewSettings,
					);
					return (
						(0, d.createEffect)(async () => {
							const S = await o.aiService.streamAiPreviewSummary({
								realContext: p.realContext,
								isDetailed: y(),
							});
							b(""), l(!1);
							const I = v()?.summary?.isExpanded;
							o.reactiveStorageService.setApplicationUserPersistentStorage(
								"aiPreviewSettings",
								{ ...v(), summary: { ...v()?.summary, isExpanded: !1 } },
							);
							for await (const T of S) b((P) => P + T);
							l(!0),
								I &&
									o.reactiveStorageService.setApplicationUserPersistentStorage(
										"aiPreviewSettings",
										{ ...v(), summary: { ...v()?.summary, isExpanded: !0 } },
									);
						}),
						(0, C.createComponent)(a.$$Yc, {
							get title() {
								return h.$bZc.summary;
							},
							get isSelected() {
								return p.isSelected;
							},
							get iconClass() {
								return r.ThemeIcon.asClassName(m.$ak.book);
							},
							get isLoading() {
								return !s();
							},
							get isOpen() {
								return v()?.summary?.isExpanded ?? !0;
							},
							get setIsOpen() {
								return p.setIsOpen;
							},
							get toolbarContent() {
								return (() => {
									const S = n(),
										I = S.firstChild,
										T = I.firstChild;
									return (
										S.style.setProperty("display", "flex"),
										S.style.setProperty("align-items", "center"),
										T.addEventListener("click", (P) => {
											P.stopPropagation(), $(!y());
										}),
										T.style.setProperty("cursor", "pointer"),
										T.style.setProperty(
											"color",
											"var(--vscode-list-deemphasizedForeground)",
										),
										(0, E.effect)(
											(P) => {
												const k = y()
														? "Hide detailed summary"
														: "Show detailed summary",
													L =
														(y()
															? r.ThemeIcon.asClassName(m.$ak.collapseAll)
															: r.ThemeIcon.asClassName(m.$ak.expandAll)) +
														" ai-preview-clickable";
												return (
													k !== P._v$ &&
														(0, w.setAttribute)(I, "data-tooltip", (P._v$ = k)),
													L !== P._v$2 && (0, i.className)(T, (P._v$2 = L)),
													P
												);
											},
											{ _v$: void 0, _v$2: void 0 },
										),
										S
									);
								})();
							},
							get children() {
								return (0, C.createComponent)(d.Show, {
									get when() {
										return f().length > 0;
									},
									get children() {
										return (0, C.createComponent)(u.$4$b, {
											class: "ai-preview-summary fade-in",
											get rawText() {
												return f();
											},
											get finished() {
												return s();
											},
											codeBlockProps: { shouldRecompute: 1 },
										});
									},
								});
							},
						})
					);
				}
			},
		),
		define(
			de[4236],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 14, 26, 156, 36, 9, 41, 12, 1241, 972,
				4132, 4131, 4235, 58, 2368,
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
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$fZc = L);
				const $ = (0, t.template)("<div><div></div><div>"),
					v = (0, t.template)("<div><div></div><div><span></span><span>"),
					S = (0, t.template)(
						'<div class="ai-preview-toolbar-item"> ask a question ',
					),
					I = (0, t.template)(
						'<div class="ai-preview" tabindex="-1"><div></div><div class="ai-preview-toolbar"><div><p><span></span>navigate</p><p><span>\u23CE</span>select</p><p><span></span>toggle',
					),
					T = (0, t.template)(
						"<div><div></div><div><span>Line <!>:</span><span>",
					),
					P = (0, t.template)('<div class="ai-preview-feature-toggle-menu">'),
					k = (0, t.template)(
						'<div class="ai-preview-feature-toggle-menu-item"><div></div><span>',
					);
				function L(D) {
					const M = (0, c.$odc)(),
						[N, A] = (0, r.createSignal)([]),
						[R, O] = (0, r.createSignal)(null),
						[B, U] = (0, r.createSignal)(null),
						[z, F] = (0, r.createSignal)(null);
					(0, r.createEffect)(() => {
						(async () => {
							const ee =
								await M.gitContextService.getGitLineBlameWithAbsolutePath(
									D.target.path,
									D.cursorPosition.lineNumber || 0,
									3,
								);
							if (!ee) return;
							const { commits: _ } = ee;
							A(_);
						})();
					});
					const x = (0, r.createMemo)(
							() =>
								M.reactiveStorageService.applicationUserPersistentStorage
									.aiPreviewSettings,
						),
						H = (0, r.createMemo)(() => {
							const ne = x()?.enabledFeatures;
							return Object.entries(ne ?? {}).sort(([ee], [_]) => {
								const te = f.$aZc[ee],
									Q = f.$aZc[_],
									Z = f.$_Yc.indexOf(te),
									se = f.$_Yc.indexOf(Q);
								return Z - se;
							});
						}),
						q = (ne) =>
							ne === "summary"
								? !!x()?.enabledFeatures.summary
								: ne === "related-commits"
									? !!x()?.enabledFeatures.relatedCommits
									: ne === "related-files"
										? !!x()?.enabledFeatures.relatedFiles
										: (console.warn("UNKNOWN AI PREVIEW FEATURE: ", ne), !0),
						V = (ne) =>
							M.workspaceContextService.asRelativePath(n.URI.file(ne)),
						G = (0, r.createMemo)(() => ({
							summary: q("summary"),
							"related-files": q("related-files") && D.relatedFiles.length > 0,
							"related-commits": q("related-commits") && N().length > 0,
						})),
						K = ["summary", "related-files", "related-commits"],
						J = (0, r.createMemo)(() => ({
							summary: x()?.summary?.isExpanded ?? !0,
							"related-files": x()?.relatedFiles?.isExpanded ?? !0,
							"related-commits": x()?.relatedCommits?.isExpanded ?? !0,
						})),
						W = (0, r.createMemo)(() => ({
							summary: (ne) => {
								M.reactiveStorageService.setApplicationUserPersistentStorage(
									"aiPreviewSettings",
									{
										...x(),
										summary: {
											...x()?.summary,
											isExpanded:
												ne !== void 0 ? ne : !x()?.summary?.isExpanded,
										},
									},
								);
							},
							"related-files": (ne) => {
								M.reactiveStorageService.setApplicationUserPersistentStorage(
									"aiPreviewSettings",
									{
										...x(),
										relatedFiles: {
											...x()?.relatedFiles,
											isExpanded:
												ne !== void 0 ? ne : !x()?.relatedFiles?.isExpanded,
										},
									},
								);
							},
							"related-commits": (ne) => {
								M.reactiveStorageService.setApplicationUserPersistentStorage(
									"aiPreviewSettings",
									{
										...x(),
										relatedCommits: {
											...x()?.relatedCommits,
											isExpanded:
												ne !== void 0 ? ne : !x()?.relatedCommits?.isExpanded,
										},
									},
								);
							},
						}));
					(0, r.createEffect)(() => {
						const ne = R();
						ne && !q(ne) && O(null);
					}),
						(0, r.createEffect)(() => {
							const ne = (_) => {
									const te = _.ctrlKey || _.metaKey,
										Q = (se) =>
											_.key === se &&
											!_.altKey &&
											!_.shiftKey &&
											!_.ctrlKey &&
											!_.metaKey;
									if (te && _.key === "l") {
										_.stopImmediatePropagation(),
											_.preventDefault(),
											M.commandService.executeCommand(o.$_lc);
										return;
									}
									if (_.key === "Escape") {
										_.stopImmediatePropagation(),
											_.preventDefault(),
											B()
												? U(null)
												: (M.aiPreviewService.clear(),
													M.codeEditorService.getActiveCodeEditor()?.focus());
										return;
									}
									if (_.altKey) {
										let se = "240px";
										switch (_.code) {
											case "Digit1":
												se = "240px";
												break;
											case "Digit2":
												se = "280px";
												break;
											case "Digit3":
												se = "320px";
												break;
											case "Digit4":
												se = "360px";
												break;
											case "Digit5":
												se = "400px";
												break;
											case "Digit6":
												se = "440px";
												break;
											case "Digit7":
												se = "480px";
												break;
											case "Digit8":
												se = "520px";
												break;
											case "Digit9":
												se = "560px";
												break;
										}
										const re =
											M.window.document.querySelector(".aiPreviewWidget");
										re &&
											(_.stopImmediatePropagation(),
											_.preventDefault(),
											(re.style.width = se));
										return;
									}
									const Z = f.$_Yc.filter((se) => G()[se]);
									if (!B()) {
										if (_.key === "ArrowDown" || _.key === "j") {
											_.stopImmediatePropagation(), _.preventDefault();
											const se = R();
											if (!se) O(Z[0]);
											else {
												const re = Z.indexOf(se);
												if (re === -1) return;
												if (re === Z.length - 1) {
													O(Z[0]);
													return;
												}
												O(Z[re + 1]);
											}
											return;
										} else if (_.key === "ArrowUp" || _.key === "k") {
											_.stopImmediatePropagation(), _.preventDefault();
											const se = R();
											if (!se) O(Z[Z.length - 1]);
											else {
												const re = Z.indexOf(se);
												if (re === -1) return;
												if (re === 0) {
													O(Z[Z.length - 1]);
													return;
												}
												O(Z[re - 1]);
											}
											return;
										}
										if (Q("r")) {
											_.stopImmediatePropagation(),
												_.preventDefault(),
												O("related-files");
											return;
										}
										if (Q("c")) {
											_.stopImmediatePropagation(),
												_.preventDefault(),
												O("related-commits");
											return;
										}
										if (Q("s")) {
											_.stopImmediatePropagation(),
												_.preventDefault(),
												O("summary");
											return;
										}
										if (_.key === "Enter" || _.key === " ") {
											_.stopImmediatePropagation(), _.preventDefault();
											const se = R();
											if (!se) return;
											_.ctrlKey || _.metaKey
												? W()[se]()
												: J()[se] && K.includes(se)
													? J()[se] && U(se)
													: W()[se](!0);
											return;
										}
									}
								},
								ee = (_) => {
									if (!z()) return;
									const te = Y?.querySelector(
										".ai-preview-feature-toggle-menu",
									);
									te && !te.contains(_.target) && F(null);
								};
							M.window.document.addEventListener("keydown", ne),
								M.window.document.addEventListener("mousedown", ee),
								(0, r.onCleanup)(() => {
									M.window.document.removeEventListener("keydown", ne),
										M.window.document.removeEventListener("mousedown", ee);
								});
						});
					const X =
						M.themeService.getColorTheme().type === "dark"
							? "rgba(0, 0, 0, 0.1)"
							: "rgba(255, 255, 255, 0.5)";
					let Y;
					(0, r.createEffect)(() => {
						Y && Y.focus();
					});
					const ie = (() => {
						const ne = $(),
							ee = ne.firstChild,
							_ = ee.nextSibling;
						return (
							ne.style.setProperty("display", "flex"),
							ne.style.setProperty("align-items", "center"),
							ne.style.setProperty("gap", "4px"),
							ne.style.setProperty("margin-right", "0.25rem"),
							ne.style.setProperty("margin-left", "auto"),
							ee.addEventListener("click", (te) => {
								if ((te.preventDefault(), te.stopPropagation(), z())) {
									F(null);
									return;
								}
								const Q = te.currentTarget.getBoundingClientRect();
								F({ x: Q.right + 4, y: Q.top });
							}),
							ee.style.setProperty("height", "16px"),
							ee.style.setProperty("font-size", "13px"),
							ee.style.setProperty("margin-left", "auto"),
							ee.style.setProperty("display", "flex"),
							ee.style.setProperty("align-items", "center"),
							ee.style.setProperty("justify-content", "center"),
							_.addEventListener("click", (te) => {
								te.preventDefault(),
									te.stopPropagation(),
									M.aiPreviewService.clear(),
									M.codeEditorService.getActiveCodeEditor()?.focus();
							}),
							_.style.setProperty("height", "16px"),
							_.style.setProperty("font-size", "13px"),
							_.style.setProperty("margin-left", "auto"),
							_.style.setProperty("display", "flex"),
							_.style.setProperty("align-items", "center"),
							_.style.setProperty("justify-content", "center"),
							(0, m.effect)(
								(te) => {
									const Q =
											a.ThemeIcon.asClassName(u.$ak.ellipsis) +
											" ai-preview-toolbar-item",
										Z =
											a.ThemeIcon.asClassName(u.$ak.x) +
											" ai-preview-toolbar-item";
									return (
										Q !== te._v$ && (0, d.className)(ee, (te._v$ = Q)),
										Z !== te._v$2 && (0, d.className)(_, (te._v$2 = Z)),
										te
									);
								},
								{ _v$: void 0, _v$2: void 0 },
							),
							ne
						);
					})();
					return (() => {
						const ne = I(),
							ee = ne.firstChild,
							_ = ee.nextSibling,
							te = _.firstChild,
							Q = te.firstChild,
							Z = Q.firstChild,
							se = Q.nextSibling,
							re = se.nextSibling,
							le = re.firstChild;
						return (
							(0, C.use)((oe) => (Y = oe), ne),
							(0, w.insert)(
								ne,
								(0, E.createComponent)(r.Show, {
									get when() {
										return D.word;
									},
									get fallback() {
										return (() => {
											const oe = T(),
												ae = oe.firstChild,
												pe = ae.nextSibling,
												$e = pe.firstChild,
												ye = $e.firstChild,
												ue = ye.nextSibling,
												fe = ue.nextSibling,
												me = $e.nextSibling;
											return (
												oe.addEventListener("click", () => {
													const ve =
														M.workspaceContextService.resolveRelativePath(
															D.target.path,
														);
													M.openerService.open(
														(0, g.$8rb)(ve, {
															startLineNumber: D.cursorPosition.lineNumber,
															startColumn: D.cursorPosition.column,
															endLineNumber: D.cursorPosition.lineNumber,
															endColumn: D.cursorPosition.column,
														}),
													);
												}),
												oe.style.setProperty("display", "flex"),
												oe.style.setProperty("gap", "2px"),
												oe.style.setProperty("padding", "4px"),
												X != null
													? oe.style.setProperty("background", X)
													: oe.style.removeProperty("background"),
												oe.style.setProperty(
													"border-bottom",
													"1px solid var(--vscode-input-border)",
												),
												oe.style.setProperty("overflow", "hidden"),
												oe.style.setProperty("align-items", "center"),
												oe.style.setProperty("cursor", "pointer"),
												(0, w.insert)(
													ae,
													(0, E.createComponent)(h.$k$b, {
														get fileName() {
															return D.target.fileName;
														},
														get workspaceContextService() {
															return M.workspaceContextService;
														},
														get modelService() {
															return M.modelService;
														},
														get languageService() {
															return M.languageService;
														},
													}),
												),
												pe.style.setProperty("display", "flex"),
												pe.style.setProperty("align-items", "center"),
												pe.style.setProperty("gap", "4px"),
												pe.style.setProperty("overflow", "hidden"),
												$e.style.setProperty(
													"color",
													"var(--vscode-editor-foreground)",
												),
												$e.style.setProperty("font-size", "0.8rem"),
												$e.style.setProperty("flex-shrink", "0"),
												$e.style.setProperty("display", "flex"),
												(0, w.insert)(
													$e,
													() => D.cursorPosition.lineNumber,
													ue,
												),
												(0, w.insert)($e, () => D.cursorPosition.column, null),
												me.style.setProperty(
													"color",
													"var(--vscode-input-placeholderForeground)",
												),
												me.style.setProperty("white-space", "nowrap"),
												me.style.setProperty("overflow", "hidden"),
												me.style.setProperty("text-overflow", "ellipsis"),
												me.style.setProperty("font-size", "0.6rem"),
												(0, w.insert)(me, () => V(D.target.path)),
												(0, w.insert)(oe, ie, null),
												(0, m.effect)(() =>
													(0, i.setAttribute)(oe, "title", D.target.path),
												),
												oe
											);
										})();
									},
									get children() {
										const oe = v(),
											ae = oe.firstChild,
											pe = ae.nextSibling,
											$e = pe.firstChild,
											ye = $e.nextSibling;
										return (
											oe.addEventListener("click", () => {
												const ue =
													M.workspaceContextService.resolveRelativePath(
														D.source.path,
													);
												M.openerService.open(
													(0, g.$8rb)(ue, {
														startLineNumber:
															D.source.range?.startLineNumber || 0,
														startColumn: D.source.range?.startColumn || 0,
														endLineNumber: D.source.range?.endLineNumber || 0,
														endColumn: D.source.range?.endColumn || 0,
													}),
												);
											}),
											oe.style.setProperty("display", "flex"),
											oe.style.setProperty("gap", "2px"),
											oe.style.setProperty("padding", "4px"),
											X != null
												? oe.style.setProperty("background", X)
												: oe.style.removeProperty("background"),
											oe.style.setProperty(
												"border-bottom",
												"1px solid var(--vscode-input-border)",
											),
											oe.style.setProperty("overflow", "hidden"),
											oe.style.setProperty("align-items", "center"),
											oe.style.setProperty("cursor", "pointer"),
											(0, w.insert)(
												ae,
												(0, E.createComponent)(h.$k$b, {
													get fileName() {
														return D.source.fileName;
													},
													get workspaceContextService() {
														return M.workspaceContextService;
													},
													get modelService() {
														return M.modelService;
													},
													get languageService() {
														return M.languageService;
													},
												}),
											),
											pe.style.setProperty("display", "flex"),
											pe.style.setProperty("align-items", "center"),
											pe.style.setProperty("gap", "4px"),
											pe.style.setProperty("overflow", "hidden"),
											$e.style.setProperty(
												"color",
												"var(--vscode-editor-foreground)",
											),
											$e.style.setProperty("font-size", "0.8rem"),
											(0, w.insert)($e, () => D.word),
											ye.style.setProperty(
												"color",
												"var(--vscode-input-placeholderForeground)",
											),
											ye.style.setProperty("white-space", "nowrap"),
											ye.style.setProperty("overflow", "hidden"),
											ye.style.setProperty("text-overflow", "ellipsis"),
											ye.style.setProperty("font-size", "0.6rem"),
											(0, w.insert)(ye, () => V(D.source.path)),
											(0, w.insert)(oe, ie, null),
											(0, m.effect)(() =>
												(0, i.setAttribute)(oe, "title", D.source.path),
											),
											oe
										);
									},
								}),
								ee,
							),
							(0, w.insert)(
								ne,
								(0, E.createComponent)(r.Show, {
									get when() {
										return z();
									},
									children: (oe) =>
										(() => {
											const ae = P();
											return (
												(0, w.insert)(
													ae,
													(0, E.createComponent)(r.For, {
														get each() {
															return H();
														},
														children: (pe) => {
															const [$e, ye] = pe,
																ue = f.$aZc[$e];
															return (() => {
																const fe = k(),
																	me = fe.firstChild,
																	ve = me.nextSibling;
																return (
																	fe.addEventListener("click", (ge) => {
																		ge.stopPropagation();
																		const be = Object.entries(
																			x()?.enabledFeatures ?? {},
																		).filter(([, Le]) => Le);
																		(be.length === 1 && be[0][0] === $e) ||
																			M.reactiveStorageService.setApplicationUserPersistentStorage(
																				"aiPreviewSettings",
																				"enabledFeatures",
																				$e,
																				!ye,
																			);
																	}),
																	me.style.setProperty("width", "13px"),
																	me.style.setProperty("height", "13px"),
																	me.style.setProperty("font-size", "13px"),
																	me.style.setProperty("display", "flex"),
																	me.style.setProperty("align-items", "center"),
																	me.style.setProperty(
																		"justify-content",
																		"center",
																	),
																	(ye ? "visible" : "hidden") != null
																		? me.style.setProperty(
																				"visibility",
																				ye ? "visible" : "hidden",
																			)
																		: me.style.removeProperty("visibility"),
																	ve.style.setProperty("font-size", "13px"),
																	(0, w.insert)(ve, () => f.$bZc[ue]),
																	(0, m.effect)(() =>
																		(0, d.className)(
																			me,
																			a.ThemeIcon.asClassName(u.$ak.check),
																		),
																	),
																	fe
																);
															})();
														},
													}),
												),
												(0, m.effect)(
													(pe) => {
														const $e = oe().y + "px",
															ye = oe().x + "px";
														return (
															$e !== pe._v$3 &&
																((pe._v$3 = $e) != null
																	? ae.style.setProperty("top", $e)
																	: ae.style.removeProperty("top")),
															ye !== pe._v$4 &&
																((pe._v$4 = ye) != null
																	? ae.style.setProperty("left", ye)
																	: ae.style.removeProperty("left")),
															pe
														);
													},
													{ _v$3: void 0, _v$4: void 0 },
												),
												ae
											);
										})(),
								}),
								ee,
							),
							ee.style.setProperty("padding", "2px"),
							(0, w.insert)(
								ee,
								(0, E.createComponent)(r.Show, {
									get when() {
										return (
											q("summary") &&
											!!D.realContextProto &&
											!!D.realContextProto.originalSymbolNameAndSymbolRange &&
											!!D.realContextProto.definitions &&
											D.realContextProto.definitions.length > 0
										);
									},
									get children() {
										return (0, E.createComponent)(l.$eZc, {
											get isRunning() {
												return B() === "summary";
											},
											stopRunning: () => {
												U(null);
											},
											get isSelected() {
												return R() === "summary";
											},
											get isOpen() {
												return x()?.summary?.isExpanded ?? !0;
											},
											get realContext() {
												return D.realContextProto;
											},
											setIsOpen: (oe) => {
												W().summary(oe), O(null);
											},
										});
									},
								}),
								null,
							),
							(0, w.insert)(
								ee,
								(0, E.createComponent)(r.Show, {
									get when() {
										return q("related-files");
									},
									get children() {
										return (0, E.createComponent)(b.$cZc, {
											get isSelected() {
												return R() === "related-files";
											},
											get isOpen() {
												return x()?.relatedFiles?.isExpanded ?? !0;
											},
											get isRunning() {
												return B() === "related-files";
											},
											stopRunning: () => {
												U(null);
											},
											setIsOpen: (oe) => {
												W()["related-files"](oe), O(null);
											},
											get relatedFiles() {
												return D.relatedFiles;
											},
											maxToShow: 3,
										});
									},
								}),
								null,
							),
							(0, w.insert)(
								ee,
								(0, E.createComponent)(r.Show, {
									get when() {
										return q("related-commits");
									},
									get children() {
										return (0, E.createComponent)(s.$dZc, {
											get isSelected() {
												return R() === "related-commits";
											},
											get isOpen() {
												return x()?.relatedCommits?.isExpanded ?? !0;
											},
											setIsOpen: (oe) => {
												W()["related-commits"](oe), O(null);
											},
											get isRunning() {
												return B() === "related-commits";
											},
											stopRunning: () => {
												U(null);
											},
											get relatedCommits() {
												return N();
											},
										});
									},
								}),
								null,
							),
							_.style.setProperty("display", "flex"),
							_.style.setProperty("justify-content", "space-between"),
							_.style.setProperty("gap", "4px"),
							_.style.setProperty("padding", "2px 4px"),
							X != null
								? _.style.setProperty("background", X)
								: _.style.removeProperty("background"),
							_.style.setProperty(
								"border-top",
								"1px solid var(--vscode-input-border)",
							),
							_.style.setProperty("overflow", "hidden"),
							_.style.setProperty("align-items", "center"),
							te.style.setProperty("display", "flex"),
							te.style.setProperty("gap", "4px"),
							te.style.setProperty("align-items", "center"),
							te.style.setProperty(
								"color",
								"var(--vscode-input-placeholderForeground)",
							),
							te.style.setProperty("font-size", "0.55rem"),
							Q.style.setProperty("display", "flex"),
							Q.style.setProperty("gap", "4px"),
							Q.style.setProperty("align-items", "center"),
							Q.style.setProperty("margin", "0"),
							Z.style.setProperty("transform", "rotate(90deg)"),
							Z.style.setProperty("font-size", "0.55rem"),
							se.style.setProperty("display", "flex"),
							se.style.setProperty("gap", "4px"),
							se.style.setProperty("align-items", "center"),
							se.style.setProperty("margin", "0"),
							re.style.setProperty("display", "flex"),
							re.style.setProperty("gap", "4px"),
							re.style.setProperty("align-items", "center"),
							re.style.setProperty("margin", "0"),
							(0, w.insert)(le, `${p.$m ? "\u2318" : "ctrl+"}\u23CE`),
							(0, w.insert)(
								_,
								(0, E.createComponent)(r.Show, {
									get when() {
										return D.realContextProto;
									},
									get children() {
										const oe = S(),
											ae = oe.firstChild;
										return (
											oe.addEventListener("click", () => {
												M.commandService.executeCommand(y.$nX, {
													symbolContext: D.realContextProto,
													gitCommits: N().map((pe) => ({
														sha: pe.commit,
														message: pe.message,
													})),
												});
											}),
											(0, w.insert)(oe, `${p.$m ? "\u2318" : "ctrl+"}L`, ae),
											oe
										);
									},
								}),
								null,
							),
							(0, m.effect)(() =>
								(0, d.className)(Z, a.ThemeIcon.asClassName(u.$ak.arrowSwap)),
							),
							ne
						);
					})();
				}
			},
		),
		