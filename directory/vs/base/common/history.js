import '../../../require.js';
import '../../../exports.js';
import './collections.js';
import './navigator.js';
define(de[647], he([1, 0, 456, 2219]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Kob = e.$Job = void 0);
			class w {
				constructor(d = [], m = 10) {
					this.h(d), (this.b = m), this.d();
				}
				getHistory() {
					return this.j;
				}
				add(d) {
					this.a.delete(d), this.a.add(d), this.d();
				}
				next() {
					return this.c.next();
				}
				previous() {
					return this.g() !== 0 ? this.c.previous() : null;
				}
				current() {
					return this.c.current();
				}
				first() {
					return this.c.first();
				}
				last() {
					return this.c.last();
				}
				isFirst() {
					return this.g() === 0;
				}
				isLast() {
					return this.g() >= this.j.length - 1;
				}
				isNowhere() {
					return this.c.current() === null;
				}
				has(d) {
					return this.a.has(d);
				}
				clear() {
					this.h([]), this.d();
				}
				d() {
					this.f();
					const d = this.j;
					this.c = new i.$Iob(d, 0, d.length, d.length);
				}
				f() {
					const d = this.j;
					d.length > this.b && this.h(d.slice(d.length - this.b));
				}
				g() {
					const d = this.c.current();
					return d ? this.j.indexOf(d) : -1;
				}
				h(d) {
					this.a = new Set();
					for (const m of d) this.a.add(m);
				}
				get j() {
					const d = [];
					return this.a.forEach((m) => d.push(m)), d;
				}
			}
			e.$Job = w;
			class E {
				get size() {
					return this.f;
				}
				constructor(d, m = 10, r = (u) => u) {
					if (((this.g = m), (this.h = r), d.length < 1))
						throw new Error("not supported");
					(this.f = 1),
						(this.b =
							this.c =
							this.d =
								{ value: d[0], previous: void 0, next: void 0 }),
						(this.a = new t.$i([d[0]], r));
					for (let u = 1; u < d.length; u++) this.add(d[u]);
				}
				add(d) {
					const m = { value: d, previous: this.c, next: void 0 };
					for (
						this.c.next = m,
							this.c = m,
							this.d = this.c,
							this.f++,
							this.a.has(d) ? this.j(d) : this.a.add(d);
						this.f > this.g;
					)
						this.a.delete(this.b.value),
							(this.b = this.b.next),
							(this.b.previous = void 0),
							this.f--;
				}
				replaceLast(d) {
					if (this.h(this.c.value) === this.h(d)) return d;
					const m = this.c.value;
					return (
						this.a.delete(m),
						(this.c.value = d),
						this.a.has(d) ? this.j(d) : this.a.add(d),
						m
					);
				}
				prepend(d) {
					if (this.f === this.g || this.a.has(d)) return;
					const m = { value: d, previous: void 0, next: this.b };
					(this.b.previous = m), (this.b = m), this.f++, this.a.add(d);
				}
				isAtEnd() {
					return this.d === this.c;
				}
				current() {
					return this.d.value;
				}
				previous() {
					return this.d.previous && (this.d = this.d.previous), this.d.value;
				}
				next() {
					return this.d.next && (this.d = this.d.next), this.d.value;
				}
				has(d) {
					return this.a.has(d);
				}
				resetCursor() {
					return (this.d = this.c), this.d.value;
				}
				*[Symbol.iterator]() {
					let d = this.b;
					for (; d; ) yield d.value, (d = d.next);
				}
				j(d) {
					let m = this.b;
					const r = this.h(d);
					for (; m !== this.c; )
						this.h(m.value) === r &&
							(m === this.b
								? ((this.b = this.b.next), (this.b.previous = void 0))
								: ((m.previous.next = m.next), (m.next.previous = m.previous)),
							this.f--),
							(m = m.next);
				}
			}
			e.$Kob = E;
		}),
		