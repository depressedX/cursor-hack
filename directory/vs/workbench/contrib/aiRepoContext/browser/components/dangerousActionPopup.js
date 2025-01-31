import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../controlCommon/browser/solid.js';
import '../../../../services/ai/browser/modalService.js';
define(
			de[1966],
			he([1, 0, 2, 2, 2, 2, 13, 36, 445]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*solid*/,
 d /*solid*/,
 m /*modalService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$W8b = void 0),
					(e.$X8b = a);
				const r = (0, t.template)('<div class="settings-container-backing">'),
					u = (0, t.template)("<div><h1>Logout");
				e.$W8b = 1000002;
				function a(c) {
					const n = (0, d.$qdc)(),
						g = (0, d.$pdc)();
					return (
						(0, C.createEffect)(() => {
							const p = (o) => {
								o.key === "Escape" && n.close();
							};
							g.window.addEventListener("keydown", p),
								(0, C.onCleanup)(() => {
									g.window.removeEventListener("keydown", p);
								});
						}),
						(() => {
							const p = r();
							return (
								p.addEventListener("click", (o) => {
									n.close(), o.stopPropagation();
								}),
								p.style.setProperty("z-index", "1000002"),
								(0, i.insert)(
									p,
									(0, w.createComponent)(C.Switch, {
										get children() {
											return (0, w.createComponent)(C.Match, {
												get when() {
													return (
														c.dangerousActionType ===
														m.DangerousActionType.LOGOUT
													);
												},
												get children() {
													return (0, w.createComponent)(
														h,
														(0, E.mergeProps)(() => c.dangerousActionParams),
													);
												},
											});
										},
									}),
								),
								p
							);
						})()
					);
				}
				function h(c) {
					return u();
				}
			},
		)
