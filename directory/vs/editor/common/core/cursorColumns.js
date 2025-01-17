import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/charCode.js';
import '../../../base/common/strings.js';
define(de[435], he([1, 0, 120, 37]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$BM = void 0),
				(i = mt(i));
			class w {
				static a(C, d, m) {
					return C === t.CharCode.Tab
						? w.nextRenderTabStop(d, m)
						: i.$5f(C) || i.$6f(C)
							? d + 2
							: d + 1;
				}
				static visibleColumnFromColumn(C, d, m) {
					const r = Math.min(d - 1, C.length),
						u = C.substring(0, r),
						a = new i.$Vf(u);
					let h = 0;
					for (; !a.eol(); ) {
						const c = i.$Tf(u, r, a.offset);
						a.nextGraphemeLength(), (h = this.a(c, h, m));
					}
					return h;
				}
				static toStatusbarColumn(C, d, m) {
					const r = C.substring(0, Math.min(d - 1, C.length)),
						u = new i.$Uf(r);
					let a = 0;
					for (; !u.eol(); )
						u.nextCodePoint() === t.CharCode.Tab
							? (a = w.nextRenderTabStop(a, m))
							: (a = a + 1);
					return a + 1;
				}
				static columnFromVisibleColumn(C, d, m) {
					if (d <= 0) return 1;
					const r = C.length,
						u = new i.$Vf(C);
					let a = 0,
						h = 1;
					for (; !u.eol(); ) {
						const c = i.$Tf(C, r, u.offset);
						u.nextGraphemeLength();
						const n = this.a(c, a, m),
							g = u.offset + 1;
						if (n >= d) {
							const p = d - a;
							return n - d < p ? g : h;
						}
						(a = n), (h = g);
					}
					return r + 1;
				}
				static nextRenderTabStop(C, d) {
					return C + d - (C % d);
				}
				static nextIndentTabStop(C, d) {
					return C + d - (C % d);
				}
				static prevRenderTabStop(C, d) {
					return Math.max(0, C - 1 - ((C - 1) % d));
				}
				static prevIndentTabStop(C, d) {
					return Math.max(0, C - 1 - ((C - 1) % d));
				}
			}
			e.$BM = w;
		}),
		