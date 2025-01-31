import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../common/configuration.js';
import '../../../../platform/accessibilitySignal/browser/accessibilitySignalService.js';
import '../../speech/common/speechService.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/event.js';
import '../../../../base/common/types.js';
import '../../../../platform/product/common/productService.js';
define(
			de[130],
			he([1, 0, 4, 81, 30, 8, 224, 184, 511, 3, 6, 28, 62]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*configurationRegistry*/,
 w /*platform*/,
 E /*contextkey*/,
 C /*configuration*/,
 d /*accessibilitySignalService*/,
 m /*speechService*/,
 r /*lifecycle*/,
 u /*event*/,
 a /*types*/,
 h /*productService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3Lb =
						e.$2Lb =
						e.AccessibilityVoiceSettingId =
						e.$ZLb =
						e.$YLb =
						e.$XLb =
						e.AccessibilityVerbositySettingId =
						e.ViewDimUnfocusedOpacityProperties =
						e.AccessibilityWorkbenchSettingId =
						e.$WLb =
						e.$VLb =
						e.$ULb =
						e.$TLb =
						e.$SLb =
						e.$RLb =
						e.$QLb =
						e.$PLb =
						e.$OLb =
						e.$NLb =
						e.$MLb =
							void 0),
					(e.$1Lb = s),
					Object.defineProperty(e, "AccessibilityVoiceSettingId", {
						enumerable: !0,
						get: function () {
							return m.AccessibilityVoiceSettingId;
						},
					}),
					(e.$MLb = new E.$5j("accessibilityHelpIsShown", !1, !0)),
					(e.$NLb = new E.$5j("accessibleViewIsShown", !1, !0)),
					(e.$OLb = new E.$5j("accessibleViewSupportsNavigation", !1, !0)),
					(e.$PLb = new E.$5j("accessibleViewVerbosityEnabled", !1, !0)),
					(e.$QLb = new E.$5j("accessibleViewGoToSymbolSupported", !1, !0)),
					(e.$RLb = new E.$5j("accessibleViewOnLastLine", !1, !0)),
					(e.$SLb = new E.$5j(
						"accessibleViewCurrentProviderId",
						void 0,
						void 0,
					)),
					(e.$TLb = new E.$5j("accessibleViewInCodeBlock", void 0, void 0)),
					(e.$ULb = new E.$5j(
						"accessibleViewContainsCodeBlocks",
						void 0,
						void 0,
					)),
					(e.$VLb = new E.$5j(
						"accessibleViewHasUnassignedKeybindings",
						void 0,
						void 0,
					)),
					(e.$WLb = new E.$5j(
						"accessibleViewHasAssignedKeybindings",
						void 0,
						void 0,
					));
				var c;
				(function (S) {
					(S.DimUnfocusedEnabled = "accessibility.dimUnfocused.enabled"),
						(S.DimUnfocusedOpacity = "accessibility.dimUnfocused.opacity"),
						(S.HideAccessibleView = "accessibility.hideAccessibleView"),
						(S.AccessibleViewCloseOnKeyPress =
							"accessibility.accessibleView.closeOnKeyPress");
				})(c || (e.AccessibilityWorkbenchSettingId = c = {}));
				var n;
				(function (S) {
					(S[(S.Default = 0.75)] = "Default"),
						(S[(S.Minimum = 0.2)] = "Minimum"),
						(S[(S.Maximum = 1)] = "Maximum");
				})(n || (e.ViewDimUnfocusedOpacityProperties = n = {}));
				var g;
				(function (S) {
					(S.Terminal = "accessibility.verbosity.terminal"),
						(S.DiffEditor = "accessibility.verbosity.diffEditor"),
						(S.Chat = "accessibility.verbosity.panelChat"),
						(S.InlineChat = "accessibility.verbosity.inlineChat"),
						(S.TerminalChat = "accessibility.verbosity.terminalChat"),
						(S.InlineCompletions = "accessibility.verbosity.inlineCompletions"),
						(S.KeybindingsEditor = "accessibility.verbosity.keybindingsEditor"),
						(S.Notebook = "accessibility.verbosity.notebook"),
						(S.Editor = "accessibility.verbosity.editor"),
						(S.Hover = "accessibility.verbosity.hover"),
						(S.Notification = "accessibility.verbosity.notification"),
						(S.EmptyEditorHint = "accessibility.verbosity.emptyEditorHint"),
						(S.ReplInputHint = "accessibility.verbosity.replInputHint"),
						(S.Comments = "accessibility.verbosity.comments"),
						(S.DiffEditorActive = "accessibility.verbosity.diffEditorActive"),
						(S.Debug = "accessibility.verbosity.debug");
				})(g || (e.AccessibilityVerbositySettingId = g = {}));
				const p = { type: "boolean", default: !0, tags: ["accessibility"] };
				(e.$XLb = Object.freeze({
					id: "accessibility",
					title: (0, t.localize)(4241, null),
					type: "object",
				})),
					(e.$YLb = {
						type: "string",
						enum: ["auto", "on", "off"],
						default: "auto",
						enumDescriptions: [
							(0, t.localize)(4242, null),
							(0, t.localize)(4243, null),
							(0, t.localize)(4244, null),
						],
						tags: ["accessibility"],
					});
				const o = {
					type: "object",
					tags: ["accessibility"],
					additionalProperties: !1,
					default: { sound: "auto", announcement: "auto" },
				};
				e.$ZLb = {
					type: "string",
					enum: ["auto", "off"],
					default: "auto",
					enumDescriptions: [
						(0, t.localize)(4245, null),
						(0, t.localize)(4246, null),
					],
					tags: ["accessibility"],
				};
				const f = {
						type: "object",
						tags: ["accessibility"],
						additionalProperties: !1,
						default: { sound: "auto" },
					},
					b = {
						...e.$XLb,
						scope: i.ConfigurationScope.RESOURCE,
						properties: {
							[g.Terminal]: { description: (0, t.localize)(4247, null), ...p },
							[g.DiffEditor]: {
								description: (0, t.localize)(4248, null),
								...p,
							},
							[g.Chat]: { description: (0, t.localize)(4249, null), ...p },
							[g.InlineChat]: {
								description: (0, t.localize)(4250, null),
								...p,
							},
							[g.InlineCompletions]: {
								description: (0, t.localize)(4251, null),
								...p,
							},
							[g.KeybindingsEditor]: {
								description: (0, t.localize)(4252, null),
								...p,
							},
							[g.Notebook]: { description: (0, t.localize)(4253, null), ...p },
							[g.Hover]: { description: (0, t.localize)(4254, null), ...p },
							[g.Notification]: {
								description: (0, t.localize)(4255, null),
								...p,
							},
							[g.EmptyEditorHint]: {
								description: (0, t.localize)(4256, null),
								...p,
							},
							[g.ReplInputHint]: {
								description: (0, t.localize)(4257, null),
								...p,
							},
							[g.Comments]: { description: (0, t.localize)(4258, null), ...p },
							[g.DiffEditorActive]: {
								description: (0, t.localize)(4259, null),
								...p,
							},
							[g.Debug]: { description: (0, t.localize)(4260, null), ...p },
							[c.AccessibleViewCloseOnKeyPress]: {
								markdownDescription: (0, t.localize)(4261, null),
								type: "boolean",
								default: !0,
							},
							"accessibility.signalOptions.volume": {
								description: (0, t.localize)(4262, null),
								type: "number",
								minimum: 0,
								maximum: 100,
								default: 70,
								tags: ["accessibility"],
							},
							"accessibility.signalOptions.debouncePositionChanges": {
								description: (0, t.localize)(4263, null),
								type: "boolean",
								default: !1,
								tags: ["accessibility"],
							},
							"accessibility.signalOptions.experimental.delays.general": {
								type: "object",
								description:
									"Delays for all signals besides error and warning at position",
								additionalProperties: !1,
								properties: {
									announcement: {
										description: (0, t.localize)(4264, null),
										type: "number",
										minimum: 0,
										default: 3e3,
									},
									sound: {
										description: (0, t.localize)(4265, null),
										type: "number",
										minimum: 0,
										default: 400,
									},
								},
								tags: ["accessibility"],
							},
							"accessibility.signalOptions.experimental.delays.warningAtPosition":
								{
									type: "object",
									additionalProperties: !1,
									properties: {
										announcement: {
											description: (0, t.localize)(4266, null),
											type: "number",
											minimum: 0,
											default: 3e3,
										},
										sound: {
											description: (0, t.localize)(4267, null),
											type: "number",
											minimum: 0,
											default: 1e3,
										},
									},
									tags: ["accessibility"],
								},
							"accessibility.signalOptions.experimental.delays.errorAtPosition":
								{
									type: "object",
									additionalProperties: !1,
									properties: {
										announcement: {
											description: (0, t.localize)(4268, null),
											type: "number",
											minimum: 0,
											default: 3e3,
										},
										sound: {
											description: (0, t.localize)(4269, null),
											type: "number",
											minimum: 0,
											default: 1e3,
										},
									},
									tags: ["accessibility"],
								},
							"accessibility.signals.lineHasBreakpoint": {
								...o,
								description: (0, t.localize)(4270, null),
								properties: {
									sound: {
										description: (0, t.localize)(4271, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4272, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.lineHasInlineSuggestion": {
								...f,
								description: (0, t.localize)(4273, null),
								properties: {
									sound: {
										description: (0, t.localize)(4274, null),
										...e.$YLb,
										default: "off",
									},
								},
							},
							"accessibility.signals.lineHasError": {
								...o,
								description: (0, t.localize)(4275, null),
								properties: {
									sound: {
										description: (0, t.localize)(4276, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4277, null),
										...e.$ZLb,
										default: "off",
									},
								},
							},
							"accessibility.signals.lineHasFoldedArea": {
								...o,
								description: (0, t.localize)(4278, null),
								properties: {
									sound: {
										description: (0, t.localize)(4279, null),
										...e.$YLb,
										default: "off",
									},
									announcement: {
										description: (0, t.localize)(4280, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.lineHasWarning": {
								...o,
								description: (0, t.localize)(4281, null),
								properties: {
									sound: {
										description: (0, t.localize)(4282, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4283, null),
										...e.$ZLb,
										default: "off",
									},
								},
							},
							"accessibility.signals.positionHasError": {
								...o,
								description: (0, t.localize)(4284, null),
								properties: {
									sound: {
										description: (0, t.localize)(4285, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4286, null),
										...e.$ZLb,
										default: "on",
									},
								},
							},
							"accessibility.signals.positionHasWarning": {
								...o,
								description: (0, t.localize)(4287, null),
								properties: {
									sound: {
										description: (0, t.localize)(4288, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4289, null),
										...e.$ZLb,
										default: "on",
									},
								},
							},
							"accessibility.signals.onDebugBreak": {
								...o,
								description: (0, t.localize)(4290, null),
								properties: {
									sound: {
										description: (0, t.localize)(4291, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4292, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.noInlayHints": {
								...o,
								description: (0, t.localize)(4293, null),
								properties: {
									sound: {
										description: (0, t.localize)(4294, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4295, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.taskCompleted": {
								...o,
								description: (0, t.localize)(4296, null),
								properties: {
									sound: {
										description: (0, t.localize)(4297, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4298, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.taskFailed": {
								...o,
								description: (0, t.localize)(4299, null),
								properties: {
									sound: {
										description: (0, t.localize)(4300, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4301, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.terminalCommandFailed": {
								...o,
								description: (0, t.localize)(4302, null),
								properties: {
									sound: {
										description: (0, t.localize)(4303, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4304, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.terminalCommandSucceeded": {
								...o,
								description: (0, t.localize)(4305, null),
								properties: {
									sound: {
										description: (0, t.localize)(4306, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4307, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.terminalQuickFix": {
								...o,
								description: (0, t.localize)(4308, null),
								properties: {
									sound: {
										description: (0, t.localize)(4309, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4310, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.terminalBell": {
								...o,
								description: (0, t.localize)(4311, null),
								properties: {
									sound: {
										description: (0, t.localize)(4312, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4313, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.diffLineInserted": {
								...f,
								description: (0, t.localize)(4314, null),
								properties: {
									sound: {
										description: (0, t.localize)(4315, null),
										...e.$YLb,
									},
								},
							},
							"accessibility.signals.diffLineModified": {
								...f,
								description: (0, t.localize)(4316, null),
								properties: {
									sound: {
										description: (0, t.localize)(4317, null),
										...e.$YLb,
									},
								},
							},
							"accessibility.signals.diffLineDeleted": {
								...f,
								description: (0, t.localize)(4318, null),
								properties: {
									sound: {
										description: (0, t.localize)(4319, null),
										...e.$YLb,
									},
								},
							},
							"accessibility.signals.notebookCellCompleted": {
								...o,
								description: (0, t.localize)(4320, null),
								properties: {
									sound: {
										description: (0, t.localize)(4321, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4322, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.notebookCellFailed": {
								...o,
								description: (0, t.localize)(4323, null),
								properties: {
									sound: {
										description: (0, t.localize)(4324, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4325, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.chatRequestSent": {
								...o,
								description: (0, t.localize)(4326, null),
								properties: {
									sound: {
										description: (0, t.localize)(4327, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4328, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.progress": {
								...o,
								description: (0, t.localize)(4329, null),
								properties: {
									sound: {
										description: (0, t.localize)(4330, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4331, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.chatResponseReceived": {
								...f,
								description: (0, t.localize)(4332, null),
								properties: {
									sound: {
										description: (0, t.localize)(4333, null),
										...e.$YLb,
									},
								},
							},
							"accessibility.signals.voiceRecordingStarted": {
								...f,
								description: (0, t.localize)(4334, null),
								properties: {
									sound: {
										description: (0, t.localize)(4335, null),
										...e.$YLb,
									},
								},
								default: { sound: "on" },
							},
							"accessibility.signals.voiceRecordingStopped": {
								...f,
								description: (0, t.localize)(4336, null),
								properties: {
									sound: {
										description: (0, t.localize)(4337, null),
										...e.$YLb,
										default: "off",
									},
								},
							},
							"accessibility.signals.clear": {
								...o,
								description: (0, t.localize)(4338, null),
								properties: {
									sound: {
										description: (0, t.localize)(4339, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4340, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.save": {
								type: "object",
								tags: ["accessibility"],
								additionalProperties: !1,
								markdownDescription: (0, t.localize)(4341, null),
								properties: {
									sound: {
										description: (0, t.localize)(4342, null),
										type: "string",
										enum: ["userGesture", "always", "never"],
										default: "never",
										enumDescriptions: [
											(0, t.localize)(4343, null),
											(0, t.localize)(4344, null),
											(0, t.localize)(4345, null),
										],
									},
									announcement: {
										description: (0, t.localize)(4346, null),
										type: "string",
										enum: ["userGesture", "always", "never"],
										default: "never",
										enumDescriptions: [
											(0, t.localize)(4347, null),
											(0, t.localize)(4348, null),
											(0, t.localize)(4349, null),
										],
									},
								},
								default: { sound: "never", announcement: "never" },
							},
							"accessibility.signals.format": {
								type: "object",
								tags: ["accessibility"],
								additionalProperties: !1,
								markdownDescription: (0, t.localize)(4350, null),
								properties: {
									sound: {
										description: (0, t.localize)(4351, null),
										type: "string",
										enum: ["userGesture", "always", "never"],
										default: "never",
										enumDescriptions: [
											(0, t.localize)(4352, null),
											(0, t.localize)(4353, null),
											(0, t.localize)(4354, null),
										],
									},
									announcement: {
										description: (0, t.localize)(4355, null),
										type: "string",
										enum: ["userGesture", "always", "never"],
										default: "never",
										enumDescriptions: [
											(0, t.localize)(4356, null),
											(0, t.localize)(4357, null),
											(0, t.localize)(4358, null),
										],
									},
								},
								default: { sound: "never", announcement: "never" },
							},
							"accessibility.underlineLinks": {
								type: "boolean",
								description: (0, t.localize)(4359, null),
								default: !1,
							},
							"accessibility.debugWatchVariableAnnouncements": {
								type: "boolean",
								description: (0, t.localize)(4360, null),
								default: !0,
							},
						},
					};
				function s() {
					const S = w.$Io.as(i.$No.Configuration);
					S.registerConfiguration(b),
						S.registerConfiguration({
							...C.$v6,
							properties: {
								[c.DimUnfocusedEnabled]: {
									description: (0, t.localize)(4361, null),
									type: "boolean",
									default: !1,
									tags: ["accessibility"],
									scope: i.ConfigurationScope.APPLICATION,
								},
								[c.DimUnfocusedOpacity]: {
									markdownDescription: (0, t.localize)(
										4362,
										null,
										`\`#${c.DimUnfocusedEnabled}#\``,
									),
									type: "number",
									minimum: n.Minimum,
									maximum: n.Maximum,
									default: n.Default,
									tags: ["accessibility"],
									scope: i.ConfigurationScope.APPLICATION,
								},
								[c.HideAccessibleView]: {
									description: (0, t.localize)(4363, null),
									type: "boolean",
									default: !1,
									tags: ["accessibility"],
								},
							},
						});
				}
				e.$2Lb = 1200;
				let l = class extends r.$1c {
					static {
						this.ID =
							"workbench.contrib.dynamicSpeechAccessibilityConfiguration";
					}
					constructor(I, T) {
						super(),
							(this.a = I),
							(this.b = T),
							this.D(
								u.Event.runAndSubscribe(I.onDidChangeHasSpeechProvider, () =>
									this.c(),
								),
							);
					}
					c() {
						if (!this.a.hasSpeechProvider) return;
						const I = this.f(),
							T = Object.keys(I).sort((k, L) =>
								I[k].name.localeCompare(I[L].name),
							);
						w.$Io
							.as(i.$No.Configuration)
							.registerConfiguration({
								...e.$XLb,
								properties: {
									[m.AccessibilityVoiceSettingId.SpeechTimeout]: {
										markdownDescription: (0, t.localize)(4364, null),
										type: "number",
										default: e.$2Lb,
										minimum: 0,
										tags: ["accessibility"],
									},
									[m.AccessibilityVoiceSettingId.SpeechLanguage]: {
										markdownDescription: (0, t.localize)(4365, null),
										type: "string",
										enum: T,
										default: "auto",
										tags: ["accessibility"],
										enumDescriptions: T.map((k) => I[k].name),
										enumItemLabels: T.map((k) => I[k].name),
									},
									[m.AccessibilityVoiceSettingId.AutoSynthesize]: {
										type: "string",
										enum: ["on", "off", "auto"],
										enumDescriptions: [
											(0, t.localize)(4366, null),
											(0, t.localize)(4367, null),
											(0, t.localize)(4368, null),
										],
										markdownDescription: (0, t.localize)(4369, null),
										default: this.b.quality !== "stable" ? "auto" : "off",
										tags: ["accessibility"],
									},
								},
							});
					}
					f() {
						return { auto: { name: (0, t.localize)(4370, null) }, ...m.$17 };
					}
				};
				(e.$3Lb = l),
					(e.$3Lb = l = Ne([j(0, m.$V7), j(1, h.$Bk)], l)),
					w.$Io
						.as(C.$z6.ConfigurationMigration)
						.registerConfigurationMigrations([
							{
								key: "audioCues.volume",
								migrateFn: (S, I) => [
									["accessibility.signalOptions.volume", { value: S }],
									["audioCues.volume", { value: void 0 }],
								],
							},
						]),
					w.$Io
						.as(C.$z6.ConfigurationMigration)
						.registerConfigurationMigrations([
							{
								key: "audioCues.debouncePositionChanges",
								migrateFn: (S) => [
									[
										"accessibility.signalOptions.debouncePositionChanges",
										{ value: S },
									],
									["audioCues.debouncePositionChanges", { value: void 0 }],
								],
							},
						]),
					w.$Io
						.as(C.$z6.ConfigurationMigration)
						.registerConfigurationMigrations([
							{
								key: "accessibility.signalOptions",
								migrateFn: (S, I) => {
									const T = y(I, "general"),
										P = y(I, "errorAtPosition"),
										k = y(I, "warningAtPosition"),
										L = $(I),
										D = v(I),
										M = [];
									return (
										L &&
											M.push([
												"accessibility.signalOptions.volume",
												{ value: L },
											]),
										T &&
											M.push([
												"accessibility.signalOptions.experimental.delays.general",
												{ value: T },
											]),
										P &&
											M.push([
												"accessibility.signalOptions.experimental.delays.errorAtPosition",
												{ value: P },
											]),
										k &&
											M.push([
												"accessibility.signalOptions.experimental.delays.warningAtPosition",
												{ value: k },
											]),
										D &&
											M.push([
												"accessibility.signalOptions.debouncePositionChanges",
												{ value: D },
											]),
										M.push(["accessibility.signalOptions", { value: void 0 }]),
										M
									);
								},
							},
						]),
					w.$Io
						.as(C.$z6.ConfigurationMigration)
						.registerConfigurationMigrations([
							{
								key: "accessibility.signals.sounds.volume",
								migrateFn: (S) => [
									["accessibility.signalOptions.volume", { value: S }],
									["accessibility.signals.sounds.volume", { value: void 0 }],
								],
							},
						]),
					w.$Io
						.as(C.$z6.ConfigurationMigration)
						.registerConfigurationMigrations([
							{
								key: "accessibility.signals.debouncePositionChanges",
								migrateFn: (S) => [
									[
										"accessibility.signalOptions.debouncePositionChanges",
										{ value: S },
									],
									[
										"accessibility.signals.debouncePositionChanges",
										{ value: void 0 },
									],
								],
							},
						]);
				function y(S, I) {
					return (
						S(`accessibility.signalOptions.experimental.delays.${I}`) ||
						S("accessibility.signalOptions")?.["experimental.delays"]?.[
							`${I}`
						] ||
						S("accessibility.signalOptions")?.delays?.[`${I}`]
					);
				}
				function $(S) {
					return (
						S("accessibility.signalOptions.volume") ||
						S("accessibility.signalOptions")?.volume ||
						S("accessibility.signals.sounds.volume") ||
						S("audioCues.volume")
					);
				}
				function v(S) {
					return (
						S("accessibility.signalOptions.debouncePositionChanges") ||
						S("accessibility.signalOptions")?.debouncePositionChanges ||
						S("accessibility.signals.debouncePositionChanges") ||
						S("audioCues.debouncePositionChanges")
					);
				}
				w.$Io.as(C.$z6.ConfigurationMigration).registerConfigurationMigrations([
					{
						key: m.AccessibilityVoiceSettingId.AutoSynthesize,
						migrateFn: (S) => {
							let I;
							if (S === !0) I = "on";
							else if (S === !1) I = "off";
							else return [];
							return [
								[m.AccessibilityVoiceSettingId.AutoSynthesize, { value: I }],
							];
						},
					},
				]),
					w.$Io
						.as(C.$z6.ConfigurationMigration)
						.registerConfigurationMigrations([
							{
								key: "accessibility.signals.chatResponsePending",
								migrateFn: (S, I) => [
									["accessibility.signals.progress", { value: S }],
									[
										"accessibility.signals.chatResponsePending",
										{ value: void 0 },
									],
								],
							},
						]),
					w.$Io
						.as(C.$z6.ConfigurationMigration)
						.registerConfigurationMigrations(
							d.$Twb.allAccessibilitySignals
								.map((S) =>
									S.legacySoundSettingsKey
										? {
												key: S.legacySoundSettingsKey,
												migrateFn: (I, T) => {
													const P = [],
														k = S.legacyAnnouncementSettingsKey;
													let L;
													return (
														k &&
															((L = T(k) ?? void 0),
															L !== void 0 &&
																typeof L != "string" &&
																(L = L ? "auto" : "off")),
														P.push([
															`${S.legacySoundSettingsKey}`,
															{ value: void 0 },
														]),
														P.push([
															`${S.settingsKey}`,
															{
																value:
																	L !== void 0
																		? { announcement: L, sound: I }
																		: { sound: I },
															},
														]),
														P
													);
												},
											}
										: void 0,
								)
								.filter(a.$tg),
						),
					w.$Io
						.as(C.$z6.ConfigurationMigration)
						.registerConfigurationMigrations(
							d.$Twb.allAccessibilitySignals
								.filter(
									(S) =>
										!!S.legacyAnnouncementSettingsKey &&
										!!S.legacySoundSettingsKey,
								)
								.map((S) => ({
									key: S.legacyAnnouncementSettingsKey,
									migrateFn: (I, T) => {
										const P = [],
											k =
												T(S.settingsKey)?.sound || T(S.legacySoundSettingsKey);
										return (
											I !== void 0 &&
												typeof I != "string" &&
												(I = I ? "auto" : "off"),
											P.push([
												`${S.settingsKey}`,
												{
													value:
														I !== void 0
															? { announcement: I, sound: k }
															: { sound: k },
												},
											]),
											P.push([
												`${S.legacyAnnouncementSettingsKey}`,
												{ value: void 0 },
											]),
											P.push([
												`${S.legacySoundSettingsKey}`,
												{ value: void 0 },
											]),
											P
										);
									},
								})),
						);
			},
		)
