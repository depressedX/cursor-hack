import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/parts/request/browser/request.js';
import '../../configuration/common/configuration.js';
import '../../log/common/log.js';
import '../common/request.js';
define(
			de[2792],
			he([1, 0, 2228, 10, 34, 327]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$O3c = void 0);
				let C = class extends E.$Bq {
					constructor(m, r) {
						super(r), (this.f = m);
					}
					async request(m, r) {
						return (
							m.proxyAuthorization ||
								(m.proxyAuthorization = this.f.getValue(
									"http.proxyAuthorization",
								)),
							this.c("browser", m, () => (0, t.$Erb)(m, r))
						);
					}
					async resolveProxy(m) {}
					async lookupAuthorization(m) {}
					async lookupKerberosAuthorization(m) {}
					async loadCertificates() {
						return [];
					}
				};
				(e.$O3c = C), (e.$O3c = C = Ne([j(0, i.$gj), j(1, w.$jk)], C));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	