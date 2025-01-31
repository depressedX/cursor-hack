import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
define(de[3010], he([1, 0, 3]), function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$SIc = void 0);
			class i {
				constructor() {
					this.a = new Map();
				}
				get providers() {
					return [...this.a.values()];
				}
				registerProvider(E, C) {
					return this.a.set(C, E), (0, t.$Yc)(() => this.a.delete(C));
				}
			}
			e.$SIc = i;
		})
