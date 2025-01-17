import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/core/selection.js';
define(de[2586], he([1, 0, 104]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Nic = void 0);
			class i {
				constructor(E, C, d) {
					(this.a = E), (this.b = C), (this.c = d);
				}
				getEditOperations(E, C) {
					C.addTrackedEditOperation(this.a, this.c);
				}
				computeCursorState(E, C) {
					const m = C.getInverseEditOperations()[0].range;
					return this.b.isEmpty()
						? new t.$kL(
								m.endLineNumber,
								Math.min(this.b.positionColumn, m.endColumn),
								m.endLineNumber,
								Math.min(this.b.positionColumn, m.endColumn),
							)
						: new t.$kL(
								m.endLineNumber,
								m.endColumn - this.c.length,
								m.endLineNumber,
								m.endColumn,
							);
				}
			}
			e.$Nic = i;
		}),
		