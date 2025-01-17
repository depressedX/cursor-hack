import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/browser/ui/hover/hoverWidget.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/themables.js';
import '../../../aichat/browser/utils.js';
import './ComposerExampleBubbles.js';
import '../hooks/useComposerDataHandle.js';
import '../constants.js';
import '../../../controlCommon/browser/solid.js';
import '../../../ui/browser/hooks/useKeyboardShortcut.js';
import '../../../ui/browser/hooks/useVSHoverTooltip.js';
import '../../../ui/browser/scrollableDiv.js';
import '../../../../../css!vs/workbench/contrib/composer/browser/components/ComposerBelowChatHistory.js';
define(
			de[4277],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 7, 160, 14, 26, 397, 4276, 177, 169, 36,
				385, 422, 135, 2406,
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
					(e.ComposerBelowChatHistory = void 0);
				const y = (0, t.template)("<span>(<!>)"),
					$ = (0, t.template)(
						'<a href="#" class="composer-below-chat-history-view-all"><span>View all',
					),
					v = (0, t.template)("<div><div><span></span><span>"),
					S = (0, t.template)("<div>"),
					I = (0, t.template)('<div tabindex="0">'),
					T = (0, t.template)(
						'<div tabindex="0"><div><div></div><div></div></div><div>',
					),
					P = "New composer",
					k = "New chat",
					L = 6,
					D = (M) => {
						const N = (0, f.$odc)(),
							[A, R] = (0, r.createSignal)(0),
							{ showHover: O, hideHover: B } = (0, s.$z$b)(600),
							{
								composerDataHandle: U,
								currentComposer: z,
								forceMode: F,
								updateCurrentComposer: x,
							} = (0, p.useComposerDataHandle)(() => M.composerDataHandle),
							H = (0, r.createMemo)(() =>
								N.reactiveStorageService.applicationUserPersistentStorage
									.composerState.unification
									? "edit"
									: F() || "edit",
							),
							q = (0, r.createMemo)(() =>
								N.composerDataService.allComposersData.allComposers.filter(
									(te) => {
										const Q = N.composerDataService.getComposerForceMode(te);
										return Q === H() || (H() === "edit" && !Q);
									},
								),
							),
							V = (0, r.createMemo)(() =>
								N.reactiveStorageService.applicationUserPersistentStorage
									.composerState.unification
									? N.composerDataService.allComposersData.allComposers
									: q().filter((te) => te.composerId !== U().data.composerId),
							),
							G = (0, r.createMemo)(() => (H() === "chat" ? k : P)),
							K = (0, r.createMemo)(() =>
								V()
									.filter((Q) => Q.composerId !== U().data.composerId)
									.sort(
										(Q, Z) =>
											(Z.lastUpdatedAt ?? Z.createdAt) -
											(Q.lastUpdatedAt ?? Q.createdAt),
									)
									.slice(0, L),
							),
							J = (0, r.createMemo)(
								() =>
									N.reactiveStorageService.nonPersistentStorage.composerState
										.shouldRenderExampleBubbles ||
									(z()?.conversation.length === 1 &&
										N.reactiveStorageService.applicationUserPersistentStorage
											.bubbleTimesLeft > 0),
							),
							W = (0, r.createMemo)(() => K().length > 0),
							X = (0, r.createMemo)(() =>
								A() >= 450 ? 3 : A() >= 300 ? 2 : 1,
							);
						let Y;
						const ie = (0, u.$Ogb)().ResizeObserver;
						(0, r.onMount)(() => {
							if (!Y) return;
							const te = new ie((Q) => {
								for (let Z of Q) R(Z.contentRect.width);
							});
							te.observe(Y),
								(0, r.onCleanup)(() => {
									te.disconnect();
								});
						});
						const ne = (te) => {
								N.composerService.openComposer(te);
							},
							ee = (0, b.$5$b)(o.SHOW_COMPOSER_HISTORY_ACTION_ID);
						(0, r.createEffect)(() => {
							const te = M.selectedPreviousComposerIndex,
								Q = M.isRenderingSuggestedPillsBelowInputBox,
								Z = M.setSelectedPreviousComposerIndex,
								se = (re) => {
									if (te === -1 || z()?.conversation.length !== 0) return;
									const le = () => {
										Z(-1),
											Q
												? N.composerDataService.updateComposerData(
														U().data.composerId,
														{ selectInputBoxSuggestedPillSignal: !0 },
													)
												: N.composerService.focus(U().data.composerId, !0);
									};
									switch (re.key) {
										case "ArrowLeft": {
											const oe = te - 1;
											if (oe < 0) {
												le();
												break;
											}
											Z(oe);
											break;
										}
										case "ArrowRight": {
											const oe = te + 1;
											if (oe >= K().length) {
												Z(K().length - 1);
												break;
											}
											Z(oe);
											break;
										}
										case "ArrowUp": {
											const ae = te - X();
											if (ae < 0) {
												re.stopImmediatePropagation(), le();
												break;
											}
											Z(ae);
											break;
										}
										case "ArrowDown": {
											const ae = te + X();
											if (ae >= K().length) {
												Z(K().length - 1);
												break;
											}
											Z(ae);
											break;
										}
										case "Escape": {
											Z(-1), N.composerService.focus(U().data.composerId);
											break;
										}
										case "Enter": {
											const oe = K()[te];
											oe && ne(oe.composerId);
											break;
										}
									}
								};
							Y?.addEventListener("keydown", se),
								(0, r.onCleanup)(() => {
									Y?.removeEventListener("keydown", se);
								});
						});
						const _ = (0, r.createMemo)(
							() =>
								M.selectedPreviousComposerIndex !== -1 ||
								(F() === "chat"
									? N.reactiveStorageService.applicationUserPersistentStorage
											.chatHistoryIsCollapsed !== !0
									: N.reactiveStorageService.applicationUserPersistentStorage
											.composerHistoryIsCollapsed !== !0),
						);
						return (0, E.createComponent)(r.Show, {
							get when() {
								return W();
							},
							get children() {
								const te = I();
								te.addEventListener("focusout", () => {
									const Z = M.setSelectedPreviousComposerIndex;
									setTimeout(() => {
										(!Y || !Y.contains((0, u.$Ogb)().document.activeElement)) &&
											Z(-1);
									});
								});
								const Q = Y;
								return (
									typeof Q == "function" ? (0, m.use)(Q, te) : (Y = te),
									te.style.setProperty("padding", "0.5rem 10px"),
									te.style.setProperty("display", "flex"),
									te.style.setProperty("flex-direction", "column"),
									te.style.setProperty("gap", "0.25rem"),
									te.style.setProperty("height", "100%"),
									te.style.setProperty("outline", "none"),
									te.style.setProperty("flex", "1"),
									(0, C.insert)(
										te,
										(0, E.createComponent)(r.Show, {
											get when() {
												return !J();
											},
											get fallback() {
												return (0, E.createComponent)(
													g.ComposerExampleBubbles,
													{
														get composerId() {
															return U().data.composerId;
														},
													},
												);
											},
											get children() {
												return [
													(() => {
														const Z = v(),
															se = Z.firstChild,
															re = se.firstChild,
															le = re.nextSibling;
														return (
															Z.style.setProperty("display", "flex"),
															Z.style.setProperty(
																"justify-content",
																"space-between",
															),
															Z.style.setProperty("align-items", "center"),
															Z.style.setProperty("padding", "0px 0.25rem"),
															se.addEventListener("click", () => {
																M.selectedPreviousComposerIndex !== -1 &&
																(F() === "chat"
																	? N.reactiveStorageService
																			.applicationUserPersistentStorage
																			.chatHistoryIsCollapsed
																	: N.reactiveStorageService
																			.applicationUserPersistentStorage
																			.composerHistoryIsCollapsed)
																	? M.setSelectedPreviousComposerIndex(-1)
																	: N.reactiveStorageService.setApplicationUserPersistentStorage(
																			F() === "chat"
																				? "chatHistoryIsCollapsed"
																				: "composerHistoryIsCollapsed",
																			(oe) => !oe,
																		);
															}),
															se.style.setProperty("display", "flex"),
															se.style.setProperty("align-items", "center"),
															se.style.setProperty("cursor", "pointer"),
															re.style.setProperty("font-size", "0.75rem"),
															re.style.setProperty(
																"color",
																"var(--vscode-input-placeholderForeground)",
															),
															re.style.setProperty("font-weight", "400"),
															re.style.setProperty("flex-shrink", "0"),
															re.style.setProperty("margin-right", "0.25rem"),
															(0, C.insert)(re, () =>
																H() === "chat"
																	? "Previous chats"
																	: "Previous composers",
															),
															le.style.setProperty("font-size", "0.75rem"),
															le.style.setProperty(
																"color",
																"var(--vscode-input-placeholderForeground)",
															),
															(0, C.insert)(
																Z,
																(0, E.createComponent)(r.Show, {
																	get when() {
																		return (
																			(0, d.memo)(() => !!_())() && A() > 260
																		);
																	},
																	get children() {
																		const oe = $(),
																			ae = oe.firstChild,
																			pe = ae.firstChild;
																		return (
																			oe.addEventListener("click", ($e) => {
																				$e.preventDefault(),
																					H() === "chat"
																						? N.commandService.executeCommand(
																								o.SHOW_COMPOSER_CHAT_HISTORY_ACTION_ID,
																							)
																						: N.commandService.executeCommand(
																								o.SHOW_COMPOSER_HISTORY_ACTION_ID,
																							);
																			}),
																			oe.style.setProperty(
																				"font-size",
																				"0.75rem",
																			),
																			oe.style.setProperty(
																				"color",
																				"var(--vscode-textLink-foreground)",
																			),
																			oe.style.setProperty(
																				"text-decoration",
																				"none",
																			),
																			oe.style.setProperty("display", "flex"),
																			oe.style.setProperty(
																				"align-items",
																				"center",
																			),
																			oe.style.setProperty("flex-shrink", "0"),
																			ae.style.setProperty(
																				"font-size",
																				"0.75rem",
																			),
																			ae.style.setProperty("flex-shrink", "0"),
																			(0, C.insert)(
																				ae,
																				(0, E.createComponent)(r.Show, {
																					get when() {
																						return (
																							(0, d.memo)(
																								() =>
																									M.selectedPreviousComposerIndex !==
																									-1,
																							)() && ee()
																						);
																					},
																					get children() {
																						const $e = y(),
																							ye = $e.firstChild,
																							ue = ye.nextSibling,
																							fe = ue.nextSibling;
																						return (
																							$e.style.setProperty(
																								"margin-left",
																								"4px",
																							),
																							$e.style.setProperty(
																								"color",
																								"var(--vscode-input-placeholderForeground)",
																							),
																							(0, C.insert)($e, ee, ue),
																							$e
																						);
																					},
																				}),
																				null,
																			),
																			oe
																		);
																	},
																}),
																null,
															),
															(0, w.effect)(
																(oe) => {
																	const ae = _() ? 1 : 0.5,
																		pe = _() ? 1 : 0.5,
																		$e = c.ThemeIcon.asClassName(
																			_()
																				? h.$ak.chevronDown
																				: h.$ak.chevronRight,
																		);
																	return (
																		ae !== oe._v$ &&
																			((oe._v$ = ae) != null
																				? re.style.setProperty("opacity", ae)
																				: re.style.removeProperty("opacity")),
																		pe !== oe._v$2 &&
																			((oe._v$2 = pe) != null
																				? le.style.setProperty("opacity", pe)
																				: le.style.removeProperty("opacity")),
																		$e !== oe._v$3 &&
																			(0, i.className)(le, (oe._v$3 = $e)),
																		oe
																	);
																},
																{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
															),
															Z
														);
													})(),
													(0, E.createComponent)(r.Show, {
														get when() {
															return _();
														},
														get children() {
															const Z = S();
															return (
																Z.style.setProperty("flex", "1"),
																(0, C.insert)(
																	Z,
																	(0, E.createComponent)(l.$w0b, {
																		scrollingDirection: "vertical",
																		style: { height: "100%" },
																		get children() {
																			const se = S();
																			return (
																				se.style.setProperty("display", "grid"),
																				se.style.setProperty("gap", "0.4rem"),
																				(0, C.insert)(
																					se,
																					(0, E.createComponent)(r.For, {
																						get each() {
																							return K();
																						},
																						children: (re, le) => {
																							const oe = (0, r.createMemo)(
																								() =>
																									le() ===
																									M.selectedPreviousComposerIndex,
																							);
																							let ae;
																							(0, r.createEffect)(() => {
																								oe() && ae?.focus();
																							});
																							const pe = (0, r.createMemo)(
																								() =>
																									oe()
																										? "var(--vscode-editorGutter-modifiedBackground)"
																										: "var(--vscode-widget-border, transparent)",
																							);
																							return (() => {
																								const $e = T(),
																									ye = $e.firstChild,
																									ue = ye.firstChild,
																									fe = ue.nextSibling,
																									me = ye.nextSibling;
																								$e.addEventListener(
																									"mouseleave",
																									() => B(),
																								),
																									$e.addEventListener(
																										"mouseenter",
																										(ge) =>
																											O({
																												target: ge.target,
																												content: `${
																													re.name
																														? re.name.split(`
`)[0]
																														: G()
																												}${re.composerId === U().data.composerId ? " (current)" : ""}`,
																												appearance: {
																													compact: !0,
																													showPointer: !0,
																												},
																												position: {
																													hoverPosition:
																														a.HoverPosition
																															.BELOW,
																												},
																											}),
																									),
																									$e.addEventListener(
																										"click",
																										() => ne(re.composerId),
																									);
																								const ve = ae;
																								return (
																									typeof ve == "function"
																										? (0, m.use)(ve, $e)
																										: (ae = $e),
																									$e.style.setProperty(
																										"display",
																										"flex",
																									),
																									$e.style.setProperty(
																										"outline",
																										"none",
																									),
																									$e.style.setProperty(
																										"align-items",
																										"center",
																									),
																									$e.style.setProperty(
																										"padding",
																										"0.3rem 0.4rem",
																									),
																									$e.style.setProperty(
																										"padding-left",
																										"calc(0.4rem - 1.5px)",
																									),
																									$e.style.setProperty(
																										"border-width",
																										"1px",
																									),
																									$e.style.setProperty(
																										"border-style",
																										"solid",
																									),
																									$e.style.setProperty(
																										"border-radius",
																										"0.25rem",
																									),
																									$e.style.setProperty(
																										"background-color",
																										"var(--vscode-input-background)",
																									),
																									$e.style.setProperty(
																										"cursor",
																										"pointer",
																									),
																									$e.style.setProperty(
																										"justify-content",
																										"space-between",
																									),
																									$e.style.setProperty(
																										"transition",
																										"background-color 0.2s ease",
																									),
																									$e.style.setProperty(
																										"min-width",
																										"0",
																									),
																									ye.style.setProperty(
																										"display",
																										"flex",
																									),
																									ye.style.setProperty(
																										"align-items",
																										"center",
																									),
																									ye.style.setProperty(
																										"min-width",
																										"0",
																									),
																									ye.style.setProperty(
																										"flex-grow",
																										"1",
																									),
																									ue.style.setProperty(
																										"margin-right",
																										"0.25rem",
																									),
																									ue.style.setProperty(
																										"font-size",
																										"0.75rem",
																									),
																									ue.style.setProperty(
																										"flex-shrink",
																										"0",
																									),
																									fe.style.setProperty(
																										"flex-grow",
																										"1",
																									),
																									fe.style.setProperty(
																										"flex-shrink",
																										"1",
																									),
																									fe.style.setProperty(
																										"min-width",
																										"0",
																									),
																									fe.style.setProperty(
																										"font-size",
																										"0.75rem",
																									),
																									fe.style.setProperty(
																										"white-space",
																										"nowrap",
																									),
																									fe.style.setProperty(
																										"overflow",
																										"hidden",
																									),
																									fe.style.setProperty(
																										"text-overflow",
																										"ellipsis",
																									),
																									(0, C.insert)(
																										fe,
																										() => re.name || G(),
																									),
																									me.style.setProperty(
																										"font-size",
																										"0.65rem",
																									),
																									me.style.setProperty(
																										"color",
																										"var(--vscode-input-placeholderForeground)",
																									),
																									me.style.setProperty(
																										"margin-left",
																										"0.6rem",
																									),
																									me.style.setProperty(
																										"flex-shrink",
																										"0",
																									),
																									(0, C.insert)(me, () =>
																										(0, n.$bgc)(
																											re.lastUpdatedAt ??
																												re.createdAt,
																										),
																									),
																									(0, w.effect)(
																										(ge) => {
																											const be = `composer-below-chat-history-item ${re.composerId === U().data.composerId ? "current-chat" : ""}`,
																												Ce = pe(),
																												Le = pe(),
																												Fe = pe(),
																												Oe = oe()
																													? "var(--vscode-editorGutter-modifiedBackground)"
																													: re.composerId ===
																															U().data
																																.composerId
																														? "var(--vscode-textLink-activeForeground)"
																														: "var(--vscode-widget-border, transparent)",
																												xe = re.name
																													? "var(--vscode-foreground)"
																													: "var(--vscode-input-placeholderForeground)",
																												He =
																													c.ThemeIcon.asClassName(
																														H() === "chat"
																															? h.$ak.comment
																															: h.$ak.notebook,
																													),
																												Ke = re.name
																													? "var(--vscode-foreground)"
																													: "var(--vscode-input-placeholderForeground)";
																											return (
																												be !== ge._v$4 &&
																													(0, i.className)(
																														$e,
																														(ge._v$4 = be),
																													),
																												Ce !== ge._v$5 &&
																													((ge._v$5 = Ce) !=
																													null
																														? $e.style.setProperty(
																																"border-top-color",
																																Ce,
																															)
																														: $e.style.removeProperty(
																																"border-top-color",
																															)),
																												Le !== ge._v$6 &&
																													((ge._v$6 = Le) !=
																													null
																														? $e.style.setProperty(
																																"border-bottom-color",
																																Le,
																															)
																														: $e.style.removeProperty(
																																"border-bottom-color",
																															)),
																												Fe !== ge._v$7 &&
																													((ge._v$7 = Fe) !=
																													null
																														? $e.style.setProperty(
																																"border-right-color",
																																Fe,
																															)
																														: $e.style.removeProperty(
																																"border-right-color",
																															)),
																												Oe !== ge._v$8 &&
																													((ge._v$8 = Oe) !=
																													null
																														? $e.style.setProperty(
																																"border-left-color",
																																Oe,
																															)
																														: $e.style.removeProperty(
																																"border-left-color",
																															)),
																												xe !== ge._v$9 &&
																													((ge._v$9 = xe) !=
																													null
																														? ue.style.setProperty(
																																"color",
																																xe,
																															)
																														: ue.style.removeProperty(
																																"color",
																															)),
																												He !== ge._v$10 &&
																													(0, i.className)(
																														ue,
																														(ge._v$10 = He),
																													),
																												Ke !== ge._v$11 &&
																													((ge._v$11 = Ke) !=
																													null
																														? fe.style.setProperty(
																																"color",
																																Ke,
																															)
																														: fe.style.removeProperty(
																																"color",
																															)),
																												ge
																											);
																										},
																										{
																											_v$4: void 0,
																											_v$5: void 0,
																											_v$6: void 0,
																											_v$7: void 0,
																											_v$8: void 0,
																											_v$9: void 0,
																											_v$10: void 0,
																											_v$11: void 0,
																										},
																									),
																									$e
																								);
																							})();
																						},
																					}),
																				),
																				(0, w.effect)(() =>
																					`repeat(${X()}, 1fr)` != null
																						? se.style.setProperty(
																								"grid-template-columns",
																								`repeat(${X()}, 1fr)`,
																							)
																						: se.style.removeProperty(
																								"grid-template-columns",
																							),
																				),
																				se
																			);
																		},
																	}),
																),
																Z
															);
														},
													}),
												];
											},
										}),
									),
									te
								);
							},
						});
					};
				e.ComposerBelowChatHistory = D;
			},
		),
		