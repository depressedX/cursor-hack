import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/solid.js';
import '../../../../../external/solid/web.js';
import '../../../../base/browser/dom.js';
import '../../../../editor/common/languages/language.js';
import '../../../../editor/common/services/model.js';
import '../../../../platform/clipboard/common/clipboardService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../services/ai/browser/aiService.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/cursorAuth/browser/authenticationService.js';
import '../../../services/aiSettings/browser/aiSettingsService.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/commands/common/commands.js';
import '../../../services/workspaces/common/workspaceEditing.js';
import '../../../services/host/browser/host.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../services/ai/browser/toolformerService.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../services/magicLink/browser/magicLinkService.js';
import '../../../../platform/url/common/url.js';
import '../../../services/ai/browser/repositoryService.js';
import '../../../../editor/browser/services/inlineDiffService.js';
import '../../../../editor/browser/services/simpleInlineDiffService.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../services/ai/browser/cursorCredsService.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../../../services/ai/browser/rgSearch.js';
import '../../../services/ai/browser/aiMiscServices.js';
import '../../../../editor/common/services/markerDecorations.js';
import '../../../services/ai/browser/modalService.js';
import '../../../services/ai/browser/modalService.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/reactivestorage/browser/reducerService.js';
import '../../aitasks/browser/agentDebuggerService.js';
import '../../../services/search/common/search.js';
import '../../../services/search/common/queryBuilder.js';
import '../../search/browser/anythingQuickAccess.js';
import '../../../services/ai/common/dataScrubbingService.js';
import '../../search/browser/symbolsQuickAccess.js';
import '../../../browser/parts/editor/editorQuickAccess.js';
import '../../../../platform/quickinput/browser/quickAccess.js';
import '../../../services/textfile/common/textfiles.js';
import '../../../../editor/contrib/documentSymbols/browser/outlineModel.js';
import '../../terminal/browser/terminal.js';
import '../../../services/ai/browser/aiContextService.js';
import '../../../../platform/markers/common/markers.js';
import '../../../../platform/undoRedo/common/undoRedo.js';
import '../../aiInterfaceAgent/browser/interfaceAgentService.js';
import '../../../services/aiErrors/browser/aiErrorService.js';
import '../../../services/ai/common/simpleTestService.js';
import '../../aichat/browser/aichat.js';
import '../../../services/aiTasks/browser/aiTaskServiceInterface.js';
import '../../../services/views/common/viewsService.js';
import '../../../services/ai/browser/fastContextService.js';
import '../../../services/ai/browser/fastEditService.js';
import '../../../../platform/workspaces/common/workspaces.js';
import '../../../../platform/label/common/label.js';
import '../../../services/remote/common/remoteAgentService.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../services/aiCmdK/browser/cmdKService.js';
import '../../../services/aiCmdK/browser/cmdKService2.js';
import '../../../services/ai/browser/aiProjectService.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/aiContext/browser/aiContext.js';
import '../../../../platform/product/common/productService.js';
import '../../../services/ai/browser/gitContextService.js';
import '../../aichat/browser/chatDataService.js';
import '../../aiInterpreter/browser/interpreterService.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/environment/common/environment.js';
import '../../../services/ai/browser/metricsService.js';
import '../../../services/ai/browser/diffingService.js';
import '../../../../base/browser/window.js';
import '../../../../base/browser/webConstants.js';
import '../../aiApplyToFileActionsService/browser/aiApplyToFileActionsService.js';
import '../../aiFeatureStatusService/browser/aiFeatureStatusService.js';
import '../../aiDiff/browser/tokenStreamingDiffService.js';
import '../../aiWebCmdK/browser/aiWebCmdKService.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../../../platform/hover/browser/hover.js';
import '../../aiReader/browser/aiReader.js';
import '../../../../platform/cursor/browser/aiEverythingProviderService.js';
import '../../../services/ai/browser/fastSemSearchService.js';
import '../../../../platform/tooltipService/common/tooltipService.js';
import '../../aiCommitNotes/browser/commitNotesService.js';
import '../../../services/workspaces/browser/sourceFilesService.js';
import '../../../../platform/layout/browser/layoutService.js';
import '../../../services/lexical/browser/lexicalReducerService.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../aiHallucinatedFunctions/browser/hallucinatedFunctionsDataService.js';
import '../../contextGraph/browser/gitGraphService.js';
import '../../scm/common/scm.js';
import '../../recentFilesTrackerService/browser/recentFilesTrackerService.js';
import '../../../services/extensions/common/extensions.js';
import '../../../services/panecomposite/browser/panecomposite.js';
import '../../aicontext/browser/aicontextService.js';
import '../../aiContextBank/browser/contextBankService.js';
import '../../composer/browser/composer.js';
import '../../composer/browser/composerDataService.js';
import '../../../services/statusbar/browser/statusbar.js';
import '../../../../editor/common/services/languageFeatures.js';
import '../../../services/selectedContext/browser/selectedContext.js';
import '../../notepad/browser/notepad.js';
import '../../ui/browser/utils.js';
import '../../terminal/browser/terminalExecutionService.js';
import '../../semSearch/browser/semSearchService.js';
import '../../composer/browser/composerViews.js';
import '../../../services/decorations/common/decorations.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../composer/browser/composerUtilsService.js';
import '../../../services/editor/common/customEditorLabelService.js';
import '../../bugbot/browser/bugbot.js';
import '../../bugbot/browser/bugbotDataService.js';
import '../../aiServerConfigService/browser/aiServerConfigService.js';
import '../../../../editor/common/services/editorWorker.js';
import '../../prettyDialog/browser/prettyDialog.js';
import '../../bugbotLinter/browser/bugBotLinterService.js';
define(
			de[36],
			he([
				1, 0, 2, 13, 2, 7, 61, 67, 121, 10, 22, 5, 39, 41, 25, 118, 18, 232,
				315, 45, 31, 449, 87, 21, 35, 1054, 65, 241, 465, 226, 383, 545, 42,
				477, 32, 119, 627, 137, 496, 445, 445, 40, 669, 1929, 186, 361, 721,
				356, 827, 1015, 1636, 85, 204, 107, 1347, 90, 155, 3941, 401, 697, 418,
				516, 89, 400, 480, 256, 73, 143, 49, 479, 720, 1932, 66, 471, 62, 359,
				337, 1230, 8, 113, 619, 1010, 75, 740, 852, 287, 1285, 1346, 125, 72,
				788, 280, 3643, 308, 1703, 632, 180, 1298, 57, 1706, 715, 258, 560, 53,
				142, 1964, 1053, 219, 209, 166, 69, 271, 467, 476, 617, 993, 506, 472,
				52, 426, 399, 976, 977, 1009, 200, 559, 850,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
				Y,
				ie,
				ne,
				ee,
				_,
				te,
				Q,
				Z,
				se,
				re,
				le,
				oe,
				ae,
				pe,
				$e,
				ye,
				ue,
				fe,
				me,
				ve,
				ge,
				be,
				Ce,
				Le,
				Fe,
				Oe,
				xe,
				He,
				Ke,
				Je,
				Te,
				Ee,
				Ie,
				Be,
				Se,
				ke,
				Ue,
				qe,
				Ae,
				Me,
				De,
				Re,
				je,
				Ve,
				Ze,
				et,
				rt,
				ft,
				bt,
				nt,
				lt,
				ct,
				gt,
				ht,
				Rt,
				Nt,
				jt,
				ti,
				kt,
				hi,
				Kt,
				di,
				Ye,
				ze,
				Xe,
				It,
				Lt,
				xt,
				Vt,
				Bt,
				Gt,
				Mt,
				Ut,
				ei,
				mi,
				ii,
				Dt,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ldc = e.$kdc = e.$jdc = void 0),
					(e.$mdc = ci),
					(e.$ndc = ri),
					(e.$odc = $i),
					(e.$pdc = Wt),
					(e.$qdc = tt),
					(E = mt(E)),
					w.DelegatedEvents.clear();
				const Jt = [
					"queryBuilder",
					"symbolsQuickAccessProvider",
					"editorQuickAccessProvider",
					"quickAccessController",
					"anythingQuickAccessProvider",
				];
				function si(at) {
					return !Jt.includes(at);
				}
				const Zt = {
					aiService: g.$Nfc,
					contextMenuService: me.$Xxb,
					inlineDiffService: L.$27b,
					simpleInlineDiffService: D.$z8b,
					aiSettingsService: f.$S6b,
					clipboardService: m.$Vxb,
					configurationService: r.$gj,
					cursorAuthenticationService: o.$x6b,
					editorService: p.$IY,
					editorGroupService: Ce.$EY,
					dialogService: bt.$GO,
					fileService: u.$ll,
					aiFeatureStatusService: ke.$H7b,
					webCmdKService: qe.$Hcc,
					workspacesService: ye.$cRb,
					instantiationService: a.$Li,
					aiContextSessionService: Le.$B7b,
					composerService: ti.IComposerService,
					composerDataService: kt.IComposerDataService,
					bugBotLinterService: Dt.$idc,
					composerViewsService: Lt.IComposerViewsService,
					composerUtilsService: Bt.IComposerUtilsService,
					keybindingService: h.$uZ,
					languageService: C.$nM,
					languageFeaturesService: Kt.$k3,
					cmdKService: ve.$J7b,
					editorWorkerService: mi.$Cxb,
					cmdKService2: ge.$d0b,
					modelService: d.$QO,
					textModelService: M.$MO,
					openerService: c.$7rb,
					textResourceConfigurationService: Ae.$XO,
					themeService: v.$iP,
					workspaceContextService: n.$Vi,
					tokenStreamingDiffService: Ue.$Fcc,
					commandService: s.$ek,
					workspaceEditingService: l.$mRb,
					hostService: y.$asb,
					storageService: $.$lq,
					toolformerService: S.$T8b,
					reactiveStorageService: b.$0zb,
					agentDebuggerService: q.$b9b,
					hallucinatedFunctionsDataService: nt.$Tcc,
					reducerService: H.$Z6b,
					repositoryService: k.$J6b,
					textFileService: ie.$kZ,
					codeEditorService: I.$dtb,
					magicLinkService: T.$q8b,
					urlService: P.$2rb,
					cursorCredsService: N.$i6b,
					applyToFileActionsService: Se.$R0b,
					metricsService: Te.$wcc,
					telemetryService: A.$km,
					chatDataService: xe.$kgc,
					extensionGalleryService: R.$Ep,
					extensionManagementService: R.$Hp,
					interpreterService: He.$vcc,
					aiTaskService: oe.$a9b,
					keywordSearchService: O.$O6b,
					markerDecorationsService: U.$bub,
					markerService: te.$aM,
					aiDocsService: F.$48b,
					indexPopupService: z.$78b,
					notificationService: x.$4N,
					cppService: B.$jfc,
					searchService: V.$p7,
					serverConfigService: ei.$fdc,
					labelService: ue.$3N,
					outlineService: ne.$9Db,
					contextViewService: me.$Wxb,
					terminalConfigurationService: ee.$jIb,
					fastEditService: $e.$$9b,
					dataScrubbingService: J.$zIb,
					statusbarService: hi.$d6b,
					terminalService: ee.$iIb,
					aiContextservice: _.$Y9b,
					simpleTestService: re.$19b,
					undoRedoService: Q.$GN,
					interfaceAgentService: Z.$29b,
					aiErrorService: se.$W6b,
					aiChatService: le.$qgc,
					viewsService: ae.$HMb,
					fastContextService: pe.$26b,
					remoteAgentService: fe.$$m,
					hoverService: Me.$Uyb,
					aiProjectService: be.$tcc,
					productService: Fe.$Bk,
					aiReviewService: B.$ofc,
					gitContextService: Oe.$$Db,
					contextKeyService: Ke.$6j,
					environmentService: Je.$Ti,
					diffingService: Ee.$ycc,
					aiPreviewService: B.$nfc,
					aiReaderService: De.$Jcc,
					everythingProviderService: Re.$3Db,
					fastSemSearchService: je.$Kcc,
					semSearchService: It.$H9b,
					tooltipService: Ve.$5X,
					cursorPredictionService: B.$kfc,
					commitNotesService: Ze.$f0b,
					sourceFilesService: et.$J9b,
					importPredictionService: B.$lfc,
					lexicalReducerService: ft.$p_b,
					layoutService: rt.$jEb,
					aiContextService: Nt.$Vcc,
					gitGraphService: lt.$cEb,
					contextBankService: jt.$Wcc,
					scmService: ct.$c7,
					queryBuilder: (at) => at.createInstance(G.$M8),
					symbolsQuickAccessProvider: (at) => at.createInstance(W.$Ifc),
					editorQuickAccessProvider: (at) => at.createInstance(X.$uVb),
					anythingQuickAccessProvider: (at) => at.createInstance(K.$S9b),
					quickAccessController: (at) => at.createInstance(Y.$T9b),
					backgroundCmdKService: B.$qfc,
					recentFilesTrackerService: gt.$lcc,
					extensionService: ht.$q2,
					paneCompositeService: Rt.$6Sb,
					notepadDataService: Ye.$y9b,
					notepadService: Ye.$z9b,
					selectedContextService: di.$Q9b,
					terminalExecutionService: Xe.$Ycc,
					quickInputService2: B.$rfc,
					decorationsService: xt.$sPb,
					lifecycleService: Vt.$n6,
					customEditorLabelService: Gt.$QIb,
					bugbotService: Mt.$adc,
					bugbotDataService: Ut.$ddc,
					analyticsService: B.$ifc,
					prettyDialogService: ii.$hdc,
				};
				(e.$jdc = (0, i.createContext)()),
					(e.$kdc = (0, i.createContext)()),
					(e.$ldc = (0, i.createContext)());
				function ci() {
					return (0, i.useContext)(e.$ldc);
				}
				function ri(at, pi, Li, Di) {
					const Ui = Ie.$Bfb.document.createElement("div");
					return (
						(Ui.style.height = "100%"),
						(Ui.style.width = "100%"),
						Di?.additionalStyles &&
							Object.assign(Ui.style, Di.additionalStyles),
						Li.invokeFunction((Wi) => {
							const Gi = Di?.restrictToServices ?? Object.keys(Zt),
								qi = (0, w.render)(
									() =>
										(0, i.catchError)(
											() =>
												(0, t.createComponent)(e.$kdc.Provider, {
													get value() {
														return { close: Di?.onClose };
													},
													get children() {
														return (0, t.createComponent)(e.$jdc.Provider, {
															get value() {
																return {
																	get window() {
																		return E.getWindow(pi);
																	},
																	get portalElement() {
																		if ((0, ze.$Kac)()) {
																			const Vi = E.$Ogb();
																			return (
																				Be.$ujb.has(Vi) ||
																					Be.$ujb.set(Vi, (0, Be.$vjb)()),
																				Be.$ujb.get(Vi) ?? Vi.document.body
																			);
																		}
																		const li = E.getWindow(pi);
																		return Be.$ujb.get(li) ?? li.document.body;
																	},
																	...Gi.map((Ai) =>
																		si(Ai)
																			? { [Ai]: Wi.get(Zt[Ai]) }
																			: { [Ai]: Zt[Ai](Wi.get(a.$Li)) },
																	).reduce((Ai, li) => ({ ...Ai, ...li }), {}),
																};
															},
															get children() {
																return at();
															},
														});
													},
												}),
											(Ai) => {
												console.error(
													"ERROR WHEN RENDERING SOLID COMPONENT",
													Ai,
												);
											},
										),
									Ui,
								);
							return (
								pi.appendChild(Ui),
								{
									dispose: () => {
										qi(), Ui.remove();
									},
									focus: () => {
										Ui.focus();
									},
								}
							);
						})
					);
				}
				function $i() {
					return (0, i.useContext)(e.$jdc);
				}
				function Wt() {
					return (0, i.useContext)(e.$jdc);
				}
				function tt() {
					const at = (0, i.useContext)(e.$kdc)?.close;
					return at ? { close: at } : { close: () => {} };
				}
			},
		),
		