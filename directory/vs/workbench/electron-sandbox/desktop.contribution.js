import '../../../require.js';
import '../../../exports.js';
import '../../platform/registry/common/platform.js';
import '../../nls.js';
import '../../platform/actions/common/actions.js';
import '../../platform/configuration/common/configurationRegistry.js';
import '../../base/common/keyCodes.js';
import '../../base/common/platform.js';
import './actions/developerActions.js';
import './actions/windowActions.js';
import '../../platform/contextkey/common/contextkey.js';
import '../../platform/keybinding/common/keybindingsRegistry.js';
import '../../platform/commands/common/commands.js';
import '../../platform/contextkey/common/contextkeys.js';
import '../../platform/native/common/native.js';
import '../../platform/jsonschemas/common/jsonContributionRegistry.js';
import './actions/installActions.js';
import '../common/contextkeys.js';
import '../../platform/telemetry/common/telemetry.js';
import '../../platform/configuration/common/configuration.js';
import '../services/lifecycle/common/lifecycle.js';
import './window.js';
import '../../base/browser/dom.js';
import '../common/configuration.js';
import '../../platform/window/electron-sandbox/window.js';
define(
			de[4055],
			he([
				1, 0, 30, 4, 11, 81, 27, 12, 3290, 3218, 8, 43, 31, 179, 110, 250, 3217,
				100, 32, 10, 52, 1951, 7, 224, 676,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*platform*/,
				i /*nls*/,
				w /*actions*/,
				E /*configurationRegistry*/,
				C /*keyCodes*/,
				d /*platform*/,
				m /*developerActions*/,
				r /*windowActions*/,
				u /*contextkey*/,
				a /*keybindingsRegistry*/,
				h /*commands*/,
				c /*contextkeys*/,
				n /*native*/,
				g /*jsonContributionRegistry*/,
				p /*installActions*/,
				o /*contextkeys*/,
				f /*telemetry*/,
				b /*configuration*/,
				s /*lifecycle*/,
				l /*window*/,
				y /*dom*/,
				$ /*configuration*/,
				v /*window*/,
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
		