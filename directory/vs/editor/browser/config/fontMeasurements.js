define(
			de[600],
			he([1, 0, 7, 345, 6, 3, 2542, 38, 463]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$osb = e.$nsb = void 0);
				class r extends E.$1c {
					constructor() {
						super(...arguments),
							(this.a = new Map()),
							(this.b = -1),
							(this.c = this.D(new w.$re())),
							(this.onDidChange = this.c.event);
					}
					dispose() {
						this.b !== -1 && (clearTimeout(this.b), (this.b = -1)),
							super.dispose();
					}
					clearAllFontInfos() {
						this.a.clear(), this.c.fire();
					}
					f(h) {
						const c = (0, t.getWindowId)(h);
						let n = this.a.get(c);
						return n || ((n = new u()), this.a.set(c, n)), n;
					}
					g(h, c, n) {
						this.f(h).put(c, n),
							!n.isTrusted &&
								this.b === -1 &&
								(this.b = h.setTimeout(() => {
									(this.b = -1), this.h(h);
								}, 5e3));
					}
					h(h) {
						const c = this.f(h),
							n = c.getValues();
						let g = !1;
						for (const p of n) p.isTrusted || ((g = !0), c.remove(p));
						g && this.c.fire();
					}
					serializeFontInfo(h) {
						return this.f(h)
							.getValues()
							.filter((n) => n.isTrusted);
					}
					restoreFontInfo(h, c) {
						for (const n of c) {
							if (n.version !== m.$PK) continue;
							const g = new m.$QK(n, !1);
							this.g(h, g, g);
						}
					}
					readFontInfo(h, c) {
						const n = this.f(h);
						if (!n.has(c)) {
							let g = this.m(h, c);
							(g.typicalHalfwidthCharacterWidth <= 2 ||
								g.typicalFullwidthCharacterWidth <= 2 ||
								g.spaceWidth <= 2 ||
								g.maxDigitWidth <= 2) &&
								(g = new m.$QK(
									{
										pixelRatio: i.$sjb.getInstance(h).value,
										fontFamily: g.fontFamily,
										fontWeight: g.fontWeight,
										fontSize: g.fontSize,
										fontFeatureSettings: g.fontFeatureSettings,
										fontVariationSettings: g.fontVariationSettings,
										lineHeight: g.lineHeight,
										letterSpacing: g.letterSpacing,
										isMonospace: g.isMonospace,
										typicalHalfwidthCharacterWidth: Math.max(
											g.typicalHalfwidthCharacterWidth,
											5,
										),
										typicalFullwidthCharacterWidth: Math.max(
											g.typicalFullwidthCharacterWidth,
											5,
										),
										canUseHalfwidthRightwardsArrow:
											g.canUseHalfwidthRightwardsArrow,
										spaceWidth: Math.max(g.spaceWidth, 5),
										middotWidth: Math.max(g.middotWidth, 5),
										wsmiddotWidth: Math.max(g.wsmiddotWidth, 5),
										maxDigitWidth: Math.max(g.maxDigitWidth, 5),
									},
									!1,
								)),
								this.g(h, c, g);
						}
						return n.get(c);
					}
					j(h, c, n, g) {
						const p = new C.$lsb(h, c);
						return n.push(p), g?.push(p), p;
					}
					m(h, c) {
						const n = [],
							g = [],
							p = this.j("n", C.CharWidthRequestType.Regular, n, g),
							o = this.j("\uFF4D", C.CharWidthRequestType.Regular, n, null),
							f = this.j(" ", C.CharWidthRequestType.Regular, n, g),
							b = this.j("0", C.CharWidthRequestType.Regular, n, g),
							s = this.j("1", C.CharWidthRequestType.Regular, n, g),
							l = this.j("2", C.CharWidthRequestType.Regular, n, g),
							y = this.j("3", C.CharWidthRequestType.Regular, n, g),
							$ = this.j("4", C.CharWidthRequestType.Regular, n, g),
							v = this.j("5", C.CharWidthRequestType.Regular, n, g),
							S = this.j("6", C.CharWidthRequestType.Regular, n, g),
							I = this.j("7", C.CharWidthRequestType.Regular, n, g),
							T = this.j("8", C.CharWidthRequestType.Regular, n, g),
							P = this.j("9", C.CharWidthRequestType.Regular, n, g),
							k = this.j("\u2192", C.CharWidthRequestType.Regular, n, g),
							L = this.j("\uFFEB", C.CharWidthRequestType.Regular, n, null),
							D = this.j("\xB7", C.CharWidthRequestType.Regular, n, g),
							M = this.j("\u2E31", C.CharWidthRequestType.Regular, n, null),
							N = "|/-_ilm%";
						for (let U = 0, z = N.length; U < z; U++)
							this.j(N.charAt(U), C.CharWidthRequestType.Regular, n, g),
								this.j(N.charAt(U), C.CharWidthRequestType.Italic, n, g),
								this.j(N.charAt(U), C.CharWidthRequestType.Bold, n, g);
						(0, C.$msb)(h, c, n);
						const A = Math.max(
							b.width,
							s.width,
							l.width,
							y.width,
							$.width,
							v.width,
							S.width,
							I.width,
							T.width,
							P.width,
						);
						let R = c.fontFeatureSettings === d.EditorFontLigatures.OFF;
						const O = g[0].width;
						for (let U = 1, z = g.length; R && U < z; U++) {
							const F = O - g[U].width;
							if (F < -0.001 || F > 0.001) {
								R = !1;
								break;
							}
						}
						let B = !0;
						return (
							R && L.width !== O && (B = !1),
							L.width > k.width && (B = !1),
							new m.$QK(
								{
									pixelRatio: i.$sjb.getInstance(h).value,
									fontFamily: c.fontFamily,
									fontWeight: c.fontWeight,
									fontSize: c.fontSize,
									fontFeatureSettings: c.fontFeatureSettings,
									fontVariationSettings: c.fontVariationSettings,
									lineHeight: c.lineHeight,
									letterSpacing: c.letterSpacing,
									isMonospace: R,
									typicalHalfwidthCharacterWidth: p.width,
									typicalFullwidthCharacterWidth: o.width,
									canUseHalfwidthRightwardsArrow: B,
									spaceWidth: f.width,
									middotWidth: D.width,
									wsmiddotWidth: M.width,
									maxDigitWidth: A,
								},
								!0,
							)
						);
					}
				}
				e.$nsb = r;
				class u {
					constructor() {
						(this.a = Object.create(null)), (this.b = Object.create(null));
					}
					has(h) {
						const c = h.getId();
						return !!this.b[c];
					}
					get(h) {
						const c = h.getId();
						return this.b[c];
					}
					put(h, c) {
						const n = h.getId();
						(this.a[n] = h), (this.b[n] = c);
					}
					remove(h) {
						const c = h.getId();
						delete this.a[c], delete this.b[c];
					}
					getValues() {
						return Object.keys(this.a).map((h) => this.b[h]);
					}
				}
				e.$osb = new r();
			},
		),
		