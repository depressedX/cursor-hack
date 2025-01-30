import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/registry/common/platform.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/actions/common/actions.js';
import '../common/problemMatcher.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../platform/jsonschemas/common/jsonContributionRegistry.js';
import '../../../services/statusbar/browser/statusbar.js';
import '../../../services/output/common/output.js';
import '../common/tasks.js';
import '../common/taskService.js';
import '../../../common/contributions.js';
import './runAutomaticTasks.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../base/common/keyCodes.js';
import '../common/jsonSchema_v1.js';
import '../common/jsonSchema_v2.js';
import './abstractTaskService.js';
import '../../../services/configuration/common/configuration.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../common/contextkeys.js';
import '../../../../platform/quickinput/common/quickAccess.js';
import './tasksQuickAccess.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../common/taskDefinitionRegistry.js';
import '../../terminal/browser/terminalMenus.js';
import '../../../../base/common/types.js';
import '../../../../base/common/async.js';
define(
		de[3839],
		he([
			1, 0, 4, 3, 30, 52, 11, 570, 84, 250, 166, 297, 424, 419, 55, 3328, 43,
			27, 3326, 3327, 1907, 261, 81, 100, 348, 3330, 8, 699, 1017, 28, 15,
		]),
		function (			ce /*require*/,
			e /*exports*/,
			t /*nls*/,
			i /*lifecycle*/,
			w /*platform*/,
			E /*lifecycle*/,
			C /*actions*/,
			d /*problemMatcher*/,
			m /*progress*/,
			r /*jsonContributionRegistry*/,
			u /*statusbar*/,
			a /*output*/,
			h /*tasks*/,
			c /*taskService*/,
			n /*contributions*/,
			g /*runAutomaticTasks*/,
			p /*keybindingsRegistry*/,
			o /*keyCodes*/,
			f /*jsonSchema_v1*/,
			b /*jsonSchema_v2*/,
			s /*abstractTaskService*/,
			l /*configuration*/,
			y /*configurationRegistry*/,
			$ /*contextkeys*/,
			v /*quickAccess*/,
			S /*tasksQuickAccess*/,
			I /*contextkey*/,
			T /*taskDefinitionRegistry*/,
			P /*terminalMenus*/,
			k /*types*/,
			L /*async*/,
) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$mXc = e.$lXc = void 0),
				(t = mt(t)),
				(r = mt(r)),
				(f = xi(f)),
				(b = mt(b));
			const D = w.$Io.as(n.Extensions.Workbench);
			D.registerWorkbenchContribution(g.$YWc, E.LifecyclePhase.Eventually),
				(0, C.$4X)(g.$ZWc),
				C.$ZX.appendMenuItem(C.$XX.CommandPalette, {
					command: { id: g.$ZWc.ID, title: g.$ZWc.LABEL, category: h.$b4 },
					when: c.$Ypc,
				});
			let M = class extends i.$1c {
				constructor(H, q, V) {
					super(),
						(this.c = H),
						(this.f = q),
						(this.g = V),
						(this.b = 0),
						this.h();
				}
				h() {
					let H, q;
					this.D(
						this.c.onDidStateChange((V) => {
							if ((V.kind === h.TaskEventKind.Changed && this.j(), !this.m(V)))
								switch (V.kind) {
									case h.TaskEventKind.Active:
										this.b++,
											this.b === 1 &&
												(H || ({ promise: H, resolve: q } = (0, L.$Fh)()));
										break;
									case h.TaskEventKind.Inactive:
										this.b > 0 && (this.b--, this.b === 0 && H && q && q());
										break;
									case h.TaskEventKind.Terminated:
										this.b !== 0 && ((this.b = 0), H && q && q());
										break;
								}
							H &&
								V.kind === h.TaskEventKind.Active &&
								this.b === 1 &&
								this.g
									.withProgress(
										{
											location: m.ProgressLocation.Window,
											command: "workbench.action.tasks.showTasks",
										},
										(G) => (G.report({ message: t.localize(9634, null) }), H),
									)
									.then(() => {
										H = void 0;
									});
						}),
					);
				}
				async j() {
					const H = await this.c.getActiveTasks();
					if (H.length === 0) this.a && (this.a.dispose(), (this.a = void 0));
					else {
						const q = {
							name: t.localize(9635, null),
							text: `$(tools) ${H.length}`,
							ariaLabel: t.localize(9636, null, H.length),
							tooltip: t.localize(9637, null),
							command: "workbench.action.tasks.showTasks",
						};
						this.a
							? this.a.update(q)
							: (this.a = this.f.addEntry(
									q,
									"status.runningTasks",
									u.StatusbarAlignment.LEFT,
									49,
								));
					}
				}
				m(H) {
					return !this.c.inTerminal() || H.kind === h.TaskEventKind.Changed
						? !1
						: ((0, k.$lg)(H.group) ? H.group : H.group?._id) !==
								h.TaskGroup.Build._id
							? !0
							: H.__task.configurationProperties.problemMatchers === void 0 ||
								H.__task.configurationProperties.problemMatchers.length === 0;
				}
			};
			(e.$lXc = M),
				(e.$lXc = M = Ne([j(0, c.$Zpc), j(1, u.$d6b), j(2, m.$8N)], M)),
				D.registerWorkbenchContribution(M, E.LifecyclePhase.Restored),
				C.$ZX.appendMenuItem(C.$XX.MenubarTerminalMenu, {
					group: P.TerminalMenuBarGroup.Run,
					command: {
						id: "workbench.action.tasks.runTask",
						title: t.localize(9638, null),
					},
					order: 1,
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.MenubarTerminalMenu, {
					group: P.TerminalMenuBarGroup.Run,
					command: {
						id: "workbench.action.tasks.build",
						title: t.localize(9639, null),
					},
					order: 2,
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.MenubarTerminalMenu, {
					group: P.TerminalMenuBarGroup.Manage,
					command: {
						precondition: h.$a4,
						id: "workbench.action.tasks.showTasks",
						title: t.localize(9640, null),
					},
					order: 1,
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.MenubarTerminalMenu, {
					group: P.TerminalMenuBarGroup.Manage,
					command: {
						precondition: h.$a4,
						id: "workbench.action.tasks.restartTask",
						title: t.localize(9641, null),
					},
					order: 2,
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.MenubarTerminalMenu, {
					group: P.TerminalMenuBarGroup.Manage,
					command: {
						precondition: h.$a4,
						id: "workbench.action.tasks.terminate",
						title: t.localize(9642, null),
					},
					order: 3,
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.MenubarTerminalMenu, {
					group: P.TerminalMenuBarGroup.Configure,
					command: {
						id: "workbench.action.tasks.configureTaskRunner",
						title: t.localize(9643, null),
					},
					order: 1,
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.MenubarTerminalMenu, {
					group: P.TerminalMenuBarGroup.Configure,
					command: {
						id: "workbench.action.tasks.configureDefaultBuildTask",
						title: t.localize(9644, null),
					},
					order: 2,
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.CommandPalette, {
					command: {
						id: "workbench.action.tasks.openWorkspaceFileTasks",
						title: t.localize2(9669, "Open Workspace Tasks"),
						category: h.$b4,
					},
					when: I.$Kj.and($.$wPb.isEqualTo("workspace"), c.$Ypc),
				}),
				C.$ZX.appendMenuItem(C.$XX.CommandPalette, {
					command: {
						id: s.ConfigureTaskAction.ID,
						title: s.ConfigureTaskAction.TEXT,
						category: h.$b4,
					},
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.CommandPalette, {
					command: {
						id: "workbench.action.tasks.showLog",
						title: t.localize2(9670, "Show Task Log"),
						category: h.$b4,
					},
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.CommandPalette, {
					command: {
						id: "workbench.action.tasks.runTask",
						title: t.localize2(9671, "Run Task"),
						category: h.$b4,
					},
				}),
				C.$ZX.appendMenuItem(C.$XX.CommandPalette, {
					command: {
						id: "workbench.action.tasks.reRunTask",
						title: t.localize2(9672, "Rerun Last Task"),
						category: h.$b4,
					},
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.CommandPalette, {
					command: {
						id: "workbench.action.tasks.restartTask",
						title: t.localize2(9673, "Restart Running Task"),
						category: h.$b4,
					},
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.CommandPalette, {
					command: {
						id: "workbench.action.tasks.showTasks",
						title: t.localize2(9674, "Show Running Tasks"),
						category: h.$b4,
					},
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.CommandPalette, {
					command: {
						id: "workbench.action.tasks.terminate",
						title: t.localize2(9675, "Terminate Task"),
						category: h.$b4,
					},
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.CommandPalette, {
					command: {
						id: "workbench.action.tasks.build",
						title: t.localize2(9676, "Run Build Task"),
						category: h.$b4,
					},
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.CommandPalette, {
					command: {
						id: "workbench.action.tasks.test",
						title: t.localize2(9677, "Run Test Task"),
						category: h.$b4,
					},
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.CommandPalette, {
					command: {
						id: "workbench.action.tasks.configureDefaultBuildTask",
						title: t.localize2(9678, "Configure Default Build Task"),
						category: h.$b4,
					},
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.CommandPalette, {
					command: {
						id: "workbench.action.tasks.configureDefaultTestTask",
						title: t.localize2(9679, "Configure Default Test Task"),
						category: h.$b4,
					},
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.CommandPalette, {
					command: {
						id: "workbench.action.tasks.openUserTasks",
						title: t.localize2(9680, "Open User Tasks"),
						category: h.$b4,
					},
					when: c.$Ypc,
				});
			class N extends i.$1c {
				constructor() {
					super(), this.a();
				}
				a() {
					const H = "workbench.action.tasks.openUserTasks",
						q = t.localize(9645, null);
					this.D(
						C.$ZX.appendMenuItem(C.$XX.GlobalActivity, {
							command: { id: H, title: q },
							when: c.$Ypc,
							group: "2_configuration",
							order: 6,
						}),
					),
						this.D(
							C.$ZX.appendMenuItem(C.$XX.MenubarPreferencesMenu, {
								command: { id: H, title: q },
								when: c.$Ypc,
								group: "2_configuration",
								order: 6,
							}),
						);
				}
			}
			D.registerWorkbenchContribution(N, E.LifecyclePhase.Restored),
				p.$TX.registerKeybindingRule({
					id: "workbench.action.tasks.build",
					weight: p.KeybindingWeight.WorkbenchContrib,
					when: c.$Vpc,
					primary: o.KeyMod.CtrlCmd | o.KeyMod.Shift | o.KeyCode.KeyB,
				}),
				w.$Io
					.as(a.$p8.OutputChannels)
					.registerChannel({
						id: s.$jXc.OutputChannelId,
						label: s.$jXc.OutputChannelLabel,
						log: !1,
					}),
				w.$Io
					.as(v.$1r.Quickaccess)
					.registerQuickAccessProvider({
						ctor: S.$kXc,
						prefix: S.$kXc.PREFIX,
						contextKey: "inTasksPicker",
						placeholder: t.localize(9646, null),
						helpEntries: [
							{ description: t.localize(9647, null), commandCenterOrder: 60 },
						],
					});
			const B = {
				id: l.$FZ,
				description: "Task definition file",
				type: "object",
				allowTrailingCommas: !0,
				allowComments: !0,
				default: {
					version: "2.0.0",
					tasks: [
						{
							label: "My Task",
							command: "echo hello",
							type: "shell",
							args: [],
							problemMatcher: ["$tsc"],
							presentation: { reveal: "always" },
							group: "build",
						},
					],
				},
			};
			(B.definitions = { ...f.default.definitions, ...b.default.definitions }),
				(B.oneOf = [...(b.default.oneOf || []), ...(f.default.oneOf || [])]);
			const U = w.$Io.as(r.$Jo.JSONContribution);
			U.registerSchema(l.$FZ, B);
			class z extends i.$1c {
				static {
					this.ID = "taskRegistryContribution";
				}
				constructor() {
					super(),
						this.D(
							d.$03.onMatcherChanged(() => {
								(0, b.$2Wc)(), U.notifySchemaChanged(l.$FZ);
							}),
						),
						this.D(
							T.$$3.onDefinitionsChanged(() => {
								(0, b.$1Wc)(), U.notifySchemaChanged(l.$FZ);
							}),
						);
				}
			}
			(e.$mXc = z),
				(0, n.$s6)(z.ID, z, n.WorkbenchPhase.AfterRestored),
				w.$Io.as(y.$No.Configuration).registerConfiguration({
					id: "task",
					order: 100,
					title: t.localize(9648, null),
					type: "object",
					properties: {
						[h.TaskSettingId.ProblemMatchersNeverPrompt]: {
							markdownDescription: t.localize(9649, null),
							oneOf: [
								{
									type: "boolean",
									markdownDescription: t.localize(9650, null),
								},
								{
									type: "object",
									patternProperties: { ".*": { type: "boolean" } },
									markdownDescription: t.localize(9651, null),
									default: { shell: !0 },
								},
							],
							default: !1,
						},
						[h.TaskSettingId.AutoDetect]: {
							markdownDescription: t.localize(9652, null),
							type: "string",
							enum: ["on", "off"],
							default: "on",
						},
						[h.TaskSettingId.SlowProviderWarning]: {
							markdownDescription: t.localize(9653, null),
							oneOf: [
								{
									type: "boolean",
									markdownDescription: t.localize(9654, null),
								},
								{
									type: "array",
									items: {
										type: "string",
										markdownDescription: t.localize(9655, null),
									},
								},
							],
							default: !0,
						},
						[h.TaskSettingId.QuickOpenHistory]: {
							markdownDescription: t.localize(9656, null),
							type: "number",
							default: 30,
							minimum: 0,
							maximum: 30,
						},
						[h.TaskSettingId.QuickOpenDetail]: {
							markdownDescription: t.localize(9657, null),
							type: "boolean",
							default: !0,
						},
						[h.TaskSettingId.QuickOpenSkip]: {
							type: "boolean",
							description: t.localize(9658, null),
							default: !1,
						},
						[h.TaskSettingId.QuickOpenShowAll]: {
							type: "boolean",
							description: t.localize(9659, null),
							default: !1,
						},
						[h.TaskSettingId.AllowAutomaticTasks]: {
							type: "string",
							enum: ["on", "off"],
							enumDescriptions: [
								t.localize(9660, null),
								t.localize(9661, null),
							],
							description: t.localize(9662, null),
							default: "on",
							restricted: !0,
						},
						[h.TaskSettingId.Reconnection]: {
							type: "boolean",
							description: t.localize(9663, null),
							default: !0,
						},
						[h.TaskSettingId.SaveBeforeRun]: {
							markdownDescription: t.localize(9664, null),
							type: "string",
							enum: ["always", "never", "prompt"],
							enumDescriptions: [
								t.localize(9665, null),
								t.localize(9666, null),
								t.localize(9667, null),
							],
							default: "always",
						},
						[h.TaskSettingId.VerboseLogging]: {
							type: "boolean",
							description: t.localize(9668, null),
							default: !1,
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
	