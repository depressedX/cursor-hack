import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/json.js';
import '../../../../editor/common/core/position.js';
import '../../../../editor/common/core/range.js';
define(de[3124], he([1, 0, 187, 48, 17]), function (ce /*require*/,
 e /*exports*/,
 t /*json*/,
 i /*position*/,
 w /*range*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$dEc = void 0);
			class E {
				static a(d) {
					for (; d.scan() !== t.SyntaxKind.EOF; )
						if (d.getToken() === t.SyntaxKind.OpenBraceToken) return !0;
					return !1;
				}
				static b(d, m) {
					let r = 0;
					const u = d.getEOL().length,
						a = d.getLineCount();
					for (let h = 1; h <= a; h++) {
						const c = d.getLineLength(h) + u,
							n = r + c;
						if (n > m) return new i.$hL(h, m - r + 1);
						r = n;
					}
					return new i.$hL(a, d.getLineMaxColumn(a));
				}
				static insertSnippet(d, m) {
					const r = d.getValueLengthInRange(
						new w.$iL(1, 1, m.lineNumber, m.column),
					);
					let u;
					(function (b) {
						(b[(b.INVALID = 0)] = "INVALID"),
							(b[(b.AFTER_OBJECT = 1)] = "AFTER_OBJECT"),
							(b[(b.BEFORE_OBJECT = 2)] = "BEFORE_OBJECT");
					})(u || (u = {}));
					let a = u.INVALID,
						h = -1,
						c = u.INVALID;
					const n = (0, t.$bo)(d.getValue());
					let g = 0,
						p = 0;
					const o = (b, s) => {
						s !== u.INVALID && g === 1 && p === 0
							? ((a = s), (h = b), (c = s))
							: a !== u.INVALID && ((a = u.INVALID), (h = n.getTokenOffset()));
					};
					for (; n.scan() !== t.SyntaxKind.EOF; ) {
						const b = n.getPosition(),
							s = n.getToken();
						let l = !1;
						switch (s) {
							case t.SyntaxKind.OpenBracketToken:
								(l = !0), g++, o(b, u.BEFORE_OBJECT);
								break;
							case t.SyntaxKind.CloseBracketToken:
								(l = !0), g--, o(b, u.INVALID);
								break;
							case t.SyntaxKind.CommaToken:
								(l = !0), o(b, u.BEFORE_OBJECT);
								break;
							case t.SyntaxKind.OpenBraceToken:
								(l = !0), p++, o(b, u.INVALID);
								break;
							case t.SyntaxKind.CloseBraceToken:
								(l = !0), p--, o(b, u.AFTER_OBJECT);
								break;
							case t.SyntaxKind.Trivia:
							case t.SyntaxKind.LineBreakTrivia:
								l = !0;
						}
						if (b >= r && (a !== u.INVALID || h !== -1)) {
							let y, $;
							return (
								a !== u.INVALID
									? ((y = l ? b : n.getTokenOffset()), ($ = a))
									: ((y = h), ($ = c)),
								$ === u.AFTER_OBJECT
									? { position: this.b(d, y), prepend: ",", append: "" }
									: (n.setPosition(y),
										{
											position: this.b(d, y),
											prepend: "",
											append: this.a(n) ? "," : "",
										})
							);
						}
					}
					const f = d.getLineCount();
					return {
						position: new i.$hL(f, d.getLineMaxColumn(f)),
						prepend: `
[`,
						append: "]",
					};
				}
			}
			e.$dEc = E;
		})
