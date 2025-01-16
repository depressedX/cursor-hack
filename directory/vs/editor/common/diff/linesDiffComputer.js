define(de[1147], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$FL = e.$EL = void 0);
			class t {
				constructor(E, C, d) {
					(this.changes = E), (this.moves = C), (this.hitTimeout = d);
				}
			}
			e.$EL = t;
			class i {
				constructor(E, C) {
					(this.lineRangeMapping = E), (this.changes = C);
				}
				flip() {
					return new i(
						this.lineRangeMapping.flip(),
						this.changes.map((E) => E.flip()),
					);
				}
			}
			e.$FL = i;
		}),
		define(
			de[342],
			he([1, 0, 29, 196, 48, 17, 490]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$DL = e.$CL = e.$BL = void 0);
				class d {
					static inverse(c, n, g) {
						const p = [];
						let o = 1,
							f = 1;
						for (const s of c) {
							const l = new d(
								new i.$rL(o, s.original.startLineNumber),
								new i.$rL(f, s.modified.startLineNumber),
							);
							l.modified.isEmpty || p.push(l),
								(o = s.original.endLineNumberExclusive),
								(f = s.modified.endLineNumberExclusive);
						}
						const b = new d(new i.$rL(o, n + 1), new i.$rL(f, g + 1));
						return b.modified.isEmpty || p.push(b), p;
					}
					static clip(c, n, g) {
						const p = [];
						for (const o of c) {
							const f = o.original.intersect(n),
								b = o.modified.intersect(g);
							f && !f.isEmpty && b && !b.isEmpty && p.push(new d(f, b));
						}
						return p;
					}
					constructor(c, n) {
						(this.original = c), (this.modified = n);
					}
					toString() {
						return `{${this.original.toString()}->${this.modified.toString()}}`;
					}
					flip() {
						return new d(this.modified, this.original);
					}
					join(c) {
						return new d(
							this.original.join(c.original),
							this.modified.join(c.modified),
						);
					}
					get changedLineCount() {
						return Math.max(this.original.length, this.modified.length);
					}
					toRangeMapping() {
						const c = this.original.toInclusiveRange(),
							n = this.modified.toInclusiveRange();
						if (c && n) return new a(c, n);
						if (
							this.original.startLineNumber === 1 ||
							this.modified.startLineNumber === 1
						) {
							if (
								!(
									this.modified.startLineNumber === 1 &&
									this.original.startLineNumber === 1
								)
							)
								throw new t.$gb("not a valid diff");
							return new a(
								new E.$iL(
									this.original.startLineNumber,
									1,
									this.original.endLineNumberExclusive,
									1,
								),
								new E.$iL(
									this.modified.startLineNumber,
									1,
									this.modified.endLineNumberExclusive,
									1,
								),
							);
						} else
							return new a(
								new E.$iL(
									this.original.startLineNumber - 1,
									Number.MAX_SAFE_INTEGER,
									this.original.endLineNumberExclusive - 1,
									Number.MAX_SAFE_INTEGER,
								),
								new E.$iL(
									this.modified.startLineNumber - 1,
									Number.MAX_SAFE_INTEGER,
									this.modified.endLineNumberExclusive - 1,
									Number.MAX_SAFE_INTEGER,
								),
							);
					}
					toRangeMapping2(c, n) {
						if (
							r(this.original.endLineNumberExclusive, c) &&
							r(this.modified.endLineNumberExclusive, n)
						)
							return new a(
								new E.$iL(
									this.original.startLineNumber,
									1,
									this.original.endLineNumberExclusive,
									1,
								),
								new E.$iL(
									this.modified.startLineNumber,
									1,
									this.modified.endLineNumberExclusive,
									1,
								),
							);
						if (!this.original.isEmpty && !this.modified.isEmpty)
							return new a(
								E.$iL.fromPositions(
									new w.$hL(this.original.startLineNumber, 1),
									m(
										new w.$hL(
											this.original.endLineNumberExclusive - 1,
											Number.MAX_SAFE_INTEGER,
										),
										c,
									),
								),
								E.$iL.fromPositions(
									new w.$hL(this.modified.startLineNumber, 1),
									m(
										new w.$hL(
											this.modified.endLineNumberExclusive - 1,
											Number.MAX_SAFE_INTEGER,
										),
										n,
									),
								),
							);
						if (
							this.original.startLineNumber > 1 &&
							this.modified.startLineNumber > 1
						)
							return new a(
								E.$iL.fromPositions(
									m(
										new w.$hL(
											this.original.startLineNumber - 1,
											Number.MAX_SAFE_INTEGER,
										),
										c,
									),
									m(
										new w.$hL(
											this.original.endLineNumberExclusive - 1,
											Number.MAX_SAFE_INTEGER,
										),
										c,
									),
								),
								E.$iL.fromPositions(
									m(
										new w.$hL(
											this.modified.startLineNumber - 1,
											Number.MAX_SAFE_INTEGER,
										),
										n,
									),
									m(
										new w.$hL(
											this.modified.endLineNumberExclusive - 1,
											Number.MAX_SAFE_INTEGER,
										),
										n,
									),
								),
							);
						throw new t.$gb();
					}
				}
				e.$BL = d;
				function m(h, c) {
					if (h.lineNumber < 1) return new w.$hL(1, 1);
					if (h.lineNumber > c.length)
						return new w.$hL(c.length, c[c.length - 1].length + 1);
					const n = c[h.lineNumber - 1];
					return h.column > n.length + 1
						? new w.$hL(h.lineNumber, n.length + 1)
						: h;
				}
				function r(h, c) {
					return h >= 1 && h <= c.length;
				}
				class u extends d {
					static fromRangeMappings(c) {
						const n = i.$rL.join(
								c.map((p) => i.$rL.fromRangeInclusive(p.originalRange)),
							),
							g = i.$rL.join(
								c.map((p) => i.$rL.fromRangeInclusive(p.modifiedRange)),
							);
						return new u(n, g, c);
					}
					constructor(c, n, g) {
						super(c, n), (this.innerChanges = g);
					}
					flip() {
						return new u(
							this.modified,
							this.original,
							this.innerChanges?.map((c) => c.flip()),
						);
					}
					withInnerChangesFromLineRanges() {
						return new u(this.original, this.modified, [this.toRangeMapping()]);
					}
				}
				e.$CL = u;
				class a {
					static assertSorted(c) {
						for (let n = 1; n < c.length; n++) {
							const g = c[n - 1],
								p = c[n];
							if (
								!(
									g.originalRange
										.getEndPosition()
										.isBeforeOrEqual(p.originalRange.getStartPosition()) &&
									g.modifiedRange
										.getEndPosition()
										.isBeforeOrEqual(p.modifiedRange.getStartPosition())
								)
							)
								throw new t.$gb("Range mappings must be sorted");
						}
					}
					constructor(c, n) {
						(this.originalRange = c), (this.modifiedRange = n);
					}
					toString() {
						return `{${this.originalRange.toString()}->${this.modifiedRange.toString()}}`;
					}
					flip() {
						return new a(this.modifiedRange, this.originalRange);
					}
					toTextEdit(c) {
						const n = c.getValueOfRange(this.modifiedRange);
						return new C.$wL(this.originalRange, n);
					}
				}
				e.$DL = a;
			},
		),
		define(
			de[2554],
			he([1, 0, 656, 342, 24, 214, 59, 196, 1531, 911, 1529, 17]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$fxb = h);
				function h(b, s, l, y, $, v) {
					let { moves: S, excludedChanges: I } = n(b, s, l, v);
					if (!v.isValid()) return [];
					const T = b.filter((k) => !I.has(k)),
						P = g(T, y, $, s, l, v);
					return (
						(0, w.$4b)(S, P),
						(S = o(S)),
						(S = S.filter((k) => {
							const L = k.original
								.toOffsetRange()
								.slice(s)
								.map((M) => M.trim());
							return (
								L.join(`
`).length >= 15 && c(L, (M) => M.length >= 2) >= 2
							);
						})),
						(S = f(b, S)),
						S
					);
				}
				function c(b, s) {
					let l = 0;
					for (const y of b) s(y) && l++;
					return l;
				}
				function n(b, s, l, y) {
					const $ = [],
						v = b
							.filter((T) => T.modified.isEmpty && T.original.length >= 3)
							.map((T) => new r.$bxb(T.original, s, T)),
						S = new Set(
							b
								.filter((T) => T.original.isEmpty && T.modified.length >= 3)
								.map((T) => new r.$bxb(T.modified, l, T)),
						),
						I = new Set();
					for (const T of v) {
						let P = -1,
							k;
						for (const L of S) {
							const D = T.computeSimilarity(L);
							D > P && ((P = D), (k = L));
						}
						if (
							(P > 0.9 &&
								k &&
								(S.delete(k),
								$.push(new i.$BL(T.range, k.range)),
								I.add(T.source),
								I.add(k.source)),
							!y.isValid())
						)
							return { moves: $, excludedChanges: I };
					}
					return { moves: $, excludedChanges: I };
				}
				function g(b, s, l, y, $, v) {
					const S = [],
						I = new C.$Nc();
					for (const D of b)
						for (
							let M = D.original.startLineNumber;
							M < D.original.endLineNumberExclusive - 2;
							M++
						) {
							const N = `${s[M - 1]}:${s[M + 1 - 1]}:${s[M + 2 - 1]}`;
							I.add(N, { range: new d.$rL(M, M + 3) });
						}
					const T = [];
					b.sort((0, w.$0b)((D) => D.modified.startLineNumber, w.$_b));
					for (const D of b) {
						let M = [];
						for (
							let N = D.modified.startLineNumber;
							N < D.modified.endLineNumberExclusive - 2;
							N++
						) {
							const A = `${l[N - 1]}:${l[N + 1 - 1]}:${l[N + 2 - 1]}`,
								R = new d.$rL(N, N + 3),
								O = [];
							I.forEach(A, ({ range: B }) => {
								for (const z of M)
									if (
										z.originalLineRange.endLineNumberExclusive + 1 ===
											B.endLineNumberExclusive &&
										z.modifiedLineRange.endLineNumberExclusive + 1 ===
											R.endLineNumberExclusive
									) {
										(z.originalLineRange = new d.$rL(
											z.originalLineRange.startLineNumber,
											B.endLineNumberExclusive,
										)),
											(z.modifiedLineRange = new d.$rL(
												z.modifiedLineRange.startLineNumber,
												R.endLineNumberExclusive,
											)),
											O.push(z);
										return;
									}
								const U = { modifiedLineRange: R, originalLineRange: B };
								T.push(U), O.push(U);
							}),
								(M = O);
						}
						if (!v.isValid()) return [];
					}
					T.sort(
						(0, w.$bc)((0, w.$0b)((D) => D.modifiedLineRange.length, w.$_b)),
					);
					const P = new d.$sL(),
						k = new d.$sL();
					for (const D of T) {
						const M =
								D.modifiedLineRange.startLineNumber -
								D.originalLineRange.startLineNumber,
							N = P.subtractFrom(D.modifiedLineRange),
							A = k.subtractFrom(D.originalLineRange).getWithDelta(M),
							R = N.getIntersection(A);
						for (const O of R.ranges) {
							if (O.length < 3) continue;
							const B = O,
								U = O.delta(-M);
							S.push(new i.$BL(U, B)), P.addRange(B), k.addRange(U);
						}
					}
					S.sort((0, w.$0b)((D) => D.original.startLineNumber, w.$_b));
					const L = new E.$qb(b);
					for (let D = 0; D < S.length; D++) {
						const M = S[D],
							N = L.findLastMonotonous(
								(x) => x.original.startLineNumber <= M.original.startLineNumber,
							),
							A = (0, E.$lb)(
								b,
								(x) => x.modified.startLineNumber <= M.modified.startLineNumber,
							),
							R = Math.max(
								M.original.startLineNumber - N.original.startLineNumber,
								M.modified.startLineNumber - A.modified.startLineNumber,
							),
							O = L.findLastMonotonous(
								(x) =>
									x.original.startLineNumber <
									M.original.endLineNumberExclusive,
							),
							B = (0, E.$lb)(
								b,
								(x) =>
									x.modified.startLineNumber <
									M.modified.endLineNumberExclusive,
							),
							U = Math.max(
								O.original.endLineNumberExclusive -
									M.original.endLineNumberExclusive,
								B.modified.endLineNumberExclusive -
									M.modified.endLineNumberExclusive,
							);
						let z;
						for (z = 0; z < R; z++) {
							const x = M.original.startLineNumber - z - 1,
								H = M.modified.startLineNumber - z - 1;
							if (
								x > y.length ||
								H > $.length ||
								P.contains(H) ||
								k.contains(x) ||
								!p(y[x - 1], $[H - 1], v)
							)
								break;
						}
						z > 0 &&
							(k.addRange(
								new d.$rL(
									M.original.startLineNumber - z,
									M.original.startLineNumber,
								),
							),
							P.addRange(
								new d.$rL(
									M.modified.startLineNumber - z,
									M.modified.startLineNumber,
								),
							));
						let F;
						for (F = 0; F < U; F++) {
							const x = M.original.endLineNumberExclusive + F,
								H = M.modified.endLineNumberExclusive + F;
							if (
								x > y.length ||
								H > $.length ||
								P.contains(H) ||
								k.contains(x) ||
								!p(y[x - 1], $[H - 1], v)
							)
								break;
						}
						F > 0 &&
							(k.addRange(
								new d.$rL(
									M.original.endLineNumberExclusive,
									M.original.endLineNumberExclusive + F,
								),
							),
							P.addRange(
								new d.$rL(
									M.modified.endLineNumberExclusive,
									M.modified.endLineNumberExclusive + F,
								),
							)),
							(z > 0 || F > 0) &&
								(S[D] = new i.$BL(
									new d.$rL(
										M.original.startLineNumber - z,
										M.original.endLineNumberExclusive + F,
									),
									new d.$rL(
										M.modified.startLineNumber - z,
										M.modified.endLineNumberExclusive + F,
									),
								));
					}
					return S;
				}
				function p(b, s, l) {
					if (b.trim() === s.trim()) return !0;
					if (b.length > 300 && s.length > 300) return !1;
					const $ = new u.$dxb().compute(
						new m.$exb([b], new a.$iL(1, 1, 1, b.length), !1),
						new m.$exb([s], new a.$iL(1, 1, 1, s.length), !1),
						l,
					);
					let v = 0;
					const S = t.$8wb.invert($.diffs, b.length);
					for (const k of S)
						k.seq1Range.forEach((L) => {
							(0, r.$axb)(b.charCodeAt(L)) || v++;
						});
					function I(k) {
						let L = 0;
						for (let D = 0; D < b.length; D++)
							(0, r.$axb)(k.charCodeAt(D)) || L++;
						return L;
					}
					const T = I(b.length > s.length ? b : s);
					return v / T > 0.6 && T > 10;
				}
				function o(b) {
					if (b.length === 0) return b;
					b.sort((0, w.$0b)((l) => l.original.startLineNumber, w.$_b));
					const s = [b[0]];
					for (let l = 1; l < b.length; l++) {
						const y = s[s.length - 1],
							$ = b[l],
							v =
								$.original.startLineNumber - y.original.endLineNumberExclusive,
							S =
								$.modified.startLineNumber - y.modified.endLineNumberExclusive;
						if (v >= 0 && S >= 0 && v + S <= 2) {
							s[s.length - 1] = y.join($);
							continue;
						}
						s.push($);
					}
					return s;
				}
				function f(b, s) {
					const l = new E.$qb(b);
					return (
						(s = s.filter((y) => {
							const $ =
									l.findLastMonotonous(
										(I) =>
											I.original.startLineNumber <
											y.original.endLineNumberExclusive,
									) || new i.$BL(new d.$rL(1, 1), new d.$rL(1, 1)),
								v = (0, E.$lb)(
									b,
									(I) =>
										I.modified.startLineNumber <
										y.modified.endLineNumberExclusive,
								);
							return $ !== v;
						})),
						s
					);
				}
			},
		),
		define(
			de[1532],
			he([
				1, 0, 24, 229, 196, 289, 17, 656, 2552, 1529, 2554, 1530, 2551, 1531,
				1147, 2553, 342,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nxb = void 0),
					(e.$oxb = f),
					(e.$pxb = b);
				class o {
					constructor() {
						(this.e = new m.$cxb()),
							(this.f = new r.$dxb()),
							(this.h = new g.$mxb());
					}
					computeDiff(y, $, v) {
						if (y.length <= 1 && (0, t.$yb)(y, $, (G, K) => G === K))
							return new n.$EL([], [], !1);
						if (
							(y.length === 1 && y[0].length === 0) ||
							($.length === 1 && $[0].length === 0)
						)
							return new n.$EL(
								[
									new p.$CL(
										new w.$rL(1, y.length + 1),
										new w.$rL(1, $.length + 1),
										[
											new p.$DL(
												new C.$iL(1, 1, y.length, y[y.length - 1].length + 1),
												new C.$iL(1, 1, $.length, $[$.length - 1].length + 1),
											),
										],
									),
								],
								[],
								!1,
							);
						const S =
								v.maxComputationTimeMs === 0
									? d.$0wb.instance
									: new d.$$wb(
											v.maxComputationTimeMs,
											v.shouldGracefullyFallBackOnTimeout,
										),
							I = !v.ignoreTrimWhitespace,
							T = new Map();
						function P(G) {
							let K = T.get(G);
							return K === void 0 && ((K = T.size), T.set(G, K)), K;
						}
						const k =
								y.length * $.length < 1e6 &&
								v.onlyCareAboutPrefixOfOriginalLines === !0,
							L = y.map((G) => P(k ? G : G.trim())),
							D = $.map((G) => P(k ? G : G.trim())),
							M = y.every((G) => G.trim().length === 0),
							N = new h.$gxb(L, y),
							A = new h.$gxb(D, $),
							R = k
								? M
									? d.$7wb.trivial(N, A)
									: this.h.compute(N, A, S, (G, K) =>
											y[G] === $[K]
												? $[K].length === 0
													? 0.1
													: 1 + Math.log(1 + $[K].length)
												: 0.99,
										)
								: N.length + A.length < 1700
									? this.e.compute(N, A, S, (G, K) =>
											y[G] === $[K]
												? $[K].length === 0
													? 0.1
													: 1 + Math.log(1 + $[K].length)
												: 0.99,
										)
									: this.f.compute(N, A, S);
						let O = R.diffs,
							B = R.hitTimeout;
						if (k) {
							const G = O.map(
								(K) =>
									new p.$CL(
										new w.$rL(
											K.seq1Range.start + 1,
											K.seq1Range.endExclusive + 1,
										),
										new w.$rL(
											K.seq2Range.start + 1,
											K.seq2Range.endExclusive + 1,
										),
										[],
									),
							);
							return new n.$EL(G, [], B);
						}
						const U = B;
						(O = (0, a.$hxb)(N, A, O)), (O = (0, a.$kxb)(N, A, O));
						const z = [],
							F = (G) => {
								if (I)
									for (let K = 0; K < G; K++) {
										const J = x + K,
											W = H + K;
										if (y[J] !== $[W]) {
											const X = this.k(
												y,
												$,
												new d.$8wb(new E.$pL(J, J + 1), new E.$pL(W, W + 1)),
												S,
												I,
											);
											for (const Y of X.mappings) z.push(Y);
											X.hitTimeout && (B = !0);
										}
									}
							};
						let x = 0,
							H = 0;
						for (const G of O) {
							(0, i.$nd)(() => G.seq1Range.start - x === G.seq2Range.start - H);
							const K = G.seq1Range.start - x;
							F(K),
								(x = G.seq1Range.endExclusive),
								(H = G.seq2Range.endExclusive);
							const J = this.k(y, $, G, S, I);
							J.hitTimeout && (B = !0);
							for (const W of J.mappings) z.push(W);
						}
						F(y.length - x);
						const q = f(z, y, $);
						let V = [];
						if (
							(v.computeMoves && (V = this.j(q, y, $, L, D, S, I)),
							(0, i.$nd)(() => {
								function G(J, W) {
									if (J.lineNumber < 1 || J.lineNumber > W.length) return !1;
									const X = W[J.lineNumber - 1];
									return !(J.column < 1 || J.column > X.length + 1);
								}
								function K(J, W) {
									return !(
										J.startLineNumber < 1 ||
										J.startLineNumber > W.length + 1 ||
										J.endLineNumberExclusive < 1 ||
										J.endLineNumberExclusive > W.length + 1
									);
								}
								for (const J of q) {
									if (!J.innerChanges) return !1;
									for (const W of J.innerChanges)
										if (
											!(
												G(W.modifiedRange.getStartPosition(), $) &&
												G(W.modifiedRange.getEndPosition(), $) &&
												G(W.originalRange.getStartPosition(), y) &&
												G(W.originalRange.getEndPosition(), y)
											)
										)
											return !1;
									if (!K(J.modified, $) || !K(J.original, y)) return !1;
								}
								return !0;
							}),
							v.shouldGracefullyFallBackOnTimeout === !0 && B && !U)
						) {
							const G = O.map(
								(K) =>
									new p.$CL(
										new w.$rL(
											K.seq1Range.start + 1,
											K.seq1Range.endExclusive + 1,
										),
										new w.$rL(
											K.seq2Range.start + 1,
											K.seq2Range.endExclusive + 1,
										),
										[],
									),
							);
							return new n.$EL(G, [], U);
						}
						return new n.$EL(q, V, B);
					}
					j(y, $, v, S, I, T, P) {
						return (0, u.$fxb)(y, $, v, S, I, T).map((D) => {
							const M = this.k(
									$,
									v,
									new d.$8wb(
										D.original.toOffsetRange(),
										D.modified.toOffsetRange(),
									),
									T,
									P,
								),
								N = f(M.mappings, $, v, !0);
							return new n.$FL(D, N);
						});
					}
					k(y, $, v, S, I) {
						const P = s(v).toRangeMapping2(y, $),
							k = new c.$exb(y, P.originalRange, I),
							L = new c.$exb($, P.modifiedRange, I),
							D =
								k.length + L.length < 500
									? this.e.compute(k, L, S)
									: this.f.compute(k, L, S),
							M = !1;
						let N = D.diffs;
						M && d.$8wb.assertSorted(N),
							(N = (0, a.$hxb)(k, L, N)),
							M && d.$8wb.assertSorted(N),
							(N = (0, a.$jxb)(k, L, N)),
							M && d.$8wb.assertSorted(N),
							(N = (0, a.$ixb)(k, L, N)),
							M && d.$8wb.assertSorted(N),
							(N = (0, a.$lxb)(k, L, N)),
							M && d.$8wb.assertSorted(N);
						const A = N.map(
							(R) =>
								new p.$DL(
									k.translateRange(R.seq1Range),
									L.translateRange(R.seq2Range),
								),
						);
						return (
							M && p.$DL.assertSorted(A),
							{ mappings: A, hitTimeout: D.hitTimeout }
						);
					}
				}
				e.$nxb = o;
				function f(l, y, $, v = !1) {
					const S = [];
					for (const I of (0, t.$Eb)(
						l.map((T) => b(T, y, $)),
						(T, P) =>
							T.original.overlapOrTouch(P.original) ||
							T.modified.overlapOrTouch(P.modified),
					)) {
						const T = I[0],
							P = I[I.length - 1];
						S.push(
							new p.$CL(
								T.original.join(P.original),
								T.modified.join(P.modified),
								I.map((k) => k.innerChanges[0]),
							),
						);
					}
					return (
						(0, i.$nd)(() =>
							!v &&
							S.length > 0 &&
							(S[0].modified.startLineNumber !==
								S[0].original.startLineNumber ||
								$.length - S[S.length - 1].modified.endLineNumberExclusive !==
									y.length - S[S.length - 1].original.endLineNumberExclusive)
								? !1
								: (0, i.$od)(
										S,
										(I, T) =>
											T.original.startLineNumber -
												I.original.endLineNumberExclusive ===
												T.modified.startLineNumber -
													I.modified.endLineNumberExclusive &&
											I.original.endLineNumberExclusive <
												T.original.startLineNumber &&
											I.modified.endLineNumberExclusive <
												T.modified.startLineNumber,
									),
						),
						S
					);
				}
				function b(l, y, $) {
					let v = 0,
						S = 0;
					l.modifiedRange.endColumn === 1 &&
						l.originalRange.endColumn === 1 &&
						l.originalRange.startLineNumber + v <=
							l.originalRange.endLineNumber &&
						l.modifiedRange.startLineNumber + v <=
							l.modifiedRange.endLineNumber &&
						(S = -1),
						l.modifiedRange.startColumn - 1 >=
							$[l.modifiedRange.startLineNumber - 1].length &&
							l.originalRange.startColumn - 1 >=
								y[l.originalRange.startLineNumber - 1].length &&
							l.originalRange.startLineNumber <=
								l.originalRange.endLineNumber + S &&
							l.modifiedRange.startLineNumber <=
								l.modifiedRange.endLineNumber + S &&
							(v = 1);
					const I = new w.$rL(
							l.originalRange.startLineNumber + v,
							l.originalRange.endLineNumber + 1 + S,
						),
						T = new w.$rL(
							l.modifiedRange.startLineNumber + v,
							l.modifiedRange.endLineNumber + 1 + S,
						);
					return new p.$CL(I, T, [l]);
				}
				function s(l) {
					return new p.$BL(
						new w.$rL(l.seq1Range.start + 1, l.seq1Range.endExclusive + 1),
						new w.$rL(l.seq2Range.start + 1, l.seq2Range.endExclusive + 1),
					);
				}
			},
		),
		define(
			de[1533],
			he([1, 0, 120, 745, 1147, 342, 37, 17, 229, 196]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$HL = e.$GL = void 0),
					(C = mt(C));
				const u = 3;
				class a {
					computeDiff($, v, S) {
						const T = new f($, v, {
								maxComputationTime: S.maxComputationTimeMs,
								shouldIgnoreTrimWhitespace: S.ignoreTrimWhitespace,
								shouldComputeCharChanges: !0,
								shouldMakePrettyDiff: !0,
								shouldPostProcessCharChanges: !0,
							}).computeDiff(),
							P = [];
						let k = null;
						for (const L of T.changes) {
							let D;
							L.originalEndLineNumber === 0
								? (D = new r.$rL(
										L.originalStartLineNumber + 1,
										L.originalStartLineNumber + 1,
									))
								: (D = new r.$rL(
										L.originalStartLineNumber,
										L.originalEndLineNumber + 1,
									));
							let M;
							L.modifiedEndLineNumber === 0
								? (M = new r.$rL(
										L.modifiedStartLineNumber + 1,
										L.modifiedStartLineNumber + 1,
									))
								: (M = new r.$rL(
										L.modifiedStartLineNumber,
										L.modifiedEndLineNumber + 1,
									));
							let N = new E.$CL(
								D,
								M,
								L.charChanges?.map(
									(A) =>
										new E.$DL(
											new d.$iL(
												A.originalStartLineNumber,
												A.originalStartColumn,
												A.originalEndLineNumber,
												A.originalEndColumn,
											),
											new d.$iL(
												A.modifiedStartLineNumber,
												A.modifiedStartColumn,
												A.modifiedEndLineNumber,
												A.modifiedEndColumn,
											),
										),
								),
							);
							k &&
								(k.modified.endLineNumberExclusive ===
									N.modified.startLineNumber ||
									k.original.endLineNumberExclusive ===
										N.original.startLineNumber) &&
								((N = new E.$CL(
									k.original.join(N.original),
									k.modified.join(N.modified),
									k.innerChanges && N.innerChanges
										? k.innerChanges.concat(N.innerChanges)
										: void 0,
								)),
								P.pop()),
								P.push(N),
								(k = N);
						}
						return (
							(0, m.$nd)(() =>
								(0, m.$od)(
									P,
									(L, D) =>
										D.original.startLineNumber -
											L.original.endLineNumberExclusive ===
											D.modified.startLineNumber -
												L.modified.endLineNumberExclusive &&
										L.original.endLineNumberExclusive <
											D.original.startLineNumber &&
										L.modified.endLineNumberExclusive <
											D.modified.startLineNumber,
								),
							),
							new w.$EL(P, [], T.quitEarly)
						);
					}
				}
				e.$GL = a;
				function h(y, $, v, S) {
					return new i.$oL(y, $, v).ComputeDiff(S);
				}
				class c {
					constructor($) {
						const v = [],
							S = [];
						for (let I = 0, T = $.length; I < T; I++)
							(v[I] = b($[I], 1)), (S[I] = s($[I], 1));
						(this.lines = $), (this.a = v), (this.b = S);
					}
					getElements() {
						const $ = [];
						for (let v = 0, S = this.lines.length; v < S; v++)
							$[v] = this.lines[v].substring(this.a[v] - 1, this.b[v] - 1);
						return $;
					}
					getStrictElement($) {
						return this.lines[$];
					}
					getStartLineNumber($) {
						return $ + 1;
					}
					getEndLineNumber($) {
						return $ + 1;
					}
					createCharSequence($, v, S) {
						const I = [],
							T = [],
							P = [];
						let k = 0;
						for (let L = v; L <= S; L++) {
							const D = this.lines[L],
								M = $ ? this.a[L] : 1,
								N = $ ? this.b[L] : D.length + 1;
							for (let A = M; A < N; A++)
								(I[k] = D.charCodeAt(A - 1)), (T[k] = L + 1), (P[k] = A), k++;
							!$ &&
								L < S &&
								((I[k] = t.CharCode.LineFeed),
								(T[k] = L + 1),
								(P[k] = D.length + 1),
								k++);
						}
						return new n(I, T, P);
					}
				}
				class n {
					constructor($, v, S) {
						(this.a = $), (this.b = v), (this.d = S);
					}
					toString() {
						return (
							"[" +
							this.a
								.map(
									($, v) =>
										($ === t.CharCode.LineFeed
											? "\\n"
											: String.fromCharCode($)) +
										`-(${this.b[v]},${this.d[v]})`,
								)
								.join(", ") +
							"]"
						);
					}
					e($, v) {
						if ($ < 0 || $ >= v.length) throw new Error("Illegal index");
					}
					getElements() {
						return this.a;
					}
					getStartLineNumber($) {
						return $ > 0 && $ === this.b.length
							? this.getEndLineNumber($ - 1)
							: (this.e($, this.b), this.b[$]);
					}
					getEndLineNumber($) {
						return $ === -1
							? this.getStartLineNumber($ + 1)
							: (this.e($, this.b),
								this.a[$] === t.CharCode.LineFeed ? this.b[$] + 1 : this.b[$]);
					}
					getStartColumn($) {
						return $ > 0 && $ === this.d.length
							? this.getEndColumn($ - 1)
							: (this.e($, this.d), this.d[$]);
					}
					getEndColumn($) {
						return $ === -1
							? this.getStartColumn($ + 1)
							: (this.e($, this.d),
								this.a[$] === t.CharCode.LineFeed ? 1 : this.d[$] + 1);
					}
				}
				class g {
					constructor($, v, S, I, T, P, k, L) {
						(this.originalStartLineNumber = $),
							(this.originalStartColumn = v),
							(this.originalEndLineNumber = S),
							(this.originalEndColumn = I),
							(this.modifiedStartLineNumber = T),
							(this.modifiedStartColumn = P),
							(this.modifiedEndLineNumber = k),
							(this.modifiedEndColumn = L);
					}
					static createFromDiffChange($, v, S) {
						const I = v.getStartLineNumber($.originalStart),
							T = v.getStartColumn($.originalStart),
							P = v.getEndLineNumber($.originalStart + $.originalLength - 1),
							k = v.getEndColumn($.originalStart + $.originalLength - 1),
							L = S.getStartLineNumber($.modifiedStart),
							D = S.getStartColumn($.modifiedStart),
							M = S.getEndLineNumber($.modifiedStart + $.modifiedLength - 1),
							N = S.getEndColumn($.modifiedStart + $.modifiedLength - 1);
						return new g(I, T, P, k, L, D, M, N);
					}
				}
				function p(y) {
					if (y.length <= 1) return y;
					const $ = [y[0]];
					let v = $[0];
					for (let S = 1, I = y.length; S < I; S++) {
						const T = y[S],
							P = T.originalStart - (v.originalStart + v.originalLength),
							k = T.modifiedStart - (v.modifiedStart + v.modifiedLength);
						Math.min(P, k) < u
							? ((v.originalLength =
									T.originalStart + T.originalLength - v.originalStart),
								(v.modifiedLength =
									T.modifiedStart + T.modifiedLength - v.modifiedStart))
							: ($.push(T), (v = T));
					}
					return $;
				}
				class o {
					constructor($, v, S, I, T) {
						(this.originalStartLineNumber = $),
							(this.originalEndLineNumber = v),
							(this.modifiedStartLineNumber = S),
							(this.modifiedEndLineNumber = I),
							(this.charChanges = T);
					}
					static createFromDiffResult($, v, S, I, T, P, k) {
						let L, D, M, N, A;
						if (
							(v.originalLength === 0
								? ((L = S.getStartLineNumber(v.originalStart) - 1), (D = 0))
								: ((L = S.getStartLineNumber(v.originalStart)),
									(D = S.getEndLineNumber(
										v.originalStart + v.originalLength - 1,
									))),
							v.modifiedLength === 0
								? ((M = I.getStartLineNumber(v.modifiedStart) - 1), (N = 0))
								: ((M = I.getStartLineNumber(v.modifiedStart)),
									(N = I.getEndLineNumber(
										v.modifiedStart + v.modifiedLength - 1,
									))),
							P &&
								v.originalLength > 0 &&
								v.originalLength < 20 &&
								v.modifiedLength > 0 &&
								v.modifiedLength < 20 &&
								T())
						) {
							const R = S.createCharSequence(
									$,
									v.originalStart,
									v.originalStart + v.originalLength - 1,
								),
								O = I.createCharSequence(
									$,
									v.modifiedStart,
									v.modifiedStart + v.modifiedLength - 1,
								);
							if (R.getElements().length > 0 && O.getElements().length > 0) {
								let B = h(R, O, T, !0).changes;
								k && (B = p(B)), (A = []);
								for (let U = 0, z = B.length; U < z; U++)
									A.push(g.createFromDiffChange(B[U], R, O));
							}
						}
						return new o(L, D, M, N, A);
					}
				}
				class f {
					constructor($, v, S) {
						(this.a = S.shouldComputeCharChanges),
							(this.b = S.shouldPostProcessCharChanges),
							(this.d = S.shouldIgnoreTrimWhitespace),
							(this.e = S.shouldMakePrettyDiff),
							(this.f = $),
							(this.g = v),
							(this.h = new c($)),
							(this.j = new c(v)),
							(this.k = l(S.maxComputationTime)),
							(this.l = l(
								S.maxComputationTime === 0
									? 0
									: Math.min(S.maxComputationTime, 5e3),
							));
					}
					computeDiff() {
						if (this.h.lines.length === 1 && this.h.lines[0].length === 0)
							return this.j.lines.length === 1 && this.j.lines[0].length === 0
								? { quitEarly: !1, changes: [] }
								: {
										quitEarly: !1,
										changes: [
											{
												originalStartLineNumber: 1,
												originalEndLineNumber: 1,
												modifiedStartLineNumber: 1,
												modifiedEndLineNumber: this.j.lines.length,
												charChanges: void 0,
											},
										],
									};
						if (this.j.lines.length === 1 && this.j.lines[0].length === 0)
							return {
								quitEarly: !1,
								changes: [
									{
										originalStartLineNumber: 1,
										originalEndLineNumber: this.h.lines.length,
										modifiedStartLineNumber: 1,
										modifiedEndLineNumber: 1,
										charChanges: void 0,
									},
								],
							};
						const $ = h(this.h, this.j, this.k, this.e),
							v = $.changes,
							S = $.quitEarly;
						if (this.d) {
							const k = [];
							for (let L = 0, D = v.length; L < D; L++)
								k.push(
									o.createFromDiffResult(
										this.d,
										v[L],
										this.h,
										this.j,
										this.l,
										this.a,
										this.b,
									),
								);
							return { quitEarly: S, changes: k };
						}
						const I = [];
						let T = 0,
							P = 0;
						for (let k = -1, L = v.length; k < L; k++) {
							const D = k + 1 < L ? v[k + 1] : null,
								M = D ? D.originalStart : this.f.length,
								N = D ? D.modifiedStart : this.g.length;
							for (; T < M && P < N; ) {
								const A = this.f[T],
									R = this.g[P];
								if (A !== R) {
									{
										let O = b(A, 1),
											B = b(R, 1);
										for (; O > 1 && B > 1; ) {
											const U = A.charCodeAt(O - 2),
												z = R.charCodeAt(B - 2);
											if (U !== z) break;
											O--, B--;
										}
										(O > 1 || B > 1) && this.m(I, T + 1, 1, O, P + 1, 1, B);
									}
									{
										let O = s(A, 1),
											B = s(R, 1);
										const U = A.length + 1,
											z = R.length + 1;
										for (; O < U && B < z; ) {
											const F = A.charCodeAt(O - 1),
												x = A.charCodeAt(B - 1);
											if (F !== x) break;
											O++, B++;
										}
										(O < U || B < z) && this.m(I, T + 1, O, U, P + 1, B, z);
									}
								}
								T++, P++;
							}
							D &&
								(I.push(
									o.createFromDiffResult(
										this.d,
										D,
										this.h,
										this.j,
										this.l,
										this.a,
										this.b,
									),
								),
								(T += D.originalLength),
								(P += D.modifiedLength));
						}
						return { quitEarly: S, changes: I };
					}
					m($, v, S, I, T, P, k) {
						if (this.n($, v, S, I, T, P, k)) return;
						let L;
						this.a && (L = [new g(v, S, v, I, T, P, T, k)]),
							$.push(new o(v, v, T, T, L));
					}
					n($, v, S, I, T, P, k) {
						const L = $.length;
						if (L === 0) return !1;
						const D = $[L - 1];
						return D.originalEndLineNumber === 0 ||
							D.modifiedEndLineNumber === 0
							? !1
							: D.originalEndLineNumber === v && D.modifiedEndLineNumber === T
								? (this.a &&
										D.charChanges &&
										D.charChanges.push(new g(v, S, v, I, T, P, T, k)),
									!0)
								: D.originalEndLineNumber + 1 === v &&
										D.modifiedEndLineNumber + 1 === T
									? ((D.originalEndLineNumber = v),
										(D.modifiedEndLineNumber = T),
										this.a &&
											D.charChanges &&
											D.charChanges.push(new g(v, S, v, I, T, P, T, k)),
										!0)
									: !1;
					}
				}
				e.$HL = f;
				function b(y, $) {
					const v = C.$Bf(y);
					return v === -1 ? $ : v + 1;
				}
				function s(y, $) {
					const v = C.$Df(y);
					return v === -1 ? $ : v + 2;
				}
				function l(y) {
					if (y === 0) return () => !0;
					const $ = Date.now();
					return () => Date.now() - $ < y;
				}
			},
		),
		