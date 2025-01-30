import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../base/common/map.js';
import '../../../../../../base/common/network.js';
import '../../../../../../base/common/resources.js';
import '../../../../../../platform/registry/common/platform.js';
import '../../../../../common/contributions.js';
import '../../../../debug/common/debug.js';
import '../../notebookBrowser.js';
import '../../../common/notebookCommon.js';
import '../../../common/notebookService.js';
import '../../../../../services/editor/common/editorService.js';
import '../../../../../services/lifecycle/common/lifecycle.js';
define(
			de[3488],
			he([1, 0, 3, 59, 23, 19, 30, 55, 112, 108, 70, 161, 18, 52]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*map*/,
 w /*network*/,
 E /*resources*/,
 C /*platform*/,
 d /*contributions*/,
 m /*debug*/,
 r /*notebookBrowser*/,
 u /*notebookCommon*/,
 a /*notebookService*/,
 h /*editorService*/,
 c /*lifecycle*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let n = class extends t.$1c {
					constructor(p, o, f) {
						super(), (this.a = p), (this.b = f);
						const b = new i.$Gc();
						this.D(
							o.onWillAddNotebookDocument((s) => {
								b.set(
									s.uri,
									s.onWillAddRemoveCells((l) => {
										const y = this.a.getModel();
										if (
											y.getBreakpoints().length &&
											l.rawEvent.kind === u.NotebookCellsChangeType.ModelChange
										)
											for (const $ of l.rawEvent.changes) {
												const [v, S] = $;
												if (S > 0) {
													const I = s.cells.slice(v, v + S);
													for (const T of I)
														y.getBreakpoints({ uri: T.uri }).forEach((k) =>
															this.a.removeBreakpoints(k.getId()),
														);
												}
											}
									}),
								);
							}),
						),
							this.D(
								o.onWillRemoveNotebookDocument((s) => {
									this.c(s), b.get(s.uri)?.dispose(), b.delete(s.uri);
								}),
							),
							this.D(
								this.a.getModel().onDidChangeBreakpoints((s) => {
									const l = s?.added?.find(
										(y) =>
											"uri" in y &&
											y.uri.scheme === w.Schemas.vscodeNotebookCell,
									);
									if (l) {
										const y = u.CellUri.parse(l.uri);
										if (!y) return;
										const $ = (0, r.$eJb)(this.b.activeEditorPane);
										if (
											!$ ||
											!$.hasModel() ||
											$.textModel.uri.toString() !== y.notebook.toString()
										)
											return;
										const v = $.getCellByHandle(y.handle);
										if (!v) return;
										$.focusElement(v);
									}
								}),
							);
					}
					c(p) {
						const o = this.a.getModel().getBreakpoints();
						if (!o.length || !p.cells.length) return;
						const f = new i.$Gc();
						p.cells.forEach((b, s) => {
							f.set(b.uri, s);
						}),
							o.forEach((b) => {
								const s = f.get(b.uri);
								if (typeof s != "number") return;
								const l = u.CellUri.parse(b.uri)?.notebook;
								if (!l) return;
								const y = u.CellUri.generate(l, s);
								(0, E.$gh)(y, b.uri) ||
									(this.a.removeBreakpoints(b.getId()),
									this.a.addBreakpoints(y, [
										{
											column: b.column,
											condition: b.condition,
											enabled: b.enabled,
											hitCondition: b.hitCondition,
											logMessage: b.logMessage,
											lineNumber: b.lineNumber,
										},
									]));
							});
					}
				};
				(n = Ne([j(0, m.$75), j(1, a.$MIb), j(2, h.$IY)], n)),
					C.$Io
						.as(d.Extensions.Workbench)
						.registerWorkbenchContribution(n, c.LifecyclePhase.Restored);
			},
		),
		