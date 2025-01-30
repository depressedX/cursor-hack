import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/solid.js';
import '../../../controlCommon/browser/solid.js';
define(de[364], he([1, 0, 13, 36]), function (ce /*require*/,
 e /*exports*/,
 t /*solid*/,
 i /*solid*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$z0b = w),
				(e.$A0b = E),
				(e.$B0b = C);
			function w(d, m) {
				(0, t.onMount)(() => {
					const r = d();
					if (!r) return;
					const u = new ResizeObserver(() => {
						m();
					});
					u.observe(r), (0, t.onCleanup)(() => u.disconnect());
				});
			}
			function E(d = null) {
				const [m, r] = (0, t.createSignal)(d);
				return [
					m,
					(c) => {
						r(c);
					},
					() => r(null),
					() => {
						r(m() ? null : d);
					},
				];
			}
			function C(d, m, r = 100, u = () => !1) {
				const a = (0, i.$odc)();
				let h,
					c = !1;
				const n = (p) => {
						const o = d();
						o && (o.contains(p.target) || m(p));
					},
					g = () => {
						h !== void 0 && (clearTimeout(h), (h = void 0)),
							c &&
								a.window?.document &&
								(a.window.document.removeEventListener("mouseup", n), (c = !1));
					};
				return (
					(0, t.createEffect)(() => {
						if (u()) {
							g();
							return;
						}
						const p = () => {
							a.window?.document &&
								(a.window.document.addEventListener("mouseup", n), (c = !0));
						};
						g(),
							(0, t.onMount)(() => {
								h = setTimeout(p, r);
							}),
							(0, t.onCleanup)(g);
					}),
					g
				);
			}
		}),
		