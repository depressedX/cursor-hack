import '../../../../require.js';
import '../../../../exports.js';
import './diff/line.js';
import './diff/word.js';
define(de[646], he([1, 0, 901, 1130]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$rqb = void 0),
				(e.$sqb = E),
				(e.$tqb = C),
				(e.$uqb = m),
				(e.$vqb = r),
				(e.$wqb = u),
				(e.$xqb = a),
				(e.$yqb = h),
				(e.$zqb = c),
				(e.$Aqb = n),
				(e.$Bqb = g),
				(e.$Cqb = p),
				(e.$Dqb = o),
				(e.$Eqb = f),
				(e.$Fqb = b),
				(e.$Gqb = s),
				(e.$Hqb = l),
				(e.$Iqb = y),
				(e.$Jqb = $),
				(e.$Kqb = v),
				(e.$Lqb = S),
				(e.$Mqb = I);
			class w {
				async diffLines(k, L, D, M) {
					const N = { ...M };
					delete N.singleLineChanges;
					const A = (0, t.$gqb)(L, k, N);
					return M?.singleLineChanges
						? A.map((O) => {
								const B = O.value.split(`
`);
								return B.map((z, F) =>
									F < B.length - 1
										? [
												{ value: z, added: O.added, removed: O.removed },
												{
													value: `
`,
													added: O.added,
													removed: O.removed,
												},
											]
										: { value: z, added: O.added, removed: O.removed },
								).flat();
							})
								.flat()
								.filter((O) => O.value !== "")
						: A;
				}
				async diffWords(k, L, D) {
					const M = { ...D };
					delete M.singleLineChanges;
					const N = (0, i.$pqb)(L, k, M);
					return D?.singleLineChanges
						? N.map((R) => {
								const O = R.value.split(" ");
								return O.map((U, z) =>
									z < O.length - 1
										? [
												{ value: U, added: R.added, removed: R.removed },
												{ value: " ", added: R.added, removed: R.removed },
											]
										: { value: U, added: R.added, removed: R.removed },
								).flat();
							})
								.flat()
								.filter((R) => R.value !== "")
						: N;
				}
			}
			e.$rqb = w;
			function E(P, k, L) {
				try {
					const { range: D, text: M } = k;
					if (
						D.startLineNumber > P.length + 1 ||
						(D.startLineNumber === P.length + 1 && D.startColumn !== 1)
					)
						throw new Error("Start of the range is outside the file.");
					const {
							startLineNumber: N,
							startColumn: A,
							endLineNumber: R,
							endColumn: O,
						} = D,
						U = (P[N - 1] ?? "").substring(0, A - 1),
						z = P[R - 1] ?? "",
						F = O === 1 ? z : z.substring(O - 1);
					L?.noNeedToMakeSureLinesAreLines === !0
						? P.splice(N - 1, R - N + 1, U + M + F)
						: P.splice(
								N - 1,
								R - N + 1,
								...(U + M + F).split(`
`),
							);
				} catch (D) {
					throw D;
				}
			}
			function C(P, k) {
				const L = P.split(`
`);
				return (
					E(L, k, { noNeedToMakeSureLinesAreLines: !0 }),
					L.join(`
`)
				);
			}
			const d = "cursorhashversionC7wtBsDmlFaPg4ToTvIlm";
			function m(P) {
				if (P.startsWith(d)) {
					const k = P.split(":");
					if (k[0] !== d) throw new Error("Unexpected hash version split");
					return parseInt(k[1], 10);
				}
				return 0;
			}
			function r(P, k) {
				if (k === void 0 || k === 0) return `${u(P, 0)}`;
				if (k === 1) {
					const L = `${d}:1:`;
					return P.length > 1e4 ? `${L}${u(P, 0)}` : `${L}${P}`;
				} else throw new Error("Unsupported hash version");
			}
			function u(P, k) {
				k = a(149417, k);
				for (let L = 0, D = P.length; L < D; L++) k = a(P.charCodeAt(L), k);
				return k;
			}
			function a(P, k) {
				return ((k << 5) - k + P) | 0;
			}
			function h(P) {
				return {
					startLineNumber: P.range.startLineNumber,
					endLineNumberExclusive: P.range.endLineNumber + 1,
				};
			}
			function c(P) {
				return {
					startLineNumber: P.range.startLineNumber,
					endLineNumberExclusive:
						P.range.startLineNumber +
						P.text.split(`
`).length,
				};
			}
			function n(P, k) {
				return P.split(`
`)
					.slice(k.startLineNumber - 1, k.endLineNumberExclusive - 1)
					.join(`
`);
			}
			function g(P, k, L) {
				const D = (A) =>
						A > k.startLineNumber
							? A > k.endLineNumberExclusive
								? L.endLineNumberExclusive - k.endLineNumberExclusive
								: L.endLineNumberExclusive - A
							: 0,
					M = P.startLineNumber + D(P.startLineNumber),
					N = P.endLineNumberExclusive + D(P.endLineNumberExclusive);
				return { startLineNumber: M, endLineNumberExclusive: N };
			}
			function p(P, k, L) {
				const D = (A) =>
						A > k.startLineNumber
							? A > k.endLineNumberExclusive
								? L.endLineNumberExclusive - k.endLineNumberExclusive
								: L.endLineNumberExclusive - A
							: 0,
					M = Math.min(
						L.startLineNumber,
						P.startLineNumber + D(P.startLineNumber),
					),
					N = Math.max(
						L.endLineNumberExclusive,
						P.endLineNumberExclusive + D(P.endLineNumberExclusive),
					);
				return { startLineNumber: M, endLineNumberExclusive: N };
			}
			function o(P, k, L, D, M) {
				const N = P.split(`
`),
					A = Math.floor((k.startLineNumber + k.endLineNumberExclusive) / 2),
					R = {
						startLineNumber: Math.max(1, A - (D ?? L)),
						endLineNumberExclusive: Math.min(N.length + 1, A + L + 1),
					};
				if (M !== !1) {
					for (
						;
						R.startLineNumber < R.endLineNumberExclusive &&
						N[R.startLineNumber - 1].trim() === "" &&
						R.startLineNumber > 1;
					)
						R.startLineNumber += 1;
					for (
						;
						R.startLineNumber < R.endLineNumberExclusive &&
						N[R.endLineNumberExclusive - 2].trim() === "" &&
						R.endLineNumberExclusive - 2 < N.length;
					)
						R.endLineNumberExclusive -= 1;
				}
				return R;
			}
			function f(P, k, L) {
				const D = [];
				let M = "",
					N = !1;
				for (const B of P)
					if (B.added) (N = !0), (M += B.value);
					else if (!B.removed) break;
				const A = N
					? M.split(`
`).length
					: 0;
				let R = 1,
					O = 1;
				for (const B of P) {
					const U = B.value.split(`
`),
						z = R + U.length - 1,
						F = U.length > 1 ? U[U.length - 1].length + 1 : O + B.value.length;
					if (B.added === !0) {
						const x = {
							startLineNumber: R,
							startColumn: O,
							endLineNumber: z,
							endColumn: F,
						};
						D.push({
							startLineNumber:
								x.startLineNumber +
								k.startLineNumber -
								1 -
								(L === "pre-change" ? A : 0),
							startColumn: x.startColumn,
							endLineNumber:
								x.endLineNumber +
								k.startLineNumber -
								1 -
								(L === "pre-change" ? A : 0),
							endColumn: x.endColumn,
						}),
							(O = F),
							(R = z);
					}
					B.removed !== !0 && ((O = F), (R = z));
				}
				return { greenRanges: D, redRanges: [] };
			}
			async function b({ past: P, current: k, diffingProvider: L }) {
				const D = await new Promise((H, q) => {
					const V = setTimeout(() => {
						q(new Error("Timeout exceeded"));
					}, 2e3);
					L !== void 0
						? L.diffLines(k, P, void 0, void 0).then((G) => H(G))
						: (0, t.$gqb)(P, k, (G, K) => {
								clearTimeout(V), H(K);
							});
				});
				let M = 1 / 0,
					N = -1 / 0,
					A = -1 / 0,
					R = 1;
				D.forEach((H, q) => {
					(H.added === !0 || H.removed === !0) &&
						((M = Math.min(M, R)),
						H.value.trim() !== "" && (N = Math.max(N, R + H.count - 1)),
						(A = Math.max(A, R + H.count - 1))),
						(R += H.count);
				}),
					(M = Math.max(0, M)),
					N === -1 / 0 && (N = A),
					(N = N);
				let O = M - 1,
					B = M - 1,
					U = 1 / 0,
					z = -1 / 0,
					F = 1 / 0,
					x = -1 / 0;
				for (let H = M; H <= N; H++) {
					R = 1;
					const q = D.find((V, G) => {
						const K = R + V.count,
							J = R <= H && H < K;
						return (R = K), J;
					});
					q !== void 0 &&
						(q.added === !0
							? (B++, (U = Math.min(U, B)), (z = Math.max(z, B)))
							: q.removed === !0
								? (O++, (F = Math.min(F, O)), (x = Math.max(x, O)))
								: (O++, B++));
				}
				if (!(U === 1 / 0 && F === 1 / 0))
					return (
						U === 1 / 0 && ((U = F), (z = F)),
						F === 1 / 0 && ((F = U), (x = z)),
						{
							oldRange: { startLineNumber: F, endLineNumberExclusive: x + 1 },
							newRange: { startLineNumber: U, endLineNumberExclusive: z + 1 },
						}
					);
			}
			function s(P, k) {
				if (k.range.startLineNumber < P.startLineNumber)
					throw new Error("change is not contained in model window");
				if (
					k.range.endLineNumber > P.endLineNumber &&
					!(
						k.range.endLineNumber === P.endLineNumber + 1 &&
						k.range.endColumn === 1 &&
						k.text.endsWith(`
`)
					)
				)
					throw new Error("change is not contained in model window");
				E(P.lines, {
					range: {
						startLineNumber: k.range.startLineNumber - P.startLineNumber + 1,
						startColumn: k.range.startColumn,
						endLineNumber: k.range.endLineNumber - P.startLineNumber + 1,
						endColumn: k.range.endColumn,
					},
					text: k.text,
				}),
					(P.endLineNumber = P.startLineNumber + P.lines.length - 1);
			}
			function l(P, k) {
				if (k.range.startLineNumber < P.startLineNumber)
					throw new Error("change is not contained in model window");
				if (
					k.range.endLineNumber > P.endLineNumber &&
					!(
						k.range.endLineNumber === P.endLineNumber + 1 &&
						k.range.endColumn === 1 &&
						k.text.endsWith(`
`)
					)
				)
					throw new Error("change is not contained in model window");
				const L = {
					range: S(k),
					text: y(P.lines, {
						startLineNumber: k.range.startLineNumber - P.startLineNumber + 1,
						startColumn: k.range.startColumn,
						endLineNumber: k.range.endLineNumber - P.startLineNumber + 1,
						endColumn: k.range.endColumn,
					}),
				};
				return s(P, k), L;
			}
			function y(P, k) {
				let L = "";
				for (
					let D = k.startLineNumber - 1;
					D < k.endLineNumber &&
					!(D === k.endLineNumber - 1 && k.endColumn === 1);
					D++
				) {
					const M = D === k.startLineNumber - 1 ? k.startColumn - 1 : 0,
						N = D === k.endLineNumber - 1 ? k.endColumn - 1 : P[D].length;
					(L += P[D].substring(M, N)),
						D < k.endLineNumber - 1 &&
							(L += `
`);
				}
				return L;
			}
			function $(P, k) {
				return (
					P.range.startLineNumber === k.range.startLineNumber &&
					P.range.startColumn === k.range.startColumn &&
					P.range.endLineNumber === k.range.endLineNumber &&
					P.range.endColumn === k.range.endColumn &&
					P.text === k.text
				);
			}
			function v(P) {
				return (
					P.startLineNumber === P.endLineNumber && P.startColumn === P.endColumn
				);
			}
			function S(P) {
				return {
					startLineNumber: P.range.startLineNumber,
					startColumn: P.range.startColumn,
					endLineNumber:
						P.range.startLineNumber +
						P.text.split(`
`).length -
						1,
					endColumn:
						P.text.lastIndexOf(`
`) === -1
							? P.range.startColumn + P.text.length
							: P.text.length -
								P.text.lastIndexOf(`
`),
				};
			}
			function I(P, k) {
				const L = T(P, k);
				return L.endLineNumberExclusive - L.startLineNumber;
			}
			function T(P, k) {
				const L = Math.max(P.startLineNumber, k.startLineNumber);
				let D = Math.min(P.endLineNumberExclusive, k.endLineNumberExclusive);
				return (
					L > D && (D = L), { startLineNumber: L, endLineNumberExclusive: D }
				);
			}
		}),
		