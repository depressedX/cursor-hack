import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../../base/common/constants.js';
import '../../../../../base/common/uri.js';
import '../../../../contrib/aichat/browser/codeSelections.js';
import '../../../../contrib/aichat/browser/components/InputBoxCodeSelection.js';
import '../../../../contrib/aichat/browser/components/InputBoxDiffSelection.js';
import '../../../../contrib/aichat/browser/components/InputBoxDocSelection.js';
import '../../../../contrib/aichat/browser/components/InputBoxFileSelection.js';
import '../../../../contrib/aichat/browser/components/InputBoxImage.js';
import '../../../../contrib/aichat/browser/components/InputBoxQuoteSelection.js';
import '../../../../contrib/controlCommon/browser/solid.js';
import '../../../../contrib/ui/browser/AutoCollapseDivGroup.js';
import '../../../../contrib/ui/browser/scrollableDiv.js';
import '../../../../contrib/ui/browser/simpleCodeRender/simpleCodeRender.js';
import './AdvancedCodebaseControls.js';
import './ContextPills.js';
import '../selectedContextData.js';
define(
			de[4399],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 83, 58, 9, 354, 1363, 4140, 1980, 4141,
				1364, 4247, 36, 1004, 135, 865, 2007, 573, 298,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*web*/,
				i /*web*/,
				w /*web*/,
				E /*web*/,
				C /*web*/,
				d /*web*/,
				m /*web*/,
				r /*solid*/,
				u /*utils_pb*/,
				a /*constants*/,
				h /*uri*/,
				c /*codeSelections*/,
				n /*InputBoxCodeSelection*/,
				g /*InputBoxDiffSelection*/,
				p /*InputBoxDocSelection*/,
				o /*InputBoxFileSelection*/,
				f /*InputBoxImage*/,
				b /*InputBoxQuoteSelection*/,
				s /*solid*/,
				l /*AutoCollapseDivGroup*/,
				y /*scrollableDiv*/,
				$ /*simpleCodeRender*/,
				v /*AdvancedCodebaseControls*/,
				S /*ContextPills*/,
				I /*selectedContextData*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Tbc = void 0);
				const T = (0, t.template)('<div class="fade-in-fast">'),
					P = (0, t.template)("<span>(Enter)"),
					k = (0, t.template)(
						'<div><div class="codicon codicon-open-preview"></div>Open',
					),
					L = (0, t.template)("<span>(\u232B)"),
					D = (0, t.template)(
						'<div><div class="codicon codicon-trash"></div>Remove',
					),
					M = (0, t.template)("<span>(Esc)"),
					N = (0, t.template)(
						'<div><div class="codicon codicon-eye-closed"></div>Collapse',
					),
					A = (0, t.template)("<div>"),
					R = (0, t.template)("<div><div>Edit <!>: "),
					O = (0, t.template)(
						"<div>Advanced options are only available if you index your codebase. <a>Open Settings",
					),
					B = (F) =>
						(() => {
							const x = T();
							return (
								x.addEventListener("mouseleave", () => F.onMouseLeave?.()),
								x.addEventListener("mouseenter", () => F.onMouseEnter?.()),
								(0, m.insert)(x, () => F.children),
								(0, d.effect)((H) =>
									(0, C.style)(
										x,
										{
											border: F.isHighlighted
												? "1px solid var(--vscode-editorGutter-modifiedBackground)"
												: "1px solid var(--vscode-list-inactiveSelectionBackground, transparent)",
											"border-radius": "4px",
											...F.style,
										},
										H,
									),
								),
								x
							);
						})(),
					U = (F) => {
						const x = (0, s.$odc)(),
							[H, q] = (0, r.createSignal)(!1),
							[V, G] = (0, r.createSignal)(),
							K = (0, r.createMemo)(() => F.getContext()),
							[J, W] = (0, r.createSignal)(void 0),
							[X, Y] = (0, r.createSignal)(void 0);
						(0, r.createEffect)(() => {
							const Z = X(),
								se = J(),
								re = F.pillProps?.data,
								le = F.pillProps?.type;
							if (!(!le && !se)) {
								if (!se && le) {
									W(le), Y(re);
									return;
								}
								if (!le && se) {
									W(void 0), Y(void 0);
									return;
								}
								(le !== se ||
									((0, I.$Ygc)(S.$fbc[le]) &&
										!(0, I.$1gc)(S.$fbc[le], re, Z))) &&
									(W(le), Y(re));
							}
						});
						const ie = (0, r.createMemo)(() => {
							if (J() === "docs") {
								const { docId: Z } = F.pillProps?.data ?? {},
									se = K()?.selectedDocs?.find((re) => re.docId === Z);
								return se || void 0;
							}
						});
						(0, r.createEffect)(() => {
							const Z = J(),
								se = G;
							(Z === "diffToMain" ||
								Z === "diff" ||
								Z === "commit" ||
								Z === "pr") &&
								(async () => {
									let le = x.everythingProviderService.provider;
									if (
										(le ||
											(await x.gitContextService.waitForGitContextProvider(),
											(le = x.everythingProviderService.provider)),
										Z === "diffToMain")
									) {
										try {
											const oe = await (0, c.$4fc)(
												x.selectedContextService,
												u.GitDiff_DiffType.DIFF_FROM_BRANCH_TO_MAIN,
											);
											!oe || oe.diffs.length === 0 ? se(void 0) : se(oe);
										} catch {
											se(void 0);
										}
										return;
									}
									if (Z === "diff") {
										try {
											const oe = await (0, c.$4fc)(
												x.selectedContextService,
												u.GitDiff_DiffType.DIFF_TO_HEAD,
											);
											!oe || oe.diffs.length === 0 ? se(void 0) : se(oe);
										} catch {
											se(void 0);
										}
										return;
									}
									if (Z === "commit") {
										const oe = F.pillProps?.data?.sha;
										if (!oe) {
											console.error(
												"No commit found even though there's a commit pill",
											),
												se(void 0);
											return;
										}
										const ae = K()?.selectedCommits?.find(
											(pe) => pe.sha === oe,
										);
										if (!ae) {
											console.error(
												"No commit found even though there's a commit pill",
											),
												se(void 0);
											return;
										}
										try {
											const pe = await (0, c.$5fc)(
												x.selectedContextService,
												ae,
											);
											se(pe);
										} catch {
											se(void 0);
										}
										return;
									}
									if (Z === "pr") {
										const oe = F.pillProps?.data;
										if (!oe) {
											console.error(
												"No PR found even though there's a PR pill",
											),
												se(void 0);
											return;
										}
										const ae = await (0, c.$6fc)(x.selectedContextService, oe);
										console.log("diff", ae), se(ae);
										return;
									}
								})();
						});
						const ne = {
								display: "flex",
								"align-items": "center",
								"justify-content": "center",
								gap: "2px",
								padding: "1px 4px",
								"line-height": "125%",
								background: "var(--vscode-editor-background)",
								color: "var(--vscode-input-placeholderForeground)",
								border:
									"1px solid var(--vscode-list-inactiveSelectionBackground)",
								"border-radius": "2px",
								"font-size": "11px",
								cursor: "pointer",
								"white-space": "nowrap",
								transition: "background-color 0.2s",
								"font-weight": "400",
							},
							ee = {
								"font-size": "11px",
								color: "var(--vscode-input-placeholderForeground)",
							},
							_ = [
								"currentFile",
								"codebase",
								"code",
								"terminal",
								"file",
								"diffToMain",
								"diff",
								"commit",
								"image",
								"quote",
								"docs",
								"editTrailContext",
								"pr",
							],
							te = !1,
							Q = (0, r.createMemo)(() => {
								const Z = J();
								return Z === "diffToMain" ||
									Z === "diff" ||
									Z === "commit" ||
									Z === "pr"
									? !!V()
									: !0;
							});
						return (0, w.createComponent)(r.Show, {
							get when() {
								return (
									Q() &&
									(X() !== void 0 || J() === "codebase") &&
									J() &&
									_.includes(J()) &&
									F.pillProps
								);
							},
							children: (Z) =>
								(0, w.createComponent)(B, {
									onMouseEnter: () => q(!0),
									onMouseLeave: () => q(!1),
									style: { overflow: "hidden", position: "relative" },
									get isHighlighted() {
										return F.isHighlighted;
									},
									get children() {
										return [
											(0, w.createComponent)(r.Show, {
												get when() {
													return H() || F.isHighlighted;
												},
												get children() {
													return (0, w.createComponent)(l.$q$b, {
														outerContainerStyle: {
															position: "absolute",
															top: 0,
															right: 0,
															"max-width": "100%",
															margin: "4px",
															"z-index": 303,
															display: "flex",
															"justify-content": "right",
															"flex-direction": "row",
														},
														forceGap: 4,
														class: "fade-in-fast",
														get children() {
															return [
																(0, w.createComponent)(r.Show, {
																	get when() {
																		return Z().onClick;
																	},
																	get children() {
																		const se = k(),
																			re = se.firstChild,
																			le = re.nextSibling;
																		return (
																			(0, i.addEventListener)(
																				se,
																				"click",
																				Z().onClick,
																			),
																			(0, C.style)(se, ne),
																			(0, C.style)(re, ee),
																			(0, m.insert)(
																				se,
																				(0, w.createComponent)(r.Show, {
																					get when() {
																						return F.isHighlighted && te;
																					},
																					get children() {
																						const oe = P();
																						return (
																							oe.style.setProperty(
																								"font-size",
																								"0.9em",
																							),
																							oe.style.setProperty(
																								"color",
																								"var(--vscode-input-placeholderForeground)",
																							),
																							oe
																						);
																					},
																				}),
																				null,
																			),
																			se
																		);
																	},
																}),
																(0, w.createComponent)(r.Show, {
																	get when() {
																		return Z().onRemove;
																	},
																	get children() {
																		const se = D(),
																			re = se.firstChild,
																			le = re.nextSibling;
																		return (
																			se.addEventListener("click", () =>
																				Z().onRemove?.(),
																			),
																			(0, C.style)(se, ne),
																			(0, C.style)(re, ee),
																			(0, m.insert)(
																				se,
																				(0, w.createComponent)(r.Show, {
																					get when() {
																						return F.isHighlighted && te;
																					},
																					get children() {
																						const oe = L();
																						return (
																							oe.style.setProperty(
																								"font-size",
																								"0.9em",
																							),
																							oe.style.setProperty(
																								"color",
																								"var(--vscode-input-placeholderForeground)",
																							),
																							oe
																						);
																					},
																				}),
																				null,
																			),
																			se
																		);
																	},
																}),
																(() => {
																	const se = N(),
																		re = se.firstChild,
																		le = re.nextSibling;
																	return (
																		(0, i.addEventListener)(
																			se,
																			"click",
																			F.hidePreview,
																		),
																		(0, C.style)(se, ne),
																		(0, C.style)(re, ee),
																		(0, m.insert)(
																			se,
																			(0, w.createComponent)(r.Show, {
																				get when() {
																					return F.isHighlighted && te;
																				},
																				get children() {
																					const oe = M();
																					return (
																						oe.style.setProperty(
																							"color",
																							"var(--vscode-input-placeholderForeground)",
																						),
																						oe.style.setProperty(
																							"font-size",
																							"0.9em",
																						),
																						oe
																					);
																				},
																			}),
																			null,
																		),
																		se
																	);
																})(),
															];
														},
													});
												},
											}),
											(0, w.createComponent)(r.Switch, {
												get children() {
													return [
														(0, w.createComponent)(r.Match, {
															get when() {
																return (
																	(0, E.memo)(() => J() === "docs")() && ie()
																);
															},
															children: (se) =>
																(0, w.createComponent)(p.$Dbc, {
																	get selection() {
																		return se();
																	},
																}),
														}),
														(0, w.createComponent)(r.Match, {
															get when() {
																return (
																	J() === "codebase" &&
																	F.setCodebaseSearchSettings &&
																	F.getCodebaseSearchSettings
																);
															},
															get children() {
																return (0, w.createComponent)(z, {
																	get getContext() {
																		return F.getContext;
																	},
																	get setContext() {
																		return F.setContext;
																	},
																	get setCodebaseSearchSettings() {
																		return F.setCodebaseSearchSettings;
																	},
																	get getCodebaseSearchSettings() {
																		return F.getCodebaseSearchSettings;
																	},
																});
															},
														}),
														(0, w.createComponent)(r.Match, {
															get when() {
																return J() === "code" || J() === "terminal";
															},
															get children() {
																return (0, w.createComponent)(n.$xbc, {
																	get selection() {
																		return X();
																	},
																	style: { "border-radius": "4px" },
																});
															},
														}),
														(0, w.createComponent)(r.Match, {
															get when() {
																return J() === "file" || J() === "terminalFile";
															},
															get children() {
																return (0, w.createComponent)(o.$Ebc, {
																	get selection() {
																		return X();
																	},
																	style: { "border-radius": "4px" },
																});
															},
														}),
														(0, w.createComponent)(r.Match, {
															get when() {
																return (
																	(0, E.memo)(() => J() === "diffToMain")() &&
																	V()
																);
															},
															children: (se) =>
																(0, w.createComponent)(g.$Bbc, {
																	get removeSelection() {
																		return Z().onRemove ?? (() => {});
																	},
																	get diff() {
																		return se();
																	},
																	style: { "border-radius": "4px" },
																}),
														}),
														(0, w.createComponent)(r.Match, {
															get when() {
																return (
																	(0, E.memo)(() => J() === "diff")() && V()
																);
															},
															children: (se) =>
																(0, w.createComponent)(g.$Bbc, {
																	get removeSelection() {
																		return Z().onRemove ?? (() => {});
																	},
																	get diff() {
																		return se();
																	},
																	style: { "border-radius": "4px" },
																}),
														}),
														(0, w.createComponent)(r.Match, {
															get when() {
																return (
																	(0, E.memo)(() => J() === "commit")() && V()
																);
															},
															children: (se) =>
																(0, w.createComponent)(g.$Bbc, {
																	get removeSelection() {
																		return Z().onRemove ?? (() => {});
																	},
																	get diff() {
																		return se();
																	},
																	style: { "border-radius": "4px" },
																}),
														}),
														(0, w.createComponent)(r.Match, {
															get when() {
																return (0, E.memo)(() => J() === "pr")() && V();
															},
															children: (se) =>
																(0, w.createComponent)(g.$Bbc, {
																	get removeSelection() {
																		return Z().onRemove ?? (() => {});
																	},
																	get diff() {
																		return se();
																	},
																	style: { "border-radius": "4px" },
																}),
														}),
														(0, w.createComponent)(r.Match, {
															get when() {
																return J() === "image";
															},
															get children() {
																return (0, w.createComponent)(f.$Gbc, {
																	get image() {
																		return X();
																	},
																});
															},
														}),
														(0, w.createComponent)(r.Match, {
															get when() {
																return J() === "quote";
															},
															get children() {
																return (0, w.createComponent)(b.$Hbc, {
																	get quote() {
																		return X();
																	},
																	style: { "border-radius": "4px" },
																});
															},
														}),
														(0, w.createComponent)(r.Match, {
															get when() {
																return J() === "editTrailContext";
															},
															get children() {
																const se = A();
																return (
																	se.style.setProperty("display", "flex"),
																	se.style.setProperty(
																		"flex-direction",
																		"column",
																	),
																	se.style.setProperty("gap", "4px"),
																	se.style.setProperty("height", "200px"),
																	se.style.setProperty(
																		"background-color",
																		"var(--vscode-editor-background)",
																	),
																	(0, m.insert)(
																		se,
																		(0, w.createComponent)(y.$w0b, {
																			scrollingDirection: "vertical",
																			style: { height: "100%" },
																			get children() {
																				return (0, w.createComponent)(r.For, {
																					get each() {
																						return X().editTrailSorted;
																					},
																					children: (re, le) =>
																						(() => {
																							const oe = R(),
																								ae = oe.firstChild,
																								pe = ae.firstChild,
																								$e = pe.nextSibling,
																								ye = $e.nextSibling;
																							return (
																								oe.style.setProperty(
																									"font-family",
																									"var(--monaco-monospace-font)",
																								),
																								oe.style.setProperty(
																									"font-size",
																									"12px",
																								),
																								oe.style.setProperty(
																									"border-radius",
																									"4px",
																								),
																								oe.style.setProperty(
																									"flex-direction",
																									"column",
																								),
																								oe.style.setProperty(
																									"display",
																									"flex",
																								),
																								oe.style.setProperty(
																									"gap",
																									"4px",
																								),
																								ae.style.setProperty(
																									"color",
																									"var(--vscode-descriptionForeground)",
																								),
																								ae.style.setProperty(
																									"font-size",
																									"10px",
																								),
																								ae.style.setProperty(
																									"padding",
																									"2px 6px",
																								),
																								ae.style.setProperty(
																									"max-width",
																									"100%",
																								),
																								ae.style.setProperty(
																									"overflow",
																									"hidden",
																								),
																								ae.style.setProperty(
																									"text-overflow",
																									"ellipsis",
																								),
																								ae.style.setProperty(
																									"white-space",
																									"nowrap",
																								),
																								(0, m.insert)(
																									ae,
																									() => le() + 1,
																									$e,
																								),
																								(0, m.insert)(
																									ae,
																									() =>
																										x.labelService.getUriLabel(
																											h.URI.revive(re.uri),
																											{ relative: !0 },
																										),
																									null,
																								),
																								(0, m.insert)(
																									oe,
																									(0, w.createComponent)(
																										$.$Ibc,
																										{
																											style: {
																												"white-space": "pre",
																												overflow: "hidden",
																												"text-overflow":
																													"ellipsis",
																												padding: "0px 6px",
																											},
																											get text() {
																												return re.contextLines;
																											},
																											get language() {
																												return re.uri.path
																													?.split(".")
																													.pop();
																											},
																											get resourceForLanguage() {
																												return h.URI.revive(
																													re.uri,
																												);
																											},
																											get highlightLines() {
																												return Array.from({
																													length:
																														re.textRange
																															.endLineInclusive -
																														re.textRange
																															.startLine +
																														1,
																												}).map(
																													(ue, fe) =>
																														fe +
																														re.textRange
																															.startLine,
																												);
																											},
																											nonReactiveEditorOptions:
																												{
																													scrollbar: {
																														alwaysConsumeMouseWheel:
																															!1,
																														ignoreHorizontalScrollbarInContentHeight:
																															!0,
																													},
																												},
																										},
																									),
																									null,
																								),
																								oe
																							);
																						})(),
																				});
																			},
																		}),
																	),
																	se
																);
															},
														}),
													];
												},
											}),
										];
									},
								}),
						});
					};
				e.$Tbc = U;
				function z(F) {
					const x = (0, s.$odc)(),
						H = (0, r.createMemo)(() => {
							const q =
								x.reactiveStorageService.nonPersistentStorage
									.repositoryIndexingStatus?.case;
							return [
								"synced",
								"out-of-sync",
								"indexing",
								"indexing-setup",
								"loading",
							].includes(q ?? "");
						});
					return (() => {
						const q = A();
						return (
							q.style.setProperty(
								"background-color",
								"var(--vscode-editor-background)",
							),
							q.style.setProperty("border-radius", "4px"),
							q.style.setProperty("padding", "0.25rem 0.5rem"),
							q.style.setProperty("position", "relative"),
							(0, m.insert)(
								q,
								(0, w.createComponent)(r.Show, {
									get when() {
										return H();
									},
									get fallback() {
										return (() => {
											const V = O(),
												G = V.firstChild,
												K = G.nextSibling;
											return (
												V.style.setProperty("font-style", "italic"),
												V.style.setProperty("opacity", "0.6"),
												V.style.setProperty("font-size", "12px"),
												K.addEventListener("click", () => {
													x.commandService.executeCommand(
														a.$QV,
														"features",
														"cursor-settings-codebase-indexing",
													);
												}),
												K.style.setProperty("font-size", "12px"),
												K.style.setProperty(
													"color",
													"var(--vscode-textLink-foreground)",
												),
												K.style.setProperty("text-decoration", "underline"),
												K.style.setProperty("cursor", "pointer"),
												V
											);
										})();
									},
									get children() {
										return (0, w.createComponent)(v.$Qbc, {
											get getContext() {
												return F.getContext;
											},
											get setContext() {
												return F.setContext;
											},
											get setCodebaseSearchSettings() {
												return F.setCodebaseSearchSettings;
											},
											get getCodebaseSearchSettings() {
												return F.getCodebaseSearchSettings;
											},
										});
									},
								}),
							),
							q
						);
					})();
				}
			},
		),
		