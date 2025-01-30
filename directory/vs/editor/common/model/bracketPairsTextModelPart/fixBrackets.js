import '../../../../../require.js';
import '../../../../../exports.js';
import './bracketPairsTree/ast.js';
import './bracketPairsTree/brackets.js';
import './bracketPairsTree/length.js';
import './bracketPairsTree/parser.js';
import './bracketPairsTree/smallImmutableSet.js';
import './bracketPairsTree/tokenizer.js';
define(
			de[2564],
			he([1, 0, 658, 1537, 492, 1538, 657, 915]),
			function (ce /*require*/,
 e /*exports*/,
 t /*ast*/,
 i /*brackets*/,
 w /*length*/,
 E /*parser*/,
 C /*smallImmutableSet*/,
 d /*tokenizer*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$GCb = m);
				function m(u, a) {
					const h = new C.$2M(),
						c = new i.$hN(h, (b) => a.getLanguageConfiguration(b)),
						n = new d.$jN(new r([u]), c),
						g = (0, E.$6O)(n, [], void 0, !0);
					let p = "";
					const o = u.getLineContent();
					function f(b, s) {
						if (b.kind === t.AstNodeKind.Pair)
							if (
								(f(b.openingBracket, s),
								(s = (0, w.$JM)(s, b.openingBracket.length)),
								b.child && (f(b.child, s), (s = (0, w.$JM)(s, b.child.length))),
								b.closingBracket)
							)
								f(b.closingBracket, s),
									(s = (0, w.$JM)(s, b.closingBracket.length));
							else {
								const y = c
									.getSingleLanguageBracketTokens(b.openingBracket.languageId)
									.findClosingTokenText(b.openingBracket.bracketIds);
								p += y;
							}
						else if (b.kind !== t.AstNodeKind.UnexpectedClosingBracket) {
							if (
								b.kind === t.AstNodeKind.Text ||
								b.kind === t.AstNodeKind.Bracket
							)
								p += o.substring(
									(0, w.$IM)(s),
									(0, w.$IM)((0, w.$JM)(s, b.length)),
								);
							else if (b.kind === t.AstNodeKind.List)
								for (const l of b.children)
									f(l, s), (s = (0, w.$JM)(s, l.length));
						}
					}
					return f(g, w.$DM), p;
				}
				class r {
					constructor(a) {
						(this.a = a),
							(this.tokenization = { getLineTokens: (h) => this.a[h - 1] });
					}
					getValue() {
						return this.a
							.map((a) => a.getLineContent())
							.join(`
`);
					}
					getLineCount() {
						return this.a.length;
					}
					getLineLength(a) {
						return this.a[a - 1].getLineContent().length;
					}
				}
			},
		),
		