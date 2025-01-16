define(de[841], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$N6b = void 0),
				(e.$N6b = (0, t.$Mi)("textMateTokenizationFeature"));
		}),
		define(
			de[3663],
			he([
				1, 0, 4, 17, 11, 99, 841, 67, 18, 9, 47, 65, 210, 87, 151, 34, 19, 22,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (t = mt(t));
				class f extends w.$3X {
					static {
						this.a = r.URI.parse("inmemory:///tm-log.txt");
					}
					constructor() {
						super({
							id: "editor.action.startDebugTextMate",
							title: t.localize2(4984, "Start TextMate Syntax Grammar Logging"),
							category: E.$ck.Developer,
							f1: !0,
						});
					}
					b(s) {
						const l = s.getModel(f.a);
						return l || s.createModel("", null, f.a);
					}
					c(s, l) {
						const y = s.getLineCount();
						s.applyEdits([
							{
								range: new i.$iL(
									y,
									h.Constants.MAX_SAFE_SMALL_INTEGER,
									y,
									h.Constants.MAX_SAFE_SMALL_INTEGER,
								),
								text: l,
							},
						]);
					}
					async run(s) {
						const l = s.get(C.$N6b),
							y = s.get(d.$QO),
							$ = s.get(m.$IY),
							v = s.get(a.$dtb),
							S = s.get(c.$asb),
							I = s.get(n.$ucd),
							T = s.get(g.$jk),
							P = s.get(o.$ll),
							k = (0, p.$nh)(I.tmpDir, `vcode-tm-log-${(0, u.$9g)()}.txt`);
						await P.createFile(k);
						const L = T.createLogger(k, { name: "debug textmate" }),
							D = this.b(y),
							M = (R) => {
								this.c(
									D,
									R +
										`
`,
								),
									A(),
									L.info(R),
									L.flush();
							};
						if (
							(await S.openWindow([{ fileUri: k }], { forceNewWindow: !0 }),
							!(await $.openEditor({
								resource: D.uri,
								options: { pinned: !0 },
							})))
						)
							return;
						const A = () => {
							const R = v.listCodeEditors();
							for (const O of R)
								O.hasModel() &&
									O.getModel().uri.toString() === f.a.toString() &&
									O.revealLine(O.getModel().getLineCount());
						};
						M("// Open the file you want to test to the side and watch here"),
							M(`// Output mirrored at ${k}`),
							l.startDebugMode(
								(R) => {
									this.c(
										D,
										R +
											`
`,
									),
										A(),
										L.info(R),
										L.flush();
								},
								() => {},
							);
					}
				}
				(0, w.$4X)(f);
			},
		),
		define(
			de[3664],
			he([1, 0, 3417, 3026, 3418, 3419, 3663]),
			function (ce, e) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
			},
		),
		define(
			de[627],
			he([
				1, 0, 272, 3, 9, 61, 22, 20, 5, 34, 25, 1791, 356, 361, 186, 841, 215,
				1792, 33,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
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
		define(
			de[1038],
			he([
				1, 0, 42, 204, 5, 350, 33, 69, 74, 25, 122, 152, 64, 20, 17, 741, 627,
				22, 67, 530,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$L8b = void 0),
					(e.$L8b = (0, w.$Mi)("simpleChunkingService"));
				var s;
				(function (P) {
					P[(P.FullFile = -1)] = "FullFile";
				})(s || (s = {}));
				const l = [
						m.SymbolKind.Namespace,
						m.SymbolKind.Class,
						m.SymbolKind.Method,
						m.SymbolKind.Constructor,
						m.SymbolKind.Interface,
						m.SymbolKind.Function,
					],
					y = {
						[m.SymbolKind.File]: "file",
						[m.SymbolKind.Module]: "module",
						[m.SymbolKind.Namespace]: "namespace",
						[m.SymbolKind.Package]: "package",
						[m.SymbolKind.Class]: "class",
						[m.SymbolKind.Method]: "method",
						[m.SymbolKind.Property]: "property",
						[m.SymbolKind.Field]: "field",
						[m.SymbolKind.Constructor]: "constructor",
						[m.SymbolKind.Enum]: "enum",
						[m.SymbolKind.Interface]: "interface",
						[m.SymbolKind.Function]: "function",
						[m.SymbolKind.Variable]: "variable",
						[m.SymbolKind.Constant]: "constant",
						[m.SymbolKind.String]: "string",
						[m.SymbolKind.Number]: "number",
						[m.SymbolKind.Boolean]: "boolean",
						[m.SymbolKind.Array]: "array",
						[m.SymbolKind.Object]: "object",
						[m.SymbolKind.Key]: "key",
						[m.SymbolKind.Null]: "null",
						[m.SymbolKind.EnumMember]: "enumMember",
						[m.SymbolKind.Struct]: "struct",
						[m.SymbolKind.Event]: "event",
						[m.SymbolKind.Operator]: "operator",
						[m.SymbolKind.TypeParameter]: "typeParameter",
					};
				function $(P, k, L = 10) {
					const D = P.kind;
					return D === s.FullFile
						? !0
						: l.includes(D) &&
								P.range.endLineNumber - P.range.startLineNumber >= L &&
								k.some(
									(M) =>
										M.start === P.range.startLineNumber &&
										M.end + 1 === P.range.endLineNumber,
								);
				}
				function v(P) {
					const L = /```\w+\n([\s\S]*)\n```/.exec(P);
					if (L !== null) return L[1];
				}
				function S(P) {
					const k = P.contents[0];
					let L;
					if (k !== void 0) {
						const A = v(k.value);
						if (A === void 0) return;
						L = A;
					} else return;
					const D = P.contents[1];
					let M = "";
					D !== void 0 && (M = D.value);
					const N = " ".repeat(2);
					return `${L}
${N}DESCRIPTION:
${M.split(`
`)
	.map((A) => `${N.repeat(2)}${A}`)
	.join(`
`)}`;
				}
				function I(P, k) {
					async function L(D, M = 0) {
						let N = "",
							A = " ".repeat(M * 4);
						const R = D.name;
						let O;
						D.kind === s.FullFile ? (O = "") : (O = `(${y[D.kind]}) `);
						const B = n.$iL.lift(D.selectionRange).getStartPosition();
						switch (D.kind) {
							case m.SymbolKind.Method:
							case m.SymbolKind.Constructor:
							case m.SymbolKind.Function: {
								if (k !== void 0) {
									const F = await k.provideHover(
										P,
										B,
										C.CancellationToken.None,
									);
									if (F != null) {
										const x = S(F);
										if (x !== void 0) {
											N +=
												x
													.split(`
`)
													.map((H) => A + H)
													.join(`
`) +
												`
`;
											break;
										}
									}
								}
								const z = P.getLineContent(
									D.selectionRange.startLineNumber,
								).trim();
								N +=
									A +
									O +
									z +
									`
`;
								break;
							}
							default: {
								N +=
									A +
									O +
									R +
									`
`;
								break;
							}
						}
						const U = await Promise.all(
							(D.children ?? []).map((z) => L(z, M + 1)),
						);
						for (const z of U) N += z;
						return N;
					}
					return L;
				}
				let T = class {
					constructor(k, L, D, M, N, A, R, O) {
						(this.f = k),
							(this.g = L),
							(this.h = D),
							(this.j = M),
							(this.k = N),
							(this.l = A),
							(this.m = R),
							(this.n = O),
							(this.d = new Map());
					}
					async *getWorkspaceOutline(k) {
						const L = new g.$Opb(50),
							D = [],
							M = await this.m
								.getAllFiles()
								.then((N) => N.map((A) => A.relativeWorkspacePath));
						for (const N of M)
							(k !== void 0 && k(N)) ||
								D.push(
									L.withSemaphore(async () => {
										const A = await this.getLanguageModelOutline(N);
										if (A !== void 0)
											return { relativeWorkspacePath: N, outline: A };
									}),
								);
						for await (const N of (0, g.$Mpb)(D)) N !== void 0 && (yield N);
					}
					async getLanguageModelOutline(k) {
						const L = this.d.get(k),
							D = this.f.resolveRelativePath(k);
						if (L !== void 0) {
							const N = this.j.getModel(D);
							if (N !== null) {
								const A = N.getValue();
								if ((await (0, b.$pjb)(A)) === L.fileContentsHashed)
									return L.outline;
							} else {
								const A = await this.n
									.readFile(D)
									.then((O) => O.value.toString());
								if ((await (0, b.$pjb)(A)) === L.fileContentsHashed)
									return L.outline;
							}
						}
						const M = await this.o(k);
						if (M) return this.d.set(k, M), M.outline;
					}
					async o(k) {
						const L = await this.h.createModelReference(
							this.f.resolveRelativePath(k),
						);
						try {
							const D = L.object.textEditorModel,
								N = this.k.documentSymbolProvider.ordered(D);
							if (N.length === 0) return;
							const A = this.k.hoverProvider.ordered(D),
								R = await N[0].provideDocumentSymbols(
									D,
									C.CancellationToken.None,
								);
							if (R == null || R.length === 0) return;
							let O;
							A.length > 0 && (O = A[0]);
							const B = {
								kind: s.FullFile,
								name: k,
								children: R,
								range: D.getFullModelRange(),
								selectionRange: D.getFullModelRange(),
								detail: "",
								tags: [],
							};
							return {
								outline: await I(D, O)(B),
								fileContentsHashed: await (0, b.$pjb)(D.getValue()),
							};
						} finally {
							L.dispose();
						}
					}
					async getFoldingRanges(k) {
						const L = { limit: 5e3, update: () => {} },
							M = await E.$ZNb
								.getFoldingRangeProviders(this.k, k)[0]
								?.provideFoldingRanges(k, {}, C.CancellationToken.None);
						if (M) return M;
					}
					getChunksFromSymbolWrapper(k, L, D) {
						const M = (A) => $(A, L),
							N = (A) => {
								const R = A.range;
								let O;
								if (
									(A.kind === s.FullFile
										? (O = "")
										: (O = `${A.name} (${y[A.kind]})`),
									R.endLineNumber - R.startLineNumber < 100)
								)
									return [
										{
											range: A.range,
											fileOutline: O,
											kind: A.kind,
											foldedRanges: [],
										},
									];
								if (!M(A)) {
									const G = [];
									for (
										let K = R.startLineNumber;
										K < R.endLineNumber;
										K += 100
									) {
										const J = Math.min(K + 99, R.endLineNumber);
										G.push({
											range: new n.$iL(K, 1, J, 500),
											fileOutline: O,
											kind: A.kind,
											foldedRanges: [],
										});
									}
									return G;
								}
								if (A.children === void 0) return [];
								const B = A.children.filter(M),
									U = B.map(N)
										.map((G) =>
											G.map((K) => ({
												...K,
												fileOutline:
													A.kind === s.FullFile
														? K.fileOutline
														: O + " > " + K.fileOutline,
											})),
										)
										.flat(),
									z = B.map((G) => n.$iL.lift(G.range));
								A.kind === s.FullFile && z.push(...D.map((G) => n.$iL.lift(G))),
									z.sort((G, K) => G.startLineNumber - K.startLineNumber);
								const F = [];
								let x = n.$iL.lift(R).getStartPosition(),
									H = n.$iL.lift(R).getStartPosition(),
									q = [],
									V = 0;
								for (let [G, K] of z.entries()) {
									const J = K.startLineNumber - H.lineNumber;
									V + J > 100
										? (F.push({
												range: new n.$iL(x.lineNumber, 1, H.lineNumber, 500),
												fileOutline: O,
												kind: A.kind,
												foldedRanges: q,
											}),
											J > 100
												? (F.push({
														range: new n.$iL(
															H.lineNumber + 1,
															1,
															K.startLineNumber - 1,
															500,
														),
														fileOutline: O,
														kind: A.kind,
														foldedRanges: [],
													}),
													(x = K.getStartPosition()),
													(H = K.getEndPosition()),
													(q = [K]),
													(V = 0))
												: ((x = K.getStartPosition()),
													(H = K.getEndPosition()),
													(q = [K]),
													(V = J)))
										: ((H = K.getEndPosition()), q.push(K), (V += J));
								}
								return (
									F.push({
										range: new n.$iL(
											x.lineNumber,
											1,
											R.endLineNumber,
											R.endColumn,
										),
										fileOutline: O,
										kind: A.kind,
										foldedRanges: q,
									}),
									[...U, ...F]
								);
							};
						return N(k);
					}
					async getChunks(k) {
						const L = this.f.resolveRelativePath(k),
							D = await this.h.createModelReference(L);
						try {
							const M = D.object.textEditorModel,
								N = await this.getFoldingRanges(M);
							if (N === void 0) return [];
							const A = new Set(),
								R = [],
								O = N.filter((H) => H.kind?.value === m.$jM.Imports.value);
							R.push(
								...O.map((H) => {
									for (let q = H.start; q <= H.end; q++) A.add(q);
									return {
										contents: M.getValueInRange({
											startLineNumber: H.start,
											endLineNumber: H.end,
											startColumn: 1,
											endColumn: 500,
										}),
										path: k,
										fileOutline: "imports",
									};
								}),
							);
							const z = await this.k.documentSymbolProvider
								.ordered(M)[0]
								.provideDocumentSymbols(M, C.CancellationToken.None);
							if (z == null) return R;
							const F = {
									kind: s.FullFile,
									name: k,
									children: z,
									range: M.getFullModelRange(),
									selectionRange: M.getFullModelRange(),
									detail: "",
									tags: [],
								},
								x = this.getChunksFromSymbolWrapper(
									F,
									N,
									O.map((H) => ({
										startLineNumber: H.start,
										endLineNumber: H.end + 1,
										startColumn: 1,
										endColumn: 1,
									})),
								).sort(
									(H, q) => H.range.startLineNumber - q.range.startLineNumber,
								);
							return (
								R.push(
									...x.map((H) => {
										const q = M.getValueInRange(H.range);
										if (H.foldedRanges.length === 0)
											return {
												contents: q,
												path: k,
												fileOutline: H.fileOutline,
											};
										const V = H.range.startLineNumber,
											G = H.foldedRanges
												.map((W) => ({
													...W,
													startLineNumber: W.startLineNumber - V + 1,
													endLineNumber: W.endLineNumber - V + 1,
												}))
												.sort((W, X) => X.startLineNumber - W.startLineNumber),
											K = (0, u.$7X)(q).create(
												h.DefaultEndOfLine.LF,
											).textBuffer;
										K.applyEdits(
											G.map(
												(W) =>
													new h.$QN(
														null,
														n.$iL.lift({
															...W,
															startLineNumber: W.startLineNumber + 1,
															startColumn: 1,
															endColumn: 1,
														}),
														`...
`,
														!1,
														!1,
														!1,
													),
											),
											!1,
											!1,
										);
										const J = K.getLinesContent().join(`
`);
										return (
											K.dispose(),
											{ contents: J, path: k, fileOutline: H.fileOutline }
										);
									}),
								),
								R
							);
						} catch (M) {
							throw (console.log("ERROR ON", k), M);
						} finally {
							D.dispose();
						}
					}
					async getWorkspaceChunks(k) {
						const L = new g.$Opb(10),
							D = [],
							M = await this.m
								.getAllFiles()
								.then((N) => N.map((A) => A.relativeWorkspacePath));
						for (const N of M)
							(k !== void 0 && k(N)) ||
								D.push(L.withSemaphore(() => this.getChunks(N)));
						return (async function* () {
							for await (const N of (0, g.$Mpb)(D)) yield N;
						})();
					}
				};
				(T = Ne(
					[
						j(0, r.$Vi),
						j(1, i.$9Db),
						j(2, t.$MO),
						j(3, f.$QO),
						j(4, d.$k3),
						j(5, a.$aN),
						j(6, p.$O6b),
						j(7, o.$ll),
					],
					T,
				)),
					(0, c.$lK)(e.$L8b, T, c.InstantiationType.Delayed);
			},
		),
		