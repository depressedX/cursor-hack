import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/themables.js';
import './MenuPickerWrapper.js';
import '../../../../../workbench/contrib/ui/browser/menu/hooks.js';
define(
			de[4184],
			he([1, 0, 2, 2, 2, 2, 2, 14, 26, 1976, 364]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Pdc = void 0);
				const a = (0, t.template)('<span class="generation-pill"><span>'),
					h = (c) => {
						const n =
								"generation-pill-" +
								Math.random().toString(36).substring(2, 15),
							[g, p, o] = (0, u.$A0b)();
						return (0, i.createComponent)(r.$Ndc, {
							closeMenu: o,
							position: g,
							uniqueMenuId: n,
							get onSelect() {
								return c.onSelect;
							},
							get children() {
								const f = a(),
									b = f.firstChild;
								return (
									f.style.setProperty("border", "none"),
									f.style.setProperty("cursor", "pointer"),
									f.style.setProperty("display", "flex"),
									f.style.setProperty("align-items", "center"),
									f.style.setProperty("justify-content", "center"),
									f.style.setProperty("padding", "2px"),
									b.addEventListener("click", (s) => {
										const l = s.currentTarget.getBoundingClientRect();
										p({ x: l.left - 4, y: l.bottom + 8 });
									}),
									b.style.setProperty("font-size", "10px"),
									(0, C.setAttribute)(b, "id", n),
									(0, E.effect)(() =>
										(0, w.className)(
											b,
											`${m.ThemeIcon.asClassName(d.$ak.plus)}`,
										),
									),
									f
								);
							},
						});
					};
				e.$Pdc = h;
			},
		),
		