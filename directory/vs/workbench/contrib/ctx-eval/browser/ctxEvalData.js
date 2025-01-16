define(de[3045], he([1, 0, 272, 1729]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$o0b = e.$n0b = void 0),
				(e.$n0b = [
					{
						queries: [
							"How do I make copilot++, aka CPP, use a window of +- 20 lines, rather than +-2 lines?",
							"Where can I change the radius that CPP uses? It's only a few lines above and below now. I wanna make it like 10 lines.",
							"How to change the # of lines that CPP uses?",
						],
						taskId: "066c1d73-fd48-4ce5-85d0-dbea966fc6ac",
						remoteUrlOfRepo: "https://github.com/anysphere/everysphere",
						answerRubric: `
A correct answer should show the user how to change \`aboveRadius\` and \`belowRadius\` in \`handleCppConfig\` in \`backend/server/src/aiHandlers/cpp/handler.ts\`. Any other answer cannot be considered correct.

An incorrect but helpful answer will mention diffRangeExtended and this code block:
\`\`\`
const diffRangeExpanded = getExpandedRangeOneIndexed(
	modelValue,
	{
		startLineNumber: selection.startLineNumber,
		endLineNumberExclusive: selection.endLineNumber
	},
	this.persistentStorage().cppConfig?.belowRadius ?? DEFAULT_RADIUS,
	this.persistentStorage().cppConfig?.aboveRadius ?? DEFAULT_RADIUS_ABOVE
);
\`\`\`
`,
						necessaryCtx: [
							{
								fileName: "backend/server/src/aiHandlers/cpp/handler.ts",
								chunkMustContain: [
									"function handleCppConfig",
									"aboveRadius",
									"belowRadius",
								],
							},
							{
								fileName:
									"vscode/src/vs/workbench/contrib/aiCpp/electron-sandbox/cppService.ts",
								chunkMustContain: [
									"const diffRangeExpanded =",
									"aboveRadius",
									"belowRadius",
									"DEFAULT_RADIUS",
									"DEFAULT_RADIUS_ABOVE",
								],
							},
						],
					},
					{
						queries: [
							'Where do we choose the # of chunks to give to the model in "advanced context" chat on the client?',
							"How do I change the # of chunks in advanced context chat on the frontend?",
							"How is the # of chunks chosen for cmd-shift-enter chat in vscode?",
						],
						taskId: "b502f466-e80e-4241-b067-4cd1573f2552",
						remoteUrlOfRepo: "https://github.com/anysphere/everysphere",
						answerRubric:
							"\nA correct answer should mention `numResultsPerSearch` and `vscode/src/vs/workbench/contrib/aichat/browser/components/AdvancedCodebaseControls.tsx`, where it is defined on the client.\nIt is set by default to 1200, but the user can choose from several values in a dropdown, from 10-1200.\n\nAn incorrect but helpful answer will mention the *backend*'s default value for `numResultsPerSearch` of 100, defined in `backend/server/src/aiHandlers/advancedContextChat/handler.ts`.\n",
						necessaryCtx: [
							{
								fileName:
									"vscode/src/vs/workbench/contrib/aichat/browser/components/AdvancedCodebaseControls.tsx",
								chunkMustContain: [
									"numResultsPerSearch",
									"1200",
									"DEFAULT_ADVANCED_CODEBASE_CONTEXT_OPTIONS",
								],
							},
							{
								fileName:
									"vscode/src/vs/workbench/contrib/aichat/browser/components/AdvancedCodebaseControls.tsx",
								chunkMustContain: ["numResultsPerSearch", "100 (default)"],
							},
							{
								fileName:
									"backend/server/src/aiHandlers/advancedContextChat/handler.ts",
								chunkMustContain: [
									"numResultsPerSearch: 100",
									"DEFAULT_ADVANCED_CONTEXT",
								],
							},
						],
					},
					{
						queries: [
							'Where do we choose the # of chunks to give to the model in "with codebase" / "context" chat on the client?',
							"How do I change the number of chunks in context chat?",
						],
						taskId: "6730a284-9c82-4b7f-bf07-3d280f9f5e74",
						remoteUrlOfRepo: "https://github.com/anysphere/everysphere",
						answerRubric: `
TODO
`,
						necessaryCtx: [
							{
								fileName:
									"vscode/src/vs/workbench/services/ai/browser/aiService.ts",
								chunkMustContain: [
									"topK: 1000",
									"generationMetadata.longContextModeEnabled",
									"repositoryService.searchMultipleQueries",
								],
							},
						],
					},
					{
						queries: [
							"I have attachedFoldersNew in every chat message now. I wanna render that in priompt freeformPrompt. How specifically do I implement this change?",
							"How do I show the folders in every message in freeformPrompt?",
						],
						taskId: "71bdb7e6-554c-4880-9b23-8007b03fa4ab",
						remoteUrlOfRepo: "https://github.com/anysphere/everysphere",
						answerRubric: `
TODO
`,
						necessaryCtx: [
							{
								fileName:
									"backend/server/src/prompts/components/priomptContent.tsx",
								chunkMustContain: ["export function HumanMessage"],
							},
							{
								fileName: "backend/server/src/aiHandlers/freeform.tsx",
								chunkMustContain: ["export function FreeformPrompt"],
							},
						],
					},
					{
						queries: [
							'right now the "files from around the codebase might be useful:" is put at the end of the chat, not the beginning. how do I fix that',
							'How do I put the "files from around the codebase might be useful" at the beginning of the chat, not the end?',
						],
						taskId: "d6b45eb4-dc60-4dcf-bf05-1760cbfdca42",
						remoteUrlOfRepo: "https://github.com/anysphere/everysphere",
						answerRubric: `
TODO
`,
						necessaryCtx: [
							{
								fileName:
									"backend/server/src/aiHandlers/longContextChat/handler.ts",
								chunkMustContain: [
									"const makeMessages =",
									"currFileMessages.push(currFileMessage)",
									"const stringifyMessage =",
								],
							},
						],
					},
					{
						queries: [
							"How to increase the chunk size in the codebase indexer?",
							"How big are the chunks we use to embed the code? How can I increase it?",
						],
						taskId: "fa0c931a-abf5-47f4-9c2a-933adc2e4d16",
						remoteUrlOfRepo: "https://github.com/anysphere/everysphere",
						answerRubric: `
TODO
`,
						necessaryCtx: [
							{
								fileName: "backend/server/src/treesitter/chunker.ts",
								chunkMustContain: [
									"export class TreesitterChunker",
									"mergeChunkSize",
									"mediumChunkSize",
									"maxChunkSize",
								],
							},
							{
								fileName: "",
								chunkMustContain: [
									"export class LocalCodebaseIndexer",
									"private _chunker: TreesitterChunker",
								],
							},
						],
					},
					{
						queries: [
							"where are extensions actually started? and how do you decide which extensions run on a given extension host?",
							"Where exactly are the extensions started on the exthost?",
						],
						taskId: "182b24c5-4955-4079-8033-4b0778a1b04d",
						remoteUrlOfRepo: "https://github.com/anysphere/everysphere",
						answerRubric: `
TODO
`,
						necessaryCtx: [
							{
								fileName:
									"vscode/src/vs/workbench/services/extensions/common/abstractExtensionService.ts",
								chunkMustContain: ["async _initialize(): Promise<void>"],
							},
							{
								fileName:
									"vscode/src/vs/workbench/services/extensions/common/extensionHostManager.ts",
								chunkMustContain: [
									"public async start(extensionRegistryVersionId: number",
								],
							},
						],
					},
					{
						queries: [
							"How can I access the MerkleClient, which is on the extension host, from SourceFilesService, which is on the main process?",
						],
						taskId: "44302713-5b98-4d06-bcbf-9510fb5f7ab2",
						remoteUrlOfRepo: "https://github.com/anysphere/everysphere",
						answerRubric: `
TODO
`,
						necessaryCtx: [
							{
								fileName:
									"vscode/src/vs/workbench/api/common/extHost.protocol.ts",
								chunkMustContain: [
									"export interface ExtHostCursorShape {",
									"ExtHostCursor: createProxyIdentifier<ExtHostCursorShape",
								],
							},
							{
								fileName:
									"vscode/src/vs/workbench/api/common/extHost.api.impl.ts",
								chunkMustContain: [
									"const extHostCursor = rpcProtocol.set(ExtHostContext.ExtHostCursor, new ExtHostCursor(rpcProtocol)",
									"const cursor: typeof vscode.cursor = {",
									"// Cursor api",
								],
							},
							{
								fileName:
									"vscode/src/vs/workbench/api/common/extHost.api.impl.ts",
								chunkMustContain: [
									"const extHostCursor = rpcProtocol.set(ExtHostContext.ExtHostCursor, new ExtHostCursor(rpcProtocol)",
									"const cursor: typeof vscode.cursor = {",
									"// Cursor api",
								],
							},
							{
								fileName:
									"vscode/extensions/cursor-retrieval/packages/file-service/index.d.ts",
								chunkMustContain: [
									"export class MerkleClient",
									"constructor(absoluteRootDirectory: string)",
								],
							},
							{
								fileName:
									"vscode/extensions/cursor-retrieval/packages/file-service/src/merkle_client.rs",
								chunkMustContain: ["pub struct MerkleClient"],
							},
							{
								fileName: "vscode/src/vs/workbench/api/common/extHostCursor.ts",
								chunkMustContain: [
									"export class ExtHostCursor implements ExtHostCursorShape",
								],
							},
							{
								fileName:
									"vscode/src/vs/workbench/api/browser/mainThreadCursor.ts",
								chunkMustContain: ["async $register", "Service.register"],
							},
							{
								fileName: "**/*.ts",
								chunkMustContain: ["Provider(provider: "],
							},
							{
								fileName: "**/*.ts",
								chunkMustContain: ["export type", "Provider = {"],
							},
						],
					},
					{
						queries: [
							"add a toggle for speculative linting or whatever it's called in settings",
						],
						taskId: "edc76636-defd-48ed-aaca-c0981da30d67",
						remoteUrlOfRepo: "https://github.com/anysphere/everysphere",
						answerRubric:
							"\nA correct answer should insert a new SettingsBetaItem into `SettingsBetaTab` in `settingsBetaTab.tsx`. It should match the other SettingsBetaItems in the settings tab.\nThe answer must read from and write to `vsContext.reactiveStorageService.applicationUserPersistentStorage.useSpeculativeLinter`.\nThe answer might suggest adding a GULPFILE line to remove the option:\n```\n{/*\n__GULPFILE_REMOVE_LINE_BEFORE_COMPILING____disable_speculative_linter__\n*/}\n```\n",
						necessaryCtx: [
							{
								fileName: "**/reactiveStorageTypes.ts",
								chunkMustContain: [
									"export type ApplicationUserReactivePersistentStorage",
									"useSpeculativeLinter?: boolean;",
								],
							},
							{
								fileName:
									"vscode/src/vs/workbench/contrib/aiSettings/browser/components/settings/settingsBetaTab.tsx",
								chunkMustContain: [
									"function SettingsBetaTab",
									"<SettingsBetaItem",
									'title="',
									"onSelect: (w: string) => {",
								],
							},
						],
					},
				]),
				(e.$o0b = [
					{ model: "gpt-4", chatKind: i.ChatKind.normalChat },
					{ model: "claude-3-opus", chatKind: i.ChatKind.normalChat },
					{
						model: "gpt-4",
						chatKind: i.ChatKind.advancedContextChat,
						reranker: t.RerankerAlgorithm.UMEA,
					},
					{
						model: "gpt-4",
						chatKind: i.ChatKind.advancedContextChat,
						reranker: t.RerankerAlgorithm.UMEA,
						rechunker: t.RechunkerChoice.RECHUNKER_CHOICE_600_TOKS,
					},
					{
						model: "gpt-4",
						chatKind: i.ChatKind.advancedContextChat,
						reranker: t.RerankerAlgorithm.LULEA,
					},
					{
						model: "gpt-4",
						chatKind: i.ChatKind.advancedContextChat,
						reranker: t.RerankerAlgorithm.LULEA,
						rechunker: t.RechunkerChoice.RECHUNKER_CHOICE_600_TOKS,
					},
					{
						model: "gpt-4",
						chatKind: i.ChatKind.advancedContextChat,
						reranker: t.RerankerAlgorithm.VOYAGE_EMBEDS,
					},
					{
						model: "gpt-4",
						chatKind: i.ChatKind.advancedContextChat,
						reranker: t.RerankerAlgorithm.VOYAGE_EMBEDS,
						rechunker: t.RechunkerChoice.RECHUNKER_CHOICE_600_TOKS,
					},
					{
						model: "gpt-4",
						chatKind: i.ChatKind.advancedContextChat,
						reranker: t.RerankerAlgorithm.VOYAGE,
					},
					{
						model: "gpt-4",
						chatKind: i.ChatKind.advancedContextChat,
						reranker: t.RerankerAlgorithm.COHERE,
					},
					{
						model: "gpt-4",
						chatKind: i.ChatKind.advancedContextChat,
						reranker: t.RerankerAlgorithm.COHERE,
						rechunker: t.RechunkerChoice.RECHUNKER_CHOICE_600_TOKS,
					},
					{
						model: "gpt-4",
						chatKind: i.ChatKind.advancedContextChat,
						reranker: t.RerankerAlgorithm.NONE,
					},
					{ model: "gemini-1.5-preview", chatKind: i.ChatKind.longContextChat },
					{
						model: "claude-3-haiku-200k",
						chatKind: i.ChatKind.longContextChat,
					},
					{ model: "claude-3-opus-200k", chatKind: i.ChatKind.longContextChat },
				]);
		}),
		