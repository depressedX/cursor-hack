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
		