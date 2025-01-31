import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../editor/common/languages/language.js';
import '../../../../../nls.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/contextkey/common/contextkeys.js';
import '../../../../../platform/keybinding/common/keybindingsRegistry.js';
import './cellOperations.js';
import './coreActions.js';
import '../../common/notebookContextKeys.js';
import '../../common/notebookCommon.js';
import './chat/notebookChatContext.js';
define(
			de[1846],
			he([1, 0, 14, 27, 61, 4, 11, 8, 179, 43, 624, 238, 176, 70, 688]),
			function (ce /*require*/,
 e /*exports*/,
 t /*codicons*/,
 i /*keyCodes*/,
 w /*language*/,
 E /*nls*/,
 C /*actions*/,
 d /*contextkey*/,
 m /*contextkeys*/,
 r /*keybindingsRegistry*/,
 u /*cellOperations*/,
 a /*coreActions*/,
 h /*notebookContextKeys*/,
 c /*notebookCommon*/,
 n /*notebookChatContext*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$uFc = void 0),
					(e.$tFc = $);
				const g = "notebook.cell.insertCodeCellAbove",
					p = "notebook.cell.insertCodeCellBelow",
					o = "notebook.cell.insertCodeCellAboveAndFocusContainer",
					f = "notebook.cell.insertCodeCellBelowAndFocusContainer",
					b = "notebook.cell.insertCodeCellAtTop",
					s = "notebook.cell.insertMarkdownCellAbove",
					l = "notebook.cell.insertMarkdownCellBelow",
					y = "notebook.cell.insertMarkdownCellAtTop";
				function $(S, I, T, P, k) {
					let L = null;
					I.ui && I.notebookEditor.focus();
					const D = S.get(w.$nM);
					if (I.cell) {
						const M = I.notebookEditor.getCellIndex(I.cell);
						L = (0, u.$M5b)(D, I.notebookEditor, M, T, P, void 0, !0);
					} else {
						const M = I.notebookEditor.getFocus(),
							N = Math.max(M.end - 1, 0);
						L = (0, u.$M5b)(D, I.notebookEditor, N, T, P, void 0, !0);
					}
					return L;
				}
				class v extends a.$x5b {
					constructor(I, T, P, k) {
						super(I), (this.a = T), (this.b = P), (this.d = k);
					}
					async runWithContext(I, T) {
						const P = await $(I, T, this.a, this.b, this.d);
						P &&
							(await T.notebookEditor.focusNotebookCell(
								P,
								this.d ? "editor" : "container",
							));
					}
				}
				(e.$uFc = v),
					(0, C.$4X)(
						class extends v {
							constructor() {
								super(
									{
										id: g,
										title: (0, E.localize)(7915, null),
										keybinding: {
											primary:
												i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.Enter,
											when: d.$Kj.and(h.$qJb, m.$bMb.toNegated()),
											weight: r.KeybindingWeight.WorkbenchContrib,
										},
										menu: { id: C.$XX.NotebookCellInsert, order: 0 },
									},
									c.CellKind.Code,
									"above",
									!0,
								);
							}
						},
					),
					(0, C.$4X)(
						class extends v {
							constructor() {
								super(
									{ id: o, title: (0, E.localize)(7916, null) },
									c.CellKind.Code,
									"above",
									!1,
								);
							}
						},
					),
					(0, C.$4X)(
						class extends v {
							constructor() {
								super(
									{
										id: p,
										title: (0, E.localize)(7917, null),
										keybinding: {
											primary: i.KeyMod.CtrlCmd | i.KeyCode.Enter,
											when: d.$Kj.and(
												h.$qJb,
												m.$bMb.toNegated(),
												n.$r1b.isEqualTo(""),
											),
											weight: r.KeybindingWeight.WorkbenchContrib,
										},
										menu: { id: C.$XX.NotebookCellInsert, order: 1 },
									},
									c.CellKind.Code,
									"below",
									!0,
								);
							}
						},
					),
					(0, C.$4X)(
						class extends v {
							constructor() {
								super(
									{ id: f, title: (0, E.localize)(7918, null) },
									c.CellKind.Code,
									"below",
									!1,
								);
							}
						},
					),
					(0, C.$4X)(
						class extends v {
							constructor() {
								super(
									{
										id: s,
										title: (0, E.localize)(7919, null),
										menu: { id: C.$XX.NotebookCellInsert, order: 2 },
									},
									c.CellKind.Markup,
									"above",
									!0,
								);
							}
						},
					),
					(0, C.$4X)(
						class extends v {
							constructor() {
								super(
									{
										id: l,
										title: (0, E.localize)(7920, null),
										menu: { id: C.$XX.NotebookCellInsert, order: 3 },
									},
									c.CellKind.Markup,
									"below",
									!0,
								);
							}
						},
					),
					(0, C.$4X)(
						class extends a.$x5b {
							constructor() {
								super({ id: b, title: (0, E.localize)(7921, null), f1: !1 });
							}
							async run(I, T) {
								(T = T ?? this.getEditorContextFromArgsOrActive(I)),
									T && this.runWithContext(I, T);
							}
							async runWithContext(I, T) {
								const P = I.get(w.$nM),
									k = (0, u.$M5b)(
										P,
										T.notebookEditor,
										0,
										c.CellKind.Code,
										"above",
										void 0,
										!0,
									);
								k && (await T.notebookEditor.focusNotebookCell(k, "editor"));
							}
						},
					),
					(0, C.$4X)(
						class extends a.$x5b {
							constructor() {
								super({ id: y, title: (0, E.localize)(7922, null), f1: !1 });
							}
							async run(I, T) {
								(T = T ?? this.getEditorContextFromArgsOrActive(I)),
									T && this.runWithContext(I, T);
							}
							async runWithContext(I, T) {
								const P = I.get(w.$nM),
									k = (0, u.$M5b)(
										P,
										T.notebookEditor,
										0,
										c.CellKind.Markup,
										"above",
										void 0,
										!0,
									);
								k && (await T.notebookEditor.focusNotebookCell(k, "editor"));
							}
						},
					),
					C.$ZX.appendMenuItem(C.$XX.NotebookCellBetween, {
						command: {
							id: p,
							title: "$(add) " + (0, E.localize)(7923, null),
							tooltip: (0, E.localize)(7924, null),
						},
						order: 0,
						group: "inline",
						when: d.$Kj.and(
							h.$tJb.isEqualTo(!0),
							d.$Kj.notEquals(
								"config.notebook.experimental.insertToolbarAlignment",
								"left",
							),
						),
					}),
					C.$ZX.appendMenuItem(C.$XX.NotebookCellBetween, {
						command: {
							id: p,
							title: (0, E.localize)(7925, null),
							icon: t.$ak.add,
							tooltip: (0, E.localize)(7926, null),
						},
						order: 0,
						group: "inline",
						when: d.$Kj.and(
							h.$tJb.isEqualTo(!0),
							d.$Kj.equals(
								"config.notebook.experimental.insertToolbarAlignment",
								"left",
							),
						),
					}),
					C.$ZX.appendMenuItem(C.$XX.NotebookToolbar, {
						command: {
							id: p,
							icon: t.$ak.add,
							title: (0, E.localize)(7927, null),
							tooltip: (0, E.localize)(7928, null),
						},
						order: -5,
						group: "navigation/add",
						when: d.$Kj.and(
							h.$tJb.isEqualTo(!0),
							d.$Kj.notEquals(
								"config.notebook.insertToolbarLocation",
								"betweenCells",
							),
							d.$Kj.notEquals(
								"config.notebook.insertToolbarLocation",
								"hidden",
							),
						),
					}),
					C.$ZX.appendMenuItem(C.$XX.NotebookCellListTop, {
						command: {
							id: b,
							title: "$(add) " + (0, E.localize)(7929, null),
							tooltip: (0, E.localize)(7930, null),
						},
						order: 0,
						group: "inline",
						when: d.$Kj.and(
							h.$tJb.isEqualTo(!0),
							d.$Kj.notEquals(
								"config.notebook.experimental.insertToolbarAlignment",
								"left",
							),
						),
					}),
					C.$ZX.appendMenuItem(C.$XX.NotebookCellListTop, {
						command: {
							id: b,
							title: (0, E.localize)(7931, null),
							icon: t.$ak.add,
							tooltip: (0, E.localize)(7932, null),
						},
						order: 0,
						group: "inline",
						when: d.$Kj.and(
							h.$tJb.isEqualTo(!0),
							d.$Kj.equals(
								"config.notebook.experimental.insertToolbarAlignment",
								"left",
							),
						),
					}),
					C.$ZX.appendMenuItem(C.$XX.NotebookCellBetween, {
						command: {
							id: l,
							title: "$(add) " + (0, E.localize)(7933, null),
							tooltip: (0, E.localize)(7934, null),
						},
						order: 1,
						group: "inline",
						when: d.$Kj.and(
							h.$tJb.isEqualTo(!0),
							d.$Kj.notEquals(
								"config.notebook.experimental.insertToolbarAlignment",
								"left",
							),
						),
					}),
					C.$ZX.appendMenuItem(C.$XX.NotebookToolbar, {
						command: {
							id: l,
							icon: t.$ak.add,
							title: (0, E.localize)(7935, null),
							tooltip: (0, E.localize)(7936, null),
						},
						order: -5,
						group: "navigation/add",
						when: d.$Kj.and(
							h.$tJb.isEqualTo(!0),
							d.$Kj.notEquals(
								"config.notebook.insertToolbarLocation",
								"betweenCells",
							),
							d.$Kj.notEquals(
								"config.notebook.insertToolbarLocation",
								"hidden",
							),
							d.$Kj.notEquals(`config.${c.$56.globalToolbarShowLabel}`, !1),
							d.$Kj.notEquals(
								`config.${c.$56.globalToolbarShowLabel}`,
								"never",
							),
						),
					}),
					C.$ZX.appendMenuItem(C.$XX.NotebookCellListTop, {
						command: {
							id: y,
							title: "$(add) " + (0, E.localize)(7937, null),
							tooltip: (0, E.localize)(7938, null),
						},
						order: 1,
						group: "inline",
						when: d.$Kj.and(
							h.$tJb.isEqualTo(!0),
							d.$Kj.notEquals(
								"config.notebook.experimental.insertToolbarAlignment",
								"left",
							),
						),
					});
			},
		)
