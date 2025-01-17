import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/errorMessage.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/severity.js';
import '../../../../nls.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/markers/common/markers.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../platform/storage/common/storage.js';
import './debugCommands.js';
import '../../markers/common/markers.js';
import '../../tasks/common/tasks.js';
import '../../tasks/common/taskService.js';
import '../../../services/views/common/viewsService.js';
define(
		de[3820],
		he([
			1, 0, 50, 15, 33, 163, 6, 3, 111, 4, 31, 10, 57, 90, 84, 21, 425, 555,
			424, 419, 89,
		]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b, s) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$ZQc = e.TaskRunResult = void 0),
				(m = xi(m)),
				(r = mt(r));
			const l = (P, k) => C.Event.once(C.Event.filter(P, k));
			var y;
			(function (P) {
				(P[(P.Failure = 0)] = "Failure"), (P[(P.Success = 1)] = "Success");
			})(y || (e.TaskRunResult = y = {}));
			const $ = "debug.taskerrorchoice",
				v = r.localize(5638, null),
				S = r.localize(5639, null),
				I = r.localize(5640, null);
			let T = class {
				constructor(k, L, D, M, N, A, R, O) {
					(this.b = k),
						(this.c = L),
						(this.d = D),
						(this.f = M),
						(this.g = N),
						(this.h = A),
						(this.i = R),
						(this.j = O),
						(this.a = new w.$Ce());
				}
				cancel() {
					this.a.dispose(!0), (this.a = new w.$Ce());
				}
				dispose() {
					this.a.dispose(!0);
				}
				async runTaskAndCheckErrors(k, L) {
					try {
						const D = await this.runTask(k, L, this.a.token);
						if (D && (D.exitCode === void 0 || D.cancelled)) return y.Failure;
						const M = L
								? this.c.read({ severities: c.MarkerSeverity.Error, take: 2 })
										.length
								: 0,
							N = D && D.exitCode === 0,
							A = D && D.exitCode !== 0,
							R = this.d.getValue("debug").onTaskErrors;
						if (N || R === "debugAnyway" || (M === 0 && !A)) return y.Success;
						if (R === "showErrors")
							return (
								await this.f.openView(o.Markers.MARKERS_VIEW_ID, !0),
								Promise.resolve(y.Failure)
							);
						if (R === "abort") return Promise.resolve(y.Failure);
						const O = typeof L == "string" ? L : L ? L.name : "",
							B =
								M > 1
									? r.localize(5641, null, O)
									: M === 1
										? r.localize(5642, null, O)
										: D && typeof D.exitCode == "number"
											? r.localize(5643, null, O, D.exitCode)
											: r.localize(5644, null, O);
						let U;
						(function (q) {
							(q[(q.DebugAnyway = 1)] = "DebugAnyway"),
								(q[(q.ShowErrors = 2)] = "ShowErrors"),
								(q[(q.Cancel = 0)] = "Cancel");
						})(U || (U = {}));
						const { result: z, checkboxChecked: F } = await this.g.prompt({
								type: m.default.Warning,
								message: B,
								buttons: [
									{ label: S, run: () => U.DebugAnyway },
									{ label: r.localize(5645, null), run: () => U.ShowErrors },
								],
								cancelButton: { label: v, run: () => U.Cancel },
								checkbox: { label: r.localize(5646, null) },
							}),
							x = z === U.DebugAnyway,
							H = z === U.Cancel;
						return (
							F &&
								this.d.updateValue(
									"debug.onTaskErrors",
									z === U.DebugAnyway
										? "debugAnyway"
										: H
											? "abort"
											: "showErrors",
								),
							H
								? Promise.resolve(y.Failure)
								: x
									? y.Success
									: (await this.f.openView(o.Markers.MARKERS_VIEW_ID, !0),
										Promise.resolve(y.Failure))
						);
					} catch (D) {
						const M = this.b.configureAction(),
							N = JSON.parse(this.h.get($, g.StorageScope.WORKSPACE, "{}"));
						let A = -1,
							R;
						if (
							((function (O) {
								(O[(O.DebugAnyway = 0)] = "DebugAnyway"),
									(O[(O.ConfigureTask = 1)] = "ConfigureTask"),
									(O[(O.Cancel = 2)] = "Cancel");
							})(R || (R = {})),
							N[D.message] !== void 0)
						)
							A = N[D.message];
						else {
							const { result: O, checkboxChecked: B } = await this.g.prompt({
								type: m.default.Error,
								message: D.message,
								buttons: [
									{ label: r.localize(5647, null), run: () => R.DebugAnyway },
									{ label: M.label, run: () => R.ConfigureTask },
								],
								cancelButton: { run: () => R.Cancel },
								checkbox: { label: r.localize(5648, null) },
							});
							(A = O),
								B &&
									((N[D.message] = A),
									this.h.store(
										$,
										JSON.stringify(N),
										g.StorageScope.WORKSPACE,
										g.StorageTarget.MACHINE,
									));
						}
						return (
							A === R.ConfigureTask && (await M.run()),
							A === R.DebugAnyway ? y.Success : y.Failure
						);
					}
				}
				async runTask(k, L, D = this.a.token) {
					if (!L) return Promise.resolve(null);
					if (!k)
						return Promise.reject(
							new Error(
								r.localize(5649, null, typeof L == "string" ? L : L.type),
							),
						);
					const M = await this.b.getTask(k, L);
					if (!M) {
						const x =
							typeof L == "string"
								? r.localize(5650, null, L)
								: r.localize(5651, null);
						return Promise.reject(
							(0, E.$zj)(x, [
								new t.$rj(p.$kHc, p.$PHc, void 0, !0, () =>
									this.i.executeCommand(p.$kHc),
								),
							]),
						);
					}
					let N = !1;
					const A = new d.$Zc(),
						R = (x) => x.getKey() ?? x.getMapKey(),
						O = R(M),
						B = new Promise((x) =>
							A.add(
								l(
									this.b.onDidStateChange,
									(H) =>
										(H.kind === f.TaskEventKind.Inactive ||
											(H.kind === f.TaskEventKind.ProcessEnded &&
												H.exitCode === void 0)) &&
										R(H.__task) === O,
								)((H) => {
									(N = !0),
										x(
											H.kind === f.TaskEventKind.ProcessEnded
												? { exitCode: H.exitCode }
												: null,
										);
								}),
							),
						);
					A.add(
						l(
							this.b.onDidStateChange,
							(x) =>
								(x.kind === f.TaskEventKind.Active ||
									x.kind === f.TaskEventKind.DependsOnStarted) &&
								R(x.__task) === O,
						)(() => {
							N = !0;
						}),
					);
					const U = A.add(new C.$re());
					A.add(
						l(
							this.b.onDidStateChange,
							(x) =>
								x.kind === f.TaskEventKind.AcquiredInput && R(x.__task) === O,
						)(() => U.fire()),
					);
					const z = this.b.getActiveTasks().then(async (x) => {
							if (x.find((q) => R(q) === O))
								return (
									U.fire(),
									(await this.b.getBusyTasks()).find((V) => R(V) === O)
										? ((N = !0), B)
										: Promise.resolve(null)
								);
							const H = this.b.run(M);
							return M.configurationProperties.isBackground
								? B
								: H.then((q) => q ?? null);
						}),
						F = new Promise((x, H) => {
							z.then(
								(q) => {
									(N = !0), x(q);
								},
								(q) => H(q),
							),
								A.add(
									D.onCancellationRequested(() => {
										x({ exitCode: void 0, cancelled: !0 }),
											this.b.terminate(M).catch(() => {});
									}),
								),
								A.add(
									U.event(() => {
										const q = M.configurationProperties.isBackground
											? 5e3
											: 1e4;
										A.add(
											(0, i.$Oh)(() => {
												if (!N) {
													const V = r.localize(
														5652,
														null,
														typeof L == "string" ? L : JSON.stringify(L),
													);
													H({ severity: m.default.Error, message: V });
												}
											}, q),
										),
											A.add(
												(0, i.$Oh)(() => {
													const V = r.localize(
															5653,
															null,
															M.configurationProperties.name,
														),
														G = [I, v],
														K = M instanceof f.$e4 || M instanceof f.$f4;
													K && G.splice(1, 0, r.localize(5654, null)),
														this.j.withProgress(
															{
																location: n.ProgressLocation.Notification,
																title: V,
																buttons: G,
															},
															() => F.catch(() => {}),
															(J) => {
																J === void 0 ||
																	(J === 0
																		? x({ exitCode: 0 })
																		: (x({ exitCode: void 0, cancelled: !0 }),
																			this.b.terminate(M).catch(() => {}),
																			K && J === 1 && this.b.openConfig(M)));
															},
														);
												}, 1e4),
											);
									}),
								);
						});
					return F.finally(() => A.dispose());
				}
			};
			(e.$ZQc = T),
				(e.$ZQc = T =
					Ne(
						[
							j(0, b.$Zpc),
							j(1, c.$aM),
							j(2, a.$gj),
							j(3, s.$HMb),
							j(4, h.$GO),
							j(5, g.$lq),
							j(6, u.$ek),
							j(7, n.$8N),
						],
						T,
					));
		},
	);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	