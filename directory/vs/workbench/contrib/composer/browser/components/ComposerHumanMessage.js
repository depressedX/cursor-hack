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
import '../../../../../../external/solid/solid.js';
import '../../../../../../proto/aiserver/v1/chat_pb.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/network.js';
import '../../../../../base/common/themables.js';
import '../../../../../base/common/uri.js';
import './ComposerFullInputBox.js';
import './ComposerLexicalRenderer.js';
import '../constants.js';
import '../hooks/useComposerHoverTooltip.js';
import '../utils.js';
import '../../../controlCommon/browser/solid.js';
import '../../../ui/browser/utils.js';
import '../../../../services/selectedContext/browser/components/ContextPills.js';
import '../../../../services/selectedContext/browser/hooks/useContextPills.js';
import './ComposerCapabilityMessageRenderer.js';
import './ComposerContextChunkSection.js';
import '../hooks/useComposerDataHandle.js';
import '../../../ui/browser/hooks/useThemeHooks.js';
import '../../../../common/theme.js';
import './ComposerIndexingStatusUI.js';
import '../../../../../css!vs/workbench/contrib/composer/browser/components/ComposerHumanMessage.js';
define(
			de[4411],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 126, 14, 23, 26, 9, 2013, 4318,
				169, 311, 246, 36, 476, 573, 1385, 2008, 4273, 177, 331, 123, 4279,
				2412,
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
				a /*solid*/,
				h /*chat_pb*/,
				c /*codicons*/,
				n /*network*/,
				g /*themables*/,
				p /*uri*/,
				o /*ComposerFullInputBox*/,
				f /*ComposerLexicalRenderer*/,
				b /*constants*/,
				s /*useComposerHoverTooltip*/,
				l /*utils*/,
				y /*solid*/,
				$ /*utils*/,
				v /*ContextPills*/,
				S /*useContextPills*/,
				I /*ComposerCapabilityMessageRenderer*/,
				T /*ComposerContextChunkSection*/,
				P /*useComposerDataHandle*/,
				k /*useThemeHooks*/,
				L /*theme*/,
				D /*ComposerIndexingStatusUI*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerHumanMessage = void 0);
				const M = (0, t.template)(
						'<div class="revert-to-message-icon fade-in-fast"><div></div><span></span><span class="revert-to-message-icon-text">',
					),
					N = (0, t.template)("<div>"),
					A = (0, t.template)("<div><div>"),
					R = (0, t.template)('<div class="aislash-editor-placeholder">'),
					O = (B) => {
						const U = (0, y.$odc)(),
							{ composerService: z, composerDataService: F } = U,
							{ showHover: x, hideHover: H } = (0, s.useComposerHoverTooltip)({
								delay: b.COMPOSER_HOVER_TOOLTIP_DELAY,
							}),
							{
								composerDataHandle: q,
								currentComposer: V,
								forceMode: G,
								updateCurrentComposer: K,
							} = (0, P.useComposerDataHandle)(() => B.composerDataHandle),
							[J, W] = (0, a.createSignal)(!1),
							X = (0, a.createMemo)(() => {
								const be = B.message.context?.selectedImages;
								return be
									? be.map((Ce) => {
											const Le = p.URI.file(Ce.path);
											return n.$7g.uriToBrowserUri(Le).toString();
										})
									: [];
							}),
							Y = (0, a.createMemo)(() => {
								const be = B.message.context;
								return be
									? (0, S.$jbc)(() => be, void 0, {
											readonly: !0,
											disablePillClicks: !(0, $.$Kac)(),
										})()
									: [];
							}),
							ie = (0, a.createMemo)(() =>
								V().conversation.findIndex(
									(be) => be.bubbleId === B.message.bubbleId,
								),
							),
							ne = (0, a.createMemo)(() => {
								const be = ie();
								return be === -1
									? 0
									: V()
											.conversation.slice(be + 1)
											.filter(
												(Le) =>
													Le.type === h.ConversationMessage_MessageType.AI,
											)
											.reduce((Le, Fe) => {
												const Oe =
													Fe.codeBlocks?.filter(
														(xe) =>
															!F.getComposerCodeBlock(q(), xe.uri, xe.version)
																?.isNotApplied,
													)?.length ?? 0;
												return Le + Oe;
											}, 0);
							}),
							ee = (0, a.createMemo)(() => {
								const be = ie();
								if (be === -1) return;
								const Ce = be + 1,
									Le = V().conversation[Ce];
								if (!(!Le || Le.type !== h.ConversationMessage_MessageType.AI))
									return Le;
							}),
							_ = (0, a.createMemo)(() => {
								const be = ee();
								return be ? be.isCapabilityIteration : !1;
							}),
							te = (0, a.createMemo)(() => B.message.checkpoint !== void 0),
							Q = (be) => {
								be.stopPropagation(),
									B.message.bubbleId &&
										z.checkoutToCheckpoint(V().composerId, B.message.bubbleId);
							},
							Z = (0, a.createMemo)(
								() => V().editingBubbleId === B.message.bubbleId,
							),
							se = (0, a.createMemo)(() =>
								V().conversation.findIndex(
									(be) => be.bubbleId === B.message.bubbleId,
								),
							),
							re = (0, a.createMemo)(() => {
								const be = V().conversation.findIndex(
									(Ce) => Ce.bubbleId === V().currentBubbleId,
								);
								return be !== -1 && se() > be;
							}),
							le = (0, a.createMemo)(() => B.location),
							oe = z.getPrevEditingBubbleInputDelegate(q().data.composerId),
							ae = () => {
								re() ||
									(K({ editingBubbleId: B.message.bubbleId }),
									setTimeout(() => {
										oe.focus();
									}, 0));
							},
							pe = (0, a.createMemo)(() => {
								const be = B.message.capabilityStatuses;
								if (
									!(
										!be ||
										!be["start-submit-chat"] ||
										be["start-submit-chat"].length === 0
									)
								)
									return be["start-submit-chat"];
							}),
							$e = (0, a.createMemo)(() => {
								const be = B.message.capabilityStatuses;
								if (
									!(
										!be ||
										!be["before-submit-chat"] ||
										be["before-submit-chat"].length === 0
									)
								)
									return be["before-submit-chat"];
							}),
							ye = (0, a.createMemo)(() => {
								const be = B.message.capabilityStatuses;
								if (
									!(
										!be ||
										!be["mutate-request"] ||
										be["mutate-request"].length === 0
									)
								)
									return be["mutate-request"];
							}),
							ue = (0, a.createMemo)(() => {
								const be = V().conversation.findIndex(
									(Ce) => Ce.bubbleId === V().currentBubbleId,
								);
								return (
									!V().backgroundInfo &&
									(ne() > 0 || _()) &&
									te() &&
									(V().conversation.length > 2 || !V().chatGenerationUUID) &&
									(be === -1 || se() !== be)
								);
							}),
							fe = (0, a.createMemo)(() => ue() && G() !== "chat"),
							me = (0, a.createMemo)(() =>
								se() === 0 ? b.CHECKPOINT_HINT_ZERO_TH : b.CHECKPOINT_HINT,
							),
							ve = { cursor: "pointer", "font-size": "12px" },
							ge = (0, k.$h$b)(L.$wGb, U.themeService);
						return (0, C.createComponent)(a.Show, {
							get when() {
								return (
									B.message.type === h.ConversationMessage_MessageType.HUMAN
								);
							},
							get children() {
								return [
									(0, C.createComponent)(a.Show, {
										get when() {
											return fe();
										},
										get children() {
											const be = M(),
												Ce = be.firstChild,
												Le = Ce.nextSibling,
												Fe = Le.nextSibling;
											return (
												be.style.setProperty("flex-shrink", "0"),
												be.style.setProperty("flex-wrap", "wrap"),
												(0, u.insert)(Le, b.CHECKPOINT_MAIN_MESSAGE),
												(0, r.addEventListener)(Fe, "mouseleave", H),
												Fe.addEventListener("mouseenter", (Oe) => x(Oe, me())),
												Fe.addEventListener("click", Q),
												(0, u.insert)(Fe, b.CHECKPOINT_CTA),
												(0, m.effect)(
													(Oe) => {
														const xe = B.message.isCapabilityIteration
																? "0px"
																: void 0,
															He = `codicon ${g.ThemeIcon.asClassName(c.$ak.bookmark)} revert-to-message-icon-pin`;
														return (
															xe !== Oe._v$ &&
																((Oe._v$ = xe) != null
																	? be.style.setProperty("padding-left", xe)
																	: be.style.removeProperty("padding-left")),
															He !== Oe._v$2 &&
																(0, d.className)(Ce, (Oe._v$2 = He)),
															Oe
														);
													},
													{ _v$: void 0, _v$2: void 0 },
												),
												be
											);
										},
									}),
									(0, C.createComponent)(a.Show, {
										get when() {
											return !B.message.isCapabilityIteration;
										},
										get children() {
											const be = A(),
												Ce = be.firstChild;
											return (
												be.addEventListener("mouseleave", () => W(!1)),
												be.addEventListener("mouseenter", () => W(!0)),
												be.addEventListener("click", (Le) => {
													Le.stopImmediatePropagation();
												}),
												be.style.setProperty("display", "flex"),
												be.style.setProperty("align-items", "flex-start"),
												be.style.setProperty("justify-content", "flex-end"),
												be.style.setProperty("gap", "8px"),
												be.style.setProperty("width", "100%"),
												Ce.style.setProperty("display", "flex"),
												Ce.style.setProperty("flex-direction", "column"),
												Ce.style.setProperty("align-items", "flex-end"),
												Ce.style.setProperty("width", "100%"),
												(0, u.insert)(
													Ce,
													(0, C.createComponent)(a.Show, {
														get when() {
															return !Z();
														},
														get fallback() {
															return (0, C.createComponent)(
																o.ComposerFullInputBox,
																{
																	get composerDataHandle() {
																		return B.composerDataHandle;
																	},
																	role: "top",
																	containerStyle: {
																		margin: "0px",
																		"align-self": "flex-end",
																		"margin-left": "auto",
																		width: "100%",
																		"box-sizing": "border-box",
																	},
																	get style() {
																		return {
																			margin: "0px",
																			background:
																				B.location === "bar"
																					? ge()
																					: "var(--vscode-input-background)",
																			border:
																				B.location === "bar"
																					? "solid 1px var(--vscode-commandCenter-activeBorder,transparent)"
																					: "solid 1px var(--vscode-editorWidget-border,transparent)",
																		};
																	},
																	belowContentStyle: { padding: "0px 6px" },
																	minHeight: 24,
																	get overrideShouldCollapse() {
																		return B.location !== "pane" ? !1 : void 0;
																	},
																	nonReactiveInputBoxDelegate: oe,
																	onEscape: () => {
																		const Le = V().selectedBubbleId,
																			Fe = V().editingBubbleId;
																		Fe
																			? (K({
																					editingBubbleId: void 0,
																					selectedBubbleId: Fe,
																				}),
																				(0, l.focusBubble)(Fe))
																			: Le &&
																				(K({ selectedBubbleId: void 0 }),
																				oe.focus());
																	},
																	get bubbleId() {
																		return B.message.bubbleId;
																	},
																	disableImagesList: !0,
																	get location() {
																		return B.location;
																	},
																},
															);
														},
														get children() {
															const Le = N();
															return (
																Le.addEventListener("click", ae),
																Le.style.setProperty("min-width", "150px"),
																Le.style.setProperty("align-self", "flex-end"),
																Le.style.setProperty(
																	"border-radius",
																	"0.25rem",
																),
																Le.style.setProperty("position", "relative"),
																Le.style.setProperty("padding", "6px"),
																Le.style.setProperty("display", "flex"),
																Le.style.setProperty(
																	"flex-direction",
																	"column",
																),
																Le.style.setProperty("gap", "0.25rem"),
																Le.style.setProperty("width", "100%"),
																Le.style.setProperty(
																	"box-sizing",
																	"border-box",
																),
																(0, u.insert)(
																	Le,
																	(0, C.createComponent)(a.Show, {
																		get when() {
																			return (
																				(0, E.memo)(
																					() => !!(J() || B.isBubbleSelected),
																				)() && !re()
																			);
																		},
																		get children() {
																			const Fe = A(),
																				Oe = Fe.firstChild;
																			return (
																				Fe.style.setProperty(
																					"position",
																					"absolute",
																				),
																				Fe.style.setProperty("top", "0"),
																				Fe.style.setProperty("right", "8px"),
																				Fe.style.setProperty(
																					"transform",
																					"translateY(-50%)",
																				),
																				Fe.style.setProperty("display", "flex"),
																				Fe.style.setProperty(
																					"align-items",
																					"center",
																				),
																				Fe.style.setProperty("gap", "6px"),
																				Fe.style.setProperty(
																					"border-radius",
																					"4px",
																				),
																				Fe.style.setProperty("padding", "2px"),
																				Fe.style.setProperty(
																					"font-size",
																					"10px",
																				),
																				Fe.style.setProperty("z-index", "1"),
																				(0, u.insert)(
																					Fe,
																					(0, C.createComponent)(a.Show, {
																						get when() {
																							return ue();
																						},
																						get children() {
																							const xe = N();
																							return (
																								(0, r.addEventListener)(
																									xe,
																									"mouseleave",
																									H,
																								),
																								xe.addEventListener(
																									"mouseenter",
																									(He) => x(He, me()),
																								),
																								xe.addEventListener("click", Q),
																								(0, w.style)(xe, ve),
																								(0, m.effect)(() =>
																									(0, d.className)(
																										xe,
																										g.ThemeIcon.asClassName(
																											se() === 0
																												? c.$ak.repoSync
																												: c.$ak.arrowUp,
																										) +
																											" composer-human-message-icon",
																									),
																								),
																								xe
																							);
																						},
																					}),
																					Oe,
																				),
																				(0, r.addEventListener)(
																					Oe,
																					"mouseleave",
																					H,
																				),
																				Oe.addEventListener(
																					"mouseenter",
																					(xe) =>
																						x(
																							xe,
																							"Edit message" +
																								(B.isBubbleSelected
																									? " (E)"
																									: ""),
																						),
																				),
																				Oe.addEventListener("click", ae),
																				(0, w.style)(Oe, ve),
																				(0, m.effect)(
																					(xe) => {
																						const He =
																								B.location === "pane"
																									? "var(--vscode-editor-background)"
																									: ge(),
																							Ke =
																								B.location === "bar"
																									? "solid 1px var(--vscode-commandCenter-activeBorder,transparent)"
																									: "solid 1px var(--vscode-editorWidget-border,transparent)",
																							Je =
																								g.ThemeIcon.asClassName(
																									c.$ak.pencil,
																								) +
																								" composer-human-message-icon";
																						return (
																							He !== xe._v$3 &&
																								((xe._v$3 = He) != null
																									? Fe.style.setProperty(
																											"background-color",
																											He,
																										)
																									: Fe.style.removeProperty(
																											"background-color",
																										)),
																							Ke !== xe._v$4 &&
																								((xe._v$4 = Ke) != null
																									? Fe.style.setProperty(
																											"border",
																											Ke,
																										)
																									: Fe.style.removeProperty(
																											"border",
																										)),
																							Je !== xe._v$5 &&
																								(0, d.className)(
																									Oe,
																									(xe._v$5 = Je),
																								),
																							xe
																						);
																					},
																					{
																						_v$3: void 0,
																						_v$4: void 0,
																						_v$5: void 0,
																					},
																				),
																				Fe
																			);
																		},
																	}),
																	null,
																),
																(0, u.insert)(
																	Le,
																	(0, C.createComponent)(a.Show, {
																		get when() {
																			return Y().length > 0;
																		},
																		get children() {
																			const Fe = N();
																			return (
																				Fe.style.setProperty("display", "flex"),
																				Fe.style.setProperty(
																					"align-items",
																					"center",
																				),
																				Fe.style.setProperty("gap", "4px"),
																				Fe.style.setProperty(
																					"flex-wrap",
																					"wrap",
																				),
																				Fe.style.setProperty(
																					"color",
																					"var(--vscode-input-placeholderForeground)",
																				),
																				(0, u.insert)(
																					Fe,
																					(0, C.createComponent)(a.For, {
																						get each() {
																							return Y();
																						},
																						children: (Oe) =>
																							(0, C.createComponent)(
																								v.$ibc,
																								(0, i.mergeProps)(Oe, {
																									hideTypeTitle: !0,
																								}),
																							),
																					}),
																				),
																				Fe
																			);
																		},
																	}),
																	null,
																),
																(0, u.insert)(
																	Le,
																	(0, C.createComponent)(a.Show, {
																		get when() {
																			return B.message.text.trim() !== "";
																		},
																		get fallback() {
																			return (() => {
																				const Fe = R();
																				return (
																					Fe.style.setProperty(
																						"pointer-events",
																						"none",
																					),
																					Fe.style.setProperty(
																						"user-select",
																						"none",
																					),
																					Fe.style.setProperty(
																						"color",
																						"var(--vscode-input-placeholderForeground)",
																					),
																					Fe.style.setProperty(
																						"font-style",
																						"italic",
																					),
																					(0, u.insert)(
																						Fe,
																						(0, C.createComponent)(a.Show, {
																							get when() {
																								return (
																									B.message.context
																										?.editTrailContexts
																										?.length === 0
																								);
																							},
																							get fallback() {
																								return "Using edit trail...";
																							},
																							children: "Empty message...",
																						}),
																					),
																					Fe
																				);
																			})();
																		},
																		get children() {
																			return (0, C.createComponent)(
																				f.ComposerLexicalRenderer,
																				{
																					get text() {
																						return (
																							B.message.richText ??
																							B.message.text
																						);
																					},
																				},
																			);
																		},
																	}),
																	null,
																),
																(0, m.effect)(
																	(Fe) => {
																		const Oe =
																				B.location === "bar"
																					? ge()
																					: "var(--vscode-input-background)",
																			xe =
																				B.location === "bar"
																					? "solid 1px var(--vscode-commandCenter-activeBorder,transparent)"
																					: "solid 1px var(--vscode-editorWidget-border,transparent)",
																			He = B.isBubbleSelected
																				? "1px solid var(--vscode-editorLightBulb-foreground)"
																				: "none";
																		return (
																			Oe !== Fe._v$6 &&
																				((Fe._v$6 = Oe) != null
																					? Le.style.setProperty(
																							"background-color",
																							Oe,
																						)
																					: Le.style.removeProperty(
																							"background-color",
																						)),
																			xe !== Fe._v$7 &&
																				((Fe._v$7 = xe) != null
																					? Le.style.setProperty("border", xe)
																					: Le.style.removeProperty("border")),
																			He !== Fe._v$8 &&
																				((Fe._v$8 = He) != null
																					? Le.style.setProperty("outline", He)
																					: Le.style.removeProperty("outline")),
																			Fe
																		);
																	},
																	{ _v$6: void 0, _v$7: void 0, _v$8: void 0 },
																),
																Le
															);
														},
													}),
												),
												be
											);
										},
									}),
									(0, C.createComponent)(a.Show, {
										get when() {
											return (
												U.composerDataService.getLastHumanBubbleId(
													V().composerId,
												) === B.message.bubbleId
											);
										},
										get children() {
											return (0, C.createComponent)(
												D.ComposerIndexingStatusUI,
												{
													get message() {
														return B.message;
													},
												},
											);
										},
									}),
									(0, C.createComponent)(a.Show, {
										get when() {
											return pe() || $e() || ye();
										},
										get children() {
											const be = N();
											return (
												be.style.setProperty("margin-top", "6px"),
												(0, u.insert)(
													be,
													(0, C.createComponent)(a.Show, {
														get when() {
															return pe();
														},
														children: (Ce) =>
															(0, C.createComponent)(
																I.ComposerCapabilityMessageRenderer,
																{
																	process: "start-submit-chat",
																	get statuses() {
																		return Ce();
																	},
																	get bubbleId() {
																		return B.message.bubbleId;
																	},
																	get composerDataHandle() {
																		return B.composerDataHandle;
																	},
																	get location() {
																		return B.location;
																	},
																},
															),
													}),
													null,
												),
												(0, u.insert)(
													be,
													(0, C.createComponent)(a.Show, {
														get when() {
															return $e();
														},
														children: (Ce) =>
															(0, C.createComponent)(
																I.ComposerCapabilityMessageRenderer,
																{
																	process: "before-submit-chat",
																	get statuses() {
																		return Ce();
																	},
																	get bubbleId() {
																		return B.message.bubbleId;
																	},
																	get composerDataHandle() {
																		return B.composerDataHandle;
																	},
																	get location() {
																		return B.location;
																	},
																},
															),
													}),
													null,
												),
												(0, u.insert)(
													be,
													(0, C.createComponent)(a.Show, {
														get when() {
															return ye();
														},
														children: (Ce) =>
															(0, C.createComponent)(
																I.ComposerCapabilityMessageRenderer,
																{
																	process: "mutate-request",
																	get statuses() {
																		return Ce();
																	},
																	get bubbleId() {
																		return B.message.bubbleId;
																	},
																	get composerDataHandle() {
																		return B.composerDataHandle;
																	},
																	get location() {
																		return B.location;
																	},
																},
															),
													}),
													null,
												),
												be
											);
										},
									}),
									(0, C.createComponent)(a.Show, {
										get when() {
											return (
												(0, E.memo)(
													() => ee()?.intermediateSectionType !== "codebase",
												)() && ee()?.intermediateSectionType !== void 0
											);
										},
										get children() {
											return (0, C.createComponent)(
												T.ComposerContextChunkSection,
												{
													get composerId() {
														return V().composerId;
													},
													get bubbleId() {
														return ee()?.bubbleId ?? "";
													},
													emptyText: !1,
													get fontInfo() {
														return B.fontInfo;
													},
												},
											);
										},
									}),
								];
							},
						});
					};
				e.ComposerHumanMessage = O;
			},
		)
