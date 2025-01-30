import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/uuid.js';
import '../common/extHostRpcService.js';
import '../common/extHostTerminalService.js';
import '../common/extHostCommands.js';
define(Pe[595], Ne([1, 0, 38, 21, 62, 44]), function (we, t, e, r, S, N) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$ojd = void 0);
			let P = class extends S.$Shd {
				constructor(l, n) {
					super(!0, l, n);
				}
				createTerminal(l, n, p) {
					return this.createTerminalFromOptions({
						name: l,
						shellPath: n,
						shellArgs: p,
					});
				}
				createTerminalFromOptions(l, n) {
					const p = new S.$Rhd(this.a, (0, e.$9g)(), l, l.name);
					return this.f.push(p), p.create(l, this.R(l, n)), p.value;
				}
			};
			(t.$ojd = P), (t.$ojd = P = wt([rt(0, N.$8db), rt(1, r.$08)], P));
		}),
		