import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/request/browser/requestService.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/request/common/request.js';
import '../../../../platform/native/common/native.js';
define(
			de[3592],
			he([1, 0, 10, 34, 2792, 20, 327, 110]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ydd = void 0);
				let m = class extends w.$O3c {
					constructor(u, a, h) {
						super(u, a), (this.g = h);
					}
					async resolveProxy(u) {
						return this.g.resolveProxy(u);
					}
					async lookupAuthorization(u) {
						return this.g.lookupAuthorization(u);
					}
					async lookupKerberosAuthorization(u) {
						return this.g.lookupKerberosAuthorization(u);
					}
					async loadCertificates() {
						return this.g.loadCertificates();
					}
				};
				(e.$ydd = m),
					(e.$ydd = m = Ne([j(0, t.$gj), j(1, i.$jk), j(2, d.$y7c)], m)),
					(0, E.$lK)(C.$Aq, m, E.InstantiationType.Delayed);
			},
		),
		