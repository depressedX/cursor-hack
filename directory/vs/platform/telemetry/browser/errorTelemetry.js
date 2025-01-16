define(de[2795], he([1, 0, 75, 29, 3, 2794]), function (ce, e, t, i, w, E) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (E = xi(E));
		class C extends E.default {
			i() {
				let m;
				const r = this;
				typeof t.$Bfb.onerror == "function" && (m = t.$Bfb.onerror),
					(t.$Bfb.onerror = function (u, a, h, c, n) {
						r.n(u, a, h, c, n), m?.apply(this, [u, a, h, c, n]);
					}),
					this.h.add(
						(0, w.$Yc)(() => {
							m && (t.$Bfb.onerror = m);
						}),
					);
			}
			n(m, r, u, a, h) {
				const c = { callstack: m, msg: m, file: r, line: u, column: a };
				if (h) {
					if (i.$fb.isErrorNoTelemetry(h)) return;
					const { name: n, message: g, stack: p } = h;
					(c.uncaught_error_name = n),
						g && (c.uncaught_error_msg = g),
						p &&
							(c.callstack = Array.isArray(h.stack)
								? (h.stack = h.stack.join(`
`))
								: h.stack);
				}
				this.k(c);
			}
		}
		e.default = C;
	}),
		