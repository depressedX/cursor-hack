import '../../../require.js';
import '../../../exports.js';
import '../core/index.js';
import '../utils/index.js';
define(de[386], he([1, 0, 144, 80]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*index*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.WINDOW = void 0),
				(e.shouldIgnoreOnError = E),
				(e.ignoreNextOnError = C),
				(e.wrap = d),
				(e.WINDOW = i.GLOBAL_OBJ);
			let w = 0;
			function E() {
				return w > 0;
			}
			function C() {
				w++,
					setTimeout(() => {
						w--;
					});
			}
			function d(m, r = {}, u) {
				if (typeof m != "function") return m;
				try {
					const h = m.__sentry_wrapped__;
					if (h) return typeof h == "function" ? h : m;
					if ((0, i.getOriginalFunction)(m)) return m;
				} catch {
					return m;
				}
				const a = function () {
					const h = Array.prototype.slice.call(arguments);
					try {
						u && typeof u == "function" && u.apply(this, arguments);
						const c = h.map((n) => d(n, r));
						return m.apply(this, c);
					} catch (c) {
						throw (
							(C(),
							(0, t.withScope)((n) => {
								n.addEventProcessor(
									(g) => (
										r.mechanism &&
											((0, i.addExceptionTypeValue)(g, void 0, void 0),
											(0, i.addExceptionMechanism)(g, r.mechanism)),
										(g.extra = { ...g.extra, arguments: h }),
										g
									),
								),
									(0, t.captureException)(c);
							}),
							c)
						);
					}
				};
				try {
					for (const h in m)
						Object.prototype.hasOwnProperty.call(m, h) && (a[h] = m[h]);
				} catch {}
				(0, i.markFunctionWrapped)(a, m),
					(0, i.addNonEnumerableProperty)(m, "__sentry_wrapped__", a);
				try {
					Object.getOwnPropertyDescriptor(a, "name").configurable &&
						Object.defineProperty(a, "name", {
							get() {
								return m.name;
							},
						});
				} catch {}
				return a;
			}
		})
