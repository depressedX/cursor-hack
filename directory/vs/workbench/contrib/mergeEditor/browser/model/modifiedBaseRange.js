import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/arrays.js';
import '../../../../../base/common/errors.js';
import '../../../../../base/common/strings.js';
import '../../../../../base/common/uint.js';
import '../../../../../editor/common/core/position.js';
import '../../../../../editor/common/core/range.js';
import './editing.js';
import './mapping.js';
import '../utils.js';
define(
			de[1250],
			he([1, 0, 24, 29, 37, 210, 48, 17, 1249, 686, 508]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*errors*/,
 w /*strings*/,
 E /*uint*/,
 C /*position*/,
 d /*range*/,
 m /*editing*/,
 r /*mapping*/,
 u /*utils*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.InputState =
						e.ModifiedBaseRangeState =
						e.$HZb =
						e.$GZb =
						e.$FZb =
						e.$EZb =
						e.$DZb =
						e.$CZb =
						e.ModifiedBaseRangeStateKind =
						e.$AZb =
							void 0),
					(e.$BZb = n);
				class a {
					static fromDiffs(v, S, I, T, P) {
						return r.$wZb
							.compute(v, S)
							.map(
								(L) =>
									new a(
										L.inputRange,
										I,
										L.output1Range,
										T,
										L.output1LineMappings,
										L.output2Range,
										P,
										L.output2LineMappings,
									),
							);
					}
					constructor(v, S, I, T, P, k, L, D) {
						if (
							((this.baseRange = v),
							(this.baseTextModel = S),
							(this.input1Range = I),
							(this.input1TextModel = T),
							(this.input1Diffs = P),
							(this.input2Range = k),
							(this.input2TextModel = L),
							(this.input2Diffs = D),
							(this.input1CombinedDiff = r.$xZb.join(this.input1Diffs)),
							(this.input2CombinedDiff = r.$xZb.join(this.input2Diffs)),
							(this.isEqualChange = (0, t.$yb)(
								this.input1Diffs,
								this.input2Diffs,
								(M, N) => M.getLineEdit().equals(N.getLineEdit()),
							)),
							(this.c = null),
							(this.e = null),
							(this.g = null),
							(this.h = null),
							this.input1Diffs.length === 0 && this.input2Diffs.length === 0)
						)
							throw new i.$gb("must have at least one diff");
					}
					getInputRange(v) {
						return v === 1 ? this.input1Range : this.input2Range;
					}
					getInputCombinedDiff(v) {
						return v === 1 ? this.input1CombinedDiff : this.input2CombinedDiff;
					}
					getInputDiffs(v) {
						return v === 1 ? this.input1Diffs : this.input2Diffs;
					}
					get isConflicting() {
						return this.input1Diffs.length > 0 && this.input2Diffs.length > 0;
					}
					get canBeCombined() {
						return this.f(1) !== void 0;
					}
					get isOrderRelevant() {
						const v = this.f(1),
							S = this.f(2);
						return !v || !S ? !1 : !v.equals(S);
					}
					getEditForBase(v) {
						const S = [];
						if (
							(v.includesInput1 &&
								this.input1CombinedDiff &&
								S.push({ diff: this.input1CombinedDiff, inputNumber: 1 }),
							v.includesInput2 &&
								this.input2CombinedDiff &&
								S.push({ diff: this.input2CombinedDiff, inputNumber: 2 }),
							S.length === 0)
						)
							return { edit: void 0, effectiveState: l.base };
						if (S.length === 1)
							return {
								edit: S[0].diff.getLineEdit(),
								effectiveState: l.base.withInputValue(S[0].inputNumber, !0, !1),
							};
						if (v.kind !== c.both) throw new i.$gb();
						const I = v.smartCombination
							? this.f(v.firstInput)
							: this.i(v.firstInput);
						return I
							? { edit: I, effectiveState: v }
							: {
									edit: S[n(v.firstInput) - 1].diff.getLineEdit(),
									effectiveState: l.base.withInputValue(
										n(v.firstInput),
										!0,
										!1,
									),
								};
					}
					f(v) {
						if (v === 1 && this.c !== null) return this.c;
						if (v === 2 && this.e !== null) return this.e;
						const I = (0, u.$jZb)(
								this.input1Diffs.flatMap((P) =>
									P.rangeMappings.map((k) => ({ diff: k, input: 1 })),
								),
								this.input2Diffs.flatMap((P) =>
									P.rangeMappings.map((k) => ({ diff: k, input: 2 })),
								),
							)
								.sort(
									(0, t.$$b)(
										(0, t.$0b)(
											(P) => P.diff.inputRange,
											d.$iL.compareRangesUsingStarts,
										),
										(0, t.$0b)((P) => (P.input === v ? 1 : 2), t.$_b),
									),
								)
								.map((P) => {
									const k =
										P.input === 1 ? this.input1TextModel : this.input2TextModel;
									return new m.$dZb(
										P.diff.inputRange,
										k.getValueInRange(P.diff.outputRange),
									);
								}),
							T = h(this.baseRange, I, this.baseTextModel);
						return v === 1 ? (this.c = T) : (this.e = T), T;
					}
					i(v) {
						if (v === 1 && this.g !== null) return this.g;
						if (v === 2 && this.h !== null) return this.h;
						let S = this.input1Range.getLines(this.input1TextModel),
							I = this.input2Range.getLines(this.input2TextModel);
						v === 2 && ([S, I] = [I, S]);
						const T = new m.$cZb(this.baseRange, S.concat(I));
						return v === 1 ? (this.g = T) : (this.h = T), T;
					}
				}
				e.$AZb = a;
				function h($, v, S) {
					let I = "";
					const T = $.startLineNumber > 1;
					let P = T
						? new C.$hL(
								$.startLineNumber - 1,
								S.getLineMaxColumn($.startLineNumber - 1),
							)
						: new C.$hL($.startLineNumber, 1);
					for (const N of v) {
						const A = N.range.getStartPosition();
						if (!P.isBeforeOrEqual(A)) return;
						let R = S.getValueInRange(d.$iL.fromPositions(P, A));
						A.lineNumber > S.getLineCount() &&
							(R += `
`),
							(I += R),
							(I += N.newText),
							(P = N.range.getEndPosition());
					}
					const k = $.endLineNumberExclusive <= S.getLineCount(),
						L = k
							? new C.$hL($.endLineNumberExclusive, 1)
							: new C.$hL(
									$.endLineNumberExclusive - 1,
									E.Constants.MAX_SAFE_SMALL_INTEGER,
								),
						D = S.getValueInRange(d.$iL.fromPositions(P, L));
					I += D;
					const M = (0, w.$zf)(I);
					if (T) {
						if (M[0] !== "") return;
						M.shift();
					}
					if (k) {
						if (M[M.length - 1] !== "") return;
						M.pop();
					}
					return new m.$cZb($, M);
				}
				var c;
				(function ($) {
					($[($.base = 0)] = "base"),
						($[($.input1 = 1)] = "input1"),
						($[($.input2 = 2)] = "input2"),
						($[($.both = 3)] = "both"),
						($[($.unrecognized = 4)] = "unrecognized");
				})(c || (e.ModifiedBaseRangeStateKind = c = {}));
				function n($) {
					return $ === 1 ? 2 : 1;
				}
				class g {
					constructor() {}
					get includesInput1() {
						return !1;
					}
					get includesInput2() {
						return !1;
					}
					includesInput(v) {
						return v === 1 ? this.includesInput1 : this.includesInput2;
					}
					isInputIncluded(v) {
						return v === 1 ? this.includesInput1 : this.includesInput2;
					}
					toggle(v) {
						return this.withInputValue(v, !this.includesInput(v), !0);
					}
					getInput(v) {
						return this.isInputIncluded(v) ? y.first : y.excluded;
					}
				}
				e.$CZb = g;
				class p extends g {
					get kind() {
						return c.base;
					}
					toString() {
						return "base";
					}
					swap() {
						return this;
					}
					withInputValue(v, S, I = !1) {
						return v === 1 ? (S ? new o() : this) : S ? new f() : this;
					}
					equals(v) {
						return v.kind === c.base;
					}
				}
				e.$DZb = p;
				class o extends g {
					get kind() {
						return c.input1;
					}
					get includesInput1() {
						return !0;
					}
					toString() {
						return "1\u2713";
					}
					swap() {
						return new f();
					}
					withInputValue(v, S, I = !1) {
						return v === 1 ? (S ? this : new p()) : S ? new b(1, I) : new f();
					}
					equals(v) {
						return v.kind === c.input1;
					}
				}
				e.$EZb = o;
				class f extends g {
					get kind() {
						return c.input2;
					}
					get includesInput2() {
						return !0;
					}
					toString() {
						return "2\u2713";
					}
					swap() {
						return new o();
					}
					withInputValue(v, S, I = !1) {
						return v === 2 ? (S ? this : new p()) : S ? new b(2, I) : new f();
					}
					equals(v) {
						return v.kind === c.input2;
					}
				}
				e.$FZb = f;
				class b extends g {
					constructor(v, S) {
						super(), (this.firstInput = v), (this.smartCombination = S);
					}
					get kind() {
						return c.both;
					}
					get includesInput1() {
						return !0;
					}
					get includesInput2() {
						return !0;
					}
					toString() {
						return "2\u2713";
					}
					swap() {
						return new b(n(this.firstInput), this.smartCombination);
					}
					withInputValue(v, S, I = !1) {
						return S ? this : v === 1 ? new f() : new o();
					}
					equals(v) {
						return (
							v.kind === c.both &&
							this.firstInput === v.firstInput &&
							this.smartCombination === v.smartCombination
						);
					}
					getInput(v) {
						return v === this.firstInput ? y.first : y.second;
					}
				}
				e.$GZb = b;
				class s extends g {
					get kind() {
						return c.unrecognized;
					}
					toString() {
						return "unrecognized";
					}
					swap() {
						return this;
					}
					withInputValue(v, S, I = !1) {
						return S ? (v === 1 ? new o() : new f()) : this;
					}
					equals(v) {
						return v.kind === c.unrecognized;
					}
				}
				e.$HZb = s;
				var l;
				(function ($) {
					($.base = new p()), ($.unrecognized = new s());
				})(l || (e.ModifiedBaseRangeState = l = {}));
				var y;
				(function ($) {
					($[($.excluded = 0)] = "excluded"),
						($[($.first = 1)] = "first"),
						($[($.second = 2)] = "second"),
						($[($.unrecognized = 3)] = "unrecognized");
				})(y || (e.InputState = y = {}));
			},
		),
		