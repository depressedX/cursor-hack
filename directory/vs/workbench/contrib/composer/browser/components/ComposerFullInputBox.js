define(
			de[2013],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 158, 13, 58, 270, 4190, 4206, 4317, 225, 169,
				1727, 1366, 4410, 4193, 4400, 4183, 4152, 36, 2009, 816, 1270, 693, 135,
				620, 573, 298, 4151, 114, 390, 866, 126, 246, 4148, 722, 859, 12, 177,
				858, 14, 47, 1968, 1066, 9, 4157, 1778, 476, 2409,
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
					(e.getDefaultEditorConfig = void 0),
					(e.ComposerFullInputBox = le);
				const ee = (0, t.template)("<div><div>"),
					_ = (0, t.template)('<input type="file" accept="image/*">'),
					te = (0, t.template)("<div>"),
					Q = (0, t.template)(
						'<div><div class="cancel-generation-button composer-float-button"><span></span><span>Cancel generation',
					),
					Z = (0, t.template)(
						'<div><div class="cancel-and-resume-button composer-float-button"><span></span><span>Cancel and resume',
					),
					se = () => ({
						onError(ae) {
							throw ae;
						},
						nodes: [I.$2_b, T.$uac],
					});
				e.getDefaultEditorConfig = se;
				const re = !1;
				function le(oe) {
					const ae = (0, v.$odc)(),
						{ composerDataService: pe, composerService: $e } = ae,
						ye = ae.analyticsService,
						[ue] = (0, F.$B$b)(),
						[fe, me] = (0, r.createSignal)(void 0),
						{
							composerDataHandle: ve,
							currentComposer: ge,
							forceMode: be,
							updateCurrentComposer: Ce,
						} = (0, q.useComposerDataHandle)(() => oe.composerDataHandle),
						Le = (0, r.createMemo)(() => ge().composerId),
						Fe = (0, r.createMemo)(() =>
							oe.nonReactiveInputBoxDelegate
								? oe.nonReactiveInputBoxDelegate
								: $e.getInputDelegate(Le()),
						),
						Oe = (0, r.createMemo)(() => pe.getComposerForceMode(Le())),
						[xe, He] = (0, r.createSignal)(!1),
						[Ke, Je] = (0, r.createSignal)(!1),
						[Te, Ee] = (0, r.createSignal)(!1),
						[Ie, Be] = (0, r.createSignal)(-1),
						[Se, ke] = (0, r.createSignal)(void 0),
						[Ue, qe] = (0, r.createSignal)(!1),
						Ae = (0, r.createMemo)(() =>
							be() === "chat" ? "regular-chat" : "composer",
						),
						Me = (0, r.createMemo)(() =>
							oe.isInputFocused !== void 0 ? oe.isInputFocused() : xe(),
						),
						De = (Oi) => {
							oe.setIsInputFocused ? oe.setIsInputFocused(Oi) : He(Oi);
						},
						Re = (0, r.createMemo)(() => oe.bubbleId),
						je = (Oi) => {
							Re() ? pe.updateComposerBubble(ve(), Re(), Oi) : Ce(Oi);
						},
						Ve = (0, r.createMemo)(() =>
							oe.bubbleId
								? (pe.getComposerBubble(ve(), oe.bubbleId)?.richText ?? "")
								: ge()?.richText,
						),
						Ze = (0, r.createMemo)(() =>
							oe.bubbleId
								? (pe.getComposerBubble(ve(), oe.bubbleId)?.text ?? "")
								: ge()?.text,
						),
						et = (0, r.createMemo)(
							() =>
								!!ae.reactiveStorageService.applicationUserPersistentStorage
									.composerState.unification,
						),
						rt = (0, r.createMemo)(() => !1);
					(0, r.createEffect)(() => {
						const Oi = Ze();
						if (
							Me() &&
							Oi.length > 0 &&
							ae.reactiveStorageService.applicationUserPersistentStorage
								.composerState.useContextBank === !0 &&
							ge().forceMode !== "chat" &&
							ge().isAgentic !== !0
						) {
							const yi = ge().context;
							ae.contextBankService.cacheRankedFiles({
								numberOfChunks: 10,
								composerRequest: {
									conversation: [
										...ge()?.conversation,
										...(Re() === void 0
											? [
													{
														...(0, g.createDefaultConversationMessage)(),
														text: Oi,
														type: B.ConversationMessage_MessageType.HUMAN,
														attachedCodeChunks: yi.fileSelections
															.filter((Ai) => !!Ai)
															.map(
																(Ai) =>
																	new B.$TA({
																		relativeWorkspacePath:
																			ae.workspaceContextService.asRelativePath(
																				X.URI.revive(Ai.uri),
																			),
																	}),
															),
													},
												]
											: []),
									],
								},
								composerId: Le(),
								bubbleId: Re(),
							});
						}
					});
					const ft = (0, r.createMemo)(() => ge()?.tabs),
						bt = (Oi) => {
							Ce({ tabs: Oi });
						},
						nt = (0, r.createMemo)(() => ge()?.selectedTabIndex),
						lt = (Oi) => {
							Ce({ selectedTabIndex: Oi });
						},
						{
							shouldShowSaveAll: ct,
							shouldShowAcceptAll: gt,
							shouldShowRejectAll: ht,
						} = (0, f.useComposerCollectedStatuses)(ve),
						Rt = (0, W.useShouldShowApplyLastMessage)(ve),
						[Nt, jt] = (0, r.createSignal)(null),
						ti = () => {
							Nt()?.update(() => {
								const Oi = (0, m.$getRoot)();
								for (const Ai of Oi.getChildren()) Ai.remove();
								const yi = (0, m.$createParagraphNode)();
								Oi.append(yi), yi.select(), je({ richText: "", text: "" });
							});
						},
						kt = (0, V.useComposerChatStatus)(ve),
						hi = async (Oi) => {
							if (!ue()) {
								ae.cursorAuthenticationService.login(),
									ae.commandService.executeCommand(u.$QV, "general");
								return;
							}
							const yi = ve().clone();
							try {
								let Ai = Ze();
								const li = Re()
									? $e.canComposerSubmit(Le(), Re())
									: $e.canComposerSubmit(Le());
								if (!oe.bubbleId && (!Ai || Ai.trim().length === 0)) {
									const wi = pe.getActionButtons(yi);
									if (wi.length > 0) {
										if (Oi?.keyboardEvent?.altKey) {
											if (
												Oi?.keyboardEvent?.altKey &&
												wi.length > 1 &&
												wi[1].onClick() === !0
											)
												return;
										} else if (wi[0].onClick() === !0) return;
									}
								}
								if (!li) return;
								if (oe.bubbleId) {
									const wi = oe.bubbleId;
									let _t = !1;
									const ai =
										await ae.composerUtilsService.isCheckpointSameAsCurrent(
											yi,
											wi,
										);
									if (be() === "chat") _t = !0;
									else if (!ai && ge().currentBubbleId !== wi) {
										const Ft = await ae.prettyDialogService.openDialog({
											title: "Submit from a previous message?",
											message:
												"Submitting from a previous message will revert file changes to before this message and clear the messages after this one.",
											cancelButton: { id: "cancel", label: "Cancel" },
											primaryButton: {
												id: "continue",
												label: "Continue and revert",
											},
											extraButtons: [
												{
													id: "continue-without-reverting",
													label: "Continue without reverting",
													type: "secondary",
												},
											],
											onCancel: () => {
												Fe().focus();
											},
										});
										if (
											((_t = Ft === "continue-without-reverting"),
											Ft === "cancel")
										)
											return;
									}
									Ce({ editingBubbleId: void 0 }),
										!_t &&
											!ai &&
											(await $e.checkoutToCheckpoint(yi.data.composerId, wi, {
												skipDialog: !0,
											})),
										$e.focus(Le());
								}
								oe.onSubmit && (await oe.onSubmit()),
									ae.aiService.addToPromptHistory({
										prompt: Ai,
										commandType: L.CommandType.COMPOSER,
									});
								const Vi = Ve();
								yi.setData("selectedTabIndex", 1),
									await $e.submitChatMaybeAbortCurrent(yi.data.composerId, Ai, {
										richText: Vi,
										usesCodebase: Oi?.useCodebase,
										bubbleId: Re(),
										mode: Oi?.mode,
									});
							} finally {
								yi.dispose();
							}
						};
					let Kt;
					const di = (0, k.$y0b)();
					let Ye;
					const ze = (0, $.useComposerSupports)({
							composerDataHandle: ve,
							bubbleId: Re,
						}),
						Xe = (0, b.useComposerContextSideEffects)(
							ve,
							ze,
							Re() ? Re : void 0,
						),
						{
							allPills: It,
							selectedPillIndex: Lt,
							setSelectedPillIndex: xt,
							generatePillIdByIndex: Vt,
							deleteLastPill: Bt,
						} = (0, l.useComposerPills)(ve, Xe, {
							filePickerOpen: () => !1,
							handleAddPillClick: () => {},
							barRef: () => Kt,
							inputDelegate: Fe(),
							bubbleId: Re(),
						}),
						Gt = (0, r.createMemo)(() => {
							if (oe.bubbleId) {
								const Oi = pe.getComposerBubble(ve(), oe.bubbleId);
								return !Oi || !Oi.context ? (0, M.$2gc)() : Oi.context;
							}
							return ge().context;
						}),
						{ suggestedPills: Mt } = (0, N.useComposerSuggestedPills)(
							ve,
							Gt,
							Re(),
							() => oe.disableSuggestedPills ?? !1,
						);
					(0, r.createEffect)(() => {
						const Oi = ge().composerId;
						Ee(!0);
					}),
						(0, r.createEffect)(() => {
							(0, r.onMount)(() => {
								const Oi = $e.onContextRemoved((wi) => {
										const {
											composerId: _t,
											bubbleId: ai,
											removedMentionIds: Ft,
										} = wi;
										_t !== ve().data.composerId || ai !== Re() || ke(Ft);
									}),
									yi = $e.onDidReset((wi) => {
										const { composerId: _t } = wi;
										if (_t !== Le()) return;
										const ai = ge().richText,
											Ft = ge().text;
										!ai && !Ft && Ee(!0),
											xt(-1),
											lt(0),
											bt((0, g.createEmptyComposerTabs)());
									}),
									Ai = $e.onShouldShowPreview((wi) => {
										const {
											composerId: _t,
											bubbleId: ai,
											contextType: Ft,
											index: Xt,
										} = wi;
										if (_t !== ve().data.composerId || ai !== Re()) return;
										const $t = It();
										let ut;
										Xt !== void 0
											? (ut = $t.findIndex((Tt) => Tt.type === D.$ebc[Ft]) + Xt)
											: (ut = $t.findIndex((Et) => Et.type === D.$ebc[Ft])),
											ut !== void 0 && ut !== -1 && Be(ut);
									}),
									li = $e.onShouldForceText((wi) => {
										const { composerId: _t, bubbleId: ai } = wi;
										_t !== Le() || ai !== Re() || Ee(!0);
									}),
									Vi = $e.onShouldClearLexical(
										({ composerId: wi, bubbleId: _t }) => {
											if (wi !== Le()) return;
											const ai = Re();
											(!ai || ai === _t) && ti();
										},
									);
								(0, r.onCleanup)(() => {
									Oi.dispose(),
										yi.dispose(),
										Ai.dispose(),
										li.dispose(),
										Vi.dispose();
								});
							});
						});
					const Ut = (0, r.createMemo)(() =>
							oe.bubbleId
								? (pe.getComposerBubble(ve(), oe.bubbleId)?.context ??
									(0, M.$2gc)())
								: ge().context,
						),
						ei = (...Oi) => {
							Re()
								? ve().setData(
										"conversation",
										(yi) => yi.bubbleId === Re(),
										"context",
										...Oi,
									)
								: ve().setData("context", ...Oi);
						};
					(0, o.useAutoHorizontalScroll)(
						di,
						() => Ye,
						() => Vt(Lt(), It()[Lt()]),
						() => [Lt()],
					);
					const mi = (0, P.$A$b)(() => Kt, { width: 1e3, height: 0 }),
						ii = (0, s.useComposerPickerMenuProps)(ve, Re() ? Re : void 0),
						Dt = (0, y.useComposerPlaceholder)(
							() => mi().width,
							ve,
							() => !!oe.bubbleId,
						),
						[Jt] = (0, a.$K0b)(u.$FW, ae.configurationService, !1),
						si = (0, r.createMemo)(
							() => `f${ge().composerId.replaceAll("-", "")}modeltoggle`,
						),
						Zt = (0, J.useCachedChatUsesTools)(),
						ci = () => {
							const Oi = Ve(),
								yi = Ze(),
								Ai = ge().conversation.length === 0;
							ae.composerDataService.updateComposerData(Le(), {
								richText: "",
								text: "",
							});
							const li = Ai ? void 0 : { richText: Oi, text: yi };
							return (
								$e.createComposer({
									forceMode: ae.composerDataService.getComposerForceMode(Le()),
									partialState: li,
								}),
								!0
							);
						},
						ri = [
							{
								command: m.KEY_DOWN_COMMAND,
								callback: (Oi) => {
									const yi = new A.$7fb(Oi),
										Ai = ae.keybindingService.softDispatch(yi, yi.target),
										li = [
											"workbench.action.toggleSidebarVisibility",
											p.COMPOSER_EDIT_ACTION_ID,
											p.NEW_COMPOSER_CHAT_ACTION_ID,
											O.$mbc,
											p.NEW_CHAT_FOLLOW_UP_ACTION_ID,
											p.SHOW_COMPOSER_CHAT_HISTORY_ACTION_ID,
											p.SHOW_COMPOSER_HISTORY_ACTION_ID,
										];
									return Ai.kind === R.ResultKind.KbFound &&
										li.includes(Ai.commandId)
										? (setTimeout(() => {
												ae.commandService.executeCommand(Ai.commandId);
											}, 0),
											!0)
										: !1;
								},
							},
							{
								command: m.KEY_COMMAND_I_COMMAND,
								callback: (Oi) => (
									Oi.altKey && $e.maybeUpdateFileSelectionsFromCmdI(Le()), !0
								),
							},
							{
								command: m.KEY_COMMAND_D_COMMAND,
								callback: (Oi) => {
									if (ge().forceMode === "chat") return !1;
									const yi = ae.composerViewsService.getComposerLocation(Le()),
										Ai = ["pane", "bar", "editor"],
										li = Ai[(Ai.indexOf(yi) + 1) % Ai.length];
									return (
										li === "pane"
											? $e.handleOpenComposerPane(Le())
											: li === "bar"
												? $e.handleOpenComposerBar(Le())
												: li === "editor" && $e.handleOpenComposerEditor(Le()),
										!0
									);
								},
							},
							{
								command: m.KEY_COMMAND_SHIFT_K_COMMAND,
								callback: (Oi) =>
									be() === "chat"
										? !1
										: (ae.commandService.executeCommand(
												p.OPEN_COMPOSER_AS_BAR_ACTION_ID,
											),
											!0),
							},
							{
								command: m.KEY_COMMAND_DOT_COMMAND,
								callback: (Oi) => {
									if (Oe() === "edit" || Zt()) {
										if (
											!ae.reactiveStorageService
												.applicationUserPersistentStorage.composerState
												.unification
										) {
											if (pe.getHasAgenticBeforeBubble(Le(), oe.bubbleId))
												return !1;
											const Xt = !ge().isAgentic;
											return (
												ae.composerDataService.updateComposerData(Le(), {
													isAgentic: Xt,
												}),
												Xt &&
													ae.reactiveStorageService.setApplicationUserPersistentStorage(
														"composerState",
														"isAutoApplyEnabled",
														!0,
													),
												ae.reactiveStorageService.setApplicationUserPersistentStorage(
													"composerState",
													"defaultUseToolsInEdit",
													Xt,
												),
												!0
											);
										}
										if (Oi.altKey) {
											const Ft = ae.window.document.getElementById(
												(0, U.getAgenticModeToggleButtonId)(ge().composerId),
											);
											if (Ft) return Ft.click(), !0;
										}
										const yi = !!ge().isAgentic,
											Ai =
												ae.reactiveStorageService
													.applicationUserPersistentStorage.composerState
													.isAutoApplyEnabled,
											li = yi ? "agent" : Ai ? "edit" : "chat",
											Vi = ["chat", "edit", "agent"],
											wi =
												Vi[
													(Vi.indexOf(li) +
														(Oi.shiftKey ? -1 : 1) +
														Vi.length) %
														Vi.length
												];
										let _t = !1,
											ai = !1;
										wi === "chat"
											? ((_t = !1), (ai = !1))
											: wi === "edit"
												? ((_t = !0), (ai = !1))
												: wi === "agent" && ((_t = !0), (ai = !0)),
											ae.reactiveStorageService.setApplicationUserPersistentStorage(
												"composerState",
												"isAutoApplyEnabled",
												_t,
											),
											ae.reactiveStorageService.setApplicationUserPersistentStorage(
												"composerState",
												"defaultUseToolsInEdit",
												ai,
											),
											Ce({ isAgentic: ai });
									}
									return !1;
								},
							},
							{
								command: m.KEY_COMMAND_S_COMMAND,
								callback: () => (ct() ? ($e.saveAll(Le()), !0) : !1),
							},
							{
								command: m.KEY_COMMAND_N_COMMAND,
								callback: (Oi) => (Oi.shiftKey ? !1 : ci()),
							},
							{
								command: m.KEY_COMMAND_W_COMMAND,
								callback: (Oi) => ($e.close(Le()), !0),
							},
							{
								command: m.KEY_COMMAND_L_COMMAND,
								callback: (Oi) =>
									Oi.shiftKey
										? (ae.commandService.executeCommand(O.$mbc), !0)
										: !1,
							},
							{
								command: m.KEY_TAB_COMMAND,
								callback: (Oi) => {
									const yi = ge();
									if (!yi) return !1;
									const Ai = oe.bubbleId,
										li = oe.bubbleId
											? yi.conversation.findIndex((wi) => wi.bubbleId === Ai)
											: -1,
										Vi = (wi) => {
											Ce({ selectedBubbleId: void 0, editingBubbleId: wi }),
												(0, U.focusBubble)(wi),
												setTimeout(() => {
													$e.getPrevEditingBubbleInputDelegate(Le())?.focus();
												});
										};
									if (Oi.shiftKey) {
										const wi = li === -1 ? yi.conversation.length - 1 : li - 1;
										for (let _t = wi; _t >= 0; _t--) {
											const ai = yi.conversation[_t];
											if (
												ai.type === B.ConversationMessage_MessageType.HUMAN &&
												!ai.isCapabilityIteration
											)
												return Vi(ai.bubbleId), !0;
										}
										return !1;
									}
									if (li !== -1) {
										for (let wi = li + 1; wi < yi.conversation.length; wi++) {
											const _t = yi.conversation[wi];
											if (
												_t.type === B.ConversationMessage_MessageType.HUMAN &&
												!_t.isCapabilityIteration
											)
												return Vi(_t.bubbleId), !0;
										}
										return (
											Ce({ selectedBubbleId: void 0, editingBubbleId: void 0 }),
											$e.focus(Le(), !0),
											!0
										);
									}
									return !1;
								},
							},
							{
								command: m.KEY_COMMAND_LEFT_BRACKET_COMMAND,
								callback: () => (
									Oe() === "chat"
										? ae.composerUtilsService.selectPrevComposerChat()
										: ae.composerUtilsService.selectPrevComposer(),
									setTimeout(() => {
										ae.composerViewsService.focus(
											Oe() === "chat"
												? pe.selectedChatId
												: pe.selectedComposerId,
											!0,
										);
									}),
									!0
								),
							},
							{
								command: m.KEY_COMMAND_RIGHT_BRACKET_COMMAND,
								callback: () => (
									Oe() === "chat"
										? ae.composerUtilsService.selectNextComposerChat()
										: ae.composerUtilsService.selectNextComposer(),
									setTimeout(() => {
										ae.composerViewsService.focus(
											Oe() === "chat"
												? pe.selectedChatId
												: pe.selectedComposerId,
											!0,
										);
									}),
									!0
								),
							},
						],
						$i = (0, r.createMemo)(() =>
							ae.composerDataService.getPendingUserDecisionGroup(
								ve().data.composerId,
							),
						),
						Wt = (0, r.createMemo)(() =>
							ae.composerDataService.getHasAgenticBeforeBubble(
								ve().data.composerId,
								oe.bubbleId,
							),
						),
						tt = (0, r.createMemo)(() => !1),
						at = (0, r.createMemo)(
							() =>
								ae.reactiveStorageService.applicationUserPersistentStorage
									.composerState.isAutoApplyEnabled || ge().isAgentic,
						),
						pi = (0, r.createMemo)(() =>
							be() === "chat"
								? ae.reactiveStorageService.applicationUserPersistentStorage
										.aiSettings.regularChatModel
								: ae.reactiveStorageService.applicationUserPersistentStorage
										.aiSettings.composerModel,
						),
						Li = (0, C.createComponent)(x.$3bc, {
							get anchor() {
								return et() ? "top-right" : "top-left";
							},
							get specificModelField() {
								return Ae();
							},
							buttonHint: `${H.$m ? "\u2318\u2325/ " : "ctrl+alt+/ "}open menu`,
							get style() {
								return {
									color: "var(--vscode-input-placeholderForeground)",
									padding: "0px",
									"max-width": tt() ? "100px" : void 0,
								};
							},
							onSelect: () => {},
							onOpen: () => {
								Je(!0);
							},
							onClose: () => {
								Fe().focus(),
									De(!0),
									Je(!1),
									$e.handleUserUsedFilePicker(ve().data.composerId);
							},
							setTriggerFn: (Oi) => {
								me(() => Oi);
							},
							get buttonId() {
								return si();
							},
						}),
						Di = (0, C.createComponent)(S.$Vbc, {
							get id() {
								return `${ge().composerId}-pane`;
							},
							get allowCmdPFilePicker() {
								return oe.allowCmdPFilePicker;
							},
							makeCmdPAlt: !0,
							setContainerRef: (Oi) => {
								(Kt = Oi), oe.setRef?.(Oi);
							},
							allPills: It,
							suggestedPills: Mt,
							mentionIdsToDelete: Se,
							setMentionIdsToDelete: ke,
							setCodebaseSearchSettings: (Oi) => {
								Ce({ codebaseSearchSettings: Oi });
							},
							getCodebaseSearchSettings: () => ge().codebaseSearchSettings,
							getContext: Ut,
							setContext: ei,
							get forceText() {
								return Te();
							},
							setForceText: Ee,
							getPickerMenuProps: ii,
							get richText() {
								return Ve();
							},
							setRichText: (Oi) => {
								je({ richText: Oi });
							},
							get text() {
								return Ze();
							},
							setText: (Oi) => {
								je({ text: Oi }), $e.handleUserDidType(ve().data.composerId);
							},
							sideEffects: Xe,
							supports: ze,
							onFurtherArrowUp: () => (
								pe.selectLastHumanBubbleAboveInput(ve().data.composerId), !0
							),
							onFurtherArrowDown: () =>
								oe.location === "bar"
									? !1
									: !oe.bubbleId &&
											oe.setSelectedPreviousComposerIndex &&
											ge().conversation.length === 0
										? (Fe().getRef()?.blur(),
											oe.setSelectedPreviousComposerIndex(0),
											!0)
										: !1,
							get topContent() {
								return (0, d.memo)(() => !oe.disableImagesList)()
									? (0, C.createComponent)(c.ComposerInputImages, {
											get composerDataHandle() {
												return ve();
											},
											onRemove: (Oi) => {
												$e.removeContext({
													composerId: ve().data.composerId,
													contextType: "selectedImages",
													index: Oi,
												}),
													Fe().focus();
											},
										})
									: void 0;
							},
							get shouldDisplayMultiRowPills() {
								return (0, d.memo)(() => oe.overrideShouldCollapse !== void 0)()
									? !oe.overrideShouldCollapse
									: !Jt();
							},
							get style() {
								return {
									contain: "unset",
									background: "var(--vscode-input-background)",
									transition:
										"box-shadow 0.1s ease-in-out, border-color 0.1s ease-in-out",
									...oe.style,
								};
							},
							get role() {
								return (
									oe.role ?? (ge().conversation.length === 0 ? "top" : "bottom")
								);
							},
							bottomContainerStyle: { height: "unset" },
							get bottomContent() {
								return (0, d.memo)(() => !!oe.hideBottomBar)()
									? void 0
									: (() => {
											const Oi = ee(),
												yi = Oi.firstChild;
											return (
												Oi.style.setProperty("flex", "1"),
												Oi.style.setProperty("width", "100%"),
												Oi.style.setProperty("height", "100%"),
												Oi.style.setProperty("display", "flex"),
												Oi.style.setProperty("align-items", "center"),
												Oi.style.setProperty("flex-shrink", "0"),
												Oi.style.setProperty("flex-direction", "column"),
												Oi.style.setProperty("gap", "4px"),
												yi.addEventListener("click", (Ai) => {
													Ai.target === Ai.currentTarget &&
														!ae.window.getSelection()?.toString() &&
														Fe().focus();
												}),
												yi.style.setProperty("display", "flex"),
												yi.style.setProperty("align-items", "center"),
												yi.style.setProperty(
													"justify-content",
													"space-between",
												),
												yi.style.setProperty("gap", "0.25rem"),
												yi.style.setProperty("flex-shrink", "0"),
												yi.style.setProperty("width", "100%"),
												(0, E.insert)(
													yi,
													(0, C.createComponent)(r.Show, {
														get when() {
															return ue() && !re;
														},
														get fallback() {
															return (0, C.createComponent)(
																z.ComposerLoginButton,
																{},
															);
														},
														get children() {
															return (0, C.createComponent)(
																h.ComposerBottomBar,
																{
																	get bubbleId() {
																		return oe.bubbleId;
																	},
																	get shouldShowAgentic() {
																		return mi().width > 120;
																	},
																	get showCancelledWhenGenerating() {
																		return oe.role === "bottom";
																	},
																	get bottomLeftContent() {
																		return (() => {
																			const Ai = te();
																			return (
																				Ai.addEventListener("mouseup", (li) => {
																					li.target === li.currentTarget &&
																						!ae.window
																							.getSelection()
																							?.toString() &&
																						Fe().focus();
																				}),
																				Ai.addEventListener(
																					"mousedown",
																					(li) => {
																						oe.location === "bar" &&
																							li.target === li.currentTarget &&
																							oe.onStartDrag?.(li);
																					},
																				),
																				Ai.style.setProperty("display", "flex"),
																				Ai.style.setProperty(
																					"align-items",
																					"center",
																				),
																				Ai.style.setProperty("gap", "6px"),
																				Ai.style.setProperty(
																					"padding-left",
																					"0px",
																				),
																				Ai.style.setProperty(
																					"padding-right",
																					"4px",
																				),
																				Ai.style.setProperty("width", "100%"),
																				(0, E.insert)(
																					Ai,
																					(0, C.createComponent)(r.Show, {
																						get when() {
																							return !et();
																						},
																						children: Li,
																					}),
																					null,
																				),
																				(0, E.insert)(
																					Ai,
																					(0, C.createComponent)(r.Show, {
																						get when() {
																							return tt();
																						},
																						get children() {
																							return (0, C.createComponent)(
																								ie.ComposerBottomBarButton,
																								{
																									get icon() {
																										return at()
																											? G.$ak.symbolMethod
																											: G.$ak.commentDiscussion;
																									},
																									type: "secondary",
																									get codiconStyle() {
																										return {
																											color: at()
																												? "var(--vscode-symbolIcon-methodForeground)"
																												: "var(--vscode-input-placeholderForeground)",
																										};
																									},
																									hintText: `In edit mode, composer will modify your files directly (${H.$m ? "\u2318E" : "ctrl+e"})`,
																									get title() {
																										return (0, d.memo)(
																											() => mi().width > 180,
																										)()
																											? at()
																												? "edit"
																												: "chat"
																											: void 0;
																									},
																									onClick: (li) => {
																										if (
																											!(ge().isAgentic && Wt())
																										) {
																											if (
																												ge().isAgentic &&
																												ae
																													.reactiveStorageService
																													.applicationUserPersistentStorage
																													.composerState
																													.isAutoApplyEnabled
																											) {
																												Ce({ isAgentic: !1 }),
																													ae.reactiveStorageService.setApplicationUserPersistentStorage(
																														"composerState",
																														"isAutoApplyEnabled",
																														!1,
																													);
																												return;
																											}
																											ae.reactiveStorageService.setApplicationUserPersistentStorage(
																												"composerState",
																												"isAutoApplyEnabled",
																												!ae
																													.reactiveStorageService
																													.applicationUserPersistentStorage
																													.composerState
																													.isAutoApplyEnabled,
																											);
																										}
																									},
																									get style() {
																										return {
																											transition:
																												"opacity 0.0s, padding 0.1s ease-in-out",
																											padding: "0px",
																											color: at()
																												? "var(--vscode-symbolIcon-methodForeground)"
																												: "var(--vscode-input-placeholderForeground)",
																										};
																									},
																								},
																							);
																						},
																					}),
																					null,
																				),
																				(0, E.insert)(
																					Ai,
																					(0, C.createComponent)(r.Show, {
																						get when() {
																							return (
																								pi() === "gpt-4" ||
																								pi() === "gpt-4o" ||
																								pi() === "claude-3.5-sonnet" ||
																								pi() === "gpt-4o-mini"
																							);
																						},
																						get children() {
																							return (0, C.createComponent)(
																								ie.ComposerBottomBarButton,
																								{
																									get icon() {
																										return G.$ak.image;
																									},
																									get title() {
																										return mi().width > 240
																											? "image"
																											: void 0;
																									},
																									onClick: (li) => {
																										const Vi =
																											li.currentTarget.querySelector(
																												"input[type=file]",
																											);
																										Vi && Vi.click();
																									},
																									type: "secondary",
																									style: { padding: "0px" },
																									get children() {
																										const li = _();
																										return (
																											li.addEventListener(
																												"change",
																												(Vi) => {
																													const wi =
																														Vi.target
																															.files?.[0];
																													if (
																														!wi ||
																														!wi.type.startsWith(
																															"image/",
																														)
																													)
																														return;
																													const _t =
																														new Image();
																													(_t.src =
																														URL.createObjectURL(
																															wi,
																														)),
																														(_t.onload = () => {
																															Xe().addImage(
																																(0, K.$9g)(),
																																{
																																	path: wi.path,
																																	dimension: {
																																		width:
																																			_t.width,
																																		height:
																																			_t.height,
																																	},
																																	loadedAt:
																																		Date.now(),
																																},
																															),
																																Fe().focus();
																														});
																												},
																											),
																											li.style.setProperty(
																												"display",
																												"none",
																											),
																											li
																										);
																									},
																								},
																							);
																						},
																					}),
																					null,
																				),
																				Ai
																			);
																		})();
																	},
																	get composerDataHandle() {
																		return ve();
																	},
																	get role() {
																		return oe.role;
																	},
																	get isCmdPressed() {
																		return Ue();
																	},
																	get isFocused() {
																		return (0, d.memo)(() => !!Me())() && !Ke();
																	},
																	onSubmit: hi,
																	get plainText() {
																		return Ze();
																	},
																	onContainerClick: () => {
																		Fe().focus();
																	},
																	onEscape: () => {
																		oe.onEscape && oe.onEscape();
																	},
																	get shouldShowHints() {
																		return mi().width > 260;
																	},
																	style: {
																		flex: 1,
																		"justify-content": "space-between",
																	},
																	get bottomRightExtraContent() {
																		return (0, C.createComponent)(r.Show, {
																			get when() {
																				return (
																					(0, d.memo)(
																						() => mi().width > 250,
																					)() && et()
																				);
																			},
																			children: Li,
																		});
																	},
																},
															);
														},
													}),
												),
												Oi
											);
										})();
							},
							get placeholder() {
								return Dt();
							},
							get undoRedoUri() {
								return $e.getUndoRedoUri(ve().data.composerId, Re());
							},
							onFocus: () => {
								xt(-1),
									De(!0),
									Re()
										? Ce({ lastFocusedBubbleId: Re() })
										: Ce({ lastFocusedBubbleId: void 0 });
							},
							onBlur: () => {
								oe.onBlur && oe.onBlur(), De(!1);
							},
							onSubmit: (Oi) => {
								ye.trackEvent("composer.submit", {
									mode: ae.composerDataService.getComposerForceMode(Le()),
									entry: "keyboard",
									useCodebase: !1,
									isAgentic: ge().isAgentic ?? !1,
									isEditing:
										ae.reactiveStorageService.applicationUserPersistentStorage
											.composerState.isAutoApplyEnabled ?? !1,
								}),
									hi({
										useCodebase: !1,
										mode: ae.composerDataService.getComposerForceMode(Le()),
										keyboardEvent: Oi,
									});
							},
							onEscape: (Oi) => {
								Oi.stopImmediatePropagation(),
									Oi.preventDefault(),
									oe.onEscape
										? oe.onEscape()
										: oe.location === "bar"
											? $e.close(Le())
											: $e.blur(Le());
							},
							get inputBoxDelegate() {
								return Fe();
							},
							setEditor: (Oi) => {
								jt(Oi), oe.setLexicalEditor?.(Oi);
							},
							onTryDeleteContext: Bt,
							onReset: ci,
							onResetContext: () => {
								$e.resetContext(ve().data.composerId, Re());
							},
							get forceShouldShowPillPreview() {
								return Ie();
							},
							resetForceShouldShowPillPreview: () => Be(-1),
							onReferenceOpenEditors: () => {
								ae.composerService.referenceOpenEditors(Le());
							},
							get selectPillSignal() {
								return ge().selectInputBoxPillSignal;
							},
							turnOffSelectPillSignal: () => {
								Ce({ selectInputBoxPillSignal: void 0 });
							},
							get selectSuggestedPillSignal() {
								return ge().selectInputBoxSuggestedPillSignal;
							},
							turnOffSelectSuggestedPillSignal: () => {
								Ce({ selectInputBoxSuggestedPillSignal: void 0 });
							},
							get extraPlugins() {
								return [(0, C.createComponent)(n.ComposerArrowPlugin, {})];
							},
							get extraCommandListeners() {
								return [
									...ri,
									{
										command: m.KEY_COMMAND_E_COMMAND,
										callback: (Oi) =>
											et()
												? ge().isAgentic
													? ae.composerDataService.getHasAgenticBeforeBubble(
															ge().composerId,
															oe.bubbleId,
														)
														? !1
														: (Ce({ isAgentic: !1 }),
															ae.reactiveStorageService.setApplicationUserPersistentStorage(
																"composerState",
																"isAutoApplyEnabled",
																!1,
															),
															!0)
													: (ae.reactiveStorageService.setApplicationUserPersistentStorage(
															"composerState",
															"isAutoApplyEnabled",
															!ae.reactiveStorageService
																.applicationUserPersistentStorage.composerState
																.isAutoApplyEnabled,
														),
														!0)
												: !1,
									},
									{
										command: m.KEY_COMMAND_ENTER_COMMAND,
										callback: (Oi) => {
											if (Oi.repeat) return !0;
											if (Oi.shiftKey && (Oi.metaKey || Oi.ctrlKey)) {
												if (
													$e.shouldShowAcceptRejectAll(Le()) &&
													Rt() &&
													Ze().trim() === ""
												)
													return $e.acceptAll(Le()), !0;
												if (Wi()) {
													const Ai = ae.composerDataService.getToolFormer(Le());
													if (Ai) return Ai.cancel(), !0;
												}
												return !1;
											}
											const yi = $i();
											if (yi.length > 0) for (const Ai of yi) Ai.accept();
											else
												Rt() && Ze().trim() === ""
													? $e.applyCachedCodeBlocksOfLastMessage(Le())
													: gt() && Ze().trim() === ""
														? $e.acceptAll(Le())
														: ((Oe() === "edit" || Zt()) &&
																(ae.composerDataService.updateComposerData(
																	ge().composerId,
																	{ isAgentic: !0 },
																),
																ae.reactiveStorageService.setApplicationUserPersistentStorage(
																	"composerState",
																	"defaultUseToolsInEdit",
																	!0,
																)),
															hi({ useCodebase: Oe() !== "edit" }));
											return !0;
										},
									},
									{
										command: m.KEY_BACKSPACE_DELETE_COMMAND,
										callback: (Oi) => {
											const yi = Ze(),
												Ai = Nt();
											return yi.length && (!Ai || !(0, ne.$Iac)(Ai))
												? !1
												: ae.composerUtilsService.shouldShowCancel(Le())
													? ($e.cancelCurrentStep(Le()), !0)
													: ht()
														? ($e.rejectAll(Le()), !0)
														: !1;
										},
									},
									{
										command: m.KEY_COMMAND_SLASH_COMMAND,
										callback: (Oi) => {
											if (Oi.altKey) {
												const yi = ae.window.document.getElementById(si());
												if (yi) return yi.click(), !0;
											}
											return (
												ae.commandService.executeCommand(u.$9V, {
													specificModelField: Ae(),
												}),
												Oi.stopPropagation(),
												!0
											);
										},
									},
									...(oe.location === "bar"
										? [
												{
													command: m.KEY_COMMAND_ARROW_DOWN_COMMAND,
													callback: (Oi) =>
														Oi.shiftKey
															? (ae.reactiveStorageService.setWorkspaceUserPersistentStorage(
																	"composerState",
																	"composerBarPosition",
																	null,
																),
																!0)
															: !1,
												},
											]
										: []),
								];
							},
							get maxHeight() {
								return oe.maxHeight;
							},
							get minHeight() {
								return oe.minHeight;
							},
							get disablePreview() {
								return oe.disablePreview;
							},
							setIsCmdPressed: (Oi) => {
								qe(Oi);
							},
							get shouldMergeSuggestedPillsWithAllPills() {
								return oe.shouldMergeSuggestedPillsWithAllPills;
							},
							get buttonArea() {
								return oe.buttonArea;
							},
							get onStartDrag() {
								return oe.location === "bar" ? oe.onStartDrag : void 0;
							},
							get children() {
								return oe.children;
							},
						}),
						Ui = (0, r.createMemo)(() => {
							const Oi = ge();
							return Oi
								? Oi.status === "generating" && Oi.conversation.length > 0
								: !1;
						}),
						Wi = (0, Y.useShouldShowCancelAndResume)(ve),
						Gi = {
							"box-shadow": "0 4px 8px var(--vscode-inlineChat-shadow)",
							background: "var(--vscode-editor-background)",
							position: "absolute",
							bottom: "100%",
							"margin-bottom": "16px",
							left: "50%",
							"z-index": 1e3,
							transform: "translateX(-50%)",
							"border-radius": "0.25rem",
							width: "fit-content",
							display: "flex",
							"align-items": "center",
							"max-width": "calc(100% - 32px)",
						},
						qi = {
							padding: "2px 4px",
							transition: "100ms",
							"border-radius": "0.25rem",
							cursor: "pointer",
							"margin-left": "auto",
							"margin-right": "auto",
							"text-align": "center",
							"font-size": "12px",
							"flex-shrink": 0,
							gap: "4px",
							display: "flex",
							"align-items": "center",
							"white-space": "nowrap",
							overflow: "hidden",
							"text-overflow": "ellipsis",
						};
					return (() => {
						const Oi = te();
						return (
							(0, E.insert)(Oi, () => oe.aboveContent, null),
							(0, E.insert)(Oi, Di, null),
							(0, E.insert)(
								Oi,
								(0, C.createComponent)(r.Show, {
									get when() {
										return rt();
									},
									get children() {
										const yi = te();
										return (
											(0, E.insert)(
												yi,
												(0, C.createComponent)(x.$3bc, {
													get specificModelField() {
														return Ae();
													},
													buttonHint: `${H.$m ? "\u2318\u2325/ " : "ctrl+alt+/ "}open menu`,
													style: {
														color: "var(--vscode-input-placeholderForeground)",
														padding: "0px",
													},
													onSelect: () => {},
													onOpen: () => {
														Je(!0);
													},
													onClose: () => {
														Fe().focus(),
															De(!0),
															Je(!1),
															$e.handleUserUsedFilePicker(ve().data.composerId);
													},
													setTriggerFn: (Ai) => {
														me(() => Ai);
													},
													get buttonId() {
														return si();
													},
												}),
											),
											(0, w.effect)((Ai) =>
												(0, i.style)(
													yi,
													{
														display: "flex",
														"align-items": "center",
														"justify-content": "flex-end",
														gap: "4px",
														padding: "0px 6px",
														"margin-top": "6px",
														...oe.belowContentStyle,
													},
													Ai,
												),
											),
											yi
										);
									},
								}),
								null,
							),
							(0, E.insert)(
								Oi,
								(0, C.createComponent)(r.Show, {
									get when() {
										return Ui() && !Wi() && !oe.bubbleId;
									},
									get children() {
										const yi = Q(),
											Ai = yi.firstChild,
											li = Ai.firstChild,
											Vi = li.nextSibling;
										return (
											(0, i.style)(yi, Gi),
											Ai.addEventListener("click", () => {
												ae.composerService.cancelChat(ve().data.composerId);
											}),
											(0, i.style)(Ai, qi),
											(0, E.insert)(li, () => (0, U.getShortcut)("\u232B")),
											Vi.style.setProperty("flex-shrink", "0"),
											yi
										);
									},
								}),
								null,
							),
							(0, E.insert)(
								Oi,
								(0, C.createComponent)(r.Show, {
									get when() {
										return Wi();
									},
									get children() {
										const yi = Z(),
											Ai = yi.firstChild,
											li = Ai.firstChild,
											Vi = li.nextSibling;
										return (
											(0, i.style)(yi, Gi),
											Ai.addEventListener("click", () => {
												const wi = ae.composerDataService.getToolFormer(Le());
												wi && wi.cancel();
											}),
											(0, i.style)(Ai, qi),
											(0, E.insert)(li, () =>
												(0, U.getShortcut)("\u21E7\u23CE"),
											),
											Vi.style.setProperty("flex-shrink", "0"),
											yi
										);
									},
								}),
								null,
							),
							(0, w.effect)((yi) =>
								(0, i.style)(
									Oi,
									{
										display: "flex",
										"flex-direction": "column",
										"align-items": "stretch",
										"justify-content": "center",
										position: "relative",
										...oe.containerStyle,
									},
									yi,
								),
							),
							Oi
						);
					})();
				}
			},
		),
		