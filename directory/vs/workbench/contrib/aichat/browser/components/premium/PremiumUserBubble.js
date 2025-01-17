import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/solid.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../base/common/codicons.js';
import '../../../../../../base/common/themables.js';
import '../ChatError.js';
import './PremiumLexicalContent.js';
import '../../hooks/useBubblePills.js';
import '../../hooks/useCurrentTab.js';
import '../../hooks/useIsBubbleSelected.js';
import '../../../../aiMarkdown/browser/useMarkdownHover.js';
import '../../../../controlCommon/browser/solid.js';
import '../../chatData.js';
import './PremiumBubble.js';
import '../../../../../services/selectedContext/browser/components/ContextPills.js';
import './PremiumInputBox.js';
import '../../../../../../css!vs/workbench/contrib/aichat/browser/components/premium/PremiumUserBubble.js';
define(
			de[4402],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 2, 14, 26, 862, 1994, 2010, 1065, 1233, 694,
				36, 140, 1967, 573, 2012, 1521,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$bc = void 0);
				const $ = (0, t.template)("<div>"),
					v = (0, t.template)('<div class="premium-user-bubble-toolbar"><div>'),
					S = (T) => {
						const P = (0, f.$odc)(),
							k = (0, b.$zgc)(),
							L = (0, m.createMemo)(() => T.data.richText ?? T.data.text ?? ""),
							D = (0, g.$lbc)(),
							M = (0, m.createMemo)(() => {
								const z = D()?.bubbles ?? [];
								return z[z.length - 1].id === T.bubbleId;
							}),
							[N, A] = (0, m.createSignal)(!1),
							R = (0, p.$4ac)(
								() => T.tabId,
								() => T.bubbleId,
							),
							O = (0, m.createMemo)(() => D()?.editingBubbleId === T.bubbleId),
							B = (0, n.$kbc)(
								() => T.tabId,
								() => T.bubbleId,
								void 0,
								{ readonly: !0 },
							),
							U = (0, m.createMemo)(() => {
								const z = B().filter(
									(F) => F.type !== "gitGraphFileSuggestion",
								);
								return z.length === 0 || z.every((F) => F.type === z[0].type);
							});
						return (0, d.createComponent)(m.Show, {
							get when() {
								return !M();
							},
							get children() {
								return (0, d.createComponent)(s.$5ac, {
									get tabId() {
										return T.tabId;
									},
									get bubbleId() {
										return T.bubbleId;
									},
									onMouseEnter: () => A(!0),
									onMouseLeave: () => A(!1),
									style: { "padding-top": "8px", "padding-bottom": "8px" },
									get children() {
										return [
											(0, d.createComponent)(m.Show, {
												get when() {
													return !O();
												},
												get fallback() {
													return (0, d.createComponent)(y.$0bc, {
														autofocus: !0,
														role: "selected",
														get tabId() {
															return T.tabId;
														},
														get bubbleId() {
															return T.bubbleId;
														},
														get scrollable() {
															return T.scrollable;
														},
														get usesCodebase() {
															return (
																"usesCodebase" in T.data &&
																!!T.data.usesCodebase
															);
														},
													});
												},
												get children() {
													const z = $();
													return (
														z.addEventListener("click", () => {
															const F = T.tabId,
																x = T.bubbleId;
															k.setChatData(
																"tabs",
																(H) => H.tabId === F,
																"editingBubbleId",
																x,
															);
														}),
														z.style.setProperty("border-radius", "0.25rem"),
														z.style.setProperty("position", "relative"),
														z.style.setProperty("padding", "6px"),
														z.style.setProperty(
															"background-color",
															"var(--vscode-input-background)",
														),
														z.style.setProperty(
															"border",
															"solid 1px var(--vscode-input-border,transparent)",
														),
														z.style.setProperty("display", "flex"),
														z.style.setProperty("flex-direction", "column"),
														z.style.setProperty("gap", "0.25rem"),
														(0, C.insert)(
															z,
															(0, d.createComponent)(m.Show, {
																get when() {
																	return R() || N();
																},
																get children() {
																	return (0, d.createComponent)(I, {
																		get tabId() {
																			return T.tabId;
																		},
																		get bubbleId() {
																			return T.bubbleId;
																		},
																		get isSelected() {
																			return R();
																		},
																	});
																},
															}),
															null,
														),
														(0, C.insert)(
															z,
															(0, d.createComponent)(m.Show, {
																get when() {
																	return B().length > 0;
																},
																get children() {
																	const F = $();
																	return (
																		F.style.setProperty("display", "flex"),
																		F.style.setProperty(
																			"align-items",
																			"center",
																		),
																		F.style.setProperty("gap", "4px"),
																		F.style.setProperty("flex-wrap", "wrap"),
																		F.style.setProperty(
																			"color",
																			"var(--vscode-input-placeholderForeground)",
																		),
																		(0, C.insert)(
																			F,
																			(0, d.createComponent)(r.For, {
																				get each() {
																					return B();
																				},
																				children: (x, H) =>
																					(0, d.createComponent)(
																						l.$ibc,
																						(0, E.mergeProps)(x, {
																							get hideTypeTitle() {
																								return U();
																							},
																						}),
																					),
																			}),
																		),
																		F
																	);
																},
															}),
															null,
														),
														(0, C.insert)(
															z,
															(0, d.createComponent)(c.$$ac, {
																get text() {
																	return L();
																},
																get id() {
																	return T.bubbleId;
																},
															}),
															null,
														),
														z
													);
												},
											}),
											(0, d.createComponent)(m.Show, {
												get when() {
													return T.data.errorDetails;
												},
												children: (z) =>
													(() => {
														const F = $();
														return (
															F.style.setProperty("padding-bottom", "22px"),
															(0, C.insert)(
																F,
																(0, d.createComponent)(h.$0ac, {
																	get generationUUID() {
																		return z().generationUUID;
																	},
																	get error() {
																		return z().error;
																	},
																	get message() {
																		return z().message;
																	},
																	get rerun() {
																		return z().rerun;
																	},
																}),
															),
															F
														);
													})(),
											}),
										];
									},
								});
							},
						});
					};
				e.$$bc = S;
				const I = (T) => {
					const P = (0, b.$zgc)(),
						{ showHover: k, hideHover: L } = (0, o.$G$b)({});
					return (() => {
						const D = v(),
							M = D.firstChild;
						return (
							D.addEventListener("mouseleave", () => L()),
							D.addEventListener("mouseenter", (N) =>
								k(N, `Edit${T.isSelected ? " (I)" : ""}`),
							),
							D.style.setProperty("position", "absolute"),
							D.style.setProperty("top", "0"),
							D.style.setProperty("right", "8px"),
							D.style.setProperty("transform", "translateY(-40%)"),
							D.style.setProperty(
								"background-color",
								"var(--vscode-editor-background)",
							),
							D.style.setProperty(
								"border",
								"solid 1px var(--vscode-input-border,transparent)",
							),
							D.style.setProperty(
								"box-shadow",
								"0 1px 4px var(--vscode-widget-shadow, rgba(0, 0, 0, 0.1))",
							),
							D.style.setProperty("border-radius", "0.25rem"),
							D.style.setProperty("padding", "1px"),
							D.style.setProperty("z-index", "1"),
							M.addEventListener("click", () => {
								const N = T.tabId;
								P.setChatData(
									"tabs",
									(A) => A.tabId === N,
									"editingBubbleId",
									T.bubbleId,
								);
							}),
							(0, w.effect)(() =>
								(0, i.className)(
									M,
									`toolbar-button ${a.ThemeIcon.asClassName(u.$ak.pencil)}`,
								),
							),
							D
						);
					})();
				};
			},
		),
		