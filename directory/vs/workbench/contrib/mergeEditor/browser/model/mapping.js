import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/arrays.js';
import '../../../../../base/common/arraysFind.js';
import '../../../../../base/common/assert.js';
import '../../../../../base/common/errors.js';
import '../../../../../editor/common/core/range.js';
import '../utils.js';
import './editing.js';
import './lineRange.js';
import './rangeUtils.js';
define(
			de[686],
			he([1, 0, 24, 214, 229, 29, 17, 508, 1249, 507, 1739]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*arraysFind*/,
 w /*assert*/,
 E /*errors*/,
 C /*range*/,
 d /*utils*/,
 m /*editing*/,
 r /*lineRange*/,
 u /*rangeUtils*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zZb = e.$yZb = e.$xZb = e.$wZb = e.$vZb = e.$uZb = void 0);
				class a {
					static join(f) {
						return f.reduce((b, s) => (b ? b.join(s) : s), void 0);
					}
					constructor(f, b) {
						(this.inputRange = f), (this.outputRange = b);
					}
					extendInputRange(f) {
						if (!f.containsRange(this.inputRange)) throw new E.$gb();
						const b = f.startLineNumber - this.inputRange.startLineNumber,
							s =
								f.endLineNumberExclusive -
								this.inputRange.endLineNumberExclusive;
						return new a(
							f,
							new r.$bZb(
								this.outputRange.startLineNumber + b,
								this.outputRange.lineCount - b + s,
							),
						);
					}
					join(f) {
						return new a(
							this.inputRange.join(f.inputRange),
							this.outputRange.join(f.outputRange),
						);
					}
					get resultingDeltaFromOriginalToModified() {
						return (
							this.outputRange.endLineNumberExclusive -
							this.inputRange.endLineNumberExclusive
						);
					}
					toString() {
						return `${this.inputRange.toString()} -> ${this.outputRange.toString()}`;
					}
					addOutputLineDelta(f) {
						return new a(this.inputRange, this.outputRange.delta(f));
					}
					addInputLineDelta(f) {
						return new a(this.inputRange.delta(f), this.outputRange);
					}
					reverse() {
						return new a(this.outputRange, this.inputRange);
					}
				}
				e.$uZb = a;
				class h {
					static betweenOutputs(f, b, s) {
						const y = c
							.compute(f, b)
							.map(($) => new a($.output1Range, $.output2Range));
						return new h(y, s);
					}
					constructor(f, b) {
						(this.lineRangeMappings = f),
							(this.inputLineCount = b),
							(0, w.$nd)(() =>
								(0, w.$od)(
									f,
									(s, l) =>
										s.inputRange.isBefore(l.inputRange) &&
										s.outputRange.isBefore(l.outputRange) &&
										l.inputRange.startLineNumber -
											s.inputRange.endLineNumberExclusive ===
											l.outputRange.startLineNumber -
												s.outputRange.endLineNumberExclusive,
								),
							);
					}
					project(f) {
						const b = (0, i.$jb)(
							this.lineRangeMappings,
							(y) => y.inputRange.startLineNumber <= f,
						);
						if (!b) return new a(new r.$bZb(f, 1), new r.$bZb(f, 1));
						if (b.inputRange.contains(f)) return b;
						const s = new r.$bZb(f, 1),
							l = new r.$bZb(
								f +
									b.outputRange.endLineNumberExclusive -
									b.inputRange.endLineNumberExclusive,
								1,
							);
						return new a(s, l);
					}
					get outputLineCount() {
						const f = (0, t.$Tb)(this.lineRangeMappings),
							b = f
								? f.outputRange.endLineNumberExclusive -
									f.inputRange.endLineNumberExclusive
								: 0;
						return this.inputLineCount + b;
					}
					reverse() {
						return new h(
							this.lineRangeMappings.map((f) => f.reverse()),
							this.outputLineCount,
						);
					}
				}
				e.$vZb = h;
				class c {
					static compute(f, b) {
						const s = (0, t.$0b)((T) => T.inputRange.startLineNumber, t.$_b),
							l = (0, d.$jZb)(
								f.map((T) => ({ source: 0, diff: T })),
								b.map((T) => ({ source: 1, diff: T })),
							).sort((0, t.$0b)((T) => T.diff, s)),
							y = [new Array(), new Array()],
							$ = [0, 0],
							v = new Array();
						function S(T) {
							const P = a.join(y[0]) || new a(T, T.delta($[0])),
								k = a.join(y[1]) || new a(T, T.delta($[1]));
							v.push(
								new c(
									I,
									P.extendInputRange(I).outputRange,
									y[0],
									k.extendInputRange(I).outputRange,
									y[1],
								),
							),
								(y[0] = []),
								(y[1] = []);
						}
						let I;
						for (const T of l) {
							const P = T.diff.inputRange;
							I && !I.touches(P) && (S(I), (I = void 0)),
								($[T.source] = T.diff.resultingDeltaFromOriginalToModified),
								(I = I ? I.join(P) : P),
								y[T.source].push(T.diff);
						}
						return I && S(I), v;
					}
					constructor(f, b, s, l, y) {
						(this.inputRange = f),
							(this.output1Range = b),
							(this.output1LineMappings = s),
							(this.output2Range = l),
							(this.output2LineMappings = y);
					}
					toString() {
						return `${this.output1Range} <- ${this.inputRange} -> ${this.output2Range}`;
					}
				}
				e.$wZb = c;
				class n extends a {
					static join(f) {
						return f.reduce((b, s) => (b ? b.join(s) : s), void 0);
					}
					constructor(f, b, s, l, y) {
						super(f, s),
							(this.inputTextModel = b),
							(this.outputTextModel = l),
							(this.rangeMappings = y || [
								new g(this.inputRange.toRange(), this.outputRange.toRange()),
							]);
					}
					addOutputLineDelta(f) {
						return new n(
							this.inputRange,
							this.inputTextModel,
							this.outputRange.delta(f),
							this.outputTextModel,
							this.rangeMappings.map((b) => b.addOutputLineDelta(f)),
						);
					}
					addInputLineDelta(f) {
						return new n(
							this.inputRange.delta(f),
							this.inputTextModel,
							this.outputRange,
							this.outputTextModel,
							this.rangeMappings.map((b) => b.addInputLineDelta(f)),
						);
					}
					join(f) {
						return new n(
							this.inputRange.join(f.inputRange),
							this.inputTextModel,
							this.outputRange.join(f.outputRange),
							this.outputTextModel,
						);
					}
					getLineEdit() {
						return new m.$cZb(this.inputRange, this.a());
					}
					getReverseLineEdit() {
						return new m.$cZb(this.outputRange, this.b());
					}
					a() {
						return this.outputRange.getLines(this.outputTextModel);
					}
					b() {
						return this.inputRange.getLines(this.inputTextModel);
					}
				}
				e.$xZb = n;
				class g {
					constructor(f, b) {
						(this.inputRange = f), (this.outputRange = b);
					}
					toString() {
						function f(b) {
							return `[${b.startLineNumber}:${b.startColumn}, ${b.endLineNumber}:${b.endColumn})`;
						}
						return `${f(this.inputRange)} -> ${f(this.outputRange)}`;
					}
					addOutputLineDelta(f) {
						return new g(
							this.inputRange,
							new C.$iL(
								this.outputRange.startLineNumber + f,
								this.outputRange.startColumn,
								this.outputRange.endLineNumber + f,
								this.outputRange.endColumn,
							),
						);
					}
					addInputLineDelta(f) {
						return new g(
							new C.$iL(
								this.inputRange.startLineNumber + f,
								this.inputRange.startColumn,
								this.inputRange.endLineNumber + f,
								this.inputRange.endColumn,
							),
							this.outputRange,
						);
					}
					reverse() {
						return new g(this.outputRange, this.inputRange);
					}
				}
				e.$yZb = g;
				class p {
					constructor(f, b) {
						(this.rangeMappings = f),
							(this.inputLineCount = b),
							(0, w.$nd)(() =>
								(0, w.$od)(
									f,
									(s, l) =>
										(0, u.$tZb)(s.inputRange, l.inputRange) &&
										(0, u.$tZb)(s.outputRange, l.outputRange),
								),
							);
					}
					project(f) {
						const b = (0, i.$jb)(this.rangeMappings, (y) =>
							y.inputRange.getStartPosition().isBeforeOrEqual(f),
						);
						if (!b)
							return new g(
								C.$iL.fromPositions(f, f),
								C.$iL.fromPositions(f, f),
							);
						if ((0, u.$pZb)(b.inputRange, f)) return b;
						const s = (0, u.$rZb)(b.inputRange.getEndPosition(), f),
							l = (0, u.$sZb)(b.outputRange.getEndPosition(), s);
						return new g(C.$iL.fromPositions(f), C.$iL.fromPositions(l));
					}
					projectRange(f) {
						const b = this.project(f.getStartPosition()),
							s = this.project(f.getEndPosition());
						return new g(
							b.inputRange.plusRange(s.inputRange),
							b.outputRange.plusRange(s.outputRange),
						);
					}
					get outputLineCount() {
						const f = (0, t.$Tb)(this.rangeMappings),
							b = f
								? f.outputRange.endLineNumber - f.inputRange.endLineNumber
								: 0;
						return this.inputLineCount + b;
					}
					reverse() {
						return new p(
							this.rangeMappings.map((f) => f.reverse()),
							this.outputLineCount,
						);
					}
				}
				e.$zZb = p;
			},
		)
