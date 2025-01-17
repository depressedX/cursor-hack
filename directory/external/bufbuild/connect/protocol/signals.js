import '../../../../require.js';
import '../../../../exports.js';
import '../connect-error.js';
import '../code.js';
define(de[1082], he([1, 0, 213, 202]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.createLinkedAbortController = w),
				(e.createDeadlineSignal = E),
				(e.getAbortSignalReason = C);
			function w(...d) {
				const m = new AbortController(),
					r = d.filter((a) => a !== void 0).concat(m.signal);
				for (const a of r) {
					if (a.aborted) {
						u.apply(a);
						break;
					}
					a.addEventListener("abort", u);
				}
				function u() {
					m.signal.aborted || m.abort(C(this));
					for (const a of r) a.removeEventListener("abort", u);
				}
				return m;
			}
			function E(d) {
				const m = new AbortController(),
					r = () => {
						m.abort(
							new t.ConnectError(
								"the operation timed out",
								i.Code.DeadlineExceeded,
							),
						);
					};
				let u;
				return (
					d !== void 0 && (d <= 0 ? r() : (u = setTimeout(r, d))),
					{ signal: m.signal, cleanup: () => clearTimeout(u) }
				);
			}
			function C(d) {
				if (!d.aborted) return;
				if (d.reason !== void 0) return d.reason;
				const m = new Error("This operation was aborted");
				return (m.name = "AbortError"), m;
			}
		}),
		