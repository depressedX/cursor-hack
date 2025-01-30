import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/async.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/map.js';
import '../../../../base/common/network.js';
import '../../../../base/common/stopwatch.js';
import '../../../../base/common/types.js';
import '../../../../editor/common/services/model.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../common/editor.js';
import '../../editor/common/editorService.js';
import '../../extensions/common/extensions.js';
import './search.js';
import './searchHelpers.js';
define(
			de[3600],
			he([
				1, 0, 24, 15, 29, 3, 59, 23, 162, 28, 67, 22, 34, 32, 68, 44, 18, 53,
				186, 1866,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*async*/,
 w /*errors*/,
 E /*lifecycle*/,
 C /*map*/,
 d /*network*/,
 m /*stopwatch*/,
 r /*types*/,
 u /*model*/,
 a /*files*/,
 h /*log*/,
 c /*telemetry*/,
 n /*uriIdentity*/,
 g /*editor*/,
 p /*editorService*/,
 o /*extensions*/,
 f /*search*/,
 b /*searchHelpers*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$m4c = void 0),
					(t = mt(t));
				let s = class extends E.$1c {
					constructor(y, $, v, S, I, T, P) {
						super(),
							(this.n = y),
							(this.q = $),
							(this.r = v),
							(this.s = S),
							(this.t = I),
							(this.u = T),
							(this.w = P),
							(this.a = new Map()),
							(this.b = new Map()),
							(this.f = new Map()),
							(this.g = new Map()),
							(this.h = new Map()),
							(this.j = new Map()),
							(this.m = new Set());
					}
					registerSearchResultProvider(y, $, v) {
						let S, I;
						if ($ === f.SearchProviderType.file) (S = this.a), (I = this.g);
						else if ($ === f.SearchProviderType.text)
							(S = this.b), (I = this.h);
						else if ($ === f.SearchProviderType.aiText)
							(S = this.f), (I = this.j);
						else throw new Error("Unknown SearchProviderType");
						return (
							S.set(y, v),
							I.has(y) && (I.get(y).complete(v), I.delete(y)),
							(0, E.$Yc)(() => {
								S.delete(y);
							})
						);
					}
					async textSearch(y, $, v) {
						const S = this.textSearchSplitSyncAsync(y, $, v),
							I = S.syncResults,
							T = await S.asyncResults;
						return {
							limitHit: T.limitHit || I.limitHit,
							results: [...T.results, ...I.results],
							messages: [...T.messages, ...I.messages],
						};
					}
					async aiTextSearch(y, $, v) {
						const S = (I) => {
							v && ((0, f.$r7)(I), v(I)),
								(0, f.$s7)(I) &&
									this.s.debug("SearchService#search", I.message);
						};
						return this.z(y, $, S);
					}
					textSearchSplitSyncAsync(y, $, v, S, I) {
						const T = this.M(y);
						return (
							v &&
								t
									.$Lb([...T.results.values()])
									.filter((L) => !(S && S.has(L.resource)))
									.forEach(v),
							{
								syncResults: {
									results: t.$Lb([...T.results.values()]),
									limitHit: T.limitHit ?? !1,
									messages: [],
								},
								asyncResults: (async () => {
									const L = (await I) ?? new C.$Hc(),
										D = (M) => {
											(0, f.$r7)(M)
												? !T.results.has(M.resource) &&
													!L.has(M.resource) &&
													v &&
													v(M)
												: v && v(M),
												(0, f.$s7)(M) &&
													this.s.debug("SearchService#search", M.message);
										};
									return await this.z(y, $, D);
								})(),
							}
						);
					}
					fileSearch(y, $) {
						return this.z(y, $);
					}
					z(y, $, v) {
						this.s.trace("SearchService#search", JSON.stringify(y));
						const S = this.C(y),
							I = [Promise.resolve(null)];
						S.forEach((P) => I.push(this.t.activateByEvent(`onSearch:${P}`))),
							I.push(this.t.activateByEvent("onSearch:file"));
						const T = (async () => {
							if (
								(await Promise.all(I),
								await this.t.whenInstalledExtensionsRegistered(),
								$ && $.isCancellationRequested)
							)
								return Promise.reject(new w.$9());
							const P = (D) => {
									($ && $.isCancellationRequested) || v?.(D);
								},
								k = await Promise.all(
									y.folderQueries.map((D) => this.u.exists(D.folder)),
								);
							y.folderQueries = y.folderQueries.filter((D, M) => k[M]);
							let L = await this.I(y, P, $);
							return (
								(L = t.$Lb(L)),
								L.length
									? {
											limitHit: L[0] && L[0].limitHit,
											stats: L[0].stats,
											messages: t
												.$Lb(L.flatMap((D) => D.messages))
												.filter(t.$Rb((D) => D.type + D.text + D.trusted)),
											results: L.flatMap((D) => D.results),
										}
									: { limitHit: !1, results: [], messages: [] }
							);
						})();
						return $ ? (0, i.$Bh)(T, $) : T;
					}
					C(y) {
						const $ = new Set();
						return (
							y.folderQueries?.forEach((v) => $.add(v.folder.scheme)),
							y.extraFileResources?.forEach((v) => $.add(v.scheme)),
							$
						);
					}
					async F(y, $) {
						const v = this.H(y);
						if (v.has($)) return v.get($).p;
						{
							const S = new i.$0h();
							return v.set($, S), S.p;
						}
					}
					G(y) {
						switch (y) {
							case f.QueryType.File:
								return this.a;
							case f.QueryType.Text:
								return this.b;
							case f.QueryType.aiText:
								return this.f;
							default:
								throw new Error(`Unknown query type: ${y}`);
						}
					}
					H(y) {
						switch (y) {
							case f.QueryType.File:
								return this.g;
							case f.QueryType.Text:
								return this.h;
							case f.QueryType.aiText:
								return this.j;
							default:
								throw new Error(`Unknown query type: ${y}`);
						}
					}
					async I(y, $, v) {
						const S = m.$le.create(!1),
							I = [],
							T = this.J(y),
							P = [...T.keys()].some((k) => this.G(y.type).has(k));
						return y.type === f.QueryType.aiText && !P
							? []
							: (await Promise.all(
									[...T.keys()].map(async (k) => {
										if (y.onlyFileScheme && k !== d.Schemas.file) return;
										const L = T.get(k);
										let D = this.G(y.type).get(k);
										if (!D)
											if (P) {
												this.m.has(k) ||
													(this.s.warn(
														`No search provider registered for scheme: ${k}. Another scheme has a provider, not waiting for ${k}`,
													),
													this.m.add(k));
												return;
											} else
												this.m.has(k) ||
													(this.s.warn(
														`No search provider registered for scheme: ${k}, waiting`,
													),
													this.m.add(k)),
													(D = await this.F(y.type, k));
										const M = { ...y, folderQueries: L },
											N = () => {
												switch (y.type) {
													case f.QueryType.File:
														return D.fileSearch(M, v);
													case f.QueryType.Text:
														return D.textSearch(M, $, v);
													default:
														return D.textSearch(M, $, v);
												}
											};
										I.push(N());
									}),
								),
								Promise.all(I).then(
									(k) => {
										const L = S.elapsed();
										return (
											this.s.trace(`SearchService#search: ${L}ms`),
											k.forEach((D) => {
												this.L(y, L, D);
											}),
											k
										);
									},
									(k) => {
										const L = S.elapsed();
										this.s.trace(`SearchService#search: ${L}ms`);
										const D = (0, f.$A7)(k);
										throw (
											(this.s.trace(`SearchService#searchError: ${D.message}`),
											this.L(y, L, void 0, D),
											D)
										);
									},
								));
					}
					J(y) {
						const $ = new Map();
						return (
							y.folderQueries.forEach((v) => {
								const S = $.get(v.folder.scheme) || [];
								S.push(v), $.set(v.folder.scheme, S);
							}),
							$
						);
					}
					L(y, $, v, S) {
						const I = y.folderQueries.every(
								(k) => k.folder.scheme === d.Schemas.file,
							),
							T = y.folderQueries.every(
								(k) => k.folder.scheme !== d.Schemas.file,
							),
							P = I ? d.Schemas.file : T ? "other" : "mixed";
						if (y.type === f.QueryType.File && v && v.stats) {
							const k = v.stats;
							if (k.fromCache) {
								const L = k.detailStats;
								this.r.publicLog2("cachedSearchComplete", {
									reason: y._reason,
									resultCount: k.resultCount,
									workspaceFolderCount: y.folderQueries.length,
									endToEndTime: $,
									sortingTime: k.sortingTime,
									cacheWasResolved: L.cacheWasResolved,
									cacheLookupTime: L.cacheLookupTime,
									cacheFilterTime: L.cacheFilterTime,
									cacheEntryCount: L.cacheEntryCount,
									scheme: P,
								});
							} else {
								const L = k.detailStats;
								this.r.publicLog2("searchComplete", {
									reason: y._reason,
									resultCount: k.resultCount,
									workspaceFolderCount: y.folderQueries.length,
									endToEndTime: $,
									sortingTime: k.sortingTime,
									fileWalkTime: L.fileWalkTime,
									directoriesWalked: L.directoriesWalked,
									filesWalked: L.filesWalked,
									cmdTime: L.cmdTime,
									cmdResultCount: L.cmdResultCount,
									scheme: P,
								});
							}
						} else if (y.type === f.QueryType.Text) {
							let k;
							S &&
								(k =
									S.code === f.SearchErrorCode.regexParseError
										? "regex"
										: S.code === f.SearchErrorCode.unknownEncoding
											? "encoding"
											: S.code === f.SearchErrorCode.globParseError
												? "glob"
												: S.code === f.SearchErrorCode.invalidLiteral
													? "literal"
													: S.code === f.SearchErrorCode.other
														? "other"
														: S.code === f.SearchErrorCode.canceled
															? "canceled"
															: "unknown"),
								this.r.publicLog2("textSearchComplete", {
									reason: y._reason,
									workspaceFolderCount: y.folderQueries.length,
									endToEndTime: $,
									scheme: P,
									error: k,
								});
						}
					}
					M(y) {
						const $ = new C.$Gc((S) => this.w.extUri.getComparisonKey(S));
						let v = !1;
						if (y.type === f.QueryType.Text) {
							const S = new C.$Gc();
							for (const T of this.q.editors) {
								const P = g.$A1.getCanonicalUri(T, {
										supportSideBySide: g.SideBySideEditor.PRIMARY,
									}),
									k = g.$A1.getOriginalUri(T, {
										supportSideBySide: g.SideBySideEditor.PRIMARY,
									});
								P && S.set(P, k ?? P);
							}
							this.n.getModels().forEach((T) => {
								const P = T.uri;
								if (!P || v) return;
								const k = S.get(P);
								if (
									!k ||
									(T.getLanguageId() === f.$m7 &&
										!(
											y.includePattern && y.includePattern["**/*.code-search"]
										)) ||
									(k.scheme !== d.Schemas.untitled && !this.u.hasProvider(k)) ||
									k.scheme === "git" ||
									!this.N(k, y)
								)
									return;
								const L = ((0, r.$pg)(y.maxResults) ? y.maxResults : f.$o7) + 1;
								let D = T.findMatches(
									y.contentPattern.pattern,
									!1,
									!!y.contentPattern.isRegExp,
									!!y.contentPattern.isCaseSensitive,
									y.contentPattern.isWordMatch
										? y.contentPattern.wordSeparators
										: null,
									!1,
									L,
								);
								if (D.length) {
									L && D.length >= L && ((v = !0), (D = D.slice(0, L - 1)));
									const M = new f.$t7(k);
									$.set(k, M);
									const N = (0, b.$CNc)(D, T, y.previewOptions);
									M.results = (0, b.$DNc)(N, T, y);
								} else $.set(k, null);
							});
						}
						return { results: $, limitHit: v };
					}
					N(y, $) {
						return (0, f.$y7)($, y.fsPath);
					}
					async clearCache(y) {
						const $ = Array.from(this.a.values()).map(
							(v) => v && v.clearCache(y),
						);
						await Promise.all($);
					}
				};
				(e.$m4c = s),
					(e.$m4c = s =
						Ne(
							[
								j(0, u.$QO),
								j(1, p.$IY),
								j(2, c.$km),
								j(3, h.$ik),
								j(4, o.$q2),
								j(5, a.$ll),
								j(6, n.$Vl),
							],
							s,
						));
			},
		),
		