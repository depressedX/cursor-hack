define(de[2590], he([1, 0, 120, 37, 17]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$jPb = void 0);
			class E {
				constructor(d = !0) {
					this.a = d;
				}
				provideSelectionRanges(d, m) {
					const r = [];
					for (const u of m) {
						const a = [];
						r.push(a),
							this.a && this.b(a, d, u),
							this.c(a, d, u),
							this.d(a, d, u),
							a.push({ range: d.getFullModelRange() });
					}
					return r;
				}
				b(d, m, r) {
					const u = m.getWordAtPosition(r);
					if (!u) return;
					const { word: a, startColumn: h } = u,
						c = r.column - h;
					let n = c,
						g = c,
						p = 0;
					for (; n >= 0; n--) {
						const o = a.charCodeAt(n);
						if (
							n !== c &&
							(o === t.CharCode.Underline || o === t.CharCode.Dash)
						)
							break;
						if ((0, i.$Kf)(o) && (0, i.$Lf)(p)) break;
						p = o;
					}
					for (n += 1; g < a.length; g++) {
						const o = a.charCodeAt(g);
						if ((0, i.$Lf)(o) && (0, i.$Kf)(p)) break;
						if (o === t.CharCode.Underline || o === t.CharCode.Dash) break;
						p = o;
					}
					n < g &&
						d.push({
							range: new w.$iL(r.lineNumber, h + n, r.lineNumber, h + g),
						});
				}
				c(d, m, r) {
					const u = m.getWordAtPosition(r);
					u &&
						d.push({
							range: new w.$iL(
								r.lineNumber,
								u.startColumn,
								r.lineNumber,
								u.endColumn,
							),
						});
				}
				d(d, m, r) {
					m.getLineLength(r.lineNumber) > 0 &&
						m.getLineFirstNonWhitespaceColumn(r.lineNumber) === 0 &&
						m.getLineLastNonWhitespaceColumn(r.lineNumber) === 0 &&
						d.push({
							range: new w.$iL(
								r.lineNumber,
								1,
								r.lineNumber,
								m.getLineMaxColumn(r.lineNumber),
							),
						});
				}
			}
			e.$jPb = E;
		}),
		