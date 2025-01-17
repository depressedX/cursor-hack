import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/arrays.js';
import '../model/lineRange.js';
import '../utils.js';
import './conflictActions.js';
import './lineAlignment.js';
define(
			de[3087],
			he([1, 0, 7, 24, 507, 508, 1740, 3084]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$SRc = e.$RRc = e.$QRc = void 0);
				class m {
					constructor(g, p, o) {
						(this.e = g),
							(this.f = p),
							(this.g = o),
							(this.b = new C.$j1b(this.e)),
							(this.c = new C.$j1b(this.f)),
							(this.d = new C.$j1b(this.g));
					}
					computeViewZones(g, p, o) {
						let f = 0,
							b = 0,
							s = 0,
							l = 0;
						const y = [],
							$ = [],
							v = [],
							S = [],
							I = p.model,
							T = I.baseResultDiffs.read(g),
							P = (0, E.join)(I.modifiedBaseRanges.read(g), T, (N, A) =>
								N.baseRange.touches(A.inputRange)
									? i.CompareResult.neitherLessOrGreaterThan
									: w.$bZb.compareByStart(N.baseRange, A.inputRange),
							),
							k = o.codeLensesVisible,
							L = o.showNonConflictingChanges;
						let D, M;
						for (const N of P) {
							if (
								k &&
								N.left &&
								(N.left.isConflicting || L || !I.isHandled(N.left).read(g))
							) {
								const O = new C.$k1b(p, N.left);
								(o.shouldAlignResult || !O.inputIsEmpty.read(g)) &&
									(y.push(
										new c(
											this.b,
											N.left.input1Range.startLineNumber - 1,
											O.itemsInput1,
										),
									),
									$.push(
										new c(
											this.c,
											N.left.input2Range.startLineNumber - 1,
											O.itemsInput2,
										),
									),
									o.shouldAlignBase &&
										v.push(new h(N.left.baseRange.startLineNumber - 1, 16)));
								const B =
									N.left.baseRange.startLineNumber +
									(M?.resultingDeltaFromOriginalToModified ?? 0) -
									1;
								S.push(new c(this.d, B, O.resultItems));
							}
							const A = (0, i.$Tb)(N.rights);
							A && (M = A);
							let R;
							N.left
								? ((R = (0, d.$PRc)(N.left).map((O) => ({
										input1Line: O[0],
										baseLine: O[1],
										input2Line: O[2],
										resultLine: void 0,
									}))),
									(D = N.left),
									(R[R.length - 1].resultLine =
										N.left.baseRange.endLineNumberExclusive +
										(M ? M.resultingDeltaFromOriginalToModified : 0)))
								: (R = [
										{
											baseLine: A.inputRange.endLineNumberExclusive,
											input1Line:
												A.inputRange.endLineNumberExclusive +
												(D
													? D.input1Range.endLineNumberExclusive -
														D.baseRange.endLineNumberExclusive
													: 0),
											input2Line:
												A.inputRange.endLineNumberExclusive +
												(D
													? D.input2Range.endLineNumberExclusive -
														D.baseRange.endLineNumberExclusive
													: 0),
											resultLine: A.outputRange.endLineNumberExclusive,
										},
									]);
							for (const {
								input1Line: O,
								baseLine: B,
								input2Line: U,
								resultLine: z,
							} of R) {
								if (!o.shouldAlignBase && (O === void 0 || U === void 0))
									continue;
								const F = O !== void 0 ? O + f : -1,
									x = U !== void 0 ? U + b : -1,
									H = B + s,
									q = z !== void 0 ? z + l : -1,
									V = Math.max(
										o.shouldAlignBase ? H : 0,
										F,
										x,
										o.shouldAlignResult ? q : 0,
									);
								if (O !== void 0) {
									const G = V - F;
									G > 0 && (y.push(new a(O - 1, G)), (f += G));
								}
								if (U !== void 0) {
									const G = V - x;
									G > 0 && ($.push(new a(U - 1, G)), (b += G));
								}
								if (o.shouldAlignBase) {
									const G = V - H;
									G > 0 && (v.push(new a(B - 1, G)), (s += G));
								}
								if (o.shouldAlignResult && z !== void 0) {
									const G = V - q;
									G > 0 && (S.push(new a(z - 1, G)), (l += G));
								}
							}
						}
						return new r(y, $, v, S);
					}
				}
				e.$QRc = m;
				class r {
					constructor(g, p, o, f) {
						(this.input1ViewZones = g),
							(this.input2ViewZones = p),
							(this.baseViewZones = o),
							(this.resultViewZones = f);
					}
				}
				e.$RRc = r;
				class u {}
				e.$SRc = u;
				class a extends u {
					constructor(g, p) {
						super(), (this.b = g), (this.c = p);
					}
					create(g, p, o) {
						p.push(
							g.addZone({
								afterLineNumber: this.b,
								heightInLines: this.c,
								domNode: (0, t.$)("div.diagonal-fill"),
							}),
						);
					}
				}
				class h extends u {
					constructor(g, p) {
						super(), (this.b = g), (this.c = p);
					}
					create(g, p, o) {
						p.push(
							g.addZone({
								afterLineNumber: this.b,
								heightInPx: this.c,
								domNode: (0, t.$)("div.conflict-actions-placeholder"),
							}),
						);
					}
				}
				class c extends u {
					constructor(g, p, o) {
						super(), (this.b = g), (this.c = p), (this.d = o);
					}
					create(g, p, o) {
						o.add(this.b.createWidget(g, this.c, this.d, p));
					}
				}
			},
		),
		