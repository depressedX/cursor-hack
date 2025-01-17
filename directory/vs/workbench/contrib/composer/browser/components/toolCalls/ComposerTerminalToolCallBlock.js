import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/solid.js';
import '../../../../../../base/common/codicons.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../base/common/platform.js';
import '../../../../aichat/browser/components/Utils.js';
import '../ComposerGeneralStatusIndicator.js';
import '../ComposerToolbarSimpleButton.js';
import '../../../../controlCommon/browser/solid.js';
import '../../../../ui/browser/badge/badge.js';
import '../../../../ui/browser/loadingSpinner/loadingSpinner.js';
import '../../../../ui/browser/scrollableDiv.js';
import '../../../../ui/browser/simpleCodeRender/simpleCodeRender.js';
import './ComposerToolCallBlockContainer.js';
import '../../../../../../platform/tracing/common/tracing.js';
import '../../../../../../css!vs/workbench/contrib/composer/browser/components/toolCalls/ComposerTerminalToolCallBlock.js';
define(
			de[4342],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 3, 12, 242, 565, 485, 36, 564, 295, 135,
				865, 792, 216, 2422,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerTerminalToolCallBlock = N);
				const y = (0, t.template)('<div><div class="terminal-prompt">$'),
					$ = (0, t.template)("<div>"),
					v = (0, t.template)(
						'<div><div class="composer-terminal-static-render">',
					),
					S = (0, t.template)(
						'<div class="hide-if-empty"><div></div><div></div><div class="hide-if-empty">',
					),
					I = (0, t.template)("<div><div></div><div>"),
					T = (0, t.template)("<div>Generating command"),
					P = (0, t.template)(
						"<div>Terminal popped out. <span>Click to focus.",
					),
					k = (0, t.template)('<div class="terminal-instance-component">');
				function L() {
					var R =
							typeof SuppressedError == "function"
								? SuppressedError
								: function (z, F) {
										var x = Error();
										return (
											(x.name = "SuppressedError"),
											(x.error = z),
											(x.suppressed = F),
											x
										);
									},
						O = {},
						B = [];
					function U(z, F) {
						if (F != null) {
							if (Object(F) !== F)
								throw new TypeError(
									"using declarations can only be used with objects, functions, null, or undefined.",
								);
							if (z)
								var x =
									F[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
							if (
								x === void 0 &&
								((x = F[Symbol.dispose || Symbol.for("Symbol.dispose")]), z)
							)
								var H = x;
							if (typeof x != "function")
								throw new TypeError("Object is not disposable.");
							H &&
								(x = function () {
									try {
										H.call(F);
									} catch (q) {
										return Promise.reject(q);
									}
								}),
								B.push({ v: F, d: x, a: z });
						} else z && B.push({ d: F, a: z });
						return F;
					}
					return {
						e: O,
						u: U.bind(null, !1),
						a: U.bind(null, !0),
						d: function () {
							var z,
								F = this.e,
								x = 0;
							function H() {
								for (; (z = B.pop()); )
									try {
										if (!z.a && x === 1)
											return (x = 0), B.push(z), Promise.resolve().then(H);
										if (z.d) {
											var V = z.d.call(z.v);
											if (z.a) return (x |= 2), Promise.resolve(V).then(H, q);
										} else x |= 1;
									} catch (G) {
										return q(G);
									}
								if (x === 1)
									return F !== O ? Promise.reject(F) : Promise.resolve();
								if (F !== O) throw F;
							}
							function q(V) {
								return (F = F !== O ? new R(V, F) : V), H();
							}
							return H();
						},
					};
				}
				function D(R) {
					return "stdout" in R && "stderr" in R;
				}
				const M = a.$m ? "shellscript" : "powershell";
				function N(R) {
					try {
						var O = L();
						const B = O.u((0, l.span)("ComposerTerminalToolCallBlock")),
							U = (0, g.$odc)(),
							z = (0, m.createMemo)(() => R.status),
							F = (0, m.createMemo)(() => z() === "pending"),
							x = (0, m.createMemo)(() => z() === "loading"),
							H = (0, m.createMemo)(() => z() === "running"),
							q = (0, m.createMemo)(() => z() === "error"),
							V = (0, m.createMemo)(() => z() === "success"),
							G = (0, m.createMemo)(() => z() === "cancelled"),
							K = (be) => (a.$m ? `\u2318${be}` : `^${be}`),
							[J, W] = (0, m.createSignal)(!1),
							[X, Y] = (0, m.createSignal)(!1),
							[ie, ne] = (0, m.createSignal)(!1),
							[ee, _] = (0, m.createSignal)(!1),
							[te, Q] = (0, m.createSignal)(void 0),
							[Z, se] = (0, m.createSignal)(0),
							[re, le] = (0, m.createSignal)(0),
							oe = (0, m.createMemo)(() =>
								D(R)
									? `${R.stdout}${
											R.stderr
												? `
` + R.stderr
												: ""
										}`
									: "",
							);
						(0, m.createEffect)(() => {
							const be = oe(),
								Ce = te()?.clientHeight;
							Ce && se(Ce);
						}),
							(0, m.createEffect)(() => {
								(0, m.onMount)(() => {
									setTimeout(() => {
										const be = te();
										be && se(be.clientHeight);
									}, 1);
								});
							});
						let ae;
						(0, m.createEffect)(() => {
							J() &&
								(clearTimeout(ae),
								(ae = setTimeout(() => {
									W(!1);
								}, 2e3)));
						});
						const pe = (0, m.createMemo)(() => !R.isBlocking);
						let $e;
						(0, m.createEffect)(() => {
							ie()
								? ($e = setTimeout(() => {
										_(!0);
									}, 500))
								: (clearTimeout($e), _(!1));
						}),
							(0, m.onCleanup)(() => {
								clearTimeout($e);
							});
						const [ye, ue] = (0, m.createSignal)(!0),
							fe = (0, m.createMemo)(
								() =>
									R.terminalInstance &&
									ye() &&
									R.terminalInstance.shellLaunchConfig.hideFromUser === !0 &&
									!R.componentToShowInsteadOfTerminalInstance,
							);
						(0, m.createEffect)(() => {
							R.terminalInstance && ue(!0);
						});
						const me = (0, m.createMemo)(() => {
								const be = R.bubbleData;
								if (be) return be.toolCallId;
							}),
							ve = (0, m.createMemo)(() => {
								if (R.composerId)
									return U.composerDataService.getPendingUserDecisionGroup(
										R.composerId,
									);
							}),
							ge = (0, m.createMemo)(() => {
								const be = ve();
								return be ? be.some((Ce) => Ce.toolCallId === me()) : !1;
							});
						return (0, d.createComponent)(s.ComposerToolCallBlockContainer, {
							get style() {
								return {
									outline: ge()
										? "1px solid var(--vscode-notebook-focusedCellBorder)"
										: void 0,
									padding: "0",
								};
							},
							get children() {
								const be = I(),
									Ce = be.firstChild,
									Le = Ce.nextSibling;
								return (
									be.style.setProperty("display", "flex"),
									be.style.setProperty("flex-direction", "column"),
									be.style.setProperty("height", "100%"),
									Ce.style.setProperty("display", "flex"),
									Ce.style.setProperty("gap", "8px"),
									Ce.style.setProperty("align-items", "start"),
									Ce.style.setProperty("flex-shrink", "0"),
									Ce.style.setProperty("position", "relative"),
									Ce.style.setProperty("padding", "6px 8px"),
									(0, C.insert)(
										Ce,
										(0, d.createComponent)(m.Show, {
											get when() {
												return R.command;
											},
											get fallback() {
												return (() => {
													const Fe = T(),
														Oe = Fe.firstChild;
													return (
														Fe.style.setProperty("height", "19px"),
														Fe.style.setProperty("padding-right", "6px"),
														Fe.style.setProperty("font-family", "monospace"),
														Fe.style.setProperty("font-size", "12px"),
														Fe.style.setProperty(
															"color",
															"var(--vscode-input-placeholderForeground)",
														),
														Fe.style.setProperty("display", "flex"),
														Fe.style.setProperty("align-items", "center"),
														Fe.style.setProperty("gap", "6px"),
														(0, C.insert)(
															Fe,
															(0, d.createComponent)(o.$Y8b, { small: !0 }),
															Oe,
														),
														Fe
													);
												})();
											},
											get children() {
												const Fe = y(),
													Oe = Fe.firstChild;
												return (
													Fe.style.setProperty("flex", "1"),
													Fe.style.setProperty("display", "flex"),
													Fe.style.setProperty("width", "100%"),
													Fe.style.setProperty("align-items", "start"),
													Fe.style.setProperty("gap", "4px"),
													Fe.style.setProperty("position", "relative"),
													(0, C.insert)(
														Fe,
														(0, d.createComponent)(b.$Ibc, {
															scrollOnlyWhenFocused: !0,
															class: "show-only-on-hover-force",
															get text() {
																return R.command;
															},
															language: M,
															style: {
																flex: 1,
																"padding-right": "20px",
																"padding-left": "12px",
																width: "100%",
															},
															nonReactiveEditorOptions: {
																scrollbar: {
																	horizontal: "hidden",
																	horizontalScrollbarSize: 6,
																	ignoreVerticalScrolling: !0,
																	ignoreHorizontalScrollbarInContentHeight: !0,
																	alwaysConsumeMouseWheel: !1,
																	vertical: "hidden",
																},
																wordWrap: "on",
																rulers: [],
																overviewRulerBorder: !1,
																overviewRulerLanes: 0,
																automaticLayout: !0,
																automaticLayoutIgnoreHeight: !0,
																wordWrapOverride1: "on",
																wordWrapOverride2: "on",
															},
															autoHeightForModelChanges: !0,
															autoHeightForWordWrap: !0,
															get editable() {
																return F();
															},
															isSimpleWidget: !1,
															onTextChange: (xe) => {
																R.onCommandChange?.(xe);
															},
														}),
														null,
													),
													(0, C.insert)(
														Fe,
														(0, d.createComponent)(m.Show, {
															get when() {
																return F();
															},
															get children() {
																return (0, d.createComponent)(
																	c.ComposerGeneralStatusIndicator,
																	{
																		pulse: !0,
																		status: "applying",
																		style: { margin: "4px" },
																	},
																);
															},
														}),
														null,
													),
													Fe
												);
											},
										}),
									),
									Le.style.setProperty("display", "flex"),
									Le.style.setProperty("flex-direction", "column"),
									Le.style.setProperty("gap", "0px"),
									Le.style.setProperty("height", "100%"),
									(0, C.insert)(
										Le,
										(0, d.createComponent)(m.Show, {
											get when() {
												return (
													(0, E.memo)(() => !!oe())() &&
													(H() || q() || G() || V())
												);
											},
											get children() {
												const Fe = v(),
													Oe = Fe.firstChild;
												return (
													Fe.style.setProperty("flex", "1"),
													Fe.style.setProperty("width", "100%"),
													Fe.style.setProperty("min-height", "0"),
													Fe.style.setProperty("display", "flex"),
													Fe.style.setProperty("flex-direction", "column"),
													Fe.style.setProperty("gap", "4px"),
													Fe.style.setProperty("position", "relative"),
													Oe.addEventListener("mouseleave", () => ne(!1)),
													Oe.addEventListener("mouseenter", () => ne(!0)),
													Oe.style.setProperty("width", "100%"),
													Oe.style.setProperty("position", "relative"),
													(0, C.insert)(
														Oe,
														(0, d.createComponent)(m.Show, {
															get when() {
																return (
																	R.componentToShowInsteadOfTerminalInstance !==
																		"output" && R.terminalInstance
																);
															},
															get fallback() {
																return (0, d.createComponent)(f.$w0b, {
																	style: { height: "100%" },
																	scrollingDirection: "vertical",
																	innerContainerStyle: {
																		padding: "0px 8px",
																		"box-sizing": "border-box",
																	},
																	autoScrollToBottom: !0,
																	stableScrollable: !0,
																	get disableScroll() {
																		return !X();
																	},
																	nonReactiveElementOptions: {
																		verticalScrollbarSize: 6,
																		horizontalScrollbarSize: 6,
																	},
																	get children() {
																		return (0, d.createComponent)(b.$Ibc, {
																			get text() {
																				return oe().trimStart();
																			},
																			class: "show-only-on-hover-force",
																			language: M,
																			setContainerRef: Q,
																			scrollOnlyWhenFocused: !0,
																			nonReactiveEditorOptions: {
																				scrollbar: {
																					vertical: "hidden",
																					horizontal: "visible",
																					alwaysConsumeMouseWheel: !1,
																					ignoreHorizontalScrollbarInContentHeight:
																						!0,
																				},
																				wordWrap: "off",
																				wordWrapOverride1: "off",
																				wordWrapOverride2: "off",
																				rulers: [],
																				overviewRulerBorder: !1,
																				overviewRulerLanes: 0,
																				automaticLayout: !0,
																				padding: { top: 6, bottom: 6 },
																				fontSize: 12,
																			},
																			autoHeightForModelChanges: !0,
																			get style() {
																				return {
																					height:
																						oe().split(`
`).length *
																							(12 * 1.5) +
																						16 +
																						"px",
																				};
																			},
																			onFocus: () => Y(!0),
																			onBlur: () => Y(!1),
																		});
																	},
																});
															},
															children: (xe) => {
																const He = (0, m.createMemo)(() => xe());
																return (0, d.createComponent)(m.Show, {
																	get when() {
																		return fe();
																	},
																	get fallback() {
																		return (0, d.createComponent)(m.Show, {
																			get when() {
																				return R.componentToShowInsteadOfTerminalInstance;
																			},
																			get fallback() {
																				return (() => {
																					const Ke = P(),
																						Je = Ke.firstChild,
																						Te = Je.nextSibling;
																					return (
																						Ke.style.setProperty(
																							"text-overflow",
																							"ellipsis",
																						),
																						Ke.style.setProperty(
																							"overflow",
																							"hidden",
																						),
																						Ke.style.setProperty(
																							"white-space",
																							"nowrap",
																						),
																						Ke.style.setProperty(
																							"opacity",
																							"0.7",
																						),
																						Ke.style.setProperty(
																							"font-size",
																							"10px",
																						),
																						Ke.style.setProperty(
																							"user-select",
																							"none",
																						),
																						Ke.style.setProperty(
																							"text-align",
																							"center",
																						),
																						Ke.style.setProperty(
																							"padding-top",
																							"8px",
																						),
																						Ke.style.setProperty(
																							"padding-bottom",
																							"8px",
																						),
																						Te.addEventListener("click", () => {
																							U.terminalService.focusInstance(
																								xe(),
																							);
																						}),
																						Te.style.setProperty(
																							"text-decoration",
																							"underline",
																						),
																						Te.style.setProperty(
																							"cursor",
																							"pointer",
																						),
																						Ke
																					);
																				})();
																			},
																			get children() {
																				return R.componentToShowInsteadOfTerminalInstance;
																			},
																		});
																	},
																	get children() {
																		return (0, d.createComponent)(A, {
																			get terminalInstance() {
																				return He();
																			},
																			get isFocused() {
																				return X();
																			},
																			get isDone() {
																				return !H();
																			},
																			get startAtBufferLine() {
																				return R.startAtBufferLine;
																			},
																			setIsFocused: Y,
																			setTerminalOutputHeight: le,
																			get terminalOutputHeight() {
																				return re();
																			},
																		});
																	},
																});
															},
														}),
													),
													(0, C.insert)(
														Fe,
														(0, d.createComponent)(m.Show, {
															get when() {
																return q() || G();
															},
															get children() {
																const xe = $();
																return (
																	xe.style.setProperty("font-style", "italic"),
																	xe.style.setProperty("padding", "8px"),
																	xe.style.setProperty("padding-top", "0px"),
																	(0, C.insert)(xe, () =>
																		q()
																			? "Command failed"
																			: "Command cancelled",
																	),
																	(0, w.effect)(() =>
																		(q()
																			? "var(--vscode-errorForeground)"
																			: "var(--vscode-descriptionForeground)") !=
																		null
																			? xe.style.setProperty(
																					"color",
																					q()
																						? "var(--vscode-errorForeground)"
																						: "var(--vscode-descriptionForeground)",
																				)
																			: xe.style.removeProperty("color"),
																	),
																	xe
																);
															},
														}),
														null,
													),
													(0, w.effect)(
														(xe) => {
															const He = G() ? 0.5 : 1,
																Ke = fe()
																	? re() + "px"
																	: R.terminalInstance &&
																			R.componentToShowInsteadOfTerminalInstance !==
																				"output"
																		? void 0
																		: Math.min(Z(), 300) + "px";
															return (
																He !== xe._v$ &&
																	((xe._v$ = He) != null
																		? Fe.style.setProperty("opacity", He)
																		: Fe.style.removeProperty("opacity")),
																Ke !== xe._v$2 &&
																	((xe._v$2 = Ke) != null
																		? Oe.style.setProperty("height", Ke)
																		: Oe.style.removeProperty("height")),
																xe
															);
														},
														{ _v$: void 0, _v$2: void 0 },
													),
													Fe
												);
											},
										}),
										null,
									),
									(0, C.insert)(
										Le,
										(0, d.createComponent)(m.Show, {
											get when() {
												return (
													(x() && R.command) ||
													(fe() &&
														R.showOpenInExternalTerminalCallback &&
														R.terminalInstance) ||
													F() ||
													x() ||
													H()
												);
											},
											get children() {
												const Fe = S(),
													Oe = Fe.firstChild,
													xe = Oe.nextSibling,
													He = xe.nextSibling;
												return (
													Fe.style.setProperty("display", "flex"),
													Fe.style.setProperty(
														"justify-content",
														"space-between",
													),
													Fe.style.setProperty("align-items", "baseline"),
													Fe.style.setProperty("flex-shrink", "0"),
													Fe.style.setProperty("padding", "0px 6px"),
													Fe.style.setProperty("padding-top", "0px"),
													Fe.style.setProperty("padding-bottom", "6px"),
													(0, C.insert)(
														Fe,
														(0, d.createComponent)(m.Show, {
															get when() {
																return pe();
															},
															get children() {
																return (0, d.createComponent)(p.$nac, {
																	text: "Background",
																	type: "subtle",
																	size: "small",
																	style: {
																		"flex-shrink": 0,
																		"margin-right": "6px",
																	},
																});
															},
														}),
														Oe,
													),
													Oe.style.setProperty("text-overflow", "ellipsis"),
													Oe.style.setProperty("overflow", "hidden"),
													Oe.style.setProperty("white-space", "nowrap"),
													Oe.style.setProperty("opacity", "0.7"),
													Oe.style.setProperty("font-size", "10px"),
													(0, C.insert)(
														Oe,
														(() => {
															const Ke = (0, E.memo)(
																() => !!(x() && R.command),
															);
															return () =>
																Ke() && [
																	"Starting terminal",
																	(0, d.createComponent)(h.$C$b, {
																		show: !0,
																		speed: "slow",
																	}),
																];
														})(),
													),
													xe.style.setProperty("flex", "1"),
													He.style.setProperty("display", "flex"),
													He.style.setProperty("gap", "6px"),
													He.style.setProperty("align-items", "center"),
													(0, C.insert)(
														He,
														(0, d.createComponent)(m.Show, {
															get when() {
																return (
																	fe() &&
																	R.showOpenInExternalTerminalCallback &&
																	R.terminalInstance
																);
															},
															children: (Ke) =>
																(0, d.createComponent)(
																	n.ComposerToolbarSimpleButton,
																	{
																		onClick: () => {
																			const Je = Ke();
																			ue(!1),
																				U.terminalService.setActiveInstance(Je),
																				U.terminalService.focusInstance(Je),
																				R.showOpenInExternalTerminalCallback?.(
																					Je,
																				);
																		},
																		type: "secondary",
																		get codicon() {
																			return r.$ak.linkExternal;
																		},
																		children: "Pop out terminal",
																	},
																),
														}),
														null,
													),
													(0, C.insert)(
														He,
														(0, d.createComponent)(m.Show, {
															get when() {
																return F() || x();
															},
															get children() {
																return [
																	(0, d.createComponent)(
																		n.ComposerToolbarSimpleButton,
																		{
																			get onClick() {
																				return R.onCancel;
																			},
																			type: "secondary",
																			get children() {
																				return [
																					"Cancel",
																					(0, d.createComponent)(m.Show, {
																						get when() {
																							return ge();
																						},
																						get children() {
																							return " " + K("\u232B");
																						},
																					}),
																				];
																			},
																		},
																	),
																	(0, d.createComponent)(
																		n.ComposerToolbarSimpleButton,
																		{
																			get onClick() {
																				return R.onExecute;
																			},
																			get type() {
																				return ge() ? "primary" : "secondary";
																			},
																			get children() {
																				return [
																					"Run command",
																					(0, d.createComponent)(m.Show, {
																						get when() {
																							return ge();
																						},
																						get children() {
																							return " " + K("\u23CE");
																						},
																					}),
																				];
																			},
																		},
																	),
																];
															},
														}),
														null,
													),
													(0, C.insert)(
														He,
														(0, d.createComponent)(m.Show, {
															get when() {
																return H();
															},
															get children() {
																return (0, d.createComponent)(
																	n.ComposerToolbarSimpleButton,
																	{
																		get onClick() {
																			return R.onReset;
																		},
																		type: "true-secondary",
																		isLoading: !0,
																		children: "Cancel",
																	},
																);
															},
														}),
														null,
													),
													(0, w.effect)(
														(Ke) => {
															const Je = x() || !R.command ? 0.5 : 1,
																Te = x() || !R.command ? "none" : "auto",
																Ee = x() ? "none" : "text";
															return (
																Je !== Ke._v$3 &&
																	((Ke._v$3 = Je) != null
																		? Fe.style.setProperty("opacity", Je)
																		: Fe.style.removeProperty("opacity")),
																Te !== Ke._v$4 &&
																	((Ke._v$4 = Te) != null
																		? Fe.style.setProperty("pointer-events", Te)
																		: Fe.style.removeProperty(
																				"pointer-events",
																			)),
																Ee !== Ke._v$5 &&
																	((Ke._v$5 = Ee) != null
																		? Oe.style.setProperty("user-select", Ee)
																		: Oe.style.removeProperty("user-select")),
																Ke
															);
														},
														{ _v$3: void 0, _v$4: void 0, _v$5: void 0 },
													),
													Fe
												);
											},
										}),
										null,
									),
									(0, w.effect)(
										(Fe) => {
											const Oe = pe() ? "0.85" : "1",
												xe =
													oe() && (H() || q() || G() || V())
														? "1px solid var(--vscode-commandCenter-inactiveBorder)"
														: void 0,
												He = oe() ? "var(--vscode-panel-background)" : void 0;
											return (
												Oe !== Fe._v$6 &&
													((Fe._v$6 = Oe) != null
														? be.style.setProperty("opacity", Oe)
														: be.style.removeProperty("opacity")),
												xe !== Fe._v$7 &&
													((Fe._v$7 = xe) != null
														? Ce.style.setProperty("border-bottom", xe)
														: Ce.style.removeProperty("border-bottom")),
												He !== Fe._v$8 &&
													((Fe._v$8 = He) != null
														? Le.style.setProperty("background", He)
														: Le.style.removeProperty("background")),
												Fe
											);
										},
										{ _v$6: void 0, _v$7: void 0, _v$8: void 0 },
									),
									be
								);
							},
						});
					} catch (B) {
						O.e = B;
					} finally {
						O.d();
					}
				}
				function A(R) {
					const O = (0, g.$odc)();
					let B, U;
					const [z, F] = (0, m.createSignal)(!1),
						x = (K, J) => {
							(0, m.untrack)(() => {
								const W = K.xterm?.getBufferLength() ?? 1;
								let X = R.startAtBufferLine ?? 0;
								if ((X > W && (X = 0), z() && (X = 0), W - X < 25)) {
									const Y =
										K.xterm
											?.getBufferLines(X, K.xterm?.getBufferLength())
											.join(`
`) ?? "";
									q((ie) =>
										Math.max(
											ie,
											Y.trimEnd().split(`
`).length + (J ? 1 : 0),
										),
									);
								} else q((Y) => Math.max(Y, W));
							});
						};
					(0, m.createEffect)(() => {
						const K = R.terminalInstance,
							J = new u.$Zc();
						B &&
							(K.attachToElement(B),
							K.setVisible(!0),
							(U = new ResizeObserver((W) => {
								for (const X of W) {
									const Y = Math.max(X.contentRect.width, 800),
										ie = X.contentRect.height;
									K.layout({ width: Y, height: ie });
								}
							})),
							U.observe(B),
							K.layout({
								width: Math.max(800, B.clientWidth),
								height: B.clientHeight,
							}),
							x(K, !1)),
							J.add(
								K.onLineData((W) => {
									x(K, !0);
								}),
							),
							J.add(
								K.onDidBlur(() => {
									R.setIsFocused(!1);
								}),
							),
							J.add(
								K.onDidFocus(() => {
									F(!0), R.setIsFocused(!0), x(K, !1);
								}),
							),
							(0, m.onCleanup)(() => {
								K.setVisible(!1), K.detachFromElement(), U?.disconnect();
							});
					});
					const [H, q] = (0, m.createSignal)(0),
						[V, G] = (0, m.createSignal)(14);
					return (
						(0, m.createEffect)(() => {
							const K = () =>
								O.terminalConfigurationService.getFont(O.window, void 0, !0)
									.fontSize + 2;
							G(K());
							const J = O.terminalConfigurationService.onConfigChanged(() => {
								G(K());
							});
							(0, m.onCleanup)(() => J.dispose());
						}),
						(0, m.createEffect)(() => {
							const K = Math.max(H(), 1) * V() + 6 + 6 + 8;
							R.setTerminalOutputHeight(Math.min(K, 300)),
								R.isFocused || R.terminalInstance.scrollToBottom();
						}),
						(0, m.createEffect)(() => {
							const K = R.terminalInstance;
							if (K.xterm?.raw) {
								const J = K.xterm.raw.onKey((W) => {
									W.domEvent.key === "Escape" && K.xterm?.raw.blur();
								});
								(0, m.onCleanup)(() => {
									J.dispose();
								});
							}
						}),
						(0, m.createEffect)(() => {
							const K = R.terminalInstance;
							function J(W) {
								W.metaKey &&
									W.key === "c" &&
									(K.copySelection(), W.stopPropagation()),
									W.metaKey &&
										W.key === "v" &&
										(K.paste(), W.stopPropagation());
							}
							B?.addEventListener("keydown", J),
								(0, m.onCleanup)(() => {
									B?.removeEventListener("keydown", J);
								});
						}),
						(0, d.createComponent)(f.$w0b, {
							style: { height: "100%", width: "100%", position: "relative" },
							scrollingDirection: "horizontal",
							get disableScroll() {
								return !R.isFocused;
							},
							nonReactiveElementOptions: {
								verticalScrollbarSize: 6,
								horizontalScrollbarSize: 6,
							},
							get children() {
								return [
									(() => {
										const K = k(),
											J = B;
										return (
											typeof J == "function" ? (0, i.use)(J, K) : (B = K),
											K.style.setProperty("width", "100%"),
											(0, w.effect)(() =>
												R.terminalOutputHeight + "px" != null
													? K.style.setProperty(
															"height",
															R.terminalOutputHeight + "px",
														)
													: K.style.removeProperty("height"),
											),
											K
										);
									})(),
									(0, d.createComponent)(m.Show, {
										get when() {
											return !R.isFocused;
										},
										get children() {
											const K = $();
											return (
												K.addEventListener("click", () => {
													R.terminalInstance.focus();
												}),
												K.style.setProperty("position", "absolute"),
												K.style.setProperty("bottom", "0px"),
												K.style.setProperty("right", "0px"),
												K.style.setProperty("height", "100%"),
												K.style.setProperty("width", "100%"),
												K.style.setProperty("z-index", "1000000"),
												K
											);
										},
									}),
								];
							},
						})
					);
				}
			},
		),
		