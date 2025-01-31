import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/themables.js';
import '../../../composer/browser/hooks/useComposerHoverTooltip.js';
define(
			de[3204],
			he([1, 0, 2, 2, 2, 2, 2, 2, 14, 26, 311]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*web*/,
 m /*codicons*/,
 r /*themables*/,
 u /*useComposerHoverTooltip*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$jAc = h);
				const a = (0, t.template)("<div>");
				function h(c) {
					const { showHover: n, hideHover: g } = (0,
					u.useComposerHoverTooltip)();
					return (() => {
						const p = a();
						p.addEventListener("mouseleave", () => g()),
							p.addEventListener("mouseenter", (f) => n(f, "Add context")),
							p.addEventListener("click", (f) => {
								const b = f.target.getBoundingClientRect();
								c.openFilePickerMenu({ x: b.right, y: b.top - 4 });
							});
						const o = c.setRef;
						return (
							typeof o == "function" ? (0, d.use)(o, p) : (c.setRef = p),
							(0, C.effect)(
								(f) => {
									const b = c.id,
										s =
											r.ThemeIcon.asClassName(m.$ak.add) +
											" notepad-add-context-button" +
											(c.class ? ` ${c.class}` : ""),
										l = {
											padding: "4px",
											"font-size": "12px",
											cursor: "pointer",
											border:
												"1px solid var(--vscode-commandCenter-inactiveBorder)",
											"border-radius": "4px",
											...c.style,
										};
									return (
										b !== f._v$ && (0, E.setAttribute)(p, "id", (f._v$ = b)),
										s !== f._v$2 && (0, w.className)(p, (f._v$2 = s)),
										(f._v$3 = (0, i.style)(p, l, f._v$3)),
										f
									);
								},
								{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
							),
							p
						);
					})();
				}
			},
		)
