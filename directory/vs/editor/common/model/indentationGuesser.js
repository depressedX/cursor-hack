define(de[2566], he([1, 0, 120]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$EU = E);
			class i {
				constructor() {
					(this.spacesDiff = 0), (this.looksLikeAlignment = !1);
				}
			}
			function w(C, d, m, r, u) {
				(u.spacesDiff = 0), (u.looksLikeAlignment = !1);
				let a;
				for (a = 0; a < d && a < r; a++) {
					const f = C.charCodeAt(a),
						b = m.charCodeAt(a);
					if (f !== b) break;
				}
				let h = 0,
					c = 0;
				for (let f = a; f < d; f++)
					C.charCodeAt(f) === t.CharCode.Space ? h++ : c++;
				let n = 0,
					g = 0;
				for (let f = a; f < r; f++)
					m.charCodeAt(f) === t.CharCode.Space ? n++ : g++;
				if ((h > 0 && c > 0) || (n > 0 && g > 0)) return;
				const p = Math.abs(c - g),
					o = Math.abs(h - n);
				if (p === 0) {
					(u.spacesDiff = o),
						o > 0 &&
							0 <= n - 1 &&
							n - 1 < C.length &&
							n < m.length &&
							m.charCodeAt(n) !== t.CharCode.Space &&
							C.charCodeAt(n - 1) === t.CharCode.Space &&
							C.charCodeAt(C.length - 1) === t.CharCode.Comma &&
							(u.looksLikeAlignment = !0);
					return;
				}
				if (o % p === 0) {
					u.spacesDiff = o / p;
					return;
				}
			}
			function E(C, d, m) {
				const r = Math.min(C.getLineCount(), 1e4);
				let u = 0,
					a = 0,
					h = "",
					c = 0;
				const n = [2, 4, 6, 8, 3, 5, 7],
					g = 8,
					p = [0, 0, 0, 0, 0, 0, 0, 0, 0],
					o = new i();
				for (let s = 1; s <= r; s++) {
					const l = C.getLineLength(s),
						y = C.getLineContent(s),
						$ = l <= 65536;
					let v = !1,
						S = 0,
						I = 0,
						T = 0;
					for (let k = 0, L = l; k < L; k++) {
						const D = $ ? y.charCodeAt(k) : C.getLineCharCode(s, k);
						if (D === t.CharCode.Tab) T++;
						else if (D === t.CharCode.Space) I++;
						else {
							(v = !0), (S = k);
							break;
						}
					}
					if (
						!v ||
						(T > 0 ? u++ : I > 1 && a++,
						w(h, c, y, S, o),
						o.looksLikeAlignment && !(m && d === o.spacesDiff))
					)
						continue;
					const P = o.spacesDiff;
					P <= g && p[P]++, (h = y), (c = S);
				}
				let f = m;
				u !== a && (f = u < a);
				let b = d;
				if (f) {
					let s = f ? 0 : 0.1 * r;
					n.forEach((l) => {
						const y = p[l];
						y > s && ((s = y), (b = l));
					}),
						b === 4 && p[4] > 0 && p[2] > 0 && p[2] >= p[4] / 2 && (b = 2);
				}
				return { insertSpaces: f, tabSize: b };
			}
		}),
		