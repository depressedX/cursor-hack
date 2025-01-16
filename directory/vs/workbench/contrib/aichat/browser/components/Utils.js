define(
			de[242],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 36, 14, 285, 1107, 894, 147, 58, 191]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$C$b = void 0),
					(e.$D$b = k),
					(e.$E$b = L),
					(e.$F$b = D);
				const f = (0, t.template)("<span>"),
					b = (0, t.template)(
						'<div><span>Consider <span>enabling Composer Turbo Mode</span> for lower wait times and faster edits.</span><a href="#"><span>Dismiss',
					),
					s = (0, t.template)("<span>Update Fast Requests:"),
					l = (0, t.template)('<div class="request-adjuster"><span>'),
					y = (0, t.template)("<div>"),
					$ = (0, t.template)("<span>Loading..."),
					v = (0, t.template)('<span class="success-message">'),
					S = (0, t.template)('<span class="price-info">'),
					I = (0, t.template)(
						"<span>Error, please add requests <span>here</span>.",
					),
					T = (0, t.template)("<div>Error, add requests <span>here</span>."),
					P = (M) => {
						const [N, A] = (0, r.createSignal)(1),
							R = (0, u.$pdc)();
						return (
							(0, r.createEffect)(() => {
								if (M.show === !1) return;
								A(1);
								const O = R.window.setInterval(
									() => {
										A((B) => (B === 3 ? 0 : B + 1));
									},
									M.speed === "slow" ? 350 : 175,
								);
								(0, r.onCleanup)(() => {
									R.window.clearInterval(O);
								});
							}),
							(() => {
								const O = f();
								return (
									(0, C.insert)(
										O,
										(0, d.createComponent)(r.Show, {
											get when() {
												return M.show !== !1;
											},
											get fallback() {
												return "\xA0";
											},
											get children() {
												return [
													(0, m.memo)(() => ".".repeat(N())),
													(0, d.createComponent)(r.Show, {
														get when() {
															return N() === 0;
														},
														children: "\xA0",
													}),
												];
											},
										}),
									),
									(0, E.effect)((B) =>
										(0, w.style)(O, { "user-select": "text", ...M.style }, B),
									),
									O
								);
							})()
						);
					};
				e.$C$b = P;
				function k() {
					const M = (0, u.$odc)(),
						[N, A] = (0, r.createSignal)(!1);
					return (0, d.createComponent)(r.Show, {
						get when() {
							return !N();
						},
						get children() {
							const R = b(),
								O = R.firstChild,
								B = O.firstChild,
								U = B.nextSibling,
								z = O.nextSibling,
								F = z.firstChild;
							return (
								R.style.setProperty("display", "flex"),
								R.style.setProperty("justify-content", "space-between"),
								R.style.setProperty("align-items", "center"),
								R.style.setProperty("gap", "16px"),
								R.style.setProperty("padding-bottom", "10px"),
								U.addEventListener("click", () => {
									M.commandService.executeCommand(p.$ZW);
								}),
								U.style.setProperty("display", "inline"),
								U.style.setProperty(
									"color",
									"var(--vscode-textLink-foreground)",
								),
								U.style.setProperty("cursor", "pointer"),
								z.addEventListener("click", (x) => {
									x.preventDefault(), A(!0);
								}),
								z.style.setProperty("font-size", "0.75rem"),
								z.style.setProperty(
									"color",
									"var(--vscode-textLink-foreground)",
								),
								z.style.setProperty("text-decoration", "none"),
								z.style.setProperty("display", "flex"),
								z.style.setProperty("align-items", "center"),
								z.style.setProperty("flex-shrink", "0"),
								z.style.setProperty("cursor", "pointer"),
								F.style.setProperty("font-size", "0.75rem"),
								F.style.setProperty("flex-shrink", "0"),
								R
							);
						},
					});
				}
				function L(M) {
					const N = (0, u.$odc)(),
						[A, R] = (0, r.createSignal)(500),
						[O, B] = (0, r.createSignal)("idle"),
						[U, z] = (0, r.createSignal)(500);
					let F;
					(0, r.onMount)(async () => {
						try {
							const H = N.instantiationService.createInstance(h.$q6b, {
								service: c.$X$,
							});
							H.createServer(), (F = await H.get());
							const q = await F.getFastRequests(new n.$N0({}));
							z(q.requestQuota);
						} catch (H) {
							console.error("Error in UpsellFastRequests onMount:", H),
								B("error");
						}
					}),
						(0, r.createEffect)(() => {
							R(U());
						});
					const x = async () => {
						if ((B("loading"), F !== void 0))
							try {
								await F.updateFastRequests(new n.$L0({ requestQuota: A() })),
									B("done"),
									z(A()),
									setTimeout(() => {
										M.setIsUpsellFastRequestsShowing(!1);
									}, 2e3);
							} catch (H) {
								console.error("Error in handleUpgrade:", H), B("error");
							}
					};
					return (() => {
						const H = y();
						return (
							H.style.setProperty("display", "flex"),
							H.style.setProperty("justify-content", "space-between"),
							H.style.setProperty("align-items", "center"),
							H.style.setProperty("gap", "16px"),
							(0, C.insert)(
								H,
								(0, d.createComponent)(r.Show, {
									get when() {
										return O() !== "error";
									},
									get fallback() {
										return (0, d.createComponent)(r.Show, {
											get when() {
												return !M.conciseMessage;
											},
											get fallback() {
												return (() => {
													const q = T(),
														V = q.firstChild,
														G = V.nextSibling;
													return (
														q.style.setProperty(
															"color",
															"var(--vscode-editorError-foreground)",
														),
														(0, i.addEventListener)(
															G,
															"click",
															N.cursorAuthenticationService.settings,
														),
														G.style.setProperty("display", "inline"),
														G.style.setProperty(
															"color",
															"var(--vscode-textLink-foreground)",
														),
														G.style.setProperty("cursor", "pointer"),
														q
													);
												})();
											},
											get children() {
												const q = I(),
													V = q.firstChild,
													G = V.nextSibling;
												return (
													q.style.setProperty(
														"color",
														"var(--vscode-editorError-foreground)",
													),
													(0, i.addEventListener)(
														G,
														"click",
														N.cursorAuthenticationService.settings,
													),
													G.style.setProperty("display", "inline"),
													G.style.setProperty(
														"color",
														"var(--vscode-textLink-foreground)",
													),
													G.style.setProperty("cursor", "pointer"),
													q
												);
											},
										});
									},
									get children() {
										return [
											(() => {
												const q = l(),
													V = q.firstChild;
												return (
													q.style.setProperty("display", "flex"),
													q.style.setProperty("align-items", "center"),
													q.style.setProperty("gap", "8px"),
													(0, C.insert)(
														q,
														(0, d.createComponent)(r.Show, {
															get when() {
																return !M.conciseMessage;
															},
															get fallback() {
																return "\xA0";
															},
															get children() {
																return s();
															},
														}),
														V,
													),
													(0, C.insert)(
														q,
														(0, d.createComponent)(g.$rdc, {
															onClick: () => R((G) => Math.max(500, G - 500)),
															get disabled() {
																return A() <= 500;
															},
															get style() {
																return {
																	"background-color":
																		"var(--vscode-editor-background)",
																	color: "var(--vscode-editor-foreground)",
																	border: "none",
																	cursor: A() <= 500 ? "default" : "pointer",
																	opacity: A() <= 500 ? "0.5" : "1",
																	width: "16px",
																	height: "16px",
																	display: "flex",
																	"align-items": "center",
																	"justify-content": "center",
																	"font-size": "12px",
																	"box-sizing": "border-box",
																};
															},
															get codicon() {
																return a.$ak.dash;
															},
															codiconStyle: {
																color: "var(--vscode-editor-foreground)",
															},
														}),
														V,
													),
													(0, C.insert)(V, A),
													(0, C.insert)(
														q,
														(0, d.createComponent)(g.$rdc, {
															onClick: () => R((G) => Math.min(5e3, G + 500)),
															get disabled() {
																return A() >= 5e3;
															},
															get style() {
																return {
																	"background-color":
																		"var(--vscode-editor-background)",
																	color: "var(--vscode-editor-foreground)",
																	border: "none",
																	cursor: A() >= 5e3 ? "default" : "pointer",
																	opacity: A() >= 5e3 ? "0.5" : "1",
																	width: "16px",
																	height: "16px",
																	display: "flex",
																	"align-items": "center",
																	"justify-content": "center",
																	"font-size": "12px",
																	"box-sizing": "border-box",
																};
															},
															get codicon() {
																return a.$ak.plus;
															},
															codiconStyle: {
																color: "var(--vscode-editor-foreground)",
															},
														}),
														null,
													),
													q
												);
											})(),
											(0, d.createComponent)(r.Show, {
												get when() {
													return !M.conciseMessage;
												},
												get children() {
													const q = y();
													return q.style.setProperty("flex", "1"), q;
												},
											}),
											(0, d.createComponent)(r.Switch, {
												get children() {
													return [
														(0, d.createComponent)(r.Match, {
															get when() {
																return O() === "loading";
															},
															get children() {
																return $();
															},
														}),
														(0, d.createComponent)(r.Match, {
															get when() {
																return O() === "done";
															},
															get children() {
																const q = v();
																return (
																	(0, C.insert)(
																		q,
																		(0, d.createComponent)(r.Show, {
																			get when() {
																				return !M.conciseMessage;
																			},
																			get fallback() {
																				return "Updated successfully!";
																			},
																			get children() {
																				return [
																					"Updated successfully! You now have ",
																					(0, m.memo)(() => A()),
																					" fast requests.",
																				];
																			},
																		}),
																	),
																	q
																);
															},
														}),
														(0, d.createComponent)(r.Match, {
															get when() {
																return O() === "idle";
															},
															get children() {
																const q = S();
																return (
																	(0, C.insert)(
																		q,
																		(0, d.createComponent)(g.$rdc, {
																			type: "primary",
																			onClick: x,
																			get style() {
																				return {
																					"font-size": "12px",
																					padding: "2px 4px",
																					cursor:
																						A() === U() ? "default" : "pointer",
																					opacity:
																						A() === U() || M.conciseMessage
																							? "0.5"
																							: "1",
																				};
																			},
																			get disabled() {
																				return A() === U();
																			},
																			get children() {
																				return [
																					(0, m.memo)(() =>
																						(0, m.memo)(() => A() > U())()
																							? "+"
																							: A() < U()
																								? "-"
																								: "",
																					),
																					"$",
																					(0, m.memo)(
																						() =>
																							(Math.abs(A() - U()) / 500) * 20,
																					),
																					(0, d.createComponent)(r.Show, {
																						get when() {
																							return !M.conciseMessage;
																						},
																						get fallback() {
																							return "/mo";
																						},
																						children: "/mo Confirm",
																					}),
																				];
																			},
																		}),
																	),
																	q
																);
															},
														}),
													];
												},
											}),
											(0, d.createComponent)(r.Show, {
												get when() {
													return M.conciseMessage;
												},
												get children() {
													const q = y();
													return q.style.setProperty("flex", "1"), q;
												},
											}),
										];
									},
								}),
							),
							H
						);
					})();
				}
				function D() {
					const M = (0, u.$odc)(),
						N = (B) => {
							if (B && (0, o.$n6b)(B.scheme)) return B;
						},
						[A, R] = (0, r.createSignal)(
							N(M.aiService.getLastActiveFileEditor()?.input?.resource),
						),
						O = M.editorService.onDidActiveEditorChange(() => {
							R(N(M.aiService.getLastActiveFileEditor()?.input?.resource));
						});
					return (
						(0, r.onCleanup)(() => {
							O.dispose();
						}),
						A
					);
				}
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	