import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/lexical/lexical/lexical.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/constants.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/path.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/types.js';
import '../../../../base/common/uri.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/services/markerDecorations.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../editor/contrib/cHover/browser/hoverWidget.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/markers/common/markers.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/tracing/common/tracing.js';
import '../../../../platform/workspace/common/workspace.js';
import './composer.js';
import './composerContextKeys.js';
import './composerDataService.js';
import './composerEditor.js';
import './composerUtilsService.js';
import './composerViews.js';
import './constants.js';
import '../../files/browser/files.js';
import '../../notepad/browser/notepad.js';
import '../../terminal/browser/terminal.js';
import '../../terminal/common/terminalContextKey.js';
import '../../ui/browser/aiInput/plugins/mentions/MentionNode.js';
import '../../../services/ai/browser/aiMiscServices.js';
import '../../../services/ai/browser/repositoryService.js';
import '../../../services/ai/browser/symbolContextService.js';
import '../../../services/editor/browser/editorService.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/selectedContext/browser/selectedContextData.js';
import './constants.js';
import './constants.js';
define(
			de[4415],
			he([
				1, 0, 158, 33, 14, 58, 27, 54, 12, 28, 9, 56, 46, 65, 17, 496, 42, 866,
				11, 31, 8, 43, 93, 90, 45, 216, 25, 219, 793, 209, 1076, 426, 506, 169,
				382, 467, 107, 237, 816, 137, 226, 1290, 1051, 66, 18, 298, 169, 169,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*lexical*/,
				i /*cancellation*/,
				w /*codicons*/,
				E /*constants*/,
				C /*keyCodes*/,
				d /*path*/,
				m /*platform*/,
				r /*types*/,
				u /*uri*/,
				a /*editorBrowser*/,
				h /*editorExtensions*/,
				c /*codeEditorService*/,
				n /*range*/,
				g /*markerDecorations*/,
				p /*resolverService*/,
				o /*hoverWidget*/,
				f /*actions*/,
				b /*commands*/,
				s /*contextkey*/,
				l /*keybindingsRegistry*/,
				y /*listService*/,
				$ /*markers*/,
				v /*reactiveStorageService*/,
				S /*tracing*/,
				I /*workspace*/,
				T /*composer*/,
				P /*composerContextKeys*/,
				k /*composerDataService*/,
				L /*composerEditor*/,
				D /*composerUtilsService*/,
				M /*composerViews*/,
				N /*constants*/,
				A /*files*/,
				R /*notepad*/,
				O /*terminal*/,
				B /*terminalContextKey*/,
				U /*MentionNode*/,
				z /*aiMiscServices*/,
				F /*repositoryService*/,
				x /*symbolContextService*/,
				H /*editorService*/,
				q /*editorGroupsService*/,
				V /*editorService*/,
				G /*selectedContextData*/,
				K /*constants*/,
				J /*constants*/,
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
		)
