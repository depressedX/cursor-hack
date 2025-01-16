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
		define(
			de[3336],
			he([1, 0, 3, 88, 1793, 101]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Uqc = void 0);
				let C = class extends t.$1c {
					constructor(m, r) {
						super(),
							(this.c = r),
							(this.b = this.D(new t.$0c())),
							(this.a = m.getProxy(i.$mbb.ExtHostAiEmbeddingVector));
					}
					$registerAiEmbeddingVectorProvider(m, r) {
						const u = {
							provideAiEmbeddingVector: (a, h) =>
								this.a.$provideAiEmbeddingVector(r, a, h),
						};
						this.b.set(r, this.c.registerAiEmbeddingVectorProvider(m, u));
					}
					$unregisterAiEmbeddingVectorProvider(m) {
						this.b.deleteAndDispose(m);
					}
				};
				(e.$Uqc = C),
					(e.$Uqc = C =
						Ne(
							[(0, E.$tmc)(i.$lbb.MainThreadAiEmbeddingVector), j(1, w.$Sqc)],
							C,
						));
			},
		),
		define(
			de[3337],
			he([1, 0, 33, 3, 88, 1013, 101]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Rqc = void 0);
				let d = class extends i.$1c {
					constructor(r, u) {
						super(),
							(this.c = u),
							(this.b = this.D(new i.$0c())),
							(this.a = r.getProxy(w.$mbb.ExtHostAiRelatedInformation));
					}
					$getAiRelatedInformation(r, u) {
						return this.c.getRelatedInformation(r, u, t.CancellationToken.None);
					}
					$registerAiRelatedInformationProvider(r, u) {
						const a = {
							provideAiRelatedInformation: (h, c) =>
								this.a.$provideAiRelatedInformation(r, h, c),
						};
						this.b.set(r, this.c.registerAiRelatedInformationProvider(u, a));
					}
					$unregisterAiRelatedInformationProvider(r) {
						this.b.deleteAndDispose(r);
					}
				};
				(e.$Rqc = d),
					(e.$Rqc = d =
						Ne(
							[(0, C.$tmc)(w.$lbb.MainThreadAiRelatedInformation), j(1, E.$97)],
							d,
						));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3338],
		he([
			1, 0, 3, 4, 101, 357, 88, 57, 111, 40, 53, 32, 6, 62, 10, 621, 822, 830,
			9, 41, 29,
		]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b, s) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$gqc = e.$fqc = void 0),
				(i = mt(i)),
				(m = xi(m));
			class l extends t.$1c {
				constructor(v, S, I, T, P, k) {
					super(),
						(this.a = v),
						(this.id = S),
						(this.label = I),
						(this.supportsMultipleAccounts = T),
						(this.b = P),
						(this.onDidChangeSessions = k.event);
				}
				async getSessions(v, S) {
					return this.a.$getSessions(this.id, v, S);
				}
				createSession(v, S) {
					return this.a.$createSession(this.id, v, S);
				}
				async removeSession(v) {
					await this.a.$removeSession(this.id, v),
						this.b.info(i.localize(2522, null));
				}
			}
			e.$fqc = l;
			let y = class extends t.$1c {
				constructor(v, S, I, T, P, k, L, D, M, N, A, R) {
					super(),
						(this.c = S),
						(this.f = I),
						(this.g = T),
						(this.h = P),
						(this.j = k),
						(this.m = L),
						(this.n = D),
						(this.q = M),
						(this.r = N),
						(this.s = A),
						(this.t = R),
						(this.b = this.D(new t.$0c())),
						(this.a = v.getProxy(C.$mbb.ExtHostAuthentication)),
						this.D(
							this.c.onDidChangeSessions((O) => {
								this.a.$onDidChangeAuthenticationSessions(
									O.providerId,
									O.label,
								);
							}),
						);
				}
				async $registerAuthenticationProvider(v, S, I) {
					const T = new h.$re();
					this.b.set(v, T);
					const P = new l(this.a, v, S, I, this.m, T);
					this.c.registerAuthenticationProvider(v, P);
				}
				$unregisterAuthenticationProvider(v) {
					this.b.deleteAndDispose(v),
						this.c.unregisterAuthenticationProvider(v);
				}
				async $ensureProvider(v) {
					if (!this.c.isAuthenticationProviderRegistered(v))
						return await this.n.activateByEvent(
							(0, o.$fsb)(v),
							u.ActivationKind.Immediate,
						);
				}
				$sendDidChangeSessions(v, S) {
					const I = this.b.get(v);
					I instanceof h.$re && I.fire(S);
				}
				$removeSession(v, S) {
					return this.c.removeSession(v, S);
				}
				async u(v) {
					const S = `In order to provide better results for @git, Cursor wants to sign in with ${v}.`;
					let I;
					(function (P) {
						(P[(P.Allow = 0)] = "Allow"),
							(P[(P.DontAskAgain = 1)] = "DontAskAgain"),
							(P[(P.Cancel = 2)] = "Cancel");
					})(I || (I = {}));
					const T = await this.j.prompt({
						type: m.default.Info,
						message: S,
						buttons: [
							{ label: i.localize(2523, null), run: () => I.Allow },
							{ label: i.localize(2524, null), run: () => I.DontAskAgain },
							{ label: i.localize(2525, null), run: () => I.Cancel },
						],
					});
					return (
						T.result === I.DontAskAgain &&
							(await this.s.updateValue(
								"cursor-retrieval.canAttemptGithubLogin",
								!1,
							)),
						T.result === I.Allow
					);
				}
				async w(v, S, I, T) {
					let P;
					v.id.startsWith(E.$07)
						? (P = i.localize(2526, null, S, v.label))
						: (P = I
								? i.localize(2527, null, S, v.label)
								: i.localize(2528, null, S, v.label));
					const k = [
						{
							label: i.localize(2529, null),
							run() {
								return !0;
							},
						},
					];
					T?.learnMore &&
						k.push({
							label: i.localize(2530, null),
							run: async () => {
								const D = this.w(v, S, I, T);
								return (
									await this.t.open(f.URI.revive(T.learnMore), {
										allowCommands: !0,
									}),
									await D
								);
							},
						});
					const { result: L } = await this.j.prompt({
						type: m.default.Info,
						message: P,
						buttons: k,
						detail: T?.detail,
						cancelButton: !0,
					});
					return L ?? !1;
				}
				async y(v, S) {
					const I = await this.j.prompt({
						message: i.localize(2531, null),
						detail: i.localize(2532, null, v, S),
						type: m.default.Warning,
						cancelButton: !0,
						buttons: [
							{ label: i.localize(2533, null, v), run: () => v },
							{ label: i.localize(2534, null, S), run: () => S },
						],
					});
					if (!I.result) throw new s.$9();
					return I.result === v;
				}
				async z(v, S, I, T, P) {
					const k = await this.c.getSessions(v, S, P.account, !0),
						L = this.c.getProvider(v);
					if (P.forceNewSession && P.createIfNone)
						throw new Error(
							"Invalid combination of options. Please remove one of the following: forceNewSession, createIfNone",
						);
					if (P.forceNewSession && P.silent)
						throw new Error(
							"Invalid combination of options. Please remove one of the following: forceNewSession, silent",
						);
					if (P.createIfNone && P.silent)
						throw new Error(
							"Invalid combination of options. Please remove one of the following: createIfNone, silent",
						);
					if (
						(P.clearSessionPreference &&
							this.f.removeSessionPreference(v, I, S),
						!P.forceNewSession && k.length)
					) {
						if (L.supportsMultipleAccounts) {
							const M = this.f.getSessionPreference(v, I, S);
							if (M) {
								const N = k.find((A) => A.id === M);
								if (N && this.g.isAccessAllowed(v, N.account.label, I))
									return N;
							}
						} else if (this.g.isAccessAllowed(v, k[0].account.label, I))
							return k[0];
					}
					if (P.createIfNone || P.forceNewSession) {
						let M;
						typeof P.forceNewSession == "object" && (M = P.forceNewSession);
						const N = !!(P.forceNewSession && k.length);
						let A;
						if (
							(this.r.cursorTrustedExtensionAuthAccess?.includes(I)
								? (A = await this.u(L.label))
								: (A = await this.w(L, T, N, M)),
							!A)
						)
							throw new Error("User did not consent to login.");
						let R;
						if (k?.length && !P.forceNewSession)
							R =
								L.supportsMultipleAccounts && !P.account
									? await this.f.selectSession(v, I, T, S, k)
									: k[0];
						else {
							let O = P.account;
							if (!O) {
								const B = this.f.getSessionPreference(v, I, S);
								O = B ? k.find((U) => U.id === B)?.account : void 0;
							}
							do
								R = await this.c.createSession(v, S, {
									activateImmediate: !0,
									account: O,
								});
							while (
								O &&
								O.label !== R.account.label &&
								!(await this.y(R.account.label, O.label))
							);
						}
						return (
							this.g.updateAllowedExtensions(v, R.account.label, [
								{ id: I, name: T, allowed: !0 },
							]),
							this.f.updateSessionPreference(v, I, R),
							R
						);
					}
					const D = k.find((M) =>
						this.g.isAccessAllowed(v, M.account.label, I),
					);
					if (D) return D;
					P.silent ||
						(k.length
							? this.f.requestSessionAccess(v, I, T, S, k)
							: await this.f.requestNewSession(v, S, I, T));
				}
				async $getSession(v, S, I, T, P) {
					const k = await this.z(v, S, I, T, P);
					return (
						k &&
							(this.C(I, v), this.h.addAccountUsage(v, k.account.label, I, T)),
						k
					);
				}
				async $getAccounts(v) {
					return await this.c.getAccounts(v);
				}
				C(v, S) {
					this.q.publicLog2("authentication.providerUsage", {
						providerId: S,
						extensionId: v,
					});
				}
			};
			(e.$gqc = y),
				(e.$gqc = y =
					Ne(
						[
							(0, w.$tmc)(C.$lbb.MainThreadAuthentication),
							j(1, E.$$7),
							j(2, E.$_7),
							j(3, g.$dsb),
							j(4, p.$dqc),
							j(5, d.$GO),
							j(6, r.$4N),
							j(7, u.$q2),
							j(8, a.$km),
							j(9, c.$Bk),
							j(10, n.$gj),
							j(11, b.$7rb),
						],
						y,
					));
		},
	),
		define(
			de[3339],
			he([1, 0, 3, 197, 88, 503, 101]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Gmc = void 0);
				let d = class {
					constructor(r, u) {
						(this.d = u),
							(this.b = new t.$0c()),
							(this.c = new Map()),
							(this.a = r.getProxy(w.$mbb.ExtHostChatVariables));
					}
					dispose() {
						this.b.clearAndDisposeAll();
					}
					$registerVariable(r, u) {
						const a = this.d.registerVariable(u, async (h, c, n, g, p) => {
							const o = `${n.sessionId}-${r}`;
							this.c.set(o, g);
							const f = (0, i.$ji)(await this.a.$resolveVariable(r, o, h, p));
							return this.c.delete(o), f;
						});
						this.b.set(r, a);
					}
					async $handleProgressChunk(r, u) {
						const a = (0, i.$ji)(u);
						this.c.get(r)?.(a);
					}
					$unregisterVariable(r) {
						this.b.deleteAndDispose(r);
					}
				};
				(e.$Gmc = d),
					(e.$Gmc = d =
						Ne([(0, C.$tmc)(w.$lbb.MainThreadChatVariables), j(1, E.$D2)], d));
			},
		),
		define(
			de[3340],
			he([1, 0, 101, 88, 121, 308]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Pmc = void 0);
				let C = class {
					constructor(m, r, u) {
						(this.a = r), (this.b = u);
					}
					dispose() {}
					$readText() {
						return this.a.readText();
					}
					$writeText(m) {
						return (
							this.b.registerEvent("editor.copy.vim_mode"), this.a.writeText(m)
						);
					}
				};
				(e.$Pmc = C),
					(e.$Pmc = C =
						Ne(
							[
								(0, t.$tmc)(i.$lbb.MainThreadClipboard),
								j(1, w.$Vxb),
								j(2, E.$5X),
							],
							C,
						));
			},
		),
		define(
			de[3341],
			he([1, 0, 3, 197, 31, 101, 53, 622, 88, 28]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Qmc = void 0);
				let u = class {
					constructor(c, n, g) {
						(this.d = n),
							(this.e = g),
							(this.a = new t.$0c()),
							(this.c = c.getProxy(m.$mbb.ExtHostCommands)),
							(this.b = w.$fk.registerCommand(
								"_generateCommandsDocumentation",
								() => this.f(),
							));
					}
					dispose() {
						this.a.dispose(), this.b.dispose();
					}
					async f() {
						const c = await this.c.$getContributedCommandMetadata(),
							n = w.$fk.getCommands();
						for (const [p, o] of n) o.metadata && (c[p] = o.metadata);
						const g = [];
						for (const p in c) g.push("`" + p + "` - " + a(c[p]));
						console.log(
							g.join(`
`),
						);
					}
					$registerCommand(c) {
						this.a.set(
							c,
							w.$fk.registerCommand(c, (n, ...g) =>
								this.c
									.$executeContributedCommand(c, ...g)
									.then((p) => (0, i.$ji)(p)),
							),
						);
					}
					$unregisterCommand(c) {
						this.a.deleteAndDispose(c);
					}
					$fireCommandActivationEvent(c) {
						const n = `onCommand:${c}`;
						this.e.activationEventIsDone(n) || this.e.activateByEvent(n);
					}
					async $executeCommand(c, n, g) {
						n instanceof d.$uO && (n = n.value);
						for (let p = 0; p < n.length; p++) n[p] = (0, i.$ji)(n[p]);
						if (g && n.length > 0 && !w.$fk.getCommand(c))
							throw (
								(await this.e.activateByEvent(`onCommand:${c}`),
								new Error("$executeCommand:retry"))
							);
						return this.d.executeCommand(c, ...n);
					}
					$getCommands() {
						return Promise.resolve([...w.$fk.getCommands().keys()]);
					}
				};
				(e.$Qmc = u),
					(e.$Qmc = u =
						Ne(
							[
								(0, E.$tmc)(m.$lbb.MainThreadCommands),
								j(1, w.$ek),
								j(2, C.$q2),
							],
							u,
						));
				function a(h) {
					if (typeof h == "string") return h;
					{
						const n = [
							(0, r.$lg)(h.description)
								? h.description
								: h.description.original,
						];
						if (
							(n.push(`

`),
							h.args)
						)
							for (const g of h.args)
								n.push(`* _${g.name}_ - ${g.description || ""}
`);
						return (
							h.returns && n.push(`* _(returns)_ - ${h.returns}`),
							n.push(`

`),
							n.join("")
						);
					}
				}
			},
		),
		define(
			de[3342],
			he([1, 0, 9, 30, 81, 25, 88, 101, 10, 113]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Rmc = void 0);
				let u = class {
					constructor(h, c, n, g) {
						(this.b = c), (this.c = n), (this.d = g);
						const p = h.getProxy(C.$mbb.ExtHostConfiguration);
						p.$initializeConfiguration(this.f()),
							(this.a = n.onDidChangeConfiguration((o) => {
								p.$acceptConfigurationChanged(this.f(), o.change);
							}));
					}
					f() {
						const h = {
							...this.c.getConfigurationData(),
							configurationScopes: [],
						};
						return (
							(!this.d.isBuilt || this.d.isExtensionDevelopment) &&
								(h.configurationScopes = (0, w.$3o)()),
							h
						);
					}
					dispose() {
						this.a.dispose();
					}
					$updateConfigurationOption(h, c, n, g, p) {
						return (
							(g = {
								resource: g?.resource ? t.URI.revive(g.resource) : void 0,
								overrideIdentifier: g?.overrideIdentifier,
							}),
							this.g(h, c, n, g, p)
						);
					}
					$removeConfigurationOption(h, c, n, g) {
						return (
							(n = {
								resource: n?.resource ? t.URI.revive(n.resource) : void 0,
								overrideIdentifier: n?.overrideIdentifier,
							}),
							this.g(h, c, void 0, n, g)
						);
					}
					g(h, c, n, g, p) {
						h = h ?? this.i(c, g);
						const o = this.c.inspect(c, g);
						switch (h) {
							case m.ConfigurationTarget.MEMORY:
								return this.h(c, n, h, o?.memory?.override, g, p);
							case m.ConfigurationTarget.WORKSPACE_FOLDER:
								return this.h(c, n, h, o?.workspaceFolder?.override, g, p);
							case m.ConfigurationTarget.WORKSPACE:
								return this.h(c, n, h, o?.workspace?.override, g, p);
							case m.ConfigurationTarget.USER_REMOTE:
								return this.h(c, n, h, o?.userRemote?.override, g, p);
							default:
								return this.h(c, n, h, o?.userLocal?.override, g, p);
						}
					}
					h(h, c, n, g, p, o) {
						return (
							(p =
								o === !0
									? p
									: o === !1
										? { resource: p.resource }
										: p.overrideIdentifier && g !== void 0
											? p
											: { resource: p.resource }),
							this.c.updateValue(h, c, p, n, { donotNotifyError: !0 })
						);
					}
					i(h, c) {
						if (
							c.resource &&
							this.b.getWorkbenchState() === E.WorkbenchState.WORKSPACE
						) {
							const n = i.$Io
								.as(w.$No.Configuration)
								.getConfigurationProperties();
							if (
								n[h] &&
								(n[h].scope === w.ConfigurationScope.RESOURCE ||
									n[h].scope === w.ConfigurationScope.LANGUAGE_OVERRIDABLE)
							)
								return m.ConfigurationTarget.WORKSPACE_FOLDER;
						}
						return m.ConfigurationTarget.WORKSPACE;
					}
				};
				(e.$Rmc = u),
					(e.$Rmc = u =
						Ne(
							[
								(0, d.$tmc)(C.$lbb.MainThreadConfiguration),
								j(1, E.$Vi),
								j(2, m.$gj),
								j(3, r.$Ti),
							],
							u,
						));
			},
		),
		define(
			de[3343],
			he([1, 0, 9, 6, 3, 88, 101, 472, 33]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ymc = void 0);
				class r {
					constructor(h, c) {
						(this.e = h),
							(this.f = c),
							(this.a = 0),
							(this.b = new Map()),
							(this.c = new Map());
					}
					enqueue(h, c) {
						const n = ++this.a,
							g = new Promise((o) => {
								this.b.set(n, { id: n, uri: h }), this.c.set(n, o), this.g();
							}),
							p = c.onCancellationRequested(() => {
								this.b.delete(n), this.c.delete(n);
							});
						return g.finally(() => p.dispose());
					}
					g() {
						typeof this.d != "number" &&
							(this.d = setTimeout(() => {
								const h = this.b,
									c = this.c;
								this.e
									.$provideDecorations(
										this.f,
										[...h.values()],
										m.CancellationToken.None,
									)
									.then((n) => {
										for (const [g, p] of c) p(n[g]);
									}),
									(this.b = new Map()),
									(this.c = new Map()),
									(this.d = void 0);
							}, 0));
					}
				}
				let u = class {
					constructor(h, c) {
						(this.c = c),
							(this.a = new Map()),
							(this.b = h.getProxy(E.$mbb.ExtHostDecorations));
					}
					dispose() {
						this.a.forEach((h) => (0, w.$Vc)(h)), this.a.clear();
					}
					$registerDecorationProvider(h, c) {
						const n = new i.$re(),
							g = new r(this.b, h),
							p = this.c.registerDecorationsProvider({
								label: c,
								onDidChange: n.event,
								provideDecorations: async (o, f) => {
									const b = await g.enqueue(o, f);
									if (!b) return;
									const [s, l, y, $] = b;
									return {
										weight: 10,
										bubble: s ?? !1,
										color: $?.id,
										tooltip: l,
										letter: y,
									};
								},
							});
						this.a.set(h, [n, p]);
					}
					$onDidChange(h, c) {
						const n = this.a.get(h);
						if (n) {
							const [g] = n;
							g.fire(c && c.map((p) => t.URI.revive(p)));
						}
					}
					$unregisterDecorationProvider(h) {
						const c = this.a.get(h);
						c && ((0, w.$Vc)(c), this.a.delete(h));
					}
				};
				(e.$Ymc = u),
					(e.$Ymc = u =
						Ne([(0, C.$tmc)(E.$lbb.MainThreadDecorations), j(1, d.$sPb)], u));
			},
		),
		define(
			de[3344],
			he([1, 0, 90, 9, 88, 101, 68]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Zmc = void 0);
				let d = class {
					constructor(r, u, a) {
						(this.d = u),
							(this.e = a),
							(this.a = new Set()),
							(this.b = r.getProxy(w.$mbb.ExtHostDiagnostics)),
							(this.c = this.d.onMarkerChanged(this.f, this));
					}
					dispose() {
						this.c.dispose(),
							this.a.forEach((r) => this.d.changeAll(r, [])),
							this.a.clear();
					}
					f(r) {
						const u = [];
						for (const a of r) {
							const h = this.d.read({ resource: a });
							if (h.length === 0) u.push([a, []]);
							else {
								const c = h.filter((n) => !this.a.has(n.owner));
								c.length > 0 && u.push([a, c]);
							}
						}
						u.length > 0 && this.b.$acceptMarkersChange(u);
					}
					$changeMany(r, u) {
						for (const a of u) {
							const [h, c] = a;
							if (c)
								for (const n of c) {
									if (n.relatedInformation)
										for (const g of n.relatedInformation)
											g.resource = i.URI.revive(g.resource);
									n.code &&
										typeof n.code != "string" &&
										(n.code.target = i.URI.revive(n.code.target));
								}
							this.d.changeOne(r, this.e.asCanonicalUri(i.URI.revive(h)), c);
						}
						this.a.add(r);
					}
					$clear(r) {
						this.d.changeAll(r, []), this.a.delete(r);
					}
				};
				(e.$Zmc = d),
					(e.$Zmc = d =
						Ne(
							[
								(0, E.$tmc)(w.$lbb.MainThreadDiagnostics),
								j(1, t.$aM),
								j(2, C.$Vl),
							],
							d,
						));
			},
		),
		define(
			de[3345],
			he([1, 0, 9, 88, 101, 57, 23]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				var d;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1mc = void 0);
				let m = (d = class {
					constructor(u, a) {
						this.a = a;
					}
					dispose() {}
					async $showOpenDialog(u) {
						const a = d.b(u);
						return (
							a.defaultUri || (a.defaultUri = await this.a.defaultFilePath()),
							Promise.resolve(this.a.showOpenDialog(a))
						);
					}
					async $showSaveDialog(u) {
						const a = d.c(u);
						return (
							a.defaultUri || (a.defaultUri = await this.a.defaultFilePath()),
							Promise.resolve(this.a.showSaveDialog(a))
						);
					}
					static b(u) {
						const a = {
							openLabel: u?.openLabel || void 0,
							canSelectFiles:
								u?.canSelectFiles ||
								(!u?.canSelectFiles && !u?.canSelectFolders),
							canSelectFolders: u?.canSelectFolders,
							canSelectMany: u?.canSelectMany,
							defaultUri: u?.defaultUri ? t.URI.revive(u.defaultUri) : void 0,
							title: u?.title || void 0,
							availableFileSystems: u?.allowUIResources
								? [C.Schemas.vscodeRemote, C.Schemas.file]
								: [],
						};
						if (u?.filters) {
							a.filters = [];
							for (const [h, c] of Object.entries(u.filters))
								a.filters.push({ name: h, extensions: c });
						}
						return a;
					}
					static c(u) {
						const a = {
							defaultUri: u?.defaultUri ? t.URI.revive(u.defaultUri) : void 0,
							saveLabel: u?.saveLabel || void 0,
							title: u?.title || void 0,
						};
						if (u?.filters) {
							a.filters = [];
							for (const [h, c] of Object.entries(u.filters))
								a.filters.push({ name: h, extensions: c });
						}
						return a;
					}
				});
				(e.$1mc = m),
					(e.$1mc =
						m =
						d =
							Ne([(0, w.$tmc)(i.$lbb.MainThreadDialogs), j(1, E.$IO)], m));
			},
		),
		define(
			de[3346],
			he([1, 0, 29, 3, 9, 188, 17, 200, 67, 61, 42, 101, 88, 33]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2mc = void 0);
				let n = class {
					constructor(p, o, f, b, s) {
						(this.d = o),
							(this.e = f),
							(this.f = b),
							(this.g = s),
							(this.a = new i.$0c()),
							(this.b = new Map()),
							(this.c = p.getProxy(h.$mbb.ExtHostDocumentContentProviders));
					}
					dispose() {
						this.a.dispose(), (0, i.$Vc)(this.b.values());
					}
					$registerTextContentProvider(p, o) {
						const f = this.d.registerTextModelContentProvider(o, {
							provideTextContent: (b) =>
								this.c.$provideTextDocumentContent(p, b).then((s) => {
									if (typeof s == "string") {
										const l = s.substr(0, 1 + s.search(/\r?\n/)),
											y = this.e.createByFilepathOrFirstLine(b, l);
										return this.f.createModel(s, y, b);
									}
									return null;
								}),
						});
						this.a.set(p, f);
					}
					$unregisterTextContentProvider(p) {
						this.a.deleteAndDispose(p);
					}
					async $onVirtualDocumentChange(p, o) {
						const f = this.f.getModel(w.URI.revive(p));
						if (!f) return;
						this.b.get(f.id)?.cancel();
						const s = new c.$Ce();
						this.b.set(f.id, s);
						try {
							const l = await this.g.computeMoreMinimalEdits(f.uri, [
								{ text: o, range: f.getFullModelRange() },
							]);
							if ((this.b.delete(f.id), s.token.isCancellationRequested))
								return;
							l &&
								l.length > 0 &&
								f.applyEdits(
									l.map((y) => E.$jL.replace(C.$iL.lift(y.range), y.text)),
								);
						} catch (l) {
							(0, t.$4)(l);
						}
					}
				};
				(e.$2mc = n),
					(e.$2mc = n =
						Ne(
							[
								(0, a.$tmc)(h.$lbb.MainThreadDocumentContentProviders),
								j(1, u.$MO),
								j(2, r.$nM),
								j(3, m.$QO),
								j(4, d.$Cxb),
							],
							n,
						));
			},
		),
		define(
			de[3347],
			he([1, 0, 3, 88, 101, 665, 9]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Koc = void 0);
				let d = class extends t.$1c {
					constructor(r, u) {
						super(), (this.a = u);
					}
					$download(r, u) {
						return this.a.download(C.URI.revive(r), C.URI.revive(u));
					}
				};
				(e.$Koc = d),
					(e.$Koc = d =
						Ne(
							[(0, w.$tmc)(i.$lbb.MainThreadDownloadService), j(1, E.$gp)],
							d,
						));
			},
		),
		define(
			de[3348],
			he([1, 0, 4, 5, 101, 15, 781, 88]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$moc = void 0);
				class m {
					constructor(a) {
						(this.b = 1e4), (this.a = a.getProxy(d.$mbb.ExtHostWorkspace));
					}
					async participate(a, h) {
						const c = new Promise((n, g) => {
							setTimeout(
								() => g(new Error((0, t.localize)(2539, null))),
								this.b,
							),
								this.a
									.$onWillCreateEditSessionIdentity(a.uri, h, this.b)
									.then(n, g);
						});
						return (0, E.$Bh)(c, h);
					}
				}
				let r = class {
					constructor(a, h, c) {
						(this.b = c),
							(this.a = this.b.addEditSessionIdentityCreateParticipant(
								h.createInstance(m, a),
							));
					}
					dispose() {
						this.a.dispose();
					}
				};
				(e.$moc = r), (e.$moc = r = Ne([w.$umc, j(1, i.$Li), j(2, C.$O8)], r));
			},
		),
		define(
			de[1820],
			he([1, 0, 6, 3, 38, 17, 104, 98, 254, 88, 24, 439, 389]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6mc = e.$5mc = void 0);
				class c {
					static readFromEditor(p, o, f) {
						const b = c.c(p, f),
							s = c.d(p, o, f),
							l = c.f(p, f);
						return new c(b, s, l);
					}
					static c(p, o) {
						let f = null;
						return (
							o && (f = o.getSelections()),
							!f && p && (f = p.selections),
							f || (f = [new C.$kL(1, 1, 1, 1)]),
							f
						);
					}
					static d(p, o, f) {
						if (o.isDisposed()) {
							if (p) return p.options;
							throw new Error("No valid properties");
						}
						let b, s;
						if (f) {
							const y = f.getOptions(),
								$ = y.get(w.EditorOption.lineNumbers);
							(b = y.get(w.EditorOption.cursorStyle)), (s = $.renderType);
						} else
							p
								? ((b = p.options.cursorStyle), (s = p.options.lineNumbers))
								: ((b = w.TextEditorCursorStyle.Line),
									(s = w.RenderLineNumbersType.On));
						const l = o.getOptions();
						return {
							insertSpaces: l.insertSpaces,
							tabSize: l.tabSize,
							indentSize: l.indentSize,
							originalIndentSize: l.originalIndentSize,
							cursorStyle: b,
							lineNumbers: s,
						};
					}
					static f(p, o) {
						return o ? o.getVisibleRanges() : [];
					}
					constructor(p, o, f) {
						(this.selections = p), (this.options = o), (this.visibleRanges = f);
					}
					generateDelta(p, o) {
						const f = { options: null, selections: null, visibleRanges: null };
						return (
							(!p || !c.g(p.selections, this.selections)) &&
								(f.selections = {
									selections: this.selections,
									source: o ?? void 0,
								}),
							(!p || !c.j(p.options, this.options)) &&
								(f.options = this.options),
							(!p || !c.h(p.visibleRanges, this.visibleRanges)) &&
								(f.visibleRanges = this.visibleRanges),
							f.selections || f.options || f.visibleRanges ? f : null
						);
					}
					static g(p, o) {
						return (0, u.$yb)(p, o, (f, b) => f.equalsSelection(b));
					}
					static h(p, o) {
						return (0, u.$yb)(p, o, (f, b) => f.equalsRange(b));
					}
					static j(p, o) {
						return (p && !o) || (!p && o)
							? !1
							: !p && !o
								? !0
								: p.tabSize === o.tabSize &&
									p.indentSize === o.indentSize &&
									p.insertSpaces === o.insertSpaces &&
									p.cursorStyle === o.cursorStyle &&
									p.lineNumbers === o.lineNumbers;
					}
				}
				e.$5mc = c;
				class n {
					constructor(p, o, f, b, s, l, y) {
						(this.j = new i.$Zc()),
							(this.m = new i.$Zc()),
							(this.c = p),
							(this.d = o),
							(this.k = null),
							(this.n = null),
							(this.l = b),
							(this.f = s),
							(this.g = l),
							(this.h = y),
							(this.o = new t.$re()),
							this.j.add(
								this.d.onDidChangeOptions(($) => {
									this.p(null);
								}),
							),
							this.setCodeEditor(f),
							this.p(null);
					}
					dispose() {
						this.j.dispose(), (this.k = null), this.m.dispose();
					}
					p(p) {
						this.q(c.readFromEditor(this.n, this.d, this.k), p);
					}
					q(p, o) {
						const f = p.generateDelta(this.n, o);
						(this.n = p), f && this.o.fire(f);
					}
					getId() {
						return this.c;
					}
					getModel() {
						return this.d;
					}
					getCodeEditor() {
						return this.k;
					}
					hasCodeEditor(p) {
						return this.k === p;
					}
					setCodeEditor(p) {
						if (
							!this.hasCodeEditor(p) &&
							(this.m.clear(), (this.k = p), this.k)
						) {
							this.m.add(
								this.k.onDidChangeModel(() => {
									this.setCodeEditor(null);
								}),
							),
								this.m.add(
									this.k.onDidFocusEditorWidget(() => {
										this.l.onGainedFocus();
									}),
								),
								this.m.add(
									this.k.onDidBlurEditorWidget(() => {
										this.l.onLostFocus();
									}),
								);
							let o = null;
							this.m.add(
								this.f.onIsCaughtUpWithContentChanges((s) => {
									if (s.toString() === this.d.uri.toString()) {
										const l = o;
										(o = null), this.p(l);
									}
								}),
							);
							const f = () => this.k && this.k.getModel() === this.d,
								b = (s) => {
									this.f.isCaughtUpWithContentChanges(this.d.uri)
										? ((o = null), this.p(s))
										: (o = s);
								};
							this.m.add(
								this.k.onDidChangeCursorSelection((s) => {
									f() && b(s.source);
								}),
							),
								this.m.add(
									this.k.onDidChangeConfiguration((s) => {
										f() && b(null);
									}),
								),
								this.m.add(
									this.k.onDidLayoutChange(() => {
										f() && b(null);
									}),
								),
								this.m.add(
									this.k.onDidScrollChange(() => {
										f() && b(null);
									}),
								),
								this.p(null);
						}
					}
					isVisible() {
						return !!this.k;
					}
					getProperties() {
						return this.n;
					}
					get onPropertiesChanged() {
						return this.o.event;
					}
					setSelections(p) {
						if (this.k) {
							this.k.setSelections(p);
							return;
						}
						const o = p.map(C.$kL.liftSelection);
						this.q(new c(o, this.n.options, this.n.visibleRanges), null);
					}
					r(p) {
						const o = this.g.getCreationOptions(
							this.d.getLanguageId(),
							this.d.uri,
							this.d.isForSimpleWidget,
						);
						if (p.tabSize === "auto" || p.insertSpaces === "auto") {
							let b = o.insertSpaces,
								s = o.tabSize;
							p.insertSpaces !== "auto" &&
								typeof p.insertSpaces < "u" &&
								(b = p.insertSpaces),
								p.tabSize !== "auto" &&
									typeof p.tabSize < "u" &&
									(s = p.tabSize),
								this.d.detectIndentation(b, s);
							return;
						}
						const f = {};
						typeof p.insertSpaces < "u" && (f.insertSpaces = p.insertSpaces),
							typeof p.tabSize < "u" && (f.tabSize = p.tabSize),
							typeof p.indentSize < "u" && (f.indentSize = p.indentSize),
							this.d.updateOptions(f);
					}
					setConfiguration(p) {
						if ((this.r(p), !!this.k)) {
							if (p.cursorStyle) {
								const o = (0, w.cursorStyleToString)(p.cursorStyle);
								this.k.updateOptions({ cursorStyle: o });
							}
							if (typeof p.lineNumbers < "u") {
								let o;
								switch (p.lineNumbers) {
									case w.RenderLineNumbersType.On:
										o = "on";
										break;
									case w.RenderLineNumbersType.Relative:
										o = "relative";
										break;
									case w.RenderLineNumbersType.Interval:
										o = "interval";
										break;
									default:
										o = "off";
								}
								this.k.updateOptions({ lineNumbers: o });
							}
						}
					}
					setDecorations(p, o) {
						this.k && this.k.setDecorationsByType("exthost-api", p, o);
					}
					setDecorationsFast(p, o) {
						if (!this.k) return;
						const f = [];
						for (let b = 0, s = Math.floor(o.length / 4); b < s; b++)
							f[b] = new E.$iL(
								o[4 * b],
								o[4 * b + 1],
								o[4 * b + 2],
								o[4 * b + 3],
							);
						this.k.setDecorationsByTypeFast(p, f);
					}
					revealRange(p, o) {
						if (this.k)
							switch (o) {
								case r.TextEditorRevealType.Default:
									this.k.revealRange(p, d.ScrollType.Smooth);
									break;
								case r.TextEditorRevealType.InCenter:
									this.k.revealRangeInCenter(p, d.ScrollType.Smooth);
									break;
								case r.TextEditorRevealType.InCenterIfOutsideViewport:
									this.k.revealRangeInCenterIfOutsideViewport(
										p,
										d.ScrollType.Smooth,
									);
									break;
								case r.TextEditorRevealType.AtTop:
									this.k.revealRangeAtTop(p, d.ScrollType.Smooth);
									break;
								default:
									console.warn(`Unknown revealType: ${o}`);
									break;
							}
					}
					isFocused() {
						return this.k ? this.k.hasTextFocus() : !1;
					}
					matches(p) {
						return p ? p.getControl() === this.k : !1;
					}
					applyEdits(p, o, f) {
						if (this.d.getVersionId() !== p || !this.k) return !1;
						typeof f.setEndOfLine < "u" && this.d.pushEOL(f.setEndOfLine);
						const b = o.map((s) => ({
							range: E.$iL.lift(s.range),
							text: s.text,
							forceMoveMarkers: s.forceMoveMarkers,
						}));
						return (
							f.undoStopBefore && this.k.pushUndoStop(),
							this.k.executeEdits("MainThreadTextEditor", b),
							f.undoStopAfter && this.k.pushUndoStop(),
							!0
						);
					}
					async insertSnippet(p, o, f, b) {
						if (!this.k || !this.k.hasModel()) return !1;
						let s;
						if (h.$Izb.guessNeedsClipboard(o)) {
							const v = new a.$Mzb(
								this.k,
								a.CodeEditorStateFlag.Value | a.CodeEditorStateFlag.Position,
							);
							if (((s = await this.h.readText()), !v.validate(this.k)))
								return !1;
						}
						if (this.k.getModel().getVersionId() !== p) return !1;
						const y = m.$aDb.get(this.k);
						if (!y) return !1;
						this.k.focus();
						const $ = f.map((v) => ({ range: E.$iL.lift(v), template: o }));
						return (
							y.apply($, {
								overwriteBefore: 0,
								overwriteAfter: 0,
								undoStopBefore: b.undoStopBefore,
								undoStopAfter: b.undoStopAfter,
								clipboardText: s,
							}),
							!0
						);
					}
				}
				e.$6mc = n;
			},
		),
		define(
			de[3349],
			he([1, 0, 6, 3, 20, 5, 88, 101]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Imc = void 0);
				const m = (0, E.$Mi)("embeddingsService");
				class r {
					constructor() {
						(this.b = new t.$re()),
							(this.onDidChange = this.b.event),
							(this.a = new Map());
					}
					get allProviders() {
						return this.a.keys();
					}
					registerProvider(h, c) {
						return (
							this.a.set(h, c),
							this.b.fire(),
							{
								dispose: () => {
									this.a.delete(h), this.b.fire();
								},
							}
						);
					}
					computeEmbeddings(h, c, n) {
						const g = this.a.get(h);
						return g
							? g.provideEmbeddings(c, n)
							: Promise.reject(
									new Error(`No embeddings provider registered with id: ${h}`),
								);
					}
				}
				(0, w.$lK)(m, r, w.InstantiationType.Delayed);
				let u = class {
					constructor(h, c) {
						(this.d = c),
							(this.a = new i.$Zc()),
							(this.b = this.a.add(new i.$0c())),
							(this.c = h.getProxy(C.$mbb.ExtHostEmbeddings)),
							this.a.add(
								c.onDidChange(() => {
									this.c.$acceptEmbeddingModels(Array.from(c.allProviders));
								}),
							);
					}
					dispose() {
						this.a.dispose();
					}
					$registerEmbeddingProvider(h, c) {
						const n = this.d.registerProvider(c, {
							provideEmbeddings: (g, p) => this.c.$provideEmbeddings(h, g, p),
						});
						this.b.set(h, n);
					}
					$unregisterEmbeddingProvider(h) {
						this.b.deleteAndDispose(h);
					}
					$computeEmbeddings(h, c, n) {
						return this.d.computeEmbeddings(h, c, n);
					}
				};
				(e.$Imc = u),
					(e.$Imc = u =
						Ne([(0, d.$tmc)(C.$lbb.MainThreadEmbeddings), j(1, m)], u));
			},
		),
		