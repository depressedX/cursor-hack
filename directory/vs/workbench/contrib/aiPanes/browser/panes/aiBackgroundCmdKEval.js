define(de[4130], he([1, 0, 2, 36]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Mzc = void 0);
			const w = (0, t.template)("<div>"),
				E = (C, d) => (0, i.$ndc)(() => w(), C, d);
			e.$Mzc = E;
		}),
		define(
			de[4131],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 26, 1272, 972, 36]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$dZc = g);
				const n = (0, t.template)(
					'<div class="ai-preview-clickable"><div></div><span></span><span></span><span>',
				);
				function g(p) {
					const o = (0, c.$odc)(),
						[f, b] = (0, m.createSignal)(0),
						[s, l] = (0, m.createSignal)(""),
						y = (0, m.createMemo)(() => {
							if (p.relatedCommits.length === 0) return () => {};
							const v = p.relatedCommits;
							return (S) => {
								const I = s(),
									T = S === void 0 ? v[f()] : v[S];
								if (!I) {
									console.warn("[ai preview] No upstream URL");
									return;
								}
								const P = `${I}/commit/${T.commit}`;
								o.openerService.open(P, { openExternal: !0 });
							};
						}),
						$ = async () => {
							const v = await o.gitContextService.getGitUpstreamURL();
							v && l(v);
						};
					return (
						(0, m.createEffect)(() => {
							if (p.relatedCommits.length === 0) return;
							const v = p.isRunning,
								S = p.relatedCommits.length,
								I = p.stopRunning,
								T = (P) => {
									if (v) {
										if (P.key === "ArrowUp" || P.key === "k") {
											if (
												(P.preventDefault(),
												P.stopImmediatePropagation(),
												f() === 0)
											) {
												I();
												return;
											}
											b((k) => k - 1);
											return;
										}
										if (P.key === "ArrowDown" || P.key === "j") {
											if (
												(P.preventDefault(),
												P.stopImmediatePropagation(),
												f() === S - 1)
											) {
												I();
												return;
											}
											b((k) => k + 1);
											return;
										}
										if (P.key === "Enter" || P.key === " ") {
											P.preventDefault(), P.stopImmediatePropagation(), y()();
											return;
										}
									}
								};
							o.window.document.addEventListener("keydown", T),
								(0, m.onCleanup)(() => {
									o.window.document.removeEventListener("keydown", T);
								});
						}),
						$(),
						(0, d.createComponent)(m.Show, {
							get when() {
								return p.relatedCommits.length > 0;
							},
							get children() {
								return (0, d.createComponent)(a.$$Yc, {
									get title() {
										return h.$bZc["related-commits"];
									},
									get isSelected() {
										return !p.isRunning && p.isSelected;
									},
									get iconClass() {
										return u.ThemeIcon.asClassName(r.$ak.history);
									},
									get isOpen() {
										return p.isOpen;
									},
									get setIsOpen() {
										return p.setIsOpen;
									},
									get children() {
										return (0, d.createComponent)(m.For, {
											get each() {
												return p.relatedCommits;
											},
											children: (v, S) => {
												const I = new Date(v.date)
													.toLocaleDateString("en-US", {
														year: "2-digit",
														month: "numeric",
														day: "numeric",
													})
													.replace(/\//g, "/");
												return (() => {
													const T = n(),
														P = T.firstChild,
														k = P.nextSibling,
														L = k.nextSibling,
														D = L.nextSibling;
													return (
														T.addEventListener("click", () => y()(S())),
														T.style.setProperty("font-size", "0.7rem"),
														T.style.setProperty("display", "flex"),
														T.style.setProperty("align-items", "center"),
														T.style.setProperty("gap", "3px"),
														T.style.setProperty("border-radius", "4px"),
														T.style.setProperty(
															"border",
															"1px solid transparent",
														),
														P.style.setProperty(
															"color",
															"var(--vscode-input-placeholderForeground)",
														),
														k.style.setProperty(
															"color",
															"var(--vscode-editor-foreground)",
														),
														(0, C.insert)(k, I),
														L.style.setProperty(
															"color",
															"var(--vscode-textLink-foreground)",
														),
														L.style.setProperty("flex-shrink", "0"),
														(0, C.insert)(L, () => v.author),
														D.style.setProperty(
															"color",
															"var(--vscode-input-placeholderForeground)",
														),
														D.style.setProperty("white-space", "nowrap"),
														D.style.setProperty("overflow", "hidden"),
														D.style.setProperty("text-overflow", "ellipsis"),
														(0, C.insert)(D, () => v.message),
														(0, E.effect)(
															(M) => {
																const N = s() ? "pointer" : "default",
																	A =
																		p.isRunning && S() === f()
																			? "var(--vscode-editor-foreground)"
																			: "transparent",
																	R = u.ThemeIcon.asClassName(r.$ak.gitCommit),
																	O = v.message;
																return (
																	N !== M._v$ &&
																		((M._v$ = N) != null
																			? T.style.setProperty("cursor", N)
																			: T.style.removeProperty("cursor")),
																	A !== M._v$2 &&
																		((M._v$2 = A) != null
																			? T.style.setProperty("border-color", A)
																			: T.style.removeProperty("border-color")),
																	R !== M._v$3 &&
																		(0, w.className)(P, (M._v$3 = R)),
																	O !== M._v$4 &&
																		(0, i.setAttribute)(
																			D,
																			"title",
																			(M._v$4 = O),
																		),
																	M
																);
															},
															{
																_v$: void 0,
																_v$2: void 0,
																_v$3: void 0,
																_v$4: void 0,
															},
														),
														T
													);
												})();
											},
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
			de[4132],
			he([1, 0, 2, 2, 2, 2, 13, 14, 26, 41, 1272, 156, 36, 9, 972]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$cZc = p);
				const g = (0, t.template)(
					'<div class="ai-preview-clickable"><div></div><span></span><span>(<!>)</span><span>',
				);
				function p(o) {
					const f = (0, h.$odc)(),
						[b, s] = (0, C.createSignal)(0),
						[l, y] = (0, C.createSignal)(0),
						$ = (0, C.createMemo)(() => {
							if (o.relatedFiles.length === 0) return () => {};
							const v = o.relatedFiles;
							return (S) => {
								const I = S === void 0 ? b() : S,
									T = f.workspaceContextService.resolveRelativePath(v[I].path);
								f.openerService.open(
									(0, r.$8rb)(T, {
										startLineNumber: v[I].ranges[0].startLineNumber || 0,
										startColumn: v[I].ranges[0].startColumn || 0,
										endLineNumber: v[I].ranges[0].endLineNumber || 0,
										endColumn: v[I].ranges[0].endColumn || 0,
									}),
								);
							};
						});
					return (
						(0, C.createEffect)(() => {
							if (o.relatedFiles.length === 0) return;
							const v = o.isRunning,
								S = o.relatedFiles.length,
								I = o.stopRunning,
								T = o.maxToShow,
								P = (k) => {
									if (v) {
										if (k.key === "ArrowUp" || k.key === "k") {
											if (
												(k.preventDefault(),
												k.stopImmediatePropagation(),
												b() === 0)
											) {
												I();
												return;
											}
											s((L) => L - 1), l() > b() && l() > 0 && y((L) => L - 1);
											return;
										}
										if (k.key === "ArrowDown" || k.key === "j") {
											if (
												(k.preventDefault(),
												k.stopImmediatePropagation(),
												b() === S - 1)
											) {
												I();
												return;
											}
											s((L) => L + 1), b() >= T + l() && y((L) => L + 1);
											return;
										}
										if (k.key === "Enter" || k.key === " ") {
											k.preventDefault(), k.stopImmediatePropagation(), $()();
											return;
										}
									}
								};
							f.window.document.addEventListener("keydown", P),
								(0, C.onCleanup)(() => {
									f.window.document.removeEventListener("keydown", P);
								});
						}),
						(0, E.createComponent)(C.Show, {
							get when() {
								return o.relatedFiles.length > 0;
							},
							get children() {
								return (0, E.createComponent)(u.$$Yc, {
									get title() {
										return `${n.$bZc["related-files"]} (${(o.isRunning ? `${b() + 1}/` : "") + o.relatedFiles.length})`;
									},
									get isSelected() {
										return !o.isRunning && o.isSelected;
									},
									get iconClass() {
										return m.ThemeIcon.asClassName(d.$ak.linkExternal);
									},
									get isOpen() {
										return o.isOpen;
									},
									get setIsOpen() {
										return o.setIsOpen;
									},
									get children() {
										return (0, E.createComponent)(C.For, {
											get each() {
												return o.relatedFiles.slice(l(), l() + o.maxToShow);
											},
											children: (v, S) => {
												const I = f.codeEditorService
														.getActiveCodeEditor()
														?.getModel()?.uri,
													T =
														I &&
														f.workspaceContextService.asRelativePath(
															c.URI.file(v.path),
														) === f.workspaceContextService.asRelativePath(I);
												return (() => {
													const P = g(),
														k = P.firstChild,
														L = k.nextSibling,
														D = L.nextSibling,
														M = D.firstChild,
														N = M.nextSibling,
														A = N.nextSibling,
														R = D.nextSibling;
													return (
														P.addEventListener("click", () => {
															$()(S() + l());
														}),
														P.style.setProperty("white-space", "nowrap"),
														P.style.setProperty("overflow", "hidden"),
														P.style.setProperty("text-overflow", "ellipsis"),
														P.style.setProperty("font-size", "0.7rem"),
														P.style.setProperty("display", "flex"),
														P.style.setProperty("align-items", "center"),
														P.style.setProperty("gap", "3px"),
														P.style.setProperty("cursor", "pointer"),
														P.style.setProperty("border-radius", "4px"),
														P.style.setProperty(
															"border",
															"1px solid transparent",
														),
														k.style.setProperty("margin-right", "-6px"),
														(0, w.insert)(
															k,
															(0, E.createComponent)(a.$k$b, {
																get fileName() {
																	return v.fileName;
																},
																get languageService() {
																	return f.languageService;
																},
																get modelService() {
																	return f.modelService;
																},
																get workspaceContextService() {
																	return f.workspaceContextService;
																},
															}),
														),
														L.style.setProperty(
															"color",
															"var(--vscode-editor-foreground)",
														),
														(0, w.insert)(L, () => v.fileName),
														(T
															? "var(--vscode-editor-foreground)"
															: "var(--vscode-input-placeholderForeground)") !=
														null
															? D.style.setProperty(
																	"color",
																	T
																		? "var(--vscode-editor-foreground)"
																		: "var(--vscode-input-placeholderForeground)",
																)
															: D.style.removeProperty("color"),
														(0, w.insert)(D, () => v.ranges.length, N),
														R.style.setProperty(
															"color",
															"var(--vscode-input-placeholderForeground)",
														),
														R.style.setProperty("white-space", "nowrap"),
														R.style.setProperty("overflow", "hidden"),
														R.style.setProperty("text-overflow", "ellipsis"),
														(0, w.insert)(R, () =>
															f.workspaceContextService.asRelativePath(
																c.URI.file(v.path),
															),
														),
														(0, i.effect)(() =>
															(o.isRunning && S() + l() === b()
																? "var(--vscode-editor-foreground)"
																: "transparent") != null
																? P.style.setProperty(
																		"border-color",
																		o.isRunning && S() + l() === b()
																			? "var(--vscode-editor-foreground)"
																			: "transparent",
																	)
																: P.style.removeProperty("border-color"),
														),
														P
													);
												})();
											},
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
			de[4133],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 26, 9, 17, 116, 41, 3020, 502, 36]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$wZc = y);
				const o = (0, t.template)("<div>"),
					f = (0, t.template)("<span>"),
					b = (0, t.template)(
						'<div class="input-box-code-selection-collapse-toggle">',
					),
					s = (0, t.template)("<div><div>"),
					l = () => Math.random().toString(36).substring(2);
				function y($) {
					const v = (0, p.$odc)(),
						S = 12,
						I = 24,
						[T, P] = (0, m.createSignal)(!0),
						k = (() => {
							const R = o();
							return (
								R.style.setProperty("width", "100%"),
								R.style.setProperty("height", "100%"),
								R.style.setProperty("box-sizing", "border-box"),
								R
							);
						})(),
						L = (0, m.createMemo)(
							() =>
								$.rawText.split(`
`).length > I,
						),
						[D, M] = (0, m.createSignal)(null),
						N = (0, m.createMemo)(() =>
							u.URI.parse(`aichat-code-block-anysphere-${l()}://`),
						);
					(0, m.createEffect)(() => {
						if (!D()) {
							const R = v.instantiationService.createInstance(
									n.$vZc,
									k,
									n.$vZc.getEditorOptions(v.configurationService),
								),
								O = $.onCodeChange;
							R.onDidChangeModelContent(() => {
								O?.(R.getValue());
							}),
								M(R);
						}
					}),
						(0, m.createEffect)(() => {
							const R = D();
							if (!R || !$.onLineClick) return;
							const O = [],
								B = $.onLineClick;
							O.push(
								R.onMouseDown((F) => {
									F.target.position && B?.(F.target.position.lineNumber);
								}),
							);
							const U = 0;
							function z() {
								R.getModel()?.removeAllDecorationsWithOwnerId(U);
							}
							O.push(
								R.onMouseMove(
									(F) => {
										const x = F.target.position?.lineNumber;
										if (x === void 0) return;
										const H = R.getModel();
										z(),
											H?.deltaDecorations(
												[],
												[
													{
														range: new a.$iL(x, 1, x, 1),
														options: {
															className: "pseudocode-line-highlight",
															isWholeLine: !0,
															description: "",
														},
													},
												],
												U,
											);
									},
									[$.onLineClick],
								),
							),
								O.push(
									R.onMouseLeave((F) => {
										z();
									}),
								),
								(0, m.onCleanup)(() => {
									for (const F of O) F.dispose();
									z();
								});
						}),
						(0, m.createEffect)(() => {
							const R = D();
							R && R.updateOptions({ readOnly: !$.editable });
						}, [$.editable]),
						(0, m.createEffect)(() => {
							const R = D(),
								O = $.rawText.split(`
`);
							if (R) {
								let B = N();
								const U =
									v.modelService.getModel(B) ||
									v.modelService.createModel(
										O.join(`
`),
										$.language ?? null,
										B,
										!1,
									);
								R.getModel() !== U
									? R.setModel(U)
									: U.setValue(
											O.join(`
`),
										);
							}
						}),
						(0, m.createEffect)(() => {
							const R = D();
							R &&
								(T()
									? L() &&
										(R.updateOptions({
											scrollbar: {
												vertical: "hidden",
												verticalScrollbarSize: 0,
												horizontal: "hidden",
												handleMouseWheel: !1,
												alwaysConsumeMouseWheel: !1,
												horizontalScrollbarSize: 0,
											},
										}),
										R.setScrollTop(0),
										R.setScrollLeft(0))
									: R.updateOptions({
											scrollbar: {
												vertical: "auto",
												verticalScrollbarSize: 10,
												horizontal: "auto",
												handleMouseWheel: !0,
												alwaysConsumeMouseWheel: !0,
												horizontalScrollbarSize: 10,
											},
										}));
						}),
						(0, m.onCleanup)(() => {
							D()?.dispose(), D()?.getModel()?.dispose(), M(null);
						});
					const A = async (R, O, B) => {
						const U = (0, c.$8rb)(R, {
							startLineNumber: O.selectionStartLineNumber,
							startColumn: O.selectionStartColumn,
							endLineNumber: O.positionLineNumber,
							endColumn: O.positionColumn,
						});
						B.open(U, {
							openToSide: !1,
							editorOptions: {
								revealIfVisible: !0,
								revealIfOpened: !0,
								source: h.EditorOpenSource.USER,
							},
							fromUserGesture: !0,
						});
					};
					return (() => {
						const R = s(),
							O = R.firstChild;
						return (
							R.style.setProperty("position", "relative"),
							O.style.setProperty("white-space", "pre"),
							(0, i.insert)(O, k, null),
							(0, i.insert)(
								O,
								(0, w.createComponent)(m.Show, {
									get when() {
										return (0, d.memo)(() => !!$.collapsible)() && L();
									},
									get children() {
										const B = b();
										return (
											B.addEventListener("click", () => {
												P(!T());
											}),
											(0, i.insert)(
												B,
												(0, w.createComponent)(m.Switch, {
													get children() {
														return [
															(0, w.createComponent)(m.Match, {
																get when() {
																	return T();
																},
																get children() {
																	const U = f();
																	return (
																		(0, C.effect)(() =>
																			(0, E.className)(
																				U,
																				r.ThemeIcon.asClassName(g.$E0b),
																			),
																		),
																		U
																	);
																},
															}),
															(0, w.createComponent)(m.Match, {
																get when() {
																	return !T();
																},
																get children() {
																	const U = f();
																	return (
																		(0, C.effect)(() =>
																			(0, E.className)(
																				U,
																				r.ThemeIcon.asClassName(g.$F0b),
																			),
																		),
																		U
																	);
																},
															}),
														];
													},
												}),
											),
											B
										);
									},
								}),
								null,
							),
							(0, C.effect)(() =>
								(!L() || !$.collapsible
									? `${
											19 *
												$.rawText.split(`
`).length +
											10
										}px`
									: T()
										? `${19 * S}px`
										: `${19 * I}px`) != null
									? O.style.setProperty(
											"height",
											!L() || !$.collapsible
												? `${
														19 *
															$.rawText.split(`
`).length +
														10
													}px`
												: T()
													? `${19 * S}px`
													: `${19 * I}px`,
										)
									: O.style.removeProperty("height"),
							),
							R
						);
					})();
				}
			},
		),
		define(
			de[1966],
			he([1, 0, 2, 2, 2, 2, 13, 36, 445]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$W8b = void 0),
					(e.$X8b = a);
				const r = (0, t.template)('<div class="settings-container-backing">'),
					u = (0, t.template)("<div><h1>Logout");
				e.$W8b = 1000002;
				function a(c) {
					const n = (0, d.$qdc)(),
						g = (0, d.$pdc)();
					return (
						(0, C.createEffect)(() => {
							const p = (o) => {
								o.key === "Escape" && n.close();
							};
							g.window.addEventListener("keydown", p),
								(0, C.onCleanup)(() => {
									g.window.removeEventListener("keydown", p);
								});
						}),
						(() => {
							const p = r();
							return (
								p.addEventListener("click", (o) => {
									n.close(), o.stopPropagation();
								}),
								p.style.setProperty("z-index", "1000002"),
								(0, i.insert)(
									p,
									(0, w.createComponent)(C.Switch, {
										get children() {
											return (0, w.createComponent)(C.Match, {
												get when() {
													return (
														c.dangerousActionType ===
														m.DangerousActionType.LOGOUT
													);
												},
												get children() {
													return (0, w.createComponent)(
														h,
														(0, E.mergeProps)(() => c.dangerousActionParams),
													);
												},
											});
										},
									}),
								),
								p
							);
						})()
					);
				}
				function h(c) {
					return u();
				}
			},
		),
		define(
			de[4134],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 26, 36]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wzc = void 0);
				const h = (0, t.template)("<span>"),
					c = (0, t.template)("<button>"),
					n = (g) => {
						const p = (0, a.$odc)(),
							[o, f] = (0, m.createSignal)(!1);
						return (() => {
							const b = c();
							return (
								b.addEventListener("click", (s) => {
									s.stopPropagation(),
										p.aiReviewService.toggleThreadResolveStatus(
											g.chunkId,
											g.thread.id,
											!g.thread.isResolved,
										),
										g.onClick?.();
								}),
								b.addEventListener("mouseleave", () => f(!1)),
								b.addEventListener("mouseenter", () => f(!0)),
								(0, w.insert)(
									b,
									(0, E.createComponent)(m.Show, {
										get when() {
											return g.thread.isResolved;
										},
										get fallback() {
											return [
												"resolve",
												(0, E.createComponent)(m.Show, {
													get when() {
														return o();
													},
													get children() {
														const s = h();
														return (
															s.style.setProperty("font-size", "10px"),
															(0, d.effect)(() =>
																(0, C.className)(
																	s,
																	u.ThemeIcon.asClassName(r.$ak.check),
																),
															),
															s
														);
													},
												}),
											];
										},
										get children() {
											return [
												"resolved",
												(0, E.createComponent)(m.Show, {
													get when() {
														return o();
													},
													get children() {
														const s = h();
														return (
															s.style.setProperty("font-size", "10px"),
															(0, d.effect)(() =>
																(0, C.className)(
																	s,
																	u.ThemeIcon.asClassName(r.$ak.x),
																),
															),
															s
														);
													},
												}),
											];
										},
									}),
								),
								(0, d.effect)(
									(s) => {
										const l =
												"ai-review-chunk-thread-button" +
												(g.thread.isResolved ? " resolved" : ""),
											y = { ...(g.showAnyways ? { display: "flex" } : {}) };
										return (
											l !== s._v$ && (0, C.className)(b, (s._v$ = l)),
											(s._v$2 = (0, i.style)(b, y, s._v$2)),
											s
										);
									},
									{ _v$: void 0, _v$2: void 0 },
								),
								b
							);
						})();
					};
				e.$wzc = n;
			},
		),
		define(
			de[4135],
			he([1, 0, 2, 2, 2, 2, 2, 13, 4134, 2996, 36]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$wed = p);
				const a = (0, t.template)("<div><div>"),
					h = (0, t.template)('<div class="ai-review-peek-view-severity-dot">'),
					c = (0, t.template)(
						'<div class="ai-review-peek-view-severity-title">',
					),
					n = (0, t.template)('<div class="ai-review-peek-view-sub-title">'),
					g = (0, t.template)('<div class="ai-review-peek-view-lines">');
				function p(o) {
					const f = (0, u.$odc)(),
						b = (0, d.createMemo)(() =>
							f.aiReviewService.getReviewChunkById(o.reviewChunkId),
						),
						s = (0, d.createMemo)(
							() => b()?.threads.find(($) => $.id === o.threadId) ?? null,
						),
						l = (0, d.createMemo)(() => s()?.bug.severity),
						y = (0, d.createMemo)(
							(0, d.on)(l, ($) => ($ === void 0 ? null : r.$xzc[$])),
						);
					return (() => {
						const $ = a(),
							v = $.firstChild;
						return (
							$.style.setProperty("display", "flex"),
							$.style.setProperty("gap", "6px"),
							$.style.setProperty("align-items", "center"),
							$.style.setProperty("padding", "0px 8px"),
							$.style.setProperty("height", "100%"),
							(0, E.insert)(
								$,
								(0, C.createComponent)(d.Show, {
									get when() {
										return y();
									},
									children: (S) => [
										(() => {
											const I = h();
											return (
												(0, w.effect)(() =>
													S().backgroundColor != null
														? I.style.setProperty(
																"background-color",
																S().backgroundColor,
															)
														: I.style.removeProperty("background-color"),
												),
												I
											);
										})(),
										(() => {
											const I = c();
											return (0, E.insert)(I, () => S().label), I;
										})(),
									],
								}),
								v,
							),
							(0, E.insert)(
								$,
								(0, C.createComponent)(d.Show, {
									get when() {
										return s()?.bug;
									},
									children: (S) => [
										(() => {
											const I = n();
											return (0, E.insert)(I, () => S().tldr), I;
										})(),
										(() => {
											const I = g();
											return (
												(0, E.insert)(
													I,
													(() => {
														const T = (0, i.memo)(
															() =>
																S().startLine === S().endLine || !S().endLine,
														);
														return () =>
															T()
																? `Line ${S().startLine}`
																: `Lines ${S().startLine} - ${S().endLine}`;
													})(),
												),
												I
											);
										})(),
									],
								}),
								v,
							),
							v.style.setProperty("margin-left", "auto"),
							v.style.setProperty("display", "flex"),
							v.style.setProperty("gap", "4px"),
							(0, E.insert)(
								v,
								(0, C.createComponent)(m.$wzc, {
									showAnyways: !0,
									get chunk() {
										return b();
									},
									get chunkId() {
										return o.reviewChunkId;
									},
									get thread() {
										return s();
									},
									get onClick() {
										return o.closePeekView;
									},
								}),
							),
							(0, w.effect)(() =>
								(s()?.isResolved ? 0.5 : 1) != null
									? $.style.setProperty("opacity", s()?.isResolved ? 0.5 : 1)
									: $.style.removeProperty("opacity"),
							),
							$
						);
					})();
				}
			},
		),
		