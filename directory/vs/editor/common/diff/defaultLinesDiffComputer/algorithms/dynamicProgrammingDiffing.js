import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../core/offsetRange.js';
import './diffAlgorithm.js';
import '../utils.js';
define(de[2552], he([1, 0, 289, 656, 911]), function (ce /*require*/,
 e /*exports*/,
 t /*offsetRange*/,
 i /*diffAlgorithm*/,
 w /*utils*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$cxb = void 0);
			class E {
				compute(d, m, r = i.$0wb.instance, u) {
					if (d.length === 0 || m.length === 0) return i.$7wb.trivial(d, m);
					const a = new w.$_wb(d.length, m.length),
						h = new w.$_wb(d.length, m.length),
						c = new w.$_wb(d.length, m.length);
					for (let s = 0; s < d.length; s++)
						for (let l = 0; l < m.length; l++) {
							if (!r.isValid()) return i.$7wb.trivialTimedOut(d, m);
							const y = s === 0 ? 0 : a.get(s - 1, l),
								$ = l === 0 ? 0 : a.get(s, l - 1);
							let v;
							d.getElement(s) === m.getElement(l)
								? (s === 0 || l === 0 ? (v = 0) : (v = a.get(s - 1, l - 1)),
									s > 0 &&
										l > 0 &&
										h.get(s - 1, l - 1) === 3 &&
										(v += c.get(s - 1, l - 1)),
									(v += u ? u(s, l) : 1))
								: (v = -1);
							const S = Math.max(y, $, v);
							if (S === v) {
								const I = s > 0 && l > 0 ? c.get(s - 1, l - 1) : 0;
								c.set(s, l, I + 1), h.set(s, l, 3);
							} else
								S === y
									? (c.set(s, l, 0), h.set(s, l, 1))
									: S === $ && (c.set(s, l, 0), h.set(s, l, 2));
							a.set(s, l, S);
						}
					const n = [];
					let g = d.length,
						p = m.length;
					function o(s, l) {
						(s + 1 !== g || l + 1 !== p) &&
							n.push(new i.$8wb(new t.$pL(s + 1, g), new t.$pL(l + 1, p))),
							(g = s),
							(p = l);
					}
					let f = d.length - 1,
						b = m.length - 1;
					for (; f >= 0 && b >= 0; )
						h.get(f, b) === 3
							? (o(f, b), f--, b--)
							: h.get(f, b) === 1
								? f--
								: b--;
					return o(-1, -1), n.reverse(), new i.$7wb(n, !1);
				}
			}
			e.$cxb = E;
		}),
		