import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/lexical/lexical/lexical.js';
import '../../../../../external/solid/solid.js';
import '../../../../base/common/constants.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageTypes.js';
import '../../aichat/browser/chatData.js';
import '../../aichat/browser/components/Utils.js';
import '../../ui/browser/aiInput/aiInput2.js';
import '../../controlCommon/browser/solid.js';
import '../../ui/browser/hooks/useKeyboardShortcut.js';
import '../../../../base/common/themables.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/uri.js';
import '../../ui/browser/aiInput/plugins/mentions/pureIcon.js';
import '../../../../platform/editor/common/editor.js';
import '../../../../base/common/resources.js';
import '../../../../css!vs/workbench/contrib/aiInterpreter/browser/interpreter.js';
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
		