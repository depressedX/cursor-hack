import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/async.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../base/common/stopwatch.js';
import '../../../../platform/log/common/log.js';
define(
			de[1793],
			he([1, 0, 5, 15, 20, 162, 34]),
			function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/,
 i /*async*/,
 w /*extensions*/,
 E /*stopwatch*/,
 C /*log*/) {
				"use strict";
				var d;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Tqc = e.$Sqc = void 0),
					(e.$Sqc = (0, t.$Mi)("IAiEmbeddingVectorService"));
				let m = class {
					static {
						d = this;
					}
					static {
						this.DEFAULT_TIMEOUT = 1e3 * 10;
					}
					constructor(u) {
						(this.b = u), (this.a = []);
					}
					isEnabled() {
						return this.a.length > 0;
					}
					registerAiEmbeddingVectorProvider(u, a) {
						return (
							this.a.push(a),
							{
								dispose: () => {
									const h = this.a.indexOf(a);
									h >= 0 && this.a.splice(h, 1);
								},
							}
						);
					}
					async getEmbeddingVector(u, a) {
						if (this.a.length === 0)
							throw new Error("No embedding vector providers registered");
						const h = E.$le.create(),
							c = [],
							n = (0, i.$Nh)(d.DEFAULT_TIMEOUT),
							g = a.onCancellationRequested(() => {
								g.dispose(), n.cancel();
							});
						for (const p of this.a)
							c.push(
								(0, i.$zh)(async (o) => {
									try {
										return await p.provideAiEmbeddingVector(
											Array.isArray(u) ? u : [u],
											o,
										);
									} catch {}
									throw (
										(await n, new Error("Embedding vector provider timed out"))
									);
								}),
							);
						c.push(
							(0, i.$zh)(async (p) => {
								const o = p.onCancellationRequested(() => {
									n.cancel(), o.dispose();
								});
								throw (
									(await n, new Error("Embedding vector provider timed out"))
								);
							}),
						);
						try {
							const p = await (0, i.$Ch)(c);
							return p.length === 1 ? p[0] : p;
						} finally {
							h.stop(),
								this.b.trace(
									`[AiEmbeddingVectorService]: getEmbeddingVector took ${h.elapsed()}ms`,
								);
						}
					}
				};
				(e.$Tqc = m),
					(e.$Tqc = m = d = Ne([j(0, C.$ik)], m)),
					(0, w.$lK)(e.$Sqc, m, w.InstantiationType.Delayed);
			},
		)
