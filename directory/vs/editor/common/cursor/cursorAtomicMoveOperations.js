import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/charCode.js';
import '../core/cursorColumns.js';
define(de[1528], he([1, 0, 120, 435]), function (ce /*require*/,
 e /*exports*/,
 t /*charCode*/,
 i /*cursorColumns*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Btb = e.Direction = void 0);
			var w;
			(function (C) {
				(C[(C.Left = 0)] = "Left"),
					(C[(C.Right = 1)] = "Right"),
					(C[(C.Nearest = 2)] = "Nearest");
			})(w || (e.Direction = w = {}));
			class E {
				static whitespaceVisibleColumn(d, m, r) {
					const u = d.length;
					let a = 0,
						h = -1,
						c = -1;
					for (let n = 0; n < u; n++) {
						if (n === m) return [h, c, a];
						switch ((a % r === 0 && ((h = n), (c = a)), d.charCodeAt(n))) {
							case t.CharCode.Space:
								a += 1;
								break;
							case t.CharCode.Tab:
								a = i.$BM.nextRenderTabStop(a, r);
								break;
							default:
								return [-1, -1, -1];
						}
					}
					return m === u ? [h, c, a] : [-1, -1, -1];
				}
				static atomicPosition(d, m, r, u) {
					const a = d.length,
						[h, c, n] = E.whitespaceVisibleColumn(d, m, r);
					if (n === -1) return -1;
					let g;
					switch (u) {
						case w.Left:
							g = !0;
							break;
						case w.Right:
							g = !1;
							break;
						case w.Nearest:
							if (n % r === 0) return m;
							g = n % r <= r / 2;
							break;
					}
					if (g) {
						if (h === -1) return -1;
						let f = c;
						for (let b = h; b < a; ++b) {
							if (f === c + r) return h;
							switch (d.charCodeAt(b)) {
								case t.CharCode.Space:
									f += 1;
									break;
								case t.CharCode.Tab:
									f = i.$BM.nextRenderTabStop(f, r);
									break;
								default:
									return -1;
							}
						}
						return f === c + r ? h : -1;
					}
					const p = i.$BM.nextRenderTabStop(n, r);
					let o = n;
					for (let f = m; f < a; f++) {
						if (o === p) return f;
						switch (d.charCodeAt(f)) {
							case t.CharCode.Space:
								o += 1;
								break;
							case t.CharCode.Tab:
								o = i.$BM.nextRenderTabStop(o, r);
								break;
							default:
								return -1;
						}
					}
					return o === p ? a : -1;
				}
			}
			e.$Btb = E;
		}),
		