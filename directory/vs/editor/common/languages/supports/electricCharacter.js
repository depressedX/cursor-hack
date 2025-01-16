define(de[2691], he([1, 0, 24, 748, 934]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$4M = void 0);
			class E {
				constructor(d) {
					this.a = d;
				}
				getElectricCharacters() {
					const d = [];
					if (this.a)
						for (const m of this.a.brackets)
							for (const r of m.close) {
								const u = r.charAt(r.length - 1);
								d.push(u);
							}
					return (0, t.$Qb)(d);
				}
				onElectricCharacter(d, m, r) {
					if (!this.a || this.a.brackets.length === 0) return null;
					const u = m.findTokenIndexAtOffset(r - 1);
					if ((0, i.$qM)(m.getStandardTokenType(u))) return null;
					const a = this.a.reversedRegex,
						h = m.getLineContent().substring(0, r - 1) + d,
						c = w.$wM.findPrevBracketInRange(a, 1, h, 0, h.length);
					if (!c) return null;
					const n = h
						.substring(c.startColumn - 1, c.endColumn - 1)
						.toLowerCase();
					if (this.a.textIsOpenBracket[n]) return null;
					const p = m.getActualLineContentBefore(c.startColumn - 1);
					return /^\s*$/.test(p) ? { matchOpenBracket: n } : null;
				}
			}
			e.$4M = E;
		}),
		