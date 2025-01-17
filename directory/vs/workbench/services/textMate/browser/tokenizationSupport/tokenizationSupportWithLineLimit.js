import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../editor/common/languages/nullTokenize.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/observable.js';
define(de[3670], he([1, 0, 1175, 3, 77]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$vyc = void 0);
			class E extends i.$1c {
				get backgroundTokenizerShouldOnlyVerifyTokens() {
					return this.b.backgroundTokenizerShouldOnlyVerifyTokens;
				}
				constructor(d, m, r, u) {
					super(),
						(this.a = d),
						(this.b = m),
						(this.c = u),
						this.D((0, w.keepObserved)(this.c)),
						this.D(r);
				}
				getInitialState() {
					return this.b.getInitialState();
				}
				tokenize(d, m, r) {
					throw new Error("Not supported!");
				}
				tokenizeEncoded(d, m, r) {
					return d.length >= this.c.get()
						? (0, t.$aV)(this.a, r)
						: this.b.tokenizeEncoded(d, m, r);
				}
				createBackgroundTokenizer(d, m) {
					if (this.b.createBackgroundTokenizer)
						return this.b.createBackgroundTokenizer(d, m);
				}
			}
			e.$vyc = E;
		}),
		