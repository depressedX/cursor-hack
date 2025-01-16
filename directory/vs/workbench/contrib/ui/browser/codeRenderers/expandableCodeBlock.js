define(
			de[4181],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 26, 9, 312, 36]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Hdc = f);
				const n = (0, t.template)("<div>"),
					g = (0, t.template)("<span>"),
					p = (0, t.template)(
						'<div class="input-box-code-selection-collapse-toggle">',
					),
					o = (0, t.template)(
						'<div><div class="input-box-code-selection"><div>',
					);
				function f(b) {
					const s = (0, c.$odc)(),
						l = (0, m.createMemo)(() => b.collapsedLines ?? 12),
						y = (0, m.createMemo)(() => b.expandedLines ?? 24),
						[$, v] = (0, m.createSignal)(!0),
						[S, I] = (0, m.createSignal)(!1),
						[T, P] = (0, m.createSignal)(0),
						k = (() => {
							const D = n();
							return (
								D.style.setProperty("width", "100%"),
								D.style.setProperty("height", "100%"),
								D.style.setProperty("box-sizing", "border-box"),
								D
							);
						})(),
						L = s.instantiationService.createInstance(
							h.$X0b,
							k,
							h.$X0b.getEditorOptions(s.configurationService),
							{},
						);
					return (
						(0, m.createEffect)(() => {
							if (b.content.case === "model") {
								L.setModel(b.content.model),
									b.content.model.getLineCount() > y() && I(!0),
									P(b.content.model.getLineCount());
								return;
							} else if (b.content.case === "file") {
								const O = s.textModelService.createModelReference(
									b.content.uri,
								);
								O.then((B) => {
									L.setModel(B.object.textEditorModel),
										B.object.textEditorModel.getLineCount() > y() && I(!0),
										P(B.object.textEditorModel.getLineCount());
								}),
									(0, m.onCleanup)(() => {
										O.then((B) => {
											B.dispose();
										});
									});
								return;
							}
							const D = s.languageService.createByFilepathOrFirstLine(
								b.content.uri,
								b.content.value.split(`
`)[0],
							);
							function M() {
								let O = "abcdefghijklmnopqrstuvwxyz",
									B = "";
								for (let U = 0; U < 10; U++)
									B += O.charAt(Math.floor(Math.random() * O.length));
								return B;
							}
							let N = a.URI.parse(`aichat-code-block-anysphere://${M()}`);
							const A = b.content.value
								.split(`
`)
								.slice(1, -1);
							A.length > y() && I(!0), P(A.length);
							const R = s.modelService.createModel(
								A.join(`
`),
								D,
								N,
								!1,
							);
							L.setModel(R),
								(0, m.onCleanup)(() => {
									R.dispose();
								});
						}),
						(0, m.createEffect)(() => {
							$()
								? S() &&
									(L.updateOptions({
										scrollbar: {
											vertical: "hidden",
											verticalScrollbarSize: 0,
											horizontal: "hidden",
											handleMouseWheel: !1,
											alwaysConsumeMouseWheel: !1,
											horizontalScrollbarSize: 0,
										},
									}),
									L.setScrollTop(0),
									L.setScrollLeft(0))
								: L.updateOptions({
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
						(0, m.onCleanup)(() => {
							L.dispose(), k.remove();
						}),
						(() => {
							const D = o(),
								M = D.firstChild,
								N = M.firstChild;
							return (
								D.style.setProperty("margin-bottom", "0.5rem"),
								N.style.setProperty("white-space", "pre"),
								N.style.setProperty("padding", "0.75rem"),
								(0, w.insert)(N, k, null),
								(0, w.insert)(
									N,
									(0, E.createComponent)(m.Show, {
										get when() {
											return S();
										},
										get children() {
											const A = p();
											return (
												A.addEventListener("click", () => {
													v(!$());
												}),
												(0, w.insert)(
													A,
													(0, E.createComponent)(m.Switch, {
														get children() {
															return [
																(0, E.createComponent)(m.Match, {
																	get when() {
																		return $();
																	},
																	get children() {
																		const R = g();
																		return (
																			(0, d.effect)(() =>
																				(0, C.className)(
																					R,
																					u.ThemeIcon.asClassName(
																						r.$ak.chevronDown,
																					),
																				),
																			),
																			R
																		);
																	},
																}),
																(0, E.createComponent)(m.Match, {
																	get when() {
																		return !$();
																	},
																	get children() {
																		const R = g();
																		return (
																			(0, d.effect)(() =>
																				(0, C.className)(
																					R,
																					u.ThemeIcon.asClassName(
																						r.$ak.chevronUp,
																					),
																				),
																			),
																			R
																		);
																	},
																}),
															];
														},
													}),
												),
												A
											);
										},
									}),
									null,
								),
								(0, d.effect)(
									(A) => {
										const R = {
												position: "relative",
												border: "1px solid var(--vscode-editorWidget-border)",
												overflow: "hidden",
												...b.style,
											},
											O = S()
												? $()
													? `${19 * l()}px`
													: `${19 * y()}px`
												: `${19 * T() + 10}px`,
											B = S() ? "1.5rem" : "0rem";
										return (
											(A._v$ = (0, i.style)(M, R, A._v$)),
											O !== A._v$2 &&
												((A._v$2 = O) != null
													? N.style.setProperty("height", O)
													: N.style.removeProperty("height")),
											B !== A._v$3 &&
												((A._v$3 = B) != null
													? N.style.setProperty("padding-bottom", B)
													: N.style.removeProperty("padding-bottom")),
											A
										);
									},
									{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
								),
								D
							);
						})()
					);
				}
			},
		),
		