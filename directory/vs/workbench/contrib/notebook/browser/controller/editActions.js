import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../base/common/mime.js';
import '../../../../../base/common/uri.js';
import '../../../../../editor/common/core/selection.js';
import '../../../../../editor/common/cursor/cursor.js';
import '../../../../../editor/common/editorContextKeys.js';
import '../../../../../editor/common/languages/language.js';
import '../../../../../editor/common/languages/languageConfigurationRegistry.js';
import '../../../../../editor/common/model.js';
import '../../../../../editor/common/services/getIconClasses.js';
import '../../../../../editor/common/services/model.js';
import '../../../../../editor/contrib/comment/browser/lineCommentCommand.js';
import '../../../../../nls.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/contextkey/common/contextkeys.js';
import '../../../../../platform/dialogs/common/dialogs.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../../platform/notification/common/notification.js';
import '../../../../../platform/quickinput/common/quickInput.js';
import '../../../inlineChat/browser/inlineChatController.js';
import '../../../inlineChat/common/inlineChat.js';
import './cellOperations.js';
import './coreActions.js';
import './notebookIndentationActions.js';
import '../notebookBrowser.js';
import '../notebookIcons.js';
import '../../common/notebookCommon.js';
import '../../common/notebookContextKeys.js';
import '../../common/notebookExecutionStateService.js';
import '../../common/notebookKernelService.js';
import '../../../../services/editor/common/editorService.js';
import '../../../../services/languageDetection/common/languageDetectionWorkerService.js';
define(
			de[1957],
			he([
				1, 0, 27, 266, 9, 104, 1199, 71, 61, 152, 64, 252, 67, 1549, 4, 11, 10,
				8, 179, 57, 5, 43, 40, 63, 427, 257, 624, 238, 3482, 108, 284, 70, 176,
				190, 243, 18, 474,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*keyCodes*/,
				i /*mime*/,
				w /*uri*/,
				E /*selection*/,
				C /*cursor*/,
				d /*editorContextKeys*/,
				m /*language*/,
				r /*languageConfigurationRegistry*/,
				u /*model*/,
				a /*getIconClasses*/,
				h /*model*/,
				c /*lineCommentCommand*/,
				n /*nls*/,
				g /*actions*/,
				p /*configuration*/,
				o /*contextkey*/,
				f /*contextkeys*/,
				b /*dialogs*/,
				s /*instantiation*/,
				l /*keybindingsRegistry*/,
				y /*notification*/,
				$ /*quickInput*/,
				v /*inlineChatController*/,
				S /*inlineChat*/,
				I /*cellOperations*/,
				T /*coreActions*/,
				P /*notebookIndentationActions*/,
				k /*notebookBrowser*/,
				L /*notebookIcons*/,
				D /*notebookCommon*/,
				M /*notebookContextKeys*/,
				N /*notebookExecutionStateService*/,
				A /*notebookKernelService*/,
				R /*editorService*/,
				O /*languageDetectionWorkerService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$EFc = e.$DFc = e.$CFc = void 0),
					(L = mt(L));
				const B = "notebook.clearAllCellsOutputs",
					U = "notebook.cell.edit",
					z = "notebook.cell.delete";
				(e.$CFc = "notebook.cell.clearOutputs"),
					(e.$DFc = "notebook.selectIndentation"),
					(e.$EFc = "notebook.commentSelectedCells"),
					(0, g.$4X)(
						class extends T.$z5b {
							constructor() {
								super({
									id: U,
									title: (0, n.localize)(7866, null),
									keybinding: {
										when: o.$Kj.and(
											M.$qJb,
											o.$Kj.not(f.$aMb),
											M.$tJb.isEqualTo(!0),
											d.EditorContextKeys.hoverFocused.toNegated(),
											M.$sJb.toNegated(),
										),
										primary: t.KeyCode.Enter,
										weight: l.KeybindingWeight.WorkbenchContrib,
									},
									menu: {
										id: g.$XX.NotebookCellTitle,
										when: o.$Kj.and(
											M.$tJb.isEqualTo(!0),
											M.$CJb.isEqualTo("markup"),
											M.$GJb.toNegated(),
											M.$DJb,
										),
										order: T.CellToolbarOrder.EditCell,
										group: T.$q5b,
									},
									icon: L.$aOb,
								});
							}
							async runWithContext(q, V) {
								if (!V.notebookEditor.hasModel() || V.notebookEditor.isReadOnly)
									return;
								await V.notebookEditor.focusNotebookCell(V.cell, "editor");
								const G = V.cell ? (0, T.$w5b)(V, V.cell) : void 0;
								G &&
									G.hasTextFocus() &&
									v.$Z1b.get(G)?.getWidgetPosition()?.lineNumber ===
										G.getPosition()?.lineNumber &&
									v.$Z1b.get(G)?.focus();
							}
						},
					);
				const F = o.$Kj.and(M.$pJb, f.$bMb, S.$XKb.toNegated());
				(0, g.$4X)(
					class extends T.$z5b {
						constructor() {
							super({
								id: k.$$Ib,
								title: (0, n.localize)(7867, null),
								menu: {
									id: g.$XX.NotebookCellTitle,
									when: o.$Kj.and(M.$CJb.isEqualTo("markup"), M.$GJb, M.$DJb),
									order: T.CellToolbarOrder.SaveCell,
									group: T.$q5b,
								},
								icon: L.$bOb,
								keybinding: [
									{
										when: o.$Kj.and(
											F,
											d.EditorContextKeys.hoverVisible.toNegated(),
											d.EditorContextKeys.hasNonEmptySelection.toNegated(),
											d.EditorContextKeys.hasMultipleSelections.toNegated(),
										),
										primary: t.KeyCode.Escape,
										weight: T.$s5b - 5,
									},
									{
										when: o.$Kj.and(M.$pJb, M.$rJb),
										primary: t.KeyCode.Escape,
										weight: l.KeybindingWeight.WorkbenchContrib + 5,
									},
									{
										when: o.$Kj.and(F, M.$CJb.isEqualTo("markup")),
										primary: t.KeyMod.WinCtrl | t.KeyCode.Enter,
										win: {
											primary:
												t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.Enter,
										},
										weight: T.$s5b - 5,
									},
								],
							});
						}
						async runWithContext(q, V) {
							V.cell.cellKind === D.CellKind.Markup &&
								V.cell.updateEditState(k.CellEditState.Preview, k.$$Ib),
								await V.notebookEditor.focusNotebookCell(V.cell, "container", {
									skipReveal: !0,
								});
						}
					},
				),
					(0, g.$4X)(
						class extends T.$z5b {
							constructor() {
								super({
									id: z,
									title: (0, n.localize)(7868, null),
									keybinding: {
										primary: t.KeyCode.Delete,
										mac: { primary: t.KeyMod.CtrlCmd | t.KeyCode.Backspace },
										when: o.$Kj.and(
											M.$pJb,
											o.$Kj.not(f.$aMb),
											M.$sJb.toNegated(),
										),
										weight: l.KeybindingWeight.WorkbenchContrib,
									},
									menu: [
										{
											id: g.$XX.NotebookCellDelete,
											when: M.$tJb,
											group: T.$q5b,
										},
										{ id: g.$XX.InteractiveCellDelete, group: T.$q5b },
									],
									icon: L.$$Nb,
								});
							}
							async runWithContext(q, V) {
								if (!V.notebookEditor.hasModel()) return;
								let G;
								const J = q.get(N.$d6).getCellExecution(V.cell.uri)?.state,
									W = q.get(p.$gj);
								if (
									J === D.NotebookCellExecutionState.Executing &&
									W.getValue(D.$56.confirmDeleteRunningCell)
								) {
									const X = q.get(b.$GO),
										Y = (0, n.localize)(7869, null);
									G = await X.confirm({
										type: "question",
										message: (0, n.localize)(7870, null),
										primaryButton: Y,
										checkbox: { label: (0, n.localize)(7871, null) },
									});
								} else G = { confirmed: !0 };
								G.confirmed &&
									(G.checkboxChecked === !0 &&
										(await W.updateValue(D.$56.confirmDeleteRunningCell, !1)),
									(0, I.$F5b)(V.notebookEditor, V.cell));
							}
						},
					),
					(0, g.$4X)(
						class extends T.$z5b {
							constructor() {
								super({
									id: e.$CFc,
									title: (0, n.localize)(7872, null),
									menu: [
										{
											id: g.$XX.NotebookCellTitle,
											when: o.$Kj.and(
												M.$CJb.isEqualTo("code"),
												T.$A5b,
												M.$KJb,
												M.$tJb,
												M.$DJb,
												M.$wJb.toNegated(),
											),
											order: T.CellToolbarOrder.ClearCellOutput,
											group: T.$r5b,
										},
										{
											id: g.$XX.NotebookOutputToolbar,
											when: o.$Kj.and(M.$KJb, M.$tJb, M.$DJb, M.$LJb, M.$wJb),
										},
									],
									keybinding: {
										when: o.$Kj.and(
											M.$pJb,
											o.$Kj.not(f.$aMb),
											M.$KJb,
											M.$tJb,
											M.$DJb,
										),
										primary: t.KeyMod.Alt | t.KeyCode.Delete,
										weight: l.KeybindingWeight.WorkbenchContrib,
									},
									icon: L.$eOb,
								});
							}
							async runWithContext(q, V) {
								const G = q.get(N.$d6),
									K = V.notebookEditor;
								if (!K.hasModel() || !K.textModel.length) return;
								const J = V.cell,
									W = K.textModel.cells.indexOf(J.model);
								if (W < 0) return;
								const X = !K.isReadOnly;
								K.textModel.applyEdits(
									[{ editType: D.CellEditType.Output, index: W, outputs: [] }],
									!0,
									void 0,
									() => {},
									void 0,
									X,
								),
									G.getCellExecution(V.cell.uri)?.state !==
										D.NotebookCellExecutionState.Executing &&
										V.notebookEditor.textModel.applyEdits(
											[
												{
													editType: D.CellEditType.PartialInternalMetadata,
													index: W,
													internalMetadata: {
														runStartTime: null,
														runStartTimeAdjustment: null,
														runEndTime: null,
														executionOrder: null,
														lastRunSuccess: null,
													},
												},
											],
											!0,
											void 0,
											() => {},
											void 0,
											X,
										);
							}
						},
					),
					(0, g.$4X)(
						class extends T.$x5b {
							constructor() {
								super({
									id: B,
									title: (0, n.localize)(7873, null),
									precondition: M.$YJb,
									menu: [
										{
											id: g.$XX.EditorTitle,
											when: o.$Kj.and(
												M.$mJb,
												o.$Kj.notEquals("config.notebook.globalToolbar", !0),
											),
											group: "navigation",
											order: 0,
										},
										{
											id: g.$XX.NotebookToolbar,
											when: o.$Kj.and(
												T.$A5b,
												o.$Kj.equals("config.notebook.globalToolbar", !0),
											),
											group: "navigation/execute",
											order: 10,
										},
									],
									icon: L.$eOb,
								});
							}
							async runWithContext(q, V) {
								const G = q.get(N.$d6),
									K = V.notebookEditor;
								if (!K.hasModel() || !K.textModel.length) return;
								const J = !K.isReadOnly;
								K.textModel.applyEdits(
									K.textModel.cells.map((X, Y) => ({
										editType: D.CellEditType.Output,
										index: Y,
										outputs: [],
									})),
									!0,
									void 0,
									() => {},
									void 0,
									J,
								);
								const W = K.textModel.cells
									.map((X, Y) => {
										if (
											G.getCellExecution(X.uri)?.state !==
											D.NotebookCellExecutionState.Executing
										)
											return {
												editType: D.CellEditType.PartialInternalMetadata,
												index: Y,
												internalMetadata: {
													runStartTime: null,
													runStartTimeAdjustment: null,
													runEndTime: null,
													executionOrder: null,
													lastRunSuccess: null,
												},
											};
									})
									.filter((X) => !!X);
								W.length &&
									V.notebookEditor.textModel.applyEdits(
										W,
										!0,
										void 0,
										() => {},
										void 0,
										J,
									);
							}
						},
					),
					(0, g.$4X)(
						class extends T.$z5b {
							constructor() {
								super({
									id: k.$0Ib,
									title: (0, n.localize)(7874, null),
									metadata: {
										description: (0, n.localize)(7875, null),
										args: [
											{
												name: "range",
												description: "The cell range",
												schema: {
													type: "object",
													required: ["start", "end"],
													properties: {
														start: { type: "number" },
														end: { type: "number" },
													},
												},
											},
											{
												name: "language",
												description: "The target cell language",
												schema: { type: "string" },
											},
										],
									},
								});
							}
							e(q, V, ...G) {
								if (
									!V ||
									typeof V.start != "number" ||
									typeof V.end != "number" ||
									V.start >= V.end
								)
									return;
								const K = G.length && typeof G[0] == "string" ? G[0] : void 0,
									J = this.getEditorContextFromArgsOrActive(q);
								if (
									!(
										!J ||
										!J.notebookEditor.hasModel() ||
										V.start >= J.notebookEditor.getLength()
									)
								)
									return {
										notebookEditor: J.notebookEditor,
										cell: J.notebookEditor.cellAt(V.start),
										language: K,
									};
							}
							async runWithContext(q, V) {
								V.language ? await this.h(V, V.language) : await this.g(q, V);
							}
							async g(q, V) {
								const G = [],
									K = [],
									J = q.get(m.$nM),
									W = q.get(h.$QO),
									X = q.get($.$DJ),
									Y = q.get(O.$RO),
									ie = q.get(A.$f6);
								let ne = V.notebookEditor.activeKernel?.supportedLanguages;
								if (!ne) {
									const re = ie
										.getMatchingKernel(V.notebookEditor.textModel)
										.all.flatMap((le) => le.supportedLanguages);
									ne = re.length > 0 ? re : J.getRegisteredLanguageIds();
								}
								new Set([...ne, "markdown"]).forEach((se) => {
									let re;
									(
										V.cell.cellKind === D.CellKind.Markup
											? se === "markdown"
											: se === V.cell.language
									)
										? (re = (0, n.localize)(7876, null, se))
										: (re = (0, n.localize)(7877, null, se));
									const le = J.getLanguageName(se);
									if (!le) return;
									const oe = {
										label: le,
										iconClasses: (0, a.$BDb)(W, J, this.j(le, J)),
										description: re,
										languageId: se,
									};
									se === "markdown" || se === V.cell.language
										? G.push(oe)
										: K.push(oe);
								}),
									K.sort((se, re) =>
										se.description.localeCompare(re.description),
									);
								const _ = { label: (0, n.localize)(7878, null) },
									te = [
										_,
										{ type: "separator", label: (0, n.localize)(7879, null) },
										...G,
										{ type: "separator" },
										...K,
									],
									Q = await X.pick(te, {
										placeHolder: (0, n.localize)(7880, null),
									}),
									Z =
										Q === _
											? await Y.detectLanguage(V.cell.uri)
											: Q?.languageId;
								Z && (await this.h(V, Z));
							}
							async h(q, V) {
								await x(V, q);
							}
							j(q, V) {
								let G;
								const K = V.getLanguageIdByLanguageName(q);
								if (K) {
									const J = V.getExtensions(K);
									if (J.length) G = w.URI.file(J[0]);
									else {
										const W = V.getFilenames(K);
										W.length && (G = w.URI.file(W[0]));
									}
								}
								return G;
							}
						},
					),
					(0, g.$4X)(
						class extends T.$z5b {
							constructor() {
								super({
									id: k.$9Ib,
									title: (0, n.localize2)(
										7888,
										"Accept Detected Language for Cell",
									),
									f1: !0,
									precondition: o.$Kj.and(M.$tJb, M.$DJb),
									keybinding: {
										primary: t.KeyCode.KeyD | t.KeyMod.Alt | t.KeyMod.Shift,
										weight: l.KeybindingWeight.WorkbenchContrib,
									},
								});
							}
							async runWithContext(q, V) {
								const G = q.get(O.$RO),
									K = q.get(y.$4N),
									X = [
										...(q
											.get(A.$f6)
											.getSelectedOrSuggestedKernel(V.notebookEditor.textModel)
											?.supportedLanguages ?? []),
									];
								X.push("markdown");
								const Y = await G.detectLanguage(V.cell.uri, X);
								Y ? x(Y, V) : K.warn((0, n.localize)(7881, null));
							}
						},
					);
				async function x(H, q) {
					if (H === "markdown" && q.cell?.language !== "markdown") {
						const V = q.notebookEditor.getCellIndex(q.cell);
						await (0, I.$E5b)(
							D.CellKind.Markup,
							{ cell: q.cell, notebookEditor: q.notebookEditor, ui: !0 },
							"markdown",
							i.$EK.markdown,
						);
						const G = q.notebookEditor.cellAt(V);
						G && (await q.notebookEditor.focusNotebookCell(G, "editor"));
					} else if (H !== "markdown" && q.cell?.cellKind === D.CellKind.Markup)
						await (0, I.$E5b)(
							D.CellKind.Code,
							{ cell: q.cell, notebookEditor: q.notebookEditor, ui: !0 },
							H,
						);
					else {
						const V = q.notebookEditor.textModel.cells.indexOf(q.cell.model);
						q.notebookEditor.textModel.applyEdits(
							[
								{
									editType: D.CellEditType.CellLanguage,
									index: V,
									language: H,
								},
							],
							!0,
							void 0,
							() => {},
							void 0,
							!q.notebookEditor.isReadOnly,
						);
					}
				}
				(0, g.$4X)(
					class extends T.$x5b {
						constructor() {
							super({
								id: e.$DFc,
								title: (0, n.localize2)(7889, "Select Indentation"),
								f1: !0,
								precondition: o.$Kj.and(M.$mJb, M.$tJb, M.$DJb),
							});
						}
						async runWithContext(q, V) {
							await this.d(q, V);
						}
						async d(q, V) {
							const G = q.get($.$DJ),
								K = q.get(R.$IY),
								J = q.get(s.$Li),
								W = (0, k.$eJb)(K.activeEditorPane);
							if (!W || W.isDisposed)
								return G.pick([{ label: (0, n.localize)(7882, null) }]);
							if (W.isReadOnly)
								return G.pick([{ label: (0, n.localize)(7883, null) }]);
							const X = [
								new P.$xFc(),
								new P.$yFc(),
								new P.$zFc(),
								new P.$BFc(),
								new P.$AFc(),
							].map((ie) => ({
								id: ie.desc.id,
								label: ie.desc.title.toString(),
								run: () => {
									J.invokeFunction(ie.run);
								},
							}));
							X.splice(3, 0, {
								type: "separator",
								label: (0, n.localize)(7884, null),
							}),
								X.unshift({
									type: "separator",
									label: (0, n.localize)(7885, null),
								});
							const Y = await G.pick(X, {
								placeHolder: (0, n.localize)(7886, null),
								matchOnDetail: !0,
							});
							Y && (Y.run(), V.notebookEditor.focus());
						}
					},
				),
					(0, g.$4X)(
						class extends T.$y5b {
							constructor() {
								super({
									id: e.$EFc,
									title: (0, n.localize)(7887, null),
									keybinding: {
										when: o.$Kj.and(M.$pJb, M.$tJb, o.$Kj.not(f.$aMb)),
										primary: t.KeyMod.CtrlCmd | t.KeyCode.Slash,
										weight: l.KeybindingWeight.WorkbenchContrib,
									},
								});
							}
							async runWithContext(q, V) {
								const G = q.get(r.$aN);
								V.selectedCells.forEach(async (K) => {
									const J = await K.resolveTextModel(),
										W = K.commentOptions,
										X = new c.$Chc(
											G,
											new E.$kL(
												1,
												1,
												J.getLineCount(),
												J.getLineMaxColumn(J.getLineCount()),
											),
											J.getOptions().tabSize,
											c.Type.Toggle,
											W.insertSpace ?? !0,
											W.ignoreEmptyLines ?? !0,
											!1,
										),
										Y = K.getSelections(),
										ie = Y.map((ee) =>
											J._setTrackedRange(
												null,
												ee,
												u.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
											),
										);
									C.$awb.executeCommands(J, Y, [X]);
									const ne = ie
										.map((ee) => J._getTrackedRange(ee))
										.filter((ee) => !!ee)
										.map(
											(ee) =>
												new E.$kL(
													ee.startLineNumber,
													ee.startColumn,
													ee.endLineNumber,
													ee.endColumn,
												),
										);
									K.setSelections(ne ?? []);
								});
							}
						},
					);
			},
		)
