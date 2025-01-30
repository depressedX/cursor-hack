import '../../../../require.js';
import '../../../../exports.js';
import './extHost.protocol.js';
import './extHostTypes.js';
define(Pe[559], Ne([1, 0, 6, 11]), function (we, t, e, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$oid = void 0);
			class S {
				constructor(P) {
					(this.a = new Map()),
						(this.b = 0),
						(this.c = P.getProxy(e.$lbb.MainThreadAiEmbeddingVector));
				}
				async $provideAiEmbeddingVector(P, I, l) {
					if (this.a.size === 0)
						throw new Error("No embedding vector providers registered");
					const n = this.a.get(P);
					if (!n) throw new Error("Embedding vector provider not found");
					const p = await n.provideEmbeddingVector(I, l);
					if (!p)
						throw new Error("Embedding vector provider returned undefined");
					return p;
				}
				registerEmbeddingVectorProvider(P, I, l) {
					const n = this.b;
					return (
						this.b++,
						this.a.set(n, l),
						this.c.$registerAiEmbeddingVectorProvider(I, n),
						new r.$nbb(() => {
							this.c.$unregisterAiEmbeddingVectorProvider(n), this.a.delete(n);
						})
					);
				}
			}
			t.$oid = S;
		}),
		