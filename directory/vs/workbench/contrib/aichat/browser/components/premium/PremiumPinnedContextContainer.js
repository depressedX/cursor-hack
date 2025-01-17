import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/solid.js';
import '../../chatData.js';
import '../../../../controlCommon/browser/solid.js';
import '../../../../../services/selectedContext/browser/components/ContextPills.js';
import '../../../../../../base/common/path.js';
import '../../../../ui/browser/scrollableDiv.js';
import '../../../../../../base/common/themables.js';
import '../../../../../../base/common/codicons.js';
import '../../../../aiMarkdown/browser/useMarkdownHover.js';
import '../../../../../services/selectedContext/browser/utils.js';
define(
			de[4396],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 140, 36, 573, 54, 135, 26, 14, 694, 299]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$gcc = s);
				const f = (0, t.template)("<div>"),
					b = (0, t.template)("<div><div></div><div>");
				function s() {
					const { chatData: y } = (0, r.$zgc)(),
						$ = (0, u.$odc)(),
						{ showHover: v, hideHover: S } = (0, p.$G$b)(),
						I = (0, m.createMemo)(() => [
							...y.pinnedContexts.fileSelections.map(l("file", $)),
							...y.pinnedContexts.codeSelections.map(l("code", $)),
						]);
					return (0, C.createComponent)(m.Show, {
						get when() {
							return I().length > 0;
						},
						get children() {
							const T = b(),
								P = T.firstChild,
								k = P.nextSibling;
							return (
								T.style.setProperty("box-sizing", "border-box"),
								T.style.setProperty("margin", "4px 10px"),
								T.style.setProperty(
									"background-color",
									"var(--vscode-input-background)",
								),
								T.style.setProperty("border-radius", "0.25rem"),
								T.style.setProperty(
									"border",
									"solid 1px var(--vscode-input-border,transparent)",
								),
								T.style.setProperty("display", "flex"),
								T.style.setProperty("padding", "4px"),
								T.style.setProperty("align-items", "center"),
								T.style.setProperty("gap", "4px"),
								(0, d.addEventListener)(P, "mouseleave", S),
								P.addEventListener("mouseenter", (L) =>
									v(L, "Pinned Contexts"),
								),
								P.style.setProperty("font-size", "14px"),
								P.style.setProperty("transform", "rotate(-45deg)"),
								P.style.setProperty(
									"color",
									"var(--vscode-input-placeholderForeground)",
								),
								k.style.setProperty("flex", "1"),
								k.style.setProperty("overflow", "hidden"),
								k.style.setProperty("height", "20px"),
								(0, E.insert)(
									k,
									(0, C.createComponent)(c.$w0b, {
										style: { height: "100%" },
										scrollingDirection: "horizontal",
										nonReactiveElementOptions: {
											horizontalScrollbarSize: 8,
											verticalScrollbarSize: 0,
										},
										get children() {
											const L = f();
											return (
												L.style.setProperty("display", "flex"),
												L.style.setProperty("height", "100%"),
												L.style.setProperty("align-items", "center"),
												L.style.setProperty("gap", "4px"),
												(0, E.insert)(
													L,
													(0, C.createComponent)(m.For, {
														get each() {
															return I();
														},
														children: (D) => (0, C.createComponent)(a.$ibc, D),
													}),
												),
												L
											);
										},
									}),
								),
								(0, w.effect)(() =>
									(0, i.className)(P, n.ThemeIcon.asClassName(g.$ak.pin)),
								),
								T
							);
						},
					});
				}
				const l = (y, $) => (v) => ({
					type: y,
					data: { ...v, isCurrentFile: !1 },
					onRemove: () => {
						$.aiChatService.removePinnedContext({ type: y, data: v });
					},
					onClick: () => {
						(0, o.$9gc)($, {
							filePathOrUri: v.uri.path ?? "",
							selection:
								"range" in v
									? {
											startLineNumber: v.range.selectionStartLineNumber,
											startColumn: v.range.selectionStartColumn,
											endLineNumber: v.range.positionLineNumber,
											endColumn: v.range.positionColumn,
										}
									: void 0,
						});
					},
					fileName: v.uri.path,
					extraString: (0, h.$sc)(v.uri.path ?? ""),
				});
			},
		),
		