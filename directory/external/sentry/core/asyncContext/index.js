define(de[733], he([1, 0, 578, 2104]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.setAsyncContextStrategy = w),
				(e.getAsyncContextStrategy = E);
			function w(C) {
				const d = (0, t.getMainCarrier)(),
					m = (0, t.getSentryCarrier)(d);
				m.acs = C;
			}
			function E(C) {
				const d = (0, t.getSentryCarrier)(C);
				return d.acs ? d.acs : (0, i.getStackAsyncContextStrategy)();
			}
		}),
		define(
			de[234],
			he([1, 0, 80, 733, 578, 732]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.getCurrentScope = C),
					(e.getIsolationScope = d),
					(e.getGlobalScope = m),
					(e.withScope = r),
					(e.withIsolationScope = u),
					(e.getClient = a);
				function C() {
					const h = (0, w.getMainCarrier)();
					return (0, i.getAsyncContextStrategy)(h).getCurrentScope();
				}
				function d() {
					const h = (0, w.getMainCarrier)();
					return (0, i.getAsyncContextStrategy)(h).getIsolationScope();
				}
				function m() {
					return (0, t.getGlobalSingleton)("globalScope", () => new E.Scope());
				}
				function r(...h) {
					const c = (0, w.getMainCarrier)(),
						n = (0, i.getAsyncContextStrategy)(c);
					if (h.length === 2) {
						const [g, p] = h;
						return g ? n.withSetScope(g, p) : n.withScope(p);
					}
					return n.withScope(h[0]);
				}
				function u(...h) {
					const c = (0, w.getMainCarrier)(),
						n = (0, i.getAsyncContextStrategy)(c);
					if (h.length === 2) {
						const [g, p] = h;
						return g ? n.withSetIsolationScope(g, p) : n.withIsolationScope(p);
					}
					return n.withIsolationScope(h[0]);
				}
				function a() {
					return C().getClient();
				}
			},
		),
		