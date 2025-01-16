define(
			de[2656],
			he([1, 0, 2, 2, 369, 115, 13, 494, 1161]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$aob = r);
				function r(u) {
					let a;
					const h = (0, w.$wjb)({ orientation: "horizontal" }, u),
						[c, n] = (0, C.splitProps)(h, ["ref", "orientation"]),
						g = (0, m.$Wkb)(
							() => a,
							() => "hr",
						);
					return (0, t.createComponent)(
						d.$5kb,
						(0, i.mergeProps)(
							{
								as: "hr",
								ref(p) {
									const o = (0, E.mergeRefs)((f) => (a = f), c.ref);
									typeof o == "function" && o(p);
								},
								get role() {
									return g() !== "hr" ? "separator" : void 0;
								},
								get "aria-orientation"() {
									return c.orientation === "vertical" ? "vertical" : void 0;
								},
								get "data-orientation"() {
									return c.orientation;
								},
							},
							n,
						),
					);
				}
			},
		),
		