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
		define(
			de[3233],
			he([
				1, 0, 2173, 1484, 341, 1469, 1113, 1108, 1107, 2175, 1482, 1487, 1116,
				1486, 1478, 893, 2170, 2171, 2169, 1471, 2166, 2168, 1474, 1117, 1114,
				1489, 1112, 1467,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ibb = void 0),
					(e.$ibb = {
						[w.$q0.typeName]: w.$q0,
						[C.$J0.typeName]: C.$J0,
						[E.$I0.typeName]: E.$I0,
						[T.$hbb.typeName]: T.$hbb,
						[d.$K0.typeName]: d.$K0,
						[I.$cbb.typeName]: I.$cbb,
						[m.$X$.typeName]: m.$X$,
						[c.$O_.typeName]: c.$O_,
						[s.$gab.typeName]: s.$gab,
						[t.$P9.typeName]: t.$P9,
						[i.$$9.typeName]: i.$$9,
						[r.$5$.typeName]: r.$5$,
						[f.$9_.typeName]: f.$9_,
						[u.$b_.typeName]: u.$b_,
						[a.$H_.typeName]: a.$H_,
						[h.$N_.typeName]: h.$N_,
						[o.$8_.typeName]: o.$8_,
						[n.$Bx.typeName]: n.$Bx,
						[p.$7_.typeName]: p.$7_,
						[g.$6_.typeName]: g.$6_,
						[l.$Iab.typeName]: l.$Iab,
						[y.$Mab.typeName]: y.$Mab,
						[$.$8ab.typeName]: $.$8ab,
						[v.$9ab.typeName]: v.$9ab,
						[b.$__.typeName]: b.$__,
						[S.$bbb.typeName]: S.$bbb,
					});
			},
		),
		