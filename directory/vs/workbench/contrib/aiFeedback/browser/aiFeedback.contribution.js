define(de[4313], he([1, 0, 4312, 2969]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		define(
			de[4314],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 158, 13, 58, 205, 140, 242, 450, 36, 385, 26,
				14, 9, 156, 116, 19, 2366,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Xac = M),
					(e.$Yac = N);
				const $ = (0, t.template)(
						'<div><div></div><div><div class="input-box-submit-button-container"><div class="input-box-submit-button-part">\u23CE retry',
					),
					v = (0, t.template)("<div>"),
					S = (0, t.template)(
						'<div><div class="interpreter-mode-small-execute-button">execute',
					),
					I = (0, t.template)("<div>Running "),
					T = (0, t.template)(
						'<div class="interpreter-mode-small-execute-button">execute',
					),
					P = (0, t.template)("<div><span>Editing file</span><div>"),
					k = (0, t.template)(
						'<div class="interpreter-mode-retry-button"> retry',
					),
					L = (0, t.template)(
						'<div class="interpreter-mode-execute-button"> execute',
					),
					D = (0, t.template)(
						'<div class="interpreter-mode-followup-button"> followup',
					);
				function M(U) {
					return (z) =>
						(0, d.createComponent)(N, {
							get aiBubble() {
								return U.aiBubble;
							},
							get tabId() {
								return U.tabId;
							},
							id: z,
						});
				}
				function N(U) {
					const z = (0, g.$odc)(),
						[F, x] = (0, r.createSignal)(""),
						H = (0, p.$5$b)(h.$Cgc),
						q = (0, r.createMemo)(() => {
							const Y = U.id.match(/interpreter_result_(\d+)/);
							let ie = Y ? parseInt(Y[1]) : void 0;
							return (
								ie !== void 0 && isNaN(ie) && (ie = void 0),
								ie !== void 0 ? ie + 1 : void 0
							);
						}),
						V = (0, r.createMemo)(() => {
							const Y = U.aiBubble.interpreterModeRetryIndex,
								ie = q();
							return Y === void 0 || ie === void 0 ? !1 : Y === ie - 1;
						}),
						G = (0, r.createMemo)(() => {
							if (V()) return new a.$Zzb();
						});
					(0, r.onMount)(() => {
						const Y = z.interpreterService.onShouldFocusRetryBox(() => {
							G()?.focus();
						});
						(0, r.onCleanup)(() => {
							Y.dispose();
						});
					});
					const K = (0, r.createMemo)(() => {
							const Y = z.chatDataService.chatData.tabs.find(
								(ne) => ne.tabId === U.tabId,
							);
							return Y
								? Y.bubbles.findIndex((ne) => ne.id === U.aiBubble.id) ===
										Y.bubbles.length - 1 &&
										q() === (U.aiBubble.interpreterModeCells?.length ?? 0) + 1
								: !1;
						}),
						J = (0, r.createMemo)(() => {
							const Y = z.chatDataService.chatData.tabs.find(
								(ne) => ne.tabId === U.tabId,
							);
							return Y
								? Y.bubbles.findIndex((ne) => ne.id === U.aiBubble.id) ===
										Y.bubbles.length - 1 &&
										q() === (U.aiBubble.interpreterModeCells?.length ?? 0)
								: !1;
						}),
						W = (0, r.createMemo)(() => {
							const Y = z.chatDataService.chatData.tabs.find(
								(ne) => ne.tabId === U.tabId,
							);
							return Y
								? Y.bubbles.findIndex((ne) => ne.id === U.aiBubble.id) ===
										Y.bubbles.length - 2 &&
										q() === (U.aiBubble.interpreterModeCells?.length ?? 0)
								: !1;
						}),
						X = (0, r.createMemo)(() => {
							const Y = z.chatDataService.chatData.tabs.find(
								(ne) => ne.tabId === U.tabId,
							);
							return Y
								? Y.bubbles.findIndex((ne) => ne.id === U.aiBubble.id) ===
										Y.bubbles.length - 2 &&
										q() === (U.aiBubble.interpreterModeCells?.length ?? 0) + 1
								: !1;
						});
					return [
						(0, d.createComponent)(r.Show, {
							get when() {
								return V();
							},
							get children() {
								const Y = $(),
									ie = Y.firstChild,
									ne = ie.nextSibling,
									ee = ne.firstChild,
									_ = ee.firstChild;
								return (
									Y.style.setProperty("display", "flex"),
									Y.style.setProperty("flex-direction", "row"),
									Y.style.setProperty("align-items", "center"),
									Y.style.setProperty("gap", "10px"),
									Y.style.setProperty("padding-top", "10px"),
									ie.style.setProperty("font-size", "14px"),
									ie.style.setProperty("font-weight", "700"),
									ie.style.setProperty(
										"color",
										"var(--vscode-inputValidation-errorBorder)",
									),
									ie.style.setProperty(
										"transform",
										"rotate(270deg) scaleX(-1)",
									),
									ne.style.setProperty("padding", "5px 5px"),
									ne.style.setProperty("padding-top", "9px"),
									ne.style.setProperty("padding-bottom", "9px"),
									ne.style.setProperty(
										"border",
										"1px solid var(--vscode-inputValidation-errorBorder)",
									),
									ne.style.setProperty("border-radius", "5px"),
									ne.style.setProperty(
										"box-shadow",
										"0 4px 8px var(--vscode-inlineChat-shadow)",
									),
									ne.style.setProperty("margin-bottom", "4px"),
									ne.style.setProperty("margin-top", "4px"),
									ne.style.setProperty("flex-grow", "1"),
									(0, C.insert)(
										ne,
										(0, d.createComponent)(n.$Tac, {
											get initText() {
												return F();
											},
											get inputBoxDelegate() {
												return G();
											},
											placeholder:
												"Retry with feedback for the AI. What should it do differently?",
											editorConfig: () => ({
												...(0, n.$Rac)(),
												namespace:
													"interpreter-feedback-prompt-input" + U.tabId,
												onError: (te) => {
													console.error(te);
												},
											}),
											setText: (te) => {
												x(te);
											},
											onEscape: () => {
												z.interpreterService.closeRetry(U.tabId),
													z.aiChatService.focus();
											},
											onSubmit: (te) => {
												z.interpreterService.retryWithFeedback(
													U.tabId,
													F(),
													U.aiBubble.id,
													(q() ?? 1) - 1,
												);
											},
											extraCommandListeners: [
												{
													command: m.KEY_COMMAND_U_COMMAND,
													callback: (te) => (
														z.commandService.executeCommand(u.$tX, U.tabId), !0
													),
												},
												{
													command: m.KEY_COMMAND_Y_OR_CNTRL_SHIFT_Y_COMMAND,
													callback: (te) => (
														z.commandService.executeCommand(h.$Cgc), !0
													),
												},
												{
													command: m.KEY_COMMAND_ESCAPE_COMMAND,
													callback: (te) => (
														z.interpreterService.closeRetry(U.tabId),
														z.aiChatService.focus(),
														!0
													),
												},
											],
										}),
										ee,
									),
									ee.style.setProperty("background-color", "transparent"),
									_.addEventListener("click", () => {
										z.interpreterService.retryWithFeedback(
											U.tabId,
											F(),
											U.aiBubble.id,
											(q() ?? 1) - 1,
										);
									}),
									_.addEventListener("mousedown", (te) => {
										te.preventDefault();
									}),
									(0, C.insert)(
										Y,
										(0, d.createComponent)(r.Show, {
											get when() {
												return K();
											},
											get children() {
												return (0, d.createComponent)(B, {
													onClick: () => {
														z.commandService.executeCommand(h.$Cgc, U.tabId);
													},
												});
											},
										}),
										null,
									),
									(0, E.effect)(() =>
										(0, w.className)(ie, o.ThemeIcon.asClassName(f.$ak.reply)),
									),
									Y
								);
							},
						}),
						(0, d.createComponent)(r.Show, {
							get when() {
								return q();
							},
							children: (Y) => {
								const ie = () => Y() - 1;
								return (0, d.createComponent)(r.Switch, {
									get children() {
										return [
											(0, d.createComponent)(r.Match, {
												get when() {
													return (
														U.aiBubble.interpreterModeCells?.[ie()] === void 0
													);
												},
												get children() {
													return (0, d.createComponent)(r.Show, {
														get when() {
															return !V();
														},
														get children() {
															const ne = v();
															return (
																ne.style.setProperty("display", "flex"),
																ne.style.setProperty("flex-direction", "row"),
																ne.style.setProperty(
																	"justify-content",
																	"flex-end",
																),
																ne.style.setProperty("align-items", "center"),
																(0, C.insert)(
																	ne,
																	(0, d.createComponent)(A, {
																		get red() {
																			return K() || X();
																		},
																		onClick: () => {
																			z.interpreterService.openRetry(
																				U.tabId,
																				U.aiBubble.id,
																				ie(),
																			);
																		},
																	}),
																	null,
																),
																(0, C.insert)(
																	ne,
																	(0, d.createComponent)(r.Show, {
																		get when() {
																			return K() || J();
																		},
																		get children() {
																			return (0, d.createComponent)(B, {
																				onClick: () => {
																					z.commandService.executeCommand(
																						h.$Cgc,
																						U.tabId,
																					);
																				},
																			});
																		},
																	}),
																	null,
																),
																ne
															);
														},
													});
												},
											}),
											(0, d.createComponent)(r.Match, {
												get when() {
													return (
														U.aiBubble.interpreterModeCells?.[ie()]?.status ===
														"canceled"
													);
												},
												get children() {
													return (0, d.createComponent)(r.Show, {
														get when() {
															return !V();
														},
														get children() {
															const ne = S(),
																ee = ne.firstChild;
															return (
																ne.style.setProperty("display", "flex"),
																ne.style.setProperty("flex-direction", "row"),
																ne.style.setProperty(
																	"justify-content",
																	"flex-end",
																),
																ee.addEventListener("click", () => {
																	z.interpreterService.executeAndContinue(
																		U.tabId,
																		{
																			aiBubbleId: U.aiBubble.id,
																			cellIndex: ie(),
																		},
																	);
																}),
																(0, C.insert)(
																	ne,
																	(0, d.createComponent)(A, {
																		red: !0,
																		onClick: () => {
																			z.interpreterService.openRetry(
																				U.tabId,
																				U.aiBubble.id,
																				ie(),
																			);
																		},
																	}),
																	null,
																),
																ne
															);
														},
													});
												},
											}),
											(0, d.createComponent)(r.Match, {
												get when() {
													return (
														(0, i.memo)(
															() =>
																U.aiBubble.interpreterModeCells?.[ie()]
																	?.status === "pending",
														)() && J()
													);
												},
												get children() {
													return (0, d.createComponent)(r.Show, {
														get when() {
															return !V();
														},
														get children() {
															const ne = v();
															return (
																ne.style.setProperty("display", "flex"),
																ne.style.setProperty("flex-direction", "row"),
																ne.style.setProperty("gap", "10px"),
																ne.style.setProperty("margin-top", "10px"),
																ne.style.setProperty("align-items", "center"),
																(0, C.insert)(
																	ne,
																	(0, d.createComponent)(R, {
																		onClick: () => {
																			z.interpreterService.executeAndContinue(
																				U.tabId,
																			);
																		},
																	}),
																	null,
																),
																(0, C.insert)(
																	ne,
																	(0, d.createComponent)(A, {
																		red: !0,
																		onClick: () => {
																			z.interpreterService.openRetry(
																				U.tabId,
																				U.aiBubble.id,
																				ie(),
																			);
																		},
																	}),
																	null,
																),
																(0, C.insert)(
																	ne,
																	(0, d.createComponent)(B, {
																		onClick: () => {
																			z.commandService.executeCommand(
																				h.$Cgc,
																				U.tabId,
																			);
																		},
																	}),
																	null,
																),
																ne
															);
														},
													});
												},
											}),
											(0, d.createComponent)(r.Match, {
												get when() {
													return (
														U.aiBubble.interpreterModeCells?.[ie()]?.status ===
														"running"
													);
												},
												get children() {
													return [
														(0, d.createComponent)(r.Show, {
															get when() {
																return !V();
															},
															get children() {
																const ne = v();
																return (
																	ne.style.setProperty("display", "flex"),
																	ne.style.setProperty("flex-direction", "row"),
																	ne.style.setProperty(
																		"justify-content",
																		"flex-end",
																	),
																	(0, C.insert)(
																		ne,
																		(0, d.createComponent)(A, {
																			red: !1,
																			onClick: () => {
																				z.interpreterService.openRetry(
																					U.tabId,
																					U.aiBubble.id,
																					ie(),
																				);
																			},
																		}),
																	),
																	ne
																);
															},
														}),
														(() => {
															const ne = I(),
																ee = ne.firstChild;
															return (
																ne.style.setProperty("display", "flex"),
																ne.style.setProperty("flex-direction", "row"),
																ne.style.setProperty("gap", "10px"),
																ne.style.setProperty("margin-top", "5px"),
																(0, C.insert)(
																	ne,
																	(0, d.createComponent)(c.$C$b, { show: !0 }),
																	null,
																),
																ne
															);
														})(),
														(0, d.createComponent)(r.Show, {
															get when() {
																return U.aiBubble.interpreterModeCells?.[ie()]
																	?.runningMetadata?.editingFileUri;
															},
															children: (ne) => {
																const ee = (0, r.createMemo)(() =>
																	b.URI.revive(ne()),
																);
																return (() => {
																	const _ = P(),
																		te = _.firstChild,
																		Q = te.nextSibling;
																	return (
																		_.style.setProperty("display", "flex"),
																		_.style.setProperty(
																			"flex-direction",
																			"row",
																		),
																		_.style.setProperty("gap", "5px"),
																		(0, C.insert)(
																			_,
																			(0, d.createComponent)(s.$k$b, {
																				get fileName() {
																					return ee().fsPath;
																				},
																				get workspaceContextService() {
																					return z.workspaceContextService;
																				},
																				get modelService() {
																					return z.modelService;
																				},
																				get languageService() {
																					return z.languageService;
																				},
																			}),
																			Q,
																		),
																		Q.addEventListener("click", () => {
																			z.openerService.open(ee(), {
																				openToSide: !1,
																				editorOptions: {
																					revealIfVisible: !0,
																					revealIfOpened: !0,
																					source: l.EditorOpenSource.USER,
																				},
																				fromUserGesture: !0,
																			});
																		}),
																		Q.style.setProperty("cursor", "pointer"),
																		(0, C.insert)(Q, () => (0, y.$kh)(ee())),
																		_
																	);
																})();
															},
														}),
													];
												},
											}),
											(0, d.createComponent)(r.Match, {
												get when() {
													return (
														U.aiBubble.interpreterModeCells?.[ie()]?.status ===
														"failure"
													);
												},
												get children() {
													return [
														(0, d.createComponent)(r.Show, {
															get when() {
																return !V();
															},
															get children() {
																const ne = S(),
																	ee = ne.firstChild;
																return (
																	ne.style.setProperty("display", "flex"),
																	ne.style.setProperty("flex-direction", "row"),
																	ne.style.setProperty(
																		"justify-content",
																		"flex-end",
																	),
																	ee.addEventListener("click", () => {
																		z.interpreterService.executeAndContinue(
																			U.tabId,
																			{
																				aiBubbleId: U.aiBubble.id,
																				cellIndex: ie(),
																			},
																		);
																	}),
																	(0, C.insert)(
																		ne,
																		(0, d.createComponent)(A, {
																			red: !1,
																			onClick: () => {
																				z.interpreterService.openRetry(
																					U.tabId,
																					U.aiBubble.id,
																					ie(),
																				);
																			},
																		}),
																		null,
																	),
																	ne
																);
															},
														}),
														"Failed.",
														(0, d.createComponent)(r.Show, {
															get when() {
																return U.aiBubble.interpreterModeCells?.[ie()]
																	?.output;
															},
															children: (ne) =>
																(0, d.createComponent)(O, {
																	get output() {
																		return ne();
																	},
																}),
														}),
													];
												},
											}),
											(0, d.createComponent)(r.Match, {
												get when() {
													return (
														(0, i.memo)(
															() =>
																U.aiBubble.interpreterModeCells?.[ie()]
																	?.status === "pending",
														)() && !J()
													);
												},
												get children() {
													return (0, d.createComponent)(r.Show, {
														get when() {
															return !V();
														},
														get children() {
															const ne = v();
															return (
																ne.style.setProperty("display", "flex"),
																ne.style.setProperty("flex-direction", "row"),
																ne.style.setProperty(
																	"justify-content",
																	"flex-end",
																),
																(0, C.insert)(
																	ne,
																	(0, d.createComponent)(r.Show, {
																		get when() {
																			return W();
																		},
																		get children() {
																			const ee = T();
																			return (
																				ee.addEventListener("click", () => {
																					z.interpreterService.executeAndContinue(
																						U.tabId,
																					);
																				}),
																				ee
																			);
																		},
																	}),
																	null,
																),
																(0, C.insert)(
																	ne,
																	(0, d.createComponent)(A, {
																		red: !1,
																		onClick: () => {
																			z.interpreterService.openRetry(
																				U.tabId,
																				U.aiBubble.id,
																				ie(),
																			);
																		},
																	}),
																	null,
																),
																ne
															);
														},
													});
												},
											}),
											(0, d.createComponent)(r.Match, {
												get when() {
													return (
														U.aiBubble.interpreterModeCells?.[ie()]?.status ===
														"success"
													);
												},
												get children() {
													return [
														(0, d.createComponent)(r.Show, {
															get when() {
																return !V();
															},
															get children() {
																const ne = S(),
																	ee = ne.firstChild;
																return (
																	ne.style.setProperty("display", "flex"),
																	ne.style.setProperty("flex-direction", "row"),
																	ne.style.setProperty(
																		"justify-content",
																		"flex-end",
																	),
																	ee.addEventListener("click", () => {
																		z.interpreterService.executeAndContinue(
																			U.tabId,
																			{
																				aiBubbleId: U.aiBubble.id,
																				cellIndex: ie(),
																			},
																		);
																	}),
																	(0, C.insert)(
																		ne,
																		(0, d.createComponent)(A, {
																			red: !1,
																			onClick: () => {
																				z.interpreterService.openRetry(
																					U.tabId,
																					U.aiBubble.id,
																					ie(),
																				);
																			},
																		}),
																		null,
																	),
																	ne
																);
															},
														}),
														(0, d.createComponent)(r.Show, {
															get when() {
																return U.aiBubble.interpreterModeCells?.[ie()]
																	?.output;
															},
															get fallback() {
																return "Success!";
															},
															children: (ne) =>
																(0, d.createComponent)(O, {
																	get output() {
																		return ne();
																	},
																}),
														}),
													];
												},
											}),
										];
									},
								});
							},
						}),
					];
				}
				function A(U) {
					const z = (0, p.$5$b)(u.$tX);
					return (() => {
						const F = k(),
							x = F.firstChild;
						return (
							F.addEventListener("click", () => {
								U.onClick();
							}),
							(0, C.insert)(F, z, x),
							(0, E.effect)(
								(H) => {
									const q = U.red
											? "var(--vscode-statusBarItem-errorForeground)"
											: void 0,
										V = U.red
											? "var(--vscode-statusBarItem-errorBackground)"
											: "var(--vscode-toolbar-hoverBackground)";
									return (
										q !== H._v$ &&
											((H._v$ = q) != null
												? F.style.setProperty("color", q)
												: F.style.removeProperty("color")),
										V !== H._v$2 &&
											((H._v$2 = V) != null
												? F.style.setProperty("background-color", V)
												: F.style.removeProperty("background-color")),
										H
									);
								},
								{ _v$: void 0, _v$2: void 0 },
							),
							F
						);
					})();
				}
				function R(U) {
					const z = (0, p.$5$b)(u.$uX);
					return (() => {
						const F = L(),
							x = F.firstChild;
						return (
							F.addEventListener("click", () => {
								U.onClick();
							}),
							(0, C.insert)(F, z, x),
							F
						);
					})();
				}
				function O(U) {
					return (() => {
						const z = v();
						return (
							z.style.setProperty("max-height", "400px"),
							z.style.setProperty("overflow-x", "auto"),
							z.style.setProperty("white-space", "pre-wrap"),
							z.style.setProperty("font-family", "monospace"),
							(0, C.insert)(z, () => U.output),
							z
						);
					})();
				}
				function B(U) {
					const z = (0, p.$5$b)(h.$Cgc);
					return (() => {
						const F = D(),
							x = F.firstChild;
						return (
							F.addEventListener("click", () => {
								U.onClick();
							}),
							F.style.setProperty("flex-shrink", "0"),
							(0, C.insert)(F, z, x),
							F
						);
					})();
				}
			},
		),
		define(
			de[4315],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 158, 13, 58, 19, 1364, 242, 450, 156, 310, 147,
				36, 18,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Hfd = $);
				const s = (0, t.template)("<span>"),
					l = (0, t.template)("<div>"),
					y = (0, t.template)('<div><div class="inline-prompt-button-area">');
				function $() {
					const v = (0, f.$odc)(),
						[S, I] = (0, r.createSignal)(!1),
						T = [
							{
								command: m.KEY_ESCAPE_COMMAND,
								callback: (D) => (
									v.webCmdKService.close(), D.stopPropagation(), !0
								),
							},
						],
						P = (0, r.createMemo)(() =>
							v.reactiveStorageService.nonPersistentStorage.inprogressAIGenerations.some(
								(D) =>
									D.generationUUID ===
									v.reactiveStorageService.nonPersistentStorage.webCmdKState
										.promptBar?.lastGenerationUUID,
							),
						),
						k = (D, M) => {
							v.reactiveStorageService.setNonPersistentStorage(
								"webCmdKState",
								"promptBar",
								"images",
								[{ ...M, uuid: D }],
							);
						},
						L = (D) => {
							v.reactiveStorageService.setNonPersistentStorage(
								"webCmdKState",
								"promptBar",
								"images",
								(M) => M?.filter((N) => N.uuid !== D),
							);
						};
					return (
						(0, r.createEffect)(() => {
							const D =
								v.reactiveStorageService.nonPersistentStorage.webCmdKState
									.promptBar;
							if (D) {
								const M = D.inputBoxDelegate;
								setTimeout(() => {
									M && M.focus();
								}, 20);
							}
						}),
						(0, d.createComponent)(r.Show, {
							get when() {
								return v.reactiveStorageService.nonPersistentStorage
									.webCmdKState.promptBar;
							},
							children: (D) =>
								(() => {
									const M = y(),
										N = M.firstChild;
									return (
										M.style.setProperty("position", "absolute"),
										M.style.setProperty("bottom", "50px"),
										M.style.setProperty("left", "50%"),
										M.style.setProperty("transform", "translateX(-50%)"),
										M.style.setProperty("width", "min(500px,100%)"),
										M.style.setProperty(
											"box-shadow",
											"0 4px 8px var(--vscode-inlineChat-shadow)",
										),
										M.style.setProperty("font-size", "12px"),
										M.style.setProperty(
											"background-color",
											"var(--vscode-editor-background)",
										),
										M.style.setProperty("border-radius", "5px"),
										M.style.setProperty("z-index", "1000"),
										M.style.setProperty("color", "var(--vscode-foreground)"),
										M.style.setProperty("user-select", "text"),
										M.style.setProperty("box-sizing", "border-box"),
										M.style.setProperty("height", "100px"),
										(0, w.insert)(
											M,
											(0, d.createComponent)(r.Show, {
												get when() {
													return (
														(0, C.memo)(() => (D().images.length ?? 0) > 0)() &&
														D().images
													);
												},
												children: (A) =>
													(() => {
														const R = l();
														return (
															R.style.setProperty("height", "50px"),
															R.style.setProperty("overflow", "hidden"),
															(0, w.insert)(
																R,
																(0, d.createComponent)(r.For, {
																	get each() {
																		return A();
																	},
																	children: (O) =>
																		(0, d.createComponent)(h.$Gbc, {
																			image: O,
																			removeImage: () => L(O.uuid),
																		}),
																}),
															),
															R
														);
													})(),
											}),
											N,
										),
										(0, w.insert)(
											M,
											(0, d.createComponent)(
												n.$Uac,
												(0, E.mergeProps)(p.$w_b, {
													readonly: !1,
													supportsGit: !1,
													supportsCommitNotes: !1,
													atMentionsDisabled: !0,
													supportsLint: !1,
													supportsCodebase: !1,
													showDocs: !1,
													supportsLink: !1,
													supportsFolderSelections: !1,
													addImage: k,
													isLongContextMode: !1,
													source: "web.cmdk",
													removeImage: L,
													supportsWeb: !1,
													useArrowsForHistory: !0,
													get initText() {
														return D().initText;
													},
													placeholder:
														"Type to change the UI (history, @ not supported yet)",
													get delegate() {
														return D().delegate;
													},
													get inputBoxDelegate() {
														return D().inputBoxDelegate;
													},
													editorConfig: () => ({
														...(0, n.$Rac)(),
														namespace: "web-prompt-bar",
														onError: (A) => {
															console.error(A);
														},
													}),
													setEditor: (A) => {},
													setText: (A) => {},
													setRichText: (A) => {
														v.reactiveStorageService.setNonPersistentStorage(
															"webCmdKState",
															"promptBar",
															"initText",
															A,
														);
													},
													onEscape: void 0,
													onSubmit: (A) => {
														v.webCmdKService.submit();
													},
													setIsFocused: (A) => {
														I(A);
													},
													externalHistoryBundle: void 0,
													extraCommandListeners: T,
												}),
											),
											N,
										),
										N.style.setProperty("display", "flex"),
										N.style.setProperty("justify-content", "flex-start"),
										N.style.setProperty("margin", "4px 0px 6px 0px"),
										N.style.setProperty("align-items", "center"),
										(0, w.insert)(
											N,
											(0, d.createComponent)(r.Switch, {
												get children() {
													return (0, d.createComponent)(r.Match, {
														get when() {
															return P();
														},
														get children() {
															return [
																(0, d.createComponent)(o.$rdc, {
																	get title() {
																		return (
																			v.keybindingService
																				?.lookupKeybinding(u.$7W)
																				?.getLabel() + " Cancel"
																		);
																	},
																	onClick: () => {},
																	type: "secondary",
																}),
																(() => {
																	const A = s();
																	return (
																		A.style.setProperty("font-size", "10px"),
																		A.style.setProperty("margin-left", "4px"),
																		A.style.setProperty("padding", "0px 4px"),
																		A.style.setProperty(
																			"color",
																			"var(--vscode-input-placeholderForeground)",
																		),
																		(0, w.insert)(
																			A,
																			(0, d.createComponent)(c.$C$b, {
																				show: !0,
																			}),
																		),
																		A
																	);
																})(),
																(0, d.createComponent)(g.$k$b, {
																	get fileName() {
																		return D().sourceURI.fsPath;
																	},
																	get workspaceContextService() {
																		return v.workspaceContextService;
																	},
																	get modelService() {
																		return v.modelService;
																	},
																	get languageService() {
																		return v.languageService;
																	},
																}),
																(() => {
																	const A = l();
																	return (
																		A.addEventListener("click", () => {
																			v.editorService.openEditor(
																				{ resource: D().sourceURI },
																				b.$KY,
																			);
																		}),
																		A.style.setProperty("cursor", "pointer"),
																		(0, w.insert)(A, () =>
																			(0, a.$kh)(D().sourceURI),
																		),
																		A
																	);
																})(),
															];
														},
													});
												},
											}),
										),
										(0, i.effect)(() =>
											"1px solid " +
												(S()
													? "var(--vscode-commandCenter-activeBorder)"
													: "var(--vscode-commandCenter-inactiveBorder)") !=
											null
												? M.style.setProperty(
														"border",
														"1px solid " +
															(S()
																? "var(--vscode-commandCenter-activeBorder)"
																: "var(--vscode-commandCenter-inactiveBorder)"),
													)
												: M.style.removeProperty("border"),
										),
										M
									);
								})(),
						})
					);
				}
			},
		),
		define(
			de[4316],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 140, 36, 26, 14, 147, 4246, 1986, 1072,
				4314, 4244, 4231, 148, 270, 58, 169, 1233, 1967, 1711, 236, 338, 863,
				242, 2378,
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
				I,
				T,
				P,
				k,
				L,
				D,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$8ac = e.$7ac = e.$6ac = void 0);
				const M = (0, t.template)("<div><div></div><div>"),
					N = (0, t.template)(
						'<div class="web-reference-item"><div></div><div>',
					),
					A = (0, t.template)(
						"<div><div><div><div>Switch to Long Context Chat",
					),
					R = (0, t.template)("<div><div>Web Pages</div><div>"),
					O = (0, t.template)("<div><div>Docs Pages"),
					B = (0, t.template)("<div>"),
					U = (0, t.template)('<div class="premium-ai-markdown">'),
					z = (0, t.template)("<div><div>"),
					F = (0, t.template)('<div class="premium-bubble">'),
					x = (V) => {
						const G = (0, a.$odc)();
						return (() => {
							const K = M(),
								J = K.firstChild,
								W = J.nextSibling;
							return (
								K.addEventListener("click", () => {
									V.url && G.openerService.open(V.url), V.onClick?.();
								}),
								K.style.setProperty(
									"background-color",
									"var(--vscode-editor-background)",
								),
								K.style.setProperty("padding", "0px 6px"),
								K.style.setProperty("gap", "4px"),
								K.style.setProperty("font-size", "12px"),
								K.style.setProperty("display", "inline-flex"),
								K.style.setProperty("align-items", "center"),
								K.style.setProperty("justify-content", "center"),
								K.style.setProperty("border-radius", "4px"),
								K.style.setProperty("user-select", "none"),
								K.style.setProperty("margin-bottom", "6px"),
								K.style.setProperty("margin-right", "6px"),
								K.style.setProperty("cursor", "pointer"),
								J.style.setProperty("font-size", "10px"),
								W.style.setProperty(
									"color",
									"var(--vscode-input-placeholderForeground)",
								),
								(0, d.insert)(
									W,
									(() => {
										const X = (0, m.memo)(() => V.title.length > 30);
										return () =>
											X() ? V.title.substring(0, 30) + "..." : V.title;
									})(),
								),
								(0, C.effect)(() =>
									(0, E.className)(
										J,
										V.iconReplace ?? h.ThemeIcon.asClassName(c.$ak.notebook),
									),
								),
								K
							);
						})();
					};
				e.$6ac = x;
				const H = (V) => {
					const G = (0, a.$odc)();
					return (() => {
						const K = N(),
							J = K.firstChild,
							W = J.nextSibling;
						return (
							K.addEventListener("click", () => {
								G.openerService.open(V.url);
							}),
							K.style.setProperty(
								"background-color",
								"var(--vscode-editor-background)",
							),
							K.style.setProperty("flex-shrink", "0"),
							K.style.setProperty("padding", "0px 4px"),
							K.style.setProperty("font-size", "12px"),
							K.style.setProperty("display", "flex"),
							K.style.setProperty("align-items", "center"),
							K.style.setProperty("justify-content", "center"),
							K.style.setProperty("gap", "4px"),
							K.style.setProperty("border-radius", "4px"),
							K.style.setProperty("user-select", "none"),
							K.style.setProperty("cursor", "pointer"),
							J.style.setProperty("font-size", "10px"),
							W.style.setProperty(
								"color",
								"var(--vscode-input-placeholderForeground)",
							),
							(0, d.insert)(
								W,
								(() => {
									const X = (0, m.memo)(() => V.title.length > 30);
									return () =>
										X() ? V.title.substring(0, 30) + "..." : V.title;
								})(),
							),
							(0, C.effect)(() =>
								(0, E.className)(J, h.ThemeIcon.asClassName(c.$ak.globe)),
							),
							K
						);
					})();
				};
				e.$7ac = H;
				const q = (V) => {
					const G = (0, a.$odc)(),
						K = (0, r.useContext)(u.$ygc),
						[J, W] = (0, r.createSignal)([]);
					let X;
					(0, r.createEffect)(() => {
						V.isGenerating !== X &&
							V.isGenerating === !0 &&
							(W([]),
							G.chatDataService.setChatData(
								"tabs",
								(Re) => Re.tabId === V.tabId,
								"bubbles",
								(Re) => Re.id === V.bubbleId,
								"referencedCodeBlockURIs",
								[],
							)),
							(X = V.isGenerating);
					});
					const Y = (0, r.createMemo)(() =>
							K.chatData.tabs.find((Re) => Re.tabId === V.tabId),
						),
						ie = (0, r.createMemo)(() =>
							G.reactiveStorageService.nonPersistentStorage.nonPersistentChatMetadata.find(
								(Re) => Re.bubbleId === V.userBubbleId && Re.tabId === V.tabId,
							),
						),
						ne = (0, r.createMemo)(() =>
							G.reactiveStorageService.workspaceUserPersistentStorage.persistentChatMetadata.find(
								(Re) => Re.bubbleId === V.userBubbleId && Re.tabId === V.tabId,
							),
						),
						ee = (0, r.createMemo)(
							() =>
								G.reactiveStorageService.nonPersistentStorage.inprogressAIGenerations.find(
									(je) =>
										je.metadata?.type === "chat" &&
										je.metadata.bubbleId === V.userBubbleId &&
										je.metadata.tabId === V.tabId,
								)?.queuePositionResponse,
						),
						[_, te] = (0, r.createSignal)();
					(0, r.createEffect)(() => {
						const je =
							G.reactiveStorageService.workspaceUserPersistentStorage.persistentChatMetadata.find(
								(Ve) => Ve.bubbleId === V.userBubbleId && Ve.tabId === V.tabId,
							);
						te(je);
					});
					const Q = (0, r.createMemo)(() => {
							const Re = Y();
							return Re
								? Re?.bubbles.flatMap((je) =>
										je.type === u.BubbleType.USER_CHAT
											? (je.folderSelections ?? [])
											: [],
									)
								: [];
						}),
						Z = 15e6,
						[se, re] = (0, r.createSignal)(!1);
					let le = !1;
					(0, r.createEffect)(async () => {
						if (V.longContextFlagEnabled)
							try {
								const Re = await G.sourceFilesService.getFolderSize("", {
									throttleFileStat: !0,
								});
								!le && Re !== void 0 && re(Re < Z);
							} catch {}
					}, !1),
						(0, r.onCleanup)(() => {
							le = !0;
						});
					const oe = (0, r.createMemo)(() => {
							const Re =
									_()?.predictedContext?.usedCodebase !== void 0 &&
									_()?.predictedContext?.usedCodebase !== !1,
								je =
									_()?.injectedContext?.usedCodebase !== void 0 &&
									_()?.injectedContext?.usedCodebase !== !1;
							return V.isGenerating && (Re || je);
						}),
						ae = (0, r.createMemo)(() => {
							try {
								return (
									G.chatDataService.chatData.tabs
										.find((je) => je.tabId === V.tabId)
										?.bubbles.find((je) => je.id === be())?.errorDetails !==
									void 0
								);
							} catch {
								return !1;
							}
						}),
						pe = (0, r.createMemo)(() => {
							const Re = Y();
							return Re
								? (
										Re?.bubbles.flatMap((Ve) =>
											Ve.type === u.BubbleType.USER_CHAT
												? (Ve.codebaseResults ?? [])
												: [],
										)
									).length > 0
								: [];
						}),
						$e = (0, r.createMemo)(() => {
							const Re = _()?.predictedContext?.usedCodebase;
							return Re ? Re.fileResults : [];
						}),
						ye = (0, r.createMemo)(() => V.data.text === ""),
						ue = (0, r.createMemo)(() => V.data.text !== ""),
						fe = (0, r.createMemo)(() => (oe() ? ue() : !0));
					(0, r.createEffect)(() => {
						V.data.text === "" ? V.setIsLoading(!0) : V.setIsLoading(!1);
						const je = setTimeout(() => {
							V.setIsLoading(!0);
						}, 1200);
						(0, r.onCleanup)(() => {
							clearTimeout(je);
						});
					});
					const [me, ve] = (0, r.createSignal)(0);
					(0, r.createEffect)(() => {
						V.isChatVisible && ve((Re) => Re + 1);
					});
					const ge = () =>
							G.reactiveStorageService.nonPersistentStorage.nonPersistentChatMetadata.find(
								(je) => je.bubbleId === V.userBubbleId && je.tabId === V.tabId,
							)?.steps ?? [],
						be = (0, r.createMemo)(() => {
							const Re = K.chatData.tabs.find((Ze) => Ze.tabId === V.tabId);
							if (Re === void 0) return;
							const je = Re.bubbles.findIndex((Ze) => Ze.id === V.bubbleId);
							if (je === -1) return;
							const Ve = Re.bubbles[je - 1];
							if (Ve !== void 0) return Ve.id;
						}),
						Ce = (0, r.createMemo)(() => ({
							maxTokensHit:
								G.reactiveStorageService.nonPersistentStorage.maxTokensHit,
							isLastAiBubble: V.isLastAiBubble,
						}));
					(0, r.createEffect)(() => {
						Ce().maxTokensHit &&
							Ce().isLastAiBubble &&
							!G.reactiveStorageService.nonPersistentStorage.continueBubbles.includes(
								V.bubbleId,
							) &&
							(G.reactiveStorageService.setNonPersistentStorage(
								"maxTokensHit",
								!1,
							),
							G.reactiveStorageService.setNonPersistentStorage(
								"continueBubbles",
								[
									...G.reactiveStorageService.nonPersistentStorage
										.continueBubbles,
									V.bubbleId,
								],
							));
					}, Ce);
					const [Le] = (0, y.$K0b)($.$lW, G.configurationService, !1);
					let Fe;
					const [Oe, xe] = (0, r.createSignal)("");
					(0, r.createEffect)(() => {
						const Re = new IntersectionObserver(
								(Ve) => {
									Ve.forEach((Ze) => {
										Ze.isIntersecting && xe(V.data.text);
									});
								},
								{ threshold: 0.1 },
							),
							je = V.data.text;
						if (Fe) {
							Re.observe(Fe);
							const Ve = Fe.getBoundingClientRect(),
								Ze = Ve.top >= 0 && Ve.bottom <= G.window.innerHeight,
								et = Ve.top < G.window.innerHeight && Ve.bottom >= 0;
							(Ze || et) && xe(V.data.text);
						}
						(0, r.onCleanup)(() => {
							Re.disconnect();
						});
					});
					const He = (0, r.createMemo)(() => V.tabId),
						[Ke, Je] = (0, r.createSignal)(!0),
						[Te] = (0, y.$K0b)($.$mW, G.configurationService, !0),
						Ee = (0, S.$4ac)(He, () => V.bubbleId),
						[Ie, Be] = (0, r.createSignal)(!1),
						[Se, ke] = (0, r.createSignal)(!1),
						[Ue, qe] = (0, r.createSignal)(!1),
						Ae = (0, r.createMemo)(
							() =>
								V.longContextFlagEnabled &&
								!V.longContextModeEnabled &&
								se() &&
								!1,
						),
						Me = (0, r.createMemo)(() => {}),
						De = (0, r.createMemo)(
							() => (ne()?.docsCitations ?? []).length > 0,
						);
					return (0, i.createComponent)(I.$5ac, {
						get tabId() {
							return V.tabId;
						},
						get bubbleId() {
							return V.bubbleId;
						},
						get style() {
							return {
								padding: Te() ? "0.5rem 0.4rem" : "0.5rem 0.6rem",
								"padding-bottom": "0.5rem",
							};
						},
						get children() {
							const Re = F(),
								je = Fe;
							return (
								typeof je == "function" ? (0, w.use)(je, Re) : (Fe = Re),
								Re.style.setProperty("user-select", "text"),
								Re.style.setProperty("position", "relative"),
								Re.style.setProperty("display", "flex"),
								Re.style.setProperty("flex-direction", "column"),
								Re.style.setProperty("gap", "4px"),
								Re.style.setProperty("padding", "0px 4px"),
								(0, d.insert)(
									Re,
									(0, i.createComponent)(r.Show, {
										get when() {
											return Ae() || De() || Me();
										},
										get children() {
											const Ve = B();
											return (
												Ve.style.setProperty("display", "flex"),
												Ve.style.setProperty("flex-direction", "column"),
												Ve.style.setProperty("align-items", "start"),
												Ve.style.setProperty("gap", "4px"),
												Ve.style.setProperty("padding", "0px 8px"),
												Ve.style.setProperty("margin-bottom", "4px"),
												(0, d.insert)(
													Ve,
													(0, i.createComponent)(r.Show, {
														get when() {
															return Ae();
														},
														get children() {
															const Ze = A(),
																et = Ze.firstChild,
																rt = et.firstChild,
																ft = rt.firstChild;
															return (
																Ze.style.setProperty("width", "100%"),
																et.style.setProperty("display", "flex"),
																rt.style.setProperty("flex-grow", "1"),
																rt.style.setProperty("display", "flex"),
																rt.style.setProperty("gap", "0.5rem"),
																rt.style.setProperty(
																	"justify-content",
																	"flex-end",
																),
																rt.style.setProperty("align-items", "center"),
																ft.addEventListener("click", () => {
																	be() !== void 0 &&
																		(K.setChatData(
																			"tabs",
																			(nt) => nt.tabId === He(),
																			"longContextModeEnabled",
																			!0,
																		),
																		G.aiChatService.cancelGeneration({
																			tabID: He(),
																		}));
																}),
																ft.style.setProperty("font-size", "10px"),
																ft.style.setProperty(
																	"color",
																	"var(--vscode-input-placeholderForeground)",
																),
																ft.style.setProperty("cursor", "pointer"),
																ft.style.setProperty(
																	"text-decoration",
																	"underline",
																),
																ft.style.setProperty("display", "flex"),
																ft.style.setProperty("flex-direction", "row"),
																ft.style.setProperty("align-items", "center"),
																ft.style.setProperty("user-select", "none"),
																Ze
															);
														},
													}),
													null,
												),
												(0, d.insert)(
													Ve,
													(0, i.createComponent)(r.Show, {
														get when() {
															return Me();
														},
														get children() {
															const Ze = R(),
																et = Ze.firstChild,
																rt = et.nextSibling;
															return (
																et.style.setProperty("margin", "0px 0px"),
																et.style.setProperty("font-size", "8px"),
																et.style.setProperty(
																	"text-transform",
																	"uppercase",
																),
																et.style.setProperty(
																	"color",
																	"var(--vscode-input-placeholderForeground)",
																),
																rt.style.setProperty("display", "flex"),
																rt.style.setProperty("align-items", "center"),
																rt.style.setProperty("flex-wrap", "wrap"),
																rt.style.setProperty("gap", "6px"),
																(0, d.insert)(
																	rt,
																	(0, i.createComponent)(r.For, {
																		get each() {
																			return [
																				...new Set(
																					(ne()?.webCitations ?? []).map((ft) =>
																						JSON.stringify({
																							title: ft.title,
																							url: ft.url,
																						}),
																					),
																				),
																			].map((ft) => JSON.parse(ft));
																		},
																		children: (ft) =>
																			(0, i.createComponent)(e.$7ac, {
																				get url() {
																					return ft.url;
																				},
																				get title() {
																					return ft.title;
																				},
																			}),
																	}),
																),
																Ze
															);
														},
													}),
													null,
												),
												(0, d.insert)(
													Ve,
													(0, i.createComponent)(r.Show, {
														get when() {
															return De();
														},
														get children() {
															const Ze = O(),
																et = Ze.firstChild;
															return (
																et.style.setProperty("margin", "0px 0px"),
																et.style.setProperty("font-size", "8px"),
																et.style.setProperty(
																	"text-transform",
																	"uppercase",
																),
																et.style.setProperty(
																	"color",
																	"var(--vscode-input-placeholderForeground)",
																),
																(0, d.insert)(
																	Ze,
																	(0, i.createComponent)(r.Show, {
																		get when() {
																			return (
																				(ne()?.docsCitations?.length ?? 0) >
																				T.$yIb
																			);
																		},
																		get fallback() {
																			return (0, i.createComponent)(r.For, {
																				get each() {
																					return ne()?.docsCitations ?? [];
																				},
																				children: (rt) =>
																					(0, i.createComponent)(e.$6ac, {
																						get url() {
																							return rt.url;
																						},
																						get title() {
																							return rt.title;
																						},
																					}),
																			});
																		},
																		get children() {
																			return [
																				(0, i.createComponent)(r.Show, {
																					get when() {
																						return !Ke();
																					},
																					get fallback() {
																						return (0, i.createComponent)(
																							r.For,
																							{
																								get each() {
																									return (
																										ne()?.docsCitations?.slice(
																											0,
																											T.$yIb,
																										) ?? []
																									);
																								},
																								children: (rt) =>
																									(0, i.createComponent)(
																										e.$6ac,
																										{
																											get url() {
																												return rt.url;
																											},
																											get title() {
																												return rt.title;
																											},
																										},
																									),
																							},
																						);
																					},
																					get children() {
																						return (0, i.createComponent)(
																							r.For,
																							{
																								get each() {
																									return (
																										ne()?.docsCitations ?? []
																									);
																								},
																								children: (rt) =>
																									(0, i.createComponent)(
																										e.$6ac,
																										{
																											get url() {
																												return rt.url;
																											},
																											get title() {
																												return rt.title;
																											},
																										},
																									),
																							},
																						);
																					},
																				}),
																				(0, i.createComponent)(e.$6ac, {
																					get title() {
																						return (0, m.memo)(() => !!Ke())()
																							? `+${(ne()?.docsCitations?.length ?? 0) - T.$yIb} pages`
																							: "Show less";
																					},
																					onClick: () => Je((rt) => !rt),
																					get iconReplace() {
																						return (0, m.memo)(() => !Ke())()
																							? h.ThemeIcon.asClassName(
																									c.$ak.eyeClosed,
																								)
																							: void 0;
																					},
																				}),
																			];
																		},
																	}),
																	null,
																),
																Ze
															);
														},
													}),
													null,
												),
												Ve
											);
										},
									}),
									null,
								),
								(0, d.insert)(
									Re,
									(0, i.createComponent)(r.Show, {
										get when() {
											return (0, m.memo)(() => ge().length > 0)() && !ae();
										},
										get children() {
											const Ve = B();
											return (
												Ve.style.setProperty("padding-bottom", "8px"),
												Ve.style.setProperty("display", "flex"),
												Ve.style.setProperty("flex-direction", "column"),
												Ve.style.setProperty("gap", "4px"),
												(0, d.insert)(
													Ve,
													(0, i.createComponent)(r.For, {
														get each() {
															return ge();
														},
														children: (Ze, et) =>
															(0, i.createComponent)(g.$_$b, {
																step: Ze,
																get defaultExpanded() {
																	return V.isGenerating &&
																		V.data.text.length === 0
																		? Ze.type === "gathering" ||
																			Ze.type === "reranking"
																			? Ze.files.length > 0
																			: !0
																		: !1;
																},
																get index() {
																	return et();
																},
																get isStepGenerating() {
																	return Ze.type === "gathering" ||
																		Ze.type === "reranking"
																		? Ze.files.length === 0
																		: !!(
																				V.isGenerating &&
																				V.data.text.length === 0
																			);
																},
															}),
													}),
												),
												Ve
											);
										},
									}),
									null,
								),
								(0, d.insert)(
									Re,
									(0, i.createComponent)(r.Show, {
										get when() {
											return V.isLastAiBubble || V.isGenerating;
										},
										get children() {
											return (0, i.createComponent)(b.$Zac, {
												get searchType() {
													return V.data.searchTypeIfCodebaseQuery;
												},
											});
										},
									}),
									null,
								),
								(0, d.insert)(
									Re,
									(0, i.createComponent)(r.Show, {
										get when() {
											return (
												(0, m.memo)(() => !!(oe() && ge().length === 0))() &&
												!ae()
											);
										},
										get children() {
											return (0, i.createComponent)(b.$1ac, {
												get isContextGenerating() {
													return oe();
												},
												get textIsGenerated() {
													return ue();
												},
												get fileResults() {
													return $e() ?? [];
												},
												get addFolders() {
													return Q();
												},
												get hydeResults() {
													return V.data.contextData?.hydeResults;
												},
												get repoStep() {
													return V.data.repoStep ?? u.RepoStep.None;
												},
											});
										},
									}),
									null,
								),
								(0, d.insert)(
									Re,
									(0, i.createComponent)(r.Show, {
										get when() {
											return ne()?.intermediateSectionType !== void 0;
										},
										get children() {
											return (0, i.createComponent)(p.$d_b, {
												get userBubbleId() {
													return V.userBubbleId;
												},
												get tabId() {
													return V.tabId;
												},
												get emptyText() {
													return ye();
												},
												get fontInfo() {
													return V.fontInfo;
												},
											});
										},
									}),
									null,
								),
								(0, d.insert)(
									Re,
									(0, i.createComponent)(r.Show, {
										get when() {
											return Oe();
										},
										get children() {
											const Ve = U();
											return (
												(0, d.insert)(
													Ve,
													(0, i.createComponent)(k.$4$b, {
														frameCutoffTime: 30,
														get showSectionToolbar() {
															return !V.data.interpreterModeCells;
														},
														get canQuoteMessages() {
															return !V.data.interpreterModeCells;
														},
														get rawText() {
															return Oe();
														},
														get shouldFade() {
															return Le() && V.isTabGenerating;
														},
														get codeBlockProps() {
															return {
																runAsCellReceiver: K.chatData.editorContext
																	.isNotebook
																	? (Ze) => G.aiService.insertCodeCellAndRun(Ze)
																	: void 0,
																shouldRecompute: me(),
																codeblockActionsCallback: (Ze) => {
																	const rt = [
																		...(V.data.referencedCodeBlockURIs ?? []),
																		...Ze.map((ft) => ft.uri),
																	].filter(
																		(ft, bt, nt) =>
																			nt.findIndex(
																				(lt) => lt.toString() === ft.toString(),
																			) === bt,
																	);
																	G.chatDataService.setChatData(
																		"tabs",
																		(ft) => ft.tabId === V.tabId,
																		"bubbles",
																		(ft) =>
																			ft.id === V.bubbleId &&
																			ft.type === u.BubbleType.AI_CHAT,
																		"referencedCodeBlockURIs",
																		rt,
																	),
																		W((ft) => [...ft, ...Ze]);
																},
																onNewCodeBlock: (Ze, et) => {
																	const rt = V.bubbleId,
																		ft = V.tabId;
																	K.setChatData(
																		"tabs",
																		(nt) => nt.tabId === ft,
																		"bubbles",
																		(nt) => nt.id === rt,
																		"hasCodeBlock",
																		!0,
																	),
																		et.predictedUri &&
																			K.setChatData(
																				"tabs",
																				(nt) => nt.tabId === ft,
																				"bubbles",
																				(nt) => nt.id === rt,
																				"codeBlocks",
																				(nt) => [
																					...nt,
																					{
																						uri: et.predictedUri,
																						editorDomId: (0, P.$30b)(
																							Ze.getId(),
																						),
																					},
																				],
																			);
																},
															};
														},
														get finished() {
															return !V.isTabGenerating;
														},
														get components() {
															return [
																{
																	regex: /interpreter_result_\d+/,
																	render: (0, f.$Xac)({
																		aiBubble: V.data,
																		tabId: V.tabId,
																	}),
																},
															];
														},
														get chatExtras() {
															return { bubbleId: V.bubbleId, tabId: V.tabId };
														},
													}),
												),
												Ve
											);
										},
									}),
									null,
								),
								(0, d.insert)(
									Re,
									(0, i.createComponent)(r.Show, {
										get when() {
											return (
												(0, m.memo)(() => !V.isGenerating)() && ie()?.editUuid
											);
										},
										children: (Ve) =>
											(0, i.createComponent)(r.Show, {
												get when() {
													return (() => {
														const Ze = G.fastEditService.getDiffId(Ve());
														return G.reactiveStorageService.nonPersistentStorage.inlineDiffs.some(
															(et) => et.id === Ze,
														);
													})();
												},
												get children() {
													const Ze = B();
													return (
														Ze.style.setProperty("display", "flex"),
														Ze.style.setProperty("flex-direction", "row"),
														Ze.style.setProperty("margin-top", "0.5rem"),
														(0, d.insert)(
															Ze,
															(0, i.createComponent)(n.$rdc, {
																title: "Accept Edit",
																type: "primary",
																onClick: () => {
																	G.fastEditService.acceptSlashEdit(Ve());
																},
															}),
															null,
														),
														(0, d.insert)(
															Ze,
															(0, i.createComponent)(n.$rdc, {
																title: "Reject Edit",
																type: "secondary",
																onClick: () => {
																	G.fastEditService.rejectSlashEdit(Ve());
																},
															}),
															null,
														),
														Ze
													);
												},
											}),
									}),
									null,
								),
								(0, d.insert)(
									Re,
									(0, i.createComponent)(r.Show, {
										get when() {
											return V.isGenerating && V.isLoading;
										},
										get children() {
											return [
												(() => {
													const Ve = B();
													return (
														Ve.style.setProperty("padding", "0px 6px"),
														(0, d.insert)(
															Ve,
															(0, i.createComponent)(L.$h_b, {
																conciseMessage: !1,
																get queuePositionResponse() {
																	return ee();
																},
																spaceBelow: !0,
																get isLoading() {
																	return V.isLoading;
																},
																get hideDotsLoading() {
																	return !fe();
																},
																get statusMessages() {
																	return (
																		_()?.statusUpdates?.updates.map(
																			(Ze) => Ze.message,
																		) ?? []
																	);
																},
																setIsUpsellFastRequestsShowing: Be,
																setIsUpsellingUsageBasedPricing: ke,
																setIsUpsellingHardLimit: qe,
															}),
														),
														Ve
													);
												})(),
												(0, i.createComponent)(r.Show, {
													get when() {
														return Ie();
													},
													get children() {
														return (0, i.createComponent)(D.$E$b, {
															setIsUpsellFastRequestsShowing: Be,
															conciseMessage: !1,
														});
													},
												}),
												(0, i.createComponent)(r.Show, {
													get when() {
														return Se();
													},
													get children() {
														return (0, i.createComponent)(o.$l_b, {
															setIsUpsellingUsageBasedPricing: ke,
														});
													},
												}),
												(0, i.createComponent)(r.Show, {
													get when() {
														return Ue();
													},
													get children() {
														return (0, i.createComponent)(o.$m_b, {
															setIsUpsellingHardLimit: qe,
														});
													},
												}),
											];
										},
									}),
									null,
								),
								(0, d.insert)(
									Re,
									(0, i.createComponent)(r.Show, {
										get when() {
											return (
												V.data.doThisForMeRequest !== void 0 ||
												(G.reactiveStorageService.nonPersistentStorage.continueBubbles.includes(
													V.bubbleId,
												) &&
													V.isLastAiBubble)
											);
										},
										get children() {
											return [
												(() => {
													const Ve = B();
													return (
														Ve.style.setProperty("height", "0.5rem"),
														Ve.style.setProperty("width", "100%"),
														Ve
													);
												})(),
												(() => {
													const Ve = z(),
														Ze = Ve.firstChild;
													return (
														Ve.style.setProperty("display", "flex"),
														Ve.style.setProperty("align-items", "center"),
														Ve.style.setProperty("flex-direction", "row"),
														Ve.style.setProperty("justify-content", "flex-end"),
														Ve.style.setProperty("gap", "0.5rem"),
														Ve.style.setProperty("margin-bottom", "0.5rem"),
														Ze.style.setProperty("flex-grow", "1"),
														Ze.style.setProperty("display", "flex"),
														Ze.style.setProperty(
															"justify-content",
															"flex-start",
														),
														(0, d.insert)(
															Ze,
															(0, i.createComponent)(r.Show, {
																get when() {
																	return (
																		G.reactiveStorageService.nonPersistentStorage.continueBubbles.includes(
																			V.bubbleId,
																		) && V.isLastAiBubble
																	);
																},
																get children() {
																	return (0, i.createComponent)(n.$rdc, {
																		type: "primary",
																		title: "Continue",
																		onClick: () => {
																			let et = `Your response got cut off, because you only have limited response space. Continue writing exactly where you left off. Do not repeat yourself. Start your response with: "${V.data.text.slice(-30)}", though use backticks where appropriate`;
																			G.markerDecorationsService.callInsertIntoChatCallback(
																				{
																					message: et,
																					editorUri: "",
																					lastBubble: !0,
																				},
																			);
																		},
																	});
																},
															}),
														),
														Ve
													);
												})(),
											];
										},
									}),
									null,
								),
								(0, d.insert)(
									Re,
									(0, i.createComponent)(r.Show, {
										get when() {
											return (
												(0, m.memo)(
													() =>
														!V.isGenerating && Y()?.interpreterData === void 0,
												)() && !ye()
											);
										},
										get children() {
											return (0, i.createComponent)(s.$3ac, {
												get copyText() {
													return V.data.text;
												},
												onRegenerate: () => {
													const Ve = be();
													Ve !== void 0 &&
														(G.telemetryService.publicLogCapture("chat.rerun"),
														K.chatService.submitChat({
															bubbleID: Ve,
															tabID: V.tabId,
														}));
												},
												get showFeedbackButtons() {
													return (
														(0, m.memo)(() => !!V.isLastAiBubble)() &&
														G.cursorAuthenticationService.reactivePrivacyMode() !==
															!0
													);
												},
												get shouldShowOpenInComposer() {
													return !!V.data.hasCodeBlock;
												},
												onOpenInComposer: () => {
													G.commandService.executeCommand(
														v.OPEN_COMPOSER_FROM_CURRENT_CHAT_ACTION_ID,
														V.tabId,
														V.bubbleId,
													);
												},
												onSubmitFeedback: (Ve) => {
													if (V.data.requestId !== void 0) {
														let Ze;
														switch (Ve) {
															case !0:
																Ze =
																	l.ReportGenerationFeedbackRequest_FeedbackType
																		.THUMBS_UP;
																break;
															case !1:
																Ze =
																	l.ReportGenerationFeedbackRequest_FeedbackType
																		.THUMBS_DOWN;
																break;
															case null:
																Ze =
																	l.ReportGenerationFeedbackRequest_FeedbackType
																		.NEUTRAL;
																break;
															default:
																throw new Error("Invalid feedback type");
														}
														G.aiService.reportGenerationFeedback(
															V.data.requestId,
															Ze,
														);
													}
												},
											});
										},
									}),
									null,
								),
								Re
							);
						},
					});
				};
				e.$8ac = q;
			},
		),
		define(
			de[1994],
			he([1, 0, 2, 2, 2, 1063, 181, 1362, 1106, 1160, 158, 13, 140, 450]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_ac = void 0),
					(e.$$ac = p);
				const n = (0, t.template)(
						'<div><div class="aislash-editor-placeholder">Empty message...',
					),
					g = (0, t.template)("<div>");
				function p(b) {
					const { chatDataService: s } = (0, h.$zgc)(),
						l = {
							...(0, c.$Rac)(),
							namespace: "chat-lexical-display" + b.id,
							onError: (I) => {
								console.error(I);
							},
							editable: !1,
						},
						[y, $] = (0, a.createSignal)(),
						v = () =>
							(0, w.createComponent)(d.ContentEditable, {
								class: "aislash-editor-input-readonly",
								style: {
									resize: "none",
									"grid-area": "1 / 1 / 1 / 1",
									overflow: "hidden",
									"line-height": "inherit",
									"font-family": "inherit",
									"font-size": "inherit",
									color: "var(--vscode-input-foreground)",
									"background-color": "transparent",
									display: "block",
									outline: "none",
									"scrollbar-width": "none",
									"box-sizing": "border-box",
									border: "none",
									"word-wrap": "break-word",
									"word-break": "break-word",
									padding: "0px",
								},
								turnOffCmdZ: !0,
								spellCheck: !1,
								autoCapitalize: "off",
								readOnly: !0,
							});
					function S() {
						return (() => {
							const I = n(),
								T = I.firstChild;
							return (
								I.style.setProperty("grid-area", "1 / 2 / 1 / 2"),
								T.style.setProperty("position", "relative"),
								T.style.setProperty("top", "0"),
								T.style.setProperty("left", "-100%"),
								T.style.setProperty("pointer-events", "none"),
								T.style.setProperty("user-select", "none"),
								T.style.setProperty(
									"color",
									"var(--vscode-input-placeholderForeground)",
								),
								T.style.setProperty("font-style", "italic"),
								I
							);
						})();
					}
					return (() => {
						const I = g();
						return (
							I.style.setProperty("display", "grid"),
							I.style.setProperty("position", "relative"),
							I.style.setProperty("grid-template-rows", "1"),
							I.style.setProperty("grid-template-columns", "1fr 1fr"),
							I.style.setProperty("width", "200%"),
							(0, i.insert)(
								I,
								(0, w.createComponent)(E.LexicalComposer, {
									initialConfig: l,
									get children() {
										return [
											(0, w.createComponent)(o, { setEditor: $ }),
											(0, w.createComponent)(r.PlainTextPlugin, {
												get contentEditable() {
													return v();
												},
												get placeholder() {
													return (0, w.createComponent)(S, {});
												},
												errorBoundary: m.LexicalErrorBoundary,
											}),
											(0, w.createComponent)(e.$_ac, {
												get text() {
													return b.text;
												},
												force: !0,
											}),
										];
									},
								}),
							),
							I
						);
					})();
				}
				const o = (b) => {
						const [s] = (0, C.useLexicalComposerContext)();
						return (
							(0, a.createEffect)(() => {
								b.setEditor && b.setEditor(s);
							}),
							null
						);
					},
					f = (b) => {
						const [s] = (0, C.useLexicalComposerContext)(),
							l = ($, v) => {
								const S = b.setForce;
								s.update(() => {
									const I = (0, u.$getRoot)();
									if (
										!I.getChildren().every((D) =>
											D instanceof u.ParagraphNode
												? D.getTextContent() === ""
												: !1,
										) &&
										!v
									)
										return;
									if ((v && S?.(!1), $.startsWith("{")))
										try {
											s.setEditorState(s.parseEditorState($));
											return;
										} catch (D) {
											console.error(D);
										}
									const k = (0, u.$createParagraphNode)(),
										L = (0, u.$createTextNode)($);
									k.append(L);
									for (const D of I.getChildren()) D.remove();
									I.append(k), I.selectEnd();
								});
							},
							y = ($) => {
								if (!($ === void 0 || $ === "")) {
									if ($.startsWith("{"))
										try {
											s.setEditorState(s.parseEditorState($));
											return;
										} catch (v) {
											console.error(v);
										}
									l($);
								}
							};
						return (
							(0, a.createEffect)(() => {
								b.force && l(b.richText ?? b.text, b.force);
							}),
							[]
						);
					};
				e.$_ac = f;
			},
		),
		define(
			de[4317],
			he([1, 0, 181, 158, 13, 36, 450]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerArrowPlugin = void 0);
				const d = (m) => {
					const [r] = (0, t.useLexicalComposerContext)(),
						u = (0, E.$odc)(),
						[a, h] = (0, w.createSignal)(-1),
						[c, n] = (0, w.createSignal)([]),
						[g, p] = (0, w.createSignal)("");
					(0, w.createEffect)(() => {
						g().trim() === ""
							? n([g(), ...u.aiService.getPreviousPrompts()])
							: n(u.aiService.getPreviousPrompts());
					});
					const o = r.registerCommand(
							i.KEY_ALT_ARROW_UP_COMMAND,
							(b) => {
								if (!b.altKey) return !1;
								const s = r.getRootElement();
								return (
									s !== null &&
										(0, C.$Vac)(s) &&
										(a() === c().length - 1 ||
											(a() === -1 && p(s.innerText), h((l) => l + 1))),
									!1
								);
							},
							i.COMMAND_PRIORITY_LOW,
						),
						f = r.registerCommand(
							i.KEY_ALT_ARROW_DOWN_COMMAND,
							(b) => {
								if (!b.altKey) return !1;
								const s = r.getRootElement();
								return (
									s !== null && (0, C.$Wac)(s) && a() !== -1 && h(a() - 1), !1
								);
							},
							i.COMMAND_PRIORITY_LOW,
						);
					return (
						(0, w.createEffect)(() => {
							const b = c().length - 1 - a();
							c().length > 0 && b >= 0 && b < c().length
								? (m.setText && m.setText(c()[b]),
									r.update(() => {
										const s = (0, i.$getRoot)(),
											l = (0, i.$createParagraphNode)(),
											y = (0, i.$createTextNode)(c()[b]);
										l.append(y);
										for (const $ of s.getChildren()) $.remove();
										s.append(l), s.selectEnd();
									}))
								: a();
						}),
						(0, w.onCleanup)(() => {
							o(), f();
						}),
						null
					);
				};
				e.ComposerArrowPlugin = d;
			},
		),
		define(
			de[4318],
			he([1, 0, 2, 1063, 181, 1362, 1106, 1160, 158, 13, 450]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerLexicalRenderer = a);
				function a(c) {
					const n = {
							...(0, u.$Rac)(),
							namespace: "composer-lexical-display",
							onError: (p) => {
								console.error(p);
							},
							editable: !1,
						},
						g = () =>
							(0, t.createComponent)(E.ContentEditable, {
								class: "aislash-editor-input-readonly",
								style: {
									resize: "none",
									"grid-area": "1 / 1 / 1 / 1",
									overflow: "hidden",
									"line-height": "inherit",
									"font-family": "inherit",
									"font-size": "inherit",
									color: "var(--vscode-input-foreground)",
									"background-color": "transparent",
									display: "block",
									outline: "none",
									"scrollbar-width": "none",
									"box-sizing": "border-box",
									border: "none",
									"word-wrap": "break-word",
									"word-break": "break-word",
									padding: "0px",
								},
								turnOffCmdZ: !0,
								spellCheck: !1,
								autoCapitalize: "off",
								readOnly: !0,
							});
					return (0, t.createComponent)(i.LexicalComposer, {
						initialConfig: n,
						get children() {
							return [
								(0, t.createComponent)(d.PlainTextPlugin, {
									get contentEditable() {
										return g();
									},
									get placeholder() {
										return [];
									},
									errorBoundary: C.LexicalErrorBoundary,
								}),
								(0, t.createComponent)(h, {
									get text() {
										return c.text;
									},
								}),
							];
						},
					});
				}
				const h = (c) => {
					const [n] = (0, w.useLexicalComposerContext)(),
						g = (o) => {
							n.update(() => {
								const f = (0, m.$getRoot)();
								if (
									!f
										.getChildren()
										.every(($) =>
											$ instanceof m.ParagraphNode
												? $.getTextContent() === ""
												: !1,
										)
								)
									return;
								if (o.startsWith("{"))
									try {
										n.setEditorState(n.parseEditorState(o));
										return;
									} catch ($) {
										console.error($);
									}
								const l = (0, m.$createParagraphNode)(),
									y = (0, m.$createTextNode)(o);
								l.append(y);
								for (const $ of f.getChildren()) $.remove();
								f.append(l), f.selectEnd();
							});
						},
						p = (o) => {
							if (!(o === void 0 || o === "")) {
								if (o.startsWith("{"))
									try {
										n.setEditorState(n.parseEditorState(o));
										return;
									} catch (f) {
										console.error(f);
									}
								g(o);
							}
						};
					return (
						(0, r.createEffect)(() => {
							p(c.text);
						}),
						[]
					);
				};
			},
		),
		define(
			de[4319],
			he([1, 0, 181, 158, 13, 36, 450, 1523]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rbc = void 0);
				const d = (m) => {
					const [r] = (0, t.useLexicalComposerContext)(),
						u = (0, E.$odc)(),
						[a, h] = (0, w.createSignal)(-1),
						[c, n] = (0, w.createSignal)([]),
						[g, p] = (0, w.createSignal)("");
					(0, w.createEffect)(() => {
						g().trim() === ""
							? n([g(), ...u.aiService.getPreviousPrompts()])
							: n(u.aiService.getPreviousPrompts());
					});
					const o = r.registerCommand(
							i.KEY_ARROW_UP_COMMAND,
							(b) => {
								if (!b.altKey) return !1;
								const s = r.getRootElement();
								return (
									s !== null &&
										(0, C.$Vac)(s) &&
										(a() === c().length - 1 ||
											(a() === -1 && p(s.innerText), h((l) => l + 1))),
									!1
								);
							},
							i.COMMAND_PRIORITY_LOW,
						),
						f = r.registerCommand(
							i.KEY_ARROW_DOWN_COMMAND,
							(b) => {
								if (!b.altKey) return !1;
								const s = r.getRootElement();
								return (
									s !== null && (0, C.$Wac)(s) && a() !== -1 && h(a() - 1), !1
								);
							},
							i.COMMAND_PRIORITY_LOW,
						);
					return (
						(0, w.createEffect)(() => {
							const b = c().length - 1 - a();
							c().length > 0 && b >= 0 && b < c().length
								? (m.setText && m.setText(c()[b]),
									r.update(() => {
										const s = (0, i.$getRoot)(),
											l = (0, i.$createParagraphNode)(),
											y = (0, i.$createTextNode)(c()[b]);
										l.append(y);
										for (const $ of s.getChildren()) $.remove();
										s.append(l), s.selectEnd();
									}))
								: a();
						}),
						(0, w.onCleanup)(() => {
							o(), f();
						}),
						null
					);
				};
				e.$rbc = d;
			},
		),
		define(
			de[4320],
			he([1, 0, 2, 2, 13, 450, 135]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sbc = void 0);
				const d = (m) => {
					const [r, u] = (0, w.createSignal)(0),
						[a, h] = (0, w.createSignal)(0),
						c = (0, C.$y0b)(),
						n = (0, w.createMemo)(() => m.minHeight ?? 18.19);
					(0, w.createEffect)(() => {
						g();
					});
					const g = () => {
						const p = Math.max(r(), n()),
							o = m.maxHeight ? Math.min(p, m.maxHeight) : p;
						h(o), c.setScrollDimensions({ height: o, scrollHeight: p }, !0);
					};
					return (0, t.createComponent)(C.$w0b, {
						get style() {
							return {
								height: `${a()}px`,
								"min-height": `${n()}px`,
								width: "100%",
								...(m.maxHeight && { "max-height": `${m.maxHeight}px` }),
								...m.scrollableStyle,
							};
						},
						get innerContainerStyle() {
							return m.innerContainerStyle;
						},
						scrollable: c,
						scrollingDirection: "vertical",
						autoScrollToBottom: !0,
						get reactiveElementOptions() {
							return m.reactiveScrollableOptions;
						},
						nonReactiveElementOptions: { useShadows: !1 },
						get children() {
							return (0, t.createComponent)(
								E.$Uac,
								(0, i.mergeProps)(m, {
									setContentHeight: (p) => {
										u(p), m.setContentHeight?.(p);
									},
									get containerStyle() {
										return {
											...m.containerStyle,
											height: "100%",
											"min-height": `${n()}px`,
											"max-height": "none",
											overflow: "visible",
										};
									},
								}),
							);
						},
					});
				};
				e.$sbc = d;
			},
		),
		define(
			de[4321],
			he([1, 0, 2, 2, 2, 2, 13, 1374, 147, 2511]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vfd = void 0);
				const r = (0, t.template)(
						'<div class="cursor-card-modal-bottom"><div class="cursor-card-modal-spacer">',
					),
					u = (a) => {
						const [h, c] = (0, C.createSignal)(0),
							n = () => {
								c((h() + 1) % a.children.length);
							},
							g = () => {
								c((h() - 1 + a.children.length) % a.children.length);
							};
						return (0, w.createComponent)(d.$ufd, {
							get disableClickOff() {
								return a.disableClickOff;
							},
							get closeModal() {
								return a.closeModal;
							},
							get children() {
								return [
									(0, E.memo)(() => a.children[h()]),
									(() => {
										const p = r(),
											o = p.firstChild;
										return (
											(0, i.insert)(
												p,
												(0, w.createComponent)(C.Show, {
													get when() {
														return h() > 0;
													},
													get children() {
														return (0, w.createComponent)(m.$rdc, {
															title: "Go back",
															type: "secondary",
															onClick: g,
															extras: {
																style: {
																	padding: "8px 12px",
																	color: "#bbb",
																	"margin-right": "8px",
																	"font-size": "14px",
																},
															},
														});
													},
												}),
												null,
											),
											(0, i.insert)(
												p,
												(0, w.createComponent)(m.$rdc, {
													get title() {
														return h() === a.children.length - 1
															? "Done"
															: "Next";
													},
													onClick: () => {
														h() < a.children.length - 1 ? n() : a.submitModal();
													},
													extras: {
														style: { padding: "8px 12px", "font-size": "16px" },
													},
												}),
												null,
											),
											p
										);
									})(),
								];
							},
						});
					};
				e.$vfd = u;
			},
		),
		define(
			de[4322],
			he([1, 0, 2, 2, 2, 13, 4321, 3196, 3206, 147, 695, 9, 36, 1716, 14]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$yfd = l);
				const g = (0, t.template)(
						`<div class="ai-project-desc-card"><div>What do you want to build?</div><div>Prompt the AI with a description of what you'd like to create</div><div>`,
					),
					p = (0, t.template)("<div>"),
					o = (0, t.template)('<div class="ai-project-location-card">'),
					f = (y) =>
						(() => {
							const $ = g(),
								v = $.firstChild,
								S = v.nextSibling,
								I = S.nextSibling;
							return (
								v.style.setProperty("font-size", "16px"),
								v.style.setProperty("margin-bottom", "8px"),
								v.style.setProperty("color", "var(--vscode-foreground)"),
								S.style.setProperty("font-size", "12px"),
								S.style.setProperty(
									"color",
									"var(--vscode-input-placeholderForeground)",
								),
								S.style.setProperty("margin-bottom", "16px"),
								I.style.setProperty("padding", "12px"),
								I.style.setProperty("margin-top", "16px"),
								I.style.setProperty(
									"background-color",
									"var(--vscode-sideBar-background)",
								),
								I.style.setProperty("margin-bottom", "24px"),
								I.style.setProperty("overflow-y", "auto"),
								I.style.setProperty("overflow-x", "hidden"),
								I.style.setProperty("max-height", "400px"),
								(0, i.insert)(
									I,
									(0, w.createComponent)(d.$wfd, {
										placeholder:
											"E.g. Build me a multiplayer game of tictactoe using express and React",
										get defaultValue() {
											return y.defaultValue;
										},
										defaultRows: 3,
										onInput: (T) => {
											y.updateDescription(T.target.value);
										},
									}),
								),
								$
							);
						})(),
					b = (y) => {
						const [$, v] = (0, E.createSignal)(null),
							S = async () => {
								const I = await y.pickFolder();
								console.log("path", I),
									console.log("inputRef", $),
									I != null &&
										(console.log("setting value"),
										($().value = I),
										y.setParentDir(I));
							};
						return (() => {
							const I = o();
							return (
								(0, i.insert)(
									I,
									(0, w.createComponent)(m.$xfd, {
										title: "Parent Folder",
										subtitle:
											"Your project will be created as a subdirectory of the parent",
										get children() {
											return (0, w.createComponent)(u.$gDc, {
												get textArea() {
													return (0, w.createComponent)(u.$fDc, {
														get extras() {
															return {
																value: y.parentDir(),
																onInput: (T) => {
																	y.setParentDir(T.target.value);
																},
																ref: v,
															};
														},
													});
												},
												get button() {
													return (0, w.createComponent)(r.$rdc, {
														get codicon() {
															return n.$ak.folder;
														},
														type: "secondary",
														onClick: S,
													});
												},
											});
										},
									}),
									null,
								),
								(0, i.insert)(
									I,
									(0, w.createComponent)(m.$xfd, {
										title: "Project Name",
										subtitle:
											"This will be the name of the folder for your new project",
										get children() {
											return [
												(0, w.createComponent)(E.Show, {
													get when() {
														return y.rejected;
													},
													get children() {
														const T = p();
														return (
															T.style.setProperty("font-size", "12px"),
															T.style.setProperty("color", "#f00"),
															T.style.setProperty("margin-bottom", "8px"),
															(0, i.insert)(
																T,
																() =>
																	`The folder ${y.projectName()} already exists in ${y.parentDir()}. Please choose a different name.`,
															),
															T
														);
													},
												}),
												(0, w.createComponent)(u.$fDc, {
													get extras() {
														return {
															default: "cursor-ai-project",
															value: y.projectName(),
															onInput: (T) => {
																y.setProjectName(T.target.value);
															},
														};
													},
												}),
											];
										},
									}),
									null,
								),
								I
							);
						})();
					},
					s = (y) => {
						const [$, v] = (0, E.createSignal)("");
						(0, E.createEffect)(() => {
							v(y.homeDir);
						});
						const [S, I] = (0, E.createSignal)("cursor-ai-project"),
							[T, P] = (0, E.createSignal)(void 0),
							[k, L] = (0, E.createSignal)(!1),
							D = (0, h.$odc)(),
							M = async () => {
								D.telemetryService.publicLogCapture("submitted.aiproject");
								const N = a.URI.joinPath(a.URI.file($()), S());
								if (await D.fileService.exists(N)) {
									L(!0);
									return;
								}
								await D.fileService.createFolder(N),
									await new Promise((A) => setTimeout(A, 200)),
									(0, c.$jed)(N, T(), D.storageService),
									await new Promise((A) => setTimeout(A, 200)),
									await D.hostService.openWindow([{ folderUri: N }], {
										forceNewWindow: !1,
									}),
									y.close();
							};
						return (
							(0, E.createEffect)(() => {
								D.telemetryService.publicLogCapture("viewed.aiproject.modal");
							}),
							(0, w.createComponent)(C.$vfd, {
								disableClickOff: !0,
								get closeModal() {
									return y.close;
								},
								submitModal: M,
								get children() {
									return [
										(0, w.createComponent)(f, {
											updateDescription: P,
											get defaultValue() {
												return T();
											},
										}),
										(0, w.createComponent)(b, {
											get rejected() {
												return k();
											},
											get homeDir() {
												return y.homeDir;
											},
											get pickFolder() {
												return y.pickFolder;
											},
											parentDir: $,
											projectName: S,
											setParentDir: (N) => {
												L(!1), v(N);
											},
											setProjectName: (N) => {
												L(!1), I(N);
											},
										}),
									];
								},
							})
						);
					};
				function l({
					container: y,
					homeDir: $,
					onClose: v,
					pickFolder: S,
					instantiationService: I,
				}) {
					return (0, h.$ndc)(
						() =>
							(0, w.createComponent)(s, {
								close: () => {
									console.log("CLOSED HERE"), v();
								},
								homeDir: $,
								pickFolder: S,
							}),
						y,
						I,
					);
				}
			},
		),
		define(
			de[1995],
			he([1, 0, 3, 8, 4322, 832, 1715, 3, 20, 445, 180, 151, 110, 5]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zfd = void 0);
				let n = class extends d.$1c {
					constructor(p, o, f, b, s, l) {
						super(),
							(this.f = o),
							(this.g = f),
							(this.h = b),
							(this.j = s),
							(this.m = l),
							(this.a = new t.$Zc()),
							(this.c = new C.$sfd()),
							this.g.activate();
					}
					renderModal() {
						let p = this.f.mainContainer;
						p &&
							((this.b = (0, w.$yfd)({
								container: p,
								homeDir: this.h.userHome.fsPath,
								pickFolder: async () => {
									const o = { defaultPath: this.h.userHome.fsPath },
										f = await this.j.pickFolder(o);
									return f ? f[0] : void 0;
								},
								instantiationService: this.m,
								onClose: () => {
									console.log("CLOSED HERE"), this.close();
								},
							})),
							this.c.onFocus());
					}
					dispose() {
						console.log("DISPOSING HERE"),
							super.dispose(),
							this.a.dispose(),
							this.b?.dispose();
					}
					close() {
						console.log("CLOSING HERE"), this.b?.dispose();
					}
				};
				(e.$zfd = n),
					(e.$zfd = n =
						Ne(
							[
								j(0, i.$6j),
								j(1, u.$jEb),
								j(2, E.$u0b),
								j(3, a.$ucd),
								j(4, h.$y7c),
								j(5, c.$Li),
							],
							n,
						)),
					(0, m.$lK)(r.$38b, n, m.InstantiationType.Delayed);
			},
		),
		