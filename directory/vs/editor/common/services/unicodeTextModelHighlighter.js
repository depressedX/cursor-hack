import '../../../../require.js';
import '../../../../exports.js';
import '../core/range.js';
import '../model/textModelSearch.js';
import '../../../base/common/strings.js';
import '../../../base/common/assert.js';
import '../core/wordHelper.js';
define(
			de[1630],
			he([1, 0, 17, 543, 37, 229, 409]),
			function (ce /*require*/,
 e /*exports*/,
 t /*range*/,
 i /*textModelSearch*/,
 w /*strings*/,
 E /*assert*/,
 C /*wordHelper*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.UnicodeHighlighterReasonKind = e.$Ywb = void 0),
					(w = mt(w));
				class d {
					static computeUnicodeHighlights(n, g, p) {
						const o = p ? p.startLineNumber : 1,
							f = p ? p.endLineNumber : n.getLineCount(),
							b = new u(g),
							s = b.getCandidateCodePoints();
						let l;
						s === "allNonBasicAscii"
							? (l = new RegExp("[^\\t\\n\\r\\x20-\\x7E]", "g"))
							: (l = new RegExp(`${m(Array.from(s))}`, "g"));
						const y = new i.$3U(null, l),
							$ = [];
						let v = !1,
							S,
							I = 0,
							T = 0,
							P = 0;
						e: for (let k = o, L = f; k <= L; k++) {
							const D = n.getLineContent(k),
								M = D.length;
							y.reset(0);
							do
								if (((S = y.next(D)), S)) {
									let N = S.index,
										A = S.index + S[0].length;
									if (N > 0) {
										const U = D.charCodeAt(N - 1);
										w.$Qf(U) && N--;
									}
									if (A + 1 < M) {
										const U = D.charCodeAt(A - 1);
										w.$Qf(U) && A++;
									}
									const R = D.substring(N, A);
									let O = (0, C.$WK)(N + 1, C.$TK, D, 0);
									O && O.endColumn <= N + 1 && (O = null);
									const B = b.shouldHighlightNonBasicASCII(
										R,
										O ? O.word : null,
									);
									if (B !== h.None) {
										if (
											(B === h.Ambiguous
												? I++
												: B === h.Invisible
													? T++
													: B === h.NonBasicASCII
														? P++
														: (0, E.$kd)(B),
											$.length >= 1e3)
										) {
											v = !0;
											break e;
										}
										$.push(new t.$iL(k, N + 1, k, A + 1));
									}
								}
							while (S);
						}
						return {
							ranges: $,
							hasMore: v,
							ambiguousCharacterCount: I,
							invisibleCharacterCount: T,
							nonBasicAsciiCharacterCount: P,
						};
					}
					static computeUnicodeHighlightReason(n, g) {
						const p = new u(g);
						switch (p.shouldHighlightNonBasicASCII(n, null)) {
							case h.None:
								return null;
							case h.Invisible:
								return { kind: r.Invisible };
							case h.Ambiguous: {
								const f = n.codePointAt(0),
									b = p.ambiguousCharacters.getPrimaryConfusable(f),
									s = w.$jg
										.getLocales()
										.filter(
											(l) =>
												!w.$jg
													.getInstance(new Set([...g.allowedLocales, l]))
													.isAmbiguous(f),
										);
								return {
									kind: r.Ambiguous,
									confusableWith: String.fromCodePoint(b),
									notAmbiguousInLocales: s,
								};
							}
							case h.NonBasicASCII:
								return { kind: r.NonBasicAscii };
						}
					}
				}
				e.$Ywb = d;
				function m(c, n) {
					return `[${w.$of(c.map((p) => String.fromCodePoint(p)).join(""))}]`;
				}
				var r;
				(function (c) {
					(c[(c.Ambiguous = 0)] = "Ambiguous"),
						(c[(c.Invisible = 1)] = "Invisible"),
						(c[(c.NonBasicAscii = 2)] = "NonBasicAscii");
				})(r || (e.UnicodeHighlighterReasonKind = r = {}));
				class u {
					constructor(n) {
						(this.b = n),
							(this.a = new Set(n.allowedCodePoints)),
							(this.ambiguousCharacters = w.$jg.getInstance(
								new Set(n.allowedLocales),
							));
					}
					getCandidateCodePoints() {
						if (this.b.nonBasicASCII) return "allNonBasicAscii";
						const n = new Set();
						if (this.b.invisibleCharacters)
							for (const g of w.$kg.codePoints)
								a(String.fromCodePoint(g)) || n.add(g);
						if (this.b.ambiguousCharacters)
							for (const g of this.ambiguousCharacters.getConfusableCodePoints())
								n.add(g);
						for (const g of this.a) n.delete(g);
						return n;
					}
					shouldHighlightNonBasicASCII(n, g) {
						const p = n.codePointAt(0);
						if (this.a.has(p)) return h.None;
						if (this.b.nonBasicASCII) return h.NonBasicASCII;
						let o = !1,
							f = !1;
						if (g)
							for (const b of g) {
								const s = b.codePointAt(0),
									l = w.$2f(b);
								(o = o || l),
									!l &&
										!this.ambiguousCharacters.isAmbiguous(s) &&
										!w.$kg.isInvisibleCharacter(s) &&
										(f = !0);
							}
						return !o && f
							? h.None
							: this.b.invisibleCharacters &&
									!a(n) &&
									w.$kg.isInvisibleCharacter(p)
								? h.Invisible
								: this.b.ambiguousCharacters &&
										this.ambiguousCharacters.isAmbiguous(p)
									? h.Ambiguous
									: h.None;
					}
				}
				function a(c) {
					return (
						c === " " ||
						c ===
							`
` ||
						c === "	"
					);
				}
				var h;
				(function (c) {
					(c[(c.None = 0)] = "None"),
						(c[(c.NonBasicASCII = 1)] = "NonBasicASCII"),
						(c[(c.Invisible = 2)] = "Invisible"),
						(c[(c.Ambiguous = 3)] = "Ambiguous");
				})(h || (h = {}));
			},
		),
		