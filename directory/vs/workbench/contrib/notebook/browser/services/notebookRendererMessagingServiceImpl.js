import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../services/extensions/common/extensions.js';
define(de[3311], he([1, 0, 6, 3, 53]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*extensions*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$sFc = void 0);
			let E = class extends i.$1c {
				constructor(d) {
					super(),
						(this.f = d),
						(this.a = new Map()),
						(this.b = new Map()),
						(this.c = this.D(new t.$re())),
						(this.onShouldPostMessage = this.c.event);
				}
				receiveMessage(d, m, r) {
					if (d === void 0) {
						const u = [...this.b.values()].map((a) =>
							a.receiveMessageHandler?.(m, r),
						);
						return Promise.all(u).then((a) => a.some((h) => !!h));
					}
					return (
						this.b.get(d)?.receiveMessageHandler?.(m, r) ?? Promise.resolve(!1)
					);
				}
				prepare(d) {
					if (this.a.has(d)) return;
					const m = [];
					this.a.set(d, m),
						this.f.activateByEvent(`onRenderer:${d}`).then(() => {
							for (const r of m) this.c.fire(r);
							this.a.set(d, void 0);
						});
				}
				getScoped(d) {
					const m = this.b.get(d);
					if (m) return m;
					const r = {
						postMessage: (u, a) => this.g(d, u, a),
						dispose: () => this.b.delete(d),
					};
					return this.b.set(d, r), r;
				}
				g(d, m, r) {
					this.a.has(m) || this.prepare(m);
					const u = this.a.get(m),
						a = { rendererId: m, editorId: d, message: r };
					u === void 0 ? this.c.fire(a) : u.push(a);
				}
			};
			(e.$sFc = E), (e.$sFc = E = Ne([j(0, w.$q2)], E));
		})
