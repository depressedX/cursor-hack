import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../proto/aiserver/v1/symbolic_context_pb.js';
import '../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/core/position.js';
import '../../../../editor/common/languages.js';
import '../../../../editor/common/languages/languageConfigurationRegistry.js';
import '../../../../editor/common/services/languageFeatures.js';
import '../../../../editor/common/services/markerDecorations.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../editor/contrib/documentSymbols/browser/outlineModel.js';
import '../../../../editor/contrib/folding/browser/folding.js';
import '../../../../editor/contrib/folding/browser/indentRangeProvider.js';
import '../../../../editor/contrib/folding/browser/syntaxRangeProvider.js';
import '../../../../editor/contrib/gotoSymbol/browser/goToSymbol.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/workspace/common/workspace.js';
import './aiService.js';
import './indexRequestManager.js';
import './repoGraph/repoGraph.js';
import '../../filesConfiguration/common/filesConfigurationService.js';
import '../../../../base/common/uri.js';
import './utils.js';
import '../../../../base/common/uuid.js';
define(
		de[1347],
		he([
			1, 0, 643, 83, 33, 3, 48, 74, 152, 69, 496, 42, 204, 350, 752, 660, 414,
			31, 10, 22, 20, 5, 25, 118, 3232, 3229, 170, 9, 191, 47,
		]),
		function (			ce /*require*/,
			e /*exports*/,
			t /*symbolic_context_pb*/,
			i /*utils_pb*/,
			w /*cancellation*/,
			E /*lifecycle*/,
			C /*position*/,
			d /*languages*/,
			m /*languageConfigurationRegistry*/,
			r /*languageFeatures*/,
			u /*markerDecorations*/,
			a /*resolverService*/,
			h /*outlineModel*/,
			c /*folding*/,
			n /*indentRangeProvider*/,
			g /*syntaxRangeProvider*/,
			p /*goToSymbol*/,
			o /*commands*/,
			f /*configuration*/,
			b /*files*/,
			s /*extensions*/,
			l /*instantiation*/,
			y /*workspace*/,
			$ /*aiService*/,
			v /*indexRequestManager*/,
			S /*repoGraph*/,
			I /*filesConfigurationService*/,
			T /*uri*/,
			P /*utils*/,
			k /*uuid*/,
) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Z9b = e.$Y9b = void 0),
				(v = xi(v)),
				(e.$Y9b = (0, l.$Mi)("aiContextService"));
			function L(N, A) {
				const R = N.resource;
				let O;
				for (const B of A)
					(O === void 0 || B.toString().length > O.toString().length) &&
						R.toString().startsWith(B.toString()) &&
						(O = B);
				return O;
			}
			function D(N, A, R) {
				const U = [
						{ kind: d.SymbolKind.Class, minLines: 10 },
						{ kind: d.SymbolKind.Method, minLines: 10 },
						{ kind: d.SymbolKind.Constructor, minLines: 10 },
						{ kind: d.SymbolKind.Interface, minLines: 10 },
						{ kind: d.SymbolKind.Function, minLines: 10 },
					],
					z = new Set(),
					F = [...A];
				for (; F.length > 0; ) {
					const J = F.pop(),
						W = U.find((X) => X.kind === J.kind);
					W !== void 0 &&
						J.range.endLineNumber + 1 - J.range.startLineNumber >= W.minLines &&
						(z.add(J.range.startLineNumber),
						J.children !== void 0 && F.push(...J.children));
				}
				const x = new Map();
				for (let J = 0; J < N.length; J++) {
					const W = N.getParentIndex(J);
					x.has(W) || x.set(W, []), x.get(W)?.push(J);
				}
				const H = R.getLinesContent(),
					q = (J, W) => {
						if (
							J.children.length === 1 &&
							J.region.startLineNumber ===
								J.children[0].region.startLineNumber &&
							J.region.endLineNumber === J.children[0].region.endLineNumber
						)
							return J.children[0];
						const X = {
							isFoldRegion: W,
							foldingRegionIdx: J.foldingRegionIdx,
							uri: R.uri,
							region: J.region,
							children: J.children,
							parent: void 0,
						};
						for (const Y of J.children) Y.parent = X;
						return (
							J.freeLines > 100 &&
								(console.warn("Node has overflowing free lines: "),
								console.warn(R.uri.path),
								console.warn(X)),
							X
						);
					},
					V = (J, W) => {
						const { children: X, region: Y, freeLines: ie } = J,
							ne = [];
						let ee = Y.startLineNumber,
							_ = 0,
							te = 0,
							Q = Y.startLineNumber,
							Z = !1,
							se = 0,
							re = 0,
							le = 0,
							oe = Y.startLineNumber,
							ae = 0;
						const pe = () =>
								ae < W.length && oe === W[ae].region.startLineNumber,
							$e = (ue, fe, me, ve) => {
								(le = ue),
									(Q = fe ?? oe),
									(se = me ?? te),
									(re = ae),
									(Z = ve ?? !1);
							},
							ye = () => {
								ne.push({
									foldingRegionIdx: J.foldingRegionIdx,
									children: X.filter(
										(ue) =>
											ue.region.startLineNumber >= ee &&
											ue.region.endLineNumber < Q,
									),
									region: { startLineNumber: ee, endLineNumber: Q - 1 },
									freeLines: se,
								}),
									(ee = Z ? Q - 1 : Q),
									(_ = re),
									(te = 0),
									(se = 0),
									(Z = !1),
									(le = 0),
									(oe = ee),
									(ae = _);
							};
						for (; oe <= Y.endLineNumber; ) {
							if (!pe()) oe++, te++;
							else {
								const ue = W[ae];
								(oe = ue.region.endLineNumber + 1), (te += ue.freeLines), ae++;
							}
							te <= 100 &&
								(ae === _
									? (le === 0 && $e(0), H[oe - 1] === "" && le <= 1 && $e(1))
									: (ae > re && le <= 2 && $e(2, oe + 1, te + 1, !0),
										le == 2 &&
											oe === W[ae - 1].region.endLineNumber + 2 &&
											$e(3, oe, te, !1),
										H[oe - 1] === "" && le >= 2 && $e(4))),
								te >= 100 && ye();
						}
						return (
							$e(5),
							ye(),
							{
								foldingRegionIdx: J.foldingRegionIdx,
								region: Y,
								freeLines: ne[0].freeLines,
								children: ne[0].children.concat(
									ne.slice(1).map((ue) => q(ue, !1)),
								),
							}
						);
					},
					G = (J) => {
						const W = [],
							X = [],
							Y =
								J !== -1
									? (() => {
											const _ = N.toRegion(J);
											return {
												startLineNumber: _.startLineNumber,
												endLineNumber: _.endLineNumber,
											};
										})()
									: { startLineNumber: 1, endLineNumber: R.getLineCount() };
						let ie = Y.endLineNumber - Y.startLineNumber + 1;
						for (const _ of x.get(J) || []) {
							const te = G(_);
							(ie -= te.region.endLineNumber - te.region.startLineNumber + 1),
								z.has(te.region.startLineNumber)
									? X.push(q(te, !0))
									: (W.push(te), (ie += te.freeLines));
						}
						for (
							W.sort((_, te) => _.freeLines - te.freeLines);
							W.length > 0 && ie > 100 && W[W.length - 1].freeLines >= 30;
						) {
							const _ = W.pop();
							(ie -= Math.max(0, _.freeLines - 1)), X.push(q(_, !0));
						}
						const ne = [
							...W.map((_) => ({ region: _.region, freeLines: _.freeLines })),
							...X.map((_) => ({ region: _.region, freeLines: 1 })),
						];
						return (
							ne.sort(
								(_, te) => _.region.startLineNumber - te.region.startLineNumber,
							),
							X.push(...W.map((_) => _.children).flat()),
							X.sort(
								(_, te) => _.region.startLineNumber - te.region.startLineNumber,
							),
							V(
								{ foldingRegionIdx: J, children: X, region: Y, freeLines: ie },
								ne,
							)
						);
					};
				return q(G(-1), !0);
			}
			let M = class extends E.$1c {
				constructor(A, R, O, B, U, z, F, x, H, q, V) {
					super(),
						(this.f = A),
						(this.h = R),
						(this.j = O),
						(this.m = B),
						(this.n = U),
						(this.q = z),
						(this.r = F),
						(this.s = x),
						(this.u = H),
						(this.w = q),
						(this.y = V),
						(this.MAX_CONCURRENT = 10),
						(this.findDependenciesQueue = []),
						(this.dependencySummaryPromises = new Map()),
						(this.indexReqManagers = new Map()),
						(this.z = new Map()),
						(this.C = new Map()),
						(this.parallel_dedcap_requests = 0);
				}
				async getIndex(A) {
					const R = await this.m.aiClient();
					if (!this.indexReqManagers.has(A)) {
						const O = new v.default(A, R);
						this.indexReqManagers.set(
							A,
							O.listen().then(() => O),
						);
					}
					return await this.indexReqManagers.get(A);
				}
				async getNodeChunks(A) {
					const R = T.URI.file(A),
						O = await this.s.resolve(R, {
							resolveSingleChildDescendants: !0,
							resolveMetadata: !1,
						});
					return await this.q
						.createModelReference(O.resource)
						.then(async (B) => {
							try {
								const U = B.object.textEditorModel,
									z = await this.G(U);
								if (z) {
									const F = await this.y.getOrCreate(
											U,
											w.CancellationToken.None,
										),
										x = F.getAllSymbols(),
										H = F.getTopLevelSymbols(),
										q = D(z, H, U);
									return (0, S.$X9b)(
										q,
										z,
										this.n.asRelativePath(U.uri),
										U.getValue().split(`
`),
									);
								} else return;
							} finally {
								B.dispose();
							}
						});
				}
				async getWorkspaceNodeChunks(A) {
					const R = this.n.getWorkspace().folders,
						O = [];
					for (const U of R) {
						const z = U.uri,
							x = [await this.s.resolve(z)];
						for (; x.length > 0; ) {
							const H = x.shift();
							if (H.isDirectory && H.children) x.push(...H.children);
							else if (
								!H.isDirectory &&
								(A === void 0 || A(H.resource.fsPath))
							) {
								const q = this.n.asRelativePath(H.resource);
								O.push(this.getNodeChunks(q));
							}
						}
					}
					const B = await Promise.all(O);
					return [];
				}
				async _findNonIgnoredFiles(A, R, O) {
					let B = [A];
					const U = L(A, R);
					let z = [];
					for (; B.length > 0; ) {
						const F = [...B];
						B = [];
						let x = [];
						for (const H of F) {
							if (L(H, R) !== U) {
								z.push(...(await this._findNonIgnoredFiles(H, R, O)));
								continue;
							}
							if (H.isDirectory)
								if (H.children) x = x.concat(H.children);
								else {
									const V =
										(
											await this.s.resolve(H.resource, {
												resolveSingleChildDescendants: !0,
												resolveMetadata: !1,
											})
										).children || [];
									x.push(...V);
								}
							else z.push(H);
						}
						if (U !== void 0) {
							const H = await this.j.executeCommand(
									"git.api.checkIgnore",
									U,
									x.map((V) => V.resource.path),
								),
								q = new Set(H);
							B = x.filter((V) => !q.has(V.resource.path));
						} else B = x;
						B = B.filter((H) => {
							let q = this.n.asRelativePath(H.resource);
							return !O.test(q);
						});
					}
					return z;
				}
				async createNewExperimentalIndex(A, R) {
					const O = this.n.getWorkspace().folders[0].toResource(A);
					if (!(await this.s.stat(O)).isDirectory)
						throw new Error("Target directory is not a directory");
					const U = await this.s.resolve(O, {
							resolveSingleChildDescendants: !0,
							resolveMetadata: !1,
						}),
						z = await this.j.executeCommand("git.api.getRepositories"),
						F = R.map(
							(G) =>
								"(^" +
								G.replace(/\./g, "\\.")
									.replace(/\//g, "\\/")
									.replace(/\$/g, "\\$")
									.replace(/\^/g, "\\^")
									.replace(/\?/g, "\\?")
									.replace(/\*/g, "[^\\/]*")
									.replace("[^\\/]*[^\\/]*", ".*") +
								"(\\/.*)?$)",
						);
					let x = await this._findNonIgnoredFiles(
						U,
						z,
						new RegExp(F.join("|")),
					);
					x = x.filter(
						(G) =>
							!G.name.endsWith(".lock") && !G.name.match(/-lock\.(json|yaml)/),
					);
					const H = await this.m.aiClient(),
						q = L(U, z);
					return (
						await H.createExperimentalIndex(
							new t.$qt({
								targetDir: A,
								repo: q?.toString() ?? "",
								files: x.map((G) => this.n.asRelativePath(G.resource)),
							}),
							{ headers: (0, P.$m6b)((0, k.$9g)()) },
						)
					).indexId;
				}
				async reloadIndexFiles(A) {
					return (
						await (
							await this.m.aiClient()
						).listExperimentalIndexFiles(new t.$st({ indexId: A }), {
							headers: (0, P.$m6b)((0, k.$9g)()),
						})
					).files.map((B) => ({
						relativePath: B.workspaceRelativePath,
						stage: B.stage,
						nodes: B.nodes.map((U) => ({
							nodeId: U.nodeId,
							stage: U.stage,
							content: U.content,
							summary: U.summary,
						})),
					}));
				}
				async buildIndexEdges(A, R) {
					const O = [];
					for (const B of A.files)
						B.stage === "unread" &&
							O.push(
								this.buildFileEdges(
									A.experimentalIndexId,
									B.relativePath,
									(U) => R(B.relativePath, U),
								),
							);
					await Promise.all(O);
				}
				async buildFileEdges(A, R, O) {
					const B = this.n.getWorkspace().folders[0].toResource(R),
						U = await this.s.resolve(B, {
							resolveSingleChildDescendants: !0,
							resolveMetadata: !1,
						}),
						z = await this.m.aiClient();
					let F = [];
					const x = async (q) => {
						const V = q.object.textEditorModel,
							G = await this.G(V);
						if (G) {
							const K = (
									await this.y.getOrCreate(V, w.CancellationToken.None)
								).getTopLevelSymbols(),
								J = D(G, K, V),
								W = V.getLinesContent(),
								X = this.n.asRelativePath(U.resource),
								ie = await (await this.getIndex(A)).registerFileToIndex(
									new t.$Bt({
										indexId: A,
										workspaceRelativePath: X,
										rootContextNode: (0, S.$V9b)(J, X, G, W),
										content: W,
									}),
								),
								ne = [],
								ee = ie.dependencyResolutionAttempts;
							(F =
								ie.fileData?.nodes.map((_) => ({
									nodeId: _.nodeId,
									stage: _.stage,
									content: _.content,
									summary: _.summary,
								})) ?? []),
								await new Promise((_) => setTimeout(_, 500));
							for (const _ of ee) {
								const te = [],
									Q = _.symbol;
								if (Q === void 0) continue;
								const Z = Q.lineNumber,
									se = Q.symbolEndColumn - 1,
									re = await (0, p.$POb)(
										this.f.definitionProvider,
										V,
										new C.$hL(Z, se),
										!1,
										w.CancellationToken.None,
									);
								for (const le of re) {
									const oe = le.uri;
									oe.path !== V.uri.path &&
										te.push(await this.n.asRelativePath(oe));
								}
								te.length > 0 &&
									ne.push(new t.$Zt({ request: _, resolvedPaths: te }));
							}
							return (
								await z.setupIndexDependencies(
									new t.$Dt({
										indexId: A,
										fileId: ie.fileId,
										dependencyResolutionResults: ne,
									}),
									{ headers: (0, P.$m6b)((0, k.$9g)()) },
								),
								{ relativePath: R, stage: "read", nodes: F }
							);
						} else
							return (
								console.error(
									"No folding regions found for file " + V.uri.path,
								),
								{ relativePath: R, stage: "unread", nodes: [] }
							);
					};
					await (async () => {
						for (; this.findDependenciesQueue.length >= this.MAX_CONCURRENT; )
							await Promise.race(
								this.findDependenciesQueue.map((V) => V.then((G) => [V, G])),
							).then(([V, G]) => {
								const K = this.findDependenciesQueue.indexOf(V);
								K !== -1 && this.findDependenciesQueue.splice(K, 1);
							});
						const q = this.q.createModelReference(U.resource).then((V) =>
							x(V)
								.catch(
									(G) => (
										console.error("Error finding dependencies for " + U.name),
										console.error(G),
										{ relativePath: R, stage: "unread", nodes: F }
									),
								)
								.then((G) => (V.dispose(), O(G), G)),
						);
						this.findDependenciesQueue.push(q), await q;
					})();
				}
				async computeIndexTopo(A) {
					await (await this.m.aiClient()).computeIndexTopoSort(
						new t.$Ft({ indexId: A }),
						{ headers: (0, P.$m6b)((0, k.$9g)()) },
					);
				}
				async _handleChooseCodeReferencesNodeResponse(A, R) {
					const O = R.actions;
					let B = [],
						U = [];
					if (O.length === 0) B = [];
					else {
						const H = O[0].workspaceRelativePath,
							q = this.n.getWorkspace().folders[0].toResource(H),
							V = await this.q.createModelReference(q);
						try {
							const G = V.object.textEditorModel;
							console.log(`${O.length} actions requested for ${A}`),
								console.log(O),
								await new Promise((K) => setTimeout(K, 500)),
								(U = await Promise.all(
									O.map(async (K) => {
										let J = [];
										switch (K.action) {
											case t.CodeSymbolWithAction_CodeSymbolAction
												.GO_TO_DEFINITION:
												J = await (0, p.$POb)(
													this.f.definitionProvider,
													G,
													new C.$hL(K.lineNumber, K.symbolEndColumn - 1),
													!1,
													w.CancellationToken.None,
												);
												break;
											case t.CodeSymbolWithAction_CodeSymbolAction
												.GO_TO_IMPLEMENTATION:
												J = await (0, p.$ROb)(
													this.f.implementationProvider,
													G,
													new C.$hL(K.lineNumber, K.symbolEndColumn - 1),
													!1,
													w.CancellationToken.None,
												);
												break;
											case t.CodeSymbolWithAction_CodeSymbolAction.REFERENCES:
												J = await (0, p.$TOb)(
													this.f.referenceProvider,
													G,
													new C.$hL(K.lineNumber, K.symbolEndColumn - 1),
													!1,
													!1,
													w.CancellationToken.None,
												);
												break;
											case t.CodeSymbolWithAction_CodeSymbolAction.UNSPECIFIED:
												break;
										}
										return (
											console.log(
												"Got " +
													J.length +
													" links for action " +
													K.action +
													" on " +
													K.symbol +
													" in " +
													K.workspaceRelativePath,
											),
											{ action: K, links: J }
										);
									}),
								));
						} finally {
							V.dispose();
						}
						B = await Promise.all(
							U.map(async ({ action: G, links: K }) => {
								const J = await this.H(K);
								return new t.$3t({ action: G, references: J });
							}),
						);
					}
					const z = await this.m.aiClient();
					let F,
						x = 0;
					for (;;)
						try {
							this.parallel_dedcap_requests++,
								console.log(
									"Sending registerCodeReferences request for node " +
										A +
										" (parallel: " +
										this.parallel_dedcap_requests +
										")",
								),
								(F = await z.registerCodeReferences(
									new t.$Nt({ nodeId: A, references: B }),
									{ headers: (0, P.$m6b)((0, k.$9g)()) },
								)),
								console.log(
									"Got back registerCodeReferences request for node " + A,
								);
							break;
						} catch (H) {
							if (
								(console.error(
									"Error during registerCodeReferences for node " + A,
								),
								x++,
								x < 3)
							)
								console.log("Retrying after " + x + " attempts for node " + A),
									await new Promise((q) => setTimeout(q, 100));
							else throw H;
						} finally {
							this.parallel_dedcap_requests--;
						}
					return F.dependencies;
				}
				async _linkNode(A, R, O) {
					const B = O?.force ?? !1,
						U = A + "-" + R,
						z = Date.now(),
						F = async () => {
							const x = new t.$Ht({
									indexId: A,
									request: { case: "node", value: new t.$Jt({ nodeId: R }) },
									recompute: B,
								}),
								H = await this.getIndex(A);
							let q,
								V = 0;
							for (;;)
								try {
									this.parallel_dedcap_requests++,
										console.log(
											"Sending chooseCodeReferences request for node " +
												R +
												" (parallel: " +
												this.parallel_dedcap_requests +
												")",
										),
										(q = await H.chooseCodeReferences(x)),
										console.log(
											"Got back chooseCodeReferences request for node " + R,
										);
									break;
								} catch (K) {
									if (
										(console.error(
											"Error during chooseCodeReferences for node " + R,
										),
										V++,
										V < 3)
									)
										console.log(
											"Retrying after " + V + " attempts for node " + R,
										),
											await new Promise((J) => setTimeout(J, 100));
									else throw K;
								} finally {
									this.parallel_dedcap_requests--;
								}
							if (q.response.case !== "node")
								throw new Error(
									"Unexpected response type " +
										q.response.case +
										" when linking node",
								);
							const G = q.response.value.skipped;
							if (G && B)
								throw new Error(
									"Unexpected skipped response when linking node with force = true",
								);
							return G
								? q.response.value.dependencies
								: await this._handleChooseCodeReferencesNodeResponse(
										R,
										q.response.value,
									).then(
										(K) => (
											O?.onLink?.(R), this.C.get(U) === z && this.z.delete(U), K
										),
									);
						};
					return B || !this.z.has(U)
						? (this.C.set(U, z), this.z.set(U, F()), await this.z.get(U))
						: (console.log("Duplicate linkNode request for node " + R),
							await this.z.get(U));
				}
				async linkNode(A, R) {
					return await this._linkNode(A, R, { force: !0 });
				}
				_createDependencySummaryRequest(A, R, O) {
					const B = "index:" + A + ":node:" + R;
					if (this.dependencySummaryPromises.has(B))
						return this.dependencySummaryPromises.get(B);
					const U = this._summarizeNode({
						indexId: A,
						nodeId: R,
						force: !1,
						...(O ?? {}),
					})
						.then(async () => {
							await new Promise((z) => setTimeout(z, 1e3)),
								this.dependencySummaryPromises.delete(B);
						})
						.catch((z) => {
							throw (this.dependencySummaryPromises.delete(B), z);
						});
					return this.dependencySummaryPromises.set(B, U), U;
				}
				async _summarizeNode({
					indexId: A,
					nodeId: R,
					force: O,
					onLink: B,
					onSummarize: U,
					cachedSummary: z,
				}) {
					const F = z?.(R);
					if (F !== void 0) return F;
					const x = new t.$Pt({ indexId: A, nodeId: R, recompute: O }),
						H = await this.getIndex(A);
					let q;
					await this._linkNode(A, R, { force: !1, onLink: B });
					let V = 0;
					for (;;)
						try {
							this.parallel_dedcap_requests++,
								console.log(
									"Sending summarizeWithReferences request for node " +
										R +
										" (parallel: " +
										this.parallel_dedcap_requests +
										")",
								),
								(q = await H.summarizeWithReferences(x)),
								console.log(
									"Got back summarizeWithReferences request for node " + R,
								);
							break;
						} catch (K) {
							if (
								(console.error(
									"Error during summarizeWithReferences for node " + R,
								),
								V++,
								V < 3)
							)
								console.log("Retrying after " + V + " attempts for node " + R),
									await new Promise((J) => setTimeout(J, 100));
							else throw K;
						} finally {
							this.parallel_dedcap_requests--;
						}
					const G = async (K) => {
						const J = K.map((W) =>
							this._createDependencySummaryRequest(A, W, {
								onLink: B,
								onSummarize: U,
							}),
						);
						await Promise.all(J);
					};
					switch (q.response.case) {
						case "dependency":
							return (
								console.log(
									"SummarizeWithReferences returned dependency case for node " +
										R,
								),
								console.log(q.response.value.nodes),
								await G(q.response.value.nodes),
								await this._summarizeNode({
									indexId: A,
									nodeId: R,
									force: O,
									onLink: B,
									onSummarize: U,
								})
							);
						case "success":
							return (
								console.log(
									"SummarizeWithReferences returned success case for node",
								),
								U?.(R, q.response.value.summary),
								q.response.value.summary
							);
						default:
							throw new Error(
								"Unexpected response type " +
									q.response.case +
									" when summarizing node",
							);
					}
				}
				async summarizeNode(A, R, O) {
					return await this._summarizeNode({
						indexId: A,
						nodeId: R,
						force: !0,
						...(O ?? {}),
					});
				}
				async summarizeNodes(A, R, O) {
					const U = [];
					for (let z = 0; z < R.length; z++) {
						const F = R[z],
							x = () =>
								this._summarizeNode({
									indexId: A,
									nodeId: F,
									force: !1,
									...(O ?? {}),
								});
						for (
							console.log(
								"Node in queue: " + F + " (queue size: " + U.length + ")",
							);
							U.length >= 50;
						)
							await Promise.race(U.map((H) => H.then((q) => [H, q]))).then(
								([H, q]) => {
									const V = U.indexOf(H);
									V !== -1 && U.splice(V, 1);
								},
							);
						U.push(x());
					}
					await Promise.all(U);
				}
				async getNodeSummary(A, R, O) {
					return await this._summarizeNode({
						indexId: A,
						nodeId: R,
						force: !1,
						...(O ?? {}),
					});
				}
				async contextualizeSymbol(A) {}
				F(A, R, O) {
					if (O.range === void 0) {
						console.error(
							"No target selection range found for ref " +
								JSON.stringify(O, null, 2),
						);
						return;
					}
					const B = this.n.asRelativePath(A.uri),
						U = A.getLinesContent(),
						z = (0, S.$W9b)(O.range.startLineNumber, R, B, U);
					return new t.$4t({
						range: new i.$Fs({
							startLineNumber: O.range.startLineNumber,
							startColumn: O.range.startColumn,
							endLineNumberInclusive: O.range.endLineNumber,
							endColumn: O.range.endColumn,
						}),
						reference: z,
					});
				}
				async G(A) {
					const R = { limit: 5e3, update: () => {} },
						O = new n.$PNb(A, this.r, R);
					let B = O;
					const U = c.$ZNb.getFoldingRangeProviders(this.f, A);
					U.length > 0 && (B.dispose(), (B = new g.$XNb(A, U, () => {}, R, O)));
					const z = await B.compute(w.CancellationToken.None);
					return B.dispose(), z ?? void 0;
				}
				async H(A) {
					const R = new Map();
					for (const B of A) {
						const U = B.uri;
						R.has(U.path) || R.set(U.path, []), R.get(U.path)?.push(B);
					}
					return (
						await Promise.all(
							[...R.entries()].slice(0, 10).map(async ([B, U]) => {
								const z = U[0].uri,
									F = await this.q.createModelReference(z);
								try {
									const x = F.object.textEditorModel;
									if (this.f.foldingRangeProvider.all(x).length == 0) return [];
									const q = await this.G(x);
									return q
										? U.slice(0, 10)
												.map((G) => this.F(x, q, G))
												.filter((G) => G !== void 0)
										: [];
								} finally {
									F.dispose();
								}
							}),
						)
					).flat();
				}
			};
			(e.$Z9b = M),
				(e.$Z9b = M =
					Ne(
						[
							j(0, r.$k3),
							j(1, u.$bub),
							j(2, o.$ek),
							j(3, $.$Nfc),
							j(4, y.$Vi),
							j(5, a.$MO),
							j(6, m.$aN),
							j(7, b.$ll),
							j(8, f.$gj),
							j(9, I.$_Y),
							j(10, h.$9Db),
						],
						M,
					)),
				(0, s.$lK)(e.$Y9b, M, s.InstantiationType.Delayed);
		},
	)
