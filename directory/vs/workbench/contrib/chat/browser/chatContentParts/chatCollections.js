import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/lifecycle.js';
define(de[979], he([1, 0, 3]), function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$hUb = void 0);
			class i extends t.$1c {
				get inUse() {
					return this.b;
				}
				constructor(E) {
					super(), (this.c = E), (this.a = []), (this.b = new Set());
				}
				get() {
					if (this.a.length > 0) {
						const C = this.a.pop();
						return this.b.add(C), C;
					}
					const E = this.D(this.c());
					return this.b.add(E), E;
				}
				release(E) {
					this.b.delete(E), this.a.push(E);
				}
			}
			e.$hUb = i;
		}),
		