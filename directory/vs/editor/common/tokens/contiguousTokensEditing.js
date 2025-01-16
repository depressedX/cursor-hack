define(de[1544], he([1, 0, 388]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$0L = e.$9L = void 0),
				(e.$$L = w),
				(e.$9L = new Uint32Array(0).buffer);
			class i {
				static deleteBeginning(C, d) {
					return C === null || C === e.$9L ? C : i.delete(C, 0, d);
				}
				static deleteEnding(C, d) {
					if (C === null || C === e.$9L) return C;
					const m = w(C),
						r = m[m.length - 2];
					return i.delete(C, d, r);
				}
				static delete(C, d, m) {
					if (C === null || C === e.$9L || d === m) return C;
					const r = w(C),
						u = r.length >>> 1;
					if (d === 0 && r[r.length - 2] === m) return e.$9L;
					const a = t.$7L.findIndexInTokensArray(r, d),
						h = a > 0 ? r[(a - 1) << 1] : 0,
						c = r[a << 1];
					if (m < c) {
						const f = m - d;
						for (let b = a; b < u; b++) r[b << 1] -= f;
						return C;
					}
					let n, g;
					h !== d
						? ((r[a << 1] = d), (n = (a + 1) << 1), (g = d))
						: ((n = a << 1), (g = h));
					const p = m - d;
					for (let f = a + 1; f < u; f++) {
						const b = r[f << 1] - p;
						b > g && ((r[n++] = b), (r[n++] = r[(f << 1) + 1]), (g = b));
					}
					if (n === r.length) return C;
					const o = new Uint32Array(n);
					return o.set(r.subarray(0, n), 0), o.buffer;
				}
				static append(C, d) {
					if (d === e.$9L) return C;
					if (C === e.$9L) return d;
					if (C === null) return C;
					if (d === null) return null;
					const m = w(C),
						r = w(d),
						u = r.length >>> 1,
						a = new Uint32Array(m.length + r.length);
					a.set(m, 0);
					let h = m.length;
					const c = m[m.length - 2];
					for (let n = 0; n < u; n++)
						(a[h++] = r[n << 1] + c), (a[h++] = r[(n << 1) + 1]);
					return a.buffer;
				}
				static insert(C, d, m) {
					if (C === null || C === e.$9L) return C;
					const r = w(C),
						u = r.length >>> 1;
					let a = t.$7L.findIndexInTokensArray(r, d);
					a > 0 && r[(a - 1) << 1] === d && a--;
					for (let h = a; h < u; h++) r[h << 1] += m;
					return C;
				}
			}
			e.$0L = i;
			function w(E) {
				return E instanceof Uint32Array ? E : new Uint32Array(E);
			}
		}),
		define(
			de[2573],
			he([1, 0, 24, 76, 48, 531, 1544, 196]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_L = void 0),
					(t = mt(t));
				class m {
					static deserialize(u, a, h) {
						const c = new Uint32Array(u.buffer),
							n = (0, i.$Xe)(u, a);
						a += 4;
						const g = (0, i.$Xe)(u, a);
						a += 4;
						const p = [];
						for (let o = 0; o < g; o++) {
							const f = (0, i.$Xe)(u, a);
							(a += 4), p.push(c.subarray(a / 4, a / 4 + f / 4)), (a += f);
						}
						return h.push(new m(n, p)), a;
					}
					get startLineNumber() {
						return this.a;
					}
					get endLineNumber() {
						return this.a + this.b.length - 1;
					}
					constructor(u, a) {
						(this.a = u), (this.b = a);
					}
					getLineRange() {
						return new d.$rL(this.a, this.a + this.b.length);
					}
					getLineTokens(u) {
						return this.b[u - this.a];
					}
					appendLineTokens(u) {
						this.b.push(u);
					}
					serializeSize() {
						let u = 0;
						(u += 4), (u += 4);
						for (let a = 0; a < this.b.length; a++) {
							const h = this.b[a];
							if (!(h instanceof Uint32Array))
								throw new Error("Not supported!");
							(u += 4), (u += h.byteLength);
						}
						return u;
					}
					serialize(u, a) {
						(0, i.$Ye)(u, this.a, a),
							(a += 4),
							(0, i.$Ye)(u, this.b.length, a),
							(a += 4);
						for (let h = 0; h < this.b.length; h++) {
							const c = this.b[h];
							if (!(c instanceof Uint32Array))
								throw new Error("Not supported!");
							(0, i.$Ye)(u, c.byteLength, a),
								(a += 4),
								u.set(new Uint8Array(c.buffer), a),
								(a += c.byteLength);
						}
						return a;
					}
					applyEdit(u, a) {
						const [h, c] = (0, E.$6L)(a);
						this.c(u),
							this.d(new w.$hL(u.startLineNumber, u.startColumn), h, c);
					}
					c(u) {
						if (
							u.startLineNumber === u.endLineNumber &&
							u.startColumn === u.endColumn
						)
							return;
						const a = u.startLineNumber - this.a,
							h = u.endLineNumber - this.a;
						if (h < 0) {
							const c = h - a;
							this.a -= c;
							return;
						}
						if (!(a >= this.b.length)) {
							if (a < 0 && h >= this.b.length) {
								(this.a = 0), (this.b = []);
								return;
							}
							if (a === h) {
								this.b[a] = C.$0L.delete(
									this.b[a],
									u.startColumn - 1,
									u.endColumn - 1,
								);
								return;
							}
							if (a >= 0)
								if (
									((this.b[a] = C.$0L.deleteEnding(
										this.b[a],
										u.startColumn - 1,
									)),
									h < this.b.length)
								) {
									const c = C.$0L.deleteBeginning(this.b[h], u.endColumn - 1);
									(this.b[a] = C.$0L.append(this.b[a], c)),
										this.b.splice(a + 1, h - a);
								} else
									(this.b[a] = C.$0L.append(this.b[a], null)),
										(this.b = this.b.slice(0, a + 1));
							else {
								const c = -a;
								(this.a -= c),
									(this.b[h] = C.$0L.deleteBeginning(
										this.b[h],
										u.endColumn - 1,
									)),
									(this.b = this.b.slice(h));
							}
						}
					}
					d(u, a, h) {
						if (a === 0 && h === 0) return;
						const c = u.lineNumber - this.a;
						if (c < 0) {
							this.a += a;
							return;
						}
						if (!(c >= this.b.length)) {
							if (a === 0) {
								this.b[c] = C.$0L.insert(this.b[c], u.column - 1, h);
								return;
							}
							(this.b[c] = C.$0L.deleteEnding(this.b[c], u.column - 1)),
								(this.b[c] = C.$0L.insert(this.b[c], u.column - 1, h)),
								this.e(u.lineNumber, a);
						}
					}
					e(u, a) {
						if (a === 0) return;
						const h = [];
						for (let c = 0; c < a; c++) h[c] = null;
						this.b = t.$Zb(this.b, u, h);
					}
				}
				e.$_L = m;
			},
		),
		