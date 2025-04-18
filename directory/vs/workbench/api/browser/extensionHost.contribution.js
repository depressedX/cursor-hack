import '../../../../require.js';
import '../../../../exports.js';
import '../../common/contributions.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../common/jsonValidationExtensionPoint.js';
import '../../services/themes/common/colorExtensionPoint.js';
import '../../services/themes/common/iconExtensionPoint.js';
import '../../services/themes/common/tokenClassificationExtensionPoint.js';
import '../../contrib/codeEditor/common/languageConfigurationExtensionPoint.js';
import './statusBarExtensionPoint.js';
import './mainThreadLocalization.js';
import './mainThreadBulkEdits.js';
import './mainThreadLanguageModels.js';
import './mainThreadChatAgents2.js';
import './mainThreadChatVariables.js';
import './mainThreadLanguageModelTools.js';
import './mainThreadEmbeddings.js';
import './mainThreadCodeInsets.js';
import './mainThreadCLICommands.js';
import './mainThreadClipboard.js';
import './mainThreadCommands.js';
import './mainThreadConfiguration.js';
import './mainThreadConsole.js';
import './mainThreadDebugService.js';
import './mainThreadDecorations.js';
import './mainThreadDiagnostics.js';
import './mainThreadDialogs.js';
import './mainThreadDocumentContentProviders.js';
import './mainThreadDocuments.js';
import './mainThreadDocumentsAndEditors.js';
import './mainThreadEditor.js';
import './mainThreadEditors.js';
import './mainThreadEditorTabs.js';
import './mainThreadErrors.js';
import './mainThreadExtensionService.js';
import './mainThreadFileSystem.js';
import './mainThreadFileSystemEventService.js';
import './mainThreadLanguageFeatures.js';
import './mainThreadLanguages.js';
import './mainThreadLogService.js';
import './mainThreadMessageService.js';
import './mainThreadManagedSockets.js';
import './mainThreadOutputService.js';
import './mainThreadProgress.js';
import './mainThreadQuickDiff.js';
import './mainThreadQuickOpen.js';
import './mainThreadRemoteConnectionData.js';
import './mainThreadSaveParticipant.js';
import './mainThreadSpeech.js';
import './mainThreadEditSessionIdentityParticipant.js';
import './mainThreadSCM.js';
import './mainThreadSearch.js';
import './mainThreadStatusBar.js';
import './mainThreadStorage.js';
import './mainThreadTelemetry.js';
import './mainThreadTerminalService.js';
import './mainThreadTerminalShellIntegration.js';
import './mainThreadTheming.js';
import './mainThreadTreeViews.js';
import './mainThreadDownloadService.js';
import './mainThreadUrls.js';
import './mainThreadUriOpeners.js';
import './mainThreadWindow.js';
import './mainThreadWebviewManager.js';
import './mainThreadWorkspace.js';
import './mainThreadComments.js';
import './mainThreadNotebook.js';
import './mainThreadNotebookKernels.js';
import './mainThreadNotebookDocumentsAndEditors.js';
import './mainThreadNotebookRenderers.js';
import './mainThreadNotebookSaveParticipant.js';
import './mainThreadInteractive.js';
import './mainThreadTask.js';
import './mainThreadLabelService.js';
import './mainThreadTunnelService.js';
import './mainThreadAuthentication.js';
import './mainThreadCursor.js';
import './mainThreadTimeline.js';
import './mainThreadTesting.js';
import './mainThreadSecretState.js';
import './mainThreadShare.js';
import './mainThreadProfileContentHandlers.js';
import './mainThreadAiRelatedInformation.js';
import './mainThreadAiEmbeddingVector.js';
define(
			de[4070],
			he([
				1, 0, 55, 5, 3324, 3709, 3710, 3715, 3306, 1872, 3356, 1303, 3355, 4069,
				3339, 3354, 3349, 3375, 4063, 3340, 3341, 3342, 3378, 3684, 3343, 3344,
				3345, 3346, 1342, 3898, 1820, 1913, 3876, 3350, 3731, 3351, 3899, 3484,
				3400, 3357, 3359, 3358, 3800, 3361, 3362, 3363, 3364, 3677, 3367, 3348,
				3446, 3594, 3622, 3368, 3370, 3543, 3465, 3372, 3801, 3347, 3452, 3555,
				3749, 3902, 4006, 4015, 3463, 3464, 3901, 3360, 3908, 3352, 3369, 3353,
				3589, 3338, 3944, 3373, 3371, 3365, 3366, 3753, 3337, 3336,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*contributions*/,
 i /*instantiation*/,
 w /*jsonValidationExtensionPoint*/,
 E /*colorExtensionPoint*/,
 C /*iconExtensionPoint*/,
 d /*tokenClassificationExtensionPoint*/,
 m /*languageConfigurationExtensionPoint*/,
 r /*statusBarExtensionPoint*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Vqc = void 0);
				let u = class {
					static {
						this.ID = "workbench.contrib.extensionPoints";
					}
					constructor(h) {
						(this.a = h),
							this.a.createInstance(w.$hmc),
							this.a.createInstance(E.$imc),
							this.a.createInstance(C.$jmc),
							this.a.createInstance(d.$pmc),
							this.a.createInstance(m.$qmc),
							this.a.createInstance(r.$smc);
					}
				};
				(e.$Vqc = u),
					(e.$Vqc = u = Ne([j(0, i.$Li)], u)),
					(0, t.$s6)(u.ID, u, t.WorkbenchPhase.BlockStartup);
			},
		)
