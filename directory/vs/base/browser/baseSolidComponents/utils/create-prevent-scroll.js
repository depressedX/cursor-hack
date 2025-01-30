import '../../../../../require.js';
import '../../../../../exports.js';
import './utils.js';
import './solid-primitives/utils/utils.js';
import '../../../../../external/solid/solid.js';
define(de[2617], he([1, 0, 369, 302, 13]), function (ce /*require*/,
 e /*exports*/,
 t /*utils*/,
 i /*utils*/,
 w /*solid*/) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Vkb = r);
		const E = "data-kb-scroll-lock";
		function C(u, a) {
			if (!u) return () => {};
			const h = u.style.cssText;
			return (
				Object.assign(u.style, a),
				() => {
					u.style.cssText = h;
				}
			);
		}
		function d(u, a, h) {
			if (!u) return () => {};
			const c = u.style.getPropertyValue(a);
			return (
				u.style.setProperty(a, h),
				() => {
					c ? u.style.setProperty(a, c) : u.style.removeProperty(a);
				}
			);
		}
		function m(u) {
			const a = u.getBoundingClientRect().left;
			return Math.round(a) + u.scrollLeft ? "paddingLeft" : "paddingRight";
		}
		function r(u) {
			(0, w.createEffect)(() => {
				if (!(0, i.$_jb)(u.ownerRef) || (0, i.$_jb)(u.isDisabled)) return;
				const a = (0, t.$Rjb)((0, i.$_jb)(u.ownerRef)),
					h = (0, t.$Qjb)((0, i.$_jb)(u.ownerRef)),
					{ documentElement: c, body: n } = a;
				if (n.hasAttribute(E)) return;
				n.setAttribute(E, "");
				const p = h.innerWidth - c.clientWidth,
					o = () => d(c, "--scrollbar-width", `${p}px`),
					f = m(c),
					b = () => C(n, { overflow: "hidden", [f]: `${p}px` }),
					s = () => {
						const { scrollX: y, scrollY: $, visualViewport: v } = h,
							S = v?.offsetLeft ?? 0,
							I = v?.offsetTop ?? 0,
							T = C(n, {
								position: "fixed",
								overflow: "hidden",
								top: `${-($ - Math.floor(I))}px`,
								left: `${-(y - Math.floor(S))}px`,
								right: "0",
								[f]: `${p}px`,
							});
						return () => {
							T(), h.scrollTo(y, $);
						};
					},
					l = (0, i.$9jb)([o(), (0, t.$Ejb)() ? s() : b()]);
				(0, w.onCleanup)(() => {
					l(), n.removeAttribute(E);
				});
			});
		}
	}),
		