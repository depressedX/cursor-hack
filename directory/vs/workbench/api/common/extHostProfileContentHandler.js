import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/types.js';
import '../../../base/common/uri.js';
import '../../services/extensions/common/extensions.js';
import './extHost.protocol.js';
define(
			Pe[548],
			Ne([1, 0, 3, 19, 2, 29, 6]),
			function (we, t, e, r, S, N, P) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Vid = void 0);
				class I {
					constructor(n) {
						(this.b = new Map()),
							(this.a = n.getProxy(P.$lbb.MainThreadProfileContentHandlers));
					}
					registerProfileContentHandler(n, p, y) {
						if (((0, N.$u2)(n, "profileContentHandlers"), this.b.has(p)))
							throw new Error(`Handler with id '${p}' already registered`);
						return (
							this.b.set(p, y),
							this.a.$registerProfileContentHandler(
								p,
								y.name,
								y.description,
								n.identifier.value,
							),
							(0, e.$Yc)(() => {
								this.b.delete(p), this.a.$unregisterProfileContentHandler(p);
							})
						);
					}
					async $saveProfile(n, p, y, d) {
						const k = this.b.get(n);
						if (!k) throw new Error(`Unknown handler with id: ${n}`);
						return k.saveProfile(p, y, d);
					}
					async $readProfile(n, p, y) {
						const d = this.b.get(n);
						if (!d) throw new Error(`Unknown handler with id: ${n}`);
						return d.readProfile((0, r.$lg)(p) ? p : S.URI.revive(p), y);
					}
				}
				t.$Vid = I;
			},
		),
		