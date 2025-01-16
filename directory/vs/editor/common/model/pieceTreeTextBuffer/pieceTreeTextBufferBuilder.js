define(
			de[1195],
			he([1, 0, 120, 37, 64, 1628, 1194]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0U = void 0),
					(i = mt(i));
				class d {
					constructor(u, a, h, c, n, g, p, o, f) {
						(this.a = u),
							(this.b = a),
							(this.c = h),
							(this.d = c),
							(this.e = n),
							(this.f = g),
							(this.g = p),
							(this.h = o),
							(this.j = f);
					}
					k(u) {
						const a = this.c + this.d + this.e,
							h = this.c + this.e;
						return a === 0
							? u === w.DefaultEndOfLine.LF
								? `
`
								: `\r
`
							: h > a / 2
								? `\r
`
								: `
`;
					}
					create(u) {
						const a = this.k(u),
							h = this.a;
						if (
							this.j &&
							((a ===
								`\r
` &&
								(this.c > 0 || this.d > 0)) ||
								(a ===
									`
` &&
									(this.c > 0 || this.e > 0)))
						)
							for (let n = 0, g = h.length; n < g; n++) {
								const p = h[n].buffer.replace(/\r\n|\r|\n/g, a),
									o = (0, E.$4U)(p);
								h[n] = new E.$7U(p, o);
							}
						const c = new C.$9U(h, this.b, a, this.f, this.g, this.h, this.j);
						return { textBuffer: c, disposable: c };
					}
					getFirstLineText(u) {
						return this.a[0].buffer.substr(0, u).split(/\r\n|\r|\n/)[0];
					}
				}
				class m {
					constructor() {
						(this.a = []),
							(this.b = ""),
							(this.c = !1),
							(this.d = 0),
							(this.e = []),
							(this.f = 0),
							(this.g = 0),
							(this.h = 0),
							(this.j = !1),
							(this.k = !1),
							(this.l = !0);
					}
					acceptChunk(u) {
						if (u.length === 0) return;
						this.a.length === 0 &&
							i.$_f(u) &&
							((this.b = i.$$f), (u = u.substr(1)));
						const a = u.charCodeAt(u.length - 1);
						a === t.CharCode.CarriageReturn || (a >= 55296 && a <= 56319)
							? (this.m(u.substr(0, u.length - 1), !1),
								(this.c = !0),
								(this.d = a))
							: (this.m(u, !1), (this.c = !1), (this.d = a));
					}
					m(u, a) {
						(!a && u.length === 0) ||
							(this.c ? this.n(String.fromCharCode(this.d) + u) : this.n(u));
					}
					n(u) {
						const a = (0, E.$5U)(this.e, u);
						this.a.push(new E.$7U(u, a.lineStarts)),
							(this.f += a.cr),
							(this.g += a.lf),
							(this.h += a.crlf),
							a.isBasicASCII ||
								((this.l = !1),
								this.j || (this.j = i.$1f(u)),
								this.k || (this.k = i.$4f(u)));
					}
					finish(u = !0) {
						return (
							this.o(),
							new d(
								this.a,
								this.b,
								this.f,
								this.g,
								this.h,
								this.j,
								this.k,
								this.l,
								u,
							)
						);
					}
					o() {
						if ((this.a.length === 0 && this.m("", !0), this.c)) {
							this.c = !1;
							const u = this.a[this.a.length - 1];
							u.buffer += String.fromCharCode(this.d);
							const a = (0, E.$4U)(u.buffer);
							(u.lineStarts = a),
								this.d === t.CharCode.CarriageReturn && this.f++;
						}
					}
				}
				e.$0U = m;
			},
		),
		