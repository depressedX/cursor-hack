import '../../../../require.js';
import '../../../../exports.js';
import '../../services/extensions/common/proxyIdentifier.js';
define(de[88], he([1, 0, 622]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$mbb =
					e.$lbb =
					e.ExtHostTestingResource =
					e.ISuggestResultDtoField =
					e.ISuggestDataDtoField =
					e.$kbb =
					e.CandidatePortSource =
					e.NotebookEditorRevealType =
					e.CellOutputKind =
					e.WebviewMessageArrayBufferViewType =
					e.WebviewEditorCapabilities =
					e.TabModelOperationKind =
					e.TabInputKind =
					e.TextEditorRevealType =
						void 0);
			var i;
			(function (g) {
				(g[(g.Default = 0)] = "Default"),
					(g[(g.InCenter = 1)] = "InCenter"),
					(g[(g.InCenterIfOutsideViewport = 2)] = "InCenterIfOutsideViewport"),
					(g[(g.AtTop = 3)] = "AtTop");
			})(i || (e.TextEditorRevealType = i = {}));
			var w;
			(function (g) {
				(g[(g.UnknownInput = 0)] = "UnknownInput"),
					(g[(g.TextInput = 1)] = "TextInput"),
					(g[(g.TextDiffInput = 2)] = "TextDiffInput"),
					(g[(g.TextMergeInput = 3)] = "TextMergeInput"),
					(g[(g.NotebookInput = 4)] = "NotebookInput"),
					(g[(g.NotebookDiffInput = 5)] = "NotebookDiffInput"),
					(g[(g.CustomEditorInput = 6)] = "CustomEditorInput"),
					(g[(g.WebviewEditorInput = 7)] = "WebviewEditorInput"),
					(g[(g.TerminalEditorInput = 8)] = "TerminalEditorInput"),
					(g[(g.InteractiveEditorInput = 9)] = "InteractiveEditorInput"),
					(g[(g.ChatEditorInput = 10)] = "ChatEditorInput"),
					(g[(g.MultiDiffEditorInput = 11)] = "MultiDiffEditorInput");
			})(w || (e.TabInputKind = w = {}));
			var E;
			(function (g) {
				(g[(g.TAB_OPEN = 0)] = "TAB_OPEN"),
					(g[(g.TAB_CLOSE = 1)] = "TAB_CLOSE"),
					(g[(g.TAB_UPDATE = 2)] = "TAB_UPDATE"),
					(g[(g.TAB_MOVE = 3)] = "TAB_MOVE");
			})(E || (e.TabModelOperationKind = E = {}));
			var C;
			(function (g) {
				(g[(g.Editable = 0)] = "Editable"),
					(g[(g.SupportsHotExit = 1)] = "SupportsHotExit");
			})(C || (e.WebviewEditorCapabilities = C = {}));
			var d;
			(function (g) {
				(g[(g.Int8Array = 1)] = "Int8Array"),
					(g[(g.Uint8Array = 2)] = "Uint8Array"),
					(g[(g.Uint8ClampedArray = 3)] = "Uint8ClampedArray"),
					(g[(g.Int16Array = 4)] = "Int16Array"),
					(g[(g.Uint16Array = 5)] = "Uint16Array"),
					(g[(g.Int32Array = 6)] = "Int32Array"),
					(g[(g.Uint32Array = 7)] = "Uint32Array"),
					(g[(g.Float32Array = 8)] = "Float32Array"),
					(g[(g.Float64Array = 9)] = "Float64Array"),
					(g[(g.BigInt64Array = 10)] = "BigInt64Array"),
					(g[(g.BigUint64Array = 11)] = "BigUint64Array");
			})(d || (e.WebviewMessageArrayBufferViewType = d = {}));
			var m;
			(function (g) {
				(g[(g.Text = 1)] = "Text"),
					(g[(g.Error = 2)] = "Error"),
					(g[(g.Rich = 3)] = "Rich");
			})(m || (e.CellOutputKind = m = {}));
			var r;
			(function (g) {
				(g[(g.Default = 0)] = "Default"),
					(g[(g.InCenter = 1)] = "InCenter"),
					(g[(g.InCenterIfOutsideViewport = 2)] = "InCenterIfOutsideViewport"),
					(g[(g.AtTop = 3)] = "AtTop");
			})(r || (e.NotebookEditorRevealType = r = {}));
			var u;
			(function (g) {
				(g[(g.None = 0)] = "None"),
					(g[(g.Process = 1)] = "Process"),
					(g[(g.Output = 2)] = "Output"),
					(g[(g.Hybrid = 3)] = "Hybrid");
			})(u || (e.CandidatePortSource = u = {}));
			class a {
				static {
					this.a = 0;
				}
				static mixin(p) {
					return (p._id = a.a++), p;
				}
			}
			e.$kbb = a;
			var h;
			(function (g) {
				(g.label = "a"),
					(g.kind = "b"),
					(g.detail = "c"),
					(g.documentation = "d"),
					(g.sortText = "e"),
					(g.filterText = "f"),
					(g.preselect = "g"),
					(g.insertText = "h"),
					(g.insertTextRules = "i"),
					(g.range = "j"),
					(g.commitCharacters = "k"),
					(g.additionalTextEdits = "l"),
					(g.kindModifier = "m"),
					(g.commandIdent = "n"),
					(g.commandId = "o"),
					(g.commandArguments = "p");
			})(h || (e.ISuggestDataDtoField = h = {}));
			var c;
			(function (g) {
				(g.defaultRanges = "a"),
					(g.completions = "b"),
					(g.isIncomplete = "c"),
					(g.duration = "d");
			})(c || (e.ISuggestResultDtoField = c = {}));
			var n;
			(function (g) {
				(g[(g.Workspace = 0)] = "Workspace"),
					(g[(g.TextDocument = 1)] = "TextDocument");
			})(n || (e.ExtHostTestingResource = n = {})),
				(e.$lbb = {
					MainThreadAuthentication: (0, t.$sO)("MainThreadAuthentication"),
					MainThreadBulkEdits: (0, t.$sO)("MainThreadBulkEdits"),
					MainThreadLanguageModels: (0, t.$sO)("MainThreadLanguageModels"),
					MainThreadEmbeddings: (0, t.$sO)("MainThreadEmbeddings"),
					MainThreadChatAgents2: (0, t.$sO)("MainThreadChatAgents2"),
					MainThreadChatVariables: (0, t.$sO)("MainThreadChatVariables"),
					MainThreadLanguageModelTools: (0, t.$sO)("MainThreadChatSkills"),
					MainThreadClipboard: (0, t.$sO)("MainThreadClipboard"),
					MainThreadCommands: (0, t.$sO)("MainThreadCommands"),
					MainThreadComments: (0, t.$sO)("MainThreadComments"),
					MainThreadConfiguration: (0, t.$sO)("MainThreadConfiguration"),
					MainThreadConsole: (0, t.$sO)("MainThreadConsole"),
					MainThreadDebugService: (0, t.$sO)("MainThreadDebugService"),
					MainThreadDecorations: (0, t.$sO)("MainThreadDecorations"),
					MainThreadDiagnostics: (0, t.$sO)("MainThreadDiagnostics"),
					MainThreadDialogs: (0, t.$sO)("MainThreadDiaglogs"),
					MainThreadDocuments: (0, t.$sO)("MainThreadDocuments"),
					MainThreadDocumentContentProviders: (0, t.$sO)(
						"MainThreadDocumentContentProviders",
					),
					MainThreadTextEditors: (0, t.$sO)("MainThreadTextEditors"),
					MainThreadEditorInsets: (0, t.$sO)("MainThreadEditorInsets"),
					MainThreadEditorTabs: (0, t.$sO)("MainThreadEditorTabs"),
					MainThreadErrors: (0, t.$sO)("MainThreadErrors"),
					MainThreadTreeViews: (0, t.$sO)("MainThreadTreeViews"),
					MainThreadDownloadService: (0, t.$sO)("MainThreadDownloadService"),
					MainThreadLanguageFeatures: (0, t.$sO)("MainThreadLanguageFeatures"),
					MainThreadLanguages: (0, t.$sO)("MainThreadLanguages"),
					MainThreadLogger: (0, t.$sO)("MainThreadLogger"),
					MainThreadMessageService: (0, t.$sO)("MainThreadMessageService"),
					MainThreadOutputService: (0, t.$sO)("MainThreadOutputService"),
					MainThreadProgress: (0, t.$sO)("MainThreadProgress"),
					MainThreadQuickDiff: (0, t.$sO)("MainThreadQuickDiff"),
					MainThreadQuickOpen: (0, t.$sO)("MainThreadQuickOpen"),
					MainThreadStatusBar: (0, t.$sO)("MainThreadStatusBar"),
					MainThreadSecretState: (0, t.$sO)("MainThreadSecretState"),
					MainThreadStorage: (0, t.$sO)("MainThreadStorage"),
					MainThreadSpeech: (0, t.$sO)("MainThreadSpeechProvider"),
					MainThreadTelemetry: (0, t.$sO)("MainThreadTelemetry"),
					MainThreadTerminalService: (0, t.$sO)("MainThreadTerminalService"),
					MainThreadTerminalShellIntegration: (0, t.$sO)(
						"MainThreadTerminalShellIntegration",
					),
					MainThreadWebviews: (0, t.$sO)("MainThreadWebviews"),
					MainThreadWebviewPanels: (0, t.$sO)("MainThreadWebviewPanels"),
					MainThreadWebviewViews: (0, t.$sO)("MainThreadWebviewViews"),
					MainThreadCustomEditors: (0, t.$sO)("MainThreadCustomEditors"),
					MainThreadUrls: (0, t.$sO)("MainThreadUrls"),
					MainThreadUriOpeners: (0, t.$sO)("MainThreadUriOpeners"),
					MainThreadProfileContentHandlers: (0, t.$sO)(
						"MainThreadProfileContentHandlers",
					),
					MainThreadWorkspace: (0, t.$sO)("MainThreadWorkspace"),
					MainThreadFileSystem: (0, t.$sO)("MainThreadFileSystem"),
					MainThreadFileSystemEventService: (0, t.$sO)(
						"MainThreadFileSystemEventService",
					),
					MainThreadExtensionService: (0, t.$sO)("MainThreadExtensionService"),
					MainThreadSCM: (0, t.$sO)("MainThreadSCM"),
					MainThreadSearch: (0, t.$sO)("MainThreadSearch"),
					MainThreadShare: (0, t.$sO)("MainThreadShare"),
					MainThreadTask: (0, t.$sO)("MainThreadTask"),
					MainThreadWindow: (0, t.$sO)("MainThreadWindow"),
					MainThreadLabelService: (0, t.$sO)("MainThreadLabelService"),
					MainThreadNotebook: (0, t.$sO)("MainThreadNotebook"),
					MainThreadNotebookDocuments: (0, t.$sO)(
						"MainThreadNotebookDocumentsShape",
					),
					MainThreadNotebookEditors: (0, t.$sO)(
						"MainThreadNotebookEditorsShape",
					),
					MainThreadNotebookKernels: (0, t.$sO)("MainThreadNotebookKernels"),
					MainThreadNotebookRenderers: (0, t.$sO)(
						"MainThreadNotebookRenderers",
					),
					MainThreadInteractive: (0, t.$sO)("MainThreadInteractive"),
					MainThreadTheming: (0, t.$sO)("MainThreadTheming"),
					MainThreadTunnelService: (0, t.$sO)("MainThreadTunnelService"),
					MainThreadManagedSockets: (0, t.$sO)("MainThreadManagedSockets"),
					MainThreadTimeline: (0, t.$sO)("MainThreadTimeline"),
					MainThreadTesting: (0, t.$sO)("MainThreadTesting"),
					MainThreadLocalization: (0, t.$sO)("MainThreadLocalizationShape"),
					MainThreadAiRelatedInformation: (0, t.$sO)(
						"MainThreadAiRelatedInformation",
					),
					MainThreadAiEmbeddingVector: (0, t.$sO)(
						"MainThreadAiEmbeddingVector",
					),
					MainThreadCursor: (0, t.$sO)("MainThreadCursor"),
				}),
				(e.$mbb = {
					ExtHostCommands: (0, t.$sO)("ExtHostCommands"),
					ExtHostConfiguration: (0, t.$sO)("ExtHostConfiguration"),
					ExtHostDiagnostics: (0, t.$sO)("ExtHostDiagnostics"),
					ExtHostDebugService: (0, t.$sO)("ExtHostDebugService"),
					ExtHostDecorations: (0, t.$sO)("ExtHostDecorations"),
					ExtHostDocumentsAndEditors: (0, t.$sO)("ExtHostDocumentsAndEditors"),
					ExtHostDocuments: (0, t.$sO)("ExtHostDocuments"),
					ExtHostDocumentContentProviders: (0, t.$sO)(
						"ExtHostDocumentContentProviders",
					),
					ExtHostDocumentSaveParticipant: (0, t.$sO)(
						"ExtHostDocumentSaveParticipant",
					),
					ExtHostEditors: (0, t.$sO)("ExtHostEditors"),
					ExtHostTreeViews: (0, t.$sO)("ExtHostTreeViews"),
					ExtHostFileSystem: (0, t.$sO)("ExtHostFileSystem"),
					ExtHostFileSystemInfo: (0, t.$sO)("ExtHostFileSystemInfo"),
					ExtHostFileSystemEventService: (0, t.$sO)(
						"ExtHostFileSystemEventService",
					),
					ExtHostLanguages: (0, t.$sO)("ExtHostLanguages"),
					ExtHostLanguageFeatures: (0, t.$sO)("ExtHostLanguageFeatures"),
					ExtHostQuickOpen: (0, t.$sO)("ExtHostQuickOpen"),
					ExtHostQuickDiff: (0, t.$sO)("ExtHostQuickDiff"),
					ExtHostStatusBar: (0, t.$sO)("ExtHostStatusBar"),
					ExtHostShare: (0, t.$sO)("ExtHostShare"),
					ExtHostExtensionService: (0, t.$sO)("ExtHostExtensionService"),
					ExtHostLogLevelServiceShape: (0, t.$sO)(
						"ExtHostLogLevelServiceShape",
					),
					ExtHostTerminalService: (0, t.$sO)("ExtHostTerminalService"),
					ExtHostTerminalShellIntegration: (0, t.$sO)(
						"ExtHostTerminalShellIntegration",
					),
					ExtHostSCM: (0, t.$sO)("ExtHostSCM"),
					ExtHostSearch: (0, t.$sO)("ExtHostSearch"),
					ExtHostTask: (0, t.$sO)("ExtHostTask"),
					ExtHostWorkspace: (0, t.$sO)("ExtHostWorkspace"),
					ExtHostWindow: (0, t.$sO)("ExtHostWindow"),
					ExtHostWebviews: (0, t.$sO)("ExtHostWebviews"),
					ExtHostWebviewPanels: (0, t.$sO)("ExtHostWebviewPanels"),
					ExtHostCustomEditors: (0, t.$sO)("ExtHostCustomEditors"),
					ExtHostWebviewViews: (0, t.$sO)("ExtHostWebviewViews"),
					ExtHostEditorInsets: (0, t.$sO)("ExtHostEditorInsets"),
					ExtHostEditorTabs: (0, t.$sO)("ExtHostEditorTabs"),
					ExtHostProgress: (0, t.$sO)("ExtHostProgress"),
					ExtHostComments: (0, t.$sO)("ExtHostComments"),
					ExtHostSecretState: (0, t.$sO)("ExtHostSecretState"),
					ExtHostStorage: (0, t.$sO)("ExtHostStorage"),
					ExtHostUrls: (0, t.$sO)("ExtHostUrls"),
					ExtHostUriOpeners: (0, t.$sO)("ExtHostUriOpeners"),
					ExtHostProfileContentHandlers: (0, t.$sO)(
						"ExtHostProfileContentHandlers",
					),
					ExtHostOutputService: (0, t.$sO)("ExtHostOutputService"),
					ExtHostLabelService: (0, t.$sO)("ExtHostLabelService"),
					ExtHostNotebook: (0, t.$sO)("ExtHostNotebook"),
					ExtHostNotebookDocuments: (0, t.$sO)("ExtHostNotebookDocuments"),
					ExtHostNotebookEditors: (0, t.$sO)("ExtHostNotebookEditors"),
					ExtHostNotebookKernels: (0, t.$sO)("ExtHostNotebookKernels"),
					ExtHostNotebookRenderers: (0, t.$sO)("ExtHostNotebookRenderers"),
					ExtHostNotebookDocumentSaveParticipant: (0, t.$sO)(
						"ExtHostNotebookDocumentSaveParticipant",
					),
					ExtHostInteractive: (0, t.$sO)("ExtHostInteractive"),
					ExtHostChatAgents2: (0, t.$sO)("ExtHostChatAgents"),
					ExtHostChatVariables: (0, t.$sO)("ExtHostChatVariables"),
					ExtHostLanguageModelTools: (0, t.$sO)("ExtHostChatSkills"),
					ExtHostChatProvider: (0, t.$sO)("ExtHostChatProvider"),
					ExtHostSpeech: (0, t.$sO)("ExtHostSpeech"),
					ExtHostEmbeddings: (0, t.$sO)("ExtHostEmbeddings"),
					ExtHostAiRelatedInformation: (0, t.$sO)(
						"ExtHostAiRelatedInformation",
					),
					ExtHostAiEmbeddingVector: (0, t.$sO)("ExtHostAiEmbeddingVector"),
					ExtHostTheming: (0, t.$sO)("ExtHostTheming"),
					ExtHostTunnelService: (0, t.$sO)("ExtHostTunnelService"),
					ExtHostManagedSockets: (0, t.$sO)("ExtHostManagedSockets"),
					ExtHostAuthentication: (0, t.$sO)("ExtHostAuthentication"),
					ExtHostTimeline: (0, t.$sO)("ExtHostTimeline"),
					ExtHostTesting: (0, t.$sO)("ExtHostTesting"),
					ExtHostTelemetry: (0, t.$sO)("ExtHostTelemetry"),
					ExtHostLocalization: (0, t.$sO)("ExtHostLocalization"),
					ExtHostCursor: (0, t.$sO)("ExtHostCursor"),
				});
		}),
		