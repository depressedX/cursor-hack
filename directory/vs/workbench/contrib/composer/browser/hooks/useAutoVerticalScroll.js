import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/solid.js';
define(de[794], he([1, 0, 13]), function (ce /*require*/,
 e /*exports*/,
 t /*solid*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.useAutoVerticalScroll = i);
			function i(w, E, C, d, m = {}) {
				(0, t.createEffect)(
					(0, t.on)(d, () => {
						const r = () => {
							const u = E();
							if (!u) return;
							const a = C();
							if (/\s/.test(a)) {
								console.error("useAutoVerticalScroll: id contains a space", a);
								return;
							}
							if (a === "") return;
							const h = CSS.escape(a),
								c = u.querySelector(`#${a}`);
							if (!c) return;
							const n = c.offsetTop,
								{ paddingToEdge: g = 0 } = m,
								{ scrollTop: p } = w.getCurrentScrollPosition(),
								{ height: o, scrollHeight: f } = w.getScrollDimensions(),
								b = n + c.offsetHeight;
							let s = p;
							n < p
								? (s = Math.max(0, n - g))
								: b > p + o && (s = Math.min(f - o, b - o + g)),
								s !== p &&
									(w.setScrollPositionNow({ scrollTop: s }), m.onScroll?.());
						};
						m.shouldRunInNextTick ? setTimeout(r) : r();
					}),
				);
			}
		})
