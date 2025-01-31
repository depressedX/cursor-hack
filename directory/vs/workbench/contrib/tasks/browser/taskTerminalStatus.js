import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/severity.js';
import '../common/problemCollectors.js';
import '../common/tasks.js';
import '../common/taskService.js';
import '../../../../platform/markers/common/markers.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../platform/accessibilitySignal/browser/accessibilitySignalService.js';
define(
		de[3329],
		he([1, 0, 4, 14, 3, 111, 1814, 424, 419, 90, 79, 184]),
		function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*codicons*/,
 w /*lifecycle*/,
 E /*severity*/,
 C /*problemCollectors*/,
 d /*tasks*/,
 m /*taskService*/,
 r /*markers*/,
 u /*iconRegistry*/,
 a /*accessibilitySignalService*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$aXc = e.$_Wc = e.$$Wc = e.$0Wc = void 0),
				(t = mt(t)),
				(E = xi(E));
			const h = "task_terminal_status";
			(e.$0Wc = {
				id: h,
				icon: u.$fP,
				severity: E.default.Info,
				tooltip: t.localize(9701, null),
			}),
				(e.$$Wc = {
					id: h,
					icon: i.$ak.check,
					severity: E.default.Info,
					tooltip: t.localize(9702, null),
				});
			const c = {
				id: h,
				icon: i.$ak.check,
				severity: E.default.Info,
				tooltip: t.localize(9703, null),
			};
			e.$_Wc = {
				id: h,
				icon: i.$ak.error,
				severity: E.default.Error,
				tooltip: t.localize(9704, null),
			};
			const n = {
					id: h,
					icon: i.$ak.error,
					severity: E.default.Error,
					tooltip: t.localize(9705, null),
				},
				g = {
					id: h,
					icon: i.$ak.warning,
					severity: E.default.Warning,
					tooltip: t.localize(9706, null),
				},
				p = {
					id: h,
					icon: i.$ak.warning,
					severity: E.default.Warning,
					tooltip: t.localize(9707, null),
				},
				o = {
					id: h,
					icon: i.$ak.info,
					severity: E.default.Info,
					tooltip: t.localize(9708, null),
				},
				f = {
					id: h,
					icon: i.$ak.info,
					severity: E.default.Info,
					tooltip: t.localize(9709, null),
				};
			let b = class extends w.$1c {
				constructor(l, y) {
					super(),
						(this.c = y),
						(this.a = new Map()),
						this.D(
							l.onDidStateChange(($) => {
								switch ($.kind) {
									case d.TaskEventKind.ProcessStarted:
									case d.TaskEventKind.Active:
										this.j($);
										break;
									case d.TaskEventKind.Inactive:
										this.h($);
										break;
									case d.TaskEventKind.ProcessEnded:
										this.g($);
										break;
								}
							}),
						),
						this.D(
							(0, w.$Yc)(() => {
								for (const $ of this.a.values()) $.disposeListener?.dispose();
								this.a.clear();
							}),
						);
				}
				addTerminal(l, y, $) {
					const v = { id: h, severity: E.default.Info };
					y.statusList.add(v),
						this.D(
							$.onDidFindFirstMatch(() => {
								(this.b = y.registerMarker()), this.b && this.D(this.b);
							}),
						),
						this.D(
							$.onDidFindErrors(() => {
								this.b &&
									y.addBufferMarker({
										marker: this.b,
										hoverMessage: t.localize(9710, null),
										disableCommandStorage: !0,
									});
							}),
						),
						this.D(
							$.onDidRequestInvalidateLastMarker(() => {
								this.b?.dispose(), (this.b = void 0);
							}),
						),
						this.a.set(y.instanceId, {
							terminal: y,
							task: l,
							status: v,
							problemMatcher: $,
							taskRunEnded: !1,
						});
				}
				f(l) {
					if (!(!("terminalId" in l) || !l.terminalId))
						return this.a.get(l.terminalId);
				}
				g(l) {
					const y = this.f(l);
					if (y)
						if (
							((y.taskRunEnded = !0),
							y.terminal.statusList.remove(y.status),
							l.exitCode === 0 && y.problemMatcher.numberOfMatches === 0)
						)
							if (
								(this.c.playSignal(a.$Twb.taskCompleted),
								y.task.configurationProperties.isBackground)
							)
								for (const $ of y.terminal.statusList.statuses)
									y.terminal.statusList.remove($);
							else y.terminal.statusList.add(e.$$Wc);
						else
							l.exitCode ||
							y.problemMatcher.maxMarkerSeverity === r.MarkerSeverity.Error
								? (this.c.playSignal(a.$Twb.taskFailed),
									y.terminal.statusList.add(e.$_Wc))
								: y.problemMatcher.maxMarkerSeverity ===
										r.MarkerSeverity.Warning
									? y.terminal.statusList.add(g)
									: y.problemMatcher.maxMarkerSeverity ===
											r.MarkerSeverity.Info && y.terminal.statusList.add(o);
				}
				h(l) {
					const y = this.f(l);
					!y ||
						!y.problemMatcher ||
						y.taskRunEnded ||
						(y.terminal.statusList.remove(y.status),
						y.problemMatcher.numberOfMatches === 0
							? (this.c.playSignal(a.$Twb.taskCompleted),
								y.terminal.statusList.add(c))
							: y.problemMatcher.maxMarkerSeverity === r.MarkerSeverity.Error
								? (this.c.playSignal(a.$Twb.taskFailed),
									y.terminal.statusList.add(n))
								: y.problemMatcher.maxMarkerSeverity ===
										r.MarkerSeverity.Warning
									? y.terminal.statusList.add(p)
									: y.problemMatcher.maxMarkerSeverity ===
											r.MarkerSeverity.Info && y.terminal.statusList.add(f));
				}
				j(l) {
					const y = this.f(l);
					y &&
						(y.disposeListener ||
							((y.disposeListener = this.D(new w.$2c())),
							(y.disposeListener.value = y.terminal.onDisposed(() => {
								l.terminalId &&
									(this.a.delete(l.terminalId), y.disposeListener?.dispose());
							}))),
						(y.taskRunEnded = !1),
						y.terminal.statusList.remove(y.status),
						(y.problemMatcher instanceof C.$8Wc ||
							y.problemMatcher?.problemMatchers.length > 0 ||
							l.runType === d.TaskRunType.SingleRun) &&
							y.terminal.statusList.add(e.$0Wc));
				}
			};
			(e.$aXc = b), (e.$aXc = b = Ne([j(0, m.$Zpc), j(1, a.$Owb)], b));
		},
	)
