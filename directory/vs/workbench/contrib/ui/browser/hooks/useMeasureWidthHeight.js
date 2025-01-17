import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/browser/dom.js';
define(de[693], he([1, 0, 13, 7]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$A$b = w);
			function w(E, C) {
				const [d, m] = (0, t.createSignal)(C ?? { width: 0, height: 0 });
				return (
					(0, t.createEffect)(() => {
						const r = E();
						if (!r) return;
						const u = (0, i.$Ogb)(),
							a = new u.ResizeObserver((h) => {
								for (const c of h) {
									const { width: n, height: g } = c.contentRect;
									m({ width: n, height: g });
								}
							});
						a.observe(r), (0, t.onCleanup)(() => a.disconnect());
					}),
					d
				);
			}
		}),
		