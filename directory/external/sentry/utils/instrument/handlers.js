define(de[726], he([1, 0, 577, 527, 725]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.addHandler = d),
				(e.resetInstrumentationHandlers = m),
				(e.maybeInstrument = r),
				(e.triggerHandlers = u);
			const E = {},
				C = {};
			function d(a, h) {
				(E[a] = E[a] || []), E[a].push(h);
			}
			function m() {
				Object.keys(E).forEach((a) => {
					E[a] = void 0;
				});
			}
			function r(a, h) {
				C[a] || (h(), (C[a] = !0));
			}
			function u(a, h) {
				const c = a && E[a];
				if (c)
					for (const n of c)
						try {
							n(h);
						} catch (g) {
							t.DEBUG_BUILD &&
								i.logger.error(
									`Error while triggering instrumentation handler.
Type: ${a}
Name: ${(0, w.getFunctionName)(n)}
Error:`,
									g,
								);
						}
			}
		}),
		