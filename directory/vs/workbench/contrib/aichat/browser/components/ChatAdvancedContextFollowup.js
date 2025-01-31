import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../chatData.js';
import '../../../aisearch/browser/components/AiSearch.js';
import '../../../aiMarkdown/browser/markdownData.js';
import '../../../controlCommon/browser/solid.js';
import './Utils.js';
import '../../../ui/browser/simpleButton/simpleButton.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/constants.js';
import '../../../../../css!vs/workbench/contrib/aichat/browser/components/ChatAdvancedContextFollowup.js';
define(
			de[4244],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 134, 140, 1375, 236, 36, 242, 147, 7, 58,
				2374,
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
 r /*reactiveStorageTypes*/,
 u /*chatData*/,
 a /*AiSearch*/,
 h /*markdownData*/,
 c /*solid*/,
 n /*Utils*/,
 g /*simpleButton*/,
 p /*dom*/,
 o /*constants*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Zac = R),
					(e.$1ac = O),
					(e.$2ac = z),
					(p = mt(p));
				const f = (0, t.template)(
						'<div class="codebase-currently-indexing-hint-in-chat">Currently indexing your codebase (<!>% done). Results will be faster and more accurate if you try once done.',
					),
					b = (0, t.template)(
						'<div class="tooltip" id="enable-indexing-tooltip"><div class="codebase-not-auto-indexed-hint-in-chat">',
					),
					s = (0, t.template)(
						'<div><div class="codebase-currently-indexing-hint-in-chat"><span>Indexing is disabled. This results in significantly worse									speed and accuracy in codebase chats. </span><span>Turn on indexing</span><span> to fix this</span></div><div class="codebase-not-auto-indexed-hint-in-chat"></div><div><div class="codicon codicon-kebab-vertical" id="enable-indexing-tooltip-button">',
					),
					l = (0, t.template)(
						'<div class="tooltip" id="index-codebase-tooltip"><div class="codebase-not-auto-indexed-hint-in-chat">',
					),
					y = (0, t.template)(
						'<div class="codebase-not-auto-indexed-hint-in-chat"><span>Error indexing codebase</span><div><div class="codicon codicon-kebab-vertical" id="index-codebase-tooltip-button">',
					),
					$ = (0, t.template)(
						'<div class="codebase-not-auto-indexed-hint-in-chat-below">Codebase chat is falling back to BM25, which is slower and less accurate than embeddings.',
					),
					v = (0, t.template)(
						'<div class="codebase-not-auto-indexed-hint-in-chat"><span>Codebase not auto-indexed (too many files)</span><div><div class="codicon codicon-kebab-vertical" id="index-codebase-tooltip-button">',
					),
					S = (0, t.template)(
						'<div class="codebase-not-auto-indexed-hint-in-chat-below">Manually enable indexing for this codebase to fix this (codebase chat will be slower and less accurate until you do).',
					),
					I = (0, t.template)("<div>"),
					T = (0, t.template)("<div>And <!> others"),
					P = (0, t.template)('<div class="show-file-icons">'),
					k = (0, t.template)('<div class="results-container-header">'),
					L = (0, t.template)("<div><div>"),
					D = (0, t.template)('<i class="codicon codicon-chevron-up">'),
					M = (0, t.template)('<i class="codicon codicon-chevron-down">'),
					N = (0, t.template)(
						'<div><div><div class="results-container-header"><div>Global Context</div><div class="collapse-button"></div></div><div></div><div>',
					),
					A = (0, t.template)(
						'<div><div><div class="results-container-header"><h3></h3><div class="collapse-button">',
					);
				function R(V) {
					const G = (0, c.$odc)(),
						[K, J] = (0, m.createSignal)(!1),
						[W, X] = (0, m.createSignal)(!1),
						[Y, ie] = (0, m.createSignal)(null),
						ne = (_) => {
							const te = p.$Ogb(),
								Q = Y();
							Q && (te.removeEventListener("click", Q), ie(null));
							const Z = te.document.getElementById("enable-indexing-tooltip"),
								se = te.document.getElementById(
									"enable-indexing-tooltip-button",
								),
								re = te.document.getElementById("index-codebase-tooltip"),
								le = te.document.getElementById(
									"index-codebase-tooltip-button",
								),
								oe =
									_ === "enable-indexing"
										? [Z, se]
										: _ === "index-codebase"
											? [re, le]
											: [],
								ae = (pe) => {
									oe.includes(pe.target) ||
										(_ === "enable-indexing"
											? J(!1)
											: _ === "index-codebase" && X(!1));
								};
							te.addEventListener("click", ae), ie(() => ae);
						},
						ee = () => {
							const _ = p.$Ogb(),
								te = Y();
							te && _.removeEventListener("click", te);
						};
					return (
						(0, m.createEffect)(
							() => (
								K() ? ne("enable-indexing") : W() ? ne("index-codebase") : ee(),
								() => {
									ee();
								}
							),
						),
						(0, C.createComponent)(m.Show, {
							get when() {
								return V.searchType === r.SearchType.keyword;
							},
							get children() {
								return (0, C.createComponent)(m.Switch, {
									get children() {
										return [
											(0, C.createComponent)(m.Match, {
												get when() {
													return [
														"loading",
														"indexing-setup",
														"indexing",
													].includes(
														G.reactiveStorageService.nonPersistentStorage
															.repositoryIndexingStatus?.case ?? "",
													);
												},
												get children() {
													const _ = f(),
														te = _.firstChild,
														Q = te.nextSibling,
														Z = Q.nextSibling;
													return (
														(0, d.insert)(
															_,
															() =>
																(
																	(G.reactiveStorageService.nonPersistentStorage
																		.mainLocalRepositoryProgress?.progress ??
																		0) * 100
																).toFixed(1),
															Q,
														),
														_
													);
												},
											}),
											(0, C.createComponent)(m.Match, {
												get when() {
													return (
														G.reactiveStorageService.nonPersistentStorage
															.repositoryIndexingStatus?.case ===
															"not-indexed" &&
														Date.now() -
															G.reactiveStorageService
																.applicationUserPersistentStorage.indexingState
																.lastAskedToIndexTime >
															1e3 * 60 * 60 * 24 * 7 &&
														G.reactiveStorageService
															.applicationUserPersistentStorage.indexingState
															.fullyDisableAskToIndex !== !0
													);
												},
												get children() {
													const _ = s(),
														te = _.firstChild,
														Q = te.firstChild,
														Z = Q.nextSibling,
														se = te.nextSibling,
														re = se.nextSibling,
														le = re.firstChild;
													return (
														_.style.setProperty("display", "flex"),
														_.style.setProperty("align-items", "center"),
														te.style.setProperty(
															"color",
															"var(--vscode-errorForeground)",
														),
														Z.addEventListener("click", () => {
															G.reactiveStorageService.setApplicationUserPersistentStorage(
																"indexingState",
																{ lastAskedToIndexTime: Date.now() },
															),
																G.repositoryService.indexMainRepository(),
																G.reactiveStorageService.setApplicationUserPersistentStorage(
																	"indexRepository",
																	!0,
																);
														}),
														Z.style.setProperty("text-decoration", "underline"),
														Z.style.setProperty("cursor", "pointer"),
														Z.style.setProperty("text-underline-offset", "2px"),
														(0, d.insert)(
															se,
															(0, C.createComponent)(g.$rdc, {
																title: "Ignore",
																type: "secondary",
																onClick: () => {
																	G.reactiveStorageService.setApplicationUserPersistentStorage(
																		"indexingState",
																		{ lastAskedToIndexTime: Date.now() },
																	);
																},
															}),
														),
														le.addEventListener("click", (oe) => {
															oe.stopPropagation(), J(!K());
														}),
														le.style.setProperty("font-size", "12px"),
														le.style.setProperty("width", "12px"),
														le.style.setProperty("height", "12px"),
														le.style.setProperty("text-align", "center"),
														le.style.setProperty("cursor", "pointer"),
														(0, d.insert)(
															re,
															(0, C.createComponent)(m.Show, {
																get when() {
																	return K();
																},
																get children() {
																	const oe = b(),
																		ae = oe.firstChild;
																	return (
																		oe.style.setProperty("display", "flex"),
																		oe.style.setProperty(
																			"align-items",
																			"center",
																		),
																		oe.style.setProperty(
																			"background-color",
																			"var(--vscode-editorHoverWidget-background)",
																		),
																		oe.style.setProperty(
																			"color",
																			"var(--vscode-editorHoverWidget-foreground)",
																		),
																		oe.style.setProperty("padding", "8px"),
																		oe.style.setProperty(
																			"border-radius",
																			"4px",
																		),
																		oe.style.setProperty(
																			"box-shadow",
																			"0 2px 8px rgba(0, 0, 0, 0.2)",
																		),
																		oe.style.setProperty(
																			"position",
																			"absolute",
																		),
																		oe.style.setProperty("top", "0"),
																		oe.style.setProperty("right", "0"),
																		oe.style.setProperty(
																			"white-space",
																			"nowrap",
																		),
																		oe.style.setProperty("font-size", "12px"),
																		oe.style.setProperty("z-index", "1000"),
																		(0, d.insert)(
																			ae,
																			(0, C.createComponent)(g.$rdc, {
																				title: "Don't show me again",
																				type: "secondary",
																				onClick: () => {
																					G.reactiveStorageService.setApplicationUserPersistentStorage(
																						"indexingState",
																						{ fullyDisableAskToIndex: !0 },
																					);
																				},
																			}),
																		),
																		oe
																	);
																},
															}),
															null,
														),
														(0, E.effect)(() =>
															(0, w.setAttribute)(
																le,
																"data-tooltip",
																K() ? "Don't show me again" : void 0,
															),
														),
														_
													);
												},
											}),
											(0, C.createComponent)(m.Match, {
												get when() {
													return (
														G.reactiveStorageService
															.workspaceUserPersistentStorage
															.hasManuallyDisabledAskToIndex !== !0 &&
														G.reactiveStorageService.nonPersistentStorage
															.repositoryIndexingStatus?.case === "error" &&
														G.reactiveStorageService.nonPersistentStorage
															.repositoryIndexingStatus
													);
												},
												children: (_) => [
													(() => {
														const te = y(),
															Q = te.firstChild,
															Z = Q.nextSibling,
															se = Z.firstChild;
														return (
															te.style.setProperty("display", "flex"),
															te.style.setProperty("align-items", "flex-end"),
															Q.style.setProperty(
																"color",
																"var(--vscode-errorForeground)",
															),
															(0, d.insert)(
																te,
																(0, C.createComponent)(g.$rdc, {
																	title: "Open Settings",
																	type: "primary",
																	onClick: () => {
																		G.commandService.executeCommand(
																			o.$QV,
																			"features",
																			"cursor-settings-codebase-indexing",
																		);
																	},
																}),
																Z,
															),
															se.addEventListener("click", (re) => {
																re.stopPropagation(), X(!W());
															}),
															se.style.setProperty("font-size", "12px"),
															se.style.setProperty("width", "12px"),
															se.style.setProperty("height", "12px"),
															se.style.setProperty("text-align", "center"),
															se.style.setProperty("cursor", "pointer"),
															(0, d.insert)(
																Z,
																(0, C.createComponent)(m.Show, {
																	get when() {
																		return W();
																	},
																	get children() {
																		const re = l(),
																			le = re.firstChild;
																		return (
																			re.style.setProperty("display", "flex"),
																			re.style.setProperty(
																				"align-items",
																				"center",
																			),
																			re.style.setProperty(
																				"background-color",
																				"var(--vscode-editorHoverWidget-background)",
																			),
																			re.style.setProperty(
																				"color",
																				"var(--vscode-editorHoverWidget-foreground)",
																			),
																			re.style.setProperty("padding", "8px"),
																			re.style.setProperty(
																				"border-radius",
																				"4px",
																			),
																			re.style.setProperty(
																				"box-shadow",
																				"0 2px 8px rgba(0, 0, 0, 0.2)",
																			),
																			re.style.setProperty(
																				"position",
																				"absolute",
																			),
																			re.style.setProperty("top", "0"),
																			re.style.setProperty("right", "0"),
																			re.style.setProperty(
																				"white-space",
																				"nowrap",
																			),
																			re.style.setProperty("font-size", "12px"),
																			re.style.setProperty("z-index", "1000"),
																			(0, d.insert)(
																				le,
																				(0, C.createComponent)(g.$rdc, {
																					title: "Don't show me again",
																					type: "secondary",
																					onClick: () => {
																						G.reactiveStorageService.setWorkspaceUserPersistentStorage(
																							"hasManuallyDisabledAskToIndex",
																							!0,
																						);
																					},
																				}),
																			),
																			re
																		);
																	},
																}),
																null,
															),
															(0, E.effect)(() =>
																(0, w.setAttribute)(
																	se,
																	"data-tooltip",
																	W() ? "Don't show me again" : void 0,
																),
															),
															te
														);
													})(),
													(() => {
														const te = $();
														return (
															te.style.setProperty(
																"color",
																"var(--vscode-errorForeground)",
															),
															te
														);
													})(),
												],
											}),
											(0, C.createComponent)(m.Match, {
												get when() {
													return (
														G.reactiveStorageService
															.workspaceUserPersistentStorage
															.hasManuallyDisabledAskToIndex !== !0 &&
														Date.now() -
															(G.reactiveStorageService
																.workspaceUserPersistentStorage
																.lastAskedToIndexTime ?? 0) >
															1e3 * 60 * 60 * 24 * 7 &&
														G.reactiveStorageService.nonPersistentStorage
															.repositoryIndexingStatus?.case ===
															"not-auto-indexing" &&
														G.reactiveStorageService.nonPersistentStorage
															.repositoryIndexingStatus
													);
												},
												children: (_) => [
													(() => {
														const te = v(),
															Q = te.firstChild,
															Z = Q.nextSibling,
															se = Z.firstChild;
														return (
															te.style.setProperty("display", "flex"),
															te.style.setProperty("align-items", "flex-end"),
															Q.style.setProperty(
																"color",
																"var(--vscode-errorForeground)",
															),
															(0, d.insert)(
																te,
																(0, C.createComponent)(g.$rdc, {
																	title: "Enable Indexing",
																	type: "primary",
																	onClick: () => {
																		G.reactiveStorageService.setWorkspaceUserPersistentStorage(
																			"hasAskedToIndex",
																			!0,
																		),
																			G.reactiveStorageService.setWorkspaceUserPersistentStorage(
																				"lastAskedToIndexTime",
																				Date.now(),
																			),
																			G.repositoryService.indexMainRepository();
																	},
																}),
																Z,
															),
															(0, d.insert)(
																te,
																(0, C.createComponent)(g.$rdc, {
																	title: "Ignore",
																	type: "secondary",
																	onClick: () => {
																		G.reactiveStorageService.setWorkspaceUserPersistentStorage(
																			"lastAskedToIndexTime",
																			Date.now(),
																		);
																	},
																}),
																Z,
															),
															se.addEventListener("click", (re) => {
																re.stopPropagation(), X(!W());
															}),
															se.style.setProperty("font-size", "12px"),
															se.style.setProperty("width", "12px"),
															se.style.setProperty("height", "12px"),
															se.style.setProperty("text-align", "center"),
															se.style.setProperty("cursor", "pointer"),
															(0, d.insert)(
																Z,
																(0, C.createComponent)(m.Show, {
																	get when() {
																		return W();
																	},
																	get children() {
																		const re = l(),
																			le = re.firstChild;
																		return (
																			re.style.setProperty("display", "flex"),
																			re.style.setProperty(
																				"align-items",
																				"center",
																			),
																			re.style.setProperty(
																				"background-color",
																				"var(--vscode-editorHoverWidget-background)",
																			),
																			re.style.setProperty(
																				"color",
																				"var(--vscode-editorHoverWidget-foreground)",
																			),
																			re.style.setProperty("padding", "8px"),
																			re.style.setProperty(
																				"border-radius",
																				"4px",
																			),
																			re.style.setProperty(
																				"box-shadow",
																				"0 2px 8px rgba(0, 0, 0, 0.2)",
																			),
																			re.style.setProperty(
																				"position",
																				"absolute",
																			),
																			re.style.setProperty("top", "0"),
																			re.style.setProperty("right", "0"),
																			re.style.setProperty(
																				"white-space",
																				"nowrap",
																			),
																			re.style.setProperty("font-size", "12px"),
																			re.style.setProperty("z-index", "1000"),
																			(0, d.insert)(
																				le,
																				(0, C.createComponent)(g.$rdc, {
																					title: "Don't show me again",
																					type: "secondary",
																					onClick: () => {
																						G.reactiveStorageService.setWorkspaceUserPersistentStorage(
																							"hasManuallyDisabledAskToIndex",
																							!0,
																						);
																					},
																				}),
																			),
																			re
																		);
																	},
																}),
																null,
															),
															(0, E.effect)(() =>
																(0, w.setAttribute)(
																	se,
																	"data-tooltip",
																	W() ? "Don't show me again" : void 0,
																),
															),
															te
														);
													})(),
													(() => {
														const te = S();
														return (
															te.style.setProperty(
																"color",
																"var(--vscode-errorForeground)",
															),
															te
														);
													})(),
												],
											}),
										];
									},
								});
							},
						})
					);
				}
				function O(V) {
					const G = (0, c.$odc)(),
						K = 0.3,
						J = 0.05,
						W = 15,
						[X, Y] = (0, m.createSignal)(u.RepoStep.None),
						[ie, ne] = (0, m.createSignal)(!0),
						ee = (0, m.createMemo)(() => V.hydeResults !== void 0);
					(0, m.createEffect)(() => {
						Y(V.repoStep);
					});
					const _ = (0, m.createMemo)(() =>
							V.repoStep > u.RepoStep.GeneratingQueries
								? "Computed Search Queries"
								: "Computing Search Queries",
						),
						te = (0, m.createMemo)(() =>
							V.repoStep === u.RepoStep.GeneratingTokens && !V.textIsGenerated
								? "Reading files"
								: V.repoStep > u.RepoStep.GeneratingTokens
									? "Read files"
									: V.addFolders.length === 0
										? "Searching for files"
										: V.addFolders.length === 1
											? "Searching for folder"
											: "Searching for folders",
						),
						Q = (0, m.createMemo)(() =>
							V.fileResults === void 0 ? [] : V.fileResults,
						),
						Z = (0, m.createMemo)(() =>
							V.hydeResults === void 0
								? { queries: [], reasoning: "" }
								: V.hydeResults,
						);
					return (0, C.createComponent)(H, {
						get collapse() {
							return !(V.isContextGenerating && !V.textIsGenerated);
						},
						get children() {
							const se = I();
							return (
								se.style.setProperty("padding-top", "10px"),
								(0, d.insert)(
									se,
									(0, C.createComponent)(m.Show, {
										get when() {
											return ee();
										},
										get children() {
											return (0, C.createComponent)(F, {
												get headerText() {
													return _();
												},
												get hydeResults() {
													return Z();
												},
												get isLoading() {
													return X() === u.RepoStep.GeneratingQueries;
												},
											});
										},
									}),
									null,
								),
								(0, d.insert)(
									se,
									(0, C.createComponent)(m.Show, {
										get when() {
											return X() > u.RepoStep.GeneratingQueries;
										},
										get children() {
											return (0, C.createComponent)(B, {
												get fileResults() {
													return Q();
												},
												get firstFileResultsRender() {
													return ie();
												},
												setFirstFileResultsRender: ne,
												get isLoading() {
													return (
														X() === u.RepoStep.SearchingFiles ||
														(X() === u.RepoStep.GeneratingTokens &&
															!V.textIsGenerated)
													);
												},
												get headerText() {
													return te();
												},
											});
										},
									}),
									null,
								),
								se
							);
						},
					});
				}
				function B(V) {
					const G = (0, c.$odc)(),
						K = 5,
						J = 20;
					return (
						(0, m.createEffect)(() => {
							V.isLoading || V.setFirstFileResultsRender(!1);
						}),
						(0, C.createComponent)(q, {
							get headerText() {
								return V.headerText;
							},
							get isLoading() {
								return V.isLoading;
							},
							onSwitchCollapsable: (W) => {
								W && V.setFirstFileResultsRender(!1);
							},
							get collapsed() {
								return (0, C.createComponent)(U, {
									get fileResults() {
										return V.fileResults;
									},
									maxIndex: K,
									isFirstView: !1,
								});
							},
							get children() {
								return (0, C.createComponent)(U, {
									cleanupFn: () => V.setFirstFileResultsRender(!1),
									get fileResults() {
										return V.fileResults;
									},
									maxIndex: J,
									get isFirstView() {
										return V.firstFileResultsRender;
									},
								});
							},
						})
					);
				}
				function U(V) {
					const G = (0, c.$odc)();
					return (
						(0, m.createEffect)(() => {
							if (V.cleanupFn) {
								const K = V.cleanupFn;
								(0, m.onCleanup)(() => {
									K();
								});
							}
						}),
						(() => {
							const K = P();
							return (
								(0, d.insert)(
									K,
									(0, C.createComponent)(m.For, {
										get each() {
											return V.fileResults;
										},
										children: (J, W) =>
											(0, C.createComponent)(m.Show, {
												get when() {
													return W() < V.maxIndex;
												},
												get children() {
													return (0, C.createComponent)(m.Show, {
														get when() {
															return V.isFirstView;
														},
														get fallback() {
															return (0, C.createComponent)(z, {
																get uri() {
																	return G.workspaceContextService.resolveRelativePath(
																		J.file?.relativeWorkspacePath ?? "",
																	);
																},
															});
														},
														get children() {
															return (0, C.createComponent)(a.$0$b, {
																get index() {
																	return W();
																},
																get children() {
																	return (0, C.createComponent)(z, {
																		get uri() {
																			return G.workspaceContextService.resolveRelativePath(
																				J.file?.relativeWorkspacePath ?? "",
																			);
																		},
																	});
																},
															});
														},
													});
												},
											}),
									}),
									null,
								),
								(0, d.insert)(
									K,
									(0, C.createComponent)(m.Show, {
										get when() {
											return V.fileResults.length > V.maxIndex;
										},
										get children() {
											const J = T(),
												W = J.firstChild,
												X = W.nextSibling,
												Y = X.nextSibling;
											return (
												J.style.setProperty("padding", "2px 12px"),
												(0, d.insert)(
													J,
													() => V.fileResults.length - V.maxIndex,
													X,
												),
												J
											);
										},
									}),
									null,
								),
								K
							);
						})()
					);
				}
				function z(V) {
					const G = (0, c.$odc)();
					return (() => {
						const K = k();
						return (
							K.addEventListener("click", (J) => {
								J.stopPropagation(), G.openerService.open(V.uri);
							}),
							K.style.setProperty("padding", "4px 8px 0px 8px"),
							K.style.setProperty("border-radius", "8px"),
							K.style.setProperty("max-width", "fit-content"),
							(0, d.insert)(
								K,
								(0, C.createComponent)(a.$$$b, {
									get uri() {
										return V.uri;
									},
								}),
							),
							K
						);
					})();
				}
				function F(V) {
					const G = (0, m.createMemo)(
							() => h.$10b + V.hydeResults.reasoning + h.$20b,
						),
						K = (0, m.createMemo)(() => V.hydeResults.queries);
					return (0, C.createComponent)(q, {
						get headerText() {
							return V.headerText;
						},
						get isLoading() {
							return V.isLoading;
						},
						get collapsed() {
							return (() => {
								const J = I();
								return (
									(0, d.insert)(
										J,
										(0, C.createComponent)(m.For, {
											get each() {
												return K();
											},
											children: (W) =>
												(0, C.createComponent)(x, {
													get text() {
														return W.text;
													},
													get glob() {
														return W.globsNewLineSeparated;
													},
												}),
										}),
									),
									J
								);
							})();
						},
						get children() {
							return [
								(() => {
									const J = I();
									return (
										J.style.setProperty("font-style", "italic"),
										J.style.setProperty("opacity", "0.5"),
										J.style.setProperty("padding-top", "1em"),
										J.style.setProperty("padding-bottom", "1em"),
										(0, d.insert)(J, () => V.hydeResults.reasoning),
										J
									);
								})(),
								(() => {
									const J = I();
									return (
										(0, d.insert)(
											J,
											(0, C.createComponent)(m.For, {
												get each() {
													return K();
												},
												children: (W) =>
													(0, C.createComponent)(x, {
														get text() {
															return W.text;
														},
														get glob() {
															return W.globsNewLineSeparated;
														},
													}),
											}),
										),
										J
									);
								})(),
							];
						},
					});
				}
				function x(V) {
					return (() => {
						const G = L(),
							K = G.firstChild;
						return (
							G.style.setProperty("padding", "4px 8px"),
							G.style.setProperty("margin", "4px 0px"),
							G.style.setProperty("max-width", "fit-content"),
							G.style.setProperty(
								"background",
								"var(--vscode-activityBar-background)",
							),
							(0, d.insert)(K, () => V.text),
							G
						);
					})();
				}
				function H(V) {
					let G, K;
					const [J, W] = (0, m.createSignal)(!1);
					return (
						(0, m.createEffect)(() => {
							V.collapse ? W(!0) : W(!1);
						}),
						(() => {
							const X = N(),
								Y = X.firstChild,
								ie = Y.firstChild,
								ne = ie.firstChild,
								ee = ne.nextSibling,
								_ = ie.nextSibling,
								te = _.nextSibling,
								Q = G;
							typeof Q == "function" ? (0, i.use)(Q, X) : (G = X),
								X.style.setProperty("overflow", "hidden"),
								X.style.setProperty("height", "fit-content");
							const Z = K;
							return (
								typeof Z == "function" ? (0, i.use)(Z, Y) : (K = Y),
								Y.style.setProperty("height", "fit-content"),
								ie.addEventListener("click", (se) => {
									se.stopPropagation(), W((re) => !re);
								}),
								ie.style.setProperty("display", "flex"),
								ie.style.setProperty("justify-content", "space-between"),
								ie.style.setProperty("align-items", "center"),
								ie.style.setProperty(
									"color",
									"var(--vscode-input-placeholderForeground)",
								),
								ie.style.setProperty("height", "36px"),
								ie.style.setProperty("border-radius", "8px"),
								ie.style.setProperty("padding", "0px 12px"),
								ie.style.setProperty("user-select", "none"),
								ee.addEventListener("click", (se) => {
									se.stopPropagation(), W((re) => !re);
								}),
								(0, d.insert)(
									ee,
									(0, C.createComponent)(m.Show, {
										get when() {
											return !J();
										},
										get children() {
											return D();
										},
									}),
									null,
								),
								(0, d.insert)(
									ee,
									(0, C.createComponent)(m.Show, {
										get when() {
											return J();
										},
										get children() {
											return M();
										},
									}),
									null,
								),
								_.style.setProperty("border-radius", "8px"),
								_.style.setProperty("padding", "0px 12px"),
								(0, d.insert)(
									_,
									(0, C.createComponent)(m.Show, {
										get when() {
											return !J();
										},
										get children() {
											return V.children;
										},
									}),
								),
								te.style.setProperty("height", "12px"),
								X
							);
						})()
					);
				}
				function q(V) {
					let G, K;
					const [J, W] = (0, m.createSignal)(!1);
					return (
						(0, m.createEffect)(() => {
							V.onSwitchCollapsable && V.onSwitchCollapsable(J());
						}),
						(0, m.createEffect)(() => {
							V.isLoading ? W(!1) : W(!0);
						}),
						(() => {
							const X = A(),
								Y = X.firstChild,
								ie = Y.firstChild,
								ne = ie.firstChild,
								ee = ne.nextSibling,
								_ = G;
							typeof _ == "function" ? (0, i.use)(_, X) : (G = X),
								X.style.setProperty("overflow", "hidden"),
								X.style.setProperty("border-radius", "8px"),
								X.style.setProperty("padding", "0px 12px"),
								X.style.setProperty("height", "fit-content"),
								X.style.setProperty("user-select", "none");
							const te = K;
							return (
								typeof te == "function" ? (0, i.use)(te, Y) : (K = Y),
								Y.style.setProperty("height", "fit-content"),
								ie.addEventListener("click", (Q) => {
									Q.stopPropagation(), W((Z) => !Z);
								}),
								ie.style.setProperty("display", "flex"),
								ie.style.setProperty("justify-content", "space-between"),
								ie.style.setProperty("align-items", "center"),
								ie.style.setProperty("height", "36px"),
								ie.style.setProperty("border-radius", "8px"),
								ie.style.setProperty("padding", "0px 12px"),
								ne.style.setProperty("font-weight", "normal"),
								(0, d.insert)(ne, () => V.headerText, null),
								(0, d.insert)(
									ne,
									(0, C.createComponent)(n.$C$b, {
										get show() {
											return V.isLoading;
										},
									}),
									null,
								),
								ee.addEventListener("click", (Q) => {
									Q.stopPropagation(), W((Z) => !Z);
								}),
								(0, d.insert)(
									ee,
									(0, C.createComponent)(m.Show, {
										get when() {
											return !J();
										},
										get children() {
											return D();
										},
									}),
									null,
								),
								(0, d.insert)(
									ee,
									(0, C.createComponent)(m.Show, {
										get when() {
											return J();
										},
										get children() {
											return M();
										},
									}),
									null,
								),
								(0, d.insert)(
									Y,
									(0, C.createComponent)(m.Show, {
										get when() {
											return !J();
										},
										get fallback() {
											return (() => {
												const Q = I();
												return (
													Q.style.setProperty("height", "fit-content"),
													(0, d.insert)(Q, () => V.collapsed),
													Q
												);
											})();
										},
										get children() {
											const Q = I();
											return (
												Q.style.setProperty("height", "fit-content"),
												(0, d.insert)(Q, () => V.children),
												Q
											);
										},
									}),
									null,
								),
								X
							);
						})()
					);
				}
			},
		)
