import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/buffer.js';
import './contiguousMultilineTokens.js';
define(de[1152], he([1, 0, 76, 2573]), function (ce /*require*/,
 e /*exports*/,
 t /*buffer*/,
 i /*contiguousMultilineTokens*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$cV = void 0);
			class w {
				static deserialize(C) {
					let d = 0;
					const m = (0, t.$Xe)(C, d);
					d += 4;
					const r = [];
					for (let u = 0; u < m; u++) d = i.$_L.deserialize(C, d, r);
					return r;
				}
				constructor() {
					this.a = [];
				}
				add(C, d) {
					if (this.a.length > 0) {
						const m = this.a[this.a.length - 1];
						if (m.endLineNumber + 1 === C) {
							m.appendLineTokens(d);
							return;
						}
					}
					this.a.push(new i.$_L(C, [d]));
				}
				finalize() {
					return this.a;
				}
				serialize() {
					const C = this.b(),
						d = new Uint8Array(C);
					return this.c(d), d;
				}
				b() {
					let C = 0;
					C += 4;
					for (let d = 0; d < this.a.length; d++)
						C += this.a[d].serializeSize();
					return C;
				}
				c(C) {
					let d = 0;
					(0, t.$Ye)(C, this.a.length, d), (d += 4);
					for (let m = 0; m < this.a.length; m++) d = this.a[m].serialize(C, d);
				}
			}
			e.$cV = w;
		})
