define(de[97], he([1, 0, 120]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$UL = e.$TL = e.$SL = e.$RL = void 0);
			function i(m, r) {
				const u = Math.pow(10, r);
				return Math.round(m * u) / u;
			}
			class w {
				constructor(r, u, a, h = 1) {
					(this._rgbaBrand = void 0),
						(this.r = Math.min(255, Math.max(0, r)) | 0),
						(this.g = Math.min(255, Math.max(0, u)) | 0),
						(this.b = Math.min(255, Math.max(0, a)) | 0),
						(this.a = i(Math.max(Math.min(1, h), 0), 3));
				}
				static equals(r, u) {
					return r.r === u.r && r.g === u.g && r.b === u.b && r.a === u.a;
				}
			}
			e.$RL = w;
			class E {
				constructor(r, u, a, h) {
					(this._hslaBrand = void 0),
						(this.h = Math.max(Math.min(360, r), 0) | 0),
						(this.s = i(Math.max(Math.min(1, u), 0), 3)),
						(this.l = i(Math.max(Math.min(1, a), 0), 3)),
						(this.a = i(Math.max(Math.min(1, h), 0), 3));
				}
				static equals(r, u) {
					return r.h === u.h && r.s === u.s && r.l === u.l && r.a === u.a;
				}
				static fromRGBA(r) {
					const u = r.r / 255,
						a = r.g / 255,
						h = r.b / 255,
						c = r.a,
						n = Math.max(u, a, h),
						g = Math.min(u, a, h);
					let p = 0,
						o = 0;
					const f = (g + n) / 2,
						b = n - g;
					if (b > 0) {
						switch (
							((o = Math.min(f <= 0.5 ? b / (2 * f) : b / (2 - 2 * f), 1)), n)
						) {
							case u:
								p = (a - h) / b + (a < h ? 6 : 0);
								break;
							case a:
								p = (h - u) / b + 2;
								break;
							case h:
								p = (u - a) / b + 4;
								break;
						}
						(p *= 60), (p = Math.round(p));
					}
					return new E(p, o, f, c);
				}
				static i(r, u, a) {
					return (
						a < 0 && (a += 1),
						a > 1 && (a -= 1),
						a < 1 / 6
							? r + (u - r) * 6 * a
							: a < 1 / 2
								? u
								: a < 2 / 3
									? r + (u - r) * (2 / 3 - a) * 6
									: r
					);
				}
				static toRGBA(r) {
					const u = r.h / 360,
						{ s: a, l: h, a: c } = r;
					let n, g, p;
					if (a === 0) n = g = p = h;
					else {
						const o = h < 0.5 ? h * (1 + a) : h + a - h * a,
							f = 2 * h - o;
						(n = E.i(f, o, u + 1 / 3)),
							(g = E.i(f, o, u)),
							(p = E.i(f, o, u - 1 / 3));
					}
					return new w(
						Math.round(n * 255),
						Math.round(g * 255),
						Math.round(p * 255),
						c,
					);
				}
			}
			e.$SL = E;
			class C {
				constructor(r, u, a, h) {
					(this._hsvaBrand = void 0),
						(this.h = Math.max(Math.min(360, r), 0) | 0),
						(this.s = i(Math.max(Math.min(1, u), 0), 3)),
						(this.v = i(Math.max(Math.min(1, a), 0), 3)),
						(this.a = i(Math.max(Math.min(1, h), 0), 3));
				}
				static equals(r, u) {
					return r.h === u.h && r.s === u.s && r.v === u.v && r.a === u.a;
				}
				static fromRGBA(r) {
					const u = r.r / 255,
						a = r.g / 255,
						h = r.b / 255,
						c = Math.max(u, a, h),
						n = Math.min(u, a, h),
						g = c - n,
						p = c === 0 ? 0 : g / c;
					let o;
					return (
						g === 0
							? (o = 0)
							: c === u
								? (o = ((((a - h) / g) % 6) + 6) % 6)
								: c === a
									? (o = (h - u) / g + 2)
									: (o = (u - a) / g + 4),
						new C(Math.round(o * 60), p, c, r.a)
					);
				}
				static toRGBA(r) {
					const { h: u, s: a, v: h, a: c } = r,
						n = h * a,
						g = n * (1 - Math.abs(((u / 60) % 2) - 1)),
						p = h - n;
					let [o, f, b] = [0, 0, 0];
					return (
						u < 60
							? ((o = n), (f = g))
							: u < 120
								? ((o = g), (f = n))
								: u < 180
									? ((f = n), (b = g))
									: u < 240
										? ((f = g), (b = n))
										: u < 300
											? ((o = g), (b = n))
											: u <= 360 && ((o = n), (b = g)),
						(o = Math.round((o + p) * 255)),
						(f = Math.round((f + p) * 255)),
						(b = Math.round((b + p) * 255)),
						new w(o, f, b, c)
					);
				}
			}
			e.$TL = C;
			class d {
				static fromHex(r) {
					return d.Format.CSS.parseHex(r) || d.red;
				}
				static equals(r, u) {
					return !r && !u ? !0 : !r || !u ? !1 : r.equals(u);
				}
				get hsla() {
					return this.i ? this.i : E.fromRGBA(this.rgba);
				}
				get hsva() {
					return this.j ? this.j : C.fromRGBA(this.rgba);
				}
				constructor(r) {
					if (r)
						if (r instanceof w) this.rgba = r;
						else if (r instanceof E) (this.i = r), (this.rgba = E.toRGBA(r));
						else if (r instanceof C) (this.j = r), (this.rgba = C.toRGBA(r));
						else throw new Error("Invalid color ctor argument");
					else throw new Error("Color needs a value");
				}
				equals(r) {
					return (
						!!r &&
						w.equals(this.rgba, r.rgba) &&
						E.equals(this.hsla, r.hsla) &&
						C.equals(this.hsva, r.hsva)
					);
				}
				getRelativeLuminance() {
					const r = d.k(this.rgba.r),
						u = d.k(this.rgba.g),
						a = d.k(this.rgba.b),
						h = 0.2126 * r + 0.7152 * u + 0.0722 * a;
					return i(h, 4);
				}
				static k(r) {
					const u = r / 255;
					return u <= 0.03928 ? u / 12.92 : Math.pow((u + 0.055) / 1.055, 2.4);
				}
				getContrastRatio(r) {
					const u = this.getRelativeLuminance(),
						a = r.getRelativeLuminance();
					return u > a ? (u + 0.05) / (a + 0.05) : (a + 0.05) / (u + 0.05);
				}
				isDarker() {
					return (
						(this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 <
						128
					);
				}
				isLighter() {
					return (
						(this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 >=
						128
					);
				}
				isLighterThan(r) {
					const u = this.getRelativeLuminance(),
						a = r.getRelativeLuminance();
					return u > a;
				}
				isDarkerThan(r) {
					const u = this.getRelativeLuminance(),
						a = r.getRelativeLuminance();
					return u < a;
				}
				lighten(r) {
					return new d(
						new E(
							this.hsla.h,
							this.hsla.s,
							this.hsla.l + this.hsla.l * r,
							this.hsla.a,
						),
					);
				}
				darken(r) {
					return new d(
						new E(
							this.hsla.h,
							this.hsla.s,
							this.hsla.l - this.hsla.l * r,
							this.hsla.a,
						),
					);
				}
				transparent(r) {
					const { r: u, g: a, b: h, a: c } = this.rgba;
					return new d(new w(u, a, h, c * r));
				}
				isTransparent() {
					return this.rgba.a === 0;
				}
				isOpaque() {
					return this.rgba.a === 1;
				}
				opposite() {
					return new d(
						new w(
							255 - this.rgba.r,
							255 - this.rgba.g,
							255 - this.rgba.b,
							this.rgba.a,
						),
					);
				}
				blend(r) {
					const u = r.rgba,
						a = this.rgba.a,
						h = u.a,
						c = a + h * (1 - a);
					if (c < 1e-6) return d.transparent;
					const n = (this.rgba.r * a) / c + (u.r * h * (1 - a)) / c,
						g = (this.rgba.g * a) / c + (u.g * h * (1 - a)) / c,
						p = (this.rgba.b * a) / c + (u.b * h * (1 - a)) / c;
					return new d(new w(n, g, p, c));
				}
				makeOpaque(r) {
					if (this.isOpaque() || r.rgba.a !== 1) return this;
					const { r: u, g: a, b: h, a: c } = this.rgba;
					return new d(
						new w(
							r.rgba.r - c * (r.rgba.r - u),
							r.rgba.g - c * (r.rgba.g - a),
							r.rgba.b - c * (r.rgba.b - h),
							1,
						),
					);
				}
				flatten(...r) {
					const u = r.reduceRight((a, h) => d.o(h, a));
					return d.o(this, u);
				}
				static o(r, u) {
					const a = 1 - r.rgba.a;
					return new d(
						new w(
							a * u.rgba.r + r.rgba.a * r.rgba.r,
							a * u.rgba.g + r.rgba.a * r.rgba.g,
							a * u.rgba.b + r.rgba.a * r.rgba.b,
						),
					);
				}
				toString() {
					return this.u || (this.u = d.Format.CSS.format(this)), this.u;
				}
				static getLighterColor(r, u, a) {
					if (r.isLighterThan(u)) return r;
					a = a || 0.5;
					const h = r.getRelativeLuminance(),
						c = u.getRelativeLuminance();
					return (a = (a * (c - h)) / c), r.lighten(a);
				}
				static getDarkerColor(r, u, a) {
					if (r.isDarkerThan(u)) return r;
					a = a || 0.5;
					const h = r.getRelativeLuminance(),
						c = u.getRelativeLuminance();
					return (a = (a * (h - c)) / h), r.darken(a);
				}
				static {
					this.white = new d(new w(255, 255, 255, 1));
				}
				static {
					this.black = new d(new w(0, 0, 0, 1));
				}
				static {
					this.red = new d(new w(255, 0, 0, 1));
				}
				static {
					this.blue = new d(new w(0, 0, 255, 1));
				}
				static {
					this.green = new d(new w(0, 255, 0, 1));
				}
				static {
					this.cyan = new d(new w(0, 255, 255, 1));
				}
				static {
					this.lightgrey = new d(new w(211, 211, 211, 1));
				}
				static {
					this.transparent = new d(new w(0, 0, 0, 0));
				}
			}
			(e.$UL = d),
				(function (m) {
					let r;
					(function (u) {
						let a;
						(function (h) {
							function c($) {
								return $.rgba.a === 1
									? `rgb(${$.rgba.r}, ${$.rgba.g}, ${$.rgba.b})`
									: m.Format.CSS.formatRGBA($);
							}
							h.formatRGB = c;
							function n($) {
								return `rgba(${$.rgba.r}, ${$.rgba.g}, ${$.rgba.b}, ${+$.rgba.a.toFixed(2)})`;
							}
							h.formatRGBA = n;
							function g($) {
								return $.hsla.a === 1
									? `hsl(${$.hsla.h}, ${($.hsla.s * 100).toFixed(2)}%, ${($.hsla.l * 100).toFixed(2)}%)`
									: m.Format.CSS.formatHSLA($);
							}
							h.formatHSL = g;
							function p($) {
								return `hsla(${$.hsla.h}, ${($.hsla.s * 100).toFixed(2)}%, ${($.hsla.l * 100).toFixed(2)}%, ${$.hsla.a.toFixed(2)})`;
							}
							h.formatHSLA = p;
							function o($) {
								const v = $.toString(16);
								return v.length !== 2 ? "0" + v : v;
							}
							function f($) {
								return `#${o($.rgba.r)}${o($.rgba.g)}${o($.rgba.b)}`;
							}
							h.formatHex = f;
							function b($, v = !1) {
								return v && $.rgba.a === 1
									? m.Format.CSS.formatHex($)
									: `#${o($.rgba.r)}${o($.rgba.g)}${o($.rgba.b)}${o(Math.round($.rgba.a * 255))}`;
							}
							h.formatHexA = b;
							function s($) {
								return $.isOpaque()
									? m.Format.CSS.formatHex($)
									: m.Format.CSS.formatRGBA($);
							}
							h.format = s;
							function l($) {
								const v = $.length;
								if (v === 0 || $.charCodeAt(0) !== t.CharCode.Hash) return null;
								if (v === 7) {
									const S = 16 * y($.charCodeAt(1)) + y($.charCodeAt(2)),
										I = 16 * y($.charCodeAt(3)) + y($.charCodeAt(4)),
										T = 16 * y($.charCodeAt(5)) + y($.charCodeAt(6));
									return new m(new w(S, I, T, 1));
								}
								if (v === 9) {
									const S = 16 * y($.charCodeAt(1)) + y($.charCodeAt(2)),
										I = 16 * y($.charCodeAt(3)) + y($.charCodeAt(4)),
										T = 16 * y($.charCodeAt(5)) + y($.charCodeAt(6)),
										P = 16 * y($.charCodeAt(7)) + y($.charCodeAt(8));
									return new m(new w(S, I, T, P / 255));
								}
								if (v === 4) {
									const S = y($.charCodeAt(1)),
										I = y($.charCodeAt(2)),
										T = y($.charCodeAt(3));
									return new m(new w(16 * S + S, 16 * I + I, 16 * T + T));
								}
								if (v === 5) {
									const S = y($.charCodeAt(1)),
										I = y($.charCodeAt(2)),
										T = y($.charCodeAt(3)),
										P = y($.charCodeAt(4));
									return new m(
										new w(
											16 * S + S,
											16 * I + I,
											16 * T + T,
											(16 * P + P) / 255,
										),
									);
								}
								return null;
							}
							h.parseHex = l;
							function y($) {
								switch ($) {
									case t.CharCode.Digit0:
										return 0;
									case t.CharCode.Digit1:
										return 1;
									case t.CharCode.Digit2:
										return 2;
									case t.CharCode.Digit3:
										return 3;
									case t.CharCode.Digit4:
										return 4;
									case t.CharCode.Digit5:
										return 5;
									case t.CharCode.Digit6:
										return 6;
									case t.CharCode.Digit7:
										return 7;
									case t.CharCode.Digit8:
										return 8;
									case t.CharCode.Digit9:
										return 9;
									case t.CharCode.a:
										return 10;
									case t.CharCode.A:
										return 10;
									case t.CharCode.b:
										return 11;
									case t.CharCode.B:
										return 11;
									case t.CharCode.c:
										return 12;
									case t.CharCode.C:
										return 12;
									case t.CharCode.d:
										return 13;
									case t.CharCode.D:
										return 13;
									case t.CharCode.e:
										return 14;
									case t.CharCode.E:
										return 14;
									case t.CharCode.f:
										return 15;
									case t.CharCode.F:
										return 15;
								}
								return 0;
							}
						})((a = u.CSS || (u.CSS = {})));
					})((r = m.Format || (m.Format = {})));
				})(d || (e.$UL = d = {}));
		}),
		