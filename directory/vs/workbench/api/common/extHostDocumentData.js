import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/assert.js';
import '../../../base/common/network.js';
import '../../../base/common/strings.js';
import '../../../editor/common/model/mirrorTextModel.js';
import '../../../editor/common/core/wordHelper.js';
import './extHostTypes.js';
import '../../../base/common/arrays.js';
define(
			Pe[301],
			Ne([1, 0, 104, 16, 15, 463, 267, 11, 20]),
			function (we, t, e, r, S, N, P, I, l) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Qdb = t.$Pdb = void 0),
					(t.$Odb = p);
				const n = new Map();
				function p(g, c) {
					c ? n.set(g, c) : n.delete(g);
				}
				function y(g) {
					return n.get(g);
				}
				class d extends N.$ZN {
					constructor(c, h, $, T, a, u, s) {
						super(h, $, T, a),
							(this.o = c),
							(this.p = u),
							(this.q = s),
							(this.n = !1);
					}
					dispose() {
						(0, e.ok)(!this.n), (this.n = !0), (this.q = !1);
					}
					equalLines(c) {
						return (0, l.$yb)(this.b, c);
					}
					get document() {
						if (!this.m) {
							const c = this;
							this.m = {
								get uri() {
									return c.a;
								},
								get fileName() {
									return c.a.fsPath;
								},
								get isUntitled() {
									return c.a.scheme === r.Schemas.untitled;
								},
								get languageId() {
									return c.p;
								},
								get version() {
									return c.d;
								},
								get isClosed() {
									return c.n;
								},
								get isDirty() {
									return c.q;
								},
								save() {
									return c.r();
								},
								getText(h) {
									return h ? c.s(h) : c.getText();
								},
								get eol() {
									return c.c ===
										`
`
										? I.EndOfLine.LF
										: I.EndOfLine.CRLF;
								},
								get lineCount() {
									return c.b.length;
								},
								lineAt(h) {
									return c.t(h);
								},
								offsetAt(h) {
									return c.u(h);
								},
								positionAt(h) {
									return c.v(h);
								},
								validateRange(h) {
									return c.w(h);
								},
								validatePosition(h) {
									return c.x(h);
								},
								getWordRangeAtPosition(h, $) {
									return c.y(h, $);
								},
								[Symbol.for("debug.description")]() {
									return `TextDocument(${c.a.toString()})`;
								},
							};
						}
						return Object.freeze(this.m);
					}
					_acceptLanguageId(c) {
						(0, e.ok)(!this.n), (this.p = c);
					}
					_acceptIsDirty(c) {
						(0, e.ok)(!this.n), (this.q = c);
					}
					r() {
						return this.n
							? Promise.reject(new Error("Document has been closed"))
							: this.o.$trySaveDocument(this.a);
					}
					s(c) {
						const h = this.w(c);
						if (h.isEmpty) return "";
						if (h.isSingleLine)
							return this.b[h.start.line].substring(
								h.start.character,
								h.end.character,
							);
						const $ = this.c,
							T = h.start.line,
							a = h.end.line,
							u = [];
						u.push(this.b[T].substring(h.start.character));
						for (let s = T + 1; s < a; s++) u.push(this.b[s]);
						return u.push(this.b[a].substring(0, h.end.character)), u.join($);
					}
					t(c) {
						let h;
						if (
							(c instanceof I.$obb
								? (h = c.line)
								: typeof c == "number" && (h = c),
							typeof h != "number" ||
								h < 0 ||
								h >= this.b.length ||
								Math.floor(h) !== h)
						)
							throw new Error("Illegal value for `line`");
						return new k(h, this.b[h], h === this.b.length - 1);
					}
					u(c) {
						return (
							(c = this.x(c)),
							this.h(),
							this.f.getPrefixSum(c.line - 1) + c.character
						);
					}
					v(c) {
						(c = Math.floor(c)), (c = Math.max(0, c)), this.h();
						const h = this.f.getIndexOf(c),
							$ = this.b[h.index].length;
						return new I.$obb(h.index, Math.min(h.remainder, $));
					}
					w(c) {
						if (!(c instanceof I.$pbb)) throw new Error("Invalid argument");
						const h = this.x(c.start),
							$ = this.x(c.end);
						return h === c.start && $ === c.end
							? c
							: new I.$pbb(h.line, h.character, $.line, $.character);
					}
					x(c) {
						if (!(c instanceof I.$obb)) throw new Error("Invalid argument");
						if (this.b.length === 0) return c.with(0, 0);
						let { line: h, character: $ } = c,
							T = !1;
						if (h < 0) (h = 0), ($ = 0), (T = !0);
						else if (h >= this.b.length)
							(h = this.b.length - 1), ($ = this.b[h].length), (T = !0);
						else {
							const a = this.b[h].length;
							$ < 0 ? (($ = 0), (T = !0)) : $ > a && (($ = a), (T = !0));
						}
						return T ? new I.$obb(h, $) : c;
					}
					y(c, h) {
						const $ = this.x(c);
						if (!h) h = y(this.p);
						else if ((0, S.$yf)(h))
							throw new Error(
								`[getWordRangeAtPosition]: ignoring custom regexp '${h.source}' because it matches the empty string.`,
							);
						const T = (0, P.$WK)(
							$.character + 1,
							(0, P.$UK)(h),
							this.b[$.line],
							0,
						);
						if (T)
							return new I.$pbb(
								$.line,
								T.startColumn - 1,
								$.line,
								T.endColumn - 1,
							);
					}
				}
				t.$Pdb = d;
				class k {
					constructor(c, h, $) {
						(this.a = c), (this.b = h), (this.c = $);
					}
					get lineNumber() {
						return this.a;
					}
					get text() {
						return this.b;
					}
					get range() {
						return new I.$pbb(this.a, 0, this.a, this.b.length);
					}
					get rangeIncludingLineBreak() {
						return this.c ? this.range : new I.$pbb(this.a, 0, this.a + 1, 0);
					}
					get firstNonWhitespaceCharacterIndex() {
						return /^(\s*)/.exec(this.b)[1].length;
					}
					get isEmptyOrWhitespace() {
						return this.firstNonWhitespaceCharacterIndex === this.b.length;
					}
				}
				t.$Qdb = k;
			},
		),
		