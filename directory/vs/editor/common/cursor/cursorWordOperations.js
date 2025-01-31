import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/charCode.js';
import '../../../base/common/strings.js';
import '../cursorCommon.js';
import './cursorDeleteOperations.js';
import '../core/wordCharacterClassifier.js';
import '../core/position.js';
import '../core/range.js';
define(
			de[944],
			he([1, 0, 120, 37, 346, 943, 747, 48, 17]),
			function (ce /*require*/,
 e /*exports*/,
 t /*charCode*/,
 i /*strings*/,
 w /*cursorCommon*/,
 E /*cursorDeleteOperations*/,
 C /*wordCharacterClassifier*/,
 d /*position*/,
 m /*range*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Gtb = e.$Ftb = e.WordNavigationType = void 0),
					(i = mt(i));
				var r;
				(function (n) {
					(n[(n.None = 0)] = "None"),
						(n[(n.Regular = 1)] = "Regular"),
						(n[(n.Separator = 2)] = "Separator");
				})(r || (r = {}));
				var u;
				(function (n) {
					(n[(n.WordStart = 0)] = "WordStart"),
						(n[(n.WordStartFast = 1)] = "WordStartFast"),
						(n[(n.WordEnd = 2)] = "WordEnd"),
						(n[(n.WordAccessibility = 3)] = "WordAccessibility");
				})(u || (e.WordNavigationType = u = {}));
				class a {
					static a(g, p, o, f, b) {
						return { start: f, end: b, wordType: p, nextCharClass: o };
					}
					static b(g, p) {
						return {
							start: g.index,
							end: g.index + g.segment.length,
							wordType: r.Regular,
							nextCharClass: p,
						};
					}
					static c(g, p, o) {
						const f = p.getLineContent(o.lineNumber);
						return this.d(f, g, o);
					}
					static d(g, p, o) {
						let f = r.None;
						const b = p.findPrevIntlWordBeforeOrAtOffset(g, o.column - 2);
						for (let s = o.column - 2; s >= 0; s--) {
							const l = g.charCodeAt(s),
								y = p.get(l);
							if (b && s === b.index) return this.b(b, y);
							if (y === C.WordCharacterClass.Regular) {
								if (f === r.Separator)
									return this.a(g, f, y, s + 1, this.e(g, p, f, s + 1));
								f = r.Regular;
							} else if (y === C.WordCharacterClass.WordSeparator) {
								if (f === r.Regular)
									return this.a(g, f, y, s + 1, this.e(g, p, f, s + 1));
								f = r.Separator;
							} else if (y === C.WordCharacterClass.Whitespace && f !== r.None)
								return this.a(g, f, y, s + 1, this.e(g, p, f, s + 1));
						}
						return f !== r.None
							? this.a(
									g,
									f,
									C.WordCharacterClass.Whitespace,
									0,
									this.e(g, p, f, 0),
								)
							: null;
					}
					static e(g, p, o, f) {
						const b = p.findNextIntlWordAtOrAfterOffset(g, f),
							s = g.length;
						for (let l = f; l < s; l++) {
							const y = g.charCodeAt(l),
								$ = p.get(y);
							if (
								(b && l === b.index + b.segment.length) ||
								$ === C.WordCharacterClass.Whitespace ||
								(o === r.Regular && $ === C.WordCharacterClass.WordSeparator) ||
								(o === r.Separator && $ === C.WordCharacterClass.Regular)
							)
								return l;
						}
						return s;
					}
					static f(g, p, o) {
						const f = p.getLineContent(o.lineNumber);
						return this.g(f, g, o);
					}
					static g(g, p, o) {
						let f = r.None;
						const b = g.length,
							s = p.findNextIntlWordAtOrAfterOffset(g, o.column - 1);
						for (let l = o.column - 1; l < b; l++) {
							const y = g.charCodeAt(l),
								$ = p.get(y);
							if (s && l === s.index) return this.b(s, $);
							if ($ === C.WordCharacterClass.Regular) {
								if (f === r.Separator)
									return this.a(g, f, $, this.h(g, p, f, l - 1), l);
								f = r.Regular;
							} else if ($ === C.WordCharacterClass.WordSeparator) {
								if (f === r.Regular)
									return this.a(g, f, $, this.h(g, p, f, l - 1), l);
								f = r.Separator;
							} else if ($ === C.WordCharacterClass.Whitespace && f !== r.None)
								return this.a(g, f, $, this.h(g, p, f, l - 1), l);
						}
						return f !== r.None
							? this.a(
									g,
									f,
									C.WordCharacterClass.Whitespace,
									this.h(g, p, f, b - 1),
									b,
								)
							: null;
					}
					static h(g, p, o, f) {
						const b = p.findPrevIntlWordBeforeOrAtOffset(g, f);
						for (let s = f; s >= 0; s--) {
							const l = g.charCodeAt(s),
								y = p.get(l);
							if (b && s === b.index) return s;
							if (
								y === C.WordCharacterClass.Whitespace ||
								(o === r.Regular && y === C.WordCharacterClass.WordSeparator) ||
								(o === r.Separator && y === C.WordCharacterClass.Regular)
							)
								return s + 1;
						}
						return 0;
					}
					static moveWordLeft(g, p, o, f, b) {
						let s = o.lineNumber,
							l = o.column;
						l === 1 && s > 1 && ((s = s - 1), (l = p.getLineMaxColumn(s)));
						let y = a.c(g, p, new d.$hL(s, l));
						if (f === u.WordStart) return new d.$hL(s, y ? y.start + 1 : 1);
						if (f === u.WordStartFast)
							return (
								!b &&
									y &&
									y.wordType === r.Separator &&
									y.end - y.start === 1 &&
									y.nextCharClass === C.WordCharacterClass.Regular &&
									(y = a.c(g, p, new d.$hL(s, y.start + 1))),
								new d.$hL(s, y ? y.start + 1 : 1)
							);
						if (f === u.WordAccessibility) {
							for (; y && y.wordType === r.Separator; )
								y = a.c(g, p, new d.$hL(s, y.start + 1));
							return new d.$hL(s, y ? y.start + 1 : 1);
						}
						return (
							y && l <= y.end + 1 && (y = a.c(g, p, new d.$hL(s, y.start + 1))),
							new d.$hL(s, y ? y.end + 1 : 1)
						);
					}
					static _moveWordPartLeft(g, p) {
						const o = p.lineNumber,
							f = g.getLineMaxColumn(o);
						if (p.column === 1)
							return o > 1 ? new d.$hL(o - 1, g.getLineMaxColumn(o - 1)) : p;
						const b = g.getLineContent(o);
						for (let s = p.column - 1; s > 1; s--) {
							const l = b.charCodeAt(s - 2),
								y = b.charCodeAt(s - 1);
							if (l === t.CharCode.Underline && y !== t.CharCode.Underline)
								return new d.$hL(o, s);
							if (l === t.CharCode.Dash && y !== t.CharCode.Dash)
								return new d.$hL(o, s);
							if ((i.$Kf(l) || i.$Jf(l)) && i.$Lf(y)) return new d.$hL(o, s);
							if (i.$Lf(l) && i.$Lf(y) && s + 1 < f) {
								const $ = b.charCodeAt(s);
								if (i.$Kf($) || i.$Jf($)) return new d.$hL(o, s);
							}
						}
						return new d.$hL(o, 1);
					}
					static moveWordRight(g, p, o, f) {
						let b = o.lineNumber,
							s = o.column,
							l = !1;
						s === p.getLineMaxColumn(b) &&
							b < p.getLineCount() &&
							((l = !0), (b = b + 1), (s = 1));
						let y = a.f(g, p, new d.$hL(b, s));
						if (f === u.WordEnd)
							y &&
								y.wordType === r.Separator &&
								y.end - y.start === 1 &&
								y.nextCharClass === C.WordCharacterClass.Regular &&
								(y = a.f(g, p, new d.$hL(b, y.end + 1))),
								y ? (s = y.end + 1) : (s = p.getLineMaxColumn(b));
						else if (f === u.WordAccessibility) {
							for (
								l && (s = 0);
								y && (y.wordType === r.Separator || y.start + 1 <= s);
							)
								y = a.f(g, p, new d.$hL(b, y.end + 1));
							y ? (s = y.start + 1) : (s = p.getLineMaxColumn(b));
						} else
							y &&
								!l &&
								s >= y.start + 1 &&
								(y = a.f(g, p, new d.$hL(b, y.end + 1))),
								y ? (s = y.start + 1) : (s = p.getLineMaxColumn(b));
						return new d.$hL(b, s);
					}
					static _moveWordPartRight(g, p) {
						const o = p.lineNumber,
							f = g.getLineMaxColumn(o);
						if (p.column === f)
							return o < g.getLineCount() ? new d.$hL(o + 1, 1) : p;
						const b = g.getLineContent(o);
						for (let s = p.column + 1; s < f; s++) {
							const l = b.charCodeAt(s - 2),
								y = b.charCodeAt(s - 1);
							if (l !== t.CharCode.Underline && y === t.CharCode.Underline)
								return new d.$hL(o, s);
							if (l !== t.CharCode.Dash && y === t.CharCode.Dash)
								return new d.$hL(o, s);
							if ((i.$Kf(l) || i.$Jf(l)) && i.$Lf(y)) return new d.$hL(o, s);
							if (i.$Lf(l) && i.$Lf(y) && s + 1 < f) {
								const $ = b.charCodeAt(s);
								if (i.$Kf($) || i.$Jf($)) return new d.$hL(o, s);
							}
						}
						return new d.$hL(o, f);
					}
					static i(g, p) {
						const o = g.getLineContent(p.lineNumber),
							f = p.column - 2,
							b = i.$Df(o, f);
						return b + 1 < f
							? new m.$iL(p.lineNumber, b + 2, p.lineNumber, p.column)
							: null;
					}
					static deleteWordLeft(g, p) {
						const o = g.wordSeparators,
							f = g.model,
							b = g.selection,
							s = g.whitespaceHeuristics;
						if (!b.isEmpty()) return b;
						if (
							E.$Etb.isAutoClosingPairDelete(
								g.autoClosingDelete,
								g.autoClosingBrackets,
								g.autoClosingQuotes,
								g.autoClosingPairs.autoClosingPairsOpenByEnd,
								g.model,
								[g.selection],
								g.autoClosedCharacters,
							)
						) {
							const S = g.selection.getPosition();
							return new m.$iL(
								S.lineNumber,
								S.column - 1,
								S.lineNumber,
								S.column + 1,
							);
						}
						const l = new d.$hL(b.positionLineNumber, b.positionColumn);
						let y = l.lineNumber,
							$ = l.column;
						if (y === 1 && $ === 1) return null;
						if (s) {
							const S = this.i(f, l);
							if (S) return S;
						}
						let v = a.c(o, f, l);
						return (
							p === u.WordStart
								? v
									? ($ = v.start + 1)
									: $ > 1
										? ($ = 1)
										: (y--, ($ = f.getLineMaxColumn(y)))
								: (v &&
										$ <= v.end + 1 &&
										(v = a.c(o, f, new d.$hL(y, v.start + 1))),
									v
										? ($ = v.end + 1)
										: $ > 1
											? ($ = 1)
											: (y--, ($ = f.getLineMaxColumn(y)))),
							new m.$iL(y, $, l.lineNumber, l.column)
						);
					}
					static deleteInsideWord(g, p, o) {
						if (!o.isEmpty()) return o;
						const f = new d.$hL(o.positionLineNumber, o.positionColumn),
							b = this.k(p, f);
						return b || this.l(g, p, f);
					}
					static j(g, p) {
						const o = g.charCodeAt(p);
						return o === t.CharCode.Space || o === t.CharCode.Tab;
					}
					static k(g, p) {
						const o = g.getLineContent(p.lineNumber),
							f = o.length;
						if (f === 0) return null;
						let b = Math.max(p.column - 2, 0);
						if (!this.j(o, b)) return null;
						let s = Math.min(p.column - 1, f - 1);
						if (!this.j(o, s)) return null;
						for (; b > 0 && this.j(o, b - 1); ) b--;
						for (; s + 1 < f && this.j(o, s + 1); ) s++;
						return new m.$iL(p.lineNumber, b + 1, p.lineNumber, s + 2);
					}
					static l(g, p, o) {
						const f = p.getLineContent(o.lineNumber),
							b = f.length;
						if (b === 0)
							return o.lineNumber > 1
								? new m.$iL(
										o.lineNumber - 1,
										p.getLineMaxColumn(o.lineNumber - 1),
										o.lineNumber,
										1,
									)
								: o.lineNumber < p.getLineCount()
									? new m.$iL(o.lineNumber, 1, o.lineNumber + 1, 1)
									: new m.$iL(o.lineNumber, 1, o.lineNumber, 1);
						const s = (S) => S.start + 1 <= o.column && o.column <= S.end + 1,
							l = (S, I) => (
								(S = Math.min(S, o.column)),
								(I = Math.max(I, o.column)),
								new m.$iL(o.lineNumber, S, o.lineNumber, I)
							),
							y = (S) => {
								let I = S.start + 1,
									T = S.end + 1,
									P = !1;
								for (; T - 1 < b && this.j(f, T - 1); ) (P = !0), T++;
								if (!P) for (; I > 1 && this.j(f, I - 2); ) I--;
								return l(I, T);
							},
							$ = a.c(g, p, o);
						if ($ && s($)) return y($);
						const v = a.f(g, p, o);
						return v && s(v)
							? y(v)
							: $ && v
								? l($.end + 1, v.start + 1)
								: $
									? l($.start + 1, $.end + 1)
									: v
										? l(v.start + 1, v.end + 1)
										: l(1, b + 1);
					}
					static _deleteWordPartLeft(g, p) {
						if (!p.isEmpty()) return p;
						const o = p.getPosition(),
							f = a._moveWordPartLeft(g, o);
						return new m.$iL(o.lineNumber, o.column, f.lineNumber, f.column);
					}
					static m(g, p) {
						const o = g.length;
						for (let f = p; f < o; f++) {
							const b = g.charAt(f);
							if (b !== " " && b !== "	") return f;
						}
						return o;
					}
					static n(g, p) {
						const o = g.getLineContent(p.lineNumber),
							f = p.column - 1,
							b = this.m(o, f);
						return f + 1 < b
							? new m.$iL(p.lineNumber, p.column, p.lineNumber, b + 1)
							: null;
					}
					static deleteWordRight(g, p) {
						const o = g.wordSeparators,
							f = g.model,
							b = g.selection,
							s = g.whitespaceHeuristics;
						if (!b.isEmpty()) return b;
						const l = new d.$hL(b.positionLineNumber, b.positionColumn);
						let y = l.lineNumber,
							$ = l.column;
						const v = f.getLineCount(),
							S = f.getLineMaxColumn(y);
						if (y === v && $ === S) return null;
						if (s) {
							const T = this.n(f, l);
							if (T) return T;
						}
						let I = a.f(o, f, l);
						return (
							p === u.WordEnd
								? I
									? ($ = I.end + 1)
									: $ < S || y === v
										? ($ = S)
										: (y++,
											(I = a.f(o, f, new d.$hL(y, 1))),
											I ? ($ = I.start + 1) : ($ = f.getLineMaxColumn(y)))
								: (I &&
										$ >= I.start + 1 &&
										(I = a.f(o, f, new d.$hL(y, I.end + 1))),
									I
										? ($ = I.start + 1)
										: $ < S || y === v
											? ($ = S)
											: (y++,
												(I = a.f(o, f, new d.$hL(y, 1))),
												I ? ($ = I.start + 1) : ($ = f.getLineMaxColumn(y)))),
							new m.$iL(y, $, l.lineNumber, l.column)
						);
					}
					static _deleteWordPartRight(g, p) {
						if (!p.isEmpty()) return p;
						const o = p.getPosition(),
							f = a._moveWordPartRight(g, o);
						return new m.$iL(o.lineNumber, o.column, f.lineNumber, f.column);
					}
					static o(g, p, o) {
						const f = new m.$iL(p, o.start + 1, p, o.end + 1);
						return {
							word: g.getValueInRange(f),
							startColumn: f.startColumn,
							endColumn: f.endColumn,
						};
					}
					static getWordAtPosition(g, p, o, f) {
						const b = (0, C.$QL)(p, o),
							s = a.c(b, g, f);
						if (
							s &&
							s.wordType === r.Regular &&
							s.start <= f.column - 1 &&
							f.column - 1 <= s.end
						)
							return a.o(g, f.lineNumber, s);
						const l = a.f(b, g, f);
						return l &&
							l.wordType === r.Regular &&
							l.start <= f.column - 1 &&
							f.column - 1 <= l.end
							? a.o(g, f.lineNumber, l)
							: null;
					}
					static word(g, p, o, f, b) {
						const s = (0, C.$QL)(g.wordSeparators, g.wordSegmenterLocales),
							l = a.c(s, p, b),
							y = a.f(s, p, b);
						if (!f) {
							let T, P;
							return (
								l &&
								l.wordType === r.Regular &&
								l.start <= b.column - 1 &&
								b.column - 1 <= l.end
									? ((T = l.start + 1), (P = l.end + 1))
									: y &&
											y.wordType === r.Regular &&
											y.start <= b.column - 1 &&
											b.column - 1 <= y.end
										? ((T = y.start + 1), (P = y.end + 1))
										: (l ? (T = l.end + 1) : (T = 1),
											y
												? (P = y.start + 1)
												: (P = p.getLineMaxColumn(b.lineNumber))),
								new w.$Bsb(
									new m.$iL(b.lineNumber, T, b.lineNumber, P),
									w.SelectionStartKind.Word,
									0,
									new d.$hL(b.lineNumber, P),
									0,
								)
							);
						}
						let $, v;
						l &&
						l.wordType === r.Regular &&
						l.start < b.column - 1 &&
						b.column - 1 < l.end
							? (($ = l.start + 1), (v = l.end + 1))
							: y &&
									y.wordType === r.Regular &&
									y.start < b.column - 1 &&
									b.column - 1 < y.end
								? (($ = y.start + 1), (v = y.end + 1))
								: (($ = b.column), (v = b.column));
						const S = b.lineNumber;
						let I;
						if (o.selectionStart.containsPosition(b))
							I = o.selectionStart.endColumn;
						else if (b.isBeforeOrEqual(o.selectionStart.getStartPosition())) {
							I = $;
							const T = new d.$hL(S, I);
							o.selectionStart.containsPosition(T) &&
								(I = o.selectionStart.endColumn);
						} else {
							I = v;
							const T = new d.$hL(S, I);
							o.selectionStart.containsPosition(T) &&
								(I = o.selectionStart.startColumn);
						}
						return o.move(!0, S, I, 0);
					}
				}
				e.$Ftb = a;
				class h extends a {
					static deleteWordPartLeft(g) {
						const p = c([
							a.deleteWordLeft(g, u.WordStart),
							a.deleteWordLeft(g, u.WordEnd),
							a._deleteWordPartLeft(g.model, g.selection),
						]);
						return p.sort(m.$iL.compareRangesUsingEnds), p[2];
					}
					static deleteWordPartRight(g) {
						const p = c([
							a.deleteWordRight(g, u.WordStart),
							a.deleteWordRight(g, u.WordEnd),
							a._deleteWordPartRight(g.model, g.selection),
						]);
						return p.sort(m.$iL.compareRangesUsingStarts), p[0];
					}
					static moveWordPartLeft(g, p, o, f) {
						const b = c([
							a.moveWordLeft(g, p, o, u.WordStart, f),
							a.moveWordLeft(g, p, o, u.WordEnd, f),
							a._moveWordPartLeft(p, o),
						]);
						return b.sort(d.$hL.compare), b[2];
					}
					static moveWordPartRight(g, p, o) {
						const f = c([
							a.moveWordRight(g, p, o, u.WordStart),
							a.moveWordRight(g, p, o, u.WordEnd),
							a._moveWordPartRight(p, o),
						]);
						return f.sort(d.$hL.compare), f[0];
					}
				}
				e.$Gtb = h;
				function c(n) {
					return n.filter((g) => !!g);
				}
			},
		)
