import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/strings.js';
import '../../../base/common/platform.js';
import '../../../base/common/buffer.js';
define(de[462], he([1, 0, 37, 12, 76]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$KL = void 0),
				(e.$IL = u),
				(e.$JL = a),
				(t = mt(t)),
				(i = mt(i)),
				(w = mt(w));
			let E;
			function C() {
				return E || (E = new TextDecoder("UTF-16LE")), E;
			}
			let d;
			function m() {
				return d || (d = new TextDecoder("UTF-16BE")), d;
			}
			let r;
			function u() {
				return r || (r = i.$G() ? C() : m()), r;
			}
			function a(n, g, p) {
				const o = new Uint16Array(n.buffer, g, p);
				return p > 0 && (o[0] === 65279 || o[0] === 65534)
					? h(n, g, p)
					: C().decode(o);
			}
			function h(n, g, p) {
				const o = [];
				let f = 0;
				for (let b = 0; b < p; b++) {
					const s = w.$Ve(n, g);
					(g += 2), (o[f++] = String.fromCharCode(s));
				}
				return o.join("");
			}
			class c {
				constructor(g) {
					(this.a = g | 0),
						(this.b = new Uint16Array(this.a)),
						(this.c = null),
						(this.d = 0);
				}
				reset() {
					(this.c = null), (this.d = 0);
				}
				build() {
					return this.c !== null ? (this.f(), this.c.join("")) : this.e();
				}
				e() {
					if (this.d === 0) return "";
					const g = new Uint16Array(this.b.buffer, 0, this.d);
					return u().decode(g);
				}
				f() {
					const g = this.e();
					(this.d = 0),
						this.c === null ? (this.c = [g]) : (this.c[this.c.length] = g);
				}
				appendCharCode(g) {
					const p = this.a - this.d;
					p <= 1 && (p === 0 || t.$Qf(g)) && this.f(), (this.b[this.d++] = g);
				}
				appendASCIICharCode(g) {
					this.d === this.a && this.f(), (this.b[this.d++] = g);
				}
				appendString(g) {
					const p = g.length;
					if (this.d + p >= this.a) {
						this.f(), (this.c[this.c.length] = g);
						return;
					}
					for (let o = 0; o < p; o++) this.b[this.d++] = g.charCodeAt(o);
				}
			}
			e.$KL = c;
		}),
		