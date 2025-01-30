import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/charCode.js';
import '../../../../base/common/search.js';
define(de[3593], he([1, 0, 37, 120, 1507]), function (ce /*require*/,
 e /*exports*/,
 t /*strings*/,
 i /*charCode*/,
 w /*search*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$BNc = void 0),
				(t = mt(t));
			class E {
				constructor(d, m, r) {
					(this.b = !1), (this.a = d);
					let u, a;
					typeof m == "boolean"
						? ((a = m), (this.c = r))
						: ((u = m),
							(a = !!u.isRegExp),
							(this.c = t.$xf(u.pattern, !!u.isRegExp, {
								matchCase: u.isCaseSensitive,
								wholeWord: u.isWordMatch,
								multiline: u.isMultiline,
								global: !1,
								unicode: !0,
							}))),
						a && this.f(d),
						this.c.global &&
							(this.c = t.$xf(this.c.source, !0, {
								matchCase: !this.c.ignoreCase,
								wholeWord: !1,
								multiline: this.c.multiline,
								global: !1,
							})),
						(this.d = new RegExp(
							/([\s\S]*?)((?:\\[uUlL])+?|)(\$[0-9]+)([\s\S]*?)/g,
						));
				}
				get hasParameters() {
					return this.b;
				}
				get pattern() {
					return this.a;
				}
				get regExp() {
					return this.c;
				}
				getReplaceString(d, m) {
					this.c.lastIndex = 0;
					const r = this.c.exec(d);
					if (r) {
						if (this.hasParameters) {
							const u = this.e(d, this.c, this.buildReplaceString(r, m));
							return r[0] === d
								? u
								: u.substr(r.index, r[0].length - (d.length - u.length));
						}
						return this.buildReplaceString(r, m);
					}
					return null;
				}
				e(d, m, r) {
					if (!/\\[uUlL]/.test(r)) return d.replace(m, r);
					const u = m.exec(d);
					if (u === null) return d.replace(m, r);
					let a,
						h = "",
						c = 0,
						n = "";
					for (; (a = this.d.exec(r)) !== null; ) {
						c = a.index;
						const g = a[0];
						n = g;
						let p = a[2];
						const o = a[3];
						if (!p) {
							h += g;
							continue;
						}
						const f = u[parseInt(o.slice(1))];
						if (!f) {
							h += g;
							continue;
						}
						const b = f.length;
						(h += a[1]), (p = p.replace(/\\/g, ""));
						let s = 0;
						for (; s < p.length; s++)
							switch (p[s]) {
								case "U":
									(h += f.slice(s).toUpperCase()), (s = b);
									break;
								case "u":
									h += f[s].toUpperCase();
									break;
								case "L":
									(h += f.slice(s).toLowerCase()), (s = b);
									break;
								case "l":
									h += f[s].toLowerCase();
									break;
							}
						s < b && (h += f.slice(s)), (h += a[4]);
					}
					return (h += r.slice(c + n.length)), d.replace(m, h);
				}
				buildReplaceString(d, m) {
					return m ? (0, w.$7pb)(d, this.a) : this.a;
				}
				f(d) {
					if (!d || d.length === 0) return;
					let m = 0,
						r = "";
					for (let u = 0, a = d.length; u < a; u++) {
						const h = d.charCodeAt(u);
						if (h === i.CharCode.Backslash) {
							if ((u++, u >= a)) break;
							const c = d.charCodeAt(u);
							let n = null;
							switch (c) {
								case i.CharCode.Backslash:
									n = "\\";
									break;
								case i.CharCode.n:
									n = `
`;
									break;
								case i.CharCode.t:
									n = "	";
									break;
							}
							n && ((r += d.substring(m, u - 1) + n), (m = u + 1));
						}
						if (h === i.CharCode.DollarSign) {
							if ((u++, u >= a)) break;
							const c = d.charCodeAt(u);
							let n = null;
							switch (c) {
								case i.CharCode.Digit0:
									(n = "$&"), (this.b = !0);
									break;
								case i.CharCode.BackTick:
								case i.CharCode.SingleQuote:
									this.b = !0;
									break;
								default: {
									if (!this.g(c, i.CharCode.Digit1, i.CharCode.Digit9)) break;
									if (u === d.length - 1) {
										this.b = !0;
										break;
									}
									let g = d.charCodeAt(++u);
									if (!this.g(g, i.CharCode.Digit0, i.CharCode.Digit9)) {
										(this.b = !0), --u;
										break;
									}
									if (u === d.length - 1) {
										this.b = !0;
										break;
									}
									if (
										((g = d.charCodeAt(++u)),
										!this.g(g, i.CharCode.Digit0, i.CharCode.Digit9))
									) {
										(this.b = !0), --u;
										break;
									}
									break;
								}
							}
							n && ((r += d.substring(m, u - 1) + n), (m = u + 1));
						}
					}
					m !== 0 && (this.a = r + d.substring(m));
				}
				g(d, m, r) {
					return m <= d && d <= r;
				}
			}
			e.$BNc = E;
		}),
		