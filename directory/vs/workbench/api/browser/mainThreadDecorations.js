import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/uri.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../common/extHost.protocol.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../services/decorations/common/decorations.js';
import '../../../base/common/cancellation.js';
define(
			de[3343],
			he([1, 0, 9, 6, 3, 88, 101, 472, 33]),
			function (ce /*require*/,
 e /*exports*/,
 t /*uri*/,
 i /*event*/,
 w /*lifecycle*/,
 E /*extHost.protocol*/,
 C /*extHostCustomers*/,
 d /*decorations*/,
 m /*cancellation*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ymc = void 0);
				class r {
					constructor(h, c) {
						(this.e = h),
							(this.f = c),
							(this.a = 0),
							(this.b = new Map()),
							(this.c = new Map());
					}
					enqueue(h, c) {
						const n = ++this.a,
							g = new Promise((o) => {
								this.b.set(n, { id: n, uri: h }), this.c.set(n, o), this.g();
							}),
							p = c.onCancellationRequested(() => {
								this.b.delete(n), this.c.delete(n);
							});
						return g.finally(() => p.dispose());
					}
					g() {
						typeof this.d != "number" &&
							(this.d = setTimeout(() => {
								const h = this.b,
									c = this.c;
								this.e
									.$provideDecorations(
										this.f,
										[...h.values()],
										m.CancellationToken.None,
									)
									.then((n) => {
										for (const [g, p] of c) p(n[g]);
									}),
									(this.b = new Map()),
									(this.c = new Map()),
									(this.d = void 0);
							}, 0));
					}
				}
				let u = class {
					constructor(h, c) {
						(this.c = c),
							(this.a = new Map()),
							(this.b = h.getProxy(E.$mbb.ExtHostDecorations));
					}
					dispose() {
						this.a.forEach((h) => (0, w.$Vc)(h)), this.a.clear();
					}
					$registerDecorationProvider(h, c) {
						const n = new i.$re(),
							g = new r(this.b, h),
							p = this.c.registerDecorationsProvider({
								label: c,
								onDidChange: n.event,
								provideDecorations: async (o, f) => {
									const b = await g.enqueue(o, f);
									if (!b) return;
									const [s, l, y, $] = b;
									return {
										weight: 10,
										bubble: s ?? !1,
										color: $?.id,
										tooltip: l,
										letter: y,
									};
								},
							});
						this.a.set(h, [n, p]);
					}
					$onDidChange(h, c) {
						const n = this.a.get(h);
						if (n) {
							const [g] = n;
							g.fire(c && c.map((p) => t.URI.revive(p)));
						}
					}
					$unregisterDecorationProvider(h) {
						const c = this.a.get(h);
						c && ((0, w.$Vc)(c), this.a.delete(h));
					}
				};
				(e.$Ymc = u),
					(e.$Ymc = u =
						Ne([(0, C.$tmc)(E.$lbb.MainThreadDecorations), j(1, d.$sPb)], u));
			},
		)
