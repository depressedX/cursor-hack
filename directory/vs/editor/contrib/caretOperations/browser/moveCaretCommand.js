import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/core/range.js';
import '../../../common/core/selection.js';
define(de[2580], he([1, 0, 17, 104]), function (ce /*require*/,
 e /*exports*/,
 t /*range*/,
 i /*selection*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$fzb = void 0);
			class w {
				constructor(C, d) {
					(this.a = C), (this.b = d);
				}
				getEditOperations(C, d) {
					if (
						this.a.startLineNumber !== this.a.endLineNumber ||
						this.a.isEmpty()
					)
						return;
					const m = this.a.startLineNumber,
						r = this.a.startColumn,
						u = this.a.endColumn;
					if (!(this.b && r === 1) && !(!this.b && u === C.getLineMaxColumn(m)))
						if (this.b) {
							const a = new t.$iL(m, r - 1, m, r),
								h = C.getValueInRange(a);
							d.addEditOperation(a, null),
								d.addEditOperation(new t.$iL(m, u, m, u), h);
						} else {
							const a = new t.$iL(m, u, m, u + 1),
								h = C.getValueInRange(a);
							d.addEditOperation(a, null),
								d.addEditOperation(new t.$iL(m, r, m, r), h);
						}
				}
				computeCursorState(C, d) {
					return this.b
						? new i.$kL(
								this.a.startLineNumber,
								this.a.startColumn - 1,
								this.a.endLineNumber,
								this.a.endColumn - 1,
							)
						: new i.$kL(
								this.a.startLineNumber,
								this.a.startColumn + 1,
								this.a.endLineNumber,
								this.a.endColumn + 1,
							);
				}
			}
			e.$fzb = w;
		})
