import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/solid.js';
import '../../chatData.js';
import '../../../../controlCommon/browser/solid.js';
import '../../../../../../base/common/themables.js';
import '../../../../../../base/common/codicons.js';
import '../../../../ui/browser/simpleButton/simpleButton.js';
import '../ContextStep.js';
import '../ChunkContext.js';
import '../slowPool/usagePricingConfirmation.js';
import '../../../../aiInterpreter/browser/interpreterResultComponent.js';
import '../ChatAdvancedContextFollowup.js';
import '../ControlsAndFeedback.js';
import '../../../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../../aiConfig/browser/aiConfigHelper.js';
import '../../../../../../base/common/constants.js';
import '../../../../composer/browser/constants.js';
import '../../hooks/useIsBubbleSelected.js';
import './PremiumBubble.js';
import '../constants.js';
import '../../../../aiMarkdown/browser/markdownData.js';
import '../../../../aiMarkdown/browser/markdown.js';
import '../slowPool/SlowPoolGenerationIndicator.js';
import '../Utils.js';
import '../../../../../../css!vs/workbench/contrib/aichat/browser/components/premium/PremiumAiBubble.js';
define(
			de[4316],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 140, 36, 26, 14, 147, 4246, 1986, 1072,
				4314, 4244, 4231, 148, 270, 58, 169, 1233, 1967, 1711, 236, 338, 863,
				242, 2378,
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
				r /*solid*/,
				u /*chatData*/,
				a /*solid*/,
				h /*themables*/,
				c /*codicons*/,
				n /*simpleButton*/,
				g /*ContextStep*/,
				p /*ChunkContext*/,
				o /*usagePricingConfirmation*/,
				f /*interpreterResultComponent*/,
				b /*ChatAdvancedContextFollowup*/,
				s /*ControlsAndFeedback*/,
				l /*aiserver_pb*/,
				y /*aiConfigHelper*/,
				$ /*constants*/,
				v /*constants*/,
				S /*useIsBubbleSelected*/,
				I /*PremiumBubble*/,
				T /*constants*/,
				P /*markdownData*/,
				k /*markdown*/,
				L /*SlowPoolGenerationIndicator*/,
				D /*Utils*/,
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
		