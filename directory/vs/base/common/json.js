define(de[187], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ParseOptions =
					e.ParseErrorCode =
					e.SyntaxKind =
					e.ScanError =
						void 0),
				(e.$bo = C),
				(e.$co = a),
				(e.$do = h),
				(e.$eo = c),
				(e.$fo = n),
				(e.$go = g),
				(e.$ho = p),
				(e.$io = o),
				(e.$jo = f),
				(e.$ko = b),
				(e.$lo = s);
			var t;
			(function (l) {
				(l[(l.None = 0)] = "None"),
					(l[(l.UnexpectedEndOfComment = 1)] = "UnexpectedEndOfComment"),
					(l[(l.UnexpectedEndOfString = 2)] = "UnexpectedEndOfString"),
					(l[(l.UnexpectedEndOfNumber = 3)] = "UnexpectedEndOfNumber"),
					(l[(l.InvalidUnicode = 4)] = "InvalidUnicode"),
					(l[(l.InvalidEscapeCharacter = 5)] = "InvalidEscapeCharacter"),
					(l[(l.InvalidCharacter = 6)] = "InvalidCharacter");
			})(t || (e.ScanError = t = {}));
			var i;
			(function (l) {
				(l[(l.OpenBraceToken = 1)] = "OpenBraceToken"),
					(l[(l.CloseBraceToken = 2)] = "CloseBraceToken"),
					(l[(l.OpenBracketToken = 3)] = "OpenBracketToken"),
					(l[(l.CloseBracketToken = 4)] = "CloseBracketToken"),
					(l[(l.CommaToken = 5)] = "CommaToken"),
					(l[(l.ColonToken = 6)] = "ColonToken"),
					(l[(l.NullKeyword = 7)] = "NullKeyword"),
					(l[(l.TrueKeyword = 8)] = "TrueKeyword"),
					(l[(l.FalseKeyword = 9)] = "FalseKeyword"),
					(l[(l.StringLiteral = 10)] = "StringLiteral"),
					(l[(l.NumericLiteral = 11)] = "NumericLiteral"),
					(l[(l.LineCommentTrivia = 12)] = "LineCommentTrivia"),
					(l[(l.BlockCommentTrivia = 13)] = "BlockCommentTrivia"),
					(l[(l.LineBreakTrivia = 14)] = "LineBreakTrivia"),
					(l[(l.Trivia = 15)] = "Trivia"),
					(l[(l.Unknown = 16)] = "Unknown"),
					(l[(l.EOF = 17)] = "EOF");
			})(i || (e.SyntaxKind = i = {}));
			var w;
			(function (l) {
				(l[(l.InvalidSymbol = 1)] = "InvalidSymbol"),
					(l[(l.InvalidNumberFormat = 2)] = "InvalidNumberFormat"),
					(l[(l.PropertyNameExpected = 3)] = "PropertyNameExpected"),
					(l[(l.ValueExpected = 4)] = "ValueExpected"),
					(l[(l.ColonExpected = 5)] = "ColonExpected"),
					(l[(l.CommaExpected = 6)] = "CommaExpected"),
					(l[(l.CloseBraceExpected = 7)] = "CloseBraceExpected"),
					(l[(l.CloseBracketExpected = 8)] = "CloseBracketExpected"),
					(l[(l.EndOfFileExpected = 9)] = "EndOfFileExpected"),
					(l[(l.InvalidCommentToken = 10)] = "InvalidCommentToken"),
					(l[(l.UnexpectedEndOfComment = 11)] = "UnexpectedEndOfComment"),
					(l[(l.UnexpectedEndOfString = 12)] = "UnexpectedEndOfString"),
					(l[(l.UnexpectedEndOfNumber = 13)] = "UnexpectedEndOfNumber"),
					(l[(l.InvalidUnicode = 14)] = "InvalidUnicode"),
					(l[(l.InvalidEscapeCharacter = 15)] = "InvalidEscapeCharacter"),
					(l[(l.InvalidCharacter = 16)] = "InvalidCharacter");
			})(w || (e.ParseErrorCode = w = {}));
			var E;
			(function (l) {
				l.DEFAULT = { allowTrailingComma: !0 };
			})(E || (e.ParseOptions = E = {}));
			function C(l, y = !1) {
				let $ = 0;
				const v = l.length;
				let S = "",
					I = 0,
					T = i.Unknown,
					P = t.None;
				function k(O) {
					let B = 0,
						U = 0;
					for (; B < O; ) {
						const z = l.charCodeAt($);
						if (z >= u._0 && z <= u._9) U = U * 16 + z - u._0;
						else if (z >= u.A && z <= u.F) U = U * 16 + z - u.A + 10;
						else if (z >= u.a && z <= u.f) U = U * 16 + z - u.a + 10;
						else break;
						$++, B++;
					}
					return B < O && (U = -1), U;
				}
				function L(O) {
					($ = O), (S = ""), (I = 0), (T = i.Unknown), (P = t.None);
				}
				function D() {
					const O = $;
					if (l.charCodeAt($) === u._0) $++;
					else for ($++; $ < l.length && r(l.charCodeAt($)); ) $++;
					if ($ < l.length && l.charCodeAt($) === u.dot)
						if (($++, $ < l.length && r(l.charCodeAt($))))
							for ($++; $ < l.length && r(l.charCodeAt($)); ) $++;
						else return (P = t.UnexpectedEndOfNumber), l.substring(O, $);
					let B = $;
					if (
						$ < l.length &&
						(l.charCodeAt($) === u.E || l.charCodeAt($) === u.e)
					)
						if (
							($++,
							(($ < l.length && l.charCodeAt($) === u.plus) ||
								l.charCodeAt($) === u.minus) &&
								$++,
							$ < l.length && r(l.charCodeAt($)))
						) {
							for ($++; $ < l.length && r(l.charCodeAt($)); ) $++;
							B = $;
						} else P = t.UnexpectedEndOfNumber;
					return l.substring(O, B);
				}
				function M() {
					let O = "",
						B = $;
					for (;;) {
						if ($ >= v) {
							(O += l.substring(B, $)), (P = t.UnexpectedEndOfString);
							break;
						}
						const U = l.charCodeAt($);
						if (U === u.doubleQuote) {
							(O += l.substring(B, $)), $++;
							break;
						}
						if (U === u.backslash) {
							if (((O += l.substring(B, $)), $++, $ >= v)) {
								P = t.UnexpectedEndOfString;
								break;
							}
							switch (l.charCodeAt($++)) {
								case u.doubleQuote:
									O += '"';
									break;
								case u.backslash:
									O += "\\";
									break;
								case u.slash:
									O += "/";
									break;
								case u.b:
									O += "\b";
									break;
								case u.f:
									O += "\f";
									break;
								case u.n:
									O += `
`;
									break;
								case u.r:
									O += "\r";
									break;
								case u.t:
									O += "	";
									break;
								case u.u: {
									const F = k(4);
									F >= 0
										? (O += String.fromCharCode(F))
										: (P = t.InvalidUnicode);
									break;
								}
								default:
									P = t.InvalidEscapeCharacter;
							}
							B = $;
							continue;
						}
						if (U >= 0 && U <= 31)
							if (m(U)) {
								(O += l.substring(B, $)), (P = t.UnexpectedEndOfString);
								break;
							} else P = t.InvalidCharacter;
						$++;
					}
					return O;
				}
				function N() {
					if (((S = ""), (P = t.None), (I = $), $ >= v))
						return (I = v), (T = i.EOF);
					let O = l.charCodeAt($);
					if (d(O)) {
						do $++, (S += String.fromCharCode(O)), (O = l.charCodeAt($));
						while (d(O));
						return (T = i.Trivia);
					}
					if (m(O))
						return (
							$++,
							(S += String.fromCharCode(O)),
							O === u.carriageReturn &&
								l.charCodeAt($) === u.lineFeed &&
								($++,
								(S += `
`)),
							(T = i.LineBreakTrivia)
						);
					switch (O) {
						case u.openBrace:
							return $++, (T = i.OpenBraceToken);
						case u.closeBrace:
							return $++, (T = i.CloseBraceToken);
						case u.openBracket:
							return $++, (T = i.OpenBracketToken);
						case u.closeBracket:
							return $++, (T = i.CloseBracketToken);
						case u.colon:
							return $++, (T = i.ColonToken);
						case u.comma:
							return $++, (T = i.CommaToken);
						case u.doubleQuote:
							return $++, (S = M()), (T = i.StringLiteral);
						case u.slash: {
							const B = $ - 1;
							if (l.charCodeAt($ + 1) === u.slash) {
								for ($ += 2; $ < v && !m(l.charCodeAt($)); ) $++;
								return (S = l.substring(B, $)), (T = i.LineCommentTrivia);
							}
							if (l.charCodeAt($ + 1) === u.asterisk) {
								$ += 2;
								const U = v - 1;
								let z = !1;
								for (; $ < U; ) {
									if (
										l.charCodeAt($) === u.asterisk &&
										l.charCodeAt($ + 1) === u.slash
									) {
										($ += 2), (z = !0);
										break;
									}
									$++;
								}
								return (
									z || ($++, (P = t.UnexpectedEndOfComment)),
									(S = l.substring(B, $)),
									(T = i.BlockCommentTrivia)
								);
							}
							return (S += String.fromCharCode(O)), $++, (T = i.Unknown);
						}
						case u.minus:
							if (
								((S += String.fromCharCode(O)),
								$++,
								$ === v || !r(l.charCodeAt($)))
							)
								return (T = i.Unknown);
						case u._0:
						case u._1:
						case u._2:
						case u._3:
						case u._4:
						case u._5:
						case u._6:
						case u._7:
						case u._8:
						case u._9:
							return (S += D()), (T = i.NumericLiteral);
						default:
							for (; $ < v && A(O); ) $++, (O = l.charCodeAt($));
							if (I !== $) {
								switch (((S = l.substring(I, $)), S)) {
									case "true":
										return (T = i.TrueKeyword);
									case "false":
										return (T = i.FalseKeyword);
									case "null":
										return (T = i.NullKeyword);
								}
								return (T = i.Unknown);
							}
							return (S += String.fromCharCode(O)), $++, (T = i.Unknown);
					}
				}
				function A(O) {
					if (d(O) || m(O)) return !1;
					switch (O) {
						case u.closeBrace:
						case u.closeBracket:
						case u.openBrace:
						case u.openBracket:
						case u.doubleQuote:
						case u.colon:
						case u.comma:
						case u.slash:
							return !1;
					}
					return !0;
				}
				function R() {
					let O;
					do O = N();
					while (O >= i.LineCommentTrivia && O <= i.Trivia);
					return O;
				}
				return {
					setPosition: L,
					getPosition: () => $,
					scan: y ? R : N,
					getToken: () => T,
					getTokenValue: () => S,
					getTokenOffset: () => I,
					getTokenLength: () => $ - I,
					getTokenError: () => P,
				};
			}
			function d(l) {
				return (
					l === u.space ||
					l === u.tab ||
					l === u.verticalTab ||
					l === u.formFeed ||
					l === u.nonBreakingSpace ||
					l === u.ogham ||
					(l >= u.enQuad && l <= u.zeroWidthSpace) ||
					l === u.narrowNoBreakSpace ||
					l === u.mathematicalSpace ||
					l === u.ideographicSpace ||
					l === u.byteOrderMark
				);
			}
			function m(l) {
				return (
					l === u.lineFeed ||
					l === u.carriageReturn ||
					l === u.lineSeparator ||
					l === u.paragraphSeparator
				);
			}
			function r(l) {
				return l >= u._0 && l <= u._9;
			}
			var u;
			(function (l) {
				(l[(l.nullCharacter = 0)] = "nullCharacter"),
					(l[(l.maxAsciiCharacter = 127)] = "maxAsciiCharacter"),
					(l[(l.lineFeed = 10)] = "lineFeed"),
					(l[(l.carriageReturn = 13)] = "carriageReturn"),
					(l[(l.lineSeparator = 8232)] = "lineSeparator"),
					(l[(l.paragraphSeparator = 8233)] = "paragraphSeparator"),
					(l[(l.nextLine = 133)] = "nextLine"),
					(l[(l.space = 32)] = "space"),
					(l[(l.nonBreakingSpace = 160)] = "nonBreakingSpace"),
					(l[(l.enQuad = 8192)] = "enQuad"),
					(l[(l.emQuad = 8193)] = "emQuad"),
					(l[(l.enSpace = 8194)] = "enSpace"),
					(l[(l.emSpace = 8195)] = "emSpace"),
					(l[(l.threePerEmSpace = 8196)] = "threePerEmSpace"),
					(l[(l.fourPerEmSpace = 8197)] = "fourPerEmSpace"),
					(l[(l.sixPerEmSpace = 8198)] = "sixPerEmSpace"),
					(l[(l.figureSpace = 8199)] = "figureSpace"),
					(l[(l.punctuationSpace = 8200)] = "punctuationSpace"),
					(l[(l.thinSpace = 8201)] = "thinSpace"),
					(l[(l.hairSpace = 8202)] = "hairSpace"),
					(l[(l.zeroWidthSpace = 8203)] = "zeroWidthSpace"),
					(l[(l.narrowNoBreakSpace = 8239)] = "narrowNoBreakSpace"),
					(l[(l.ideographicSpace = 12288)] = "ideographicSpace"),
					(l[(l.mathematicalSpace = 8287)] = "mathematicalSpace"),
					(l[(l.ogham = 5760)] = "ogham"),
					(l[(l._ = 95)] = "_"),
					(l[(l.$ = 36)] = "$"),
					(l[(l._0 = 48)] = "_0"),
					(l[(l._1 = 49)] = "_1"),
					(l[(l._2 = 50)] = "_2"),
					(l[(l._3 = 51)] = "_3"),
					(l[(l._4 = 52)] = "_4"),
					(l[(l._5 = 53)] = "_5"),
					(l[(l._6 = 54)] = "_6"),
					(l[(l._7 = 55)] = "_7"),
					(l[(l._8 = 56)] = "_8"),
					(l[(l._9 = 57)] = "_9"),
					(l[(l.a = 97)] = "a"),
					(l[(l.b = 98)] = "b"),
					(l[(l.c = 99)] = "c"),
					(l[(l.d = 100)] = "d"),
					(l[(l.e = 101)] = "e"),
					(l[(l.f = 102)] = "f"),
					(l[(l.g = 103)] = "g"),
					(l[(l.h = 104)] = "h"),
					(l[(l.i = 105)] = "i"),
					(l[(l.j = 106)] = "j"),
					(l[(l.k = 107)] = "k"),
					(l[(l.l = 108)] = "l"),
					(l[(l.m = 109)] = "m"),
					(l[(l.n = 110)] = "n"),
					(l[(l.o = 111)] = "o"),
					(l[(l.p = 112)] = "p"),
					(l[(l.q = 113)] = "q"),
					(l[(l.r = 114)] = "r"),
					(l[(l.s = 115)] = "s"),
					(l[(l.t = 116)] = "t"),
					(l[(l.u = 117)] = "u"),
					(l[(l.v = 118)] = "v"),
					(l[(l.w = 119)] = "w"),
					(l[(l.x = 120)] = "x"),
					(l[(l.y = 121)] = "y"),
					(l[(l.z = 122)] = "z"),
					(l[(l.A = 65)] = "A"),
					(l[(l.B = 66)] = "B"),
					(l[(l.C = 67)] = "C"),
					(l[(l.D = 68)] = "D"),
					(l[(l.E = 69)] = "E"),
					(l[(l.F = 70)] = "F"),
					(l[(l.G = 71)] = "G"),
					(l[(l.H = 72)] = "H"),
					(l[(l.I = 73)] = "I"),
					(l[(l.J = 74)] = "J"),
					(l[(l.K = 75)] = "K"),
					(l[(l.L = 76)] = "L"),
					(l[(l.M = 77)] = "M"),
					(l[(l.N = 78)] = "N"),
					(l[(l.O = 79)] = "O"),
					(l[(l.P = 80)] = "P"),
					(l[(l.Q = 81)] = "Q"),
					(l[(l.R = 82)] = "R"),
					(l[(l.S = 83)] = "S"),
					(l[(l.T = 84)] = "T"),
					(l[(l.U = 85)] = "U"),
					(l[(l.V = 86)] = "V"),
					(l[(l.W = 87)] = "W"),
					(l[(l.X = 88)] = "X"),
					(l[(l.Y = 89)] = "Y"),
					(l[(l.Z = 90)] = "Z"),
					(l[(l.ampersand = 38)] = "ampersand"),
					(l[(l.asterisk = 42)] = "asterisk"),
					(l[(l.at = 64)] = "at"),
					(l[(l.backslash = 92)] = "backslash"),
					(l[(l.bar = 124)] = "bar"),
					(l[(l.caret = 94)] = "caret"),
					(l[(l.closeBrace = 125)] = "closeBrace"),
					(l[(l.closeBracket = 93)] = "closeBracket"),
					(l[(l.closeParen = 41)] = "closeParen"),
					(l[(l.colon = 58)] = "colon"),
					(l[(l.comma = 44)] = "comma"),
					(l[(l.dot = 46)] = "dot"),
					(l[(l.doubleQuote = 34)] = "doubleQuote"),
					(l[(l.equals = 61)] = "equals"),
					(l[(l.exclamation = 33)] = "exclamation"),
					(l[(l.greaterThan = 62)] = "greaterThan"),
					(l[(l.lessThan = 60)] = "lessThan"),
					(l[(l.minus = 45)] = "minus"),
					(l[(l.openBrace = 123)] = "openBrace"),
					(l[(l.openBracket = 91)] = "openBracket"),
					(l[(l.openParen = 40)] = "openParen"),
					(l[(l.percent = 37)] = "percent"),
					(l[(l.plus = 43)] = "plus"),
					(l[(l.question = 63)] = "question"),
					(l[(l.semicolon = 59)] = "semicolon"),
					(l[(l.singleQuote = 39)] = "singleQuote"),
					(l[(l.slash = 47)] = "slash"),
					(l[(l.tilde = 126)] = "tilde"),
					(l[(l.backspace = 8)] = "backspace"),
					(l[(l.formFeed = 12)] = "formFeed"),
					(l[(l.byteOrderMark = 65279)] = "byteOrderMark"),
					(l[(l.tab = 9)] = "tab"),
					(l[(l.verticalTab = 11)] = "verticalTab");
			})(u || (u = {}));
			function a(l, y) {
				const $ = [],
					v = new Object();
				let S;
				const I = {
					value: {},
					offset: 0,
					length: 0,
					type: "object",
					parent: void 0,
				};
				let T = !1;
				function P(k, L, D, M) {
					(I.value = k),
						(I.offset = L),
						(I.length = D),
						(I.type = M),
						(I.colonOffset = void 0),
						(S = I);
				}
				try {
					b(l, {
						onObjectBegin: (k, L) => {
							if (y <= k) throw v;
							(S = void 0), (T = y > k), $.push("");
						},
						onObjectProperty: (k, L, D) => {
							if (
								y < L ||
								(P(k, L, D, "property"), ($[$.length - 1] = k), y <= L + D)
							)
								throw v;
						},
						onObjectEnd: (k, L) => {
							if (y <= k) throw v;
							(S = void 0), $.pop();
						},
						onArrayBegin: (k, L) => {
							if (y <= k) throw v;
							(S = void 0), $.push(0);
						},
						onArrayEnd: (k, L) => {
							if (y <= k) throw v;
							(S = void 0), $.pop();
						},
						onLiteralValue: (k, L, D) => {
							if (y < L || (P(k, L, D, s(k)), y <= L + D)) throw v;
						},
						onSeparator: (k, L, D) => {
							if (y <= L) throw v;
							if (k === ":" && S && S.type === "property")
								(S.colonOffset = L), (T = !1), (S = void 0);
							else if (k === ",") {
								const M = $[$.length - 1];
								typeof M == "number"
									? ($[$.length - 1] = M + 1)
									: ((T = !0), ($[$.length - 1] = "")),
									(S = void 0);
							}
						},
					});
				} catch (k) {
					if (k !== v) throw k;
				}
				return {
					path: $,
					previousNode: S,
					isAtPropertyKey: T,
					matches: (k) => {
						let L = 0;
						for (let D = 0; L < k.length && D < $.length; D++)
							if (k[L] === $[D] || k[L] === "*") L++;
							else if (k[L] !== "**") return !1;
						return L === k.length;
					},
				};
			}
			function h(l, y = [], $ = E.DEFAULT) {
				let v = null,
					S = [];
				const I = [];
				function T(k) {
					Array.isArray(S) ? S.push(k) : v !== null && (S[v] = k);
				}
				return (
					b(
						l,
						{
							onObjectBegin: () => {
								const k = {};
								T(k), I.push(S), (S = k), (v = null);
							},
							onObjectProperty: (k) => {
								v = k;
							},
							onObjectEnd: () => {
								S = I.pop();
							},
							onArrayBegin: () => {
								const k = [];
								T(k), I.push(S), (S = k), (v = null);
							},
							onArrayEnd: () => {
								S = I.pop();
							},
							onLiteralValue: T,
							onError: (k, L, D) => {
								y.push({ error: k, offset: L, length: D });
							},
						},
						$,
					),
					S[0]
				);
			}
			function c(l, y = [], $ = E.DEFAULT) {
				let v = {
					type: "array",
					offset: -1,
					length: -1,
					children: [],
					parent: void 0,
				};
				function S(k) {
					v.type === "property" && ((v.length = k - v.offset), (v = v.parent));
				}
				function I(k) {
					return v.children.push(k), k;
				}
				b(
					l,
					{
						onObjectBegin: (k) => {
							v = I({
								type: "object",
								offset: k,
								length: -1,
								parent: v,
								children: [],
							});
						},
						onObjectProperty: (k, L, D) => {
							(v = I({
								type: "property",
								offset: L,
								length: -1,
								parent: v,
								children: [],
							})),
								v.children.push({
									type: "string",
									value: k,
									offset: L,
									length: D,
									parent: v,
								});
						},
						onObjectEnd: (k, L) => {
							(v.length = k + L - v.offset), (v = v.parent), S(k + L);
						},
						onArrayBegin: (k, L) => {
							v = I({
								type: "array",
								offset: k,
								length: -1,
								parent: v,
								children: [],
							});
						},
						onArrayEnd: (k, L) => {
							(v.length = k + L - v.offset), (v = v.parent), S(k + L);
						},
						onLiteralValue: (k, L, D) => {
							I({ type: s(k), offset: L, length: D, parent: v, value: k }),
								S(L + D);
						},
						onSeparator: (k, L, D) => {
							v.type === "property" &&
								(k === ":" ? (v.colonOffset = L) : k === "," && S(L));
						},
						onError: (k, L, D) => {
							y.push({ error: k, offset: L, length: D });
						},
					},
					$,
				);
				const P = v.children[0];
				return P && delete P.parent, P;
			}
			function n(l, y) {
				if (!l) return;
				let $ = l;
				for (const v of y)
					if (typeof v == "string") {
						if ($.type !== "object" || !Array.isArray($.children)) return;
						let S = !1;
						for (const I of $.children)
							if (Array.isArray(I.children) && I.children[0].value === v) {
								($ = I.children[1]), (S = !0);
								break;
							}
						if (!S) return;
					} else {
						const S = v;
						if (
							$.type !== "array" ||
							S < 0 ||
							!Array.isArray($.children) ||
							S >= $.children.length
						)
							return;
						$ = $.children[S];
					}
				return $;
			}
			function g(l) {
				if (!l.parent || !l.parent.children) return [];
				const y = g(l.parent);
				if (l.parent.type === "property") {
					const $ = l.parent.children[0].value;
					y.push($);
				} else if (l.parent.type === "array") {
					const $ = l.parent.children.indexOf(l);
					$ !== -1 && y.push($);
				}
				return y;
			}
			function p(l) {
				switch (l.type) {
					case "array":
						return l.children.map(p);
					case "object": {
						const y = Object.create(null);
						for (const $ of l.children) {
							const v = $.children[1];
							v && (y[$.children[0].value] = p(v));
						}
						return y;
					}
					case "null":
					case "string":
					case "number":
					case "boolean":
						return l.value;
					default:
						return;
				}
			}
			function o(l, y, $ = !1) {
				return (
					(y >= l.offset && y < l.offset + l.length) ||
					($ && y === l.offset + l.length)
				);
			}
			function f(l, y, $ = !1) {
				if (o(l, y, $)) {
					const v = l.children;
					if (Array.isArray(v))
						for (let S = 0; S < v.length && v[S].offset <= y; S++) {
							const I = f(v[S], y, $);
							if (I) return I;
						}
					return l;
				}
			}
			function b(l, y, $ = E.DEFAULT) {
				const v = C(l, !1);
				function S(K) {
					return K ? () => K(v.getTokenOffset(), v.getTokenLength()) : () => !0;
				}
				function I(K) {
					return K
						? (J) => K(J, v.getTokenOffset(), v.getTokenLength())
						: () => !0;
				}
				const T = S(y.onObjectBegin),
					P = I(y.onObjectProperty),
					k = S(y.onObjectEnd),
					L = S(y.onArrayBegin),
					D = S(y.onArrayEnd),
					M = I(y.onLiteralValue),
					N = I(y.onSeparator),
					A = S(y.onComment),
					R = I(y.onError),
					O = $ && $.disallowComments,
					B = $ && $.allowTrailingComma;
				function U() {
					for (;;) {
						const K = v.scan();
						switch (v.getTokenError()) {
							case t.InvalidUnicode:
								z(w.InvalidUnicode);
								break;
							case t.InvalidEscapeCharacter:
								z(w.InvalidEscapeCharacter);
								break;
							case t.UnexpectedEndOfNumber:
								z(w.UnexpectedEndOfNumber);
								break;
							case t.UnexpectedEndOfComment:
								O || z(w.UnexpectedEndOfComment);
								break;
							case t.UnexpectedEndOfString:
								z(w.UnexpectedEndOfString);
								break;
							case t.InvalidCharacter:
								z(w.InvalidCharacter);
								break;
						}
						switch (K) {
							case i.LineCommentTrivia:
							case i.BlockCommentTrivia:
								O ? z(w.InvalidCommentToken) : A();
								break;
							case i.Unknown:
								z(w.InvalidSymbol);
								break;
							case i.Trivia:
							case i.LineBreakTrivia:
								break;
							default:
								return K;
						}
					}
				}
				function z(K, J = [], W = []) {
					if ((R(K), J.length + W.length > 0)) {
						let X = v.getToken();
						for (; X !== i.EOF; ) {
							if (J.indexOf(X) !== -1) {
								U();
								break;
							} else if (W.indexOf(X) !== -1) break;
							X = U();
						}
					}
				}
				function F(K) {
					const J = v.getTokenValue();
					return K ? M(J) : P(J), U(), !0;
				}
				function x() {
					switch (v.getToken()) {
						case i.NumericLiteral: {
							let K = 0;
							try {
								(K = JSON.parse(v.getTokenValue())),
									typeof K != "number" && (z(w.InvalidNumberFormat), (K = 0));
							} catch {
								z(w.InvalidNumberFormat);
							}
							M(K);
							break;
						}
						case i.NullKeyword:
							M(null);
							break;
						case i.TrueKeyword:
							M(!0);
							break;
						case i.FalseKeyword:
							M(!1);
							break;
						default:
							return !1;
					}
					return U(), !0;
				}
				function H() {
					return v.getToken() !== i.StringLiteral
						? (z(w.PropertyNameExpected, [], [i.CloseBraceToken, i.CommaToken]),
							!1)
						: (F(!1),
							v.getToken() === i.ColonToken
								? (N(":"),
									U(),
									G() ||
										z(w.ValueExpected, [], [i.CloseBraceToken, i.CommaToken]))
								: z(w.ColonExpected, [], [i.CloseBraceToken, i.CommaToken]),
							!0);
				}
				function q() {
					T(), U();
					let K = !1;
					for (
						;
						v.getToken() !== i.CloseBraceToken && v.getToken() !== i.EOF;
					) {
						if (v.getToken() === i.CommaToken) {
							if (
								(K || z(w.ValueExpected, [], []),
								N(","),
								U(),
								v.getToken() === i.CloseBraceToken && B)
							)
								break;
						} else K && z(w.CommaExpected, [], []);
						H() || z(w.ValueExpected, [], [i.CloseBraceToken, i.CommaToken]),
							(K = !0);
					}
					return (
						k(),
						v.getToken() !== i.CloseBraceToken
							? z(w.CloseBraceExpected, [i.CloseBraceToken], [])
							: U(),
						!0
					);
				}
				function V() {
					L(), U();
					let K = !1;
					for (
						;
						v.getToken() !== i.CloseBracketToken && v.getToken() !== i.EOF;
					) {
						if (v.getToken() === i.CommaToken) {
							if (
								(K || z(w.ValueExpected, [], []),
								N(","),
								U(),
								v.getToken() === i.CloseBracketToken && B)
							)
								break;
						} else K && z(w.CommaExpected, [], []);
						G() || z(w.ValueExpected, [], [i.CloseBracketToken, i.CommaToken]),
							(K = !0);
					}
					return (
						D(),
						v.getToken() !== i.CloseBracketToken
							? z(w.CloseBracketExpected, [i.CloseBracketToken], [])
							: U(),
						!0
					);
				}
				function G() {
					switch (v.getToken()) {
						case i.OpenBracketToken:
							return V();
						case i.OpenBraceToken:
							return q();
						case i.StringLiteral:
							return F(!0);
						default:
							return x();
					}
				}
				return (
					U(),
					v.getToken() === i.EOF
						? $.allowEmptyContent
							? !0
							: (z(w.ValueExpected, [], []), !1)
						: G()
							? (v.getToken() !== i.EOF && z(w.EndOfFileExpected, [], []), !0)
							: (z(w.ValueExpected, [], []), !1)
				);
			}
			function s(l) {
				switch (typeof l) {
					case "boolean":
						return "boolean";
					case "number":
						return "number";
					case "string":
						return "string";
					case "object": {
						if (l) {
							if (Array.isArray(l)) return "array";
						} else return "null";
						return "object";
					}
					default:
						return "null";
				}
			}
		}),
		