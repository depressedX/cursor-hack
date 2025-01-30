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
import '../composerData.js';
import '../../../../../../external/solid/solid.js';
import '../../../controlCommon/browser/solid.js';
import './ComposerReferenceComponents.js';
import '../../../../../base/common/themables.js';
import '../../../../../base/common/codicons.js';
import '../../../aiMarkdown/browser/markdown.js';
import './ComposerMessageCodeblock.js';
import './ComposerMessageToolCallPill.js';
import './ComposerMessageCodePill.js';
import './ComposerMessageToolCallBlock.js';
import './ComposerMessageContextPickingCodeBlock.js';
import '../constants.js';
import './ComposerMessageAutoContextCodeBlock.js';
import './ComposerCapabilityMessageRenderer.js';
import '../../../../../../proto/aiserver/v1/chat_pb.js';
import '../../../aichat/browser/components/Utils.js';
import '../hooks/useComposerDataHandle.js';
import '../../../ui/browser/delayedLoad.js';
import '../../../aiConfig/browser/aiConfigHelper.js';
import '../../../../../base/common/constants.js';
import '../../../../../platform/tracing/common/tracing.js';
import '../../../../../../proto/aiserver/v1/composer_pb.js';
import '../hooks/useComposerHoverTooltip.js';
define(
			de[4398],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 225, 13, 36, 1975, 26, 14, 338, 1378,
				1379, 1974, 4285, 4287, 169, 4286, 2008, 126, 242, 177, 1370, 270, 58,
				216, 167, 311,
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
				u /*composerData*/,
				a /*solid*/,
				h /*solid*/,
				c /*ComposerReferenceComponents*/,
				n /*themables*/,
				g /*codicons*/,
				p /*markdown*/,
				o /*ComposerMessageCodeblock*/,
				f /*ComposerMessageToolCallPill*/,
				b /*ComposerMessageCodePill*/,
				s /*ComposerMessageToolCallBlock*/,
				l /*ComposerMessageContextPickingCodeBlock*/,
				y /*constants*/,
				$ /*ComposerMessageAutoContextCodeBlock*/,
				v /*ComposerCapabilityMessageRenderer*/,
				S /*chat_pb*/,
				I /*Utils*/,
				T /*useComposerDataHandle*/,
				P /*delayedLoad*/,
				k /*aiConfigHelper*/,
				L /*constants*/,
				D /*tracing*/,
				M /*composer_pb*/,
				N /*useComposerHoverTooltip*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerAiMessage = void 0);
				const A = (0, t.template)("<div>No code block found"),
					R = (0, t.template)("<div>"),
					O = (0, t.template)('<div class="cursor-pointer ml-2 mt-1"><div>'),
					B = (0, t.template)("<span>"),
					U = (0, t.template)("<div>hi");
				function z() {
					var V =
							typeof SuppressedError == "function"
								? SuppressedError
								: function (W, X) {
										var Y = Error();
										return (
											(Y.name = "SuppressedError"),
											(Y.error = W),
											(Y.suppressed = X),
											Y
										);
									},
						G = {},
						K = [];
					function J(W, X) {
						if (X != null) {
							if (Object(X) !== X)
								throw new TypeError(
									"using declarations can only be used with objects, functions, null, or undefined.",
								);
							if (W)
								var Y =
									X[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
							if (
								Y === void 0 &&
								((Y = X[Symbol.dispose || Symbol.for("Symbol.dispose")]), W)
							)
								var ie = Y;
							if (typeof Y != "function")
								throw new TypeError("Object is not disposable.");
							ie &&
								(Y = function () {
									try {
										ie.call(X);
									} catch (ne) {
										return Promise.reject(ne);
									}
								}),
								K.push({ v: X, d: Y, a: W });
						} else W && K.push({ d: X, a: W });
						return X;
					}
					return {
						e: G,
						u: J.bind(null, !1),
						a: J.bind(null, !0),
						d: function () {
							var W,
								X = this.e,
								Y = 0;
							function ie() {
								for (; (W = K.pop()); )
									try {
										if (!W.a && Y === 1)
											return (Y = 0), K.push(W), Promise.resolve().then(ie);
										if (W.d) {
											var ee = W.d.call(W.v);
											if (W.a)
												return (Y |= 2), Promise.resolve(ee).then(ie, ne);
										} else Y |= 1;
									} catch (_) {
										return ne(_);
									}
								if (Y === 1)
									return X !== G ? Promise.reject(X) : Promise.resolve();
								if (X !== G) throw X;
							}
							function ne(ee) {
								return (X = X !== G ? new V(ee, X) : ee), ie();
							}
							return ie();
						},
					};
				}
				const F = () => A(),
					x = 6,
					H = 10,
					q = (V) => {
						try {
							var G = z();
							const K = G.u((0, D.span)("ComposerAiMessage")),
								J = (0, h.$odc)(),
								{ composerDataService: W, composerService: X } = J,
								{
									currentComposer: Y,
									forceMode: ie,
									composerDataHandle: ne,
									updateCurrentComposer: ee,
								} = (0, T.useComposerDataHandle)(() => V.composerDataHandle),
								_ = (0, a.createMemo)(() => V.message, void 0, {
									equals: (Le, Fe) => Le === Fe,
								}),
								te = (0, a.createMemo)(() => Y().status === "generating"),
								Q = (0, a.createMemo)(() => Y().conversation[V.index() - 1]),
								[Z, se] = (0, a.createSignal)(!0),
								re = (0, a.createMemo)(() => {
									try {
										var Le = z();
										const Fe = Le.u(
												(0, D.span)("afterSubmitChatCapabilityMessage"),
											),
											Oe = _().capabilityStatuses;
										return !Oe ||
											!Oe["after-submit-chat"] ||
											Oe["after-submit-chat"].length === 0
											? void 0
											: Oe["after-submit-chat"];
									} catch (Fe) {
										Le.e = Fe;
									} finally {
										Le.d();
									}
								}),
								le = (0, a.createMemo)(() => {
									try {
										var Le = z();
										const Fe = Le.u(
												(0, D.span)("onComposerSettledCapabilityMessage"),
											),
											Oe = _().capabilityStatuses;
										return !Oe ||
											!Oe["composer-settled"] ||
											Oe["composer-settled"].length === 0
											? void 0
											: Oe["composer-settled"];
									} catch (Fe) {
										Le.e = Fe;
									} finally {
										Le.d();
									}
								}),
								oe = (0, a.createMemo)(() => {
									try {
										var Le = z();
										const Fe = Le.u(
												(0, D.span)("onComposerDoneCapabilityMessage"),
											),
											Oe = _().capabilityStatuses;
										return !Oe ||
											!Oe["composer-done"] ||
											Oe["composer-done"].length === 0
											? void 0
											: Oe["composer-done"];
									} catch (Fe) {
										Le.e = Fe;
									} finally {
										Le.d();
									}
								}),
								ae = (Le) =>
									Le > 2e3 ? `${(Le / 1e3).toFixed(2)}s` : `${Le.toFixed(0)}ms`,
								pe = (Le) => {
									if (
										!Le.clientStartTime ||
										!Le.clientRpcSendTime ||
										!Le.serverStartTime ||
										!Le.serverRequestSentTime ||
										!Le.serverFirstTokenTime ||
										!Le.serverEndTime ||
										!Le.clientEndTime ||
										!Le.clientSettleTime
									)
										return (
											`Incomplete timing info:
` + JSON.stringify(Le, null, 2)
										);
									const Fe = Le.clientRpcSendTime - Le.clientStartTime,
										Oe = Le.serverRequestSentTime - Le.serverStartTime,
										xe = Le.serverFirstTokenTime - Le.serverRequestSentTime,
										He = Le.serverEndTime - Le.serverFirstTokenTime,
										Ke = Le.clientSettleTime - Le.clientEndTime;
									return `Client prep: ${ae(Fe)}, Server processing: ${ae(Oe)}, Server TTFT: ${ae(xe)}, Stream: ${ae(He)}, Apply: ${ae(Ke)}`;
								},
								$e = (0, a.createMemo)(() => {
									const Le = Y();
									if (!Le) return !1;
									const Fe = Le.conversation.filter(
										(Oe) => Oe.type === S.ConversationMessage_MessageType.AI,
									);
									return Fe[Fe.length - 1]?.bubbleId === _().bubbleId;
								}),
								ye = (0, a.createMemo)(() => {
									const Le = V.message.timingInfo;
									return Le ? pe(Le) : void 0;
								}),
								ue = (0, a.createMemo)(() => (Y() ? ie() === "chat" : !1)),
								[fe] = (0, k.$K0b)(L.$HW, J.configurationService, !1),
								me = (0, a.createMemo)(
									() => (fe() || V.location === "bar") && ie() !== "chat",
								),
								ve = (0, a.createMemo)(
									() =>
										_().capabilityType ===
											M.ComposerCapabilityRequest_ComposerCapabilityType
												.TOOL_FORMER && _().checkpoint,
								),
								{ showHover: ge, hideHover: be } = (0,
								N.useComposerHoverTooltip)({
									delay: y.COMPOSER_HOVER_TOOLTIP_DELAY,
								}),
								Ce = (Le) => {
									Le.stopPropagation(),
										V.message.bubbleId &&
											X.checkoutToCheckpoint(
												Y().composerId,
												V.message.bubbleId,
											);
								};
							return [
								(0, r.createComponent)(a.Show, {
									get when() {
										return _().serviceStatusUpdate;
									},
									children: (Le) =>
										(() => {
											const Fe = R();
											return (
												Fe.style.setProperty("margin-bottom", "10px"),
												Fe.style.setProperty("padding", "2px 8px"),
												Fe.style.setProperty("font-size", "12px"),
												Fe.style.setProperty("border-radius", "4px"),
												Fe.style.setProperty(
													"background-color",
													"var(--vscode-commandCenter-background)",
												),
												Fe.style.setProperty(
													"color",
													"var(--vscode-commandCenter-foreground)",
												),
												Fe.style.setProperty("display", "flex"),
												Fe.style.setProperty("flex-direction", "row"),
												Fe.style.setProperty("gap", "8px"),
												Fe.style.setProperty("align-items", "center"),
												(0, d.insert)(
													Fe,
													(0, r.createComponent)(a.Show, {
														get when() {
															return n.ThemeIcon.fromId(Le().codicon);
														},
														children: (Oe) =>
															(() => {
																const xe = B();
																return (
																	xe.style.setProperty("font-size", "12px"),
																	(0, C.effect)(() =>
																		(0, w.className)(
																			xe,
																			n.ThemeIcon.asClassName(Oe()),
																		),
																	),
																	xe
																);
															})(),
													}),
													null,
												),
												(0, d.insert)(
													Fe,
													(0, r.createComponent)(p.$4$b, {
														get rawText() {
															return Le().message;
														},
														get allowCommandLinks_POTENTIALLY_UNSAFE_PLEASE_ONLY_USE_FOR_HANDWRITTEN_TRUSTED_MARKDOWN() {
															return (
																Le()
																	.allowCommandLinksPotentiallyUnsafePleaseOnlyUseForHandwrittenTrustedMarkdown ??
																!1
															);
														},
														get codeBlockProps() {
															return {
																shouldRecompute:
																	Y().shouldRecomputeCodeBlock ?? 0,
															};
														},
														finished: !0,
													}),
													null,
												),
												Fe
											);
										})(),
								}),
								(0, r.createComponent)(a.Show, {
									get when() {
										return V.shouldShowTurboModeUpsell;
									},
									get children() {
										return (0, r.createComponent)(I.$D$b, {});
									},
								}),
								(0, r.createComponent)(a.Show, {
									get when() {
										return (
											(_().webCitations ?? []).length > 0 ||
											(_().docsCitations ?? []).length > 0
										);
									},
									get children() {
										const Le = R();
										return (
											Le.style.setProperty("display", "flex"),
											Le.style.setProperty("align-items", "center"),
											Le.style.setProperty("flex-wrap", "wrap"),
											Le.style.setProperty("gap", "4px"),
											Le.style.setProperty("margin-bottom", "8px"),
											(0, d.insert)(
												Le,
												(0, r.createComponent)(a.Show, {
													get when() {
														return (_().webCitations ?? []).length > 0;
													},
													get children() {
														return (0, r.createComponent)(a.For, {
															get each() {
																return [
																	...new Set(
																		(_().webCitations ?? []).map((Fe) =>
																			JSON.stringify({
																				title: Fe.title,
																				url: Fe.url,
																			}),
																		),
																	),
																].map((Fe) => JSON.parse(Fe));
															},
															children: (Fe) =>
																(0, r.createComponent)(
																	c.ComposerWebReferenceComponent,
																	{
																		get url() {
																			return Fe.url;
																		},
																		get title() {
																			return Fe.title;
																		},
																	},
																),
														});
													},
												}),
												null,
											),
											(0, d.insert)(
												Le,
												(0, r.createComponent)(a.Show, {
													get when() {
														return (_().docsCitations ?? []).length > 0;
													},
													get children() {
														return [
															(0, r.createComponent)(a.For, {
																get each() {
																	return (0, m.memo)(() => !!Z())()
																		? _().docsCitations?.slice(0, x)
																		: _().docsCitations;
																},
																children: (Fe) =>
																	(0, r.createComponent)(
																		c.ComposerDocsReferenceComponent,
																		{
																			get url() {
																				return Fe.url;
																			},
																			get title() {
																				return Fe.title;
																			},
																		},
																	),
															}),
															(0, r.createComponent)(a.Show, {
																get when() {
																	return (_().docsCitations?.length ?? 0) > x;
																},
																get children() {
																	return (0, r.createComponent)(
																		c.ComposerDocsReferenceComponent,
																		{
																			get title() {
																				return (0, m.memo)(() => !!Z())()
																					? `+${(_().docsCitations?.length ?? 0) - x} more`
																					: "Show less";
																			},
																			onClick: () => se((Fe) => !Fe),
																			get iconReplace() {
																				return (0, m.memo)(() => !Z())()
																					? n.ThemeIcon.asClassName(
																							g.$ak.eyeClosed,
																						)
																					: void 0;
																			},
																		},
																	);
																},
															}),
														];
													},
												}),
												null,
											),
											Le
										);
									},
								}),
								(0, r.createComponent)(P.$2cc, {
									nonReactiveDelay: 25,
									get children() {
										return (0, r.createComponent)(p.$4$b, {
											get rawText() {
												return _().text;
											},
											get showSectionToolbar() {
												return ue();
											},
											get canQuoteMessages() {
												return ue();
											},
											get composerExtras() {
												return {
													composerId: Y().composerId,
													bubbleId: _().bubbleId,
													messageIndex: V.index(),
												};
											},
											get symbolLinks() {
												return _().symbolLinks;
											},
											get fileLinks() {
												return _().fileLinks;
											},
											get codeBlockProps() {
												return {
													shouldRecompute: Y().shouldRecomputeCodeBlock ?? 0,
													setResetCodeBlockCount: V.setResetCodeBlockCount,
													resetCodeBlockCount: V.resetCodeBlockCount,
													shouldCallRenderCodeBlock: (Le, Fe) => {
														const {
															predictedUri: Oe,
															codeBlockIdx: xe,
															capabilityAlias: He,
														} = Fe;
														if (!Oe && !He) return !1;
														if (He) return !0;
														if (!Oe) return !1;
														const Ke =
																(V.codeCountByFile()[Oe.toString()] ?? -1) + 1,
															Je = _().codeBlocks?.find(
																(Te) =>
																	Te.uri.toString() === Oe.toString() &&
																	Te.codeBlockIdx === xe,
															);
														return Je
															? (V.setCodeCountByFile((Te) => {
																	const Ee = { ...Te };
																	return (Ee[Oe.toString()] = Ke), Ee;
																}),
																{ predictedUri: Oe, version: Je.version })
															: !1;
													},
													renderCodeBlock: (Le, Fe) => {
														let {
															predictedUri: Oe,
															codeBlockIdx: xe,
															capabilityAlias: He,
														} = Fe;
														if (!Oe && !He)
															throw new Error(
																"[composer] No predicted uri available",
															);
														J.composerService.isBackground(Y().composerId) &&
															!He &&
															(Oe = J.selectedContextService.getWorktreeUri(
																Oe,
																Y().backgroundInfo?.worktreePath,
															));
														const Ke = Fe.version,
															Je = (0, a.createMemo)(() =>
																_().codeBlocks?.find(
																	(Ie) =>
																		Ie.uri.toString() === Oe?.toString() &&
																		Ie.version === Ke,
																),
															),
															Te = (0, a.createMemo)(() =>
																Oe
																	? W.getComposerCodeBlock(
																			Y().composerId,
																			Oe,
																			Ke,
																		)
																	: void 0,
															),
															Ee = (0, a.createMemo)(() =>
																_().capabilityCodeBlocks?.find(
																	(Ie) =>
																		Ie.type === He && Ie.codeBlockIdx === xe,
																),
															);
														return (0, r.createComponent)(a.Show, {
															get when() {
																return Ee();
															},
															get fallback() {
																return (0, r.createComponent)(a.Show, {
																	get when() {
																		return (0, m.memo)(() => !!Je())() && Te();
																	},
																	get fallback() {
																		return (0, r.createComponent)(F, {});
																	},
																	children: (Ie) => {
																		const Be = (0, a.createMemo)(() => ({
																			tabs: V.tabs,
																			setTabs: V.setTabs,
																			codeBlock: Ie(),
																			setSelectedTabIndex:
																				V.setSelectedTabIndex,
																			renderHint:
																				Ke === 0 &&
																				!V.hideHints &&
																				Fe.predictedUri?.toString() ===
																					V.tabs()[2]?.uri?.toString() &&
																				V.isInputFocused,
																			isInputFocused: V.isInputFocused,
																		}));
																		return (0, r.createComponent)(a.Show, {
																			get when() {
																				return !me();
																			},
																			get fallback() {
																				return (0, r.createComponent)(
																					b.ComposerMessageCodePill,
																					{
																						get codeBlock() {
																							return Ie();
																						},
																						get composerDataHandle() {
																							return V.composerDataHandle;
																						},
																						get renderHint() {
																							return Be().renderHint;
																						},
																					},
																				);
																			},
																			get children() {
																				return (0, r.createComponent)(
																					o.ComposerMessageCodeblock,
																					(0, i.mergeProps)(Be, {
																						get composerDataHandle() {
																							return V.composerDataHandle;
																						},
																					}),
																				);
																			},
																		});
																	},
																});
															},
															children: (Ie) => {
																const Be = (0, a.createMemo)(() => {
																	try {
																		return JSON.parse(Ie().content ?? "").type;
																	} catch {
																		return;
																	}
																});
																return (0, r.createComponent)(a.Switch, {
																	get fallback() {
																		return (() => {
																			const Se = U();
																			return (
																				Se.style.setProperty("display", "none"),
																				Se
																			);
																		})();
																	},
																	get children() {
																		return [
																			(0, r.createComponent)(a.Match, {
																				when: He === u.ToolCallCodeBlockAlias,
																				get children() {
																					return (0, r.createComponent)(
																						a.Show,
																						{
																							get when() {
																								return !y.COMPOSER_EXPANDED_BLOCK_TOOLS.includes(
																									Be(),
																								);
																							},
																							get fallback() {
																								return (0, r.createComponent)(
																									s.ComposerMessageToolCallBlock,
																									{
																										get bubbleId() {
																											return _().bubbleId;
																										},
																										get codeBlockIdx() {
																											return Ie().codeBlockIdx;
																										},
																										get composerDataHandle() {
																											return V.composerDataHandle;
																										},
																									},
																								);
																							},
																							get children() {
																								return (0, r.createComponent)(
																									f.ComposerMessageToolCallPill,
																									{
																										get bubbleId() {
																											return _().bubbleId;
																										},
																										get codeBlockIdx() {
																											return Ie().codeBlockIdx;
																										},
																										get composerDataHandle() {
																											return V.composerDataHandle;
																										},
																									},
																								);
																							},
																						},
																					);
																				},
																			}),
																			(0, r.createComponent)(a.Match, {
																				when:
																					He === u.ContextPickingCodeBlockAlias,
																				get children() {
																					return (0, r.createComponent)(
																						l.ComposerMessageContextPickingCodeBlock,
																						{
																							get composerDataHandle() {
																								return V.composerDataHandle;
																							},
																							get bubbleId() {
																								return _().bubbleId;
																							},
																							get codeBlockIdx() {
																								return Ie().codeBlockIdx;
																							},
																						},
																					);
																				},
																			}),
																			(0, r.createComponent)(a.Match, {
																				when:
																					He === u.AutoContextCodeBlockAlias,
																				get children() {
																					return (0, r.createComponent)(
																						$.ComposerMessageAutoContextCodeBlock,
																						{
																							get composerDataHandle() {
																								return V.composerDataHandle;
																							},
																							get bubbleId() {
																								return _().bubbleId;
																							},
																							get codeBlockIdx() {
																								return Ie().codeBlockIdx;
																							},
																						},
																					);
																				},
																			}),
																		];
																	},
																});
															},
														});
													},
												};
											},
											shouldFade: !1,
											get finished() {
												return !Y().generatingBubbleIds?.includes(_().bubbleId);
											},
										});
									},
								}),
								(0, r.createComponent)(a.Show, {
									get when() {
										return re();
									},
									children: (Le) =>
										(0, r.createComponent)(
											v.ComposerCapabilityMessageRenderer,
											{
												process: "after-submit-chat",
												get statuses() {
													return Le();
												},
												get bubbleId() {
													return _().bubbleId;
												},
												get composerDataHandle() {
													return V.composerDataHandle;
												},
												get location() {
													return V.location;
												},
											},
										),
								}),
								(0, r.createComponent)(a.Show, {
									get when() {
										return le();
									},
									children: (Le) =>
										(0, r.createComponent)(
											v.ComposerCapabilityMessageRenderer,
											{
												process: "composer-settled",
												get statuses() {
													return Le();
												},
												get bubbleId() {
													return _().bubbleId;
												},
												get composerDataHandle() {
													return V.composerDataHandle;
												},
												get location() {
													return V.location;
												},
											},
										),
								}),
								(0, r.createComponent)(a.Show, {
									get when() {
										return oe();
									},
									children: (Le) =>
										(0, r.createComponent)(
											v.ComposerCapabilityMessageRenderer,
											{
												process: "composer-done",
												get statuses() {
													return Le();
												},
												get bubbleId() {
													return _().bubbleId;
												},
												get composerDataHandle() {
													return V.composerDataHandle;
												},
												get location() {
													return V.location;
												},
											},
										),
								}),
								(0, r.createComponent)(a.Show, {
									get when() {
										return _().timingInfo && !1;
									},
									get children() {
										const Le = O(),
											Fe = Le.firstChild;
										return (
											Le.addEventListener("click", () => {
												console.log(_().timingInfo);
											}),
											Fe.style.setProperty("font-size", "10px"),
											(0, C.effect)(
												(Oe) => {
													const xe = ye(),
														He = n.ThemeIcon.asClassName(g.$ak.clock);
													return (
														xe !== Oe._v$ &&
															(0, E.setAttribute)(Le, "title", (Oe._v$ = xe)),
														He !== Oe._v$2 &&
															(0, w.className)(Fe, (Oe._v$2 = He)),
														Oe
													);
												},
												{ _v$: void 0, _v$2: void 0 },
											),
											Le
										);
									},
								}),
							];
						} catch (K) {
							G.e = K;
						} finally {
							G.d();
						}
					};
				e.ComposerAiMessage = q;
			},
		),
		