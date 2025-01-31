import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../workbench/contrib/ui/browser/menu/menu.js';
import '../../../../../workbench/contrib/controlCommon/browser/solid.js';
define(
			de[1976],
			he([1, 0, 2, 2, 2, 13, 484, 36]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*solid*/,
 C /*menu*/,
 d /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ndc = void 0);
				const m = (0, t.template)('<div tabindex="-1">'),
					r = (0, t.template)("<li>"),
					u = (a) => {
						const h = (0, d.$odc)(),
							c = (0, E.createMemo)(() =>
								h.aiSettingsService.getAvailableModelsReactive({
									isLongContextOrDebuggerMode: !1,
									isChat: !1,
								}),
							);
						return (
							(0, E.createEffect)(() => {
								const n = a.uniqueMenuId,
									g = a.closeMenu,
									p = (o) => {
										o.target.closest(`#${n}`) || g();
									};
								h.window.document.addEventListener("click", p),
									(0, E.onCleanup)(() => {
										h.window.document.removeEventListener("click", p);
									});
							}),
							(() => {
								const n = m();
								return (
									n.style.setProperty("outline", "none"),
									n.style.setProperty("position", "relative"),
									n.style.setProperty("display", "inline-block"),
									(0, i.insert)(n, () => a.children, null),
									(0, i.insert)(
										n,
										(0, w.createComponent)(E.Show, {
											get when() {
												return a.position();
											},
											children: (g) =>
												(0, w.createComponent)(C.Menu, {
													shouldMountInPortal: !0,
													isRelative: !1,
													nonBlockingDirection: "vertical",
													get nonBlockingRoot() {
														return `#${a.uniqueMenuId}`;
													},
													width: "max-content",
													class: "ya-solid-dropdown-menu",
													style: {
														gap: 0,
														"background-color":
															"var(--vscode-settings-dropdownBackground)",
														border:
															"1px solid var(--vscode-commandCenter-inactiveBorder)",
														"border-radius": "3px",
														padding: 0,
														"min-width": "45px",
														"box-shadow": "0px 0px 0px 0px rgba(0, 0, 0, 0.1)",
														"z-index": "10000000000000000",
														"align-items": "flex-start",
													},
													get position() {
														return g();
													},
													close: () => {
														a.closeMenu();
													},
													get children() {
														return (0, w.createComponent)(E.For, {
															get each() {
																return c();
															},
															children: (p) =>
																(() => {
																	const o = r();
																	return (
																		o.addEventListener("click", () => {
																			a.onSelect(p), a.closeMenu();
																		}),
																		(0, i.insert)(o, p),
																		o
																	);
																})(),
														});
													},
												}),
										}),
										null,
									),
									n
								);
							})()
						);
					};
				e.$Ndc = u;
			},
		)
