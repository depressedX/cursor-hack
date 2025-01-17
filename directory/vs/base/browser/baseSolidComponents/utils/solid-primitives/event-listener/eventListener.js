import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../utils/utils.js';
import '../../../../../../../external/solid/solid.js';
import '../../../../../../../external/solid/web.js';
define(de[898], he([1, 0, 302, 13, 2]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$$kb = void 0),
				(e.$8kb = E),
				(e.$9kb = C),
				(e.$0kb = d);
			function E(r, u, a, h) {
				return (
					r.addEventListener(u, a, h),
					(0, t.$ikb)(r.removeEventListener.bind(r, u, a, h))
				);
			}
			function C(r, u, a, h) {
				if (w.isServer) return;
				const c = () => {
					(0, t.$akb)((0, t.$_jb)(r)).forEach((n) => {
						n && (0, t.$akb)((0, t.$_jb)(u)).forEach((g) => E(n, g, a, h));
					});
				};
				typeof r == "function"
					? (0, i.createEffect)(c)
					: (0, i.createRenderEffect)(c);
			}
			function d(r, u, a) {
				if (w.isServer) return () => {};
				const [h, c] = (0, i.createSignal)();
				return C(r, u, c, a), h;
			}
			const m = (r, u) => {
				(0, i.createEffect)(() => {
					const [a, h, c] = u();
					E(r, a, h, c);
				});
			};
			e.$$kb = m;
		}),
		