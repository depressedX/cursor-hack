import '../../../../require.js';
import '../../../../exports.js';
import './extHost.protocol.js';
import '../../../base/common/event.js';
import '../../../platform/instantiation/common/instantiation.js';
define(Pe[192], Ne([1, 0, 6, 4, 5]), function (we, t, e, r, S) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }),
				(t.$Xhd = t.$Whd = void 0);
			class N {
				constructor(I) {
					(this.b = new r.$re()),
						(this.onDidChangePassword = this.b.event),
						(this.a = I.getProxy(e.$lbb.MainThreadSecretState));
				}
				async $onDidChangePassword(I) {
					this.b.fire(I);
				}
				get(I, l) {
					return this.a.$getPassword(I, l);
				}
				store(I, l, n) {
					return this.a.$setPassword(I, l, n);
				}
				delete(I, l) {
					return this.a.$deletePassword(I, l);
				}
			}
			(t.$Whd = N), (t.$Xhd = (0, S.$Mi)("IExtHostSecretState"));
		}),
		