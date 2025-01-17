import '../../../../require.js';
import '../../../../exports.js';
import './position.js';
import './range.js';
define(de[458], he([1, 0, 48, 17]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$tL = void 0);
			class w {
				static {
					this.zero = new w(0, 0);
				}
				static lengthDiffNonNegative(C, d) {
					return d.isLessThan(C)
						? w.zero
						: C.lineCount === d.lineCount
							? new w(0, d.columnCount - C.columnCount)
							: new w(d.lineCount - C.lineCount, d.columnCount);
				}
				static betweenPositions(C, d) {
					return C.lineNumber === d.lineNumber
						? new w(0, d.column - C.column)
						: new w(d.lineNumber - C.lineNumber, d.column - 1);
				}
				static ofRange(C) {
					return w.betweenPositions(C.getStartPosition(), C.getEndPosition());
				}
				static ofText(C) {
					let d = 0,
						m = 0;
					for (const r of C)
						r ===
						`
`
							? (d++, (m = 0))
							: m++;
					return new w(d, m);
				}
				constructor(C, d) {
					(this.lineCount = C), (this.columnCount = d);
				}
				isZero() {
					return this.lineCount === 0 && this.columnCount === 0;
				}
				isLessThan(C) {
					return this.lineCount !== C.lineCount
						? this.lineCount < C.lineCount
						: this.columnCount < C.columnCount;
				}
				isGreaterThan(C) {
					return this.lineCount !== C.lineCount
						? this.lineCount > C.lineCount
						: this.columnCount > C.columnCount;
				}
				isGreaterThanOrEqualTo(C) {
					return this.lineCount !== C.lineCount
						? this.lineCount > C.lineCount
						: this.columnCount >= C.columnCount;
				}
				equals(C) {
					return (
						this.lineCount === C.lineCount && this.columnCount === C.columnCount
					);
				}
				compare(C) {
					return this.lineCount !== C.lineCount
						? this.lineCount - C.lineCount
						: this.columnCount - C.columnCount;
				}
				add(C) {
					return C.lineCount === 0
						? new w(this.lineCount, this.columnCount + C.columnCount)
						: new w(this.lineCount + C.lineCount, C.columnCount);
				}
				createRange(C) {
					return this.lineCount === 0
						? new i.$iL(
								C.lineNumber,
								C.column,
								C.lineNumber,
								C.column + this.columnCount,
							)
						: new i.$iL(
								C.lineNumber,
								C.column,
								C.lineNumber + this.lineCount,
								this.columnCount + 1,
							);
				}
				toRange() {
					return new i.$iL(1, 1, this.lineCount + 1, this.columnCount + 1);
				}
				addToPosition(C) {
					return this.lineCount === 0
						? new t.$hL(C.lineNumber, C.column + this.columnCount)
						: new t.$hL(C.lineNumber + this.lineCount, this.columnCount + 1);
				}
				toString() {
					return `${this.lineCount},${this.columnCount}`;
				}
			}
			e.$tL = w;
		}),
		