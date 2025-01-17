import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/cancellation.js';
import '../../../../../base/common/map.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/log/common/log.js';
import '../../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../notebook/common/notebookService.js';
import './searchNotebookHelpers.js';
import '../../../../services/search/common/search.js';
import '../../../../../base/common/arrays.js';
import '../../../../../base/common/types.js';
import '../../../../services/editor/common/editorResolverService.js';
import '../../../notebook/browser/services/notebookEditorService.js';
import '../../../../services/search/common/queryBuilder.js';
import '../../../../../platform/instantiation/common/instantiation.js';
define(
			de[3596],
			he([1, 0, 33, 59, 10, 34, 68, 161, 1865, 186, 24, 28, 231, 293, 361, 5]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2Nc = void 0),
					(u = mt(u));
				let p = class {
					constructor(f, b, s, l, y, $, v, S) {
						(this.b = f),
							(this.c = b),
							(this.d = s),
							(this.f = l),
							(this.g = y),
							(this.h = $),
							(this.i = v),
							(this.a = S.createInstance(n.$M8));
					}
					notebookSearch(f, b, s, l) {
						if (f.type !== r.QueryType.Text)
							return {
								openFilesToScan: new i.$Hc(),
								completeData: Promise.resolve({
									messages: [],
									limitHit: !1,
									results: [],
								}),
								allScannedFiles: Promise.resolve(new i.$Hc()),
							};
						const y = this.m(),
							$ = y.map((I) => I.viewModel.uri),
							S = (() => {
								const I = Date.now(),
									T = this.l(f, b ?? t.CancellationToken.None, y, s),
									P = Date.now(),
									k =
										this.g.getValue("search").experimental
											?.closedNotebookRichContentResults ?? !1;
								let L = Promise.resolve(void 0);
								k &&
									(L = this.k(
										f,
										new i.$Hc($, (M) => this.b.extUri.getComparisonKey(M)),
										b ?? t.CancellationToken.None,
									));
								const D = Promise.all([T, L]);
								return {
									completeData: D.then((M) => {
										const N = M[0],
											A = M[1],
											R = M.filter((U) => !!U),
											O = [
												...N.results.values(),
												...(A?.results.values() ?? []),
											],
											B = u.$Lb(O);
										return (
											l && B.forEach(l),
											this.d.trace(`local notebook search time | ${P - I}ms`),
											{
												messages: [],
												limitHit: R.reduce((U, z) => U || z.limitHit, !1),
												results: B,
											}
										);
									}),
									allScannedFiles: D.then((M) => {
										const N = M[0],
											A = M[1],
											R = u.$Lb([
												...N.results.keys(),
												...(A?.results.keys() ?? []),
											]);
										return new i.$Hc(R, (O) =>
											this.b.extUri.getComparisonKey(O),
										);
									}),
								};
							})();
						return {
							openFilesToScan: new i.$Hc($),
							completeData: S.completeData,
							allScannedFiles: S.allScannedFiles,
						};
					}
					async j(f, b, s) {
						const l = f.map(async (y) => {
							const $ = this.a.file(
								b.map((v) => v.folder),
								{
									includePattern: y.startsWith("/") ? y : "**/" + y,
									exists: !0,
									onlyFileScheme: !0,
								},
							);
							return this.i.fileSearch($, s).then((v) => !!v.limitHit);
						});
						return Promise.any(l);
					}
					async k(f, b, s) {
						const l = this.h.getAllUserAssociations(),
							y = new Map(),
							$ = this.f.getContributedNotebookTypes();
						l.forEach((M) => {
							if (!M.filenamePattern) return;
							const N = {
									isFromSettings: !0,
									filenamePatterns: [M.filenamePattern],
								},
								A = y.get(M.viewType);
							A ? y.set(M.viewType, A.concat(N)) : y.set(M.viewType, [N]);
						});
						const v = [];
						$.forEach((M) => {
							M.selectors.length > 0 &&
								v.push(
									(async () => {
										const N = M.selectors.map((R) =>
											(R.include || R).toString(),
										);
										if (await this.j(N, f.folderQueries, s))
											return (await this.f.canResolve(M.id))
												? await (
														await this.f.withNotebookDataProvider(M.id)
													).serializer.searchInNotebooks(f, s, y)
												: void 0;
									})(),
								);
						});
						const S = Date.now(),
							I = u.$Lb(await Promise.all(v)),
							T = I.flatMap((M) => M.results);
						let P = I.some((M) => M.limitHit);
						const k = new i.$Gc((M) => this.b.extUri.getComparisonKey(M));
						let L = 0;
						for (const M of T) {
							if (f.maxResults && L >= f.maxResults) {
								P = !0;
								break;
							}
							!b.has(M.resource) &&
								!k.has(M.resource) &&
								(k.set(M.resource, M.cellResults.length > 0 ? M : null), L++);
						}
						const D = Date.now();
						return (
							this.d.trace(`query: ${f.contentPattern.pattern}`),
							this.d.trace(`closed notebook search time | ${D - S}ms`),
							{ results: k, limitHit: P }
						);
					}
					async l(f, b, s, l) {
						const y = new i.$Gc((v) => this.b.extUri.getComparisonKey(v));
						let $ = !1;
						for (const v of s) {
							if (!v.hasModel()) continue;
							const S = ((0, a.$pg)(f.maxResults) ? f.maxResults : r.$o7) + 1,
								I = v.viewModel.uri;
							if (!(0, r.$y7)(f, I.fsPath)) continue;
							let T = await v.find(
								f.contentPattern.pattern,
								{
									regex: f.contentPattern.isRegExp,
									wholeWord: f.contentPattern.isWordMatch,
									caseSensitive: f.contentPattern.isCaseSensitive,
									includeMarkupInput:
										f.contentPattern.notebookInfo?.isInNotebookMarkdownInput ??
										!0,
									includeMarkupPreview:
										f.contentPattern.notebookInfo
											?.isInNotebookMarkdownPreview ?? !0,
									includeCodeInput:
										f.contentPattern.notebookInfo?.isInNotebookCellInput ?? !0,
									includeOutput:
										f.contentPattern.notebookInfo?.isInNotebookCellOutput ?? !0,
								},
								b,
								!1,
								!0,
								l,
							);
							if (T.length) {
								S && T.length >= S && (($ = !0), (T = T.slice(0, S - 1)));
								const P = T.map((L) => {
										const D = (0, m.$yNc)(L.contentMatches, L.cell),
											M = (0, m.$zNc)(L.webviewMatches);
										return {
											cell: L.cell,
											index: L.index,
											contentResults: D,
											webviewResults: M,
										};
									}),
									k = { resource: I, cellResults: P };
								y.set(I, k);
							} else y.set(I, null);
						}
						return { results: y, limitHit: $ };
					}
					m() {
						return this.c
							.retrieveAllExistingWidgets()
							.map((b) => b.value)
							.filter((b) => !!b && b.hasModel());
					}
				};
				(e.$2Nc = p),
					(e.$2Nc = p =
						Ne(
							[
								j(0, C.$Vl),
								j(1, c.$n5b),
								j(2, E.$ik),
								j(3, d.$MIb),
								j(4, w.$gj),
								j(5, h.$E6),
								j(6, r.$p7),
								j(7, g.$Li),
							],
							p,
						));
			},
		),
		