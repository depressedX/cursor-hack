import '../../../../require.js';
import '../../../../exports.js';
import '../../../platform/log/common/log.js';
import './extHost.protocol.js';
import './extHostInitDataService.js';
import './extHostRpcService.js';
import '../../../base/common/uri.js';
import '../../../base/common/marshalling.js';
define(
			Pe[297],
			Ne([1, 0, 14, 6, 34, 21, 2, 50]),
			function (we, t, e, r, S, N, P, I) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$ijd = void 0);
				let l = class extends e.$tk {
					constructor(y, d) {
						super(
							d.logLevel,
							d.logsLocation,
							d.loggers.map((k) => (0, I.$ji)(k)),
						),
							(this.r = y.getProxy(r.$lbb.MainThreadLogger));
					}
					$setLogLevel(y, d) {
						d ? this.setLogLevel(P.URI.revive(d), y) : this.setLogLevel(y);
					}
					setVisibility(y, d) {
						super.setVisibility(y, d), this.r.$setVisibility(y, d);
					}
					q(y, d, k) {
						return new n(this.r, y, d, k);
					}
				};
				(t.$ijd = l), (t.$ijd = l = wt([rt(0, N.$08), rt(1, S.$98)], l));
				class n extends e.$ok {
					constructor(y, d, k, g) {
						super(g?.logLevel === "always"),
							(this.q = y),
							(this.r = d),
							(this.m = !1),
							(this.n = []),
							this.setLevel(k),
							this.q.$createLogger(d, g).then(() => {
								this.t(this.n), (this.m = !0);
							});
					}
					g(y, d) {
						const k = [[y, d]];
						this.m ? this.t(k) : this.n.push(...k);
					}
					t(y) {
						this.q.$log(this.r, y);
					}
					flush() {
						this.q.$flush(this.r);
					}
				}
			},
		),
		