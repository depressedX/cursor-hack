define(de[4197], he([1, 0, 2, 4196, 36]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Jzc = void 0);
			const E = (C, d) =>
				(0, w.$ndc)(() => (0, t.createComponent)(i.$Izc, {}), C, d);
			e.$Jzc = E;
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[4198],
		he([
			1, 0, 2, 2, 2, 2, 2, 13, 54, 156, 295, 36, 1046, 41, 2994, 135, 26, 14,
			2367,
		]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$tzc = void 0),
				(n = xi(n));
			const f = (0, t.template)("<div>"),
				b = (0, t.template)(
					'<div><div><input placeholder="Search for a file or symbol">',
				),
				s = (0, t.template)("<span><span>Loading"),
				l = (0, t.template)(
					'<div><div class="semantic-search-item-group"><div></div><div></div><div class="semantic-search-item-text"><span></span><span>',
				),
				y = (0, t.template)('<div class="semantic-search-item">'),
				$ = () => {
					const T = (0, a.$odc)(),
						[P, k] = (0, d.createSignal)([]),
						[L, D] = (0, d.createSignal)(!1),
						[M, N] = (0, d.createSignal)(null),
						A = async (R, O = 50) => {
							console.time("doSearch - Total Time"),
								D(!0),
								console.time("Repository Search Time");
							const B = await T.repositoryService.searchNewLocal(R, O);
							console.timeEnd("Repository Search Time"),
								console.time("BM25 Calculation Time");
							const z = new n.default(
								B.map(
									(ne) =>
										ne.codeBlock?.contents
											.split(`
`)
											.filter((ee) => ee.startsWith("import"))
											?.join(`
`) ?? "",
								),
							).search(R);
							console.timeEnd("BM25 Calculation Time"),
								console.time("Git Result Promises Time");
							const F = new Set(),
								x = new Map();
							for (const ne of z) {
								const _ = B[ne.index].codeBlock?.relativeWorkspacePath;
								_ && F.add(_);
							}
							const H = Array.from(F).map((ne) =>
								T.gitContextService
									.getGitFileBlameWithRelativePath(ne, 3)
									.then((ee) => x.set(ne, ee)),
							);
							await Promise.all(H);
							const q = [];
							for (const ne of z) {
								const _ = B[ne.index].codeBlock?.relativeWorkspacePath;
								if (!_) {
									q.push(void 0);
									continue;
								}
								const te = x.get(_);
								if (!te) {
									q.push(void 0);
									continue;
								}
								q.push(te);
							}
							console.timeEnd("Git Result Promises Time"),
								console.time("Final Results Calculation Time");
							const G = z
									.map((ne, ee) => {
										const _ = B[ne.index];
										return (
											(_.originalScore = _.score), (_.bm25Score = ne.score), _
										);
									})
									.map((ne, ee) => ({ result: ne, index: ee })),
								K = q.map((ne) => {
									if (!ne) return 0;
									const ee = ne.commits.map(
										(Z) => (Z.message ?? "") + (Z.author ?? ""),
									);
									return new n.default(ee)
										.search(R)
										.reduce((Z, se) => Z + se.score, 0);
								});
							console.timeEnd("Final Results Calculation Time"),
								console.time("Final Results With Score Calculation Time");
							const J = G.map(({ result: ne, index: ee }, _) => {
								const te = q[_];
								if (!te) return { result: ne, index: ee, score: 0 };
								let Q = ne.originalScore;
								Q += (te.commits?.length || 0) * 0.1;
								const Z = te.commits?.[0]?.date
									? new Date(te.commits[0].date).getTime()
									: 0;
								Q -= Z ? Date.now() - Z : 0;
								const se = new Set(te.commits?.map((re) => re.author));
								return (
									(Q += se.size * 0.05),
									(Q += K[_] * 0.1),
									{ result: ne, index: ee, score: Q }
								);
							});
							console.timeEnd("Final Results With Score Calculation Time"),
								console.time("Sorting and Setting Results Time");
							const Y = J.sort((ne, ee) => ee.score - ne.score)
									.map((ne, ee) => ({
										score: ne.score,
										result: ne.result,
										index: ee,
									}))
									.reduce((ne, ee) => {
										const _ = ee.result.codeBlock?.relativeWorkspacePath;
										return _ && (ne[_] || (ne[_] = []), ne[_].push(ee)), ne;
									}, {}),
								ie = Object.entries(Y)
									.map(([ne, ee]) => {
										const _ = ee.reduce((te, Q) => te + Q.score, 0);
										return {
											relativeWorkspacePath: ne,
											totalScore: _,
											codeResults: ee,
										};
									})
									.sort((ne, ee) => ee.totalScore - ne.totalScore);
							k(ie),
								D(!1),
								console.timeEnd("Sorting and Setting Results Time"),
								console.timeEnd("doSearch - Total Time");
						};
					return (() => {
						const R = b(),
							O = R.firstChild,
							B = O.firstChild;
						return (
							R.style.setProperty("padding", "1rem 0.5rem 1rem"),
							R.style.setProperty("max-height", "100%"),
							R.style.setProperty("height", "100%"),
							R.style.setProperty("display", "flex"),
							R.style.setProperty("gap", "8px"),
							R.style.setProperty("flex-direction", "column"),
							R.style.setProperty("box-sizing", "border-box"),
							O.style.setProperty("display", "flex"),
							O.style.setProperty("gap", "8px"),
							O.style.setProperty(
								"border",
								"1px solid var(--vscode-input-border)",
							),
							O.style.setProperty("border-radius", "4px"),
							O.style.setProperty("padding", "0.5rem"),
							B.addEventListener("keydown", (U) => {
								if ((0, h.$dcc)(U, "Enter")) {
									if (M() === null) {
										const x = U.target.value;
										x.trim() ? A(x) : k([]);
									}
									return;
								}
							}),
							B.style.setProperty("outline", "none"),
							B.style.setProperty("color", "var(--vscode-editor-foreground)"),
							B.style.setProperty("background", "none"),
							B.style.setProperty("border", "none"),
							B.style.setProperty("flex", "1"),
							(0, E.insert)(
								R,
								(0, C.createComponent)(g.$w0b, {
									scrollingDirection: "vertical",
									style: { height: "100%" },
									get children() {
										return (0, C.createComponent)(d.Show, {
											get when() {
												return !L();
											},
											get fallback() {
												return (() => {
													const U = s(),
														z = U.firstChild;
													return (
														U.style.setProperty("display", "flex"),
														U.style.setProperty("align-items", "center"),
														U.style.setProperty("gap", "6px"),
														U.style.setProperty(
															"color",
															"var(--vscode-editor-foreground)",
														),
														U.style.setProperty("opacity", "0.5"),
														U.style.setProperty("margin", "0px 0.5rem"),
														(0, E.insert)(
															U,
															(0, C.createComponent)(u.$Z8b, {}),
															null,
														),
														U
													);
												})();
											},
											get children() {
												const U = f();
												return (
													U.style.setProperty("display", "flex"),
													U.style.setProperty("flex-direction", "column"),
													U.style.setProperty("gap", "4px"),
													(0, E.insert)(
														U,
														(0, C.createComponent)(d.For, {
															get each() {
																return P();
															},
															children: (z, F) =>
																(0, C.createComponent)(v, {
																	result: z,
																	get isSelected() {
																		return F() === M();
																	},
																}),
														}),
													),
													U
												);
											},
										});
									},
								}),
								null,
							),
							R
						);
					})();
				};
			function v(T) {
				const P = (0, a.$odc)(),
					[k, L] = (0, d.createSignal)(!0),
					D = () => L(!k()),
					M = (0, d.createMemo)(() => {
						const N = T.result.relativeWorkspacePath,
							A = P.workspaceContextService.resolveRelativePath(N ?? ""),
							R = (0, m.$sc)(N ?? "");
						return { uri: A, relativePath: N ?? "", fileName: R };
					});
				return (() => {
					const N = l(),
						A = N.firstChild,
						R = A.firstChild,
						O = R.nextSibling,
						B = O.nextSibling,
						U = B.firstChild,
						z = U.nextSibling;
					return (
						N.style.setProperty("display", "flex"),
						N.style.setProperty("flex-direction", "column"),
						N.style.setProperty("gap", "4px"),
						A.addEventListener("click", D),
						A.style.setProperty("display", "flex"),
						A.style.setProperty("gap", "4px"),
						A.style.setProperty("align-items", "center"),
						A.style.setProperty("overflow", "hidden"),
						A.style.setProperty("border", "1px solid transparent"),
						A.style.setProperty("cursor", "pointer"),
						R.style.setProperty("width", "16px"),
						R.style.setProperty("height", "16px"),
						(0, E.insert)(
							O,
							(0, C.createComponent)(r.$k$b, {
								get fileName() {
									return M().fileName;
								},
								get languageService() {
									return P.languageService;
								},
								get modelService() {
									return P.modelService;
								},
								get workspaceContextService() {
									return P.workspaceContextService;
								},
							}),
						),
						B.style.setProperty("display", "flex"),
						B.style.setProperty("gap", "4px"),
						B.style.setProperty("align-items", "center"),
						B.style.setProperty("overflow", "hidden"),
						B.style.setProperty("text-overflow", "ellipsis"),
						U.style.setProperty("color", "var(--vscode-editor-foreground)"),
						(0, E.insert)(U, () => M().fileName),
						z.style.setProperty(
							"color",
							"var(--vscode-input-placeholderForeground)",
						),
						(0, E.insert)(z, () => M().relativePath),
						(0, E.insert)(
							N,
							(0, C.createComponent)(d.Show, {
								get when() {
									return k();
								},
								get children() {
									return [
										" ",
										(0, C.createComponent)(d.For, {
											get each() {
												return T.result.codeResults;
											},
											children: (F) =>
												(0, C.createComponent)(S, {
													result: F,
													get isSelected() {
														return T.isSelected;
													},
												}),
										}),
									];
								},
							}),
							null,
						),
						(0, w.effect)(
							(F) => {
								const x = T.isSelected
										? "rgba(255,255,255,0.3)"
										: "transparent",
									H = p.ThemeIcon.asClassName(o.$ak.chevronRight),
									q = `rotate(${k() ? 90 : 0}deg)`;
								return (
									x !== F._v$ &&
										((F._v$ = x) != null
											? A.style.setProperty("border-color", x)
											: A.style.removeProperty("border-color")),
									H !== F._v$2 && (0, i.className)(R, (F._v$2 = H)),
									q !== F._v$3 &&
										((F._v$3 = q) != null
											? R.style.setProperty("transform", q)
											: R.style.removeProperty("transform")),
									F
								);
							},
							{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
						),
						N
					);
				})();
			}
			function S(T) {
				const P = (0, a.$odc)(),
					[k, L] = (0, d.createSignal)(null),
					[D, M] = (0, d.createSignal)(null),
					[N, A] = (0, d.createSignal)(null);
				(0, d.createEffect)(async () => {
					const O = T.result.result.codeBlock?.relativeWorkspacePath,
						B = P.workspaceContextService.resolveRelativePath(O ?? ""),
						U = T.result.result.codeBlock?.range,
						z = await P.textModelService.createModelReference(B),
						F = {
							startLineNumber: U?.startPosition?.line ?? 1,
							startColumn: U?.startPosition?.column ?? 1,
							endLineNumber: U?.endPosition?.line ?? 1,
							endColumn: U?.endPosition?.column ?? 1,
						},
						x = z.object.textEditorModel.getValueInRange(F);
					L(x), M(B), A(F);
				});
				const R = () => {
					P.openerService.open((0, c.$8rb)(D(), N()));
				};
				return (() => {
					const O = y();
					return (
						O.addEventListener("click", R),
						O.style.setProperty("margin-left", "18px"),
						O.style.setProperty("color", "var(--vscode-editor-foreground)"),
						O.style.setProperty("opacity", "0.5"),
						(0, E.insert)(O, k),
						O
					);
				})();
			}
			const I = (T, P) =>
				(0, a.$ndc)(() => (0, C.createComponent)($, {}), T, P);
			e.$tzc = I;
		},
	),
		define(
			de[4199],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 54, 26, 41, 4133, 156, 135, 36, 1008,
				2369,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$xZc = l);
				const f = (0, t.template)("<div>"),
					b = (0, t.template)(
						'<div><div class="reader-data-btn"><div></div><div></div></div><div class="reader-data-btn"><div></div><div>Copy',
					),
					s = (0, t.template)("<div><div><div></div><span></span><span>");
				function l() {
					const y = (0, p.$odc)(),
						[$, v] = (0, m.createSignal)(""),
						[S, I] = (0, m.createSignal)([]),
						[T, P] = (0, m.createSignal)([]),
						[k, L] = (0, m.createSignal)(""),
						[D, M] = (0, m.createSignal)("not-started"),
						[N, A] = (0, m.createSignal)(void 0),
						[R, O] = (0, m.createSignal)(!1),
						B = (0, m.createMemo)(() => y.aiReaderService.state);
					return (
						(0, m.createEffect)(() => {
							(async () => {
								const {
									relativeWorkspacePath: z,
									target: F,
									currentFileInfo: x,
								} = B();
								if ((P([]), I([]), v(""), !z || !F || !x)) return;
								M("loading-code");
								const H = await y.textModelService.createModelReference(
										y.workspaceContextService.resolveRelativePath(z),
									),
									q = H.object.textEditorModel.getLanguageId(),
									V = y.languageService.createById(q);
								A(V), H.dispose();
								const K = (
									await y.aiService.aiClient()
								).streamPseudocodeGenerator({ target: F, currentFile: x });
								let J = "",
									W = 1,
									X = 1;
								const Y = [];
								for await (const ie of K)
									try {
										(J = ie.text), L(J);
										const ee = ie.text.split(`
`),
											_ = ee[ee.length - 1],
											te = (
												_.startsWith("//\u2206:") || "//\u2206:".startsWith(_)
													? ee.slice(0, -1)
													: ee
											).filter((Z) => !Z.trim().startsWith("//\u2206:")),
											Q = te.length;
										if (_.includes("//\u2206:")) {
											const [Z, se] = _.split("//\u2206:")[1]
												.split("-")
												.map((re) => parseInt(re.trim(), 10));
											(W = Z),
												(X = se),
												console.log(
													`[AI Reader] Setting start line: ${W}, end line: ${X}`,
												);
										} else
											console.log(
												`[AI Reader] Adding selection with start line: ${W}, end line: ${X}, at current line number: ${Q}`,
											),
												Y.push({
													line: Q,
													startLineNumber: W,
													endLineNumber: X,
												}),
												I(Y);
										P(te);
									} catch {}
								P(
									J.split(`
`).filter((ie) => !ie.trim().startsWith("//\u2206:")),
								),
									I(Y),
									M("done");
							})();
						}, [B]),
						(0, C.createComponent)(m.Show, {
							get when() {
								return (
									(0, d.memo)(() => !!B().relativeWorkspacePath)() && B().target
								);
							},
							get children() {
								return (0, C.createComponent)(g.$w0b, {
									scrollingDirection: "vertical",
									style: { "flex-grow": 1, height: "100%" },
									get children() {
										const U = s(),
											z = U.firstChild,
											F = z.firstChild,
											x = F.nextSibling,
											H = x.nextSibling;
										return (
											U.style.setProperty("display", "flex"),
											U.style.setProperty("flex-direction", "column"),
											U.style.setProperty("gap", "4px"),
											z.style.setProperty("display", "flex"),
											z.style.setProperty("padding", "16px"),
											z.style.setProperty("align-items", "center"),
											z.style.setProperty("gap", "4px"),
											z.style.setProperty("overflow", "hidden"),
											z.style.setProperty("text-overflow", "ellipsis"),
											z.style.setProperty("white-space", "nowrap"),
											F.style.setProperty("margin-right", "-6px"),
											(0, E.insert)(
												F,
												(0, C.createComponent)(n.$k$b, {
													get fileName() {
														return (0, u.$sc)(B()?.relativeWorkspacePath);
													},
													get languageService() {
														return y.languageService;
													},
													get modelService() {
														return y.modelService;
													},
													get workspaceContextService() {
														return y.workspaceContextService;
													},
												}),
											),
											(0, E.insert)(x, () =>
												(0, u.$sc)(B().relativeWorkspacePath),
											),
											H.style.setProperty(
												"color",
												"var(--vscode-input-placeholderForeground)",
											),
											H.style.setProperty("overflow", "hidden"),
											H.style.setProperty("text-overflow", "ellipsis"),
											H.style.setProperty("white-space", "nowrap"),
											(0, E.insert)(H, () => B().relativeWorkspacePath),
											(0, E.insert)(
												U,
												(0, C.createComponent)(m.Show, {
													get when() {
														return (0, d.memo)(() => !!N())() && T().length > 0;
													},
													get children() {
														const q = f();
														return (
															q.style.setProperty("position", "relative"),
															(0, E.insert)(
																q,
																(0, C.createComponent)(c.$wZc, {
																	get language() {
																		return N();
																	},
																	get editable() {
																		return R();
																	},
																	get rawText() {
																		return (0, d.memo)(() => T().length > 0)()
																			? T().join(`
`)
																			: "";
																	},
																	get onCodeChange() {
																		return R()
																			? (V) => {
																					P(
																						V.split(`
`),
																					);
																				}
																			: void 0;
																	},
																	onLineClick: (V) => {
																		const G = B().target;
																		if (!G) return;
																		const J = [
																			...S(),
																			...(D() === "done"
																				? [
																						{
																							line: T().length,
																							startLineNumber:
																								G.range.endLineNumber,
																							endLineNumber:
																								G.range.endLineNumber - 1,
																						},
																					]
																				: []),
																		].find((W) => W.line === V);
																		!J ||
																			!J.startLineNumber ||
																			!J.endLineNumber ||
																			y.openerService.open(
																				(0, h.$8rb)(
																					y.workspaceContextService.resolveRelativePath(
																						B().relativeWorkspacePath,
																					),
																					{
																						startLineNumber: J.startLineNumber,
																						startColumn: 1,
																						endLineNumber: J.endLineNumber,
																						endColumn: 1e3,
																					},
																				),
																				{
																					editorOptions: {
																						pinned: !1,
																						revealIfOpened: !0,
																					},
																				},
																			);
																	},
																}),
																null,
															),
															(0, E.insert)(
																q,
																(0, C.createComponent)(c.$wZc, {
																	get language() {
																		return N();
																	},
																	get rawText() {
																		return k();
																	},
																}),
																null,
															),
															q
														);
													},
												}),
												null,
											),
											(0, E.insert)(
												U,
												(0, C.createComponent)(m.Show, {
													get when() {
														return D() === "done";
													},
													get children() {
														const q = b(),
															V = q.firstChild,
															G = V.firstChild,
															K = G.nextSibling,
															J = V.nextSibling,
															W = J.firstChild;
														return (
															q.style.setProperty("margin", "12px 16px"),
															q.style.setProperty("display", "flex"),
															q.style.setProperty(
																"justify-content",
																"flex-end",
															),
															q.style.setProperty("gap", "8px"),
															V.addEventListener("click", () => {
																O(!R());
															}),
															G.style.setProperty("font-size", "12px"),
															(0, E.insert)(K, () =>
																R() ? "Stop Editing" : "Start Editing",
															),
															J.addEventListener("click", () => {
																const X = B().target,
																	Y = B().relativeWorkspacePath,
																	ie = B().currentFileInfo;
																(0, o.$Y$b)(
																	JSON.stringify({
																		target: X,
																		relativeWorkspacePath: Y,
																		currentFileInfo: ie,
																		code: T().join(`
`),
																	}),
																);
															}),
															W.style.setProperty("font-size", "12px"),
															(0, w.effect)(
																(X) => {
																	const Y = a.ThemeIcon.asClassName(
																			R() ? r.$ak.stop : r.$ak.edit,
																		),
																		ie = a.ThemeIcon.asClassName(r.$ak.copy);
																	return (
																		Y !== X._v$ &&
																			(0, i.className)(G, (X._v$ = Y)),
																		ie !== X._v$2 &&
																			(0, i.className)(W, (X._v$2 = ie)),
																		X
																	);
																},
																{ _v$: void 0, _v$2: void 0 },
															),
															q
														);
													},
												}),
												null,
											),
											(0, E.insert)(
												U,
												(0, C.createComponent)(m.Show, {
													get when() {
														return $();
													},
													get children() {
														return (0, C.createComponent)(c.$wZc, {
															get rawText() {
																return $();
															},
															get editable() {
																return R();
															},
														});
													},
												}),
												null,
											),
											U
										);
									},
								});
							},
						})
					);
				}
			},
		),
		