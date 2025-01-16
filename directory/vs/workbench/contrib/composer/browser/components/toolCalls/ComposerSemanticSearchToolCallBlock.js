define(de[4211], he([1, 0, 2, 861]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ComposerSemanticSearchToolCallBlock = w);
			function w(E) {
				return (0, t.createComponent)(i.ComposerSearchToolCallBlock, {
					get results() {
						return E.results.map((C) => ({ uri: C.uri, metadata: C }));
					},
					onResultClick: (C) => C.metadata && E.onResultClick(C.metadata),
					get searchContext() {
						return `"${E.query}"${E.includePattern || E.excludePattern ? ` (${E.includePattern ? `${E.includePattern}` : ""}${E.excludePattern ? (E.includePattern ? ", " : "") + `excluding ${E.excludePattern}` : ""})` : ""}`;
					},
					get maxHeight() {
						return E.maxHeight;
					},
					get isLoading() {
						return E.isLoading;
					},
					formatResult: (C) => ({
						score: C.score,
						selection: C.metadata?.range
							? {
									startLineNumber: C.metadata.range.startPosition?.line ?? 0,
									startColumn: 1,
									endLineNumber: C.metadata.range.endPosition?.line ?? 0,
									endColumn: 1,
								}
							: void 0,
					}),
				});
			}
		}),
		define(
			de[4212],
			he([
				1, 0, 125, 5, 21, 32, 35, 233, 1016, 44, 223, 66, 18, 9, 42, 67, 4194,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o, f;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$Zc = e.$0Zc = void 0);
				let b = class extends m.$zVb {
					static {
						o = this;
					}
					static {
						this.ID = "inlineMultiDiffEditor";
					}
					constructor($, v, S, I, T, P, k, L) {
						super(o.ID, $, "inlineMultiDiffEditor", S, v, T, L, I, P, k),
							(this.a = void 0);
					}
					Y($) {
						this.a = this.D(new p.$7Zc($, this.m));
					}
					async setInput($, v, S, I) {
						await super.setInput($, v, S, I);
						const T = [...$.uris];
						this.a?.setURIs(T);
					}
					async clearInput() {
						await super.clearInput(), this.a?.setURIs([]);
					}
					layout($) {
						this.a?.layout($);
					}
					getControl() {
						return this.a?.getActiveControl();
					}
					mb($) {
						return { scrollState: { top: 0, left: 0 } };
					}
					nb($) {
						return $ instanceof l;
					}
					pb($) {
						return $.resource;
					}
				};
				(e.$0Zc = b),
					(e.$0Zc =
						b =
						o =
							Ne(
								[
									j(1, i.$Li),
									j(2, E.$km),
									j(3, C.$iP),
									j(4, w.$lq),
									j(5, h.$IY),
									j(6, a.$EY),
									j(7, t.$XO),
								],
								b,
							));
				let s = class {
					constructor($) {
						this.a = $;
					}
					createResourceLabel($) {
						const v = this.a.createInstance(d.$vPb, $, {});
						return {
							setUri(S) {
								S !== void 0 && v.element.setFile(S, {});
							},
							dispose() {
								v.dispose();
							},
						};
					}
				};
				s = Ne([j(0, i.$Li)], s);
				let l = class extends u.$LO {
					static {
						f = this;
					}
					static {
						this.ID = "workbench.input.inlineMultiDiffEditor";
					}
					get resource() {
						return c.URI.parse(`inline-multi-diff-editor:${this.id}`);
					}
					get capabilities() {
						return r.EditorInputCapabilities.Readonly;
					}
					get typeId() {
						return f.ID;
					}
					getName() {
						return this.label ?? "Multi File Edits";
					}
					get editorId() {
						return r.$b1.id;
					}
					constructor($, v, S, I, T, P, k) {
						super(),
							(this.label = $),
							(this.uris = v),
							(this.a = I),
							(this.c = T),
							(this.h = P),
							(this.m = k),
							(this.id =
								S ||
								new Date().getMilliseconds().toString() +
									Math.random().toString());
					}
					setLanguageId($, v) {}
				};
				(e.$$Zc = l),
					(e.$$Zc =
						l =
						f =
							Ne([j(3, n.$MO), j(4, t.$XO), j(5, i.$Li), j(6, g.$QO)], l));
			},
		),
		define(
			de[4213],
			he([1, 0, 30, 192, 44, 102, 4212, 231, 5, 3, 55, 52]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					t.$Io
						.as(w.$a1.EditorPane)
						.registerEditorPane(
							i.$vVb.create(C.$0Zc, C.$0Zc.ID, "Multi File Edits"),
							[new E.$Ji(C.$$Zc)],
						);
				let h = class extends r.$1c {
					constructor(g, p) {
						super(),
							this.D(
								g.registerEditor(
									"*",
									{
										id: w.$b1.id,
										label: w.$b1.displayName,
										detail: w.$b1.providerDisplayName,
										priority: d.RegisteredEditorPriority.builtin,
									},
									{},
									{
										createInlineMultiDiffEditorInput: (o) => ({
											editor: p.createInstance(
												C.$$Zc,
												o.label,
												o.resources,
												void 0,
											),
										}),
									},
								),
							);
					}
				};
				h = Ne([j(0, d.$E6), j(1, m.$Li)], h);
				class c {
					canSerialize(g) {
						return !1;
					}
					serialize(g) {}
					deserialize(g, p) {}
				}
				t.$Io
					.as(u.Extensions.Workbench)
					.registerWorkbenchContribution(h, a.LifecyclePhase.Restored),
					t.$Io.as(w.$a1.EditorFactory).registerEditorSerializer(C.$$Zc.ID, c);
			},
		),
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
		define(
			de[4215],
			he([
				1, 0, 2, 2, 13, 4214, 36, 33, 56, 17, 64, 307, 35, 54, 156, 860, 2, 215,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$DZc = f),
					(o = mt(o));
				function f() {
					console.log("creating floatingsemanticsearchpicker");
					const b = (0, C.$odc)(),
						s = b.semSearchService,
						l = b.repositoryService,
						y = b.codeEditorService,
						$ = b.workspaceContextService,
						[v, S] = (0, w.createSignal)(0),
						[I, T] = (0, w.createSignal)(0),
						[P, k] = (0, w.createSignal)([]),
						[L, D] = (0, w.createSignal)(),
						[M, N] = (0, w.createSignal)([]),
						[A, R] = (0, w.createSignal)(),
						O = (H) => {
							N((V) =>
								V.filter((K) =>
									K.query.split(" ").length === H.split(" ").length ||
									K.startTime < Date.now() - 2e3
										? (K.abortC.abort(), !1)
										: !0,
								),
							);
						},
						B = (H, q) => {
							A()?.editor !== H && U(A()?.editor),
								H.changeDecorations((V) => {
									const G = [],
										K = A();
									K?.editor === H &&
										(G.push(K.overviewRulerDecorationId),
										G.push(K.rangeHighlightId));
									const J = [
											{
												range: q,
												options: {
													description: "quick-access-range-highlight",
													className: "rangeHighlight",
													isWholeLine: !0,
												},
											},
											{
												range: q,
												options: {
													description: "quick-access-range-highlight-overview",
													overviewRuler: {
														color: (0, h.$jP)(a.$8T),
														position: u.OverviewRulerLane.Full,
													},
												},
											},
										],
										[W, X] = V.deltaDecorations(G, J);
									R({
										editor: H,
										rangeHighlightId: W,
										overviewRulerDecorationId: X,
									});
								});
						},
						U = (H) => {
							const q = A();
							q?.editor === H &&
								(H?.changeDecorations((V) => {
									q &&
										V.deltaDecorations(
											[q.overviewRulerDecorationId, q.rangeHighlightId],
											[],
										);
								}),
								R(void 0));
						},
						z = async (H) => {
							L()?.cancel();
							const q = new d.$Ce();
							if ((D(q), H.length === 0)) {
								k([]);
								return;
							}
							O(H);
							try {
								const V = new AbortController();
								N((ne) => [
									...ne,
									{ abortC: V, query: H, startTime: Date.now() },
								]);
								const G = s.state.selectedFile;
								let K;
								if (G) {
									const ne = $.asRelativePath(G);
									K = o.$Pk({ globsNewLineSeparated: ne });
								}
								const J = performance.now(),
									W = await l.searchNewLocalFast(H, 30, {
										globFilter: K,
										raceNRequests: 10,
										abortSignal: V.signal,
									}),
									X = performance.now();
								console.log("search time:", X - J);
								const Y = new Map();
								W.forEach((ne) => {
									const ee = ne.codeResult,
										{ codeBlock: _ } = ee;
									if (!_ || !_.range) return;
									const te = _.relativeWorkspacePath,
										Q = _.range &&
											_.range.startPosition &&
											_.range.endPosition && {
												startLineNumber: _.range.startPosition.line,
												endLineNumber: _.range.endPosition.line,
											};
									if (Q === void 0) return;
									const Z = ee.score,
										se = Y.get(te);
									se
										? (se.subItems.push({ range: Q, score: Z }),
											(se.maxScore = Math.max(se.maxScore, Z)))
										: Y.set(te, {
												subItems: [{ range: Q, score: Z }],
												maxScore: Z,
											});
								});
								const ie = Array.from(Y.entries())
									.sort((ne, ee) => ee[1].maxScore - ne[1].maxScore)
									.map(([ne, { subItems: ee }]) => ({
										id: ne,
										item: {
											relativeWorkspacePath: ne,
											subItems: ee
												.sort((_, te) => te.score - _.score)
												.slice(0, 5),
										},
										render: (_, te) => ({
											title: (0, c.$sc)(_.relativeWorkspacePath),
											subtitle: _.relativeWorkspacePath,
											isAdded: !1,
											icon: (0, i.createComponent)(n.$k$b, {
												get fileName() {
													return (0, c.$sc)(_.relativeWorkspacePath);
												},
												workspaceContextService: $,
												get modelService() {
													return b.modelService;
												},
												get languageService() {
													return b.languageService;
												},
											}),
											subItemIndicators: {
												count: _.subItems.length,
												selectedIndex: te ?? 0,
											},
										}),
										renderPreview: (_) =>
											(0, g.$7bc)(
												$.resolveRelativePath(_.relativeWorkspacePath),
											),
									}));
								k(ie), console.log("ITEMS:", ie);
							} catch (V) {
								console.error("Error searching:", V), k([]);
							}
						},
						F = async (H, q) => {
							try {
								const V = $.resolveRelativePath(H.relativeWorkspacePath),
									K = (
										await b.editorService.openEditor({
											resource: V,
											options: { preserveFocus: !0, revealIfVisible: !0 },
										})
									)?.getControl();
								if ((0, m.$0sb)(K)) {
									const J = r.$iL.lift({
										startLineNumber: q.range.startLineNumber,
										startColumn: 1,
										endLineNumber: q.range.endLineNumber,
										endColumn: 1,
									});
									K.revealRangeInCenter(J, 1), B(K, J);
								}
							} catch (V) {
								console.error("Error opening file:", V);
							}
						},
						x = async (H, q) => {
							try {
								const V = $.resolveRelativePath(H.relativeWorkspacePath),
									K = (
										await b.editorService.openEditor({
											resource: V,
											options: { preserveFocus: !1, revealIfVisible: !0 },
										})
									)?.getControl();
								if ((0, m.$0sb)(K)) {
									const J = r.$iL.lift({
										startLineNumber: q.range.startLineNumber,
										startColumn: 1,
										endLineNumber: q.range.endLineNumber,
										endColumn: 1,
									});
									K.revealRangeInCenter(J, 1), B(K, J);
								}
							} catch (V) {
								console.error("Error opening file:", V);
							}
							s.hide(), U(A()?.editor);
						};
					return (
						(0, w.onCleanup)(() => {
							console.log("CLEANUP"), U(A()?.editor);
						}),
						(0, i.createComponent)(p.Portal, {
							get mount() {
								return b.portalElement;
							},
							get children() {
								return (0, i.createComponent)(E.$CZc, {
									get placeholder() {
										return (0, t.memo)(() => s.state.selectedFile === void 0)()
											? "Search codebase"
											: "Search in " +
													(0, c.$sc)($.asRelativePath(s.state.selectedFile));
									},
									get codeSelection() {
										return s.state.codeSelection;
									},
									position: { x: 0, y: 0 },
									close: () => {
										U(A()?.editor), s.hide();
									},
									nonBlockingRoot: ".statusbar",
									get items() {
										return P();
									},
									onItemAdd: x,
									onItemRemove: (H) => {},
									onSearch: z,
									get selectedIndexY() {
										return v();
									},
									get selectedIndexX() {
										return I();
									},
									setSelectedIndexY: S,
									setSelectedIndexX: T,
									onActiveItemChange: F,
									style: {
										position: "fixed",
										bottom: "10px",
										left: "50%",
										transform: "translateX(-50%)",
										width: "400px",
										"max-width": "90vw",
										"z-index": 2500,
									},
									height: 200,
								});
							},
						})
					);
				}
			},
		),
		