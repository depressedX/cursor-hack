define(de[134], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ComposerEditHistoryActions =
					e.$zJ =
					e.$yJ =
					e.$xJ =
					e.$tJ =
					e.MembershipType =
					e.CppSource =
					e.DevOnlyRedisComands =
					e.DevOnlyRedisActions =
					e.LspActions =
					e.GitActions =
					e.TreeSitterActions =
					e.MiscActions =
					e.FileRetrievalActions =
					e.ContextGraphActions =
					e.CommitNotesServiceActions =
					e.FileSyncActions =
					e.ExtHostInfoActions =
					e.EditHistoryActions =
					e.ConfigServiceActions =
					e.$oJ =
					e.LocalRepoId =
					e.LintResult =
					e.LspSubgraphContextType =
					e.UploadType =
					e.DiffOrPrType =
					e.DiffType =
					e.PRState =
					e.SearchType =
						void 0),
				(e.$pJ = a),
				(e.$qJ = h),
				(e.$rJ = c),
				(e.$sJ = k),
				(e.$uJ = L),
				(e.$vJ = D),
				(e.$wJ = M);
			var t;
			(function (A) {
				(A.keyword = "keyword"), (A.vector = "vector");
			})(t || (e.SearchType = t = {}));
			var i;
			(function (A) {
				(A.OPEN = "open"), (A.CLOSED = "closed"), (A.MERGED = "merged");
			})(i || (e.PRState = i = {}));
			var w;
			(function (A) {
				(A.TO_MAIN_FROM_BRANCH = "to_main_from_branch"),
					(A.TO_HEAD = "to_head");
			})(w || (e.DiffType = w = {}));
			var E;
			(function (A) {
				(A.Diff = "diff"), (A.Pr = "pr");
			})(E || (e.DiffOrPrType = E = {}));
			var C;
			(function (A) {
				(A.Upload = "upload"), (A.Syncing = "syncing");
			})(C || (e.UploadType = C = {}));
			var d;
			(function (A) {
				(A.Hover = "Hover"),
					(A.Definition = "Definition"),
					(A.TypeDefinition = "TypeDefinition"),
					(A.Reference = "Reference"),
					(A.Implementation = "Implementation");
			})(d || (e.LspSubgraphContextType = d = {}));
			var m;
			(function (A) {
				(A.OK = "OK"),
					(A.ERROR = "ERROR"),
					(A.NO_CHANGES_FOUND = "NO_CHANGES_FOUND"),
					(A.NONE = "NONE");
			})(m || (e.LintResult = m = {}));
			var r;
			(function (A) {
				A.id = "local";
			})(r || (e.LocalRepoId = r = {}));
			const u = "x-client-key";
			e.$oJ = "x-ghost-mode";
			function a(A) {
				if (A === !0) return "true";
				if (A === !1) return "false";
				if (A === void 0) return "implicit-false";
				{
					let R = A;
					return (R = R), "true";
				}
			}
			function h(A) {
				let R = 165;
				for (let O = 0; O < A.length; O++)
					(A[O] = (A[O] ^ R) + (O % 256)), (R = A[O]);
				return A;
			}
			function c({
				req: A,
				machineId: R,
				macMachineId: O,
				base64Fn: B,
				cursorVersion: U,
				privacyMode: z,
				backupRequestId: F,
				clientKey: x,
			}) {
				try {
					const H = Math.floor(Date.now() / 1e6),
						q = new Uint8Array([
							(H >> 40) & 255,
							(H >> 32) & 255,
							(H >> 24) & 255,
							(H >> 16) & 255,
							(H >> 8) & 255,
							H & 255,
						]),
						V = h(q),
						G = B(V);
					A.header.set(
						"x-cursor-checksum",
						O === void 0 ? `${G}${R}` : `${G}${R}/${O}`,
					);
				} catch {}
				A.header.set("x-cursor-client-version", U),
					A.header.set(e.$oJ, a(z)),
					x !== void 0 && A.header.set(u, x);
				try {
					const H = Intl.DateTimeFormat().resolvedOptions().timeZone;
					A.header.set("x-cursor-timezone", H);
				} catch {}
				try {
					F &&
						(A.header.has("x-request-id") || A.header.set("x-request-id", F),
						A.header.has("x-amzn-trace-id") ||
							A.header.set("x-amzn-trace-id", `Root=${F}`));
				} catch {}
			}
			var n;
			(function (A) {
				A.GetCachedServerConfig = "aiServerConfigService.getCachedServerConfig";
			})(n || (e.ConfigServiceActions = n = {}));
			var g;
			(function (A) {
				(A.Ack = "editHistoryDiffFormatter.ack"),
					(A.GetModelValueInRanges =
						"editHistoryDiffFormatter.getModelValueInRanges"),
					(A.GetModelValue = "editHistoryDiffFormatter.getModelValue"),
					(A.ProcessModelChange =
						"editHistoryDiffFormatter.processModelChange"),
					(A.FormatDiffHistory = "editHistoryDiffFormatter.formatDiffHistory"),
					(A.CloseCurrentCmdkDiffHistoryPatch =
						"editHistoryDiffFormatter.closeCurrentCmdkDiffHistoryPatch"),
					(A.InitModel = "editHistoryDiffFormatter.initModel"),
					(A.CompileGlobalDiffTrajectories =
						"editHistoryDiffFormatter.compileGlobalDiffTrajectories"),
					(A.CompileGlobalDiffTrajectoriesForCmdk =
						"editHistoryDiffFormatter.compileGlobalDiffTrajectoriesForCmdk"),
					(A.IsRevertingToRecentModel =
						"editHistoryDiffFormatter.isRevertingToRecentModel"),
					(A.IsSuggestingRecentlyRejectedEdit =
						"editHistoryDiffFormatter.isSuggestingRecentlyRejectedEdit"),
					(A.RecordRejectedEdit =
						"editHistoryDiffFormatter.recordRejectedEdit"),
					(A.ProcessModelChangeLoop =
						"editHistoryDiffFormatter.processModelChangeLoop"),
					(A.SetEnableCppWhitespaceDiffHistoryMode =
						"editHistoryDiffFormatter.setEnableCppWhitespaceDiffHistoryMode"),
					(A.SetEnableCppIncludeUnchangedLines =
						"editHistoryDiffFormatter.setEnableCppIncludeUnchangedLines");
			})(g || (e.EditHistoryActions = g = {}));
			var p;
			(function (A) {
				A.GetExtHostInfo = "extHostInfo.getExtHostInfo";
			})(p || (e.ExtHostInfoActions = p = {}));
			var o;
			(function (A) {
				(A.GetFileSyncUpdates = "fileSync.getFileSyncUpdates"),
					(A.ShouldRelyOnFileSyncForFile =
						"fileSync.shouldRelyOnFileSyncForFile"),
					(A.GetFileSyncEncryptionHeader =
						"fileSync.getFileSyncEncryptionHeader"),
					(A.ResetSequentialSuccessfulSync =
						"fileSync.resetSequentialSuccessfulSync");
			})(o || (e.FileSyncActions = o = {}));
			var f;
			(function (A) {
				(A.GetCommitNotes = "commitNotesService.getCommitNotes"),
					(A.SearchCommitNotes = "commitNotesService.searchCommitNotes"),
					(A.InitializeNotes = "commitNotesService.initialiezNotes");
			})(f || (e.CommitNotesServiceActions = f = {}));
			var b;
			(function (A) {
				(A.GetRelatedFiles = "contextGraph.getRelatedFiles"),
					(A.InitializeWorkspace = "contextGraph.initializeWorkspace"),
					(A.GetWorkspaceSyncStatus = "contextGraph.getWorkspaceSyncStatus"),
					(A.ResetWorkspace = "contextGraph.resetWorkspace");
			})(b || (e.ContextGraphActions = b = {}));
			var s;
			(function (A) {
				A.GetDirectory = "fileRetrievalActions.readDirectory";
			})(s || (e.FileRetrievalActions = s = {}));
			var l;
			(function (A) {
				(A.CheckClaudeAPIKey = "misc.checkClaudeAPIKey"),
					(A.CheckGoogleAPIKey = "misc.checkGoogleAPIKey");
			})(l || (e.MiscActions = l = {}));
			var y;
			(function (A) {
				(A.GetReferencedSymbols = "treesitter.getReferencedSymbols"),
					(A.GetDefinedSymbols = "treesitter.getDefinedSymbols"),
					(A.GetImportantDefinitionNames =
						"treesitter.getImportantDefinitionNames");
			})(y || (e.TreeSitterActions = y = {}));
			var $;
			(function (A) {
				(A.GetRecentCommits = "git.getRecentCommits"),
					(A.GetRecentCommitHashesTouchingFile =
						"git.getRecentCommitHashesTouchingFile"),
					(A.GetCommitByHash = "git.getCommitByHash"),
					(A.GetCommitDetailsByHashes = "git.getCommitDetailsByHashes"),
					(A.GetCurrentIndexAndRecentCommits =
						"git.getCurrentIndexAndRecentCommits");
			})($ || (e.GitActions = $ = {}));
			var v;
			(function (A) {
				A.GetFileImports = "lsp.getFileImports";
			})(v || (e.LspActions = v = {}));
			var S;
			(function (A) {
				(A.Get = "devOnlyRedis.get"),
					(A.Set = "devOnlyRedis.set"),
					(A.SubscribeToChannelForKey =
						"devOnlyRedis.subscribeToChannelForKey"),
					(A.UnsubscribeFromChannelForKey =
						"devOnlyRedis.unsubscribeFromChannelForKey");
			})(S || (e.DevOnlyRedisActions = S = {}));
			var I;
			(function (A) {
				A.ValueChanged = "devOnlyRedis.valueChanged";
			})(I || (e.DevOnlyRedisComands = I = {}));
			var T;
			(function (A) {
				(A.Unknown = "unknown"),
					(A.LineChange = "line_change"),
					(A.Typing = "typing"),
					(A.OptionHold = "option_hold"),
					(A.LinterErrors = "lint_errors"),
					(A.ParameterHints = "parameter_hints"),
					(A.CursorPrediction = "cursor_prediction"),
					(A.ManualTrigger = "manual_trigger"),
					(A.EditorChange = "editor_change");
			})(T || (e.CppSource = T = {}));
			var P;
			(function (A) {
				(A.FREE = "free"),
					(A.PRO = "pro"),
					(A.ENTERPRISE = "enterprise"),
					(A.FREE_TRIAL = "free_trial");
			})(P || (e.MembershipType = P = {}));
			function k(A) {
				return A === P.PRO || A === P.ENTERPRISE || A === P.FREE_TRIAL;
			}
			e.$tJ = "cursor.cpp.disabledLanguages";
			function L(A, R, O) {
				return A === void 0 || A.isOn === !1
					? !1
					: !(R === !1 || (O === !1 && !A.shouldLetUserEnableCppEvenIfNotPro));
			}
			function D(A, R, O) {
				if (R !== void 0) {
					const B = [
						".env",
						".env.local",
						".env.development",
						".env.production",
						".env.test",
						".env.testing",
						".env.development.local",
						".env.production.local",
						".env.test.local",
						".env.testing.local",
					];
					if (
						(R.languageId === "plaintext" &&
							B.some((U) => R.fsPath.endsWith(U))) ||
						M(R.languageId, O)
					)
						return !1;
				}
				return A === !0;
			}
			function M(A, R) {
				return !!(Array.isArray(R) && R.includes(A));
			}
			(e.$xJ = "cursor.general.disableHttp2"),
				(e.$yJ = "cursor.general.gitGraphIndexing"),
				(e.$zJ = [
					"hyper-mode",
					"regular-cmdk",
					"cursor-motion",
					"coalesce-chain",
					"finetuned-instructions",
					"chat-and-apply",
				]);
			var N;
			(function (A) {
				(A.Ack = "composerEditHistoryDiffFormatter.ack"),
					(A.CompileGlobalDiffTrajectories =
						"composerEditHistoryDiffFormatter.compileGlobalDiffTrajectories"),
					(A.FormatDiffHistory =
						"composerEditHistoryDiffFormatter.formatDiffHistory"),
					(A.InitModel = "composerEditHistoryDiffFormatter.initModel"),
					(A.ResetModel = "composerEditHistoryDiffFormatter.resetModel"),
					(A.ProcessModelChange =
						"composerEditHistoryDiffFormatter.processModelChange"),
					(A.GetModelValue = "composerEditHistoryDiffFormatter.getModelValue");
			})(N || (e.ComposerEditHistoryActions = N = {}));
		}),
		define(
			de[45],
			he([1, 0, 13, 193, 2, 148, 3, 47, 8, 5, 1626, 134, 205, 83]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wAb =
						e.$vAb =
						e.$uAb =
						e.$tAb =
						e.$sAb =
						e.$rAb =
						e.$qAb =
						e.$pAb =
						e.$lAb =
						e.$kAb =
						e.$jAb =
						e.$iAb =
						e.$hAb =
						e.$gAb =
						e.$fAb =
						e.$eAb =
						e.$dAb =
						e.$cAb =
						e.$bAb =
						e.$aAb =
						e.$0zb =
							void 0),
					(e.$$zb = n),
					(e.$_zb = g),
					(e.$mAb = p),
					(e.$nAb = o),
					(e.$oAb = f),
					(e.$0zb = (0, r.$Mi)("reactiveStorageService"));
				function n($) {
					const v = JSON.parse(JSON.stringify($));
					return (v.uri = $.uri), v;
				}
				function g($) {
					if (!$) return;
					const v = JSON.parse(JSON.stringify($));
					v.uri = $.uri;
					const S = [...$.data.selections];
					return (
						(v.data = { ...$.data, selections: S }),
						(v.abortController = $.abortController),
						v
					);
				}
				(e.$aAb = "claude-3.5-sonnet"),
					(e.$bAb = "https://cursor.com"),
					(e.$cAb = "https://api2.cursor.sh"),
					(e.$dAb = "https://api3.cursor.sh"),
					(e.$eAb = "https://api4.cursor.sh"),
					(e.$fAb = "https://api4.cursor.sh"),
					(e.$gAb = "https://api3.cursor.sh"),
					(e.$hAb = "https://api3.cursor.sh"),
					(e.$iAb = "https://repo42.cursor.sh"),
					(e.$jAb = "KbZUR41cY7W6zRSdpSUJ7I7mLYBKOCmB"),
					(e.$kAb = "prod.authentication.cursor.sh"),
					(e.$lAb = ["chat", "submit", "context"]);
				function p($, v) {
					const S = $.applicationUserPersistentStorage.haveNotSeen;
					return S === void 0 ? !1 : e.$lAb.find((T) => S[T] === !0) !== v;
				}
				function o($) {
					for (const v of e.$lAb)
						$.setApplicationUserPersistentStorage("haveNotSeen", {
							...$.applicationUserPersistentStorage.haveNotSeen,
							[v]: !0,
						});
				}
				function f($, v) {
					$.setApplicationUserPersistentStorage("haveNotSeen", {
						...$.applicationUserPersistentStorage.haveNotSeen,
						[v]: !1,
					});
				}
				const b = (0, d.$9g)();
				(e.$pAb = {
					composerState: { ...h.$4zb },
					notepadState: { ...h.$5zb },
					bugbotState: { ...h.$3zb },
					aiFeaturesCopyPasteState: { mentions: [] },
					shouldShowViewZoneWhenPreviewBoxIsClipped4: !1,
					syncDevModeColorTheme: !0,
					cppModelsState: h.$9zb,
					autopilotFeatureEnabled: !1,
					isLinterEnabled: !1,
					aiSettings: {
						openAIModel: "claude-3.5-sonnet",
						regularChatModel: "claude-3.5-sonnet",
						cmdKModel: "claude-3.5-sonnet",
						terminalCmdKModel: "claude-3.5-sonnet",
						composerModel: "claude-3.5-sonnet",
						privateFTOpenAIModel: null,
						longContextOpenAIModel: "claude-3-5-sonnet-200k",
					},
					authenticationSettings: { githubLoggedIn: !1 },
					cursorCreds: {
						websiteUrl: e.$bAb,
						backendUrl: e.$cAb,
						authClientId: e.$jAb,
						authDomain: e.$kAb,
						repoBackendUrl: e.$cAb,
						telemBackendUrl: e.$dAb,
						cmdkBackendUrl: e.$gAb,
						hfUrl: e.$hAb,
						geoCppBackendUrl: e.$eAb,
						cppConfigBackendUrl: e.$fAb,
						credentialsDisplayName: "Prod",
					},
					docState: { visibleDocs: [], usableDocs: [], previosulyUsedDocs: [] },
					lastUpdateHiddenTimeInUnixSeconds: 0,
					lintRules: "",
					bubbleTimesLeft: 0,
					showAgentActionDebugger: !1,
					cmdLineHookState: { ignored: !1, timesShown: 0 },
					agentDebuggerState: { priomptLiveMode: !1, isRecordingTasks: !0 },
					showLinterDebugger: !1,
					linterDebuggerState: {
						specificRules: !0,
						compileErrors: !1,
						changeBehavior: !0,
						matchCode: !1,
						relevance: !0,
						userAwareness: !0,
					},
					cacheChatPrompts: !0,
					cmdkDiffHistoryEnabled: !1,
					shouldOnlyImportOnAccept: !0,
					cppAutoImportDecorationStyle: "squiggle",
					lintSettings: {
						forceEnableDiscriminators: [],
						forceDisableDiscriminators: [],
						forceEnableGenerators: [],
						forceDisableGenerators: [],
						watcherThreshold: 0.2,
						watcherDebounceTimeSeconds: 30,
						runOnSaveInstead: !0,
						silenceIfOverlappingWithRegularLinter: !0,
					},
					lastUpgradeToProNotificationTime: 0,
					hallucinatedFunctionsPersistentState: {},
					haveNotSeen: {},
					newUserData: {
						toolUsageCount: {
							plainChat: "legacy",
							contextChat: "legacy",
							intentChat: "legacy",
						},
					},
					azureState: { useAzure: !1 },
					interpreterModeSettings: { interpreterModeByDefault: !1 },
					cppFireOnEveryCursorChange: !1,
					personalDocs: [],
					chunkedStreamingEnabledV2: !0,
					cppCachedTypeaheadEnabled: !0,
					cppInCmdF: !0,
					cppManualTriggerWithOpToken: !1,
					cppTriggerInComments: !0,
					cppShowWhitespaceOnlyChanges: !1,
					fastCppEnabled: !1,
					cppEnabled: !0,
					cppConfig: void 0,
					indexRepository: !0,
					haveNotImportedFromVSC: !1,
					shouldAutoParseCmdKLinks: !1,
					SPECIAL_KEY_lastUpdatedTimeInUnixSeconds: 0,
					aiHyperModeUXType: "auto-accept",
					aiPreviewsEnabled: !0,
					aiPreviewSettings: {
						enabledFeatures: {
							summary: !0,
							relatedFiles: !0,
							relatedCommits: !0,
						},
						summary: { isExpanded: !0 },
						relatedFiles: { isExpanded: !0 },
						relatedCommits: { isExpanded: !1 },
					},
					chatFadeInAnimationEnabled: !1,
					isFileSyncClientEnabled: !0,
					membershipType: void 0,
					isAiReviewInputExpanded: !0,
					useFastApplyModel: !1,
					fastApplyModelType: E.SlashEditRequest_FastApplyModelType.DEFAULT,
					explicitlyEnableSemanticSearch: !1,
					aiCursorHelpEnabled: !0,
					showAllCmdKContexts: !1,
					aiDocAgentEnabled: !1,
					markdownTestString: "",
					cppInPeek: !0,
					fastSemanticSearchEnabled: !1,
					preferredEmbeddingModel: c.EmbeddingModel.UNSPECIFIED,
					cursorPredictionUIExperiments: [],
					oneTimeSettings: {
						shouldDisableGithubCopilot: !0,
						shouldMigrateFromGpt4ToGpt4o: !0,
						shouldMigrateFromGpt4oToClaudeSonnet: !0,
						didMigrateFromGpt4oToClaudeSonnet: !1,
						didMigrateBackFromClaudeSonnetToGpt4o: !1,
					},
					aiReviewPersistentStorage: { customInstructions: "" },
					indexingState: { lastAskedToIndexTime: 0 },
					turboModeOptions: { timesShownUpgradeMessage: 0 },
					internalAnalyticsDebugMode: !1,
				}),
					(e.$qAb = [
						($, v) =>
							v.isBashMode2 === !0
								? (delete v.isBashMode2,
									{
										...v,
										isInterpreterMode: !0,
										interpreterModeSettings: { interpreterModeByDefault: !0 },
									})
								: v,
						($, v) =>
							v.cursorCreds?.cppBackendUrl === void 0
								? {
										...v,
										cursorCreds: {
											...(v.cursorCreds ?? {}),
											cppBackendUrl: e.$dAb,
										},
									}
								: v,
						($, v) => (v.cppEnabled === void 0 && (v.cppEnabled = !0), v),
					]),
					(e.$rAb = {
						tasksData: {
							tasksDataSchemaVersion: 1,
							tasks: [{ type: "draft", taskId: b, instruction: "" }],
							displayedTaskId: b,
							showTabs: !1,
							activeServerTaskUuids: [],
						},
						onboardingMetadata: { shouldAskToIndex: !0, shouldHideWarning: !1 },
						hallucinatedFunctionsWorkspaceState: {},
						persistentChatMetadata: [],
						aiPanePosition: h.AIPanePosition.SIDEBAR,
						shouldRerankByDefault: !1,
						indexingData: {
							preferredEmbeddingModel: c.EmbeddingModel.UNSPECIFIED,
						},
						composerState: h.$1zb,
					}),
					(e.$sAb = [
						($, v) =>
							!v.tasksData || !v.tasksData.tasksDataSchemaVersion
								? { ...v, tasksData: e.$rAb.tasksData }
								: v,
						($, v) => {
							if (
								v.tasksData &&
								v.tasksData.tasks &&
								Array.isArray(v.tasksData.tasks)
							) {
								const S = v.tasksData.tasks.map((I) =>
									typeof I == "object" &&
									I &&
									"type" in I &&
									I.type === "started"
										? { ...I, SPECIAL_KEY_doNotPersist: !1 }
										: I,
								);
								return { ...v, tasksData: { ...v.tasksData, tasks: S } };
							}
							return v;
						},
						($, v) =>
							!v.onboardingMetadata || !v.onboardingMetadata.shouldAskToIndex
								? { ...v, onboardingMetadata: { shouldAskToIndex: !0 } }
								: v,
						($, v) => (
							(0, u.$Wzb)({
								origObject: v,
								pathToKey: [
									"persistentChatMetadata",
									u.SpecialCase.array,
									"injectedContext",
									"usedCodebase",
									"fileResults",
									u.SpecialCase.array,
									"file",
								],
								keyToRemove: "contents",
							}),
							(0, u.$Wzb)({
								origObject: v,
								pathToKey: [
									"persistentChatMetadata",
									u.SpecialCase.array,
									"injectedContext",
									"usedCodebase",
									"codeResults",
									u.SpecialCase.array,
									"codeBlock",
								],
								keyToRemove: "fileContents",
							}),
							(0, u.$Vzb)({
								origObject: v,
								pathToKey: [
									"persistentChatMetadata",
									u.SpecialCase.array,
									"injectedContext",
									"usedCurrentFile",
								],
								keyToKeep: "relativeFilePath",
							}),
							(0, u.$Wzb)({
								origObject: v,
								pathToKey: [
									"persistentChatMetadata",
									u.SpecialCase.array,
									"predictedContext",
									"usedCodebase",
									"fileResults",
									u.SpecialCase.array,
									"file",
								],
								keyToRemove: "contents",
							}),
							(0, u.$Wzb)({
								origObject: v,
								pathToKey: [
									"persistentChatMetadata",
									u.SpecialCase.array,
									"predictedContext",
									"usedCodebase",
									"codeResults",
									u.SpecialCase.array,
									"codeBlock",
								],
								keyToRemove: "fileContents",
							}),
							(0, u.$Vzb)({
								origObject: v,
								pathToKey: [
									"persistentChatMetadata",
									u.SpecialCase.array,
									"predictedContext",
									"usedCurrentFile",
								],
								keyToKeep: "relativeFilePath",
							}),
							v
						),
					]),
					(e.$tAb = {
						composerState: { infoBoxMessage: void 0 },
						notepadState: { notepadEditorFocusSignal: void 0 },
						autopilotState: { conversationHistory: [] },
						aiReaderState: {},
						webCmdKState: { promptBar: void 0 },
						reviewState: {
							generatingState: "norequest",
							gitProviderState: "initializing",
							customInstructions: "",
							entryPoint: null,
							chunks: {},
							buttonState: { state: "working" },
						},
						inprogressAIGenerations: [],
						aiProjectSteps: [],
						multiEditState: {
							active: !1,
							generating: !1,
							chunks: [],
							inprogressEdits: [],
						},
						runningGeneration: !1,
						showingErrorMetadata: { case: null, error: void 0 },
						hallucinatedFunctionsNonPersistentState: {
							locationChooserState: void 0,
							showingHfUuid: void 0,
						},
						showingUpdate: !1,
						inlineDiffs: [],
						simpleDiffs: [],
						repositoryMetadata: { startedPolling: !1 },
						cppPopupState: { cardState: void 0 },
						selectedTab: null,
						promptBars: [],
						maxTokensHit: !1,
						continueBubbles: [],
						lintState: {
							bugs: [],
							dismissedBugs: [],
							lastLintGenerationUuid: null,
							lastLintResult: a.LintResult.NONE,
							lastLintTimestamp: null,
							hoveringOverBugUuid: null,
						},
						cppState: {
							suggestion: void 0,
							additionalSuggestions: [],
							inProgressSuggestions: [],
							candidateSuggestions: {},
							shouldNotTrigger: !1,
							peekViewSuggestion: void 0,
						},
						holdCppState: { isHoldingDownCmdK: !1 },
						showingDocsModal: !1,
						newDoc: void 0,
						shouldShowInsertChatWidget: !1,
						lastCopy: void 0,
						refactorDiffIDs: [],
						aiInterfaceState: { showingNewModal: !1, activeAgents: [] },
						nonPersistentTasksData: { backgroundTasks: [] },
						nonPersistentChatMetadata: [],
						feedbackState: {
							screenshots: [],
							description: void 0,
							type: void 0,
						},
						showUsageBasedPricingModal: void 0,
						showTurboModeModal: void 0,
						repoProgressBars: [],
						repositoryIndexingError: void 0,
						repositoryIndexingStatus: { case: "loading" },
						repositoryLastSyncedTime: void 0,
						cmdkBackgroundContextSelections: [],
						repositoryIndexingJobs: [],
						mainLocalRepositoryProgress: void 0,
						aiHyperModeData: {
							debug: !1,
							hyperRegionsMap: {},
							currentHyperRegion: void 0,
						},
						cursorMotionState: { bars: [] },
						contextGraphState: { relatedFiles: null },
						chatState: { isFocused: !1, recentlyViewedFiles: [] },
						semSearchState: { selectedFile: void 0, codeSelection: void 0 },
					});
				class s extends C.$1c {
					constructor(v) {
						super(),
							(this.a = {
								context: null,
								owner: null,
								owned: null,
								cleanups: null,
							});
					}
					dispose() {
						super.dispose(), (0, t.cleanNode)(this.a);
					}
					createImplicitEffect(v, S) {
						(0, t.runWithOwner)(this.a, () => {
							(0, t.createEffect)(v, S);
						});
					}
					createImplicitResource({ depFn: v, produceFn: S, initialValue: I }) {
						const T = (0, t.runWithOwner)(this.a, () =>
							(0, t.createResource)(v, S, { initialValue: I }),
						);
						if (T === void 0)
							throw new Error("createResource returned undefined");
						return T;
					}
					onChangeEffect({ onChange: v, deps: S, runNowToo: I }) {
						let T = !0;
						I !== void 0 && (T = !I),
							(0, t.runWithOwner)(this.a, () => {
								const P = T
									? (0, t.on)(
											S,
											(k, L, D) => {
												try {
													return v({
														deps: k,
														prevDeps: L,
														prevReturnValue: D,
													});
												} catch (M) {
													console.error(M);
												}
											},
											{ defer: T },
										)
									: (0, t.on)(
											S,
											(k, L, D) => {
												try {
													return v({
														deps: k,
														prevDeps: L,
														prevReturnValue: D,
													});
												} catch (M) {
													console.error(M);
												}
											},
											{ defer: T },
										);
								(0, t.createEffect)(P);
							});
					}
					render(v, S) {
						const I = (0, t.runWithOwner)(this.a, () => (0, w.render)(v, S));
						if (I === void 0) throw new Error("render returned undefined");
						return { dispose: () => I() };
					}
					createSignal(v, S) {
						const I = (0, t.runWithOwner)(this.a, () =>
							(0, t.createSignal)(v, S),
						);
						if (I === void 0) throw new Error("signal returned undefined");
						return I;
					}
					createStore(...[v, S]) {
						const I = (0, t.runWithOwner)(this.a, () =>
							v ? (0, i.createStore)(v, S) : (0, i.createStore)(S),
						);
						if (I === void 0) throw new Error("createStore returned undefined");
						return I;
					}
				}
				e.$uAb = s;
				class l extends m.$Qj {
					static {
						this.d = [];
					}
					static all() {
						return l.d.values();
					}
					constructor(v, S) {
						super(v, null), (this.key = v), (this.f = S);
					}
					getValue(v) {
						return this.f.nonPersistentStorage[this.key];
					}
					toNegated() {
						return this.negate();
					}
					isEqualTo(v) {
						return m.$Rj.create(this.key, v);
					}
					notEqualsTo(v) {
						return m.$Uj.create(this.key, v);
					}
				}
				e.$vAb = l;
				class y {
					constructor(v) {
						this.current = v;
					}
				}
				e.$wAb = y;
			},
		),
		define(
			de[2752],
			he([1, 0, 7, 3, 39, 5, 45, 1595]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				var m;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7dc = void 0),
					(t = mt(t));
				let r = class extends i.$1c {
					static {
						m = this;
					}
					static {
						this.a = 0;
					}
					constructor(a, h, c, n, g, p) {
						super(),
							(this.c = a),
							(this.f = h),
							(this.keybindingService = n),
							(this.g = g),
							(this.h = p),
							(this.id = `InlineGPT4HintViewZone${m.a++}`),
							(this.reactiveStorageRoot = this.D(this.h.createScoped(this))),
							(this.b = t.$("div.inlineGPT4CancelViewZone")),
							this.D((0, d.$6dc)(this.b, c, this));
					}
					cancelAndDispose() {
						this.f(), this.dispose();
					}
					dispose() {
						super.dispose();
					}
					getDomNode() {
						return this.b;
					}
				};
				(e.$7dc = r),
					(e.$7dc = r = m = Ne([j(3, w.$uZ), j(4, E.$Li), j(5, C.$0zb)], r));
			},
		),
		define(
			de[2753],
			he([1, 0, 7, 3, 39, 2699, 5, 45]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				var m;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3dc = void 0),
					(t = mt(t));
				let r = class extends i.$1c {
					static {
						m = this;
					}
					static {
						this.a = 0;
					}
					constructor(a, h, c, n) {
						super(),
							(this.c = a),
							(this.keybindingService = h),
							(this.f = c),
							(this.g = n),
							(this.id = `InlineGPT4HintViewZone${m.a++}`),
							(this.reactiveStorageRoot = this.D(this.g.createScoped(this))),
							(this.b = t.$("div.inlineGPT4HintViewZone")),
							this.D((0, E.$2dc)(this.b, this));
					}
					dispose() {
						super.dispose();
					}
					getDomNode() {
						return this.b;
					}
				};
				(e.$3dc = r),
					(e.$3dc = r = m = Ne([j(1, w.$uZ), j(2, C.$Li), j(3, d.$0zb)], r));
			},
		),
		define(
			de[2754],
			he([1, 0, 7, 3, 39, 45, 2700]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				var d;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ydc = void 0),
					(t = mt(t));
				let m = class extends i.$1c {
					static {
						d = this;
					}
					static {
						this.a = 0;
					}
					constructor(u, a, h) {
						super(),
							(this.c = u),
							(this.keybindingService = a),
							(this.f = h),
							(this.id = `InlineGPT4LoadingZone${d.a++}`),
							(this.reactiveStorageRoot = this.D(this.f.createScoped(this))),
							(this.b = t.$("div.inlineGPT4LoadingViewZone")),
							this.D((0, C.$Xdc)(this.b, this));
					}
					dispose() {
						super.dispose();
					}
					getDomNode() {
						return this.b;
					}
				};
				(e.$Ydc = m), (e.$Ydc = m = d = Ne([j(1, w.$uZ), j(2, E.$0zb)], m));
			},
		),
		