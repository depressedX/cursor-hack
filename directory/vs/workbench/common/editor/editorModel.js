import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
define(de[416], he([1, 0, 6, 3]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$PO = void 0);
			class w extends i.$1c {
				constructor() {
					super(...arguments),
						(this.f = this.D(new t.$re())),
						(this.onWillDispose = this.f.event),
						(this.h = !1);
				}
				async resolve() {
					this.h = !0;
				}
				isResolved() {
					return this.h;
				}
				isDisposed() {
					return this.B.isDisposed;
				}
				dispose() {
					this.f.fire(), super.dispose();
				}
			}
			e.$PO = w;
		})
