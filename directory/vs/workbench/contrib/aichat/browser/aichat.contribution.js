define(de[4409], he([1, 0, 4408]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		define(
			de[4410],
			he([1, 0, 13, 36, 2011, 298]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.useComposerContextSideEffects = void 0);
				const C = (d, m, r) => {
					const u = (0, i.$odc)(),
						{ composerService: a, composerDataService: h } = u,
						c = (0, t.createMemo)(() => {
							if (r)
								return h.getComposerBubble(d(), r())?.context ?? (0, E.$2gc)();
							const o = d().data;
							if (!o)
								throw new Error("[composer] No current composer available");
							return o.context;
						}),
						n = (o, f, b, s) => {
							r
								? a.addBubbleContext({
										composerId: d().data.composerId,
										bubbleId: r(),
										contextType: o,
										value: f,
										uuid: b,
										addToUndoRedo: s,
									})
								: a.addContext({
										composerId: d().data.composerId,
										contextType: o,
										value: f,
										uuid: b,
										addToUndoRedo: s,
									});
						},
						g = (o, f, b) => {
							r
								? a.removeBubbleContext({
										composerId: d().data.composerId,
										bubbleId: r(),
										contextType: o,
										index: f,
										addToUndoRedo: b,
									})
								: a.removeContext({
										composerId: d().data.composerId,
										contextType: o,
										index: f,
										addToUndoRedo: b,
									});
						},
						p = (o) => {
							r
								? a.removeBubbleMention(d().data.composerId, r(), o)
								: a.removeMention(d().data.composerId, o);
						};
					return (0, w.$bbc)(n, g, p, m, c);
				};
				e.useComposerContextSideEffects = C;
			},
		),
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
		define(
			de[4411],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 126, 14, 23, 26, 9, 2013, 4318,
				169, 311, 246, 36, 476, 573, 1385, 2008, 4273, 177, 331, 123, 4279,
				2412,
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
		),
		define(
			de[4412],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 158, 13, 126, 167, 7, 14, 58, 12,
				26, 38, 862, 242, 1072, 863, 270, 4398, 4275, 4411, 4280, 485, 225, 169,
				794, 858, 177, 1969, 4155, 246, 36, 135, 147, 312, 2415,
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
		define(
			de[4413],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 13, 7, 123, 4277, 2013, 4278, 4412, 4288,
				177, 36, 331, 216, 1370, 485, 14, 169, 58, 693, 50, 858, 565, 1125, 663,
				2416,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerPane = F);
				const N = (0, t.template)("<div>"),
					A = (0, t.template)("<div><div>Composer"),
					R = (0, t.template)('<div class="conversations"><div>'),
					O = (0, t.template)('<div tabindex="0">');
				function B() {
					var x =
							typeof SuppressedError == "function"
								? SuppressedError
								: function (G, K) {
										var J = Error();
										return (
											(J.name = "SuppressedError"),
											(J.error = G),
											(J.suppressed = K),
											J
										);
									},
						H = {},
						q = [];
					function V(G, K) {
						if (K != null) {
							if (Object(K) !== K)
								throw new TypeError(
									"using declarations can only be used with objects, functions, null, or undefined.",
								);
							if (G)
								var J =
									K[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
							if (
								J === void 0 &&
								((J = K[Symbol.dispose || Symbol.for("Symbol.dispose")]), G)
							)
								var W = J;
							if (typeof J != "function")
								throw new TypeError("Object is not disposable.");
							W &&
								(J = function () {
									try {
										W.call(K);
									} catch (X) {
										return Promise.reject(X);
									}
								}),
								q.push({ v: K, d: J, a: G });
						} else G && q.push({ d: K, a: G });
						return K;
					}
					return {
						e: H,
						u: V.bind(null, !1),
						a: V.bind(null, !0),
						d: function () {
							var G,
								K = this.e,
								J = 0;
							function W() {
								for (; (G = q.pop()); )
									try {
										if (!G.a && J === 1)
											return (J = 0), q.push(G), Promise.resolve().then(W);
										if (G.d) {
											var Y = G.d.call(G.v);
											if (G.a) return (J |= 2), Promise.resolve(Y).then(W, X);
										} else J |= 1;
									} catch (ie) {
										return X(ie);
									}
								if (J === 1)
									return K !== H ? Promise.reject(K) : Promise.resolve();
								if (K !== H) throw K;
							}
							function X(Y) {
								return (K = K !== H ? new x(Y, K) : Y), W();
							}
							return W();
						},
					};
				}
				const U = "border-color 50ms ease-in-out";
				function z(x, H, q, V, G) {
					const K = G.innerWidth - q - S.COMPOSER_BAR_WINDOW_MARGIN,
						J = G.innerHeight - V - S.COMPOSER_BAR_WINDOW_MARGIN;
					return {
						x: (0, D.$Rlb)(S.COMPOSER_BAR_WINDOW_MARGIN, x, K),
						y: (0, D.$Rlb)(S.COMPOSER_BAR_WINDOW_MARGIN, H, J),
					};
				}
				function F(x) {
					try {
						var H = B();
						const q = H.u((0, l.span)("openComposerPane")),
							V = (0, b.$odc)(),
							{ composerDataService: G, composerService: K } = V,
							{
								composerDataHandle: J,
								currentComposer: W,
								forceMode: X,
								updateCurrentComposer: Y,
							} = (0, f.useComposerDataHandle)(() => x.composerDataHandle),
							ie = (0, u.createMemo)(() => W().composerId),
							ne = (0, u.createMemo)(() => K.getInputDelegate(ie())),
							ee = (0, a.$Ogb)(),
							[_, te] = (0, u.createSignal)(!1),
							[Q, Z] = (0, u.createSignal)(!1),
							[se, re] = (0, u.createSignal)(!1),
							[le, oe] = (0, u.createSignal)(void 0),
							[ae, pe] = (0, u.createSignal)(void 0),
							$e = (0, u.createMemo)(() => W()?.currentBubbleId),
							ye = (0, u.createMemo)(() => W()?.editingBubbleId),
							ue = (0, u.createMemo)(() => W()?.tabs),
							fe = (jt) => {
								Y({ tabs: jt });
							},
							me = (0, u.createMemo)(() => W()?.selectedTabIndex),
							ve = (jt) => {
								Y({ selectedTabIndex: jt });
							};
						(0, u.createEffect)(() => {
							me() !== 0 && re(!0);
						});
						const ge = (0, s.$h$b)(h.$wGb, V.themeService),
							be = (0, u.createMemo)(() =>
								W() ? W().conversation.length > 0 : !1,
							);
						let Ce, Le;
						const Fe = (jt) => {
								!ee.getSelection()?.toString() &&
									Ce &&
									Ce === ee.document.activeElement &&
									(ne().focus(), jt.preventDefault());
							},
							Oe = (0, u.createMemo)(
								() =>
									"1px solid " +
									(_() || Q()
										? "var(--vscode-commandCenter-activeBorder)"
										: "var(--vscode-commandCenter-inactiveBorder)"),
							),
							[xe, He] = (0, u.createSignal)(-1);
						(0, u.onMount)(() => {
							if (Ce === void 0) return;
							const jt = (0, a.getWindow)(Ce).document,
								ti = (kt) => {
									!kt.target.closest(".composer-history-pane") &&
										V.composerViewsService.getComposerLocation(
											J().data.composerId,
										) === "pane" &&
										V.reactiveStorageService.setNonPersistentStorage(
											"composerState",
											X() === "chat"
												? "shouldShowChatHistory"
												: "shouldShowComposerHistory",
											!1,
										);
								};
							jt.addEventListener("mousedown", ti),
								(0, u.onCleanup)(() => {
									jt.removeEventListener("mousedown", ti);
								});
						});
						const Ke = (0, u.createMemo)(() => x.location === "bar"),
							Je = (0, u.createMemo)(() =>
								(() => {
									const jt = N();
									return (
										jt.style.setProperty("display", "flex"),
										jt.style.setProperty("justify-content", "center"),
										jt.style.setProperty("align-items", "center"),
										jt.style.setProperty("gap", "2px"),
										(0, m.insert)(
											jt,
											(0, r.createComponent)($.ComposerToolbarSimpleButton, {
												type: "secondary",
												style: {
													width: "18px",
													height: "18px",
													padding: "0px",
													background: "transparent",
												},
												get codicon() {
													return v.$ak.add;
												},
												onMouseDown: (ti) => {
													ti.stopImmediatePropagation();
												},
												class: "composer-bar-control-button",
												onClick: () => {
													V.commandService.executeCommand(I.$GV);
												},
											}),
											null,
										),
										(0, m.insert)(
											jt,
											(0, r.createComponent)($.ComposerToolbarSimpleButton, {
												type: "secondary",
												style: {
													width: "18px",
													height: "18px",
													padding: "0px",
													background: "transparent",
												},
												class: "composer-bar-control-button",
												get codicon() {
													return v.$ak.ellipsis;
												},
												onMouseDown: (ti) => {
													ti.stopImmediatePropagation();
												},
												onClick: (ti) => {
													ti.stopImmediatePropagation(),
														V.contextMenuService.showContextMenu({
															getAnchor: () => ti.target,
															getActions: () => [
																{
																	id: S.SHOW_COMPOSER_HISTORY_ACTION_ID,
																	label: "Show History",
																	tooltip: "Show History",
																	class: "show-composer-history",
																	enabled: !0,
																	run: () => {
																		V.commandService.executeCommand(
																			S.SHOW_COMPOSER_HISTORY_ACTION_ID,
																		);
																	},
																},
																new P.$tj(),
																{
																	id: S.OPEN_COMPOSER_AS_EDITOR_ACTION_ID,
																	label: "Open as Editor",
																	tooltip: "Open as Editor",
																	class: "open-composer-as-editor",
																	enabled: !0,
																	run: () => {
																		V.commandService.executeCommand(
																			S.OPEN_COMPOSER_AS_EDITOR_ACTION_ID,
																		);
																	},
																},
																{
																	id: S.OPEN_COMPOSER_AS_PANE_ACTION_ID,
																	label: "Open as Pane",
																	tooltip: "Open as Pane",
																	enabled: !0,
																	class: "open-composer-as-pane",
																	run: () => {
																		V.commandService.executeCommand(
																			S.OPEN_COMPOSER_AS_PANE_ACTION_ID,
																		);
																	},
																},
																new P.$tj(),
																{
																	id: "reset-composer-position",
																	label: "Reset Position",
																	tooltip: "Reset Composer Position",
																	enabled: !0,
																	class: "reset-composer-position",
																	run: () => {
																		Ae(null);
																	},
																},
																new P.$tj(),
																{
																	id: "open-composer-settings",
																	label: "Open Composer Settings",
																	tooltip: "Open Composer Settings",
																	enabled: !0,
																	class: "open-composer-settings",
																	run: () => {
																		V.commandService.executeCommand(
																			I.$QV,
																			"features",
																			"cursor-settings-chat-composer",
																		);
																	},
																},
																{
																	id: "collapse-composer",
																	label: "Collapse",
																	tooltip: "Collapse Composer",
																	enabled: !0,
																	class: "collapse-composer",
																	run: () => {
																		De(!0);
																	},
																},
															],
														});
												},
											}),
											null,
										),
										(0, m.insert)(
											jt,
											(0, r.createComponent)($.ComposerToolbarSimpleButton, {
												type: "secondary",
												style: {
													width: "18px",
													height: "18px",
													padding: "0px",
													background: "transparent",
												},
												get codicon() {
													return v.$ak.x;
												},
												onMouseDown: (ti) => {
													ti.stopImmediatePropagation();
												},
												class: "composer-bar-control-button",
												onClick: (ti) => {
													K.close(ie());
												},
											}),
											null,
										),
										jt
									);
								})(),
							),
							[Te, Ee] = (0, u.createSignal)(!1),
							[Ie, Be] = (0, u.createSignal)({ x: 0, y: 0 }),
							[Se, ke] = (0, u.createSignal)({ x: 0, y: 0 }),
							Ue = 5,
							qe = (0, u.createMemo)(
								() =>
									V.reactiveStorageService.workspaceUserPersistentStorage
										.composerState?.composerBarPosition,
							),
							Ae = (jt) => {
								V.reactiveStorageService.setWorkspaceUserPersistentStorage(
									"composerState",
									"composerBarPosition",
									jt,
								);
							},
							Me = (0, u.createMemo)(
								() =>
									Ke() &&
									V.reactiveStorageService.workspaceUserPersistentStorage
										.composerState?.isComposerBarChatCollapsed,
							),
							De = (jt) => {
								V.reactiveStorageService.setWorkspaceUserPersistentStorage(
									"composerState",
									"isComposerBarChatCollapsed",
									jt,
								);
							},
							Re = (jt) => {
								if (!jt || !Ce) return null;
								const ti = (0, a.$Ogb)(),
									kt = (0, M.$wmb)(Ce),
									hi = z(jt.x, jt.y - kt.height, kt.width, kt.height, ti);
								return { x: hi.x, y: hi.y + kt.height };
							};
						(0, u.createEffect)(() => {
							if (!Ke()) return;
							const jt = qe();
							if (jt) {
								const ti = Re(jt);
								ti && (ti.x !== jt.x || ti.y !== jt.y) && Ae(ti);
							}
						});
						const je = (jt) => {
								if (!Ke()) return;
								const ti = Ce?.getBoundingClientRect();
								ti &&
									(Be({
										x: jt.clientX - ti.left,
										y: jt.clientY - (ti.top + ti.height),
									}),
									ke({ x: jt.clientX, y: jt.clientY }));
							},
							Ve = (jt) => {
								if (!Ke()) return;
								if (!Te()) {
									const Kt = jt.clientX - Se().x,
										di = jt.clientY - Se().y;
									if (Math.sqrt(Kt * Kt + di * di) > Ue) Ee(!0);
									else return;
								}
								if (!Ce) return;
								const ti = (0, a.$Ogb)(),
									kt = (0, M.$wmb)(Ce),
									hi = z(
										jt.clientX - Ie().x,
										jt.clientY - Ie().y - kt.height,
										kt.width,
										kt.height,
										ti,
									);
								Ae({ x: hi.x, y: hi.y + kt.height });
							};
						(0, u.createEffect)(() => {
							if (!Ke()) return;
							const jt = (0, a.$Ogb)(),
								ti = () => {
									Ee(!1),
										ke({ x: 0, y: 0 }),
										jt.removeEventListener("mousemove", Ve);
								};
							(Se().x !== 0 || Se().y !== 0) &&
								(jt.addEventListener("mousemove", Ve),
								jt.addEventListener("mouseup", ti)),
								(0, u.onCleanup)(() => {
									jt.removeEventListener("mousemove", Ve),
										jt.removeEventListener("mouseup", ti);
								});
						});
						const [Ze, et] = (0, u.createSignal)({
								width: S.COMPOSER_BAR_DEFAULT_WIDTH,
								height: S.COMPOSER_BAR_DEFAULT_MESSAGES_HEIGHT,
							}),
							[rt, ft] = (0, u.createSignal)(null),
							bt = (jt, ti) => {
								!Ke() ||
									(!be() && jt !== "e" && jt !== "w") ||
									(ti.preventDefault(), ti.stopPropagation(), ft(jt));
							},
							nt = (jt) => {
								if (!rt() || !Ce) return;
								const ti = rt();
								if (!ti) return;
								const kt = (0, M.$wmb)(Ce);
								let hi = kt.width,
									Kt = kt.height,
									di = qe() ? { ...qe() } : void 0;
								const Ye = jt.movementX,
									ze = jt.movementY,
									Xe = (0, a.$Ogb)();
								if (ti.includes("e") || ti.includes("w"))
									if (ti.includes("e")) {
										const It = hi + Ye;
										It >= S.COMPOSER_BAR_MIN_WIDTH &&
											It <= S.COMPOSER_BAR_MAX_WIDTH &&
											(hi = It);
									} else {
										const It = hi - Ye;
										It >= S.COMPOSER_BAR_MIN_WIDTH &&
											It <= S.COMPOSER_BAR_MAX_WIDTH &&
											((hi = It), di && (di.x += Ye));
									}
								if (ti.includes("n") || ti.includes("s"))
									if (ti.includes("n")) {
										const It = Kt - ze;
										It >= S.COMPOSER_BAR_MIN_HEIGHT &&
											It <= S.COMPOSER_BAR_MAX_HEIGHT &&
											((Kt = It), Me() && ze < 0 && De(!1));
									} else {
										const It = Kt + ze;
										It >= S.COMPOSER_BAR_MIN_HEIGHT &&
											It <= S.COMPOSER_BAR_MAX_HEIGHT &&
											((Kt = It), di && (di.y += ze));
									}
								if (di) {
									const It = z(di.x, di.y - Kt, hi, Kt, Xe);
									Ae({ x: It.x, y: It.y + Kt });
								}
								et({ width: hi, height: Kt });
							},
							lt = () => {
								ft(null);
							};
						(0, u.createEffect)(() => {
							if (!Ke()) return;
							const jt = (0, a.$Ogb)();
							rt() &&
								(jt.addEventListener("mousemove", nt),
								jt.addEventListener("mouseup", lt)),
								(0, u.onCleanup)(() => {
									jt.removeEventListener("mousemove", nt),
										jt.removeEventListener("mouseup", lt);
								});
						});
						const ct = () => {
								if (rt())
									switch (rt()) {
										case "n":
										case "s":
											return "ns-resize";
										case "e":
										case "w":
											return "ew-resize";
									}
								return Te() ? "grabbing" : "auto";
							},
							gt = (0, T.$A$b)(() => (Ke() ? le() : void 0));
						(0, u.createEffect)(() => {
							if (!Ke()) return;
							const jt = (0, a.$Ogb)(),
								ti = () => {
									const kt = qe();
									if (kt) {
										const Kt = Re(kt);
										Kt && Ae(Kt);
									}
									const hi = {
										width: Math.min(
											Math.max(Ze().width, S.COMPOSER_BAR_MIN_WIDTH),
											jt.innerWidth - 2 * S.COMPOSER_BAR_WINDOW_MARGIN,
										),
										height: Math.min(
											Math.max(Ze().height, S.COMPOSER_BAR_MIN_HEIGHT),
											jt.innerHeight - 2 * S.COMPOSER_BAR_WINDOW_MARGIN,
										),
									};
									et(hi);
								};
							jt.addEventListener("resize", ti),
								(0, u.onCleanup)(() => jt.removeEventListener("resize", ti));
						});
						const ht = (0, u.createMemo)(() =>
								be() && !Me() ? `${Ze().height}px` : "fit-content",
							),
							Rt = (0, u.createMemo)(() =>
								be() && !Me() ? `${S.COMPOSER_BAR_MIN_HEIGHT}px` : "0px",
							),
							Nt = (0, k.useComposerChatStatus)(J);
						return [
							(0, r.createComponent)(u.Show, {
								get when() {
									return x.renderAs === "history";
								},
								get children() {
									return (0, r.createComponent)(g.ComposerHistory, {
										get composerDataHandle() {
											return J();
										},
										renderOpenComposerButton: !0,
									});
								},
							}),
							(0, r.createComponent)(u.Show, {
								get when() {
									return x.renderAs === "composer";
								},
								get children() {
									return [
										(0, r.createComponent)(u.Show, {
											get when() {
												return (
													(X() === "chat"
														? V.reactiveStorageService.nonPersistentStorage
																.composerState.shouldShowChatHistory
														: V.reactiveStorageService.nonPersistentStorage
																.composerState.shouldShowComposerHistory) &&
													x.location === "pane"
												);
											},
											get children() {
												return (0, r.createComponent)(g.ComposerHistory, {
													get composerDataHandle() {
														return J();
													},
												});
											},
										}),
										(() => {
											const jt = O();
											jt.addEventListener("drop", (kt) => {
												if (kt.defaultPrevented || kt.hardCodedStopper) return;
												kt.preventDefault(), kt.stopPropagation();
												const hi = Ce?.querySelector(".aislash-editor-input");
												if (hi) {
													const Kt = new DragEvent(kt.type, kt);
													(Kt.hardCodedStopper = !0), hi.dispatchEvent(Kt);
												}
											}),
												jt.addEventListener("click", () => {
													const kt = ye(),
														hi = $e();
													kt !== hi && Y({ editingBubbleId: void 0 });
												}),
												jt.addEventListener("blur", () => {
													Z(!1);
												}),
												jt.addEventListener("focus", () => {
													Z(!0);
												}),
												jt.addEventListener("keydown", Fe);
											const ti = Ce;
											return (
												typeof ti == "function"
													? (0, C.use)(ti, jt)
													: (Ce = jt),
												(0, m.insert)(
													jt,
													(0, r.createComponent)(u.Show, {
														get when() {
															return (0, d.memo)(() => !!be())() && Ke();
														},
														get children() {
															return [
																(() => {
																	const kt = N();
																	return (
																		kt.addEventListener("mousedown", (hi) =>
																			bt("nw", hi),
																		),
																		`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px` !=
																		null
																			? kt.style.setProperty(
																					"height",
																					`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px`,
																				)
																			: kt.style.removeProperty("height"),
																		`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px` !=
																		null
																			? kt.style.setProperty(
																					"width",
																					`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px`,
																				)
																			: kt.style.removeProperty("width"),
																		S.COMPOSER_BAR_RESIZER_CORNER_BACKGROUND_COLOR !=
																		null
																			? kt.style.setProperty(
																					"background",
																					S.COMPOSER_BAR_RESIZER_CORNER_BACKGROUND_COLOR,
																				)
																			: kt.style.removeProperty("background"),
																		kt.style.setProperty(
																			"cursor",
																			"nwse-resize",
																		),
																		`-${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px` !=
																		null
																			? kt.style.setProperty(
																					"top",
																					`-${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px`,
																				)
																			: kt.style.removeProperty("top"),
																		`${S.COMPOSER_BAR_INDENT - S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px` !=
																		null
																			? kt.style.setProperty(
																					"left",
																					`${S.COMPOSER_BAR_INDENT - S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px`,
																				)
																			: kt.style.removeProperty("left"),
																		kt.style.setProperty(
																			"position",
																			"absolute",
																		),
																		kt.style.setProperty("z-index", "11"),
																		kt
																	);
																})(),
																(() => {
																	const kt = N();
																	return (
																		kt.addEventListener("mousedown", (hi) =>
																			bt("ne", hi),
																		),
																		`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px` !=
																		null
																			? kt.style.setProperty(
																					"height",
																					`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px`,
																				)
																			: kt.style.removeProperty("height"),
																		`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px` !=
																		null
																			? kt.style.setProperty(
																					"width",
																					`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px`,
																				)
																			: kt.style.removeProperty("width"),
																		S.COMPOSER_BAR_RESIZER_CORNER_BACKGROUND_COLOR !=
																		null
																			? kt.style.setProperty(
																					"background",
																					S.COMPOSER_BAR_RESIZER_CORNER_BACKGROUND_COLOR,
																				)
																			: kt.style.removeProperty("background"),
																		kt.style.setProperty(
																			"cursor",
																			"nesw-resize",
																		),
																		`-${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px` !=
																		null
																			? kt.style.setProperty(
																					"top",
																					`-${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px`,
																				)
																			: kt.style.removeProperty("top"),
																		`${S.COMPOSER_BAR_INDENT - S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px` !=
																		null
																			? kt.style.setProperty(
																					"right",
																					`${S.COMPOSER_BAR_INDENT - S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px`,
																				)
																			: kt.style.removeProperty("right"),
																		kt.style.setProperty(
																			"position",
																			"absolute",
																		),
																		kt.style.setProperty("z-index", "11"),
																		kt
																	);
																})(),
																(() => {
																	const kt = N();
																	return (
																		kt.addEventListener("mousedown", (hi) =>
																			bt("n", hi),
																		),
																		`${S.COMPOSER_BAR_RESIZER_DIMENSION}px` !=
																		null
																			? kt.style.setProperty(
																					"height",
																					`${S.COMPOSER_BAR_RESIZER_DIMENSION}px`,
																				)
																			: kt.style.removeProperty("height"),
																		S.COMPOSER_BAR_RESIZER_BACKGROUND_COLOR !=
																		null
																			? kt.style.setProperty(
																					"background",
																					S.COMPOSER_BAR_RESIZER_BACKGROUND_COLOR,
																				)
																			: kt.style.removeProperty("background"),
																		kt.style.setProperty("cursor", "ns-resize"),
																		`-${S.COMPOSER_BAR_RESIZER_DIMENSION / 2}px` !=
																		null
																			? kt.style.setProperty(
																					"top",
																					`-${S.COMPOSER_BAR_RESIZER_DIMENSION / 2}px`,
																				)
																			: kt.style.removeProperty("top"),
																		kt.style.setProperty("left", "0px"),
																		kt.style.setProperty("right", "0px"),
																		kt.style.setProperty(
																			"position",
																			"absolute",
																		),
																		kt.style.setProperty("z-index", "10"),
																		kt
																	);
																})(),
																(() => {
																	const kt = N();
																	return (
																		kt.addEventListener("mousedown", (hi) =>
																			bt("w", hi),
																		),
																		`${S.COMPOSER_BAR_RESIZER_DIMENSION + S.COMPOSER_BAR_INDENT}px` !=
																		null
																			? kt.style.setProperty(
																					"width",
																					`${S.COMPOSER_BAR_RESIZER_DIMENSION + S.COMPOSER_BAR_INDENT}px`,
																				)
																			: kt.style.removeProperty("width"),
																		S.COMPOSER_BAR_RESIZER_BACKGROUND_COLOR !=
																		null
																			? kt.style.setProperty(
																					"background",
																					S.COMPOSER_BAR_RESIZER_BACKGROUND_COLOR,
																				)
																			: kt.style.removeProperty("background"),
																		kt.style.setProperty("cursor", "ew-resize"),
																		kt.style.setProperty("top", "0px"),
																		kt.style.setProperty("left", "0px"),
																		kt.style.setProperty(
																			"position",
																			"absolute",
																		),
																		kt.style.setProperty("z-index", "10"),
																		(0, E.effect)(() =>
																			`${gt().height + 10}px` != null
																				? kt.style.setProperty(
																						"bottom",
																						`${gt().height + 10}px`,
																					)
																				: kt.style.removeProperty("bottom"),
																		),
																		kt
																	);
																})(),
																(() => {
																	const kt = N();
																	return (
																		kt.addEventListener("mousedown", (hi) =>
																			bt("e", hi),
																		),
																		`${S.COMPOSER_BAR_RESIZER_DIMENSION + S.COMPOSER_BAR_INDENT}px` !=
																		null
																			? kt.style.setProperty(
																					"width",
																					`${S.COMPOSER_BAR_RESIZER_DIMENSION + S.COMPOSER_BAR_INDENT}px`,
																				)
																			: kt.style.removeProperty("width"),
																		S.COMPOSER_BAR_RESIZER_BACKGROUND_COLOR !=
																		null
																			? kt.style.setProperty(
																					"background",
																					S.COMPOSER_BAR_RESIZER_BACKGROUND_COLOR,
																				)
																			: kt.style.removeProperty("background"),
																		kt.style.setProperty("cursor", "ew-resize"),
																		kt.style.setProperty("top", "0px"),
																		kt.style.setProperty("right", "0px"),
																		kt.style.setProperty(
																			"position",
																			"absolute",
																		),
																		kt.style.setProperty("z-index", "10"),
																		(0, E.effect)(() =>
																			`${gt().height + 10}px` != null
																				? kt.style.setProperty(
																						"bottom",
																						`${gt().height + 10}px`,
																					)
																				: kt.style.removeProperty("bottom"),
																		),
																		kt
																	);
																})(),
															];
														},
													}),
													null,
												),
												(0, m.insert)(
													jt,
													(0, r.createComponent)(u.Show, {
														get when() {
															return be();
														},
														get children() {
															const kt = R(),
																hi = kt.firstChild;
															kt.addEventListener("mousedown", (di) => {
																di.stopImmediatePropagation();
															});
															const Kt = Le;
															return (
																typeof Kt == "function"
																	? (0, C.use)(Kt, kt)
																	: (Le = kt),
																(0, m.insert)(
																	kt,
																	(0, r.createComponent)(u.Show, {
																		get when() {
																			return Ke();
																		},
																		get children() {
																			const di = A(),
																				Ye = di.firstChild,
																				ze = Ye.firstChild;
																			return (
																				di.addEventListener(
																					"mousedown",
																					(Xe) => {
																						je(Xe);
																					},
																				),
																				di.addEventListener("mouseup", () => {
																					Te() || rt() || De(!Me());
																				}),
																				di.style.setProperty(
																					"padding",
																					"2px 8px",
																				),
																				di.style.setProperty(
																					"padding-right",
																					"4px",
																				),
																				di.style.setProperty("display", "flex"),
																				di.style.setProperty(
																					"justify-content",
																					"space-between",
																				),
																				di.style.setProperty(
																					"align-items",
																					"center",
																				),
																				Ye.style.setProperty(
																					"color",
																					"var(--vscode-input-placeholderForeground)",
																				),
																				Ye.style.setProperty(
																					"font-size",
																					"11px",
																				),
																				Ye.style.setProperty("display", "flex"),
																				Ye.style.setProperty(
																					"align-items",
																					"center",
																				),
																				Ye.style.setProperty("gap", "4px"),
																				(0, m.insert)(
																					Ye,
																					(0, r.createComponent)(
																						L.ComposerGeneralStatusIndicator,
																						{
																							get status() {
																								return Nt();
																							},
																							size: "small",
																							get style() {
																								return {
																									opacity: Me() ? 1 : 0,
																									transition: "opacity 0.2s",
																								};
																							},
																						},
																					),
																					null,
																				),
																				(0, m.insert)(di, Je, null),
																				(0, E.effect)(() =>
																					(Me() ? "none" : Oe()) != null
																						? di.style.setProperty(
																								"border-bottom",
																								Me() ? "none" : Oe(),
																							)
																						: di.style.removeProperty(
																								"border-bottom",
																							),
																				),
																				di
																			);
																		},
																	}),
																	hi,
																),
																(0, m.insert)(
																	hi,
																	(0, r.createComponent)(y.$2cc, {
																		nonReactiveDelay: 30,
																		get children() {
																			return (0, r.createComponent)(
																				p.ComposerMessages,
																				{
																					get composerDataHandle() {
																						return J();
																					},
																					lexicalEditor: ae,
																					tabs: ue,
																					setTabs: fe,
																					setSelectedTabIndex: ve,
																					get hideHints() {
																						return se();
																					},
																					get isInputFocused() {
																						return _();
																					},
																					get location() {
																						return x.location;
																					},
																					get inputBoxDelegate() {
																						return ne();
																					},
																					get verticalScrollbarSize() {
																						return Ke() ? 8 : void 0;
																					},
																					onAfterMinCurrentEditBubbleClick:
																						() => {
																							const di = ye(),
																								Ye = $e();
																							di === Ye &&
																								Ye &&
																								di &&
																								(async () => (
																									await V.composerService.checkoutToLatest(
																										J().data.composerId,
																									),
																									V.composerService.focus(
																										J().data.composerId,
																										!0,
																									)
																								))();
																						},
																					customScrollableDivProps: {
																						style: { height: "100%" },
																						innerContainerStyle: {
																							position: "relative",
																							"box-sizing": "border-box",
																						},
																					},
																					get aiMessageStyle() {
																						return Ke()
																							? {
																									"padding-left": "12px",
																									"padding-right": "12px",
																								}
																							: void 0;
																					},
																					get humanMessageStyle() {
																						return Ke()
																							? {
																									"padding-left": "8px",
																									"padding-right": "8px",
																								}
																							: void 0;
																					},
																					get statusContainerStyle() {
																						return Ke()
																							? {
																									"padding-left": "14px",
																									"padding-right": "14px",
																									"padding-bottom": "14px",
																								}
																							: void 0;
																					},
																				},
																			);
																		},
																	}),
																),
																(0, m.insert)(
																	kt,
																	(0, r.createComponent)(u.Show, {
																		get when() {
																			return Ke();
																		},
																		get children() {
																			return (0, r.createComponent)(
																				o.ComposerToolbar,
																				{
																					get composerDataHandle() {
																						return J();
																					},
																					isInputFocused: _,
																					get style() {
																						return {
																							background:
																								"var(--vscode-input-background)",
																							"border-top": Oe(),
																						};
																					},
																					onStartDrag: je,
																					isDragging: Te,
																				},
																			);
																		},
																	}),
																	null,
																),
																(0, E.effect)(
																	(di) => {
																		const Ye = {
																				display: "flex",
																				"flex-direction": "column",
																				"padding-top":
																					V.composerViewsService.getComposerLocation(
																						J().data.composerId,
																					) === "editor"
																						? "10px"
																						: "0px",
																				...(Me()
																					? {}
																					: { flex: 1, "min-height": "0px" }),
																				...(Ke()
																					? {
																							margin: `0px ${S.COMPOSER_BAR_INDENT}px`,
																							"box-sizing": "border-box",
																							border: Oe(),
																							"border-bottom": "none",
																							"border-top-left-radius": "5px",
																							"border-top-right-radius": "5px",
																							"box-shadow":
																								"0 0 4px 1px var(--vscode-widget-shadow)",
																							position: "relative",
																							overflow: "hidden",
																							background:
																								"var(--vscode-input-background, var(--vscode-editor-background))",
																							"z-index": "8",
																						}
																					: {
																							width: "100%",
																							background: ge(),
																						}),
																			},
																			ze = {
																				position: "relative",
																				overflow: "hidden",
																				...(Me()
																					? {
																							display: "none",
																							"pointer-events": "none",
																						}
																					: { flex: 1 }),
																			};
																		return (
																			(di._v$ = (0, w.style)(kt, Ye, di._v$)),
																			(di._v$2 = (0, w.style)(hi, ze, di._v$2)),
																			di
																		);
																	},
																	{ _v$: void 0, _v$2: void 0 },
																),
																kt
															);
														},
													}),
													null,
												),
												(0, m.insert)(
													jt,
													(0, r.createComponent)(y.$2cc, {
														get nonReactiveDelay() {
															return Ke() ? 0 : 10;
														},
														get children() {
															return (0, r.createComponent)(
																n.ComposerFullInputBox,
																{
																	setRef: oe,
																	setLexicalEditor: pe,
																	get composerDataHandle() {
																		return J();
																	},
																	get location() {
																		return x.location;
																	},
																	disableImagesList: !0,
																	isInputFocused: _,
																	setIsInputFocused: te,
																	get overrideShouldCollapse() {
																		return Ke() ? !0 : void 0;
																	},
																	get buttonArea() {
																		return (0, d.memo)(
																			() => !!(be() || !Ke()),
																		)()
																			? void 0
																			: Je();
																	},
																	allowCmdPFilePicker: !0,
																	get minHeight() {
																		return W().conversation.length === 0 &&
																			!Ke()
																			? 56
																			: void 0;
																	},
																	shouldMergeSuggestedPillsWithAllPills: !0,
																	get containerStyle() {
																		return {
																			margin: Ke() ? "0px" : "10px",
																			...(Ke()
																				? {
																						position: "relative",
																						"z-index": "10",
																					}
																				: {
																						"margin-top":
																							W().conversation.length === 0
																								? "10px"
																								: "0px",
																						"margin-bottom":
																							W().conversation.length === 0
																								? "0px"
																								: "10px",
																					}),
																		};
																	},
																	get style() {
																		return {
																			margin: "0px",
																			border: Oe(),
																			...(Ke()
																				? {
																						"box-shadow":
																							"0 0 4px 1px var(--vscode-widget-shadow)",
																					}
																				: {}),
																		};
																	},
																	onSubmit: () => {
																		De(!1),
																			Y({
																				scrollToBottomTrigger:
																					(W().scrollToBottomTrigger ?? 0) + 1,
																			});
																	},
																	setSelectedPreviousComposerIndex: He,
																	get role() {
																		return W().conversation.length === 0
																			? "top"
																			: "bottom";
																	},
																	get aboveContent() {
																		return (0, r.createComponent)(u.Show, {
																			get when() {
																				return (
																					(0, d.memo)(
																						() => !!(!Ke() && be()),
																					)() && X() !== "chat"
																				);
																			},
																			get children() {
																				return (0, r.createComponent)(y.$2cc, {
																					nonReactiveDelay: 10,
																					get children() {
																						const kt = N();
																						return (
																							kt.style.setProperty(
																								"padding",
																								"0px 6px",
																							),
																							(0, m.insert)(
																								kt,
																								(0, r.createComponent)(
																									o.ComposerToolbar,
																									{
																										get composerDataHandle() {
																											return J();
																										},
																										isInputFocused: _,
																										get style() {
																											return {
																												background:
																													"var(--vscode-input-background)",
																												border: Oe(),
																												"border-bottom": "none",
																												"border-top-left-radius":
																													"5px",
																												"border-top-right-radius":
																													"5px",
																											};
																										},
																									},
																								),
																							),
																							kt
																						);
																					},
																				});
																			},
																		});
																	},
																	onStartDrag: je,
																	get children() {
																		return (0, r.createComponent)(u.Show, {
																			get when() {
																				return Ke();
																			},
																			get children() {
																				return [
																					(0, r.createComponent)(u.Show, {
																						get when() {
																							return be();
																						},
																						get children() {
																							return [
																								(() => {
																									const kt = N();
																									return (
																										kt.addEventListener(
																											"mousedown",
																											(hi) => bt("s", hi),
																										),
																										`${S.COMPOSER_BAR_RESIZER_DIMENSION}px` !=
																										null
																											? kt.style.setProperty(
																													"height",
																													`${S.COMPOSER_BAR_RESIZER_DIMENSION}px`,
																												)
																											: kt.style.removeProperty(
																													"height",
																												),
																										S.COMPOSER_BAR_RESIZER_BACKGROUND_COLOR !=
																										null
																											? kt.style.setProperty(
																													"background",
																													S.COMPOSER_BAR_RESIZER_BACKGROUND_COLOR,
																												)
																											: kt.style.removeProperty(
																													"background",
																												),
																										kt.style.setProperty(
																											"cursor",
																											"ns-resize",
																										),
																										`-${S.COMPOSER_BAR_RESIZER_DIMENSION / 2}px` !=
																										null
																											? kt.style.setProperty(
																													"bottom",
																													`-${S.COMPOSER_BAR_RESIZER_DIMENSION / 2}px`,
																												)
																											: kt.style.removeProperty(
																													"bottom",
																												),
																										kt.style.setProperty(
																											"left",
																											"0px",
																										),
																										kt.style.setProperty(
																											"right",
																											"0px",
																										),
																										kt.style.setProperty(
																											"position",
																											"absolute",
																										),
																										kt.style.setProperty(
																											"z-index",
																											"10",
																										),
																										kt
																									);
																								})(),
																								(() => {
																									const kt = N();
																									return (
																										kt.addEventListener(
																											"mousedown",
																											(hi) => bt("sw", hi),
																										),
																										`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px` !=
																										null
																											? kt.style.setProperty(
																													"height",
																													`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px`,
																												)
																											: kt.style.removeProperty(
																													"height",
																												),
																										`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px` !=
																										null
																											? kt.style.setProperty(
																													"width",
																													`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px`,
																												)
																											: kt.style.removeProperty(
																													"width",
																												),
																										S.COMPOSER_BAR_RESIZER_CORNER_BACKGROUND_COLOR !=
																										null
																											? kt.style.setProperty(
																													"background",
																													S.COMPOSER_BAR_RESIZER_CORNER_BACKGROUND_COLOR,
																												)
																											: kt.style.removeProperty(
																													"background",
																												),
																										kt.style.setProperty(
																											"cursor",
																											"nesw-resize",
																										),
																										`-${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px` !=
																										null
																											? kt.style.setProperty(
																													"bottom",
																													`-${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px`,
																												)
																											: kt.style.removeProperty(
																													"bottom",
																												),
																										`-${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px` !=
																										null
																											? kt.style.setProperty(
																													"left",
																													`-${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px`,
																												)
																											: kt.style.removeProperty(
																													"left",
																												),
																										kt.style.setProperty(
																											"position",
																											"absolute",
																										),
																										kt.style.setProperty(
																											"z-index",
																											"11",
																										),
																										kt
																									);
																								})(),
																								(() => {
																									const kt = N();
																									return (
																										kt.addEventListener(
																											"mousedown",
																											(hi) => bt("se", hi),
																										),
																										`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px` !=
																										null
																											? kt.style.setProperty(
																													"height",
																													`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px`,
																												)
																											: kt.style.removeProperty(
																													"height",
																												),
																										`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px` !=
																										null
																											? kt.style.setProperty(
																													"width",
																													`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px`,
																												)
																											: kt.style.removeProperty(
																													"width",
																												),
																										S.COMPOSER_BAR_RESIZER_CORNER_BACKGROUND_COLOR !=
																										null
																											? kt.style.setProperty(
																													"background",
																													S.COMPOSER_BAR_RESIZER_CORNER_BACKGROUND_COLOR,
																												)
																											: kt.style.removeProperty(
																													"background",
																												),
																										kt.style.setProperty(
																											"cursor",
																											"nwse-resize",
																										),
																										`-${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px` !=
																										null
																											? kt.style.setProperty(
																													"bottom",
																													`-${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px`,
																												)
																											: kt.style.removeProperty(
																													"bottom",
																												),
																										`-${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px` !=
																										null
																											? kt.style.setProperty(
																													"right",
																													`-${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px`,
																												)
																											: kt.style.removeProperty(
																													"right",
																												),
																										kt.style.setProperty(
																											"position",
																											"absolute",
																										),
																										kt.style.setProperty(
																											"z-index",
																											"11",
																										),
																										kt
																									);
																								})(),
																							];
																						},
																					}),
																					(() => {
																						const kt = N();
																						return (
																							kt.addEventListener(
																								"mousedown",
																								(hi) => bt("w", hi),
																							),
																							`${S.COMPOSER_BAR_RESIZER_DIMENSION}px` !=
																							null
																								? kt.style.setProperty(
																										"width",
																										`${S.COMPOSER_BAR_RESIZER_DIMENSION}px`,
																									)
																								: kt.style.removeProperty(
																										"width",
																									),
																							S.COMPOSER_BAR_RESIZER_BACKGROUND_COLOR !=
																							null
																								? kt.style.setProperty(
																										"background",
																										S.COMPOSER_BAR_RESIZER_BACKGROUND_COLOR,
																									)
																								: kt.style.removeProperty(
																										"background",
																									),
																							kt.style.setProperty(
																								"cursor",
																								"ew-resize",
																							),
																							kt.style.setProperty(
																								"top",
																								"0px",
																							),
																							kt.style.setProperty(
																								"bottom",
																								"0px",
																							),
																							`-${S.COMPOSER_BAR_RESIZER_DIMENSION / 2}px` !=
																							null
																								? kt.style.setProperty(
																										"left",
																										`-${S.COMPOSER_BAR_RESIZER_DIMENSION / 2}px`,
																									)
																								: kt.style.removeProperty(
																										"left",
																									),
																							kt.style.setProperty(
																								"position",
																								"absolute",
																							),
																							kt.style.setProperty(
																								"z-index",
																								"10",
																							),
																							kt
																						);
																					})(),
																					(() => {
																						const kt = N();
																						return (
																							kt.addEventListener(
																								"mousedown",
																								(hi) => bt("e", hi),
																							),
																							`${S.COMPOSER_BAR_RESIZER_DIMENSION}px` !=
																							null
																								? kt.style.setProperty(
																										"width",
																										`${S.COMPOSER_BAR_RESIZER_DIMENSION}px`,
																									)
																								: kt.style.removeProperty(
																										"width",
																									),
																							S.COMPOSER_BAR_RESIZER_BACKGROUND_COLOR !=
																							null
																								? kt.style.setProperty(
																										"background",
																										S.COMPOSER_BAR_RESIZER_BACKGROUND_COLOR,
																									)
																								: kt.style.removeProperty(
																										"background",
																									),
																							kt.style.setProperty(
																								"cursor",
																								"ew-resize",
																							),
																							kt.style.setProperty(
																								"top",
																								"0px",
																							),
																							kt.style.setProperty(
																								"bottom",
																								"0px",
																							),
																							`-${S.COMPOSER_BAR_RESIZER_DIMENSION / 2}px` !=
																							null
																								? kt.style.setProperty(
																										"right",
																										`-${S.COMPOSER_BAR_RESIZER_DIMENSION / 2}px`,
																									)
																								: kt.style.removeProperty(
																										"right",
																									),
																							kt.style.setProperty(
																								"position",
																								"absolute",
																							),
																							kt.style.setProperty(
																								"z-index",
																								"10",
																							),
																							kt
																						);
																					})(),
																				];
																			},
																		});
																	},
																},
															);
														},
													}),
													null,
												),
												(0, m.insert)(
													jt,
													(0, r.createComponent)(u.Show, {
														get when() {
															return (
																(0, d.memo)(() => !Ke())() &&
																W().conversation.length === 0
															);
														},
														get children() {
															return (0, r.createComponent)(
																c.ComposerBelowChatHistory,
																{
																	get composerDataHandle() {
																		return J();
																	},
																	get selectedPreviousComposerIndex() {
																		return xe();
																	},
																	setSelectedPreviousComposerIndex: He,
																	isRenderingSuggestedPillsBelowInputBox: !1,
																},
															);
														},
													}),
													null,
												),
												(0, E.effect)(
													(kt) => {
														const hi = {
																"box-sizing": "border-box",
																outline: "none",
																display: "flex",
																"flex-direction": "column",
																...x.style,
																...(Ke()
																	? {
																			position: "fixed",
																			...(qe()
																				? {
																						bottom: `${ee.innerHeight - qe().y}px`,
																						left: `${qe().x}px`,
																					}
																				: {
																						bottom: "20px",
																						left: "50%",
																						transform: "translateX(-50%)",
																					}),
																			width: `${Ze().width}px`,
																			height: ht(),
																			"min-width": `${S.COMPOSER_BAR_MIN_WIDTH}px`,
																			"min-height": Rt(),
																			"max-width": `${S.COMPOSER_BAR_MAX_WIDTH}px`,
																			"max-height": `${S.COMPOSER_BAR_MAX_HEIGHT}px`,
																			"z-index": "2548",
																			"justify-content": "flex-end",
																			cursor: ct(),
																			transition: Te() || rt() ? "none" : U,
																		}
																	: {
																			background: ge(),
																			width: "100%",
																			height: "100%",
																			overflow: "hidden",
																		}),
															},
															Kt =
																"composer-bar" +
																(x.location === "editor" ? " editor" : "");
														return (
															(kt._v$3 = (0, w.style)(jt, hi, kt._v$3)),
															Kt !== kt._v$4 &&
																(0, i.className)(jt, (kt._v$4 = Kt)),
															kt
														);
													},
													{ _v$3: void 0, _v$4: void 0 },
												),
												jt
											);
										})(),
									];
								},
							}),
						];
					} catch (q) {
						H.e = q;
					} finally {
						H.d();
					}
				}
			},
		),
		define(
			de[1075],
			he([1, 0, 2, 2, 2, 36, 225, 4413, 13, 295, 1969, 4153, 216]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.renderComposerPane = void 0);
				const c = (0, t.template)("<div>Loading ");
				function n() {
					var p =
							typeof SuppressedError == "function"
								? SuppressedError
								: function (s, l) {
										var y = Error();
										return (
											(y.name = "SuppressedError"),
											(y.error = s),
											(y.suppressed = l),
											y
										);
									},
						o = {},
						f = [];
					function b(s, l) {
						if (l != null) {
							if (Object(l) !== l)
								throw new TypeError(
									"using declarations can only be used with objects, functions, null, or undefined.",
								);
							if (s)
								var y =
									l[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
							if (
								y === void 0 &&
								((y = l[Symbol.dispose || Symbol.for("Symbol.dispose")]), s)
							)
								var $ = y;
							if (typeof y != "function")
								throw new TypeError("Object is not disposable.");
							$ &&
								(y = function () {
									try {
										$.call(l);
									} catch (v) {
										return Promise.reject(v);
									}
								}),
								f.push({ v: l, d: y, a: s });
						} else s && f.push({ d: l, a: s });
						return l;
					}
					return {
						e: o,
						u: b.bind(null, !1),
						a: b.bind(null, !0),
						d: function () {
							var s,
								l = this.e,
								y = 0;
							function $() {
								for (; (s = f.pop()); )
									try {
										if (!s.a && y === 1)
											return (y = 0), f.push(s), Promise.resolve().then($);
										if (s.d) {
											var S = s.d.call(s.v);
											if (s.a) return (y |= 2), Promise.resolve(S).then($, v);
										} else y |= 1;
									} catch (I) {
										return v(I);
									}
								if (y === 1)
									return l !== o ? Promise.reject(l) : Promise.resolve();
								if (l !== o) throw l;
							}
							function v(S) {
								return (l = l !== o ? new p(S, l) : S), $();
							}
							return $();
						},
					};
				}
				const g = (p, o, f, b) =>
					(0, E.$ndc)(
						() => {
							try {
								var s = n();
								const l = s.u((0, h.span)("renderComposerPane")),
									y = (0, a.useForceModeComposerHandle)(b);
								return (0, w.createComponent)(C.AllComposersContext.Provider, {
									value: { forcedMode: b },
									get children() {
										return (0, w.createComponent)(m.Show, {
											get when() {
												return y();
											},
											get fallback() {
												return (() => {
													const $ = c(),
														v = $.firstChild;
													return (
														$.style.setProperty("display", "flex"),
														$.style.setProperty("align-items", "center"),
														$.style.setProperty("justify-content", "center"),
														$.style.setProperty("gap", "4px"),
														$.style.setProperty("opacity", "0.5"),
														$.style.setProperty("height", "100%"),
														$.style.setProperty("width", "100%"),
														(0, i.insert)(
															$,
															b === "chat" ? "Chat" : "Composer",
															null,
														),
														(0, i.insert)(
															$,
															(0, w.createComponent)(r.$Z8b, {}),
															null,
														),
														$
													);
												})();
											},
											children: ($) => {
												const v = (0, u.useComposerLocation)($),
													S = (0, m.createMemo)(() =>
														v() !== f ? "history" : "composer",
													);
												return (0, w.createComponent)(d.ComposerPane, {
													location: f,
													get composerDataHandle() {
														return $();
													},
													get renderAs() {
														return S();
													},
												});
											},
										});
									},
								});
							} catch (l) {
								s.e = l;
							} finally {
								s.d();
							}
						},
						p,
						o,
					);
				e.renderComposerPane = g;
			},
		),
		define(
			de[4414],
			he([
				1, 0, 10, 8, 49, 72, 5, 39, 41, 32, 35, 146, 60, 219, 209, 506, 169,
				1075, 45, 66,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerChatViewPane = void 0);
				let s = class extends a.$TMb {
					static {
						this.TITLE = p.COMPOSER_CHAT_VIEW_PANE_TITLE;
					}
					constructor(y, $, v, S, I, T, P, k, L, D, M, N, A, R, O, B) {
						super(y, $, v, S, I, T, P, k, L, D, M),
							(this.composerService = N),
							(this.composerDataService = A),
							(this.composerViewsService = R),
							(this.editorGroupsService = O),
							(this.reactiveStorageService = B),
							(this._solidDisposable = void 0);
					}
					W(y) {
						super.W(y), this.rerender(y);
					}
					dispose() {
						super.dispose(), this._solidDisposable?.dispose();
					}
					focus() {
						super.focus(),
							this.composerService.focus(
								this.composerDataService.selectedChatId,
							),
							setTimeout(() => {
								this.composerViewsService.triggerShouldRecomputeCodeBlock(
									this.composerDataService.selectedChatId,
								),
									this.composerViewsService.triggerScrollToBottom(
										this.composerDataService.selectedChatId,
									);
							});
					}
					rerender(y) {
						this._solidDisposable &&
							(this._solidDisposable.dispose(),
							(this._solidDisposable = void 0)),
							(this._solidDisposable = (0, o.renderComposerPane)(
								y,
								this.Db,
								"pane",
								"chat",
							));
					}
				};
				(e.ComposerChatViewPane = s),
					(e.ComposerChatViewPane = s =
						Ne(
							[
								j(1, d.$uZ),
								j(2, w.$Xxb),
								j(3, t.$gj),
								j(4, i.$6j),
								j(5, h.$K1),
								j(6, C.$Li),
								j(7, m.$7rb),
								j(8, u.$iP),
								j(9, r.$km),
								j(10, E.$Uyb),
								j(11, c.IComposerService),
								j(12, n.IComposerDataService),
								j(13, g.IComposerViewsService),
								j(14, b.$EY),
								j(15, f.$0zb),
							],
							s,
						));
			},
		),
		define(
			de[1076],
			he([
				1, 0, 14, 3, 23, 9, 5, 21, 32, 35, 217, 223, 219, 209, 1075, 506, 45,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerEditorContribution =
						e.ComposerEditor =
						e.ComposerEditorInput =
						e.ComposerEditorInputSerializer =
						e.COMPOSER_EDITOR_ID =
							void 0),
					(e.COMPOSER_EDITOR_ID = "workbench.editor.composer");
				let f = class {
					constructor($) {
						this.composerDataService = $;
					}
					canSerialize($) {
						return $ instanceof b;
					}
					serialize($) {
						if ($ instanceof b) return JSON.stringify($.toJSON());
					}
					deserialize($, v) {
						const { composerId: S, forceMode: I } = JSON.parse(v);
						if (S) return b.create(S, I);
					}
				};
				(e.ComposerEditorInputSerializer = f),
					(e.ComposerEditorInputSerializer = f =
						Ne([j(0, c.IComposerDataService)], f));
				class b extends a.$LO {
					static {
						this.ID = "workbench.editor.composer.input";
					}
					constructor($, v) {
						super(), (this.composerId = $), (this.forceMode = v);
					}
					get typeId() {
						return b.ID;
					}
					get resource() {
						return E.URI.from({
							scheme: w.Schemas.composer,
							path: this.composerId,
						});
					}
					matches($) {
						return super.matches($)
							? !0
							: $ instanceof b && $.forceMode === this.forceMode;
					}
					getName() {
						return this.forceMode === "chat" ? "Chat" : "Composer";
					}
					getIcon() {
						return this.forceMode === "chat" ? t.$ak.comment : t.$ak.notebook;
					}
					getForceMode() {
						return this.forceMode;
					}
					toJSON() {
						return { composerId: this.composerId, forceMode: this.forceMode };
					}
					static create($, v) {
						return new b($, v);
					}
				}
				e.ComposerEditorInput = b;
				let s = class extends u.$JEb {
					static {
						o = this;
					}
					static {
						this.ID = e.COMPOSER_EDITOR_ID;
					}
					constructor($, v, S, I, T, P, k, L, D) {
						super(o.ID, $, v, S, I),
							(this._instantiationService = T),
							(this.composerService = P),
							(this.composerDataService = k),
							(this.composerViewsService = L),
							(this.reactiveStorageService = D),
							this.D(
								this.reactiveStorageService.onChangeEffectManuallyDisposed({
									deps: [
										() => {
											const M = this.W?.resource?.path;
											if (M)
												return this.composerViewsService.getComposerLocation(M);
										},
									],
									onChange: ({ deps: M, prevDeps: N }) => {
										const A = M[0],
											R = N?.[0];
										A && A !== R && this.dispose();
									},
								}),
							);
					}
					Y($) {}
					focus() {
						this.W &&
							this.composerService
								.getInputDelegate(this.W.resource.path)
								.focus();
					}
					async setInput($, v, S, I) {
						await super.setInput($, { ...v, pinned: !0 }, S, I);
						const T = $.resource.path,
							P = this.composerDataService.getComposerForceMode(T);
						this._solidDisposable && this._solidDisposable.dispose();
						const k = this.getContainer();
						k &&
							(this._solidDisposable = (0, n.renderComposerPane)(
								k,
								this._instantiationService,
								"editor",
								P,
							));
					}
					layout($) {}
					dispose() {
						this._solidDisposable?.dispose(), super.dispose();
					}
				};
				(e.ComposerEditor = s),
					(e.ComposerEditor =
						s =
						o =
							Ne(
								[
									j(1, m.$km),
									j(2, r.$iP),
									j(3, d.$lq),
									j(4, C.$Li),
									j(5, h.IComposerService),
									j(6, c.IComposerDataService),
									j(7, g.IComposerViewsService),
									j(8, p.$0zb),
								],
								s,
							));
				class l extends i.$1c {
					static {
						this.ID = "editor.contrib.composer";
					}
					constructor($) {
						super(), (this.editor = $);
					}
				}
				e.ComposerEditorContribution = l;
			},
		),
		define(
			de[4415],
			he([
				1, 0, 158, 33, 14, 58, 27, 54, 12, 28, 9, 56, 46, 65, 17, 496, 42, 866,
				11, 31, 8, 43, 93, 90, 45, 216, 25, 219, 793, 209, 1076, 426, 506, 169,
				382, 467, 107, 237, 816, 137, 226, 1290, 1051, 66, 18, 298, 169, 169,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.OpenComposerAsBar =
						e.OpenComposerChatAsEditor =
						e.CreateNewComposerChat =
						e.OpenComposerAsPane =
						e.OpenComposerAsEditor =
						e.CreateNewComposer =
						e.OpenComposerFromCurrentChat =
						e.StartComposerPromptFromSelection =
						e.StartComposerPrompt =
							void 0);
				const W = "navigation",
					X = "1_composerActions",
					Y = "2_viewActions";
				class ie extends f.$3X {
					constructor() {
						super({
							id: N.COMPOSER_EDIT_ACTION_ID,
							title: "Start Composer Prompt",
							keybinding: {
								primary: N.COMPOSER_EDIT_DEFAULT_KEYBINDING,
								weight: l.KeybindingWeight.CursorMaxPriority,
							},
							precondition: P.composerIsEnabled,
						});
					}
					async run(Ee, Ie, Be) {
						const Se = Ee.get(T.IComposerService),
							ke = Ee.get(M.IComposerViewsService),
							Ue = Ee.get(k.IComposerDataService),
							qe = Ee.get(v.$0zb);
						Ie = Ie ?? "edit";
						let Ae = Ie === "chat" ? Ue.selectedChatId : Ue.selectedComposerId;
						if (qe.applicationUserPersistentStorage.composerState.unification) {
							Ae = Ue.selectedComposerId;
							const Me =
								((Ie === "chat" &&
									qe.applicationUserPersistentStorage.composerState
										.isAutoApplyEnabled) ||
									(Ie === "edit" &&
										!qe.applicationUserPersistentStorage.composerState
											.isAutoApplyEnabled)) &&
								ke.isFocused(Ue.selectedComposerId);
							Ie === "chat"
								? qe.setApplicationUserPersistentStorage(
										"composerState",
										"isAutoApplyEnabled",
										!1,
									)
								: qe.setApplicationUserPersistentStorage(
										"composerState",
										"isAutoApplyEnabled",
										!0,
									),
								Me && (Be = { neverClose: !0 });
						}
						if (ke.isFocused(Ae) && Be?.neverClose !== !0) {
							ke.getComposerLocation(Ae) === "bar"
								? Se.openComposer(Ae, {
										view: ke.getComposerNonBarLocation(Ae),
									})
								: Se.close(Ae);
							return;
						}
						Se.openComposer(Ae, {
							insertSelection: !0,
							view: ke.getComposerNonBarLocation(Ae),
						});
					}
				}
				(e.StartComposerPrompt = ie),
					Ne(
						[(0, S.$KOb)(N.COMPOSER_EDIT_ACTION_ID)],
						ie.prototype,
						"run",
						null,
					),
					(0, f.$4X)(ie);
				class ne extends f.$3X {
					constructor() {
						super({
							id: N.COMPOSER_EDIT_FROM_SELECTION_ACTION_ID,
							title: "Start Composer Prompt From Selection",
							precondition: P.composerIsEnabled,
						});
					}
					async run(Ee, Ie, Be) {
						const Se = Ee.get(T.IComposerService),
							ke = Ee.get(R.$y9b),
							Ue = Ie.getValueInRange(Be),
							qe = Ie.getDecorationsInRange(Be),
							Ae = Ie.uri,
							Me = Ae.path,
							De = ke.getNotepadData(Me);
						if (!De) {
							console.error("[ian] no notepad data found for", Ae);
							return;
						}
						const Re = [],
							je = {},
							Ve = (0, G.$2gc)();
						for (const et of qe)
							if (
								!(
									et.range.startLineNumber < Be.startLineNumber ||
									et.range.endLineNumber > Be.endLineNumber ||
									(et.range.startLineNumber === Be.startLineNumber &&
										et.range.startColumn < Be.startColumn) ||
									(et.range.endLineNumber === Be.endLineNumber &&
										et.range.endColumn > Be.endColumn)
								)
							) {
								for (const [rt, ft] of Object.entries(De.context.mentions))
									if ((0, G.$Ygc)(rt)) {
										for (const [bt, nt] of Object.entries(ft))
											if (nt.find((ct) => ct.uuid === et.id)) {
												Re.push(et), (je[et.id] = rt);
												const ct = De.context[rt].find(
													(gt) => (0, G.$Zgc)(rt, gt) === bt,
												);
												ct &&
													(Ve[rt] || (Ve[rt] = []),
													Ve[rt].push(ct),
													Ve.mentions[rt][bt] || (Ve.mentions[rt][bt] = []),
													Ve.mentions[rt][bt].push({ uuid: et.id }));
												break;
											}
									} else if (ft.find((nt) => nt.uuid === et.id)) {
										Re.push(et),
											(je[et.id] = rt),
											(Ve[rt] = De.context[rt]),
											Ve.mentions[rt].push({ uuid: et.id });
										break;
									}
							}
						const Ze = await this.convertToLexicalFormat(Ue, Re, je, Be, Ie);
						await Se.createComposer({
							partialState: {
								text: Ue,
								richText: Ze,
								context: Ve,
								hasChangedContext: !0,
							},
							dontRefreshReactiveContext: !0,
						});
					}
					async convertToLexicalFormat(Ee, Ie, Be, Se, ke) {
						const Ue = (0, t.createEditor)({ nodes: [U.$2_b] });
						return (
							await new Promise((qe) =>
								Ue.update(() => {
									const Ae = (0, t.$getRoot)(),
										Me = (0, t.$createParagraphNode)();
									Ae.append(Me);
									let De = 0;
									const Re = Ie.sort(
										(je, Ve) =>
											Math.max(
												0,
												this.getRelativeIndex(
													je.range.startLineNumber,
													je.range.startColumn,
													Se,
													ke,
													Ee.length,
												),
											) -
											Math.max(
												0,
												this.getRelativeIndex(
													Ve.range.startLineNumber,
													Ve.range.startColumn,
													Se,
													ke,
													Ee.length,
												),
											),
									);
									for (const je of Re) {
										const Ve = Math.max(
												0,
												this.getRelativeIndex(
													je.range.startLineNumber,
													je.range.startColumn,
													Se,
													ke,
													Ee.length,
												),
											),
											Ze = Math.min(
												Ee.length,
												this.getRelativeIndex(
													je.range.endLineNumber,
													je.range.endColumn,
													Se,
													ke,
													Ee.length,
												),
											);
										if (Ve > De) {
											const et = Ee.substring(De, Ve);
											Me.append((0, t.$createTextNode)(et));
										}
										if (Ve < Ze) {
											const et = Be[je.id];
											if (et) {
												const rt = (0, G.$5gc)(et),
													ft = (0, U.$createMentionNode)(
														rt,
														void 0,
														void 0,
														rt,
														void 0,
														je.id,
													);
												ft.setTextContent(Ee.substring(Ve, Ze)), Me.append(ft);
											} else {
												const rt = Ee.substring(Ve, Ze);
												Me.append((0, t.$createTextNode)(rt));
											}
										}
										De = Ze;
									}
									if (De < Ee.length) {
										const je = Ee.substring(De);
										Me.append((0, t.$createTextNode)(je));
									}
									qe();
								}),
							),
							JSON.stringify(Ue.getEditorState())
						);
					}
					getRelativeIndex(Ee, Ie, Be, Se, ke) {
						let Ue = 0;
						const qe = Be.startLineNumber,
							Ae = Be.endLineNumber;
						for (let Me = qe; Me < Ee && Me <= Ae; Me++) {
							const De =
								Me === qe
									? Se.getLineLength(Me) - Be.startColumn + 1
									: Se.getLineLength(Me) + 1;
							Ue += De;
						}
						return (
							Ee === qe
								? (Ue += Ie - Be.startColumn)
								: Ee <= Ae
									? (Ue += Ie - 1)
									: (Ue = ke),
							Ue
						);
					}
				}
				(e.StartComposerPromptFromSelection = ne),
					Ne(
						[(0, S.$KOb)(N.COMPOSER_EDIT_FROM_SELECTION_ACTION_ID)],
						ne.prototype,
						"run",
						null,
					),
					Ne(
						[
							(0, S.$KOb)(
								"StartComposerPromptFromSelection.convertToLexicalFormat",
							),
						],
						ne.prototype,
						"convertToLexicalFormat",
						null,
					),
					Ne(
						[(0, S.$KOb)("StartComposerPromptFromSelection.getRelativeIndex")],
						ne.prototype,
						"getRelativeIndex",
						null,
					),
					(0, f.$4X)(ne);
				class ee extends f.$3X {
					constructor() {
						super({
							id: N.OPEN_COMPOSER_FROM_CURRENT_CHAT_ACTION_ID,
							title: {
								value: "Cursor: Open Composer from Current Chat",
								original: "Cursor: Open Composer from Current Chat",
							},
							precondition: P.composerIsEnabled,
						});
					}
					async run(Ee, Ie, Be) {}
				}
				(e.OpenComposerFromCurrentChat = ee),
					Ne(
						[(0, S.$KOb)(N.OPEN_COMPOSER_FROM_CURRENT_CHAT_ACTION_ID)],
						ee.prototype,
						"run",
						null,
					),
					(0, f.$4X)(ee);
				class _ extends f.$3X {
					constructor() {
						super({
							id: N.NEW_COMPOSER_ACTION_ID,
							title: {
								value: "Cursor: New Chat",
								original: "Cursor: New Chat",
							},
							f1: !1,
							precondition: P.composerIsEnabled,
						});
					}
					async run(Ee, ...Ie) {
						await Ee.get(T.IComposerService).createComposer();
					}
				}
				Ne([(0, S.$KOb)(N.NEW_COMPOSER_ACTION_ID)], _.prototype, "run", null),
					(0, f.$4X)(_);
				class te extends f.$3X {
					constructor() {
						super({
							id: N.ADD_FILES_TO_CURRENT_COMPOSER_ACTION_ID,
							title: {
								value: "Cursor: Add Files to Chat",
								original: "Cursor: Add Files to Chat",
							},
							f1: !1,
							precondition: P.composerIsEnabled,
						});
					}
					async run(Ee, Ie, Be = "edit", ...Se) {
						const ke = Ee.get(k.IComposerDataService),
							Ue = Ee.get(T.IComposerService),
							qe = Ee.get(V.$IY),
							Ae = Ee.get(q.$EY),
							Me = Ee.get(y.$fMb),
							De = Ee.get(A.$LWb),
							Re = (0, A.$NWb)(Ie, Me, qe, Ae, De),
							je = ke.getSelectedIdByForceMode(Be);
						if (Re.length) {
							if ((console.log("[composer] resources", Re), !je)) {
								console.error("[composer] no selected composer id");
								return;
							}
							ke.updateComposerDataSetStore(je, (Ve) =>
								Ve("context", "fileSelections", (Ze) => {
									const et = Re.filter(
										(rt) =>
											Ze.find(
												(ft) =>
													u.URI.revive(ft.uri).toString() ===
													u.URI.revive(rt).toString(),
											) === void 0,
									).map((rt) => ({ uri: rt, fileName: (0, d.$sc)(rt.fsPath) }));
									return [...Ze, ...et];
								}),
							),
								Ue.handleOpenComposer(je, { skipUpdatingFileSelections: !0 });
						}
					}
				}
				Ne(
					[(0, S.$KOb)(N.ADD_FILES_TO_CURRENT_COMPOSER_ACTION_ID)],
					te.prototype,
					"run",
					null,
				),
					(0, f.$4X)(te);
				class Q extends f.$3X {
					constructor() {
						super({
							id: N.ADD_FILES_TO_NEW_COMPOSER_ACTION_ID,
							title: {
								value: "Cursor: Add Files to New Chat",
								original: "Cursor: Add Files to New Chat",
							},
							f1: !1,
							precondition: P.composerIsEnabled,
						});
					}
					async run(Ee, Ie, Be = "edit", ...Se) {
						const ke = Ee.get(b.$ek);
						await Ee.get(T.IComposerService).createComposer({ forceMode: Be }),
							ke.executeCommand(
								N.ADD_FILES_TO_CURRENT_COMPOSER_ACTION_ID,
								Ie,
								Be,
							);
					}
				}
				Ne(
					[(0, S.$KOb)(N.ADD_FILES_TO_NEW_COMPOSER_ACTION_ID)],
					Q.prototype,
					"run",
					null,
				),
					(0, f.$4X)(Q);
				class Z extends f.$3X {
					constructor() {
						super({
							id: N.ADD_FILES_TO_CURRENT_COMPOSER_CHAT_ACTION_ID,
							title: {
								value: "Cursor: Add Files to Chat",
								original: "Cursor: Add Files to Chat",
							},
							f1: !1,
							precondition: P.composerIsEnabled,
						});
					}
					async run(Ee, Ie, ...Be) {
						Ee.get(b.$ek).executeCommand(
							N.ADD_FILES_TO_CURRENT_COMPOSER_ACTION_ID,
							Ie,
							"chat",
						);
					}
				}
				Ne(
					[(0, S.$KOb)(N.ADD_FILES_TO_CURRENT_COMPOSER_CHAT_ACTION_ID)],
					Z.prototype,
					"run",
					null,
				),
					(0, f.$4X)(Z);
				class se extends f.$3X {
					constructor() {
						super({
							id: N.ADD_FILES_TO_NEW_COMPOSER_CHAT_ACTION_ID,
							title: {
								value: "Cursor: Add Files to New Chat",
								original: "Cursor: Add Files to New Chat",
							},
							f1: !1,
							precondition: P.composerIsEnabled,
						});
					}
					async run(Ee, Ie, ...Be) {
						Ee.get(b.$ek).executeCommand(
							N.ADD_FILES_TO_NEW_COMPOSER_ACTION_ID,
							Ie,
							"chat",
						);
					}
				}
				Ne(
					[(0, S.$KOb)(N.ADD_FILES_TO_NEW_COMPOSER_CHAT_ACTION_ID)],
					se.prototype,
					"run",
					null,
				),
					(0, f.$4X)(se);
				const re = m.$l
					? C.KeyMod.CtrlCmd | C.KeyMod.Shift | C.KeyCode.KeyY
					: C.KeyMod.CtrlCmd | C.KeyCode.KeyY;
				class le extends f.$3X {
					constructor() {
						super({
							id: N.NEW_CHAT_FOLLOW_UP_ACTION_ID,
							title: {
								value: "Cursor: Focus Chat Followup",
								original: "Cursor: Focus Chat Followup",
							},
							f1: !0,
							keybinding: {
								primary: re,
								weight: l.KeybindingWeight.ExternalExtension + 10,
							},
						});
					}
					async run(Ee, ...Ie) {
						const Be = Ee.get(T.IComposerService),
							Se = Ee.get(k.IComposerDataService);
						Se.updateComposerData(Se.selectedChatId, {
							editingBubbleId: void 0,
							selectedBubbleId: void 0,
						}),
							Be.handleOpenComposer(Se.selectedChatId, {
								insertSelection: !0,
								focusMainInputBox: !0,
							});
					}
				}
				(0, f.$4X)(le);
				class oe extends f.$3X {
					constructor() {
						super({
							id: N.DEBUG_WITH_AI_ACTION_ID,
							title: { value: "Debug with AI", original: "Debug with AI" },
							f1: !1,
							keybinding: {
								primary: N.DEBUG_WITH_AI_DEFAULT_KEYBINDING,
								weight: l.KeybindingWeight.ExternalExtension + 10,
								when: B.TerminalContextKeys.focus,
							},
						});
					}
					async run(Ee, Ie, ...Be) {
						const Se = Ee.get(k.IComposerDataService),
							ke = Ee.get(T.IComposerService);
						if (!Ee.get(O.$iIb).activeInstance) {
							console.error(
								"[composer] No active terminal when trying to debug",
							);
							return;
						}
						if (!(await ke.getTerminalText())) {
							console.error(
								"[composer] No selection to insert when trying to debug",
							);
							return;
						}
						(Ie = "chat"), await ke.createComposer({ forceMode: Ie });
						const Me = Se.getSelectedIdByForceMode(Ie ?? "edit");
						await ke.insertSelectionIntoComposer(Me, { origin: "terminal" }),
							ke.submitChatMaybeAbortCurrent(
								Me,
								"Please help me debug this code. Only debug the latest error.",
							);
					}
				}
				Ne([(0, S.$KOb)(N.DEBUG_WITH_AI_ACTION_ID)], oe.prototype, "run", null),
					(0, f.$4X)(oe);
				class ae extends f.$3X {
					constructor() {
						super({
							id: N.SELECT_PREVIOUS_COMPOSER_ACTION_ID,
							title: {
								value: "Cursor: Switch to Previous Composer",
								original: "Cursor: Switch to Previous Composer",
							},
							f1: !1,
							keybinding: {
								primary: C.KeyMod.WinCtrl | C.KeyCode.Tab,
								weight: l.KeybindingWeight.ExternalExtension + 10,
								when: s.$Kj.equals("view", E.$FX),
							},
						});
					}
					run(Ee, ...Ie) {
						const Be = Ee.get(D.IComposerUtilsService),
							Se = Ee.get(M.IComposerViewsService),
							ke = Ee.get(k.IComposerDataService);
						Be.selectPrevComposer(), Se.focus(ke.selectedComposerId, !0);
					}
				}
				Ne(
					[(0, S.$KOb)(N.SELECT_PREVIOUS_COMPOSER_ACTION_ID)],
					ae.prototype,
					"run",
					null,
				);
				class pe extends f.$3X {
					constructor() {
						super({
							id: N.SELECT_NEXT_COMPOSER_ACTION_ID,
							title: {
								value: "Cursor: Switch to Next Composer",
								original: "Cursor: Switch to Next Composer",
							},
							f1: !1,
							keybinding: {
								primary: C.KeyMod.WinCtrl | C.KeyCode.Tab | C.KeyMod.Shift,
								weight: l.KeybindingWeight.ExternalExtension + 10,
								when: s.$Kj.equals("view", E.$FX),
							},
						});
					}
					run(Ee, ...Ie) {
						const Be = Ee.get(D.IComposerUtilsService),
							Se = Ee.get(M.IComposerViewsService),
							ke = Ee.get(k.IComposerDataService);
						Be.selectNextComposer(), Se.focus(ke.selectedComposerId, !0);
					}
				}
				Ne(
					[(0, S.$KOb)(N.SELECT_NEXT_COMPOSER_ACTION_ID)],
					pe.prototype,
					"run",
					null,
				),
					(0, f.$4X)(ae),
					(0, f.$4X)(pe);
				class $e extends f.$3X {
					constructor() {
						super({
							id: N.SELECT_PREVIOUS_COMPOSER_CHAT_ACTION_ID,
							title: {
								value: "Cursor: Switch to Previous Composer",
								original: "Cursor: Switch to Previous Composer",
							},
							f1: !1,
							keybinding: {
								primary: C.KeyMod.WinCtrl | C.KeyCode.Tab,
								weight: l.KeybindingWeight.ExternalExtension + 10,
								when: s.$Kj.equals("view", E.$GX),
							},
						});
					}
					run(Ee, ...Ie) {
						const Be = Ee.get(D.IComposerUtilsService),
							Se = Ee.get(M.IComposerViewsService),
							ke = Ee.get(k.IComposerDataService);
						Be.selectPrevComposerChat(), Se.focus(ke.selectedChatId, !0);
					}
				}
				Ne(
					[(0, S.$KOb)(N.SELECT_PREVIOUS_COMPOSER_CHAT_ACTION_ID)],
					$e.prototype,
					"run",
					null,
				);
				class ye extends f.$3X {
					constructor() {
						super({
							id: N.SELECT_NEXT_COMPOSER_CHAT_ACTION_ID,
							title: {
								value: "Cursor: Switch to Next Composer",
								original: "Cursor: Switch to Next Composer",
							},
							f1: !1,
							keybinding: {
								primary: C.KeyMod.WinCtrl | C.KeyCode.Tab | C.KeyMod.Shift,
								weight: l.KeybindingWeight.ExternalExtension + 10,
								when: s.$Kj.equals("view", E.$GX),
							},
						});
					}
					run(Ee, ...Ie) {
						const Be = Ee.get(D.IComposerUtilsService),
							Se = Ee.get(M.IComposerViewsService),
							ke = Ee.get(k.IComposerDataService);
						Be.selectNextComposerChat(), Se.focus(ke.selectedChatId, !0);
					}
				}
				Ne(
					[(0, S.$KOb)(N.SELECT_NEXT_COMPOSER_CHAT_ACTION_ID)],
					ye.prototype,
					"run",
					null,
				),
					(0, f.$4X)($e),
					(0, f.$4X)(ye);
				class ue extends f.$3X {
					constructor() {
						super({
							id: N.ADD_SYMBOL_TO_CURRENT_COMPOSER_ACTION_ID,
							title: {
								value: "Cursor: New Chat with Selections",
								original: "Cursor: New Chat with Selections",
							},
							f1: !1,
						});
					}
					async run(Ee, Ie, Be = "edit", ...Se) {
						const ke = Ee.get(T.IComposerService),
							Ue = Ee.get(k.IComposerDataService),
							qe = Ee.get(p.$MO);
						let Ae = [];
						if (Ie.codeSelections && Ie.codeSelections.length > 0)
							Ae = Ie.codeSelections;
						else if (Ie.locationLinks && Ie.locationLinks.length > 0) {
							const De = Ee.get(x.$Kfc),
								Re = Ee.get(I.$Vi),
								je = Ee.get(c.$dtb).getFocusedCodeEditor(),
								Ve = je?.getModel();
							if (!Ve) return;
							Ae = (
								await Promise.all(
									Ie.locationLinks.map(async (Ze) => {
										const {
												range: et,
												uri: rt,
												originSelectionRange: ft,
												targetSelectionRange: bt,
											} = Ze,
											nt = Ie.positionOverride ?? je?.getPosition();
										if (!nt) return;
										const ct = new i.$Ce().token,
											gt =
												await De.getSymbolContextForSymbolAtThisPositionProto({
													symbol: { uri: rt, position: nt },
													ctxtInfo: { getRawText: !0 },
													model: Ve,
													cancellationOptions: { token: ct, timeout: 5e3 },
												}),
											[ht] = gt?.definitions ?? [];
										if (!ht || !ht.symbol) return;
										const Rt = Re.resolveRelativePath(ht.relativeWorkspacePath),
											Nt = ht.symbol.range;
										if (!Nt) return;
										const ti = (await qe.createModelReference(Rt)).object,
											kt = {
												startLineNumber: Nt.startLineNumber,
												startColumn: 1,
												endLineNumber: Nt.endLineNumber,
												endColumn: Nt.endColumn,
											},
											hi = ti.textEditorModel.getValueInRange(kt),
											di = `\`\`\`${ti.getLanguageId()}
${hi}
\`\`\``,
											Ye = {
												selectionStartLineNumber: Nt.startLineNumber,
												selectionStartColumn: Nt.startColumn,
												positionLineNumber: Nt.endLineNumber,
												positionColumn: Nt.endColumn,
											};
										return { uri: Rt, range: Ye, text: di, rawText: hi };
									}),
								)
							).filter(r.$tg);
						} else return;
						const Me = Ue.getSelectedIdByForceMode(Be);
						ke.handleOpenComposer(Me);
						for (const De of Ae)
							ke.addContextToLastFocused({
								composerId: Me,
								contextType: "selections",
								value: De,
							});
					}
				}
				Ne(
					[(0, S.$KOb)(N.ADD_SYMBOL_TO_CURRENT_COMPOSER_ACTION_ID)],
					ue.prototype,
					"run",
					null,
				),
					(0, f.$4X)(ue);
				class fe extends f.$3X {
					constructor() {
						super({
							id: N.ADD_SYMBOL_TO_NEW_COMPOSER_ACTION_ID,
							title: {
								value: "New Chat with Selections",
								original: "New Chat with Selections",
							},
							f1: !1,
						});
					}
					async run(Ee, Ie, Be = "edit", ...Se) {
						const ke = Ee.get(b.$ek);
						await Ee.get(T.IComposerService).createComposer({ forceMode: Be }),
							await ke.executeCommand(
								N.ADD_SYMBOL_TO_CURRENT_COMPOSER_ACTION_ID,
								Ie,
							);
					}
				}
				Ne(
					[(0, S.$KOb)(N.ADD_SYMBOL_TO_NEW_COMPOSER_ACTION_ID)],
					fe.prototype,
					"run",
					null,
				),
					(0, f.$4X)(fe);
				class me extends f.$3X {
					constructor() {
						super({
							id: N.NEW_COMPOSER_CHAT_ACTION_ID,
							title: { value: "New Chat", original: "New Chat" },
							f1: !1,
							keybinding: {
								primary: N.NEW_CHAT_DEFAULT_KEYBINDING,
								weight: l.KeybindingWeight.ExternalExtension + 100,
							},
						});
					}
					async run(Ee, ...Ie) {
						const Be = Ee.get(T.IComposerService),
							Se = Ee.get(M.IComposerViewsService),
							ke = Ee.get(b.$ek);
						if (
							Ee.get(v.$0zb).applicationUserPersistentStorage.composerState
								.unification
						) {
							ke.executeCommand(o.$mbc);
							return;
						}
						const Ae = Ee.get(k.IComposerDataService).selectedChatId;
						if (Se.isFocused(Ae) && Be.isComposerEmpty(Ae)) {
							Be.close(Ae);
							return;
						} else
							Se.isFocused(Ae)
								? await Be.createComposer({ forceMode: "chat" })
								: (Be.isComposerConversationEmpty(Ae) ||
										(await Be.createComposer({ forceMode: "chat" })),
									ke.executeCommand(N.COMPOSER_EDIT_ACTION_ID, "chat", {
										neverClose: !0,
									}));
					}
				}
				Ne(
					[(0, S.$KOb)(N.NEW_COMPOSER_CHAT_ACTION_ID)],
					me.prototype,
					"run",
					null,
				);
				class ve extends f.$3X {
					constructor() {
						super({
							id: o.$mbc,
							title: {
								value: "Cursor: Insert Selection Into Chat",
								original: "Cursor: Insert Selection Into Chat",
							},
							f1: !0,
							keybinding: {
								primary: N.INSERT_SELECTION_INTO_CHAT_DEFAULT_KEYBINDING,
								weight: l.KeybindingWeight.ExternalExtension + 10,
							},
						});
					}
					async run(Ee, Ie = {}, ...Be) {
						Ee.get(b.$ek).executeCommand(N.COMPOSER_EDIT_ACTION_ID, "chat", Ie);
					}
				}
				Ne([(0, S.$KOb)(o.$mbc)], ve.prototype, "run", null),
					(0, f.$4X)(me),
					(0, f.$4X)(ve);
				class ge extends f.$3X {
					constructor() {
						super({
							id: E.$GV,
							title: {
								value: "Cursor: New Composer",
								original: "Cursor: New Composer",
							},
							f1: !0,
							icon: w.$ak.add,
							keybinding: {
								primary: C.KeyMod.CtrlCmd | C.KeyCode.KeyN,
								weight: l.KeybindingWeight.CursorDefaultPriority,
								when: s.$Kj.equals("focusedView", E.$FX),
							},
							menu: {
								id: f.$XX.ViewTitle,
								group: W,
								order: 1,
								when: s.$Kj.equals("view", E.$FX),
							},
						});
					}
					async run(Ee) {
						const Be = Ee.get(V.$IY).activeEditor,
							Se = Ee.get(b.$ek);
						if (
							Be instanceof L.ComposerEditorInput &&
							Be.getForceMode() === "chat"
						) {
							Se.executeCommand(N.NEW_COMPOSER_CHAT_ACTION_ID);
							return;
						}
						await Ee.get(T.IComposerService).createComposer(),
							Se.executeCommand(N.COMPOSER_EDIT_ACTION_ID, "edit", {
								neverClose: !0,
							});
					}
				}
				(e.CreateNewComposer = ge),
					Ne([(0, S.$KOb)(E.$GV)], ge.prototype, "run", null);
				class be extends f.$3X {
					constructor() {
						super({
							id: N.SHOW_COMPOSER_HISTORY_ACTION_ID,
							title: {
								value: "Show Composer History",
								original: "Show Composer History",
							},
							keybinding: {
								primary: C.KeyMod.CtrlCmd | C.KeyMod.Alt | C.KeyCode.KeyL,
								weight: l.KeybindingWeight.CursorDefaultPriority,
							},
							f1: !0,
							icon: w.$ak.history,
							menu: {
								id: f.$XX.ViewTitle,
								group: W,
								order: 1,
								when: s.$Kj.equals("view", E.$FX),
							},
						});
					}
					run(Ee, ...Ie) {
						Ee.get(T.IComposerService).showComposerHistory();
					}
				}
				Ne(
					[(0, S.$KOb)(N.SHOW_COMPOSER_HISTORY_ACTION_ID)],
					be.prototype,
					"run",
					null,
				);
				class Ce extends f.$3X {
					constructor() {
						super({
							id: J.OPEN_COMPOSER_AS_EDITOR_ACTION_ID,
							title: {
								value: "Open Composer as Editor",
								original: "Open Composer as Editor",
							},
							f1: !0,
							icon: w.$ak.screenFull,
							menu: {
								id: f.$XX.ViewTitle,
								group: Y,
								order: 1,
								when: s.$Kj.equals("view", E.$FX),
							},
						});
					}
					async run(Ee) {
						const Ie = Ee.get(T.IComposerService),
							Be = Ee.get(k.IComposerDataService),
							Se = Ee.get(z.$ifc);
						Ie.handleOpenComposerEditor(Be.selectedComposerId),
							Se.trackEvent("composer.open_as_editor");
					}
				}
				(e.OpenComposerAsEditor = Ce),
					Ne([(0, S.$KOb)("composer.openAsEditor")], Ce.prototype, "run", null);
				class Le extends f.$3X {
					constructor() {
						super({
							id: K.OPEN_COMPOSER_AS_PANE_ACTION_ID,
							title: {
								value: "Open Composer as Pane",
								original: "Open Composer as Pane",
							},
							f1: !0,
							icon: w.$ak.layoutSidebarRight,
						});
					}
					async run(Ee) {
						const Ie = Ee.get(T.IComposerService),
							Be = Ee.get(k.IComposerDataService),
							ke = Ee.get(V.$IY).activeEditor;
						let Ue = Be.selectedComposerId;
						ke instanceof L.ComposerEditorInput && (Ue = ke?.resource?.path),
							Ue && Ie.handleOpenComposerPane(Ue);
					}
				}
				(e.OpenComposerAsPane = Le),
					Ne([(0, S.$KOb)("composer.openAsPane")], Le.prototype, "run", null),
					(0, f.$4X)(Le),
					(0, f.$4X)(ge),
					(0, f.$4X)(be),
					(0, f.$4X)(Ce),
					f.$ZX.appendMenuItem(f.$XX.EditorTitle, {
						command: { id: E.$GV, title: "New Composer", icon: w.$ak.add },
						group: W,
						when: s.$Kj.and(
							s.$Kj.equals("activeEditor", L.COMPOSER_EDITOR_ID),
							s.$Kj.equals("currentActiveEditorIsChat", !1),
						),
						order: 1,
					}),
					f.$ZX.appendMenuItem(f.$XX.EditorTitle, {
						command: { id: E.$HV, title: "New Chat", icon: w.$ak.add },
						group: W,
						when: s.$Kj.equals("currentActiveEditorIsChat", !0),
						order: 1,
					}),
					f.$ZX.appendMenuItem(f.$XX.EditorTitle, {
						command: {
							id: N.SHOW_COMPOSER_HISTORY_ACTION_ID,
							title: "Show Composer History",
							icon: w.$ak.history,
						},
						group: X,
						when: s.$Kj.and(
							s.$Kj.equals("activeEditor", L.COMPOSER_EDITOR_ID),
							s.$Kj.equals("currentActiveEditorIsChat", !1),
						),
						order: 1,
					}),
					f.$ZX.appendMenuItem(f.$XX.EditorTitle, {
						command: {
							id: N.SHOW_COMPOSER_CHAT_HISTORY_ACTION_ID,
							title: "Show Chat History",
							icon: w.$ak.history,
						},
						group: X,
						when: s.$Kj.equals("currentActiveEditorIsChat", !0),
						order: 1,
					}),
					f.$ZX.appendMenuItem(f.$XX.EditorTitle, {
						command: {
							id: K.OPEN_COMPOSER_AS_PANE_ACTION_ID,
							title: "Open as Pane",
							icon: w.$ak.layoutSidebarRight,
						},
						group: Y,
						when: s.$Kj.equals("activeEditor", L.COMPOSER_EDITOR_ID),
						order: 1,
					}),
					f.$ZX.appendMenuItem(f.$XX.EditorTitle, {
						command: {
							id: K.OPEN_COMPOSER_AS_BAR_ACTION_ID,
							title: "Open as Bar",
							icon: w.$ak.primitiveSquare,
						},
						group: Y,
						when: s.$Kj.and(
							s.$Kj.equals("activeEditor", L.COMPOSER_EDITOR_ID),
							s.$Kj.equals("currentActiveEditorIsChat", !1),
						),
						order: 2,
					});
				class Fe extends f.$3X {
					constructor() {
						super({
							id: E.$HV,
							title: {
								value: "Cursor: New Chat",
								original: "Cursor: New Chat",
							},
							f1: !0,
							icon: w.$ak.add,
							keybinding: {
								primary: C.KeyMod.CtrlCmd | C.KeyCode.KeyN,
								weight: l.KeybindingWeight.CursorDefaultPriority,
								when: s.$Kj.equals("focusedView", E.$GX),
							},
							menu: {
								id: f.$XX.ViewTitle,
								group: W,
								order: 1,
								when: s.$Kj.and(s.$Kj.equals("view", E.$GX)),
							},
						});
					}
					async run(Ee) {
						await Ee.get(T.IComposerService).createComposer({
							forceMode: "chat",
						});
					}
				}
				(e.CreateNewComposerChat = Fe),
					Ne([(0, S.$KOb)(E.$HV)], Fe.prototype, "run", null);
				class Oe extends f.$3X {
					constructor() {
						super({
							id: N.SHOW_COMPOSER_CHAT_HISTORY_ACTION_ID,
							title: {
								value: "Show Chat History",
								original: "Show Chat History",
							},
							f1: !0,
							icon: w.$ak.history,
							menu: {
								id: f.$XX.ViewTitle,
								group: W,
								order: 2,
								when: s.$Kj.equals("view", E.$GX),
							},
						});
					}
					run(Ee, ...Ie) {
						Ee.get(T.IComposerService).showChatHistory();
					}
				}
				Ne(
					[(0, S.$KOb)(N.SHOW_COMPOSER_CHAT_HISTORY_ACTION_ID)],
					Oe.prototype,
					"run",
					null,
				),
					(0, f.$4X)(
						class extends f.$3X {
							constructor() {
								super({
									id: E.$aX,
									title: {
										value: "Index Main Repository",
										original: "Index Main Repository",
									},
									f1: !1,
								});
							}
							async run(Ee) {
								const Ie = Ee.get(F.$J6b);
								Ee.get(b.$ek).executeCommand(
									E.$QV,
									"features",
									"cursor-settings-codebase-indexing",
								),
									await Ie.indexMainRepository();
							}
						},
					);
				class xe extends f.$3X {
					constructor() {
						super({
							id: "composer.openChatAsEditor",
							title: {
								value: "Open Chat as Editor",
								original: "Open Chat as Editor",
							},
							f1: !0,
							icon: w.$ak.screenFull,
							menu: {
								id: f.$XX.ViewTitle,
								group: Y,
								order: 4,
								when: s.$Kj.equals("view", E.$GX),
							},
						});
					}
					async run(Ee) {
						const Ie = Ee.get(T.IComposerService),
							Be = Ee.get(k.IComposerDataService);
						Ie.handleOpenComposerEditor(Be.selectedChatId);
					}
				}
				(e.OpenComposerChatAsEditor = xe),
					Ne(
						[(0, S.$KOb)("composer.openChatAsEditor")],
						xe.prototype,
						"run",
						null,
					),
					(0, f.$4X)(Fe),
					(0, f.$4X)(Oe),
					(0, f.$4X)(xe);
				const He = (Te, Ee) => {
						const Ie = Te.getActiveCodeEditor();
						if (!Ie) return !1;
						const Be = Ie.getModel(),
							Se = Ie.getPosition();
						if (!Se || !Be) return !1;
						const ke = Se?.lineNumber;
						if (!ke) return !1;
						const Ue = Ie.getLineDecorations(ke);
						if (!Ue) return !1;
						const qe = Ue.map((Ae) => {
							const Me = Ee.getMarker(Be.uri, Ae);
							return !Me ||
								(Me.severity != $.MarkerSeverity.Error &&
									Me.severity != $.MarkerSeverity.AI &&
									Me.severity != $.MarkerSeverity.Warning) ||
								!Ae.range.containsPosition(Se)
								? !1
								: Me;
						}).filter((Ae) => !!Ae);
						return (
							qe.sort((Ae, Me) =>
								Ae.severity === Me.severity
									? 0
									: Ae.severity === $.MarkerSeverity.Error
										? -1
										: Me.severity === $.MarkerSeverity.Error
											? 1
											: Ae.severity === $.MarkerSeverity.Warning
												? -1
												: Me.severity === $.MarkerSeverity.Warning
													? 1
													: Ae.severity === $.MarkerSeverity.AI
														? -1
														: Me.severity === $.MarkerSeverity.AI
															? 1
															: 0,
							),
							qe.length === 0 ? !1 : qe[0]
						);
					},
					Ke = (Te, Ee) => {
						const Ie = Te.activeEditorPane?.getControl();
						if (!(0, a.$0sb)(Ie)) return !1;
						const Be = Ee.read({ resource: Ie.getModel()?.uri });
						if (Be.length === 0) return !1;
						const Se = Ie.getPosition();
						if (!Se) return !1;
						for (const ke of Be)
							if (
								new n.$iL(
									ke.startLineNumber,
									ke.startColumn,
									ke.endLineNumber,
									ke.endColumn,
								).containsPosition(Se)
							)
								return !0;
						return !1;
					};
				H.$Bdc.registerEditorAction(
					N.FIX_ERROR_IN_CHAT_MESSAGE_ACTION_ID,
					(Te, Ee, Ie) => {
						(0, h.$ntb)(
							class extends h.$itb {
								constructor() {
									super({
										id: N.FIX_ERROR_IN_CHAT_MESSAGE_ACTION_ID,
										label: "Cursor: Investigate Error in Chat",
										alias: "Cursor: Investigate Error in Chat",
										precondition: s.$Kj.function(() => Ke(Ee, Ie)),
										kbOpts: {
											primary: N.FIX_ERROR_IN_CHAT_DEFAULT_KEYBINDING,
											weight: l.KeybindingWeight.ExternalExtension + 1e3,
										},
									});
								}
								async run(Se, ke) {
									const Ue = Se.get(T.IComposerService),
										qe = Se.get(c.$dtb),
										Ae = Se.get(g.$bub),
										Me = He(qe, Ae);
									Me &&
										Ue.fixLinterErrorWithAI({
											errorMessage: Me.message,
											editorUri: Me.resource.toString(),
											range: new n.$iL(
												Me.startLineNumber,
												Me.startColumn,
												Me.endLineNumber,
												Me.endColumn,
											),
											addToCurrent: !0,
											forceMode: "chat",
										});
								}
							},
						);
					},
				),
					H.$Bdc.registerEditorAction(
						N.FIX_ERROR_IN_COMPOSER_MESSAGE_ACTION_ID,
						(Te, Ee, Ie) => {
							(0, h.$ntb)(
								class extends h.$itb {
									constructor() {
										super({
											id: N.FIX_ERROR_IN_COMPOSER_MESSAGE_ACTION_ID,
											label: "Cursor: Investigate Error in Composer",
											alias: "Cursor: Investigate Error in Composer",
											precondition: s.$Kj.function(() => Ke(Ee, Ie)),
											kbOpts: {
												primary: N.FIX_ERROR_IN_COMPOSER_DEFAULT_KEYBINDING,
												weight: l.KeybindingWeight.ExternalExtension + 1e3,
											},
										});
									}
									async run(Se, ke) {
										const Ue = Se.get(T.IComposerService),
											qe = Se.get(c.$dtb),
											Ae = Se.get(g.$bub),
											Me = He(qe, Ae);
										Me &&
											Ue.fixLinterErrorWithAI({
												errorMessage: Me.message,
												editorUri: Me.resource.toString(),
												range: new n.$iL(
													Me.startLineNumber,
													Me.startColumn,
													Me.endLineNumber,
													Me.endColumn,
												),
												addToCurrent: !0,
												forceMode: "edit",
											});
									}
								},
							);
						},
					);
				class Je extends f.$3X {
					constructor() {
						super({
							id: K.OPEN_COMPOSER_AS_BAR_ACTION_ID,
							title: {
								value: "Open Composer as Bar",
								original: "Open Composer as Bar",
							},
							f1: !0,
							icon: w.$ak.primitiveSquare,
							menu: {
								id: f.$XX.ViewTitle,
								group: Y,
								order: 3,
								when: s.$Kj.equals("view", E.$FX),
							},
							keybinding: {
								primary: C.KeyMod.CtrlCmd | C.KeyMod.Shift | C.KeyCode.KeyK,
								weight: l.KeybindingWeight.ExternalExtension + 1e3,
							},
						});
					}
					async run(Ee) {
						const Ie = Ee.get(T.IComposerService),
							Be = Ee.get(k.IComposerDataService),
							Se = Ee.get(M.IComposerViewsService),
							ke = Ee.get(z.$ifc),
							Ue = Be.selectedComposerId;
						Se.isFocused(Ue) && Se.getComposerLocation(Ue) === "bar"
							? Ie.blur(Ue)
							: (Ie.handleOpenComposerBar(Ue),
								ke.trackEvent("composer.open_as_bar"));
					}
				}
				(e.OpenComposerAsBar = Je),
					Ne([(0, S.$KOb)("composer.openAsBar")], Je.prototype, "run", null),
					(0, f.$4X)(Je);
			},
		),
		define(
			de[4416],
			he([
				1, 0, 10, 8, 49, 72, 5, 39, 41, 32, 35, 146, 60, 219, 209, 506, 169,
				1075,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerViewPane = void 0);
				let f = class extends a.$TMb {
					static {
						this.ID = p.COMPOSER_VIEW_PANE_ID;
					}
					static {
						this.TITLE = p.COMPOSER_VIEW_PANE_TITLE;
					}
					constructor(s, l, y, $, v, S, I, T, P, k, L, D, M, N) {
						super(s, l, y, $, v, S, I, T, P, k, L),
							(this.composerService = D),
							(this.composerDataService = M),
							(this.composerViewsService = N),
							(this._solidDisposable = void 0);
					}
					W(s) {
						super.W(s), this.rerender(s);
					}
					dispose() {
						super.dispose(), this._solidDisposable?.dispose();
					}
					focus() {
						super.focus(),
							this.composerService.focus(
								this.composerDataService.selectedComposerId,
							),
							setTimeout(() => {
								this.composerViewsService.triggerShouldRecomputeCodeBlock(
									this.composerDataService.selectedComposerId,
								),
									this.composerViewsService.triggerScrollToBottom(
										this.composerDataService.selectedComposerId,
									);
							});
					}
					rerender(s) {
						this._solidDisposable &&
							(this._solidDisposable.dispose(),
							(this._solidDisposable = void 0)),
							(this._solidDisposable = (0, o.renderComposerPane)(
								s,
								this.Db,
								"pane",
								"edit",
							));
					}
				};
				(e.ComposerViewPane = f),
					(e.ComposerViewPane = f =
						Ne(
							[
								j(1, d.$uZ),
								j(2, w.$Xxb),
								j(3, t.$gj),
								j(4, i.$6j),
								j(5, h.$K1),
								j(6, C.$Li),
								j(7, m.$7rb),
								j(8, u.$iP),
								j(9, r.$km),
								j(10, E.$Uyb),
								j(11, c.IComposerService),
								j(12, n.IComposerDataService),
								j(13, g.IComposerViewsService),
							],
							f,
						));
			},
		),
		define(
			de[2014],
			he([
				1, 0, 7, 58, 6, 3, 8, 102, 20, 5, 180, 45, 205, 30, 21, 239, 60, 4414,
				793, 209, 1076, 4416, 506, 169, 1075, 107, 66, 18, 96, 89,
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
			) {
				"use strict";
				var L;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerViewsService = void 0),
					(t = mt(t));
				let D = class extends E.$1c {
					static {
						L = this;
					}
					static {
						this.composerViewPaneContainer = c.$Io
							.as(p.Extensions.ViewContainersRegistry)
							.registerViewContainer(
								{
									id: $.COMPOSER_VIEW_PANE_CONTAINER_ID,
									title: {
										original: $.COMPOSER_VIEW_PANE_TITLE,
										value: $.COMPOSER_VIEW_PANE_TITLE,
									},
									icon: $.COMPOSER_VIEW_PANE_ICON,
									ctorDescriptor: new d.$Ji(g.$ZSb, [
										$.COMPOSER_VIEW_PANE_CONTAINER_ID,
										{ mergeViewWithContainerWhenSingleView: !0 },
									]),
									storageId: $.COMPOSER_VIEW_PANE_STORAGE_ID,
									hideIfEmpty: !1,
									rejectAddedViews: !0,
									order: 1,
								},
								p.ViewContainerLocation.AuxiliaryBar,
							);
					}
					static {
						this.composerViewPaneDescriptor = {
							id: i.$FX,
							name: {
								original: $.COMPOSER_VIEW_PANE_TITLE,
								value: $.COMPOSER_VIEW_PANE_TITLE,
							},
							containerIcon: $.COMPOSER_VIEW_PANE_ICON,
							ctorDescriptor: new d.$Ji(l.ComposerViewPane),
							hideByDefault: !1,
							canToggleVisibility: !1,
							canMoveView: !1,
							collapsed: !1,
						};
					}
					static {
						this.chatViewPaneContainer = c.$Io
							.as(p.Extensions.ViewContainersRegistry)
							.registerViewContainer(
								{
									id: i.$HX,
									title: {
										original: $.COMPOSER_CHAT_VIEW_PANE_TITLE,
										value: $.COMPOSER_CHAT_VIEW_PANE_TITLE,
									},
									icon: $.COMPOSER_CHAT_VIEW_PANE_ICON,
									ctorDescriptor: new d.$Ji(g.$ZSb, [
										i.$HX,
										{ mergeViewWithContainerWhenSingleView: !0 },
									]),
									storageId: $.COMPOSER_CHAT_VIEW_PANE_STORAGE_ID,
									hideIfEmpty: !0,
									rejectAddedViews: !0,
									order: 0,
								},
								p.ViewContainerLocation.AuxiliaryBar,
							);
					}
					static {
						this.chatViewPaneDescriptor = {
							id: i.$GX,
							name: {
								original: $.COMPOSER_CHAT_VIEW_PANE_TITLE,
								value: $.COMPOSER_CHAT_VIEW_PANE_TITLE,
							},
							containerIcon: $.COMPOSER_CHAT_VIEW_PANE_ICON,
							ctorDescriptor: new d.$Ji(o.ComposerChatViewPane),
							hideByDefault: !1,
							canToggleVisibility: !1,
							canMoveView: !1,
							collapsed: !1,
						};
					}
					constructor(N, A, R, O, B, U, z, F, x, H, q, V) {
						super(),
							(this.instantiationService = N),
							(this.workbenchLayoutService = A),
							(this.layoutService = R),
							(this.viewDescriptorService = O),
							(this.composerDataService = B),
							(this.reactiveStorageService = U),
							(this.viewsService = z),
							(this.terminalService = F),
							(this.editorService = x),
							(this.editorGroupsService = H),
							(this.storageService = q),
							(this.contextKeyService = V),
							(this._inputDelegates = new Map()),
							(this._prevPaneViewVisibility = !1),
							(this._skipReactToLocationOpening = !1),
							(this._cameFromTerminal = !1),
							(this._editors = []),
							(this._trackedGroups = new Set()),
							(this._skipUnregisterEditor = !1),
							(this._onDidHide = this.D(new w.$re())),
							(this.onDidHide = this._onDidHide.event),
							(this._onDidChangeChatPaneVisibility = this.D(new w.$re())),
							(this.onDidChangeChatPaneVisibility =
								this._onDidChangeChatPaneVisibility.event),
							(this._openComposerPromise = new Promise((X) => {
								this._resolveOpenComposerPromise = X;
							})),
							(this._barContainer = t.$(".composer-bar")),
							t.$fhb(this.layoutService.mainContainer, this._barContainer),
							this.D(
								this.viewsService.onDidChangeViewContainerVisibility(
									({ id: X, visible: Y }) => {
										X === $.COMPOSER_VIEW_PANE_CONTAINER_ID &&
										Y &&
										!this.isShowing(
											this.composerDataService.selectedComposerId,
										) &&
										this.getComposerLocation(
											this.composerDataService.selectedComposerId,
										) !== "pane"
											? this.handleOpenComposerPane(
													this.composerDataService.selectedComposerId,
												)
											: X === i.$HX &&
												Y &&
												!this.isShowing(
													this.composerDataService.selectedChatId,
												) &&
												this.getComposerLocation(
													this.composerDataService.selectedChatId,
												) !== "pane" &&
												this.handleOpenComposerPane(
													this.composerDataService.selectedChatId,
												),
											X === i.$HX &&
												this.updateHoverWidgetText(
													this.composerDataService.selectedChatId,
												),
											X === $.COMPOSER_VIEW_PANE_CONTAINER_ID && !Y
												? this.composerDataService.updateComposerData(
														this.composerDataService.selectedComposerId,
														{
															lastFocusedBubbleId: void 0,
															selectedBubbleId: void 0,
															editingBubbleId: void 0,
														},
													)
												: X === i.$HX &&
													!Y &&
													this.composerDataService.updateComposerData(
														this.composerDataService.selectedChatId,
														{
															lastFocusedBubbleId: void 0,
															selectedBubbleId: void 0,
															editingBubbleId: void 0,
														},
													);
									},
								),
							),
							this.D(
								this.onDidHide(({ composerId: X }) => {
									this.composerDataService.updateComposerData(X, {
										lastFocusedBubbleId: void 0,
										selectedBubbleId: void 0,
										editingBubbleId: void 0,
									});
								}),
							),
							this.D(
								this.viewsService.onDidChangeViewVisibility(
									({ id: X, visible: Y }) => {
										X === i.$GX && this._onDidChangeChatPaneVisibility.fire(Y);
									},
								),
							);
						const G = (X) => {
							if (this._skipReactToLocationOpening) {
								this._skipReactToLocationOpening = !1;
								return;
							}
							switch (X) {
								case "pane":
									this.handleOpenComposerPane(
										this.composerDataService.selectedComposerId,
									);
									break;
								case "editor":
									this.handleOpenComposerEditor(
										this.composerDataService.selectedComposerId,
									);
									break;
								case "bar":
									this.handleOpenComposerBar(
										this.composerDataService.selectedComposerId,
									);
									break;
							}
						};
						this.D(
							this.reactiveStorageService.onChangeEffectManuallyDisposed({
								deps: [
									() =>
										this.reactiveStorageService.applicationUserPersistentStorage
											.composerState.location2,
								],
								onChange: ({ deps: X }) => {
									const Y = X[0];
									Y && G(Y);
								},
							}),
						),
							this.applicationComposerSettings.location2 === "floating"
								? this.setComposerLocation(
										this.composerDataService.selectedComposerId,
										"pane",
									)
								: G(this.applicationComposerSettings.location2 ?? "pane"),
							setTimeout(() => {
								for (const Y of this.editorGroupsService.getGroups(
									I.GroupsOrder.CREATION_TIME,
								))
									this.registerGroupListeners(Y);
								(this._prevPaneViewVisibility =
									this.isComposerPanePartVisible()),
									this._prevPaneViewVisibility &&
										this.getComposerLocation(
											this.composerDataService.selectedComposerId,
										) !== "editor" &&
										this.handleOpenComposerPane(
											this.composerDataService.selectedComposerId,
											{ skipShowAndFocus: !0 },
										);
								const X = this.isChatPaneVisible();
								this._onDidChangeChatPaneVisibility.fire(X);
							}, 1e3),
							this.D(
								this.editorGroupsService.mainPart.onDidLayout(() => {
									for (const X of this.editorGroupsService.getGroups(
										I.GroupsOrder.CREATION_TIME,
									))
										this.registerGroupListeners(X);
								}),
							),
							this.D(
								this.editorGroupsService.onDidAddGroup((X) => {
									this.registerGroupListeners(X);
								}),
							),
							this.D(
								this.editorGroupsService.onDidActivateGroup((X) => {
									this.registerGroupListeners(X);
								}),
							),
							this.applicationComposerSettings.hasMigratedChatLocation ||
								(this.reactiveStorageService.setApplicationUserPersistentStorage(
									"composerState",
									"chatLocation",
									this.reactiveStorageService.workspaceUserPersistentStorage
										.aiPanePosition === h.AIPanePosition.EDITOR
										? "editor"
										: "pane",
								),
								(this.applicationComposerSettings.hasMigratedChatLocation = !0),
								this.reactiveStorageService.setApplicationUserPersistentStorage(
									"composerState",
									"hasMigratedChatLocation",
									!0,
								));
						const K = (X) => {
							X &&
							c.$Io
								.as(p.Extensions.ViewsRegistry)
								.getView(L.chatViewPaneDescriptor.id)
								? c.$Io
										.as(p.Extensions.ViewsRegistry)
										.deregisterViews(
											[L.chatViewPaneDescriptor],
											L.chatViewPaneContainer,
										)
								: !X &&
									!c.$Io
										.as(p.Extensions.ViewsRegistry)
										.getView(L.chatViewPaneDescriptor.id) &&
									c.$Io
										.as(p.Extensions.ViewsRegistry)
										.registerViews(
											[L.chatViewPaneDescriptor],
											L.chatViewPaneContainer,
										);
						};
						this.D(
							this.reactiveStorageService.onChangeEffectManuallyDisposed({
								deps: [
									() =>
										this.reactiveStorageService.applicationUserPersistentStorage
											.composerState.unification,
								],
								onChange: ({ deps: X }) => {
									const Y = X[0];
									Y !== void 0 && K(Y);
								},
							}),
						),
							!0 &&
								this.reactiveStorageService.setApplicationUserPersistentStorage(
									"composerState",
									"unification",
									!1,
								),
							this.applicationComposerSettings.wasBarPreviouslyOpen &&
								(async () => (
									await this._openComposerPromise,
									this.handleOpenComposerBar(
										this.composerDataService.selectedComposerId,
										{ skipFocus: !0 },
									)
								))();
						const W = f.currentActiveEditorIsChat.bindTo(
							this.contextKeyService,
						);
						this.D(
							this.editorService.onDidActiveEditorChange(() => {
								const X = this.editorService.activeEditor;
								X instanceof s.ComposerEditorInput
									? W.set(X.getForceMode() === "chat")
									: W.set(!1);
							}),
						);
					}
					triggerScrollToBottom(N) {
						this.composerDataService.updateComposerDataSetStore(N, (A) => {
							A("scrollToBottomTrigger", Date.now());
						});
					}
					triggerShouldRecomputeCodeBlock(N) {
						this.composerDataService.updateComposerDataSetStore(N, (A) => {
							A("shouldRecomputeCodeBlock", (R) => (R ?? 0) + 1);
						});
					}
					get applicationComposerSettings() {
						return this.reactiveStorageService.applicationUserPersistentStorage
							.composerState;
					}
					setOpenComposer(N) {
						return (
							(this._openComposer = N),
							this._resolveOpenComposerPromise(),
							(0, E.$Yc)(() => {
								(this._openComposer = void 0),
									(this._openComposerPromise = new Promise((A) => {
										this._resolveOpenComposerPromise = A;
									}));
							})
						);
					}
					isViewPaneRegistered() {
						return !!c.$Io
							.as(p.Extensions.ViewsRegistry)
							.getView(L.composerViewPaneDescriptor.id);
					}
					isComposerPanePartVisible() {
						if (!this.isViewPaneRegistered()) return !1;
						const N = this.viewDescriptorService.getViewContainerById(
							$.COMPOSER_VIEW_PANE_CONTAINER_ID,
						);
						if (!N) return !1;
						const A = this.viewDescriptorService.getViewContainerLocation(N);
						if (!A) return !1;
						const R = this.getLayoutPartForLocation(A);
						return R ? this.workbenchLayoutService.isVisible(R) : !1;
					}
					handleOpenComposerPane(N, A) {
						this._openComposer?.(N, { ...A, view: "pane" });
					}
					handleOpenComposerEditor(N, A) {
						this._openComposer?.(N, { ...A, view: "editor" });
					}
					handleOpenComposerBar(N, A) {
						this._openComposer?.(N, { ...A, view: "bar" });
					}
					async showAndFocus(N, A) {
						const R = this.terminalService.getActiveInstance()?.hasFocus ?? !1,
							O =
								this.editorService.activeTextEditorControl?.hasTextFocus() ??
								!1;
						(R || O) && (this._cameFromTerminal = R);
						let B = this.getComposerLocation(N);
						const U = A?.view ?? B;
						if (A?.skipShowAndFocus) {
							this.setComposerLocation(N, U);
							return;
						}
						switch (
							(this.isShowing(N) &&
								this.getComposerLocation(N) !== U &&
								this.hide(N),
							this.getComposerLocation(N) !== U &&
								((this._skipReactToLocationOpening = !0),
								this.setComposerLocation(N, U)),
							U)
						) {
							case "pane": {
								const F =
									this.composerDataService.getComposerForceMode(N) === "chat"
										? i.$GX
										: i.$FX;
								this.viewsService.isViewVisible(F) ||
									(await this.viewsService.openView(F, !0));
								break;
							}
							case "editor": {
								await this.openAsEditorView(N);
								break;
							}
							case "bar": {
								this.openAsBarView(N);
								break;
							}
							default:
								throw Error("[composer] view not specified");
						}
						A?.skipFocus ||
							(A?.focusMainInputBox
								? this.getInputDelegate(N).focus()
								: this.getLastFocusedInputDelegate(N).focus());
					}
					hide(N) {
						switch (this.getComposerLocation(N)) {
							case "pane":
								this.closeComposerPanePart();
							case "editor":
								this.closeEditorViews(N);
							case "bar":
								this.closeBar();
						}
						this._inputDelegates.delete(N),
							this._onDidHide.fire({ composerId: N });
					}
					focus(N, A) {
						A
							? this.getInputDelegate(N).focus()
							: this.getLastFocusedInputDelegate(N).focus();
					}
					blur(N) {
						this.getLastFocusedInputDelegate(N).getRef()?.blur(),
							this._cameFromTerminal
								? ((this._cameFromTerminal = !1),
									this.terminalService.focusActiveInstance())
								: this.editorService.activeEditorPane?.focus();
					}
					setComposerLocation(N, A) {
						if (this.composerDataService.getComposerForceMode(N) === "chat") {
							if (A === "bar") {
								console.error("[composer] chat location cannot be bar");
								return;
							}
							this.reactiveStorageService.setApplicationUserPersistentStorage(
								"composerState",
								"chatLocation",
								A,
							);
							return;
						}
						A !== "bar" &&
							this.reactiveStorageService.setApplicationUserPersistentStorage(
								"composerState",
								"nonBarLocation",
								A,
							),
							this.reactiveStorageService.setApplicationUserPersistentStorage(
								"composerState",
								"location2",
								A,
							);
					}
					getComposerLocation(N) {
						return this.composerDataService.getComposerData(N)
							? this.composerDataService.getComposerForceMode(N) === "chat"
								? (this.applicationComposerSettings.chatLocation ?? "pane")
								: (this.applicationComposerSettings.location2 ?? "pane")
							: "pane";
					}
					getComposerNonBarLocation(N) {
						return this.composerDataService.getComposerData(N)
							? this.composerDataService.getComposerForceMode(N) === "chat"
								? (this.applicationComposerSettings.chatLocation ?? "pane")
								: (this.reactiveStorageService.applicationUserPersistentStorage
										.composerState.nonBarLocation ?? "pane")
							: "pane";
					}
					getLayoutPartForLocation(N) {
						switch (N) {
							case p.ViewContainerLocation.AuxiliaryBar:
								return P.Parts.AUXILIARYBAR_PART;
							case p.ViewContainerLocation.Panel:
								return P.Parts.PANEL_PART;
							case p.ViewContainerLocation.Sidebar:
								return P.Parts.SIDEBAR_PART;
							default:
								return;
						}
					}
					isShowing(N) {
						if (!this.composerDataService.getComposerData(N)) return !1;
						const R = this.composerDataService.getComposerForceMode(N);
						switch (this.getComposerLocation(N)) {
							case "pane":
								return this.isComposerPanePartVisible();
							case "editor":
								return this.getForceModeEditors(R).length > 0;
							case "bar":
								return this._barDisposable !== void 0;
						}
					}
					closeComposerPanePart() {
						const N = this.getComposerPanePartLocation();
						N && this.workbenchLayoutService.setPartHidden(!0, N);
					}
					getComposerPanePartLocation() {
						if (!this.isViewPaneRegistered()) return;
						const N = this.viewDescriptorService.getViewContainerById(
							$.COMPOSER_VIEW_PANE_CONTAINER_ID,
						);
						if (!N) return;
						const A = this.viewDescriptorService.getViewContainerLocation(N);
						if (A) return this.getLayoutPartForLocation(A);
					}
					getLastFocusedInputDelegate(N) {
						const A = this.getOrCreateDelegates(N),
							R = this.composerDataService.getComposerData(N);
						return R?.lastFocusedBubbleId === void 0 ||
							R?.editingBubbleId === void 0
							? A.main
							: A.secondary;
					}
					getInputDelegate(N) {
						return this.getOrCreateDelegates(N).main;
					}
					getPrevEditingBubbleInputDelegate(N) {
						return this.getOrCreateDelegates(N).secondary;
					}
					openAsBarView(N) {
						if (this._barDisposable === void 0) {
							const A = this.composerDataService.getComposerForceMode(N);
							(this._barDisposable = (0, v.renderComposerPane)(
								this._barContainer,
								this.instantiationService,
								"bar",
								A,
							)),
								this.reactiveStorageService.setApplicationUserPersistentStorage(
									"composerState",
									"wasBarPreviouslyOpen",
									!0,
								);
						}
					}
					async openAsEditorView(N) {
						const A = this.composerDataService.getComposerForceMode(N),
							R = this.getForceModeEditors(A);
						if (R.length > 0) {
							const B = R[0].groupId,
								U = this.editorGroupsService.getGroup(B);
							if (
								U &&
								(this.editorGroupsService.activeGroup.id !== U.id ||
									U.isActive(s.ComposerEditorInput.create(N, A)))
							) {
								await this.editorGroupsService
									.getGroup(B)
									?.openEditor(s.ComposerEditorInput.create(N, A), {
										pinned: !0,
									});
								return;
							}
						}
						R.length !== 0 &&
							((this._skipUnregisterEditor = !0),
							await this.closeEditorViews(N),
							(this._skipUnregisterEditor = !1));
						let O;
						if (
							this.editorGroupsService.groups.length >= 1 &&
							this.editorGroupsService.groups[0].editors.length > 0
						) {
							const B = this.editorGroupsService.findGroup({
								location: I.GroupLocation.LAST,
							});
							B &&
								B.id == this.editorGroupsService.activeGroup.id &&
								(O = this.editorGroupsService.addGroup(
									B,
									I.GroupDirection.RIGHT,
								));
						}
						await this.editorService?.openEditor(
							this.instantiationService?.createInstance(
								s.ComposerEditorInput,
								N,
								A,
							),
							{ pinned: !0 },
							O,
						);
					}
					closeBar() {
						this._barDisposable?.dispose(),
							(this._barDisposable = void 0),
							this.reactiveStorageService.setApplicationUserPersistentStorage(
								"composerState",
								"wasBarPreviouslyOpen",
								!1,
							);
					}
					closeEditorViews(N, A) {
						const R = this.composerDataService.getComposerForceMode(N),
							O = A ?? [...this.getForceModeEditors(R)];
						return (
							(this._editors = this._editors.filter(
								(B) => !O.some((U) => U.groupId === B.groupId),
							)),
							Promise.all(
								O.map(({ groupId: B, composerId: U }) =>
									this.editorGroupsService
										.getGroup(B)
										?.closeEditor(s.ComposerEditorInput.create(U, R)),
								),
							)
						);
					}
					updateHoverWidgetText(N) {
						if (this.composerDataService.getComposerForceMode(N) !== "chat")
							return;
						const R = this._editors.some((U) => U.composerId === N),
							O = this.viewsService.isViewVisible(i.$GX),
							B = R || O;
						this.reactiveStorageService.setNonPersistentStorage(
							"shouldShowInsertChatWidget",
							B,
						);
					}
					registerEditor(N, A) {
						const R = this.composerDataService.getComposerForceMode(A);
						this.getComposerLocation(A) !== "editor" &&
							this.handleOpenComposerEditor(A),
							this._trackedGroups.has(N) ||
								this.registerGroupListeners(
									this.editorGroupsService.getGroup(N),
								),
							this.getForceModeEditors(R).some((O) => O.groupId === N) ||
								this._editors.push({ groupId: N, composerId: A }),
							this.closeEditorViews(
								A,
								this.getForceModeEditors(R).filter((O) => O.groupId !== N),
							),
							this.updateHoverWidgetText(A);
					}
					unregisterEditor(N, A) {
						const R = this.composerDataService.getComposerForceMode(A),
							O = this.editorService.findEditors(
								s.ComposerEditorInput.create(A, R),
							);
						(this._editors = this._editors.filter((B) => B.groupId !== N)),
							this.updateHoverWidgetText(A);
					}
					registerGroupListeners(N) {
						if (this._trackedGroups.has(N.id)) return;
						if (
							(this._trackedGroups.add(N.id),
							N.editors.some((B) => B.typeId === s.ComposerEditorInput.ID))
						) {
							const B = N.editors.find(
								(U) => U.typeId === s.ComposerEditorInput.ID,
							).resource.path;
							this.registerEditor(N.id, B);
						}
						const A = N.onDidCloseEditor((B) => {
								if (B.editor.typeId !== s.ComposerEditorInput.ID) return;
								const U = B.editor.resource.path;
								this.unregisterEditor(N.id, U);
							}),
							R = N.onWillOpenEditor((B) => {
								if (B.editor?.typeId !== s.ComposerEditorInput.ID) return;
								const U = B.editor.resource.path;
								this.registerEditor(N.id, U);
							});
						this.D(A), this.D(R);
						const O = N.onWillDispose(() => {
							A.dispose(), R.dispose();
						});
						this.D(O);
					}
					focusPrevBubble(N) {
						this.getPrevEditingBubbleInputDelegate(N).focus();
					}
					isFocused(N) {
						return !!this.getInputDelegate(N).isFocused();
					}
					isPrevBubbleFocused(N) {
						return !!this.getPrevEditingBubbleInputDelegate(N).isFocused();
					}
					dispose() {
						super.dispose(), this._solidAlwaysComponentsDisposable?.dispose();
					}
					getDebugInfo() {
						return {
							container: this._barContainer,
							solidAlwaysComponentsDisposable:
								this._solidAlwaysComponentsDisposable,
							inputDelegates: Array.from(this._inputDelegates.entries()).map(
								([N, A]) => ({ id: N, main: A.main, secondary: A.secondary }),
							),
							prevPaneViewVisibility: this._prevPaneViewVisibility,
							skipReactToLocationOpening: this._skipReactToLocationOpening,
							cameFromTerminal: this._cameFromTerminal,
							editors: this._editors,
							trackedGroups: this._trackedGroups,
							skipUnregisterEditor: this._skipUnregisterEditor,
							location2: this.applicationComposerSettings.location2,
							aiPanePosition:
								this.reactiveStorageService.workspaceUserPersistentStorage
									.aiPanePosition,
						};
					}
					getOrCreateDelegates(N) {
						const A =
							this.composerDataService.getComposerForceMode(N) ?? "edit";
						let R = this._inputDelegates.get(A);
						return (
							R ||
								((R = { main: new h.$Zzb(), secondary: new h.$Zzb() }),
								this._inputDelegates.set(A, R)),
							R
						);
					}
					getForceModeEditors(N) {
						return this._editors.filter(
							(A) =>
								this.composerDataService.getComposerForceMode(A.composerId) ===
								N,
						);
					}
					isChatPaneVisible() {
						return this.viewsService.isViewVisible(i.$GX);
					}
				};
				(e.ComposerViewsService = D),
					(e.ComposerViewsService =
						D =
						L =
							Ne(
								[
									j(0, r.$Li),
									j(1, P.$mEb),
									j(2, u.$jEb),
									j(3, p.$K1),
									j(4, b.IComposerDataService),
									j(5, a.$0zb),
									j(6, k.$HMb),
									j(7, S.$iIb),
									j(8, T.$IY),
									j(9, I.$EY),
									j(10, n.$lq),
									j(11, C.$6j),
								],
								D,
							)),
					(0, m.$lK)(y.IComposerViewsService, D, m.InstantiationType.Delayed);
			},
		),
		define(
			de[4417],
			he([
				1, 0, 30, 44, 1076, 1076, 192, 4, 102, 46, 60, 2014, 4364, 4415, 2014,
				426, 4372, 262, 4345,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					t.$Io
						.as(u.Extensions.ViewsRegistry)
						.registerViews(
							[a.ComposerViewsService.composerViewPaneDescriptor],
							a.ComposerViewsService.composerViewPaneContainer,
						),
					t.$Io
						.as(u.Extensions.ViewsRegistry)
						.registerViews(
							[a.ComposerViewsService.chatViewPaneDescriptor],
							a.ComposerViewsService.chatViewPaneContainer,
						),
					t.$Io
						.as(i.$a1.EditorPane)
						.registerEditorPane(
							C.$vVb.create(
								w.ComposerEditor,
								w.ComposerEditor.ID,
								(0, d.localize)(5118, null),
							),
							[new m.$Ji(E.ComposerEditorInput)],
						),
					t.$Io
						.as(i.$a1.EditorFactory)
						.registerEditorSerializer(
							E.ComposerEditorInput.ID,
							w.ComposerEditorInputSerializer,
						),
					(0, r.$qtb)(
						w.ComposerEditorContribution.ID,
						w.ComposerEditorContribution,
						r.EditorContributionInstantiation.AfterFirstRender,
					);
			},
		),
		define(
			de[4418],
			he([
				1, 0, 4, 449, 9, 25, 423, 256, 21, 53, 335, 31, 19, 40, 22, 151, 52, 57,
				20, 73, 85, 87, 3918, 110, 12, 1912, 68, 174, 261, 129, 133, 10,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Bdd = void 0);
				let M = class extends y.$j5c {
					constructor(
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
					) {
						super(A, R, B, x, H, q, V, G, K, J, W, ie, ne, ee, _, te),
							(this.S = O),
							(this.U = U),
							(this.W = z),
							(this.X = F),
							(this.Y = X),
							(this.Z = Y),
							this.$();
					}
					$() {
						this.D(
							this.Y.onBeforeShutdown((A) => {
								const R = this.ab(A.reason);
								A.veto(R, "veto.untitledWorkspace");
							}),
						);
					}
					async ab(A) {
						if (A !== p.ShutdownReason.LOAD && A !== p.ShutdownReason.CLOSE)
							return !1;
						const R = this.R();
						if (!R || !(0, E.$aj)(R.configPath, this.n)) return !1;
						const O = await this.S.getWindowCount();
						if (A === p.ShutdownReason.CLOSE && !v.$m && O === 1) return !1;
						if (
							!(this.c.getValue("window.confirmSaveUntitledWorkspace") !== !1)
						)
							return await this.m.deleteUntitledWorkspace(R), !1;
						let U = !1;
						const { result: z, checkboxChecked: F } = await this.r.prompt({
							type: c.Severity.Warning,
							message: (0, t.localize)(13173, null),
							detail: (0, t.localize)(13174, null),
							buttons: [
								{
									label: (0, t.localize)(13175, null),
									run: async () => {
										const x = await this.pickNewWorkspacePath();
										if (!x || !(0, E.$fj)(x)) return !0;
										try {
											await this.H(R, x);
											const H = await this.m.getWorkspaceIdentifier(x);
											await this.m.addRecentlyOpened([
												{
													label: this.Z.getWorkspaceLabel(H, {
														verbose: b.Verbosity.LONG,
													}),
													workspace: H,
													remoteAuthority: this.n.remoteAuthority,
												},
											]),
												await this.m.deleteUntitledWorkspace(R);
										} catch {}
										return !1;
									},
								},
								{
									label: (0, t.localize)(13176, null),
									run: async () => (
										await this.m.deleteUntitledWorkspace(R), !1
									),
								},
							],
							cancelButton: { run: () => ((U = !0), !0) },
							checkbox: { label: (0, t.localize)(13177, null) },
						});
						return (
							!U &&
								F &&
								(await this.c.updateValue(
									"window.confirmSaveUntitledWorkspace",
									!1,
									D.ConfigurationTarget.USER,
								)),
							z
						);
					}
					async isValidTargetWorkspacePath(A) {
						return (
							await this.S.getWindows({ includeAuxiliaryWindows: !1 })
						).some(
							(O) =>
								(0, E.$2i)(O.workspace) &&
								this.t.extUri.isEqual(O.workspace.configPath, A),
						)
							? (await this.r.info(
									(0, t.localize)(13178, null, (0, h.$kh)(A)),
									(0, t.localize)(13179, null),
								),
								!1)
							: !0;
					}
					async enterWorkspace(A) {
						if (
							!(await this.W.stopExtensionHosts((0, t.localize)(13180, null)))
						)
							return;
						const O = await this.N(A);
						if (
							O &&
							(await this.U.switch(O.workspace, !0), this.X instanceof S.$w5c)
						) {
							const B = O.backupPath
								? w.URI.file(O.backupPath).with({
										scheme: this.n.userRoamingDataHome.scheme,
									})
								: void 0;
							this.X.reinitialize(B);
						}
						this.n.remoteAuthority
							? this.s.reload()
							: this.W.startExtensionHosts();
					}
				};
				(e.$Bdd = M),
					(e.$Bdd = M =
						Ne(
							[
								j(0, C.$$Qb),
								j(1, E.$Vi),
								j(2, $.$y7c),
								j(3, P.$RZ),
								j(4, m.$lq),
								j(5, r.$q2),
								j(6, u.$WO),
								j(7, c.$4N),
								j(8, a.$ek),
								j(9, n.$ll),
								j(10, s.$kZ),
								j(11, d.$cRb),
								j(12, g.$ucd),
								j(13, o.$IO),
								j(14, o.$GO),
								j(15, p.$n6),
								j(16, b.$3N),
								j(17, l.$asb),
								j(18, I.$Vl),
								j(19, T.$pO),
								j(20, k.$Xl),
								j(21, L.$P8),
							],
							M,
						)),
					(0, f.$lK)(i.$mRb, M, f.InstantiationType.Delayed);
			},
		),
		define(
			de[4419],
			he([1, 0, 256, 371, 20, 305, 110]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qdd = void 0);
				let d = class {
					constructor(r, u) {
						return E.ProxyChannel.toService(r.getChannel("workspaces"), {
							context: u.windowId,
						});
					}
				};
				(e.$qdd = d),
					(e.$qdd = d = Ne([j(0, i.$V8c), j(1, C.$y7c)], d)),
					(0, w.$lK)(t.$cRb, d, w.InstantiationType.Delayed);
			},
		),
		define(
			de[4420],
			he([
				1, 0, 20, 782, 959, 119, 1617, 49, 93, 200, 3025, 2855, 496, 90, 667,
				2728, 8, 125, 2711, 665, 2791, 2745, 41, 957, 677, 150, 2886, 1679, 45,
				4370, 4070, 1905, 3411, 3857, 2943, 716, 2944, 3526, 571, 853, 633,
				3256, 518, 1819, 3323, 4029, 3889, 4226, 4122, 3401, 3802, 2895, 2876,
				4005, 4004, 1835, 1324, 3254, 3284, 3851, 3274, 3887, 3704, 3875, 1051,
				3578, 1793, 3244, 3999, 3220, 3784, 631, 3708, 719, 701, 3586, 834,
				3319, 1895, 3585, 384, 4388, 3291, 3301, 828, 3320, 3507, 3796, 3895,
				3788, 1044, 519, 3790, 1875, 227, 336, 403, 170, 4058, 1352, 3541, 3852,
				830, 3246, 822, 621, 2843, 708, 3522, 3399, 2763, 383, 545, 2856, 764,
				3725, 619, 567, 118, 1054, 3620, 1874, 3409, 4417, 4306, 3641, 4266,
				4001, 4331, 4271, 3998, 1282, 137, 1290, 479, 720, 445, 832, 1929, 697,
				3743, 1040, 3748, 1011, 3874, 399, 3775, 4358, 4356, 3756, 3539, 3733,
				3421, 4106, 3390, 4111, 4103, 4160, 4162, 4048, 3523, 4108, 864, 1993,
				4301, 3904, 4018, 4173, 1068, 4174, 3563, 4035, 4019, 1906, 1331, 796,
				847, 1943, 4026, 3869, 1918, 3074, 3027, 3814, 3571, 1803, 3872, 3214,
				3879, 3556, 4299, 1991, 1853, 4028, 1919, 4387, 3688, 3434, 3839, 3562,
				4032, 3673, 3983, 3460, 3774, 3693, 3428, 3429, 3614, 3726, 3794, 3437,
				3694, 3873, 3443, 3261, 3273, 3519, 4303, 1279, 4126, 4109, 4409, 2957,
				4238, 4348, 1988, 4338, 2975, 3945, 4202, 4218, 3649, 1931, 480, 3997,
				4353, 4313, 4256, 4213, 4e3, 3632, 3633, 3412, 4052, 3894, 4062, 3414,
				4307, 3881, 4360, 3700, 3430, 3533, 3424, 3413, 3863, 3564, 3547, 3636,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, t.$lK)(S.$9Rb, I.$WAc, t.InstantiationType.Delayed),
					(0, t.$lK)($.$UAc, $.$VAc, t.InstantiationType.Delayed),
					(0, t.$lK)(E.$Kp, w.$twc, t.InstantiationType.Delayed),
					(0, t.$lK)(v.$1N, v.$2N, t.InstantiationType.Delayed),
					(0, t.$lK)(E.$Ep, i.$Rq, t.InstantiationType.Delayed),
					(0, t.$lK)(d.$Wxb, C.$myc, t.InstantiationType.Delayed),
					(0, t.$lK)(m.$fMb, m.$gMb, t.InstantiationType.Delayed),
					(0, t.$lK)(r.$Cxb, u.$QAc, t.InstantiationType.Eager),
					(0, t.$lK)(h.$bub, a.$RAc, t.InstantiationType.Delayed),
					(0, t.$lK)(c.$aM, n.$lic, t.InstantiationType.Delayed),
					(0, t.$lK)(p.$6j, g.$Etc, t.InstantiationType.Delayed),
					(0, t.$lK)(o.$XO, f.$SAc, t.InstantiationType.Delayed),
					(0, t.$lK)(b.$gp, s.$qfb, t.InstantiationType.Delayed),
					(0, t.$lK)(y.$7rb, l.$TAc, t.InstantiationType.Delayed),
					(0, t.$lK)(P.$0zb, T.$qec, t.InstantiationType.Delayed);
			},
		),
		define(
			de[4421],
			he([
				1, 0, 20, 1041, 102, 1953, 2872, 4420, 1953, 4055, 3444, 3986, 3907,
				3584, 4419, 3462, 3745, 3746, 3456, 4057, 3391, 3592, 3248, 3253, 4418,
				3581, 3445, 3395, 3587, 3729, 4056, 4390, 3275, 3602, 3459, 3657, 3381,
				2898, 3705, 3783, 4392, 3293, 3798, 3797, 3739, 1020, 3454, 3916, 3247,
				2789, 3744, 2733, 2748, 2820, 2790, 3382, 3601, 3917, 3792, 4394, 2935,
				3980, 1887, 3450, 2891, 2873, 4340, 3956, 3982, 2955, 4243, 3125, 3991,
				3946, 4188, 1995, 4323, 4333, 3939, 3210, 3046, 3928, 3289, 3529, 4302,
				3664, 3057, 4079, 3755, 3287, 3582, 3420, 4039, 3717, 3730, 3795, 3696,
				3695, 3738, 3840, 3427, 3721, 3436, 3883, 3871, 1918, 3537, 4378, 4380,
				3425,
			]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.main = void 0),
					(0, t.$lK)(i.$mwc, new w.$Ji(i.$nwc, [[]], !0)),
					Object.defineProperty(e, "main", {
						enumerable: !0,
						get: function () {
							return E.main;
						},
					});
			},
		);
}).call(this);

//# sourceMappingURL=https://cursor-sourcemaps.s3.amazonaws.com/sourcemaps/fe574d0820377383143b2ea26aa6ae28b3425220/core/vs/workbench/workbench.desktop.main.js.map

//# debugId=17e36950-e727-5837-9693-249d7a5b0b56
