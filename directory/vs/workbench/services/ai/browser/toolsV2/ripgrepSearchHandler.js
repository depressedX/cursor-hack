import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../../../platform/workspace/common/workspace.js';
import './toolsV2HandlerRegistryService.js';
import '../../../search/common/search.js';
import '../../../search/common/queryBuilder.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../base/common/uri.js';
import '../../../../../base/common/cancellation.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../selectedContext/browser/selectedContext.js';
define(
			de[3930],
			he([1, 0, 124, 25, 398, 186, 361, 5, 9, 33, 124, 271]),
			function (ce /*require*/,
 e /*exports*/,
 t /*tools_pb*/,
 i /*workspace*/,
 w /*toolsV2HandlerRegistryService*/,
 E /*search*/,
 C /*queryBuilder*/,
 d /*instantiation*/,
 m /*uri*/,
 r /*cancellation*/,
 u /*tools_pb*/,
 a /*selectedContext*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1yc = void 0);
				let h = class extends w.$Xyc {
					constructor(N, A, R, O) {
						super(),
							(this.b = N),
							(this.c = A),
							(this.d = R),
							(this.e = O),
							(this.a = this.c.createInstance(C.$M8));
					}
					async call(N, A, R) {
						if (!N)
							throw new Error(
								"No ripgrep search parameters provided. Need to give at least the query.",
							);
						const O = this.b.getWorkspace().folders.map((K) => K.uri),
							B = g(N.options),
							U = c(N.patternInfo);
						if (!U)
							throw new Error(
								"No pattern info provided. Need to give at least the query.",
							);
						const z = this.a.text(U, O, B),
							F = new r.$Ce();
						A.signal.addEventListener("abort", () => {
							F.cancel();
						});
						const x = await this.d.textSearch(z, F.token),
							H = await this.e.filterCursorIgnoredFiles(
								x.results,
								(K) => K.resource,
							),
							q = new t.$fy({
								results: H.map(l),
								exit: x.exit !== void 0 ? L(x.exit) : void 0,
								limitHit: x.limitHit,
								messages: x.messages.map((K) => ({
									text: K.text,
									type: D(K.type),
									trusted: K.trusted,
								})),
								stats: x.stats ? s(x.stats) : void 0,
							});
						let V = q.toBinary(),
							G = 0;
						for (; V.length > 1 * 1024 * 1024; )
							if (
								(G++,
								(q.results = q.results.slice(0, q.results.length / 2)),
								(V = q.toBinary()),
								G > 4)
							)
								throw new Error("Result is too large.");
						return new t.$ey({ internal: q });
					}
				};
				(e.$1yc = h),
					(e.$1yc = h =
						Ne([j(0, i.$Vi), j(1, d.$Li), j(2, E.$p7), j(3, a.$Q9b)], h));
				function c(M) {
					if (M)
						return {
							pattern: M.pattern,
							isRegExp: M.isRegExp,
							isWordMatch: M.isWordMatch,
							wordSeparators: M.wordSeparators,
							isMultiline: M.isMultiline,
							isUnicode: M.isUnicode,
							isCaseSensitive: M.isCaseSensitive,
							notebookInfo: n(M.notebookInfo),
						};
				}
				function n(M) {
					if (M)
						return {
							isInNotebookMarkdownInput: M.isInNotebookMarkdownInput,
							isInNotebookMarkdownPreview: M.isInNotebookMarkdownPreview,
							isInNotebookCellInput: M.isInNotebookCellInput,
							isInNotebookCellOutput: M.isInNotebookCellOutput,
						};
				}
				function g(M) {
					if (M !== void 0)
						return {
							previewOptions: b(M.previewOptions),
							fileEncoding: M.fileEncoding,
							surroundingContext: M.surroundingContext,
							isSmartCase: M.isSmartCase,
							notebookSearchConfig: f(M.notebookSearchConfig),
							_reason: M.reason,
							excludePattern:
								M.excludePattern !== void 0
									? M.excludePattern.excludePattern.map(p)
									: void 0,
							includePattern:
								M.includePattern !== void 0 ? o(M.includePattern) : void 0,
							extraFileResources:
								M.extraFileResources !== void 0
									? M.extraFileResources.extraFileResources.map((N) =>
											m.URI.file(N),
										)
									: void 0,
							expandPatterns: M.expandPatterns,
							maxResults: M.maxResults,
							maxFileSize: M.maxFileSize,
							disregardIgnoreFiles: M.disregardIgnoreFiles,
							disregardGlobalIgnoreFiles: M.disregardGlobalIgnoreFiles,
							disregardParentIgnoreFiles: M.disregardParentIgnoreFiles,
							disregardExcludeSettings: M.disregardExcludeSettings,
							disregardSearchExcludeSettings: M.disregardSearchExcludeSettings,
							ignoreSymlinks: M.ignoreSymlinks,
							onlyOpenEditors: M.onlyOpenEditors,
							onlyFileScheme: M.onlyFileScheme,
						};
				}
				function p(M) {
					return {
						uri: M.uri !== void 0 ? m.URI.file(M.uri) : void 0,
						pattern: M.pattern !== void 0 ? o(M.pattern) : [],
					};
				}
				function o(M) {
					return M.pattern !== void 0 ? M.pattern : M.patterns;
				}
				function f(M) {
					if (M)
						return {
							includeMarkupInput: M.includeMarkupInput,
							includeMarkupPreview: M.includeMarkupPreview,
							includeCodeInput: M.includeCodeInput,
							includeOutput: M.includeOutput,
						};
				}
				function b(M) {
					if (M)
						return { matchLines: M.matchLines, charsPerLine: M.charsPerLine };
				}
				function s(M) {
					return !("fromCache" in M) && !("resultCount" in M)
						? { case: "textSearchStats", value: new t.$oy({ type: I(M.type) }) }
						: { case: "fileSearchStats", value: T(M) };
				}
				function l(M) {
					return new u.$gy({
						resource: M.resource.toString(),
						results: M.results?.map(y) ?? [],
					});
				}
				function y(M) {
					return "rangeLocations" in M
						? new u.$hy({ result: { case: "match", value: $(M) } })
						: new u.$hy({ result: { case: "context", value: v(M) } });
				}
				function $(M) {
					return new u.$iy({
						uri: M.uri?.toString(),
						rangeLocations: M.rangeLocations.map((N) => ({
							source: S(N.source),
							preview: S(N.preview),
						})),
						previewText: M.previewText,
						webviewIndex: M.webviewIndex,
						cellFragment: M.cellFragment,
					});
				}
				function v(M) {
					return new u.$jy({
						uri: M.uri?.toString(),
						text: M.text,
						lineNumber: M.lineNumber,
					});
				}
				function S(M) {
					return new u.$ly({
						startLineNumber: M.startLineNumber,
						startColumn: M.startColumn,
						endLineNumber: M.endLineNumber,
						endColumn: M.endColumn,
					});
				}
				function I(M) {
					switch (M) {
						case "textSearchProvider":
							return t
								.RipgrepSearchResultInternal_ITextSearchStats_TextSearchProviderType
								.TEXT_SEARCH_PROVIDER;
						case "searchProcess":
							return t
								.RipgrepSearchResultInternal_ITextSearchStats_TextSearchProviderType
								.SEARCH_PROCESS;
						case "aiTextSearchProvider":
							return t
								.RipgrepSearchResultInternal_ITextSearchStats_TextSearchProviderType
								.AI_TEXT_SEARCH_PROVIDER;
						default:
							return t
								.RipgrepSearchResultInternal_ITextSearchStats_TextSearchProviderType
								.UNSPECIFIED;
					}
				}
				function T(M) {
					return new t.$ny({
						fromCache: M.fromCache,
						detailStats: k(M.detailStats),
						resultCount: M.resultCount,
						type: P(M.type),
						sortingTime: M.sortingTime,
					});
				}
				function P(M) {
					switch (M) {
						case "fileSearchProvider":
							return t
								.RipgrepSearchResultInternal_IFileSearchStats_FileSearchProviderType
								.FILE_SEARCH_PROVIDER;
						case "searchProcess":
							return t
								.RipgrepSearchResultInternal_IFileSearchStats_FileSearchProviderType
								.SEARCH_PROCESS;
						default:
							return t
								.RipgrepSearchResultInternal_IFileSearchStats_FileSearchProviderType
								.UNSPECIFIED;
					}
				}
				function k(M) {
					return "fileWalkTime" in M
						? {
								case: "searchEngineStats",
								value: new t.$py({
									fileWalkTime: M.fileWalkTime,
									directoriesWalked: M.directoriesWalked,
									filesWalked: M.filesWalked,
									cmdTime: M.cmdTime,
									cmdResultCount: M.cmdResultCount,
								}),
							}
						: "cacheWasResolved" in M
							? {
									case: "cachedSearchStats",
									value: new t.$qy({
										cacheWasResolved: M.cacheWasResolved,
										cacheLookupTime: M.cacheLookupTime,
										cacheFilterTime: M.cacheFilterTime,
										cacheEntryCount: M.cacheEntryCount,
									}),
								}
							: "providerTime" in M
								? {
										case: "fileSearchProviderStats",
										value: new t.$ry({
											providerTime: M.providerTime,
											postProcessTime: M.postProcessTime,
										}),
									}
								: {
										case: "searchEngineStats",
										value: new t.$py({
											fileWalkTime: 0,
											directoriesWalked: 0,
											filesWalked: 0,
											cmdTime: 0,
										}),
									};
				}
				function L(M) {
					switch (M) {
						case E.SearchCompletionExitCode.Normal:
							return t.RipgrepSearchResultInternal_SearchCompletionExitCode
								.NORMAL;
						case E.SearchCompletionExitCode.NewSearchStarted:
							return t.RipgrepSearchResultInternal_SearchCompletionExitCode
								.NEW_SEARCH_STARTED;
						default:
							return t.RipgrepSearchResultInternal_SearchCompletionExitCode
								.UNSPECIFIED;
					}
				}
				function D(M) {
					switch (M) {
						case E.TextSearchCompleteMessageType.Information:
							return t.RipgrepSearchResultInternal_TextSearchCompleteMessageType
								.INFORMATION;
						case E.TextSearchCompleteMessageType.Warning:
							return t.RipgrepSearchResultInternal_TextSearchCompleteMessageType
								.WARNING;
						default:
							return t.RipgrepSearchResultInternal_TextSearchCompleteMessageType
								.UNSPECIFIED;
					}
				}
			},
		),
		