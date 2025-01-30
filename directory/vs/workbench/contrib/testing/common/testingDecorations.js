import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../platform/instantiation/common/instantiation.js';
define(de[1772], he([1, 0, 24, 5]), function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*instantiation*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$YKc = e.$XKc = void 0);
			class w {
				constructor() {
					this.value = [];
				}
				push(C) {
					const d = (0, t.$Ab)(this.value, C, (m, r) => m.line - r.line);
					this.value.splice(d < 0 ? ~d : d, 0, C);
				}
				*lines() {
					if (!this.value.length) return;
					let C = 0,
						d = this.value[0].line;
					for (let m = 1; m < this.value.length; m++) {
						const r = this.value[m];
						r.line !== d &&
							(yield [d, this.value.slice(C, m)], (d = r.line), (C = m));
					}
					yield [d, this.value.slice(C)];
				}
			}
			(e.$XKc = w), (e.$YKc = (0, i.$Mi)("testingDecorationService"));
		}),
		