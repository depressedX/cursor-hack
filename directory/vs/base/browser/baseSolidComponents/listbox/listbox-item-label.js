import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../utils/api.js';
import '../../../../../external/solid/solid.js';
import '../utils/api.js';
import './listbox-item-context.js';
define(
			de[2640],
			he([1, 0, 2, 2, 115, 13, 115, 895]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*api*/,
 E /*solid*/,
 C /*api*/,
 d /*listbox-item-context*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$inb = m);
				function m(r) {
					const u = (0, d.$enb)(),
						a = (0, w.$wjb)({ id: u.generateId("label") }, r),
						[h, c] = (0, E.splitProps)(a, ["id"]);
					return (
						(0, E.createEffect)(() =>
							(0, E.onCleanup)(u.registerLabelId(h.id)),
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
		)
