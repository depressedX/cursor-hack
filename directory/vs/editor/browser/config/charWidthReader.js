import '../../../../require.js';
import '../../../../exports.js';
import './domFontInfo.js';
define(de[2542], he([1, 0, 321]), function (ce /*require*/,
 e /*exports*/,
 t /*domFontInfo*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$lsb = e.CharWidthRequestType = void 0),
				(e.$msb = C);
			var i;
			(function (d) {
				(d[(d.Regular = 0)] = "Regular"),
					(d[(d.Italic = 1)] = "Italic"),
					(d[(d.Bold = 2)] = "Bold");
			})(i || (e.CharWidthRequestType = i = {}));
			class w {
				constructor(m, r) {
					(this.chr = m), (this.type = r), (this.width = 0);
				}
				fulfill(m) {
					this.width = m;
				}
			}
			e.$lsb = w;
			class E {
				constructor(m, r) {
					(this.a = m), (this.b = r), (this.c = null), (this.d = null);
				}
				read(m) {
					this.e(),
						m.document.body.appendChild(this.c),
						this.g(),
						this.c?.remove(),
						(this.c = null),
						(this.d = null);
				}
				e() {
					const m = document.createElement("div");
					(m.style.position = "absolute"),
						(m.style.top = "-50000px"),
						(m.style.width = "50000px");
					const r = document.createElement("div");
					(0, t.$jsb)(r, this.a), m.appendChild(r);
					const u = document.createElement("div");
					(0, t.$jsb)(u, this.a),
						(u.style.fontWeight = "bold"),
						m.appendChild(u);
					const a = document.createElement("div");
					(0, t.$jsb)(a, this.a),
						(a.style.fontStyle = "italic"),
						m.appendChild(a);
					const h = [];
					for (const c of this.b) {
						let n;
						c.type === i.Regular && (n = r),
							c.type === i.Bold && (n = u),
							c.type === i.Italic && (n = a),
							n.appendChild(document.createElement("br"));
						const g = document.createElement("span");
						E.f(g, c), n.appendChild(g), h.push(g);
					}
					(this.c = m), (this.d = h);
				}
				static f(m, r) {
					if (r.chr === " ") {
						let u = "\xA0";
						for (let a = 0; a < 8; a++) u += u;
						m.innerText = u;
					} else {
						let u = r.chr;
						for (let a = 0; a < 8; a++) u += u;
						m.textContent = u;
					}
				}
				g() {
					for (let m = 0, r = this.b.length; m < r; m++) {
						const u = this.b[m],
							a = this.d[m];
						u.fulfill(a.offsetWidth / 256);
					}
				}
			}
			function C(d, m, r) {
				new E(m, r).read(d);
			}
		}),
		