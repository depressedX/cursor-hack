import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../nls.js';
import '../../../../platform/quickinput/common/quickInput.js';
define(de[3071], he([1, 0, 3, 4, 63]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$t2c = void 0);
			let E = class extends t.$1c {
				constructor(d, m) {
					super(), (this.a = d), (this.b = m);
				}
				async show() {
					const d = [];
					this.a.getColumnLabels().forEach((a, h) => {
						a && d.push({ label: a, index: h });
					});
					const m = await this.b.pick(d, {
						placeHolder: (0, i.localize)(7351, null),
					});
					if (!m) return;
					const r = await this.b.input({
							placeHolder: (0, i.localize)(7352, null),
							prompt: (0, i.localize)(7353, null, m.label),
							validateInput: (a) => this.c(a),
						}),
						u = r ? Number.parseInt(r) : void 0;
					u && this.a.resizeColumn(m.index, u);
				}
				async c(d) {
					const m = Number.parseInt(d);
					return d && !Number.isInteger(m)
						? (0, i.localize)(7354, null)
						: m < 0 || m > 100
							? (0, i.localize)(7355, null)
							: null;
				}
			};
			(e.$t2c = E), (e.$t2c = E = Ne([j(1, w.$DJ)], E));
		}),
		