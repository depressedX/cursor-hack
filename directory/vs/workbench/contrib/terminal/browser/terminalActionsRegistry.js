define(de[1948], he([1, 0, 633, 4]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$vUc = void 0),
				(e.$wUc = E);
			class w {
				static {
					this.hasRegisteredActions = !1;
				}
				static {
					this.registeredActions = [];
				}
				static registerTerminalAction(d, m) {
					if (this.registeredActions.find(([r, u]) => r === d)) {
						console.error(`Editor action with id ${d} already registered`);
						return;
					}
					this.registeredActions.push([d, m]);
				}
			}
			e.$vUc = w;
			async function E(C, d, m, r) {
				switch (r.config.splitCwd) {
					case "workspaceRoot":
						if (d !== void 0 && m !== void 0) {
							if (d.length === 1) return d[0].uri;
							if (d.length > 1) {
								const u = { placeHolder: (0, i.localize)(10051, null) },
									a = await m.executeCommand(t.$qRb, [u]);
								return a ? Promise.resolve(a.uri) : void 0;
							}
						}
						return "";
					case "initial":
						return C.getInitialCwd();
					case "inherited":
						return C.getCwd();
				}
			}
		}),
		define(
			de[363],
			he([
				1, 0, 459, 50, 14, 27, 23, 12, 28, 9, 65, 64, 4, 91, 11, 31, 10, 8, 43,
				73, 93, 40, 41, 63, 117, 25, 633, 247, 107, 1802, 145, 237, 955, 469,
				358, 78, 245, 131, 143, 18, 54, 1797, 35, 514, 1314, 67, 61, 33, 19,
				252, 22, 121, 189, 689, 58, 66, 103, 1948, 308, 130, 7, 446, 616, 178,
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
		),
		define(
			de[4036],
			he([
				1, 0, 24, 82, 15, 138, 6, 3, 12, 10, 8, 117, 1201, 955, 107, 363, 237,
				1818, 78, 53, 143,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wVc = void 0),
					(t = mt(t)),
					(i = mt(i));
				let l = class extends d.$1c {
					get onDidChangeAvailableProfiles() {
						return this.r.event;
					}
					get profilesReady() {
						return this.c;
					}
					get availableProfiles() {
						return this.m || this.refreshAvailableProfiles(), this.f || [];
					}
					get contributedProfiles() {
						const S = this.f?.map((I) => I.profileName) || [];
						return this.h?.filter((I) => !S.includes(I.title)) || [];
					}
					constructor(S, I, T, P, k, L, D) {
						super(),
							(this.s = S),
							(this.t = I),
							(this.u = T),
							(this.w = P),
							(this.y = k),
							(this.z = L),
							(this.C = D),
							(this.h = []),
							(this.m = !1),
							(this.n = this.D(new d.$2c())),
							(this.q = new Map()),
							(this.r = this.D(new C.$re())),
							this.D(
								this.w.onDidChangeExtensions(() =>
									this.refreshAvailableProfiles(),
								),
							),
							(this.a =
								p.TerminalContextKeys.webExtensionContributedProfile.bindTo(
									this.s,
								)),
							this.L(),
							(this.c = this.y
								.getEnvironment()
								.then(
									() => (
										(this.b = new w.$Mh(2e4)), this.b.wait().then(() => {})
									),
								)),
							this.refreshAvailableProfiles(),
							this.F();
					}
					async F() {
						const S = await this.getPlatformKey();
						this.D(
							this.t.onDidChangeConfiguration(async (I) => {
								(I.affectsConfiguration(
									a.TerminalSettingPrefix.AutomationProfile + S,
								) ||
									I.affectsConfiguration(
										a.TerminalSettingPrefix.DefaultProfile + S,
									) ||
									I.affectsConfiguration(
										a.TerminalSettingPrefix.Profiles + S,
									) ||
									I.affectsConfiguration(a.TerminalSettingId.UseWslProfiles)) &&
									(I.source !== r.ConfigurationTarget.DEFAULT
										? (this.refreshAvailableProfiles(), (this.m = !1))
										: (this.m = !0));
							}),
						);
					}
					getDefaultProfileName() {
						return this.j;
					}
					getDefaultProfile(S) {
						let I;
						if (S) {
							if (
								((I = this.t.getValue(
									`${a.TerminalSettingPrefix.DefaultProfile}${this.G(S)}`,
								)),
								!I || typeof I != "string")
							)
								return;
						} else I = this.j;
						if (I)
							return this.availableProfiles.find(
								(T) => T.profileName === I && !T.isAutoDetected,
							);
					}
					G(S) {
						switch (S) {
							case m.OperatingSystem.Linux:
								return "linux";
							case m.OperatingSystem.Macintosh:
								return "osx";
							case m.OperatingSystem.Windows:
								return "windows";
						}
					}
					refreshAvailableProfiles() {
						this.H();
					}
					async H() {
						const S = await this.J(!0),
							I = !t.$yb(S, this.f, y),
							T = await this.I(),
							P = await this.getPlatformKey(),
							k = this.t.getValue(
								`${a.TerminalSettingPrefix.AutomationProfile}${P}`,
							),
							L = !i.$zo(k, this.g);
						(I || T || L) &&
							((this.f = S),
							(this.g = k),
							this.r.fire(this.f),
							this.b.open(),
							this.L(),
							await this.M(this.f));
					}
					async I() {
						const S = await this.getPlatformKey(),
							I = [],
							T = this.t.getValue(a.TerminalSettingPrefix.Profiles + S);
						for (const [L, D] of Object.entries(T)) D === null && I.push(L);
						const P = Array.from(
								this.u.terminalProfiles.filter((L) => !I.includes(L.title)),
							),
							k = !t.$yb(P, this.h, $);
						return (this.h = P), k;
					}
					getContributedProfileProvider(S, I) {
						return this.q.get(S)?.get(I);
					}
					async J(S) {
						const I = await this.C.getBackend(this.z.remoteAuthority);
						if (!I) return this.f || [];
						const T = await this.getPlatformKey();
						return (
							(this.j =
								this.t.getValue(
									`${a.TerminalSettingPrefix.DefaultProfile}${T}`,
								) ?? void 0),
							I.getProfiles(
								this.t.getValue(`${a.TerminalSettingPrefix.Profiles}${T}`),
								this.j,
								S,
							)
						);
					}
					L() {
						this.a.set(m.$r && this.h.length > 0);
					}
					async M(S) {
						const I = await this.y.getEnvironment();
						(0, h.$$J)({ os: I?.os || m.OS, profiles: S }, this.h),
							(this.n.value = (0, g.$KUc)(S));
					}
					async getPlatformKey() {
						const S = await this.y.getEnvironment();
						return S
							? S.os === m.OperatingSystem.Windows
								? "windows"
								: S.os === m.OperatingSystem.Macintosh
									? "osx"
									: "linux"
							: m.$l
								? "windows"
								: m.$m
									? "osx"
									: "linux";
					}
					registerTerminalProfileProvider(S, I, T) {
						let P = this.q.get(S);
						return (
							P || ((P = new Map()), this.q.set(S, P)),
							P.set(I, T),
							(0, d.$Yc)(() => this.q.delete(I))
						);
					}
					async registerContributedProfile(S) {
						const I = await this.getPlatformKey(),
							T = await this.t.getValue(
								`${a.TerminalSettingPrefix.Profiles}${I}`,
							);
						if (typeof T == "object") {
							const P = {
								extensionIdentifier: S.extensionIdentifier,
								icon: S.options.icon,
								id: S.id,
								title: S.title,
								color: S.options.color,
							};
							T[S.title] = P;
						}
						await this.t.updateValue(
							`${a.TerminalSettingPrefix.Profiles}${I}`,
							T,
							r.ConfigurationTarget.USER,
						);
					}
					async getContributedDefaultProfile(S) {
						if (S && !S.extHostTerminalId && !("executable" in S)) {
							const I = await this.getPlatformKey(),
								T = this.t.getValue(
									`${a.TerminalSettingPrefix.DefaultProfile}${I}`,
								);
							return this.contributedProfiles.find((k) => k.title === T);
						}
					}
				};
				(e.$wVc = l),
					Ne([(0, E.$gi)(2e3)], l.prototype, "refreshAvailableProfiles", null),
					(e.$wVc = l =
						Ne(
							[
								j(0, u.$6j),
								j(1, r.$gj),
								j(2, o.$uVc),
								j(3, b.$q2),
								j(4, s.$$m),
								j(5, f.$r8),
								j(6, n.$mIb),
							],
							l,
						));
				function y(v, S) {
					return (
						v.profileName === S.profileName &&
						(0, c.$5J)(v.args, S.args) &&
						v.color === S.color &&
						(0, c.$6J)(v.icon, S.icon) &&
						v.isAutoDetected === S.isAutoDetected &&
						v.isDefault === S.isDefault &&
						v.overrideName === S.overrideName &&
						v.path === S.path
					);
				}
				function $(v, S) {
					return (
						v.extensionIdentifier === S.extensionIdentifier &&
						v.color === S.color &&
						v.icon === S.icon &&
						v.id === S.id &&
						v.title === S.title
					);
				}
			},
		),
		define(
			de[1949],
			he([
				1, 0, 4, 7, 50, 10, 49, 5, 32, 35, 26, 363, 40, 107, 146, 39, 8, 60, 41,
				11, 145, 117, 198, 51, 3698, 31, 182, 806, 92, 607, 3, 9, 212, 514,
				1017, 237, 1261, 189, 106, 6, 72, 91, 616, 649,
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
					(e.$5Uc = void 0),
					(t = mt(t)),
					(i = mt(i));
				let V = class extends n.$TMb {
					get terminalTabbedView() {
						return this.f;
					}
					constructor(
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
					) {
						super(ee, _, se, Z, te, Q, re, me, pe, $e, ye),
							(this.s = te),
							(this.t = Z),
							(this.L = se),
							(this.ab = re),
							(this.sb = le),
							(this.cc = oe),
							(this.dc = ae),
							(this.ec = ue),
							(this.fc = fe),
							(this.gc = ve),
							(this.hc = ge),
							(this.ic = be),
							(this.jc = Ce),
							(this.kc = Le),
							(this.g = !1),
							(this.h = this.D(new L.$2c())),
							(this.r = this.D(new L.$Zc())),
							this.D(
								this.sb.onDidRegisterProcessSupport(() => {
									this.eb.fire();
								}),
							),
							this.D(
								this.sb.onDidChangeInstances(() => {
									this.vc() && this.dc.instances.length <= 1 && this.eb.fire(),
										this.b &&
											(this.f || this.pc(),
											this.dc.instances.length === 1 &&
												this.X(this.b.offsetHeight, this.b.offsetWidth));
								}),
							),
							(this.j = this.D(
								this.gc.createMenu(b.$XX.TerminalNewDropdownContext, this.s),
							)),
							(this.m = this.D(
								this.gc.createMenu(b.$XX.TerminalTabContext, this.s),
							)),
							this.D(this.hc.onDidChangeAvailableProfiles((Fe) => this.uc(Fe))),
							(this.n = R.TerminalContextKeys.viewShowing.bindTo(this.s)),
							this.D(
								this.onDidChangeBodyVisibility((Fe) => {
									Fe && this.f?.rerenderTabs();
								}),
							),
							this.D(
								this.t.onDidChangeConfiguration((Fe) => {
									this.b &&
										(Fe.affectsConfiguration(
											l.TerminalSettingId.ShellIntegrationDecorationsEnabled,
										) ||
											Fe.affectsConfiguration(
												l.TerminalSettingId.ShellIntegrationEnabled,
											)) &&
										this.lc(this.b);
								}),
							),
							this.D(
								this.sb.onDidCreateInstance((Fe) => {
									Fe.capabilities.onDidAddCapabilityType((Oe) => {
										Oe === B.TerminalCapability.CommandDetection &&
											this.mc() &&
											this.b?.classList.add("shell-integration");
									});
								}),
							),
							this.D(this.sb.onDidChangeActiveInstance(() => {}));
					}
					lc(ee) {
						ee.classList.toggle("shell-integration", this.mc());
					}
					mc() {
						const ee = this.t.getValue(
							l.TerminalSettingId.ShellIntegrationDecorationsEnabled,
						);
						return (
							(ee === "both" || ee === "gutter") &&
							this.t.getValue(l.TerminalSettingId.ShellIntegrationEnabled)
						);
					}
					nc(ee) {
						if (
							this.isBodyVisible() &&
							this.sb.isProcessSupportRegistered &&
							this.sb.connectionState === c.TerminalConnectionState.Connected
						) {
							const _ = this.g;
							this.g = !0;
							let te = "never";
							_ ||
								((te = this.t.getValue(l.TerminalSettingId.HideOnStartup)),
								te === "always" && this.dc.hidePanel());
							let Q = this.dc.groups.length === 0;
							if ((ee && (Q &&= this.sb.restoredGroupCount === 0), !Q)) return;
							if (!_) {
								switch (te) {
									case "never":
										this.sb.createTerminal({
											location: l.TerminalLocation.Panel,
										});
										break;
									case "whenEmpty":
										this.sb.restoredGroupCount === 0 && this.dc.hidePanel();
										break;
								}
								return;
							}
							this.sb.createTerminal({ location: l.TerminalLocation.Panel });
						}
					}
					W(ee) {
						super.W(ee),
							this.b || this.lc(ee),
							(this.b = ee),
							this.b.classList.add("integrated-terminal"),
							i.$Rgb(this.b),
							this.ab.createInstance(Y, this.b),
							this.shouldShowWelcome() || this.pc(),
							this.D(
								this.Ab.onDidChangeConfiguration((_) => {
									if (
										(_.affectsConfiguration(l.TerminalSettingId.FontFamily) ||
											_.affectsConfiguration("editor.fontFamily")) &&
										!this.cc.configFontIsMonospace()
									) {
										const te = [
											{
												label: t.localize(10167, null),
												run: () =>
													this.Ab.updateValue(
														l.TerminalSettingId.FontFamily,
														"monospace",
													),
											},
										];
										this.ec.prompt(
											h.Severity.Warning,
											t.localize(10168, null),
											te,
										);
									}
								}),
							),
							this.D(
								this.onDidChangeBodyVisibility(async (_) => {
									if ((this.n.set(_), _))
										this.vc() && this.eb.fire(),
											this.nc(!1),
											this.dc.showPanel(!1);
									else
										for (const te of this.dc.instances)
											te.resetFocusContextKey();
									this.dc.updateVisibility();
								}),
							),
							this.D(this.sb.onDidChangeConnectionState(() => this.nc(!0))),
							this.X(this.b.offsetHeight, this.b.offsetWidth);
					}
					pc() {
						this.b && (this.f = this.D(this.Db.createInstance(v.$4Uc, this.b)));
					}
					X(ee, _) {
						super.X(ee, _), this.f?.layout(_, ee);
					}
					getActionViewItem(ee, _) {
						switch (ee.id) {
							case s.TerminalCommandId.Split: {
								const te = this,
									Q = new (class extends w.$rj {
										constructor() {
											super(ee.id, ee.label, ee.class, ee.enabled),
												(this.checked = ee.checked),
												(this.tooltip = ee.tooltip),
												this.D(ee);
										}
										async run() {
											const Z = te.dc.activeInstance;
											if (Z)
												return (
													await te.sb.createTerminal({
														location: { parentTerminal: Z },
													})
												)?.focusWhenReady();
										}
									})();
								return new y.$_ib(ee, Q, {
									..._,
									icon: !0,
									label: !1,
									keybinding: this.tc(ee),
								});
							}
							case s.TerminalCommandId.SwitchTerminal:
								return this.ab.createInstance(G, ee);
							case s.TerminalCommandId.Focus:
								if (ee instanceof b.$2X) {
									const te = [];
									return (
										(0, P.$Jyb)(this.m, { shouldForwardArgs: !0 }, te),
										this.ab.createInstance(J, ee, te)
									);
								}
							case s.TerminalCommandId.New:
								if (ee instanceof b.$2X) {
									const te = (0, A.$QUc)(
										l.TerminalLocation.Panel,
										this.hc.availableProfiles,
										this.sc(),
										this.hc.contributedProfiles,
										this.sb,
										this.j,
									);
									return (
										this.rc(te.dropdownAction, te.dropdownMenuActions),
										(this.h.value = new k.$OYb(
											ee,
											te.dropdownAction,
											te.dropdownMenuActions,
											te.className,
											this.L,
											{ hoverDelegate: _.hoverDelegate },
											this.fc,
											this.ec,
											this.s,
											this.jc,
											this.kc,
										)),
										this.h.value?.update(
											te.dropdownAction,
											te.dropdownMenuActions,
										),
										this.h.value
									);
								}
						}
						return super.getActionViewItem(ee, _);
					}
					rc(ee, _) {
						this.r.clear(),
							ee instanceof w.$rj && this.r.add(ee),
							_.filter((te) => te instanceof w.$rj).forEach((te) =>
								this.r.add(te),
							);
					}
					sc() {
						let ee;
						try {
							ee = this.hc.getDefaultProfileName();
						} catch {
							ee = this.ic.defaultProfileName;
						}
						return ee;
					}
					tc(ee) {
						return this.fc.lookupKeybinding(ee.id)?.getLabel() ?? void 0;
					}
					uc(ee) {
						const _ = (0, A.$QUc)(
							l.TerminalLocation.Panel,
							ee,
							this.sc(),
							this.hc.contributedProfiles,
							this.sb,
							this.j,
						);
						this.rc(_.dropdownAction, _.dropdownMenuActions),
							this.h.value?.update(_.dropdownAction, _.dropdownMenuActions);
					}
					focus() {
						if (
							(super.focus(),
							this.sb.connectionState === c.TerminalConnectionState.Connected)
						) {
							this.dc.showPanel(!0);
							return;
						}
						const ee = this.element.ownerDocument.activeElement;
						ee &&
							this.D(
								this.sb.onDidChangeConnectionState(() => {
									ee && i.$Kgb(ee) && this.dc.showPanel(!0);
								}),
							);
					}
					vc() {
						return !this.sb.isProcessSupportRegistered;
					}
					shouldShowWelcome() {
						return this.vc() && this.sb.instances.length === 0;
					}
				};
				(e.$5Uc = V),
					(e.$5Uc = V =
						Ne(
							[
								j(1, g.$uZ),
								j(2, p.$6j),
								j(3, o.$K1),
								j(4, E.$gj),
								j(5, C.$Xxb),
								j(6, d.$Li),
								j(7, c.$iIb),
								j(8, c.$jIb),
								j(9, c.$lIb),
								j(10, r.$iP),
								j(11, m.$km),
								j(12, F.$Uyb),
								j(13, h.$4N),
								j(14, g.$uZ),
								j(15, f.$7rb),
								j(16, b.$YX),
								j(17, s.$teb),
								j(18, s.$reb),
								j(19, r.$iP),
								j(20, x.$XK),
							],
							V,
						));
				let G = class extends y.$ajb {
					constructor(ee, _, te, Q, Z) {
						super(null, ee, K(_, te), te.activeGroupIndex, Q, U.$Fyb, {
							ariaLabel: t.localize(10169, null),
							optionsAsChildren: !0,
						}),
							(this.h = _),
							(this.s = te),
							this.D(_.onDidChangeInstances(() => this.y(), this)),
							this.D(_.onDidChangeActiveGroup(() => this.y(), this)),
							this.D(_.onDidChangeActiveInstance(() => this.y(), this)),
							this.D(_.onAnyInstanceTitleChange(() => this.y(), this)),
							this.D(te.onDidChangeGroups(() => this.y(), this)),
							this.D(_.onDidChangeConnectionState(() => this.y(), this)),
							this.D(Z.onDidChangeAvailableProfiles(() => this.y(), this)),
							this.D(_.onAnyInstancePrimaryStatusChange(() => this.y(), this));
					}
					render(ee) {
						super.render(ee),
							ee.classList.add("switch-terminal"),
							(ee.style.borderColor = (0, $.$rP)($.$bS));
					}
					y() {
						const ee = K(this.h, this.s);
						this.setOptions(ee, this.s.activeGroupIndex);
					}
				};
				G = Ne([j(1, c.$iIb), j(2, c.$lIb), j(3, C.$Wxb), j(4, s.$teb)], G);
				function K(ne, ee) {
					let _;
					return (
						ne.connectionState === c.TerminalConnectionState.Connected
							? (_ = ee.getGroupLabels().map((te) => ({ text: te })))
							: (_ = [{ text: t.localize(10170, null) }]),
						_.push({ text: a.$AUc, isDisabled: !0 }),
						_.push({ text: a.$BUc }),
						_
					);
				}
				let J = class extends P.$Lyb {
					constructor(ee, _, te, Q, Z, se, re, le, oe, ae, pe, $e, ye) {
						super(
							ee,
							{ draggable: !0, hoverDelegate: $e.createInstance(ie) },
							te,
							Q,
							Z,
							se,
							ae,
							ye,
						),
							(this.nb = _),
							(this.ob = re),
							(this.pb = le),
							(this.qb = oe),
							(this.rb = pe),
							(this.sb = $e),
							(this.lb = []),
							this.D(
								z.Event.debounce(
									z.Event.any(
										this.ob.onAnyInstancePrimaryStatusChange,
										this.qb.onDidChangeActiveInstance,
										z.Event.map(
											this.ob.onAnyInstanceIconChange,
											(ue) => ue.instance,
										),
										this.ob.onAnyInstanceTitleChange,
										this.ob.onDidChangeInstanceCapability,
									),
									(ue, fe) => (ue || (ue = new Set()), fe && ue.add(fe), ue),
									q.$me,
								)((ue) => {
									for (const fe of ue) this.u(fe);
								}),
							),
							this.D((0, L.$Yc)(() => (0, L.$Vc)(this.lb)));
					}
					async onClick(ee) {
						(this.qb.lastAccessedMenu = "inline-tab"),
							ee.altKey && this.db.alt
								? this.rb.executeCommand(this.db.alt.id, {
										location: l.TerminalLocation.Panel,
									})
								: this.ub();
					}
					u(ee) {
						if (
							!(ee && ee !== this.qb.activeInstance) &&
							(this.lb.length === 0 &&
								this.element &&
								this.I &&
								(this.lb.push(
									i.$0fb(this.element, i.$$gb.CONTEXT_MENU, (_) => {
										_.button === 2 && (this.ub(), _.preventDefault());
									}),
								),
								this.lb.push(
									i.$0fb(this.element, i.$$gb.AUXCLICK, (_) => {
										if (_.button === 1) {
											const te = this.qb.activeInstance;
											te && this.ob.safeDisposeTerminal(te), _.preventDefault();
										}
									}),
								),
								this.lb.push(
									i.$0fb(this.element, i.$$gb.DRAG_START, (_) => {
										const te = this.qb.activeInstance;
										_.dataTransfer &&
											te &&
											_.dataTransfer.setData(
												c.TerminalDataTransfers.Terminals,
												JSON.stringify([te.resource.toString()]),
											);
									}),
								)),
							this.I)
						) {
							const _ = this.I,
								te = this.qb.activeInstance;
							if (!te) {
								i.$hhb(_, "");
								return;
							}
							_.classList.add("single-terminal-tab");
							let Q = "";
							const Z = te.statusList.primary;
							if (Z) {
								const le = (0, T.$gHb)(Z.severity);
								this.ab.getColorTheme();
								const oe = this.ab.getColorTheme().getColor(le);
								oe && (Q = oe.toString());
							}
							(_.style.color = Q),
								i.$hhb(
									_,
									...(0, I.$Sib)(
										this.sb.invokeFunction(
											W,
											te,
											this.pb.config.tabs.separator,
											u.ThemeIcon.isThemeIcon(this.eb.item.icon)
												? this.eb.item.icon
												: void 0,
										),
									),
								),
								this.g && (_.classList.remove(this.g), (this.g = void 0)),
								this.b && (_.classList.remove(this.b), (this.b = void 0)),
								this.h &&
									(_.classList.remove(this.h),
									_.classList.remove("terminal-uri-icon"),
									(this.h = void 0));
							const se = (0, N.$Onc)(te);
							se && ((this.b = se), _.classList.add(se));
							const re = (0, N.$Snc)(te, this.ab.getColorTheme().type);
							re && ((this.h = re?.[0]), _.classList.add(...re)),
								this.eb.item.icon &&
									((this.g = "alt-command"), _.classList.add(this.g)),
								this.C();
						}
					}
					ub() {
						this.bb.showContextMenu({
							actionRunner: new H.$yUc(),
							getAnchor: () => this.element,
							getActions: () => this.nb,
							getActionsContext: () => {
								const ee = this.qb.activeInstance;
								return ee ? [new H.$xUc(ee)] : [];
							},
						});
					}
				};
				J = Ne(
					[
						j(2, g.$uZ),
						j(3, h.$4N),
						j(4, p.$6j),
						j(5, r.$iP),
						j(6, c.$iIb),
						j(7, c.$jIb),
						j(8, c.$lIb),
						j(9, C.$Xxb),
						j(10, S.$ek),
						j(11, d.$Li),
						j(12, x.$XK),
					],
					J,
				);
				function W(ne, ee, _, te) {
					if (!ee || !ee.title) return "";
					const Q = u.ThemeIcon.isThemeIcon(ee.icon)
							? ee.icon.id
							: ne.get(s.$reb).getDefaultIcon().id,
						Z = `$(${te?.id || Q}) ${X(ee, _)}`,
						se = ee.statusList.primary;
					return se?.icon ? `${Z} $(${se.icon.id})` : Z;
				}
				function X(ne, ee) {
					return ne
						? ne.description
							? `${ne.title} ${ee} ${ne.description}`
							: ne.title
						: "";
				}
				let Y = class extends r.$pP {
					constructor(ee, _, te, Q) {
						super(_),
							(this.f = _),
							(this.g = te),
							(this.j = Q),
							this.m(),
							(this.b = i.$Rgb(ee)),
							this.D((0, L.$Yc)(() => this.b.remove())),
							this.updateStyles();
					}
					m() {
						this.D(this.g.onAnyInstanceIconChange(() => this.updateStyles())),
							this.D(this.g.onDidChangeInstances(() => this.updateStyles())),
							this.D(this.j.onDidChangeGroups(() => this.updateStyles()));
					}
					updateStyles() {
						super.updateStyles();
						const ee = this.f.getColorTheme();
						let _ = "";
						for (const te of this.g.instances) {
							const Q = te.icon;
							if (!Q) continue;
							let Z;
							Q instanceof D.URI
								? (Z = Q)
								: Q instanceof Object &&
									"light" in Q &&
									"dark" in Q &&
									(Z = ee.type === M.ColorScheme.LIGHT ? Q.light : Q.dark);
							const se = (0, N.$Snc)(te, ee.type);
							Z instanceof D.URI &&
								se &&
								se.length > 1 &&
								(_ += `.monaco-workbench .${se[0]} .monaco-highlighted-label .codicon, .monaco-action-bar .terminal-uri-icon.single-terminal-tab.action-label:not(.alt-command) .codicon{background-image: ${i.$vhb(Z)};}`);
						}
						for (const te of this.g.instances) {
							const Q = (0, N.$Onc)(te);
							if (!Q || !te.color) continue;
							const Z = ee.getColor(te.color);
							Z &&
								(_ += `.monaco-workbench .${Q} .codicon:first-child:not(.codicon-split-horizontal):not(.codicon-trashcan):not(.file-icon){ color: ${Z} !important; }`);
						}
						this.b.textContent = _;
					}
				};
				Y = Ne([j(1, r.$iP), j(2, c.$iIb), j(3, c.$lIb)], Y);
				let ie = class {
					constructor(ee, _, te) {
						(this.d = ee),
							(this.f = _),
							(this.g = te),
							(this.b = 0),
							(this.placement = "element");
					}
					get delay() {
						return Date.now() - this.b < 200
							? 0
							: this.d.getValue("workbench.hover.delay");
					}
					showHover(ee, _) {
						const te = this.g.activeInstance;
						if (!te) return;
						const Q = (0, O.$ZUc)(te);
						return this.f.showHover(
							{ ...ee, content: Q.content, actions: Q.actions },
							_,
						);
					}
					onDidHideHover() {
						this.b = Date.now();
					}
				};
				ie = Ne([j(0, E.$gj), j(1, F.$Uyb), j(2, c.$lIb)], ie);
			},
		),
		define(
			de[4037],
			he([1, 0, 23, 4, 113, 211, 363, 145, 245]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$kgd = r);
				function r() {
					(0, C.$EUc)({
						id: d.TerminalCommandId.NewLocal,
						title: (0, i.localize2)(
							10428,
							"Create New Integrated Terminal (Local)",
						),
						run: async (u, a) => {
							const h = a.get(m.$Feb),
								c = a.get(E.$3l),
								n = a.get(w.$Ui);
							let g;
							try {
								const o = h.getLastActiveWorkspaceRoot(t.Schemas.vscodeRemote);
								if (o) {
									const f = await c.getCanonicalURI(o);
									f.scheme === t.Schemas.file && (g = f);
								}
							} catch {}
							g || (g = n.userHome);
							const p = await u.service.createTerminal({ cwd: g });
							return p
								? (u.service.setActiveInstance(p), u.groupService.showPanel(!0))
								: Promise.resolve(void 0);
						},
					});
				}
			},
		),
		define(
			de[4038],
			he([1, 0, 320, 9, 22, 4037, 143, 110, 3, 107, 7]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lgd = void 0);
				let a = class extends m.$1c {
					constructor(c, n, g, p) {
						super(),
							(this.a = c),
							(this.b = n),
							t.$P.on("vscode:openFiles", (f, b) => {
								this.f(b);
							}),
							this.D(p.onDidResumeOS(() => this.c())),
							this.b.setNativeDelegate({
								getWindowCount: () => p.getWindowCount(),
							});
						const o = g.getConnection();
						o && o.remoteAuthority && (0, E.$kgd)();
					}
					c() {
						for (const c of this.b.instances) c.xterm?.forceRedraw();
					}
					async f(c) {
						if (c.termProgram === "vscode" && c.filesToWait) {
							const n = i.URI.revive(c.filesToWait.waitMarkerFileUri);
							await this.g(n), this.b.activeInstance?.focus();
						}
					}
					g(c) {
						return new Promise((n) => {
							let g = !1;
							const p = (0, u.$igb)(
								(0, u.$Ogb)(),
								async () => {
									if (!g) {
										g = !0;
										const o = await this.a.exists(c);
										(g = !1), o || (p.dispose(), n(void 0));
									}
								},
								1e3,
							);
						});
					}
				};
				(e.$lgd = a),
					(e.$lgd = a =
						Ne([j(0, w.$ll), j(1, r.$iIb), j(2, C.$$m), j(3, d.$y7c)], a));
			},
		),
		define(
			de[4039],
			he([1, 0, 20, 230, 30, 117, 55, 145, 4038, 3568, 52, 3638, 3958]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, i.$Ubd)(E.$XJ, E.TerminalIpcChannels.LocalPty),
					(0, t.$lK)(d.$reb, r.$mgd, t.InstantiationType.Delayed);
				const h = w.$Io.as(C.Extensions.Workbench);
				(0, C.$s6)(a.$ogd.ID, a.$ogd, C.WorkbenchPhase.BlockStartup),
					h.registerWorkbenchContribution(m.$lgd, u.LifecyclePhase.Restored);
			},
		),
		define(
			de[4040],
			he([
				1, 0, 27, 3, 4, 91, 11, 8, 5, 43, 189, 1032, 107, 363, 378, 237, 3152,
				3569, 3153, 48, 3570, 10, 117, 6, 184, 996, 995, 178, 130, 12,
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
				var L, D;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$PVc = e.$OVc = void 0);
				let M = class extends i.$Zc {
					static {
						L = this;
					}
					static {
						this.ID = "terminal.textAreaSync";
					}
					static get(B) {
						return B.getContribution(L.ID);
					}
					constructor(B, U, z, F) {
						super(), (this.j = B), (this.m = F);
					}
					layout(B) {
						this.h ||
							((this.h = this.add(
								this.m.createInstance(f.$MVc, this.j.capabilities),
							)),
							B.raw.loadAddon(this.h),
							this.h.activate(B.raw));
					}
				};
				(M = L = Ne([j(3, m.$Li)], M)), (0, n.$qLc)(M.ID, M);
				let N = class extends i.$1c {
					static {
						D = this;
					}
					static {
						this.ID = "terminal.accessibleBufferProvider";
					}
					static get(B) {
						return B.getContribution(D.ID);
					}
					constructor(B, U, z, F, x, H, q, V, G) {
						super(),
							(this.m = B),
							(this.n = F),
							(this.q = x),
							(this.r = H),
							(this.s = q),
							(this.t = V),
							(this.u = G),
							(this.j = new i.$2c()),
							this.D(
								a.$tpc.addImplementation(
									90,
									"terminal",
									() =>
										this.r.activeInstance !== this.m ? !1 : (this.show(), !0),
									g.TerminalContextKeys.focus,
								),
							),
							this.D(
								B.onDidExecuteText(() => {
									const K = q.getValue(y.TerminalSettingId.FocusAfterRun);
									K === "terminal"
										? B.focus(!0)
										: K === "accessible-buffer" && this.show();
								}),
							),
							this.D(
								this.s.onDidChangeConfiguration((K) => {
									K.affectsConfiguration(
										S.TerminalAccessibilitySettingId
											.AccessibleViewFocusOnCommandExecution,
									) && this.w();
								}),
							),
							this.D(
								this.m.capabilities.onDidAddCapability((K) => {
									K.capability.type === u.TerminalCapability.CommandDetection &&
										this.w();
								}),
							);
					}
					xtermReady(B) {
						const U = this.q.createInstance(f.$MVc, this.m.capabilities);
						B.raw.loadAddon(U),
							U.activate(B.raw),
							(this.h = B),
							this.D(
								this.h.raw.onWriteParsed(async () => {
									this.r.activeInstance === this.m &&
										this.y() &&
										this.h.raw.buffer.active.baseY === 0 &&
										this.show();
								}),
							);
						const z = $.Event.latch(this.h.raw.onScroll);
						this.D(
							z(() => {
								this.r.activeInstance === this.m && this.y() && this.show();
							}),
						);
					}
					w() {
						if (!this.m.capabilities.has(u.TerminalCapability.CommandDetection))
							return;
						if (
							this.s.getValue(
								S.TerminalAccessibilitySettingId
									.AccessibleViewFocusOnCommandExecution,
							)
						) {
							if (this.j.value) return;
						} else {
							this.j.clear();
							return;
						}
						const B = this.m.capabilities.get(
							u.TerminalCapability.CommandDetection,
						);
						this.j.value = this.D(
							B.onCommandExecuted(() => {
								this.m.hasFocus && this.show();
							}),
						);
					}
					y() {
						return (
							P.$SLb.getValue(this.t) === T.AccessibleViewProviderId.Terminal
						);
					}
					show() {
						if (!this.h) return;
						this.f || (this.f = this.D(this.q.createInstance(p.$KVc, this.h))),
							this.g ||
								(this.g = this.D(
									this.q.createInstance(s.$NVc, this.m, this.f, () =>
										this.D(
											this.q.createInstance(o.$LVc, this.m, this.h),
										).provideContent(),
									),
								));
						const B = this.s.getValue(
							S.TerminalAccessibilitySettingId
								.AccessibleViewPreserveCursorPosition,
						)
							? this.n.getPosition(T.AccessibleViewProviderId.Terminal)
							: void 0;
						this.n.show(this.g, B);
					}
					navigateToCommand(B) {
						const U = this.n.getPosition(
								T.AccessibleViewProviderId.Terminal,
							)?.lineNumber,
							z = this.z();
						if (!z?.length || !U) return;
						const F =
							B === T.NavigationType.Previous
								? z
										.filter((q) => q.lineNumber < U)
										.sort((q, V) => V.lineNumber - q.lineNumber)
								: z
										.filter((q) => q.lineNumber > U)
										.sort((q, V) => q.lineNumber - V.lineNumber);
						if (!F.length) return;
						const x = F[0],
							H = x.command.command;
						!k.$l && H
							? (this.n.setPosition(new b.$hL(x.lineNumber, 1), !0), alert(H))
							: this.n.setPosition(new b.$hL(x.lineNumber, 1), !0, !0),
							x.exitCode
								? this.u.playSignal(v.$Twb.terminalCommandFailed)
								: this.u.playSignal(v.$Twb.terminalCommandSucceeded);
					}
					z() {
						const B = this.m.capabilities.get(
								u.TerminalCapability.CommandDetection,
							),
							U = B?.commands,
							z = B?.currentCommand;
						if (!U?.length) return;
						const F = [];
						for (const x of U) {
							const H = this.C(x);
							H && F.push({ command: x, lineNumber: H, exitCode: x.exitCode });
						}
						if (z) {
							const x = this.C(z);
							x && F.push({ command: z, lineNumber: x });
						}
						return F;
					}
					C(B) {
						if (!this.f) return;
						let U;
						if (
							("marker" in B
								? (U = B.marker?.line)
								: "commandStartMarker" in B && (U = B.commandStartMarker?.line),
							!(U === void 0 || U < 0) &&
								((U = this.f.bufferToEditorLineMapping.get(U)), U !== void 0))
						)
							return U + 1;
					}
				};
				(e.$OVc = N),
					(e.$OVc =
						N =
						D =
							Ne(
								[
									j(3, T.$HLb),
									j(4, m.$Li),
									j(5, h.$iIb),
									j(6, l.$gj),
									j(7, d.$6j),
									j(8, v.$Owb),
								],
								N,
							)),
					(0, n.$qLc)(N.ID, N);
				class A extends i.$1c {
					constructor() {
						super(),
							this.D(
								a.$spc.addImplementation(
									105,
									"terminal",
									async (B) => {
										const U = B.get(m.$Li),
											z = B.get(h.$iIb),
											F = B.get(T.$HLb),
											x = await z.getActiveOrCreateInstance();
										await z.revealActiveTerminal();
										const H = x?.xterm;
										H && F.show(U.createInstance(o.$LVc, x, H));
									},
									d.$Kj.or(
										g.TerminalContextKeys.focus,
										d.$Kj.and(
											P.$NLb,
											d.$Kj.equals(
												P.$SLb.key,
												T.AccessibleViewProviderId.Terminal,
											),
										),
									),
								),
							);
					}
				}
				(e.$PVc = A), (0, n.$qLc)(A.ID, A);
				class R extends C.$3X {
					constructor() {
						super({
							id: I.TerminalAccessibilityCommandId.FocusAccessibleBuffer,
							title: (0, w.localize2)(10429, "Focus Accessible Terminal View"),
							precondition: d.$Kj.or(
								g.TerminalContextKeys.processSupported,
								g.TerminalContextKeys.terminalHasBeenCreated,
							),
							keybinding: [
								{
									primary: t.KeyMod.Alt | t.KeyCode.F2,
									secondary: [t.KeyMod.CtrlCmd | t.KeyCode.UpArrow],
									linux: {
										primary: t.KeyMod.Alt | t.KeyCode.F2 | t.KeyMod.Shift,
										secondary: [t.KeyMod.CtrlCmd | t.KeyCode.UpArrow],
									},
									weight: r.KeybindingWeight.WorkbenchContrib,
									when: d.$Kj.and(E.$YK, g.TerminalContextKeys.focus),
								},
							],
						});
					}
					async run(B, ...U) {
						const F = await B.get(h.$iIb).getActiveOrCreateInstance();
						F?.xterm && N.get(F)?.show();
					}
				}
				(0, C.$4X)(R),
					(0, c.$EUc)({
						id: I.TerminalAccessibilityCommandId
							.AccessibleBufferGoToNextCommand,
						title: (0, w.localize2)(
							10430,
							"Accessible Buffer Go to Next Command",
						),
						precondition: d.$Kj.or(
							g.TerminalContextKeys.processSupported,
							g.TerminalContextKeys.terminalHasBeenCreated,
							d.$Kj.and(
								P.$NLb,
								d.$Kj.equals(P.$SLb.key, T.AccessibleViewProviderId.Terminal),
							),
						),
						keybinding: [
							{
								primary: t.KeyMod.Alt | t.KeyCode.DownArrow,
								when: d.$Kj.and(
									d.$Kj.and(
										P.$NLb,
										d.$Kj.equals(
											P.$SLb.key,
											T.AccessibleViewProviderId.Terminal,
										),
									),
								),
								weight: r.KeybindingWeight.WorkbenchContrib + 2,
							},
						],
						run: async (O) => {
							const B = await O.service.activeInstance;
							B && (await N.get(B)?.navigateToCommand(T.NavigationType.Next));
						},
					}),
					(0, c.$EUc)({
						id: I.TerminalAccessibilityCommandId
							.AccessibleBufferGoToPreviousCommand,
						title: (0, w.localize2)(
							10431,
							"Accessible Buffer Go to Previous Command",
						),
						precondition: d.$Kj.and(
							d.$Kj.or(
								g.TerminalContextKeys.processSupported,
								g.TerminalContextKeys.terminalHasBeenCreated,
							),
							d.$Kj.and(
								P.$NLb,
								d.$Kj.equals(P.$SLb.key, T.AccessibleViewProviderId.Terminal),
							),
						),
						keybinding: [
							{
								primary: t.KeyMod.Alt | t.KeyCode.UpArrow,
								when: d.$Kj.and(
									d.$Kj.and(
										P.$NLb,
										d.$Kj.equals(
											P.$SLb.key,
											T.AccessibleViewProviderId.Terminal,
										),
									),
								),
								weight: r.KeybindingWeight.WorkbenchContrib + 2,
							},
						],
						run: async (O) => {
							const B = await O.service.activeInstance;
							B &&
								(await N.get(B)?.navigateToCommand(T.NavigationType.Previous));
						},
					}),
					(0, c.$EUc)({
						id: I.TerminalAccessibilityCommandId.ScrollToBottomAccessibleView,
						title: (0, w.localize2)(10432, "Scroll to Accessible View Bottom"),
						precondition: d.$Kj.and(
							d.$Kj.or(
								g.TerminalContextKeys.processSupported,
								g.TerminalContextKeys.terminalHasBeenCreated,
							),
							d.$Kj.and(
								P.$NLb,
								d.$Kj.equals(P.$SLb.key, T.AccessibleViewProviderId.Terminal),
							),
						),
						keybinding: {
							primary: t.KeyMod.CtrlCmd | t.KeyCode.End,
							linux: { primary: t.KeyMod.Shift | t.KeyCode.End },
							when: P.$SLb.isEqualTo(T.AccessibleViewProviderId.Terminal),
							weight: r.KeybindingWeight.WorkbenchContrib,
						},
						run: (O, B) => {
							const U = B.get(T.$HLb),
								z = U.getLastPosition();
							z && U.setPosition(z, !0);
						},
					}),
					(0, c.$EUc)({
						id: I.TerminalAccessibilityCommandId.ScrollToTopAccessibleView,
						title: (0, w.localize2)(10433, "Scroll to Accessible View Top"),
						precondition: d.$Kj.and(
							d.$Kj.or(
								g.TerminalContextKeys.processSupported,
								g.TerminalContextKeys.terminalHasBeenCreated,
							),
							d.$Kj.and(
								P.$NLb,
								d.$Kj.equals(P.$SLb.key, T.AccessibleViewProviderId.Terminal),
							),
						),
						keybinding: {
							primary: t.KeyMod.CtrlCmd | t.KeyCode.Home,
							linux: { primary: t.KeyMod.Shift | t.KeyCode.Home },
							when: P.$SLb.isEqualTo(T.AccessibleViewProviderId.Terminal),
							weight: r.KeybindingWeight.WorkbenchContrib,
						},
						run: (O, B) => {
							B.get(T.$HLb).setPosition(new b.$hL(1, 1), !0);
						},
					});
			},
		),
		define(
			de[4041],
			he([
				1, 0, 15, 76, 6, 3, 9, 4, 99, 121, 31, 10, 8, 22, 41, 63, 189, 117, 25,
				363, 378, 237, 1765, 166, 2497,
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
			) {
				"use strict";
				var v;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, b.$EUc)({
						id: y.TerminalDeveloperCommandId.ShowTextureAtlas,
						title: (0, d.localize2)(10506, "Show Terminal Texture Atlas"),
						category: m.$ck.Developer,
						precondition: h.$Kj.or(l.TerminalContextKeys.isOpen),
						run: async (I, T) => {
							const P = T.get(c.$ll),
								k = T.get(n.$7rb),
								L = T.get(f.$Vi),
								D = await I.service.activeInstance?.xterm?.textureAtlas;
							if (!D) return;
							const M = L.getWorkspace().folders[0].uri,
								N = C.URI.joinPath(M, "textureAtlas.png"),
								A = document.createElement("canvas");
							(A.width = D.width), (A.height = D.height);
							const R = A.getContext("bitmaprenderer");
							if (!R) return;
							R.transferFromImageBitmap(D);
							const O = await new Promise((B) => A.toBlob(B));
							O &&
								(await P.writeFile(
									N,
									i.$Te.wrap(new Uint8Array(await O.arrayBuffer())),
								),
								k.open(N));
						},
					}),
					(0, b.$EUc)({
						id: y.TerminalDeveloperCommandId.WriteDataToTerminal,
						title: (0, d.localize2)(10507, "Write Data to Terminal"),
						category: m.$ck.Developer,
						run: async (I, T) => {
							const P = T.get(g.$DJ),
								k = await I.service.getActiveOrCreateInstance();
							if (
								(await I.service.revealActiveTerminal(),
								await k.processReady,
								!k.xterm)
							)
								throw new Error(
									"Cannot write data to terminal if xterm isn't initialized",
								);
							const L = await P.input({
								value: "",
								placeHolder: "Enter data, use \\x to escape",
								prompt: (0, d.localize)(10503, null),
							});
							if (!L) return;
							let D = L.replace(
								/\\n/g,
								`
`,
							).replace(/\\r/g, "\r");
							for (;;) {
								const N = D.match(/\\x([0-9a-fA-F]{2})/);
								if (N === null || N.index === void 0 || N.length < 2) break;
								D =
									D.slice(0, N.index) +
									String.fromCharCode(parseInt(N[1], 16)) +
									D.slice(N.index + 4);
							}
							k.xterm._writeText(D);
						},
					}),
					(0, b.$EUc)({
						id: y.TerminalDeveloperCommandId.RecordSession,
						title: (0, d.localize2)(10508, "Record Terminal Session"),
						category: m.$ck.Developer,
						run: async (I, T) => {
							const P = T.get(r.$Vxb),
								k = T.get(u.$ek),
								L = T.get($.$d6b),
								D = new E.$Zc(),
								M = (0, d.localize)(10504, null),
								N = { text: M, name: M, ariaLabel: M, showProgress: !0 },
								A = L.addEntry(N, "recordSession", $.StatusbarAlignment.LEFT);
							D.add(A);
							const R = await I.service.createTerminal();
							return (
								I.service.setActiveInstance(R),
								await I.service.revealActiveTerminal(),
								await Promise.all([R.processReady, R.focusWhenReady(!0)]),
								new Promise((O) => {
									const B = [],
										U = () => {
											const x = JSON.stringify(B, null, 2);
											P.writeText(x), D.dispose(), O();
										},
										z = D.add(new t.$Jh(5e3));
									D.add(
										w.Event.runAndSubscribe(R.onDimensionsChanged, () => {
											B.push({ type: "resize", cols: R.cols, rows: R.rows }),
												z.trigger(U);
										}),
									),
										D.add(
											k.onWillExecuteCommand((x) => {
												B.push({ type: "command", id: x.commandId }),
													z.trigger(U);
											}),
										),
										D.add(
											R.onWillData((x) => {
												B.push({ type: "output", data: x }), z.trigger(U);
											}),
										),
										D.add(
											R.onDidSendText((x) => {
												B.push({ type: "sendText", data: x }), z.trigger(U);
											}),
										),
										D.add(
											R.xterm.raw.onData((x) => {
												B.push({ type: "input", data: x }), z.trigger(U);
											}),
										);
									let F = !1;
									D.add(
										w.Event.runAndSubscribe(
											R.capabilities.onDidAddCapability,
											(x) => {
												if (F) return;
												const H = R.capabilities.get(
													p.TerminalCapability.CommandDetection,
												);
												H &&
													(D.add(
														H.promptInputModel.onDidChangeInput((q) => {
															B.push({
																type: "promptInputChange",
																data: H.promptInputModel.getCombinedString(),
															}),
																z.trigger(U);
														}),
													),
													(F = !0));
											},
										),
									);
								})
							);
						},
					}),
					(0, b.$EUc)({
						id: y.TerminalDeveloperCommandId.RestartPtyHost,
						title: (0, d.localize2)(10509, "Restart Pty Host"),
						category: m.$ck.Developer,
						run: async (I, T) => {
							const P = T.get(o.$YJ),
								k = Array.from(I.instanceService.getRegisteredBackends()),
								L = k.filter((M) => !M.isResponsive),
								D = L.length > 0 ? L : k;
							for (const M of D)
								P.warn(
									`Restarting pty host for authority "${M.remoteAuthority}"`,
								),
									M.restartPtyHost();
						},
					});
				let S = class extends E.$1c {
					static {
						v = this;
					}
					static {
						this.ID = "terminal.devMode";
					}
					static get(T) {
						return T.getContribution(v.ID);
					}
					constructor(T, P, k, L, D) {
						super(),
							(this.j = T),
							(this.m = L),
							(this.n = D),
							(this.b = new E.$2c()),
							(this.f = 0),
							(this.h = this.D(new E.$2c())),
							this.D(
								this.m.onDidChangeConfiguration((M) => {
									M.affectsConfiguration(o.TerminalSettingId.DevMode) &&
										this.q();
								}),
							);
					}
					xtermReady(T) {
						(this.a = T), this.q();
					}
					q() {
						const T = this.r();
						this.a?.raw.element?.classList.toggle("dev-mode", T);
						const P = this.j.capabilities.get(
							p.TerminalCapability.CommandDetection,
						);
						if (T)
							if (P) {
								const k = new Map();
								(this.b.value = (0, E.$Xc)(
									this.j.onDidBlur(() => this.q()),
									this.j.onDidFocus(() => this.q()),
									P.promptInputModel.onDidChangeInput(() => this.q()),
									P.onCommandFinished((L) => {
										const D = `color-${this.f}`,
											M = [];
										if ((k.set(L, M), L.promptStartMarker)) {
											const N = this.j.xterm.raw?.registerDecoration({
												marker: L.promptStartMarker,
											});
											N &&
												(M.push(N),
												N.onRender((A) => {
													(A.textContent = "A"),
														A.classList.add(
															"xterm-sequence-decoration",
															"top",
															"left",
															D,
														);
												}));
										}
										if (L.marker) {
											const N = this.j.xterm.raw?.registerDecoration({
												marker: L.marker,
												x: L.startX,
											});
											N &&
												(M.push(N),
												N.onRender((A) => {
													(A.textContent = "B"),
														A.classList.add(
															"xterm-sequence-decoration",
															"top",
															"right",
															D,
														);
												}));
										}
										if (L.executedMarker) {
											const N = this.j.xterm.raw?.registerDecoration({
												marker: L.executedMarker,
												x: L.executedX,
											});
											N &&
												(M.push(N),
												N.onRender((A) => {
													(A.textContent = "C"),
														A.classList.add(
															"xterm-sequence-decoration",
															"bottom",
															"left",
															D,
														);
												}));
										}
										if (L.endMarker) {
											const N = this.j.xterm.raw?.registerDecoration({
												marker: L.endMarker,
											});
											N &&
												(M.push(N),
												N.onRender((A) => {
													(A.textContent = "D"),
														A.classList.add(
															"xterm-sequence-decoration",
															"bottom",
															"right",
															D,
														);
												}));
										}
										this.f = (this.f + 1) % 2;
									}),
									P.onCommandInvalidated((L) => {
										for (const D of L) {
											const M = k.get(D);
											M && (0, E.$Vc)(M), k.delete(D);
										}
									}),
								)),
									this.s(P);
							} else
								this.b.value = this.j.capabilities.onDidAddCapabilityType(
									(k) => {
										k === p.TerminalCapability.CommandDetection && this.q();
									},
								);
						else this.b.clear();
					}
					r() {
						return this.m.getValue(o.TerminalSettingId.DevMode) || !1;
					}
					s(T) {
						const P = T.promptInputModel;
						if (P) {
							const k = (0, d.localize)(10505, null),
								L = P.cursorIndex === -1;
							(this.g = {
								name: k,
								text: `$(${L ? "loading~spin" : "terminal"}) ${P.getCombinedString()}`,
								ariaLabel: k,
								tooltip: "The detected terminal prompt input",
								kind: "prominent",
							}),
								this.h.value
									? this.h.value.update(this.g)
									: (this.h.value = this.n.addEntry(
											this.g,
											`terminal.promptInput.${this.j.instanceId}`,
											$.StatusbarAlignment.LEFT,
										)),
								this.n.updateEntryVisibility(
									`terminal.promptInput.${this.j.instanceId}`,
									this.j.hasFocus,
								);
						}
					}
				};
				(S = v = Ne([j(3, a.$gj), j(4, $.$d6b)], S)), (0, s.$qLc)(S.ID, S);
			},
		),
		define(
			de[4042],
			he([1, 0, 9, 6, 67, 42, 4, 5, 1654, 363, 145, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				var h;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, r.$GUc)({
						id: u.TerminalCommandId.ShowEnvironmentContributions,
						title: (0, C.localize2)(10513, "Show Environment Contributions"),
						run: async (o, f, b, s) => {
							const l = o.extEnvironmentVariableCollection;
							if (l) {
								const y = s,
									v = b.get(d.$Li).createInstance(p),
									S = b.get(a.$IY),
									I = new Date().getTime(),
									T = y?.workspaceFolder ? ` - ${y.workspaceFolder.name}` : "",
									P = await v.provideTextContent(
										t.URI.from({
											scheme: p.scheme,
											path: `Environment changes${T}`,
											fragment: c(l, y),
											query: `environment-collection-${I}`,
										}),
									);
								P && (await S.openEditor({ resource: P.uri }));
							}
						},
					});
				function c(o, f) {
					let b = `# ${(0, C.localize)(10510, null)}`;
					const s = o.getDescriptionMap(void 0),
						l = o.getDescriptionMap(f);
					for (const [y, $] of o.collections) {
						(b += `

## ${(0, C.localize)(10511, null, y)}`),
							(b += `
`);
						const v = s.get(y);
						v &&
							(b += `
${v}
`);
						const S = l.get(y);
						if (S) {
							const I = v ? ` (${(0, C.localize)(10512, null)})` : "";
							b += `
${S}${I}
`;
						}
						for (const I of $.map.values())
							n(I, f) !== !1 &&
								(b += `
- \`${g(I.type, I.value, I.variable)}\``);
					}
					return b;
				}
				function n(o, f) {
					return !!(
						!o.scope ||
						(o.scope.workspaceFolder &&
							f?.workspaceFolder &&
							o.scope.workspaceFolder.index === f.workspaceFolder.index)
					);
				}
				function g(o, f, b) {
					switch (o) {
						case m.EnvironmentVariableMutatorType.Prepend:
							return `${b}=${f}\${env:${b}}`;
						case m.EnvironmentVariableMutatorType.Append:
							return `${b}=\${env:${b}}${f}`;
						default:
							return `${b}=${f}`;
					}
				}
				let p = class {
					static {
						h = this;
					}
					static {
						this.scheme = "ENVIRONMENT_CHANGES_COLLECTION";
					}
					constructor(f, b) {
						(this.a = b), f.registerTextModelContentProvider(h.scheme, this);
					}
					async provideTextContent(f) {
						const b = this.a.getModel(f);
						return b && !b.isDisposed()
							? b
							: this.a.createModel(
									f.fragment,
									{ languageId: "markdown", onDidChange: i.Event.None },
									f,
									!1,
								);
					}
				};
				p = h = Ne([j(0, E.$MO), j(1, w.$QO)], p);
			},
		),
		define(
			de[4043],
			he([
				1, 0, 6, 27, 3, 4, 8, 20, 5, 43, 130, 107, 363, 378, 145, 237, 469, 513,
				3599, 3159, 3270, 3160, 1766, 178,
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
			) {
				"use strict";
				var v;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, d.$lK)(o.$Doc, b.$rWc, d.InstantiationType.Delayed);
				let S = class extends w.$Zc {
					static {
						v = this;
					}
					static {
						this.ID = "terminal.link";
					}
					static get(P) {
						return P.getContribution(v.ID);
					}
					constructor(P, k, L, D, M) {
						super(),
							(this.h = P),
							(this.j = k),
							(this.m = L),
							(this.n = D),
							(this.q = M),
							(this.c = this.n.createInstance(l.$tWc));
					}
					xtermReady(P) {
						const k = (this.a = this.add(
							this.n.createInstance(
								f.$qWc,
								P.raw,
								this.j,
								this.h.capabilities,
								this.c,
							),
						));
						if ((0, n.$ueb)(this.j)) {
							const L = k.add(
								t.Event.once(this.j.onProcessReady)(() => {
									k.setWidgetManager(this.m), this.delete(L);
								}),
							);
						} else k.setWidgetManager(this.m);
						if (!(0, a.$nIb)(this.h)) {
							for (const L of this.q.linkProviders)
								k.externalProvideLinksCb = L.provideLinks.bind(L, this.h);
							k.add(
								this.q.onDidAddLinkProvider((L) => {
									k.externalProvideLinksCb = L.provideLinks.bind(L, this.h);
								}),
							);
						}
						k.add(
							this.q.onDidRemoveLinkProvider(
								() => (k.externalProvideLinksCb = void 0),
							),
						);
					}
					async showLinkQuickpick(P) {
						this.b ||
							((this.b = this.add(this.n.createInstance(s.$sWc))),
							this.b.onDidRequestMoreLinks(() => {
								this.showLinkQuickpick(!0);
							}));
						const k = await this.r();
						return await this.b.show(this.h, k);
					}
					async r() {
						if (!this.a)
							throw new Error(
								"terminal links are not ready, cannot generate link quick pick",
							);
						return this.a.getLinks();
					}
					async openRecentLink(P) {
						if (!this.a)
							throw new Error(
								"terminal links are not ready, cannot open a link",
							);
						this.a.openRecentLink(P);
					}
				};
				(S = v = Ne([j(3, m.$Li), j(4, o.$Doc)], S)), (0, c.$qLc)(S.ID, S, !0);
				const I = p.$hUc.actionCategory;
				(0, h.$GUc)({
					id: y.TerminalLinksCommandId.OpenDetectedLink,
					title: (0, E.localize2)(10528, "Open Detected Link..."),
					f1: !0,
					category: I,
					precondition: g.TerminalContextKeys.terminalHasBeenCreated,
					keybinding: [
						{
							primary: i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.KeyO,
							weight: r.KeybindingWeight.WorkbenchContrib + 1,
							when: g.TerminalContextKeys.focus,
						},
						{
							primary: i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.KeyG,
							weight: r.KeybindingWeight.WorkbenchContrib + 1,
							when: C.$Kj.and(
								u.$NLb,
								C.$Kj.equals(u.$SLb.key, $.AccessibleViewProviderId.Terminal),
							),
						},
					],
					run: (T) => S.get(T)?.showLinkQuickpick(),
				}),
					(0, h.$GUc)({
						id: y.TerminalLinksCommandId.OpenWebLink,
						title: (0, E.localize2)(10529, "Open Last URL Link"),
						metadata: {
							description: (0, E.localize2)(
								10530,
								"Opens the last detected URL/URI link in the terminal",
							),
						},
						f1: !0,
						category: I,
						precondition: g.TerminalContextKeys.terminalHasBeenCreated,
						run: (T) => S.get(T)?.openRecentLink("url"),
					}),
					(0, h.$GUc)({
						id: y.TerminalLinksCommandId.OpenFileLink,
						title: (0, E.localize2)(10531, "Open Last Local File Link"),
						f1: !0,
						category: I,
						precondition: g.TerminalContextKeys.terminalHasBeenCreated,
						run: (T) => S.get(T)?.openRecentLink("localFile"),
					});
			},
		),
		define(
			de[4044],
			he([
				1, 0, 27, 3, 4, 20, 5, 43, 363, 378, 237, 998, 3315, 3164, 3332, 2499,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				var g;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, E.$lK)(a.$Eoc, n.$OWc, E.InstantiationType.Delayed);
				let p = class extends i.$Zc {
					static {
						g = this;
					}
					static {
						this.ID = "quickFix";
					}
					static get(b) {
						return b.getContribution(g.ID);
					}
					get addon() {
						return this.a;
					}
					constructor(b, s, l, y) {
						super(), (this.b = b), (this.c = y);
					}
					xtermReady(b) {
						(this.a = this.c.createInstance(
							h.$uWc,
							void 0,
							this.b.capabilities,
						)),
							b.raw.loadAddon(this.a),
							this.add(
								this.a.onDidRequestRerunCommand((s) =>
									this.b.runCommand(s.command, s.shouldExecute || !1),
								),
							);
						for (const s of [
							(0, c.$IWc)(),
							(0, c.$HWc)(),
							(0, c.$JWc)((l, y) => this.b.freePortKillProcess(l, y)),
							(0, c.$GWc)(),
							(0, c.$KWc)(),
							(0, c.$LWc)(),
							(0, c.$NWc)(),
							(0, c.$MWc)(),
						])
							this.a.registerCommandFinishedListener(s);
					}
				};
				(p = g = Ne([j(3, C.$Li)], p)), (0, r.$qLc)(p.ID, p);
				var o;
				(function (f) {
					f.ShowQuickFixes = "workbench.action.terminal.showQuickFixes";
				})(o || (o = {})),
					(0, m.$GUc)({
						id: o.ShowQuickFixes,
						title: (0, w.localize2)(10558, "Show Terminal Quick Fixes"),
						precondition: u.TerminalContextKeys.focus,
						keybinding: {
							primary: t.KeyMod.CtrlCmd | t.KeyCode.Period,
							weight: d.KeybindingWeight.WorkbenchContrib,
						},
						run: (f) => p.get(f)?.addon?.showMenu(),
					});
			},
		),
		define(
			de[4045],
			he([
				1, 0, 7, 15, 6, 27, 3, 12, 4, 10, 8, 5, 43, 21, 117, 1202, 363, 378,
				145, 237, 3655, 1768, 809,
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
				var $;
				Object.defineProperty(e, "__esModule", { value: !0 }), (t = mt(t));
				var v;
				(function (I) {
					I.CachedPwshCommandsStorageKey = "terminal.suggest.pwshCommands";
				})(v || (v = {}));
				let S = class extends C.$Zc {
					static {
						$ = this;
					}
					static {
						this.ID = "terminal.suggest";
					}
					static get(T) {
						return T.getContribution($.ID);
					}
					get addon() {
						return this.b.value;
					}
					static {
						this.m = new Set();
					}
					constructor(T, P, k, L, D, M, N) {
						if (
							(super(),
							(this.n = T),
							(this.q = L),
							(this.r = D),
							(this.s = M),
							(this.t = N),
							(this.b = new C.$2c()),
							(this.h = new Set(
								b.TerminalContextKeys.suggestWidgetVisible.key,
							)),
							this.add((0, C.$Yc)(() => this.b?.dispose())),
							(this.j = b.TerminalContextKeys.suggestWidgetVisible.bindTo(
								this.q,
							)),
							$.m.size === 0)
						) {
							const A = this.t.get(
								v.CachedPwshCommandsStorageKey,
								c.StorageScope.APPLICATION,
								void 0,
							);
							if (A !== void 0) {
								const R = JSON.parse(A);
								for (const O of R) $.m.add(O);
							}
						}
						this.add(
							this.r.onDidChangeConfiguration((A) => {
								A.affectsConfiguration(y.TerminalSuggestSettingId.Enabled) &&
									this.clearSuggestCache();
							}),
						);
					}
					xtermReady(T) {
						(this.a = T.raw),
							this.r.getValue(y.$fIb).enabled &&
								this.add(
									T.raw.parser.registerOscHandler(
										g.ShellIntegrationOscPs.VSCode,
										(L) => this.u(L),
									),
								);
					}
					u(T) {
						if (!this.a) return !1;
						const [P, ...k] = T.split(";");
						switch (P) {
							case s.VSCodeSuggestOscPt.CompletionsPwshCommands:
								return this.w(this.a, T, P, k);
						}
						return !1;
					}
					async w(T, P, k, L) {
						const D = L[0],
							M = JSON.parse(P.slice(k.length + D.length + 2)),
							N = (0, s.$TWc)(M),
							A = $.m;
						A.clear();
						for (const R of N) A.add(R);
						return (
							this.t.store(
								v.CachedPwshCommandsStorageKey,
								JSON.stringify(Array.from(A.values())),
								c.StorageScope.APPLICATION,
								c.StorageTarget.MACHINE,
							),
							!0
						);
					}
					clearSuggestCache() {
						$.m.clear(),
							this.t.remove(
								v.CachedPwshCommandsStorageKey,
								c.StorageScope.APPLICATION,
							);
					}
					xtermOpen(T) {
						this.r.getValue(y.$fIb).enabled &&
							(this.add(
								w.Event.runAndSubscribe(
									this.n.onDidChangeShellType,
									async () => {
										this.y(T.raw);
									},
								),
							),
							this.add(
								this.q.onDidChangeContext((L) => {
									L.affectsSome(this.h) && this.y(T.raw);
								}),
							),
							this.add(
								this.r.onDidChangeConfiguration((L) => {
									L.affectsConfiguration(
										n.TerminalSettingId.SendKeybindingsToShell,
									) && this.y(T.raw);
								}),
							));
					}
					y(T) {
						if (
							this.r.getValue(f.$ieb).sendKeybindingsToShell ||
							this.n.shellType !== "pwsh"
						) {
							this.b.clear();
							return;
						}
						if (this.j) {
							const k = (this.b.value = this.s.createInstance(
								s.$SWc,
								$.m,
								this.n.capabilities,
								this.j,
							));
							if (
								(T.loadAddon(k),
								k.setPanel(t.$Egb(T.element, "panel")),
								k.setScreen(T.element.querySelector(".xterm-screen")),
								this.add(this.n.onDidBlur(() => k.hideSuggestWidget())),
								this.add(
									k.onAcceptedCompletion(async (L) => {
										this.n.focus(), this.n.sendText(L, !1);
									}),
								),
								!d.$l)
							) {
								let L;
								this.add(
									k.onDidRequestCompletions(() => {
										(L = new i.$Mh(2e3)), this.n.pauseInputEvents(L);
									}),
								),
									this.add(
										k.onDidReceiveCompletions(() => {
											L?.open(), (L = void 0);
										}),
									);
							}
						}
					}
				};
				(S = $ = Ne([j(3, u.$6j), j(4, r.$gj), j(5, a.$Li), j(6, c.$lq)], S)),
					(0, o.$qLc)(S.ID, S),
					(0, p.$GUc)({
						id: l.TerminalSuggestCommandId.SelectPrevSuggestion,
						title: (0, m.localize2)(10578, "Select the Previous Suggestion"),
						f1: !1,
						precondition: u.$Kj.and(
							u.$Kj.or(
								b.TerminalContextKeys.processSupported,
								b.TerminalContextKeys.terminalHasBeenCreated,
							),
							b.TerminalContextKeys.focus,
							b.TerminalContextKeys.isOpen,
							b.TerminalContextKeys.suggestWidgetVisible,
						),
						keybinding: {
							primary: E.KeyCode.UpArrow,
							weight: h.KeybindingWeight.WorkbenchContrib + 1,
						},
						run: (I) => S.get(I)?.addon?.selectPreviousSuggestion(),
					}),
					(0, p.$GUc)({
						id: l.TerminalSuggestCommandId.SelectPrevPageSuggestion,
						title: (0, m.localize2)(
							10579,
							"Select the Previous Page Suggestion",
						),
						f1: !1,
						precondition: u.$Kj.and(
							u.$Kj.or(
								b.TerminalContextKeys.processSupported,
								b.TerminalContextKeys.terminalHasBeenCreated,
							),
							b.TerminalContextKeys.focus,
							b.TerminalContextKeys.isOpen,
							b.TerminalContextKeys.suggestWidgetVisible,
						),
						keybinding: {
							primary: E.KeyCode.PageUp,
							weight: h.KeybindingWeight.WorkbenchContrib + 1,
						},
						run: (I) => S.get(I)?.addon?.selectPreviousPageSuggestion(),
					}),
					(0, p.$GUc)({
						id: l.TerminalSuggestCommandId.SelectNextSuggestion,
						title: (0, m.localize2)(10580, "Select the Next Suggestion"),
						f1: !1,
						precondition: u.$Kj.and(
							u.$Kj.or(
								b.TerminalContextKeys.processSupported,
								b.TerminalContextKeys.terminalHasBeenCreated,
							),
							b.TerminalContextKeys.focus,
							b.TerminalContextKeys.isOpen,
							b.TerminalContextKeys.suggestWidgetVisible,
						),
						keybinding: {
							primary: E.KeyCode.DownArrow,
							weight: h.KeybindingWeight.WorkbenchContrib + 1,
						},
						run: (I) => S.get(I)?.addon?.selectNextSuggestion(),
					}),
					(0, p.$GUc)({
						id: l.TerminalSuggestCommandId.SelectNextPageSuggestion,
						title: (0, m.localize2)(10581, "Select the Next Page Suggestion"),
						f1: !1,
						precondition: u.$Kj.and(
							u.$Kj.or(
								b.TerminalContextKeys.processSupported,
								b.TerminalContextKeys.terminalHasBeenCreated,
							),
							b.TerminalContextKeys.focus,
							b.TerminalContextKeys.isOpen,
							b.TerminalContextKeys.suggestWidgetVisible,
						),
						keybinding: {
							primary: E.KeyCode.PageDown,
							weight: h.KeybindingWeight.WorkbenchContrib + 1,
						},
						run: (I) => S.get(I)?.addon?.selectNextPageSuggestion(),
					}),
					(0, p.$GUc)({
						id: l.TerminalSuggestCommandId.AcceptSelectedSuggestion,
						title: (0, m.localize2)(10582, "Accept Selected Suggestion"),
						f1: !1,
						precondition: u.$Kj.and(
							u.$Kj.or(
								b.TerminalContextKeys.processSupported,
								b.TerminalContextKeys.terminalHasBeenCreated,
							),
							b.TerminalContextKeys.focus,
							b.TerminalContextKeys.isOpen,
							b.TerminalContextKeys.suggestWidgetVisible,
						),
						keybinding: {
							primary: E.KeyCode.Tab,
							weight: h.KeybindingWeight.WorkbenchContrib + 1,
						},
						run: (I) => S.get(I)?.addon?.acceptSelectedSuggestion(),
					}),
					(0, p.$GUc)({
						id: l.TerminalSuggestCommandId.AcceptSelectedSuggestionEnter,
						title: (0, m.localize2)(
							10583,
							"Accept Selected Suggestion (Enter)",
						),
						f1: !1,
						precondition: u.$Kj.and(
							u.$Kj.or(
								b.TerminalContextKeys.processSupported,
								b.TerminalContextKeys.terminalHasBeenCreated,
							),
							b.TerminalContextKeys.focus,
							b.TerminalContextKeys.isOpen,
							b.TerminalContextKeys.suggestWidgetVisible,
						),
						keybinding: {
							primary: E.KeyCode.Enter,
							weight: h.KeybindingWeight.WorkbenchContrib + 1,
							when: u.$Kj.notEquals(
								`config.${y.TerminalSuggestSettingId.RunOnEnter}`,
								"ignore",
							),
						},
						run: (I) => S.get(I)?.addon?.acceptSelectedSuggestion(void 0, !0),
					}),
					(0, p.$GUc)({
						id: l.TerminalSuggestCommandId.HideSuggestWidget,
						title: (0, m.localize2)(10584, "Hide Suggest Widget"),
						f1: !1,
						precondition: u.$Kj.and(
							u.$Kj.or(
								b.TerminalContextKeys.processSupported,
								b.TerminalContextKeys.terminalHasBeenCreated,
							),
							b.TerminalContextKeys.focus,
							b.TerminalContextKeys.isOpen,
							b.TerminalContextKeys.suggestWidgetVisible,
						),
						keybinding: {
							primary: E.KeyCode.Escape,
							weight: h.KeybindingWeight.WorkbenchContrib + 1,
						},
						run: (I) => S.get(I)?.addon?.hideSuggestWidget(),
					}),
					(0, p.$GUc)({
						id: l.TerminalSuggestCommandId.ClearSuggestCache,
						title: (0, m.localize2)(10585, "Clear Suggest Cache"),
						f1: !0,
						run: (I) => S.get(I)?.clearSuggestCache(),
					});
			},
		),
		define(
			de[4046],
			he([1, 0, 6, 203, 3, 12, 117, 378, 10, 363, 4, 28, 1859, 1770]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				var n;
				Object.defineProperty(e, "__esModule", { value: !0 });
				let g = class extends w.$1c {
					static {
						n = this;
					}
					static {
						this.ID = "terminal.mouseWheelZoom";
					}
					static get(o) {
						return o.getContribution(n.ID);
					}
					constructor(o, f, b, s) {
						super(), (this.b = s), (this.a = this.D(new w.$2c()));
					}
					xtermOpen(o) {
						this.D(
							t.Event.runAndSubscribe(this.b.onDidChangeConfiguration, (f) => {
								(!f ||
									f.affectsConfiguration(
										c.TerminalZoomSettingId.MouseWheelZoom,
									)) &&
									(this.b.getValue(c.TerminalZoomSettingId.MouseWheelZoom)
										? this.g(o.raw)
										: this.a.clear());
							}),
						);
					}
					f() {
						return this.b.getValue(C.TerminalSettingId.FontSize);
					}
					g(o) {
						const f = i.$3hb.INSTANCE;
						let b = 0,
							s = this.f(),
							l = !1,
							y = 0;
						o.attachCustomWheelEventHandler(($) => {
							const v = $;
							if (f.isPhysicalMouseWheel()) {
								if (this.h(v)) {
									const S = v.deltaY > 0 ? -1 : 1;
									return (
										this.b.updateValue(
											C.TerminalSettingId.FontSize,
											this.f() + S,
										),
										v.preventDefault(),
										v.stopPropagation(),
										!1
									);
								}
							} else if (
								(Date.now() - b > 50 &&
									((s = this.f()), (l = this.h(v)), (y = 0)),
								(b = Date.now()),
								(y += v.deltaY),
								l)
							) {
								const S = Math.ceil(Math.abs(y / 5)),
									I = y > 0 ? -1 : 1,
									T = S * I;
								return (
									this.b.updateValue(C.TerminalSettingId.FontSize, s + T),
									(y += v.deltaY),
									v.preventDefault(),
									v.stopPropagation(),
									!1
								);
							}
							return !0;
						}),
							(this.a.value = (0, w.$Yc)(() =>
								o.attachCustomWheelEventHandler(() => !0),
							));
					}
					h(o) {
						return E.$m
							? (o.metaKey || o.ctrlKey) && !o.shiftKey && !o.altKey
							: o.ctrlKey && !o.metaKey && !o.shiftKey && !o.altKey;
					}
				};
				(g = n = Ne([j(3, m.$gj)], g)),
					(0, d.$qLc)(g.ID, g, !0),
					(0, r.$EUc)({
						id: c.TerminalZoomCommandId.FontZoomIn,
						title: (0, u.localize2)(10605, "Increase Font Size"),
						run: async (p, o) => {
							const f = o.get(m.$gj),
								b = f.getValue(C.TerminalSettingId.FontSize);
							(0, a.$pg)(b) &&
								(await f.updateValue(C.TerminalSettingId.FontSize, b + 1));
						},
					}),
					(0, r.$EUc)({
						id: c.TerminalZoomCommandId.FontZoomOut,
						title: (0, u.localize2)(10606, "Decrease Font Size"),
						run: async (p, o) => {
							const f = o.get(m.$gj),
								b = f.getValue(C.TerminalSettingId.FontSize);
							(0, a.$pg)(b) &&
								(await f.updateValue(C.TerminalSettingId.FontSize, b - 1));
						},
					}),
					(0, r.$EUc)({
						id: c.TerminalZoomCommandId.FontZoomReset,
						title: (0, u.localize2)(10607, "Reset Font Size"),
						run: async (p, o) => {
							await o
								.get(m.$gj)
								.updateValue(C.TerminalSettingId.FontSize, h.$HVc);
						},
					});
			},
		),
		define(
			de[4047],
			he([1, 0, 4, 10, 49, 5, 21, 32, 35, 25, 239, 60, 353, 53, 96]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$EMc = void 0);
				let g = class extends u.$ZSb {
					constructor(o, f, b, s, l, y, $, v, S, I) {
						super(
							h.Testing.ViewletId,
							{ mergeViewWithContainerWhenSingleView: !0 },
							b,
							$,
							o,
							s,
							f,
							v,
							l,
							y,
							S,
							I,
						);
					}
					create(o) {
						super.create(o), o.classList.add("testing-view-pane");
					}
					getOptimalWidth() {
						return 400;
					}
					getTitle() {
						return (0, t.localize)(10814, null);
					}
				};
				(e.$EMc = g),
					(e.$EMc = g =
						Ne(
							[
								j(0, n.$mEb),
								j(1, d.$km),
								j(2, E.$Li),
								j(3, w.$Xxb),
								j(4, m.$iP),
								j(5, C.$lq),
								j(6, i.$gj),
								j(7, c.$q2),
								j(8, r.$Vi),
								j(9, a.$K1),
							],
							g,
						));
			},
		),
		define(
			de[4048],
			he([
				1, 0, 46, 4, 11, 31, 81, 8, 22, 102, 20, 41, 84, 30, 239, 55, 60, 554,
				3841, 470, 3842, 3185, 3846, 3845, 1909, 4047, 443, 353, 630, 1001, 259,
				420, 381, 1774, 379, 3271, 3186, 380, 1268, 1772, 812, 52, 89, 1908,
				3182,
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
					(0, u.$lK)(A.$sqc, R.$LLc, u.InstantiationType.Delayed),
					(0, u.$lK)(N.$Gqc, N.$Jqc, u.InstantiationType.Delayed),
					(0, u.$lK)(D.$Bqc, D.$Eqc, u.InstantiationType.Delayed),
					(0, u.$lK)(P.$TJc, P.$UJc, u.InstantiationType.Delayed),
					(0, u.$lK)(U.$MLc, U.$NLc, u.InstantiationType.Delayed),
					(0, u.$lK)(M.$Kqc, M.$Lqc, u.InstantiationType.Delayed),
					(0, u.$lK)(k.$xLc, k.$yLc, u.InstantiationType.Delayed),
					(0, u.$lK)(F.$ZKc, $.$BLc, u.InstantiationType.Delayed),
					(0, u.$lK)(z.$YKc, l.$4Kc, u.InstantiationType.Delayed);
				const V = c.$Io
						.as(p.Extensions.ViewContainersRegistry)
						.registerViewContainer(
							{
								id: T.Testing.ViewletId,
								title: (0, i.localize2)(10749, "Testing"),
								ctorDescriptor: new r.$Ji(S.$EMc),
								icon: b.$sKc,
								alwaysUseContainerInfo: !0,
								order: 6,
								openCommandActionDescriptor: {
									id: T.Testing.ViewletId,
									mnemonicTitle: (0, i.localize)(10746, null),
									order: 4,
								},
								hideIfEmpty: !0,
							},
							p.ViewContainerLocation.Sidebar,
						),
					G = c.$Io
						.as(p.Extensions.ViewContainersRegistry)
						.registerViewContainer(
							{
								id: T.Testing.ResultsPanelId,
								title: (0, i.localize2)(10750, "Test Results"),
								icon: b.$tKc,
								ctorDescriptor: new r.$Ji(n.$ZSb, [
									T.Testing.ResultsPanelId,
									{ mergeViewWithContainerWhenSingleView: !0 },
								]),
								hideIfEmpty: !0,
								order: 3,
							},
							p.ViewContainerLocation.Panel,
							{ doNotRegisterOpenCommand: !0 },
						),
					K = c.$Io.as(p.Extensions.ViewsRegistry);
				K.registerViews(
					[
						{
							id: T.Testing.ResultsViewId,
							name: (0, i.localize2)(10751, "Test Results"),
							containerIcon: b.$tKc,
							canToggleVisibility: !1,
							canMoveView: !0,
							when: B.TestingContextKeys.hasAnyResults.isEqualTo(!0),
							ctorDescriptor: new r.$Ji($.$DLc),
						},
					],
					G,
				),
					K.registerViewWelcomeContent(T.Testing.ExplorerViewId, {
						content: (0, i.localize)(10747, null),
					}),
					K.registerViewWelcomeContent(T.Testing.ExplorerViewId, {
						content:
							"[" +
							(0, i.localize)(10748, null) +
							`](command:${T.TestCommandId.SearchForTestExtension})`,
						order: 10,
					}),
					K.registerViews(
						[
							{
								id: T.Testing.ExplorerViewId,
								name: (0, i.localize2)(10752, "Test Explorer"),
								ctorDescriptor: new r.$Ji(y.$DMc),
								canToggleVisibility: !0,
								canMoveView: !0,
								weight: 80,
								order: -999,
								containerIcon: b.$sKc,
								when: d.$Kj.greater(B.TestingContextKeys.providerCount.key, 0),
							},
							{
								id: T.Testing.CoverageViewId,
								name: (0, i.localize2)(10753, "Test Coverage"),
								ctorDescriptor: new r.$Ji(s.$TKc),
								canToggleVisibility: !0,
								canMoveView: !0,
								weight: 80,
								order: -998,
								containerIcon: b.$sKc,
								when: B.TestingContextKeys.isTestCoverageOpen,
							},
						],
						V,
					),
					q.$yMc.forEach(w.$4X),
					(0, w.$4X)($.$ILc),
					(0, w.$4X)($.$GLc),
					(0, w.$4X)($.$FLc),
					(0, w.$4X)($.$ELc),
					(0, w.$4X)($.$JLc),
					(0, w.$4X)($.$HLc),
					c.$Io
						.as(g.Extensions.Workbench)
						.registerWorkbenchContribution(O.$FMc, x.LifecyclePhase.Restored),
					c.$Io
						.as(g.Extensions.Workbench)
						.registerWorkbenchContribution($.$BLc, x.LifecyclePhase.Eventually),
					c.$Io
						.as(g.Extensions.Workbench)
						.registerWorkbenchContribution(v.$AMc, x.LifecyclePhase.Eventually),
					(0, t.$qtb)(
						T.Testing.OutputPeekContributionId,
						$.$CLc,
						t.EditorContributionInstantiation.AfterFirstRender,
					),
					(0, t.$qtb)(
						T.Testing.DecorationsContributionId,
						l.$5Kc,
						t.EditorContributionInstantiation.AfterFirstRender,
					),
					(0, t.$qtb)(
						T.Testing.CoverageDecorationsContributionId,
						f.$QKc,
						t.EditorContributionInstantiation.Eventually,
					),
					E.$fk.registerCommand({
						id: "_revealTestInExplorer",
						handler: async (J, W, X) => {
							(J.get(k.$xLc).reveal.value = typeof W == "string" ? W : W.extId),
								J.get(H.$HMb).openView(T.Testing.ExplorerViewId, X);
						},
					}),
					E.$fk.registerCommand({
						id: "vscode.peekTestError",
						handler: async (J, W) => {
							const X = J.get(M.$Kqc).getStateById(W);
							if (!X) return !1;
							const [Y, ie] = X,
								ne = J.get(F.$ZKc);
							if (ne.tryPeekFirstError(Y, ie)) return !0;
							for (const ee of Y.tests)
								if (
									L.$k4.compare(ie.item.extId, ee.item.extId) ===
										L.TestPosition.IsChild &&
									ne.tryPeekFirstError(Y, ee)
								)
									return !0;
							return !1;
						},
					}),
					E.$fk.registerCommand({
						id: "vscode.revealTest",
						handler: async (J, W) => {
							const X = J.get(A.$sqc).collection.getNodeById(W);
							if (!X) return;
							const Y = J.get(E.$ek),
								ie = J.get(m.$ll),
								ne = J.get(a.$7rb),
								{ range: ee, uri: _ } = X.item;
							if (!_) return;
							const te =
								J.get(z.$YKc).getDecoratedTestPosition(_, W) ||
								ee?.getStartPosition();
							(J.get(k.$xLc).reveal.value = W), J.get(F.$ZKc).closeAllPeeks();
							let Q = !0;
							try {
								(await ie.stat(_)).isFile || (Q = !1);
							} catch {}
							if (!Q) {
								await Y.executeCommand(o.$VUb, _);
								return;
							}
							await ne.open(
								te ? _.with({ fragment: `L${te.lineNumber}:${te.column}` }) : _,
							);
						},
					}),
					E.$fk.registerCommand({
						id: "vscode.runTestsById",
						handler: async (J, W, ...X) => {
							const Y = J.get(A.$sqc);
							await (0, q.$lMc)(
								J.get(A.$sqc).collection,
								J.get(h.$8N),
								X,
								(ie) => Y.runTests({ group: W, tests: ie }),
							);
						},
					}),
					c.$Io.as(C.$No.Configuration).registerConfiguration(I.$QJc);
			},
		),
		define(
			de[4049],
			he([
				1, 0, 60, 4, 854, 5, 150, 11, 8, 9, 18, 522, 19, 7, 39, 49, 10, 41, 35,
				32, 40, 14, 129, 44, 72, 1278,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$c1c = void 0),
					(c = mt(c));
				let I = class extends w.$Ptc {
					constructor(P, k, L, D, M, N, A, R, O, B, U, z, F, x, H, q, V, G) {
						super(P, L, D, M, N, A, R, O, B, U, z, F, G),
							(this.ab = k),
							(this.sb = x),
							(this.cc = H),
							(this.dc = q),
							(this.ec = V),
							this.D(this.sb.onDidChangeConflicts(() => this.f.refresh())),
							this.ic();
					}
					n(P) {
						super.n(c.$fhb(P, c.$("")));
						const k = this;
						(this.f.message = (0, i.localize)(11320, null)),
							(this.f.dataProvider = {
								getChildren() {
									return k.gc();
								},
							});
					}
					async gc() {
						const P = [],
							k = this.sb.conflicts
								.map((D) =>
									D.conflicts.map((M) => ({
										...M,
										syncResource: D.syncResource,
										profile: D.profile,
									})),
								)
								.flat()
								.sort((D, M) =>
									D.profile.id === M.profile.id
										? 0
										: D.profile.isDefault
											? -1
											: M.profile.isDefault
												? 1
												: D.profile.name.localeCompare(M.profile.name),
								),
							L = [];
						for (const D of k) {
							let M =
								L[L.length - 1]?.[0].id === D.profile.id
									? L[L.length - 1][1]
									: void 0;
							M || L.push([D.profile, (M = [])]), M.push(D);
						}
						for (const [D, M] of L) {
							const N = [];
							for (const A of M) {
								const R = JSON.stringify(A),
									O = {
										handle: R,
										resourceUri: A.remoteResource,
										label: {
											label: (0, h.$kh)(A.remoteResource),
											strikethrough:
												A.mergeState === C.MergeState.Accepted &&
												(A.localChange === C.Change.Deleted ||
													A.remoteChange === C.Change.Deleted),
										},
										description: (0, a.$Oxc)(A.syncResource),
										collapsibleState: t.TreeItemCollapsibleState.None,
										command: {
											id: "workbench.actions.sync.openConflicts",
											title: "",
											arguments: [{ $treeViewId: "", $treeItemHandle: R }],
										},
										contextValue: "sync-conflict-resource",
									};
								N.push(O);
							}
							P.push({
								handle: D.id,
								label: { label: D.name },
								collapsibleState: t.TreeItemCollapsibleState.Expanded,
								children: N,
							});
						}
						return L.length === 1 && L[0][0].isDefault
							? (P[0].children ?? [])
							: P;
					}
					hc(P) {
						const k = JSON.parse(P);
						return {
							syncResource: k.syncResource,
							profile: (0, y.$Yl)(k.profile, this.ec.profilesHome.scheme),
							localResource: r.URI.revive(k.localResource),
							remoteResource: r.URI.revive(k.remoteResource),
							baseResource: r.URI.revive(k.baseResource),
							previewResource: r.URI.revive(k.previewResource),
							acceptedResource: r.URI.revive(k.acceptedResource),
							localChange: k.localChange,
							remoteChange: k.remoteChange,
							mergeState: k.mergeState,
						};
					}
					ic() {
						const P = this;
						this.D(
							(0, d.$4X)(
								class extends d.$3X {
									constructor() {
										super({
											id: "workbench.actions.sync.openConflicts",
											title: (0, i.localize)(11321, null),
										});
									}
									async run(L, D) {
										const M = P.hc(D.$treeItemHandle);
										return P.open(M);
									}
								},
							),
						),
							this.D(
								(0, d.$4X)(
									class extends d.$3X {
										constructor() {
											super({
												id: "workbench.actions.sync.acceptRemote",
												title: (0, i.localize)(11322, null),
												icon: l.$ak.cloudDownload,
												menu: {
													id: d.$XX.ViewItemContext,
													when: m.$Kj.and(
														m.$Kj.equals("view", a.$1xc),
														m.$Kj.equals("viewItem", "sync-conflict-resource"),
													),
													group: "inline",
													order: 1,
												},
											});
										}
										async run(L, D) {
											const M = P.hc(D.$treeItemHandle);
											await P.cc.accept(
												{ syncResource: M.syncResource, profile: M.profile },
												M.remoteResource,
												void 0,
												P.dc.isEnabled(),
											);
										}
									},
								),
							),
							this.D(
								(0, d.$4X)(
									class extends d.$3X {
										constructor() {
											super({
												id: "workbench.actions.sync.acceptLocal",
												title: (0, i.localize)(11323, null),
												icon: l.$ak.cloudUpload,
												menu: {
													id: d.$XX.ViewItemContext,
													when: m.$Kj.and(
														m.$Kj.equals("view", a.$1xc),
														m.$Kj.equals("viewItem", "sync-conflict-resource"),
													),
													group: "inline",
													order: 2,
												},
											});
										}
										async run(L, D) {
											const M = P.hc(D.$treeItemHandle);
											await P.cc.accept(
												{ syncResource: M.syncResource, profile: M.profile },
												M.localResource,
												void 0,
												P.dc.isEnabled(),
											);
										}
									},
								),
							);
					}
					async open(P) {
						if (
							!this.sb.conflicts.some(({ conflicts: D }) =>
								D.some(({ localResource: M }) =>
									(0, h.$gh)(M, P.localResource),
								),
							)
						)
							return;
						const k = (0, i.localize)(
								11324,
								null,
								(0, h.$kh)(P.remoteResource),
							),
							L = (0, i.localize)(11325, null, (0, h.$kh)(P.remoteResource));
						await this.ab.openEditor({
							input1: {
								resource: P.remoteResource,
								label: (0, i.localize)(11326, null),
								description: k,
							},
							input2: {
								resource: P.localResource,
								label: (0, i.localize)(11327, null),
								description: L,
							},
							base: { resource: P.baseResource },
							result: { resource: P.previewResource },
							options: {
								preserveFocus: !0,
								revealIfVisible: !0,
								pinned: !0,
								override: $.$b1.id,
							},
						});
					}
				};
				(e.$c1c = I),
					(e.$c1c = I =
						Ne(
							[
								j(1, u.$IY),
								j(2, n.$uZ),
								j(3, g.$Xxb),
								j(4, p.$gj),
								j(5, m.$6j),
								j(6, t.$K1),
								j(7, E.$Li),
								j(8, o.$7rb),
								j(9, f.$iP),
								j(10, b.$km),
								j(11, s.$4N),
								j(12, v.$Uyb),
								j(13, C.$5Rb),
								j(14, a.$Nxc),
								j(15, C.$4Rb),
								j(16, y.$Xl),
								j(17, S.$QMb),
							],
							I,
						));
			},
		),
		define(
			de[4050],
			he([
				1, 0, 30, 60, 4, 102, 854, 5, 150, 11, 8, 9, 18, 35, 275, 57, 6, 3, 14,
				50, 522, 965, 63, 40, 19, 247, 22, 113, 68, 31, 129, 4049,
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
					(e.$d1c = void 0);
				let M = class extends o.$1c {
					constructor(F, x, H, q, V) {
						super(),
							(this.f = x),
							(this.g = H),
							(this.h = q),
							(this.j = V),
							this.n(F);
					}
					n(F) {
						this.q(F),
							this.s(F, !0),
							this.r(F),
							this.s(F, !1),
							this.w(F),
							this.t(F);
					}
					q(F) {
						const x = t.$Io.as(i.Extensions.ViewsRegistry),
							H = (0, w.localize2)(11355, "Conflicts"),
							q = {
								id: s.$1xc,
								name: H,
								ctorDescriptor: new E.$Ji(D.$c1c),
								when: u.$Kj.and(s.$Vxc, s.$Wxc),
								canToggleVisibility: !1,
								canMoveView: !1,
								treeView: this.f.createInstance(C.$Stc, s.$1xc, H.value),
								collapsed: !1,
								order: 100,
							};
						x.registerViews([q], F);
					}
					r(F) {
						const x = "workbench.views.sync.machines",
							H = (0, w.localize2)(11356, "Synced Machines"),
							q = this.f.createInstance(C.$Stc, x, H.value),
							V = this.f.createInstance(B, q);
						(q.showRefreshAction = !0),
							(q.canSelectMany = !0),
							(q.dataProvider = V),
							this.D(
								p.Event.any(
									this.h.onDidChange,
									this.j.onDidResetRemote,
								)(() => q.refresh()),
							);
						const G = t.$Io.as(i.Extensions.ViewsRegistry),
							K = {
								id: x,
								name: H,
								ctorDescriptor: new E.$Ji(C.$Ptc),
								when: u.$Kj.and(
									s.$Rxc.notEqualsTo(m.SyncStatus.Uninitialized),
									s.$Txc.isEqualTo(s.AccountStatus.Available),
									s.$Uxc,
								),
								canToggleVisibility: !0,
								canMoveView: !1,
								treeView: q,
								collapsed: !1,
								order: 300,
							};
						G.registerViews([K], F),
							this.D(
								(0, r.$4X)(
									class extends r.$3X {
										constructor() {
											super({
												id: "workbench.actions.sync.editMachineName",
												title: (0, w.localize)(11328, null),
												icon: f.$ak.edit,
												menu: {
													id: r.$XX.ViewItemContext,
													when: u.$Kj.and(u.$Kj.equals("view", x)),
													group: "inline",
												},
											});
										}
										async run(J, W) {
											(await V.rename(W.$treeItemHandle)) &&
												(await q.refresh());
										}
									},
								),
							),
							this.D(
								(0, r.$4X)(
									class extends r.$3X {
										constructor() {
											super({
												id: "workbench.actions.sync.turnOffSyncOnMachine",
												title: (0, w.localize)(11329, null),
												menu: {
													id: r.$XX.ViewItemContext,
													when: u.$Kj.and(
														u.$Kj.equals("view", x),
														u.$Kj.equals("viewItem", "sync-machine"),
													),
												},
											});
										}
										async run(J, W, X) {
											(await V.disable(
												(X || [W]).map((Y) => Y.$treeItemHandle),
											)) && (await q.refresh());
										}
									},
								),
							);
					}
					s(F, x) {
						const H = `workbench.views.sync.${x ? "remote" : "local"}Activity`,
							q = x
								? (0, w.localize2)(11357, "Sync Activity (Remote)")
								: (0, w.localize2)(11358, "Sync Activity (Local)"),
							V = this.f.createInstance(C.$Stc, H, q.value);
						(V.showCollapseAllAction = !0),
							(V.showRefreshAction = !0),
							(V.dataProvider = x
								? this.f.createInstance(R)
								: this.f.createInstance(A)),
							this.D(
								p.Event.any(
									this.g.onDidChangeResourceEnablement,
									this.g.onDidChangeEnablement,
									this.j.onDidResetLocal,
									this.j.onDidResetRemote,
								)(() => V.refresh()),
							);
						const G = t.$Io.as(i.Extensions.ViewsRegistry),
							K = {
								id: H,
								name: q,
								ctorDescriptor: new E.$Ji(C.$Ptc),
								when: u.$Kj.and(
									s.$Rxc.notEqualsTo(m.SyncStatus.Uninitialized),
									s.$Txc.isEqualTo(s.AccountStatus.Available),
									s.$Uxc,
								),
								canToggleVisibility: !0,
								canMoveView: !1,
								treeView: V,
								collapsed: !1,
								order: x ? 200 : 400,
								hideByDefault: !x,
							};
						G.registerViews([K], F), this.u(H);
					}
					t(F) {
						const x = "workbench.views.sync.externalActivity",
							H = (0, w.localize2)(11359, "Sync Activity (Developer)"),
							q = this.f.createInstance(O, void 0),
							V = this.f.createInstance(C.$Stc, x, H.value);
						(V.showCollapseAllAction = !1),
							(V.showRefreshAction = !1),
							(V.dataProvider = q);
						const G = t.$Io.as(i.Extensions.ViewsRegistry),
							K = {
								id: x,
								name: H,
								ctorDescriptor: new E.$Ji(C.$Ptc),
								when: s.$Uxc,
								canToggleVisibility: !0,
								canMoveView: !1,
								treeView: V,
								collapsed: !1,
								hideByDefault: !1,
							};
						G.registerViews([K], F),
							this.D(
								(0, r.$4X)(
									class extends r.$3X {
										constructor() {
											super({
												id: "workbench.actions.sync.loadActivity",
												title: (0, w.localize)(11330, null),
												icon: f.$ak.cloudUpload,
												menu: {
													id: r.$XX.ViewTitle,
													when: u.$Kj.equals("view", x),
													group: "navigation",
												},
											});
										}
										async run(J) {
											const X = await J.get(g.$IO).showOpenDialog({
												title: (0, w.localize)(11331, null),
												canSelectFiles: !0,
												canSelectFolders: !0,
												canSelectMany: !1,
											});
											X?.[0] &&
												((q.activityDataResource = X[0]), await V.refresh());
										}
									},
								),
							);
					}
					u(F) {
						this.D(
							(0, r.$4X)(
								class extends r.$3X {
									constructor() {
										super({
											id: `workbench.actions.sync.${F}.resolveResource`,
											title: (0, w.localize)(11332, null),
											menu: {
												id: r.$XX.ViewItemContext,
												when: u.$Kj.and(
													u.$Kj.equals("view", F),
													u.$Kj.regex("viewItem", /sync-resource-.*/i),
												),
											},
										});
									}
									async run(x, H) {
										const { resource: q } = JSON.parse(H.$treeItemHandle);
										await x
											.get(h.$IY)
											.openEditor({
												resource: a.URI.parse(q),
												options: { pinned: !0 },
											});
									}
								},
							),
						),
							this.D(
								(0, r.$4X)(
									class extends r.$3X {
										constructor() {
											super({
												id: `workbench.actions.sync.${F}.compareWithLocal`,
												title: (0, w.localize)(11333, null),
												menu: {
													id: r.$XX.ViewItemContext,
													when: u.$Kj.and(
														u.$Kj.equals("view", F),
														u.$Kj.regex(
															"viewItem",
															/sync-associatedResource-.*/i,
														),
													),
												},
											});
										}
										async run(x, H) {
											const q = x.get(k.$ek),
												{ resource: V, comparableResource: G } = JSON.parse(
													H.$treeItemHandle,
												),
												K = a.URI.parse(V),
												J = a.URI.parse(G);
											return q.executeCommand(
												S.$AWb,
												K,
												J,
												(0, w.localize)(
													11334,
													null,
													(0, w.localize)(11335, null, (0, v.$kh)(K)),
													(0, w.localize)(11336, null, (0, v.$kh)(J)),
												),
												void 0,
											);
										}
									},
								),
							),
							this.D(
								(0, r.$4X)(
									class extends r.$3X {
										constructor() {
											super({
												id: `workbench.actions.sync.${F}.replaceCurrent`,
												title: (0, w.localize)(11337, null),
												icon: f.$ak.discard,
												menu: {
													id: r.$XX.ViewItemContext,
													when: u.$Kj.and(
														u.$Kj.equals("view", F),
														u.$Kj.regex("viewItem", /sync-resource-.*/i),
														u.$Kj.notEquals(
															"viewItem",
															`sync-resource-${m.SyncResource.Profiles}`,
														),
													),
													group: "inline",
												},
											});
										}
										async run(x, H) {
											const q = x.get(g.$GO),
												V = x.get(m.$5Rb),
												{ syncResourceHandle: G, syncResource: K } = JSON.parse(
													H.$treeItemHandle,
												);
											if (
												(
													await q.confirm({
														message: (0, w.localize)(
															11338,
															null,
															(0, s.$Oxc)(K),
														),
														type: "info",
														title: s.$Pxc.value,
													})
												).confirmed
											)
												return V.replace({
													created: G.created,
													uri: a.URI.revive(G.uri),
												});
										}
									},
								),
							);
					}
					w(F) {
						const x = "workbench.views.sync.troubleshoot",
							H = (0, w.localize2)(11360, "Troubleshoot"),
							q = this.f.createInstance(C.$Stc, x, H.value),
							V = this.f.createInstance(U);
						(q.showRefreshAction = !0), (q.dataProvider = V);
						const G = t.$Io.as(i.Extensions.ViewsRegistry),
							K = {
								id: x,
								name: H,
								ctorDescriptor: new E.$Ji(C.$Ptc),
								when: s.$Uxc,
								canToggleVisibility: !0,
								canMoveView: !1,
								treeView: q,
								collapsed: !1,
								order: 500,
								hideByDefault: !0,
							};
						G.registerViews([K], F);
					}
				};
				(e.$d1c = M),
					(e.$d1c = M =
						Ne([j(1, d.$Li), j(2, m.$4Rb), j(3, l.$FRb), j(4, m.$5Rb)], M));
				let N = class {
					constructor(F, x, H, q, V, G) {
						(this.f = F),
							(this.g = x),
							(this.h = H),
							(this.i = q),
							(this.j = V),
							(this.k = G),
							(this.d = new Map());
					}
					async getChildren(F) {
						try {
							if (!F) return await this.l();
							if (F.profile || F.handle === this.k.defaultProfile.id) {
								let x = this.d.get(F.handle);
								return (
									x || this.d.set(F.handle, (x = this.o(F.profile))), await x
								);
							}
							return F.syncResourceHandle ? await this.n(F) : [];
						} catch (x) {
							throw (
								(x instanceof m.$YRb || (x = m.$YRb.toUserDataSyncError(x)),
								x instanceof m.$YRb &&
								x.code === m.UserDataSyncErrorCode.IncompatibleRemoteContent
									? this.j.notify({
											severity: $.Severity.Error,
											message: x.message,
											actions: {
												primary: [
													new b.$rj(
														"reset",
														(0, w.localize)(11339, null),
														void 0,
														!0,
														() => this.i.resetSyncedData(),
													),
												],
											},
										})
									: this.j.error(x),
								x)
							);
						}
					}
					async l() {
						this.d.clear();
						const F = [],
							x = await this.q();
						if (x.length) {
							const H = {
								handle: this.k.defaultProfile.id,
								label: { label: this.k.defaultProfile.name },
								collapsibleState: i.TreeItemCollapsibleState.Expanded,
							};
							F.push(H);
						} else {
							const H = await this.o();
							F.push(...H);
						}
						for (const H of x) {
							const q = {
								handle: H.id,
								label: { label: H.name },
								collapsibleState: i.TreeItemCollapsibleState.Collapsed,
								profile: H,
							};
							F.push(q);
						}
						return F;
					}
					async n(F) {
						const x = F.syncResourceHandle,
							H = await this.g.getAssociatedResources(x),
							q = x.previous
								? await this.g.getAssociatedResources(x.previous)
								: [];
						return H.map(({ resource: V, comparableResource: G }) => {
							const K = JSON.stringify({
									resource: V.toString(),
									comparableResource: G.toString(),
								}),
								J = q.find(
									(W) => (0, v.$kh)(W.resource) === (0, v.$kh)(V),
								)?.resource;
							return {
								handle: K,
								collapsibleState: i.TreeItemCollapsibleState.None,
								resourceUri: V,
								command: J
									? {
											id: S.$AWb,
											title: "",
											arguments: [
												J,
												V,
												(0, w.localize)(
													11340,
													null,
													`${(0, v.$kh)(V)} (${(0, n.$dn)(x.previous.created, !0)})`,
													`${(0, v.$kh)(V)} (${(0, n.$dn)(x.created, !0)})`,
												),
												void 0,
											],
										}
									: { id: S.$zWb, title: "", arguments: [V, void 0, void 0] },
								contextValue: `sync-associatedResource-${x.syncResource}`,
							};
						});
					}
					async o(F) {
						const x = [],
							q = (
								await Promise.all(
									m.$PRb.map(async (V) => {
										const G = await this.r(V, F);
										return G.map((K, J) => ({
											...K,
											syncResource: V,
											previous: G[J + 1],
										}));
									}),
								)
							)
								.flat()
								.sort((V, G) => G.created - V.created);
						for (const V of q) {
							const G = JSON.stringify({
								syncResourceHandle: V,
								syncResource: V.syncResource,
							});
							x.push({
								handle: G,
								collapsibleState: i.TreeItemCollapsibleState.Collapsed,
								label: { label: (0, s.$Oxc)(V.syncResource) },
								description: (0, n.$dn)(V.created, !0),
								tooltip: new Date(V.created).toLocaleString(),
								themeIcon: c.$lP,
								syncResourceHandle: V,
								contextValue: `sync-resource-${V.syncResource}`,
							});
						}
						return x;
					}
				};
				N = Ne(
					[
						j(0, m.$5Rb),
						j(1, m.$6Rb),
						j(2, m.$7Rb),
						j(3, s.$Nxc),
						j(4, $.$4N),
						j(5, L.$Xl),
					],
					N,
				);
				class A extends N {
					r(F, x) {
						return this.g.getLocalSyncResourceHandles(F, x);
					}
					async q() {
						return this.k.profiles
							.filter((F) => !F.isDefault)
							.map((F) => ({ id: F.id, collection: F.id, name: F.name }));
					}
				}
				let R = class extends N {
					constructor(F, x, H, q, V, G, K) {
						super(F, x, H, V, G, K), (this.t = q);
					}
					async getChildren(F) {
						return F || (this.s = void 0), super.getChildren(F);
					}
					u() {
						return this.s === void 0 && (this.s = this.t.getMachines()), this.s;
					}
					r(F, x) {
						return this.g.getRemoteSyncResourceHandles(F, x);
					}
					q() {
						return this.g.getRemoteSyncedProfiles();
					}
					async n(F) {
						const x = await super.n(F);
						if (x.length) {
							const H = await this.g.getMachineId(F.syncResourceHandle);
							if (H) {
								const V = (await this.u()).find(({ id: G }) => G === H);
								x[0].description = V?.isCurrent
									? (0, w.localize)(11341, null)
									: V?.name;
							}
						}
						return x;
					}
				};
				R = Ne(
					[
						j(0, m.$5Rb),
						j(1, m.$6Rb),
						j(2, m.$7Rb),
						j(3, l.$FRb),
						j(4, s.$Nxc),
						j(5, $.$4N),
						j(6, L.$Xl),
					],
					R,
				);
				let O = class extends N {
					constructor(F, x, H, q, V, G, K, J, W) {
						super(x, H, q, V, G, K),
							(this.activityDataResource = F),
							(this.u = J),
							(this.v = W);
					}
					async getChildren(F) {
						if (!F) {
							if (((this.s = void 0), !this.activityDataResource)) return [];
							if ((await this.u.resolve(this.activityDataResource)).isDirectory)
								this.t = this.activityDataResource;
							else {
								this.t = this.v.extUri.joinPath(
									this.v.extUri.dirname(this.activityDataResource),
									"remoteActivity",
								);
								try {
									await this.u.del(this.t, { recursive: !0 });
								} catch {}
								await this.f.extractActivityData(
									this.activityDataResource,
									this.t,
								);
							}
						}
						return super.getChildren(F);
					}
					r(F, x) {
						return this.g.getLocalSyncResourceHandles(F, x, this.t);
					}
					async q() {
						return this.g.getLocalSyncedProfiles(this.t);
					}
					async n(F) {
						const x = await super.n(F);
						if (x.length) {
							const H = await this.g.getMachineId(F.syncResourceHandle);
							if (H) {
								const V = (await this.z()).find(({ id: G }) => G === H);
								x[0].description = V?.isCurrent
									? (0, w.localize)(11342, null)
									: V?.name;
							}
						}
						return x;
					}
					z() {
						return (
							this.s === void 0 &&
								(this.s = this.g.getLocalSyncedMachines(this.t)),
							this.s
						);
					}
				};
				O = Ne(
					[
						j(1, m.$5Rb),
						j(2, m.$6Rb),
						j(3, m.$7Rb),
						j(4, s.$Nxc),
						j(5, $.$4N),
						j(6, L.$Xl),
						j(7, I.$ll),
						j(8, P.$Vl),
					],
					O,
				);
				let B = class {
					constructor(F, x, H, q, V, G) {
						(this.f = F),
							(this.g = x),
							(this.h = H),
							(this.i = q),
							(this.j = V),
							(this.k = G);
					}
					async getChildren(F) {
						F || (this.d = void 0);
						try {
							let x = await this.l();
							return (
								(x = x
									.filter((H) => !H.disabled)
									.sort((H, q) => (H.isCurrent ? -1 : 1))),
								(this.f.message = x.length
									? void 0
									: (0, w.localize)(11343, null)),
								x.map(({ id: H, name: q, isCurrent: V, platform: G }) => ({
									handle: H,
									collapsibleState: i.TreeItemCollapsibleState.None,
									label: { label: q },
									description: V ? (0, w.localize)(11344, null) : void 0,
									themeIcon: G && (0, l.$GRb)(G) ? f.$ak.globe : f.$ak.vm,
									contextValue: "sync-machine",
								}))
							);
						} catch (x) {
							return this.i.error(x), [];
						}
					}
					l() {
						return this.d === void 0 && (this.d = this.g.getMachines()), this.d;
					}
					async disable(F) {
						const H = (await this.l()).filter(({ id: G }) => F.includes(G));
						if (!H.length)
							throw new Error((0, w.localize)(11345, null, F.join(",")));
						if (
							!(
								await this.j.confirm({
									type: "info",
									message:
										H.length > 1
											? (0, w.localize)(11346, null)
											: (0, w.localize)(11347, null, H[0].name),
									primaryButton: (0, w.localize)(11348, null),
								})
							).confirmed
						)
							return !1;
						H.some((G) => G.isCurrent) && (await this.k.turnoff(!1));
						const V = H.filter((G) => !G.isCurrent).map((G) => [G.id, !1]);
						return V.length && (await this.g.setEnablements(V)), !0;
					}
					async rename(F) {
						const x = new o.$Zc(),
							H = x.add(this.h.createInputBox());
						(H.placeholder = (0, w.localize)(11349, null)),
							(H.busy = !0),
							H.show();
						const q = await this.l(),
							V = q.find(({ id: K }) => K === F);
						if (!V)
							throw (
								(H.hide(),
								x.dispose(),
								new Error((0, w.localize)(11350, null, F)))
							);
						(H.busy = !1), (H.value = V.name);
						const G = (K) => (
							(K = K.trim()),
							K && !q.some((J) => J.id !== F && J.name === K) ? K : null
						);
						return (
							x.add(
								H.onDidChangeValue(
									() =>
										(H.validationMessage = G(H.value)
											? ""
											: (0, w.localize)(11351, null)),
								),
							),
							new Promise((K, J) => {
								x.add(
									H.onDidAccept(async () => {
										const W = G(H.value);
										if ((x.dispose(), W && W !== V.name))
											try {
												await this.g.renameMachine(F, W), K(!0);
											} catch (X) {
												J(X);
											}
										else K(!1);
									}),
								);
							})
						);
					}
				};
				B = Ne(
					[j(1, l.$FRb), j(2, y.$DJ), j(3, $.$4N), j(4, g.$GO), j(5, s.$Nxc)],
					B,
				);
				let U = class {
					constructor(F, x, H, q) {
						(this.d = F), (this.f = x), (this.g = H), (this.h = q);
					}
					async getChildren(F) {
						return F
							? F.handle === "LAST_SYNC_STATES"
								? this.i()
								: F.handle === "SYNC_LOGS"
									? this.j()
									: []
							: [
									{
										handle: "SYNC_LOGS",
										collapsibleState: i.TreeItemCollapsibleState.Collapsed,
										label: { label: (0, w.localize)(11352, null) },
										themeIcon: f.$ak.folder,
									},
									{
										handle: "LAST_SYNC_STATES",
										collapsibleState: i.TreeItemCollapsibleState.Collapsed,
										label: { label: (0, w.localize)(11353, null) },
										themeIcon: f.$ak.folder,
									},
								];
					}
					async i() {
						const F = [];
						for (const x of m.$PRb) {
							const H = (0, m.$RRb)(void 0, x, this.g, this.h.extUri);
							(await this.d.exists(H)) &&
								F.push({
									handle: H.toString(),
									label: { label: (0, s.$Oxc)(x) },
									collapsibleState: i.TreeItemCollapsibleState.None,
									resourceUri: H,
									command: {
										id: S.$zWb,
										title: "",
										arguments: [H, void 0, void 0],
									},
								});
						}
						return F;
					}
					async j() {
						const F = await this.f.getAllLogResources(),
							x = [];
						for (const H of F) {
							const q = this.h.extUri.dirname(H);
							x.push({
								handle: H.toString(),
								collapsibleState: i.TreeItemCollapsibleState.None,
								resourceUri: H,
								label: { label: this.h.extUri.basename(q) },
								description: this.h.extUri.isEqual(q, this.g.logsHome)
									? (0, w.localize)(11354, null)
									: void 0,
								command: {
									id: S.$zWb,
									title: "",
									arguments: [H, void 0, void 0],
								},
							});
						}
						return x;
					}
				};
				U = Ne([j(0, I.$ll), j(1, s.$Nxc), j(2, T.$Ti), j(3, P.$Vl)], U);
			},
		),
		define(
			de[4051],
			he([
				1, 0, 50, 29, 6, 3, 19, 9, 67, 61, 42, 4, 11, 31, 8, 57, 5, 40, 63, 32,
				150, 44, 297, 260, 18, 131, 275, 62, 41, 357, 30, 102, 60, 4050, 522,
				14, 239, 99, 87, 129, 85, 687, 376, 133, 12,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$e1c = void 0);
				const G = {
						id: "workbench.userDataSync.actions.turnOff",
						title: (0, a.localize2)(11313, "Turn Off"),
					},
					K = { id: A.$Xxc, title: (0, a.localize2)(11314, "Configure...") },
					J = "workbench.userDataSync.actions.showConflicts",
					W = {
						id: "workbench.userDataSync.actions.syncNow",
						title: (0, a.localize2)(11315, "Sync Now"),
						description(_) {
							if (_.status === s.SyncStatus.Syncing)
								return (0, a.localize)(11243, null);
							if (_.lastSyncTime)
								return (0, a.localize)(
									11244,
									null,
									(0, I.$dn)(_.lastSyncTime, !0),
								);
						},
					},
					X = {
						id: "workbench.userDataSync.actions.settings",
						title: (0, a.localize2)(11316, "Show Settings"),
					},
					Y = {
						id: "workbench.userDataSync.actions.showSyncedData",
						title: (0, a.localize2)(11317, "Show Synced Data"),
					},
					ie = new n.$5j("userDataSyncTurningOn", !1);
				let ne = class extends E.$1c {
					constructor(
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
					) {
						super(),
							(this.g = te),
							(this.h = Q),
							(this.j = Z),
							(this.m = re),
							(this.n = le),
							(this.q = oe),
							(this.r = ae),
							(this.s = pe),
							(this.t = $e),
							(this.u = ye),
							(this.w = ue),
							(this.y = fe),
							(this.z = ge),
							(this.C = be),
							(this.F = Ce),
							(this.G = Le),
							(this.H = Fe),
							(this.I = Oe),
							(this.J = xe),
							(this.L = He),
							(this.M = Ke),
							(this.b = this.D(new E.$2c())),
							(this.f = this.D(new E.$2c())),
							(this.P = new Map()),
							(this.X = new Map()),
							(this.rb = this.D(new E.$2c())),
							(this.a = ie.bindTo(se)),
							Z.enabled &&
								((0, s.$NRb)(),
								this.bb(),
								this.ab(),
								this.Q(this.h.conflicts),
								this.D(
									w.Event.any(
										w.Event.debounce(Q.onDidChangeStatus, () => {}, 500),
										this.g.onDidChangeEnablement,
										this.j.onDidChangeAccountStatus,
									)(() => {
										this.bb(), this.ab();
									}),
								),
								this.D(Q.onDidChangeConflicts(() => this.Q(this.h.conflicts))),
								this.D(
									te.onDidChangeEnablement(() => this.Q(this.h.conflicts)),
								),
								this.D(Q.onSyncErrors((Je) => this.Y(Je))),
								this.D(me.onError((Je) => this.U(Je))),
								this.lb(),
								this.Db(),
								ve.registerTextModelContentProvider(
									s.$$Rb,
									ue.createInstance(ee),
								),
								this.D(
									w.Event.any(
										Q.onDidChangeStatus,
										te.onDidChangeEnablement,
									)(
										() =>
											(this.N =
												!te.isEnabled() && Q.status !== s.SyncStatus.Idle),
									),
								));
					}
					get N() {
						return !!this.a.get();
					}
					set N(te) {
						this.a.set(te), this.ab();
					}
					O({ syncResource: te, profile: Q }) {
						return `${Q.id}:${te}`;
					}
					Q(te) {
						if ((this.ab(), this.sb(), !!this.g.isEnabled()))
							if (te.length) {
								for (const [Q, Z] of this.P.entries())
									te.some((se) => this.O(se) === Q) ||
										(Z.dispose(), this.P.delete(Q));
								for (const Q of this.h.conflicts) {
									const Z = this.O(Q);
									if (!this.P.has(Z)) {
										const se = (0, A.$Oxc)(Q.syncResource),
											re = this.n.prompt(
												o.Severity.Warning,
												(0, a.localize)(11245, null, se.toLowerCase()),
												[
													{
														label: (0, a.localize)(11246, null),
														run: () => {
															this.C.publicLog2("sync/handleConflicts", {
																source: Q.syncResource,
																action: "acceptLocal",
															}),
																this.S(Q, Q.conflicts[0]);
														},
													},
													{
														label: (0, a.localize)(11247, null),
														run: () => {
															this.C.publicLog2("sync/handleConflicts", {
																source: Q.syncResource,
																action: "acceptRemote",
															}),
																this.R(Q, Q.conflicts[0]);
														},
													},
													{
														label: (0, a.localize)(11248, null),
														run: () => {
															this.C.publicLog2("sync/showConflicts", {
																source: Q.syncResource,
															}),
																this.j.showConflicts(Q.conflicts[0]);
														},
													},
												],
												{ sticky: !0 },
											);
										this.P.set(
											Z,
											(0, E.$Yc)(() => {
												re.close(), this.P.delete(Z);
											}),
										);
									}
								}
							} else this.P.forEach((Q) => Q.dispose()), this.P.clear();
					}
					async R(te, Q) {
						try {
							await this.h.accept(
								te,
								Q.remoteResource,
								void 0,
								this.g.isEnabled(),
							);
						} catch {
							this.n.error((0, a.localize)(11249, null, `command:${A.$Yxc}`));
						}
					}
					async S(te, Q) {
						try {
							await this.h.accept(
								te,
								Q.localResource,
								void 0,
								this.g.isEnabled(),
							);
						} catch {
							this.n.error((0, a.localize)(11250, null, `command:${A.$Yxc}`));
						}
					}
					U(te) {
						switch (te.code) {
							case s.UserDataSyncErrorCode.SessionExpired:
								this.n.notify({
									severity: o.Severity.Info,
									message: (0, a.localize)(11251, null),
									actions: {
										primary: [
											new t.$rj(
												"turn on sync",
												(0, a.localize)(11252, null),
												void 0,
												!0,
												() => this.cb(),
											),
										],
									},
								});
								break;
							case s.UserDataSyncErrorCode.TurnedOff:
								this.n.notify({
									severity: o.Severity.Info,
									message: (0, a.localize)(11253, null),
									actions: {
										primary: [
											new t.$rj(
												"turn on sync",
												(0, a.localize)(11254, null),
												void 0,
												!0,
												() => this.cb(),
											),
										],
									},
								});
								break;
							case s.UserDataSyncErrorCode.TooLarge:
								if (
									te.resource === s.SyncResource.Keybindings ||
									te.resource === s.SyncResource.Settings ||
									te.resource === s.SyncResource.Tasks
								) {
									this.ib(te.resource);
									const Q = (0, A.$Oxc)(te.resource);
									this.W(
										te.resource,
										(0, a.localize)(
											11255,
											null,
											Q.toLowerCase(),
											Q.toLowerCase(),
											"100kb",
										),
										te,
									);
								}
								break;
							case s.UserDataSyncErrorCode.LocalTooManyProfiles:
								this.ib(s.SyncResource.Profiles),
									this.n.error((0, a.localize)(11256, null));
								break;
							case s.UserDataSyncErrorCode.IncompatibleLocalContent:
							case s.UserDataSyncErrorCode.Gone:
							case s.UserDataSyncErrorCode.UpgradeRequired: {
								const Q = (0, a.localize)(
										11257,
										null,
										this.F.version,
										this.F.commit,
									),
									Z = te.operationId
										? (0, a.localize)(11258, null, te.operationId)
										: void 0;
								this.n.notify({
									severity: o.Severity.Error,
									message: Z ? `${Q} ${Z}` : Q,
								});
								break;
							}
							case s.UserDataSyncErrorCode.MethodNotFound: {
								const Q = (0, a.localize)(11259, null),
									Z = te.operationId
										? (0, a.localize)(11260, null, te.operationId)
										: void 0;
								this.n.notify({
									severity: o.Severity.Error,
									message: Z ? `${Q} ${Z}` : Q,
									actions: {
										primary: [
											new t.$rj(
												"Show Sync Logs",
												(0, a.localize)(11261, null),
												void 0,
												!0,
												() => this.L.executeCommand(A.$Yxc),
											),
											new t.$rj(
												"Report Issue",
												(0, a.localize)(11262, null),
												void 0,
												!0,
												() => this.M.openReporter(),
											),
										],
									},
								});
								break;
							}
							case s.UserDataSyncErrorCode.IncompatibleRemoteContent:
								this.n.notify({
									severity: o.Severity.Error,
									message: (0, a.localize)(11263, null),
									actions: {
										primary: [
											new t.$rj(
												"reset",
												(0, a.localize)(11264, null),
												void 0,
												!0,
												() => this.j.resetSyncedData(),
											),
											new t.$rj(
												"show synced data",
												(0, a.localize)(11265, null),
												void 0,
												!0,
												() => this.j.showSyncActivity(),
											),
										],
									},
								});
								return;
							case s.UserDataSyncErrorCode.ServiceChanged:
								this.n.notify({
									severity: o.Severity.Info,
									message:
										this.I.userDataSyncStore?.type === "insiders"
											? (0, a.localize)(11266, null)
											: (0, a.localize)(11267, null),
								});
								return;
							case s.UserDataSyncErrorCode.DefaultServiceChanged:
								this.g.isEnabled()
									? this.n.notify({
											severity: o.Severity.Info,
											message: (0, a.localize)(11268, null),
										})
									: this.n.notify({
											severity: o.Severity.Info,
											message: (0, a.localize)(11269, null, this.F.nameLong),
											actions: {
												primary: [
													new t.$rj(
														"turn on sync",
														(0, a.localize)(11270, null),
														void 0,
														!0,
														() => this.cb(),
													),
												],
											},
										});
								return;
						}
					}
					W(te, Q, Z) {
						const se = Z.operationId
							? (0, a.localize)(11271, null, Z.operationId)
							: void 0;
						this.n.notify({
							severity: o.Severity.Error,
							message: se ? `${Q} ${se}` : Q,
							actions: {
								primary: [
									new t.$rj(
										"open sync file",
										(0, a.localize)(11272, null, (0, A.$Oxc)(te)),
										void 0,
										!0,
										() =>
											te === s.SyncResource.Settings
												? this.z.openUserSettings({ jsonEditor: !0 })
												: this.z.openGlobalKeybindingSettings(!0),
									),
								],
							},
						});
					}
					Y(te) {
						if (te.length)
							for (const { profile: Q, syncResource: Z, error: se } of te)
								switch (se.code) {
									case s.UserDataSyncErrorCode.LocalInvalidContent:
										this.Z({ profile: Q, syncResource: Z });
										break;
									default: {
										const re = `${Q.id}:${Z}`,
											le = this.X.get(re);
										le && (le.dispose(), this.X.delete(re));
									}
								}
						else this.X.forEach((Q) => Q.dispose()), this.X.clear();
					}
					Z({ profile: te, syncResource: Q }) {
						if (this.s.currentProfile.id !== te.id) return;
						const Z = `${te.id}:${Q}`;
						if (
							this.X.has(Z) ||
							(Q !== s.SyncResource.Settings &&
								Q !== s.SyncResource.Keybindings &&
								Q !== s.SyncResource.Tasks) ||
							!this.J.hasFocus
						)
							return;
						const se =
								Q === s.SyncResource.Settings
									? this.s.currentProfile.settingsResource
									: Q === s.SyncResource.Keybindings
										? this.s.currentProfile.keybindingsResource
										: this.s.currentProfile.tasksResource,
							re = l.$A1.getCanonicalUri(this.q.activeEditor, {
								supportSideBySide: l.SideBySideEditor.PRIMARY,
							});
						if ((0, C.$gh)(se, re)) return;
						const le = (0, A.$Oxc)(Q),
							oe = this.n.notify({
								severity: o.Severity.Error,
								message: (0, a.localize)(11273, null, le.toLowerCase()),
								actions: {
									primary: [
										new t.$rj(
											"open sync file",
											(0, a.localize)(11274, null, le),
											void 0,
											!0,
											() =>
												Q === s.SyncResource.Settings
													? this.z.openUserSettings({ jsonEditor: !0 })
													: this.z.openGlobalKeybindingSettings(!0),
										),
									],
								},
							});
						this.X.set(
							Z,
							(0, E.$Yc)(() => {
								oe.close(), this.X.delete(Z);
							}),
						);
					}
					$() {
						return this.h.conflicts.reduce(
							(te, { conflicts: Q }) => te + Q.length,
							0,
						);
					}
					async ab() {
						this.b.clear();
						let te, Q;
						this.h.conflicts.length && this.g.isEnabled()
							? (te = new $.$8qc(this.$(), () =>
									(0, a.localize)(11275, null, A.$Pxc.value),
								))
							: this.N &&
								((te = new $.$0qc(() => (0, a.localize)(11276, null))),
								(Q = 1)),
							te &&
								(this.b.value = this.m.showGlobalActivity({
									badge: te,
									priority: Q,
								}));
					}
					async bb() {
						this.f.clear();
						let te;
						this.h.status !== s.SyncStatus.Uninitialized &&
							this.g.isEnabled() &&
							this.j.accountStatus === A.AccountStatus.Unavailable &&
							(te = new $.$8qc(1, () => (0, a.localize)(11277, null))),
							te &&
								(this.f.value = this.m.showAccountsActivity({
									badge: te,
									priority: void 0,
								}));
					}
					async cb() {
						try {
							if (!this.j.authenticationProviders.length)
								throw new Error((0, a.localize)(11278, null));
							if (!(await this.db())) return;
							this.I.userDataSyncStore?.canSwitch &&
								(await this.kb(this.I.userDataSyncStore)),
								await this.j.turnOn();
						} catch (te) {
							if ((0, i.$8)(te)) return;
							if (te instanceof s.$YRb) {
								switch (te.code) {
									case s.UserDataSyncErrorCode.TooLarge:
										if (
											te.resource === s.SyncResource.Keybindings ||
											te.resource === s.SyncResource.Settings ||
											te.resource === s.SyncResource.Tasks
										) {
											this.W(
												te.resource,
												(0, a.localize)(
													11279,
													null,
													(0, A.$Oxc)(te.resource).toLowerCase(),
													"100kb",
												),
												te,
											);
											return;
										}
										break;
									case s.UserDataSyncErrorCode.IncompatibleLocalContent:
									case s.UserDataSyncErrorCode.Gone:
									case s.UserDataSyncErrorCode.UpgradeRequired: {
										const Q = (0, a.localize)(
												11280,
												null,
												this.F.version,
												this.F.commit,
											),
											Z = te.operationId
												? (0, a.localize)(11281, null, te.operationId)
												: void 0;
										this.n.notify({
											severity: o.Severity.Error,
											message: Z ? `${Q} ${Z}` : Q,
										});
										return;
									}
									case s.UserDataSyncErrorCode.IncompatibleRemoteContent:
										this.n.notify({
											severity: o.Severity.Error,
											message: (0, a.localize)(11282, null),
											actions: {
												primary: [
													new t.$rj(
														"reset",
														(0, a.localize)(11283, null),
														void 0,
														!0,
														() => this.j.resetSyncedData(),
													),
													new t.$rj(
														"show synced data",
														(0, a.localize)(11284, null),
														void 0,
														!0,
														() => this.j.showSyncActivity(),
													),
												],
											},
										});
										return;
									case s.UserDataSyncErrorCode.Unauthorized:
									case s.UserDataSyncErrorCode.Forbidden:
										this.n.error((0, a.localize)(11285, null));
										return;
								}
								this.n.error((0, a.localize)(11286, null, `command:${A.$Yxc}`));
							} else this.n.error((0, a.localize)(11287, null, (0, i.$bb)(te)));
						}
					}
					async db() {
						return new Promise((te, Q) => {
							const Z = new E.$Zc(),
								se = this.u.createQuickPick();
							Z.add(se),
								(se.title = A.$Pxc.value),
								(se.ok = !1),
								(se.customButton = !0),
								(se.customLabel = (0, a.localize)(11288, null)),
								(se.description = (0, a.localize)(11289, null)),
								(se.canSelectMany = !0),
								(se.ignoreFocusOut = !0),
								(se.hideInput = !0),
								(se.hideCheckAll = !0);
							const re = this.eb();
							(se.items = re),
								(se.selectedItems = re.filter((oe) =>
									this.g.isResourceEnabled(oe.id),
								));
							let le = !1;
							Z.add(
								w.Event.any(
									se.onDidAccept,
									se.onDidCustom,
								)(() => {
									(le = !0), se.hide();
								}),
							),
								Z.add(
									se.onDidHide(() => {
										try {
											le && this.fb(re, se.selectedItems), te(le);
										} catch (oe) {
											Q(oe);
										} finally {
											Z.dispose();
										}
									}),
								),
								se.show();
						});
					}
					eb() {
						const te = [
							{
								id: s.SyncResource.Settings,
								label: (0, A.$Oxc)(s.SyncResource.Settings),
							},
							{
								id: s.SyncResource.Keybindings,
								label: (0, A.$Oxc)(s.SyncResource.Keybindings),
							},
							{
								id: s.SyncResource.Snippets,
								label: (0, A.$Oxc)(s.SyncResource.Snippets),
							},
							{
								id: s.SyncResource.Tasks,
								label: (0, A.$Oxc)(s.SyncResource.Tasks),
							},
							{
								id: s.SyncResource.GlobalState,
								label: (0, A.$Oxc)(s.SyncResource.GlobalState),
							},
							{
								id: s.SyncResource.Extensions,
								label: (0, A.$Oxc)(s.SyncResource.Extensions),
							},
						];
						return (
							this.r.isEnabled() &&
								te.push({
									id: s.SyncResource.Profiles,
									label: (0, A.$Oxc)(s.SyncResource.Profiles),
								}),
							te
						);
					}
					fb(te, Q) {
						for (const Z of te) {
							const se = this.g.isResourceEnabled(Z.id),
								re = !!Q.filter((le) => le.id === Z.id)[0];
							se !== re && this.g.setResourceEnablement(Z.id, re);
						}
					}
					async gb() {
						return new Promise((te, Q) => {
							const Z = new E.$Zc(),
								se = this.u.createQuickPick();
							Z.add(se),
								(se.title = (0, a.localize)(11290, null, A.$Pxc.value)),
								(se.placeholder = (0, a.localize)(11291, null)),
								(se.canSelectMany = !0),
								(se.ignoreFocusOut = !0),
								(se.ok = !0);
							const re = this.eb();
							(se.items = re),
								(se.selectedItems = re.filter((le) =>
									this.g.isResourceEnabled(le.id),
								)),
								Z.add(
									se.onDidAccept(async () => {
										se.selectedItems.length &&
											(this.fb(re, se.selectedItems), se.hide());
									}),
								),
								Z.add(
									se.onDidHide(() => {
										Z.dispose(), te();
									}),
								),
								se.show();
						});
					}
					async hb() {
						const te = await this.t.confirm({
							message: (0, a.localize)(11292, null),
							detail: (0, a.localize)(11293, null),
							primaryButton: (0, a.localize)(11294, null),
							checkbox:
								this.j.accountStatus === A.AccountStatus.Available
									? { label: (0, a.localize)(11295, null) }
									: void 0,
						});
						if (te.confirmed) return this.j.turnoff(!!te.checkboxChecked);
					}
					ib(te) {
						switch (te) {
							case s.SyncResource.Settings:
								return this.g.setResourceEnablement(
									s.SyncResource.Settings,
									!1,
								);
							case s.SyncResource.Keybindings:
								return this.g.setResourceEnablement(
									s.SyncResource.Keybindings,
									!1,
								);
							case s.SyncResource.Snippets:
								return this.g.setResourceEnablement(
									s.SyncResource.Snippets,
									!1,
								);
							case s.SyncResource.Tasks:
								return this.g.setResourceEnablement(s.SyncResource.Tasks, !1);
							case s.SyncResource.Extensions:
								return this.g.setResourceEnablement(
									s.SyncResource.Extensions,
									!1,
								);
							case s.SyncResource.GlobalState:
								return this.g.setResourceEnablement(
									s.SyncResource.GlobalState,
									!1,
								);
							case s.SyncResource.Profiles:
								return this.g.setResourceEnablement(
									s.SyncResource.Profiles,
									!1,
								);
						}
					}
					jb() {
						return this.y.showChannel(s.$0Rb);
					}
					async kb(te) {
						return new Promise((Q, Z) => {
							const se = new E.$Zc(),
								re = se.add(this.u.createQuickPick());
							(re.title = (0, a.localize)(11296, null, A.$Pxc.value)),
								(re.description = (0, a.localize)(11297, null)),
								(re.hideInput = !0),
								(re.ignoreFocusOut = !0);
							const le = (oe) => {
								if ((0, C.$gh)(oe, te.defaultUrl))
									return (0, a.localize)(11298, null);
							};
							(re.items = [
								{
									id: "insiders",
									label: (0, a.localize)(11299, null),
									description: le(te.insidersUrl),
								},
								{
									id: "stable",
									label: (0, a.localize)(11300, null),
									description: le(te.stableUrl),
								},
							]),
								se.add(
									re.onDidAccept(async () => {
										try {
											await this.I.switch(re.selectedItems[0].id), Q();
										} catch (oe) {
											Z(oe);
										} finally {
											re.hide();
										}
									}),
								),
								se.add(re.onDidHide(() => se.dispose())),
								re.show();
						});
					}
					lb() {
						this.g.canToggleEnablement() && (this.mb(), this.wb()),
							this.nb(),
							this.ob(),
							this.pb(),
							this.sb(),
							this.ub(),
							this.tb(),
							this.vb(),
							this.xb(),
							this.zb(),
							this.Ab(),
							this.yb(),
							this.Fb(),
							this.Bb(),
							V.$r && this.Cb();
					}
					mb() {
						const te = this,
							Q = n.$Kj.and(
								A.$Rxc.notEqualsTo(s.SyncStatus.Uninitialized),
								A.$Sxc.toNegated(),
								ie.negate(),
							);
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super({
											id: "workbench.userDataSync.actions.turnOn",
											title: (0, a.localize2)(
												11318,
												"Backup and Sync Settings...",
											),
											category: A.$Pxc,
											f1: !0,
											precondition: Q,
											menu: [
												{
													group: "3_configuration",
													id: h.$XX.GlobalActivity,
													when: Q,
													order: 2,
												},
												{
													group: "3_configuration",
													id: h.$XX.MenubarPreferencesMenu,
													when: Q,
													order: 2,
												},
												{
													group: "1_settings",
													id: h.$XX.AccountsContext,
													when: Q,
													order: 2,
												},
											],
										});
									}
									async run() {
										return te.cb();
									}
								},
							),
						);
					}
					nb() {
						const te = n.$Kj.and(
							A.$Rxc.notEqualsTo(s.SyncStatus.Uninitialized),
							A.$Sxc.toNegated(),
							ie,
						);
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super({
											id: "workbench.userData.actions.turningOn",
											title: (0, a.localize)(11301, null),
											precondition: n.$Kj.false(),
											menu: [
												{
													group: "3_configuration",
													id: h.$XX.GlobalActivity,
													when: te,
													order: 2,
												},
												{
													group: "1_settings",
													id: h.$XX.AccountsContext,
													when: te,
												},
											],
										});
									}
									async run() {}
								},
							),
						);
					}
					ob() {
						const te = this;
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super({
											id: "workbench.userData.actions.cancelTurnOn",
											title: (0, a.localize)(11302, null),
											icon: R.$ak.stopCircle,
											menu: {
												id: h.$XX.ViewContainerTitle,
												when: n.$Kj.and(
													ie,
													n.$Kj.equals("viewContainer", A.$Zxc),
												),
												group: "navigation",
												order: 1,
											},
										});
									}
									async run() {
										return te.j.turnoff(!1);
									}
								},
							),
						);
					}
					pb() {
						const te = this,
							Q = "workbench.userData.actions.signin",
							Z = n.$Kj.and(
								A.$Rxc.notEqualsTo(s.SyncStatus.Uninitialized),
								A.$Sxc,
								A.$Txc.isEqualTo(A.AccountStatus.Unavailable),
							);
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super({
											id: "workbench.userData.actions.signin",
											title: (0, a.localize)(11303, null),
											menu: {
												group: "3_configuration",
												id: h.$XX.GlobalActivity,
												when: Z,
												order: 2,
											},
										});
									}
									async run() {
										try {
											await te.j.signIn();
										} catch (re) {
											te.n.error(re);
										}
									}
								},
							),
						),
							this.D(
								h.$ZX.appendMenuItem(h.$XX.AccountsContext, {
									group: "1_settings",
									command: { id: Q, title: (0, a.localize)(11304, null) },
									when: Z,
								}),
							);
					}
					qb() {
						return (0, a.localize2)(11319, "Show Conflicts ({0})", this.$());
					}
					sb() {
						this.rb.value = void 0;
						const te = this;
						this.rb.value = (0, h.$4X)(
							class extends h.$3X {
								constructor() {
									super({
										id: J,
										get title() {
											return te.qb();
										},
										category: A.$Pxc,
										f1: !0,
										precondition: A.$Wxc,
										menu: [
											{
												group: "3_configuration",
												id: h.$XX.GlobalActivity,
												when: A.$Wxc,
												order: 2,
											},
											{
												group: "3_configuration",
												id: h.$XX.MenubarPreferencesMenu,
												when: A.$Wxc,
												order: 2,
											},
										],
									});
								}
								async run() {
									return te.j.showConflicts();
								}
							},
						);
					}
					tb() {
						const te = this,
							Q = n.$Kj.and(
								A.$Sxc,
								A.$Txc.isEqualTo(A.AccountStatus.Available),
								A.$Rxc.notEqualsTo(s.SyncStatus.Uninitialized),
							);
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super({
											id: "workbench.userDataSync.actions.manage",
											title: (0, a.localize)(11305, null),
											toggled: n.$Pj.INSTANCE,
											menu: [
												{
													id: h.$XX.GlobalActivity,
													group: "3_configuration",
													when: Q,
													order: 2,
												},
												{
													id: h.$XX.MenubarPreferencesMenu,
													group: "3_configuration",
													when: Q,
													order: 2,
												},
												{
													id: h.$XX.AccountsContext,
													group: "1_settings",
													when: Q,
												},
											],
										});
									}
									run(se) {
										return new Promise((re, le) => {
											const oe = se.get(f.$DJ),
												ae = se.get(c.$ek),
												pe = new E.$Zc(),
												$e = oe.createQuickPick({ useSeparators: !0 });
											pe.add($e);
											const ye = [];
											if (
												(te.h.conflicts.length &&
													(ye.push({
														id: J,
														label: `${A.$Pxc.value}: ${te.qb().original}`,
													}),
													ye.push({ type: "separator" })),
												ye.push({
													id: K.id,
													label: `${A.$Pxc.value}: ${K.title.original}`,
												}),
												ye.push({
													id: X.id,
													label: `${A.$Pxc.value}: ${X.title.original}`,
												}),
												ye.push({
													id: Y.id,
													label: `${A.$Pxc.value}: ${Y.title.original}`,
												}),
												ye.push({ type: "separator" }),
												ye.push({
													id: W.id,
													label: `${A.$Pxc.value}: ${W.title.original}`,
													description: W.description(te.h),
												}),
												te.g.canToggleEnablement())
											) {
												const ue = te.j.current;
												ye.push({
													id: G.id,
													label: `${A.$Pxc.value}: ${G.title.original}`,
													description: ue
														? `${ue.accountName} (${te.H.getProvider(ue.authenticationProviderId).label})`
														: void 0,
												});
											}
											($e.items = ye),
												pe.add(
													$e.onDidAccept(() => {
														$e.selectedItems[0] &&
															$e.selectedItems[0].id &&
															ae.executeCommand($e.selectedItems[0].id),
															$e.hide();
													}),
												),
												pe.add(
													$e.onDidHide(() => {
														pe.dispose(), re();
													}),
												),
												$e.show();
										});
									}
								},
							),
						);
					}
					ub() {
						const te = this,
							Q = n.$Kj.and(
								A.$Txc.isEqualTo(A.AccountStatus.Available),
								A.$Rxc.notEqualsTo(s.SyncStatus.Uninitialized),
							);
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super({
											id: Y.id,
											title: Y.title,
											category: A.$Pxc,
											precondition: Q,
											menu: { id: h.$XX.CommandPalette, when: Q },
										});
									}
									run(se) {
										return te.j.showSyncActivity();
									}
								},
							),
						);
					}
					vb() {
						const te = this;
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super({
											id: W.id,
											title: W.title,
											category: A.$Pxc,
											menu: {
												id: h.$XX.CommandPalette,
												when: n.$Kj.and(
													A.$Sxc,
													A.$Txc.isEqualTo(A.AccountStatus.Available),
													A.$Rxc.notEqualsTo(s.SyncStatus.Uninitialized),
												),
											},
										});
									}
									run(Z) {
										return te.j.syncNow();
									}
								},
							),
						);
					}
					wb() {
						const te = this;
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super({
											id: G.id,
											title: G.title,
											category: A.$Pxc,
											menu: {
												id: h.$XX.CommandPalette,
												when: n.$Kj.and(
													A.$Rxc.notEqualsTo(s.SyncStatus.Uninitialized),
													A.$Sxc,
												),
											},
										});
									}
									async run() {
										try {
											await te.hb();
										} catch (Z) {
											(0, i.$8)(Z) ||
												te.n.error(
													(0, a.localize)(11306, null, `command:${A.$Yxc}`),
												);
										}
									}
								},
							),
						);
					}
					xb() {
						const te = this,
							Q = n.$Kj.and(
								A.$Rxc.notEqualsTo(s.SyncStatus.Uninitialized),
								A.$Sxc,
							);
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super({
											id: K.id,
											title: K.title,
											category: A.$Pxc,
											icon: R.$ak.settingsGear,
											tooltip: (0, a.localize)(11307, null),
											menu: [
												{ id: h.$XX.CommandPalette, when: Q },
												{
													id: h.$XX.ViewContainerTitle,
													when: n.$Kj.and(
														A.$Sxc,
														n.$Kj.equals("viewContainer", A.$Zxc),
													),
													group: "navigation",
													order: 2,
												},
											],
										});
									}
									run() {
										return te.gb();
									}
								},
							),
						);
					}
					yb() {
						const te = this;
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super({
											id: A.$Yxc,
											title: (0, a.localize)(11308, null, A.$Pxc.value),
											tooltip: (0, a.localize)(11309, null),
											icon: R.$ak.output,
											menu: [
												{
													id: h.$XX.CommandPalette,
													when: n.$Kj.and(
														A.$Rxc.notEqualsTo(s.SyncStatus.Uninitialized),
													),
												},
												{
													id: h.$XX.ViewContainerTitle,
													when: n.$Kj.equals("viewContainer", A.$Zxc),
													group: "navigation",
													order: 1,
												},
											],
										});
									}
									run() {
										return te.jb();
									}
								},
							),
						);
					}
					zb() {
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super({
											id: X.id,
											title: X.title,
											category: A.$Pxc,
											menu: {
												id: h.$XX.CommandPalette,
												when: n.$Kj.and(
													A.$Rxc.notEqualsTo(s.SyncStatus.Uninitialized),
												),
											},
										});
									}
									run(Q) {
										Q.get(S.$7Z).openUserSettings({
											jsonEditor: !1,
											query: "@tag:sync",
										});
									}
								},
							),
						);
					}
					Ab() {
						const te = this;
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super({
											id: "workbench.userDataSync.actions.help",
											title: A.$Pxc,
											category: B.$ck.Help,
											menu: [
												{
													id: h.$XX.CommandPalette,
													when: n.$Kj.and(
														A.$Rxc.notEqualsTo(s.SyncStatus.Uninitialized),
													),
												},
											],
										});
									}
									run() {
										return te.G.open(
											d.URI.parse("https://aka.ms/vscode-settings-sync-help"),
										);
									}
								},
							),
						),
							h.$ZX.appendMenuItem(h.$XX.ViewContainerTitle, {
								command: {
									id: "workbench.userDataSync.actions.help",
									title: B.$ck.Help.value,
								},
								when: n.$Kj.equals("viewContainer", A.$Zxc),
								group: "1_help",
							});
					}
					Bb() {
						const te = this;
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super({
											id: "workbench.userDataSync.actions.acceptMerges",
											title: (0, a.localize)(11310, null),
											menu: [
												{
													id: h.$XX.EditorContent,
													when: n.$Kj.and(
														x.$_Zb,
														n.$Kj.regex(x.$e1b.key, new RegExp(`^${s.$$Rb}:`)),
													),
												},
											],
										});
									}
									async run(Z, se) {
										const re = Z.get(F.$kZ);
										await re.save(se);
										const le = await re.read(se);
										await te.h.accept(this.a(se), se, le.value, !0);
									}
									a(Z) {
										const se = te.h.conflicts.find(({ conflicts: re }) =>
											re.some((le) => (0, C.$gh)(le.previewResource, Z)),
										);
										if (se) return se;
										throw new Error(`Unknown resource: ${Z.toString()}`);
									}
								},
							),
						);
					}
					Cb() {
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super(A.$2xc);
									}
									async run(Q) {
										const Z = Q.get(A.$Nxc),
											se = Q.get(o.$4N);
										(await Z.downloadSyncActivity()) &&
											se.info((0, a.localize)(11311, null));
									}
								},
							),
						);
					}
					Db() {
						const te = this.Eb();
						this.Gb(te);
					}
					Eb() {
						return L.$Io
							.as(M.Extensions.ViewContainersRegistry)
							.registerViewContainer(
								{
									id: A.$Zxc,
									title: A.$Pxc,
									ctorDescriptor: new D.$Ji(O.$ZSb, [
										A.$Zxc,
										{ mergeViewWithContainerWhenSingleView: !0 },
									]),
									icon: A.$Qxc,
									hideIfEmpty: !0,
								},
								M.ViewContainerLocation.Sidebar,
							);
					}
					Fb() {
						const te = this;
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super({
											id: "workbench.actions.syncData.reset",
											title: (0, a.localize)(11312, null),
											menu: [
												{
													id: h.$XX.ViewContainerTitle,
													when: n.$Kj.equals("viewContainer", A.$Zxc),
													group: "0_configure",
												},
											],
										});
									}
									run() {
										return te.j.resetSyncedData();
									}
								},
							),
						);
					}
					Gb(te) {
						this.D(this.w.createInstance(N.$d1c, te));
					}
				};
				(e.$e1c = ne),
					(e.$e1c = ne =
						Ne(
							[
								j(0, s.$4Rb),
								j(1, s.$5Rb),
								j(2, A.$Nxc),
								j(3, n.$6j),
								j(4, $.$7qc),
								j(5, o.$4N),
								j(6, v.$IY),
								j(7, z.$Xl),
								j(8, q.$P8),
								j(9, g.$GO),
								j(10, f.$DJ),
								j(11, p.$Li),
								j(12, y.$o8),
								j(13, s.$7Rb),
								j(14, u.$MO),
								j(15, S.$7Z),
								j(16, b.$km),
								j(17, T.$Bk),
								j(18, P.$7rb),
								j(19, k.$$7),
								j(20, s.$SRb),
								j(21, U.$asb),
								j(22, c.$ek),
								j(23, H.$7Xb),
							],
							ne,
						));
				let ee = class {
					constructor(te, Q, Z) {
						(this.a = te), (this.b = Q), (this.d = Z);
					}
					provideTextContent(te) {
						return te.scheme === s.$$Rb
							? this.a
									.resolveContent(te)
									.then((Q) =>
										this.b.createModel(Q || "", this.d.createById("jsonc"), te),
									)
							: null;
					}
				};
				ee = Ne([j(0, s.$5Rb), j(1, m.$QO), j(2, r.$nM)], ee);
			},
		),
		define(
			de[4052],
			he([
				1, 0, 55, 30, 52, 4051, 150, 40, 3, 4, 12, 3848, 50, 62, 31, 87, 522,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let o = class extends m.$1c {
					constructor(s, l, y, $, v) {
						super(),
							(this.a = l),
							(this.b = y),
							(this.c = $),
							(this.f = v),
							this.D(s.onError((S) => this.g(S)));
					}
					g(s) {
						switch (s.code) {
							case C.UserDataSyncErrorCode.LocalTooManyRequests: {
								const l = u.$r
									? (0, r.localize)(11234, null, this.b.nameLong)
									: (0, r.localize)(11235, null, this.b.nameLong);
								this.a.notify({
									severity: d.Severity.Error,
									message: l,
									actions: {
										primary: [
											new h.$rj(
												"Show Sync Logs",
												(0, r.localize)(11236, null),
												void 0,
												!0,
												() => this.c.executeCommand(p.$Yxc),
											),
											new h.$rj(
												"Restart",
												u.$r
													? (0, r.localize)(11237, null)
													: (0, r.localize)(11238, null),
												void 0,
												!0,
												() => this.f.restart(),
											),
										],
									},
								});
								return;
							}
							case C.UserDataSyncErrorCode.TooManyRequests: {
								const l = s.operationId
										? (0, r.localize)(11239, null, s.operationId)
										: void 0,
									y = (0, r.localize)(11240, null);
								this.a.notify({
									severity: d.Severity.Error,
									message: l ? `${y} ${l}` : y,
									source: s.operationId
										? (0, r.localize)(11241, null, s.operationId)
										: void 0,
									actions: {
										primary: [
											new h.$rj(
												"Show Sync Logs",
												(0, r.localize)(11242, null),
												void 0,
												!0,
												() => this.c.executeCommand(p.$Yxc),
											),
										],
									},
								});
								return;
							}
						}
					}
				};
				o = Ne(
					[j(0, C.$7Rb), j(1, d.$4N), j(2, c.$Bk), j(3, n.$ek), j(4, g.$asb)],
					o,
				);
				const f = i.$Io.as(t.Extensions.Workbench);
				f.registerWorkbenchContribution(E.$e1c, w.LifecyclePhase.Restored),
					f.registerWorkbenchContribution(a.$f1c, w.LifecyclePhase.Eventually),
					f.registerWorkbenchContribution(o, w.LifecyclePhase.Eventually);
			},
		),
		define(
			de[4053],
			he([
				1, 0, 6, 139, 7, 8, 10, 21, 151, 87, 12, 11, 4014, 49, 35, 96, 110, 253,
				5, 14, 26, 3538, 66, 18, 39, 75,
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
			) {
				"use strict";
				var I;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xdd = e.$wdd = e.$vdd = e.$udd = void 0);
				let T = class extends h.$utc {
					get minimumHeight() {
						return u.$m
							? (this.cc ? o.$AY : this.hc) /
									(this.preventZoom
										? (0, i.$Jfb)((0, w.getWindow)(this.element))
										: 1)
							: super.minimumHeight;
					}
					get maximumHeight() {
						return this.minimumHeight;
					}
					get hc() {
						return this.gc ? 28 : 22;
					}
					constructor(M, N, A, R, O, B, U, z, F, x, H, q, V, G, K, J, W) {
						super(M, N, A, R, O, B, U, z, F, x, H, q, G, K, J, W),
							(this.mc = V),
							(this.gc = (0, u.$M)(B.os.release));
					}
					Tb(M) {
						(u.$l || u.$n) &&
							this.ac === "toggle" &&
							M &&
							this.cb &&
							((0, w.hide)(this.cb),
							setTimeout(() => (0, w.show)(this.cb), 50)),
							super.Tb(M);
					}
					Qb(M) {
						super.Qb(M),
							M.affectsConfiguration("window.doubleClickIconToClose") &&
								this.ib &&
								this.pc();
					}
					pc() {
						this.Db.getValue("window.doubleClickIconToClose") && this.ib
							? (this.ib.style["-webkit-app-region"] = "no-drag")
							: this.ib && (this.ib.style["-webkit-app-region"] = "drag");
					}
					Rb() {
						super.Rb(),
							!this.kb &&
								this.hb &&
								this.D(this.hb.onFocusStateChange((M) => this.rc(M)));
					}
					rc(M) {
						(u.$l || u.$n) &&
							this.ac !== "compact" &&
							this.cb &&
							(M ? (0, w.hide)(this.cb) : (0, w.show)(this.cb));
					}
					Q(M) {
						const N = super.Q(M),
							A = (0, w.getWindow)(M),
							R = (0, w.getWindowId)(A);
						if (
							((u.$m || (0, o.$yY)(this.Db)) &&
								this.D(this.Fb.createInstance(l.$tdd)),
							this.ib &&
								(this.pc(),
								this.D(
									(0, w.$0fb)(this.ib, w.$$gb.DBLCLICK, () => {
										this.mc.closeWindow({ targetWindowId: R });
									}),
								)),
							u.$n && !(0, o.$yY)(this.Db) && !(0, i.$Wfb)() && this.bb)
						) {
							const O = (0, w.$fhb)(
								this.bb,
								(0, w.$)(
									"div.window-icon.window-minimize" +
										s.ThemeIcon.asCSSSelector(b.$ak.chromeMinimize),
								),
							);
							this.D(
								(0, w.$0fb)(O, w.$$gb.CLICK, () => {
									this.mc.minimizeWindow({ targetWindowId: R });
								}),
							),
								(this.ic = (0, w.$fhb)(
									this.bb,
									(0, w.$)("div.window-icon.window-max-restore"),
								)),
								this.D(
									(0, w.$0fb)(this.ic, w.$$gb.CLICK, async () =>
										(await this.mc.isMaximized({ targetWindowId: R }))
											? this.mc.unmaximizeWindow({ targetWindowId: R })
											: this.mc.maximizeWindow({ targetWindowId: R }),
									),
								);
							const B = (0, w.$fhb)(
								this.bb,
								(0, w.$)(
									"div.window-icon.window-close" +
										s.ThemeIcon.asCSSSelector(b.$ak.chromeClose),
								),
							);
							this.D(
								(0, w.$0fb)(B, w.$$gb.CLICK, () => {
									this.mc.closeWindow({ targetWindowId: R });
								}),
							),
								(this.jc = (0, w.$fhb)(this.c, (0, w.$)("div.resizer"))),
								this.D(
									t.Event.runAndSubscribe(
										this.M.onDidChangeWindowMaximized,
										({ windowId: U, maximized: z }) => {
											U === R && this.tc(z);
										},
										{ windowId: R, maximized: this.M.isWindowMaximized(A) },
									),
								);
						}
						return (
							u.$l &&
								!(0, o.$yY)(this.Db) &&
								this.D(
									this.mc.onDidTriggerWindowSystemContextMenu(
										({ windowId: O, x: B, y: U }) => {
											if (R !== O) return;
											const z = (0, i.$Jfb)((0, w.getWindow)(this.element));
											this.$b(
												new MouseEvent("mouseup", {
													clientX: B / z,
													clientY: U / z,
												}),
												a.$XX.TitleBarContext,
											);
										},
									),
								),
							N
						);
					}
					tc(M) {
						this.ic &&
							(M
								? (this.ic.classList.remove(
										...s.ThemeIcon.asClassNameArray(b.$ak.chromeMaximize),
									),
									this.ic.classList.add(
										...s.ThemeIcon.asClassNameArray(b.$ak.chromeRestore),
									))
								: (this.ic.classList.remove(
										...s.ThemeIcon.asClassNameArray(b.$ak.chromeRestore),
									),
									this.ic.classList.add(
										...s.ThemeIcon.asClassNameArray(b.$ak.chromeMaximize),
									))),
							this.jc && (M ? (0, w.hide)(this.jc) : (0, w.show)(this.jc));
					}
					updateStyles() {
						super.updateStyles(),
							(0, o.$BY)(this.Db) &&
								(!this.kc ||
									this.kc.bgColor !== this.element.style.backgroundColor ||
									this.kc.fgColor !== this.element.style.color) &&
								this.mc.updateWindowControls({
									targetWindowId: (0, w.getWindowId)(
										(0, w.getWindow)(this.element),
									),
									backgroundColor: this.element.style.backgroundColor,
									foregroundColor: this.element.style.color,
								});
					}
					layout(M, N) {
						if (
							(super.layout(M, N),
							(0, o.$BY)(this.Db) || (u.$m && u.$p && !(0, o.$yY)(this.Db)))
						) {
							const A =
								N > 0 || this.gc
									? Math.round(N * (0, i.$Jfb)((0, w.getWindow)(this.element)))
									: this.hc;
							A !== this.lc &&
								((this.lc = A),
								this.mc.updateWindowControls({
									targetWindowId: (0, w.getWindowId)(
										(0, w.getWindow)(this.element),
									),
									height: A,
								}));
						}
					}
				};
				(e.$udd = T),
					(e.$udd = T =
						Ne(
							[
								j(3, c.$Xxb),
								j(4, C.$gj),
								j(5, m.$ucd),
								j(6, f.$Li),
								j(7, n.$iP),
								j(8, d.$lq),
								j(9, g.$mEb),
								j(10, E.$6j),
								j(11, r.$asb),
								j(12, p.$y7c),
								j(13, y.$EY),
								j(14, $.$IY),
								j(15, a.$YX),
								j(16, v.$uZ),
							],
							T,
						));
				let P = class extends T {
					constructor(M, N, A, R, O, B, U, z, F, x, H, q, V, G) {
						super(
							g.Parts.TITLEBAR_PART,
							S.$Bfb,
							"main",
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
						);
					}
				};
				(e.$vdd = P),
					(e.$vdd = P =
						Ne(
							[
								j(0, c.$Xxb),
								j(1, C.$gj),
								j(2, m.$ucd),
								j(3, f.$Li),
								j(4, n.$iP),
								j(5, d.$lq),
								j(6, g.$mEb),
								j(7, E.$6j),
								j(8, r.$asb),
								j(9, p.$y7c),
								j(10, y.$EY),
								j(11, $.$IY),
								j(12, a.$YX),
								j(13, v.$uZ),
							],
							P,
						));
				let k = class extends T {
					static {
						I = this;
					}
					static {
						this.uc = 1;
					}
					get height() {
						return this.minimumHeight;
					}
					constructor(M, N, A, R, O, B, U, z, F, x, H, q, V, G, K, J, W) {
						const X = I.uc++;
						super(
							`workbench.parts.auxiliaryTitle.${X}`,
							(0, w.getWindow)(M),
							N,
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
						),
							(this.container = M),
							(this.vc = A);
					}
					get preventZoom() {
						return (
							(0, i.$Jfb)((0, w.getWindow)(this.element)) < 1 ||
							!this.vc.hasZoomableElements
						);
					}
				};
				(e.$wdd = k),
					(e.$wdd =
						k =
						I =
							Ne(
								[
									j(3, c.$Xxb),
									j(4, C.$gj),
									j(5, m.$ucd),
									j(6, f.$Li),
									j(7, n.$iP),
									j(8, d.$lq),
									j(9, g.$mEb),
									j(10, E.$6j),
									j(11, r.$asb),
									j(12, p.$y7c),
									j(13, y.$EY),
									j(14, $.$IY),
									j(15, a.$YX),
									j(16, v.$uZ),
								],
								k,
							));
				class L extends h.$ttc {
					b() {
						return this.a.createInstance(P);
					}
					r(M, N) {
						return this.a.createInstance(k, M, N, this.mainPart);
					}
				}
				e.$xdd = L;
			},
		),
		define(
			de[1950],
			he([
				1, 0, 76, 3, 9, 20, 5, 110, 25, 256, 449, 62, 151, 626, 68, 22, 4003,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zcd = e.$ycd = void 0),
					(e.$ycd = (0, C.$Mi)("INativeShadowWorkspaceManager"));
				let o = class extends i.$1c {
					constructor(b, s, l, y, $, v, S, I) {
						super(),
							(this.b = b),
							(this.c = s),
							(this.f = l),
							(this.g = y),
							(this.h = $),
							(this.j = v),
							(this.m = S),
							(this.n = I),
							(this.a = (0, a.$Dk)(this.c, this.g)),
							(this.q = void 0),
							(this.s = void 0),
							this.j.registerShadowWorkspaceManager(this);
					}
					dispose() {
						this.closeShadowWorkspace(), super.dispose();
					}
					available() {
						return !this.c.remoteAuthority;
					}
					async cleanUpOldFiles() {
						const s = (await this.n.resolve(this.a)).children
							?.filter((l) => l.name.endsWith(`.${m.$9i}`))
							.map((l) => l.name);
						s?.sort(),
							s?.length &&
								s
									.slice(0, -5)
									.forEach((l) => this.n.del(w.URI.joinPath(this.a, l)));
					}
					async createShadowWorkspace() {
						this.s && (await this.closeShadowWorkspace());
						const b = (Date.now() + Math.round(Math.random() * 1e3)).toString();
						this.s = w.URI.joinPath(this.a, `Untitled-${b}.${m.$9i}`);
						const s = this.b.getWorkspace().folders,
							l = [];
						for (const $ of s)
							l.push((0, r.$hRb)($.uri, !0, $.name, this.a, this.m.extUri));
						const y = {
							folders: l,
							remoteAuthority: this.c.remoteAuthority,
							transient: !0,
						};
						return (
							await this.n.writeFile(
								this.s,
								t.$Te.fromString(JSON.stringify(y, null, "	")),
							),
							this.cleanUpOldFiles().catch(($) =>
								console.error("failed to clean up old shadow workspaces", $),
							),
							(0, p.$L3c)(this.s)
						);
					}
					hasOpenShadowWorkspace() {
						return this.q !== void 0;
					}
					async openShadowWorkspace() {
						this.closeShadowWorkspace();
						const b = await this.createShadowWorkspace();
						await this.f.copyWorkspaceSettings(b, {
							overrides: { "files.autoSave": "off" },
						});
						const l = (
							await this.h.openWindow([{ workspaceUri: b.configPath }], {
								forceNewWindow: !0,
								shadowWindowForWorkspaceId: this.b.getWorkspace().id,
							})
						).at(0)?.windowId;
						l === void 0 && console.error("failed to open window"),
							(this.q = l);
					}
					async closeShadowWorkspace() {
						if (this.q) {
							const b = this.h.closeWindowNoFallback({
									targetWindowId: this.q,
								}),
								s = new Promise((l) => setTimeout(() => l("timedout"), 500));
							await Promise.race([b, s]),
								await this.h.destroyWindowNoFallback({
									targetWindowId: this.q,
								}),
								(this.q = void 0);
						}
						if (this.s) {
							try {
								await this.n.del(this.s);
							} catch (b) {
								console.warn(
									"failed to delete shadow workspace (this is probably fine)",
									b,
								);
							}
							this.s = void 0;
						}
					}
				};
				(e.$zcd = o),
					(e.$zcd = o =
						Ne(
							[
								j(0, m.$Vi),
								j(1, h.$ucd),
								j(2, u.$mRb),
								j(3, a.$Bk),
								j(4, d.$y7c),
								j(5, c.$k7b),
								j(6, n.$Vl),
								j(7, g.$ll),
							],
							o,
						)),
					(0, E.$lK)(e.$ycd, o, E.InstantiationType.Delayed);
			},
		),
		define(
			de[4054],
			he([
				1, 0, 20, 5, 10, 21, 21, 12, 39, 571, 1324, 53, 22, 1950, 31, 40, 3516,
				113, 45, 3642,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Mcd = e.$Lcd = void 0),
					(e.$Lcd = (0, i.$Mi)("onFirstStartupService"));
				let s = class {
					constructor(y, $, v, S, I, T, P, k, L, D, M, N, A) {
						(this.b = y),
							(this.c = $),
							(this.d = v),
							(this.f = S),
							(this.g = D),
							(this.h = M),
							(this.i = N),
							(this.j = A);
						const R = async (z) => {
								const F = z
									.map((x) => ({
										extensionId: x,
										hotfix: p.$Icd.find((H) => H.extensionId === x),
									}))
									.filter((x) => x.hotfix !== void 0);
								await Promise.all(
									F.map(async ({ extensionId: x, hotfix: H }) => {
										const q = await I.getExtension(x);
										q &&
											(await (0, p.$Jcd)(
												H,
												x,
												q.version,
												q.extensionLocation,
												T,
											));
									}),
								);
							},
							O = (z) => R(z.map((F) => F.identifier.value));
						I.registerHotfixExtensionsProvider(O),
							I.onDidChangeExtensionsStatus((z) => R(z.map((F) => F.value)));
						const B = !this.h.isBuilt || this.h.isExtensionDevelopment;
						this.g.createScoped(this).onChangeEffect({
							deps: [() => this.g.applicationUserPersistentStorage.cppEnabled],
							onChange: ({ deps: [z] }) => {
								if (!z)
									try {
										const F = {};
										Error.captureStackTrace(F),
											B &&
												(console.log("stackTrace", F.stack),
												L.error(
													"Cpp somehow disabled. Please ping Aman in slack and open console logs to see the stack trace",
												)),
											A.logWhenTabTurnsOff({
												stackTrace: F.stack?.toString(),
											}).catch((x) => {
												console.error(x);
											});
									} catch {}
							},
						}),
							(this.a = this.d.lookupKeybinding(r.$1qc.ID)),
							this.d.onDidUpdateKeybindings(() => {
								const z = this.d
									.getKeybindings()
									.filter(
										(F) => F.command === r.$1qc.ID,
									)[0]?.resolvedKeybinding;
								try {
									if (
										!this.a ||
										!z ||
										z.getUserSettingsLabel() ===
											this.a.getUserSettingsLabel() ||
										!z.getUserSettingsLabel() ||
										!this.a.getUserSettingsLabel()
									)
										return;
									const x = [];
									for (const H of this.d.getKeybindings())
										if (
											H.resolvedKeybinding &&
											this.a.isProperPrefixOf(H.resolvedKeybinding) &&
											H.command !== r.$1qc.ID
										) {
											const q =
												H.resolvedKeybinding.replacePrefixAndGetUserSettingsLabel(
													this.a,
													z,
												);
											q &&
												x.push(
													this.f.editKeybinding(H, q, H.when?.serialize()),
												);
										}
									Promise.all(x)
										.then(() => {
											console.log("updated keybindings");
										})
										.catch((H) => {
											console.error(H);
										});
								} catch (F) {
									console.error(F, "error updating keybindings");
								} finally {
									this.a = z;
								}
							});
					}
					activate() {
						if (
							this.b.getBoolean(
								"workbench.services.onFirstStartupService.hasNotResetJetBrainsMonoFont",
								C.StorageScope.APPLICATION,
								!0,
							) &&
							d.$l
						) {
							this.b.store(
								"workbench.services.onFirstStartupService.hasNotResetJetBrainsMonoFont",
								!1,
								C.StorageScope.APPLICATION,
								C.StorageTarget.MACHINE,
							);
							const v = this.c.getValue("editor.fontFamily");
							v &&
								v.includes("JetBrains Mono") &&
								this.c.updateValue("editor.fontFamily", void 0);
						}
						if (
							this.b.getBoolean(
								"workbench.services.onFirstStartupService.isVeryFirstTime",
								C.StorageScope.APPLICATION,
								!0,
							) &&
							(this.b.store(
								"workbench.services.onFirstStartupService.isVeryFirstTime",
								!1,
								C.StorageScope.APPLICATION,
								C.StorageTarget.MACHINE,
							),
							d.$m)
						)
							try {
							} catch {}
					}
				};
				(e.$Mcd = s),
					(e.$Mcd = s =
						Ne(
							[
								j(0, E.$lq),
								j(1, w.$gj),
								j(2, m.$uZ),
								j(3, u.$evc),
								j(4, a.$q2),
								j(5, h.$ll),
								j(6, n.$ek),
								j(7, c.$ycd),
								j(8, g.$4N),
								j(9, f.$0zb),
								j(10, o.$Ti),
								j(11, i.$Li),
								j(12, b.$Kcd),
							],
							s,
						)),
					(0, t.$lK)(e.$Lcd, s, t.InstantiationType.Eager);
			},
		),
		define(
			de[1951],
			he([
				1, 0, 4, 9, 29, 82, 7, 50, 22, 44, 18, 32, 253, 713, 333, 676, 139, 31,
				320, 449, 11, 92, 15, 3, 52, 1297, 12, 62, 40, 39, 151, 91, 25, 24, 10,
				21, 28, 41, 23, 110, 54, 374, 96, 227, 334, 170, 6, 211, 66, 57, 34, 5,
				192, 230, 84, 163, 73, 19, 823, 14, 68, 131, 1904, 4054, 3451, 75, 1833,
				87, 166, 105, 26, 55, 224, 72, 455, 2536,
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
			) {
				"use strict";
				var Oe;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ocd = void 0);
				let xe = (Oe = class extends ue.$yEb {
					constructor(
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
						hi,
						Kt,
						di,
						Ye,
						ze,
						Xe,
						It,
						Lt,
					) {
						super(ye.$Bfb, void 0, Lt, Ve),
							(this.t = Je),
							(this.u = Te),
							(this.w = Ee),
							(this.y = Ie),
							(this.z = Be),
							(this.C = Se),
							(this.F = ke),
							(this.G = Ue),
							(this.H = qe),
							(this.I = Ae),
							(this.J = Me),
							(this.L = De),
							(this.M = Re),
							(this.N = je),
							(this.O = Ve),
							(this.P = Ze),
							(this.Q = et),
							(this.R = rt),
							(this.S = ft),
							(this.U = bt),
							(this.W = nt),
							(this.X = lt),
							(this.Y = ct),
							(this.Z = gt),
							(this.$ = ht),
							(this.ab = Rt),
							(this.bb = Nt),
							(this.cb = jt),
							(this.db = ti),
							(this.eb = kt),
							(this.fb = hi),
							(this.gb = Kt),
							(this.hb = di),
							(this.ib = Ye),
							(this.jb = ze),
							(this.kb = Xe),
							(this.lb = It),
							(this.n = this.D(new $.$Zc())),
							(this.q = this.D(new y.$Yh(() => this.Lb(), 100))),
							(this.r = []),
							(this.s = !1),
							(this.Gb = this.D(new $.$Zc())),
							(this.Pb = new Map()),
							(this.Qb = this.Rb()),
							this.lb.activate(),
							this.mb(),
							this.Ab();
					}
					mb() {
						this.D((0, C.$0fb)(ye.$Bfb, C.$$gb.RESIZE, () => this.W.layout())),
							this.D(this.t.onDidActiveEditorChange(() => this.Ib()));
						for (const Te of [C.$$gb.DRAG_OVER, C.$$gb.DROP])
							this.D(
								(0, C.$0fb)(ye.$Bfb.document.body, Te, (Ee) => {
									C.$ahb.stop(Ee);
								}),
							);
						f.$P.on("vscode:runAction", async (Te, Ee) => {
							const Ie = Ee.args || [];
							if (Ee.from === "touchbar") {
								const Be = this.t.activeEditor;
								if (Be) {
									const Se = r.$A1.getOriginalUri(Be, {
										supportSideBySide: r.SideBySideEditor.PRIMARY,
									});
									Se && Ie.push(Se);
								}
							} else Ie.push({ from: Ee.from });
							try {
								await this.F.executeCommand(Ee.id, ...Ie),
									this.H.publicLog2("workbenchActionExecuted", {
										id: Ee.id,
										from: Ee.from,
									});
							} catch (Be) {
								this.C.error(Be);
							}
						}),
							f.$P.on("vscode:runKeybinding", (Te, Ee) => {
								const Ie = (0, C.$Jgb)();
								Ie &&
									this.G.dispatchByUserSettingsLabel(Ee.userSettingsLabel, Ie);
							}),
							f.$P.on("vscode:reportError", (Te, Ee) => {
								Ee && (0, w.$4)(JSON.parse(Ee));
							}),
							f.$P.on("vscode:reportSharedProcessCrash", (Te, Ee) => {
								this.C.prompt(
									P.Severity.Error,
									(0, t.localize)(11903, null),
									[
										{
											label: (0, t.localize)(11904, null),
											run: () => this.S.relaunch(),
										},
									],
									{ priority: P.NotificationPriority.URGENT },
								);
							}),
							f.$P.on("vscode:openFiles", (Te, Ee) => {
								this.Mb(Ee);
							}),
							f.$P.on("vscode:addFolders", (Te, Ee) => {
								this.Kb(Ee);
							}),
							f.$P.on("vscode:showInfoMessage", (Te, Ee) => {
								this.C.info(Ee);
							}),
							f.$P.on("vscode:showResolveShellEnvError", (Te, Ee) => {
								this.C.prompt(P.Severity.Error, Ee, [
									{
										label: (0, t.localize)(11905, null),
										run: () => this.S.relaunch(),
									},
									{
										label: (0, t.localize)(11906, null),
										run: () =>
											this.jb.openUserSettings({
												query: "application.shellEnvironmentResolutionTimeout",
											}),
									},
									{
										label: (0, t.localize)(11907, null),
										run: () =>
											this.R.open(
												"https://go.microsoft.com/fwlink/?linkid=2149667",
											),
									},
								]);
							}),
							f.$P.on("vscode:showCredentialsError", (Te, Ee) => {
								this.C.prompt(
									P.Severity.Error,
									(0, t.localize)(11908, null, Ee),
									[
										{
											label: (0, t.localize)(11909, null),
											run: () =>
												this.R.open(
													"https://go.microsoft.com/fwlink/?linkid=2190713",
												),
										},
									],
								);
							}),
							f.$P.on("vscode:showTranslatedBuildWarning", () => {
								this.C.prompt(
									P.Severity.Warning,
									(0, t.localize)(11910, null, this.Z.nameLong),
									[
										{
											label: (0, t.localize)(11911, null),
											run: () => {
												const Te = this.Z.quality;
												this.R.open(
													Te === "stable"
														? "https://code.visualstudio.com/docs/?dv=osx"
														: "https://code.visualstudio.com/docs/?dv=osx&build=insiders",
												);
											},
										},
									],
									{ priority: P.NotificationPriority.URGENT },
								);
							}),
							f.$P.on("vscode:showArgvParseWarning", (Te, Ee) => {
								this.C.prompt(
									P.Severity.Warning,
									(0, t.localize)(11912, null),
									[
										{
											label: (0, t.localize)(11913, null),
											run: () =>
												this.t.openEditor({ resource: this.O.argvResource }),
										},
									],
									{ priority: P.NotificationPriority.URGENT },
								);
							}),
							f.$P.on("vscode:enterFullScreen", () => (0, p.$Lfb)(!0, ye.$Bfb)),
							f.$P.on("vscode:leaveFullScreen", () => (0, p.$Lfb)(!1, ye.$Bfb)),
							f.$P.on(
								"vscode:openProxyAuthenticationDialog",
								async (Te, Ee) => {
									const Ie = "window.rememberProxyCredentials",
										Be = this.bb.getBoolean(Ie, R.StorageScope.APPLICATION),
										Se = await this.ab.input({
											type: "warning",
											message: (0, t.localize)(11914, null),
											primaryButton: (0, t.localize)(11915, null),
											inputs: [
												{
													placeholder: (0, t.localize)(11916, null),
													value: Ee.username,
												},
												{
													placeholder: (0, t.localize)(11917, null),
													type: "password",
													value: Ee.password,
												},
											],
											detail: (0, t.localize)(
												11918,
												null,
												`${Ee.authInfo.host}:${Ee.authInfo.port}`,
											),
											checkbox: {
												label: (0, t.localize)(11919, null),
												checked: Be,
											},
										});
									if (!Se.confirmed || !Se.values) f.$P.send(Ee.replyChannel);
									else {
										Se.checkboxChecked
											? this.bb.store(
													Ie,
													!0,
													R.StorageScope.APPLICATION,
													R.StorageTarget.MACHINE,
												)
											: this.bb.remove(Ie, R.StorageScope.APPLICATION);
										const [ke, Ue] = Se.values;
										f.$P.send(Ee.replyChannel, {
											username: ke,
											password: Ue,
											remember: !!Se.checkboxChecked,
										});
									}
								},
							),
							f.$P.on("vscode:accessibilitySupportChanged", (Te, Ee) => {
								this.P.setAccessibilitySupport(
									Ee
										? D.AccessibilitySupport.Enabled
										: D.AccessibilitySupport.Disabled,
								);
							}),
							f.$P.on("vscode:configureAllowedUNCHost", async (Te, Ee) => {
								if (!I.$l) return;
								const Ie = new Set(),
									Be = this.w.getValue("security.allowedUNCHosts") ?? [];
								if (Array.isArray(Be))
									for (const Se of Be) typeof Se == "string" && Ie.add(Se);
								Ie.has(Ee) ||
									(Ie.add(Ee),
									await (0, be.$t6)(Ce.$B6.ID).ready,
									this.w.updateValue(
										"security.allowedUNCHosts",
										[...Ie.values()],
										A.ConfigurationTarget.USER,
									));
							}),
							f.$P.on("vscode:disablePromptForProtocolHandling", (Te, Ee) => {
								const Ie =
									Ee === "local"
										? "security.promptForLocalFileProtocolHandling"
										: "security.promptForRemoteFileProtocolHandling";
								this.w.updateValue(Ie, !1);
							}),
							this.D(
								this.w.onDidChangeConfiguration((Te) => {
									Te.affectsConfiguration("window.zoomLevel") ||
									(Te.affectsConfiguration("window.zoomPerWindow") &&
										this.w.getValue("window.zoomPerWindow") === !1)
										? this.Vb()
										: (Te.affectsConfiguration("keyboard.touchbar.enabled") ||
												Te.affectsConfiguration("keyboard.touchbar.ignored")) &&
											this.Ib();
								}),
							),
							this.D((0, p.$Ifb)((Te) => this.Sb(Te)));
						for (const Te of this.u.parts) this.Tb(Te);
						this.D(this.u.onDidCreateAuxiliaryEditorPart((Te) => this.Tb(Te))),
							this.D(
								K.Event.debounce(
									this.t.onDidVisibleEditorsChange,
									() => {},
									0,
									void 0,
									void 0,
									void 0,
									this.B,
								)(() => this.yb()),
							);
						const Je = this.O.filesToWait;
						if (
							(Je &&
								this.Nb(
									Je.waitMarkerFileUri,
									(0, N.$Lb)(Je.paths.map((Te) => Te.fileUri)),
								),
							I.$m)
						) {
							for (const Te of this.u.parts) this.nb(Te);
							this.D(
								this.u.onDidCreateAuxiliaryEditorPart((Te) => this.nb(Te)),
							);
						}
						I.$m &&
							!(0, h.$yY)(this.w) &&
							this.D(
								K.Event.runAndSubscribe(
									this.W.onDidAddContainer,
									({ container: Te, disposables: Ee }) => {
										const Ie = (0, C.getWindow)(Te),
											Be = Ie.vscodeWindowId,
											Se = (0, O.$wg)(
												this.W.getContainer(Ie, H.Parts.TITLEBAR_PART),
											);
										Ee.add(
											(0, C.$0fb)(Se, C.$$gb.DBLCLICK, (ke) => {
												C.$ahb.stop(ke),
													this.S.handleTitleDoubleClick({ targetWindowId: Be });
											}),
										);
									},
									{ container: this.W.mainContainer, disposables: this.B },
								),
							),
							this.D(
								this.X.onDidChangeDirty((Te) => {
									const Ee = Te.isDirty();
									(Ee &&
										!(Te.capabilities & V.WorkingCopyCapabilities.Untitled) &&
										this.Y.hasShortAutoSaveDelay(Te.resource)) ||
										this.vb(Ee ? !0 : void 0);
								}),
							),
							this.vb(void 0),
							this.D(
								K.Event.any(
									K.Event.map(
										K.Event.filter(
											this.S.onDidMaximizeWindow,
											(Te) => !!(0, C.hasWindow)(Te),
										),
										(Te) => ({ maximized: !0, windowId: Te }),
									),
									K.Event.map(
										K.Event.filter(
											this.S.onDidUnmaximizeWindow,
											(Te) => !!(0, C.hasWindow)(Te),
										),
										(Te) => ({ maximized: !1, windowId: Te }),
									),
								)((Te) =>
									this.W.updateWindowMaximizedState(
										(0, C.getWindowById)(Te.windowId).window,
										Te.maximized,
									),
								),
							),
							this.W.updateWindowMaximizedState(
								ye.$Bfb,
								this.O.window.maximized ?? !1,
							),
							this.D(
								this.W.onDidChangePanelPosition((Te) =>
									this.xb((0, H.$pEb)(Te)),
								),
							),
							this.xb(this.W.getPanelPosition()),
							this.D(this.M.onBeforeShutdown((Te) => this.pb(Te))),
							this.D(this.M.onBeforeShutdownError((Te) => this.rb(Te))),
							this.D(this.M.onWillShutdown((Te) => this.sb(Te)));
					}
					nb(Je) {
						const Te = new $.$Zc();
						K.Event.once(Je.onWillDispose)(() => Te.dispose());
						const Ee = this.u
							.getScopedInstantiationService(Je)
							.invokeFunction((Ie) => Ie.get(u.$IY));
						Te.add(Ee.onDidActiveEditorChange(() => this.ob(Ee, Je.windowId)));
					}
					ob(Je, Te) {
						const Ee = r.$A1.getOriginalUri(Je.activeEditor, {
							supportSideBySide: r.SideBySideEditor.PRIMARY,
							filterByScheme: U.Schemas.file,
						});
						this.S.setRepresentedFilename(Ee?.fsPath ?? "", {
							targetWindowId: Te,
						}),
							Te === ye.$Bfb.vscodeWindowId && this.zb(Ee?.fsPath);
					}
					pb({ veto: Je, reason: Te }) {
						if (Te === v.ShutdownReason.CLOSE) {
							const Ee = this.w.getValue("window.confirmBeforeClose"),
								Ie =
									Ee === "always" ||
									(Ee === "keyboardOnly" &&
										C.$Fhb.getInstance().isModifierPressed);
							if (Ie)
								return Je(
									(async () => {
										let Be = Te;
										Te === v.ShutdownReason.CLOSE &&
											!I.$m &&
											(await this.S.getWindowCount()) === 1 &&
											(Be = v.ShutdownReason.QUIT);
										let Se = !0;
										return (
											Ie &&
												(Se = await this.db.invokeFunction((ke) =>
													Oe.confirmOnShutdown(ke, Be),
												)),
											Se && this.qb(Te),
											!Se
										);
									})(),
									"veto.confirmBeforeClose",
								);
						}
						this.qb(Te);
					}
					qb(Je) {
						this.fb.withProgress(
							{
								location: _.ProgressLocation.Window,
								delay: 800,
								title: this.tb(Je, !1),
							},
							() =>
								K.Event.toPromise(
									K.Event.any(
										this.M.onWillShutdown,
										this.M.onShutdownVeto,
										this.ab.onWillShowDialog,
									),
								),
						);
					}
					rb({ error: Je, reason: Te }) {
						this.ab.error(
							this.tb(Te, !0),
							(0, t.localize)(11920, null, (0, te.$xj)(Je)),
						);
					}
					sb({ reason: Je, force: Te, joiners: Ee }) {
						const Ie = new y.$Yh(() => {
							const Be = Ee();
							this.fb.withProgress(
								{
									location: _.ProgressLocation.Dialog,
									buttons: [this.ub(Je)],
									cancellable: !1,
									sticky: !0,
									title: this.tb(Je, !1),
									detail:
										Be.length > 0
											? (0, t.localize)(
													11921,
													null,
													Be.map((Se) => `- ${Se.label}`).join(`
`),
												)
											: void 0,
								},
								() => K.Event.toPromise(this.M.onDidShutdown),
								() => {
									Te();
								},
							);
						}, 1200);
						Ie.schedule(),
							K.Event.once(this.M.onDidShutdown)(() => Ie.dispose());
					}
					tb(Je, Te) {
						if (Te)
							switch (Je) {
								case v.ShutdownReason.CLOSE:
									return (0, t.localize)(11922, null);
								case v.ShutdownReason.QUIT:
									return (0, t.localize)(11923, null);
								case v.ShutdownReason.RELOAD:
									return (0, t.localize)(11924, null);
								case v.ShutdownReason.LOAD:
									return (0, t.localize)(11925, null);
							}
						switch (Je) {
							case v.ShutdownReason.CLOSE:
								return (0, t.localize)(11926, null);
							case v.ShutdownReason.QUIT:
								return (0, t.localize)(11927, null);
							case v.ShutdownReason.RELOAD:
								return (0, t.localize)(11928, null);
							case v.ShutdownReason.LOAD:
								return (0, t.localize)(11929, null);
						}
					}
					ub(Je) {
						switch (Je) {
							case v.ShutdownReason.CLOSE:
								return (0, t.localize)(11930, null);
							case v.ShutdownReason.QUIT:
								return (0, t.localize)(11931, null);
							case v.ShutdownReason.RELOAD:
								return (0, t.localize)(11932, null);
							case v.ShutdownReason.LOAD:
								return (0, t.localize)(11933, null);
						}
					}
					vb(Je) {
						let Te;
						typeof Je == "boolean" ? (Te = Je) : (Te = this.X.hasDirty),
							((!this.s && Te) || (this.s && !Te)) &&
								((this.s = Te), this.S.setDocumentEdited(Te));
					}
					wb(Je = this.W.getPanelPosition()) {
						return Je === H.Position.LEFT || Je === H.Position.RIGHT
							? h.$rY.WIDTH_WITH_VERTICAL_PANEL
							: h.$rY.WIDTH;
					}
					xb(Je) {
						const Te = this.wb(Je);
						this.S.setMinimumSize(Te, void 0);
					}
					yb() {
						if (this.w.getValue("window.closeWhenEmpty") || this.O.args.wait)
							for (const Te of this.u.parts)
								Te.groups.some((Ee) => !Ee.isEmpty) ||
									(Te === this.u.mainPart &&
										(this.Q.getWorkbenchState() !== M.WorkbenchState.EMPTY ||
											this.f.isExtensionDevelopment ||
											this.t.visibleEditors.length > 0)) ||
									(Te === this.u.mainPart
										? this.S.closeWindow()
										: Te.removeGroup(Te.activeGroup));
					}
					zb(Je) {
						if ((this.n.clear(), !Je || (0, h.$yY)(this.w))) return;
						const Te = Je.split(F.$lc.sep);
						for (let Ee = Te.length; Ee > 0; Ee--) {
							const Ie = Ee === Te.length;
							let Be = Ee;
							Ie || Be++;
							const Se = i.URI.file(Te.slice(0, Be).join(F.$lc.sep));
							let ke;
							Ie
								? (ke = this.gb.getUriBasenameLabel(Se))
								: (ke = this.gb.getUriBasenameLabel((0, Z.$mh)(Se)));
							const Ue = `workbench.action.revealPathInFinder${Ee}`;
							this.n.add(
								o.$fk.registerCommand(Ue, () =>
									this.S.showItemInFolder(Se.fsPath),
								),
							),
								this.n.add(
									s.$ZX.appendMenuItem(s.$XX.TitleBarTitleContext, {
										command: { id: Ue, title: ke || F.$lc.sep },
										order: -Ee,
										group: "1_file",
									}),
								);
						}
					}
					Ab() {
						this.Eb(),
							this.M.when(v.LifecyclePhase.Ready).then(() =>
								this.S.notifyReady(),
							),
							this.M.when(v.LifecyclePhase.Restored).then(() => {
								this.eb.notifyRestored(), this.kb.notifyRestored();
							}),
							this.Bb(),
							this.Ib(),
							this.f.enableSmokeTestDriver && this.Cb();
					}
					async Bb() {
						if (
							(!Fe.$V &&
								typeof ce.hasDependencyCycle == "function" &&
								ce.hasDependencyCycle() &&
								(I.$w
									? (this.cb.error(
											"Error: There is a dependency cycle in the AMD modules that needs to be resolved!",
										),
										this.S.exit(37))
									: (this.ab.error((0, t.localize)(11934, null)),
										this.S.openDevTools())),
							await this.M.when(v.LifecyclePhase.Restored),
							(async () => {
								const Te = await this.S.isAdmin(),
									{ isPure: Ee } = await this.N.isPure();
								this.y.updateProperties({ isPure: Ee, isAdmin: Te }),
									Te &&
										!I.$l &&
										this.C.warn((0, t.localize)(11935, null, this.Z.nameShort));
							})(),
							this.f.isBuilt)
						) {
							let Te;
							I.$m
								? (Te = (0, Z.$mh)(
										(0, Z.$mh)((0, Z.$mh)(i.URI.file(this.O.appRoot))),
									))
								: (Te = (0, Z.$mh)((0, Z.$mh)(i.URI.file(this.O.appRoot))));
							for (const Ee of this.Q.getWorkspace().folders)
								if (this.ib.extUri.isEqualOrParent(Ee.uri, Te)) {
									this.hb.show({
										id: "appRootWarning.banner",
										message: (0, t.localize)(
											11936,
											null,
											this.gb.getUriLabel(Te),
										),
										icon: re.$ak.warning,
									});
									break;
								}
						}
						if (I.$m) {
							const Te = this.O.os.release.split(".")[0],
								Ee = new Map([
									["17", "macOS High Sierra"],
									["18", "macOS Mojave"],
								]);
							if (Ee.has(Te)) {
								const Ie = (0, t.localize)(
									11937,
									null,
									this.Z.nameLong,
									Ee.get(Te),
								);
								this.C.prompt(
									P.Severity.Warning,
									Ie,
									[
										{
											label: (0, t.localize)(11938, null),
											run: () =>
												this.R.open(
													i.URI.parse("https://aka.ms/vscode-faq-old-macOS"),
												),
										},
									],
									{
										neverShowAgain: {
											id: "macoseol",
											isSecondary: !0,
											scope: P.NeverShowAgainScope.APPLICATION,
										},
										priority: P.NotificationPriority.URGENT,
										sticky: !0,
									},
								);
							}
						}
						const Je = f.$S.shellEnv();
						this.fb.withProgress(
							{
								title: (0, t.localize)(11939, null),
								location: _.ProgressLocation.Window,
								delay: 1600,
								buttons: [(0, t.localize)(11940, null)],
							},
							() => Je,
							() =>
								this.R.open("https://go.microsoft.com/fwlink/?linkid=2149667"),
						);
					}
					Cb() {
						const Je = this;
						let Te = !1;
						(0, $e.$Ncd)(this.db, {
							async exitApplication() {
								if (Te) {
									Je.cb.info(
										"[driver] not handling exitApplication() due to pending quit() call",
									);
									return;
								}
								return (
									Je.cb.info("[driver] handling exitApplication()"),
									(Te = !0),
									Je.S.quit()
								);
							},
						});
					}
					async Db(Je, Te) {
						const Ee = this.f.remoteAuthority,
							Ie = Ee
								? {
										getAddress: async () =>
											(await this.$.resolveAuthority(Ee)).authority,
									}
								: void 0,
							Be = await this.U.getExistingTunnel(Je, Te);
						return !Be || typeof Be == "string"
							? this.U.openTunnel(Ie, Je, Te)
							: Be;
					}
					async resolveExternalUri(Je, Te) {
						let Ee;
						if (Te?.allowTunneling) {
							const Ie = (0, x.$fO)(Je),
								Be = (0, x.$gO)(Je);
							if (
								Be &&
								((Ee = await this.Db(Be.address, Be.port)),
								Ee && typeof Ee != "string")
							) {
								if (Ee.tunnelRemotePort !== Be.port)
									Ee.dispose(), (Ee = void 0);
								else if (!Ie) {
									const Se = Ee;
									return { resolved: Je, dispose: () => Se.dispose() };
								}
							}
							if (Ie) {
								const Se = await this.Db(Ie.address, Ie.port);
								if (Se && typeof Se != "string") {
									const ke = i.URI.parse(Se.localAddress);
									return {
										resolved: ke.scheme.startsWith(Je.scheme)
											? ke
											: Je.with({ authority: Se.localAddress }),
										dispose() {
											Se.dispose(), Ee && typeof Ee != "string" && Ee.dispose();
										},
									};
								}
							}
						}
						if (!Te?.openExternal && (await this.J.canHandleResource(Je)))
							return {
								resolved: i.URI.from({
									scheme: this.Z.urlProtocol,
									path: "workspace",
									query: Je.toString(),
								}),
								dispose() {},
							};
					}
					Eb() {
						this.R.setDefaultExternalOpener({
							openExternal: async (Je) => {
								if (
									!(await this.S.openExternal(
										Je,
										this.w.getValue("workbench.externalBrowser"),
									))
								) {
									const Ee = i.URI.parse(Je);
									Ee.scheme === U.Schemas.file &&
										(await this.S.showItemInFolder(Ee.fsPath));
								}
								return !0;
							},
						}),
							this.R.registerExternalUriResolver({
								resolveExternalUri: async (Je, Te) =>
									this.resolveExternalUri(Je, Te),
							});
					}
					Ib() {
						if (!I.$m) return;
						this.Gb.clear(), (this.Fb = void 0);
						const Je = this.Gb.add(new y.$Yh(() => this.Jb(Je), 300));
						Je.schedule();
					}
					Jb(Je) {
						if (!this.Fb) {
							const Ue =
								this.t.activeEditorPane?.scopedContextKeyService ||
								this.u.activeGroup.scopedContextKeyService;
							(this.Fb = this.L.createMenu(s.$XX.TouchBarContext, Ue)),
								this.Gb.add(this.Fb),
								this.Gb.add(this.Fb.onDidChange(() => Je.schedule()));
						}
						const Te = [],
							Ee = this.w.getValue("keyboard.touchbar.enabled") === !1,
							Ie = this.w.getValue("keyboard.touchbar.ignored"),
							Be = Array.isArray(Ie) ? Ie : [];
						(0, l.$Kyb)(this.Fb, void 0, Te);
						const Se = [];
						let ke = [];
						if (!Ee) {
							for (const Ue of Te)
								if (Ue instanceof s.$2X) {
									if (Be.indexOf(Ue.item.id) >= 0) continue;
									ke.push(Ue.item);
								} else
									Ue instanceof d.$tj && (ke.length && Se.push(ke), (ke = []));
							ke.length && Se.push(ke);
						}
						(0, E.$zo)(this.Hb, Se) ||
							((this.Hb = Se), this.S.updateTouchBar(Se));
					}
					Kb(Je) {
						this.r.push(...Je.foldersToAdd.map((Te) => i.URI.revive(Te))),
							this.q.isScheduled() || this.q.schedule();
					}
					Lb() {
						const Je = [];
						for (const Te of this.r) Je.push({ uri: Te });
						(this.r = []), this.I.addFolders(Je);
					}
					async Mb(Je) {
						const Te = !!(Je.filesToDiff && Je.filesToDiff.length === 2),
							Ee = !!(Je.filesToMerge && Je.filesToMerge.length === 4),
							Ie = (0, N.$Lb)(
								await (0, r.$B1)(
									Ee
										? Je.filesToMerge
										: Te
											? Je.filesToDiff
											: Je.filesToOpenOrCreate,
									this.J,
									this.cb,
								),
							);
						if (Ie.length) {
							const Be = await this.Ob(Ie, Te, Ee);
							if (Je.filesToWait)
								return Be.length
									? this.Nb(
											i.URI.revive(Je.filesToWait.waitMarkerFileUri),
											(0, N.$Lb)(
												Je.filesToWait.paths.map((Se) =>
													i.URI.revive(Se.fileUri),
												),
											),
										)
									: this.J.del(i.URI.revive(Je.filesToWait.waitMarkerFileUri));
						}
					}
					async Nb(Je, Te) {
						await this.db.invokeFunction((Ee) => (0, ne.$xVb)(Ee, Te)),
							await this.J.del(Je);
					}
					async Ob(Je, Te, Ee) {
						const Ie = [];
						if (
							Ee &&
							(0, r.$i1)(Je[0]) &&
							(0, r.$i1)(Je[1]) &&
							(0, r.$i1)(Je[2]) &&
							(0, r.$i1)(Je[3])
						) {
							const Be = {
								input1: { resource: Je[0].resource },
								input2: { resource: Je[1].resource },
								base: { resource: Je[2].resource },
								result: { resource: Je[3].resource },
								options: { pinned: !0 },
							};
							Ie.push(Be);
						} else if (Te && (0, r.$i1)(Je[0]) && (0, r.$i1)(Je[1])) {
							const Be = {
								original: { resource: Je[0].resource },
								modified: { resource: Je[1].resource },
								options: { pinned: !0 },
							};
							Ie.push(Be);
						} else Ie.push(...Je);
						return this.t.openEditors(Ie, void 0, { validateTrust: !0 });
					}
					Rb() {
						const Je = this.w.getValue("window.zoomLevel");
						return typeof Je == "number" ? Je : 0;
					}
					Sb(Je) {
						if ((this.Ub(Je), Je === ye.$Bfb.vscodeWindowId)) {
							const Te = (0, p.$Hfb)(ye.$Bfb);
							let Ee;
							this.Qb !== Te && (Ee = Te),
								f.$P.invoke("vscode:notifyZoomLevel", Ee);
						}
					}
					Tb(Je) {
						const Te = new $.$Zc();
						K.Event.once(Je.onWillDispose)(() => Te.dispose());
						const Ee = this.u.getScopedInstantiationService(Je);
						this.Pb.set(Je.windowId, Te.add(Ee.createInstance(He))),
							Te.add((0, $.$Yc)(() => this.Pb.delete(Je.windowId))),
							this.Ub(Je.windowId);
					}
					Ub(Je) {
						const Te = (0, C.getWindowById)(Je),
							Ee = this.Pb.get(Je);
						if (Ee && Te) {
							const Ie = (0, p.$Hfb)(Te.window);
							let Be;
							Ie < this.Qb
								? (Be = "$(zoom-out)")
								: Ie > this.Qb && (Be = "$(zoom-in)"),
								Ee.updateZoomEntry(Be ?? !1, Je);
						}
					}
					Vb() {
						this.Qb = this.Rb();
						let Je = !1;
						for (const { window: Te } of (0, C.getWindows)())
							if ((0, p.$Hfb)(Te) !== this.Qb) {
								Je = !0;
								break;
							}
						Je && (0, g.$28c)(this.Qb, g.ApplyZoomTarget.ALL_WINDOWS);
						for (const [Te] of this.Pb) this.Ub(Te);
					}
					dispose() {
						super.dispose();
						for (const [, Je] of this.Pb) Je.dispose();
					}
				});
				(e.$Ocd = xe),
					(e.$Ocd =
						xe =
						Oe =
							Ne(
								[
									j(0, u.$IY),
									j(1, W.$EY),
									j(2, A.$gj),
									j(3, c.$Wqc),
									j(4, n.$rRb),
									j(5, P.$4N),
									j(6, o.$ek),
									j(7, k.$uZ),
									j(8, a.$km),
									j(9, b.$mRb),
									j(10, m.$ll),
									j(11, s.$YX),
									j(12, v.$n6),
									j(13, S.$k4c),
									j(14, L.$ucd),
									j(15, D.$XK),
									j(16, M.$Vi),
									j(17, B.$7rb),
									j(18, z.$y7c),
									j(19, x.$cO),
									j(20, H.$mEb),
									j(21, q.$gY),
									j(22, G.$_Y),
									j(23, T.$Bk),
									j(24, J.$3l),
									j(25, X.$GO),
									j(26, R.$lq),
									j(27, Y.$ik),
									j(28, ie.$Li),
									j(29, ee.$Vbd),
									j(30, _.$8N),
									j(31, Q.$3N),
									j(32, se.$$uc),
									j(33, le.$Vl),
									j(34, oe.$7Z),
									j(35, ae.$wcd),
									j(36, pe.$Lcd),
									j(37, fe.$asb),
								],
								xe,
							));
				let He = class extends $.$1c {
					constructor(Je, Te, Ee) {
						super(),
							(this.c = Je),
							(this.f = Te),
							(this.g = Ee),
							(this.a = this.D(new $.$2c())),
							(this.b = void 0);
					}
					updateZoomEntry(Je, Te) {
						typeof Je == "string"
							? (this.a.value || this.h(Je), this.j(Te))
							: this.a.clear();
					}
					h(Je) {
						const Te = new $.$Zc();
						this.a.value = Te;
						const Ee = document.createElement("div");
						Ee.classList.add("zoom-status");
						const Ie = document.createElement("div");
						Ie.classList.add("zoom-status-left"), Ee.appendChild(Ie);
						const Be = Te.add(
								new d.$rj(
									"workbench.action.zoomOut",
									(0, t.localize)(11941, null),
									ge.ThemeIcon.asClassName(re.$ak.remove),
									!0,
									() => this.f.executeCommand(Be.id),
								),
							),
							Se = Te.add(
								new d.$rj(
									"workbench.action.zoomIn",
									(0, t.localize)(11942, null),
									ge.ThemeIcon.asClassName(re.$ak.plus),
									!0,
									() => this.f.executeCommand(Se.id),
								),
							),
							ke = Te.add(
								new d.$rj(
									"workbench.action.zoomReset",
									(0, t.localize)(11943, null),
									void 0,
									!0,
									() => this.f.executeCommand(ke.id),
								),
							);
						ke.tooltip = (0, t.localize)(
							11944,
							null,
							ke.label,
							this.g.lookupKeybinding(ke.id)?.getLabel(),
						);
						const Ue = Te.add(
								new d.$rj(
									"workbench.action.openSettings",
									(0, t.localize)(11945, null),
									ge.ThemeIcon.asClassName(re.$ak.settingsGear),
									!0,
									() => this.f.executeCommand(Ue.id, "window.zoom"),
								),
							),
							qe = Te.add(new d.$rj("zoomLabel", void 0, void 0, !1));
						(this.b = qe), Te.add((0, $.$Yc)(() => (this.b = void 0)));
						const Ae = Te.add(new ve.$eib(Ie, { hoverDelegate: Le.$Wyb }));
						Ae.push(Be, {
							icon: !0,
							label: !1,
							keybinding: this.g.lookupKeybinding(Be.id)?.getLabel(),
						}),
							Ae.push(this.b, { icon: !1, label: !0 }),
							Ae.push(Se, {
								icon: !0,
								label: !1,
								keybinding: this.g.lookupKeybinding(Se.id)?.getLabel(),
							});
						const Me = document.createElement("div");
						Me.classList.add("zoom-status-right"), Ee.appendChild(Me);
						const De = Te.add(new ve.$eib(Me, { hoverDelegate: Le.$Wyb }));
						De.push(ke, { icon: !1, label: !0 }),
							De.push(Ue, {
								icon: !0,
								label: !1,
								keybinding: this.g.lookupKeybinding(Ue.id)?.getLabel(),
							});
						const Re = (0, t.localize)(11946, null);
						Te.add(
							this.c.addEntry(
								{
									name: Re,
									text: Je,
									tooltip: Ee,
									ariaLabel: Re,
									command: me.$g6b,
									kind: "prominent",
								},
								"status.windowZoom",
								me.StatusbarAlignment.RIGHT,
								102,
							),
						);
					}
					j(Je) {
						if (this.b) {
							const Te = (0, C.getWindowById)(Je, !0).window,
								Ee = Math.round((0, p.$Jfb)(Te) * 100),
								Ie = (0, p.$Hfb)(Te);
							(this.b.label = `${Ie}`),
								(this.b.tooltip = (0, t.localize)(11947, null, Ie, Ee));
						}
					}
				};
				He = Ne([j(0, me.$d6b), j(1, o.$ek), j(2, k.$uZ)], He);
			},
		),
		define(
			de[4055],
			he([
				1, 0, 30, 4, 11, 81, 27, 12, 3290, 3218, 8, 43, 31, 179, 110, 250, 3217,
				100, 32, 10, 52, 1951, 7, 224, 676,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(function () {
						if (
							((0, w.$4X)(r.$5cd),
							(0, w.$4X)(r.$6cd),
							(0, w.$4X)(r.$7cd),
							(0, w.$4X)(r.$8cd),
							(0, w.$4X)(r.$9cd),
							(0, w.$4X)(r.$4cd),
							d.$m &&
								a.$TX.registerKeybindingRule({
									id: r.$4cd.ID,
									weight: a.KeybindingWeight.WorkbenchContrib,
									when: u.$Kj.and(o.$aQb.toNegated(), o.$5Pb),
									primary: C.KeyMod.CtrlCmd | C.KeyCode.KeyW,
								}),
							(d.$m || d.$l) &&
								((0, w.$4X)(p.$ddd),
								(0, w.$4X)(p.$fdd),
								d.$l && (0, w.$4X)(p.$edd),
								(0, w.$4X)(p.$gdd)),
							a.$TX.registerCommandAndKeybindingRule({
								id: "workbench.action.quit",
								weight: a.KeybindingWeight.WorkbenchContrib,
								async handler(I) {
									const T = I.get(n.$y7c),
										k = I.get(b.$gj).getValue("window.confirmBeforeClose");
									((k === "always" ||
										(k === "keyboardOnly" &&
											y.$Fhb.getInstance().isModifierPressed)) &&
										!(await l.$Ocd.confirmOnShutdown(
											I,
											s.ShutdownReason.QUIT,
										))) ||
										T.quit();
								},
								when: void 0,
								mac: { primary: C.KeyMod.CtrlCmd | C.KeyCode.KeyQ },
								linux: { primary: C.KeyMod.CtrlCmd | C.KeyCode.KeyQ },
							}),
							d.$m)
						)
							for (const I of [
								{
									handler: r.$0cd,
									id: "workbench.action.newWindowTab",
									title: (0, i.localize2)(11893, "New Window Tab"),
								},
								{
									handler: r.$$cd,
									id: "workbench.action.showPreviousWindowTab",
									title: (0, i.localize2)(11894, "Show Previous Window Tab"),
								},
								{
									handler: r.$_cd,
									id: "workbench.action.showNextWindowTab",
									title: (0, i.localize2)(11895, "Show Next Window Tab"),
								},
								{
									handler: r.$add,
									id: "workbench.action.moveWindowTabToNewWindow",
									title: (0, i.localize2)(
										11896,
										"Move Window Tab to New Window",
									),
								},
								{
									handler: r.$bdd,
									id: "workbench.action.mergeAllWindowTabs",
									title: (0, i.localize2)(11897, "Merge All Windows"),
								},
								{
									handler: r.$cdd,
									id: "workbench.action.toggleWindowTabsBar",
									title: (0, i.localize2)(11898, "Toggle Window Tabs Bar"),
								},
							])
								h.$fk.registerCommand(I.id, I.handler),
									w.$ZX.appendMenuItem(w.$XX.CommandPalette, {
										command: I,
										when: u.$Kj.equals("config.window.nativeTabs", !0),
									});
						(0, w.$4X)(m.$2cd),
							(0, w.$4X)(m.$1cd),
							(0, w.$4X)(m.$Zcd),
							(0, w.$4X)(m.$3cd);
					})(),
					(function () {
						w.$ZX.appendMenuItem(w.$XX.MenubarFileMenu, {
							group: "z_Exit",
							command: {
								id: "workbench.action.quit",
								title: (0, i.localize)(11838, null),
							},
							order: 1,
							when: c.$4Lb.toNegated(),
						});
					})(),
					(function () {
						const I = t.$Io.as(E.$No.Configuration);
						I.registerConfiguration({
							...$.$u6,
							properties: {
								"application.shellEnvironmentResolutionTimeout": {
									type: "number",
									default: 10,
									minimum: 1,
									maximum: 120,
									included: !d.$l,
									scope: E.ConfigurationScope.APPLICATION,
									markdownDescription: (0, i.localize)(11839, null),
								},
							},
						}),
							I.registerConfiguration({
								id: "window",
								order: 8,
								title: (0, i.localize)(11840, null),
								type: "object",
								properties: {
									"window.confirmSaveUntitledWorkspace": {
										type: "boolean",
										default: !0,
										description: (0, i.localize)(11841, null),
									},
									"window.openWithoutArgumentsInNewWindow": {
										type: "string",
										enum: ["on", "off"],
										enumDescriptions: [
											(0, i.localize)(11842, null),
											(0, i.localize)(11843, null),
										],
										default: d.$m ? "off" : "on",
										scope: E.ConfigurationScope.APPLICATION,
										markdownDescription: (0, i.localize)(11844, null),
									},
									"window.restoreWindows": {
										type: "string",
										enum: ["preserve", "all", "folders", "one", "none"],
										enumDescriptions: [
											(0, i.localize)(11845, null),
											(0, i.localize)(11846, null),
											(0, i.localize)(11847, null),
											(0, i.localize)(11848, null),
											(0, i.localize)(11849, null),
										],
										default: "all",
										scope: E.ConfigurationScope.APPLICATION,
										description: (0, i.localize)(11850, null),
									},
									"window.restoreFullscreen": {
										type: "boolean",
										default: !1,
										scope: E.ConfigurationScope.APPLICATION,
										description: (0, i.localize)(11851, null),
									},
									"window.zoomLevel": {
										type: "number",
										default: 0,
										minimum: v.$18c,
										maximum: v.$Z8c,
										markdownDescription: (0, i.localize)(
											11852,
											null,
											"`#window.zoomPerWindow#`",
										),
										ignoreSync: !0,
										tags: ["accessibility"],
									},
									"window.zoomPerWindow": {
										type: "boolean",
										default: !0,
										markdownDescription: (0, i.localize)(
											11853,
											null,
											"`#window.zoomLevel#`",
										),
										tags: ["accessibility"],
									},
									"window.newWindowDimensions": {
										type: "string",
										enum: [
											"default",
											"inherit",
											"offset",
											"maximized",
											"fullscreen",
										],
										enumDescriptions: [
											(0, i.localize)(11854, null),
											(0, i.localize)(11855, null),
											(0, i.localize)(11856, null),
											(0, i.localize)(11857, null),
											(0, i.localize)(11858, null),
										],
										default: "default",
										scope: E.ConfigurationScope.APPLICATION,
										description: (0, i.localize)(11859, null),
									},
									"window.closeWhenEmpty": {
										type: "boolean",
										default: !1,
										description: (0, i.localize)(11860, null),
									},
									"window.doubleClickIconToClose": {
										type: "boolean",
										default: !1,
										scope: E.ConfigurationScope.APPLICATION,
										markdownDescription: (0, i.localize)(
											11861,
											null,
											"`#window.titleBarStyle#`",
										),
									},
									"window.titleBarStyle": {
										type: "string",
										enum: ["native", "custom"],
										default: "custom",
										scope: E.ConfigurationScope.APPLICATION,
										description: (0, i.localize)(11862, null),
									},
									"window.experimentalControlOverlay": {
										type: "boolean",
										included: d.$n,
										markdownDescription: (0, i.localize)(
											11863,
											null,
											"`#window.titleBarStyle#`",
										),
										default: !0,
									},
									"window.customTitleBarVisibility": {
										type: "string",
										enum: ["auto", "windowed", "never"],
										markdownEnumDescriptions: [
											(0, i.localize)(11864, null),
											(0, i.localize)(11865, null),
											(0, i.localize)(11866, null, "`#window.titleBarStyle#`"),
										],
										default: d.$n ? "never" : "auto",
										scope: E.ConfigurationScope.APPLICATION,
										markdownDescription: (0, i.localize)(
											11867,
											null,
											"`#window.titleBarStyle#`",
										),
									},
									"window.dialogStyle": {
										type: "string",
										enum: ["native", "custom"],
										default: "native",
										scope: E.ConfigurationScope.APPLICATION,
										description: (0, i.localize)(11868, null),
									},
									"window.nativeTabs": {
										type: "boolean",
										default: !1,
										scope: E.ConfigurationScope.APPLICATION,
										description: (0, i.localize)(11869, null),
										included: d.$m,
									},
									"window.nativeFullScreen": {
										type: "boolean",
										default: !0,
										description: (0, i.localize)(11870, null),
										scope: E.ConfigurationScope.APPLICATION,
										included: d.$m,
									},
									"window.clickThroughInactive": {
										type: "boolean",
										default: !0,
										scope: E.ConfigurationScope.APPLICATION,
										description: (0, i.localize)(11871, null),
										included: d.$m,
									},
								},
							}),
							I.registerConfiguration({
								id: "telemetry",
								order: 110,
								title: (0, i.localize)(11872, null),
								type: "object",
								properties: {
									"telemetry.enableCrashReporter": {
										type: "boolean",
										description: (0, i.localize)(11873, null),
										default: !0,
										tags: ["usesOnlineServices", "telemetry"],
										markdownDeprecationMessage: (0, i.localize)(
											11874,
											null,
											`\`#${f.$wm}#\``,
										),
									},
								},
							}),
							I.registerConfiguration({
								id: "keyboard",
								order: 15,
								type: "object",
								title: (0, i.localize)(11875, null),
								properties: {
									"keyboard.touchbar.enabled": {
										type: "boolean",
										default: !0,
										description: (0, i.localize)(11876, null),
										included: d.$m,
									},
									"keyboard.touchbar.ignored": {
										type: "array",
										items: { type: "string" },
										default: [],
										markdownDescription: (0, i.localize)(11877, null),
										included: d.$m,
									},
								},
							}),
							I.registerConfiguration({
								...$.$w6,
								properties: {
									"security.promptForLocalFileProtocolHandling": {
										type: "boolean",
										default: !0,
										markdownDescription: (0, i.localize)(11878, null),
										scope: E.ConfigurationScope.APPLICATION,
									},
									"security.promptForRemoteFileProtocolHandling": {
										type: "boolean",
										default: !0,
										markdownDescription: (0, i.localize)(11879, null),
										scope: E.ConfigurationScope.APPLICATION,
									},
								},
							});
					})(),
					(function () {
						const I = "vscode://schemas/argv",
							T = t.$Io.as(g.$Jo.JSONContribution),
							P = {
								id: I,
								allowComments: !0,
								allowTrailingCommas: !0,
								description: "VSCode static command line definition file",
								type: "object",
								additionalProperties: !1,
								properties: {
									locale: {
										type: "string",
										description: (0, i.localize)(11880, null),
									},
									"disable-lcd-text": {
										type: "boolean",
										description: (0, i.localize)(11881, null),
									},
									"proxy-bypass-list": {
										type: "string",
										description: (0, i.localize)(11882, null),
									},
									"disable-hardware-acceleration": {
										type: "boolean",
										description: (0, i.localize)(11883, null),
									},
									"force-color-profile": {
										type: "string",
										markdownDescription: (0, i.localize)(11884, null),
									},
									"enable-crash-reporter": {
										type: "boolean",
										markdownDescription: (0, i.localize)(11885, null),
									},
									"crash-reporter-id": {
										type: "string",
										markdownDescription: (0, i.localize)(11886, null),
									},
									"enable-proposed-api": {
										type: "array",
										description: (0, i.localize)(11887, null),
										items: { type: "string" },
									},
									"log-level": {
										type: ["string", "array"],
										description: (0, i.localize)(11888, null),
									},
									"disable-chromium-sandbox": {
										type: "boolean",
										description: (0, i.localize)(11889, null),
									},
									"use-inmemory-secretstorage": {
										type: "boolean",
										description: (0, i.localize)(11890, null),
									},
								},
							};
						d.$n &&
							((P.properties["force-renderer-accessibility"] = {
								type: "boolean",
								description: (0, i.localize)(11891, null),
							}),
							(P.properties["password-store"] = {
								type: "string",
								description: (0, i.localize)(11892, null),
							})),
							T.registerSchema(I, P);
					})();
			},
		),
		