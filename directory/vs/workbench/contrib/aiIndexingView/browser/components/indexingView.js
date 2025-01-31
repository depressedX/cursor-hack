import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../ui/browser/simpleButton/simpleButton.js';
import '../../../controlCommon/browser/solid.js';
import '../../../../../base/browser/baseSolidComponents/progress/api.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/browser/solidComponents/switch/switch.js';
import '../../../aisearch/browser/components/AiSearch.js';
import '../../../aichat/browser/components/Utils.js';
import '../../../../../base/common/uuid.js';
import '../../../ui/browser/loadingStateButton/loadingStateButton.js';
import '../../../../../base/common/buffer.js';
import '../../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../../../contextGraph/browser/ContextGraphPane.js';
import '../../../aiConfig/browser/aiConfigHelper.js';
import '../../../ui/browser/dropdown/dropdown.js';
import '../../../../../base/common/resources.js';
import '../../../../../css!vs/workbench/contrib/aiIndexingView/browser/components/indexingView.js';
define(
			de[4334],
			he([
				1, 0, 2, 2, 2, 2, 13, 147, 36, 2623, 14, 650, 1375, 242, 47, 1073, 76,
				134, 4295, 270, 523, 19, 2365,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*web*/,
				i /*web*/,
				w /*web*/,
				E /*web*/,
				C /*solid*/,
				d /*simpleButton*/,
				m /*solid*/,
				r /*api*/,
				u /*codicons*/,
				a /*switch*/,
				h /*AiSearch*/,
				c /*Utils*/,
				n /*uuid*/,
				g /*loadingStateButton*/,
				p /*buffer*/,
				o /*reactiveStorageTypes*/,
				f /*ContextGraphPane*/,
				b /*aiConfigHelper*/,
				s /*dropdown*/,
				l /*resources*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cDc = x),
					(r = mt(r));
				const y = (0, t.template)("<div>Loading "),
					$ = (0, t.template)("<div>"),
					v = (0, t.template)(
						'<div class="settings__item_link">Configure ignored files',
					),
					S = (0, t.template)("<div><div><span>"),
					I = (0, t.template)(
						"<div>Not automatically computing index because number of files is <!>.",
					),
					T = (0, t.template)("<div>error: "),
					P = (0, t.template)(
						'<div class="indexing_progress__label-container">',
					),
					k = (0, t.template)('<div class="show-file-icons"><div>'),
					L = (0, t.template)("<div><div>"),
					D = (0, t.template)('<div class="indexing-view">'),
					M = (0, t.template)("<div>Setting up indexing "),
					N = (0, t.template)(
						'<div class="advanced-settings-dropdown__header"><i class="codicon codicon-chevron-up"></i>Hide Settings',
					),
					A = (0, t.template)('<span class="openai-switch-text">Enabled'),
					R = (0, t.template)(
						'<span class="settings__item_link">See all included files.',
					),
					O = (0, t.template)('<span class="settings__item_link"> debug view.'),
					B = (0, t.template)(
						'<div class="advanced-indexing-container"><div class="settings__item"><div><div> </div></div></div><div class="settings__item"><div><div><span class="settings__item_link">Configure ignored files</span></div></div></div><div class="settings__item"><div><div>',
					),
					U = (0, t.template)(
						'<div class="advanced-settings-dropdown__header"><i class="codicon codicon-chevron-down"></i>Show Settings',
					),
					z = (0, t.template)('<span class="openai-switch-text">Disabled'),
					F = "Too many files to upload.";
				function x() {
					const J = (0, m.$odc)(),
						W = J.reactiveStorageService,
						X = J.repositoryService,
						Y = (0, C.createMemo)(
							() => W.nonPersistentStorage.repositoryIndexingError?.message,
						),
						[ie, ne] = (0, C.createSignal)(!1),
						ee = (0, C.createMemo)(() =>
							parseFloat(
								(
									(W.nonPersistentStorage.mainLocalRepositoryProgress
										?.progress ?? 0) * 100
								).toFixed(1),
							),
						),
						_ = (0, C.createMemo)(
							() => W.nonPersistentStorage.repositoryIndexingStatus,
						);
					async function te() {
						const Q =
							J.workspaceContextService.resolveRelativePath(".cursorignore");
						if (!(await J.fileService.exists(Q))) {
							await J.fileService.createFile(Q);
							const se =
								new TextEncoder().encode(`# Add directories or file patterns to ignore during indexing (e.g. foo/ or *.csv)
`);
							await J.fileService.writeFile(Q, p.$Te.wrap(se));
						}
						J.openerService.open(Q);
					}
					return (() => {
						const Q = D();
						return (
							(0, w.insert)(
								Q,
								(0, E.createComponent)(C.Switch, {
									get children() {
										return [
											(0, E.createComponent)(C.Match, {
												get when() {
													return (
														W.nonPersistentStorage.repositoryIndexingStatus
															?.case === "loading"
													);
												},
												get children() {
													const Z = y(),
														se = Z.firstChild;
													return (
														Z.style.setProperty("display", "flex"),
														Z.style.setProperty("margin-bottom", "8px"),
														(0, w.insert)(
															Z,
															(0, E.createComponent)(c.$C$b, { show: !0 }),
															null,
														),
														Z
													);
												},
											}),
											(0, E.createComponent)(C.Match, {
												get when() {
													return (
														W.nonPersistentStorage.repositoryIndexingStatus
															?.case === "not-indexed"
													);
												},
												get children() {
													const Z = $();
													return (
														Z.style.setProperty("display", "flex"),
														(0, w.insert)(
															Z,
															(0, E.createComponent)(d.$rdc, {
																style: { width: "fit-content" },
																title: "Compute Index",
																onClick: () => {
																	J.reactiveStorageService.setWorkspaceUserPersistentStorage(
																		"onboardingMetadata",
																		{ shouldHideWarning: !0 },
																	),
																		X.indexMainRepository();
																},
																type: "primary",
															}),
														),
														Z
													);
												},
											}),
											(0, E.createComponent)(C.Match, {
												get when() {
													return (
														W.nonPersistentStorage.repositoryIndexingStatus
															?.case === "error"
													);
												},
												get children() {
													return [
														(0, E.createComponent)(d.$rdc, {
															style: { width: "fit-content", margin: "8px" },
															title: "Retry Index",
															get codicon() {
																return u.$ak.refresh;
															},
															onClick: () => {
																J.reactiveStorageService.setWorkspaceUserPersistentStorage(
																	"onboardingMetadata",
																	{ shouldHideWarning: !0 },
																),
																	X.indexMainRepository();
															},
															type: "primary",
														}),
														(() => {
															const Z = S(),
																se = Z.firstChild,
																re = se.firstChild;
															return (
																Z.style.setProperty("margin-bottom", "10px"),
																Z.style.setProperty(
																	"color",
																	"var(--vscode-errorForeground)",
																),
																se.style.setProperty("display", "flex"),
																se.style.setProperty(
																	"justify-content",
																	"space-between",
																),
																(0, w.insert)(re, Y),
																(0, w.insert)(
																	se,
																	(0, E.createComponent)(C.Show, {
																		get when() {
																			return (
																				(0, i.memo)(() => Y() === F)() &&
																				ie() === !1
																			);
																		},
																		get children() {
																			const le = v();
																			return (
																				le.addEventListener("click", () => {
																					te();
																				}),
																				le
																			);
																		},
																	}),
																	null,
																),
																Z
															);
														})(),
													];
												},
											}),
											(0, E.createComponent)(C.Match, {
												get when() {
													return (
														W.nonPersistentStorage.repositoryIndexingStatus
															?.case === "not-auto-indexing"
													);
												},
												get children() {
													return [
														(0, E.createComponent)(d.$rdc, {
															style: { width: "fit-content", margin: "8px" },
															title: "Do Compute Index",
															onClick: () => {
																J.reactiveStorageService.setWorkspaceUserPersistentStorage(
																	"onboardingMetadata",
																	{ shouldHideWarning: !0 },
																),
																	X.indexMainRepository();
															},
															type: "primary",
														}),
														(() => {
															const Z = I(),
																se = Z.firstChild,
																re = se.nextSibling,
																le = re.nextSibling;
															return (
																Z.style.setProperty("margin-bottom", "10px"),
																Z.style.setProperty(
																	"color",
																	"var(--vscode-errorForeground)",
																),
																(0, w.insert)(
																	Z,
																	() =>
																		W.nonPersistentStorage
																			.repositoryIndexingStatus?.case ===
																		"not-auto-indexing"
																			? W.nonPersistentStorage
																					.repositoryIndexingStatus?.numFiles
																			: 0,
																	re,
																),
																Z
															);
														})(),
													];
												},
											}),
											(0, E.createComponent)(C.Match, {
												get when() {
													return (
														W.nonPersistentStorage.repositoryIndexingStatus
															?.case === "error"
													);
												},
												get children() {
													const Z = T(),
														se = Z.firstChild;
													return (
														Z.style.setProperty("margin-bottom", "10px"),
														Z.style.setProperty(
															"color",
															"var(--vscode-errorForeground)",
														),
														(0, w.insert)(Z, Y, null),
														Z
													);
												},
											}),
											(0, E.createComponent)(C.Match, {
												get when() {
													return (
														W.nonPersistentStorage.repositoryIndexingStatus
															?.case === "indexing" ||
														W.nonPersistentStorage.repositoryIndexingStatus
															?.case === "out-of-sync" ||
														W.nonPersistentStorage.repositoryIndexingStatus
															?.case === "paused" ||
														W.nonPersistentStorage.repositoryIndexingStatus
															?.case === "creating-index" ||
														W.nonPersistentStorage.repositoryIndexingStatus
															?.case === "indexing-setup"
													);
												},
												get children() {
													const Z = L(),
														se = Z.firstChild;
													return (
														Z.style.setProperty("margin-top", "6px"),
														Z.style.setProperty("margin-right", "10px"),
														Z.style.setProperty("margin-bottom", "6px"),
														(0, w.insert)(
															Z,
															(0, E.createComponent)(C.Show, {
																get when() {
																	return (
																		W.nonPersistentStorage
																			.mainLocalRepositoryProgress?.progress !==
																			void 0 &&
																		(W.nonPersistentStorage
																			.mainLocalRepositoryProgress?.progress >
																			0 ||
																			W.nonPersistentStorage
																				.repositoryIndexingStatus?.case ===
																				"indexing")
																	);
																},
																get fallback() {
																	return (() => {
																		const re = M(),
																			le = re.firstChild;
																		return (
																			(0, w.insert)(
																				re,
																				(0, E.createComponent)(c.$C$b, {
																					show: !0,
																				}),
																				null,
																			),
																			re
																		);
																	})();
																},
																get children() {
																	return (0, E.createComponent)(r.Root, {
																		get value() {
																			return ee();
																		},
																		class: "progress",
																		get children() {
																			return [
																				(() => {
																					const re = P();
																					return (
																						(0, w.insert)(
																							re,
																							(0, E.createComponent)(r.Label, {
																								class:
																									"indexing_progress__label",
																								get children() {
																									return (0, E.createComponent)(
																										C.Switch,
																										{
																											get children() {
																												return [
																													(0,
																													E.createComponent)(
																														C.Match,
																														{
																															get when() {
																																return (
																																	W
																																		.nonPersistentStorage
																																		.repositoryIndexingStatus
																																		?.case ===
																																	"paused"
																																);
																															},
																															children:
																																"Paused",
																														},
																													),
																													(0,
																													E.createComponent)(
																														C.Match,
																														{
																															get when() {
																																return (
																																	W
																																		.nonPersistentStorage
																																		.repositoryIndexingStatus
																																		?.case ===
																																	"creating-index"
																																);
																															},
																															get children() {
																																return [
																																	"Building an efficient index",
																																	(0,
																																	E.createComponent)(
																																		c.$C$b,
																																		{
																																			show: !0,
																																		},
																																	),
																																];
																															},
																														},
																													),
																													(0,
																													E.createComponent)(
																														C.Match,
																														{
																															when: !0,
																															get children() {
																																return [
																																	"Syncing",
																																	(0,
																																	E.createComponent)(
																																		c.$C$b,
																																		{
																																			show: !0,
																																		},
																																	),
																																];
																															},
																														},
																													),
																												];
																											},
																										},
																									);
																								},
																							}),
																							null,
																						),
																						(0, w.insert)(
																							re,
																							(0, E.createComponent)(
																								r.ValueLabel,
																								{
																									class:
																										"indexing_progress__value-label",
																								},
																							),
																							null,
																						),
																						re
																					);
																				})(),
																				(0, E.createComponent)(r.Track, {
																					class: "indexing_progress__track",
																					get children() {
																						return (0, E.createComponent)(
																							r.Fill,
																							{
																								class:
																									"indexing_progress__fill",
																							},
																						);
																					},
																				}),
																			];
																		},
																	});
																},
															}),
															se,
														),
														se.style.setProperty("display", "flex"),
														se.style.setProperty("flex-direction", "row"),
														se.style.setProperty("margin-top", "5px"),
														se.style.setProperty("align-items", "center"),
														se.style.setProperty("gap", "8px"),
														(0, w.insert)(
															se,
															(0, E.createComponent)(C.Show, {
																get when() {
																	return (
																		_()?.case === "indexing" ||
																		_()?.case === "indexing-setup"
																	);
																},
																get fallback() {
																	return (0, E.createComponent)(g.$18b, {
																		get buttonProps() {
																			return {
																				style: { width: "fit-content" },
																				title: "Resume Indexing",
																				type: "primary",
																				codicon: u.$ak.debugStart,
																				codiconStyle: {
																					color: "var(--vscode-foreground)",
																				},
																			};
																		},
																		loadingProps: {},
																		revertToOrig: !0,
																		onClick: async () => {
																			J.repositoryService.indexMainLocalRepository();
																			const re = new Promise((oe) => {
																					function ae() {
																						return (
																							J.reactiveStorageService
																								.nonPersistentStorage
																								.repositoryIndexingStatus
																								?.case !== "paused"
																						);
																					}
																					if (ae()) return;
																					const pe = J.window.setInterval(
																						() => {
																							ae() &&
																								(oe(void 0),
																								J.window.clearInterval(pe));
																						},
																						50,
																					);
																				}),
																				le = new Promise((oe) => {
																					setTimeout(() => {
																						oe(void 0);
																					}, 5e3);
																				});
																			await Promise.race([re, le]);
																		},
																	});
																},
																get children() {
																	return (0, E.createComponent)(g.$18b, {
																		get buttonProps() {
																			return {
																				style: { width: "fit-content" },
																				title: "Pause Indexing",
																				type: "primary",
																				codicon: u.$ak.debugPause,
																				codiconStyle: {
																					color:
																						"var(--vscode-editor-background)",
																				},
																			};
																		},
																		loadingProps: {},
																		revertToOrig: !0,
																		onClick: async () => {
																			J.repositoryService.pauseIndexingJob();
																			function re() {
																				return (
																					J.reactiveStorageService
																						.nonPersistentStorage
																						.repositoryIndexingStatus?.case !==
																						"indexing" &&
																					J.reactiveStorageService
																						.nonPersistentStorage
																						.repositoryIndexingStatus?.case !==
																						"indexing-setup"
																				);
																			}
																			if (re()) return;
																			const le = new Promise((ae) => {
																					const pe = J.window.setInterval(
																						() => {
																							re() &&
																								(ae(void 0),
																								J.window.clearInterval(pe));
																						},
																						50,
																					);
																				}),
																				oe = new Promise((ae) => {
																					setTimeout(() => {
																						ae(void 0);
																					}, 5e3);
																				});
																			await Promise.race([le, oe]);
																		},
																	});
																},
															}),
															null,
														),
														(0, w.insert)(
															se,
															(0, E.createComponent)(G, {}),
															null,
														),
														(0, w.insert)(
															Z,
															(0, E.createComponent)(C.Show, {
																get when() {
																	return (
																		(
																			W.nonPersistentStorage
																				.repositoryIndexingJobs ?? []
																		).length > 0
																	);
																},
																get children() {
																	const re = k(),
																		le = re.firstChild;
																	return (
																		le.style.setProperty("max-height", "600px"),
																		le.style.setProperty("padding", "12px"),
																		(0, w.insert)(
																			le,
																			(0, E.createComponent)(C.For, {
																				get each() {
																					return W.nonPersistentStorage
																						.repositoryIndexingJobs;
																				},
																				children: (oe) =>
																					(0, E.createComponent)(h.$$$b, {
																						get uri() {
																							return J.workspaceContextService.resolveRelativePath(
																								oe.fileName,
																							);
																						},
																						get uniqueId() {
																							return (0, n.$9g)();
																						},
																					}),
																			}),
																		),
																		re
																	);
																},
															}),
															null,
														),
														Z
													);
												},
											}),
											(0, E.createComponent)(C.Match, {
												get when() {
													return (
														W.nonPersistentStorage.repositoryIndexingStatus
															?.case === "synced"
													);
												},
												get children() {
													const Z = L(),
														se = Z.firstChild;
													return (
														Z.style.setProperty("margin-top", "6px"),
														Z.style.setProperty("margin-bottom", "6px"),
														(0, w.insert)(
															Z,
															(0, E.createComponent)(r.Root, {
																value: 100,
																class: "indexing_progress",
																get children() {
																	return [
																		(() => {
																			const re = P();
																			return (
																				(0, w.insert)(
																					re,
																					(0, E.createComponent)(r.Label, {
																						class: "indexing_progress__label",
																						children: "Synced",
																					}),
																					null,
																				),
																				(0, w.insert)(
																					re,
																					(0, E.createComponent)(r.ValueLabel, {
																						class:
																							"indexing_progress__value-label",
																					}),
																					null,
																				),
																				re
																			);
																		})(),
																		(0, E.createComponent)(r.Track, {
																			class: "indexing_progress__track",
																			get children() {
																				return (0, E.createComponent)(r.Fill, {
																					class: "indexing_progress__fill",
																				});
																			},
																		}),
																	];
																},
															}),
															se,
														),
														se.style.setProperty("display", "flex"),
														se.style.setProperty("flex-direction", "row"),
														se.style.setProperty("margin-top", "8px"),
														(0, w.insert)(
															se,
															(0, E.createComponent)(d.$rdc, {
																style: {
																	width: "fit-content",
																	"margin-right": "8px",
																},
																title: "Resync Index",
																type: "primary",
																get codicon() {
																	return u.$ak.refresh;
																},
																onClick: () => {
																	J.repositoryService.indexMainLocalRepository();
																},
															}),
															null,
														),
														(0, w.insert)(
															se,
															(0, E.createComponent)(G, {}),
															null,
														),
														Z
													);
												},
											}),
										];
									},
								}),
								null,
							),
							(0, w.insert)(
								Q,
								(0, E.createComponent)(K, {
									showOptions: ie,
									setShowOptions: ne,
									openOrCreateFile: te,
								}),
								null,
							),
							Q
						);
					})();
				}
				const H = (J) =>
						(() => {
							const W = $();
							return (
								W.style.setProperty("margin-top", "8px"),
								W.style.setProperty("padding-left", "4px"),
								W.style.setProperty("font-size", "10px"),
								W.style.setProperty(
									"color",
									"var(--vscode-input-placeholderForeground)",
								),
								(0, w.insert)(W, () => J.children),
								W
							);
						})(),
					q = (J) =>
						(() => {
							const W = $();
							return (
								W.style.setProperty("padding-left", "4px"),
								W.style.setProperty("font-size", "12px"),
								W.style.setProperty("color", "var(--vscode-foreground)"),
								(0, w.insert)(W, () => J.children),
								W
							);
						})();
				function V(J) {
					return (0, E.createComponent)(C.Show, {
						get when() {
							return !J.showOptions();
						},
						get children() {
							return (0, E.createComponent)(H, {
								children:
									"For improved codebase-wide answers, you can have Cursor compute vector embeddings over your entire codebase. This process will run in the background and take a few minutes to complete.",
							});
						},
					});
				}
				function G() {
					const J = (0, m.$odc)();
					return (0, E.createComponent)(d.$rdc, {
						title: "Delete Index",
						type: "secondary",
						get codicon() {
							return u.$ak.trash;
						},
						onClick: () => {
							J.indexPopupService.renderCustomChoicePopup({
								title: "Delete Index",
								description:
									"Are you sure you want to delete the index for this repository?",
								primaryText: "Cancel",
								secondaryText: "Confirm",
								onPrimary: () => {},
								onSecondary: async () => {
									await J.repositoryService.deleteMainLocalRepository();
								},
							});
						},
					});
				}
				function K(J) {
					const W = (0, m.$odc)(),
						X = () =>
							W.reactiveStorageService.setApplicationUserPersistentStorage(
								"indexRepository",
								(_) => !_,
							),
						[Y, ie] = (0, b.$K0b)(o.$yJ, W.configurationService, "default"),
						[ne, ee] = (0, C.createSignal)(!1);
					return (() => {
						const _ = $();
						return (
							_.style.setProperty("padding", "6px 0px"),
							_.style.setProperty("display", "flex"),
							_.style.setProperty("flex-direction", "column"),
							_.style.setProperty("align-items", "flex-start"),
							_.style.setProperty("gap", "6px"),
							(0, w.insert)(
								_,
								(0, E.createComponent)(C.Show, {
									get when() {
										return J.showOptions();
									},
									get fallback() {
										return (() => {
											const te = U();
											return (
												te.addEventListener("click", () =>
													J.setShowOptions(!0),
												),
												te
											);
										})();
									},
									get children() {
										return [
											(() => {
												const te = N();
												return (
													te.addEventListener("click", () =>
														J.setShowOptions(!1),
													),
													te
												);
											})(),
											(() => {
												const te = B(),
													Q = te.firstChild,
													Z = Q.firstChild,
													se = Z.firstChild,
													re = se.firstChild,
													le = Q.nextSibling,
													oe = le.firstChild,
													ae = oe.firstChild,
													pe = ae.firstChild,
													$e = le.nextSibling,
													ye = $e.firstChild,
													ue = ye.firstChild;
												return (
													te.style.setProperty("display", "flex"),
													te.style.setProperty("flex-direction", "column"),
													te.style.setProperty("gap", "8px"),
													Q.style.setProperty("margin", "0"),
													Z.style.setProperty("display", "flex"),
													Z.style.setProperty("flex-direction", "row"),
													Z.style.setProperty(
														"justify-content",
														"space-between",
													),
													(0, w.insert)(
														Z,
														(0, E.createComponent)(q, {
															children: "Index new folders by default",
														}),
														se,
													),
													se.style.setProperty("display", "flex"),
													se.style.setProperty("flex-direction", "row"),
													se.style.setProperty("gap", "5px"),
													se.style.setProperty("padding-right", "2px"),
													se.style.setProperty("align-items", "center"),
													(0, w.insert)(
														se,
														(0, E.createComponent)(a.$dob, {
															onToggle: X,
															get value() {
																return W.reactiveStorageService
																	.applicationUserPersistentStorage
																	.indexRepository;
															},
														}),
														re,
													),
													(0, w.insert)(
														se,
														(0, E.createComponent)(C.Show, {
															get when() {
																return W.reactiveStorageService
																	.applicationUserPersistentStorage
																	.indexRepository;
															},
															get fallback() {
																return z();
															},
															get children() {
																return A();
															},
														}),
														null,
													),
													(0, w.insert)(
														Q,
														(0, E.createComponent)(H, {
															get children() {
																return [
																	'When set to true, Cursor will by default index any new folders opened. If turned off, you can still manually index folders by clicking the "Compute Index" button. Folders with more than',
																	" ",
																	(0, i.memo)(() =>
																		W.serverConfigService.cachedServerConfig?.indexingConfig?.autoIndexingMaxNumFiles.toLocaleString(
																			"en-US",
																			{ useGrouping: !0 },
																		),
																	),
																	" ",
																	"files will not be auto-indexed.",
																];
															},
														}),
														null,
													),
													le.style.setProperty("margin", "0"),
													oe.style.setProperty("display", "flex"),
													oe.style.setProperty("flex-direction", "row"),
													oe.style.setProperty(
														"justify-content",
														"space-between",
													),
													oe.style.setProperty("align-items", "center"),
													(0, w.insert)(
														oe,
														(0, E.createComponent)(q, {
															children: "Ignore files",
														}),
														ae,
													),
													ae.style.setProperty("padding", "4px"),
													pe.addEventListener("click", () => {
														J.openOrCreateFile();
													}),
													(0, w.insert)(
														le,
														(0, E.createComponent)(H, {
															get children() {
																return [
																	"Configure the files that Cursor will ignore when indexing your repository (in addition to your .gitignore).",
																	" ",
																	(() => {
																		const fe = R();
																		return (
																			fe.addEventListener("click", () => {
																				W.openerService.open(
																					(0, l.$nh)(
																						W.environmentService
																							.workspaceStorageHome,
																						W.workspaceContextService.getWorkspace()
																							.id,
																						"anysphere.cursor-retrieval",
																						"embeddable_files.txt",
																					),
																					{ openToSide: !0 },
																				);
																			}),
																			fe.style.setProperty("cursor", "pointer"),
																			fe
																		);
																	})(),
																];
															},
														}),
														null,
													),
													$e.style.setProperty("margin", "0"),
													ye.style.setProperty("display", "flex"),
													ye.style.setProperty("flex-direction", "row"),
													ye.style.setProperty(
														"justify-content",
														"space-between",
													),
													ye.style.setProperty("align-items", "center"),
													(0, w.insert)(
														ye,
														(0, E.createComponent)(q, {
															children: "Git graph file relationships",
														}),
														ue,
													),
													ue.style.setProperty("display", "flex"),
													ue.style.setProperty("flex-direction", "row"),
													ue.style.setProperty("gap", "5px"),
													ue.style.setProperty("padding-right", "2px"),
													ue.style.setProperty("align-items", "center"),
													(0, w.insert)(
														ue,
														(0, E.createComponent)(s.$Kbc, {
															get origLabel() {
																return Y();
															},
															get value() {
																return Y();
															},
															items: [
																{ id: "default", label: "default" },
																{ id: "enabled", label: "enabled" },
																{ id: "disabled", label: "disabled" },
															],
															onSelect: (fe) => {
																ie(fe);
															},
														}),
														null,
													),
													(0, w.insert)(
														ue,
														(0, E.createComponent)(C.Show, {
															get when() {
																return (
																	Y() === "enabled" ||
																	(Y() === "default" &&
																		(W.reactiveStorageService
																			.applicationUserPersistentStorage
																			.indexRepository ||
																			[
																				"indexing",
																				"out-of-sync",
																				"synced",
																				"creating-index",
																			].includes(
																				W.reactiveStorageService
																					.nonPersistentStorage
																					.repositoryIndexingStatus?.case ?? "",
																			)))
																);
															},
															get fallback() {
																return z();
															},
															get children() {
																return A();
															},
														}),
														null,
													),
													(0, w.insert)(
														$e,
														(0, E.createComponent)(H, {
															get children() {
																return [
																	"When enabled, Cursor will index your git history to help understand which files are related to each other. Code and commit messages are stored locally, but metadata about commits (SHAs, number of changes, and obfuscated file names) are stored on the server.",
																	" ",
																	(() => {
																		const fe = O(),
																			me = fe.firstChild;
																		return (
																			fe.addEventListener("click", () =>
																				ee(!ne()),
																			),
																			fe.style.setProperty("cursor", "pointer"),
																			(0, w.insert)(
																				fe,
																				() => (ne() ? "Hide" : "Show"),
																				me,
																			),
																			fe
																		);
																	})(),
																];
															},
														}),
														null,
													),
													te
												);
											})(),
											(0, E.createComponent)(C.Show, {
												get when() {
													return ne();
												},
												get children() {
													return (0, E.createComponent)(f.$bDc, {});
												},
											}),
										];
									},
								}),
							),
							_
						);
					})();
				}
			},
		)
