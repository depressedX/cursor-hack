define(
			de[4144],
			he([1, 0, 2, 2, 2, 2, 2, 13, 312, 36, 9, 41, 116, 26, 14, 502]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$b_b = l);
				const p = (0, t.template)("<div>"),
					o = (0, t.template)(
						'<div class="input-box-code-selection-collapse-toggle-cover"><span>',
					),
					f = (0, t.template)("<span>"),
					b = (0, t.template)(
						'<div class="input-box-code-selection-collapse-toggle">',
					),
					s = (0, t.template)(
						'<div><div class="input-box-code-selection"><div>',
					);
				function l(y) {
					const $ = (0, r.$odc)(),
						v = (0, d.createMemo)(() => y.lines ?? 12),
						S = 24,
						[I, T] = (0, d.createSignal)(!0),
						P = (() => {
							const N = p();
							return (
								N.style.setProperty("width", "100%"),
								N.style.setProperty("height", "100%"),
								N.style.setProperty("box-sizing", "border-box"),
								N
							);
						})(),
						k = (0, d.createMemo)(() =>
							y.selection.text.split(`
`),
						),
						L = (0, d.createMemo)(() => k().length > S),
						D = (0, d.createMemo)(() => {
							const N = $.instantiationService.createInstance(
									m.$X0b,
									P,
									m.$X0b.getEditorOptions($.configurationService),
									{},
								),
								A = y.selection.text;
							let R = "";
							const B = /```(\w*)/.exec(A);
							B && (R = B[1]);
							const U =
								$.languageService.createByLanguageNameOrFilepathOrFirstLine(
									R,
									u.URI.from(y.selection.uri),
									void 0,
								);
							function z() {
								let H = "abcdefghijklmnopqrstuvwxyz",
									q = "";
								for (let V = 0; V < 10; V++)
									q += H.charAt(Math.floor(Math.random() * H.length));
								return q;
							}
							let F = u.URI.parse(`aichat-code-block-anysphere://${z()}`);
							const x = $.modelService.createModel(
								k().join(`
`),
								U,
								F,
								!1,
							);
							return N.setModel(x), N;
						});
					(0, d.createEffect)(() => {
						const N = D();
						I()
							? L() &&
								(N.updateOptions({
									scrollbar: {
										vertical: "hidden",
										verticalScrollbarSize: 0,
										horizontal: "hidden",
										handleMouseWheel: !1,
										alwaysConsumeMouseWheel: !1,
										horizontalScrollbarSize: 0,
									},
								}),
								N.setScrollTop(0),
								N.setScrollLeft(0))
							: N.updateOptions({
									scrollbar: {
										vertical: "auto",
										verticalScrollbarSize: 10,
										horizontal: "auto",
										handleMouseWheel: !0,
										alwaysConsumeMouseWheel: !0,
										horizontalScrollbarSize: 10,
									},
								});
					}),
						(0, d.onCleanup)(() => {
							const N = D();
							N.dispose(), N.getModel()?.dispose();
						});
					const M = async (N, A, R) => {
						const O = (0, a.$8rb)(N, {
							startLineNumber: A.selectionStartLineNumber,
							startColumn: A.selectionStartColumn,
							endLineNumber: A.positionLineNumber,
							endColumn: A.positionColumn,
						});
						R.open(O, {
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
						const N = s(),
							A = N.firstChild,
							R = A.firstChild;
						return (
							N.style.setProperty("margin-bottom", "0.5rem"),
							A.addEventListener("click", () => {
								if (y.notLink === !0) return;
								const O = $.openerService;
								if (!O || !y.selection.uri || !y.selection.range) return;
								const B = u.URI.revive(y.selection.uri);
								M(B, y.selection.range, O);
							}),
							A.style.setProperty("position", "relative"),
							A.style.setProperty(
								"border",
								"1px solid var(--vscode-editorWidget-border)",
							),
							R.style.setProperty("white-space", "pre"),
							R.style.setProperty("padding", "0.75rem"),
							(0, i.insert)(R, P, null),
							(0, i.insert)(
								R,
								(0, w.createComponent)(d.Show, {
									get when() {
										return y.notLink !== !0;
									},
									get children() {
										const O = o(),
											B = O.firstChild;
										return (
											(0, C.effect)(() =>
												(0, E.className)(
													B,
													c.ThemeIcon.asClassName(n.$ak.ellipsis),
												),
											),
											O
										);
									},
								}),
								null,
							),
							(0, i.insert)(
								R,
								(0, w.createComponent)(d.Show, {
									get when() {
										return L();
									},
									get children() {
										return (0, w.createComponent)(d.Show, {
											get when() {
												return y.notLink === !0;
											},
											get children() {
												const O = b();
												return (
													O.addEventListener("click", () => {
														T(!I());
													}),
													(0, i.insert)(
														O,
														(0, w.createComponent)(d.Switch, {
															get children() {
																return [
																	(0, w.createComponent)(d.Match, {
																		get when() {
																			return I();
																		},
																		get children() {
																			const B = f();
																			return (
																				(0, C.effect)(() =>
																					(0, E.className)(
																						B,
																						c.ThemeIcon.asClassName(g.$E0b),
																					),
																				),
																				B
																			);
																		},
																	}),
																	(0, w.createComponent)(d.Match, {
																		get when() {
																			return !I();
																		},
																		get children() {
																			const B = f();
																			return (
																				(0, C.effect)(() =>
																					(0, E.className)(
																						B,
																						c.ThemeIcon.asClassName(g.$F0b),
																					),
																				),
																				B
																			);
																		},
																	}),
																];
															},
														}),
													),
													O
												);
											},
										});
									},
								}),
								null,
							),
							(0, C.effect)(
								(O) => {
									const B = y.notLink === !0 ? "default" : "pointer",
										U = L()
											? I()
												? `${19 * v()}px`
												: `${19 * S}px`
											: `${19 * k().length + 10}px`;
									return (
										B !== O._v$ &&
											((O._v$ = B) != null
												? A.style.setProperty("cursor", B)
												: A.style.removeProperty("cursor")),
										U !== O._v$2 &&
											((O._v$2 = U) != null
												? R.style.setProperty("height", U)
												: R.style.removeProperty("height")),
										O
									);
								},
								{ _v$: void 0, _v$2: void 0 },
							),
							N
						);
					})();
				}
			},
		),
		