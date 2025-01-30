import '../../../require.js';
import '../../../exports.js';
define(de[1505], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$8pb = void 0),
				(e.$9pb = w);
			function t(E) {
				const C = new Map();
				for (const d of E) C.set(d, (C.get(d) ?? 0) + 1);
				return C;
			}
			class i {
				constructor() {
					(this.e = 0), (this.f = new Map()), (this.g = new Map());
				}
				calculateScores(C, d) {
					const m = this.i(C),
						r = new Map(),
						u = [];
					for (const [a, h] of this.g) {
						if (d.isCancellationRequested) return [];
						for (const c of h.chunks) {
							const n = this.h(c, m, r);
							n > 0 && u.push({ key: a, score: n });
						}
					}
					return u;
				}
				static c(C) {
					return t(i.d(C));
				}
				static *d(C) {
					const d = (m) => m.toLowerCase();
					for (const [m] of C.matchAll(/\b\p{Letter}[\p{Letter}\d]{2,}\b/gu)) {
						yield d(m);
						const r = m.replace(/([a-z])([A-Z])/g, "$1 $2").split(/\s+/g);
						if (r.length > 1)
							for (const u of r)
								u.length > 2 && /\p{Letter}{3,}/gu.test(u) && (yield d(u));
					}
				}
				updateDocuments(C) {
					for (const { key: d } of C) this.deleteDocument(d);
					for (const d of C) {
						const m = [];
						for (const r of d.textChunks) {
							const u = i.c(r);
							for (const a of u.keys()) this.f.set(a, (this.f.get(a) ?? 0) + 1);
							m.push({ text: r, tf: u });
						}
						(this.e += m.length), this.g.set(d.key, { chunks: m });
					}
					return this;
				}
				deleteDocument(C) {
					const d = this.g.get(C);
					if (d) {
						this.g.delete(C), (this.e -= d.chunks.length);
						for (const m of d.chunks)
							for (const r of m.tf.keys()) {
								const u = this.f.get(r);
								if (typeof u == "number") {
									const a = u - 1;
									a <= 0 ? this.f.delete(r) : this.f.set(r, a);
								}
							}
					}
				}
				h(C, d, m) {
					let r = 0;
					for (const [u, a] of Object.entries(d)) {
						const h = C.tf.get(u);
						if (!h) continue;
						let c = m.get(u);
						typeof c != "number" && ((c = this.j(u)), m.set(u, c));
						const n = h * c;
						r += n * a;
					}
					return r;
				}
				i(C) {
					const d = i.c(C);
					return this.k(d);
				}
				j(C) {
					const d = this.f.get(C) ?? 0;
					return d > 0 ? Math.log((this.e + 1) / d) : 0;
				}
				k(C) {
					const d = Object.create(null);
					for (const [m, r] of C) {
						const u = this.j(m);
						u > 0 && (d[m] = r * u);
					}
					return d;
				}
			}
			e.$8pb = i;
			function w(E) {
				const C = E.slice(0);
				C.sort((m, r) => r.score - m.score);
				const d = C[0]?.score ?? 0;
				if (d > 0) for (const m of C) m.score /= d;
				return C;
			}
		}),
		