import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../base/browser/baseSolidComponents/utils/tabbable.js';
import '../../../../../base/browser/dom.js';
import '../../../aiMarkdown/browser/markdownData.js';
import '../../../aiMarkdown/browser/markdown.js';
define(
			de[4247],
			he([1, 0, 2, 2, 2, 2, 2, 926, 7, 236, 338]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Hbc = h);
				const a = (0, t.template)(
					'<div><div class="ainputbox-quote-content"><div></div><div></div><div>',
				);
				function h(c) {
					let n;
					return (() => {
						const g = a(),
							p = g.firstChild,
							o = p.firstChild,
							f = o.nextSibling,
							b = f.nextSibling;
						return (
							p.style.setProperty("padding", "5px"),
							p.style.setProperty("padding-left", "8px"),
							p.style.setProperty(
								"border-left",
								"3px solid var(--vscode-input-background)",
							),
							p.style.setProperty("margin-left", "10px"),
							p.style.setProperty("font-style", "italic"),
							p.style.setProperty("position", "relative"),
							p.style.setProperty("overflow", "hidden"),
							p.style.setProperty("max-height", "100px"),
							o.style.setProperty("position", "absolute"),
							o.style.setProperty("top", "85px"),
							o.style.setProperty("left", "0"),
							o.style.setProperty("right", "0"),
							o.style.setProperty("height", "25px"),
							o.style.setProperty(
								"background",
								"linear-gradient(to bottom, transparent, var(--vscode-editor-background))",
							),
							o.style.setProperty("z-index", "100"),
							f.addEventListener("click", (s) => {
								s.stopPropagation();
								const { sectionIndex: l, bubbleId: y } = c.quote,
									$ = (0, r.$70b)(l, y),
									S = (0, m.$Ogb)().document.getElementById($);
								S && !(0, d.$Ikb)(S) && S?.scrollIntoView({ block: "nearest" }),
									S?.classList.add("markdown-section-highlight"),
									n && clearTimeout(n),
									(n = setTimeout(() => {
										S?.classList.remove("markdown-section-highlight");
									}, 1e3));
							}),
							f.style.setProperty("position", "absolute"),
							f.style.setProperty("top", "0px"),
							f.style.setProperty("right", "0px"),
							f.style.setProperty("left", "0px"),
							f.style.setProperty("bottom", "0px"),
							f.style.setProperty("z-index", "101"),
							f.style.setProperty("cursor", "pointer"),
							b.style.setProperty("opacity", "0.6"),
							(0, E.insert)(
								b,
								(0, C.createComponent)(u.$4$b, {
									get rawText() {
										return c.quote.markdown.trim();
									},
									codeBlockProps: {
										shouldRecompute: 0,
										codeblockActionsCallback: () => {},
									},
									finished: !0,
								}),
							),
							(0, w.effect)((s) =>
								(0, i.style)(
									g,
									{
										padding: "4px 0",
										background: "var(--vscode-sideBar-background)",
										...c.style,
									},
									s,
								),
							),
							g
						);
					})();
				}
			},
		),
		