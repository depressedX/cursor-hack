import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/solid.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/themables.js';
import '../../ui/browser/scrollableDiv.js';
import '../../controlCommon/browser/solid.js';
import '../../aiMarkdown/browser/markdown.js';
import '../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../../base/common/scrollable.js';
import '../../../../../external/solid/store.js';
import '../../../../base/common/constants.js';
import '../../aiConfig/browser/aiConfigHelper.js';
import '../../../../css!vs/workbench/contrib/aiReview/browser/aiReviewPeekBody.js';
define(
			de[4239],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 26, 135, 36, 338, 148, 195, 193, 58,
				270, 2370,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$ued = $);
				const b = (0, t.template)("<div><div><div></div></div><div>"),
					s = (0, t.template)('<div class="ai-review-peek-messages">'),
					l = (0, t.template)(
						'<div class="ai-review-peek-content"><div><input class="ai-review-peek-input" placeholder="Ask a question..."><div>',
					);
				function y(v) {
					const S = (0, h.$odc)(),
						[I] = (0, f.$K0b)(o.$lW, S.configurationService, !1);
					return (() => {
						const T = b(),
							P = T.firstChild,
							k = P.firstChild,
							L = P.nextSibling;
						return (
							T.style.setProperty("display", "flex"),
							T.style.setProperty("flex-direction", "column"),
							T.style.setProperty("gap", "6px"),
							k.style.setProperty("font-weight", "600"),
							(0, d.insert)(k, () =>
								v.type === n.ReviewChatMessage_ReviewChatMessageType.AI
									? "Cursor Bot"
									: "You",
							),
							L.style.setProperty("margin-left", "8px"),
							L.style.setProperty("padding-left", "12px"),
							L.style.setProperty(
								"border-left",
								"1px solid var(--vscode-editorWidget-border)",
							),
							(0, d.insert)(
								L,
								(0, C.createComponent)(c.$4$b, {
									get finished() {
										return !v.isGenerating();
									},
									get rawText() {
										return v.text();
									},
									codeBlockProps: { shouldRecompute: 0 },
									shouldFade: !1,
								}),
							),
							T
						);
					})();
				}
				function $(v) {
					const S = (0, h.$odc)(),
						I = (0, m.createMemo)(() =>
							S.aiReviewService.getReviewChunkById(v.reviewChunkId),
						),
						T = (0, m.createMemo)(
							() =>
								I()?.threads.find((R) => R.id === v.threadId)?.messages ?? [],
						);
					let P;
					(0, m.createEffect)(() => {
						P && P.focus();
					});
					const k = new g.$KK({
							stickyScrollVertical: "down",
							...(0, a.$x0b)(),
						}),
						[L, D] = (0, m.createSignal)(""),
						[M, N] = (0, m.createSignal)(!1),
						A = async () => {
							N(!0);
							const R = L();
							D(""),
								await S.aiReviewService.submitReviewChatMessage(
									R,
									v.reviewChunkId,
									v.threadId,
									() => {
										k.setScrollPositionSmooth({
											scrollTop: k.getScrollDimensions().height + 20,
										});
									},
								),
								N(!1),
								setTimeout(() => {
									P?.focus();
								}, 10);
						};
					return (
						(0, m.createEffect)(() => {
							(0, m.onMount)(() => {
								setTimeout(() => {
									k.setScrollPositionSmooth({
										scrollTop: k.getScrollDimensions().height + 20,
									}),
										P?.focus();
								}, 100);
							});
						}),
						(() => {
							const R = l(),
								O = R.firstChild,
								B = O.firstChild,
								U = B.nextSibling;
							R.style.setProperty("width", "100%"),
								R.style.setProperty("height", "100%"),
								R.style.setProperty("position", "relative"),
								(0, d.insert)(
									R,
									(0, C.createComponent)(a.$w0b, {
										scrollingDirection: "both",
										nonReactiveElementOptions: { alwaysConsumeMouseWheel: !0 },
										scrollable: k,
										style: { height: "calc(100% - 38px)" },
										get children() {
											const F = s();
											return (
												F.style.setProperty("height", "100%"),
												F.style.setProperty("position", "relative"),
												F.style.setProperty("display", "flex"),
												F.style.setProperty("flex-direction", "column"),
												F.style.setProperty("justify-content", "flex-end"),
												F.style.setProperty("gap", "12px"),
												F.style.setProperty("padding", "12px"),
												(0, d.insert)(
													F,
													(0, C.createComponent)(m.For, {
														get each() {
															return (0, p.unwrap)(T());
														},
														children: (x) =>
															(0, C.createComponent)(y, {
																get type() {
																	return x.type;
																},
																text: () => x.text,
																isGenerating: () => I().generating,
															}),
													}),
												),
												F
											);
										},
									}),
									O,
								),
								O.style.setProperty("display", "flex"),
								O.style.setProperty("align-items", "center"),
								O.style.setProperty("gap", "4px"),
								O.style.setProperty("padding", "6px"),
								O.style.setProperty("padding-right", "8px"),
								O.style.setProperty("position", "absolute"),
								O.style.setProperty("z-index", "100"),
								O.style.setProperty("bottom", "0"),
								O.style.setProperty("left", "0"),
								O.style.setProperty("right", "0"),
								B.addEventListener("keydown", (F) => {
									F.key === "Enter" && A();
								}),
								B.addEventListener("input", (F) => D(F.currentTarget.value));
							const z = P;
							return (
								typeof z == "function" ? (0, E.use)(z, B) : (P = B),
								B.style.setProperty("outline", "none"),
								B.style.setProperty("color", "var(--vscode-editor-foreground)"),
								B.style.setProperty(
									"border",
									"1px solid var(--vscode-input-border)",
								),
								B.style.setProperty(
									"background",
									"var(--vscode-input-background)",
								),
								B.style.setProperty("border-radius", "6px"),
								B.style.setProperty("padding", "4px 6px"),
								B.style.setProperty("flex", "1"),
								U.addEventListener("click", A),
								(0, w.effect)(
									(F) => {
										const x = M(),
											H =
												u.ThemeIcon.asClassName(r.$ak.send) +
												" ai-review-peek-send";
										return (
											x !== F._v$ && (B.disabled = F._v$ = x),
											H !== F._v$2 && (0, i.className)(U, (F._v$2 = H)),
											F
										);
									},
									{ _v$: void 0, _v$2: void 0 },
								),
								(0, w.effect)(() => (B.value = L())),
								R
							);
						})()
					);
				}
			},
		),
		