import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/quickinput/browser/pickerQuickAccess.js';
import '../../../../nls.js';
import '../../../../platform/notification/common/notification.js';
import '../common/debug.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../base/common/filters.js';
import './debugCommands.js';
import './debugIcons.js';
import '../../../../base/common/themables.js';
define(
			de[3819],
			he([1, 0, 392, 4, 40, 112, 25, 31, 132, 425, 352, 26]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$KQc = void 0);
				let h = class extends t.$GLb {
					constructor(n, g, p, o) {
						super(r.$5Hc, {
							noResultsPick: { label: (0, i.localize)(5559, null) },
						}),
							(this.a = n),
							(this.b = g),
							(this.h = p),
							(this.j = o);
					}
					async g(n) {
						const g = [];
						if (!this.a.getAdapterManager().hasEnabledDebuggers()) return [];
						g.push({ type: "separator", label: "launch.json" });
						const p = this.a.getConfigurationManager();
						let o;
						for (const s of p.getAllConfigurations()) {
							const l = (0, m.$Zk)(n, s.name, !0);
							l &&
								(o !== s.presentation?.group &&
									(g.push({ type: "separator" }), (o = s.presentation?.group)),
								g.push({
									label: s.name,
									description:
										this.b.getWorkbenchState() === C.WorkbenchState.WORKSPACE
											? s.launch.name
											: "",
									highlights: { label: l },
									buttons: [
										{
											iconClass: a.ThemeIcon.asClassName(u.$vKb),
											tooltip: (0, i.localize)(5560, null),
										},
									],
									trigger: () => (
										s.launch.openConfigFile({ preserveFocus: !1 }),
										t.TriggerAction.CLOSE_PICKER
									),
									accept: async () => {
										await p.selectConfiguration(s.launch, s.name);
										try {
											await this.a.startDebugging(s.launch, void 0, {
												startedByUser: !0,
											});
										} catch (y) {
											this.j.error(y);
										}
									},
								}));
						}
						const f = await p.getDynamicProviders();
						f.length > 0 &&
							g.push({ type: "separator", label: (0, i.localize)(5561, null) }),
							p
								.getRecentDynamicConfigurations()
								.forEach(({ name: s, type: l }) => {
									const y = (0, m.$Zk)(n, s, !0);
									y &&
										g.push({
											label: s,
											highlights: { label: y },
											buttons: [
												{
													iconClass: a.ThemeIcon.asClassName(u.$xKb),
													tooltip: (0, i.localize)(5562, null),
												},
											],
											trigger: () => (
												p.removeRecentDynamicConfigurations(s, l),
												t.TriggerAction.CLOSE_PICKER
											),
											accept: async () => {
												await p.selectConfiguration(void 0, s, void 0, {
													type: l,
												});
												try {
													const { launch: $, getConfig: v } =
															p.selectedConfiguration,
														S = await v();
													await this.a.startDebugging($, S, {
														startedByUser: !0,
													});
												} catch ($) {
													this.j.error($);
												}
											},
										});
								}),
							f.forEach((s) => {
								g.push({
									label: `$(folder) ${s.label}...`,
									ariaLabel: (0, i.localize)(5563, null, s.label),
									accept: async () => {
										const l = await s.pick();
										l &&
											(await p.selectConfiguration(
												l.launch,
												l.config.name,
												l.config,
												{ type: s.type },
											),
											this.a.startDebugging(l.launch, l.config, {
												startedByUser: !0,
											}));
									},
								});
							});
						const b = p.getLaunches().filter((s) => !s.hidden);
						b.length > 0 &&
							g.push({ type: "separator", label: (0, i.localize)(5564, null) });
						for (const s of b) {
							const l =
								this.b.getWorkbenchState() === C.WorkbenchState.WORKSPACE
									? (0, i.localize)(5565, null, s.name)
									: (0, i.localize)(5566, null);
							g.push({
								label: l,
								description:
									this.b.getWorkbenchState() === C.WorkbenchState.WORKSPACE
										? s.name
										: "",
								highlights: { label: (0, m.$Zk)(n, l, !0) ?? void 0 },
								accept: () => this.h.executeCommand(r.$XGc, s.uri.toString()),
							});
						}
						return g;
					}
				};
				(e.$KQc = h),
					(e.$KQc = h =
						Ne([j(0, E.$75), j(1, C.$Vi), j(2, d.$ek), j(3, w.$4N)], h));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	