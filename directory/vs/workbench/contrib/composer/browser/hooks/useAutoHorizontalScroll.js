import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/solid.js';
define(de[1727], he([1, 0, 13]), function (ce /*require*/,
 e /*exports*/,
 t /*solid*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.useAutoHorizontalScroll = i);
			function i(w, E, C, d, m) {
				(0, t.createEffect)(
					(0, t.on)([d, ...(m ? [m] : [])], () => {
						if (!(m && m()) && C())
							try {
								const r = E();
								if (!r) return;
								const u = CSS.escape(C()),
									a = r.querySelector(`#${u}`);
								if (!a) return;
								const h = a.offsetLeft,
									c = a.offsetWidth,
									n = r.clientWidth,
									g = w.getCurrentScrollPosition().scrollLeft;
								let p = g;
								h < g ? (p = h) : h + c > g + n && (p = h + c - n),
									w.setScrollPositionNow({ scrollLeft: p }),
									d();
							} catch (r) {
								console.error("Error in useAutoHorizontalScroll effect:", r);
							}
					}),
				);
			}
		}),
		