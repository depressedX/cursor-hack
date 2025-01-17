import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../ui/browser/simpleButton/simpleButton.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/themables.js';
import '../../../controlCommon/browser/solid.js';
import '../../../aiMarkdown/browser/markdown.js';
import '../../../ui/browser/hooks/errorHooks.js';
import '../../../../../css!vs/workbench/contrib/aichat/browser/components/ChatError.js';
define(
			de[862],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 147, 14, 26, 36, 338, 3197, 2375]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$0ac = b);
				const g = (0, t.template)("<div>Request ID: <span>"),
					p = (0, t.template)(
						"<div><div><div><div></div><div></div></div><div></div></div><div><span>",
					),
					o = (0, t.template)('<div class="hover-opacity"><div></div>Resume'),
					f = (0, t.template)(
						'<div class="hover-opacity"><div></div>Try again',
					);
				function b(s) {
					const l = (0, h.$odc)(),
						[y, $] = (0, m.createSignal)(!1),
						{
							title: v,
							retryable: S,
							showRequestId: I,
							detail: T,
							allowCommandLinksPotentiallyUnsafe: P,
						} = (0, n.$9ac)(() => s.error);
					return (() => {
						const k = p(),
							L = k.firstChild,
							D = L.firstChild,
							M = D.firstChild,
							N = M.nextSibling,
							A = D.nextSibling,
							R = L.nextSibling,
							O = R.firstChild;
						return (
							k.style.setProperty("padding", "14px 4px"),
							L.style.setProperty("display", "flex"),
							L.style.setProperty("flex-direction", "row"),
							L.style.setProperty("align-items", "center"),
							L.style.setProperty("flex-wrap", "wrap"),
							L.style.setProperty("gap", "4px"),
							D.style.setProperty("display", "flex"),
							D.style.setProperty("flex-direction", "row"),
							D.style.setProperty("align-items", "center"),
							D.style.setProperty("gap", "4px"),
							D.style.setProperty("overflow", "hidden"),
							D.style.setProperty("margin-right", "2px"),
							M.style.setProperty("font-size", "12px"),
							N.style.setProperty("flex-shrink", "1"),
							N.style.setProperty("white-space", "nowrap"),
							N.style.setProperty("overflow", "hidden"),
							N.style.setProperty("text-overflow", "ellipsis"),
							(0, d.insert)(N, v),
							A.style.setProperty("display", "flex"),
							A.style.setProperty("flex-direction", "row"),
							A.style.setProperty("gap", "4px"),
							(0, d.insert)(
								A,
								(0, C.createComponent)(m.Show, {
									get when() {
										return S() && s.resume;
									},
									children: (B) =>
										(() => {
											const U = o(),
												z = U.firstChild;
											return (
												(0, i.addEventListener)(U, "click", B()),
												U.style.setProperty("cursor", "pointer"),
												U.style.setProperty("font-size", "0.65rem"),
												U.style.setProperty(
													"background-color",
													"var(--vscode-button-background)",
												),
												U.style.setProperty(
													"color",
													"var(--vscode-button-foreground)",
												),
												U.style.setProperty("border-radius", "0.25rem"),
												U.style.setProperty("overflow", "hidden"),
												U.style.setProperty("padding", "0 0.25rem"),
												U.style.setProperty("transition", "200ms"),
												U.style.setProperty("display", "flex"),
												U.style.setProperty("flex-direction", "row"),
												U.style.setProperty("align-items", "center"),
												U.style.setProperty("flex-shrink", "0"),
												z.style.setProperty("font-size", "12px"),
												z.style.setProperty("margin-right", "2px"),
												(0, E.effect)(() =>
													(0, w.className)(
														z,
														a.ThemeIcon.asClassName(u.$ak.play),
													),
												),
												U
											);
										})(),
								}),
								null,
							),
							(0, d.insert)(
								A,
								(0, C.createComponent)(m.Show, {
									get when() {
										return S() && s.rerun;
									},
									children: (B) =>
										(() => {
											const U = f(),
												z = U.firstChild;
											return (
												(0, i.addEventListener)(U, "click", B()),
												U.style.setProperty("cursor", "pointer"),
												U.style.setProperty("font-size", "0.65rem"),
												U.style.setProperty("border-radius", "0.25rem"),
												U.style.setProperty("overflow", "hidden"),
												U.style.setProperty("padding", "0 0.25rem"),
												U.style.setProperty("transition", "200ms"),
												U.style.setProperty("display", "flex"),
												U.style.setProperty("flex-direction", "row"),
												U.style.setProperty("align-items", "center"),
												U.style.setProperty("flex-shrink", "0"),
												z.style.setProperty("font-size", "12px"),
												z.style.setProperty("margin-right", "2px"),
												(0, E.effect)(
													(F) => {
														const x = s.resume
																? "var(--vscode-button-secondaryBackground)"
																: "var(--vscode-button-background)",
															H = s.resume
																? "var(--vscode-button-secondaryForeground)"
																: "var(--vscode-button-foreground)",
															q = a.ThemeIcon.asClassName(u.$ak.refresh);
														return (
															x !== F._v$ &&
																((F._v$ = x) != null
																	? U.style.setProperty("background-color", x)
																	: U.style.removeProperty("background-color")),
															H !== F._v$2 &&
																((F._v$2 = H) != null
																	? U.style.setProperty("color", H)
																	: U.style.removeProperty("color")),
															q !== F._v$3 && (0, w.className)(z, (F._v$3 = q)),
															F
														);
													},
													{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
												),
												U
											);
										})(),
								}),
								null,
							),
							(0, d.insert)(
								A,
								(0, C.createComponent)(m.Show, {
									get when() {
										return I();
									},
									get children() {
										return (0, C.createComponent)(r.$rdc, {
											type: "secondary",
											get codicon() {
												return y() ? u.$ak.check : u.$ak.copy;
											},
											onClick: () => {
												l.clipboardService.writeText(s.generationUUID),
													$(!0),
													setTimeout(() => {
														$(!1);
													}, 2e3);
											},
											codiconStyle: { "font-size": "12px" },
											style: {
												padding: "0 0.25rem",
												"flex-shrink": 0,
												"font-size": "0.65rem",
												"border-radius": "0.25rem",
												gap: "2px",
											},
											title: "Copy request ID",
										});
									},
								}),
								null,
							),
							R.style.setProperty("opacity", "0.5"),
							R.style.setProperty("font-size", "12px"),
							R.style.setProperty("display", "flex"),
							R.style.setProperty("flex-direction", "row"),
							R.style.setProperty("align-items", "center"),
							R.style.setProperty("gap", "4px"),
							O.style.setProperty("width", "100%"),
							O.style.setProperty("display", "flex"),
							O.style.setProperty("flex-direction", "column"),
							(0, d.insert)(
								O,
								(0, C.createComponent)(c.$4$b, {
									class: "chat-error-detail",
									get rawText() {
										return T();
									},
									codeBlockProps: { shouldRecompute: 0 },
									finished: !0,
									get allowCommandLinks_POTENTIALLY_UNSAFE_PLEASE_ONLY_USE_FOR_HANDWRITTEN_TRUSTED_MARKDOWN() {
										return P();
									},
								}),
								null,
							),
							(0, d.insert)(
								O,
								(0, C.createComponent)(m.Show, {
									get when() {
										return I();
									},
									get children() {
										const B = g(),
											U = B.firstChild,
											z = U.nextSibling;
										return (
											B.style.setProperty(
												"color",
												"var(--vscode-editor-foreground)",
											),
											B.style.setProperty("user-select", "text"),
											z.style.setProperty(
												"color",
												"var(--vscode-editor-foreground)",
											),
											(0, d.insert)(z, () => s.generationUUID),
											B
										);
									},
								}),
								null,
							),
							(0, E.effect)(() =>
								(0, w.className)(M, a.ThemeIcon.asClassName(u.$ak.warning)),
							),
							k
						);
					})();
				}
			},
		),
		