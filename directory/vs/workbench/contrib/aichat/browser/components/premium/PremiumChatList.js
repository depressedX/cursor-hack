import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/solid.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../base/browser/dom.js';
import '../../../../../../editor/common/config/editorOptions.js';
import '../CodeInterpreterBubble.js';
import '../../utils.js';
import '../../../../composer/browser/hooks/useAutoVerticalScroll.js';
import '../../../../ui/browser/widgets/codeBlock.js';
import '../../../../ui/browser/scrollableDiv.js';
import '../../../../controlCommon/browser/solid.js';
import '../../chatData.js';
import './PremiumAiBubble.js';
import './PremiumUserBubble.js';
import '../../hooks/useCurrentTab.js';
import '../../../../ui/browser/hooks/useKeyboardShortcut.js';
import '../../chatData.js';
import '../../hooks/useIsTabExecuting.js';
import '../../../../aiConfig/browser/aiConfigHelper.js';
import '../../../../../../base/common/constants.js';
import '../../../../../../base/common/platform.js';
define(
			de[4403],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 2, 7, 38, 4245, 397, 794, 312, 135, 36, 140,
				4316, 4402, 1065, 385, 140, 4145, 270, 58, 12,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$acc = void 0);
				const P = (0, t.template)("<div>"),
					k = (0, t.template)('<div tabindex="0">'),
					L = (0, t.template)(
						'<div><div class="cancel-generation-button"><span></span><span>Cancel generation',
					),
					D = (N, A = !1) => {
						const R = (0, o.$odc)();
						return (0, m.createMemo)(() =>
							R.reactiveStorageService.nonPersistentStorage.inprogressAIGenerations.some(
								(B) =>
									B.metadata !== void 0 &&
									((B.metadata.type === "chat" &&
										(A ? B.metadata.chatType !== "edit" : !0) &&
										B.metadata.isBackground !== !0) ||
										B.metadata.type === "codeInterpreter") &&
									B.metadata.tabId === N(),
							),
						);
					},
					M = (N) => {
						const A = (0, f.$zgc)(),
							R = (0, o.$odc)(),
							O = P(),
							U = R.instantiationService
								.createInstance(
									g.$X0b,
									O,
									g.$X0b.getEditorOptions(R.configurationService),
									{},
								)
								?.getOption(a.EditorOption.fontInfo),
							z = (0, l.$lbc)(),
							F = (0, m.createMemo)(() => z()?.bubbles ?? []),
							x = (0, m.createMemo)(() => z()?.longContextModeEnabled ?? !1);
						(0, m.createEffect)(() => {
							x() &&
								R.reactiveStorageService.applicationUserPersistentStorage
									.longContextFlagEnabled2 &&
								R.sourceFilesService.getFolderSize("", {
									throttleFileStat: !0,
								});
						}, x);
						const H = D(() => N.tabId, !0),
							q = D(() => N.tabId, !0),
							V = (0, v.$_bc)(() => z().tabId);
						let G = { value: void 0 };
						const [K, J] = (0, m.createSignal)(!1),
							W = () => {
								if (G.value) {
									const le = G.value.clientHeight > 10;
									J(le);
								}
							},
							X = (0, u.$Ogb)().ResizeObserver;
						(0, m.createEffect)(() => {
							const le = new X(W);
							G.value && (le.observe(G.value), W()),
								(0, m.onCleanup)(() => {
									G.value && le.unobserve(G.value);
								});
						});
						const Y = (0, m.createMemo)(() =>
								F().reduceRight(
									(le, oe) => le || (oe.type === "ai" ? oe : null),
									null,
								),
							),
							ie = (0, m.createMemo)(
								() =>
									R.reactiveStorageService.applicationUserPersistentStorage
										.longContextFlagEnabled2,
							);
						(0, m.createEffect)(() => {
							const le = _();
							le && (0, c.$egc)(le);
						}),
							(0, m.createEffect)(() => {
								const le = (0, u.$Ogb)(),
									oe = N.tabId,
									ae = (pe) => {
										if (!ne || !ne.contains(pe.target)) return;
										const $e = F().findIndex((me) => me.id === _()),
											ye = T.$m
												? pe.ctrlKey && !pe.metaKey
												: pe.metaKey && !pe.ctrlKey;
										if ($e !== -1)
											switch (pe.key) {
												case "ArrowUp":
												case "k": {
													if (pe.key === "k" && !ye) break;
													if ((pe.preventDefault(), $e === -1)) {
														const me = F()[F().length - 2]?.id;
														me &&
															(A.setChatData(
																"tabs",
																(ve) => ve.tabId === oe,
																"selectedBubbleId",
																me,
															),
															(0, c.$egc)(me));
													} else if ($e > 0) {
														const me = F()[$e - 1].id;
														A.setChatData(
															"tabs",
															(ve) => ve.tabId === oe,
															"selectedBubbleId",
															me,
														),
															(0, c.$egc)(me);
													}
													break;
												}
												case "ArrowDown":
												case "j": {
													if (pe.key === "j" && !ye) break;
													if (
														(pe.preventDefault(),
														$e !== -1 && $e < F().length - 2)
													) {
														const me = F()[$e + 1].id;
														A.setChatData(
															"tabs",
															(ve) => ve.tabId === oe,
															"selectedBubbleId",
															me,
														),
															(0, c.$egc)(me);
													} else
														$e === F().length - 2 &&
															A.setChatData("selectInputBoxPillSignal", !0);
													break;
												}
												case "e":
												case "E":
												case "i":
												case "I":
												case "Enter": {
													pe.preventDefault();
													const me = F().find((ve) => ve.id === _());
													me &&
														me.type === f.BubbleType.USER_CHAT &&
														(A.setChatData(
															"tabs",
															(ve) => ve.tabId === oe,
															"selectedBubbleId",
															void 0,
														),
														me.id === z().editingBubbleId
															? A.chatData.inputBoxDelegateMap[me.id]?.focus()
															: A.setChatData(
																	"tabs",
																	(ve) => ve.tabId === oe,
																	"editingBubbleId",
																	me.id,
																));
													break;
												}
											}
										else
											switch (pe.key) {
												case "ArrowUp":
												case "k": {
													if (pe.key === "k" && !ye) break;
													pe.preventDefault();
													const me = ee.getCurrentScrollPosition().scrollTop;
													ee.setScrollPositionNow({
														scrollTop: Math.max(0, me - 50),
													});
													break;
												}
												case "ArrowDown":
												case "j": {
													if (pe.key === "j" && !ye) break;
													pe.preventDefault();
													const me = ee.getCurrentScrollPosition(),
														ve =
															ee.getScrollDimensions().scrollHeight -
															ee.getScrollDimensions().height;
													ee.setScrollPositionNow({
														scrollTop: Math.min(ve, me.scrollTop + 50),
													});
													break;
												}
											}
										const ue = !0,
											fe = () => {
												A.chatData.tabs.find((me) => me.tabId === oe)
													?.editingBubbleId
													? A.chatData.inputBoxDelegateMap[
															A.chatData.tabs.find((me) => me.tabId === oe)
																?.editingBubbleId
														]?.focus()
													: A.chatData.inputBoxDelegate?.focus();
											};
										pe.key === "Escape"
											? (pe.preventDefault(),
												_() &&
													(A.setChatData(
														"tabs",
														(me) => me.tabId === oe,
														"selectedBubbleId",
														void 0,
													),
													ue && fe()))
											: pe.key === "Tab" && !ue && (pe.preventDefault(), fe());
									};
								le.addEventListener("keydown", ae),
									(0, m.onCleanup)(() => {
										le.removeEventListener("keydown", ae);
									});
							});
						let ne;
						const ee = (0, p.$y0b)(),
							_ = (0, m.createMemo)(() => {
								const le = z();
								return le?.tabState === f.TabState.chat
									? (le?.selectedBubbleId ?? "")
									: "";
							});
						(0, n.useAutoVerticalScroll)(
							ee,
							() => ne,
							() => (0, c.$dgc)(_()),
							() => [_()],
							{ paddingToEdge: 12 },
						);
						let te = !1;
						const Q = (0, y.$5$b)($.$Pgc),
							Z = () => {
								R.aiChatService.cancelGeneration({ tabID: z().tabId });
							},
							[se] = (0, S.$K0b)(I.$uW, R.configurationService, !0),
							[re] = (0, S.$K0b)(I.$mW, R.configurationService, !0);
						return (() => {
							const le = P();
							return (
								(0, d.use)((oe) => {
									(G.value = oe), (ne = oe);
								}, le),
								le.style.setProperty("flex-grow", "1"),
								le.style.setProperty("min-height", "0px"),
								le.style.setProperty("height", "100%"),
								le.style.setProperty("position", "relative"),
								(0, E.insert)(
									le,
									(0, C.createComponent)(p.$w0b, {
										onScroll: () => {
											R.reactiveStorageService.setNonPersistentStorage(
												"forceChatDropdownRerender",
												(oe) => (oe ?? 0) + 1,
											);
										},
										get reactiveElementOptions() {
											return { verticalScrollbarSize: re() ? 6 : 10 };
										},
										get scrollToBottomTrigger() {
											return N.scrollToBottomTrigger;
										},
										scrollingDirection: "vertical",
										get autoScrollToBottom() {
											return se();
										},
										style: { height: "100%" },
										innerContainerStyle: { display: "flex" },
										scrollable: ee,
										stableScrollable: !0,
										get children() {
											const oe = k();
											return (
												oe.addEventListener("focusout", (ae) => {
													const pe = N.tabId;
													setTimeout(() => {
														(!ne ||
															!ne.contains(
																(0, u.$Ogb)().document.activeElement,
															)) &&
															((te = !1),
															A.setChatData(
																"tabs",
																($e) => $e.tabId === pe,
																"selectedBubbleId",
																void 0,
															));
													});
												}),
												oe.addEventListener("focusin", () => {
													te || (te = !0);
												}),
												oe.style.setProperty("flex-grow", "1"),
												oe.style.setProperty("flex-basis", "0"),
												oe.style.setProperty("outline", "none"),
												oe.style.setProperty("display", "flex"),
												oe.style.setProperty("flex-direction", "column"),
												oe.style.setProperty("align-items", "stretch"),
												oe.style.setProperty("width", "100%"),
												(0, E.insert)(
													oe,
													(0, C.createComponent)(r.For, {
														get each() {
															return F();
														},
														children: (ae, pe) =>
															(0, C.createComponent)(m.Switch, {
																get children() {
																	return [
																		(0, C.createComponent)(m.Match, {
																			get when() {
																				return (
																					ae.type === f.BubbleType.USER_CHAT
																				);
																			},
																			get children() {
																				return (0, C.createComponent)(s.$$bc, {
																					data: ae,
																					get tabId() {
																						return N.tabId;
																					},
																					get bubbleId() {
																						return ae.id;
																					},
																					scrollable: ee,
																				});
																			},
																		}),
																		(0, C.createComponent)(m.Match, {
																			get when() {
																				return ae.type === f.BubbleType.AI_CHAT;
																			},
																			get children() {
																				return (0, C.createComponent)(b.$8ac, {
																					onContext: () => {},
																					fontInfo: U,
																					data: ae,
																					get userBubbleId() {
																						return F()[pe() - 1]?.id;
																					},
																					get isTabGenerating() {
																						return (
																							(0, i.memo)(() => !!H())() &&
																							ae.id === Y()?.id
																						);
																					},
																					get isGenerating() {
																						return (
																							(0, i.memo)(() => !!q())() &&
																							ae.id === Y()?.id
																						);
																					},
																					get isLoading() {
																						return N.isLoading;
																					},
																					get setIsLoading() {
																						return N.setIsLoading;
																					},
																					get bubbleId() {
																						return ae.id;
																					},
																					get tabId() {
																						return N.tabId;
																					},
																					get isLastAiBubble() {
																						return pe() === F().length - 2;
																					},
																					get isChatVisible() {
																						return K();
																					},
																					get longContextFlagEnabled() {
																						return ie();
																					},
																					get longContextModeEnabled() {
																						return x();
																					},
																				});
																			},
																		}),
																		(0, C.createComponent)(m.Match, {
																			get when() {
																				return (
																					ae.type ===
																					f.BubbleType.AI_CODE_INTERPRETER
																				);
																			},
																			get children() {
																				return (0, C.createComponent)(h.$a_b, {
																					data: ae,
																					get userBubbleId() {
																						return F()[pe() - 1]?.id;
																					},
																					get isGenerating() {
																						return (
																							(0, i.memo)(() => !!q())() &&
																							pe() === F().length - 1
																						);
																					},
																					get bubbleId() {
																						return ae.id;
																					},
																					get tabId() {
																						return N.tabId;
																					},
																					get isLastAiBubble() {
																						return pe() === F().length - 2;
																					},
																					get isChatVisible() {
																						return K();
																					},
																				});
																			},
																		}),
																	];
																},
															}),
													}),
												),
												(0, w.effect)(
													(ae) => {
														const pe = A.isEditorWindow ? "4px" : "0px",
															$e = se() ? "8vh" : "45vh";
														return (
															pe !== ae._v$ &&
																((ae._v$ = pe) != null
																	? oe.style.setProperty("padding-top", pe)
																	: oe.style.removeProperty("padding-top")),
															$e !== ae._v$2 &&
																((ae._v$2 = $e) != null
																	? oe.style.setProperty("padding-bottom", $e)
																	: oe.style.removeProperty("padding-bottom")),
															ae
														);
													},
													{ _v$: void 0, _v$2: void 0 },
												),
												oe
											);
										},
									}),
									null,
								),
								(0, E.insert)(
									le,
									(0, C.createComponent)(m.Show, {
										get when() {
											return q() || V();
										},
										get children() {
											const oe = L(),
												ae = oe.firstChild,
												pe = ae.firstChild,
												$e = pe.nextSibling;
											return (
												oe.style.setProperty(
													"box-shadow",
													"0 4px 8px var(--vscode-inlineChat-shadow)",
												),
												oe.style.setProperty(
													"background",
													"var(--vscode-editor-background)",
												),
												oe.style.setProperty("position", "absolute"),
												oe.style.setProperty("bottom", "16px"),
												oe.style.setProperty("left", "50%"),
												oe.style.setProperty("z-index", "1000"),
												oe.style.setProperty("transform", "translateX(-50%)"),
												oe.style.setProperty("border-radius", "0.25rem"),
												oe.style.setProperty("width", "fit-content"),
												oe.style.setProperty("display", "flex"),
												oe.style.setProperty("align-items", "center"),
												oe.style.setProperty("max-width", "calc(100% - 32px)"),
												ae.addEventListener("click", Z),
												ae.style.setProperty("padding", "4px 6px"),
												ae.style.setProperty("transition", "200ms"),
												ae.style.setProperty("border-radius", "0.25rem"),
												ae.style.setProperty(
													"color",
													"var(--vscode-foreground)",
												),
												ae.style.setProperty("cursor", "pointer"),
												ae.style.setProperty("margin-left", "auto"),
												ae.style.setProperty("margin-right", "auto"),
												ae.style.setProperty("text-align", "center"),
												ae.style.setProperty("font-size", "12px"),
												ae.style.setProperty("flex-shrink", "0"),
												ae.style.setProperty("gap", "4px"),
												ae.style.setProperty("display", "flex"),
												ae.style.setProperty("align-items", "center"),
												ae.style.setProperty("white-space", "nowrap"),
												ae.style.setProperty("overflow", "hidden"),
												ae.style.setProperty("text-overflow", "ellipsis"),
												(0, E.insert)(pe, Q),
												$e.style.setProperty("flex-shrink", "0"),
												oe
											);
										},
									}),
									null,
								),
								le
							);
						})();
					};
				e.$acc = M;
			},
		),
		