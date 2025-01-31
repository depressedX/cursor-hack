import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/canIUse.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/network.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/types.js';
import '../../../../base/common/uri.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/common/model.js';
import '../../../../nls.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/label/common/label.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/terminal/common/terminal.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../browser/actions/workspaceCommands.js';
import '../../../browser/parts/editor/editorCommands.js';
import './terminal.js';
import './terminalQuickAccess.js';
import '../common/terminal.js';
import '../common/terminalContextKey.js';
import '../../../../platform/terminal/common/terminalProfiles.js';
import '../common/terminalStrings.js';
import '../../../services/configurationResolver/common/configurationResolver.js';
import '../../../services/environment/common/environmentService.js';
import '../../../services/history/common/history.js';
import '../../../services/preferences/common/preferences.js';
import '../../../services/remote/common/remoteAgentService.js';
import '../../../services/editor/common/editorService.js';
import '../../../../base/common/path.js';
import '../../../services/configurationResolver/common/variableResolver.js';
import '../../../../platform/theme/common/themeService.js';
import './terminalIcon.js';
import '../common/history.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/languages/language.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/resources.js';
import '../../../../editor/common/services/getIconClasses.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/clipboard/common/clipboardService.js';
import '../../../../platform/terminal/common/capabilities/capabilities.js';
import './terminalIcons.js';
import '../../../../base/common/constants.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../../base/common/iterator.js';
import './terminalActionsRegistry.js';
import '../../../../platform/tooltipService/common/tooltipService.js';
import '../../accessibility/browser/accessibilityConfiguration.js';
import '../../../../base/browser/dom.js';
import '../../../services/editor/common/editorGroupColumn.js';
import './terminalContextMenu.js';
import '../../../../platform/accessibility/browser/accessibleView.js';
define(
			de[363],
			he([
				1, 0, 459, 50, 14, 27, 23, 12, 28, 9, 65, 64, 4, 91, 11, 31, 10, 8, 43,
				73, 93, 40, 41, 63, 117, 25, 633, 247, 107, 1802, 145, 237, 955, 469,
				358, 78, 245, 131, 143, 18, 54, 1797, 35, 514, 1314, 67, 61, 33, 19,
				252, 22, 121, 189, 689, 58, 66, 103, 1948, 308, 130, 7, 446, 616, 178,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*canIUse*/,
				i /*actions*/,
				w /*codicons*/,
				E /*keyCodes*/,
				C /*network*/,
				d /*platform*/,
				m /*types*/,
				r /*uri*/,
				u /*codeEditorService*/,
				a /*model*/,
				h /*nls*/,
				c /*accessibility*/,
				n /*actions*/,
				g /*commands*/,
				p /*configuration*/,
				o /*contextkey*/,
				f /*keybindingsRegistry*/,
				b /*label*/,
				s /*listService*/,
				l /*notification*/,
				y /*opener*/,
				$ /*quickInput*/,
				v /*terminal*/,
				S /*workspace*/,
				I /*workspaceCommands*/,
				T /*editorCommands*/,
				P /*terminal*/,
				k /*terminalQuickAccess*/,
				L /*terminal*/,
				D /*terminalContextKey*/,
				M /*terminalProfiles*/,
				N /*terminalStrings*/,
				A /*configurationResolver*/,
				R /*environmentService*/,
				O /*history*/,
				B /*preferences*/,
				U /*remoteAgentService*/,
				z /*editorService*/,
				F /*path*/,
				x /*variableResolver*/,
				H /*themeService*/,
				q /*terminalIcon*/,
				V /*history*/,
				G /*model*/,
				K /*language*/,
				J /*cancellation*/,
				W /*resources*/,
				X /*getIconClasses*/,
				Y /*files*/,
				ie /*clipboardService*/,
				ne /*capabilities*/,
				ee /*terminalIcons*/,
				_ /*constants*/,
				te /*editorGroupsService*/,
				Q /*iterator*/,
				Z /*terminalActionsRegistry*/,
				se /*tooltipService*/,
				re /*accessibilityConfiguration*/,
				le /*dom*/,
				oe /*editorGroupColumn*/,
				ae /*terminalContextMenu*/,
				pe /*accessibleView*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$DUc = e.$CUc = e.$BUc = e.$AUc = void 0),
					(e.$EUc = me),
					(e.$FUc = ge),
					(e.$GUc = be),
					(e.$HUc = Ce),
					(e.$IUc = Fe),
					(e.$JUc = He),
					(e.$KUc = Te),
					(e.$LUc = Se),
					(e.$AUc = "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"),
					(e.$BUc = (0, h.localize)(9975, null));
				const $e = N.$hUc.actionCategory,
					ye = (() => {
						const Me = o.$Kj.or(
							D.TerminalContextKeys.processSupported,
							D.TerminalContextKeys.terminalHasBeenCreated,
						);
						return {
							terminalAvailable: Me,
							terminalAvailable_and_opened: o.$Kj.and(
								Me,
								D.TerminalContextKeys.isOpen,
							),
							terminalAvailable_and_editorActive: o.$Kj.and(
								Me,
								D.TerminalContextKeys.terminalEditorActive,
							),
							terminalAvailable_and_singularSelection: o.$Kj.and(
								Me,
								D.TerminalContextKeys.tabsSingularSelection,
							),
							focusInAny_and_normalBuffer: o.$Kj.and(
								D.TerminalContextKeys.focusInAny,
								D.TerminalContextKeys.altBufferActive.negate(),
							),
						};
					})(),
					ue = async (Me, De) => {
						const Re = Me.get(P.$iIb).activeInstance;
						if (Re) {
							const je = (0, m.$ng)(De) && "text" in De ? Ae(De.text) : void 0;
							if (!je) return;
							const Ve = Me.get(A.$zeb),
								Ze = Me.get(S.$Vi),
								rt = Me.get(O.$Feb).getLastActiveWorkspaceRoot(
									Re.isRemote ? C.Schemas.vscodeRemote : C.Schemas.file,
								),
								ft = rt ? (Ze.getWorkspaceFolder(rt) ?? void 0) : void 0,
								bt = await Ve.resolveAsync(ft, je);
							Re.sendText(bt, !1);
						}
					};
				e.$CUc = ue;
				let fe = class extends i.$rj {
					constructor(De) {
						super(
							"workbench.action.terminal.launchHelp",
							(0, h.localize)(9976, null),
						),
							(this.a = De);
					}
					async run() {
						this.a.open("https://aka.ms/vscode-troubleshoot-terminal-launch");
					}
				};
				(e.$DUc = fe), (e.$DUc = fe = Ne([j(0, y.$7rb)], fe));
				function me(Me) {
					(Me.f1 = Me.f1 ?? !0),
						(Me.category = Me.category ?? $e),
						(Me.precondition =
							Me.precondition ?? D.TerminalContextKeys.processSupported);
					const De = Me.run,
						Re = Me;
					return (
						delete Re.run,
						(0, n.$4X)(
							class extends n.$3X {
								constructor() {
									super(Re);
								}
								run(je, Ve, Ze) {
									return De(Le(je), je, Ve, Ze);
								}
							},
						)
					);
				}
				function ve(Me) {
					if (Array.isArray(Me)) {
						if (Me.every((De) => De instanceof ae.$xUc)) return Me;
					} else if (Me instanceof ae.$xUc) return [Me];
				}
				function ge(Me) {
					const De = Me.run;
					return me({
						...Me,
						run: async (Re, je, Ve, Ze) => {
							let et = Oe(je, Ze);
							if (!et) {
								const ft = (
									Me.activeInstanceType === "view"
										? Re.groupService
										: Me.activeInstanceType === "editor"
											? Re.editorService
											: Re.service
								).activeInstance;
								if (!ft) return;
								et = [ft];
							}
							const rt = [];
							for (const ft of et) rt.push(De(ft, Re, je, Ve));
							await Promise.all(rt), Me.runAfter && Me.runAfter(et, Re, je, Ve);
						},
					});
				}
				function be(Me) {
					const De = Me.run;
					return me({
						...Me,
						run: (Re, je, Ve) => {
							const Ze = Re.service.activeInstance;
							if (Ze) return De(Ze, Re, je, Ve);
						},
					});
				}
				function Ce(Me) {
					const De = Me.run;
					return me({
						...Me,
						run: (Re, je, Ve) => {
							const Ze = Q.Iterable.find(
								Re.service.detachedInstances,
								(rt) => rt.xterm.isFocused,
							);
							if (Ze) return De(Ze.xterm, je, Ze, Ve);
							const et = Re.service.activeInstance;
							if (et?.xterm) return De(et.xterm, je, et, Ve);
						},
					});
				}
				function Le(Me) {
					return {
						service: Me.get(P.$iIb),
						configService: Me.get(P.$jIb),
						groupService: Me.get(P.$lIb),
						instanceService: Me.get(P.$mIb),
						editorService: Me.get(P.$kIb),
						profileService: Me.get(L.$teb),
						profileResolverService: Me.get(L.$reb),
					};
				}
				function Fe() {
					me({
						id: L.TerminalCommandId.NewInActiveWorkspace,
						title: (0, h.localize2)(
							9995,
							"Create New Terminal (In Active Workspace)",
						),
						run: async (De) => {
							if (De.service.isProcessSupportRegistered) {
								const Re = await De.service.createTerminal({
									location: De.service.defaultLocation,
								});
								if (!Re) return;
								De.service.setActiveInstance(Re);
							}
							await De.groupService.showPanel(!0);
						},
					}),
						Te([]),
						me({
							id: L.TerminalCommandId.CreateTerminalEditor,
							title: (0, h.localize2)(
								9996,
								"Create New Terminal in Editor Area",
							),
							run: async (De, Re, je) => {
								const Ve =
									(0, m.$ng)(je) && "location" in je
										? je
										: { location: v.TerminalLocation.Editor };
								await (await De.service.createTerminal(Ve)).focusWhenReady();
							},
						}),
						me({
							id: L.TerminalCommandId.CreateTerminalEditorSameGroup,
							title: (0, h.localize2)(
								9997,
								"Create New Terminal in Editor Area",
							),
							f1: !1,
							run: async (De, Re, je) => {
								const Ve = Re.get(te.$EY);
								await (
									await De.service.createTerminal({
										location: { viewColumn: (0, oe.$b8)(Ve, Ve.activeGroup) },
									})
								).focusWhenReady();
							},
						}),
						me({
							id: L.TerminalCommandId.CreateTerminalEditorSide,
							title: (0, h.localize2)(
								9998,
								"Create New Terminal in Editor Area to the Side",
							),
							run: async (De) => {
								await (
									await De.service.createTerminal({
										location: { viewColumn: z.$KY },
									})
								).focusWhenReady();
							},
						}),
						ge({
							id: L.TerminalCommandId.MoveToEditor,
							title: N.$hUc.moveToEditor,
							precondition: ye.terminalAvailable_and_opened,
							activeInstanceType: "view",
							run: (De, Re) => Re.service.moveToEditor(De),
							runAfter: (De) => De.at(-1)?.focus(),
						}),
						ge({
							id: L.TerminalCommandId.MoveIntoNewWindow,
							title: N.$hUc.moveIntoNewWindow,
							precondition: ye.terminalAvailable_and_opened,
							run: (De, Re) => Re.service.moveIntoNewEditor(De),
							runAfter: (De) => De.at(-1)?.focus(),
						}),
						me({
							id: L.TerminalCommandId.MoveToTerminalPanel,
							title: N.$hUc.moveToTerminalPanel,
							precondition: ye.terminalAvailable_and_editorActive,
							run: (De, Re, je) => {
								const Ve = qe(je) ?? De.editorService.activeInstance;
								Ve && De.service.moveToTerminalView(Ve);
							},
						}),
						me({
							id: L.TerminalCommandId.FocusPreviousPane,
							title: (0, h.localize2)(
								9999,
								"Focus Previous Terminal in Terminal Group",
							),
							keybinding: {
								primary: E.KeyMod.Alt | E.KeyCode.LeftArrow,
								secondary: [E.KeyMod.Alt | E.KeyCode.UpArrow],
								mac: {
									primary:
										E.KeyMod.Alt | E.KeyMod.CtrlCmd | E.KeyCode.LeftArrow,
									secondary: [
										E.KeyMod.Alt | E.KeyMod.CtrlCmd | E.KeyCode.UpArrow,
									],
								},
								when: D.TerminalContextKeys.focus,
								weight: f.KeybindingWeight.WorkbenchContrib,
							},
							precondition: ye.terminalAvailable,
							run: async (De) => {
								De.groupService.activeGroup?.focusPreviousPane(),
									await De.groupService.showPanel(!0);
							},
						}),
						me({
							id: L.TerminalCommandId.FocusNextPane,
							title: (0, h.localize2)(
								1e4,
								"Focus Next Terminal in Terminal Group",
							),
							keybinding: {
								primary: E.KeyMod.Alt | E.KeyCode.RightArrow,
								secondary: [E.KeyMod.Alt | E.KeyCode.DownArrow],
								mac: {
									primary:
										E.KeyMod.Alt | E.KeyMod.CtrlCmd | E.KeyCode.RightArrow,
									secondary: [
										E.KeyMod.Alt | E.KeyMod.CtrlCmd | E.KeyCode.DownArrow,
									],
								},
								when: D.TerminalContextKeys.focus,
								weight: f.KeybindingWeight.WorkbenchContrib,
							},
							precondition: ye.terminalAvailable,
							run: async (De) => {
								De.groupService.activeGroup?.focusNextPane(),
									await De.groupService.showPanel(!0);
							},
						}),
						be({
							id: _.$_V,
							title: {
								value: "Generate in Terminal",
								original: "Generate in Terminal",
							},
							keybinding: {
								primary: E.KeyMod.CtrlCmd | E.KeyCode.KeyK,
								when: D.TerminalContextKeys.focus,
								weight: f.KeybindingWeight.WorkbenchContrib + 1e4,
							},
							precondition: o.$Kj.or(
								D.TerminalContextKeys.processSupported,
								D.TerminalContextKeys.terminalHasBeenCreated,
							),
							run: async (De, Re, je) => {
								je.get(se.$5X).registerEvent("terminal.cmdk.show"),
									De.showPromptBar();
							},
						}),
						Z.$vUc.registerTerminalAction(_.$aW, (De, Re) => {
							be({
								id: _.$aW,
								title: {
									value: "Hide Prompt Bar",
									original: "Hide Prompt Bar",
								},
								keybinding: {
									primary: E.KeyCode.Escape,
									when: D.TerminalContextKeys.focus,
									weight: f.KeybindingWeight.WorkbenchContrib + 1e4,
								},
								precondition: o.$Kj.and(
									o.$Kj.or(
										D.TerminalContextKeys.processSupported,
										D.TerminalContextKeys.terminalHasBeenCreated,
									),
									o.$Kj.function(() => {
										const je = Re.activeInstance;
										return je === void 0 ? !1 : je.promptBarData !== void 0;
									}),
								),
								run: async (je, Ve, Ze) => {
									je.hidePromptBar();
								},
							});
						}),
						Z.$vUc.registerTerminalAction(_.$bW, (De, Re) => {
							be({
								id: _.$bW,
								title: {
									value: "Cancel Generation",
									original: "Cancel Generation",
								},
								precondition: o.$Kj.or(
									D.TerminalContextKeys.processSupported,
									D.TerminalContextKeys.terminalHasBeenCreated,
								),
								keybinding: {
									primary: E.KeyMod.CtrlCmd | E.KeyCode.Backspace,
									when: o.$Kj.and(
										D.TerminalContextKeys.focus,
										o.$Kj.function(() => {
											const je = Re.activeInstance;
											return je === void 0
												? !1
												: je.promptBarData !== void 0 &&
														je.promptBarData.abortController?.signal.aborted ===
															!1;
										}),
									),
									weight: f.KeybindingWeight.WorkbenchContrib + 1e4,
								},
								run: async (je, Ve, Ze) => {
									je.cancelPromptBar();
								},
							});
						}),
						Z.$vUc.registerTerminalAction(_.$cW, (De, Re) => {
							be({
								id: _.$cW,
								title: {
									value: "Accept Generated Command",
									original: "Accept Generated Command",
								},
								precondition: o.$Kj.or(
									D.TerminalContextKeys.processSupported,
									D.TerminalContextKeys.terminalHasBeenCreated,
								),
								keybinding: {
									primary: E.KeyMod.CtrlCmd | E.KeyCode.Enter,
									when: o.$Kj.and(
										D.TerminalContextKeys.focus,
										o.$Kj.function(() => {
											const je = Re.activeInstance;
											return je === void 0 ? !1 : je.promptBarData !== void 0;
										}),
									),
									weight: f.KeybindingWeight.WorkbenchContrib + 1e4,
								},
								run: async (je, Ve, Ze) => {
									je.acceptPromptBar();
								},
							});
						}),
						Z.$vUc.registerTerminalAction(_.$dW, (De, Re) => {
							be({
								id: _.$dW,
								title: {
									value: "Accept & Run Generated Command",
									original: "Accept & Run Generated Command",
								},
								precondition: o.$Kj.or(
									D.TerminalContextKeys.processSupported,
									D.TerminalContextKeys.terminalHasBeenCreated,
								),
								keybinding: {
									primary: E.KeyMod.CtrlCmd | E.KeyCode.Enter,
									when: o.$Kj.and(
										D.TerminalContextKeys.focus,
										o.$Kj.function(() => {
											const je = Re.activeInstance;
											return je === void 0 ? !1 : je.promptBarData !== void 0;
										}),
									),
									weight: f.KeybindingWeight.WorkbenchContrib + 10001,
								},
								run: async (je, Ve, Ze) => {
									je.acceptAndRunPromptBar();
								},
							});
						}),
						Z.$vUc.registerTerminalAction(_.$eW, (De, Re) => {
							be({
								id: _.$eW,
								title: {
									value: "Reject Generated Command",
									original: "Reject Generated Command",
								},
								precondition: o.$Kj.or(
									D.TerminalContextKeys.processSupported,
									D.TerminalContextKeys.terminalHasBeenCreated,
								),
								keybinding: {
									primary: E.KeyMod.CtrlCmd | E.KeyCode.Backspace,
									when: o.$Kj.and(
										D.TerminalContextKeys.focus,
										o.$Kj.function(() => {
											const je = Re.activeInstance;
											return je === void 0
												? !1
												: je.promptBarData !== void 0 &&
														je.promptBarData.abortController?.signal.aborted !==
															!1 &&
														je.promptBarData.suggestedCommand.length > 0 &&
														!(
															je.promptBarData.queryHistory !== void 0 &&
															(je.promptBarData.plainText.length ?? 1) > 0
														);
										}),
									),
									weight: f.KeybindingWeight.WorkbenchContrib + 10001,
								},
								run: async (je, Ve, Ze) => {
									je.rejectPromptBar();
								},
							});
						}),
						be({
							id: L.TerminalCommandId.RunRecentCommand,
							title: (0, h.localize2)(10001, "Run Recent Command..."),
							precondition: ye.terminalAvailable,
							keybinding: [
								{
									primary: E.KeyMod.CtrlCmd | E.KeyCode.KeyR,
									when: o.$Kj.and(
										c.$YK,
										o.$Kj.or(
											D.TerminalContextKeys.focus,
											o.$Kj.and(
												re.$NLb,
												re.$SLb.isEqualTo(pe.AccessibleViewProviderId.Terminal),
											),
										),
									),
									weight: f.KeybindingWeight.WorkbenchContrib,
								},
								{
									primary: E.KeyMod.CtrlCmd | E.KeyMod.Alt | E.KeyCode.KeyR,
									mac: {
										primary: E.KeyMod.WinCtrl | E.KeyMod.Alt | E.KeyCode.KeyR,
									},
									when: o.$Kj.and(D.TerminalContextKeys.focus, c.$YK.negate()),
									weight: f.KeybindingWeight.WorkbenchContrib,
								},
							],
							run: async (De, Re) => {
								await De.runRecent("command"),
									De?.target === v.TerminalLocation.Editor
										? await Re.editorService.revealActiveEditor()
										: await Re.groupService.showPanel(!1);
							},
						}),
						be({
							id: L.TerminalCommandId.CopyLastCommand,
							title: (0, h.localize2)(10002, "Copy Last Command"),
							precondition: ye.terminalAvailable,
							run: async (De, Re, je) => {
								const Ve = je.get(ie.$Vxb),
									Ze = De.capabilities.get(
										ne.TerminalCapability.CommandDetection,
									)?.commands;
								if (!Ze || Ze.length === 0) return;
								const et = Ze[Ze.length - 1];
								et.command && (await Ve.writeText(et.command));
							},
						}),
						be({
							id: L.TerminalCommandId.CopyLastCommandOutput,
							title: (0, h.localize2)(10003, "Copy Last Command Output"),
							precondition: ye.terminalAvailable,
							run: async (De, Re, je) => {
								const Ve = je.get(ie.$Vxb),
									Ze = De.capabilities.get(
										ne.TerminalCapability.CommandDetection,
									)?.commands;
								if (!Ze || Ze.length === 0) return;
								const et = Ze[Ze.length - 1];
								if (!et?.hasOutput()) return;
								const rt = et.getOutput();
								(0, m.$lg)(rt) && (await Ve.writeText(rt));
							},
						}),
						be({
							id: L.TerminalCommandId.CopyLastCommandAndLastCommandOutput,
							title: (0, h.localize2)(10004, "Copy Last Command and Output"),
							precondition: ye.terminalAvailable,
							run: async (De, Re, je) => {
								const Ve = je.get(ie.$Vxb),
									Ze = De.capabilities.get(
										ne.TerminalCapability.CommandDetection,
									)?.commands;
								if (!Ze || Ze.length === 0) return;
								const et = Ze[Ze.length - 1];
								if (!et?.hasOutput()) return;
								const rt = et.getOutput();
								(0, m.$lg)(rt) &&
									(await Ve.writeText(
										`${
											et.command !== ""
												? et.command +
													`
`
												: ""
										}${rt}`,
									));
							},
						}),
						be({
							id: L.TerminalCommandId.GoToRecentDirectory,
							title: (0, h.localize2)(10005, "Go to Recent Directory..."),
							metadata: {
								description: (0, h.localize2)(10006, "Goes to a recent folder"),
							},
							precondition: ye.terminalAvailable,
							keybinding: {
								primary: E.KeyMod.CtrlCmd | E.KeyCode.KeyG,
								when: D.TerminalContextKeys.focus,
								weight: f.KeybindingWeight.WorkbenchContrib,
							},
							run: async (De, Re) => {
								await De.runRecent("cwd"),
									De?.target === v.TerminalLocation.Editor
										? await Re.editorService.revealActiveEditor()
										: await Re.groupService.showPanel(!1);
							},
						}),
						me({
							id: L.TerminalCommandId.ResizePaneLeft,
							title: (0, h.localize2)(10007, "Resize Terminal Left"),
							keybinding: {
								linux: {
									primary:
										E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.LeftArrow,
								},
								mac: {
									primary:
										E.KeyMod.CtrlCmd | E.KeyMod.WinCtrl | E.KeyCode.LeftArrow,
								},
								when: D.TerminalContextKeys.focus,
								weight: f.KeybindingWeight.WorkbenchContrib,
							},
							precondition: ye.terminalAvailable,
							run: (De) =>
								De.groupService.activeGroup?.resizePane(P.Direction.Left),
						}),
						me({
							id: L.TerminalCommandId.ResizePaneRight,
							title: (0, h.localize2)(10008, "Resize Terminal Right"),
							keybinding: {
								linux: {
									primary:
										E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.RightArrow,
								},
								mac: {
									primary:
										E.KeyMod.CtrlCmd | E.KeyMod.WinCtrl | E.KeyCode.RightArrow,
								},
								when: D.TerminalContextKeys.focus,
								weight: f.KeybindingWeight.WorkbenchContrib,
							},
							precondition: ye.terminalAvailable,
							run: (De) =>
								De.groupService.activeGroup?.resizePane(P.Direction.Right),
						}),
						me({
							id: L.TerminalCommandId.ResizePaneUp,
							title: (0, h.localize2)(10009, "Resize Terminal Up"),
							keybinding: {
								mac: {
									primary:
										E.KeyMod.CtrlCmd | E.KeyMod.WinCtrl | E.KeyCode.UpArrow,
								},
								when: D.TerminalContextKeys.focus,
								weight: f.KeybindingWeight.WorkbenchContrib,
							},
							precondition: ye.terminalAvailable,
							run: (De) =>
								De.groupService.activeGroup?.resizePane(P.Direction.Up),
						}),
						me({
							id: L.TerminalCommandId.ResizePaneDown,
							title: (0, h.localize2)(10010, "Resize Terminal Down"),
							keybinding: {
								mac: {
									primary:
										E.KeyMod.CtrlCmd | E.KeyMod.WinCtrl | E.KeyCode.DownArrow,
								},
								when: D.TerminalContextKeys.focus,
								weight: f.KeybindingWeight.WorkbenchContrib,
							},
							precondition: ye.terminalAvailable,
							run: (De) =>
								De.groupService.activeGroup?.resizePane(P.Direction.Down),
						}),
						me({
							id: L.TerminalCommandId.Focus,
							title: N.$hUc.focus,
							keybinding: {
								when: o.$Kj.and(
									c.$YK,
									re.$RLb,
									re.$SLb.isEqualTo(pe.AccessibleViewProviderId.Terminal),
								),
								primary: E.KeyMod.CtrlCmd | E.KeyCode.DownArrow,
								weight: f.KeybindingWeight.WorkbenchContrib,
							},
							precondition: ye.terminalAvailable,
							run: async (De) => {
								const Re =
									De.service.activeInstance ||
									(await De.service.createTerminal({
										location: v.TerminalLocation.Panel,
									}));
								Re && (De.service.setActiveInstance(Re), ke(Re, De));
							},
						}),
						me({
							id: L.TerminalCommandId.FocusTabs,
							title: (0, h.localize2)(10011, "Focus Terminal Tabs View"),
							keybinding: {
								primary:
									E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.Backslash,
								weight: f.KeybindingWeight.WorkbenchContrib,
								when: o.$Kj.or(
									D.TerminalContextKeys.tabsFocus,
									D.TerminalContextKeys.focus,
								),
							},
							precondition: ye.terminalAvailable,
							run: (De) => De.groupService.focusTabs(),
						}),
						me({
							id: L.TerminalCommandId.FocusNext,
							title: (0, h.localize2)(10012, "Focus Next Terminal Group"),
							precondition: ye.terminalAvailable,
							keybinding: {
								primary: E.KeyMod.CtrlCmd | E.KeyCode.PageDown,
								mac: {
									primary:
										E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.BracketRight,
								},
								when: o.$Kj.and(
									D.TerminalContextKeys.focus,
									D.TerminalContextKeys.editorFocus.negate(),
								),
								weight: f.KeybindingWeight.WorkbenchContrib,
							},
							run: async (De) => {
								De.groupService.setActiveGroupToNext(),
									await De.groupService.showPanel(!0);
							},
						}),
						me({
							id: L.TerminalCommandId.FocusPrevious,
							title: (0, h.localize2)(10013, "Focus Previous Terminal Group"),
							precondition: ye.terminalAvailable,
							keybinding: {
								primary: E.KeyMod.CtrlCmd | E.KeyCode.PageUp,
								mac: {
									primary:
										E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.BracketLeft,
								},
								when: o.$Kj.and(
									D.TerminalContextKeys.focus,
									D.TerminalContextKeys.editorFocus.negate(),
								),
								weight: f.KeybindingWeight.WorkbenchContrib,
							},
							run: async (De) => {
								De.groupService.setActiveGroupToPrevious(),
									await De.groupService.showPanel(!0);
							},
						}),
						me({
							id: L.TerminalCommandId.RunSelectedText,
							title: (0, h.localize2)(
								10014,
								"Run Selected Text In Active Terminal",
							),
							run: async (De, Re) => {
								const Ve = Re.get(u.$dtb).getActiveCodeEditor();
								if (!Ve || !Ve.hasModel()) return;
								const Ze = await De.service.getActiveOrCreateInstance({
										acceptsInput: !0,
									}),
									et = Ve.getSelection();
								let rt;
								if (et.isEmpty())
									rt = Ve.getModel()
										.getLineContent(et.selectionStartLineNumber)
										.trim();
								else {
									const ft = d.$l
										? a.EndOfLinePreference.LF
										: a.EndOfLinePreference.CRLF;
									rt = Ve.getModel().getValueInRange(et, ft);
								}
								Ze.sendText(rt, !0, !0),
									await De.service.revealActiveTerminal(!0);
							},
						}),
						me({
							id: L.TerminalCommandId.RunActiveFile,
							title: (0, h.localize2)(
								10015,
								"Run Active File In Active Terminal",
							),
							precondition: ye.terminalAvailable,
							run: async (De, Re) => {
								const je = Re.get(u.$dtb),
									Ve = Re.get(l.$4N),
									Ze = Re.get(R.$r8),
									et = je.getActiveCodeEditor();
								if (!et || !et.hasModel()) return;
								const rt = await De.service.getActiveOrCreateInstance({
										acceptsInput: !0,
									}),
									ft = rt ? rt.isRemote : !!Ze.remoteAuthority,
									bt = et.getModel().uri;
								if (
									(!ft &&
										bt.scheme !== C.Schemas.file &&
										bt.scheme !== C.Schemas.vscodeUserData) ||
									(ft && bt.scheme !== C.Schemas.vscodeRemote)
								) {
									Ve.warn((0, h.localize)(9977, null));
									return;
								}
								return await rt.sendPath(bt, !0), De.groupService.showPanel();
							},
						}),
						Ce({
							id: L.TerminalCommandId.ScrollDownLine,
							title: (0, h.localize2)(10016, "Scroll Down (Line)"),
							keybinding: {
								primary: E.KeyMod.CtrlCmd | E.KeyMod.Alt | E.KeyCode.PageDown,
								linux: {
									primary:
										E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.DownArrow,
								},
								when: ye.focusInAny_and_normalBuffer,
								weight: f.KeybindingWeight.WorkbenchContrib,
							},
							precondition: ye.terminalAvailable,
							run: (De) => De.scrollDownLine(),
						}),
						Ce({
							id: L.TerminalCommandId.ScrollDownPage,
							title: (0, h.localize2)(10017, "Scroll Down (Page)"),
							keybinding: {
								primary: E.KeyMod.Shift | E.KeyCode.PageDown,
								mac: { primary: E.KeyCode.PageDown },
								when: ye.focusInAny_and_normalBuffer,
								weight: f.KeybindingWeight.WorkbenchContrib,
							},
							precondition: ye.terminalAvailable,
							run: (De) => De.scrollDownPage(),
						}),
						Ce({
							id: L.TerminalCommandId.ScrollToBottom,
							title: (0, h.localize2)(10018, "Scroll to Bottom"),
							keybinding: {
								primary: E.KeyMod.CtrlCmd | E.KeyCode.End,
								linux: { primary: E.KeyMod.Shift | E.KeyCode.End },
								when: ye.focusInAny_and_normalBuffer,
								weight: f.KeybindingWeight.WorkbenchContrib,
							},
							precondition: ye.terminalAvailable,
							run: (De) => De.scrollToBottom(),
						}),
						Ce({
							id: L.TerminalCommandId.ScrollUpLine,
							title: (0, h.localize2)(10019, "Scroll Up (Line)"),
							keybinding: {
								primary: E.KeyMod.CtrlCmd | E.KeyMod.Alt | E.KeyCode.PageUp,
								linux: {
									primary:
										E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.UpArrow,
								},
								when: ye.focusInAny_and_normalBuffer,
								weight: f.KeybindingWeight.WorkbenchContrib,
							},
							precondition: ye.terminalAvailable,
							run: (De) => De.scrollUpLine(),
						}),
						Ce({
							id: L.TerminalCommandId.ScrollUpPage,
							title: (0, h.localize2)(10020, "Scroll Up (Page)"),
							f1: !0,
							category: $e,
							keybinding: {
								primary: E.KeyMod.Shift | E.KeyCode.PageUp,
								mac: { primary: E.KeyCode.PageUp },
								when: ye.focusInAny_and_normalBuffer,
								weight: f.KeybindingWeight.WorkbenchContrib,
							},
							precondition: ye.terminalAvailable,
							run: (De) => De.scrollUpPage(),
						}),
						Ce({
							id: L.TerminalCommandId.ScrollToTop,
							title: (0, h.localize2)(10021, "Scroll to Top"),
							keybinding: {
								primary: E.KeyMod.CtrlCmd | E.KeyCode.Home,
								linux: { primary: E.KeyMod.Shift | E.KeyCode.Home },
								when: ye.focusInAny_and_normalBuffer,
								weight: f.KeybindingWeight.WorkbenchContrib,
							},
							precondition: ye.terminalAvailable,
							run: (De) => De.scrollToTop(),
						}),
						Ce({
							id: L.TerminalCommandId.ClearSelection,
							title: (0, h.localize2)(10022, "Clear Selection"),
							keybinding: {
								primary: E.KeyCode.Escape,
								when: o.$Kj.and(
									D.TerminalContextKeys.focusInAny,
									D.TerminalContextKeys.textSelected,
									D.TerminalContextKeys.notFindVisible,
								),
								weight: f.KeybindingWeight.WorkbenchContrib,
							},
							precondition: ye.terminalAvailable,
							run: (De) => {
								De.hasSelection() && De.clearSelection();
							},
						}),
						me({
							id: L.TerminalCommandId.ChangeIcon,
							title: N.$hUc.changeIcon,
							precondition: ye.terminalAvailable,
							run: (De, Re, je) => Ee(De, je)?.changeIcon(),
						}),
						me({
							id: L.TerminalCommandId.ChangeIconActiveTab,
							title: N.$hUc.changeIcon,
							f1: !1,
							precondition: ye.terminalAvailable_and_singularSelection,
							run: async (De, Re, je) => {
								let Ve;
								if (De.groupService.lastAccessedMenu === "inline-tab") {
									Ee(De, je)?.changeIcon();
									return;
								}
								for (const Ze of xe(Re) ?? []) Ve = await Ze.changeIcon(Ve);
							},
						}),
						me({
							id: L.TerminalCommandId.ChangeColor,
							title: N.$hUc.changeColor,
							precondition: ye.terminalAvailable,
							run: (De, Re, je) => Ee(De, je)?.changeColor(),
						}),
						me({
							id: L.TerminalCommandId.ChangeColorActiveTab,
							title: N.$hUc.changeColor,
							f1: !1,
							precondition: ye.terminalAvailable_and_singularSelection,
							run: async (De, Re, je) => {
								let Ve,
									Ze = 0;
								if (De.groupService.lastAccessedMenu === "inline-tab") {
									Ee(De, je)?.changeColor();
									return;
								}
								for (const et of xe(Re) ?? []) {
									const rt = Ze !== 0;
									(Ve = await et.changeColor(Ve, rt)), Ze++;
								}
							},
						}),
						me({
							id: L.TerminalCommandId.Rename,
							title: N.$hUc.rename,
							precondition: ye.terminalAvailable,
							run: (De, Re, je) => Ue(De, Re, je),
						}),
						me({
							id: L.TerminalCommandId.RenameActiveTab,
							title: N.$hUc.rename,
							f1: !1,
							keybinding: {
								primary: E.KeyCode.F2,
								mac: { primary: E.KeyCode.Enter },
								when: o.$Kj.and(D.TerminalContextKeys.tabsFocus),
								weight: f.KeybindingWeight.WorkbenchContrib,
							},
							precondition: ye.terminalAvailable_and_singularSelection,
							run: async (De, Re) => {
								const je = Re.get(P.$lIb),
									Ve = Re.get(l.$4N),
									Ze = xe(Re),
									et = Ze?.[0];
								if (et) {
									if (je.lastAccessedMenu === "inline-tab")
										return Ue(De, Re, et);
									De.service.setEditingTerminal(et),
										De.service.setEditable(et, {
											validationMessage: (rt) => He(rt),
											onFinish: async (rt, ft) => {
												if (
													(De.service.setEditable(et, null),
													De.service.setEditingTerminal(void 0),
													ft)
												) {
													const bt = [];
													for (const nt of Ze)
														bt.push(
															(async () => {
																await nt.rename(rt);
															})(),
														);
													try {
														await Promise.all(bt);
													} catch (nt) {
														Ve.error(nt);
													}
												}
											},
										});
								}
							},
						}),
						be({
							id: L.TerminalCommandId.DetachSession,
							title: (0, h.localize2)(10023, "Detach Session"),
							run: (De) =>
								De.detachProcessAndDispose(v.TerminalExitReason.User),
						}),
						me({
							id: L.TerminalCommandId.AttachToSession,
							title: (0, h.localize2)(10024, "Attach to Session"),
							run: async (De, Re) => {
								const je = Re.get($.$DJ),
									Ve = Re.get(b.$3N),
									Ze = Re.get(U.$$m),
									et = Re.get(l.$4N),
									rt = Ze.getConnection()?.remoteAuthority ?? void 0,
									ft = await Re.get(P.$mIb).getBackend(rt);
								if (!ft)
									throw new Error(
										`No backend registered for remote authority '${rt}'`,
									);
								const bt = await ft.listProcesses();
								ft.reduceConnectionGraceTime();
								const lt = bt
									.filter((gt) => !De.service.isAttachedToTerminal(gt))
									.map((gt) => {
										const ht = Ve.getUriLabel(r.URI.file(gt.cwd));
										return {
											label: gt.title,
											detail: gt.workspaceName
												? `${gt.workspaceName} \u2E31 ${ht}`
												: ht,
											description: gt.pid ? String(gt.pid) : "",
											term: gt,
										};
									});
								if (lt.length === 0) {
									et.info((0, h.localize)(9978, null));
									return;
								}
								const ct = await je.pick(lt, { canPickMany: !1 });
								if (ct) {
									const gt = await De.service.createTerminal({
										config: { attachPersistentProcess: ct.term },
									});
									De.service.setActiveInstance(gt), await ke(gt, De);
								}
							},
						}),
						me({
							id: L.TerminalCommandId.QuickOpenTerm,
							title: (0, h.localize2)(10025, "Switch Active Terminal"),
							precondition: ye.terminalAvailable,
							run: (De, Re) => Re.get($.$DJ).quickAccess.show(k.$iUc.PREFIX),
						}),
						be({
							id: L.TerminalCommandId.ScrollToPreviousCommand,
							title: N.$hUc.scrollToPreviousCommand,
							keybinding: {
								primary: E.KeyMod.CtrlCmd | E.KeyCode.UpArrow,
								when: o.$Kj.and(D.TerminalContextKeys.focus, c.$YK.negate()),
								weight: f.KeybindingWeight.WorkbenchContrib,
							},
							precondition: ye.terminalAvailable,
							icon: w.$ak.arrowUp,
							menu: [
								{
									id: n.$XX.ViewTitle,
									group: "navigation",
									order: 4,
									when: o.$Kj.equals("view", L.$geb),
									isHiddenByDefault: !0,
								},
							],
							run: (De) =>
								De.xterm?.markTracker.scrollToPreviousMark(
									void 0,
									void 0,
									De.capabilities.has(ne.TerminalCapability.CommandDetection),
								),
						}),
						be({
							id: L.TerminalCommandId.ScrollToNextCommand,
							title: N.$hUc.scrollToNextCommand,
							keybinding: {
								primary: E.KeyMod.CtrlCmd | E.KeyCode.DownArrow,
								when: o.$Kj.and(D.TerminalContextKeys.focus, c.$YK.negate()),
								weight: f.KeybindingWeight.WorkbenchContrib,
							},
							precondition: ye.terminalAvailable,
							icon: w.$ak.arrowDown,
							menu: [
								{
									id: n.$XX.ViewTitle,
									group: "navigation",
									order: 4,
									when: o.$Kj.equals("view", L.$geb),
									isHiddenByDefault: !0,
								},
							],
							run: (De) => {
								De.xterm?.markTracker.scrollToNextMark(), De.focus();
							},
						}),
						be({
							id: L.TerminalCommandId.SelectToPreviousCommand,
							title: (0, h.localize2)(10026, "Select To Previous Command"),
							keybinding: {
								primary: E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.UpArrow,
								when: D.TerminalContextKeys.focus,
								weight: f.KeybindingWeight.WorkbenchContrib,
							},
							precondition: ye.terminalAvailable,
							run: (De) => {
								De.xterm?.markTracker.selectToPreviousMark(), De.focus();
							},
						}),
						be({
							id: L.TerminalCommandId.SelectToNextCommand,
							title: (0, h.localize2)(10027, "Select To Next Command"),
							keybinding: {
								primary:
									E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.DownArrow,
								when: D.TerminalContextKeys.focus,
								weight: f.KeybindingWeight.WorkbenchContrib,
							},
							precondition: ye.terminalAvailable,
							run: (De) => {
								De.xterm?.markTracker.selectToNextMark(), De.focus();
							},
						}),
						Ce({
							id: L.TerminalCommandId.SelectToPreviousLine,
							title: (0, h.localize2)(10028, "Select To Previous Line"),
							precondition: ye.terminalAvailable,
							run: async (De, Re, je) => {
								De.markTracker.selectToPreviousLine(), (je || De).focus();
							},
						}),
						Ce({
							id: L.TerminalCommandId.SelectToNextLine,
							title: (0, h.localize2)(10029, "Select To Next Line"),
							precondition: ye.terminalAvailable,
							run: async (De, Re, je) => {
								De.markTracker.selectToNextLine(), (je || De).focus();
							},
						}),
						me({
							id: L.TerminalCommandId.SendSequence,
							title: N.$hUc.sendSequence,
							f1: !1,
							metadata: {
								description: N.$hUc.sendSequence.value,
								args: [
									{
										name: "args",
										schema: {
											type: "object",
											required: ["text"],
											properties: {
												text: {
													description: (0, h.localize)(9979, null),
													type: "string",
												},
											},
										},
									},
								],
							},
							run: (De, Re, je) => (0, e.$CUc)(Re, je),
						}),
						me({
							id: L.TerminalCommandId.NewWithCwd,
							title: N.$hUc.newWithCwd,
							metadata: {
								description: N.$hUc.newWithCwd.value,
								args: [
									{
										name: "args",
										schema: {
											type: "object",
											required: ["cwd"],
											properties: {
												cwd: {
													description: (0, h.localize)(9980, null),
													type: "string",
												},
											},
										},
									},
								],
							},
							run: async (De, Re, je) => {
								const Ve = (0, m.$ng)(je) && "cwd" in je ? Ae(je.cwd) : void 0,
									Ze = await De.service.createTerminal({ cwd: Ve });
								Ze && (De.service.setActiveInstance(Ze), await ke(Ze, De));
							},
						}),
						be({
							id: L.TerminalCommandId.RenameWithArgs,
							title: N.$hUc.renameWithArgs,
							metadata: {
								description: N.$hUc.renameWithArgs.value,
								args: [
									{
										name: "args",
										schema: {
											type: "object",
											required: ["name"],
											properties: {
												name: {
													description: (0, h.localize)(9981, null),
													type: "string",
													minLength: 1,
												},
											},
										},
									},
								],
							},
							precondition: ye.terminalAvailable,
							run: async (De, Re, je, Ve) => {
								const Ze = je.get(l.$4N),
									et = (0, m.$ng)(Ve) && "name" in Ve ? Ae(Ve.name) : void 0;
								if (!et) {
									Ze.warn((0, h.localize)(9982, null));
									return;
								}
								De.rename(et);
							},
						}),
						be({
							id: L.TerminalCommandId.Relaunch,
							title: (0, h.localize2)(10030, "Relaunch Active Terminal"),
							run: (De) => De.relaunch(),
						}),
						me({
							id: L.TerminalCommandId.Split,
							title: N.$hUc.split,
							precondition: o.$Kj.or(
								D.TerminalContextKeys.processSupported,
								D.TerminalContextKeys.webExtensionContributedProfile,
							),
							keybinding: {
								primary: E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.Digit5,
								weight: f.KeybindingWeight.WorkbenchContrib,
								mac: {
									primary: E.KeyMod.CtrlCmd | E.KeyCode.Backslash,
									secondary: [
										E.KeyMod.WinCtrl | E.KeyMod.Shift | E.KeyCode.Digit5,
									],
								},
								when: D.TerminalContextKeys.focus,
							},
							icon: w.$ak.splitHorizontal,
							run: async (De, Re, je) => {
								const Ve = (0, m.$ng)(je) ? je : void 0,
									Ze = Re.get(g.$ek),
									et = Re.get(S.$Vi),
									rt = Ke(Ve),
									ft = (await De.service.getInstanceHost(rt?.location))
										.activeInstance;
								if (!ft) return;
								const bt = await (0, Z.$wUc)(
									ft,
									et.getWorkspace().folders,
									Ze,
									De.configService,
								);
								if (bt === void 0) return;
								const nt = await De.service.createTerminal({
									location: { parentTerminal: ft },
									config: rt?.config,
									cwd: bt,
								});
								await ke(nt, De);
							},
						}),
						me({
							id: L.TerminalCommandId.SplitActiveTab,
							title: N.$hUc.split,
							f1: !1,
							keybinding: {
								primary: E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.Digit5,
								mac: {
									primary: E.KeyMod.CtrlCmd | E.KeyCode.Backslash,
									secondary: [
										E.KeyMod.WinCtrl | E.KeyMod.Shift | E.KeyCode.Digit5,
									],
								},
								weight: f.KeybindingWeight.WorkbenchContrib,
								when: D.TerminalContextKeys.tabsFocus,
							},
							run: async (De, Re) => {
								const je = xe(Re);
								if (je) {
									const Ve = [];
									for (const Ze of je)
										Ve.push(
											(async () => {
												await De.service.createTerminal({
													location: { parentTerminal: Ze },
												}),
													await De.groupService.showPanel(!0);
											})(),
										);
									await Promise.all(Ve);
								}
							},
						}),
						ge({
							id: L.TerminalCommandId.Unsplit,
							title: N.$hUc.unsplit,
							precondition: ye.terminalAvailable,
							run: async (De, Re) => {
								const je = Re.groupService.getGroupForInstance(De);
								je &&
									je?.terminalInstances.length > 1 &&
									Re.groupService.unsplitInstance(De);
							},
						}),
						me({
							id: L.TerminalCommandId.JoinActiveTab,
							title: (0, h.localize2)(10031, "Join Terminals"),
							precondition: o.$Kj.and(
								ye.terminalAvailable,
								D.TerminalContextKeys.tabsSingularSelection.toNegated(),
							),
							run: async (De, Re) => {
								const je = xe(Re);
								je && je.length > 1 && De.groupService.joinInstances(je);
							},
						}),
						me({
							id: L.TerminalCommandId.Join,
							title: (0, h.localize2)(10032, "Join Terminals..."),
							precondition: ye.terminalAvailable,
							run: async (De, Re) => {
								const je = Re.get(H.$iP),
									Ve = Re.get(l.$4N),
									Ze = Re.get($.$DJ),
									et = [];
								if (De.groupService.instances.length <= 1) {
									Ve.warn((0, h.localize)(9983, null));
									return;
								}
								const rt = De.groupService.instances.filter(
									(bt) =>
										bt.instanceId !==
										De.groupService.activeInstance?.instanceId,
								);
								for (const bt of rt)
									if (
										De.groupService.getGroupForInstance(bt)?.terminalInstances
											.length === 1
									) {
										const ct = `$(${(0, q.$Tnc)(Re, bt)}): ${bt.title}`,
											gt = [],
											ht = (0, q.$Onc)(bt);
										ht && gt.push(ht);
										const Rt = (0, q.$Snc)(bt, je.getColorTheme().type);
										Rt && gt.push(...Rt),
											et.push({ terminal: bt, label: ct, iconClasses: gt });
									}
								if (et.length === 0) {
									Ve.warn((0, h.localize)(9984, null));
									return;
								}
								const ft = await Ze.pick(et, {});
								ft &&
									De.groupService.joinInstances([
										ft.terminal,
										De.groupService.activeInstance,
									]);
							},
						}),
						be({
							id: L.TerminalCommandId.SplitInActiveWorkspace,
							title: (0, h.localize2)(
								10033,
								"Split Terminal (In Active Workspace)",
							),
							run: async (De, Re) => {
								(
									await Re.service.createTerminal({
										location: { parentTerminal: De },
									})
								)?.target !== v.TerminalLocation.Editor &&
									(await Re.groupService.showPanel(!0));
							},
						}),
						Ce({
							id: L.TerminalCommandId.SelectAll,
							title: (0, h.localize2)(10034, "Select All"),
							precondition: ye.terminalAvailable,
							keybinding: [
								{
									primary: 0,
									mac: { primary: E.KeyMod.CtrlCmd | E.KeyCode.KeyA },
									weight: f.KeybindingWeight.WorkbenchContrib,
									when: D.TerminalContextKeys.focusInAny,
								},
							],
							run: (De) => De.selectAll(),
						}),
						me({
							id: L.TerminalCommandId.New,
							title: (0, h.localize2)(10035, "Create New Terminal"),
							precondition: o.$Kj.or(
								D.TerminalContextKeys.processSupported,
								D.TerminalContextKeys.webExtensionContributedProfile,
							),
							icon: ee.$YHb,
							keybinding: {
								primary:
									E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.Backquote,
								mac: {
									primary:
										E.KeyMod.WinCtrl | E.KeyMod.Shift | E.KeyCode.Backquote,
								},
								weight: f.KeybindingWeight.WorkbenchContrib,
							},
							run: async (De, Re, je) => {
								let Ve = (0, m.$ng)(je) ? je : void 0;
								const Ze = Re.get(S.$Vi),
									et = Re.get(g.$ek),
									rt = Ze.getWorkspace().folders;
								if (Ve && (0, le.$7gb)(Ve) && (Ve.altKey || Ve.ctrlKey)) {
									await De.service.createTerminal({
										location: { splitActiveTerminal: !0 },
									});
									return;
								}
								if (De.service.isProcessSupportRegistered) {
									Ve = !Ve || (0, le.$7gb)(Ve) ? {} : Ve;
									let ft;
									if (rt.length <= 1) ft = await De.service.createTerminal(Ve);
									else {
										const bt = (await Ie(Re))?.cwd;
										if (!bt) return;
										(Ve.cwd = bt), (ft = await De.service.createTerminal(Ve));
									}
									De.service.setActiveInstance(ft), await ke(ft, De);
								} else
									De.profileService.contributedProfiles.length > 0
										? et.executeCommand(L.TerminalCommandId.NewWithProfile)
										: et.executeCommand(L.TerminalCommandId.Toggle);
							},
						});
					async function Me(De, Re) {
						Re &&
							(await De.service.safeDisposeTerminal(Re),
							De.groupService.instances.length > 0 &&
								(await De.groupService.showPanel(!0)));
					}
					me({
						id: L.TerminalCommandId.Kill,
						title: (0, h.localize2)(10036, "Kill the Active Terminal Instance"),
						precondition: o.$Kj.or(
							ye.terminalAvailable,
							D.TerminalContextKeys.isOpen,
						),
						icon: ee.$XHb,
						run: async (De) => Me(De, De.groupService.activeInstance),
					}),
						me({
							id: L.TerminalCommandId.KillViewOrEditor,
							title: N.$hUc.kill,
							f1: !1,
							precondition: o.$Kj.or(
								ye.terminalAvailable,
								D.TerminalContextKeys.isOpen,
							),
							run: async (De) => Me(De, De.service.activeInstance),
						}),
						me({
							id: L.TerminalCommandId.KillAll,
							title: (0, h.localize2)(10037, "Kill All Terminals"),
							precondition: o.$Kj.or(
								ye.terminalAvailable,
								D.TerminalContextKeys.isOpen,
							),
							icon: w.$ak.trash,
							run: async (De) => {
								const Re = [];
								for (const je of De.service.instances)
									Re.push(De.service.safeDisposeTerminal(je));
								await Promise.all(Re);
							},
						}),
						me({
							id: L.TerminalCommandId.KillEditor,
							title: (0, h.localize2)(
								10038,
								"Kill the Active Terminal in Editor Area",
							),
							precondition: ye.terminalAvailable,
							keybinding: {
								primary: E.KeyMod.CtrlCmd | E.KeyCode.KeyW,
								win: {
									primary: E.KeyMod.CtrlCmd | E.KeyCode.F4,
									secondary: [E.KeyMod.CtrlCmd | E.KeyCode.KeyW],
								},
								weight: f.KeybindingWeight.WorkbenchContrib,
								when: o.$Kj.and(
									D.TerminalContextKeys.focus,
									D.TerminalContextKeys.editorFocus,
								),
							},
							run: (De, Re) => Re.get(g.$ek).executeCommand(T.$YVb),
						}),
						me({
							id: L.TerminalCommandId.KillActiveTab,
							title: N.$hUc.kill,
							f1: !1,
							precondition: o.$Kj.or(
								ye.terminalAvailable,
								D.TerminalContextKeys.isOpen,
							),
							keybinding: {
								primary: E.KeyCode.Delete,
								mac: {
									primary: E.KeyMod.CtrlCmd | E.KeyCode.Backspace,
									secondary: [E.KeyCode.Delete],
								},
								weight: f.KeybindingWeight.WorkbenchContrib,
								when: D.TerminalContextKeys.tabsFocus,
							},
							run: async (De, Re) => {
								const je = [];
								for (const Ve of xe(Re, !0) ?? [])
									je.push(De.service.safeDisposeTerminal(Ve));
								await Promise.all(je), De.groupService.focusTabs();
							},
						}),
						me({
							id: L.TerminalCommandId.FocusHover,
							title: N.$hUc.focusHover,
							precondition: o.$Kj.or(
								ye.terminalAvailable,
								D.TerminalContextKeys.isOpen,
							),
							keybinding: {
								primary: (0, E.$os)(E.$ps, E.KeyMod.CtrlCmd | E.KeyCode.KeyI),
								mac: {
									primary: (0, E.$os)(E.$qs, E.KeyMod.CtrlCmd | E.KeyCode.KeyI),
								},
								weight: f.KeybindingWeight.WorkbenchContrib,
								when: o.$Kj.or(
									D.TerminalContextKeys.tabsFocus,
									D.TerminalContextKeys.focus,
								),
							},
							run: (De) => De.groupService.focusHover(),
						}),
						be({
							id: L.TerminalCommandId.Clear,
							title: (0, h.localize2)(10039, "Clear"),
							precondition: ye.terminalAvailable,
							keybinding: [
								{
									primary: 0,
									mac: { primary: E.KeyMod.CtrlCmd | E.KeyCode.KeyK },
									weight: f.KeybindingWeight.WorkbenchContrib + 1,
									when: o.$Kj.or(
										o.$Kj.and(D.TerminalContextKeys.focus, c.$YK.negate()),
										o.$Kj.and(
											c.$YK,
											re.$NLb,
											re.$SLb.isEqualTo(pe.AccessibleViewProviderId.Terminal),
										),
									),
								},
							],
							run: (De) => De.clearBuffer(),
						}),
						me({
							id: L.TerminalCommandId.SelectDefaultProfile,
							title: (0, h.localize2)(10040, "Select Default Profile"),
							run: (De) => De.service.showProfileQuickPick("setDefault"),
						}),
						me({
							id: L.TerminalCommandId.ConfigureTerminalSettings,
							title: (0, h.localize2)(10041, "Configure Terminal Settings"),
							precondition: ye.terminalAvailable,
							run: (De, Re) =>
								Re.get(B.$7Z).openSettings({
									jsonEditor: !1,
									query: "@feature:terminal",
								}),
						}),
						be({
							id: L.TerminalCommandId.SetDimensions,
							title: (0, h.localize2)(10042, "Set Fixed Dimensions"),
							precondition: ye.terminalAvailable_and_opened,
							run: (De) => De.setFixedDimensions(),
						}),
						ge({
							id: L.TerminalCommandId.SizeToContentWidth,
							title: N.$hUc.toggleSizeToContentWidth,
							precondition: ye.terminalAvailable_and_opened,
							keybinding: {
								primary: E.KeyMod.Alt | E.KeyCode.KeyZ,
								weight: f.KeybindingWeight.WorkbenchContrib,
								when: D.TerminalContextKeys.focus,
							},
							run: (De) => De.toggleSizeToContentWidth(),
						}),
						me({
							id: L.TerminalCommandId.ClearPreviousSessionHistory,
							title: (0, h.localize2)(10043, "Clear Previous Session History"),
							precondition: ye.terminalAvailable,
							run: async (De, Re) => {
								(0, V.$kUc)(Re).clear(), (0, V.$nUc)();
							},
						}),
						t.$Yfb.clipboard.writeText &&
							(Ce({
								id: L.TerminalCommandId.CopySelection,
								title: (0, h.localize2)(10044, "Copy Selection"),
								precondition: o.$Kj.or(
									D.TerminalContextKeys.textSelectedInFocused,
									o.$Kj.and(
										ye.terminalAvailable,
										D.TerminalContextKeys.textSelected,
									),
								),
								keybinding: [
									{
										primary: E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyC,
										mac: { primary: E.KeyMod.CtrlCmd | E.KeyCode.KeyC },
										weight: f.KeybindingWeight.WorkbenchContrib,
										when: o.$Kj.or(
											o.$Kj.and(
												D.TerminalContextKeys.textSelected,
												D.TerminalContextKeys.focus,
											),
											D.TerminalContextKeys.textSelectedInFocused,
										),
									},
								],
								run: (De) => De.copySelection(),
							}),
							Ce({
								id: L.TerminalCommandId.CopyAndClearSelection,
								title: (0, h.localize2)(10045, "Copy and Clear Selection"),
								precondition: o.$Kj.or(
									D.TerminalContextKeys.textSelectedInFocused,
									o.$Kj.and(
										ye.terminalAvailable,
										D.TerminalContextKeys.textSelected,
									),
								),
								keybinding: [
									{
										win: { primary: E.KeyMod.CtrlCmd | E.KeyCode.KeyC },
										weight: f.KeybindingWeight.WorkbenchContrib,
										when: o.$Kj.or(
											o.$Kj.and(
												D.TerminalContextKeys.textSelected,
												D.TerminalContextKeys.focus,
											),
											D.TerminalContextKeys.textSelectedInFocused,
										),
									},
								],
								run: async (De) => {
									await De.copySelection(), De.clearSelection();
								},
							}),
							Ce({
								id: L.TerminalCommandId.CopySelectionAsHtml,
								title: (0, h.localize2)(10046, "Copy Selection as HTML"),
								f1: !0,
								category: $e,
								precondition: o.$Kj.or(
									D.TerminalContextKeys.textSelectedInFocused,
									o.$Kj.and(
										ye.terminalAvailable,
										D.TerminalContextKeys.textSelected,
									),
								),
								run: (De) => De.copySelection(!0),
							})),
						t.$Yfb.clipboard.readText &&
							be({
								id: L.TerminalCommandId.Paste,
								title: (0, h.localize2)(10047, "Paste into Active Terminal"),
								precondition: ye.terminalAvailable,
								keybinding: [
									{
										primary: E.KeyMod.CtrlCmd | E.KeyCode.KeyV,
										win: {
											primary: E.KeyMod.CtrlCmd | E.KeyCode.KeyV,
											secondary: [
												E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyV,
											],
										},
										linux: {
											primary:
												E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyV,
										},
										weight: f.KeybindingWeight.WorkbenchContrib,
										when: D.TerminalContextKeys.focus,
									},
								],
								run: (De) => De.paste(),
							}),
						t.$Yfb.clipboard.readText &&
							d.$n &&
							be({
								id: L.TerminalCommandId.PasteSelection,
								title: (0, h.localize2)(
									10048,
									"Paste Selection into Active Terminal",
								),
								precondition: ye.terminalAvailable,
								keybinding: [
									{
										linux: { primary: E.KeyMod.Shift | E.KeyCode.Insert },
										weight: f.KeybindingWeight.WorkbenchContrib,
										when: D.TerminalContextKeys.focus,
									},
								],
								run: (De) => De.pasteSelection(),
							}),
						me({
							id: L.TerminalCommandId.SwitchTerminal,
							title: (0, h.localize2)(10049, "Switch Terminal"),
							precondition: ye.terminalAvailable,
							run: async (De, Re, je) => {
								const Ve = Ae(je);
								if (!Ve) return;
								if (Ve === e.$AUc) {
									De.service.refreshActiveGroup();
									return;
								}
								if (Ve === e.$BUc) {
									Re.get(p.$gj).updateValue(
										v.TerminalSettingId.TabsEnabled,
										!0,
									);
									return;
								}
								const et = /^([0-9]+): /.exec(Ve);
								if (et)
									return (
										De.groupService.setActiveGroupByIndex(Number(et[1]) - 1),
										De.groupService.showPanel(!0)
									);
								const rt = De.profileService.availableProfiles,
									ft = Ve.substring(4);
								if (rt) {
									const bt = rt.find((nt) => nt.profileName === ft);
									if (bt) {
										const nt = await De.service.createTerminal({ config: bt });
										De.service.setActiveInstance(nt);
									} else console.warn(`No profile with name "${ft}"`);
								} else console.warn(`Unmatched terminal item: "${Ve}"`);
							},
						}),
						be({
							id: L.TerminalCommandId.AddTooltip,
							title: (0, h.localize)(9985, null),
							precondition: ye.terminalAvailable,
							f1: !1,
							run: (De, Re, je, Ve) => {
								if (
									typeof Ve == "object" &&
									Ve !== null &&
									"tooltipInfo" in Ve
								) {
									const { tooltipInfo: Ze } = Ve;
									De.showTooltipHint(Ze);
								}
							},
						});
				}
				function Oe(Me, De) {
					const Re = Me.get(P.$iIb),
						je = [],
						Ve = ve(De);
					if (Ve && Ve.length > 0) {
						for (const Ze of Ve) {
							const et = Re.getInstanceFromId(Ze.instanceId);
							et && je.push(et);
						}
						if (je.length > 0) return je;
					}
				}
				function xe(Me, De, Re) {
					const je = Me.get(s.$fMb),
						Ve = Me.get(P.$iIb),
						Ze = Me.get(P.$lIb),
						et = [],
						rt = je.lastFocusedList,
						ft = rt?.getSelection();
					if (Ze.lastAccessedMenu === "inline-tab" && !ft?.length)
						return Ze.activeInstance ? [Ze.activeInstance] : void 0;
					if (!rt || !ft) return;
					const bt = rt.getFocus();
					if (bt.length === 1 && !ft.includes(bt[0]))
						return et.push(Ve.getInstanceFromIndex(bt[0])), et;
					for (const nt of ft) et.push(Ve.getInstanceFromIndex(nt));
					return et.filter((nt) => !!nt);
				}
				function He(Me) {
					return !Me || Me.trim().length === 0
						? {
								content: (0, h.localize)(9986, null),
								severity: l.Severity.Info,
							}
						: null;
				}
				function Ke(Me) {
					return (0, m.$ng)(Me) && "profileName" in Me
						? { config: Me, location: Me.location }
						: Me;
				}
				let Je;
				function Te(Me) {
					const De = (0, M.$4J)(Me);
					return (
						Je?.dispose(),
						(Je = (0, n.$4X)(
							class extends n.$3X {
								constructor() {
									super({
										id: L.TerminalCommandId.NewWithProfile,
										title: (0, h.localize2)(
											10050,
											"Create New Terminal (With Profile)",
										),
										f1: !0,
										category: $e,
										precondition: o.$Kj.or(
											D.TerminalContextKeys.processSupported,
											D.TerminalContextKeys.webExtensionContributedProfile,
										),
										metadata: {
											description: L.TerminalCommandId.NewWithProfile,
											args: [
												{
													name: "args",
													schema: {
														type: "object",
														required: ["profileName"],
														properties: {
															profileName: {
																description: (0, h.localize)(9987, null),
																type: "string",
																enum: De.values,
																markdownEnumDescriptions:
																	De.markdownDescriptions,
															},
															location: {
																description: (0, h.localize)(9988, null),
																type: "string",
																enum: ["view", "editor"],
																enumDescriptions: [
																	(0, h.localize)(9989, null),
																	(0, h.localize)(9990, null),
																],
															},
														},
													},
												},
											],
										},
									});
								}
								async run(Re, je, Ve) {
									const Ze = Le(Re),
										et = Re.get(S.$Vi),
										rt = Re.get(g.$ek);
									let ft, bt, nt, lt;
									if ((0, m.$ng)(je) && je && "profileName" in je) {
										const gt = Ze.profileService.availableProfiles.find(
											(ht) => ht.profileName === je.profileName,
										);
										if (!gt)
											throw new Error(
												`Could not find terminal profile "${je.profileName}"`,
											);
										if (((bt = { config: gt }), "location" in je))
											switch (je.location) {
												case "editor":
													bt.location = v.TerminalLocation.Editor;
													break;
												case "view":
													bt.location = v.TerminalLocation.Panel;
													break;
											}
									} else
										(0, le.$7gb)(je) || (0, le.$9gb)(je) || (0, le.$8gb)(je)
											? ((ft = je), (bt = Ve ? { config: Ve } : void 0))
											: (bt = Ke(je));
									if (ft && (ft.altKey || ft.ctrlKey)) {
										const gt = Ze.service.activeInstance;
										if (gt) {
											await Ze.service.createTerminal({
												location: { parentTerminal: gt },
												config: bt?.config,
											});
											return;
										}
									}
									if (et.getWorkspace().folders.length > 1) {
										const gt = { placeHolder: (0, h.localize)(9991, null) },
											ht = await rt.executeCommand(I.$qRb, [gt]);
										if (!ht) return;
										lt = ht.uri;
									}
									bt
										? ((bt.cwd = lt),
											(nt = await Ze.service.createTerminal(bt)))
										: (nt = await Ze.service.showProfileQuickPick(
												"createInstance",
												lt,
											)),
										nt && (Ze.service.setActiveInstance(nt), await ke(nt, Ze));
								}
							},
						)),
						Je
					);
				}
				function Ee(Me, De) {
					return (
						Me.service.getInstanceFromResource(qe(De)) ||
						Me.service.activeInstance
					);
				}
				async function Ie(Me, De) {
					const Re = Me.get($.$DJ),
						je = Me.get(b.$3N),
						Ve = Me.get(S.$Vi),
						Ze = Me.get(G.$QO),
						et = Me.get(K.$nM),
						rt = Me.get(p.$gj),
						ft = Me.get(A.$zeb),
						bt = Ve.getWorkspace().folders;
					if (!bt.length) return;
					const nt = await Promise.all(bt.map((Nt) => Be(Nt, rt, ft))),
						lt = Se(nt);
					if (lt.length === 1) return lt[0];
					const ct = lt.map((Nt) => {
							const jt = Nt.folder.name,
								ti = Nt.isOverridden
									? (0, h.localize)(
											9992,
											null,
											je.getUriLabel(Nt.cwd, { relative: !Nt.isAbsolute }),
										)
									: je.getUriLabel((0, W.$mh)(Nt.cwd), { relative: !0 });
							return {
								label: jt,
								description: ti !== jt ? ti : void 0,
								pair: Nt,
								iconClasses: (0, X.$BDb)(
									Ze,
									et,
									Nt.cwd,
									Y.FileKind.ROOT_FOLDER,
								),
							};
						}),
						gt = {
							placeHolder: (0, h.localize)(9993, null),
							matchOnDescription: !0,
							canPickMany: !1,
						},
						ht = De || J.CancellationToken.None;
					return (await Re.pick(ct, gt, ht))?.pair;
				}
				async function Be(Me, De, Re) {
					const je = De.getValue(v.TerminalSettingId.Cwd, { resource: Me.uri });
					if (!(0, m.$lg)(je) || je.length === 0)
						return {
							folder: Me,
							cwd: Me.uri,
							isAbsolute: !1,
							isOverridden: !1,
						};
					const Ve = await Re.resolveAsync(Me, je);
					return (0, F.$nc)(Ve) || Ve.startsWith(x.$Peb.VARIABLE_LHS)
						? {
								folder: Me,
								isAbsolute: !0,
								isOverridden: !0,
								cwd: r.URI.from({ ...Me.uri, path: Ve }),
							}
						: {
								folder: Me,
								isAbsolute: !1,
								isOverridden: !0,
								cwd: r.URI.joinPath(Me.uri, Ve),
							};
				}
				function Se(Me) {
					const De = new Map();
					for (const Ve of Me) {
						const Ze = Ve.cwd.toString();
						(!De.get(Ze) || Ze === Ve.folder.uri.toString()) && De.set(Ze, Ve);
					}
					const Re = new Set(De.values());
					return Me.filter((Ve) => Re.has(Ve));
				}
				async function ke(Me, De) {
					Me.target === v.TerminalLocation.Editor
						? (await De.editorService.revealActiveEditor(),
							await Me.focusWhenReady(!0))
						: await De.groupService.showPanel(!0);
				}
				async function Ue(Me, De, Re) {
					let je = Re;
					if (((!je || !je?.rename) && (je = Ee(Me, Re)), je)) {
						const Ve = await De.get($.$DJ).input({
							value: je.title,
							prompt: (0, h.localize)(9994, null),
						});
						je.rename(Ve);
					}
				}
				function qe(Me) {
					return r.URI.isUri(Me) ? Me : void 0;
				}
				function Ae(Me) {
					return (0, m.$lg)(Me) ? Me : void 0;
				}
			},
		)
