import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../composerCapabilities.js';
import '../composerCapabilitySchemas.js';
import '../composer.js';
import '../../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../../base/common/uri.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../composerDataService.js';
import '../../../../../../proto/aiserver/v1/chat_pb.js';
import '../composerData.js';
import '../../../../../../proto/aiserver/v1/composer_pb.js';
import '../composerCapabilityDecorators.js';
import '../../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../../editor/browser/services/inlineDiffService.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../base/common/uuid.js';
import '../../../../../editor/browser/services/inlineDiffServiceUtils.js';
import '../../../../../base/common/codicons.js';
import '../../../../services/ai/browser/utils.js';
import '../../../../services/ai/browser/aiService.js';
import '../components/ComposerDiffReviewMessage.js';
import '../../../../../editor/common/core/position.js';
define(
			de[4283],
			he([
				1, 0, 262, 351, 219, 83, 9, 25, 209, 126, 225, 167, 395, 45, 383, 42,
				47, 1190, 14, 191, 118, 4282, 48,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.DiffReview = void 0);
				const $ = "Review changes",
					v = "review-changes-button";
				function S(P, k) {
					return P.endLineNumberExclusive <= k.startLineNumber
						? o.RangeWhereIs.After
						: P.startLineNumber > k.endLineNumber ||
								(P.startLineNumber === k.endLineNumber && k.endColumn === 1)
							? o.RangeWhereIs.Before
							: o.RangeWhereIs.Overlap;
				}
				function I(P, k) {
					const L = P.length,
						D = k.length,
						M = Array(L + 1)
							.fill(0)
							.map(() => Array(D + 1).fill(0));
					for (let N = 0; N <= L; N++) M[N][0] = N;
					for (let N = 0; N <= D; N++) M[0][N] = N;
					for (let N = 1; N <= L; N++)
						for (let A = 1; A <= D; A++)
							P[N - 1] === k[A - 1]
								? (M[N][A] = M[N - 1][A - 1])
								: (M[N][A] =
										1 + Math.min(M[N - 1][A], M[N][A - 1], M[N - 1][A - 1]));
					return M[L][D];
				}
				let T = class extends t.ComposerCapability {
					constructor(k, L, D, M, N, A, R, O, B) {
						super(k, L),
							(this.composerDataService = D),
							(this.composerService = M),
							(this.reactiveStorageService = N),
							(this.workspaceContextService = A),
							(this.inlineDiffService = R),
							(this.textModelService = O),
							(this.aiService = B),
							(this.priority = 10),
							(this.type =
								a.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_REVIEW),
							(this.name =
								t.capabilityTypeLabels[
									a.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_REVIEW
								]),
							(this.schema = i.diffReviewSchema),
							(this._allDiffs = new Map()),
							(this._disposables = []),
							(this._skipModelChangeEvent = !1),
							(this._skipInlineDiffChangeEvent = !1),
							(this._mappedDiffs = new Map()),
							(this._uriVersions = new Map()),
							(this._isProcessingGroupAction = null),
							(this._shouldSkipClearText = !1),
							([this.diffReviewData, this.setDiffReviewData] = (0,
							t.createStore)([])),
							([this.currentStep, this.setCurrentStep] = (0, t.createSignal)(
								0,
							)),
							([this.relevantUris, this.setRelevantUris] = (0, t.createSignal)(
								[],
							)),
							([this.aiBubbleId, this.setAiBubbleId] = (0, t.createSignal)(
								null,
							)),
							([this.status, this.setStatus] = (0, t.createSignal)("loading"));
					}
					silentOnComposerDone(k) {
						return !0;
					}
					async onComposerDone(k) {
						this.composerDataService.getComposerData(this.composerId) &&
							this.shouldDoDiffReview() &&
							(this.reactiveStorageService.applicationUserPersistentStorage
								.composerState.shouldReviewChanges === "auto"
								? ((this._shouldSkipClearText = !0),
									this.composerService.submitChatMaybeAbortCurrent(
										k.composerId,
										"",
										{ useDiffReview: !0, isCapabilityIteration: !0 },
									))
								: (this.composerDataService.addActionButton(
										k.composerId,
										$,
										() => (
											this.composerService.submitChatMaybeAbortCurrent(
												k.composerId,
												"",
												{ useDiffReview: !0, isCapabilityIteration: !0 },
											),
											!0
										),
										{
											icon: f.$ak.openPreview,
											id: v,
											hintText: "Group changes semantically to review them",
										},
									),
									this._disposables.push(
										this.reactiveStorageService.onChangeEffectManuallyDisposed({
											deps: [
												() =>
													this.composerDataService.getAllInlineDiffs(
														this.composerId,
													),
											],
											onChange: ({ deps: D }) => {
												D[0].length === 0 &&
													this.composerDataService
														.getActionButtons(this.composerId)
														.filter((N) => N.label === $).length > 0 &&
													this.composerDataService.removeActionButton(
														this.composerId,
														v,
													);
											},
										}),
									)));
					}
					silentRunInPlaceMutateRequestBeforeSubmit(k) {
						return !0;
					}
					silentOnBeforeSubmitChat(k) {
						return !0;
					}
					async onStartSubmitChatReturnShouldStop(k, L) {
						const D = this._shouldSkipClearText;
						this._shouldSkipClearText = !1;
						const M = this.composerDataService.getComposerData(this.composerId);
						if (!M || (this.reset(), !this.shouldDoDiffReview(k))) return !1;
						let N = {
							...(0, u.createDefaultConversationMessage)(),
							codeBlocks: [],
							type: r.ConversationMessage_MessageType.AI,
							text: "",
							isThought: !1,
							isCapabilityIteration: !1,
							timingInfo: {
								clientStartTime: Date.now(),
								clientRpcSendTime: Date.now(),
							},
							capabilityType:
								a.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_REVIEW,
						};
						this.setAiBubbleId(N.bubbleId),
							this.composerDataService.updateComposerData(this.composerId, {
								conversation: [...M.conversation, N],
								generatingBubbleIds: [
									...(M.generatingBubbleIds ?? []),
									N.bubbleId,
								],
								status: "generating",
							}),
							this.setStatus("loading");
						const A = this.composerDataService.getAllInlineDiffs(
							this.composerId,
						);
						D || this.composerService.clearText(this.composerId),
							await this.composerService.saveAll(this.composerId, {
								skipSaveParticipants: !0,
								force: !0,
							});
						const R = [];
						for (const x of A)
							if (x) {
								const H = new a.$0z({
									relativeWorkspacePath:
										this.workspaceContextService.asRelativePath(x.uri),
									chunks: [],
								});
								for (const q of x.changes) {
									const V = x.newTextLines.slice(
											q.addedRange.startLineNumber - 1,
											q.addedRange.endLineNumberExclusive - 1,
										),
										G = [...q.removedTextLines],
										K = new a.$$z({
											oldLines: G,
											newLines: V,
											oldRange: new E.$Ms({
												startLineNumber:
													q.removedLinesOriginalRange.startLineNumber,
												endLineNumberInclusive:
													q.removedLinesOriginalRange.endLineNumberExclusive -
													1,
											}),
											newRange: new E.$Ms({
												startLineNumber: q.addedRange.startLineNumber,
												endLineNumberInclusive:
													q.addedRange.endLineNumberExclusive - 1,
											}),
										});
									H.chunks.push(K);
								}
								R.push(H);
							}
						const O = {
								diffs: R,
								customInstructions: this.data.customInstructions,
								usePremiumModel: L,
							},
							B = await this.aiService.aiClient();
						let U = 0;
						const z = 5;
						let F = !1;
						for (; U < z && !F; )
							try {
								if (this.isAborted())
									return (
										this.reset(),
										this.composerDataService.updateComposerData(
											this.composerId,
											{
												generatingBubbleIds:
													M.generatingBubbleIds?.filter(
														(G) => G !== N.bubbleId,
													) ?? [],
												chatGenerationUUID: void 0,
											},
										),
										!0
									);
								const x = this.getAbortSignal(),
									H = M.chatGenerationUUID ?? (0, p.$9g)(),
									q = B.streamDiffReview(O, {
										signal: x,
										headers: (0, b.$m6b)(H),
									});
								let V = "";
								for await (const G of q) {
									const { text: K } = G;
									V += K;
								}
								if (
									this.reactiveStorageService.nonPersistentStorage.composerState
										.shouldSimulateDiffReviewError
								)
									throw new Error("Simulated diff review error");
								this.processContent(V),
									(F = !0),
									this.composerDataService.updateComposerData(this.composerId, {
										generatingBubbleIds:
											M.generatingBubbleIds?.filter((G) => G !== N.bubbleId) ??
											[],
										chatGenerationUUID: void 0,
										status: "completed",
									}),
									this.setStatus("completed");
							} catch (x) {
								if ((U++, U === z && !this.isAborted()))
									return (
										console.error(
											"[composer] Failed to process content after max retries:",
											x,
										),
										this.setStatus("failed"),
										this.composerDataService.updateComposerData(
											this.composerId,
											{
												generatingBubbleIds:
													M.generatingBubbleIds?.filter(
														(H) => H !== this.aiBubbleId(),
													) ?? [],
												chatGenerationUUID: void 0,
												status: "completed",
											},
										),
										!0
									);
								await new Promise((H) => setTimeout(H, 200));
							}
						return (
							this.isAborted() &&
								(this.reset(),
								this.composerDataService.updateComposerData(this.composerId, {
									generatingBubbleIds:
										M.generatingBubbleIds?.filter((x) => x !== N.bubbleId) ??
										[],
									chatGenerationUUID: void 0,
								})),
							!0
						);
					}
					tryAgain(k = !1) {
						let L;
						this._params
							? (L = { ...this._params })
							: (L = {
									composerId: this.composerId,
									submitChatProps: { text: "", extra: { useDiffReview: !0 } },
								}),
							this.reset(),
							this.onStartSubmitChatReturnShouldStop(L, k);
					}
					renderAIBubble() {
						return l.ComposerDiffReviewMessage;
					}
					shouldDoDiffReview(k) {
						if (
							this.reactiveStorageService.applicationUserPersistentStorage
								.composerState.shouldReviewChanges === "disabled"
						)
							return !1;
						const L = this.composerDataService.getComposerData(this.composerId);
						if (!L) return !1;
						let D = !1;
						return (
							k
								? k.submitChatProps.extra?.useDiffReview
									? (D = !0)
									: (D = L.context?.useDiffReview ?? !1)
								: (D = !0),
							this.composerDataService.getAllInlineDiffs(this.composerId)
								.length > 0 && D
						);
					}
					shouldRunInPlaceMutateRequestBeforeSubmit(k) {
						return !0;
					}
					async runInPlaceMutateRequestBeforeSubmit(k, L) {
						const { composerId: D } = L;
						this.composerDataService.getComposerData(D) &&
							(k.conversation = k.conversation?.filter((N, A) => {
								if (N.bubbleId === L.humanBubbleId) return !0;
								if (N.type === r.ConversationMessage_MessageType.HUMAN)
									return !N.context?.useDiffReview;
								if (N.type === r.ConversationMessage_MessageType.AI && A > 0) {
									const R = k.conversation?.[A - 1];
									if (R && R.type === r.ConversationMessage_MessageType.HUMAN)
										return !R.context?.useDiffReview;
								}
								return !0;
							}));
					}
					async processContent(k) {
						const L = this.parseDiffReviewCodeBlock(k);
						if (L === null)
							throw new Error(
								"[composer] Failed to parse DiffReview code block content",
							);
						this.setDiffReviewData(L),
							this.setCurrentStep(L.length - 1),
							this.setRelevantUris(
								Array.from(this._allDiffs.keys()).map((D) => C.URI.parse(D)),
							),
							this.setupModelChangeListeners(),
							this.updateChanges();
					}
					parseDiffReviewCodeBlock(k) {
						try {
							const L = JSON.parse(k);
							if (!Array.isArray(L)) return null;
							(this._allDiffs = new Map()), (this._mappedDiffs = new Map());
							const D = [];
							if (!this.composerDataService.getComposerData(this.composerId))
								return null;
							const N = this.composerDataService.getAllInlineDiffs(
								this.composerId,
							);
							for (const R of N)
								this._uriVersions.set(
									R.uri.toString(),
									R.composerMetadata?.version ?? 0,
								);
							const A = new Map();
							for (const R of N) A.set(R.uri.toString(), new Set());
							L.forEach((R, O) => {
								if (
									!(
										typeof R != "object" ||
										typeof R.description != "string" ||
										typeof R.isExtra != "boolean" ||
										!Array.isArray(R.diffs)
									)
								) {
									D.push({
										description: R.description,
										isExtra: R.isExtra,
										fileChanges: [],
									});
									for (const B of R.diffs) {
										if (
											!Array.isArray(B) ||
											B.length !== 2 ||
											typeof B[0] != "string" ||
											typeof B[1] != "number"
										)
											continue;
										const [U, z] = B,
											F = this.workspaceContextService.resolveRelativePath(U),
											x = F.toString();
										this._allDiffs.has(x) || this._allDiffs.set(x, []),
											this._mappedDiffs.has(x) || this._mappedDiffs.set(x, []),
											A.has(x) || A.set(x, new Set()),
											A.get(x).add(z);
										const H =
											this.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
												(K) => K.uri.toString() === x,
											);
										if (!H || "isMultiInlineDiff" in H) continue;
										const q = H.changes[z];
										if (!q) continue;
										const V = {
												diff: {
													uri: F,
													change: {
														originalRange: {
															startLineNumber:
																q.removedLinesOriginalRange.startLineNumber,
															endLineNumberExclusive:
																q.removedLinesOriginalRange
																	.endLineNumberExclusive,
														},
														originalRangeAdjusted: {
															startLineNumber:
																q.removedLinesOriginalRange.startLineNumber,
															endLineNumberExclusive:
																q.removedLinesOriginalRange
																	.endLineNumberExclusive,
														},
														newLines: H.newTextLines.slice(
															q.addedRange.startLineNumber - 1,
															q.addedRange.endLineNumberExclusive - 1,
														),
													},
													status: "pending",
												},
												groupIndex: O,
											},
											G = {
												...V,
												diff: {
													...V.diff,
													uri: H.uri,
													change: {
														...V.diff.change,
														addedRange: {
															startLineNumber: q.addedRange.startLineNumber,
															endLineNumberExclusive:
																q.addedRange.endLineNumberExclusive,
														},
													},
													isIndentation: !!q.indentation,
													indentationSections:
														this.calculateIndentationSections(q),
												},
												changeIndex: z,
											};
										this._allDiffs.get(x).push(V),
											this._mappedDiffs.get(x).push(G);
									}
								}
							});
							for (const [R, O] of A.entries()) {
								const B =
									this.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
										(z) => z.uri.toString() === R,
									);
								if (!B || "isMultiInlineDiff" in B) continue;
								const U = B.changes.filter((z, F) => !O.has(F));
								if (U.length > 0) {
									const z = C.URI.parse(R);
									let F = D.length - 1;
									D[F].isExtra ||
										(D.push({
											description: "Additional changes",
											isExtra: !0,
											fileChanges: [],
										}),
										F++);
									for (let x = 0; x < U.length; x++) {
										const H = U[x],
											q = {
												diff: {
													uri: z,
													change: {
														originalRange: {
															startLineNumber:
																H.removedLinesOriginalRange.startLineNumber,
															endLineNumberExclusive:
																H.removedLinesOriginalRange
																	.endLineNumberExclusive,
														},
														originalRangeAdjusted: {
															startLineNumber:
																H.removedLinesOriginalRange.startLineNumber,
															endLineNumberExclusive:
																H.removedLinesOriginalRange
																	.endLineNumberExclusive,
														},
														newLines: B.newTextLines.slice(
															H.addedRange.startLineNumber - 1,
															H.addedRange.endLineNumberExclusive - 1,
														),
													},
													status: "pending",
												},
												groupIndex: F,
											},
											V = {
												...q,
												diff: {
													...q.diff,
													change: {
														...q.diff.change,
														addedRange: {
															startLineNumber: H.addedRange.startLineNumber,
															endLineNumberExclusive:
																H.addedRange.endLineNumberExclusive,
														},
													},
													isIndentation: !!H.indentation,
													indentationSections:
														this.calculateIndentationSections(H),
												},
												changeIndex: x,
											};
										this._allDiffs.has(R) || this._allDiffs.set(R, []),
											this._mappedDiffs.has(R) || this._mappedDiffs.set(R, []),
											this._allDiffs.get(R).push(q),
											this._mappedDiffs.get(R).push(V);
									}
								}
							}
							for (const R of this._allDiffs.values())
								R.sort(
									(O, B) =>
										O.diff.change.originalRangeAdjusted.startLineNumber -
										B.diff.change.originalRangeAdjusted.startLineNumber,
								);
							for (const R of this._mappedDiffs.values())
								R.sort(
									(O, B) =>
										O.diff.change.originalRange.startLineNumber -
										B.diff.change.originalRange.startLineNumber,
								);
							return D.length > 0 ? D : null;
						} catch (L) {
							return (
								console.error(
									"[composer] Error parsing diff review code block:",
									L,
								),
								null
							);
						}
					}
					setupModelChangeListeners() {
						this._disposables.forEach((k) => k.dispose()),
							(this._disposables = []);
						for (const [k, L] of this._allDiffs.entries()) {
							const D = C.URI.parse(k);
							this.textModelService.createModelReference(D).then((N) => {
								const A = N.object.textEditorModel.onDidChangeContent((R) => {
									this.handleModelContentChange(k, R);
								});
								this._disposables.push(A), this._disposables.push(N);
							});
						}
						this._disposables.push(
							this.reactiveStorageService.onChangeEffectManuallyDisposed({
								deps: [
									() =>
										this.reactiveStorageService.nonPersistentStorage
											.inlineDiffs,
								],
								onChange: ({ deps: [k] }) => {
									this.handleInlineDiffChange(k);
								},
							}),
						);
					}
					findClosestGroupIndex(k, L) {
						if (L.length === 0) return this.currentStep();
						let D = this.currentStep(),
							M = Number.MAX_SAFE_INTEGER;
						for (const N of L) {
							if (k.uri.toString() !== N.diff.uri.toString()) continue;
							const A = N.diff.change.originalRange.startLineNumber,
								R = N.diff.change.originalRange.endLineNumberExclusive,
								O = k.removedLinesOriginalRange.startLineNumber,
								B = k.removedLinesOriginalRange.endLineNumberExclusive,
								U = Math.abs(A - O),
								z = Math.abs(A - B),
								F = Math.abs(R - O),
								x = Math.abs(R - B),
								H = Math.min(U, z, F, x);
							H < M && ((M = H), (D = N.groupIndex));
						}
						return D;
					}
					handleInlineDiffChange(k) {
						if (!k || this._skipInlineDiffChangeEvent) return;
						const L = new Set(Array.from(this._mappedDiffs.keys()));
						for (const D of L) {
							const M = k.find((U) => U.uri.toString() === D),
								N = this._mappedDiffs.get(D) || [];
							if (!M) {
								this._mappedDiffs.delete(D);
								continue;
							}
							const A = M.changes.map((U) => ({
									...U,
									newLines: M.newTextLines.slice(
										U.addedRange.startLineNumber - 1,
										U.addedRange.endLineNumberExclusive - 1,
									),
								})),
								R = this.mapDiffsToNewChanges(M.uri, N, A),
								O = [],
								B = new Set();
							for (const U of R) {
								const z = N[U.originalChangeIndex],
									F = A[U.newChangeIndex];
								B.add(U.newChangeIndex);
								const x = this.calculateIndentationSections(F);
								O.push({
									diff: {
										uri: M.uri,
										change: {
											originalRange: {
												startLineNumber:
													F.removedLinesOriginalRange.startLineNumber,
												endLineNumberExclusive:
													F.removedLinesOriginalRange.endLineNumberExclusive,
											},
											addedRange: {
												startLineNumber: F.addedRange.startLineNumber,
												endLineNumberExclusive:
													F.addedRange.endLineNumberExclusive,
											},
											newLines: [...F.newLines],
										},
										status: z.diff.status,
										isIndentation: !!F.indentation,
										indentationSections: x,
									},
									groupIndex: z.groupIndex,
									changeIndex: U.newChangeIndex,
								});
							}
							for (let U = 0; U < A.length; U++)
								if (!B.has(U)) {
									const z = A[U],
										F = this.calculateIndentationSections(z),
										x = this.findClosestGroupIndex(
											{
												removedLinesOriginalRange: {
													startLineNumber:
														z.removedLinesOriginalRange.startLineNumber,
													endLineNumberExclusive:
														z.removedLinesOriginalRange.endLineNumberExclusive,
												},
												uri: M.uri,
											},
											O,
										);
									O.push({
										diff: {
											uri: M.uri,
											change: {
												originalRange: {
													startLineNumber:
														z.removedLinesOriginalRange.startLineNumber,
													endLineNumberExclusive:
														z.removedLinesOriginalRange.endLineNumberExclusive,
												},
												addedRange: {
													startLineNumber: z.addedRange.startLineNumber,
													endLineNumberExclusive:
														z.addedRange.endLineNumberExclusive,
												},
												newLines: [...z.newLines],
											},
											status: "pending",
											isIndentation: !!z.indentation,
											indentationSections: F,
										},
										groupIndex: x,
										changeIndex: U,
									});
								}
							O.length > 0
								? this._mappedDiffs.set(D, O)
								: this._mappedDiffs.delete(D);
						}
						this.updateChanges();
					}
					handleModelContentChange(k, L) {
						if (this._skipModelChangeEvent) return;
						const D = this._allDiffs.get(k);
						if (D) {
							for (const M of L.changes) this.updateDiffsForChange(D, M);
							D.sort(
								(M, N) =>
									M.diff.change.originalRangeAdjusted.startLineNumber -
									N.diff.change.originalRangeAdjusted.startLineNumber,
							),
								this.updateChanges();
						}
					}
					updateDiffsForChange(k, L) {
						const D =
							L.text.split(`
`).length -
							(L.range.endLineNumber - L.range.startLineNumber + 1);
						for (let M = k.length - 1; M >= 0; M--) {
							const N = k[M];
							if (N.groupIndex <= this.currentStep()) continue;
							const A = {
								startLineNumber:
									N.diff.change.originalRangeAdjusted.startLineNumber,
								endLineNumberExclusive:
									N.diff.change.originalRangeAdjusted.endLineNumberExclusive,
							};
							switch (S(A, L.range)) {
								case o.RangeWhereIs.After:
									break;
								case o.RangeWhereIs.Before:
									(N.diff.change.originalRangeAdjusted.startLineNumber += D),
										(N.diff.change.originalRangeAdjusted.endLineNumberExclusive +=
											D);
									break;
								case o.RangeWhereIs.Overlap: {
									const O = L.range.startLineNumber,
										B = L.range.endLineNumber,
										U = A.startLineNumber,
										z = A.endLineNumberExclusive - 1;
									O >= U && B <= z
										? (N.diff.change.originalRangeAdjusted.endLineNumberExclusive +=
												D)
										: O >= U && O <= z
											? (N.diff.change.originalRangeAdjusted.endLineNumberExclusive =
													O)
											: O <= U && B <= z
												? ((N.diff.change.originalRangeAdjusted.startLineNumber =
														B + D + 1),
													(N.diff.change.originalRangeAdjusted.endLineNumberExclusive +=
														D))
												: O < U && B > z
													? ((N.diff.change.originalRangeAdjusted.startLineNumber =
															B + D + 1),
														(N.diff.change.originalRangeAdjusted.endLineNumberExclusive =
															B + D + 1))
													: console.error(
															"[composer] Unhandled overlapping diffs detected.",
															JSON.parse(JSON.stringify(N)),
															JSON.parse(JSON.stringify(L)),
														);
									break;
								}
							}
						}
					}
					dispose() {
						super.dispose(), this.reset();
					}
					reset() {
						this.deleteAiBubble(),
							this.setDiffReviewData([]),
							this.setCurrentStep(0),
							this.setRelevantUris([]),
							this.setAiBubbleId(null),
							this._disposables.forEach((k) => k.dispose()),
							(this._disposables = []),
							(this._allDiffs = new Map()),
							(this._mappedDiffs = new Map()),
							(this._skipModelChangeEvent = !1),
							(this._uriVersions = new Map()),
							(this._params = void 0),
							(this._isProcessingGroupAction = null);
					}
					updateChanges() {
						const k = (0, t.unwrap)(this.diffReviewData);
						if (!k) return;
						const L = new Map();
						for (let A = 0; A <= this.currentStep(); A++) {
							const R = new Map();
							for (const [O, B] of this._mappedDiffs.entries()) {
								const U = C.URI.parse(O),
									z = this.workspaceContextService.asRelativePath(U),
									F = B.filter((x) => x.groupIndex === A);
								for (const x of F) {
									const { startLineNumber: H, endLineNumberExclusive: q } =
											x.diff.change.addedRange,
										{ startLineNumber: V, endLineNumberExclusive: G } =
											x.diff.change.originalRange,
										K = x.diff.change.newLines,
										J = G - V,
										W = K.length;
									R.has(z) ||
										R.set(z, {
											path: z,
											startLine: H,
											endLine: q,
											status: x.diff.status,
											changes: [],
										});
									const X = R.get(z);
									(X.startLine = Math.min(X.startLine, H)),
										(X.endLine = Math.max(X.endLine, q)),
										X.changes.push({
											startLine: H,
											endLine: q,
											addedLines: W,
											removedLines: J,
											changeIndex: x.changeIndex,
											isIndentation: x.diff.isIndentation,
											indentationSections: x.diff.indentationSections,
										});
								}
							}
							L.has(A) || L.set(A, []),
								L.get(A).push(...Array.from(R.values()));
						}
						for (const [A, R] of this._allDiffs.entries()) {
							const O = C.URI.parse(A),
								B = this.workspaceContextService.asRelativePath(O),
								U = new Map();
							for (const z of R) {
								const { groupIndex: F } = z;
								if (F <= this.currentStep()) continue;
								L.has(F) || L.set(F, []);
								const { startLineNumber: x, endLineNumberExclusive: H } =
										z.diff.change.originalRangeAdjusted,
									q = z.diff.change.newLines,
									V = H - x,
									G = q.length;
								U.has(F) ||
									(U.set(F, {
										path: B,
										startLine: x,
										endLine: H,
										status: z.diff.status,
										changes: [],
									}),
									L.get(F).push(U.get(F)));
								const K = U.get(F);
								(K.startLine = Math.min(K.startLine, x)),
									(K.endLine = Math.max(K.endLine, H)),
									K.changes.push({
										startLine: x,
										endLine: H,
										addedLines: G,
										removedLines: V,
										changeIndex: -1,
									});
							}
						}
						const D = [...k],
							M = new Set();
						for (const [A, R] of L) {
							const O = D[A]?.fileChanges;
							(!O || !this.areChangesEqual(O, R)) &&
								(M.add(A), (D[A] = { ...D[A], fileChanges: R }));
						}
						if (D.every((A) => A?.fileChanges.length === 0)) {
							this.deleteAiBubble();
							return;
						}
						if (M.size > 0) for (const A of M) this.setDiffReviewData(A, D[A]);
						this.processRemainingGroupChanges();
					}
					deleteAiBubble() {
						const k = this.aiBubbleId();
						k &&
							this.composerDataService.updateComposerDataSetStore(
								this.composerId,
								(L) =>
									L("conversation", (D) => D.filter((M) => M.bubbleId !== k)),
							);
					}
					areChangesEqual(k, L) {
						return k.length !== L.length
							? !1
							: k.every((D, M) => {
									const N = L[M];
									return D.path !== N.path ||
										D.startLine !== N.startLine ||
										D.endLine !== N.endLine ||
										D.status !== N.status ||
										D.changes.length !== N.changes.length
										? !1
										: D.changes.every((A, R) => {
												const O = N.changes[R];
												return (
													A.startLine === O.startLine &&
													A.endLine === O.endLine &&
													A.addedLines === O.addedLines &&
													A.removedLines === O.removedLines &&
													("changeIndex" in A && "changeIndex" in O
														? A.changeIndex === O.changeIndex
														: !0)
												);
											});
								});
					}
					calculateDiffSimilarity(k, L) {
						const D = k.change.originalRange.startLineNumber,
							M = k.change.originalRange.endLineNumberExclusive,
							N = L.removedLinesOriginalRange.startLineNumber,
							A = L.removedLinesOriginalRange.endLineNumberExclusive;
						if (D === N && M === A) {
							const F = k.change.newLines.join(`
`),
								x = L.newLines.join(`
`);
							if (F === x) return 1;
						}
						const R = k.change.newLines.join(`
`),
							O = L.newLines.join(`
`);
						let B;
						R.length === 0 && O.length === 0
							? (B = 1)
							: R.length === 0 || O.length === 0
								? (B = 0)
								: (B = 1 - I(R, O) / Math.max(R.length, O.length));
						const U = Math.max(M, A) - Math.min(D, N);
						let z;
						if (U === 0) z = 1;
						else {
							const F = Math.abs(D - N),
								x = Math.abs(M - A);
							z = 1 - Math.min(Math.log(F + x + 1) / Math.log(10 + 1), 1);
						}
						return B > 0.9 ? Math.max(0.9, z) : 0.7 * B + 0.3 * z;
					}
					mapDiffsToNewChanges(k, L, D) {
						const M = [],
							N = new Set();
						for (let A = 0; A < L.length; A++) {
							let R = -1,
								O = 0;
							for (let B = 0; B < D.length; B++) {
								if (N.has(B)) continue;
								const U = this.calculateDiffSimilarity(L[A].diff, D[B]);
								U > O && U > 0.7 && ((O = U), (R = B));
							}
							R !== -1 &&
								(M.push({
									uri: k,
									originalChangeIndex: A,
									newChangeIndex: R,
									similarity: O,
								}),
								N.add(R));
						}
						return M;
					}
					calculateIndentationSections(k) {
						if (!k.indentation) return;
						const L = k.indentation.range,
							D = k.addedRange;
						return {
							preSandwich: { lines: L.startLineNumber - D.startLineNumber },
							indentation: {
								lines: L.endLineNumberExclusive - L.startLineNumber,
							},
							postSandwich: {
								lines: D.endLineNumberExclusive - L.endLineNumberExclusive,
							},
						};
					}
					async abort() {
						await this.composerService.rejectAll(this.composerId, {
							rejectSilently: !0,
						});
						for (const [k, L] of this._uriVersions) {
							const D = C.URI.parse(k);
							await this.composerService.turnApplyToInlineDiff(
								this.composerId,
								D,
								L,
							);
						}
						this.reset();
					}
					async acceptGroupFileChanges(k, L) {
						const D = this.diffReviewData[k],
							M = D?.fileChanges[L]?.changes ?? [];
						if (M.length === 0) return;
						this._isProcessingGroupAction = {
							groupIndex: k,
							path: D.fileChanges[L].path,
							action: "accept",
						};
						const N = D.fileChanges[L].path;
						for (const A of M)
							if (A.startLine) {
								this.acceptLeafChange(N, A.startLine);
								return;
							}
					}
					async rejectGroupFileChanges(k, L) {
						const D = this.diffReviewData[k],
							M = D?.fileChanges[L]?.changes ?? [];
						if (M.length === 0) return;
						this._isProcessingGroupAction = {
							groupIndex: k,
							path: D.fileChanges[L].path,
							action: "reject",
						};
						const N = D.fileChanges[L].path;
						for (const A of M)
							if (A.startLine) {
								this.rejectLeafChange(N, A.startLine);
								return;
							}
					}
					acceptLeafChange(k, L) {
						const D = this.workspaceContextService.resolveRelativePath(k),
							M =
								this.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
									(A) => A.uri.toString() === D.toString(),
								)?.id;
						!M ||
							!this.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
								(A) => A.id === M,
							) ||
							this.inlineDiffService.acceptPartialDiff(M, new y.$hL(L, 1));
					}
					rejectLeafChange(k, L) {
						const D = this.workspaceContextService.resolveRelativePath(k),
							M =
								this.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
									(A) => A.uri.toString() === D.toString(),
								)?.id;
						!M ||
							!this.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
								(A) => A.id === M,
							) ||
							this.inlineDiffService.rejectPartialDiff(M, new y.$hL(L, 1));
					}
					async processRemainingGroupChanges() {
						if (!this._isProcessingGroupAction) return;
						const {
								groupIndex: k,
								path: L,
								action: D,
							} = this._isProcessingGroupAction,
							M = this.diffReviewData[k];
						if (!M || M.fileChanges.length === 0) {
							this._isProcessingGroupAction = null;
							return;
						} else if (
							L &&
							(M.fileChanges.find((N) => N.path === L)?.changes.length ?? 0) ===
								0
						) {
							this._isProcessingGroupAction = null;
							return;
						}
						for (const N of M.fileChanges)
							if (!(L && N.path !== L)) {
								for (const A of N.changes)
									if (A.startLine)
										if (D === "accept") {
											this.acceptLeafChange(N.path, A.startLine);
											return;
										} else {
											this.rejectLeafChange(N.path, A.startLine);
											return;
										}
							}
					}
				};
				(e.DiffReview = T),
					(e.DiffReview = T =
						Ne(
							[
								(0, h.autoCancellableAndStatusUpdater)(),
								j(2, m.IComposerDataService),
								j(3, w.IComposerService),
								j(4, c.$0zb),
								j(5, d.$Vi),
								j(6, n.$27b),
								j(7, g.$MO),
								j(8, s.$Nfc),
							],
							T,
						)),
					(0, t.registerComposerCapability)(
						a.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_REVIEW,
						T,
					);
			},
		),
		