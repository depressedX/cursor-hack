import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/network.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/terminal/common/terminal.js';
import '../../../common/contextkeys.js';
import '../../tasks/common/taskService.js';
import '../common/terminal.js';
import '../common/terminalContextKey.js';
import '../common/terminalStrings.js';
import '../../../services/editor/common/editorService.js';
define(
			de[1017],
			he([1, 0, 50, 14, 23, 4, 11, 8, 117, 100, 419, 145, 237, 469, 18]),
			function (ce /*require*/,
 e /*exports*/,
 t /*actions*/,
 i /*codicons*/,
 w /*network*/,
 E /*nls*/,
 C /*actions*/,
 d /*contextkey*/,
 m /*terminal*/,
 r /*contextkeys*/,
 u /*taskService*/,
 a /*terminal*/,
 h /*terminalContextKey*/,
 c /*terminalStrings*/,
 n /*editorService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.TerminalMenuBarGroup = void 0),
					(e.$PUc = o),
					(e.$QUc = f);
				var g;
				(function (b) {
					(b.Create = "1_create"),
						(b.Edit = "3_edit"),
						(b.Clear = "5_clear"),
						(b.Kill = "7_kill"),
						(b.Config = "9_config");
				})(g || (g = {}));
				var p;
				(function (b) {
					(b.Create = "1_create"),
						(b.Run = "3_run"),
						(b.Manage = "5_manage"),
						(b.Configure = "7_configure");
				})(p || (e.TerminalMenuBarGroup = p = {}));
				function o() {
					C.$ZX.appendMenuItems([
						{
							id: C.$XX.MenubarTerminalMenu,
							item: {
								group: p.Create,
								command: {
									id: a.TerminalCommandId.New,
									title: (0, E.localize)(10094, null),
								},
								order: 1,
							},
						},
						{
							id: C.$XX.MenubarTerminalMenu,
							item: {
								group: p.Create,
								command: {
									id: a.TerminalCommandId.Split,
									title: (0, E.localize)(10095, null),
									precondition: d.$Kj.has(h.TerminalContextKeyStrings.IsOpen),
								},
								order: 2,
								when: h.TerminalContextKeys.processSupported,
							},
						},
						{
							id: C.$XX.MenubarTerminalMenu,
							item: {
								group: p.Run,
								command: {
									id: a.TerminalCommandId.RunActiveFile,
									title: (0, E.localize)(10096, null),
								},
								order: 3,
								when: h.TerminalContextKeys.processSupported,
							},
						},
						{
							id: C.$XX.MenubarTerminalMenu,
							item: {
								group: p.Run,
								command: {
									id: a.TerminalCommandId.RunSelectedText,
									title: (0, E.localize)(10097, null),
								},
								order: 4,
								when: h.TerminalContextKeys.processSupported,
							},
						},
					]),
						C.$ZX.appendMenuItems([
							{
								id: C.$XX.TerminalInstanceContext,
								item: {
									group: g.Create,
									command: {
										id: a.TerminalCommandId.Split,
										title: c.$hUc.split.value,
									},
								},
							},
							{
								id: C.$XX.TerminalInstanceContext,
								item: {
									command: { id: a.TerminalCommandId.New, title: c.$hUc.new },
									group: g.Create,
								},
							},
							{
								id: C.$XX.TerminalInstanceContext,
								item: {
									command: {
										id: a.TerminalCommandId.KillViewOrEditor,
										title: c.$hUc.kill.value,
									},
									group: g.Kill,
								},
							},
							{
								id: C.$XX.TerminalInstanceContext,
								item: {
									command: {
										id: a.TerminalCommandId.CopySelection,
										title: (0, E.localize)(10098, null),
									},
									group: g.Edit,
									order: 1,
								},
							},
							{
								id: C.$XX.TerminalInstanceContext,
								item: {
									command: {
										id: a.TerminalCommandId.CopySelectionAsHtml,
										title: (0, E.localize)(10099, null),
									},
									group: g.Edit,
									order: 2,
								},
							},
							{
								id: C.$XX.TerminalInstanceContext,
								item: {
									command: {
										id: a.TerminalCommandId.Paste,
										title: (0, E.localize)(10100, null),
									},
									group: g.Edit,
									order: 3,
								},
							},
							{
								id: C.$XX.TerminalInstanceContext,
								item: {
									command: {
										id: a.TerminalCommandId.Clear,
										title: (0, E.localize)(10101, null),
									},
									group: g.Clear,
								},
							},
							{
								id: C.$XX.TerminalInstanceContext,
								item: {
									command: {
										id: a.TerminalCommandId.SizeToContentWidth,
										title: c.$hUc.toggleSizeToContentWidth,
									},
									group: g.Config,
								},
							},
							{
								id: C.$XX.TerminalInstanceContext,
								item: {
									command: {
										id: a.TerminalCommandId.SelectAll,
										title: (0, E.localize)(10102, null),
									},
									group: g.Edit,
									order: 3,
								},
							},
						]),
						C.$ZX.appendMenuItems([
							{
								id: C.$XX.TerminalEditorInstanceContext,
								item: {
									group: g.Create,
									command: {
										id: a.TerminalCommandId.Split,
										title: c.$hUc.split.value,
									},
								},
							},
							{
								id: C.$XX.TerminalEditorInstanceContext,
								item: {
									command: { id: a.TerminalCommandId.New, title: c.$hUc.new },
									group: g.Create,
								},
							},
							{
								id: C.$XX.TerminalEditorInstanceContext,
								item: {
									command: {
										id: a.TerminalCommandId.KillEditor,
										title: c.$hUc.kill.value,
									},
									group: g.Kill,
								},
							},
							{
								id: C.$XX.TerminalEditorInstanceContext,
								item: {
									command: {
										id: a.TerminalCommandId.CopySelection,
										title: (0, E.localize)(10103, null),
									},
									group: g.Edit,
									order: 1,
								},
							},
							{
								id: C.$XX.TerminalEditorInstanceContext,
								item: {
									command: {
										id: a.TerminalCommandId.CopySelectionAsHtml,
										title: (0, E.localize)(10104, null),
									},
									group: g.Edit,
									order: 2,
								},
							},
							{
								id: C.$XX.TerminalEditorInstanceContext,
								item: {
									command: {
										id: a.TerminalCommandId.Paste,
										title: (0, E.localize)(10105, null),
									},
									group: g.Edit,
									order: 3,
								},
							},
							{
								id: C.$XX.TerminalEditorInstanceContext,
								item: {
									command: {
										id: a.TerminalCommandId.Clear,
										title: (0, E.localize)(10106, null),
									},
									group: g.Clear,
								},
							},
							{
								id: C.$XX.TerminalEditorInstanceContext,
								item: {
									command: {
										id: a.TerminalCommandId.SelectAll,
										title: (0, E.localize)(10107, null),
									},
									group: g.Edit,
									order: 3,
								},
							},
							{
								id: C.$XX.TerminalEditorInstanceContext,
								item: {
									command: {
										id: a.TerminalCommandId.SizeToContentWidth,
										title: c.$hUc.toggleSizeToContentWidth,
									},
									group: g.Config,
								},
							},
						]),
						C.$ZX.appendMenuItems([
							{
								id: C.$XX.TerminalTabEmptyAreaContext,
								item: {
									command: {
										id: a.TerminalCommandId.NewWithProfile,
										title: (0, E.localize)(10108, null),
									},
									group: g.Create,
								},
							},
							{
								id: C.$XX.TerminalTabEmptyAreaContext,
								item: {
									command: { id: a.TerminalCommandId.New, title: c.$hUc.new },
									group: g.Create,
								},
							},
						]),
						C.$ZX.appendMenuItems([
							{
								id: C.$XX.TerminalNewDropdownContext,
								item: {
									command: {
										id: a.TerminalCommandId.SelectDefaultProfile,
										title: (0, E.localize2)(10124, "Select Default Profile"),
									},
									group: "3_configure",
								},
							},
							{
								id: C.$XX.TerminalNewDropdownContext,
								item: {
									command: {
										id: a.TerminalCommandId.ConfigureTerminalSettings,
										title: (0, E.localize)(10109, null),
									},
									group: "3_configure",
								},
							},
							{
								id: C.$XX.TerminalNewDropdownContext,
								item: {
									command: {
										id: "workbench.action.tasks.runTask",
										title: (0, E.localize)(10110, null),
									},
									when: u.$Ypc,
									group: "4_tasks",
									order: 1,
								},
							},
							{
								id: C.$XX.TerminalNewDropdownContext,
								item: {
									command: {
										id: "workbench.action.tasks.configureTaskRunner",
										title: (0, E.localize)(10111, null),
									},
									when: u.$Ypc,
									group: "4_tasks",
									order: 2,
								},
							},
						]),
						C.$ZX.appendMenuItems([
							{
								id: C.$XX.ViewTitle,
								item: {
									command: {
										id: a.TerminalCommandId.SwitchTerminal,
										title: (0, E.localize2)(10125, "Switch Terminal"),
									},
									group: "navigation",
									order: 0,
									when: d.$Kj.and(
										d.$Kj.equals("view", a.$geb),
										d.$Kj.not(`config.${m.TerminalSettingId.TabsEnabled}`),
									),
								},
							},
							{
								id: C.$XX.ViewTitle,
								item: {
									command: {
										id: a.TerminalCommandId.Focus,
										title: c.$hUc.focus,
									},
									alt: {
										id: a.TerminalCommandId.Split,
										title: c.$hUc.split.value,
										icon: i.$ak.splitHorizontal,
									},
									group: "navigation",
									order: 0,
									when: d.$Kj.and(
										d.$Kj.equals("view", a.$geb),
										d.$Kj.has(`config.${m.TerminalSettingId.TabsEnabled}`),
										d.$Kj.or(
											d.$Kj.and(
												d.$Kj.equals(
													`config.${m.TerminalSettingId.TabsShowActiveTerminal}`,
													"singleTerminal",
												),
												d.$Kj.equals(h.TerminalContextKeyStrings.GroupCount, 1),
											),
											d.$Kj.and(
												d.$Kj.equals(
													`config.${m.TerminalSettingId.TabsShowActiveTerminal}`,
													"singleTerminalOrNarrow",
												),
												d.$Kj.or(
													d.$Kj.equals(
														h.TerminalContextKeyStrings.GroupCount,
														1,
													),
													d.$Kj.has(h.TerminalContextKeyStrings.TabsNarrow),
												),
											),
											d.$Kj.and(
												d.$Kj.equals(
													`config.${m.TerminalSettingId.TabsShowActiveTerminal}`,
													"singleGroup",
												),
												d.$Kj.equals(h.TerminalContextKeyStrings.GroupCount, 1),
											),
											d.$Kj.equals(
												`config.${m.TerminalSettingId.TabsShowActiveTerminal}`,
												"always",
											),
										),
									),
								},
							},
							{
								id: C.$XX.ViewTitle,
								item: {
									command: {
										id: a.TerminalCommandId.Split,
										title: c.$hUc.split,
										icon: i.$ak.splitHorizontal,
									},
									group: "navigation",
									order: 2,
									when: h.TerminalContextKeys.shouldShowViewInlineActions,
								},
							},
							{
								id: C.$XX.ViewTitle,
								item: {
									command: {
										id: a.TerminalCommandId.Kill,
										title: c.$hUc.kill,
										icon: i.$ak.trash,
									},
									group: "navigation",
									order: 3,
									when: h.TerminalContextKeys.shouldShowViewInlineActions,
								},
							},
							{
								id: C.$XX.ViewTitle,
								item: {
									command: {
										id: a.TerminalCommandId.New,
										title: c.$hUc.new,
										icon: i.$ak.plus,
									},
									alt: {
										id: a.TerminalCommandId.Split,
										title: c.$hUc.split.value,
										icon: i.$ak.splitHorizontal,
									},
									group: "navigation",
									order: 0,
									when: d.$Kj.and(
										d.$Kj.equals("view", a.$geb),
										d.$Kj.or(
											h.TerminalContextKeys.webExtensionContributedProfile,
											h.TerminalContextKeys.processSupported,
										),
									),
								},
							},
							{
								id: C.$XX.ViewTitle,
								item: {
									command: {
										id: a.TerminalCommandId.Clear,
										title: (0, E.localize)(10112, null),
										icon: i.$ak.clearAll,
									},
									group: "navigation",
									order: 4,
									when: d.$Kj.equals("view", a.$geb),
									isHiddenByDefault: !0,
								},
							},
							{
								id: C.$XX.ViewTitle,
								item: {
									command: {
										id: a.TerminalCommandId.RunActiveFile,
										title: (0, E.localize)(10113, null),
										icon: i.$ak.run,
									},
									group: "navigation",
									order: 5,
									when: d.$Kj.equals("view", a.$geb),
									isHiddenByDefault: !0,
								},
							},
							{
								id: C.$XX.ViewTitle,
								item: {
									command: {
										id: a.TerminalCommandId.RunSelectedText,
										title: (0, E.localize)(10114, null),
										icon: i.$ak.selection,
									},
									group: "navigation",
									order: 6,
									when: d.$Kj.equals("view", a.$geb),
									isHiddenByDefault: !0,
								},
							},
						]),
						C.$ZX.appendMenuItems([
							{
								id: C.$XX.TerminalTabContext,
								item: {
									command: {
										id: a.TerminalCommandId.SplitActiveTab,
										title: c.$hUc.split.value,
									},
									group: g.Create,
									order: 1,
								},
							},
							{
								id: C.$XX.TerminalTabContext,
								item: {
									command: {
										id: a.TerminalCommandId.MoveToEditor,
										title: c.$hUc.moveToEditor.value,
									},
									group: g.Create,
									order: 2,
								},
							},
							{
								id: C.$XX.TerminalTabContext,
								item: {
									command: {
										id: a.TerminalCommandId.MoveIntoNewWindow,
										title: c.$hUc.moveIntoNewWindow.value,
									},
									group: g.Create,
									order: 2,
								},
							},
							{
								id: C.$XX.TerminalTabContext,
								item: {
									command: {
										id: a.TerminalCommandId.RenameActiveTab,
										title: (0, E.localize)(10115, null),
									},
									group: g.Edit,
								},
							},
							{
								id: C.$XX.TerminalTabContext,
								item: {
									command: {
										id: a.TerminalCommandId.ChangeIconActiveTab,
										title: (0, E.localize)(10116, null),
									},
									group: g.Edit,
								},
							},
							{
								id: C.$XX.TerminalTabContext,
								item: {
									command: {
										id: a.TerminalCommandId.ChangeColorActiveTab,
										title: (0, E.localize)(10117, null),
									},
									group: g.Edit,
								},
							},
							{
								id: C.$XX.TerminalTabContext,
								item: {
									command: {
										id: a.TerminalCommandId.SizeToContentWidth,
										title: c.$hUc.toggleSizeToContentWidth,
									},
									group: g.Edit,
								},
							},
							{
								id: C.$XX.TerminalTabContext,
								item: {
									command: {
										id: a.TerminalCommandId.JoinActiveTab,
										title: (0, E.localize)(10118, null),
									},
									when: h.TerminalContextKeys.tabsSingularSelection.toNegated(),
									group: g.Config,
								},
							},
							{
								id: C.$XX.TerminalTabContext,
								item: {
									command: {
										id: a.TerminalCommandId.Unsplit,
										title: c.$hUc.unsplit.value,
									},
									when: d.$Kj.and(
										h.TerminalContextKeys.tabsSingularSelection,
										h.TerminalContextKeys.splitTerminal,
									),
									group: g.Config,
								},
							},
							{
								id: C.$XX.TerminalTabContext,
								item: {
									command: {
										id: a.TerminalCommandId.KillActiveTab,
										title: c.$hUc.kill.value,
									},
									group: g.Kill,
								},
							},
						]),
						C.$ZX.appendMenuItem(C.$XX.EditorTitleContext, {
							command: {
								id: a.TerminalCommandId.MoveToTerminalPanel,
								title: c.$hUc.moveToTerminalPanel,
							},
							when: r.$BQb.Scheme.isEqualTo(w.Schemas.vscodeTerminal),
							group: "2_files",
						}),
						C.$ZX.appendMenuItem(C.$XX.EditorTitleContext, {
							command: { id: a.TerminalCommandId.Rename, title: c.$hUc.rename },
							when: r.$BQb.Scheme.isEqualTo(w.Schemas.vscodeTerminal),
							group: "2_files",
						}),
						C.$ZX.appendMenuItem(C.$XX.EditorTitleContext, {
							command: {
								id: a.TerminalCommandId.ChangeColor,
								title: c.$hUc.changeColor,
							},
							when: r.$BQb.Scheme.isEqualTo(w.Schemas.vscodeTerminal),
							group: "2_files",
						}),
						C.$ZX.appendMenuItem(C.$XX.EditorTitleContext, {
							command: {
								id: a.TerminalCommandId.ChangeIcon,
								title: c.$hUc.changeIcon,
							},
							when: r.$BQb.Scheme.isEqualTo(w.Schemas.vscodeTerminal),
							group: "2_files",
						}),
						C.$ZX.appendMenuItem(C.$XX.EditorTitleContext, {
							command: {
								id: a.TerminalCommandId.SizeToContentWidth,
								title: c.$hUc.toggleSizeToContentWidth,
							},
							when: r.$BQb.Scheme.isEqualTo(w.Schemas.vscodeTerminal),
							group: "2_files",
						}),
						C.$ZX.appendMenuItem(C.$XX.EditorTitle, {
							command: {
								id: a.TerminalCommandId.CreateTerminalEditorSameGroup,
								title: c.$hUc.new,
								icon: i.$ak.plus,
							},
							alt: {
								id: a.TerminalCommandId.Split,
								title: c.$hUc.split.value,
								icon: i.$ak.splitHorizontal,
							},
							group: "navigation",
							order: 0,
							when: r.$BQb.Scheme.isEqualTo(w.Schemas.vscodeTerminal),
						});
				}
				function f(b, s, l, y, $, v) {
					let S = [],
						I = [];
					s = s.filter((M) => !M.isAutoDetected);
					const T =
						b === m.TerminalLocation.Editor ||
						(typeof b == "object" &&
							"viewColumn" in b &&
							b.viewColumn === n.$JY)
							? { viewColumn: n.$KY }
							: { splitActiveTerminal: !0 };
					for (const M of s) {
						const N = M.profileName === l,
							A = { config: M, location: b },
							R = { config: M, location: T },
							O = M.profileName.replace(/[\n\r\t]/g, "");
						S.push(
							new t.$rj(
								a.TerminalCommandId.NewWithProfile,
								N ? (0, E.localize)(10119, null, O) : O,
								void 0,
								!0,
								async () => {
									const B = await $.createTerminal(A);
									$.setActiveInstance(B), await $.focusActiveInstance();
								},
							),
						),
							I.push(
								new t.$rj(
									a.TerminalCommandId.Split,
									N ? (0, E.localize)(10120, null, O) : O,
									void 0,
									!0,
									async () => {
										const B = await $.createTerminal(R);
										$.setActiveInstance(B), await $.focusActiveInstance();
									},
								),
							);
					}
					for (const M of y) {
						const A =
							M.title === l
								? (0, E.localize)(10121, null, M.title.replace(/[\n\r\t]/g, ""))
								: M.title.replace(/[\n\r\t]/g, "");
						S.push(
							new t.$rj("contributed", A, void 0, !0, () =>
								$.createTerminal({
									config: {
										extensionIdentifier: M.extensionIdentifier,
										id: M.id,
										title: A,
									},
									location: b,
								}),
							),
						),
							I.push(
								new t.$rj("contributed-split", A, void 0, !0, () =>
									$.createTerminal({
										config: {
											extensionIdentifier: M.extensionIdentifier,
											id: M.id,
											title: A,
										},
										location: T,
									}),
								),
							);
					}
					const P = S.find((M) => M.label.endsWith("(Default)"));
					P &&
						((S = S.filter((M) => M !== P).sort((M, N) =>
							M.label.localeCompare(N.label),
						)),
						S.unshift(P)),
						S.length > 0 &&
							(S.push(
								new t.$uj("split.profile", (0, E.localize)(10122, null), I),
							),
							S.push(new t.$tj()));
					const k = v.getActions();
					S.push(...t.$tj.join(...k.map((M) => M[1])));
					const L = I.find((M) => M.label.endsWith("(Default)"));
					return (
						L &&
							((I = I.filter((M) => M !== L).sort((M, N) =>
								M.label.localeCompare(N.label),
							)),
							I.unshift(L)),
						{
							dropdownAction: new t.$rj(
								"refresh profiles",
								(0, E.localize)(10123, null),
								"codicon-chevron-down",
								!0,
							),
							dropdownMenuActions: S,
							className: `terminal-tab-actions-${$.resolveLocation(b)}`,
						}
					);
				}
			},
		)
