define(de[2119], he([1, 0, 80, 234, 263]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.initAndBind = E),
				(e.setCurrentClient = C);
			function E(d, m) {
				m.debug === !0 &&
					(w.DEBUG_BUILD
						? t.logger.enable()
						: (0, t.consoleSandbox)(() => {
								console.warn(
									"[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.",
								);
							})),
					(0, i.getCurrentScope)().update(m.initialScope);
				const u = new d(m);
				return C(u), u.init(), u;
			}
			function C(d) {
				(0, i.getCurrentScope)().setClient(d);
			}
		}),
		