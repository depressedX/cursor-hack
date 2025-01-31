import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import '../types.js';
define(de[2092], he([1, 0, 80, 366]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*types*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.addHistoryInstrumentationHandler = E);
			let w;
			function E(d) {
				const m = "history";
				(0, t.addHandler)(m, d), (0, t.maybeInstrument)(m, C);
			}
			function C() {
				if (!(0, t.supportsHistory)()) return;
				const d = i.WINDOW.onpopstate;
				i.WINDOW.onpopstate = function (...r) {
					const u = i.WINDOW.location.href,
						a = w;
					w = u;
					const h = { from: a, to: u };
					if (((0, t.triggerHandlers)("history", h), d))
						try {
							return d.apply(this, r);
						} catch {}
				};
				function m(r) {
					return function (...u) {
						const a = u.length > 2 ? u[2] : void 0;
						if (a) {
							const h = w,
								c = String(a);
							w = c;
							const n = { from: h, to: c };
							(0, t.triggerHandlers)("history", n);
						}
						return r.apply(this, u);
					};
				}
				(0, t.fill)(i.WINDOW.history, "pushState", m),
					(0, t.fill)(i.WINDOW.history, "replaceState", m);
			}
		})
