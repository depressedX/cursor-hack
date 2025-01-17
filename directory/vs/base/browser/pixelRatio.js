import '../../../require.js';
import '../../../exports.js';
import './dom.js';
import '../common/event.js';
import '../common/lifecycle.js';
define(de[345], he([1, 0, 7, 6, 3]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$sjb = void 0);
			class E extends w.$1c {
				constructor(r) {
					super(),
						(this.a = this.D(new i.$re())),
						(this.onDidChange = this.a.event),
						(this.b = () => this.f(r, !0)),
						(this.c = null),
						this.f(r, !1);
				}
				f(r, u) {
					this.c?.removeEventListener("change", this.b),
						(this.c = r.matchMedia(`(resolution: ${r.devicePixelRatio}dppx)`)),
						this.c.addEventListener("change", this.b),
						u && this.a.fire();
				}
			}
			class C extends w.$1c {
				get value() {
					return this.b;
				}
				constructor(r) {
					super(),
						(this.a = this.D(new i.$re())),
						(this.onDidChange = this.a.event),
						(this.b = this.c(r));
					const u = this.D(new E(r));
					this.D(
						u.onDidChange(() => {
							(this.b = this.c(r)), this.a.fire(this.b);
						}),
					);
				}
				c(r) {
					const u = document.createElement("canvas").getContext("2d"),
						a = r.devicePixelRatio || 1,
						h =
							u.webkitBackingStorePixelRatio ||
							u.mozBackingStorePixelRatio ||
							u.msBackingStorePixelRatio ||
							u.oBackingStorePixelRatio ||
							u.backingStorePixelRatio ||
							1;
					return a / h;
				}
			}
			class d {
				constructor() {
					this.a = new Map();
				}
				b(r) {
					const u = (0, t.getWindowId)(r);
					let a = this.a.get(u);
					return (
						a ||
							((a = (0, w.$Tc)(new C(r))),
							this.a.set(u, a),
							(0, w.$Tc)(
								i.Event.once(t.onDidUnregisterWindow)(
									({ vscodeWindowId: h }) => {
										h === u && (a?.dispose(), this.a.delete(u));
									},
								),
							)),
						a
					);
				}
				getInstance(r) {
					return this.b(r);
				}
			}
			e.$sjb = new d();
		}),
		