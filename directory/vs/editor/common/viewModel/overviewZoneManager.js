import '../../../../require.js';
import '../../../../exports.js';
define(de[1546], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$9sb = e.$8sb = e.$7sb = void 0);
			var t;
			(function (C) {
				C[(C.MINIMUM_HEIGHT = 4)] = "MINIMUM_HEIGHT";
			})(t || (t = {}));
			class i {
				constructor(d, m, r) {
					(this._colorZoneBrand = void 0),
						(this.from = d | 0),
						(this.to = m | 0),
						(this.colorId = r | 0);
				}
				static compare(d, m) {
					return d.colorId === m.colorId
						? d.from === m.from
							? d.to - m.to
							: d.from - m.from
						: d.colorId - m.colorId;
				}
			}
			e.$7sb = i;
			class w {
				constructor(d, m, r, u) {
					(this._overviewRulerZoneBrand = void 0),
						(this.startLineNumber = d),
						(this.endLineNumber = m),
						(this.heightInLines = r),
						(this.color = u),
						(this.c = null);
				}
				static compare(d, m) {
					return d.color === m.color
						? d.startLineNumber === m.startLineNumber
							? d.heightInLines === m.heightInLines
								? d.endLineNumber - m.endLineNumber
								: d.heightInLines - m.heightInLines
							: d.startLineNumber - m.startLineNumber
						: d.color < m.color
							? -1
							: 1;
				}
				setColorZone(d) {
					this.c = d;
				}
				getColorZones() {
					return this.c;
				}
			}
			e.$8sb = w;
			class E {
				constructor(d) {
					(this.c = d),
						(this.d = []),
						(this.e = !1),
						(this.f = 0),
						(this.g = 0),
						(this.h = 0),
						(this.j = 0),
						(this.k = 1),
						(this.l = 0),
						(this.m = Object.create(null)),
						(this.n = []);
				}
				getId2Color() {
					return this.n;
				}
				setZones(d) {
					(this.d = d), this.d.sort(w.compare);
				}
				setLineHeight(d) {
					return this.f === d ? !1 : ((this.f = d), (this.e = !0), !0);
				}
				setPixelRatio(d) {
					(this.k = d), (this.e = !0);
				}
				getDOMWidth() {
					return this.g;
				}
				getCanvasWidth() {
					return this.g * this.k;
				}
				setDOMWidth(d) {
					return this.g === d ? !1 : ((this.g = d), (this.e = !0), !0);
				}
				getDOMHeight() {
					return this.h;
				}
				getCanvasHeight() {
					return this.h * this.k;
				}
				setDOMHeight(d) {
					return this.h === d ? !1 : ((this.h = d), (this.e = !0), !0);
				}
				getOuterHeight() {
					return this.j;
				}
				setOuterHeight(d) {
					return this.j === d ? !1 : ((this.j = d), (this.e = !0), !0);
				}
				resolveColorZones() {
					const d = this.e,
						m = Math.floor(this.f),
						r = Math.floor(this.getCanvasHeight()),
						u = Math.floor(this.j),
						a = r / u,
						h = Math.floor((t.MINIMUM_HEIGHT * this.k) / 2),
						c = [];
					for (let n = 0, g = this.d.length; n < g; n++) {
						const p = this.d[n];
						if (!d) {
							const I = p.getColorZones();
							if (I) {
								c.push(I);
								continue;
							}
						}
						const o = this.c(p.startLineNumber),
							f =
								p.heightInLines === 0
									? this.c(p.endLineNumber) + m
									: o + p.heightInLines * m,
							b = Math.floor(a * o),
							s = Math.floor(a * f);
						let l = Math.floor((b + s) / 2),
							y = s - l;
						y < h && (y = h), l - y < 0 && (l = y), l + y > r && (l = r - y);
						const $ = p.color;
						let v = this.m[$];
						v || ((v = ++this.l), (this.m[$] = v), (this.n[v] = $));
						const S = new i(l - y, l + y, v);
						p.setColorZone(S), c.push(S);
					}
					return (this.e = !1), c.sort(i.compare), c;
				}
			}
			e.$9sb = E;
		})
