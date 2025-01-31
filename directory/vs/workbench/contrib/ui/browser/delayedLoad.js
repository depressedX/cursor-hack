import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/solid.js';
import '../../../../../external/solid/solid.js';
import '../../controlCommon/browser/solid.js';
define(de[1370], he([1, 0, 2, 13, 13, 36]), function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*solid*/,
 w /*solid*/,
 E /*solid*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$2cc = C);
			function C(d) {
				const m = (0, E.$odc)(),
					[r, u] = (0, i.createSignal)(!1),
					a = d.nonReactiveDelay;
				return (
					(0, w.onMount)(() => {
						if (a === 0) {
							u(!0), d.onLoad?.();
							return;
						}
						const h = m.window.requestIdleCallback(
							() => {
								u(!0), d.onLoad?.();
							},
							{ timeout: a },
						);
						(0, w.onCleanup)(() => clearTimeout(h));
					}),
					(0, t.createComponent)(w.Show, {
						get when() {
							return r();
						},
						get fallback() {
							return d.fallback;
						},
						get children() {
							return d.children;
						},
					})
				);
			}
		})
