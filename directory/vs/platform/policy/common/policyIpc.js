import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import './policy.js';
define(de[2746], he([1, 0, 6, 3, 940]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*policy*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$l8c = e.$k8c = void 0);
			class E {
				constructor(m) {
					(this.b = m), (this.a = new i.$Zc());
				}
				listen(m, r) {
					switch (r) {
						case "onDidChange":
							return t.Event.map(
								this.b.onDidChange,
								(u) =>
									u.reduce(
										(a, h) => ({ ...a, [h]: this.b.getPolicyValue(h) ?? null }),
										{},
									),
								this.a,
							);
					}
					throw new Error(`Event not found: ${r}`);
				}
				call(m, r, u) {
					switch (r) {
						case "updatePolicyDefinitions":
							return this.b.updatePolicyDefinitions(u);
					}
					throw new Error(`Call not found: ${r}`);
				}
				dispose() {
					this.a.dispose();
				}
			}
			e.$k8c = E;
			class C extends w.$Lo {
				constructor(m, r) {
					super(), (this.a = r);
					for (const u in m) {
						const { definition: a, value: h } = m[u];
						(this.f[u] = a), h !== void 0 && this.g.set(u, h);
					}
					this.a.listen("onDidChange")((u) => {
						for (const a in u) {
							const h = u[a];
							h === null ? this.g.delete(a) : this.g.set(a, h);
						}
						this.h.fire(Object.keys(u));
					});
				}
				async j(m) {
					const r = await this.a.call("updatePolicyDefinitions", m);
					for (const u in r) this.g.set(u, r[u]);
				}
			}
			e.$l8c = C;
		})
