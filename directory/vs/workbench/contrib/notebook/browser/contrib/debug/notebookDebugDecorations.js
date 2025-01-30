import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/async.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../editor/common/core/range.js';
import '../../../../../../platform/configuration/common/configuration.js';
import '../../../../debug/browser/breakpointEditorContribution.js';
import '../../../../debug/browser/callStackEditorContribution.js';
import '../../../../debug/common/debug.js';
import '../../notebookBrowser.js';
import '../../notebookEditorExtensions.js';
import '../../notebookEditorWidget.js';
import '../../../common/notebookCommon.js';
import '../../../common/notebookExecutionStateService.js';
define(
			de[4101],
			he([1, 0, 15, 3, 17, 10, 1331, 796, 112, 108, 330, 856, 70, 190]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*lifecycle*/,
 w /*range*/,
 E /*configuration*/,
 C /*breakpointEditorContribution*/,
 d /*callStackEditorContribution*/,
 m /*debug*/,
 r /*notebookBrowser*/,
 u /*notebookEditorExtensions*/,
 a /*notebookEditorWidget*/,
 h /*notebookCommon*/,
 c /*notebookExecutionStateService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$uGc = e.$tGc = void 0);
				let n = class extends i.$1c {
					static {
						this.id = "workbench.notebook.debug.pausedCellDecorations";
					}
					constructor(o, f, b) {
						super(),
							(this.f = o),
							(this.g = f),
							(this.h = b),
							(this.a = []),
							(this.b = []),
							(this.c = []);
						const s = this.D(new t.$Jh(200));
						this.D(f.getModel().onDidChangeCallStack(() => this.j())),
							this.D(f.getViewModel().onDidFocusStackFrame(() => this.j())),
							this.D(
								b.onDidChangeExecution((l) => {
									l.type === c.NotebookExecutionType.cell &&
										this.f.textModel &&
										l.affectsNotebook(this.f.textModel.uri) &&
										s.trigger(() => this.j());
								}),
							);
					}
					j() {
						const o = this.f.textModel
								? this.h.getCellExecutionsByHandleForNotebook(
										this.f.textModel.uri,
									)
								: void 0,
							f = [];
						let b;
						const s = ($) => {
							const v = h.CellUri.parse($.source.uri);
							if (
								v &&
								v.notebook.toString() === this.f.textModel?.uri.toString()
							)
								return { handle: v.handle, range: $.range };
						};
						for (const $ of this.g.getModel().getSessions())
							for (const v of $.getAllThreads()) {
								const S = v.getTopStackFrame();
								if (S) {
									const I = s(S);
									I && (f.push(I), o?.delete(I.handle));
								}
							}
						const l = this.g.getViewModel().focusedStackFrame;
						if (l && l.thread.stopped) {
							const $ = s(l);
							$ &&
								!f.some(
									(v) =>
										v.handle === $?.handle &&
										w.$iL.equalsRange(v.range, $?.range),
								) &&
								((b = $), o?.delete(b.handle));
						}
						this.m(f), this.n(b);
						const y = o
							? Array.from(o.entries())
									.filter(
										([$, v]) =>
											v.state === h.NotebookCellExecutionState.Executing,
									)
									.map(([$]) => $)
							: [];
						this.q(y);
					}
					m(o) {
						const f = o.map(({ handle: b, range: s }) => {
							const l = {
								overviewRuler: {
									color: d.$cGc,
									includeOutput: !1,
									modelRanges: [s],
									position: r.NotebookOverviewRulerLane.Full,
								},
							};
							return { handle: b, options: l };
						});
						this.a = this.f.deltaCellDecorations(this.a, f);
					}
					n(o) {
						let f = [];
						if (o) {
							const b = {
								overviewRuler: {
									color: d.$dGc,
									includeOutput: !1,
									modelRanges: [o.range],
									position: r.NotebookOverviewRulerLane.Full,
								},
							};
							f = [{ handle: o.handle, options: b }];
						}
						this.b = this.f.deltaCellDecorations(this.b, f);
					}
					q(o) {
						const f = o.map((b) => {
							const s = {
								overviewRuler: {
									color: a.$64b,
									includeOutput: !1,
									modelRanges: [new w.$iL(0, 0, 0, 0)],
									position: r.NotebookOverviewRulerLane.Left,
								},
							};
							return { handle: b, options: s };
						});
						this.c = this.f.deltaCellDecorations(this.c, f);
					}
				};
				(e.$tGc = n),
					(e.$tGc = n = Ne([j(1, m.$75), j(2, c.$d6)], n)),
					(0, u.$PKb)(n.id, n);
				let g = class extends i.$1c {
					static {
						this.id = "workbench.notebook.debug.notebookBreakpointDecorations";
					}
					constructor(o, f, b) {
						super(),
							(this.b = o),
							(this.c = f),
							(this.f = b),
							(this.a = []),
							this.D(f.getModel().onDidChangeBreakpoints(() => this.g())),
							this.D(
								b.onDidChangeConfiguration(
									(s) =>
										s.affectsConfiguration(
											"debug.showBreakpointsInOverviewRuler",
										) && this.g(),
								),
							);
					}
					g() {
						const f = this.f.getValue("debug.showBreakpointsInOverviewRuler")
							? this.c
									.getModel()
									.getBreakpoints()
									.map((b) => {
										const s = h.CellUri.parse(b.uri);
										if (
											!s ||
											s.notebook.toString() !== this.b.textModel.uri.toString()
										)
											return null;
										const l = {
											overviewRuler: {
												color: C.$sGc,
												includeOutput: !1,
												modelRanges: [
													new w.$iL(b.lineNumber, 0, b.lineNumber, 0),
												],
												position: r.NotebookOverviewRulerLane.Left,
											},
										};
										return { handle: s.handle, options: l };
									})
									.filter((b) => !!b)
							: [];
						this.a = this.b.deltaCellDecorations(this.a, f);
					}
				};
				(e.$uGc = g),
					(e.$uGc = g = Ne([j(1, m.$75), j(2, E.$gj)], g)),
					(0, u.$PKb)(g.id, g);
			},
		),
		