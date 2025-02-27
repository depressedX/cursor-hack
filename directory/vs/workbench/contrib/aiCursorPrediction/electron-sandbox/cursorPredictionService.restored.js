import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../proto/aiserver/v1/aiserver_connectweb.js';
import '../../../../../proto/aiserver/v1/cursor_prediction_connectweb.js';
import { Disposable } from '../../../../base/common/lifecycle.js';
import { BackendClient } from '../../../services/ai/browser/backendClient.js';
import { AIMiscServices } from '../../../services/ai/browser/aiMiscServices.js';
import { ReactiveStorageService } from '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import { IWorkspaceContextService } from '../../../../platform/workspace/common/workspace.js';
import { IMarkerService } from '../../../../platform/markers/common/markers.js';
import { InstantiationType } from '../../../../platform/instantiation/common/instantiation.js';
import { MetricsService } from '../../../services/ai/browser/metricsService.js';
import { CppTypeService } from '../../aiCpp/electron-sandbox/cppTypeService.js';
import { AIEverythingProviderService } from '../../../../platform/cursor/browser/aiEverythingProviderService.js';
import { ICodeEditor } from '../../../../editor/browser/editorBrowser.js';
import { AIServerPB } from '../../../../../proto/aiserver/v1/aiserver_pb.js';
import { ReactiveStorageTypes } from '../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import { UtilsPB } from '../../../../../proto/aiserver/v1/utils_pb.js';
import { Position } from '../../../../editor/common/core/position.js';
import { Schemas } from '../../../../base/common/network.js';
import { registerSingleton } from '../../../../platform/instantiation/common/extensions.js';
import { TrackedRangeStickiness } from '../../../../editor/common/model.js';
import { ICodeEditorService } from '../../../../editor/browser/services/codeEditorService.js';
import { ITextModelService } from '../../../../editor/common/services/resolverService.js';
import { CppPB } from '../../../../../proto/aiserver/v1/cpp_pb.js';
import { URI } from '../../../../base/common/resources.js';
import { Constants } from '../../../../base/common/constants.js';
import { CursorPredictionHintLineWidget } from './CursorPredictionHintLineWidget.js';
import { CURSOR_PREDICTION_CONSTANTS } from './constants.js';
import { IStatusbarService } from '../../../services/statusbar/browser/statusbar.js';
import { CursorPredictionOutOfRangeIndicator } from './cursorPredictionOutOfRangeIndicator.js';
import { unwrap } from '../../../../../external/solid/store.js';
import { CppEventLogger } from '../../aiCpp/browser/cppEventLogger.js';
import { generateUuid } from '../../../../base/common/uuid.js';
import { BadCursorPredictionHeuristics } from './badCursorPredictionHeuristics.js';
import { FileSyncServerPB } from '../../../../../proto/aiserver/v1/filesyncserver_pb.js';
import { CursorPredictionNonVisibleEditorIndicator } from './cursorPredictionNonVisibleEditorIndicator.js';
import { IFileService } from '../../../../platform/files/common/files.js';
import { IOpenerService } from '../../../../platform/opener/common/opener.js';
import { IEditorGroupsService } from '../../../services/editor/common/editorGroupsService.js';
import { EditorOpenSource } from '../../../../platform/editor/common/editor.js';
import { addDisposableListener, EventType } from '../../../../base/browser/dom.js';

const DEBUG = false;
const debugLog = DEBUG ? console.log : () => {};
const debugError = DEBUG ? console.error : () => {};

export class CursorPredictionService extends Disposable {
  private readonly aiClient;
  private readonly cursorPredictionClient;
  private readonly workspaceService;
  private readonly markerService; 
  private readonly instantiationService;
  private readonly metricsService;
  private readonly cppTypeService;
  private readonly aiProviderService;
  private readonly codeEditorService;
  private readonly textModelService;
  private readonly statusbarService;
  private readonly cppEventLogger;
  private readonly badPredictionHeuristics;
  private readonly fileService;
  private readonly openerService;
  private readonly editorGroupsService;

  private isEnabled = false;
  private predictionHistory = [];
  private abortController;
  private editorDisposables = new Map();
  private refreshConfigTimeout;
  private shouldTriggerCpp = false;
  private lastConfigRefreshTime = 0;
  private currentDecorationId;
  private outOfRangeDecorationId;
  private nonVisibleEditorIndicator;
  private predictionCounter = 1;
  private isClearing = false;
  private hintLineWidget;
  private outOfRangeIndicator;

  constructor(
    storageService,
    workspaceService,
    markerService,
    instantiationService,
    metricsService,
    cppTypeService,
    aiProviderService,
    codeEditorService,
    textModelService,
    statusbarService,
    cppEventLogger,
    badPredictionHeuristics,
    fileService,
    openerService,
    editorGroupsService
  ) {
    super();
    
    this.workspaceService = workspaceService;
    this.markerService = markerService;
    this.instantiationService = instantiationService;
    this.metricsService = metricsService;
    this.cppTypeService = cppTypeService;
    this.aiProviderService = aiProviderService;
    this.codeEditorService = codeEditorService;
    this.textModelService = textModelService;
    this.statusbarService = statusbarService;
    this.cppEventLogger = cppEventLogger;
    this.badPredictionHeuristics = badPredictionHeuristics;
    this.fileService = fileService;
    this.openerService = openerService;
    this.editorGroupsService = editorGroupsService;

    // Initialize clients
    this.aiClient = this.instantiationService.createInstance(BackendClient, {
      service: AIServerPB.AIService
    });
    
    this.cursorPredictionClient = this.instantiationService.createInstance(BackendClient, {
      service: CursorPredictionPB.CursorPredictionService  
    });

    this.periodicallyReloadCursorPredictionConfig();

    // Listen for window resize
    this._register(addDisposableListener(window, EventType.RESIZE, () => {
      this.handleWindowResize();
    }));
  }

  // Public methods

  public clearCursorPrediction(): void {
    const editor = this.codeEditorService.getActiveCodeEditor();
    if (editor) {
      this.clearPrediction({
        editor,
        registerReject: true
      });
    }
  }

  public get isActive(): boolean {
    return this.isEnabled;
  }

  public set isActive(value: boolean) {
    this.isEnabled = value;
    if (!value) {
      this.predictionHistory = [];
    }
  }

  // ... 其他方法的还原实现

  private async createPrediction({
    editor,
    model,
    predictedLineNumberInRange,
    predictionText,
    generationUuid,
    source,
    cppSuggestionRange,
    predictedUri
  }) {
    // ... 创建预测的实现
  }

  private getDecoration({ model, lineNumber }) {
    return {
      range: {
        startLineNumber: lineNumber,
        startColumn: 1,
        endLineNumber: lineNumber,
        endColumn: model.getLineMaxColumn(lineNumber)
      },
      options: {
        description: "next cursor prediction",
        stickiness: TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges
      }
    };
  }

  public dispose(): void {
    this.editorDisposables.forEach(disposables => 
      disposables.forEach(d => d.dispose())
    );
    this.editorDisposables.clear();
    super.dispose();
  }
}

// Register the service
registerSingleton(AIMiscServices.ICursorPredictionService, CursorPredictionService, InstantiationType.Delayed); 