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
import '../../../../../../external/lexical/lexical/lexical.js';
import '../../../../../../external/solid/solid.js';
import '../../../ui/browser/simpleButton/simpleButton.js';
import '../../../../../base/common/constants.js';
import '../../../../../base/common/platform.js';
import '../../../../../base/common/uuid.js';
import '../../../aichat/browser/components/Utils.js';
import '../../../aichat/browser/components/slowPool/usagePricingConfirmation.js';
import '../../../ui/browser/aiInput/aiInput2.js';
import '../../../ui/browser/aiInput/plugins/mentions/types.js';
import '../../../aiMarkdown/browser/markdown.js';
import '../../../controlCommon/browser/solid.js';
import '../../../../services/aiContext/browser/contextComponent.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/themables.js';
import '../../../ui/browser/modelToggle.js';
import '../../../ui/browser/simpleCodeRender/simpleCodeRender.js';
import '../../../aiConfig/browser/aiConfigHelper.js';
import '../../../aichat/browser/components/slowPool/SlowPoolGenerationIndicator.js';
define(
			de[4368],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 158, 13, 147, 58, 12, 47, 242, 1072, 450,
				310, 338, 36, 2e3, 14, 26, 859, 865, 270, 863,
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
				u /*lexical*/,
				a /*solid*/,
				h /*simpleButton*/,
				c /*constants*/,
				n /*platform*/,
				g /*uuid*/,
				p /*Utils*/,
				o /*usagePricingConfirmation*/,
				f /*aiInput2*/,
				b /*types*/,
				s /*markdown*/,
				l /*solid*/,
				y /*contextComponent*/,
				$ /*codicons*/,
				v /*themables*/,
				S /*modelToggle*/,
				I /*simpleCodeRender*/,
				T /*aiConfigHelper*/,
				P /*SlowPoolGenerationIndicator*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$dVc = N);
				const k = (0, t.template)(
						'<div class="show-only-on-hover-force"><div>',
					),
					L = (0, t.template)("<span>"),
					D = (0, t.template)("<div><div><div></div></div><div><div><div>"),
					M = (0, t.template)("<div>");
				function N(R, O, B) {
					return (0, l.$ndc)(() => (0, r.createComponent)(A, B), R, O);
				}
				function A(R) {
					const O = (0, l.$odc)();
					(0, a.onCleanup)(() => {
						O.aiContextSessionService.removeContextSession(
							R.data.contextSessionUuid,
						);
					});
					const [B] = (0, T.$K0b)(c.$xW, O.configurationService, c.$yW),
						U = (0, a.createMemo)(() => R.data.queryHistory !== void 0),
						[z, F] = (0, a.createSignal)(!1),
						[x, H] = (0, a.createSignal)(1);
					(0, a.createEffect)(() => {
						const fe = R.data.plainText;
						O.aiContextSessionService.updateContextSession(
							R.data.contextSessionUuid,
							{
								input: {
									case: "terminal-cmd-k",
									query: fe,
									instanceId: R.data.instanceId,
									queryHistory: R.data.queryHistory?.current,
									chatHistory: R.data.chatHistory?.current,
								},
								removedIntentUuids: [],
								upsertedIntents: [],
								rerankEndpoint: (me) => O.cmdKService.rerankTerminalCmdK(me),
							},
						);
					}),
						(0, a.createEffect)(() => {
							const fe = x();
							if (R.data.abortController === void 0) F(!1);
							else if (R.data.abortController.signal.aborted) F(!1);
							else {
								F(!0);
								const me = () => {
										H((ge) => ge + 1);
									},
									ve = R.data.abortController;
								ve.signal.addEventListener("abort", me),
									(0, a.onCleanup)(() => {
										ve.signal.removeEventListener("abort", me);
									});
							}
						});
					function q(fe) {
						const me = fe.charCodeAt(0);
						return (
							fe ===
								`
` ||
							fe === "\r" ||
							fe === "	" ||
							fe === "\b" ||
							(me >= 0 && me <= 31) ||
							(me >= 128 && me <= 159) ||
							me === 8232 ||
							me === 8233 ||
							(me >= 8203 && me <= 8205)
						);
					}
					function V(fe) {
						let me = "";
						for (let ve = 0; ve < fe.length; ve++) q(fe[ve]) || (me += fe[ve]);
						return me;
					}
					(0, a.createEffect)((fe) => {
						if (B()) return;
						const me = R.data.suggestedCommand,
							ve = R.data.commandLine,
							ge = fe && ve === fe[1] ? fe[0] : "";
						if (me === ge) return [me, ve];
						if (me.startsWith(ge)) {
							let be = me.slice(ge.length);
							if (((be = V(be)), be.length === 0)) return [me, ve];
							R.terminalInstance.sendText(be, !1);
						} else {
							R.terminalInstance.sendText("\b".repeat(ge.length), !1);
							let be = me;
							if (((be = V(be)), be.length === 0)) return [me, ve];
							R.terminalInstance.sendText(be, !1);
						}
						return [me, ve];
					});
					const G = () => {
						R.terminalInstance.cancelPromptBar(),
							R.terminalInstance.hidePromptBar(),
							R.terminalInstance.focus();
					};
					let K;
					const J = [
							{
								command: u.KEY_COMMAND_SLASH_COMMAND,
								callback: (fe) =>
									fe.altKey && K
										? (K(), fe.preventDefault(), fe.stopPropagation(), !0)
										: (O.commandService.executeCommand(c.$9V, {
												isLongContextMode: !1,
												specificModelField: "terminal-cmd-k",
											}),
											fe.stopPropagation(),
											!0),
							},
							{
								command: u.KEY_COMMAND_K_COMMAND,
								callback: (fe) => (
									R.terminalInstance.focus(), fe.stopPropagation(), !0
								),
							},
							{
								command: u.KEY_COMMAND_ENTER_COMMAND,
								callback: (fe) =>
									R.data.suggestedCommand.length > 0
										? (ue(), fe.stopPropagation(), !0)
										: !1,
							},
							{
								command: u.KEY_BACKSPACE_DELETE_COMMAND,
								callback: (fe) =>
									z()
										? (O.commandService.executeCommand(c.$bW),
											fe.stopPropagation(),
											!0)
										: R.data.suggestedCommand.length > 0
											? U() && R.data.plainText.length > 0
												? !1
												: (O.commandService.executeCommand(c.$eW),
													fe.stopPropagation(),
													!0)
											: !1,
							},
							{
								command: u.KEY_ESCAPE_COMMAND,
								callback: (fe) => (G(), fe.stopPropagation(), !0),
							},
						],
						[W, X] = (0, a.createSignal)(void 0),
						Y = (0, a.createMemo)(
							() =>
								O.reactiveStorageService.nonPersistentStorage.inprogressAIGenerations.find(
									(me) => me.generationUUID === W(),
								)?.queuePositionResponse,
						),
						ie = () => R.data.plainText.length === 0,
						ne = async (fe) => {
							if (
								(O.tooltipService.registerEvent("terminal.cmdk.submit"), ie())
							)
								return;
							const me = (0, g.$9g)();
							O.cmdKService2.submitTerminalCmdK(R.data, R.setData, me, {
								chatMode: fe.chatMode,
							}),
								X(me);
						},
						ee = (0, r.createComponent)(a.Show, {
							get when() {
								return R.data.forceRerenderInputBox;
							},
							keyed: !0,
							children: (fe) =>
								(0, r.createComponent)(
									f.$Uac,
									(0, d.mergeProps)(b.$w_b, {
										readonly: !1,
										supportsGit: !1,
										supportsCommitNotes: !1,
										supportsFolderSelections: !1,
										supportsLint: !1,
										source: "terminal.cmdk",
										supportsCodebase: !1,
										supportsLink: !1,
										supportsWeb: !0,
										addWeb: () => {
											R.setData("useWeb", !0);
										},
										removeWeb: () => {
											R.setData("useWeb", !1);
										},
										showDocs: !1,
										isLongContextMode: !1,
										useArrowsForHistory: !0,
										get initText() {
											return R.data.plainText;
										},
										get placeholder() {
											return (0, m.memo)(() => !U())()
												? R.data.chatResponse
													? "Follow-up or command instructions"
													: "Command instructions... (\u21C5 for history, @ for code / documentation)"
												: `Follow-up instructions... ${O.keybindingService?.lookupKeybinding(c.$_V)?.getLabel()}`;
										},
										get delegate() {
											return R.data.delegate;
										},
										get inputBoxDelegate() {
											return R.data.inputBoxDelegate;
										},
										editorConfig: () => ({
											...(0, f.$Rac)(),
											namespace: "terminal-prompt-input" + R.data.uuid,
											onError: (me) => {
												console.error(me);
											},
										}),
										setEditor: () => {},
										setText: (me) => {
											R.setData("plainText", me),
												O.aiService.setLastDraftMessage(me);
										},
										setRichText: (me) => {
											R.setData("richText", me);
										},
										onSubmit: (me) => {
											ne({ chatMode: me.altKey });
										},
										setIsFocused: (me) => {
											R.setData("isFocused", me);
										},
										extraCommandListeners: J,
										get contextSessionUuid() {
											return R.data.contextSessionUuid;
										},
										disableSelectionCopyPaste: !0,
									}),
								),
						});
					let _;
					const [te, Q] = (0, a.createSignal)(0),
						[Z, se] = (0, a.createSignal)(0);
					(0, a.createEffect)(() => {
						R.onDidChangeHeight && R.onDidChangeHeight(te());
					}),
						(0, a.onMount)(() => {
							const fe = new ResizeObserver((me) => {
								for (const ve of me) {
									const { width: ge, height: be } = ve.contentRect;
									Q(be), se(ge);
								}
							});
							_ && fe.observe(_),
								(0, a.onCleanup)(() => {
									fe.disconnect();
								});
						}),
						(0, a.createEffect)(() => {
							R.data.inputBoxDelegate.focus();
						});
					const re = (0, a.createMemo)(() => !0),
						[le, oe] = (0, a.createSignal)(!1),
						[ae, pe] = (0, a.createSignal)(!1),
						[$e, ye] = (0, a.createSignal)(!1),
						ue = () => {
							B()
								? (R.terminalInstance.runCommand(R.data.suggestedCommand, !1),
									G())
								: O.commandService.executeCommand(c.$dW);
						};
					return (() => {
						const fe = D(),
							me = fe.firstChild,
							ve = me.firstChild,
							ge = me.nextSibling,
							be = ge.firstChild,
							Ce = be.firstChild,
							Le = _;
						return (
							typeof Le == "function" ? (0, C.use)(Le, fe) : (_ = fe),
							fe.style.setProperty("width", "100%"),
							fe.style.setProperty("max-width", "500px"),
							fe.style.setProperty("font-size", "12px"),
							fe.style.setProperty("margin-left", "auto"),
							fe.style.setProperty("margin-right", "auto"),
							fe.style.setProperty("position", "relative"),
							me.addEventListener("click", (Fe) => {
								G(), Fe.stopPropagation();
							}),
							me.style.setProperty("position", "absolute"),
							me.style.setProperty("right", "-2px"),
							me.style.setProperty("top", "-3px"),
							me.style.setProperty(
								"color",
								"var(--vscode-input-placeholderForeground)",
							),
							me.style.setProperty("cursor", "pointer"),
							me.style.setProperty("z-index", "1000002"),
							me.style.setProperty("padding", "4px"),
							ve.style.setProperty("font-size", "12px"),
							ge.style.setProperty("padding", "5px 5px"),
							ge.style.setProperty("padding-top", "9px"),
							ge.style.setProperty("padding-bottom", "0px"),
							ge.style.setProperty(
								"border",
								"1px solid var(--vscode-commandCenter-inactiveBorder)",
							),
							ge.style.setProperty("border-radius", "5px"),
							ge.style.setProperty(
								"box-shadow",
								"0 4px 8px var(--vscode-inlineChat-shadow)",
							),
							ge.style.setProperty("margin-bottom", "4px"),
							(0, E.insert)(
								ge,
								(0, r.createComponent)(a.Show, {
									get when() {
										return (
											(0, m.memo)(() => R.data.suggestedCommand.length > 0)() &&
											B()
										);
									},
									get children() {
										const Fe = k(),
											Oe = Fe.firstChild;
										return (
											Fe.style.setProperty("margin", "0 0.5rem"),
											Fe.style.setProperty("margin-bottom", "0.25rem"),
											Fe.style.setProperty("padding", "0.125rem 0.25rem"),
											Fe.style.setProperty("border-radius", "4px"),
											Fe.style.setProperty(
												"background",
												"var(--vscode-editor-background)",
											),
											Fe.style.setProperty("display", "flex"),
											Fe.style.setProperty("align-items", "center"),
											Fe.style.setProperty("gap", "4px"),
											Oe.style.setProperty("flex", "1"),
											Oe.style.setProperty("height", "100%"),
											Oe.style.setProperty("overflow", "hidden"),
											(0, E.insert)(
												Oe,
												(0, r.createComponent)(I.$Ibc, {
													get text() {
														return R.data.suggestedCommand;
													},
													language: "bash",
													isSimpleWidget: !1,
													autoHeightForModelChanges: !0,
													nonReactiveEditorOptions: {
														scrollbar: {
															horizontal: "visible",
															horizontalScrollbarSize: 6,
															ignoreVerticalScrolling: !0,
															vertical: "hidden",
														},
														wordWrap: "on",
														wordWrapOverride1: "on",
														wordWrapOverride2: "on",
														rulers: [],
														overviewRulerBorder: !1,
														overviewRulerLanes: 0,
														automaticLayout: !0,
													},
												}),
											),
											Fe
										);
									},
								}),
								be,
							),
							(0, E.insert)(ge, ee, be),
							(0, E.insert)(
								ge,
								(0, r.createComponent)(a.Show, {
									get when() {
										return R.data.chatResponse;
									},
									children: (Fe) =>
										(() => {
											const Oe = M();
											return (
												Oe.style.setProperty("padding", "0 0.5rem"),
												Oe.style.setProperty("padding-top", "0.5rem"),
												Oe.style.setProperty("white-space", "normal"),
												(0, E.insert)(
													Oe,
													(0, r.createComponent)(s.$4$b, {
														get rawText() {
															return Fe();
														},
														get finished() {
															return !z();
														},
														codeBlockProps: { shouldRecompute: 1 },
													}),
												),
												Oe
											);
										})(),
								}),
								be,
							),
							be.style.setProperty("display", "flex"),
							be.style.setProperty("justify-content", "flex-start"),
							be.style.setProperty("align-items", "center"),
							be.style.setProperty("margin", "4px 0px 6px 0px"),
							be.style.setProperty("padding", "0px 4px"),
							(0, E.insert)(
								be,
								(0, r.createComponent)(a.Switch, {
									get children() {
										return [
											(0, r.createComponent)(a.Match, {
												get when() {
													return !z() && R.data.plainText.length > 0;
												},
												get children() {
													return [
														(0, r.createComponent)(h.$rdc, {
															get title() {
																return (
																	(R.data.isFocused ? "\u23CE " : "") + "Submit"
																);
															},
															onClick: () => {
																ne({ chatMode: !1 });
															},
															type: "primary",
															get disabled() {
																return R.data.plainText.length === 0;
															},
															style: {
																"margin-left": "4px",
																"font-size": "10px",
																padding: "0px 4px",
															},
														}),
														(0, r.createComponent)(h.$rdc, {
															get title() {
																return (
																	(R.data.isFocused ? "\u2325\u23CE " : "") +
																	"quick question"
																);
															},
															onClick: () => {
																ne({ chatMode: !0 });
															},
															type: "secondary",
															get disabled() {
																return R.data.plainText.length === 0;
															},
															extras: {
																style: {
																	"margin-left": "8px",
																	"font-size": "10px",
																	padding: "0px 4px",
																},
															},
														}),
													];
												},
											}),
											(0, r.createComponent)(a.Match, {
												get when() {
													return z();
												},
												get children() {
													return [
														(0, r.createComponent)(h.$rdc, {
															title: `${n.$m ? "\u2318" : "ctrl+"}\u232B Cancel`,
															onClick: () => {
																O.commandService.executeCommand(c.$bW);
															},
															type: "secondary",
															style: {
																"font-size": "10px",
																padding: "0px 4px",
															},
														}),
														(() => {
															const Fe = L();
															return (
																Fe.style.setProperty("font-size", "10px"),
																Fe.style.setProperty("margin-left", "4px"),
																Fe.style.setProperty("padding", "0px 4px"),
																Fe.style.setProperty(
																	"color",
																	"var(--vscode-input-placeholderForeground)",
																),
																(0, E.insert)(
																	Fe,
																	(0, r.createComponent)(P.$h_b, {
																		get queuePositionResponse() {
																			return Y();
																		},
																		hideDotsLoading: !1,
																		isLoading: !0,
																		spaceBelow: !0,
																		get statusMessages() {
																			return R.data.statusUpdate
																				? [R.data.statusUpdate]
																				: void 0;
																		},
																		conciseMessage: !0,
																		setIsUpsellFastRequestsShowing: oe,
																		setIsUpsellingUsageBasedPricing: pe,
																		setIsUpsellingHardLimit: ye,
																	}),
																),
																Fe
															);
														})(),
													];
												},
											}),
											(0, r.createComponent)(a.Match, {
												get when() {
													return !z() && R.data.suggestedCommand.length > 0;
												},
												get children() {
													return [
														(0, r.createComponent)(h.$rdc, {
															get title() {
																return `${n.$m ? "\u2318" : "ctrl+"}\u23CE ${B() ? "Insert" : "Run"}`;
															},
															onClick: ue,
															type: "primary",
															style: {
																"margin-left": "4px",
																"font-size": "10px",
																padding: "0px 4px",
															},
														}),
														(0, r.createComponent)(h.$rdc, {
															title: `${n.$m ? "\u2318" : "ctrl+"}\u232B Reject`,
															onClick: () => {
																O.commandService.executeCommand(c.$eW);
															},
															type: "secondary",
															extras: {
																style: {
																	"margin-left": "8px",
																	"font-size": "10px",
																	padding: "0px 4px",
																},
															},
														}),
														(0, r.createComponent)(h.$rdc, {
															get title() {
																return B()
																	? "Esc to close"
																	: "Esc to accept & close";
															},
															onClick: () => {
																G();
															},
															type: "secondary",
															style: {
																"font-size": "10px",
																padding: "0px 4px",
															},
														}),
													];
												},
											}),
											(0, r.createComponent)(a.Match, {
												when: !0,
												get children() {
													return (0, r.createComponent)(h.$rdc, {
														title: "Esc to close",
														onClick: () => {
															G();
														},
														type: "secondary",
														style: { "font-size": "10px", padding: "0px 4px" },
													});
												},
											}),
										];
									},
								}),
								Ce,
							),
							Ce.style.setProperty("flex-grow", "1"),
							(0, E.insert)(
								be,
								(0, r.createComponent)(a.Show, {
									get when() {
										return (0, m.memo)(() => !!re())() && Z() > 350;
									},
									get children() {
										return (0, r.createComponent)(S.$3bc, {
											style: {
												color: "var(--vscode-input-placeholderForeground)",
												opacity: 1,
											},
											specificModelField: "terminal-cmd-k",
											setTriggerFn: (Fe) => {
												K = Fe;
											},
											buttonHint: `${n.$m ? "\u2318\u2325/" : "ctrl+alt+/"} open menu`,
											onClose: () => {
												R.data.inputBoxDelegate.focus();
											},
										});
									},
								}),
								null,
							),
							(0, E.insert)(
								be,
								(() => {
									const Fe = (0, m.memo)(() => !!re());
									return () =>
										Fe() &&
										(0, r.createComponent)(h.$rdc, {
											get title() {
												return (
													O.keybindingService
														?.lookupKeybinding(c.$_V)
														?.getLabel() + " to toggle focus"
												);
											},
											isNotClickable: !0,
											style: {
												"margin-left": "4px",
												"font-size": "10px",
												padding: "0px 4px",
											},
											type: "secondary",
										});
								})(),
								null,
							),
							(0, E.insert)(
								ge,
								(0, r.createComponent)(a.Show, {
									get when() {
										return z();
									},
									get children() {
										return [
											(0, r.createComponent)(a.Show, {
												get when() {
													return le();
												},
												get children() {
													return (0, r.createComponent)(p.$E$b, {
														setIsUpsellFastRequestsShowing: oe,
														conciseMessage: !0,
													});
												},
											}),
											(0, r.createComponent)(a.Show, {
												get when() {
													return ae();
												},
												get children() {
													return (0, r.createComponent)(o.$l_b, {
														setIsUpsellingUsageBasedPricing: pe,
													});
												},
											}),
											(0, r.createComponent)(a.Show, {
												get when() {
													return $e();
												},
												get children() {
													return (0, r.createComponent)(o.$m_b, {
														setIsUpsellingHardLimit: ye,
													});
												},
											}),
										];
									},
								}),
								null,
							),
							(0, E.insert)(
								ge,
								(0, r.createComponent)(y.$Idc, {
									style: { padding: "0px 0.5rem 0px 0.5rem" },
									get contextSessionUuid() {
										return R.data.contextSessionUuid;
									},
									bottomHeightWhenVisible: 6,
									collapseByDefault: !0,
								}),
								null,
							),
							(0, w.effect)(() =>
								(0, i.className)(ve, v.ThemeIcon.asClassName($.$ak.x)),
							),
							fe
						);
					})();
				}
			},
		)
