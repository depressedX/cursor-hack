import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../controlCommon/browser/solid.js';
import '../composerData.js';
import '../../../../../base/common/themables.js';
import '../../../../../base/common/codicons.js';
import './ComposerMessageToolCallPill.js';
import '../../../ui/browser/aiInput/plugins/mentions/pureIcon.js';
import '../../../../../base/common/path.js';
import '../../../../services/selectedContext/browser/utils.js';
import '../hooks/useComposerDataHandle.js';
define(
			de[4287],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 36, 225, 26, 14, 1379, 156, 54, 299, 177,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*web*/,
 m /*solid*/,
 r /*solid*/,
 u /*composerData*/,
 a /*themables*/,
 h /*codicons*/,
 c /*ComposerMessageToolCallPill*/,
 n /*pureIcon*/,
 g /*path*/,
 p /*utils*/,
 o /*useComposerDataHandle*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerMessageContextPickingCodeBlock = void 0);
				const f = (0, t.template)("<div>hi"),
					b = (0, t.template)(
						'<div class="composer-context-picking-code-block"><div class="context-picking-header"><span></span><span>Relevant Files</span></div><div class="context-picking-content">',
					),
					s = (0, t.template)("<span>"),
					l = (0, t.template)(
						"<div><div><span></span><span></span></div><button>",
					),
					y = ($) => {
						const v = (0, r.$odc)(),
							{ composerService: S } = v,
							{
								composerDataHandle: I,
								currentComposer: T,
								updateCurrentComposer: P,
							} = (0, o.useComposerDataHandle)(() => $.composerDataHandle),
							[k, L] = (0, m.createSignal)(new Set()),
							D = (0, m.createMemo)(() => {
								const R = T();
								if (!R) return null;
								const O = R.conversation.find((U) => U.bubbleId === $.bubbleId);
								return O
									? O.capabilityCodeBlocks?.find(
											(U) =>
												U.type === u.ContextPickingCodeBlockAlias &&
												U.codeBlockIdx === $.codeBlockIdx,
										)
									: null;
							});
						(0, m.createEffect)(() => {
							const R = T();
							if (R) {
								const O = new Set(
									R.context.fileSelections?.map((B) => B.uri.toString()) ?? [],
								);
								L(O);
							}
						});
						const M = (R) => {
								const O = v.workspaceContextService.resolveRelativePath(R);
								(0, p.$9gc)(v, { filePathOrUri: O });
							},
							N = (R) => {
								const O = v.workspaceContextService.resolveRelativePath(R);
								return k().has(O.toString());
							},
							A = (R) => {
								const O = T().composerId;
								if (!O) return;
								const B = v.workspaceContextService.resolveRelativePath(R);
								if (N(R)) {
									const U = T().context;
									if (!U) return;
									const z = U.fileSelections?.findIndex(
										(F) => F.uri.toString() === B.toString(),
									);
									if (typeof z != "number" || z === -1) return;
									S.removeContext({
										composerId: O,
										contextType: "fileSelections",
										index: z,
									});
								} else
									S.addContext({
										composerId: O,
										contextType: "fileSelections",
										value: { uri: B },
										shouldShowPreview: !1,
									});
							};
						return (0, d.createComponent)(m.Show, {
							get when() {
								return D();
							},
							get fallback() {
								return (() => {
									const R = f();
									return R.style.setProperty("display", "none"), R;
								})();
							},
							children: (R) =>
								(0, d.createComponent)(m.Show, {
									get when() {
										return (
											(0, C.memo)(() => R().status !== "generating")() &&
											R().status !== "loading"
										);
									},
									get fallback() {
										return (0, d.createComponent)(
											c.ComposerMessageToolCallPillPure,
											{
												get toolCallIcon() {
													return h.$ak.files;
												},
												toolCallLabel: "Context Picking",
												get status() {
													return R().status ?? "generating";
												},
											},
										);
									},
									get children() {
										const O = b(),
											B = O.firstChild,
											U = B.firstChild,
											z = U.nextSibling,
											F = B.nextSibling;
										return (
											O.style.setProperty("margin-bottom", "16px"),
											B.style.setProperty("display", "flex"),
											B.style.setProperty("align-items", "center"),
											B.style.setProperty("margin-bottom", "8px"),
											U.style.setProperty("font-size", "16px"),
											U.style.setProperty("margin-right", "8px"),
											z.style.setProperty("font-weight", "bold"),
											(0, E.insert)(
												F,
												(0, d.createComponent)(m.For, {
													get each() {
														return R().parsedContextPicking;
													},
													children: (x) =>
														(() => {
															const H = l(),
																q = H.firstChild,
																V = q.firstChild,
																G = V.nextSibling,
																K = q.nextSibling;
															return (
																H.style.setProperty("display", "flex"),
																H.style.setProperty("align-items", "center"),
																H.style.setProperty("margin-bottom", "4px"),
																H.style.setProperty("padding", "4px"),
																H.style.setProperty("border-radius", "4px"),
																q.addEventListener("click", () => M(x)),
																q.style.setProperty("display", "flex"),
																q.style.setProperty("align-items", "center"),
																q.style.setProperty("cursor", "pointer"),
																q.style.setProperty(
																	"color",
																	"var(--vscode-textLink-foreground)",
																),
																q.style.setProperty("flex", "1"),
																V.style.setProperty("margin-right", "4px"),
																V.style.setProperty("height", "14px"),
																V.style.setProperty("display", "flex"),
																V.style.setProperty("align-items", "center"),
																(0, E.insert)(
																	V,
																	(0, d.createComponent)(n.$k$b, {
																		get fileName() {
																			return (0, g.$sc)(x);
																		},
																		get workspaceContextService() {
																			return v.workspaceContextService;
																		},
																		get modelService() {
																			return v.modelService;
																		},
																		get languageService() {
																			return v.languageService;
																		},
																	}),
																),
																(0, E.insert)(G, x),
																(0, E.insert)(
																	q,
																	(0, d.createComponent)(m.Show, {
																		get when() {
																			return N(x);
																		},
																		get children() {
																			const J = s();
																			return (
																				J.style.setProperty(
																					"margin-left",
																					"4px",
																				),
																				J.style.setProperty(
																					"font-size",
																					"14px",
																				),
																				J.style.setProperty(
																					"color",
																					"var(--vscode-inputValidation-infoForeground)",
																				),
																				(0, w.effect)(() =>
																					(0, i.className)(
																						J,
																						a.ThemeIcon.asClassName(
																							h.$ak.check,
																						),
																					),
																				),
																				J
																			);
																		},
																	}),
																	null,
																),
																K.addEventListener("click", () => A(x)),
																K.style.setProperty("background", "none"),
																K.style.setProperty("border", "none"),
																K.style.setProperty("cursor", "pointer"),
																K.style.setProperty(
																	"color",
																	"var(--vscode-button-foreground)",
																),
																K.style.setProperty(
																	"background-color",
																	"var(--vscode-button-background)",
																),
																K.style.setProperty("padding", "2px 6px"),
																K.style.setProperty("border-radius", "2px"),
																K.style.setProperty("font-size", "12px"),
																(0, E.insert)(K, () =>
																	N(x) ? "Remove" : "Add",
																),
																(0, w.effect)(() =>
																	(N(x)
																		? "var(--vscode-list-activeSelectionBackground)"
																		: "transparent") != null
																		? H.style.setProperty(
																				"background",
																				N(x)
																					? "var(--vscode-list-activeSelectionBackground)"
																					: "transparent",
																			)
																		: H.style.removeProperty("background"),
																),
																H
															);
														})(),
												}),
											),
											(0, w.effect)(() =>
												(0, i.className)(
													U,
													a.ThemeIcon.asClassName(h.$ak.files),
												),
											),
											O
										);
									},
								}),
						});
					};
				e.ComposerMessageContextPickingCodeBlock = y;
			},
		)
