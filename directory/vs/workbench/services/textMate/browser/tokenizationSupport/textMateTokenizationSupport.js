import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/stopwatch.js';
import '../../../../../editor/common/encodedTokenAttributes.js';
import '../../../../../editor/common/languages.js';
define(
			de[3669],
			he([1, 0, 6, 3, 162, 171, 74]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*stopwatch*/,
 E /*encodedTokenAttributes*/,
 C /*languages*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$uyc = void 0);
				class d extends i.$1c {
					constructor(r, u, a, h, c, n, g) {
						super(),
							(this.c = r),
							(this.f = u),
							(this.g = a),
							(this.h = h),
							(this.j = c),
							(this.m = n),
							(this.n = g),
							(this.a = []),
							(this.b = this.D(new t.$re())),
							(this.onDidEncounterLanguage = this.b.event);
					}
					get backgroundTokenizerShouldOnlyVerifyTokens() {
						return this.j();
					}
					getInitialState() {
						return this.f;
					}
					tokenize(r, u, a) {
						throw new Error("Not supported!");
					}
					createBackgroundTokenizer(r, u) {
						if (this.h) return this.h(r, u);
					}
					tokenizeEncoded(r, u, a) {
						const h = Math.random() * 1e4 < 1,
							c = this.n || h,
							n = c ? new w.$le(!0) : void 0,
							g = this.c.tokenizeLine2(r, a, 500);
						if (c) {
							const o = n.elapsed();
							(h || o > 32) && this.m(o, r.length, h);
						}
						if (g.stoppedEarly)
							return (
								console.warn(
									`Time limit reached when tokenizing line: ${r.substring(0, 100)}`,
								),
								new C.$dM(g.tokens, a)
							);
						if (this.g) {
							const o = this.a,
								f = g.tokens;
							for (let b = 0, s = f.length >>> 1; b < s; b++) {
								const l = f[(b << 1) + 1],
									y = E.$2L.getLanguageId(l);
								o[y] || ((o[y] = !0), this.b.fire(y));
							}
						}
						let p;
						return (
							a.equals(g.ruleStack) ? (p = a) : (p = g.ruleStack),
							new C.$dM(g.tokens, p)
						);
					}
				}
				e.$uyc = d;
			},
		)
