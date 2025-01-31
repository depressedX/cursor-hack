import '../../../../require.js';
import '../../../../exports.js';
import '../cursorCommon.js';
import '../core/position.js';
import '../core/range.js';
import '../core/selection.js';
import '../model.js';
define(
			de[2760],
			he([1, 0, 346, 48, 17, 104, 64]),
			function (ce /*require*/,
 e /*exports*/,
 t /*cursorCommon*/,
 i /*position*/,
 w /*range*/,
 E /*selection*/,
 C /*model*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Uvb = void 0);
				class d {
					constructor(r) {
						(this.a = null),
							(this.b = !0),
							this.g(
								r,
								new t.$Bsb(
									new w.$iL(1, 1, 1, 1),
									t.SelectionStartKind.Simple,
									0,
									new i.$hL(1, 1),
									0,
								),
								new t.$Bsb(
									new w.$iL(1, 1, 1, 1),
									t.SelectionStartKind.Simple,
									0,
									new i.$hL(1, 1),
									0,
								),
							);
					}
					dispose(r) {
						this.d(r);
					}
					startTrackingSelection(r) {
						(this.b = !0), this.c(r);
					}
					stopTrackingSelection(r) {
						(this.b = !1), this.d(r);
					}
					c(r) {
						this.b &&
							(this.a = r.model._setTrackedRange(
								this.a,
								this.modelState.selection,
								C.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
							));
					}
					d(r) {
						this.a = r.model._setTrackedRange(
							this.a,
							null,
							C.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
						);
					}
					asCursorState() {
						return new t.$ysb(this.modelState, this.viewState);
					}
					readSelectionFromMarkers(r) {
						const u = r.model._getTrackedRange(this.a);
						return this.modelState.selection.isEmpty() && !u.isEmpty()
							? E.$kL.fromRange(
									u.collapseToEnd(),
									this.modelState.selection.getDirection(),
								)
							: E.$kL.fromRange(u, this.modelState.selection.getDirection());
					}
					ensureValidState(r) {
						this.g(r, this.modelState, this.viewState);
					}
					setState(r, u, a) {
						this.g(r, u, a);
					}
					static e(r, u, a, h) {
						return u.equals(a)
							? h
							: r.normalizePosition(u, C.PositionAffinity.None);
					}
					static f(r, u) {
						const a = u.position,
							h = u.selectionStart.getStartPosition(),
							c = u.selectionStart.getEndPosition(),
							n = r.normalizePosition(a, C.PositionAffinity.None),
							g = this.e(r, h, a, n),
							p = this.e(r, c, h, g);
						return a.equals(n) && h.equals(g) && c.equals(p)
							? u
							: new t.$Bsb(
									w.$iL.fromPositions(g, p),
									u.selectionStartKind,
									u.selectionStartLeftoverVisibleColumns + h.column - g.column,
									n,
									u.leftoverVisibleColumns + a.column - n.column,
								);
					}
					g(r, u, a) {
						if ((a && (a = d.f(r.viewModel, a)), u)) {
							const h = r.model.validateRange(u.selectionStart),
								c = u.selectionStart.equalsRange(h)
									? u.selectionStartLeftoverVisibleColumns
									: 0,
								n = r.model.validatePosition(u.position),
								g = u.position.equals(n) ? u.leftoverVisibleColumns : 0;
							u = new t.$Bsb(h, u.selectionStartKind, c, n, g);
						} else {
							if (!a) return;
							const h = r.model.validateRange(
									r.coordinatesConverter.convertViewRangeToModelRange(
										a.selectionStart,
									),
								),
								c = r.model.validatePosition(
									r.coordinatesConverter.convertViewPositionToModelPosition(
										a.position,
									),
								);
							u = new t.$Bsb(
								h,
								a.selectionStartKind,
								a.selectionStartLeftoverVisibleColumns,
								c,
								a.leftoverVisibleColumns,
							);
						}
						if (a) {
							const h = r.coordinatesConverter.validateViewRange(
									a.selectionStart,
									u.selectionStart,
								),
								c = r.coordinatesConverter.validateViewPosition(
									a.position,
									u.position,
								);
							a = new t.$Bsb(
								h,
								u.selectionStartKind,
								u.selectionStartLeftoverVisibleColumns,
								c,
								u.leftoverVisibleColumns,
							);
						} else {
							const h =
									r.coordinatesConverter.convertModelPositionToViewPosition(
										new i.$hL(
											u.selectionStart.startLineNumber,
											u.selectionStart.startColumn,
										),
									),
								c = r.coordinatesConverter.convertModelPositionToViewPosition(
									new i.$hL(
										u.selectionStart.endLineNumber,
										u.selectionStart.endColumn,
									),
								),
								n = new w.$iL(h.lineNumber, h.column, c.lineNumber, c.column),
								g = r.coordinatesConverter.convertModelPositionToViewPosition(
									u.position,
								);
							a = new t.$Bsb(
								n,
								u.selectionStartKind,
								u.selectionStartLeftoverVisibleColumns,
								g,
								u.leftoverVisibleColumns,
							);
						}
						(this.modelState = u), (this.viewState = a), this.c(r);
					}
				}
				e.$Uvb = d;
			},
		)
