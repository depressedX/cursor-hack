import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/charCode.js';
import '../../../base/common/diff/diff.js';
import './linesDiffComputer.js';
import './rangeMapping.js';
import '../../../base/common/strings.js';
import '../core/range.js';
import '../../../base/common/assert.js';
import '../core/lineRange.js';
define(
			de[1533],
			he([1, 0, 120, 745, 1147, 342, 37, 17, 229, 196]),
			function (ce /*require*/,
 e /*exports*/,
 t /*charCode*/,
 i /*diff*/,
 w /*linesDiffComputer*/,
 E /*rangeMapping*/,
 C /*strings*/,
 d /*range*/,
 m /*assert*/,
 r /*lineRange*/) {
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
		)
