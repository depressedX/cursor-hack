define(
			de[3366],
			he([1, 0, 33, 3, 9, 88, 1751, 101]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Pqc = void 0);
				let m = class {
					constructor(u, a) {
						(this.d = a),
							(this.b = new Map()),
							(this.c = new Map()),
							(this.a = u.getProxy(E.$mbb.ExtHostShare));
					}
					$registerShareProvider(u, a, h, c, n) {
						const g = {
							id: h,
							label: c,
							selector: a,
							priority: n,
							provideShare: async (o) => {
								const f = await this.a.$provideShare(
									u,
									o,
									t.CancellationToken.None,
								);
								return typeof f == "string" ? f : w.URI.revive(f);
							},
						};
						this.b.set(u, g);
						const p = this.d.registerShareProvider(g);
						this.c.set(u, p);
					}
					$unregisterShareProvider(u) {
						this.b.has(u) && this.b.delete(u),
							this.c.has(u) && this.c.delete(u);
					}
					dispose() {
						this.b.clear(), (0, i.$Vc)(this.c.values()), this.c.clear();
					}
				};
				(e.$Pqc = m),
					(e.$Pqc = m =
						Ne([(0, d.$tmc)(E.$lbb.MainThreadShare), j(1, C.$Oqc)], m));
			},
		),
		