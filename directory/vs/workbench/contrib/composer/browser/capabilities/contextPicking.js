define(
			de[3952],
			he([
				1, 0, 167, 219, 262, 395, 351, 209, 126, 225, 1053, 118, 25, 271, 226,
				246, 9,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ContextPicking = void 0);
				const o = 15,
					f = 100,
					b = 50,
					s = 1e4;
				let l = class extends w.ComposerCapability {
					constructor($, v, S, I, T, P, k, L, D) {
						super($, v),
							(this.composerDataService = S),
							(this.composerService = I),
							(this.contextBankService = T),
							(this.aiService = P),
							(this.workspaceContextService = k),
							(this.selectedContextService = L),
							(this.repositoryService = D),
							(this.priority = 1),
							(this.type =
								t.ComposerCapabilityRequest_ComposerCapabilityType.CONTEXT_PICKING),
							(this.name =
								w.capabilityTypeLabels[
									t.ComposerCapabilityRequest_ComposerCapabilityType.CONTEXT_PICKING
								]),
							(this.schema = C.contextPickingSchema);
					}
					silentOnStartSubmitChat($) {
						return !0;
					}
					async onStartSubmitChatReturnShouldStop($) {
						return !this.composerDataService.getComposerData(this.composerId) ||
							$.contextUsed?.useContextPicking !== !0
							? !1
							: (await this.runContextPicking(
									$.submitChatProps.text,
									$.submitChatProps.extra,
								),
								!0);
					}
					async runContextPicking($, v) {
						$ = $.replaceAll("/Pick Context", "");
						const S = this.composerDataService.getComposerData(this.composerId);
						if (!S) throw new Error("[composer] Composer data not found");
						const I = {
								...(0, r.createDefaultConversationMessage)(),
								richText: v?.richText ?? $,
								text: $,
								type: m.ConversationMessage_MessageType.HUMAN,
								context: { ...S.context, useContextPicking: !0 },
								userResponsesToSuggestedCodeBlocks:
									S.userResponsesToSuggestedCodeBlocks ?? [],
								checkpoint: (0, r.createEmptyCheckpoint)(),
								isCapabilityIteration: v?.isCapabilityIteration,
								attachedCodeChunks:
									await this.selectedContextService.getCodeChunks(S.context, {
										worktreePath: S.backgroundInfo?.worktreePath,
									}),
							},
							T = {
								...(0, r.createDefaultConversationMessage)(),
								type: m.ConversationMessage_MessageType.AI,
								text: "```context_picking\n",
								isCapabilityIteration: v?.isCapabilityIteration,
								capabilityCodeBlocks: [
									{
										type: r.ContextPickingCodeBlockAlias,
										status: "generating",
										codeBlockIdx: 0,
									},
								],
							};
						this.composerDataService.updateComposerDataSetStore(
							this.composerId,
							(N) => N("conversation", [...S.conversation, I, T]),
						);
						const P = new AbortController();
						let k = [];
						try {
							const N = this.repositoryService.parallelSearch($, f, b, {
									fast: !0,
									raceNRequests: 6,
									abortSignal: P.signal,
								}),
								A = setTimeout(() => {
									console.error(
										"[composer] Aborting context picking semantic search",
									),
										P.abort();
								}, s),
								R = await N;
							if ((clearTimeout(A), R.length > 0)) {
								const O = new Set(
									S.context.fileSelections.map((B) =>
										this.workspaceContextService.asRelativePath(
											p.URI.revive(B.uri),
										),
									),
								);
								(k = (0, g.dedupeCodeResults)(R).filter((B) => !O.has(B))),
									console.log("[composer] Semantic search results:", k);
							}
						} catch (N) {
							console.error("[composer] Error during semantic search:", N);
						}
						let L;
						(L = k.slice(0, o)),
							(L = (
								await this.contextBankService.getRankedFiles({
									numberOfChunks: o,
									composerRequest: {
										conversation: S.conversation,
										currentFile: await this.aiService.getCurrentFileInfo(),
									},
									useCachedResults: !1,
									composerId: this.composerId,
								})
							)
								.map((N) => N.context?.relativeWorkspacePath)
								.filter((N) => N !== void 0));
						const M = `potential_files: [${L.join(", ")}]`;
						this.composerDataService.updateComposerCapabilityCodeBlock(
							this.composerId,
							T.bubbleId,
							0,
							{ content: M, status: "completed" },
						),
							await this.processCodeBlock({
								composerId: this.composerId,
								humanBubbleId: I.bubbleId,
								aiBubbleId: T.bubbleId,
								capabilityCodeBlock: {
									type: r.ContextPickingCodeBlockAlias,
									status: "completed",
									codeBlockIdx: 0,
									content: M,
								},
								isCapabilityIteration: v?.isCapabilityIteration,
							}),
							this.composerDataService.updateComposerData(this.composerId, {
								status: "completed",
							}),
							this.composerDataService.addActionButton(
								this.composerId,
								"Continue with context",
								() => (
									this.composerService.submitChatMaybeAbortCurrent(
										this.composerId,
										$,
										{ isCapabilityIteration: !0, richText: v?.richText },
									),
									!0
								),
							);
					}
					shouldProcessCodeBlock($) {
						const v = $.capabilityCodeBlock;
						return !(
							!v ||
							v.type !== r.ContextPickingCodeBlockAlias ||
							!v.content
						);
					}
					async processCodeBlock($) {
						const v = $.capabilityCodeBlock;
						if (!v || v.type !== r.ContextPickingCodeBlockAlias || !v.content)
							throw new Error(
								"[composer] Invalid code block for ContextPicking",
							);
						try {
							const I = v.content.match(/potential_files:\s*\[(.*)\]/);
							if (!I)
								throw new Error(
									"[composer] Invalid context picking content format",
								);
							const T = I[1]
								.split(",")
								.map((P) => P.trim())
								.filter((P) => P.length > 0);
							this.composerDataService.updateComposerCapabilityCodeBlock(
								this.composerId,
								$.aiBubbleId,
								v.codeBlockIdx,
								{ parsedContextPicking: T, status: "completed" },
							);
						} catch (S) {
							throw (
								(console.error(
									"[composer] Error processing context picking code block:",
									S,
								),
								S)
							);
						}
					}
					silentRunInPlaceMutateRequestBeforeSubmit($) {
						return !0;
					}
					async runInPlaceMutateRequestBeforeSubmit($, v) {
						const { composerId: S } = v;
						this.composerDataService.getComposerData(S) &&
							($.conversation = $.conversation?.filter((T, P) => {
								if (T.type === m.ConversationMessage_MessageType.HUMAN)
									return !T.context?.useContextPicking;
								if (T.type === m.ConversationMessage_MessageType.AI && P > 0) {
									const k = $.conversation?.[P - 1];
									if (k && k.type === m.ConversationMessage_MessageType.HUMAN)
										return !k.context?.useContextPicking;
								}
								return !0;
							}));
					}
				};
				(e.ContextPicking = l),
					(e.ContextPicking = l =
						Ne(
							[
								(0, E.autoCancellableAndStatusUpdater)(),
								j(2, d.IComposerDataService),
								j(3, i.IComposerService),
								j(4, u.$Wcc),
								j(5, a.$Nfc),
								j(6, h.$Vi),
								j(7, c.$Q9b),
								j(8, n.$J6b),
							],
							l,
						)),
					(0, w.registerComposerCapability)(
						t.ComposerCapabilityRequest_ComposerCapabilityType.CONTEXT_PICKING,
						l,
					);
			},
		),
		