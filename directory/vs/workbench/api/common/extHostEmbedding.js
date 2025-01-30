import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import './extHost.protocol.js';
define(Pe[545], Ne([1, 0, 23, 4, 3, 6]), function (we, t, e, r, S, N) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$nid = void 0);
			class P {
				constructor(l) {
					(this.b = new Map()),
						(this.c = new r.$re()),
						(this.onDidChange = this.c.event),
						(this.d = new Set()),
						(this.e = 0),
						(this.a = l.getProxy(N.$lbb.MainThreadEmbeddings));
				}
				registerEmbeddingsProvider(l, n, p) {
					if (this.d.has(n))
						throw new Error(
							"An embeddings provider for this model is already registered",
						);
					const y = this.e++;
					return (
						this.a.$registerEmbeddingProvider(y, n),
						this.b.set(y, { id: n, provider: p }),
						(0, S.$Yc)(() => {
							this.d.delete(n),
								this.a.$unregisterEmbeddingProvider(y),
								this.b.delete(y);
						})
					);
				}
				async computeEmbeddings(l, n, p) {
					p ??= e.CancellationToken.None;
					let y = !1;
					typeof n == "string" && ((n = [n]), (y = !0));
					const d = await this.a.$computeEmbeddings(l, n, p);
					if (d.length !== n.length) throw new Error();
					if (y) {
						if (d.length !== 1) throw new Error();
						return d[0];
					}
					return d;
				}
				async $provideEmbeddings(l, n, p) {
					const y = this.b.get(l);
					if (!y) return [];
					const d = await y.provider.provideEmbeddings(n, p);
					return d || [];
				}
				get embeddingsModels() {
					return Array.from(this.d);
				}
				$acceptEmbeddingModels(l) {
					(this.d = new Set(l)), this.c.fire();
				}
			}
			t.$nid = P;
		}),
		