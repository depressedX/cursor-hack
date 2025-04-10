import "../../../../require.js";
import "../../../../exports.js";
import "../../../../external/solid/solid.js";
import "../../../../external/solid/store.js";
import "../../../../external/solid/web.js";
import "../../../../proto/aiserver/v1/aiserver_pb.js";
import "../../../base/common/lifecycle.js";
import "../../../base/common/uuid.js";
import "../../contextkey/common/contextkey.js";
import "../../instantiation/common/instantiation.js";
import "./stateMigrations.js";
import "../common/reactiveStorageTypes.js";
import "./reactiveStorageTypes.js";
import "../../../../proto/aiserver/v1/utils_pb.js";

define(
  de[45],
  he([1, 0, 13, 193, 2, 148, 3, 47, 8, 5, 1626, 134, 205, 83]),
  function (
    require,
    exports,
    solid,
    store,
    web,
    aiserver_pb,
    lifecycle,
    uuid,
    contextkey,
    instantiation,
    stateMigrations,
    commonReactiveStorageTypes,
    browserReactiveStorageTypes,
    utils_pb
  ) {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    // 导出所有函数和常量
    exports.REACTIVE_STORAGE_SERVICE_ID =
      exports.ReactiveStorageContextKey =
      exports.ReactiveStorageRef =
      exports.ReactiveStorageComponent =
      exports.DEFAULT_WORKSPACE_STORAGE =
      exports.DEFAULT_APPLICATION_USER_PERSISTENT_STORAGE =
      exports.WORKSPACE_STORAGE_MIGRATIONS =
      exports.APPLICATION_USER_PERSISTENT_STORAGE_MIGRATIONS =
      exports.DEFAULT_APPLICATION_USER_STORAGE =
      exports.NOTIFICATION_TABS =
      exports.AUTH_DOMAIN =
      exports.AUTH_CLIENT_ID =
      exports.REPO_BACKEND_URL =
      exports.TELEM_BACKEND_URL =
      exports.CPP_CONFIG_BACKEND_URL =
      exports.GEO_CPP_BACKEND_URL =
      exports.HF_URL =
      exports.CMDK_BACKEND_URL =
      exports.BACKEND_URL =
      exports.WEBSITE_URL =
      exports.DEFAULT_MODEL =
        void 0;

    // 导出函数
    exports.cloneEditorState = cloneEditorState;
    exports.cloneEditorGroupState = cloneEditorGroupState;
    exports.markAllNotificationsAsSeen = markAllNotificationsAsSeen;
    exports.hasUnseenNotification = hasUnseenNotification;
    exports.markNotificationAsSeen = markNotificationAsSeen;

    // 常量定义
    exports.REACTIVE_STORAGE_SERVICE_ID = instantiation.createDecorator(
      "reactiveStorageService"
    );

    /**
     * 克隆编辑器状态
     * @param {Object} state 编辑器状态
     * @returns {Object} 克隆后的编辑器状态
     */
    function cloneEditorState(state) {
      const clonedState = JSON.parse(JSON.stringify(state));
      clonedState.uri = state.uri;
      return clonedState;
    }

    /**
     * 克隆编辑器组状态
     * @param {Object} state 编辑器组状态
     * @returns {Object} 克隆后的编辑器组状态
     */
    function cloneEditorGroupState(state) {
      if (!state) return;
      const clonedState = JSON.parse(JSON.stringify(state));
      clonedState.uri = state.uri;
      const selections = [...state.data.selections];
      clonedState.data = { ...state.data, selections: selections };
      clonedState.abortController = state.abortController;
      return clonedState;
    }

    // 默认模型
    exports.DEFAULT_MODEL = "claude-3.5-sonnet";

    // URL 和配置常量
    exports.WEBSITE_URL = "https://cursor.com";
    exports.BACKEND_URL = "https://api2.cursor.sh";
    exports.TELEM_BACKEND_URL = "https://api3.cursor.sh";
    exports.GEO_CPP_BACKEND_URL = "https://api4.cursor.sh";
    exports.CPP_CONFIG_BACKEND_URL = "https://api4.cursor.sh";
    exports.CMDK_BACKEND_URL = "https://api3.cursor.sh";
    exports.HF_URL = "https://api3.cursor.sh";
    exports.REPO_BACKEND_URL = "https://repo42.cursor.sh";
    exports.AUTH_CLIENT_ID = "KbZUR41cY7W6zRSdpSUJ7I7mLYBKOCmB";
    exports.AUTH_DOMAIN = "prod.authentication.cursor.sh";

    // 通知标签
    exports.NOTIFICATION_TABS = ["chat", "submit", "context"];

    /**
     * 检查是否有未读通知
     * @param {Object} storage 存储对象
     * @param {string} tab 标签名
     * @returns {boolean} 是否有未读通知
     */
    function hasUnseenNotification(storage, tab) {
      const unseenNotifications =
        storage.applicationUserPersistentStorage.haveNotSeen;
      return unseenNotifications === undefined
        ? false
        : exports.NOTIFICATION_TABS.find(
            (t) => unseenNotifications[t] === true
          ) !== tab;
    }

    /**
     * 将所有通知标记为已读
     * @param {Object} storage 存储对象
     */
    function markAllNotificationsAsSeen(storage) {
      for (const tab of exports.NOTIFICATION_TABS)
        storage.setApplicationUserPersistentStorage("haveNotSeen", {
          ...storage.applicationUserPersistentStorage.haveNotSeen,
          [tab]: true,
        });
    }

    /**
     * 将指定通知标记为已读
     * @param {Object} storage 存储对象
     * @param {string} tab 标签名
     */
    function markNotificationAsSeen(storage, tab) {
      storage.setApplicationUserPersistentStorage("haveNotSeen", {
        ...storage.applicationUserPersistentStorage.haveNotSeen,
        [tab]: false,
      });
    }

    // 生成唯一ID
    const uniqueId = uuid.generateUuid();

    // 默认用户持久化存储
    exports.DEFAULT_APPLICATION_USER_PERSISTENT_STORAGE = {
      composerState: { ...browserReactiveStorageTypes.DEFAULT_COMPOSER_STATE },
      notepadState: { ...browserReactiveStorageTypes.DEFAULT_NOTEPAD_STATE },
      bugbotState: { ...browserReactiveStorageTypes.DEFAULT_BUGBOT_STATE },
      aiFeaturesCopyPasteState: { mentions: [] },
      shouldShowViewZoneWhenPreviewBoxIsClipped4: false,
      syncDevModeColorTheme: true,
      cppModelsState: browserReactiveStorageTypes.DEFAULT_CPP_MODELS_STATE,
      autopilotFeatureEnabled: false,
      isLinterEnabled: false,
      aiSettings: {
        openAIModel: "claude-3.5-sonnet",
        regularChatModel: "claude-3.5-sonnet",
        cmdKModel: "claude-3.5-sonnet",
        terminalCmdKModel: "claude-3.5-sonnet",
        composerModel: "claude-3.5-sonnet",
        privateFTOpenAIModel: null,
        longContextOpenAIModel: "claude-3-5-sonnet-200k",
      },
      authenticationSettings: { githubLoggedIn: false },
      cursorCreds: {
        websiteUrl: exports.WEBSITE_URL,
        backendUrl: exports.BACKEND_URL,
        authClientId: exports.AUTH_CLIENT_ID,
        authDomain: exports.AUTH_DOMAIN,
        repoBackendUrl: exports.BACKEND_URL,
        telemBackendUrl: exports.TELEM_BACKEND_URL,
        cmdkBackendUrl: exports.CMDK_BACKEND_URL,
        hfUrl: exports.HF_URL,
        geoCppBackendUrl: exports.GEO_CPP_BACKEND_URL,
        cppConfigBackendUrl: exports.CPP_CONFIG_BACKEND_URL,
        credentialsDisplayName: "Prod",
      },
      docState: { visibleDocs: [], usableDocs: [], previosulyUsedDocs: [] },
      lastUpdateHiddenTimeInUnixSeconds: 0,
      lintRules: "",
      bubbleTimesLeft: 0,
      showAgentActionDebugger: false,
      cmdLineHookState: { ignored: false, timesShown: 0 },
      agentDebuggerState: { priomptLiveMode: false, isRecordingTasks: true },
      showLinterDebugger: false,
      linterDebuggerState: {
        specificRules: true,
        compileErrors: false,
        changeBehavior: true,
        matchCode: false,
        relevance: true,
        userAwareness: true,
      },
      cacheChatPrompts: true,
      cmdkDiffHistoryEnabled: false,
      shouldOnlyImportOnAccept: true,
      cppAutoImportDecorationStyle: "squiggle",
      lintSettings: {
        forceEnableDiscriminators: [],
        forceDisableDiscriminators: [],
        forceEnableGenerators: [],
        forceDisableGenerators: [],
        watcherThreshold: 0.2,
        watcherDebounceTimeSeconds: 30,
        runOnSaveInstead: true,
        silenceIfOverlappingWithRegularLinter: true,
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
      azureState: { useAzure: false },
      interpreterModeSettings: { interpreterModeByDefault: false },
      cppFireOnEveryCursorChange: false,
      personalDocs: [],
      chunkedStreamingEnabledV2: true,
      cppCachedTypeaheadEnabled: true,
      cppInCmdF: true,
      cppManualTriggerWithOpToken: false,
      cppTriggerInComments: true,
      cppShowWhitespaceOnlyChanges: false,
      fastCppEnabled: false,
      cppEnabled: true,
      cppConfig: undefined,
      indexRepository: true,
      haveNotImportedFromVSC: false,
      shouldAutoParseCmdKLinks: false,
      SPECIAL_KEY_lastUpdatedTimeInUnixSeconds: 0,
      aiHyperModeUXType: "auto-accept",
      aiPreviewsEnabled: true,
      aiPreviewSettings: {
        enabledFeatures: {
          summary: true,
          relatedFiles: true,
          relatedCommits: true,
        },
        summary: { isExpanded: true },
        relatedFiles: { isExpanded: true },
        relatedCommits: { isExpanded: false },
      },
      chatFadeInAnimationEnabled: false,
      isFileSyncClientEnabled: true,
      membershipType: undefined,
      isAiReviewInputExpanded: true,
      useFastApplyModel: false,
      fastApplyModelType:
        aiserver_pb.SlashEditRequest_FastApplyModelType.DEFAULT,
      explicitlyEnableSemanticSearch: false,
      aiCursorHelpEnabled: true,
      showAllCmdKContexts: false,
      aiDocAgentEnabled: false,
      markdownTestString: "",
      cppInPeek: true,
      fastSemanticSearchEnabled: false,
      preferredEmbeddingModel: utils_pb.EmbeddingModel.UNSPECIFIED,
      cursorPredictionUIExperiments: [],
      oneTimeSettings: {
        shouldDisableGithubCopilot: true,
        shouldMigrateFromGpt4ToGpt4o: true,
        shouldMigrateFromGpt4oToClaudeSonnet: true,
        didMigrateFromGpt4oToClaudeSonnet: false,
        didMigrateBackFromClaudeSonnetToGpt4o: false,
      },
      aiReviewPersistentStorage: { customInstructions: "" },
      indexingState: { lastAskedToIndexTime: 0 },
      turboModeOptions: { timesShownUpgradeMessage: 0 },
      internalAnalyticsDebugMode: false,
    };

    // 用户持久化存储迁移规则
    exports.APPLICATION_USER_PERSISTENT_STORAGE_MIGRATIONS = [
      (storage, state) =>
        state.isBashMode2 === true
          ? (delete state.isBashMode2,
            {
              ...state,
              isInterpreterMode: true,
              interpreterModeSettings: { interpreterModeByDefault: true },
            })
          : state,
      (storage, state) =>
        state.cursorCreds?.cppBackendUrl === undefined
          ? {
              ...state,
              cursorCreds: {
                ...(state.cursorCreds ?? {}),
                cppBackendUrl: exports.TELEM_BACKEND_URL,
              },
            }
          : state,
      (storage, state) => (
        state.cppEnabled === undefined && (state.cppEnabled = true), state
      ),
    ];

    // 默认工作区存储
    exports.DEFAULT_WORKSPACE_STORAGE = {
      tasksData: {
        tasksDataSchemaVersion: 1,
        tasks: [{ type: "draft", taskId: uniqueId, instruction: "" }],
        displayedTaskId: uniqueId,
        showTabs: false,
        activeServerTaskUuids: [],
      },
      onboardingMetadata: { shouldAskToIndex: true, shouldHideWarning: false },
      hallucinatedFunctionsWorkspaceState: {},
      persistentChatMetadata: [],
      aiPanePosition: browserReactiveStorageTypes.AIPanePosition.SIDEBAR,
      shouldRerankByDefault: false,
      indexingData: {
        preferredEmbeddingModel: utils_pb.EmbeddingModel.UNSPECIFIED,
      },
      composerState: browserReactiveStorageTypes.DEFAULT_COMPOSER_BAR_STATE,
    };

    // 工作区存储迁移规则
    exports.WORKSPACE_STORAGE_MIGRATIONS = [
      (storage, state) =>
        !state.tasksData || !state.tasksData.tasksDataSchemaVersion
          ? { ...state, tasksData: exports.DEFAULT_WORKSPACE_STORAGE.tasksData }
          : state,
      (storage, state) => {
        if (
          state.tasksData &&
          state.tasksData.tasks &&
          Array.isArray(state.tasksData.tasks)
        ) {
          const tasks = state.tasksData.tasks.map((task) =>
            typeof task == "object" &&
            task &&
            "type" in task &&
            task.type === "started"
              ? { ...task, SPECIAL_KEY_doNotPersist: false }
              : task
          );
          return { ...state, tasksData: { ...state.tasksData, tasks: tasks } };
        }
        return state;
      },
      (storage, state) =>
        !state.onboardingMetadata || !state.onboardingMetadata.shouldAskToIndex
          ? { ...state, onboardingMetadata: { shouldAskToIndex: true } }
          : state,
      (storage, state) => {
        stateMigrations.removeKeyFromPath({
          origObject: state,
          pathToKey: [
            "persistentChatMetadata",
            stateMigrations.SpecialCase.array,
            "injectedContext",
            "usedCodebase",
            "fileResults",
            stateMigrations.SpecialCase.array,
            "file",
          ],
          keyToRemove: "contents",
        });
        stateMigrations.removeKeyFromPath({
          origObject: state,
          pathToKey: [
            "persistentChatMetadata",
            stateMigrations.SpecialCase.array,
            "injectedContext",
            "usedCodebase",
            "codeResults",
            stateMigrations.SpecialCase.array,
            "codeBlock",
          ],
          keyToRemove: "fileContents",
        });
        stateMigrations.keepOnlyKey({
          origObject: state,
          pathToKey: [
            "persistentChatMetadata",
            stateMigrations.SpecialCase.array,
            "injectedContext",
            "usedCurrentFile",
          ],
          keyToKeep: "relativeFilePath",
        });
        stateMigrations.removeKeyFromPath({
          origObject: state,
          pathToKey: [
            "persistentChatMetadata",
            stateMigrations.SpecialCase.array,
            "predictedContext",
            "usedCodebase",
            "fileResults",
            stateMigrations.SpecialCase.array,
            "file",
          ],
          keyToRemove: "contents",
        });
        stateMigrations.removeKeyFromPath({
          origObject: state,
          pathToKey: [
            "persistentChatMetadata",
            stateMigrations.SpecialCase.array,
            "predictedContext",
            "usedCodebase",
            "codeResults",
            stateMigrations.SpecialCase.array,
            "codeBlock",
          ],
          keyToRemove: "fileContents",
        });
        stateMigrations.keepOnlyKey({
          origObject: state,
          pathToKey: [
            "persistentChatMetadata",
            stateMigrations.SpecialCase.array,
            "predictedContext",
            "usedCurrentFile",
          ],
          keyToKeep: "relativeFilePath",
        });
        return state;
      },
    ];

    // 默认应用程序用户存储
    exports.DEFAULT_APPLICATION_USER_STORAGE = {
      composerState: { infoBoxMessage: undefined },
      notepadState: { notepadEditorFocusSignal: undefined },
      autopilotState: { conversationHistory: [] },
      aiReaderState: {},
      webCmdKState: { promptBar: undefined },
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
        active: false,
        generating: false,
        chunks: [],
        inprogressEdits: [],
      },
      runningGeneration: false,
      showingErrorMetadata: { case: null, error: undefined },
      hallucinatedFunctionsNonPersistentState: {
        locationChooserState: undefined,
        showingHfUuid: undefined,
      },
      showingUpdate: false,
      inlineDiffs: [],
      simpleDiffs: [],
      repositoryMetadata: { startedPolling: false },
      cppPopupState: { cardState: undefined },
      selectedTab: null,
      promptBars: [],
      maxTokensHit: false,
      continueBubbles: [],
      lintState: {
        bugs: [],
        dismissedBugs: [],
        lastLintGenerationUuid: null,
        lastLintResult: commonReactiveStorageTypes.LintResult.NONE,
        lastLintTimestamp: null,
        hoveringOverBugUuid: null,
      },
      cppState: {
        suggestion: undefined,
        additionalSuggestions: [],
        inProgressSuggestions: [],
        candidateSuggestions: {},
        shouldNotTrigger: false,
        peekViewSuggestion: undefined,
      },
      holdCppState: { isHoldingDownCmdK: false },
      showingDocsModal: false,
      newDoc: undefined,
      shouldShowInsertChatWidget: false,
      lastCopy: undefined,
      refactorDiffIDs: [],
      aiInterfaceState: { showingNewModal: false, activeAgents: [] },
      nonPersistentTasksData: { backgroundTasks: [] },
      nonPersistentChatMetadata: [],
      feedbackState: {
        screenshots: [],
        description: undefined,
        type: undefined,
      },
      showUsageBasedPricingModal: undefined,
      showTurboModeModal: undefined,
      repoProgressBars: [],
      repositoryIndexingError: undefined,
      repositoryIndexingStatus: { case: "loading" },
      repositoryLastSyncedTime: undefined,
      cmdkBackgroundContextSelections: [],
      repositoryIndexingJobs: [],
      mainLocalRepositoryProgress: undefined,
      aiHyperModeData: {
        debug: false,
        hyperRegionsMap: {},
        currentHyperRegion: undefined,
      },
      cursorMotionState: { bars: [] },
      contextGraphState: { relatedFiles: null },
      chatState: { isFocused: false, recentlyViewedFiles: [] },
      semSearchState: { selectedFile: undefined, codeSelection: undefined },
    };

    /**
     * 响应式存储组件类
     * 用于管理响应式状态和效果
     */
    class ReactiveStorageComponent extends lifecycle.Disposable {
      constructor(options) {
        super();
        this.solidRoot = {
          context: null,
          owner: null,
          owned: null,
          cleanups: null,
        };
      }

      dispose() {
        super.dispose();
        solid.cleanNode(this.solidRoot);
      }

      createImplicitEffect(fn, value) {
        solid.runWithOwner(this.solidRoot, () => {
          solid.createEffect(fn, value);
        });
      }

      createImplicitResource({ depFn, produceFn, initialValue }) {
        const resource = solid.runWithOwner(this.solidRoot, () =>
          solid.createResource(depFn, produceFn, { initialValue: initialValue })
        );
        if (resource === undefined)
          throw new Error("createResource returned undefined");
        return resource;
      }

      onChangeEffect({ onChange, deps, runNowToo }) {
        let defer = true;
        if (runNowToo !== undefined) {
          defer = !runNowToo;
        }
        solid.runWithOwner(this.solidRoot, () => {
          const onFn = defer
            ? solid.on(
                deps,
                (newDeps, oldDeps, prevReturnValue) => {
                  try {
                    return onChange({
                      deps: newDeps,
                      prevDeps: oldDeps,
                      prevReturnValue: prevReturnValue,
                    });
                  } catch (error) {
                    console.error(error);
                  }
                },
                { defer: defer }
              )
            : solid.on(
                deps,
                (newDeps, oldDeps, prevReturnValue) => {
                  try {
                    return onChange({
                      deps: newDeps,
                      prevDeps: oldDeps,
                      prevReturnValue: prevReturnValue,
                    });
                  } catch (error) {
                    console.error(error);
                  }
                },
                { defer: defer }
              );
          solid.createEffect(onFn);
        });
      }

      render(component, container) {
        const result = solid.runWithOwner(this.solidRoot, () =>
          web.render(component, container)
        );
        if (result === undefined) throw new Error("render returned undefined");
        return { dispose: () => result() };
      }

      createSignal(initialValue, options) {
        const signal = solid.runWithOwner(this.solidRoot, () =>
          solid.createSignal(initialValue, options)
        );
        if (signal === undefined) throw new Error("signal returned undefined");
        return signal;
      }

      createStore(...args) {
        const storeObj = solid.runWithOwner(this.solidRoot, () =>
          args[0]
            ? store.createStore(args[0], args[1])
            : store.createStore(args[1])
        );
        if (storeObj === undefined)
          throw new Error("createStore returned undefined");
        return storeObj;
      }
    }
    exports.ReactiveStorageComponent = ReactiveStorageComponent;

    /**
     * 响应式存储上下文键类
     * 用于管理上下文键
     */
    class ReactiveStorageContextKey extends contextkey.ContextKeyExpr {
      static {
        this.allKeys = [];
      }

      static all() {
        return ReactiveStorageContextKey.allKeys.values();
      }

      constructor(key, storage) {
        super(key, null);
        this.key = key;
        this.storage = storage;
      }

      getValue(context) {
        return this.storage.nonPersistentStorage[this.key];
      }

      toNegated() {
        return this.negate();
      }

      isEqualTo(value) {
        return contextkey.ContextKeyEqualsExpr.create(this.key, value);
      }

      notEqualsTo(value) {
        return contextkey.ContextKeyNotEqualsExpr.create(this.key, value);
      }
    }
    exports.ReactiveStorageContextKey = ReactiveStorageContextKey;

    /**
     * 响应式存储引用类
     * 用于保持对当前存储的引用
     */
    class ReactiveStorageRef {
      constructor(storage) {
        this.current = storage;
      }
    }
    exports.ReactiveStorageRef = ReactiveStorageRef;
  }
);
