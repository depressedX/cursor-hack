import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/actions.js';
import '../../../base/common/themables.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/linkedList.js';
import '../../commands/common/commands.js';
import '../../contextkey/common/contextkey.js';
import '../../instantiation/common/instantiation.js';
import '../../keybinding/common/keybindingsRegistry.js';
define(
			de[11],
			he([1, 0, 50, 26, 6, 3, 273, 31, 8, 5, 43]),
			function (ce /*require*/,
 e /*exports*/,
 t /*actions*/,
 i /*themables*/,
 w /*event*/,
 E /*lifecycle*/,
 C /*linkedList*/,
 d /*commands*/,
 m /*contextkey*/,
 r /*instantiation*/,
 u /*keybindingsRegistry*/) {
				"use strict";
				var a;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3X = e.$2X = e.$1X = e.$ZX = e.$YX = e.$XX = void 0),
					(e.$VX = h),
					(e.$WX = c),
					(e.$4X = b);
				function h(s) {
					return s.command !== void 0;
				}
				function c(s) {
					return s.submenu !== void 0;
				}
				class n {
					static {
						this.a = new Map();
					}
					static {
						this.CommandPalette = new n("CommandPalette");
					}
					static {
						this.DebugBreakpointsContext = new n("DebugBreakpointsContext");
					}
					static {
						this.DebugCallStackContext = new n("DebugCallStackContext");
					}
					static {
						this.DebugConsoleContext = new n("DebugConsoleContext");
					}
					static {
						this.DebugVariablesContext = new n("DebugVariablesContext");
					}
					static {
						this.NotebookVariablesContext = new n("NotebookVariablesContext");
					}
					static {
						this.DebugHoverContext = new n("DebugHoverContext");
					}
					static {
						this.DebugWatchContext = new n("DebugWatchContext");
					}
					static {
						this.DebugToolBar = new n("DebugToolBar");
					}
					static {
						this.DebugToolBarStop = new n("DebugToolBarStop");
					}
					static {
						this.DebugCallStackToolbar = new n("DebugCallStackToolbar");
					}
					static {
						this.DebugCreateConfiguration = new n("DebugCreateConfiguration");
					}
					static {
						this.EditorContext = new n("EditorContext");
					}
					static {
						this.SimpleEditorContext = new n("SimpleEditorContext");
					}
					static {
						this.EditorContent = new n("EditorContent");
					}
					static {
						this.EditorLineNumberContext = new n("EditorLineNumberContext");
					}
					static {
						this.EditorContextCopy = new n("EditorContextCopy");
					}
					static {
						this.EditorContextPeek = new n("EditorContextPeek");
					}
					static {
						this.EditorContextShare = new n("EditorContextShare");
					}
					static {
						this.EditorTitle = new n("EditorTitle");
					}
					static {
						this.EditorTitleRun = new n("EditorTitleRun");
					}
					static {
						this.EditorTitleContext = new n("EditorTitleContext");
					}
					static {
						this.EditorTitleContextShare = new n("EditorTitleContextShare");
					}
					static {
						this.EmptyEditorGroup = new n("EmptyEditorGroup");
					}
					static {
						this.EmptyEditorGroupContext = new n("EmptyEditorGroupContext");
					}
					static {
						this.EditorTabsBarContext = new n("EditorTabsBarContext");
					}
					static {
						this.EditorTabsBarShowTabsSubmenu = new n(
							"EditorTabsBarShowTabsSubmenu",
						);
					}
					static {
						this.EditorTabsBarShowTabsZenModeSubmenu = new n(
							"EditorTabsBarShowTabsZenModeSubmenu",
						);
					}
					static {
						this.EditorActionsPositionSubmenu = new n(
							"EditorActionsPositionSubmenu",
						);
					}
					static {
						this.ExplorerContext = new n("ExplorerContext");
					}
					static {
						this.ExplorerContextShare = new n("ExplorerContextShare");
					}
					static {
						this.ExtensionContext = new n("ExtensionContext");
					}
					static {
						this.GlobalActivity = new n("GlobalActivity");
					}
					static {
						this.CommandCenter = new n("CommandCenter");
					}
					static {
						this.CommandCenterCenter = new n("CommandCenterCenter");
					}
					static {
						this.LayoutControlMenuSubmenu = new n("LayoutControlMenuSubmenu");
					}
					static {
						this.LayoutControlMenu = new n("LayoutControlMenu");
					}
					static {
						this.MenubarMainMenu = new n("MenubarMainMenu");
					}
					static {
						this.MenubarAppearanceMenu = new n("MenubarAppearanceMenu");
					}
					static {
						this.MenubarDebugMenu = new n("MenubarDebugMenu");
					}
					static {
						this.MenubarEditMenu = new n("MenubarEditMenu");
					}
					static {
						this.MenubarCopy = new n("MenubarCopy");
					}
					static {
						this.MenubarFileMenu = new n("MenubarFileMenu");
					}
					static {
						this.MenubarGoMenu = new n("MenubarGoMenu");
					}
					static {
						this.MenubarHelpMenu = new n("MenubarHelpMenu");
					}
					static {
						this.MenubarLayoutMenu = new n("MenubarLayoutMenu");
					}
					static {
						this.MenubarNewBreakpointMenu = new n("MenubarNewBreakpointMenu");
					}
					static {
						this.PanelAlignmentMenu = new n("PanelAlignmentMenu");
					}
					static {
						this.PanelPositionMenu = new n("PanelPositionMenu");
					}
					static {
						this.ActivityBarPositionMenu = new n("ActivityBarPositionMenu");
					}
					static {
						this.MenubarPreferencesMenu = new n("MenubarPreferencesMenu");
					}
					static {
						this.MenubarRecentMenu = new n("MenubarRecentMenu");
					}
					static {
						this.MenubarSelectionMenu = new n("MenubarSelectionMenu");
					}
					static {
						this.MenubarShare = new n("MenubarShare");
					}
					static {
						this.MenubarSwitchEditorMenu = new n("MenubarSwitchEditorMenu");
					}
					static {
						this.MenubarSwitchGroupMenu = new n("MenubarSwitchGroupMenu");
					}
					static {
						this.MenubarTerminalMenu = new n("MenubarTerminalMenu");
					}
					static {
						this.MenubarViewMenu = new n("MenubarViewMenu");
					}
					static {
						this.MenubarHomeMenu = new n("MenubarHomeMenu");
					}
					static {
						this.OpenEditorsContext = new n("OpenEditorsContext");
					}
					static {
						this.OpenEditorsContextShare = new n("OpenEditorsContextShare");
					}
					static {
						this.ProblemsPanelContext = new n("ProblemsPanelContext");
					}
					static {
						this.SCMInputBox = new n("SCMInputBox");
					}
					static {
						this.SCMChangesSeparator = new n("SCMChangesSeparator");
					}
					static {
						this.SCMChangesContext = new n("SCMChangesContext");
					}
					static {
						this.SCMIncomingChanges = new n("SCMIncomingChanges");
					}
					static {
						this.SCMIncomingChangesContext = new n("SCMIncomingChangesContext");
					}
					static {
						this.SCMIncomingChangesSetting = new n("SCMIncomingChangesSetting");
					}
					static {
						this.SCMOutgoingChanges = new n("SCMOutgoingChanges");
					}
					static {
						this.SCMOutgoingChangesContext = new n("SCMOutgoingChangesContext");
					}
					static {
						this.SCMOutgoingChangesSetting = new n("SCMOutgoingChangesSetting");
					}
					static {
						this.SCMIncomingChangesAllChangesContext = new n(
							"SCMIncomingChangesAllChangesContext",
						);
					}
					static {
						this.SCMIncomingChangesHistoryItemContext = new n(
							"SCMIncomingChangesHistoryItemContext",
						);
					}
					static {
						this.SCMOutgoingChangesAllChangesContext = new n(
							"SCMOutgoingChangesAllChangesContext",
						);
					}
					static {
						this.SCMOutgoingChangesHistoryItemContext = new n(
							"SCMOutgoingChangesHistoryItemContext",
						);
					}
					static {
						this.SCMChangeContext = new n("SCMChangeContext");
					}
					static {
						this.SCMResourceContext = new n("SCMResourceContext");
					}
					static {
						this.SCMResourceContextShare = new n("SCMResourceContextShare");
					}
					static {
						this.SCMResourceFolderContext = new n("SCMResourceFolderContext");
					}
					static {
						this.SCMResourceGroupContext = new n("SCMResourceGroupContext");
					}
					static {
						this.SCMSourceControl = new n("SCMSourceControl");
					}
					static {
						this.SCMSourceControlInline = new n("SCMSourceControlInline");
					}
					static {
						this.SCMSourceControlTitle = new n("SCMSourceControlTitle");
					}
					static {
						this.SCMHistoryTitle = new n("SCMHistoryTitle");
					}
					static {
						this.SCMTitle = new n("SCMTitle");
					}
					static {
						this.SearchContext = new n("SearchContext");
					}
					static {
						this.SearchActionMenu = new n("SearchActionContext");
					}
					static {
						this.StatusBarWindowIndicatorMenu = new n(
							"StatusBarWindowIndicatorMenu",
						);
					}
					static {
						this.StatusBarRemoteIndicatorMenu = new n(
							"StatusBarRemoteIndicatorMenu",
						);
					}
					static {
						this.StickyScrollContext = new n("StickyScrollContext");
					}
					static {
						this.TestItem = new n("TestItem");
					}
					static {
						this.TestItemGutter = new n("TestItemGutter");
					}
					static {
						this.TestProfilesContext = new n("TestProfilesContext");
					}
					static {
						this.TestMessageContext = new n("TestMessageContext");
					}
					static {
						this.TestMessageContent = new n("TestMessageContent");
					}
					static {
						this.TestPeekElement = new n("TestPeekElement");
					}
					static {
						this.TestPeekTitle = new n("TestPeekTitle");
					}
					static {
						this.TestCallStack = new n("TestCallStack");
					}
					static {
						this.TouchBarContext = new n("TouchBarContext");
					}
					static {
						this.TitleBarContext = new n("TitleBarContext");
					}
					static {
						this.TitleBarTitleContext = new n("TitleBarTitleContext");
					}
					static {
						this.TunnelContext = new n("TunnelContext");
					}
					static {
						this.TunnelPrivacy = new n("TunnelPrivacy");
					}
					static {
						this.TunnelProtocol = new n("TunnelProtocol");
					}
					static {
						this.TunnelPortInline = new n("TunnelInline");
					}
					static {
						this.TunnelTitle = new n("TunnelTitle");
					}
					static {
						this.TunnelLocalAddressInline = new n("TunnelLocalAddressInline");
					}
					static {
						this.TunnelOriginInline = new n("TunnelOriginInline");
					}
					static {
						this.ViewItemContext = new n("ViewItemContext");
					}
					static {
						this.ViewContainerTitle = new n("ViewContainerTitle");
					}
					static {
						this.ViewContainerTitleContext = new n("ViewContainerTitleContext");
					}
					static {
						this.ViewTitle = new n("ViewTitle");
					}
					static {
						this.ViewTitleContext = new n("ViewTitleContext");
					}
					static {
						this.CommentEditorActions = new n("CommentEditorActions");
					}
					static {
						this.CommentThreadTitle = new n("CommentThreadTitle");
					}
					static {
						this.CommentThreadActions = new n("CommentThreadActions");
					}
					static {
						this.CommentThreadAdditionalActions = new n(
							"CommentThreadAdditionalActions",
						);
					}
					static {
						this.CommentThreadTitleContext = new n("CommentThreadTitleContext");
					}
					static {
						this.CommentThreadCommentContext = new n(
							"CommentThreadCommentContext",
						);
					}
					static {
						this.CommentTitle = new n("CommentTitle");
					}
					static {
						this.CommentActions = new n("CommentActions");
					}
					static {
						this.CommentsViewThreadActions = new n("CommentsViewThreadActions");
					}
					static {
						this.InteractiveToolbar = new n("InteractiveToolbar");
					}
					static {
						this.InteractiveCellTitle = new n("InteractiveCellTitle");
					}
					static {
						this.InteractiveCellDelete = new n("InteractiveCellDelete");
					}
					static {
						this.InteractiveCellExecute = new n("InteractiveCellExecute");
					}
					static {
						this.InteractiveInputExecute = new n("InteractiveInputExecute");
					}
					static {
						this.InteractiveInputConfig = new n("InteractiveInputConfig");
					}
					static {
						this.ReplInputExecute = new n("ReplInputExecute");
					}
					static {
						this.IssueReporter = new n("IssueReporter");
					}
					static {
						this.NotebookToolbar = new n("NotebookToolbar");
					}
					static {
						this.NotebookStickyScrollContext = new n(
							"NotebookStickyScrollContext",
						);
					}
					static {
						this.NotebookCellTitle = new n("NotebookCellTitle");
					}
					static {
						this.NotebookCellDelete = new n("NotebookCellDelete");
					}
					static {
						this.NotebookCellInsert = new n("NotebookCellInsert");
					}
					static {
						this.NotebookCellBetween = new n("NotebookCellBetween");
					}
					static {
						this.NotebookCellListTop = new n("NotebookCellTop");
					}
					static {
						this.NotebookCellExecute = new n("NotebookCellExecute");
					}
					static {
						this.NotebookCellExecuteGoTo = new n("NotebookCellExecuteGoTo");
					}
					static {
						this.NotebookCellExecutePrimary = new n(
							"NotebookCellExecutePrimary",
						);
					}
					static {
						this.NotebookDiffCellInputTitle = new n(
							"NotebookDiffCellInputTitle",
						);
					}
					static {
						this.NotebookDiffCellMetadataTitle = new n(
							"NotebookDiffCellMetadataTitle",
						);
					}
					static {
						this.NotebookDiffCellOutputsTitle = new n(
							"NotebookDiffCellOutputsTitle",
						);
					}
					static {
						this.NotebookOutputToolbar = new n("NotebookOutputToolbar");
					}
					static {
						this.NotebookOutlineFilter = new n("NotebookOutlineFilter");
					}
					static {
						this.NotebookOutlineActionMenu = new n("NotebookOutlineActionMenu");
					}
					static {
						this.NotebookEditorLayoutConfigure = new n(
							"NotebookEditorLayoutConfigure",
						);
					}
					static {
						this.NotebookKernelSource = new n("NotebookKernelSource");
					}
					static {
						this.BulkEditTitle = new n("BulkEditTitle");
					}
					static {
						this.BulkEditContext = new n("BulkEditContext");
					}
					static {
						this.TimelineItemContext = new n("TimelineItemContext");
					}
					static {
						this.TimelineTitle = new n("TimelineTitle");
					}
					static {
						this.TimelineTitleContext = new n("TimelineTitleContext");
					}
					static {
						this.TimelineFilterSubMenu = new n("TimelineFilterSubMenu");
					}
					static {
						this.AccountsContext = new n("AccountsContext");
					}
					static {
						this.SidebarTitle = new n("SidebarTitle");
					}
					static {
						this.PanelTitle = new n("PanelTitle");
					}
					static {
						this.AuxiliaryBarTitle = new n("AuxiliaryBarTitle");
					}
					static {
						this.AuxiliaryBarHeader = new n("AuxiliaryBarHeader");
					}
					static {
						this.TerminalInstanceContext = new n("TerminalInstanceContext");
					}
					static {
						this.TerminalEditorInstanceContext = new n(
							"TerminalEditorInstanceContext",
						);
					}
					static {
						this.TerminalNewDropdownContext = new n(
							"TerminalNewDropdownContext",
						);
					}
					static {
						this.TerminalTabContext = new n("TerminalTabContext");
					}
					static {
						this.TerminalTabEmptyAreaContext = new n(
							"TerminalTabEmptyAreaContext",
						);
					}
					static {
						this.TerminalStickyScrollContext = new n(
							"TerminalStickyScrollContext",
						);
					}
					static {
						this.WebviewContext = new n("WebviewContext");
					}
					static {
						this.InlineCompletionsActions = new n("InlineCompletionsActions");
					}
					static {
						this.InlineEditsActions = new n("InlineEditsActions");
					}
					static {
						this.InlineEditActions = new n("InlineEditActions");
					}
					static {
						this.NewFile = new n("NewFile");
					}
					static {
						this.MergeInput1Toolbar = new n("MergeToolbar1Toolbar");
					}
					static {
						this.MergeInput2Toolbar = new n("MergeToolbar2Toolbar");
					}
					static {
						this.MergeBaseToolbar = new n("MergeBaseToolbar");
					}
					static {
						this.MergeInputResultToolbar = new n("MergeToolbarResultToolbar");
					}
					static {
						this.InlineSuggestionToolbar = new n("InlineSuggestionToolbar");
					}
					static {
						this.InlineEditToolbar = new n("InlineEditToolbar");
					}
					static {
						this.ChatContext = new n("ChatContext");
					}
					static {
						this.ChatCodeBlock = new n("ChatCodeblock");
					}
					static {
						this.ChatCompareBlock = new n("ChatCompareBlock");
					}
					static {
						this.ChatMessageTitle = new n("ChatMessageTitle");
					}
					static {
						this.ChatExecute = new n("ChatExecute");
					}
					static {
						this.ChatExecuteSecondary = new n("ChatExecuteSecondary");
					}
					static {
						this.ChatInputSide = new n("ChatInputSide");
					}
					static {
						this.AccessibleView = new n("AccessibleView");
					}
					static {
						this.MultiDiffEditorFileToolbar = new n(
							"MultiDiffEditorFileToolbar",
						);
					}
					static {
						this.DiffEditorHunkToolbar = new n("DiffEditorHunkToolbar");
					}
					static {
						this.DiffEditorSelectionToolbar = new n(
							"DiffEditorSelectionToolbar",
						);
					}
					static for(l) {
						return n.a.get(l) ?? new n(l);
					}
					constructor(l) {
						if (n.a.has(l))
							throw new TypeError(
								`MenuId with identifier '${l}' already exists. Use MenuId.for(ident) or a unique identifier`,
							);
						n.a.set(l, this), (this.id = l);
					}
				}
				(e.$XX = n), (e.$YX = (0, r.$Mi)("menuService"));
				class g {
					static {
						this.a = new Map();
					}
					static for(l) {
						let y = this.a.get(l);
						return y || ((y = new g(l)), this.a.set(l, y)), y;
					}
					static merge(l) {
						const y = new Set();
						for (const $ of l) $ instanceof g && y.add($.b);
						return y;
					}
					constructor(l) {
						(this.b = l), (this.has = (y) => y === l);
					}
				}
				e.$ZX = new (class {
					constructor() {
						(this.a = new Map()),
							(this.b = new Map()),
							(this.c = new w.$we({ merge: g.merge })),
							(this.onDidChangeMenu = this.c.event);
					}
					addCommand(s) {
						return (
							this.a.set(s.id, s),
							this.c.fire(g.for(n.CommandPalette)),
							(0, E.$Yc)(() => {
								this.a.delete(s.id) && this.c.fire(g.for(n.CommandPalette));
							})
						);
					}
					getCommand(s) {
						return this.a.get(s);
					}
					getCommands() {
						const s = new Map();
						return this.a.forEach((l, y) => s.set(y, l)), s;
					}
					appendMenuItem(s, l) {
						let y = this.b.get(s);
						y || ((y = new C.$$c()), this.b.set(s, y));
						const $ = y.push(l);
						return (
							this.c.fire(g.for(s)),
							(0, E.$Yc)(() => {
								$(), this.c.fire(g.for(s));
							})
						);
					}
					appendMenuItems(s) {
						const l = new E.$Zc();
						for (const { id: y, item: $ } of s)
							l.add(this.appendMenuItem(y, $));
						return l;
					}
					removeMenuItem(s, l) {
						let y = this.b.get(s);
						if (y) {
							let $ = y.first;
							for (; $.element != null && $.element._id !== l._id; ) $ = $.next;
							$.element != null
								? (y.remove($), this.c.fire(g.for(s)))
								: console.error("Could not find element in list");
						}
						return (0, E.$Yc)(() => {
							this.c.fire(g.for(s));
						});
					}
					getMenuItems(s) {
						let l;
						return (
							this.b.has(s) ? (l = [...this.b.get(s)]) : (l = []),
							s === n.CommandPalette && this.d(l),
							l
						);
					}
					d(s) {
						const l = new Set();
						for (const y of s)
							h(y) && (l.add(y.command.id), y.alt && l.add(y.alt.id));
						this.a.forEach((y, $) => {
							l.has($) || s.push({ command: y });
						});
					}
				})();
				class p extends t.$uj {
					constructor(l, y, $) {
						super(
							`submenuitem.${l.submenu.id}`,
							typeof l.title == "string" ? l.title : l.title.value,
							$,
							"submenu",
						),
							(this.item = l),
							(this.hideActions = y);
					}
				}
				e.$1X = p;
				let o = (a = class {
					static label(l, y) {
						return y?.renderShortTitle && l.shortTitle
							? typeof l.shortTitle == "string"
								? l.shortTitle
								: l.shortTitle.value
							: typeof l.title == "string"
								? l.title
								: l.title.value;
					}
					constructor(l, y, $, v, S, I, T) {
						(this.hideActions = v),
							(this.menuKeybinding = S),
							(this.b = T),
							(this.id = l.id),
							(this.label = a.label(l, $)),
							(this.tooltip =
								(typeof l.tooltip == "string" ? l.tooltip : l.tooltip?.value) ??
								""),
							(this.enabled =
								!l.precondition || I.contextMatchesRules(l.precondition)),
							(this.checked = void 0);
						let P;
						if (l.toggled) {
							const k = l.toggled.condition
								? l.toggled
								: { condition: l.toggled };
							(this.checked = I.contextMatchesRules(k.condition)),
								this.checked &&
									k.tooltip &&
									(this.tooltip =
										typeof k.tooltip == "string" ? k.tooltip : k.tooltip.value),
								this.checked && i.ThemeIcon.isThemeIcon(k.icon) && (P = k.icon),
								this.checked &&
									k.title &&
									(this.label =
										typeof k.title == "string" ? k.title : k.title.value);
						}
						P || (P = i.ThemeIcon.isThemeIcon(l.icon) ? l.icon : void 0),
							(this.item = l),
							(this.alt = y ? new a(y, void 0, $, v, void 0, I, T) : void 0),
							(this.a = $),
							(this.class = P && i.ThemeIcon.asClassName(P));
					}
					run(...l) {
						let y = [];
						return (
							this.a?.arg && (y = [...y, this.a.arg]),
							this.a?.shouldForwardArgs && (y = [...y, ...l]),
							this.b.executeCommand(this.id, ...y)
						);
					}
				});
				(e.$2X = o), (e.$2X = o = a = Ne([j(5, m.$6j), j(6, d.$ek)], o));
				class f {
					constructor(l) {
						this.desc = l;
					}
				}
				e.$3X = f;
				function b(s) {
					const l = [],
						y = new s(),
						{ f1: $, menu: v, keybinding: S, ...I } = y.desc;
					if (d.$fk.getCommand(I.id))
						throw new Error(
							`Cannot register two commands with the same id: ${I.id}`,
						);
					if (
						(l.push(
							d.$fk.registerCommand({
								id: I.id,
								handler: (T, ...P) => y.run(T, ...P),
								metadata: I.metadata,
							}),
						),
						Array.isArray(v))
					)
						for (const T of v)
							l.push(
								e.$ZX.appendMenuItem(T.id, {
									command: {
										...I,
										precondition:
											T.precondition === null ? void 0 : I.precondition,
									},
									...T,
								}),
							);
					else
						v &&
							l.push(
								e.$ZX.appendMenuItem(v.id, {
									command: {
										...I,
										precondition:
											v.precondition === null ? void 0 : I.precondition,
									},
									...v,
								}),
							);
					if (
						($ &&
							(l.push(
								e.$ZX.appendMenuItem(n.CommandPalette, {
									command: I,
									when: I.precondition,
								}),
							),
							l.push(e.$ZX.addCommand(I))),
						Array.isArray(S))
					)
						for (const T of S)
							l.push(
								u.$TX.registerKeybindingRule({
									...T,
									id: I.id,
									when: I.precondition
										? m.$Kj.and(I.precondition, T.when)
										: T.when,
								}),
							);
					else
						S &&
							l.push(
								u.$TX.registerKeybindingRule({
									...S,
									id: I.id,
									when: I.precondition
										? m.$Kj.and(I.precondition, S.when)
										: S.when,
								}),
							);
					return {
						dispose() {
							(0, E.$Vc)(l);
						},
					};
				}
			},
		)
