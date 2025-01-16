define(
			de[4214],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 7, 12, 36, 818, 364, 484, 135,
				2489,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$CZc = S);
				const b = (0, t.template)(
						'<div class="sem-search-picker-menu-search"><input>',
					),
					s = (0, t.template)("<div>"),
					l = (0, t.template)('<div class="error-message">'),
					y = (0, t.template)('<div class="sub-item-indicators">'),
					$ = (0, t.template)(
						'<div><div class="sem-search-picker-menu-item"><div class="sem-search-picker-menu-item-content"><span class="sem-search-picker-menu-item-title"></span><span class="sem-search-picker-menu-item-subtitle">',
					),
					v = (I) => {
						const T = (0, n.$odc)(),
							[P, k, L] = (0, p.$A0b)(),
							[D, M] = (0, a.createSignal)(!1);
						return (
							(0, a.onMount)(() => {
								setTimeout(() => {
									M(!0);
								}, 100);
							}),
							(0, a.createEffect)(() => {
								if (!D() || !I.selectedItem || !I.selectedItem.renderPreview) {
									k(null);
									return;
								}
								const N = I.optionsListRef?.getBoundingClientRect();
								if (!N) {
									k(null);
									return;
								}
								const A = I.selectedIndex,
									R = I.pickerId;
								queueMicrotask(() => {
									const O = T.window.document.getElementById(`${R}-item-${A}`);
									if (!O) {
										L();
										return;
									}
									const B = O.getBoundingClientRect();
									k({ x: N.right + 4, y: B.top - 1 });
								});
							}),
							(0, r.createComponent)(a.Show, {
								get when() {
									return (
										(0, u.memo)(
											() => !!(D() && I.selectedItem?.renderPreview),
										)() && P()
									);
								},
								get children() {
									return (0, r.createComponent)(o.Menu, {
										get position() {
											return P();
										},
										close: () => {},
										width: "auto",
										get nonBlockingRoot() {
											return `#${I.pickerId}`;
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
											return I.selectedItem?.renderPreview?.(
												I.selectedItem.item,
											);
										},
									});
								},
							})
						);
					};
				function S(I) {
					const [T, P] = (0, a.createSignal)("");
					(0, a.createEffect)(() => {
						P(
							I.codeSelection?.rawText === void 0
								? ""
								: I.codeSelection.rawText + " ",
						);
					});
					const k = (0, n.$odc)();
					let L;
					const D = "picker-menu-" + Date.now(),
						M = (0, f.$y0b)();
					let N;
					const A = () => {
						if (N) {
							const z = N.querySelector(".picker-menu-item.selected");
							if (z) {
								const F = z.offsetTop,
									x = z.offsetHeight,
									H = N.clientHeight,
									q = M.getCurrentScrollPosition().scrollTop;
								let V = q;
								F < q ? (V = F) : F + x > q + H && (V = F + x - H),
									M.setScrollPositionNow({ scrollTop: V });
							}
						}
					};
					(0, a.createEffect)(() => {
						I.selectedIndexY !== -1 && A();
					});
					const R = (z) => {
							const F = z.subItems[I.selectedIndexX];
							F &&
								(I.onItemAdd(z, F),
								I.onFill &&
									I.items.filter((x) => {
										const { isAdded: H } = x.render(x.item);
										return H;
									}).length === 1 &&
									I.onFill(),
								B());
						},
						O = (z) => {
							z.subItems[I.selectedIndexX] &&
								(I.onItemRemove(z),
								I.onEmpty &&
									I.items.filter((x) => {
										const { isAdded: H } = x.render(x.item);
										return H;
									}).length === 0 &&
									I.onEmpty());
						},
						B = (z) => {
							I.close(z);
						},
						U = (z) => {
							const F = c.$m ? z.metaKey : z.ctrlKey,
								x = I.items.length,
								q = I.items[I.selectedIndexY]?.item.subItems?.length ?? 0;
							if (z.code === "ArrowRight" && q > 0 && I.selectedIndexX < q - 1)
								z.preventDefault(),
									z.stopImmediatePropagation(),
									I.setSelectedIndexX((V) => V + 1);
							else if (z.code === "ArrowLeft" && I.selectedIndexX > 0)
								z.preventDefault(),
									z.stopImmediatePropagation(),
									I.setSelectedIndexX((V) => V - 1);
							else if (
								z.code === "ArrowDown" ||
								(z.altKey && z.code === "KeyJ") ||
								(F && z.code === "KeyJ")
							)
								z.preventDefault(),
									z.stopImmediatePropagation(),
									I.setSelectedIndexY((V) => (V + 1) % x),
									I.setSelectedIndexX(0);
							else if (
								z.code === "ArrowUp" ||
								(z.altKey && z.code === "KeyK") ||
								(F && z.code === "KeyK")
							)
								z.preventDefault(),
									z.stopImmediatePropagation(),
									I.setSelectedIndexY((V) =>
										V === -1 ? x - 1 : (V - 1 + x) % x,
									),
									I.setSelectedIndexX(0);
							else if (z.code === "Enter") {
								z.preventDefault(), z.stopImmediatePropagation();
								const V = I.items[I.selectedIndexY];
								if (V) {
									const { isAdded: G } = V.render(V.item);
									G ? O(V.item) : R(V.item);
								}
							} else if (z.code === "Escape")
								z.preventDefault(), z.stopImmediatePropagation(), B();
							else if (z.code === "Backspace" && L?.value === "") {
								z.preventDefault(), z.stopImmediatePropagation();
								const V = I.items[I.selectedIndexY];
								V && I.onItemRemove(V.item);
							} else L?.focus();
						};
					return (
						(0, a.createEffect)(() => {
							(0, a.onMount)(() => {
								(async () => {
									for (
										let F = 0;
										F < 5 && (0, h.$Ogb)().document.activeElement !== L;
										F++
									)
										L?.focus(), await new Promise((x) => setTimeout(x, 150));
								})();
							});
						}),
						(0, a.createEffect)(() => {
							I.items.length > 0 &&
								I.selectedIndexY >= I.items.length &&
								(I.setSelectedIndexY(0), I.setSelectedIndexX(0));
						}),
						(0, a.createEffect)(() => {
							if (I.onActiveItemChange) {
								const z = I.items[I.selectedIndexY]?.item,
									F = z?.subItems[I.selectedIndexX];
								z && F && I.onActiveItemChange(z, F);
							}
						}),
						(0, r.createComponent)(
							o.Menu,
							(0, w.mergeProps)(I, {
								get position() {
									return I.position;
								},
								close: B,
								width: 286.333,
								get height() {
									return I.height ?? 300;
								},
								get nonBlockingRoot() {
									return I.nonBlockingRoot;
								},
								get nonBlockingDirection() {
									return I.nonBlockingDirection ?? "vertical";
								},
								get animationType() {
									return I.animationType ?? "fade";
								},
								get zIndexModifier() {
									return I.zIndexModifier ?? 1;
								},
								get shouldMountInPortal() {
									return I.shouldMountInPortal ?? !0;
								},
								get tabIndex() {
									return I.tabIndex ?? 0;
								},
								onKeyDown: U,
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
										...(typeof I.style == "object" ? I.style : {}),
									};
								},
								id: D,
								get class() {
									return `sem-search-picker-menu ${I.class ?? ""}`;
								},
								get children() {
									return [
										(() => {
											const z = b(),
												F = z.firstChild;
											F.addEventListener("input", (H) => {
												P(H.currentTarget.value),
													I.onSearch(H.currentTarget.value);
											});
											const x = L;
											return (
												typeof x == "function" ? (0, m.use)(x, F) : (L = F),
												F.style.setProperty(
													"background-color",
													"var(--vscode-editor-background)",
												),
												F.style.setProperty(
													"color",
													"var(--vscode-input-foreground)",
												),
												F.style.setProperty(
													"border",
													"1px solid var(--vscode-input-border)",
												),
												F.style.setProperty("border-radius", "3px"),
												F.style.setProperty("padding", "2px 4px"),
												F.style.setProperty("width", "100%"),
												F.style.setProperty("font-size", "12px"),
												F.style.setProperty("outline", "none"),
												F.style.setProperty("box-sizing", "border-box"),
												(0, d.effect)(() =>
													(0, C.setAttribute)(F, "placeholder", I.placeholder),
												),
												(0, d.effect)(() => (F.value = T())),
												z
											);
										})(),
										(() => {
											const z = s(),
												F = N;
											return (
												typeof F == "function" ? (0, m.use)(F, z) : (N = z),
												z.style.setProperty("flex", "1"),
												z.style.setProperty("overflow", "hidden"),
												z.style.setProperty("position", "relative"),
												(0, E.insert)(
													z,
													(0, r.createComponent)(f.$w0b, {
														scrollingDirection: "vertical",
														style: {
															height: "100%",
															"border-top":
																"1px solid var(--vscode-widget-border)",
														},
														scrollable: M,
														get children() {
															return (0, r.createComponent)(a.For, {
																get each() {
																	return I.items;
																},
																children: (x, H) => {
																	const {
																		title: q,
																		subtitle: V,
																		isAdded: G,
																		icon: K,
																		badge: J,
																		titleHighlights: W,
																		subtitleHighlights: X,
																	} = x.render(x.item);
																	return (() => {
																		const Y = $(),
																			ie = Y.firstChild,
																			ne = ie.firstChild,
																			ee = ne.firstChild,
																			_ = ee.nextSibling;
																		return (
																			Y.addEventListener("click", (te) => {
																				te.stopImmediatePropagation(),
																					te.preventDefault(),
																					G ? O(x.item) : R(x.item);
																			}),
																			Y.style.setProperty(
																				"padding-right",
																				"6px",
																			),
																			Y.style.setProperty(
																				"flex-direction",
																				"column",
																			),
																			ie.style.setProperty("display", "flex"),
																			ie.style.setProperty("width", "100%"),
																			ie.style.setProperty("padding", "0px"),
																			(0, E.insert)(ie, K, ne),
																			(0, E.insert)(
																				ee,
																				(0, r.createComponent)(g.$tbc, {
																					text: q,
																					highlights: W || [],
																					style: {
																						direction: "ltr",
																						"unicode-bidi": "embed",
																					},
																				}),
																			),
																			(0, E.insert)(
																				_,
																				(0, r.createComponent)(g.$tbc, {
																					text: V,
																					highlights: X || [],
																					style: {
																						direction: "ltr",
																						"unicode-bidi": "embed",
																					},
																				}),
																			),
																			(0, E.insert)(
																				ne,
																				(0, r.createComponent)(a.Show, {
																					when: J,
																					children: J,
																				}),
																				null,
																			),
																			(0, E.insert)(
																				Y,
																				(0, r.createComponent)(a.Show, {
																					get when() {
																						return (
																							(0, u.memo)(
																								() =>
																									x.item.subItems.length > 0,
																							)() && H() === I.selectedIndexY
																						);
																					},
																					get children() {
																						const te = y();
																						return (
																							te.style.setProperty(
																								"margin-top",
																								"0px",
																							),
																							te.style.setProperty(
																								"margin-left",
																								"10px",
																							),
																							te.style.setProperty(
																								"margin-bottom",
																								"4px",
																							),
																							te.style.setProperty(
																								"height",
																								"6px",
																							),
																							te.style.setProperty(
																								"width",
																								"100%",
																							),
																							te.style.setProperty(
																								"display",
																								"flex",
																							),
																							te.style.setProperty(
																								"justify-content",
																								"flex-start",
																							),
																							(0, E.insert)(
																								te,
																								(0, r.createComponent)(a.For, {
																									get each() {
																										return Array(
																											x.item.subItems.length,
																										);
																									},
																									children: (Q, Z) =>
																										(() => {
																											const se = s();
																											return (
																												se.style.setProperty(
																													"height",
																													"6px",
																												),
																												se.style.setProperty(
																													"width",
																													"6px",
																												),
																												se.style.setProperty(
																													"margin-right",
																													"3px",
																												),
																												se.style.setProperty(
																													"border-radius",
																													"50%",
																												),
																												(0, d.effect)(
																													(re) => {
																														const le = `indicator ${Z() === I.selectedIndexX ? "selected" : ""}`,
																															oe =
																																Z() ===
																																I.selectedIndexX
																																	? "var(--vscode-checkbox-selectBackground)"
																																	: "var(--vscode-checkbox-background)",
																															ae = `1px solid ${Z() === I.selectedIndexX ? "var(--vscode-checkbox-selectBorder)" : "var(--vscode-checkbox-border)"}`;
																														return (
																															le !== re._v$3 &&
																																(0,
																																i.className)(
																																	se,
																																	(re._v$3 =
																																		le),
																																),
																															oe !== re._v$4 &&
																																((re._v$4 =
																																	oe) != null
																																	? se.style.setProperty(
																																			"background-color",
																																			oe,
																																		)
																																	: se.style.removeProperty(
																																			"background-color",
																																		)),
																															ae !== re._v$5 &&
																																((re._v$5 =
																																	ae) != null
																																	? se.style.setProperty(
																																			"border",
																																			ae,
																																		)
																																	: se.style.removeProperty(
																																			"border",
																																		)),
																															re
																														);
																													},
																													{
																														_v$3: void 0,
																														_v$4: void 0,
																														_v$5: void 0,
																													},
																												),
																												se
																											);
																										})(),
																								}),
																							),
																							te
																						);
																					},
																				}),
																				null,
																			),
																			(0, d.effect)(
																				(te) => {
																					const Q = `${D}-item-${H()}`,
																						Z = `sem-search-picker-menu-item ${H() === I.selectedIndexY ? "selected" : ""}`;
																					return (
																						Q !== te._v$ &&
																							(0, C.setAttribute)(
																								Y,
																								"id",
																								(te._v$ = Q),
																							),
																						Z !== te._v$2 &&
																							(0, i.className)(
																								Y,
																								(te._v$2 = Z),
																							),
																						te
																					);
																				},
																				{ _v$: void 0, _v$2: void 0 },
																			),
																			Y
																		);
																	})();
																},
															});
														},
													}),
													null,
												),
												(0, E.insert)(
													z,
													(0, r.createComponent)(v, {
														get selectedItem() {
															return I.items[I.selectedIndexY];
														},
														get selectedIndex() {
															return I.selectedIndexY;
														},
														optionsListRef: N,
														pickerId: D,
													}),
													null,
												),
												z
											);
										})(),
										(0, r.createComponent)(a.Show, {
											get when() {
												return I.error;
											},
											get children() {
												const z = l();
												return (0, E.insert)(z, () => I.error), z;
											},
										}),
									];
								},
							}),
						)
					);
				}
			},
		),
		