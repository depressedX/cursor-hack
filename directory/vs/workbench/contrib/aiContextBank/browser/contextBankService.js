import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../../../proto/aiserver/v1/chat_pb.js';
import '../../../../../proto/aiserver/v1/chat_pb.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../contextGraph/browser/gitGraphService.js';
import '../../recentFilesTrackerService/browser/recentFilesTrackerService.js';
import '../../../services/ai/browser/aiService.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/hash.js';
import '../../../services/ai/browser/repositoryService.js';
import '../../../../base/common/map.js';
import '../../../services/selectedContext/browser/selectedContext.js';
import '../../aiFeatureStatusService/browser/aiFeatureStatusService.js';
define(
			de[1053],
			he([
				1, 0, 148, 126, 126, 3, 42, 20, 5, 25, 715, 560, 118, 19, 136, 226, 59,
				271, 287,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*aiserver_pb*/,
 i /*chat_pb*/,
 w /*chat_pb*/,
 E /*lifecycle*/,
 C /*resolverService*/,
 d /*extensions*/,
 m /*instantiation*/,
 r /*workspace*/,
 u /*gitGraphService*/,
 a /*recentFilesTrackerService*/,
 h /*aiService*/,
 c /*resources*/,
 n /*hash*/,
 g /*repositoryService*/,
 p /*map*/,
 o /*selectedContext*/,
 f /*aiFeatureStatusService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Xcc = e.$Wcc = void 0);
				const b = 2,
					s = 1e5,
					l = 2e3,
					y = 2,
					$ = 20,
					v = 30,
					S = 150,
					I = 2500;
				e.$Wcc = (0, m.$Mi)("contextBankService");
				let T = class extends E.$1c {
					constructor(k, L, D, M, N, A, R, O) {
						super(),
							(this.h = k),
							(this.j = L),
							(this.m = D),
							(this.n = M),
							(this.q = N),
							(this.s = A),
							(this.t = R),
							(this.u = O),
							(this.c = new p.$Jc(b)),
							(this.g = []);
					}
					w(k, L) {
						return `${(0, n.$Aj)(`${k}_${L}`)}`;
					}
					y(k) {
						const L = this.c.peek(k);
						if (L && performance.now() - L.timestamp <= s)
							return this.c.get(k), L.results;
					}
					z(k, L) {
						this.c.set(k, { results: L, timestamp: performance.now() });
					}
					C() {
						return (
							this.u.maybeRefreshFeatureStatus("contextBank"),
							this.u.getCachedFeatureStatus("contextBank") ?? !0
						);
					}
					async getRankedFiles(k) {
						if (!this.C()) return [];
						const L = new t.$iH({ ...k.composerRequest });
						if (L.conversation.length === 0) return [];
						const D = this.w(k.composerId, L.conversation.length);
						if (k.useCachedResults) {
							const N = this.y(D);
							return N
								? await this.filterCursorIgnoredFiles(
										N.slice(0, k.numberOfChunks),
									)
								: [];
						}
						const M = await this.getRankedFilesInternal({ ...k, cacheKey: D });
						return this.z(D, M), await this.filterCursorIgnoredFiles(M);
					}
					async filterCursorIgnoredFiles(k) {
						return (
							await new Promise((L) =>
								this.t.addOnCursorIgnoreLoadedCallback(() => L(void 0)),
							),
							k.filter(
								(L) =>
									!L.context ||
									!this.t.shouldIgnoreUri(
										this.j.resolveRelativePath(L.context.relativeWorkspacePath),
									),
							)
						);
					}
					getTrimmedConversation(k, L) {
						const D = L
							? k.slice(0, k.findIndex((M) => M.bubbleId === L) + 1)
							: k;
						return D.at(-1)?.type !== w.ConversationMessage_MessageType.HUMAN ||
							D.at(-1)?.text.length === 0
							? []
							: D;
					}
					async cacheRankedFiles(k) {
						if (!this.C()) return;
						const L = new t.$iH({
							...k.composerRequest,
							conversation: this.getTrimmedConversation(
								k.composerRequest.conversation ?? [],
								k.bubbleId,
							),
						});
						if (L.conversation.length === 0) return;
						const D = this.w(k.composerId, L.conversation.length),
							M = performance.now();
						if (!this.g.find((A) => A.cacheKey === D && M - A.timestamp < l))
							try {
								const A = await this.getRankedFilesInternal({
									...k,
									composerRequest: L,
									cacheKey: D,
								});
								this.z(D, A);
							} catch (A) {
								console.warn("Failed to cache ranked files:", A);
							}
					}
					async getRankedFilesInternal(k) {
						const L = new t.$iH(k.composerRequest),
							D = new AbortController(),
							M = {
								abortController: D,
								timestamp: performance.now(),
								cacheKey: k.cacheKey,
							};
						this.g.push(M),
							this.g.length > y &&
								(this.g.sort((A, R) => R.timestamp - A.timestamp),
								this.g.slice(y).forEach((A) => {
									A.abortController.abort();
								}),
								(this.g = this.g.slice(0, y)));
						try {
							const N = await this.getAllFiles({ request: L });
							if (N === void 0) return [];
							const R = (
									await this.q.aiClient()
								).getRankedContextFromContextBank(
									new t.$5D({ composerRequest: L, contextToRank: N }),
									{ signal: D.signal },
								),
								O = [];
							for await (const U of R) O.push(...U.rankedContext);
							return D.signal.aborted ? [] : O.slice(0, k.numberOfChunks);
						} finally {
							const N = this.g.findIndex((A) => A === M);
							N !== -1 && this.g.splice(N, 1);
						}
					}
					async getAllFiles({ request: k }) {
						const L = [
								this.getContextFromFiles(k),
								this.getContextFromSemanticSearch(k),
							],
							[D, M] = await Promise.all(L),
							N = M.filter(
								(A) =>
									!D.some(
										(R) => R.relativeWorkspacePath === A.relativeWorkspacePath,
									),
							).slice(0, $);
						return [...D, ...N];
					}
					async getContextFromFiles(k) {
						const D = k.conversation
							.map((F) =>
								F.attachedCodeChunks.map((x) => x.relativeWorkspacePath),
							)
							.flat()
							.filter(
								(F, x, H) => H.findIndex((q) => q === F) === x && F !== void 0,
							)
							.map((F) => {
								let x = Promise.resolve([]);
								return (
									(x = this.h.getRelatedFiles({
										uri: this.j.resolveRelativePath(F),
										maxNumFiles: 5,
									})),
									x
								);
							});
						let M = [];
						try {
							const F = new Promise((x, H) => {
								setTimeout(() => H(new Error("Context graph timeout")), 1e3);
							});
							M = await Promise.race([Promise.all(D), F]);
						} catch (F) {
							console.warn("Failed to get context graph files:", F), (M = []);
						}
						const N = M.flat()
							.reduce((F, { uri: x, weight: H }) => {
								const q = F.findIndex((V) => c.$dh.isEqual(V.uri, x));
								return (
									q >= 0 ? (F[q].weight += H) : F.push({ uri: x, weight: H }), F
								);
							}, [])
							.sort((F, x) => x.weight - F.weight)
							.slice(0, 7);
						let A = [];
						try {
							A = this.m.getRecentlyViewedFiles(7);
						} catch (F) {
							console.warn("Failed to get recently viewed files:", F), (A = []);
						}
						const O = [
								...N.map((F) => this.j.asRelativePath(F.uri)),
								...A.map((F) => F.relativePath),
							]
								.filter((F, x, H) => H.findIndex((q) => q === F) === x)
								.filter((F) => F !== void 0)
								.filter(
									(F) =>
										!k.conversation.some((x) =>
											x.attachedCodeChunks
												.map((H) => H.relativeWorkspacePath)
												.includes(F),
										),
								),
							B = (
								await Promise.all(
									O.map(async (F) => {
										let x;
										try {
											x = await this.n.createModelReference(
												this.j.resolveRelativePath(F),
											);
											const q = x.object.textEditorModel.getValue();
											return q.split(`
`).length > I
												? void 0
												: new i.$mA({ relativeWorkspacePath: F, contents: q });
										} catch (H) {
											console.warn(`Unable to read file '${F}':`, H);
											return;
										} finally {
											x?.dispose();
										}
									}),
								)
							).filter((F) => F !== void 0);
						let U = 0;
						const z = [];
						for (const F of B)
							if (
								(z.push(F),
								(U +=
									F.contents.split(`
`).length / S),
								U > v)
							)
								break;
						return z;
					}
					async getContextFromSemanticSearch(k) {
						const L = k.conversation.at(-1)?.text ?? "";
						let D = [];
						if (L !== "") {
							const N = new AbortController();
							try {
								const A = new Promise((R, O) => {
									setTimeout(
										() => O(new Error("Semantic search timeout")),
										1e3,
									);
								});
								D = await Promise.race([
									this.s.parallelSearch(L, 30, 30, {
										fast: !0,
										raceNRequests: 6,
										abortSignal: N.signal,
									}),
									A,
								]);
							} catch (A) {
								console.warn("Failed to perform semantic search:", A),
									N.abort();
							}
						}
						const M = [];
						for (const N of D) {
							const A = N.codeBlock;
							A !== void 0 &&
								M.push(
									new i.$mA({
										relativeWorkspacePath: A.relativeWorkspacePath,
										contents: A.contents,
										codeBlock: A,
									}),
								);
						}
						return M;
					}
					async F(k) {
						const L = new Set(k.map((M) => M.context.relativeWorkspacePath)),
							D = [];
						for (const M of L) {
							let N;
							try {
								N = await this.n.createModelReference(
									this.j.resolveRelativePath(M),
								);
								const R = N.object.textEditorModel.getValue(),
									O = k.filter((B) => B.context.relativeWorkspacePath === M);
								for (const B of O) {
									const U = B.detailedLines
										.filter((z) => !z.isSignature)
										.sort((z, F) => z.lineNumber - F.lineNumber)
										.map((z) => z.text)
										.join(`
`);
									R.includes(U) && D.push(B.context);
								}
							} catch (A) {
								console.warn(`Unable to read file '${M}':`, A);
							} finally {
								N?.dispose();
							}
						}
						return D;
					}
				};
				(e.$Xcc = T),
					(e.$Xcc = T =
						Ne(
							[
								j(0, u.$cEb),
								j(1, r.$Vi),
								j(2, a.$lcc),
								j(3, C.$MO),
								j(4, h.$Nfc),
								j(5, g.$J6b),
								j(6, o.$Q9b),
								j(7, f.$H7b),
							],
							T,
						)),
					(0, d.$lK)(e.$Wcc, T, d.InstantiationType.Eager);
			},
		)
