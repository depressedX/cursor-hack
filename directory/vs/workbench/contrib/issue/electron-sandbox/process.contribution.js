import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../common/issue.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../../platform/environment/common/environment.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/native/common/native.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../platform/issue/common/issue.js';
import '../../../../platform/notification/common/notification.js';
import './processService.js';
import './issueMainService.js';
define(
			de[3287],
			he([1, 0, 4, 11, 376, 31, 99, 113, 57, 110, 84, 769, 40, 3286, 1736]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				class c extends i.$3X {
					static {
						this.ID = "workbench.action.openProcessExplorer";
					}
					constructor() {
						super({
							id: c.ID,
							title: (0, t.localize2)(7324, "Open Process Explorer"),
							category: C.$ck.Developer,
							f1: !0,
						});
					}
					async run(o) {
						return o.get(w.$8Xb).openProcessExplorer();
					}
				}
				(0, i.$4X)(c),
					i.$ZX.appendMenuItem(i.$XX.MenubarHelpMenu, {
						group: "5_tools",
						command: { id: c.ID, title: (0, t.localize)(7317, null) },
						order: 2,
					});
				class n extends i.$3X {
					static {
						this.ID = "workbench.action.toggleCPUProfiler";
					}
					constructor() {
						super({
							id: n.ID,
							title: (0, t.localize2)(7325, "Start CPU Profiler"),
							category: C.$ck.Developer,
							f1: !0,
						});
					}
					async run(o) {
						const f = o.get(h.$4N),
							b = o.get(a.$5Xb),
							s = o.get(u.$8N),
							l = async () => {
								await s.withProgress(
									{
										location: u.ProgressLocation.Dialog,
										title: (0, t.localize)(7318, null),
										cancellable: !1,
										detail: (0, t.localize)(7319, null),
									},
									() => b.stopProfiler(),
								);
							};
						if (await b.isProfilerRunning()) {
							await l();
							return;
						}
						await b.startProfiler();
						const y = {
								id: "stopCPUProfiler",
								label: "Stop",
								tooltip: "Stop",
								enabled: !0,
								class: "codicon codicon-stop",
								run: async () => {
									(y.enabled = !1), await l(), $.close();
								},
							},
							$ = await f.notify({
								severity: h.Severity.Info,
								message: "CPU Profiler is running",
								progress: { infinite: !0 },
								actions: { primary: [y] },
							});
					}
				}
				(0, i.$4X)(n);
				class g extends i.$3X {
					static {
						this.ID = "workbench.action.stopTracing";
					}
					constructor() {
						super({
							id: g.ID,
							title: (0, t.localize2)(7326, "Stop Tracing"),
							category: C.$ck.Developer,
							f1: !0,
						});
					}
					async run(o) {
						const f = o.get(a.$5Xb),
							b = o.get(d.$Ui),
							s = o.get(m.$GO),
							l = o.get(r.$y7c),
							y = o.get(u.$8N);
						if (!b.args.trace) {
							const { confirmed: $ } = await s.confirm({
								message: (0, t.localize)(7320, null),
								primaryButton: (0, t.localize)(7321, null),
							});
							if ($) return l.relaunch({ addArgs: ["--trace"] });
						}
						await y.withProgress(
							{
								location: u.ProgressLocation.Dialog,
								title: (0, t.localize)(7322, null),
								cancellable: !1,
								detail: (0, t.localize)(7323, null),
							},
							() => f.stopTracing(),
						);
					}
				}
				(0, i.$4X)(g),
					E.$fk.registerCommand("_issues.getSystemStatus", (p) =>
						p.get(a.$5Xb).getSystemStatus(),
					);
			},
		),
		