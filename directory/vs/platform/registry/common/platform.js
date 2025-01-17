import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/assert.js';
import '../../../base/common/types.js';
define(de[30], he([1, 0, 229, 28]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Io = void 0),
				(t = mt(t)),
				(i = mt(i));
			class w {
				constructor() {
					this.a = new Map();
				}
				add(C, d) {
					t.ok(i.$lg(C)),
						t.ok(i.$ng(d)),
						t.ok(!this.a.has(C), "There is already an extension with this id"),
						this.a.set(C, d);
				}
				knows(C) {
					return this.a.has(C);
				}
				as(C) {
					return this.a.get(C) || null;
				}
			}
			e.$Io = new w();
		}),
		