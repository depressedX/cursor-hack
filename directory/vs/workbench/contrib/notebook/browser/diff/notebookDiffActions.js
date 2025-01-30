import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../editor/browser/services/bulkEditService.js';
import '../../../../../nls.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../common/contextkeys.js';
import './diffElementViewModel.js';
import './notebookDiffEditorBrowser.js';
import './notebookDiffEditor.js';
import '../notebookIcons.js';
import '../../../../services/editor/common/editorService.js';
import '../../../../../platform/registry/common/platform.js';
import '../../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../common/editor.js';
import '../../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../../base/common/keyCodes.js';
import '../../common/notebookCommon.js';
import '../../../../../editor/common/services/textResourceConfiguration.js';
import './notebookMultiDiffEditor.js';
import '../../../../../base/common/codicons.js';
import '../../../../../platform/editor/common/editor.js';
define(
			de[4104],
			he([
				1, 0, 199, 4, 11, 10, 8, 100, 706, 556, 1361, 284, 18, 30, 81, 44, 43,
				27, 70, 125, 1320, 14, 116,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*bulkEditService*/,
				i /*nls*/,
				w /*actions*/,
				E /*configuration*/,
				C /*contextkey*/,
				d /*contextkeys*/,
				m /*diffElementViewModel*/,
				r /*notebookDiffEditorBrowser*/,
				u /*notebookDiffEditor*/,
				a /*notebookIcons*/,
				h /*editorService*/,
				c /*platform*/,
				n /*configurationRegistry*/,
				g /*editor*/,
				p /*keybindingsRegistry*/,
				o /*keyCodes*/,
				f /*notebookCommon*/,
				b /*textResourceConfiguration*/,
				s /*notebookMultiDiffEditor*/,
				l /*codicons*/,
				y /*editor*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "notebook.diff.switchToText",
									icon: a.$mOb,
									title: (0, i.localize2)(7996, "Open Text Diff Editor"),
									precondition: C.$Kj.or(
										d.$TPb.isEqualTo(u.$kFc.ID),
										d.$TPb.isEqualTo(s.$JGc.ID),
									),
									menu: [
										{
											id: w.$XX.EditorTitle,
											group: "navigation",
											when: C.$Kj.or(
												d.$TPb.isEqualTo(u.$kFc.ID),
												d.$TPb.isEqualTo(s.$JGc.ID),
											),
										},
									],
								});
							}
							async run(T) {
								const P = T.get(h.$IY),
									k = P.activeEditorPane;
								if (k && (k instanceof u.$kFc || k instanceof s.$JGc)) {
									const L = k.input;
									await P.openEditor({
										original: { resource: L.original.resource },
										modified: { resource: L.resource },
										label: L.getName(),
										options: { preserveFocus: !1, override: g.$b1.id },
									});
								}
							}
						},
					),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "notebook.diffEditor.showUnchangedCells",
									title: (0, i.localize2)(7997, "Show Unchanged Cells"),
									icon: l.$ak.unfold,
									precondition: C.$Kj.and(
										d.$TPb.isEqualTo(s.$JGc.ID),
										C.$Kj.has(r.$FEc.key),
									),
									menu: {
										when: C.$Kj.and(
											d.$TPb.isEqualTo(s.$JGc.ID),
											C.$Kj.has(r.$FEc.key),
											C.$Kj.equals(r.$GEc.key, !0),
										),
										id: w.$XX.EditorTitle,
										order: 22,
										group: "navigation",
									},
								});
							}
							run(T, ...P) {
								const k = T.get(h.$IY).activeEditorPane;
								k && k instanceof s.$JGc && k.showUnchanged();
							}
						},
					),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "notebook.diffEditor.hideUnchangedCells",
									title: (0, i.localize2)(7998, "Hide Unchanged Cells"),
									icon: l.$ak.fold,
									precondition: C.$Kj.and(
										d.$TPb.isEqualTo(s.$JGc.ID),
										C.$Kj.has(r.$FEc.key),
									),
									menu: {
										when: C.$Kj.and(
											d.$TPb.isEqualTo(s.$JGc.ID),
											C.$Kj.has(r.$FEc.key),
											C.$Kj.equals(r.$GEc.key, !1),
										),
										id: w.$XX.EditorTitle,
										order: 22,
										group: "navigation",
									},
								});
							}
							run(T, ...P) {
								const k = T.get(h.$IY).activeEditorPane;
								k && k instanceof s.$JGc && k.hideUnchanged();
							}
						},
					),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "notebook.diffEditor.2.goToCell",
									title: (0, i.localize2)(7999, "Go To Cell"),
									icon: l.$ak.goToFile,
									menu: {
										when: C.$Kj.and(
											d.$TPb.isEqualTo(s.$JGc.ID),
											C.$Kj.equals(r.$HEc.key, "Cell"),
											C.$Kj.notEquals(r.$IEc.key, "delete"),
										),
										id: w.$XX.MultiDiffEditorFileToolbar,
										order: 0,
										group: "navigation",
									},
								});
							}
							async run(P, ...k) {
								const L = k[0],
									D = P.get(h.$IY);
								D.activeEditorPane instanceof s.$JGc &&
									(await D.openEditor({
										resource: L,
										options: {
											selectionRevealType:
												y.TextEditorSelectionRevealType.CenterIfOutsideViewport,
										},
									}));
							}
						},
					);
				const $ = (0, i.localize)(7986, null);
				(0, w.$4X)(
					class extends w.$3X {
						constructor() {
							super({
								id: "notebook.diffEditor.2.cell.revertInput",
								title: $,
								icon: a.$nOb,
								menu: {
									when: C.$Kj.and(
										d.$TPb.isEqualTo(s.$JGc.ID),
										C.$Kj.equals(r.$HEc.key, "Cell"),
										C.$Kj.equals(r.$IEc.key, "modified"),
									),
									id: w.$XX.MultiDiffEditorFileToolbar,
									order: 2,
									group: "navigation",
								},
							});
						}
						async run(T, ...P) {
							const k = P[0],
								D = T.get(h.$IY).activeEditorPane;
							if (!(D instanceof s.$JGc)) return;
							const M = D.getDiffElementViewModel(k);
							if (M && M instanceof m.$REc) {
								const N = M.modified,
									A = M.original;
								if (!A || !N) return;
								await T.get(t.$rzb).apply(
									[
										new t.$tzb(N.uri, {
											range: N.textModel.getFullModelRange(),
											text: A.textModel.getValue(),
										}),
									],
									{ quotableLabel: "Revert Notebook Cell Content Change" },
								);
							}
						}
					},
				);
				const v = (0, i.localize)(7987, null);
				(0, w.$4X)(
					class extends w.$3X {
						constructor() {
							super({
								id: "notebook.diffEditor.2.cell.revertOutputs",
								title: v,
								icon: a.$nOb,
								f1: !1,
								menu: {
									when: C.$Kj.and(
										d.$TPb.isEqualTo(s.$JGc.ID),
										C.$Kj.equals(r.$HEc.key, "Output"),
										C.$Kj.equals(r.$IEc.key, "modified"),
									),
									id: w.$XX.MultiDiffEditorFileToolbar,
									order: 2,
									group: "navigation",
								},
							});
						}
						async run(T, ...P) {
							const k = P[0],
								D = T.get(h.$IY).activeEditorPane;
							if (!(D instanceof s.$JGc)) return;
							const M = D.getDiffElementViewModel(k);
							if (M && M instanceof m.$REc) {
								const N = M.original,
									A = M.modifiedDocument.cells.findIndex(
										(R) => R.handle === M.modified.handle,
									);
								if (A === -1) return;
								M.mainDocumentTextModel.applyEdits(
									[
										{
											editType: f.CellEditType.Output,
											index: A,
											outputs: N.outputs,
										},
									],
									!0,
									void 0,
									() => {},
									void 0,
									!0,
								);
							}
						}
					},
				);
				const S = (0, i.localize)(7988, null);
				(0, w.$4X)(
					class extends w.$3X {
						constructor() {
							super({
								id: "notebook.diffEditor.2.cell.revertMetadata",
								title: S,
								icon: a.$nOb,
								f1: !1,
								menu: {
									when: C.$Kj.and(
										d.$TPb.isEqualTo(s.$JGc.ID),
										C.$Kj.equals(r.$HEc.key, "Metadata"),
										C.$Kj.equals(r.$IEc.key, "modified"),
									),
									id: w.$XX.MultiDiffEditorFileToolbar,
									order: 2,
									group: "navigation",
								},
							});
						}
						async run(T, ...P) {
							const k = P[0],
								D = T.get(h.$IY).activeEditorPane;
							if (!(D instanceof s.$JGc)) return;
							const M = D.getDiffElementViewModel(k);
							if (M && M instanceof m.$REc) {
								const N = M.original,
									A = M.modifiedDocument.cells.findIndex(
										(R) => R.handle === M.modified.handle,
									);
								if (A === -1) return;
								M.mainDocumentTextModel.applyEdits(
									[
										{
											editType: f.CellEditType.Metadata,
											index: A,
											metadata: N.metadata,
										},
									],
									!0,
									void 0,
									() => {},
									void 0,
									!0,
								);
							}
						}
					},
				),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "notebook.diff.cell.revertMetadata",
									title: S,
									icon: a.$nOb,
									f1: !1,
									menu: {
										id: w.$XX.NotebookDiffCellMetadataTitle,
										when: r.$CEc,
									},
									precondition: r.$CEc,
								});
							}
							run(T, P) {
								if (!P || !(P.cell instanceof m.$REc)) return;
								const k = P.cell.original,
									L = P.cell.modified,
									D = P.cell.mainDocumentTextModel.cells.indexOf(L.textModel);
								if (D === -1) return;
								const M = [
									{
										editType: f.CellEditType.Metadata,
										index: D,
										metadata: k.metadata,
									},
								];
								P.cell.original.language &&
									P.cell.modified.language !== P.cell.original.language &&
									M.push({
										editType: f.CellEditType.CellLanguage,
										index: D,
										language: P.cell.original.language,
									}),
									P.cell.modifiedDocument.applyEdits(
										M,
										!0,
										void 0,
										() => {},
										void 0,
										!0,
									);
							}
						},
					),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "notebook.diff.cell.switchOutputRenderingStyleToText",
									title: (0, i.localize)(7989, null),
									icon: a.$pOb,
									f1: !1,
									menu: {
										id: w.$XX.NotebookDiffCellOutputsTitle,
										when: r.$DEc,
									},
								});
							}
							run(T, P) {
								P && (P.cell.renderOutput = !P.cell.renderOutput);
							}
						},
					),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "notebook.diff.cell.revertOutputs",
									title: (0, i.localize)(7990, null),
									icon: a.$nOb,
									f1: !1,
									menu: {
										id: w.$XX.NotebookDiffCellOutputsTitle,
										when: r.$CEc,
									},
									precondition: r.$CEc,
								});
							}
							run(T, P) {
								if (!P || !(P.cell instanceof m.$REc)) return;
								const k = P.cell.original,
									L = P.cell.modified,
									D = P.cell.mainDocumentTextModel.cells.indexOf(L.textModel);
								D !== -1 &&
									P.cell.mainDocumentTextModel.applyEdits(
										[
											{
												editType: f.CellEditType.Output,
												index: D,
												outputs: k.outputs,
											},
										],
										!0,
										void 0,
										() => {},
										void 0,
										!0,
									);
							}
						},
					),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "notebook.toggle.diff.cell.ignoreTrimWhitespace",
									title: (0, i.localize)(7991, null),
									icon: a.$oOb,
									f1: !1,
									menu: {
										id: w.$XX.NotebookDiffCellInputTitle,
										when: r.$zEc,
										order: 1,
									},
									precondition: r.$zEc,
									toggled: C.$Kj.equals(r.$AEc, !1),
								});
							}
							run(T, P) {
								const k = P?.cell;
								if (!k?.modified) return;
								const L = k.modified.uri,
									D = T.get(b.$XO),
									M = "diffEditor.ignoreTrimWhitespace",
									N = D.getValue(L, M);
								D.updateValue(L, M, !N);
							}
						},
					),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "notebook.diff.cell.revertInput",
									title: $,
									icon: a.$nOb,
									f1: !1,
									menu: {
										id: w.$XX.NotebookDiffCellInputTitle,
										when: r.$zEc,
										order: 2,
									},
									precondition: r.$zEc,
								});
							}
							run(T, P) {
								if (!P) return;
								const k = P.cell.original,
									L = P.cell.modified;
								return !k || !L
									? void 0
									: T.get(t.$rzb).apply(
											[
												new t.$tzb(L.uri, {
													range: L.textModel.getFullModelRange(),
													text: k.textModel.getValue(),
												}),
											],
											{ quotableLabel: "Revert Notebook Cell Content Change" },
										);
							}
						},
					);
				class I extends w.$3X {
					constructor(P, k, L, D, M, N, A) {
						super({
							id: P,
							title: k,
							precondition: L,
							menu: [
								{ id: w.$XX.EditorTitle, group: "notebook", when: L, order: M },
							],
							toggled: D,
						}),
							(this.a = N),
							(this.b = A);
					}
					async run(P) {
						const k = P.get(E.$gj);
						if (this.a !== void 0) {
							const L = k.getValue("notebook.diff.ignoreOutputs");
							k.updateValue("notebook.diff.ignoreOutputs", !L);
						}
						if (this.b !== void 0) {
							const L = k.getValue("notebook.diff.ignoreMetadata");
							k.updateValue("notebook.diff.ignoreMetadata", !L);
						}
					}
				}
				(0, w.$4X)(
					class extends I {
						constructor() {
							super(
								"notebook.diff.showOutputs",
								(0, i.localize2)(8e3, "Show Outputs Differences"),
								C.$Kj.or(
									d.$TPb.isEqualTo(u.$kFc.ID),
									d.$TPb.isEqualTo(s.$JGc.ID),
								),
								C.$Kj.notEquals("config.notebook.diff.ignoreOutputs", !0),
								2,
								!0,
								void 0,
							);
						}
					},
				),
					(0, w.$4X)(
						class extends I {
							constructor() {
								super(
									"notebook.diff.showMetadata",
									(0, i.localize2)(8001, "Show Metadata Differences"),
									C.$Kj.or(
										d.$TPb.isEqualTo(u.$kFc.ID),
										d.$TPb.isEqualTo(s.$JGc.ID),
									),
									C.$Kj.notEquals("config.notebook.diff.ignoreMetadata", !0),
									1,
									void 0,
									!0,
								);
							}
						},
					),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "notebook.diff.action.previous",
									title: (0, i.localize)(7992, null),
									icon: a.$sOb,
									f1: !1,
									keybinding: {
										primary: o.KeyMod.Shift | o.KeyMod.Alt | o.KeyCode.F3,
										weight: p.KeybindingWeight.WorkbenchContrib,
										when: d.$TPb.isEqualTo(u.$kFc.ID),
									},
									menu: {
										id: w.$XX.EditorTitle,
										group: "navigation",
										when: d.$TPb.isEqualTo(u.$kFc.ID),
									},
								});
							}
							run(T) {
								const P = T.get(h.$IY);
								if (P.activeEditorPane?.getId() !== f.$P6) return;
								P.activeEditorPane.getControl()?.previousChange();
							}
						},
					),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "notebook.diff.action.next",
									title: (0, i.localize)(7993, null),
									icon: a.$tOb,
									f1: !1,
									keybinding: {
										primary: o.KeyMod.Alt | o.KeyCode.F3,
										weight: p.KeybindingWeight.WorkbenchContrib,
										when: d.$TPb.isEqualTo(u.$kFc.ID),
									},
									menu: {
										id: w.$XX.EditorTitle,
										group: "navigation",
										when: d.$TPb.isEqualTo(u.$kFc.ID),
									},
								});
							}
							run(T) {
								const P = T.get(h.$IY);
								if (P.activeEditorPane?.getId() !== f.$P6) return;
								P.activeEditorPane.getControl()?.nextChange();
							}
						},
					),
					c.$Io
						.as(n.$No.Configuration)
						.registerConfiguration({
							id: "notebook",
							order: 100,
							type: "object",
							properties: {
								"notebook.diff.ignoreMetadata": {
									type: "boolean",
									default: !1,
									markdownDescription: (0, i.localize)(7994, null),
								},
								"notebook.diff.ignoreOutputs": {
									type: "boolean",
									default: !1,
									markdownDescription: (0, i.localize)(7995, null),
								},
							},
						});
			},
		),
		