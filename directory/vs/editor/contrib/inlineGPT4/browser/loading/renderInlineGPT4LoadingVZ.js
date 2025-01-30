import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/browser/dom.js';
define(de[2700], he([1, 0, 2, 2, 13, 7]), function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*solid*/,
 E /*dom*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Xdc = d),
				(E = mt(E));
			const C = (0, t.template)("<div>");
			function d(m, r) {
				const [u, a] = (0, w.createSignal)(1),
					h = E.getWindow(m);
				return (
					(0, w.createEffect)(() => {
						a(1);
						const c = h.setInterval(() => {
							a((n) => (n === 3 ? 1 : n + 1));
						}, 175);
						(0, w.onCleanup)(() => {
							h.clearInterval(c);
						});
					}),
					r.reactiveStorageRoot.render(
						() =>
							(() => {
								const c = C();
								return (
									c.style.setProperty("display", "flex"),
									c.style.setProperty("position", "absolute"),
									c.style.setProperty("align-items", "center"),
									c.style.setProperty("height", "12px"),
									c.style.setProperty("overflow", "hidden"),
									c.style.setProperty("z-index", "100"),
									c.style.setProperty("font-size", "8px"),
									c.style.setProperty("left", "40px"),
									(0, i.insert)(c, () => ".".repeat(u())),
									c
								);
							})(),
						m,
					)
				);
			}
		}),
		