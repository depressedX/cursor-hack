import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/linkedList.js';
import '../../../common/core/position.js';
import '../../../common/core/range.js';
define(de[1556], he([1, 0, 273, 48, 17]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$RCb = void 0);
			class E {
				async provideSelectionRanges(d, m) {
					const r = [];
					for (const u of m) {
						const a = [];
						r.push(a);
						const h = new Map();
						await new Promise((c) => E.b(c, 0, d, u, h)),
							await new Promise((c) => E.c(c, 0, d, u, h, a));
					}
					return r;
				}
				static {
					this._maxDuration = 30;
				}
				static {
					this.a = 2;
				}
				static b(d, m, r, u, a) {
					const h = new Map(),
						c = Date.now();
					for (;;) {
						if (m >= E.a) {
							d();
							break;
						}
						if (!u) {
							d();
							break;
						}
						const n = r.bracketPairs.findNextBracket(u);
						if (!n) {
							d();
							break;
						}
						if (Date.now() - c > E._maxDuration) {
							setTimeout(() => E.b(d, m + 1, r, u, a));
							break;
						}
						if (n.bracketInfo.isOpeningBracket) {
							const p = n.bracketInfo.bracketText,
								o = h.has(p) ? h.get(p) : 0;
							h.set(p, o + 1);
						} else {
							const p = n.bracketInfo.getOpeningBrackets()[0].bracketText;
							let o = h.has(p) ? h.get(p) : 0;
							if (((o -= 1), h.set(p, Math.max(0, o)), o < 0)) {
								let f = a.get(p);
								f || ((f = new t.$$c()), a.set(p, f)), f.push(n.range);
							}
						}
						u = n.range.getEndPosition();
					}
				}
				static c(d, m, r, u, a, h) {
					const c = new Map(),
						n = Date.now();
					for (;;) {
						if (m >= E.a && a.size === 0) {
							d();
							break;
						}
						if (!u) {
							d();
							break;
						}
						const g = r.bracketPairs.findPrevBracket(u);
						if (!g) {
							d();
							break;
						}
						if (Date.now() - n > E._maxDuration) {
							setTimeout(() => E.c(d, m + 1, r, u, a, h));
							break;
						}
						if (g.bracketInfo.isOpeningBracket) {
							const o = g.bracketInfo.bracketText;
							let f = c.has(o) ? c.get(o) : 0;
							if (((f -= 1), c.set(o, Math.max(0, f)), f < 0)) {
								const b = a.get(o);
								if (b) {
									const s = b.shift();
									b.size === 0 && a.delete(o);
									const l = w.$iL.fromPositions(
											g.range.getEndPosition(),
											s.getStartPosition(),
										),
										y = w.$iL.fromPositions(
											g.range.getStartPosition(),
											s.getEndPosition(),
										);
									h.push({ range: l }), h.push({ range: y }), E.e(r, y, h);
								}
							}
						} else {
							const o = g.bracketInfo.getOpeningBrackets()[0].bracketText,
								f = c.has(o) ? c.get(o) : 0;
							c.set(o, f + 1);
						}
						u = g.range.getStartPosition();
					}
				}
				static e(d, m, r) {
					if (m.startLineNumber === m.endLineNumber) return;
					const u = m.startLineNumber,
						a = d.getLineFirstNonWhitespaceColumn(u);
					a !== 0 &&
						a !== m.startColumn &&
						(r.push({
							range: w.$iL.fromPositions(new i.$hL(u, a), m.getEndPosition()),
						}),
						r.push({
							range: w.$iL.fromPositions(new i.$hL(u, 1), m.getEndPosition()),
						}));
					const h = u - 1;
					if (h > 0) {
						const c = d.getLineFirstNonWhitespaceColumn(h);
						c === m.startColumn &&
							c !== d.getLineLastNonWhitespaceColumn(h) &&
							(r.push({
								range: w.$iL.fromPositions(new i.$hL(h, c), m.getEndPosition()),
							}),
							r.push({
								range: w.$iL.fromPositions(new i.$hL(h, 1), m.getEndPosition()),
							}));
					}
				}
			}
			e.$RCb = E;
		}),
		