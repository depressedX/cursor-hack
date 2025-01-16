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
		