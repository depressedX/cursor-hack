import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../../../proto/aiserver/v1/review_pb.js';
import '../../../../../proto/aiserver/v1/review_connectweb.js';
import '../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/uuid.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../editor/contrib/documentSymbols/browser/outlineModel.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/workspace/common/workspace.js';
import './aiReviewPeekView.js';
import '../../../services/ai/browser/aiMiscServices.js';
import '../../../services/ai/browser/aiService.js';
import '../../../services/ai/browser/backendClient.js';
import '../../../services/ai/browser/gitContextService.js';
import '../../../services/ai/browser/utils.js';
import '../../../services/editor/common/editorService.js';
import '../../aichat/browser/chatDataService.js';
import '../../aichat/browser/aichat.js';
import '../../../../base/common/buffer.js';
import '../../../../platform/dialogs/common/dialogs.js';
define(
			de[4242],
			he([
				1, 0, 148, 736, 1117, 83, 3, 9, 47, 65, 42, 204, 22, 20, 5, 45, 32, 25,
				4241, 137, 118, 285, 359, 191, 18, 337, 418, 76, 57,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*aiserver_pb*/,
				i /*review_pb*/,
				w /*review_connectweb*/,
				E /*utils_pb*/,
				C /*lifecycle*/,
				d /*uri*/,
				m /*uuid*/,
				r /*codeEditorService*/,
				u /*resolverService*/,
				a /*outlineModel*/,
				h /*files*/,
				c /*extensions*/,
				n /*instantiation*/,
				g /*reactiveStorageService*/,
				p /*telemetry*/,
				o /*workspace*/,
				f /*aiReviewPeekView*/,
				b /*aiMiscServices*/,
				s /*aiService*/,
				l /*backendClient*/,
				y /*gitContextService*/,
				$ /*utils*/,
				v /*editorService*/,
				S /*chatDataService*/,
				I /*aichat*/,
				T /*buffer*/,
				P /*dialogs*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zed = void 0);
				function k(H, q) {
					return (
						(H.startLineOneIndexed <= q.startLineOneIndexed &&
							H.endLineExclusiveOneIndexed > q.startLineOneIndexed) ||
						(H.startLineOneIndexed < q.endLineExclusiveOneIndexed &&
							H.endLineExclusiveOneIndexed >= q.endLineExclusiveOneIndexed) ||
						(H.startLineOneIndexed >= q.startLineOneIndexed &&
							H.endLineExclusiveOneIndexed <= q.endLineExclusiveOneIndexed)
					);
				}
				function L(H) {
					let q = [];
					for (const V of H) {
						let G = q.filter((K) =>
							k(K, {
								startLineOneIndexed: V.startLineOneIndexed,
								endLineExclusiveOneIndexed: V.endLineExclusiveOneIndexed,
							}),
						);
						if (G.length > 0) {
							let K = Math.min(
									...G.map((W) => W.startLineOneIndexed),
									V.startLineOneIndexed,
								),
								J = Math.max(
									...G.map((W) => W.endLineExclusiveOneIndexed),
									V.endLineExclusiveOneIndexed,
								);
							(q = q.filter((W) => !G.includes(W))),
								q.push({
									startLineOneIndexed: K,
									endLineExclusiveOneIndexed: J,
								});
						} else q.push(V);
					}
					return q;
				}
				function D(H) {
					let q = 1;
					const V = [];
					for (const G of H) {
						q = G.newStart;
						for (const K of G.changes)
							K.type === "add"
								? ((q = K.ln),
									V.push({
										startLineOneIndexed: q,
										endLineExclusiveOneIndexed:
											q +
											K.content.split(`
`).length,
									}))
								: K.type === "normal"
									? (q = K.ln2)
									: K.type === "del" &&
										(V.some((J) => J.startLineOneIndexed === q) ||
											V.push({
												startLineOneIndexed: q,
												endLineExclusiveOneIndexed: q + 1,
											}));
					}
					return V;
				}
				function M(H) {
					H = [...H].sort((q, V) => q.newStart - V.newStart);
					for (const q of H) {
						const V = q.changes
							.filter((G) => G.type !== "del")
							.sort((G, K) => {
								let J = G.type === "normal" ? G.ln2 : G.ln,
									W = K.type === "normal" ? K.ln2 : K.ln;
								return J - W;
							});
						for (const G of q.changes.filter((K) => K.type === "del")) {
							const K = V.findIndex((J) => J.type === "normal" && J.ln2 < G.ln);
							K === -1 ? V.push(G) : V.splice(K, 0, G);
						}
						q.changes = V;
					}
					return H;
				}
				function N(H) {
					const q = [H.content];
					for (const V of H.changes) q.push(V.content);
					return q.join(`
`);
				}
				function A(H, q, V) {
					const G = q.split(`
`),
						K = M(H),
						J = [];
					let W = !1,
						X = V.startLineOneIndexed;
					for (const Y of K) {
						if (Y.newStart >= V.endLineExclusiveOneIndexed) break;
						Y.newStart >= V.startLineOneIndexed &&
							J.push(...G.slice(X - 1, Y.newStart - 1));
						for (const ie of Y.changes) {
							const ne =
								ie.type !== "del"
									? ie.type === "normal"
										? ie.ln2
										: ie.ln
									: void 0;
							if (
								ne !== void 0 &&
								(ne >= V.startLineOneIndexed &&
									ne < V.endLineExclusiveOneIndexed &&
									((X =
										ne +
										ie.content.split(`
`).length),
									(W = !0)),
								ne >= V.endLineExclusiveOneIndexed && ie.type === "normal")
							)
								break;
							W && J.push(ie.content);
						}
					}
					return (
						J.push(...G.slice(X - 1, V.endLineExclusiveOneIndexed - 1)),
						J.join(`
`)
					);
				}
				function R(H, q) {
					return H.map((V) => ({
						...V,
						reason: q.find((G) =>
							k(G, {
								startLineOneIndexed: V.range.startLineNumber,
								endLineExclusiveOneIndexed: V.range.endLineNumber + 1,
							}),
						),
					})).filter((V) => V.reason !== void 0);
				}
				function O(H, q) {
					return q.filter(
						(V) =>
							!H.some((G) =>
								k(V, {
									startLineOneIndexed: G.range.startLineNumber,
									endLineExclusiveOneIndexed: G.range.endLineNumber + 1,
								}),
							),
					);
				}
				function B(H) {
					return H.reduce(
						(q, V) =>
							q.some(
								(G) =>
									G.name === V.name &&
									G.range.startLineNumber === V.range.startLineNumber &&
									G.range.endLineNumber === V.range.endLineNumber,
							)
								? q
								: [...q, V],
						[],
					);
				}
				function U(H) {
					return H.reduce((q, V) => {
						const G = q.filter((K) => K.name === V.name);
						return G.length > 0
							? G[0].range.endLineNumber - G[0].range.startLineNumber >
								V.range.endLineNumber - V.range.startLineNumber
								? q
								: [...q.filter((K) => K.name !== V.name), V]
							: [...q, V];
					}, []);
				}
				function z(H) {
					return H.filter(
						(q, V) =>
							!H.some(
								(G, K) =>
									V !== K &&
									q.range.startLineNumber >= G.range.startLineNumber &&
									q.range.endLineNumber <= G.range.endLineNumber,
							),
					);
				}
				function F(H) {
					return [
						"node_modules",
						".git",
						"pnpm-lock.yaml",
						"yarn.lock",
						".vscode",
						".env",
						"dist",
						"build",
						"package-lock.json",
						"composer.lock",
						".json",
						".csv",
						"Gemfile.lock",
						"Cargo.lock",
						"Gopkg.lock",
						"Podfile.lock",
						"npm-shrinkwrap.json",
						"yarn-integrity",
						".pyc",
						".class",
						".jar",
						".go",
					].some((q) => H.includes(q));
				}
				let x = class extends C.$1c {
					constructor(q, V, G, K, J, W, X, Y, ie, ne, ee, _, te, Q) {
						super(),
							(this.j = q),
							(this.n = V),
							(this.q = G),
							(this.r = K),
							(this.s = J),
							(this.u = W),
							(this.w = X),
							(this.y = Y),
							(this.z = ie),
							(this.C = ne),
							(this.F = ee),
							(this.G = _),
							(this.H = te),
							(this.I = Q),
							(this.h = []),
							this.D(
								this.w.onDidActiveEditorChange(() => {
									this.J();
								}),
							),
							this.u.waitForGitContextProvider().then(() => {
								this.r.setNonPersistentStorage(
									"reviewState",
									"gitProviderState",
									"ready",
								);
							}),
							(this.c = this.z.createInstance(l.$q6b, { service: w.$8ab })),
							(this.f = new AbortController()),
							(this.g = new AbortController());
					}
					toggleThreadResolveStatus(q, V, G) {
						const K = this.r.nonPersistentStorage.reviewState;
						K.chunks[q].threads.find((X) => X.id === V) &&
							this.r.setNonPersistentStorage("reviewState", {
								...K,
								chunks: {
									...K.chunks,
									[q]: {
										...K.chunks[q],
										threads: K.chunks[q].threads.map((X) =>
											X.id === V ? { ...X, isResolved: G ?? !X.isResolved } : X,
										),
									},
								},
							});
					}
					clear() {
						this.abort(),
							this.J(),
							this.r.setNonPersistentStorage("reviewState", {
								entryPoint: null,
								chunks: {},
								generatingState: "norequest",
							});
					}
					getChunkAndThread(q, V) {
						const G = this.r.nonPersistentStorage.reviewState.chunks[q];
						if (!G) {
							console.error("[ai review] Review chunk not found! Aborting...");
							return;
						}
						const K = G.threads.find((J) => J.id === V);
						if (!K) {
							console.error("[ai review] Bug not found! Aborting...");
							return;
						}
						return { reviewChunk: G, thread: K };
					}
					async followUpInChat(q, V) {
						const G = this.getChunkAndThread(q, V);
						if (!G) return;
						const { reviewChunk: K, thread: J } = G,
							{
								selection: { fileName: W, startLine: X, endLine: Y },
							} = K;
						this.G.persistSelectedChat(!0), await this.showAiReviewRegion(q, V);
						const ne = this.y
							.listCodeEditors()
							.find(
								(te) =>
									te.hasModel() &&
									this.q.asRelativePath(te.getModel()?.uri) === W,
							);
						if (!ne?.getModel() || !ne) return;
						const _ = `For the selected code, there is a suggested error of

'''
${J.bug.description}
'''
How can I resolve this? If you propose a fix, please make it concise.`;
						await this.H.insertIntoChat({
							message: _,
							editorUri: ne.getModel()?.uri.toString() ?? "",
							includeCurrentFile: !0,
							lastBubble: !1,
						});
					}
					async submitReviewChatMessage(q, V, G, K) {
						const J = this.getChunkAndThread(V, G);
						if (!J) return;
						const { reviewChunk: W, thread: X } = J,
							{
								selection: { fileName: Y, startLine: ie, endLine: ne },
							} = W,
							ee = await this.n.createModelReference(
								this.q.resolveRelativePath(Y.startsWith("/") ? Y.slice(1) : Y),
							),
							_ = {
								type: t.ReviewChatMessage_ReviewChatMessageType.HUMAN,
								text: q,
							},
							te = [...X.messages, _],
							Q = { ...X, messages: te };
						this.L(V, G, Q), K();
						try {
							const se = ee.object.textEditorModel.getValue(),
								le = (await this.c.get()).streamReviewChat(
									new i.$Zab({
										bug: Q.bug,
										file: {
											relativeWorkspacePath: Q.bug.relativeWorkspacePath,
											contents: se,
										},
										messages: Q.messages,
									}),
									{ signal: this.g.signal, headers: (0, $.$m6b)((0, m.$9g)()) },
								);
							let oe = !1,
								ae = Q.messages,
								pe = "";
							for await (const $e of le) {
								if (this.g.signal.aborted) {
									oe = !0;
									break;
								}
								const { text: ye } = $e;
								(pe += ye),
									(ae = [
										...Q.messages,
										{
											text: pe,
											type: t.ReviewChatMessage_ReviewChatMessageType.AI,
										},
									]),
									this.L(V, G, { ...Q, messages: ae });
							}
							if (oe) return;
							this.L(V, G, { ...Q, isGenerating: !1, messages: ae });
						} catch (Z) {
							console.error(Z);
						}
						ee.dispose();
					}
					getReviewChunkById(q) {
						return this.r.nonPersistentStorage.reviewState.chunks[q] ?? null;
					}
					async showAiReviewRegion(q, V) {
						const G = this.r.nonPersistentStorage.reviewState.chunks[q];
						if (!G) {
							console.error("[ai review] Review chunk not found! Aborting...");
							return;
						}
						const K = G.threads.find((ie) => ie.id === V);
						if (!K) {
							console.error("[ai review] Thread not found! Aborting...");
							return;
						}
						const { startLine: J, endLine: W } = K.bug;
						if (!J && !W) {
							console.error(
								"[ai review] Bug start or end line not found! Aborting...",
							);
							return;
						}
						const {
							selection: { fileName: X },
						} = G;
						console.log(
							"[ai review] rendering ai review peek view with data:",
							G,
							K,
							J,
							W,
						);
						const Y = {
							resource: this.q.resolveRelativePath(
								X.startsWith("/") ? X.slice(1) : X,
							),
							options: {
								preserveFocus: !0,
								pinned: !0,
								revealIfVisible: !0,
								selection: {
									startLineNumber: J,
									endLineNumber: (W ?? 1) + 1,
									startColumn: 1,
									endColumn: 1,
								},
							},
						};
						await this.w.openEditor(Y);
					}
					async renderAiReviewPeekView(q, V) {
						const G = this.getChunkAndThread(q, V);
						if (!G) return;
						const { reviewChunk: K, thread: J } = G,
							{ startLine: W, endLine: X } = J.bug;
						if (!W && !X) {
							console.error(
								"[ai review] Bug start or end line not found! Aborting...",
							);
							return;
						}
						const {
							selection: { fileName: Y },
						} = K;
						console.log(
							"[ai review] rendering ai review peek view with data:",
							K,
							J,
							W,
							X,
						);
						const ie = {
							resource: this.q.resolveRelativePath(
								Y.startsWith("/") ? Y.slice(1) : Y,
							),
							options: {
								preserveFocus: !0,
								pinned: !0,
								revealIfVisible: !0,
								selection: {
									startLineNumber: W,
									endLineNumber: X,
									startColumn: 1,
									endColumn: 1,
								},
							},
						};
						await this.w.openEditor(ie);
						const ne = this.y.getActiveCodeEditor();
						if (!ne) {
							console.error("[ai review] Code editor not found! Aborting...");
							return;
						}
						this.J();
						const ee = (0, f.$yed)(
							ne,
							q,
							J.id,
							{ lineNumber: X ?? W ?? 1, column: 1 },
							this.z,
						);
						this.h.push(ee);
					}
					_clearState() {
						this.abort(),
							this.J(),
							this.r.setNonPersistentStorage("reviewState", (q) => ({
								...q,
								chunks: {},
							})),
							this.r.setNonPersistentStorage(
								"reviewState",
								"generatingState",
								"generating",
							);
					}
					async runOnDiffs(q) {
						this.s.publicLogCapture("aiReviewService.runOnDiffs");
						const V = this.q.getWorkspace().folders;
						if (V.length === 0) return;
						const G = q
								.filter((Y) => Y.to !== void 0 && !F(Y.to))
								.sort((Y, ie) => (Y.to ?? "").localeCompare(ie.to ?? "")),
							K = await Promise.all(
								G.map(async (Y) => {
									try {
										if (
											Y.to === void 0 ||
											(await this.F.stat(d.URI.joinPath(V[0].uri, Y.to)))
												.isDirectory
										)
											return;
										const ne = await this.F.readFile(
												d.URI.joinPath(V[0].uri, Y.to),
											).then((_) => _.value.toString()),
											ee = Y.chunks.map((_) => ({
												diffString: N(_),
												oldStart: _.oldStart,
												oldLines: _.oldLines,
												newStart: _.newStart,
												newLines: _.newLines,
											}));
										return new i.$Wab({
											file: new E.$Rs({
												relativeWorkspacePath: Y.to,
												contents: ne,
											}),
											chunkDiffs: ee,
										});
									} catch (ie) {
										console.error(ie);
										return;
									}
								}),
							).then((Y) => Y.filter((ie) => ie !== void 0)),
							J = await this.c.get(),
							W = new i.$Vab({
								fileDiffs: K,
								linterRules:
									this.r.applicationUserPersistentStorage
										.aiReviewPersistentStorage.customInstructions,
								alsoFindHardBugs:
									this.r.applicationUserPersistentStorage.shouldFindHardBugs ??
									!1,
								saveRequestAs:
									this.r.applicationUserPersistentStorage
										.aiReviewPersistentStorage.pathToSaveBugsTo ?? void 0,
							});
						this.maybeRunBackgroundReview(W);
						const X = J.streamReview(W, {
							signal: this.f.signal,
							headers: (0, $.$m6b)((0, m.$9g)()),
						});
						for await (const Y of X) {
							const ie = Y.bug;
							if (ie === void 0) continue;
							const ne = ie.id,
								ee = ie.chunkId;
							this.r.setNonPersistentStorage("reviewState", (_) => {
								const te = _.chunks[ee]?.threads ?? [],
									Q = te.find((re) => re.id === ne),
									Z = {
										id: ne,
										isResolved: Q?.isResolved ?? !1,
										bug: ie,
										messages: [
											{
												type: t.ReviewChatMessage_ReviewChatMessageType.AI,
												text: ie.description ?? "",
											},
										],
										isGenerating: !1,
									};
								let se;
								return (
									Q === void 0
										? (se = [...te, Z])
										: (se = te.map((re) => (re.id === ne ? Z : re))),
									se.sort(
										(re, le) => (le.bug.severity ?? 0) - (re.bug.severity ?? 0),
									),
									{
										..._,
										chunks: {
											..._.chunks,
											[ee]: {
												text: "",
												tldr: "",
												generating: !1,
												numBugs: 0,
												dismissed: !1,
												threads: se,
												selection: {
													startLine: ie.startLine,
													endLine: ie.endLine,
													fileName: ie.relativeWorkspacePath,
													text: "",
												},
											},
										},
									}
								);
							});
						}
						console.log(
							JSON.stringify(this.r.nonPersistentStorage.reviewState, null, 2),
						);
					}
					async maybeRunBackgroundReview(q) {
						if (!this.r.applicationUserPersistentStorage.shouldFindHardBugs)
							return;
						const V = await this.c.get(),
							G = [];
						for await (const K of V.streamSlowReview(q, {
							signal: this.f.signal,
							headers: (0, $.$m6b)((0, m.$9g)()),
						}))
							K.bug && G.push(K.bug);
						if (G.length > 0) {
							const K = "/tmp/bugs.yaml",
								J = d.URI.file(K);
							await this.F.writeFile(
								J,
								T.$Te.fromString(JSON.stringify(G, null, 2)),
							),
								await this.I.info(
									`${G.length} possible bugs are ready for review. ${K} will open now.`,
								),
								await this.w.openEditor({
									resource: J,
									options: { pinned: !0 },
								});
						}
					}
					async _run(q) {
						this._clearState(), this.abort();
						try {
							const V = await q();
							V && (await this.runOnDiffs(V));
						} catch (V) {
							console.error(V);
						} finally {
							this.r.setNonPersistentStorage(
								"reviewState",
								"generatingState",
								"done",
							);
						}
					}
					async run() {
						await this._run(async () => await this.u.getGitDiff());
					}
					async runOnDiffWithMain() {
						this.s.publicLogCapture("aiReviewService.runOnDiffWithMain"),
							await this._run(async () => await this.u.getBranchDiff());
					}
					runOnLastCommit() {
						this.s.publicLogCapture("aiReviewService.runOnLastCommit"),
							this._run(async () => await this.u.getLastCommit());
					}
					runOnCommit(q) {
						this.s.publicLogCapture("aiReviewService.runOnCommit"),
							this._run(async () => (await this.u.getFullCommit(q.sha))?.diff);
					}
					runOnPR(q) {
						this.s.publicLogCapture("aiReviewService.runOnPR"),
							this._run(async () => (await this.u.getFullPr(q.number))?.diff);
					}
					abort() {
						this.f.abort(),
							this.g.abort(),
							(this.f = new AbortController()),
							(this.g = new AbortController());
					}
					abortChat() {
						this.g.abort(), (this.g = new AbortController());
					}
					dispose() {
						this.abort(), this.J(), super.dispose();
					}
					J() {
						this.h.forEach((q) => q.dispose()), (this.h = []);
					}
					L(q, V, G) {
						const K = this.r.nonPersistentStorage.reviewState.chunks[q];
						if (K)
							return (
								this.r.setNonPersistentStorage("reviewState", (J) => ({
									...J,
									chunks: {
										...J.chunks,
										[q]: {
											...K,
											threads: K.threads.map((W) =>
												W.id === V ? { ...W, ...G } : W,
											),
										},
									},
								})),
								G
							);
					}
				};
				(e.$zed = x),
					(e.$zed = x =
						Ne(
							[
								j(0, a.$9Db),
								j(1, u.$MO),
								j(2, o.$Vi),
								j(3, g.$0zb),
								j(4, p.$km),
								j(5, y.$$Db),
								j(6, v.$IY),
								j(7, r.$dtb),
								j(8, n.$Li),
								j(9, s.$Nfc),
								j(10, h.$ll),
								j(11, S.$kgc),
								j(12, I.$qgc),
								j(13, P.$GO),
							],
							x,
						)),
					(0, c.$lK)(b.$ofc, x, c.InstantiationType.Delayed);
			},
		)
