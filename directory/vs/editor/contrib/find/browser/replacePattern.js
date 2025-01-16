define(de[1550], he([1, 0, 120, 1507]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$01b = e.$91b = void 0),
				(e.$$1b = u);
			var w;
			(function (a) {
				(a[(a.StaticValue = 0)] = "StaticValue"),
					(a[(a.DynamicPieces = 1)] = "DynamicPieces");
			})(w || (w = {}));
			class E {
				constructor(h) {
					(this.staticValue = h), (this.kind = w.StaticValue);
				}
			}
			class C {
				constructor(h) {
					(this.pieces = h), (this.kind = w.DynamicPieces);
				}
			}
			class d {
				static fromStaticValue(h) {
					return new d([m.staticValue(h)]);
				}
				get hasReplacementPatterns() {
					return this.a.kind === w.DynamicPieces;
				}
				constructor(h) {
					!h || h.length === 0
						? (this.a = new E(""))
						: h.length === 1 && h[0].staticValue !== null
							? (this.a = new E(h[0].staticValue))
							: (this.a = new C(h));
				}
				buildReplaceString(h, c) {
					if (this.a.kind === w.StaticValue)
						return c ? (0, i.$7pb)(h, this.a.staticValue) : this.a.staticValue;
					let n = "";
					for (let g = 0, p = this.a.pieces.length; g < p; g++) {
						const o = this.a.pieces[g];
						if (o.staticValue !== null) {
							n += o.staticValue;
							continue;
						}
						let f = d.b(o.matchIndex, h);
						if (o.caseOps !== null && o.caseOps.length > 0) {
							const b = [],
								s = o.caseOps.length;
							let l = 0;
							for (let y = 0, $ = f.length; y < $; y++) {
								if (l >= s) {
									b.push(f.slice(y));
									break;
								}
								switch (o.caseOps[l]) {
									case "U":
										b.push(f[y].toUpperCase());
										break;
									case "u":
										b.push(f[y].toUpperCase()), l++;
										break;
									case "L":
										b.push(f[y].toLowerCase());
										break;
									case "l":
										b.push(f[y].toLowerCase()), l++;
										break;
									default:
										b.push(f[y]);
								}
							}
							f = b.join("");
						}
						n += f;
					}
					return n;
				}
				static b(h, c) {
					if (c === null) return "";
					if (h === 0) return c[0];
					let n = "";
					for (; h > 0; ) {
						if (h < c.length) return (c[h] || "") + n;
						(n = String(h % 10) + n), (h = Math.floor(h / 10));
					}
					return "$" + n;
				}
			}
			e.$91b = d;
			class m {
				static staticValue(h) {
					return new m(h, -1, null);
				}
				static matchIndex(h) {
					return new m(null, h, null);
				}
				static caseOps(h, c) {
					return new m(null, h, c);
				}
				constructor(h, c, n) {
					(this.staticValue = h),
						(this.matchIndex = c),
						!n || n.length === 0
							? (this.caseOps = null)
							: (this.caseOps = n.slice(0));
				}
			}
			e.$01b = m;
			class r {
				constructor(h) {
					(this.a = h),
						(this.b = 0),
						(this.c = []),
						(this.d = 0),
						(this.e = "");
				}
				emitUnchanged(h) {
					this.f(this.a.substring(this.b, h)), (this.b = h);
				}
				emitStatic(h, c) {
					this.f(h), (this.b = c);
				}
				f(h) {
					h.length !== 0 && (this.e += h);
				}
				emitMatchIndex(h, c, n) {
					this.e.length !== 0 &&
						((this.c[this.d++] = m.staticValue(this.e)), (this.e = "")),
						(this.c[this.d++] = m.caseOps(h, n)),
						(this.b = c);
				}
				finalize() {
					return (
						this.emitUnchanged(this.a.length),
						this.e.length !== 0 &&
							((this.c[this.d++] = m.staticValue(this.e)), (this.e = "")),
						new d(this.c)
					);
				}
			}
			function u(a) {
				if (!a || a.length === 0) return new d(null);
				const h = [],
					c = new r(a);
				for (let n = 0, g = a.length; n < g; n++) {
					const p = a.charCodeAt(n);
					if (p === t.CharCode.Backslash) {
						if ((n++, n >= g)) break;
						const o = a.charCodeAt(n);
						switch (o) {
							case t.CharCode.Backslash:
								c.emitUnchanged(n - 1), c.emitStatic("\\", n + 1);
								break;
							case t.CharCode.n:
								c.emitUnchanged(n - 1),
									c.emitStatic(
										`
`,
										n + 1,
									);
								break;
							case t.CharCode.t:
								c.emitUnchanged(n - 1), c.emitStatic("	", n + 1);
								break;
							case t.CharCode.u:
							case t.CharCode.U:
							case t.CharCode.l:
							case t.CharCode.L:
								c.emitUnchanged(n - 1),
									c.emitStatic("", n + 1),
									h.push(String.fromCharCode(o));
								break;
						}
						continue;
					}
					if (p === t.CharCode.DollarSign) {
						if ((n++, n >= g)) break;
						const o = a.charCodeAt(n);
						if (o === t.CharCode.DollarSign) {
							c.emitUnchanged(n - 1), c.emitStatic("$", n + 1);
							continue;
						}
						if (o === t.CharCode.Digit0 || o === t.CharCode.Ampersand) {
							c.emitUnchanged(n - 1),
								c.emitMatchIndex(0, n + 1, h),
								(h.length = 0);
							continue;
						}
						if (t.CharCode.Digit1 <= o && o <= t.CharCode.Digit9) {
							let f = o - t.CharCode.Digit0;
							if (n + 1 < g) {
								const b = a.charCodeAt(n + 1);
								if (t.CharCode.Digit0 <= b && b <= t.CharCode.Digit9) {
									n++,
										(f = f * 10 + (b - t.CharCode.Digit0)),
										c.emitUnchanged(n - 2),
										c.emitMatchIndex(f, n + 1, h),
										(h.length = 0);
									continue;
								}
							}
							c.emitUnchanged(n - 1),
								c.emitMatchIndex(f, n + 1, h),
								(h.length = 0);
							continue;
						}
					}
				}
				return c.finalize();
			}
		}),
		