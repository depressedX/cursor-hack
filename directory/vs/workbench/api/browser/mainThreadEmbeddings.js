define(
			de[3349],
			he([1, 0, 6, 3, 20, 5, 88, 101]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Imc = void 0);
				const m = (0, E.$Mi)("embeddingsService");
				class r {
					constructor() {
						(this.b = new t.$re()),
							(this.onDidChange = this.b.event),
							(this.a = new Map());
					}
					get allProviders() {
						return this.a.keys();
					}
					registerProvider(h, c) {
						return (
							this.a.set(h, c),
							this.b.fire(),
							{
								dispose: () => {
									this.a.delete(h), this.b.fire();
								},
							}
						);
					}
					computeEmbeddings(h, c, n) {
						const g = this.a.get(h);
						return g
							? g.provideEmbeddings(c, n)
							: Promise.reject(
									new Error(`No embeddings provider registered with id: ${h}`),
								);
					}
				}
				(0, w.$lK)(m, r, w.InstantiationType.Delayed);
				let u = class {
					constructor(h, c) {
						(this.d = c),
							(this.a = new i.$Zc()),
							(this.b = this.a.add(new i.$0c())),
							(this.c = h.getProxy(C.$mbb.ExtHostEmbeddings)),
							this.a.add(
								c.onDidChange(() => {
									this.c.$acceptEmbeddingModels(Array.from(c.allProviders));
								}),
							);
					}
					dispose() {
						this.a.dispose();
					}
					$registerEmbeddingProvider(h, c) {
						const n = this.d.registerProvider(c, {
							provideEmbeddings: (g, p) => this.c.$provideEmbeddings(h, g, p),
						});
						this.b.set(h, n);
					}
					$unregisterEmbeddingProvider(h) {
						this.b.deleteAndDispose(h);
					}
					$computeEmbeddings(h, c, n) {
						return this.d.computeEmbeddings(h, c, n);
					}
				};
				(e.$Imc = u),
					(e.$Imc = u =
						Ne([(0, d.$tmc)(C.$lbb.MainThreadEmbeddings), j(1, m)], u));
			},
		),
		