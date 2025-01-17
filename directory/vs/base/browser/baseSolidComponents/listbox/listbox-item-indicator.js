import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../utils/api.js';
import '../../../../../external/solid/solid.js';
import '../utils/api.js';
import './listbox-item-context.js';
define(
			de[2639],
			he([1, 0, 2, 2, 115, 13, 115, 895]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$hnb = m);
				function m(r) {
					const u = (0, d.$enb)(),
						a = (0, w.$wjb)({ id: u.generateId("indicator") }, r),
						[h, c] = (0, E.splitProps)(a, ["forceMount"]);
					return (0, t.createComponent)(E.Show, {
						get when() {
							return h.forceMount || u.isSelected();
						},
						get children() {
							return (0, t.createComponent)(
								C.$5kb,
								(0, i.mergeProps)(
									{ as: "div", "aria-hidden": "true" },
									() => u.dataset(),
									c,
								),
							);
						},
					});
				}
			},
		),
		