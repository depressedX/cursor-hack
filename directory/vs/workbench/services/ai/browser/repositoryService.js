import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/glob.js';
import '../../../../base/common/event.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../../proto/aiserver/v1/repository_connectweb.js';
import '../../cursorAuth/browser/authenticationService.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../../../../../proto/aiserver/v1/repository_pb.js';
import '../../../../platform/opener/common/opener.js';
import './cursorCredsService.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../base/common/uri.js';
import '../../../contrib/scm/common/scm.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../../external/bufbuild/connect.js';
import '../../../../platform/workspace/common/workspace.js';
import '../common/dataScrubbingService.js';
import '../../search/common/search.js';
import '../../search/common/queryBuilder.js';
import '../../../../editor/common/services/model.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageTypes.js';
import '../../../../base/common/uuid.js';
import './utils.js';
import '../../../../platform/actions/common/actions.js';
import '../common/retrievalUtils.js';
import '../../../../base/browser/window.js';
import './backendClient.js';
import '../../../../base/common/types.js';
define(
			de[226],
			he([
				1, 0, 215, 6, 5, 1486, 232, 45, 134, 272, 41, 477, 20, 9, 258, 3, 42,
				340, 25, 356, 186, 361, 67, 205, 47, 191, 11, 1792, 75, 285, 28,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*glob*/,
				i /*event*/,
				w /*instantiation*/,
				E /*repository_connectweb*/,
				C /*authenticationService*/,
				d /*reactiveStorageService*/,
				m /*reactiveStorageTypes*/,
				r /*repository_pb*/,
				u /*opener*/,
				a /*cursorCredsService*/,
				h /*extensions*/,
				c /*uri*/,
				n /*scm*/,
				g /*lifecycle*/,
				p /*resolverService*/,
				o /*connect*/,
				f /*workspace*/,
				b /*dataScrubbingService*/,
				s /*search*/,
				l /*queryBuilder*/,
				y /*model*/,
				$ /*reactiveStorageTypes*/,
				v /*uuid*/,
				S /*utils*/,
				I /*actions*/,
				T /*retrievalUtils*/,
				P /*window*/,
				k /*backendClient*/,
				L /*types*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$K6b = e.$J6b = e.Status = void 0),
					(e.$L6b = B),
					(t = mt(t));
				var D;
				(function (F) {
					(F[(F.INDEX_MODIFIED = 0)] = "INDEX_MODIFIED"),
						(F[(F.INDEX_ADDED = 1)] = "INDEX_ADDED"),
						(F[(F.INDEX_DELETED = 2)] = "INDEX_DELETED"),
						(F[(F.INDEX_RENAMED = 3)] = "INDEX_RENAMED"),
						(F[(F.INDEX_COPIED = 4)] = "INDEX_COPIED"),
						(F[(F.MODIFIED = 5)] = "MODIFIED"),
						(F[(F.DELETED = 6)] = "DELETED"),
						(F[(F.UNTRACKED = 7)] = "UNTRACKED"),
						(F[(F.IGNORED = 8)] = "IGNORED"),
						(F[(F.INTENT_TO_ADD = 9)] = "INTENT_TO_ADD"),
						(F[(F.ADDED_BY_US = 10)] = "ADDED_BY_US"),
						(F[(F.ADDED_BY_THEM = 11)] = "ADDED_BY_THEM"),
						(F[(F.DELETED_BY_US = 12)] = "DELETED_BY_US"),
						(F[(F.DELETED_BY_THEM = 13)] = "DELETED_BY_THEM"),
						(F[(F.BOTH_ADDED = 14)] = "BOTH_ADDED"),
						(F[(F.BOTH_DELETED = 15)] = "BOTH_DELETED"),
						(F[(F.BOTH_MODIFIED = 16)] = "BOTH_MODIFIED");
				})(D || (e.Status = D = {})),
					(e.$J6b = (0, w.$Mi)("repositoryService")),
					(e.$K6b = [
						"343ffc27-f070-43f1-865a-bd49d963774d",
						"200f1c48-e687-4737-9002-f3ea8fa8dcf4",
					]);
				function M(F) {
					return F.provider.rootUri?.path;
				}
				let N = class extends g.$1c {
					constructor(x, H, q, V, G, K, J, W, X, Y) {
						super(),
							(this.w = x),
							(this.y = H),
							(this.z = q),
							(this.C = V),
							(this.F = G),
							(this.G = K),
							(this.H = J),
							(this.I = W),
							(this.J = X),
							(this.L = Y),
							(this.f = () => {}),
							(this.clearRepositoryIntervalFunction = () => {}),
							(this.diffProvider = null),
							(this.g = new Map()),
							(this.h = async () => !1),
							(this.indexingProvider = void 0),
							(this.m = new Map()),
							(this.n = this.D(new i.$re())),
							(this.onDidRequestRepoIndex = this.n.event),
							(this.q = this.D(new i.$re())),
							(this.onDidRequestRepoInterrupt = this.q.event),
							(this.s = this.D(new i.$re())),
							(this.onDidChangeIndexingStatus = this.s.event),
							(this.u = () => !1),
							(this.t = this.J.createInstance(l.$M8)),
							(this.c = this.J.createInstance(k.$q6b, { service: E.$O_ })),
							this.D(this.C.createScoped(this)).onChangeEffect({
								deps: [
									() =>
										this.C.workspaceUserPersistentStorage.indexingData
											.preferredEmbeddingModel,
								],
								onChange: () => {
									this.indexMainLocalRepository();
								},
							}),
							this.onDidChangeIndexingStatus(async () => {
								const ne = await this.indexingProvider?.getStatus();
								if (ne !== void 0)
									switch (
										(ne.case === "synced" &&
											this.C.setNonPersistentStorage(
												"repositoryLastSyncedTime",
												Date.now(),
											),
										this.C.setNonPersistentStorage(
											"repositoryIndexingStatus",
											ne,
										),
										ne.case)
									) {
										case "not-indexed":
											break;
										case "creating-index":
											break;
										case "not-auto-indexing": {
											this.C.applicationUserPersistentStorage.bubbleTimesLeft >
												0 &&
												ne.numFiles < 2e4 &&
												this.indexMainRepository();
											break;
										}
										case "error": {
											this.C.setNonPersistentStorage(
												"repositoryIndexingError",
												{
													type: $.IndexingErrorType.EXTENSION_ERROR,
													message: ne.error,
												},
											);
											break;
										}
										case "indexing-setup": {
											const ee = await this.getNewRepoInfo();
											if (ee === void 0) {
												this.C.setNonPersistentStorage(
													"repositoryIndexingError",
													{ type: $.IndexingErrorType.NO_REPO },
												);
												return;
											}
											const _ = ee.repoName,
												te =
													this.C.nonPersistentStorage
														.mainLocalRepositoryProgress?.progress;
											te !== void 0 &&
												te === 1 &&
												this.C.setNonPersistentStorage(
													"mainLocalRepositoryProgress",
													"progress",
													0,
												);
											break;
										}
										case "indexing": {
											const ee = await this.getNewRepoInfo();
											if (ee === void 0) {
												this.C.setNonPersistentStorage(
													"repositoryIndexingError",
													{ type: $.IndexingErrorType.NO_REPO },
												);
												return;
											}
											const _ = ee.repoName,
												te = await this.indexingProvider?.getIndexingProgress();
											if (te === void 0) return;
											this.C.setNonPersistentStorage(
												"mainLocalRepositoryProgress",
												{ repoId: _, progress: te },
											);
											const Q = await this.indexingProvider?.getCurrentJobs();
											if (Q === void 0) return;
											this.C.setNonPersistentStorage(
												"repositoryIndexingJobs",
												Q,
											);
											break;
										}
										case "out-of-sync":
											break;
										case "synced":
											break;
										case "paused":
											break;
										case "loading":
											break;
										default:
											return ne;
									}
							});
					}
					setIsUriCursorIgnored(x) {
						this.u = x;
					}
					registerIsNewIndexProvider(x) {
						(this.h = x), this.h();
					}
					unregisterIsNewIndexProvider() {
						this.h = async () => !1;
					}
					registerIndexingProvider(x) {
						this.indexingProvider = x;
					}
					unregisterIndexingProvider() {
						this.indexingProvider = void 0;
					}
					fireOnDidChangeIndexingStatus() {
						this.s.fire();
					}
					unregisterOnDidChangeIndexingStatus() {}
					async getNewRepoInfo() {
						const x = Date.now();
						for (; !this.indexingProvider && Date.now() - x < 5e3; )
							await new Promise((H) => setTimeout(H, 100));
						return await this.indexingProvider?.getRepoInfo();
					}
					isIndexedMainLocalRepository() {
						if (
							this.C.nonPersistentStorage.repositoryIndexingStatus?.case ===
								"synced" ||
							(this.C.nonPersistentStorage.mainLocalRepositoryProgress
								?.progress ?? 0) > 0.8
						)
							return !0;
						{
							const x =
								this.C.nonPersistentStorage.repositoryIndexingStatus?.case;
							if (
								[
									"indexing-setup",
									"indexing",
									"loading",
									"out-of-sync",
									"creating-index",
									"error",
								].includes(x)
							) {
								if (
									x === "indexing" &&
									(this.C.nonPersistentStorage.mainLocalRepositoryProgress
										?.progress ?? 0) < 0.5
								)
									return !1;
								const q = this.C.nonPersistentStorage.repositoryLastSyncedTime;
								if (q !== void 0 && Date.now() - q < 1e3 * 60 * 60) return !0;
							}
							return !1;
						}
					}
					async indexMainRepository(x = !1) {
						if (!this.w.isAuthenticated()) {
							this.C.setNonPersistentStorage("repositoryIndexingStatus", {
								case: "error",
								error: "Not authenticated",
							});
							return;
						}
						return this.indexMainLocalRepository();
					}
					async deleteMainLocalRepository() {
						const x = await this.getNewRepoInfo();
						if (x === void 0) return;
						await (await this.c.get()).removeRepositoryV2(
							new r.$Ou({ repository: x }),
							{ headers: (0, S.$m6b)((0, v.$9g)()) },
						),
							this.q.fire(!1),
							this.C.setNonPersistentStorage("repositoryIndexingStatus", {
								case: "not-indexed",
							}),
							this.C.nonPersistentStorage.mainLocalRepositoryProgress ===
								void 0 &&
								this.C.setNonPersistentStorage(
									"mainLocalRepositoryProgress",
									{},
								),
							this.C.setNonPersistentStorage(
								"mainLocalRepositoryProgress",
								"progress",
								0,
							),
							this.C.setNonPersistentStorage("repositoryIndexingJobs", []);
					}
					async pauseIndexingJob() {
						this.q.fire(!0);
					}
					registerDiffProvider(x) {
						this.diffProvider = x;
					}
					dispose() {
						super.dispose(), this.f(), this.clearRepositoryIntervalFunction();
					}
					repositoryToInfo(x) {
						const H = x.provider.remotes;
						if (H === void 0) return null;
						if (H.length === 0) throw new Error("No remotes found");
						const V = H[0].fetchUrl?.split(/\/|\:/);
						if (V === void 0) throw new Error("Could not parse origin url");
						const G = V[V.length - 2],
							K = V[V.length - 1].split(".")[0];
						if (G === void 0 || K === void 0)
							throw new Error("Could not parse repo owner and name");
						return {
							id: x.id,
							repoName: K,
							repoOwner: G,
							relativeWorkspacePath: M(x),
						};
					}
					async codeBlockFromRemote(x, H) {
						let q;
						const V = H.relativeWorkspacePath;
						if (x.id === m.LocalRepoId.id) q = this.H.resolveRelativePath(V);
						else {
							const W = this.g.get(x.id)?.provider?.rootUri;
							if (W === void 0) return null;
							q = c.URI.joinPath(W, V);
						}
						let G,
							K = null;
						try {
							this.C.setNonPersistentStorage(
								"suppressFileExtensionRecommendationsStart",
								Date.now(),
							),
								(G = await this.G.createModelReference(q));
							const J = H.range;
							if (
								J === void 0 ||
								J.startPosition === void 0 ||
								J.endPosition === void 0
							)
								return null;
							let W,
								X = [],
								Y;
							const ie = [];
							(Y = G.object.textEditorModel.getValueInRange({
								startLineNumber: J.startPosition.line,
								startColumn: J.startPosition.column,
								endLineNumber: J.endPosition.line,
								endColumn: J.endPosition.column,
							})),
								(W = Y);
							for (const [ee, _] of Y.split(`
`).entries())
								ie.push({
									lineNumber: ee + (J.startPosition?.line - 1) + 1,
									text: _,
									isSignature: !1,
								});
							const ne = H.signatures?.ranges;
							if (ne) {
								for (const ee of ne)
									ee === void 0 ||
										ee.startPosition === void 0 ||
										ee.endPosition === void 0 ||
										ee.endPosition.line >= J.startPosition.line ||
										X.push(
											G.object.textEditorModel.getValueInRange({
												startLineNumber: ee.startPosition.line,
												startColumn: ee.startPosition.column,
												endLineNumber: ee.endPosition.line,
												endColumn:
													G.object.textEditorModel.getLineLength(
														ee.endPosition.line,
													) + 1,
											}),
										);
								if (X.length !== 0) {
									let ee = "",
										_ = 0;
									for (const [te, Q] of [...X, W].entries()) {
										let Z;
										if (te < X.length) {
											for (const [le, oe] of Q.split(`
`).entries())
												ie.push({
													lineNumber: le + (ne[te]?.startPosition?.line ?? 1),
													text: oe,
													isSignature: !0,
												});
											Z = ne[te]?.startPosition?.line ?? 1;
										} else Z = J.startPosition?.line ?? 1;
										if (te === 0) {
											ee += Q;
											continue;
										}
										const se = Q.match(/^\s*/);
										let re;
										se ? (re = se[0]) : (re = ""),
											(ee +=
												`
` +
												re +
												`...
` +
												Q),
											ie.push({
												lineNumber: Z - 0.5,
												text: re + "...",
												isSignature: !0,
											});
									}
									W = ee;
								}
							}
							ie.sort((ee, _) => ee.lineNumber - _.lineNumber),
								(K = {
									detailedLines: ie,
									contents: W,
									originalContents: Y,
									relativeWorkspacePath: this.H.asRelativePath(q),
									range: J,
								});
						} catch {
						} finally {
							G && G.dispose();
						}
						return K;
					}
					async semanticSearch(x, H, q) {
						function V(X) {
							return {
								startLineNumber: (X.startPosition?.line || 1) - 1,
								startColumn: (X.startPosition?.column || 1) - 1,
								endLineNumber: (X.endPosition?.line || 1) - 1,
								endColumn: (X.endPosition?.column || 1) - 1,
							};
						}
						const K = (
								await this.parallelSearch(x.contentPattern.pattern, 100)
							).flatMap((X, Y) => {
								if (X.codeBlock === void 0 || X.codeBlock.range === void 0)
									return [];
								const ie = V(X.codeBlock.range);
								return [
									{
										uri: this.H.resolveRelativePath(
											X.codeBlock.relativeWorkspacePath,
										),
										previewText: X.codeBlock.contents,
										rangeLocations: [
											{
												source: ie,
												preview: {
													startLineNumber: 0,
													startColumn: 0,
													endLineNumber: ie.endLineNumber - ie.startLineNumber,
													endColumn: ie.endColumn,
												},
											},
										],
									},
								];
							}),
							J = {};
						for (const X of K)
							X.uri &&
								(J[X.uri.toString()] === void 0 && (J[X.uri.toString()] = []),
								J[X.uri.toString()].push(X));
						const W = [];
						for (const X in J) {
							const Y = c.URI.parse(X);
							if (
								(0, s.$y7)(x, Y.fsPath) &&
								Object.prototype.hasOwnProperty.call(J, X)
							) {
								const ie = J[X];
								W.push({ resource: Y, results: ie });
							}
						}
						for (const X of W) q?.(X);
						return { results: W, messages: [] };
					}
					async parallelSearchGetContents(x, H = 10, q, V) {
						return (await this.parallelSearch(x, H, q, V)).map((K) => {
							const J = K.codeBlock;
							if (J === void 0) return K;
							const W = this.H.resolveRelativePath(J.relativeWorkspacePath),
								X = this.L.getModel(W);
							return !X || J.range === void 0
								? K
								: new r.$Tu({
										...K,
										codeBlock: {
											...K.codeBlock,
											contents: X.getValueInRange({
												startColumn: J.range.startPosition?.column ?? 1,
												startLineNumber: J.range.startPosition?.line ?? 1,
												endColumn: J.range.endPosition?.column ?? 1,
												endLineNumber: J.range.endPosition?.line ?? 1,
											}),
										},
									});
						});
					}
					async searchMultipleQueries(x, { topK: H, minK: q, finalK: V }, G) {
						const J = x
							.map((W) => ({
								text: W.text,
								newGlob: t.$Pk({
									globsNewLineSeparated: W.globsNewLineSeparated,
									properGlob: G?.newlineSepGlobFilter,
								}),
							}))
							.map((W) =>
								this.parallelSearch(W.text, H, H, {
									includePattern: G?.includePattern,
									excludePattern: G?.excludePattern,
									globFilter: W.newGlob,
								}),
							);
						return await (0, T.$I6b)(J, { minK: q, finalK: V });
					}
					async parallelSearch(x, H = 10, q, V) {
						try {
							const G = await this.searchNewLocal(x, H, V);
							return this.filterResults(G, H, q);
						} catch {
							return [];
						}
					}
					filterResults(x, H = 10, q) {
						return x
							.filter(
								(V) =>
									V.codeBlock !== void 0 && V.codeBlock.contents.length < 2e4,
							)
							.sort((V, G) => G.score - V.score)
							.slice(0, q ?? H);
					}
					async searchNewLocalFast(x, H = 10, q) {
						const V = await this.c.get(),
							G = await this.getNewRepoInfo();
						if (G === void 0) throw new Error("No repository info found");
						if (this.indexingProvider === void 0)
							throw new Error("Indexing provider not found");
						const K = { ...G, id: m.LocalRepoId.id };
						let J;
						try {
							const te = {
								globFilter: q?.globFilter ?? A(this.t, q?.includePattern),
								notGlobFilter: A(this.t, q?.excludePattern),
							};
							let Q;
							try {
								Q = await this.indexingProvider.compileGlobFilter(te);
							} catch (oe) {
								console.error("Failed to compile glob filter", oe);
							}
							const Z = {
									query: x,
									repository: G,
									topK: H,
									contextCacheRequest: q?.contextCacheRequest,
									globFilter: Q?.globFilter,
									notGlobFilter: Q?.notGlobFilter,
									raceNRequests: q?.raceNRequests,
								},
								se = (0, v.$9g)(),
								re = { headers: (0, S.$m6b)(se), signal: q?.abortSignal };
							if (q?.abortSignal?.aborted) throw new Error("Aborted");
							const le = performance.now();
							try {
								const oe = await V.semSearchFast({ request: Z }, re);
								for await (const ae of oe) {
									J = ae.response;
									break;
								}
								if (J === void 0) throw new Error("Response is undefined");
							} catch {}
							if (q?.abortSignal?.aborted) throw new Error("Aborted");
							if (J === void 0) {
								const oe = performance.now(),
									ae = await V.semSearch({ request: Z }, re);
								for await (const pe of ae) {
									(J = pe.response),
										console.log(
											"semsearch metadata",
											pe.metadata,
											re.headers["X-Request-ID"],
										);
									break;
								}
								if (J === void 0) throw new Error("Response is undefined");
							}
						} catch (te) {
							if (te instanceof o.ConnectError) return [];
							throw te;
						}
						const W = J.codeResults
								.map((te) => te.codeBlock?.relativeWorkspacePath)
								.filter((te) => te !== void 0),
							X = performance.now(),
							Y = await this.indexingProvider.decryptPaths(W),
							ie = performance.now(),
							ne = new Map();
						for (let te = 0; te < W.length; te++) ne.set(W[te], Y[te]);
						const ee = performance.now();
						return J.codeResults
							.map((te) => {
								if (te.codeBlock === void 0)
									throw new Error("Code block undefined");
								const Q = ne.get(te.codeBlock.relativeWorkspacePath);
								if (Q === void 0) throw new Error("Path not found");
								if (
									((te.codeBlock.relativeWorkspacePath = Q),
									(te.codeBlock.relativeWorkspacePath.startsWith("./") ||
										te.codeBlock.relativeWorkspacePath.startsWith(".\\")) &&
										(te.codeBlock.relativeWorkspacePath =
											te.codeBlock.relativeWorkspacePath.substring(2)),
									!O(te.codeBlock.relativeWorkspacePath, this.t, q))
								)
									return null;
								const Z = (async () => {
									try {
										if (te.codeBlock === void 0)
											throw new Error("Code block undefined");
										const se = await this.convertToLocalBlock(te.codeBlock, K);
										return se === null
											? null
											: new r.$Tu({ score: te.score, codeBlock: se });
									} catch (se) {
										return console.error(se), null;
									}
								})();
								return { codeResult: te, localCodeResultPromise: Z };
							})
							.filter(L.$tg)
							.sort((te, Q) => Q.codeResult.score - te.codeResult.score)
							.slice(0, H);
					}
					async searchNewLocal(x, H = 10, q) {
						const V = await this.c.get(),
							G = await this.getNewRepoInfo();
						if (G === void 0) throw new Error("No repository info found");
						if (this.indexingProvider === void 0)
							throw new Error("Indexing provider not found");
						const K = { ...G, id: m.LocalRepoId.id };
						let J;
						try {
							const W = {
									globFilter: q?.globFilter ?? A(this.t, q?.includePattern),
									notGlobFilter: A(this.t, q?.excludePattern),
								},
								X = await this.indexingProvider.compileGlobFilter(W),
								Y = {
									query: x,
									repository: G,
									topK: H,
									contextCacheRequest: q?.contextCacheRequest,
									globFilter: X.globFilter,
									notGlobFilter: X.notGlobFilter,
								},
								ie = (0, v.$9g)(),
								ne = { headers: (0, S.$m6b)(ie), signal: q?.abortSignal };
							if (q?.abortSignal?.aborted) throw new Error("Aborted");
							J = await V.searchRepositoryV2(Y, ne);
						} catch (W) {
							if (W instanceof o.ConnectError) return [];
							throw W;
						}
						return await this.getFinalCodeResults(K, J.codeResults, {
							...q,
							topK: H,
						});
					}
					indexMainLocalRepository() {
						this.w.isAuthenticated() && (this.q.fire(!0), this.n.fire());
					}
					interruptLocalRepository(x) {
						if (x.id === m.LocalRepoId.id) {
							this.q.fire(!1);
							const H = P.$Bfb.setInterval(() => {
								this.C.setNonPersistentStorage("repoProgressBars", (q) =>
									q.filter((V) => V.repoId !== m.LocalRepoId.id),
								);
							}, 100);
							setTimeout(() => {
								P.$Bfb.clearInterval(H);
							}, 3e3);
						}
					}
					async getEmbeddings(...x) {
						return (
							await (
								await this.c.get()
							).getEmbeddings(
								{ texts: x },
								{ headers: (0, S.$m6b)((0, v.$9g)()) },
							)
						).embeddings.map((V) => V.embedding);
					}
					async *getLineNumberClassifications(x, H, q) {
						const V = (X) =>
								JSON.stringify({
									relativeWorkspacePath: X.codeBlock?.relativeWorkspacePath,
									range: X.codeBlock?.range,
								}),
							G = new Map(
								x.map((X, Y) => [
									V(X.ogCodeResult),
									{ ogCodeResult: X.ogCodeResult, idx: Y },
								]),
							),
							K = {
								query: H,
								codeResults: x
									.map((X) => X.localCodeResult)
									.filter((X) => X !== null),
							},
							W = await (await this.c.get()).getLineNumberClassifications(K, {
								signal: q,
							});
						for await (const X of W) {
							const Y = X.classifiedResult;
							if (Y?.codeResult !== void 0) {
								const ie = G.get(V(Y.codeResult));
								ie !== void 0 &&
									(yield { withClassificationInfo: Y, idx: ie.idx });
							}
						}
					}
					async convertToLocalBlock(x, H) {
						try {
							const q = await this.codeBlockFromRemote(H, x);
							return !q || (q.contents !== void 0 && q.contents.length > 2e4)
								? null
								: (q.contents !== void 0 &&
										(q.contents = await this.I.cleanText(
											q.contents,
											q.relativeWorkspacePath,
										)),
									q);
						} catch (q) {
							return (
								console.error(
									"Failed to convert code block to local block:",
									q,
								),
								null
							);
						}
					}
					async getFinalCodeResults(x, H, q) {
						if (!this.indexingProvider)
							throw new Error("Indexing provider not found");
						const V = H.map((ie) => ie.codeBlock?.relativeWorkspacePath).filter(
								(ie) => ie !== void 0,
							),
							G = await this.indexingProvider.decryptPaths(V),
							K = new Map();
						for (let ie = 0; ie < V.length; ie++) K.set(V[ie], G[ie]);
						const J = H.map(async (ie) => {
								if (ie.codeBlock === void 0)
									throw new Error("Code block undefined");
								const ne = K.get(ie.codeBlock.relativeWorkspacePath);
								if (ne === void 0) throw new Error("Path not found");
								if (
									((ie.codeBlock.relativeWorkspacePath = ne),
									(ie.codeBlock.relativeWorkspacePath.startsWith("./") ||
										ie.codeBlock.relativeWorkspacePath.startsWith(".\\")) &&
										(ie.codeBlock.relativeWorkspacePath =
											ie.codeBlock.relativeWorkspacePath.substring(2)),
									!O(ie.codeBlock.relativeWorkspacePath, this.t, q))
								)
									return null;
								const ee = await this.convertToLocalBlock(ie.codeBlock, x);
								return ee === null
									? null
									: new r.$Tu({ score: ie.score, codeBlock: ee });
							}),
							Y = (await Promise.allSettled(J))
								.map((ie) => {
									if (ie.status === "rejected")
										return console.error(ie.reason), null;
									if (
										q?.excludeCursorIgnored &&
										ie.value?.codeBlock?.relativeWorkspacePath
									) {
										const ne = this.H.resolveRelativePath(
											ie.value.codeBlock.relativeWorkspacePath,
										);
										if (this.u(ne)) return null;
									}
									return ie.value;
								})
								.filter((ie) => ie !== null)
								.sort((ie, ne) => ne.score - ie.score);
						return q?.topK ? Y.slice(0, q.topK) : Y;
					}
				};
				(N = Ne(
					[
						j(0, C.$x6b),
						j(1, a.$i6b),
						j(2, u.$7rb),
						j(3, d.$0zb),
						j(4, n.$c7),
						j(5, p.$MO),
						j(6, f.$Vi),
						j(7, b.$zIb),
						j(8, w.$Li),
						j(9, y.$QO),
					],
					N,
				)),
					(0, h.$lK)(e.$J6b, N, h.InstantiationType.Delayed);
				function A(F, x) {
					if (x === void 0) return;
					const H = F.parseSearchPaths(x);
					if (H.pattern !== void 0) return R(H.pattern);
				}
				function R(F) {
					return typeof F == "string"
						? F
						: `{${Object.keys(F)
								.filter((H) => F[H] === !0)
								.join(",")}}`;
				}
				function O(F, x, H) {
					if (H?.includePattern) {
						const q = x.parseSearchPaths(H.includePattern);
						if (q.pattern && !t.$Ik(q.pattern, F)) return !1;
					}
					if (H?.excludePattern) {
						const q = x.parseSearchPaths(H.excludePattern);
						if (q.pattern && t.$Ik(q.pattern, F)) return !1;
					}
					return !(H?.globFilter && !t.$Ik(H.globFilter, F));
				}
				function B(F) {
					return F.id === m.LocalRepoId.id
						? "local"
						: `${F.repoOwner}/${F.repoName}`;
				}
				class U extends I.$3X {
					constructor() {
						super({
							id: "Switch Reranker On",
							title: {
								value: "Switch Reranker On",
								original: "Switch Reranker On",
							},
							f1: !0,
						});
					}
					run(x, ...H) {
						x.get(d.$0zb).setWorkspaceUserPersistentStorage(
							"shouldRerankByDefault",
							(V) => (
								console.log("Switching reranker on from", V, "to", !0), !0
							),
						);
					}
				}
				class z extends I.$3X {
					constructor() {
						super({
							id: "Switch Reranker Off",
							title: {
								value: "Switch Reranker Off",
								original: "Switch Reranker Off",
							},
							f1: !0,
						});
					}
					run(x, ...H) {
						x.get(d.$0zb).setWorkspaceUserPersistentStorage(
							"shouldRerankByDefault",
							(V) => (
								console.log("Switching reranker on from", V, "to", !1), !1
							),
						);
					}
				}
			},
		),
		