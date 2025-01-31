import '../../../../require.js';
import '../../../../exports.js';
define(de[1395], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.varint64read = t),
				(e.varint64write = i),
				(e.int64FromString = E),
				(e.int64ToString = C),
				(e.uInt64ToString = d),
				(e.varint32write = h),
				(e.varint32read = c);
			function t() {
				let n = 0,
					g = 0;
				for (let o = 0; o < 28; o += 7) {
					let f = this.buf[this.pos++];
					if (((n |= (f & 127) << o), !(f & 128)))
						return this.assertBounds(), [n, g];
				}
				let p = this.buf[this.pos++];
				if (((n |= (p & 15) << 28), (g = (p & 112) >> 4), !(p & 128)))
					return this.assertBounds(), [n, g];
				for (let o = 3; o <= 31; o += 7) {
					let f = this.buf[this.pos++];
					if (((g |= (f & 127) << o), !(f & 128)))
						return this.assertBounds(), [n, g];
				}
				throw new Error("invalid varint");
			}
			function i(n, g, p) {
				for (let b = 0; b < 28; b = b + 7) {
					const s = n >>> b,
						l = !(!(s >>> 7) && g == 0),
						y = (l ? s | 128 : s) & 255;
					if ((p.push(y), !l)) return;
				}
				const o = ((n >>> 28) & 15) | ((g & 7) << 4),
					f = !!(g >> 3);
				if ((p.push((f ? o | 128 : o) & 255), !!f)) {
					for (let b = 3; b < 31; b = b + 7) {
						const s = g >>> b,
							l = !!(s >>> 7),
							y = (l ? s | 128 : s) & 255;
						if ((p.push(y), !l)) return;
					}
					p.push((g >>> 31) & 1);
				}
			}
			const w = 4294967296;
			function E(n) {
				const g = n[0] === "-";
				g && (n = n.slice(1));
				const p = 1e6;
				let o = 0,
					f = 0;
				function b(s, l) {
					const y = Number(n.slice(s, l));
					(f *= p),
						(o = o * p + y),
						o >= w && ((f = f + ((o / w) | 0)), (o = o % w));
				}
				return (
					b(-24, -18), b(-18, -12), b(-12, -6), b(-6), g ? u(o, f) : r(o, f)
				);
			}
			function C(n, g) {
				let p = r(n, g);
				const o = p.hi & 2147483648;
				o && (p = u(p.lo, p.hi));
				const f = d(p.lo, p.hi);
				return o ? "-" + f : f;
			}
			function d(n, g) {
				if ((({ lo: n, hi: g } = m(n, g)), g <= 2097151))
					return String(w * g + n);
				const p = n & 16777215,
					o = ((n >>> 24) | (g << 8)) & 16777215,
					f = (g >> 16) & 65535;
				let b = p + o * 6777216 + f * 6710656,
					s = o + f * 8147497,
					l = f * 2;
				const y = 1e7;
				return (
					b >= y && ((s += Math.floor(b / y)), (b %= y)),
					s >= y && ((l += Math.floor(s / y)), (s %= y)),
					l.toString() + a(s) + a(b)
				);
			}
			function m(n, g) {
				return { lo: n >>> 0, hi: g >>> 0 };
			}
			function r(n, g) {
				return { lo: n | 0, hi: g | 0 };
			}
			function u(n, g) {
				return (g = ~g), n ? (n = ~n + 1) : (g += 1), r(n, g);
			}
			const a = (n) => {
				const g = String(n);
				return "0000000".slice(g.length) + g;
			};
			function h(n, g) {
				if (n >= 0) {
					for (; n > 127; ) g.push((n & 127) | 128), (n = n >>> 7);
					g.push(n);
				} else {
					for (let p = 0; p < 9; p++) g.push((n & 127) | 128), (n = n >> 7);
					g.push(1);
				}
			}
			function c() {
				let n = this.buf[this.pos++],
					g = n & 127;
				if (!(n & 128)) return this.assertBounds(), g;
				if (((n = this.buf[this.pos++]), (g |= (n & 127) << 7), !(n & 128)))
					return this.assertBounds(), g;
				if (((n = this.buf[this.pos++]), (g |= (n & 127) << 14), !(n & 128)))
					return this.assertBounds(), g;
				if (((n = this.buf[this.pos++]), (g |= (n & 127) << 21), !(n & 128)))
					return this.assertBounds(), g;
				(n = this.buf[this.pos++]), (g |= (n & 15) << 28);
				for (let p = 5; n & 128 && p < 10; p++) n = this.buf[this.pos++];
				if (n & 128) throw new Error("invalid varint");
				return this.assertBounds(), g >>> 0;
			}
		})
