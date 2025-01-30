import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/lifecycle.js';
import '../common/taskService.js';
import '../common/tasks.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/workspace/common/workspaceTrust.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../base/common/event.js';
import '../../../../platform/log/common/log.js';
define(
			de[3328],
			he([1, 0, 4, 19, 3, 419, 424, 63, 11, 174, 10, 6, 34]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*resources*/,
 w /*lifecycle*/,
 E /*taskService*/,
 C /*tasks*/,
 d /*quickInput*/,
 m /*actions*/,
 r /*workspaceTrust*/,
 u /*configuration*/,
 a /*event*/,
 h /*log*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ZWc = e.$YWc = void 0),
					(t = mt(t)),
					(i = mt(i));
				const c = "task.allowAutomaticTasks";
				let n = class extends w.$1c {
					constructor(o, f, b, s) {
						super(),
							(this.b = o),
							(this.c = f),
							(this.f = b),
							(this.g = s),
							(this.a = !1),
							this.b.isReconnected
								? this.h()
								: this.D(
										a.Event.once(this.b.onDidReconnectToTasks)(
											async () => await this.h(),
										),
									),
							this.D(this.f.onDidChangeTrust(async () => await this.h()));
					}
					async h() {
						if (
							!this.f.isWorkspaceTrusted() ||
							this.a ||
							this.c.getValue(c) === "off"
						)
							return;
						(this.a = !0),
							this.g.trace("RunAutomaticTasks: Trying to run tasks."),
							this.b.hasTaskSystemInfo ||
								(this.g.trace("RunAutomaticTasks: Awaiting task system info."),
								await a.Event.toPromise(
									a.Event.once(this.b.onDidChangeTaskSystemInfo),
								));
						let o = await this.b.getWorkspaceTasks(C.TaskRunSource.FolderOpen);
						this.g.trace(`RunAutomaticTasks: Found ${o.size} automatic tasks`);
						let f = this.n(this.b, o);
						if (
							(this.g.trace(
								`RunAutomaticTasks: taskNames=${JSON.stringify(f.taskNames)}`,
							),
							f.taskNames.length === 0)
						) {
							if (
								!(await Promise.race([
									new Promise((s) => {
										a.Event.toPromise(
											a.Event.once(this.b.onDidChangeTaskConfig),
										).then(() => s(!0));
									}),
									new Promise((s) => {
										const l = setTimeout(() => {
											clearTimeout(l), s(!1);
										}, 1e4);
									}),
								]))
							) {
								this.g.trace(
									"RunAutomaticTasks: waited some extra time, but no update of tasks configuration",
								);
								return;
							}
							(o = await this.b.getWorkspaceTasks(C.TaskRunSource.FolderOpen)),
								(f = this.n(this.b, o)),
								this.g.trace(
									`RunAutomaticTasks: updated taskNames=${JSON.stringify(f.taskNames)}`,
								);
						}
						this.q(this.b, this.c, f.tasks, f.taskNames);
					}
					j(o, f) {
						f.forEach((b) => {
							b instanceof Promise
								? b.then((s) => {
										s && o.run(s);
									})
								: o.run(b);
						});
					}
					m(o) {
						switch (C.TaskSourceKind.toConfigurationTarget(o.kind)) {
							case u.ConfigurationTarget.WORKSPACE_FOLDER:
								return i.$nh(o.config.workspaceFolder.uri, o.config.file);
							case u.ConfigurationTarget.WORKSPACE:
								return o.config.workspace?.configuration ?? void 0;
						}
					}
					n(o, f) {
						const b = new Array(),
							s = new Array(),
							l = new Map();
						return (
							f &&
								f.forEach((y) => {
									if (
										(y.set &&
											y.set.tasks.forEach(($) => {
												if ($.runOptions.runOn === C.RunOnOptions.folderOpen) {
													b.push($), s.push($._label);
													const v = this.m($._source);
													v && l.set(v.fsPath, v);
												}
											}),
										y.configurations)
									) {
										for (const $ of Object.values(
											y.configurations.byIdentifier,
										))
											if ($.runOptions.runOn === C.RunOnOptions.folderOpen) {
												b.push(
													new Promise((S) => {
														o.getTask(y.workspaceFolder, $._id, !0).then((I) =>
															S(I),
														);
													}),
												),
													$._label
														? s.push($._label)
														: s.push($.configures.task);
												const v = this.m($._source);
												v && l.set(v.fsPath, v);
											}
									}
								}),
							{ tasks: b, taskNames: s, locations: l }
						);
					}
					async q(o, f, b, s) {
						s.length !== 0 && f.getValue(c) !== "off" && this.j(o, b);
					}
				};
				(e.$YWc = n),
					(e.$YWc = n =
						Ne([j(0, E.$Zpc), j(1, u.$gj), j(2, r.$pO), j(3, h.$ik)], n));
				class g extends m.$3X {
					static {
						this.ID = "workbench.action.tasks.manageAutomaticRunning";
					}
					static {
						this.LABEL = t.localize(9631, null);
					}
					constructor() {
						super({ id: g.ID, title: g.LABEL, category: C.$b4 });
					}
					async run(o) {
						const f = o.get(d.$DJ),
							b = o.get(u.$gj),
							s = { label: t.localize(9632, null) },
							l = { label: t.localize(9633, null) },
							y = await f.pick([s, l], { canPickMany: !1 });
						y &&
							b.updateValue(
								c,
								y === s ? "on" : "off",
								u.ConfigurationTarget.USER,
							);
					}
				}
				e.$ZWc = g;
			},
		),
		