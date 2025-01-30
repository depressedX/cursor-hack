import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../proto/aiserver/v1/repository_pb.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/uri.js';
import '../../../../editor/common/languages/language.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/workspace/common/workspace.js';
import '../common/chunker.js';
import '../common/dataScrubbingService.js';
import '../../search/common/queryBuilder.js';
import '../../search/common/search.js';
import '../../textMate/browser/textMateTokenizationFeature.js';
import '../../../../base/common/glob.js';
import '../common/retrievalUtils.js';
import '../../../../base/common/cancellation.js';
define(
			de[627],
			he([
				1, 0, 272, 3, 9, 61, 22, 20, 5, 34, 25, 1791, 356, 361, 186, 841, 215,
				1792, 33,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*repository_pb*/,
 i /*lifecycle*/,
 w /*uri*/,
 E /*language*/,
 C /*files*/,
 d /*extensions*/,
 m /*instantiation*/,
 r /*log*/,
 u /*workspace*/,
 a /*chunker*/,
 h /*dataScrubbingService*/,
 c /*queryBuilder*/,
 n /*search*/,
 g /*textMateTokenizationFeature*/,
 p /*glob*/,
 o /*retrievalUtils*/,
 f /*cancellation*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$P6b = e.$O6b = void 0);
				const b = 1e6;
				e.$O6b = (0, m.$Mi)("keywordSearchService");
				let s = class extends i.$1c {
					constructor(S, I, T, P, k, L, D, M) {
						super(),
							(this.w = S),
							(this.y = I),
							(this.z = T),
							(this.C = P),
							(this.F = k),
							(this.G = L),
							(this.H = D),
							(this.I = M),
							(this.u = new Map()),
							(this.c = this.H.createInstance(c.$M8)),
							(this.g = new a.$M6b()),
							(this.j = new $(0.9, 1.2)),
							(this.n = new y());
					}
					async getFileSize(S) {
						if (this.u.has(S)) {
							const T = this.u.get(S);
							if (
								T.expiration > Date.now() &&
								T.expiration - (10 * 60 * 1e3 - 5 * 1e3) > Date.now()
							)
								return this.u.get(S).fileSize;
						}
						const I = await this.getFileSizeUnmemoized(S);
						return (
							I !== void 0 &&
								this.u.set(S, {
									expiration: Date.now() + 10 * 60 * 1e3,
									fileSize: I,
								}),
							I
						);
					}
					async getFileSizeUnmemoized(S) {
						try {
							return (await this.F.stat(w.URI.file(S))).size;
						} catch {
							return;
						}
					}
					registerTokenizationProvider(S) {
						this.h = S;
					}
					regexForTerms(...S) {
						return `(?:${S.map((T) => (T.prefix.length >= 4 ? l(T.prefix) : `${l(T.stem)}|${T.originals.map((P) => l(P)).join("|")}`)).join("|")})`;
					}
					async fullTokenize(S, I) {
						if (this.h === void 0)
							throw new Error("No tokenization provider registered");
						if (I === "plaintext") {
							const T = await this.h.getTokenizedQuery(S);
							return T == null ? [] : T.tokens;
						} else return [];
					}
					termsToQueries(S, I, T) {
						const L = [
								"**/node_modules/**",
								"**/*.lock",
								"**/*lock.yaml",
								"**/dist/**",
								...(T ?? []),
							].map((H) => ({ pattern: H })),
							D = [];
						S !== void 0 && D.push(S);
						const N = { pattern: this.regexForTerms(...D), isRegExp: !0 },
							A = { includePattern: I, excludePattern: L, maxFileSize: b },
							R = {
								...A,
								maxResults: 2e4,
								previewOptions: { matchLines: 5, charsPerLine: 1e3 },
								surroundingContext: 0,
								expandPatterns: !0,
								maxFileSize: 5e6,
							},
							O = this.z.getWorkspace().folders.map((H) => H.uri),
							B = this.c.text(N, O, R),
							U = { ...A, maxResults: 1e6 },
							z = this.c.file(O, U),
							F = { ...A, maxResults: 1e6, filePattern: S?.stem ?? "" },
							x = this.c.file(O, F);
						return { textQuery: B, fileQuery: z, fullFileQuery: x };
					}
					async userQueryToKeywordQuery(S, I) {
						const T = (L, D) => {
								let M = 0;
								for (
									let N = 0;
									N < L.length && N < D.length && L[N] === D[N];
									N++
								)
									M = N + 1;
								return L.slice(0, M);
							},
							P = await this.fullTokenize(S, "plaintext"),
							k = new Map();
						for (const L of P) {
							const D = k.get(L.stem) || {
								stem: L.stem,
								originals: [L.text],
								prefix: T(L.text.toLowerCase(), L.stem),
								count: 0,
							};
							D.originals.push(L.text), D.count++, k.set(L.stem, D);
						}
						return [...k.values()];
					}
					async searchMultipleQueries(S, I, T, P, k) {
						const L = S.map(async (D) => {
							const M = (0, p.$Ok)({
								globsNewLineSeparated: D.globsNewLineSeparated,
							});
							P !== void 0 && M.push(...P);
							const N = [...(D.excludeGlobs ?? []), ...(k ?? [])];
							return await this.search(D.text, I.topK, T ?? [], M, N);
						});
						return await (0, o.$I6b)(L, I);
					}
					async search(S, I, T, P, k) {
						const L = performance.now(),
							D = (await this.getAllFiles(P, k)).slice(0, 1e5),
							[{ fileNamesWithScores: M, fileSizes: N }, A] = await Promise.all(
								[
									this.fetchKeywordFiles(S, D, P, k),
									this.fetchKeywordFileNames(S, D),
								],
							),
							R = M.slice(0, I),
							O = A.slice(0, I),
							B = R.length == 0 ? 0 : (R[0]?.score ?? 0),
							U = R.length == 0 ? 0 : (R[R.length - 1]?.score ?? 0),
							z = O.length == 0 ? 0 : (O[0]?.score ?? 0),
							F = O.length == 0 ? 0 : (O[O.length - 1]?.score ?? 0);
						R.forEach((K) => {
							N[K.filename] >= 1e6 && (K.score *= 0.1),
								(K.score = (K.score - U) / (B - U));
						}),
							O.forEach((K) => {
								N[K.filename] >= 1e6 && (K.score *= 0.1),
									(K.score = (K.score - F) / (z - F));
							}),
							B > z
								? R.length > 0 && (R[0].score += 0.001)
								: O.length > 0 && (O[0].score += 0.001);
						const x = [...R, ...O];
						x.sort((K, J) => J.score - K.score);
						const H = x.reduce((K, J) => {
							const W = K.find((X) => X.filename === J.filename);
							return (
								W ? J.score > W.score && (W.score = J.score) : K.push(J), K
							);
						}, []);
						H.sort((K, J) => J.score - K.score);
						const q = H.slice(0, I),
							V = q.reduce((K, J) => K + N[J.filename], 0),
							G = performance.now() - L;
						return (
							this.G.info(`Cursor:keywordContext:searchDuration ${G}`),
							(
								await Promise.all(
									q.map(async (K) => {
										try {
											const J = this.z.resolveRelativePath(K.filename),
												W = (await this.F.readFile(J)).value.toString();
											return W.length > 1e6
												? []
												: [
														new t.$Uu({
															file: {
																relativeWorkspacePath: K.filename,
																contents: await this.I.cleanText(W, K.filename),
															},
															score: K.score,
														}),
													];
										} catch (J) {
											return (
												console.log("got error from reading file. ignoring", J),
												[]
											);
										}
									}),
								)
							).flat()
						);
					}
					async getAllFiles(S, I) {
						const { fileQuery: T } = this.termsToQueries(void 0, S, I),
							P = performance.now(),
							k = (await this.y.fileSearch(T)).results;
						return (
							console.info(
								`Cursor:keywordContext:fileSearchDuration ${performance.now() - P}`,
							),
							k
								.filter(
									(D) =>
										D.resource.scheme === "file" ||
										D.resource.scheme === "vscode-remote",
								)
								.map((D) => ({
									relativeWorkspacePath: this.z.asRelativePath(D.resource),
									absolute: D.resource,
								}))
						);
					}
					async J(S, I, T, P) {
						const k = (async () => {
								const z = performance.now(),
									F = 1e4,
									x = [];
								for (let V = 0; V < I.length; V += F) {
									const G = I.slice(V, V + F),
										K = await Promise.all(
											G.map(
												async (J) => await this.getFileSize(J.absolute.fsPath),
											),
										);
									x.push(...K);
								}
								const H = {};
								I.forEach((V, G) => {
									const K = x[G];
									K && (H[V.relativeWorkspacePath] = K);
								});
								const q = Object.keys(H).length;
								return { allFileSizes: H, totalFiles: q };
							})(),
							L = {},
							D = performance.now(),
							M = Promise.all(
								S.map(async (z) => {
									const { textQuery: F } = this.termsToQueries(z, T, P),
										x = performance.now(),
										H = new f.$Ce(),
										q = new Promise((K) => setTimeout(() => K(null), 1e4)),
										V = await Promise.race([this.y.textSearch(F, H.token), q]);
									if (V == null) return H.cancel(), { fileCounts: {} };
									const G = {};
									return (
										V.results.forEach((K) => {
											const J = this.z.asRelativePath(K.resource);
											(G[J] = K.results?.length ?? 0),
												K.results?.forEach((W) => {
													(0, n.$q7)(W) &&
														(L[J] || (L[J] = {}),
														(L[J][z.stem] = W.rangeLocations.map(
															(X) => X.source,
														)));
												});
										}),
										{ fileCounts: G }
									);
								}),
							),
							[{ allFileSizes: N, totalFiles: A }, R] = await Promise.all([
								k,
								M,
							]),
							O = {};
						for (const z of Object.keys(N)) O[z] = N[z];
						await Promise.all(
							Object.keys(L).map(async (z) => {
								const F = this.z.resolveRelativePath(z).fsPath,
									x = await this.getFileSize(F);
								x !== void 0 && (O[z] = x);
							}),
						);
						const B = {},
							U = {};
						for (let z = 0; z < S.length; z++) {
							const F = S[z],
								x = R[z].fileCounts;
							U[F.stem] = Object.keys(x).length;
							for (const [H, q] of Object.entries(x))
								B[H] || (B[H] = {}), (B[H][F.stem] = q);
						}
						return {
							totalFiles: A,
							matchRanges: L,
							fileSizes: O,
							termTotalFiles: U,
							fileTermCounts: B,
						};
					}
					async fetchKeywordFiles(S, I, T, P) {
						const k = await this.userQueryToKeywordQuery(S),
							L = await this.J(k, I, T, P),
							{
								fileTermCounts: D,
								termTotalFiles: M,
								totalFiles: N,
								fileSizes: A,
								matchRanges: R,
							} = L,
							B = Object.values(A).reduce((q, V) => q + V, 0) / N,
							U = k.some((q) => q.prefix.includes("test")) ? 1 : 0.2,
							z = {};
						for (const [q, V] of Object.entries(D))
							for (const [G, K] of Object.entries(V))
								z[G] || (z[G] = 0), (z[G] += K);
						const F = this.j.idf(M, N);
						return {
							fileNamesWithScores: Object.entries(D)
								.map(([q, V]) => {
									const G = this.j.bm25(V, A[q], B, F);
									return [q, G];
								})
								.map(
									([q, V]) => (
										q.includes("test") && (V *= U),
										{
											filename: q,
											matchRanges: R[q],
											termCounts: D[q],
											score: V,
											idfDict: F,
											fileSize: A[q],
										}
									),
								)
								.sort(({ score: q }, { score: V }) => V - q),
							fileSizes: A,
						};
					}
					async fetchKeywordFileNames(S, I) {
						const T = await this.userQueryToKeywordQuery(S),
							P = await this.L(T, I),
							{
								fileTermCounts: k,
								termTotalFiles: L,
								totalFiles: D,
								fileSizes: M,
							} = P,
							A = Object.values(M).reduce((F, x) => F + x, 0) / D,
							R = {};
						for (const [F, x] of Object.entries(k))
							for (const [H, q] of Object.entries(x))
								R[H] || (R[H] = 0), (R[H] += q);
						const O = T.some((F) => F.prefix.includes("test")) ? 1 : 0.2,
							B = this.j.idf(L, D);
						return Object.entries(k)
							.map(([F, x]) => {
								const H = this.j.bm25(x, M[F], A, B);
								return [F, H];
							})
							.map(
								([F, x]) => (
									F.includes("test") && (x *= O),
									{
										filename: F,
										termCounts: k[F],
										score: x,
										idfDict: B,
										fileSize: M[F],
									}
								),
							)
							.sort(({ score: F }, { score: x }) => x - F);
					}
					async L(S, I) {
						const T = {};
						for (const L of I)
							for (const D of S) {
								if (!L.relativeWorkspacePath.includes(D.stem)) continue;
								T[L.relativeWorkspacePath] || (T[L.relativeWorkspacePath] = {});
								const M = L.relativeWorkspacePath.split(D.stem).length - 1;
								T[L.relativeWorkspacePath][D.stem] = M;
							}
						const P = {};
						for (const L of Object.values(T))
							for (const D of Object.keys(L)) P[D] || (P[D] = 0), (P[D] += 1);
						const k = Object.fromEntries(
							I.map((L) => [
								L.relativeWorkspacePath,
								L.relativeWorkspacePath.length,
							]),
						);
						return {
							totalFiles: I.length,
							fileTermCounts: T,
							termTotalFiles: P,
							fileSizes: k,
						};
					}
				};
				(e.$P6b = s),
					(e.$P6b = s =
						Ne(
							[
								j(0, E.$nM),
								j(1, n.$p7),
								j(2, u.$Vi),
								j(3, g.$N6b),
								j(4, C.$ll),
								j(5, r.$ik),
								j(6, m.$Li),
								j(7, h.$zIb),
							],
							s,
						));
				function l(v) {
					return v.replace(/[$()*+./?[\\\]^{|}-]/g, "\\$&");
				}
				class y {
					constructor() {}
					idf(S, I) {
						const T = Math.log(I),
							P = Object.entries(S).map(([k, L]) => [k, T - Math.log(L)]);
						return Object.fromEntries(P);
					}
					tfIdf(S, I, T) {
						let P = 0;
						const k = {};
						for (const L of Object.keys(S)) {
							const D = S[L] || 0,
								M = D === 0 ? 0 : Math.log10(D) + 1,
								N = (I[L] || 1) * M;
							(P += N), (k[L] = N);
						}
						return T > 1e4 && (P *= 0.1), P;
					}
				}
				class $ {
					constructor(S = 0.75, I = 1.2) {
						(this.b = S), (this.k1 = I);
					}
					idf(S, I) {
						const T = Object.entries(S).map(([P, k]) => {
							const L = 1 + (I - k + 0.5) / (k + 0.5),
								D = Math.log(L);
							return [P, D];
						});
						return Object.fromEntries(T);
					}
					bm25(S, I, T, P) {
						const k = I ?? T;
						return Object.entries(S)
							.map(([D, M]) => {
								const N = P[D],
									A = M * (this.k1 + 1),
									R = M + this.k1 * (1 - this.b + (this.b * k) / T);
								return (N * A) / R;
							})
							.reduce((D, M) => D + M, 0);
					}
				}
				(0, d.$lK)(e.$O6b, s, d.InstantiationType.Delayed);
			},
		),
		