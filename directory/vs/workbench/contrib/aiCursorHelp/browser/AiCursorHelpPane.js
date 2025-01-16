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
		