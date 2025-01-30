import '../../../require.js';
import '../../../exports.js';
import '../../solid/web.js';
import '../../solid/web.js';
import '../../solid/solid.js';
define(de[1106], he([1, 0, 2, 2, 13]), function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*solid*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.LexicalErrorBoundary = C);
			const E = (0, t.template)("<div>An error was thrown.");
			function C(d) {
				const m = () =>
					(() => {
						const r = E();
						return (
							r.style.setProperty("border", "1px solid #f00"),
							r.style.setProperty("color", "#f00"),
							r.style.setProperty("padding", "8px"),
							r
						);
					})();
				return (0, i.createComponent)(w.ErrorBoundary, {
					get fallback() {
						return d.onError || m;
					},
					get children() {
						return d.children;
					},
				});
			}
		}),
		