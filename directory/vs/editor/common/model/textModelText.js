import '../../../../require.js';
import '../../../../exports.js';
import '../core/textEdit.js';
import '../core/textLength.js';
define(de[1540], he([1, 0, 490, 458]), function (ce /*require*/,
 e /*exports*/,
 t /*textEdit*/,
 i /*textLength*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$iyb = void 0);
			class w extends t.$xL {
				constructor(C) {
					super(), (this.c = C);
				}
				getValueOfRange(C) {
					return this.c.getValueInRange(C);
				}
				get length() {
					const C = this.c.getLineCount(),
						d = this.c.getLineLength(C);
					return new i.$tL(C - 1, d);
				}
			}
			e.$iyb = w;
		}),
		