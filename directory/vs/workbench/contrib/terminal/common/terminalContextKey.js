define(de[237], he([1, 0, 4, 8, 117, 145]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.TerminalContextKeys = e.TerminalContextKeyStrings = void 0);
			var C;
			(function (m) {
				(m.IsOpen = "terminalIsOpen"),
					(m.Count = "terminalCount"),
					(m.GroupCount = "terminalGroupCount"),
					(m.TabsNarrow = "isTerminalTabsNarrow"),
					(m.HasFixedWidth = "terminalHasFixedWidth"),
					(m.ProcessSupported = "terminalProcessSupported"),
					(m.Focus = "terminalFocus"),
					(m.FocusInAny = "terminalFocusInAny"),
					(m.AccessibleBufferFocus = "terminalAccessibleBufferFocus"),
					(m.AccessibleBufferOnLastLine = "terminalAccessibleBufferOnLastLine"),
					(m.EditorFocus = "terminalEditorFocus"),
					(m.TabsFocus = "terminalTabsFocus"),
					(m.WebExtensionContributedProfile =
						"terminalWebExtensionContributedProfile"),
					(m.TerminalHasBeenCreated = "terminalHasBeenCreated"),
					(m.TerminalEditorActive = "terminalEditorActive"),
					(m.TabsMouse = "terminalTabsMouse"),
					(m.AltBufferActive = "terminalAltBufferActive"),
					(m.SuggestWidgetVisible = "terminalSuggestWidgetVisible"),
					(m.A11yTreeFocus = "terminalA11yTreeFocus"),
					(m.ViewShowing = "terminalViewShowing"),
					(m.TextSelected = "terminalTextSelected"),
					(m.TextSelectedInFocused = "terminalTextSelectedInFocused"),
					(m.FindVisible = "terminalFindVisible"),
					(m.FindInputFocused = "terminalFindInputFocused"),
					(m.FindFocused = "terminalFindFocused"),
					(m.TabsSingularSelection = "terminalTabsSingularSelection"),
					(m.SplitTerminal = "terminalSplitTerminal"),
					(m.ShellType = "terminalShellType"),
					(m.InTerminalRunCommandPicker = "inTerminalRunCommandPicker"),
					(m.TerminalShellIntegrationEnabled =
						"terminalShellIntegrationEnabled");
			})(C || (e.TerminalContextKeyStrings = C = {}));
			var d;
			(function (m) {
				(m.isOpen = new i.$5j(C.IsOpen, !1, !0)),
					(m.focus = new i.$5j(C.Focus, !1, (0, t.localize)(10384, null))),
					(m.focusInAny = new i.$5j(
						C.FocusInAny,
						!1,
						(0, t.localize)(10385, null),
					)),
					(m.editorFocus = new i.$5j(
						C.EditorFocus,
						!1,
						(0, t.localize)(10386, null),
					)),
					(m.count = new i.$5j(C.Count, 0, (0, t.localize)(10387, null))),
					(m.groupCount = new i.$5j(C.GroupCount, 0, !0)),
					(m.tabsNarrow = new i.$5j(C.TabsNarrow, !1, !0)),
					(m.terminalHasFixedWidth = new i.$5j(C.HasFixedWidth, !1, !0)),
					(m.tabsFocus = new i.$5j(
						C.TabsFocus,
						!1,
						(0, t.localize)(10388, null),
					)),
					(m.webExtensionContributedProfile = new i.$5j(
						C.WebExtensionContributedProfile,
						!1,
						!0,
					)),
					(m.terminalHasBeenCreated = new i.$5j(
						C.TerminalHasBeenCreated,
						!1,
						!0,
					)),
					(m.terminalEditorActive = new i.$5j(C.TerminalEditorActive, !1, !0)),
					(m.tabsMouse = new i.$5j(C.TabsMouse, !1, !0)),
					(m.shellType = new i.$5j(C.ShellType, void 0, {
						type: "string",
						description: (0, t.localize)(10389, null),
					})),
					(m.altBufferActive = new i.$5j(
						C.AltBufferActive,
						!1,
						(0, t.localize)(10390, null),
					)),
					(m.suggestWidgetVisible = new i.$5j(
						C.SuggestWidgetVisible,
						!1,
						(0, t.localize)(10391, null),
					)),
					(m.notFocus = m.focus.toNegated()),
					(m.viewShowing = new i.$5j(
						C.ViewShowing,
						!1,
						(0, t.localize)(10392, null),
					)),
					(m.textSelected = new i.$5j(
						C.TextSelected,
						!1,
						(0, t.localize)(10393, null),
					)),
					(m.textSelectedInFocused = new i.$5j(
						C.TextSelectedInFocused,
						!1,
						(0, t.localize)(10394, null),
					)),
					(m.notTextSelected = m.textSelected.toNegated()),
					(m.findVisible = new i.$5j(C.FindVisible, !1, !0)),
					(m.notFindVisible = m.findVisible.toNegated()),
					(m.findInputFocus = new i.$5j(C.FindInputFocused, !1, !0)),
					(m.findFocus = new i.$5j(C.FindFocused, !1, !0)),
					(m.notFindFocus = m.findInputFocus.toNegated()),
					(m.processSupported = new i.$5j(
						C.ProcessSupported,
						!1,
						(0, t.localize)(10395, null),
					)),
					(m.tabsSingularSelection = new i.$5j(
						C.TabsSingularSelection,
						!1,
						(0, t.localize)(10396, null),
					)),
					(m.splitTerminal = new i.$5j(
						C.SplitTerminal,
						!1,
						(0, t.localize)(10397, null),
					)),
					(m.inTerminalRunCommandPicker = new i.$5j(
						C.InTerminalRunCommandPicker,
						!1,
						(0, t.localize)(10398, null),
					)),
					(m.terminalShellIntegrationEnabled = new i.$5j(
						C.TerminalShellIntegrationEnabled,
						!1,
						(0, t.localize)(10399, null),
					)),
					(m.shouldShowViewInlineActions = i.$Kj.and(
						i.$Kj.equals("view", E.$geb),
						i.$Kj.notEquals(
							`config.${w.TerminalSettingId.TabsHideCondition}`,
							"never",
						),
						i.$Kj.or(
							i.$Kj.not(`config.${w.TerminalSettingId.TabsEnabled}`),
							i.$Kj.and(
								i.$Kj.equals(
									`config.${w.TerminalSettingId.TabsShowActions}`,
									"singleTerminal",
								),
								i.$Kj.equals(C.GroupCount, 1),
							),
							i.$Kj.and(
								i.$Kj.equals(
									`config.${w.TerminalSettingId.TabsShowActions}`,
									"singleTerminalOrNarrow",
								),
								i.$Kj.or(
									i.$Kj.equals(C.GroupCount, 1),
									i.$Kj.has(C.TabsNarrow),
								),
							),
							i.$Kj.and(
								i.$Kj.equals(
									`config.${w.TerminalSettingId.TabsShowActions}`,
									"singleGroup",
								),
								i.$Kj.equals(C.GroupCount, 1),
							),
							i.$Kj.equals(
								`config.${w.TerminalSettingId.TabsShowActions}`,
								"always",
							),
						),
					));
			})(d || (e.TerminalContextKeys = d = {}));
		}),
		