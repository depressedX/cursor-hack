define(de[1865], he([1, 0, 186, 17, 1864]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$vNc = E),
				(e.$wNc = C),
				(e.$xNc = d),
				(e.$yNc = m),
				(e.$zNc = r);
			function E(u) {
				return d(u) ? u.cell.id : `${w.$T7}${u.index}`;
			}
			function C(u) {
				return (
					"cellResults" in u &&
					u.cellResults instanceof Array &&
					u.cellResults.every(d)
				);
			}
			function d(u) {
				return "cell" in u;
			}
			function m(u, a) {
				return (0, w.$U7)(u, a.textBuffer);
			}
			function r(u) {
				return u
					.map((a) =>
						a.searchPreviewInfo
							? new t.$u7(
									a.searchPreviewInfo.line,
									new i.$iL(
										0,
										a.searchPreviewInfo.range.start,
										0,
										a.searchPreviewInfo.range.end,
									),
									void 0,
									a.index,
								)
							: void 0,
					)
					.filter((a) => !!a);
			}
		}),
		define(
			de[361],
			he([
				1, 0, 24, 456, 215, 222, 59, 23, 54, 19, 37, 28, 9, 543, 4, 10, 34, 68,
				25, 66, 165, 186,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$M8 = void 0),
					(e.$K8 = y),
					(e.$L8 = $),
					(e.$N8 = M),
					(t = mt(t)),
					(i = mt(i)),
					(w = mt(w)),
					(m = mt(m)),
					(u = mt(u)),
					(n = mt(n));
				function y(N) {
					return typeof N == "object" && "uri" in N && "pattern" in N;
				}
				function $(N) {
					return typeof N == "string"
						? { pattern: N }
						: { pattern: N.pattern, uri: N.baseUri };
				}
				let v = class {
					constructor(A, R, O, B, U, z) {
						(this.a = A),
							(this.b = R),
							(this.c = O),
							(this.d = B),
							(this.f = U),
							(this.g = z);
					}
					text(A, R, O = {}) {
						A = this.h(A, O);
						const B = this.a.getValue(),
							U =
								R &&
								R.some(
									(F) => !this.a.getValue({ resource: F }).search.useRipgrep,
								);
						return {
							...this.j(R?.map(f.$8i), O),
							type: l.QueryType.Text,
							contentPattern: A,
							previewOptions: O.previewOptions,
							maxFileSize: O.maxFileSize,
							usePCRE2: B.search.usePCRE2 || U || !1,
							surroundingContext: O.surroundingContext,
							userDisabledExcludesAndIgnoreFiles:
								O.disregardExcludeSettings && O.disregardIgnoreFiles,
						};
					}
					h(A, R) {
						const O = this.a.getValue();
						A.isRegExp && (A.pattern = A.pattern.replace(/\r?\n/g, "\\n"));
						const B = { ...A, wordSeparators: O.editor.wordSeparators };
						return (
							this.l(A, R) && (B.isCaseSensitive = !0),
							this.m(A) && (B.isMultiline = !0),
							R.notebookSearchConfig?.includeMarkupInput &&
								(B.notebookInfo || (B.notebookInfo = {}),
								(B.notebookInfo.isInNotebookMarkdownInput =
									R.notebookSearchConfig.includeMarkupInput)),
							R.notebookSearchConfig?.includeMarkupPreview &&
								(B.notebookInfo || (B.notebookInfo = {}),
								(B.notebookInfo.isInNotebookMarkdownPreview =
									R.notebookSearchConfig.includeMarkupPreview)),
							R.notebookSearchConfig?.includeCodeInput &&
								(B.notebookInfo || (B.notebookInfo = {}),
								(B.notebookInfo.isInNotebookCellInput =
									R.notebookSearchConfig.includeCodeInput)),
							R.notebookSearchConfig?.includeOutput &&
								(B.notebookInfo || (B.notebookInfo = {}),
								(B.notebookInfo.isInNotebookCellOutput =
									R.notebookSearchConfig.includeOutput)),
							B
						);
					}
					file(A, R = {}) {
						return {
							...this.j(A, R),
							type: l.QueryType.File,
							filePattern: R.filePattern ? R.filePattern.trim() : R.filePattern,
							exists: R.exists,
							sortByScore: R.sortByScore,
							cacheKey: R.cacheKey,
							shouldGlobMatchFilePattern: R.shouldGlobSearch,
						};
					}
					i(A, R) {
						if (!A) return {};
						if (Array.isArray(A)) {
							if (((A = A.filter((O) => O.length > 0).map(k)), !A.length))
								return {};
						} else A = k(A);
						return R
							? this.parseSearchPaths(A)
							: { pattern: I(...(Array.isArray(A) ? A : [A])) };
					}
					j(A = [], R = {}) {
						let O = Array.isArray(R.excludePattern)
							? R.excludePattern.map((q) => q.pattern).flat()
							: R.excludePattern;
						O = O?.length === 1 ? O[0] : O;
						const B = this.i(R.includePattern, R.expandPatterns),
							U = this.i(O, R.expandPatterns),
							z = A.length > 1,
							F = (
								B.searchPaths && B.searchPaths.length
									? B.searchPaths.map((q) => this.t(q, R, U))
									: A.map((q) => this.u(q, R, U, z))
							).filter((q) => !!q),
							x = {
								_reason: R._reason,
								folderQueries: F,
								usingSearchPaths: !!(B.searchPaths && B.searchPaths.length),
								extraFileResources: R.extraFileResources,
								excludePattern: U.pattern,
								includePattern: B.pattern,
								onlyOpenEditors: R.onlyOpenEditors,
								maxResults: R.maxResults,
								onlyFileScheme: R.onlyFileScheme,
							};
						if (R.onlyOpenEditors) {
							const q = t.$Lb(
								this.c.groups.flatMap((K) => K.editors.map((J) => J.resource)),
							);
							this.d.trace(
								"QueryBuilder#commonQuery - openEditor URIs",
								JSON.stringify(q),
							);
							const V = q.filter((K) => (0, l.$y7)(x, K.fsPath)),
								G = this.k(V);
							return (
								this.d.trace(
									"QueryBuilder#commonQuery - openEditor Query",
									JSON.stringify(G),
								),
								{ ...x, ...G }
							);
						}
						const H =
							R.extraFileResources &&
							R.extraFileResources.filter((q) => (0, l.$y7)(x, q.fsPath));
						return (x.extraFileResources = H && H.length ? H : void 0), x;
					}
					k(A) {
						const R = [],
							O = new C.$Gc(),
							B = {};
						let U = !1;
						return (
							A.forEach((z) => {
								if (z.scheme === d.Schemas.walkThrough) return;
								if ((0, r.$rh)(z)) {
									const x =
										this.b.getWorkspaceFolder(z)?.uri ??
										this.g.extUri.dirname(z);
									let H = O.get(x);
									H ||
										((U = !0),
										(H = { folder: x, includePattern: {} }),
										R.push(H),
										O.set(x, H));
									const q = m.$qc(x.fsPath, z.fsPath);
									(0, a.$wg)(H.includePattern)[q.replace(/\\/g, "/")] = !0;
								} else z.fsPath && ((U = !0), (B[z.fsPath] = !0));
							}),
							{
								folderQueries: R,
								includePattern: B,
								usingSearchPaths: !0,
								excludePattern: U ? void 0 : { "**/*": !0 },
							}
						);
					}
					l(A, R) {
						if (R.isSmartCase) {
							if (A.isRegExp) {
								if (u.$cg(A.pattern, !0)) return !0;
							} else if (u.$cg(A.pattern)) return !0;
						}
						return !!A.isCaseSensitive;
					}
					m(A) {
						return A.isMultiline ||
							(A.isRegExp && (0, c.$YU)(A.pattern)) ||
							A.pattern.indexOf(`
`) >= 0
							? !0
							: !!A.isMultiline;
					}
					parseSearchPaths(A) {
						const R = (V) => m.$nc(V) || /^\.\.?([\/\\]|$)/.test(V),
							B = (Array.isArray(A) ? A : T(A)).map((V) => {
								const G = this.f.resolvedUserHome;
								return G
									? (0, E.$zO)(
											V,
											G.scheme === d.Schemas.file ? G.fsPath : G.path,
										)
									: V;
							}),
							U = i.$e(B, (V) => (R(V) ? "searchPaths" : "exprSegments")),
							z = (U.exprSegments || [])
								.map((V) => u.$uf(V, "/"))
								.map((V) => u.$uf(V, "\\"))
								.map((V) => (V[0] === "." && (V = "*" + V), P(V))),
							F = {},
							x = this.o(U.searchPaths || []);
						x && x.length && (F.searchPaths = x);
						const H = z.flat(),
							q = I(...H);
						return q && (F.pattern = q), F;
					}
					n(A, R) {
						return R.disregardExcludeSettings
							? void 0
							: (0, l.$x7)(A, !R.disregardSearchExcludeSettings);
					}
					o(A) {
						if (!A || !A.length) return [];
						const R = A.flatMap((B) => {
								let { pathPortion: U, globPortion: z } = S(B);
								return z && (z = L(z)), this.q(U).flatMap((x) => this.r(x, z));
							}),
							O = new Map();
						return (
							R.forEach((B) => {
								const U = B.searchPath.toString(),
									z = O.get(U);
								z
									? B.pattern &&
										((z.pattern = z.pattern || {}), (z.pattern[B.pattern] = !0))
									: O.set(U, {
											searchPath: B.searchPath,
											pattern: B.pattern ? I(B.pattern) : void 0,
										});
							}),
							Array.from(O.values())
						);
					}
					q(A) {
						if (m.$nc(A)) {
							const R = this.b.getWorkspace().folders;
							return R[0] && R[0].uri.scheme !== d.Schemas.file
								? [{ searchPath: R[0].uri.with({ path: A }) }]
								: [{ searchPath: h.URI.file(m.$mc(A)) }];
						}
						if (this.b.getWorkbenchState() === f.WorkbenchState.FOLDER) {
							const R = this.b.getWorkspace().folders[0].uri;
							if (((A = k(A)), A.startsWith("../") || A === "..")) {
								const B = m.$lc.resolve(R.path, A);
								return [{ searchPath: R.with({ path: B }) }];
							}
							const O = L(A);
							return [{ searchPath: R, pattern: O }];
						} else {
							if (A === "./" || A === ".\\") return [];
							{
								const R = A.replace(/^\.[\/\\]/, ""),
									B = this.b
										.getWorkspace()
										.folders.map((U) => {
											const z = R.match(
												new RegExp(`^${u.$of(U.name)}(?:/(.*)|$)`),
											);
											return z ? { match: z, folder: U } : null;
										})
										.filter(a.$tg);
								if (B.length)
									return B.map((U) => {
										const z = U.match[1];
										return { searchPath: U.folder.uri, pattern: z && L(z) };
									});
								{
									const U = A.match(/\.[\/\\](.+)[\/\\]?/),
										z = U ? U[1] : A,
										F = n.localize(12648, null, z);
									throw new Error(F);
								}
							}
						}
					}
					r(A, R) {
						const O = A.pattern && R ? `${A.pattern}/${R}` : A.pattern || R,
							B = [{ searchPath: A.searchPath, pattern: O }];
						return (
							O &&
								!O.endsWith("**") &&
								B.push({ searchPath: A.searchPath, pattern: O + "/**" }),
							B
						);
					}
					t(A, R, O) {
						const B = this.u((0, f.$8i)(A.searchPath), R, O, !1);
						return B ? { ...B, includePattern: A.pattern } : null;
					}
					u(A, R, O, B) {
						let U;
						const z = h.URI.isUri(A) ? A : A.uri;
						let F = R.excludePattern?.map((K) => {
							const J = R.excludePattern && y(K) ? K.uri : void 0;
							return !J || !(h.URI.isUri(A) && this.g.extUri.isEqual(A, J))
								? J
								: void 0;
						});
						if ((F?.length || (F = [void 0]), O.searchPaths)) {
							const K = O.searchPaths.filter((J) =>
								(0, r.$gh)(J.searchPath, z),
							)[0];
							if (K && !K.pattern) return null;
							K && (U = K.pattern);
						}
						const x = this.a.getValue({ resource: z }),
							q = { ...(this.n(x, R) || {}), ...(U || {}) },
							V = h.URI.isUri(A) ? (0, r.$kh)(A) : A.name,
							G = F.map((K) =>
								Object.keys(q).length > 0 ? { folder: K, pattern: q } : void 0,
							).filter((K) => K);
						return {
							folder: z,
							folderName: B ? V : void 0,
							excludePattern: G,
							fileEncoding: x.files && x.files.encoding,
							disregardIgnoreFiles:
								typeof R.disregardIgnoreFiles == "boolean"
									? R.disregardIgnoreFiles
									: !x.search.useIgnoreFiles,
							disregardGlobalIgnoreFiles:
								typeof R.disregardGlobalIgnoreFiles == "boolean"
									? R.disregardGlobalIgnoreFiles
									: !x.search.useGlobalIgnoreFiles,
							disregardParentIgnoreFiles:
								typeof R.disregardParentIgnoreFiles == "boolean"
									? R.disregardParentIgnoreFiles
									: !x.search.useParentIgnoreFiles,
							ignoreSymlinks:
								typeof R.ignoreSymlinks == "boolean"
									? R.ignoreSymlinks
									: !x.search.followSymlinks,
						};
					}
				};
				(e.$M8 = v),
					(e.$M8 = v =
						Ne(
							[
								j(0, g.$gj),
								j(1, f.$Vi),
								j(2, b.$EY),
								j(3, p.$ik),
								j(4, s.$I8),
								j(5, o.$Vl),
							],
							v,
						));
				function S(N) {
					const A = N.match(/[\*\{\}\(\)\[\]\?]/);
					if (A) {
						const R = A.index,
							O = N.substr(0, R).match(/[/|\\][^/\\]*$/);
						if (O) {
							let B = N.substr(0, O.index);
							return (
								B.match(/[/\\]/) || (B += "/"),
								{ pathPortion: B, globPortion: N.substr((O.index || 0) + 1) }
							);
						}
					}
					return { pathPortion: N };
				}
				function I(...N) {
					return N.length
						? N.reduce((A, R) => ((A[R] = !0), A), Object.create(null))
						: void 0;
				}
				function T(N) {
					return w
						.$Hk(N, ",")
						.map((A) => A.trim())
						.filter((A) => !!A.length);
				}
				function P(N) {
					return [`**/${N}/**`, `**/${N}`].map((R) =>
						R.replace(/\*\*\/\*\*/g, "**"),
					);
				}
				function k(N) {
					return N.replace(/\\/g, "/");
				}
				function L(N) {
					return k(N).replace(/^\.\//, "").replace(/\/+$/g, "");
				}
				function D(N) {
					return N.replace(/([?*[\]])/g, "[$1]");
				}
				function M(N, A) {
					N = t.$Qb(N, (B) => B.toString());
					const R = [],
						O = A.getWorkspace();
					return (
						N &&
							N.forEach((B) => {
								let U;
								if (A.getWorkbenchState() === f.WorkbenchState.FOLDER)
									(U = (0, r.$ph)(O.folders[0].uri, B)),
										U && U !== "." && (U = "./" + U);
								else {
									const z = A.getWorkspaceFolder(B);
									if (z) {
										const F = z.name;
										if (O.folders.filter((H) => H.name === F).length === 1) {
											const H = (0, r.$ph)(z.uri, B);
											H === "" ? (U = `./${z.name}`) : (U = `./${z.name}/${H}`);
										} else U = B.fsPath;
									}
								}
								U && R.push(D(U));
							}),
						R
					);
				}
			},
		),
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
		