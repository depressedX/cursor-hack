define(
			de[4290],
			he([
				1, 0, 167, 262, 395, 209, 226, 126, 25, 83, 627, 140, 134, 4289, 45,
				118, 315, 337, 567, 426, 22, 1284,
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
					(e.UsesCodebase = void 0);
				const y = !1;
				let $ = class extends i.ComposerCapability {
					constructor(S, I, T, P, k, L, D, M, N, A, R, O, B) {
						super(S, I),
							(this.composerDataService = T),
							(this.repositoryService = P),
							(this.keywordSearchService = k),
							(this._reactiveStorageService = L),
							(this._aiService = D),
							(this._aiUtilsService = M),
							(this._aiSettingsService = N),
							(this._chatDataService = A),
							(this._composerUtilsService = R),
							(this._workspaceContextService = O),
							(this._fileService = B),
							(this.priority = 1),
							(this.type =
								t.ComposerCapabilityRequest_ComposerCapabilityType.USES_CODEBASE),
							(this.name =
								i.capabilityTypeLabels[
									t.ComposerCapabilityRequest_ComposerCapabilityType.USES_CODEBASE
								]),
							(this.schema = {}),
							(this._disposables = []),
							([this.currentStep, this.setCurrentStep] = (0, i.createSignal)(
								a.RepoStep.None,
							)),
							([this.hydeResults, this.setHydeResults] = (0, i.createSignal)(
								void 0,
							)),
							([this.fileResults, this.setFileResults] = (0, i.createSignal)(
								[],
							)),
							([this.codeBlockResults, this.setCodeBlockResults] = (0,
							i.createSignal)([]));
					}
					getFoldersIncludePattern(S) {
						return S.flatMap((T) => T.attachedFolders).map(
							(T) => `${T.startsWith("/") ? T.substring(1) : T}/**`,
						);
					}
					shouldRunInPlaceMutateRequestBeforeSubmit(S) {
						const I = this.composerDataService.getComposerData(this.composerId),
							T = this.composerDataService.getComposerBubble(
								S.composerId,
								S.humanBubbleId,
							);
						return !T ||
							T.type !== d.ConversationMessage_MessageType.HUMAN ||
							I?.isAgentic
							? !1
							: !!T.context?.usesCodebase;
					}
					async runInPlaceMutateRequestBeforeSubmit(S, I) {
						this._params = I;
						const T = this.composerDataService.getComposerData(this.composerId),
							P = this.composerDataService.getComposerBubble(
								this.composerId,
								I.humanBubbleId,
							);
						if (!T || !S.conversation || !P) return;
						this.reset();
						let k = !1;
						if (
							((async () => {
								(await this._composerUtilsService.getShouldChatUseTools()) &&
									(k = !0);
							})().catch((G) => {}),
							k)
						)
							return;
						const L = this._aiSettingsService.getChatDesiredTokenLimit();
						let D;
						try {
							this._reactiveStorageService.nonPersistentStorage.composerState
								.shouldForceHydeCodebase
								? (D = h.SearchType.keyword)
								: (D = this.repositoryService.isIndexedMainLocalRepository()
										? h.SearchType.vector
										: h.SearchType.keyword);
						} catch {
							console.log(
								"[composer] No repos found, defaulting to keyword search",
							),
								(D = h.SearchType.keyword);
						}
						let M = S.conversation
							.map((G) => (G.text !== "" ? G.text : null))
							.filter((G) => G !== null)
							.join(`
`);
						const N = 4e3 * 3;
						M.length > N && (M = M.slice(M.length - N));
						const A = S.conversation
							.filter((G) => G.type === d.ConversationMessage_MessageType.HUMAN)
							.reverse()[0];
						let R = [];
						D === h.SearchType.vector
							? (R = [{ text: M, globsNewLineSeparated: "" }])
							: (R = [{ text: A.text, globsNewLineSeparated: "" }]);
						let O = performance.now();
						const B = D === h.SearchType.keyword,
							z =
								this.getFoldersIncludePattern(S.conversation).length === 0 &&
								S.conversation.length > 2;
						if (B) {
							this.setCurrentStep(a.RepoStep.GeneratingQueries),
								this.updateHydeResults({});
							try {
								for await (const K of this._aiService.aiQueryV2(
									S.conversation,
									D,
									z,
									void 0,
								)) {
									if (this.isAborted()) throw new Error("Aborted");
									this.updateHydeResults({ response: K });
								}
							} catch (K) {
								throw (this.updateHydeResults({ removeHyde: !0 }), K);
							}
							const G = this.hydeResults();
							G?.queries !== void 0 &&
								G.queries.length > 0 &&
								(R = G.queries.map((K) => ({ ...K, text: K.text.trim() })));
						}
						if (this.isAborted()) throw new Error("Aborted");
						let F = performance.now();
						console.log(`[composer] Full queries time: ${F - O}ms`),
							(O = performance.now()),
							this.setCurrentStep(a.RepoStep.SearchingFiles);
						let x = { case: "fileSearchResults", value: { results: [] } },
							H = [],
							q = [];
						const V = this.composerDataService.getComposerData(
							this.composerId,
						)?.codebaseSearchSettings;
						if (D === h.SearchType.keyword) {
							let G = y ? 100 : 16;
							const J = [...this.getFoldersIncludePattern(S.conversation)],
								W = [];
							V?.filesToInclude &&
								J.push(...V.filesToInclude.split(",").map((te) => te.trim())),
								V?.filesToExclude &&
									W.push(...V.filesToExclude.split(",").map((te) => te.trim()));
							const X = await this.keywordSearchService.searchMultipleQueries(
								R,
								{ topK: G, minK: 4, finalK: G },
								void 0,
								J,
								W,
							);
							if (this.isAborted()) throw new Error("Aborted");
							(q = X.map((te) => {
								if (te.file !== void 0)
									return new r.$Ps({
										relativeWorkspacePath: te.file?.relativeWorkspacePath,
										contents: te.file?.contents,
										range: {
											startPosition: { line: 1, column: 1 },
											endPosition: {
												line:
													te.file?.contents.split(`
`).length + 1,
												column: 1,
											},
										},
									});
							}).filter((te) => te !== void 0)),
								(H = X.sort((te, Q) => Q.score - te.score));
							const Y = { case: "fileSearchResults", value: { results: H } },
								ie = this._chatDataService.getRescorerFromEmbeddingsResults(Y),
								ne = this._aiService.getLongContextTokenLimit(void 0, void 0),
								{ contextResults: ee, conversationHistory: _ } = y
									? await this._chatDataService.fitLongContextDataIntoTokenLimit(
											{
												conversationHistory: S.conversation,
												contextResults: Y,
											},
											ne,
											() => ie,
										)
									: { contextResults: Y, conversationHistory: S.conversation };
							if (this.isAborted()) throw new Error("Aborted");
							x = ee ?? Y;
						} else if (D === h.SearchType.vector) {
							const K = y
									? { topK: 1e3, minK: 80, finalK: 1e3 }
									: {
											topK: Math.max(100, 0),
											minK: Math.max(20, 0),
											finalK: Math.max(200, 0),
										},
								W =
									this.getFoldersIncludePattern(S.conversation).length > 0
										? "{" +
											this.getFoldersIncludePattern(S.conversation)
												.map((Q) => `${Q}`)
												.join(",") +
											"}"
										: void 0,
								X = await this.repositoryService.searchMultipleQueries(R, K, {
									newlineSepGlobFilter: W,
									includePattern: V?.filesToInclude,
									excludePattern: V?.filesToExclude,
								});
							if (this.isAborted()) throw new Error("Aborted");
							if (
								((q = X.map((Q) => Q.codeBlock).filter(
									(Q) => Q !== void 0 && Q.contents.length < 2e4,
								)),
								(H = y
									? await this._aiService.getLongContextFileSearchResults(
											X,
											S.conversation,
										)
									: (0, g.$Lfc)(X)),
								this.isAborted())
							)
								throw new Error("Aborted");
							const ie = y
									? { case: "fileSearchResults", value: { results: H } }
									: {
											case: "codeSearchResults",
											value: await (async (Q) => {
												const { files: Z, missingFiles: se } = await (0,
												l.$ehc)(
													Q,
													this._workspaceContextService,
													this._fileService,
												);
												return {
													results: Q,
													allFiles: Z.map((re) => new r.$Rs(re)),
												};
											})(X),
										},
								ne = this._chatDataService.getRescorerFromEmbeddingsResults(ie),
								ee = this._aiService.getLongContextTokenLimit(void 0, void 0),
								{ contextResults: _, conversationHistory: te } = y
									? await this._chatDataService.fitLongContextDataIntoTokenLimit(
											{
												conversationHistory: S.conversation,
												contextResults: ie,
											},
											ee,
											() => ne,
										)
									: { contextResults: ie, conversationHistory: S.conversation };
							x = _ ?? ie;
						}
						(F = performance.now()),
							console.log(`[composer] Vector search time: ${F - O}ms`),
							(O = performance.now()),
							this.setFileResults(
								H.map((G) =>
									G.file !== void 0
										? {
												file: {
													relativeWorkspacePath: G.file.relativeWorkspacePath,
												},
												score: G.score,
											}
										: { score: G.score },
								),
							),
							(F = performance.now()),
							console.log(`[composer] File results time: ${F - O}ms`),
							(O = performance.now()),
							this.setCodeBlockResults(q),
							(F = performance.now()),
							console.log(`[composer] Code block results time: ${F - O}ms`),
							this.setCurrentStep(a.RepoStep.GeneratingTokens),
							Object.assign(S, {
								contextResults: x,
								rerankResults: !0,
								rerankResultsV2:
									this._reactiveStorageService.workspaceUserPersistentStorage
										.shouldRerankByDefault,
								longContextMode: y,
							});
					}
					renderMutateRequest() {
						return c.ComposerUsesCodebaseStatus;
					}
					reset() {
						this._disposables.forEach((S) => S.dispose()),
							(this._disposables = []),
							(this._params = void 0),
							this.setCurrentStep(a.RepoStep.None),
							this.setHydeResults(void 0),
							this.setFileResults([]),
							this.setCodeBlockResults([]);
					}
					dispose() {
						super.dispose();
					}
					updateHydeResults(S) {
						const { response: I, removeHyde: T = !1 } = S;
						if (T) {
							this.setHydeResults(void 0);
							return;
						}
						if (I === void 0) {
							this.setHydeResults({ reasoning: "", queries: [] });
							return;
						}
						let P = this.hydeResults() ?? { reasoning: "", queries: [] };
						if (
							((P = JSON.parse(JSON.stringify(P))),
							I.queryOrReasoning.case === "reasoning" &&
								(P.reasoning += I.queryOrReasoning.value),
							I.queryOrReasoning.case === "query")
						) {
							const { index: k, partialQuery: L } = I.queryOrReasoning.value;
							k === P.queries.length &&
								P.queries.push({ text: "", globsNewLineSeparated: "" }),
								L.case === "glob"
									? (P.queries[k].globsNewLineSeparated += L.value)
									: L.case === "text" && (P.queries[k].text += L.value);
						}
						this.setHydeResults(P);
					}
				};
				(e.UsesCodebase = $),
					(e.UsesCodebase = $ =
						Ne(
							[
								(0, w.autoCancellableAndStatusUpdater)(),
								j(2, E.IComposerDataService),
								j(3, C.$J6b),
								j(4, u.$O6b),
								j(5, n.$0zb),
								j(6, g.$Nfc),
								j(7, f.$36b),
								j(8, p.$S6b),
								j(9, o.$kgc),
								j(10, b.IComposerUtilsService),
								j(11, m.$Vi),
								j(12, s.$ll),
							],
							$,
						)),
					(0, i.registerComposerCapability)(
						t.ComposerCapabilityRequest_ComposerCapabilityType.USES_CODEBASE,
						$,
					);
			},
		),
		