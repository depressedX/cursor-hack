import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/iterator.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../base/common/resources.js';
import '../../../../../base/common/themables.js';
import '../../../../../editor/common/languages/language.js';
import '../../../../../nls.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../common/editor.js';
import '../../../debug/common/debug.js';
import '../../../inlineChat/common/inlineChat.js';
import './cellOperations.js';
import './chat/notebookChatContext.js';
import './chat/notebookChatController.js';
import './coreActions.js';
import '../notebookBrowser.js';
import '../notebookIcons.js';
import '../../common/notebookCommon.js';
import '../../common/notebookContextKeys.js';
import '../../common/notebookEditorInput.js';
import '../../common/notebookExecutionStateService.js';
import '../../../../services/editor/common/editorGroupsService.js';
import '../../../../services/editor/common/editorService.js';
define(
			de[4089],
			he([
				1, 0, 103, 27, 19, 26, 61, 4, 11, 10, 8, 44, 112, 257, 624, 688, 1359,
				238, 108, 284, 70, 176, 360, 190, 66, 18,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*iterator*/,
				i /*keyCodes*/,
				w /*resources*/,
				E /*themables*/,
				C /*language*/,
				d /*nls*/,
				m /*actions*/,
				r /*configuration*/,
				u /*contextkey*/,
				a /*editor*/,
				h /*debug*/,
				c /*inlineChat*/,
				n /*cellOperations*/,
				g /*notebookChatContext*/,
				p /*notebookChatController*/,
				o /*coreActions*/,
				f /*notebookBrowser*/,
				b /*notebookIcons*/,
				s /*notebookCommon*/,
				l /*notebookContextKeys*/,
				y /*notebookEditorInput*/,
				$ /*notebookExecutionStateService*/,
				v /*editorGroupsService*/,
				S /*editorService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wFc = e.$vFc = void 0),
					(b = mt(b));
				const I = "notebook.execute",
					T = "notebook.cancelExecution",
					P = "notebook.interruptExecution",
					k = "notebook.cell.cancelExecution",
					L = "notebook.cell.executeAndFocusContainer",
					D = "notebook.cell.executeAndSelectBelow",
					M = "notebook.cell.executeAndInsertBelow",
					N = "notebook.cell.executeCellAndBelow",
					A = "notebook.cell.executeCellsAbove",
					R = "notebook.renderAllMarkdownCells",
					O = "notebook.revealRunningCell",
					B = "notebook.revealLastFailedCell";
				(e.$vFc = u.$Kj.and(
					l.$CJb.isEqualTo("code"),
					u.$Kj.or(
						u.$Kj.greater(l.$TJb.key, 0),
						u.$Kj.greater(l.$UJb.key, 0),
						l.$XJb,
					),
				)),
					(e.$wFc = u.$Kj.and(e.$vFc, l.$JJb.toNegated()));
				function U(H) {
					for (let q = 0; q < H.notebookEditor.getLength(); q++) {
						const V = H.notebookEditor.cellAt(q);
						V.cellKind === s.CellKind.Markup &&
							V.updateEditState(
								f.CellEditState.Preview,
								"renderAllMarkdownCells",
							);
					}
				}
				async function z(H, q) {
					const V = H.activeGroup;
					if (
						(V && V.activeEditor && V.pinEditor(V.activeEditor), q.ui && q.cell)
					) {
						if (
							(await q.notebookEditor.executeNotebookCells(
								t.Iterable.single(q.cell),
							),
							q.autoReveal)
						) {
							const K = q.notebookEditor.getCellIndex(q.cell);
							q.notebookEditor.revealCellRangeInView({ start: K, end: K + 1 });
						}
					} else if (q.selectedCells?.length || q.cell) {
						const K = q.selectedCells?.length ? q.selectedCells : [q.cell];
						await q.notebookEditor.executeNotebookCells(K);
						const J = K[0];
						if (J && q.autoReveal) {
							const W = q.notebookEditor.getCellIndex(J);
							q.notebookEditor.revealCellRangeInView({ start: W, end: W + 1 });
						}
					}
					let G;
					for (const [, K] of q.notebookEditor.codeEditors)
						if (
							(0, w.$gh)(
								K.getModel()?.uri,
								(q.cell ?? q.selectedCells?.[0])?.uri,
							)
						) {
							G = K;
							break;
						}
				}
				(0, m.$4X)(
					class extends o.$x5b {
						constructor() {
							super({ id: R, title: (0, d.localize)(7890, null) });
						}
						async runWithContext(q, V) {
							U(V);
						}
					},
				),
					(0, m.$4X)(
						class extends o.$x5b {
							constructor() {
								super({
									id: I,
									title: (0, d.localize)(7891, null),
									icon: b.$_Nb,
									metadata: {
										description: (0, d.localize)(7892, null),
										args: [{ name: "uri", description: "The document uri" }],
									},
									menu: [
										{
											id: m.$XX.EditorTitle,
											order: -1,
											group: "navigation",
											when: u.$Kj.and(
												l.$mJb,
												o.$A5b,
												u.$Kj.or(l.$WJb.toNegated(), l.$vJb.toNegated()),
												u.$Kj.notEquals("config.notebook.globalToolbar", !0),
											),
										},
										{
											id: m.$XX.NotebookToolbar,
											order: -1,
											group: "navigation/execute",
											when: u.$Kj.and(
												o.$A5b,
												u.$Kj.or(l.$WJb.toNegated(), l.$vJb.toNegated()),
												u.$Kj.and(l.$vJb, l.$WJb.toNegated())?.negate(),
												u.$Kj.equals("config.notebook.globalToolbar", !0),
											),
										},
									],
								});
							}
							getEditorContextFromArgsOrActive(q, V) {
								return (0, o.$v5b)(q, V) ?? (0, o.$u5b)(q.get(S.$IY));
							}
							async runWithContext(q, V) {
								U(V);
								const K = q
										.get(S.$IY)
										.getEditors(a.EditorsOrder.MOST_RECENTLY_ACTIVE)
										.find(
											(W) =>
												W.editor instanceof y.$TIb &&
												W.editor.viewType ===
													V.notebookEditor.textModel.viewType &&
												W.editor.resource.toString() ===
													V.notebookEditor.textModel.uri.toString(),
										),
									J = q.get(v.$EY);
								return (
									K && J.getGroup(K.groupId)?.pinEditor(K.editor),
									V.notebookEditor.executeNotebookCells()
								);
							}
						},
					),
					(0, m.$4X)(
						class extends o.$y5b {
							constructor() {
								super({
									id: f.$8Ib,
									precondition: e.$wFc,
									title: (0, d.localize)(7893, null),
									keybinding: {
										when: u.$Kj.or(l.$qJb, u.$Kj.and(g.$o1b, c.$XKb)),
										primary: i.KeyMod.WinCtrl | i.KeyCode.Enter,
										win: {
											primary:
												i.KeyMod.CtrlCmd | i.KeyMod.Alt | i.KeyCode.Enter,
										},
										weight: o.$s5b,
									},
									menu: {
										id: m.$XX.NotebookCellExecutePrimary,
										when: e.$wFc,
										group: "inline",
									},
									metadata: {
										description: (0, d.localize)(7894, null),
										args: o.$D5b,
									},
									icon: b.$7Nb,
								});
							}
							parseArgs(q, ...V) {
								return (0, o.$C5b)(q, ...V);
							}
							async runWithContext(q, V) {
								const G = q.get(v.$EY);
								V.ui &&
									(await V.notebookEditor.focusNotebookCell(
										V.cell,
										"container",
										{ skipReveal: !0 },
									));
								const K = p.$y1b.get(V.notebookEditor),
									J = K?.getEditingCell();
								if (K?.hasFocus() && J) {
									const W = G.activeGroup;
									W && W.activeEditor && W.pinEditor(W.activeEditor),
										await V.notebookEditor.executeNotebookCells([J]);
									return;
								}
								await z(G, V);
							}
						},
					),
					(0, m.$4X)(
						class extends o.$y5b {
							constructor() {
								super({
									id: A,
									precondition: e.$vFc,
									title: (0, d.localize)(7895, null),
									menu: [
										{
											id: m.$XX.NotebookCellExecute,
											when: u.$Kj.and(
												e.$vFc,
												u.$Kj.equals(
													`config.${s.$56.consolidatedRunButton}`,
													!0,
												),
											),
										},
										{
											id: m.$XX.NotebookCellTitle,
											order: o.CellToolbarOrder.ExecuteAboveCells,
											group: o.$q5b,
											when: u.$Kj.and(
												e.$vFc,
												u.$Kj.equals(
													`config.${s.$56.consolidatedRunButton}`,
													!1,
												),
											),
										},
									],
									icon: b.$8Nb,
								});
							}
							parseArgs(q, ...V) {
								return (0, o.$C5b)(q, ...V);
							}
							async runWithContext(q, V) {
								let G;
								if (
									(V.ui
										? ((G = V.notebookEditor.getCellIndex(V.cell)),
											await V.notebookEditor.focusNotebookCell(
												V.cell,
												"container",
												{ skipReveal: !0 },
											))
										: (G = Math.min(
												...V.selectedCells.map((K) =>
													V.notebookEditor.getCellIndex(K),
												),
											)),
									typeof G == "number")
								) {
									const K = { start: 0, end: G },
										J = V.notebookEditor.getCellsInRange(K);
									V.notebookEditor.executeNotebookCells(J);
								}
							}
						},
					),
					(0, m.$4X)(
						class extends o.$y5b {
							constructor() {
								super({
									id: N,
									precondition: e.$vFc,
									title: (0, d.localize)(7896, null),
									menu: [
										{
											id: m.$XX.NotebookCellExecute,
											when: u.$Kj.and(
												e.$vFc,
												u.$Kj.equals(
													`config.${s.$56.consolidatedRunButton}`,
													!0,
												),
											),
										},
										{
											id: m.$XX.NotebookCellTitle,
											order: o.CellToolbarOrder.ExecuteCellAndBelow,
											group: o.$q5b,
											when: u.$Kj.and(
												e.$vFc,
												u.$Kj.equals(
													`config.${s.$56.consolidatedRunButton}`,
													!1,
												),
											),
										},
									],
									icon: b.$9Nb,
								});
							}
							parseArgs(q, ...V) {
								return (0, o.$C5b)(q, ...V);
							}
							async runWithContext(q, V) {
								let G;
								if (
									(V.ui
										? ((G = V.notebookEditor.getCellIndex(V.cell)),
											await V.notebookEditor.focusNotebookCell(
												V.cell,
												"container",
												{ skipReveal: !0 },
											))
										: (G = Math.min(
												...V.selectedCells.map((K) =>
													V.notebookEditor.getCellIndex(K),
												),
											)),
									typeof G == "number")
								) {
									const K = { start: G, end: V.notebookEditor.getLength() },
										J = V.notebookEditor.getCellsInRange(K);
									V.notebookEditor.executeNotebookCells(J);
								}
							}
						},
					),
					(0, m.$4X)(
						class extends o.$y5b {
							constructor() {
								super({
									id: L,
									precondition: e.$wFc,
									title: (0, d.localize)(7897, null),
									metadata: {
										description: (0, d.localize)(7898, null),
										args: o.$D5b,
									},
									icon: b.$7Nb,
								});
							}
							parseArgs(q, ...V) {
								return (0, o.$C5b)(q, ...V);
							}
							async runWithContext(q, V) {
								const G = q.get(v.$EY);
								if (V.ui)
									await V.notebookEditor.focusNotebookCell(
										V.cell,
										"container",
										{ skipReveal: !0 },
									);
								else {
									const K = V.selectedCells[0];
									K &&
										(await V.notebookEditor.focusNotebookCell(K, "container", {
											skipReveal: !0,
										}));
								}
								await z(G, V);
							}
						},
					);
				const F = u.$Kj.or(
					u.$Kj.equals(l.$IJb.key, "executing"),
					u.$Kj.equals(l.$IJb.key, "pending"),
				);
				(0, m.$4X)(
					class extends o.$y5b {
						constructor() {
							super({
								id: k,
								precondition: F,
								title: (0, d.localize)(7899, null),
								icon: b.$0Nb,
								menu: {
									id: m.$XX.NotebookCellExecutePrimary,
									when: F,
									group: "inline",
								},
								metadata: {
									description: (0, d.localize)(7900, null),
									args: [
										{
											name: "options",
											description: "The cell range options",
											schema: {
												type: "object",
												required: ["ranges"],
												properties: {
													ranges: {
														type: "array",
														items: [
															{
																type: "object",
																required: ["start", "end"],
																properties: {
																	start: { type: "number" },
																	end: { type: "number" },
																},
															},
														],
													},
													document: {
														type: "object",
														description: "The document uri",
													},
												},
											},
										},
									],
								},
							});
						}
						parseArgs(q, ...V) {
							return (0, o.$C5b)(q, ...V);
						}
						async runWithContext(q, V) {
							return V.ui
								? (await V.notebookEditor.focusNotebookCell(
										V.cell,
										"container",
										{ skipReveal: !0 },
									),
									V.notebookEditor.cancelNotebookCells(
										t.Iterable.single(V.cell),
									))
								: V.notebookEditor.cancelNotebookCells(V.selectedCells);
						}
					},
				),
					(0, m.$4X)(
						class extends o.$z5b {
							constructor() {
								super({
									id: D,
									precondition: u.$Kj.or(e.$wFc, l.$CJb.isEqualTo("markup")),
									title: (0, d.localize)(7901, null),
									keybinding: {
										when: u.$Kj.and(l.$qJb, c.$XKb.negate()),
										primary: i.KeyMod.Shift | i.KeyCode.Enter,
										weight: o.$s5b,
									},
								});
							}
							async runWithContext(q, V) {
								const G = q.get(v.$EY),
									K = V.notebookEditor.getCellIndex(V.cell);
								if (typeof K != "number") return;
								const J = q.get(C.$nM),
									X = q.get(r.$gj).getValue(s.$56.scrollToRevealCell);
								let Y;
								if (
									(X === "none"
										? (Y = { skipReveal: !0 })
										: (Y = {
												revealBehavior:
													X === "fullCell"
														? f.ScrollToRevealBehavior.fullCell
														: f.ScrollToRevealBehavior.firstLine,
											}),
									V.cell.cellKind === s.CellKind.Markup)
								) {
									const ie = V.notebookEditor.cellAt(K + 1);
									if ((V.cell.updateEditState(f.CellEditState.Preview, D), ie))
										await V.notebookEditor.focusNotebookCell(
											ie,
											"container",
											Y,
										);
									else {
										const ne = (0, n.$M5b)(
											J,
											V.notebookEditor,
											K,
											s.CellKind.Markup,
											"below",
										);
										ne &&
											(await V.notebookEditor.focusNotebookCell(
												ne,
												"editor",
												Y,
											));
									}
									return;
								} else {
									const ie = V.notebookEditor.cellAt(K + 1);
									if (ie)
										await V.notebookEditor.focusNotebookCell(
											ie,
											"container",
											Y,
										);
									else {
										const ne = (0, n.$M5b)(
											J,
											V.notebookEditor,
											K,
											s.CellKind.Code,
											"below",
										);
										ne &&
											(await V.notebookEditor.focusNotebookCell(
												ne,
												"editor",
												Y,
											));
									}
									return z(G, V);
								}
							}
						},
					),
					(0, m.$4X)(
						class extends o.$z5b {
							constructor() {
								super({
									id: M,
									precondition: u.$Kj.or(e.$wFc, l.$CJb.isEqualTo("markup")),
									title: (0, d.localize)(7902, null),
									keybinding: {
										when: l.$qJb,
										primary: i.KeyMod.Alt | i.KeyCode.Enter,
										weight: o.$s5b,
									},
								});
							}
							async runWithContext(q, V) {
								const G = q.get(v.$EY),
									K = V.notebookEditor.getCellIndex(V.cell),
									J = q.get(C.$nM),
									W =
										V.cell.focusMode === f.CellFocusMode.Editor
											? "editor"
											: "container",
									X = (0, n.$M5b)(
										J,
										V.notebookEditor,
										K,
										V.cell.cellKind,
										"below",
									);
								X && (await V.notebookEditor.focusNotebookCell(X, W)),
									V.cell.cellKind === s.CellKind.Markup
										? V.cell.updateEditState(f.CellEditState.Preview, M)
										: z(G, V);
							}
						},
					);
				class x extends o.$x5b {
					getEditorContextFromArgsOrActive(q, V) {
						return (0, o.$v5b)(q, V) ?? (0, o.$u5b)(q.get(S.$IY));
					}
					async runWithContext(q, V) {
						return V.notebookEditor.cancelNotebookCells();
					}
				}
				(0, m.$4X)(
					class extends x {
						constructor() {
							super({
								id: T,
								title: (0, d.localize2)(7910, "Stop Execution"),
								icon: b.$0Nb,
								menu: [
									{
										id: m.$XX.EditorTitle,
										order: -1,
										group: "navigation",
										when: u.$Kj.and(
											l.$mJb,
											l.$vJb,
											l.$WJb.toNegated(),
											u.$Kj.notEquals("config.notebook.globalToolbar", !0),
										),
									},
									{
										id: m.$XX.NotebookToolbar,
										order: -1,
										group: "navigation/execute",
										when: u.$Kj.and(
											l.$vJb,
											l.$WJb.toNegated(),
											u.$Kj.equals("config.notebook.globalToolbar", !0),
										),
									},
								],
							});
						}
					},
				),
					(0, m.$4X)(
						class extends x {
							constructor() {
								super({
									id: P,
									title: (0, d.localize2)(7911, "Interrupt"),
									precondition: u.$Kj.and(l.$vJb, l.$WJb),
									icon: b.$0Nb,
									menu: [
										{
											id: m.$XX.EditorTitle,
											order: -1,
											group: "navigation",
											when: u.$Kj.and(
												l.$mJb,
												l.$vJb,
												l.$WJb,
												u.$Kj.notEquals("config.notebook.globalToolbar", !0),
											),
										},
										{
											id: m.$XX.NotebookToolbar,
											order: -1,
											group: "navigation/execute",
											when: u.$Kj.and(
												l.$vJb,
												l.$WJb,
												u.$Kj.equals("config.notebook.globalToolbar", !0),
											),
										},
										{
											id: m.$XX.InteractiveToolbar,
											group: "navigation/execute",
										},
									],
								});
							}
						},
					),
					m.$ZX.appendMenuItem(m.$XX.NotebookToolbar, {
						title: (0, d.localize)(7903, null),
						submenu: m.$XX.NotebookCellExecuteGoTo,
						group: "navigation/execute",
						order: 20,
						icon: E.ThemeIcon.modify(b.$jOb, "spin"),
					}),
					(0, m.$4X)(
						class extends o.$x5b {
							constructor() {
								super({
									id: O,
									title: (0, d.localize)(7904, null),
									tooltip: (0, d.localize)(7905, null),
									shortTitle: (0, d.localize)(7906, null),
									precondition: l.$uJb,
									menu: [
										{
											id: m.$XX.EditorTitle,
											when: u.$Kj.and(
												l.$mJb,
												l.$uJb,
												u.$Kj.notEquals("config.notebook.globalToolbar", !0),
											),
											group: "navigation",
											order: 0,
										},
										{
											id: m.$XX.NotebookCellExecuteGoTo,
											when: u.$Kj.and(
												l.$mJb,
												l.$uJb,
												u.$Kj.equals("config.notebook.globalToolbar", !0),
											),
											group: "navigation/execute",
											order: 20,
										},
										{
											id: m.$XX.InteractiveToolbar,
											when: u.$Kj.and(
												l.$uJb,
												u.$Kj.equals(
													"activeEditor",
													"workbench.editor.interactive",
												),
											),
											group: "navigation",
											order: 10,
										},
									],
									icon: E.ThemeIcon.modify(b.$jOb, "spin"),
								});
							}
							async runWithContext(q, V) {
								const G = q.get($.$d6),
									K = V.notebookEditor.textModel.uri,
									J = G.getCellExecutionsForNotebook(K);
								if (J[0]) {
									const X = this.a(q, K) ?? J[0].cellHandle,
										Y = V.notebookEditor.getCellByHandle(X);
									Y && V.notebookEditor.focusNotebookCell(Y, "container");
								}
							}
							a(q, V) {
								const G = q.get(h.$75);
								for (const K of G.getModel().getSessions())
									for (const J of K.getAllThreads()) {
										const W = J.getTopStackFrame();
										if (W) {
											const X = s.CellUri.parse(W.source.uri);
											if (X && X.notebook.toString() === V.toString())
												return X.handle;
										}
									}
							}
						},
					),
					(0, m.$4X)(
						class extends o.$x5b {
							constructor() {
								super({
									id: B,
									title: (0, d.localize)(7907, null),
									tooltip: (0, d.localize)(7908, null),
									shortTitle: (0, d.localize)(7909, null),
									precondition: l.$AJb,
									menu: [
										{
											id: m.$XX.EditorTitle,
											when: u.$Kj.and(
												l.$mJb,
												l.$AJb,
												l.$uJb.toNegated(),
												u.$Kj.notEquals("config.notebook.globalToolbar", !0),
											),
											group: "navigation",
											order: 0,
										},
										{
											id: m.$XX.NotebookCellExecuteGoTo,
											when: u.$Kj.and(
												l.$mJb,
												l.$AJb,
												l.$uJb.toNegated(),
												u.$Kj.equals("config.notebook.globalToolbar", !0),
											),
											group: "navigation/execute",
											order: 20,
										},
									],
									icon: b.$hOb,
								});
							}
							async runWithContext(q, V) {
								const G = q.get($.$d6),
									K = V.notebookEditor.textModel.uri,
									J = G.getLastFailedCellForNotebook(K);
								if (J !== void 0) {
									const W = V.notebookEditor.getCellByHandle(J);
									W && V.notebookEditor.focusNotebookCell(W, "container");
								}
							}
						},
					);
			},
		)
