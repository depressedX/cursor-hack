import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../common/contributions.js';
import '../../../common/notebookCommon.js';
import '../../../../../services/editor/common/editorService.js';
import '../../notebookBrowser.js';
import '../../../../../../editor/browser/editorExtensions.js';
define(
			de[3491],
			he([1, 0, 3, 55, 70, 18, 108, 46]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let m = class extends t.$1c {
					static {
						this.ID = "workbench.contrib.notebookUndoRedo";
					}
					constructor(u) {
						super(), (this.a = u);
						const a = 105;
						this.D(
							d.$stb.addImplementation(a, "notebook-undo-redo", () => {
								const h = (0, C.$eJb)(this.a.activeEditorPane),
									c = h?.getViewModel();
								return h && h.hasModel() && c
									? c.undo().then((n) => {
											if (n?.length) {
												for (let g = 0; g < h.getLength(); g++) {
													const p = h.cellAt(g);
													p.cellKind === w.CellKind.Markup &&
														n.find(
															(o) => o.fragment === p.model.uri.fragment,
														) &&
														p.updateEditState(C.CellEditState.Editing, "undo");
												}
												h?.setOptions({
													cellOptions: { resource: n[0] },
													preserveFocus: !0,
												});
											}
										})
									: !1;
							}),
						),
							this.D(
								d.$ttb.addImplementation(a, "notebook-undo-redo", () => {
									const h = (0, C.$eJb)(this.a.activeEditorPane),
										c = h?.getViewModel();
									return h && h.hasModel() && c
										? c.redo().then((n) => {
												if (n?.length) {
													for (let g = 0; g < h.getLength(); g++) {
														const p = h.cellAt(g);
														p.cellKind === w.CellKind.Markup &&
															n.find(
																(o) => o.fragment === p.model.uri.fragment,
															) &&
															p.updateEditState(
																C.CellEditState.Editing,
																"redo",
															);
													}
													h?.setOptions({
														cellOptions: { resource: n[0] },
														preserveFocus: !0,
													});
												}
											})
										: !1;
								}),
							);
					}
				};
				(m = Ne([j(0, E.$IY)], m)),
					(0, i.$s6)(m.ID, m, i.WorkbenchPhase.BlockRestore);
			},
		),
		