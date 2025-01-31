import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/solid.js';
import '../../../../../../workbench/contrib/ui/browser/simpleButton/simpleButton.js';
import '../../../../../../base/common/constants.js';
import '../../../../cHintLine/browser/hintLineWidget.js';
import '../../inlineDiffTypes.js';
import '../../../../../../workbench/contrib/aichat/browser/components/slowPool/SlowPoolGenerationIndicator.js';
import '../../../../../../workbench/contrib/aichat/browser/components/Utils.js';
import '../../../../../../workbench/contrib/aichat/browser/components/slowPool/usagePricingConfirmation.js';
import '../../../../../../workbench/contrib/controlCommon/browser/solid.js';
import '../../../../../../workbench/contrib/ui/browser/modelToggle.js';
import '../../../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../../../workbench/contrib/ui/browser/hooks/useKeyboardShortcut.js';
import '../../../../../../css!vs/editor/contrib/inlineDiffs/browser/widgets/promptBarWidgets/promptBarWidgets.js';
define(
			de[4250],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 147, 58, 499, 534, 863, 242, 1072, 36,
				859, 45, 385, 1137,
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
				u /*simpleButton*/,
				a /*constants*/,
				h /*hintLineWidget*/,
				c /*inlineDiffTypes*/,
				n /*SlowPoolGenerationIndicator*/,
				g /*Utils*/,
				p /*usagePricingConfirmation*/,
				o /*solid*/,
				f /*modelToggle*/,
				b /*reactiveStorageService*/,
				s /*useKeyboardShortcut*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$tdc = P);
				const l = (0, t.template)("<div>Finding other files to edit"),
					y = (0, t.template)("<div>"),
					$ = (0, t.template)("<div>Editing files"),
					v = (0, t.template)("<div>Thinking"),
					S = (0, t.template)("<span>"),
					I = (0, t.template)("<div><div>"),
					T = (F) =>
						(0, m.createComponent)(u.$rdc, {
							get title() {
								return (
									(F.isFocused ? "\u2318\u23CE " : "") +
									(F.currentModel.length < 10
										? "in background"
										: F.currentModel.length < 15
											? "background"
											: "in bg")
								);
							},
							onClick: () => F.onImplementInBackgroundSubmit(),
							type: "secondary",
							get disabled() {
								return F.plainText.length === 0;
							},
							style: { "margin-left": "8px" },
						});
				function P(F) {
					const x = (0, o.$odc)(),
						H = (0, c.$n8b)(),
						q = () => {
							const ee = H.nonPersistentStorage.inlineDiffs,
								te = H.nonPersistentStorage.promptBars.find(
									(Q) => Q.id === F.id,
								)?.diffId;
							return ee.find((Q) => Q.id === te);
						},
						V = (0, r.createMemo)(
							() =>
								x.reactiveStorageService.applicationUserPersistentStorage
									.aiSettings.cmdKModel ??
								x.reactiveStorageService.applicationUserPersistentStorage
									.aiSettings.openAIModel ??
								b.$aAb,
						);
					let G = !1;
					const [K, J] = (0, r.createSignal)(!1),
						[W, X] = (0, r.createSignal)(!1),
						[Y, ie] = (0, r.createSignal)(!1),
						ne = (() => {
							const ee = I(),
								_ = ee.firstChild;
							return (
								ee.style.setProperty("display", "flex"),
								ee.style.setProperty("justify-content", "flex-start"),
								ee.style.setProperty("align-items", "center"),
								ee.style.setProperty("margin", "4px 0px 6px 0px"),
								(0, E.insert)(
									ee,
									(0, m.createComponent)(r.Switch, {
										get children() {
											return [
												(0, m.createComponent)(r.Match, {
													get when() {
														return (
															(0, d.memo)(() => !F.generating)() &&
															q() === void 0
														);
													},
													get children() {
														return (0, m.createComponent)(r.Show, {
															get when() {
																return F.plainText.length > 0;
															},
															get fallback() {
																return (0, m.createComponent)(
																	k,
																	(0, C.mergeProps)(F, { vsContext: x }),
																);
															},
															get children() {
																return [
																	(0, m.createComponent)(L, F),
																	(0, m.createComponent)(M, F),
																	(0, m.createComponent)(r.Show, {
																		get when() {
																			return (
																				x.reactiveStorageService
																					.applicationUserPersistentStorage
																					.hallucinatedFunctionsEnabled === !0
																			);
																		},
																		get children() {
																			return (0, m.createComponent)(
																				T,
																				(0, C.mergeProps)(F, {
																					get currentModel() {
																						return V();
																					},
																				}),
																			);
																		},
																	}),
																	(0, m.createComponent)(r.Show, {
																		get when() {
																			return (
																				x.reactiveStorageService
																					.applicationUserPersistentStorage
																					.aiSettings.openAIModel !== null &&
																				c.$k8b.includes(
																					x.reactiveStorageService
																						.applicationUserPersistentStorage
																						.aiSettings.openAIModel,
																				) &&
																				G
																			);
																		},
																		get children() {
																			return (0, m.createComponent)(N, F);
																		},
																	}),
																	(0, m.createComponent)(r.Show, {
																		get when() {
																			return F.fastModeEnabled;
																		},
																		get children() {
																			return (0, m.createComponent)(A, F);
																		},
																	}),
																];
															},
														});
													},
												}),
												(0, m.createComponent)(r.Match, {
													get when() {
														return F.generating;
													},
													get children() {
														return [
															(0, m.createComponent)(r.Show, {
																get when() {
																	return (
																		F.multiFileEditingState ===
																		c.MultiFileEditingState.WaitingForUserInput
																	);
																},
																get children() {
																	return (0, m.createComponent)(U, F);
																},
															}),
															(0, m.createComponent)(
																z,
																(0, C.mergeProps)(F, { vsContext: x }),
															),
															(() => {
																const te = S();
																return (
																	te.style.setProperty("margin-left", "3px"),
																	te.style.setProperty("padding", "0px 3px"),
																	te.style.setProperty(
																		"color",
																		"var(--vscode-input-placeholderForeground)",
																	),
																	(0, E.insert)(
																		te,
																		(0, m.createComponent)(r.Switch, {
																			get fallback() {
																				return [
																					(0, m.createComponent)(n.$h_b, {
																						get queuePositionResponse() {
																							return F.queuePositionResponse;
																						},
																						hideDotsLoading: !1,
																						isLoading: !0,
																						spaceBelow: !0,
																						statusMessages: void 0,
																						conciseMessage: !0,
																						setIsUpsellFastRequestsShowing: J,
																						setIsUpsellingUsageBasedPricing: X,
																						setIsUpsellingHardLimit: ie,
																					}),
																					(0, m.createComponent)(r.Show, {
																						get when() {
																							return K();
																						},
																						get children() {
																							return (0, m.createComponent)(
																								g.$E$b,
																								{
																									setIsUpsellFastRequestsShowing:
																										J,
																									conciseMessage: !0,
																								},
																							);
																						},
																					}),
																				];
																			},
																			get children() {
																				return [
																					(0, m.createComponent)(r.Match, {
																						get when() {
																							return (
																								G &&
																								F.multiFileEditingState ===
																									c.MultiFileEditingState
																										.FindingLocations
																							);
																						},
																						get children() {
																							const Q = l(),
																								Z = Q.firstChild;
																							return (
																								Q.style.setProperty(
																									"color",
																									"var(--vscode-input-placeholderForeground)",
																								),
																								Q.style.setProperty(
																									"font-size",
																									"10px",
																								),
																								(0, E.insert)(
																									Q,
																									(0, m.createComponent)(
																										g.$C$b,
																										{ show: !0 },
																									),
																									null,
																								),
																								Q
																							);
																						},
																					}),
																					(0, m.createComponent)(r.Match, {
																						get when() {
																							return (
																								F.statusUpdateMessages.length >
																								0
																							);
																						},
																						get children() {
																							const Q = y();
																							return (
																								Q.style.setProperty(
																									"color",
																									"var(--vscode-input-placeholderForeground)",
																								),
																								Q.style.setProperty(
																									"font-size",
																									"10px",
																								),
																								(0, E.insert)(
																									Q,
																									() =>
																										F.statusUpdateMessages[0],
																									null,
																								),
																								(0, E.insert)(
																									Q,
																									(0, m.createComponent)(
																										g.$C$b,
																										{ show: !0 },
																									),
																									null,
																								),
																								Q
																							);
																						},
																					}),
																					(0, m.createComponent)(r.Match, {
																						get when() {
																							return (
																								G &&
																								F.multiFileEditingState ===
																									c.MultiFileEditingState
																										.WaitingForUserInput
																							);
																						},
																						get children() {
																							return y();
																						},
																					}),
																					(0, m.createComponent)(r.Match, {
																						get when() {
																							return (
																								G &&
																								F.multiFileEditingState ===
																									c.MultiFileEditingState
																										.Editing
																							);
																						},
																						get children() {
																							const Q = $(),
																								Z = Q.firstChild;
																							return (
																								Q.style.setProperty(
																									"color",
																									"var(--vscode-input-placeholderForeground)",
																								),
																								Q.style.setProperty(
																									"font-size",
																									"10px",
																								),
																								(0, E.insert)(
																									Q,
																									(0, m.createComponent)(
																										g.$C$b,
																										{ show: !0 },
																									),
																									null,
																								),
																								Q
																							);
																						},
																					}),
																					(0, m.createComponent)(r.Match, {
																						get when() {
																							return (
																								G &&
																								F.multiFileEditingState ===
																									c.MultiFileEditingState
																										.SelectingFilesWithChainOfThought
																							);
																						},
																						get children() {
																							const Q = v(),
																								Z = Q.firstChild;
																							return (
																								Q.style.setProperty(
																									"color",
																									"var(--vscode-input-placeholderForeground)",
																								),
																								Q.style.setProperty(
																									"font-size",
																									"10px",
																								),
																								(0, E.insert)(
																									Q,
																									(0, m.createComponent)(
																										g.$C$b,
																										{ show: !0 },
																									),
																									null,
																								),
																								Q
																							);
																						},
																					}),
																				];
																			},
																		}),
																	),
																	te
																);
															})(),
														];
													},
												}),
												(0, m.createComponent)(r.Match, {
													get when() {
														return (0, d.memo)(() => !F.generating)() && q();
													},
													get children() {
														return (0, m.createComponent)(r.Show, {
															get when() {
																return F.plainText.length > 0;
															},
															get fallback() {
																return [
																	(0, m.createComponent)(
																		R,
																		(0, C.mergeProps)(F, { vsContext: x }),
																	),
																	(0, m.createComponent)(
																		O,
																		(0, C.mergeProps)(F, { vsContext: x }),
																	),
																];
															},
															get children() {
																return [
																	(0, m.createComponent)(D, F),
																	(0, m.createComponent)(M, F),
																];
															},
														});
													},
												}),
											];
										},
									}),
									_,
								),
								_.style.setProperty("flex-grow", "1"),
								(0, E.insert)(
									ee,
									(0, m.createComponent)(r.Show, {
										get when() {
											return (
												F.hasStackedInputBox &&
												F.containerWidth > 350 &&
												!F.isMultiFileEditing &&
												!F.hideModelToggle
											);
										},
										get children() {
											return (0, m.createComponent)(f.$3bc, {
												style: {
													color: "var(--vscode-input-placeholderForeground)",
													opacity: 1,
												},
												get onOverwriteSelectBehavior() {
													return F.onOverwriteModelSelect;
												},
												additionalModels: [],
												specificModelField: "cmd-k",
												get setTriggerFn() {
													return F.setTriggerFn;
												},
												get buttonHint() {
													return F.buttonHint;
												},
												get onClose() {
													return F.onModelToggleClose;
												},
											});
										},
									}),
									null,
								),
								(0, E.insert)(
									ee,
									(0, m.createComponent)(r.Show, {
										get when() {
											return (
												(0, d.memo)(
													() =>
														!!(
															!F.readonly &&
															(!F.isMultiFileEditing || F.hasStackedInputBox)
														),
												)() &&
												!(!F.generating && q() && F.plainText.length === 0)
											);
										},
										get children() {
											return (0, m.createComponent)(
												B,
												(0, C.mergeProps)(F, { vsContext: x }),
											);
										},
									}),
									null,
								),
								(0, w.effect)(() =>
									(0, i.className)(
										ee,
										"inline-prompt-button-area" +
											(q() !== void 0 || F.plainText.length > 0
												? " inline-prompt-button-area-with-primary"
												: ""),
									),
								),
								ee
							);
						})();
					return [
						(0, m.createComponent)(r.Show, {
							get when() {
								return (0, d.memo)(() => !!F.generating)() && (W() || Y());
							},
							get children() {
								const ee = y();
								return (
									ee.style.setProperty("margin-top", "8px"),
									ee.style.setProperty("margin-bottom", "8px"),
									ee.style.setProperty("padding", "0px 8px"),
									(0, E.insert)(
										ee,
										(0, m.createComponent)(r.Show, {
											get when() {
												return W();
											},
											get children() {
												return (0, m.createComponent)(p.$l_b, {
													setIsUpsellingUsageBasedPricing: X,
													isCompact: !0,
												});
											},
										}),
										null,
									),
									(0, E.insert)(
										ee,
										(0, m.createComponent)(r.Show, {
											get when() {
												return Y();
											},
											get children() {
												return (0, m.createComponent)(p.$m_b, {
													setIsUpsellingHardLimit: ie,
													isCompact: !0,
												});
											},
										}),
										null,
									),
									ee
								);
							},
						}),
						ne,
					];
				}
				const k = (F) =>
						(0, m.createComponent)(u.$rdc, {
							get title() {
								return `${F.vsContext.keybindingService.lookupKeybinding(a.$RW)?.getLabel()} to close`;
							},
							get onClick() {
								return F.removePromptBar;
							},
							type: "secondary",
						}),
					L = (F) =>
						(0, m.createComponent)(u.$rdc, {
							get title() {
								return (
									(F.isFocused ? "\u23CE " : "") +
									(F.isEdit ? "Submit Edit" : "Generate")
								);
							},
							onClick: () =>
								F.onSubmit({
									fastMode: !1,
									chatMode: !1,
									editMode: c.EditMode.SingleFile,
								}),
							type: "primary",
							get disabled() {
								return F.plainText.length === 0;
							},
							style: { "margin-left": "4px" },
						}),
					D = (F) =>
						(0, m.createComponent)(u.$rdc, {
							get title() {
								return (F.isFocused ? "\u23CE " : "") + "Submit Edit";
							},
							onClick: () =>
								F.onSubmit({
									fastMode: !1,
									chatMode: !1,
									editMode: c.EditMode.SingleFile,
								}),
							type: "primary",
							extras: { style: { "margin-left": "4px" } },
						}),
					M = (F) =>
						(0, m.createComponent)(u.$rdc, {
							get title() {
								return (
									(F.isFocused ? "\u2325\u23CE " : "") +
									(F.isEdit, "quick question")
								);
							},
							onClick: () => {
								F.onSubmit({
									fastMode: !1,
									chatMode: !0,
									editMode: c.EditMode.SingleFile,
								});
							},
							type: "secondary",
							get disabled() {
								return F.plainText.length === 0;
							},
							extras: { style: { "margin-left": "8px" } },
						}),
					N = (F) =>
						(0, m.createComponent)(u.$rdc, {
							get title() {
								return (F.isFocused ? "\u2318\u23CE " : "") + "edit codebase";
							},
							onClick: () => F.onMultiFileEditSubmit(),
							type: "secondary",
							get disabled() {
								return F.plainText.length === 0;
							},
							style: { "margin-left": "4px" },
						}),
					A = (F) =>
						(0, m.createComponent)(u.$rdc, {
							get title() {
								return (
									(F.isFocused ? "\u2325\u23CE " : "") + (F.isEdit, "fast mode")
								);
							},
							onClick: () =>
								F.onSubmit({
									fastMode: !0,
									chatMode: !1,
									editMode: c.EditMode.SingleFile,
								}),
							type: "secondary",
							get disabled() {
								return F.plainText.length === 0;
							},
							extras: { style: { "margin-left": "8px" } },
						}),
					R = (F) => {
						const x = (0, c.$n8b)();
						return (0, m.createComponent)(r.Switch, {
							get fallback() {
								return (0, m.createComponent)(u.$rdc, {
									get title() {
										return `${F.vsContext.keybindingService?.lookupKeybinding(c.$97b)?.getLabel() ?? ""} Accept`;
									},
									onClick: () => {
										F.acceptCurrentDiff();
									},
									type: "primary",
									style: { "margin-left": "4px" },
								});
							},
							get children() {
								return (0, m.createComponent)(r.Match, {
									get when() {
										return x.isNotebook;
									},
									get children() {
										return [
											(0, m.createComponent)(u.$rdc, {
												get title() {
													return `${F.vsContext.keybindingService?.lookupKeybinding(c.$97b)?.getLabel() ?? ""} Accept`;
												},
												onClick: () => {
													F.acceptCurrentDiff();
												},
												type: "primary",
												style: { "margin-left": "4px" },
											}),
											(0, m.createComponent)(u.$rdc, {
												title: "Accept & Run",
												onClick: () => {
													F.acceptCurrentDiff(),
														x.runCurrentlyActiveCell(F.vsContext.editorService);
												},
												type: "secondary",
												style: { "margin-left": "8px" },
											}),
										];
									},
								});
							},
						});
					},
					O = (F) => {
						const x = (0, s.$5$b)(c.$_7b, {
							useDefaultKeybindingEvenIfNotActive: !0,
						});
						return (0, m.createComponent)(u.$rdc, {
							get title() {
								return (0, d.memo)(() => !!x())() ? `${x()} Reject` : "Reject";
							},
							onClick: () => F.rejectCurrentDiff(),
							type: "secondary",
							extras: { style: { "margin-left": "8px" } },
						});
					},
					B = (F) =>
						(0, m.createComponent)(u.$rdc, {
							get title() {
								return (
									F.vsContext.keybindingService
										?.lookupKeybindings(h.$t7b)
										.at(-1)
										?.getLabel() + " to toggle"
								);
							},
							isNotClickable: !0,
							type: "secondary",
						}),
					U = (F) =>
						(0, m.createComponent)(u.$rdc, {
							get title() {
								return (F.isFocused ? "\u2318\u23CE " : "") + "edit codebase";
							},
							onClick: () => F.onMultiFileEditSubmit(),
							type: "secondary",
							get disabled() {
								return F.plainText.length === 0;
							},
							style: { "margin-left": "4px" },
						}),
					z = (F) =>
						(0, m.createComponent)(u.$rdc, {
							get title() {
								return (
									F.vsContext.keybindingService
										?.lookupKeybinding(a.$7W)
										?.getLabel() + " Cancel"
								);
							},
							onClick: () => {
								F.cancelCurrentDiff({ shouldResetMultiFileEditState: !0 });
							},
							type: "secondary",
						});
			},
		)
