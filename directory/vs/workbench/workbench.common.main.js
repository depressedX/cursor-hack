import '../../require.js';
import '../../exports.js';
import '../platform/instantiation/common/extensions.js';
import '../platform/extensionManagement/common/extensionGalleryService.js';
import '../platform/extensionManagement/common/extensionEnablementService.js';
import '../platform/extensionManagement/common/extensionManagement.js';
import '../platform/contextview/browser/contextViewService.js';
import '../platform/contextview/browser/contextView.js';
import '../platform/list/browser/listService.js';
import '../editor/common/services/editorWorker.js';
import './contrib/codeEditor/browser/workbenchEditorWorkerService.js';
import '../editor/common/services/markerDecorationsService.js';
import '../editor/common/services/markerDecorations.js';
import '../platform/markers/common/markers.js';
import '../platform/markers/common/markerService.js';
import '../platform/contextkey/browser/contextKeyService.js';
import '../platform/contextkey/common/contextkey.js';
import '../editor/common/services/textResourceConfiguration.js';
import '../editor/common/services/textResourceConfigurationService.js';
import '../platform/download/common/download.js';
import '../platform/download/common/downloadService.js';
import '../editor/browser/services/openerService.js';
import '../platform/opener/common/opener.js';
import '../platform/userDataSync/common/ignoredExtensions.js';
import '../platform/extensionManagement/common/extensionStorage.js';
import '../platform/userDataSync/common/userDataSync.js';
import '../platform/userDataSync/common/userDataSyncLog.js';
import '../platform/reactivestorage/browser/reactiveStorageServiceImpl.js';
import '../platform/reactivestorage/browser/reactiveStorageService.js';
import '../editor/editor.all.js';
import './api/browser/extensionHost.contribution.js';
import './browser/workbench.contribution.js';
import './browser/actions/textInputActions.js';
import './browser/actions/developerActions.js';
import './browser/actions/helpActions.js';
import './browser/actions/layoutActions.js';
import './browser/actions/listCommands.js';
import './browser/actions/navigationActions.js';
import './browser/actions/windowActions.js';
import './browser/actions/workspaceActions.js';
import './browser/actions/workspaceCommands.js';
import './browser/actions/quickAccessActions.js';
import './browser/actions/widgetNavigationCommands.js';
import './services/actions/common/menusExtensionPoint.js';
import './api/common/configurationExtensionPoint.js';
import './api/browser/viewsExtensionPoint.js';
import './browser/parts/editor/editor.contribution.js';
import './browser/parts/editor/editorParts.js';
import './browser/parts/paneCompositePartService.js';
import './browser/parts/banner/bannerPart.js';
import './browser/parts/statusbar/statusbarPart.js';
import '../platform/actions/common/actions.contribution.js';
import '../platform/undoRedo/common/undoRedoService.js';
import './services/workspaces/common/editSessionIdentityService.js';
import './services/workspaces/common/canonicalUriService.js';
import './services/extensions/browser/extensionUrlHandler.js';
import './services/keybinding/common/keybindingEditing.js';
import './services/decorations/browser/decorationsService.js';
import './services/dialogs/common/dialogService.js';
import './services/progress/browser/progressService.js';
import './services/editor/browser/codeEditorService.js';
import './services/preferences/browser/preferencesService.js';
import './services/configuration/common/jsonEditingService.js';
import './services/textmodelResolver/common/textModelResolverService.js';
import './services/editor/browser/editorService.js';
import './services/editor/browser/editorResolverService.js';
import './services/aiEmbeddingVector/common/aiEmbeddingVectorService.js';
import './services/aiRelatedInformation/common/aiRelatedInformationService.js';
import './services/history/browser/historyService.js';
import './services/activity/browser/activityService.js';
import './services/keybinding/browser/keybindingService.js';
import './services/untitled/common/untitledTextEditorService.js';
import './services/textresourceProperties/common/textResourcePropertiesService.js';
import './services/textfile/common/textEditorService.js';
import './services/language/common/languageService.js';
import './services/model/common/modelService.js';
import './services/notebook/common/notebookDocumentService.js';
import './services/commands/common/commandService.js';
import './services/themes/browser/workbenchThemeService.js';
import './services/label/common/labelService.js';
import './services/extensions/common/extensionManifestPropertiesService.js';
import './services/extensionManagement/browser/extensionEnablementService.js';
import './services/extensionManagement/browser/builtinExtensionsScannerService.js';
import './services/extensionRecommendations/common/extensionIgnoredRecommendationsService.js';
import './services/extensionRecommendations/common/workspaceExtensionsConfig.js';
import './services/extensionManagement/common/extensionFeaturesManagemetService.js';
import './services/notification/common/notificationService.js';
import './services/userDataSync/common/userDataSyncUtil.js';
import './services/userDataProfile/browser/userDataProfileImportExportService.js';
import './services/userDataProfile/browser/userDataProfileManagement.js';
import './services/userDataProfile/common/remoteUserDataProfiles.js';
import './services/remote/common/remoteExplorerService.js';
import './services/remote/common/remoteExtensionsScanner.js';
import './services/terminal/common/embedderTerminalService.js';
import './services/workingCopy/common/workingCopyService.js';
import './services/workingCopy/common/workingCopyFileService.js';
import './services/workingCopy/common/workingCopyEditorService.js';
import './services/filesConfiguration/common/filesConfigurationService.js';
import './services/views/browser/viewDescriptorService.js';
import './services/views/browser/viewsService.js';
import './services/quickinput/browser/quickInputService.js';
import './services/userDataSync/browser/userDataSyncWorkbenchService.js';
import './services/authentication/browser/authenticationService.js';
import './services/authentication/browser/authenticationExtensionsService.js';
import './services/authentication/browser/authenticationUsageService.js';
import './services/authentication/browser/authenticationAccessService.js';
import '../editor/browser/services/hoverService/hoverService.js';
import './services/assignment/common/assignmentService.js';
import './services/outline/browser/outlineService.js';
import './services/languageDetection/browser/languageDetectionWorkerServiceImpl.js';
import '../editor/common/services/languageFeaturesService.js';
import '../editor/browser/services/inlineDiffService.js';
import '../editor/browser/services/simpleInlineDiffService.js';
import '../editor/common/services/semanticTokensStylingService.js';
import '../editor/common/services/treeViewsDndService.js';
import './services/textMate/browser/textMateTokenizationFeature.contribution.js';
import './services/ai/browser/metricsService.js';
import './services/ai/browser/aiUtilsService.js';
import './services/ai/browser/aiService.js';
import './services/ai/browser/toolformerService.js';
import './services/shadowWorkspace/browser/shadowWorkspace.contribution.js';
import './services/ai/browser/cursorProMarketingService.js';
import './services/lexical/browser/lexicalReducer.contribution.js';
import './contrib/composer/browser/composer.contribution.js';
import './contrib/prettyDialog/browser/prettyDialog.contribution.js';
import './contrib/analytics/browser/analytics.contribution.js';
import './contrib/bugbot/browser/bugbot.contribution.js';
import './services/selectedContext/browser/selectedContext.contribution.js';
import './contrib/notepad/browser/notepad.contribution.js';
import './contrib/bugbotLinter/browser/bugBotLinter.contribution.js';
import './services/aiTasks/browser/aiTaskService.js';
import './services/ai/browser/onboardingService.js';
import './services/ai/browser/aiMiscServices.js';
import './services/ai/browser/symbolContextService.js';
import './services/aiCmdK/browser/cmdKService.js';
import './services/aiCmdK/browser/cmdKService2.js';
import './services/ai/browser/modalService.js';
import './services/js/browser/jsService.js';
import './contrib/aitasks/browser/agentDebuggerService.js';
import './services/ai/common/simpleTestService.js';
import './services/treeSitter/browser/treeSitterTokenizationFeature.contribution.js';
import './services/userActivity/common/userActivityService.js';
import './services/userActivity/browser/userActivityBrowser.js';
import './services/ai/common/toolformerHandlerRegistryService.js';
import './services/editor/browser/editorPaneService.js';
import './services/editor/common/customEditorLabelService.js';
import './contrib/telemetry/browser/telemetry.contribution.js';
import './contrib/ui/browser/ui.contribution.js';
import './contrib/preferences/browser/preferences.contribution.js';
import './contrib/preferences/browser/keybindingsEditorContribution.js';
import './contrib/preferences/browser/preferencesSearch.js';
import './contrib/performance/browser/performance.contribution.js';
import './contrib/contextmenu/browser/contextmenu.contribution.js';
import './contrib/notebook/browser/notebook.contribution.js';
import './contrib/speech/browser/speech.contribution.js';
import './contrib/chat/browser/chat.contribution.js';
import './contrib/inlineChat/browser/inlineChat.contribution.js';
import './contrib/interactive/browser/interactive.contribution.js';
import './contrib/replNotebook/browser/repl.contribution.js';
import './contrib/testing/browser/testing.contribution.js';
import './contrib/logs/common/logs.contribution.js';
import './contrib/quickaccess/browser/quickAccess.contribution.js';
import './contrib/files/browser/explorerViewlet.js';
import './contrib/files/browser/fileActions.contribution.js';
import './contrib/files/browser/files.contribution.js';
import './contrib/bulkEdit/browser/bulkEditService.js';
import './contrib/bulkEdit/browser/preview/bulkEdit.contribution.js';
import './contrib/search/browser/search.contribution.js';
import './contrib/search/browser/searchView.js';
import './contrib/searchEditor/browser/searchEditor.contribution.js';
import './contrib/sash/browser/sash.contribution.js';
import './contrib/scm/browser/scm.contribution.js';
import './contrib/debug/browser/debug.contribution.js';
import './contrib/debug/browser/debugEditorContribution.js';
import './contrib/debug/browser/breakpointEditorContribution.js';
import './contrib/debug/browser/callStackEditorContribution.js';
import './contrib/debug/browser/repl.js';
import './contrib/debug/browser/debugViewlet.js';
import './contrib/markers/browser/markers.contribution.js';
import './contrib/mergeEditor/browser/mergeEditor.contribution.js';
import './contrib/multiDiffEditor/browser/multiDiffEditor.contribution.js';
import './contrib/mappedEdits/common/mappedEdits.contribution.js';
import './contrib/commands/common/commands.contribution.js';
import './contrib/comments/browser/comments.contribution.js';
import './contrib/url/browser/url.contribution.js';
import './contrib/webview/browser/webview.contribution.js';
import './contrib/webviewPanel/browser/webviewPanel.contribution.js';
import './contrib/webviewView/browser/webviewView.contribution.js';
import './contrib/customEditor/browser/customEditor.contribution.js';
import './contrib/externalUriOpener/common/externalUriOpener.contribution.js';
import './contrib/extensions/browser/extensions.contribution.js';
import './contrib/extensions/browser/extensionsViewlet.js';
import './contrib/output/common/outputChannelModelService.js';
import './contrib/output/browser/output.contribution.js';
import './contrib/output/browser/outputView.js';
import './contrib/terminal/terminal.all.js';
import './contrib/externalTerminal/browser/externalTerminal.contribution.js';
import './contrib/relauncher/browser/relauncher.contribution.js';
import './contrib/tasks/browser/task.contribution.js';
import './contrib/remote/common/remote.contribution.js';
import './contrib/remote/browser/remote.contribution.js';
import './contrib/emmet/browser/emmet.contribution.js';
import './contrib/codeEditor/browser/codeEditor.contribution.js';
import './contrib/keybindings/browser/keybindings.contribution.js';
import './contrib/snippets/browser/snippets.contribution.js';
import './contrib/format/browser/format.contribution.js';
import './contrib/folding/browser/folding.contribution.js';
import './contrib/limitIndicator/browser/limitIndicator.contribution.js';
import './contrib/inlayHints/browser/inlayHintsAccessibilty.js';
import './contrib/themes/browser/themes.contribution.js';
import './contrib/update/browser/update.contribution.js';
import './contrib/surveys/browser/nps.contribution.js';
import './contrib/surveys/browser/languageSurveys.contribution.js';
import './contrib/welcomeWalkthrough/browser/walkThrough.contribution.js';
import './contrib/welcomeViews/common/viewsWelcome.contribution.js';
import './contrib/callHierarchy/browser/callHierarchy.contribution.js';
import './contrib/typeHierarchy/browser/typeHierarchy.contribution.js';
import './contrib/codeEditor/browser/outline/documentSymbolsOutline.js';
import './contrib/outline/browser/outline.contribution.js';
import './contrib/aiReactiveContextKeys/browser/aiReactiveContextKeys.contribution.js';
import './contrib/aiDocs/browser/aiDocs.contribution.js';
import './contrib/aicontext/browser/aicontext.contribution.js';
import './contrib/aichat/browser/aichat.contribution.js';
import './contrib/aiConfig/browser/aiconfig.contribution.js';
import './contrib/aiPreviews/browser/aiPreviews.contribution.js';
import './contrib/quickInput2/browser/quickInput2.contribution.js';
import './contrib/aiPanes/browser/aiPanes.contribution.js';
import './contrib/aiRepoContext/browser/indexPopupService.contribution.js';
import './contrib/aiIndexingView/browser/aiIndexing.contribution.js';
import './contrib/aiWebCmdK/browser/aiWebCmdK.contribution.js';
import './contrib/aiReader/browser/aiReader.contribution.js';
import './contrib/semSearch/browser/semsearch.contribution.js';
import './contrib/membershipIcon/browser/membershipIcon.contribution.js';
import './services/ai/browser/advancedContextService.js';
import './services/ai/browser/fastEditService.js';
import './services/aiContext/browser/aiContext.contribution.js';
import './contrib/aiSettings/browser/aiSettings.contribution.js';
import './contrib/aiFeedback/browser/aiFeedback.contribution.js';
import './contrib/aiErrors/browser/aiErrors.contribution.js';
import './contrib/inlineMultiDiffEditor/browser/inlineMultiDiffEditor.contribution.js';
import './services/magicLink/browser/magicLinkService.contribution.js';
import './contrib/languageDetection/browser/languageDetection.contribution.js';
import './contrib/languageStatus/browser/languageStatus.contribution.js';
import './contrib/authentication/browser/authentication.contribution.js';
import './contrib/userDataSync/browser/userDataSync.contribution.js';
import './contrib/userDataProfile/browser/userDataProfile.contribution.js';
import './contrib/editSessions/browser/editSessions.contribution.js';
import './contrib/codeActions/browser/codeActions.contribution.js';
import './contrib/timeline/browser/timeline.contribution.js';
import './contrib/localHistory/browser/localHistory.contribution.js';
import './contrib/workspace/browser/workspace.contribution.js';
import './contrib/workspaces/browser/workspaces.contribution.js';
import './contrib/list/browser/list.contribution.js';
import './contrib/accessibilitySignals/browser/accessibilitySignal.contribution.js';
import './contrib/deprecatedExtensionMigrator/browser/deprecatedExtensionMigrator.contribution.js';
import './contrib/bracketPairColorizer2Telemetry/browser/bracketPairColorizer2Telemetry.contribution.js';
import './contrib/accessibility/browser/accessibility.contribution.js';
import './contrib/share/browser/share.contribution.js';
import './contrib/accountEntitlements/browser/accountsEntitlements.contribution.js';
import './contrib/scrollLocking/browser/scrollLocking.contribution.js';
define(
			de[4420],
			he([
				1, 0, 20, 782, 959, 119, 1617, 49, 93, 200, 3025, 2855, 496, 90, 667,
				2728, 8, 125, 2711, 665, 2791, 2745, 41, 957, 677, 150, 2886, 1679, 45,
				4370, 4070, 1905, 3411, 3857, 2943, 716, 2944, 3526, 571, 853, 633,
				3256, 518, 1819, 3323, 4029, 3889, 4226, 4122, 3401, 3802, 2895, 2876,
				4005, 4004, 1835, 1324, 3254, 3284, 3851, 3274, 3887, 3704, 3875, 1051,
				3578, 1793, 3244, 3999, 3220, 3784, 631, 3708, 719, 701, 3586, 834,
				3319, 1895, 3585, 384, 4388, 3291, 3301, 828, 3320, 3507, 3796, 3895,
				3788, 1044, 519, 3790, 1875, 227, 336, 403, 170, 4058, 1352, 3541, 3852,
				830, 3246, 822, 621, 2843, 708, 3522, 3399, 2763, 383, 545, 2856, 764,
				3725, 619, 567, 118, 1054, 3620, 1874, 3409, 4417, 4306, 3641, 4266,
				4001, 4331, 4271, 3998, 1282, 137, 1290, 479, 720, 445, 832, 1929, 697,
				3743, 1040, 3748, 1011, 3874, 399, 3775, 4358, 4356, 3756, 3539, 3733,
				3421, 4106, 3390, 4111, 4103, 4160, 4162, 4048, 3523, 4108, 864, 1993,
				4301, 3904, 4018, 4173, 1068, 4174, 3563, 4035, 4019, 1906, 1331, 796,
				847, 1943, 4026, 3869, 1918, 3074, 3027, 3814, 3571, 1803, 3872, 3214,
				3879, 3556, 4299, 1991, 1853, 4028, 1919, 4387, 3688, 3434, 3839, 3562,
				4032, 3673, 3983, 3460, 3774, 3693, 3428, 3429, 3614, 3726, 3794, 3437,
				3694, 3873, 3443, 3261, 3273, 3519, 4303, 1279, 4126, 4109, 4409, 2957,
				4238, 4348, 1988, 4338, 2975, 3945, 4202, 4218, 3649, 1931, 480, 3997,
				4353, 4313, 4256, 4213, 4e3, 3632, 3633, 3412, 4052, 3894, 4062, 3414,
				4307, 3881, 4360, 3700, 3430, 3533, 3424, 3413, 3863, 3564, 3547, 3636,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*extensions*/,
				i /*extensionGalleryService*/,
				w /*extensionEnablementService*/,
				E /*extensionManagement*/,
				C /*contextViewService*/,
				d /*contextView*/,
				m /*listService*/,
				r /*editorWorker*/,
				u /*workbenchEditorWorkerService*/,
				a /*markerDecorationsService*/,
				h /*markerDecorations*/,
				c /*markers*/,
				n /*markerService*/,
				g /*contextKeyService*/,
				p /*contextkey*/,
				o /*textResourceConfiguration*/,
				f /*textResourceConfigurationService*/,
				b /*download*/,
				s /*downloadService*/,
				l /*openerService*/,
				y /*opener*/,
				$ /*ignoredExtensions*/,
				v /*extensionStorage*/,
				S /*userDataSync*/,
				I /*userDataSyncLog*/,
				T /*reactiveStorageServiceImpl*/,
				P /*reactiveStorageService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, t.$lK)(S.$9Rb, I.$WAc, t.InstantiationType.Delayed),
					(0, t.$lK)($.$UAc, $.$VAc, t.InstantiationType.Delayed),
					(0, t.$lK)(E.$Kp, w.$twc, t.InstantiationType.Delayed),
					(0, t.$lK)(v.$1N, v.$2N, t.InstantiationType.Delayed),
					(0, t.$lK)(E.$Ep, i.$Rq, t.InstantiationType.Delayed),
					(0, t.$lK)(d.$Wxb, C.$myc, t.InstantiationType.Delayed),
					(0, t.$lK)(m.$fMb, m.$gMb, t.InstantiationType.Delayed),
					(0, t.$lK)(r.$Cxb, u.$QAc, t.InstantiationType.Eager),
					(0, t.$lK)(h.$bub, a.$RAc, t.InstantiationType.Delayed),
					(0, t.$lK)(c.$aM, n.$lic, t.InstantiationType.Delayed),
					(0, t.$lK)(p.$6j, g.$Etc, t.InstantiationType.Delayed),
					(0, t.$lK)(o.$XO, f.$SAc, t.InstantiationType.Delayed),
					(0, t.$lK)(b.$gp, s.$qfb, t.InstantiationType.Delayed),
					(0, t.$lK)(y.$7rb, l.$TAc, t.InstantiationType.Delayed),
					(0, t.$lK)(P.$0zb, T.$qec, t.InstantiationType.Delayed);
			},
		)
