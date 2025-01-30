import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../utils/api.js';
import '../../../../../external/solid/solid.js';
import '../utils/api.js';
import '../utils/api.js';
import './form-control-context.js';
define(
			de[2634],
			he([1, 0, 2, 2, 2, 115, 13, 115, 115, 737]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*api*/,
 C /*solid*/,
 d /*api*/,
 m /*api*/,
 r /*form-control-context*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$_mb = u);
				function u(a) {
					let h;
					const c = (0, r.$5mb)(),
						n = (0, E.$wjb)({ id: c.generateId("label") }, a),
						[g, p] = (0, C.splitProps)(n, ["ref"]),
						o = (0, m.$Wkb)(
							() => h,
							() => "label",
						);
					return (
						(0, C.createEffect)(() => (0, C.onCleanup)(c.registerLabel(p.id))),
						(0, t.createComponent)(
							d.$5kb,
							(0, i.mergeProps)(
								{
									as: "label",
									ref(f) {
										const b = (0, E.mergeRefs)((s) => (h = s), g.ref);
										typeof b == "function" && b(f);
									},
									get for() {
										return (0, w.memo)(() => o() === "label")()
											? c.fieldId()
											: void 0;
									},
								},
								() => c.dataset(),
								p,
							),
						)
					);
				}
			},
		);
	var Yi =
		(this && this.__exportStar) ||
		function (ce, e) {
			for (var t in ce)
				t !== "default" &&
					!Object.prototype.hasOwnProperty.call(e, t) &&
					Ns(e, ce, t);
		};
	