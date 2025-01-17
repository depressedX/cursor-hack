import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../platform/markers/common/markers.js';
import '../../../common/notebookExecutionStateService.js';
import '../../../../../../platform/configuration/common/configuration.js';
import '../../../common/notebookCommon.js';
import '../../notebookEditorExtensions.js';
import '../../../../../../base/common/iterator.js';
import '../../viewModel/codeCellViewModel.js';
import '../../../../../../base/common/event.js';
import '../../../../chat/common/chatAgents.js';
define(
			de[4092],
			he([1, 0, 3, 90, 190, 10, 70, 330, 103, 482, 6, 153]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				var h;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wGc = void 0);
				let c = class extends t.$1c {
					static {
						h = this;
					}
					static {
						this.ID = "workbench.notebook.cellDiagnostics";
					}
					constructor(g, p, o, f, b) {
						super(),
							(this.f = g),
							(this.g = p),
							(this.h = o),
							(this.j = f),
							(this.m = b),
							(this.a = !1),
							(this.b = !1),
							(this.c = new Map()),
							this.n(),
							this.D(f.onDidChangeAgents(() => this.n())),
							this.D(
								b.onDidChangeConfiguration((s) => {
									s.affectsConfiguration(C.$56.cellFailureDiagnostics) &&
										this.n();
								}),
							);
					}
					n() {
						const g = this.m.getValue(C.$56.cellFailureDiagnostics);
						this.a && (!g || m.Iterable.isEmpty(this.j.getAgents()))
							? ((this.a = !1), this.r())
							: !this.a &&
								g &&
								!m.Iterable.isEmpty(this.j.getAgents()) &&
								((this.a = !0),
								this.b ||
									((this.b = !0),
									this.D(
										u.Event.accumulate(
											this.g.onDidChangeExecution,
											200,
										)((p) => this.q(p)),
									)));
					}
					q(g) {
						if (!this.a) return;
						const p = new Set();
						for (const o of g.reverse()) {
							const f = this.f.textModel?.uri;
							o.type === w.NotebookExecutionType.cell &&
								f &&
								o.affectsNotebook(f) &&
								!p.has(o.cellHandle) &&
								(p.add(o.cellHandle),
								o.changed ? this.clear(o.cellHandle) : this.s(o.cellHandle));
						}
					}
					r() {
						for (const g of this.c.keys()) this.clear(g);
					}
					clear(g) {
						const p = this.c.get(g);
						if (p) {
							for (const o of p.disposables) o.dispose();
							this.c.delete(g);
						}
					}
					s(g) {
						if (this.c.has(g)) return;
						const p = this.f.getCellByHandle(g);
						if (!p || p.cellKind !== C.CellKind.Code) return;
						const o = p.model.internalMetadata;
						if (
							p instanceof r.$31b &&
							!o.lastRunSuccess &&
							o?.error?.location
						) {
							const f = [],
								b = this.t(o.error.message, o.error.location);
							this.h.changeOne(h.ID, p.uri, [b]),
								f.push((0, t.$Yc)(() => this.h.changeOne(h.ID, p.uri, []))),
								p.excecutionError.set(o.error, void 0),
								f.push((0, t.$Yc)(() => p.excecutionError.set(void 0, void 0))),
								f.push(
									p.model.onDidChangeOutputs(() => {
										p.model.outputs.length === 0 && this.clear(g);
									}),
								),
								f.push(
									p.model.onDidChangeContent(() => {
										this.clear(g);
									}),
								),
								this.c.set(g, {
									cellUri: p.uri,
									error: o.error,
									disposables: f,
								});
						}
					}
					t(g, p) {
						return {
							severity: 8,
							message: g,
							startLineNumber: p.startLineNumber + 1,
							startColumn: p.startColumn + 1,
							endLineNumber: p.endLineNumber + 1,
							endColumn: p.endColumn + 1,
							source: "Cell Execution Error",
						};
					}
					dispose() {
						super.dispose(), this.r();
					}
				};
				(e.$wGc = c),
					(e.$wGc =
						c =
						h =
							Ne([j(1, w.$d6), j(2, i.$aM), j(3, a.$c3), j(4, E.$gj)], c)),
					(0, d.$PKb)(c.ID, c);
			},
		),
		