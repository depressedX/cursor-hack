import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/path.js';
import '../../../../os.js';
import '../../../base/common/uuid.js';
import '../common/extHostCommands.js';
import '../../../base/common/lifecycle.js';
import '../common/extHost.protocol.js';
import '../../../base/common/uri.js';
import '../common/extHostRpcService.js';
define(
			Pe[593],
			Ne([1, 0, 18, 106, 38, 44, 3, 6, 2, 21]),
			function (we, t, e, r, S, N, P, I, l, n) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Vjd = void 0);
				let p = class extends P.$1c {
					constructor(d, k) {
						super();
						const g = d.getProxy(I.$lbb.MainThreadDownloadService);
						k.registerCommand(!1, "_workbench.downloadResource", async (c) => {
							const h = l.URI.file((0, e.$oc)((0, r.tmpdir)(), (0, S.$9g)()));
							return await g.$download(c, h), h;
						});
					}
				};
				(t.$Vjd = p), (t.$Vjd = p = wt([rt(0, n.$08), rt(1, N.$8db)], p));
			},
		),
		