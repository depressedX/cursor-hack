define(
			de[543],
			he([1, 0, 120, 37, 747, 48, 17, 64]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3U = e.$1U = e.$XU = void 0),
					(e.$YU = u),
					(e.$ZU = a),
					(e.$2U = p),
					(i = mt(i));
				const m = 999;
				class r {
					constructor(b, s, l, y) {
						(this.searchString = b),
							(this.isRegex = s),
							(this.matchCase = l),
							(this.wordSeparators = y);
					}
					parseSearchRequest() {
						if (this.searchString === "") return null;
						let b;
						this.isRegex
							? (b = u(this.searchString))
							: (b =
									this.searchString.indexOf(`
`) >= 0);
						let s = null;
						try {
							s = i.$xf(this.searchString, this.isRegex, {
								matchCase: this.matchCase,
								wholeWord: !1,
								multiline: b,
								global: !0,
								unicode: !0,
							});
						} catch {
							return null;
						}
						if (!s) return null;
						let l = !this.isRegex && !b;
						return (
							l &&
								this.searchString.toLowerCase() !==
									this.searchString.toUpperCase() &&
								(l = this.matchCase),
							new d.$RN(
								s,
								this.wordSeparators
									? (0, w.$QL)(this.wordSeparators, [])
									: null,
								l ? this.searchString : null,
							)
						);
					}
				}
				e.$XU = r;
				function u(f) {
					if (!f || f.length === 0) return !1;
					for (let b = 0, s = f.length; b < s; b++) {
						const l = f.charCodeAt(b);
						if (l === t.CharCode.LineFeed) return !0;
						if (l === t.CharCode.Backslash) {
							if ((b++, b >= s)) break;
							const y = f.charCodeAt(b);
							if (
								y === t.CharCode.n ||
								y === t.CharCode.r ||
								y === t.CharCode.W
							)
								return !0;
						}
					}
					return !1;
				}
				function a(f, b, s) {
					if (!s) return new d.$MN(f, null);
					const l = [];
					for (let y = 0, $ = b.length; y < $; y++) l[y] = b[y];
					return new d.$MN(f, l);
				}
				class h {
					constructor(b) {
						const s = [];
						let l = 0;
						for (let y = 0, $ = b.length; y < $; y++)
							b.charCodeAt(y) === t.CharCode.LineFeed && (s[l++] = y);
						this.a = s;
					}
					findLineFeedCountBeforeOffset(b) {
						const s = this.a;
						let l = 0,
							y = s.length - 1;
						if (y === -1 || b <= s[0]) return 0;
						for (; l < y; ) {
							const $ = l + (((y - l) / 2) >> 0);
							s[$] >= b
								? (y = $ - 1)
								: s[$ + 1] >= b
									? ((l = $), (y = $))
									: (l = $ + 1);
						}
						return l + 1;
					}
				}
				class c {
					static findMatches(b, s, l, y, $) {
						const v = s.parseSearchRequest();
						return v
							? v.regex.multiline
								? this.b(b, l, new o(v.wordSeparators, v.regex), y, $)
								: this.c(b, l, v, y, $)
							: [];
					}
					static a(b, s, l, y, $, v) {
						let S,
							I = 0;
						y
							? ((I = y.findLineFeedCountBeforeOffset($)), (S = s + $ + I))
							: (S = s + $);
						let T;
						if (y) {
							const D = y.findLineFeedCountBeforeOffset($ + v.length) - I;
							T = S + v.length + D;
						} else T = S + v.length;
						const P = b.getPositionAt(S),
							k = b.getPositionAt(T);
						return new C.$iL(P.lineNumber, P.column, k.lineNumber, k.column);
					}
					static b(b, s, l, y, $) {
						const v = b.getOffsetAt(s.getStartPosition()),
							S = b.getValueInRange(s, d.EndOfLinePreference.LF),
							I =
								b.getEOL() ===
								`\r
`
									? new h(S)
									: null,
							T = [];
						let P = 0,
							k;
						for (l.reset(0); (k = l.next(S)); )
							if (
								((T[P++] = a(this.a(b, v, S, I, k.index, k[0]), k, y)), P >= $)
							)
								return T;
						return T;
					}
					static c(b, s, l, y, $) {
						const v = [];
						let S = 0;
						if (s.startLineNumber === s.endLineNumber) {
							const T = b
								.getLineContent(s.startLineNumber)
								.substring(s.startColumn - 1, s.endColumn - 1);
							return (
								(S = this.d(
									l,
									T,
									s.startLineNumber,
									s.startColumn - 1,
									S,
									v,
									y,
									$,
								)),
								v
							);
						}
						const I = b
							.getLineContent(s.startLineNumber)
							.substring(s.startColumn - 1);
						S = this.d(l, I, s.startLineNumber, s.startColumn - 1, S, v, y, $);
						for (
							let T = s.startLineNumber + 1;
							T < s.endLineNumber && S < $;
							T++
						)
							S = this.d(l, b.getLineContent(T), T, 0, S, v, y, $);
						if (S < $) {
							const T = b
								.getLineContent(s.endLineNumber)
								.substring(0, s.endColumn - 1);
							S = this.d(l, T, s.endLineNumber, 0, S, v, y, $);
						}
						return v;
					}
					static d(b, s, l, y, $, v, S, I) {
						const T = b.wordSeparators;
						if (!S && b.simpleSearch) {
							const L = b.simpleSearch,
								D = L.length,
								M = s.length;
							let N = -D;
							for (; (N = s.indexOf(L, N + D)) !== -1; )
								if (
									(!T || p(T, s, M, N, D)) &&
									((v[$++] = new d.$MN(
										new C.$iL(l, N + 1 + y, l, N + 1 + D + y),
										null,
									)),
									$ >= I)
								)
									return $;
							return $;
						}
						const P = new o(b.wordSeparators, b.regex);
						let k;
						P.reset(0);
						do
							if (
								((k = P.next(s)),
								k &&
									((v[$++] = a(
										new C.$iL(
											l,
											k.index + 1 + y,
											l,
											k.index + 1 + k[0].length + y,
										),
										k,
										S,
									)),
									$ >= I))
							)
								return $;
						while (k);
						return $;
					}
					static findNextMatch(b, s, l, y) {
						const $ = s.parseSearchRequest();
						if (!$) return null;
						const v = new o($.wordSeparators, $.regex);
						return $.regex.multiline ? this.e(b, l, v, y) : this.f(b, l, v, y);
					}
					static e(b, s, l, y) {
						const $ = new E.$hL(s.lineNumber, 1),
							v = b.getOffsetAt($),
							S = b.getLineCount(),
							I = b.getValueInRange(
								new C.$iL($.lineNumber, $.column, S, b.getLineMaxColumn(S)),
								d.EndOfLinePreference.LF,
							),
							T =
								b.getEOL() ===
								`\r
`
									? new h(I)
									: null;
						l.reset(s.column - 1);
						const P = l.next(I);
						return P
							? a(this.a(b, v, I, T, P.index, P[0]), P, y)
							: s.lineNumber !== 1 || s.column !== 1
								? this.e(b, new E.$hL(1, 1), l, y)
								: null;
					}
					static f(b, s, l, y) {
						const $ = b.getLineCount(),
							v = s.lineNumber,
							S = b.getLineContent(v),
							I = this.g(l, S, v, s.column, y);
						if (I) return I;
						for (let T = 1; T <= $; T++) {
							const P = (v + T - 1) % $,
								k = b.getLineContent(P + 1),
								L = this.g(l, k, P + 1, 1, y);
							if (L) return L;
						}
						return null;
					}
					static g(b, s, l, y, $) {
						b.reset(y - 1);
						const v = b.next(s);
						return v
							? a(new C.$iL(l, v.index + 1, l, v.index + 1 + v[0].length), v, $)
							: null;
					}
					static findPreviousMatch(b, s, l, y) {
						const $ = s.parseSearchRequest();
						if (!$) return null;
						const v = new o($.wordSeparators, $.regex);
						return $.regex.multiline ? this.h(b, l, v, y) : this.j(b, l, v, y);
					}
					static h(b, s, l, y) {
						const $ = this.b(
							b,
							new C.$iL(1, 1, s.lineNumber, s.column),
							l,
							y,
							10 * m,
						);
						if ($.length > 0) return $[$.length - 1];
						const v = b.getLineCount();
						return s.lineNumber !== v || s.column !== b.getLineMaxColumn(v)
							? this.h(b, new E.$hL(v, b.getLineMaxColumn(v)), l, y)
							: null;
					}
					static j(b, s, l, y) {
						const $ = b.getLineCount(),
							v = s.lineNumber,
							S = b.getLineContent(v).substring(0, s.column - 1),
							I = this.k(l, S, v, y);
						if (I) return I;
						for (let T = 1; T <= $; T++) {
							const P = ($ + v - T - 1) % $,
								k = b.getLineContent(P + 1),
								L = this.k(l, k, P + 1, y);
							if (L) return L;
						}
						return null;
					}
					static k(b, s, l, y) {
						let $ = null,
							v;
						for (b.reset(0); (v = b.next(s)); )
							$ = a(
								new C.$iL(l, v.index + 1, l, v.index + 1 + v[0].length),
								v,
								y,
							);
						return $;
					}
				}
				e.$1U = c;
				function n(f, b, s, l, y) {
					if (l === 0) return !0;
					const $ = b.charCodeAt(l - 1);
					if (
						f.get($) !== w.WordCharacterClass.Regular ||
						$ === t.CharCode.CarriageReturn ||
						$ === t.CharCode.LineFeed
					)
						return !0;
					if (y > 0) {
						const v = b.charCodeAt(l);
						if (f.get(v) !== w.WordCharacterClass.Regular) return !0;
					}
					return !1;
				}
				function g(f, b, s, l, y) {
					if (l + y === s) return !0;
					const $ = b.charCodeAt(l + y);
					if (
						f.get($) !== w.WordCharacterClass.Regular ||
						$ === t.CharCode.CarriageReturn ||
						$ === t.CharCode.LineFeed
					)
						return !0;
					if (y > 0) {
						const v = b.charCodeAt(l + y - 1);
						if (f.get(v) !== w.WordCharacterClass.Regular) return !0;
					}
					return !1;
				}
				function p(f, b, s, l, y) {
					return n(f, b, s, l, y) && g(f, b, s, l, y);
				}
				class o {
					constructor(b, s) {
						(this._wordSeparators = b),
							(this.a = s),
							(this.b = -1),
							(this.c = 0);
					}
					reset(b) {
						(this.a.lastIndex = b), (this.b = -1), (this.c = 0);
					}
					next(b) {
						const s = b.length;
						let l;
						do {
							if (this.b + this.c === s || ((l = this.a.exec(b)), !l))
								return null;
							const y = l.index,
								$ = l[0].length;
							if (y === this.b && $ === this.c) {
								if ($ === 0) {
									i.$Tf(b, s, this.a.lastIndex) > 65535
										? (this.a.lastIndex += 2)
										: (this.a.lastIndex += 1);
									continue;
								}
								return null;
							}
							if (
								((this.b = y),
								(this.c = $),
								!this._wordSeparators || p(this._wordSeparators, b, s, y, $))
							)
								return l;
						} while (l);
						return null;
					}
				}
				e.$3U = o;
			},
		),
		