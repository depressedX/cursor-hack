import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arrays.js';
import '../../../base/common/arraysFind.js';
import '../cursorCommon.js';
import './oneCursor.js';
import '../core/position.js';
import '../core/range.js';
import '../core/selection.js';
define(
			de[2761],
			he([1, 0, 24, 214, 346, 2760, 48, 17, 104]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*arraysFind*/,
 w /*cursorCommon*/,
 E /*oneCursor*/,
 C /*position*/,
 d /*range*/,
 m /*selection*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Vvb = void 0);
				class r {
					constructor(a) {
						(this.a = a), (this.b = [new E.$Uvb(a)]), (this.d = 0);
					}
					dispose() {
						for (const a of this.b) a.dispose(this.a);
					}
					startTrackingSelections() {
						for (const a of this.b) a.startTrackingSelection(this.a);
					}
					stopTrackingSelections() {
						for (const a of this.b) a.stopTrackingSelection(this.a);
					}
					updateContext(a) {
						this.a = a;
					}
					ensureValidState() {
						for (const a of this.b) a.ensureValidState(this.a);
					}
					readSelectionFromMarkers() {
						return this.b.map((a) => a.readSelectionFromMarkers(this.a));
					}
					getAll() {
						return this.b.map((a) => a.asCursorState());
					}
					getViewPositions() {
						return this.b.map((a) => a.viewState.position);
					}
					getTopMostViewPosition() {
						return (0, i.$tb)(
							this.b,
							(0, t.$0b)((a) => a.viewState.position, C.$hL.compare),
						).viewState.position;
					}
					getBottomMostViewPosition() {
						return (0, i.$sb)(
							this.b,
							(0, t.$0b)((a) => a.viewState.position, C.$hL.compare),
						).viewState.position;
					}
					getSelections() {
						return this.b.map((a) => a.modelState.selection);
					}
					getViewSelections() {
						return this.b.map((a) => a.viewState.selection);
					}
					setSelections(a) {
						this.setStates(w.$ysb.fromModelSelections(a));
					}
					getPrimaryCursor() {
						return this.b[0].asCursorState();
					}
					setStates(a) {
						a !== null &&
							(this.b[0].setState(this.a, a[0].modelState, a[0].viewState),
							this.e(a.slice(1)));
					}
					e(a) {
						const h = this.b.length - 1,
							c = a.length;
						if (h < c) {
							const n = c - h;
							for (let g = 0; g < n; g++) this.f();
						} else if (h > c) {
							const n = h - c;
							for (let g = 0; g < n; g++) this.g(this.b.length - 2);
						}
						for (let n = 0; n < c; n++)
							this.b[n + 1].setState(this.a, a[n].modelState, a[n].viewState);
					}
					killSecondaryCursors() {
						this.e([]);
					}
					f() {
						this.b.push(new E.$Uvb(this.a)), (this.d = this.b.length - 1);
					}
					getLastAddedCursorIndex() {
						return this.b.length === 1 || this.d === 0 ? 0 : this.d;
					}
					g(a) {
						this.d >= a + 1 && this.d--,
							this.b[a + 1].dispose(this.a),
							this.b.splice(a + 1, 1);
					}
					normalize() {
						if (this.b.length === 1) return;
						const a = this.b.slice(0),
							h = [];
						for (let c = 0, n = a.length; c < n; c++)
							h.push({ index: c, selection: a[c].modelState.selection });
						h.sort(
							(0, t.$0b)((c) => c.selection, d.$iL.compareRangesUsingStarts),
						);
						for (let c = 0; c < h.length - 1; c++) {
							const n = h[c],
								g = h[c + 1],
								p = n.selection,
								o = g.selection;
							if (!this.a.cursorConfig.multiCursorMergeOverlapping) continue;
							let f;
							if (
								(o.isEmpty() || p.isEmpty()
									? (f = o
											.getStartPosition()
											.isBeforeOrEqual(p.getEndPosition()))
									: (f = o.getStartPosition().isBefore(p.getEndPosition())),
								f)
							) {
								const b = n.index < g.index ? c : c + 1,
									s = n.index < g.index ? c + 1 : c,
									l = h[s].index,
									y = h[b].index,
									$ = h[s].selection,
									v = h[b].selection;
								if (!$.equalsSelection(v)) {
									const S = $.plusRange(v),
										I =
											$.selectionStartLineNumber === $.startLineNumber &&
											$.selectionStartColumn === $.startColumn,
										T =
											v.selectionStartLineNumber === v.startLineNumber &&
											v.selectionStartColumn === v.startColumn;
									let P;
									l === this.d ? ((P = I), (this.d = y)) : (P = T);
									let k;
									P
										? (k = new m.$kL(
												S.startLineNumber,
												S.startColumn,
												S.endLineNumber,
												S.endColumn,
											))
										: (k = new m.$kL(
												S.endLineNumber,
												S.endColumn,
												S.startLineNumber,
												S.startColumn,
											)),
										(h[b].selection = k);
									const L = w.$ysb.fromModelSelection(k);
									a[y].setState(this.a, L.modelState, L.viewState);
								}
								for (const S of h) S.index > l && S.index--;
								a.splice(l, 1), h.splice(s, 1), this.g(l - 1), c--;
							}
						}
					}
				}
				e.$Vvb = r;
			},
		),
		