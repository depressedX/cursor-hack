import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
define(de[553], he([1, 0, 3]), function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$DTc = void 0);
			class i extends t.$1c {
				constructor() {
					super(...arguments), (this.f = null);
				}
				get activated() {
					return this.f !== null;
				}
				activate() {
					return this.f || (this.f = this.c()), this.f;
				}
			}
			e.$DTc = i;
		}),
		