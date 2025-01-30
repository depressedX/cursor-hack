import '../../../../require.js';
import '../../../../exports.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../../platform/log/common/log.js';
import './extHost.protocol.js';
import './extHostRpcService.js';
define(Pe[144], Ne([1, 0, 5, 14, 6, 21]), function (we, t, e, r, S, N) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }),
				(t.$$gd = t.$0gd = t.$9gd = void 0),
				(S = tt(S)),
				(t.$9gd = (0, e.$Mi)("IExtHostApiDeprecationService"));
			let P = class {
				constructor(l, n) {
					(this.c = n),
						(this.a = new Set()),
						(this.b = l.getProxy(S.$lbb.MainThreadTelemetry));
				}
				report(l, n, p) {
					const y = this.d(l, n);
					this.a.has(y) ||
						(this.a.add(y),
						n.isUnderDevelopment &&
							this.c.warn(`[Deprecation Warning] '${l}' is deprecated. ${p}`),
						this.b.$publicLog2("extHostDeprecatedApiUsage", {
							extensionId: n.identifier.value,
							apiId: l,
						}));
				}
				d(l, n) {
					return `${l}-${n.identifier.value}`;
				}
			};
			(t.$0gd = P),
				(t.$0gd = P = wt([rt(0, N.$08), rt(1, r.$ik)], P)),
				(t.$$gd = Object.freeze(
					new (class {
						report(I, l, n) {}
					})(),
				));
		}),
		