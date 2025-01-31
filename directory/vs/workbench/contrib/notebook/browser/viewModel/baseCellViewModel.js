import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/mime.js';
import '../../../../../editor/common/core/range.js';
import '../../../../../editor/common/core/selection.js';
import '../../../../../editor/common/editorCommon.js';
import '../../../../../editor/common/model/textModelSearch.js';
import '../../../codeEditor/browser/toggleWordWrap.js';
import '../../../inlineChat/browser/inlineChatController.js';
import '../notebookBrowser.js';
define(
			de[1959],
			he([1, 0, 6, 3, 266, 17, 104, 98, 543, 1026, 427, 108]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*mime*/,
 E /*range*/,
 C /*selection*/,
 d /*editorCommon*/,
 m /*textModelSearch*/,
 r /*toggleWordWrap*/,
 u /*inlineChatController*/,
 a /*notebookBrowser*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$11b = void 0),
					(d = mt(d));
				class h extends i.$1c {
					get handle() {
						return this.model.handle;
					}
					get uri() {
						return this.model.uri;
					}
					get lineCount() {
						return this.model.textBuffer.getLineCount();
					}
					get metadata() {
						return this.model.metadata;
					}
					get internalMetadata() {
						return this.model.internalMetadata;
					}
					get language() {
						return this.model.language;
					}
					get mime() {
						if (typeof this.model.mime == "string") return this.model.mime;
						switch (this.language) {
							case "markdown":
								return w.$EK.markdown;
							default:
								return w.$EK.text;
						}
					}
					get lineNumbers() {
						return this.f;
					}
					set lineNumbers(n) {
						n !== this.f &&
							((this.f = n), this.b.fire({ cellLineNumberChanged: !0 }));
					}
					get commentOptions() {
						return this.g;
					}
					set commentOptions(n) {
						this.g = n;
					}
					get focusMode() {
						return this.h;
					}
					set focusMode(n) {
						this.h !== n &&
							((this.h = n), this.b.fire({ focusModeChanged: !0 }));
					}
					get editorAttached() {
						return !!this.j;
					}
					get textModel() {
						return this.model.textModel;
					}
					hasModel() {
						return !!this.textModel;
					}
					get dragging() {
						return this.G;
					}
					set dragging(n) {
						(this.G = n), this.b.fire({ dragStateChanged: !0 });
					}
					get isInputCollapsed() {
						return this.I;
					}
					set isInputCollapsed(n) {
						(this.I = n), this.b.fire({ inputCollapsedChanged: !0 });
					}
					get isOutputCollapsed() {
						return this.J;
					}
					set isOutputCollapsed(n) {
						(this.J = n), this.b.fire({ outputCollapsedChanged: !0 });
					}
					set commentHeight(n) {
						this.L !== n &&
							((this.L = n),
							this.layoutChange(
								{ commentHeight: !0 },
								"BaseCellViewModel#commentHeight",
							));
					}
					constructor(n, g, p, o, f, b, s, l) {
						super(),
							(this.viewType = n),
							(this.model = g),
							(this.id = p),
							(this.N = o),
							(this.O = f),
							(this.P = b),
							(this.Q = s),
							(this.R = l),
							(this.a = this.D(new t.$re())),
							(this.onDidChangeEditorAttachState = this.a.event),
							(this.b = this.D(new t.$re())),
							(this.onDidChangeState = this.b.event),
							(this.c = a.CellEditState.Preview),
							(this.f = "inherit"),
							(this.h = a.CellFocusMode.Container),
							(this.m = []),
							(this.n = null),
							(this.q = null),
							(this.r = new Map()),
							(this.t = this.D(new i.$2c())),
							(this.u = this.D(new t.$re())),
							(this.onCellDecorationsChanged = this.u.event),
							(this.w = new Map()),
							(this.y = 0),
							(this.z = new Map()),
							(this.C = this.D(new t.$re())),
							(this.onDidChangeCellStatusBarItems = this.C.event),
							(this.F = 0),
							(this.G = !1),
							(this.I = !1),
							(this.J = !1),
							(this.L = 0),
							(this.M = !1),
							(this.Z = ""),
							this.D(
								g.onDidChangeMetadata(() => {
									this.b.fire({ metadataChanged: !0 });
								}),
							),
							this.D(
								g.onDidChangeInternalMetadata((y) => {
									this.b.fire({ internalMetadataChanged: !0 }),
										y.lastRunSuccessChanged && this.layoutChange({});
								}),
							),
							this.D(
								this.O.onDidChangeConfiguration((y) => {
									y.affectsConfiguration("notebook.lineNumbers") &&
										(this.lineNumbers = "inherit");
								}),
							),
							this.model.collapseState?.inputCollapsed && (this.I = !0),
							this.model.collapseState?.outputCollapsed && (this.J = !0),
							(this.g = this.O.getValue("editor.comments", {
								overrideIdentifier: this.language,
							})),
							this.D(
								this.O.onDidChangeConfiguration((y) => {
									y.affectsConfiguration("editor.comments") &&
										(this.g = this.O.getValue("editor.comments", {
											overrideIdentifier: this.language,
										}));
								}),
							);
					}
					assertTextModelAttached() {
						return !!(
							this.textModel &&
							this.j &&
							this.j.getModel() === this.textModel
						);
					}
					attachTextEditor(n, g) {
						if (!n.hasModel())
							throw new Error("Invalid editor: model is missing");
						if (this.j === n) {
							this.m.length === 0 &&
								(this.m.push(
									this.j.onDidChangeCursorSelection(() => {
										this.b.fire({ selectionChanged: !0 });
									}),
								),
								this.b.fire({ selectionChanged: !0 }));
							return;
						}
						if (
							((this.j = n),
							this.n
								? this.W(this.n)
								: g &&
									this.W({
										contributionsState: {},
										cursorState: [],
										viewState: {
											scrollLeft: 0,
											firstPosition: { lineNumber: 1, column: 1 },
											firstPositionDeltaTop:
												this.N.notebookOptions.getLayoutConfiguration()
													.editorTopPadding,
										},
									}),
							this.q && (0, r.$G1b)(n.getModel(), this.q, this.R),
							this.M)
						)
							return;
						n.changeDecorations((o) => {
							this.w.forEach((f, b) => {
								if (b.startsWith("_lazy_")) {
									const s = o.addDecoration(f.options.range, f.options.options);
									this.w.get(b).id = s;
								} else {
									const s = o.addDecoration(f.options.range, f.options.options);
									this.w.get(b).id = s;
								}
							});
						}),
							this.m.push(
								n.onDidChangeCursorSelection(() => {
									this.b.fire({ selectionChanged: !0 });
								}),
							);
						const p = u.$Z1b.get(this.j);
						p &&
							this.m.push(
								p.onWillStartSession(() => {
									this.textBuffer.getLength() === 0 &&
										this.enableAutoLanguageDetection();
								}),
							),
							this.b.fire({ selectionChanged: !0 }),
							this.a.fire();
					}
					detachTextEditor() {
						this.S(),
							this.U(),
							this.j?.changeDecorations((n) => {
								this.w.forEach((g) => {
									const p = g.id;
									p && n.removeDecoration(p);
								});
							}),
							(this.j = void 0),
							(0, i.$Vc)(this.m),
							(this.m = []),
							this.a.fire(),
							this.H && (this.H.dispose(), (this.H = void 0)),
							this.t.clear();
					}
					getText() {
						return this.model.getValue();
					}
					getAlternativeId() {
						return this.model.alternativeId;
					}
					getTextLength() {
						return this.model.getTextLength();
					}
					enableAutoLanguageDetection() {
						this.model.enableAutoLanguageDetection();
					}
					S() {
						this.j && (this.n = this.j.saveViewState());
					}
					U() {
						!this.j ||
							!this.j.hasModel() ||
							(this.q = (0, r.$H1b)(this.j.getModel(), this.R));
					}
					saveEditorViewState() {
						return this.j && (this.n = this.j.saveViewState()), this.n;
					}
					restoreEditorViewState(n, g) {
						this.n = n;
					}
					W(n) {
						n && this.j?.restoreViewState(n);
					}
					addModelDecoration(n) {
						if (!this.j) {
							const p = ++this.y,
								o = `_lazy_${this.id};${p}`;
							return this.w.set(o, { options: n }), o;
						}
						let g;
						return (
							this.j.changeDecorations((p) => {
								(g = p.addDecoration(n.range, n.options)),
									this.w.set(g, { id: g, options: n });
							}),
							g
						);
					}
					removeModelDecoration(n) {
						const g = this.w.get(n);
						this.j &&
							g &&
							g.id !== void 0 &&
							this.j.changeDecorations((p) => {
								p.removeDecoration(g.id);
							}),
							this.w.delete(n);
					}
					deltaModelDecorations(n, g) {
						return (
							n.forEach((o) => {
								this.removeModelDecoration(o);
							}),
							g.map((o) => this.addModelDecoration(o))
						);
					}
					X(n) {
						const g = this.r.get(n);
						if ((this.r.delete(n), g)) {
							for (const p of this.r.values())
								g.className === p.className && (g.className = void 0),
									g.outputClassName === p.outputClassName &&
										(g.outputClassName = void 0),
									g.gutterClassName === p.gutterClassName &&
										(g.gutterClassName = void 0),
									g.topClassName === p.topClassName &&
										(g.topClassName = void 0);
							this.u.fire({ added: [], removed: [g] });
						}
					}
					Y(n) {
						const g = ++this.y,
							p = `_cell_${this.id};${g}`;
						return (
							this.r.set(p, n), this.u.fire({ added: [n], removed: [] }), p
						);
					}
					getCellDecorations() {
						return [...this.r.values()];
					}
					getCellDecorationRange(n) {
						return this.j
							? (this.j.getModel()?.getDecorationRange(n) ?? null)
							: null;
					}
					deltaCellDecorations(n, g) {
						return (
							n.forEach((o) => {
								this.X(o);
							}),
							g.map((o) => this.Y(o))
						);
					}
					deltaCellStatusBarItems(n, g) {
						n.forEach((o) => {
							this.z.get(o) && this.z.delete(o);
						});
						const p = g.map((o) => {
							const f = ++this.F,
								b = `_cell_${this.id};${f}`;
							return this.z.set(b, o), b;
						});
						return this.C.fire(), p;
					}
					getCellStatusBarItems() {
						return Array.from(this.z.values());
					}
					revealRangeInCenter(n) {
						this.j?.revealRangeInCenter(n, d.ScrollType.Immediate);
					}
					setSelection(n) {
						this.j?.setSelection(n);
					}
					setSelections(n) {
						n.length &&
							(this.j
								? this.j?.setSelections(n)
								: this.n &&
									(this.n.cursorState = n.map((g) => ({
										inSelectionMode: !g.isEmpty(),
										selectionStart: g.getStartPosition(),
										position: g.getEndPosition(),
									}))));
					}
					getSelections() {
						return (
							this.j?.getSelections() ??
							this.n?.cursorState.map(
								(n) =>
									new C.$kL(
										n.selectionStart.lineNumber,
										n.selectionStart.column,
										n.position.lineNumber,
										n.position.column,
									),
							) ??
							[]
						);
					}
					getSelectionsStartPosition() {
						return this.j
							? this.j.getSelections()?.map((g) => g.getStartPosition())
							: this.n?.cursorState?.map((g) => g.selectionStart);
					}
					getLineScrollTopOffset(n) {
						if (!this.j) return 0;
						const g = this.N.notebookOptions.computeEditorPadding(
							this.internalMetadata,
							this.uri,
						);
						return this.j.getTopForLineNumber(n) + g.top;
					}
					getPositionScrollTopOffset(n) {
						if (!this.j) return 0;
						const g =
								n instanceof C.$kL ? n.getPosition() : n.getStartPosition(),
							p = this.N.notebookOptions.computeEditorPadding(
								this.internalMetadata,
								this.uri,
							);
						return this.j.getTopForPosition(g.lineNumber, g.column) + p.top;
					}
					cursorAtLineBoundary() {
						if (!this.j || !this.textModel || !this.j.hasTextFocus())
							return a.CursorAtLineBoundary.None;
						const n = this.j.getSelection();
						if (!n || !n.isEmpty()) return a.CursorAtLineBoundary.None;
						const g = this.textModel.getLineLength(n.startLineNumber);
						if (g === 0) return a.CursorAtLineBoundary.Both;
						switch (n.startColumn) {
							case 1:
								return a.CursorAtLineBoundary.Start;
							case g + 1:
								return a.CursorAtLineBoundary.End;
							default:
								return a.CursorAtLineBoundary.None;
						}
					}
					cursorAtBoundary() {
						if (!this.j || !this.textModel) return a.CursorAtBoundary.None;
						const n = this.j.getSelection();
						if (!n || !n.isEmpty()) return a.CursorAtBoundary.None;
						const g = this.j.getTopForPosition(1, 1),
							p = this.j.getTopForPosition(
								this.textModel.getLineCount(),
								this.textModel.getLineLength(this.textModel.getLineCount()),
							),
							o = this.j.getTopForPosition(n.startLineNumber, n.startColumn);
						return o === p
							? o === g
								? a.CursorAtBoundary.Both
								: a.CursorAtBoundary.Bottom
							: o === g
								? a.CursorAtBoundary.Top
								: a.CursorAtBoundary.None;
					}
					get editStateSource() {
						return this.Z;
					}
					updateEditState(n, g) {
						(this.Z = g),
							n !== this.c &&
								((this.c = n),
								this.b.fire({ editStateChanged: !0 }),
								this.c === a.CellEditState.Preview &&
									(this.focusMode = a.CellFocusMode.Container));
					}
					getEditState() {
						return this.c;
					}
					get textBuffer() {
						return this.model.textBuffer;
					}
					async resolveTextModel() {
						if (!this.H || !this.textModel) {
							if (
								((this.H = await this.P.createModelReference(this.uri)), this.M)
							)
								return this.textModel;
							if (!this.H)
								throw new Error(`Cannot resolve text model for ${this.uri}`);
							this.t.value = this.textModel.onDidChangeContent(() => this.$());
						}
						return this.textModel;
					}
					ab(n, g) {
						let p = [];
						const o = this.textBuffer.getLineCount(),
							f = g.findScope?.selectedTextRanges ?? [
								new E.$iL(1, 1, o, this.textBuffer.getLineLength(o) + 1),
							];
						if (this.assertTextModelAttached())
							p = this.textModel.findMatches(
								n,
								f,
								g.regex || !1,
								g.caseSensitive || !1,
								(g.wholeWord && g.wordSeparators) || null,
								g.regex || !1,
							);
						else {
							const s = new m.$XU(
								n,
								g.regex || !1,
								g.caseSensitive || !1,
								(g.wholeWord && g.wordSeparators) || null,
							).parseSearchRequest();
							if (!s) return null;
							f.forEach((l) => {
								p.push(
									...this.textBuffer.findMatchesLineByLine(
										new E.$iL(
											l.startLineNumber,
											l.startColumn,
											l.endLineNumber,
											l.endColumn,
										),
										s,
										g.regex || !1,
										1e3,
									),
								);
							});
						}
						return p;
					}
					dispose() {
						(this.M = !0),
							super.dispose(),
							(0, i.$Vc)(this.m),
							this.Q.getUriComparisonKey(this.uri) === this.uri.toString() &&
								this.Q.removeElements(this.uri),
							this.H?.dispose();
					}
					toJSON() {
						return { handle: this.handle };
					}
				}
				e.$11b = h;
			},
		)
