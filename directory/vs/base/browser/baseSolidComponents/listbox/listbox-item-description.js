define(
			de[2638],
			he([1, 0, 2, 2, 115, 13, 115, 895]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$gnb = m);
				function m(r) {
					const u = (0, d.$enb)(),
						a = (0, w.$wjb)({ id: u.generateId("description") }, r),
						[h, c] = (0, E.splitProps)(a, ["id"]);
					return (
						(0, E.createEffect)(() =>
							(0, E.onCleanup)(u.registerDescriptionId(h.id)),
						),
						(0, t.createComponent)(
							C.$5kb,
							(0, i.mergeProps)(
								{
									as: "div",
									get id() {
										return h.id;
									},
								},
								() => u.dataset(),
								c,
							),
						)
					);
				}
			},
		),
		