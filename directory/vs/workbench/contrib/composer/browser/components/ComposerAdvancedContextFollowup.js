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
import '../../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../../../aisearch/browser/components/AiSearch.js';
import '../../../controlCommon/browser/solid.js';
import '../../../ui/browser/simpleButton/simpleButton.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/constants.js';
import '../../../ui/browser/collapsible/collapsible.js';
import '../../../ui/browser/contextDisplay/listContextDisplay.js';
import '../../../ui/browser/scrollableDiv.js';
import '../../../../../platform/opener/common/opener.js';
import '../../../../../platform/editor/common/editor.js';
import '../hooks/useComposerDataHandle.js';
import '../../../../../css!vs/workbench/contrib/composer/browser/components/ComposerAdvancedContextFollowup.js';
define(
			de[4272],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 134, 1375, 36, 147, 7, 58, 696, 1070,
				135, 41, 116, 177, 2405,
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
				u /*reactiveStorageTypes*/,
				a /*AiSearch*/,
				h /*solid*/,
				c /*simpleButton*/,
				n /*dom*/,
				g /*constants*/,
				p /*collapsible*/,
				o /*listContextDisplay*/,
				f /*scrollableDiv*/,
				b /*opener*/,
				s /*editor*/,
				l /*useComposerDataHandle*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.RepoStep = void 0),
					(e.CodebaseIndexingWarnings = A),
					(e.ComposerGlobalContextAnimation = R),
					(n = mt(n));
				const y = (0, t.template)(
						'<div class="codebase-currently-indexing-hint-in-chat">Currently indexing your codebase (<!>% done). Results will be faster and more accurate if you try once done.',
					),
					$ = (0, t.template)(
						'<div class="tooltip" id="enable-indexing-tooltip"><div class="codebase-not-auto-indexed-hint-in-chat">',
					),
					v = (0, t.template)(
						'<div><div class="codebase-currently-indexing-hint-in-chat"><span>Indexing is disabled. This results in significantly worse									speed and accuracy in codebase chats. </span><span>Turn on indexing</span><span> to fix this</span></div><div class="codebase-not-auto-indexed-hint-in-chat"></div><div><div class="codicon codicon-kebab-vertical" id="enable-indexing-tooltip-button">',
					),
					S = (0, t.template)(
						'<div class="tooltip" id="index-codebase-tooltip"><div class="codebase-not-auto-indexed-hint-in-chat">',
					),
					I = (0, t.template)(
						'<div class="codebase-not-auto-indexed-hint-in-chat"><span>Error indexing codebase</span><div><div class="codicon codicon-kebab-vertical" id="index-codebase-tooltip-button">',
					),
					T = (0, t.template)(
						'<div class="codebase-not-auto-indexed-hint-in-chat-below">Codebase chat is falling back to BM25, which is slower and less accurate than embeddings.',
					),
					P = (0, t.template)(
						'<div class="codebase-not-auto-indexed-hint-in-chat"><span>Codebase not auto-indexed (too many files)</span><div><div class="codicon codicon-kebab-vertical" id="index-codebase-tooltip-button">',
					),
					k = (0, t.template)(
						'<div class="codebase-not-auto-indexed-hint-in-chat-below">Manually enable indexing for this codebase to fix this (codebase chat will be slower and less accurate until you do).',
					),
					L = (0, t.template)("<div>"),
					D = (0, t.template)('<div class="selectable-hover">And <!> others'),
					M = (0, t.template)(
						'<div class="query-list-item"><div class="query-list-item-content"><div class="query-list-item-title"><span class="query-list-item-number">.</span><span class="query-list-item-text"></span></div><div class="query-list-item-subtitle">',
					);
				var N;
				(function (x) {
					(x[(x.None = 0)] = "None"),
						(x[(x.GeneratingQueries = 1)] = "GeneratingQueries"),
						(x[(x.SearchingFiles = 2)] = "SearchingFiles"),
						(x[(x.RerankingFiles = 3)] = "RerankingFiles"),
						(x[(x.GeneratingTokens = 4)] = "GeneratingTokens"),
						(x[(x.Done = 5)] = "Done");
				})(N || (e.RepoStep = N = {}));
				function A(x) {
					const H = (0, h.$odc)(),
						[q, V] = (0, r.createSignal)(!1),
						[G, K] = (0, r.createSignal)(!1),
						[J, W] = (0, r.createSignal)(null),
						X = (ie) => {
							const ne = n.$Ogb(),
								ee = J();
							ee && (ne.removeEventListener("click", ee), W(null));
							const _ = ne.document.getElementById("enable-indexing-tooltip"),
								te = ne.document.getElementById(
									"enable-indexing-tooltip-button",
								),
								Q = ne.document.getElementById("index-codebase-tooltip"),
								Z = ne.document.getElementById("index-codebase-tooltip-button"),
								se =
									ie === "enable-indexing"
										? [_, te]
										: ie === "index-codebase"
											? [Q, Z]
											: [],
								re = (le) => {
									se.includes(le.target) ||
										(ie === "enable-indexing"
											? V(!1)
											: ie === "index-codebase" && K(!1));
								};
							ne.addEventListener("click", re), W(() => re);
						},
						Y = () => {
							const ie = n.$Ogb(),
								ne = J();
							ne && ie.removeEventListener("click", ne);
						};
					return (
						(0, r.createEffect)(
							() => (
								q() ? X("enable-indexing") : G() ? X("index-codebase") : Y(),
								() => {
									Y();
								}
							),
						),
						(0, d.createComponent)(r.Show, {
							get when() {
								return x.searchType === u.SearchType.keyword;
							},
							get children() {
								return (0, d.createComponent)(r.Switch, {
									get children() {
										return [
											(0, d.createComponent)(r.Match, {
												get when() {
													return [
														"loading",
														"indexing-setup",
														"indexing",
													].includes(
														H.reactiveStorageService.nonPersistentStorage
															.repositoryIndexingStatus?.case ?? "",
													);
												},
												get children() {
													const ie = y(),
														ne = ie.firstChild,
														ee = ne.nextSibling,
														_ = ee.nextSibling;
													return (
														(0, m.insert)(
															ie,
															() =>
																(
																	(H.reactiveStorageService.nonPersistentStorage
																		.mainLocalRepositoryProgress?.progress ??
																		0) * 100
																).toFixed(1),
															ee,
														),
														ie
													);
												},
											}),
											(0, d.createComponent)(r.Match, {
												get when() {
													return (
														H.reactiveStorageService.nonPersistentStorage
															.repositoryIndexingStatus?.case ===
															"not-indexed" &&
														Date.now() -
															H.reactiveStorageService
																.applicationUserPersistentStorage.indexingState
																.lastAskedToIndexTime >
															1e3 * 60 * 60 * 24 * 7 &&
														H.reactiveStorageService
															.applicationUserPersistentStorage.indexingState
															.fullyDisableAskToIndex !== !0
													);
												},
												get children() {
													const ie = v(),
														ne = ie.firstChild,
														ee = ne.firstChild,
														_ = ee.nextSibling,
														te = ne.nextSibling,
														Q = te.nextSibling,
														Z = Q.firstChild;
													return (
														ie.style.setProperty("display", "flex"),
														ie.style.setProperty("align-items", "center"),
														ne.style.setProperty(
															"color",
															"var(--vscode-errorForeground)",
														),
														_.addEventListener("click", () => {
															H.reactiveStorageService.setApplicationUserPersistentStorage(
																"indexingState",
																{ lastAskedToIndexTime: Date.now() },
															),
																H.repositoryService.indexMainRepository(),
																H.reactiveStorageService.setApplicationUserPersistentStorage(
																	"indexRepository",
																	!0,
																);
														}),
														_.style.setProperty("text-decoration", "underline"),
														_.style.setProperty("cursor", "pointer"),
														_.style.setProperty("text-underline-offset", "2px"),
														(0, m.insert)(
															te,
															(0, d.createComponent)(c.$rdc, {
																title: "Ignore",
																type: "secondary",
																onClick: () => {
																	H.reactiveStorageService.setApplicationUserPersistentStorage(
																		"indexingState",
																		{ lastAskedToIndexTime: Date.now() },
																	);
																},
															}),
														),
														Z.addEventListener("click", (se) => {
															se.stopPropagation(), V(!q());
														}),
														Z.style.setProperty("font-size", "12px"),
														Z.style.setProperty("width", "12px"),
														Z.style.setProperty("height", "12px"),
														Z.style.setProperty("text-align", "center"),
														Z.style.setProperty("cursor", "pointer"),
														(0, m.insert)(
															Q,
															(0, d.createComponent)(r.Show, {
																get when() {
																	return q();
																},
																get children() {
																	const se = $(),
																		re = se.firstChild;
																	return (
																		se.style.setProperty("display", "flex"),
																		se.style.setProperty(
																			"align-items",
																			"center",
																		),
																		se.style.setProperty(
																			"background-color",
																			"var(--vscode-editorHoverWidget-background)",
																		),
																		se.style.setProperty(
																			"color",
																			"var(--vscode-editorHoverWidget-foreground)",
																		),
																		se.style.setProperty("padding", "8px"),
																		se.style.setProperty(
																			"border-radius",
																			"4px",
																		),
																		se.style.setProperty(
																			"box-shadow",
																			"0 2px 8px rgba(0, 0, 0, 0.2)",
																		),
																		se.style.setProperty(
																			"position",
																			"absolute",
																		),
																		se.style.setProperty("top", "0"),
																		se.style.setProperty("right", "0"),
																		se.style.setProperty(
																			"white-space",
																			"nowrap",
																		),
																		se.style.setProperty("font-size", "12px"),
																		se.style.setProperty("z-index", "1000"),
																		(0, m.insert)(
																			re,
																			(0, d.createComponent)(c.$rdc, {
																				title: "Don't show me again",
																				type: "secondary",
																				onClick: () => {
																					H.reactiveStorageService.setApplicationUserPersistentStorage(
																						"indexingState",
																						{ fullyDisableAskToIndex: !0 },
																					);
																				},
																			}),
																		),
																		se
																	);
																},
															}),
															null,
														),
														(0, E.effect)(() =>
															(0, w.setAttribute)(
																Z,
																"data-tooltip",
																q() ? "Don't show me again" : void 0,
															),
														),
														ie
													);
												},
											}),
											(0, d.createComponent)(r.Match, {
												get when() {
													return (
														H.reactiveStorageService
															.workspaceUserPersistentStorage
															.hasManuallyDisabledAskToIndex !== !0 &&
														H.reactiveStorageService.nonPersistentStorage
															.repositoryIndexingStatus?.case === "error" &&
														H.reactiveStorageService.nonPersistentStorage
															.repositoryIndexingStatus
													);
												},
												children: (ie) => [
													(() => {
														const ne = I(),
															ee = ne.firstChild,
															_ = ee.nextSibling,
															te = _.firstChild;
														return (
															ne.style.setProperty("display", "flex"),
															ne.style.setProperty("align-items", "flex-end"),
															ee.style.setProperty(
																"color",
																"var(--vscode-errorForeground)",
															),
															(0, m.insert)(
																ne,
																(0, d.createComponent)(c.$rdc, {
																	title: "Open Settings",
																	type: "primary",
																	onClick: () => {
																		H.commandService.executeCommand(
																			g.$QV,
																			"features",
																			"cursor-settings-codebase-indexing",
																		);
																	},
																}),
																_,
															),
															te.addEventListener("click", (Q) => {
																Q.stopPropagation(), K(!G());
															}),
															te.style.setProperty("font-size", "12px"),
															te.style.setProperty("width", "12px"),
															te.style.setProperty("height", "12px"),
															te.style.setProperty("text-align", "center"),
															te.style.setProperty("cursor", "pointer"),
															(0, m.insert)(
																_,
																(0, d.createComponent)(r.Show, {
																	get when() {
																		return G();
																	},
																	get children() {
																		const Q = S(),
																			Z = Q.firstChild;
																		return (
																			Q.style.setProperty("display", "flex"),
																			Q.style.setProperty(
																				"align-items",
																				"center",
																			),
																			Q.style.setProperty(
																				"background-color",
																				"var(--vscode-editorHoverWidget-background)",
																			),
																			Q.style.setProperty(
																				"color",
																				"var(--vscode-editorHoverWidget-foreground)",
																			),
																			Q.style.setProperty("padding", "8px"),
																			Q.style.setProperty(
																				"border-radius",
																				"4px",
																			),
																			Q.style.setProperty(
																				"box-shadow",
																				"0 2px 8px rgba(0, 0, 0, 0.2)",
																			),
																			Q.style.setProperty(
																				"position",
																				"absolute",
																			),
																			Q.style.setProperty("top", "0"),
																			Q.style.setProperty("right", "0"),
																			Q.style.setProperty(
																				"white-space",
																				"nowrap",
																			),
																			Q.style.setProperty("font-size", "12px"),
																			Q.style.setProperty("z-index", "1000"),
																			(0, m.insert)(
																				Z,
																				(0, d.createComponent)(c.$rdc, {
																					title: "Don't show me again",
																					type: "secondary",
																					onClick: () => {
																						H.reactiveStorageService.setWorkspaceUserPersistentStorage(
																							"hasManuallyDisabledAskToIndex",
																							!0,
																						);
																					},
																				}),
																			),
																			Q
																		);
																	},
																}),
																null,
															),
															(0, E.effect)(() =>
																(0, w.setAttribute)(
																	te,
																	"data-tooltip",
																	G() ? "Don't show me again" : void 0,
																),
															),
															ne
														);
													})(),
													(() => {
														const ne = T();
														return (
															ne.style.setProperty(
																"color",
																"var(--vscode-errorForeground)",
															),
															ne
														);
													})(),
												],
											}),
											(0, d.createComponent)(r.Match, {
												get when() {
													return (
														H.reactiveStorageService
															.workspaceUserPersistentStorage
															.hasManuallyDisabledAskToIndex !== !0 &&
														Date.now() -
															(H.reactiveStorageService
																.workspaceUserPersistentStorage
																.lastAskedToIndexTime ?? 0) >
															1e3 * 60 * 60 * 24 * 7 &&
														H.reactiveStorageService.nonPersistentStorage
															.repositoryIndexingStatus?.case ===
															"not-auto-indexing" &&
														H.reactiveStorageService.nonPersistentStorage
															.repositoryIndexingStatus
													);
												},
												children: (ie) => [
													(() => {
														const ne = P(),
															ee = ne.firstChild,
															_ = ee.nextSibling,
															te = _.firstChild;
														return (
															ne.style.setProperty("display", "flex"),
															ne.style.setProperty("align-items", "flex-end"),
															ee.style.setProperty(
																"color",
																"var(--vscode-errorForeground)",
															),
															(0, m.insert)(
																ne,
																(0, d.createComponent)(c.$rdc, {
																	title: "Enable Indexing",
																	type: "primary",
																	onClick: () => {
																		H.reactiveStorageService.setWorkspaceUserPersistentStorage(
																			"hasAskedToIndex",
																			!0,
																		),
																			H.reactiveStorageService.setWorkspaceUserPersistentStorage(
																				"lastAskedToIndexTime",
																				Date.now(),
																			),
																			H.repositoryService.indexMainRepository();
																	},
																}),
																_,
															),
															(0, m.insert)(
																ne,
																(0, d.createComponent)(c.$rdc, {
																	title: "Ignore",
																	type: "secondary",
																	onClick: () => {
																		H.reactiveStorageService.setWorkspaceUserPersistentStorage(
																			"lastAskedToIndexTime",
																			Date.now(),
																		);
																	},
																}),
																_,
															),
															te.addEventListener("click", (Q) => {
																Q.stopPropagation(), K(!G());
															}),
															te.style.setProperty("font-size", "12px"),
															te.style.setProperty("width", "12px"),
															te.style.setProperty("height", "12px"),
															te.style.setProperty("text-align", "center"),
															te.style.setProperty("cursor", "pointer"),
															(0, m.insert)(
																_,
																(0, d.createComponent)(r.Show, {
																	get when() {
																		return G();
																	},
																	get children() {
																		const Q = S(),
																			Z = Q.firstChild;
																		return (
																			Q.style.setProperty("display", "flex"),
																			Q.style.setProperty(
																				"align-items",
																				"center",
																			),
																			Q.style.setProperty(
																				"background-color",
																				"var(--vscode-editorHoverWidget-background)",
																			),
																			Q.style.setProperty(
																				"color",
																				"var(--vscode-editorHoverWidget-foreground)",
																			),
																			Q.style.setProperty("padding", "8px"),
																			Q.style.setProperty(
																				"border-radius",
																				"4px",
																			),
																			Q.style.setProperty(
																				"box-shadow",
																				"0 2px 8px rgba(0, 0, 0, 0.2)",
																			),
																			Q.style.setProperty(
																				"position",
																				"absolute",
																			),
																			Q.style.setProperty("top", "0"),
																			Q.style.setProperty("right", "0"),
																			Q.style.setProperty(
																				"white-space",
																				"nowrap",
																			),
																			Q.style.setProperty("font-size", "12px"),
																			Q.style.setProperty("z-index", "1000"),
																			(0, m.insert)(
																				Z,
																				(0, d.createComponent)(c.$rdc, {
																					title: "Don't show me again",
																					type: "secondary",
																					onClick: () => {
																						H.reactiveStorageService.setWorkspaceUserPersistentStorage(
																							"hasManuallyDisabledAskToIndex",
																							!0,
																						);
																					},
																				}),
																			),
																			Q
																		);
																	},
																}),
																null,
															),
															(0, E.effect)(() =>
																(0, w.setAttribute)(
																	te,
																	"data-tooltip",
																	G() ? "Don't show me again" : void 0,
																),
															),
															ne
														);
													})(),
													(() => {
														const ne = k();
														return (
															ne.style.setProperty(
																"color",
																"var(--vscode-errorForeground)",
															),
															ne
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
				function R(x) {
					const H = (0, h.$odc)(),
						q = 0.3,
						V = 0.05,
						G = 15,
						[K, J] = (0, r.createSignal)(N.None),
						{ currentComposer: W, updateCurrentComposer: X } = (0,
						l.useComposerDataHandle)(() => x.composerDataHandle),
						[Y, ie] = (0, r.createSignal)(!0),
						ne = (0, r.createMemo)(() => x.hydeResults !== void 0);
					(0, r.createEffect)(() => {
						J(x.repoStep);
					});
					const ee = (0, r.createMemo)(() =>
							x.repoStep > N.GeneratingQueries
								? "Computed Search Queries"
								: "Computing Search Queries",
						),
						_ = (0, r.createMemo)(() =>
							x.textIsGenerated
								? "Search completed (" + x.fileResults.length + " files)"
								: x.repoStep === N.GeneratingTokens && !x.textIsGenerated
									? "Reading files"
									: x.repoStep > N.GeneratingTokens
										? "Read files"
										: x.addFolders.length === 0
											? "Searching for files"
											: x.addFolders.length === 1
												? "Searching for folder"
												: "Searching for folders",
						),
						te = (0, r.createMemo)(() =>
							x.fileResults === void 0 ? [] : x.fileResults,
						),
						Q = (0, r.createMemo)(() =>
							x.hydeResults === void 0
								? { queries: [], reasoning: "" }
								: x.hydeResults,
						),
						Z = (0, r.createMemo)(
							() =>
								ne() &&
								(x.repoStep === N.GeneratingQueries || Q().queries.length > 0),
						),
						se = (0, r.createMemo)(
							() => K() > N.GeneratingQueries && te().length > 0,
						),
						re = (0, r.createMemo)(
							() =>
								(x.repoStep >= N.GeneratingTokens || x.repoStep === N.None) &&
								x.textIsGenerated &&
								x.nextAiBubbleId,
						),
						le = (0, r.createMemo)(() => Z() || se() || re());
					return (0, d.createComponent)(r.Show, {
						get when() {
							return le();
						},
						get children() {
							const oe = L();
							return (
								oe.style.setProperty("padding-top", "10px"),
								oe.style.setProperty("padding-left", "6px"),
								oe.style.setProperty("padding-right", "6px"),
								oe.style.setProperty("display", "flex"),
								oe.style.setProperty("flex-direction", "column"),
								oe.style.setProperty("gap", "6px"),
								(0, m.insert)(
									oe,
									(0, d.createComponent)(r.Show, {
										get when() {
											return Z();
										},
										get children() {
											return (0, d.createComponent)(U, {
												get headerText() {
													return ee();
												},
												get hydeResults() {
													return Q();
												},
												get isLoading() {
													return K() === N.GeneratingQueries;
												},
											});
										},
									}),
									null,
								),
								(0, m.insert)(
									oe,
									(0, d.createComponent)(r.Show, {
										get when() {
											return se();
										},
										get children() {
											return (0, d.createComponent)(O, {
												get fileResults() {
													return te();
												},
												get firstFileResultsRender() {
													return Y();
												},
												setFirstFileResultsRender: ie,
												get isLoading() {
													return (
														K() === N.SearchingFiles ||
														(K() === N.GeneratingTokens && !x.textIsGenerated)
													);
												},
												get headerText() {
													return _();
												},
											});
										},
									}),
									null,
								),
								(0, m.insert)(
									oe,
									(0, d.createComponent)(r.Show, {
										get when() {
											return re();
										},
										get children() {
											return (0, d.createComponent)(F, {
												get composerId() {
													return W().composerId;
												},
												get bubbleId() {
													return x.nextAiBubbleId;
												},
											});
										},
									}),
									null,
								),
								oe
							);
						},
					});
				}
				function O(x) {
					const [H, q] = (0, r.createSignal)(void 0),
						V = (0, r.createMemo)(() => H() ?? !0);
					return (
						(0, r.createEffect)(() => {
							H() === void 0 && !x.isLoading && q(!1),
								x.isLoading || x.setFirstFileResultsRender(!1);
						}),
						(0, d.createComponent)(p.$Zcc, {
							get isOpen() {
								return V();
							},
							setIsOpen: q,
							get title() {
								return x.headerText;
							},
							get isLoading() {
								return x.isLoading;
							},
							get children() {
								return (0, C.memo)(() => !!V())()
									? (0, d.createComponent)(B, {
											cleanupFn: () => x.setFirstFileResultsRender(!1),
											get fileResults() {
												return x.fileResults;
											},
											maxIndex: 20,
											get isFirstView() {
												return x.firstFileResultsRender;
											},
										})
									: (0, d.createComponent)(B, {
											get fileResults() {
												return x.fileResults;
											},
											maxIndex: 5,
											isFirstView: !1,
										});
							},
						})
					);
				}
				function B(x) {
					const H = (0, h.$odc)(),
						[q, V] = (0, r.createSignal)(!1);
					(0, r.createEffect)(() => {
						if (x.cleanupFn) {
							const K = x.cleanupFn;
							(0, r.onCleanup)(() => {
								K();
							});
						}
					});
					const G = (0, r.createMemo)(() => {
						const K = q() ? x.fileResults.length : x.maxIndex;
						return x.fileResults.slice(0, K).map((J) => ({
							uri: H.workspaceContextService.resolveRelativePath(
								J.file?.relativeWorkspacePath ?? "",
							),
							score: J.score,
							onClick: (W) => {
								H.openerService.open(W.uri);
							},
						}));
					});
					return (() => {
						const K = L();
						return (
							K.style.setProperty("height", "200px"),
							K.style.setProperty("overflow", "hidden"),
							(0, m.insert)(
								K,
								(0, d.createComponent)(f.$w0b, {
									style: { height: "100%" },
									scrollingDirection: "vertical",
									get children() {
										return [
											(0, d.createComponent)(r.Show, {
												get when() {
													return x.isFirstView;
												},
												get fallback() {
													return (0, d.createComponent)(o.$1cc, {
														get files() {
															return G();
														},
														variant: "compact",
													});
												},
												get children() {
													return (0, d.createComponent)(a.$0$b, {
														index: 0,
														get children() {
															return (0, d.createComponent)(o.$1cc, {
																get files() {
																	return G();
																},
																variant: "compact",
															});
														},
													});
												},
											}),
											(0, d.createComponent)(r.Show, {
												get when() {
													return !q() && x.fileResults.length > x.maxIndex;
												},
												get children() {
													const J = D(),
														W = J.firstChild,
														X = W.nextSibling,
														Y = X.nextSibling;
													return (
														J.addEventListener("click", () => V(!0)),
														J.style.setProperty("padding", "2px 12px"),
														J.style.setProperty("font-size", "11px"),
														J.style.setProperty("opacity", "0.7"),
														(0, m.insert)(
															J,
															() => x.fileResults.length - x.maxIndex,
															X,
														),
														J
													);
												},
											}),
										];
									},
								}),
							),
							K
						);
					})();
				}
				function U(x) {
					const [H, q] = (0, r.createSignal)(void 0),
						V = (0, r.createMemo)(() => H() ?? !1);
					(0, r.createEffect)(() => {
						H() === void 0 && !x.isLoading && q(!1);
					});
					const G = (0, r.createMemo)(() => x.hydeResults.queries);
					return (0, d.createComponent)(p.$Zcc, {
						get isOpen() {
							return V();
						},
						setIsOpen: q,
						get title() {
							return x.headerText;
						},
						get isLoading() {
							return x.isLoading;
						},
						get children() {
							return [
								(0, d.createComponent)(r.Show, {
									get when() {
										return x.hydeResults.reasoning;
									},
									get children() {
										const K = L();
										return (
											K.style.setProperty("font-style", "italic"),
											K.style.setProperty("opacity", "0.5"),
											K.style.setProperty("padding", "8px 12px"),
											K.style.setProperty(
												"border-left",
												"2px solid var(--vscode-textLink-foreground)",
											),
											K.style.setProperty("margin", "8px 0"),
											K.style.setProperty(
												"background",
												"var(--vscode-textBlockQuote-background)",
											),
											(0, m.insert)(K, () => x.hydeResults.reasoning),
											K
										);
									},
								}),
								(0, d.createComponent)(z, {
									get queries() {
										return G();
									},
								}),
							];
						},
					});
				}
				function z(x) {
					return (() => {
						const H = L();
						return (
							(0, m.insert)(
								H,
								(0, d.createComponent)(r.For, {
									get each() {
										return x.queries;
									},
									children: (q, V) =>
										(() => {
											const G = M(),
												K = G.firstChild,
												J = K.firstChild,
												W = J.firstChild,
												X = W.firstChild,
												Y = W.nextSibling,
												ie = J.nextSibling;
											return (
												(0, m.insert)(W, () => V() + 1, X),
												(0, m.insert)(Y, () => q.text),
												(0, m.insert)(ie, () =>
													q.globsNewLineSeparated
														.split(`
`)
														.join(", "),
												),
												G
											);
										})(),
								}),
							),
							(0, E.effect)(() =>
								(0, i.className)(
									H,
									`query-list ${x.variant === "compact" ? "query-list--compact" : ""}`,
								),
							),
							H
						);
					})();
				}
				function F(x) {
					const H = (0, h.$odc)(),
						[q, V] = (0, r.createSignal)(!1),
						G = (0, r.createMemo)(() =>
							H.composerDataService.getComposerBubble(x.composerId, x.bubbleId),
						),
						K = (0, r.createMemo)(() =>
							(G()?.intermediateChunks ?? []).map((J) => ({
								uri: H.workspaceContextService.resolveRelativePath(
									J.chunkIdentity.fileName,
								),
								selection: {
									startLineNumber: J.chunkIdentity.startLine,
									endLineNumber: J.chunkIdentity.endLine,
									startColumn: 1,
									endColumn: 1,
								},
								onClick: (W) => {
									H.openerService.open(
										(0, b.$8rb)(W.uri, {
											startLineNumber: W.selection?.startLineNumber ?? 0,
											startColumn: 1,
											endLineNumber: W.selection?.endLineNumber ?? 0,
											endColumn: 1e3,
										}),
										{
											openToSide: !1,
											editorOptions: {
												revealIfVisible: !0,
												revealIfOpened: !0,
												source: s.EditorOpenSource.USER,
											},
											fromUserGesture: !0,
										},
									);
								},
							})),
						);
					return (0, d.createComponent)(r.Show, {
						get when() {
							return G()?.intermediateSectionType === "codebase";
						},
						get children() {
							return (0, d.createComponent)(p.$Zcc, {
								get isOpen() {
									return q();
								},
								setIsOpen: V,
								title: "Final Codebase Context",
								isLoading: !1,
								get children() {
									const J = L();
									return (
										J.style.setProperty("height", "200px"),
										(0, m.insert)(
											J,
											(0, d.createComponent)(f.$w0b, {
												style: { height: "100%" },
												scrollingDirection: "vertical",
												get children() {
													return (0, d.createComponent)(o.$1cc, {
														get files() {
															return K();
														},
														variant: "compact",
													});
												},
											}),
										),
										J
									);
								},
							});
						},
					});
				}
			},
		)
