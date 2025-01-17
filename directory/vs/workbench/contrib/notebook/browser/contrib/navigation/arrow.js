import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/async.js';
import '../../../../../../base/common/keyCodes.js';
import '../../../../../../editor/browser/editorExtensions.js';
import '../../../../../../editor/common/editorContextKeys.js';
import '../../../../../../nls.js';
import '../../../../../../platform/accessibility/common/accessibility.js';
import '../../../../../../platform/actions/common/actions.js';
import '../../../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../../platform/contextkey/common/contextkeys.js';
import '../../../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../../../platform/registry/common/platform.js';
import '../../../../inlineChat/browser/inlineChatController.js';
import '../../controller/chat/notebookChatContext.js';
import '../../controller/coreActions.js';
import '../../notebookBrowser.js';
import '../../../common/notebookCommon.js';
import '../../../common/notebookContextKeys.js';
define(
			de[1956],
			he([
				1, 0, 15, 27, 46, 71, 4, 91, 11, 81, 8, 179, 43, 30, 427, 688, 238, 108,
				70, 176,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ZFc = void 0);
				const s = "notebook.focusTop",
					l = "notebook.focusBottom",
					y = "notebook.focusPreviousEditor",
					$ = "notebook.focusNextEditor",
					v = "notebook.cell.focusInOutput",
					S = "notebook.cell.focusOutOutput";
				e.$ZFc = "notebook.centerActiveCell";
				const I = "notebook.cell.cursorPageUp",
					T = "notebook.cell.cursorPageUpSelect",
					P = "notebook.cell.cursorPageDown",
					k = "notebook.cell.cursorPageDownSelect";
				(0, m.$4X)(
					class extends m.$3X {
						constructor() {
							super({
								id: "notebook.cell.nullAction",
								title: (0, C.localize)(7781, null),
								keybinding: [
									{
										when: b.$sJb,
										primary: i.KeyCode.DownArrow,
										weight: h.KeybindingWeight.WorkbenchContrib + 1,
									},
									{
										when: b.$sJb,
										primary: i.KeyCode.UpArrow,
										weight: h.KeybindingWeight.WorkbenchContrib + 1,
									},
								],
								f1: !1,
							});
						}
						run() {}
					},
				),
					(0, m.$4X)(
						class extends p.$z5b {
							constructor() {
								super({
									id: $,
									title: (0, C.localize)(7782, null),
									keybinding: [
										{
											when: u.$Kj.and(
												b.$pJb,
												d.$YK.negate(),
												u.$Kj.equals(
													"config.notebook.navigation.allowNavigateToSurroundingCells",
													!0,
												),
												u.$Kj.and(
													u.$Kj.has(a.$aMb),
													E.EditorContextKeys.editorTextFocus,
													f.$16.notEqualsTo("top"),
													f.$16.notEqualsTo("none"),
												),
												E.EditorContextKeys.isEmbeddedDiffEditor.negate(),
											),
											primary: i.KeyCode.DownArrow,
											weight: p.$s5b,
										},
										{
											when: u.$Kj.and(
												b.$pJb,
												d.$YK.negate(),
												u.$Kj.equals(
													"config.notebook.navigation.allowNavigateToSurroundingCells",
													!0,
												),
												u.$Kj.and(
													b.$CJb.isEqualTo("markup"),
													b.$GJb.isEqualTo(!1),
													b.$zJb,
												),
												E.EditorContextKeys.isEmbeddedDiffEditor.negate(),
											),
											primary: i.KeyCode.DownArrow,
											weight: h.KeybindingWeight.WorkbenchContrib,
										},
										{
											when: u.$Kj.and(b.$pJb, b.$rJb),
											primary: i.KeyMod.CtrlCmd | i.KeyCode.DownArrow,
											mac: {
												primary:
													i.KeyMod.WinCtrl |
													i.KeyMod.CtrlCmd |
													i.KeyCode.DownArrow,
											},
											weight: h.KeybindingWeight.WorkbenchContrib,
										},
										{
											when: u.$Kj.and(b.$FJb, d.$YK),
											primary: i.KeyMod.CtrlCmd | i.KeyCode.PageDown,
											mac: { primary: i.KeyMod.WinCtrl | i.KeyCode.PageUp },
											weight: h.KeybindingWeight.WorkbenchContrib + 1,
										},
									],
								});
							}
							async runWithContext(M, N) {
								const A = N.notebookEditor,
									R = N.cell,
									O = A.getCellIndex(R);
								if (typeof O != "number" || O >= A.getLength() - 1) return;
								const B = R.textBuffer.getLineCount(),
									U = N.cell ?? N.selectedCells?.[0],
									z = U ? (0, p.$w5b)(N, U) : void 0;
								if (
									z &&
									z.hasTextFocus() &&
									n.$Z1b.get(z)?.getWidgetPosition()?.lineNumber === B
								)
									n.$Z1b.get(z)?.focus();
								else {
									const F = A.cellAt(O + 1),
										x =
											F.cellKind === f.CellKind.Markup &&
											F.getEditState() === o.CellEditState.Preview
												? "container"
												: "editor";
									await A.focusNotebookCell(F, x, { focusEditorLine: 1 });
								}
							}
						},
					),
					(0, m.$4X)(
						class extends p.$z5b {
							constructor() {
								super({
									id: y,
									title: (0, C.localize)(7783, null),
									keybinding: [
										{
											when: u.$Kj.and(
												b.$pJb,
												d.$YK.negate(),
												u.$Kj.equals(
													"config.notebook.navigation.allowNavigateToSurroundingCells",
													!0,
												),
												u.$Kj.and(
													u.$Kj.has(a.$aMb),
													E.EditorContextKeys.editorTextFocus,
													f.$16.notEqualsTo("bottom"),
													f.$16.notEqualsTo("none"),
												),
												E.EditorContextKeys.isEmbeddedDiffEditor.negate(),
											),
											primary: i.KeyCode.UpArrow,
											weight: p.$s5b,
										},
										{
											when: u.$Kj.and(
												b.$pJb,
												d.$YK.negate(),
												u.$Kj.equals(
													"config.notebook.navigation.allowNavigateToSurroundingCells",
													!0,
												),
												u.$Kj.and(
													b.$CJb.isEqualTo("markup"),
													b.$GJb.isEqualTo(!1),
													b.$zJb,
												),
												E.EditorContextKeys.isEmbeddedDiffEditor.negate(),
											),
											primary: i.KeyCode.UpArrow,
											weight: h.KeybindingWeight.WorkbenchContrib,
										},
										{
											when: u.$Kj.and(b.$FJb, d.$YK),
											primary: i.KeyMod.CtrlCmd | i.KeyCode.PageUp,
											mac: { primary: i.KeyMod.WinCtrl | i.KeyCode.PageUp },
											weight: h.KeybindingWeight.WorkbenchContrib + 1,
										},
									],
								});
							}
							async runWithContext(M, N) {
								const A = N.notebookEditor,
									R = N.cell,
									O = A.getCellIndex(R);
								if (typeof O != "number" || O < 1 || A.getLength() === 0)
									return;
								const B = A.cellAt(O - 1),
									U =
										B.cellKind === f.CellKind.Markup &&
										B.getEditState() === o.CellEditState.Preview
											? "container"
											: "editor",
									z = B.textBuffer.getLineCount();
								await A.focusNotebookCell(B, U, { focusEditorLine: z });
								const F = (0, p.$w5b)(N, B);
								F &&
									n.$Z1b.get(F)?.getWidgetPosition()?.lineNumber === z &&
									n.$Z1b.get(F)?.focus();
							}
						},
					),
					(0, m.$4X)(
						class extends p.$x5b {
							constructor() {
								super({
									id: s,
									title: (0, C.localize)(7784, null),
									keybinding: [
										{
											when: u.$Kj.and(b.$pJb, u.$Kj.not(a.$aMb)),
											primary: i.KeyMod.CtrlCmd | i.KeyCode.Home,
											weight: h.KeybindingWeight.WorkbenchContrib,
										},
										{
											when: u.$Kj.and(
												b.$pJb,
												u.$Kj.not(a.$aMb),
												g.$r1b.isEqualTo(""),
											),
											mac: { primary: i.KeyMod.CtrlCmd | i.KeyCode.UpArrow },
											weight: h.KeybindingWeight.WorkbenchContrib,
										},
									],
								});
							}
							async runWithContext(D, M) {
								const N = M.notebookEditor;
								if (N.getLength() === 0) return;
								const A = N.cellAt(0);
								await N.focusNotebookCell(A, "container");
							}
						},
					),
					(0, m.$4X)(
						class extends p.$x5b {
							constructor() {
								super({
									id: l,
									title: (0, C.localize)(7785, null),
									keybinding: [
										{
											when: u.$Kj.and(b.$pJb, u.$Kj.not(a.$aMb)),
											primary: i.KeyMod.CtrlCmd | i.KeyCode.End,
											mac: void 0,
											weight: h.KeybindingWeight.WorkbenchContrib,
										},
										{
											when: u.$Kj.and(
												b.$pJb,
												u.$Kj.not(a.$aMb),
												g.$r1b.isEqualTo(""),
											),
											mac: { primary: i.KeyMod.CtrlCmd | i.KeyCode.DownArrow },
											weight: h.KeybindingWeight.WorkbenchContrib,
										},
									],
								});
							}
							async runWithContext(D, M) {
								const N = M.notebookEditor;
								if (!N.hasModel() || N.getLength() === 0) return;
								const A = N.getLength() - 1,
									R = N.getPreviousVisibleCellIndex(A);
								if (R) {
									const O = N.cellAt(R);
									await N.focusNotebookCell(O, "container");
								}
							}
						},
					),
					(0, m.$4X)(
						class extends p.$z5b {
							constructor() {
								super({
									id: v,
									title: (0, C.localize)(7786, null),
									keybinding: {
										when: u.$Kj.and(b.$pJb, b.$KJb),
										primary: i.KeyMod.CtrlCmd | i.KeyCode.DownArrow,
										mac: {
											primary:
												i.KeyMod.WinCtrl |
												i.KeyMod.CtrlCmd |
												i.KeyCode.DownArrow,
										},
										weight: h.KeybindingWeight.WorkbenchContrib,
									},
								});
							}
							async runWithContext(D, M) {
								const N = M.notebookEditor,
									A = M.cell;
								return (0, t.$Nh)(0).then(() =>
									N.focusNotebookCell(A, "output"),
								);
							}
						},
					),
					(0, m.$4X)(
						class extends p.$z5b {
							constructor() {
								super({
									id: S,
									title: (0, C.localize)(7787, null),
									keybinding: {
										when: u.$Kj.and(b.$pJb, b.$rJb),
										primary: i.KeyMod.CtrlCmd | i.KeyCode.UpArrow,
										mac: {
											primary:
												i.KeyMod.WinCtrl | i.KeyMod.CtrlCmd | i.KeyCode.UpArrow,
										},
										weight: h.KeybindingWeight.WorkbenchContrib,
									},
								});
							}
							async runWithContext(D, M) {
								const N = M.notebookEditor,
									A = M.cell;
								await N.focusNotebookCell(A, "editor");
							}
						},
					),
					(0, m.$4X)(
						class extends p.$z5b {
							constructor() {
								super({
									id: e.$ZFc,
									title: (0, C.localize)(7788, null),
									keybinding: {
										when: b.$pJb,
										primary: i.KeyMod.CtrlCmd | i.KeyCode.Alt | i.KeyCode.KeyL,
										mac: { primary: i.KeyMod.WinCtrl | i.KeyCode.KeyL },
										weight: h.KeybindingWeight.WorkbenchContrib,
									},
								});
							}
							async runWithContext(M, N) {
								return N.notebookEditor.revealInCenter(N.cell);
							}
						},
					),
					(0, m.$4X)(
						class extends p.$z5b {
							constructor() {
								super({
									id: I,
									title: (0, C.localize)(7789, null),
									keybinding: [
										{
											when: u.$Kj.and(
												b.$pJb,
												u.$Kj.has(a.$aMb),
												E.EditorContextKeys.editorTextFocus,
											),
											primary: i.KeyCode.PageUp,
											weight: p.$s5b,
										},
									],
								});
							}
							async runWithContext(D, M) {
								w.EditorExtensionsRegistry.getEditorCommand(
									"cursorPageUp",
								).runCommand(D, { pageSize: L(M) });
							}
						},
					),
					(0, m.$4X)(
						class extends p.$z5b {
							constructor() {
								super({
									id: T,
									title: (0, C.localize)(7790, null),
									keybinding: [
										{
											when: u.$Kj.and(
												b.$pJb,
												u.$Kj.has(a.$aMb),
												E.EditorContextKeys.editorTextFocus,
												b.$rJb.negate(),
											),
											primary: i.KeyMod.Shift | i.KeyCode.PageUp,
											weight: p.$s5b,
										},
									],
								});
							}
							async runWithContext(D, M) {
								w.EditorExtensionsRegistry.getEditorCommand(
									"cursorPageUpSelect",
								).runCommand(D, { pageSize: L(M) });
							}
						},
					),
					(0, m.$4X)(
						class extends p.$z5b {
							constructor() {
								super({
									id: P,
									title: (0, C.localize)(7791, null),
									keybinding: [
										{
											when: u.$Kj.and(
												b.$pJb,
												u.$Kj.has(a.$aMb),
												E.EditorContextKeys.editorTextFocus,
											),
											primary: i.KeyCode.PageDown,
											weight: p.$s5b,
										},
									],
								});
							}
							async runWithContext(D, M) {
								w.EditorExtensionsRegistry.getEditorCommand(
									"cursorPageDown",
								).runCommand(D, { pageSize: L(M) });
							}
						},
					),
					(0, m.$4X)(
						class extends p.$z5b {
							constructor() {
								super({
									id: k,
									title: (0, C.localize)(7792, null),
									keybinding: [
										{
											when: u.$Kj.and(
												b.$pJb,
												u.$Kj.has(a.$aMb),
												E.EditorContextKeys.editorTextFocus,
												b.$rJb.negate(),
											),
											primary: i.KeyMod.Shift | i.KeyCode.PageDown,
											weight: p.$s5b,
										},
									],
								});
							}
							async runWithContext(D, M) {
								w.EditorExtensionsRegistry.getEditorCommand(
									"cursorPageDownSelect",
								).runCommand(D, { pageSize: L(M) });
							}
						},
					);
				function L(D) {
					const N = D.notebookEditor.getViewModel().layoutInfo,
						A = N?.fontInfo.lineHeight || 17;
					return Math.max(1, Math.floor((N?.height || 0) / A) - 2);
				}
				c.$Io
					.as(r.$No.Configuration)
					.registerConfiguration({
						id: "notebook",
						order: 100,
						type: "object",
						properties: {
							"notebook.navigation.allowNavigateToSurroundingCells": {
								type: "boolean",
								default: !0,
								markdownDescription: (0, C.localize)(7793, null),
							},
						},
					});
			},
		),
		