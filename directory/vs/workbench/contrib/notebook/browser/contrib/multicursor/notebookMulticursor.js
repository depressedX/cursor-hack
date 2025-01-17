import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../nls.js';
import '../../../../../../base/common/event.js';
import '../../../../../../base/common/keyCodes.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../base/common/map.js';
import '../../../../../../editor/browser/config/editorConfiguration.js';
import '../../../../../../editor/browser/widget/codeEditor/codeEditorWidget.js';
import '../../../../../../editor/common/core/selection.js';
import '../../../../../../editor/common/core/wordHelper.js';
import '../../../../../../editor/common/cursor/cursor.js';
import '../../../../../../editor/common/cursor/cursorDeleteOperations.js';
import '../../../../../../editor/common/cursorCommon.js';
import '../../../../../../editor/common/cursorEvents.js';
import '../../../../../../editor/common/languages/languageConfigurationRegistry.js';
import '../../../../../../editor/common/model/textModel.js';
import '../../../../../../editor/common/services/resolverService.js';
import '../../../../../../editor/common/viewModelEventDispatcher.js';
import '../../../../../../platform/accessibility/common/accessibility.js';
import '../../../../../../platform/actions/common/actions.js';
import '../../../../../../platform/configuration/common/configuration.js';
import '../../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../../../platform/undoRedo/common/undoRedo.js';
import '../../controller/coreActions.js';
import '../../notebookBrowser.js';
import '../../notebookEditorExtensions.js';
import '../../view/cellParts/cellEditorOptions.js';
import '../../../common/notebookContextKeys.js';
import '../../../../../services/editor/common/editorService.js';
import '../../../../../../editor/browser/editorExtensions.js';
import '../../../../../common/contributions.js';
define(
			de[3497],
			he([
				1, 0, 4, 6, 27, 3, 59, 1607, 206, 104, 409, 1199, 943, 346, 248, 152,
				122, 42, 751, 91, 11, 10, 8, 43, 155, 238, 108, 330, 836, 176, 18, 46,
				55,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$AGc = e.$zGc = void 0);
				const N = "notebook.addFindMatchToSelection";
				var A;
				(function (F) {
					(F[(F.Idle = 0)] = "Idle"),
						(F[(F.Selecting = 1)] = "Selecting"),
						(F[(F.Editing = 2)] = "Editing");
				})(A || (A = {})),
					(e.$zGc = {
						IsNotebookMultiSelect: new y.$5j("isNotebookMultiSelect", !1),
						NotebookMultiSelectState: new y.$5j(
							"notebookMultiSelectState",
							A.Idle,
						),
					});
				let R = class extends E.$1c {
					static {
						this.id = "notebook.multiCursorController";
					}
					constructor(x, H, q, V, G, K, J) {
						super(),
							(this.r = x),
							(this.s = H),
							(this.t = q),
							(this.u = V),
							(this.w = G),
							(this.y = K),
							(this.z = J),
							(this.a = A.Idle),
							(this.b = ""),
							(this.c = []),
							(this.f = this.D(new i.$re())),
							(this.onDidChangeAnchorCell = this.f.event),
							(this.h = this.D(new E.$Zc())),
							(this.j = this.D(new E.$Zc())),
							(this.m = new C.$Gc()),
							(this.n = e.$zGc.IsNotebookMultiSelect.bindTo(this.s)),
							(this.q = e.$zGc.NotebookMultiSelectState.bindTo(this.s)),
							this.y.getValue("notebook.multiSelect.enabled") &&
								((this.g = this.r.activeCellAndCodeEditor),
								this.D(
									this.onDidChangeAnchorCell(() => {
										this.C(), this.H();
									}),
								));
					}
					C() {
						this.j.clear(),
							this.c.forEach(async (x) => {
								const q = (
									await this.t.createModelReference(x.cellViewModel.uri)
								).object.textEditorModel;
								if (!q) return;
								const V = this.G(x.cellViewModel),
									G = this.F(),
									K = x.config,
									J = this.j.add(
										new a.$_vb(
											q,
											V,
											G,
											new c.$xsb(q.getLanguageId(), q.getOptions(), K, this.u),
										),
									);
								J.setSelections(
									new f.$Xvb(),
									void 0,
									x.wordSelections,
									n.CursorChangeReason.Explicit,
								),
									this.m.set(x.cellViewModel.uri, J);
							});
					}
					F() {
						return {
							convertViewPositionToModelPosition(x) {
								return x;
							},
							convertViewRangeToModelRange(x) {
								return x;
							},
							validateViewPosition(x, H) {
								return x;
							},
							validateViewRange(x, H) {
								return x;
							},
							convertModelPositionToViewPosition(x, H, q, V) {
								return x;
							},
							convertModelRangeToViewRange(x, H) {
								return x;
							},
							modelPositionIsVisible(x) {
								return !0;
							},
							getModelLineViewLineCount(x) {
								return 1;
							},
							getViewLineNumberOfModelPosition(x, H) {
								return x;
							},
						};
					}
					G(x) {
						return {
							getLineCount() {
								return x.textBuffer.getLineCount();
							},
							getLineContent(H) {
								return x.textBuffer.getLineContent(H);
							},
							getLineMinColumn(H) {
								return x.textBuffer.getLineMinColumn(H);
							},
							getLineMaxColumn(H) {
								return x.textBuffer.getLineMaxColumn(H);
							},
							getLineFirstNonWhitespaceColumn(H) {
								return x.textBuffer.getLineFirstNonWhitespaceColumn(H);
							},
							getLineLastNonWhitespaceColumn(H) {
								return x.textBuffer.getLineLastNonWhitespaceColumn(H);
							},
							normalizePosition(H, q) {
								return H;
							},
							getLineIndentColumn(H) {
								return (0, p.$_X)(x.textBuffer.getLineContent(H)) + 1;
							},
						};
					}
					H() {
						if ((this.h.clear(), !this.g))
							throw new Error("Anchor cell is undefined");
						this.h.add(
							this.g[1].onWillType((x) => {
								const H = new f.$Xvb();
								this.c.forEach((q) => {
									const V = this.m.get(q.cellViewModel.uri);
									V &&
										q.cellViewModel.handle !== this.g?.[0].handle &&
										V.type(H, x, "keyboard");
								});
							}),
						),
							this.h.add(
								this.g[1].onDidType(() => {
									(this.a = A.Editing), this.q.set(A.Editing);
									const x = this.m.get(this.g[0].uri);
									if (!x) return;
									const H = this.r.activeCodeEditor?.getSelections();
									H &&
										(x.setSelections(
											new f.$Xvb(),
											"keyboard",
											H,
											n.CursorChangeReason.Explicit,
										),
										this.c.forEach((q) => {
											const V = this.m.get(q.cellViewModel.uri);
											V &&
												((q.initialSelection = V.getSelection()),
												(q.wordSelections = []));
										}),
										this.M());
								}),
							),
							this.h.add(
								this.g[1].onDidChangeCursorSelection((x) => {
									(x.source === "mouse" || x.source === "deleteRight") &&
										this.resetToIdleState();
								}),
							),
							this.h.add(
								this.g[1].onDidBlurEditorWidget(() => {
									(this.a === A.Selecting || this.a === A.Editing) &&
										this.resetToIdleState();
								}),
							);
					}
					I() {
						if (!this.g?.[1].getModel()) return;
						const H = new C.$Gc(),
							q = [];
						this.c.forEach((V) => {
							if (!V.undoRedoHistory) return;
							q.push(V.cellViewModel.uri);
							const K = this.z.getElements(V.cellViewModel.uri).past.slice(),
								J = V.undoRedoHistory.past.slice(),
								W = K.slice(J.length);
							W.length !== 0 &&
								(H.set(V.cellViewModel.uri, W),
								this.z.removeElements(V.cellViewModel.uri),
								J.forEach((X) => {
									this.z.pushElement(X);
								}));
						}),
							this.z.pushElement({
								type: v.UndoRedoElementType.Workspace,
								resources: q,
								label: "Multi Cursor Edit",
								code: "multiCursorEdit",
								confirmBeforeUndo: !1,
								undo: async () => {
									H.forEach(async (V) => {
										V.reverse().forEach(async (G) => {
											await G.undo();
										});
									});
								},
								redo: async () => {
									H.forEach(async (V) => {
										V.forEach(async (G) => {
											await G.redo();
										});
									});
								},
							});
					}
					resetToIdleState() {
						(this.a = A.Idle),
							this.q.set(A.Idle),
							this.n.set(!1),
							this.I(),
							this.c.forEach((x) => {
								this.N(x), x.cellViewModel.setSelections([x.initialSelection]);
							}),
							this.h.clear(),
							this.j.clear(),
							this.m.clear(),
							(this.c = []);
					}
					async findAndTrackNextSelection(x) {
						if (this.a === A.Idle) {
							const H = x.textModel;
							if (!H) return;
							const q = x.getSelections()[0],
								V = this.O(q, H);
							if (!V) return;
							this.b = V.word;
							const G = new r.$kL(
								q.startLineNumber,
								V.startColumn,
								q.startLineNumber,
								V.endColumn,
							);
							if (
								(x.setSelections([G]),
								(this.g = this.r.activeCellAndCodeEditor),
								!this.g || this.g[0].handle !== x.handle)
							)
								throw new Error(
									"Active cell is not the same as the cell passed as context",
								);
							if (!(this.g[1] instanceof m.$rwb))
								throw new Error(
									"Active cell is not an instance of CodeEditorWidget",
								);
							H.pushStackElement(), (this.c = []);
							const K = this.J(this.g[0]),
								J = {
									cellViewModel: x,
									initialSelection: q,
									wordSelections: [G],
									config: K,
									decorationIds: [],
									undoRedoHistory: this.z.getElements(x.uri),
								};
							this.c.push(J),
								this.L(J),
								this.n.set(!0),
								(this.a = A.Selecting),
								this.q.set(A.Selecting),
								this.f.fire();
						} else if (this.a === A.Selecting) {
							const H = this.r.textModel;
							if (!H) return;
							const q = this.r.getCellIndex(x);
							if (q === void 0) return;
							const V = H.findNextMatch(
								this.b,
								{
									cellIndex: q,
									position: x
										.getSelections()
										[x.getSelections().length - 1].getEndPosition(),
								},
								!1,
								!0,
								u.$SK,
							);
							if (!V) return;
							const G = this.r.getCellByHandle(V.cell.handle);
							if (!G) return;
							let K;
							if (V.cell.handle !== x.handle) {
								await this.r.revealRangeInViewAsync(G, V.match.range),
									this.r.focusNotebookCell(G, "editor");
								const J = G.getSelections()[0],
									W = r.$kL.fromRange(V.match.range, r.SelectionDirection.LTR);
								if (
									(G.setSelections([W]),
									(this.g = this.r.activeCellAndCodeEditor),
									!this.g || !(this.g[1] instanceof m.$rwb))
								)
									throw new Error(
										"Active cell is not an instance of CodeEditorWidget",
									);
								(await G.resolveTextModel()).pushStackElement(),
									(K = {
										cellViewModel: G,
										initialSelection: J,
										wordSelections: [W],
										config: this.J(this.g[0]),
										decorationIds: [],
										undoRedoHistory: this.z.getElements(G.uri),
									}),
									this.c.push(K),
									this.f.fire();
							} else
								(K = this.c.find(
									(J) => J.cellViewModel.handle === V.cell.handle,
								)),
									K.wordSelections.push(
										r.$kL.fromRange(V.match.range, r.SelectionDirection.LTR),
									),
									G.setSelections(K.wordSelections);
							this.L(K);
						}
					}
					async deleteLeft() {
						this.c.forEach((x) => {
							const H = this.m.get(x.cellViewModel.uri);
							if (!H) return;
							const [, q] = h.$Etb.deleteLeft(
									H.getPrevEditOperationType(),
									H.context.cursorConfig,
									H.context.model,
									H.getSelections(),
									H.getAutoClosedCharacters(),
								),
								V = a.$awb.executeCommands(
									H.context.model,
									H.getSelections(),
									q,
								);
							V &&
								H.setSelections(
									new f.$Xvb(),
									void 0,
									V,
									n.CursorChangeReason.Explicit,
								);
						});
					}
					async undo() {
						const x = [];
						for (const H of this.c) {
							const q = await H.cellViewModel.resolveTextModel();
							q && x.push(q);
						}
						await Promise.all(x.map((H) => H.undo()));
					}
					async redo() {
						const x = [];
						for (const H of this.c) {
							const q = await H.cellViewModel.resolveTextModel();
							q && x.push(q);
						}
						await Promise.all(x.map((H) => H.redo()));
					}
					J(x) {
						const q = new P.$J3b(
							this.r.getBaseCellEditorOptions(x.language),
							this.r.notebookOptions,
							this.y,
						).getUpdatedValue(x.internalMetadata, x.uri);
						return new d.$ssb(!1, s.$XX.EditorContent, q, null, this.w);
					}
					L(x) {
						const H = [];
						x.wordSelections.forEach((q) => {
							H.push({
								range: q,
								options: {
									description: "",
									className: "nb-multicursor-selection",
								},
							});
						}),
							(x.decorationIds = x.cellViewModel.deltaModelDecorations(
								x.decorationIds,
								H,
							));
					}
					M() {
						this.c.forEach((x) => {
							if (this.r.getCellIndex(x.cellViewModel) === void 0) return;
							const q = this.m.get(x.cellViewModel.uri);
							if (!q) return;
							const G = q
								.getSelections()
								?.map((K) => ({
									range: K,
									options: {
										description: "",
										className: "nb-multicursor-selection",
									},
								}));
							x.decorationIds = x.cellViewModel.deltaModelDecorations(
								x.decorationIds,
								G ?? [],
							);
						});
					}
					N(x) {
						x.decorationIds = x.cellViewModel.deltaModelDecorations(
							x.decorationIds,
							[],
						);
					}
					O(x, H) {
						const q = x.startLineNumber,
							V = x.startColumn;
						return H.isDisposed()
							? null
							: H.getWordAtPosition({ lineNumber: q, column: V });
					}
					dispose() {
						super.dispose(),
							this.h.dispose(),
							this.j.dispose(),
							this.c.forEach((x) => {
								this.N(x);
							}),
							(this.c = []);
					}
				};
				(e.$AGc = R),
					(e.$AGc = R =
						Ne(
							[
								j(1, y.$6j),
								j(2, o.$MO),
								j(3, g.$aN),
								j(4, b.$XK),
								j(5, l.$gj),
								j(6, v.$GN),
							],
							R,
						));
				class O extends S.$x5b {
					constructor() {
						super({
							id: N,
							title: (0, t.localize)(7778, null),
							keybinding: {
								when: y.$Kj.and(
									y.$Kj.equals("config.notebook.multiSelect.enabled", !0),
									k.$mJb,
									k.$FJb,
								),
								primary: w.KeyMod.CtrlCmd | w.KeyCode.KeyD,
								weight: $.KeybindingWeight.WorkbenchContrib,
							},
						});
					}
					async runWithContext(x, H) {
						const q = x.get(L.$IY),
							V = (0, I.$eJb)(q.activeEditorPane);
						if (!V || !H.cell) return;
						V.getContribution(R.id).findAndTrackNextSelection(H.cell);
					}
				}
				class B extends S.$x5b {
					constructor() {
						super({
							id: "noteMultiCursor.exit",
							title: (0, t.localize)(7779, null),
							keybinding: {
								when: y.$Kj.and(
									y.$Kj.equals("config.notebook.multiSelect.enabled", !0),
									k.$mJb,
									e.$zGc.IsNotebookMultiSelect,
								),
								primary: w.KeyCode.Escape,
								weight: $.KeybindingWeight.WorkbenchContrib,
							},
						});
					}
					async runWithContext(x, H) {
						const q = x.get(L.$IY),
							V = (0, I.$eJb)(q.activeEditorPane);
						if (!V) return;
						V.getContribution(R.id).resetToIdleState();
					}
				}
				class U extends S.$x5b {
					constructor() {
						super({
							id: "noteMultiCursor.deleteLeft",
							title: (0, t.localize)(7780, null),
							keybinding: {
								when: y.$Kj.and(
									y.$Kj.equals("config.notebook.multiSelect.enabled", !0),
									k.$mJb,
									e.$zGc.IsNotebookMultiSelect,
									y.$Kj.or(
										e.$zGc.NotebookMultiSelectState.isEqualTo(A.Selecting),
										e.$zGc.NotebookMultiSelectState.isEqualTo(A.Editing),
									),
								),
								primary: w.KeyCode.Backspace,
								weight: $.KeybindingWeight.WorkbenchContrib,
							},
						});
					}
					async runWithContext(x, H) {
						const q = x.get(L.$IY),
							V = (0, I.$eJb)(q.activeEditorPane);
						if (!V) return;
						V.getContribution(R.id).deleteLeft();
					}
				}
				let z = class extends E.$1c {
					static {
						this.ID = "workbench.contrib.notebook.multiCursorUndoRedo";
					}
					constructor(x, H) {
						if (
							(super(),
							(this.a = x),
							(this.b = H),
							!this.b.getValue("notebook.multiSelect.enabled"))
						)
							return;
						const q = 10005;
						this.D(
							D.$stb.addImplementation(
								q,
								"notebook-multicursor-undo-redo",
								() => {
									const V = (0, I.$eJb)(this.a.activeEditorPane);
									return !V || !V.hasModel()
										? !1
										: V.getContribution(R.id).undo();
								},
								y.$Kj.and(
									y.$Kj.equals("config.notebook.multiSelect.enabled", !0),
									k.$mJb,
									e.$zGc.IsNotebookMultiSelect,
								),
							),
						),
							this.D(
								D.$ttb.addImplementation(
									q,
									"notebook-multicursor-undo-redo",
									() => {
										const V = (0, I.$eJb)(this.a.activeEditorPane);
										return !V || !V.hasModel()
											? !1
											: V.getContribution(R.id).redo();
									},
									y.$Kj.and(
										y.$Kj.equals("config.notebook.multiSelect.enabled", !0),
										k.$mJb,
										e.$zGc.IsNotebookMultiSelect,
									),
								),
							);
					}
				};
				(z = Ne([j(0, L.$IY), j(1, l.$gj)], z)),
					(0, T.$PKb)(R.id, R),
					(0, s.$4X)(O),
					(0, s.$4X)(B),
					(0, s.$4X)(U),
					(0, M.$s6)(z.ID, z, M.WorkbenchPhase.BlockRestore);
			},
		),
		