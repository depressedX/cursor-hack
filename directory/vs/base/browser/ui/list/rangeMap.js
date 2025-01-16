define(de[2222], he([1, 0, 902]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$uib = void 0),
				(e.$rib = i),
				(e.$sib = w),
				(e.$tib = E);
			function i(m, r) {
				const u = [];
				for (const a of r) {
					if (m.start >= a.range.end) continue;
					if (m.end < a.range.start) break;
					const h = t.Range.intersect(m, a.range);
					t.Range.isEmpty(h) || u.push({ range: h, size: a.size });
				}
				return u;
			}
			function w({ start: m, end: r }, u) {
				return { start: m + u, end: r + u };
			}
			function E(m) {
				const r = [];
				let u = null;
				for (const a of m) {
					const h = a.range.start,
						c = a.range.end,
						n = a.size;
					if (u && n === u.size) {
						u.range.end = c;
						continue;
					}
					(u = { range: { start: h, end: c }, size: n }), r.push(u);
				}
				return r;
			}
			function C(...m) {
				return E(m.reduce((r, u) => r.concat(u), []));
			}
			class d {
				get paddingTop() {
					return this.c;
				}
				set paddingTop(r) {
					(this.b = this.b + r - this.c), (this.c = r);
				}
				constructor(r) {
					(this.a = []),
						(this.b = 0),
						(this.c = 0),
						(this.c = r ?? 0),
						(this.b = this.c);
				}
				splice(r, u, a = []) {
					const h = a.length - u,
						c = i({ start: 0, end: r }, this.a),
						n = i({ start: r + u, end: Number.POSITIVE_INFINITY }, this.a).map(
							(p) => ({ range: w(p.range, h), size: p.size }),
						),
						g = a.map((p, o) => ({
							range: { start: r + o, end: r + o + 1 },
							size: p.size,
						}));
					(this.a = C(c, g, n)),
						(this.b =
							this.c +
							this.a.reduce(
								(p, o) => p + o.size * (o.range.end - o.range.start),
								0,
							));
				}
				get count() {
					const r = this.a.length;
					return r ? this.a[r - 1].range.end : 0;
				}
				get size() {
					return this.b;
				}
				indexAt(r) {
					if (r < 0) return -1;
					if (r < this.c) return 0;
					let u = 0,
						a = this.c;
					for (const h of this.a) {
						const c = h.range.end - h.range.start,
							n = a + c * h.size;
						if (r < n) return u + Math.floor((r - a) / h.size);
						(u += c), (a = n);
					}
					return u;
				}
				indexAfter(r) {
					return Math.min(this.indexAt(r) + 1, this.count);
				}
				positionAt(r) {
					if (r < 0) return -1;
					let u = 0,
						a = 0;
					for (const h of this.a) {
						const c = h.range.end - h.range.start,
							n = a + c;
						if (r < n) return this.c + u + (r - a) * h.size;
						(u += c * h.size), (a = n);
					}
					return -1;
				}
			}
			e.$uib = d;
		}),
		