define(de[4147], he([1, 0, 2, 13, 36]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ComposerDataHandlerProvider = void 0);
			const E = (C) => {
				const d = (0, w.$odc)(),
					[m, r] = (0, i.createSignal)(void 0);
				return (
					(0, i.createEffect)(() => {
						const u = C.composerId;
						let a = !1;
						const c = (async () => {
							const n = await d.composerDataService.getComposerHandleById(u);
							if (a) {
								n?.dispose();
								return;
							}
							return r(n), n;
						})();
						(0, i.onCleanup)(() => {
							(a = !0),
								r(void 0),
								c.then((n) => {
									n?.dispose();
								});
						});
					}),
					(0, t.createComponent)(i.Show, {
						get when() {
							return m();
						},
						children: (u) => C.children(u),
					})
				);
			};
			e.ComposerDataHandlerProvider = E;
		}),
		define(
			de[4148],
			he([1, 0, 2, 2, 13, 311, 36]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerLoginButton = m);
				const d = (0, t.template)(
					'<div class="composer-bar-button codebase-button">Log in',
				);
				function m() {
					const r = (0, C.$odc)(),
						{ showHover: u, hideHover: a } = (0, E.useComposerHoverTooltip)({
							delay: 300,
							additionalClasses: ["chat-hover-tooltip"],
						}),
						h = (0, w.createMemo)(() => " \u23CE");
					return (() => {
						const c = d(),
							n = c.firstChild;
						return (
							c.addEventListener("mouseleave", () => {
								a();
							}),
							c.addEventListener("mouseenter", (g) => {
								u(g, { value: "Log in to use Cursor AI features" });
							}),
							c.addEventListener("click", () => {
								r.cursorAuthenticationService.login();
							}),
							c.style.setProperty("line-height", "150%"),
							c.style.setProperty(
								"color",
								"var(--vscode-button-secondaryForeground)",
							),
							c.style.setProperty("display", "flex"),
							c.style.setProperty("align-items", "center"),
							c.style.setProperty("position", "relative"),
							c.style.setProperty("font-size", "10px"),
							c.style.setProperty("text-align", "right"),
							c.style.setProperty("margin-left", "auto"),
							(0, i.insert)(c, h, null),
							c
						);
					})();
				}
			},
		),
		define(
			de[4149],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 792, 295, 36, 58, 270, 2419]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerLintingToolCallBlock = void 0);
				const g = (0, t.template)('<div class="tool-call-block-content">'),
					p = (0, t.template)(
						'<div class="tool-call-status"><span>Reading lints...',
					),
					o = (0, t.template)(
						'<div class="tool-call-status"><span class="codicon codicon-check"></span><span>No linter errors',
					),
					f = (0, t.template)('<div class="tool-call-status">Found lints:'),
					b = (0, t.template)('<div class="lint-error"><span>And <!> more'),
					s = (0, t.template)('<div class="lint-error-disable-auto-fix">'),
					l = (0, t.template)('<div class="lint-errors">'),
					y = (0, t.template)(
						'<div class="lint-error"><span class="codicon codicon-warning"></span><span>',
					),
					$ = 3,
					v = (S) => {
						const I = (0, h.$odc)(),
							[T, P] = (0, r.createSignal)(!1),
							[k, L] = (0, n.$K0b)(c.$JW, I.configurationService, !0),
							D = () => {
								P(!T());
							},
							M = (A) => {
								A.stopPropagation(), L(!1);
							},
							N = (A) => {
								A.stopPropagation(), L(!0);
							};
						return (0, d.createComponent)(u.ComposerToolCallBlockContainer, {
							get children() {
								const A = g();
								return (
									A.addEventListener("click", D),
									(0, C.insert)(
										A,
										(0, d.createComponent)(r.Show, {
											get when() {
												return S.lintingStatus === "linted";
											},
											get fallback() {
												return (() => {
													const R = p(),
														O = R.firstChild;
													return (
														(0, C.insert)(
															R,
															(0, d.createComponent)(a.$Z8b, {
																small: !0,
																extras: { style: { "margin-right": "6px" } },
															}),
															O,
														),
														O.style.setProperty(
															"color",
															"var(--vscode-descriptionForeground)",
														),
														R
													);
												})();
											},
											get children() {
												return (0, d.createComponent)(r.Show, {
													get when() {
														return S.linterErrors && S.linterErrors.length > 0
															? S.linterErrors
															: !1;
													},
													get fallback() {
														return (() => {
															const R = o(),
																O = R.firstChild;
															return (
																O.style.setProperty(
																	"color",
																	"var(--vscode-testing-iconPassed)",
																),
																O.style.setProperty("margin-right", "6px"),
																R
															);
														})();
													},
													children: (R) => [
														f(),
														(() => {
															const O = l();
															return (
																(0, C.insert)(
																	O,
																	(0, d.createComponent)(r.For, {
																		get each() {
																			return (0, m.memo)(() => !!T())()
																				? R()
																				: R().slice(0, $);
																		},
																		children: (B) =>
																			(() => {
																				const U = y(),
																					z = U.firstChild,
																					F = z.nextSibling;
																				return (
																					z.style.setProperty(
																						"color",
																						"var(--vscode-editorWarning-foreground)",
																					),
																					z.style.setProperty(
																						"margin-right",
																						"6px",
																					),
																					(0, C.insert)(F, () => B.message),
																					(0, w.effect)(() =>
																						(0, i.className)(
																							F,
																							`lint-message ${T() ? "multiline" : "ellipsized"}`,
																						),
																					),
																					U
																				);
																			})(),
																	}),
																	null,
																),
																(0, C.insert)(
																	O,
																	(0, d.createComponent)(r.Show, {
																		get when() {
																			return (
																				(0, m.memo)(() => !T())() &&
																				R().length > $
																			);
																		},
																		get children() {
																			const B = b(),
																				U = B.firstChild,
																				z = U.firstChild,
																				F = z.nextSibling,
																				x = F.nextSibling;
																			return (
																				U.style.setProperty(
																					"color",
																					"var(--vscode-descriptionForeground)",
																				),
																				(0, C.insert)(
																					U,
																					() => R().length - $,
																					F,
																				),
																				B
																			);
																		},
																	}),
																	null,
																),
																(0, C.insert)(
																	O,
																	(0, d.createComponent)(r.Show, {
																		get when() {
																			return T();
																		},
																		get children() {
																			const B = s();
																			return (
																				(0, E.addEventListener)(
																					B,
																					"click",
																					k() ? M : N,
																				),
																				(0, C.insert)(B, () =>
																					k()
																						? "Click to disable auto-fixing of lints"
																						: "Auto lint fixing is disabled, click to re-enable",
																				),
																				B
																			);
																		},
																	}),
																	null,
																),
																O
															);
														})(),
													],
												});
											},
										}),
									),
									A
								);
							},
						});
					};
				e.ComposerLintingToolCallBlock = v;
			},
		),
		