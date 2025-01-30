import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
define(de[3052], he([1, 0, 6]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$j3 = void 0);
			class i {
				constructor() {
					(this.a = !1),
						(this.b = new t.$re()),
						(this.onDidSessionStop = this.b.event);
				}
				sessionStopped() {
					this.a || ((this.a = !0), this.b.fire());
				}
			}
			e.$j3 = i;
		}),
		