import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
define(de[653], he([1, 0, 6]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$rsb = void 0);
			class i {
				constructor() {
					(this.a = !1),
						(this.b = new t.$re()),
						(this.onDidChangeTabFocus = this.b.event);
				}
				getTabFocusMode() {
					return this.a;
				}
				setTabFocusMode(E) {
					(this.a = E), this.b.fire(this.a);
				}
			}
			e.$rsb = new i();
		})
