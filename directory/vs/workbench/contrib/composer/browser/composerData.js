import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/solid.js';
import '../../../../../proto/aiserver/v1/chat_pb.js';
import '../../../../../proto/aiserver/v1/composer_pb.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/uuid.js';
import '../../../../platform/editor/common/editor.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../ui/browser/widgets/codeBlock.js';
import '../../../services/selectedContext/browser/selectedContextData.js';
import '../../../../base/common/codicons.js';
import '../../../../../proto/aiserver/v1/tools_pb.js';
define(
			de[225],
			he([1, 0, 2, 2, 13, 126, 167, 9, 47, 116, 41, 21, 25, 312, 298, 14, 124]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*solid*/,
 E /*chat_pb*/,
 C /*composer_pb*/,
 d /*uri*/,
 m /*uuid*/,
 r /*editor*/,
 u /*opener*/,
 a /*storage*/,
 h /*workspace*/,
 c /*codeBlock*/,
 n /*selectedContextData*/,
 g /*codicons*/,
 p /*tools_pb*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.TOOLS_WITH_CHECKPOINTS =
						e.TOOL_FORMER_TOOL_CALL_DECISION_PHRASES =
						e.MULTI_DIFF_SOURCE =
						e.HARDCODED_CAPABILITIES =
						e.TOOL_SCHEMAS =
						e.ComposerCapabilitiesCodeBlockAliases =
						e.ContextPlannerCodeBlockAlias =
						e.AutoContextCodeBlockAlias =
						e.ContextPickingCodeBlockAlias =
						e.DiffReviewCodeBlockAlias =
						e.ToolCallCodeBlockAlias =
						e.composerToolCallTypeToIcon =
						e.composerToolCallTypeToLabel =
						e.useComposerContext =
						e.AllComposersContext =
						e.createDefaultConversationMessage =
						e.ToolCallTypesWithDecision =
						e.createEmptyCapabilityRanByProcess =
						e.createEmptyCapabilityStatuses =
						e.createEmptyCheckpoint =
						e.reviveCheckpoint =
						e.COMPLETED_STATUSES =
						e.SAVE_RELATED_STATUSES =
						e.APPLY_RELATED_STATUSES =
						e.REAPPLY_RELATED_STATUSES =
						e.COMPOSER_DATA_VERSION =
							void 0),
					(e.createEmptyComposerTabs = $),
					(e.getComposerHeaderData = v),
					(e.createEmptyComposer = S),
					(e.isComposerEmpty = I),
					(e.getComposerDataStorageScope = P),
					(e.deleteComposerData = k),
					(e.getEditorElem = L);
				const o = (0, t.template)("<div>");
				(e.COMPOSER_DATA_VERSION = 0),
					(e.REAPPLY_RELATED_STATUSES = [
						"completed",
						"cancelled",
						"accepted",
						"rejected",
						"outdated",
					]),
					(e.APPLY_RELATED_STATUSES = [
						...e.REAPPLY_RELATED_STATUSES,
						"applying",
					]),
					(e.SAVE_RELATED_STATUSES = ["completed"]),
					(e.COMPLETED_STATUSES = ["completed", "accepted", "rejected"]);
				const f = (D) => ({
					...D,
					files: D.files.map((M) => ({ ...M, uri: d.URI.revive(M.uri) })),
					nonExistentFiles: D.nonExistentFiles.map((M) => ({
						...M,
						uri: d.URI.revive(M.uri),
					})),
					newlyCreatedFolders: D.newlyCreatedFolders.map((M) => ({
						...M,
						uri: d.URI.revive(M.uri),
					})),
					activeInlineDiffs: D.activeInlineDiffs.map((M) => ({
						...M,
						uri: d.URI.revive(M.uri),
					})),
					inlineDiffNewlyCreatedResources: {
						...D.inlineDiffNewlyCreatedResources,
						files: D.inlineDiffNewlyCreatedResources.files.map((M) => ({
							...M,
							uri: d.URI.revive(M.uri),
						})),
						folders: D.inlineDiffNewlyCreatedResources.folders.map((M) => ({
							...M,
							uri: d.URI.revive(M.uri),
						})),
					},
				});
				e.reviveCheckpoint = f;
				const b = () => ({
					files: [],
					nonExistentFiles: [],
					newlyCreatedFolders: [],
					activeInlineDiffs: [],
					inlineDiffNewlyCreatedResources: { files: [], folders: [] },
				});
				e.createEmptyCheckpoint = b;
				const s = () => ({
					"mutate-request": [],
					"start-submit-chat": [],
					"before-submit-chat": [],
					"after-submit-chat": [],
					"after-apply": [],
					"composer-settled": [],
					"composer-done": [],
					"process-stream": [],
				});
				e.createEmptyCapabilityStatuses = s;
				const l = () => ({
					"mutate-request": [],
					"start-submit-chat": [],
					"before-submit-chat": [],
					"after-submit-chat": [],
					"after-apply": [],
					"composer-settled": [],
					"composer-done": [],
					"process-codeblock": [],
					"process-stream": [],
				});
				(e.createEmptyCapabilityRanByProcess = l),
					(e.ToolCallTypesWithDecision = [
						C.ComposerCapabilityRequest_ToolType.RUN_TERMINAL_COMMAND,
					]);
				const y = () => ({
					type: E.ConversationMessage_MessageType.HUMAN,
					approximateLintErrors: [],
					lints: [],
					codebaseContextChunks: [],
					commits: [],
					pullRequests: [],
					attachedCodeChunks: [],
					assistantSuggestedDiffs: [],
					gitDiffs: [],
					interpreterResults: [],
					images: [],
					attachedFolders: [],
					attachedFoldersNew: [],
					bubbleId: (0, m.$9g)(),
					userResponsesToSuggestedCodeBlocks: [],
					suggestedCodeBlocks: [],
					diffsForCompressingFiles: [],
					relevantFiles: [],
					toolResults: [],
					notepads: [],
					capabilities: [],
					capabilitiesRan: (0, e.createEmptyCapabilityRanByProcess)(),
					capabilityStatuses: (0, e.createEmptyCapabilityStatuses)(),
					editTrailContexts: [],
					multiFileLinterErrors: [],
					diffHistories: [],
					recentLocationsHistory: [],
					recentlyViewedFiles: [],
					isAgentic: !1,
					fileDiffTrajectories: [],
					existedSubsequentTerminalCommand: !1,
					existedPreviousTerminalCommand: !1,
					docsReferences: [],
					webReferences: [],
					attachedFoldersListDirResults: [],
				});
				e.createDefaultConversationMessage = y;
				function $() {
					return [{ type: "extra" }, { type: "composer" }];
				}
				function v(D) {
					return {
						type: "head",
						composerId: D.composerId,
						name: D.name,
						lastUpdatedAt: D.lastUpdatedAt,
						createdAt: D.createdAt,
						forceMode: D.forceMode,
					};
				}
				function S(D, M = "edit") {
					return {
						composerId: D ?? (0, m.$9g)(),
						richText: "",
						hasLoaded: !0,
						text: "",
						conversation: [],
						status: "none",
						context: (0, n.$2gc)(),
						gitGraphFileSuggestions: [],
						userResponsesToSuggestedCodeBlocks: [],
						generatingBubbleIds: [],
						chatGenerationUUID: void 0,
						isReadingLongFile: !1,
						codeBlockData: {},
						originalModelLines: {},
						newlyCreatedFiles: [],
						newlyCreatedFolders: [],
						tabs: $(),
						selectedTabIndex: 1,
						lastUpdatedAt: void 0,
						createdAt: Date.now(),
						hasChangedContext: !1,
						cachingStatus: void 0,
						latestCheckpoint: void 0,
						currentBubbleId: void 0,
						editingBubbleId: void 0,
						lastFocusedBubbleId: void 0,
						backgroundInfo: void 0,
						capabilities: [],
						name: void 0,
						forceMode: M,
						codebaseSearchSettings: {
							filesToInclude: void 0,
							filesToExclude: void 0,
						},
						isFileListExpanded: !0,
					};
				}
				function I(D) {
					return D.conversation.length === 0 && D.text.trim() === "";
				}
				e.AllComposersContext = (0, w.createContext)();
				const T = () => (0, w.useContext)(e.AllComposersContext);
				e.useComposerContext = T;
				function P(D) {
					return D.getWorkbenchState() === h.WorkbenchState.EMPTY
						? a.StorageScope.APPLICATION
						: a.StorageScope.WORKSPACE;
				}
				function k(D, M, N) {
					D.remove(N, P(M));
				}
				function L(D, M, N, A, R, O) {
					return (() => {
						const U = o();
						return (
							U.addEventListener("click", (z) => {
								if (N !== null && A !== null && R !== null) {
									const F = (0, u.$8rb)(D.resolveRelativePath(R), {
										startLineNumber: N,
										startColumn: 1,
										endLineNumber: N,
										endColumn: 1,
									});
									M.open(F, {
										openToSide: !1,
										editorOptions: {
											revealIfVisible: !0,
											revealIfOpened: !0,
											source: r.EditorOpenSource.USER,
										},
										fromUserGesture: !0,
									});
								}
							}),
							U.style.setProperty("width", "100%"),
							U.style.setProperty("box-sizing", "border-box"),
							U.style.setProperty("position", "relative"),
							(0, i.insert)(
								U,
								O === !0 &&
									(() => {
										const z = o();
										return (
											z.style.setProperty("position", "absolute"),
											z.style.setProperty("top", "0px"),
											z.style.setProperty("right", "0px"),
											`calc(100% - ${c.$W0b + 4}px)` != null
												? z.style.setProperty(
														"height",
														`calc(100% - ${c.$W0b + 4}px)`,
													)
												: z.style.removeProperty("height"),
											z.style.setProperty("width", "100%"),
											z.style.setProperty("cursor", "pointer"),
											z.style.setProperty("z-index", "1"),
											z
										);
									})(),
							),
							U
						);
					})();
				}
				(e.composerToolCallTypeToLabel = {
					[C.ComposerCapabilityRequest_ToolType.ADD_FILE_TO_CONTEXT]:
						"Add file to context",
					[C.ComposerCapabilityRequest_ToolType.RUN_TERMINAL_COMMAND]:
						"Run terminal",
					[C.ComposerCapabilityRequest_ToolType.ITERATE]: "Iterate and improve",
					[C.ComposerCapabilityRequest_ToolType.UNSPECIFIED]: "Unspecified",
					[C.ComposerCapabilityRequest_ToolType.REMOVE_FILE_FROM_CONTEXT]:
						"Remove file from context",
					[C.ComposerCapabilityRequest_ToolType.SEMANTIC_SEARCH_CODEBASE]:
						"Semantic search codebase",
				}),
					(e.composerToolCallTypeToIcon = {
						[C.ComposerCapabilityRequest_ToolType.ADD_FILE_TO_CONTEXT]:
							g.$ak.fileAdd,
						[C.ComposerCapabilityRequest_ToolType.RUN_TERMINAL_COMMAND]:
							g.$ak.terminal,
						[C.ComposerCapabilityRequest_ToolType.ITERATE]: g.$ak.sync,
						[C.ComposerCapabilityRequest_ToolType.UNSPECIFIED]: g.$ak.question,
						[C.ComposerCapabilityRequest_ToolType.REMOVE_FILE_FROM_CONTEXT]:
							g.$ak.trash,
						[C.ComposerCapabilityRequest_ToolType.SEMANTIC_SEARCH_CODEBASE]:
							g.$ak.search,
					}),
					(e.ToolCallCodeBlockAlias = "tool_call"),
					(e.DiffReviewCodeBlockAlias = "diff_review"),
					(e.ContextPickingCodeBlockAlias = "context_picking"),
					(e.AutoContextCodeBlockAlias = "auto_context"),
					(e.ContextPlannerCodeBlockAlias = "context_planner"),
					(e.ComposerCapabilitiesCodeBlockAliases = [
						e.ToolCallCodeBlockAlias,
						e.DiffReviewCodeBlockAlias,
						e.ContextPickingCodeBlockAlias,
						e.AutoContextCodeBlockAlias,
					]),
					(e.TOOL_SCHEMAS = {
						[C.ComposerCapabilityRequest_ToolType.ADD_FILE_TO_CONTEXT]: {
							name: "Add file to context",
							schema: {
								type: "object",
								properties: {
									filePath: { type: "string" },
									query: { type: "string" },
								},
								required: ["filePath", "query"],
							},
						},
						[C.ComposerCapabilityRequest_ToolType.RUN_TERMINAL_COMMAND]: {
							name: "Run a terminal command",
							schema: {
								type: "object",
								properties: { command: { type: "string" } },
								required: ["command"],
							},
						},
						[C.ComposerCapabilityRequest_ToolType.ITERATE]: {
							name: "Iterate and improve",
							schema: {
								type: "object",
								properties: { instructions: { type: "string" } },
								required: ["instructions"],
							},
						},
						[C.ComposerCapabilityRequest_ToolType.REMOVE_FILE_FROM_CONTEXT]: {
							name: "Remove file from context",
							schema: {
								type: "object",
								properties: { filePath: { type: "string" } },
								required: ["filePath"],
							},
						},
						[C.ComposerCapabilityRequest_ToolType.SEMANTIC_SEARCH_CODEBASE]: {
							name: "Semantic search codebase",
							schema: {
								type: "object",
								properties: { query: { type: "string" } },
								required: ["query"],
							},
						},
					}),
					(e.HARDCODED_CAPABILITIES = [
						C.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_REVIEW,
						C.ComposerCapabilityRequest_ComposerCapabilityType.AUTO_CONTEXT,
						C.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_HISTORY,
						C.ComposerCapabilityRequest_ComposerCapabilityType.DECOMPOSER,
						C.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_FORMER,
						C.ComposerCapabilityRequest_ComposerCapabilityType.USES_CODEBASE,
					]),
					(e.MULTI_DIFF_SOURCE = d.URI.parse(
						"multi-diff-editor:composer-all-active-changes",
					)),
					(e.TOOL_FORMER_TOOL_CALL_DECISION_PHRASES = {
						[p.ClientSideToolV2.RUN_TERMINAL_COMMAND_V2]: {
							accept: "Run command",
							reject: "Skip",
							waitText: "Waiting for approval",
						},
						[p.ClientSideToolV2.EDIT_FILE]: {
							accept: "Accept",
							reject: "Reject",
							waitText: "",
						},
						[p.ClientSideToolV2.PARALLEL_APPLY]: {
							accept: "Accept All",
							reject: "Reject All",
							waitText: "",
						},
					}),
					(e.TOOLS_WITH_CHECKPOINTS = [
						p.ClientSideToolV2.EDIT_FILE,
						p.ClientSideToolV2.PARALLEL_APPLY,
						p.ClientSideToolV2.DELETE_FILE,
					]);
			},
		),
		