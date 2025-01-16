define(
			de[337],
			he([
				1, 0, 126, 83, 3, 23, 9, 65, 42, 10, 22, 20, 5, 40, 45, 21, 25, 44,
				1707, 418, 1869, 3259, 397, 560, 107, 837, 400, 359, 356, 271, 632,
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
				k,
				L,
			) {
				"use strict";
				var D;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lgc = e.$kgc = e.$jgc = e.$igc = void 0);
				class M extends Error {
					constructor(R) {
						super(R);
					}
				}
				(e.$igc = "8798650935798651"),
					(e.$jgc = "8329855760410817"),
					(e.$kgc = (0, h.$Mi)("chatDataService"));
				let N = class extends w.$1c {
					static {
						D = this;
					}
					get chatDataStorageID() {
						return b.AIChatConstants.CHAT_REACTIVE_STORAGE_ID;
					}
					constructor(R, O, B, U, z, F, x, H, q, V, G, K, J, W, X, Y, ie) {
						super(),
							(this.f = R),
							(this.g = O),
							(this.h = B),
							(this.j = U),
							(this.m = z),
							(this.n = F),
							(this.q = x),
							(this.r = H),
							(this.t = q),
							(this.u = V),
							(this.w = G),
							(this.y = K),
							(this.z = J),
							(this.C = W),
							(this.F = X),
							(this.G = Y),
							(this.H = ie),
							([
								this.chatData,
								this.setChatData,
								this.persistSelectedChat,
								this.sortTabs,
								this.resetTabs,
							] = (0, s.$tIb)(
								this.f,
								this.n,
								this.F,
								this.g,
								this.chatDataStorageID,
								{ isNotebook: !1, hasNonemptySelection: !1 },
							));
						for (const ne of D.registeredActions) ne(this.n, this);
					}
					getTabData(R) {
						return this.chatData.tabs.find((O) => O.tabId === R);
					}
					updateTabData(R, O) {
						this.setChatData(
							"tabs",
							(B) => B.tabId === R,
							(B) => ({ ...B, ...O }),
						);
					}
					get selectedTab() {
						const R = this.chatData.tabs.find(
							(O) => O.tabId === this.chatData.selectedTabId,
						);
						return R === void 0
							? (console.log(
									"[aichat] selectedTab is undefined, this should not happen",
								),
								this.chatData.tabs.length === 0
									? this.resetTabs()
									: (this.setChatData(
											"selectedTabId",
											this.chatData.tabs[0].tabId,
										),
										this.chatData.tabs[0]))
							: R;
					}
					get selectedTabId() {
						return this.chatData.selectedTabId;
					}
					updateSelectedTab(R) {
						this.chatData.selectedTabId &&
							this.updateTabData(this.chatData.selectedTabId, R);
					}
					getBubbleData(R, O) {
						return this.getTabData(R)?.bubbles.find((U) => U.id === O);
					}
					getUserBubbleData(R, O) {
						return this.getTabData(R)?.bubbles.find((U) => U.id === O);
					}
					updateBubbleData(R, O, B) {
						this.setChatData(
							"tabs",
							(U) => U.tabId === R,
							"bubbles",
							(U) => U.id === O,
							(U) => ({ ...U, ...B }),
						);
					}
					get selectedBubble() {
						const R = this.selectedTab;
						if (R && R.selectedBubbleId)
							return R.bubbles.find((O) => O.id === R.selectedBubbleId);
					}
					get selectedBubbleId() {
						return this.selectedTab.selectedBubbleId;
					}
					updateSelectedBubble(R) {
						const O = this.selectedTab,
							B = this.selectedBubbleId;
						O && B && this.updateBubbleData(O.tabId, B, R);
					}
					get editingBubble() {
						const R = this.selectedTab;
						if (R && R.editingBubbleId)
							return R.bubbles.find((O) => O.id === R.editingBubbleId);
					}
					get editingBubbleId() {
						return this.selectedTab.editingBubbleId;
					}
					updateEditingBubble(R) {
						const O = this.selectedTab,
							B = this.editingBubbleId;
						O && B && this.updateBubbleData(O.tabId, B, R);
					}
					get lastFocusedBubble() {
						const R = this.selectedTab;
						if (R && R.lastFocusedBubbleId)
							return R.bubbles.find((O) => O.id === R.lastFocusedBubbleId);
					}
					get lastFocusedBubbleId() {
						return this.selectedTab.lastFocusedBubbleId;
					}
					updateLastFocusedBubble(R) {
						const O = this.selectedTab,
							B = this.lastFocusedBubbleId;
						O && B && this.updateBubbleData(O.tabId, B, R);
					}
					static {
						this.registeredActions = [];
					}
					static registerAction(R) {
						this.registeredActions.push(R);
					}
					isTabGenerating(R, O) {
						const B = this.n.nonPersistentStorage.inprogressAIGenerations.find(
							(U) =>
								U.metadata !== void 0 &&
								(U.metadata.type === "chat" ||
									U.metadata.type === "codeInterpreter" ||
									(O?.includeExecuting === !0 &&
										U.metadata.type === "interpreterExecution")) &&
								U.metadata.tabId === R,
						);
						return B === void 0
							? { isGenerating: !1 }
							: {
									isGenerating: !0,
									cancel: () => {
										this.n.setNonPersistentStorage(
											"inprogressAIGenerations",
											(z) =>
												z.filter(
													(F) =>
														!(
															F.metadata !== void 0 &&
															(F.metadata.type === "chat" ||
																F.metadata.type === "codeInterpreter" ||
																F.metadata.type === "interpreterExecution") &&
															F.metadata.tabId === R
														),
												),
										);
									},
									generation: B,
								};
					}
					isChatFocused() {
						return this.n.nonPersistentStorage.chatState.isFocused;
					}
					getReactiveCurrentChat() {
						const R =
							this.chatData.selectedTabId ?? this.chatData.tabs[0]?.tabId;
						return R === void 0
							? void 0
							: this.chatData.tabs.find((B) => B.tabId === R);
					}
					async searchFiles(R, O) {
						const B = `{${O.map((U) => `"${U.relativePath}"`).join(",")}}`;
						return this.w.getEmbeddingChunks(R, 20, B);
					}
					async getExactDimensionBytes(R) {
						const O = C.URI.file(R.path),
							B = (await this.q.readFile(O)).value.buffer;
						return new i.$ct({ data: B, dimension: R.dimension });
					}
					getRescorerFromEmbeddingsResults(R) {
						const O =
								R?.case === "fileSearchResults"
									? R.value.results.map((V) => V.score)
									: [],
							B = Math.min(...O),
							U = Math.max(...O),
							z = 1e-6,
							F = O.map((V) => (V - B) / (U - B + z)),
							x = new Map(
								F.map((V, G) => [
									(R?.value.results[G]).file?.relativeWorkspacePath,
									V,
								]),
							);
						let H = new Set();
						return (V) => (
							H.add(V.relativePath),
							(x.get((0, L.$K9b)(V.relativePath)) ?? 0) * 0.8 + 0.2 * V.score
						);
					}
					async fitLongContextDataIntoTokenLimit(
						{ conversationHistory: R, contextResults: O },
						B,
						U,
					) {
						if (B === void 0)
							return { conversationHistory: R, contextResults: O };
						const z = B * 3,
							F = await Promise.all(
								R.flatMap((Q) =>
									Q.attachedFolders.map(async (Z) =>
										(await this.t.getFilesOfFolder(Z)).map((se) => ({
											...se,
											truncated: se.truncated,
											score: se.score,
										})),
									),
								),
							),
							x = new Set(
								F.flatMap((Q) => Q.map((Z) => (0, L.$K9b)(Z.relativePath))),
							),
							H =
								O?.case === "fileSearchResults"
									? O.value.results
											.map((Q, Z) => ({
												relativePath: Q.file?.relativeWorkspacePath,
												sizeBytes: Q.file?.contents.length,
												truncated: !1,
												score: Q.score,
											}))
											.filter(
												(Q) =>
													typeof Q.relativePath == "string" &&
													typeof Q.sizeBytes == "number" &&
													!x.has(Q.relativePath),
											)
									: [];
						if (
							[...F, H].reduce(
								(Q, Z) =>
									Q +
									Z.reduce(
										(se, re) =>
											re.truncated && re.sizeBytes !== void 0
												? se
												: se + re.sizeBytes,
										0,
									),
								0,
							) < z
						) {
							let Q = 0;
							const Z = R.map((re) => {
								const le = { ...re },
									oe = re.attachedFolders.map((ae) => {
										const pe = Q;
										return (
											Q++,
											(async () =>
												new t.$6A({
													relativePath: ae,
													files:
														await this.t.folderFilesContentlessToFolderFiles(
															F[pe],
														),
												}))()
										);
									});
								return (async () => (
									(le.attachedFoldersNew = await Promise.all(oe)), new t.$SA(le)
								))();
							});
							return {
								conversationHistory: await Promise.all(Z),
								contextResults: O,
							};
						}
						const V = await U(),
							G = F.map((Q) => Q.map((Z) => ({ ...Z, score: V(Z) }))),
							K = [...G, H],
							J =
								await this.t.shrinkBagsOfFiles_MAY_RETURN_TRUNCATED_OR_EMPTY_FILES(
									K,
									z,
								),
							W = J.slice(0, G.length);
						let X = 0;
						const Y = R.map((Q) => {
								const Z = { ...Q },
									se = Q.attachedFolders.map((re) => {
										const le = X;
										return (
											X++,
											(async () =>
												new t.$6A({
													relativePath: re,
													files:
														await this.t.folderFilesContentlessToFolderFiles(
															W[le],
														),
												}))()
										);
									});
								return (async () => (
									(Z.attachedFoldersNew = await Promise.all(se)), new t.$SA(Z)
								))();
							}),
							ie = await Promise.all(Y),
							ne = J[G.length],
							ee = new Map(ne.map((Q) => [Q.relativePath, Q])),
							_ = new Map(
								(
									await Promise.all(
										O?.value.results.map(async (Q) =>
											"file" in Q
												? {
														file: Q.file,
														isSourceFile:
															"file" in Q &&
															(await this.t.isSourceFile(
																Q.file?.relativeWorkspacePath,
															)),
													}
												: [],
										) ?? [],
									)
								)
									.flat()
									.filter((Q) => Q.isSourceFile)
									.map(({ file: Q }) => [Q?.relativeWorkspacePath, Q]),
							),
							te =
								O?.case === "fileSearchResults"
									? {
											case: "fileSearchResults",
											value: {
												results: O.value.results.filter(
													(Q) =>
														Q.file?.relativeWorkspacePath !== void 0 &&
														_.has(Q.file.relativeWorkspacePath) &&
														ee.get(Q.file.relativeWorkspacePath)?.truncated ===
															!1,
												),
											},
										}
									: O;
						return { conversationHistory: ie, contextResults: te };
					}
					isCompatibleScheme(R) {
						return [
							E.Schemas.file,
							E.Schemas.vscodeRemote,
							E.Schemas.vscodeNotebook,
							E.Schemas.notepad,
							E.Schemas.vscodeTerminal,
						].includes(R);
					}
					getCurrentFile() {
						const R = this.C.getLastActiveFileEditor();
						if (!R) return;
						const O = o.$A1.getOriginalUri(R.input);
						if (O && this.isCompatibleScheme(O.scheme))
							return { uri: O, isCurrentFile: !0 };
					}
					async getConversationHistory({ tab: R, upUntil: O }) {
						const B = [];
						try {
							const U = this.chatData.pinnedContexts,
								z = R.bubbles.filter((q) => q.type === "user"),
								F = z.length > 0 ? z[z.length - 1] : void 0;
							if (!F) throw new Error("No user bubbles found");
							const x = this.getCurrentFile(),
								H = x ? this.g.asRelativePath(C.URI.revive(x.uri)) : void 0;
							for (let q = 0; q < R.bubbles.length; q++) {
								const V = R.bubbles[q];
								if (V.type === "user") {
									let G = Promise.resolve([]),
										K = Promise.resolve([]),
										J = Promise.resolve([]),
										W = Promise.resolve([]),
										X = Promise.resolve([]),
										Y = [];
									const ie = [];
									let ne = Promise.resolve([]),
										ee = [];
									q === 0 &&
										(R.selectedRecentFiles?.length ?? 0) > 0 &&
										((ee = R.selectedRecentFiles ?? []),
										this.n.setWorkspaceUserPersistentStorage(
											"persistentChatMetadata",
											(xe) => xe.bubbleId === F.id && xe.tabId === R.tabId,
											"usedRecentFiles",
											ee,
										),
										(ee = ee.filter((xe) => !(x && xe.relativePath === H))));
									let _ = !1,
										te = [];
									q === 0 &&
										_ &&
										(R.selectedContextGraphFiles?.length ?? 0) > 0 &&
										((te = R.selectedContextGraphFiles ?? []),
										(te = te.filter((xe) => !(x && xe.relativePath === H))));
									let Q = [];
									q === 0 &&
										_ &&
										(R.selectedMentionedFiles?.length ?? 0) > 0 &&
										((Q = R.selectedMentionedFiles ?? []),
										(Q = Q.filter((xe) => !(x && xe.relativePath === H))));
									let Z = [],
										se = !1,
										re = U?.fileSelections ?? [];
									const le = [
											...(V.fileSelections ?? []),
											...(q === 0 ? re : []),
											...(q === 0 ? [...ee, ...te, ...Q, ...Z] : []),
										],
										oe = (0, y.$_fc)(le);
									oe.length > 0 &&
										(G = this.H.getCodeChunksFromFileSelections(oe));
									const { folderSelections: ae } = V;
									ae && ae.length > 0 && (Y = ae.map((xe) => xe.relativePath)),
										V.selectedCommits !== void 0 &&
											V.selectedCommits.length > 0 &&
											(K = this.H.getCommitDetailsFromPartialCommits(
												V.selectedCommits,
											)),
										V.selectedPullRequests !== void 0 &&
											V.selectedPullRequests.length > 0 &&
											(J = this.H.getPullRequestDetailsFromPartialPullRequests(
												V.selectedPullRequests,
											)),
										(V.gitDiff !== void 0 ||
											V.gitDiffFromBranchToMain !== void 0 ||
											se) &&
											(W = this.H.getDiffDetailsFromGitDiff({
												gitDiff: V.gitDiff ?? se ?? !1,
												gitDiffFromBranchToMain:
													V.gitDiffFromBranchToMain ?? !1,
											})),
										V.selectedImages &&
											V.selectedImages.length > 0 &&
											(ne = this.H.getImagesFromImageSelection({
												setContext: (xe) => {
													this.setChatData(
														"tabs",
														({ tabId: He }) => R.tabId === He,
														"bubbles",
														({ id: He }) => V.id === He,
														...args,
													);
												},
												getContext: () => this.getBubbleData(R.tabId, V.id),
											})),
										V.notepads &&
											V.notepads.length > 0 &&
											this.n.applicationUserPersistentStorage.notepadState
												.isNotepadEnabled !== !1 &&
											(X = this.H.getNotepadsContext(V));
									const [pe, $e, ye, ue, fe, me] = await Promise.all([
										G,
										K,
										J,
										W,
										ne,
										X,
									]);
									let ve = U?.codeSelections ?? [];
									const ge = [
											...(V.selections ?? []),
											...ve,
											...(V.terminalSelections ?? []),
										],
										be = (0, y.$agc)(ge);
									if (be.length > 0) {
										const xe = await Promise.all(
											be
												.map((He) => this.H.getCodeChunksFromCodeSelection(He))
												.filter((He) => He !== void 0),
										);
										pe.push(...xe);
									}
									const Ce = V.terminalFiles ?? [];
									if (Ce.length > 0) {
										const xe =
											await this.H.getCodeChunksFromTerminalSelections(Ce);
										pe.push(...xe);
									}
									let Le = V.codebaseResults;
									const Fe = new Map(
											(Le ?? [])?.map((xe) => [
												JSON.stringify({
													relativeWorkspacePath: xe.relativeWorkspacePath,
													startLineNumber: xe.range?.startPosition?.line,
												}),
												xe.detailedLines,
											]),
										),
										Oe =
											this.n.workspaceUserPersistentStorage.persistentChatMetadata.find(
												({ bubbleId: xe, tabId: He }) =>
													xe === V.id && He === R.tabId,
											)?.intermediateChunks;
									Oe !== void 0 &&
										(Le = Oe.map((xe) => {
											const He = Fe.get(
												JSON.stringify({
													relativeWorkspacePath: xe.chunkIdentity.fileName,
													startLineNumber: xe.chunkIdentity.startLine,
												}),
											);
											return {
												relativeWorkspacePath: xe.chunkIdentity.fileName,
												startLineNumber: xe.chunkIdentity.startLine,
												lines: xe.chunkIdentity.text.split(`
`),
												contents: xe.chunkIdentity.text,
												detailedLines:
													He ??
													xe.chunkIdentity.text
														.split(`
`)
														.map((Ke, Je) => ({
															text: Ke,
															lineNumber: Je + xe.chunkIdentity.startLine + 1,
															isSignature: !1,
														})),
											};
										})),
										B.push(
											new t.$SA({
												text: V.text ?? "",
												bubbleId: V.id,
												type: t.ConversationMessage_MessageType.HUMAN,
												codebaseContextChunks: Le,
												attachedCodeChunks: pe,
												attachedFolders: Y,
												attachedFoldersNew: ie,
												commits: $e,
												pullRequests: ye,
												gitDiffs: ue,
												images: fe,
												notepads: me,
											}),
										);
								} else if (V.type === "ai") {
									let G = V.text;
									const K = /⛢Action☤[^⛢]*⛢\/Action☤/g;
									(G = G.replace(K, "")),
										(G = G.replace(/⛢RawAction☤/g, "\u26E2Action\u2624")),
										(G = G.replace(
											/⛢\/RawAction☤/g,
											`\u26E2/Action\u2624
`,
										)),
										(G = G.replace(/⛢/g, "<")),
										(G = G.replace(/☤/g, ">"));
									const J =
											this.n.nonPersistentStorage.nonPersistentChatMetadata.find(
												({ bubbleId: ne, tabId: ee }) =>
													ne === V.id && ee === R.tabId,
											),
										W = J?.approximateLintErrors ?? [],
										X =
											J?.lints?.filter(
												(ne) =>
													ne.codeBlockUri !== void 0 &&
													ne.lints.lints.length > 0,
											) ?? [],
										Y = (
											await Promise.all(
												X.map(async (ne) => {
													if (ne.codeBlockUri === void 0) return [];
													let ee;
													try {
														ee = this.z
															.listCodeEditors()
															.find(
																(te) =>
																	te.getModel()?.uri.toString() ===
																	ne.codeBlockUri?.toString(),
															)
															?.getModel()
															?.getValue();
													} catch (_) {
														return (
															console.warn(
																"Error getting model value for chat convo message lints",
																_,
															),
															[]
														);
													}
													return ee === void 0
														? []
														: [
																new t.$2A({
																	lints: ne.lints,
																	chatCodeblockModelValue: ee,
																}),
															];
												}),
											)
										).flat(),
										ie = G.match(new RegExp(e.$igc, "g"));
									for (const ne of ie ?? []) {
										const ee = G.indexOf(ne),
											_ = G.substring(0, ee);
										B.push(
											new t.$SA({
												text: _,
												type: t.ConversationMessage_MessageType.AI,
												assistantSuggestedDiffs: (
													V.suggestedDiffs ?? []
												).flatMap((Z) => {
													try {
														return [t.$9A.fromJson(Z)];
													} catch {
														return [];
													}
												}),
											}),
										);
										const te = G.indexOf(e.$jgc, ee + ne.length),
											Q = G.substring(ee + ne.length, te);
										B.push(
											new t.$SA({
												text: Q,
												type: t.ConversationMessage_MessageType.HUMAN,
												assistantSuggestedDiffs: (
													V.suggestedDiffs ?? []
												).flatMap((Z) => {
													try {
														return [t.$9A.fromJson(Z)];
													} catch {
														return [];
													}
												}),
											}),
										),
											(G = G.substring(te + e.$jgc.length));
									}
									(G = (0, f.$cHb)(G, V.interpreterModeCells)),
										G.trim().length > 0 &&
											B.push(
												new t.$SA({
													text: G,
													bubbleId: V.id,
													type: t.ConversationMessage_MessageType.AI,
													assistantSuggestedDiffs: (
														V.suggestedDiffs ?? []
													).flatMap((ne) => {
														try {
															return [t.$9A.fromJson(ne)];
														} catch {
															return [];
														}
													}),
													interpreterResults:
														V.interpreterModeCells?.map(
															(ne) =>
																new t.$8A({
																	output: ne.output,
																	success: ne.status === "success",
																}),
														) ?? [],
													approximateLintErrors: W,
													lints: Y,
												}),
											);
								}
								if (V.id === O) break;
							}
							return B;
						} catch (U) {
							throw (
								(U instanceof M &&
									this.r.error(
										"Image selected in conversation was not found on disk",
									),
								U)
							);
						}
					}
				};
				(e.$lgc = N),
					(e.$lgc =
						N =
						D =
							Ne(
								[
									j(0, g.$lq),
									j(1, p.$Vi),
									j(2, m.$MO),
									j(3, P.$zIb),
									j(4, T.$$Db),
									j(5, n.$0zb),
									j(6, u.$ll),
									j(7, c.$4N),
									j(8, L.$J9b),
									j(9, $.$lcc),
									j(10, I.$26b),
									j(11, l.$uIb),
									j(12, d.$dtb),
									j(13, S.$N9b),
									j(14, r.$gj),
									j(15, v.$iIb),
									j(16, k.$Q9b),
								],
								N,
							)),
					(0, a.$lK)(e.$kgc, N, a.InstantiationType.Eager);
			},
		),
		