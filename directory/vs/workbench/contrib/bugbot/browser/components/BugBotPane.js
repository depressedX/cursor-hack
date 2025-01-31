import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../controlCommon/browser/solid.js';
import '../../../ui/browser/scrollableDiv.js';
import './BugBotSimpleButton.js';
import '../../../../../base/common/codicons.js';
import './BugBotStatusIndicator.js';
import '../../../ui/browser/ModalComponent.js';
import '../../../ui/browser/badge/badge.js';
import '../../../ui/browser/hooks/useMeasureWidthHeight.js';
import '../../../../../css!vs/workbench/contrib/bugbot/browser/components/BugBotPane.js';
define(
			de[4259],
			he([
				1, 0, 2, 2, 2, 2, 2, 13, 36, 135, 1377, 14, 3003, 815, 564, 693, 2387,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*solid*/,
 m /*solid*/,
 r /*scrollableDiv*/,
 u /*BugBotSimpleButton*/,
 a /*codicons*/,
 h /*BugBotStatusIndicator*/,
 c /*ModalComponent*/,
 n /*badge*/,
 g /*useMeasureWidthHeight*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Rzc = void 0);
				const p = (0, t.template)(
						'<div><div><div><span class="codicon codicon-bug"></span><span>Bug Finder</span></div><div>',
					),
					o = (0, t.template)(
						"<div><h2>Delete All Bug Reports</h2><p>Are you sure you want to delete all bug finder reports? This action cannot be undone.</p><div>",
					),
					f = (0, t.template)("<div>"),
					b = (0, t.template)(
						'<div>No existing bug finder runs. <a class="bugbot-run-new">Run New',
					),
					s = (0, t.template)("<div> @ "),
					l = (0, t.template)(
						'<div class="bugbot-instance-content"><div class="bugbot-summary"></div><div class="bugbot-generation-info">',
					),
					y = (0, t.template)(
						'<div class="bugbot-instance"><div class="bugbot-instance-header"><div><div class="bugbot-instance-date">',
					),
					$ = () => {
						const v = (0, m.$odc)(),
							{ bugbotService: S, bugbotDataService: I } = v,
							[T, P] = (0, d.createSignal)(!1),
							k = async () => {
								v.reactiveStorageService.setNonPersistentStorage(
									"isBugBotModalOpen",
									!0,
								);
							},
							L = async (U) => {
								try {
									await S.openBugBotReport(U);
								} catch (z) {
									console.error("Error opening bug finder report:", z);
								}
							},
							D = (U) =>
								U.bugReports?.bugReports?.length
									? `${U.bugReports.bugReports.length} potential ${U.bugReports.bugReports.length === 1 ? "issue" : "issues"} found`
									: "No bugs found",
							M = (U) =>
								U.generationInfo &&
								U.generationInfo.modelNameUsed !== void 0 &&
								U.generationInfo.iterations !== void 0 &&
								v.serverConfigService.cachedServerConfig
									.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers
									? `${U.generationInfo.modelNameUsed} \u2022 ${U.generationInfo.iterations} iterations`
									: "",
							N = () => {
								P(!0);
							},
							A = async () => {
								try {
									I.deleteAllBugBots(), P(!1);
								} catch (U) {
									console.error("Error deleting all bug finder reports:", U);
								}
							},
							R = (U) => {
								T() && (U.key === "Enter" ? A() : U.key === "Escape" && P(!1));
							};
						(0, d.createEffect)(() => {
							T() &&
								(v.window.addEventListener("keydown", R),
								(0, d.onCleanup)(() => {
									v.window.removeEventListener("keydown", R);
								}));
						});
						let O;
						const B = (0, g.$A$b)(() => O);
						return (() => {
							const U = f(),
								z = O;
							return (
								typeof z == "function" ? (0, C.use)(z, U) : (O = U),
								U.style.setProperty("height", "100%"),
								U.style.setProperty("display", "flex"),
								U.style.setProperty("flex-direction", "column"),
								(0, w.insert)(
									U,
									(0, E.createComponent)(r.$w0b, {
										scrollingDirection: "vertical",
										style: { flex: 1, "min-height": 0 },
										get children() {
											const F = p(),
												x = F.firstChild,
												H = x.firstChild,
												q = H.firstChild,
												V = q.nextSibling,
												G = H.nextSibling;
											return (
												F.style.setProperty("padding", "12px 16px"),
												F.style.setProperty("display", "flex"),
												F.style.setProperty("flex-direction", "column"),
												F.style.setProperty("gap", "8px"),
												x.style.setProperty("display", "flex"),
												x.style.setProperty("align-items", "center"),
												x.style.setProperty("justify-content", "space-between"),
												x.style.setProperty("height", "24px"),
												x.style.setProperty("padding", "0 4px"),
												H.style.setProperty("display", "flex"),
												H.style.setProperty("align-items", "center"),
												H.style.setProperty("gap", "6px"),
												H.style.setProperty("font-weight", "600"),
												H.style.setProperty(
													"color",
													"var(--vscode-foreground)",
												),
												V.style.setProperty("white-space", "nowrap"),
												(0, w.insert)(
													H,
													(0, E.createComponent)(d.Show, {
														get when() {
															return B().width > 400;
														},
														get children() {
															return (0, E.createComponent)(n.$nac, {
																text: "Experimental",
																type: "subtle",
																size: "small",
															});
														},
													}),
													null,
												),
												G.style.setProperty("display", "flex"),
												G.style.setProperty("gap", "0.5rem"),
												(0, w.insert)(
													G,
													(0, E.createComponent)(d.Show, {
														get when() {
															return (
																(0, i.memo)(
																	() => I.allBugBotsData.allBugBots.length > 0,
																)() && B().width > 350
															);
														},
														get children() {
															return (0, E.createComponent)(u.$lzc, {
																type: "secondary",
																get codicon() {
																	return a.$ak.trash;
																},
																title: "Delete All",
																onClick: N,
															});
														},
													}),
													null,
												),
												(0, w.insert)(
													G,
													(0, E.createComponent)(u.$lzc, {
														get codicon() {
															return a.$ak.run;
														},
														title: "Run New",
														onClick: k,
													}),
													null,
												),
												(0, w.insert)(
													F,
													(0, E.createComponent)(d.For, {
														get each() {
															return I.allBugBotsData.allBugBots;
														},
														get fallback() {
															return (() => {
																const K = b(),
																	J = K.firstChild,
																	W = J.nextSibling;
																return (
																	K.style.setProperty(
																		"color",
																		"var(--vscode-descriptionForeground)",
																	),
																	K.style.setProperty("font-size", "11px"),
																	K.style.setProperty("padding", "4px"),
																	W.addEventListener("click", k),
																	W.style.setProperty(
																		"color",
																		"var(--vscode-textLink-foreground)",
																	),
																	W.style.setProperty("cursor", "pointer"),
																	K
																);
															})();
														},
														children: (K) =>
															(() => {
																const J = y(),
																	W = J.firstChild,
																	X = W.firstChild,
																	Y = X.firstChild;
																return (
																	J.addEventListener("click", () =>
																		L(K.bugbotId),
																	),
																	J.style.setProperty("cursor", "pointer"),
																	X.style.setProperty("display", "flex"),
																	X.style.setProperty(
																		"flex-direction",
																		"column",
																	),
																	X.style.setProperty("gap", "2px"),
																	(0, w.insert)(Y, () =>
																		new Date(
																			K.lastUpdatedAt || K.createdAt,
																		).toLocaleString(),
																	),
																	(0, w.insert)(
																		X,
																		(0, E.createComponent)(d.Show, {
																			get when() {
																				return K.branch && K.commit;
																			},
																			get children() {
																				const ie = s(),
																					ne = ie.firstChild;
																				return (
																					ie.style.setProperty(
																						"font-size",
																						"11px",
																					),
																					ie.style.setProperty(
																						"color",
																						"var(--vscode-descriptionForeground)",
																					),
																					(0, w.insert)(ie, () => K.branch, ne),
																					(0, w.insert)(
																						ie,
																						() => K.commit?.sha.slice(0, 7),
																						null,
																					),
																					ie
																				);
																			},
																		}),
																		null,
																	),
																	(0, w.insert)(
																		W,
																		(0, E.createComponent)(h.$Qzc, {
																			bugbot: K,
																			size: "medium",
																		}),
																		null,
																	),
																	(0, w.insert)(
																		J,
																		(0, E.createComponent)(d.Show, {
																			get when() {
																				return K.status.type === "completed";
																			},
																			get children() {
																				const ie = l(),
																					ne = ie.firstChild,
																					ee = ne.nextSibling;
																				return (
																					(0, w.insert)(ne, () => D(K)),
																					(0, w.insert)(ee, () => M(K)),
																					ie
																				);
																			},
																		}),
																		null,
																	),
																	J
																);
															})(),
													}),
													null,
												),
												F
											);
										},
									}),
									null,
								),
								(0, w.insert)(
									U,
									(0, E.createComponent)(d.Show, {
										get when() {
											return T();
										},
										get children() {
											return (0, E.createComponent)(c.$fzc, {
												isOpen: !0,
												onClose: () => P(!1),
												style: { padding: "1rem" },
												get children() {
													const F = o(),
														x = F.firstChild,
														H = x.nextSibling,
														q = H.nextSibling;
													return (
														F.style.setProperty("display", "flex"),
														F.style.setProperty("flex-direction", "column"),
														F.style.setProperty("gap", "1rem"),
														x.style.setProperty("font-size", "1rem"),
														x.style.setProperty("margin", "0"),
														H.style.setProperty("margin", "0"),
														q.style.setProperty("display", "flex"),
														q.style.setProperty("gap", "0.5rem"),
														q.style.setProperty("justify-content", "flex-end"),
														(0, w.insert)(
															q,
															(0, E.createComponent)(u.$lzc, {
																type: "secondary",
																title: "Cancel",
																onClick: () => P(!1),
															}),
															null,
														),
														(0, w.insert)(
															q,
															(0, E.createComponent)(u.$lzc, {
																type: "danger",
																title: "Delete All",
																onClick: A,
															}),
															null,
														),
														F
													);
												},
											});
										},
									}),
									null,
								),
								U
							);
						})();
					};
				e.$Rzc = $;
			},
		)
