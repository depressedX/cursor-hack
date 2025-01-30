import '../../../../require.js';
import '../../../../exports.js';
import './extHost.protocol.js';
import '../../../base/common/uri.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/errors.js';
import '../../../platform/extensions/common/extensions.js';
define(
			Pe[551],
			Ne([1, 0, 6, 2, 3, 12, 25]),
			function (we, t, e, r, S, N, P) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$djd = void 0);
				class I {
					static {
						this.a = 0;
					}
					constructor(n) {
						(this.c = new P.$Hn()),
							(this.d = new Map()),
							(this.b = n.getProxy(e.$lbb.MainThreadUrls));
					}
					registerUriHandler(n, p) {
						const y = n.identifier;
						if (this.c.has(y))
							throw new Error(
								`Protocol handler already registered for extension ${y}`,
							);
						const d = I.a++;
						return (
							this.c.add(y),
							this.d.set(d, p),
							this.b.$registerUriHandler(d, y, n.displayName || n.name),
							(0, S.$Yc)(() => {
								this.c.delete(y),
									this.d.delete(d),
									this.b.$unregisterUriHandler(d);
							})
						);
					}
					$handleExternalUri(n, p) {
						const y = this.d.get(n);
						if (!y) return Promise.resolve(void 0);
						try {
							y.handleUri(r.URI.revive(p));
						} catch (d) {
							(0, N.$4)(d);
						}
						return Promise.resolve(void 0);
					}
					async createAppUri(n) {
						return r.URI.revive(await this.b.$createAppUri(n));
					}
				}
				t.$djd = I;
			},
		),
		