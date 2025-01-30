import '../../../../require.js';
import '../../../../exports.js';
import '../../../amdX.js';
import '../common/abstractSignService.js';
define(Pe[280], Ne([1, 0, 271, 502]), function (we, t, e, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$Q8c = void 0);
			class S extends r.$H3c {
				c() {
					return this.h().then((P) => new P.validator());
				}
				d(P) {
					return this.h().then((I) => new I.signer().sign(P));
				}
				async h() {
					return (0, e.$Tq)("vsda", "index.js");
				}
			}
			t.$Q8c = S;
		}),
		