define(
			de[3993],
			he([1, 0, 1281, 42, 118, 45]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$SZc = void 0);
				let C = class {
					constructor(m, r, u, a, h) {
						(this.a = m),
							(this.b = r),
							(this.c = u),
							(this.d = a),
							(this.e = h),
							(this.f = new AbortController());
					}
					update_IS_CALLED_ON_EVERY_KEYSTROKE_SO_BE_CAREFUL(m, r) {
						this.f.signal.aborted;
					}
					async blockForFinalInput(m, r) {
						return "fallBackToCachedReranked";
					}
					freeze() {
						this.f.abort();
					}
					unfreeze() {
						this.f = new AbortController();
					}
					dispose() {
						this.f.abort();
					}
				};
				(e.$SZc = C),
					(e.$SZc = C =
						Ne([j(1, t.$b0b), j(2, i.$MO), j(3, w.$Nfc), j(4, E.$0zb)], C));
			},
		),
		