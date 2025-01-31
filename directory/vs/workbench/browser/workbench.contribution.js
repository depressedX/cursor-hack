import '../../../require.js';
import '../../../exports.js';
import '../../platform/registry/common/platform.js';
import '../../nls.js';
import '../../platform/configuration/common/configurationRegistry.js';
import '../../base/common/platform.js';
import '../common/configuration.js';
import '../../base/browser/browser.js';
import '../../base/common/constants.js';
import '../common/contributions.js';
import '../services/layout/browser/layoutService.js';
import './parts/titlebar/windowTitle.js';
import '../services/editor/common/customEditorLabelService.js';
define(
			de[1905],
			he([1, 0, 30, 4, 81, 12, 224, 139, 58, 55, 96, 1327, 399]),
			function (ce /*require*/,
 e /*exports*/,
 t /*platform*/,
 i /*nls*/,
 w /*configurationRegistry*/,
 E /*platform*/,
 C /*configuration*/,
 d /*browser*/,
 m /*constants*/,
 r /*contributions*/,
 u /*layoutService*/,
 a /*windowTitle*/,
 h /*customEditorLabelService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Atc = void 0);
				const c = 500;
				e.$Atc = [];
				const n = console.log.bind(console);
				(console.stdlog = console.log),
					(console.log = function () {
						try {
							e.$Atc.push(
								...Array.from(arguments)
									.map((f) => (typeof f == "object" ? "[Object]" : f))
									.map((f) =>
										typeof f == "string" && f.length > 1e4
											? "string was too big"
											: f,
									),
							);
							let o = e.$Atc.length - c;
							o >= 0 && e.$Atc.splice(0, o + 1);
						} catch {}
					});
				const g = console.error.bind(console);
				(console.stderr = console.error),
					(console.error = function () {
						try {
							e.$Atc.push(
								...Array.from(arguments)
									.map((f) => (typeof f == "object" ? JSON.stringify(f) : f))
									.map((f) =>
										typeof f == "string" && f.length > 1e4
											? "string was too big"
											: f,
									),
							);
							let o = e.$Atc.length - c;
							o >= 0 && e.$Atc.splice(0, o + 1);
						} catch {}
						g.apply(console, Array.from(arguments));
					});
				const p = t.$Io.as(w.$No.Configuration);
				(function () {
					(0, r.$s6)(C.$A6.ID, C.$A6, r.WorkbenchPhase.Eventually),
						(0, r.$s6)(C.$B6.ID, C.$B6, r.WorkbenchPhase.AfterRestored),
						p.registerConfiguration({
							...C.$v6,
							properties: {
								"workbench.externalBrowser": {
									type: "string",
									markdownDescription: (0, i.localize)(3776, null),
									included: E.$p,
									restricted: !0,
								},
								"workbench.editor.titleScrollbarSizing": {
									type: "string",
									enum: ["default", "large"],
									enumDescriptions: [
										(0, i.localize)(3777, null),
										(0, i.localize)(3778, null),
									],
									description: (0, i.localize)(3779, null),
									default: "default",
								},
								[u.LayoutSettings.EDITOR_TABS_MODE]: {
									type: "string",
									enum: [
										u.EditorTabsMode.MULTIPLE,
										u.EditorTabsMode.SINGLE,
										u.EditorTabsMode.NONE,
									],
									enumDescriptions: [
										(0, i.localize)(3780, null),
										(0, i.localize)(3781, null),
										(0, i.localize)(3782, null),
									],
									description: (0, i.localize)(3783, null),
									default: "multiple",
								},
								[u.LayoutSettings.EDITOR_ACTIONS_LOCATION]: {
									type: "string",
									enum: [
										u.EditorActionsLocation.DEFAULT,
										u.EditorActionsLocation.TITLEBAR,
										u.EditorActionsLocation.HIDDEN,
									],
									markdownEnumDescriptions: [
										(0, i.localize)(
											3784,
											null,
											"`#workbench.editor.showTabs#`",
											"`none`",
										),
										(0, i.localize)(
											3785,
											null,
											"`#window.customTitleBarVisibility#`",
											"`never`",
										),
										(0, i.localize)(3786, null),
									],
									markdownDescription: (0, i.localize)(3787, null),
									default: "default",
								},
								"workbench.editor.alwaysShowEditorActions": {
									type: "boolean",
									markdownDescription: (0, i.localize)(3788, null),
									default: !1,
								},
								"workbench.editor.wrapTabs": {
									type: "boolean",
									markdownDescription: (0, i.localize)(
										3789,
										null,
										"`#workbench.editor.showTabs#`",
										"`multiple`",
									),
									default: !1,
								},
								"workbench.editor.scrollToSwitchTabs": {
									type: "boolean",
									markdownDescription: (0, i.localize)(
										3790,
										null,
										"`#workbench.editor.showTabs#`",
										"`multiple`",
									),
									default: !1,
								},
								"workbench.editor.highlightModifiedTabs": {
									type: "boolean",
									markdownDescription: (0, i.localize)(
										3791,
										null,
										"`#workbench.editor.showTabs#`",
										"multiple",
									),
									default: !1,
								},
								"workbench.editor.decorations.badges": {
									type: "boolean",
									markdownDescription: (0, i.localize)(3792, null),
									default: !0,
								},
								"workbench.editor.decorations.colors": {
									type: "boolean",
									markdownDescription: (0, i.localize)(3793, null),
									default: !0,
								},
								[h.$PIb.SETTING_ID_ENABLED]: {
									type: "boolean",
									markdownDescription: (0, i.localize)(3794, null),
									default: !0,
								},
								[h.$PIb.SETTING_ID_PATTERNS]: {
									type: "object",
									markdownDescription: (() => {
										let b = (0, i.localize)(3795, null);
										return (
											(b +=
												`
- ` +
												[
													(0, i.localize)(3796, null),
													(0, i.localize)(3797, null),
													(0, i.localize)(3798, null),
													(0, i.localize)(3799, null),
													(0, i.localize)(3800, null),
												].join(`
- `)),
											(b +=
												`

` + (0, i.localize)(3801, null)),
											b
										);
									})(),
									additionalProperties: {
										type: ["string", "null"],
										markdownDescription: (0, i.localize)(3802, null),
										minLength: 1,
										pattern: ".*[a-zA-Z0-9].*",
									},
									default: {},
								},
								"workbench.editor.labelFormat": {
									type: "string",
									enum: ["default", "short", "medium", "long"],
									enumDescriptions: [
										(0, i.localize)(3803, null),
										(0, i.localize)(3804, null),
										(0, i.localize)(3805, null),
										(0, i.localize)(3806, null),
									],
									default: "default",
									description: (0, i.localize)(3807, null),
								},
								"workbench.editor.untitled.labelFormat": {
									type: "string",
									enum: ["content", "name"],
									enumDescriptions: [
										(0, i.localize)(3808, null),
										(0, i.localize)(3809, null),
									],
									default: "content",
									description: (0, i.localize)(3810, null),
								},
								"workbench.editor.empty.hint": {
									type: "string",
									enum: ["text", "hidden"],
									default: "text",
									markdownDescription: (0, i.localize)(3811, null),
								},
								"workbench.editor.languageDetection": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3812, null),
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
								},
								"workbench.editor.historyBasedLanguageDetection": {
									type: "boolean",
									default: !0,
									tags: ["experimental"],
									description: (0, i.localize)(3813, null),
								},
								"workbench.editor.preferHistoryBasedLanguageDetection": {
									type: "boolean",
									default: !1,
									tags: ["experimental"],
									description: (0, i.localize)(3814, null),
								},
								"workbench.editor.languageDetectionHints": {
									type: "object",
									default: { untitledEditors: !0, notebookEditors: !0 },
									tags: ["experimental"],
									description: (0, i.localize)(3815, null),
									additionalProperties: !1,
									properties: {
										untitledEditors: {
											type: "boolean",
											description: (0, i.localize)(3816, null),
										},
										notebookEditors: {
											type: "boolean",
											description: (0, i.localize)(3817, null),
										},
									},
								},
								"workbench.editor.tabActionLocation": {
									type: "string",
									enum: ["left", "right"],
									default: "right",
									markdownDescription: (0, i.localize)(
										3818,
										null,
										"`#workbench.editor.showTabs#`",
										"`multiple`",
									),
								},
								"workbench.editor.tabActionCloseVisibility": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3819, null),
								},
								"workbench.editor.tabActionUnpinVisibility": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3820, null),
								},
								"workbench.editor.tabSizing": {
									type: "string",
									enum: ["fit", "shrink", "fixed"],
									default: "fit",
									enumDescriptions: [
										(0, i.localize)(3821, null),
										(0, i.localize)(3822, null),
										(0, i.localize)(3823, null),
									],
									markdownDescription: (0, i.localize)(
										3824,
										null,
										"`#workbench.editor.showTabs#`",
										"`multiple`",
									),
								},
								"workbench.editor.tabSizingFixedMinWidth": {
									type: "number",
									default: 50,
									minimum: 38,
									markdownDescription: (0, i.localize)(
										3825,
										null,
										"`#workbench.editor.tabSizing#`",
										"`fixed`",
									),
								},
								"workbench.editor.tabSizingFixedMaxWidth": {
									type: "number",
									default: 160,
									minimum: 38,
									markdownDescription: (0, i.localize)(
										3826,
										null,
										"`#workbench.editor.tabSizing#`",
										"`fixed`",
									),
								},
								"window.density.editorTabHeight": {
									type: "string",
									enum: ["default", "compact"],
									default: "default",
									markdownDescription: (0, i.localize)(
										3827,
										null,
										"`#workbench.editor.showTabs#`",
										"`multiple`",
									),
								},
								"workbench.editor.pinnedTabSizing": {
									type: "string",
									enum: ["normal", "compact", "shrink"],
									default: "normal",
									enumDescriptions: [
										(0, i.localize)(3828, null),
										(0, i.localize)(3829, null),
										(0, i.localize)(3830, null),
									],
									markdownDescription: (0, i.localize)(
										3831,
										null,
										"`#workbench.editor.showTabs#`",
										"`multiple`",
									),
								},
								"workbench.editor.pinnedTabsOnSeparateRow": {
									type: "boolean",
									default: !1,
									markdownDescription: (0, i.localize)(
										3832,
										null,
										"`#workbench.editor.showTabs#`",
										"`multiple`",
									),
								},
								"workbench.editor.preventPinnedEditorClose": {
									type: "string",
									enum: ["keyboardAndMouse", "keyboard", "mouse", "never"],
									default: "keyboardAndMouse",
									enumDescriptions: [
										(0, i.localize)(3833, null),
										(0, i.localize)(3834, null),
										(0, i.localize)(3835, null),
										(0, i.localize)(3836, null),
									],
									description: (0, i.localize)(3837, null),
								},
								"workbench.editor.splitSizing": {
									type: "string",
									enum: ["auto", "distribute", "split"],
									default: "auto",
									enumDescriptions: [
										(0, i.localize)(3838, null),
										(0, i.localize)(3839, null),
										(0, i.localize)(3840, null),
									],
									description: (0, i.localize)(3841, null),
								},
								"workbench.editor.splitOnDragAndDrop": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3842, null),
								},
								"workbench.editor.dragToOpenWindow": {
									type: "boolean",
									default: !0,
									markdownDescription: (0, i.localize)(3843, null),
								},
								"workbench.editor.focusRecentEditorAfterClose": {
									type: "boolean",
									description: (0, i.localize)(3844, null),
									default: !0,
								},
								"workbench.editor.showIcons": {
									type: "boolean",
									description: (0, i.localize)(3845, null),
									default: !0,
								},
								"workbench.editor.enablePreview": {
									type: "boolean",
									description: (0, i.localize)(3846, null),
									default: !0,
								},
								"workbench.editor.enablePreviewFromQuickOpen": {
									type: "boolean",
									markdownDescription: (0, i.localize)(
										3847,
										null,
										"`#workbench.editor.showTabs#`",
										"`multiple`",
									),
									default: !1,
								},
								"workbench.editor.enablePreviewFromCodeNavigation": {
									type: "boolean",
									markdownDescription: (0, i.localize)(
										3848,
										null,
										"`#workbench.editor.showTabs#`",
										"`multiple`",
									),
									default: !1,
								},
								"workbench.editor.closeOnFileDelete": {
									type: "boolean",
									description: (0, i.localize)(3849, null),
									default: !1,
								},
								"workbench.editor.openPositioning": {
									type: "string",
									enum: ["left", "right", "first", "last"],
									default: "right",
									markdownDescription: (0, i.localize)(
										3850,
										null,
										"`left`",
										"`right`",
										"`first`",
										"`last`",
									),
								},
								"workbench.editor.openSideBySideDirection": {
									type: "string",
									enum: ["right", "down"],
									default: "right",
									markdownDescription: (0, i.localize)(3851, null),
								},
								"workbench.editor.closeEmptyGroups": {
									type: "boolean",
									description: (0, i.localize)(3852, null),
									default: !0,
								},
								"workbench.editor.revealIfOpen": {
									type: "boolean",
									description: (0, i.localize)(3853, null),
									default: !1,
								},
								"workbench.editor.mouseBackForwardToNavigate": {
									type: "boolean",
									description: (0, i.localize)(3854, null),
									default: !0,
								},
								"workbench.editor.navigationScope": {
									type: "string",
									enum: ["default", "editorGroup", "editor"],
									default: "default",
									markdownDescription: (0, i.localize)(3855, null),
									enumDescriptions: [
										(0, i.localize)(3856, null),
										(0, i.localize)(3857, null),
										(0, i.localize)(3858, null),
									],
								},
								"workbench.editor.restoreViewState": {
									type: "boolean",
									markdownDescription: (0, i.localize)(
										3859,
										null,
										"`#workbench.editor.sharedViewState#`",
									),
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
								},
								"workbench.editor.sharedViewState": {
									type: "boolean",
									description: (0, i.localize)(3860, null),
									default: !1,
								},
								"workbench.editor.splitInGroupLayout": {
									type: "string",
									enum: ["vertical", "horizontal"],
									default: "horizontal",
									markdownDescription: (0, i.localize)(3861, null),
									enumDescriptions: [
										(0, i.localize)(3862, null),
										(0, i.localize)(3863, null),
									],
								},
								"workbench.editor.centeredLayoutAutoResize": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3864, null),
								},
								"workbench.editor.centeredLayoutFixedWidth": {
									type: "boolean",
									default: !1,
									description: (0, i.localize)(3865, null),
								},
								"workbench.editor.doubleClickTabToToggleEditorGroupSizes": {
									type: "string",
									enum: ["maximize", "expand", "off"],
									default: "expand",
									markdownDescription: (0, i.localize)(
										3866,
										null,
										"`#workbench.editor.showTabs#`",
										"`multiple`",
									),
									enumDescriptions: [
										(0, i.localize)(3867, null),
										(0, i.localize)(3868, null),
										(0, i.localize)(3869, null),
									],
								},
								"workbench.editor.limit.enabled": {
									type: "boolean",
									default: !1,
									description: (0, i.localize)(3870, null),
								},
								"workbench.editor.limit.value": {
									type: "number",
									default: 10,
									exclusiveMinimum: 0,
									markdownDescription: (0, i.localize)(
										3871,
										null,
										"`#workbench.editor.limit.perEditorGroup#`",
									),
								},
								"workbench.editor.limit.excludeDirty": {
									type: "boolean",
									default: !1,
									description: (0, i.localize)(3872, null),
								},
								"workbench.editor.limit.perEditorGroup": {
									type: "boolean",
									default: !1,
									description: (0, i.localize)(3873, null),
								},
								"workbench.localHistory.enabled": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3874, null),
									scope: w.ConfigurationScope.RESOURCE,
								},
								"workbench.localHistory.maxFileSize": {
									type: "number",
									default: 256,
									minimum: 1,
									description: (0, i.localize)(3875, null),
									scope: w.ConfigurationScope.RESOURCE,
								},
								"workbench.localHistory.maxFileEntries": {
									type: "number",
									default: 50,
									minimum: 0,
									description: (0, i.localize)(3876, null),
									scope: w.ConfigurationScope.RESOURCE,
								},
								"workbench.localHistory.exclude": {
									type: "object",
									patternProperties: { ".*": { type: "boolean" } },
									markdownDescription: (0, i.localize)(3877, null),
									scope: w.ConfigurationScope.RESOURCE,
								},
								"workbench.localHistory.mergeWindow": {
									type: "number",
									default: 10,
									minimum: 1,
									markdownDescription: (0, i.localize)(3878, null),
									scope: w.ConfigurationScope.RESOURCE,
								},
								"workbench.commandPalette.history": {
									type: "number",
									description: (0, i.localize)(3879, null),
									default: 50,
									minimum: 0,
								},
								"workbench.commandPalette.preserveInput": {
									type: "boolean",
									description: (0, i.localize)(3880, null),
									default: !1,
								},
								"workbench.commandPalette.experimental.suggestCommands": {
									type: "boolean",
									tags: ["experimental"],
									description: (0, i.localize)(3881, null),
									default: !1,
								},
								"workbench.commandPalette.experimental.askChatLocation": {
									type: "string",
									tags: ["experimental"],
									description: (0, i.localize)(3882, null),
									default: "chatView",
									enum: ["chatView", "quickChat"],
									enumDescriptions: [
										(0, i.localize)(3883, null),
										(0, i.localize)(3884, null),
									],
								},
								"workbench.commandPalette.experimental.enableNaturalLanguageSearch":
									{
										type: "boolean",
										tags: ["experimental"],
										description: (0, i.localize)(3885, null),
										default: !0,
									},
								"workbench.quickOpen.closeOnFocusLost": {
									type: "boolean",
									description: (0, i.localize)(3886, null),
									default: !0,
								},
								"workbench.quickOpen.preserveInput": {
									type: "boolean",
									description: (0, i.localize)(3887, null),
									default: !1,
								},
								"workbench.settings.openDefaultSettings": {
									type: "boolean",
									description: (0, i.localize)(3888, null),
									default: !1,
								},
								"workbench.settings.useSplitJSON": {
									type: "boolean",
									markdownDescription: (0, i.localize)(3889, null),
									default: !1,
								},
								"workbench.settings.openDefaultKeybindings": {
									type: "boolean",
									description: (0, i.localize)(3890, null),
									default: !1,
								},
								"workbench.sideBar.location": {
									type: "string",
									enum: ["left", "right"],
									default: "left",
									description: (0, i.localize)(3891, null),
								},
								"workbench.panel.defaultLocation": {
									type: "string",
									enum: ["left", "bottom", "top", "right"],
									default: "bottom",
									description: (0, i.localize)(3892, null),
								},
								"workbench.panel.opensMaximized": {
									type: "string",
									enum: ["always", "never", "preserve"],
									default: "preserve",
									description: (0, i.localize)(3893, null),
									enumDescriptions: [
										(0, i.localize)(3894, null),
										(0, i.localize)(3895, null),
										(0, i.localize)(3896, null),
									],
								},
								"workbench.statusBar.visible": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3897, null),
								},
								[u.LayoutSettings.ACTIVITY_BAR_LOCATION]: {
									type: "string",
									enum: ["default", "top", "bottom", "hidden"],
									default: "default",
									markdownDescription: (0, i.localize)(3898, null),
									enumDescriptions: [
										(0, i.localize)(3899, null),
										(0, i.localize)(3900, null),
										(0, i.localize)(3901, null),
										(0, i.localize)(3902, null),
									],
								},
								[m.$LW]: {
									type: "string",
									enum: ["horizontal", "vertical"],
									default: "horizontal",
									description: (0, i.localize)(3903, null),
								},
								"workbench.activityBar.iconClickBehavior": {
									type: "string",
									enum: ["toggle", "focus"],
									default: "toggle",
									markdownDescription: (0, i.localize)(
										3904,
										null,
										"`#workbench.activityBar.location#`",
										"`default`",
									),
									enumDescriptions: [
										(0, i.localize)(3905, null),
										(0, i.localize)(3906, null),
									],
								},
								"workbench.view.alwaysShowHeaderActions": {
									type: "boolean",
									default: !1,
									description: (0, i.localize)(3907, null),
								},
								"workbench.fontAliasing": {
									type: "string",
									enum: ["default", "antialiased", "none", "auto"],
									default: "default",
									description: (0, i.localize)(3908, null),
									enumDescriptions: [
										(0, i.localize)(3909, null),
										(0, i.localize)(3910, null),
										(0, i.localize)(3911, null),
										(0, i.localize)(3912, null),
									],
									included: E.$m,
								},
								"workbench.settings.editor": {
									type: "string",
									enum: ["ui", "json"],
									enumDescriptions: [
										(0, i.localize)(3913, null),
										(0, i.localize)(3914, null),
									],
									description: (0, i.localize)(3915, null),
									default: "ui",
									scope: w.ConfigurationScope.WINDOW,
								},
								"workbench.hover.delay": {
									type: "number",
									description: (0, i.localize)(3916, null),
									default: 250,
									minimum: 0,
								},
								"workbench.reduceMotion": {
									type: "string",
									description: (0, i.localize)(3917, null),
									enumDescriptions: [
										(0, i.localize)(3918, null),
										(0, i.localize)(3919, null),
										(0, i.localize)(3920, null),
									],
									default: "auto",
									tags: ["accessibility"],
									enum: ["on", "off", "auto"],
								},
								[u.LayoutSettings.LAYOUT_ACTIONS]: {
									type: "boolean",
									default: !0,
									markdownDescription: E.$r
										? (0, i.localize)(3921, null)
										: (0, i.localize)(
												3922,
												null,
												"`#window.customTitleBarVisibility#`",
												"`never`",
											),
								},
								"workbench.layoutControl.type": {
									type: "string",
									enum: ["menu", "toggles", "both"],
									enumDescriptions: [
										(0, i.localize)(3923, null),
										(0, i.localize)(3924, null),
										(0, i.localize)(3925, null),
									],
									default: "both",
									description: (0, i.localize)(3926, null),
								},
								"workbench.tips.enabled": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3927, null),
								},
							},
						});
					let f = (0, i.localize)(3928, null);
					(f +=
						`
- ` +
						[
							(0, i.localize)(3929, null),
							(0, i.localize)(3930, null),
							(0, i.localize)(3931, null),
							(0, i.localize)(3932, null),
							(0, i.localize)(3933, null),
							(0, i.localize)(3934, null),
							(0, i.localize)(3935, null),
							(0, i.localize)(3936, null),
							(0, i.localize)(3937, null),
							(0, i.localize)(3938, null),
							(0, i.localize)(3939, null),
							(0, i.localize)(3940, null),
							(0, i.localize)(3941, null),
							(0, i.localize)(3942, null),
							(0, i.localize)(3943, null),
							(0, i.localize)(3944, null),
							(0, i.localize)(3945, null),
							(0, i.localize)(3946, null),
							(0, i.localize)(3947, null),
						].join(`
- `)),
						p.registerConfiguration({
							...C.$y6,
							properties: {
								"window.title": {
									type: "string",
									default: a.$xtc,
									markdownDescription: f,
								},
								"window.titleSeparator": {
									type: "string",
									default: a.$ytc,
									markdownDescription: (0, i.localize)(
										3948,
										null,
										"`#window.title#`",
									),
								},
								[u.LayoutSettings.COMMAND_CENTER]: {
									type: "boolean",
									default: !0,
									markdownDescription: E.$r
										? (0, i.localize)(3949, null)
										: (0, i.localize)(
												3950,
												null,
												"`#window.customTitleBarVisibility#`",
												"`never`",
											),
								},
								"window.menuBarVisibility": {
									type: "string",
									enum: ["classic", "visible", "toggle", "hidden", "compact"],
									markdownEnumDescriptions: [
										(0, i.localize)(3951, null),
										(0, i.localize)(3952, null),
										E.$m
											? (0, i.localize)(3953, null)
											: (0, i.localize)(3954, null),
										(0, i.localize)(3955, null),
										E.$r
											? (0, i.localize)(3956, null)
											: (0, i.localize)(
													3957,
													null,
													"`#window.titleBarStyle#`",
													"`native`",
												),
									],
									default: E.$r ? "compact" : "classic",
									scope: w.ConfigurationScope.APPLICATION,
									markdownDescription: E.$m
										? (0, i.localize)(3958, null)
										: (0, i.localize)(3959, null),
									included: E.$l || E.$n || E.$r,
								},
								"window.enableMenuBarMnemonics": {
									type: "boolean",
									default: !1,
									scope: w.ConfigurationScope.APPLICATION,
									description: (0, i.localize)(3960, null),
									included: !1,
								},
								"window.customMenuBarAltFocus": {
									type: "boolean",
									default: !1,
									scope: w.ConfigurationScope.APPLICATION,
									markdownDescription: (0, i.localize)(3961, null),
									included: !1,
								},
								"window.openFilesInNewWindow": {
									type: "string",
									enum: ["on", "off", "default"],
									enumDescriptions: [
										(0, i.localize)(3962, null),
										(0, i.localize)(3963, null),
										E.$m
											? (0, i.localize)(3964, null)
											: (0, i.localize)(3965, null),
									],
									default: "off",
									scope: w.ConfigurationScope.APPLICATION,
									markdownDescription: E.$m
										? (0, i.localize)(3966, null)
										: (0, i.localize)(3967, null),
								},
								"window.openFoldersInNewWindow": {
									type: "string",
									enum: ["on", "off", "default"],
									enumDescriptions: [
										(0, i.localize)(3968, null),
										(0, i.localize)(3969, null),
										(0, i.localize)(3970, null),
									],
									default: "default",
									scope: w.ConfigurationScope.APPLICATION,
									markdownDescription: (0, i.localize)(3971, null),
								},
								"window.confirmBeforeClose": {
									type: "string",
									enum: ["always", "keyboardOnly", "never"],
									enumDescriptions: [
										E.$r
											? (0, i.localize)(3972, null)
											: (0, i.localize)(3973, null),
										E.$r
											? (0, i.localize)(3974, null)
											: (0, i.localize)(3975, null),
										E.$r
											? (0, i.localize)(3976, null)
											: (0, i.localize)(3977, null),
									],
									default: E.$r && !(0, d.$Vfb)() ? "keyboardOnly" : "never",
									markdownDescription: E.$r
										? (0, i.localize)(3978, null)
										: (0, i.localize)(3979, null),
									scope: w.ConfigurationScope.APPLICATION,
								},
							},
						}),
						(0, r.$s6)(C.$D6.ID, C.$D6, r.WorkbenchPhase.Eventually),
						p.registerConfiguration({
							...C.$x6,
							properties: {
								"problems.visibility": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3980, null),
								},
							},
						}),
						p.registerConfiguration({
							id: "zenMode",
							order: 9,
							title: (0, i.localize)(3981, null),
							type: "object",
							properties: {
								"zenMode.fullScreen": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3982, null),
								},
								"zenMode.centerLayout": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3983, null),
								},
								"zenMode.showTabs": {
									type: "string",
									enum: ["multiple", "single", "none"],
									description: (0, i.localize)(3984, null),
									enumDescriptions: [
										(0, i.localize)(3985, null),
										(0, i.localize)(3986, null),
										(0, i.localize)(3987, null),
									],
									default: "multiple",
								},
								"zenMode.hideStatusBar": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3988, null),
								},
								"zenMode.hideActivityBar": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3989, null),
								},
								"zenMode.hideLineNumbers": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3990, null),
								},
								"zenMode.restore": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3991, null),
								},
								"zenMode.silentNotifications": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3992, null),
								},
							},
						});
				})(),
					t.$Io
						.as(C.$z6.ConfigurationMigration)
						.registerConfigurationMigrations([
							{
								key: "workbench.activityBar.visible",
								migrateFn: (o) => {
									const f = [];
									return (
										o !== void 0 &&
											f.push([
												"workbench.activityBar.visible",
												{ value: void 0 },
											]),
										o === !1 &&
											f.push([
												u.LayoutSettings.ACTIVITY_BAR_LOCATION,
												{ value: u.ActivityBarPosition.HIDDEN },
											]),
										f
									);
								},
							},
						]),
					t.$Io
						.as(C.$z6.ConfigurationMigration)
						.registerConfigurationMigrations([
							{
								key: u.LayoutSettings.ACTIVITY_BAR_LOCATION,
								migrateFn: (o) => {
									const f = [];
									return (
										o === "side" &&
											f.push([
												u.LayoutSettings.ACTIVITY_BAR_LOCATION,
												{ value: u.ActivityBarPosition.DEFAULT },
											]),
										f
									);
								},
							},
						]),
					t.$Io
						.as(C.$z6.ConfigurationMigration)
						.registerConfigurationMigrations([
							{
								key: "workbench.editor.doubleClickTabToToggleEditorGroupSizes",
								migrateFn: (o) => {
									const f = [];
									return (
										typeof o == "boolean" &&
											((o = o ? "expand" : "off"),
											f.push([
												"workbench.editor.doubleClickTabToToggleEditorGroupSizes",
												{ value: o },
											])),
										f
									);
								},
							},
							{
								key: u.LayoutSettings.EDITOR_TABS_MODE,
								migrateFn: (o) => {
									const f = [];
									return (
										typeof o == "boolean" &&
											((o = o
												? u.EditorTabsMode.MULTIPLE
												: u.EditorTabsMode.SINGLE),
											f.push([
												u.LayoutSettings.EDITOR_TABS_MODE,
												{ value: o },
											])),
										f
									);
								},
							},
							{
								key: "workbench.editor.tabCloseButton",
								migrateFn: (o) => {
									const f = [];
									return (
										o === "left" || o === "right"
											? f.push([
													"workbench.editor.tabActionLocation",
													{ value: o },
												])
											: o === "off" &&
												f.push([
													"workbench.editor.tabActionCloseVisibility",
													{ value: !1 },
												]),
										f
									);
								},
							},
							{
								key: "zenMode.hideTabs",
								migrateFn: (o) => {
									const f = [["zenMode.hideTabs", { value: void 0 }]];
									return (
										o === !0 &&
											f.push(["zenMode.showTabs", { value: "single" }]),
										f
									);
								},
							},
						]);
			},
		)
