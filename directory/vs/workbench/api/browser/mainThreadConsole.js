import '../../../../require.js';
import '../../../../exports.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../common/extHost.protocol.js';
import '../../../platform/environment/common/environment.js';
import '../../../base/common/console.js';
import '../../services/extensions/common/remoteConsoleUtil.js';
import '../../services/extensions/common/extensionDevOptions.js';
import '../../../platform/log/common/log.js';
define(
			de[3378],
			he([1, 0, 101, 88, 113, 1560, 3377, 698, 34]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Vmc = void 0);
				let r = class {
					constructor(a, h, c) {
						(this.b = h), (this.c = c);
						const n = (0, d.$Umc)(this.b);
						this.a = n.isExtensionDevTestFromCli;
					}
					dispose() {}
					$logExtensionHostMessage(a) {
						this.a
							? (0, C.$Smc)(this.c, a)
							: ((0, C.$Tmc)(this.c, a, "Extension Host"),
								(0, E.log)(a, "Extension Host"));
					}
				};
				(e.$Vmc = r),
					(e.$Vmc = r =
						Ne(
							[(0, t.$tmc)(i.$lbb.MainThreadConsole), j(1, w.$Ti), j(2, m.$ik)],
							r,
						));
			},
		),
		