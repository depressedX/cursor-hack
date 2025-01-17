import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/solid.js';
import '../utils/utils.js';
import '../utils/polymorphic.js';
import './progress-context.js';
define(
			de[2619],
			he([1, 0, 2, 2, 13, 369, 494, 738]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$9nb = m);
				function m(r) {
					const u = (0, d.$7nb)(),
						a = (0, E.$wjb)({ id: u.generateId("label") }, r),
						[h, c] = (0, w.splitProps)(a, ["id"]);
					return (
						(0, w.createEffect)(() =>
							(0, w.onCleanup)(u.registerLabelId(h.id)),
						),
						(0, t.createComponent)(
							C.$5kb,
							(0, i.mergeProps)(
								{
									as: "span",
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
		