define(de[4204], he([1, 0, 2, 36, 1981]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$yDc = E);
			function E(C, d, m, r) {
				return (0, i.$ndc)(
					() =>
						(0, t.createComponent)(w.$uDc, {
							contextPaneData: m,
							setContextPaneData: r,
						}),
					C,
					d,
				);
			}
		}),
		define(
			de[4205],
			he([
				1, 0, 7, 203, 195, 3, 10, 8, 49, 5, 39, 41, 32, 35, 146, 60, 1713, 1714,
				4204, 1347, 21, 72, 2380,
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
			) {
				"use strict";
				var y;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zDc = void 0),
					(t = mt(t));
				let $ = class extends n.$TMb {
					static {
						y = this;
					}
					static {
						this.Id = p.IAIContextPaneConstants.VIEW_ID;
					}
					constructor(S, I, T, P, k, L, D, M, N, A, R, O, B) {
						super(S, L, M, k, D, P, I, N, A, R, B),
							(this.m = I),
							(this.n = T),
							(this.a = new E.$Zc()),
							(this.b = new E.$Zc()),
							(this.c = new E.$Zc()),
							(this.g = new E.$2c()),
							([this.h, this.j] = (0, o.$lDc)(
								this.n,
								this.experimentalIndexStorageId,
							)),
							this.a.add(
								this.onDidChangeBodyVisibility((U) => {
									this.j("isVisible", U);
								}),
							);
					}
					get experimentalIndexStorageId() {
						return y.Id + ".experimental-index.data";
					}
					dispose() {
						this.a.dispose(),
							this.c.dispose(),
							this.b.dispose(),
							this.g.dispose(),
							this.f?.dispose(),
							this.r?.dispose(),
							super.dispose();
					}
					focus() {
						super.focus();
					}
					W(S) {
						super.W(S),
							(this.s = t.$(".aichat-aicontext")),
							(this.s.tabIndex = 0),
							(this.s.style.outline = "none"),
							this.s.setAttribute("role", "list"),
							(this.r = new i.$8hb(this.s, {
								alwaysConsumeMouseWheel: !0,
								horizontal: w.ScrollbarVisibility.Hidden,
								vertical: w.ScrollbarVisibility.Visible,
							})),
							S.appendChild(this.r.getDomNode()),
							(this.f = (0, f.$yDc)(this.s, this.m, this.h, this.j));
					}
					X(S, I) {
						super.X(S, I),
							this.s &&
								((this.s.style.height = `${S}px`),
								(this.s.style.width = `${I}px`)),
							this.r?.scanDomNode();
					}
					serializedState() {
						return {
							experimentalIndexId: this.h.experimentalIndexId,
							files: this.h.files.map((S) => ({ ...S })),
						};
					}
					saveState() {
						this.n.store(
							this.experimentalIndexStorageId,
							this.serializedState(),
							s.StorageScope.WORKSPACE,
							s.StorageTarget.MACHINE,
						);
					}
				};
				(e.$zDc = $),
					(e.$zDc =
						$ =
						y =
							Ne(
								[
									j(1, r.$Li),
									j(2, s.$lq),
									j(3, g.$K1),
									j(4, C.$gj),
									j(5, u.$uZ),
									j(6, d.$6j),
									j(7, m.$Xxb),
									j(8, a.$7rb),
									j(9, c.$iP),
									j(10, h.$km),
									j(11, b.$Y9b),
									j(12, l.$Uyb),
								],
								$,
							));
			},
		),
		define(
			de[1375],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 3001, 272, 312, 9, 36, 41, 195, 135,
				1791, 252, 19, 325, 54, 22, 47, 134, 2383,
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
					(e.$9$b = O),
					(e.$0$b = B),
					(e.$$$b = U);
				const I = (0, t.template)("<div><div></div><div><div>"),
					T = (0, t.template)(
						"<div><div>There was an error in retrieving the results, please try again.",
					),
					P = (0, t.template)(
						"<div><span>Reranking results from...</span><div>",
					),
					k = (0, t.template)("<div>"),
					L = (0, t.template)("<div><div>Searching...</div><style>"),
					D = (0, t.template)("<div><div>"),
					M = 0.3,
					N = 0.05;
				function A() {
					let z = "abcdefghijklmnopqrstuvwxyz",
						F = "";
					for (let x = 0; x < 10; x++)
						F += z.charAt(Math.floor(Math.random() * z.length));
					return F;
				}
				function R(z) {
					let F;
					const [x, H] = (0, r.createSignal)(),
						[q, V] = (0, r.createSignal)(),
						[G, K] = (0, r.createSignal)(void 0),
						J = (0, n.$odc)();
					let W;
					return (
						(0, r.createEffect)(async () => {
							let X = [];
							if (!F) return;
							const Y = J.instantiationService.createInstance(
								h.$X0b,
								F,
								h.$X0b.getEditorOptions(J.configurationService),
								{},
							);
							Y && X.push(Y);
							const ie = J.workspaceContextService.resolveRelativePath(
									z.result.codeBlock?.relativeWorkspacePath ?? "",
								),
								ne = (0, g.$8rb)(ie, {
									startLineNumber:
										z.result.codeBlock?.range?.startPosition?.line || 1,
									startColumn:
										z.result.codeBlock?.range?.startPosition?.column || 1,
									endLineNumber:
										z.result.codeBlock?.range?.endPosition?.line || 1,
									endColumn:
										z.result.codeBlock?.range?.endPosition?.column || 1,
								});
							H(ne);
							const ee = c.URI.file(`aisearch-code-block-anysphere://${A()}`),
								_ = J.modelService.createModel(
									z.result.codeBlock?.contents ?? "",
									J.languageService.createByFilepathOrFirstLine(ie),
									ee,
									!1,
								);
							_ && X.push(_), Y?.setModel(_);
							let te = 0;
							const Q = (se) => {
									if (!Y) return;
									const re = Y.getDomNode();
									if (!re) return;
									const le = 19,
										oe = Y.getModel()?.getLineCount() || 1,
										ae = Y.getTopForLineNumber(oe + 1) + le + 10;
									(te !== ae || se) &&
										((te = ae), (re.style.height = `${ae}px`), Y.layout());
								},
								Z = Y?.onDidChangeModelDecorations(() => {
									Q(!1);
								});
							Z && X.push(Z),
								(0, r.createEffect)(() => {
									z.searchPaneData.isVisible && Q(!0);
								}),
								(0, r.onCleanup)(() => {
									X.forEach((se) => se.dispose());
								});
						}),
						(0, r.createEffect)(() => {
							const X = new a.$Uu({
									file: {
										relativeWorkspacePath:
											z.result.codeBlock?.relativeWorkspacePath,
									},
								}),
								Y = {
									startLine:
										z.result.codeBlock?.range?.startPosition?.line || 1,
									endLine: z.result.codeBlock?.range?.endPosition?.line || 1,
								};
							V(X), K(Y);
						}),
						(() => {
							const X = I(),
								Y = X.firstChild,
								ie = Y.nextSibling,
								ne = ie.firstChild,
								ee = W;
							typeof ee == "function" ? (0, m.use)(ee, X) : (W = X),
								X.style.setProperty("width", "100%"),
								X.style.setProperty("padding-bottom", "12px"),
								Y.style.setProperty("width", "100%"),
								Y.style.setProperty("word-break", "break-all"),
								Y.style.setProperty("font-size", "11px"),
								(0, C.insert)(
									Y,
									(0, d.createComponent)(r.Show, {
										get when() {
											return q() !== void 0;
										},
										get children() {
											return (0, d.createComponent)(B, {
												get index() {
													return z.index;
												},
												get children() {
													return (0, d.createComponent)(U, {
														style: { cursor: "pointer" },
														class: "hoverable",
														get uri() {
															return J.workspaceContextService.resolveRelativePath(
																q().file?.relativeWorkspacePath ?? "",
															);
														},
														get lines() {
															return G();
														},
														onClick: () => {
															const te = x();
															if (te) return J.openerService.open(te);
														},
													});
												},
											});
										},
									}),
								),
								ie.style.setProperty("width", "100%"),
								ie.style.setProperty("box-sizing", "border-box"),
								ie.style.setProperty("position", "relative"),
								ie.style.setProperty("border-color", "#aaaaaa44"),
								ie.style.setProperty("border-width", "1px"),
								ie.style.setProperty("border-style", "solid"),
								ie.style.setProperty("padding", "12px 12px");
							const _ = F;
							return (
								typeof _ == "function" ? (0, m.use)(_, ne) : (F = ne),
								ne.style.setProperty("width", "100%"),
								ne.style.setProperty("box-sizing", "border-box"),
								X
							);
						})()
					);
				}
				function O(z) {
					const F = (0, n.$odc)(),
						[x, H] = (0, r.createSignal)(!1),
						q = F.repositoryService;
					(0, r.createEffect)(() => {
						H(F.cursorAuthenticationService.isAuthenticated()),
							F.cursorAuthenticationService.addLoginChangedListener(H);
					});
					const [V, G] = (0, r.createSignal)([]),
						[K, J] = (0, r.createSignal)(!1),
						[W, X] = (0, r.createSignal)(!1),
						[Y, ie] = (0, r.createSignal)([]),
						ne = (0, r.createMemo)(() =>
							F.repositoryService.isIndexedMainLocalRepository(),
						),
						ee = new p.$KK({ stickyScrollVertical: "down", ...(0, o.$x0b)() });
					(0, r.createEffect)(() => {
						V().length > 0 &&
							setTimeout(() => {
								ee.setScrollPositionNow({ scrollTop: 0 });
							}, 5);
					});
					const _ = (0, r.createMemo)(() => async (te, Q, Z) => {
						J(!0), ie([]), X(!1), G([]);
						try {
							if (ne() && Q)
								if (Z) {
									const se = await F.aiService.rerankSearch(
										te,
										200,
										50,
										S.SearchType.vector,
									);
									return (
										ie(se.origResults.slice(0, 17)), await se.rerankedResults
									);
								} else
									return await F.repositoryService.parallelSearch(te, 200, 50);
							else if (Z) {
								const se = await F.aiService.rerankSearch(
									te,
									16,
									40,
									S.SearchType.keyword,
								);
								return ie(se.origResults), await se.rerankedResults;
							} else {
								const se = await F.keywordSearchService.search(te, 16);
								ie(se);
								const re = new f.$M6b();
								return se
									.map(({ score: le, file: oe }) =>
										re
											.getFileChunks(oe?.contents ?? "")
											.map(
												(pe) =>
													new a.$Tu({
														score: le,
														codeBlock: {
															relativeWorkspacePath: oe?.relativeWorkspacePath,
															contents: pe.contents,
															range: pe.range,
														},
													}),
											),
									)
									.flat()
									.slice(0, 40);
							}
						} catch (se) {
							throw (X(!0), se);
						} finally {
							J(!1);
						}
					});
					return (0, d.createComponent)(o.$w0b, {
						style: { width: "100%", height: "100%" },
						scrollingDirection: "vertical",
						scrollable: ee,
						class: "show-file-icons",
						get children() {
							return [
								(0, d.createComponent)(u.$8$b, {
									placeholder: "Search semantically",
									get delegate() {
										return z.searchPaneData.inputBoxDelegate;
									},
									onSubmit: (te, Q = !0, Z = !0) => {
										_()(te, Q, Z)
											.then((se) => {
												const re = new Map(),
													le = [],
													oe = [];
												se.forEach((ae) => {
													const pe = ae.codeBlock?.relativeWorkspacePath ?? "",
														$e = re.get(pe);
													$e
														? $e.length < 2
															? (re.set(pe, [...$e, ae]), le.push(ae))
															: oe.push(ae)
														: (re.set(pe, [ae]), le.push(ae));
												}),
													G([...le, ...oe]);
											})
											.catch(console.error);
									},
								}),
								(() => {
									const te = k();
									return (
										te.style.setProperty("padding", "16px 16px"),
										te.style.setProperty("display", "flex"),
										te.style.setProperty("flex-direction", "column"),
										(0, C.insert)(
											te,
											(0, d.createComponent)(r.Switch, {
												get children() {
													return [
														(0, d.createComponent)(r.Match, {
															get when() {
																return W();
															},
															get children() {
																const Q = T(),
																	Z = Q.firstChild;
																return (
																	Q.style.setProperty("display", "flex"),
																	Q.style.setProperty(
																		"justify-content",
																		"center",
																	),
																	Q.style.setProperty("align-items", "center"),
																	Q.style.setProperty("width", "100%"),
																	Q.style.setProperty("height", "100%"),
																	Z.style.setProperty("font-size", "16px"),
																	Z.style.setProperty(
																		"color",
																		"var(--vscode-foreground)",
																	),
																	Q
																);
															},
														}),
														(0, d.createComponent)(r.Match, {
															get when() {
																return K();
															},
															get children() {
																return (0, d.createComponent)(r.Show, {
																	get when() {
																		return Y().length > 0;
																	},
																	get fallback() {
																		return (() => {
																			const Q = L(),
																				Z = Q.firstChild;
																			return (
																				Q.style.setProperty("display", "flex"),
																				Q.style.setProperty(
																					"justify-content",
																					"center",
																				),
																				Q.style.setProperty(
																					"align-items",
																					"center",
																				),
																				Q.style.setProperty("width", "100%"),
																				Q.style.setProperty("height", "100%"),
																				Z.style.setProperty(
																					"font-size",
																					"16px",
																				),
																				Z.style.setProperty(
																					"color",
																					"var(--vscode-foreground)",
																				),
																				Z.style.setProperty(
																					"animation",
																					"loadingAnimation 1.5s infinite",
																				),
																				Q
																			);
																		})();
																	},
																	get children() {
																		const Q = P(),
																			Z = Q.firstChild,
																			se = Z.nextSibling;
																		return (
																			Z.style.setProperty(
																				"padding-bottom",
																				"16px",
																			),
																			Z.style.setProperty("font-size", "16px"),
																			Z.style.setProperty(
																				"color",
																				"var(--vscode-foreground)",
																			),
																			Z.style.setProperty(
																				"text-align",
																				"center",
																			),
																			Z.style.setProperty("display", "block"),
																			(0, C.insert)(
																				se,
																				(0, d.createComponent)(r.For, {
																					get each() {
																						return Y();
																					},
																					children: (re, le) =>
																						(0, d.createComponent)(B, {
																							get index() {
																								return le();
																							},
																							get children() {
																								return (0, d.createComponent)(
																									U,
																									{
																										get uri() {
																											return F.workspaceContextService.resolveRelativePath(
																												re.file
																													?.relativeWorkspacePath ??
																													"",
																											);
																										},
																									},
																								);
																							},
																						}),
																				}),
																			),
																			(0, E.effect)(() =>
																				`loadingAnimation 1.5s infinite ${Y().length * N + M}s` !=
																				null
																					? Z.style.setProperty(
																							"animation",
																							`loadingAnimation 1.5s infinite ${Y().length * N + M}s`,
																						)
																					: Z.style.removeProperty("animation"),
																			),
																			Q
																		);
																	},
																});
															},
														}),
														(0, d.createComponent)(r.Match, {
															get when() {
																return !K();
															},
															get children() {
																return (0, d.createComponent)(r.Index, {
																	get each() {
																		return V();
																	},
																	children: (Q, Z) =>
																		(0, d.createComponent)(R, {
																			get result() {
																				return Q();
																			},
																			index: Z,
																			get searchPaneData() {
																				return z.searchPaneData;
																			},
																		}),
																});
															},
														}),
													];
												},
											}),
										),
										te
									);
								})(),
							];
						},
					});
				}
				function B(z) {
					return (() => {
						const F = k();
						return (
							(0, C.insert)(F, () => z.children),
							(0, E.effect)(() =>
								`fadeIn ${M}s ${z.index * N}s both` != null
									? F.style.setProperty(
											"animation",
											`fadeIn ${M}s ${z.index * N}s both`,
										)
									: F.style.removeProperty("animation"),
							),
							F
						);
					})();
				}
				function U(z) {
					let F;
					const x = (0, n.$odc)(),
						H = (0, r.createMemo)(() => (0, y.$sc)(z.uri.fsPath)),
						q = (0, r.createMemo)(() =>
							x.workspaceContextService.asRelativePath((0, s.$mh)(z.uri)),
						);
					return (
						(0, r.createEffect)(() => {
							const V = (0, v.$9g)();
							let G;
							if (F) {
								G = new l.$Xob(F, {
									supportHighlights: !0,
									supportIcons: !0,
									supportDescriptionHighlights: !0,
								});
								let K = H();
								z.lines !== void 0 &&
									(K += `:${z.lines.startLine}-${z.lines.endLine}`),
									G.setLabel(K, q(), {
										hideIcon: !1,
										descriptionTitle: q(),
										extraClasses: (0, b.$BDb)(
											x.modelService,
											x.languageService,
											z.uri,
											$.FileKind.FILE,
										),
									});
							}
							(0, r.onCleanup)(() => {
								G && G.dispose();
							});
						}),
						(() => {
							const V = D(),
								G = V.firstChild;
							V.addEventListener("click", (J) =>
								z.onClick ? z.onClick(J) : void 0,
							);
							const K = F;
							return (
								typeof K == "function" ? (0, m.use)(K, G) : (F = G),
								G.style.setProperty("flex-grow", "1"),
								G.style.setProperty("min-width", "0px"),
								(0, C.insert)(V, () => z.rightElement, null),
								(0, E.effect)(
									(J) => {
										const W = z.class,
											X = {
												...(typeof z.style == "object" ? z.style : {}),
												display: "flex",
												"flex-direction": "row",
												"align-items": "center",
											};
										return (
											W !== J._v$ && (0, w.className)(V, (J._v$ = W)),
											(J._v$2 = (0, i.style)(V, X, J._v$2)),
											J
										);
									},
									{ _v$: void 0, _v$2: void 0 },
								),
								V
							);
						})()
					);
				}
			},
		),
		define(
			de[4206],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 9, 23, 26, 14, 135, 36, 177]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerInputImages = l);
				const p = (0, t.template)("<div>"),
					o = (0, t.template)('<div class="input-box-code-selection">'),
					f = (0, t.template)('<span title="Remove image">'),
					b = (0, t.template)("<div><img>"),
					s = 20;
				function l(y) {
					const $ = (0, n.$odc)(),
						{ composerDataService: v } = $,
						{ currentComposer: S } = (0, g.useComposerDataHandle)(
							() => y.composerDataHandle,
						),
						I = (0, m.createMemo)(() => S().context.selectedImages || []),
						T = (0, m.createMemo)(() =>
							I().map((P) => {
								const k = r.URI.file(P.path);
								return u.$7g.uriToBrowserUri(k).toString();
							}),
						);
					return (0, d.createComponent)(m.Show, {
						get when() {
							return I().length > 0;
						},
						get children() {
							const P = o();
							return (
								P.style.setProperty("position", "relative"),
								P.style.setProperty("border-radius", "4px"),
								P.style.setProperty("overflow", "hidden"),
								P.style.setProperty("margin-bottom", "0.25rem"),
								P.style.setProperty("box-sizing", "border-box"),
								P.style.setProperty("-webkit-app-region", "no-drag"),
								P.style.setProperty("flex-shrink", "0"),
								(0, C.insert)(
									P,
									(0, d.createComponent)(c.$w0b, {
										scrollingDirection: "horizontal",
										style: { width: "100%", height: "100%" },
										innerContainerStyle: { height: "100%" },
										nonReactiveElementOptions: { verticalScrollbarSize: 0 },
										get children() {
											const k = p();
											return (
												k.style.setProperty("display", "flex"),
												k.style.setProperty("gap", "0.25rem"),
												k.style.setProperty("padding", "0.25rem"),
												k.style.setProperty("box-sizing", "border-box"),
												k.style.setProperty("height", "140px"),
												(0, C.insert)(
													k,
													(0, d.createComponent)(m.For, {
														get each() {
															return I();
														},
														children: (L, D) => {
															const [M, N] = (0, m.createSignal)(!1);
															let A;
															return (() => {
																const R = b(),
																	O = R.firstChild;
																return (
																	R.addEventListener("mouseout", () => {
																		A = setTimeout(() => {
																			N(!1);
																		}, s);
																	}),
																	R.addEventListener("mouseover", () => {
																		A && (clearTimeout(A), (A = void 0)), N(!0);
																	}),
																	R.style.setProperty("position", "relative"),
																	R.style.setProperty("flex-shrink", "0"),
																	R.style.setProperty("height", "100%"),
																	R.style.setProperty("width", "auto"),
																	R.style.setProperty("display", "flex"),
																	R.style.setProperty("align-items", "center"),
																	R.style.setProperty(
																		"justify-content",
																		"center",
																	),
																	R.style.setProperty(
																		"background-color",
																		"var(--vscode-editor-background)",
																	),
																	R.style.setProperty("border-radius", "4px"),
																	R.style.setProperty("overflow", "hidden"),
																	O.style.setProperty("height", "100%"),
																	O.style.setProperty("width", "auto"),
																	O.style.setProperty("object-fit", "contain"),
																	(0, C.insert)(
																		R,
																		(0, d.createComponent)(m.Show, {
																			get when() {
																				return M();
																			},
																			get children() {
																				const B = f();
																				return (
																					B.addEventListener("click", (U) => {
																						U.stopPropagation(),
																							y.onRemove(D());
																					}),
																					B.style.setProperty(
																						"position",
																						"absolute",
																					),
																					B.style.setProperty("top", "0.25rem"),
																					B.style.setProperty(
																						"right",
																						"0.25rem",
																					),
																					B.style.setProperty(
																						"font-size",
																						"1em",
																					),
																					B.style.setProperty("z-index", "1"),
																					B.style.setProperty(
																						"background",
																						"var(--vscode-editorWidget-border)",
																					),
																					B.style.setProperty(
																						"border-radius",
																						"3px",
																					),
																					B.style.setProperty(
																						"cursor",
																						"pointer",
																					),
																					B.style.setProperty("width", "16px"),
																					B.style.setProperty("height", "16px"),
																					B.style.setProperty(
																						"display",
																						"flex",
																					),
																					B.style.setProperty(
																						"align-items",
																						"center",
																					),
																					B.style.setProperty(
																						"justify-content",
																						"center",
																					),
																					(0, E.effect)(() =>
																						(0, w.className)(
																							B,
																							a.ThemeIcon.asClassName(
																								h.$ak.close,
																							),
																						),
																					),
																					B
																				);
																			},
																		}),
																		null,
																	),
																	(0, E.effect)(
																		(B) => {
																			const U = `${T()[D()]}?t=${L.loadedAt}`,
																				z = `Composer Image ${D() + 1}`;
																			return (
																				U !== B._v$ &&
																					(0, i.setAttribute)(
																						O,
																						"src",
																						(B._v$ = U),
																					),
																				z !== B._v$2 &&
																					(0, i.setAttribute)(
																						O,
																						"alt",
																						(B._v$2 = z),
																					),
																				B
																			);
																		},
																		{ _v$: void 0, _v$2: void 0 },
																	),
																	R
																);
															})();
														},
													}),
												),
												k
											);
										},
									}),
								),
								P
							);
						},
					});
				}
			},
		),
		define(
			de[861],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 160, 792, 262, 696, 1070, 422, 135, 693,
				216,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerSearchToolCallBlock = y);
				const f = (0, t.template)("<div>"),
					b = (0, t.template)("<div><div>"),
					s = (0, t.template)("<div>Empty search results");
				function l() {
					var $ =
							typeof SuppressedError == "function"
								? SuppressedError
								: function (T, P) {
										var k = Error();
										return (
											(k.name = "SuppressedError"),
											(k.error = T),
											(k.suppressed = P),
											k
										);
									},
						v = {},
						S = [];
					function I(T, P) {
						if (P != null) {
							if (Object(P) !== P)
								throw new TypeError(
									"using declarations can only be used with objects, functions, null, or undefined.",
								);
							if (T)
								var k =
									P[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
							if (
								k === void 0 &&
								((k = P[Symbol.dispose || Symbol.for("Symbol.dispose")]), T)
							)
								var L = k;
							if (typeof k != "function")
								throw new TypeError("Object is not disposable.");
							L &&
								(k = function () {
									try {
										L.call(P);
									} catch (D) {
										return Promise.reject(D);
									}
								}),
								S.push({ v: P, d: k, a: T });
						} else T && S.push({ d: P, a: T });
						return P;
					}
					return {
						e: v,
						u: I.bind(null, !1),
						a: I.bind(null, !0),
						d: function () {
							var T,
								P = this.e,
								k = 0;
							function L() {
								for (; (T = S.pop()); )
									try {
										if (!T.a && k === 1)
											return (k = 0), S.push(T), Promise.resolve().then(L);
										if (T.d) {
											var M = T.d.call(T.v);
											if (T.a) return (k |= 2), Promise.resolve(M).then(L, D);
										} else k |= 1;
									} catch (N) {
										return D(N);
									}
								if (k === 1)
									return P !== v ? Promise.reject(P) : Promise.resolve();
								if (P !== v) throw P;
							}
							function D(M) {
								return (P = P !== v ? new $(M, P) : M), L();
							}
							return L();
						},
					};
				}
				function y($) {
					try {
						var v = l();
						const S = v.u((0, o.span)("ComposerSearchToolCallBlock")),
							[I, T] = (0, a.createSignal)(!1),
							[P, k] = (0, a.createSignal)(void 0),
							[L, D] = (0, a.createSignal)(null),
							[M, N] = (0, a.createSignal)(null),
							{ showHover: A, hideHover: R } = (0, n.$z$b)(500);
						(0, m.createEffect)(() => {
							const F = L();
							F &&
								setTimeout(() => {
									k(F.clientHeight);
								});
						});
						const O = (0, p.$A$b)(M),
							B = () => O().width > 240,
							U = (F) =>
								(() => {
									const x = b(),
										H = x.firstChild;
									return (
										(0, d.addEventListener)(x, "mouseleave", R),
										x.addEventListener("mouseenter", z),
										x.style.setProperty("display", "flex"),
										x.style.setProperty("align-items", "center"),
										x.style.setProperty("width", "100%"),
										x.style.setProperty("min-width", "0"),
										x.style.setProperty("font-style", "italic"),
										(0, E.insert)(
											x,
											(0, w.createComponent)(m.Show, {
												get when() {
													return $.searchContext;
												},
												get children() {
													const q = f();
													return (
														q.style.setProperty("text-overflow", "ellipsis"),
														q.style.setProperty("overflow", "hidden"),
														q.style.setProperty("white-space", "nowrap"),
														q.style.setProperty(
															"color",
															"var(--vscode-descriptionForeground)",
														),
														(0, E.insert)(q, () =>
															$.searchContext ? `${$.searchContext}` : "",
														),
														q
													);
												},
											}),
											H,
										),
										H.style.setProperty("flex-shrink", "0"),
										H.style.setProperty("margin-left", "4px"),
										(0, E.insert)(
											H,
											(0, w.createComponent)(m.Show, {
												get when() {
													return $.searchContext;
												},
												children: "\u2022 ",
											}),
											null,
										),
										(0, E.insert)(
											H,
											() =>
												$.resultCountText?.($.results.length) ??
												`${$.results.length} ${$.results.length === 1 ? "result" : "results"}`,
											null,
										),
										x
									);
								})(),
							z = (F) => {
								A({
									content: $.searchContext || "",
									target: F.currentTarget,
									position: { hoverPosition: r.HoverPosition.ABOVE },
									appearance: { compact: !0 },
								});
							};
						return (0, w.createComponent)(u.ComposerToolCallBlockContainer, {
							get children() {
								return (0, w.createComponent)(h.$Zcc, {
									setContainerRef: N,
									get isOpen() {
										return I();
									},
									get title() {
										return (() => {
											const F = f();
											return (
												F.style.setProperty("display", "flex"),
												F.style.setProperty("align-items", "center"),
												F.style.setProperty("gap", "4px"),
												F.style.setProperty("flex-shrink", "0"),
												F.style.setProperty("white-space", "nowrap"),
												(0, E.insert)(
													F,
													(() => {
														const x = (0, C.memo)(() => !!$.statusText);
														return () =>
															x()
																? $.statusText($.isLoading)
																: $.isLoading
																	? "Searching codebase..."
																	: "Searched codebase";
													})(),
												),
												F
											);
										})();
									},
									get description() {
										return (0, C.memo)(() => !!(B() && !$.isLoading))()
											? U($.results.length)
											: void 0;
									},
									get isLoading() {
										return $.isLoading;
									},
									setIsOpen: T,
									get children() {
										const F = f();
										return (
											(0, E.insert)(
												F,
												(0, w.createComponent)(m.Show, {
													get when() {
														return $.results.length > 0;
													},
													get fallback() {
														return (() => {
															const x = s();
															return (
																x.style.setProperty("font-style", "italic"),
																x.style.setProperty(
																	"color",
																	"var(--vscode-input-placeholderForeground)",
																),
																x.style.setProperty("padding", "4px"),
																x
															);
														})();
													},
													get children() {
														return (0, w.createComponent)(g.$w0b, {
															style: { height: "100%", overflow: "hidden" },
															contentStyle: {
																display: "flex",
																"flex-direction": "column",
																"align-items": "center",
															},
															innerContainerStyle: { "min-height": "unset" },
															scrollingDirection: "vertical",
															get children() {
																return (0, w.createComponent)(c.$1cc, {
																	setContainerRef: D,
																	get files() {
																		return $.results.map((x) => ({
																			uri: x.uri,
																			onClick: () => $.onResultClick(x),
																			...$.formatResult(x),
																		}));
																	},
																	variant: "compact",
																	style: { "border-radius": "0px" },
																});
															},
														});
													},
												}),
											),
											(0, i.effect)(() =>
												($.results.length > 0
													? Math.min($.maxHeight ?? 200, P() ?? 0) + "px"
													: "auto") != null
													? F.style.setProperty(
															"height",
															$.results.length > 0
																? Math.min($.maxHeight ?? 200, P() ?? 0) + "px"
																: "auto",
														)
													: F.style.removeProperty("height"),
											),
											F
										);
									},
								});
							},
						});
					} catch (S) {
						v.e = S;
					} finally {
						v.d();
					}
				}
			},
		),
		