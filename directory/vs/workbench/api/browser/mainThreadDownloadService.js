import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import '../common/extHost.protocol.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../../platform/download/common/download.js';
import '../../../base/common/uri.js';
define(
			de[3347],
			he([1, 0, 3, 88, 101, 665, 9]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*extHost.protocol*/,
 w /*extHostCustomers*/,
 E /*download*/,
 C /*uri*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Koc = void 0);
				let d = class extends t.$1c {
					constructor(r, u) {
						super(), (this.a = u);
					}
					$download(r, u) {
						return this.a.download(C.URI.revive(r), C.URI.revive(u));
					}
				};
				(e.$Koc = d),
					(e.$Koc = d =
						Ne(
							[(0, w.$tmc)(i.$lbb.MainThreadDownloadService), j(1, E.$gp)],
							d,
						));
			},
		)
