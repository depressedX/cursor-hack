import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/solid.js';
import '../../../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../../../../base/browser/window.js';
import './settingsTab.js';
import '../../../../controlCommon/browser/solid.js';
import '../../../../composer/browser/composerCapabilities.js';
import '../../../../../../../proto/aiserver/v1/utils_pb.js';
import './settingsSubSection.js';
import '../../../../ui/browser/checkbox/checkbox.js';
import '../../../../../../css!vs/workbench/contrib/aiSettings/browser/components/settings/settingsBetaTab.js';
define(
			de[4138],
			he([1, 0, 2, 2, 2, 13, 148, 75, 974, 36, 262, 83, 1064, 1006, 2371]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*solid*/,
 C /*aiserver_pb*/,
 d /*window*/,
 m /*settingsTab*/,
 r /*solid*/,
 u /*composerCapabilities*/,
 a /*utils_pb*/,
 h /*settingsSubSection*/,
 c /*checkbox*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$HDc = s);
				const n = (0, t.template)("<div>Beta features"),
					g = (0, t.template)(
						'<div class="settings-checkbox-row"><label for="enable-background-bugfinding">Enable background bug finding',
					),
					p = (0, t.template)(
						"<div><div>Check out the Bug Finder tab next to Chat.",
					),
					o = (l) => {
						switch (l) {
							case C.StreamCppRequest_ControlToken.QUIET:
								return "quiet";
							case C.StreamCppRequest_ControlToken.LOUD:
								return "loud";
							case C.StreamCppRequest_ControlToken.OP:
								return "op";
							case C.StreamCppRequest_ControlToken.UNSPECIFIED:
								return "unspecified";
						}
					},
					f = (l) => {
						switch (l) {
							case a.EmbeddingModel.VOYAGE_CODE_2:
								return "VoyageCode2";
							case a.EmbeddingModel.TEXT_EMBEDDINGS_LARGE_3:
								return "TextEmbeddingsLarge3";
							case a.EmbeddingModel.QWEN_1_5B_CUSTOM:
								return "Qwen1_5B_Custom";
							case a.EmbeddingModel.UNSPECIFIED:
								return "unspecified";
							default:
								return l;
						}
					},
					b = (l) => {
						switch (l) {
							case "VoyageCode2":
								return a.EmbeddingModel.VOYAGE_CODE_2;
							case "TextEmbeddingsLarge3":
								return a.EmbeddingModel.TEXT_EMBEDDINGS_LARGE_3;
							case "Qwen1_5B_Custom":
								return a.EmbeddingModel.QWEN_1_5B_CUSTOM;
							case "unspecified":
							default:
								return a.EmbeddingModel.UNSPECIFIED;
						}
					};
				function s() {
					const l = (0, r.$odc)(),
						y = (A, R) => {
							l.reactiveStorageService.setApplicationUserPersistentStorage(
								"cursorPredictionUIExperiments",
								(O) => {
									const B = new Set(O ?? []);
									return R ? B.add(A) : B.delete(A), Array.from(B);
								},
							);
						},
						[$, v] = (0, E.createSignal)(!1),
						S = () => v(!$()),
						I = (0, E.createMemo)(
							() =>
								l.reactiveStorageService.applicationUserPersistentStorage
									.composerState.defaultCapabilities || [],
						),
						T = (A) => {
							I().some((O) => O.type === A)
								? l.reactiveStorageService.setApplicationUserPersistentStorage(
										"composerState",
										"defaultCapabilities",
										(O) => O?.filter((B) => B.type !== A) || [],
									)
								: k({ type: A, data: u.defaultCapabilityData[A] });
						},
						P = (A) => {
							k(A);
						},
						k = (A) => {
							l.reactiveStorageService.setApplicationUserPersistentStorage(
								"composerState",
								"defaultCapabilities",
								(R) => {
									const O = R ? [...R] : [],
										B = O.findIndex((U) => U.type === A.type);
									return B !== -1 ? (O[B] = A) : O.push(A), O;
								},
							);
						};
					(0, E.createEffect)(() => {
						const A = d.$Bfb.setInterval(() => {
							l.cursorPredictionService.periodicallyReloadCursorPredictionConfig(
								!0,
							);
						}, 3e4);
						l.cursorPredictionService.periodicallyReloadCursorPredictionConfig(
							!0,
						),
							(0, E.onCleanup)(() => d.$Bfb.clearInterval(A));
					});
					const [L, D] = (0, E.createSignal)(void 0),
						[M, N] = (0, E.createSignal)(!1);
					return (0, w.createComponent)(m.$eDc, {
						get children() {
							return [
								(() => {
									const A = n();
									return A.style.setProperty("font-size", "20px"), A;
								})(),
								(0, w.createComponent)(h.$YCc, {
									label: "Notepads",
									description:
										"Craft and share context between chat and composers",
									get value() {
										return l.reactiveStorageService
											.applicationUserPersistentStorage.notepadState
											.isNotepadEnabled;
									},
									onChange: (A) => {
										l.reactiveStorageService.setApplicationUserPersistentStorage(
											"notepadState",
											"isNotepadEnabled",
											A,
										);
									},
								}),
								(0, w.createComponent)(E.Show, {
									get when() {
										return (
											l.serverConfigService.cachedServerConfig.bugConfigResponse
												?.bugBotV1?.killSwitch !== !0
										);
									},
									get children() {
										return (0, w.createComponent)(h.$YCc, {
											label: "Bug Finder",
											description:
												"Run a bug finder on your current git diff to find bugs.",
											get value() {
												return (
													l.reactiveStorageService
														.applicationUserPersistentStorage.bugbotState
														.isEnabled ?? !1
												);
											},
											onChange: (A) => {
												l.serverConfigService.cachedServerConfig
													.bugConfigResponse?.bugBotV1?.killSwitch !== !0 &&
													l.reactiveStorageService.setApplicationUserPersistentStorage(
														"bugbotState",
														"explicitEnableOrDisable",
														A,
													);
											},
											get children() {
												return (0, w.createComponent)(E.Show, {
													get when() {
														return l.reactiveStorageService
															.applicationUserPersistentStorage.bugbotState
															.isEnabled;
													},
													get children() {
														const A = p(),
															R = A.firstChild,
															O = R.firstChild;
														return (
															A.style.setProperty("padding-left", "4px"),
															R.style.setProperty("display", "flex"),
															R.style.setProperty("flex-direction", "column"),
															R.style.setProperty("gap", "8px"),
															(0, i.insert)(
																R,
																(0, w.createComponent)(E.Show, {
																	get when() {
																		return l.serverConfigService
																			.cachedServerConfig.bugConfigResponse
																			?.bugBotV1?.isSubsidized;
																	},
																	get children() {
																		const B = g(),
																			U = B.firstChild;
																		return (
																			(0, i.insert)(
																				B,
																				(0, w.createComponent)(c.$XCc, {
																					get value() {
																						return (
																							l.reactiveStorageService
																								.applicationUserPersistentStorage
																								.bugbotState
																								.backgroundBugFindingEnabled !==
																							!1
																						);
																					},
																					onChange: (z) => {
																						l.reactiveStorageService.setApplicationUserPersistentStorage(
																							"bugbotState",
																							"backgroundBugFindingEnabled",
																							z,
																						);
																					},
																				}),
																				U,
																			),
																			B
																		);
																	},
																}),
																null,
															),
															A
														);
													},
												});
											},
										});
									},
								}),
							];
						},
					});
				}
			},
		)
