import '../../../../require.js';
import '../../../../exports.js';
import '../core/selection.js';
define(de[655], he([1, 0, 104]), function (ce /*require*/,
 e /*exports*/,
 t /*selection*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Atb = e.$ztb = e.$ytb = e.$xtb = e.$wtb = void 0);
			class i {
				constructor(r, u, a = !1) {
					(this.a = r), (this.b = u), (this.insertsAutoWhitespace = a);
				}
				getEditOperations(r, u) {
					u.addTrackedEditOperation(this.a, this.b);
				}
				computeCursorState(r, u) {
					const h = u.getInverseEditOperations()[0].range;
					return t.$kL.fromPositions(h.getEndPosition());
				}
			}
			e.$wtb = i;
			class w {
				constructor(r, u) {
					(this.a = r), (this.b = u);
				}
				getEditOperations(r, u) {
					u.addTrackedEditOperation(this.a, this.b);
				}
				computeCursorState(r, u) {
					const h = u.getInverseEditOperations()[0].range;
					return t.$kL.fromRange(h, t.SelectionDirection.LTR);
				}
			}
			e.$xtb = w;
			class E {
				constructor(r, u, a = !1) {
					(this.a = r), (this.b = u), (this.insertsAutoWhitespace = a);
				}
				getEditOperations(r, u) {
					u.addTrackedEditOperation(this.a, this.b);
				}
				computeCursorState(r, u) {
					const h = u.getInverseEditOperations()[0].range;
					return t.$kL.fromPositions(h.getStartPosition());
				}
			}
			e.$ytb = E;
			class C {
				constructor(r, u, a, h, c = !1) {
					(this.a = r),
						(this.b = u),
						(this.c = h),
						(this.d = a),
						(this.insertsAutoWhitespace = c);
				}
				getEditOperations(r, u) {
					u.addTrackedEditOperation(this.a, this.b);
				}
				computeCursorState(r, u) {
					const h = u.getInverseEditOperations()[0].range;
					return t.$kL.fromPositions(h.getEndPosition().delta(this.d, this.c));
				}
			}
			e.$ztb = C;
			class d {
				constructor(r, u, a, h = !1) {
					(this.a = r),
						(this.b = u),
						(this.c = a),
						(this.d = h),
						(this.e = null);
				}
				getEditOperations(r, u) {
					u.addTrackedEditOperation(this.a, this.b, this.d),
						(this.e = u.trackSelection(this.c));
				}
				computeCursorState(r, u) {
					return u.getTrackedSelection(this.e);
				}
			}
			e.$Atb = d;
		}),
		