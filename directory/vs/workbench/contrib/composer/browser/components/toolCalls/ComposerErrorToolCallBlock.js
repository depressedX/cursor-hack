import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import './ComposerToolCallBlockContainer.js';
import '../../../../ui/browser/hooks/useVSHoverTooltip.js';
import '../../../../../../base/browser/ui/hover/hoverWidget.js';
define(
			de[3203],
			he([1, 0, 2, 2, 2, 2, 792, 422, 160]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerErrorToolCallBlock = u);
				const r = (0, t.template)("<div><span>\u26A0\uFE0F</span><span>");
				function u(a) {
					const { showHover: h, hideHover: c } = (0, d.$z$b)(300),
						n = (g) => {
							const p = g.currentTarget;
							p.scrollWidth > p.clientWidth &&
								h({
									content: a.error,
									target: p,
									position: { hoverPosition: m.HoverPosition.BELOW },
									appearance: { compact: !0 },
								});
						};
					return (0, i.createComponent)(C.ComposerToolCallBlockContainer, {
						get children() {
							const g = r(),
								p = g.firstChild,
								o = p.nextSibling;
							return (
								g.style.setProperty("display", "flex"),
								g.style.setProperty("align-items", "center"),
								g.style.setProperty("gap", "8px"),
								g.style.setProperty(
									"background-color",
									"var(--vscode-errorBackground)",
								),
								g.style.setProperty(
									"border",
									"1px solid var(--vscode-errorBorder)",
								),
								g.style.setProperty("border-radius", "4px"),
								g.style.setProperty("color", "var(--vscode-errorForeground)"),
								g.style.setProperty(
									"font-family",
									"var(--vscode-editor-font-family)",
								),
								g.style.setProperty(
									"font-size",
									"var(--vscode-editor-font-size)",
								),
								g.style.setProperty(
									"line-height",
									"var(--vscode-editor-line-height)",
								),
								g.style.setProperty("max-width", "100%"),
								p.style.setProperty("font-size", "14px"),
								p.style.setProperty("flex-shrink", "0"),
								(0, E.addEventListener)(o, "mouseleave", c),
								o.addEventListener("mouseenter", n),
								o.style.setProperty("text-overflow", "ellipsis"),
								o.style.setProperty("overflow", "hidden"),
								o.style.setProperty("white-space", "nowrap"),
								o.style.setProperty("flex", "1"),
								(0, w.insert)(o, () => a.error),
								g
							);
						},
					});
				}
			},
		),
		