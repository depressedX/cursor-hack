import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/event.js';
import '../../../base/browser/dom.js';
define(de[1585], he([1, 0, 3, 6, 7]), function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*event*/,
 w /*dom*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$isb = void 0);
			class E extends t.$1c {
				constructor(d, m) {
					super(),
						(this.a = this.D(new i.$re())),
						(this.onDidChange = this.a.event),
						(this.b = d),
						(this.c = -1),
						(this.f = -1),
						(this.g = null),
						this.h(!1, m);
				}
				dispose() {
					this.stopObserving(), super.dispose();
				}
				getWidth() {
					return this.c;
				}
				getHeight() {
					return this.f;
				}
				startObserving(d = !1) {
					if (!this.g && this.b) {
						let m = null;
						const r = () => {
							m
								? this.observe({ width: m.width, height: m.height }, d)
								: this.observe(void 0, d);
						};
						let u = !1,
							a = !1;
						const h = () => {
								if (u && !a)
									try {
										(u = !1), (a = !0), r();
									} finally {
										(0, w.$hgb)((0, w.getWindow)(this.b), () => {
											(a = !1), h();
										});
									}
							},
							c = (0, w.getWindow)(this.b)?.ResizeObserver;
						(this.g = new c((n) => {
							n && n[0] && n[0].contentRect
								? (m = {
										width: n[0].contentRect.width,
										height: n[0].contentRect.height,
									})
								: (m = null),
								(u = !0),
								h();
						})),
							this.g.observe(this.b);
					}
				}
				stopObserving() {
					this.g && (this.g.disconnect(), (this.g = null));
				}
				observe(d, m = !1) {
					this.h(!0, d, m);
				}
				h(d, m, r = !1) {
					let u = 0,
						a = 0;
					m
						? ((u = m.width), (a = m.height))
						: this.b && ((u = this.b.clientWidth), (a = this.b.clientHeight)),
						(u = Math.max(5, u)),
						(a = Math.max(5, a)),
						(this.c !== u || this.f !== a) &&
							((this.c = u),
							r ? (this.f = Math.max(a, this.b.clientHeight)) : (this.f = a),
							d && this.a.fire());
				}
			}
			e.$isb = E;
		}),
		