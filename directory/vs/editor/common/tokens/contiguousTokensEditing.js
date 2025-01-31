import '../../../../require.js';
import '../../../../exports.js';
import './lineTokens.js';
define(de[1544], he([1, 0, 388]), function (ce /*require*/,
 e /*exports*/,
 t /*lineTokens*/) {
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
		})
