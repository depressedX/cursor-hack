import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
define(de[3106], he([1, 0, 6, 3]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$q2b = void 0);
			function w(C, d) {
				if (C.length !== d.length) return !1;
				for (let m = 0; m < C.length; m++)
					if (C[m].start !== d[m].start || C[m].end !== d[m].end) return !1;
				return !0;
			}
			class E extends i.$1c {
				constructor() {
					super(...arguments),
						(this.c = this.D(new t.$re())),
						(this.f = null),
						(this.g = []);
				}
				get onDidChangeSelection() {
					return this.c.event;
				}
				get selections() {
					return this.g;
				}
				get focus() {
					return this.f ?? { start: 0, end: 0 };
				}
				setState(d, m, r, u) {
					const a = d !== this.f || !w(this.g, m);
					(this.f = d), (this.g = m), (a || r) && this.c.fire(u);
				}
				setSelections(d, m, r) {
					this.setState(this.f, d, m, r);
				}
			}
			e.$q2b = E;
		}),
		