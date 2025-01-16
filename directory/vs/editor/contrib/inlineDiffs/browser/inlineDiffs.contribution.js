define(de[4367], he([1, 0, 851, 2002, 4118]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		define(
			de[4368],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 158, 13, 147, 58, 12, 47, 242, 1072, 450,
				310, 338, 36, 2e3, 14, 26, 859, 865, 270, 863,
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
		),
		define(
			de[4369],
			he([
				1, 0, 27, 11, 8, 43, 58, 47, 46, 65, 606, 383, 104, 949, 346, 71, 499,
				2002, 2001, 31, 45, 32, 155, 1279, 354, 108, 356, 66, 18, 479, 720, 471,
				42, 19, 679, 25, 193, 118, 148, 40, 121, 41, 308, 10, 1930, 219, 287,
				793, 63, 137, 476, 209, 169,
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
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
				Y,
				ie,
				ne,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Sec =
						e.$Rec =
						e.$Qec =
						e.$Pec =
						e.$Oec =
						e.$Nec =
						e.$Mec =
						e.$Lec =
						e.$Kec =
						e.$Jec =
						e.$Iec =
						e.$Hec =
						e.$Gec =
						e.$Fec =
						e.$Eec =
						e.$Dec =
						e.$Cec =
						e.$Bec =
						e.$Aec =
						e.$zec =
						e.CmdKInvocationType =
						e.$yec =
						e.$xec =
						e.$wec =
						e.$vec =
						e.$uec =
						e.$tec =
							void 0);
				const ee = (Se) =>
					Se.length <= 20
						? Se
						: Se.slice(0, Math.floor(20 / 2)) +
							"..." +
							Se.slice(-Math.floor(20 / 2));
				async function _(Se, ke, Ue, qe) {
					const Me = Se.getPastGenerations()
							.slice(0, 30)
							.filter((Re) => Re.type !== void 0)
							.map((Re) => ({
								label: `${Re.type} - ${ee(JSON.stringify(Re.textDescription ?? ""))} - ${Re.generationUUID}`,
								description: (0, Y.$Pac)(Re.unixMs),
							})),
						De = ke.createQuickPick();
					(De.items = Me),
						(De.placeholder = "Select a recent AI action"),
						De.onDidAccept(async () => {
							const Re = De.selectedItems[0];
							Re && (De.hide(), await Q(Re, Se, ke, Ue, qe, "ai"));
						}),
						De.show();
				}
				async function te(Se, ke, Ue, qe, Ae, Me) {
					const De = await Se.getCppReport();
					if (!De || !De.events.length) {
						Ue.error("No Cursor Tab actions found");
						return;
					}
					const Re = ke.createQuickPick();
					(Re.items = De.events.map((je) => ({
						label: `${je.requestId} - ${(0, Y.$Pac)(je.timestamp)}`,
						description: je.debugInfo?.modelOutput,
						cppReportEvent: je,
					}))),
						(Re.placeholder = "Select a Cursor Tab request (last 20 requests)"),
						Re.onDidAccept(async () => {
							const je = Re.selectedItems[0];
							je && (Re.hide(), await Q(je, qe, ke, Ae, Me, "cpp"));
						}),
						Re.show();
				}
				async function Q(Se, ke, Ue, qe, Ae, Me, De) {
					const Re = [
							{ label: "Report Good" },
							{ label: "Report Bad" },
							{ label: "Report with Comment" },
							{ label: "Copy Request ID" },
						],
						je = Ue.createQuickPick();
					(je.items = Re),
						(je.placeholder = "Choose an action" + (De ? ` (${De})` : "")),
						je.onDidAccept(async () => {
							const Ve = je.selectedItems[0];
							if (Ve)
								if ((je.hide(), Me === "ai")) {
									const Ze = Se.label.split(" - ").at(-1) ?? "undefined";
									await Z(Ve.label, Ze, ke, Ue, qe, Ae);
								} else {
									const Ze = Se.label.split(" - ").at(0)?.trim() ?? "undefined";
									await Z(Ve.label, Ze, ke, Ue, qe, Ae);
								}
						}),
						je.show();
				}
				async function Z(Se, ke, Ue, qe, Ae, Me) {
					switch (Se) {
						case "Report Good":
							Ue.reportGenerationFeedback(
								ke,
								U.ReportGenerationFeedbackRequest_FeedbackType.THUMBS_UP,
							);
							break;
						case "Report Bad":
							Ue.reportGenerationFeedback(
								ke,
								U.ReportGenerationFeedbackRequest_FeedbackType.THUMBS_DOWN,
							);
							break;
						case "Report with Comment": {
							const De = qe.createInputBox();
							(De.placeholder = "Type your comment here..."),
								De.onDidAccept(() => {
									const Re = De.value;
									Re &&
										Ue.reportGenerationFeedback(
											ke,
											U.ReportGenerationFeedbackRequest_FeedbackType
												.UNSPECIFIED,
											Re,
										),
										De.hide();
								}),
								De.show();
							break;
						}
						case "Copy Request ID":
							await Me.writeText(ke);
							break;
					}
				}
				class se extends i.$3X {
					static {
						this.ID = "workbench.action.reportAIAction";
					}
					static {
						this.LABEL = "Developer: Report AI Action";
					}
					constructor() {
						super({
							id: se.ID,
							title: { value: se.LABEL, original: "See Recent AI Actions" },
							f1: !0,
						});
					}
					async run(ke) {
						const Ue = ke.get(B.$Nfc),
							qe = ke.get(W.$DJ),
							Ae = ke.get(x.$7rb),
							Me = ke.get(F.$Vxb);
						await _(Ue, qe, Ae, Me);
					}
				}
				(e.$tec = se), (0, i.$4X)(se);
				class re extends i.$3X {
					static {
						this.ID = "workbench.action.reportCppAction";
					}
					static {
						this.LABEL = "Developer: Report Cursor Tab Action";
					}
					constructor() {
						super({
							id: re.ID,
							title: {
								value: re.LABEL,
								original: "See Recent Cursor Tab Actions",
							},
							f1: !0,
						});
					}
					async run(ke) {
						const Ue = ke.get(X.$jfc),
							qe = ke.get(W.$DJ),
							Ae = ke.get(z.$4N),
							Me = ke.get(x.$7rb),
							De = ke.get(F.$Vxb),
							Re = ke.get(B.$Nfc);
						await te(Ue, qe, Ae, Re, Me, De);
					}
				}
				(e.$uec = re),
					(e.$vec = "cmdK.clearPromptBar"),
					(e.$wec = t.KeyMod.CtrlCmd | t.KeyCode.KeyK),
					(e.$xec = t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.KeyK),
					(e.$yec = t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.KeyK);
				var le;
				(function (Se) {
					(Se.ToggleFocus = "toggle"), (Se.NewPromptBar = "new");
				})(le || (e.CmdKInvocationType = le = {}));
				const oe = new w.$5j("terminalFocus", !1);
				e.$zec = new w.$5j("editorFocus", !0);
				function ae(Se, ke, Ue, qe, Ae, Me) {
					const De = Ue.nonPersistentStorage.promptBars.find(
						(et) => et.id === Me,
					);
					if (!De) return;
					const Re = De.diffId;
					Re && (ke.rejectDiff(Re), ke.cancelDiff(Re));
					const je = De.modifyTextModelPrePromptBarBackwardEdit,
						Ve = Ae.getPromptBarCurrentRange(De, qe),
						Ze = De.prePromptBarCursorPosition;
					Ue.setNonPersistentStorage(
						"promptBars",
						Ue.nonPersistentStorage.promptBars.filter((et) => et.id !== Me),
					),
						je &&
							je.length > 0 &&
							qe &&
							(Ze &&
								Ve &&
								(0, a.$77b)(
									Se,
									{
										startLineNumber: Ve.startLineNumber,
										endLineNumber: Ve.endLineNumberExclusive - 1,
										startColumn: 1,
										endColumn: 1,
									},
									qe.uri,
									Ze,
								),
							(0, a.$87b)(qe, je));
				}
				class pe extends i.$3X {
					static {
						this.c = !1;
					}
					constructor() {
						super({
							id: p.$t7b,
							title: { value: A.$M0b, original: A.$M0b },
							f1: !0,
							precondition: J.composerBarIsVisible.negate(),
							keybinding: [
								{
									when: e.$zec.isEqualTo(!0),
									primary: e.$yec,
									weight: E.KeybindingWeight.ExternalExtension + 1001,
									args: { invocationType: le.ToggleFocus },
								},
								{
									when: e.$zec.isEqualTo(!0) || $.$9dc.isEqualTo(!0),
									primary: e.$wec,
									weight: E.KeybindingWeight.ExternalExtension + 1001,
									args: { invocationType: le.NewPromptBar },
								},
							],
						});
					}
					async run(ke, Ue, ...qe) {
						const Ae = Ue?.initText,
							Me = Ue?.invocationType,
							De = ke.get(r.$dtb),
							Re = ke.get(s.$0zb),
							je = ke.get(a.$27b),
							Ve = ke.get(b.$ek),
							Ze = ke.get(y.$GN),
							et = ke.get(T.$EY),
							rt = ke.get(P.$IY),
							ft = ke.get(D.$B7b),
							bt = ke.get(q.$gj),
							nt = ke.get(k.$J7b),
							lt = ke.get(L.$d0b),
							ct = ke.get(V.$rec),
							gt = ke.get(H.$5X),
							ht = ke.get(G.IComposerService),
							Rt = ke.get(K.$H7b),
							Nt = ke.get(ie.IComposerDataService);
						if (pe.c) {
							console.log("StartEditPrompt is already running, skipping");
							return;
						}
						pe.c = !0;
						try {
							let jt = De.getActiveCodeEditor();
							Ue?.overrideUri &&
								(jt = await De.openCodeEditor(
									{
										resource: Ue.overrideUri,
										options: { forceReload: !0, preserveFocus: !0 },
									},
									De.getActiveCodeEditor(),
								));
							const ti = jt?.getModel();
							if (!jt || !ti) return;
							if (!jt.hasModel()) {
								console.error("No model found, cannot edit.");
								return;
							}
							let kt = Ue?.overrideRange ?? jt.getSelection();
							!kt.isEmpty() &&
								kt.startLineNumber !== kt.endLineNumber &&
								kt.endColumn === 1 &&
								(kt = new h.$kL(
									kt.startLineNumber,
									kt.startColumn,
									kt.endLineNumber - 1,
									ti.getLineMaxColumn(kt.endLineNumber - 1),
								));
							const hi = Ue?.overrideUri ?? jt.getModel().uri;
							Ue?.isHeadless !== !0 && Ve.executeCommand(C.$QW);
							const Kt = et.groups;
							let di;
							if (Me === le.ToggleFocus) {
								if (
									ht.isComposerEnabled() &&
									Re.nonPersistentStorage.promptBars.length === 0
								) {
									Ve.executeCommand(ne.OPEN_COMPOSER_AS_BAR_ACTION_ID);
									return;
								}
								if (Ue?.promptBarId) {
									Ve.executeCommand(C.$8W, Ue?.promptBarId);
									return;
								}
								if (Re.nonPersistentStorage.promptBars.length > 0) {
									const $i = [...Re.nonPersistentStorage.promptBars].sort(
										(Wt, tt) => Wt.createdAt - tt.createdAt,
									);
									di = $i.at($i.length - 1);
								}
							}
							const Ye = Kt.filter((ri) => {
									const $i = ri.activeEditorPane?.getControl();
									if ($i === void 0) return !1;
									try {
										return $i.getId() === di?.editorId;
									} catch {
										return !1;
									}
								}),
								ze = Kt.filter((ri) =>
									ri.editors.some(($i) => N.$dh.isEqual($i.resource, di?.uri)),
								);
							let Xe = Ye.some((ri) => ze.includes(ri));
							N.$dh.isEqual(di?.uri, jt.getModel()?.uri) &&
								di?.editorId === jt.getId() &&
								(Xe = !0);
							let It;
							for (const ri of Re.nonPersistentStorage.promptBars) {
								if (ri.uri.toString() !== hi.toString()) continue;
								const $i = nt.getPromptBarCurrentRange(ri, ti);
								if (
									$i &&
									!(
										$i.endLineNumberExclusive - 1 < kt.startLineNumber ||
										kt.endLineNumber < $i.startLineNumber
									)
								) {
									It = ri;
									break;
								}
							}
							if (di !== void 0 && Xe && It === void 0) {
								kt !== void 0 && !kt.isEmpty()
									? Ve.executeCommand(e.$Gec, di.id)
									: Ve.executeCommand(C.$hW, di.id);
								return;
							}
							if (!kt) {
								console.error("No selection found, cannot edit.");
								return;
							}
							const Lt = [],
								xt = [],
								Vt = ti.getLineContent(kt.startLineNumber).trim() === "",
								Bt = jt.getPosition(),
								Mt = !1 && ht.isComposerEnabled(),
								Ut = kt.isEmpty(),
								ei = Ue?.insertNewLine ?? !0,
								mi = Vt;
							if (Ut && !It && ei && Mt) {
								Ve.executeCommand(ne.OPEN_COMPOSER_AS_BAR_ACTION_ID);
								return;
							}
							if (Ut && !mi && !It && ei) {
								if (Mt) {
									Ve.executeCommand(ne.OPEN_COMPOSER_AS_BAR_ACTION_ID);
									return;
								}
								const $i = bt.getValue(C.$rW)
									? await ct.heuristicSelect(
											jt,
											{
												lineNumber: kt.startLineNumber,
												column: kt.startColumn,
											},
											{},
										)
									: [];
								if ($i.length > 0) {
									const Wt = $i[0];
									kt = new h.$kL(
										Wt.initialSelectionRange.startLineNumber,
										Wt.initialSelectionRange.startColumn,
										Wt.initialSelectionRange.endLineNumber,
										Wt.initialSelectionRange.endColumn,
									);
								} else {
									const Wt = jt._getViewModel(),
										tt = ti.getLineLength(kt.startLineNumber) + 1,
										at = c.$$tb.typeWithInterceptors(
											!1,
											n.EditOperationType.Other,
											Wt.cursorConfig,
											ti,
											[
												new h.$kL(
													kt.startLineNumber,
													tt,
													kt.startLineNumber,
													tt,
												),
											],
											Wt.getCursorAutoClosedCharacters(),
											`
`,
										);
									let pi = "",
										Li = null;
									at.commands[0]?.getEditOperations(ti, {
										addEditOperation: () => {},
										trackSelection: () => "test",
										addTrackedEditOperation: (Di, Ui, Wi) => {
											(Li = Di), (pi = Ui);
										},
									}),
										Li !== null &&
											(Lt.push({
												range: Li,
												text:
													pi ??
													`
`,
												forceMoveMarkers: !0,
											}),
											xt.push(...ti.applyEdits(Lt, !0)),
											(kt = new h.$kL(
												kt.startLineNumber + 1,
												ti.getLineLength(kt.startLineNumber + 1),
												kt.startLineNumber + 1,
												ti.getLineLength(kt.startLineNumber + 1),
											)));
								}
							}
							gt.registerEvent("editor.cmdk.show");
							const ii = ti.getLineIndentColumn(kt.startLineNumber) ?? 0;
							jt.setPosition({ lineNumber: kt.startLineNumber, column: ii }),
								jt.setSelection({
									startLineNumber: kt.startLineNumber,
									startColumn: ii,
									endLineNumber: kt.startLineNumber,
									endColumn: ii,
								});
							const Dt = ti.deltaDecorations(
									[],
									[
										{
											range: {
												startLineNumber: kt.startLineNumber,
												endLineNumber: kt.endLineNumber,
												startColumn: 1,
												endColumn: ti.getLineMaxColumn(kt.endLineNumber),
											},
											options: {
												description: "promptBar-tracking-range",
												isWholeLine: !0,
											},
										},
									],
								)[0],
								Jt = Re.nonPersistentStorage.cmdkBackgroundContextSelections
									.map((ri) => ri.selections)
									.flat(),
								si = (0, S.$eJb)(rt.activeEditorPane),
								Zt = (0, D.$D7b)();
							Ue?.previousDiff &&
								(Zt.defaultIntents = Zt.defaultIntents.filter(
									(ri) => ri.intent.case !== "lspSubgraph",
								));
							const ci = {
								id: (0, d.$9g)(),
								cellId: si?.getActiveCell()?.id,
								uri: hi,
								currentRangeDecorationId: Dt,
								generating: !1,
								data: (0, f.$Sdc)(Ae, Jt),
								height: 40,
								indentColumn: ii,
								editorId: jt.getId(),
								forceRerenderInputBox: 1,
								isHeadless: Ue?.isHeadless ?? !1,
								contextSessionUuid: ft.createContextSession(Zt).uuid,
								queryHistory: void 0,
								chatResponse: void 0,
								inlineChatHistory: void 0,
								previousStructuredTextsNewestFirst: [],
								modifyTextModelPrePromptBarForwardEdit: Lt,
								modifyTextModelPrePromptBarBackwardEdit: xt,
								prePromptBarCursorPosition: Bt,
								createdAt: Date.now(),
								visible: Ue?.visible ?? !0,
								dependencyPromptBarIds: [],
								...Ue,
							};
							if (It) Ve.executeCommand(C.$hW, It.id);
							else if (
								(Ue?.isHeadless !== !0 &&
									Ze.pushElement(
										new u.$x7b(
											"Open prompt bar",
											"promptbar-open",
											hi,
											() => {
												ae(De, je, Re, ti, nt, ci.id);
											},
											() => {
												ci.modifyTextModelPrePromptBarForwardEdit.length > 0 &&
													ti &&
													(0, a.$87b)(
														ti,
														ci.modifyTextModelPrePromptBarForwardEdit,
													),
													Re.setNonPersistentStorage("promptBars", [
														...Re.nonPersistentStorage.promptBars,
														(0, s.$_zb)(ci),
													]);
											},
										),
									),
								Re.setNonPersistentStorage("promptBars", [
									...Re.nonPersistentStorage.promptBars,
									(0, s.$_zb)(ci),
								]),
								Ve.executeCommand(C.$hW, ci.id),
								Ue?.previousDiff !== void 0)
							) {
								const ri = ti.getDecorationRange(Dt);
								if (ri === null) console.error("decoration range not defined");
								else {
									const $i = {
											currentRange: {
												startLineNumber: kt.startLineNumber,
												endLineNumberExclusive: kt.endLineNumber + 1,
											},
											originalTextLines: Ue.previousDiff.originalTextLines,
											newTextLines: ti.getValueInRange(ri).split(ti.getEOL()),
											prompt: Ue.previousDiff.prompt ?? "",
											generationUUID: (0, d.$9g)(),
											attachedToPromptBar: !0,
											isHidden: !1,
											uri: hi,
											hideDeletionViewZones: !1,
											changes: [],
										},
										Wt = await ft.streamRequestWithContextWrapped(
											ci.contextSessionUuid,
											{
												request: {},
												finalInput: {
													case: "cmd-k",
													fileUri: hi,
													query: Ue.previousDiff.prompt,
													replaceRange: $i.currentRange,
													queryHistory: void 0,
													chatHistory: ci?.inlineChatHistory?.current,
												},
												endpoint: async function (Wi, Gi) {
													return (async function* () {
														yield {
															response: { case: "realResponse", value: "" },
														};
													})();
												},
												generationUUID: (0, d.$9g)(),
												abortSignal: new AbortController().signal,
												frozenDesire: "unfreezeOnStreamCompletion",
											},
										),
										tt = ft.getReactiveReadonlyContextSession(
											ci.contextSessionUuid,
										);
									if (!tt)
										throw new Error(
											"BIG ARVID BUG: context session is undefined",
										);
									let at = tt.intents
										.find((Wi) => Wi.intent.intent.case === "cmdKCurrentFile")
										?.items.find((Wi) => Wi.item.item.case === "cmdKSelection")
										?.item.item.value;
									if (!at)
										throw new Error(
											"BIG ARVID BUG: cmdKSelectionItem is undefined",
										);
									at = {
										...at,
										lines: [...$i.originalTextLines],
										startLineNumber: $i.currentRange.startLineNumber,
									};
									let pi = tt.intents
										.find((Wi) => Wi.intent.intent.case === "cmdKCurrentFile")
										?.items.find(
											(Wi) => Wi.item.item.case === "cmdKImmediateContext",
										)?.item.item.value;
									if (!pi)
										throw new Error(
											"BIG ARVID BUG: cmdKImmediateContext is undefined",
										);
									const Li = pi.lines,
										Di = [];
									for (let Wi = 0; Wi < Li.length; Wi++) {
										const Gi = Li[Wi].lineNumber;
										if (Gi < $i.currentRange.startLineNumber) Di.push(Li[Wi]);
										else if (Gi === $i.currentRange.startLineNumber)
											for (let qi = 0; qi < $i.originalTextLines.length; qi++)
												Di.push({
													line: $i.originalTextLines[qi],
													lineNumber: Gi + qi,
												});
										else
											Gi >=
												$i.currentRange.endLineNumberExclusive +
													($i.newTextLines.length -
														$i.originalTextLines.length) &&
												Di.push({
													line: Li[Wi].line,
													lineNumber:
														Gi -
														($i.newTextLines.length -
															$i.originalTextLines.length),
												});
									}
									if (
										((pi = {
											...pi,
											lines: Di,
											totalNumberOfLinesInFile:
												Di.length -
												($i.newTextLines.length - $i.originalTextLines.length),
										}),
										Wt.ok())
									)
										for await (const Wi of Wt.v);
									const Ui = {
										query: { query: Ue.previousDiff.prompt },
										immediateContext: pi,
										selection: at,
										queryHistory: void 0,
										contextItemHashes: [],
									};
									($i.changes = (0, a.getDiffState)(
										Ue.previousDiff.originalTextLines,
										$i.newTextLines,
										!0,
										!1,
									).changes),
										await je.addDiff($i, ci.id),
										lt.addFollowup({
											promptBarId: ci.id,
											req: { case: "cmdKQueryHistory", queryHistory: Ui },
											structuredQuery: Ue.previousDiff.prompt,
										});
								}
							}
							return ye(Re), ci.id;
						} finally {
							pe.c = !1;
						}
					}
				}
				(e.$Aec = pe), (0, i.$4X)(pe);
				class $e extends i.$3X {
					static {
						this.ID = e.$vec;
					}
					static {
						this.LABEL = "Clear Prompt Bar";
					}
					constructor() {
						super({
							id: $e.ID,
							title: { value: $e.LABEL, original: $e.LABEL },
						});
					}
					run(ke, Ue, ...qe) {
						const Ae = ke.get(s.$0zb),
							Me = ke.get(r.$dtb).getActiveCodeEditor();
						if (!Me) return Promise.resolve();
						const De = Me.getModel();
						return (
							De &&
								ae(ke.get(r.$dtb), ke.get(a.$27b), Ae, De, ke.get(k.$J7b), Ue),
							Promise.resolve()
						);
					}
				}
				(0, i.$4X)($e);
				function ye(Se) {
					Se.setNonPersistentStorage("cmdkBackgroundContextSelections", []);
				}
				class ue extends i.$3X {
					static {
						this.ID = C.$fW;
					}
					static {
						this.LABEL = "Create Cmd K Prompt Bar In Background";
					}
					constructor() {
						super({
							id: ue.ID,
							title: { value: ue.LABEL, original: ue.LABEL },
						});
					}
					async run(ke, Ue, ...qe) {
						if (Ue.length === 0) return;
						const Ae = ke.get(r.$dtb),
							Me = ke.get(s.$0zb),
							De = ke.get(b.$ek),
							Re = ke.get(P.$IY),
							je = ke.get(D.$B7b),
							Ve = ke.get(M.$MO),
							Ze = ke.get(k.$J7b),
							et = ke.get(L.$d0b),
							rt = ke.get(R.$Vi),
							ft = ke.get(y.$GN),
							bt = ke.get(a.$27b),
							nt = Ae.getActiveCodeEditor();
						if (!nt) return;
						const lt = nt.getModel()?.uri,
							ct = [];
						for (let ht = 0; ht < Ue.length; ht++) {
							const Rt = Ue[ht],
								{ initText: Nt, filePath: jt, selection: ti } = Rt,
								kt = rt.resolveRelativePath(jt);
							De.executeCommand(C.$QW),
								await Ae.openCodeEditor(
									{
										resource: kt,
										options: { preserveFocus: !0, inactive: !0, pinned: !0 },
									},
									nt,
									!1,
								),
								lt &&
									(await Ae.openCodeEditor(
										{ resource: lt, options: { preserveFocus: !0 } },
										nt,
										!1,
									));
							const hi = await Ve.createModelReference(kt);
							try {
								const Kt = hi.object.textEditorModel;
								let di = !1,
									Ye;
								for (const ii of Me.nonPersistentStorage.promptBars) {
									if (ii.uri.toString() !== kt.toString()) continue;
									if (ii.id === Rt.id) {
										Ye = ii;
										continue;
									}
									const Dt = Ze.getPromptBarCurrentRange(ii, Kt);
									if (
										Dt &&
										!(
											Dt.endLineNumberExclusive - 1 <
												ti.selectionStartLineNumber ||
											ti.positionLineNumber < Dt.startLineNumber
										)
									) {
										di = !0;
										break;
									}
								}
								if (di) continue;
								Ye &&
									Ye.diffId &&
									(Ye.abortController?.abort(), bt.remove(Ye.diffId));
								const ze = [],
									Xe = [],
									It = nt.getPosition(),
									Lt = Kt.getLineIndentColumn(ti.selectionStartLineNumber) ?? 0,
									xt = Math.max(1, ti.selectionStartLineNumber),
									Vt = Math.min(Kt.getLineCount(), ti.positionLineNumber),
									Bt = Kt.deltaDecorations(
										[],
										[
											{
												range: {
													startLineNumber: xt,
													startColumn: 1,
													endLineNumber: Vt,
													endColumn: Kt.getLineMaxColumn(Vt),
												},
												options: {
													description: "promptBar-tracking-range",
													isWholeLine: !0,
												},
											},
										],
									)[0],
									Gt = (0, S.$eJb)(Re.activeEditorPane),
									Mt = {
										id: Rt.id ?? (0, d.$9g)(),
										cellId: Gt?.getActiveCell()?.id,
										uri: kt,
										currentRangeDecorationId: Bt,
										generating: !0,
										data: (0, f.$Sdc)(Ye?.data.initText ?? Nt),
										height: 40,
										indentColumn: Lt,
										editorId: nt.getId(),
										forceRerenderInputBox: 1,
										contextSessionUuid: je.createContextSession((0, D.$D7b)())
											.uuid,
										queryHistory: Ye?.queryHistory,
										chatResponse: void 0,
										inlineChatHistory: Ye?.inlineChatHistory,
										previousStructuredTextsNewestFirst:
											Ye?.previousStructuredTextsNewestFirst ?? [],
										modifyTextModelPrePromptBarForwardEdit: ze,
										modifyTextModelPrePromptBarBackwardEdit: Xe,
										prePromptBarCursorPosition:
											Ye?.prePromptBarCursorPosition ?? It,
										createdAt: Ye?.createdAt ?? Date.now(),
										dependencyPromptBarIds: Rt.dependencyPromptBarIds ?? [],
										visible: Rt.visible ?? !0,
										abortController: new AbortController(),
									};
								ft.pushElement(
									new u.$x7b(
										"Open prompt bar",
										"promptbar-open",
										kt,
										() => {
											ae(Ae, bt, Me, Kt, Ze, Mt.id);
										},
										() => {
											Mt.modifyTextModelPrePromptBarForwardEdit.length > 0 &&
												Kt &&
												(0, a.$87b)(
													Kt,
													Mt.modifyTextModelPrePromptBarForwardEdit,
												),
												Me.setNonPersistentStorage("promptBars", [
													...Me.nonPersistentStorage.promptBars.filter(
														(ii) => ii.id !== Mt.id,
													),
													(0, s.$_zb)(Mt),
												]);
										},
									),
								),
									Me.setNonPersistentStorage("promptBars", [
										...Me.nonPersistentStorage.promptBars.filter(
											(ii) => ii.id !== Mt.id,
										),
										(0, s.$_zb)(Mt),
									]),
									Rt.createdPromptBarCallback &&
										Rt.createdPromptBarCallback(Mt);
								const Ut = Kt.getDecorationRange(Mt.currentRangeDecorationId),
									ei = Ut?.startLineNumber ?? xt,
									mi = Ut?.endLineNumber ?? Vt;
								ct.push({
									...Rt,
									startLineNumber: ei,
									endLineNumberInclusive: mi,
									id: Mt.id,
								});
							} finally {
								hi.dispose();
							}
						}
						let gt = new Set();
						for (const ht of ct) {
							const Rt = ht.id;
							if (Rt === void 0 || gt.has(Rt)) continue;
							const Nt = Me.nonPersistentStorage.promptBars.find(
								(ti) => ti.id === Rt,
							);
							if (!Nt) continue;
							const jt = ht.dependencyPromptBarIds ?? [];
							if (ht.waitForDependencies)
								for (
									;
									jt.some(
										(ti) =>
											Me.nonPersistentStorage.promptBars.find(
												(kt) => kt.id === ti,
											)?.generating !== !1,
									);
								)
									await new Promise((ti) => setTimeout(ti, 50));
							et.submitEditWithSelection({
								options: {
									fastMode: !1,
									chatMode: !1,
									useContextSession: !0,
									preloadedRequest: (0, O.unwrap)(Nt.preloadedRequest),
									originalRequest: Nt.originalRequest?.current,
									contextSessionUuid: Nt.contextSessionUuid,
									queryHistory: Nt.queryHistory?.current,
									fileUri: Nt.uri,
									diffRange: void 0,
									rejectCurrentDiff: () => {},
									isMultiFileEdit: !0,
								},
								promptBarId: Nt.id,
								query: ht.initText,
								images: Nt.data.images,
								selectedLinks: Nt.data.selectedLinks,
								structuredQuery: Nt.data.initText ?? ht.initText,
								lineRange: {
									startLineNumber: ht.startLineNumber,
									endLineNumberExclusive: ht.endLineNumberInclusive + 1,
								},
								codeBlocks: Nt.data.selections,
								docs: Nt.data.selectedDocs ?? [],
								focusEditor: () => {},
								diffIdCallback: (ti) => {
									Me.setNonPersistentStorage(
										"promptBars",
										(kt) => kt.id === Nt.id,
										"diffId",
										ti,
									);
								},
								doneCallback: () => {
									Me.setNonPersistentStorage(
										"promptBars",
										(ti) => ti.id === Nt.id,
										"generating",
										!1,
									);
								},
								cancelGenerationWithNoChangesCallback: () => {},
								rejectCallback: () => {},
								spoofedSelection: void 0,
								spoofedDiagnostics: void 0,
								spoofedCellId: Nt?.cellId,
								rerun: () => {},
							}),
								gt.add(Rt);
						}
					}
				}
				(e.$Bec = ue), (0, i.$4X)(ue);
				class fe extends i.$3X {
					static {
						this.ID = C.$iW;
					}
					static {
						this.LABEL = "Remove Followup";
					}
					constructor() {
						super({
							id: fe.ID,
							title: { value: "Remove Followup", original: "Remove Followup" },
						});
					}
					async run(ke, Ue, ...qe) {
						ke.get(L.$d0b).removeFollowup(Ue);
					}
				}
				(e.$Cec = fe), (0, i.$4X)(fe);
				class me extends i.$3X {
					static {
						this.ID = C.$hW;
					}
					static {
						this.LABEL = "Focus Edit";
					}
					constructor() {
						super({
							id: me.ID,
							title: { value: "Focus Edit", original: "Focus Edit" },
							f1: !0,
						});
					}
					async run(ke, Ue) {
						const qe = ke.get(s.$0zb),
							Ae = ke.get(r.$dtb),
							Me = ke.get(T.$EY),
							De = ke.get(b.$ek),
							Re = ke.get(M.$MO),
							je = ke.get(k.$J7b),
							Ve = Ae.getActiveCodeEditor();
						if (!Ve) return;
						if (!Ve.hasModel()) {
							console.error("No model found, cannot edit.");
							return;
						}
						const Ze = qe.nonPersistentStorage.promptBars.find(
							(ft) => ft.id === Ue,
						);
						if (!Ze) return;
						const et = Ze.editorId;
						let rt = Ae.listCodeEditors().find(
							(ft) => ft !== void 0 && ft.getId() === et,
						);
						if (rt?.getModel()?.uri.toString() === Ze?.uri.toString())
							rt.focus(),
								rt.revealLineInCenterIfOutsideViewport(
									Math.max(
										1,
										je.getPromptBarCurrentRange(Ze, rt?.getModel())
											?.startLineNumber ?? 1,
									),
								),
								Ze?.data.inputBoxDelegate.focus(),
								setTimeout(() => {
									Ze?.data.inputBoxDelegate.focus();
								}, 100);
						else {
							if ((rt !== void 0 && rt.focus(), Ze)) {
								const ft = await Re.createModelReference(Ze?.uri);
								try {
									rt =
										(await Ae.openCodeEditor(
											{
												resource: Ze?.uri,
												options: {
													preserveFocus: !0,
													selection: {
														startLineNumber:
															je.getPromptBarCurrentRange(
																Ze,
																ft.object.textEditorModel,
															)?.startLineNumber ?? 1,
														startColumn: 0,
														endLineNumber:
															je.getPromptBarCurrentRange(
																Ze,
																ft.object.textEditorModel,
															)?.startLineNumber ?? 1,
														endColumn: 0,
													},
												},
											},
											rt ?? Ve,
										)) ?? void 0;
								} finally {
									ft.dispose();
								}
							}
							rt !== void 0 &&
								(rt.focus(),
								rt.revealLineInCenterIfOutsideViewport(
									Math.max(
										1,
										je.getPromptBarCurrentRange(Ze, rt.getModel())
											?.startLineNumber ?? 1,
									),
								));
						}
						De.executeCommand(o.$iec), De.executeCommand(o.$iec, rt);
					}
				}
				(e.$Dec = me), (0, i.$4X)(me);
				class ve extends i.$3X {
					static {
						this.ID = C.$gW;
					}
					static {
						this.label = "Add Context to Background for Cmd K";
					}
					constructor() {
						super({
							id: ve.ID,
							title: { value: ve.label, original: ve.label },
							f1: !0,
						});
					}
					async run(ke, ...Ue) {
						if (ke.get(s.$0zb).nonPersistentStorage.promptBars.length > 0)
							return;
						const Me = ke.get(L.$d0b),
							De = ke.get(I.$zIb),
							je = ke.get(r.$dtb).getActiveCodeEditor();
						if (!je) return;
						const Ve = je.getModel();
						if (!Ve) return;
						const Ze = je.getSelection();
						if (!Ze) return;
						const et = await (0, v.$Wfc)({
							model: Ve,
							dataScrubbingService: De,
							inBoundsSelectionRange: Ze,
							dontScrub: !0,
						});
						et && Me.addContextToBackground({ selection: et, uri: Ve.uri });
					}
				}
				(e.$Eec = ve), (0, i.$4X)(ve);
				class ge extends i.$3X {
					static {
						this.ID = C.$8W;
					}
					static {
						this.LABEL = "Next Prompt Bar";
					}
					constructor() {
						super({
							id: ge.ID,
							title: { value: "Next Prompt Bar", original: "Next Prompt Bar" },
							f1: !0,
						});
					}
					async run(ke, Ue, ...qe) {
						const Ae = ke.get(r.$dtb),
							Me = ke.get(s.$0zb),
							De = ke.get(b.$ek);
						let Re;
						const Ve = [...Me.nonPersistentStorage.promptBars].sort(
								(et, rt) => et.createdAt - rt.createdAt,
							),
							Ze = Ve.findIndex((et) => et.id === Ue);
						if (
							(Ze < Ve.length - 1 ? (Re = Ve[Ze + 1]) : (Re = Ve[0]),
							Re && Re.id !== Ue)
						)
							De.executeCommand(C.$hW, Re.id);
						else {
							const et = Ae.getActiveCodeEditor();
							if (!et || !et.hasModel()) return;
							et.focus();
						}
					}
				}
				(e.$Fec = ge),
					(0, i.$4X)(ge),
					(e.$Gec = "aipopup.action.insertEditSelection");
				class be extends i.$3X {
					static {
						this.ID = e.$Gec;
					}
					static {
						this.LABEL = "Insert Edit Selection";
					}
					constructor() {
						super({
							id: be.ID,
							title: {
								value: "Insert Edit Selection",
								original: "Insert Edit Selection",
							},
							f1: !0,
						});
					}
					async run(ke, Ue, ...qe) {
						const Ae = ke.get(r.$dtb),
							Me = ke.get(s.$0zb),
							De = Ae.getActiveCodeEditor(),
							Re = ke.get(b.$ek);
						if (!De) return;
						if (!De.hasModel()) {
							console.error("No model found, cannot edit.");
							return;
						}
						const je = De.getModel(),
							Ve = De.getSelection();
						if (!Ve) {
							console.error("No selection found, cannot edit.");
							return;
						}
						const Ze = ke.get(I.$zIb),
							et = await (0, v.$Wfc)({
								model: je,
								dataScrubbingService: Ze,
								inBoundsSelectionRange: Ve,
								dontScrub: !0,
							});
						!et ||
							(Me.setNonPersistentStorage(
								"promptBars",
								(ft) => ft.id === Ue,
								"data",
								"selections",
								(ft) => [...ft, et],
							),
							!Me.nonPersistentStorage.promptBars.find((ft) => ft.id === Ue)) ||
							Re.executeCommand(C.$hW, Ue);
					}
				}
				(e.$Hec = be), (0, i.$4X)(be);
				class Ce extends i.$3X {
					static {
						this.ID = C.$4W;
					}
					static {
						this.LABEL = "Accept Prompt Bar";
					}
					constructor() {
						super({
							id: Ce.ID,
							title: {
								value: "Accept Prompt Bar",
								original: "Accept Prompt Bar",
							},
							f1: !1,
						});
					}
					run(ke, Ue, ...qe) {
						const Ae = ke.get(s.$0zb),
							Me = ke.get(a.$27b),
							De = Ae.nonPersistentStorage.promptBars.find(
								(Re) => Re.id === Ue,
							);
						De !== void 0 && De.diffId !== void 0 && Me.acceptDiff(De.diffId);
					}
				}
				(e.$Iec = Ce), (0, i.$4X)(Ce);
				class Le extends i.$3X {
					static {
						this.ID = C.$5W;
					}
					static {
						this.LABEL = "Reject Prompt Bar";
					}
					constructor() {
						super({
							id: Le.ID,
							title: {
								value: "Reject Prompt Bar",
								original: "Reject Prompt Bar",
							},
							f1: !1,
						});
					}
					run(ke, Ue, qe, ...Ae) {
						const Me = ke.get(s.$0zb),
							De = ke.get(a.$27b),
							Re = ke.get(L.$d0b),
							je = Me.nonPersistentStorage.promptBars.find(
								(Ve) => Ve.id === Ue,
							);
						je !== void 0 &&
							(je.diffId !== void 0 && De.rejectDiff(je.diffId),
							qe?.removeFollowupToo && Re.removeFollowup(je.id));
					}
				}
				(e.$Jec = Le), (0, i.$4X)(Le);
				class Fe extends i.$3X {
					static {
						this.ID = C.$6W;
					}
					static {
						this.LABEL = "Cancel Prompt Bar";
					}
					constructor() {
						super({
							id: Fe.ID,
							title: {
								value: "Do Cancel Prompt Bar",
								original: "Do Cancel Prompt Bar",
							},
							f1: !1,
						});
					}
					run(ke, Ue, ...qe) {
						const Me = ke
							.get(s.$0zb)
							.nonPersistentStorage.promptBars.find((De) => De.id === Ue);
						Me !== void 0 && Me.abortController?.abort();
					}
				}
				(e.$Kec = Fe), (0, i.$4X)(Fe);
				class Oe extends i.$3X {
					static {
						this.ID = C.$RW;
					}
					static {
						this.LABEL = "Close Prompt Bar";
					}
					constructor() {
						super({
							id: Oe.ID,
							title: {
								value: "Close Prompt Bar",
								original: "Close Prompt Bar",
							},
							precondition: w.$Kj.and(
								g.EditorContextKeys.editorHasPromptBar.isEqualTo(!0),
								g.EditorContextKeys.editorPromptBarFocused.isEqualTo(!0),
							),
							keybinding: {
								when: g.EditorContextKeys.editorTextFocus,
								primary: t.KeyCode.Escape,
								weight: E.KeybindingWeight.EditorContrib + 2005,
							},
						});
					}
					run(ke, Ue, qe, ...Ae) {
						const Me = ke.get(s.$0zb),
							De = ke.get(a.$27b),
							Re = Me.nonPersistentStorage.promptBars.find(
								(Ze) => Ze.id === Ue,
							);
						if (!Re) return;
						const Ve = ke.get(r.$dtb).getActiveCodeEditor();
						if (Ve) {
							if (!Ve.hasModel()) {
								console.error("No model found, cannot edit.");
								return;
							}
							Re.diffId !== void 0
								? (Ve.focus(),
									qe &&
										(De.cancelDiff(Re.diffId),
										De.rejectDiff(Re.diffId, { close: qe ?? !1 })))
								: De.hidePromptBar(Ue);
						}
					}
				}
				(e.$Lec = Oe), (0, i.$4X)(Oe);
				class xe extends m.$itb {
					constructor() {
						super({
							id: C.$7W,
							label: "Cancel Inline Edit",
							alias: "Cancel Inline Edit",
							precondition:
								g.EditorContextKeys.hasActivelyGeneratingPromptBarDiff,
							kbOpts: {
								kbExpr: g.EditorContextKeys.editorTextFocus,
								primary: t.KeyMod.CtrlCmd | t.KeyCode.Backspace,
								weight: E.KeybindingWeight.EditorContrib + 2001,
							},
						});
					}
					run(ke, Ue, qe) {
						ke.get(l.$km).publicLogCapture("Cancelled Diff");
					}
				}
				(0, m.$ntb)(xe);
				class He extends i.$3X {
					static {
						this.ID = C.$UW;
					}
					static {
						this.LABEL = "Developer: Report Bad Command K Suggestion";
					}
					constructor() {
						super({
							id: He.ID,
							title: { value: He.LABEL, original: He.LABEL },
							f1: !0,
						});
					}
					async run(ke, ...Ue) {
						const qe = ke.get(B.$Nfc),
							Me = qe.getPastGenerations().find((De) => De.type === "cmdk");
						Me === void 0
							? console.error(
									"No cmd-k generation found, cannot report bad suggestion.",
								)
							: qe.reportGenerationFeedback(
									Me.generationUUID,
									U.ReportGenerationFeedbackRequest_FeedbackType.THUMBS_DOWN,
								);
					}
				}
				(e.$Mec = He), (0, i.$4X)(He);
				class Ke extends i.$3X {
					static {
						this.ID = C.$VW;
					}
					static {
						this.LABEL = "Developer: Report Good Command K Suggestion";
					}
					constructor() {
						super({
							id: Ke.ID,
							title: { value: Ke.LABEL, original: Ke.LABEL },
							f1: !0,
						});
					}
					async run(ke, ...Ue) {
						const qe = ke.get(B.$Nfc),
							Me = qe.getPastGenerations().find((De) => De.type === "cmdk");
						Me === void 0
							? console.error(
									"No cmd-k generation found, cannot report good suggestion.",
								)
							: qe.reportGenerationFeedback(
									Me.generationUUID,
									U.ReportGenerationFeedbackRequest_FeedbackType.THUMBS_UP,
								);
					}
				}
				(e.$Nec = Ke), (0, i.$4X)(Ke);
				class Je extends i.$3X {
					static {
						this.ID = C.$WW;
					}
					static {
						this.LABEL = "Developer: Report Bad AI Action";
					}
					constructor() {
						super({
							id: Je.ID,
							title: { value: Je.LABEL, original: Je.LABEL },
							f1: !0,
						});
					}
					async run(ke, ...Ue) {
						const qe = ke.get(B.$Nfc),
							Me = qe.getPastGenerations()[0];
						Me === void 0
							? console.error(
									"No AI action generation found, cannot report bad action.",
								)
							: qe.reportGenerationFeedback(
									Me.generationUUID,
									U.ReportGenerationFeedbackRequest_FeedbackType.THUMBS_DOWN,
								);
					}
				}
				(e.$Oec = Je), (0, i.$4X)(Je);
				class Te extends i.$3X {
					static {
						this.ID = C.$XW;
					}
					static {
						this.LABEL = "Developer: Report Good AI Action";
					}
					constructor() {
						super({
							id: Te.ID,
							title: { value: Te.LABEL, original: Te.LABEL },
							f1: !0,
						});
					}
					async run(ke, ...Ue) {
						const qe = ke.get(B.$Nfc),
							Me = qe.getPastGenerations()[0];
						Me === void 0
							? console.error(
									"No AI action generation found, cannot report good action.",
								)
							: qe.reportGenerationFeedback(
									Me.generationUUID,
									U.ReportGenerationFeedbackRequest_FeedbackType.THUMBS_UP,
								);
					}
				}
				(e.$Pec = Te), (0, i.$4X)(Te);
				class Ee extends i.$3X {
					static {
						this.ID = "workbench.action.getLastRunningCmdKID";
					}
					static {
						this.LABEL = "Developer: Get Last Command K ID";
					}
					constructor() {
						super({
							id: Ee.ID,
							title: { value: Ee.LABEL, original: "Get Last Command K ID" },
							f1: !0,
						});
					}
					async run(ke) {
						const Ue = ke.get(B.$Nfc),
							qe = ke.get(z.$4N),
							Ae = ke.get(F.$Vxb),
							De = Ue.getPastGenerations().find((Re) => Re.type === "cmdk");
						De
							? (qe.info(`Running Command K ID: ${De.generationUUID}`),
								Ae.writeText(De.generationUUID))
							: qe.error("No running cmd-k generation found.");
					}
				}
				(e.$Qec = Ee), (0, i.$4X)(Ee);
				class Ie extends i.$3X {
					static {
						this.ID = "workbench.action.getLastRunningAiActionID";
					}
					static {
						this.LABEL = "Developer: Get Last Running AI Action ID";
					}
					constructor() {
						super({
							id: Ie.ID,
							title: {
								value: Ie.LABEL,
								original: "Get Last Running AI Action ID",
							},
							f1: !0,
						});
					}
					async run(ke) {
						const Ue = ke.get(B.$Nfc),
							qe = ke.get(z.$4N),
							Ae = ke.get(F.$Vxb),
							De = Ue.getPastGenerations()[0];
						De
							? (qe.info(`Last Ai Action ID: ${De.generationUUID}`),
								Ae.writeText(De.generationUUID))
							: qe.error("No running cmd-k generation found.");
					}
				}
				(e.$Rec = Ie), (0, i.$4X)(Ie);
				class Be extends i.$3X {
					static {
						this.ID = "workbench.action.openLastCmdKPrompt";
					}
					static {
						this.LABEL = "Developer: Open Last Command K Prompt in Dashboard";
					}
					constructor() {
						super({
							id: Be.ID,
							title: {
								value: Be.LABEL,
								original: "Open Last Command K Prompt",
							},
							f1: !0,
						});
					}
					async run(ke) {
						const Ue = ke.get(B.$Nfc),
							qe = ke.get(x.$7rb),
							Me = Ue.getPastGenerations().find((De) => De.type === "cmdk");
						Me && Me.type === "cmdk"
							? qe.open(
									`http://localhost:3142/promptQuality?reqId=${Me.generationUUID}`,
								)
							: console.error("No cmd-k generation found.");
					}
				}
				e.$Sec = Be;
			},
		),
		define(
			de[866],
			he([1, 0, 7, 159, 58, 6, 3, 56, 38, 499, 4, 31, 39, 45, 4369, 12, 2288]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pbc = e.$mbc = void 0),
					(e.$nbc = o),
					(e.$obc = f),
					(t = mt(t)),
					(u = mt(u)),
					(e.$mbc = "aichat.insertselectionintochat");
				var p;
				(function (s) {
					let l;
					(function ($) {
						($[($.Hidden = 0)] = "Hidden"), ($[($.Showing = 1)] = "Showing");
					})((l = s.Type || (s.Type = {}))),
						(s.Hidden = { type: l.Hidden });
					class y {
						constructor(v, S) {
							(this.editorPosition = v),
								(this.widgetPosition = S),
								(this.type = l.Showing);
						}
					}
					s.Showing = y;
				})(p || (p = {}));
				function o(s) {
					const l = f(s) - 80;
					let $ = s.getOption(m.EditorOption.fontInfo).spaceWidth;
					return Math.floor(l / $);
				}
				function f(s) {
					let l = s.getLayoutInfo(),
						y = l.width - 50,
						$ = l.decorationsWidth + l.verticalScrollbarWidth;
					return y - $;
				}
				let b = class extends C.$1c {
					constructor(l, y, $, v) {
						super(),
							(this.u = l),
							(this.w = y),
							(this.z = v),
							(this.n = this.D(new E.$re())),
							(this.onClick = this.n.event),
							(this.q = p.Hidden),
							(this.isWordWrap = !1),
							(this.a = t.$("div.cursorHoverWidget")),
							(this.h = t.$fhb(this.a, t.$("div.cursorCppHint"))),
							(this.h.style.display = "none"),
							g.$x === g.Platform.Windows
								? (this.h.textContent = "Hold alt for suggestion")
								: (this.h.textContent = "Hold option \u2325 for suggestion"),
							(this.j = t.$fhb(this.a, t.$("div.cursorCppHint"))),
							(this.j.style.display = "none"),
							(this.j.textContent = "Key up to revert, \u21B5 to accept"),
							(this.m = t.$fhb(this.a, t.$("div.buttonContainer"))),
							(this.c = this._createButton(this.m, w.$dX, "Chat")),
							(this.f = this._createButton(this.m, e.$mbc, "Add to Chat")),
							(this.g = this._createButton(
								this.m,
								r.$t7b,
								"Add to Edit",
								this.w.lookupKeybindings(r.$t7b).at(-1),
							)),
							(this.b = this._createButton(this.m, r.$t7b, "Edit")),
							this.D(
								y.onDidUpdateKeybindings(() => {
									this.setText(this.c, w.$dX, "Chat"),
										this.setText(this.f, e.$mbc, "Add to Chat"),
										this.setText(
											this.g,
											r.$t7b,
											"Add to Edit",
											this.w.lookupKeybindings(r.$t7b).at(-1),
										),
										this.setText(this.b, r.$t7b, "Edit");
								}),
							),
							this.D(i.$Qhb.ignoreTarget(this.a)),
							this.u.addContentWidget(this),
							(this.t = this.D(this.z.createScoped(this))),
							this.t.onChangeEffect({
								deps: [
									() => this.z.nonPersistentStorage.shouldShowInsertChatWidget,
									() => this.z.nonPersistentStorage.promptBars,
								],
								onChange: () => {
									this._update();
								},
								runNowToo: !0,
							}),
							this.t.onChangeEffect({
								deps: [
									() => this.z.nonPersistentStorage.cppState,
									() => this.z.nonPersistentStorage.cppState?.suggestion,
								],
								onChange: () => {
									this.update();
								},
								runNowToo: !0,
							}),
							this.t.onChangeEffect({
								deps: [
									() =>
										this.z.applicationUserPersistentStorage.composerState
											.isComposerEnabled2,
								],
								onChange: () => {
									this._update();
								},
								runNowToo: !0,
							}),
							this.D(
								this.u.onDidChangeModelContent((S) => {
									const I = this.u.getModel();
									(this.C.type !== p.Type.Showing ||
										!I ||
										this.C.editorPosition.lineNumber >= I.getLineCount()) &&
										this.hide();
								}),
							),
							this.D(
								t.$_fb(this.b, (S) => {
									this.C.type === p.Type.Showing &&
										(S.stopPropagation(),
										$.executeCommand(r.$t7b).then(() => {}));
								}),
							),
							this.D(
								t.$_fb(this.c, (S) => {
									this.C.type === p.Type.Showing &&
										(S.stopPropagation(), $.executeCommand(w.$dX, "editor"));
								}),
							),
							this.D(
								t.$_fb(this.f, (S) => {
									this.C.type === p.Type.Showing &&
										(S.stopPropagation(), $.executeCommand(e.$mbc, "editor"));
								}),
							),
							this.D(
								t.$_fb(this.g, (S) => {
									if (
										this.C.type === p.Type.Showing &&
										(S.stopPropagation(),
										v.nonPersistentStorage.promptBars.length > 0)
									) {
										const I = this.z.nonPersistentStorage.promptBars.at(-1);
										I &&
											$.executeCommand(n.$Gec, I.id).then(() => {
												setTimeout(() => {
													$.executeCommand(w.$hW, I.id).then(() => {});
												}, 100);
											});
									}
								}),
							),
							this.D(
								t.$0fb(this.a, "mouseenter", (S) => {
									(S.buttons & 1) === 1 && this.hide();
								}),
							),
							this.D(this.u.onDidBlurEditorText(() => this.hide()));
					}
					_createButton(l, y, $, v) {
						const S = t.$fhb(l, t.$("button.hoverButton")),
							I = t.$fhb(S, t.$("span"));
						I.textContent = $;
						const T = t.$fhb(S, t.$("span.commandHelpText"));
						v = v ?? this.w.lookupKeybinding(y);
						const P = v?.getLabel() || "";
						return (T.textContent = P), S;
					}
					setText(l, y, $, v) {
						const S = l.querySelector("span");
						S && (S.textContent = $);
						const I = l.querySelector("span.commandHelpText");
						v = v ?? this.w.lookupKeybinding(y);
						const T = v?.getLabel() || "";
						I && (I.textContent = T);
					}
					_update() {
						this.z.nonPersistentStorage.shouldShowInsertChatWidget
							? (this.f.classList.remove("cursorHiddenButton"),
								this.c.classList.add("cursorHiddenButton"))
							: (this.f.classList.add("cursorHiddenButton"),
								this.c.classList.remove("cursorHiddenButton")),
							this.z.nonPersistentStorage.promptBars.length === 0
								? (this.g.classList.add("cursorHiddenButton"),
									this.b.classList.remove("cursorHiddenButton"))
								: (this.g.classList.remove("cursorHiddenButton"),
									this.b.classList.add("cursorHiddenButton"));
					}
					dispose() {
						super.dispose(), this.u.removeContentWidget(this);
					}
					getId() {
						return "HoverWidget";
					}
					getDomNode() {
						return this.a;
					}
					getPosition() {
						return this.q.type === p.Type.Showing
							? this.q.widgetPosition
							: null;
					}
					updateShowingElements() {
						const l = this.u.getModel();
						if (!l) return;
						const y = this.z.nonPersistentStorage.cppState?.suggestion;
						y === void 0 || y?.uri.toString() !== l.uri.toString()
							? ((this.h.style.display = "none"),
								(this.m.style.display = "flex"),
								(this.j.style.display = "none"))
							: y.suggestionIsCurrentlyHidden
								? ((this.h.style.display = "none"),
									(this.m.style.display = "none"),
									(this.j.style.display = "none"))
								: ((this.j.style.display = "none"),
									(this.m.style.display = "none"),
									(this.h.style.display = "none"));
					}
					update() {
						const l = this.u.getOptions(),
							y = this.u.getModel();
						if (!y) return this.hide();
						let $ = Number.MAX_VALUE;
						const v = this.u.getSelection();
						if (
							(v === null || v.isEmpty()) &&
							this.z.nonPersistentStorage.cppState?.suggestion?.uri.toString() !==
								y.uri.toString()
						)
							return this.hide();
						if (!this.u.hasTextFocus() && !this.u.hasWidgetFocus())
							return this.hide();
						this.updateShowingElements();
						const S = this.u.getPosition();
						if (!S) return this.hide();
						const { lineNumber: I } = y.validatePosition(S),
							T = v === null ? I : v.endLineNumber;
						let P = Math.max(
								1,
								Math.min(
									y.getLineCount(),
									S.lineNumber < 4 ? T + 3 : S.lineNumber - 2,
								),
							),
							k = S.column;
						const L = 25,
							D =
								v === null
									? S.lineNumber - 1
									: Math.max(
											S.lineNumber - 2,
											Math.floor(v.endLineNumber + v.startLineNumber) / 2 - 1,
										),
							M = this.isWordWrap ? 3 : 2,
							N = Math.max(1, S.lineNumber - M),
							A = Math.min(y.getLineCount() - 1, S.lineNumber + M);
						let R = d.ContentWidgetPositionPreference.ABOVE;
						const O = o(this.u) - 10,
							B = (U, z, F, x) => {
								if (F !== U || y.getLineLength(Math.max(1, F)) >= O) return;
								const H = Math.abs(z - 5) + Math.abs(U - D) * L;
								H < $ && (($ = H), (P = F), (k = z), (R = x));
							};
						for (let U = N; U <= A; U++) {
							let z = 0,
								F = 0;
							for (let x = U - 2; x <= U; x++) {
								const H = y.getLineLength(Math.max(1, x));
								H > z && ((z = H), (F = x));
							}
							B(U, z, F, d.ContentWidgetPositionPreference.ABOVE),
								(z = 0),
								(F = 0);
							for (let x = U; x <= U + 2; x++) {
								const H = y.getLineLength(Math.min(y.getLineCount(), x));
								H > z && ((z = H), (F = x));
							}
							B(U, z, F, d.ContentWidgetPositionPreference.BELOW),
								(z = 0),
								(F = 0);
							for (let x = U - 1; x <= U + 1; x++) {
								const H = y.getLineLength(
									Math.max(1, Math.min(y.getLineCount(), x)),
								);
								H > z && ((z = H), (F = x));
							}
							B(U, z, F, d.ContentWidgetPositionPreference.EXACT);
						}
						(this.C = new p.Showing(S, {
							position: { lineNumber: P, column: k + 2 },
							preference: [R],
						})),
							this.u.layoutContentWidget(this);
					}
					hide() {
						this.C !== p.Hidden &&
							((this.C = p.Hidden), this.u.layoutContentWidget(this));
					}
					get C() {
						return this.q;
					}
					set C(l) {
						(this.q = l), this.F();
					}
					F() {
						if (this.C.type === p.Type.Showing && this.r) {
							this.G = u.localize(877, null, this.r);
							return;
						}
						this.s
							? (this.G = u.localize(878, null, this.s))
							: (this.G = u.localize(879, null));
					}
					set G(l) {
						this.a.title = l;
					}
				};
				(e.$pbc = b),
					(e.$pbc = b = Ne([j(1, h.$uZ), j(2, a.$ek), j(3, c.$0zb)], b));
			},
		),
		define(
			de[2003],
			he([1, 0, 46, 149, 3, 38, 71, 69, 866, 8, 5, 90, 45, 10]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				var n;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$slc = void 0);
				let g = class extends w.$1c {
					static {
						n = this;
					}
					static {
						this.ID = "editor.contrib.hoverController";
					}
					static get(o) {
						return o.getContribution(n.ID);
					}
					constructor(o, f, b, s, l, y, $) {
						super(),
							(this.h = s),
							(this.j = y),
							(this.m = $),
							(this.f = !1),
							(this.g = !1),
							(this.a = o),
							(this.c = C.EditorContextKeys.hasActivelyGeneratingDiff.bindTo(
								o.contextKeyService,
							)),
							this.D(this.a.onDidChangeModel(() => this.r())),
							this.D(this.a.onDidChangeModelLanguage(() => this.r())),
							this.D(this.a.onDidBlurEditorText(() => this.r())),
							this.D(this.a.onDidBlurEditorWidget(() => this.r())),
							this.D(this.a.onDidChangeCursorPosition(() => this.r())),
							this.D(
								this.a.onMouseDown(() => {
									(this.g = !0), this.r();
								}),
							),
							this.D(
								this.a.onMouseUp(() => {
									(this.g = !1), this.r();
								}),
							),
							(this.b = new i.$Y(() => {
								const S = this.D(s.createInstance(m.$pbc, this.a));
								return this.D(S.onClick((I) => {})), S;
							})),
							this.D(
								b.onDidChangeContext((S) => {
									S.affectsSome(
										new Set([
											C.EditorContextKeys.hasActivelyGeneratingDiff.key,
										]),
									) &&
										this.c.get() &&
										this.b.value.hide();
								}),
							),
							(this.reactiveStorageRoot = this.D(this.j.createScoped(this))),
							this.reactiveStorageRoot.onChangeEffect({
								deps: [
									() =>
										this.j.applicationUserPersistentStorage.hideChatEditTooltip,
								],
								onChange: () => {
									this.r();
								},
							});
						const v = () => {
							const S = this.a.getOptions(),
								I = S.get(E.EditorOption.wordWrapOverride2),
								T =
									I === "inherit" ? S.get(E.EditorOption.wordWrapOverride1) : I,
								k =
									(T === "inherit" ? S.get(E.EditorOption.wordWrap) : T) !==
									"off";
							this.b.value.isWordWrap = k;
						};
						if (
							(v(),
							this.D(
								this.a.onDidChangeConfiguration((S) => {
									v();
								}),
							),
							this.r(),
							!o.shouldShowHover)
						) {
							this.f = !0;
							return;
						}
					}
					n() {
						if (!this.a.hasModel()) return;
						const o = this.a.getModel(),
							f = this.a.getSelection();
						if (f.isEmpty()) {
							const { lineNumber: b, column: s } = f.getPosition(),
								l = o.getLineContent(b);
							if (l.length === 0) return;
							if (s === 1) {
								if (/\s/.test(l[0])) return;
							} else if (s === o.getLineMaxColumn(b)) {
								if (/\s/.test(l[l.length - 1])) return;
							} else if (/\s/.test(l[s - 2]) && /\s/.test(l[s - 1])) return;
						}
						return f;
					}
					q(o) {
						return o.startLineNumber !== o.endLineNumber;
					}
					r() {
						if (!this.a.shouldShowHover || this.f) return;
						if (
							this.a.getModel() &&
							!this.a.getOption(E.EditorOption.readOnly)
						) {
							const f = this.n();
							!this.g &&
							f &&
							this.j.applicationUserPersistentStorage.hideChatEditTooltip !== !0
								? this.b.value.update()
								: this.b.value.hide();
						}
					}
				};
				(e.$slc = g),
					(e.$slc =
						g =
						n =
							Ne(
								[
									j(1, a.$aM),
									j(2, r.$6j),
									j(3, u.$Li),
									j(4, d.$k3),
									j(5, h.$0zb),
									j(6, c.$gj),
								],
								g,
							)),
					(0, t.$qtb)(g.ID, g, t.EditorContributionInstantiation.Eventually);
			},
		),
		define(
			de[4370],
			he([
				1, 0, 498, 206, 2905, 2800, 1684, 2801, 2802, 787, 2908, 1686, 3607,
				2911, 2803, 375, 2804, 1687, 2918, 2919, 618, 350, 2808, 1649, 2740,
				3933, 1220, 1036, 1037, 857, 4115, 1644, 3610, 2913, 2810, 1645, 2920,
				963, 2811, 1788, 2917, 2933, 1207, 2861, 2863, 2921, 2864, 956, 1646,
				254, 3612, 328, 2927, 2813, 1635, 3221, 1647, 964, 1648, 2814, 2812,
				2805, 1983, 2003, 3937, 3167, 1348, 2860, 2858, 4367, 2879, 3935, 1241,
				761, 1135, 2244,
			]),
			function (ce, e) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
			},
		),
		define(
			de[4371],
			he([
				1, 0, 4, 82, 28, 718, 44, 549, 296, 1226, 32, 21, 125, 5, 35, 85, 98,
				30, 9, 66, 18, 116, 8, 19, 7, 22, 131, 162, 309, 46, 1983, 1348, 851,
				2003, 216,
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
				M,
				N,
				A,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerDiffEditor = e.COMPOSER_DIFF_EDITOR_ID = void 0),
					(e.COMPOSER_DIFF_EDITOR_ID = "workbench.editors.composerDiffEditor");
				let R = class extends E.$BVb {
					static {
						this.ID = e.COMPOSER_DIFF_EDITOR_ID;
					}
					get scopedContextKeyService() {
						if (!this.diffEditorControl) return;
						const B = this.diffEditorControl.getOriginalEditor(),
							U = this.diffEditorControl.getModifiedEditor();
						return (B.hasTextFocus() ? B : U).invokeWithinContext((z) =>
							z.get(y.$6j),
						);
					}
					constructor(B, U, z, F, x, H, q, V, G, K) {
						super(e.COMPOSER_DIFF_EDITOR_ID, B, U, z, F, x, q, H, V, G),
							(this.preferencesService = K),
							(this.diffEditorControl = void 0),
							(this.inputLifecycleStopWatch = void 0),
							(this._previousViewModel = null);
					}
					getTitle() {
						return this.input
							? this.input.getName()
							: (0, t.localize)(5119, null);
					}
					Lb(B, U) {
						const z =
							k.EditorExtensionsRegistry.getEditorContributions().filter(
								(F) =>
									F.id !== L.$qlc.ID &&
									F.id !== D.$Plc.ID &&
									F.id !== M.$Ddc.ID &&
									F.id !== N.$slc.ID,
							);
						this.diffEditorControl = this.D(
							this.m.createInstance(P.$3yb, B, U, {
								originalEditor: { isSimpleWidget: !0, contributions: [] },
								modifiedEditor: { contributions: z },
							}),
						);
					}
					Mb(B) {
						this.diffEditorControl?.updateOptions(B);
					}
					Nb() {
						return this.diffEditorControl?.getModifiedEditor();
					}
					async setInput(B, U, z, F) {
						this._previousViewModel &&
							(this._previousViewModel.dispose(),
							(this._previousViewModel = null)),
							(this.inputLifecycleStopWatch = void 0),
							await super.setInput(B, U, z, F);
						try {
							const x = await B.resolve();
							if (F.isCancellationRequested) return;
							if (!(x instanceof r.$FVb)) {
								this.openAsBinary(B, U);
								return;
							}
							const H = (0, w.$wg)(this.diffEditorControl),
								q = x,
								V = q.textDiffEditorModel
									? H.createViewModel(q.textDiffEditorModel)
									: null;
							(this._previousViewModel = V),
								await V?.waitForDiff(),
								H.setModel(V);
							let G = !1;
							(0, C.$C1)(U?.viewState) ||
								(G = this.restoreTextDiffEditorViewState(B, U, z, H));
							let K = !1;
							U &&
								(K = (0, d.applyTextEditorOptions)(
									U,
									H,
									p.ScrollType.Immediate,
								)),
								!K && !G && H.revealFirstDiff(),
								H.updateOptions({
									...this.Gb(q.modifiedModel?.isReadonly()),
									originalEditable: !q.originalModel?.isReadonly(),
								}),
								H.handleInitialized(),
								(this.inputLifecycleStopWatch = new T.$le(!1));
						} catch (x) {
							await this.handleSetInputError(x, B, U);
						}
					}
					async handleSetInputError(B, U, z) {
						if (this.isFileBinaryError(B)) return this.openAsBinary(U, z);
						if (
							B.fileOperationResult === S.FileOperationResult.FILE_TOO_LARGE
						) {
							let F;
							throw (
								(B instanceof S.$Hl
									? (F = (0, t.localize)(5120, null, S.$Tl.formatSize(B.size)))
									: (F = (0, t.localize)(5121, null)),
								(0, C.$u1)(this.group, U, z, F, this.preferencesService))
							);
						}
						throw B;
					}
					restoreTextDiffEditorViewState(B, U, z, F) {
						const x = this.jb(B, z);
						return x
							? (U?.selection && x.modified && (x.modified.cursorState = []),
								F.restoreViewState(x),
								U?.revealIfVisible && F.revealFirstDiff(),
								!0)
							: !1;
					}
					openAsBinary(B, U) {
						const z = B.original,
							F = B.modified,
							x = this.m.createInstance(
								m.$GVb,
								B.getName(),
								B.getDescription(),
								z,
								F,
								!0,
							),
							H = o.$Io.as(C.$a1.EditorFactory).getFileEditorFactory();
						H.isFileEditor(z) && z.setForceOpenAsBinary(),
							H.isFileEditor(F) && F.setForceOpenAsBinary(),
							this.group.replaceEditors([
								{
									editor: B,
									replacement: x,
									options: {
										...U,
										activation: l.EditorActivation.PRESERVE,
										pinned: this.group.isPinned(B),
										sticky: this.group.isSticky(B),
									},
								},
							]);
					}
					setOptions(B) {
						super.setOptions(B),
							B &&
								(0, d.applyTextEditorOptions)(
									B,
									(0, w.$wg)(this.diffEditorControl),
									p.ScrollType.Smooth,
								);
					}
					zb(B, U) {
						return super.zb(B, U)
							? !0
							: B.affectsConfiguration(U, "diffEditor") ||
									B.affectsConfiguration(
										U,
										"accessibility.verbosity.diffEditor",
									);
					}
					Bb(B) {
						const U = super.Bb(B);
						if ((0, w.$ng)(B.diffEditor)) {
							const F = (0, i.$vo)(B.diffEditor);
							(F.diffCodeLens = F.codeLens),
								delete F.codeLens,
								(F.diffWordWrap = F.wordWrap),
								delete F.wordWrap,
								Object.assign(U, F);
						}
						U.hideUnchangedRegions = {
							enabled: !0,
							revealLineCount: 10,
							minimumLineCount: 10,
							contextLineCount: 10,
						};
						const z = B.accessibility?.verbosity?.diffEditor ?? !1;
						return (U.accessibilityVerbose = z), U;
					}
					Hb(B) {
						return {
							...super.Hb(B),
							...this.Gb(this.input?.isReadonly()),
							originalEditable:
								this.input instanceof m.$GVb &&
								!this.input.original.isReadonly(),
							lineDecorationsWidth: "2ch",
						};
					}
					Fb(B) {
						B instanceof m.$GVb
							? this.diffEditorControl?.updateOptions({
									...this.Gb(B.isReadonly()),
									originalEditable: !B.original.isReadonly(),
								})
							: super.Fb(B);
					}
					isFileBinaryError(B) {
						return Array.isArray(B)
							? B.some((z) => this.isFileBinaryError(z))
							: B.textFileOperationResult ===
									g.TextFileOperationResult.FILE_IS_BINARY;
					}
					clearInput() {
						this._previousViewModel &&
							(this._previousViewModel.dispose(),
							(this._previousViewModel = null)),
							super.clearInput();
						const B = this.inputLifecycleStopWatch?.elapsed();
						(this.inputLifecycleStopWatch = void 0),
							typeof B == "number" &&
								this.logInputLifecycleTelemetry(
									B,
									this.getControl()?.getModel()?.modified?.getLanguageId(),
								),
							this.diffEditorControl?.setModel(null),
							this.input?.dispose();
					}
					logInputLifecycleTelemetry(B, U) {
						let z = !1;
						this.diffEditorControl instanceof P.$3yb &&
							(z = this.diffEditorControl.collapseUnchangedRegions),
							this.Q.publicLog2("diffEditor.editorVisibleTime", {
								editorVisibleTimeMs: B,
								languageId: U ?? "",
								collapseUnchangedRegions: z,
							});
					}
					getControl() {
						return this.diffEditorControl;
					}
					focus() {
						super.focus(), this.diffEditorControl?.focus();
					}
					hasFocus() {
						return this.diffEditorControl?.hasTextFocus() || super.hasFocus();
					}
					Z(B) {
						super.Z(B),
							B
								? this.diffEditorControl?.onVisible()
								: this.diffEditorControl?.onHide();
					}
					layout(B) {
						this.diffEditorControl?.layout(B);
					}
					setBoundarySashes(B) {
						this.diffEditorControl?.setBoundarySashes(B);
					}
					nb(B) {
						return B instanceof m.$GVb;
					}
					mb(B) {
						if (!this.diffEditorControl) return;
						const U = this.diffEditorControl.getModel();
						if (!U || !U.modified || !U.original) return;
						const z = this.pb(U);
						if (z && (0, $.$gh)(z, B))
							return this.diffEditorControl.saveViewState() ?? void 0;
					}
					pb(B) {
						let U, z;
						if (
							(B instanceof m.$GVb
								? ((U = B.original.resource), (z = B.modified.resource))
								: (0, C.$r1)(B) || ((U = B.original.uri), (z = B.modified.uri)),
							!(!U || !z))
						)
							return f.URI.from({
								scheme: "diff",
								path: `${(0, v.$Ehb)(U.toString())}${(0, v.$Ehb)(z.toString())}`,
							});
					}
				};
				(e.ComposerDiffEditor = R),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.createEditorControl")],
						R.prototype,
						"Lb",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.updateEditorControlOptions")],
						R.prototype,
						"Mb",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.getMainControl")],
						R.prototype,
						"Nb",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.setInput")],
						R.prototype,
						"setInput",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.handleSetInputError")],
						R.prototype,
						"handleSetInputError",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.restoreTextDiffEditorViewState")],
						R.prototype,
						"restoreTextDiffEditorViewState",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.openAsBinary")],
						R.prototype,
						"openAsBinary",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.setOptions")],
						R.prototype,
						"setOptions",
						null,
					),
					Ne(
						[
							(0, A.$KOb)(
								"ComposerDiffEditor.shouldHandleConfigurationChangeEvent",
							),
						],
						R.prototype,
						"zb",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.computeConfiguration")],
						R.prototype,
						"Bb",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.getConfigurationOverrides")],
						R.prototype,
						"Hb",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.updateReadonly")],
						R.prototype,
						"Fb",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.clearInput")],
						R.prototype,
						"clearInput",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.logInputLifecycleTelemetry")],
						R.prototype,
						"logInputLifecycleTelemetry",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.getControl")],
						R.prototype,
						"getControl",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.focus")],
						R.prototype,
						"focus",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.hasFocus")],
						R.prototype,
						"hasFocus",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.setEditorVisible")],
						R.prototype,
						"Z",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.layout")],
						R.prototype,
						"layout",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.setBoundarySashes")],
						R.prototype,
						"setBoundarySashes",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.tracksEditorViewState")],
						R.prototype,
						"nb",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.computeEditorViewState")],
						R.prototype,
						"mb",
						null,
					),
					Ne(
						[(0, A.$KOb)("ComposerDiffEditor.toEditorViewStateResource")],
						R.prototype,
						"pb",
						null,
					),
					(e.ComposerDiffEditor = R =
						Ne(
							[
								j(1, u.$km),
								j(2, c.$Li),
								j(3, a.$lq),
								j(4, h.$XO),
								j(5, s.$IY),
								j(6, n.$iP),
								j(7, b.$EY),
								j(8, S.$ll),
								j(9, I.$7Z),
							],
							R,
						));
			},
		),
		define(
			de[4372],
			he([1, 0, 30, 192, 4371, 1828, 102, 44]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					t.$Io
						.as(d.$a1.EditorPane)
						.registerEditorPane(
							i.$vVb.create(
								w.ComposerDiffEditor,
								w.ComposerDiffEditor.ID,
								"Composer Diff Editor",
							),
							[new C.$Ji(E.ComposerDiffEditorInput)],
						);
			},
		),
		define(
			de[1074],
			he([
				1, 0, 139, 193, 459, 323, 7, 114, 277, 203, 15, 14, 138, 29, 6, 27, 222,
				3, 23, 54, 12, 195, 9, 653, 4, 91, 184, 121, 31, 10, 8, 347, 22, 5, 128,
				39, 390, 40, 41, 62, 63, 21, 32, 189, 675, 774, 117, 776, 51, 79, 35,
				25, 174, 123, 60, 89, 130, 107, 363, 833, 378, 514, 3580, 3567, 806,
				690, 1760, 3147, 1299, 1314, 145, 512, 237, 1262, 18, 78, 245, 96, 165,
				131, 536, 97, 512, 866, 45, 4368, 47, 670, 205, 471, 58, 13, 720, 417,
				469, 3149, 308, 1610, 332, 3752, 3957, 1759, 87, 169, 3145, 995, 616,
				49, 219,
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
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
				Y,
				ie,
				ne,
				ee,
				_,
				te,
				Q,
				Z,
				se,
				re,
				le,
				oe,
				ae,
				pe,
				$e,
				ye,
				ue,
				fe,
				me,
				ve,
				ge,
				be,
				Ce,
				Le,
				Fe,
				Oe,
				xe,
				He,
				Ke,
				Je,
				Te,
				Ee,
				Ie,
				Be,
				Se,
				ke,
				Ue,
				qe,
				Ae,
				Me,
				De,
				Re,
				je,
				Ve,
				Ze,
				et,
				rt,
				ft,
				bt,
				nt,
				lt,
				ct,
				gt,
				ht,
				Rt,
				Nt,
				jt,
				ti,
				kt,
			) {
				"use strict";
				var hi;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rVc = e.$pVc = e.$oVc = void 0),
					(e.$qVc = Vt),
					(C = mt(C)),
					(b = mt(b)),
					(v = mt(v));
				var Kt;
				(function (Gt) {
					(Gt[(Gt.WaitForContainerThreshold = 100)] =
						"WaitForContainerThreshold"),
						(Gt[(Gt.DefaultCols = 80)] = "DefaultCols"),
						(Gt[(Gt.DefaultRows = 30)] = "DefaultRows"),
						(Gt[(Gt.MaxCanvasWidth = 4096)] = "MaxCanvasWidth");
				})(Kt || (Kt = {}));
				let di;
				const Ye = [
						K.PosixShellType.Bash,
						K.PosixShellType.Zsh,
						K.GeneralShellType.PowerShell,
						K.GeneralShellType.Python,
					],
					ze = "error";
				let Xe = class extends o.$1c {
					static {
						hi = this;
					}
					static {
						this.j = 1;
					}
					get domElement() {
						return this.ib;
					}
					get usedShellIntegrationInjection() {
						return this.Sb;
					}
					pauseInputEvents(Mt) {
						this.ac = Mt;
					}
					get store() {
						return this.B;
					}
					get extEnvironmentVariableCollection() {
						return this.n.extEnvironmentVariableCollection;
					}
					get waitOnExit() {
						return (
							this.Cc.attachPersistentProcess?.waitOnExit || this.Cc.waitOnExit
						);
					}
					set waitOnExit(Mt) {
						this.Cc.waitOnExit = Mt;
					}
					get target() {
						return this.Rb;
					}
					set target(Mt) {
						(this.Rb = Mt), this.wc.fire(Mt);
					}
					get instanceId() {
						return this.w;
					}
					get resource() {
						return this.s;
					}
					get cols() {
						return this.rb !== void 0
							? this.rb
							: this.xb && this.xb.cols
								? this.xb.forceExactSize
									? this.xb.cols
									: Math.min(Math.max(this.xb.cols, 2), this.pb)
								: this.pb;
					}
					get rows() {
						return this.sb !== void 0
							? this.sb
							: this.xb && this.xb.rows
								? this.xb.forceExactSize
									? this.xb.rows
									: Math.min(Math.max(this.xb.rows, 2), this.qb)
								: this.qb;
					}
					get isDisposed() {
						return this.B.isDisposed;
					}
					get fixedCols() {
						return this.rb;
					}
					get fixedRows() {
						return this.sb;
					}
					get maxCols() {
						return this.pb;
					}
					get maxRows() {
						return this.qb;
					}
					get processId() {
						return this.n.shellProcessId;
					}
					get processReady() {
						return this.n.ptyProcessReady;
					}
					get hasChildProcesses() {
						return (
							this.shellLaunchConfig.attachPersistentProcess
								?.hasChildProcesses || this.n.hasChildProcesses
						);
					}
					get reconnectionProperties() {
						return (
							this.shellLaunchConfig.attachPersistentProcess
								?.reconnectionProperties ||
							this.shellLaunchConfig.reconnectionProperties
						);
					}
					get areLinksReady() {
						return this.yb;
					}
					get initialDataEvents() {
						return this.Ab;
					}
					get exitCode() {
						return this.I;
					}
					get exitReason() {
						return this.J;
					}
					get hadFocusOnExit() {
						return this.G;
					}
					get isTitleSetByProcess() {
						return !!this.Eb.value;
					}
					get shellLaunchConfig() {
						return this.Cc;
					}
					get shellType() {
						return this.M;
					}
					get os() {
						return this.n.os;
					}
					get isRemote() {
						return this.n.remoteAuthority !== void 0;
					}
					get remoteAuthority() {
						return this.n.remoteAuthority;
					}
					get hasFocus() {
						return C.$Lgb(this.ib);
					}
					get title() {
						return this.N;
					}
					get titleSource() {
						return this.O;
					}
					get icon() {
						return this.sd();
					}
					get color() {
						return this.td();
					}
					get processName() {
						return this.Kb;
					}
					get sequence() {
						return this.Lb;
					}
					get staticTitle() {
						return this.Mb;
					}
					get workspaceFolder() {
						return this.Nb;
					}
					get cwd() {
						return this.tb;
					}
					get initialCwd() {
						return this.ub;
					}
					get description() {
						if (this.Jb) return this.Jb;
						switch (
							this.shellLaunchConfig.attachPersistentProcess?.type ||
							this.shellLaunchConfig.type
						) {
							case "Task":
								return Ze.$hUc.typeTask;
							case "Local":
								return Ze.$hUc.typeLocal;
							default:
								return;
						}
					}
					get userHome() {
						return this.Pb;
					}
					get shellIntegrationNonce() {
						return this.n.shellIntegrationNonce;
					}
					get injectedArgs() {
						return this.vb;
					}
					constructor(
						Mt,
						Ut,
						ei,
						mi,
						ii,
						Dt,
						Jt,
						si,
						Zt,
						ci,
						ri,
						$i,
						Wt,
						tt,
						at,
						pi,
						Li,
						Di,
						Ui,
						Wi,
						Gi,
						qi,
						Oi,
						yi,
						Ai,
						li,
						Vi,
						wi,
						_t,
						ai,
						Ft,
						Xt,
						$t,
						ut,
						Et,
						Tt,
						qt,
						At,
						Yt,
					) {
						super(),
							(this.Ac = Mt),
							(this.Bc = Ut),
							(this.Cc = ei),
							(this.Dc = mi),
							(this.Ec = ii),
							(this.Fc = Dt),
							(this.Gc = Jt),
							(this.Hc = si),
							(this.Ic = Zt),
							(this.Jc = ci),
							(this.Kc = ri),
							(this.Lc = $i),
							(this.Mc = Wt),
							(this.Nc = tt),
							(this.Oc = at),
							(this.Pc = pi),
							(this.Qc = Li),
							(this.Rc = Di),
							(this.Sc = Ui),
							(this.Tc = Wi),
							(this.Uc = Gi),
							(this.Vc = qi),
							(this.Wc = yi),
							(this.Xc = Ai),
							(this.Yc = li),
							(this.Zc = Vi),
							(this.$c = wi),
							(this.ad = _t),
							(this.bd = ai),
							(this.cd = Xt),
							(this.dd = $t),
							(this.ed = ut),
							(this.fd = Et),
							(this.gd = Tt),
							(this.hd = qt),
							(this.jd = At),
							(this.kd = Yt),
							(this.q = new Map()),
							(this.z = 0),
							(this.C = 0),
							(this.N = ""),
							(this.O = K.TitleEventSource.Process),
							(this.S = new Map()),
							(this.U = []),
							(this.W = -1),
							(this.X = -1),
							(this.pb = 0),
							(this.qb = 0),
							(this.tb = void 0),
							(this.ub = void 0),
							(this.vb = void 0),
							(this.wb = !0),
							(this.yb = !1),
							(this.zb = this.D(new o.$2c())),
							(this.Ab = []),
							(this.Eb = this.D(new o.$2c())),
							(this.Gb = this.D(new o.$2c())),
							(this.Kb = ""),
							(this.Sb = !1),
							(this.capabilities = this.D(new V.$LHb())),
							(this.disableLayout = !1),
							(this.bc = new n.$re()),
							(this.onExit = this.bc.event),
							(this.cc = this.D(new n.$re())),
							(this.onDisposed = this.cc.event),
							(this.dc = this.D(new n.$re())),
							(this.onProcessIdReady = this.dc.event),
							(this.ec = this.D(new n.$re())),
							(this.onProcessReplayComplete = this.ec.event),
							(this.fc = this.D(new n.$re())),
							(this.onTitleChanged = this.fc.event),
							(this.gc = this.D(new n.$re())),
							(this.onIconChanged = this.gc.event),
							(this.hc = this.D(new n.$re())),
							(this.onWillData = this.hc.event),
							(this.ic = this.D(new n.$re())),
							(this.onData = this.ic.event),
							(this.jc = this.D(new n.$re())),
							(this.onBinary = this.jc.event),
							(this.kc = this.D(
								new n.$re({ onDidAddFirstListener: () => this.Ad() }),
							)),
							(this.onLineData = this.kc.event),
							(this.lc = this.D(new n.$re())),
							(this.onRequestExtHostProcess = this.lc.event),
							(this.mc = this.D(new n.$re())),
							(this.onDimensionsChanged = this.mc.event),
							(this.nc = this.D(new n.$re())),
							(this.onMaximumDimensionsChanged = this.nc.event),
							(this.oc = this.D(new n.$re())),
							(this.onDidFocus = this.oc.event),
							(this.pc = this.D(new n.$re())),
							(this.onDidRequestFocus = this.pc.event),
							(this.qc = this.D(new n.$re())),
							(this.onDidBlur = this.qc.event),
							(this.rc = this.D(new n.$re())),
							(this.onDidInputData = this.rc.event),
							(this.sc = this.D(new n.$re())),
							(this.onDidChangeSelection = this.sc.event),
							(this.tc = this.D(new n.$re())),
							(this.onRequestAddInstanceToGroup = this.tc.event),
							(this.uc = this.D(new n.$re())),
							(this.onDidChangeHasChildProcesses = this.uc.event),
							(this.vc = this.D(new n.$re())),
							(this.onDidExecuteText = this.vc.event),
							(this.wc = this.D(new n.$re())),
							(this.onDidChangeTarget = this.wc.event),
							(this.xc = this.D(new n.$re())),
							(this.onDidSendText = this.xc.event),
							(this.yc = this.D(new n.$re())),
							(this.onDidChangeShellType = this.yc.event),
							(this.zc = this.D(new n.$re())),
							(this.onDidChangeVisibility = this.zc.event),
							(this.ld = 0),
							(this.Ud = void 0),
							(this.ib = C.$("div.terminal-wrapper")),
							(this.Q = C.$("div.xterm-wrapper")),
							(this.R = C.$("div.blocks-overlay")),
							this.ib.appendChild(this.Q),
							(this.ib.style.display = "flex"),
							(this.ib.style.flexDirection = "column"),
							this.Q.appendChild(this.R),
							(this.Q.style.flexGrow = "1"),
							(this.Q.style.flexShrink = "1"),
							(this.Q.style.minHeight = "0"),
							(this.Y = C.$("div.cursor-debug-hint")),
							(this.bb = C.$("div.prompt-bar-container")),
							this.ib.appendChild(this.bb),
							this.addPromptBarHint(),
							this.D(
								this.cd.onChangeEffectManuallyDisposed({
									onChange: ({
										deps: Si,
										prevDeps: gi,
										prevReturnValue: ki,
									}) => {
										this.db === void 0 &&
											(this.addPromptBarHint(),
											this.Hb ? this.layout(this.Hb) : this.Yd());
									},
									deps: [
										() =>
											this.cd.applicationUserPersistentStorage
												.hideTerminalTooltip,
									],
									runNowToo: !1,
								}),
							),
							(this.ab = C.$fhb(this.Y, C.$("button.terminalButton"))),
							C.$fhb(this.ab, C.$("span")),
							C.$fhb(this.ab, C.$("span.commandHelpText")),
							(this.gb = C.$("div.cursor-debug-hint")),
							(this.fb = C.$("div.tooltip-hint")),
							this.Qc.getValue(De.$wW)
								? ((this.gb.style.display = "flex"),
									(this.Y.style.display = "flex"))
								: ((this.gb.style.display = "none"),
									(this.Y.style.display = "none")),
							this.D(
								this.Qc.onDidChangeConfiguration((Si) => {
									Si.affectsConfiguration(De.$wW) &&
										(this.Qc.getValue(De.$wW)
											? ((this.gb.style.display = "flex"),
												(this.Y.style.display = "flex"))
											: ((this.gb.style.display = "none"),
												(this.Y.style.display = "none")));
								}),
							),
							(this.hb = C.$fhb(this.gb, C.$("button.terminalButton"))),
							C.$fhb(this.hb, C.$("span")),
							C.$fhb(this.hb, C.$("span.commandHelpText")),
							this.D(
								this.Kc.onDidUpdateKeybindings(() => {
									this.md(),
										this.db === void 0 &&
											(this.addPromptBarHint(),
											this.Hb ? this.layout(this.Hb) : this.Yd());
								}),
							),
							this.D(
								C.$_fb(this.ab, async (Si) => {
									const gi = !(Si.ctrlKey || Si.metaKey);
									Si.stopPropagation(),
										gi
											? Ft.executeCommand(ht.COMPOSER_EDIT_ACTION_ID, "edit", {
													neverClose: !0,
												})
											: await this.kd.createComposer({
													forceMode: "edit",
													insertSelection: !0,
												});
								}),
							),
							this.D(
								C.$_fb(this.hb, async (Si) => {
									const gi = !(Si.ctrlKey || Si.metaKey);
									Si.stopPropagation(),
										gi
											? Ft.executeCommand(Be.$mbc, { neverClose: !0 })
											: await this.kd.createComposer({
													forceMode: "chat",
													insertSelection: !0,
												});
								}),
							);
						const bi = () => {
							(this.Z = C.$fhb(this.Y, C.$("button.terminalButton"))),
								C.$fhb(this.Z, C.$("span")),
								C.$fhb(this.Z, C.$("span.commandHelpText")),
								this.D(
									C.$_fb(this.Z, async (Si) => {
										const gi = !(Si.ctrlKey || Si.metaKey);
										Si.stopPropagation(),
											gi
												? Ft.executeCommand(Be.$mbc, { neverClose: !0 })
												: await this.kd.createComposer({
														forceMode: "chat",
														insertSelection: !0,
													});
									}),
								);
						};
						if (
							(this.cd.applicationUserPersistentStorage.composerState
								.unification !== !0 && bi(),
							this.D(
								this.cd.onChangeEffectManuallyDisposed({
									deps: [
										() =>
											this.cd.applicationUserPersistentStorage.composerState
												.unification,
									],
									onChange: ({ deps: Si }) => {
										Si[0] === !0 && this.Z
											? (this.Z.remove(), (this.Z = void 0))
											: Si[0] !== !0 && !this.Z && bi();
									},
								}),
							),
							(this.Fb = this.D(Dt.createInstance(ue.$pLc))),
							(this.L = []),
							(this.F = !1),
							(this.G = !1),
							(this.H = !1),
							(this.w = hi.j++),
							(this.Ib = !1),
							(this.sb = ei.attachPersistentProcess?.fixedDimensions?.rows),
							(this.rb = ei.attachPersistentProcess?.fixedDimensions?.cols),
							(this.s = (0, ye.$UUc)(
								this.Wc.getWorkspace().id,
								this.instanceId,
								this.title,
							)),
							this.Cc.attachPersistentProcess?.hideFromUser &&
								(this.Cc.hideFromUser =
									this.Cc.attachPersistentProcess.hideFromUser),
							this.Cc.attachPersistentProcess?.isFeatureTerminal &&
								(this.Cc.isFeatureTerminal =
									this.Cc.attachPersistentProcess.isFeatureTerminal),
							this.Cc.attachPersistentProcess?.type &&
								(this.Cc.type = this.Cc.attachPersistentProcess.type),
							this.shellLaunchConfig.cwd)
						) {
							const Si =
								typeof this.Cc.cwd == "string"
									? y.URI.from({ scheme: f.Schemas.file, path: this.Cc.cwd })
									: this.Cc.cwd;
							Si && (this.Nb = this.Wc.getWorkspaceFolder(Si) ?? void 0);
						}
						if (!this.Nb) {
							const Si = this.Zc.getLastActiveWorkspaceRoot();
							this.Nb = Si
								? (this.Wc.getWorkspaceFolder(Si) ?? void 0)
								: void 0;
						}
						const fi = this.D(mi.createScoped(this.ib));
						(this.Ub = fi),
							(this.m = this.D(Dt.createChild(new A.$Ki([L.$6j, fi])))),
							(this.kb = Ce.TerminalContextKeys.focus.bindTo(fi)),
							(this.lb =
								Ce.TerminalContextKeys.terminalHasFixedWidth.bindTo(fi)),
							(this.mb = Ce.TerminalContextKeys.textSelected.bindTo(fi)),
							(this.nb = Ce.TerminalContextKeys.altBufferActive.bindTo(fi)),
							(this.ob =
								Ce.TerminalContextKeys.terminalShellIntegrationEnabled.bindTo(
									fi,
								)),
							this.Rc.trace(
								`terminalInstance#ctor (instanceId: ${this.instanceId})`,
								this.Cc,
							),
							this.D(
								this.capabilities.onDidAddCapabilityType((Si) => {
									this.Rc.debug("terminalInstance added capability", Si),
										Si === q.TerminalCapability.CwdDetection
											? this.capabilities
													.get(q.TerminalCapability.CwdDetection)
													?.onDidChangeCwd((gi) => {
														(this.tb = gi),
															this.ke(this.title, K.TitleEventSource.Config),
															this.m
																.invokeFunction(ve.$lUc)
																?.add(gi, {
																	remoteAuthority: this.remoteAuthority,
																});
													})
											: Si === q.TerminalCapability.CommandDetection &&
												this.capabilities
													.get(q.TerminalCapability.CommandDetection)
													?.onCommandFinished((ki) => {
														ki.command.trim().length > 0 &&
															this.m
																.invokeFunction(ve.$kUc)
																?.add(ki.command, { shellType: this.M });
													});
								}),
							),
							this.D(
								this.capabilities.onDidRemoveCapabilityType((Si) =>
									this.Rc.debug("terminalInstance removed capability", Si),
								),
							),
							!this.shellLaunchConfig.executable &&
								!Oi.remoteAuthority &&
								this.Hc.resolveIcon(this.Cc, s.OS),
							(this.Db = ei.attachPersistentProcess?.icon || ei.icon),
							this.shellLaunchConfig.customPtyImplementation &&
								this.ke(this.Cc.name, K.TitleEventSource.Api),
							(this.statusList = this.D(this.m.createInstance($e.$fHb))),
							this.ud(),
							(this.n = this.Id()),
							(this.Bb = new u.$Mh(Kt.WaitForContainerThreshold)),
							(this.Cb = new u.$Mh(1e3)),
							(this.t = this.zd()),
							this.t
								.then(async () => {
									if (
										(await this.Bb.wait(),
										!this.shellLaunchConfig.customPtyImplementation &&
											this.Gc.config.shellIntegration?.enabled &&
											!this.shellLaunchConfig.executable)
									) {
										const Si = await this.n.getBackendOS(),
											gi = await this.Hc.getDefaultProfile({
												remoteAuthority: this.remoteAuthority,
												os: Si,
											});
										(this.shellLaunchConfig.executable = gi.path),
											(this.shellLaunchConfig.args = gi.args),
											this.shellLaunchConfig.isExtensionOwnedTerminal
												? ((this.shellLaunchConfig.icon ??= gi.icon),
													(this.shellLaunchConfig.color ??= gi.color),
													(this.shellLaunchConfig.env ??= gi.env))
												: ((this.shellLaunchConfig.icon = gi.icon),
													(this.shellLaunchConfig.color = gi.color),
													(this.shellLaunchConfig.env = gi.env));
									}
									await this.Jd(),
										this.shellLaunchConfig.attachPersistentProcess &&
											((this.tb =
												this.shellLaunchConfig.attachPersistentProcess.cwd),
											this.ke(
												this.shellLaunchConfig.attachPersistentProcess.title,
												this.shellLaunchConfig.attachPersistentProcess
													.titleSource,
											),
											this.setShellType(this.shellType)),
										this.rb && (await this.de());
								})
								.catch((Si) => {
									if (!this.isDisposed) throw Si;
								}),
							this.D(
								this.Qc.onDidChangeConfiguration(async (Si) => {
									Si.affectsConfiguration(
										Q.AccessibilityVerbositySettingId.Terminal,
									) && this.$d(this.xterm?.raw, this.w, this.title),
										Si.affectsConfiguration("terminal.integrated") &&
											(this.updateConfig(), this.setVisible(this.H)),
										[
											K.TerminalSettingId.FontSize,
											K.TerminalSettingId.FontFamily,
											K.TerminalSettingId.FontWeight,
											K.TerminalSettingId.FontWeightBold,
											K.TerminalSettingId.LetterSpacing,
											K.TerminalSettingId.LineHeight,
											"editor.fontFamily",
										].some((ki) => Si.affectsConfiguration(ki)) &&
											((this.wb = !0), await this.Yd()),
										Si.affectsConfiguration(
											K.TerminalSettingId.UnicodeVersion,
										) && this.Wd(),
										Si.affectsConfiguration("editor.accessibilitySupport") &&
											this.updateAccessibilitySupport(),
										(Si.affectsConfiguration(
											K.TerminalSettingId.TerminalTitle,
										) ||
											Si.affectsConfiguration(
												K.TerminalSettingId.TerminalTitleSeparator,
											) ||
											Si.affectsConfiguration(
												K.TerminalSettingId.TerminalDescription,
											)) &&
											this.Ob?.refreshLabel(this);
								}),
							),
							this.D(
								this.Wc.onDidChangeWorkspaceFolders(() =>
									this.Ob?.refreshLabel(this),
								),
							);
						let Ti = C.getWindow(this.P).setTimeout(() => {
							(Ti = void 0), (this.Ab = void 0), this.zb.clear();
						}, 1e4);
						this.D(
							(0, o.$Yc)(() => {
								Ti && C.getWindow(this.P).clearTimeout(Ti);
							}),
						),
							this.D(
								C.$$fb(this.ib, "mousemove", (Si) => {
									(this.Yb = Si),
										this.Zb || this.od(),
										this.hasSelection()
											? this.ib.classList.add("withselection")
											: this.ib.classList.remove("withselection");
								}),
							),
							this.D(
								C.$$fb(this.ib, "mouseleave", (Si) => {
									for (const [gi, ki] of this.S.entries())
										ki.classList.remove("hover");
									this.md();
								}),
							);
						let wt;
						this.D(
							C.$0fb(this.ib, "mousedown", (Si) => {
								(this.Yb = Si),
									(this.Zb = Si),
									(wt = setTimeout(() => {
										this.Y?.classList.add("hidden"),
											this.gb?.classList.add("hidden"),
											(wt = void 0);
									}, 100)),
									this.hasSelection()
										? this.ib.classList.add("withselection")
										: this.ib.classList.remove("withselection");
							}),
						),
							this.D(
								C.$0fb(this.ib, "mouseup", (Si) => {
									(this.Yb = Si),
										this.Zb &&
											Math.abs(this.Zb.clientX - Si.clientX) <= 2 &&
											Math.abs(this.Zb.clientY - Si.clientY) <= 2 &&
											this.pd(),
										(this.Zb = void 0);
								}),
							),
							this.D(
								C.$0fb(C.getWindow(this.ib), "mouseup", (Si) => {
									wt && (clearTimeout(wt), (wt = void 0)),
										this.Y?.classList.remove("hidden"),
										this.gb?.classList.remove("hidden"),
										this.hasSelection()
											? this.ib.classList.add("withselection")
											: this.ib.classList.remove("withselection"),
										this.md();
								}),
							);
						let We;
						this.ib.addEventListener(
							"scroll",
							() => {
								We && (clearTimeout(We), (We = void 0)),
									this.Y?.classList.add("noevents"),
									this.gb?.classList.add("noevents"),
									(We = setTimeout(() => {
										this.Y?.classList.remove("noevents"),
											this.gb?.classList.remove("noevents"),
											(We = void 0);
									}, 1e3));
							},
							{ capture: !0 },
						),
							this.D(
								C.$0fb(this.Q, "copy", () => {
									if (
										(this.fd.registerEvent("terminal.copy"),
										!this.hasSelection() && this.W)
									) {
										const Si = this.U.find((Ji) => Ji.marker?.id === this.W);
										if (!Si) return;
										const gi = Si.executedMarker?.line,
											ki = Si.endMarker?.line;
										if (gi === void 0 || ki === void 0) return;
										const Pi = this.xterm?.getBufferLines(gi - 1, ki);
										if (!Pi) return;
										const Hi = Pi.join(`
`);
										this.Oc.writeText(Hi);
									}
								}),
							),
							this.qd(),
							this.md();
						const _e = le.TerminalExtensionsRegistry.getTerminalContributions();
						for (const Si of _e) {
							if (this.q.has(Si.id)) {
								(0, c.$4)(
									new Error(
										`Cannot have two terminal contributions with the same id ${Si.id}`,
									),
								);
								continue;
							}
							let gi;
							try {
								(gi = this.D(
									this.m.createInstance(Si.ctor, this, this.n, this.Fb),
								)),
									this.q.set(Si.id, gi);
							} catch (ki) {
								(0, c.$4)(ki);
							}
							this.t.then((ki) => {
								gi.xtermReady?.(ki);
							}),
								this.D(
									this.onDisposed(() => {
										gi.dispose(),
											this.q.delete(Si.id),
											"instance" in gi && delete gi.instance,
											"_instance" in gi && delete gi._instance;
									}),
								);
						}
					}
					removeGhostText() {
						this.Vb &&
							(this.xterm?.raw.write("\x1B7"),
							this.xterm?.raw.write(" ".repeat(this.Vb.length)),
							this.xterm?.raw.write("\x1B8"),
							(this.Vb = void 0),
							(this.Wb = void 0));
					}
					removeBuffersBelow() {
						this.xterm?.raw.write("\x1B[0J");
					}
					renderGhostText(Mt) {
						this.removeGhostText(), this.removeBuffersBelow();
						const Ut = (0, ct.$kVc)(Mt);
						this.xterm?.raw.write("\x1B7" + Ut + "\x1B8"), (this.Vb = Mt);
					}
					setUnderlyingFullSuggestion(Mt) {
						this.Wb = Mt;
					}
					clearAbortController() {
						this.Xb = void 0;
					}
					getContribution(Mt) {
						return this.q.get(Mt);
					}
					clearLine() {
						this.xterm?.raw.write("\x1B[2K"), this.xterm?.raw.write("\r");
					}
					interrupt() {
						this.sendText("^C�\r", !1);
					}
					async startTerminalCpp(Mt) {
						this.Ic.startTerminalCpp({
							terminalInstance: this,
							abortController: Mt,
						});
					}
					addPromptBarHint() {
						if (
							this.cd.applicationUserPersistentStorage.hideTerminalTooltip ===
								!0 ||
							this.Cc.hideFromUser
						) {
							(this.ld = 0), (this.bb.style.display = "none");
							return;
						}
						for (; this.bb.firstChild; )
							this.bb.removeChild(this.bb.firstChild);
						const Mt = C.$("div.prompt-bar-hint");
						(Mt.textContent = ` ${this.Kc?.lookupKeybinding(De.$_V)?.getLabel()} to generate a command`),
							(Mt.style.textAlign = "center"),
							(Mt.style.opacity = "1"),
							(Mt.style.color = "var(--vscode-input-placeholderForeground)"),
							(Mt.style.fontSize = "10px"),
							(Mt.style.height = "20px"),
							(this.bb.style.display = "block"),
							(this.ld = 20),
							this.bb.appendChild(Mt);
					}
					hidePromptBar() {
						(this.promptBarData = void 0),
							(this.setPromptBarData = void 0),
							this.eb?.dispose(),
							this.db &&
								(this.addPromptBarHint(),
								this.db?.dispose(),
								(this.db = void 0),
								this.Hb ? this.layout(this.Hb) : this.Yd()),
							setTimeout(() => {
								this.scrollToBottom();
							}, 100);
					}
					cancelPromptBar() {
						this.promptBarData?.abortController?.abort();
					}
					rejectPromptBar() {
						this.promptBarData === void 0 ||
							this.setPromptBarData === void 0 ||
							(this.promptBarData?.queryHistory !== void 0 &&
								(this.promptBarData?.plainText?.length ?? 1) > 0) ||
							(this.setPromptBarData?.("suggestedCommand", ""),
							this.ed.removeTerminalFollowup({
								data: this.promptBarData,
								setData: this.setPromptBarData,
							}));
					}
					acceptPromptBar() {
						this.hidePromptBar(),
							setTimeout(() => {
								this.focus(!0);
							}, 110);
					}
					acceptAndRunPromptBar() {
						this.scrollToBottom(),
							this.Qc.getValue(De.$xW)
								? this.runCommand(
										this.promptBarData?.suggestedCommand ?? "",
										!0,
									)
								: this.sendText("\r", !1),
							(0, Re.batch)(() => {
								this.setPromptBarData?.("suggestedCommand", ""),
									this.setPromptBarData?.("commandLine", (Mt) => Mt + 1);
							});
					}
					showPromptBar() {
						if (this.db && this.promptBarData) {
							this.promptBarData.inputBoxDelegate.focus();
							return;
						}
						for (this.hidePromptBar(); this.bb.firstChild; )
							this.bb.removeChild(this.bb.firstChild);
						(this.eb = this.cd.manuallyDisposedWrapper(() => {
							const Mt = {
									uuid: (0, Ue.$9g)(),
									instanceId: this.instanceId,
									plainText: "",
									richText: "",
									chatResponse: void 0,
									forceRerenderInputBox: 1,
									queryHistory: void 0,
									chatHistory: void 0,
									isFocused: !1,
									suggestedCommand: "",
									commandLine: 1,
									abortController: void 0,
									previousStructuredTextsNewestFirst: [],
									contextSessionUuid: this.dd.createContextSession(
										(0, Me.$C7b)(),
									).uuid,
									delegate: new qe.$KN(),
									inputBoxDelegate: new Ae.$Zzb(),
								},
								[Ut, ei] = (0, i.createStore)(Mt, {});
							(this.promptBarData = Ut), (this.setPromptBarData = ei);
						})),
							(this.bb.style.display = "block"),
							(this.bb.style.top = "20px"),
							(this.bb.style.width = "100%"),
							(this.bb.style.zIndex = "10000"),
							(this.db = (0, ke.$dVc)(this.bb, this.Fc, {
								terminalInstance: this,
								onDidChangeHeight: (Mt) => {
									(this.ld = Mt),
										this.Hb ? this.layout(this.Hb) : this.Yd(),
										setTimeout(() => {
											this.scrollToBottom();
										}, 100);
								},
								data: this.promptBarData,
								setData: this.setPromptBarData,
							})),
							(this.wb = !0),
							this.Hb ? this.layout(this.Hb) : this.Yd();
					}
					showTooltipHint(Mt) {
						for (; this.fb.firstChild; )
							this.fb.removeChild(this.fb.firstChild);
						const Ut = () => {
							this.Q.removeChild(this.fb);
						};
						(0, ft.$Klc)(Mt, this.fb, this.bd, Ut),
							(this.fb.style.position = "absolute"),
							(this.fb.style.right = "24px"),
							(this.fb.style.top = "32px"),
							(this.fb.style.zIndex = "100000"),
							this.Q.appendChild(this.fb);
					}
					md() {
						if (this.Cc.hideFromUser) return;
						if (this.Z) {
							const ii = this.Z.querySelector("span"),
								Dt = this.hb.querySelector("span"),
								Jt = this.Z.querySelector("span.commandHelpText"),
								si = this.hb.querySelector("span.commandHelpText");
							(ii.textContent = "Add to Chat"),
								(Dt.textContent = "Add to Chat");
							const Zt = this.Kc.lookupKeybinding(Be.$mbc);
							(Jt.textContent = Zt?.getLabel() || ""),
								(si.textContent = Zt?.getLabel() || "");
						}
						const Mt = this.ab.querySelector("span"),
							Ut = this.ab.querySelector("span.commandHelpText");
						Mt.textContent = "Add to Composer";
						const ei = this.Kc.lookupKeybinding(ht.COMPOSER_EDIT_ACTION_ID);
						Ut.textContent = ei?.getLabel() || "";
						let mi;
						if (this.hasSelection()) {
							const ii = this.selectionRange?.selectionStartLineNumber;
							if (ii === void 0) return;
							const Dt = this.xterm?.raw.textarea?.clientHeight,
								Jt = this.xterm?.getFirstLine();
							if (Jt === void 0 || Dt === void 0) return;
							const si = (ii - Jt - 1) * Dt;
							(this.Y.style.top = `${Math.max(0, si - 25)}px`),
								this.Y.classList.remove(ze),
								this.Y.parentElement || this.Q.appendChild(this.Y),
								this.gb.remove();
						} else
							this.S.has(this.W)
								? ((mi = this.S.get(this.W)),
									mi.classList.contains(ze)
										? this.Y.classList.add(ze)
										: this.Y.classList.remove(ze),
									(this.Y.style.top = `max(${mi.style.top} + 5px, 5px)`),
									this.Y.parentElement || this.Q.appendChild(this.Y))
								: ((this.Y.style.top = "0"), this.Y.remove());
						mi && this.nd(mi);
					}
					nd(Mt) {
						let Ut;
						Mt.classList.contains(ze)
							? (Ut = new Ee.$RL(255, 0, 0, 0.05))
							: (Ut = this.Pc.getColorTheme().getColor(Ie.$jHb)?.rgba),
							(Mt.style.backgroundColor = Ut
								? `rgba(${Ut.r}, ${Ut.g}, ${Ut.b}, 0.05)`
								: "rgba(255, 255, 255, 0.05)");
					}
					od() {
						for (const [Mt, Ut] of this.S.entries()) {
							const ei = Ut.getBoundingClientRect(),
								mi = this.Yb?.clientX,
								ii = this.Yb?.clientY;
							mi &&
							ii &&
							mi >= ei.left &&
							mi <= ei.right &&
							ii >= ei.top &&
							ii <= ei.bottom
								? Ut.classList.add("hover")
								: Ut.classList.remove("hover");
						}
						this.md();
					}
					pd() {
						const Mt = this.W;
						this.W = -1;
						for (const [Ut, ei] of this.S.entries()) {
							const mi = ei.getBoundingClientRect(),
								ii = this.Yb?.clientX,
								Dt = this.Yb?.clientY;
							ii &&
							Dt &&
							ii >= mi.left &&
							ii <= mi.right &&
							Dt >= mi.top &&
							Dt <= mi.bottom &&
							Mt !== Ut
								? (ei.classList.add("selected"), (this.W = Ut))
								: ei.classList.remove("selected");
						}
						this.md();
					}
					qd() {
						const Mt = this.xterm?.shellIntegration.capabilities.get(
							q.TerminalCapability.CommandDetection,
						);
						if (!Mt) return;
						const Ut = Mt.commands;
						this.U = [...Ut];
						const ei = Ut[Ut.length - 1];
						if (ei && ei.marker?.line !== void 0) {
							const ri = ei.marker.id;
							ri != this.X &&
								((this.X = ri), ei.exitCode ? (this.W = ri) : (this.W = -1));
						}
						const mi = this.xterm?.raw.element?.clientHeight ?? 0,
							ii = this.xterm?.raw.rows ?? 1,
							Dt = mi / ii,
							Jt = this.xterm?.getFirstLine(),
							si = this.xterm?.raw.rows;
						if (!Ut || Dt === void 0 || Jt === void 0 || si === void 0) return;
						const Zt = Jt + si - 1,
							ci = [];
						for (let ri = 0; ri < Ut.length; ri++) {
							const $i = Ut[ri],
								Wt = $i.marker?.line,
								tt =
									ri < Ut.length - 1
										? Ut[ri + 1].marker?.line
										: Mt?.currentCommand?.commandStartMarker?.line,
								at = $i.marker.id;
							if (
								Wt == -1 ||
								Wt === void 0 ||
								tt == -1 ||
								tt === void 0 ||
								$i.exitCode === void 0
							)
								continue;
							const pi = tt - 1;
							if (pi >= Jt && Wt <= Zt) {
								const Li = C.$("div.block"),
									Di = Math.max(Wt, Jt),
									Ui = Math.min(pi, Zt);
								(Li.style.top = `${(Di - Jt) * Dt + 2}px`),
									(Li.style.height = `${(Ui - Di + 1) * Dt}px`),
									Wt >= Jt && Li.classList.add("border-top"),
									pi <= Zt && Li.classList.add("border-bottom"),
									$i.exitCode && Li.classList.add(ze);
								const Wi = this.R.appendChild(Li);
								this.W === at && Wi.classList.add("selected"),
									ci.push([at, Wi]);
							}
						}
						for (const [ri, $i] of this.S.entries()) this.R.removeChild($i);
						this.S.clear();
						for (const [ri, $i] of ci) this.S.set(ri, $i);
						this.md();
					}
					selectedCommand() {
						if (this.W !== -1)
							return this.U.find((Mt) => Mt.marker?.id === this.W);
					}
					async parseCommand(Mt) {
						let Ut = this.capabilities.get(
							q.TerminalCapability.CommandDetection,
						);
						if (
							!Ut &&
							(this.n.processState === ge.ProcessState.Uninitialized ||
								this.n.processState === ge.ProcessState.Launching)
						) {
							const mi = new o.$Zc();
							await Promise.race([
								new Promise((ii) => {
									mi.add(
										this.capabilities.onDidAddCapabilityType((Dt) => {
											Dt === q.TerminalCapability.CommandDetection &&
												((Ut = this.capabilities.get(
													q.TerminalCapability.CommandDetection,
												)),
												ii());
										}),
									);
								}),
								(0, u.$Nh)(2e3),
							]),
								mi.dispose();
						}
						if (!Ut) return;
						const ei = Mt ?? this.xterm?.raw.buffer.normal.length ?? 0 ?? 0;
						return (
							this.capabilities.get(
								q.TerminalCapability.PartialCommandDetection,
							),
							Ut.currentCommand ? Ut.currentCommand : Ut.getCommandForLine(ei)
						);
					}
					async rd() {
						const Mt = this.xterm?.getBufferLength();
						if (Mt !== void 0)
							return this.xterm?.getBufferLines(0, Mt).join(`
`);
					}
					sd() {
						return (
							this.Db ||
								(this.Db =
									this.n.processState >= ge.ProcessState.Launching
										? (0, X.$_O)().getIcon(
												this.Qc.getValue(K.TerminalSettingId.TabsDefaultIcon),
											)
										: void 0),
							this.Db
						);
					}
					td() {
						if (this.shellLaunchConfig.color)
							return this.shellLaunchConfig.color;
						if (this.shellLaunchConfig?.attachPersistentProcess?.color)
							return this.shellLaunchConfig.attachPersistentProcess.color;
						this.n.processState >= ge.ProcessState.Launching;
					}
					ud() {
						if (!this.P) {
							(this.pb = Kt.DefaultCols), (this.qb = Kt.DefaultRows);
							return;
						}
						const Mt = C.getWindow(this.Q).getComputedStyle(this.Q),
							Ut = parseInt(Mt.width),
							ei = parseInt(Mt.height);
						this.vd(Ut, ei);
					}
					vd(Mt, Ut) {
						if (!Mt || !Ut) return this.wd(), null;
						const ei = this.yd(Mt, Ut);
						if (!ei) return this.wd(), null;
						const mi = this.xterm
								? this.xterm.getFont()
								: this.Gc.getFont(C.getWindow(this.domElement)),
							ii = (0, me.$_Hb)(
								C.getWindow(this.domElement),
								mi,
								ei.width,
								ei.height,
							);
						return ii
							? ((this.pb !== ii.cols || this.qb !== ii.rows) &&
									((this.pb = ii.cols), (this.qb = ii.rows), this.xd()),
								ei.width)
							: (this.wd(), null);
					}
					wd() {
						hi.h && ((this.pb = hi.h.cols), (this.qb = hi.h.rows));
					}
					xd() {
						this.nc.fire();
					}
					yd(Mt, Ut) {
						const ei = this.xterm
							? this.xterm.getFont()
							: this.Gc.getFont(C.getWindow(this.domElement));
						if (
							!ei ||
							!ei.charWidth ||
							!ei.charHeight ||
							!this.xterm?.raw.element
						)
							return;
						const mi = C.getWindow(this.xterm.raw.element).getComputedStyle(
								this.xterm.raw.element,
							),
							ii = parseInt(mi.paddingLeft) + parseInt(mi.paddingRight) + 14,
							Dt = parseInt(mi.paddingTop) + parseInt(mi.paddingBottom);
						return (
							(hi.f = new C.$pgb(
								Math.min(Kt.MaxCanvasWidth, Mt - ii),
								Ut - Dt + (this.Qb && this.jb ? -5 : 0),
							)),
							hi.f
						);
					}
					get persistentProcessId() {
						return this.n.persistentProcessId;
					}
					get shouldPersist() {
						return (
							this.n.shouldPersist &&
							!this.shellLaunchConfig.isTransient &&
							(!this.reconnectionProperties ||
								this.Qc.getValue("task.reconnection") === !0)
						);
					}
					static getXtermConstructor(Mt, Ut) {
						const ei = Mt.lookupKeybinding(
							Nt.TerminalAccessibilityCommandId.FocusAccessibleBuffer,
							Ut,
						);
						return (
							di ||
							((di = u.Promises.withAsyncBody(async (mi) => {
								const ii = (await (0, Te.$Tq)("@xterm/xterm", "lib/xterm.js"))
									.Terminal;
								(ii.strings.promptLabel = v.localize(10068, null)),
									(ii.strings.tooMuchOutput = ei
										? v.localize(10069, null, ei.getLabel())
										: v.localize(10070, null)),
									mi(ii);
							})),
							di)
						);
					}
					async zd() {
						const Mt = await hi.getXtermConstructor(this.Kc, this.Dc);
						if (this.isDisposed)
							throw new c.$fb("Terminal disposed of during xterm.js creation");
						const Ut =
								this.shellLaunchConfig.executable === void 0 ||
								this.shellType === void 0 ||
								!Ye.includes(this.shellType),
							ei = this.m.createInstance(
								me.$$Hb,
								Mt,
								this.pb,
								this.qb,
								this.m.createInstance(Bt, this),
								this.capabilities,
								this.n.shellIntegrationNonce,
								Ut,
							);
						(this.xterm = ei),
							(this.$b = this.D(
								new Rt.$nVc(
									() => this.H,
									() => ei,
									async (Dt, Jt) => {
										ei.raw.resize(Dt, Jt), await this.Zd(ei.raw);
									},
									async (Dt) => {
										ei.raw.resize(Dt, ei.raw.rows), await this.Zd(ei.raw);
									},
									async (Dt) => {
										ei.raw.resize(ei.raw.cols, Dt), await this.Zd(ei.raw);
									},
								),
							)),
							this.updateAccessibilitySupport(),
							this.D(
								this.xterm.onDidRequestRunCommand((Dt) => {
									Dt.copyAsHtml
										? this.copySelection(!0, Dt.command)
										: this.sendText(Dt.command.command, !Dt.noNewLine);
								}),
							),
							this.D(this.xterm.onDidRequestFocus(() => this.focus())),
							this.D(
								this.xterm.onDidRequestSendText((Dt) => this.sendText(Dt, !1)),
							);
						const mi = this.Cc.initialText
								? new Promise((Dt) => this.Qd(ei, Dt))
								: void 0,
							ii = this.D(new fe.$9Uc(mi));
						if (
							(this.D(ii.onLineData((Dt) => this.kc.fire(Dt))),
							(this.Tb = ii),
							(0, u.$Oh)(
								() => {
									this.D(
										ei.raw.onBell(() => {
											(this.Qc.getValue(K.TerminalSettingId.EnableBell) ||
												this.Qc.getValue(
													K.TerminalSettingId.EnableVisualBell,
												)) &&
												this.statusList.add(
													{
														id: $e.TerminalStatus.Bell,
														severity: B.Severity.Warning,
														icon: a.$ak.bell,
														tooltip: v.localize(10071, null),
													},
													this.Gc.config.bellDuration,
												),
												this.hd.playSignal(I.$Twb.terminalBell);
										}),
									);
								},
								1e3,
								this.B,
							),
							this.D(ei.raw.onSelectionChange(async () => this.Td())),
							this.D(ei.raw.buffer.onBufferChange(() => this.Fd())),
							this.D(this.n.onProcessData((Dt) => this.Kd(Dt))),
							this.D(
								ei.raw.onData(async (Dt) => {
									this.fd.registerEvent("terminal.type"),
										await this.ac?.wait(),
										await this.n.write(Dt),
										this.rc.fire(Dt);
								}),
							),
							this.D(ei.raw.onBinary((Dt) => this.n.processBinary(Dt))),
							this.D(
								this.n.onProcessReady(async (Dt) => {
									this.n.os && ii.setOperatingSystem(this.n.os),
										(ei.raw.options.windowsPty = Dt.windowsPty);
								}),
							),
							this.D(
								this.n.onRestoreCommands((Dt) =>
									this.xterm?.shellIntegration.deserialize(Dt),
								),
							),
							this.D(
								this.jd.onDidChangeLocation(({ views: Dt }) => {
									Dt.some((Jt) => Jt.id === ge.$geb) && ei.refresh();
								}),
							),
							!this.capabilities.has(q.TerminalCapability.CwdDetection))
						) {
							let Dt = ei.raw.onKey((Jt) => {
								new d.$7fb(Jt.domEvent).equals(g.KeyCode.Enter) && this.Vd();
							});
							this.D(
								this.capabilities.onDidAddCapabilityType((Jt) => {
									Jt === q.TerminalCapability.CwdDetection &&
										(Dt?.dispose(), (Dt = void 0));
								}),
							);
						}
						return (
							this.Jc.userHome().then((Dt) => {
								this.Pb = Dt.fsPath;
							}),
							this.H && this.Bd(),
							ei
						);
					}
					async Ad() {
						(this.xterm || (await this.t)).raw.loadAddon(this.Tb);
					}
					async runCommand(Mt, Ut) {
						let ei = this.capabilities.get(
							q.TerminalCapability.CommandDetection,
						);
						if (
							!ei &&
							(this.n.processState === ge.ProcessState.Uninitialized ||
								this.n.processState === ge.ProcessState.Launching)
						) {
							const mi = new o.$Zc();
							await Promise.race([
								new Promise((ii) => {
									mi.add(
										this.capabilities.onDidAddCapabilityType((Dt) => {
											Dt === q.TerminalCapability.CommandDetection &&
												((ei = this.capabilities.get(
													q.TerminalCapability.CommandDetection,
												)),
												ii());
										}),
									);
								}),
								(0, u.$Nh)(2e3),
							]),
								mi.dispose();
						}
						(!ei || ei.promptInputModel.value.length > 0) &&
							(await this.sendText("�", !1), await (0, u.$Nh)(100)),
							await this.sendText(Mt, Ut, !Ut);
					}
					async runRecent(Mt, Ut, ei) {
						return this.m.invokeFunction(pe.$8Uc, this, this.Bc, Mt, Ut, ei);
					}
					detachFromElement() {
						this.ib.remove(), (this.P = void 0);
					}
					attachToElement(Mt) {
						this.P !== Mt &&
							(this.Cb.isOpen() || this.Cb.open(),
							(this.P = Mt),
							this.P.appendChild(this.ib),
							this.xterm?.raw.element &&
								this.xterm.raw.open(this.xterm.raw.element),
							this.xterm?.refresh(),
							setTimeout(() => this.Ed(Mt)));
					}
					Bd() {
						if (!this.xterm || this.xterm.raw.element) return;
						if (!this.P || !this.P.isConnected)
							throw new Error(
								"A container element needs to be set with `attachToElement` and be part of the DOM before calling `_open`",
							);
						this.P.appendChild(this.ib);
						const Mt = this.xterm;
						this.Q.xterm = Mt.raw;
						const Ut = Mt.attachToElement(this.Q);
						for (const ei of this.q.values())
							this.xterm
								? ei.xtermOpen?.(this.xterm)
								: this.t.then((mi) => ei.xtermOpen?.(mi));
						if (
							(this.D(
								Mt.shellIntegration.onDidChangeStatus(() => {
									this.hasFocus ? this.Dd() : this.ob.reset();
								}),
							),
							!Mt.raw.element || !Mt.raw.textarea)
						)
							throw new Error("xterm elements not set after open");
						this.$d(Mt.raw, this.w, this.N),
							Mt.raw.attachCustomKeyEventHandler((ei) => {
								if (this.F) return !1;
								const mi = new d.$7fb(ei),
									ii = this.Kc.softDispatch(mi, mi.target),
									Dt =
										ii.kind === O.ResultKind.MoreChordsNeeded &&
										this.Gc.config.allowChords &&
										ei.key !== "Escape";
								if (this.Kc.inChordMode || Dt) return ei.preventDefault(), !1;
								const Jt = "terminal.integrated.showTerminalConfigPrompt",
									si = [
										"RightArrow",
										"LeftArrow",
										"UpArrow",
										"DownArrow",
										"Space",
										"Meta",
										"Control",
										"Shift",
										"Alt",
										"",
										"Delete",
										"Backspace",
										"Tab",
									];
								return (
									this.Sc.getBoolean(Jt, x.StorageScope.APPLICATION, !0) &&
										!si.includes(ei.key) &&
										!ei.ctrlKey &&
										!ei.shiftKey &&
										!ei.altKey &&
										(this.Ib = !0),
									ii.kind === O.ResultKind.KbFound &&
									ii.commandId &&
									this.L.some((Zt) => Zt === ii.commandId) &&
									!this.Gc.config.sendKeybindingsToShell
										? (this.Sc.getBoolean(Jt, x.StorageScope.APPLICATION, !0) &&
												this.Ib &&
												!ge.$heb.includes(ii.commandId) &&
												(this.Lc.prompt(
													B.Severity.Info,
													v.localize(10072, null, this.Uc.nameLong),
													[
														{
															label: v.localize(10073, null),
															run: () => {
																this.Mc.openSettings({
																	jsonEditor: !1,
																	query: `@id:${K.TerminalSettingId.CommandsToSkipShell},${K.TerminalSettingId.SendKeybindingsToShell},${K.TerminalSettingId.AllowChords}`,
																});
															},
														},
													],
												),
												this.Sc.store(
													Jt,
													!1,
													x.StorageScope.APPLICATION,
													x.StorageTarget.USER,
												)),
											ei.preventDefault(),
											!1)
										: (this.Gc.config.allowMnemonics && !s.$m && ei.altKey) ||
												($.$rsb.getTabFocusMode() && ei.key === "Tab")
											? !1
											: ei.key === "Tab" && ei.shiftKey
												? (ei.preventDefault(), !0)
												: !(
														(s.$l &&
															ei.altKey &&
															ei.key === "F4" &&
															!ei.ctrlKey) ||
														(!w.$Yfb.clipboard.readText &&
															ei.key === "v" &&
															ei.ctrlKey)
													)
								);
							}),
							this.D(
								C.$0fb(Mt.raw.element, "mousedown", () => {
									const ei = C.$0fb(
										Mt.raw.element.ownerDocument,
										"mouseup",
										() => {
											setTimeout(() => this.Hd(), 0), ei.dispose();
										},
									);
								}),
							),
							this.D(
								C.$0fb(Mt.raw.element, "touchstart", () => {
									Mt.raw.focus();
								}),
							),
							this.D(
								C.$0fb(Mt.raw.element, "keyup", () => {
									setTimeout(() => this.Hd(), 0);
								}),
							),
							this.D(C.$0fb(Mt.raw.textarea, "focus", () => this.Cd(!0))),
							this.D(C.$0fb(Mt.raw.textarea, "blur", () => this.Cd(!1))),
							this.D(C.$0fb(Mt.raw.textarea, "focusout", () => this.Cd(!1))),
							this.D(Mt.raw.onSelectionChange(() => this.md())),
							this.D(
								Mt.raw.onRender(() => {
									this.qd();
								}),
							),
							this.Ed(this.P),
							this.Fb.attachToElement(Ut),
							this.Hb && this.layout(this.Hb),
							this.updateConfig(),
							Mt.raw.options.disableStdin && this.Pd(Mt.raw);
					}
					Cd(Mt) {
						Mt
							? (this.kb.set(!0),
								this.Dd(),
								this.oc.fire(this),
								this.ib.classList.add("focus"))
							: (this.resetFocusContextKey(),
								this.qc.fire(this),
								this.Hd(),
								this.ib.classList.remove("focus"));
					}
					Dd() {
						this.xterm &&
							this.ob.set(
								this.xterm.shellIntegration.status ===
									K.ShellIntegrationStatus.VSCode,
							);
					}
					resetFocusContextKey() {
						this.kb.reset(), this.ob.reset();
					}
					Ed(Mt) {
						const Ut = new o.$Zc(),
							ei = Ut.add(this.m.createInstance(It, Mt));
						Ut.add(ei.onDropTerminal((mi) => this.tc.fire(mi))),
							Ut.add(
								ei.onDropFile(async (mi) => {
									this.focus(), await this.sendPath(mi, !1);
								}),
							),
							Ut.add(new C.$Hhb(Mt, ei)),
							(this.Gb.value = Ut);
					}
					hasSelection() {
						return this.xterm ? this.xterm.raw.hasSelection() : !1;
					}
					async copySelection(Mt, Ut) {
						this.fd.registerEvent("terminal.copy"),
							await (await this.t).copySelection(Mt, Ut);
					}
					get selection() {
						return this.xterm && this.hasSelection()
							? this.xterm.raw.getSelection()
							: void 0;
					}
					get selectionRange() {
						return this.xterm?.selectionRange;
					}
					clearSelection() {
						this.xterm?.raw.clearSelection();
					}
					Fd() {
						this.nb.set(
							!!(
								this.xterm &&
								this.xterm.raw.buffer.active === this.xterm.raw.buffer.alternate
							),
						);
					}
					dispose(Mt) {
						if (
							!(
								this.shellLaunchConfig.type === "Task" &&
								Mt === K.TerminalExitReason.Process &&
								this.I !== 0 &&
								!this.shellLaunchConfig.waitOnExit
							) &&
							!this.isDisposed
						) {
							this.Rc.trace(
								`terminalInstance#dispose (instanceId: ${this.instanceId})`,
							),
								(0, o.$Vc)(this.Fb),
								this.db?.dispose(),
								this.eb?.dispose(),
								this.xterm?.raw.element && (this.G = this.hasFocus),
								this.Q.xterm && (this.Q.xterm = void 0),
								this.jb && (this.jb.dispose(), (this.jb = void 0));
							try {
								this.xterm?.dispose();
							} catch (Ut) {
								this.Rc.error("Exception occurred during xterm disposal", Ut);
							}
							t.$Ofb &&
								(this.resetFocusContextKey(),
								this.mb.reset(),
								this.qc.fire(this)),
								this.u && (this.u.dispose(), (this.u = void 0)),
								this.J === void 0 &&
									(this.J = Mt ?? K.TerminalExitReason.Unknown),
								this.n.dispose(),
								this.Md(void 0),
								this.cc.fire(this),
								super.dispose();
						}
					}
					async detachProcessAndDispose(Mt) {
						await this.n.detachFromProcess(Mt === K.TerminalExitReason.User),
							this.dispose(Mt);
					}
					focus(Mt) {
						this.Fd(),
							this.xterm &&
								(Mt || !C.$Ogb().getSelection()?.toString()) &&
								(this.xterm.raw.focus(), this.pc.fire());
					}
					async focusWhenReady(Mt) {
						await this.t, await this.Cb.wait(), this.focus(Mt);
					}
					async paste() {
						await this.Gd(await this.Oc.readText());
					}
					async pasteSelection() {
						await this.Gd(await this.Oc.readText("selection"));
					}
					async Gd(Mt) {
						if ((this.fd.registerEvent("terminal.paste"), !this.xterm)) return;
						let Ut = Mt;
						const ei = await this.m.invokeFunction(
							et.$eVc,
							Ut,
							this.xterm?.raw.modes.bracketedPasteMode,
						);
						ei &&
							(typeof ei == "object" && (Ut = ei.modifiedText),
							this.focus(),
							this.xterm.raw.paste(Ut));
					}
					async sendText(Mt, Ut, ei) {
						this.fd.registerEvent("terminal.type"),
							ei &&
								this.xterm?.raw.modes.bracketedPasteMode &&
								(Mt = `\x1B[200~${Mt}\x1B[201~`),
							(Mt = Mt.replace(/\r?\n/g, "\r")),
							Ut && !Mt.endsWith("\r") && (Mt += "\r"),
							this.Rc.debug("sending data (vscode)", Mt),
							await this.n.write(Mt),
							this.rc.fire(Mt),
							this.xc.fire(Mt),
							this.xterm?.scrollToBottom(),
							Ut && this.vc.fire();
					}
					async sendPath(Mt, Ut) {
						return this.sendText(await this.preparePathForShell(Mt), Ut);
					}
					async preparePathForShell(Mt) {
						return (
							await this.processReady,
							(0, Le.$Neb)(
								Mt,
								this.shellLaunchConfig.executable,
								this.title,
								this.shellType,
								this.n.backend,
								this.n.os,
							)
						);
					}
					setVisible(Mt) {
						const Ut = this.H !== Mt;
						(this.H = Mt),
							this.ib.classList.toggle("active", Mt),
							Mt && this.xterm && (this.Bd(), this.$b?.flush(), this.Yd()),
							Ut && this.zc.fire(Mt);
					}
					scrollDownLine() {
						this.xterm?.scrollDownLine();
					}
					scrollDownPage() {
						this.xterm?.scrollDownPage();
					}
					scrollToBottom() {
						this.xterm?.scrollToBottom();
					}
					scrollUpLine() {
						this.xterm?.scrollUpLine();
					}
					scrollUpPage() {
						this.xterm?.scrollUpPage();
					}
					scrollToTop() {
						this.xterm?.scrollToTop();
					}
					clearBuffer() {
						this.n.clearBuffer(), this.xterm?.clearBuffer();
					}
					Hd() {
						const Mt = !!this.Nc.getActiveViewWithId(ge.$geb);
						let Ut = !1;
						const ei = this.Xc.activeEditor;
						ei && (Ut = ei instanceof re.$Unc),
							this.mb.set((Mt || Ut) && this.hasSelection());
					}
					Id() {
						let Mt;
						this.shellLaunchConfig.attachPersistentProcess
							?.environmentVariableCollections &&
							(Mt = (0, G.$eK)(
								this.shellLaunchConfig.attachPersistentProcess
									.environmentVariableCollections,
							));
						const Ut = this.m.createInstance(
							ae.$hIb,
							this.w,
							this.shellLaunchConfig?.cwd,
							Mt,
							this.shellLaunchConfig.attachPersistentProcess
								?.shellIntegrationNonce,
						);
						return (
							this.capabilities.add(Ut.capabilities),
							this.D(
								Ut.onProcessReady(async (ei) => {
									this.dc.fire(this),
										(this.ub = await this.getInitialCwd()),
										this.Ob ||
											((this.Ob = this.D(this.m.createInstance(xt))),
											this.D(
												this.Ob.onDidChangeLabel((mi) => {
													(this.N !== mi.title || this.Jb !== mi.description) &&
														((this.N = mi.title),
														(this.Jb = mi.description),
														this.fc.fire(this));
												}),
											)),
										this.Cc.name
											? this.ke(this.Cc.name, K.TitleEventSource.Api)
											: (setTimeout(() => {
													this.t.then((mi) => {
														this.Eb.value = mi.raw.onTitleChange((ii) =>
															this.Rd(ii),
														);
													});
												}),
												this.ke(
													this.Cc.executable,
													K.TitleEventSource.Process,
												));
								}),
							),
							this.D(Ut.onProcessExit((ei) => this.Md(ei))),
							this.D(
								Ut.onDidChangeProperty(({ type: ei, value: mi }) => {
									switch (ei) {
										case K.ProcessPropertyType.Cwd:
											(this.tb = mi), this.Ob?.refreshLabel(this);
											break;
										case K.ProcessPropertyType.InitialCwd:
											(this.ub = mi),
												(this.tb = this.ub),
												this.ke(this.title, K.TitleEventSource.Config),
												(this.Db =
													this.Cc.attachPersistentProcess?.icon ||
													this.Cc.icon),
												this.gc.fire({ instance: this, userInitiated: !1 });
											break;
										case K.ProcessPropertyType.Title:
											this.ke(mi ?? "", K.TitleEventSource.Process);
											break;
										case K.ProcessPropertyType.OverrideDimensions:
											this.setOverrideDimensions(mi, !0);
											break;
										case K.ProcessPropertyType.ResolvedShellLaunchConfig:
											this.fe(mi);
											break;
										case K.ProcessPropertyType.ShellType:
											this.setShellType(mi);
											break;
										case K.ProcessPropertyType.HasChildProcesses:
											this.uc.fire(mi);
											break;
										case K.ProcessPropertyType.UsedShellIntegrationInjection:
											this.Sb = !0;
											break;
									}
								}),
							),
							(this.zb.value = Ut.onProcessData((ei) =>
								this.Ab?.push(ei.data),
							)),
							this.D(Ut.onProcessReplayComplete(() => this.ec.fire())),
							this.D(Ut.onEnvironmentVariableInfoChanged((ei) => this.ge(ei))),
							this.D(
								Ut.onPtyDisconnect(() => {
									this.xterm && (this.xterm.raw.options.disableStdin = !0),
										this.statusList.add({
											id: $e.TerminalStatus.Disconnected,
											severity: B.Severity.Error,
											icon: a.$ak.debugDisconnect,
											tooltip: v.localize(10074, null),
										});
								}),
							),
							this.D(
								Ut.onPtyReconnect(() => {
									this.xterm && (this.xterm.raw.options.disableStdin = !1),
										this.statusList.remove($e.TerminalStatus.Disconnected);
								}),
							),
							Ut
						);
					}
					createProcessManager() {
						return this.Id();
					}
					async Jd() {
						if (this.isDisposed) return;
						this.Zc.getLastActiveWorkspaceRoot(f.Schemas.file)
							? (await this.Sd()) ||
								this.Md({ message: v.localize(10075, null) })
							: this.tb &&
								this.Pb &&
								this.tb !== this.Pb &&
								this.Md({ message: v.localize(10076, null, this.tb, this.Pb) }),
							this.P &&
								this.pb === 0 &&
								this.qb === 0 &&
								(this.ud(),
								this.xterm?.raw.resize(
									this.pb || Kt.DefaultCols,
									this.qb || Kt.DefaultRows,
								));
						const Ut = this.shellLaunchConfig.icon;
						await this.n
							.createProcess(
								this.Cc,
								this.pb || Kt.DefaultCols,
								this.qb || Kt.DefaultRows,
							)
							.then((ei) => {
								ei &&
									("message" in ei
										? this.Md(ei)
										: "injectedArgs" in ei && (this.vb = ei.injectedArgs));
							}),
							!this.isDisposed &&
								(this.xterm?.shellIntegration &&
									this.capabilities.add(
										this.xterm.shellIntegration.capabilities,
									),
								(Ut !== this.shellLaunchConfig.icon ||
									this.shellLaunchConfig.color) &&
									((this.Db =
										this.Cc.attachPersistentProcess?.icon || this.Cc.icon),
									this.gc.fire({ instance: this, userInitiated: !1 })));
					}
					registerMarker(Mt) {
						return this.xterm?.raw.registerMarker(Mt);
					}
					addBufferMarker(Mt) {
						this.capabilities
							.get(q.TerminalCapability.BufferMarkDetection)
							?.addMark(Mt);
					}
					scrollToMark(Mt, Ut, ei) {
						this.xterm?.markTracker.scrollToClosestMarker(Mt, Ut, ei);
					}
					async freePortKillProcess(Mt, Ut) {
						await this.n?.freePortKillProcess(Mt), this.runCommand(Ut, !1);
					}
					Kd(Mt) {
						const Ut = Mt.data.indexOf("\x1B]633;C\x07");
						Ut !== -1
							? Mt.trackCommit
								? (this.Ld(Mt.data.substring(0, Ut + 8)),
									(Mt.writePromise = new Promise((ei) =>
										this.Ld(Mt.data.substring(Ut + 8), ei),
									)))
								: (this.Ld(Mt.data.substring(0, Ut + 8)),
									this.Ld(Mt.data.substring(Ut + 8)))
							: Mt.trackCommit
								? (Mt.writePromise = new Promise((ei) => this.Ld(Mt.data, ei)))
								: this.Ld(Mt.data);
					}
					Ld(Mt, Ut) {
						this.hc.fire(Mt);
						const ei = ++this.z;
						this.xterm?.raw.write(Mt, () => {
							(this.C = ei),
								this.n.acknowledgeDataEvent(Mt.length),
								Ut?.(),
								this.ic.fire(Mt);
						});
					}
					async Md(Mt) {
						if (this.F) return;
						const Ut = Vt(
							Mt,
							this.shellLaunchConfig,
							this.n.processState,
							this.ub,
						);
						if (
							this.Sb &&
							this.n.processState === ge.ProcessState.KilledDuringLaunch &&
							Ut?.code !== 0
						) {
							this.Nd(Ut?.message), this.bc.fire(Mt);
							return;
						}
						(this.F = !0), await this.Od(), (this.I = Ut?.code);
						const ei = Ut?.message;
						this.Rc.debug(
							"Terminal process exit",
							"instanceId",
							this.instanceId,
							"code",
							this.I,
							"processState",
							this.n.processState,
						);
						const mi = this.waitOnExit;
						mi && this.n.processState !== ge.ProcessState.KilledByUser
							? this.t.then((ii) => {
									switch ((ei && ii.raw.write((0, J.$aIb)(ei)), typeof mi)) {
										case "string":
											ii.raw.write(
												(0, J.$aIb)(mi, { excludeLeadingNewLine: !0 }),
											);
											break;
										case "function":
											this.exitCode !== void 0 &&
												ii.raw.write(
													(0, J.$aIb)(mi(this.exitCode), {
														excludeLeadingNewLine: !0,
													}),
												);
											break;
									}
									(ii.raw.options.disableStdin = !0),
										ii.raw.textarea && this.Pd(ii.raw);
								})
							: (ei &&
									(this.n.processState === ge.ProcessState.KilledDuringLaunch ||
									this.Gc.config.showExitAlert
										? this.Lc.notify({
												message: ei,
												severity: B.Severity.Error,
												actions: { primary: [this.m.createInstance(se.$DUc)] },
											})
										: this.Rc.warn(ei)),
								this.dispose(K.TerminalExitReason.Process)),
							this.bc.fire(Mt),
							this.isDisposed && this.bc.dispose();
					}
					Nd(Mt) {
						(this.Cc.ignoreShellIntegration = !0),
							this.relaunch(),
							this.statusList.add({
								id: $e.TerminalStatus.ShellIntegrationAttentionNeeded,
								severity: B.Severity.Warning,
								icon: a.$ak.warning,
								tooltip: `${Mt} ` + v.localize(10077, null),
								hoverActions: [
									{
										commandId: ge.TerminalCommandId.ShellIntegrationLearnMore,
										label: v.localize(10078, null),
										run: () => {
											this.ad.open(
												"https://code.visualstudio.com/docs/editor/integrated-terminal#_shell-integration",
											);
										},
									},
									{
										commandId: "workbench.action.openSettings",
										label: v.localize(10079, null),
										run: () => {
											this.bd.executeCommand(
												"workbench.action.openSettings",
												"terminal.integrated.shellIntegration.enabled",
											);
										},
									},
								],
							}),
							this.$c.publicLog2("terminal/shellIntegrationFailureProcessExit");
					}
					Od() {
						if (this.z === this.C) return Promise.resolve();
						let Mt = 0;
						return new Promise((Ut) => {
							const ei = C.$igb(
								C.$Ogb().window,
								() => {
									(this.z === this.C || ++Mt === 5) && (ei.dispose(), Ut());
								},
								20,
							);
						});
					}
					Pd(Mt) {
						Mt.textarea &&
							!this.u &&
							(this.u = C.$0fb(Mt.textarea, "keypress", (Ut) => {
								this.u &&
									(this.u.dispose(),
									(this.u = void 0),
									this.dispose(K.TerminalExitReason.Process),
									Ut.preventDefault());
							}));
					}
					Qd(Mt, Ut) {
						if (!this.Cc.initialText) {
							Ut?.();
							return;
						}
						const ei =
							typeof this.Cc.initialText == "string"
								? this.Cc.initialText
								: this.Cc.initialText?.text;
						typeof this.Cc.initialText == "string" ||
						this.Cc.initialText.trailingNewLine
							? Mt.raw.writeln(ei, Ut)
							: Mt.raw.write(ei, Ut);
					}
					async reuseTerminal(Mt, Ut = !1) {
						this.u?.dispose(), (this.u = void 0);
						const ei = this.xterm;
						ei &&
							(Ut ||
								(await new Promise((mi) =>
									ei.raw.write(
										`
\x1B[G`,
										mi,
									),
								)),
							Mt.initialText &&
								((this.Cc.initialText = Mt.initialText),
								await new Promise((mi) => this.Qd(ei, mi))),
							this.F &&
								this.Cc.waitOnExit &&
								((ei.raw.options.disableStdin = !1), (this.F = !1)),
							Ut && ei.clearDecorations()),
							this.statusList.remove($e.TerminalStatus.RelaunchNeeded),
							Ut || (Mt.initialText = " "),
							(this.Cc = Mt),
							await this.n
								.relaunch(
									this.Cc,
									this.pb || Kt.DefaultCols,
									this.qb || Kt.DefaultRows,
									Ut,
								)
								.then((mi) => {
									mi &&
										("message" in mi
											? this.Md(mi)
											: "injectedArgs" in mi && (this.vb = mi.injectedArgs));
								});
					}
					relaunch() {
						this.reuseTerminal(this.Cc, !0);
					}
					Rd(Mt) {
						this.isTitleSetByProcess &&
							this.ke(Mt, K.TitleEventSource.Sequence);
					}
					async Sd() {
						return (
							(await this.Yc.requestWorkspaceTrust({
								message: v.localize(10080, null),
							})) === !0
						);
					}
					async Td() {
						if (
							(this.sc.fire(this),
							this.Qc.getValue(K.TerminalSettingId.CopyOnSelection))
						) {
							if (this.Ud === !1) return;
							this.hasSelection() && (await this.copySelection());
						}
					}
					overrideCopyOnSelection(Mt) {
						if (this.Ud !== void 0)
							throw new Error(
								"Cannot set a copy on selection override multiple times",
							);
						return (this.Ud = Mt), (0, o.$Yc)(() => (this.Ud = void 0));
					}
					async Vd() {
						if (
							!(
								this.isDisposed ||
								this.shellLaunchConfig.customPtyImplementation
							)
						)
							try {
								const Mt = await this.ie(K.ProcessPropertyType.Cwd);
								if (typeof Mt != "string")
									throw new Error(`cwd is not a string ${Mt}`);
							} catch (Mt) {
								if (
									Mt instanceof Error &&
									Mt.message ===
										"Cannot refresh property when process is not set"
								)
									return;
								throw Mt;
							}
					}
					updateConfig() {
						this.Xd(this.Gc.config.commandsToSkipShell),
							this.he(this.n.environmentVariableInfo);
					}
					async Wd() {
						this.n.setUnicodeVersion(this.Gc.config.unicodeVersion);
					}
					updateAccessibilitySupport() {
						this.xterm.raw.options.screenReaderMode =
							this.Tc.isScreenReaderOptimized();
					}
					Xd(Mt) {
						const Ut = Mt.filter((ei) => ei[0] === "-").map((ei) =>
							ei.slice(1),
						);
						this.L = ge.$web.filter((ei) => !Ut.includes(ei)).concat(Mt);
					}
					layout(Mt) {
						if (((this.Hb = Mt), this.disableLayout)) return;
						const Ut = new C.$pgb(Mt.width, Math.max(Mt.height - this.ld, 21));
						if (
							!(
								Ut.width <= 0 ||
								Ut.height <= 20 ||
								!this.vd(Ut.width, Ut.height)
							)
						) {
							this.Yd(), this.Bb.isOpen() || this.Bb.open();
							for (const mi of this.q.values())
								this.xterm
									? mi.layout?.(this.xterm, Ut)
									: this.t.then((ii) => mi.layout?.(ii, Ut));
						}
					}
					async Yd(Mt) {
						if (!this.xterm) return;
						let Ut = this.cols,
							ei = this.rows;
						if (this.H && this.wb) {
							const mi = this.xterm.getFont(),
								ii = this.Gc.config;
							(this.xterm.raw.options.letterSpacing = mi.letterSpacing),
								(this.xterm.raw.options.lineHeight = mi.lineHeight),
								(this.xterm.raw.options.fontSize = mi.fontSize),
								(this.xterm.raw.options.fontFamily = mi.fontFamily),
								(this.xterm.raw.options.fontWeight = ii.fontWeight),
								(this.xterm.raw.options.fontWeightBold = ii.fontWeightBold),
								this.ud(),
								(Ut = this.cols),
								(ei = this.rows),
								(this.wb = !1);
						}
						isNaN(Ut) ||
							isNaN(ei) ||
							((Ut !== this.xterm.raw.cols || ei !== this.xterm.raw.rows) &&
								((this.sb || this.rb) &&
									(await this.je(K.ProcessPropertyType.FixedDimensions, {
										cols: this.rb,
										rows: this.sb,
									})),
								this.mc.fire()),
							(hi.h = { cols: Ut, rows: ei }),
							this.$b.resize(Ut, ei, Mt ?? !1));
					}
					async Zd(Mt) {
						await this.n.setDimensions(Mt.cols, Mt.rows);
					}
					setShellType(Mt) {
						this.M !== Mt &&
							Mt &&
							((this.M = Mt), this.Ac.set(Mt?.toString()), this.yc.fire(Mt));
					}
					$d(Mt, Ut, ei) {
						const mi = [];
						if (Mt && Mt.textarea) {
							ei && ei.length > 0
								? mi.push(v.localize(10081, null, Ut, ei))
								: mi.push(v.localize(10082, null, Ut)),
								this.Tc.isScreenReaderOptimized() ||
									mi.push(v.localize(10083, null));
							const Dt = this.Kc.lookupKeybinding(
								Ve.AccessibilityCommandId.OpenAccessibilityHelp,
							)?.getLabel();
							this.Qc.getValue(Q.AccessibilityVerbositySettingId.Terminal) &&
								Dt &&
								mi.push(v.localize(10084, null, Dt)),
								Mt.textarea.setAttribute(
									"aria-label",
									mi.join(`
`),
								);
						}
					}
					ae(Mt, Ut) {
						if (!Mt) return this.Kb;
						switch (Ut) {
							case K.TitleEventSource.Process:
								if (this.n.os === s.OperatingSystem.Windows)
									Mt = b.$kc.parse(Mt).name;
								else {
									const ei = Mt.indexOf(" ");
									Mt.startsWith("/")
										? (Mt = b.$sc(Mt))
										: ei > -1 && (Mt = Mt.substring(0, ei));
								}
								this.Kb = Mt;
								break;
							case K.TitleEventSource.Api:
								(this.Mb = Mt), (this.Eb.value = void 0);
								break;
							case K.TitleEventSource.Sequence:
								(this.Lb = Mt),
									this.n.os === s.OperatingSystem.Windows &&
										Mt.match(/^[a-zA-Z]:\\.+\.[a-zA-Z]{1,3}/) &&
										(this.Lb = b.$kc.parse(Mt).name);
								break;
						}
						return (this.O = Ut), Mt;
					}
					setOverrideDimensions(Mt, Ut = !1) {
						this.xb &&
							this.xb.forceExactSize &&
							!Mt &&
							this.qb === 0 &&
							this.pb === 0 &&
							((this.pb = this.xb.cols), (this.qb = this.xb.rows)),
							(this.xb = Mt),
							Ut ? this.Yd(!0) : this.Yd();
					}
					async setFixedDimensions() {
						const Mt = await this.Vc.input({
							title: v.localize(10085, null),
							placeHolder:
								"Enter a number of columns or leave empty for automatic width",
							validateInput: async (ei) =>
								ei.length > 0 && !ei.match(/^\d+$/)
									? {
											content:
												"Enter a number or leave empty size automatically",
											severity: B.Severity.Error,
										}
									: void 0,
						});
						if (Mt === void 0) return;
						(this.rb = this.be(Mt)),
							this.Ob?.refreshLabel(this),
							this.lb.set(!!this.rb);
						const Ut = await this.Vc.input({
							title: v.localize(10086, null),
							placeHolder:
								"Enter a number of rows or leave empty for automatic height",
							validateInput: async (ei) =>
								ei.length > 0 && !ei.match(/^\d+$/)
									? {
											content:
												"Enter a number or leave empty size automatically",
											severity: B.Severity.Error,
										}
									: void 0,
						});
						Ut !== void 0 &&
							((this.sb = this.be(Ut)),
							this.Ob?.refreshLabel(this),
							await this.ce(),
							this.Yd(),
							this.focus());
					}
					be(Mt) {
						if (Mt === "") return;
						const Ut = parseInt(Mt);
						if (Ut <= 0) throw new Error(`Could not parse dimension "${Mt}"`);
						return Ut;
					}
					async toggleSizeToContentWidth() {
						if (this.xterm?.raw.buffer.active) {
							if (this.Qb)
								this.lb.set(!1),
									(this.rb = void 0),
									(this.sb = void 0),
									(this.Qb = !1),
									this.ud(),
									await this.Yd();
							else {
								const Mt = this.xterm
										? this.xterm.getFont()
										: this.Gc.getFont(C.getWindow(this.domElement)),
									Ut = Math.floor(Kt.MaxCanvasWidth / (Mt.charWidth ?? 20)),
									ei = Math.max(
										this.maxCols,
										Math.min(
											this.xterm.getLongestViewportWrappedLineLength(),
											Ut,
										),
									);
								ei > this.xterm.raw.cols && (this.rb = ei);
							}
							await this.ce(), this.Ob?.refreshLabel(this), this.focus();
						}
					}
					ce() {
						return this.rb || this.sb ? this.de() : this.ee();
					}
					async de() {
						const Mt = (
							this.xterm
								? this.xterm.getFont()
								: this.Gc.getFont(C.getWindow(this.domElement))
						).charWidth;
						if (
							!(!this.xterm?.raw.element || !this.P || !Mt || !this.rb) &&
							(this.ib.classList.add("fixed-dims"),
							(this.Qb = !0),
							this.ud(),
							await this.Yd(),
							this.lb.set(!0),
							this.jb ||
								((this.jb = this.D(
									new r.$8hb(this.ib, {
										vertical: l.ScrollbarVisibility.Hidden,
										horizontal: l.ScrollbarVisibility.Auto,
										useShadows: !1,
										scrollYToX: !1,
										consumeMouseWheelIfScrollbarIsNeeded: !1,
									}),
								)),
								this.P.appendChild(this.jb.getDomNode())),
							this.jb.setScrollDimensions({
								width: this.xterm.raw.element.clientWidth,
								scrollWidth: this.rb * Mt + 40,
							}),
							(this.jb.getDomNode().style.paddingBottom = "16px"),
							s.$l)
						)
							for (
								let Ut = this.xterm.raw.buffer.active.viewportY;
								Ut < this.xterm.raw.buffer.active.length;
								Ut++
							) {
								const ei = this.xterm.raw.buffer.active.getLine(Ut);
								ei._line.isWrapped = !1;
							}
					}
					async ee() {
						!this.P ||
							!this.jb ||
							(this.jb.getDomNode().remove(),
							this.jb.dispose(),
							(this.jb = void 0),
							this.ib.remove(),
							this.ib.classList.remove("fixed-dims"),
							this.P.appendChild(this.ib));
					}
					fe(Mt) {
						(this.Cc.args = Mt.args),
							(this.Cc.cwd = Mt.cwd),
							(this.Cc.executable = Mt.executable),
							(this.Cc.env = Mt.env);
					}
					ge(Mt) {
						Mt.requiresAction &&
							this.xterm?.raw.textarea?.setAttribute(
								"aria-label",
								v.localize(10087, null, this.w),
							),
							this.he(Mt);
					}
					async he(Mt) {
						if (!Mt) {
							this.statusList.remove($e.TerminalStatus.RelaunchNeeded),
								this.statusList.remove(
									$e.TerminalStatus.EnvironmentVariableInfoChangesActive,
								);
							return;
						}
						if (
							Mt.requiresAction &&
							this.Gc.config.environmentChangesRelaunch &&
							!this.n.hasWrittenData &&
							(!this.Cc.isFeatureTerminal ||
								(this.reconnectionProperties &&
									this.Qc.getValue("task.reconnection") === !0)) &&
							!this.Cc.customPtyImplementation &&
							!this.Cc.isExtensionOwnedTerminal &&
							!this.Cc.attachPersistentProcess &&
							!(
								this.n.remoteAuthority &&
								this.Gc.config.windowsEnableConpty &&
								(await this.n.getBackendOS()) === s.OperatingSystem.Windows
							)
						) {
							this.relaunch();
							return;
						}
						const Ut = (0, Le.$Oeb)(
							this.shellLaunchConfig.cwd,
							this.Wc,
							this.Zc,
						);
						this.statusList.add(Mt.getStatus({ workspaceFolder: Ut }));
					}
					async getInitialCwd() {
						return this.ub || (this.ub = this.n.initialCwd), this.ub;
					}
					async getCwd() {
						return this.capabilities.has(q.TerminalCapability.CwdDetection)
							? this.capabilities
									.get(q.TerminalCapability.CwdDetection)
									.getCwd()
							: this.capabilities.has(q.TerminalCapability.NaiveCwdDetection)
								? this.capabilities
										.get(q.TerminalCapability.NaiveCwdDetection)
										.getCwd()
								: this.n.initialCwd;
					}
					async ie(Mt) {
						return await this.processReady, this.n.refreshProperty(Mt);
					}
					async je(Mt, Ut) {
						return this.n.updateProperty(Mt, Ut);
					}
					async rename(Mt) {
						this.ke(Mt, K.TitleEventSource.Api);
					}
					ke(Mt, Ut) {
						const ei = !Mt;
						Mt = this.ae(Mt, Ut);
						const mi = Mt !== this.N;
						(this.N = Mt),
							this.Ob?.refreshLabel(this, ei),
							this.$d(this.xterm?.raw, this.w, this.N),
							mi && this.fc.fire(this);
					}
					async changeIcon(Mt) {
						if (Mt)
							return (
								(this.Db = Mt),
								this.gc.fire({ instance: this, userInitiated: !0 }),
								Mt
							);
						const Ut = this.m.createInstance(nt.$jVc),
							ei = await Ut.pickIcons();
						if ((Ut.dispose(), !!ei))
							return (
								(this.Db = ei),
								this.gc.fire({ instance: this, userInitiated: !0 }),
								ei
							);
					}
					async changeColor(Mt, Ut) {
						if (Mt)
							return (
								(this.shellLaunchConfig.color = Mt),
								this.gc.fire({ instance: this, userInitiated: !0 }),
								Mt
							);
						if (Ut) {
							(this.shellLaunchConfig.color = ""),
								this.gc.fire({ instance: this, userInitiated: !0 });
							return;
						}
						if (!this.sd()) return;
						const mi = this.Pc.getColorTheme(),
							ii = (0, oe.$Pnc)(mi),
							Dt = (0, oe.$Qnc)(mi),
							Jt = [];
						for (const $i of ii) {
							const Wt = (0, oe.$Onc)($i);
							Jt.push({
								label: `$(${a.$ak.circleFilled.id}) ${$i.replace("terminal.ansi", "")}`,
								id: $i,
								description: $i,
								iconClasses: [Wt],
							});
						}
						Jt.push({ type: "separator" });
						const si = { label: "Reset to default" };
						Jt.push(si);
						const Zt = [],
							ci = this.Vc.createQuickPick({ useSeparators: !0 });
						Zt.push(ci),
							(ci.items = Jt),
							(ci.matchOnDescription = !0),
							(ci.placeholder = v.localize(10088, null)),
							ci.show();
						const ri = await new Promise(($i) => {
							Zt.push(ci.onDidHide(() => $i(void 0))),
								Zt.push(ci.onDidAccept(() => $i(ci.selectedItems[0])));
						});
						return (
							(0, o.$Vc)(Zt),
							ri &&
								((this.shellLaunchConfig.color = ri.id),
								this.gc.fire({ instance: this, userInitiated: !0 })),
							ci.hide(),
							Dt.dispose(),
							ri?.id
						);
					}
					forceScrollbarVisibility() {
						this.ib.classList.add("force-scrollbar");
					}
					resetScrollbarVisibility() {
						this.ib.classList.remove("force-scrollbar");
					}
					setParentContextKeyService(Mt) {
						this.Ub.updateParent(Mt);
					}
					async handleMouseEvent(Mt, Ut) {
						if (
							C.$Ygb(Mt.target) &&
							(Mt.target.classList.contains("scrollbar") ||
								Mt.target.classList.contains("slider"))
						)
							return { cancelContextMenu: !0 };
						if (Mt.which === 2) {
							switch (this.Gc.config.middleClickBehavior) {
								case "paste":
									this.paste();
									break;
								case "default":
								default:
									this.focus();
									break;
							}
							return;
						}
						if (Mt.which === 3) {
							const ei = this.Gc.config.rightClickBehavior;
							if (ei === "nothing")
								return Mt.shiftKey ? void 0 : { cancelContextMenu: !0 };
							if (ei === "copyPaste" || ei === "paste") {
								if (ei === "copyPaste" && Mt.shiftKey) {
									(0, jt.$zUc)(C.$Ogb(), Mt, this, Ut, this.Ec);
									return;
								}
								return (
									ei === "copyPaste" && this.hasSelection()
										? (await this.copySelection(), this.clearSelection())
										: w.$Yfb.clipboard.readText
											? this.paste()
											: this.Lc.info(
													`This browser doesn't support the clipboard.readText API needed to trigger a paste, try ${s.$m ? "\u2318" : "Ctrl"}+V instead.`,
												),
									s.$m && setTimeout(() => this.clearSelection(), 0),
									{ cancelContextMenu: !0 }
								);
							}
						}
					}
				};
				(e.$oVc = Xe),
					Ne([(0, h.$fi)(50)], Xe.prototype, "xd", null),
					Ne([(0, h.$fi)(1e3)], Xe.prototype, "relaunch", null),
					Ne([(0, h.$fi)(2e3)], Xe.prototype, "Vd", null),
					(e.$oVc =
						Xe =
						hi =
							Ne(
								[
									j(3, L.$6j),
									j(4, ti.$Xxb),
									j(5, N.$Li),
									j(6, Z.$jIb),
									j(7, ge.$reb),
									j(8, lt.$lVc),
									j(9, Ke.$I8),
									j(10, R.$uZ),
									j(11, B.$4N),
									j(12, Je.$7Z),
									j(13, te.$HMb),
									j(14, T.$Vxb),
									j(15, Y.$iP),
									j(16, k.$gj),
									j(17, K.$YJ),
									j(18, x.$lq),
									j(19, S.$XK),
									j(20, z.$Bk),
									j(21, F.$DJ),
									j(22, Oe.$r8),
									j(23, ie.$Vi),
									j(24, Fe.$IY),
									j(25, ne.$qO),
									j(26, xe.$Feb),
									j(27, H.$km),
									j(28, U.$7rb),
									j(29, P.$ek),
									j(30, P.$ek),
									j(31, Se.$0zb),
									j(32, Me.$B7b),
									j(33, je.$d0b),
									j(34, rt.$5X),
									j(35, bt.$V7b),
									j(36, I.$Owb),
									j(37, _.$K1),
									j(38, kt.IComposerService),
								],
								Xe,
							));
				let It = class extends o.$1c {
					get onDropFile() {
						return this.h.event;
					}
					get onDropTerminal() {
						return this.j.event;
					}
					constructor(Mt, Ut, ei, mi) {
						super(),
							(this.m = Mt),
							(this.n = Ut),
							(this.q = ei),
							(this.s = mi),
							(this.h = this.D(new n.$re())),
							(this.j = this.D(new n.$re())),
							this.D((0, o.$Yc)(() => this.t()));
					}
					t() {
						this.f?.remove(), (this.f = void 0);
					}
					onDragEnter(Mt) {
						if (
							(0, D.$mzb)(
								Mt,
								E.$Ohb.FILES,
								E.$Ohb.RESOURCES,
								Z.TerminalDataTransfers.Terminals,
								D.$hzb.FILES,
							)
						) {
							if (
								(this.f ||
									((this.f = document.createElement("div")),
									this.f.classList.add("terminal-drop-overlay")),
								(0, D.$mzb)(Mt, Z.TerminalDataTransfers.Terminals))
							) {
								const Ut = this.u(Mt);
								this.f.classList.toggle("drop-before", Ut === "before"),
									this.f.classList.toggle("drop-after", Ut === "after");
							}
							this.f.parentElement || this.m.appendChild(this.f);
						}
					}
					onDragLeave(Mt) {
						this.t();
					}
					onDragEnd(Mt) {
						this.t();
					}
					onDragOver(Mt) {
						if (!(!Mt.dataTransfer || !this.f)) {
							if ((0, D.$mzb)(Mt, Z.TerminalDataTransfers.Terminals)) {
								const Ut = this.u(Mt);
								this.f.classList.toggle("drop-before", Ut === "before"),
									this.f.classList.toggle("drop-after", Ut === "after");
							}
							this.f.style.opacity = "1";
						}
					}
					async onDrop(Mt) {
						if ((this.t(), !Mt.dataTransfer)) return;
						const Ut = (0, ye.$VUc)(Mt);
						if (Ut) {
							for (const Dt of Ut) {
								const Jt = this.u(Mt);
								this.j.fire({ uri: Dt, side: Jt });
							}
							return;
						}
						let ei;
						const mi = Mt.dataTransfer.getData(E.$Ohb.RESOURCES);
						mi && (ei = y.URI.parse(JSON.parse(mi)[0]));
						const ii = Mt.dataTransfer.getData(D.$hzb.FILES);
						!ei && ii && (ei = y.URI.file(JSON.parse(ii)[0])),
							!ei &&
								Mt.dataTransfer.files.length > 0 &&
								this.s.getPathForFile(Mt.dataTransfer.files[0]) &&
								(ei = y.URI.file(
									this.s.getPathForFile(Mt.dataTransfer.files[0]),
								)),
							ei && this.h.fire(ei);
					}
					u(Mt) {
						const Ut = this.m;
						if (!Ut) return "after";
						const ei = Ut.getBoundingClientRect();
						return this.w() === m.Orientation.HORIZONTAL
							? Mt.clientX - ei.left < ei.width / 2
								? "before"
								: "after"
							: Mt.clientY - ei.top < ei.height / 2
								? "before"
								: "after";
					}
					w() {
						const Mt = this.n.getPanelPosition();
						return this.q.getViewLocationById(ge.$geb) ===
							_.ViewContainerLocation.Panel && (0, He.$nEb)(Mt)
							? m.Orientation.HORIZONTAL
							: m.Orientation.VERTICAL;
					}
				};
				It = Ne([j(1, He.$mEb), j(2, _.$K1), j(3, gt.$asb)], It);
				var Lt;
				(function (Gt) {
					(Gt.Title = "title"), (Gt.Description = "description");
				})(Lt || (Lt = {}));
				let xt = class extends o.$1c {
					get title() {
						return this.f;
					}
					get description() {
						return this.h;
					}
					constructor(Mt, Ut, ei) {
						super(),
							(this.m = Mt),
							(this.n = Ut),
							(this.q = ei),
							(this.f = ""),
							(this.h = ""),
							(this.j = this.D(new n.$re())),
							(this.onDidChangeLabel = this.j.event);
					}
					refreshLabel(Mt, Ut) {
						(this.f = this.computeLabel(
							Mt,
							this.n.config.tabs.title,
							Lt.Title,
							Ut,
						)),
							(this.h = this.computeLabel(
								Mt,
								this.n.config.tabs.description,
								Lt.Description,
							)),
							(this.f !== Mt.title || this.h !== Mt.description || Ut) &&
								this.j.fire({ title: this.f, description: this.h });
					}
					computeLabel(Mt, Ut, ei, mi) {
						const ii =
								Mt.shellLaunchConfig.attachPersistentProcess?.type ||
								Mt.shellLaunchConfig.type,
							Dt = {
								cwd: Mt.cwd || Mt.initialCwd || "",
								cwdFolder: "",
								workspaceFolderName: Mt.workspaceFolder?.name,
								workspaceFolder: Mt.workspaceFolder
									? b.$sc(Mt.workspaceFolder.uri.fsPath)
									: void 0,
								local: ii === "Local" ? Ze.$hUc.typeLocal : void 0,
								process: Mt.processName,
								sequence: Mt.sequence,
								task: ii === "Task" ? Ze.$hUc.typeTask : void 0,
								fixedDimensions: Mt.fixedCols
									? Mt.fixedRows
										? `\u2194${Mt.fixedCols} \u2195${Mt.fixedRows}`
										: `\u2194${Mt.fixedCols}`
									: Mt.fixedRows
										? `\u2195${Mt.fixedRows}`
										: "",
								separator: { label: this.n.config.tabs.separator },
							};
						if (
							((Dt.workspaceFolderName =
								Mt.workspaceFolder?.name ?? Dt.workspaceFolder),
							(Ut = Ut.trim()),
							!Ut)
						)
							return (ei === Lt.Title && Mt.processName) || "";
						if (!mi && Mt.staticTitle && ei === Lt.Title)
							return (
								Mt.staticTitle.replace(/[\n\r\t]/g, "") ||
								Dt.process?.replace(/[\n\r\t]/g, "") ||
								""
							);
						const Jt =
								Mt.capabilities.has(q.TerminalCapability.CwdDetection) ||
								Mt.capabilities.has(q.TerminalCapability.NaiveCwdDetection),
							Zt = this.q.getWorkspace().folders.length > 1;
						if (
							Dt.cwd &&
							Jt &&
							(!Mt.shellLaunchConfig.isFeatureTerminal || ei === Lt.Title)
						) {
							const ri = y.URI.from({
								scheme: Mt.workspaceFolder?.uri.scheme || f.Schemas.file,
								path: Mt.cwd ? b.$pc(Mt.cwd) : void 0,
							});
							let $i = !1;
							if (Zt) $i = !0;
							else if (Mt.workspaceFolder?.uri) {
								const Wt = this.m.hasCapability(
									Mt.workspaceFolder.uri,
									M.FileSystemProviderCapabilities.PathCaseSensitive,
								);
								$i =
									ri.fsPath.localeCompare(
										Mt.workspaceFolder.uri.fsPath,
										void 0,
										{ sensitivity: Wt ? "case" : "base" },
									) !== 0;
							}
							$i && (Dt.cwdFolder = b.$sc(Dt.cwd));
						}
						const ci = (0, p.$BO)(Ut, Dt)
							.replace(/[\n\r\t]/g, "")
							.trim();
						return ci === "" && ei === Lt.Title ? Mt.processName || "" : ci;
					}
				};
				(e.$pVc = xt),
					(e.$pVc = xt = Ne([j(0, M.$ll), j(1, Z.$jIb), j(2, ie.$Vi)], xt));
				function Vt(Gt, Mt, Ut, ei) {
					if (Gt === void 0 || Gt === 0) return { code: Gt, message: void 0 };
					const mi = typeof Gt == "number" ? Gt : Gt.code;
					let ii;
					switch (typeof Gt) {
						case "number": {
							let Dt;
							Mt.executable &&
								((Dt = Mt.executable),
								typeof Mt.args == "string"
									? (Dt += ` ${Mt.args}`)
									: Mt.args &&
										Mt.args.length &&
										(Dt += Mt.args.map((Jt) => ` '${Jt}'`).join())),
								Ut === ge.ProcessState.KilledDuringLaunch
									? Dt
										? (ii = v.localize(10089, null, Dt, mi))
										: (ii = v.localize(10090, null, mi))
									: Dt
										? (ii = v.localize(10091, null, Dt, mi))
										: (ii = v.localize(10092, null, mi));
							break;
						}
						case "object": {
							if (Gt.message.toString().includes("Could not find pty with id"))
								break;
							let Dt = Gt.message;
							const Jt = Gt.message.match(/.*error code:\s*(\d+).*$/);
							if (Jt)
								switch (Jt.length > 1 ? parseInt(Jt[1]) : void 0) {
									case 5:
										Dt = `Access was denied to the path containing your executable "${Mt.executable}". Manage and change your permissions to get this to work`;
										break;
									case 267:
										Dt = `Invalid starting directory "${ei}", review your terminal.integrated.cwd setting`;
										break;
									case 1260:
										Dt =
											"Windows cannot open this program because it has been prevented by a software restriction policy. For more information, open Event Viewer or contact your system Administrator";
										break;
								}
							ii = v.localize(10093, null, Dt);
							break;
						}
					}
					return { code: mi, message: ii };
				}
				let Bt = class {
					constructor(Mt, Ut) {
						(this.d = Mt), (this.f = Ut);
					}
					getBackgroundColor(Mt) {
						const Ut = Mt.getColor(be.$iHb);
						return (
							Ut ||
							(this.d.target === K.TerminalLocation.Editor
								? Mt.getColor(W.$8P)
								: this.f.getViewLocationById(ge.$geb) ===
										_.ViewContainerLocation.Panel
									? Mt.getColor(ee.$qFb)
									: Mt.getColor(ee.$wGb))
						);
					}
				};
				(e.$rVc = Bt), (e.$rVc = Bt = Ne([j(1, _.$K1)], Bt));
			},
		),
		define(
			de[4373],
			he([1, 0, 107, 20, 3, 117, 5, 1074, 8, 6, 237, 30, 78, 15]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sVc = void 0);
				let n = class extends w.$1c {
					get onDidCreateInstance() {
						return this.f.event;
					}
					constructor(p, o, f) {
						super(),
							(this.g = p),
							(this.h = o),
							(this.c = new Map()),
							(this.f = this.D(new r.$re())),
							(this.a = u.TerminalContextKeys.shellType.bindTo(this.h)),
							(this.b = u.TerminalContextKeys.inTerminalRunCommandPicker.bindTo(
								this.h,
							));
						for (const b of [void 0, f.remoteAuthority]) {
							const { promise: s, resolve: l } = (0, c.$Fh)();
							this.c.set(b, { promise: s, resolve: l });
						}
					}
					createInstance(p, o) {
						const f = this.convertProfileToShellLaunchConfig(p),
							b = this.g.createInstance(d.$oVc, this.a, this.b, f);
						return (b.target = o), this.f.fire(b), b;
					}
					convertProfileToShellLaunchConfig(p, o) {
						if (p && "profileName" in p) {
							const f = p;
							return f.path
								? {
										executable: f.path,
										args: f.args,
										env: f.env,
										icon: f.icon,
										color: f.color,
										name: f.overrideName ? f.profileName : void 0,
										cwd: o,
									}
								: p;
						}
						return p ? (o && (p.cwd = o), p) : {};
					}
					async getBackend(p) {
						let o = a.$Io.as(E.$WJ.Backend).getTerminalBackend(p);
						return (
							o ||
								(await this.c.get(p)?.promise,
								(o = a.$Io.as(E.$WJ.Backend).getTerminalBackend(p))),
							o
						);
					}
					getRegisteredBackends() {
						return a.$Io.as(E.$WJ.Backend).backends.values();
					}
					didRegisterBackend(p) {
						this.c.get(p)?.resolve();
					}
				};
				(e.$sVc = n),
					(e.$sVc = n = Ne([j(0, C.$Li), j(1, m.$6j), j(2, h.$r8)], n)),
					(0, i.$lK)(t.$mIb, n, i.InstantiationType.Delayed);
			},
		),
		define(
			de[4374],
			he([
				1, 0, 7, 15, 138, 6, 3, 23, 12, 9, 4, 31, 10, 8, 57, 5, 40, 117, 776,
				51, 79, 212, 35, 26, 25, 100, 89, 107, 833, 514, 3169, 690, 145, 237,
				446, 66, 18, 78, 53, 52, 143, 32, 45, 1299, 1074, 39, 675, 520, 240,
				1769, 3144, 1948, 75, 400,
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
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
				Y,
				ie,
				ne,
				ee,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$yVc = void 0),
					(t = mt(t)),
					(u = mt(u));
				let _ = class extends C.$1c {
					get isProcessSupportRegistered() {
						return !!this.n.get();
					}
					get connectionState() {
						return this.C;
					}
					get whenConnected() {
						return this.F.p;
					}
					get restoredGroupCount() {
						return this.G;
					}
					get instances() {
						return this.kb.instances.concat(this.jb.instances).concat(this.j);
					}
					get detachedInstances() {
						return this.b;
					}
					getReconnectedTerminals(Z) {
						return this.I.get(Z);
					}
					get defaultLocation() {
						return this.ib.config.defaultLocation ===
							o.TerminalLocationString.Editor
							? o.TerminalLocation.Editor
							: o.TerminalLocation.Panel;
					}
					get activeInstance() {
						for (const Z of this.a.values()) if (Z?.hasFocus) return Z;
						return this.J;
					}
					get onDidCreateInstance() {
						return this.M.event;
					}
					get onDidChangeInstanceDimensions() {
						return this.N.event;
					}
					get onDidRegisterProcessSupport() {
						return this.O.event;
					}
					get onDidChangeConnectionState() {
						return this.P.event;
					}
					get onDidRequestStartExtensionTerminal() {
						return this.Q.event;
					}
					get onDidDisposeInstance() {
						return this.R.event;
					}
					get onDidFocusInstance() {
						return this.S.event;
					}
					get onDidChangeActiveInstance() {
						return this.U.event;
					}
					get onDidChangeInstances() {
						return this.W.event;
					}
					get onDidChangeInstanceCapability() {
						return this.X.event;
					}
					get onDidChangeActiveGroup() {
						return this.Y.event;
					}
					get onAnyInstanceData() {
						return this.D(
							this.createOnInstanceEvent((Z) =>
								E.Event.map(Z.onData, (se) => ({ instance: Z, data: se })),
							),
						).event;
					}
					get onAnyInstanceDataInput() {
						return this.D(
							this.createOnInstanceEvent((Z) =>
								E.Event.map(Z.onDidInputData, () => Z, Z.store),
							),
						).event;
					}
					get onAnyInstanceIconChange() {
						return this.D(this.createOnInstanceEvent((Z) => Z.onIconChanged))
							.event;
					}
					get onAnyInstanceMaximumDimensionsChange() {
						return this.D(
							this.createOnInstanceEvent((Z) =>
								E.Event.map(Z.onMaximumDimensionsChanged, () => Z, Z.store),
							),
						).event;
					}
					get onAnyInstancePrimaryStatusChange() {
						return this.D(
							this.createOnInstanceEvent((Z) =>
								E.Event.map(
									Z.statusList.onDidChangePrimaryStatus,
									() => Z,
									Z.store,
								),
							),
						).event;
					}
					get onAnyInstanceProcessIdReady() {
						return this.D(this.createOnInstanceEvent((Z) => Z.onProcessIdReady))
							.event;
					}
					get onAnyInstanceSelectionChange() {
						return this.D(
							this.createOnInstanceEvent((Z) => Z.onDidChangeSelection),
						).event;
					}
					get onAnyInstanceTitleChange() {
						return this.D(this.createOnInstanceEvent((Z) => Z.onTitleChanged))
							.event;
					}
					constructor(
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
						be,
						Ce,
						Le,
						Fe,
						Oe,
						xe,
						He,
						Ke,
						Je,
						Te,
						Ee,
					) {
						if (
							(super(),
							(this.Z = Z),
							(this.$ = se),
							(this.ab = re),
							(this.bb = le),
							(this.cb = oe),
							(this.db = ae),
							(this.eb = pe),
							(this.fb = $e),
							(this.gb = ye),
							(this.hb = ue),
							(this.ib = fe),
							(this.jb = me),
							(this.kb = ve),
							(this.lb = ge),
							(this.mb = be),
							(this.nb = Ce),
							(this.ob = Le),
							(this.pb = Fe),
							(this.qb = Oe),
							(this.rb = xe),
							(this.sb = He),
							(this.tb = Ke),
							(this.ub = Je),
							(this.vb = Te),
							(this.wb = Ee),
							(this.a = new Map()),
							(this.b = new Set()),
							(this.h = !1),
							(this.j = []),
							(this.m = new Map()),
							(this.C = T.TerminalConnectionState.Connecting),
							(this.F = new i.$0h()),
							(this.G = 0),
							(this.I = new Map()),
							(this.M = this.D(new E.$re())),
							(this.N = this.D(new E.$re())),
							(this.O = this.D(new E.$re())),
							(this.P = this.D(new E.$re())),
							(this.Q = this.D(new E.$re())),
							(this.R = this.D(new E.$re())),
							(this.S = this.D(new E.$re())),
							(this.U = this.D(new E.$re())),
							(this.W = this.D(new E.$re())),
							(this.X = this.D(new E.$re())),
							(this.Y = this.D(new E.$re())),
							this.D(
								this.onDidCreateInstance(() =>
									this.nb.refreshAvailableProfiles(),
								),
							),
							this.yb(this.kb),
							this.yb(this.jb),
							this.D(this.kb.onDidChangeActiveGroup(this.Y.fire, this.Y)),
							this.D(
								this.lb.onDidCreateInstance((Ie) => {
									this.Pb(Ie), this.M.fire(Ie);
								}),
							),
							this.D(
								this.kb.onDidChangeActiveInstance((Ie) => {
									!Ie && !this.h && this.kb.hidePanel(),
										Ie?.shellType
											? this.f.set(Ie.shellType.toString())
											: (!Ie || !Ie.shellType) && this.f.reset();
								}),
							),
							this.Gb(),
							(this.f = N.TerminalContextKeys.shellType.bindTo(this.Z)),
							(this.n = N.TerminalContextKeys.processSupported.bindTo(this.Z)),
							this.n.set(!m.$r || this.db.getConnection() !== null),
							(this.s = N.TerminalContextKeys.terminalHasBeenCreated.bindTo(
								this.Z,
							)),
							(this.u = N.TerminalContextKeys.count.bindTo(this.Z)),
							(this.c = N.TerminalContextKeys.terminalEditorActive.bindTo(
								this.Z,
							)),
							this.D(
								this.onDidChangeActiveInstance((Ie) => {
									this.c.set(
										!!Ie?.target && Ie.target === o.TerminalLocation.Editor,
									);
								}),
							),
							this.registerLastTerminalCommandTimingListenersForCmdk(),
							this.D(
								se.onBeforeShutdown(async (Ie) =>
									Ie.veto(this.Hb(Ie.reason), "veto.terminal"),
								),
							),
							this.D(se.onWillShutdown((Ie) => this.Lb(Ie))),
							this.xb(),
							(0, i.$Nh)(0).then(() =>
								this.D(this.cb.createInstance(te, ne.$Bfb.document.head)),
							),
							!ie.$vUc.hasRegisteredActions)
						)
							for (const Ie of ie.$vUc.registeredActions) Ie[1](this.tb, this);
						ie.$vUc.hasRegisteredActions = !0;
					}
					highlightTerminalContainer(Z = 500) {
						this.tb.setNonPersistentStorage({
							shouldHighlightTerminalContainer: !0,
						}),
							Z !== void 0 &&
								Z > 0 &&
								setTimeout(() => {
									this.tb.setNonPersistentStorage({
										shouldHighlightTerminalContainer: !1,
									});
								}, Z);
					}
					registerLastTerminalCommandTimingListenersForCmdk() {
						this.D(
							this.onAnyInstanceDataInput(() => {
								this.wb?.markNowAsLastTerminalCommand();
							}),
						);
					}
					async showProfileQuickPick(Z, se) {
						const le = await this.cb.createInstance(L.$jUc).showAndGetResult(Z);
						if (!le || typeof le == "string") return;
						const oe = le.keyMods;
						if (Z === "createInstance") {
							const ae = this.getDefaultInstanceHost().activeInstance;
							let pe;
							if (le.config && "id" in le?.config) {
								await this.createContributedTerminalProfile(
									le.config.extensionIdentifier,
									le.config.id,
									{
										icon: le.config.options?.icon,
										color: le.config.options?.color,
										location:
											oe?.alt && ae
												? { splitActiveTerminal: !0 }
												: this.defaultLocation,
									},
								);
								return;
							} else
								le.config &&
									"profileName" in le.config &&
									(oe?.alt && ae
										? (pe = await this.createTerminal({
												location: { parentTerminal: ae },
												config: le.config,
												cwd: se,
											}))
										: (pe = await this.createTerminal({
												location: this.defaultLocation,
												config: le.config,
												cwd: se,
											})));
							if (pe && this.defaultLocation !== o.TerminalLocation.Editor)
								return this.kb.showPanel(!0), this.setActiveInstance(pe), pe;
						}
					}
					async xb() {
						(0, W.mark)("code/terminal/willGetTerminalBackend"),
							(this.q = await this.lb.getBackend(this.hb.remoteAuthority)),
							(0, W.mark)("code/terminal/didGetTerminalBackend");
						const Z = this.ib.config.enablePersistentSessions;
						this.C = T.TerminalConnectionState.Connecting;
						const se = !!this.hb.remoteAuthority && Z;
						this.q &&
							this.D(
								this.q.onDidRequestDetach(async (le) => {
									const oe = this.getInstanceFromResource(
										(0, D.$UUc)(le.workspaceId, le.instanceId),
									);
									if (oe) {
										const ae = oe?.persistentProcessId;
										ae &&
										!oe.shellLaunchConfig.isFeatureTerminal &&
										!oe.shellLaunchConfig.customPtyImplementation
											? (oe.target === o.TerminalLocation.Editor
													? this.jb.detachInstance(oe)
													: this.kb.getGroupForInstance(oe)?.removeInstance(oe),
												await oe.detachProcessAndDispose(
													o.TerminalExitReason.User,
												),
												await this.q?.acceptDetachInstanceReply(
													le.requestId,
													ae,
												))
											: await this.q?.acceptDetachInstanceReply(
													le.requestId,
													void 0,
												);
									}
								}),
							),
							(0, W.mark)("code/terminal/willReconnect");
						let re;
						se
							? (re = this.Bb())
							: Z
								? (re = this.Cb())
								: (re = Promise.resolve()),
							re.then(async () => {
								this.Ab(),
									(0, W.mark)("code/terminal/didReconnect"),
									(0, W.mark)("code/terminal/willReplay");
								const le =
									(await this.H?.then((oe) =>
										oe.map((ae) => ae.terminalInstances).flat(),
									)) ?? [];
								await Promise.all(
									le.map(
										(oe) =>
											new Promise((ae) =>
												E.Event.once(oe.onProcessReplayComplete)(ae),
											),
									),
								),
									(0, W.mark)("code/terminal/didReplay"),
									(0, W.mark)("code/terminal/willGetPerformanceMarks"),
									await Promise.all(
										Array.from(this.lb.getRegisteredBackends()).map(
											async (oe) => {
												this.vb.setPerformanceMarks(
													oe.remoteAuthority === void 0
														? "localPtyHost"
														: "remotePtyHost",
													await oe.getPerformanceMarks(),
												),
													oe.setReady();
											},
										),
									),
									(0, W.mark)("code/terminal/didGetPerformanceMarks"),
									this.F.complete();
							});
					}
					getPrimaryBackend() {
						return this.q;
					}
					yb(Z) {
						this.D(Z.onDidChangeInstances(this.W.fire, this.W)),
							this.D(Z.onDidDisposeInstance(this.R.fire, this.R)),
							this.D(Z.onDidChangeActiveInstance((se) => this.zb(Z, se))),
							this.D(
								Z.onDidFocusInstance((se) => {
									this.S.fire(se), this.zb(Z, se);
								}),
							),
							this.D(
								Z.onDidChangeInstanceCapability((se) => {
									this.X.fire(se);
								}),
							),
							this.a.set(Z, void 0);
					}
					zb(Z, se) {
						if ((this.a.set(Z, se), se === void 0))
							for (const re of this.a.values()) re && (se = re);
						(this.J = se), this.U.fire(se);
					}
					setActiveInstance(Z) {
						Z.shellLaunchConfig.hideFromUser && this.ac(Z),
							Z.target === o.TerminalLocation.Editor
								? this.jb.setActiveInstance(Z)
								: this.kb.setActiveInstance(Z);
					}
					async focusInstance(Z) {
						return Z.target === o.TerminalLocation.Editor
							? this.jb.focusInstance(Z)
							: this.kb.focusInstance(Z);
					}
					async focusActiveInstance() {
						if (this.J) return this.focusInstance(this.J);
					}
					async createContributedTerminalProfile(Z, se, re) {
						await this.ob.activateByEvent(`onTerminalProfile:${se}`);
						const le = this.nb.getContributedProfileProvider(Z, se);
						if (!le) {
							this.pb.error(
								`No terminal profile provider registered for id "${se}"`,
							);
							return;
						}
						try {
							await le.createContributedTerminalProfile(re),
								this.kb.setActiveInstanceByIndex(this.kb.instances.length - 1),
								await this.kb.activeInstance?.focusWhenReady();
						} catch (oe) {
							this.pb.error(oe.message);
						}
					}
					async safeDisposeTerminal(Z) {
						if (
							!(
								Z.target !== o.TerminalLocation.Editor &&
								Z.hasChildProcesses &&
								(this.ib.config.confirmOnKill === "panel" ||
									this.ib.config.confirmOnKill === "always") &&
								(await this.Sb(!0))
							)
						)
							return new Promise((se) => {
								E.Event.once(Z.onExit)(() => se()),
									Z.dispose(o.TerminalExitReason.User);
							});
					}
					Ab() {
						(this.C = T.TerminalConnectionState.Connected),
							this.P.fire(),
							this.ab.trace("Pty host ready");
					}
					async Bb() {
						const Z = this.hb.remoteAuthority;
						if (!Z) return;
						const se = await this.lb.getBackend(Z);
						if (!se) return;
						(0, W.mark)("code/terminal/willGetTerminalLayoutInfo");
						const re = await se.getTerminalLayoutInfo();
						(0, W.mark)("code/terminal/didGetTerminalLayoutInfo"),
							se.reduceConnectionGraceTime(),
							(0, W.mark)("code/terminal/willRecreateTerminalGroups"),
							await this.Db(re),
							(0, W.mark)("code/terminal/didRecreateTerminalGroups"),
							this.Fb(),
							this.ab.trace("Reconnected to remote terminals");
					}
					async Cb() {
						const Z = await this.lb.getBackend();
						if (!Z) return;
						(0, W.mark)("code/terminal/willGetTerminalLayoutInfo");
						const se = await Z.getTerminalLayoutInfo();
						(0, W.mark)("code/terminal/didGetTerminalLayoutInfo"),
							se &&
								se.tabs.length > 0 &&
								((0, W.mark)("code/terminal/willRecreateTerminalGroups"),
								(this.H = this.Db(se)),
								(0, W.mark)("code/terminal/didRecreateTerminalGroups")),
							this.Fb(),
							this.ab.trace("Reconnected to local terminals");
					}
					Db(Z) {
						const se = [];
						let re;
						if (Z) {
							for (const le of Z.tabs) {
								const oe = le.terminals.filter(
									(ae) => ae.terminal && ae.terminal.isOrphan,
								);
								if (oe.length) {
									this.G += oe.length;
									const ae = this.Eb(le, oe);
									se.push(ae), le.isActive && (re = ae);
									const pe = this.instances.find(
										($e) =>
											$e.shellLaunchConfig.attachPersistentProcess?.id ===
											le.activePersistentProcessId,
									);
									pe && this.setActiveInstance(pe);
								}
							}
							Z.tabs.length && re?.then((le) => (this.kb.activeGroup = le));
						}
						return Promise.all(se).then((le) => le.filter((oe) => !!oe));
					}
					async Eb(Z, se) {
						let re;
						for (const oe of se) {
							const ae = oe.terminal;
							(this.$.startupKind !== z.StartupKind.ReloadedWindow &&
								ae.type === "Task") ||
								((0, W.mark)(
									`code/terminal/willRecreateTerminal/${ae.id}-${ae.pid}`,
								),
								(re = this.createTerminal({
									config: { attachPersistentProcess: ae },
									location: re
										? { parentTerminal: re }
										: o.TerminalLocation.Panel,
								})),
								re.then(() =>
									(0, W.mark)(
										`code/terminal/didRecreateTerminal/${ae.id}-${ae.pid}`,
									),
								));
						}
						return re?.then((oe) => {
							const ae = this.kb.getGroupForInstance(oe);
							return (
								ae?.resizePanes(Z.terminals.map((pe) => pe.relativeSize)), ae
							);
						});
					}
					Fb() {
						this.D(this.onDidChangeActiveGroup(() => this.Mb())),
							this.D(this.onDidChangeActiveInstance(() => this.Mb())),
							this.D(this.onDidChangeInstances(() => this.Mb())),
							this.D(this.onAnyInstanceProcessIdReady(() => this.Mb())),
							this.D(this.onAnyInstanceTitleChange((Z) => this.Nb(Z))),
							this.D(
								this.onAnyInstanceIconChange((Z) =>
									this.Ob(Z.instance, Z.userInitiated),
								),
							);
					}
					Gb() {
						const Z = N.TerminalContextKeys.isOpen.bindTo(this.Z),
							se = () => {
								Z.set(this.instances.length > 0),
									this.u.set(this.instances.length);
							};
						this.D(this.onDidChangeInstances(() => se()));
					}
					async getActiveOrCreateInstance(Z) {
						const se = this.activeInstance;
						if (!se) return this.createTerminal();
						if (!Z?.acceptsInput || se.xterm?.isStdinDisabled !== !0) return se;
						const re = await this.createTerminal();
						return (
							this.setActiveInstance(re), await this.revealActiveTerminal(), re
						);
					}
					getActiveInstance() {
						return this.activeInstance;
					}
					async revealTerminal(Z, se) {
						Z.target === o.TerminalLocation.Editor
							? await this.jb.revealActiveEditor(se)
							: await this.kb.showPanel();
					}
					async revealActiveTerminal(Z) {
						const se = this.activeInstance;
						se && (await this.revealTerminal(se, Z));
					}
					setEditable(Z, se) {
						se ? (this.z = { instance: Z, data: se }) : (this.z = void 0);
						const re = this.eb.getActiveViewWithId(M.$geb),
							le = this.isEditable(Z);
						re?.terminalTabbedView?.setEditable(le);
					}
					isEditable(Z) {
						return !!this.z && (this.z.instance === Z || !Z);
					}
					getEditableData(Z) {
						return this.z && this.z.instance === Z ? this.z.data : void 0;
					}
					requestStartExtensionTerminal(Z, se, re) {
						return new Promise((le) => {
							this.Q.fire({ proxy: Z, cols: se, rows: re, callback: le });
						});
					}
					Hb(Z) {
						return m.$r ? ((this.h = !0), !1) : this.Ib(Z);
					}
					async Ib(Z) {
						if (this.instances.length === 0) return !1;
						try {
							if (
								((this.y = await this.w?.getWindowCount()),
								this.Jb(Z) &&
									(await Promise.race([
										this.q?.persistTerminalState(),
										(0, i.$Nh)(2e3),
									])),
								!(
									this.ib.config.enablePersistentSessions &&
									Z === z.ShutdownReason.RELOAD
								) &&
									((this.ib.config.confirmOnExit === "always" &&
										this.instances.length > 0) ||
										(this.ib.config.confirmOnExit === "hasChildProcesses" &&
											this.instances.some((oe) => oe.hasChildProcesses))))
							)
								return this.Kb(Z);
						} catch (se) {
							this.ab.warn("Exception occurred during terminal shutdown", se);
						}
						return (this.h = !0), !1;
					}
					setNativeDelegate(Z) {
						this.w = Z;
					}
					Jb(Z) {
						if (!this.ib.config.enablePersistentSessions) return !1;
						switch (this.ib.config.persistentSessionReviveProcess) {
							case "onExit":
								return Z === z.ShutdownReason.CLOSE && this.y === 1 && !m.$m
									? !0
									: Z === z.ShutdownReason.LOAD || Z === z.ShutdownReason.QUIT;
							case "onExitAndWindowClose":
								return Z !== z.ShutdownReason.RELOAD;
							default:
								return !1;
						}
					}
					async Kb(Z) {
						const se = await this.Sb();
						return se || (this.h = !0), se;
					}
					Lb(Z) {
						const se =
							this.ib.config.enablePersistentSessions &&
							Z.reason === z.ShutdownReason.RELOAD;
						for (const re of [...this.kb.instances, ...this.j])
							se && re.shouldPersist
								? re.detachProcessAndDispose(o.TerminalExitReason.Shutdown)
								: re.dispose(o.TerminalExitReason.Shutdown);
						!se && !this.Jb(Z.reason) && this.q?.setTerminalLayoutInfo(void 0);
					}
					Mb() {
						if (this.h || !this.ib.config.enablePersistentSessions) return;
						const se = {
							tabs: this.kb.groups.map((re) =>
								re.getLayoutInfo(re === this.kb.activeGroup),
							),
						};
						this.q?.setTerminalLayoutInfo(se);
					}
					Nb(Z) {
						!this.ib.config.enablePersistentSessions ||
							!Z ||
							!Z.persistentProcessId ||
							!Z.title ||
							Z.isDisposed ||
							(Z.staticTitle
								? this.q?.updateTitle(
										Z.persistentProcessId,
										Z.staticTitle,
										o.TitleEventSource.Api,
									)
								: this.q?.updateTitle(
										Z.persistentProcessId,
										Z.title,
										Z.titleSource,
									));
					}
					Ob(Z, se) {
						!this.ib.config.enablePersistentSessions ||
							!Z ||
							!Z.persistentProcessId ||
							!Z.icon ||
							Z.isDisposed ||
							this.q?.updateIcon(Z.persistentProcessId, se, Z.icon, Z.color);
					}
					refreshActiveGroup() {
						this.Y.fire(this.kb.activeGroup);
					}
					getInstanceFromId(Z) {
						let se = -1;
						if (
							(this.j.forEach((re, le) => {
								re.instanceId === Z && (se = le);
							}),
							se !== -1)
						)
							return this.j[se];
						try {
							return this.instances[this.Rb(Z)];
						} catch {
							return;
						}
					}
					getInstanceFromIndex(Z) {
						return this.instances[Z];
					}
					getInstanceFromResource(Z) {
						return (0, D.$WUc)(this.instances, Z);
					}
					isAttachedToTerminal(Z) {
						return this.instances.some((se) => se.processId === Z.pid);
					}
					moveToEditor(Z, se) {
						if (Z.target === o.TerminalLocation.Editor) return;
						const re = this.kb.getGroupForInstance(Z);
						re &&
							(re.removeInstance(Z),
							this.jb.openEditor(Z, se ? { viewColumn: se } : void 0));
					}
					moveIntoNewEditor(Z) {
						this.moveToEditor(Z, O.$LY);
					}
					async moveToTerminalView(Z, se, re) {
						if ((r.URI.isUri(Z) && (Z = this.getInstanceFromResource(Z)), !Z))
							return;
						if (
							(this.jb.detachInstance(Z),
							Z.target !== o.TerminalLocation.Editor)
						) {
							await this.kb.showPanel(!0);
							return;
						}
						Z.target = o.TerminalLocation.Panel;
						let le;
						if (
							(se && (le = this.kb.getGroupForInstance(se)),
							le || (le = this.kb.createGroup()),
							le.addInstance(Z),
							this.setActiveInstance(Z),
							await this.kb.showPanel(!0),
							se && re)
						) {
							const oe =
								le.terminalInstances.indexOf(se) + (re === "after" ? 1 : 0);
							le.moveInstance(Z, oe, re);
						}
						this.W.fire(), this.Y.fire(this.kb.activeGroup);
					}
					Pb(Z) {
						const se = [
							Z.onDimensionsChanged(() => {
								this.N.fire(Z),
									this.ib.config.enablePersistentSessions &&
										this.isProcessSupportRegistered &&
										this.Mb();
							}),
							Z.onDidFocus(this.U.fire, this.U),
							Z.onRequestAddInstanceToGroup(async (re) => await this.Qb(Z, re)),
						];
						Z.onDisposed(() => (0, C.$Vc)(se));
					}
					async Qb(Z, se) {
						const re = (0, D.$TUc)(se.uri);
						if (re.instanceId === void 0) return;
						let le = this.getInstanceFromResource(se.uri);
						if (!le) {
							const oe = await this.q?.requestDetachInstance(
								re.workspaceId,
								re.instanceId,
							);
							if (oe) {
								(le = await this.createTerminal({
									config: { attachPersistentProcess: oe },
									resource: se.uri,
								})),
									this.kb.moveInstance(le, Z, se.side);
								return;
							}
						}
						if (((le = this.kb.getInstanceFromResource(se.uri)), le)) {
							this.kb.moveInstance(le, Z, se.side);
							return;
						}
						if (((le = this.jb.getInstanceFromResource(se.uri)), le)) {
							this.moveToTerminalView(le, Z, se.side);
							return;
						}
					}
					registerProcessSupport(Z) {
						Z && (this.n.set(Z), this.O.fire());
					}
					Rb(Z) {
						let se = -1;
						if (
							(this.instances.forEach((re, le) => {
								re.instanceId === Z && (se = le);
							}),
							se === -1)
						)
							throw new Error(
								`Terminal with ID ${Z} does not exist (has it already been disposed?)`,
							);
						return se;
					}
					async Sb(Z) {
						let se;
						this.instances.length === 1 || Z
							? (se = u.localize(10149, null))
							: (se = u.localize(10150, null, this.instances.length));
						const { confirmed: re } = await this.bb.confirm({
							type: "warning",
							message: se,
							primaryButton: u.localize(10151, null),
						});
						return !re;
					}
					getDefaultInstanceHost() {
						return this.defaultLocation === o.TerminalLocation.Editor
							? this.jb
							: this.kb;
					}
					async getInstanceHost(Z) {
						if (Z) {
							if (Z === o.TerminalLocation.Editor) return this.jb;
							if (typeof Z == "object") {
								if ("viewColumn" in Z) return this.jb;
								if ("parentTerminal" in Z)
									return (await Z.parentTerminal).target ===
										o.TerminalLocation.Editor
										? this.jb
										: this.kb;
							} else return this.kb;
						}
						return this;
					}
					async createTerminal(Z) {
						if (
							(this.sb.publicLogCapture("terminal:create"),
							this.nb.availableProfiles.length === 0)
						) {
							const $e = Z?.config && "customPtyImplementation" in Z.config,
								ye =
									this.db.getConnection() &&
									r.URI.isUri(Z?.cwd) &&
									Z?.cwd.scheme === d.Schemas.vscodeFileResource;
							!$e &&
								!ye &&
								(this.C === T.TerminalConnectionState.Connecting &&
									(0, W.mark)("code/terminal/willGetProfiles"),
								await this.nb.profilesReady,
								this.C === T.TerminalConnectionState.Connecting &&
									(0, W.mark)("code/terminal/didGetProfiles"));
						}
						const se = Z?.config || this.nb.getDefaultProfile(),
							re =
								se && "extensionIdentifier" in se
									? {}
									: this.lb.convertProfileToShellLaunchConfig(se || {}),
							le = Z?.skipContributedProfileCheck
								? void 0
								: await this.Tb(re, Z),
							oe =
								typeof Z?.location == "object" &&
								"splitActiveTerminal" in Z.location
									? Z.location.splitActiveTerminal
									: typeof Z?.location == "object"
										? "parentTerminal" in Z.location
										: !1;
						if ((await this.Ub(re, oe, Z), le)) {
							const $e = await this.resolveLocation(Z?.location);
							let ye;
							oe
								? (ye =
										$e === o.TerminalLocation.Editor
											? { viewColumn: O.$KY }
											: { splitActiveTerminal: !0 })
								: (ye =
										typeof Z?.location == "object" && "viewColumn" in Z.location
											? Z.location
											: $e),
								await this.createContributedTerminalProfile(
									le.extensionIdentifier,
									le.id,
									{ icon: le.icon, color: le.color, location: ye, cwd: re.cwd },
								);
							const ue = $e === o.TerminalLocation.Editor ? this.jb : this.kb,
								fe = ue.instances[ue.instances.length - 1];
							return await fe?.focusWhenReady(), this.s.set(!0), fe;
						}
						if (!re.customPtyImplementation && !this.isProcessSupportRegistered)
							throw new Error(
								"Could not create terminal when process support is not registered",
							);
						if (re.hideFromUser) {
							const $e = this.lb.createInstance(re, o.TerminalLocation.Panel);
							return (
								this.j.push($e),
								this.m.set($e.instanceId, [$e.onDisposed(this.R.fire, this.R)]),
								this.s.set(!0),
								$e
							);
						}
						this.$b(re);
						const ae =
								(await this.resolveLocation(Z?.location)) ||
								this.defaultLocation,
							pe = await this.Yb(Z?.location);
						return (
							this.s.set(!0), pe ? this.Vb(re, ae, pe) : this.Xb(re, ae, Z)
						);
					}
					async Tb(Z, se) {
						return se?.config && "extensionIdentifier" in se.config
							? se.config
							: this.nb.getContributedDefaultProfile(Z);
					}
					async createDetachedTerminal(Z) {
						const se = await V.$oVc.getXtermConstructor(this.ub, this.Z),
							re = this.cb.createInstance(
								q.$$Hb,
								se,
								Z.cols,
								Z.rows,
								Z.colorProvider,
								Z.capabilities || new K.$KHb(),
								"",
								!1,
							);
						Z.readonly && re.raw.attachCustomKeyEventHandler(() => !1);
						const le = new X.$rLc(re, Z, this.cb);
						this.b.add(le);
						const oe = re.onDidDispose(() => {
							this.b.delete(le), oe.dispose();
						});
						return le;
					}
					async Ub(Z, se, re) {
						if (!Z.cwd) {
							if (re?.cwd) Z.cwd = re.cwd;
							else if (se && re?.location) {
								let oe = this.activeInstance;
								if (
									(typeof re.location == "object" &&
										"parentTerminal" in re.location &&
										(oe = await re.location.parentTerminal),
									!oe)
								)
									throw new Error("Cannot split without an active instance");
								Z.cwd = await (0, ie.$wUc)(
									oe,
									this.qb.getWorkspace().folders,
									this.rb,
									this.gb,
								);
							}
						}
					}
					Vb(Z, se, re) {
						let le;
						if (
							(typeof Z.cwd != "object" &&
								typeof re.shellLaunchConfig.cwd == "object" &&
								(Z.cwd = r.URI.from({
									scheme: re.shellLaunchConfig.cwd.scheme,
									authority: re.shellLaunchConfig.cwd.authority,
									path: Z.cwd || re.shellLaunchConfig.cwd.path,
								})),
							se === o.TerminalLocation.Editor ||
								re.target === o.TerminalLocation.Editor)
						)
							le = this.jb.splitInstance(re, Z);
						else {
							const oe = this.kb.getGroupForInstance(re);
							if (!oe)
								throw new Error(
									`Cannot split a terminal without a group (instanceId: ${re.instanceId}, title: ${re.title})`,
								);
							(Z.parentTerminalId = re.instanceId), (le = oe.split(Z));
						}
						return this.Wb(le), le;
					}
					Wb(Z) {
						if (!Z.reconnectionProperties?.ownerId) return;
						const se = this.I.get(Z.reconnectionProperties.ownerId);
						se ? se.push(Z) : this.I.set(Z.reconnectionProperties.ownerId, [Z]);
					}
					Xb(Z, se, re) {
						let le;
						const oe = this.Zb(re?.location);
						return (
							se === o.TerminalLocation.Editor
								? ((le = this.lb.createInstance(Z, o.TerminalLocation.Editor)),
									this.jb.openEditor(le, oe))
								: (le = this.kb.createGroup(Z).terminalInstances[0]),
							this.Wb(le),
							le
						);
					}
					async resolveLocation(Z) {
						if (Z && typeof Z == "object")
							if ("parentTerminal" in Z) {
								const se = await Z.parentTerminal;
								return se.target ? se.target : o.TerminalLocation.Panel;
							} else {
								if ("viewColumn" in Z) return o.TerminalLocation.Editor;
								if ("splitActiveTerminal" in Z)
									return this.J?.target
										? this.J?.target
										: o.TerminalLocation.Panel;
							}
						return Z;
					}
					async Yb(Z) {
						if (Z && typeof Z == "object" && "parentTerminal" in Z)
							return Z.parentTerminal;
						if (Z && typeof Z == "object" && "splitActiveTerminal" in Z)
							return this.activeInstance;
					}
					Zb(Z) {
						if (Z && typeof Z == "object" && "viewColumn" in Z)
							return (
								(Z.viewColumn = (0, A.$a8)(this.mb, this.fb, Z.viewColumn)), Z
							);
					}
					$b(Z) {
						typeof Z.cwd != "string" &&
							Z.cwd?.scheme === d.Schemas.file &&
							(S.$DPb.getValue(this.Z)
								? ((Z.initialText = (0, f.$aIb)(
										u.localize(10152, null, "\x1B[3m", "\x1B[23m"),
										{ excludeLeadingNewLine: !0, loudFormatting: !0 },
									)),
									(Z.type = "Local"))
								: this.db.getConnection() &&
									((Z.initialText = (0, f.$aIb)(
										u.localize(10153, null, "\x1B[3m", "\x1B[23m"),
										{ excludeLeadingNewLine: !0, loudFormatting: !0 },
									)),
									(Z.type = "Local")));
					}
					ac(Z) {
						this.j.splice(this.j.indexOf(Z), 1);
						const se = this.m.get(Z.instanceId);
						se && (0, C.$Vc)(se),
							this.m.delete(Z.instanceId),
							(Z.shellLaunchConfig.hideFromUser = !1),
							this.kb.createGroup(Z),
							this.instances.length === 1 &&
								this.kb.setActiveInstanceByIndex(0),
							this.W.fire();
					}
					async setContainers(Z, se) {
						this.ib.setPanelContainer(Z), this.kb.setContainer(se);
					}
					getEditingTerminal() {
						return this.L;
					}
					setEditingTerminal(Z) {
						this.L = Z;
					}
					createOnInstanceEvent(Z) {
						return new E.$ye(
							this.instances,
							this.onDidCreateInstance,
							this.onDidDisposeInstance,
							Z,
						);
					}
					createOnInstanceCapabilityEvent(Z, se) {
						return (0, Y.$xVc)(
							this.instances,
							this.onDidCreateInstance,
							this.onDidDisposeInstance,
							Z,
							se,
						);
					}
				};
				(e.$yVc = _),
					Ne([w.$ei], _.prototype, "onAnyInstanceData", null),
					Ne([w.$ei], _.prototype, "onAnyInstanceDataInput", null),
					Ne([w.$ei], _.prototype, "onAnyInstanceIconChange", null),
					Ne(
						[w.$ei],
						_.prototype,
						"onAnyInstanceMaximumDimensionsChange",
						null,
					),
					Ne([w.$ei], _.prototype, "onAnyInstancePrimaryStatusChange", null),
					Ne([w.$ei], _.prototype, "onAnyInstanceProcessIdReady", null),
					Ne([w.$ei], _.prototype, "onAnyInstanceSelectionChange", null),
					Ne([w.$ei], _.prototype, "onAnyInstanceTitleChange", null),
					Ne([(0, w.$fi)(500)], _.prototype, "Mb", null),
					Ne([(0, w.$fi)(500)], _.prototype, "Nb", null),
					Ne([(0, w.$fi)(500)], _.prototype, "Ob", null),
					(e.$yVc = _ =
						Ne(
							[
								j(0, c.$6j),
								j(1, z.$n6),
								j(2, o.$YJ),
								j(3, n.$GO),
								j(4, g.$Li),
								j(5, F.$$m),
								j(6, I.$HMb),
								j(7, h.$gj),
								j(8, T.$jIb),
								j(9, B.$r8),
								j(10, T.$jIb),
								j(11, T.$kIb),
								j(12, T.$lIb),
								j(13, T.$mIb),
								j(14, R.$EY),
								j(15, M.$teb),
								j(16, U.$q2),
								j(17, p.$4N),
								j(18, v.$Vi),
								j(19, a.$ek),
								j(20, x.$km),
								j(21, H.$0zb),
								j(22, G.$uZ),
								j(23, J.$Xnc),
								j(24, ee.$26b),
							],
							_,
						));
				let te = class extends y.$pP {
					constructor(Z, se, re, le, oe) {
						super(re),
							(this.b = se),
							(this.c = re),
							(this.f = le),
							(this.j = oe),
							this.m(),
							(this.a = t.$Rgb(Z)),
							this.D((0, C.$Yc)(() => this.a.remove())),
							this.updateStyles();
					}
					m() {
						this.D(this.b.onAnyInstanceIconChange(() => this.updateStyles())),
							this.D(this.b.onDidCreateInstance(() => this.updateStyles())),
							this.D(
								this.j.onDidActiveEditorChange(() => {
									this.j.activeEditor instanceof P.$Unc && this.updateStyles();
								}),
							),
							this.D(
								this.j.onDidCloseEditor(() => {
									this.j.activeEditor instanceof P.$Unc && this.updateStyles();
								}),
							),
							this.D(
								this.f.onDidChangeAvailableProfiles(() => this.updateStyles()),
							);
					}
					updateStyles() {
						super.updateStyles();
						const Z = this.c.getColorTheme();
						let se = "";
						const re = this.c.getProductIconTheme();
						for (const oe of this.b.instances) {
							const ae = oe.icon;
							if (!ae) continue;
							let pe;
							ae instanceof r.URI
								? (pe = ae)
								: ae instanceof Object &&
									"light" in ae &&
									"dark" in ae &&
									(pe = Z.type === l.ColorScheme.LIGHT ? ae.light : ae.dark);
							const $e = (0, k.$Snc)(oe, Z.type);
							if (
								(pe instanceof r.URI &&
									$e &&
									$e.length > 1 &&
									(se += `.monaco-workbench .terminal-tab.${$e[0]}::before{content: ''; background-image: ${t.$vhb(pe)};}`),
								$.ThemeIcon.isThemeIcon(ae))
							) {
								const ue = (0, s.$_O)().getIcon(ae.id);
								if (ue) {
									const fe = re.getIcon(ue);
									fe &&
										(se += `.monaco-workbench .terminal-tab.codicon-${ae.id}::before{content: '${fe.fontCharacter}' !important; font-family: ${t.$whb(fe.font?.id ?? "codicon")} !important;}`);
								}
							}
						}
						const le = Z.getColor(b.$MP);
						le &&
							(se += `.monaco-workbench .show-file-icons .file-icon.terminal-tab::before { color: ${le}; }`),
							(se += (0, k.$Rnc)(Z, !0)),
							(this.a.textContent = se);
					}
				};
				te = Ne([j(1, T.$iIb), j(2, y.$iP), j(3, M.$teb), j(4, O.$IY)], te);
			},
		),
		define(
			de[4375],
			he([
				1, 0, 27, 23, 12, 9, 4, 91, 31, 8, 347, 102, 20, 43, 348, 30, 117, 2890,
				1201, 192, 239, 473, 55, 44, 60, 3637, 107, 363, 3141, 3168, 3405, 833,
				3142, 3438, 4060, 689, 4373, 3658, 1017, 4036, 1802, 4374, 1949, 4175,
				145, 512, 1859, 237, 469, 809, 2491, 2492, 2493, 2494, 617,
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
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(C = mt(C)),
					(0, h.$lK)(p.$YJ, o.$cUc, h.InstantiationType.Delayed),
					(0, h.$lK)(I.$jIb, k.$NUc, h.InstantiationType.Delayed),
					(0, h.$lK)(I.$iIb, x.$yVc, h.InstantiationType.Delayed),
					(0, h.$lK)(I.$kIb, N.$XUc, h.InstantiationType.Delayed),
					(0, h.$lK)(I.$lIb, A.$6Uc, h.InstantiationType.Delayed),
					(0, h.$lK)(I.$mIb, O.$sVc, h.InstantiationType.Delayed),
					(0, h.$lK)(V.$teb, z.$wVc, h.InstantiationType.Delayed),
					g.$Io
						.as(n.$1r.Quickaccess)
						.registerQuickAccessProvider({
							ctor: F.$iUc,
							prefix: F.$iUc.PREFIX,
							contextKey: "inTerminalPicker",
							placeholder: C.localize(9970, null),
							helpEntries: [
								{
									description: C.localize(9971, null),
									commandId: V.TerminalCommandId.QuickOpenTerm,
								},
							],
						});
				const ne = "workbench.action.quickOpenNavigateNextInTerminalPicker";
				m.$fk.registerCommand({ id: ne, handler: (0, l.$j9b)(ne, !0) });
				const ee = "workbench.action.quickOpenNavigatePreviousInTerminalPicker";
				m.$fk.registerCommand({ id: ee, handler: (0, l.$j9b)(ee, !1) }),
					(0, y.$s6)(B.$tVc.ID, B.$tVc, y.WorkbenchPhase.BlockStartup),
					(0, y.$s6)(S.$gUc.ID, S.$gUc, y.WorkbenchPhase.AfterRestored),
					(0, y.$s6)(q.$zVc.ID, q.$zVc, y.WorkbenchPhase.Eventually),
					(0, f.$0J)(),
					(0, K.$IVc)(),
					g.$Io
						.as($.$a1.EditorFactory)
						.registerEditorSerializer(D.$Unc.ID, M.$SUc),
					g.$Io
						.as($.$a1.EditorPane)
						.registerEditorPane(
							b.$vVb.create(L.$RUc, I.$pIb, W.$hUc.terminal),
							[new a.$Ji(D.$Unc)],
						),
					g.$Io.as(u.$nzb.DragAndDropContribution).register({
						dataFormatKey: I.TerminalDataTransfers.Terminals,
						getEditorInputs(Z) {
							const se = [];
							try {
								const re = JSON.parse(Z);
								for (const le of re) se.push({ resource: E.URI.parse(le) });
							} catch {}
							return se;
						},
						setData(Z, se) {
							const re = Z.filter(
								({ resource: le }) => le.scheme === i.Schemas.vscodeTerminal,
							);
							re.length &&
								se.dataTransfer?.setData(
									I.TerminalDataTransfers.Terminals,
									JSON.stringify(re.map(({ resource: le }) => le.toString())),
								);
						},
					});
				const _ = g.$Io
					.as(v.Extensions.ViewContainersRegistry)
					.registerViewContainer(
						{
							id: V.$geb,
							title: C.localize2(9973, "Terminal"),
							icon: R.$VHb,
							ctorDescriptor: new a.$Ji(s.$ZSb, [
								V.$geb,
								{ mergeViewWithContainerWhenSingleView: !0 },
							]),
							storageId: V.$geb,
							hideIfEmpty: !0,
							order: 3,
						},
						v.ViewContainerLocation.Panel,
						{ doNotRegisterOpenCommand: !0, isDefault: !0 },
					);
				g.$Io
					.as(v.Extensions.ViewsRegistry)
					.registerViews(
						[
							{
								id: V.$geb,
								name: C.localize2(9974, "Terminal"),
								containerIcon: R.$VHb,
								canToggleVisibility: !1,
								canMoveView: !0,
								ctorDescriptor: new a.$Ji(H.$5Uc),
								openCommandActionDescriptor: {
									id: V.TerminalCommandId.Toggle,
									mnemonicTitle: C.localize(9972, null),
									keybindings: {
										primary: t.KeyMod.CtrlCmd | t.KeyCode.Backquote,
										mac: { primary: t.KeyMod.WinCtrl | t.KeyCode.Backquote },
									},
									order: 3,
								},
							},
						],
						_,
					),
					(0, T.$IUc)();
				function te(Z, se) {
					c.$TX.registerCommandAndKeybindingRule({
						id: V.TerminalCommandId.SendSequence,
						weight: c.KeybindingWeight.WorkbenchContrib,
						when: se.when || J.TerminalContextKeys.focus,
						primary: se.primary,
						mac: se.mac,
						linux: se.linux,
						win: se.win,
						handler: T.$CUc,
						args: { text: Z },
					});
				}
				var Q;
				(function (Z) {
					Z[(Z.CtrlLetterOffset = 64)] = "CtrlLetterOffset";
				})(Q || (Q = {})),
					w.$l &&
						te(String.fromCharCode(86 - Q.CtrlLetterOffset), {
							when: r.$Kj.and(
								J.TerminalContextKeys.focus,
								r.$Kj.equals(
									J.TerminalContextKeyStrings.ShellType,
									p.GeneralShellType.PowerShell,
								),
								d.$YK.negate(),
							),
							primary: t.KeyMod.CtrlCmd | t.KeyCode.KeyV,
						}),
					te("\x1B[24~a", {
						when: r.$Kj.and(
							J.TerminalContextKeys.focus,
							r.$Kj.equals(
								J.TerminalContextKeyStrings.ShellType,
								p.GeneralShellType.PowerShell,
							),
							J.TerminalContextKeys.terminalShellIntegrationEnabled,
							d.$YK.negate(),
						),
						primary: t.KeyMod.CtrlCmd | t.KeyCode.Space,
						mac: { primary: t.KeyMod.WinCtrl | t.KeyCode.Space },
					}),
					te("\x1B[24~b", {
						when: r.$Kj.and(
							J.TerminalContextKeys.focus,
							r.$Kj.equals(
								J.TerminalContextKeyStrings.ShellType,
								p.GeneralShellType.PowerShell,
							),
							J.TerminalContextKeys.terminalShellIntegrationEnabled,
							d.$YK.negate(),
						),
						primary: t.KeyMod.Alt | t.KeyCode.Space,
					}),
					te("\x1B[24~c", {
						when: r.$Kj.and(
							J.TerminalContextKeys.focus,
							r.$Kj.equals(
								J.TerminalContextKeyStrings.ShellType,
								p.GeneralShellType.PowerShell,
							),
							J.TerminalContextKeys.terminalShellIntegrationEnabled,
							d.$YK.negate(),
						),
						primary: t.KeyMod.Shift | t.KeyCode.Enter,
					}),
					te("\x1B[24~d", {
						when: r.$Kj.and(
							J.TerminalContextKeys.focus,
							r.$Kj.equals(
								J.TerminalContextKeyStrings.ShellType,
								p.GeneralShellType.PowerShell,
							),
							J.TerminalContextKeys.terminalShellIntegrationEnabled,
							d.$YK.negate(),
						),
						mac: {
							primary: t.KeyMod.Shift | t.KeyMod.CtrlCmd | t.KeyCode.RightArrow,
						},
					}),
					te("\x1B[24~e", {
						when: r.$Kj.and(
							J.TerminalContextKeys.focus,
							r.$Kj.equals(
								J.TerminalContextKeyStrings.ShellType,
								p.GeneralShellType.PowerShell,
							),
							J.TerminalContextKeys.terminalShellIntegrationEnabled,
							d.$YK.negate(),
							r.$Kj.equals(`config.${X.TerminalSuggestSettingId.Enabled}`, !0),
						),
						primary: t.KeyMod.CtrlCmd | t.KeyCode.Space,
						mac: { primary: t.KeyMod.WinCtrl | t.KeyCode.Space },
					}),
					te("\x1B[1;2H", {
						when: r.$Kj.and(
							J.TerminalContextKeys.focus,
							r.$Kj.equals(
								J.TerminalContextKeyStrings.ShellType,
								p.GeneralShellType.PowerShell,
							),
						),
						mac: {
							primary: t.KeyMod.Shift | t.KeyMod.CtrlCmd | t.KeyCode.LeftArrow,
						},
					}),
					te("�", {
						when: r.$Kj.and(J.TerminalContextKeys.focus, d.$YK),
						primary: t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.KeyR,
						mac: { primary: t.KeyMod.WinCtrl | t.KeyMod.Alt | t.KeyCode.KeyR },
					}),
					te("\x07", {
						when: J.TerminalContextKeys.focus,
						primary: t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.KeyG,
						mac: { primary: t.KeyMod.WinCtrl | t.KeyMod.Alt | t.KeyCode.KeyG },
					}),
					w.$u &&
						te(String.fromCharCode(67 - Q.CtrlLetterOffset), {
							when: r.$Kj.and(J.TerminalContextKeys.focus),
							primary: t.KeyMod.WinCtrl | t.KeyCode.KeyC,
						}),
					te(String.fromCharCode(87 - Q.CtrlLetterOffset), {
						primary: t.KeyMod.CtrlCmd | t.KeyCode.Backspace,
						mac: { primary: t.KeyMod.Alt | t.KeyCode.Backspace },
					}),
					w.$l &&
						te(String.fromCharCode(72 - Q.CtrlLetterOffset), {
							when: r.$Kj.and(
								J.TerminalContextKeys.focus,
								r.$Kj.equals(
									J.TerminalContextKeyStrings.ShellType,
									p.WindowsShellType.CommandPrompt,
								),
							),
							primary: t.KeyMod.CtrlCmd | t.KeyCode.Backspace,
						}),
					te("\x1Bd", {
						primary: t.KeyMod.CtrlCmd | t.KeyCode.Delete,
						mac: { primary: t.KeyMod.Alt | t.KeyCode.Delete },
					}),
					te("�", { mac: { primary: t.KeyMod.CtrlCmd | t.KeyCode.Backspace } }),
					te("�", { mac: { primary: t.KeyMod.CtrlCmd | t.KeyCode.LeftArrow } }),
					te("�", { mac: { primary: t.KeyMod.CtrlCmd | t.KeyCode.RightArrow } }),
					te("\0", {
						primary: t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.Digit2,
						mac: {
							primary: t.KeyMod.WinCtrl | t.KeyMod.Shift | t.KeyCode.Digit2,
						},
					}),
					te("�", {
						primary: t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.Digit6,
						mac: {
							primary: t.KeyMod.WinCtrl | t.KeyMod.Shift | t.KeyCode.Digit6,
						},
					}),
					te("�", {
						primary: t.KeyMod.CtrlCmd | t.KeyCode.Slash,
						mac: { primary: t.KeyMod.WinCtrl | t.KeyCode.Slash },
					}),
					(0, P.$MUc)(),
					(0, U.$PUc)(),
					(0, G.$FHb)();
			},
		),
		define(
			de[4376],
			he([
				1, 0, 3, 107, 378, 189, 39, 4, 6, 12, 460, 595, 130, 10, 31, 62, 32,
				127, 7, 5, 692, 1074, 1763, 153, 21, 49, 168, 2496,
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
			) {
				"use strict";
				var T;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$VWc = e.$UWc = void 0),
					(f = mt(f));
				const P = f.$;
				var k;
				(function (N) {
					N.InitialHintHideStorageKey = "terminal.initialHint.hide";
				})(k || (k = {}));
				class L extends t.$1c {
					get onDidRequestCreateHint() {
						return this.a.event;
					}
					constructor(A, R) {
						super(),
							(this.c = A),
							(this.f = R),
							(this.a = this.D(new m.$re())),
							(this.b = this.D(new t.$2c()));
					}
					activate(A) {
						const R = this.D(new t.$Zc());
						this.b.value = R;
						const O = this.c.get(E.TerminalCapability.CommandDetection);
						O
							? R.add(
									m.Event.once(O.promptInputModel.onDidStartInput)(() =>
										this.a.fire(),
									),
								)
							: this.D(
									this.c.onDidAddCapability((U) => {
										if (U.id === E.TerminalCapability.CommandDetection) {
											const z = U.capability;
											R.add(
												m.Event.once(z.promptInputModel.onDidStartInput)(() =>
													this.a.fire(),
												),
											),
												z.promptInputModel.value || this.a.fire();
										}
									}),
								);
						const B = this.f((U) => {
							U?.locations.includes($.ChatAgentLocation.Terminal) &&
								(this.a.fire(), B.dispose());
						});
						this.b.value?.add(B);
					}
				}
				e.$UWc = L;
				let D = class extends t.$1c {
					static {
						T = this;
					}
					static {
						this.ID = "terminal.initialHint";
					}
					static get(A) {
						return A.getContribution(T.ID);
					}
					constructor(A, R, O, B, U, z, F, x, H) {
						super(),
							(this.g = A),
							(this.h = B),
							(this.j = U),
							(this.m = z),
							(this.n = F),
							(this.q = x),
							(this.r = H),
							this.D(
								this.j.onDidChangeConfiguration((q) => {
									q.affectsConfiguration(
										y.TerminalInitialHintSettingId.Enabled,
									) &&
										this.r.remove(
											k.InitialHintHideStorageKey,
											v.StorageScope.APPLICATION,
										);
								}),
							);
					}
					xtermOpen(A) {
						this.r.getBoolean(
							k.InitialHintHideStorageKey,
							v.StorageScope.APPLICATION,
							!1,
						) ||
							(this.m.instances.length + this.n.instances.length === 1 &&
								((this.f = A),
								(this.a = this.D(
									this.h.createInstance(
										L,
										this.g.capabilities,
										this.q.onDidChangeAgents,
									),
								)),
								this.f.raw.loadAddon(this.a),
								this.D(this.a.onDidRequestCreateHint(() => this.s()))));
					}
					s() {
						const A = this.g instanceof l.$oVc ? this.g : void 0,
							R = A?.capabilities.get(E.TerminalCapability.CommandDetection);
						if (
							!A ||
							!this.f ||
							this.b ||
							!R ||
							R.promptInputModel.value ||
							A.shellLaunchConfig.attachPersistentProcess ||
							!this.j.getValue(y.TerminalInitialHintSettingId.Enabled)
						)
							return;
						if (!this.c) {
							const B = this.f.raw.registerMarker();
							if (!B || this.f.raw.buffer.active.cursorX === 0) return;
							this.D(B),
								(this.c = this.f.raw.registerDecoration({
									marker: B,
									x: this.f.raw.buffer.active.cursorX + 1,
								})),
								this.c && this.D(this.c);
						}
						this.D(this.f.raw.onKey(() => this.dispose())),
							this.D(
								this.j.onDidChangeConfiguration((B) => {
									B.affectsConfiguration(
										y.TerminalInitialHintSettingId.Enabled,
									) &&
										!this.j.getValue(y.TerminalInitialHintSettingId.Enabled) &&
										this.dispose();
								}),
							);
						const O = R.promptInputModel;
						O &&
							this.D(
								O.onDidChangeInput(() => {
									O.value && this.dispose();
								}),
							),
							this.c &&
								(this.D(this.c),
								this.D(
									this.c.onRender((B) => {
										if (
											!this.b &&
											this.f?.isFocused &&
											this.m.instances.length + this.n.instances.length === 1
										) {
											const U = this.q
												.getActivatedAgents()
												.filter((z) =>
													z.locations.includes($.ChatAgentLocation.Terminal),
												);
											if (U?.length) {
												const z = this.D(this.h.createInstance(M, A));
												if (
													(this.a?.dispose(),
													(this.b = z.getDomNode(U)),
													!this.b)
												)
													return;
												B.appendChild(this.b),
													B.classList.add("terminal-initial-hint");
												const F = this.f.getFont();
												F &&
													((B.style.fontFamily = F.fontFamily),
													(B.style.fontSize = F.fontSize + "px"));
											}
										}
										if (this.b && this.f) {
											const U = this.b.parentElement;
											U &&
												(U.style.width =
													((this.f.raw.cols -
														this.f.raw.buffer.active.cursorX) /
														this.f.raw.cols) *
														100 +
													"%");
										}
									}),
								));
					}
				};
				(e.$VWc = D),
					(e.$VWc =
						D =
						T =
							Ne(
								[
									j(3, b.$Li),
									j(4, c.$gj),
									j(5, i.$lIb),
									j(6, i.$kIb),
									j(7, $.$c3),
									j(8, v.$lq),
								],
								D,
							)),
					(0, w.$qLc)(D.ID, D, !1);
				let M = class extends t.$1c {
					constructor(A, R, O, B, U, z, F, x, H, q) {
						super(),
							(this.g = A),
							(this.h = R),
							(this.j = O),
							(this.m = B),
							(this.n = U),
							(this.q = z),
							(this.r = F),
							(this.s = x),
							(this.t = H),
							(this.u = q),
							(this.b = this.D(new t.$Zc())),
							(this.c = !1),
							(this.f = ""),
							this.b.add(
								A.onDidFocus(() => {
									this.g.hasFocus &&
										this.c &&
										this.f &&
										this.m.getValue(
											h.AccessibilityVerbositySettingId.TerminalChat,
										) &&
										(0, o.$pib)(this.f);
								}),
							),
							this.b.add(
								x.onDidChangeInstances(() => {
									this.s.instances.length !== 1 && this.dispose();
								}),
							),
							this.b.add(
								this.m.onDidChangeConfiguration((V) => {
									V.affectsConfiguration(
										y.TerminalInitialHintSettingId.Enabled,
									) &&
										!this.m.getValue(y.TerminalInitialHintSettingId.Enabled) &&
										this.dispose();
								}),
							);
					}
					w(A) {
						let R =
							(A.length === 1 ? A[0].fullName : void 0) ?? this.r.nameShort;
						const O = this.h.getDefaultAgent($.ChatAgentLocation.Panel);
						O?.extensionId.value === A[0].extensionId.value &&
							(R = O.fullName ?? R);
						let B = `Ask ${R} something or start typing to dismiss.`;
						const U = () => {
							this.t.store(
								k.InitialHintHideStorageKey,
								!0,
								v.StorageScope.APPLICATION,
								v.StorageTarget.USER,
							),
								this.q.publicLog2("workbenchActionExecuted", {
									id: "terminalInlineChat.hintAction",
									from: "hint",
								}),
								this.j.executeCommand(s.TerminalChatCommandId.Start, {
									from: "hint",
								});
						};
						this.b.add(
							this.j.onDidExecuteCommand((q) => {
								q.commandId === s.TerminalChatCommandId.Start &&
									(this.t.store(
										k.InitialHintHideStorageKey,
										!0,
										v.StorageScope.APPLICATION,
										v.StorageTarget.USER,
									),
									this.dispose());
							}),
						);
						const z = {
								disposables: this.b,
								callback: (q, V) => {
									switch (q) {
										case "0":
											U();
											break;
									}
								},
							},
							F = P("div.terminal-initial-hint");
						F.style.display = "block";
						const x = this.n.lookupKeybinding(s.TerminalChatCommandId.Start),
							H = x?.getLabel();
						if (x && H) {
							const q = (0, d.localize)(10450, null, H, R),
								[V, G] = q.split(H).map((X) => {
									const Y = P("a", void 0, X);
									return this.b.add(f.$0fb(Y, f.$$gb.CLICK, U)), Y;
								});
							F.appendChild(V);
							const K = z.disposables.add(new u.$7ob(F, r.OS));
							K.set(x),
								(K.element.style.width = "min-content"),
								(K.element.style.display = "inline"),
								(K.element.style.cursor = "pointer"),
								this.b.add(f.$0fb(K.element, f.$$gb.CLICK, U)),
								F.appendChild(G);
							const J = (0, d.localize)(10451, null),
								W = P("span.detail", void 0, J);
							F.appendChild(W), (B = q.concat(J));
						} else {
							const q = (0, d.localize)(10452, null, R),
								V = (0, a.$kib)(q, { actionHandler: z });
							F.appendChild(V);
						}
						return { ariaLabel: B, hintHandler: z, hintElement: F };
					}
					getDomNode(A) {
						if (!this.a) {
							(this.a = P(".terminal-initial-hint")),
								(this.a.style.paddingLeft = "4px");
							const { hintElement: R, ariaLabel: O } = this.w(A);
							this.a.append(R),
								(this.f = O.concat(
									(0, d.localize)(
										10453,
										null,
										h.AccessibilityVerbositySettingId.TerminalChat,
									),
								)),
								this.b.add(
									f.$0fb(this.a, "click", () => {
										this.a?.remove(), (this.a = void 0);
									}),
								),
								this.b.add(
									f.$0fb(this.a, f.$$gb.CONTEXT_MENU, (B) => {
										this.u.showContextMenu({
											getAnchor: () => new I.$2fb(f.$Ogb(), B),
											getActions: () => [
												{
													id: "workench.action.disableTerminalInitialHint",
													label: (0, d.localize)(10454, null),
													tooltip: (0, d.localize)(10455, null),
													enabled: !0,
													class: void 0,
													run: () =>
														this.m.updateValue(
															y.TerminalInitialHintSettingId.Enabled,
															!1,
														),
												},
											],
										});
									}),
								);
						}
						return this.a;
					}
					dispose() {
						this.a?.remove(), super.dispose();
					}
				};
				M = Ne(
					[
						j(1, $.$c3),
						j(2, n.$ek),
						j(3, c.$gj),
						j(4, C.$uZ),
						j(5, p.$km),
						j(6, g.$Bk),
						j(7, i.$iIb),
						j(8, v.$lq),
						j(9, S.$Xxb),
					],
					M,
				);
			},
		),
		define(
			de[2004],
			he([1, 0, 6, 3, 10, 8, 5, 39, 189, 1074, 808, 3172, 1144]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				var h;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2Vc = void 0);
				let c = class extends i.$1c {
					static {
						h = this;
					}
					static {
						this.ID = "terminal.stickyScroll";
					}
					static get(g) {
						return g.getContribution(h.ID);
					}
					constructor(g, p, o, f, b, s, l) {
						super(),
							(this.g = g),
							(this.h = f),
							(this.j = b),
							(this.m = s),
							(this.n = l),
							(this.b = this.D(new i.$2c())),
							(this.c = this.D(new i.$2c())),
							(this.f = this.D(new i.$2c())),
							this.D(
								t.Event.runAndSubscribe(
									this.h.onDidChangeConfiguration,
									(y) => {
										(!y ||
											y.affectsConfiguration(
												u.TerminalStickyScrollSettingId.Enabled,
											)) &&
											this.q();
									},
								),
							);
					}
					xtermReady(g) {
						(this.a = g), this.q();
					}
					xtermOpen(g) {
						this.q();
					}
					hideLock() {
						this.b.value?.lockHide();
					}
					hideUnlock() {
						this.b.value?.unlockHide();
					}
					q() {
						this.b.value ? this.s() : this.r(),
							this.b.value
								? (this.c.clear(),
									this.f.value ||
										(this.f.value = this.g.capabilities.onDidRemoveCapability(
											(g) => {
												g.id === m.TerminalCapability.CommandDetection &&
													this.q();
											},
										)))
								: (this.f.clear(),
									this.c.value ||
										(this.c.value = this.g.capabilities.onDidAddCapability(
											(g) => {
												g.id === m.TerminalCapability.CommandDetection &&
													this.q();
											},
										)));
					}
					r() {
						if (this.t()) {
							const g = r.$oVc.getXtermConstructor(this.n, this.j);
							this.b.value = this.m.createInstance(
								a.$1Vc,
								this.g,
								this.a,
								this.m.createInstance(r.$rVc, this.g),
								this.g.capabilities.get(m.TerminalCapability.CommandDetection),
								g,
							);
						}
					}
					s() {
						this.t() || this.b.clear();
					}
					t() {
						if (this.g.shellLaunchConfig.hideFromUser) return !1;
						const g = this.g.capabilities.get(
							m.TerminalCapability.CommandDetection,
						);
						return !!(
							this.h.getValue(u.TerminalStickyScrollSettingId.Enabled) &&
							g &&
							this.a?.raw?.element
						);
					}
				};
				(e.$2Vc = c),
					(e.$2Vc =
						c =
						h =
							Ne([j(3, w.$gj), j(4, E.$6j), j(5, C.$Li), j(6, d.$uZ)], c));
			},
		),
		define(
			de[4377],
			he([1, 0, 7, 6, 3, 649, 4, 8, 5, 153, 1357, 692, 2004, 2495]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3Vc = void 0);
				var c;
				(function (g) {
					(g[(g.HorizontalMargin = 10)] = "HorizontalMargin"),
						(g[(g.VerticalMargin = 30)] = "VerticalMargin");
				})(c || (c = {}));
				let n = class extends w.$1c {
					get inlineChatWidget() {
						return this.c;
					}
					constructor(p, o, f, b, s) {
						super(),
							(this.j = p),
							(this.m = o),
							(this.n = f),
							(this.q = b),
							(this.r = s),
							(this.b = this.D(new i.$re())),
							(this.onDidHide = this.b.event),
							(this.g = a.TerminalChatContextKeys.focused.bindTo(this.r)),
							(this.h = a.TerminalChatContextKeys.visible.bindTo(this.r)),
							(this.a = document.createElement("div")),
							this.a.classList.add("terminal-inline-chat"),
							p.appendChild(this.a),
							(this.c = this.q.createInstance(
								u.$9Yb,
								{
									location: r.ChatAgentLocation.Terminal,
									resolveData: () => {},
								},
								{
									statusMenuId: {
										menu: a.$WVc,
										options: {
											buttonConfigProvider: (y) =>
												y.id === a.TerminalChatCommandId.ViewInChat ||
												y.id === a.TerminalChatCommandId.RunCommand ||
												y.id === a.TerminalChatCommandId.RunFirstCommand
													? { isSecondary: !1 }
													: { isSecondary: !0 },
										},
									},
									chatWidgetViewOptions: {
										rendererOptions: { editableCodeBlock: !0 },
										menus: {
											telemetrySource: "terminal-inline-chat",
											executeToolbar: a.$UVc,
											inputSideToolbar: a.$VVc,
										},
									},
								},
							)),
							this.D(
								i.Event.any(
									this.c.onDidChangeHeight,
									this.m.onDimensionsChanged,
									this.c.chatWidget.onDidChangeContentHeight,
									i.Event.debounce(this.n.raw.onCursorMove, () => {}, E.$me),
								)(() => this.t()),
							);
						const l = new ResizeObserver(() => this.t());
						l.observe(this.j),
							this.D((0, w.$Yc)(() => l.disconnect())),
							this.w(),
							this.a.appendChild(this.c.domNode),
							(this.f = this.D((0, t.$dhb)(this.a))),
							this.D(this.f.onDidFocus(() => this.g.set(!0))),
							this.D(
								this.f.onDidBlur(() => {
									this.g.set(!1),
										this.inlineChatWidget.responseContent || this.hide();
								}),
							),
							this.hide();
					}
					t() {
						this.s && this.u(this.c.contentHeight);
					}
					u(p) {
						const o = this.n.raw.element;
						if (!o) return;
						const f = (0, t.$Ogb)().getComputedStyle(o),
							b = parseInt(f.paddingLeft) + parseInt(f.paddingRight),
							s = Math.min(
								640,
								o.clientWidth - 12 - 2 - c.HorizontalMargin - b,
							),
							l = this.C() ?? Number.MAX_SAFE_INTEGER;
						let y = Math.min(480, p, l);
						const $ = this.y() ?? 0;
						if (s === 0 || y === 0) return;
						let v;
						y < this.c.contentHeight &&
							(y - $ > 0
								? (y = y - $ - c.VerticalMargin)
								: ((y = y - c.VerticalMargin), (v = y))),
							(this.a.style.paddingLeft = f.paddingLeft),
							(this.s = new t.$pgb(s, y)),
							this.c.layout(this.s),
							this.z(v);
					}
					w() {
						(this.c.placeholder = (0, C.localize)(10498, null)),
							this.c.updateInfo((0, C.localize)(10499, null));
					}
					reveal() {
						this.u(this.c.contentHeight),
							this.a.classList.remove("hide"),
							this.h.set(!0),
							this.c.focus(),
							this.m.scrollToBottom();
					}
					y() {
						const p = this.m.xterm?.getFont();
						if (!p?.charHeight) return;
						const o = this.C() ?? 0,
							f = p.charHeight * p.lineHeight,
							b = o - this.m.rows * f,
							s = (this.m.xterm?.raw.buffer.active.cursorY ?? 0) + 1;
						return b + s * f;
					}
					z(p) {
						const o = this.y();
						if (!o) return;
						this.a.style.top = `${o}px`;
						const f = this.c.contentHeight,
							b = this.C();
						b &&
							(o > b - f && b - f > 0
								? this.F(o - (b - f))
								: p
									? this.F(p)
									: this.F(void 0));
					}
					C() {
						return this.j.clientHeight;
					}
					hide() {
						this.a.classList.add("hide"),
							this.c.reset(),
							this.w(),
							this.c.updateToolbar(!1),
							this.h.set(!1),
							(this.c.value = ""),
							this.m.focus(),
							this.F(void 0),
							this.b.fire();
					}
					F(p) {
						p === void 0 || this.a.classList.contains("hide")
							? ((this.j.style.position = ""),
								(this.j.style.bottom = ""),
								h.$2Vc.get(this.m)?.hideUnlock())
							: ((this.j.style.position = "relative"),
								(this.j.style.bottom = `${p}px`),
								h.$2Vc.get(this.m)?.hideLock());
					}
					focus() {
						this.c.focus();
					}
					hasFocus() {
						return this.c.hasFocus();
					}
					input() {
						return this.c.value;
					}
					setValue(p) {
						this.c.value = p ?? "";
					}
					acceptCommand(p, o) {
						this.m.runCommand(p, o), this.hide();
					}
					get focusTracker() {
						return this.f;
					}
				};
				(e.$3Vc = n), (e.$3Vc = n = Ne([j(3, m.$Li), j(4, d.$6j)], n));
			},
		),
		define(
			de[867],
			he([
				1, 0, 33, 6, 149, 3, 8, 5, 208, 218, 107, 4377, 94, 692, 89, 21, 28, 15,
				153,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				var b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4Vc = void 0);
				var s;
				(function (y) {
					(y[(y.NONE = 0)] = "NONE"),
						(y[(y.ACCEPT_SESSION = 1)] = "ACCEPT_SESSION"),
						(y[(y.CANCEL_SESSION = 2)] = "CANCEL_SESSION"),
						(y[(y.PAUSE_SESSION = 4)] = "PAUSE_SESSION"),
						(y[(y.CANCEL_REQUEST = 8)] = "CANCEL_REQUEST"),
						(y[(y.CANCEL_INPUT = 16)] = "CANCEL_INPUT"),
						(y[(y.ACCEPT_INPUT = 32)] = "ACCEPT_INPUT"),
						(y[(y.RERUN_INPUT = 64)] = "RERUN_INPUT");
				})(s || (s = {}));
				let l = class extends E.$1c {
					static {
						b = this;
					}
					static {
						this.ID = "terminal.chat";
					}
					static get($) {
						return $.getContribution(b.ID);
					}
					static {
						this.a = "terminal-inline-chat-history";
					}
					static {
						this.b = [];
					}
					get chatWidget() {
						return this.c?.value;
					}
					get lastResponseContent() {
						return this.n;
					}
					get onDidHide() {
						return this.chatWidget?.onDidHide ?? i.Event.None;
					}
					get scopedContextKeyService() {
						return (
							this.c?.value.inlineChatWidget.scopedContextKeyService ?? this.I
						);
					}
					constructor($, v, S, I, T, P, k, L, D, M) {
						super(),
							(this.F = $),
							(this.G = I),
							(this.H = T),
							(this.I = P),
							(this.J = k),
							(this.L = L),
							(this.M = D),
							(this.N = M),
							(this.j = this.B.add(new i.$re())),
							(this.onDidAcceptInput = i.Event.filter(
								this.j.event,
								(N) => N === s.ACCEPT_INPUT,
								this.B,
							)),
							(this.q = "terminal"),
							(this.s = this.D(new E.$2c())),
							(this.u = -1),
							(this.w = ""),
							(this.P = void 0),
							(this.f = c.TerminalChatContextKeys.requestActive.bindTo(this.I)),
							(this.g =
								c.TerminalChatContextKeys.responseContainsCodeBlock.bindTo(
									this.I,
								)),
							(this.h =
								c.TerminalChatContextKeys.responseContainsMultipleCodeBlocks.bindTo(
									this.I,
								)),
							this.D(
								this.L.registerProvider(
									{
										getCodeBlockContext: (N) => {
											if (!(!N || !this.c?.hasValue || !this.hasFocus()))
												return {
													element: N,
													code: N.getValue(),
													codeBlockIndex: 0,
													languageId: N.getModel().getLanguageId(),
												};
										},
									},
									"terminal",
								),
							),
							(b.b = JSON.parse(this.N.get(b.a, g.StorageScope.PROFILE, "[]"))),
							(this.y = (N) => {
								const A = b.b.indexOf(N);
								A >= 0 && b.b.splice(A, 1),
									b.b.unshift(N),
									(this.u = -1),
									(this.w = ""),
									this.N.store(
										b.a,
										JSON.stringify(b.b),
										g.StorageScope.PROFILE,
										g.StorageTarget.USER,
									);
							});
					}
					xtermReady($) {
						this.c = new w.$Y(() => {
							const v = this.D(
								this.H.createInstance(a.$3Vc, this.F.domElement, this.F, $),
							);
							if (
								(this.D(
									v.focusTracker.onDidFocus(() => {
										(b.activeChatWidget = this),
											(0, u.$nIb)(this.F) || this.G.setActiveInstance(this.F);
									}),
								),
								this.D(
									v.focusTracker.onDidBlur(() => {
										(b.activeChatWidget = void 0),
											this.F.resetScrollbarVisibility();
									}),
								),
								!this.F.domElement)
							)
								throw new Error(
									"FindWidget expected terminal DOM to be initialized",
								);
							return v;
						});
					}
					async O() {
						(this.t = (0, o.$zh)(async ($) => {
							if (
								!this.s.value &&
								((this.s.value = this.J.startSession(
									f.ChatAgentLocation.Terminal,
									$,
								)),
								!this.s.value)
							)
								throw new Error("Failed to start chat session");
						})),
							this.D((0, E.$Yc)(() => this.t?.cancel()));
					}
					Q() {
						const $ = this.c?.value.inlineChatWidget;
						$ && ($.placeholder = this.R());
					}
					R() {
						return this.P ?? "";
					}
					setPlaceholder($) {
						(this.P = $), this.Q();
					}
					resetPlaceholder() {
						(this.P = void 0), this.Q();
					}
					clear() {
						this.cancel(),
							this.s.clear(),
							this.g.reset(),
							this.f.reset(),
							this.c?.value.hide(),
							this.c?.value.setValue(void 0);
					}
					async acceptInput() {
						(0, p.$vg)(this.c),
							this.s.value || (await this.reveal()),
							(0, p.$vg)(this.s.value);
						const $ = this.c.value.inlineChatWidget.value;
						if (!$) return;
						const v = this.s.value;
						this.c.value.inlineChatWidget.setChatModel(v),
							this.y($),
							this.C?.cancel(),
							(this.C = new t.$Ce());
						const S = new E.$Zc();
						this.f.set(!0);
						let I = "";
						const T =
							await this.c.value.inlineChatWidget.chatWidget.acceptInput($);
						this.z = T?.requestId;
						const P = new o.$0h();
						try {
							return (
								this.f.set(!0),
								T &&
									S.add(
										T.onDidChange(async () => {
											if (((I += T.response.value), T.isCanceled)) {
												this.f.set(!1), P.complete(void 0);
												return;
											}
											if (T.isComplete) {
												this.f.set(!1), this.f.set(!1);
												const k = I.includes("```");
												this.c.value.inlineChatWidget.updateChatMessage(
													{ message: new h.$cl(I), requestId: T.requestId },
													!1,
													k,
												);
												const L =
														await this.chatWidget?.inlineChatWidget.getCodeBlockInfo(
															0,
														),
													D =
														await this.chatWidget?.inlineChatWidget.getCodeBlockInfo(
															1,
														);
												this.g.set(!!L),
													this.h.set(!!D),
													this.c?.value.inlineChatWidget.updateToolbar(!0),
													P.complete(T);
											}
										}),
									),
								await P.p,
								T
							);
						} catch {
							return;
						} finally {
							S.dispose();
						}
					}
					updateInput($, v = !0) {
						const S = this.c?.value.inlineChatWidget;
						S && ((S.value = $), v && S.selectAll());
					}
					getInput() {
						return this.c?.value.input() ?? "";
					}
					focus() {
						this.c?.value.focus();
					}
					hasFocus() {
						return this.c?.rawValue?.hasFocus() ?? !1;
					}
					populateHistory($) {
						if (!this.c?.value) return;
						const v = b.b.length;
						if (v === 0) return;
						this.u === -1 && (this.w = this.c.value.inlineChatWidget.value);
						const S = this.u + ($ ? 1 : -1);
						if (S >= v) return;
						let I;
						S < 0
							? ((I = this.w), (this.u = -1))
							: ((I = b.b[S]), (this.u = S)),
							(this.c.value.inlineChatWidget.value = I),
							this.c.value.inlineChatWidget.selectAll();
					}
					cancel() {
						this.t?.cancel(),
							(this.t = void 0),
							this.C?.cancel(),
							this.f.set(!1);
						const $ = this.c?.value.inlineChatWidget.getChatModel();
						$?.sessionId && this.J.cancelCurrentRequestForSession($?.sessionId);
					}
					async acceptCommand($) {
						const v =
							await this.chatWidget?.inlineChatWidget.getCodeBlockInfo(0);
						v && this.c?.value.acceptCommand(v.textEditorModel.getValue(), $);
					}
					async reveal() {
						await this.O(), this.c?.value.reveal(), this.c?.value.focus();
					}
					async viewInChat() {
						const $ = await (0, m.$HYb)(this.M),
							v = this.chatWidget?.inlineChatWidget.chatWidget.viewModel?.model
								.getRequests()
								.find((I) => I.id === this.z);
						if (!$ || !v?.response) return;
						const S = [];
						for (const I of v.response.response.value)
							if (I.kind === "textEditGroup")
								for (const T of I.edits)
									S.push({ kind: "textEdit", edits: T, uri: I.uri });
							else S.push(I);
						this.J.addCompleteRequest(
							$.viewModel.sessionId,
							`@${this.q} ${v.message.text}`,
							v.variableData,
							v.attempt,
							{
								message: S,
								result: v.response.result,
								followups: v.response.followups,
							},
						),
							$.focusLastMessage(),
							this.c?.rawValue?.hide();
					}
				};
				(e.$4Vc = l),
					(e.$4Vc =
						l =
						b =
							Ne(
								[
									j(3, u.$iIb),
									j(4, d.$Li),
									j(5, C.$6j),
									j(6, r.$J2),
									j(7, m.$KYb),
									j(8, n.$HMb),
									j(9, g.$lq),
								],
								l,
							));
			},
		),
		