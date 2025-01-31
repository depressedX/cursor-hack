import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import './promptBarWidgets/promptBarButtons.js';
import './promptBarWidgets/childrenPromptBars.js';
import './promptBarWidgets/contextSession.js';
import './promptBarWidgets/multifileEditsFileSelection.js';
import '../../../../../../external/lexical/lexical/lexical.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../../external/solid/store.js';
import '../../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/constants.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/themables.js';
import '../../../../../base/common/uuid.js';
import '../../../../browser/services/genericUndoRedoElement.js';
import '../../../../common/core/selection.js';
import '../../../cHintLine/browser/hintLineWidget.js';
import '../inlineDiffTypes.js';
import '../../../../../workbench/contrib/aichat/browser/codeSelections.js';
import '../../../../../workbench/contrib/ui/browser/aiInput/aiInput2.js';
import '../../../../../workbench/contrib/ui/browser/aiInput/plugins/mentions/types.js';
import '../../../../../workbench/contrib/aiMarkdown/browser/markdown.js';
import '../../../../../workbench/contrib/controlCommon/browser/solid.js';
import '../../../../../workbench/contrib/notebook/browser/notebookBrowser.js';
import '../../../../../workbench/services/aiCmdK/browser/cmdKService.js';
import '../../../../../workbench/services/aiContext/browser/contextComponent.js';
import '../../../../../workbench/contrib/aichat/browser/components/InputBoxImage.js';
import '../../../../../workbench/contrib/aichat/browser/components/InputBoxCodeSelection.js';
import '../../../../../workbench/contrib/aichat/browser/components/InputBoxDocSelection.js';
import '../../../../../workbench/contrib/aichat/browser/components/InputBoxSelectionContainer.js';
import '../../../../../workbench/contrib/aichat/browser/utils.js';
import '../../../../../../proto/aiserver/v1/context_pb.js';
import '../../../../../workbench/services/utils/browser/isPureClick.js';
import '../../../../../workbench/services/aiContext/browser/allContextComponent.js';
import '../../../../../workbench/contrib/aichat/browser/components/ChatError.js';
import '../../../../browser/services/inlineDiffService.js';
import './PromptBarGenerationPill.js';
import './PromptBarAddGeneration.js';
import '../../../../../workbench/contrib/ui/browser/hooks/useThemeHooks.js';
import '../../../../../workbench/contrib/aiSettings/browser/components/settings/settingsFeaturesDocItem.js';
import '../../../../../base/common/platform.js';
import '../../../../../css!vs/editor/contrib/inlineDiffs/browser/widgets/inlineDiffWidget.js';
import '../../../../../css!vs/editor/contrib/inlineDiffs/browser/widgets/promptBarViewZone.js';
import '../../../../../css!vs/editor/contrib/inlineDiffs/browser/widgets/promptBarWidgets/promptBarWidgets.js';
define(
			de[4366],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4250, 4221, 4195, 4222, 158, 13, 193,
				83, 14, 58, 6, 26, 47, 606, 104, 499, 534, 354, 450, 310, 338, 36, 108,
				479, 2e3, 1364, 1363, 1980, 1365, 397, 228, 1046, 4365, 862, 383, 4185,
				4184, 331, 1376, 12, 906, 2305, 1137,
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
				r /*web*/,
				u /*web*/,
				a /*promptBarButtons*/,
				h /*childrenPromptBars*/,
				c /*contextSession*/,
				n /*multifileEditsFileSelection*/,
				g /*lexical*/,
				p /*solid*/,
				o /*store*/,
				f /*utils_pb*/,
				b /*codicons*/,
				s /*constants*/,
				l /*event*/,
				y /*themables*/,
				$ /*uuid*/,
				v /*genericUndoRedoElement*/,
				S /*selection*/,
				I /*hintLineWidget*/,
				T /*inlineDiffTypes*/,
				P /*codeSelections*/,
				k /*aiInput2*/,
				L /*types*/,
				D /*markdown*/,
				M /*solid*/,
				N /*notebookBrowser*/,
				A /*cmdKService*/,
				R /*contextComponent*/,
				O /*InputBoxImage*/,
				B /*InputBoxCodeSelection*/,
				U /*InputBoxDocSelection*/,
				z /*InputBoxSelectionContainer*/,
				F /*utils*/,
				x /*context_pb*/,
				H /*isPureClick*/,
				q /*allContextComponent*/,
				V /*ChatError*/,
				G /*inlineDiffService*/,
				K /*PromptBarGenerationPill*/,
				J /*PromptBarAddGeneration*/,
				W /*useThemeHooks*/,
				X /*settingsFeaturesDocItem*/,
				Y /*platform*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Qdc = se),
					(e.$Rdc = re);
				const ie = (0, t.template)("<div>"),
					ne = (0, t.template)(
						'<div><div tabindex="0"><div></div><div><div><div></div></div><div tabindex="-1" class="prompt-bar-selections compact"></div><div><div></div><div>',
					),
					ee = (0, t.template)("<div><div>"),
					_ = 5,
					te = 1,
					Q = (oe) => {
						let ae;
						return (
							oe
								? (ae = oe.activeEditorPane)
								: (ae = (0, M.$odc)().editorService.activeEditorPane),
							ae === void 0 ? !1 : !!(0, N.$eJb)(ae)
						);
					},
					Z = (oe) => {
						const ae = oe.activeEditorPane;
						if (ae === void 0) return;
						const pe = (0, N.$eJb)(ae);
						if (pe === void 0) return;
						const $e = pe.getActiveCell();
						$e !== void 0 && pe.executeNotebookCells([$e]);
					};
				function se(oe, ae, pe, $e, ye, ue, fe, me, ve) {
					const ge = ae.id;
					return (0, M.$ndc)(
						() =>
							(0, u.createComponent)(T.$m8b.Provider, {
								get value() {
									return {
										nonPersistentStorage: ye.nonPersistentStorage,
										setNonPersistentStorage: ye.setNonPersistentStorage,
										isNotebook: Q(),
										runCurrentlyActiveCell: Z,
									};
								},
								get children() {
									return (0, u.createComponent)(re, {
										id: ge,
										onClose: pe,
										delegate: ue,
										setEditor: me,
										lexicalEditor: fe,
										onFocusChange: ve,
									});
								},
							}),
						oe,
						$e,
					);
				}
				function re(oe) {
					const ae = (0, M.$odc)(),
						pe = (0, T.$n8b)(),
						$e = (0, p.createMemo)(() =>
							pe.nonPersistentStorage.promptBars.find((zi) => zi.id === oe.id),
						),
						ye = (0, p.createMemo)(() => {
							const Fi = $e();
							if (!(Fi === void 0 || !Fi.diffId)) return Je(Fi.diffId);
						}),
						ue = (0, p.createMemo)(() => {
							const Fi = $e();
							if (Fi === void 0 || !Fi.diffId) return;
							const zi = ye();
							if (!zi) return;
							const Zi = ae.inlineDiffService.getHandlerByDiffId(zi.id);
							if (!(!Zi || !(0, G.$47b)(Zi))) return Zi;
						}),
						[fe, me] = (0, p.createSignal)({}),
						ve = (0, p.createMemo)(
							() =>
								ae.reactiveStorageService.applicationUserPersistentStorage
									.allowMultiCmdKGenerations,
						),
						ge = (0, p.createMemo)(() => {
							const Fi = $e();
							if (Fi === void 0 || !Fi.diffId) return [];
							const zi = ye();
							return !zi || !("orderedGenerationUUIDs" in zi)
								? []
								: (zi.orderedGenerationUUIDs ?? []);
						});
					(0, p.createEffect)(() => {
						const Fi = ge();
						me((zi) => {
							const Zi = { ...(0, o.unwrap)(zi) };
							for (const nn of Fi) Zi[nn] || (Zi[nn] = "generating");
							return Zi;
						});
					}),
						(0, p.createEffect)(() => {
							const Fi = ue();
							if (!Fi) {
								me({});
								return;
							}
							const zi = Fi.onGenerationStatusChanged((Zi) => {
								console.log("generation status changed", Zi),
									me((nn) => ({ ...nn, [Zi.generationUUID]: Zi.status }));
							});
							(0, p.onCleanup)(() => {
								zi.dispose();
							});
						});
					const be = (0, p.createMemo)(() => {
							const Fi = $e();
							if (Fi === void 0 || !Fi.diffId) return -1;
							const zi = ye(),
								Zi = ge();
							return zi?.generationUUID ? Zi.indexOf(zi.generationUUID) : -1;
						}),
						Ce = () => [
							{
								modelDetails: ae.aiService.getModelDetails({
									specificModelField: "cmd-k",
								}),
								generationUUID: (0, $.$9g)(),
							},
						];
					(0, p.createEffect)(() => {
						ae.reactiveStorageService.applicationUserPersistentStorage
							.cmdKGenerationConfigs ||
							ae.reactiveStorageService.setApplicationUserPersistentStorage(
								"cmdKGenerationConfigs",
								Ce(),
							);
					});
					const Le = (Fi) => {
							$e()?.data.inputBoxDelegate.focus(Fi);
						},
						Fe = () => {
							Le();
						},
						Oe = $e()?.editorId;
					let xe = ae.codeEditorService
						.listCodeEditors()
						.find((Fi) => Fi !== void 0 && Fi.getId() === Oe);
					const He = () => {
							if ($e() !== void 0)
								return ae.cmdKService.getPromptBarCurrentRange(
									$e(),
									xe?.getModel(),
								);
						},
						Ke = () => {
							const Fi = He();
							return Fi
								? Fi.startLineNumber < Fi.endLineNumberExclusive - 1
								: !0;
						},
						Je = (Fi) => {
							const zi = pe.nonPersistentStorage.inlineDiffs,
								Zi = Fi ?? $e()?.diffId;
							return zi.find((nn) => nn.id === Zi);
						};
					let Te = {
						...(0, k.$Rac)(),
						namespace: "prompt-input" + $e()?.id,
						onError: (Fi) => {
							console.error(Fi);
						},
					};
					const [Ee, Ie] = (0, p.createSignal)(0),
						[Be, Se] = (0, p.createSignal)(!1);
					(0, p.createEffect)(() => {
						Be()
							? (_t(null), Ft(null), oe.onFocusChange(!0))
							: oe.onFocusChange(!1);
					});
					const [ke, Ue] = (0, p.createSignal)($e()?.data.initText),
						[qe, Ae] = (0, p.createSignal)(""),
						[Me, De] = (0, p.createSignal)(!1);
					(0, p.createEffect)(() => {
						const Fi = pe.nonPersistentStorage.promptBars.find(
							(zi) => zi.id === oe.id,
						);
						if (
							qe().length > 0 &&
							Fi?.preloadedRequest === void 0 &&
							!Me() &&
							gi()
						) {
							if (Fi === void 0) return;
							const zi = He();
							if (zi === void 0) return;
							De(!0),
								ae.cmdKService2.preloadEditWithSelection(
									(Zi) => {
										const nn = pe.nonPersistentStorage.promptBars.find(
											(fn) => fn.id === oe.id,
										);
										nn &&
											pe.setNonPersistentStorage(
												"promptBars",
												(fn) => fn.id === nn.id,
												"preloadedRequest",
												Zi,
											);
									},
									zi,
									Fi.uri,
									Fi.cellId,
								);
						}
					}),
						(0, p.createEffect)(() => {
							const Fi = pe.nonPersistentStorage.promptBars.find(
									(xn) => xn.id === oe.id,
								),
								zi = qe();
							if (Fi === void 0) return;
							const fn = Je()?.currentRange ?? He();
							fn !== void 0 &&
								ae.aiContextSessionService.updateContextSession(
									Fi.contextSessionUuid,
									{
										input: {
											case: "cmd-k",
											fileUri: Fi.uri,
											query: zi,
											replaceRange: fn,
											queryHistory: Fi.queryHistory?.current,
											chatHistory: Fi.inlineChatHistory?.current,
										},
										removedIntentUuids: [],
										upsertedIntents: [],
										rerankEndpoint: (xn) => (
											ae.reactiveStorageService.applicationUserPersistentStorage
												.allowMultiCmdKGenerations,
											ae.cmdKService.rerankCmdK(xn)
										),
									},
								);
						});
					const Re = (Fi) => {
							const zi = pe.nonPersistentStorage.promptBars.find(
								(Zi) => Zi.id === oe.id,
							);
							zi &&
								pe.setNonPersistentStorage(
									"promptBars",
									(Zi) => Zi.id === zi.id,
									"data",
									(Zi) => ({ ...Zi, ...Fi }),
								);
						},
						je = () => {
							ae.commandService.executeCommand("editor.action.resizePromptBar");
						};
					(0, p.onCleanup)(() => {
						if (!oe.id) return;
						const Fi = pe.nonPersistentStorage.promptBars.find(
							(zi) => zi.id === oe.id,
						);
						Fi !== void 0 &&
							Fi.data.initText !== ke() &&
							Re({ initText: ke() });
					});
					const Ve = (Fi) => {
							const zi = pe.nonPersistentStorage.promptBars.find(
								(Zi) => Zi.id === oe.id,
							);
							zi !== void 0 &&
								(Re({ ...zi.data, selections: [...zi.data.selections, Fi] }),
								Ie(zi.data.selections.length));
						},
						Ze = (Fi) => {
							const zi = pe.nonPersistentStorage.promptBars.find(
								(Zi) => Zi.id === oe.id,
							);
							zi !== void 0 &&
								(Re({
									...zi.data,
									selections: zi.data.selections.filter((Zi, nn) => nn !== Fi),
								}),
								Ie(zi.data.selections.length));
						},
						et = (Fi) => {
							const zi = pe.nonPersistentStorage.promptBars.find(
								(Zi) => Zi.id === oe.id,
							);
							zi !== void 0 &&
								Re({
									...zi.data,
									selectedLinks: [...(zi.data.selectedLinks ?? []), Fi],
								});
						},
						rt = (Fi) => {
							const zi = pe.nonPersistentStorage.promptBars.find(
								(Zi) => Zi.id === oe.id,
							);
							zi !== void 0 &&
								Re({
									...zi.data,
									selectedLinks: zi.data.selectedLinks?.filter(
										(Zi) => Zi.uuid !== Fi,
									),
								});
						},
						ft = (Fi) => {
							async function zi() {
								const Zi = pe.nonPersistentStorage.promptBars.find(
									(fn) => fn.id === oe.id,
								);
								if (Zi === void 0) return;
								const nn = await (0, P.$2fc)(
									ae.textModelService,
									ae.dataScrubbingService,
									Fi,
								);
								nn &&
									(Re({ ...Zi.data, selections: [...Zi.data.selections, nn] }),
									Ie(Zi.data.selections.length));
							}
							zi();
						},
						bt = (Fi) => {
							const zi = pe.nonPersistentStorage.promptBars.find(
								(Zi) => Zi.id === oe.id,
							);
							zi !== void 0 &&
								(Re({
									...zi.data,
									selections: zi.data.selections.filter((Zi, nn) => nn !== Fi),
								}),
								Ie(zi.data.selections.length));
						},
						nt = (Fi) => {
							const zi = pe.nonPersistentStorage.promptBars.find(
								(Zi) => Zi.id === oe.id,
							);
							zi !== void 0 &&
								Re({
									...zi.data,
									selectedCommits: [...(zi.data.selectedCommits ?? []), Fi],
								});
						},
						lt = (Fi) => {
							const zi = pe.nonPersistentStorage.promptBars.find(
								(Zi) => Zi.id === oe.id,
							);
							zi !== void 0 &&
								Re({
									...zi.data,
									selectedCommits: zi.data.selectedCommits?.filter(
										(Zi, nn) => nn !== Fi,
									),
								});
						},
						ct = (Fi) => {
							const zi = pe.nonPersistentStorage.promptBars.find(
								(Zi) => Zi.id === oe.id,
							);
							zi !== void 0 &&
								Re({
									...zi.data,
									selectedDocs: [...(zi.data.selectedDocs ?? []), Fi],
								});
						},
						gt = (Fi) => {
							const zi = pe.nonPersistentStorage.promptBars.find(
								(Zi) => Zi.id === oe.id,
							);
							zi !== void 0 &&
								Re({
									...zi.data,
									selectedDocs: zi.data.selectedDocs?.filter(
										(Zi) => Zi.uuid !== Fi,
									),
								});
						},
						ht = (Fi, zi) => {
							const Zi = pe.nonPersistentStorage.promptBars.find(
								(nn) => nn.id === oe.id,
							);
							Zi !== void 0 &&
								Re({ ...Zi.data, images: [{ ...zi, uuid: Fi }] });
						},
						Rt = (Fi) => {
							const zi = pe.nonPersistentStorage.promptBars.find(
								(Zi) => Zi.id === oe.id,
							);
							zi !== void 0 &&
								Re({
									...zi.data,
									images: zi.data.images?.filter((Zi) => Zi.uuid !== Fi),
								});
						},
						Nt = () => {
							const Fi = pe.nonPersistentStorage.promptBars.find(
								(zi) => zi.id === oe.id,
							);
							Fi !== void 0 && Re({ ...Fi.data, useWeb: !0 });
						},
						jt = () => {
							const Fi = pe.nonPersistentStorage.promptBars.find(
								(zi) => zi.id === oe.id,
							);
							Fi !== void 0 && Re({ ...Fi.data, useWeb: !1 });
						},
						ti = ({ shouldResetMultiFileEditState: Fi }) => {
							const zi = pe.nonPersistentStorage.promptBars.find(
								(Zi) => Zi.id === oe.id,
							);
							zi !== void 0 &&
								(zi.abortController?.abort(),
								pe.setNonPersistentStorage(
									"promptBars",
									(Zi) => Zi.id === zi.id,
									"abortController",
									void 0,
								),
								Xe(!1),
								Fi && kt(),
								Le());
						},
						kt = () => {
							const Fi = Dt();
							Fi && Zt([...si(), Fi]),
								Jt(void 0),
								ri(T.MultiFileEditingState.None),
								at(0),
								Li([]),
								Wt([]),
								Ui("");
						},
						hi = () => {
							pe.nonPersistentStorage.promptBars
								.filter(
									(zi) => zi.dependencyPromptBarIds?.includes(oe.id) ?? !1,
								)
								.forEach((zi) => {
									zi.abortController?.abort(),
										ae.commandService.executeCommand(s.$RW, zi.id, !0);
								});
						},
						Kt = () => {
							ae.commandService.executeCommand(s.$4W, oe.id);
						},
						di = (Fi) => {
							ae.commandService.executeCommand(s.$5W, oe.id, Fi);
						},
						Ye = () => {
							pe.nonPersistentStorage.promptBars.find(
								(zi) => zi.id === oe.id,
							) !== void 0 &&
								(Le(), ae.commandService.executeCommand(s.$RW, oe.id));
						};
					(0, p.onMount)(() => {
						Le();
					});
					const ze = () =>
							pe.nonPersistentStorage.promptBars.find((zi) => zi.id === oe.id)
								?.generating ?? !1,
						Xe = (Fi) => {
							const zi = pe.nonPersistentStorage.promptBars.find(
								(Zi) => Zi.id === oe.id,
							);
							zi &&
								pe.setNonPersistentStorage(
									"promptBars",
									(Zi) => Zi.id === zi.id,
									"generating",
									Fi,
								);
						};
					(0, p.createEffect)(() => {
						je(),
							setTimeout(() => {
								je();
							}, 10);
					});
					const [It, Lt] = (0, p.createSignal)(!1),
						xt = () => {
							if (
								pe.nonPersistentStorage.promptBars.find(
									(Zi) => Zi.id === oe.id,
								) === void 0
							)
								return;
							const zi = Je()?.currentRange;
							if (zi !== void 0)
								return new S.$kL(
									zi.startLineNumber,
									1,
									zi.endLineNumberExclusive,
									1,
								);
						},
						Vt = (Fi) => {
							const zi = pe.nonPersistentStorage.promptBars.find(
								(fn) => fn.id === oe.id,
							);
							if (zi === void 0) return [];
							const Zi = ae.markerService;
							return Fi === void 0 ? [] : (0, A.$L7b)(Zi, zi.uri, Fi);
						};
					let Bt;
					const Gt = (0, p.createMemo)(() => {
							const Fi = pe.nonPersistentStorage.promptBars.find(
								(zi) => zi.id === oe.id,
							);
							return Fi === void 0
								? !1
								: Fi?.originalRequest !== void 0 || Fi?.queryHistory !== void 0;
						}),
						Mt = (0, p.createMemo)(() => {
							const Fi = pe.nonPersistentStorage.promptBars.find(
								(zi) => zi.id === oe.id,
							);
							return Fi === void 0
								? !1
								: Fi.queryHistory?.current.query?.query === s.$$V;
						}),
						Ut = () => {
							const Fi = pe.nonPersistentStorage.promptBars.find(
								(zi) => zi.id === oe.id,
							);
							return qe().length === 0 && Fi?.data.selections.length === 0;
						},
						[ei, mi] = (0, p.createSignal)(void 0),
						ii = (0, p.createMemo)(
							() =>
								ae.reactiveStorageService.nonPersistentStorage.inprogressAIGenerations.find(
									(zi) => zi.generationUUID === ei(),
								)?.queuePositionResponse,
						),
						[Dt, Jt] = (0, p.createSignal)(),
						[si, Zt] = (0, p.createSignal)([]),
						[ci, ri] = (0, p.createSignal)(T.MultiFileEditingState.None),
						[$i, Wt] = (0, p.createSignal)([]),
						[tt, at] = (0, p.createSignal)(0),
						[pi, Li] = (0, p.createSignal)([]),
						[Di, Ui] = (0, p.createSignal)(""),
						Wi = (0, p.createMemo)(() => ci() !== T.MultiFileEditingState.None),
						Gi = async () => {
							ze() !== !0 && Wi() !== !0
								? (Jt((0, $.$9g)()),
									le({
										promptBarStore: pe,
										setGenerating: Xe,
										selectedFilesToEdit: pi,
										setMultiFileEditingState: ri,
										inProgressMultiFileEditGenerationUUID: Dt,
										canceledMultiFileEditGenerationUUIDs: si,
										setPotentialFilesToEdit: Wt,
										setSelectedFilesToEdit: Li,
										setPotentialFilesToEditCurrentIndex: at,
										plainText: qe,
										vsContext: ae,
										id: oe.id,
										onSubmit: Oi,
									}))
								: ci() === T.MultiFileEditingState.WaitingForUserInput &&
									Oi({ editMode: T.EditMode.MultiFile });
						},
						qi = async () => {
							const Fi = ke() ?? "",
								zi = qe() ?? "",
								Zi = xe?.getModel();
							if (Zi == null) return;
							const nn = He();
							if (nn === void 0) return;
							const fn = {
								startLineNumber: nn.startLineNumber,
								startColumn: 1,
								endLineNumber: nn.endLineNumberExclusive - 1,
								endColumn: Zi.getLineMaxColumn(nn.endLineNumberExclusive - 1),
							};
							yi(),
								ae.hallucinatedFunctionsDataService.createHallucinatedFunction(
									Zi,
									fn,
									{ prompt: { richText: Fi, plainText: zi } },
								);
						},
						Oi = async ({
							fixSubmit: Fi,
							fastMode: zi,
							chatMode: Zi,
							editMode: nn,
						}) => {
							const fn = Date.now();
							if (ze()) return;
							ae.tooltipService.registerEvent("editor.cmdk.submit");
							const xn = !0;
							if ((Bt?.dispose(), Ut())) return;
							let Sn = pe.nonPersistentStorage.promptBars.find(
								(Pn) => Pn.id === oe.id,
							);
							if (Sn === void 0) return;
							const Un = xt(),
								as = Vt(Un),
								Qn =
									Un === void 0
										? ""
										: ae.modelService.getModel(Sn.uri)?.getValueInRange(Un);
							try {
								if (
									(pe.setNonPersistentStorage(
										"promptBars",
										(Pn) => Pn.id === Sn?.id,
										"preventFollowupFromBeingAdded",
										!0,
									),
									ti({
										shouldResetMultiFileEditState: nn !== T.EditMode.MultiFile,
									}),
									ze())
								) {
									ti({
										shouldResetMultiFileEditState: nn !== T.EditMode.MultiFile,
									});
									return;
								}
								if (Fi !== !0) _e(void 0);
								else {
									const Pn = (Sn.fixingErrorCounter ?? 0) + 1;
									_e(`Attempting fix (${Pn}/${s.$pX})...`);
								}
							} finally {
								(Sn.preventFollowupFromBeingAdded = !1),
									pe.setNonPersistentStorage(
										"promptBars",
										(Pn) => Pn.id === Sn?.id,
										"preventFollowupFromBeingAdded",
										!1,
									);
							}
							Xe(!0), Lt(!1);
							let $s;
							const Us = Dt(),
								_n = qe();
							ae.aiFeatureStatusService.maybeRefreshFeatureStatus(
								"shouldUseReranking",
							);
							const sn =
									ae.aiFeatureStatusService.getCachedFeatureStatus(
										"shouldUseReranking",
									),
								{
									abortController: dn,
									generationUUID: An,
									promise: vn,
								} = ae.cmdKService2.submitEditWithSelection({
									options: {
										fastMode: zi,
										chatMode: Zi ?? !1,
										useContextSession: xn,
										preloadedRequest: (0, o.unwrap)(Sn.preloadedRequest),
										originalRequest: Sn.originalRequest?.current,
										contextSessionUuid: Sn.contextSessionUuid,
										queryHistory: Sn.queryHistory?.current,
										fileUri: Sn.uri,
										diffRange: Je()?.currentRange,
										rejectCurrentDiff: () => {
											di({ removeFollowupToo: !1 });
										},
										useReranker: sn,
										useWeb: Sn.data.useWeb ?? !1,
									},
									promptBarId: oe.id,
									query: qe(),
									selectedLinks: Sn.data.selectedLinks ?? [],
									structuredQuery: ke() ?? qe(),
									lineRange: He() ?? {
										startLineNumber: 1,
										endLineNumberExclusive: 1,
									},
									images: Sn.data.images ?? [],
									codeBlocks: Sn.data.selections,
									docs: Sn.data.selectedDocs ?? [],
									startTime: fn,
									focusEditor: () => {
										Le();
									},
									diffIdCallback: (Pn) => {
										const es = pe.nonPersistentStorage.promptBars.find(
											(ls) => ls.id === oe.id,
										);
										es &&
											pe.setNonPersistentStorage(
												"promptBars",
												(ls) => ls.id === es.id,
												"diffId",
												Pn,
											);
									},
									doneCallback: async () => {
										try {
											Bt?.dispose();
											const Pn = Date.now();
											let es = !1;
											const ls = () => {
												if (es === !0) return;
												const Jn = pe.nonPersistentStorage.promptBars.find(
													(ss) => ss.id === oe.id,
												);
												Jn &&
													Fi === !0 &&
													(Jn.fixingErrorCounter ?? 0) + 1 < s.$pX &&
													(pe.setNonPersistentStorage(
														"promptBars",
														(ss) => ss.id === Jn.id,
														"fixingErrorCounter",
														(Jn.fixingErrorCounter ?? 0) + 1,
													),
													(es = !0),
													Oi({ fixSubmit: !0 }));
											};
											(Bt = ae.markerService.onMarkerChanged(() => {
												Vt(xt()).length > 0 &&
													(Lt(!0),
													Fi === !0 && _e("Not fully fixed"),
													Date.now() - Pn < 1e3 && ls());
											})),
												Fi === !0 &&
													setTimeout(() => {
														Vt(xt()).length > 0
															? (ls(), _e("Not fully fixed"))
															: es === !1 && _e("Fixed");
													}, 1e3);
										} finally {
											kt(), Xe(!1);
										}
									},
									cancelGenerationWithNoChangesCallback: () => {
										Xe(!1), ri(T.MultiFileEditingState.None), Le();
									},
									rejectCallback: () => {
										Gt() || (ti({ shouldResetMultiFileEditState: !0 }), hi());
									},
									spoofedSelection: Fi === !0 || Gt() ? Qn : void 0,
									spoofedDiagnostics: Fi === !0 || Gt() ? as : void 0,
									spoofedCellId: Sn?.cellId,
									rerun: () => {
										Oi({ fixSubmit: !1 });
									},
								});
							mi(An),
								(Sn = pe.nonPersistentStorage.promptBars.find(
									(Pn) => Pn.id === oe.id,
								)),
								Sn &&
									pe.setNonPersistentStorage(
										"promptBars",
										(Pn) => Pn.id === Sn.id,
										"abortController",
										dn,
									),
								await vn;
						},
						yi = (Fi) => {
							ae.commandService.executeCommand(s.$RW, oe.id, Fi);
						},
						Ai = (0, p.createMemo)(() => [
							"ctx-definitions",
							"ctx-chat-history",
							"ctx-code",
							"ctx-files",
							"code",
							"docs",
							...(ae.reactiveStorageService.applicationUserPersistentStorage
								.showAllCmdKContexts
								? ["all-context-items-by-score"]
								: []),
						]),
						li = (0, p.createMemo)(() => {
							const Fi = {
									"ctx-definitions": !1,
									"ctx-chat-history": !1,
									"ctx-code": !1,
									"ctx-files": !1,
									code: !1,
									docs: !1,
									"all-context-items-by-score": !1,
								},
								zi = $e();
							if (!zi) return Fi;
							const Zi =
								ae.aiContextSessionService.getReactiveReadonlyContextSession(
									zi?.contextSessionUuid,
								);
							if (!Zi) return Fi;
							let nn = !1,
								fn = !1,
								xn = !1,
								Sn = !1;
							for (const Un of Zi.intents)
								Un.intent.type === x.ContextIntent_Type.USER_ADDED &&
									(Un.intent.intent.case === "cmdKDefinitions"
										? (nn = !0)
										: Un.intent.intent.case === "chatHistory"
											? (fn = !0)
											: Un.intent.intent.case === "codeSelection"
												? (xn = !0)
												: Un.intent.intent.case === "file" && (Sn = !0));
							return {
								"ctx-chat-history": fn,
								"ctx-definitions": nn,
								"ctx-code": xn,
								"ctx-files": Sn,
								code: !!zi.data?.selections?.length,
								docs: !!zi.data?.selectedDocs?.length,
								"all-context-items-by-score":
									!!ae.reactiveStorageService.applicationUserPersistentStorage
										.showAllCmdKContexts,
							};
						}),
						Vi = (0, p.createMemo)(() => Ai().filter((Fi) => li()[Fi])),
						[wi, _t] = (0, p.createSignal)(null),
						[ai, Ft] = (0, p.createSignal)(null),
						Xt = 40;
					let $t = null;
					const ut = (Fi) => {
							if (!wi() || ai() || Be() || Bn()) return;
							const zi = Fi.ctrlKey || Fi.metaKey;
							if ((0, H.$dcc)(Fi, "Escape")) {
								Fi.stopImmediatePropagation(),
									Fi.preventDefault(),
									_t(null),
									Ft(null),
									Le();
								return;
							}
							if ((0, H.$dcc)(Fi, "ArrowDown")) {
								Fi.stopImmediatePropagation(), Fi.preventDefault(), qt()();
								return;
							}
							if ((0, H.$dcc)(Fi, "ArrowUp")) {
								Fi.stopImmediatePropagation(), Fi.preventDefault(), Tt()(Fi);
								return;
							}
							Fi.key, Fi.key;
						},
						Et = (Fi) => {
							const zi = ae.window.getSelection();
							if (!zi || zi.rangeCount === 0) return !1;
							try {
								const Zi = zi.getRangeAt(0);
								if (Zi.collapsed) {
									const nn = Zi.cloneRange();
									return (
										nn.selectNodeContents(Fi),
										nn.setEnd(Zi.endContainer, Zi.endOffset),
										nn.toString() === ""
									);
								}
							} catch {}
							return !1;
						},
						Tt = (0, p.createMemo)(() => {
							const Fi = oe.lexicalEditor(),
								zi = Vi(),
								Zi = wi();
							return (nn) => {
								if (Bn() || ai()) return !1;
								const fn = Fi?.getRootElement(),
									xn = Et(fn);
								if (!zi.length) return !1;
								if (Zi) {
									const Sn = zi.indexOf(Zi);
									if (Sn === -1) return !1;
									const Un = Sn - 1;
									if (Un < 0) return !0;
									_t(zi[Un]);
								} else {
									if (!Be() || !fn) return !1;
									if (!xn) return !0;
									_t(zi[zi.length - 1]), Fi?.blur();
								}
								return !0;
							};
						}),
						qt = (0, p.createMemo)(() => () => {
							if (Bn() || ai()) return !1;
							const Fi = Vi();
							if (!Fi.length) return !1;
							const zi = wi();
							if (!zi) return !1;
							const Zi = Fi.indexOf(zi);
							if (Zi === -1) return !1;
							const nn = Zi + 1;
							return nn >= Fi.length ? (os()(), !1) : (_t(Fi[nn]), !0);
						}),
						At = (Fi) => Fi.altKey,
						Yt = (Fi) => {
							const zi = $e(),
								Zi = xe?.getModel();
							if (zi && xe && Zi && !zi.diffId) {
								const nn = ae.cmdKService.getPromptBarCurrentRange(zi, Zi);
								return (
									nn &&
										(Zi.changeDecorations((fn) => {
											const xn = Zi.getLineCount(),
												Sn = Math.max(1, nn.startLineNumber),
												as = ((Qn) => Math.min(xn, Math.max(Sn, Qn)))(
													nn.endLineNumberExclusive + Fi - 1,
												);
											return (
												fn.changeDecoration(zi.currentRangeDecorationId, {
													endColumn: Zi.getLineMaxColumn(as),
													endLineNumber: as,
													startColumn: Zi.getLineMinColumn(nn.startLineNumber),
													startLineNumber: nn.startLineNumber,
												}),
												!0
											);
										}),
										ae.commandService.executeCommand(s.$QW, xe)),
									!0
								);
							}
							return !1;
						};
					let ni;
					const bi = [
						{
							command: g.KEY_COMMAND_Y_OR_CNTRL_SHIFT_Y_COMMAND,
							callback: (Fi) => {
								if (ci() === T.MultiFileEditingState.WaitingForUserInput) {
									const zi = $i().at(tt());
									zi !== void 0 && Li([...pi().filter((fn) => fn !== zi), zi]);
									const Zi = tt(),
										nn = Zi + 1 >= $i().length ? 0 : Zi + 1;
									return at(nn), Fi.stopPropagation(), !0;
								}
								return (
									ae.commandService.executeCommand(T.$$7b),
									Fi.stopPropagation(),
									!0
								);
							},
						},
						{
							command: g.KEY_COMMAND_SLASH_COMMAND,
							callback: (Fi) => {
								if (ve()) {
									const zi =
										ae.reactiveStorageService.applicationUserPersistentStorage
											.cmdKGenerationConfigs?.[0]?.modelDetails?.modelName;
									if (zi) {
										const Zi = ae.aiSettingsService.getAvailableModelsReactive({
												isLongContextOrDebuggerMode: !1,
												isChat: !1,
											}),
											fn = (Zi.findIndex((xn) => xn === zi) + 1) % Zi.length;
										fi(Zi[fn], 0);
									}
									return !1;
								} else
									return Fi.altKey && ni
										? (ni(), Fi.preventDefault(), Fi.stopPropagation(), !0)
										: (ae.commandService.executeCommand(s.$9V, {
												isLongContextMode: !1,
												specificModelField: "cmd-k",
											}),
											Fi.stopPropagation(),
											!0);
							},
						},
						{
							command: g.KEY_COMMAND_N_COMMAND,
							callback: (Fi) => {
								if (ci() === T.MultiFileEditingState.WaitingForUserInput) {
									const zi = $i().at(tt());
									zi !== void 0 && Li([...pi().filter((nn) => nn !== zi)]);
									const Zi = tt() + 1 >= $i().length ? 0 : tt() + 1;
									return at(Zi), Fi.stopPropagation(), !0;
								}
								return (
									ae.commandService.executeCommand(T.$b8b),
									Fi.stopPropagation(),
									!0
								);
							},
						},
						{
							command: g.KEY_COMMAND_K_COMMAND,
							callback: (Fi) => {
								if (ci() === T.MultiFileEditingState.WaitingForUserInput) {
									const zi = tt() - 1 < 0 ? $i().length - 1 : tt() - 1;
									return at(zi), Fi.stopPropagation(), !0;
								}
								return (
									ae.editorService.activeEditorPane?.focus(),
									Fi.stopPropagation(),
									!0
								);
							},
						},
						{
							command: g.KEY_COMMAND_J_COMMAND,
							callback: (Fi) => {
								if (ci() === T.MultiFileEditingState.WaitingForUserInput) {
									const zi = tt() + 1 >= $i().length ? 0 : tt() + 1;
									return at(zi), Fi.stopPropagation(), !0;
								}
								return !1;
							},
						},
						{
							command: g.KEY_COMMAND_SHIFT_K_COMMAND,
							callback: (Fi) => (
								ae.commandService.executeCommand(I.$t7b, {
									promptBarId: oe.id,
									invocationType: "toggle",
								}),
								Fi.stopPropagation(),
								!0
							),
						},
						{
							command: g.KEY_COMMAND_ENTER_COMMAND,
							callback: (Fi) =>
								pe.nonPersistentStorage.promptBars.find((Zi) => Zi.id === oe.id)
									?.diffId !== void 0 && ze() !== !0
									? (Kt(), !0)
									: ae.reactiveStorageService.applicationUserPersistentStorage
												.hallucinatedFunctionsEnabled === !0
										? (qi(), !0)
										: !1,
						},
						{
							command: g.KEY_BACKSPACE_DELETE_COMMAND,
							callback: (Fi) => {
								const zi = pe.nonPersistentStorage.promptBars.find(
									(Zi) => Zi.id === oe.id,
								);
								return ze()
									? (ti({ shouldResetMultiFileEditState: !0 }),
										hi(),
										Fi.stopPropagation(),
										!0)
									: zi?.diffId !== void 0
										? Gt() && qe().length > 0
											? !1
											: (di({ removeFollowupToo: !0 }),
												hi(),
												ri(T.MultiFileEditingState.None),
												Fi.stopPropagation(),
												!0)
										: !1;
							},
						},
						{
							command: g.KEY_TAB_COMMAND,
							callback: (Fi) => {
								if (Q(ae.editorService) && !ze() && Je())
									return Z(ae.editorService), Fi.stopPropagation(), !0;
								{
									if (!ve()) return !1;
									const zi = be();
									if (zi === -1) return !1;
									const Zi = ge(),
										nn = Fi.shiftKey
											? (zi - 1 + Zi.length) % Zi.length
											: (zi + 1) % Zi.length;
									let fn = $e()?.diffId;
									if (fn) {
										Fi.stopPropagation(), Fi.preventDefault();
										const xn =
											ae.inlineDiffService.toggleSelectedGenerationAndReturnIsActive(
												fn,
												nn + 1,
											);
										return xn !== void 0 && Xe(xn), Fi.stopPropagation(), !0;
									}
									return !1;
								}
							},
						},
						{
							command: g.KEY_ALT_UP_COMMAND,
							callback: (Fi) => (($t = null), Es(!1), !0),
						},
						{
							command: g.KEY_ARROW_UP_COMMAND,
							callback: (Fi) =>
								At(Fi) && Yt(Fi.shiftKey ? -3 : -1)
									? (Fi.preventDefault(), !0)
									: Tt()(Fi),
						},
						{
							command: g.KEY_ARROW_DOWN_COMMAND,
							callback: (Fi) =>
								At(Fi) && Yt(Fi.shiftKey ? 3 : 1)
									? (Fi.preventDefault(), !0)
									: qt()(),
						},
					];
					(0, p.createEffect)(() => {
						Vi().length === 0 && wi() !== null && _t(null);
					});
					const fi = (Fi, zi) => {
							if (
								!ae.reactiveStorageService.applicationUserPersistentStorage
									.cmdKGenerationConfigs
							)
								return;
							const Zi = $e();
							if (!Zi) return;
							const nn = ae.aiService.getModelDetails({
								specificModelField: "cmd-k",
							});
							if (Zi.multiGenerationConfigs) {
								ae.reactiveStorageService.setNonPersistentStorage(
									"promptBars",
									(xn) => xn.id === Zi.id,
									"multiGenerationConfigs",
									(0, o.produce)((xn) => {
										xn &&
											(xn[zi].modelDetails = new f.$Zs({
												...nn,
												modelName: Fi,
											}));
									}),
								);
								const fn = $e()?.multiGenerationConfigs;
								fn &&
									ae.reactiveStorageService.setApplicationUserPersistentStorage(
										"cmdKGenerationConfigs",
										fn,
									);
							} else
								ae.reactiveStorageService.setApplicationUserPersistentStorage(
									"cmdKGenerationConfigs",
									(0, o.produce)((fn) => {
										fn &&
											(fn[zi].modelDetails = new f.$Zs({
												...nn,
												modelName: Fi,
											}));
									}),
								);
						},
						[Ti, wt] = (0, p.createSignal)(0),
						[We, _e] = (0, p.createSignal)(void 0),
						Si = () => {
							const Fi = pe.nonPersistentStorage.promptBars.find(
								(fn) => fn.id === oe.id,
							);
							if (xe === void 0 || Fi === void 0) return;
							const zi = He();
							if (zi === void 0) return;
							const Zi = xe.getVisibleRanges();
							let nn = !1;
							for (const fn of Zi)
								if (
									zi.startLineNumber >= fn.startLineNumber &&
									zi.startLineNumber <= fn.endLineNumber
								) {
									nn = !0;
									break;
								}
							if (nn)
								return xe.getOffsetForColumn(
									zi.startLineNumber,
									Fi.indentColumn ?? 1,
								);
						},
						gi = (0, p.createMemo)(() => !1),
						ki = () => {
							if (xe === void 0) return 0;
							const Fi = xe.getLayoutInfo();
							return (
								Fi.minimap.renderMinimap === 0 ||
									(Fi.minimap.minimapWidth > 0 && Fi.minimap.minimapLeft === 0),
								Fi.verticalScrollbarWidth
							);
						},
						[Pi, Hi] = (0, p.createSignal)(0),
						Ji = (0, p.createMemo)(() => (Pi(), Si())),
						[cn, un] = (0, p.createSignal)(Ji() ?? 0),
						[yn, Rn] = (0, p.createSignal)(ki());
					(0, p.onMount)(() => {
						if (xe) {
							const Fi = l.Event.defer(xe.onDidScrollChange)(() => {
									Hi(Pi() + 1);
									const nn = Ji();
									nn !== void 0 && un(nn);
								}),
								zi = l.Event.defer(xe.onDidChangeModelDecorations)(() => {
									Hi(Pi() + 1);
									const nn = Ji();
									nn !== void 0 && un(nn);
								}),
								Zi = l.Event.defer(xe.onDidLayoutChange)(() => {
									Rn(ki());
								});
							(0, p.onCleanup)(() => {
								Fi.dispose(), zi.dispose(), Zi.dispose();
							});
						}
					});
					const _i = (0, p.createMemo)(() => !Gt() || qe().length > 0 || Mt()),
						[Bn, Mn] = (0, p.createSignal)(!1),
						zn = (0, u.createComponent)(p.Show, {
							get when() {
								return $e()?.forceRerenderInputBox;
							},
							keyed: !0,
							children: (Fi) => {
								const zi = pe.nonPersistentStorage.promptBars.find(
										(nn) => nn.id === oe.id,
									),
									Zi =
										zi?.data.initText ??
										ae.aiService.getLastDraftMessage() ??
										"";
								return (
									Ue(Zi),
									Ae(Zi),
									(0, u.createComponent)(
										k.$Uac,
										(0, m.mergeProps)(L.$w_b, {
											readonly: !1,
											supportsGit: !1,
											supportsCommitNotes: !1,
											supportsLint: !1,
											showDocs: !0,
											supportsCodebase: !1,
											supportsLink: !0,
											supportsFolderSelections: !1,
											supportsWeb: !0,
											allowGhostTextAtSymbols: !1,
											get shouldAutoParseLink() {
												return ae.reactiveStorageService
													.applicationUserPersistentStorage
													.shouldAutoParseCmdKLinks;
											},
											addWeb: Nt,
											removeWeb: jt,
											useArrowsForHistory: !0,
											initText: Zi,
											isLongContextMode: !1,
											source: "editor.cmdk",
											onMentionsMenuOpen: () => Mn(!0),
											onMentionsMenuClose: () => Mn(!1),
											get placeholder() {
												return (0, r.memo)(() => !Gt())()
													? (0, r.memo)(() => !!$e()?.chatResponse)()
														? `Follow-up or ${Ke() ? "edit" : "new code"} instructions`
														: `${Ke() ? "Editing" : "New code"} instructions... (\u21C5 for history, @ for code / documentation)`
													: (Wi()
															? "Follow-up..."
															: "Follow-up instructions...") +
															` ${ae.keybindingService?.lookupKeybindings(I.$t7b).at(-1)?.getLabel()}`;
											},
											insertLink: et,
											removeLink: rt,
											get linksSelections() {
												return zi?.data.selectedLinks ?? [];
											},
											get delegate() {
												return $e()?.data.delegate;
											},
											get inputBoxDelegate() {
												return $e()?.data.inputBoxDelegate;
											},
											insertSelection: Ve,
											get selections() {
												return $e()?.data.selections ?? [];
											},
											editorConfig: () => Te,
											removeSelection: Ze,
											addImage: ht,
											removeImage: Rt,
											insertFileSelection: ft,
											fileSelections: [],
											removeFileSelection: bt,
											insertDocs: ct,
											get selectedDocs() {
												return zi?.data.selectedDocs ?? [];
											},
											removeDocs: gt,
											insertCommit: nt,
											removeCommit: lt,
											get commits() {
												return $e()?.data.selectedCommits ?? [];
											},
											get setEditor() {
												return oe.setEditor;
											},
											setText: (nn) => {
												Ae(nn), ae.aiService.setLastDraftMessage(nn);
												const fn = pe.nonPersistentStorage.promptBars.find(
													(xn) => xn.id === oe.id,
												);
												fn !== void 0 &&
													ae.fastContextService.computeEmbeddingsChunks(
														fn.id,
														nn,
													);
											},
											setRichText: (nn) => {
												Ue(nn), Re({ initText: nn });
											},
											onEscape: () => {
												const nn = pe.nonPersistentStorage.promptBars.find(
													(fn) => fn.id === oe.id,
												);
												ze() || nn?.diffId !== void 0
													? ae.editorService.activeEditorPane?.focus()
													: yi();
											},
											onSubmit: (nn) => {
												Oi({
													fixSubmit: !1,
													fastMode: !1,
													chatMode: nn.altKey,
													editMode: T.EditMode.SingleFile,
												});
											},
											setIsFocused: (nn) => {
												Se(nn);
											},
											externalHistoryBundle: {
												runExternalUndo: () => {
													const nn = pe.nonPersistentStorage.promptBars.find(
														(fn) => fn.id === oe.id,
													);
													nn !== void 0 && ae.undoRedoService.undo(nn.uri);
												},
												runExternalRedo: () => {
													const nn = pe.nonPersistentStorage.promptBars.find(
														(fn) => fn.id === oe.id,
													);
													nn !== void 0 && ae.undoRedoService.redo(nn.uri);
												},
												addToExternalUndoStack: (nn) => {
													const fn = pe.nonPersistentStorage.promptBars.find(
														(xn) => xn.id === oe.id,
													);
													fn !== void 0 &&
														ae.undoRedoService.pushElement(
															new v.$x7b(
																"Lexical Operation",
																"lexical-op",
																fn.uri,
																() => {
																	ae.commandService.executeCommand(s.$OW, {
																		historyState: nn.historyState,
																		promptBarId: oe.id,
																	});
																},
																() => {
																	ae.commandService.executeCommand(s.$PW, {
																		historyState: nn.historyState,
																		promptBarId: oe.id,
																	});
																},
															),
														);
												},
											},
											extraCommandListeners: bi,
											get contextSessionUuid() {
												return $e()?.contextSessionUuid;
											},
											setContentHeight: wt,
										}),
									)
								);
							},
						}),
						[$n, Ln] = (0, p.createSignal)(0),
						[wn, Hn] = (0, p.createSignal)(0);
					(0, p.createEffect)((Fi) => (Fi !== wn() && je(), wn()));
					const [Yn, Es] = (0, p.createSignal)(!1),
						Nn = () => Es(!Yn());
					let Fn, Gn;
					(0, p.onMount)(() => {
						const Fi = new ResizeObserver((zi) => {
							for (const Zi of zi) {
								const { width: nn, height: fn } = Zi.contentRect;
								Ln(nn), Hn(fn);
							}
						});
						Fn && Fi.observe(Fn),
							(0, p.onCleanup)(() => {
								Fi.disconnect();
							});
					}),
						(0, p.createEffect)(() => {
							Gn && oe.delegate.registerBigContainer(Gn);
						});
					const [Dn, jn] = (0, p.createSignal)([]),
						rs = (0, W.$f$b)(ae.themeService);
					(0, p.createEffect)(() => {
						Promise.all(
							($e()?.data.selectedDocs?.filter((Fi) => Fi) ?? []).map((Fi) =>
								(0, P.$3fc)(ae.aiService, ae.reactiveStorageService, Fi).then(
									(zi) => (zi ? (0, U.$Cbc)(zi, ae) : null),
								),
							),
						).then((Fi) => {
							jn(Fi.filter((zi) => zi !== null));
						});
					});
					const Js = (0, p.createMemo)(() =>
						[...pe.nonPersistentStorage.promptBars].sort(
							(zi, Zi) => zi.createdAt - Zi.createdAt,
						),
					);
					let ts = !1;
					const js =
							"We are not sure how you reached this state - please email the devs at hi@cursor.sh. This message will disappear when you restart.",
						os = (0, p.createMemo)(() => () => {
							Ft(null),
								Le(() => {
									setTimeout(() => {
										const Fi = $e()?.data.inputBoxDelegate.getRef();
										if (Fi) {
											const zi = ae.window.document.createRange();
											zi.setStart(Fi, 0),
												zi.setEnd(Fi, 0),
												ae.window.getSelection()?.removeAllRanges(),
												ae.window.getSelection()?.addRange(zi);
										}
									}, 1);
								}),
								_t(null);
						});
					let En;
					(0, p.createEffect)(() => {
						wi() && En?.focus();
					});
					const ns = (0, p.createMemo)(
						() =>
							$e()?.multiGenerationConfigs ??
							ae.reactiveStorageService.applicationUserPersistentStorage
								.cmdKGenerationConfigs ??
							[],
					);
					return (0, u.createComponent)(p.Show, {
						get when() {
							return $e() !== void 0;
						},
						get fallback() {
							return js;
						},
						get children() {
							const Fi = ne(),
								zi = Fi.firstChild,
								Zi = zi.firstChild,
								nn = Zi.nextSibling,
								fn = nn.firstChild,
								xn = fn.firstChild,
								Sn = fn.nextSibling,
								Un = Sn.nextSibling,
								as = Un.firstChild,
								Qn = as.nextSibling;
							Fi.style.setProperty("display", "flex"),
								Fi.style.setProperty("flex-direction", "column"),
								Fi.style.setProperty("gap", "4px"),
								(0, d.insert)(
									Fi,
									(0, u.createComponent)(p.Show, {
										get when() {
											return (0, r.memo)(() => !!ve())() && ns().length > te;
										},
										get children() {
											const sn = ie();
											return (
												sn.style.setProperty("padding", "0 10px"),
												sn.style.setProperty("padding-top", "4px"),
												sn.style.setProperty("position", "relative"),
												sn.style.setProperty("z-index", "1000002"),
												sn.style.setProperty("font-size", "10px"),
												sn.style.setProperty(
													"color",
													"var(--vscode-input-placeholderForeground)",
												),
												sn.style.setProperty("display", "flex"),
												sn.style.setProperty("align-items", "center"),
												sn.style.setProperty("gap", "4px"),
												(0, d.insert)(
													sn,
													(0, u.createComponent)(p.For, {
														get each() {
															return ns();
														},
														children: (dn, An) =>
															(0, u.createComponent)(K.$Odc, {
																get canDelete() {
																	return (
																		(0, r.memo)(() => ns().length > te)() &&
																		!ye()
																	);
																},
																onDelete: () => {
																	ae.reactiveStorageService.setApplicationUserPersistentStorage(
																		"cmdKGenerationConfigs",
																		(0, o.produce)((vn) => {
																			vn && vn.splice(An(), 1);
																		}),
																	),
																		ns().length === te &&
																			ae.commandService.executeCommand(
																				s.$0V,
																				ns()[0].modelDetails.modelName,
																				!1,
																				"cmd-k",
																			),
																		ae.commandService.executeCommand(
																			"editor.action.resizePromptBar",
																		);
																},
																get modelName() {
																	return dn.modelDetails.modelName ?? "";
																},
																get canChangeModel() {
																	return !ye();
																},
																get status() {
																	return fe()[dn.generationUUID];
																},
																onClick: (vn) => {
																	let Pn = $e()?.diffId;
																	if (Pn) {
																		vn.stopPropagation(), vn.preventDefault();
																		const es =
																			ae.inlineDiffService.toggleSelectedGenerationAndReturnIsActive(
																				Pn,
																				An() + 1,
																			);
																		es !== void 0 && Xe(es),
																			vn.stopPropagation();
																	}
																},
																onChangeModel: (vn) => {
																	fi(vn, An());
																},
																get isActive() {
																	return (0, r.memo)(() => be() !== -1)()
																		? An() === be()
																		: !1;
																},
															}),
													}),
													null,
												),
												(0, d.insert)(
													sn,
													(0, u.createComponent)(p.Show, {
														get when() {
															return (
																(0, r.memo)(() => ns().length < _)() && !ye()
															);
														},
														get children() {
															return (0, u.createComponent)(J.$Pdc, {
																onSelect: (dn) => {
																	ae.reactiveStorageService.setApplicationUserPersistentStorage(
																		"cmdKGenerationConfigs",
																		(0, o.produce)((An) => {
																			if (An) {
																				const vn = ae.aiService.getModelDetails(
																					{ specificModelField: "cmd-k" },
																				);
																				An.unshift({
																					generationUUID: (0, $.$9g)(),
																					modelDetails: new f.$Zs({
																						...vn,
																						modelName: dn,
																					}),
																				});
																			}
																		}),
																	);
																},
															});
														},
													}),
													null,
												),
												(0, C.effect)(() =>
													`${cn()}px` != null
														? sn.style.setProperty("margin-left", `${cn()}px`)
														: sn.style.removeProperty("margin-left"),
												),
												sn
											);
										},
									}),
									zi,
								),
								zi.addEventListener("blur", () => {
									Se(!1);
								}),
								zi.addEventListener("focus", (sn) => {
									Se(!0);
								}),
								zi.addEventListener("keydown", (sn) => {
									const dn = oe.lexicalEditor();
									dn !== void 0 && (0, g.simulateLexicalKeyPress)(sn, dn);
								});
							const $s = Gn;
							typeof $s == "function" ? (0, E.use)($s, zi) : (Gn = zi),
								(0, d.insert)(
									zi,
									(0, u.createComponent)(p.Show, {
										get when() {
											return Yn();
										},
										get children() {
											return (0, u.createComponent)(c.$Fdc, {
												get contextSessionUuid() {
													return $e()?.contextSessionUuid;
												},
												get contentHeight() {
													return Ti();
												},
												get leftOffset() {
													return cn();
												},
												get containerHeight() {
													return wn();
												},
											});
										},
									}),
									Zi,
								);
							const Us = Fn;
							typeof Us == "function" ? (0, E.use)(Us, nn) : (Fn = nn),
								nn.style.setProperty("z-index", "1000001"),
								nn.style.setProperty("position", "relative"),
								nn.style.setProperty("padding", "4px 4px 0px 4px"),
								nn.style.setProperty("max-width", "500px"),
								nn.style.setProperty("width", "500px"),
								nn.style.setProperty("min-width", "450px"),
								nn.style.setProperty("margin-left", "2px"),
								nn.style.setProperty("font-size", "12px"),
								nn.style.setProperty("line-height", "1.5em"),
								nn.style.setProperty(
									"background-color",
									"var(--vscode-editor-background)",
								),
								nn.style.setProperty("color", "var(--vscode-foreground)"),
								nn.style.setProperty("border-radius", "5px"),
								nn.style.setProperty("box-sizing", "border-box"),
								nn.style.setProperty("overflow-y", "auto"),
								nn.style.setProperty("overflow-x", "hidden"),
								nn.style.setProperty(
									"box-shadow",
									"0 4px 8px var(--vscode-inlineChat-shadow)",
								),
								(0, d.insert)(
									nn,
									(0, u.createComponent)(p.Show, {
										get when() {
											return (
												(0, r.memo)(() => We() !== void 0)() &&
												We()?.trim() !== ""
											);
										},
										get children() {
											const sn = ie();
											return (
												sn.style.setProperty("padding", "0px 4px 2px 0.5rem"),
												sn.style.setProperty(
													"color",
													"var(--vscode-input-placeholderForeground)",
												),
												sn.style.setProperty("text-transform", "uppercase"),
												sn.style.setProperty("font-size", "10px"),
												(0, d.insert)(sn, We),
												sn
											);
										},
									}),
									fn,
								),
								(0, d.insert)(
									nn,
									(0, u.createComponent)(p.Show, {
										get when() {
											return pe.nonPersistentStorage.promptBars.length > 1;
										},
										get children() {
											const sn = ie();
											return (
												sn.style.setProperty("position", "absolute"),
												sn.style.setProperty("right", "14px"),
												sn.style.setProperty("top", "-5.5px"),
												sn.style.setProperty(
													"color",
													"var(--vscode-input-placeholderForeground)",
												),
												sn.style.setProperty("cursor", "pointer"),
												sn.style.setProperty("z-index", "1000002"),
												sn.style.setProperty("padding", "4px"),
												sn.style.setProperty("font-size", "8px"),
												(0, d.insert)(
													sn,
													() =>
														`${Js().findIndex((dn) => dn.id === oe.id) + 1}/${pe.nonPersistentStorage.promptBars.length}`,
												),
												sn
											);
										},
									}),
									fn,
								),
								fn.addEventListener("click", (sn) => {
									yi(!0), sn.stopPropagation();
								}),
								fn.style.setProperty("position", "absolute"),
								fn.style.setProperty("right", "-4px"),
								fn.style.setProperty("top", "-4px"),
								fn.style.setProperty(
									"color",
									"var(--vscode-input-placeholderForeground)",
								),
								fn.style.setProperty("cursor", "pointer"),
								fn.style.setProperty("z-index", "1000002"),
								fn.style.setProperty("padding", "4px"),
								xn.style.setProperty("font-size", "14px"),
								Sn.addEventListener("keydown", ut),
								Sn.addEventListener("blur", () => {
									_t(null), Ft(null);
								});
							const _n = En;
							return (
								typeof _n == "function" ? (0, E.use)(_n, Sn) : (En = Sn),
								Sn.style.setProperty("display", "flex"),
								Sn.style.setProperty("flex-direction", "column"),
								Sn.style.setProperty("margin-top", "0.5rem"),
								Sn.style.setProperty("margin-bottom", "0.25rem"),
								Sn.style.setProperty("gap", "0.25rem"),
								(0, d.insert)(
									Sn,
									(0, u.createComponent)(p.Show, {
										get when() {
											return (
												(0, r.memo)(
													() => ($e()?.data.images.length ?? 0) > 0,
												)() && $e()?.data.images
											);
										},
										children: (sn) =>
											(0, u.createComponent)(p.For, {
												get each() {
													return sn();
												},
												children: (dn) =>
													(0, u.createComponent)(O.$Gbc, {
														image: dn,
														removeImage: () => Rt(dn.uuid),
														get style() {
															return {
																border: "1px solid " + rs(),
																"border-radius": "4px",
																margin: "0px 0.5rem",
																"margin-bottom": "0",
															};
														},
													}),
											}),
									}),
									null,
								),
								(0, d.insert)(
									Sn,
									(0, u.createComponent)(p.Show, {
										get when() {
											return $e();
										},
										get fallback() {
											return (() => {
												const sn = ie();
												return sn.style.setProperty("height", "4px"), sn;
											})();
										},
										children: (sn) =>
											(0, u.createComponent)(R.$Idc, {
												style: { padding: "0px 0.5rem 2px 0.5rem" },
												get contextSessionUuid() {
													return sn().contextSessionUuid;
												},
												get focusedSection() {
													return wi();
												},
												get runningSection() {
													return ai();
												},
												setRunningSection: Ft,
												stopFocusedSection: os,
												containerRef: Fn,
											}),
									}),
									null,
								),
								(0, d.insert)(
									Sn,
									(0, u.createComponent)(p.Show, {
										get when() {
											return (
												(0, r.memo)(() => !!$e()?.data.selections)() &&
												($e()?.data.selections.length ?? 0) > 0
											);
										},
										get children() {
											return (0, u.createComponent)(z.$ecc, {
												class: "prompt-bar-selection-container",
												get each() {
													return $e()?.data.selections.filter((sn) => sn) ?? [];
												},
												get isFocused() {
													return wi() === "code";
												},
												get isRunning() {
													return ai() === "code";
												},
												startRunning: () => Ft("code"),
												stopRunning: () => Ft(null),
												get stopFocused() {
													return os();
												},
												containerRef: Fn,
												get show() {
													return (
														($e()?.data.selections.filter((sn) => sn).length ??
															0) > 0
													);
												},
												type: "code",
												renderItemBorders: !0,
												collapseOthersOnAdd: !0,
												boxPropsFunc: (sn, dn) =>
													(0, F.$cgc)(sn, dn, ae, Ze, {
														alwaysShowToolbar: !0,
													}),
												title: "Code selections",
												children: (sn, dn) =>
													(0, u.createComponent)(B.$xbc, {
														selection: sn,
														style: {
															background: "var(--vscode-editor-background)",
														},
													}),
											});
										},
									}),
									null,
								),
								(0, d.insert)(
									Sn,
									(0, u.createComponent)(p.Show, {
										get when() {
											return ($e()?.data.selectedDocs?.length ?? 0) > 0;
										},
										get children() {
											return (0, u.createComponent)(z.$ecc, {
												class: "prompt-bar-selection-container",
												get isFocused() {
													return wi() === "docs";
												},
												get isRunning() {
													return ai() === "docs";
												},
												startRunning: () => Ft("docs"),
												stopRunning: () => Ft(null),
												get stopFocused() {
													return os();
												},
												get show() {
													return ($e()?.data.selectedDocs ?? []).length > 0;
												},
												containerRef: Fn,
												get each() {
													return (
														$e()?.data.selectedDocs?.filter((sn) => sn) ?? []
													);
												},
												title: "Docs",
												type: "doc",
												renderItemBorders: !0,
												collapseOthersOnAdd: !0,
												boxPropsFunc: (sn) => {
													const dn =
														ae.reactiveStorageService.applicationUserPersistentStorage.personalDocs.find(
															(An) => An.identifier === sn.docId,
														);
													return {
														title: sn.name,
														subTitle:
															dn && (dn.lastUploadedAt || dn.createdAt)
																? `Indexed ${(0, X.$F_b)(dn?.lastUploadedAt || dn?.createdAt || "")}`
																: void 0,
														icon: y.ThemeIcon.asClassName(b.$ak.book),
														onTitleClick() {
															ae.commandService.executeCommand(
																s.$QV,
																"features",
															);
														},
														alwaysShowToolbar: !0,
														onRemove() {
															sn.uuid && gt(sn.uuid);
														},
													};
												},
												children: (sn) => {
													if (sn != null)
														return (() => {
															const dn = ie();
															return (
																dn.style.setProperty("position", "relative"),
																(0, d.insert)(
																	dn,
																	(0, u.createComponent)(U.$Dbc, {
																		selection: sn,
																	}),
																),
																dn
															);
														})();
												},
											});
										},
									}),
									null,
								),
								(0, d.insert)(
									Sn,
									(0, u.createComponent)(p.Show, {
										get when() {
											return (
												(0, r.memo)(
													() =>
														!!ae.reactiveStorageService
															.applicationUserPersistentStorage
															.showAllCmdKContexts,
												)() && $e()
											);
										},
										children: (sn) =>
											(0, u.createComponent)(q.$Mdc, {
												get isFocused() {
													return wi() === "all-context-items-by-score";
												},
												get isRunning() {
													return ai() === "all-context-items-by-score";
												},
												startRunning: () => Ft("all-context-items-by-score"),
												stopRunning: () => Ft(null),
												get stopFocused() {
													return os();
												},
												containerRef: Fn,
												get contextSessionUuid() {
													return sn().contextSessionUuid;
												},
											}),
									}),
									null,
								),
								(0, d.insert)(
									nn,
									(0, u.createComponent)(p.Show, {
										get when() {
											return (0, r.memo)(() => !!Gt())() && $e();
										},
										children: (sn) =>
											(() => {
												const dn = ee(),
													An = dn.firstChild;
												return (
													An.addEventListener("click", (vn) => {
														Fe(), vn.stopPropagation();
													}),
													An.style.setProperty("padding", "0px 0.5rem"),
													An.style.setProperty("white-space", "pre-wrap"),
													An.style.setProperty("word-wrap", "break-word"),
													(0, d.insert)(An, () =>
														(0, A.$N7b)({
															req:
																sn().originalRequest !== void 0
																	? {
																			case: "originalRequest",
																			req: sn().originalRequest.current,
																		}
																	: {
																			case: "cmdKQueryHistory",
																			queryHistory: sn().queryHistory.current,
																		},
															previousStructuredTextsNewestFirst:
																sn().previousStructuredTextsNewestFirst,
														}),
													),
													(0, d.insert)(
														dn,
														(0, u.createComponent)(p.Show, {
															get when() {
																return (
																	(0, r.memo)(
																		() =>
																			!!(_i() || (!ze() && $e()?.chatResponse)),
																	)() &&
																	!(
																		!ze() &&
																		$e()?.chatResponse &&
																		qe().length > 0
																	)
																);
															},
															get fallback() {
																return (0, u.createComponent)(p.Show, {
																	get when() {
																		return (
																			_i() || (!ze() && $e()?.chatResponse)
																		);
																	},
																	get children() {
																		const vn = ie();
																		return (
																			vn.style.setProperty("height", "0.5rem"),
																			vn
																		);
																	},
																});
															},
															get children() {
																const vn = ie();
																return (
																	vn.style.setProperty(
																		"background-color",
																		"var(--vscode-input-foreground)",
																	),
																	vn.style.setProperty("height", "0.5px"),
																	vn.style.setProperty("margin", "0px 0.5rem"),
																	vn.style.setProperty(
																		"max-width",
																		"calc(100% - 1rem)",
																	),
																	vn.style.setProperty("width", "60px"),
																	vn.style.setProperty("opacity", "0.3"),
																	vn.style.setProperty(
																		"margin-bottom",
																		"0.5rem",
																	),
																	vn.style.setProperty("margin-top", "0.3rem"),
																	vn
																);
															},
														}),
														null,
													),
													(0, C.effect)(() =>
														(_i() || (!ze() && $e()?.chatResponse)
															? "0.5"
															: "1") != null
															? dn.style.setProperty(
																	"opacity",
																	_i() || (!ze() && $e()?.chatResponse)
																		? "0.5"
																		: "1",
																)
															: dn.style.removeProperty("opacity"),
													),
													dn
												);
											})(),
									}),
									Un,
								),
								(0, d.insert)(
									nn,
									(0, u.createComponent)(p.Show, {
										get when() {
											return (0, r.memo)(() => !ze())() && $e()?.chatResponse;
										},
										children: (sn) => [
											(() => {
												const dn = ee(),
													An = dn.firstChild;
												return (
													(0, d.insert)(
														dn,
														(0, u.createComponent)(p.Show, {
															get when() {
																return $e()?.inlineChatHistory;
															},
															children: (vn) =>
																(() => {
																	const Pn = ie();
																	return (
																		Pn.style.setProperty(
																			"padding",
																			"0.5rem 0.5rem",
																		),
																		Pn.style.setProperty("padding-top", "0rem"),
																		Pn.style.setProperty(
																			"white-space",
																			"pre-wrap",
																		),
																		Pn.style.setProperty(
																			"word-wrap",
																			"break-word",
																		),
																		Pn.style.setProperty(
																			"font-style",
																			"italic",
																		),
																		(0, d.insert)(
																			Pn,
																			() => vn().current.userMessage,
																		),
																		Pn
																	);
																})(),
														}),
														An,
													),
													An.style.setProperty("padding", "0 0.5rem"),
													An.style.setProperty("white-space", "normal"),
													(0, d.insert)(
														An,
														(0, u.createComponent)(D.$4$b, {
															get rawText() {
																return sn();
															},
															get finished() {
																return !ze();
															},
															codeBlockProps: { shouldRecompute: 1 },
														}),
													),
													(0, C.effect)(
														(vn) => {
															const Pn = qe().length > 0 ? "0.5" : "1",
																es = Gt() ? "0rem" : "0.5rem";
															return (
																Pn !== vn._v$11 &&
																	((vn._v$11 = Pn) != null
																		? dn.style.setProperty("opacity", Pn)
																		: dn.style.removeProperty("opacity")),
																es !== vn._v$12 &&
																	((vn._v$12 = es) != null
																		? An.style.setProperty("padding-bottom", es)
																		: An.style.removeProperty(
																				"padding-bottom",
																			)),
																vn
															);
														},
														{ _v$11: void 0, _v$12: void 0 },
													),
													dn
												);
											})(),
											(0, u.createComponent)(p.Show, {
												get when() {
													return qe().length > 0;
												},
												get children() {
													const dn = ie();
													return (
														dn.style.setProperty(
															"background-color",
															"var(--vscode-input-foreground)",
														),
														dn.style.setProperty("height", "0.5px"),
														dn.style.setProperty("margin", "0px 0.5rem"),
														dn.style.setProperty(
															"max-width",
															"calc(100% - 1rem)",
														),
														dn.style.setProperty("width", "60px"),
														dn.style.setProperty("opacity", "0.3"),
														dn.style.setProperty("margin-bottom", "0.5rem"),
														dn.style.setProperty("margin-top", "0.3rem"),
														dn
													);
												},
											}),
										],
									}),
									Un,
								),
								Un.style.setProperty("display", "flex"),
								(0, d.insert)(as, zn),
								(0, d.insert)(
									Un,
									(0, u.createComponent)(p.Show, {
										get when() {
											return (0, r.memo)(() => !!ze())() && $e()?.chatResponse;
										},
										children: (sn) =>
											(() => {
												const dn = ie();
												return (
													dn.style.setProperty("padding", "0 0.5rem"),
													dn.style.setProperty("padding-top", "0.5rem"),
													dn.style.setProperty("white-space", "normal"),
													(0, d.insert)(
														dn,
														(0, u.createComponent)(D.$4$b, {
															get rawText() {
																return sn();
															},
															get finished() {
																return !ze();
															},
															codeBlockProps: { shouldRecompute: 1 },
														}),
													),
													dn
												);
											})(),
									}),
									Qn,
								),
								(0, d.insert)(
									Un,
									(0, u.createComponent)(p.Show, {
										when: ts,
										get children() {
											return (0, u.createComponent)(n.$Gdc, {
												get id() {
													return oe.id;
												},
												get multiFileEditingState() {
													return ci();
												},
												setMultiFileEditingState: ri,
												get potentialFilesToEdit() {
													return $i();
												},
												get potentialFilesToEditCurrentIndex() {
													return tt();
												},
												setPotentialFilesToEditCurrentIndex: at,
												get selectedFilesToEdit() {
													return pi();
												},
												setSelectedFilesToEdit: Li,
											});
										},
									}),
									Qn,
								),
								Qn.style.setProperty("flex-shrink", "0"),
								Qn.style.setProperty("padding-top", "1px"),
								(0, d.insert)(
									Qn,
									(0, u.createComponent)(a.$tdc, {
										get id() {
											return oe.id;
										},
										get generating() {
											return ze();
										},
										get hideModelToggle() {
											return (0, r.memo)(() => !!ve())() && ns().length > te;
										},
										onModelToggleClose: () => {
											Le();
										},
										get onOverwriteModelSelect() {
											return ve()
												? (sn) =>
														ns()[0].modelDetails.modelName === sn
															? !1
															: (ae.reactiveStorageService.setApplicationUserPersistentStorage(
																	"cmdKGenerationConfigs",
																	(0, o.produce)((An) => {
																		if (An) {
																			const vn = ae.aiService.getModelDetails({
																				specificModelField: "cmd-k",
																			});
																			An.unshift({
																				generationUUID: (0, $.$9g)(),
																				modelDetails: new f.$Zs({
																					...vn,
																					modelName: sn,
																				}),
																			});
																		}
																	}),
																),
																ae.commandService.executeCommand(
																	"editor.action.resizePromptBar",
																),
																!0)
												: void 0;
										},
										get fastModeEnabled() {
											return gi();
										},
										get hasStackedInputBox() {
											return _i();
										},
										get statusUpdateMessages() {
											return $e()?.statusUpdate ?? [];
										},
										onSubmit: Oi,
										onFixErrors: () => {
											const sn = pe.nonPersistentStorage.promptBars.find(
												(dn) => dn.id === oe.id,
											);
											sn !== void 0 &&
												((sn.fixingErrorCounter = 0),
												pe.setNonPersistentStorage(
													"promptBars",
													(dn) => dn.id === sn.id,
													"fixingErrorCounter",
													0,
												),
												Oi({ fixSubmit: !0 }));
										},
										rejectCurrentDiff: () => di({ removeFollowupToo: !0 }),
										removePromptBar: Ye,
										acceptCurrentDiff: Kt,
										cancelCurrentDiff: ti,
										get isEdit() {
											return Ke();
										},
										get plainText() {
											return qe();
										},
										get containerWidth() {
											return $n();
										},
										get isFocused() {
											return Be();
										},
										readonly: !1,
										get areErrorsVisible() {
											return It();
										},
										get queuePositionResponse() {
											return ii();
										},
										get multiFileEditingState() {
											return ci();
										},
										get isMultiFileEditing() {
											return Wi();
										},
										onMultiFileEditSubmit: Gi,
										onImplementInBackgroundSubmit: qi,
										toggleContextSummaryVisible: Nn,
										setTriggerFn: (sn) => {
											ni = sn;
										},
										buttonHint: `${Y.$m ? "\u2318\u2325/" : "ctrl+alt+/"} open menu`,
									}),
								),
								(0, d.insert)(
									nn,
									(0, u.createComponent)(p.Show, {
										when: ts,
										get children() {
											return (0, u.createComponent)(h.$Edc, {
												get id() {
													return oe.id;
												},
												get multiFileEditChainOfThought() {
													return Di();
												},
											});
										},
									}),
									null,
								),
								(0, d.insert)(
									nn,
									(0, u.createComponent)(p.Show, {
										get when() {
											return $e()?.errorDetails;
										},
										children: (sn) =>
											(() => {
												const dn = ie();
												return (
													dn.style.setProperty("padding-bottom", "16px"),
													(0, d.insert)(
														dn,
														(0, u.createComponent)(V.$0ac, {
															get generationUUID() {
																return sn().generationUUID;
															},
															get error() {
																return sn().error;
															},
															get message() {
																return sn().message;
															},
															get rerun() {
																return sn().rerun;
															},
														}),
													),
													dn
												);
											})(),
									}),
									null,
								),
								(0, C.effect)(
									(sn) => {
										const dn = {
												"padding-top": ve() && ns().length > te ? "0px" : "4px",
												"box-sizing": "border-box",
												outline: "none",
												"flex-direction": "row",
												display: "flex",
												"z-index": 100,
												width: "100%",
												...($e()?.top
													? { top: `${$e()?.top}px`, position: "absolute" }
													: {}),
											},
											An = `${cn()}px`,
											vn = `${2 + yn()}px`,
											Pn =
												"1px solid " +
												(Be()
													? "var(--vscode-commandCenter-activeBorder)"
													: "var(--vscode-commandCenter-inactiveBorder)"),
											es = y.ThemeIcon.asClassName(b.$ak.x),
											ls = _i() ? "column" : "row-reverse",
											Jn = _i() ? void 0 : "center",
											ss = Wi() ? 0 : 1,
											us = _i() ? void 0 : "3px",
											Rs = Wi() ? 1 : void 0;
										return (
											(sn._v$ = (0, w.style)(zi, dn, sn._v$)),
											An !== sn._v$2 &&
												((sn._v$2 = An) != null
													? Zi.style.setProperty("width", An)
													: Zi.style.removeProperty("width")),
											vn !== sn._v$3 &&
												((sn._v$3 = vn) != null
													? nn.style.setProperty("margin-right", vn)
													: nn.style.removeProperty("margin-right")),
											Pn !== sn._v$4 &&
												((sn._v$4 = Pn) != null
													? nn.style.setProperty("border", Pn)
													: nn.style.removeProperty("border")),
											es !== sn._v$5 && (0, i.className)(xn, (sn._v$5 = es)),
											ls !== sn._v$6 &&
												((sn._v$6 = ls) != null
													? Un.style.setProperty("flex-direction", ls)
													: Un.style.removeProperty("flex-direction")),
											Jn !== sn._v$7 &&
												((sn._v$7 = Jn) != null
													? Un.style.setProperty("align-items", Jn)
													: Un.style.removeProperty("align-items")),
											ss !== sn._v$8 &&
												((sn._v$8 = ss) != null
													? as.style.setProperty("flex-grow", ss)
													: as.style.removeProperty("flex-grow")),
											us !== sn._v$9 &&
												((sn._v$9 = us) != null
													? as.style.setProperty("padding-bottom", us)
													: as.style.removeProperty("padding-bottom")),
											Rs !== sn._v$10 &&
												((sn._v$10 = Rs) != null
													? Qn.style.setProperty("flex-grow", Rs)
													: Qn.style.removeProperty("flex-grow")),
											sn
										);
									},
									{
										_v$: void 0,
										_v$2: void 0,
										_v$3: void 0,
										_v$4: void 0,
										_v$5: void 0,
										_v$6: void 0,
										_v$7: void 0,
										_v$8: void 0,
										_v$9: void 0,
										_v$10: void 0,
									},
								),
								Fi
							);
						},
					});
				}
				const le = async (oe) => {
					let ae = oe.promptBarStore.nonPersistentStorage.promptBars.find(
						(ye) => ye.id === oe.id,
					);
					if (ae === void 0) return;
					oe.setGenerating(!0),
						oe.setMultiFileEditingState(
							T.MultiFileEditingState.FindingLocations,
						);
					const pe = oe.inProgressMultiFileEditGenerationUUID(),
						$e = oe.plainText();
					for (let ye = 0; ye < 5; ye++) {
						const ue = await oe.vsContext.cmdKService2.getFilesForMultiFileEdit(
							{ promptBarId: ae.id, topK: T.$l8b, query: $e },
						);
						if (pe && !oe.canceledMultiFileEditGenerationUUIDs().includes(pe)) {
							if (ue.length > 0) {
								oe.setPotentialFilesToEdit(
									ue.map((fe) => fe.relativeWorkspacePath),
								),
									oe.setSelectedFilesToEdit(
										ue
											.filter((fe) => fe.userAdded)
											.map((fe) => fe.relativeWorkspacePath),
									),
									oe.setPotentialFilesToEditCurrentIndex(
										oe.selectedFilesToEdit().length,
									),
									oe.setMultiFileEditingState(
										T.MultiFileEditingState.WaitingForUserInput,
									);
								return;
							}
						} else return;
					}
					oe.onSubmit({ editMode: T.EditMode.SingleFile });
				};
			},
		)
