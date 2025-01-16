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
		