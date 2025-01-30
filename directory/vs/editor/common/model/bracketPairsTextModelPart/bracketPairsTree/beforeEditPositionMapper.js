import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../core/range.js';
import './length.js';
define(de[914], he([1, 0, 17, 492]), function (ce /*require*/,
 e /*exports*/,
 t /*range*/,
 i /*length*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$2O = e.$1O = void 0);
			class w {
				static fromModelContentChanges(m) {
					return m
						.map((u) => {
							const a = t.$iL.lift(u.range);
							return new w(
								(0, i.$RM)(a.getStartPosition()),
								(0, i.$RM)(a.getEndPosition()),
								(0, i.$VM)(u.text),
							);
						})
						.reverse();
				}
				constructor(m, r, u) {
					(this.startOffset = m), (this.endOffset = r), (this.newLength = u);
				}
				toString() {
					return `[${(0, i.$GM)(this.startOffset)}...${(0, i.$GM)(this.endOffset)}) -> ${(0, i.$GM)(this.newLength)}`;
				}
			}
			e.$1O = w;
			class E {
				constructor(m) {
					(this.a = 0),
						(this.b = 0),
						(this.d = 0),
						(this.e = -1),
						(this.f = m.map((r) => C.from(r)));
				}
				getOffsetBeforeChange(m) {
					return this.i(m), this.h(m);
				}
				getDistanceToNextChange(m) {
					this.i(m);
					const r = this.f[this.a],
						u = r ? this.g(r.offsetObj) : null;
					return u === null ? null : (0, i.$MM)(m, u);
				}
				g(m) {
					return m.lineCount === this.e
						? (0, i.$FM)(m.lineCount + this.b, m.columnCount + this.d)
						: (0, i.$FM)(m.lineCount + this.b, m.columnCount);
				}
				h(m) {
					const r = (0, i.$GM)(m);
					return r.lineCount - this.b === this.e
						? (0, i.$FM)(r.lineCount - this.b, r.columnCount - this.d)
						: (0, i.$FM)(r.lineCount - this.b, r.columnCount);
				}
				i(m) {
					for (; this.a < this.f.length; ) {
						const r = this.f[this.a],
							u = this.g(r.endOffsetAfterObj);
						if ((0, i.$OM)(u, m)) {
							this.a++;
							const a = (0, i.$GM)(u),
								h = (0, i.$GM)(this.g(r.endOffsetBeforeObj)),
								c = a.lineCount - h.lineCount;
							this.b += c;
							const n = this.e === r.endOffsetBeforeObj.lineCount ? this.d : 0,
								g = a.columnCount - h.columnCount;
							(this.d = n + g), (this.e = r.endOffsetBeforeObj.lineCount);
						} else break;
					}
				}
			}
			e.$2O = E;
			class C {
				static from(m) {
					return new C(m.startOffset, m.endOffset, m.newLength);
				}
				constructor(m, r, u) {
					(this.endOffsetBeforeObj = (0, i.$GM)(r)),
						(this.endOffsetAfterObj = (0, i.$GM)((0, i.$JM)(m, u))),
						(this.offsetObj = (0, i.$GM)(m));
				}
			}
		}),
		