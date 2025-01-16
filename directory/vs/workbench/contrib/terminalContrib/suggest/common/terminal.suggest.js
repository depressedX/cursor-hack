define(de[1768], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$feb = e.TerminalSuggestCommandId = void 0);
			var t;
			(function (i) {
				(i.SelectPrevSuggestion =
					"workbench.action.terminal.selectPrevSuggestion"),
					(i.SelectPrevPageSuggestion =
						"workbench.action.terminal.selectPrevPageSuggestion"),
					(i.SelectNextSuggestion =
						"workbench.action.terminal.selectNextSuggestion"),
					(i.SelectNextPageSuggestion =
						"workbench.action.terminal.selectNextPageSuggestion"),
					(i.AcceptSelectedSuggestion =
						"workbench.action.terminal.acceptSelectedSuggestion"),
					(i.AcceptSelectedSuggestionEnter =
						"workbench.action.terminal.acceptSelectedSuggestionEnter"),
					(i.HideSuggestWidget = "workbench.action.terminal.hideSuggestWidget"),
					(i.ClearSuggestCache = "workbench.action.terminal.clearSuggestCache");
			})(t || (e.TerminalSuggestCommandId = t = {})),
				(e.$feb = [
					t.SelectPrevSuggestion,
					t.SelectPrevPageSuggestion,
					t.SelectNextSuggestion,
					t.SelectNextPageSuggestion,
					t.AcceptSelectedSuggestion,
					t.AcceptSelectedSuggestionEnter,
					t.HideSuggestWidget,
					t.ClearSuggestCache,
				]);
		}),
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
	define(
		de[3166],
		he([1, 0, 3, 1610, 31, 5, 145]),
		function (ce, e, t, i, w, E, C) {
			"use strict";
			var d;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Mlc = void 0),
				(i = xi(i));
			const m = !1,
				r = !1;
			let u = class extends t.$1c {
				static {
					d = this;
				}
				static {
					this.ID = "editor.contrib.tooltipUiController";
				}
				constructor(h, c, n) {
					super(),
						(this.b = c),
						(this.c = n),
						(this.a = h),
						m &&
							this.show(
								"editor",
								"editor.cmdk",
								"Inline edits (\u2318 + K)",
								"Select code and use \u2318 + K to edit it in-place instead of using chat",
							),
						r &&
							this.show(
								"terminal",
								"terminal.cmdk",
								"Inline edits (\u2318 + K)",
								"Select code and use \u2318 + K to edit it in-place instead of using chat",
							);
				}
				static get(h) {
					return h.getContribution(d.ID);
				}
				show(h, c, n, g) {
					h === "terminal"
						? this.c.executeCommand(C.TerminalCommandId.AddTooltip, {
								tooltipInfo: { header: n, subheader: g, name: c },
							})
						: h === "editor" &&
							this.D(
								this.b.createInstance(i.default, this.a, {
									header: n,
									subheader: g,
									name: c,
								}),
							);
				}
			};
			(e.$Mlc = u), (e.$Mlc = u = d = Ne([j(1, E.$Li), j(2, w.$ek)], u));
		},
	),
		define(
			de[3167],
			he([1, 0, 46, 3166, 58, 11, 65]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, E.$4X)(
						class extends E.$3X {
							constructor() {
								super({
									id: w.$NV,
									title: {
										value: "Cursor: Show Tooltip",
										original: "Cursor: Show Tooltip",
									},
									f1: !1,
								});
							}
							async run(m, r) {
								const { location: u, name: a, header: h, subheader: c } = r,
									g = m.get(C.$dtb).getActiveCodeEditor();
								g && i.$Mlc.get(g)?.show(u, a, h, c);
							}
						},
					),
					(0, t.$qtb)(
						i.$Mlc.ID,
						i.$Mlc,
						t.EditorContributionInstantiation.Eventually,
					);
			},
		),
		define(
			de[1769],
			he([1, 0, 7, 15, 29, 3, 649, 5, 675, 378, 1760, 145]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sLc = e.$rLc = void 0),
					(t = mt(t));
				let h = class extends E.$1c {
					get xterm() {
						return this.c;
					}
					constructor(g, p, o) {
						super(),
							(this.c = g),
							(this.a = this.D(new u.$pLc())),
							(this.capabilities = new m.$KHb()),
							(this.b = new Map()),
							this.D(g);
						const f = r.TerminalExtensionsRegistry.getTerminalContributions();
						for (const b of f) {
							if (this.b.has(b.id)) {
								(0, w.$4)(
									new Error(
										`Cannot have two terminal contributions with the same id ${b.id}`,
									),
								);
								continue;
							}
							if (b.canRunInDetachedTerminals === !1) continue;
							let s;
							try {
								(s = o.createInstance(b.ctor, this, p.processInfo, this.a)),
									this.b.set(b.id, s),
									this.D(s);
							} catch (l) {
								(0, w.$4)(l);
							}
						}
						this.D(new i.$Jh(C.$me)).trigger(() => {
							for (const b of this.b.values()) b.xtermReady?.(this.c);
						});
					}
					get selection() {
						return this.c && this.hasSelection()
							? this.c.raw.getSelection()
							: void 0;
					}
					get selectionRange() {
						return this.c.selectionRange;
					}
					hasSelection() {
						return this.c.hasSelection();
					}
					clearSelection() {
						this.c.clearSelection();
					}
					focus(g) {
						(g || !t.$Ogb().getSelection()?.toString()) && this.xterm.focus();
					}
					attachToElement(g, p) {
						this.domElement = g;
						const o = this.c.attachToElement(g, p);
						this.a.attachToElement(o);
					}
					forceScrollbarVisibility() {
						this.domElement?.classList.add("force-scrollbar");
					}
					resetScrollbarVisibility() {
						this.domElement?.classList.remove("force-scrollbar");
					}
					getContribution(g) {
						return this.b.get(g);
					}
				};
				(e.$rLc = h), (e.$rLc = h = Ne([j(2, d.$Li)], h));
				class c {
					constructor(g) {
						(this.processState = a.ProcessState.Running),
							(this.ptyProcessReady = Promise.resolve()),
							(this.initialCwd = ""),
							(this.shouldPersist = !1),
							(this.hasWrittenData = !1),
							(this.hasChildProcesses = !1),
							(this.capabilities = new m.$KHb()),
							(this.shellIntegrationNonce = ""),
							Object.assign(this, g);
					}
				}
				e.$sLc = c;
			},
		),
		define(
			de[3168],
			he([1, 0, 6, 3, 38, 10, 107, 145]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$OUc = e.$NUc = void 0);
				let m = class extends i.$1c {
					get config() {
						return this.b;
					}
					get onConfigChanged() {
						return this.f.event;
					}
					constructor(c) {
						super(),
							(this.g = c),
							(this.f = new t.$re()),
							(this.a = this.D(new u(this, this.g))),
							this.D(
								t.Event.runAndSubscribe(
									this.g.onDidChangeConfiguration,
									(n) => {
										(!n || n.affectsConfiguration(d.$ieb)) && this.h();
									},
								),
							);
					}
					setPanelContainer(c) {
						return this.a.setPanelContainer(c);
					}
					configFontIsMonospace() {
						return this.a.configFontIsMonospace();
					}
					getFont(c, n, g) {
						return this.a.getFont(c, n, g);
					}
					h() {
						const c = { ...this.g.getValue(d.$ieb) };
						(c.fontWeight = this.j(c.fontWeight, d.$oeb)),
							(c.fontWeightBold = this.j(c.fontWeightBold, d.$peb)),
							(this.b = c),
							this.f.fire();
					}
					j(c, n) {
						return c === "normal" || c === "bold" ? c : a(c, d.$meb, d.$neb, n);
					}
				};
				(e.$NUc = m), (e.$NUc = m = Ne([j(0, E.$gj)], m));
				var r;
				(function (h) {
					(h[(h.MinimumFontSize = 6)] = "MinimumFontSize"),
						(h[(h.MaximumFontSize = 100)] = "MaximumFontSize");
				})(r || (r = {}));
				class u extends i.$1c {
					constructor(c, n) {
						super(),
							(this.f = c),
							(this.g = n),
							(this.linuxDistro = C.LinuxDistro.Unknown),
							this.D((0, i.$Yc)(() => this.b?.remove()));
					}
					setPanelContainer(c) {
						this.a = c;
					}
					configFontIsMonospace() {
						const n =
								this.f.config.fontFamily ||
								this.g.getValue("editor").fontFamily ||
								w.EDITOR_FONT_DEFAULTS.fontFamily,
							g = this.j("i", n, 15),
							p = this.j("w", n, 15);
						return !g || !p || !g.width || !p.width ? !0 : g.width === p.width;
					}
					getFont(c, n, g) {
						const p = this.g.getValue("editor");
						let o =
								this.f.config.fontFamily ||
								p.fontFamily ||
								w.EDITOR_FONT_DEFAULTS.fontFamily ||
								"monospace",
							f = a(
								this.f.config.fontSize,
								r.MinimumFontSize,
								r.MaximumFontSize,
								w.EDITOR_FONT_DEFAULTS.fontSize,
							);
						this.f.config.fontFamily ||
							(this.linuxDistro === C.LinuxDistro.Fedora &&
								(o = "'DejaVu Sans Mono'"),
							this.linuxDistro === C.LinuxDistro.Ubuntu &&
								((o = "'Ubuntu Mono'"),
								(f = a(
									f + 2,
									r.MinimumFontSize,
									r.MaximumFontSize,
									w.EDITOR_FONT_DEFAULTS.fontSize,
								)))),
							(o += ", monospace");
						const b = this.f.config.letterSpacing
								? Math.max(Math.floor(this.f.config.letterSpacing), d.$keb)
								: d.$jeb,
							s = this.f.config.lineHeight
								? Math.max(this.f.config.lineHeight, 1)
								: d.$leb;
						if (g)
							return {
								fontFamily: o,
								fontSize: f,
								letterSpacing: b,
								lineHeight: s,
							};
						if (n?._renderService?._renderer.value) {
							const l = n._renderService.dimensions.css.cell;
							if (l?.width && l?.height)
								return {
									fontFamily: o,
									fontSize: f,
									letterSpacing: b,
									lineHeight: s,
									charHeight: l.height / s,
									charWidth: l.width - Math.round(b) / c.devicePixelRatio,
								};
						}
						return this.m(c, o, f, b, s);
					}
					h() {
						if (!this.a)
							throw new Error(
								"Cannot measure element when terminal is not attached",
							);
						return (
							(!this.b || !this.b.parentElement) &&
								((this.b = document.createElement("div")),
								this.a.appendChild(this.b)),
							this.b
						);
					}
					j(c, n, g) {
						let p;
						try {
							p = this.h();
						} catch {
							return;
						}
						const o = p.style;
						(o.display = "inline-block"),
							(o.fontFamily = n),
							(o.fontSize = g + "px"),
							(o.lineHeight = "normal"),
							(p.innerText = c);
						const f = p.getBoundingClientRect();
						return (o.display = "none"), f;
					}
					m(c, n, g, p, o) {
						const f = this.j("X", n, g);
						if (this.c && (!f || !f.width || !f.height)) return this.c;
						if (
							((this.c = {
								fontFamily: n,
								fontSize: g,
								letterSpacing: p,
								lineHeight: o,
								charWidth: 0,
								charHeight: 0,
							}),
							f && f.width && f.height)
						)
							if (
								((this.c.charHeight = Math.ceil(f.height)),
								this.f.config.gpuAcceleration === "off")
							)
								this.c.charWidth = f.width;
							else {
								const l =
									(Math.floor(f.width * c.devicePixelRatio) + Math.round(p)) /
									c.devicePixelRatio;
								this.c.charWidth = l - Math.round(p) / c.devicePixelRatio;
							}
						return this.c;
					}
				}
				e.$OUc = u;
				function a(h, c, n, g) {
					let p = parseInt(h, 10);
					return isNaN(p)
						? g
						: (typeof c == "number" && (p = Math.max(c, p)),
							typeof n == "number" && (p = Math.min(n, p)),
							p);
				}
			},
		),
		define(
			de[514],
			he([1, 0, 136, 9, 79, 212, 26, 145, 512, 7, 3]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Onc = a),
					(e.$Pnc = h),
					(e.$Qnc = c),
					(e.$Rnc = n),
					(e.$Snc = g),
					(e.$Tnc = p);
				function a(o) {
					let f;
					if (
						(typeof o == "string"
							? (f = o)
							: o.color
								? (f = o.color.replace(/\./g, "_"))
								: C.ThemeIcon.isThemeIcon(o.icon) &&
									o.icon.color &&
									(f = o.icon.color.id.replace(/\./g, "_")),
						f)
					)
						return `terminal-icon-${f.replace(/\./g, "_")}`;
				}
				function h(o) {
					const f = [];
					for (const b in m.$EHb)
						o.getColor(b) && !b.toLowerCase().includes("bright") && f.push(b);
					return f;
				}
				function c(o) {
					const f = new u.$Zc(),
						b = h(o),
						s = (0, r.$Rgb)(void 0, void 0, f);
					let l = "";
					for (const y of b) {
						const $ = a(y),
							v = o.getColor(y);
						v &&
							(l += `.monaco-workbench .${$} .codicon:first-child:not(.codicon-split-horizontal):not(.codicon-trashcan):not(.file-icon){ color: ${v} !important; }`);
					}
					return (s.textContent = l), f;
				}
				function n(o, f) {
					const b = h(o);
					let s = "";
					for (const l of b) {
						const y = a(l),
							$ = o.getColor(l);
						$ &&
							(f
								? (s += `.monaco-workbench .show-file-icons .predefined-file-icon.terminal-tab.${y}::before,.monaco-workbench .show-file-icons .file-icon.terminal-tab.${y}::before{ color: ${$} !important; }`)
								: (s += `.monaco-workbench .${y} .codicon:first-child:not(.codicon-split-horizontal):not(.codicon-trashcan):not(.file-icon){ color: ${$} !important; }`));
					}
					return s;
				}
				function g(o, f, b) {
					const s = o.icon;
					if (!s) return;
					const l = [];
					let y;
					if (b) {
						if (
							typeof s == "string" &&
							(s.startsWith("$(") || (0, w.$_O)().getIcon(s))
						)
							return l;
						typeof s == "string" && (y = i.URI.parse(s));
					}
					if (
						(s instanceof i.URI
							? (y = s)
							: s instanceof Object &&
								"light" in s &&
								"dark" in s &&
								(y = f === E.ColorScheme.LIGHT ? s.light : s.dark),
						y instanceof i.URI)
					) {
						const v = `terminal-uri-icon-${(0, t.$Aj)(y.path).toString(36)}`;
						l.push(v), l.push("terminal-uri-icon");
					}
					return l;
				}
				function p(o, f) {
					return !f.icon || (f.icon instanceof Object && !("id" in f.icon))
						? o.get(d.$reb).getDefaultIcon().id
						: typeof f.icon == "string"
							? f.icon
							: f.icon.id;
				}
			},
		),
		define(
			de[3169],
			he([1, 0, 14, 10, 63, 117, 514, 689, 4, 35, 26, 145, 79, 54, 40]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jUc = void 0),
					(m = mt(m));
				let g = class {
					constructor(o, f, b, s, l, y) {
						(this.c = o),
							(this.d = f),
							(this.f = b),
							(this.g = s),
							(this.h = l),
							(this.i = y);
					}
					async showAndGetResult(o) {
						const f = await this.c.getPlatformKey(),
							b = E.TerminalSettingPrefix.Profiles + f,
							s = await this.j(o),
							l = `${E.TerminalSettingPrefix.DefaultProfile}${f}`;
						if (s) {
							if (o === "setDefault") {
								if ("command" in s.profile) return;
								if ("id" in s.profile)
									return (
										await this.f.updateValue(
											l,
											s.profile.title,
											i.ConfigurationTarget.USER,
										),
										{
											config: {
												extensionIdentifier: s.profile.extensionIdentifier,
												id: s.profile.id,
												title: s.profile.title,
												options: {
													color: s.profile.color,
													icon: s.profile.icon,
												},
											},
											keyMods: s.keyMods,
										}
									);
								if ("isAutoDetected" in s.profile) {
									const y = await this.f.getValue(b);
									if (typeof y == "object") {
										const $ = { path: s.profile.path };
										s.profile.args && ($.args = s.profile.args),
											(y[s.profile.profileName] = this.k(s.profile)),
											await this.f.updateValue(
												b,
												y,
												i.ConfigurationTarget.USER,
											);
									}
								}
								await this.f.updateValue(
									l,
									s.profileName,
									i.ConfigurationTarget.USER,
								);
							} else if (o === "createInstance")
								return "id" in s.profile
									? {
											config: {
												extensionIdentifier: s.profile.extensionIdentifier,
												id: s.profile.id,
												title: s.profile.title,
												options: {
													icon: s.profile.icon,
													color: s.profile.color,
												},
											},
											keyMods: s.keyMods,
										}
									: { config: s.profile, keyMods: s.keyMods };
							return "profileName" in s.profile
								? s.profile.profileName
								: s.profile.title;
						}
					}
					async j(o) {
						const f = await this.c.getPlatformKey(),
							b = this.c.availableProfiles,
							s = E.TerminalSettingPrefix.Profiles + f,
							l = this.c.getDefaultProfileName();
						let y;
						const $ = {
								placeHolder:
									o === "createInstance"
										? m.localize(10128, null)
										: m.localize(10129, null),
								onDidTriggerItemButton: async (L) => {
									if (
										!(await this.l(L.item.profile)) ||
										"command" in L.item.profile ||
										"id" in L.item.profile
									)
										return;
									const D = this.f.getValue(
											E.TerminalSettingPrefix.Profiles + f,
										),
										M = D ? Object.keys(D) : [],
										N = await this.g.input({
											prompt: m.localize(10130, null),
											value: L.item.profile.profileName,
											validateInput: async (R) => {
												if (M.includes(R)) return m.localize(10131, null);
											},
										});
									if (!N) return;
									const A = { ...D, [N]: this.k(L.item.profile) };
									await this.f.updateValue(s, A, i.ConfigurationTarget.USER);
								},
								onKeyMods: (L) => (y = L),
							},
							v = [],
							S = b.filter((L) => !L.isAutoDetected),
							I = b.filter((L) => L.isAutoDetected);
						S.length > 0 &&
							(v.push({ type: "separator", label: m.localize(10132, null) }),
							v.push(
								...this.n(
									S.map((L) => this.m(L)),
									l,
								),
							)),
							v.push({ type: "separator", label: m.localize(10133, null) });
						const T = [];
						for (const L of this.c.contributedProfiles) {
							let D;
							typeof L.icon == "string" &&
								(L.icon.startsWith("$(")
									? (D = u.ThemeIcon.fromString(L.icon))
									: (D = u.ThemeIcon.fromId(L.icon))),
								(!D || !(0, h.$_O)().getIcon(D.id)) &&
									(D = this.d.getDefaultIcon());
							const M = (0, C.$Snc)(L, this.h.getColorTheme().type, !0),
								N = (0, C.$Onc)(L),
								A = [];
							M && A.push(...M),
								N && A.push(N),
								T.push({
									label: `$(${D.id}) ${L.title}`,
									profile: {
										extensionIdentifier: L.extensionIdentifier,
										title: L.title,
										icon: L.icon,
										id: L.id,
										color: L.color,
									},
									profileName: L.title,
									iconClasses: A,
								});
						}
						T.length > 0 && v.push(...this.n(T, l)),
							I.length > 0 &&
								(v.push({ type: "separator", label: m.localize(10134, null) }),
								v.push(
									...this.n(
										I.map((L) => this.m(L)),
										l,
									),
								));
						const P = (0, C.$Qnc)(this.h.getColorTheme()),
							k = await this.g.pick(v, $);
						if ((P.dispose(), !!k && (await this.l(k.profile))))
							return y && (k.keyMods = y), k;
					}
					k(o) {
						const f = { path: o.path };
						return o.args && (f.args = o.args), o.env && (f.env = o.env), f;
					}
					async l(o) {
						const f = "isUnsafePath" in o && o.isUnsafePath,
							b = "requiresUnsafePath" in o && o.requiresUnsafePath;
						return !f && !b
							? !0
							: await new Promise((s) => {
									const l = [];
									f && l.push(o.path),
										b && l.push(b),
										this.i
											.prompt(
												n.Severity.Warning,
												m.localize(10135, null, `"${l.join(",")}"`),
												[
													{ label: m.localize(10136, null), run: () => s(!0) },
													{ label: m.localize(10137, null), run: () => s(!1) },
												],
											)
											.onDidClose(() => s(!1));
								});
					}
					m(o) {
						const f = [
								{
									iconClass: u.ThemeIcon.asClassName(d.$ZHb),
									tooltip: m.localize(10138, null),
								},
							],
							s = `$(${(o.icon && u.ThemeIcon.isThemeIcon(o.icon) ? o.icon : t.$ak.terminal).id}) ${o.profileName}`,
							l = o.isFromPath ? (0, c.$sc)(o.path) : o.path,
							y = (0, C.$Onc)(o),
							$ = [];
						if ((y && $.push(y), o.args)) {
							if (typeof o.args == "string")
								return {
									label: s,
									description: `${o.path} ${o.args}`,
									profile: o,
									profileName: o.profileName,
									buttons: f,
									iconClasses: $,
								};
							const v = o.args
								.map((S) =>
									S.includes(" ") ? `"${S.replace(/"/g, '\\"')}"` : S,
								)
								.join(" ");
							return {
								label: s,
								description: `${l} ${v}`,
								profile: o,
								profileName: o.profileName,
								buttons: f,
								iconClasses: $,
							};
						}
						return {
							label: s,
							description: l,
							profile: o,
							profileName: o.profileName,
							buttons: f,
							iconClasses: $,
						};
					}
					n(o, f) {
						return o.sort((b, s) =>
							s.profileName === f
								? 1
								: b.profileName === f
									? -1
									: b.profileName.localeCompare(s.profileName),
						);
					}
				};
				(e.$jUc = g),
					(e.$jUc = g =
						Ne(
							[
								j(0, a.$teb),
								j(1, a.$reb),
								j(2, i.$gj),
								j(3, w.$DJ),
								j(4, r.$iP),
								j(5, n.$4N),
							],
							g,
						));
			},
		),
		