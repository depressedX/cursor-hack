define(
			de[2633],
			he([1, 0, 2, 2, 115, 13, 115, 737]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$$mb = m);
				function m(r) {
					const u = (0, d.$5mb)(),
						a = (0, w.$wjb)({ id: u.generateId("error-message") }, r),
						[h, c] = (0, E.splitProps)(a, ["forceMount"]),
						n = () => u.validationState() === "invalid";
					return (
						(0, E.createEffect)(() => {
							n() && (0, E.onCleanup)(u.registerErrorMessage(c.id));
						}),
						(0, t.createComponent)(E.Show, {
							get when() {
								return h.forceMount || n();
							},
							get children() {
								return (0, t.createComponent)(
									C.$5kb,
									(0, i.mergeProps)({ as: "div" }, () => u.dataset(), c),
								);
							},
						})
					);
				}
			},
		),
		