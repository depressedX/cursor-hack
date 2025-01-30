import '../../../../require.js';
import '../../../../exports.js';
define(Pe[502], Ne([1, 0]), function (we, t) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$H3c = void 0);
			class e {
				constructor() {
					this.b = new Map();
				}
				static {
					this.a = 1;
				}
				async createNewMessage(S) {
					try {
						const N = await this.c();
						if (N) {
							const P = String(e.a++);
							return this.b.set(P, N), { id: P, data: N.createNewMessage(S) };
						}
					} catch {}
					return { id: "", data: S };
				}
				async validate(S, N) {
					if (!S.id) return !0;
					const P = this.b.get(S.id);
					if (!P) return !1;
					this.b.delete(S.id);
					try {
						return P.validate(N) === "ok";
					} catch {
						return !1;
					} finally {
						P.dispose?.();
					}
				}
				async sign(S) {
					try {
						return await this.d(S);
					} catch {}
					return S;
				}
			}
			t.$H3c = e;
		}),
		