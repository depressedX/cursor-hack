import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../utils/api.js';
import '../../../../../external/solid/solid.js';
import '../utils/api.js';
import './popper-context.js';
define(
			de[2643],
			he([1, 0, 2, 2, 115, 13, 115, 896]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*api*/,
 E /*solid*/,
 C /*api*/,
 d /*popper-context*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Glb = m);
				function m(r) {
					const u = (0, d.$Dlb)(),
						[a, h] = (0, E.splitProps)(r, ["ref", "style"]);
					return (0, t.createComponent)(
						C.$5kb,
						(0, i.mergeProps)(
							{
								as: "div",
								ref(c) {
									const n = (0, w.mergeRefs)(u.setPositionerRef, a.ref);
									typeof n == "function" && n(c);
								},
								"data-popper-positioner": "",
								get style() {
									return {
										position: "absolute",
										top: 0,
										left: 0,
										"min-width": "max-content",
										...a.style,
									};
								},
							},
							h,
						),
					);
				}
			},
		),
		