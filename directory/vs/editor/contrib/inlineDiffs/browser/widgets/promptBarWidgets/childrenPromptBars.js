import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/solid.js';
import '../../../../../../workbench/contrib/ui/browser/simpleButton/simpleButton.js';
import '../../../../../../base/common/codicons.js';
import '../../../../../../base/common/constants.js';
import '../../../../../../base/common/themables.js';
import '../../../../../../workbench/contrib/ui/browser/widgets/codeBlock.js';
import '../../../../../../workbench/contrib/controlCommon/browser/solid.js';
import '../../controllers/inlineDiffController.js';
import '../../../../../browser/widget/markdownRenderer/browser/markdownRenderer.js';
import '../../inlineDiffTypes.js';
define(
			de[4221],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 147, 14, 58, 26, 312, 36, 851, 251, 534]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*web*/,
 m /*solid*/,
 r /*simpleButton*/,
 u /*codicons*/,
 a /*constants*/,
 h /*themables*/,
 c /*codeBlock*/,
 n /*solid*/,
 g /*inlineDiffController*/,
 p /*markdownRenderer*/,
 o /*inlineDiffTypes*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Edc = void 0);
				const f = (0, t.template)("<div>"),
					b = (0, t.template)("<hr>"),
					s = (0, t.template)("<div><span>"),
					l = (0, t.template)(
						"<div><div><div><span></span><div><span></span></div><div></div><div></div></div></div><div>",
					),
					y = ($) => {
						const v = (0, n.$odc)(),
							S = (0, o.$n8b)(),
							I = (0, m.createMemo)(() =>
								S.nonPersistentStorage.promptBars.find((H) => H.id === $.id),
							),
							T = (0, m.createMemo)(() =>
								S.nonPersistentStorage.promptBars.filter(
									(H) =>
										(I() && H.dependencyPromptBarIds?.includes(I().id)) ?? !1,
								),
							),
							P = (H) => {
								z(H),
									A(void 0),
									v.commandService.executeCommand(a.$RW, H, !0),
									v.inlineDiffService.hidePromptBar(H);
							},
							k = (H) => {
								z(H), A(void 0);
								const q = T().find((V) => V.id === H);
								q && q.diffId && v.inlineDiffService.acceptDiff(q.diffId);
							},
							L = (0, m.createMemo)(async () =>
								(
									await Promise.all(
										T().map(async (q) => {
											const V = await v.textModelService.createModelReference(
												q.uri,
											);
											let G;
											try {
												const K = V.object.textEditorModel;
												G = v.cmdKService.getPromptBarCurrentRange(q, K);
											} finally {
												V.dispose();
											}
											return { id: q.id, range: G };
										}),
									)
								).reduce(
									(q, { id: V, range: G }) => ((q[V] = G?.startLineNumber), q),
									{},
								),
							),
							[D, M] = (0, m.createSignal)({});
						(0, m.createEffect)(async () => {
							const H = await L();
							M(H);
						});
						const [N, A] = (0, m.createSignal)(),
							R = 350,
							O = () =>
								(() => {
									const H = f();
									return H.style.setProperty("height", "350px"), H;
								})(),
							B = (0, m.createMemo)(() =>
								T().map((H) => ({
									promptBar: H,
									element: O(),
									editor: void 0,
									inlineDiffController: void 0,
								})),
							),
							U = async (H) => {
								const q = B().find((W) => W.promptBar.id === H);
								if (!q || q.promptBar.visible === !1) return;
								const V = c.$X0b.getEditorOptions(v.configurationService);
								V.scrollbar &&
									((V.scrollbar.vertical = "auto"),
									(V.scrollbar.verticalScrollbarSize = 10),
									(V.scrollbar.horizontal = "hidden"));
								const G = v.instantiationService.createInstance(
										c.$X0b,
										q.element,
										V,
										{},
									),
									K = v.instantiationService.createInstance(g.$Ddc, G),
									J = await v.textModelService.createModelReference(
										q.promptBar.uri,
									);
								try {
									G.setModel(J.object.textEditorModel),
										G.revealLine(D()[q.promptBar.id] ?? 1);
								} finally {
									J.dispose();
								}
								G.onMouseDown((W) => {
									v.commandService.executeCommand(a.$hW, q.promptBar.id);
								}),
									G.onMouseWheel((W) => {}),
									(q.editor = G),
									(q.inlineDiffController = K);
							},
							z = async (H) => {
								const q = B().find((V) => V.promptBar.id === H);
								q &&
									(q.editor?.dispose(),
									q.inlineDiffController?.dispose(),
									q.element.remove(),
									(q.element = O()));
							},
							F = (0, m.createMemo)(
								() => 26 * T().length + (N() !== void 0 ? R : 0),
							);
						(0, m.onCleanup)(() => {
							for (const H of B()) H.element.remove(), H.editor?.dispose();
							x().dispose();
						});
						const x = () => {
							const H = { value: $.multiFileEditChainOfThought, isTrusted: !0 },
								V = v.instantiationService.createInstance(p.$Qzb, {}).render(H);
							return (V.element.style.whiteSpace = "normal"), V;
						};
						return (0, C.createComponent)(m.Show, {
							get when() {
								return (
									(0, d.memo)(() => I() !== void 0)() &&
									(T().length > 0 || $.multiFileEditChainOfThought !== "")
								);
							},
							get children() {
								return [
									(() => {
										const H = b();
										return (
											H.style.setProperty("opacity", "0.1"),
											H.style.setProperty("height", "1px"),
											H
										);
									})(),
									(() => {
										const H = f();
										return (
											H.style.setProperty("margin-bottom", "5px"),
											(0, E.insert)(
												H,
												(0, C.createComponent)(m.For, {
													get each() {
														return B();
													},
													get fallback() {
														return (() => {
															const q = s(),
																V = q.firstChild;
															return (
																q.style.setProperty(
																	"color",
																	"var(--vscode-input-placeholderForeground)",
																),
																q.style.setProperty("margin", "10px"),
																q.style.setProperty("max-height", "350px"),
																q.style.setProperty("overflow-y", "auto"),
																q.style.setProperty("display", "flex"),
																q.style.setProperty(
																	"flex-direction",
																	"column-reverse",
																),
																(0, E.insert)(V, () => x().element),
																q
															);
														})();
													},
													children: (q) =>
														(() => {
															const V = l(),
																G = V.firstChild,
																K = G.firstChild,
																J = K.firstChild,
																W = J.nextSibling,
																X = W.firstChild,
																Y = W.nextSibling,
																ie = Y.nextSibling,
																ne = G.nextSibling;
															return (
																G.addEventListener("click", () => {
																	const ee = N();
																	A((_) =>
																		_ === q.promptBar.id
																			? void 0
																			: q.promptBar.id,
																	),
																		ee === q.promptBar.id
																			? z(q.promptBar.id)
																			: (ee && z(ee), U(q.promptBar.id));
																}),
																K.style.setProperty("display", "flex"),
																K.style.setProperty(
																	"justify-content",
																	"space-between",
																),
																K.style.setProperty("align-items", "center"),
																K.style.setProperty(
																	"color",
																	"var(--vscode-input-placeholderForeground)",
																),
																W.style.setProperty("white-space", "nowrap"),
																W.style.setProperty("overflow", "hidden"),
																W.style.setProperty(
																	"text-overflow",
																	"ellipsis",
																),
																W.style.setProperty("direction", "rtl"),
																W.style.setProperty("cursor", "pointer"),
																X.style.setProperty("direction", "ltr"),
																(0, E.insert)(X, () =>
																	v.workspaceContextService.asRelativePath(
																		q.promptBar.uri,
																	),
																),
																Y.style.setProperty("flex-grow", "1"),
																ie.style.setProperty("display", "flex"),
																(0, E.insert)(
																	ie,
																	(0, C.createComponent)(m.Show, {
																		get when() {
																			return (
																				N() === q.promptBar.id &&
																				!q.promptBar.generating
																			);
																		},
																		get children() {
																			return (0, C.createComponent)(r.$rdc, {
																				title: "Accept",
																				type: "primary",
																				style: {
																					"font-size": "12px",
																					"margin-left": "10px",
																				},
																				onClick: () => k(q.promptBar.id),
																			});
																		},
																	}),
																	null,
																),
																(0, E.insert)(
																	ie,
																	(0, C.createComponent)(r.$rdc, {
																		get title() {
																			return q.promptBar.generating
																				? "Cancel"
																				: "Reject";
																		},
																		type: "secondary",
																		style: {
																			"font-size": "12px",
																			"margin-left": "10px",
																		},
																		onClick: () => P(q.promptBar.id),
																	}),
																	null,
																),
																ne.style.setProperty("cursor", "pointer"),
																(0, E.insert)(
																	ne,
																	(0, C.createComponent)(m.Show, {
																		get when() {
																			return N() === q.promptBar.id;
																		},
																		get children() {
																			return q.element;
																		},
																	}),
																),
																(0, w.effect)(() =>
																	(0, i.className)(
																		J,
																		N() === q.promptBar.id
																			? h.ThemeIcon.asClassName(
																					u.$ak.chevronDown,
																				)
																			: h.ThemeIcon.asClassName(
																					u.$ak.chevronRight,
																				),
																	),
																),
																V
															);
														})(),
												}),
											),
											(0, w.effect)(() =>
												(B().length > 0 ? `${F()}px` : void 0) != null
													? H.style.setProperty(
															"height",
															B().length > 0 ? `${F()}px` : void 0,
														)
													: H.style.removeProperty("height"),
											),
											H
										);
									})(),
								];
							},
						});
					};
				e.$Edc = y;
			},
		),
		