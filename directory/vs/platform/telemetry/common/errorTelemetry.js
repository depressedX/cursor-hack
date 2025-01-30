import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arrays.js';
import '../../../base/common/errors.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/objects.js';
import '../../files/common/files.js';
define(
			de[2794],
			he([1, 0, 24, 29, 3, 82, 22]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*errors*/,
 w /*lifecycle*/,
 E /*objects*/,
 C /*files*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ErrorEvent = void 0);
				var d;
				(function (r) {
					function u(a, h) {
						return a.callstack < h.callstack
							? -1
							: a.callstack > h.callstack
								? 1
								: 0;
					}
					r.compare = u;
				})(d || (e.ErrorEvent = d = {}));
				class m {
					static {
						this.ERROR_FLUSH_TIMEOUT = 5 * 1e3;
					}
					constructor(u, a = m.ERROR_FLUSH_TIMEOUT) {
						(this.f = -1),
							(this.g = []),
							(this.h = new w.$Zc()),
							(this.c = u),
							(this.d = a);
						const h = i.$1.addListener((c) => this.j(c));
						this.h.add((0, w.$Yc)(h)), this.i();
					}
					dispose() {
						clearTimeout(this.f), this.l(), this.h.dispose();
					}
					i() {}
					j(u) {
						if (
							!u ||
							u.code ||
							(u.detail && u.detail.stack && (u = u.detail),
							i.$fb.isErrorNoTelemetry(u) ||
								u instanceof C.$Gl ||
								(typeof u?.message == "string" &&
									u.message.includes("Unable to read file")))
						)
							return;
						const a = Array.isArray(u.stack)
								? u.stack.join(`
`)
								: u.stack,
							h = u.message ? u.message : (0, E.$Ao)(u);
						a && this.k({ msg: h, callstack: a });
					}
					k(u) {
						const a = (0, t.$Ab)(this.g, u, d.compare);
						a < 0
							? ((u.count = 1), this.g.splice(~a, 0, u))
							: (this.g[a].count || (this.g[a].count = 0),
								(this.g[a].count += 1)),
							this.f === -1 &&
								(this.f = setTimeout(() => {
									this.l(), (this.f = -1);
								}, this.d));
					}
					l() {
						for (const u of this.g) this.c.publicLogError2("UnhandledError", u);
						this.g.length = 0;
					}
				}
				e.default = m;
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	