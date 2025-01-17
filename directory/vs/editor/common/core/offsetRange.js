import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/errors.js';
define(de[289], he([1, 0, 29]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$qL = e.$pL = void 0);
			class i {
				static addRange(C, d) {
					let m = 0;
					for (; m < d.length && d[m].endExclusive < C.start; ) m++;
					let r = m;
					for (; r < d.length && d[r].start <= C.endExclusive; ) r++;
					if (m === r) d.splice(m, 0, C);
					else {
						const u = Math.min(C.start, d[m].start),
							a = Math.max(C.endExclusive, d[r - 1].endExclusive);
						d.splice(m, r - m, new i(u, a));
					}
				}
				static tryCreate(C, d) {
					if (!(C > d)) return new i(C, d);
				}
				static ofLength(C) {
					return new i(0, C);
				}
				static ofStartAndLength(C, d) {
					return new i(C, C + d);
				}
				constructor(C, d) {
					if (((this.start = C), (this.endExclusive = d), C > d))
						throw new t.$gb(`Invalid range: ${this.toString()}`);
				}
				get isEmpty() {
					return this.start === this.endExclusive;
				}
				delta(C) {
					return new i(this.start + C, this.endExclusive + C);
				}
				deltaStart(C) {
					return new i(this.start + C, this.endExclusive);
				}
				deltaEnd(C) {
					return new i(this.start, this.endExclusive + C);
				}
				get length() {
					return this.endExclusive - this.start;
				}
				toString() {
					return `[${this.start}, ${this.endExclusive})`;
				}
				equals(C) {
					return this.start === C.start && this.endExclusive === C.endExclusive;
				}
				containsRange(C) {
					return this.start <= C.start && C.endExclusive <= this.endExclusive;
				}
				contains(C) {
					return this.start <= C && C < this.endExclusive;
				}
				join(C) {
					return new i(
						Math.min(this.start, C.start),
						Math.max(this.endExclusive, C.endExclusive),
					);
				}
				intersect(C) {
					const d = Math.max(this.start, C.start),
						m = Math.min(this.endExclusive, C.endExclusive);
					if (d <= m) return new i(d, m);
				}
				intersects(C) {
					const d = Math.max(this.start, C.start),
						m = Math.min(this.endExclusive, C.endExclusive);
					return d < m;
				}
				intersectsOrTouches(C) {
					const d = Math.max(this.start, C.start),
						m = Math.min(this.endExclusive, C.endExclusive);
					return d <= m;
				}
				isBefore(C) {
					return this.endExclusive <= C.start;
				}
				isAfter(C) {
					return this.start >= C.endExclusive;
				}
				slice(C) {
					return C.slice(this.start, this.endExclusive);
				}
				substring(C) {
					return C.substring(this.start, this.endExclusive);
				}
				clip(C) {
					if (this.isEmpty)
						throw new t.$gb(`Invalid clipping range: ${this.toString()}`);
					return Math.max(this.start, Math.min(this.endExclusive - 1, C));
				}
				clipCyclic(C) {
					if (this.isEmpty)
						throw new t.$gb(`Invalid clipping range: ${this.toString()}`);
					return C < this.start
						? this.endExclusive - ((this.start - C) % this.length)
						: C >= this.endExclusive
							? this.start + ((C - this.start) % this.length)
							: C;
				}
				map(C) {
					const d = [];
					for (let m = this.start; m < this.endExclusive; m++) d.push(C(m));
					return d;
				}
				forEach(C) {
					for (let d = this.start; d < this.endExclusive; d++) C(d);
				}
			}
			e.$pL = i;
			class w {
				constructor() {
					this.a = [];
				}
				addRange(C) {
					let d = 0;
					for (; d < this.a.length && this.a[d].endExclusive < C.start; ) d++;
					let m = d;
					for (; m < this.a.length && this.a[m].start <= C.endExclusive; ) m++;
					if (d === m) this.a.splice(d, 0, C);
					else {
						const r = Math.min(C.start, this.a[d].start),
							u = Math.max(C.endExclusive, this.a[m - 1].endExclusive);
						this.a.splice(d, m - d, new i(r, u));
					}
				}
				toString() {
					return this.a.map((C) => C.toString()).join(", ");
				}
				intersectsStrict(C) {
					let d = 0;
					for (; d < this.a.length && this.a[d].endExclusive <= C.start; ) d++;
					return d < this.a.length && this.a[d].start < C.endExclusive;
				}
				intersectWithRange(C) {
					const d = new w();
					for (const m of this.a) {
						const r = m.intersect(C);
						r && d.addRange(r);
					}
					return d;
				}
				intersectWithRangeLength(C) {
					return this.intersectWithRange(C).length;
				}
				get length() {
					return this.a.reduce((C, d) => C + d.length, 0);
				}
			}
			e.$qL = w;
		}),
		