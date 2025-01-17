import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/strings.js';
import './ast.js';
import './length.js';
import './smallImmutableSet.js';
import './tokenizer.js';
define(
			de[1537],
			he([1, 0, 37, 658, 492, 657, 915]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hN = e.$gN = void 0);
				class d {
					static createFromLanguage(a, h) {
						function c(g) {
							return h.getKey(`${g.languageId}:::${g.bracketText}`);
						}
						const n = new Map();
						for (const g of a.bracketsNew.openingBrackets) {
							const p = (0, w.$FM)(0, g.bracketText.length),
								o = c(g),
								f = E.$ZM.getEmpty().add(o, E.$1M);
							n.set(
								g.bracketText,
								new C.$iN(
									p,
									C.TokenKind.OpeningBracket,
									o,
									f,
									i.$oN.create(p, g, f),
								),
							);
						}
						for (const g of a.bracketsNew.closingBrackets) {
							const p = (0, w.$FM)(0, g.bracketText.length);
							let o = E.$ZM.getEmpty();
							const f = g.getOpeningBrackets();
							for (const b of f) o = o.add(c(b), E.$1M);
							n.set(
								g.bracketText,
								new C.$iN(
									p,
									C.TokenKind.ClosingBracket,
									c(f[0]),
									o,
									i.$oN.create(p, g, o),
								),
							);
						}
						return new d(n);
					}
					constructor(a) {
						(this.c = a), (this.a = !1), (this.b = null);
					}
					getRegExpStr() {
						if (this.isEmpty) return null;
						{
							const a = [...this.c.keys()];
							return a.sort(), a.reverse(), a.map((h) => m(h)).join("|");
						}
					}
					get regExpGlobal() {
						if (!this.a) {
							const a = this.getRegExpStr();
							(this.b = a ? new RegExp(a, "gi") : null), (this.a = !0);
						}
						return this.b;
					}
					getToken(a) {
						return this.c.get(a.toLowerCase());
					}
					findClosingTokenText(a) {
						for (const [h, c] of this.c)
							if (
								c.kind === C.TokenKind.ClosingBracket &&
								c.bracketIds.intersects(a)
							)
								return h;
					}
					get isEmpty() {
						return this.c.size === 0;
					}
				}
				e.$gN = d;
				function m(u) {
					let a = (0, t.$of)(u);
					return (
						/^[\w ]+/.test(u) && (a = `\\b${a}`),
						/[\w ]+$/.test(u) && (a = `${a}\\b`),
						a
					);
				}
				class r {
					constructor(a, h) {
						(this.b = a), (this.c = h), (this.a = new Map());
					}
					didLanguageChange(a) {
						return this.a.has(a);
					}
					getSingleLanguageBracketTokens(a) {
						let h = this.a.get(a);
						return (
							h ||
								((h = d.createFromLanguage(this.c(a), this.b)),
								this.a.set(a, h)),
							h
						);
					}
					getToken(a, h) {
						return this.getSingleLanguageBracketTokens(h).getToken(a);
					}
				}
				e.$hN = r;
			},
		),
		