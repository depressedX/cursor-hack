import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../nls.js';
import './terminal.js';
import '../../../../platform/terminal/common/terminal.js';
import '../../../../base/common/platform.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/terminal/common/terminalPlatformConfiguration.js';
import '../../../common/configuration.js';
import '../../terminalContrib/accessibility/common/terminalAccessibilityConfiguration.js';
import '../../terminalContrib/commandGuide/common/terminalCommandGuideConfiguration.js';
import '../../terminalContrib/chat/common/terminalInitialHintConfiguration.js';
import '../../terminalContrib/stickyScroll/common/terminalStickyScrollConfiguration.js';
import '../../terminalContrib/suggest/common/terminalSuggestConfiguration.js';
import '../../terminalContrib/typeAhead/common/terminalTypeAheadConfiguration.js';
import '../../terminalContrib/zoom/common/terminal.zoom.js';
define(
			de[1859],
			he([
				1, 0, 81, 4, 145, 117, 12, 30, 14, 1201, 224, 996, 1764, 1763, 808, 809,
				1264, 1770,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*configurationRegistry*/,
 i /*nls*/,
 w /*terminal*/,
 E /*terminal*/,
 C /*platform*/,
 d /*platform*/,
 m /*codicons*/,
 r /*terminalPlatformConfiguration*/,
 u /*configuration*/,
 a /*terminalAccessibilityConfiguration*/,
 h /*terminalCommandGuideConfiguration*/,
 c /*terminalInitialHintConfiguration*/,
 n /*terminalStickyScrollConfiguration*/,
 g /*terminalSuggestConfiguration*/,
 p /*terminalTypeAheadConfiguration*/,
 o /*terminal.zoom*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$HVc = void 0),
					(e.$IVc = y);
				const f =
					`
- ` +
					[
						"`${cwd}`: " + (0, i.localize)(10231, null),
						"`${cwdFolder}`: " + (0, i.localize)(10232, null),
						"`${workspaceFolder}`: " + (0, i.localize)(10233, null),
						"`${workspaceFolderName}`: " + (0, i.localize)(10234, null),
						"`${local}`: " + (0, i.localize)(10235, null),
						"`${process}`: " + (0, i.localize)(10236, null),
						"`${separator}`: " + (0, i.localize)(10237, null, "(` - `)"),
						"`${sequence}`: " + (0, i.localize)(10238, null),
						"`${task}`: " + (0, i.localize)(10239, null),
					].join(`
- `);
				let b = (0, i.localize)(10240, null);
				b += f;
				let s = (0, i.localize)(10241, null);
				(s += f), (e.$HVc = C.$m ? 12 : 14);
				const l = {
					id: "terminal",
					order: 100,
					title: (0, i.localize)(10242, null),
					type: "object",
					properties: {
						[E.TerminalSettingId.SendKeybindingsToShell]: {
							markdownDescription: (0, i.localize)(
								10243,
								null,
								"`#terminal.integrated.commandsToSkipShell#`",
							),
							type: "boolean",
							default: !1,
						},
						[E.TerminalSettingId.TabsDefaultColor]: {
							description: (0, i.localize)(10244, null),
							...r.$8J,
							scope: t.ConfigurationScope.RESOURCE,
						},
						[E.TerminalSettingId.TabsDefaultIcon]: {
							description: (0, i.localize)(10245, null),
							...r.$9J,
							default: m.$ak.terminal.id,
							scope: t.ConfigurationScope.RESOURCE,
						},
						[E.TerminalSettingId.TabsEnabled]: {
							description: (0, i.localize)(10246, null),
							type: "boolean",
							default: !0,
						},
						[E.TerminalSettingId.TabsEnableAnimation]: {
							description: (0, i.localize)(10247, null),
							type: "boolean",
							default: !0,
						},
						[E.TerminalSettingId.TabsHideCondition]: {
							description: (0, i.localize)(10248, null),
							type: "string",
							enum: ["never", "singleTerminal", "singleGroup"],
							enumDescriptions: [
								(0, i.localize)(10249, null),
								(0, i.localize)(10250, null),
								(0, i.localize)(10251, null),
							],
							default: "singleTerminal",
						},
						[E.TerminalSettingId.TabsShowActiveTerminal]: {
							description: (0, i.localize)(10252, null),
							type: "string",
							enum: [
								"always",
								"singleTerminal",
								"singleTerminalOrNarrow",
								"never",
							],
							enumDescriptions: [
								(0, i.localize)(10253, null),
								(0, i.localize)(10254, null),
								(0, i.localize)(10255, null),
								(0, i.localize)(10256, null),
							],
							default: "singleTerminalOrNarrow",
						},
						[E.TerminalSettingId.TabsShowActions]: {
							description: (0, i.localize)(10257, null),
							type: "string",
							enum: [
								"always",
								"singleTerminal",
								"singleTerminalOrNarrow",
								"never",
							],
							enumDescriptions: [
								(0, i.localize)(10258, null),
								(0, i.localize)(10259, null),
								(0, i.localize)(10260, null),
								(0, i.localize)(10261, null),
							],
							default: "singleTerminalOrNarrow",
						},
						[E.TerminalSettingId.TabsLocation]: {
							type: "string",
							enum: ["left", "right"],
							enumDescriptions: [
								(0, i.localize)(10262, null),
								(0, i.localize)(10263, null),
							],
							default: "right",
							description: (0, i.localize)(10264, null),
						},
						[E.TerminalSettingId.DefaultLocation]: {
							type: "string",
							enum: [
								E.TerminalLocationString.Editor,
								E.TerminalLocationString.TerminalView,
							],
							enumDescriptions: [
								(0, i.localize)(10265, null),
								(0, i.localize)(10266, null),
							],
							default: "view",
							description: (0, i.localize)(10267, null),
						},
						[E.TerminalSettingId.TabsFocusMode]: {
							type: "string",
							enum: ["singleClick", "doubleClick"],
							enumDescriptions: [
								(0, i.localize)(10268, null),
								(0, i.localize)(10269, null),
							],
							default: "doubleClick",
							description: (0, i.localize)(10270, null),
						},
						[E.TerminalSettingId.MacOptionIsMeta]: {
							description: (0, i.localize)(10271, null),
							type: "boolean",
							default: !1,
						},
						[E.TerminalSettingId.MacOptionClickForcesSelection]: {
							description: (0, i.localize)(10272, null),
							type: "boolean",
							default: !1,
						},
						[E.TerminalSettingId.AltClickMovesCursor]: {
							markdownDescription: (0, i.localize)(
								10273,
								null,
								"`#editor.multiCursorModifier#`",
								"`'alt'`",
							),
							type: "boolean",
							default: !0,
						},
						[E.TerminalSettingId.CopyOnSelection]: {
							description: (0, i.localize)(10274, null),
							type: "boolean",
							default: !1,
						},
						[E.TerminalSettingId.EnableMultiLinePasteWarning]: {
							markdownDescription: (0, i.localize)(10275, null),
							type: "string",
							enum: ["auto", "always", "never"],
							markdownEnumDescriptions: [
								(0, i.localize)(10276, null),
								(0, i.localize)(10277, null),
								(0, i.localize)(10278, null),
							],
							default: "auto",
						},
						[E.TerminalSettingId.DrawBoldTextInBrightColors]: {
							description: (0, i.localize)(10279, null),
							type: "boolean",
							default: !0,
						},
						[E.TerminalSettingId.FontFamily]: {
							markdownDescription: (0, i.localize)(
								10280,
								null,
								"`#editor.fontFamily#`",
							),
							type: "string",
						},
						[E.TerminalSettingId.FontSize]: {
							description: (0, i.localize)(10281, null),
							type: "number",
							default: e.$HVc,
							minimum: 6,
							maximum: 100,
						},
						[E.TerminalSettingId.LetterSpacing]: {
							description: (0, i.localize)(10282, null),
							type: "number",
							default: w.$jeb,
						},
						[E.TerminalSettingId.LineHeight]: {
							description: (0, i.localize)(10283, null),
							type: "number",
							default: w.$leb,
						},
						[E.TerminalSettingId.MinimumContrastRatio]: {
							markdownDescription: (0, i.localize)(10284, null),
							type: "number",
							default: 4.5,
							tags: ["accessibility"],
						},
						[E.TerminalSettingId.TabStopWidth]: {
							markdownDescription: (0, i.localize)(10285, null),
							type: "number",
							minimum: 1,
							default: 8,
						},
						[E.TerminalSettingId.FastScrollSensitivity]: {
							markdownDescription: (0, i.localize)(10286, null),
							type: "number",
							default: 5,
						},
						[E.TerminalSettingId.MouseWheelScrollSensitivity]: {
							markdownDescription: (0, i.localize)(10287, null),
							type: "number",
							default: 1,
						},
						[E.TerminalSettingId.BellDuration]: {
							markdownDescription: (0, i.localize)(10288, null),
							type: "number",
							default: 1e3,
						},
						[E.TerminalSettingId.FontWeight]: {
							anyOf: [
								{
									type: "number",
									minimum: w.$meb,
									maximum: w.$neb,
									errorMessage: (0, i.localize)(10289, null),
								},
								{
									type: "string",
									pattern: "^(normal|bold|1000|[1-9][0-9]{0,2})$",
								},
								{ enum: w.$qeb },
							],
							description: (0, i.localize)(10290, null),
							default: "normal",
						},
						[E.TerminalSettingId.FontWeightBold]: {
							anyOf: [
								{
									type: "number",
									minimum: w.$meb,
									maximum: w.$neb,
									errorMessage: (0, i.localize)(10291, null),
								},
								{
									type: "string",
									pattern: "^(normal|bold|1000|[1-9][0-9]{0,2})$",
								},
								{ enum: w.$qeb },
							],
							description: (0, i.localize)(10292, null),
							default: "bold",
						},
						[E.TerminalSettingId.CursorBlinking]: {
							description: (0, i.localize)(10293, null),
							type: "boolean",
							default: !1,
						},
						[E.TerminalSettingId.CursorStyle]: {
							description: (0, i.localize)(10294, null),
							enum: ["block", "line", "underline"],
							default: "block",
						},
						[E.TerminalSettingId.CursorStyleInactive]: {
							description: (0, i.localize)(10295, null),
							enum: ["outline", "block", "line", "underline", "none"],
							default: "outline",
						},
						[E.TerminalSettingId.CursorWidth]: {
							markdownDescription: (0, i.localize)(
								10296,
								null,
								"`#terminal.integrated.cursorStyle#`",
								"`line`",
							),
							type: "number",
							default: 1,
						},
						[E.TerminalSettingId.Scrollback]: {
							description: (0, i.localize)(10297, null),
							type: "number",
							default: 1e3,
						},
						[E.TerminalSettingId.DetectLocale]: {
							markdownDescription: (0, i.localize)(10298, null),
							type: "string",
							enum: ["auto", "off", "on"],
							markdownEnumDescriptions: [
								(0, i.localize)(10299, null),
								(0, i.localize)(10300, null),
								(0, i.localize)(10301, null),
							],
							default: "auto",
						},
						[E.TerminalSettingId.GpuAcceleration]: {
							type: "string",
							enum: ["auto", "on", "off"],
							markdownEnumDescriptions: [
								(0, i.localize)(10302, null),
								(0, i.localize)(10303, null),
								(0, i.localize)(10304, null),
							],
							default: "auto",
							description: (0, i.localize)(10305, null),
						},
						[E.TerminalSettingId.TerminalTitleSeparator]: {
							type: "string",
							default: " - ",
							markdownDescription: (0, i.localize)(
								10306,
								null,
								`\`#${E.TerminalSettingId.TerminalTitle}#\``,
								`\`#${E.TerminalSettingId.TerminalDescription}#\``,
							),
						},
						[E.TerminalSettingId.TerminalTitle]: {
							type: "string",
							default: "${process}",
							markdownDescription: b,
						},
						[E.TerminalSettingId.TerminalDescription]: {
							type: "string",
							default: "${task}${separator}${local}${separator}${cwdFolder}",
							markdownDescription: s,
						},
						[E.TerminalSettingId.RightClickBehavior]: {
							type: "string",
							enum: ["default", "copyPaste", "paste", "selectWord", "nothing"],
							enumDescriptions: [
								(0, i.localize)(10307, null),
								(0, i.localize)(10308, null),
								(0, i.localize)(10309, null),
								(0, i.localize)(10310, null),
								(0, i.localize)(10311, null),
							],
							default: C.$m ? "selectWord" : C.$l ? "copyPaste" : "default",
							description: (0, i.localize)(10312, null),
						},
						[E.TerminalSettingId.MiddleClickBehavior]: {
							type: "string",
							enum: ["default", "paste"],
							enumDescriptions: [
								(0, i.localize)(10313, null),
								(0, i.localize)(10314, null),
							],
							default: "default",
							description: (0, i.localize)(10315, null),
						},
						[E.TerminalSettingId.Cwd]: {
							restricted: !0,
							description: (0, i.localize)(10316, null),
							type: "string",
							default: void 0,
							scope: t.ConfigurationScope.RESOURCE,
						},
						[E.TerminalSettingId.ConfirmOnExit]: {
							description: (0, i.localize)(10317, null),
							type: "string",
							enum: ["never", "always", "hasChildProcesses"],
							enumDescriptions: [
								(0, i.localize)(10318, null),
								(0, i.localize)(10319, null),
								(0, i.localize)(10320, null),
							],
							default: "never",
						},
						[E.TerminalSettingId.ConfirmOnKill]: {
							description: (0, i.localize)(10321, null),
							type: "string",
							enum: ["never", "editor", "panel", "always"],
							enumDescriptions: [
								(0, i.localize)(10322, null),
								(0, i.localize)(10323, null),
								(0, i.localize)(10324, null),
								(0, i.localize)(10325, null),
							],
							default: "editor",
						},
						[E.TerminalSettingId.EnableBell]: {
							markdownDeprecationMessage: (0, i.localize)(10326, null),
							type: "boolean",
							default: !1,
						},
						[E.TerminalSettingId.EnableVisualBell]: {
							description: (0, i.localize)(10327, null),
							type: "boolean",
							default: !1,
						},
						[E.TerminalSettingId.CommandsToSkipShell]: {
							markdownDescription: (0, i.localize)(
								10328,
								null,
								w.$web
									.sort()
									.map(($) => `- ${$}`)
									.join(`
`),
								`[${(0, i.localize)(10329, null)}](command:workbench.action.openRawDefaultSettings '${(0, i.localize)(10330, null)}')`,
							),
							type: "array",
							items: { type: "string" },
							default: [],
						},
						[E.TerminalSettingId.AllowChords]: {
							markdownDescription: (0, i.localize)(
								10331,
								null,
								"`#terminal.integrated.commandsToSkipShell#`",
							),
							type: "boolean",
							default: !0,
						},
						[E.TerminalSettingId.AllowMnemonics]: {
							markdownDescription: (0, i.localize)(10332, null),
							type: "boolean",
							default: !1,
						},
						[E.TerminalSettingId.EnvMacOs]: {
							restricted: !0,
							markdownDescription: (0, i.localize)(10333, null),
							type: "object",
							additionalProperties: { type: ["string", "null"] },
							default: {},
						},
						[E.TerminalSettingId.EnvLinux]: {
							restricted: !0,
							markdownDescription: (0, i.localize)(10334, null),
							type: "object",
							additionalProperties: { type: ["string", "null"] },
							default: {},
						},
						[E.TerminalSettingId.EnvWindows]: {
							restricted: !0,
							markdownDescription: (0, i.localize)(10335, null),
							type: "object",
							additionalProperties: { type: ["string", "null"] },
							default: {},
						},
						[E.TerminalSettingId.EnvironmentChangesIndicator]: {
							markdownDescription: (0, i.localize)(10336, null),
							type: "string",
							enum: ["off", "on", "warnonly"],
							enumDescriptions: [
								(0, i.localize)(10337, null),
								(0, i.localize)(10338, null),
								(0, i.localize)(10339, null),
							],
							default: "warnonly",
						},
						[E.TerminalSettingId.EnvironmentChangesRelaunch]: {
							markdownDescription: (0, i.localize)(10340, null),
							type: "boolean",
							default: !0,
						},
						[E.TerminalSettingId.ShowExitAlert]: {
							description: (0, i.localize)(10341, null),
							type: "boolean",
							default: !0,
						},
						[E.TerminalSettingId.ExperimentalWindowsUseConptyDll]: {
							markdownDescription: (0, i.localize)(10342, null),
							type: "boolean",
							default: !1,
						},
						[E.TerminalSettingId.SplitCwd]: {
							description: (0, i.localize)(10343, null),
							type: "string",
							enum: ["workspaceRoot", "initial", "inherited"],
							enumDescriptions: [
								(0, i.localize)(10344, null),
								(0, i.localize)(10345, null),
								(0, i.localize)(10346, null),
							],
							default: "inherited",
						},
						[E.TerminalSettingId.WindowsEnableConpty]: {
							description: (0, i.localize)(10347, null),
							type: "boolean",
							default: !0,
						},
						[E.TerminalSettingId.WordSeparators]: {
							markdownDescription: (0, i.localize)(10348, null),
							type: "string",
							default: " ()[]{}',\"`\u2500\u2018\u2019\u201C\u201D|",
						},
						[E.TerminalSettingId.EnableFileLinks]: {
							description: (0, i.localize)(10349, null),
							type: "string",
							enum: ["off", "on", "notRemote"],
							enumDescriptions: [
								(0, i.localize)(10350, null),
								(0, i.localize)(10351, null),
								(0, i.localize)(10352, null),
							],
							default: "on",
						},
						[E.TerminalSettingId.AllowedLinkSchemes]: {
							description: (0, i.localize)(10353, null),
							type: "array",
							items: { type: "string" },
							default: [
								"file",
								"http",
								"https",
								"mailto",
								"vscode",
								"vscode-insiders",
							],
						},
						[E.TerminalSettingId.UnicodeVersion]: {
							type: "string",
							enum: ["6", "11"],
							enumDescriptions: [
								(0, i.localize)(10354, null),
								(0, i.localize)(10355, null),
							],
							default: "11",
							description: (0, i.localize)(10356, null),
						},
						[E.TerminalSettingId.EnablePersistentSessions]: {
							description: (0, i.localize)(10357, null),
							type: "boolean",
							default: !0,
						},
						[E.TerminalSettingId.PersistentSessionReviveProcess]: {
							markdownDescription: (0, i.localize)(10358, null),
							type: "string",
							enum: ["onExit", "onExitAndWindowClose", "never"],
							markdownEnumDescriptions: [
								(0, i.localize)(10359, null),
								(0, i.localize)(10360, null),
								(0, i.localize)(10361, null),
							],
							default: "onExit",
						},
						[E.TerminalSettingId.HideOnStartup]: {
							description: (0, i.localize)(10362, null),
							type: "string",
							enum: ["never", "whenEmpty", "always"],
							markdownEnumDescriptions: [
								(0, i.localize)(10363, null),
								(0, i.localize)(10364, null),
								(0, i.localize)(10365, null),
							],
							default: "never",
						},
						[E.TerminalSettingId.CustomGlyphs]: {
							markdownDescription: (0, i.localize)(
								10366,
								null,
								`\`#${E.TerminalSettingId.GpuAcceleration}#\``,
							),
							type: "boolean",
							default: !0,
						},
						[E.TerminalSettingId.RescaleOverlappingGlyphs]: {
							markdownDescription: (0, i.localize)(10367, null),
							type: "boolean",
							default: !0,
						},
						[E.TerminalSettingId.AutoReplies]: {
							markdownDescription: (0, i.localize)(
								10368,
								null,
								'`"Terminate batch job (Y/N)": "Y\\r"`',
								'`"\\r"`',
							),
							type: "object",
							additionalProperties: {
								oneOf: [
									{ type: "string", description: (0, i.localize)(10369, null) },
									{ type: "null" },
								],
							},
							default: {},
						},
						[E.TerminalSettingId.ShellIntegrationEnabled]: {
							restricted: !0,
							markdownDescription: (0, i.localize)(
								10370,
								null,
								"`#terminal.integrated.shellIntegrations.decorationsEnabled#`",
								"`#editor.accessibilitySupport#`",
							),
							type: "boolean",
							default: !0,
						},
						[E.TerminalSettingId.ShellIntegrationDecorationsEnabled]: {
							restricted: !0,
							markdownDescription: (0, i.localize)(10371, null),
							type: "string",
							enum: ["both", "gutter", "overviewRuler", "never"],
							enumDescriptions: [
								(0, i.localize)(10372, null),
								(0, i.localize)(10373, null),
								(0, i.localize)(10374, null),
								(0, i.localize)(10375, null),
							],
							default: "both",
						},
						[E.TerminalSettingId.ShellIntegrationCommandHistory]: {
							restricted: !0,
							markdownDescription: (0, i.localize)(10376, null),
							type: "number",
							default: 100,
						},
						[E.TerminalSettingId.SmoothScrolling]: {
							markdownDescription: (0, i.localize)(10377, null),
							type: "boolean",
							default: !1,
						},
						[E.TerminalSettingId.IgnoreBracketedPasteMode]: {
							markdownDescription: (0, i.localize)(
								10378,
								null,
								"`\\x1b[200~`",
								"`\\x1b[201~`",
							),
							type: "boolean",
							default: !1,
						},
						[E.TerminalSettingId.EnableImages]: {
							restricted: !0,
							markdownDescription: (0, i.localize)(
								10379,
								null,
								`\`#${E.TerminalSettingId.GpuAcceleration}#\``,
							),
							type: "boolean",
							default: !1,
						},
						[E.TerminalSettingId.FocusAfterRun]: {
							markdownDescription: (0, i.localize)(10380, null),
							enum: ["terminal", "accessible-buffer", "none"],
							default: "none",
							tags: ["accessibility"],
							markdownEnumDescriptions: [
								(0, i.localize)(10381, null),
								(0, i.localize)(10382, null),
								(0, i.localize)(10383, null),
							],
						},
						...a.$AVc,
						...h.$CVc,
						...c.$DVc,
						...n.$GHb,
						...g.$gIb,
						...p.$FVc,
						...o.$GVc,
					},
				};
				function y() {
					d.$Io.as(t.$No.Configuration).registerConfiguration(l);
				}
				d.$Io.as(u.$z6.ConfigurationMigration).registerConfigurationMigrations([
					{
						key: E.TerminalSettingId.EnableBell,
						migrateFn: ($, v) => {
							const S = [];
							let I =
								v("accessibility.signals.terminalBell")?.announcement ??
								v("accessibility.alert.terminalBell");
							return (
								I !== void 0 &&
									typeof I != "string" &&
									(I = I ? "auto" : "off"),
								S.push([
									"accessibility.signals.terminalBell",
									{ value: { sound: $ ? "on" : "off", announcement: I } },
								]),
								S.push([E.TerminalSettingId.EnableBell, { value: void 0 }]),
								S.push([E.TerminalSettingId.EnableVisualBell, { value: $ }]),
								S
							);
						},
					},
				]);
			},
		),
		