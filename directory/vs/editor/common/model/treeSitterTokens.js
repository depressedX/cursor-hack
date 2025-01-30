import '../../../../require.js';
import '../../../../exports.js';
import '../languages.js';
import '../tokens/lineTokens.js';
import '../encodedTokenAttributes.js';
import './tokens.js';
define(
			de[2694],
			he([1, 0, 74, 388, 171, 1176]),
			function (ce /*require*/,
 e /*exports*/,
 t /*languages*/,
 i /*lineTokens*/,
 w /*encodedTokenAttributes*/,
 E /*tokens*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$oV = void 0);
				class C extends E.$lV {
					constructor(m, r, u, a) {
						super(r, u, a), (this.r = m), (this.c = null), this.s();
					}
					s() {
						const m = this.n();
						(!this.c || this.q !== m) &&
							((this.q = m), (this.c = t.$mM.get(m)));
					}
					getLineTokens(m) {
						const r = this.m.getLineContent(m);
						if (this.c) {
							const u = this.c.tokenizeEncoded(m, this.m);
							if (u) return new i.$7L(u, r, this.j);
						}
						return i.$7L.createEmpty(r, this.j);
					}
					resetTokenization(m = !0) {
						m &&
							this.h.fire({
								semanticTokensApplied: !1,
								ranges: [
									{ fromLineNumber: 1, toLineNumber: this.m.getLineCount() },
								],
							}),
							this.s();
					}
					handleDidChangeAttached() {}
					handleDidChangeContent(m) {
						m.isFlush && this.resetTokenization(!1);
					}
					forceTokenization(m) {}
					hasAccurateTokensForLine(m) {
						return !0;
					}
					isCheapToTokenize(m) {
						return !0;
					}
					getTokenTypeIfInsertingCharacter(m, r, u) {
						return w.StandardTokenType.Other;
					}
					tokenizeLineWithEdit(m, r, u) {
						return null;
					}
					get hasTokens() {
						return this.r.getParseResult(this.m) !== void 0;
					}
				}
				e.$oV = C;
			},
		),
		