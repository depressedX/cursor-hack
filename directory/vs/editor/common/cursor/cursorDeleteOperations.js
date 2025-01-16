define(
			de[943],
			he([1, 0, 37, 655, 346, 435, 1192, 17, 48]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Etb = void 0),
					(t = mt(t));
				class r {
					static deleteRight(a, h, c, n) {
						const g = [];
						let p = a !== w.EditOperationType.DeletingRight;
						for (let o = 0, f = n.length; o < f; o++) {
							const b = n[o];
							let s = b;
							if (s.isEmpty()) {
								const l = b.getPosition(),
									y = C.$Dtb.right(h, c, l);
								s = new d.$iL(y.lineNumber, y.column, l.lineNumber, l.column);
							}
							if (s.isEmpty()) {
								g[o] = null;
								continue;
							}
							s.startLineNumber !== s.endLineNumber && (p = !0),
								(g[o] = new i.$wtb(s, ""));
						}
						return [p, g];
					}
					static isAutoClosingPairDelete(a, h, c, n, g, p, o) {
						if ((h === "never" && c === "never") || a === "never") return !1;
						for (let f = 0, b = p.length; f < b; f++) {
							const s = p[f],
								l = s.getPosition();
							if (!s.isEmpty()) return !1;
							const y = g.getLineContent(l.lineNumber);
							if (l.column < 2 || l.column >= y.length + 1) return !1;
							const $ = y.charAt(l.column - 2),
								v = n.get($);
							if (!v) return !1;
							if ((0, w.$Dsb)($)) {
								if (c === "never") return !1;
							} else if (h === "never") return !1;
							const S = y.charAt(l.column - 1);
							let I = !1;
							for (const T of v) T.open === $ && T.close === S && (I = !0);
							if (!I) return !1;
							if (a === "auto") {
								let T = !1;
								for (let P = 0, k = o.length; P < k; P++) {
									const L = o[P];
									if (
										l.lineNumber === L.startLineNumber &&
										l.column === L.startColumn
									) {
										T = !0;
										break;
									}
								}
								if (!T) return !1;
							}
						}
						return !0;
					}
					static c(a, h, c) {
						const n = [];
						for (let g = 0, p = c.length; g < p; g++) {
							const o = c[g].getPosition(),
								f = new d.$iL(
									o.lineNumber,
									o.column - 1,
									o.lineNumber,
									o.column + 1,
								);
							n[g] = new i.$wtb(f, "");
						}
						return [!0, n];
					}
					static deleteLeft(a, h, c, n, g) {
						if (
							this.isAutoClosingPairDelete(
								h.autoClosingDelete,
								h.autoClosingBrackets,
								h.autoClosingQuotes,
								h.autoClosingPairs.autoClosingPairsOpenByEnd,
								c,
								n,
								g,
							)
						)
							return this.c(h, c, n);
						const p = [];
						let o = a !== w.EditOperationType.DeletingLeft;
						for (let f = 0, b = n.length; f < b; f++) {
							const s = r.d(n[f], c, h);
							if (s.isEmpty()) {
								p[f] = null;
								continue;
							}
							s.startLineNumber !== s.endLineNumber && (o = !0),
								(p[f] = new i.$wtb(s, ""));
						}
						return [o, p];
					}
					static d(a, h, c) {
						if (!a.isEmpty()) return a;
						const n = a.getPosition();
						if (c.useTabStops && n.column > 1) {
							const g = h.getLineContent(n.lineNumber),
								p = t.$Bf(g),
								o = p === -1 ? g.length + 1 : p + 1;
							if (n.column <= o) {
								const f = c.visibleColumnFromColumn(h, n),
									b = E.$BM.prevIndentTabStop(f, c.indentSize),
									s = c.columnFromVisibleColumn(h, n.lineNumber, b);
								return new d.$iL(n.lineNumber, s, n.lineNumber, n.column);
							}
						}
						return d.$iL.fromPositions(r.e(n, h), n);
					}
					static e(a, h) {
						if (a.column > 1) {
							const c = t.$hg(a.column - 1, h.getLineContent(a.lineNumber));
							return a.with(void 0, c + 1);
						} else if (a.lineNumber > 1) {
							const c = a.lineNumber - 1;
							return new m.$hL(c, h.getLineMaxColumn(c));
						} else return a;
					}
					static cut(a, h, c) {
						const n = [];
						let g = null;
						c.sort((p, o) =>
							m.$hL.compare(p.getStartPosition(), o.getEndPosition()),
						);
						for (let p = 0, o = c.length; p < o; p++) {
							const f = c[p];
							if (f.isEmpty())
								if (a.emptySelectionClipboard) {
									const b = f.getPosition();
									let s, l, y, $;
									b.lineNumber < h.getLineCount()
										? ((s = b.lineNumber),
											(l = 1),
											(y = b.lineNumber + 1),
											($ = 1))
										: b.lineNumber > 1 && g?.endLineNumber !== b.lineNumber
											? ((s = b.lineNumber - 1),
												(l = h.getLineMaxColumn(b.lineNumber - 1)),
												(y = b.lineNumber),
												($ = h.getLineMaxColumn(b.lineNumber)))
											: ((s = b.lineNumber),
												(l = 1),
												(y = b.lineNumber),
												($ = h.getLineMaxColumn(b.lineNumber)));
									const v = new d.$iL(s, l, y, $);
									(g = v),
										v.isEmpty() ? (n[p] = null) : (n[p] = new i.$wtb(v, ""));
								} else n[p] = null;
							else n[p] = new i.$wtb(f, "");
						}
						return new w.$Csb(w.EditOperationType.Other, n, {
							shouldPushStackElementBefore: !0,
							shouldPushStackElementAfter: !0,
						});
					}
				}
				e.$Etb = r;
			},
		),
		