import '../../../require.js';
import '../../../exports.js';
import '../utils/index.js';
import './debug-build.js';
import './types.js';
define(de[2090], he([1, 0, 80, 878, 366]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*debug-build*/,
 w /*types*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.getNativeImplementation = C),
				(e.clearCachedImplementation = d),
				(e.fetch = m),
				(e.setTimeout = r);
			const E = {};
			function C(u) {
				const a = E[u];
				if (a) return a;
				let h = w.WINDOW[u];
				if ((0, t.isNativeFunction)(h)) return (E[u] = h.bind(w.WINDOW));
				const c = w.WINDOW.document;
				if (c && typeof c.createElement == "function")
					try {
						const n = c.createElement("iframe");
						(n.hidden = !0), c.head.appendChild(n);
						const g = n.contentWindow;
						g && g[u] && (h = g[u]), c.head.removeChild(n);
					} catch (n) {
						i.DEBUG_BUILD &&
							t.logger.warn(
								`Could not create sandbox iframe for ${u} check, bailing to window.${u}: `,
								n,
							);
					}
				return h && (E[u] = h.bind(w.WINDOW));
			}
			function d(u) {
				E[u] = void 0;
			}
			function m(...u) {
				return C("fetch")(...u);
			}
			function r(...u) {
				return C("setTimeout")(...u);
			}
		}),
		