define(
			de[865],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 26, 9, 38, 502, 312, 36, 64, 2529]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Ibc = s);
				const o = (0, t.template)("<div>"),
					f = (0, t.template)("<span>"),
					b = (0, t.template)(
						'<div class="input-box-code-selection-collapse-toggle">',
					);
				function s(l) {
					const y = (0, g.$odc)(),
						$ = 12,
						[v, S] = (0, r.createSignal)(!0),
						[I, T] = (0, r.createSignal)(19),
						P = (() => {
							const B = o();
							return (
								B.style.setProperty("width", "100%"),
								B.style.setProperty("height", "100%"),
								B.style.setProperty("box-sizing", "border-box"),
								B
							);
						})(),
						k = (0, r.createMemo)(() =>
							l.text.split(`
`),
						),
						L = (0, r.createMemo)(() =>
							l.wrapLines ? k().length > l.wrapLines : !1,
						),
						[D, M] = (0, r.createSignal)(null),
						[N, A] = (0, r.createSignal)(void 0);
					let R = 0;
					const O = ({ editor: B, override: U, skipLayout: z }) => {
						if (!B) return;
						const F = B.getDomNode();
						if (!F) return;
						const x = B.getModel()?.getLineCount() || 1,
							H = B.getBottomForLineNumber(x);
						(R !== H || U) &&
							(A(H), (R = H), (F.style.height = `${H}px`), z || B.layout());
					};
					return (
						(0, r.createEffect)(() => {
							const B = D();
							if (l.autoHeightForModelChanges && B) {
								const U = B?.onDidChangeModelContent(() => {
									O({ editor: B, override: !1, skipLayout: !1 });
								});
								(0, r.onCleanup)(() => {
									U && U.dispose();
								});
							}
							if (l.autoHeightForWordWrap && B) {
								const U = B?.onDidLayoutChange(() => {
									O({ editor: B, override: !1, skipLayout: !0 });
								});
								(0, r.onCleanup)(() => {
									U && U.dispose();
								});
							}
						}),
						(0, r.createEffect)(
							(0, r.on)(
								() => l.editable,
								(B) => {
									const U = D();
									U && U.updateOptions({ readOnly: !B });
								},
							),
						),
						(0, r.createEffect)(() => {
							if (D()) {
								const B = D()?.getModel();
								if (B) {
									const U = B.getValue(),
										z = k().join(`
`);
									z.startsWith(U)
										? B.applyEdits([
												{
													range: {
														startLineNumber: B.getLineCount(),
														startColumn: B.getLineMaxColumn(B.getLineCount()),
														endLineNumber: B.getLineCount(),
														endColumn: B.getLineMaxColumn(B.getLineCount()),
													},
													text: z.slice(U.length),
													forceMoveMarkers: !0,
												},
											])
										: B.setValue(z);
									const F = B.getLanguageId(),
										x =
											y.languageService.createByLanguageNameOrFilepathOrFirstLine(
												l.language ?? null,
												l.resourceForLanguage ?? null,
												void 0,
											);
									F !== x.languageId && B.setLanguage(x);
								}
							} else {
								let F = function () {
									let q = "abcdefghijklmnopqrstuvwxyz",
										V = "";
									for (let G = 0; G < 10; G++)
										V += q.charAt(Math.floor(Math.random() * q.length));
									return V;
								};
								const B = {
										...n.$X0b.getEditorOptions(y.configurationService),
										disableLayerHinting: !0,
										...l.nonReactiveEditorOptions,
										readOnly: !l.editable,
									},
									U = y.instantiationService.createInstance(n.$X0b, P, B, {
										overwriteIsSimpleWidget: l.isSimpleWidget,
									}),
									z =
										y.languageService.createByLanguageNameOrFilepathOrFirstLine(
											l.language ?? null,
											l.resourceForLanguage ?? null,
											void 0,
										);
								let x = a.URI.parse(`aichat-code-block-anysphere://${F()}`);
								const H = y.modelService.createModel(
									k().join(`
`),
									z,
									x,
									!1,
								);
								U.setModel(H),
									T(U.getOptions().get(h.EditorOption.fontSize) + 6),
									M(U),
									l.setEditor && l.setEditor(U);
							}
						}),
						(0, r.createEffect)(() => {
							const B = D();
							B &&
								(v()
									? L() &&
										(B.updateOptions({
											scrollbar: {
												vertical: "hidden",
												verticalScrollbarSize: 0,
												horizontal: "hidden",
												handleMouseWheel: !1,
												alwaysConsumeMouseWheel: !1,
												horizontalScrollbarSize: 0,
											},
										}),
										B.setScrollTop(0),
										B.setScrollLeft(0))
									: B.updateOptions({
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
						(0, r.createEffect)(() => {
							const B = l.setEditor;
							(0, r.onCleanup)(() => {
								const U = D();
								U && (U.getModel()?.dispose(), U.dispose(), B && B(null));
							});
						}),
						(0, r.createEffect)(() => {
							const B = D(),
								U = l.highlightLines;
							if (B && U?.length) {
								const z = B.getModel();
								if (!z) return;
								const F = {
										isWholeLine: !0,
										className: "highlighted-line-background",
										description: "Highlighted line",
										stickiness:
											p.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
									},
									x = U.map((H) => ({
										range: {
											startLineNumber: H,
											startColumn: 1,
											endLineNumber: H,
											endColumn: 1,
										},
										options: F,
									}));
								z.deltaDecorations([], x);
							}
						}),
						(0, r.createEffect)(() => {
							const B = D();
							if (B && l.scrollOnlyWhenFocused) {
								const U = B.onDidFocusEditorWidget(() => {
										B.updateOptions({
											scrollbar: {
												vertical: "visible",
												horizontal: "visible",
												handleMouseWheel: !0,
											},
										});
									}),
									z = B.onDidBlurEditorWidget(() => {
										B.updateOptions({
											scrollbar: {
												vertical: "hidden",
												horizontal: "hidden",
												handleMouseWheel: !1,
											},
										});
									});
								B.updateOptions({
									scrollbar: {
										vertical: "hidden",
										horizontal: "hidden",
										handleMouseWheel: !1,
									},
								}),
									(0, r.onCleanup)(() => {
										U.dispose(), z.dispose();
									});
							}
						}),
						(0, r.createEffect)(() => {
							const B = D();
							if (!B || !l.onFocus || !l.onBlur) return;
							const U = l.onFocus,
								z = l.onBlur,
								F = B.onDidFocusEditorWidget(() => {
									U?.();
								}),
								x = B.onDidBlurEditorWidget(() => {
									z?.();
								});
							(0, r.onCleanup)(() => {
								F.dispose(), x.dispose();
							});
						}),
						(0, r.createEffect)(() => {
							const B = D();
							if (!B || !l.onTextChange) return;
							const U = l.onTextChange,
								z = () => {
									const x = B.getValue();
									U?.(x);
								},
								F = B.onDidChangeModelContent(z);
							(0, r.onCleanup)(() => {
								F.dispose();
							});
						}),
						(() => {
							const B = o(),
								U = l.setContainerRef;
							return (
								typeof U == "function"
									? (0, m.use)(U, B)
									: (l.setContainerRef = B),
								B.addEventListener("mouseleave", () => l.onMouseLeave?.()),
								B.addEventListener("mouseenter", () => l.onMouseEnter?.()),
								(0, w.insert)(B, P, null),
								(0, w.insert)(
									B,
									(0, E.createComponent)(r.Show, {
										get when() {
											return L();
										},
										get children() {
											const z = b();
											return (
												z.addEventListener("click", () => {
													S(!v());
												}),
												(0, w.insert)(
													z,
													(0, E.createComponent)(r.Switch, {
														get children() {
															return [
																(0, E.createComponent)(r.Match, {
																	get when() {
																		return v();
																	},
																	get children() {
																		const F = f();
																		return (
																			(0, d.effect)(() =>
																				(0, C.className)(
																					F,
																					u.ThemeIcon.asClassName(c.$E0b),
																				),
																			),
																			F
																		);
																	},
																}),
																(0, E.createComponent)(r.Match, {
																	get when() {
																		return !v();
																	},
																	get children() {
																		const F = f();
																		return (
																			(0, d.effect)(() =>
																				(0, C.className)(
																					F,
																					u.ThemeIcon.asClassName(c.$F0b),
																				),
																			),
																			F
																		);
																	},
																}),
															];
														},
													}),
												),
												z
											);
										},
									}),
									null,
								),
								(0, w.insert)(B, () => l.children, null),
								(0, d.effect)(
									(z) => {
										const F = `simple-code-render ${l.class}`,
											x = {
												position: "relative",
												height: N()
													? `${N()}px`
													: l.wrapLines
														? L()
															? v()
																? `${I() * $}px`
																: `${I() * Math.min(k().length + 1, l.wrapLines) + 10}px`
															: `${I() * k().length + 10}px`
														: `${I() * (k().length + 1) + 10}px`,
												"text-align": "left",
												...l.style,
											};
										return (
											F !== z._v$ && (0, C.className)(B, (z._v$ = F)),
											(z._v$2 = (0, i.style)(B, x, z._v$2)),
											z
										);
									},
									{ _v$: void 0, _v$2: void 0 },
								),
								B
							);
						})()
					);
				}
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	