import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../base/common/constants.js';
import '../../../../base/common/uuid.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/browser/services/genericUndoRedoElement.js';
import '../../../../editor/browser/services/inlineDiffService.js';
import '../../../../editor/common/core/selection.js';
import '../../../../editor/common/cursor/cursorTypeOperations.js';
import '../../../../editor/common/cursorCommon.js';
import '../../../../editor/common/editorContextKeys.js';
import '../../../../editor/contrib/cHintLine/browser/hintLineWidget.js';
import '../../../../editor/contrib/inlineDiffs/browser/controllers/promptBarController.js';
import '../../../../editor/contrib/inlineDiffs/browser/widgets/promptBarViewZone.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/undoRedo/common/undoRedo.js';
import '../../../contrib/aiReactiveContextKeys/browser/aiReactiveContextKeys.contribution.js';
import '../../../contrib/aichat/browser/codeSelections.js';
import '../../../contrib/notebook/browser/notebookBrowser.js';
import '../../ai/common/dataScrubbingService.js';
import '../../editor/common/editorGroupsService.js';
import '../../editor/common/editorService.js';
import './cmdKService.js';
import './cmdKService2.js';
import '../../aiContext/browser/aiContext.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../base/common/resources.js';
import '../../../../platform/quickinput/browser/commandsQuickAccess.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../../external/solid/store.js';
import '../../ai/browser/aiService.js';
import '../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/clipboard/common/clipboardService.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/tooltipService/common/tooltipService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../contrib/autoSelect/browser/autoSelectService.js';
import '../../../contrib/composer/browser/composer.js';
import '../../../contrib/aiFeatureStatusService/browser/aiFeatureStatusService.js';
import '../../../contrib/composer/browser/composerContextKeys.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../ai/browser/aiMiscServices.js';
import '../../../contrib/ui/browser/utils.js';
import '../../../contrib/composer/browser/composerDataService.js';
import '../../../contrib/composer/browser/constants.js';
define(
			de[4369],
			he([
				1, 0, 27, 11, 8, 43, 58, 47, 46, 65, 606, 383, 104, 949, 346, 71, 499,
				2002, 2001, 31, 45, 32, 155, 1279, 354, 108, 356, 66, 18, 479, 720, 471,
				42, 19, 679, 25, 193, 118, 148, 40, 121, 41, 308, 10, 1930, 219, 287,
				793, 63, 137, 476, 209, 169,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*keyCodes*/,
				i /*actions*/,
				w /*contextkey*/,
				E /*keybindingsRegistry*/,
				C /*constants*/,
				d /*uuid*/,
				m /*editorExtensions*/,
				r /*codeEditorService*/,
				u /*genericUndoRedoElement*/,
				a /*inlineDiffService*/,
				h /*selection*/,
				c /*cursorTypeOperations*/,
				n /*cursorCommon*/,
				g /*editorContextKeys*/,
				p /*hintLineWidget*/,
				o /*promptBarController*/,
				f /*promptBarViewZone*/,
				b /*commands*/,
				s /*reactiveStorageService*/,
				l /*telemetry*/,
				y /*undoRedo*/,
				$ /*aiReactiveContextKeys.contribution*/,
				v /*codeSelections*/,
				S /*notebookBrowser*/,
				I /*dataScrubbingService*/,
				T /*editorGroupsService*/,
				P /*editorService*/,
				k /*cmdKService*/,
				L /*cmdKService2*/,
				D /*aiContext*/,
				M /*resolverService*/,
				N /*resources*/,
				A /*commandsQuickAccess*/,
				R /*workspace*/,
				O /*store*/,
				B /*aiService*/,
				U /*aiserver_pb*/,
				z /*notification*/,
				F /*clipboardService*/,
				x /*opener*/,
				H /*tooltipService*/,
				q /*configuration*/,
				V /*autoSelectService*/,
				G /*composer*/,
				K /*aiFeatureStatusService*/,
				J /*composerContextKeys*/,
				W /*quickInput*/,
				X /*aiMiscServices*/,
				Y /*utils*/,
				ie /*composerDataService*/,
				ne /*constants*/,
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
		)
