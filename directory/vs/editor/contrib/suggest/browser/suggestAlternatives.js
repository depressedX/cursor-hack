import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/contextkey/common/contextkey.js';
define(de[2712], he([1, 0, 8]), function (ce /*require*/,
 e /*exports*/,
 t /*contextkey*/) {
			"use strict";
			var i;
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$IDb = void 0);
			let w = class {
				static {
					i = this;
				}
				static {
					this.OtherSuggestions = new t.$5j("hasOtherSuggestions", !1);
				}
				constructor(C, d) {
					(this.g = C), (this.b = 0), (this.a = i.OtherSuggestions.bindTo(d));
				}
				dispose() {
					this.reset();
				}
				reset() {
					this.a.reset(),
						this.e?.dispose(),
						(this.c = void 0),
						(this.d = void 0),
						(this.f = !1);
				}
				set({ model: C, index: d }, m) {
					if (C.items.length === 0) {
						this.reset();
						return;
					}
					if (i.h(!0, C, d) === d) {
						this.reset();
						return;
					}
					(this.d = m),
						(this.c = C),
						(this.b = d),
						(this.e = this.g.onDidChangeCursorPosition(() => {
							this.f || this.reset();
						})),
						this.a.set(!0);
				}
				static h(C, d, m) {
					let r = m;
					for (
						let u = d.items.length;
						u > 0 &&
						((r = (r + d.items.length + (C ? 1 : -1)) % d.items.length),
						!(r === m || !d.items[r].completion.additionalTextEdits));
						u--
					);
					return r;
				}
				next() {
					this.i(!0);
				}
				prev() {
					this.i(!1);
				}
				i(C) {
					if (this.c)
						try {
							(this.f = !0),
								(this.b = i.h(C, this.c, this.b)),
								this.d({
									index: this.b,
									item: this.c.items[this.b],
									model: this.c,
								});
						} finally {
							this.f = !1;
						}
				}
			};
			(e.$IDb = w), (e.$IDb = w = i = Ne([j(1, t.$6j)], w));
		}),
		