import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arrays.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import './extHost.protocol.js';
import './extHostTextEditor.js';
import './extHostTypeConverters.js';
import './extHostTypes.js';
define(
			Pe[587],
			Ne([1, 0, 20, 4, 3, 6, 305, 17, 11]),
			function (we, t, e, r, S, N, P, I, l) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$khd = void 0),
					(e = tt(e)),
					(I = tt(I));
				class n extends S.$1c {
					constructor(y, d) {
						super(),
							(this.m = d),
							(this.a = new r.$re()),
							(this.b = new r.$re()),
							(this.c = new r.$re()),
							(this.f = new r.$re()),
							(this.g = new r.$re()),
							(this.h = new r.$re()),
							(this.onDidChangeTextEditorSelection = this.a.event),
							(this.onDidChangeTextEditorOptions = this.b.event),
							(this.onDidChangeTextEditorVisibleRanges = this.c.event),
							(this.onDidChangeTextEditorViewColumn = this.f.event),
							(this.onDidChangeActiveTextEditor = this.g.event),
							(this.onDidChangeVisibleTextEditors = this.h.event),
							(this.j = y.getProxy(N.$lbb.MainThreadTextEditors)),
							this.D(
								this.m.onDidChangeVisibleTextEditors((k) => this.h.fire(k)),
							),
							this.D(this.m.onDidChangeActiveTextEditor((k) => this.g.fire(k)));
					}
					getActiveTextEditor() {
						return this.m.activeEditor();
					}
					getVisibleTextEditors(y) {
						const d = this.m.allEditors();
						return y ? d : d.map((k) => k.value);
					}
					async showTextDocument(y, d, k) {
						let g;
						typeof d == "number"
							? (g = { position: I.ViewColumn.from(d), preserveFocus: k })
							: typeof d == "object"
								? (g = {
										position: I.ViewColumn.from(d.viewColumn),
										preserveFocus: d.preserveFocus,
										selection:
											typeof d.selection == "object"
												? I.Range.from(d.selection)
												: void 0,
										pinned: typeof d.preview == "boolean" ? !d.preview : void 0,
									})
								: (g = { preserveFocus: !1 });
						const c = await this.j.$tryShowTextDocument(y.uri, g),
							h = c && this.m.getEditor(c);
						if (h) return h.value;
						throw c
							? new Error(
									`Could NOT open editor for "${y.uri.toString()}" because another editor opened in the meantime.`,
								)
							: new Error(`Could NOT open editor for "${y.uri.toString()}".`);
					}
					createTextEditorDecorationType(y, d) {
						return new P.$Tdb(this.j, y, d).value;
					}
					$acceptEditorPropertiesChanged(y, d) {
						const k = this.m.getEditor(y);
						if (!k) throw new Error("unknown text editor");
						if ((d.options && k._acceptOptions(d.options), d.selections)) {
							const g = d.selections.selections.map(I.Selection.to);
							k._acceptSelections(g);
						}
						if (d.visibleRanges) {
							const g = e.$Lb(d.visibleRanges.map(I.Range.to));
							k._acceptVisibleRanges(g);
						}
						if (
							(d.options &&
								this.b.fire({
									textEditor: k.value,
									options: {
										...d.options,
										lineNumbers: I.TextEditorLineNumbersStyle.to(
											d.options.lineNumbers,
										),
									},
								}),
							d.selections)
						) {
							const g = l.TextEditorSelectionChangeKind.fromValue(
									d.selections.source,
								),
								c = d.selections.selections.map(I.Selection.to);
							this.a.fire({ textEditor: k.value, selections: c, kind: g });
						}
						if (d.visibleRanges) {
							const g = e.$Lb(d.visibleRanges.map(I.Range.to));
							this.c.fire({ textEditor: k.value, visibleRanges: g });
						}
					}
					$acceptEditorPositionData(y) {
						for (const d in y) {
							const k = this.m.getEditor(d);
							if (!k) throw new Error("Unknown text editor");
							const g = I.ViewColumn.to(y[d]);
							k.value.viewColumn !== g &&
								(k._acceptViewColumn(g),
								this.f.fire({ textEditor: k.value, viewColumn: g }));
						}
					}
					getDiffInformation(y) {
						return Promise.resolve(this.j.$getDiffInformation(y));
					}
				}
				t.$khd = n;
			},
		),
		