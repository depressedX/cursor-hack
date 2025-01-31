import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/charCode.js';
define(de[389], he([1, 0, 120]), function (ce /*require*/,
 e /*exports*/,
 t /*charCode*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Izb =
					e.$Hzb =
					e.$Gzb =
					e.$Fzb =
					e.$Ezb =
					e.$Dzb =
					e.$Czb =
					e.$Bzb =
					e.Text =
					e.$zzb =
					e.$yzb =
					e.TokenType =
						void 0);
			var i;
			(function (p) {
				(p[(p.Dollar = 0)] = "Dollar"),
					(p[(p.Colon = 1)] = "Colon"),
					(p[(p.Comma = 2)] = "Comma"),
					(p[(p.CurlyOpen = 3)] = "CurlyOpen"),
					(p[(p.CurlyClose = 4)] = "CurlyClose"),
					(p[(p.Backslash = 5)] = "Backslash"),
					(p[(p.Forwardslash = 6)] = "Forwardslash"),
					(p[(p.Pipe = 7)] = "Pipe"),
					(p[(p.Int = 8)] = "Int"),
					(p[(p.VariableName = 9)] = "VariableName"),
					(p[(p.Format = 10)] = "Format"),
					(p[(p.Plus = 11)] = "Plus"),
					(p[(p.Dash = 12)] = "Dash"),
					(p[(p.QuestionMark = 13)] = "QuestionMark"),
					(p[(p.EOF = 14)] = "EOF");
			})(i || (e.TokenType = i = {}));
			class w {
				constructor() {
					(this.value = ""), (this.pos = 0);
				}
				static {
					this.d = {
						[t.CharCode.DollarSign]: i.Dollar,
						[t.CharCode.Colon]: i.Colon,
						[t.CharCode.Comma]: i.Comma,
						[t.CharCode.OpenCurlyBrace]: i.CurlyOpen,
						[t.CharCode.CloseCurlyBrace]: i.CurlyClose,
						[t.CharCode.Backslash]: i.Backslash,
						[t.CharCode.Slash]: i.Forwardslash,
						[t.CharCode.Pipe]: i.Pipe,
						[t.CharCode.Plus]: i.Plus,
						[t.CharCode.Dash]: i.Dash,
						[t.CharCode.QuestionMark]: i.QuestionMark,
					};
				}
				static isDigitCharacter(o) {
					return o >= t.CharCode.Digit0 && o <= t.CharCode.Digit9;
				}
				static isVariableCharacter(o) {
					return (
						o === t.CharCode.Underline ||
						(o >= t.CharCode.a && o <= t.CharCode.z) ||
						(o >= t.CharCode.A && o <= t.CharCode.Z)
					);
				}
				text(o) {
					(this.value = o), (this.pos = 0);
				}
				tokenText(o) {
					return this.value.substr(o.pos, o.len);
				}
				next() {
					if (this.pos >= this.value.length)
						return { type: i.EOF, pos: this.pos, len: 0 };
					const o = this.pos;
					let f = 0,
						b = this.value.charCodeAt(o),
						s;
					if (((s = w.d[b]), typeof s == "number"))
						return (this.pos += 1), { type: s, pos: o, len: 1 };
					if (w.isDigitCharacter(b)) {
						s = i.Int;
						do (f += 1), (b = this.value.charCodeAt(o + f));
						while (w.isDigitCharacter(b));
						return (this.pos += f), { type: s, pos: o, len: f };
					}
					if (w.isVariableCharacter(b)) {
						s = i.VariableName;
						do b = this.value.charCodeAt(o + ++f);
						while (w.isVariableCharacter(b) || w.isDigitCharacter(b));
						return (this.pos += f), { type: s, pos: o, len: f };
					}
					s = i.Format;
					do (f += 1), (b = this.value.charCodeAt(o + f));
					while (
						!isNaN(b) &&
						typeof w.d[b] > "u" &&
						!w.isDigitCharacter(b) &&
						!w.isVariableCharacter(b)
					);
					return (this.pos += f), { type: s, pos: o, len: f };
				}
			}
			e.$yzb = w;
			class E {
				constructor() {
					this.d = [];
				}
				appendChild(o) {
					return (
						o instanceof C && this.d[this.d.length - 1] instanceof C
							? (this.d[this.d.length - 1].value += o.value)
							: ((o.parent = this), this.d.push(o)),
						this
					);
				}
				replace(o, f) {
					const { parent: b } = o,
						s = b.children.indexOf(o),
						l = b.children.slice(0);
					l.splice(s, 1, ...f),
						(b.d = l),
						(function y($, v) {
							for (const S of $) (S.parent = v), y(S.children, S);
						})(f, b);
				}
				get children() {
					return this.d;
				}
				get rightMostDescendant() {
					return this.d.length > 0
						? this.d[this.d.length - 1].rightMostDescendant
						: this;
				}
				get snippet() {
					let o = this;
					for (;;) {
						if (!o) return;
						if (o instanceof n) return o;
						o = o.parent;
					}
				}
				toString() {
					return this.children.reduce((o, f) => o + f.toString(), "");
				}
				len() {
					return 0;
				}
			}
			e.$zzb = E;
			class C extends E {
				static escape(o) {
					return o.replace(/\$|}|\\/g, "\\$&");
				}
				constructor(o) {
					super(), (this.value = o);
				}
				toString() {
					return this.value;
				}
				toTextmateString() {
					return C.escape(this.value);
				}
				len() {
					return this.value.length;
				}
				clone() {
					return new C(this.value);
				}
			}
			e.Text = C;
			class d extends E {}
			e.$Bzb = d;
			class m extends d {
				static compareByIndex(o, f) {
					return o.index === f.index
						? 0
						: o.isFinalTabstop
							? 1
							: f.isFinalTabstop || o.index < f.index
								? -1
								: o.index > f.index
									? 1
									: 0;
				}
				constructor(o) {
					super(), (this.index = o);
				}
				get isFinalTabstop() {
					return this.index === 0;
				}
				get choice() {
					return this.d.length === 1 && this.d[0] instanceof r
						? this.d[0]
						: void 0;
				}
				toTextmateString() {
					let o = "";
					return (
						this.transform && (o = this.transform.toTextmateString()),
						this.children.length === 0 && !this.transform
							? `$${this.index}`
							: this.children.length === 0
								? `\${${this.index}${o}}`
								: this.choice
									? `\${${this.index}|${this.choice.toTextmateString()}|${o}}`
									: `\${${this.index}:${this.children.map((f) => f.toTextmateString()).join("")}${o}}`
					);
				}
				clone() {
					const o = new m(this.index);
					return (
						this.transform && (o.transform = this.transform.clone()),
						(o.d = this.children.map((f) => f.clone())),
						o
					);
				}
			}
			e.$Czb = m;
			class r extends E {
				constructor() {
					super(...arguments), (this.options = []);
				}
				appendChild(o) {
					return (
						o instanceof C && ((o.parent = this), this.options.push(o)), this
					);
				}
				toString() {
					return this.options[0].value;
				}
				toTextmateString() {
					return this.options
						.map((o) => o.value.replace(/\||,|\\/g, "\\$&"))
						.join(",");
				}
				len() {
					return this.options[0].len();
				}
				clone() {
					const o = new r();
					return this.options.forEach(o.appendChild, o), o;
				}
			}
			e.$Dzb = r;
			class u extends E {
				constructor() {
					super(...arguments), (this.regexp = new RegExp(""));
				}
				resolve(o) {
					const f = this;
					let b = !1,
						s = o.replace(this.regexp, function () {
							return (
								(b = !0), f.f(Array.prototype.slice.call(arguments, 0, -2))
							);
						});
					return (
						!b &&
							this.d.some((l) => l instanceof a && !!l.elseValue) &&
							(s = this.f([])),
						s
					);
				}
				f(o) {
					let f = "";
					for (const b of this.d)
						if (b instanceof a) {
							let s = o[b.index] || "";
							(s = b.resolve(s)), (f += s);
						} else f += b.toString();
					return f;
				}
				toString() {
					return "";
				}
				toTextmateString() {
					return `/${this.regexp.source}/${this.children.map((o) => o.toTextmateString())}/${(this.regexp.ignoreCase ? "i" : "") + (this.regexp.global ? "g" : "")}`;
				}
				clone() {
					const o = new u();
					return (
						(o.regexp = new RegExp(
							this.regexp.source,
							(this.regexp.ignoreCase ? "i" : "") +
								(this.regexp.global ? "g" : ""),
						)),
						(o.d = this.children.map((f) => f.clone())),
						o
					);
				}
			}
			e.$Ezb = u;
			class a extends E {
				constructor(o, f, b, s) {
					super(),
						(this.index = o),
						(this.shorthandName = f),
						(this.ifValue = b),
						(this.elseValue = s);
				}
				resolve(o) {
					return this.shorthandName === "upcase"
						? o
							? o.toLocaleUpperCase()
							: ""
						: this.shorthandName === "downcase"
							? o
								? o.toLocaleLowerCase()
								: ""
							: this.shorthandName === "capitalize"
								? o
									? o[0].toLocaleUpperCase() + o.substr(1)
									: ""
								: this.shorthandName === "pascalcase"
									? o
										? this.f(o)
										: ""
									: this.shorthandName === "camelcase"
										? o
											? this.g(o)
											: ""
										: o && typeof this.ifValue == "string"
											? this.ifValue
											: !o && typeof this.elseValue == "string"
												? this.elseValue
												: o || "";
				}
				f(o) {
					const f = o.match(/[a-z0-9]+/gi);
					return f
						? f.map((b) => b.charAt(0).toUpperCase() + b.substr(1)).join("")
						: o;
				}
				g(o) {
					const f = o.match(/[a-z0-9]+/gi);
					return f
						? f
								.map((b, s) =>
									s === 0
										? b.charAt(0).toLowerCase() + b.substr(1)
										: b.charAt(0).toUpperCase() + b.substr(1),
								)
								.join("")
						: o;
				}
				toTextmateString() {
					let o = "${";
					return (
						(o += this.index),
						this.shorthandName
							? (o += `:/${this.shorthandName}`)
							: this.ifValue && this.elseValue
								? (o += `:?${this.ifValue}:${this.elseValue}`)
								: this.ifValue
									? (o += `:+${this.ifValue}`)
									: this.elseValue && (o += `:-${this.elseValue}`),
						(o += "}"),
						o
					);
				}
				clone() {
					return new a(
						this.index,
						this.shorthandName,
						this.ifValue,
						this.elseValue,
					);
				}
			}
			e.$Fzb = a;
			class h extends d {
				constructor(o) {
					super(), (this.name = o);
				}
				resolve(o) {
					let f = o.resolve(this);
					return (
						this.transform && (f = this.transform.resolve(f || "")),
						f !== void 0 ? ((this.d = [new C(f)]), !0) : !1
					);
				}
				toTextmateString() {
					let o = "";
					return (
						this.transform && (o = this.transform.toTextmateString()),
						this.children.length === 0
							? `\${${this.name}${o}}`
							: `\${${this.name}:${this.children.map((f) => f.toTextmateString()).join("")}${o}}`
					);
				}
				clone() {
					const o = new h(this.name);
					return (
						this.transform && (o.transform = this.transform.clone()),
						(o.d = this.children.map((f) => f.clone())),
						o
					);
				}
			}
			e.$Gzb = h;
			function c(p, o) {
				const f = [...p];
				for (; f.length > 0; ) {
					const b = f.shift();
					if (!o(b)) break;
					f.unshift(...b.children);
				}
			}
			class n extends E {
				get placeholderInfo() {
					if (!this.f) {
						const o = [];
						let f;
						this.walk(function (b) {
							return (
								b instanceof m &&
									(o.push(b), (f = !f || f.index < b.index ? b : f)),
								!0
							);
						}),
							(this.f = { all: o, last: f });
					}
					return this.f;
				}
				get placeholders() {
					const { all: o } = this.placeholderInfo;
					return o;
				}
				offset(o) {
					let f = 0,
						b = !1;
					return (
						this.walk((s) => (s === o ? ((b = !0), !1) : ((f += s.len()), !0))),
						b ? f : -1
					);
				}
				fullLen(o) {
					let f = 0;
					return c([o], (b) => ((f += b.len()), !0)), f;
				}
				enclosingPlaceholders(o) {
					const f = [];
					let { parent: b } = o;
					for (; b; ) b instanceof m && f.push(b), (b = b.parent);
					return f;
				}
				resolveVariables(o) {
					return (
						this.walk(
							(f) => (f instanceof h && f.resolve(o) && (this.f = void 0), !0),
						),
						this
					);
				}
				appendChild(o) {
					return (this.f = void 0), super.appendChild(o);
				}
				replace(o, f) {
					return (this.f = void 0), super.replace(o, f);
				}
				toTextmateString() {
					return this.children.reduce((o, f) => o + f.toTextmateString(), "");
				}
				clone() {
					const o = new n();
					return (this.d = this.children.map((f) => f.clone())), o;
				}
				walk(o) {
					c(this.children, o);
				}
			}
			e.$Hzb = n;
			class g {
				constructor() {
					(this.d = new w()), (this.f = { type: i.EOF, pos: 0, len: 0 });
				}
				static escape(o) {
					return o.replace(/\$|}|\\/g, "\\$&");
				}
				static asInsertText(o) {
					return new g().parse(o).toString();
				}
				static guessNeedsClipboard(o) {
					return /\${?CLIPBOARD/.test(o);
				}
				parse(o, f, b) {
					const s = new n();
					return (
						this.parseFragment(o, s),
						this.ensureFinalTabstop(s, b ?? !1, f ?? !1),
						s
					);
				}
				parseFragment(o, f) {
					const b = f.children.length;
					for (this.d.text(o), this.f = this.d.next(); this.j(f); );
					const s = new Map(),
						l = [];
					f.walk(
						(v) => (
							v instanceof m &&
								(v.isFinalTabstop
									? s.set(0, void 0)
									: !s.has(v.index) && v.children.length > 0
										? s.set(v.index, v.children)
										: l.push(v)),
							!0
						),
					);
					const y = (v, S) => {
							const I = s.get(v.index);
							if (!I) return;
							const T = new m(v.index);
							T.transform = v.transform;
							for (const P of I) {
								const k = P.clone();
								T.appendChild(k),
									k instanceof m &&
										s.has(k.index) &&
										!S.has(k.index) &&
										(S.add(k.index), y(k, S), S.delete(k.index));
							}
							f.replace(v, [T]);
						},
						$ = new Set();
					for (const v of l) y(v, $);
					return f.children.slice(b);
				}
				ensureFinalTabstop(o, f, b) {
					(f || (b && o.placeholders.length > 0)) &&
						(o.placeholders.find((l) => l.index === 0) ||
							o.appendChild(new m(0)));
				}
				g(o, f) {
					if (o === void 0 || this.f.type === o) {
						const b = f ? this.d.tokenText(this.f) : !0;
						return (this.f = this.d.next()), b;
					}
					return !1;
				}
				h(o) {
					return (this.d.pos = o.pos + o.len), (this.f = o), !1;
				}
				i(o) {
					const f = this.f;
					for (; this.f.type !== o; ) {
						if (this.f.type === i.EOF) return !1;
						if (this.f.type === i.Backslash) {
							const s = this.d.next();
							if (
								s.type !== i.Dollar &&
								s.type !== i.CurlyClose &&
								s.type !== i.Backslash
							)
								return !1;
						}
						this.f = this.d.next();
					}
					const b = this.d.value
						.substring(f.pos, this.f.pos)
						.replace(/\\(\$|}|\\)/g, "$1");
					return (this.f = this.d.next()), b;
				}
				j(o) {
					return this.k(o) || this.l(o) || this.m(o) || this.o(o) || this.s(o);
				}
				k(o) {
					let f;
					return (f = this.g(i.Backslash, !0))
						? ((f =
								this.g(i.Dollar, !0) ||
								this.g(i.CurlyClose, !0) ||
								this.g(i.Backslash, !0) ||
								f),
							o.appendChild(new C(f)),
							!0)
						: !1;
				}
				l(o) {
					let f;
					const b = this.f;
					return this.g(i.Dollar) &&
						(f = this.g(i.VariableName, !0) || this.g(i.Int, !0))
						? (o.appendChild(/^\d+$/.test(f) ? new m(Number(f)) : new h(f)), !0)
						: this.h(b);
				}
				m(o) {
					let f;
					const b = this.f;
					if (
						!(
							this.g(i.Dollar) &&
							this.g(i.CurlyOpen) &&
							(f = this.g(i.Int, !0))
						)
					)
						return this.h(b);
					const l = new m(Number(f));
					if (this.g(i.Colon))
						for (;;) {
							if (this.g(i.CurlyClose)) return o.appendChild(l), !0;
							if (!this.j(l))
								return (
									o.appendChild(new C("${" + f + ":")),
									l.children.forEach(o.appendChild, o),
									!0
								);
						}
					else if (l.index > 0 && this.g(i.Pipe)) {
						const y = new r();
						for (;;) {
							if (this.n(y)) {
								if (this.g(i.Comma)) continue;
								if (this.g(i.Pipe) && (l.appendChild(y), this.g(i.CurlyClose)))
									return o.appendChild(l), !0;
							}
							return this.h(b), !1;
						}
					} else
						return this.g(i.Forwardslash)
							? this.q(l)
								? (o.appendChild(l), !0)
								: (this.h(b), !1)
							: this.g(i.CurlyClose)
								? (o.appendChild(l), !0)
								: this.h(b);
				}
				n(o) {
					const f = this.f,
						b = [];
					for (; !(this.f.type === i.Comma || this.f.type === i.Pipe); ) {
						let s;
						if (
							((s = this.g(i.Backslash, !0))
								? (s =
										this.g(i.Comma, !0) ||
										this.g(i.Pipe, !0) ||
										this.g(i.Backslash, !0) ||
										s)
								: (s = this.g(void 0, !0)),
							!s)
						)
							return this.h(f), !1;
						b.push(s);
					}
					return b.length === 0
						? (this.h(f), !1)
						: (o.appendChild(new C(b.join(""))), !0);
				}
				o(o) {
					let f;
					const b = this.f;
					if (
						!(
							this.g(i.Dollar) &&
							this.g(i.CurlyOpen) &&
							(f = this.g(i.VariableName, !0))
						)
					)
						return this.h(b);
					const l = new h(f);
					if (this.g(i.Colon))
						for (;;) {
							if (this.g(i.CurlyClose)) return o.appendChild(l), !0;
							if (!this.j(l))
								return (
									o.appendChild(new C("${" + f + ":")),
									l.children.forEach(o.appendChild, o),
									!0
								);
						}
					else
						return this.g(i.Forwardslash)
							? this.q(l)
								? (o.appendChild(l), !0)
								: (this.h(b), !1)
							: this.g(i.CurlyClose)
								? (o.appendChild(l), !0)
								: this.h(b);
				}
				q(o) {
					const f = new u();
					let b = "",
						s = "";
					for (; !this.g(i.Forwardslash); ) {
						let l;
						if ((l = this.g(i.Backslash, !0))) {
							(l = this.g(i.Forwardslash, !0) || l), (b += l);
							continue;
						}
						if (this.f.type !== i.EOF) {
							b += this.g(void 0, !0);
							continue;
						}
						return !1;
					}
					for (; !this.g(i.Forwardslash); ) {
						let l;
						if ((l = this.g(i.Backslash, !0))) {
							(l = this.g(i.Backslash, !0) || this.g(i.Forwardslash, !0) || l),
								f.appendChild(new C(l));
							continue;
						}
						if (!(this.r(f) || this.s(f))) return !1;
					}
					for (; !this.g(i.CurlyClose); ) {
						if (this.f.type !== i.EOF) {
							s += this.g(void 0, !0);
							continue;
						}
						return !1;
					}
					try {
						f.regexp = new RegExp(b, s);
					} catch {
						return !1;
					}
					return (o.transform = f), !0;
				}
				r(o) {
					const f = this.f;
					if (!this.g(i.Dollar)) return !1;
					let b = !1;
					this.g(i.CurlyOpen) && (b = !0);
					const s = this.g(i.Int, !0);
					if (s)
						if (b) {
							if (this.g(i.CurlyClose))
								return o.appendChild(new a(Number(s))), !0;
							if (!this.g(i.Colon)) return this.h(f), !1;
						} else return o.appendChild(new a(Number(s))), !0;
					else return this.h(f), !1;
					if (this.g(i.Forwardslash)) {
						const l = this.g(i.VariableName, !0);
						return !l || !this.g(i.CurlyClose)
							? (this.h(f), !1)
							: (o.appendChild(new a(Number(s), l)), !0);
					} else if (this.g(i.Plus)) {
						const l = this.i(i.CurlyClose);
						if (l)
							return o.appendChild(new a(Number(s), void 0, l, void 0)), !0;
					} else if (this.g(i.Dash)) {
						const l = this.i(i.CurlyClose);
						if (l)
							return o.appendChild(new a(Number(s), void 0, void 0, l)), !0;
					} else if (this.g(i.QuestionMark)) {
						const l = this.i(i.Colon);
						if (l) {
							const y = this.i(i.CurlyClose);
							if (y) return o.appendChild(new a(Number(s), void 0, l, y)), !0;
						}
					} else {
						const l = this.i(i.CurlyClose);
						if (l)
							return o.appendChild(new a(Number(s), void 0, void 0, l)), !0;
					}
					return this.h(f), !1;
				}
				s(o) {
					return this.f.type !== i.EOF
						? (o.appendChild(new C(this.d.tokenText(this.f))),
							this.g(void 0),
							!0)
						: !1;
				}
			}
			e.$Izb = g;
		})
