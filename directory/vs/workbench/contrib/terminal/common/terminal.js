import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/platform.js';
import '../../../../nls.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/constants.js';
import '../../accessibility/common/accessibilityCommands.js';
import '../../terminalContrib/accessibility/common/terminal.accessibility.js';
import '../../terminalContrib/find/common/terminal.find.js';
import '../../terminalContrib/suggest/common/terminal.suggest.js';
define(
			de[145],
			he([1, 0, 12, 4, 5, 58, 417, 995, 1263, 1768]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xeb =
						e.$web =
						e.TerminalCommandId =
						e.$veb =
						e.ProcessState =
						e.$ueb =
						e.$teb =
						e.$seb =
						e.$reb =
						e.$qeb =
						e.$peb =
						e.$oeb =
						e.$neb =
						e.$meb =
						e.$leb =
						e.$keb =
						e.$jeb =
						e.$ieb =
						e.$heb =
						e.$geb =
							void 0),
					(i = mt(i)),
					(e.$geb = "terminal"),
					(e.$heb = [
						"workbench.action.terminal.toggleTerminal",
						"workbench.action.terminal.new",
						"workbench.action.togglePanel",
						"workbench.action.terminal.focus",
					]),
					(e.$ieb = "terminal.integrated"),
					(e.$jeb = 0),
					(e.$keb = -5),
					(e.$leb = t.$n ? 1.1 : 1),
					(e.$meb = 1),
					(e.$neb = 1e3),
					(e.$oeb = "normal"),
					(e.$peb = "bold"),
					(e.$qeb = [
						"normal",
						"bold",
						"100",
						"200",
						"300",
						"400",
						"500",
						"600",
						"700",
						"800",
						"900",
					]),
					(e.$reb = (0, w.$Mi)("terminalProfileResolverService")),
					(e.$seb = 633),
					(e.$teb = (0, w.$Mi)("terminalProfileService"));
				const u = (c) => typeof c.write == "function";
				e.$ueb = u;
				var a;
				(function (c) {
					(c[(c.Uninitialized = 1)] = "Uninitialized"),
						(c[(c.Launching = 2)] = "Launching"),
						(c[(c.Running = 3)] = "Running"),
						(c[(c.KilledDuringLaunch = 4)] = "KilledDuringLaunch"),
						(c[(c.KilledByUser = 5)] = "KilledByUser"),
						(c[(c.KilledByProcess = 6)] = "KilledByProcess");
				})(a || (e.ProcessState = a = {})),
					(e.$veb = "workbench.action.terminal.profile.choice");
				var h;
				(function (c) {
					(c.AddTooltip = "workbench.action.terminal.addTooltip"),
						(c.Toggle = "workbench.action.terminal.toggleTerminal"),
						(c.Kill = "workbench.action.terminal.kill"),
						(c.KillViewOrEditor = "workbench.action.terminal.killViewOrEditor"),
						(c.KillEditor = "workbench.action.terminal.killEditor"),
						(c.KillActiveTab = "workbench.action.terminal.killActiveTab"),
						(c.KillAll = "workbench.action.terminal.killAll"),
						(c.QuickKill = "workbench.action.terminal.quickKill"),
						(c.ConfigureTerminalSettings =
							"workbench.action.terminal.openSettings"),
						(c.ShellIntegrationLearnMore =
							"workbench.action.terminal.learnMore"),
						(c.RunRecentCommand = "workbench.action.terminal.runRecentCommand"),
						(c.CopyLastCommand = "workbench.action.terminal.copyLastCommand"),
						(c.CopyLastCommandOutput =
							"workbench.action.terminal.copyLastCommandOutput"),
						(c.CopyLastCommandAndLastCommandOutput =
							"workbench.action.terminal.copyLastCommandAndLastCommandOutput"),
						(c.GoToRecentDirectory =
							"workbench.action.terminal.goToRecentDirectory"),
						(c.CopyAndClearSelection =
							"workbench.action.terminal.copyAndClearSelection"),
						(c.CopySelection = "workbench.action.terminal.copySelection"),
						(c.CopySelectionAsHtml =
							"workbench.action.terminal.copySelectionAsHtml"),
						(c.SelectAll = "workbench.action.terminal.selectAll"),
						(c.DeleteWordLeft = "workbench.action.terminal.deleteWordLeft"),
						(c.DeleteWordRight = "workbench.action.terminal.deleteWordRight"),
						(c.DeleteToLineStart =
							"workbench.action.terminal.deleteToLineStart"),
						(c.MoveToLineStart = "workbench.action.terminal.moveToLineStart"),
						(c.MoveToLineEnd = "workbench.action.terminal.moveToLineEnd"),
						(c.New = "workbench.action.terminal.new"),
						(c.NewWithCwd = "workbench.action.terminal.newWithCwd"),
						(c.NewLocal = "workbench.action.terminal.newLocal"),
						(c.NewInActiveWorkspace =
							"workbench.action.terminal.newInActiveWorkspace"),
						(c.NewWithProfile = "workbench.action.terminal.newWithProfile"),
						(c.Split = "workbench.action.terminal.split"),
						(c.SplitActiveTab = "workbench.action.terminal.splitActiveTab"),
						(c.SplitInActiveWorkspace =
							"workbench.action.terminal.splitInActiveWorkspace"),
						(c.Unsplit = "workbench.action.terminal.unsplit"),
						(c.JoinActiveTab = "workbench.action.terminal.joinActiveTab"),
						(c.Join = "workbench.action.terminal.join"),
						(c.Relaunch = "workbench.action.terminal.relaunch"),
						(c.FocusPreviousPane =
							"workbench.action.terminal.focusPreviousPane"),
						(c.CreateTerminalEditor = "workbench.action.createTerminalEditor"),
						(c.CreateTerminalEditorSameGroup =
							"workbench.action.createTerminalEditorSameGroup"),
						(c.CreateTerminalEditorSide =
							"workbench.action.createTerminalEditorSide"),
						(c.FocusTabs = "workbench.action.terminal.focusTabs"),
						(c.FocusNextPane = "workbench.action.terminal.focusNextPane"),
						(c.ResizePaneLeft = "workbench.action.terminal.resizePaneLeft"),
						(c.ResizePaneRight = "workbench.action.terminal.resizePaneRight"),
						(c.ResizePaneUp = "workbench.action.terminal.resizePaneUp"),
						(c.SizeToContentWidth =
							"workbench.action.terminal.sizeToContentWidth"),
						(c.SizeToContentWidthActiveTab =
							"workbench.action.terminal.sizeToContentWidthActiveTab"),
						(c.ResizePaneDown = "workbench.action.terminal.resizePaneDown"),
						(c.Focus = "workbench.action.terminal.focus"),
						(c.FocusNext = "workbench.action.terminal.focusNext"),
						(c.FocusPrevious = "workbench.action.terminal.focusPrevious"),
						(c.Paste = "workbench.action.terminal.paste"),
						(c.PasteSelection = "workbench.action.terminal.pasteSelection"),
						(c.SelectDefaultProfile =
							"workbench.action.terminal.selectDefaultShell"),
						(c.RunSelectedText = "workbench.action.terminal.runSelectedText"),
						(c.RunActiveFile = "workbench.action.terminal.runActiveFile"),
						(c.SwitchTerminal = "workbench.action.terminal.switchTerminal"),
						(c.ScrollDownLine = "workbench.action.terminal.scrollDown"),
						(c.ScrollDownPage = "workbench.action.terminal.scrollDownPage"),
						(c.ScrollToBottom = "workbench.action.terminal.scrollToBottom"),
						(c.ScrollUpLine = "workbench.action.terminal.scrollUp"),
						(c.ScrollUpPage = "workbench.action.terminal.scrollUpPage"),
						(c.ScrollToTop = "workbench.action.terminal.scrollToTop"),
						(c.Clear = "workbench.action.terminal.clear"),
						(c.ClearSelection = "workbench.action.terminal.clearSelection"),
						(c.ChangeIcon = "workbench.action.terminal.changeIcon"),
						(c.ChangeIconActiveTab =
							"workbench.action.terminal.changeIconActiveTab"),
						(c.ChangeColor = "workbench.action.terminal.changeColor"),
						(c.ChangeColorActiveTab =
							"workbench.action.terminal.changeColorActiveTab"),
						(c.Rename = "workbench.action.terminal.rename"),
						(c.RenameActiveTab = "workbench.action.terminal.renameActiveTab"),
						(c.RenameWithArgs = "workbench.action.terminal.renameWithArg"),
						(c.QuickOpenTerm = "workbench.action.quickOpenTerm"),
						(c.ScrollToPreviousCommand =
							"workbench.action.terminal.scrollToPreviousCommand"),
						(c.ScrollToNextCommand =
							"workbench.action.terminal.scrollToNextCommand"),
						(c.SelectToPreviousCommand =
							"workbench.action.terminal.selectToPreviousCommand"),
						(c.SelectToNextCommand =
							"workbench.action.terminal.selectToNextCommand"),
						(c.SelectToPreviousLine =
							"workbench.action.terminal.selectToPreviousLine"),
						(c.SelectToNextLine = "workbench.action.terminal.selectToNextLine"),
						(c.SendSequence = "workbench.action.terminal.sendSequence"),
						(c.AttachToSession = "workbench.action.terminal.attachToSession"),
						(c.DetachSession = "workbench.action.terminal.detachSession"),
						(c.MoveToEditor = "workbench.action.terminal.moveToEditor"),
						(c.MoveToTerminalPanel =
							"workbench.action.terminal.moveToTerminalPanel"),
						(c.MoveIntoNewWindow =
							"workbench.action.terminal.moveIntoNewWindow"),
						(c.SetDimensions = "workbench.action.terminal.setDimensions"),
						(c.ClearPreviousSessionHistory =
							"workbench.action.terminal.clearPreviousSessionHistory"),
						(c.FocusHover = "workbench.action.terminal.focusHover"),
						(c.ShowEnvironmentContributions =
							"workbench.action.terminal.showEnvironmentContributions"),
						(c.StartVoice = "workbench.action.terminal.startVoice"),
						(c.StopVoice = "workbench.action.terminal.stopVoice");
				})(h || (e.TerminalCommandId = h = {})),
					(e.$web = [
						h.ClearSelection,
						h.Clear,
						h.CopyAndClearSelection,
						h.CopySelection,
						h.CopySelectionAsHtml,
						h.CopyLastCommand,
						h.CopyLastCommandOutput,
						h.CopyLastCommandAndLastCommandOutput,
						h.DeleteToLineStart,
						h.DeleteWordLeft,
						h.DeleteWordRight,
						h.GoToRecentDirectory,
						h.FocusNextPane,
						h.FocusNext,
						h.FocusPreviousPane,
						h.FocusPrevious,
						h.Focus,
						h.SizeToContentWidth,
						h.Kill,
						h.KillEditor,
						h.MoveToEditor,
						h.MoveToLineEnd,
						h.MoveToLineStart,
						h.MoveToTerminalPanel,
						h.NewInActiveWorkspace,
						h.New,
						h.Paste,
						h.PasteSelection,
						h.ResizePaneDown,
						h.ResizePaneLeft,
						h.ResizePaneRight,
						h.ResizePaneUp,
						h.RunActiveFile,
						h.RunSelectedText,
						h.RunRecentCommand,
						h.ScrollDownLine,
						h.ScrollDownPage,
						h.ScrollToBottom,
						h.ScrollToNextCommand,
						h.ScrollToPreviousCommand,
						h.ScrollToTop,
						h.ScrollUpLine,
						h.ScrollUpPage,
						h.SendSequence,
						h.SelectAll,
						h.SelectToNextCommand,
						h.SelectToNextLine,
						h.SelectToPreviousCommand,
						h.SelectToPreviousLine,
						h.SplitInActiveWorkspace,
						h.Split,
						h.Toggle,
						h.FocusHover,
						E.$_V,
						E.$aW,
						E.$bW,
						E.$dW,
						E.$eW,
						C.AccessibilityCommandId.OpenAccessibilityHelp,
						"editor.action.toggleTabFocusMode",
						"notifications.hideList",
						"notifications.hideToasts",
						"workbench.action.closeQuickOpen",
						"workbench.action.quickOpen",
						"workbench.action.quickOpenPreviousEditor",
						"workbench.action.showCommands",
						"workbench.action.tasks.build",
						"workbench.action.tasks.restartTask",
						"workbench.action.tasks.runTask",
						"workbench.action.tasks.reRunTask",
						"workbench.action.tasks.showLog",
						"workbench.action.tasks.showTasks",
						"workbench.action.tasks.terminate",
						"workbench.action.tasks.test",
						"workbench.action.toggleFullScreen",
						"workbench.action.terminal.focusAtIndex1",
						"workbench.action.terminal.focusAtIndex2",
						"workbench.action.terminal.focusAtIndex3",
						"workbench.action.terminal.focusAtIndex4",
						"workbench.action.terminal.focusAtIndex5",
						"workbench.action.terminal.focusAtIndex6",
						"workbench.action.terminal.focusAtIndex7",
						"workbench.action.terminal.focusAtIndex8",
						"workbench.action.terminal.focusAtIndex9",
						"workbench.action.focusSecondEditorGroup",
						"workbench.action.focusThirdEditorGroup",
						"workbench.action.focusFourthEditorGroup",
						"workbench.action.focusFifthEditorGroup",
						"workbench.action.focusSixthEditorGroup",
						"workbench.action.focusSeventhEditorGroup",
						"workbench.action.focusEighthEditorGroup",
						"workbench.action.focusNextPart",
						"workbench.action.focusPreviousPart",
						"workbench.action.nextPanelView",
						"workbench.action.previousPanelView",
						"workbench.action.nextSideBarView",
						"workbench.action.previousSideBarView",
						"workbench.action.debug.start",
						"workbench.action.debug.stop",
						"workbench.action.debug.run",
						"workbench.action.debug.restart",
						"workbench.action.debug.continue",
						"workbench.action.debug.pause",
						"workbench.action.debug.stepInto",
						"workbench.action.debug.stepOut",
						"workbench.action.debug.stepOver",
						"workbench.action.nextEditor",
						"workbench.action.previousEditor",
						"workbench.action.nextEditorInGroup",
						"workbench.action.previousEditorInGroup",
						"workbench.action.openNextRecentlyUsedEditor",
						"workbench.action.openPreviousRecentlyUsedEditor",
						"workbench.action.openNextRecentlyUsedEditorInGroup",
						"workbench.action.openPreviousRecentlyUsedEditorInGroup",
						"workbench.action.quickOpenPreviousRecentlyUsedEditor",
						"workbench.action.quickOpenLeastRecentlyUsedEditor",
						"workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup",
						"workbench.action.quickOpenLeastRecentlyUsedEditorInGroup",
						"workbench.action.focusActiveEditorGroup",
						"workbench.action.focusFirstEditorGroup",
						"workbench.action.focusLastEditorGroup",
						"workbench.action.firstEditorInGroup",
						"workbench.action.lastEditorInGroup",
						"workbench.action.navigateUp",
						"workbench.action.navigateDown",
						"workbench.action.navigateRight",
						"workbench.action.navigateLeft",
						"workbench.action.togglePanel",
						"workbench.action.quickOpenView",
						"workbench.action.toggleMaximizedPanel",
						"notification.acceptPrimaryAction",
						"runCommands",
						E.$dX,
						"workbench.action.terminal.chat.start",
						"workbench.action.terminal.chat.close",
						"workbench.action.terminal.chat.discard",
						"workbench.action.terminal.chat.makeRequest",
						"workbench.action.terminal.chat.cancel",
						"workbench.action.terminal.chat.feedbackHelpful",
						"workbench.action.terminal.chat.feedbackUnhelpful",
						"workbench.action.terminal.chat.feedbackReportIssue",
						"workbench.action.terminal.chat.runCommand",
						"workbench.action.terminal.chat.insertCommand",
						"workbench.action.terminal.chat.viewInChat",
						...d.$deb,
						...m.$eeb,
						...r.$feb,
					]),
					(e.$xeb = {
						extensionPoint: "terminal",
						defaultExtensionKind: ["workspace"],
						activationEventsGenerator: (c, n) => {
							for (const g of c)
								for (const p of g.profiles ?? [])
									n.push(`onTerminalProfile:${p.id}`);
						},
						jsonSchema: {
							description: i.localize(10196, null),
							type: "object",
							properties: {
								profiles: {
									type: "array",
									description: i.localize(10197, null),
									items: {
										type: "object",
										required: ["id", "title"],
										defaultSnippets: [{ body: { id: "$1", title: "$2" } }],
										properties: {
											id: {
												description: i.localize(10198, null),
												type: "string",
											},
											title: {
												description: i.localize(10199, null),
												type: "string",
											},
											icon: {
												description: i.localize(10200, null),
												anyOf: [
													{ type: "string" },
													{
														type: "object",
														properties: {
															light: {
																description: i.localize(10201, null),
																type: "string",
															},
															dark: {
																description: i.localize(10202, null),
																type: "string",
															},
														},
													},
												],
											},
										},
									},
								},
							},
						},
					});
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	