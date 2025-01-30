import '../../../../require.js';
import '../../../../exports.js';
import '../../../../external/solid/solid.js';
import '../../../../external/solid/store.js';
import '../../../../external/solid/web.js';
import '../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/uuid.js';
import '../../contextkey/common/contextkey.js';
import '../../instantiation/common/instantiation.js';
import './stateMigrations.js';
import '../common/reactiveStorageTypes.js';
import './reactiveStorageTypes.js';
import '../../../../proto/aiserver/v1/utils_pb.js';
define(
			de[45],
			he([1, 0, 13, 193, 2, 148, 3, 47, 8, 5, 1626, 134, 205, 83]),
			function (ce /*require*/,
 e /*exports*/,
 t /*solid*/,
 i /*store*/,
 w /*web*/,
 E /*aiserver_pb*/,
 C /*lifecycle*/,
 d /*uuid*/,
 m /*contextkey*/,
 r /*instantiation*/,
 u /*stateMigrations*/,
 a /*reactiveStorageTypes*/,
 h /*reactiveStorageTypes*/,
 c /*utils_pb*/) {
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
		