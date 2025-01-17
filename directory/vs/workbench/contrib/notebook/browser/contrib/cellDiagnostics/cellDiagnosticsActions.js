import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/keyCodes.js';
import '../../../../../../editor/common/core/range.js';
import '../../../../../../editor/contrib/codeAction/browser/codeActionController.js';
import '../../../../../../editor/contrib/codeAction/common/types.js';
import '../../../../../../nls.js';
import '../../../../../../platform/actions/common/actions.js';
import '../../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../controller/coreActions.js';
import '../../viewModel/codeCellViewModel.js';
import '../../../common/notebookContextKeys.js';
define(
			de[1960],
			he([1, 0, 27, 17, 500, 291, 4, 11, 8, 43, 238, 482, 176]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xGc = void 0),
					(e.$xGc = "notebook.cell.openFailureActions"),
					(0, d.$4X)(
						class extends u.$z5b {
							constructor() {
								super({
									id: e.$xGc,
									title: (0, C.localize2)(7723, "Show Cell Failure Actions"),
									precondition: m.$Kj.and(h.$EJb, h.$RJb, h.$FJb.toNegated()),
									f1: !0,
									keybinding: {
										when: m.$Kj.and(h.$EJb, h.$RJb, h.$FJb.toNegated()),
										primary: t.KeyMod.CtrlCmd | t.KeyCode.Period,
										weight: r.KeybindingWeight.WorkbenchContrib,
									},
								});
							}
							async runWithContext(c, n) {
								if (n.cell instanceof a.$31b) {
									const g = n.cell.excecutionError.get();
									if (g?.location) {
										const p = i.$iL.lift({
											startLineNumber: g.location.startLineNumber + 1,
											startColumn: g.location.startColumn + 1,
											endLineNumber: g.location.endLineNumber + 1,
											endColumn: g.location.endColumn + 1,
										});
										n.notebookEditor.setCellEditorSelection(
											n.cell,
											i.$iL.lift(p),
										);
										const o = (0, u.$w5b)(n, n.cell);
										o &&
											w.$BBb
												.get(o)
												?.manualTriggerAtCurrentPosition(
													(0, C.localize)(7722, null),
													E.CodeActionTriggerSource.Default,
													{ include: E.$GAb.QuickFix },
												);
									}
								}
							}
						},
					);
			},
		),
		