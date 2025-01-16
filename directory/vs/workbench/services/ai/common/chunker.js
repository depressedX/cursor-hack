define(de[1791], he([1, 0, 83]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$M6b = void 0);
			class i {
				constructor(E = 600, C = 300) {
					(this.maxChunkSize = E), (this.mergeChunkSize = C);
				}
				mergeRegexSplit(E) {
					const C = [];
					E.length >= 1 && C.push(E[0]);
					for (let d = 1; d < E.length; d += 2) C.push(E[d] + E[d + 1]);
					return C;
				}
				splitByNewlines(E, C) {
					const d = C >= 2 ? this.mergeChunkSize : this.maxChunkSize,
						m = E.length / 4;
					if (m <= d || C === 0) return [{ text: E, tokens: m }];
					const r = new RegExp(`(
{${C}})`),
						u = E.split(r),
						a = this.mergeRegexSplit(u),
						h = [];
					for (const c of a) h.push(...this.splitByNewlines(c, C - 1));
					return h;
				}
				mergeChunks(E, C) {
					const d = [];
					let m = E[0].text,
						r = E[0].tokens;
					for (const { text: u, tokens: a } of E.slice(1))
						a + r > C ? (d.push(m), (m = u), (r = a)) : ((m += u), (r += a));
					return d.push(m), d;
				}
				splitAndMergeChunks(E) {
					const C = this.splitByNewlines(E, 5);
					return this.mergeChunks(C, this.mergeChunkSize);
				}
				getFileChunks(E) {
					const C = this.splitAndMergeChunks(E),
						d = [],
						m = [],
						r = [],
						u = [];
					let a = 1,
						h = 1;
					for (const [n, g] of C.entries()) {
						d.push(a), m.push(1);
						const p = (g.match(/\n/g) || []).length;
						(a += p), n === 0 && a++, r.push(a - 1);
						const o = g.lastIndexOf(`
`);
						o === -1 ? (h = g.length + 1) : (h = g.length + 1 - (o + 1)),
							u.push(h);
					}
					const c = [];
					for (let n = 0; n < C.length; n++)
						c.push({
							range: {
								startPosition: new t.$ys({ line: d[n] - 1, column: m[n] - 1 }),
								endPosition: new t.$ys({ line: r[n] - 1, column: u[n] - 1 }),
							},
							contents: C[n],
						});
					return c;
				}
				getTextFromSelection(E, C) {
					const d = E.split(`
`),
						{ startPosition: m, endPosition: r } = C,
						{ line: u, column: a } = m,
						{ line: h, column: c } = r,
						n = u - 1,
						g = h - 1,
						p = a - 1,
						o = c - 1,
						f = d.slice(n, g + 1);
					return (
						(f[0] = f[0].slice(p)),
						(f[f.length - 1] = f[f.length - 1].slice(0, o)),
						f.join(`
`)
					);
				}
			}
			e.$M6b = i;
		}),
		