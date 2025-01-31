import '../../../../../require.js';
import '../../../../../exports.js';
import '../../dom.js';
import '../../../../css!vs/base/browser/ui/aria/aria.js';
define(de[127], he([1, 0, 7, 2231]), function (ce /*require*/,
 e /*exports*/,
 t /*dom*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$nib = r),
				(e.$oib = u),
				(e.$pib = a),
				(t = mt(t));
			const i = 2e4;
			let w, E, C, d, m;
			function r(c) {
				(w = document.createElement("div")),
					(w.className = "monaco-aria-container");
				const n = () => {
					const p = document.createElement("div");
					return (
						(p.className = "monaco-alert"),
						p.setAttribute("role", "alert"),
						p.setAttribute("aria-atomic", "true"),
						w.appendChild(p),
						p
					);
				};
				(E = n()), (C = n());
				const g = () => {
					const p = document.createElement("div");
					return (
						(p.className = "monaco-status"),
						p.setAttribute("aria-live", "polite"),
						p.setAttribute("aria-atomic", "true"),
						w.appendChild(p),
						p
					);
				};
				(d = g()), (m = g()), c.appendChild(w);
			}
			function u(c) {
				w &&
					(E.textContent !== c ? (t.$9fb(C), h(E, c)) : (t.$9fb(E), h(C, c)));
			}
			function a(c) {
				w &&
					(d.textContent !== c ? (t.$9fb(m), h(d, c)) : (t.$9fb(d), h(m, c)));
			}
			function h(c, n) {
				t.$9fb(c),
					n.length > i && (n = n.substr(0, i)),
					(c.textContent = n),
					(c.style.visibility = "hidden"),
					(c.style.visibility = "visible");
			}
		})
