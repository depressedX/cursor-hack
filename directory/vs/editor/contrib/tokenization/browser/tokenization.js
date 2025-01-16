define(de[2813], he([1, 0, 162, 46, 4]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (w = mt(w));
			class E extends i.$itb {
				constructor() {
					super({
						id: "editor.action.forceRetokenize",
						label: w.localize(1552, null),
						alias: "Developer: Force Retokenize",
						precondition: void 0,
					});
				}
				run(d, m) {
					if (!m.hasModel()) return;
					const r = m.getModel();
					r.tokenization.resetTokenization();
					const u = new t.$le();
					r.tokenization.forceTokenization(r.getLineCount()),
						u.stop(),
						console.log(`tokenization took ${u.elapsed()}`);
				}
			}
			(0, i.$ntb)(E);
		}),
		