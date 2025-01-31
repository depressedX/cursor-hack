import '../../../require.js';
import '../../../exports.js';
import './event.js';
define(de[1502], he([1, 0, 6]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.IME = e.$Vpb = void 0);
			class i {
				constructor() {
					(this.a = new t.$re()),
						(this.onDidChange = this.a.event),
						(this.b = !0);
				}
				get enabled() {
					return this.b;
				}
				enable() {
					(this.b = !0), this.a.fire();
				}
				disable() {
					(this.b = !1), this.a.fire();
				}
			}
			(e.$Vpb = i), (e.IME = new i());
		})
