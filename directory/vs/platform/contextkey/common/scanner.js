import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/charCode.js';
import '../../../base/common/errors.js';
import '../../../nls.js';
define(de[2704], he([1, 0, 120, 29, 4]), function (ce /*require*/,
 e /*exports*/,
 t /*charCode*/,
 i /*errors*/,
 w /*nls*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Hj = e.TokenType = void 0);
			var E;
			(function (u) {
				(u[(u.LParen = 0)] = "LParen"),
					(u[(u.RParen = 1)] = "RParen"),
					(u[(u.Neg = 2)] = "Neg"),
					(u[(u.Eq = 3)] = "Eq"),
					(u[(u.NotEq = 4)] = "NotEq"),
					(u[(u.Lt = 5)] = "Lt"),
					(u[(u.LtEq = 6)] = "LtEq"),
					(u[(u.Gt = 7)] = "Gt"),
					(u[(u.GtEq = 8)] = "GtEq"),
					(u[(u.RegexOp = 9)] = "RegexOp"),
					(u[(u.RegexStr = 10)] = "RegexStr"),
					(u[(u.True = 11)] = "True"),
					(u[(u.False = 12)] = "False"),
					(u[(u.In = 13)] = "In"),
					(u[(u.Not = 14)] = "Not"),
					(u[(u.And = 15)] = "And"),
					(u[(u.Or = 16)] = "Or"),
					(u[(u.Str = 17)] = "Str"),
					(u[(u.QuotedStr = 18)] = "QuotedStr"),
					(u[(u.Error = 19)] = "Error"),
					(u[(u.EOF = 20)] = "EOF");
			})(E || (e.TokenType = E = {}));
			function C(...u) {
				switch (u.length) {
					case 1:
						return (0, w.localize)(1705, null, u[0]);
					case 2:
						return (0, w.localize)(1706, null, u[0], u[1]);
					case 3:
						return (0, w.localize)(1707, null, u[0], u[1], u[2]);
					default:
						return;
				}
			}
			const d = (0, w.localize)(1708, null),
				m = (0, w.localize)(1709, null);
			class r {
				constructor() {
					(this.c = ""),
						(this.d = 0),
						(this.e = 0),
						(this.f = []),
						(this.g = []),
						(this.m = /[a-zA-Z0-9_<>\-\./\\:\*\?\+\[\]\^,#@;"%\$\p{L}-]+/uy);
				}
				static getLexeme(a) {
					switch (a.type) {
						case E.LParen:
							return "(";
						case E.RParen:
							return ")";
						case E.Neg:
							return "!";
						case E.Eq:
							return a.isTripleEq ? "===" : "==";
						case E.NotEq:
							return a.isTripleEq ? "!==" : "!=";
						case E.Lt:
							return "<";
						case E.LtEq:
							return "<=";
						case E.Gt:
							return ">=";
						case E.GtEq:
							return ">=";
						case E.RegexOp:
							return "=~";
						case E.RegexStr:
							return a.lexeme;
						case E.True:
							return "true";
						case E.False:
							return "false";
						case E.In:
							return "in";
						case E.Not:
							return "not";
						case E.And:
							return "&&";
						case E.Or:
							return "||";
						case E.Str:
							return a.lexeme;
						case E.QuotedStr:
							return a.lexeme;
						case E.Error:
							return a.lexeme;
						case E.EOF:
							return "EOF";
						default:
							throw (0, i.$_)(
								`unhandled token type: ${JSON.stringify(a)}; have you forgotten to add a case?`,
							);
					}
				}
				static {
					this.a = new Set(
						["i", "g", "s", "m", "y", "u"].map((a) => a.charCodeAt(0)),
					);
				}
				static {
					this.b = new Map([
						["not", E.Not],
						["in", E.In],
						["false", E.False],
						["true", E.True],
					]);
				}
				get errors() {
					return this.g;
				}
				reset(a) {
					return (
						(this.c = a),
						(this.d = 0),
						(this.e = 0),
						(this.f = []),
						(this.g = []),
						this
					);
				}
				scan() {
					for (; !this.r(); )
						switch (((this.d = this.e), this.i())) {
							case t.CharCode.OpenParen:
								this.k(E.LParen);
								break;
							case t.CharCode.CloseParen:
								this.k(E.RParen);
								break;
							case t.CharCode.ExclamationMark:
								if (this.h(t.CharCode.Equals)) {
									const h = this.h(t.CharCode.Equals);
									this.f.push({ type: E.NotEq, offset: this.d, isTripleEq: h });
								} else this.k(E.Neg);
								break;
							case t.CharCode.SingleQuote:
								this.o();
								break;
							case t.CharCode.Slash:
								this.q();
								break;
							case t.CharCode.Equals:
								if (this.h(t.CharCode.Equals)) {
									const h = this.h(t.CharCode.Equals);
									this.f.push({ type: E.Eq, offset: this.d, isTripleEq: h });
								} else
									this.h(t.CharCode.Tilde)
										? this.k(E.RegexOp)
										: this.l(C("==", "=~"));
								break;
							case t.CharCode.LessThan:
								this.k(this.h(t.CharCode.Equals) ? E.LtEq : E.Lt);
								break;
							case t.CharCode.GreaterThan:
								this.k(this.h(t.CharCode.Equals) ? E.GtEq : E.Gt);
								break;
							case t.CharCode.Ampersand:
								this.h(t.CharCode.Ampersand) ? this.k(E.And) : this.l(C("&&"));
								break;
							case t.CharCode.Pipe:
								this.h(t.CharCode.Pipe) ? this.k(E.Or) : this.l(C("||"));
								break;
							case t.CharCode.Space:
							case t.CharCode.CarriageReturn:
							case t.CharCode.Tab:
							case t.CharCode.LineFeed:
							case t.CharCode.NoBreakSpace:
								break;
							default:
								this.n();
						}
					return (this.d = this.e), this.k(E.EOF), Array.from(this.f);
				}
				h(a) {
					return this.r() || this.c.charCodeAt(this.e) !== a
						? !1
						: (this.e++, !0);
				}
				i() {
					return this.c.charCodeAt(this.e++);
				}
				j() {
					return this.r() ? t.CharCode.Null : this.c.charCodeAt(this.e);
				}
				k(a) {
					this.f.push({ type: a, offset: this.d });
				}
				l(a) {
					const h = this.d,
						c = this.c.substring(this.d, this.e),
						n = { type: E.Error, offset: this.d, lexeme: c };
					this.g.push({ offset: h, lexeme: c, additionalInfo: a }),
						this.f.push(n);
				}
				n() {
					this.m.lastIndex = this.d;
					const a = this.m.exec(this.c);
					if (a) {
						this.e = this.d + a[0].length;
						const h = this.c.substring(this.d, this.e),
							c = r.b.get(h);
						c
							? this.k(c)
							: this.f.push({ type: E.Str, lexeme: h, offset: this.d });
					}
				}
				o() {
					for (; this.j() !== t.CharCode.SingleQuote && !this.r(); ) this.i();
					if (this.r()) {
						this.l(d);
						return;
					}
					this.i(),
						this.f.push({
							type: E.QuotedStr,
							lexeme: this.c.substring(this.d + 1, this.e - 1),
							offset: this.d + 1,
						});
				}
				q() {
					let a = this.e,
						h = !1,
						c = !1;
					for (;;) {
						if (a >= this.c.length) {
							(this.e = a), this.l(m);
							return;
						}
						const g = this.c.charCodeAt(a);
						if (h) h = !1;
						else if (g === t.CharCode.Slash && !c) {
							a++;
							break;
						} else
							g === t.CharCode.OpenSquareBracket
								? (c = !0)
								: g === t.CharCode.Backslash
									? (h = !0)
									: g === t.CharCode.CloseSquareBracket && (c = !1);
						a++;
					}
					for (; a < this.c.length && r.a.has(this.c.charCodeAt(a)); ) a++;
					this.e = a;
					const n = this.c.substring(this.d, this.e);
					this.f.push({ type: E.RegexStr, lexeme: n, offset: this.d });
				}
				r() {
					return this.e >= this.c.length;
				}
			}
			e.$Hj = r;
		}),
		