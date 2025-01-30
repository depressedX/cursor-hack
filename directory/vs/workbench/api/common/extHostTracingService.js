import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../platform/instantiation/common/instantiation.js';
import './extHost.protocol.js';
import './extHostRpcService.js';
define(
			Pe[298],
			Ne([1, 0, 4, 3, 5, 6, 21]),
			function (we, t, e, r, S, N, P) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$rhd = t.$qhd = void 0);
				let I = class extends r.$1c {
					constructor(n) {
						super(),
							(this.b = new e.$re()),
							(this.onProcessConfigUpdate = this.b.event),
							(this.a = n.getProxy(N.$lbb.MainThreadCursor));
					}
					processConfigUpdate(n) {
						this.b.fire(n);
					}
					async sendEnvelope(n, p) {
						await this.a.$sendEnvelope(n, p);
					}
					async sendScopeUpdate(n, p) {
						await this.a.$sendScopeUpdate(n, p);
					}
					async setClientTracingConfig(n) {
						throw new Error("Method not implemented.");
					}
					async setIsPrivacyMode(n) {
						throw new Error("Method not implemented.");
					}
					async setUser(n, p) {
						throw new Error("Method not implemented.");
					}
				};
				(t.$qhd = I),
					(t.$qhd = I = wt([rt(0, P.$08)], I)),
					(t.$rhd = (0, S.$Mi)("IExtHostTracingService"));
			},
		),
		