import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/map.js';
import '../../../../../base/common/resources.js';
import '../../../../../base/common/uuid.js';
import '../../../../../platform/accessibilitySignal/browser/accessibilitySignalService.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/log/common/log.js';
import '../../common/notebookCommon.js';
import '../../common/notebookExecutionService.js';
import '../../common/notebookExecutionStateService.js';
import '../../common/notebookKernelService.js';
import '../../common/notebookService.js';
define(
			de[3472],
			he([1, 0, 6, 3, 59, 19, 47, 184, 5, 34, 70, 611, 190, 243, 161]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$KGc = void 0);
				let g = class extends i.$1c {
					constructor($, v, S, I) {
						super(),
							(this.q = $),
							(this.r = v),
							(this.s = S),
							(this.t = I),
							(this.a = new w.$Gc()),
							(this.b = new w.$Gc()),
							(this.f = new w.$Gc()),
							(this.g = new w.$Gc()),
							(this.j = new w.$Gc()),
							(this.m = this.D(new t.$re())),
							(this.onDidChangeExecution = this.m.event),
							(this.n = this.D(new t.$re())),
							(this.onDidChangeLastRunFailState = this.n.event);
					}
					getLastFailedCellForNotebook($) {
						const v = this.j.get($);
						return v?.visible ? v.cellHandle : void 0;
					}
					forceCancelNotebookExecutions($) {
						const v = this.a.get($);
						if (v) for (const S of v.values()) this.y($, S.cellHandle, S);
						this.b.has($) && this.C($);
					}
					getCellExecution($) {
						const v = u.CellUri.parse($);
						if (!v) throw new Error(`Not a cell URI: ${$}`);
						const S = this.a.get(v.notebook);
						if (S) return S.get(v.handle);
					}
					getExecution($) {
						return this.b.get($)?.[0];
					}
					getCellExecutionsForNotebook($) {
						const v = this.a.get($);
						return v ? Array.from(v.values()) : [];
					}
					getCellExecutionsByHandleForNotebook($) {
						const v = this.a.get($);
						return v ? new Map(v.entries()) : void 0;
					}
					w($, v, S) {
						this.m.fire(new p($, v, S));
					}
					y($, v, S, I) {
						const T = this.a.get($);
						if (!T) {
							this.r.debug(
								`NotebookExecutionStateService#_onCellExecutionDidComplete - unknown notebook ${$.toString()}`,
							);
							return;
						}
						S.dispose();
						const P = u.CellUri.generate($, v);
						this.g.get(P)?.dispose(),
							this.g.delete(P),
							T.delete(v),
							T.size === 0 &&
								(this.a.delete($), this.f.get($)?.dispose(), this.f.delete($)),
							I !== void 0 &&
								(I
									? (this.a.size === 0 &&
											this.t.playSignal(d.$Twb.notebookCellCompleted),
										this.J($))
									: (this.t.playSignal(d.$Twb.notebookCellFailed),
										this.H($, v))),
							this.m.fire(new p($, v));
					}
					z($, v) {
						this.m.fire(new o($, v));
					}
					C($) {
						const v = this.b.get($);
						if (!Array.isArray(v)) {
							this.r.debug(
								`NotebookExecutionStateService#_onCellExecutionDidComplete - unknown notebook ${$.toString()}`,
							);
							return;
						}
						this.b.delete($),
							this.m.fire(new o($)),
							v.forEach((S) => S.dispose());
					}
					createCellExecution($, v) {
						const S = this.s.getNotebookTextModel($);
						if (!S) throw new Error(`Notebook not found: ${$.toString()}`);
						let I = this.a.get($);
						if (!I) {
							const P = this.q.createInstance(f, $);
							this.f.set($, P), (I = new Map()), this.a.set($, I);
						}
						let T = I.get(v);
						return (
							T ||
								((T = this.F(S, v)),
								I.set(v, T),
								T.initialize(),
								this.m.fire(new p($, v, T))),
							T
						);
					}
					createExecution($) {
						const v = this.s.getNotebookTextModel($);
						if (!v) throw new Error(`Notebook not found: ${$.toString()}`);
						if (!this.f.has($)) {
							const I = this.q.createInstance(f, $);
							this.f.set($, I);
						}
						let S = this.b.get($);
						return (
							S ||
								((S = this.G(v)),
								this.b.set($, S),
								this.m.fire(new o($, S[0]))),
							S[0]
						);
					}
					F($, v) {
						const S = $.uri,
							I = this.q.createInstance(s, v, $),
							T = (0, i.$Xc)(
								I.onDidUpdate(() => this.w(S, v, I)),
								I.onDidComplete((P) => this.y(S, v, I, P)),
							);
						return this.g.set(u.CellUri.generate(S, v), T), I;
					}
					G($) {
						const v = $.uri,
							S = this.q.createInstance(l, $),
							I = (0, i.$Xc)(
								S.onDidUpdate(() => this.z(v, S)),
								S.onDidComplete(() => this.C(v)),
							);
						return [S, I];
					}
					H($, v) {
						const S = this.j.get($),
							I = this.s.getNotebookTextModel($);
						if (!I) return;
						const T = {
							cellHandle: v,
							disposable: S ? S.disposable : this.L(I),
							visible: !0,
						};
						this.j.set($, T), this.n.fire({ visible: !0, notebook: $ });
					}
					I($, v) {
						const S = this.j.get($);
						S &&
							this.j.set($, {
								cellHandle: S.cellHandle,
								disposable: S.disposable,
								visible: v,
							}),
							this.n.fire({ visible: v, notebook: $ });
					}
					J($) {
						const v = this.j.get($);
						v && (v.disposable?.dispose(), this.j.delete($)),
							this.n.fire({ visible: !1, notebook: $ });
					}
					L($) {
						return $.onWillAddRemoveCells((v) => {
							const S = this.j.get($.uri)?.cellHandle;
							if (S !== void 0) {
								const I = $.cells.findIndex((T) => T.handle === S);
								v.rawEvent.changes.forEach(([T, P, k]) => {
									P && I >= T && I < T + P && this.I($.uri, !1),
										k.some((L) => L.handle === S) && this.I($.uri, !0);
								});
							}
						});
					}
					dispose() {
						super.dispose(),
							this.a.forEach(($) => {
								$.forEach((v) => v.dispose()), $.clear();
							}),
							this.a.clear(),
							this.b.forEach(($) => {
								$.forEach((v) => v.dispose());
							}),
							this.b.clear(),
							this.g.forEach(($) => $.dispose()),
							this.f.forEach(($) => $.dispose()),
							this.j.forEach(($) => $.disposable.dispose());
					}
				};
				(e.$KGc = g),
					(e.$KGc = g =
						Ne([j(0, m.$Li), j(1, r.$ik), j(2, n.$MIb), j(3, d.$Owb)], g));
				class p {
					constructor($, v, S) {
						(this.notebook = $),
							(this.cellHandle = v),
							(this.changed = S),
							(this.type = h.NotebookExecutionType.cell);
					}
					affectsCell($) {
						const v = u.CellUri.parse($);
						return (
							!!v &&
							(0, E.$gh)(this.notebook, v.notebook) &&
							this.cellHandle === v.handle
						);
					}
					affectsNotebook($) {
						return (0, E.$gh)(this.notebook, $);
					}
				}
				class o {
					constructor($, v) {
						(this.notebook = $),
							(this.changed = v),
							(this.type = h.NotebookExecutionType.notebook);
					}
					affectsNotebook($) {
						return (0, E.$gh)(this.notebook, $);
					}
				}
				let f = class extends i.$1c {
					constructor($, v, S, I, T, P) {
						super(),
							(this.b = v),
							(this.f = S),
							(this.g = I),
							(this.j = T),
							(this.m = P),
							this.m.debug(`NotebookExecution#ctor ${$.toString()}`);
						const k = this.b.getNotebookTextModel($);
						if (!k) throw new Error("Notebook not found: " + $);
						(this.a = k),
							this.D(this.a.onWillAddRemoveCells((L) => this.r(L))),
							this.D(this.a.onWillDispose(() => this.q()));
					}
					n() {
						this.m.debug("NotebookExecutionListeners#cancelAll");
						const $ = this.j.getCellExecutionsForNotebook(this.a.uri);
						this.g.cancelNotebookCellHandles(
							this.a,
							$.map((v) => v.cellHandle),
						);
					}
					q() {
						this.m.debug("NotebookExecution#onWillDisposeDocument"), this.n();
					}
					r($) {
						const v = this.j.getCellExecutionsByHandleForNotebook(this.a.uri),
							S = new Set(),
							I = new Set();
						if (
							(v &&
								$.rawEvent.changes.forEach(([T, P]) => {
									P &&
										this.a.cells
											.slice(T, T + P)
											.map((L) => L.handle)
											.forEach((L) => {
												const D = v.get(L);
												D?.state === u.NotebookCellExecutionState.Executing
													? S.add(L)
													: D && I.add(L);
											});
								}),
							S.size || I.size)
						) {
							const T = this.f.getSelectedOrSuggestedKernel(this.a);
							if (T) {
								const k = T.implementsInterrupt ? [...S] : [...S, ...I];
								this.m.debug(
									`NotebookExecution#onWillAddRemoveCells, ${JSON.stringify([...k])}`,
								),
									k.length && T.cancelNotebookCellExecution(this.a.uri, k);
							}
						}
					}
				};
				f = Ne(
					[j(1, n.$MIb), j(2, c.$f6), j(3, a.$c6), j(4, h.$d6), j(5, r.$ik)],
					f,
				);
				function b(y, $) {
					if (y.editType === a.CellExecutionUpdateType.Output)
						return {
							editType: u.CellEditType.Output,
							handle: y.cellHandle,
							append: y.append,
							outputs: y.outputs,
						};
					if (y.editType === a.CellExecutionUpdateType.OutputItems)
						return {
							editType: u.CellEditType.OutputItems,
							items: y.items,
							append: y.append,
							outputId: y.outputId,
						};
					if (y.editType === a.CellExecutionUpdateType.ExecutionState) {
						const v = {};
						return (
							typeof y.executionOrder < "u" &&
								(v.executionOrder = y.executionOrder),
							typeof y.runStartTime < "u" && (v.runStartTime = y.runStartTime),
							{
								editType: u.CellEditType.PartialInternalMetadata,
								handle: $,
								internalMetadata: v,
							}
						);
					}
					throw new Error("Unknown cell update type");
				}
				let s = class extends i.$1c {
					get state() {
						return this.f;
					}
					get notebook() {
						return this.m.uri;
					}
					get didPause() {
						return this.g;
					}
					get isPaused() {
						return this.j;
					}
					constructor($, v, S) {
						super(),
							(this.cellHandle = $),
							(this.m = v),
							(this.n = S),
							(this.a = this.D(new t.$re())),
							(this.onDidUpdate = this.a.event),
							(this.b = this.D(new t.$re())),
							(this.onDidComplete = this.b.event),
							(this.f = u.NotebookCellExecutionState.Unconfirmed),
							(this.g = !1),
							(this.j = !1),
							this.n.debug(`CellExecution#ctor ${this.q()}`);
					}
					initialize() {
						const $ = {
							editType: u.CellEditType.PartialInternalMetadata,
							handle: this.cellHandle,
							internalMetadata: {
								executionId: (0, C.$9g)(),
								runStartTime: null,
								runEndTime: null,
								lastRunSuccess: null,
								executionOrder: null,
								renderDuration: null,
							},
						};
						this.s([$]);
					}
					q() {
						return `${this.m.uri.toString()}, ${this.cellHandle}`;
					}
					r($) {
						const v = $.map((S) => a.CellExecutionUpdateType[S.editType]).join(
							", ",
						);
						this.n.debug(`CellExecution#updateExecution ${this.q()}, [${v}]`);
					}
					confirm() {
						this.n.debug(`CellExecution#confirm ${this.q()}`),
							(this.f = u.NotebookCellExecutionState.Pending),
							this.a.fire();
					}
					update($) {
						this.r($),
							$.some(
								(I) => I.editType === a.CellExecutionUpdateType.ExecutionState,
							) && (this.f = u.NotebookCellExecutionState.Executing),
							!this.g &&
								$.some(
									(I) =>
										I.editType === a.CellExecutionUpdateType.ExecutionState &&
										I.didPause,
								) &&
								(this.g = !0);
						const v = [...$]
							.reverse()
							.find(
								(I) =>
									I.editType === a.CellExecutionUpdateType.ExecutionState &&
									typeof I.isPaused == "boolean",
							);
						if (
							(v && (this.j = v.isPaused),
							!this.m.cells.find((I) => I.handle === this.cellHandle))
						)
							this.n.debug(
								`CellExecution#update, updating cell not in notebook: ${this.m.uri.toString()}, ${this.cellHandle}`,
							);
						else {
							const I = $.map((T) => b(T, this.cellHandle));
							this.s(I);
						}
						$.some(
							(I) => I.editType === a.CellExecutionUpdateType.ExecutionState,
						) && this.a.fire();
					}
					complete($) {
						const v = this.m.cells.find((S) => S.handle === this.cellHandle);
						if (!v)
							this.n.debug(
								`CellExecution#complete, completing cell not in notebook: ${this.m.uri.toString()}, ${this.cellHandle}`,
							);
						else {
							const S = {
								editType: u.CellEditType.PartialInternalMetadata,
								handle: this.cellHandle,
								internalMetadata: {
									lastRunSuccess: $.lastRunSuccess,
									runStartTime: this.g ? null : v.internalMetadata.runStartTime,
									runEndTime: this.g ? null : $.runEndTime,
									error: $.error,
								},
							};
							this.s([S]);
						}
						this.b.fire($.lastRunSuccess);
					}
					s($) {
						this.m.applyEdits($, !0, void 0, () => {}, void 0, !1);
					}
				};
				s = Ne([j(2, r.$ik)], s);
				let l = class extends i.$1c {
					get state() {
						return this.f;
					}
					get notebook() {
						return this.g.uri;
					}
					constructor($, v) {
						super(),
							(this.g = $),
							(this.j = v),
							(this.a = this.D(new t.$re())),
							(this.onDidUpdate = this.a.event),
							(this.b = this.D(new t.$re())),
							(this.onDidComplete = this.b.event),
							(this.f = u.NotebookExecutionState.Unconfirmed),
							this.j.debug("NotebookExecution#ctor");
					}
					m($) {
						this.j.debug(`${$} ${this.g.uri.toString()}`);
					}
					confirm() {
						this.m("Execution#confirm"),
							(this.f = u.NotebookExecutionState.Pending),
							this.a.fire();
					}
					begin() {
						this.m("Execution#begin"),
							(this.f = u.NotebookExecutionState.Executing),
							this.a.fire();
					}
					complete() {
						this.m("Execution#begin"),
							(this.f = u.NotebookExecutionState.Unconfirmed),
							this.b.fire();
					}
				};
				l = Ne([j(1, r.$ik)], l);
			},
		),
		