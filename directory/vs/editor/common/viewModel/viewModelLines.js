import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arrays.js';
import '../core/position.js';
import '../core/range.js';
import '../model.js';
import '../textModelGuides.js';
import '../model/textModel.js';
import '../textModelEvents.js';
import '../viewEvents.js';
import './modelLineProjection.js';
import '../model/prefixSumComputer.js';
import '../viewModel.js';
define(
			de[2903],
			he([1, 0, 24, 48, 17, 64, 1150, 122, 590, 493, 2766, 589, 290]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kwb = e.$jwb = void 0),
					(t = mt(t)),
					(r = mt(r));
				class c {
					constructor(y, $, v, S, I, T, P, k, L, D) {
						(this.c = y),
							(this.d = $),
							(this.e = -1),
							(this.f = v),
							(this.h = S),
							(this.k = I),
							(this.l = T),
							(this.q = P),
							(this.m = k),
							(this.n = L),
							(this.o = D),
							this.w(!0, null);
					}
					dispose() {
						this.v = this.d.deltaDecorations(this.v, []);
					}
					createCoordinatesConverter() {
						return new o(this);
					}
					w(y, $) {
						(this.s = []), y && (this.v = this.d.deltaDecorations(this.v, []));
						const v = this.d.getLinesContent(),
							S = this.d.getInjectedTextDecorations(this.c),
							I = v.length,
							T = this.createLineBreaksComputer(),
							P = new t.$cc(m.$uN.fromDecorations(S));
						for (let O = 0; O < I; O++) {
							const B = P.takeWhile((U) => U.lineNumber === O + 1);
							T.addRequest(v[O], B, $ ? $[O] : null);
						}
						const k = T.finalize(),
							L = [],
							D = this.v
								.map((O) => this.d.getDecorationRange(O))
								.sort(w.$iL.compareRangesUsingStarts);
						let M = 1,
							N = 0,
							A = -1,
							R = A + 1 < D.length ? N + 1 : I + 2;
						for (let O = 0; O < I; O++) {
							const B = O + 1;
							B === R &&
								(A++,
								(M = D[A].startLineNumber),
								(N = D[A].endLineNumber),
								(R = A + 1 < D.length ? N + 1 : I + 2));
							const U = B >= M && B <= N,
								z = (0, u.$iwb)(k[O], !U);
							(L[O] = z.getViewLineCount()), (this.s[O] = z);
						}
						(this.e = this.d.getVersionId()), (this.u = new a.$XN(L));
					}
					getHiddenAreas() {
						return this.v.map((y) => this.d.getDecorationRange(y));
					}
					setHiddenAreas(y) {
						const $ = y.map((N) => this.d.validateRange(N)),
							v = n($),
							S = this.v
								.map((N) => this.d.getDecorationRange(N))
								.sort(w.$iL.compareRangesUsingStarts);
						if (v.length === S.length) {
							let N = !1;
							for (let A = 0; A < v.length; A++)
								if (!v[A].equalsRange(S[A])) {
									N = !0;
									break;
								}
							if (!N) return !1;
						}
						const I = v.map((N) => ({ range: N, options: d.$eY.EMPTY }));
						this.v = this.d.deltaDecorations(this.v, I);
						const T = v;
						let P = 1,
							k = 0,
							L = -1,
							D = L + 1 < T.length ? k + 1 : this.s.length + 2,
							M = !1;
						for (let N = 0; N < this.s.length; N++) {
							const A = N + 1;
							A === D &&
								(L++,
								(P = T[L].startLineNumber),
								(k = T[L].endLineNumber),
								(D = L + 1 < T.length ? k + 1 : this.s.length + 2));
							let R = !1;
							if (
								(A >= P && A <= k
									? this.s[N].isVisible() &&
										((this.s[N] = this.s[N].setVisible(!1)), (R = !0))
									: ((M = !0),
										this.s[N].isVisible() ||
											((this.s[N] = this.s[N].setVisible(!0)), (R = !0))),
								R)
							) {
								const O = this.s[N].getViewLineCount();
								this.u.setValue(N, O);
							}
						}
						return M || this.setHiddenAreas([]), !0;
					}
					modelPositionIsVisible(y, $) {
						return y < 1 || y > this.s.length ? !1 : this.s[y - 1].isVisible();
					}
					getModelLineViewLineCount(y) {
						return y < 1 || y > this.s.length
							? 1
							: this.s[y - 1].getViewLineCount();
					}
					setTabSize(y) {
						return this.l === y ? !1 : ((this.l = y), this.w(!1, null), !0);
					}
					setWrappingSettings(y, $, v, S, I) {
						const T = this.k.equals(y),
							P = this.q === $,
							k = this.m === v,
							L = this.n === S,
							D = this.o === I;
						if (T && P && k && L && D) return !1;
						const M = T && P && !k && L && D;
						(this.k = y),
							(this.q = $),
							(this.m = v),
							(this.n = S),
							(this.o = I);
						let N = null;
						if (M) {
							N = [];
							for (let A = 0, R = this.s.length; A < R; A++)
								N[A] = this.s[A].getProjectionData();
						}
						return this.w(!1, N), !0;
					}
					createLineBreaksComputer() {
						return (
							this.q === "advanced" ? this.f : this.h
						).createLineBreaksComputer(this.k, this.l, this.m, this.n, this.o);
					}
					onModelFlushed() {
						this.w(!0, null);
					}
					onModelLinesDeleted(y, $, v) {
						if (!y || y <= this.e) return null;
						const S = $ === 1 ? 1 : this.u.getPrefixSum($ - 1) + 1,
							I = this.u.getPrefixSum(v);
						return (
							this.s.splice($ - 1, v - $ + 1),
							this.u.removeValues($ - 1, v - $ + 1),
							new r.$Psb(S, I)
						);
					}
					onModelLinesInserted(y, $, v, S) {
						if (!y || y <= this.e) return null;
						const I = $ > 2 && !this.s[$ - 2].isVisible(),
							T = $ === 1 ? 1 : this.u.getPrefixSum($ - 1) + 1;
						let P = 0;
						const k = [],
							L = [];
						for (let D = 0, M = S.length; D < M; D++) {
							const N = (0, u.$iwb)(S[D], !I);
							k.push(N);
							const A = N.getViewLineCount();
							(P += A), (L[D] = A);
						}
						return (
							(this.s = this.s
								.slice(0, $ - 1)
								.concat(k)
								.concat(this.s.slice($ - 1))),
							this.u.insertValues($ - 1, L),
							new r.$Qsb(T, T + P - 1)
						);
					}
					onModelLineChanged(y, $, v) {
						if (y !== null && y <= this.e) return [!1, null, null, null];
						const S = $ - 1,
							I = this.s[S].getViewLineCount(),
							T = this.s[S].isVisible(),
							P = (0, u.$iwb)(v, T);
						this.s[S] = P;
						const k = this.s[S].getViewLineCount();
						let L = !1,
							D = 0,
							M = -1,
							N = 0,
							A = -1,
							R = 0,
							O = -1;
						I > k
							? ((D = this.u.getPrefixSum($ - 1) + 1),
								(M = D + k - 1),
								(R = M + 1),
								(O = R + (I - k) - 1),
								(L = !0))
							: I < k
								? ((D = this.u.getPrefixSum($ - 1) + 1),
									(M = D + I - 1),
									(N = M + 1),
									(A = N + (k - I) - 1),
									(L = !0))
								: ((D = this.u.getPrefixSum($ - 1) + 1), (M = D + k - 1)),
							this.u.setValue(S, k);
						const B = D <= M ? new r.$Osb(D, M - D + 1) : null,
							U = N <= A ? new r.$Qsb(N, A) : null,
							z = R <= O ? new r.$Psb(R, O) : null;
						return [L, B, U, z];
					}
					acceptVersionId(y) {
						(this.e = y),
							this.s.length === 1 &&
								!this.s[0].isVisible() &&
								this.setHiddenAreas([]);
					}
					getViewLineCount() {
						return this.u.getTotalSum();
					}
					x(y) {
						if (y < 1) return 1;
						const $ = this.getViewLineCount();
						return y > $ ? $ : y | 0;
					}
					getActiveIndentGuide(y, $, v) {
						(y = this.x(y)), ($ = this.x($)), (v = this.x(v));
						const S = this.convertViewPositionToModelPosition(
								y,
								this.getViewLineMinColumn(y),
							),
							I = this.convertViewPositionToModelPosition(
								$,
								this.getViewLineMinColumn($),
							),
							T = this.convertViewPositionToModelPosition(
								v,
								this.getViewLineMinColumn(v),
							),
							P = this.d.guides.getActiveIndentGuide(
								S.lineNumber,
								I.lineNumber,
								T.lineNumber,
							),
							k = this.convertModelPositionToViewPosition(P.startLineNumber, 1),
							L = this.convertModelPositionToViewPosition(
								P.endLineNumber,
								this.d.getLineMaxColumn(P.endLineNumber),
							);
						return {
							startLineNumber: k.lineNumber,
							endLineNumber: L.lineNumber,
							indent: P.indent,
						};
					}
					y(y) {
						y = this.x(y);
						const $ = this.u.getIndexOf(y - 1),
							v = $.index,
							S = $.remainder;
						return new g(v + 1, S);
					}
					z(y) {
						return this.s[y.modelLineNumber - 1].getViewLineMinColumn(
							this.d,
							y.modelLineNumber,
							y.modelLineWrappedLineIdx,
						);
					}
					A(y) {
						return this.s[y.modelLineNumber - 1].getViewLineMaxColumn(
							this.d,
							y.modelLineNumber,
							y.modelLineWrappedLineIdx,
						);
					}
					B(y) {
						const $ = this.s[y.modelLineNumber - 1],
							v = $.getViewLineMinColumn(
								this.d,
								y.modelLineNumber,
								y.modelLineWrappedLineIdx,
							),
							S = $.getModelColumnOfViewPosition(y.modelLineWrappedLineIdx, v);
						return new i.$hL(y.modelLineNumber, S);
					}
					C(y) {
						const $ = this.s[y.modelLineNumber - 1],
							v = $.getViewLineMaxColumn(
								this.d,
								y.modelLineNumber,
								y.modelLineWrappedLineIdx,
							),
							S = $.getModelColumnOfViewPosition(y.modelLineWrappedLineIdx, v);
						return new i.$hL(y.modelLineNumber, S);
					}
					D(y, $) {
						const v = this.y(y),
							S = this.y($),
							I = new Array();
						let T = this.B(v),
							P = new Array();
						for (let k = v.modelLineNumber; k <= S.modelLineNumber; k++) {
							const L = this.s[k - 1];
							if (L.isVisible()) {
								const D =
										k === v.modelLineNumber ? v.modelLineWrappedLineIdx : 0,
									M =
										k === S.modelLineNumber
											? S.modelLineWrappedLineIdx + 1
											: L.getViewLineCount();
								for (let N = D; N < M; N++) P.push(new g(k, N));
							}
							if (!L.isVisible() && T) {
								const D = new i.$hL(k - 1, this.d.getLineMaxColumn(k - 1) + 1),
									M = w.$iL.fromPositions(T, D);
								I.push(new p(M, P)), (P = []), (T = null);
							} else L.isVisible() && !T && (T = new i.$hL(k, 1));
						}
						if (T) {
							const k = w.$iL.fromPositions(T, this.C(S));
							I.push(new p(k, P));
						}
						return I;
					}
					getViewLinesBracketGuides(y, $, v, S) {
						const I = v
								? this.convertViewPositionToModelPosition(
										v.lineNumber,
										v.column,
									)
								: null,
							T = [];
						for (const P of this.D(y, $)) {
							const k = P.modelRange.startLineNumber,
								L = this.d.guides.getLinesBracketGuides(
									k,
									P.modelRange.endLineNumber,
									I,
									S,
								);
							for (const D of P.viewLines) {
								const N = L[D.modelLineNumber - k].map((A) => {
									if (
										(A.forWrappedLinesAfterColumn !== -1 &&
											this.s[
												D.modelLineNumber - 1
											].getViewPositionOfModelPosition(
												0,
												A.forWrappedLinesAfterColumn,
											).lineNumber >= D.modelLineWrappedLineIdx) ||
										(A.forWrappedLinesBeforeOrAtColumn !== -1 &&
											this.s[
												D.modelLineNumber - 1
											].getViewPositionOfModelPosition(
												0,
												A.forWrappedLinesBeforeOrAtColumn,
											).lineNumber < D.modelLineWrappedLineIdx)
									)
										return;
									if (!A.horizontalLine) return A;
									let R = -1;
									if (A.column !== -1) {
										const U = this.s[
											D.modelLineNumber - 1
										].getViewPositionOfModelPosition(0, A.column);
										if (U.lineNumber === D.modelLineWrappedLineIdx)
											R = U.column;
										else if (U.lineNumber < D.modelLineWrappedLineIdx)
											R = this.z(D);
										else if (U.lineNumber > D.modelLineWrappedLineIdx) return;
									}
									const O = this.convertModelPositionToViewPosition(
											D.modelLineNumber,
											A.horizontalLine.endColumn,
										),
										B = this.s[
											D.modelLineNumber - 1
										].getViewPositionOfModelPosition(
											0,
											A.horizontalLine.endColumn,
										);
									return B.lineNumber === D.modelLineWrappedLineIdx
										? new C.$CN(
												A.visibleColumn,
												R,
												A.className,
												new C.$DN(A.horizontalLine.top, O.column),
												-1,
												-1,
											)
										: B.lineNumber < D.modelLineWrappedLineIdx ||
												A.visibleColumn !== -1
											? void 0
											: new C.$CN(
													A.visibleColumn,
													R,
													A.className,
													new C.$DN(A.horizontalLine.top, this.A(D)),
													-1,
													-1,
												);
								});
								T.push(N.filter((A) => !!A));
							}
						}
						return T;
					}
					getViewLinesIndentGuides(y, $) {
						(y = this.x(y)), ($ = this.x($));
						const v = this.convertViewPositionToModelPosition(
								y,
								this.getViewLineMinColumn(y),
							),
							S = this.convertViewPositionToModelPosition(
								$,
								this.getViewLineMaxColumn($),
							);
						let I = [];
						const T = [],
							P = [],
							k = v.lineNumber - 1,
							L = S.lineNumber - 1;
						let D = null;
						for (let R = k; R <= L; R++) {
							const O = this.s[R];
							if (O.isVisible()) {
								const B = O.getViewLineNumberOfModelPosition(
										0,
										R === k ? v.column : 1,
									),
									U = O.getViewLineNumberOfModelPosition(
										0,
										this.d.getLineMaxColumn(R + 1),
									),
									z = U - B + 1;
								let F = f.BlockNone;
								z > 1 &&
									O.getViewLineMinColumn(this.d, R + 1, U) === 1 &&
									(F = B === 0 ? f.BlockSubsequent : f.BlockAll),
									T.push(z),
									P.push(F),
									D === null && (D = new i.$hL(R + 1, 0));
							} else
								D !== null &&
									((I = I.concat(
										this.d.guides.getLinesIndentGuides(D.lineNumber, R),
									)),
									(D = null));
						}
						D !== null &&
							((I = I.concat(
								this.d.guides.getLinesIndentGuides(D.lineNumber, S.lineNumber),
							)),
							(D = null));
						const M = $ - y + 1,
							N = new Array(M);
						let A = 0;
						for (let R = 0, O = I.length; R < O; R++) {
							let B = I[R];
							const U = Math.min(M - A, T[R]),
								z = P[R];
							let F;
							z === f.BlockAll
								? (F = 0)
								: z === f.BlockSubsequent
									? (F = 1)
									: (F = U);
							for (let x = 0; x < U; x++) x === F && (B = 0), (N[A++] = B);
						}
						return N;
					}
					getViewLineContent(y) {
						const $ = this.y(y);
						return this.s[$.modelLineNumber - 1].getViewLineContent(
							this.d,
							$.modelLineNumber,
							$.modelLineWrappedLineIdx,
						);
					}
					getViewLineLength(y) {
						const $ = this.y(y);
						return this.s[$.modelLineNumber - 1].getViewLineLength(
							this.d,
							$.modelLineNumber,
							$.modelLineWrappedLineIdx,
						);
					}
					getViewLineMinColumn(y) {
						const $ = this.y(y);
						return this.s[$.modelLineNumber - 1].getViewLineMinColumn(
							this.d,
							$.modelLineNumber,
							$.modelLineWrappedLineIdx,
						);
					}
					getViewLineMaxColumn(y) {
						const $ = this.y(y);
						return this.s[$.modelLineNumber - 1].getViewLineMaxColumn(
							this.d,
							$.modelLineNumber,
							$.modelLineWrappedLineIdx,
						);
					}
					getViewLineData(y) {
						const $ = this.y(y);
						return this.s[$.modelLineNumber - 1].getViewLineData(
							this.d,
							$.modelLineNumber,
							$.modelLineWrappedLineIdx,
						);
					}
					getViewLinesData(y, $, v) {
						(y = this.x(y)), ($ = this.x($));
						const S = this.u.getIndexOf(y - 1);
						let I = y;
						const T = S.index,
							P = S.remainder,
							k = [];
						for (let L = T, D = this.d.getLineCount(); L < D; L++) {
							const M = this.s[L];
							if (!M.isVisible()) continue;
							const N = L === T ? P : 0;
							let A = M.getViewLineCount() - N,
								R = !1;
							if (
								(I + A > $ && ((R = !0), (A = $ - I + 1)),
								M.getViewLinesData(this.d, L + 1, N, A, I - y, v, k),
								(I += A),
								R)
							)
								break;
						}
						return k;
					}
					validateViewPosition(y, $, v) {
						y = this.x(y);
						const S = this.u.getIndexOf(y - 1),
							I = S.index,
							T = S.remainder,
							P = this.s[I],
							k = P.getViewLineMinColumn(this.d, I + 1, T),
							L = P.getViewLineMaxColumn(this.d, I + 1, T);
						$ < k && ($ = k), $ > L && ($ = L);
						const D = P.getModelColumnOfViewPosition(T, $);
						return this.d.validatePosition(new i.$hL(I + 1, D)).equals(v)
							? new i.$hL(y, $)
							: this.convertModelPositionToViewPosition(v.lineNumber, v.column);
					}
					validateViewRange(y, $) {
						const v = this.validateViewPosition(
								y.startLineNumber,
								y.startColumn,
								$.getStartPosition(),
							),
							S = this.validateViewPosition(
								y.endLineNumber,
								y.endColumn,
								$.getEndPosition(),
							);
						return new w.$iL(v.lineNumber, v.column, S.lineNumber, S.column);
					}
					convertViewPositionToModelPosition(y, $) {
						const v = this.y(y),
							S = this.s[v.modelLineNumber - 1].getModelColumnOfViewPosition(
								v.modelLineWrappedLineIdx,
								$,
							);
						return this.d.validatePosition(new i.$hL(v.modelLineNumber, S));
					}
					convertViewRangeToModelRange(y) {
						const $ = this.convertViewPositionToModelPosition(
								y.startLineNumber,
								y.startColumn,
							),
							v = this.convertViewPositionToModelPosition(
								y.endLineNumber,
								y.endColumn,
							);
						return new w.$iL($.lineNumber, $.column, v.lineNumber, v.column);
					}
					convertModelPositionToViewPosition(
						y,
						$,
						v = E.PositionAffinity.None,
						S = !1,
						I = !1,
					) {
						const T = this.d.validatePosition(new i.$hL(y, $)),
							P = T.lineNumber,
							k = T.column;
						let L = P - 1,
							D = !1;
						if (I)
							for (; L < this.s.length && !this.s[L].isVisible(); )
								L++, (D = !0);
						else for (; L > 0 && !this.s[L].isVisible(); ) L--, (D = !0);
						if (L === 0 && !this.s[L].isVisible())
							return new i.$hL(S ? 0 : 1, 1);
						const M = 1 + this.u.getPrefixSum(L);
						let N;
						return (
							D
								? I
									? (N = this.s[L].getViewPositionOfModelPosition(M, 1, v))
									: (N = this.s[L].getViewPositionOfModelPosition(
											M,
											this.d.getLineMaxColumn(L + 1),
											v,
										))
								: (N = this.s[P - 1].getViewPositionOfModelPosition(M, k, v)),
							N
						);
					}
					convertModelRangeToViewRange(y, $ = E.PositionAffinity.Left) {
						if (y.isEmpty()) {
							const v = this.convertModelPositionToViewPosition(
								y.startLineNumber,
								y.startColumn,
								$,
							);
							return w.$iL.fromPositions(v);
						} else {
							const v = this.convertModelPositionToViewPosition(
									y.startLineNumber,
									y.startColumn,
									E.PositionAffinity.Right,
								),
								S = this.convertModelPositionToViewPosition(
									y.endLineNumber,
									y.endColumn,
									E.PositionAffinity.Left,
								);
							return new w.$iL(v.lineNumber, v.column, S.lineNumber, S.column);
						}
					}
					getViewLineNumberOfModelPosition(y, $) {
						let v = y - 1;
						if (this.s[v].isVisible()) {
							const I = 1 + this.u.getPrefixSum(v);
							return this.s[v].getViewLineNumberOfModelPosition(I, $);
						}
						for (; v > 0 && !this.s[v].isVisible(); ) v--;
						if (v === 0 && !this.s[v].isVisible()) return 1;
						const S = 1 + this.u.getPrefixSum(v);
						return this.s[v].getViewLineNumberOfModelPosition(
							S,
							this.d.getLineMaxColumn(v + 1),
						);
					}
					getDecorationsInRange(y, $, v, S, I) {
						const T = this.convertViewPositionToModelPosition(
								y.startLineNumber,
								y.startColumn,
							),
							P = this.convertViewPositionToModelPosition(
								y.endLineNumber,
								y.endColumn,
							);
						if (
							P.lineNumber - T.lineNumber <=
							y.endLineNumber - y.startLineNumber
						)
							return this.d.getDecorationsInRange(
								new w.$iL(T.lineNumber, 1, P.lineNumber, P.column),
								$,
								v,
								S,
								I,
							);
						let k = [];
						const L = T.lineNumber - 1,
							D = P.lineNumber - 1;
						let M = null;
						for (let O = L; O <= D; O++)
							if (this.s[O].isVisible())
								M === null && (M = new i.$hL(O + 1, O === L ? T.column : 1));
							else if (M !== null) {
								const U = this.d.getLineMaxColumn(O);
								(k = k.concat(
									this.d.getDecorationsInRange(
										new w.$iL(M.lineNumber, M.column, O, U),
										$,
										v,
										S,
									),
								)),
									(M = null);
							}
						M !== null &&
							((k = k.concat(
								this.d.getDecorationsInRange(
									new w.$iL(M.lineNumber, M.column, P.lineNumber, P.column),
									$,
									v,
									S,
								),
							)),
							(M = null)),
							k.sort((O, B) => {
								const U = w.$iL.compareRangesUsingStarts(O.range, B.range);
								return U === 0 ? (O.id < B.id ? -1 : O.id > B.id ? 1 : 0) : U;
							});
						const N = [];
						let A = 0,
							R = null;
						for (const O of k) {
							const B = O.id;
							R !== B && ((R = B), (N[A++] = O));
						}
						return N;
					}
					getInjectedTextAt(y) {
						const $ = this.y(y.lineNumber);
						return this.s[$.modelLineNumber - 1].getInjectedTextAt(
							$.modelLineWrappedLineIdx,
							y.column,
						);
					}
					normalizePosition(y, $) {
						const v = this.y(y.lineNumber);
						return this.s[v.modelLineNumber - 1].normalizePosition(
							v.modelLineWrappedLineIdx,
							y,
							$,
						);
					}
					getLineIndentColumn(y) {
						const $ = this.y(y);
						return $.modelLineWrappedLineIdx === 0
							? this.d.getLineIndentColumn($.modelLineNumber)
							: 0;
					}
				}
				e.$jwb = c;
				function n(l) {
					if (l.length === 0) return [];
					const y = l.slice();
					y.sort(w.$iL.compareRangesUsingStarts);
					const $ = [];
					let v = y[0].startLineNumber,
						S = y[0].endLineNumber;
					for (let I = 1, T = y.length; I < T; I++) {
						const P = y[I];
						P.startLineNumber > S + 1
							? ($.push(new w.$iL(v, 1, S, 1)),
								(v = P.startLineNumber),
								(S = P.endLineNumber))
							: P.endLineNumber > S && (S = P.endLineNumber);
					}
					return $.push(new w.$iL(v, 1, S, 1)), $;
				}
				class g {
					get isWrappedLineContinuation() {
						return this.modelLineWrappedLineIdx > 0;
					}
					constructor(y, $) {
						(this.modelLineNumber = y), (this.modelLineWrappedLineIdx = $);
					}
				}
				class p {
					constructor(y, $) {
						(this.modelRange = y), (this.viewLines = $);
					}
				}
				class o {
					constructor(y) {
						this.c = y;
					}
					convertViewPositionToModelPosition(y) {
						return this.c.convertViewPositionToModelPosition(
							y.lineNumber,
							y.column,
						);
					}
					convertViewRangeToModelRange(y) {
						return this.c.convertViewRangeToModelRange(y);
					}
					validateViewPosition(y, $) {
						return this.c.validateViewPosition(y.lineNumber, y.column, $);
					}
					validateViewRange(y, $) {
						return this.c.validateViewRange(y, $);
					}
					convertModelPositionToViewPosition(y, $, v, S) {
						return this.c.convertModelPositionToViewPosition(
							y.lineNumber,
							y.column,
							$,
							v,
							S,
						);
					}
					convertModelRangeToViewRange(y, $) {
						return this.c.convertModelRangeToViewRange(y, $);
					}
					modelPositionIsVisible(y) {
						return this.c.modelPositionIsVisible(y.lineNumber, y.column);
					}
					getModelLineViewLineCount(y) {
						return this.c.getModelLineViewLineCount(y);
					}
					getViewLineNumberOfModelPosition(y, $) {
						return this.c.getViewLineNumberOfModelPosition(y, $);
					}
				}
				var f;
				(function (l) {
					(l[(l.BlockNone = 0)] = "BlockNone"),
						(l[(l.BlockSubsequent = 1)] = "BlockSubsequent"),
						(l[(l.BlockAll = 2)] = "BlockAll");
				})(f || (f = {}));
				class b {
					constructor(y) {
						this.model = y;
					}
					dispose() {}
					createCoordinatesConverter() {
						return new s(this);
					}
					getHiddenAreas() {
						return [];
					}
					setHiddenAreas(y) {
						return !1;
					}
					setTabSize(y) {
						return !1;
					}
					setWrappingSettings(y, $, v, S) {
						return !1;
					}
					createLineBreaksComputer() {
						const y = [];
						return {
							addRequest: ($, v, S) => {
								y.push(null);
							},
							finalize: () => y,
						};
					}
					onModelFlushed() {}
					onModelLinesDeleted(y, $, v) {
						return new r.$Psb($, v);
					}
					onModelLinesInserted(y, $, v, S) {
						return new r.$Qsb($, v);
					}
					onModelLineChanged(y, $, v) {
						return [!1, new r.$Osb($, 1), null, null];
					}
					acceptVersionId(y) {}
					getViewLineCount() {
						return this.model.getLineCount();
					}
					getActiveIndentGuide(y, $, v) {
						return { startLineNumber: y, endLineNumber: y, indent: 0 };
					}
					getViewLinesBracketGuides(y, $, v) {
						return new Array($ - y + 1).fill([]);
					}
					getViewLinesIndentGuides(y, $) {
						const v = $ - y + 1,
							S = new Array(v);
						for (let I = 0; I < v; I++) S[I] = 0;
						return S;
					}
					getViewLineContent(y) {
						return this.model.getLineContent(y);
					}
					getViewLineLength(y) {
						return this.model.getLineLength(y);
					}
					getViewLineMinColumn(y) {
						return this.model.getLineMinColumn(y);
					}
					getViewLineMaxColumn(y) {
						return this.model.getLineMaxColumn(y);
					}
					getViewLineData(y) {
						const $ = this.model.tokenization.getLineTokens(y),
							v = $.getLineContent();
						return new h.$1sb(v, !1, 1, v.length + 1, 0, $.inflate(), null);
					}
					getViewLinesData(y, $, v) {
						const S = this.model.getLineCount();
						(y = Math.min(Math.max(1, y), S)),
							($ = Math.min(Math.max(1, $), S));
						const I = [];
						for (let T = y; T <= $; T++) {
							const P = T - y;
							I[P] = v[P] ? this.getViewLineData(T) : null;
						}
						return I;
					}
					getDecorationsInRange(y, $, v, S, I) {
						return this.model.getDecorationsInRange(y, $, v, S, I);
					}
					normalizePosition(y, $) {
						return this.model.normalizePosition(y, $);
					}
					getLineIndentColumn(y) {
						return this.model.getLineIndentColumn(y);
					}
					getInjectedTextAt(y) {
						return null;
					}
				}
				e.$kwb = b;
				class s {
					constructor(y) {
						this.c = y;
					}
					d(y) {
						return this.c.model.validatePosition(y);
					}
					e(y) {
						return this.c.model.validateRange(y);
					}
					convertViewPositionToModelPosition(y) {
						return this.d(y);
					}
					convertViewRangeToModelRange(y) {
						return this.e(y);
					}
					validateViewPosition(y, $) {
						return this.d($);
					}
					validateViewRange(y, $) {
						return this.e($);
					}
					convertModelPositionToViewPosition(y) {
						return this.d(y);
					}
					convertModelRangeToViewRange(y) {
						return this.e(y);
					}
					modelPositionIsVisible(y) {
						const $ = this.c.model.getLineCount();
						return !(y.lineNumber < 1 || y.lineNumber > $);
					}
					modelRangeIsVisible(y) {
						const $ = this.c.model.getLineCount();
						return !(
							y.startLineNumber < 1 ||
							y.startLineNumber > $ ||
							y.endLineNumber < 1 ||
							y.endLineNumber > $
						);
					}
					getModelLineViewLineCount(y) {
						return 1;
					}
					getViewLineNumberOfModelPosition(y, $) {
						return y;
					}
				}
			},
		),
		