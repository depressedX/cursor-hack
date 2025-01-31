import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import './global.js';
import './sentry.js';
define(de[2870], he([1, 0, 3, 1210, 1668]), function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*global*/,
 w /*sentry*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$p3c = m),
				(w = mt(w));
			function E(r, u) {
				return u.onProcessConfigUpdate((a) => {
					((0, i.getProcessGlobalState)().enabled = a.enabled),
						((0, i.getProcessGlobalState)().loggerSampleRate =
							a.loggerSampleRate),
						((0, i.getProcessGlobalState)().tracesSampleRate =
							a.tracesSampleRate);
				});
			}
			function C(r, u, a = w.makePromiseBuffer(64)) {
				const h = {
						flush: (n) => a.drain(n),
						send: (n) =>
							a
								.add(() => u.sendEnvelope(r, n))
								.then(
									(g) => ({ statusCode: 200 }),
									(g) => {
										if (g instanceof w.SentryError) return {};
										throw g;
									},
								),
					},
					c = (0, i.getProcessGlobalState)().buffer;
				for (const n of c) h.send(n);
				return (
					((0, i.getProcessGlobalState)().buffer = []),
					((0, i.getProcessGlobalState)().transport = h),
					t.$1c.None
				);
			}
			function d(r, u) {
				if (r === "main") return t.$1c.None;
				const a = (h) => {
					const c = {};
					h.breadcrumbs.length > 0 && (c.breadcrumbs = h.breadcrumbs),
						Object.keys(c).length > 0 && u.sendScopeUpdate(r, c);
				};
				return (
					w.getIsolationScope().addScopeListener((h) => {
						a(h.getScopeData()), w.getIsolationScope().clearBreadcrumbs();
					}),
					a(w.getIsolationScope().getScopeData()),
					w.getIsolationScope().clearBreadcrumbs(),
					t.$1c.None
				);
			}
			function m(r, u) {
				const a = new t.$Zc();
				return a.add(E(r, u)), a.add(C(r, u)), a.add(d(r, u)), a;
			}
		})
