import '../../../../require.js';
import '../../../../exports.js';
import './extHost.protocol.js';
import './extHostTypeConverters.js';
import '../../../base/common/uri.js';
define(Pe[582], Ne([1, 0, 6, 17, 2]), function (we, t, e, r, S) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$2id = void 0);
			class N {
				static {
					this.a = 0;
				}
				constructor(I, l) {
					(this.d = l),
						(this.c = new Map()),
						(this.b = I.getProxy(e.$lbb.MainThreadShare));
				}
				async $provideShare(I, l, n) {
					return (
						(await this.c
							.get(I)
							?.provideShare(
								{
									selection: r.Range.to(l.selection),
									resourceUri: S.URI.revive(l.resourceUri),
								},
								n,
							)) ?? void 0
					);
				}
				registerShareProvider(I, l) {
					const n = N.a++;
					return (
						this.c.set(n, l),
						this.b.$registerShareProvider(
							n,
							r.DocumentSelector.from(I, this.d),
							l.id,
							l.label,
							l.priority,
						),
						{
							dispose: () => {
								this.b.$unregisterShareProvider(n), this.c.delete(n);
							},
						}
					);
				}
			}
			t.$2id = N;
		}),
		