import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../controlCommon/browser/solid.js';
import '../../aiMarkdown/browser/markdown.js';
import '../../../../base/common/codicons.js';
import '../../ui/browser/simpleButton/simpleButton.js';
import '../../ui/browser/hooks/useKeyboardShortcut.js';
import '../../../../base/common/constants.js';
import '../../../../../external/solid/solid.js';
define(
			de[4267],
			he([1, 0, 2, 2, 2, 36, 338, 14, 147, 385, 58, 13]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*solid*/,
 C /*markdown*/,
 d /*codicons*/,
 m /*simpleButton*/,
 r /*useKeyboardShortcut*/,
 u /*constants*/,
 a /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$BAc = c);
				const h = (0, t.template)(
					'<div class="bugFinderPreviewBoxWidget"><div></div><div class="bugbot-actions-group"><div>',
				);
				function c(n) {
					const g = (0, E.$odc)(),
						p = (0, r.$5$b)(u.$TW, { useDefaultKeybindingEvenIfNotActive: !1 }),
						o = (0, a.createMemo)(() => {
							const f = p();
							return f === "" ? "Dismiss" : f + " Dismiss";
						});
					return (() => {
						const f = h(),
							b = f.firstChild,
							s = b.nextSibling,
							l = s.firstChild;
						return (
							f.style.setProperty("display", "flex"),
							f.style.setProperty("flex-direction", "column"),
							f.style.setProperty(
								"border",
								"1px solid var(--vscode-editorError-foreground, --vscode-editorError-border)",
							),
							f.style.setProperty("padding-top", "4px"),
							f.style.setProperty("gap", "2px"),
							(0, i.insert)(
								f,
								(0, w.createComponent)(C.$4$b, {
									get rawText() {
										return n.store.bug?.bug.description ?? "";
									},
									codeBlockProps: { shouldRecompute: 0 },
									finished: !0,
								}),
								b,
							),
							b.style.setProperty("flex-grow", "1"),
							(0, i.insert)(
								s,
								(0, w.createComponent)(m.$rdc, {
									get title() {
										return o();
									},
									type: "secondary",
									onClick: () =>
										g.bugBotLinterService.dismissBugBotLinter(n.editor, {
											decorationId: n.store.bug?.decorationId,
										}),
									style: { padding: "2px 6px", "font-size": "11px" },
								}),
								l,
							),
							l.style.setProperty("flex-grow", "1"),
							(0, i.insert)(
								s,
								(0, w.createComponent)(m.$rdc, {
									get codicon() {
										return d.$ak.circleSlash;
									},
									title: "Unhelpful",
									type: "secondary",
									onClick: () =>
										g.bugBotLinterService.markUnhelpful(n.editor, {
											decorationId: n.store.bug?.decorationId,
										}),
									style: { padding: "2px 6px", "font-size": "11px" },
								}),
								null,
							),
							(0, i.insert)(
								s,
								(0, w.createComponent)(m.$rdc, {
									get codicon() {
										return d.$ak.thumbsup;
									},
									title: "Good Find",
									type: "secondary",
									onClick: () =>
										g.bugBotLinterService.markGoodFind(n.editor, {
											decorationId: n.store.bug?.decorationId,
										}),
									style: { padding: "2px 6px", "font-size": "11px" },
								}),
								null,
							),
							f
						);
					})();
				}
			},
		)
