import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/network.js';
import '../../../base/common/uri.js';
import './extHost.protocol.js';
define(Pe[550], Ne([1, 0, 3, 16, 2, 6]), function (we, t, e, r, S, N) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$cjd = void 0);
			class P {
				static {
					this.a = new Set([r.Schemas.http, r.Schemas.https]);
				}
				constructor(l) {
					(this.c = new Map()),
						(this.b = l.getProxy(N.$lbb.MainThreadUriOpeners));
				}
				registerExternalUriOpener(l, n, p, y) {
					if (this.c.has(n))
						throw new Error(`Opener with id '${n}' already registered`);
					const d = y.schemes.find((k) => !P.a.has(k));
					if (d)
						throw new Error(
							`Scheme '${d}' is not supported. Only http and https are currently supported.`,
						);
					return (
						this.c.set(n, p),
						this.b.$registerUriOpener(n, y.schemes, l, y.label),
						(0, e.$Yc)(() => {
							this.c.delete(n), this.b.$unregisterUriOpener(n);
						})
					);
				}
				async $canOpenUri(l, n, p) {
					const y = this.c.get(l);
					if (!y) throw new Error(`Unknown opener with id: ${l}`);
					const d = S.URI.revive(n);
					return y.canOpenExternalUri(d, p);
				}
				async $openUri(l, n, p) {
					const y = this.c.get(l);
					if (!y) throw new Error(`Unknown opener id: '${l}'`);
					return y.openExternalUri(
						S.URI.revive(n.resolvedUri),
						{ sourceUri: S.URI.revive(n.sourceUri) },
						p,
					);
				}
			}
			t.$cjd = P;
		}),
		