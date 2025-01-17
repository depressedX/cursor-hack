import '../../../require.js';
import '../../../exports.js';
define(de[1497], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Kpb = void 0);
			class t {
				constructor(w) {
					(this.g = w),
						(this.a = []),
						(this.c = void 0),
						(this.d = void 0),
						(this.f = !1),
						(this.h = void 0),
						(this.b = new Promise((E, C) => {
							(this.c = E), (this.d = C);
						}));
				}
				push(w) {
					this.a.push(w), this.c && this.c();
				}
				end() {
					this.c && this.c(), (this.f = !0);
				}
				error(w) {
					this.d && this.d(w), (this.h = w);
				}
				i() {
					const w = this;
					this.b = new Promise((E, C) => {
						(this.c = E), (this.d = C);
					}).catch((E) => {
						w.h = E;
					});
				}
				[Symbol.asyncIterator]() {
					const w = this.g;
					return {
						next: async () => {
							try {
								if (this.h !== void 0) throw this.h;
								if (this.a.length > 0)
									return { done: !1, value: this.a.shift() };
								if (this.f) return { done: !0, value: void 0 };
								const E = await Promise.race([
									this.b.then(() => !1),
									new Promise((C) => setTimeout(() => C(!0), w)),
								]);
								if (this.h !== void 0) throw this.h;
								if (this.a.length > 0)
									return { done: !1, value: this.a.shift() };
								if (E || this.f) return { done: !0, value: void 0 };
								throw new Error("AsyncIterPushable: should not be here");
							} finally {
								this.i();
							}
						},
					};
				}
			}
			e.$Kpb = t;
		}),
		