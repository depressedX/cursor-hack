define(
			de[1318],
			he([
				1, 0, 21, 25, 225, 193, 47, 126, 9, 299, 298, 140, 28, 272, 418, 246,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.INLINE_DIFF_STORAGE_KEY = void 0),
					(e.getComposerDataStorageScope = b),
					(e.COMPOSER_DATA_STORAGE_KEY = s),
					(e.deserializeComposerDataFromString = $),
					(e.disposeComposerData = v),
					(e.getComposerDataToSave = S),
					(e.serializeComposerDataToString = I),
					(e.createComposerData = P),
					(e.getStore = k);
				function p(L) {
					if (L.type !== "user") return;
					const D = (0, u.$2gc)();
					let M;
					(L.dropdownAdvancedCodebaseSearchBehavior ||
						L.dropdownAdvancedCodebaseContextOptions ||
						L.advancedCodebaseContextOptions) &&
						(M = {
							searchBehavior:
								L.dropdownAdvancedCodebaseSearchBehavior ||
								L.advancedCodebaseContextOptions?.reranker ===
									c.RerankerAlgorithm.LULEA
									? "reranker"
									: "embeddings",
							options:
								L.advancedCodebaseContextOptions ||
								L.dropdownAdvancedCodebaseContextOptions,
						});
					for (const N of u.$Xgc) {
						const A = N;
						if ((0, u.$Ygc)(A)) {
							const R = L[A];
							Array.isArray(R) && (D[A] = R);
						} else {
							const R = L[A];
							if (R !== void 0)
								if (A === "usesCodebase") D.usesCodebase = M ?? R;
								else
									switch (A) {
										case "gitDiff":
										case "gitDiffFromBranchToMain":
										case "useWeb":
										case "useLinterErrors":
										case "useDiffReview":
										case "useContextPicking":
										case "useRememberThis":
											D[A] = R;
											break;
										case "diffHistory":
											D.diffHistory = R;
											break;
									}
						}
					}
					return L.mentions && (D.mentions = L.mentions), D;
				}
				function o(L) {
					return L.tabs
						.filter((D) => D.tabState === a.TabState.chat)
						.map((D) => {
							const M = (0, C.$9g)(),
								N = (0, w.createEmptyComposer)(M, "chat"),
								A = D.bubbles
									.map((B) => {
										const U = f();
										if (B.type === "user") {
											const z = B;
											return {
												...U,
												type: d.ConversationMessage_MessageType.HUMAN,
												text: z.text || "",
												richText: z.richText,
												bubbleId: z.id,
												context: p(z),
											};
										} else if (B.type === "ai") {
											const z = B;
											return {
												...U,
												type: d.ConversationMessage_MessageType.AI,
												text: z.text || "",
												bubbleId: z.id,
												codeBlocks: [],
											};
										}
									})
									.filter(h.$tg),
								R = A[A.length - 1];
							R &&
								R.type === d.ConversationMessage_MessageType.HUMAN &&
								(A.pop(),
								(N.text = R.text || ""),
								(N.richText = R.richText || ""),
								(N.context = R.context || (0, u.$2gc)()));
							const O = D.lastSendTime ?? Date.now();
							return {
								...N,
								name: D.chatTitle,
								conversation: A,
								createdAt: O,
								lastUpdatedAt: O,
								tabs: (0, w.createEmptyComposerTabs)(),
								selectedTabIndex: 1,
								codeBlockData: {},
								inlineDiffIdMap: {},
								newlyCreatedFiles: [],
								newlyCreatedFolders: [],
								capabilities: [],
								status: "completed",
							};
						});
				}
				function f() {
					return {
						type: d.ConversationMessage_MessageType.HUMAN,
						approximateLintErrors: [],
						lints: [],
						codebaseContextChunks: [],
						commits: [],
						pullRequests: [],
						attachedCodeChunks: [],
						assistantSuggestedDiffs: [],
						gitDiffs: [],
						interpreterResults: [],
						images: [],
						attachedFolders: [],
						attachedFoldersNew: [],
						bubbleId: (0, C.$9g)(),
						userResponsesToSuggestedCodeBlocks: [],
						suggestedCodeBlocks: [],
						diffsForCompressingFiles: [],
						relevantFiles: [],
						toolResults: [],
						notepads: [],
						capabilities: [],
						editTrailContexts: [],
						multiFileLinterErrors: [],
						diffHistories: [],
						isAgentic: !1,
						recentLocationsHistory: [],
						recentlyViewedFiles: [],
						fileDiffTrajectories: [],
						existedSubsequentTerminalCommand: !1,
						existedPreviousTerminalCommand: !1,
						docsReferences: [],
						webReferences: [],
						attachedFoldersListDirResults: [],
					};
				}
				function b(L) {
					return L.getWorkbenchState() === i.WorkbenchState.EMPTY
						? t.StorageScope.APPLICATION
						: t.StorageScope.WORKSPACE;
				}
				function s(L) {
					return `composerData:${L}`;
				}
				e.INLINE_DIFF_STORAGE_KEY = "inlineDiffsData";
				function l(L, D) {
					const M = I(L),
						N = [1e3, 5e3, 1e4, 2e4];
					let A = 0;
					const R = async () => {
						try {
							await new Promise((O) => setTimeout(O, Math.random() * 40 + 10)),
								await D.cursorDiskKVSet(s(L.composerId), M);
						} catch (O) {
							if (A < N.length)
								return (
									console.warn(
										`[composer] Failed to migrate composer data (attempt ${A + 1}), retrying in ${N[A] / 1e3}s`,
										O,
									),
									await new Promise((B) => setTimeout(B, N[A])),
									A++,
									R()
								);
							console.error(
								"[composer] Failed to migrate composer data after all retries",
								O,
							);
						}
					};
					R().catch((O) => {
						console.error(
							"[composer] Unexpected error during migration retry",
							O,
						);
					});
				}
				function y(L, D) {
					let M = L.hasMigratedChatData ?? !1,
						N = L.hasMigratedComposerData ?? !1,
						A = L.hasMigratedUseAutoContext,
						R = !1,
						O = L.allComposers;
					if (
						(N ||
							((O = O.map((x) =>
								x.type === "head"
									? x
									: (l(x, D.storageService), (0, w.getComposerHeaderData)(x)),
							)),
							(N = !0),
							(R = !0)),
						D.shouldMigrateChatData &&
							D.workspaceContextService &&
							D.storageService)
					) {
						const x = n.AIChatConstants.CHAT_REACTIVE_STORAGE_ID,
							H = b(D.workspaceContextService),
							q = D.storageService.get(x, H);
						if (q)
							try {
								const V = JSON.parse(q);
								V &&
									((O = [
										...o(V).map(
											(J) => (
												l(J, D.storageService), (0, w.getComposerHeaderData)(J)
											),
										),
										...O,
									]),
									(M = !0),
									(R = !0));
							} catch (V) {
								console.error("[composer] Error parsing chat data", V);
							}
					}
					A ||
						(D.reactiveStorageService.setApplicationUserPersistentStorage(
							"composerState",
							"useAutoContext",
							!0,
						),
						(A = !0)),
						(O = (0, g.sortComposers)(O));
					let B = L.selectedComposerId,
						U = L.selectedChatId;
					const z = O.some((x) => x.composerId === B && x.forceMode !== "chat"),
						F = O.some((x) => x.composerId === U && x.forceMode === "chat");
					if (!z) {
						const x = (0, C.$9g)(),
							H = (0, w.createEmptyComposer)(x);
						l(H, D.storageService),
							(B = x),
							(O = [(0, w.getComposerHeaderData)(H), ...O]),
							(R = !0);
					}
					if (!F) {
						const x = (0, C.$9g)(),
							H = (0, w.createEmptyComposer)(x, "chat");
						l(H, D.storageService),
							(U = x),
							(O = [(0, w.getComposerHeaderData)(H), ...O]),
							(R = !0);
					}
					return (
						(L = {
							allComposers: O,
							selectedComposerId: B,
							selectedChatId: U,
							hasMigratedChatData: M,
							hasMigratedUseAutoContext: A,
							hasMigratedComposerData: N,
							selectedComposerHandle: void 0,
							selectedComposerHandlePromise: void 0,
							selectedChatHandle: void 0,
							selectedChatHandlePromise: void 0,
						}),
						[L, { didMigrateComposerOrChatData: R }]
					);
				}
				function $(L) {
					const D = JSON.parse(L),
						M = { ...(0, w.createEmptyComposer)(D.composerId), ...D };
					(M.context = { ...(0, u.$2gc)(), ...(0, r.$ahc)(D.context) }),
						M.conversation.forEach((A) => {
							A.context && (A.context = (0, r.$ahc)(A.context)),
								A.codeBlocks &&
									(A.codeBlocks = A.codeBlocks.map((R) => ({
										uri: m.URI.revive(R.uri),
										version: R.version,
										codeBlockIdx: R.codeBlockIdx,
									})));
						}),
						(M.codeBlockData = Object.fromEntries(
							Object.entries(D.codeBlockData).map(([A, R]) => [
								A,
								R.map((O) => {
									O.version === 0 &&
										O.originalModelLines !== void 0 &&
										(M.originalModelLines[A] = O.originalModelLines);
									let B = O.status;
									B === "generating"
										? (B = "aborted")
										: B === "applying" && (B = "cancelled");
									const U = m.URI.revive(O.uri);
									return { ...O, uri: U, status: B };
								}),
							]),
						)),
						(M.tabs = M.tabs.map((A) =>
							A.type === "code" ? { ...A, uri: m.URI.revive(A.uri) } : A,
						)),
						(M.conversation = M.conversation.map((A) => {
							const R = A.codeBlocks?.map((F) => ({
									uri: m.URI.revive(F.uri),
									version: F.version,
									codeBlockIdx: F.codeBlockIdx,
								})),
								O = A.checkpoint
									? (0, w.reviveCheckpoint)(A.checkpoint)
									: void 0,
								B = A.capabilityStatuses
									? {
											...(0, w.createEmptyCapabilityStatuses)(),
											...Object.fromEntries(
												Object.entries(A.capabilityStatuses)
													.filter(([F]) => F !== "process-codeblock")
													.map(([F, x]) => [
														F,
														x.map((H) => ({
															...H,
															status:
																H.status === "generating"
																	? "aborted"
																	: H.status,
														})),
													]),
											),
										}
									: void 0,
								U = A.capabilityCodeBlocks
									? A.capabilityCodeBlocks.map((F) => ({
											...F,
											status: F.status === "generating" ? "aborted" : F.status,
										}))
									: void 0,
								z =
									A.type === d.ConversationMessage_MessageType.HUMAN
										? {
												...(0, u.$2gc)(),
												...(A.context ? (0, r.$ahc)(A.context) : {}),
											}
										: void 0;
							return {
								...f(),
								...A,
								codeBlocks: R,
								capabilityStatuses: B,
								capabilityCodeBlocks: U,
								context: z,
								checkpoint: O,
							};
						}));
					let N = M.status;
					return (
						N === "generating" && (N = "aborted"),
						(M.status = N),
						M.tabs[0].type !== "extra" &&
							(M.tabs = [{ type: "extra" }, ...M.tabs]),
						(M.selectedTabIndex = 1),
						(M.hasLoaded = !1),
						M
					);
				}
				function v(L) {
					for (const D of L.capabilities) D.dispose();
				}
				function S(L, D = !0) {
					const {
						composerId: M,
						name: N,
						text: A,
						richText: R,
						conversation: O,
						status: B,
						lastUpdatedAt: U,
						createdAt: z,
						userResponsesToSuggestedCodeBlocks: F,
						codeBlockData: x,
						hasChangedContext: H,
						backgroundInfo: q,
						capabilities: V,
						tabs: G,
						forceMode: K,
						isAgentic: J,
						originalModelLines: W,
					} = L;
					let X = L.context,
						Y;
					G[0].type === "extra" ? (Y = G.slice(1)) : (Y = G);
					const ie = Object.fromEntries(
							Object.entries(x).map(([_, te]) => [
								_,
								te.map((Q) => {
									let Z = Q.status;
									return (
										Z === "generating"
											? (Z = "aborted")
											: Z === "applying" && (Z = "cancelled"),
										D
											? {
													uri: Q.uri,
													version: Q.version,
													content: Q.content,
													languageId: Q.languageId,
													startLine: Q.startLine,
													endLine: Q.endLine,
													status: Z,
													isNotApplied: Q.isNotApplied,
													originalModelDiffWrtV0: Q.originalModelDiffWrtV0,
													newModelDiffWrtV0: Q.newModelDiffWrtV0,
													isNoOp: Q.isNoOp,
												}
											: { ...Q, status: Z }
									);
								}),
							]),
						),
						ne = B === "generating" ? "aborted" : B,
						ee = O.map((_) => {
							if (
								_.capabilityCodeBlocks?.some(
									(oe) => oe.type === w.DiffReviewCodeBlockAlias,
								)
							)
								return;
							const {
									capabilityStatuses: te,
									capabilityCodeBlocks: Q,
									recentlyViewedFiles: Z,
									...se
								} = _,
								re = te
									? Object.fromEntries(
											Object.entries(te)
												.filter(([oe]) => oe !== "process-codeblock")
												.map(([oe, ae]) => [
													oe,
													ae.map((pe) => ({
														...pe,
														status:
															pe.status === "generating"
																? "aborted"
																: pe.status,
													})),
												]),
										)
									: void 0,
								le = Q
									? Q.map((oe) => ({
											...oe,
											status:
												oe.status === "generating" ? "aborted" : oe.status,
										}))
									: void 0;
							if (D) {
								const {
									attachedCodeChunks: oe,
									codebaseContextChunks: ae,
									commits: pe,
									pullRequests: $e,
									gitDiffs: ye,
									assistantSuggestedDiffs: ue,
									interpreterResults: fe,
									images: me,
									attachedFolders: ve,
									approximateLintErrors: ge,
									attachedFoldersNew: be,
									lints: Ce,
									userResponsesToSuggestedCodeBlocks: Le,
									diffsForCompressingFiles: Fe,
									toolResults: Oe,
									notepads: xe,
									capabilities: He,
									...Ke
								} = se;
								return {
									...Ke,
									capabilityStatuses: re,
									capabilityCodeBlocks: le,
								};
							} else
								return {
									...se,
									capabilityStatuses: re,
									capabilityCodeBlocks: le,
								};
						}).filter(h.$tg);
					return (
						(X = { ...X, terminalFiles: void 0 }),
						{
							...(0, w.createEmptyComposer)(),
							composerId: M,
							name: N,
							text: A,
							richText: R,
							conversation: ee,
							status: ne,
							lastUpdatedAt: U,
							createdAt: z,
							context: X,
							userResponsesToSuggestedCodeBlocks: F,
							codeBlockData: ie,
							tabs: Y,
							hasChangedContext: H,
							backgroundInfo: q,
							capabilities: V,
							forceMode: K === "chat" ? "chat" : "edit",
							isAgentic: J,
							originalModelLines: W,
						}
					);
				}
				function I(L) {
					return JSON.stringify(S(L));
				}
				function T(L, D, M, N, A, R, O) {
					const B = (0, w.createEmptyComposer)(L, "edit"),
						U = (0, w.createEmptyComposer)(D, "chat");
					return (
						l(B, M),
						l(U, M),
						{
							allComposers: [
								(0, w.getComposerHeaderData)(B),
								(0, w.getComposerHeaderData)(U),
							],
							selectedComposerId: L,
							selectedChatId: D,
							hasMigratedChatData: A,
							hasMigratedUseAutoContext: R,
							hasMigratedComposerData: O,
							selectedComposerHandle: void 0,
							selectedComposerHandlePromise: void 0,
							selectedChatHandle: void 0,
							selectedChatHandlePromise: void 0,
						}
					);
				}
				function P(L, D, M, N, A) {
					const R =
						M.getWorkbenchState() === i.WorkbenchState.EMPTY
							? t.StorageScope.APPLICATION
							: t.StorageScope.WORKSPACE;
					let O;
					O = L.get(A, R);
					let B = !1,
						U = !1,
						z = !1,
						F = !1,
						x = {
							allComposers: [],
							selectedComposerId: "",
							selectedChatId: "",
							hasMigratedChatData: B,
							hasMigratedUseAutoContext: U,
							hasMigratedComposerData: z,
							selectedComposerHandle: void 0,
							selectedComposerHandlePromise: void 0,
							selectedChatHandle: void 0,
							selectedChatHandlePromise: void 0,
						};
					if (O && !0)
						try {
							let K = JSON.parse(O);
							if (
								((B = !!K.hasMigratedChatData),
								(U = !!K.hasMigratedUseAutoContext),
								K)
							) {
								const [J, W] = y(K, {
									shouldMigrateChatData: !B,
									workspaceContextService: M,
									storageService: L,
									reactiveStorageService: D,
									composerDataHandleManager: N,
								});
								(x = J), (F = W.didMigrateComposerOrChatData);
							} else
								throw new Error("[composer] No stored composers data found");
						} catch (K) {
							console.error(
								"[composer] Error parsing stored composers data:",
								K,
							);
							const J = (0, C.$9g)();
							x = T(J, (0, C.$9g)(), L, D, B, U, z);
						}
					else {
						const K = (0, C.$9g)();
						(F = !0), (x = T(K, (0, C.$9g)(), L, D, B, U, z));
					}
					console.log(
						"[composer] initial composers",
						JSON.parse(JSON.stringify(x)),
					);
					const [q, V] = (0, E.createStore)(x);
					return [
						q,
						V,
						() => {
							const K = (0, C.$9g)(),
								J = (0, w.createEmptyComposer)(K),
								W = (0, C.$9g)(),
								X = (0, w.createEmptyComposer)(W, "chat");
							return (
								N.pushComposer(J),
								N.pushComposer(X),
								V("allComposers", [
									(0, w.getComposerHeaderData)(J),
									(0, w.getComposerHeaderData)(X),
								]),
								V("selectedComposerId", K),
								V("selectedChatId", W),
								J
							);
						},
						{
							shouldWaitFor10SecondsWhileReadingFromDiskAtStartup: F,
							fromDate: Date.now(),
						},
					];
				}
				function k(L) {
					return (0, E.createStore)(L);
				}
			},
		),
		