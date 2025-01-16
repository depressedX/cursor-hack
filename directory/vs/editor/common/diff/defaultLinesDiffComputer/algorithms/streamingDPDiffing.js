define(de[2553], he([1, 0, 289, 656, 911]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$mxb = void 0);
			class E {
				compute(d, m, r = i.$0wb.instance, u) {
					if (d.length === 0 || m.length === 0) return i.$7wb.trivial(d, m);
					const a = new w.$_wb(2 * d.length + 1, m.length + 1),
						h = new w.$_wb(2 * d.length + 1, m.length + 1);
					for (let b = 0; b <= m.length; b++)
						a.set(0, b, b), b > 0 ? h.set(0, b, !0) : h.set(0, b, !1);
					for (let b = 0; b <= 2 * d.length; b++)
						a.set(b, 0, Math.floor((b + 1) / 2)), h.set(b, 0, !1);
					for (let b = 1; b <= m.length; b++)
						for (let s = 1; s <= 2 * d.length; s++) {
							if (!r.isValid()) return i.$7wb.trivialTimedOut(d, m);
							if (s % 2 === 0) {
								const l = a.get(s, b - 1) + 1,
									y = a.get(s - 1, b);
								l < y
									? (a.set(s, b, l), h.set(s, b, !0))
									: (a.set(s, b, y), h.set(s, b, !1));
							} else {
								const l = a.get(s - 1, b) + 0.4,
									y =
										d.getElement(Math.floor(s / 2)) === m.getElement(b - 1)
											? a.get(s - 1, b - 1)
											: Number.MAX_VALUE;
								y < l
									? (a.set(s, b, y), h.set(s, b, !0))
									: (a.set(s, b, l), h.set(s, b, !1));
							}
						}
					let c = Number.MAX_VALUE,
						n = -1;
					for (let b = 0; b <= 2 * d.length; b++) {
						const s = a.get(b, m.length);
						s < c && ((c = s), (n = b));
					}
					let g = [],
						p = n,
						o = m.length;
					p <= 2 * d.length - 2 &&
						g.push(
							new i.$8wb(
								new t.$pL(Math.floor((p + 1) / 2), d.length),
								new t.$pL(o, o),
							),
						);
					let f;
					for (; p >= 0 && o >= 0; )
						h.get(p, o)
							? p % 2 === 0
								? (f === void 0 && (f = { x: Math.floor(p / 2), y: o }),
									(o -= 1))
								: (f !== void 0 &&
										((f.x !== Math.floor(p / 2) + 1 || f.y !== o) &&
											g.push(
												new i.$8wb(
													new t.$pL(Math.floor(p / 2) + 1, f.x),
													new t.$pL(o, f.y),
												),
											),
										(f = void 0)),
									(p -= 1),
									(o -= 1))
							: (p % 2,
								f === void 0 && (f = { x: Math.floor((p + 1) / 2), y: o }),
								(p -= 1));
					return (
						f !== void 0 &&
							((f.x !== Math.floor(p / 2) + 1 || f.y !== o) &&
								g.push(
									new i.$8wb(
										new t.$pL(Math.floor(p / 2) + 1, f.x),
										new t.$pL(o, f.y),
									),
								),
							(f = void 0)),
						g.reverse(),
						new i.$7wb(g, !1)
					);
				}
			}
			e.$mxb = E;
		}),
		