import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/arrays.js';
import '../../../../../base/common/errors.js';
import '../../../core/offsetRange.js';
define(de[656], he([1, 0, 24, 29, 289]), function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*errors*/,
 w /*offsetRange*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$$wb = e.$0wb = e.$9wb = e.$8wb = e.$7wb = void 0);
			class E {
				static trivial(a, h) {
					return new E(
						[new C(w.$pL.ofLength(a.length), w.$pL.ofLength(h.length))],
						!1,
					);
				}
				static trivialTimedOut(a, h) {
					return new E(
						[new C(w.$pL.ofLength(a.length), w.$pL.ofLength(h.length))],
						!0,
					);
				}
				constructor(a, h) {
					(this.diffs = a), (this.hitTimeout = h);
				}
			}
			e.$7wb = E;
			class C {
				static invert(a, h) {
					const c = [];
					return (
						(0, t.$Fb)(a, (n, g) => {
							c.push(
								C.fromOffsetPairs(
									n ? n.getEndExclusives() : d.zero,
									g
										? g.getStarts()
										: new d(
												h,
												(n
													? n.seq2Range.endExclusive - n.seq1Range.endExclusive
													: 0) + h,
											),
								),
							);
						}),
						c
					);
				}
				static fromOffsetPairs(a, h) {
					return new C(
						new w.$pL(a.offset1, h.offset1),
						new w.$pL(a.offset2, h.offset2),
					);
				}
				static assertSorted(a) {
					let h;
					for (const c of a) {
						if (
							h &&
							!(
								h.seq1Range.endExclusive <= c.seq1Range.start &&
								h.seq2Range.endExclusive <= c.seq2Range.start
							)
						)
							throw new i.$gb("Sequence diffs must be sorted");
						h = c;
					}
				}
				constructor(a, h) {
					(this.seq1Range = a), (this.seq2Range = h);
				}
				swap() {
					return new C(this.seq2Range, this.seq1Range);
				}
				toString() {
					return `${this.seq1Range} <-> ${this.seq2Range}`;
				}
				join(a) {
					return new C(
						this.seq1Range.join(a.seq1Range),
						this.seq2Range.join(a.seq2Range),
					);
				}
				delta(a) {
					return a === 0
						? this
						: new C(this.seq1Range.delta(a), this.seq2Range.delta(a));
				}
				deltaStart(a) {
					return a === 0
						? this
						: new C(this.seq1Range.deltaStart(a), this.seq2Range.deltaStart(a));
				}
				deltaEnd(a) {
					return a === 0
						? this
						: new C(this.seq1Range.deltaEnd(a), this.seq2Range.deltaEnd(a));
				}
				intersectsOrTouches(a) {
					return (
						this.seq1Range.intersectsOrTouches(a.seq1Range) ||
						this.seq2Range.intersectsOrTouches(a.seq2Range)
					);
				}
				intersect(a) {
					const h = this.seq1Range.intersect(a.seq1Range),
						c = this.seq2Range.intersect(a.seq2Range);
					if (!(!h || !c)) return new C(h, c);
				}
				getStarts() {
					return new d(this.seq1Range.start, this.seq2Range.start);
				}
				getEndExclusives() {
					return new d(
						this.seq1Range.endExclusive,
						this.seq2Range.endExclusive,
					);
				}
			}
			e.$8wb = C;
			class d {
				static {
					this.zero = new d(0, 0);
				}
				static {
					this.max = new d(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
				}
				constructor(a, h) {
					(this.offset1 = a), (this.offset2 = h);
				}
				toString() {
					return `${this.offset1} <-> ${this.offset2}`;
				}
				delta(a) {
					return a === 0 ? this : new d(this.offset1 + a, this.offset2 + a);
				}
				equals(a) {
					return this.offset1 === a.offset1 && this.offset2 === a.offset2;
				}
			}
			e.$9wb = d;
			class m {
				static {
					this.instance = new m();
				}
				isValid() {
					return !0;
				}
			}
			e.$0wb = m;
			class r {
				constructor(a, h) {
					if (
						((this.e = a),
						(this.f = h),
						(this.c = Date.now()),
						(this.d = !0),
						a <= 0)
					)
						throw new i.$gb("timeout must be positive");
				}
				isValid() {
					if (
						!(Date.now() - this.c < this.e) &&
						this.d &&
						((this.d = !1), !this.f)
					)
						debugger;
					return this.d;
				}
				disable() {
					(this.e = Number.MAX_SAFE_INTEGER),
						(this.isValid = () => !0),
						(this.d = !0);
				}
			}
			e.$$wb = r;
		}),
		