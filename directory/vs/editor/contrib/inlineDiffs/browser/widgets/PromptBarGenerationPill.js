import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/themables.js';
import './MenuPickerWrapper.js';
import '../../../../../workbench/contrib/ui/browser/menu/hooks.js';
define(
			de[4185],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 26, 1976, 364]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Odc = g);
				const c = (0, t.template)("<div>"),
					n = (0, t.template)('<span class="generation-pill"><span>');
				function g(p) {
					const o =
							"generation-pill-" + Math.random().toString(36).substring(2, 15),
						[f, b, s] = (0, h.$A0b)(),
						[l, y] = (0, m.createSignal)(!1);
					return (0, w.createComponent)(a.$Ndc, {
						closeMenu: s,
						position: f,
						uniqueMenuId: o,
						onSelect: ($) => {
							p.onChangeModel($);
						},
						get children() {
							const $ = n(),
								v = $.firstChild;
							return (
								$.addEventListener("mouseleave", () => y(!1)),
								$.addEventListener("mouseenter", () => y(!0)),
								$.addEventListener("click", (S) => {
									if (p.canChangeModel) {
										const I = S.target.getBoundingClientRect();
										b({ x: I.left, y: I.bottom + 2 });
									} else p.onClick(S);
								}),
								(0, d.setAttribute)($, "id", o),
								$.style.setProperty("position", "relative"),
								(0, i.insert)($, () => p.modelName, v),
								v.style.setProperty("width", "4px"),
								v.style.setProperty("height", "4px"),
								v.style.setProperty("border-radius", "50%"),
								v.style.setProperty("content", ""),
								(0, i.insert)(
									$,
									(0, w.createComponent)(m.Show, {
										get when() {
											return l() && p.canDelete;
										},
										get children() {
											const S = c();
											return (
												S.addEventListener("click", (I) => {
													I.stopImmediatePropagation(), p.onDelete();
												}),
												S.style.setProperty("position", "absolute"),
												S.style.setProperty("top", "0"),
												S.style.setProperty("right", "0"),
												S.style.setProperty("padding", "1px"),
												S.style.setProperty("border-radius", "50%"),
												S.style.setProperty(
													"background-color",
													"var(--vscode-editor-background)",
												),
												S.style.setProperty(
													"color",
													"var(--vscode-input-placeholderForeground)",
												),
												S.style.setProperty("font-size", "0.8em"),
												S.style.setProperty("display", "flex"),
												S.style.setProperty("align-items", "center"),
												S.style.setProperty("justify-content", "center"),
												S.style.setProperty(
													"transform",
													"translate(50%, -50%)",
												),
												S.style.setProperty("cursor", "pointer"),
												(0, C.effect)(() =>
													(0, E.className)(
														S,
														`${u.ThemeIcon.asClassName(r.$ak.x)} generation-pill-delete`,
													),
												),
												S
											);
										},
									}),
									null,
								),
								(0, C.effect)(
									(S) => {
										const I = p.isActive
												? "var(--vscode-editor-foreground)"
												: "var(--vscode-input-placeholderForeground)",
											T =
												p.status === void 0
													? "var(--vscode-testing-iconUnset)"
													: p.status === "generating"
														? "var(--vscode-testing-iconQueued)"
														: p.status === "failed"
															? "var(--vscode-testing-iconFailed)"
															: "var(--vscode-testing-iconPassed)";
										return (
											I !== S._v$ &&
												((S._v$ = I) != null
													? $.style.setProperty("color", I)
													: $.style.removeProperty("color")),
											T !== S._v$2 &&
												((S._v$2 = T) != null
													? v.style.setProperty("background", T)
													: v.style.removeProperty("background")),
											S
										);
									},
									{ _v$: void 0, _v$2: void 0 },
								),
								$
							);
						},
					});
				}
			},
		),
		