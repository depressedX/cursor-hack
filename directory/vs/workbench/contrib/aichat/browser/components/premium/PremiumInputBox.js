define(
			de[2012],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 158, 13, 58, 866, 45, 205, 140, 2010, 4401,
				397, 270, 169, 36, 2009, 385, 573, 298, 14, 26, 859, 47, 4395, 364, 12,
				4191, 390, 114, 3603,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0bc = void 0);
				const B = (0, t.template)("<div><span></span>Mention"),
					U = (0, t.template)(
						'<div><input type="file" accept="image/*"><span></span>Image',
					),
					z = (0, t.template)("<div>"),
					F = (0, t.template)("<div>\u23CE chat"),
					x = (0, t.template)('<div class="advanced-codebase-button"><div>'),
					H = (0, t.template)("<div><span></span><span>codebase"),
					q = (V) => {
						const G = (0, l.$odc)(),
							K = new n.$Zzb(),
							J = (0, g.$zgc)(),
							{ chatDataService: W, chatService: X } = J,
							[Y, ie] = (0, u.createSignal)(!1),
							[ne, ee] = (0, u.createSignal)(-1),
							[_, te] = (0, u.createSignal)(void 0),
							[Q, Z] = (0, u.createSignal)(0),
							[se, re] = (0, u.createSignal)(""),
							[le, oe] = (0, u.createSignal)(-1),
							[ae, pe] = (0, u.createSignal)(!1),
							[$e, ye] = (0, u.createSignal)(!1),
							[ue, fe, me] = (0, D.$A0b)(),
							ve = (0, u.createMemo)(() => {
								const nt = W.getTabData(V.tabId);
								if (!nt) throw new Error("Tab not found");
								return nt;
							}),
							ge = (0, u.createMemo)(() => {
								let nt;
								if (
									(V.bubbleId
										? (nt = W.getBubbleData(V.tabId, V.bubbleId))
										: (nt = ve().bubbles[ve().bubbles.length - 1]),
									!nt)
								)
									throw new Error("Bubble not found");
								return nt;
							});
						(0, u.createEffect)(() => {
							const nt = ge().id;
							ie(!0);
						});
						let be;
						const Ce = [
								{
									command: r.KEY_DOWN_COMMAND,
									callback: (nt) => {
										const lt = new R.$7fb(nt),
											ct = G.keybindingService?.softDispatch(lt, lt.target);
										return ct.kind === A.ResultKind.KbFound &&
											ct.commandId === a.$dX
											? (G.commandService.executeCommand(a.$dX), !0)
											: !1;
									},
								},
								...(G.reactiveStorageService.applicationUserPersistentStorage
									.composerState.isComposerEnabled2
									? [
											{
												command: r.KEY_COMMAND_I_COMMAND,
												callback: (nt) => (
													G.commandService.executeCommand(
														s.OPEN_COMPOSER_FROM_CURRENT_CHAT_ACTION_ID,
														V.tabId,
														ge().id,
													),
													!0
												),
											},
										]
									: []),
								{
									command: r.KEY_TAB_COMMAND,
									callback: (nt) => {
										const lt = ve().bubbles.findIndex(
											(ct) => ct.id === ge().id,
										);
										if (lt === -1)
											return (
												console.log(
													"[aichat] no bubble? what, shouldn't happen",
												),
												!1
											);
										if (nt.shiftKey) {
											nt.preventDefault(), nt.stopPropagation();
											for (let ct = lt - 1; ct >= 0; ct--) {
												const gt = ve().bubbles[ct];
												if (gt.type === g.BubbleType.USER_CHAT)
													return (
														J.setChatData(
															"tabs",
															(ht) => ht.tabId === ve().tabId,
															"editingBubbleId",
															gt.id,
														),
														J.chatData.inputBoxDelegateMap[gt.id]?.focus(),
														!0
													);
											}
											return !0;
										} else {
											for (
												let ct = lt + 1;
												ct < ve().bubbles.length - 1;
												ct++
											) {
												const gt = ve().bubbles[ct];
												if (gt.type === g.BubbleType.USER_CHAT)
													return (
														J.setChatData(
															"tabs",
															(ht) => ht.tabId === ve().tabId,
															"editingBubbleId",
															gt.id,
														),
														nt.preventDefault(),
														nt.stopImmediatePropagation(),
														J.chatData.inputBoxDelegateMap[gt.id]?.focus(),
														!0
													);
											}
											return (
												nt.preventDefault(),
												nt.stopImmediatePropagation(),
												J.setChatData(
													"tabs",
													(ct) => ct.tabId === ve().tabId,
													"editingBubbleId",
													void 0,
												),
												G.aiChatService.focusInput(),
												!0
											);
										}
									},
								},
								{
									command: r.KEY_COMMAND_SLASH_COMMAND,
									callback: (nt) =>
										nt.altKey && be
											? (be(), !0)
											: (G.commandService.executeCommand(a.$9V, {
													isLongContextOrDebuggerMode: Le(),
													specificModelField: "regular-chat",
													isChat: !Le(),
												}),
												nt.stopPropagation(),
												!0),
								},
								{
									command: r.KEY_COMMAND_L_COMMAND,
									callback: (nt) => (
										nt.altKey
											? G.commandService.executeCommand(g.$Fgc)
											: nt.shiftKey
												? G.commandService.executeCommand(h.$mbc)
												: G.commandService.executeCommand(a.$dX),
										!0
									),
								},
								{
									command: r.KEY_COMMAND_W_COMMAND,
									callback: (nt) => (G.aiChatService.hide(), !0),
								},
								{
									command: r.KEY_COMMAND_Y_COMMAND,
									callback: (nt) => (
										console.log("[aichat] new followup"),
										G.commandService.executeCommand(g.$Cgc),
										!0
									),
								},
								{
									command: r.KEY_COMMAND_DOT_COMMAND,
									callback: (nt) => (
										G.commandService.executeCommand(a.$PV),
										nt.stopPropagation(),
										!0
									),
								},
							],
							Le = (0, u.createMemo)(() => ve()?.longContextModeEnabled ?? !1),
							Fe = (0, u.createMemo)(() =>
								G.aiSettingsService.getRegularChatModel(),
							),
							Oe = (0, u.createMemo)(() => ({
								supportsQuotes: !0,
								supportsGit: !Le() && Fe() !== "cursor-long-context",
								supportsCommitNotes: !1,
								supportsDocs: !0,
								supportsWeb: !0,
								supportsFolderSelections: !0,
								supportsLint: !0,
								supportsCodebase: !0,
								supportsAutoContext: !0,
								supportsLink: !Le() && Fe() !== "cursor-long-context",
								supportsNotepads:
									G.reactiveStorageService.applicationUserPersistentStorage
										.notepadState.isNotepadEnabled,
								supportsEditTrail: !1,
							})),
							xe = (0, o.$qbc)(
								() => V.tabId,
								() => ge().id,
								Oe,
							),
							He = (0, $.$5$b)(a.$dX),
							Ke = (0, $.$5$b)(g.$Cgc);
						(0, u.createEffect)(() => {
							const nt = V.bubbleId;
							(0, u.onMount)(() => {
								if (!nt) J.setChatData("inputBoxDelegate", K);
								else {
									const lt = { ...J.chatData.inputBoxDelegateMap, [nt]: K };
									J.setChatData("inputBoxDelegateMap", lt);
								}
							}),
								(0, u.onCleanup)(() => {
									if (nt) {
										const lt = { ...J.chatData.inputBoxDelegateMap };
										delete lt[nt], J.setChatData("inputBoxDelegateMap", lt);
									}
								});
						}),
							(0, u.createEffect)(() => {
								V.role === "selected" &&
									J.setChatData(
										"tabs",
										(nt) => nt.tabId === ve().tabId,
										"selectedBubbleId",
										void 0,
									);
							});
						const Je = (0, p.$kbc)(
								() => V.tabId,
								() => ge().id,
								xe,
							),
							Te = (0, O.$9bc)({ suggestedPills: Je, count: 5 }),
							Ee = (0, u.createMemo)(() => [...Ce, ...Te()]),
							Ie = (0, u.createMemo)(() => ve().bubbles[0].id === ge().id),
							[Be] = (0, b.$K0b)(a.$kW, G.configurationService, !1);
						(0, u.createEffect)(() => {
							const nt = ge().id,
								lt = ve().tabId;
							(0, u.onMount)(() => {
								const ct = J.chatService.onContextRemoved((ht) => {
										const {
											tabId: Rt,
											bubbleId: Nt,
											removedMentionIds: jt,
										} = ht;
										Rt !== lt || Nt !== nt || te(jt);
									}),
									gt = J.chatService.onShouldShowPreview((ht) => {
										const {
											tabId: Rt,
											bubbleId: Nt,
											contextType: jt,
											index: ti,
										} = ht;
										if (Rt !== lt || Nt !== nt) return;
										const kt = Je();
										let hi;
										ti !== void 0
											? (hi = kt.findIndex((di) => di.type === v.$ebc[jt]) + ti)
											: (hi = kt.findIndex((Kt) => Kt.type === v.$ebc[jt])),
											hi !== void 0 && hi !== -1 && ee(hi);
									});
								(0, u.onCleanup)(() => {
									ct.dispose(), gt.dispose();
								});
							});
						});
						const Se = (0, u.createMemo)(() => ge().text ?? ""),
							ke = () =>
								!(
									(G.aiChatService.isTabGenerating(ve().tabId) &&
										V.role !== "selected") ||
									((Se().trim() ?? "").length === 0 && !(0, f.$$fc)(ge()))
								),
							[Ue] = (0, b.$K0b)(a.$oW, G.configurationService, !1),
							qe = ({ withContext: nt }) => {
								(0, c.$oAb)(G.reactiveStorageService, "chat"),
									(0, c.$oAb)(G.reactiveStorageService, "submit");
								const lt = ve().tabId,
									ct = ge().id;
								if (nt === !1) {
									G.aiChatService.submitChat({
										bubbleID: ct,
										tabID: lt,
										removeAllContext: !0,
									});
									return;
								}
								G.aiChatService.submitChat({ bubbleID: ct, tabID: lt });
							},
							Ae = ({ useReranker: nt, useAdvancedContext: lt }) => {
								G.aiChatService.submitContextChat({
									bubbleID: ge().id,
									tabID: ve().tabId,
									useReranker: nt,
									useAdvancedContext: lt,
								});
							},
							Me = () => {
								G.tooltipService.registerEvent("chat.submit.advanced_context"),
									Ae({ useReranker: !1, useAdvancedContext: !0 });
							},
							De = () => {
								ke() &&
									(G.tooltipService.registerEvent(
										"chat.submit.codebase.cmd_enter",
									),
									Ae({ useReranker: !0, useAdvancedContext: !1 }));
							},
							Re = ({ withContext: nt }) => {
								ke() &&
									(nt
										? G.tooltipService.registerEvent("chat.submit.normal")
										: G.tooltipService.registerEvent(
												"chat.submit.without_context",
											),
									nt
										? G.telemetryService.publicLogCapture("chat.submit.normal")
										: G.telemetryService.publicLogCapture(
												"chat.submit.without_context",
											),
									qe({ withContext: nt }));
							},
							[je] = (0, b.$K0b)(a.$mW, G.configurationService, !0),
							[Ve] = (0, b.$K0b)(a.$EW, G.configurationService, !1),
							Ze = (0, u.createMemo)(() =>
								Je().map((lt) => ({
									...lt,
									willBeOmitted:
										ae() && lt.type === "file" ? lt.data.isCurrentFile : !1,
								})),
							),
							et = () => (ge().text?.trim() ?? "").length === 0,
							rt = () => ge(),
							ft = (...nt) => {
								const lt = V.tabId,
									ct = ge().id;
								W.setChatData(
									"tabs",
									(gt) => gt.tabId === lt,
									"bubbles",
									(gt) => gt.id === ct && gt.type === "user",
									...nt,
								);
							},
							bt = (0, N.$8bc)(
								() => ve().tabId,
								() => ge().id,
							);
						return [
							(0, d.createComponent)(
								y.$Vbc,
								(0, m.mergeProps)(V, {
									inputBoxDelegate: K,
									get shouldNarrowScrollbar() {
										return je();
									},
									getPickerMenuProps: bt,
									get id() {
										return ge().id;
									},
									get text() {
										return Se();
									},
									setText: (nt) => {
										W.updateBubbleData(V.tabId, ge().id, { text: nt }),
											G.aiChatService.handleUserDidType(V.tabId, ge().id);
									},
									get richText() {
										return ge().richText;
									},
									setRichText: (nt) => {
										const lt = V.tabId,
											ct = ge().id;
										setTimeout(() => {
											W.setChatData(
												"tabs",
												(gt) => gt.tabId === lt,
												"bubbles",
												(gt) => gt.id === ct,
												"richText",
												nt,
											);
										});
									},
									getContext: rt,
									setContext: ft,
									get undoRedoUri() {
										return X.getUndoRedoUri(V.tabId, ge().id);
									},
									supports: Oe,
									sideEffects: xe,
									get longContextModeEnabled() {
										return Le();
									},
									get forceText() {
										return Y();
									},
									setForceText: ie,
									onFurtherArrowUp: () => (
										G.aiChatService.selectLastBubbleAboveInput(), !0
									),
									onFurtherArrowDown: () =>
										!Be() ||
										!V.setSelectedPreviousChatIndex ||
										ve().bubbles.length !== 1
											? !1
											: (J.chatData.inputBoxDelegate?.getRef()?.blur(),
												V.setSelectedPreviousChatIndex?.(0),
												!0),
									onPreSubmit: () => {
										J.setChatData(
											"tabs",
											({ tabId: nt }) => nt === ve().tabId,
											"editingBubbleId",
											void 0,
										);
									},
									setIsFocused: ye,
									allPills: Ze,
									mentionIdsToDelete: _,
									setMentionIdsToDelete: te,
									onEscape: () => {
										if (V.role === "selected") {
											J.setChatData(
												"tabs",
												(nt) => nt.tabId === ve().tabId,
												"editingBubbleId",
												void 0,
											),
												J.setChatData(
													"tabs",
													(nt) => nt.tabId === ve().tabId,
													"selectedBubbleId",
													ge().id,
												),
												(0, f.$egc)(ge().id);
											return;
										}
										K.getRef()?.blur(),
											G.editorService.activeEditorPane?.focus();
									},
									disableSelectionCopyPaste: !0,
									onReferenceOpenEditors: () => {
										J.chatService.referenceOpenEditors(V.tabId, ge().id);
									},
									onReferenceActiveEditors: () => {
										J.chatService.referenceActiveEditors(V.tabId, ge().id);
									},
									get extraCommandListeners() {
										return Ee();
									},
									get containerWidth() {
										return Q();
									},
									setContainerWidth: Z,
									onFocus: () => {
										J.chatDataService.setChatData(
											"tabs",
											(lt) => lt.tabId === ve().tabId,
											"lastFocusedBubbleId",
											ge().id,
										),
											(ge().fileSelections.some((lt) => lt.isCurrentFile) ||
												ge().notepads?.some((lt) => lt.isCurrentNotepad) ||
												ge().terminalFiles?.some((lt) => lt.isCurrentFile)) &&
												J.chatService.refreshReactiveContextItem(
													ve().tabId,
													ge().id,
												);
									},
									get placeholder() {
										return `${ve().bubbles[0].id === ge().id ? "Ask anything" : "Ask followup"}${V.role === "bottom" || V.role === "top" ? (Ie() ? (He() ? ` (${He()})` : "") : Ke() ? ` (${Ke()})` : "") : ""}${Q() < 220 ? "" : `, ${V.role === "top" && Be() ? "\u21C5" : "\u2191"} to select`}`;
									},
									onSubmit: (nt) => {
										if (!ke()) return;
										const lt = Ue();
										return nt.key === "Enter" &&
											!nt.shiftKey &&
											(nt.ctrlKey || nt.metaKey)
											? (De(), nt.preventDefault(), !0)
											: nt.key === "Enter" &&
													nt.shiftKey &&
													(nt.ctrlKey || nt.metaKey)
												? (Me(), !0)
												: nt.key === "Enter" &&
														!nt.shiftKey &&
														!nt.ctrlKey &&
														!nt.metaKey &&
														(lt ? !nt.altKey : nt.altKey)
													? (Re({ withContext: !1 }), nt.preventDefault(), !0)
													: nt.key === "Enter" &&
															!nt.shiftKey &&
															!nt.ctrlKey &&
															(lt ? nt.altKey : !nt.altKey)
														? (Re({ withContext: !0 }), nt.preventDefault(), !0)
														: !1;
									},
									onReset: () => {
										J.chatService.resetCurrentTab();
									},
									get forceShouldShowPillPreview() {
										return ne();
									},
									resetForceShouldShowPillPreview: () => ee(-1),
									get selectPillSignal() {
										return J.chatData.selectInputBoxPillSignal;
									},
									turnOffSelectPillSignal: () =>
										J.setChatData("selectInputBoxPillSignal", void 0),
									get shouldDisplayMultiRowPills() {
										return !Ve();
									},
									onContext: Ae,
									onPinContext: (nt) => {
										G.aiChatService.addPinnedContext({
											type: nt.type,
											data: nt.data,
										});
									},
									onUnpinContext: (nt) => {
										G.aiChatService.removePinnedContext({
											type: nt.type,
											data: nt.data,
										});
									},
									checkIsContextPinned: (nt) => {
										const lt =
											nt.type === "file" ? "fileSelections" : "codeSelections";
										return W.chatData.pinnedContexts[lt].some((ct) =>
											(0, S.$1gc)(
												lt === "codeSelections" ? "selections" : lt,
												ct,
												nt.data,
											),
										);
									},
									setIsAltPressed: pe,
									get bottomLeftContent() {
										return (() => {
											const nt = z();
											return (
												nt.style.setProperty("display", "flex"),
												nt.style.setProperty("align-items", "center"),
												nt.style.setProperty("gap", "4px"),
												nt.style.setProperty("flex-shrink", "0"),
												(0, w.insert)(
													nt,
													(0, d.createComponent)(P.$3bc, {
														class: "full-input-box-button",
														get forceRerender() {
															return V.role === "bottom"
																? 0
																: G.reactiveStorageService.nonPersistentStorage
																		.forceChatDropdownRerender;
														},
														get buttonHint() {
															return `${$e() ? (M.$m ? "\u2318\u2325/ " : "ctrl+alt+/ ") : ""}open menu`;
														},
														setTriggerFn: (lt) => {
															be = lt;
														},
														get isLongContextMode() {
															return Le() ?? !1;
														},
														isDebuggerMode: !1,
														onClose: () => {
															K.focus();
														},
														get isChat() {
															return !Le();
														},
														specificModelField: "regular-chat",
														get reverseChevron() {
															return V.role === "bottom";
														},
													}),
													null,
												),
												(0, w.insert)(
													nt,
													(0, d.createComponent)(u.Show, {
														get when() {
															return Q() >= 360;
														},
														get children() {
															const lt = B(),
																ct = lt.firstChild;
															return (
																lt.addEventListener("click", () => {
																	K.insertAtSymbol();
																}),
																lt.addEventListener("mousedown", (gt) => {
																	gt.preventDefault();
																}),
																lt.style.setProperty("margin-left", "0px"),
																lt.style.setProperty("display", "flex"),
																lt.style.setProperty("align-items", "center"),
																lt.style.setProperty(
																	"justify-content",
																	"center",
																),
																lt.style.setProperty(
																	"background-color",
																	"rgba(0, 0, 0, 0)",
																),
																lt.style.setProperty("flex-shrink", "0"),
																ct.style.setProperty("font-size", "10px"),
																ct.style.setProperty("padding-top", "0px"),
																ct.style.setProperty("margin-right", "2px"),
																(0, C.effect)(
																	(gt) => {
																		const ht = `full-input-box-button ${(0, c.$mAb)(G.reactiveStorageService, "context") || (ge().richText && ge().richText.length <= 5) ? "" : "cursor-flash-box"}`,
																			Rt = T.ThemeIcon.asClassName(
																				I.$ak.atSign,
																			);
																		return (
																			ht !== gt._v$ &&
																				(0, E.className)(lt, (gt._v$ = ht)),
																			Rt !== gt._v$2 &&
																				(0, E.className)(ct, (gt._v$2 = Rt)),
																			gt
																		);
																	},
																	{ _v$: void 0, _v$2: void 0 },
																),
																lt
															);
														},
													}),
													null,
												),
												(0, w.insert)(
													nt,
													(0, d.createComponent)(u.Show, {
														get when() {
															return (
																Q() >= 400 &&
																(G.reactiveStorageService
																	.applicationUserPersistentStorage.aiSettings
																	.regularChatModel === "gpt-4" ||
																	G.reactiveStorageService
																		.applicationUserPersistentStorage.aiSettings
																		.regularChatModel === "gpt-4o" ||
																	G.reactiveStorageService
																		.applicationUserPersistentStorage.aiSettings
																		.regularChatModel === "claude-3.5-sonnet" ||
																	G.reactiveStorageService
																		.applicationUserPersistentStorage.aiSettings
																		.regularChatModel === "gpt-4o-mini")
															);
														},
														get children() {
															const lt = U(),
																ct = lt.firstChild,
																gt = ct.nextSibling;
															return (
																lt.addEventListener("click", (ht) => {
																	const Rt =
																		ht.currentTarget.querySelector(
																			"input[type=file]",
																		);
																	Rt && Rt.click();
																}),
																lt.addEventListener("mousedown", (ht) => {
																	ht.preventDefault();
																}),
																lt.style.setProperty("margin-left", "0px"),
																lt.style.setProperty("display", "flex"),
																lt.style.setProperty("align-items", "center"),
																lt.style.setProperty(
																	"justify-content",
																	"center",
																),
																lt.style.setProperty(
																	"background-color",
																	"rgba(0, 0, 0, 0)",
																),
																lt.style.setProperty("flex-shrink", "0"),
																ct.addEventListener("change", (ht) => {
																	const Rt = ht.target.files?.[0];
																	if (!Rt || !Rt.type.startsWith("image/"))
																		return;
																	const Nt = new Image();
																	(Nt.src = URL.createObjectURL(Rt)),
																		(Nt.onload = () => {
																			xe().addImage((0, k.$9g)(), {
																				path: Rt.path,
																				dimension: {
																					width: Nt.width,
																					height: Nt.height,
																				},
																				loadedAt: Date.now(),
																			});
																		});
																}),
																ct.style.setProperty("display", "none"),
																gt.style.setProperty("font-size", "10px"),
																gt.style.setProperty("padding-top", "0px"),
																gt.style.setProperty("margin-right", "2px"),
																(0, C.effect)(
																	(ht) => {
																		const Rt = `full-input-box-button ${(0, c.$mAb)(G.reactiveStorageService, "context") || (ge().richText && ge().richText.length <= 5) ? "" : "cursor-flash-box"}`,
																			Nt = T.ThemeIcon.asClassName(I.$ak.image);
																		return (
																			Rt !== ht._v$3 &&
																				(0, E.className)(lt, (ht._v$3 = Rt)),
																			Nt !== ht._v$4 &&
																				(0, E.className)(gt, (ht._v$4 = Nt)),
																			ht
																		);
																	},
																	{ _v$3: void 0, _v$4: void 0 },
																),
																lt
															);
														},
													}),
													null,
												),
												nt
											);
										})();
									},
									get bottomRightContent() {
										return (() => {
											const nt = z();
											return (
												nt.style.setProperty("display", "flex"),
												nt.style.setProperty("align-items", "center"),
												nt.style.setProperty("justify-content", "center"),
												nt.style.setProperty("gap", "4px"),
												(0, w.insert)(
													nt,
													(0, d.createComponent)(u.Show, {
														get when() {
															return ae();
														},
														get children() {
															const lt = z();
															return (
																lt.addEventListener("click", () => {
																	Re({ withContext: Ue() });
																}),
																lt.addEventListener("mousedown", (ct) => {
																	ct.preventDefault();
																}),
																lt.style.setProperty(
																	"background-color",
																	"rgba(0, 0, 0, 0)",
																),
																(0, w.insert)(
																	lt,
																	() =>
																		`${M.$m ? "\u2325" : "alt+"}\u23CE ${Ue() ? "with context" : "no context"}`,
																),
																(0, C.effect)(() =>
																	(0, E.className)(
																		lt,
																		`full-input-box-button ${(et(), "full-unclickable")}`,
																	),
																),
																lt
															);
														},
													}),
													null,
												),
												(0, w.insert)(
													nt,
													(0, d.createComponent)(u.Show, {
														get when() {
															return !ae();
														},
														get children() {
															return [
																(0, d.createComponent)(u.Show, {
																	get when() {
																		return Q() > 480;
																	},
																	get children() {
																		const lt = z();
																		return (
																			lt.addEventListener("click", () => {
																				Re({ withContext: Ue() });
																			}),
																			lt.addEventListener("mousedown", (ct) => {
																				ct.preventDefault();
																			}),
																			lt.style.setProperty(
																				"background-color",
																				"rgba(0, 0, 0, 0)",
																			),
																			(0, w.insert)(
																				lt,
																				() =>
																					`${M.$m ? "\u2325" : "alt+"}\u23CE ${Ue() ? "with context" : "no context"}`,
																			),
																			(0, C.effect)(() =>
																				(0, E.className)(
																					lt,
																					`full-input-box-button ${(et(), "full-unclickable")}`,
																				),
																			),
																			lt
																		);
																	},
																}),
																(0, d.createComponent)(u.Show, {
																	get when() {
																		return Q() > 120;
																	},
																	get children() {
																		const lt = F();
																		return (
																			lt.addEventListener("click", () => {
																				ge().text && Re({ withContext: !Ue() });
																			}),
																			lt.addEventListener("mousedown", (ct) => {
																				ct.preventDefault();
																			}),
																			lt.style.setProperty(
																				"background-color",
																				"rgba(0, 0, 0, 0)",
																			),
																			(0, C.effect)(() =>
																				(0, E.className)(
																					lt,
																					`full-input-box-button ${(et(), "full-unclickable")}`,
																				),
																			),
																			lt
																		);
																	},
																}),
																(0, d.createComponent)(u.Show, {
																	get when() {
																		return Q() >= 260;
																	},
																	get children() {
																		const lt = H(),
																			ct = lt.firstChild,
																			gt = ct.nextSibling;
																		return (
																			lt.addEventListener("click", () => {
																				ge().text && De();
																			}),
																			lt.addEventListener("mousedown", (ht) => {
																				ht.preventDefault();
																			}),
																			lt.style.setProperty("display", "flex"),
																			lt.style.setProperty(
																				"align-items",
																				"center",
																			),
																			lt.style.setProperty("gap", "2px"),
																			(0, w.insert)(
																				ct,
																				`${M.$m ? "\u2318" : "ctrl+"}\u23CE`,
																			),
																			gt.style.setProperty(
																				"margin-left",
																				"2px",
																			),
																			(0, w.insert)(
																				lt,
																				(0, d.createComponent)(u.Show, {
																					get when() {
																						return !V.usesCodebase;
																					},
																					get children() {
																						const ht = x(),
																							Rt = ht.firstChild;
																						return (
																							ht.addEventListener(
																								"click",
																								(Nt) => {
																									if (
																										(Nt.stopImmediatePropagation(),
																										ue())
																									) {
																										me();
																										return;
																									}
																									const jt =
																										Nt.currentTarget.getBoundingClientRect();
																									fe(
																										V.role === "bottom"
																											? {
																													x: jt.right + 6,
																													y: jt.top - 8,
																												}
																											: {
																													x: jt.right + 6,
																													y: jt.bottom + 8,
																												},
																									);
																								},
																							),
																							ht.style.setProperty(
																								"height",
																								"100%",
																							),
																							ht.style.setProperty(
																								"display",
																								"flex",
																							),
																							ht.style.setProperty(
																								"align-items",
																								"center",
																							),
																							ht.style.setProperty(
																								"justify-content",
																								"center",
																							),
																							ht.style.setProperty(
																								"padding-top",
																								"1px",
																							),
																							Rt.style.setProperty(
																								"padding",
																								"0px",
																							),
																							Rt.style.setProperty(
																								"font-size",
																								"0.65rem",
																							),
																							(0, C.effect)(
																								(Nt) => {
																									const jt = `advanced-codebase-button-${V.bubbleId}`,
																										ti =
																											T.ThemeIcon.asClassName(
																												V.role === "bottom"
																													? ue()
																														? I.$ak.chevronDown
																														: I.$ak.chevronUp
																													: ue()
																														? I.$ak.chevronUp
																														: I.$ak.chevronDown,
																											);
																									return (
																										jt !== Nt._v$5 &&
																											(0, i.setAttribute)(
																												ht,
																												"id",
																												(Nt._v$5 = jt),
																											),
																										ti !== Nt._v$6 &&
																											(0, E.className)(
																												Rt,
																												(Nt._v$6 = ti),
																											),
																										Nt
																									);
																								},
																								{ _v$5: void 0, _v$6: void 0 },
																							),
																							ht
																						);
																					},
																				}),
																				null,
																			),
																			(0, C.effect)(() =>
																				(0, E.className)(
																					lt,
																					`full-input-box-button codebase ${(et(), "full-unclickable")}`,
																				),
																			),
																			lt
																		);
																	},
																}),
															];
														},
													}),
													null,
												),
												nt
											);
										})();
									},
								}),
							),
							(0, d.createComponent)(u.Show, {
								get when() {
									return !V.usesCodebase;
								},
								get children() {
									return (0, d.createComponent)(L.$6bc, {
										get position() {
											return ue();
										},
										close: me,
										get nonBlockingRootId() {
											return `advanced-codebase-button-${V.bubbleId}`;
										},
										get anchor() {
											return V.role === "bottom" ? "bottom-right" : "top-right";
										},
										getContext: rt,
										setContext: ft,
									});
								},
							}),
						];
					};
				e.$0bc = q;
			},
		),
		