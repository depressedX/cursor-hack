define(
			de[2625],
			he([1, 0, 2, 2, 115, 115, 13, 494, 1161, 2177]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$ulb = u);
				function u(a) {
					let h;
					const c = (0, w.$wjb)({ type: "button" }, a),
						[n, g] = (0, C.splitProps)(c, ["ref", "type", "disabled"]),
						p = (0, m.$Wkb)(
							() => h,
							() => "button",
						),
						o = (0, C.createMemo)(() => {
							const s = p();
							return s == null ? !1 : (0, r.$tlb)({ tagName: s, type: n.type });
						}),
						f = (0, C.createMemo)(() => p() === "input"),
						b = (0, C.createMemo)(
							() => p() === "a" && h?.getAttribute("href") != null,
						);
					return (0, t.createComponent)(
						d.$5kb,
						(0, i.mergeProps)(
							{
								as: "button",
								ref(s) {
									const l = (0, E.mergeRefs)((y) => (h = y), n.ref);
									typeof l == "function" && l(s);
								},
								get type() {
									return o() || f() ? n.type : void 0;
								},
								get role() {
									return !o() && !b() ? "button" : void 0;
								},
								get tabIndex() {
									return !o() && !b() && !n.disabled ? 0 : void 0;
								},
								get disabled() {
									return o() || f() ? n.disabled : void 0;
								},
								get "aria-disabled"() {
									return !o() && !f() && n.disabled ? !0 : void 0;
								},
								get "data-disabled"() {
									return n.disabled ? "" : void 0;
								},
							},
							g,
						),
					);
				}
			},
		),
		