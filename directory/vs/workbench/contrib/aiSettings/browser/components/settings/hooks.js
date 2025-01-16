define(de[722], he([1, 0, 13, 134, 36, 232]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$B$b = C);
			function C() {
				const d = (0, w.$odc)(),
					m = d.aiSettingsService,
					r = d.cursorAuthenticationService,
					[u, a] = (0, t.createSignal)(!1),
					[h, c] = (0, t.createSignal)(i.MembershipType.FREE),
					[n, g] = (0, t.createSignal)(m.getUseOpenAIKey()),
					[p, o] = (0, t.createSignal)(""),
					[f, b] = (0, t.createSignal)(E.SignUpType.UNKNOWN);
				return (
					(0, t.createEffect)(() => {
						d.cursorAuthenticationService
							.getEmailAndSignUpType()
							.then(({ email: s, signUpType: l }) => {
								s && o(s), l && b(l);
							});
					}),
					(0, t.createEffect)(() => {
						const s = ($) => {
								a($);
							},
							l = ($) => {
								c($);
							},
							y = () => {
								d.cursorAuthenticationService.refreshAuthService(),
									d.cursorAuthenticationService
										.getEmailAndSignUpType()
										.then(({ email: $, signUpType: v }) => {
											$ && o($), v && b(v);
										});
							};
						r.addLoginChangedListener(s),
							r.addSubscriptionChangedListener(l),
							r.addLoginChangedListener(y),
							m.addOpenAIKeyListener(g),
							a(r.isAuthenticated()),
							c(r.membershipType()),
							(0, t.onCleanup)(() => {
								m.removeOpenAIKeyListener(g),
									r.removeLoginChangedListener(s),
									r.removeSubscriptionChangedListener(l),
									r.removeLoginChangedListener(y);
							});
					}),
					[u, h, n, p, f]
				);
			}
		}),
		define(
			de[4137],
			he([1, 0, 2, 2, 2, 2, 13, 722, 232]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$jDc = u);
				const r = (0, t.template)(
					'<div class="settings__item_description">You are currently signed in with <strong></strong>.',
				);
				function u() {
					const [a, h, c, n, g] = (0, d.$B$b)(),
						p = (0, C.createMemo)(() => {
							switch (g()) {
								case m.SignUpType.AUTH_0:
									return ["Google", "Github"];
								case m.SignUpType.GITHUB:
									return ["your email", "Google"];
								case m.SignUpType.GOOGLE:
									return ["your email", "Github"];
							}
							return [];
						});
					return (0, i.createComponent)(C.Show, {
						get when() {
							return (
								(0, E.memo)(
									() => n() !== "" && g() !== m.SignUpType.UNKNOWN,
								)() && a()
							);
						},
						get children() {
							const o = r(),
								f = o.firstChild,
								b = f.nextSibling;
							return (0, w.insert)(b, n), o;
						},
					});
				}
			},
		),
		define(
			de[1064],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 2998, 36, 1006, 331]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$YCc = p);
				const c = (0, t.template)("<p>"),
					n = (0, t.template)("<div>"),
					g = (0, t.template)(
						'<div><div class="settings-editor"><div><div><p>',
					);
				function p(o) {
					const f = (0, u.$odc)();
					return (() => {
						const b = g(),
							s = b.firstChild,
							l = s.firstChild,
							y = l.firstChild,
							$ = y.firstChild;
						return (
							s.addEventListener("click", () => {
								o.onChange?.(!o.value);
							}),
							s.style.setProperty("display", "flex"),
							s.style.setProperty("width", "100%"),
							l.style.setProperty("display", "flex"),
							l.style.setProperty("font-size", "12px"),
							l.style.setProperty("flex-direction", "column"),
							l.style.setProperty("gap", "8px"),
							(0, d.insert)(
								l,
								(0, C.createComponent)(m.Show, {
									get when() {
										return o.label || o.labelExtra;
									},
									get children() {
										const v = c();
										return (
											v.style.setProperty("margin", "0"),
											v.style.setProperty("color", "var(--vscode-foreground)"),
											v.style.setProperty("display", "flex"),
											v.style.setProperty("align-items", "center"),
											v.style.setProperty("gap", "4px"),
											v.style.setProperty("font-weight", "500"),
											(0, d.insert)(v, () => o.label, null),
											(0, d.insert)(v, () => o.labelExtra, null),
											v
										);
									},
								}),
								y,
							),
							y.style.setProperty("display", "flex"),
							y.style.setProperty("gap", "8px"),
							(0, d.insert)(
								y,
								(0, C.createComponent)(m.Show, {
									get when() {
										return o.value !== void 0;
									},
									get children() {
										return (0, C.createComponent)(a.$XCc, {
											get value() {
												return o.value;
											},
											onChange: () => {},
										});
									},
								}),
								$,
							),
							$.style.setProperty("margin", "0"),
							$.style.setProperty("line-height", "130%"),
							$.style.setProperty("color", "var(--vscode-foreground)"),
							$.style.setProperty("opacity", "0.8"),
							$.style.setProperty("font-size", "0.95em"),
							(0, d.insert)($, () => o.description),
							(0, d.insert)(
								b,
								(0, C.createComponent)(m.Show, {
									get when() {
										return o.extra;
									},
									get children() {
										const v = n();
										return (
											v.style.setProperty("display", "flex"),
											(0, d.insert)(v, () => o.extra),
											v
										);
									},
								}),
								null,
							),
							(0, d.insert)(
								b,
								(0, C.createComponent)(m.Show, {
									get when() {
										return o.children;
									},
									get children() {
										return (0, C.createComponent)(r.$UCc, {
											get style() {
												return {
													display: "flex",
													"margin-top": "8px",
													"flex-direction": "column",
													gap: "8px",
													...o.groupStyle,
												};
											},
											get children() {
												return o.children;
											},
										});
									},
								}),
								null,
							),
							(0, E.effect)(
								(v) => {
									const S = {
											display: "flex",
											"flex-direction": "column",
											gap: "8px",
											...o.containerStyle,
										},
										I =
											"settings-sub-section" +
											((0, h.$d$b)(f.themeService) ? " dark" : " light");
									return (
										(v._v$ = (0, w.style)(b, S, v._v$)),
										I !== v._v$2 && (0, i.className)(b, (v._v$2 = I)),
										v
									);
								},
								{ _v$: void 0, _v$2: void 0 },
							),
							b
						);
					})();
				}
			},
		),
		define(
			de[4138],
			he([1, 0, 2, 2, 2, 13, 148, 75, 974, 36, 262, 83, 1064, 1006, 2371]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$HDc = s);
				const n = (0, t.template)("<div>Beta features"),
					g = (0, t.template)(
						'<div class="settings-checkbox-row"><label for="enable-background-bugfinding">Enable background bug finding',
					),
					p = (0, t.template)(
						"<div><div>Check out the Bug Finder tab next to Chat.",
					),
					o = (l) => {
						switch (l) {
							case C.StreamCppRequest_ControlToken.QUIET:
								return "quiet";
							case C.StreamCppRequest_ControlToken.LOUD:
								return "loud";
							case C.StreamCppRequest_ControlToken.OP:
								return "op";
							case C.StreamCppRequest_ControlToken.UNSPECIFIED:
								return "unspecified";
						}
					},
					f = (l) => {
						switch (l) {
							case a.EmbeddingModel.VOYAGE_CODE_2:
								return "VoyageCode2";
							case a.EmbeddingModel.TEXT_EMBEDDINGS_LARGE_3:
								return "TextEmbeddingsLarge3";
							case a.EmbeddingModel.QWEN_1_5B_CUSTOM:
								return "Qwen1_5B_Custom";
							case a.EmbeddingModel.UNSPECIFIED:
								return "unspecified";
							default:
								return l;
						}
					},
					b = (l) => {
						switch (l) {
							case "VoyageCode2":
								return a.EmbeddingModel.VOYAGE_CODE_2;
							case "TextEmbeddingsLarge3":
								return a.EmbeddingModel.TEXT_EMBEDDINGS_LARGE_3;
							case "Qwen1_5B_Custom":
								return a.EmbeddingModel.QWEN_1_5B_CUSTOM;
							case "unspecified":
							default:
								return a.EmbeddingModel.UNSPECIFIED;
						}
					};
				function s() {
					const l = (0, r.$odc)(),
						y = (A, R) => {
							l.reactiveStorageService.setApplicationUserPersistentStorage(
								"cursorPredictionUIExperiments",
								(O) => {
									const B = new Set(O ?? []);
									return R ? B.add(A) : B.delete(A), Array.from(B);
								},
							);
						},
						[$, v] = (0, E.createSignal)(!1),
						S = () => v(!$()),
						I = (0, E.createMemo)(
							() =>
								l.reactiveStorageService.applicationUserPersistentStorage
									.composerState.defaultCapabilities || [],
						),
						T = (A) => {
							I().some((O) => O.type === A)
								? l.reactiveStorageService.setApplicationUserPersistentStorage(
										"composerState",
										"defaultCapabilities",
										(O) => O?.filter((B) => B.type !== A) || [],
									)
								: k({ type: A, data: u.defaultCapabilityData[A] });
						},
						P = (A) => {
							k(A);
						},
						k = (A) => {
							l.reactiveStorageService.setApplicationUserPersistentStorage(
								"composerState",
								"defaultCapabilities",
								(R) => {
									const O = R ? [...R] : [],
										B = O.findIndex((U) => U.type === A.type);
									return B !== -1 ? (O[B] = A) : O.push(A), O;
								},
							);
						};
					(0, E.createEffect)(() => {
						const A = d.$Bfb.setInterval(() => {
							l.cursorPredictionService.periodicallyReloadCursorPredictionConfig(
								!0,
							);
						}, 3e4);
						l.cursorPredictionService.periodicallyReloadCursorPredictionConfig(
							!0,
						),
							(0, E.onCleanup)(() => d.$Bfb.clearInterval(A));
					});
					const [L, D] = (0, E.createSignal)(void 0),
						[M, N] = (0, E.createSignal)(!1);
					return (0, w.createComponent)(m.$eDc, {
						get children() {
							return [
								(() => {
									const A = n();
									return A.style.setProperty("font-size", "20px"), A;
								})(),
								(0, w.createComponent)(h.$YCc, {
									label: "Notepads",
									description:
										"Craft and share context between chat and composers",
									get value() {
										return l.reactiveStorageService
											.applicationUserPersistentStorage.notepadState
											.isNotepadEnabled;
									},
									onChange: (A) => {
										l.reactiveStorageService.setApplicationUserPersistentStorage(
											"notepadState",
											"isNotepadEnabled",
											A,
										);
									},
								}),
								(0, w.createComponent)(E.Show, {
									get when() {
										return (
											l.serverConfigService.cachedServerConfig.bugConfigResponse
												?.bugBotV1?.killSwitch !== !0
										);
									},
									get children() {
										return (0, w.createComponent)(h.$YCc, {
											label: "Bug Finder",
											description:
												"Run a bug finder on your current git diff to find bugs.",
											get value() {
												return (
													l.reactiveStorageService
														.applicationUserPersistentStorage.bugbotState
														.isEnabled ?? !1
												);
											},
											onChange: (A) => {
												l.serverConfigService.cachedServerConfig
													.bugConfigResponse?.bugBotV1?.killSwitch !== !0 &&
													l.reactiveStorageService.setApplicationUserPersistentStorage(
														"bugbotState",
														"explicitEnableOrDisable",
														A,
													);
											},
											get children() {
												return (0, w.createComponent)(E.Show, {
													get when() {
														return l.reactiveStorageService
															.applicationUserPersistentStorage.bugbotState
															.isEnabled;
													},
													get children() {
														const A = p(),
															R = A.firstChild,
															O = R.firstChild;
														return (
															A.style.setProperty("padding-left", "4px"),
															R.style.setProperty("display", "flex"),
															R.style.setProperty("flex-direction", "column"),
															R.style.setProperty("gap", "8px"),
															(0, i.insert)(
																R,
																(0, w.createComponent)(E.Show, {
																	get when() {
																		return l.serverConfigService
																			.cachedServerConfig.bugConfigResponse
																			?.bugBotV1?.isSubsidized;
																	},
																	get children() {
																		const B = g(),
																			U = B.firstChild;
																		return (
																			(0, i.insert)(
																				B,
																				(0, w.createComponent)(c.$XCc, {
																					get value() {
																						return (
																							l.reactiveStorageService
																								.applicationUserPersistentStorage
																								.bugbotState
																								.backgroundBugFindingEnabled !==
																							!1
																						);
																					},
																					onChange: (z) => {
																						l.reactiveStorageService.setApplicationUserPersistentStorage(
																							"bugbotState",
																							"backgroundBugFindingEnabled",
																							z,
																						);
																					},
																				}),
																				U,
																			),
																			B
																		);
																	},
																}),
																null,
															),
															A
														);
													},
												});
											},
										});
									},
								}),
							];
						},
					});
				}
			},
		),
		define(
			de[4139],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 26, 123, 36, 140, 502, 58, 7, 907, 1141,
				1142,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$J0b = b);
				const o = (0, t.template)("<span>"),
					f = (0, t.template)(
						'<div><div></div><button class="chat-button-secondary"><span></span></button><span class="chat-button-secondary"><span></span></span><span class="chat-button-secondary right">',
					);
				function b(s) {
					const l = (0, m.useContext)(c.$ygc),
						y = (0, h.$odc)(),
						$ = (A) => {
							y.commandService.executeCommand(g.$dX);
						},
						v = () => {
							y.aiChatService.showChatHistory();
						},
						S = () => {
							y.aiChatService.hideChatHistory();
						},
						[I, T] = (0, m.createSignal)(!1);
					let P;
					const k = (0, p.$Ogb)().ResizeObserver;
					(0, m.onMount)(() => {
						const A = new k((R) => {
							for (const O of R) {
								const { width: B, height: U } = O.contentRect;
								T(B < 350);
							}
						});
						P && A.observe(P),
							(0, m.onCleanup)(() => {
								A.disconnect();
							});
					});
					let L = !1;
					L = !0;
					const D = (0, m.createMemo)(
							() =>
								y.reactiveStorageService.nonPersistentStorage
									.reactivePrimaryBarLocation === "right",
						),
						[M, N] = (0, m.createSignal)(
							l.isEditorWindow
								? y.themeService.getColorTheme().getColor(a.$wGb)?.toString()
								: "var(--vscode-editor-background)",
						);
					return (
						y.themeService.onDidColorThemeChange((A) => {
							N(
								l.isEditorWindow
									? y.themeService.getColorTheme().getColor(a.$wGb)?.toString()
									: "var(--vscode-editor-background)",
							);
						}),
						(() => {
							const A = f(),
								R = A.firstChild,
								O = R.nextSibling,
								B = O.firstChild,
								U = O.nextSibling,
								z = U.firstChild,
								F = U.nextSibling,
								x = P;
							return (
								typeof x == "function" ? (0, d.use)(x, A) : (P = A),
								A.style.setProperty("display", "flex"),
								A.style.setProperty("position", "sticky"),
								A.style.setProperty("z-index", "30"),
								A.style.setProperty("top", "0"),
								A.style.setProperty("left", "1px"),
								A.style.setProperty("flex-direction", "row"),
								A.style.setProperty("justify-content", "left"),
								A.style.setProperty("gap", "0.25rem"),
								A.style.setProperty("align-items", "center"),
								A.style.setProperty("padding", "0 0.5rem"),
								A.style.setProperty("height", "40px"),
								A.style.setProperty("flex-shrink", "0"),
								A.style.setProperty("box-sizing", "border-box"),
								R.style.setProperty("position", "absolute"),
								R.style.setProperty("top", "0"),
								R.style.setProperty("left", "1px"),
								R.style.setProperty("width", "100%"),
								R.style.setProperty("height", "100%"),
								R.style.setProperty("z-index", "-1"),
								O.addEventListener("click", () => {
									l.chatData.displayTabs ? S() : v();
								}),
								(0, C.insert)(O, () => !I() && "History", null),
								U.addEventListener("click", () => {
									$("");
								}),
								(0, C.insert)(U, () => !I() && "New Chat", null),
								F.addEventListener("click", () => {
									y.commandService.executeCommand(c.$Mgc);
								}),
								F.style.setProperty("margin-left", "auto"),
								(0, C.insert)(
									F,
									(0, i.createComponent)(m.Show, {
										get when() {
											return D();
										},
										get children() {
											const H = o();
											return (
												(0, E.effect)(() =>
													(0, w.className)(
														H,
														u.ThemeIcon.asClassName(r.$ak.arrowLeft),
													),
												),
												H
											);
										},
									}),
									null,
								),
								(0, C.insert)(F, () => !I() && "Attach to Side Panel", null),
								(0, C.insert)(
									F,
									(0, i.createComponent)(m.Show, {
										get when() {
											return !D();
										},
										get children() {
											const H = o();
											return (
												(0, E.effect)(() =>
													(0, w.className)(
														H,
														u.ThemeIcon.asClassName(r.$ak.arrowRight),
													),
												),
												H
											);
										},
									}),
									null,
								),
								(0, E.effect)(
									(H) => {
										const q = M(),
											V = u.ThemeIcon.asClassName(
												D()
													? r.$ak.layoutSidebarLeft
													: r.$ak.layoutSidebarRight,
											),
											G = u.ThemeIcon.asClassName(n.$G0b);
										return (
											q !== H._v$ &&
												((H._v$ = q) != null
													? R.style.setProperty("background", q)
													: R.style.removeProperty("background")),
											V !== H._v$2 && (0, w.className)(B, (H._v$2 = V)),
											G !== H._v$3 && (0, w.className)(z, (H._v$3 = G)),
											H
										);
									},
									{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
								),
								A
							);
						})()
					);
				}
			},
		),
		define(
			de[1363],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 26, 502, 1232, 312, 36]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wbc = void 0),
					(e.$xbc = s);
				const g = (0, t.template)("<div>"),
					p = (0, t.template)("<span>"),
					o = (0, t.template)(
						'<div class="input-box-code-selection-collapse-toggle">',
					),
					f = (0, t.template)('<div class="input-box-code-selection"><div>'),
					b = (l) => {
						const y = (0, n.$odc)(),
							$ = (0, r.createMemo)(() => l.selection),
							v = 12,
							S = 24,
							[I, T] = (0, r.createSignal)(!0),
							[P, k] = (0, r.createSignal)(!1),
							[L, D] = (0, r.createSignal)(
								$()
									.text.split(`
`)
									.slice(1, -1).length > S,
							),
							[M, N] = (0, r.createSignal)(null),
							A = (0, r.createMemo)(() => $().text),
							R = (() => {
								const B = g();
								return (
									B.style.setProperty("width", "100%"),
									B.style.setProperty("height", "100%"),
									B.style.setProperty("box-sizing", "border-box"),
									B
								);
							})();
						(0, r.createEffect)(() => {
							const B = $(),
								U = y.instantiationService.createInstance(
									c.$X0b,
									R,
									c.$X0b.getEditorOptions(y.configurationService),
									{},
								);
							O(U),
								N(U),
								k(!0),
								(0, r.onCleanup)(() => {
									U.getModel()?.dispose(), U.dispose();
								});
						});
						const O = (B) => {
							let U = "";
							const F = /```(\w*)/.exec(A());
							F && (U = F[1]);
							const x =
								y.languageService.createByLanguageNameOrFilepathOrFirstLine(
									U,
									null,
									void 0,
								);
							let H = (0, h.$vbc)();
							const q = A()
								.split(`
`)
								.slice(1, -1);
							D(q.length > S);
							const V = y.modelService.createModel(
								q.join(`
`),
								x,
								H,
								!1,
							);
							B.setModel(V);
						};
						return (
							(0, r.createEffect)(() => {
								const B = M();
								B &&
									(I()
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
							(0, r.onCleanup)(() => {
								const B = M();
								if (B) {
									const U = B.getModel();
									U && U.dispose(), B.dispose();
								}
							}),
							(() => {
								const B = f(),
									U = B.firstChild;
								return (
									U.style.setProperty("white-space", "pre"),
									U.style.setProperty("padding", "0.75rem"),
									(0, w.insert)(U, R, null),
									(0, w.insert)(
										U,
										(0, E.createComponent)(r.Show, {
											get when() {
												return (0, m.memo)(() => !!L())() && P();
											},
											get children() {
												const z = o();
												return (
													z.addEventListener("click", () => {
														T(!I());
													}),
													(0, w.insert)(
														z,
														(0, E.createComponent)(r.Switch, {
															get children() {
																return [
																	(0, E.createComponent)(r.Match, {
																		get when() {
																			return I();
																		},
																		get children() {
																			const F = p();
																			return (
																				(0, d.effect)(() =>
																					(0, C.className)(
																						F,
																						u.ThemeIcon.asClassName(a.$E0b),
																					),
																				),
																				F
																			);
																		},
																	}),
																	(0, E.createComponent)(r.Match, {
																		get when() {
																			return !I();
																		},
																		get children() {
																			const F = p();
																			return (
																				(0, d.effect)(() =>
																					(0, C.className)(
																						F,
																						u.ThemeIcon.asClassName(a.$F0b),
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
									(0, d.effect)(
										(z) => {
											const F = {
													position: "relative",
													overflow: "hidden",
													...l.style,
												},
												x = L()
													? I()
														? `${19 * v}px`
														: `${19 * S}px`
													: `${
															19 *
																A()
																	.split(`
`)
																	.slice(1, -1).length +
															10
														}px`,
												H = !P() || I() ? "0rem" : "1.5rem";
											return (
												(z._v$ = (0, i.style)(B, F, z._v$)),
												x !== z._v$2 &&
													((z._v$2 = x) != null
														? U.style.setProperty("height", x)
														: U.style.removeProperty("height")),
												H !== z._v$3 &&
													((z._v$3 = H) != null
														? U.style.setProperty("padding-bottom", H)
														: U.style.removeProperty("padding-bottom")),
												z
											);
										},
										{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
									),
									B
								);
							})()
						);
					};
				e.$wbc = b;
				function s(l) {
					return (0, E.createComponent)(r.Show, {
						get when() {
							return l.selection;
						},
						children: (y) =>
							(0, E.createComponent)(e.$wbc, {
								get selection() {
									return y();
								},
								get lines() {
									return l.lines;
								},
								get style() {
									return l.style;
								},
							}),
					});
				}
			},
		),
		define(
			de[4140],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 436, 26, 309, 1689, 128, 84, 1232, 502,
				36, 707,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Abc = void 0),
					(e.$Bbc = S);
				const s = (0, t.template)("<div>"),
					l = (0, t.template)("<span>"),
					y = (0, t.template)(
						'<div class="input-box-code-selection-collapse-toggle">',
					),
					$ = (0, t.template)('<div class="input-box-code-selection"><div>'),
					v = (I, T, P) => {
						const [D, M] = (0, r.createSignal)(!0),
							N = (() => {
								const G = s();
								return (
									G.style.setProperty("width", "100%"),
									G.style.setProperty("height", "100%"),
									G.style.setProperty("box-sizing", "border-box"),
									G
								);
							})(),
							R = T.instantiationService
								.createChild(new n.$Ki([g.$bO, new b.$JMb(new u.$bpb(N))]))
								.createInstance(
									h.$3yb,
									N,
									{ ...c.$zbc.getEditorOptions(T.configurationService) },
									{
										originalEditor: { isSimpleWidget: !0 },
										modifiedEditor: { isSimpleWidget: !0 },
									},
								);
						(R.custom = !0), R.layout();
						let O = (0, p.$vbc)(),
							B = (0, p.$vbc)(),
							U = [],
							z = [];
						for (const G of I.diffs) {
							U.push(`--- a/${G.from}`),
								U.push(`+++ b/${G.to}`),
								z.push(`--- a/${G.from}`),
								z.push(`+++ b/${G.to}`);
							for (const K of G.chunks) {
								U.push(K.content), z.push(K.content);
								for (const J of K.lines)
									J[0] === "+"
										? z.push(J)
										: (J[0] === "-" || z.push(J), U.push(J));
							}
						}
						const F = Math.max(U.length, z.length),
							x = U.length > 24 || z.length > 24,
							H = T.languageService.createById("diff"),
							q = T.modelService.createModel(
								U.join(`
`),
								H,
								O,
								!0,
							),
							V = T.modelService.createModel(
								z.join(`
`),
								H,
								B,
								!0,
							);
						return (
							R.setModel({ original: q, modified: V }),
							(0, r.onMount)(() => {
								let G = 0;
								const K = T.window.setInterval(() => {
									R.layout(), G++, G >= 100 && T.window.clearInterval(K);
								}, 10);
							}),
							(0, r.createEffect)(() => {
								D()
									? x &&
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
										R.getModifiedEditor().setScrollTop(0),
										R.getModifiedEditor().setScrollLeft(0))
									: R.updateOptions({
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
							(0, r.onCleanup)(() => {
								R.dispose(), q.dispose(), V.dispose(), N.remove();
							}),
							(0, E.createComponent)(r.Show, {
								get when() {
									return U.length > 0 || z.length > 0;
								},
								get children() {
									const G = $(),
										K = G.firstChild;
									return (
										K.style.setProperty("white-space", "pre"),
										K.style.setProperty("padding", "0.75rem"),
										(x ? "1.5rem" : "0rem") != null
											? K.style.setProperty(
													"padding-bottom",
													x ? "1.5rem" : "0rem",
												)
											: K.style.removeProperty("padding-bottom"),
										(0, w.insert)(K, N, null),
										(0, w.insert)(
											K,
											(0, E.createComponent)(r.Show, {
												when: x,
												get children() {
													const J = y();
													return (
														J.addEventListener("click", () => {
															M(!D());
														}),
														(0, w.insert)(
															J,
															(0, E.createComponent)(r.Switch, {
																get children() {
																	return [
																		(0, E.createComponent)(r.Match, {
																			get when() {
																				return D();
																			},
																			get children() {
																				const W = l();
																				return (
																					(0, d.effect)(() =>
																						(0, C.className)(
																							W,
																							a.ThemeIcon.asClassName(o.$E0b),
																						),
																					),
																					W
																				);
																			},
																		}),
																		(0, E.createComponent)(r.Match, {
																			get when() {
																				return !D();
																			},
																			get children() {
																				const W = l();
																				return (
																					(0, d.effect)(() =>
																						(0, C.className)(
																							W,
																							a.ThemeIcon.asClassName(o.$F0b),
																						),
																					),
																					W
																				);
																			},
																		}),
																	];
																},
															}),
														),
														J
													);
												},
											}),
											null,
										),
										(0, d.effect)(
											(J) => {
												const W = {
														position: "relative",
														overflow: "hidden",
														...P,
													},
													X = x
														? D()
															? `${19 * 12}px`
															: `${19 * 24}px`
														: `${19 * F + 10}px`;
												return (
													(J._v$ = (0, i.style)(G, W, J._v$)),
													X !== J._v$2 &&
														((J._v$2 = X) != null
															? K.style.setProperty("height", X)
															: K.style.removeProperty("height")),
													J
												);
											},
											{ _v$: void 0, _v$2: void 0 },
										),
										G
									);
								},
							})
						);
					};
				e.$Abc = v;
				function S(I) {
					const T = (0, f.$odc)();
					return (0, m.memo)(() => (0, e.$Abc)(I.diff, T, I.style));
				}
			},
		),
		define(
			de[4141],
			he([1, 0, 2, 13, 9, 354, 1363, 36]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Ebc = m);
				function m(r) {
					const u = (0, d.$odc)(),
						[a, h] = (0, i.createSignal)();
					return (
						(0, i.createEffect)(() => {
							(async () => {
								const c = r.selection;
								for (let n = 0; n < 3; n++) {
									let g;
									if (
										(c.uri.scheme === "vscode-terminal"
											? (g = await (0, E.$7fc)(
													u.terminalService,
													w.URI.from(c.uri),
												))
											: (g = await (0, E.$2fc)(
													u.textModelService,
													u.dataScrubbingService,
													c,
												)),
										g?.text.startsWith("```plaintext") && n !== 2)
									) {
										await new Promise((p) => setTimeout(p, 1e3));
										continue;
									}
									h(g);
									break;
								}
							})();
						}),
						(0, t.createComponent)(i.Show, {
							get when() {
								return a();
							},
							children: (c) =>
								(0, t.createComponent)(C.$xbc, {
									get selection() {
										return c();
									},
									get style() {
										return r.style;
									},
								}),
						})
					);
				}
			},
		),
		define(
			de[1364],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 26, 79, 14, 9, 23, 36]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Fbc = void 0),
					(e.$Gbc = b);
				const p = (0, t.template)("<span>"),
					o = (0, t.template)(
						'<div><div><div></div></div><div class="input-box-code-selection"><div><img alt="Image not found">',
					);
				e.$Fbc = (0, a.$$O)(
					"chatinputbox-remove-selection",
					h.$ak.x,
					"Icon for removing a selection in the input box in AI chat.",
				);
				const f = 20;
				function b(s) {
					const l = (0, g.$odc)(),
						[y, $] = (0, r.createSignal)(!1),
						[v, S] = (0, r.createSignal)(!0);
					let I;
					(0, r.createEffect)(() => {
						if (!s.image) {
							S(!1);
							return;
						}
						(async () => {
							try {
								if (!s.image) {
									S(!1);
									return;
								}
								const k = c.URI.file(s.image.path),
									L = await l.fileService.exists(k);
								S(L);
							} catch {
								S(!1);
							}
						})();
					});
					const T = (0, r.createMemo)(() => {
						if (!s.image) return "";
						const P = c.URI.file(s.image.path);
						return n.$7g.uriToBrowserUri(P).toString();
					});
					return (0, m.createComponent)(r.Show, {
						get when() {
							return s.image;
						},
						children: (P) =>
							(() => {
								const k = o(),
									L = k.firstChild,
									D = L.firstChild,
									M = L.nextSibling,
									N = M.firstChild,
									A = N.firstChild;
								return (
									L.style.setProperty("display", "flex"),
									D.style.setProperty("flex-grow", "1"),
									M.addEventListener("mouseout", () => {
										I = setTimeout(() => {
											$(!1);
										}, f);
									}),
									M.addEventListener("mouseover", () => {
										I && (clearTimeout(I), (I = void 0)), $(!0);
									}),
									M.style.setProperty("position", "relative"),
									M.style.setProperty("border-radius", "4px"),
									M.style.setProperty("overflow", "hidden"),
									(0, E.insert)(
										M,
										(0, m.createComponent)(r.Show, {
											get when() {
												return y() && s.removeImage;
											},
											get children() {
												const R = p();
												return (
													R.addEventListener("click", (O) => {
														O.stopPropagation(), s.removeImage?.();
													}),
													R.style.setProperty("position", "absolute"),
													R.style.setProperty("top", "0.25rem"),
													R.style.setProperty("right", "0.25rem"),
													R.style.setProperty("font-size", "1em"),
													R.style.setProperty("z-index", "1"),
													R.style.setProperty(
														"background",
														"var(--vscode-editorWidget-border)",
													),
													R.style.setProperty("border-radius", "3px"),
													R.style.setProperty("cursor", "pointer"),
													(0, d.effect)(() =>
														(0, C.className)(
															R,
															u.ThemeIcon.asClassName(e.$Fbc),
														),
													),
													R
												);
											},
										}),
										N,
									),
									N.style.setProperty("width", "100%"),
									N.style.setProperty("height", "100%"),
									N.style.setProperty("display", "flex"),
									N.style.setProperty("align-items", "center"),
									A.style.setProperty("max-width", "100%"),
									A.style.setProperty("max-height", "200px"),
									(0, d.effect)(
										(R) => {
											const O = { margin: "0.5rem", ...s.style },
												B = v() ? `${T()}?t=${P().loadedAt}` : "";
											return (
												(R._v$ = (0, w.style)(k, O, R._v$)),
												B !== R._v$2 &&
													(0, i.setAttribute)(A, "src", (R._v$2 = B)),
												R
											);
										},
										{ _v$: void 0, _v$2: void 0 },
									),
									k
								);
							})(),
					});
				}
			},
		),
		define(
			de[4142],
			he([1, 0, 2, 2, 2, 13, 14, 26, 36, 9]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$8fc = a);
				const u = (0, t.template)("<div>");
				function a(h) {
					const c = (0, m.$odc)(),
						n = () => {
							const p = !g(),
								o =
									h.type === "file"
										? "fileSelections"
										: h.type === "code"
											? "codeSelections"
											: void 0;
							if (!o) {
								console.error("Can not pin this type", h.type);
								return;
							}
							c.chatDataService.setChatData("pinnedContexts", o, (f) => {
								if (h.type === "file") {
									const b = (f ?? []).filter(
										(s) => !(0, r.$Ac)(s.uri, h.item.uri),
									);
									return p ? [...b, h.item] : b;
								} else if (h.type === "code") {
									const b = (f ?? []).filter(
										(s) =>
											s.text !== h.item.text || !(0, r.$Ac)(s.uri, h.item.uri),
									);
									return p ? [...b, h.item] : b;
								}
								return f ?? [];
							}),
								c.telemetryService.publicLogCapture("aichat.pin.action", {
									type: h.type,
									pinned: p,
									item: h.item,
								});
						},
						g = (0, E.createMemo)(() => {
							switch (h.type) {
								case "file":
									return (
										c.chatDataService.chatData.pinnedContexts.fileSelections ??
										[]
									).some((o) => (0, r.$Ac)(o.uri, h.item.uri));
								case "code":
									return (
										c.chatDataService.chatData.pinnedContexts.codeSelections ??
										[]
									).some(
										(o) =>
											(0, r.$Ac)(o.uri, h.item.uri) && o.text === h.item.text,
									);
								default:
									return !1;
							}
						});
					return (() => {
						const p = u();
						return (
							p.addEventListener("click", (o) => {
								o.stopPropagation(), n();
							}),
							p.style.setProperty("cursor", "pointer"),
							p.style.setProperty("font-size", "1em"),
							(0, w.effect)(
								(o) => {
									const f = g()
											? "var(--vscode-input-foreground)"
											: "var(--vscode-editor-foreground)",
										b = g()
											? d.ThemeIcon.asClassName(C.$ak.pinnedDirty) +
												" clickable"
											: d.ThemeIcon.asClassName(C.$ak.pinned) + " clickable";
									return (
										f !== o._v$ &&
											((o._v$ = f) != null
												? p.style.setProperty("color", f)
												: p.style.removeProperty("color")),
										b !== o._v$2 && (0, i.className)(p, (o._v$2 = b)),
										o
									);
								},
								{ _v$: void 0, _v$2: void 0 },
							),
							p
						);
					})();
				}
			},
		),
		define(
			de[4143],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 26, 4142, 36, 331, 2377]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$9fc = o);
				const n = (0, t.template)("<div>"),
					g = (0, t.template)('<div class="fade-in">'),
					p = (0, t.template)(
						'<div><div class="input-box-selection-header compact"><div></div><div></div><div><div><div>',
					);
				function o(f) {
					const b = (0, h.$odc)(),
						s = (0, c.$f$b)(b.themeService),
						l = (0, c.$g$b)(b.themeService);
					return (() => {
						const y = p(),
							$ = y.firstChild,
							v = $.firstChild,
							S = v.nextSibling,
							I = S.nextSibling,
							T = I.firstChild,
							P = T.firstChild;
						return (
							y.style.setProperty("border-radius", "4px"),
							y.style.setProperty(
								"background-color",
								"var(--vscode-editor-background)",
							),
							y.style.setProperty("overflow", "hidden"),
							y.style.setProperty("transition", "border 0.1s"),
							$.addEventListener("click", (k) => {
								k.stopPropagation(), f.setIsOpen(!f.isOpen);
							}),
							$.style.setProperty("display", "flex"),
							$.style.setProperty("flex-direction", "row"),
							$.style.setProperty("align-items", "center"),
							$.style.setProperty("cursor", "pointer"),
							(0, w.insert)(
								$,
								(0, E.createComponent)(m.Show, {
									get when() {
										return typeof f.icon == "string";
									},
									get fallback() {
										return f.icon;
									},
									get children() {
										const k = n();
										return (
											k.style.setProperty("margin", "0 4px"),
											k.style.setProperty("font-size", "13px"),
											(0, d.effect)(() => (0, C.className)(k, f.icon)),
											k
										);
									},
								}),
								v,
							),
							v.addEventListener("click", (k) => {
								!f.isOpen ||
									!f.onTitleClick ||
									(k.stopPropagation(), f.onTitleClick?.());
							}),
							v.style.setProperty("cursor", "pointer"),
							v.style.setProperty("white-space", "nowrap"),
							v.style.setProperty("overflow", "hidden"),
							v.style.setProperty("text-overflow", "ellipsis"),
							v.style.setProperty("text-wrap", "nowrap"),
							v.style.setProperty("font-size", "0.7em"),
							v.style.setProperty("padding", "2px 4px"),
							(0, w.insert)(v, () => f.title),
							(0, w.insert)(
								$,
								(0, E.createComponent)(m.Show, {
									get when() {
										return f.subTitle;
									},
									get children() {
										const k = n();
										return (
											k.addEventListener("click", (L) => {
												!f.isOpen ||
													!f.onTitleClick ||
													(L.stopPropagation(), f.onTitleClick());
											}),
											k.style.setProperty("opacity", "0.5"),
											k.style.setProperty("margin-left", "5px"),
											k.style.setProperty("min-width", "0"),
											k.style.setProperty("cursor", "pointer"),
											k.style.setProperty("font-size", "0.8em"),
											k.style.setProperty("text-overflow", "ellipsis"),
											k.style.setProperty("overflow", "hidden"),
											k.style.setProperty("text-wrap", "nowrap"),
											(0, w.insert)(k, () => f.subTitle),
											(0, d.effect)(() =>
												(0, i.setAttribute)(
													k,
													"title",
													typeof f.subTitle == "string" ? f.subTitle : void 0,
												),
											),
											k
										);
									},
								}),
								S,
							),
							S.style.setProperty("flex-grow", "1"),
							(0, w.insert)(
								I,
								(0, E.createComponent)(m.Show, {
									get when() {
										return f.customToolbar;
									},
									get children() {
										return f.customToolbar;
									},
								}),
								T,
							),
							T.style.setProperty("display", "flex"),
							T.style.setProperty("align-items", "center"),
							T.style.setProperty("gap", "4px"),
							T.style.setProperty("padding", "0 3px"),
							T.style.setProperty("z-index", "1"),
							(0, w.insert)(
								T,
								(0, E.createComponent)(m.Show, {
									get when() {
										return (
											f.canBePinned && (f.type === "file" || f.type === "code")
										);
									},
									get children() {
										return (0, E.createComponent)(a.$8fc, {
											get item() {
												return f.item;
											},
											get type() {
												return f.type;
											},
										});
									},
								}),
								P,
							),
							(0, w.insert)(
								T,
								(0, E.createComponent)(m.Show, {
									get when() {
										return f.showCloseButton !== !1;
									},
									get children() {
										const k = n();
										return (
											k.addEventListener("click", (L) => {
												L.stopPropagation(), f.onRemove?.();
											}),
											k.style.setProperty("cursor", "pointer"),
											k.style.setProperty("font-size", "1em"),
											(0, d.effect)(() =>
												(0, C.className)(
													k,
													u.ThemeIcon.asClassName(r.$ak.x) + " clickable",
												),
											),
											k
										);
									},
								}),
								P,
							),
							P.addEventListener("click", (k) => {
								k.stopPropagation(), f.setIsOpen(!f.isOpen);
							}),
							P.style.setProperty("cursor", "pointer"),
							P.style.setProperty("font-size", "1em"),
							(0, w.insert)(
								y,
								(0, E.createComponent)(m.Show, {
									get when() {
										return f.isOpen;
									},
									get children() {
										const k = g();
										return (
											k.style.setProperty("position", "relative"),
											k.style.setProperty(
												"border-top",
												"1px solid transparent",
											),
											(0, w.insert)(k, () => f.children),
											(0, d.effect)(() =>
												(f.isOpen ? s() : "transparent") != null
													? k.style.setProperty(
															"border-top-color",
															f.isOpen ? s() : "transparent",
														)
													: k.style.removeProperty("border-top-color"),
											),
											k
										);
									},
								}),
								null,
							),
							(0, d.effect)(
								(k) => {
									const L = "1px solid " + s(),
										D =
											!f.isOpen && !f.showBorders
												? "transparent"
												: f.isFocused
													? l()
													: s(),
										M = f.icon ? "0px" : "6px",
										N = typeof f.title == "string" ? f.title : void 0,
										A =
											"input-box-selection-header-tools" +
											(f.alwaysShowToolbar !== !1 ? "" : " autohide"),
										R = f.customToolbar ? "1px solid " + s() : "none",
										O = f.customToolbar ? "3px" : "0px",
										B = `rotate(${f.isOpen ? "90deg" : "0deg"})`,
										U =
											u.ThemeIcon.asClassName(r.$ak.chevronRight) +
											" clickable";
									return (
										L !== k._v$ &&
											((k._v$ = L) != null
												? y.style.setProperty("border", L)
												: y.style.removeProperty("border")),
										D !== k._v$2 &&
											((k._v$2 = D) != null
												? y.style.setProperty("border-color", D)
												: y.style.removeProperty("border-color")),
										M !== k._v$3 &&
											((k._v$3 = M) != null
												? $.style.setProperty("padding-left", M)
												: $.style.removeProperty("padding-left")),
										N !== k._v$4 &&
											(0, i.setAttribute)(v, "title", (k._v$4 = N)),
										A !== k._v$5 && (0, C.className)(I, (k._v$5 = A)),
										R !== k._v$6 &&
											((k._v$6 = R) != null
												? T.style.setProperty("border-left", R)
												: T.style.removeProperty("border-left")),
										O !== k._v$7 &&
											((k._v$7 = O) != null
												? T.style.setProperty("margin-left", O)
												: T.style.removeProperty("margin-left")),
										B !== k._v$8 &&
											((k._v$8 = B) != null
												? P.style.setProperty("transform", B)
												: P.style.removeProperty("transform")),
										U !== k._v$9 && (0, C.className)(P, (k._v$9 = U)),
										k
									);
								},
								{
									_v$: void 0,
									_v$2: void 0,
									_v$3: void 0,
									_v$4: void 0,
									_v$5: void 0,
									_v$6: void 0,
									_v$7: void 0,
									_v$8: void 0,
									_v$9: void 0,
								},
							),
							y
						);
					})();
				}
			},
		),
		define(
			de[1365],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 4143, 36, 26, 14, 1046, 331]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$ecc = s);
				const f = (0, t.template)("<div><div><div>"),
					b = (0, t.template)("<div><div>");
				function s(l) {
					const y = (0, c.$odc)(),
						$ = (0, o.$g$b)(y.themeService),
						[v, S] = (0, a.createSignal)(0),
						[I, T] = (0, a.createSignal)(
							l.each.map((M, N) =>
								l.collapseByDefault ||
								("collapseByDefault" in M && M.collapseByDefault === !0)
									? !1
									: N === l.each.length - 1,
							),
						);
					(0, a.createEffect)(() => {
						T(
							l.each.map((M, N) =>
								l.collapseByDefault ||
								("collapseByDefault" in M && M.collapseByDefault === !0)
									? !1
									: N === l.each.length - 1,
							),
						);
					});
					const P = (0, a.createMemo)(() =>
						l.isFocused
							? l.showContainerUnconditionally
								? l.isRunning
								: l.isRunning || l.each.length === 1
							: !1,
					);
					(0, a.createEffect)(() => {
						if (!l.containerRef || !l.each.length || !l.show || !l.isFocused)
							return;
						const M = (N) => {
							const A = P();
							if (
								l.each.length > 1 &&
								N.key === "Enter" &&
								(N.metaKey || N.ctrlKey)
							) {
								N.preventDefault(), N.stopImmediatePropagation(), k();
								return;
							}
							if ((0, p.$dcc)(N, "Enter")) {
								if (
									(N.stopImmediatePropagation(),
									N.preventDefault(),
									l.each.length === 1 || A)
								) {
									const R = [...I()];
									(R[v()] = !R[v()]), T(R);
								} else l.startRunning?.();
								return;
							}
							if (A) {
								if ((0, p.$dcc)(N, "Escape")) {
									N.stopImmediatePropagation(),
										N.preventDefault(),
										l.stopRunning?.(),
										l.each.length === 1 && l.stopFocused?.();
									return;
								}
								if ((0, p.$dcc)(N, "ArrowDown")) {
									N.stopImmediatePropagation(),
										N.preventDefault(),
										v() === l.each.length - 1
											? (l.stopRunning?.(), S(0))
											: S(v() + 1);
									return;
								}
								if ((0, p.$dcc)(N, "ArrowUp")) {
									N.stopImmediatePropagation(),
										N.preventDefault(),
										v() === 0 ? (l.stopRunning?.(), S(0)) : S(v() - 1);
									return;
								}
								if ((0, p.$dcc)(N, "Backspace")) {
									N.stopImmediatePropagation(),
										N.preventDefault(),
										l.each.length === 1
											? (l.stopRunning?.(), l.stopFocused?.(), S(0))
											: S(v() - 1),
										l.boxPropsFunc(l.each[v()], v, !0).onRemove?.();
									return;
								}
								l.onKeyboardDown?.(N, l.each[v()]);
							}
						};
						l.containerRef.addEventListener("keydown", M),
							(0, a.onCleanup)(() => {
								l.containerRef &&
									l.containerRef.removeEventListener("keydown", M);
							});
					}),
						(0, a.createEffect)(() => {
							if (l.each.length > I().length) {
								const M =
									!l.collapseByDefault && l.each.length - I().length === 1;
								T([
									...(l.collapseOthersOnAdd ? I().map(() => !1) : I()),
									...Array.from(
										{ length: l.each.length - I().length },
										() => M,
									),
								]);
							}
						});
					const k = () => {
							I().filter((M) => !!M).length > 0
								? T(l.each.map(() => !1))
								: T(l.each.map(() => !0));
						},
						L = (0, a.createMemo)(() =>
							l.each.map((M, N) => l.boxPropsFunc(M, () => N)),
						),
						D = (0, a.createMemo)(() =>
							typeof l.title == "string" ? l.title : void 0,
						);
					return (0, C.createComponent)(a.Show, {
						get when() {
							return l.show === void 0 ? !0 : l.show;
						},
						get children() {
							const M = b(),
								N = M.firstChild;
							return (
								(0, r.insert)(
									M,
									(0, C.createComponent)(a.Show, {
										get when() {
											return (
												(l.each.length > 1 ||
													l.showContainerUnconditionally ||
													(l.showContainerOnSingleItem &&
														l.each.length === 1)) &&
												l.title
											);
										},
										get children() {
											const A = f(),
												R = A.firstChild,
												O = R.firstChild;
											return (
												A.style.setProperty("margin-bottom", "2px"),
												A.style.setProperty("font-size", "0.7rem"),
												A.style.setProperty("font-weight", "500"),
												A.style.setProperty("color", "rgb(147, 146, 147)"),
												A.style.setProperty("flex", "1"),
												A.style.setProperty("display", "flex"),
												A.style.setProperty("align-items", "center"),
												A.style.setProperty("justify-content", "space-between"),
												(0, r.insert)(A, () => l.title, R),
												R.style.setProperty("display", "flex"),
												R.style.setProperty("gap", "4px"),
												R.style.setProperty("align-items", "center"),
												R.style.setProperty("justify-content", "center"),
												R.style.setProperty("margin-right", "2px"),
												O.addEventListener("click", (B) => {
													B.stopPropagation(), k();
												}),
												O.style.setProperty("cursor", "pointer"),
												O.style.setProperty("font-size", "1em"),
												(0, m.effect)(() =>
													(0, d.className)(
														O,
														(I().filter((B) => !!B).length > 0
															? n.ThemeIcon.asClassName(g.$ak.collapseAll)
															: n.ThemeIcon.asClassName(g.$ak.expandAll)) +
															" clickable",
													),
												),
												A
											);
										},
									}),
									N,
								),
								N.style.setProperty("position", "relative"),
								N.style.setProperty("display", "flex"),
								N.style.setProperty("flex-direction", "column"),
								N.style.setProperty("gap", "4px"),
								(0, r.insert)(
									N,
									(0, C.createComponent)(a.For, {
										get each() {
											return l.each;
										},
										children: (A, R) =>
											(0, C.createComponent)(
												h.$9fc,
												(0, i.mergeProps)(() => L()[R()], {
													item: A,
													get isOpen() {
														return I()[R()];
													},
													setIsOpen: (O) => {
														const B = [...I()];
														(B[R()] = O), T(B);
													},
													get canBePinned() {
														return l.canBePinned;
													},
													onRemove: () => {
														L()[R()].onRemove?.();
														const O = [...I()];
														O.splice(R(), 1), T(O);
													},
													onTitleClick: () => {
														const O = L()[R()];
														if (O.onTitleClick) {
															O.onTitleClick();
															return;
														}
														const B = [...I()];
														(B[R()] = !B[R()]), T(B);
													},
													get showBorders() {
														return l.renderItemBorders;
													},
													get isFocused() {
														return (0, u.memo)(() => !!P())() && v() === R();
													},
													get type() {
														return l.type;
													},
													get showCloseButton() {
														return l.showCloseButton;
													},
													get children() {
														return l.children(A, R);
													},
												}),
											),
									}),
								),
								(0, m.effect)(
									(A) => {
										const R = D(),
											O = D(),
											B =
												l.each.length > 1 ||
												l.showContainerUnconditionally ||
												(l.showContainerOnSingleItem && l.each.length === 1)
													? l.class
													: "",
											U = {
												margin: "0px 0.5rem",
												"border-radius": "4px",
												border: "1px solid transparent",
												"border-color":
													l.isFocused && !P() ? $() : "transparent",
												...(l.each.length > 1 ||
												(l.showContainerOnSingleItem && l.each.length === 1)
													? {
															"background-color":
																"var(--vscode-editor-background)",
															padding: "4px",
															"padding-left": l.morePaddingLeft ? "6px" : "4px",
														}
													: {}),
												...l.style,
											};
										return (
											R !== A._v$ && (0, E.setAttribute)(M, "id", (A._v$ = R)),
											O !== A._v$2 &&
												(0, E.setAttribute)(M, "title", (A._v$2 = O)),
											B !== A._v$3 && (0, d.className)(M, (A._v$3 = B)),
											(A._v$4 = (0, w.style)(M, U, A._v$4)),
											A
										);
									},
									{ _v$: void 0, _v$2: void 0, _v$3: void 0, _v$4: void 0 },
								),
								M
							);
						},
					});
				}
			},
		),
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
		define(
			de[1967],
			he([1, 0, 2, 2, 2, 2, 36, 270, 58, 1233, 397, 140]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5ac = void 0);
				const h = (0, t.template)("<div>"),
					c = (n) => {
						const g = (0, C.$odc)(),
							p = (0, a.$zgc)(),
							[o] = (0, d.$K0b)(m.$mW, g.configurationService, !0),
							f = (0, r.$4ac)(
								() => n.tabId,
								() => n.bubbleId,
							);
						return (() => {
							const b = h();
							return (
								(0, w.spread)(
									b,
									(0, E.mergeProps)(
										{
											get id() {
												return (0, u.$dgc)(n.bubbleId);
											},
											get "data-bubble-id"() {
												return n.bubbleId;
											},
										},
										n,
										{
											get style() {
												return {
													"margin-left": "1px",
													width: "calc(100% - 1px)",
													padding: o() ? "0.5rem 0.6rem" : "0.5rem 0.8rem",
													"box-sizing": "border-box",
													"background-color": f()
														? "var(--vscode-input-background)"
														: "transparent",
													outline: f()
														? "1px solid var(--vscode-editorLightBulb-foreground)"
														: "none",
													position: "relative",
													...(typeof n.style == "object" ? n.style : {}),
												};
											},
											get class() {
												return `premium-bubble ${n.class || ""}`.trim();
											},
											onBlur: () => {
												setTimeout(() => {
													if (
														p.chatData.tabs.find((s) => s.tabId === n.tabId)
															?.selectedBubbleId === n.bubbleId
													) {
														const s = n.tabId;
														p.setChatData(
															"tabs",
															({ tabId: l }) => l === s,
															"selectedBubbleId",
															void 0,
														);
													}
												});
											},
											tabIndex: 0,
										},
									),
									!1,
									!0,
								),
								(0, i.insert)(b, () => n.children),
								b
							);
						})();
					};
				e.$5ac = c;
			},
		),
		