define(de[4240], he([1, 0, 2, 4239, 36]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$ved = E);
			function E(C, d, m) {
				return (0, w.$ndc)(() => (0, t.createComponent)(i.$ued, m), C, d);
			}
		}),
		define(
			de[4241],
			he([1, 0, 97, 3, 17, 7, 98, 255, 5, 45, 35, 4240, 66, 18, 4136]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$yed = p),
					(E = mt(E));
				let g = class extends d.$9Mb {
					constructor(f, b, s, l, y, $, v, S, I) {
						super(
							f,
							{
								showFrame: !0,
								showArrow: !0,
								isResizeable: !0,
								isAccessible: !0,
							},
							v,
						),
							(this.cb = b),
							(this.db = s),
							(this.eb = l),
							(this.fb = S),
							(this.gb = I),
							(this.a = new i.$Zc()),
							(this.r = []),
							(this.Z = null);
						const T = this.fb.nonPersistentStorage.reviewState.chunks[s];
						if (!T) {
							console.error("[ai review] Review chunk not found! Aborting...");
							return;
						}
						const P = T.threads.find((k) => k.id === l);
						if (!P) {
							console.error("[ai review] Bug not found! Aborting...");
							return;
						}
						(this.ab = T),
							(this.bb = P),
							(this.b = f),
							(this.c = y),
							(this.d = $),
							this.create(),
							this.hb(this.c.getColorTheme()),
							this.o.add(this.c.onDidColorThemeChange(this.hb, this)),
							this.o.add(this.a),
							this.o.add(this.gb.onDidChangeActiveGroup(() => this.dispose())),
							this.o.add(this.b.onDidDispose(() => this.dispose())),
							this.o.add(this.b.onDidChangeModel(() => this.dispose())),
							this.kb();
					}
					hb(f) {
						const b = f.getColor(d.$aNb) || t.$UL.transparent;
						this.style({
							arrowColor: b,
							frameColor: b,
							headerBackgroundColor: f.getColor(d.$0Mb) || t.$UL.transparent,
							primaryHeadingColor: f.getColor(d.$$Mb),
							secondaryHeadingColor: f.getColor(d.$_Mb),
						});
					}
					P(f) {
						const b = E.$(".ai-review-peek-view-title", {});
						f.appendChild(b),
							(f.style.zIndex = "1000"),
							(f.style.position = "relative"),
							(this.i = b),
							super.P(f);
					}
					T(f) {
						this.m = f;
					}
					dispose() {
						this.a.dispose(), this.lb(), super.dispose();
					}
					kb() {
						if (!this.x) {
							this.editor.revealLineInCenterIfOutsideViewport(
								this.cb.lineNumber,
								C.ScrollType.Smooth,
							),
								super.show(w.$iL.fromPositions(this.cb), 12),
								this.a.add(
									(0, n.$xed)(this.i, this.M, {
										reviewChunkId: this.db,
										threadId: this.eb,
										closePeekView: () => this.dispose(),
									}),
								),
								this.a.add(
									(0, a.$ved)(this.m, this.M, {
										reviewChunkId: this.db,
										threadId: this.eb,
									}),
								);
							const f = this.b.getModel();
							f &&
								this.X &&
								this.Y &&
								(this.lb(),
								(this.r = f.deltaDecorations(this.r, [
									{
										range: new w.$iL(this.X, 1, this.Y, 1e3),
										options: {
											className: "ai-review-peek-view-highlight",
											description: "AiReviewPeekViewHighlight",
											isWholeLine: !0,
										},
									},
								]))),
								(this.Z = f),
								(this.x = !0);
						}
					}
					lb() {
						this.Z &&
							(this.Z.deltaDecorations(this.r, []),
							(this.Z = null),
							(this.r.length = 0));
					}
				};
				g = Ne(
					[j(4, u.$iP), j(5, c.$IY), j(6, m.$Li), j(7, r.$0zb), j(8, h.$EY)],
					g,
				);
				function p(o, f, b, s, l) {
					return l.createInstance(g, o, s, f, b);
				}
			},
		),
		define(
			de[4242],
			he([
				1, 0, 148, 736, 1117, 83, 3, 9, 47, 65, 42, 204, 22, 20, 5, 45, 32, 25,
				4241, 137, 118, 285, 359, 191, 18, 337, 418, 76, 57,
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
				y,
				$,
				v,
				S,
				I,
				T,
				P,
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
		),
		define(
			de[4243],
			he([1, 0, 30, 55, 52, 137, 4242]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Aed = void 0);
				let C = class {
					constructor(m) {
						this.a = m;
					}
				};
				(e.$Aed = C),
					(e.$Aed = C = Ne([j(0, E.$ofc)], C)),
					t.$Io
						.as(i.Extensions.Workbench)
						.registerWorkbenchContribution(C, w.LifecyclePhase.Eventually);
			},
		),
		define(
			de[1376],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 14, 26, 551, 242, 135, 36, 331]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$F_b = T),
					(e.$G_b = P);
				const o = (0, t.template)("<span>"),
					f = (0, t.template)("<span>Indexing <i>"),
					b = (0, t.template)("<span>Indexed <i>"),
					s = (0, t.template)("<span>Indexing failed"),
					l = (0, t.template)('<div class="docs-button" title="Save"><span>'),
					y = (0, t.template)("<div><div></div><div>"),
					$ = (0, t.template)(
						'<div><div><div></div><span></span></div><div><div><span></span></div><div title="See pages"><div></div></div><div class="docs-button" title="Delete"><span>',
					),
					v = (0, t.template)('<input type="text">'),
					S = (0, t.template)('<div class="docs-button" title="Edit"><span>'),
					I = (0, t.template)("<a>");
				function T(k) {
					return new Date(k).toLocaleString(void 0, {
						month: "numeric",
						day: "numeric",
						year: "2-digit",
						hour: "numeric",
						minute: "2-digit",
						hour12: !0,
					});
				}
				function P(k) {
					const L = (0, g.$odc)(),
						[D, M] = (0, r.createSignal)(""),
						[N, A] = (0, r.createSignal)(null),
						[R, O] = (0, r.createSignal)(!1),
						B = (V) => `${V.identifier}${V.name}`;
					(0, r.createEffect)(() => {
						const V = (G) => {
							G.target.closest(".see-pages-button") || A(null);
						};
						L.window.addEventListener("click", V),
							(0, r.onCleanup)(() => {
								L.window.removeEventListener("click", V);
							});
					});
					const U = (V) => {
							O(!0), M(V.name);
							let G = 0;
							const K = () => {
								q ? q.focus() : G < 3 && (G++, setTimeout(K, 50));
							};
							K();
						},
						z = (V) => {
							D() &&
								L.reactiveStorageService.setApplicationUserPersistentStorage(
									"personalDocs",
									(G) =>
										G.map((K) => (B(K) === B(V) ? { ...K, name: D() } : K)),
								),
								O(!1),
								M("");
						},
						F = (0, h.$s6b)(async (V, G) => {
							L.aiDocsService.rescrapeDocs(V, G);
						}, 1e3),
						[x, H] = (0, r.createSignal)(!1);
					let q;
					return (() => {
						const V = $(),
							G = V.firstChild,
							K = G.firstChild,
							J = K.nextSibling,
							W = G.nextSibling,
							X = W.firstChild,
							Y = X.firstChild,
							ie = X.nextSibling,
							ne = ie.firstChild,
							ee = ie.nextSibling,
							_ = ee.firstChild;
						return (
							V.addEventListener("mouseleave", () => H(!1)),
							V.addEventListener("mouseenter", () => H(!0)),
							V.style.setProperty("display", "flex"),
							V.style.setProperty("gap", "8px"),
							V.style.setProperty("justify-content", "space-between"),
							V.style.setProperty("align-items", "center"),
							V.style.setProperty(
								"color",
								"var(--vscode-input-placeholderForeground)",
							),
							V.style.setProperty("font-size", "12px"),
							V.style.setProperty("padding", "2px 6px"),
							V.style.setProperty("margin-left", "-6px"),
							V.style.setProperty("border-radius", "4px"),
							V.style.setProperty("height", "20px"),
							G.style.setProperty("overflow", "hidden"),
							G.style.setProperty("text-overflow", "ellipsis"),
							G.style.setProperty("white-space", "nowrap"),
							G.style.setProperty("min-width", "150px"),
							G.style.setProperty("display", "flex"),
							G.style.setProperty("align-items", "center"),
							K.style.setProperty("width", "4px"),
							K.style.setProperty("height", "4px"),
							K.style.setProperty("border-radius", "50%"),
							K.style.setProperty("margin-right", "4px"),
							J.style.setProperty("overflow", "hidden"),
							J.style.setProperty("text-overflow", "ellipsis"),
							J.style.setProperty("white-space", "nowrap"),
							(0, m.insert)(
								J,
								(0, d.createComponent)(r.Show, {
									get when() {
										return !R();
									},
									get fallback() {
										return (() => {
											const te = v();
											te.addEventListener("blur", () => {
												z(k.doc);
											}),
												te.addEventListener("keydown", (Z) => {
													Z.key === "Enter" && z(k.doc);
												}),
												te.addEventListener("input", (Z) => M(Z.target.value));
											const Q = q;
											return (
												typeof Q == "function" ? (0, i.use)(Q, te) : (q = te),
												te.style.setProperty(
													"color",
													"var(--vscode-editor-foreground)",
												),
												te.style.setProperty(
													"background-color",
													"var(--vscode-input-background)",
												),
												te.style.setProperty("border", "none"),
												te.style.setProperty("outline", "none"),
												te.style.setProperty("border-radius", "2px"),
												te.style.setProperty("padding", "2px 2px"),
												te.style.setProperty("width", "100%"),
												te.style.setProperty("font-size", "12px"),
												te.style.setProperty("box-sizing", "border-box"),
												(0, C.effect)(() => (te.value = D())),
												te
											);
										})();
									},
									get children() {
										return [
											(() => {
												const te = o();
												return (
													te.addEventListener("dblclick", () => U(k.doc)),
													te.style.setProperty(
														"color",
														"var(--vscode-editor-foreground)",
													),
													te.style.setProperty("padding", "2px 2px"),
													(0, m.insert)(te, () => k.doc.name),
													te
												);
											})(),
											(0, d.createComponent)(r.Show, {
												get when() {
													return (
														k.doc.indexingStatus === "indexing" &&
														k.doc.indexingPageName
													);
												},
												get children() {
													const te = f(),
														Q = te.firstChild,
														Z = Q.nextSibling;
													return (
														te.style.setProperty(
															"color",
															"var(--vscode-input-placeholderForeground)",
														),
														te.style.setProperty("font-size", "10px"),
														te.style.setProperty("margin-left", "4px"),
														te.style.setProperty("overflow", "hidden"),
														te.style.setProperty("text-overflow", "ellipsis"),
														te.style.setProperty("white-space", "nowrap"),
														te.style.setProperty("flex-shrink", "1"),
														(0, m.insert)(Z, () => k.doc.indexingPageName),
														(0, m.insert)(
															te,
															(0, d.createComponent)(c.$C$b, {}),
															null,
														),
														te
													);
												},
											}),
											(0, d.createComponent)(r.Show, {
												get when() {
													return (
														k.doc.indexingStatus === "success" &&
														(k.doc.lastUploadedAt || k.doc.createdAt)
													);
												},
												get children() {
													const te = b(),
														Q = te.firstChild,
														Z = Q.nextSibling;
													return (
														te.style.setProperty(
															"color",
															"var(--vscode-input-placeholderForeground)",
														),
														te.style.setProperty("font-size", "10px"),
														te.style.setProperty("margin-left", "6px"),
														(0, m.insert)(Z, () =>
															T(k.doc.lastUploadedAt || k.doc.createdAt || ""),
														),
														te
													);
												},
											}),
											(0, d.createComponent)(r.Show, {
												get when() {
													return k.doc.indexingStatus === "failure";
												},
												get children() {
													const te = s();
													return (
														te.style.setProperty(
															"color",
															"var(--vscode-input-placeholderForeground)",
														),
														te.style.setProperty("font-size", "10px"),
														te.style.setProperty("margin-left", "6px"),
														te
													);
												},
											}),
										];
									},
								}),
							),
							W.style.setProperty("display", "flex"),
							W.style.setProperty("gap", "6px"),
							W.style.setProperty("align-items", "center"),
							(0, m.insert)(
								W,
								(0, d.createComponent)(r.Show, {
									get when() {
										return R();
									},
									get fallback() {
										return (() => {
											const te = S(),
												Q = te.firstChild;
											return (
												te.addEventListener("click", () => U(k.doc)),
												te.style.setProperty("cursor", "pointer"),
												te.style.setProperty("display", "flex"),
												te.style.setProperty("justify-content", "center"),
												te.style.setProperty("align-items", "center"),
												(0, C.effect)(() =>
													(0, E.className)(
														Q,
														a.ThemeIcon.asClassName(u.$ak.pencil),
													),
												),
												te
											);
										})();
									},
									get children() {
										const te = l(),
											Q = te.firstChild;
										return (
											te.addEventListener("click", () => z(k.doc)),
											te.style.setProperty("cursor", "pointer"),
											te.style.setProperty("display", "flex"),
											te.style.setProperty("justify-content", "center"),
											te.style.setProperty("align-items", "center"),
											(0, C.effect)(() =>
												(0, E.className)(
													Q,
													a.ThemeIcon.asClassName(u.$ak.check),
												),
											),
											te
										);
									},
								}),
								X,
							),
							X.addEventListener("click", (te) => {
								F(k.doc.identifier, te.shiftKey);
							}),
							X.style.setProperty("display", "flex"),
							X.style.setProperty("justify-content", "center"),
							X.style.setProperty("align-items", "center"),
							X.style.setProperty("cursor", "pointer"),
							ie.style.setProperty("position", "relative"),
							ie.style.setProperty("display", "flex"),
							ie.style.setProperty("justify-content", "center"),
							ie.style.setProperty("align-items", "center"),
							ne.addEventListener("click", () => A(B(k.doc))),
							ne.style.setProperty("cursor", "pointer"),
							(0, m.insert)(
								ie,
								(0, d.createComponent)(r.Show, {
									get when() {
										return N() === B(k.doc);
									},
									get children() {
										return (0, d.createComponent)(n.$w0b, {
											scrollingDirection: "vertical",
											nonReactiveElementOptions: {
												alwaysConsumeMouseWheel: !0,
											},
											style: {
												position: "absolute",
												"background-color": "var(--vscode-editor-background)",
												width: "300px",
												border:
													"1px solid var(--vscode-commandCenter-inactiveBorder)",
												"text-align": "left",
												"z-index": 1,
												top: "18px",
												"border-radius": "4px",
												right: "-2px",
												height: "150px",
											},
											get children() {
												const te = y(),
													Q = te.firstChild,
													Z = Q.nextSibling;
												return (
													te.style.setProperty("padding", "6px"),
													te.style.setProperty("display", "flex"),
													te.style.setProperty("flex-direction", "column"),
													te.style.setProperty("gap", "2px"),
													Q.style.setProperty("font-size", "12px"),
													Q.style.setProperty(
														"color",
														"var(--vscode-editor-foreground)",
													),
													(0, m.insert)(Q, () =>
														k.doc.pages
															? `Indexed ${k.doc.pages?.length} pages`
															: "Indexing...",
													),
													Z.style.setProperty("display", "flex"),
													Z.style.setProperty("flex-direction", "column"),
													Z.style.setProperty("gap", "2px"),
													(0, m.insert)(
														Z,
														(0, d.createComponent)(r.For, {
															get each() {
																return k.doc.pages;
															},
															children: (se) =>
																(() => {
																	const re = I();
																	return (
																		re.addEventListener("click", () => {
																			L.openerService.open(se.url);
																		}),
																		re.style.setProperty(
																			"color",
																			"var(--vscode-textLink-foreground)",
																		),
																		re.style.setProperty("overflow", "hidden"),
																		re.style.setProperty(
																			"text-overflow",
																			"ellipsis",
																		),
																		re.style.setProperty(
																			"white-space",
																			"nowrap",
																		),
																		re.style.setProperty("display", "block"),
																		re.style.setProperty("width", "100%"),
																		(0, m.insert)(re, () => se.title),
																		(0, C.effect)(
																			(le) => {
																				const oe = se.url,
																					ae = se.url;
																				return (
																					oe !== le._v$11 &&
																						(0, w.setAttribute)(
																							re,
																							"href",
																							(le._v$11 = oe),
																						),
																					ae !== le._v$12 &&
																						(0, w.setAttribute)(
																							re,
																							"title",
																							(le._v$12 = ae),
																						),
																					le
																				);
																			},
																			{ _v$11: void 0, _v$12: void 0 },
																		),
																		re
																	);
																})(),
														}),
													),
													te
												);
											},
										});
									},
								}),
								null,
							),
							ee.addEventListener("click", () => {
								const te = k.doc.identifier,
									Q = k.doc.name;
								L.reactiveStorageService.setApplicationUserPersistentStorage(
									"personalDocs",
									(Z) =>
										Z.filter((se) => se.identifier !== te && se.name !== Q),
								);
							}),
							ee.style.setProperty("display", "flex"),
							ee.style.setProperty("justify-content", "center"),
							ee.style.setProperty("align-items", "center"),
							ee.style.setProperty("cursor", "pointer"),
							(0, C.effect)(
								(te) => {
									const Q =
											"settings-menu-docs-item" +
											((0, p.$d$b)(L.themeService) ? " dark" : " light"),
										Z =
											k.doc.indexingStatus === "success"
												? "var(--vscode-testing-iconPassed)"
												: k.doc.indexingStatus === "indexing"
													? "var(--vscode-testing-iconQueued)"
													: "var(--vscode-testing-iconFailed)",
										se = k.doc.indexingStatus === "indexing" ? "pulse" : "",
										re = k.doc.url,
										le =
											"docs-button" +
											(k.doc.indexingStatus === "indexing" ? " disabled" : ""),
										oe =
											k.doc.indexingStatus === "indexing"
												? "Indexing..."
												: "Reindex (shift click to force reupload)",
										ae = a.ThemeIcon.asClassName(u.$ak.refresh),
										pe =
											"see-pages-button docs-button" +
											(N() === B(k.doc) ? " active" : ""),
										$e = a.ThemeIcon.asClassName(u.$ak.book),
										ye = a.ThemeIcon.asClassName(u.$ak.trashcan);
									return (
										Q !== te._v$ && (0, E.className)(V, (te._v$ = Q)),
										Z !== te._v$2 &&
											((te._v$2 = Z) != null
												? K.style.setProperty("background-color", Z)
												: K.style.removeProperty("background-color")),
										se !== te._v$3 && (0, E.className)(K, (te._v$3 = se)),
										re !== te._v$4 &&
											(0, w.setAttribute)(J, "title", (te._v$4 = re)),
										le !== te._v$5 && (0, E.className)(X, (te._v$5 = le)),
										oe !== te._v$6 &&
											(0, w.setAttribute)(X, "title", (te._v$6 = oe)),
										ae !== te._v$7 && (0, E.className)(Y, (te._v$7 = ae)),
										pe !== te._v$8 && (0, E.className)(ie, (te._v$8 = pe)),
										$e !== te._v$9 && (0, E.className)(ne, (te._v$9 = $e)),
										ye !== te._v$10 && (0, E.className)(_, (te._v$10 = ye)),
										te
									);
								},
								{
									_v$: void 0,
									_v$2: void 0,
									_v$3: void 0,
									_v$4: void 0,
									_v$5: void 0,
									_v$6: void 0,
									_v$7: void 0,
									_v$8: void 0,
									_v$9: void 0,
									_v$10: void 0,
								},
							),
							V
						);
					})();
				}
			},
		),
		define(
			de[4244],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 134, 140, 1375, 236, 36, 242, 147, 7, 58,
				2374,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Zac = R),
					(e.$1ac = O),
					(e.$2ac = z),
					(p = mt(p));
				const f = (0, t.template)(
						'<div class="codebase-currently-indexing-hint-in-chat">Currently indexing your codebase (<!>% done). Results will be faster and more accurate if you try once done.',
					),
					b = (0, t.template)(
						'<div class="tooltip" id="enable-indexing-tooltip"><div class="codebase-not-auto-indexed-hint-in-chat">',
					),
					s = (0, t.template)(
						'<div><div class="codebase-currently-indexing-hint-in-chat"><span>Indexing is disabled. This results in significantly worse									speed and accuracy in codebase chats. </span><span>Turn on indexing</span><span> to fix this</span></div><div class="codebase-not-auto-indexed-hint-in-chat"></div><div><div class="codicon codicon-kebab-vertical" id="enable-indexing-tooltip-button">',
					),
					l = (0, t.template)(
						'<div class="tooltip" id="index-codebase-tooltip"><div class="codebase-not-auto-indexed-hint-in-chat">',
					),
					y = (0, t.template)(
						'<div class="codebase-not-auto-indexed-hint-in-chat"><span>Error indexing codebase</span><div><div class="codicon codicon-kebab-vertical" id="index-codebase-tooltip-button">',
					),
					$ = (0, t.template)(
						'<div class="codebase-not-auto-indexed-hint-in-chat-below">Codebase chat is falling back to BM25, which is slower and less accurate than embeddings.',
					),
					v = (0, t.template)(
						'<div class="codebase-not-auto-indexed-hint-in-chat"><span>Codebase not auto-indexed (too many files)</span><div><div class="codicon codicon-kebab-vertical" id="index-codebase-tooltip-button">',
					),
					S = (0, t.template)(
						'<div class="codebase-not-auto-indexed-hint-in-chat-below">Manually enable indexing for this codebase to fix this (codebase chat will be slower and less accurate until you do).',
					),
					I = (0, t.template)("<div>"),
					T = (0, t.template)("<div>And <!> others"),
					P = (0, t.template)('<div class="show-file-icons">'),
					k = (0, t.template)('<div class="results-container-header">'),
					L = (0, t.template)("<div><div>"),
					D = (0, t.template)('<i class="codicon codicon-chevron-up">'),
					M = (0, t.template)('<i class="codicon codicon-chevron-down">'),
					N = (0, t.template)(
						'<div><div><div class="results-container-header"><div>Global Context</div><div class="collapse-button"></div></div><div></div><div>',
					),
					A = (0, t.template)(
						'<div><div><div class="results-container-header"><h3></h3><div class="collapse-button">',
					);
				function R(V) {
					const G = (0, c.$odc)(),
						[K, J] = (0, m.createSignal)(!1),
						[W, X] = (0, m.createSignal)(!1),
						[Y, ie] = (0, m.createSignal)(null),
						ne = (_) => {
							const te = p.$Ogb(),
								Q = Y();
							Q && (te.removeEventListener("click", Q), ie(null));
							const Z = te.document.getElementById("enable-indexing-tooltip"),
								se = te.document.getElementById(
									"enable-indexing-tooltip-button",
								),
								re = te.document.getElementById("index-codebase-tooltip"),
								le = te.document.getElementById(
									"index-codebase-tooltip-button",
								),
								oe =
									_ === "enable-indexing"
										? [Z, se]
										: _ === "index-codebase"
											? [re, le]
											: [],
								ae = (pe) => {
									oe.includes(pe.target) ||
										(_ === "enable-indexing"
											? J(!1)
											: _ === "index-codebase" && X(!1));
								};
							te.addEventListener("click", ae), ie(() => ae);
						},
						ee = () => {
							const _ = p.$Ogb(),
								te = Y();
							te && _.removeEventListener("click", te);
						};
					return (
						(0, m.createEffect)(
							() => (
								K() ? ne("enable-indexing") : W() ? ne("index-codebase") : ee(),
								() => {
									ee();
								}
							),
						),
						(0, C.createComponent)(m.Show, {
							get when() {
								return V.searchType === r.SearchType.keyword;
							},
							get children() {
								return (0, C.createComponent)(m.Switch, {
									get children() {
										return [
											(0, C.createComponent)(m.Match, {
												get when() {
													return [
														"loading",
														"indexing-setup",
														"indexing",
													].includes(
														G.reactiveStorageService.nonPersistentStorage
															.repositoryIndexingStatus?.case ?? "",
													);
												},
												get children() {
													const _ = f(),
														te = _.firstChild,
														Q = te.nextSibling,
														Z = Q.nextSibling;
													return (
														(0, d.insert)(
															_,
															() =>
																(
																	(G.reactiveStorageService.nonPersistentStorage
																		.mainLocalRepositoryProgress?.progress ??
																		0) * 100
																).toFixed(1),
															Q,
														),
														_
													);
												},
											}),
											(0, C.createComponent)(m.Match, {
												get when() {
													return (
														G.reactiveStorageService.nonPersistentStorage
															.repositoryIndexingStatus?.case ===
															"not-indexed" &&
														Date.now() -
															G.reactiveStorageService
																.applicationUserPersistentStorage.indexingState
																.lastAskedToIndexTime >
															1e3 * 60 * 60 * 24 * 7 &&
														G.reactiveStorageService
															.applicationUserPersistentStorage.indexingState
															.fullyDisableAskToIndex !== !0
													);
												},
												get children() {
													const _ = s(),
														te = _.firstChild,
														Q = te.firstChild,
														Z = Q.nextSibling,
														se = te.nextSibling,
														re = se.nextSibling,
														le = re.firstChild;
													return (
														_.style.setProperty("display", "flex"),
														_.style.setProperty("align-items", "center"),
														te.style.setProperty(
															"color",
															"var(--vscode-errorForeground)",
														),
														Z.addEventListener("click", () => {
															G.reactiveStorageService.setApplicationUserPersistentStorage(
																"indexingState",
																{ lastAskedToIndexTime: Date.now() },
															),
																G.repositoryService.indexMainRepository(),
																G.reactiveStorageService.setApplicationUserPersistentStorage(
																	"indexRepository",
																	!0,
																);
														}),
														Z.style.setProperty("text-decoration", "underline"),
														Z.style.setProperty("cursor", "pointer"),
														Z.style.setProperty("text-underline-offset", "2px"),
														(0, d.insert)(
															se,
															(0, C.createComponent)(g.$rdc, {
																title: "Ignore",
																type: "secondary",
																onClick: () => {
																	G.reactiveStorageService.setApplicationUserPersistentStorage(
																		"indexingState",
																		{ lastAskedToIndexTime: Date.now() },
																	);
																},
															}),
														),
														le.addEventListener("click", (oe) => {
															oe.stopPropagation(), J(!K());
														}),
														le.style.setProperty("font-size", "12px"),
														le.style.setProperty("width", "12px"),
														le.style.setProperty("height", "12px"),
														le.style.setProperty("text-align", "center"),
														le.style.setProperty("cursor", "pointer"),
														(0, d.insert)(
															re,
															(0, C.createComponent)(m.Show, {
																get when() {
																	return K();
																},
																get children() {
																	const oe = b(),
																		ae = oe.firstChild;
																	return (
																		oe.style.setProperty("display", "flex"),
																		oe.style.setProperty(
																			"align-items",
																			"center",
																		),
																		oe.style.setProperty(
																			"background-color",
																			"var(--vscode-editorHoverWidget-background)",
																		),
																		oe.style.setProperty(
																			"color",
																			"var(--vscode-editorHoverWidget-foreground)",
																		),
																		oe.style.setProperty("padding", "8px"),
																		oe.style.setProperty(
																			"border-radius",
																			"4px",
																		),
																		oe.style.setProperty(
																			"box-shadow",
																			"0 2px 8px rgba(0, 0, 0, 0.2)",
																		),
																		oe.style.setProperty(
																			"position",
																			"absolute",
																		),
																		oe.style.setProperty("top", "0"),
																		oe.style.setProperty("right", "0"),
																		oe.style.setProperty(
																			"white-space",
																			"nowrap",
																		),
																		oe.style.setProperty("font-size", "12px"),
																		oe.style.setProperty("z-index", "1000"),
																		(0, d.insert)(
																			ae,
																			(0, C.createComponent)(g.$rdc, {
																				title: "Don't show me again",
																				type: "secondary",
																				onClick: () => {
																					G.reactiveStorageService.setApplicationUserPersistentStorage(
																						"indexingState",
																						{ fullyDisableAskToIndex: !0 },
																					);
																				},
																			}),
																		),
																		oe
																	);
																},
															}),
															null,
														),
														(0, E.effect)(() =>
															(0, w.setAttribute)(
																le,
																"data-tooltip",
																K() ? "Don't show me again" : void 0,
															),
														),
														_
													);
												},
											}),
											(0, C.createComponent)(m.Match, {
												get when() {
													return (
														G.reactiveStorageService
															.workspaceUserPersistentStorage
															.hasManuallyDisabledAskToIndex !== !0 &&
														G.reactiveStorageService.nonPersistentStorage
															.repositoryIndexingStatus?.case === "error" &&
														G.reactiveStorageService.nonPersistentStorage
															.repositoryIndexingStatus
													);
												},
												children: (_) => [
													(() => {
														const te = y(),
															Q = te.firstChild,
															Z = Q.nextSibling,
															se = Z.firstChild;
														return (
															te.style.setProperty("display", "flex"),
															te.style.setProperty("align-items", "flex-end"),
															Q.style.setProperty(
																"color",
																"var(--vscode-errorForeground)",
															),
															(0, d.insert)(
																te,
																(0, C.createComponent)(g.$rdc, {
																	title: "Open Settings",
																	type: "primary",
																	onClick: () => {
																		G.commandService.executeCommand(
																			o.$QV,
																			"features",
																			"cursor-settings-codebase-indexing",
																		);
																	},
																}),
																Z,
															),
															se.addEventListener("click", (re) => {
																re.stopPropagation(), X(!W());
															}),
															se.style.setProperty("font-size", "12px"),
															se.style.setProperty("width", "12px"),
															se.style.setProperty("height", "12px"),
															se.style.setProperty("text-align", "center"),
															se.style.setProperty("cursor", "pointer"),
															(0, d.insert)(
																Z,
																(0, C.createComponent)(m.Show, {
																	get when() {
																		return W();
																	},
																	get children() {
																		const re = l(),
																			le = re.firstChild;
																		return (
																			re.style.setProperty("display", "flex"),
																			re.style.setProperty(
																				"align-items",
																				"center",
																			),
																			re.style.setProperty(
																				"background-color",
																				"var(--vscode-editorHoverWidget-background)",
																			),
																			re.style.setProperty(
																				"color",
																				"var(--vscode-editorHoverWidget-foreground)",
																			),
																			re.style.setProperty("padding", "8px"),
																			re.style.setProperty(
																				"border-radius",
																				"4px",
																			),
																			re.style.setProperty(
																				"box-shadow",
																				"0 2px 8px rgba(0, 0, 0, 0.2)",
																			),
																			re.style.setProperty(
																				"position",
																				"absolute",
																			),
																			re.style.setProperty("top", "0"),
																			re.style.setProperty("right", "0"),
																			re.style.setProperty(
																				"white-space",
																				"nowrap",
																			),
																			re.style.setProperty("font-size", "12px"),
																			re.style.setProperty("z-index", "1000"),
																			(0, d.insert)(
																				le,
																				(0, C.createComponent)(g.$rdc, {
																					title: "Don't show me again",
																					type: "secondary",
																					onClick: () => {
																						G.reactiveStorageService.setWorkspaceUserPersistentStorage(
																							"hasManuallyDisabledAskToIndex",
																							!0,
																						);
																					},
																				}),
																			),
																			re
																		);
																	},
																}),
																null,
															),
															(0, E.effect)(() =>
																(0, w.setAttribute)(
																	se,
																	"data-tooltip",
																	W() ? "Don't show me again" : void 0,
																),
															),
															te
														);
													})(),
													(() => {
														const te = $();
														return (
															te.style.setProperty(
																"color",
																"var(--vscode-errorForeground)",
															),
															te
														);
													})(),
												],
											}),
											(0, C.createComponent)(m.Match, {
												get when() {
													return (
														G.reactiveStorageService
															.workspaceUserPersistentStorage
															.hasManuallyDisabledAskToIndex !== !0 &&
														Date.now() -
															(G.reactiveStorageService
																.workspaceUserPersistentStorage
																.lastAskedToIndexTime ?? 0) >
															1e3 * 60 * 60 * 24 * 7 &&
														G.reactiveStorageService.nonPersistentStorage
															.repositoryIndexingStatus?.case ===
															"not-auto-indexing" &&
														G.reactiveStorageService.nonPersistentStorage
															.repositoryIndexingStatus
													);
												},
												children: (_) => [
													(() => {
														const te = v(),
															Q = te.firstChild,
															Z = Q.nextSibling,
															se = Z.firstChild;
														return (
															te.style.setProperty("display", "flex"),
															te.style.setProperty("align-items", "flex-end"),
															Q.style.setProperty(
																"color",
																"var(--vscode-errorForeground)",
															),
															(0, d.insert)(
																te,
																(0, C.createComponent)(g.$rdc, {
																	title: "Enable Indexing",
																	type: "primary",
																	onClick: () => {
																		G.reactiveStorageService.setWorkspaceUserPersistentStorage(
																			"hasAskedToIndex",
																			!0,
																		),
																			G.reactiveStorageService.setWorkspaceUserPersistentStorage(
																				"lastAskedToIndexTime",
																				Date.now(),
																			),
																			G.repositoryService.indexMainRepository();
																	},
																}),
																Z,
															),
															(0, d.insert)(
																te,
																(0, C.createComponent)(g.$rdc, {
																	title: "Ignore",
																	type: "secondary",
																	onClick: () => {
																		G.reactiveStorageService.setWorkspaceUserPersistentStorage(
																			"lastAskedToIndexTime",
																			Date.now(),
																		);
																	},
																}),
																Z,
															),
															se.addEventListener("click", (re) => {
																re.stopPropagation(), X(!W());
															}),
															se.style.setProperty("font-size", "12px"),
															se.style.setProperty("width", "12px"),
															se.style.setProperty("height", "12px"),
															se.style.setProperty("text-align", "center"),
															se.style.setProperty("cursor", "pointer"),
															(0, d.insert)(
																Z,
																(0, C.createComponent)(m.Show, {
																	get when() {
																		return W();
																	},
																	get children() {
																		const re = l(),
																			le = re.firstChild;
																		return (
																			re.style.setProperty("display", "flex"),
																			re.style.setProperty(
																				"align-items",
																				"center",
																			),
																			re.style.setProperty(
																				"background-color",
																				"var(--vscode-editorHoverWidget-background)",
																			),
																			re.style.setProperty(
																				"color",
																				"var(--vscode-editorHoverWidget-foreground)",
																			),
																			re.style.setProperty("padding", "8px"),
																			re.style.setProperty(
																				"border-radius",
																				"4px",
																			),
																			re.style.setProperty(
																				"box-shadow",
																				"0 2px 8px rgba(0, 0, 0, 0.2)",
																			),
																			re.style.setProperty(
																				"position",
																				"absolute",
																			),
																			re.style.setProperty("top", "0"),
																			re.style.setProperty("right", "0"),
																			re.style.setProperty(
																				"white-space",
																				"nowrap",
																			),
																			re.style.setProperty("font-size", "12px"),
																			re.style.setProperty("z-index", "1000"),
																			(0, d.insert)(
																				le,
																				(0, C.createComponent)(g.$rdc, {
																					title: "Don't show me again",
																					type: "secondary",
																					onClick: () => {
																						G.reactiveStorageService.setWorkspaceUserPersistentStorage(
																							"hasManuallyDisabledAskToIndex",
																							!0,
																						);
																					},
																				}),
																			),
																			re
																		);
																	},
																}),
																null,
															),
															(0, E.effect)(() =>
																(0, w.setAttribute)(
																	se,
																	"data-tooltip",
																	W() ? "Don't show me again" : void 0,
																),
															),
															te
														);
													})(),
													(() => {
														const te = S();
														return (
															te.style.setProperty(
																"color",
																"var(--vscode-errorForeground)",
															),
															te
														);
													})(),
												],
											}),
										];
									},
								});
							},
						})
					);
				}
				function O(V) {
					const G = (0, c.$odc)(),
						K = 0.3,
						J = 0.05,
						W = 15,
						[X, Y] = (0, m.createSignal)(u.RepoStep.None),
						[ie, ne] = (0, m.createSignal)(!0),
						ee = (0, m.createMemo)(() => V.hydeResults !== void 0);
					(0, m.createEffect)(() => {
						Y(V.repoStep);
					});
					const _ = (0, m.createMemo)(() =>
							V.repoStep > u.RepoStep.GeneratingQueries
								? "Computed Search Queries"
								: "Computing Search Queries",
						),
						te = (0, m.createMemo)(() =>
							V.repoStep === u.RepoStep.GeneratingTokens && !V.textIsGenerated
								? "Reading files"
								: V.repoStep > u.RepoStep.GeneratingTokens
									? "Read files"
									: V.addFolders.length === 0
										? "Searching for files"
										: V.addFolders.length === 1
											? "Searching for folder"
											: "Searching for folders",
						),
						Q = (0, m.createMemo)(() =>
							V.fileResults === void 0 ? [] : V.fileResults,
						),
						Z = (0, m.createMemo)(() =>
							V.hydeResults === void 0
								? { queries: [], reasoning: "" }
								: V.hydeResults,
						);
					return (0, C.createComponent)(H, {
						get collapse() {
							return !(V.isContextGenerating && !V.textIsGenerated);
						},
						get children() {
							const se = I();
							return (
								se.style.setProperty("padding-top", "10px"),
								(0, d.insert)(
									se,
									(0, C.createComponent)(m.Show, {
										get when() {
											return ee();
										},
										get children() {
											return (0, C.createComponent)(F, {
												get headerText() {
													return _();
												},
												get hydeResults() {
													return Z();
												},
												get isLoading() {
													return X() === u.RepoStep.GeneratingQueries;
												},
											});
										},
									}),
									null,
								),
								(0, d.insert)(
									se,
									(0, C.createComponent)(m.Show, {
										get when() {
											return X() > u.RepoStep.GeneratingQueries;
										},
										get children() {
											return (0, C.createComponent)(B, {
												get fileResults() {
													return Q();
												},
												get firstFileResultsRender() {
													return ie();
												},
												setFirstFileResultsRender: ne,
												get isLoading() {
													return (
														X() === u.RepoStep.SearchingFiles ||
														(X() === u.RepoStep.GeneratingTokens &&
															!V.textIsGenerated)
													);
												},
												get headerText() {
													return te();
												},
											});
										},
									}),
									null,
								),
								se
							);
						},
					});
				}
				function B(V) {
					const G = (0, c.$odc)(),
						K = 5,
						J = 20;
					return (
						(0, m.createEffect)(() => {
							V.isLoading || V.setFirstFileResultsRender(!1);
						}),
						(0, C.createComponent)(q, {
							get headerText() {
								return V.headerText;
							},
							get isLoading() {
								return V.isLoading;
							},
							onSwitchCollapsable: (W) => {
								W && V.setFirstFileResultsRender(!1);
							},
							get collapsed() {
								return (0, C.createComponent)(U, {
									get fileResults() {
										return V.fileResults;
									},
									maxIndex: K,
									isFirstView: !1,
								});
							},
							get children() {
								return (0, C.createComponent)(U, {
									cleanupFn: () => V.setFirstFileResultsRender(!1),
									get fileResults() {
										return V.fileResults;
									},
									maxIndex: J,
									get isFirstView() {
										return V.firstFileResultsRender;
									},
								});
							},
						})
					);
				}
				function U(V) {
					const G = (0, c.$odc)();
					return (
						(0, m.createEffect)(() => {
							if (V.cleanupFn) {
								const K = V.cleanupFn;
								(0, m.onCleanup)(() => {
									K();
								});
							}
						}),
						(() => {
							const K = P();
							return (
								(0, d.insert)(
									K,
									(0, C.createComponent)(m.For, {
										get each() {
											return V.fileResults;
										},
										children: (J, W) =>
											(0, C.createComponent)(m.Show, {
												get when() {
													return W() < V.maxIndex;
												},
												get children() {
													return (0, C.createComponent)(m.Show, {
														get when() {
															return V.isFirstView;
														},
														get fallback() {
															return (0, C.createComponent)(z, {
																get uri() {
																	return G.workspaceContextService.resolveRelativePath(
																		J.file?.relativeWorkspacePath ?? "",
																	);
																},
															});
														},
														get children() {
															return (0, C.createComponent)(a.$0$b, {
																get index() {
																	return W();
																},
																get children() {
																	return (0, C.createComponent)(z, {
																		get uri() {
																			return G.workspaceContextService.resolveRelativePath(
																				J.file?.relativeWorkspacePath ?? "",
																			);
																		},
																	});
																},
															});
														},
													});
												},
											}),
									}),
									null,
								),
								(0, d.insert)(
									K,
									(0, C.createComponent)(m.Show, {
										get when() {
											return V.fileResults.length > V.maxIndex;
										},
										get children() {
											const J = T(),
												W = J.firstChild,
												X = W.nextSibling,
												Y = X.nextSibling;
											return (
												J.style.setProperty("padding", "2px 12px"),
												(0, d.insert)(
													J,
													() => V.fileResults.length - V.maxIndex,
													X,
												),
												J
											);
										},
									}),
									null,
								),
								K
							);
						})()
					);
				}
				function z(V) {
					const G = (0, c.$odc)();
					return (() => {
						const K = k();
						return (
							K.addEventListener("click", (J) => {
								J.stopPropagation(), G.openerService.open(V.uri);
							}),
							K.style.setProperty("padding", "4px 8px 0px 8px"),
							K.style.setProperty("border-radius", "8px"),
							K.style.setProperty("max-width", "fit-content"),
							(0, d.insert)(
								K,
								(0, C.createComponent)(a.$$$b, {
									get uri() {
										return V.uri;
									},
								}),
							),
							K
						);
					})();
				}
				function F(V) {
					const G = (0, m.createMemo)(
							() => h.$10b + V.hydeResults.reasoning + h.$20b,
						),
						K = (0, m.createMemo)(() => V.hydeResults.queries);
					return (0, C.createComponent)(q, {
						get headerText() {
							return V.headerText;
						},
						get isLoading() {
							return V.isLoading;
						},
						get collapsed() {
							return (() => {
								const J = I();
								return (
									(0, d.insert)(
										J,
										(0, C.createComponent)(m.For, {
											get each() {
												return K();
											},
											children: (W) =>
												(0, C.createComponent)(x, {
													get text() {
														return W.text;
													},
													get glob() {
														return W.globsNewLineSeparated;
													},
												}),
										}),
									),
									J
								);
							})();
						},
						get children() {
							return [
								(() => {
									const J = I();
									return (
										J.style.setProperty("font-style", "italic"),
										J.style.setProperty("opacity", "0.5"),
										J.style.setProperty("padding-top", "1em"),
										J.style.setProperty("padding-bottom", "1em"),
										(0, d.insert)(J, () => V.hydeResults.reasoning),
										J
									);
								})(),
								(() => {
									const J = I();
									return (
										(0, d.insert)(
											J,
											(0, C.createComponent)(m.For, {
												get each() {
													return K();
												},
												children: (W) =>
													(0, C.createComponent)(x, {
														get text() {
															return W.text;
														},
														get glob() {
															return W.globsNewLineSeparated;
														},
													}),
											}),
										),
										J
									);
								})(),
							];
						},
					});
				}
				function x(V) {
					return (() => {
						const G = L(),
							K = G.firstChild;
						return (
							G.style.setProperty("padding", "4px 8px"),
							G.style.setProperty("margin", "4px 0px"),
							G.style.setProperty("max-width", "fit-content"),
							G.style.setProperty(
								"background",
								"var(--vscode-activityBar-background)",
							),
							(0, d.insert)(K, () => V.text),
							G
						);
					})();
				}
				function H(V) {
					let G, K;
					const [J, W] = (0, m.createSignal)(!1);
					return (
						(0, m.createEffect)(() => {
							V.collapse ? W(!0) : W(!1);
						}),
						(() => {
							const X = N(),
								Y = X.firstChild,
								ie = Y.firstChild,
								ne = ie.firstChild,
								ee = ne.nextSibling,
								_ = ie.nextSibling,
								te = _.nextSibling,
								Q = G;
							typeof Q == "function" ? (0, i.use)(Q, X) : (G = X),
								X.style.setProperty("overflow", "hidden"),
								X.style.setProperty("height", "fit-content");
							const Z = K;
							return (
								typeof Z == "function" ? (0, i.use)(Z, Y) : (K = Y),
								Y.style.setProperty("height", "fit-content"),
								ie.addEventListener("click", (se) => {
									se.stopPropagation(), W((re) => !re);
								}),
								ie.style.setProperty("display", "flex"),
								ie.style.setProperty("justify-content", "space-between"),
								ie.style.setProperty("align-items", "center"),
								ie.style.setProperty(
									"color",
									"var(--vscode-input-placeholderForeground)",
								),
								ie.style.setProperty("height", "36px"),
								ie.style.setProperty("border-radius", "8px"),
								ie.style.setProperty("padding", "0px 12px"),
								ie.style.setProperty("user-select", "none"),
								ee.addEventListener("click", (se) => {
									se.stopPropagation(), W((re) => !re);
								}),
								(0, d.insert)(
									ee,
									(0, C.createComponent)(m.Show, {
										get when() {
											return !J();
										},
										get children() {
											return D();
										},
									}),
									null,
								),
								(0, d.insert)(
									ee,
									(0, C.createComponent)(m.Show, {
										get when() {
											return J();
										},
										get children() {
											return M();
										},
									}),
									null,
								),
								_.style.setProperty("border-radius", "8px"),
								_.style.setProperty("padding", "0px 12px"),
								(0, d.insert)(
									_,
									(0, C.createComponent)(m.Show, {
										get when() {
											return !J();
										},
										get children() {
											return V.children;
										},
									}),
								),
								te.style.setProperty("height", "12px"),
								X
							);
						})()
					);
				}
				function q(V) {
					let G, K;
					const [J, W] = (0, m.createSignal)(!1);
					return (
						(0, m.createEffect)(() => {
							V.onSwitchCollapsable && V.onSwitchCollapsable(J());
						}),
						(0, m.createEffect)(() => {
							V.isLoading ? W(!1) : W(!0);
						}),
						(() => {
							const X = A(),
								Y = X.firstChild,
								ie = Y.firstChild,
								ne = ie.firstChild,
								ee = ne.nextSibling,
								_ = G;
							typeof _ == "function" ? (0, i.use)(_, X) : (G = X),
								X.style.setProperty("overflow", "hidden"),
								X.style.setProperty("border-radius", "8px"),
								X.style.setProperty("padding", "0px 12px"),
								X.style.setProperty("height", "fit-content"),
								X.style.setProperty("user-select", "none");
							const te = K;
							return (
								typeof te == "function" ? (0, i.use)(te, Y) : (K = Y),
								Y.style.setProperty("height", "fit-content"),
								ie.addEventListener("click", (Q) => {
									Q.stopPropagation(), W((Z) => !Z);
								}),
								ie.style.setProperty("display", "flex"),
								ie.style.setProperty("justify-content", "space-between"),
								ie.style.setProperty("align-items", "center"),
								ie.style.setProperty("height", "36px"),
								ie.style.setProperty("border-radius", "8px"),
								ie.style.setProperty("padding", "0px 12px"),
								ne.style.setProperty("font-weight", "normal"),
								(0, d.insert)(ne, () => V.headerText, null),
								(0, d.insert)(
									ne,
									(0, C.createComponent)(n.$C$b, {
										get show() {
											return V.isLoading;
										},
									}),
									null,
								),
								ee.addEventListener("click", (Q) => {
									Q.stopPropagation(), W((Z) => !Z);
								}),
								(0, d.insert)(
									ee,
									(0, C.createComponent)(m.Show, {
										get when() {
											return !J();
										},
										get children() {
											return D();
										},
									}),
									null,
								),
								(0, d.insert)(
									ee,
									(0, C.createComponent)(m.Show, {
										get when() {
											return J();
										},
										get children() {
											return M();
										},
									}),
									null,
								),
								(0, d.insert)(
									Y,
									(0, C.createComponent)(m.Show, {
										get when() {
											return !J();
										},
										get fallback() {
											return (() => {
												const Q = I();
												return (
													Q.style.setProperty("height", "fit-content"),
													(0, d.insert)(Q, () => V.collapsed),
													Q
												);
											})();
										},
										get children() {
											const Q = I();
											return (
												Q.style.setProperty("height", "fit-content"),
												(0, d.insert)(Q, () => V.children),
												Q
											);
										},
									}),
									null,
								),
								X
							);
						})()
					);
				}
			},
		),
		define(
			de[862],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 147, 14, 26, 36, 338, 3197, 2375]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$0ac = b);
				const g = (0, t.template)("<div>Request ID: <span>"),
					p = (0, t.template)(
						"<div><div><div><div></div><div></div></div><div></div></div><div><span>",
					),
					o = (0, t.template)('<div class="hover-opacity"><div></div>Resume'),
					f = (0, t.template)(
						'<div class="hover-opacity"><div></div>Try again',
					);
				function b(s) {
					const l = (0, h.$odc)(),
						[y, $] = (0, m.createSignal)(!1),
						{
							title: v,
							retryable: S,
							showRequestId: I,
							detail: T,
							allowCommandLinksPotentiallyUnsafe: P,
						} = (0, n.$9ac)(() => s.error);
					return (() => {
						const k = p(),
							L = k.firstChild,
							D = L.firstChild,
							M = D.firstChild,
							N = M.nextSibling,
							A = D.nextSibling,
							R = L.nextSibling,
							O = R.firstChild;
						return (
							k.style.setProperty("padding", "14px 4px"),
							L.style.setProperty("display", "flex"),
							L.style.setProperty("flex-direction", "row"),
							L.style.setProperty("align-items", "center"),
							L.style.setProperty("flex-wrap", "wrap"),
							L.style.setProperty("gap", "4px"),
							D.style.setProperty("display", "flex"),
							D.style.setProperty("flex-direction", "row"),
							D.style.setProperty("align-items", "center"),
							D.style.setProperty("gap", "4px"),
							D.style.setProperty("overflow", "hidden"),
							D.style.setProperty("margin-right", "2px"),
							M.style.setProperty("font-size", "12px"),
							N.style.setProperty("flex-shrink", "1"),
							N.style.setProperty("white-space", "nowrap"),
							N.style.setProperty("overflow", "hidden"),
							N.style.setProperty("text-overflow", "ellipsis"),
							(0, d.insert)(N, v),
							A.style.setProperty("display", "flex"),
							A.style.setProperty("flex-direction", "row"),
							A.style.setProperty("gap", "4px"),
							(0, d.insert)(
								A,
								(0, C.createComponent)(m.Show, {
									get when() {
										return S() && s.resume;
									},
									children: (B) =>
										(() => {
											const U = o(),
												z = U.firstChild;
											return (
												(0, i.addEventListener)(U, "click", B()),
												U.style.setProperty("cursor", "pointer"),
												U.style.setProperty("font-size", "0.65rem"),
												U.style.setProperty(
													"background-color",
													"var(--vscode-button-background)",
												),
												U.style.setProperty(
													"color",
													"var(--vscode-button-foreground)",
												),
												U.style.setProperty("border-radius", "0.25rem"),
												U.style.setProperty("overflow", "hidden"),
												U.style.setProperty("padding", "0 0.25rem"),
												U.style.setProperty("transition", "200ms"),
												U.style.setProperty("display", "flex"),
												U.style.setProperty("flex-direction", "row"),
												U.style.setProperty("align-items", "center"),
												U.style.setProperty("flex-shrink", "0"),
												z.style.setProperty("font-size", "12px"),
												z.style.setProperty("margin-right", "2px"),
												(0, E.effect)(() =>
													(0, w.className)(
														z,
														a.ThemeIcon.asClassName(u.$ak.play),
													),
												),
												U
											);
										})(),
								}),
								null,
							),
							(0, d.insert)(
								A,
								(0, C.createComponent)(m.Show, {
									get when() {
										return S() && s.rerun;
									},
									children: (B) =>
										(() => {
											const U = f(),
												z = U.firstChild;
											return (
												(0, i.addEventListener)(U, "click", B()),
												U.style.setProperty("cursor", "pointer"),
												U.style.setProperty("font-size", "0.65rem"),
												U.style.setProperty("border-radius", "0.25rem"),
												U.style.setProperty("overflow", "hidden"),
												U.style.setProperty("padding", "0 0.25rem"),
												U.style.setProperty("transition", "200ms"),
												U.style.setProperty("display", "flex"),
												U.style.setProperty("flex-direction", "row"),
												U.style.setProperty("align-items", "center"),
												U.style.setProperty("flex-shrink", "0"),
												z.style.setProperty("font-size", "12px"),
												z.style.setProperty("margin-right", "2px"),
												(0, E.effect)(
													(F) => {
														const x = s.resume
																? "var(--vscode-button-secondaryBackground)"
																: "var(--vscode-button-background)",
															H = s.resume
																? "var(--vscode-button-secondaryForeground)"
																: "var(--vscode-button-foreground)",
															q = a.ThemeIcon.asClassName(u.$ak.refresh);
														return (
															x !== F._v$ &&
																((F._v$ = x) != null
																	? U.style.setProperty("background-color", x)
																	: U.style.removeProperty("background-color")),
															H !== F._v$2 &&
																((F._v$2 = H) != null
																	? U.style.setProperty("color", H)
																	: U.style.removeProperty("color")),
															q !== F._v$3 && (0, w.className)(z, (F._v$3 = q)),
															F
														);
													},
													{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
												),
												U
											);
										})(),
								}),
								null,
							),
							(0, d.insert)(
								A,
								(0, C.createComponent)(m.Show, {
									get when() {
										return I();
									},
									get children() {
										return (0, C.createComponent)(r.$rdc, {
											type: "secondary",
											get codicon() {
												return y() ? u.$ak.check : u.$ak.copy;
											},
											onClick: () => {
												l.clipboardService.writeText(s.generationUUID),
													$(!0),
													setTimeout(() => {
														$(!1);
													}, 2e3);
											},
											codiconStyle: { "font-size": "12px" },
											style: {
												padding: "0 0.25rem",
												"flex-shrink": 0,
												"font-size": "0.65rem",
												"border-radius": "0.25rem",
												gap: "2px",
											},
											title: "Copy request ID",
										});
									},
								}),
								null,
							),
							R.style.setProperty("opacity", "0.5"),
							R.style.setProperty("font-size", "12px"),
							R.style.setProperty("display", "flex"),
							R.style.setProperty("flex-direction", "row"),
							R.style.setProperty("align-items", "center"),
							R.style.setProperty("gap", "4px"),
							O.style.setProperty("width", "100%"),
							O.style.setProperty("display", "flex"),
							O.style.setProperty("flex-direction", "column"),
							(0, d.insert)(
								O,
								(0, C.createComponent)(c.$4$b, {
									class: "chat-error-detail",
									get rawText() {
										return T();
									},
									codeBlockProps: { shouldRecompute: 0 },
									finished: !0,
									get allowCommandLinks_POTENTIALLY_UNSAFE_PLEASE_ONLY_USE_FOR_HANDWRITTEN_TRUSTED_MARKDOWN() {
										return P();
									},
								}),
								null,
							),
							(0, d.insert)(
								O,
								(0, C.createComponent)(m.Show, {
									get when() {
										return I();
									},
									get children() {
										const B = g(),
											U = B.firstChild,
											z = U.nextSibling;
										return (
											B.style.setProperty(
												"color",
												"var(--vscode-editor-foreground)",
											),
											B.style.setProperty("user-select", "text"),
											z.style.setProperty(
												"color",
												"var(--vscode-editor-foreground)",
											),
											(0, d.insert)(z, () => s.generationUUID),
											B
										);
									},
								}),
								null,
							),
							(0, E.effect)(() =>
								(0, w.className)(M, a.ThemeIcon.asClassName(u.$ak.warning)),
							),
							k
						);
					})();
				}
			},
		),
		define(
			de[1986],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 26, 36, 242, 116, 41, 54, 9, 140, 502,
				156, 4144, 2376,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$g_b = e.$f_b = e.$e_b = e.$d_b = e.$c_b = void 0);
				const l = (0, t.template)("<br>"),
					y = (0, t.template)("<span>"),
					$ = (0, t.template)('<div class="results-container-header"><div>'),
					v = (0, t.template)("<div>"),
					S = (0, t.template)("<div><div>"),
					I = (0, t.template)(
						'<div class="chunk-context-item"><div class="chunk-context-item-content"><div class="chunk-context-item-icon"></div><div class="chunk-context-item-title"></div><div class="chunk-context-item-subtitle"></div><div class="chunk-context-item-subtitle2"> - ',
					),
					T = (0, t.template)("<div><div><div></div><div></div></div><div>"),
					P = (N, A, R) => {
						const O = p.URI.file(N)
							.path.split("/")
							.filter((x) => x !== "");
						let B = "",
							U = 0,
							z = !1,
							F = 0;
						for (let x = O.length - 1; x >= 0; x--) {
							const H = O[x],
								q = H.length * R;
							if (U + q > A) {
								z = !0;
								break;
							}
							F++, (B = H + (B ? "/" + B : "")), (U += q);
						}
						return F <= 1 ? (0, g.$sc)(N) : z ? ".../" + B : B;
					};
				e.$c_b = P;
				const k = (N) => {
					const A = (0, r.useContext)(o.$ygc),
						[R, O] = (0, r.createSignal)(!1);
					(0, r.createEffect)(() => {
						(H()?.intermediateChunks ?? []).find(
							(K) => K.completeText.length > 100,
						) !== void 0 && O(!0);
					});
					const B = (0, r.createMemo)(() => {
							const G = A.chatData.tabs.find((K) => K.tabId === N.tabId);
							return G
								? G?.bubbles.flatMap((K) =>
										K.type === o.BubbleType.USER_CHAT
											? (K.folderSelections ?? [])
											: [],
									)
								: [];
						}),
						[U, z] = (0, r.createSignal)(!1);
					(0, r.createEffect)(() => {
						N.emptyText &&
							R() &&
							H()?.intermediateSectionType === "long-file" &&
							z(!0),
							!N.emptyText &&
								H()?.intermediateSectionType === "long-file" &&
								z(!1);
					});
					const F = (0, a.$odc)(),
						x = (0, r.createMemo)(() =>
							F.reactiveStorageService.nonPersistentStorage.nonPersistentChatMetadata.find(
								(G) => G.bubbleId === N.userBubbleId && G.tabId === N.tabId,
							),
						),
						H = (0, r.createMemo)(() =>
							F.reactiveStorageService.workspaceUserPersistentStorage.persistentChatMetadata.find(
								(G) => G.bubbleId === N.userBubbleId && G.tabId === N.tabId,
							),
						),
						[q, V] = (0, r.createSignal)([]);
					return (
						(0, r.createEffect)(() => {
							const G = H()?.intermediateChunks ?? [];
							JSON.stringify(G.map((K) => K.chunkIdentity)) !==
								JSON.stringify(q()) && V(G.map((K) => K.chunkIdentity));
						}),
						(() => {
							const G = S(),
								K = G.firstChild;
							return (
								G.style.setProperty("display", "flex"),
								G.style.setProperty("flex-direction", "column"),
								G.style.setProperty("margin-bottom", "8px"),
								G.style.setProperty("gap", "2px"),
								K.style.setProperty(
									"color",
									"var(--vscode-input-placeholderForeground)",
								),
								K.style.setProperty("display", "flex"),
								K.style.setProperty("padding", "0px 4px"),
								(0, C.insert)(
									K,
									(0, d.createComponent)(r.Show, {
										get when() {
											return (
												(0, m.memo)(() => !!N.emptyText)() &&
												H()?.intermediateSectionType === "long-file"
											);
										},
										get children() {
											return [
												"Reading ",
												(0, m.memo)(() => H()?.intermediateSectionType),
												" ",
												(0, d.createComponent)(h.$C$b, { show: !0 }),
												" ",
												l(),
											];
										},
									}),
									null,
								),
								(0, C.insert)(
									K,
									(0, d.createComponent)(r.Show, {
										get when() {
											return !N.emptyText;
										},
										get children() {
											const J = $(),
												W = J.firstChild;
											return (
												J.addEventListener("click", () => {
													z((X) => !X);
												}),
												J.style.setProperty("display", "flex"),
												J.style.setProperty("justify-content", "space-between"),
												J.style.setProperty("width", "100%"),
												J.style.setProperty("align-items", "center"),
												J.style.setProperty("border-radius", "8px"),
												J.style.setProperty("padding", "2px 4px"),
												(0, C.insert)(
													W,
													() =>
														({
															codebase:
																B().length == 0
																	? "Final Codebase Context"
																	: B().length == 1
																		? "Final Context in Folder"
																		: "Final Context in Folders",
															"long-file": "Long-file Details",
															docs: "Final Documentation Context",
														})[H()?.intermediateSectionType ?? "long-file"],
												),
												(0, C.insert)(
													J,
													(0, d.createComponent)(r.Show, {
														get when() {
															return U();
														},
														get fallback() {
															return (() => {
																const X = y();
																return (
																	(0, E.effect)(() =>
																		(0, w.className)(
																			X,
																			u.ThemeIcon.asClassName(f.$E0b),
																		),
																	),
																	X
																);
															})();
														},
														get children() {
															const X = y();
															return (
																(0, E.effect)(() =>
																	(0, w.className)(
																		X,
																		u.ThemeIcon.asClassName(f.$F0b),
																	),
																),
																X
															);
														},
													}),
													null,
												),
												J
											);
										},
									}),
									null,
								),
								(0, C.insert)(
									G,
									(0, d.createComponent)(r.Show, {
										get when() {
											return (
												(0, m.memo)(
													() => (H()?.intermediateChunks ?? []).length > 0,
												)() && U()
											);
										},
										get children() {
											const J = v();
											return (
												J.style.setProperty("display", "block"),
												J.style.setProperty("padding", "0px 2px"),
												(0, C.insert)(
													J,
													(0, d.createComponent)(r.For, {
														get each() {
															return q();
														},
														children: (W, X) => {
															const Y = { selection: W, vsContext: F };
															return (0, d.createComponent)(r.Switch, {
																get children() {
																	return [
																		(0, d.createComponent)(r.Match, {
																			get when() {
																				return (
																					H()?.intermediateSectionType ===
																					"codebase"
																				);
																			},
																			get children() {
																				return (0, d.createComponent)(
																					e.$f_b,
																					(0, i.mergeProps)(Y, {
																						get belowCodeText() {
																							return (
																								(H()?.intermediateChunks ?? [])[
																									X()
																								]?.completeText ?? ""
																							);
																						},
																					}),
																				);
																			},
																		}),
																		(0, d.createComponent)(r.Match, {
																			get when() {
																				return (
																					H()?.intermediateSectionType ===
																					"docs"
																				);
																			},
																			get children() {
																				return (0, d.createComponent)(
																					e.$g_b,
																					(0, i.mergeProps)(Y, {
																						get belowCodeText() {
																							return (
																								(H()?.intermediateChunks ?? [])[
																									X()
																								]?.completeText ?? ""
																							);
																						},
																					}),
																				);
																			},
																		}),
																		(0, d.createComponent)(r.Match, {
																			get when() {
																				return (
																					H()?.intermediateSectionType ===
																					"long-file"
																				);
																			},
																			get children() {
																				return (0, d.createComponent)(
																					e.$e_b,
																					(0, i.mergeProps)(Y, {
																						get belowCodeText() {
																							return (
																								(H()?.intermediateChunks ?? [])[
																									X()
																								]?.completeText ?? ""
																							);
																						},
																					}),
																				);
																			},
																		}),
																	];
																},
															});
														},
													}),
												),
												J
											);
										},
									}),
									null,
								),
								G
							);
						})()
					);
				};
				e.$d_b = k;
				const L = (N) => {
					const [A, R] = (0, r.createSignal)(0),
						O = (0, a.$odc)();
					(0, r.createEffect)(() => {
						R((U) => U + 1);
					});
					const B = () => {
						const U = O.openerService;
						if (!U) return;
						const z = O.workspaceContextService.resolveRelativePath(
							N.selection.fileName,
						);
						U.open(
							(0, n.$8rb)(z, {
								startLineNumber: N.selection.startLine,
								startColumn: 1,
								endLineNumber: N.selection.endLine + 1,
								endColumn: 1,
							}),
							{
								openToSide: !1,
								editorOptions: {
									revealIfVisible: !0,
									revealIfOpened: !0,
									source: c.EditorOpenSource.USER,
								},
								fromUserGesture: !0,
							},
						);
					};
					return (() => {
						const U = I(),
							z = U.firstChild,
							F = z.firstChild,
							x = F.nextSibling,
							H = x.nextSibling,
							q = H.nextSibling,
							V = q.firstChild;
						return (
							U.addEventListener("click", B),
							(0, C.insert)(
								F,
								(0, d.createComponent)(b.$k$b, {
									get fileName() {
										return (0, g.$sc)(N.selection.fileName);
									},
									get workspaceContextService() {
										return O.workspaceContextService;
									},
									get modelService() {
										return O.modelService;
									},
									get languageService() {
										return O.languageService;
									},
								}),
							),
							(0, C.insert)(x, () => (0, g.$sc)(N.selection.fileName)),
							(0, C.insert)(H, () => N.selection.fileName),
							(0, C.insert)(q, () => N.selection.startLine, V),
							(0, C.insert)(q, () => N.selection.endLine, null),
							U
						);
					})();
				};
				e.$e_b = L;
				const D = (N) => {
					const A = (0, a.$odc)(),
						R = () => {
							const O = A.openerService;
							if (!O) return;
							const B = N.vsContext.workspaceContextService.resolveRelativePath(
								N.selection.fileName,
							);
							O.open(
								(0, n.$8rb)(B, {
									startLineNumber: N.selection.startLine,
									startColumn: 1,
									endLineNumber: N.selection.endLine + 1,
									endColumn: 1,
								}),
								{
									openToSide: !1,
									editorOptions: {
										revealIfVisible: !0,
										revealIfOpened: !0,
										source: c.EditorOpenSource.USER,
									},
									fromUserGesture: !0,
								},
							);
						};
					return (() => {
						const O = I(),
							B = O.firstChild,
							U = B.firstChild,
							z = U.nextSibling,
							F = z.nextSibling,
							x = F.nextSibling,
							H = x.firstChild;
						return (
							O.addEventListener("click", R),
							(0, C.insert)(
								U,
								(0, d.createComponent)(b.$k$b, {
									get fileName() {
										return (0, g.$sc)(N.selection.fileName);
									},
									get workspaceContextService() {
										return A.workspaceContextService;
									},
									get modelService() {
										return A.modelService;
									},
									get languageService() {
										return A.languageService;
									},
								}),
							),
							(0, C.insert)(z, () => (0, g.$sc)(N.selection.fileName)),
							(0, C.insert)(F, () => N.selection.fileName),
							(0, C.insert)(x, () => N.selection.startLine, H),
							(0, C.insert)(x, () => N.selection.endLine, null),
							O
						);
					})();
				};
				e.$f_b = D;
				const M = (N) => {
					const [A, R] = (0, r.createSignal)(0);
					(0, r.createEffect)(() => {
						R((U) => U + 1);
					});
					const O = (0, a.$odc)(),
						B = () => {
							O.openerService && O.openerService.open(N.selection.fileName);
						};
					return (() => {
						const U = T(),
							z = U.firstChild,
							F = z.firstChild,
							x = F.nextSibling,
							H = z.nextSibling;
						return (
							U.style.setProperty("margin", "16px 0px"),
							z.addEventListener("click", () => {
								B();
							}),
							z.style.setProperty("display", "flex"),
							z.style.setProperty("margin-bottom", "4px"),
							z.style.setProperty("cursor", "pointer"),
							F.style.setProperty(
								"color",
								"var(--vscode-input-placeholderForeground)",
							),
							F.style.setProperty("display", "flex"),
							(0, C.insert)(F, () => N.selection.fileName),
							x.style.setProperty("flex-grow", "1"),
							(0, C.insert)(
								U,
								(0, d.createComponent)(s.$b_b, {
									get selection() {
										return {
											text: N.selection.text
												.split(`
`)
												.filter((q) => q.trim() !== "")
												.join(`
`),
											uri: N.vsContext.workspaceContextService.resolveRelativePath(
												N.selection.fileName,
											),
											range: {
												selectionStartLineNumber: N.selection.startLine,
												selectionStartColumn: 1,
												positionLineNumber: N.selection.endLine + 1,
												positionColumn: 1,
											},
										};
									},
									lines: 4,
									notLink: !0,
								}),
								H,
							),
							H.style.setProperty("padding", "0px 0px 12px 0px"),
							U
						);
					})();
				};
				e.$g_b = M;
			},
		),
		define(
			de[4245],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 140, 36, 338, 147, 205, 54, 242, 1111, 312,
				41, 116, 1932, 722, 907,
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
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$a_b = D);
				const y = (0, t.template)("<h1>Project Spec:"),
					$ = (0, t.template)("<h1>Breakdown Steps:"),
					v = (0, t.template)("<div>"),
					S = (0, t.template)("<div><div>"),
					I = (0, t.template)("<br>"),
					T = (0, t.template)("<div><div><div><div>"),
					P = (0, t.template)("<h2>"),
					k = (0, t.template)("<p>"),
					L = (0, t.template)(
						'<div><div class="input-box-code-selection-path"><a class="link"></a></div><div class="input-box-code-selection"><div>',
					);
				function D(U) {
					const z = (0, u.$odc)(),
						F = (0, m.useContext)(r.$ygc),
						[x, H] = (0, m.createSignal)(!0),
						[q, V] = (0, m.createSignal)(!1),
						G = (0, m.createMemo)(() =>
							F.chatData.codeInterpreterTabs.find((le) => le.tabId === U.tabId),
						),
						K = (0, m.createMemo)(
							() => G()?.additionalData.aiProjectSteps ?? [],
						),
						J = (0, m.createMemo)(() => {
							const le = G()?.bubbles;
							if (le !== void 0) return [...le].reverse();
						}),
						W = (0, m.createMemo)(() => {
							const le = J();
							if (le === void 0) return;
							let oe;
							for (const ae of le) {
								if (ae.id === U.bubbleId) return oe;
								oe = ae;
							}
						}),
						X = (0, m.createMemo)(
							() => W()?.type === r.BubbleType.AI_CODE_INTERPRETER,
						),
						[Y, ie] = (0, m.createSignal)();
					(0, m.createEffect)(() => {
						const oe =
							z.reactiveStorageService.workspaceUserPersistentStorage.persistentChatMetadata.find(
								(ae) => ae.bubbleId === U.userBubbleId && ae.tabId === U.tabId,
							);
						ie(oe);
					});
					const ne = (0, m.createMemo)(() => !0);
					(0, m.createEffect)(() => {
						if (U.data.text === "") return;
						H(!1);
						const oe = setTimeout(() => {
							H(!0);
						}, 1200);
						(0, m.onCleanup)(() => {
							clearTimeout(oe);
						});
					});
					const [ee, _] = (0, m.createSignal)(0);
					(0, m.createEffect)(() => {
						U.isChatVisible && _((le) => le + 1);
					});
					const [te, Q] = (0, l.$B$b)(),
						Z = (0, m.createMemo)(() => ({
							maxTokensHit:
								z.reactiveStorageService.nonPersistentStorage.maxTokensHit,
							isLastAiBubble: U.isLastAiBubble,
						}));
					(0, m.createEffect)(() => {
						Z().maxTokensHit &&
							Z().isLastAiBubble &&
							!z.reactiveStorageService.nonPersistentStorage.continueBubbles.includes(
								U.bubbleId,
							) &&
							(z.reactiveStorageService.setNonPersistentStorage(
								"maxTokensHit",
								!1,
							),
							z.reactiveStorageService.setNonPersistentStorage(
								"continueBubbles",
								[
									...z.reactiveStorageService.nonPersistentStorage
										.continueBubbles,
									U.bubbleId,
								],
							));
					}, Z);
					const se = (0, m.createMemo)(() => {
							const le = Y()?.predictedContext?.usedCurrentFile;
							if (typeof le == "object") return (0, n.$sc)(le.relativeFilePath);
						}),
						re = () => {
							const le = Y()?.predictedContext?.usedDocs || [],
								oe = Y()?.injectedContext?.usedDocs || [],
								ae = [...le, ...oe];
							return ae.filter(
								($e, ye) => ae.findIndex((ue) => ue.docId === $e.docId) === ye,
							);
						};
					return (() => {
						const le = T(),
							oe = le.firstChild,
							ae = oe.firstChild,
							pe = ae.firstChild;
						return (
							le.style.setProperty("user-select", "text"),
							le.style.setProperty("position", "relative"),
							le.style.setProperty("padding", "0 1rem"),
							oe.style.setProperty("margin-bottom", "12px"),
							ae.style.setProperty("display", "flex"),
							ae.style.setProperty("margin-bottom", "2px"),
							pe.style.setProperty("margin", "0px 0px"),
							pe.style.setProperty("font-size", "8px"),
							pe.style.setProperty("text-transform", "uppercase"),
							pe.style.setProperty(
								"color",
								"var(--vscode-input-placeholderForeground)",
							),
							(0, E.insert)(
								le,
								(0, d.createComponent)(m.Show, {
									get when() {
										return U.data.text !== "";
									},
									get children() {
										return (0, d.createComponent)(m.Switch, {
											get children() {
												return [
													(0, d.createComponent)(m.Match, {
														get when() {
															return (
																U.data.bubbleState === c.NewProjectState.plan
															);
														},
														get children() {
															return y();
														},
													}),
													(0, d.createComponent)(m.Match, {
														get when() {
															return (
																U.data.bubbleState ===
																c.NewProjectState.breakdown
															);
														},
														get children() {
															return $();
														},
													}),
												];
											},
										});
									},
								}),
								null,
							),
							(0, E.insert)(
								le,
								(0, d.createComponent)(m.Show, {
									get when() {
										return (
											U.data.bubbleState === c.NewProjectState.steps ||
											U.data.bubbleState === c.NewProjectState.stepsFeedback
										);
									},
									get fallback() {
										return (0, d.createComponent)(a.$4$b, {
											get rawText() {
												return U.data.text;
											},
											get codeBlockProps() {
												return {
													runAsCellReceiver: F.chatData.editorContext.isNotebook
														? ($e) => z.aiService.insertCodeCellAndRun($e)
														: void 0,
													shouldRecompute: ee(),
												};
											},
											get finished() {
												return !U.isGenerating;
											},
										});
									},
									get children() {
										return (0, d.createComponent)(M, {
											get steps() {
												return K();
											},
											get data() {
												return U.data;
											},
											state: F,
											get recompute() {
												return ee();
											},
											get isGenerating() {
												return U.isGenerating;
											},
										});
									},
								}),
								null,
							),
							(0, E.insert)(
								le,
								(0, d.createComponent)(m.Show, {
									get when() {
										return (
											(0, C.memo)(() => !!(x() && U.isGenerating))() && ne()
										);
									},
									get children() {
										return (0, d.createComponent)(g.$C$b, { show: !0 });
									},
								}),
								null,
							),
							(0, E.insert)(
								le,
								(0, d.createComponent)(m.Show, {
									get when() {
										return (
											z.reactiveStorageService.nonPersistentStorage.continueBubbles.includes(
												U.bubbleId,
											) && U.isLastAiBubble
										);
									},
									get children() {
										return [
											(() => {
												const $e = v();
												return (
													$e.style.setProperty("height", "0.5rem"),
													$e.style.setProperty("width", "100%"),
													$e
												);
											})(),
											(() => {
												const $e = S(),
													ye = $e.firstChild;
												return (
													$e.style.setProperty("display", "flex"),
													$e.style.setProperty("align-items", "center"),
													$e.style.setProperty("flex-direction", "row"),
													$e.style.setProperty("justify-content", "flex-end"),
													$e.style.setProperty("gap", "0.5rem"),
													$e.style.setProperty("margin-bottom", "0.5rem"),
													ye.style.setProperty("flex-grow", "1"),
													ye.style.setProperty("display", "flex"),
													ye.style.setProperty("justify-content", "flex-start"),
													$e
												);
											})(),
										];
									},
								}),
								null,
							),
							(0, E.insert)(
								le,
								(0, d.createComponent)(m.Show, {
									get when() {
										return (0, C.memo)(() => !U.isGenerating)() && X();
									},
									get children() {
										return [
											I(),
											(0, d.createComponent)(h.$rdc, {
												style: {
													"max-width": "fit-content",
													"max-height": "fit-content",
													"margin-top": "1em",
													"margin-bottom": "1em",
												},
												onClick: () => {
													U.data.bubbleState === c.NewProjectState.steps
														? z.aiProjectService.nextStep(
																U.tabId,
																U.bubbleId,
																U.data.stepIndex + 1,
															)
														: U.data.nextBubbleState === c.NewProjectState.steps
															? z.aiProjectService.nextStep(
																	U.tabId,
																	U.bubbleId,
																	0,
																)
															: z.aiProjectService.nextStep(
																	U.tabId,
																	U.bubbleId,
																);
												},
												title: "Re-Run from here",
											}),
										];
									},
								}),
								null,
							),
							le
						);
					})();
				}
				function M(U) {
					const z = (0, u.$odc)(),
						F = (0, m.createMemo)(() => U.steps[U.data.stepIndex]);
					return [
						(0, d.createComponent)(m.Show, {
							get when() {
								return U.data.bubbleState === c.NewProjectState.steps;
							},
							get children() {
								return [
									(() => {
										const x = P();
										return (
											(0, E.insert)(x, () => `Step ${U.data.stepIndex + 1}`), x
										);
									})(),
									(() => {
										const x = k();
										return (0, E.insert)(x, () => F().description), x;
									})(),
								];
							},
						}),
						(0, d.createComponent)(m.Switch, {
							get fallback() {
								return (0, d.createComponent)(a.$4$b, {
									get rawText() {
										return U.data.text;
									},
									get codeBlockProps() {
										return {
											runAsCellReceiver: U.state.chatData.editorContext
												.isNotebook
												? (x) => z.aiService.insertCodeCellAndRun(x)
												: void 0,
											shouldRecompute: U.recompute,
										};
									},
									get finished() {
										return !U.isGenerating;
									},
								});
							},
							get children() {
								return [
									(0, d.createComponent)(m.Match, {
										get when() {
											return (
												F().stepType === p.AiProjectStepType.READ_WRITE_FILE
											);
										},
										get children() {
											return (0, d.createComponent)(
												O,
												(0, w.mergeProps)(U, {
													get currentStep() {
														return F();
													},
													get text() {
														return U.data.text;
													},
												}),
											);
										},
									}),
									(0, d.createComponent)(m.Match, {
										get when() {
											return (
												F().stepType === p.AiProjectStepType.CREATE_RM_FILES
											);
										},
										get children() {
											return (0, d.createComponent)(
												A,
												(0, w.mergeProps)(U, {
													get currentStep() {
														return F();
													},
												}),
											);
										},
									}),
								];
							},
						}),
					];
				}
				function N(U, z) {
					const F = { folders: {}, files: [] };
					U.forEach((q) => {
						let V = F;
						q.split("/").forEach((G) => {
							G !== "" &&
								(V.folders[G] || (V.folders[G] = { folders: {}, files: [] }),
								(V = V.folders[G]));
						});
					}),
						z.forEach((q) => {
							let V = F;
							const G = q.split("/");
							G.forEach((K, J) => {
								K !== "" &&
									(J === G.length - 1
										? V.files.push(K)
										: (V.folders[K] ||
												(V.folders[K] = { folders: {}, files: [] }),
											(V = V.folders[K])));
							});
						});
					const x = (q, V = 0) => {
						let G = "";
						return (
							Object.keys(q.folders).forEach((K, J, W) => {
								G += "\u2502   ".repeat(V);
								const X = x(q.folders[K], V + 1);
								X.length > 0 || J < W.length - 1 || q.files.length > 0
									? (G += "\u251C\u2500\u2500 ")
									: (G += "\u2514\u2500\u2500 "),
									(G +=
										K +
										`
`),
									(G += X);
							}),
							q.files.forEach((K, J, W) => {
								(G += "\u2502   ".repeat(V)),
									(G +=
										J < W.length - 1
											? "\u251C\u2500\u2500 "
											: "\u2514\u2500\u2500 "),
									(G +=
										K +
										`
`);
							}),
							G
						);
					};
					return "```\n" + x(F) + "```";
				}
				function A(U) {
					const z = (0, u.$odc)(),
						[F, x] = (0, m.createSignal)(""),
						H = (0, m.createMemo)(() =>
							U.currentStep.stepPayload?.type ===
							p.AiProjectStepType.CREATE_RM_FILES
								? U.currentStep.stepPayload.directories
								: [],
						),
						q = (0, m.createMemo)(() =>
							U.currentStep.stepPayload?.type ===
							p.AiProjectStepType.CREATE_RM_FILES
								? U.currentStep.stepPayload.fileNames
								: [],
						),
						V = (0, m.createMemo)(() => N(H(), q()));
					return (
						(0, m.createEffect)(() => {
							const G = N(H(), q());
							x(G);
						}),
						(0, d.createComponent)(a.$4$b, {
							get codeBlockProps() {
								return {
									runAsCellReceiver: U.state.chatData.editorContext.isNotebook
										? (G) => z.aiService.insertCodeCellAndRun(G)
										: void 0,
									shouldRecompute: U.recompute,
								};
							},
							get finished() {
								return !U.isGenerating;
							},
							get rawText() {
								return V();
							},
						})
					);
				}
				function R(U) {
					const [z, F] = (0, m.createSignal)();
					return (
						(0, m.onCleanup)(() => {
							F(U);
						}),
						z
					);
				}
				function O(U) {
					const z = (0, u.$odc)(),
						F = (0, m.createMemo)(() => {
							const V = U.currentStep.stepPayload;
							return V?.type === p.AiProjectStepType.READ_WRITE_FILE
								? V.fileName
								: "";
						}),
						x = (0, m.createMemo)(() => U.text),
						[H, q] = (0, m.createSignal)([{ type: "text", text: "" }]);
					return (
						(0, m.createEffect)((V) => {
							const G = x(),
								K = G.slice(V.length ?? 0);
							if (K.length === 0) return G;
							const J = H(),
								X = new RegExp(
									`[\\s\\S]*?${s.$rcc}([\\s\\S]*?)${s.$scc}`,
									"gm",
								).exec(K);
							if (X !== null) {
								const Y = X[1];
								return (
									q((ie) => [...ie, { type: "codeblock", fileName: Y }]),
									V + X[0]
								);
							} else {
								const Y = J[J.length - 1];
								return (
									Y.type === "text"
										? q((ie) => [
												...ie.slice(0, -1),
												{ type: "text", text: Y.text + K },
											])
										: q((ie) => [...ie, { type: "text", text: K }]),
									G
								);
							}
						}, ""),
						(0, d.createComponent)(m.For, {
							get each() {
								return H();
							},
							children: (V) =>
								(0, d.createComponent)(m.Switch, {
									get children() {
										return [
											(0, d.createComponent)(m.Match, {
												get when() {
													return V.type === "text" && V.text;
												},
												keyed: !0,
												children: (G) =>
													(0, d.createComponent)(a.$4$b, {
														rawText: G,
														get codeBlockProps() {
															return {
																runAsCellReceiver: U.state.chatData
																	.editorContext.isNotebook
																	? (K) => z.aiService.insertCodeCellAndRun(K)
																	: void 0,
																shouldRecompute: U.recompute,
															};
														},
														get finished() {
															return !U.isGenerating;
														},
													}),
											}),
											(0, d.createComponent)(m.Match, {
												get when() {
													return V.type === "codeblock" && V.fileName;
												},
												keyed: !0,
												children: (G) =>
													(0, d.createComponent)(B, { fileName: G }),
											}),
										];
									},
								}),
						})
					);
				}
				function B(U) {
					const F = (0, u.$odc)(),
						[x, H] = (0, m.createSignal)(!1),
						[q, V] = (0, m.createSignal)(0),
						[G, K] = (0, m.createSignal)(0),
						J = (() => {
							const ne = v();
							return (
								ne.style.setProperty("width", "100%"),
								ne.style.setProperty("height", "100%"),
								ne.style.setProperty("box-sizing", "border-box"),
								ne
							);
						})();
					(0, m.createEffect)(() => {
						q() > 24 ? (H(!0), K(24 * 19)) : (H(!1), K(q() * 19));
					});
					const W = !0,
						X = F.instantiationService.createInstance(
							o.$X0b,
							J,
							{ ...o.$X0b.getEditorOptions(F.configurationService) },
							{},
						),
						Y = (0, m.createMemo)(() =>
							F.workspaceContextService.resolveRelativePath(U.fileName),
						);
					(0, m.onCleanup)(() => {
						J.remove(), X.dispose();
					}),
						(0, m.createEffect)(async () => {
							const ne = await F.textModelService.createModelReference(Y()),
								ee = ne.object.textEditorModel;
							X.setModel(ee), V(ee.getFullModelRange().endLineNumber);
							const _ = ee.onDidChangeContent((te) => {
								V(ee.getFullModelRange().endLineNumber);
							});
							(0, m.onCleanup)(() => {
								ne.dispose(), _.dispose();
							});
						}),
						(0, m.createEffect)(() => {
							x()
								? (X.updateOptions({
										scrollbar: {
											vertical: "auto",
											verticalScrollbarSize: 10,
											horizontal: "auto",
											handleMouseWheel: !0,
											alwaysConsumeMouseWheel: !0,
											horizontalScrollbarSize: 10,
										},
									}),
									X.updateOptions({}))
								: (X.updateOptions({
										scrollbar: {
											vertical: "hidden",
											verticalScrollbarSize: 0,
											horizontal: "hidden",
											handleMouseWheel: !1,
											alwaysConsumeMouseWheel: !1,
											horizontalScrollbarSize: 0,
										},
									}),
									X.setScrollTop(0),
									X.setScrollLeft(0));
						});
					const ie = async (ne, ee, _) => {
						console.log("openRelevantFile", ne, _);
						let te = ne;
						_ !== void 0 &&
							(te = (0, f.$8rb)(ne, {
								startLineNumber: _.selectionStartLineNumber,
								startColumn: _.selectionStartColumn,
								endLineNumber: _.positionLineNumber,
								endColumn: _.positionColumn,
							})),
							ee.open(te, {
								openToSide: !0,
								editorOptions: {
									revealIfVisible: !0,
									revealIfOpened: !0,
									source: b.EditorOpenSource.USER,
								},
								fromUserGesture: !0,
							});
					};
					return (() => {
						const ne = L(),
							ee = ne.firstChild,
							_ = ee.firstChild,
							te = ee.nextSibling,
							Q = te.firstChild;
						return (
							ne.style.setProperty("margin-bottom", "0.5rem"),
							ee.style.setProperty("text-align", "right"),
							ee.style.setProperty("text-overflow", "ellipsis"),
							ee.style.setProperty("overflow", "hidden"),
							ee.style.setProperty("direction", "rtl"),
							_.addEventListener("click", () => {
								const Z = F.openerService;
								Z && Y && ie(Y(), Z);
							}),
							_.style.setProperty("text-decoration", "underline"),
							_.style.setProperty("white-space", "nowrap"),
							(0, E.insert)(_, () => U.fileName),
							te.style.setProperty("position", "relative"),
							te.style.setProperty(
								"border",
								"1px solid var(--vscode-editorWidget-border)",
							),
							te.style.setProperty("overflow", "hidden"),
							Q.style.setProperty("white-space", "pre"),
							Q.style.setProperty("padding", "0.75rem"),
							Q.style.setProperty("padding-bottom", "1.5rem"),
							(0, E.insert)(Q, J),
							(0, i.effect)(() =>
								`${G()}px` != null
									? Q.style.setProperty("height", `${G()}px`)
									: Q.style.removeProperty("height"),
							),
							ne
						);
					})();
				}
			},
		),
		define(
			de[4246],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 26, 41, 338, 135, 36, 242, 156, 54]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$_$b = S);
				const f = (0, t.template)(
						'<div><div class="context-step"><span></span><div></div><div>',
					),
					b = (0, t.template)("<span>(<!> files)"),
					s = (0, t.template)("<span>"),
					l = (0, t.template)("<div>"),
					y = (0, t.template)('<div class="show-file-icons">'),
					$ = (0, t.template)(
						'<div class="hoverable fade-in-slow-forward fade-in-initial" tabindex="0"><div></div><span>:<!>-</span><span></span><div>',
					),
					v = 15;
				function S(L) {
					const [D, M] = (0, m.createSignal)(!1),
						[N, A] = (0, m.createSignal)(!1);
					(0, m.createEffect)(() => {
						N() || M(L.defaultExpanded);
					});
					const R = (0, m.createMemo)(() =>
						N()
							? D() &&
								(L.step.type === "gathering" || L.step.type === "reranking"
									? L.step.files.length > 0
									: !0)
							: L.defaultExpanded,
					);
					return (() => {
						const O = f(),
							B = O.firstChild,
							U = B.firstChild,
							z = U.nextSibling,
							F = z.nextSibling;
						return (
							B.addEventListener("click", () => {
								M((x) => !x), A(!0);
							}),
							B.style.setProperty("display", "flex"),
							B.style.setProperty("flex-direction", "row"),
							B.style.setProperty("user-select", "none"),
							B.style.setProperty("cursor", "pointer"),
							B.style.setProperty("align-items", "center"),
							U.style.setProperty("font-size", "14px"),
							U.style.setProperty("margin-right", "4px"),
							U.style.setProperty("transition", "opacity 0.1s ease-in-out"),
							z.style.setProperty("font-size", "0.8em"),
							z.style.setProperty("transition", "opacity 0.1s ease-in-out"),
							(0, E.insert)(
								z,
								() => L.step.data.title.replace(/...$/, ""),
								null,
							),
							(0, E.insert)(
								z,
								(0, C.createComponent)(m.Show, {
									get fallback() {
										return (0, d.memo)(
											() =>
												L.step.type === "gathering" ||
												L.step.type === "reranking",
										)()
											? (() => {
													const x = b(),
														H = x.firstChild,
														q = H.nextSibling,
														V = q.nextSibling;
													return (
														x.style.setProperty("margin-left", "4px"),
														x.style.setProperty("opacity", "0.5"),
														(0, E.insert)(x, () => L.step.files.length, q),
														x
													);
												})()
											: (() => {
													const x = s();
													return (
														x.style.setProperty("margin-left", "4px"),
														x.style.setProperty("opacity", "0.5"),
														(0, w.effect)(() =>
															(0, i.className)(
																x,
																u.ThemeIcon.asClassName(r.$ak.check),
															),
														),
														x
													);
												})();
									},
									get when() {
										return L.step.type === "gathering" ||
											L.step.type === "reranking"
											? L.step.files.length === 0
											: L.isStepGenerating;
									},
									get children() {
										return (0, C.createComponent)(g.$C$b, { show: !0 });
									},
								}),
								null,
							),
							F.style.setProperty("flex", "1 1 auto"),
							(0, E.insert)(
								O,
								(0, C.createComponent)(m.Show, {
									get when() {
										return R();
									},
									get children() {
										return (0, C.createComponent)(m.Switch, {
											get children() {
												return [
													(0, C.createComponent)(m.Match, {
														get when() {
															return (
																(L.step.type === "gathering" ||
																	L.step.type === "reranking") &&
																L.step
															);
														},
														children: (x) =>
															(0, C.createComponent)(T, {
																get step() {
																	return x();
																},
																get hasToggledExpanded() {
																	return N();
																},
															}),
													}),
													(0, C.createComponent)(m.Match, {
														get when() {
															return L.step.type === "reasoning" && L.step;
														},
														children: (x) =>
															(0, C.createComponent)(I, {
																get step() {
																	return x();
																},
																get hasToggledExpanded() {
																	return N();
																},
															}),
													}),
												];
											},
										});
									},
								}),
								null,
							),
							(0, w.effect)(
								(x) => {
									const H = D() ? 0.8 : 0.5,
										q = D()
											? u.ThemeIcon.asClassName(r.$ak.chevronDown)
											: u.ThemeIcon.asClassName(r.$ak.chevronRight),
										V = D() ? 0.8 : 0.5;
									return (
										H !== x._v$ &&
											((x._v$ = H) != null
												? U.style.setProperty("opacity", H)
												: U.style.removeProperty("opacity")),
										q !== x._v$2 && (0, i.className)(U, (x._v$2 = q)),
										V !== x._v$3 &&
											((x._v$3 = V) != null
												? z.style.setProperty("opacity", V)
												: z.style.removeProperty("opacity")),
										x
									);
								},
								{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
							),
							O
						);
					})();
				}
				function I(L) {
					return (() => {
						const D = l();
						return (
							D.style.setProperty("height", "300px"),
							D.style.setProperty(
								"border",
								"1px solid var(--vscode-input-border)",
							),
							D.style.setProperty("border-radius", "2px"),
							D.style.setProperty("overflow", "hidden"),
							(0, E.insert)(
								D,
								(0, C.createComponent)(c.$w0b, {
									style: { width: "100%", height: "100%", padding: "8px" },
									nonReactiveElementOptions: {
										useShadows: !1,
										verticalScrollbarSize: 6,
									},
									scrollingDirection: "vertical",
									get children() {
										return (0, C.createComponent)(m.For, {
											get each() {
												return L.step.substeps;
											},
											children: (M, N) =>
												(() => {
													const A = l();
													return (
														A.style.setProperty("padding-bottom", "10px"),
														(0, E.insert)(
															A,
															(0, C.createComponent)(h.$4$b, {
																get rawText() {
																	return M.markdownExplanation;
																},
																finished: !0,
																codeBlockProps: { shouldRecompute: 0 },
															}),
														),
														A
													);
												})(),
										});
									},
								}),
							),
							D
						);
					})();
				}
				function T(L) {
					const D = (0, n.$odc)(),
						M = (0, m.createMemo)(() =>
							[...L.step.files].sort((A, R) => R.score - A.score),
						),
						N = (A, R) => {
							const O = M()[A],
								B = D.workspaceContextService.resolveRelativePath(
									O.relativeWorkspacePath ?? "",
								),
								U = (0, a.$8rb)(B, {
									startLineNumber: O.range?.startLineNumber || 1,
									startColumn: O.range?.startColumn || 1,
									endLineNumber: O.range?.endLineNumberInclusive || 1,
									endColumn: O.range?.endColumn || 1,
								});
							D.openerService.open(U, { openToSide: R });
						};
					return (() => {
						const A = y();
						return (
							A.style.setProperty(
								"border",
								"1px solid var(--vscode-input-border)",
							),
							A.style.setProperty("border-radius", "2px"),
							A.style.setProperty("overflow", "hidden"),
							(0, E.insert)(
								A,
								(0, C.createComponent)(c.$w0b, {
									style: { width: "100%", height: "100%" },
									nonReactiveElementOptions: {
										useShadows: !1,
										verticalScrollbarSize: 6,
									},
									scrollingDirection: "vertical",
									get children() {
										return (0, C.createComponent)(m.For, {
											get each() {
												return M();
											},
											children: (R, O) =>
												(0, C.createComponent)(P, {
													get file() {
														return { type: L.step.type, file: R };
													},
													get index() {
														return O();
													},
													onClickFile: N,
												}),
										});
									},
								}),
							),
							(0, w.effect)(() =>
								`${22 * Math.min(v, M().length)}px` != null
									? A.style.setProperty(
											"height",
											`${22 * Math.min(v, M().length)}px`,
										)
									: A.style.removeProperty("height"),
							),
							A
						);
					})();
				}
				function P(L) {
					const D = (0, n.$odc)(),
						[M, N] = (0, m.createSignal)(!1),
						A = (0, m.createMemo)(() =>
							D.workspaceContextService.resolveRelativePath(
								L.file.file.relativeWorkspacePath,
							),
						),
						R = (0, m.createMemo)(() =>
							D.workspaceContextService.resolveRelativePath(
								(0, o.$rc)(L.file.file.relativeWorkspacePath),
							),
						);
					return (() => {
						const O = $(),
							B = O.firstChild,
							U = B.nextSibling,
							z = U.firstChild,
							F = z.nextSibling,
							x = F.nextSibling,
							H = U.nextSibling,
							q = H.nextSibling;
						return (
							O.addEventListener("click", (V) => {
								const G = V.metaKey || V.ctrlKey || V.altKey;
								L.onClickFile(L.index, G);
							}),
							O.style.setProperty("white-space", "nowrap"),
							O.style.setProperty("overflow", "hidden"),
							O.style.setProperty("text-overflow", "ellipsis"),
							O.style.setProperty("font-size", "0.75rem"),
							O.style.setProperty("display", "flex"),
							O.style.setProperty("align-items", "center"),
							O.style.setProperty("gap", "3px"),
							O.style.setProperty("cursor", "pointer"),
							O.style.setProperty("border-radius", "4px"),
							O.style.setProperty("padding", "2px"),
							B.style.setProperty("margin-right", "-6px"),
							(0, E.insert)(
								B,
								(0, C.createComponent)(p.$k$b, {
									get fileName() {
										return (0, o.$sc)(A().fsPath);
									},
									get languageService() {
										return D.languageService;
									},
									get modelService() {
										return D.modelService;
									},
									get workspaceContextService() {
										return D.workspaceContextService;
									},
								}),
							),
							U.style.setProperty("color", "var(--vscode-editor-foreground)"),
							(0, E.insert)(U, () => (0, o.$sc)(A().fsPath), z),
							(0, E.insert)(
								U,
								() => L.file.file.range?.startLineNumber ?? 1,
								F,
							),
							(0, E.insert)(
								U,
								() => L.file.file.range?.endLineNumberInclusive ?? 1,
								null,
							),
							H.style.setProperty(
								"color",
								"var(--vscode-input-placeholderForeground)",
							),
							H.style.setProperty("white-space", "nowrap"),
							H.style.setProperty("overflow", "hidden"),
							H.style.setProperty("text-overflow", "ellipsis"),
							H.style.setProperty("direction", "rtl"),
							(0, E.insert)(H, () => R().toString()),
							q.addEventListener("click", (V) => {
								V.stopPropagation(), N((G) => !G);
							}),
							q.style.setProperty("font-size", "10px"),
							q.style.setProperty("border-radius", "3px"),
							q.style.setProperty("padding", "0px 2px"),
							q.style.setProperty("color", "var(--vscode-input-foreground)"),
							q.style.setProperty("line-height", "120%"),
							(0, E.insert)(q, () => L.file.file.score.toFixed(2)),
							(0, E.insert)(
								O,
								(0, C.createComponent)(m.Show, {
									get when() {
										return M();
									},
									get children() {
										const V = l();
										return (
											V.style.setProperty("font-size", "10px"),
											V.style.setProperty("opacity", "0.5"),
											V.style.setProperty("padding", "0px 10px 5px 10px"),
											(0, E.insert)(
												V,
												(0, C.createComponent)(m.Switch, {
													get children() {
														return (0, C.createComponent)(m.Match, {
															get when() {
																return L.file.type === "reranking" && L.file;
															},
															children: (G) =>
																(0, d.memo)(
																	(() => {
																		const K = (0, d.memo)(
																			() => G().file.reason.length > 0,
																		);
																		return () =>
																			K()
																				? G().file.reason
																				: "(No details available.)";
																	})(),
																),
														});
													},
												}),
											),
											V
										);
									},
								}),
								null,
							),
							(0, w.effect)(
								(V) => {
									const G = `${L.index * 20}ms`,
										K = k(L.file)
											? "rgba(255, 0, 0, 0.5)"
											: "var(--vscode-input-background)";
									return (
										G !== V._v$4 &&
											((V._v$4 = G) != null
												? O.style.setProperty("animation-delay", G)
												: O.style.removeProperty("animation-delay")),
										K !== V._v$5 &&
											((V._v$5 = K) != null
												? q.style.setProperty("background-color", K)
												: q.style.removeProperty("background-color")),
										V
									);
								},
								{ _v$4: void 0, _v$5: void 0 },
							),
							O
						);
					})();
				}
				function k(L) {
					return L.type === "gathering"
						? !1
						: L.type === "reranking"
							? L.file.failed
							: !1;
				}
			},
		),
		define(
			de[4247],
			he([1, 0, 2, 2, 2, 2, 2, 926, 7, 236, 338]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Hbc = h);
				const a = (0, t.template)(
					'<div><div class="ainputbox-quote-content"><div></div><div></div><div>',
				);
				function h(c) {
					let n;
					return (() => {
						const g = a(),
							p = g.firstChild,
							o = p.firstChild,
							f = o.nextSibling,
							b = f.nextSibling;
						return (
							p.style.setProperty("padding", "5px"),
							p.style.setProperty("padding-left", "8px"),
							p.style.setProperty(
								"border-left",
								"3px solid var(--vscode-input-background)",
							),
							p.style.setProperty("margin-left", "10px"),
							p.style.setProperty("font-style", "italic"),
							p.style.setProperty("position", "relative"),
							p.style.setProperty("overflow", "hidden"),
							p.style.setProperty("max-height", "100px"),
							o.style.setProperty("position", "absolute"),
							o.style.setProperty("top", "85px"),
							o.style.setProperty("left", "0"),
							o.style.setProperty("right", "0"),
							o.style.setProperty("height", "25px"),
							o.style.setProperty(
								"background",
								"linear-gradient(to bottom, transparent, var(--vscode-editor-background))",
							),
							o.style.setProperty("z-index", "100"),
							f.addEventListener("click", (s) => {
								s.stopPropagation();
								const { sectionIndex: l, bubbleId: y } = c.quote,
									$ = (0, r.$70b)(l, y),
									S = (0, m.$Ogb)().document.getElementById($);
								S && !(0, d.$Ikb)(S) && S?.scrollIntoView({ block: "nearest" }),
									S?.classList.add("markdown-section-highlight"),
									n && clearTimeout(n),
									(n = setTimeout(() => {
										S?.classList.remove("markdown-section-highlight");
									}, 1e3));
							}),
							f.style.setProperty("position", "absolute"),
							f.style.setProperty("top", "0px"),
							f.style.setProperty("right", "0px"),
							f.style.setProperty("left", "0px"),
							f.style.setProperty("bottom", "0px"),
							f.style.setProperty("z-index", "101"),
							f.style.setProperty("cursor", "pointer"),
							b.style.setProperty("opacity", "0.6"),
							(0, E.insert)(
								b,
								(0, C.createComponent)(u.$4$b, {
									get rawText() {
										return c.quote.markdown.trim();
									},
									codeBlockProps: {
										shouldRecompute: 0,
										codeblockActionsCallback: () => {},
									},
									finished: !0,
								}),
							),
							(0, w.effect)((s) =>
								(0, i.style)(
									g,
									{
										padding: "4px 0",
										background: "var(--vscode-sideBar-background)",
										...c.style,
									},
									s,
								),
							),
							g
						);
					})();
				}
			},
		),
		define(
			de[4248],
			he([1, 0, 2, 2, 2, 13, 2, 147, 36, 1521]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$bcc = void 0);
				const r = (0, t.template)("<div>"),
					u = (a) => {
						const h = (0, m.$odc)(),
							c = (0, E.createMemo)(() => {
								const n = [
									{ v: "Is there a bug here?", type: "normal" },
									{ v: "Explain this code", type: "normal" },
									{ v: "How do I build a rust CLI?", type: "normal" },
								];
								return (
									h.reactiveStorageService.workspaceUserPersistentStorage
										.exampleCodebaseQuestions !== void 0 &&
										h.reactiveStorageService.workspaceUserPersistentStorage
											.exampleCodebaseQuestions.length > 0 &&
										n.push(
											...h.reactiveStorageService.workspaceUserPersistentStorage.exampleCodebaseQuestions.map(
												(g) => ({ v: g, type: "codebase" }),
											),
										),
									n.slice(-3)
								);
							});
						return (() => {
							const n = r();
							return (
								n.style.setProperty("margin", "32px auto 16px auto"),
								n.style.setProperty("text-align", "center"),
								n.style.setProperty("z-index", "1"),
								n.style.setProperty("display", "flex"),
								n.style.setProperty("flex-wrap", "wrap"),
								n.style.setProperty("gap", "12px 8px"),
								n.style.setProperty("justify-content", "center"),
								(0, i.insert)(
									n,
									(0, w.createComponent)(C.For, {
										get each() {
											return c();
										},
										children: (g) =>
											(() => {
												const p = r();
												return (
													p.style.setProperty("display", "inline-block"),
													(0, i.insert)(
														p,
														(0, w.createComponent)(d.$rdc, {
															get title() {
																return g.v;
															},
															get type() {
																return g.type === "codebase", "tertiary";
															},
															extras: { style: { "max-width": "400px" } },
															onClick: () => {
																h.markerDecorationsService.callInsertIntoChatCallback(
																	{
																		message:
																			g.type === "codebase" ? " " + g.v : g.v,
																		editorUri: "",
																		preserveSelection: !0,
																		includeCurrentFile: !0,
																		isCodebaseContext: g.type === "codebase",
																	},
																);
															},
														}),
													),
													p
												);
											})(),
									}),
								),
								n
							);
						})();
					};
				e.$bcc = u;
			},
		),
		define(
			de[4249],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 36, 140, 26, 14, 397, 135, 140, 1711, 7,
				385, 1065, 4248, 422, 160, 2379,
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
				y,
				$,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ccc = void 0);
				const v = (0, t.template)("<span>(<!>)"),
					S = (0, t.template)(
						'<a href="#" class="premium-chat-history-view-all"><span>View all',
					),
					I = (0, t.template)("<div><div><span></span><span>"),
					T = (0, t.template)("<div>"),
					P = (0, t.template)('<div tabindex="0">'),
					k = (0, t.template)(
						'<div tabindex="0"><div><div></div><div></div></div><div>',
					),
					L = (D) => {
						const M = (0, u.$odc)(),
							N = (0, a.$zgc)(),
							[A, R] = (0, r.createSignal)(0),
							O = (0, s.$lbc)(),
							{ showHover: B, hideHover: U } = (0, y.$z$b)(600),
							z = (0, r.createMemo)(() =>
								N.chatData.tabs
									.filter((X) => X.tabId !== O()?.tabId)
									.sort((X, Y) => (Y.lastSendTime ?? 0) - (X.lastSendTime ?? 0))
									.slice(0, o.$xIb),
							),
							F = (0, r.createMemo)(
								() =>
									O().bubbles.length === 1 &&
									M.reactiveStorageService.applicationUserPersistentStorage
										.bubbleTimesLeft > 0,
							),
							x = (0, r.createMemo)(() => z().length > 0),
							H = (0, r.createMemo)(() =>
								A() >= 450 ? 3 : A() >= 300 ? 2 : 1,
							);
						let q;
						const V = (0, f.$Ogb)().ResizeObserver;
						(0, r.onMount)(() => {
							if (!q) return;
							const W = new V((X) => {
								for (let Y of X) R(Y.contentRect.width);
							});
							W.observe(q),
								(0, r.onCleanup)(() => {
									W.disconnect();
								});
						});
						const G = (W) => {
								N.setChatData("selectedTabId", W),
									setTimeout(() => {
										N.chatData.inputBoxDelegate?.focus();
									});
							},
							K = (0, b.$5$b)(p.$Fgc);
						(0, r.createEffect)(() => {
							const W = D.selectedPreviousChatIndex,
								X = D.setSelectedPreviousChatIndex,
								Y = (ie) => {
									if (W !== -1)
										switch (ie.key) {
											case "ArrowLeft": {
												const ne = W - 1;
												if (ne < 0) {
													X(-1), N.chatData.inputBoxDelegate?.focus();
													break;
												}
												X(ne);
												break;
											}
											case "ArrowRight": {
												const ne = W + 1;
												if (ne >= z().length) {
													X(z().length - 1);
													break;
												}
												X(ne);
												break;
											}
											case "ArrowUp": {
												const ee = W - H();
												if (ee < 0) {
													X(-1), N.chatData.inputBoxDelegate?.focus();
													break;
												}
												X(ee);
												break;
											}
											case "ArrowDown": {
												const ee = W + H();
												if (ee >= z().length) {
													X(z().length - 1);
													break;
												}
												X(ee);
												break;
											}
											case "Escape": {
												X(-1), N.chatData.inputBoxDelegate?.focus();
												break;
											}
											case "Enter": {
												const ne = z()[W];
												ne && G(ne.tabId);
												break;
											}
										}
								};
							q?.addEventListener("keydown", Y),
								(0, r.onCleanup)(() => {
									q?.removeEventListener("keydown", Y);
								});
						});
						const J = (0, r.createMemo)(
							() =>
								D.selectedPreviousChatIndex !== -1 ||
								M.reactiveStorageService.applicationUserPersistentStorage
									.chatHistoryIsCollapsed !== !0,
						);
						return (0, E.createComponent)(r.Show, {
							get when() {
								return x();
							},
							get children() {
								const W = P();
								W.addEventListener("focusout", () => {
									const Y = D.setSelectedPreviousChatIndex;
									setTimeout(() => {
										(!q || !q.contains((0, f.$Ogb)().document.activeElement)) &&
											Y(-1);
									});
								});
								const X = q;
								return (
									typeof X == "function" ? (0, m.use)(X, W) : (q = W),
									W.style.setProperty("padding", "0.75rem 1.25rem"),
									W.style.setProperty("display", "flex"),
									W.style.setProperty("flex-direction", "column"),
									W.style.setProperty("gap", "0.25rem"),
									W.style.setProperty("height", "100%"),
									W.style.setProperty("outline", "none"),
									W.style.setProperty("flex", "1"),
									(0, C.insert)(
										W,
										(0, E.createComponent)(r.Show, {
											get when() {
												return !F();
											},
											get fallback() {
												return (0, E.createComponent)(l.$bcc, {});
											},
											get children() {
												return [
													(() => {
														const Y = I(),
															ie = Y.firstChild,
															ne = ie.firstChild,
															ee = ne.nextSibling;
														return (
															Y.style.setProperty("display", "flex"),
															Y.style.setProperty(
																"justify-content",
																"space-between",
															),
															Y.style.setProperty("align-items", "center"),
															Y.style.setProperty("padding", "0px 0.25rem"),
															ie.addEventListener("click", () => {
																D.selectedPreviousChatIndex !== -1 &&
																M.reactiveStorageService
																	.applicationUserPersistentStorage
																	.chatHistoryIsCollapsed === !0
																	? D.setSelectedPreviousChatIndex(-1)
																	: M.reactiveStorageService.setApplicationUserPersistentStorage(
																			"chatHistoryIsCollapsed",
																			(_) => !_,
																		);
															}),
															ie.style.setProperty("display", "flex"),
															ie.style.setProperty("align-items", "center"),
															ie.style.setProperty("cursor", "pointer"),
															ne.style.setProperty("font-size", "0.75rem"),
															ne.style.setProperty(
																"color",
																"var(--vscode-input-placeholderForeground)",
															),
															ne.style.setProperty("font-weight", "400"),
															ne.style.setProperty("flex-shrink", "0"),
															ne.style.setProperty("margin-right", "0.25rem"),
															(0, C.insert)(ne, () => (J(), "Previous chats")),
															ee.style.setProperty("font-size", "0.75rem"),
															ee.style.setProperty(
																"color",
																"var(--vscode-input-placeholderForeground)",
															),
															(0, C.insert)(
																Y,
																(0, E.createComponent)(r.Show, {
																	get when() {
																		return (
																			(0, d.memo)(() => !!J())() && A() > 260
																		);
																	},
																	get children() {
																		const _ = S(),
																			te = _.firstChild,
																			Q = te.firstChild;
																		return (
																			_.addEventListener("click", (Z) => {
																				Z.preventDefault(),
																					M.commandService.executeCommand(
																						p.$Fgc,
																					);
																			}),
																			_.style.setProperty(
																				"font-size",
																				"0.75rem",
																			),
																			_.style.setProperty(
																				"color",
																				"var(--vscode-textLink-foreground)",
																			),
																			_.style.setProperty(
																				"text-decoration",
																				"none",
																			),
																			_.style.setProperty("display", "flex"),
																			_.style.setProperty(
																				"align-items",
																				"center",
																			),
																			_.style.setProperty("flex-shrink", "0"),
																			te.style.setProperty(
																				"font-size",
																				"0.75rem",
																			),
																			te.style.setProperty("flex-shrink", "0"),
																			(0, C.insert)(
																				te,
																				(0, E.createComponent)(r.Show, {
																					get when() {
																						return (
																							(0, d.memo)(
																								() =>
																									D.selectedPreviousChatIndex !==
																									-1,
																							)() && K()
																						);
																					},
																					get children() {
																						const Z = v(),
																							se = Z.firstChild,
																							re = se.nextSibling,
																							le = re.nextSibling;
																						return (
																							Z.style.setProperty(
																								"margin-left",
																								"4px",
																							),
																							Z.style.setProperty(
																								"color",
																								"var(--vscode-input-placeholderForeground)",
																							),
																							(0, C.insert)(Z, K, re),
																							Z
																						);
																					},
																				}),
																				null,
																			),
																			_
																		);
																	},
																}),
																null,
															),
															(0, w.effect)(
																(_) => {
																	const te = J() ? 1 : 0.5,
																		Q = J() ? 1 : 0.5,
																		Z = h.ThemeIcon.asClassName(
																			J()
																				? c.$ak.chevronDown
																				: c.$ak.chevronRight,
																		);
																	return (
																		te !== _._v$ &&
																			((_._v$ = te) != null
																				? ne.style.setProperty("opacity", te)
																				: ne.style.removeProperty("opacity")),
																		Q !== _._v$2 &&
																			((_._v$2 = Q) != null
																				? ee.style.setProperty("opacity", Q)
																				: ee.style.removeProperty("opacity")),
																		Z !== _._v$3 &&
																			(0, i.className)(ee, (_._v$3 = Z)),
																		_
																	);
																},
																{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
															),
															Y
														);
													})(),
													(0, E.createComponent)(r.Show, {
														get when() {
															return J();
														},
														get children() {
															const Y = T();
															return (
																Y.style.setProperty("flex", "1"),
																(0, C.insert)(
																	Y,
																	(0, E.createComponent)(g.$w0b, {
																		scrollingDirection: "vertical",
																		style: { height: "100%" },
																		get children() {
																			const ie = T();
																			return (
																				ie.style.setProperty("display", "grid"),
																				ie.style.setProperty("gap", "0.4rem"),
																				(0, C.insert)(
																					ie,
																					(0, E.createComponent)(r.For, {
																						get each() {
																							return z();
																						},
																						children: (ne, ee) => {
																							const _ = (0, r.createMemo)(
																								() =>
																									ee() ===
																									D.selectedPreviousChatIndex,
																							);
																							let te;
																							(0, r.createEffect)(() => {
																								_() && te?.focus();
																							});
																							const Q = (0, r.createMemo)(() =>
																								_()
																									? "var(--vscode-editorGutter-modifiedBackground)"
																									: "var(--vscode-widget-border, transparent)",
																							);
																							return (() => {
																								const Z = k(),
																									se = Z.firstChild,
																									re = se.firstChild,
																									le = re.nextSibling,
																									oe = se.nextSibling;
																								Z.addEventListener(
																									"mouseleave",
																									() => U(),
																								),
																									Z.addEventListener(
																										"mouseenter",
																										(pe) =>
																											B({
																												target: pe.target,
																												content: `${
																													ne.chatTitle
																														? ne.chatTitle.split(`
`)[0]
																														: "New chat"
																												}${ne.tabId === D.selectedTabId ? " (current)" : ""}`,
																												appearance: {
																													compact: !0,
																													showPointer: !0,
																												},
																												position: {
																													hoverPosition:
																														$.HoverPosition
																															.BELOW,
																												},
																											}),
																									),
																									Z.addEventListener(
																										"click",
																										() => G(ne.tabId),
																									);
																								const ae = te;
																								return (
																									typeof ae == "function"
																										? (0, m.use)(ae, Z)
																										: (te = Z),
																									Z.style.setProperty(
																										"display",
																										"flex",
																									),
																									Z.style.setProperty(
																										"outline",
																										"none",
																									),
																									Z.style.setProperty(
																										"align-items",
																										"center",
																									),
																									Z.style.setProperty(
																										"padding",
																										"0.3rem 0.4rem",
																									),
																									Z.style.setProperty(
																										"padding-left",
																										"calc(0.4rem - 1.5px)",
																									),
																									Z.style.setProperty(
																										"border-width",
																										"1px",
																									),
																									Z.style.setProperty(
																										"border-style",
																										"solid",
																									),
																									Z.style.setProperty(
																										"border-radius",
																										"0.25rem",
																									),
																									Z.style.setProperty(
																										"background-color",
																										"var(--vscode-input-background)",
																									),
																									Z.style.setProperty(
																										"cursor",
																										"pointer",
																									),
																									Z.style.setProperty(
																										"justify-content",
																										"space-between",
																									),
																									Z.style.setProperty(
																										"transition",
																										"background-color 0.2s ease",
																									),
																									Z.style.setProperty(
																										"min-width",
																										"0",
																									),
																									se.style.setProperty(
																										"display",
																										"flex",
																									),
																									se.style.setProperty(
																										"align-items",
																										"center",
																									),
																									se.style.setProperty(
																										"min-width",
																										"0",
																									),
																									se.style.setProperty(
																										"flex-grow",
																										"1",
																									),
																									re.style.setProperty(
																										"margin-right",
																										"0.25rem",
																									),
																									re.style.setProperty(
																										"font-size",
																										"0.75rem",
																									),
																									re.style.setProperty(
																										"flex-shrink",
																										"0",
																									),
																									le.style.setProperty(
																										"flex-grow",
																										"1",
																									),
																									le.style.setProperty(
																										"flex-shrink",
																										"1",
																									),
																									le.style.setProperty(
																										"min-width",
																										"0",
																									),
																									le.style.setProperty(
																										"font-size",
																										"0.75rem",
																									),
																									le.style.setProperty(
																										"white-space",
																										"nowrap",
																									),
																									le.style.setProperty(
																										"overflow",
																										"hidden",
																									),
																									le.style.setProperty(
																										"text-overflow",
																										"ellipsis",
																									),
																									(0, C.insert)(
																										le,
																										() =>
																											ne.chatTitle ||
																											"New chat",
																									),
																									oe.style.setProperty(
																										"font-size",
																										"0.65rem",
																									),
																									oe.style.setProperty(
																										"color",
																										"var(--vscode-input-placeholderForeground)",
																									),
																									oe.style.setProperty(
																										"margin-left",
																										"0.6rem",
																									),
																									oe.style.setProperty(
																										"flex-shrink",
																										"0",
																									),
																									(0, C.insert)(oe, () =>
																										(0, n.$bgc)(
																											ne.lastSendTime ??
																												Date.now(),
																										),
																									),
																									(0, w.effect)(
																										(pe) => {
																											const $e = `premium-chat-history-item ${ne.tabId === D.selectedTabId ? "current-chat" : ""}`,
																												ye = Q(),
																												ue = Q(),
																												fe = Q(),
																												me = _()
																													? "var(--vscode-editorGutter-modifiedBackground)"
																													: ne.tabId ===
																															D.selectedTabId
																														? "var(--vscode-textLink-activeForeground)"
																														: "var(--vscode-widget-border, transparent)",
																												ve = ne.chatTitle
																													? "var(--vscode-foreground)"
																													: "var(--vscode-input-placeholderForeground)",
																												ge =
																													h.ThemeIcon.asClassName(
																														c.$ak.comment,
																													),
																												be = ne.chatTitle
																													? "var(--vscode-foreground)"
																													: "var(--vscode-input-placeholderForeground)";
																											return (
																												$e !== pe._v$4 &&
																													(0, i.className)(
																														Z,
																														(pe._v$4 = $e),
																													),
																												ye !== pe._v$5 &&
																													((pe._v$5 = ye) !=
																													null
																														? Z.style.setProperty(
																																"border-top-color",
																																ye,
																															)
																														: Z.style.removeProperty(
																																"border-top-color",
																															)),
																												ue !== pe._v$6 &&
																													((pe._v$6 = ue) !=
																													null
																														? Z.style.setProperty(
																																"border-bottom-color",
																																ue,
																															)
																														: Z.style.removeProperty(
																																"border-bottom-color",
																															)),
																												fe !== pe._v$7 &&
																													((pe._v$7 = fe) !=
																													null
																														? Z.style.setProperty(
																																"border-right-color",
																																fe,
																															)
																														: Z.style.removeProperty(
																																"border-right-color",
																															)),
																												me !== pe._v$8 &&
																													((pe._v$8 = me) !=
																													null
																														? Z.style.setProperty(
																																"border-left-color",
																																me,
																															)
																														: Z.style.removeProperty(
																																"border-left-color",
																															)),
																												ve !== pe._v$9 &&
																													((pe._v$9 = ve) !=
																													null
																														? re.style.setProperty(
																																"color",
																																ve,
																															)
																														: re.style.removeProperty(
																																"color",
																															)),
																												ge !== pe._v$10 &&
																													(0, i.className)(
																														re,
																														(pe._v$10 = ge),
																													),
																												be !== pe._v$11 &&
																													((pe._v$11 = be) !=
																													null
																														? le.style.setProperty(
																																"color",
																																be,
																															)
																														: le.style.removeProperty(
																																"color",
																															)),
																												pe
																											);
																										},
																										{
																											_v$4: void 0,
																											_v$5: void 0,
																											_v$6: void 0,
																											_v$7: void 0,
																											_v$8: void 0,
																											_v$9: void 0,
																											_v$10: void 0,
																											_v$11: void 0,
																										},
																									),
																									Z
																								);
																							})();
																						},
																					}),
																				),
																				(0, w.effect)(() =>
																					`repeat(${H()}, 1fr)` != null
																						? ie.style.setProperty(
																								"grid-template-columns",
																								`repeat(${H()}, 1fr)`,
																							)
																						: ie.style.removeProperty(
																								"grid-template-columns",
																							),
																				),
																				ie
																			);
																		},
																	}),
																),
																Y
															);
														},
													}),
												];
											},
										}),
									),
									W
								);
							},
						});
					};
				e.$ccc = L;
			},
		),
		define(
			de[863],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 36, 9, 134, 242, 26, 14]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$k_b = e.$j_b = e.$i_b = e.$h_b = void 0);
				const p = (0, t.template)('<span class="infotext">'),
					o = (0, t.template)("<span>Increase hard limit."),
					f = (0, t.template)(
						"<span>Enable usage-based pricing for unlimited fast requests",
					),
					b = (0, t.template)(
						'<div><div><span class="slow-gen-info-icon"><span></span></span><span>Using slow request</span></div><span></span><span>',
					),
					s = (0, t.template)(
						"<div><span>Slow request<span></span><span>(<!>)</span><span>Skip the wait.</span></span><span>",
					),
					l = (0, t.template)('<span class="slow-gen-info-icon"><span>'),
					y = (0, t.template)("<span>Using slow request"),
					$ = (0, t.template)(
						"<span>usage-based pricing for unlimited fast requests",
					),
					v = (0, t.template)("<span>"),
					S = (0, t.template)("<span>here"),
					I = (0, t.template)("<div><span>Slow request, "),
					T = (0, t.template)("<div>"),
					P = (0, t.template)("<span>usage-based pricing"),
					k = (0, t.template)("<span>Upgrade to Pro"),
					L = (0, t.template)("<span>fast requests"),
					D = (R) => {
						const O = (0, u.$odc)(),
							B = O.cursorAuthenticationService.membershipType(),
							U = (0, r.createMemo)(() => !(R.hideDotsLoading ?? !1)),
							[z, F] = (0, r.createSignal)(!1),
							x = (0, r.createMemo)(
								() =>
									R.queuePositionResponse !== void 0 &&
									(R.queuePositionResponse.position !== -1 ||
										R.queuePositionResponse.secondsLeftToWait !== void 0 ||
										R.queuePositionResponse.newQueuePosition !== void 0),
							);
						let H;
						const q = (0, r.createMemo)(
							() => R.queuePositionResponse !== void 0,
						);
						(0, r.createEffect)(() => {
							const K = q();
							(0, e.$j_b)(O)
								.then(
									({
										usageBasedPremiumRequestsEnabled: J,
										isUsagePricingEnabled: W,
									}) => {
										F(J),
											O.reactiveStorageService.setApplicationUserPersistentStorage(
												"aiSettings",
												{ isUsagePricingEnabled: W },
											);
									},
								)
								.catch((J) => {
									console.error(J);
								});
						});
						const V = () => {
								R.setIsUpsellingUsageBasedPricing?.(!0);
							},
							G = async () => {
								R.setIsUpsellingHardLimit?.(!0);
							};
						return (0, d.createComponent)(r.Show, {
							get when() {
								return x();
							},
							get fallback() {
								return (0, d.createComponent)(r.Show, {
									get when() {
										return U() && R.isLoading;
									},
									get children() {
										const K = T();
										return (
											K.style.setProperty(
												"color",
												"var(--vscode-input-placeholderForeground)",
											),
											(0, C.insert)(
												K,
												(0, d.createComponent)(r.Show, {
													get when() {
														return R.statusMessages?.at(0);
													},
													children: (J) =>
														(() => {
															const W = v();
															return (
																W.style.setProperty("font-size", "10px"),
																(0, C.insert)(W, J),
																W
															);
														})(),
												}),
												null,
											),
											(0, C.insert)(
												K,
												(0, d.createComponent)(c.$C$b, { show: !0 }),
												null,
											),
											K
										);
									},
								});
							},
							get children() {
								return (0, d.createComponent)(r.Switch, {
									get children() {
										return [
											(0, d.createComponent)(r.Match, {
												get when() {
													return (
														R.queuePositionResponse?.secondsLeftToWait !==
															void 0 ||
														R.queuePositionResponse?.newQueuePosition !== void 0
													);
												},
												get children() {
													return [
														(0, d.createComponent)(r.Show, {
															get when() {
																return !R.conciseMessage;
															},
															get children() {
																const K = b(),
																	J = K.firstChild,
																	W = J.firstChild,
																	X = W.firstChild,
																	Y = W.nextSibling,
																	ie = Y.firstChild,
																	ne = J.nextSibling,
																	ee = ne.nextSibling;
																return (
																	K.style.setProperty("display", "flex"),
																	K.style.setProperty(
																		"flex-direction",
																		"column",
																	),
																	K.style.setProperty("align-items", "left"),
																	K.style.setProperty("gap", "0.25rem"),
																	J.style.setProperty("display", "flex"),
																	J.style.setProperty("flex-direction", "row"),
																	J.style.setProperty("align-items", "center"),
																	J.style.setProperty("gap", "0.25rem"),
																	W.style.setProperty("font-size", "0.8rem"),
																	W.style.setProperty("height", "1rem"),
																	W.style.setProperty("max-width", "100%"),
																	(0, C.insert)(
																		W,
																		(0, d.createComponent)(r.Show, {
																			get when() {
																				return B === h.MembershipType.FREE;
																			},
																			get children() {
																				const _ = p();
																				return (
																					(0, C.insert)(
																						_,
																						(0, d.createComponent)(r.Show, {
																							get when() {
																								return R.spaceBelow !== !1;
																							},
																							get fallback() {
																								return "Consider upgrading to get fast access.";
																							},
																							children:
																								"During times of high demand, free users are given slower requests. Consider upgrading to get fast access.",
																						}),
																					),
																					_
																				);
																			},
																		}),
																		null,
																	),
																	(0, C.insert)(
																		W,
																		(0, d.createComponent)(r.Show, {
																			get when() {
																				return B !== h.MembershipType.FREE;
																			},
																			get children() {
																				const _ = p();
																				return (
																					(0, C.insert)(
																						_,
																						(0, d.createComponent)(r.Show, {
																							get when() {
																								return R.spaceBelow !== !1;
																							},
																							get fallback() {
																								return "You have reached your included limit.";
																							},
																							children:
																								"You have reached your included limit, so subsequent requests will be slow. You can get more fast requests with usage-based pricing.",
																						}),
																					),
																					_
																				);
																			},
																		}),
																		null,
																	),
																	(0, C.insert)(
																		Y,
																		(() => {
																			const _ = (0, m.memo)(() => !R.isLoading);
																			return () => _() && ". ";
																		})(),
																		null,
																	),
																	(0, C.insert)(
																		J,
																		(0, d.createComponent)(r.Show, {
																			get when() {
																				return R.isLoading;
																			},
																			get children() {
																				return (0, d.createComponent)(c.$C$b, {
																					get show() {
																						return U();
																					},
																				});
																			},
																		}),
																		null,
																	),
																	ne.style.setProperty("opacity", "0.75"),
																	(0, C.insert)(
																		ne,
																		(0, d.createComponent)(r.Show, {
																			get when() {
																				return R.isLoading;
																			},
																			get children() {
																				return [
																					(0, d.createComponent)(r.Show, {
																						get when() {
																							return (
																								R.queuePositionResponse
																									?.secondsLeftToWait !== void 0
																							);
																						},
																						get children() {
																							return [
																								"Wait time: approximately",
																								" ",
																								(0, m.memo)(
																									() =>
																										R.queuePositionResponse
																											?.secondsLeftToWait,
																								),
																								" ",
																								"second",
																								(0, m.memo)(() =>
																									R.queuePositionResponse
																										?.secondsLeftToWait !==
																										void 0 &&
																									R.queuePositionResponse
																										?.secondsLeftToWait !== 1
																										? "s"
																										: "",
																								),
																								".",
																								" ",
																							];
																						},
																					}),
																					(0, d.createComponent)(r.Show, {
																						get when() {
																							return (
																								R.queuePositionResponse
																									?.newQueuePosition !== void 0
																							);
																						},
																						get children() {
																							return [
																								"Queue position:",
																								" ",
																								(0, m.memo)(
																									() =>
																										R.queuePositionResponse
																											?.newQueuePosition,
																								),
																								".",
																								" ",
																							];
																						},
																					}),
																				];
																			},
																		}),
																	),
																	ee.style.setProperty("opacity", "0.75"),
																	(0, C.insert)(
																		ee,
																		(0, d.createComponent)(r.Switch, {
																			get children() {
																				return [
																					(0, d.createComponent)(r.Match, {
																						get when() {
																							return R.queuePositionResponse
																								?.hitHardLimit;
																						},
																						get children() {
																							return [
																								"Monthly hard limit reached.",
																								" ",
																								(() => {
																									const _ = o();
																									return (
																										_.addEventListener(
																											"click",
																											() => {
																												O.reactiveStorageService.setNonPersistentStorage(
																													"showUsageBasedPricingModal",
																													R
																														.queuePositionResponse
																														?.usageEventDetails ??
																														"justshow",
																												);
																											},
																										),
																										_.style.setProperty(
																											"display",
																											"inline",
																										),
																										_.style.setProperty(
																											"color",
																											"var(--vscode-textLink-foreground)",
																										),
																										_.style.setProperty(
																											"cursor",
																											"pointer",
																										),
																										_
																									);
																								})(),
																							];
																						},
																					}),
																					(0, d.createComponent)(r.Match, {
																						get when() {
																							return R.queuePositionResponse
																								?.couldEnableUsageBasedPricingToSkip;
																						},
																						get children() {
																							const _ = f();
																							return (
																								_.addEventListener("click", V),
																								_.style.setProperty(
																									"display",
																									"inline",
																								),
																								_.style.setProperty(
																									"color",
																									"var(--vscode-textLink-foreground)",
																								),
																								_.style.setProperty(
																									"cursor",
																									"pointer",
																								),
																								_
																							);
																						},
																					}),
																					(0, d.createComponent)(r.Match, {
																						get when() {
																							return R.queuePositionResponse
																								?.customLink;
																						},
																						children: (_) =>
																							(() => {
																								const te = v();
																								return (
																									te.addEventListener(
																										"click",
																										() => {
																											try {
																												let Q = a.URI.parse(
																													_().address,
																												);
																												O.openerService.open(
																													Q,
																													{
																														fromUserGesture: !0,
																													},
																												);
																											} catch (Q) {
																												console.error(
																													"error in slow pool component",
																													Q,
																												);
																											}
																										},
																									),
																									te.style.setProperty(
																										"display",
																										"inline",
																									),
																									te.style.setProperty(
																										"color",
																										"var(--vscode-textLink-foreground)",
																									),
																									te.style.setProperty(
																										"cursor",
																										"pointer",
																									),
																									(0, C.insert)(
																										te,
																										() => _().message,
																									),
																									te
																								);
																							})(),
																					}),
																				];
																			},
																		}),
																	),
																	(0, E.effect)(
																		(_) => {
																			const te =
																					R.spaceBelow === !1
																						? "nowrap"
																						: void 0,
																				Q = n.ThemeIcon.asClassName(g.$ak.info);
																			return (
																				te !== _._v$ &&
																					((_._v$ = te) != null
																						? W.style.setProperty(
																								"white-space",
																								te,
																							)
																						: W.style.removeProperty(
																								"white-space",
																							)),
																				Q !== _._v$2 &&
																					(0, w.className)(X, (_._v$2 = Q)),
																				_
																			);
																		},
																		{ _v$: void 0, _v$2: void 0 },
																	),
																	K
																);
															},
														}),
														(0, d.createComponent)(r.Show, {
															get when() {
																return R.conciseMessage;
															},
															get children() {
																const K = s(),
																	J = K.firstChild,
																	W = J.firstChild,
																	X = W.nextSibling,
																	Y = X.nextSibling,
																	ie = Y.firstChild,
																	ne = ie.nextSibling,
																	ee = ne.nextSibling,
																	_ = Y.nextSibling;
																return (
																	K.style.setProperty("display", "flex"),
																	K.style.setProperty(
																		"flex-direction",
																		"column",
																	),
																	X.style.setProperty("width", "15px"),
																	X.style.setProperty(
																		"display",
																		"inline-block",
																	),
																	(0, C.insert)(
																		X,
																		(0, d.createComponent)(c.$C$b, {
																			show: !0,
																		}),
																	),
																	Y.style.setProperty(
																		"display",
																		"inline-block",
																	),
																	(0, C.insert)(
																		Y,
																		() =>
																			R.queuePositionResponse
																				?.secondsLeftToWait ??
																			R.queuePositionResponse?.newQueuePosition,
																		ne,
																	),
																	_.addEventListener("click", () => {
																		O.reactiveStorageService.setNonPersistentStorage(
																			"showUsageBasedPricingModal",
																			R.queuePositionResponse
																				?.usageEventDetails ?? "justshow",
																		);
																	}),
																	_.style.setProperty("display", "inline"),
																	_.style.setProperty(
																		"color",
																		"var(--vscode-textLink-foreground)",
																	),
																	_.style.setProperty("cursor", "pointer"),
																	(0, E.effect)(() =>
																		`${String(R.queuePositionResponse?.secondsLeftToWait ?? R.queuePositionResponse?.newQueuePosition).length * 10 + 10}px` !=
																		null
																			? Y.style.setProperty(
																					"width",
																					`${String(R.queuePositionResponse?.secondsLeftToWait ?? R.queuePositionResponse?.newQueuePosition).length * 10 + 10}px`,
																				)
																			: Y.style.removeProperty("width"),
																	),
																	K
																);
															},
														}),
													];
												},
											}),
											(0, d.createComponent)(r.Match, {
												when: !0,
												get children() {
													const K = T();
													return (
														K.style.setProperty("display", "flex"),
														K.style.setProperty("flex-direction", "row"),
														K.style.setProperty("align-items", "center"),
														K.style.setProperty("gap", "0.25rem"),
														(0, C.insert)(
															K,
															(0, d.createComponent)(r.Show, {
																get when() {
																	return !R.conciseMessage;
																},
																get children() {
																	return [
																		(() => {
																			const J = l(),
																				W = J.firstChild;
																			return (
																				J.style.setProperty(
																					"font-size",
																					"0.8rem",
																				),
																				J.style.setProperty("height", "1rem"),
																				J.style.setProperty(
																					"max-width",
																					"100%",
																				),
																				(0, C.insert)(
																					J,
																					(0, d.createComponent)(r.Show, {
																						get when() {
																							return (
																								B === h.MembershipType.FREE
																							);
																						},
																						get children() {
																							const X = p();
																							return (
																								(0, C.insert)(
																									X,
																									(0, d.createComponent)(
																										r.Show,
																										{
																											get when() {
																												return (
																													R.spaceBelow !== !1
																												);
																											},
																											get fallback() {
																												return "Consider upgrading to get fast access.";
																											},
																											children:
																												"During times of high demand, free users are given slower access to premium models. Consider upgrading to get fast access.",
																										},
																									),
																								),
																								X
																							);
																						},
																					}),
																					null,
																				),
																				(0, C.insert)(
																					J,
																					(0, d.createComponent)(r.Show, {
																						get when() {
																							return (
																								B !== h.MembershipType.FREE
																							);
																						},
																						get children() {
																							const X = p();
																							return (
																								(0, C.insert)(
																									X,
																									(0, d.createComponent)(
																										r.Show,
																										{
																											get when() {
																												return (
																													R.spaceBelow !== !1
																												);
																											},
																											get fallback() {
																												return "Your account is above its fast premium model access quota for the month.";
																											},
																											children:
																												"Your account is above its fast premium model (GPT-4/GPT-4o/Claude 3.5 Sonnet) request quota for the month. During times of high demand, requests will be delayed.",
																										},
																									),
																								),
																								X
																							);
																						},
																					}),
																					null,
																				),
																				(0, E.effect)(
																					(X) => {
																						const Y =
																								R.spaceBelow === !1
																									? "nowrap"
																									: void 0,
																							ie = n.ThemeIcon.asClassName(
																								g.$ak.info,
																							);
																						return (
																							Y !== X._v$3 &&
																								((X._v$3 = Y) != null
																									? J.style.setProperty(
																											"white-space",
																											Y,
																										)
																									: J.style.removeProperty(
																											"white-space",
																										)),
																							ie !== X._v$4 &&
																								(0, w.className)(
																									W,
																									(X._v$4 = ie),
																								),
																							X
																						);
																					},
																					{ _v$3: void 0, _v$4: void 0 },
																				),
																				J
																			);
																		})(),
																		(() => {
																			const J = y(),
																				W = J.firstChild;
																			return (
																				(0, C.insert)(
																					J,
																					(() => {
																						const X = (0, m.memo)(
																							() => !R.isLoading,
																						);
																						return () => X() && ". ";
																					})(),
																					null,
																				),
																				J
																			);
																		})(),
																		(() => {
																			const J = v();
																			return (
																				J.style.setProperty("opacity", "0.75"),
																				(0, C.insert)(
																					J,
																					(0, d.createComponent)(r.Show, {
																						get when() {
																							return (
																								R.isLoading &&
																								R.queuePositionResponse
																									?.position !== -1
																							);
																						},
																						get children() {
																							return [
																								"Position ",
																								(0, m.memo)(
																									() =>
																										R.queuePositionResponse
																											?.position,
																								),
																								".",
																								" ",
																							];
																						},
																					}),
																					null,
																				),
																				(0, C.insert)(
																					J,
																					(0, d.createComponent)(r.Show, {
																						get when() {
																							return B === h.MembershipType.PRO;
																						},
																						get fallback() {
																							return (0, d.createComponent)(
																								r.Show,
																								{
																									get when() {
																										return (
																											B ===
																											h.MembershipType
																												.ENTERPRISE
																										);
																									},
																									get fallback() {
																										return [
																											(() => {
																												const W = k();
																												return (
																													(0,
																													i.addEventListener)(
																														W,
																														"click",
																														O
																															.cursorAuthenticationService
																															.settings,
																													),
																													W.style.setProperty(
																														"display",
																														"inline",
																													),
																													W.style.setProperty(
																														"color",
																														"var(--vscode-textLink-foreground)",
																													),
																													W.style.setProperty(
																														"cursor",
																														"pointer",
																													),
																													W
																												);
																											})(),
																											" ",
																											"to get fast access.",
																										];
																									},
																									get children() {
																										return (0,
																										d.createComponent)(r.Show, {
																											get when() {
																												return z();
																											},
																											get fallback() {
																												return [
																													"Add fast requests",
																													" ",
																													(() => {
																														const W = S();
																														return (
																															(0,
																															i.addEventListener)(
																																W,
																																"click",
																																O
																																	.cursorAuthenticationService
																																	.settings,
																															),
																															W.style.setProperty(
																																"display",
																																"inline",
																															),
																															W.style.setProperty(
																																"color",
																																"var(--vscode-textLink-foreground)",
																															),
																															W.style.setProperty(
																																"cursor",
																																"pointer",
																															),
																															W
																														);
																													})(),
																													".",
																												];
																											},
																											get children() {
																												return [
																													"Enable",
																													" ",
																													(() => {
																														const W = P();
																														return (
																															W.addEventListener(
																																"click",
																																V,
																															),
																															W.style.setProperty(
																																"display",
																																"inline",
																															),
																															W.style.setProperty(
																																"color",
																																"var(--vscode-textLink-foreground)",
																															),
																															W.style.setProperty(
																																"cursor",
																																"pointer",
																															),
																															W
																														);
																													})(),
																												];
																											},
																										});
																									},
																								},
																							);
																						},
																						get children() {
																							return (0, d.createComponent)(
																								r.Show,
																								{
																									get when() {
																										return z();
																									},
																									get fallback() {
																										return [
																											"If you'd like, you can add more",
																											" ",
																											(() => {
																												const W = L();
																												return (
																													W.addEventListener(
																														"click",
																														() => {
																															R.setIsUpsellFastRequestsShowing(
																																!0,
																															);
																														},
																													),
																													W.style.setProperty(
																														"display",
																														"inline",
																													),
																													W.style.setProperty(
																														"color",
																														"var(--vscode-textLink-foreground)",
																													),
																													W.style.setProperty(
																														"cursor",
																														"pointer",
																													),
																													W
																												);
																											})(),
																											".",
																										];
																									},
																									get children() {
																										return [
																											"If you'd like, you can enable",
																											" ",
																											(() => {
																												const W = $();
																												return (
																													W.addEventListener(
																														"click",
																														V,
																													),
																													W.style.setProperty(
																														"display",
																														"inline",
																													),
																													W.style.setProperty(
																														"color",
																														"var(--vscode-textLink-foreground)",
																													),
																													W.style.setProperty(
																														"cursor",
																														"pointer",
																													),
																													W
																												);
																											})(),
																											".",
																										];
																									},
																								},
																							);
																						},
																					}),
																					null,
																				),
																				J
																			);
																		})(),
																		(0, d.createComponent)(r.Show, {
																			get when() {
																				return R.isLoading;
																			},
																			get children() {
																				return (0, d.createComponent)(c.$C$b, {
																					get show() {
																						return U();
																					},
																				});
																			},
																		}),
																	];
																},
															}),
															null,
														),
														(0, C.insert)(
															K,
															(0, d.createComponent)(r.Show, {
																get when() {
																	return R.conciseMessage;
																},
																get children() {
																	const J = I(),
																		W = J.firstChild,
																		X = W.firstChild;
																	return (
																		(0, C.insert)(
																			W,
																			(0, d.createComponent)(r.Show, {
																				get when() {
																					return B === h.MembershipType.PRO;
																				},
																				get fallback() {
																					return (0, d.createComponent)(
																						r.Show,
																						{
																							get when() {
																								return (
																									B ===
																									h.MembershipType.ENTERPRISE
																								);
																							},
																							get fallback() {
																								return [
																									"upgrade",
																									" ",
																									(() => {
																										const Y = S();
																										return (
																											(0, i.addEventListener)(
																												Y,
																												"click",
																												O
																													.cursorAuthenticationService
																													.settings,
																											),
																											Y.style.setProperty(
																												"display",
																												"inline",
																											),
																											Y.style.setProperty(
																												"color",
																												"var(--vscode-textLink-foreground)",
																											),
																											Y.style.setProperty(
																												"cursor",
																												"pointer",
																											),
																											Y
																										);
																									})(),
																									" ",
																								];
																							},
																							get children() {
																								return (0, d.createComponent)(
																									r.Show,
																									{
																										get when() {
																											return z();
																										},
																										get fallback() {
																											return [
																												"add fast requests",
																												" ",
																												(() => {
																													const Y = S();
																													return (
																														(0,
																														i.addEventListener)(
																															Y,
																															"click",
																															O
																																.cursorAuthenticationService
																																.settings,
																														),
																														Y.style.setProperty(
																															"display",
																															"inline",
																														),
																														Y.style.setProperty(
																															"color",
																															"var(--vscode-textLink-foreground)",
																														),
																														Y.style.setProperty(
																															"cursor",
																															"pointer",
																														),
																														Y
																													);
																												})(),
																												".",
																											];
																										},
																										get children() {
																											return [
																												"get fast access",
																												" ",
																												(() => {
																													const Y = S();
																													return (
																														Y.addEventListener(
																															"click",
																															V,
																														),
																														Y.style.setProperty(
																															"display",
																															"inline",
																														),
																														Y.style.setProperty(
																															"color",
																															"var(--vscode-textLink-foreground)",
																														),
																														Y.style.setProperty(
																															"cursor",
																															"pointer",
																														),
																														Y
																													);
																												})(),
																											];
																										},
																									},
																								);
																							},
																						},
																					);
																				},
																				get children() {
																					return (0, d.createComponent)(
																						r.Show,
																						{
																							get when() {
																								return z();
																							},
																							get fallback() {
																								return [
																									"add",
																									" ",
																									(() => {
																										const Y = L();
																										return (
																											Y.addEventListener(
																												"click",
																												() => {
																													R.setIsUpsellFastRequestsShowing(
																														!0,
																													);
																												},
																											),
																											Y.style.setProperty(
																												"display",
																												"inline",
																											),
																											Y.style.setProperty(
																												"color",
																												"var(--vscode-textLink-foreground)",
																											),
																											Y.style.setProperty(
																												"cursor",
																												"pointer",
																											),
																											Y
																										);
																									})(),
																									".",
																								];
																							},
																							get children() {
																								return [
																									"get fast access",
																									" ",
																									(() => {
																										const Y = S();
																										return (
																											Y.addEventListener(
																												"click",
																												() => {
																													O
																														.reactiveStorageService
																														.applicationUserPersistentStorage
																														.aiSettings
																														.isUsagePricingEnabled
																														? ((0, e.$k_b)(O),
																															G())
																														: V();
																												},
																											),
																											Y.style.setProperty(
																												"display",
																												"inline",
																											),
																											Y.style.setProperty(
																												"color",
																												"var(--vscode-textLink-foreground)",
																											),
																											Y.style.setProperty(
																												"cursor",
																												"pointer",
																											),
																											Y
																										);
																									})(),
																								];
																							},
																						},
																					);
																				},
																			}),
																			null,
																		),
																		(0, C.insert)(
																			J,
																			(0, d.createComponent)(c.$C$b, {
																				show: !0,
																			}),
																			null,
																		),
																		J
																	);
																},
															}),
															null,
														),
														K
													);
												},
											}),
										];
									},
								});
							},
						});
					};
				e.$h_b = D;
				const M = async (R) => {
					const { isUsagePricingEnabled: O } = await (0, e.$j_b)(R);
					R.reactiveStorageService.setApplicationUserPersistentStorage(
						"aiSettings",
						{ isUsagePricingEnabled: O },
					);
				};
				e.$i_b = M;
				const N = async (R) => {
					try {
						const O = await R.cursorAuthenticationService.dashboardClient(),
							B =
								R.cursorAuthenticationService.membershipType() ===
								h.MembershipType.ENTERPRISE
									? R.reactiveStorageService.applicationUserPersistentStorage
											.aiSettings.teamIds
									: [],
							U = await O.getUsageBasedPremiumRequests({ teamId: B?.at(0) });
						return (
							await (0, e.$k_b)(R),
							{
								usageBasedPremiumRequestsEnabled: !0,
								isUsagePricingEnabled: U.usageBasedPremiumRequests,
							}
						);
					} catch {
						return {
							usageBasedPremiumRequestsEnabled: !1,
							isUsagePricingEnabled: !1,
						};
					}
				};
				e.$j_b = N;
				const A = async (R) => {
					const O = await R.cursorAuthenticationService.dashboardClient(),
						B =
							R.cursorAuthenticationService.membershipType() ===
							h.MembershipType.ENTERPRISE
								? R.reactiveStorageService.applicationUserPersistentStorage
										.aiSettings.teamIds
								: [],
						U = await O.getHardLimit({ teamId: B?.at(0) });
					return (
						R.reactiveStorageService.setApplicationUserPersistentStorage(
							"aiSettings",
							{ usageHardLimit: U.hardLimit },
						),
						U.hardLimit
					);
				};
				e.$k_b = A;
			},
		),
		define(
			de[1072],
			he([1, 0, 2, 2, 2, 2, 2, 13, 36, 134, 340, 147, 401, 863, 58]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$l_b = f),
					(e.$m_b = b);
				const g = (0, t.template)(
						"<div><div>Confirm to enable usage-based pricing with a $20 monthly limit.</div><div>",
					),
					p = (0, t.template)(
						"<div><div>Or set a  <span>custom limit</span>.</div><div>",
					),
					o = (0, t.template)("<br>");
				function f(s) {
					const l = (0, m.$odc)(),
						y = async () => {
							try {
								const v = await l.cursorAuthenticationService.dashboardClient(),
									S =
										l.cursorAuthenticationService.membershipType() ===
										r.MembershipType.ENTERPRISE
											? l.reactiveStorageService
													.applicationUserPersistentStorage.aiSettings.teamIds
											: [];
								await v.setHardLimit({
									teamId: S?.at(0),
									hardLimit: 20,
									noUsageBasedAllowed: !1,
								}),
									await (0, c.$i_b)(l),
									l.notificationService.info(
										"Usage-based pricing enabled successfully. You can manage this setting at cursor.com/settings",
									),
									s.setIsUpsellingUsageBasedPricing(!1);
							} catch (v) {
								let S =
									"Failed to enable usage-based pricing. Please try again.";
								if (v instanceof u.ConnectError) {
									const I = (0, h.$X6b)(v);
									I?.details && (S = `${I.details.title} ${I.details.detail}`);
								}
								l.notificationService.error(S),
									s.setIsUpsellingUsageBasedPricing(!1);
							}
						},
						$ = (0, d.createMemo)(() =>
							s.isCompact ? { padding: "0px 4px", "font-size": "10px" } : {},
						);
					return (() => {
						const v = g(),
							S = v.firstChild,
							I = S.nextSibling;
						return (
							(0, E.insert)(
								I,
								(0, C.createComponent)(a.$rdc, {
									onClick: () => s.setIsUpsellingUsageBasedPricing(!1),
									title: "Cancel",
									type: "secondary",
									get style() {
										return { "font-size": "12px", padding: "4px 8px", ...$() };
									},
								}),
								null,
							),
							(0, E.insert)(
								I,
								(0, C.createComponent)(a.$rdc, {
									onClick: y,
									title: "Confirm",
									get style() {
										return { "font-size": "12px", padding: "4px 8px", ...$() };
									},
								}),
								null,
							),
							(0, w.effect)(
								(T) => {
									const P = {
											padding: "8px",
											display: "flex",
											"flex-direction": "column",
											gap: "8px",
											...(s.isCompact && {
												"flex-direction": "row",
												"justify-content": "space-between",
												padding: "0px",
												"padding-left": "8px",
												"border-left":
													"2px solid var(--vscode-textBlockQuote-border)",
											}),
										},
										k = {
											"font-size": "12px",
											color: "var(--vscode-editor-foreground)",
											...(s.isCompact && { "font-size": "11px" }),
										},
										L = {
											display: "flex",
											"justify-content": "flex-end",
											gap: "6px",
											...(s.isCompact && { gap: "4px" }),
										};
									return (
										(T._v$ = (0, i.style)(v, P, T._v$)),
										(T._v$2 = (0, i.style)(S, k, T._v$2)),
										(T._v$3 = (0, i.style)(I, L, T._v$3)),
										T
									);
								},
								{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
							),
							v
						);
					})();
				}
				function b(s) {
					const l = (0, m.$odc)(),
						y = (0, d.createMemo)(
							() =>
								l.reactiveStorageService.applicationUserPersistentStorage
									.aiSettings.usageHardLimit,
						),
						$ = async (S) => {
							try {
								const I = await l.cursorAuthenticationService.dashboardClient(),
									T =
										l.cursorAuthenticationService.membershipType() ===
										r.MembershipType.ENTERPRISE
											? l.reactiveStorageService
													.applicationUserPersistentStorage.aiSettings.teamIds
											: [];
								if (S)
									await I.setHardLimit({
										teamId: T?.at(0),
										hardLimit: S * 2,
										noUsageBasedAllowed: !1,
									}),
										l.notificationService.info(
											`Monthly limit increased to $${S * 2}. You can manage this setting at cursor.com/settings`,
										);
								else {
									const P = await (0, c.$k_b)(l);
									await I.setHardLimit({
										teamId: T?.at(0),
										hardLimit: P + 20,
										noUsageBasedAllowed: !1,
									}),
										l.notificationService.info(
											"Monthly limit increased by $20. You can manage this setting at cursor.com/settings",
										);
								}
								s.setIsUpsellingHardLimit(!1);
							} catch (I) {
								let T = "Failed to increase usage limit. Please try again.";
								if (I instanceof u.ConnectError) {
									const P = (0, h.$X6b)(I);
									P?.details && (T = `${P.details.title} ${P.details.detail}`);
								}
								l.notificationService.error(T), s.setIsUpsellingHardLimit(!1);
							} finally {
								(0, c.$k_b)(l);
							}
						},
						v = (0, d.createMemo)(() =>
							s.isCompact ? { padding: "0px 4px", "font-size": "10px" } : {},
						);
					return (() => {
						const S = p(),
							I = S.firstChild,
							T = I.firstChild,
							P = T.nextSibling,
							k = I.nextSibling;
						return (
							(0, E.insert)(
								I,
								(0, C.createComponent)(d.Show, {
									get when() {
										return y();
									},
									fallback:
										"Confirm to increase your monthly limit by another $20.",
									children: (L) =>
										`Confirm to increase your monthly limit from $${L()} to $${L() * 2}.`,
								}),
								T,
							),
							(0, E.insert)(
								I,
								(0, C.createComponent)(d.Show, {
									get when() {
										return !s.isCompact;
									},
									get fallback() {
										return o();
									},
									children: " ",
								}),
								T,
							),
							P.addEventListener("click", () => {
								l.commandService.executeCommand(n.$YW),
									s.setIsUpsellingHardLimit(!1);
							}),
							P.style.setProperty("color", "var(--vscode-textLink-foreground)"),
							P.style.setProperty("cursor", "pointer"),
							(0, E.insert)(
								k,
								(0, C.createComponent)(a.$rdc, {
									onClick: () => s.setIsUpsellingHardLimit(!1),
									title: "Cancel",
									type: "secondary",
									get style() {
										return { "font-size": "12px", padding: "4px 8px", ...v() };
									},
								}),
								null,
							),
							(0, E.insert)(
								k,
								(0, C.createComponent)(a.$rdc, {
									onClick: () => $(y()),
									title: "Confirm",
									get style() {
										return { "font-size": "12px", padding: "4px 8px", ...v() };
									},
								}),
								null,
							),
							(0, w.effect)(
								(L) => {
									const D = {
											padding: "8px",
											display: "flex",
											"flex-direction": "column",
											gap: "8px",
											...(s.isCompact && {
												padding: "0px",
												"padding-left": "8px",
												"border-left":
													"2px solid var(--vscode-textBlockQuote-border)",
												"flex-direction": "row",
												"justify-content": "space-between",
											}),
										},
										M = {
											"font-size": "12px",
											color: "var(--vscode-editor-foreground)",
											...(s.isCompact && { "font-size": "11px" }),
										},
										N = {
											display: "flex",
											"justify-content": "flex-end",
											gap: "6px",
											...(s.isCompact && {
												gap: "4px",
												"align-items": "center",
											}),
										};
									return (
										(L._v$4 = (0, i.style)(S, D, L._v$4)),
										(L._v$5 = (0, i.style)(I, M, L._v$5)),
										(L._v$6 = (0, i.style)(k, N, L._v$6)),
										L
									);
								},
								{ _v$4: void 0, _v$5: void 0, _v$6: void 0 },
							),
							S
						);
					})();
				}
			},
		),
		define(
			de[4250],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 147, 58, 499, 534, 863, 242, 1072, 36,
				859, 45, 385, 1137,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$tdc = P);
				const l = (0, t.template)("<div>Finding other files to edit"),
					y = (0, t.template)("<div>"),
					$ = (0, t.template)("<div>Editing files"),
					v = (0, t.template)("<div>Thinking"),
					S = (0, t.template)("<span>"),
					I = (0, t.template)("<div><div>"),
					T = (F) =>
						(0, m.createComponent)(u.$rdc, {
							get title() {
								return (
									(F.isFocused ? "\u2318\u23CE " : "") +
									(F.currentModel.length < 10
										? "in background"
										: F.currentModel.length < 15
											? "background"
											: "in bg")
								);
							},
							onClick: () => F.onImplementInBackgroundSubmit(),
							type: "secondary",
							get disabled() {
								return F.plainText.length === 0;
							},
							style: { "margin-left": "8px" },
						});
				function P(F) {
					const x = (0, o.$odc)(),
						H = (0, c.$n8b)(),
						q = () => {
							const ee = H.nonPersistentStorage.inlineDiffs,
								te = H.nonPersistentStorage.promptBars.find(
									(Q) => Q.id === F.id,
								)?.diffId;
							return ee.find((Q) => Q.id === te);
						},
						V = (0, r.createMemo)(
							() =>
								x.reactiveStorageService.applicationUserPersistentStorage
									.aiSettings.cmdKModel ??
								x.reactiveStorageService.applicationUserPersistentStorage
									.aiSettings.openAIModel ??
								b.$aAb,
						);
					let G = !1;
					const [K, J] = (0, r.createSignal)(!1),
						[W, X] = (0, r.createSignal)(!1),
						[Y, ie] = (0, r.createSignal)(!1),
						ne = (() => {
							const ee = I(),
								_ = ee.firstChild;
							return (
								ee.style.setProperty("display", "flex"),
								ee.style.setProperty("justify-content", "flex-start"),
								ee.style.setProperty("align-items", "center"),
								ee.style.setProperty("margin", "4px 0px 6px 0px"),
								(0, E.insert)(
									ee,
									(0, m.createComponent)(r.Switch, {
										get children() {
											return [
												(0, m.createComponent)(r.Match, {
													get when() {
														return (
															(0, d.memo)(() => !F.generating)() &&
															q() === void 0
														);
													},
													get children() {
														return (0, m.createComponent)(r.Show, {
															get when() {
																return F.plainText.length > 0;
															},
															get fallback() {
																return (0, m.createComponent)(
																	k,
																	(0, C.mergeProps)(F, { vsContext: x }),
																);
															},
															get children() {
																return [
																	(0, m.createComponent)(L, F),
																	(0, m.createComponent)(M, F),
																	(0, m.createComponent)(r.Show, {
																		get when() {
																			return (
																				x.reactiveStorageService
																					.applicationUserPersistentStorage
																					.hallucinatedFunctionsEnabled === !0
																			);
																		},
																		get children() {
																			return (0, m.createComponent)(
																				T,
																				(0, C.mergeProps)(F, {
																					get currentModel() {
																						return V();
																					},
																				}),
																			);
																		},
																	}),
																	(0, m.createComponent)(r.Show, {
																		get when() {
																			return (
																				x.reactiveStorageService
																					.applicationUserPersistentStorage
																					.aiSettings.openAIModel !== null &&
																				c.$k8b.includes(
																					x.reactiveStorageService
																						.applicationUserPersistentStorage
																						.aiSettings.openAIModel,
																				) &&
																				G
																			);
																		},
																		get children() {
																			return (0, m.createComponent)(N, F);
																		},
																	}),
																	(0, m.createComponent)(r.Show, {
																		get when() {
																			return F.fastModeEnabled;
																		},
																		get children() {
																			return (0, m.createComponent)(A, F);
																		},
																	}),
																];
															},
														});
													},
												}),
												(0, m.createComponent)(r.Match, {
													get when() {
														return F.generating;
													},
													get children() {
														return [
															(0, m.createComponent)(r.Show, {
																get when() {
																	return (
																		F.multiFileEditingState ===
																		c.MultiFileEditingState.WaitingForUserInput
																	);
																},
																get children() {
																	return (0, m.createComponent)(U, F);
																},
															}),
															(0, m.createComponent)(
																z,
																(0, C.mergeProps)(F, { vsContext: x }),
															),
															(() => {
																const te = S();
																return (
																	te.style.setProperty("margin-left", "3px"),
																	te.style.setProperty("padding", "0px 3px"),
																	te.style.setProperty(
																		"color",
																		"var(--vscode-input-placeholderForeground)",
																	),
																	(0, E.insert)(
																		te,
																		(0, m.createComponent)(r.Switch, {
																			get fallback() {
																				return [
																					(0, m.createComponent)(n.$h_b, {
																						get queuePositionResponse() {
																							return F.queuePositionResponse;
																						},
																						hideDotsLoading: !1,
																						isLoading: !0,
																						spaceBelow: !0,
																						statusMessages: void 0,
																						conciseMessage: !0,
																						setIsUpsellFastRequestsShowing: J,
																						setIsUpsellingUsageBasedPricing: X,
																						setIsUpsellingHardLimit: ie,
																					}),
																					(0, m.createComponent)(r.Show, {
																						get when() {
																							return K();
																						},
																						get children() {
																							return (0, m.createComponent)(
																								g.$E$b,
																								{
																									setIsUpsellFastRequestsShowing:
																										J,
																									conciseMessage: !0,
																								},
																							);
																						},
																					}),
																				];
																			},
																			get children() {
																				return [
																					(0, m.createComponent)(r.Match, {
																						get when() {
																							return (
																								G &&
																								F.multiFileEditingState ===
																									c.MultiFileEditingState
																										.FindingLocations
																							);
																						},
																						get children() {
																							const Q = l(),
																								Z = Q.firstChild;
																							return (
																								Q.style.setProperty(
																									"color",
																									"var(--vscode-input-placeholderForeground)",
																								),
																								Q.style.setProperty(
																									"font-size",
																									"10px",
																								),
																								(0, E.insert)(
																									Q,
																									(0, m.createComponent)(
																										g.$C$b,
																										{ show: !0 },
																									),
																									null,
																								),
																								Q
																							);
																						},
																					}),
																					(0, m.createComponent)(r.Match, {
																						get when() {
																							return (
																								F.statusUpdateMessages.length >
																								0
																							);
																						},
																						get children() {
																							const Q = y();
																							return (
																								Q.style.setProperty(
																									"color",
																									"var(--vscode-input-placeholderForeground)",
																								),
																								Q.style.setProperty(
																									"font-size",
																									"10px",
																								),
																								(0, E.insert)(
																									Q,
																									() =>
																										F.statusUpdateMessages[0],
																									null,
																								),
																								(0, E.insert)(
																									Q,
																									(0, m.createComponent)(
																										g.$C$b,
																										{ show: !0 },
																									),
																									null,
																								),
																								Q
																							);
																						},
																					}),
																					(0, m.createComponent)(r.Match, {
																						get when() {
																							return (
																								G &&
																								F.multiFileEditingState ===
																									c.MultiFileEditingState
																										.WaitingForUserInput
																							);
																						},
																						get children() {
																							return y();
																						},
																					}),
																					(0, m.createComponent)(r.Match, {
																						get when() {
																							return (
																								G &&
																								F.multiFileEditingState ===
																									c.MultiFileEditingState
																										.Editing
																							);
																						},
																						get children() {
																							const Q = $(),
																								Z = Q.firstChild;
																							return (
																								Q.style.setProperty(
																									"color",
																									"var(--vscode-input-placeholderForeground)",
																								),
																								Q.style.setProperty(
																									"font-size",
																									"10px",
																								),
																								(0, E.insert)(
																									Q,
																									(0, m.createComponent)(
																										g.$C$b,
																										{ show: !0 },
																									),
																									null,
																								),
																								Q
																							);
																						},
																					}),
																					(0, m.createComponent)(r.Match, {
																						get when() {
																							return (
																								G &&
																								F.multiFileEditingState ===
																									c.MultiFileEditingState
																										.SelectingFilesWithChainOfThought
																							);
																						},
																						get children() {
																							const Q = v(),
																								Z = Q.firstChild;
																							return (
																								Q.style.setProperty(
																									"color",
																									"var(--vscode-input-placeholderForeground)",
																								),
																								Q.style.setProperty(
																									"font-size",
																									"10px",
																								),
																								(0, E.insert)(
																									Q,
																									(0, m.createComponent)(
																										g.$C$b,
																										{ show: !0 },
																									),
																									null,
																								),
																								Q
																							);
																						},
																					}),
																				];
																			},
																		}),
																	),
																	te
																);
															})(),
														];
													},
												}),
												(0, m.createComponent)(r.Match, {
													get when() {
														return (0, d.memo)(() => !F.generating)() && q();
													},
													get children() {
														return (0, m.createComponent)(r.Show, {
															get when() {
																return F.plainText.length > 0;
															},
															get fallback() {
																return [
																	(0, m.createComponent)(
																		R,
																		(0, C.mergeProps)(F, { vsContext: x }),
																	),
																	(0, m.createComponent)(
																		O,
																		(0, C.mergeProps)(F, { vsContext: x }),
																	),
																];
															},
															get children() {
																return [
																	(0, m.createComponent)(D, F),
																	(0, m.createComponent)(M, F),
																];
															},
														});
													},
												}),
											];
										},
									}),
									_,
								),
								_.style.setProperty("flex-grow", "1"),
								(0, E.insert)(
									ee,
									(0, m.createComponent)(r.Show, {
										get when() {
											return (
												F.hasStackedInputBox &&
												F.containerWidth > 350 &&
												!F.isMultiFileEditing &&
												!F.hideModelToggle
											);
										},
										get children() {
											return (0, m.createComponent)(f.$3bc, {
												style: {
													color: "var(--vscode-input-placeholderForeground)",
													opacity: 1,
												},
												get onOverwriteSelectBehavior() {
													return F.onOverwriteModelSelect;
												},
												additionalModels: [],
												specificModelField: "cmd-k",
												get setTriggerFn() {
													return F.setTriggerFn;
												},
												get buttonHint() {
													return F.buttonHint;
												},
												get onClose() {
													return F.onModelToggleClose;
												},
											});
										},
									}),
									null,
								),
								(0, E.insert)(
									ee,
									(0, m.createComponent)(r.Show, {
										get when() {
											return (
												(0, d.memo)(
													() =>
														!!(
															!F.readonly &&
															(!F.isMultiFileEditing || F.hasStackedInputBox)
														),
												)() &&
												!(!F.generating && q() && F.plainText.length === 0)
											);
										},
										get children() {
											return (0, m.createComponent)(
												B,
												(0, C.mergeProps)(F, { vsContext: x }),
											);
										},
									}),
									null,
								),
								(0, w.effect)(() =>
									(0, i.className)(
										ee,
										"inline-prompt-button-area" +
											(q() !== void 0 || F.plainText.length > 0
												? " inline-prompt-button-area-with-primary"
												: ""),
									),
								),
								ee
							);
						})();
					return [
						(0, m.createComponent)(r.Show, {
							get when() {
								return (0, d.memo)(() => !!F.generating)() && (W() || Y());
							},
							get children() {
								const ee = y();
								return (
									ee.style.setProperty("margin-top", "8px"),
									ee.style.setProperty("margin-bottom", "8px"),
									ee.style.setProperty("padding", "0px 8px"),
									(0, E.insert)(
										ee,
										(0, m.createComponent)(r.Show, {
											get when() {
												return W();
											},
											get children() {
												return (0, m.createComponent)(p.$l_b, {
													setIsUpsellingUsageBasedPricing: X,
													isCompact: !0,
												});
											},
										}),
										null,
									),
									(0, E.insert)(
										ee,
										(0, m.createComponent)(r.Show, {
											get when() {
												return Y();
											},
											get children() {
												return (0, m.createComponent)(p.$m_b, {
													setIsUpsellingHardLimit: ie,
													isCompact: !0,
												});
											},
										}),
										null,
									),
									ee
								);
							},
						}),
						ne,
					];
				}
				const k = (F) =>
						(0, m.createComponent)(u.$rdc, {
							get title() {
								return `${F.vsContext.keybindingService.lookupKeybinding(a.$RW)?.getLabel()} to close`;
							},
							get onClick() {
								return F.removePromptBar;
							},
							type: "secondary",
						}),
					L = (F) =>
						(0, m.createComponent)(u.$rdc, {
							get title() {
								return (
									(F.isFocused ? "\u23CE " : "") +
									(F.isEdit ? "Submit Edit" : "Generate")
								);
							},
							onClick: () =>
								F.onSubmit({
									fastMode: !1,
									chatMode: !1,
									editMode: c.EditMode.SingleFile,
								}),
							type: "primary",
							get disabled() {
								return F.plainText.length === 0;
							},
							style: { "margin-left": "4px" },
						}),
					D = (F) =>
						(0, m.createComponent)(u.$rdc, {
							get title() {
								return (F.isFocused ? "\u23CE " : "") + "Submit Edit";
							},
							onClick: () =>
								F.onSubmit({
									fastMode: !1,
									chatMode: !1,
									editMode: c.EditMode.SingleFile,
								}),
							type: "primary",
							extras: { style: { "margin-left": "4px" } },
						}),
					M = (F) =>
						(0, m.createComponent)(u.$rdc, {
							get title() {
								return (
									(F.isFocused ? "\u2325\u23CE " : "") +
									(F.isEdit, "quick question")
								);
							},
							onClick: () => {
								F.onSubmit({
									fastMode: !1,
									chatMode: !0,
									editMode: c.EditMode.SingleFile,
								});
							},
							type: "secondary",
							get disabled() {
								return F.plainText.length === 0;
							},
							extras: { style: { "margin-left": "8px" } },
						}),
					N = (F) =>
						(0, m.createComponent)(u.$rdc, {
							get title() {
								return (F.isFocused ? "\u2318\u23CE " : "") + "edit codebase";
							},
							onClick: () => F.onMultiFileEditSubmit(),
							type: "secondary",
							get disabled() {
								return F.plainText.length === 0;
							},
							style: { "margin-left": "4px" },
						}),
					A = (F) =>
						(0, m.createComponent)(u.$rdc, {
							get title() {
								return (
									(F.isFocused ? "\u2325\u23CE " : "") + (F.isEdit, "fast mode")
								);
							},
							onClick: () =>
								F.onSubmit({
									fastMode: !0,
									chatMode: !1,
									editMode: c.EditMode.SingleFile,
								}),
							type: "secondary",
							get disabled() {
								return F.plainText.length === 0;
							},
							extras: { style: { "margin-left": "8px" } },
						}),
					R = (F) => {
						const x = (0, c.$n8b)();
						return (0, m.createComponent)(r.Switch, {
							get fallback() {
								return (0, m.createComponent)(u.$rdc, {
									get title() {
										return `${F.vsContext.keybindingService?.lookupKeybinding(c.$97b)?.getLabel() ?? ""} Accept`;
									},
									onClick: () => {
										F.acceptCurrentDiff();
									},
									type: "primary",
									style: { "margin-left": "4px" },
								});
							},
							get children() {
								return (0, m.createComponent)(r.Match, {
									get when() {
										return x.isNotebook;
									},
									get children() {
										return [
											(0, m.createComponent)(u.$rdc, {
												get title() {
													return `${F.vsContext.keybindingService?.lookupKeybinding(c.$97b)?.getLabel() ?? ""} Accept`;
												},
												onClick: () => {
													F.acceptCurrentDiff();
												},
												type: "primary",
												style: { "margin-left": "4px" },
											}),
											(0, m.createComponent)(u.$rdc, {
												title: "Accept & Run",
												onClick: () => {
													F.acceptCurrentDiff(),
														x.runCurrentlyActiveCell(F.vsContext.editorService);
												},
												type: "secondary",
												style: { "margin-left": "8px" },
											}),
										];
									},
								});
							},
						});
					},
					O = (F) => {
						const x = (0, s.$5$b)(c.$_7b, {
							useDefaultKeybindingEvenIfNotActive: !0,
						});
						return (0, m.createComponent)(u.$rdc, {
							get title() {
								return (0, d.memo)(() => !!x())() ? `${x()} Reject` : "Reject";
							},
							onClick: () => F.rejectCurrentDiff(),
							type: "secondary",
							extras: { style: { "margin-left": "8px" } },
						});
					},
					B = (F) =>
						(0, m.createComponent)(u.$rdc, {
							get title() {
								return (
									F.vsContext.keybindingService
										?.lookupKeybindings(h.$t7b)
										.at(-1)
										?.getLabel() + " to toggle"
								);
							},
							isNotClickable: !0,
							type: "secondary",
						}),
					U = (F) =>
						(0, m.createComponent)(u.$rdc, {
							get title() {
								return (F.isFocused ? "\u2318\u23CE " : "") + "edit codebase";
							},
							onClick: () => F.onMultiFileEditSubmit(),
							type: "secondary",
							get disabled() {
								return F.plainText.length === 0;
							},
							style: { "margin-left": "4px" },
						}),
					z = (F) =>
						(0, m.createComponent)(u.$rdc, {
							get title() {
								return (
									F.vsContext.keybindingService
										?.lookupKeybinding(a.$7W)
										?.getLabel() + " Cancel"
								);
							},
							onClick: () => {
								F.cancelCurrentDiff({ shouldResetMultiFileEditState: !0 });
							},
							type: "secondary",
						});
			},
		),
		define(
			de[4251],
			he([1, 0, 2, 2, 2, 2, 13, 36, 147, 14, 251]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Afd = p);
				const a = (0, t.template)(
						"<div><div><div>Step </div><div></div></div><div>",
					),
					h = (0, t.template)("<div>"),
					c = (0, t.template)(
						'<div class="cursor-overlay-div"><div><div>Generating Project...</div><div></div></div><div>',
					),
					n = (o) => {
						const [f, b] = (0, C.createSignal)([]);
						return (
							(0, C.createEffect)(() => {
								f().map((s, l) => {
									const y = o.data.outputs[l]
										.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;")
										.replace(/\n/g, "<br>")
										.replace("  ", "&nbsp;&nbsp;");
									s.innerHTML = u.$Qzb._ttpTokenizer?.createHTML(y) ?? y;
								});
							}),
							(() => {
								const s = a(),
									l = s.firstChild,
									y = l.firstChild,
									$ = y.firstChild,
									v = y.nextSibling,
									S = l.nextSibling;
								return (
									s.style.setProperty("display", "flex"),
									s.style.setProperty("flex-direction", "column"),
									s.style.setProperty("align-items", "center"),
									l.style.setProperty("display", "flex"),
									l.style.setProperty("flex-direction", "row"),
									l.style.setProperty("align-items", "center"),
									l.style.setProperty("width", "100%"),
									l.style.setProperty("margin-top", "12px"),
									l.style.setProperty("background-color", "#222"),
									l.style.setProperty("padding", "8px 0px"),
									l.style.setProperty("font-size", "14px"),
									y.style.setProperty("margin-left", "16px"),
									y.style.setProperty("margin-right", "8px"),
									(0, E.insert)(y, () => o.index, null),
									(0, E.insert)(v, () => o.data.title),
									S.style.setProperty("display", "flex"),
									S.style.setProperty("flex-direction", "column"),
									S.style.setProperty("justify-content", "center"),
									S.style.setProperty("width", "100%"),
									S.style.setProperty("color", "#ccc"),
									S.style.setProperty("padding", "8px 0px"),
									S.style.setProperty("font-size", "12px"),
									S.style.setProperty("font-family", "Courier"),
									(0, E.insert)(
										S,
										(0, w.createComponent)(C.For, {
											get each() {
												return o.data.outputs;
											},
											children: (I, T) =>
												(() => {
													const P = h();
													return (
														(0, i.use)((k) => {
															b(
																f()
																	.slice(0, T())
																	.concat([k])
																	.concat(f().slice(T() + 1)),
															);
														}, P),
														P.style.setProperty("margin-left", "32px"),
														P
													);
												})(),
										}),
									),
									s
								);
							})()
						);
					},
					g = (o) => {
						const f = (0, d.$odc)();
						return (
							(0, C.createEffect)(() => {
								f.telemetryService.publicLogCapture("viewed.aiproject.pane");
							}),
							(() => {
								const b = c(),
									s = b.firstChild,
									l = s.firstChild,
									y = l.nextSibling,
									$ = s.nextSibling;
								return (
									b.style.setProperty("padding", "16px 0px 12px 0px"),
									b.style.setProperty("border-radius", "0px"),
									b.style.setProperty("font-size", "16px"),
									b.style.setProperty(
										"background-color",
										"var(--vscode-editor-background)",
									),
									b.style.setProperty("opacity", "0.8"),
									b.style.setProperty("border", "1px solid #333"),
									b.style.setProperty("z-index", "1000001"),
									b.style.setProperty("color", "#fff"),
									b.style.setProperty("position", "absolute"),
									b.style.setProperty("top", "100px"),
									b.style.setProperty("right", "64px"),
									b.style.setProperty("width", "500px"),
									b.style.setProperty("display", "flex"),
									b.style.setProperty("flex-direction", "column"),
									b.style.setProperty("max-height", "600px"),
									b.style.setProperty("overflow", "auto"),
									s.style.setProperty("display", "flex"),
									s.style.setProperty("align-items", "center"),
									l.style.setProperty("display", "flex"),
									l.style.setProperty("align-items", "center"),
									l.style.setProperty("margin-left", "16px"),
									l.style.setProperty("margin-bottom", "0px"),
									l.style.setProperty("font-size", "12px"),
									l.style.setProperty("color", "var(--vscode-foreground)"),
									l.style.setProperty("text-transform", "uppercase"),
									y.style.setProperty("flex-grow", "1"),
									(0, E.insert)(
										s,
										(0, w.createComponent)(m.$rdc, {
											get codicon() {
												return r.$ak.x;
											},
											type: "secondary",
											onClick: () => {
												o.closeModal(), console.log("cancel");
											},
											extras: {
												style: { "font-size": "16px", "margin-right": "16px" },
											},
										}),
										null,
									),
									(0, E.insert)(
										$,
										(0, w.createComponent)(C.For, {
											get each() {
												return o.reactiveStorageService.nonPersistentStorage
													.aiProjectSteps;
											},
											children: (v, S) =>
												(0, w.createComponent)(n, {
													get index() {
														return S().toString();
													},
													data: v,
												}),
										}),
									),
									b
								);
							})()
						);
					};
				function p({
					container: o,
					isModalOpen: f,
					paneDelegate: b,
					onClose: s,
					reactiveStorageService: l,
					instantiationService: y,
				}) {
					return (0, d.$ndc)(
						() =>
							(0, w.createComponent)(g, {
								isModalOpen: f,
								paneDelegate: b,
								closeModal: () => {
									s();
								},
								reactiveStorageService: l,
							}),
						o,
						y,
					);
				}
			},
		),
		define(
			de[4252],
			he([
				1, 0, 3, 8, 4251, 832, 1715, 3, 20, 445, 180, 151, 110, 5, 45, 118, 232,
				18, 65, 22, 25, 66, 96, 315, 477, 148, 75,
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
				y,
				$,
				v,
				S,
				I,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Cfd = e.$Bfd = void 0),
					(e.$Bfd = new i.$5j("isProjectPaneOpen", !1));
				let T = class extends d.$1c {
					constructor(k, L, D, M, N, A, R, O, B, U, z, F, x, H, q, V, G) {
						super(),
							(this.h = L),
							(this.j = D),
							(this.m = M),
							(this.n = N),
							(this.q = A),
							(this.r = R),
							(this.s = O),
							(this.t = B),
							(this.u = U),
							(this.w = z),
							(this.y = F),
							(this.z = x),
							(this.C = H),
							(this.F = q),
							(this.G = V),
							(this.H = G),
							(this.a = new t.$Zc()),
							(this.f = new C.$sfd()),
							(this.g = new AbortController()),
							this.j.activate(),
							k.bufferChangeEvents(() => {
								this.c = e.$Bfd.bindTo(k);
							});
					}
					render(k) {
						this.C.setPartHidden(!0, y.Parts.AUXILIARYBAR_PART);
						let L = this.C.getContainer(I.$Bfb, y.Parts.EDITOR_PART);
						L &&
							((this.b = (0, w.$Afd)({
								container: L,
								isModalOpen: this.c,
								paneDelegate: this.f,
								instantiationService: this.q,
								reactiveStorageService: this.r,
								onClose: () => {
									this.r.setNonPersistentStorage({ aiProjectSteps: [] }),
										this.g.abort(),
										this.close();
								},
							})),
							this.runAI(k),
							this.f.onFocus());
					}
					async runAI(k) {
						let L = await this.s.getAuthenticationHeader();
						const D =
								this.r.applicationUserPersistentStorage.cursorCreds.backendUrl,
							M = await this.H.aiClient(),
							N = this.H.getModelDetails();
						async function* A() {
							for await (const { text: B } of M.aiProject(
								new S.$aF({ description: k, modelDetails: N }),
							))
								yield B;
							return "";
						}
						const R = A();
						let O;
						for (;;) {
							const { value: B, done: U } = await R.next();
							if (U) break;
							if ((console.log("GOT VALUE", B), B.startsWith("cursor-step"))) {
								const z = B.split("cursor-step")[1].trim();
								let F = [];
								const x = this.r.nonPersistentStorage.aiProjectSteps;
								for (
									this.r.setNonPersistentStorage({
										aiProjectSteps: [...x, { title: z, outputs: F }],
									});
									;
								) {
									const q = (await R.next()).value;
									if (q.startsWith("cursor-end")) break;
									const V = q.split(`
`);
									(F = [
										...F.slice(0, -1),
										(F.length > 0 ? F[F.length - 1] : "") + V[0],
										...V.slice(1),
									]),
										this.r.setNonPersistentStorage({
											aiProjectSteps: [...x, { title: z, outputs: F }],
										});
								}
							} else if (B.startsWith("cursor-create")) {
								const z = B.split("cursor-create")[1].trim(),
									F = this.y.resolveRelativePath(z);
								for (
									(await this.w.exists(F)) ||
										(this.w.createFile(F),
										await new Promise((x) => setTimeout(x, 1e3))),
										this.t.openEditor({ resource: F }),
										await new Promise((x) => setTimeout(x, 200)),
										O = this.u.getActiveCodeEditor() ?? void 0;
									!(await R.next()).value.startsWith("cursor-end");
								);
							} else if (B.startsWith("cursor-append")) {
								if (O === void 0) return;
								for (;;) {
									const F = (await R.next()).value;
									if (F.startsWith("cursor-end")) break;
									let x = O.getPosition();
									O.executeEdits("cursor", [
										{
											range: {
												startLineNumber: x.lineNumber,
												startColumn: x.column,
												endLineNumber: x.lineNumber,
												endColumn: x.column,
											},
											text: F,
										},
									]);
								}
							}
						}
					}
					dispose() {
						super.dispose(), this.a.dispose(), this.b?.dispose();
					}
					close() {
						this.b?.dispose();
					}
				};
				(e.$Cfd = T),
					(e.$Cfd = T =
						Ne(
							[
								j(0, i.$6j),
								j(1, u.$jEb),
								j(2, E.$u0b),
								j(3, a.$ucd),
								j(4, h.$y7c),
								j(5, c.$Li),
								j(6, n.$0zb),
								j(7, p.$x6b),
								j(8, o.$IY),
								j(9, f.$dtb),
								j(10, b.$ll),
								j(11, s.$Vi),
								j(12, l.$EY),
								j(13, y.$mEb),
								j(14, $.$S6b),
								j(15, v.$i6b),
								j(16, g.$Nfc),
							],
							T,
						)),
					(0, m.$lK)(r.$68b, T, m.InstantiationType.Delayed);
			},
		),
		define(
			de[1987],
			he([1, 0, 2, 2, 2, 2, 13, 14, 79, 147, 36, 2385]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$3Zc = g);
				const a = (0, t.template)("<span>Skip for now."),
					h = (0, t.template)("<span>Yes, skip login."),
					c = (0, t.template)(
						'<div><div class="settings__buttons"></div><div class="settings__item_description subheading">',
					),
					n = (0, m.$$O)(
						"tabbar-remove-chat",
						d.$ak.x,
						"Icon for removing a tab in the tab list for chats.",
					);
				function g(p) {
					const o =
							"To avoid abuse on our backend, we ask that you login to use the AI features.",
						[f, b] = (0, C.createSignal)(o);
					(0, C.createEffect)(() => {
						p.message && b(p.message);
					}, [p.message]);
					const l = (0, u.$odc)()?.cursorAuthenticationService,
						[y, $] = (0, C.createSignal)(!1);
					(0, C.createEffect)(() => {
						l.addLoginChangedListener($),
							$(l.isAuthenticated()),
							(0, C.onCleanup)(() => {
								l.removeLoginChangedListener($);
							});
					});
					const [v, S] = (0, C.createSignal)(!1);
					return (() => {
						const I = c(),
							T = I.firstChild,
							P = T.nextSibling;
						return (
							I.style.setProperty("text-align", "center"),
							I.style.setProperty("margin-bottom", "24px"),
							T.style.setProperty("gap", "6px"),
							T.style.setProperty("align-items", "center"),
							(0, w.insert)(
								T,
								(0, E.createComponent)(r.$rdc, {
									onClick: () => {
										l.login();
									},
									type: "primary",
									title: "Log In",
									extras: {
										style: {
											"font-size": "14px",
											padding: "8px 12px",
											"border-radius": "6px",
											border: "1px solid transparent",
											width: "200px",
										},
									},
								}),
								null,
							),
							(0, w.insert)(
								T,
								(0, E.createComponent)(r.$rdc, {
									onClick: () => {
										l.signup();
									},
									type: "secondary",
									title: "Sign Up",
									extras: {
										style: {
											"font-size": "14px",
											padding: "8px 12px",
											"border-radius": "6px",
											border: "1px solid var(--vscode-settings-dropdownBorder)",
											width: "200px",
										},
									},
								}),
								null,
							),
							P.style.setProperty("margin-top", "8px"),
							(0, w.insert)(
								P,
								(0, E.createComponent)(C.Switch, {
									get children() {
										return [
											(0, E.createComponent)(C.Match, {
												get when() {
													return !v();
												},
												get children() {
													return [
														(0, i.memo)(() => f()),
														" ",
														(0, E.createComponent)(C.Show, {
															get when() {
																return p.skipForNowCallback;
															},
															get children() {
																const k = a();
																return (
																	k.addEventListener("click", () => {
																		S(!0);
																	}),
																	k.style.setProperty("cursor", "pointer"),
																	k.style.setProperty(
																		"text-decoration",
																		"underline",
																	),
																	k
																);
															},
														}),
													];
												},
											}),
											(0, E.createComponent)(C.Match, {
												get when() {
													return v() && p.skipForNowCallback;
												},
												get children() {
													return [
														"Are you sure you want to skip login? You can log in later, but it takes less than a minute now, and without it, you won't be able to use any of the AI features.",
														" ",
														(() => {
															const k = h();
															return (
																k.addEventListener("click", () => {
																	p.skipForNowCallback?.();
																}),
																k.style.setProperty("cursor", "pointer"),
																k.style.setProperty(
																	"text-decoration",
																	"underline",
																),
																k
															);
														})(),
													];
												},
											}),
											(0, E.createComponent)(C.Match, {
												when: !0,
												get children() {
													return f();
												},
											}),
										];
									},
								}),
							),
							I
						);
					})();
				}
			},
		),
		define(
			de[4253],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 36, 14, 79, 26, 650, 1286, 83, 58,
				1987, 134, 2361,
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
					(e.$4Zc = R),
					(e.$5Zc = x);
				const y = (0, t.template)('<div class="error__title">'),
					$ = (0, t.template)('<div class="error__content">'),
					v = (0, t.template)(
						'<div class="error-container-backing"><div class="error-container"><div class="error"><div><i class="fas fa-times"></i></div></div><div class="cover-bar">',
					),
					S = (0, t.template)('<div class="error__content"><div>'),
					I = (0, t.template)(
						`<div class="error__content"><div>You've exceeded the maximum number of requests per minute.</div><br><div>To protect our servers from abuse, we limit the number of AI requests you can make per minute. If you get this error often, please email us at <!>.`,
					),
					T = (0, t.template)(
						`<div class="error__content"><div>You've used up your 50 free <!> requests.</div><div class="error__content_subtitle">You can continue using <!> by subscribing to Pro or entering your OpenAI key in settings. Otherwise, you can stay on our free plan (200 cursor-small requests per month).</div><div class="error__content_subtitle">Cursor Pro comes with other benefits too, such as unlimited Cursor Tab requests and access to all the latest models (see <a href="https://cursor.com/pricing" target="_blank">cursor.com/pricing</a> for more details).</div><div><button>Switch to cursor-small, continue for free</button><button><div></div>Use <!> and upgrade to pro</button></div><div>`,
					),
					P = (0, t.template)(
						'<div class="cursor-settings-error-message">Invalid API Key. Please try again.',
					),
					k = (0, t.template)('<span class="openai-switch-text">Using key'),
					L = (0, t.template)('<div class="openai-enabled-container">'),
					D = (0, t.template)(
						`<div class="settings__item"><div class="settings__item_title">Bring-your-own-key</div><div class="settings__item_description">If you'd like, you can put in your OpenAI api key to use Cursor at-cost.</div><div class="openai-settings-container"><div class="openai-area"><input placeholder="Enter your OpenAI API Key"><button class="cursor-settings-submit-button">Update`,
					),
					M = (0, t.template)('<span class="openai-switch-text">Not using key'),
					N = (0, t.template)(
						`<div class="error__content">You've used up your 200 free monthly cursor-small requests.<br><br>You can continue using the AI features by subscribing to Pro or by using your own API key. You can also wait until the next month to use your 200 free requests again.<div><div><button><div></div>Upgrade to pro & Get unlimited cursor-small</button></div><div><button>Dismiss & wait until next month</button></div></div><div>You can always upgrade later in settings.</div><div><i>What's the difference between gpt-4 and cursor-small?</i> Gpt-4 is smarter than cursor-small, but slower. The devs are almost always on gpt-4, but occasionally switch to cursor-small for faster results.</div><hr>`,
					),
					A = (0, n.$$O)(
						"tabbar-remove-chat",
						c.$ak.x,
						"Icon for removing a tab in the tab list for chats.",
					);
				function R(V) {
					return (0, u.createComponent)(O, {
						get closePopup() {
							return V.closePopup;
						},
						get style() {
							return V.style;
						},
						get children() {
							return [
								(() => {
									const G = y();
									return (
										(0, r.insert)(
											G,
											(0, u.createComponent)(a.Show, {
												get when() {
													return V.error instanceof o.$Q6b;
												},
												get fallback() {
													return "Error";
												},
												get children() {
													return (0, u.createComponent)(B, {
														get error() {
															return V.error;
														},
													});
												},
											}),
										),
										G
									);
								})(),
								(() => {
									const G = $();
									return (
										(0, r.insert)(
											G,
											(0, u.createComponent)(a.Switch, {
												get children() {
													return (0, u.createComponent)(a.Match, {
														get when() {
															return V.error instanceof o.$Q6b;
														},
														get children() {
															return (0, u.createComponent)(U, {
																get error() {
																	return V.error;
																},
																get closePopup() {
																	return V.closePopup;
																},
															});
														},
													});
												},
											}),
										),
										G
									);
								})(),
							];
						},
					});
				}
				function O(V) {
					const G = (0, h.$odc)();
					return (
						(0, a.createEffect)(() => {
							const K = (J) => {
								J.key === "Escape" && V.closePopup();
							};
							G.window.addEventListener("keydown", K),
								(0, a.onCleanup)(() => {
									G.window.removeEventListener("keydown", K);
								});
						}),
						(() => {
							const K = v(),
								J = K.firstChild,
								W = J.firstChild,
								X = W.firstChild;
							return (
								K.addEventListener("click", (Y) => {
									V.closePopup(), Y.stopPropagation();
								}),
								J.addEventListener("click", (Y) => {
									Y.stopPropagation();
								}),
								X.addEventListener("click", () => {
									V.closePopup();
								}),
								(0, r.insert)(W, () => V.children, null),
								(0, m.effect)(
									(Y) => {
										const ie = V.style,
											ne = ["error__dismiss", g.ThemeIcon.asClassName(A)].join(
												" ",
											);
										return (
											(Y._v$ = (0, d.style)(K, ie, Y._v$)),
											ne !== Y._v$2 && (0, C.className)(X, (Y._v$2 = ne)),
											Y
										);
									},
									{ _v$: void 0, _v$2: void 0 },
								),
								K
							);
						})()
					);
				}
				function B(V) {
					return (0, u.createComponent)(a.Switch, {
						fallback: "Error",
						get children() {
							return [
								(0, u.createComponent)(a.Match, {
									get when() {
										return (
											V.error.error ===
											f.ErrorDetails_Error.PRO_USER_USAGE_LIMIT
										);
									},
									children: "Many Slow Requests",
								}),
								(0, u.createComponent)(a.Match, {
									get when() {
										return (
											(0, E.memo)(
												() =>
													V.error.error ===
													f.ErrorDetails_Error.FREE_USER_USAGE_LIMIT,
											)() && V.error.model.startsWith("gpt-4")
										);
									},
									children: "Limit Reached",
								}),
								(0, u.createComponent)(a.Match, {
									get when() {
										return (
											(0, E.memo)(
												() =>
													V.error.error ===
													f.ErrorDetails_Error.FREE_USER_USAGE_LIMIT,
											)() && V.error.model.startsWith("gpt-3")
										);
									},
									children: "Limit Reached",
								}),
								(0, u.createComponent)(a.Match, {
									get when() {
										return (
											V.error.error ===
												f.ErrorDetails_Error.FREE_USER_RATE_LIMIT_EXCEEDED ||
											V.error.error ===
												f.ErrorDetails_Error.PRO_USER_RATE_LIMIT_EXCEEDED
										);
									},
									children: "Limit Reached",
								}),
								(0, u.createComponent)(a.Match, {
									get when() {
										return V.error.error === f.ErrorDetails_Error.NOT_LOGGED_IN;
									},
									children: "Login",
								}),
								(0, u.createComponent)(a.Match, {
									get when() {
										return V.error.error === f.ErrorDetails_Error.BAD_API_KEY;
									},
									children: "Invalid API Key",
								}),
								(0, u.createComponent)(a.Match, {
									get when() {
										return (
											V.error.error === f.ErrorDetails_Error.BAD_MODEL_NAME
										);
									},
									children: "Invalid Model",
								}),
							];
						},
					});
				}
				function U(V) {
					return (0, u.createComponent)(a.Switch, {
						get fallback() {
							return (() => {
								const G = S(),
									K = G.firstChild;
								return (
									K.style.setProperty("font-size", "16px"),
									K.style.setProperty("margin-bottom", "10px"),
									K.style.setProperty("display", "flex"),
									K.style.setProperty("justify-content", "center"),
									K.style.setProperty("align-items", "center"),
									K.style.setProperty("padding", "0px 20px"),
									K.style.setProperty("color", "var(--vscode-foreground)"),
									(0, r.insert)(K, () => V.error.toMessage()),
									G
								);
							})();
						},
						get children() {
							return [
								(0, u.createComponent)(a.Match, {
									get when() {
										return (
											(0, E.memo)(
												() =>
													V.error.error ===
													f.ErrorDetails_Error.FREE_USER_USAGE_LIMIT,
											)() &&
											(V.error.model.startsWith("gpt-4") ||
												V.error.model.startsWith("claude-3.5-sonnet"))
										);
									},
									get children() {
										return (0, u.createComponent)(F, {
											get closePopup() {
												return V.closePopup;
											},
											get model() {
												return V.error.model;
											},
											get error() {
												return V.error;
											},
										});
									},
								}),
								(0, u.createComponent)(a.Match, {
									get when() {
										return (
											(0, E.memo)(
												() =>
													V.error.error ===
													f.ErrorDetails_Error.FREE_USER_USAGE_LIMIT,
											)() && V.error.model.startsWith("gpt-3")
										);
									},
									get children() {
										return (0, u.createComponent)(H, {
											get closePopup() {
												return V.closePopup;
											},
											get model() {
												return V.error.model;
											},
											get error() {
												return V.error;
											},
										});
									},
								}),
								(0, u.createComponent)(a.Match, {
									get when() {
										return (
											V.error.error ===
												f.ErrorDetails_Error.FREE_USER_RATE_LIMIT_EXCEEDED ||
											V.error.error ===
												f.ErrorDetails_Error.PRO_USER_RATE_LIMIT_EXCEEDED
										);
									},
									get children() {
										return (0, u.createComponent)(z, {
											get model() {
												return V.error.model;
											},
											get error() {
												return V.error.error;
											},
										});
									},
								}),
								(0, u.createComponent)(a.Match, {
									get when() {
										return (
											V.error.error === f.ErrorDetails_Error.NOT_LOGGED_IN ||
											V.error.error ===
												f.ErrorDetails_Error.AGENT_REQUIRES_LOGIN
										);
									},
									get children() {
										return (0, u.createComponent)(q, {
											get closePopup() {
												return V.closePopup;
											},
											get error() {
												return V.error;
											},
										});
									},
								}),
							];
						},
					});
				}
				function z(V) {
					const { openerService: G } = (0, h.$odc)();
					return (() => {
						const K = I(),
							J = K.firstChild,
							W = J.nextSibling,
							X = W.nextSibling,
							Y = X.firstChild,
							ie = Y.nextSibling,
							ne = ie.nextSibling;
						return (0, r.insert)(X, b.$vV, ie), K;
					})();
				}
				function F(V) {
					const G = (0, h.$odc)();
					return (
						(0, a.createEffect)(() => {
							const K = (J) => {
								J !== l.MembershipType.FREE &&
									(V.closePopup(), V.error.rerun());
							};
							G.cursorAuthenticationService.addSubscriptionChangedListener(K),
								(0, a.onCleanup)(() => {
									G.cursorAuthenticationService.removeSubscriptionChangedListener(
										K,
									);
								});
						}),
						(() => {
							const K = T(),
								J = K.firstChild,
								W = J.firstChild,
								X = W.nextSibling,
								Y = X.nextSibling,
								ie = J.nextSibling,
								ne = ie.firstChild,
								ee = ne.nextSibling,
								_ = ee.nextSibling,
								te = ie.nextSibling,
								Q = te.firstChild,
								Z = Q.nextSibling,
								se = te.nextSibling,
								re = se.firstChild,
								le = re.nextSibling,
								oe = le.firstChild,
								ae = oe.nextSibling,
								pe = ae.nextSibling,
								$e = pe.nextSibling,
								ye = se.nextSibling;
							return (
								J.style.setProperty("font-size", "16px"),
								J.style.setProperty("margin-bottom", "10px"),
								J.style.setProperty("color", "var(--vscode-foreground)"),
								(0, r.insert)(J, () => V.model, X),
								(0, r.insert)(ie, () => V.model, ee),
								Z.style.setProperty(
									"color",
									"var(--vscode-textLink-foreground)",
								),
								se.style.setProperty("display", "grid"),
								se.style.setProperty("grid-template-columns", "1fr 1fr"),
								se.style.setProperty("justify-items", "center"),
								se.style.setProperty("margin-top", "30px"),
								se.style.setProperty("margin-bottom", "20px"),
								re.addEventListener("click", () => {
									G.aiSettingsService.setModel("cursor-small"),
										V.closePopup(),
										V.error.rerun();
								}),
								re.style.setProperty("background-color", "transparent"),
								re.style.setProperty("border", "none"),
								re.style.setProperty("cursor", "pointer"),
								re.style.setProperty("color", "var(--vscode-foreground)"),
								(0, w.addEventListener)(
									le,
									"click",
									G.cursorAuthenticationService.pay,
								),
								le.style.setProperty(
									"background-color",
									"var(--vscode-button-background)",
								),
								le.style.setProperty("border", "none"),
								le.style.setProperty("border-radius", "5px"),
								le.style.setProperty(
									"color",
									"var(--vscode-button-foreground)",
								),
								le.style.setProperty("cursor", "pointer"),
								le.style.setProperty("padding", "10px 20px"),
								le.style.setProperty("gap", "7px"),
								le.style.setProperty("display", "flex"),
								le.style.setProperty("align-items", "center"),
								oe.style.setProperty(
									"color",
									"var(--vscode-button-foreground)",
								),
								(0, r.insert)(le, () => V.model, pe),
								ye.style.setProperty("font-size", "12px"),
								ye.style.setProperty("opacity", "0.5"),
								(0, m.effect)(() =>
									(0, C.className)(oe, g.ThemeIcon.asClassName(c.$ak.rocket)),
								),
								K
							);
						})()
					);
				}
				function x(V) {
					const G = (0, h.$odc)(),
						K = G.aiSettingsService,
						J = G.cursorAuthenticationService,
						[W, X] = (0, a.createSignal)(K.getUseOpenAIKey()),
						[Y, ie] = (0, a.createSignal)(K.getModel()),
						[ne, ee] = (0, a.createSignal)(K.getLongContextModel()),
						[_, te] = (0, a.createSignal)(null),
						[Q, Z] = (0, a.createSignal)(""),
						[se, re] = (0, a.createSignal)("");
					return (
						(0, a.createEffect)(() => {
							K.addOpenAIKeyListener(X),
								K.addOpenAIModelListener(ie),
								K.addLongContextOpenAIModelListener(ee),
								J.addOpenAIKeyChangedListener(Z),
								(0, a.onCleanup)(() => {
									K.removeOpenAIKeyListener(X),
										K.removeOpenAIModelListener(ie),
										K.removeLongContextOpenAIModelListener(ee),
										J.removeOpenAIKeyChangedListener(Z);
								});
						}),
						(0, a.createEffect)(() => {
							K.getApiKey().then((le) => {
								le && Z(le);
							});
						}),
						(0, a.createEffect)(() => {
							re(Q());
						}),
						(0, a.createEffect)(() => {
							se() !== null && te(null);
						}),
						(() => {
							const le = D(),
								oe = le.firstChild,
								ae = oe.nextSibling,
								pe = ae.nextSibling,
								$e = pe.firstChild,
								ye = $e.firstChild,
								ue = ye.nextSibling;
							return (
								ye.addEventListener("input", (fe) => {
									re(fe.currentTarget.value);
								}),
								(0, i.setAttribute)(ye, "spellcheck", !1),
								ue.addEventListener("click", () => {
									K.setOpenAIKey(se()).then((fe) => {
										fe !== !0 ? te(!1) : (te(!0), V.onClose(), V.error.rerun());
									});
								}),
								(0, r.insert)(
									pe,
									(0, u.createComponent)(a.Show, {
										get when() {
											return _() === !1;
										},
										get children() {
											return P();
										},
									}),
									null,
								),
								(0, r.insert)(
									pe,
									(0, u.createComponent)(a.Show, {
										get when() {
											return Q();
										},
										get children() {
											const fe = L();
											return (
												(0, r.insert)(
													fe,
													(0, u.createComponent)(p.$dob, {
														get value() {
															return W();
														},
														onToggle: () => K.setUseOpenAIKey(!W()),
													}),
													null,
												),
												(0, r.insert)(
													fe,
													(0, u.createComponent)(a.Show, {
														get when() {
															return W();
														},
														get fallback() {
															return M();
														},
														get children() {
															return k();
														},
													}),
													null,
												),
												fe
											);
										},
									}),
									null,
								),
								(0, m.effect)(() =>
									(0, C.className)(
										ye,
										`settings__item_textarea
										${_() === !1 ? "input-error" : _() === !0 ? "input-success" : ""}`,
									),
								),
								(0, m.effect)(() => (ye.value = se() || "")),
								le
							);
						})()
					);
				}
				function H(V) {
					const G = (0, h.$odc)();
					return (
						(0, a.createEffect)(() => {
							const K = (J) => {
								J === l.MembershipType.PRO && (V.closePopup(), V.error.rerun());
							};
							G.cursorAuthenticationService.addSubscriptionChangedListener(K),
								(0, a.onCleanup)(() => {
									G.cursorAuthenticationService.removeSubscriptionChangedListener(
										K,
									);
								});
						}),
						(() => {
							const K = N(),
								J = K.firstChild,
								W = J.nextSibling,
								X = W.nextSibling,
								Y = X.nextSibling,
								ie = Y.nextSibling,
								ne = ie.firstChild,
								ee = ne.firstChild,
								_ = ee.firstChild,
								te = ne.nextSibling,
								Q = te.firstChild,
								Z = ie.nextSibling,
								se = Z.nextSibling,
								re = se.nextSibling;
							return (
								ie.style.setProperty("display", "grid"),
								ie.style.setProperty("grid-template-columns", "1fr 1fr"),
								ie.style.setProperty("justify-items", "center"),
								ie.style.setProperty("margin-top", "30px"),
								ie.style.setProperty("margin-bottom", "20px"),
								ne.style.setProperty("display", "flex"),
								ne.style.setProperty("justify-content", "center"),
								(0, w.addEventListener)(
									ee,
									"click",
									G.cursorAuthenticationService.pay,
								),
								ee.style.setProperty(
									"background-color",
									"var(--vscode-button-background)",
								),
								ee.style.setProperty("border", "solid"),
								ee.style.setProperty("border-width", "1px"),
								ee.style.setProperty("border-radius", "10px"),
								ee.style.setProperty(
									"color",
									"var(--vscode-button-foreground)",
								),
								ee.style.setProperty("cursor", "pointer"),
								ee.style.setProperty("padding", "10px 20px"),
								ee.style.setProperty("gap", "7px"),
								ee.style.setProperty("display", "flex"),
								ee.style.setProperty("align-items", "center"),
								_.style.setProperty("color", "var(--vscode-button-foreground)"),
								te.style.setProperty("display", "flex"),
								te.style.setProperty("justify-content", "center"),
								Q.addEventListener("click", () => {
									V.closePopup();
								}),
								Q.style.setProperty("text-decoration", "underline"),
								Q.style.setProperty("text-underline-offset", "2px"),
								Q.style.setProperty("background-color", "transparent"),
								Q.style.setProperty("border", "none"),
								Q.style.setProperty("cursor", "pointer"),
								Q.style.setProperty("color", "var(--vscode-foreground)"),
								Z.style.setProperty("text-align", "center"),
								Z.style.setProperty("font-size", "12px"),
								Z.style.setProperty("opacity", "0.5"),
								Z.style.setProperty("margin-bottom", "20px"),
								se.style.setProperty("font-size", "12px"),
								se.style.setProperty("opacity", "0.5"),
								re.style.setProperty("margin-top", "20px"),
								re.style.setProperty("margin-bottom", "20px"),
								(0, r.insert)(
									K,
									(0, u.createComponent)(x, {
										onClose: () => V.closePopup(),
										get error() {
											return V.error;
										},
									}),
									null,
								),
								(0, m.effect)(
									(le) => {
										const oe = G.themeService
												.getColorTheme()
												.getColor("button.background")
												?.lighten(0.3)
												.toString(),
											ae = g.ThemeIcon.asClassName(c.$ak.rocket);
										return (
											oe !== le._v$3 &&
												((le._v$3 = oe) != null
													? ee.style.setProperty("border-color", oe)
													: ee.style.removeProperty("border-color")),
											ae !== le._v$4 && (0, C.className)(_, (le._v$4 = ae)),
											le
										);
									},
									{ _v$3: void 0, _v$4: void 0 },
								),
								K
							);
						})()
					);
				}
				function q(V) {
					const G = (0, h.$odc)();
					(0, a.createEffect)(() => {
						const J = (W) => {
							W && (V.closePopup(), V.error.rerun());
						};
						G.cursorAuthenticationService.addLoginChangedListener(J),
							(0, a.onCleanup)(() => {
								G.cursorAuthenticationService.removeLoginChangedListener(J);
							});
					});
					const K = (0, a.createMemo)(() => {
						switch (V.error.error) {
							case f.ErrorDetails_Error.NOT_LOGGED_IN:
								return "To avoid abuse on our backend, we ask that you login to use the AI features";
							case f.ErrorDetails_Error.AGENT_REQUIRES_LOGIN:
								return "As a safety measure for our users, please login to use AI agents.";
							default:
								return;
						}
					});
					return (() => {
						const J = $();
						return (
							(0, r.insert)(
								J,
								(0, u.createComponent)(s.$3Zc, {
									get message() {
										return K();
									},
								}),
							),
							J
						);
					})();
				}
			},
		),
		