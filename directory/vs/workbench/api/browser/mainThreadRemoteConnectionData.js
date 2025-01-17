import '../../../../require.js';
import '../../../../exports.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../common/extHost.protocol.js';
import '../../../platform/remote/common/remoteAuthorityResolver.js';
import '../../../base/common/lifecycle.js';
import '../../services/environment/common/environmentService.js';
define(
			de[3364],
			he([1, 0, 101, 88, 211, 3, 78]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$joc = void 0);
				let d = class extends E.$1c {
					constructor(r, u, a) {
						super(),
							(this.b = u),
							(this.a = r.getProxy(i.$mbb.ExtHostExtensionService));
						const h = this.b.remoteAuthority;
						h &&
							this.D(
								a.onDidChangeConnectionData(() => {
									const c = a.getConnectionData(h);
									c && this.a.$updateRemoteConnectionData(c);
								}),
							);
					}
				};
				(e.$joc = d), (e.$joc = d = Ne([t.$umc, j(1, C.$r8), j(2, w.$3l)], d));
			},
		),
		