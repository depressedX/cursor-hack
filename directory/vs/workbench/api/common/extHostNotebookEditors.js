import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../platform/log/common/log.js';
import './extHostTypeConverters.js';
define(Pe[576], Ne([1, 0, 4, 14, 17]), function (we, t, e, r, S) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }),
				(t.$Pid = void 0),
				(S = tt(S));
			let N = class {
				constructor(I, l) {
					(this.c = I),
						(this.d = l),
						(this.a = new e.$re()),
						(this.b = new e.$re()),
						(this.onDidChangeNotebookEditorSelection = this.a.event),
						(this.onDidChangeNotebookEditorVisibleRanges = this.b.event);
				}
				$acceptEditorPropertiesChanged(I, l) {
					this.c.debug("ExtHostNotebook#$acceptEditorPropertiesChanged", I, l);
					const n = this.d.getEditorById(I);
					l.visibleRanges &&
						n._acceptVisibleRanges(
							l.visibleRanges.ranges.map(S.NotebookRange.to),
						),
						l.selections &&
							n._acceptSelections(
								l.selections.selections.map(S.NotebookRange.to),
							),
						l.visibleRanges &&
							this.b.fire({
								notebookEditor: n.apiEditor,
								visibleRanges: n.apiEditor.visibleRanges,
							}),
						l.selections &&
							this.a.fire(
								Object.freeze({
									notebookEditor: n.apiEditor,
									selections: n.apiEditor.selections,
								}),
							);
				}
				$acceptEditorViewColumns(I) {
					for (const l in I)
						this.d.getEditorById(l)._acceptViewColumn(S.ViewColumn.to(I[l]));
				}
			};
			(t.$Pid = N), (t.$Pid = N = wt([rt(0, r.$ik)], N));
		}),
		