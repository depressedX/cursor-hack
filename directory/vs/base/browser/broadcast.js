import '../../../require.js';
import '../../../exports.js';
import './window.js';
import '../common/errors.js';
import '../common/event.js';
import '../common/lifecycle.js';
define(de[2224], he([1, 0, 75, 29, 6, 3]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Efb = void 0);
			class C extends E.$1c {
				constructor(m) {
					if (
						(super(),
						(this.c = m),
						(this.b = this.D(new w.$re())),
						(this.onDidReceiveData = this.b.event),
						"BroadcastChannel" in t.$Bfb)
					)
						try {
							this.a = new BroadcastChannel(m);
							const r = (u) => {
								this.b.fire(u.data);
							};
							this.a.addEventListener("message", r),
								this.D(
									(0, E.$Yc)(() => {
										this.a &&
											(this.a.removeEventListener("message", r),
											this.a.close());
									}),
								);
						} catch (r) {
							console.warn(
								"Error while creating broadcast channel. Falling back to localStorage.",
								(0, i.$bb)(r),
							);
						}
					this.a || ((this.c = `BroadcastDataChannel.${m}`), this.f());
				}
				f() {
					const m = (r) => {
						r.key === this.c &&
							r.newValue &&
							this.b.fire(JSON.parse(r.newValue));
					};
					t.$Bfb.addEventListener("storage", m),
						this.D((0, E.$Yc)(() => t.$Bfb.removeEventListener("storage", m)));
				}
				postData(m) {
					this.a
						? this.a.postMessage(m)
						: (localStorage.removeItem(this.c),
							localStorage.setItem(this.c, JSON.stringify(m)));
				}
			}
			e.$Efb = C;
		}),
		