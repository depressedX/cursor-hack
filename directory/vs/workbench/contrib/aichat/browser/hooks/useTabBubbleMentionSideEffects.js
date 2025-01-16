define(de[4401], he([1, 0, 140, 1712, 2011]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$qbc = void 0);
			const E = (C, d, m) => {
				const r = (0, t.$zgc)(),
					u = (0, i.$abc)(C, d);
				return (0, w.$bbc)(
					(a, h, c, n) => {
						r.chatService.addContext({
							tabId: C(),
							bubbleId: d(),
							contextType: a,
							value: h,
							uuid: c,
							shouldShowPreview: void 0,
							addToUndoRedo: n,
						});
					},
					(a, h, c) => {
						r.chatService.removeContext({
							tabId: C(),
							bubbleId: d(),
							contextType: a,
							index: h,
							addToUndoRedo: c,
						});
					},
					(a) => {
						r.chatService.removeMention(C(), d(), a);
					},
					m,
					u,
				);
			};
			e.$qbc = E;
		}),
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
		define(
			de[4402],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 2, 14, 26, 862, 1994, 2010, 1065, 1233, 694,
				36, 140, 1967, 573, 2012, 1521,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$bc = void 0);
				const $ = (0, t.template)("<div>"),
					v = (0, t.template)('<div class="premium-user-bubble-toolbar"><div>'),
					S = (T) => {
						const P = (0, f.$odc)(),
							k = (0, b.$zgc)(),
							L = (0, m.createMemo)(() => T.data.richText ?? T.data.text ?? ""),
							D = (0, g.$lbc)(),
							M = (0, m.createMemo)(() => {
								const z = D()?.bubbles ?? [];
								return z[z.length - 1].id === T.bubbleId;
							}),
							[N, A] = (0, m.createSignal)(!1),
							R = (0, p.$4ac)(
								() => T.tabId,
								() => T.bubbleId,
							),
							O = (0, m.createMemo)(() => D()?.editingBubbleId === T.bubbleId),
							B = (0, n.$kbc)(
								() => T.tabId,
								() => T.bubbleId,
								void 0,
								{ readonly: !0 },
							),
							U = (0, m.createMemo)(() => {
								const z = B().filter(
									(F) => F.type !== "gitGraphFileSuggestion",
								);
								return z.length === 0 || z.every((F) => F.type === z[0].type);
							});
						return (0, d.createComponent)(m.Show, {
							get when() {
								return !M();
							},
							get children() {
								return (0, d.createComponent)(s.$5ac, {
									get tabId() {
										return T.tabId;
									},
									get bubbleId() {
										return T.bubbleId;
									},
									onMouseEnter: () => A(!0),
									onMouseLeave: () => A(!1),
									style: { "padding-top": "8px", "padding-bottom": "8px" },
									get children() {
										return [
											(0, d.createComponent)(m.Show, {
												get when() {
													return !O();
												},
												get fallback() {
													return (0, d.createComponent)(y.$0bc, {
														autofocus: !0,
														role: "selected",
														get tabId() {
															return T.tabId;
														},
														get bubbleId() {
															return T.bubbleId;
														},
														get scrollable() {
															return T.scrollable;
														},
														get usesCodebase() {
															return (
																"usesCodebase" in T.data &&
																!!T.data.usesCodebase
															);
														},
													});
												},
												get children() {
													const z = $();
													return (
														z.addEventListener("click", () => {
															const F = T.tabId,
																x = T.bubbleId;
															k.setChatData(
																"tabs",
																(H) => H.tabId === F,
																"editingBubbleId",
																x,
															);
														}),
														z.style.setProperty("border-radius", "0.25rem"),
														z.style.setProperty("position", "relative"),
														z.style.setProperty("padding", "6px"),
														z.style.setProperty(
															"background-color",
															"var(--vscode-input-background)",
														),
														z.style.setProperty(
															"border",
															"solid 1px var(--vscode-input-border,transparent)",
														),
														z.style.setProperty("display", "flex"),
														z.style.setProperty("flex-direction", "column"),
														z.style.setProperty("gap", "0.25rem"),
														(0, C.insert)(
															z,
															(0, d.createComponent)(m.Show, {
																get when() {
																	return R() || N();
																},
																get children() {
																	return (0, d.createComponent)(I, {
																		get tabId() {
																			return T.tabId;
																		},
																		get bubbleId() {
																			return T.bubbleId;
																		},
																		get isSelected() {
																			return R();
																		},
																	});
																},
															}),
															null,
														),
														(0, C.insert)(
															z,
															(0, d.createComponent)(m.Show, {
																get when() {
																	return B().length > 0;
																},
																get children() {
																	const F = $();
																	return (
																		F.style.setProperty("display", "flex"),
																		F.style.setProperty(
																			"align-items",
																			"center",
																		),
																		F.style.setProperty("gap", "4px"),
																		F.style.setProperty("flex-wrap", "wrap"),
																		F.style.setProperty(
																			"color",
																			"var(--vscode-input-placeholderForeground)",
																		),
																		(0, C.insert)(
																			F,
																			(0, d.createComponent)(r.For, {
																				get each() {
																					return B();
																				},
																				children: (x, H) =>
																					(0, d.createComponent)(
																						l.$ibc,
																						(0, E.mergeProps)(x, {
																							get hideTypeTitle() {
																								return U();
																							},
																						}),
																					),
																			}),
																		),
																		F
																	);
																},
															}),
															null,
														),
														(0, C.insert)(
															z,
															(0, d.createComponent)(c.$$ac, {
																get text() {
																	return L();
																},
																get id() {
																	return T.bubbleId;
																},
															}),
															null,
														),
														z
													);
												},
											}),
											(0, d.createComponent)(m.Show, {
												get when() {
													return T.data.errorDetails;
												},
												children: (z) =>
													(() => {
														const F = $();
														return (
															F.style.setProperty("padding-bottom", "22px"),
															(0, C.insert)(
																F,
																(0, d.createComponent)(h.$0ac, {
																	get generationUUID() {
																		return z().generationUUID;
																	},
																	get error() {
																		return z().error;
																	},
																	get message() {
																		return z().message;
																	},
																	get rerun() {
																		return z().rerun;
																	},
																}),
															),
															F
														);
													})(),
											}),
										];
									},
								});
							},
						});
					};
				e.$$bc = S;
				const I = (T) => {
					const P = (0, b.$zgc)(),
						{ showHover: k, hideHover: L } = (0, o.$G$b)({});
					return (() => {
						const D = v(),
							M = D.firstChild;
						return (
							D.addEventListener("mouseleave", () => L()),
							D.addEventListener("mouseenter", (N) =>
								k(N, `Edit${T.isSelected ? " (I)" : ""}`),
							),
							D.style.setProperty("position", "absolute"),
							D.style.setProperty("top", "0"),
							D.style.setProperty("right", "8px"),
							D.style.setProperty("transform", "translateY(-40%)"),
							D.style.setProperty(
								"background-color",
								"var(--vscode-editor-background)",
							),
							D.style.setProperty(
								"border",
								"solid 1px var(--vscode-input-border,transparent)",
							),
							D.style.setProperty(
								"box-shadow",
								"0 1px 4px var(--vscode-widget-shadow, rgba(0, 0, 0, 0.1))",
							),
							D.style.setProperty("border-radius", "0.25rem"),
							D.style.setProperty("padding", "1px"),
							D.style.setProperty("z-index", "1"),
							M.addEventListener("click", () => {
								const N = T.tabId;
								P.setChatData(
									"tabs",
									(A) => A.tabId === N,
									"editingBubbleId",
									T.bubbleId,
								);
							}),
							(0, w.effect)(() =>
								(0, i.className)(
									M,
									`toolbar-button ${a.ThemeIcon.asClassName(u.$ak.pencil)}`,
								),
							),
							D
						);
					})();
				};
			},
		),
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
		define(
			de[4404],
			he([
				1, 0, 2, 2, 2, 2, 13, 58, 140, 4139, 4403, 1065, 36, 4249, 270, 523,
				385, 4396, 2012,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$hcc = l);
				const b = (0, t.template)("<div>"),
					s = (0, t.template)("<div> toggle mode");
				function l(y) {
					const $ = (0, h.$odc)(),
						v = (0, a.$lbc)(),
						[S, I] = (0, C.createSignal)(!1),
						[T, P] = (0, C.createSignal)(0),
						[k, L] = (0, C.createSignal)(-1),
						D = (0, C.useContext)(m.$ygc),
						M = (F) => {
							$.commandService.executeCommand(d.$dX);
						},
						N = (0, p.$5$b)(d.$PV),
						A = (0, C.createMemo)(() => v()?.longContextModeEnabled ?? !1),
						R = (0, C.createMemo)(
							() =>
								$.reactiveStorageService.applicationUserPersistentStorage
									.longContextFlagEnabled2,
						),
						O = (0, C.createMemo)(() => R() || A()),
						B = (0, C.createMemo)(() =>
							A() ? "Long Context Chat" : "Normal Chat",
						),
						[U] = (0, n.$K0b)(d.$mW, $.configurationService, !0),
						[z] = (0, n.$K0b)(d.$kW, $.configurationService, !0);
					return (() => {
						const F = b();
						return (
							F.style.setProperty("height", "100%"),
							F.style.setProperty("display", "flex"),
							F.style.setProperty("flex-direction", "column"),
							F.style.setProperty("overflow", "hidden"),
							(0, i.insert)(
								F,
								(() => {
									const x = (0, E.memo)(() => !!D.isEditorWindow);
									return () => x() && (0, w.createComponent)(r.$J0b, {});
								})(),
								null,
							),
							(0, i.insert)(F, (0, w.createComponent)(o.$gcc, {}), null),
							(0, i.insert)(
								F,
								(0, w.createComponent)(C.Show, {
									get when() {
										return v().bubbles.length > 1;
									},
									get children() {
										return (0, w.createComponent)(u.$acc, {
											get tabId() {
												return v().tabId;
											},
											newChat: M,
											showChatHistory: () => !1,
											get isLoading() {
												return S();
											},
											setIsLoading: I,
											get scrollToBottomTrigger() {
												return T();
											},
										});
									},
								}),
								null,
							),
							(0, i.insert)(
								F,
								(0, w.createComponent)(C.Show, {
									get when() {
										return (0, E.memo)(() => v().bubbles.length === 1)() && O();
									},
									get children() {
										const x = b();
										return (
											x.style.setProperty(
												"margin",
												"0.25rem 1rem 0.25rem 1rem",
											),
											x.style.setProperty(
												"color",
												"var(--vscode-input-placeholderForeground)",
											),
											x.style.setProperty("text-align", "right"),
											(0, i.insert)(
												x,
												(0, w.createComponent)(g.$Mbc, {
													anchor: "top-right",
													get value() {
														return B();
													},
													get items() {
														return [
															{ id: "Normal Chat", label: "Normal Chat" },
															...(O()
																? [
																		{
																			id: "Long Context Chat",
																			label: "Long Context Chat",
																		},
																	]
																: []),
														];
													},
													chevronRight: !0,
													get cannotToggle() {
														return v().bubbles.length > 1;
													},
													get origLabel() {
														return B();
													},
													onSelect: (H) => {
														$.commandService.executeCommand(d.$PV, H);
													},
													get belowListComponent() {
														return (() => {
															const H = s(),
																q = H.firstChild;
															return (
																H.style.setProperty("font-size", "10px"),
																H.style.setProperty("opacity", "0.5"),
																H.style.setProperty("padding", "0px 5px"),
																(0, i.insert)(H, N, q),
																H
															);
														})();
													},
												}),
											),
											x
										);
									},
								}),
								null,
							),
							(0, i.insert)(
								F,
								(0, w.createComponent)(C.Show, {
									get when() {
										return v().bubbles[v().bubbles.length - 1].type === "user";
									},
									get children() {
										return (0, w.createComponent)(f.$0bc, {
											get role() {
												return v().bubbles.length === 1 ? "top" : "bottom";
											},
											setSelectedPreviousChatIndex: L,
											triggerScrollToBottom: () => P(T() + 1),
											get tabId() {
												return v().tabId;
											},
										});
									},
								}),
								null,
							),
							(0, i.insert)(
								F,
								(0, w.createComponent)(C.Show, {
									get when() {
										return (0, E.memo)(() => v().bubbles.length === 1)() && z();
									},
									get children() {
										return (0, w.createComponent)(c.$ccc, {
											get selectedTabId() {
												return v().tabId;
											},
											get selectedPreviousChatIndex() {
												return k();
											},
											setSelectedPreviousChatIndex: L,
										});
									},
								}),
								null,
							),
							F
						);
					})();
				}
			},
		),
		define(
			de[4405],
			he([1, 0, 2, 2, 2, 2, 13, 7, 205, 4203, 4404, 36, 140, 907, 1141, 1142]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$icc = n),
					(d = mt(d));
				const c = (0, t.template)("<div>");
				function n(g) {
					const p = (0, C.useContext)(h.$ygc),
						o = (0, a.$odc)(),
						f = () =>
							o.reactiveStorageService.workspaceUserPersistentStorage
								.aiPanePosition;
					let b;
					return (
						(0, C.onMount)(() => {
							b !== void 0 &&
								d
									.getWindow(b)
									.document.addEventListener("mousedown", function (s) {
										!s.target.closest(".ai-chat-history-pane") &&
											f() === m.AIPanePosition.SIDEBAR &&
											g.hideChatHistory();
									});
						}),
						(() => {
							const s = c();
							return (
								s.style.setProperty("height", "100%"),
								s.style.setProperty("width", "100%"),
								(0, i.insert)(
									s,
									(0, E.createComponent)(C.Show, {
										get when() {
											return !p.isEditorWindow;
										},
										get children() {
											return (0, E.createComponent)(r.$C0b, g);
										},
									}),
									null,
								),
								(0, i.insert)(
									s,
									(0, E.createComponent)(C.Show, {
										get when() {
											return (
												((0, w.memo)(() => !!p.isEditorWindow)() &&
													f() === m.AIPanePosition.EDITOR) ||
												(!p.isEditorWindow && f() === m.AIPanePosition.SIDEBAR)
											);
										},
										get children() {
											const l = c();
											return (
												l.style.setProperty("height", "100%"),
												l.style.setProperty("width", "100%"),
												l.style.setProperty("display", "flex"),
												l.style.setProperty("flex-direction", "column"),
												l.style.setProperty("background", "transparent"),
												(0, i.insert)(l, (0, E.createComponent)(u.$hcc, {})),
												l
											);
										},
									}),
									null,
								),
								s
							);
						})()
					);
				}
			},
		),
		define(
			de[4406],
			he([1, 0, 2, 36, 4405, 140]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$jcc = C);
				function C(d, m, r, u, a, h) {
					return (0, i.$ndc)(
						() =>
							(0, t.createComponent)(E.$ygc.Provider, {
								value: r,
								get children() {
									return (0, t.createComponent)(w.$icc, {
										persistSelectedChat: u,
										hideChatHistory: a,
										showChatHistory: h,
									});
								},
							}),
						d,
						m,
					);
				}
			},
		),
		define(
			de[4407],
			he([
				1, 0, 13, 735, 83, 7, 6, 3, 59, 9, 47, 65, 17, 496, 42, 204, 31, 10, 8,
				280, 20, 5, 180, 90, 45, 205, 669, 134, 21, 32, 308, 25, 332, 418, 1927,
				337, 354, 112, 108, 107, 1931, 118, 1874, 480, 359, 226, 1054, 191, 356,
				401, 315, 516, 66, 18, 832, 96, 89, 4406, 140, 400, 241, 397, 54, 837,
				58, 715, 19, 155, 287, 271, 298, 668, 23, 467, 28, 476, 246, 1869, 22,
				560, 27, 43, 1007,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qcc = e.$pcc = void 0),
					(e.$ncc = ke),
					(e.$occ = Ue),
					(E = mt(E));
				const Be = 15;
				function Se() {
					const Me = E.$Ngb();
					return (
						!!Me.activeElement &&
						(Me.activeElement.tagName === "INPUT" ||
							Me.activeElement.tagName === "TEXTAREA")
					);
				}
				function ke(Me) {
					return Me && typeof Me.marker == "object";
				}
				async function* Ue(Me) {
					let De = "default",
						Re = 0,
						je = "",
						Ve = "";
					for await (const Ze of Me)
						for (const et of Ze)
							yield { type: "normal", value: et },
								De === "default"
									? et === "`" && ((De = "awaitingstartingbacktick"), (Re = 1))
									: De === "awaitingstartingbacktick"
										? et === "`"
											? (Re++,
												Re === 3 && ((De = "awaitingnewline"), (je = "")))
											: (De = "default")
										: De === "awaitingnewline"
											? et ===
												`
`
												? je.trim() === "bash"
													? ((De = "awaitingendingbackticks"), (Re = 0))
													: (De = "default")
												: (je += et)
											: De === "awaitingendingbackticks" &&
												(et === "`"
													? (Re++, Re === 3 && (De = "found"))
													: ((Re = 0), (Ve += et))),
								De === "found" && (yield { type: "bash", value: Ve });
				}
				let qe = class extends d.$1c {
					static {
						this.Id = N.AIChatConstants.CHAT_VIEW_ID;
					}
					constructor(
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
						hi,
						Kt,
						di,
						Ye,
						ze,
						Xe,
						It,
						Lt,
						xt,
						Vt,
						Bt,
						Gt,
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
					) {
						super(),
							(this.y = De),
							(this.z = Re),
							(this.C = je),
							(this.F = Ve),
							(this.G = Ze),
							(this.H = et),
							(this.I = rt),
							(this.J = ft),
							(this.L = bt),
							(this.M = nt),
							(this.N = lt),
							(this.O = ct),
							(this.P = gt),
							(this.Q = ht),
							(this.R = Rt),
							(this.S = Nt),
							(this.U = jt),
							(this.W = ti),
							(this.X = kt),
							(this.Y = hi),
							(this.Z = Kt),
							(this.$ = di),
							(this.ab = Ye),
							(this.bb = ze),
							(this.cb = Xe),
							(this.db = It),
							(this.eb = Lt),
							(this.fb = xt),
							(this.gb = Vt),
							(this.hb = Bt),
							(this.ib = Gt),
							(this.jb = Mt),
							(this.kb = Ut),
							(this.lb = ei),
							(this.mb = mi),
							(this.nb = ii),
							(this.ob = Dt),
							(this.pb = Jt),
							(this.qb = si),
							(this.rb = Zt),
							(this.sb = ci),
							(this.tb = ri),
							(this.ub = $i),
							(this.vb = Wt),
							(this.wb = tt),
							(this.xb = at),
							(this.yb = pi),
							(this.zb = Li),
							(this.Ab = Di),
							(this.h = new d.$Zc()),
							(this.j = new d.$Zc()),
							(this.n = new d.$2c()),
							(this.s = this.D(new C.$re())),
							(this.onContextRemoved = this.s.event),
							(this.u = this.D(new C.$re())),
							(this.onContextAdded = this.u.event),
							(this.w = this.D(new C.$re())),
							(this.onShouldShowPreview = this.w.event),
							(this.Wb = []),
							(this.Xb = 60 * 1e3),
							(this.Yb = 10),
							(this.tabIDToQueuedFollowupID = new m.$Jc(1e3)),
							(this.generationIDsWithNoFollowup = new m.$Jc(100)),
							this.P.activate(),
							(this.q = this.D(this.Q.createScoped(this))),
							this.D(
								rt.onDidChangeContext((Gi) => {
									Gi.affectsSome(new Set([N.$sgc.key])) &&
										this.Y.setChatData("displayTabs", this.gb.historyVisible());
								}),
							),
							this.Y.setChatData("displayTabs", this.gb.historyVisible()),
							this.D(
								Re.onDidActiveEditorChange(() => {
									this.Y.setChatData(
										"editorContext",
										this.getChatEditorContext(),
									);
								}),
							),
							this.D(
								lt.addInsertErrorIntoChatCallback((Gi) => {
									(async () => {
										await this.show(),
											await this.focus(),
											this.insertErrorIntoChat(Gi);
									})().catch((qi) => console.error(qi));
								}),
							),
							this.D(
								lt.addInsertExplainSymbolIntoChatCallback((Gi) =>
									this.insertExplainSymbolIntoChat(Gi),
								),
							),
							this.D(
								lt.addInsertIntoChatCallback((Gi) => this.insertIntoChat(Gi)),
							),
							this.Sb();
						const Ui = "workbench.sideBar.location",
							Wi = this.pb.getValue(Ui);
						this.Q.setNonPersistentStorage(
							"reactivePrimaryBarLocation",
							Wi === "left" ? "left" : "right",
						),
							this.D(
								this.pb.onDidChangeConfiguration((Gi) => {
									if (Gi.affectsConfiguration(Ui)) {
										const qi = this.pb.getValue(Ui);
										this.Q.setNonPersistentStorage(
											"reactivePrimaryBarLocation",
											qi === "left" ? "left" : "right",
										);
									}
									if (Gi.affectsConfiguration($e.$nW)) {
										const qi = this.pb.getValue($e.$nW);
										this.Jb({ useWeb: qi });
									}
								}),
							),
							this.D(
								this.db.onDidActiveEditorChange((Gi) => {
									const qi = this.Bb,
										Oi = qi.lastFocusedBubbleId
											? this.Gb(qi.tabId, qi.lastFocusedBubbleId)
											: qi.bubbles[qi.bubbles.length - 1];
									Oi.type === "user" &&
										this.refreshReactiveContextItem(qi.tabId, Oi.id);
								}),
							),
							this.D(
								this.u.event((Gi) => {
									this.handleUserDidChangeContext(Gi.tabId, Gi.bubbleId);
								}),
							),
							this.D(
								this.s.event((Gi) => {
									this.handleUserDidChangeContext(Gi.tabId, Gi.bubbleId);
								}),
							),
							this.removeNonExistentNotepads(this.Bb.tabId, this.Ib.id),
							this.D(
								Ee.$TX.registerKeybindingRule({
									id: "aichat.newChat",
									primary: Te.KeyMod.CtrlCmd | Te.KeyCode.KeyN,
									when: f.$Kj.equals(
										"focusedView",
										N.AIChatConstants.CHAT_VIEW_ID,
									),
									weight: Ee.KeybindingWeight.CursorMaxPriority,
								}),
							),
							this.D(
								p.$fk.registerCommand("aichat.newChat", () => {
									this.newChat({ autofocus: !0 });
								}),
							);
					}
					get Bb() {
						if (!this.Y.selectedTab)
							throw new Error("[aichat] No current tab available");
						return this.Y.selectedTab;
					}
					async getSortedCandidateFilesForBubble(De, Re) {
						const je = this.ub.getRecentlyViewedFiles(Ie.$h0b),
							Ve = await this.getGitGraphFileSuggestionsForBubble(
								De,
								Re,
								Ie.$j0b,
							),
							Ze = await this.ob.onlyLocalProvider?.runCommand(
								T.EditHistoryActions.CompileGlobalDiffTrajectories,
								{},
							);
						if (!Ve)
							return je.map((lt) => ({ uri: r.URI.revive(lt.uri), score: 1 }));
						let et = await this.makeChatRequestParams({
							tabID: De,
							bubbleID: Re,
							chatType: "chat",
						});
						const rt = et?.generationMetadata?.currentFile,
							ft = et?.conversationHistory,
							bt = this.Gb(De, Re),
							nt =
								(bt.text === void 0 || bt.text.trim().length === 0) &&
								this.Bb.bubbles.length === 1;
						return await (0, Ie.$l0b)(
							Ze,
							Ve,
							je,
							[],
							nt,
							rt,
							ft,
							await this.G.aiClient(),
							this.$,
							this.Ab,
						);
					}
					Cb(De, Re) {
						return (this.Gb(De, Re).text?.trim() ?? "").length === 0;
					}
					Db(De) {
						this.Y.updateSelectedTab(De);
					}
					Eb(De, Re) {
						this.Y.updateTabData(De, Re);
					}
					Fb(De) {
						const Re = this.Y.getTabData(De);
						if (!Re) {
							console.error("[aichat] getTab called for non-existent tab", De);
							return;
						}
						return Re;
					}
					Gb(De, Re) {
						const je = this.Y.getBubbleData(De, Re);
						if (!je)
							throw new Error(
								"[aichat] getBubble called for non-existent bubble",
							);
						return je;
					}
					Hb(De, Re, je) {
						this.Y.updateBubbleData(De, Re, je);
					}
					get Ib() {
						if (!this.Y.lastFocusedBubble)
							throw new Error("[aichat] No last focused bubble available");
						return this.Y.lastFocusedBubble;
					}
					Jb(De) {
						this.Y.updateLastFocusedBubble(De);
					}
					get Kb() {
						if (!this.Y.selectedBubble)
							throw new Error("[aichat] No current bubble available");
						return this.Y.selectedBubble;
					}
					Lb(De) {
						this.Y.updateSelectedBubble(De);
					}
					get Mb() {
						if (!this.Y.editingBubble)
							throw new Error("[aichat] No editing bubble available");
						return this.Y.editingBubble;
					}
					Nb(De) {
						this.Y.updateEditingBubble(De);
					}
					createUserBubble({
						tabId: De,
						text: Re,
						followup: je,
						richText: Ve,
					}) {
						const Ze = (0, xe.createUserBubble)({
							text: Re,
							followup: je,
							richText: Ve,
							configurationService: this.pb,
						});
						return (
							setTimeout(() => {
								this.refreshReactiveContextItem(De, Ze.id);
							}),
							Ze
						);
					}
					get Ob() {
						return this.pb.getValue($e.$oW);
					}
					resetCurrentTab() {
						this.cancelGeneration({ tabID: this.Bb.tabId });
						const De = this.Bb.tabId || (0, u.$9g)(),
							Re = this.createUserBubble({ tabId: De }),
							je = {
								tabId: De,
								chatTitle: "",
								bubbles: [Re],
								lastSendTime: Date.now(),
								tabState: se.TabState.chat,
								longContextModeEnabled:
									this.Q.applicationUserPersistentStorage.isLongContextMode ===
										!0 &&
									this.Q.applicationUserPersistentStorage
										.longContextFlagEnabled2 === !0,
								interpreterData: void 0,
								lastFocusedBubbleId: Re.id,
								noReactiveContext: !1,
							};
						console.log("[aichat] new state", je), this.Db(je);
					}
					async Pb(De, Re, je) {
						const Ve = je.filter(
								(rt) =>
									rt.scheme !== Ce.Schemas.notepad &&
									rt.scheme !== Ce.Schemas.vscodeTerminal,
							),
							Ze = je.filter((rt) => rt.scheme === Ce.Schemas.vscodeTerminal),
							et = je.filter((rt) => rt.scheme === Ce.Schemas.notepad);
						for (const rt of Ve)
							this.addContext({
								tabId: De,
								bubbleId: Re,
								contextType: "fileSelections",
								value: { uri: rt },
							});
						for (const rt of Ze)
							this.addContext({
								tabId: De,
								bubbleId: Re,
								contextType: "terminalFiles",
								value: { uri: rt },
							});
						for (const rt of et)
							this.addContext({
								tabId: De,
								bubbleId: Re,
								contextType: "notepads",
								value: { notepadId: rt.path },
							});
					}
					async referenceOpenEditors(De, Re) {
						if (this.Gb(De, Re).type !== "user") return;
						const Ze = this.cb
							.getGroups(ne.GroupsOrder.MOST_RECENTLY_ACTIVE)
							.map((et) =>
								et.editors
									.filter(
										(rt) =>
											rt.resource &&
											this.Y.isCompatibleScheme(rt.resource.scheme),
									)
									.map((rt) => rt.resource),
							)
							.flat();
						await this.Pb(De, Re, Ze);
					}
					async referenceActiveEditors(De, Re) {
						if (this.Gb(De, Re).type !== "user") return;
						const Ze = this.cb
							.getGroups(ne.GroupsOrder.MOST_RECENTLY_ACTIVE)
							.map((et) => {
								const rt = et.activeEditor?.resource;
								if (rt && this.Y.isCompatibleScheme(rt.scheme)) return rt;
							})
							.filter(Fe.$tg);
						await this.Pb(De, Re, Ze);
					}
					checkIfContextIsPinned(De) {
						const Re = De.type === "file" ? "fileSelections" : "codeSelections";
						return (
							this.Y.chatData.pinnedContexts[Re].findIndex((Ze) =>
								(0, ge.$1gc)(
									Re === "codeSelections" ? "selections" : Re,
									Ze,
									De.data,
								),
							) !== -1
						);
					}
					addPinnedContext(De) {
						const Re = De.type === "file" ? "fileSelections" : "codeSelections";
						this.Y.chatData.pinnedContexts[Re].findIndex((Ze) =>
							(0, ge.$1gc)(
								Re === "codeSelections" ? "selections" : Re,
								Ze,
								De.data,
							),
						) === -1 &&
							this.Y.setChatData("pinnedContexts", (Ze) => ({
								...Ze,
								[Re]: [...Ze[Re], De.data],
							}));
					}
					removePinnedContext(De) {
						const Re = De.type === "file" ? "fileSelections" : "codeSelections",
							Ve = this.Y.chatData.pinnedContexts[Re].findIndex((Ze) =>
								(0, ge.$1gc)(
									Re === "codeSelections" ? "selections" : Re,
									Ze,
									De.data,
								),
							);
						this.Y.setChatData("pinnedContexts", (Ze) => ({
							...Ze,
							[Re]: [...Ze[Re].slice(0, Ve), ...Ze[Re].slice(Ve + 1)],
						}));
					}
					selectLastBubbleAboveInput() {
						const De = this.selectedTab(),
							Re = De.bubbles[De.bubbles.length - 1 - 1];
						return Re
							? (this.Y.setChatData(
									"tabs",
									(je, Ve) => je.tabId === je.tabId,
									"selectedBubbleId",
									Re.id,
								),
								(0, oe.$egc)(Re.id),
								!0)
							: !1;
					}
					async maybeCacheContext() {
						const De = this.selectedTab(),
							Re = De.lastFocusedBubbleId;
						if (Re === void 0) return;
						const je = this.selectedTab().bubbles.find((Ze) => Ze.id === Re),
							Ve = Date.now();
						je === void 0 ||
							je.type !== "user" ||
							((je.contextCacheTimestamp === void 0 ||
								(Ve - je.contextCacheTimestamp > 200 &&
									(je.waitingForContext !== !0 ||
										Ve - je.contextCacheTimestamp > 12e4))) &&
								(await this.Qb(De.tabId, Re)));
					}
					async Qb(De, Re) {
						const je = this.selectedTab().bubbles.find((Ve) => Ve.id === Re);
						if (je?.type === "user") {
							this.Y.setChatData(
								"tabs",
								(Ve, Ze) => Ve.tabId === De,
								"bubbles",
								(Ve, Ze) => Ve.id === Re && Ve.type === "user",
								(Ve) => ({
									...Ve,
									contextCacheTimestamp: Date.now(),
									waitingForContext: !0,
								}),
							);
							try {
								const Ve = je.text ?? "",
									Ze = this.R.parallelSearch(Ve, 32, void 0, {
										contextCacheRequest: !0,
									}),
									[et] = await Promise.all([Ze]),
									rt = et.filter(
										(ft) =>
											ft.codeBlock !== void 0 &&
											ft.codeBlock.contents.length < 2e4,
									);
								this.Y.setChatData(
									"tabs",
									(ft, bt) => ft.tabId === De,
									"bubbles",
									(ft, bt) => ft.id === Re && ft.type === "user",
									(ft) => ({
										...ft,
										cachedResults: rt.map((bt) => bt.codeBlock),
										contextCacheTimestamp: Date.now(),
									}),
								);
							} catch (Ve) {
								console.log("error searching", Ve);
							}
							this.Y.setChatData(
								"tabs",
								(Ve, Ze) => Ve.tabId === De,
								"bubbles",
								(Ve, Ze) => Ve.id === Re && Ve.type === "user",
								(Ve) => ({ ...Ve, waitingForContext: !1 }),
							);
						}
					}
					async maybeCheckLongFilesFit(De) {
						const Re = this.selectedTab(),
							je = Re.lastFocusedBubbleId;
						if (je === void 0) return;
						const Ve = this.selectedTab().bubbles.find((et) => et.id === je),
							Ze = Date.now();
						Ve === void 0 ||
							Ve.type !== "user" ||
							((De ||
								Ve.longFilesFitTimestamp === void 0 ||
								(Ze - Ve.longFilesFitTimestamp > 2e3 &&
									(Ve.waitingForLongFilesFit !== !0 ||
										Ze - Ve.longFilesFitTimestamp > 12e4))) &&
								(await this.Rb(Re.tabId, je)));
					}
					async Rb(De, Re) {
						if (
							this.selectedTab().bubbles.find((Ve) => Ve.id === Re)?.type ===
							"user"
						) {
							this.Y.setChatData(
								"tabs",
								(Ve, Ze) => Ve.tabId === De,
								"bubbles",
								(Ve, Ze) => Ve.id === Re && Ve.type === "user",
								(Ve) => ({
									...Ve,
									longFilesFitTimestamp: Date.now(),
									waitingForLongFilesFit: !0,
								}),
							);
							try {
								const Ve = await this.makeChatRequestParams({
									bubbleID: Re,
									tabID: De,
									chatType: "chat",
								});
								if (Ve !== null) {
									const Ze = await this.G.aiClient(),
										et = await this.G.makeStreamChatRequest(Ve, {
											isForActualRequestSoCanBeSlow: !1,
										}),
										rt =
											et === "wouldBeTooSlow"
												? { didFit: !0 }
												: await Ze.checkLongFilesFit(et, {
														headers: (0, J.$m6b)((0, u.$9g)()),
													});
									this.Y.setChatData(
										"tabs",
										(ft, bt) => ft.tabId === De,
										"bubbles",
										(ft, bt) => ft.id === Re && ft.type === "user",
										(ft) => ({ ...ft, doesNotFit: !rt.didFit }),
									);
								}
							} catch (Ve) {
								console.log("error searching", Ve);
							}
							this.Y.setChatData(
								"tabs",
								(Ve, Ze) => Ve.tabId === De,
								"bubbles",
								(Ve, Ze) => Ve.id === Re && Ve.type === "user",
								(Ve) => ({
									...Ve,
									waitingForLongFilesFit: !1,
									longFilesFitTimestamp: Date.now(),
								}),
							);
						}
					}
					Sb() {
						this.q.onChangeEffect({
							deps: [
								() =>
									this.Q.applicationUserPersistentStorage.aiSettings
										.regularChatModel,
							],
							onChange: ({ deps: De, prevDeps: Re }) => {
								const je =
										this.Y.chatData.selectedTabId ||
										this.Y.chatData.tabs[0].tabId,
									Ve = this.Q.nonPersistentStorage.inprogressAIGenerations.find(
										(Ze) =>
											Ze.metadata !== void 0 &&
											Ze.metadata.type === "chat" &&
											Ze.metadata.tabId === je,
									);
								Ve &&
									Ve.metadata?.type === "chat" &&
									(this.cancelGeneration({ tabID: je }),
									this.submitUnifiedChat({
										bubbleID: Ve.metadata.bubbleId,
										tabID: Ve.metadata.tabId,
										chatType: Ve.metadata.chatType,
									}));
							},
						});
					}
					pauseGeneration() {
						this.L.publicLog2("ai/chat/pause"),
							this.cancelGeneration({
								tabID:
									this.Y.chatData.selectedTabId ||
									this.Y.chatData.tabs[0].tabId,
							});
					}
					async getEditorCode(De, Re) {
						return await (0, O.$Yfc)(this.G, this.X, De, Re);
					}
					async getTerminalText(De) {
						return await (0, O.$Zfc)(this.C, this.X, !1, De);
					}
					submitChat(De) {
						if (
							this.Q.applicationUserPersistentStorage.checklistState
								?.doneCommandL !== !0
						) {
							const Re = this.Q.applicationUserPersistentStorage.checklistState;
							this.Q.setApplicationUserPersistentStorage(
								"checklistState",
								(je) => ({ ...(je ?? {}), doneCommandL: !0 }),
							);
						}
						return this.submitUnifiedChat({ ...De, chatType: "chat" });
					}
					async submitContextChat(De) {
						if (
							this.Q.applicationUserPersistentStorage.checklistState
								?.doneCommandEnter !== !0
						) {
							const Re = this.Q.applicationUserPersistentStorage.checklistState;
							this.Q.setApplicationUserPersistentStorage(
								"checklistState",
								(je) => ({ ...(je ?? {}), doneCommandEnter: !0 }),
							);
						}
						return await this.submitUnifiedChat({ ...De, chatType: "context" });
					}
					getAiBubbleFromUserBubble({ tabId: De, bubbleId: Re }) {
						const je = this.Y.chatData.tabs.find((et) => et.tabId === De);
						if (je === void 0) return;
						const Ve = je.bubbles.findIndex((et) => et.id === Re);
						if (Ve === -1) return;
						const Ze = je.bubbles[Ve + 1];
						if (Ze !== void 0 && Ze.type === "ai") return Ze;
					}
					async makeChatRequestParams({
						bubbleID: De,
						tabID: Re,
						aiBubbleID: je,
						overrideModelDetails: Ve,
						chatType: Ze,
						removeAllContext: et,
						shouldIncludeCurrentFile: rt,
						useAdvancedContext: ft,
						useDeepContext: bt,
						enforceUpUntil: nt,
						useWeb: lt,
						isEval: ct,
						shouldCache: gt,
					}) {
						const ht = this.Y.chatData.tabs
							.find((Mt) => Mt.tabId === Re)
							?.bubbles.find((Mt) => Mt.id === De && Mt.type === "user");
						ht?.usesCodebase === !0 &&
							((Ze = "context"),
							ht?.advancedCodebaseContextOptions !== void 0 && (ft = !0));
						const Rt = (0, u.$9g)(),
							Nt = this.Y.chatData.tabs.find((Mt) => Mt.tabId === Re);
						if (Nt === void 0)
							return console.error(`Tab ${Re} does not exist`), null;
						const jt =
								Ve ||
								this.G.getModelDetails({
									longContextModeEnabled: Nt.longContextModeEnabled,
									specificModelField: "regular-chat",
								}),
							ti = await this.Y.getConversationHistory({
								tab: Nt,
								...(nt === !0 ? { upUntil: De } : {}),
							}),
							kt =
								Nt.summary !== void 0 &&
								Nt.bubbles.length + 1 >= Nt.summary.bubblesWhenSubmitted,
							hi = !0,
							Kt = [],
							di = hi && lt ? "full_search" : void 0,
							Ye = Nt.longContextModeEnabled
								? await this.G.getEffectiveTokenLimit(jt)
								: void 0;
						let ze,
							It = this.Y.chatData.pinnedContexts?.fileSelections ?? [];
						const xt = [...(ht?.fileSelections ?? []), ...It]?.find(
								(Mt) => Mt.isCurrentFile === !0,
							),
							Vt = await this.G.getCurrentFileInfo();
						xt &&
							Vt &&
							this.$.asRelativePath(r.URI.revive(xt.uri)) ===
								Vt.relativeWorkspacePath &&
							(ze = await this.G.getCurrentFileInfo());
						const Bt = {
							codeBlocks: ht?.cachedResults ?? [],
							quotes: ht?.quotes ?? [],
							commitNotes: Kt,
							externalLinks: ht?.externalLinks ?? [],
							currentFile: ze,
						};
						return {
							conversationHistory: ti,
							generationMetadata: {
								type: "chat",
								tabId: Re,
								bubbleId: De,
								aiBubbleId: je,
								chatType: Ze,
								summaryText: kt ? Nt.summary?.text : void 0,
								summaryUpUntilIndex: kt ? Nt.summary?.upUntilIndex : void 0,
								isBash: !1,
								longContextModeEnabled: Nt.longContextModeEnabled,
								tokenLimit: Ye,
								isEval: ct,
								...(et === !0 ? {} : Bt),
								shouldCache: gt,
							},
							generationUUID: Rt,
							options: {
								overrideModelDetails: jt,
								removeAllContext: et,
								rerun: () => {
									this.submitUnifiedChat({
										bubbleID: De,
										tabID: Re,
										overrideModelDetails: Ve,
										chatType: Ze,
										removeAllContext: et,
										shouldIncludeCurrentFile: rt,
									});
								},
								useHyde: !0,
								shouldIncludeCurrentFile: rt ?? !1,
								allowLongFileScan: ht?.allowLongFileScan ?? !1,
								useWeb: di,
							},
						};
					}
					Tb(De, Re) {
						this.Y.setChatData(
							"tabs",
							(je, Ve) => je.tabId === De,
							"bubbles",
							(je, Ve) => je.id === Re && je.type === "user",
							"fileSelections",
							(je) => je.filter((Ve) => !Ve.isCurrentFile),
						);
					}
					async handleUserDidType(De, Re) {
						if (!this.Q.applicationUserPersistentStorage.cacheChatPrompts)
							return;
						(async () => {
							try {
								await Promise.resolve(),
									await this.wb.maybeRefreshFeatureStatus("cacheChatPrompts");
								const nt = this.wb.getCachedFeatureStatus("cacheChatPrompts");
								nt !==
									this.Q.applicationUserPersistentStorage.cacheChatPrompts &&
									this.Q.setApplicationUserPersistentStorage(
										"cacheChatPrompts",
										nt,
									);
							} catch {}
						})(),
							this.Ub(De, Re);
						const je = this.Fb(De);
						if (!je) return;
						const Ve = this.Gb(De, Re);
						if (!Ve || Ve.type !== "user") return;
						let Ze = Ve.cachingStatus ?? {
							promptIsCached: !1,
							numCharsTypedSincePromptChanged: 0,
						};
						const et = je.bubbles.findIndex((nt) => nt.id === Re) > 0;
						(async () => {
							await this.wb.maybeRefreshConfig("chatKeystrokesBeforeCaching"),
								await this.wb.maybeRefreshConfig(
									"chatKeystrokesBeforeCachingFollowups",
								);
						})().catch(() => {});
						const rt =
								this.wb.getCachedConfig("chatKeystrokesBeforeCaching") ?? 25,
							ft =
								this.wb.getCachedConfig(
									"chatKeystrokesBeforeCachingFollowups",
								) ?? 25,
							bt = et ? ft : rt;
						Ze.promptIsCached ||
							(Ze.numCharsTypedSincePromptChanged > bt
								? (this.Zb(De, Re, Ve.text ?? "", { richText: Ve.richText }),
									this.Y.setChatData(
										"tabs",
										(nt) => nt.tabId === De,
										"bubbles",
										(nt, lt) => nt.id === Re && nt.type === "user",
										"cachingStatus",
										{
											promptIsCached: !0,
											promptLastCachedAt: Date.now(),
											contextStringWhenCached: this.Vb(De, Re),
										},
									))
								: this.Y.setChatData(
										"tabs",
										(nt) => nt.tabId === De,
										"bubbles",
										(nt, lt) => nt.id === Re && nt.type === "user",
										"cachingStatus",
										{
											...Ze,
											numCharsTypedSincePromptChanged:
												Ze.numCharsTypedSincePromptChanged + 1,
										},
									));
					}
					handleUserDidChangeContext(De, Re) {
						this.Q.applicationUserPersistentStorage.cacheChatPrompts &&
							this.Ub(De, Re);
					}
					Ub(De, Re) {
						try {
							if (!this.Fb(De)) return;
							const Ve = this.Gb(De, Re);
							if (!Ve || Ve.type !== "user") return;
							const Ze = 5 * 60 * 1e3,
								{ cachingStatus: et } = Ve;
							et?.promptIsCached === !0 &&
								(Date.now() - et.promptLastCachedAt > Ze ||
									et.contextStringWhenCached !== this.Vb(De, Re)) &&
								this.Y.setChatData(
									"tabs",
									(rt) => rt.tabId === De,
									"bubbles",
									(rt, ft) => rt.id === Re && rt.type === "user",
									"cachingStatus",
									{ promptIsCached: !1, numCharsTypedSincePromptChanged: 0 },
								);
						} catch {}
					}
					Vb(De, Re) {
						try {
							const je = this.Gb(De, Re);
							if (!je || je.type !== "user") return "";
							const Ve = {};
							for (const Ze of ge.$Wgc)
								if ((0, ge.$Ygc)(Ze)) {
									const et = je[Ze];
									et && et.length > 0 && (Ve[Ze] = et.length);
								} else je[Ze] !== void 0 && (Ve[Ze] = !0);
							return (
								(Ve.files = je.fileSelections?.map((Ze) => ({
									uri: Ze.uri.toString(),
									isCurrentFile: Ze.isCurrentFile,
								}))),
								(Ve.folders = je.folderSelections?.map((Ze) => ({
									uri: Ze.relativePath,
								}))),
								JSON.stringify(Ve)
							);
						} catch {
							return "(error)";
						}
					}
					async Zb(De, Re, je, Ve) {
						this.Q.applicationUserPersistentStorage.cacheChatPrompts &&
							(this.Wb.push(Date.now()),
							(this.Wb = this.Wb.filter((Ze) => Date.now() - Ze < this.Xb)),
							this.yb.assert(
								this.Wb.length <= this.Yb,
								"Too many recent warm cache requests! Please post in #bug-reports!",
							),
							!(this.Wb.length > this.Yb) &&
								(await this.$b({
									bubbleID: Re,
									tabID: De,
									chatType: "chat",
									removeAllContext: !1,
									shouldIncludeCurrentFile: !0,
									useAdvancedContext: !1,
									useDeepContext: !1,
									overrideUseWeb: !1,
								})));
					}
					async $b(De) {
						if (De.overrideUseWeb ? De.overrideUseWeb : !1) return;
						const je = this.Fb(De.tabID);
						if (!je) return;
						this.Z.addPersistentChatMetadataIfNotExists(De.bubbleID, De.tabID);
						let Ve = [];
						for (const rt of je.bubbles)
							if (rt.type === se.BubbleType.USER_CHAT) {
								const ft = rt.selectedDocs;
								ft !== void 0 && Ve.push(...ft);
							}
						Ve = Ve.filter(
							(rt, ft, bt) =>
								rt.docId !== void 0 &&
								ft === bt.findIndex((nt) => nt.docId === rt.docId),
						);
						const Ze = this.getFoldersInBubblesUpTo(De.tabID, De.bubbleID);
						this.Q.setWorkspaceUserPersistentStorage(
							"persistentChatMetadata",
							(rt) => rt.bubbleId === De.bubbleID && rt.tabId === De.tabID,
							(rt) => {
								const ft = rt.injectedContext ?? {},
									bt = rt.predictedContext ?? {};
								return {
									...rt,
									injectedContext: { ...ft, usedDocs: Ve, usedFolders: Ze },
									predictedContext: { ...bt, usedDocs: Ve, usedFolders: Ze },
								};
							},
						),
							this.Q.setWorkspaceUserPersistentStorage(
								"persistentChatMetadata",
								(rt) => rt.bubbleId === De.bubbleID && rt.tabId === De.tabID,
								(rt) => {
									const ft = rt.injectedContext ?? {};
									return { ...rt, webCitations: [] };
								},
							);
						const et = await this.makeChatRequestParams({
							...De,
							aiBubbleID: void 0,
							useWeb: !1,
							isEval: !1,
							shouldCache: !0,
							enforceUpUntil: !0,
						});
						et !== null &&
							(await this.G.warmChatCache(
								et.conversationHistory,
								et.generationMetadata,
								et.generationUUID,
								et.options,
							));
					}
					async submitUnifiedChat(De) {
						let {
							bubbleID: Re,
							tabID: je,
							overrideModelDetails: Ve,
							chatType: Ze,
							removeAllContext: et,
							shouldIncludeCurrentFile: rt,
							useAdvancedContext: ft,
							dontPassContextToFollowUp: bt,
						} = De;
						et === !0 && this.Tb(je, Re);
						const nt = this.Fb(je),
							lt = nt?.bubbles.findIndex(
								(ii) => ii.id === Re && ii.type === "user",
							),
							ct = lt !== -1 && lt !== void 0 ? nt?.bubbles[lt] : void 0;
						if (nt === void 0 || ct === void 0 || lt === void 0) {
							console.error(`Tab ${je} or user bubble ${Re} does not exist`);
							return;
						}
						let gt = nt.bubbles[lt - 1],
							ht = nt.bubbles[lt - 2];
						if (
							(gt?.type === "ai" &&
								gt.text === "" &&
								ht?.type === "user" &&
								this.Y.setChatData(
									"tabs",
									(ii, Dt) => ii.tabId === je,
									"bubbles",
									(ii) => ii.filter((Dt, Jt) => Jt !== lt - 1 && Jt !== lt - 2),
								),
							De.chatType === "intentChat")
						)
							return (
								console.warn("Intent chat is deprecated. Use 'chat' instead"),
								this.submitUnifiedChat({ ...De, chatType: "chat" })
							);
						if (
							this.getFoldersInBubblesUpTo(je, Re).length > 0 &&
							Ze === "chat"
						)
							return this.submitUnifiedChat({ ...De, chatType: "context" });
						if (ct.usesCodebase && Ze === "chat")
							return this.submitUnifiedChat({ ...De, chatType: "context" });
						if (nt.debuggerData !== void 0 && Ze !== "debugger")
							return this.submitUnifiedChat({ ...De, chatType: "debugger" });
						this.cancelGeneration({ tabID: je });
						const Nt = !!nt.evalInfo;
						this.Y.setChatData(
							"tabs",
							(ii, Dt) => ii.tabId === je,
							"bubbles",
							(ii, Dt) => ii.id === Re && ii.type === "user",
							(ii) => ({
								...ii,
								indexingStatus: void 0,
								errorDetails: void 0,
								codebaseResults: [],
							}),
						);
						const jt = this.Q.applicationUserPersistentStorage.docsNudge;
						this.Q.setApplicationUserPersistentStorage("docsNudge", {
							upUntilCounter: (jt?.upUntilCounter ?? 0) + 1,
							shownNudges: jt?.shownNudges ?? 0,
						}),
							this.qb?.markNowAsLastChatMessage();
						const ti = null;
						this.Z.addChatMetadata(Re, je);
						const kt = ct.useWeb ?? !1;
						let hi = !1;
						typeof ct.usesCodebase == "object" && ((ft = !0), (hi = !0)),
							!ct.fileSelections?.some((ii) => ii.isCurrentFile) &&
								!ct.terminalFiles?.some((ii) => ii.isCurrentFile) &&
								!ct.notepads?.some((ii) => ii.isCurrentNotepad) &&
								this.Eb(je, { noReactiveContext: !0 });
						const Kt = this.D(new C.$re()),
							di = Kt.event(() => {
								const ii = this.Y.chatData.tabs.find((Dt) => Dt.tabId === je);
								ii &&
									ii.bubbles.length > 2 &&
									(!ii?.hasNamedTab || lt === 0) &&
									(async () => {
										try {
											const Jt = await this.makeChatRequestParams({
													bubbleID: Re,
													tabID: je,
													chatType: "chat",
												}),
												Zt = await (await this.G.aiClient()).nameTab({
													messages: Jt?.conversationHistory ?? [],
												});
											if (Zt.name)
												this.Y.setChatData(
													"tabs",
													(ci, ri) => ci.tabId === je,
													"chatTitle",
													Zt.name,
												);
											else {
												const ci = ii.bubbles[0];
												ci &&
													ci.type === "user" &&
													this.Y.setChatData(
														"tabs",
														(ri, $i) => ri.tabId === je,
														"chatTitle",
														(ci.richText ?? ci.text)
															?.trim()
															.split(`
`)[0]
															.split(" ")
															.slice(0, 10)
															.join(" ") ?? "",
													);
											}
											this.Y.setChatData(
												"tabs",
												(ci, ri) => ci.tabId === je,
												"hasNamedTab",
												!0,
											);
										} catch (Jt) {
											console.error("Error renaming tab", Jt);
										}
									})(),
									di.dispose();
							});
						let Ye = (...ii) => this.G.streamChat(ii[0], ii[1], ii[2], ii[3]);
						if (Ze === "chat")
							this.Q.setApplicationUserPersistentStorage(
								"newUserData",
								"toolUsageCount",
								"plainChat",
								(ii) => (ii === "legacy" ? "legacy" : ii + 1),
							);
						else if (Ze === "edit" && ti !== null)
							Ye = (...ii) =>
								this.fb.performChatEditFinetunedModel({
									privateFtModel: ti,
									conversationHistory: ii[0],
									generationMetadata: ii[1],
									generationUUID: ii[2],
									options: ii[3],
								});
						else if (Ze === "edit" && ti === null)
							Ye = (...ii) =>
								this.fb.performAndYieldChatEdit({
									conversationHistory: ii[0],
									generationMetadata: ii[1],
									generationUUID: ii[2],
									options: ii[3],
								});
						else if (Ze === "multiFileEdit" && ti === null) {
							let ii = [];
							for (let si = nt.bubbles.length - 1; si >= 0; si--)
								if (nt.bubbles[si].type === se.BubbleType.AI_CHAT) {
									ii = nt.bubbles[si].referencedCodeBlockURIs || [];
									break;
								}
							let Dt = [];
							for (
								let si = nt.bubbles.length - 1;
								si >= 0 &&
								!(
									nt.bubbles[si].type === se.BubbleType.USER_CHAT &&
									((Dt =
										nt.bubbles[si].fileSelections?.map((Zt) =>
											r.URI.from(Zt.uri),
										) || []),
									Dt.length > 0)
								);
								si--
							);
							let Jt = [];
							ii.length > 0 ? (Jt = ii) : (Jt = Dt),
								(Ye = (...si) =>
									this.fb.performMultiFileFastEdit({
										aiReferencedCodeBlockURIs: Jt,
										conversationHistory: si[0],
										generationUUID: si[2],
									}));
						} else if (Ze === "followUp" && ti === null)
							Ye = (...ii) =>
								this.fb.performFollowUpOnChanges({
									conversationHistory: ii[0],
									generationMetadata: ii[1],
									generationUUID: ii[2],
								});
						else {
							let ii = !1;
							try {
								ii = this.R.isIndexedMainLocalRepository();
							} catch {
								console.log("No repos found");
							}
							if (Ze === "context") {
								this.Q.setApplicationUserPersistentStorage(
									"newUserData",
									"toolUsageCount",
									"contextChat",
									(si) => (si === "legacy" ? "legacy" : si + 1),
								);
								const Dt = this.Y.chatData.tabs
										.find((si) => si.tabId === je)
										?.bubbles.find((si) => si.id === Re && si.type === "user"),
									Jt =
										Dt?.dropdownAdvancedCodebaseSearchBehavior === "embeddings";
								if (ft)
									Ye = (...si) =>
										this.eb.taskStreamChatContext(
											...si,
											Dt?.advancedCodebaseContextOptions ?? ge.$Ugc,
										);
								else if (!ii || Jt) {
									const si = ii ? T.SearchType.vector : T.SearchType.keyword;
									Ye = (...Zt) => this.G.streamChatContext(...Zt, si);
								} else {
									const si =
										Dt?.advancedCodebaseContextOptions ??
										Dt?.dropdownAdvancedCodebaseContextOptions;
									Ye = (...Zt) => this.eb.taskStreamChatContext(...Zt, si);
								}
							} else throw new Error("Invalid chat type");
						}
						const ze = nt.bubbles.findIndex((ii) => ii.id === Re);
						if (ze === -1) {
							console.error(`Bubble ${Re} does not exist`);
							return;
						}
						const Xe = (0, u.$9g)();
						this.tabIDToQueuedFollowupID.set(je, Xe);
						let It = "",
							Lt = {
								type: se.BubbleType.AI_CHAT,
								messageType: w.PureMessage_MessageType.ASSISTANT,
								id: (0, u.$9g)(),
								text: "",
								aiType: "chat",
								modelType: this.W.getRegularChatModel(),
								doThisForMeRequest: void 0,
								suggestedDiffs: [],
								codeBlocks: [],
							},
							xt = Re;
						nt.bubbles[ze].type === "ai"
							? (this.Y.setChatData(
									"tabs",
									(ii, Dt) => ii.tabId === je,
									"bubbles",
									(ii) => nt.bubbles.slice(0, ze + 1),
								),
								(Lt = nt.bubbles[ze]),
								(It = Lt.text),
								(xt = nt.bubbles[ze - 1].id))
							: (this.Y.setChatData(
									"tabs",
									(ii, Dt) => ii.tabId === je,
									"bubbles",
									(ii) => nt.bubbles.slice(0, ze + 1).concat(Lt),
								),
								(It = nt.bubbles[ze].text ?? ""));
						const Vt =
							Ve ||
							this.G.getModelDetails({
								longContextModeEnabled: nt.longContextModeEnabled,
								specificModelField: "regular-chat",
							});
						this.O.preStreamChatCheck(
							Vt,
							(ii) => {
								this.cancelGeneration({ tabID: je }),
									this.submitUnifiedChat({
										bubbleID: Re,
										tabID: je,
										overrideModelDetails: ii,
										chatType: Ze,
										removeAllContext: et,
										shouldIncludeCurrentFile: rt,
									});
							},
							Kt,
						);
						let Bt = [];
						for (const ii of nt.bubbles)
							if (ii.type === se.BubbleType.USER_CHAT) {
								const Dt = ii.selectedDocs;
								Dt !== void 0 && Bt.push(...Dt);
							}
						Bt = Bt.filter(
							(ii, Dt, Jt) =>
								ii.docId !== void 0 &&
								Dt === Jt.findIndex((si) => si.docId === ii.docId),
						);
						const Gt = this.getFoldersInBubblesUpTo(je, xt);
						this.Q.setWorkspaceUserPersistentStorage(
							"persistentChatMetadata",
							(ii) => ii.bubbleId === Re && ii.tabId === je,
							(ii) => {
								const Dt = ii.injectedContext ?? {},
									Jt = ii.predictedContext ?? {};
								return {
									...ii,
									injectedContext: { ...Dt, usedDocs: Bt, usedFolders: Gt },
									predictedContext: { ...Jt, usedDocs: Bt, usedFolders: Gt },
								};
							},
						),
							this.Q.setWorkspaceUserPersistentStorage(
								"persistentChatMetadata",
								(ii) => ii.bubbleId === Re && ii.tabId === je,
								(ii) => {
									const Dt = ii.injectedContext ?? {};
									return { ...ii, webCitations: [] };
								},
							);
						let Mt = !1,
							Ut = !1,
							ei = await this.makeChatRequestParams({
								...De,
								aiBubbleID: Lt.id,
								useWeb: De.overrideUseWeb ? De.overrideUseWeb : kt,
								isEval: Nt,
							});
						if (ei === null) return;
						const mi = ei.generationUUID;
						this.Q.setNonPersistentStorage("inprogressAIGenerations", (ii) => [
							...ii,
							{
								generationUUID: mi,
								metadata: ei?.generationMetadata ?? { type: void 0 },
								queuePositionResponse: void 0,
								aiBubbleId: Lt.id,
								bubbleId: Re,
							},
						]),
							this.rb.linkGenerationToTab(mi, je),
							await this.bc({
								followupID: Xe,
								tabID: je,
								aiBubbleId: Lt.id,
								generationUUID: mi,
								originatingBubbleId: Re,
								textOfOriginatingBubble: It,
								cancelled: Ut,
								dontPassContext: bt,
							});
						try {
							let ii = !0;
							for (; ii === !0; ) {
								if (((ii = !1), ei === null)) return;
								const Dt = await Ye(
									ei.conversationHistory,
									ei.generationMetadata,
									ei.generationUUID,
									ei.options,
								);
								if (
									!this.Q.nonPersistentStorage.inprogressAIGenerations.some(
										(si) => si.generationUUID === mi,
									)
								)
									throw new Error("[aichat] generation cancelled");
								if (Dt === void 0) {
									this.ac(mi);
									return;
								}
								for await (const si of Dt)
									this.cc({ bubbleID: Lt.id, tabID: je, text: si });
							}
						} catch (ii) {
							Ut = !0;
							const Dt = this.Y.chatData.tabs.find((Jt) => Jt.tabId === je);
							if (Dt !== void 0) {
								const Jt = this.M.shouldShowImmediateErrorMessage(ii);
								if (Jt) {
									const Zt = (0, X.$X6b)(ii);
									this.Y.setChatData(
										"tabs",
										(ci, ri) => ci.tabId === je,
										"bubbles",
										(ci) => ci.id === xt && ci.type === "user",
										"errorDetails",
										{
											generationUUID: mi,
											error: Zt,
											message: ii?.rawMessage,
											rerun: ei?.options?.rerun,
										},
									);
								}
								const si = Dt.bubbles.findIndex((Zt) => Zt.id === Lt.id);
								if (si !== -1) {
									const Zt = Dt.bubbles[si],
										ri = Dt.bubbles[si + 1]?.id,
										$i = this.Cb(je, ri);
									let Wt = !1;
									Zt.text.length === 0 &&
										(Jt
											? this.Y.setChatData(
													"tabs",
													(at, pi) => at.tabId === je,
													"bubbles",
													(at) => at.filter((pi) => pi.id !== Zt.id),
												)
											: $i
												? (this.Y.setChatData(
														"tabs",
														(at, pi) => at.tabId === je,
														"bubbles",
														(at) => at.slice(0, si),
													),
													this.Y.setChatData(
														"tabs",
														(at, pi) => at.tabId === je,
														{ lastFocusedBubbleId: xt },
													))
												: (this.Y.setChatData(
														"tabs",
														(at, pi) => at.tabId === je,
														"bubbles",
														(at) =>
															at.filter(
																(pi) => pi.id !== Zt.id && pi.id !== Re,
															),
													),
													(Wt = !0)),
										(Mt = !0));
									const tt = Wt ? void 0 : this.Gb(je, Re);
									Jt || Zt.text.length !== 0
										? (Jt || $i) && tt !== void 0
											? tt.id === Dt.editingBubbleId
												? this.Y.chatData.inputBoxDelegateMap[tt.id]?.focus()
												: this.Y.setChatData(
														"tabs",
														(at) => at.tabId === je,
														"editingBubbleId",
														tt.id,
													)
											: this.Y.chatData.inputBoxDelegate.focus()
										: this.Y.chatData.inputBoxDelegate.focus();
								}
							}
						} finally {
							this.Q.setNonPersistentStorage("inprogressAIGenerations", (Dt) =>
								Dt.filter((Jt) => Jt.generationUUID !== mi),
							),
								this.lb.recordChatEvent({
									requestId: mi,
									eventType: {
										case: "endOfUninterruptedGeneration",
										value: {},
									},
								});
							try {
								Kt.fire();
							} finally {
								Kt.dispose();
							}
							Mt ||
								(Nt &&
									(this.Y.setChatData(
										"tabs",
										(Dt, Jt) => Dt.tabId === je && "evalInfo" in Dt,
										"bubbles",
										(Dt) =>
											Dt.map((Jt) =>
												Jt.id === Lt.id ? { ...Jt, requestId: mi } : Jt,
											),
									),
									this.Y.setChatData(
										"tabs",
										(Dt, Jt) =>
											Dt.tabId === je &&
											"evalInfo" in Dt &&
											Dt.evalInfo !== void 0,
										"evalInfo",
										(Dt) => Dt && { ...Dt, requestId: mi },
									))),
								this.Y.persistSelectedChat(!0);
							const ii = this.Y.chatData.tabs.find((Dt) => Dt.tabId === je);
							ii !== void 0 &&
								ii.bubbles.length > 3 &&
								(ii.summary === void 0 ||
									ii.summary.bubblesWhenSubmitted !== ii.bubbles.length) &&
								ei !== null &&
								this.G.getChatSummary({ ...ei, generationUUID: (0, u.$9g)() })
									.then((Dt) => {
										Dt.didSummarize &&
											this.Y.setChatData(
												"tabs",
												(Jt, si) => Jt.tabId === je,
												"summary",
												{
													text: Dt.summary,
													upUntilIndex: Dt.upUntilIndex,
													bubblesWhenSubmitted: ii.bubbles.length,
												},
											);
									})
									.catch((Dt) => {
										console.error(Dt);
									});
						}
					}
					async submitTutor({
						bubbleID: De,
						tabID: Re,
						overrideModelDetails: je,
					}) {
						const Ve = this.Y.chatData.tabs.find((Rt) => Rt.tabId === Re);
						if (
							(this.Y.setChatData(
								"tabs",
								(Rt, Nt) => Rt.tabId === Re,
								"isAlwaysTutor",
								!0,
							),
							Ve === void 0)
						) {
							console.error(`Tab ${Re} does not exist`);
							return;
						}
						const Ze = Ve.bubbles.findIndex((Rt) => Rt.id === De);
						if (Ze === -1) {
							console.error(`Bubble ${De} does not exist`);
							return;
						}
						const et = (0, u.$9g)();
						this.tabIDToQueuedFollowupID.set(Re, et),
							this.cancelGeneration({ tabID: Re });
						let rt = "",
							ft = {
								type: se.BubbleType.AI_CHAT,
								messageType: w.PureMessage_MessageType.ASSISTANT,
								modelType: this.W.getRegularChatModel(),
								id: (0, u.$9g)(),
								text: "",
								aiType: "chat",
								suggestedDiffs: [],
								doThisForMeRequest: void 0,
								codeBlocks: [],
							};
						Ve.bubbles[Ze].type === "ai"
							? (this.Y.setChatData(
									"tabs",
									(Rt, Nt) => Rt.tabId === Re,
									"bubbles",
									(Rt) => Ve.bubbles.slice(0, Ze + 1),
								),
								(ft = Ve.bubbles[Ze]),
								(rt = ft.text))
							: (this.Y.setChatData(
									"tabs",
									(Rt, Nt) => Rt.tabId === Re,
									"bubbles",
									(Rt) => Ve.bubbles.slice(0, Ze + 1).concat(ft),
								),
								(rt = Ve.bubbles[Ze].text ?? ""));
						const bt = this.D(new C.$re()),
							nt =
								je ||
								this.G.getModelDetails({ specificModelField: "regular-chat" });
						this.O.preStreamChatCheck(
							nt,
							(Rt) => {
								this.cancelGeneration({ tabID: Re }),
									this.submitTutor({
										bubbleID: De,
										tabID: Re,
										overrideModelDetails: Rt,
									});
							},
							bt,
						);
						const lt = await this.Y.getConversationHistory({ tab: Ve }),
							ct = await this.G.streamCursorTutor(
								lt,
								{
									type: "chat",
									tabId: Re,
									bubbleId: De,
									aiBubbleId: ft.id,
									chatType: "chat",
									longContextModeEnabled: !1,
								},
								{
									overrideModelDetails: nt,
									rerun: () => {
										this.submitTutor({
											bubbleID: De,
											tabID: Re,
											overrideModelDetails: nt,
										});
									},
								},
							);
						this.Q.setApplicationUserPersistentStorage(
							"newUserData",
							"toolUsageCount",
							"plainChat",
							(Rt) => (Rt === "legacy" ? "legacy" : Rt + 1),
						);
						let gt = !1,
							ht = !1;
						try {
							for await (const Rt of ct)
								this.cc({ bubbleID: ft.id, tabID: Re, text: Rt });
						} catch {
							ht = !0;
							const Nt = this.Y.chatData.tabs.find((jt) => jt.tabId === Re);
							if (Nt !== void 0) {
								const jt = Nt.bubbles.findIndex((ti) => ti.id === ft.id);
								jt !== -1 &&
									Nt.bubbles[jt].text.length === 0 &&
									(this.Y.setChatData(
										"tabs",
										(kt, hi) => kt.tabId === Re,
										"bubbles",
										(kt) => kt.slice(0, jt),
									),
									(gt = !0));
							}
						} finally {
							bt.fire(),
								bt.dispose(),
								gt ||
									(await this.bc({
										followupID: et,
										tabID: Re,
										aiBubbleId: ft.id,
										originatingBubbleId: De,
										textOfOriginatingBubble: rt,
										cancelled: ht,
									})),
								this.Y.persistSelectedChat(!0);
						}
					}
					ac(De) {
						const Re = this.G.streamingAbortControllers.get(De);
						Re && (Re.abort(), this.G.streamingAbortControllers.delete(De));
					}
					cancelGeneration({ tabID: De }) {
						const Re = this.Q.nonPersistentStorage.inprogressAIGenerations.find(
							(je) => je.metadata.type === "chat" && je.metadata.tabId === De,
						)?.generationUUID;
						Re &&
							(this.ac(Re),
							this.Q.setNonPersistentStorage("inprogressAIGenerations", (je) =>
								je.filter(
									(Ve) =>
										!(
											Ve.metadata !== void 0 &&
											(Ve.metadata.type === "chat" ||
												Ve.metadata.type === "codeInterpreter" ||
												Ve.metadata.type === "interpreterExecution") &&
											Ve.metadata.tabId === De
										),
								),
							));
					}
					isTabGenerating(De) {
						return !this.tabIDToQueuedFollowupID.has(De) ||
							this.Y.chatData.tabs.find((je) => je.tabId === De) === void 0
							? !1
							: !!this.Q.nonPersistentStorage.inprogressAIGenerations.find(
									(je) =>
										je.metadata !== void 0 &&
										je.metadata.type === "chat" &&
										je.metadata.tabId === De,
								);
					}
					getChatEditorContext() {
						return {
							isNotebook: !!(0, U.$eJb)(this.z.activeEditorPane),
							hasNonemptySelection: !1,
						};
					}
					dispose() {
						this.j.dispose(),
							this.h.dispose(),
							this.n.dispose(),
							super.dispose();
					}
					render(De, Re, je) {
						return (0, Z.$jcc)(
							De,
							this.ab,
							{
								paneDelegate: Re,
								chatData: this.Y.chatData,
								chatService: this,
								chatDataService: this.Y,
								setChatData: this.Y.setChatData,
								isEditorWindow: je,
							},
							this.Y.persistSelectedChat,
							() => this.gb.hideChatHistory(),
							() => this.gb.showChatHistory(),
						);
					}
					async newChat(De) {
						this.Y.persistSelectedChat(!0);
						const Re = this.Bb;
						if (!Re) throw new Error("[aichat] No tab found");
						const je = Re.bubbles[0];
						if (!je) throw new Error("[aichat] No bubble found");
						const Ve = De?.onlyCheckText ?? !0,
							Ze =
								(0, xe.doesTabHaveExactlyOneUserBubbleWithNoText)(Re) &&
								!De?.forceNewChat,
							et = (0, oe.$$fc)(je);
						if ((Ve && Ze) || (!Ve && Ze && !et)) {
							this.Y.setChatData(
								"selectedTabId",
								this.Y.chatData.tabs[0].tabId,
							),
								De?.resetCurrentTabIfEmpty && (await this.resetCurrentTab()),
								De?.autofocus && (await this.focus());
							return;
						}
						const { tabId: rt } = this.forceNewChat();
						this.Y.setChatData("selectedTabId", rt),
							De?.autofocus && (await this.focus());
					}
					forceNewChat() {
						const De = (0, u.$9g)(),
							Re = this.createUserBubble({ tabId: De });
						return (
							this.Y.setChatData("tabs", (je) => [
								{
									tabId: De,
									chatTitle: "",
									bubbles: [Re],
									lastSendTime: Date.now(),
									tabState: se.TabState.chat,
									additionalData: void 0,
									longContextModeEnabled:
										this.Q.applicationUserPersistentStorage
											.isLongContextMode === !0 &&
										this.Q.applicationUserPersistentStorage
											.longContextFlagEnabled2 === !0,
									interpreterData: void 0,
									lastFocusedBubbleId: Re.id,
								},
								...je,
							]),
							{ tabId: De, bubbleId: Re.id }
						);
					}
					async toggleChatMode(De) {
						(0, t.batch)(() => {
							const Re = this.Y.getReactiveCurrentChat();
							if (Re === void 0 || Re?.bubbles.length > 1) return;
							const je =
									!Re.longContextModeEnabled && Re.debuggerData === void 0,
								Ve = Re.longContextModeEnabled && Re.debuggerData === void 0,
								Ze = !Re.longContextModeEnabled && Re.debuggerData !== void 0,
								et = je
									? "Normal Chat"
									: Ve
										? "Long Context Chat"
										: Ze
											? "Debugger Mode"
											: "Normal Chat",
								rt =
									this.Q.applicationUserPersistentStorage
										.longContextFlagEnabled2 === !0,
								ft =
									this.Q.applicationUserPersistentStorage
										.debuggerFlagEnabled === !0,
								bt = {
									"Normal Chat": !0,
									"Long Context Chat": rt || Re.longContextModeEnabled,
									"Debugger Mode": ft || Re.debuggerData !== void 0,
								},
								nt = [
									"Normal Chat",
									"Long Context Chat",
									"Debugger Mode",
								].filter((gt) => bt[gt]),
								lt = nt.indexOf(et),
								ct = De ?? nt[(lt + 1) % nt.length];
							ct !== et &&
								(ct === "Long Context Chat"
									? (0, t.batch)(() => {
											this.Y.setChatData(
												"tabs",
												(gt, ht) => gt.tabId === Re?.tabId,
												"interpreterData",
												void 0,
											),
												this.Y.setChatData(
													"tabs",
													(gt, ht) => gt.tabId === Re?.tabId,
													"longContextModeEnabled",
													!0,
												),
												this.Y.setChatData(
													"tabs",
													(gt, ht) => gt.tabId === Re?.tabId,
													"debuggerData",
													void 0,
												);
										})
									: ct === "Debugger Mode"
										? (0, t.batch)(() => {
												this.Y.setChatData(
													"tabs",
													(gt, ht) => gt.tabId === Re?.tabId,
													"interpreterData",
													void 0,
												),
													this.Y.setChatData(
														"tabs",
														(gt, ht) => gt.tabId === Re?.tabId,
														"longContextModeEnabled",
														!1,
													),
													this.Y.setChatData(
														"tabs",
														(gt, ht) => gt.tabId === Re?.tabId,
														"debuggerData",
														{},
													);
											})
										: ct === "Normal Chat" &&
											(0, t.batch)(() => {
												this.Y.setChatData(
													"tabs",
													(gt, ht) => gt.tabId === Re?.tabId,
													"interpreterData",
													void 0,
												),
													this.Y.setChatData(
														"tabs",
														(gt, ht) => gt.tabId === Re?.tabId,
														"longContextModeEnabled",
														!1,
													),
													this.Y.setChatData(
														"tabs",
														(gt, ht) => gt.tabId === Re?.tabId,
														"debuggerData",
														void 0,
													);
											}));
						});
					}
					async newFollowup(De = !0) {
						this.Y.persistSelectedChat(!0);
						const Re =
								this.Y.chatData.selectedTabId ?? this.Y.chatData.tabs[0].tabId,
							je = this.Y.chatData.tabs.find((Ve) => Ve.tabId === Re);
						je.bubbles[je.bubbles.length - 1].type !== "user" &&
							this.Y.setChatData(
								"tabs",
								(Ve, Ze) => Ve.tabId === Re,
								"bubbles",
								(Ve) => [...Ve, this.createUserBubble({ tabId: Re })],
							),
							De &&
								(je.bubbles.length > 1
									? await this.focusFollowup()
									: await this.focus());
					}
					async newChatWithSelection(De, Re) {
						this.Q.setApplicationUserPersistentStorage("docState", {
							usableDocs: [],
						}),
							await this.newChat(Re),
							await this.insertSelectionIntoChat(De, {
								doNotInsertIfDuplicate: Re?.doNotInsertIfDuplicate,
							});
					}
					async tryInsertErrorIntoChat(De) {
						let Re = De?.marker;
						if (!Re) {
							const je = this.F.getActiveCodeEditor();
							if (!je) return !1;
							const Ve = je.getModel(),
								Ze = je.getPosition();
							if (!Ze || !Ve) return !1;
							const et = Ze?.lineNumber;
							if (!et) return !1;
							const rt = je.getLineDecorations(et);
							if (!rt) return !1;
							const ft = rt
								.map((bt) => {
									const nt = this.N.getMarker(Ve.uri, bt);
									return !nt ||
										(nt.severity != $.MarkerSeverity.Error &&
											nt.severity != $.MarkerSeverity.AI &&
											nt.severity != $.MarkerSeverity.Warning) ||
										!bt.range.containsPosition(Ze)
										? !1
										: nt;
								})
								.filter((bt) => !!bt);
							if (
								(ft.sort((bt, nt) =>
									bt.severity === nt.severity
										? 0
										: bt.severity === $.MarkerSeverity.Error
											? -1
											: nt.severity === $.MarkerSeverity.Error
												? 1
												: bt.severity === $.MarkerSeverity.Warning
													? -1
													: nt.severity === $.MarkerSeverity.Warning
														? 1
														: bt.severity === $.MarkerSeverity.AI
															? -1
															: nt.severity === $.MarkerSeverity.AI
																? 1
																: 0,
								),
								ft.length === 0)
							)
								return !1;
							Re = ft[0];
						}
						return await this.insertMarkerIntoChat(Re), !0;
					}
					async insertExplainSymbolIntoChat({ editorUri: De, symbolName: Re }) {
						this.Y.persistSelectedChat(!0);
						const Ve = this.F.listCodeEditors().find(
								(gt) => gt.hasModel() && gt.getModel()?.uri.toString() === De,
							),
							Ze = Ve?.getModel();
						if (!Ze || !Ve) return;
						const et = Ve.getPosition();
						if (!et) return;
						const rt = new h.$iL(
								et.lineNumber,
								1,
								et.lineNumber,
								Ze.getLineMaxColumn(et.lineNumber),
							),
							ft = `What does \`${Re}\` do?`;
						(!this.Y.chatData.tabs[0].tabId ||
							(0, xe.doesTabHaveExactlyOneUserBubbleWithNoText)(
								this.Y.chatData.tabs[0],
							)) &&
							(this.Y.setChatData(
								"selectedTabId",
								this.Y.chatData.tabs[0].tabId,
							),
							await this.focus());
						const bt = (0, u.$9g)(),
							nt = this.createUserBubble({ tabId: bt, text: ft }),
							lt = {
								tabId: bt,
								chatTitle: "",
								bubbles: [nt],
								lastSendTime: Date.now(),
								tabState: se.TabState.chat,
								longContextModeEnabled:
									this.Q.applicationUserPersistentStorage.isLongContextMode ===
										!0 &&
									this.Q.applicationUserPersistentStorage
										.longContextFlagEnabled2 === !0,
								lastFocusedBubbleId: nt.id,
							};
						this.Y.setChatData("tabs", (gt) => [lt, ...gt]);
						const ct = await this.getEditorCode(rt);
						this.Y.setChatData(
							"tabs",
							(gt, ht) => gt.tabId === lt.tabId,
							"bubbles",
							(gt, ht) => ht === 0 && gt.type === "user",
							"selections",
							(gt) => [...gt, ct],
						),
							this.Y.setChatData("selectedTabId", lt.tabId),
							await this.focus(),
							this.submitChat({ bubbleID: nt.id, tabID: lt.tabId });
					}
					async insertIntoChat(De) {
						this.Y.persistSelectedChat(!0);
						const Re = this.F.listCodeEditors();
						let je = Re.find(
							(bt) =>
								bt.hasModel() && bt.getModel()?.uri.toString() === De.editorUri,
						);
						if (
							De.editorUri !== "" &&
							(!je || !je?.hasModel()) &&
							(await this.z.openEditor({
								resource: r.URI.parse(De.editorUri),
								options: { preserveFocus: !0, pinned: !0 },
							}),
							(je = Re.find(
								(bt) =>
									bt.hasModel() &&
									bt.getModel()?.uri.toString() === De.editorUri,
							)),
							!je || !je?.hasModel())
						)
							return;
						const Ve =
								this.Y.chatData.selectedTabId ?? this.Y.chatData.tabs[0].tabId,
							Ze = this.Y.chatData.tabs.find((bt) => bt.tabId === Ve),
							et = Ze.bubbles[Ze.bubbles.length - 1];
						(!this.Y.chatData.tabs[0].tabId ||
							(0, xe.doesTabHaveExactlyOneUserBubbleWithNoText)(
								this.Y.chatData.tabs[0],
							)) &&
							(this.Y.setChatData(
								"selectedTabId",
								this.Y.chatData.tabs[0].tabId,
							),
							await this.focus()),
							De.isCodebaseContext &&
								(De.message = `{"root":{"children":[{"children":[{"detail":1,"format":0,"mode":"segmented","style":"","text":"@Codebase","type":"mention","version":1,"mentionName":"Codebase","storedKey":"4"},{"detail":0,"format":0,"mode":"normal","style":"","text":"${De.message}","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}`);
						let rt = Ve,
							ft;
						if (De.lastBubble) {
							const bt = Ze.bubbles[Ze.bubbles.length - 1].type === "user";
							(ft = this.createUserBubble({ tabId: rt, text: De.message })),
								this.Y.setChatData(
									"tabs",
									(nt, lt) => nt.tabId === rt,
									"bubbles",
									(nt) => (bt && nt.pop(), [...nt, ft]),
								);
						} else {
							const bt = (0, u.$9g)();
							ft = this.createUserBubble({ tabId: bt, text: De.message });
							const nt = {
								tabId: bt,
								chatTitle: "",
								bubbles: [ft],
								lastSendTime: Date.now(),
								tabState: se.TabState.chat,
								longContextModeEnabled:
									this.Q.applicationUserPersistentStorage.isLongContextMode ===
										!0 &&
									this.Q.applicationUserPersistentStorage
										.longContextFlagEnabled2 === !0,
								lastFocusedBubbleId: ft.id,
							};
							this.Y.setChatData("tabs", (lt) => [nt, ...lt]), (rt = nt.tabId);
						}
						if (De.preserveSelection)
							et.type === "user" &&
								this.Y.setChatData(
									"tabs",
									(bt, nt) => bt.tabId === rt,
									"bubbles",
									(bt, nt) => nt === 0 && bt.type === "user",
									"selections",
									(bt) => [...bt, ...et.selections],
								);
						else {
							const bt = [];
							De.range !== void 0 &&
								je !== void 0 &&
								bt.push(await this.getEditorCode(De.range, je)),
								this.Y.setChatData(
									"tabs",
									(nt, lt) => nt.tabId === rt,
									"bubbles",
									(nt, lt) => lt === 0 && nt.type === "user",
									"selections",
									(nt) => [...nt, ...bt],
								);
						}
						De.isCodebaseContext &&
							this.Y.setChatData(
								"tabs",
								(nt, lt) => nt.tabId === rt,
								"bubbles",
								(nt, lt) => nt.id === ft.id && nt.type === "user",
								"usesCodebase",
								!0,
							),
							this.Y.setChatData("selectedTabId", rt),
							await this.focus(),
							De.doNotSubmit !== !0 &&
								(this.refreshReactiveContextItem(rt, ft.id),
								De.isTutor === !0
									? this.submitTutor({ bubbleID: ft.id, tabID: rt })
									: De.includeCurrentFile
										? this.submitChat({
												bubbleID: ft.id,
												tabID: rt,
												shouldIncludeCurrentFile: De.includeCurrentFile,
											})
										: this.submitChat({ bubbleID: ft.id, tabID: rt }));
					}
					async insertMarkerIntoChat(De) {
						De.aiLintBugData === void 0
							? await this.insertErrorIntoChat({
									errorMessage: De.message,
									editorUri: De.resource.toString(),
									range: new h.$iL(
										De.startLineNumber,
										De.startColumn,
										De.endLineNumber,
										De.endColumn,
									),
								})
							: await this.insertIntoChat({
									message: `A linter gave this error message to me:

"${De.message}"

It also suggested I replace

\`\`\`
${De.aiLintBugData.originalText}
\`\`\`

with

\`\`\`${De.aiLintBugData.replaceText}
\`\`\`

Is this correct? Why?`,
									editorUri: De.resource.toString(),
									includeCurrentFile: !0,
								});
					}
					async insertErrorIntoChat({
						errorMessage: De,
						editorUri: Re,
						range: je,
						addToFollowUp: Ve = !1,
					}) {
						this.Y.persistSelectedChat(!0);
						const et = this.F.listCodeEditors().find(
								(ht) => ht.hasModel() && ht.getModel()?.uri.toString() === Re,
							),
							rt = et?.getModel();
						if (!rt || !et) return;
						const ft = et.getPosition();
						(!ft || !je.containsPosition(ft)) &&
							et.setPosition(je.getStartPosition());
						const bt = rt.getValueInRange(je),
							nt = Math.max(1, je.startLineNumber - 1),
							lt = Math.min(rt.getLineCount(), je.endLineNumber + 2),
							ct = new h.$iL(nt, 1, lt, rt.getLineMaxColumn(lt)),
							gt = `For the code present, we get this error:
\`\`\`
${De}
\`\`\`
How can I resolve this? If you propose a fix, please make it concise.`;
						await this.insertIntoChat({
							message: gt,
							editorUri: Re,
							range: ct,
							includeCurrentFile: !0,
							lastBubble: Ve === !0,
						});
					}
					async insertTerminalSelectionIntoChat(De) {
						const Re = this.C.activeInstance;
						let je;
						Re !== void 0 && (je = await this.getTerminalText(De)),
							je &&
								this.Y.setChatData(
									"tabs",
									(Ve, Ze) =>
										Ve.tabId === this.Y.chatData.selectedTabId ||
										(this.Y.chatData.selectedTabId === void 0 && Ze === 0),
									"bubbles",
									(Ve, Ze) => Ze === 0 && Ve.type === "user",
									"terminalSelections",
									(Ve) => [...Ve, je],
								);
					}
					selectPreviousTab() {
						const De = this.Bb;
						let je =
							this.Y.chatData.tabs.findIndex((Ve) => Ve.tabId === De.tabId) + 1;
						je === this.Y.chatData.tabs.length && (je = 0),
							this.Y.setChatData(
								"selectedTabId",
								this.Y.chatData.tabs[je].tabId,
							),
							this.focus();
					}
					selectNextTab() {
						const De = this.Bb;
						let je =
							this.Y.chatData.tabs.findIndex((Ve) => Ve.tabId === De.tabId) - 1;
						je === -1 && (je = this.Y.chatData.tabs.length - 1),
							this.Y.setChatData(
								"selectedTabId",
								this.Y.chatData.tabs[je].tabId,
							),
							this.focus();
					}
					async startIndexingListener(De) {
						await this.focus();
						const Re = this.selectedTab().lastFocusedBubbleId,
							je = this.selectedTab().bubbles.find((et) => et.id === Re);
						if (!je || je.type !== "user") return;
						const Ve = new Set();
						this.Y.setChatData(
							"tabs",
							(et, rt) =>
								et.tabId === this.Y.chatData.selectedTabId ||
								(this.Y.chatData.selectedTabId === void 0 && rt === 0),
							"bubbles",
							(et, rt) => et.id === Re && et.type === "user",
							{
								indexingDocId: De,
								indexingStatus: "running",
								indexingPageName: void 0,
							},
						);
						let Ze = [];
						try {
							for (let et = 0; et < 10; et++) {
								if (
									(
										await this.G.uploadDocumentationStatus({
											docIdentifier: De,
										})
									).status === i.UploadedStatus_Status.FAILED
								) {
									this.Y.setChatData(
										"tabs",
										(bt, nt) =>
											bt.tabId === this.Y.chatData.selectedTabId ||
											(this.Y.chatData.selectedTabId === void 0 && nt === 0),
										"bubbles",
										(bt, nt) => bt.id === Re && bt.type === "user",
										{ indexingStatus: "failure" },
									);
									return;
								}
								Ze = (await this.G.getPages({ docIdentifier: De })).pages;
								const ft = Ze.filter((bt) => !Ve.has(bt));
								for (const bt of ft) {
									if (Ve.has(bt)) continue;
									Ve.add(bt);
									const nt = this.selectedTab().bubbles.find(
										(lt) => lt.id === Re,
									);
									if (
										nt === void 0 ||
										nt.type !== "user" ||
										nt.indexingDocId !== De
									)
										return;
									this.Y.setChatData(
										"tabs",
										(lt, ct) =>
											lt.tabId === this.Y.chatData.selectedTabId ||
											(this.Y.chatData.selectedTabId === void 0 && ct === 0),
										"bubbles",
										(lt, ct) => lt.id === Re && lt.type === "user",
										"indexingPageName",
										bt,
									),
										await new Promise((lt) => setTimeout(lt, 200));
								}
								Ze.length === 0
									? await new Promise((bt) => setTimeout(bt, 2e3))
									: ft.length === 0 &&
										(await new Promise((bt) => setTimeout(bt, 500)));
							}
						} catch (et) {
							console.error(et),
								console.log("^ caught error while showing indexing ui"),
								this.Y.setChatData(
									"tabs",
									(rt, ft) =>
										rt.tabId === this.Y.chatData.selectedTabId ||
										(this.Y.chatData.selectedTabId === void 0 && ft === 0),
									"bubbles",
									(rt, ft) => rt.id === Re && rt.type === "user",
									{ indexingStatus: "failure" },
								);
							return;
						}
						this.Y.setChatData(
							"tabs",
							(et, rt) =>
								et.tabId === this.Y.chatData.selectedTabId ||
								(this.Y.chatData.selectedTabId === void 0 && rt === 0),
							"bubbles",
							(et, rt) => et.id === Re && et.type === "user",
							{
								indexingStatus: void 0,
								indexingPageName: void 0,
								indexingDocId: void 0,
							},
						);
					}
					async getSelectionToInsert(De) {
						switch (De) {
							case "editor":
								return await this.getEditorCode();
							case "terminal":
								return await this.getTerminalText();
						}
					}
					async insertSelectionIntoChat(De, Re) {
						this.L.publicLogCapture("Inserted Selection Into Chat");
						let je;
						if (
							this.Q.applicationUserPersistentStorage.checklistState
								?.doneAddingCodeSelection !== !0
						) {
							const Ve = this.Q.applicationUserPersistentStorage.checklistState;
							this.Q.setApplicationUserPersistentStorage(
								"checklistState",
								(Ze) => ({ ...(Ze ?? {}), doneAddingCodeSelection: !0 }),
							);
						}
						switch (De) {
							case "editor":
								(je = await this.getEditorCode()),
									je &&
										this.L.publicLogCapture(
											"Inserted Code Selection Into Chat",
										);
								break;
							case "terminal":
								(je = await this.getTerminalText()),
									je &&
										this.L.publicLogCapture(
											"Inserted Shell Selection Into Chat",
										);
								break;
						}
						if (je) {
							De === "terminal"
								? this.mb.registerEvent(
										"chat.insert_selection.terminal.non_empty",
									)
								: De === "editor" &&
									this.mb.registerEvent(
										"chat.insert_selection.editor.non_empty",
									);
							const Ve = this.Ib;
							this.addContext({
								tabId: this.Bb.tabId,
								bubbleId: Ve.id,
								contextType:
									De === "terminal" ? "terminalSelections" : "selections",
								value: je,
							}),
								await this.focus();
						} else {
							De === "terminal"
								? this.mb.registerEvent("chat.insert_selection.terminal.empty")
								: De === "editor" &&
									this.mb.registerEvent("chat.insert_selection.editor.empty");
							return;
						}
					}
					async insertFileSelectionIntoChat(De, Re, je) {
						Re = Re ?? this.Y.chatData.selectedTabId;
						const Ve = this.Fb(Re);
						Ve &&
							((je = je ?? Ve.lastFocusedBubbleId),
							this.addContext({
								tabId: Re,
								bubbleId: je,
								contextType: "selections",
								value: De,
								uuid: De.uuid,
							}));
					}
					async insertSelectionIntoFollowup(De) {
						let Re;
						switch (De) {
							case "editor":
								Re = await this.getEditorCode();
								break;
							case "terminal":
								Re = await this.getTerminalText();
								break;
						}
						if (!Re) return;
						const je =
								this.Y.chatData.selectedTabId ?? this.Y.chatData.tabs[0].tabId,
							Ve = this.Y.chatData.tabs.find((et) => et.tabId === je),
							Ze = Ve.bubbles[Ve.bubbles.length - 1].id;
						this.addContext({
							tabId: je,
							bubbleId: Ze,
							contextType: "selections",
							value: Re,
							uuid: Re.uuid,
						}),
							Ve.bubbles.length > 1
								? await this.focusFollowup()
								: await this.focus();
					}
					selectedTab() {
						return this.Bb;
					}
					getFoldersInBubblesUpTo(De, Re) {
						const je = this.Y.chatData.tabs.find((Ze) => Ze.tabId === De);
						if (!je) return [];
						const Ve = je.bubbles.findIndex((Ze) => Ze.id === Re);
						return Ve === -1
							? []
							: je.bubbles
									.slice(0, Ve + 1)
									.map((Ze) =>
										Ze.type === se.BubbleType.USER_CHAT
											? (Ze.folderSelections ?? [])
											: [],
									)
									.flat();
					}
					async bc({
						aiBubbleId: De,
						originatingBubbleId: Re,
						textOfOriginatingBubble: je,
						tabID: Ve,
						followupID: Ze,
						cancelled: et,
						generationUUID: rt,
						dontPassContext: ft,
					}) {
						if (rt && this.generationIDsWithNoFollowup.has(rt)) return;
						const bt = this.Y.chatData.tabs.find((Rt) => Rt.tabId === Ve);
						if (bt === void 0) {
							console.error(`Tab ${Ve} does not exist`);
							return;
						}
						if (this.tabIDToQueuedFollowupID.get(Ve) !== Ze) {
							console.log(
								`Followup ID ${Ze} is not the same as the queued followup ID ${this.tabIDToQueuedFollowupID.get(Ve)} (NOT A BUG)`,
							);
							return;
						}
						const nt = bt.bubbles.findIndex((Rt) => Rt.id === De);
						if (nt === -1 || nt !== bt.bubbles.length - 1) return;
						const lt = this.createUserBubble({
							tabId: Ve,
							text: "",
							followup: !0,
						});
						this.Y.setChatData(
							"tabs",
							(Rt, Nt) => Rt.tabId === Ve,
							"bubbles",
							(Rt) => [...Rt, lt],
						),
							this.Y.setChatData("tabs", (Rt, Nt) => Rt.tabId === Ve, {
								lastSendTime: Date.now(),
								lastFocusedBubbleId: lt.id,
							}),
							this.Y.sortTabs();
						let ct = !1,
							gt = bt.bubbles.findIndex((Rt) => Rt.id === Re),
							ht = !1;
						if (gt !== -1) {
							const Rt = bt.bubbles[gt];
							Rt.type === "ai"
								? (ct = Rt.text === je)
								: Rt.type === "user" &&
									((ct = Rt.text === je), (ht = this.isFocused(Rt.id)));
						}
						this.Y.chatData.inputBoxDelegate.focus();
					}
					cc({ bubbleID: De, text: Re, tabID: je }) {
						const Ve = this.Y.chatData.tabs.find((et) => et.tabId === je);
						if (Ve === void 0) {
							console.error(`Tab ${je} does not exist`);
							return;
						}
						const Ze = Ve.bubbles.find((et) => et.id === De);
						if (Ze === void 0) {
							console.error(`Bubble ${De} does not exist`);
							return;
						}
						if (Ze.type !== "ai") {
							console.error(`Bubble ${De} is not an ai bubble`);
							return;
						}
						this.Y.setChatData(
							"tabs",
							(et, rt) => et.tabId === je,
							"bubbles",
							(et) => et.id === De,
							"text",
							(et) => (et ?? "") + Re,
						);
					}
					serializedState() {
						const De = {
							...this.Y.chatData,
							pinnedContexts: {
								fileSelections: this.Y.chatData.pinnedContexts.fileSelections,
								codeSelections: this.Y.chatData.pinnedContexts.codeSelections,
							},
							tabs: this.Y.chatData.tabs.map((Re) => ({
								...Re,
								bubbles: Re.bubbles.map((je) => {
									if (je.type === se.BubbleType.USER_CHAT) {
										const Ve = je,
											{
												errorDetails: Ze,
												codebaseResults: et,
												cachedResults: rt,
												...ft
											} = Ve;
										return (ft.initText = ft.richText), delete ft.delegate, ft;
									} else if (je.type === se.BubbleType.AI_CHAT) {
										const Ve = je,
											{ contextData: Ze, codeBlocks: et, ...rt } = Ve;
										return (rt.rawText = rt.text), { ...rt, codeBlocks: [] };
									} else return je;
								}),
							})),
							chatDataVersion: se.$vgc,
						};
						return JSON.stringify(De);
					}
					saveState() {
						this.Y.persistSelectedChat(!1),
							this.y.store(
								this.Y.chatDataStorageID,
								this.serializedState(),
								(0, He.$qIb)(this.$),
								P.StorageTarget.MACHINE,
							);
					}
					registerAuxiliaryPaneView(De) {
						this.gb.registerAuxiliaryPaneView(De);
					}
					registerTasksPaneView(De) {
						this.gb.registerTasksPaneView(De);
					}
					registerEditor(De) {
						this.gb.registerEditor(De);
					}
					updateHoverWidget() {
						this.gb.updateHoverWidget();
					}
					async openAsSidebarView() {
						return (
							(0, Oe.$Kac)() &&
								(this.gb.hide(),
								await new Promise((De) => setTimeout(De, 100))),
							this.gb.openAsSidebarView().then(() => {
								this.Y.chatData.inputBoxDelegate.focus();
							})
						);
					}
					async openAsEditorView() {
						await this.gb.openAsEditorView(),
							this.Y.chatData.inputBoxDelegate.focus();
					}
					async focus() {
						if (this.Bb.lastFocusedBubbleId) {
							const De =
								this.Y.chatData.inputBoxDelegateMap[
									this.Bb.lastFocusedBubbleId ?? ""
								];
							De ? De.focus() : this.focusInput();
						} else this.focusInput();
					}
					async focusFollowup() {
						this.Y.chatData.inputBoxDelegate?.focus?.();
					}
					async focusBubble(De) {
						await this.gb.focusBubble(De);
					}
					focusInput() {
						this.Y.chatData.inputBoxDelegate?.focus?.();
					}
					isFocused(De) {
						return this.gb.isFocused(De);
					}
					async show() {
						await this.gb.show();
					}
					historyVisible() {
						return this.gb.historyVisible();
					}
					showChatHistory() {
						this.gb.showChatHistory();
					}
					hideChatHistory() {
						this.gb.hideChatHistory();
					}
					chatVisible() {
						return this.gb.chatVisible();
					}
					showTasksPane() {
						this.gb.showTasksPane();
					}
					hide() {
						this.gb.hide();
					}
					deleteTab(De) {
						this.Y.persistSelectedChat(!0),
							this.Y.selectedTabId === De
								? this.Y.chatData.tabs.length === 1
									? this.resetCurrentTab()
									: (this.Y.chatData.tabs[0].tabId === De
											? this.Y.setChatData(
													"selectedTabId",
													this.Y.chatData.tabs[1].tabId,
												)
											: this.Y.setChatData(
													"selectedTabId",
													this.Y.chatData.tabs[0].tabId,
												),
										this.Y.setChatData(
											"tabs",
											this.Y.chatData.tabs.filter((Re) => Re.tabId !== De),
										))
								: this.Y.setChatData(
										"tabs",
										this.Y.chatData.tabs.filter((Re) => Re.tabId !== De),
									);
					}
					clearBubbleContext(De, Re) {
						const je = {},
							Ve = this.Gb(De, Re);
						for (const Ze of ge.$Wgc)
							Array.isArray(Ve[Ze]) ? (je[Ze] = []) : (je[Ze] = void 0);
						this.Hb(De, Re, je);
					}
					getUndoRedoUri(De, Re) {
						return r.URI.from({ scheme: "aichat", path: `${De}-${Re}` });
					}
					addContext(De) {
						const {
							tabId: Re,
							bubbleId: je,
							contextType: Ve,
							value: Ze,
							uuid: et,
							shouldShowPreview: rt = !0,
							addToUndoRedo: ft = !0,
						} = De;
						this.xb.addContext({
							contextType: Ve,
							value: Ze,
							setContext: (...bt) => {
								this.Y.setChatData(
									"tabs",
									(nt) => nt.tabId === Re,
									"bubbles",
									(nt) => nt.id === je && nt.type === "user",
									...bt,
								);
							},
							getContext: () => {
								const bt = this.Gb(Re, je);
								if (!bt || bt.type !== "user")
									throw new Error("[aichat] Bubble not found");
								return bt;
							},
							undoRedoUri: ft ? this.getUndoRedoUri(Re, je) : void 0,
							mention: et ? { uuid: et } : void 0,
						}),
							rt &&
								setTimeout(() => {
									let bt;
									const nt = this.Gb(Re, je);
									(0, ge.$Ygc)(Ve) &&
										(bt = nt[Ve].findIndex((lt) => (0, ge.$1gc)(Ve, lt, Ze))),
										this.w.fire({
											tabId: Re,
											bubbleId: je,
											contextType: Ve,
											index: bt,
										});
								}),
							this.u.fire({ tabId: Re, bubbleId: je, contextType: Ve });
					}
					removeContext(De) {
						const {
								tabId: Re,
								bubbleId: je,
								contextType: Ve,
								index: Ze,
								addToUndoRedo: et = !0,
							} = De,
							rt = this.xb.removeContext({
								contextType: Ve,
								setContext: (...ft) => {
									this.Y.setChatData(
										"tabs",
										(bt) => bt.tabId === Re,
										"bubbles",
										(bt) => bt.id === je && bt.type === "user",
										...ft,
									);
								},
								getContext: () => {
									const ft = this.Gb(Re, je);
									if (!ft || ft.type !== "user")
										throw new Error("[aichat] Bubble not found");
									return ft;
								},
								index: Ze,
								undoRedoUri: et ? this.getUndoRedoUri(Re, je) : void 0,
							});
						return (
							this.s.fire({
								tabId: Re,
								bubbleId: je,
								contextType: Ve,
								removedMentionIds: rt.map((ft) => ft.uuid),
							}),
							rt
						);
					}
					removeMention(De, Re, je) {
						const Ve = this.Fb(De);
						this.xb.removeMention({
							uuid: je,
							setContext: (...Ze) => {
								this.Y.setChatData(
									"tabs",
									(et) => et.tabId === De,
									"bubbles",
									(et) => et.id === Re && et.type === "user",
									...Ze,
								);
							},
							getContext: () => {
								const Ze = this.Gb(De, Re);
								if (!Ze || Ze.type !== "user")
									throw new Error("[aichat] Bubble not found");
								return Ze;
							},
							undoRedoUri: this.getUndoRedoUri(De, Re),
						});
					}
					async getGitGraphFileSuggestionsForBubble(De, Re, je = Be) {
						let Ve = 0;
						for (; !this.ob.provider && Ve < 20; )
							await new Promise((ht) => setTimeout(ht, 1e3)), Ve++;
						const Ze = this.Gb(De, Re);
						if (!Ze || Ze.type !== "user") return [];
						let et = Ze.fileSelections;
						if (
							(this.Ob && (et = et.filter((ht) => ht.isCurrentFile !== !0)),
							!et)
						)
							return [];
						const rt = et.map(async (ht) =>
								(
									await this.tb.getRelatedFiles({
										uri: r.URI.from(ht.uri),
										maxNumFiles: je,
									})
								).map((Nt) => ({ ...Nt })),
							),
							bt = (await Promise.all(rt)).flat(),
							nt = new Set(et.map((ht) => ht.uri.toString()));
						return bt
							.reduce((ht, Rt) => {
								const Nt = Rt.uri;
								if (nt.has(Nt.toString())) return ht;
								const jt = ht.find((ti) =>
									ue.$dh.isEqual(r.URI.from(ti.uri), Rt.uri),
								);
								if (!jt || Rt.weight > jt.weight) {
									if (jt) return ht;
									ht.push(Rt);
								}
								return ht;
							}, [])
							.sort((ht, Rt) => Rt.weight - ht.weight)
							.slice(0, je)
							.map((ht) => ({
								uri: ht.uri,
								fileName: (0, ae.$sc)(ht.uri.fsPath),
								weight: ht.weight,
							}));
					}
					refreshReactiveContextItem(De, Re) {
						if (this.Fb(De)?.noReactiveContext) return;
						const Ve = this.Gb(De, Re);
						if (Ve.type !== "user") return;
						let Ze = this.Y.getCurrentFile();
						const et = Ze && Ze.uri.scheme === Ce.Schemas.notepad,
							rt = Ze && Ze.uri.scheme === Ce.Schemas.vscodeTerminal;
						et && Ze && (Ze = { notepadId: Ze.uri.path, isCurrentNotepad: !0 });
						const ft = (nt, lt) => {
							let ct = [...nt];
							const gt = ct.findIndex(
									(kt) =>
										("isCurrentFile" in kt && kt.isCurrentFile === !0) ||
										("isCurrentNotepad" in kt && kt.isCurrentNotepad === !0),
								),
								ht = Ze ? (0, ge.$Zgc)(lt, Ze) : void 0,
								Rt = ht
									? ct.findIndex((kt) => (0, ge.$Zgc)(lt, kt) === ht)
									: -1,
								Nt =
									Rt !== -1 &&
									"addedWithoutMention" in ct[Rt] &&
									ct[Rt].addedWithoutMention;
							if (gt !== -1) {
								const kt = ct[gt],
									hi = this.xb.getMentions(Ve, lt, kt).length > 0,
									Kt =
										"addedWithoutMention" in kt &&
										kt.addedWithoutMention === !0;
								if (Ze)
									if (
										("uri" in kt && !(0, r.$Ac)(Ze.uri, kt.uri)) ||
										("notepadId" in kt && kt.notepadId !== Ze.notepadId)
									)
										hi || Kt
											? ((ct[gt] = {
													...kt,
													...(lt !== "notepads"
														? { isCurrentFile: !1 }
														: { isCurrentNotepad: !1 }),
												}),
												ct.unshift({ ...Ze, addedWithoutMention: Nt }))
											: (ct[gt] = { ...Ze, addedWithoutMention: Nt });
									else return;
								else
									hi || Kt
										? (ct[gt] = {
												...kt,
												...(lt !== "notepads"
													? { isCurrentFile: !1 }
													: { isCurrentNotepad: !1 }),
											})
										: ct.splice(gt, 1);
							} else Ze && ct.unshift({ ...Ze, addedWithoutMention: Nt });
							const jt = new Set();
							return ct.filter((kt, hi) => {
								const Kt = (0, ge.$Zgc)(lt, kt);
								return jt.has(Kt) ? !1 : (jt.add(Kt), !0);
							});
						};
						let bt = {};
						if (rt) {
							const nt = ft(Ve.terminalFiles || [], "terminalFiles");
							if (nt === void 0) return;
							(bt.terminalFiles = nt),
								(bt.notepads = (Ve.notepads || []).filter(
									(lt) => lt.isCurrentNotepad !== !0,
								));
						} else if (et) {
							const nt = ft(Ve.notepads || [], "notepads");
							if (nt === void 0) return;
							(bt.notepads = nt),
								(bt.fileSelections = (Ve.fileSelections || []).filter(
									(lt) => lt.isCurrentFile !== !0,
								)),
								(bt.terminalFiles = (Ve.terminalFiles || []).filter(
									(lt) => lt.isCurrentFile !== !0,
								));
						} else {
							const nt = ft(Ve.fileSelections || [], "fileSelections");
							if (nt === void 0) return;
							(bt.fileSelections = nt),
								(bt.terminalFiles = (Ve.terminalFiles || []).filter(
									(lt) => lt.isCurrentFile !== !0,
								)),
								(bt.notepads = (Ve.notepads || []).filter(
									(lt) => lt.isCurrentNotepad !== !0,
								));
						}
						this.Hb(De, Re, bt);
					}
					removeNonExistentNotepads(De, Re) {
						if (!this.Fb(De)) {
							console.error(`Tab ${De} does not exist`);
							return;
						}
						const Ve = this.Gb(De, Re);
						if (!Ve || Ve.type !== "user") {
							console.error(
								`Bubble ${Re} does not exist or is not a user bubble`,
							);
							return;
						}
						const Ze = (Ve.notepads || []).filter(
							(et) => !!this.zb.notepadsData.notepads[et.notepadId],
						);
						Ze.length !== Ve.notepads?.length &&
							(this.Hb(De, Re, { notepads: Ze }),
							console.log(
								`Removed non-existent notepads from bubble ${Re} in tab ${De}`,
							));
					}
				};
				(e.$pcc = qe),
					(e.$pcc = qe =
						Ne(
							[
								j(0, P.$lq),
								j(1, ee.$IY),
								j(2, z.$iIb),
								j(3, a.$dtb),
								j(4, x.$Nfc),
								j(5, ie.$a9b),
								j(6, f.$6j),
								j(7, Q.$HMb),
								j(8, k.$km),
								j(9, X.$W6b),
								j(10, c.$bub),
								j(11, H.$s0b),
								j(12, _.$u0b),
								j(13, v.$0zb),
								j(14, G.$J6b),
								j(15, K.$T8b),
								j(16, p.$ek),
								j(17, Y.$S6b),
								j(18, W.$zIb),
								j(19, R.$kgc),
								j(20, I.$Z6b),
								j(21, D.$Vi),
								j(22, l.$Li),
								j(23, te.$mEb),
								j(24, ne.$EY),
								j(25, ee.$IY),
								j(26, F.$r0b),
								j(27, q.$$9b),
								j(28, N.$rgc),
								j(29, n.$MO),
								j(30, V.$$Db),
								j(31, B.$75),
								j(32, g.$9Db),
								j(33, M.$V7b),
								j(34, L.$5X),
								j(35, y.$jEb),
								j(36, b.$3Db),
								j(37, o.$gj),
								j(38, re.$26b),
								j(39, le.$q8b),
								j(40, pe.$N9b),
								j(41, ye.$cEb),
								j(42, Je.$lcc),
								j(43, fe.$GN),
								j(44, me.$H7b),
								j(45, ve.$Q9b),
								j(46, be.$kcc),
								j(47, Le.$y9b),
								j(48, Ke.$ll),
							],
							qe,
						)),
					(0, s.$lK)(N.$qgc, qe, s.InstantiationType.Delayed);
				let Ae = class extends d.$1c {
					constructor(De, Re, je, Ve, Ze, et, rt, ft) {
						super(),
							(this.z = De),
							(this.C = Re),
							(this.F = je),
							(this.G = Ve),
							(this.H = Ze),
							(this.I = et),
							(this.J = rt),
							(this.L = ft),
							(this.j = []),
							(this.w = new Set()),
							(this.y = this.D(this.F.createScoped(this))),
							this.G.bufferChangeEvents(() => {
								(this.n = N.$sgc.bindTo(Ve)),
									(this.q = N.$tgc.bindTo(Ve)),
									(this.s = N.$ugc.bindTo(Ve)),
									this.s.set(
										this.F.workspaceUserPersistentStorage.aiPanePosition,
									),
									this._updateHistoryVisibility(),
									this._updateActiveEditor();
							}),
							this.updateHoverWidget();
						for (const bt of this.C.getGroups(ne.GroupsOrder.CREATION_TIME))
							this._registerGroupListeners(bt);
						this.D(
							this.C.mainPart.onDidLayout(() => {
								for (const bt of this.C.getGroups(ne.GroupsOrder.CREATION_TIME))
									this._registerGroupListeners(bt);
							}),
						),
							this.D(
								this.C.onDidAddGroup((bt) => {
									this._registerGroupListeners(bt);
								}),
							),
							this.D(
								this.C.onDidActivateGroup((bt) => {
									this._registerGroupListeners(bt);
								}),
							),
							this._updateActiveEditor(),
							this.D(
								this.z.onDidActiveEditorChange(() => {
									this._updateActiveEditor();
								}),
							),
							this._updateHistoryVisibility(),
							this.y.onChangeEffect({
								deps: [
									() => this.F.workspaceUserPersistentStorage.aiPanePosition,
								],
								onChange: () => {
									this.s.set(
										this.F.workspaceUserPersistentStorage.aiPanePosition,
									),
										this._updateHistoryVisibility();
								},
							}),
							this.D(
								this.H.onDidChangePartVisibility(() => {
									this._updateMode();
								}),
							),
							this.L.onDidChangeFocusedView((bt) => {
								const nt = this.L.getFocusedViewName();
								nt === N.AIChatConstants.CHAT_VIEW_ID ||
								nt.toLowerCase() === "chat" ||
								nt.toLowerCase() === "aichat"
									? this.F.setNonPersistentStorage("chatState", "isFocused", !0)
									: this.F.setNonPersistentStorage(
											"chatState",
											"isFocused",
											!1,
										);
							}),
							this.D(
								this.L.onDidChangeViewVisibility((bt) => {
									bt.id === N.AIChatConstants.CHAT_VIEW_ID &&
										this._updateMode();
								}),
							);
					}
					_updateActiveEditor() {
						this.z.activeEditorPane?.input?.typeId === A.$ngc.ID
							? this.q.set(!0)
							: this.q.set(!1);
					}
					_registerGroupListeners(De) {
						if (this.w.has(De.id)) return;
						this.w.add(De.id),
							De.editors.some((Ze) => Ze.typeId === A.$ngc.ID) &&
								this.registerEditor(De.id);
						const Re = De.onDidCloseEditor((Ze) => {
								Ze.editor.typeId === A.$ngc.ID &&
									(this.unregisterEditor(De.id), this._updateMode());
							}),
							je = De.onWillOpenEditor((Ze) => {
								Ze.editor?.typeId === A.$ngc.ID && this.registerEditor(De.id);
							});
						this.D(Re), this.D(je);
						const Ve = De.onWillDispose(() => {
							Re.dispose(), je.dispose();
						});
						this.D(Ve);
					}
					registerAuxiliaryPaneView(De) {
						(this.h = De), this.updateHoverWidget();
					}
					registerTasksPaneView(De) {
						(this.tasksPane = De), this.updateHoverWidget();
					}
					registerEditor(De) {
						this.w.has(De) || this._registerGroupListeners(this.C.getGroup(De)),
							this.j.includes(De) || this.j.push(De),
							this._closeEditorViews(this.j.filter((Re) => Re !== De)),
							this.updateHoverWidget();
					}
					unregisterEditor(De) {
						(this.j = this.j.filter((Re) => Re !== De)),
							this.updateHoverWidget();
					}
					updateHoverWidget() {
						let De =
							this.h?.isVisible() ||
							this.j.some((Re) =>
								this.C.getGroup(Re)?.isActive(new A.$ngc()),
							) ||
							!1;
						this.F.setNonPersistentStorage({ shouldShowInsertChatWidget: De });
					}
					_closeEditorViews(De) {
						const Re = De ?? [...this.j];
						return (
							(this.j = this.j.filter((je) => !Re.includes(je))),
							Promise.all(
								Re.map((je) => this.C.getGroup(je)?.closeEditor(new A.$ngc())),
							)
						);
					}
					async openAsSidebarView() {}
					async openAsEditorView() {
						if (
							(this.F.workspaceUserPersistentStorage.aiPanePosition !==
								S.AIPanePosition.EDITOR &&
								(this.hideChatHistory(),
								this.H.setPartHidden(!0, te.Parts.AUXILIARYBAR_PART)),
							this.F.setWorkspaceUserPersistentStorage({
								aiPanePosition: S.AIPanePosition.EDITOR,
							}),
							this.j.length > 0)
						) {
							const je = this.j[0],
								Ve = this.C.getGroup(je);
							if (
								Ve &&
								(this.C.activeGroup.id !== Ve.id || Ve.isActive(new A.$ngc()))
							) {
								await this.C.getGroup(je)?.openEditor(new A.$ngc(), {
									pinned: !0,
								});
								return;
							}
						}
						await this._closeEditorViews();
						let De;
						if (
							this.C.groups.length >= 1 &&
							this.C.groups[0].editors.length > 0
						) {
							const je = this.C.findGroup({ location: ne.GroupLocation.LAST });
							je &&
								je.id == this.C.activeGroup.id &&
								(De = this.C.addGroup(je, ne.GroupDirection.RIGHT));
						}
						const Re = await this.z?.openEditor(
							this.I?.createInstance(A.$ngc),
							De,
						);
						this.updateHoverWidget();
					}
					_getCurrentPane() {
						if (
							this.F.workspaceUserPersistentStorage.aiPanePosition ===
							S.AIPanePosition.SIDEBAR
						)
							return this.h;
						{
							const De = this.j[0];
							if (De === void 0) return;
							const je = this.C.getGroup(De)?.activeEditorPane;
							return je instanceof A.$ogc ? je : void 0;
						}
					}
					async focus(De) {
						await this.show(),
							this.J.publicLog2("ai/chat/focus"),
							this._getCurrentPane()?.focus(De);
					}
					async focusFollowup() {
						await this.show(),
							this.J.publicLog2("ai/chat/focusFollowup"),
							this._getCurrentPane()?.focusFollowup();
					}
					async focusBubble(De) {
						await this.show(), this._getCurrentPane()?.focusBubble(De);
					}
					isFocused(De) {
						return this._getCurrentPane()?.isFocused(De) ?? !1;
					}
					async show() {
						this.F.workspaceUserPersistentStorage.aiPanePosition ===
						S.AIPanePosition.SIDEBAR
							? await this.openAsSidebarView()
							: await this.openAsEditorView();
					}
					historyVisible() {
						return this.n.get() ?? !1;
					}
					_updateHistoryVisibility() {
						this.F.workspaceUserPersistentStorage.aiPanePosition ===
							S.AIPanePosition.EDITOR &&
							this.n.set(
								this.L.isViewVisible(N.AIChatConstants.CHAT_VIEW_ID) ?? !1,
							);
					}
					_updateMode() {
						const De = this.F.workspaceUserPersistentStorage.aiPanePosition,
							Re = this.C.groups;
						De === S.AIPanePosition.EDITOR &&
							Re.every((je) => je.activeEditor?.typeId !== A.$ngc.ID) &&
							this.H.isVisible(te.Parts.AUXILIARYBAR_PART) &&
							this.openAsSidebarView();
					}
					showChatHistory() {
						this.F.workspaceUserPersistentStorage.aiPanePosition ===
							S.AIPanePosition.EDITOR &&
							this.H.setPartHidden(!1, te.Parts.AUXILIARYBAR_PART),
							this.n.set(!0);
					}
					hideChatHistory() {
						this.F.workspaceUserPersistentStorage.aiPanePosition ===
							S.AIPanePosition.EDITOR &&
							this.H.setPartHidden(!0, te.Parts.AUXILIARYBAR_PART),
							this.n.set(!1);
					}
					chatVisible() {
						return this.F.workspaceUserPersistentStorage.aiPanePosition ===
							S.AIPanePosition.SIDEBAR
							? (this.h?.isVisible() ?? !1)
							: this.j.some((De) =>
									this.C.getGroup(De)?.isActive(new A.$ngc()),
								) || !1;
					}
					showTasksPane() {}
					hide() {
						this.F.workspaceUserPersistentStorage.aiPanePosition ===
						S.AIPanePosition.SIDEBAR
							? this.H.setPartHidden(!0, te.Parts.AUXILIARYBAR_PART)
							: this.j.forEach((De) =>
									this.C.getGroup(De)?.closeEditor(new A.$ngc()),
								);
					}
				};
				(e.$qcc = Ae),
					(e.$qcc = Ae =
						Ne(
							[
								j(0, ee.$IY),
								j(1, ne.$EY),
								j(2, v.$0zb),
								j(3, f.$6j),
								j(4, te.$mEb),
								j(5, l.$Li),
								j(6, k.$km),
								j(7, Q.$HMb),
							],
							Ae,
						)),
					(0, s.$lK)(N.$rgc, Ae, s.InstantiationType.Eager);
			},
		),
		define(
			de[4408],
			he([
				1, 0, 14, 12, 11, 31, 8, 418, 140, 100, 4407, 58, 1307, 4, 337, 679, 9,
				480, 118, 47, 308, 581,
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
				if ((Object.defineProperty(e, "__esModule", { value: !0 }), i.$n)) {
					class M extends w.$3X {
						constructor() {
							super({
								id: "aichat.settingsIcon",
								title: "Settings",
								f1: !1,
								icon: t.$ak.settingsGear,
								menu: { id: w.$XX.ViewTitle, group: "navigation" },
							});
						}
						run(A, ...R) {
							A.get(E.$ek).executeCommand(a.$QV);
						}
					}
					(0, w.$4X)(M);
				}
				class y extends w.$3X {
					constructor() {
						super({
							id: a.$nX,
							title: {
								value: "Add Everything About Symbol to New Chat",
								original: "Add Everything About Symbol to New Chat",
							},
							f1: !1,
						});
					}
					async run(N, A, ...R) {
						const O = N.get(d.$qgc),
							B = N.get(n.$kgc),
							U = A?.symbolContext?.definitions,
							z = A?.symbolContext?.implementations;
						await O.show();
						const F = B.chatData.selectedTabId ?? B.chatData.tabs[0].tabId,
							x = B.chatData.tabs
								.find((V) => V.tabId === F)
								?.bubbles.at(-1)?.id,
							H = [];
						for (const V of U ?? []) {
							if (V.uriComponents === void 0 || V.symbol?.range === void 0)
								continue;
							const G = {
								selectionStartLineNumber: V.symbol?.range.startLineNumber,
								selectionStartColumn: V.symbol?.range.startColumn,
								positionLineNumber: V.symbol?.range.endLineNumber,
								positionColumn: V.symbol?.range.endColumn,
							};
							H.push({
								uri: p.URI.from(V.uriComponents),
								range: G,
								text: V.textInSymbolRange,
							});
						}
						for (const V of z ?? []) {
							if (V.uriComponents === void 0 || V.symbol?.range === void 0)
								continue;
							const G = {
								selectionStartLineNumber: V.symbol?.range.startLineNumber,
								selectionStartColumn: V.symbol?.range.startColumn,
								positionLineNumber: V.symbol?.range.endLineNumber,
								positionColumn: V.symbol?.range.endColumn,
							};
							H.push({
								uri: p.URI.from(V.uriComponents),
								range: G,
								text: V.textInSymbolRange,
							});
						}
						const q = A?.gitCommits?.map((V) => ({
							message: V.message,
							sha: V.sha,
							uuid: (0, b.$9g)(),
						}));
						B.setChatData(
							"tabs",
							(V, G) => V.tabId === F,
							"bubbles",
							(V, G) => V.id === x && V.type === "user",
							"selections",
							(V) => (V == null ? H : [...V, ...H]),
						),
							B.setChatData(
								"tabs",
								(V, G) => V.tabId === F,
								"bubbles",
								(V, G) => V.id === x && V.type === "user",
								"selectedCommits",
								(V) => (V == null ? q : [...V, ...q]),
							),
							await O.focus();
					}
				}
				(0, w.$4X)(y);
				class $ extends w.$3X {
					constructor() {
						super({
							id: a.$eX,
							title: { value: g.$L0b, original: g.$L0b },
							f1: !0,
						});
					}
					async run(N, ...A) {
						const R = N.get(d.$qgc);
						N.get(s.$5X).registerEvent("chat.open.normal"),
							await R.show(),
							R.focus({ inChatDontFocusBubble: !0 });
					}
				}
				(0, w.$4X)($);
				class v extends w.$3X {
					constructor() {
						super({ id: a.$iX, title: { value: "", original: "" }, f1: !1 });
					}
					async run(N, A, R, O, ...B) {
						N.get(n.$kgc).setChatData(
							"tabs",
							(z, F) => z.tabId === A,
							"bubbles",
							(z, F) => z.id === R && z.type === "user",
							"codebaseResults",
							O.filter((z) => z !== void 0 && z.contents.length < 2e4) ?? [],
						);
					}
				}
				(0, w.$4X)(v);
				class S extends w.$3X {
					constructor() {
						super({
							id: a.$jX,
							title: {
								value: "Add Files to Chat",
								original: "Add Files to Chat",
							},
							f1: !1,
						});
					}
					async run(N, A, ...R) {
						const O = N.get(n.$kgc),
							B = N.get(d.$qgc);
						if ((await B.show(), A instanceof p.URI)) {
							const U = O.chatData.selectedTabId ?? O.chatData.tabs[0].tabId,
								z = O.chatData.tabs
									.find((F) => F.tabId === U)
									?.bubbles.at(-1)?.id;
							O.setChatData(
								"tabs",
								(F, x) => F.tabId === U,
								"bubbles",
								(F, x) => F.id === z && F.type === "user",
								"fileSelections",
								(F) =>
									F == null
										? [{ uri: A }]
										: F.find((H) => H.uri.toString() === A.toString())
											? F
											: [...F, { uri: A }],
							),
								B.focus();
						}
					}
				}
				(0, w.$4X)(S);
				class I extends w.$3X {
					constructor() {
						super({
							id: a.$kX,
							title: {
								value: "Add Files to New Chat",
								original: "Add Files to Chat",
							},
							f1: !1,
						});
					}
					async run(N, A, ...R) {
						const O = N.get(E.$ek);
						A instanceof p.URI &&
							(O.executeCommand(a.$dX), O.executeCommand(a.$jX, A));
					}
				}
				(0, w.$4X)(I);
				class T extends w.$3X {
					constructor() {
						super({ id: a.$zV, title: { value: "", original: "" }, f1: !1 });
					}
					run(N, A) {
						const R = A.bubbleID,
							O = A.tabID,
							B = A.chatType;
						if (R === void 0 || O === void 0 || B === void 0)
							throw new Error("Missing arguments");
						const U = { ...A, chatType: B, bubbleID: R, tabID: O };
						N.get(d.$qgc).submitUnifiedChat(U);
					}
				}
				(0, w.$4X)(T);
				class P extends w.$3X {
					constructor() {
						super({
							id: m.$Hgc,
							title: {
								value: "Apply Slash Edit",
								original: "Apply Slash Edit",
							},
							f1: !1,
						});
					}
					async run(N, A, R, O, ...B) {
						console.log("SlashEditButtonAction", A, R, O);
						const U = N.get(n.$kgc),
							z = N.get(f.$Nfc),
							F = N.get(d.$qgc),
							x = N.get(o.$$9b),
							H =
								O?.tabId ??
								(U.chatData.selectedTabId || U.chatData.tabs[0].tabId),
							q = U.chatData.tabs.find((J) => J.tabId === H),
							V =
								O?.bubbleId ??
								q?.bubbles
									.slice()
									.reverse()
									.find((J) => J.type === m.BubbleType.AI_CHAT)?.id;
						if (V === void 0 || q?.tabId === void 0) return;
						const G = await F.makeChatRequestParams({
							bubbleID: V,
							chatType: "edit",
							tabID: q.tabId,
							enforceUpUntil: !0,
						});
						if (G?.conversationHistory === void 0) return;
						O?.generationUUID && (G.generationUUID = O.generationUUID);
						const K = z.getModelDetails({ specificModelField: "regular-chat" });
						(K.modelName = "gpt-3.5-turbo"),
							await x.performChatEdit({
								...G,
								source: O?.isBackgroundApply
									? l.FastApplySource.CACHED_APPLY
									: l.FastApplySource.CLICKED_APPLY,
								generationMetadata: {
									...G.generationMetadata,
									isBackground: O?.isBackgroundApply === !0,
								},
								options: {
									...G.options,
									overrideCurrentFileURI: A,
									overrideLineRange: R,
									failSilently: O?.isBackgroundApply === !0,
									overrideModelDetails: O?.use35 ? K : void 0,
									rejectChangesInURI: O?.rejectChangesInURI,
								},
								clickedCodeBlockContents: O?.clickedCodeBlockContents,
								specificInstructions: O?.specificInstructions,
								inlineDiffServiceLookalike: O?.inlineDiffServiceLookalike,
								isBackgroundApply: O?.isBackgroundApply,
								onStreamerCreated: O?.onStreamerCreated,
								existingStreamer: O?.existingStreamer,
								isReapply: O?.isReapply,
							});
					}
				}
				class k extends w.$3X {
					constructor() {
						super({
							id: m.$Igc,
							title: { value: "Warm Fast Apply", original: "Warm Fast Apply" },
							f1: !1,
						});
					}
					async run(N, A, R, ...O) {
						const B = N.get(n.$kgc),
							U = N.get(d.$qgc),
							z = N.get(o.$$9b),
							F =
								R?.tabId ??
								(B.chatData.selectedTabId || B.chatData.tabs[0].tabId),
							x = B.chatData.tabs.find((V) => V.tabId === F),
							H =
								R?.bubbleId ??
								x?.bubbles
									.slice()
									.reverse()
									.find((V) => V.type === m.BubbleType.AI_CHAT)?.id;
						if (H === void 0 || x?.tabId === void 0) return;
						const q = await U.makeChatRequestParams({
							bubbleID: H,
							chatType: "edit",
							tabID: x.tabId,
							enforceUpUntil: !0,
						});
						q?.conversationHistory !== void 0 &&
							(R?.generationUUID && (q.generationUUID = R.generationUUID),
							await z.warmFastApply({
								uri: A,
								conversationHistory: q.conversationHistory,
								generationUUID: R?.generationUUID ?? (0, b.$9g)(),
								source: l.FastApplySource.CACHED_APPLY,
							}));
					}
				}
				class L extends w.$3X {
					constructor() {
						super({
							id: a.$$W,
							title: {
								value: "Start Indexing Listener",
								original: "Start Indexing Listener",
							},
						});
					}
					run(N, A, ...R) {
						N.get(d.$qgc)?.startIndexingListener(A);
					}
				}
				(0, w.$4X)(L), (0, w.$4X)(P), (0, w.$4X)(k);
				class D extends w.$3X {
					constructor() {
						super({
							id: "aichat.fixspecificerrormessage",
							title: {
								value: "Investigate Error",
								original: "Investigate Error",
							},
							f1: !1,
						});
					}
					async run(N, A) {
						const R = N.get(d.$qgc);
						await R.show(),
							await R.focus(),
							(0, u.$ncc)(A) && R?.tryInsertErrorIntoChat(A);
					}
				}
				(0, w.$4X)(D),
					w.$ZX.appendMenuItems([
						{
							id: w.$XX.LayoutControlMenu,
							item: {
								group: "0_workbench_toggles",
								command: {
									id: h.$O5b.ID,
									title: (0, c.localize)(4428, null),
									icon: t.$ak.layoutSidebarLeftOff,
									toggled: { condition: r.$sQb, icon: t.$ak.layoutSidebarLeft },
								},
								when: C.$Kj.and(
									C.$Kj.or(
										C.$Kj.equals(
											"config.workbench.layoutControl.type",
											"toggles",
										),
										C.$Kj.equals("config.workbench.layoutControl.type", "both"),
									),
									C.$Kj.equals("config.workbench.sideBar.location", "right"),
								),
								order: 0,
							},
						},
						{
							id: w.$XX.LayoutControlMenu,
							item: {
								group: "0_workbench_toggles",
								command: {
									id: h.$O5b.ID,
									title: (0, c.localize)(4429, null),
									icon: t.$ak.layoutSidebarRightOff,
									toggled: {
										condition: r.$sQb,
										icon: t.$ak.layoutSidebarRight,
									},
								},
								when: C.$Kj.and(
									C.$Kj.or(
										C.$Kj.equals(
											"config.workbench.layoutControl.type",
											"toggles",
										),
										C.$Kj.equals("config.workbench.layoutControl.type", "both"),
									),
									C.$Kj.equals("config.workbench.sideBar.location", "left"),
								),
								order: 2,
							},
						},
					]);
			},
		),
		