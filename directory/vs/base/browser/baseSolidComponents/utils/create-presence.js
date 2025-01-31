import '../../../../../require.js';
import '../../../../../exports.js';
import '../../window.js';
import '../../../../../external/solid/solid.js';
define(de[2211], he([1, 0, 75, 13]), function (ce /*require*/,
 e /*exports*/,
 t /*window*/,
 i /*solid*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Ukb = w);
			function w(d) {
				const [m, r] = (0, i.createSignal)();
				let u = {},
					a = d(),
					h = "none";
				const [c, n] = C(d() ? "mounted" : "unmounted", {
					mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
					unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
					unmounted: { MOUNT: "mounted" },
				});
				return (
					(0, i.createEffect)(
						(0, i.on)(c, (g) => {
							const p = E(u);
							h = g === "mounted" ? p : "none";
						}),
					),
					(0, i.createEffect)(
						(0, i.on)(d, (g) => {
							if (a === g) return;
							const p = E(u);
							g
								? n("MOUNT")
								: u?.display === "none"
									? n("UNMOUNT")
									: n(a && h !== p ? "ANIMATION_OUT" : "UNMOUNT"),
								(a = g);
						}),
					),
					(0, i.createEffect)(
						(0, i.on)(m, (g) => {
							if (g) {
								const p = (f) => {
										const s = E(u).includes(f.animationName);
										f.target === g && s && n("ANIMATION_END");
									},
									o = (f) => {
										f.target === g && (h = E(u));
									};
								g.addEventListener("animationstart", o),
									g.addEventListener("animationcancel", p),
									g.addEventListener("animationend", p),
									(0, i.onCleanup)(() => {
										g.removeEventListener("animationstart", o),
											g.removeEventListener("animationcancel", p),
											g.removeEventListener("animationend", p);
									});
							} else n("ANIMATION_END");
						}),
					),
					{
						isPresent: () => ["mounted", "unmountSuspended"].includes(c()),
						setRef: (g) => {
							g && (u = t.$Bfb.getComputedStyle(g)), r(g);
						},
					}
				);
			}
			function E(d) {
				return d?.animationName || "none";
			}
			function C(d, m) {
				const r = (c, n) => m[c][n] ?? c,
					[u, a] = (0, i.createSignal)(d);
				return [
					u,
					(c) => {
						a((n) => r(n, c));
					},
				];
			}
		})
