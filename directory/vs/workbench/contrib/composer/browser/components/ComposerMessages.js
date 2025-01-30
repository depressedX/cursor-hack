import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/lexical/lexical/lexical.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../../proto/aiserver/v1/chat_pb.js';
import '../../../../../../proto/aiserver/v1/composer_pb.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/constants.js';
import '../../../../../base/common/platform.js';
import '../../../../../base/common/themables.js';
import '../../../../../editor/common/config/editorOptions.js';
import '../../../aichat/browser/components/ChatError.js';
import '../../../aichat/browser/components/Utils.js';
import '../../../aichat/browser/components/slowPool/usagePricingConfirmation.js';
import '../../../aichat/browser/components/slowPool/SlowPoolGenerationIndicator.js';
import '../../../aiConfig/browser/aiConfigHelper.js';
import './ComposerAiMessage.js';
import './ComposerControlsAndFeedback.js';
import './ComposerHumanMessage.js';
import './ComposerThoughtMessage.js';
import './ComposerToolbarSimpleButton.js';
import '../composerData.js';
import '../constants.js';
import '../hooks/useAutoVerticalScroll.js';
import '../hooks/useComposerChatStatus.js';
import '../hooks/useComposerDataHandle.js';
import '../hooks/useComposerLocation.js';
import '../hooks/useIsComposerBubbleSelected.js';
import '../utils.js';
import '../../../controlCommon/browser/solid.js';
import '../../../ui/browser/scrollableDiv.js';
import '../../../ui/browser/simpleButton/simpleButton.js';
import '../../../ui/browser/widgets/codeBlock.js';
import '../../../../../css!vs/workbench/contrib/composer/browser/components/ComposerMessages.js';
define(
			de[4412],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 158, 13, 126, 167, 7, 14, 58, 12,
				26, 38, 862, 242, 1072, 863, 270, 4398, 4275, 4411, 4280, 485, 225, 169,
				794, 858, 177, 1969, 4155, 246, 36, 135, 147, 312, 2415,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*web*/,
				i /*web*/,
				w /*web*/,
				E /*web*/,
				C /*web*/,
				d /*web*/,
				m /*web*/,
				r /*web*/,
				u /*web*/,
				a /*web*/,
				h /*lexical*/,
				c /*solid*/,
				n /*chat_pb*/,
				g /*composer_pb*/,
				p /*dom*/,
				o /*codicons*/,
				f /*constants*/,
				b /*platform*/,
				s /*themables*/,
				l /*editorOptions*/,
				y /*ChatError*/,
				$ /*Utils*/,
				v /*usagePricingConfirmation*/,
				S /*SlowPoolGenerationIndicator*/,
				I /*aiConfigHelper*/,
				T /*ComposerAiMessage*/,
				P /*ComposerControlsAndFeedback*/,
				k /*ComposerHumanMessage*/,
				L /*ComposerThoughtMessage*/,
				D /*ComposerToolbarSimpleButton*/,
				M /*composerData*/,
				N /*constants*/,
				A /*useAutoVerticalScroll*/,
				R /*useComposerChatStatus*/,
				O /*useComposerDataHandle*/,
				B /*useComposerLocation*/,
				U /*useIsComposerBubbleSelected*/,
				z /*utils*/,
				F /*solid*/,
				x /*scrollableDiv*/,
				H /*simpleButton*/,
				q /*codeBlock*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerMessages = ne);
				const V = (0, t.template)("<div>"),
					G = (0, t.template)('<div tabindex="0">'),
					K = (0, t.template)("<div><div></div><pre>"),
					J = (0, t.template)('<div class=" hide-if-empty" tabindex="0"><div>'),
					W = (0, t.template)("<span>Processing"),
					X = (0, t.template)(
						'<div class="fade-in-fast checkout-to-latest-changes"><div></div><span>Checkout to latest changes',
					),
					Y = 10,
					ie = 5;
				function ne(_) {
					const te = (0, F.$odc)(),
						{ composerDataService: Q, composerService: Z } = te,
						{
							composerDataHandle: se,
							currentComposer: re,
							forceMode: le,
							updateCurrentComposer: oe,
						} = (0, O.useComposerDataHandle)(() => _.composerDataHandle),
						[ae, pe] = (0, c.createSignal)(void 0),
						[$e, ye] = (0, c.createSignal)(!1),
						[ue, fe] = (0, c.createSignal)(0),
						[me, ve] = (0, c.createSignal)(Y),
						ge = (0, c.createMemo)(() => {
							const nt = re().conversation,
								lt = [];
							let ct = {
									startIndex: 0,
									kind: n.ConversationMessage_MessageType.HUMAN,
									messages: [],
								},
								gt;
							for (let ht = 0; ht < nt.length; ht++) {
								const Rt = nt[ht];
								gt !== void 0 &&
									Rt.type === n.ConversationMessage_MessageType.HUMAN &&
									(lt.push([ct, gt]),
									(ct = {
										startIndex: ht,
										kind: n.ConversationMessage_MessageType.HUMAN,
										messages: [],
									}),
									(gt = void 0)),
									Rt.type === n.ConversationMessage_MessageType.HUMAN
										? ct.messages.push(Rt)
										: Rt.type === n.ConversationMessage_MessageType.AI &&
											(gt === void 0 &&
												(gt = {
													startIndex: ht,
													kind: n.ConversationMessage_MessageType.AI,
													messages: [],
												}),
											gt.messages.push(Rt));
							}
							return (
								gt === void 0 &&
									(gt = {
										startIndex: nt.length,
										kind: n.ConversationMessage_MessageType.AI,
										messages: [],
									}),
								lt.push([ct, gt]),
								lt
							);
						}),
						[be, Ce] = (0, c.createSignal)(!1),
						[Le, Fe] = (0, c.createSignal)(-1),
						Oe = (0, B.useComposerLocation)(se);
					(0, c.createEffect)(() => {
						(0, c.onMount)(() => {
							const nt = te.composerUtilsService.onShouldResetCodeBlockCount(
								(lt) => {
									const { composerId: ct, messageIndex: gt } = lt;
									ct === se().data.composerId && (Ce(!0), Fe(gt));
								},
							);
							(0, c.onCleanup)(() => {
								nt.dispose();
							});
						});
					});
					const xe = (0, c.createMemo)(
							() => re().text.trim().length === 0 && _.isInputFocused,
						),
						He = (0, c.createMemo)(() => {
							const nt = V(),
								lt = te.instantiationService.createInstance(
									q.$X0b,
									nt,
									q.$X0b.getEditorOptions(te.configurationService),
									{},
								),
								ct = lt?.getOption(l.EditorOption.fontInfo);
							return lt?.dispose(), ct;
						}),
						[Ke, Je] = (0, c.createSignal)({});
					(0, c.createEffect)(() => {
						const nt = _.composerDataHandle;
						Je({});
					}),
						(0, c.createEffect)(() => {
							const nt = te.composerService.onTurningCodeBlockToCodePill(
								({ messageIndex: lt }) => {
									Je((ct) => {
										const gt = { ...ct },
											ht = re().conversation;
										if (ht)
											for (let Rt = lt; Rt < ht.length; Rt++) {
												const Nt = ht[Rt];
												Nt.type === n.ConversationMessage_MessageType.AI &&
													Nt.codeBlocks?.forEach((jt) => {
														const ti = jt.uri.toString();
														ti in gt && gt[ti] > 0
															? gt[ti]--
															: ti in gt && gt[ti] === 0 && delete gt[ti];
													});
											}
										return gt;
									}),
										Ce(!0),
										Fe(lt);
								},
							);
							(0, c.onCleanup)(() => {
								nt.dispose();
							});
						});
					const Te = (0, c.createMemo)(() => {
							const nt = re().conversation.findIndex(
									(ct) => ct.bubbleId === re().currentBubbleId,
								),
								lt = re().conversation.findIndex(
									(ct) => ct.bubbleId === re().editingBubbleId,
								);
							return nt !== -1 && lt !== -1
								? Math.min(nt + 1, lt + 1)
								: nt !== -1
									? nt + 1
									: lt !== -1
										? lt + 1
										: -1;
						}),
						[Ee, Ie] = (0, c.createSignal)(-1);
					(0, c.createEffect)(() => {
						const nt = re().conversation.length;
						if (Ee() >= nt) {
							const ct = [...re().conversation]
								.reverse()
								.findIndex(
									(gt) => gt.type === n.ConversationMessage_MessageType.AI,
								);
							if (ct !== -1) {
								const gt = nt - 1 - ct;
								Ie(gt);
							} else Ie(-1);
						}
					});
					const [Be] = (0, I.$K0b)(f.$GW, te.configurationService, !0),
						Se = (0, c.createMemo)(() => Q.getActionButtons(se()) ?? []),
						ke = (0, c.createMemo)(
							() =>
								te.reactiveStorageService.nonPersistentStorage.composerState
									?.isDebuggingComposerMessages ?? !1,
						);
					(0, c.createEffect)(() => {
						be() || Fe(-1);
					});
					const Ue = (0, c.createMemo)(() => _.stableScrollable ?? !0);
					let qe;
					const Ae = (0, x.$y0b)(),
						Me = (0, c.createMemo)(() => re().selectedBubbleId ?? ""),
						De = (0, c.createMemo)(() => re().editingBubbleId ?? "");
					(0, A.useAutoVerticalScroll)(
						Ae,
						() => qe,
						() =>
							De()
								? (0, z.getBubbleElementId)(De())
								: (0, z.getBubbleElementId)(Me()),
						() => [Me(), De()],
						{ paddingToEdge: 12, shouldRunInNextTick: !0 },
					);
					const Re = (nt) => {
							if (!qe || !qe.contains(nt.target)) return;
							const lt = re().conversation.findIndex(
									(Rt) => Rt.bubbleId === re().selectedBubbleId,
								),
								ct = b.$m
									? nt.ctrlKey && !nt.metaKey
									: nt.metaKey && !nt.ctrlKey,
								gt = _.lexicalEditor?.(),
								ht = b.$m ? nt.metaKey : nt.ctrlKey;
							if (gt)
								switch (nt.key) {
									case "Enter":
										if (ht) {
											nt.preventDefault(), Z.focus(se().data.composerId, !0);
											const Rt = new KeyboardEvent("keydown", {
												key: "Enter",
												ctrlKey: !0,
												metaKey: !0,
											});
											gt.dispatchCommand(h.KEY_COMMAND_ENTER_COMMAND, Rt);
											break;
										}
									case "Backspace":
										if (ht) {
											nt.preventDefault(), Z.focus(se().data.composerId, !0);
											const Rt = new KeyboardEvent("keydown", {
												key: "Backspace",
												ctrlKey: !0,
												metaKey: !0,
											});
											gt.dispatchCommand(h.KEY_BACKSPACE_DELETE_COMMAND, Rt);
										}
								}
							if (lt !== -1)
								switch (nt.key) {
									case "ArrowUp":
									case "k": {
										if (nt.key === "k" && !ct) break;
										if ($e()) {
											ft();
											break;
										}
										if ((nt.preventDefault(), lt > 0))
											for (let Rt = lt - 1; Rt >= 0; Rt--) {
												const Nt = re().conversation[Rt];
												if (
													Nt.type === n.ConversationMessage_MessageType.HUMAN
												) {
													if (Math.floor(Rt / 2) - (ge().length - me()) < 0) {
														Ae.setScrollPositionNow({ scrollTop: 0 }), ye(!0);
														break;
													}
													const kt = Nt.bubbleId;
													oe({ selectedBubbleId: kt }), (0, z.focusBubble)(kt);
													break;
												}
											}
										break;
									}
									case "ArrowDown":
									case "j": {
										if (nt.key === "j" && !ct) break;
										if ((nt.preventDefault(), $e())) {
											const ti = ge()[ge().length - me()];
											if (ti) {
												const kt = ti[0].messages[0].bubbleId;
												oe({ selectedBubbleId: kt }),
													(0, z.focusBubble)(kt),
													ye(!1);
											}
											break;
										}
										const Rt = re().conversation[lt],
											Nt = re().conversation.filter(
												(ti) =>
													ti.type === n.ConversationMessage_MessageType.HUMAN,
											),
											jt = Nt.findIndex((ti) => ti.bubbleId === Rt.bubbleId);
										if (jt < Nt.length - 1)
											for (let ti = jt + 1; ti < Nt.length; ti++) {
												const kt = Nt[ti];
												if (
													kt.type === n.ConversationMessage_MessageType.HUMAN
												) {
													const hi = kt.bubbleId;
													oe({ selectedBubbleId: hi }), (0, z.focusBubble)(hi);
													break;
												}
											}
										else
											jt === Nt.length - 1 &&
												(oe({ selectedBubbleId: void 0 }),
												Z.focus(se().data.composerId, !0),
												te.composerViewsService.triggerScrollToBottom(
													se().data.composerId,
												));
										break;
									}
									case "Enter":
									case "e":
									case "E":
									case "i":
									case "I": {
										if ((nt.preventDefault(), $e())) {
											ft();
											break;
										}
										const Rt = re().conversation[lt];
										Rt &&
											Rt.type === n.ConversationMessage_MessageType.HUMAN &&
											(oe({
												selectedBubbleId: void 0,
												editingBubbleId: Rt.bubbleId,
											}),
											Rt.bubbleId === re().editingBubbleId &&
												Z.focusPrevBubble(se().data.composerId));
										break;
									}
									case "Escape": {
										nt.preventDefault(),
											oe({ selectedBubbleId: void 0 }),
											ye(!1),
											Z.focus(se().data.composerId, !0);
										break;
									}
								}
						},
						[je, Ve] = (0, c.createSignal)(void 0),
						[Ze, et] = (0, c.createSignal)(0);
					(0, c.onMount)(() => {
						if (!qe) return;
						const nt = new ResizeObserver((lt) => {
							for (const ct of lt) et(ct.contentRect.height);
						});
						nt.observe(qe),
							(0, c.onCleanup)(() => {
								nt.disconnect();
							});
					});
					const rt = () => {
						ye(!1), ve(Math.min(Y, ge().length)), fe((nt) => nt + 1);
					};
					(0, c.createEffect)(
						(0, c.on)(re, () => {
							rt();
						}),
					),
						(0, c.createEffect)(
							(0, c.on)([() => re().conversation.length], () => {
								ye(!1), ve(Math.min(Y, ge().length));
							}),
						),
						(0, c.createEffect)(() => {
							if ($e() && me() === ge().length) {
								ye(!1);
								const nt = re().conversation[0];
								oe({ selectedBubbleId: nt.bubbleId }),
									(0, z.focusBubble)(nt.bubbleId);
							}
						});
					const ft = () => {
							const nt = Math.min(ge().length, me() + ie);
							ve(nt);
						},
						bt = (nt, lt) => {
							for (let ct = nt + 1; ct < lt.length; ct++)
								if (lt[ct].type === n.ConversationMessage_MessageType.HUMAN)
									return !1;
							return !0;
						};
					return (() => {
						const nt = G();
						return (
							(0, a.use)((lt) => {
								qe = lt;
							}, nt),
							nt.addEventListener("click", (lt) => {
								$e() && lt.target !== ae() && ye(!1);
							}),
							nt.addEventListener("focusout", (lt) => {
								setTimeout(() => {
									(!qe || !qe.contains((0, p.$Ogb)().document.activeElement)) &&
										(ye(!1),
										te.composerDataService
											.getComposerHandleById(re().composerId)
											.then((ct) => {
												ct &&
													(ct.setData("selectedBubbleId", void 0),
													ct.dispose());
											}));
								}, 0);
							}),
							nt.addEventListener("keydown", Re),
							nt.style.setProperty("flex-grow", "1"),
							nt.style.setProperty("min-height", "0px"),
							nt.style.setProperty("height", "100%"),
							nt.style.setProperty("position", "relative"),
							nt.style.setProperty("outline", "none"),
							(0, m.insert)(
								nt,
								(0, r.createComponent)(
									x.$w0b,
									(0, E.mergeProps)(
										{
											onScroll: () => {
												te.reactiveStorageService.setNonPersistentStorage(
													le() === "chat"
														? "forceChatDropdownRerender"
														: "forceComposerDropdownRerender",
													(lt) => (lt ?? 0) + 1,
												);
											},
											scrollingDirection: "vertical",
											get autoScrollToBottom() {
												return Be();
											},
											get scrollToBottomTrigger() {
												return re().scrollToBottomTrigger ?? 0;
											},
											nonReactiveElementOptions: { useShadows: !1 },
											get reactiveElementOptions() {
												return {
													verticalScrollbarSize: _.verticalScrollbarSize,
													horizontalScrollbarSize: _.horizontalScrollbarSize,
												};
											},
											get resetScrollableSize() {
												return ue();
											},
											get stableScrollable() {
												return Ue();
											},
										},
										() => _.customScrollableDivProps,
										{
											scrollable: Ae,
											get children() {
												const lt = V();
												return (
													(0, m.insert)(
														lt,
														(0, r.createComponent)(c.Show, {
															get when() {
																return ge().length > me();
															},
															get children() {
																const ct = V();
																return (
																	`6px ${N.COMPOSER_PANE_INPUT_MARGIN + N.COMPOSER_PANE_TOOLBAR_INDENT + 6}px` !=
																	null
																		? ct.style.setProperty(
																				"margin",
																				`6px ${N.COMPOSER_PANE_INPUT_MARGIN + N.COMPOSER_PANE_TOOLBAR_INDENT + 6}px`,
																			)
																		: ct.style.removeProperty("margin"),
																	(0, m.insert)(
																		ct,
																		(0, r.createComponent)(H.$rdc, {
																			type: "secondary",
																			onClick: () => {
																				ft();
																			},
																			get style() {
																				return {
																					"font-size": "12px",
																					padding: "4px 8px",
																					outline: $e()
																						? "1px solid var(--vscode-editorLightBulb-foreground)"
																						: "none",
																				};
																			},
																			setRef: pe,
																			children: "Load older messages",
																		}),
																	),
																	ct
																);
															},
														}),
														null,
													),
													(0, m.insert)(
														lt,
														(0, r.createComponent)(c.Index, {
															get each() {
																return ge();
															},
															children: (ct, gt) => {
																const [ht, Rt] = (0, c.createSignal)(!1),
																	Nt = (0, c.createMemo)(
																		() => gt - (ge().length - me()),
																	);
																return (0, r.createComponent)(c.Show, {
																	get when() {
																		return (
																			ge().length <= Y ||
																			gt >= ge().length - me()
																		);
																	},
																	get children() {
																		const jt = V();
																		return (
																			jt.addEventListener("mouseleave", () =>
																				Rt(!1),
																			),
																			jt.addEventListener("mouseenter", () =>
																				Rt(!0),
																			),
																			(0, m.insert)(
																				jt,
																				(0, r.createComponent)(c.Index, {
																					get each() {
																						return ct();
																					},
																					children: (ti, kt) =>
																						(0, r.createComponent)(c.Index, {
																							get each() {
																								return ti().messages;
																							},
																							children: (hi, Kt) => {
																								const di = () =>
																										ti().startIndex + Kt,
																									Ye = (0, c.createMemo)(
																										() =>
																											hi().type ===
																											n
																												.ConversationMessage_MessageType
																												.HUMAN,
																									),
																									ze = (0,
																									U.useIsComposerBubbleSelected)(
																										() => re().composerId,
																										() => hi().bubbleId,
																									),
																									Xe = (0, c.createMemo)(() =>
																										Ye()
																											? !1
																											: re().conversation[
																													di() - 1
																												]?.type ===
																												n
																													.ConversationMessage_MessageType
																													.HUMAN,
																									),
																									It = (0, c.createMemo)(() => {
																										if (Ye()) return !1;
																										const Bt =
																											re().conversation[
																												di() + 1
																											];
																										return (
																											!Bt ||
																											Bt?.type ===
																												n
																													.ConversationMessage_MessageType
																													.HUMAN
																										);
																									}),
																									Lt = (0, c.createMemo)(
																										() =>
																											!Ye() &&
																											It() &&
																											!re()?.generatingBubbleIds?.includes(
																												hi().bubbleId,
																											) &&
																											hi().text.length > 0 &&
																											(re().status !==
																												"generating" ||
																												gt !== ge().length - 1),
																									),
																									xt = (0, c.createMemo)(
																										() =>
																											di() ===
																											re().conversation.length -
																												1,
																									),
																									Vt = (0, c.createMemo)(
																										() =>
																											Se().length > 0 && xt(),
																									);
																								return (() => {
																									const Bt = J(),
																										Gt = Bt.firstChild;
																									return (
																										Bt.addEventListener(
																											"blur",
																											() => {
																												setTimeout(() => {
																													re()
																														.selectedBubbleId ===
																														hi().bubbleId &&
																														oe({
																															selectedBubbleId:
																																void 0,
																														});
																												});
																											},
																										),
																										(0, m.insert)(
																											Bt,
																											(0, r.createComponent)(
																												c.Show,
																												{
																													get when() {
																														return (
																															(0, u.memo)(
																																() =>
																																	Te() !== -1,
																															)() &&
																															Te() <= di()
																														);
																													},
																													get children() {
																														const Mt = V();
																														return (
																															Mt.addEventListener(
																																"click",
																																() => {
																																	_.onAfterMinCurrentEditBubbleClick?.();
																																},
																															),
																															Mt.style.setProperty(
																																"position",
																																"absolute",
																															),
																															Mt.style.setProperty(
																																"top",
																																"0",
																															),
																															Mt.style.setProperty(
																																"left",
																																"0",
																															),
																															Mt.style.setProperty(
																																"width",
																																"100%",
																															),
																															Mt.style.setProperty(
																																"height",
																																"100%",
																															),
																															Mt.style.setProperty(
																																"z-index",
																																"2",
																															),
																															Mt
																														);
																													},
																												},
																											),
																											Gt,
																										),
																										(0, m.insert)(
																											Gt,
																											(0, r.createComponent)(
																												c.Show,
																												{
																													get when() {
																														return ke();
																													},
																													get children() {
																														const Mt = K(),
																															Ut =
																																Mt.firstChild,
																															ei =
																																Ut.nextSibling;
																														return (
																															Mt.style.setProperty(
																																"color",
																																"white",
																															),
																															Ut.style.setProperty(
																																"font-weight",
																																"bold",
																															),
																															(0, m.insert)(
																																Ut,
																																() =>
																																	hi().type ===
																																	n
																																		.ConversationMessage_MessageType
																																		.HUMAN
																																		? "HUMAN"
																																		: "AI",
																															),
																															(0, m.insert)(
																																ei,
																																() =>
																																	JSON.stringify(
																																		{
																																			bubbleId:
																																				hi()
																																					.bubbleId,
																																			isThought:
																																				hi()
																																					.isThought,
																																			isCapabilityIteration:
																																				hi()
																																					.isCapabilityIteration,
																																		},
																																		null,
																																		2,
																																	),
																															),
																															Mt
																														);
																													},
																												},
																											),
																											null,
																										),
																										(0, m.insert)(
																											Gt,
																											(0, r.createComponent)(
																												c.Show,
																												{
																													get when() {
																														return hi()
																															.isThought;
																													},
																													get fallback() {
																														return (0,
																														r.createComponent)(
																															c.Show,
																															{
																																get when() {
																																	return !Ye();
																																},
																																get fallback() {
																																	return (0,
																																	r.createComponent)(
																																		k.ComposerHumanMessage,
																																		{
																																			get composerDataHandle() {
																																				return se();
																																			},
																																			get message() {
																																				return hi();
																																			},
																																			get location() {
																																				return _.location;
																																			},
																																			get isBubbleSelected() {
																																				return (
																																					(0,
																																					u.memo)(
																																						() =>
																																							!$e(),
																																					)() &&
																																					ze()
																																				);
																																			},
																																			get fontInfo() {
																																				return He();
																																			},
																																		},
																																	);
																																},
																																children: (
																																	Mt,
																																) => {
																																	const [
																																		Ut,
																																		ei,
																																	] = (0,
																																	c.createSignal)(
																																		!1,
																																	);
																																	return (
																																		(0,
																																		c.createEffect)(
																																			() => {
																																				!!(
																																					be() &&
																																					Le() !==
																																						-1 &&
																																					di() >=
																																						Le()
																																				) &&
																																					ei(
																																						!0,
																																					);
																																			},
																																		),
																																		(0,
																																		r.createComponent)(
																																			c.Show,
																																			{
																																				get when() {
																																					return hi()
																																						.capabilityType;
																																				},
																																				get fallback() {
																																					return (0,
																																					r.createComponent)(
																																						T.ComposerAiMessage,
																																						{
																																							get composerDataHandle() {
																																								return se();
																																							},
																																							get location() {
																																								return _.location;
																																							},
																																							get message() {
																																								return hi();
																																							},
																																							index:
																																								di,
																																							codeCountByFile:
																																								Ke,
																																							setCodeCountByFile:
																																								Je,
																																							get tabs() {
																																								return _.tabs;
																																							},
																																							get setTabs() {
																																								return _.setTabs;
																																							},
																																							get setSelectedTabIndex() {
																																								return _.setSelectedTabIndex;
																																							},
																																							get hideHints() {
																																								return _.hideHints;
																																							},
																																							get isInputFocused() {
																																								return _.isInputFocused;
																																							},
																																							resetCodeBlockCount:
																																								Ut,
																																							scrollable:
																																								Ae,
																																							messagesContainerRef:
																																								() =>
																																									qe,
																																							setResetCodeBlockCount:
																																								(
																																									mi,
																																								) => {
																																									ei(
																																										mi,
																																									),
																																										di() ===
																																											re()
																																												.conversation
																																												.length -
																																												1 &&
																																											mi ===
																																												!1 &&
																																											Ce(
																																												!1,
																																											);
																																								},
																																							get shouldShowTurboModeUpsell() {
																																								return (
																																									je() ===
																																									hi()
																																										.bubbleId
																																								);
																																							},
																																						},
																																					);
																																				},
																																				children:
																																					(
																																						mi,
																																					) => {
																																						const Dt =
																																							Q.getComposerCapability(
																																								se(),
																																								mi(),
																																							)?.renderAIBubble?.();
																																						return (0,
																																						r.createComponent)(
																																							c.Show,
																																							{
																																								when: Dt,
																																								children:
																																									(
																																										Jt,
																																									) => {
																																										const si =
																																											Jt();
																																										return (0,
																																										r.createComponent)(
																																											si,
																																											{
																																												get bubbleId() {
																																													return hi()
																																														.bubbleId;
																																												},
																																												get composerDataHandle() {
																																													return se();
																																												},
																																												get location() {
																																													return _.location;
																																												},
																																												scrollable:
																																													Ae,
																																												messagesContainerRef:
																																													() =>
																																														qe,
																																											},
																																										);
																																									},
																																							},
																																						);
																																					},
																																			},
																																		)
																																	);
																																},
																															},
																														);
																													},
																													get children() {
																														return (0,
																														r.createComponent)(
																															L.ComposerThoughtMessage,
																															{
																																get message() {
																																	return hi();
																																},
																																get composerDataHandle() {
																																	return se();
																																},
																															},
																														);
																													},
																												},
																											),
																											null,
																										),
																										(0, m.insert)(
																											Bt,
																											(0, r.createComponent)(
																												c.Show,
																												{
																													get when() {
																														return Vt() || Lt();
																													},
																													get children() {
																														const Mt = V();
																														return (
																															Mt.style.setProperty(
																																"display",
																																"flex",
																															),
																															Mt.style.setProperty(
																																"justify-content",
																																"space-between",
																															),
																															Mt.style.setProperty(
																																"align-items",
																																"items-center",
																															),
																															(0, m.insert)(
																																Mt,
																																(0,
																																r.createComponent)(
																																	c.Show,
																																	{
																																		get when() {
																																			return Vt();
																																		},
																																		get children() {
																																			const Ut =
																																				V();
																																			return (
																																				Ut.style.setProperty(
																																					"display",
																																					"flex",
																																				),
																																				Ut.style.setProperty(
																																					"gap",
																																					"4px",
																																				),
																																				Ut.style.setProperty(
																																					"align-items",
																																					"center",
																																				),
																																				Ut.style.setProperty(
																																					"flex-wrap",
																																					"wrap",
																																				),
																																				Ut.style.setProperty(
																																					"padding-top",
																																					"6px",
																																				),
																																				(0,
																																				m.insert)(
																																					Ut,
																																					(0,
																																					r.createComponent)(
																																						c.For,
																																						{
																																							get each() {
																																								return Se();
																																							},
																																							children:
																																								(
																																									ei,
																																								) =>
																																									(0,
																																									r.createComponent)(
																																										D.ComposerToolbarSimpleButton,
																																										{
																																											get type() {
																																												return ei.buttonType ===
																																													"primary"
																																													? "true-secondary"
																																													: "secondary";
																																											},
																																											get onClick() {
																																												return ei.onClick;
																																											},
																																											get title() {
																																												return (
																																													ei.label +
																																													(ei.keybindingLabel &&
																																													xe()
																																														? ` ${ei.keybindingLabel}`
																																														: "")
																																												);
																																											},
																																											get codicon() {
																																												return ei.icon;
																																											},
																																											get hintText() {
																																												return ei.hintText;
																																											},
																																										},
																																									),
																																						},
																																					),
																																				),
																																				Ut
																																			);
																																		},
																																	},
																																),
																																null,
																															),
																															(0, m.insert)(
																																Mt,
																																(0,
																																r.createComponent)(
																																	c.Show,
																																	{
																																		get when() {
																																			return Lt();
																																		},
																																		get children() {
																																			return (0,
																																			r.createComponent)(
																																				P.ComposerControlsAndFeedback,
																																				{
																																					getCopyText:
																																						() => {
																																							const Ut =
																																								di();
																																							let ei =
																																								"";
																																							for (
																																								let mi =
																																									Ut;
																																								mi >=
																																								0;
																																								mi--
																																							) {
																																								const ii =
																																									re()
																																										.conversation[
																																										mi
																																									];
																																								if (
																																									ii.capabilityType ===
																																									g
																																										.ComposerCapabilityRequest_ComposerCapabilityType
																																										.TOOL_FORMER
																																								)
																																									ei =
																																										Q.getComposerCapability(
																																											se(),
																																											ii.capabilityType,
																																										)?.getBubbleDataAsPlainText(
																																											ii.bubbleId,
																																										) +
																																										`
` +
																																										ei;
																																								else if (
																																									!ii ||
																																									ii.type !==
																																										n
																																											.ConversationMessage_MessageType
																																											.AI
																																								)
																																									break;
																																								ei =
																																									ii.text +
																																									`
` +
																																									ei;
																																							}
																																							return ei;
																																						},
																																				},
																																			);
																																		},
																																	},
																																),
																																null,
																															),
																															(0, d.effect)(
																																() =>
																																	(xt()
																																		? "6px"
																																		: "0px") !=
																																	null
																																		? Mt.style.setProperty(
																																				"padding-top",
																																				xt()
																																					? "6px"
																																					: "0px",
																																			)
																																		: Mt.style.removeProperty(
																																				"padding-top",
																																			),
																															),
																															Mt
																														);
																													},
																												},
																											),
																											null,
																										),
																										(0, d.effect)(
																											(Mt) => {
																												const Ut = (0,
																													z.getBubbleElementId)(
																														hi().bubbleId,
																													),
																													ei = {
																														display:
																															hi().type ===
																															n
																																.ConversationMessage_MessageType
																																.AI
																																? hi()
																																		.isCapabilityIteration ||
																																	hi()
																																		.capabilityType ||
																																	hi().text
																																		.length > 0
																																	? "block"
																																	: "none"
																																: "block",
																														outline: "none",
																														padding: `0px ${N.COMPOSER_PANE_INPUT_MARGIN + N.COMPOSER_PANE_TOOLBAR_INDENT + (hi().type === n.ConversationMessage_MessageType.HUMAN ? 2 : 4)}px`,
																														"padding-top":
																															Nt() === 0 &&
																															kt === 0
																																? "0.6rem"
																																: Ye() || Xe()
																																	? "0.4rem"
																																	: "0px",
																														"padding-bottom":
																															Ye() || It()
																																? "0.4rem"
																																: "0px",
																														opacity:
																															Te() !== -1 &&
																															Te() <= di()
																																? 0.5
																																: 1,
																														...(Ye()
																															? _.humanMessageStyle
																															: _.aiMessageStyle),
																														position:
																															"relative",
																													},
																													mi = {
																														"background-color":
																															"transparent",
																														...(ke() && {
																															background:
																																hi().type ===
																																n
																																	.ConversationMessage_MessageType
																																	.HUMAN
																																	? "green"
																																	: "red",
																														}),
																													};
																												return (
																													Ut !== Mt._v$ &&
																														(0, w.setAttribute)(
																															Bt,
																															"id",
																															(Mt._v$ = Ut),
																														),
																													(Mt._v$2 = (0,
																													C.style)(
																														Bt,
																														ei,
																														Mt._v$2,
																													)),
																													(Mt._v$3 = (0,
																													C.style)(
																														Gt,
																														mi,
																														Mt._v$3,
																													)),
																													Mt
																												);
																											},
																											{
																												_v$: void 0,
																												_v$2: void 0,
																												_v$3: void 0,
																											},
																										),
																										Bt
																									);
																								})();
																							},
																						}),
																				}),
																				null,
																			),
																			(0, m.insert)(
																				jt,
																				(0, r.createComponent)(c.Show, {
																					get when() {
																						return (
																							(0, u.memo)(
																								() => gt === ge().length - 1,
																							)() &&
																							(() => {
																								let ti;
																								for (const kt of ct()[1]
																									.messages)
																									kt.errorDetails &&
																										(ti = kt.errorDetails);
																								return ti;
																							})()
																						);
																					},
																					children: (ti) =>
																						(() => {
																							const kt = V();
																							return (
																								`0px ${N.COMPOSER_PANE_INPUT_MARGIN + N.COMPOSER_PANE_TOOLBAR_INDENT + 4}px` !=
																								null
																									? kt.style.setProperty(
																											"padding",
																											`0px ${N.COMPOSER_PANE_INPUT_MARGIN + N.COMPOSER_PANE_TOOLBAR_INDENT + 4}px`,
																										)
																									: kt.style.removeProperty(
																											"padding",
																										),
																								kt.style.setProperty(
																									"padding-bottom",
																									"22px",
																								),
																								kt.style.setProperty(
																									"transition",
																									"opacity 0.1s",
																								),
																								(0, m.insert)(
																									kt,
																									(0, r.createComponent)(
																										y.$0ac,
																										{
																											get generationUUID() {
																												return ti()
																													.generationUUID;
																											},
																											get error() {
																												return ti().error;
																											},
																											get message() {
																												return ti().message;
																											},
																											get rerun() {
																												return ti().rerun;
																											},
																											get resume() {
																												return ti().resume;
																											},
																										},
																									),
																								),
																								(0, d.effect)(() =>
																									(Te() !== -1 &&
																									Te() <= ct()[1].startIndex
																										? 0.5
																										: 1) != null
																										? kt.style.setProperty(
																												"opacity",
																												Te() !== -1 &&
																													Te() <=
																														ct()[1].startIndex
																													? 0.5
																													: 1,
																											)
																										: kt.style.removeProperty(
																												"opacity",
																											),
																								),
																								kt
																							);
																						})(),
																				}),
																				null,
																			),
																			(0, m.insert)(
																				jt,
																				(0, r.createComponent)(c.Show, {
																					get when() {
																						return gt === ge().length - 1;
																					},
																					get children() {
																						const ti = V();
																						return (
																							(0, m.insert)(
																								ti,
																								(0, r.createComponent)(c.Show, {
																									get when() {
																										return Te() !== -1;
																									},
																									get children() {
																										const kt = V();
																										return (
																											kt.addEventListener(
																												"click",
																												() => {
																													_.onAfterMinCurrentEditBubbleClick();
																												},
																											),
																											kt.style.setProperty(
																												"position",
																												"absolute",
																											),
																											kt.style.setProperty(
																												"top",
																												"0",
																											),
																											kt.style.setProperty(
																												"left",
																												"0",
																											),
																											kt.style.setProperty(
																												"width",
																												"100%",
																											),
																											kt.style.setProperty(
																												"height",
																												"100%",
																											),
																											kt.style.setProperty(
																												"z-index",
																												"2",
																											),
																											kt
																										);
																									},
																								}),
																								null,
																							),
																							(0, m.insert)(
																								ti,
																								(0, r.createComponent)(ee, {
																									get composerDataHandle() {
																										return se();
																									},
																									setAiBubbleIdShowingTurboModeUpsell:
																										Ve,
																								}),
																								null,
																							),
																							(0, d.effect)((kt) =>
																								(0, C.style)(
																									ti,
																									{
																										padding: `0px ${N.COMPOSER_PANE_INPUT_MARGIN + N.COMPOSER_PANE_TOOLBAR_INDENT + 4 + 4}px`,
																										"padding-top": "12px",
																										"padding-bottom": "50px",
																										position: "relative",
																										..._.statusContainerStyle,
																									},
																									kt,
																								),
																							),
																							ti
																						);
																					},
																				}),
																				null,
																			),
																			(0, d.effect)((ti) =>
																				(0, C.style)(
																					jt,
																					{
																						display: "flex",
																						"flex-direction": "column",
																						"box-sizing": "border-box",
																						...(gt === ge().length - 1
																							? {
																									"min-height": `${Ze() * 0.75}px`,
																								}
																							: {}),
																					},
																					ti,
																				),
																			),
																			jt
																		);
																	},
																});
															},
														}),
														null,
													),
													(0, d.effect)((ct) =>
														(0, C.style)(
															lt,
															{
																display: "flex",
																"flex-direction": "column",
																..._.style,
															},
															ct,
														),
													),
													lt
												);
											},
										},
									),
								),
							),
							nt
						);
					})();
				}
				function ee(_) {
					const te = (0, F.$odc)(),
						{
							composerDataHandle: Q,
							currentComposer: Z,
							updateCurrentComposer: se,
						} = (0, O.useComposerDataHandle)(() => _.composerDataHandle),
						re = (0, R.useComposerChatStatus)(Q),
						le = (0, c.createMemo)(() => {
							const be = Z().conversation[Z().conversation.length - 1],
								Ce = Z().conversation[Z().conversation.length - 2];
							return Ce?.type === n.ConversationMessage_MessageType.AI &&
								Ce.capabilityType ===
									g.ComposerCapabilityRequest_ComposerCapabilityType
										.TOOL_FORMER &&
								te.composerDataService
									.getToolFormer(Z().composerId)
									?.getBubbleData(Ce.bubbleId)?.status === "loading"
								? !1
								: be?.type === n.ConversationMessage_MessageType.AI
									? be?.text === ""
									: !0;
						}),
						oe = (0, c.createMemo)(() =>
							te.composerDataService.getPendingUserDecisionGroup(
								Z().composerId,
							),
						),
						ae = (0, c.createMemo)(() => {
							const be = oe();
							if (be.length === 0) return;
							const Ce = be[0].clientSideTool;
							return M.TOOL_FORMER_TOOL_CALL_DECISION_PHRASES[Ce]?.waitText;
						}),
						pe = (0, c.createMemo)(
							() =>
								te.reactiveStorageService.nonPersistentStorage.inprogressAIGenerations.find(
									(Ce) => Ce.generationUUID === Z().chatGenerationUUID,
								)?.queuePositionResponse,
						),
						[$e, ye] = (0, c.createSignal)(!1),
						[ue, fe] = (0, c.createSignal)(!1),
						[me, ve] = (0, c.createSignal)(!1),
						ge = (0, c.createMemo)(
							() => re() === "generating" || re() === "running",
						);
					return [
						(0, r.createComponent)(c.Show, {
							get when() {
								return Z().isReadingLongFile;
							},
							get children() {
								const be = W(),
									Ce = be.firstChild;
								return (
									be.style.setProperty(
										"color",
										"var(--vscode-input-placeholderForeground)",
									),
									(0, m.insert)(
										be,
										(0, r.createComponent)($.$C$b, { show: !0 }),
										null,
									),
									be
								);
							},
						}),
						(0, r.createComponent)(c.Show, {
							get when() {
								return (
									(0, u.memo)(
										() => !!(!Z().backgroundInfo && Z().latestCheckpoint),
									)() && Z().currentBubbleId !== void 0
								);
							},
							get children() {
								const be = X(),
									Ce = be.firstChild;
								return (
									be.addEventListener("click", () =>
										te.composerService.checkoutToLatest(Q()),
									),
									(0, d.effect)(() =>
										(0, i.className)(
											Ce,
											`${s.ThemeIcon.asClassName(o.$ak.bookmark)} checkout-to-latest-changes-icon`,
										),
									),
									be
								);
							},
						}),
						(() => {
							const be = V();
							return (
								be.style.setProperty("opacity", "0.5"),
								(0, m.insert)(
									be,
									(0, r.createComponent)(S.$h_b, {
										get queuePositionResponse() {
											return pe();
										},
										get isLoading() {
											return (0, u.memo)(() => !!ge())() && le();
										},
										conciseMessage: !0,
										spaceBelow: !0,
										get hideDotsLoading() {
											return !le();
										},
										get statusMessages() {
											return (
												Z().conversation[
													Z().conversation.length - 1
												].statusUpdates?.updates.map((Ce) => Ce.message) ??
												(ae() ? [ae()] : [])
											);
										},
										setIsUpsellFastRequestsShowing: ye,
										setIsUpsellingTurboMode: (Ce) => {
											Ce &&
												Z().generatingBubbleIds?.length === 1 &&
												Z().conversation.at(-2)?.type ===
													n.ConversationMessage_MessageType.HUMAN &&
												_.setAiBubbleIdShowingTurboModeUpsell(
													Z().generatingBubbleIds?.[0],
												);
										},
										setIsUpsellingUsageBasedPricing: fe,
										setIsUpsellingHardLimit: ve,
									}),
									null,
								),
								(0, m.insert)(
									be,
									(0, r.createComponent)(c.Show, {
										get when() {
											return ge();
										},
										get children() {
											return [
												(0, r.createComponent)(c.Show, {
													get when() {
														return $e();
													},
													get children() {
														return (0, r.createComponent)($.$E$b, {
															conciseMessage: !1,
															setIsUpsellFastRequestsShowing: ye,
														});
													},
												}),
												(0, r.createComponent)(c.Show, {
													get when() {
														return ue();
													},
													get children() {
														return (0, r.createComponent)(v.$l_b, {
															setIsUpsellingUsageBasedPricing: fe,
														});
													},
												}),
												(0, r.createComponent)(c.Show, {
													get when() {
														return me();
													},
													get children() {
														return (0, r.createComponent)(v.$m_b, {
															setIsUpsellingHardLimit: ve,
														});
													},
												}),
											];
										},
									}),
									null,
								),
								be
							);
						})(),
					];
				}
			},
		),
		