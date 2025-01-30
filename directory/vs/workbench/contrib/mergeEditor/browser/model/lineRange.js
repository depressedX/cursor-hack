import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/arrays.js';
import '../../../../../base/common/errors.js';
import '../../../../../base/common/uint.js';
import '../../../../../editor/common/core/range.js';
define(de[507], he([1, 0, 24, 29, 210, 17]), function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*errors*/,
 w /*uint*/,
 E /*range*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$bZb = void 0);
			class C {
				static {
					this.compareByStart = (0, t.$0b)((m) => m.startLineNumber, t.$_b);
				}
				static join(m) {
					if (m.length === 0) return;
					let r = Number.MAX_SAFE_INTEGER,
						u = 0;
					for (const a of m)
						(r = Math.min(r, a.startLineNumber)),
							(u = Math.max(u, a.startLineNumber + a.lineCount));
					return new C(r, u - r);
				}
				static fromLineNumbers(m, r) {
					return new C(m, r - m);
				}
				constructor(m, r) {
					if (((this.startLineNumber = m), (this.lineCount = r), r < 0))
						throw new i.$gb();
				}
				join(m) {
					return new C(
						Math.min(this.startLineNumber, m.startLineNumber),
						Math.max(this.endLineNumberExclusive, m.endLineNumberExclusive) -
							this.startLineNumber,
					);
				}
				get endLineNumberExclusive() {
					return this.startLineNumber + this.lineCount;
				}
				get isEmpty() {
					return this.lineCount === 0;
				}
				touches(m) {
					return (
						this.endLineNumberExclusive >= m.startLineNumber &&
						m.endLineNumberExclusive >= this.startLineNumber
					);
				}
				isAfter(m) {
					return this.startLineNumber >= m.endLineNumberExclusive;
				}
				isBefore(m) {
					return m.startLineNumber >= this.endLineNumberExclusive;
				}
				delta(m) {
					return new C(this.startLineNumber + m, this.lineCount);
				}
				toString() {
					return `[${this.startLineNumber},${this.endLineNumberExclusive})`;
				}
				equals(m) {
					return (
						this.startLineNumber === m.startLineNumber &&
						this.lineCount === m.lineCount
					);
				}
				contains(m) {
					return this.startLineNumber <= m && m < this.endLineNumberExclusive;
				}
				deltaEnd(m) {
					return new C(this.startLineNumber, this.lineCount + m);
				}
				deltaStart(m) {
					return new C(this.startLineNumber + m, this.lineCount - m);
				}
				getLines(m) {
					const r = new Array(this.lineCount);
					for (let u = 0; u < this.lineCount; u++)
						r[u] = m.getLineContent(this.startLineNumber + u);
					return r;
				}
				containsRange(m) {
					return (
						this.startLineNumber <= m.startLineNumber &&
						m.endLineNumberExclusive <= this.endLineNumberExclusive
					);
				}
				toRange() {
					return new E.$iL(
						this.startLineNumber,
						1,
						this.endLineNumberExclusive,
						1,
					);
				}
				toInclusiveRange() {
					if (!this.isEmpty)
						return new E.$iL(
							this.startLineNumber,
							1,
							this.endLineNumberExclusive - 1,
							w.Constants.MAX_SAFE_SMALL_INTEGER,
						);
				}
				toInclusiveRangeOrEmpty() {
					return this.isEmpty
						? new E.$iL(this.startLineNumber, 1, this.startLineNumber, 1)
						: new E.$iL(
								this.startLineNumber,
								1,
								this.endLineNumberExclusive - 1,
								w.Constants.MAX_SAFE_SMALL_INTEGER,
							);
				}
				intersects(m) {
					return (
						this.startLineNumber <= m.endLineNumberExclusive &&
						m.startLineNumber <= this.endLineNumberExclusive
					);
				}
			}
			e.$bZb = C;
		}),
		