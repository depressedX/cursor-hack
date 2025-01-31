import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/solid.js';
import '../../../../../../../external/solid/web.js';
import '../../../../controlCommon/browser/solid.js';
define(
			de[1069],
			he([1, 0, 2, 2, 2, 2, 13, 2, 36]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*solid*/,
 d /*web*/,
 m /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$q_b = u);
				const r = (0, t.template)(
					'<div class="typeahead-popover mentions-menu">',
				);
				function u(a) {
					const [h, c] = (0, C.createSignal)(1e3),
						[n, g] = (0, C.createSignal)(1e3),
						[p, o] = (0, C.createSignal)(1e3),
						f = (0, m.$pdc)();
					return (
						(0, C.createEffect)(() => {
							const b = a.anchorElementRef.current;
							b &&
								(c(f.window.innerWidth - b.getBoundingClientRect().left),
								g(f.window.innerHeight - b.getBoundingClientRect().top),
								o(b.getBoundingClientRect().top));
						}),
						(0, i.createComponent)(d.Show, {
							get when() {
								return (
									a.anchorElementRef.current !== null &&
									a.anchorElementRef.current !== void 0
								);
							},
							get children() {
								return (0, i.createComponent)(d.Portal, {
									get mount() {
										return a.anchorElementRef.current || void 0;
									},
									get children() {
										return (0, i.createComponent)(d.Show, {
											get when() {
												return a.show;
											},
											get children() {
												const b = r();
												return (
													b.style.setProperty(
														"background-color",
														"var(--vscode-editor-background)",
													),
													b.style.setProperty(
														"border",
														"1px solid var(--vscode-commandCenter-inactiveBorder)",
													),
													b.style.setProperty(
														"color",
														"var(--vscode-editor-foreground)",
													),
													b.style.setProperty("border-radius", "3px"),
													b.style.setProperty("max-height", "600px"),
													b.style.setProperty("position", "absolute"),
													(0, E.insert)(b, () => a.children),
													(0, w.effect)(
														(s) => {
															const l = a.width ? `${a.width}px` : "320px",
																y = a.top
																	? `${a.top}px`
																	: n() < 600 && p() > n()
																		? void 0
																		: "20px",
																$ = n() < 600 && p() > n() ? "20px" : void 0,
																v = a.left
																	? `${a.left}px`
																	: h() < 400
																		? `${-(400 - h() + 20)}px`
																		: "0px";
															return (
																l !== s._v$ &&
																	((s._v$ = l) != null
																		? b.style.setProperty("width", l)
																		: b.style.removeProperty("width")),
																y !== s._v$2 &&
																	((s._v$2 = y) != null
																		? b.style.setProperty("top", y)
																		: b.style.removeProperty("top")),
																$ !== s._v$3 &&
																	((s._v$3 = $) != null
																		? b.style.setProperty("bottom", $)
																		: b.style.removeProperty("bottom")),
																v !== s._v$4 &&
																	((s._v$4 = v) != null
																		? b.style.setProperty("left", v)
																		: b.style.removeProperty("left")),
																s
															);
														},
														{
															_v$: void 0,
															_v$2: void 0,
															_v$3: void 0,
															_v$4: void 0,
														},
													),
													b
												);
											},
										});
									},
								});
							},
						})
					);
				}
			},
		)
