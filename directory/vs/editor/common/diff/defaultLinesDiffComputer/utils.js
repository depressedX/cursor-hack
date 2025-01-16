define(de[911], he([1, 0, 120]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$bxb = e.$_wb = void 0),
				(e.$axb = w);
			class i {
				constructor(d, m) {
					(this.width = d),
						(this.height = m),
						(this.a = []),
						(this.a = new Array(d * m));
				}
				get(d, m) {
					return this.a[d + m * this.width];
				}
				set(d, m, r) {
					this.a[d + m * this.width] = r;
				}
			}
			e.$_wb = i;
			function w(C) {
				return C === t.CharCode.Space || C === t.CharCode.Tab;
			}
			class E {
				static {
					this.a = new Map();
				}
				static b(d) {
					let m = this.a.get(d);
					return m === void 0 && ((m = this.a.size), this.a.set(d, m)), m;
				}
				constructor(d, m, r) {
					(this.range = d), (this.lines = m), (this.source = r), (this.d = []);
					let u = 0;
					for (
						let a = d.startLineNumber - 1;
						a < d.endLineNumberExclusive - 1;
						a++
					) {
						const h = m[a];
						for (let n = 0; n < h.length; n++) {
							u++;
							const g = h[n],
								p = E.b(g);
							this.d[p] = (this.d[p] || 0) + 1;
						}
						u++;
						const c = E.b(`
`);
						this.d[c] = (this.d[c] || 0) + 1;
					}
					this.c = u;
				}
				computeSimilarity(d) {
					let m = 0;
					const r = Math.max(this.d.length, d.d.length);
					for (let u = 0; u < r; u++)
						m += Math.abs((this.d[u] ?? 0) - (d.d[u] ?? 0));
					return 1 - m / (this.c + d.c);
				}
			}
			e.$bxb = E;
		}),
		