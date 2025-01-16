define(
			de[1148],
			he([1, 0, 37, 188, 17, 171]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Pic = void 0),
					(e.$Qic = d),
					(t = mt(t));
				class C {
					constructor(r, u, a) {
						(this.c = r), (this.e = u), (this.d = null), (this.f = a);
					}
					getEditOperations(r, u) {
						const a = d(r, this.e, this.f);
						for (let h = 0, c = a.length; h < c; h++) {
							const n = a[h];
							u.addEditOperation(n.range, n.text);
						}
						this.d = u.trackSelection(this.c);
					}
					computeCursorState(r, u) {
						return u.getTrackedSelection(this.d);
					}
				}
				e.$Pic = C;
				function d(m, r, u) {
					r.sort((g, p) =>
						g.lineNumber === p.lineNumber
							? g.column - p.column
							: g.lineNumber - p.lineNumber,
					);
					for (let g = r.length - 2; g >= 0; g--)
						r[g].lineNumber === r[g + 1].lineNumber && r.splice(g, 1);
					const a = [];
					let h = 0,
						c = 0;
					const n = r.length;
					for (let g = 1, p = m.getLineCount(); g <= p; g++) {
						const o = m.getLineContent(g),
							f = o.length + 1;
						let b = 0;
						if (
							(c < n &&
								r[c].lineNumber === g &&
								((b = r[c].column), c++, b === f)) ||
							o.length === 0
						)
							continue;
						const s = t.$Df(o);
						let l = 0;
						if (s === -1) l = 1;
						else if (s !== o.length - 1) l = s + 2;
						else continue;
						if (!u) {
							if (!m.tokenization.hasAccurateTokensForLine(g)) continue;
							const y = m.tokenization.getLineTokens(g),
								$ = y.getStandardTokenType(y.findTokenIndexAtOffset(l));
							if (
								$ === E.StandardTokenType.String ||
								$ === E.StandardTokenType.RegEx
							)
								continue;
						}
						(l = Math.max(b, l)),
							(a[h++] = i.$jL.delete(new w.$iL(g, l, g, f)));
					}
					return a;
				}
			},
		),
		