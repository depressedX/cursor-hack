import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import './extHost.protocol.js';
define(Pe[546], Ne([1, 0, 3, 6]), function (we, t, e, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$Jid = void 0);
			class S {
				constructor(P) {
					(this.b = 0), (this.a = P.getProxy(r.$lbb.MainThreadLabelService));
				}
				$registerResourceLabelFormatter(P) {
					const I = this.b++;
					return (
						this.a.$registerResourceLabelFormatter(I, P),
						(0, e.$Yc)(() => {
							this.a.$unregisterResourceLabelFormatter(I);
						})
					);
				}
			}
			t.$Jid = S;
		}),
		