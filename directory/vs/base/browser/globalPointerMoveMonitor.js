import '../../../require.js';
import '../../../exports.js';
import './dom.js';
import '../common/lifecycle.js';
define(de[757], he([1, 0, 7, 3]), function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*lifecycle*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Thb = void 0),
				(t = mt(t));
			class w {
				constructor() {
					(this.a = new i.$Zc()), (this.b = null), (this.c = null);
				}
				dispose() {
					this.stopMonitoring(!1), this.a.dispose();
				}
				stopMonitoring(C, d) {
					if (!this.isMonitoring()) return;
					this.a.clear(), (this.b = null);
					const m = this.c;
					(this.c = null), C && m && m(d);
				}
				isMonitoring() {
					return !!this.b;
				}
				startMonitoring(C, d, m, r, u) {
					this.isMonitoring() && this.stopMonitoring(!1),
						(this.b = r),
						(this.c = u);
					let a = C;
					try {
						C.setPointerCapture(d),
							this.a.add(
								(0, i.$Yc)(() => {
									try {
										C.releasePointerCapture(d);
									} catch {}
								}),
							);
					} catch {
						a = t.getWindow(C);
					}
					this.a.add(
						t.$0fb(a, t.$$gb.POINTER_MOVE, (h) => {
							if (h.buttons !== m) {
								this.stopMonitoring(!0);
								return;
							}
							h.preventDefault(), this.b(h);
						}),
					),
						this.a.add(
							t.$0fb(a, t.$$gb.POINTER_UP, (h) => this.stopMonitoring(!0)),
						);
				}
			}
			e.$Thb = w;
		})
