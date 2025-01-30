import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/instantiation.js';
define(
			de[1275],
			he([1, 0, 15, 33, 6, 3, 5]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*cancellation*/,
 w /*event*/,
 E /*lifecycle*/,
 C /*instantiation*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3oc = e.$2oc = void 0),
					(e.$2oc = (0, C.$Mi)("webviewViewService"));
				class d extends E.$1c {
					constructor() {
						super(...arguments),
							(this.a = new Map()),
							(this.b = new Map()),
							(this.c = this.D(new w.$re())),
							(this.onNewResolverRegistered = this.c.event);
					}
					register(r, u) {
						if (this.a.has(r))
							throw new Error(`View resolver already registered for ${r}`);
						this.a.set(r, u), this.c.fire({ viewType: r });
						const a = this.b.get(r);
						return (
							a &&
								u.resolve(a.webview, i.CancellationToken.None).then(() => {
									this.b.delete(r), a.resolve();
								}),
							(0, E.$Yc)(() => {
								this.a.delete(r);
							})
						);
					}
					resolve(r, u, a) {
						const h = this.a.get(r);
						if (!h) {
							if (this.b.has(r))
								throw new Error("View already awaiting revival");
							const { promise: c, resolve: n } = (0, t.$Fh)();
							return this.b.set(r, { webview: u, resolve: n }), c;
						}
						return h.resolve(u, a);
					}
				}
				e.$3oc = d;
			},
		),
		