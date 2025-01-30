import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/telemetry/common/telemetry.js';
import './promptBarService.js';
import '../../../../platform/reactivestorage/browser/reducerService.js';
import '../../aiTasks/browser/aiTaskServiceInterface.js';
import './aiService.js';
import '../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../../base/common/lifecycle.js';
import '../../../contrib/aiWatcher/browser/aiWatcherHelpers.js';
import '../../../../editor/common/services/resolverService.js';
import './aiUtilsService.js';
import '../../../../editor/browser/services/inlineDiffService.js';
import '../../../../editor/common/core/lineRange.js';
import '../../../../editor/contrib/floatingPromptBar/browser/floatingPromptBarUtils.js';
import '../../editor/common/editorService.js';
import '../../../../editor/contrib/folding/browser/folding.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../editor/contrib/folding/browser/foldingRanges.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../base/common/uuid.js';
import '../../../../base/common/map.js';
import '../../../contrib/aichat/browser/chatDataService.js';
import '../../../../editor/common/diff/linesDiffComputers.js';
import '../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../base/common/resources.js';
import '../../../../editor/common/diff/rangeMapping.js';
import '../../../../../proto/aiserver/v1/chat_pb.js';
import './utils.js';
import '../../../../../proto/aiserver/v1/aiserver_connectweb.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../base/common/path.js';
import '../../../../editor/common/services/editorWorker.js';
import '../common/duplicateAsyncIterable.js';
import '../../../../platform/undoRedo/common/undoRedo.js';
import '../../../../editor/browser/services/inlineDiffUndoRedoElement.js';
import '../../../../../proto/aiserver/v1/fastapply_pb.js';
import '../../../../../proto/aiserver/v1/cmdk_pb.js';
import './backendClient.js';
import '../../../../../proto/aiserver/v1/fastapply_connectweb.js';
import './aiMiscServices.js';
import '../../../contrib/composer/browser/composerDataService.js';
define(
			de[480],
			he([
				1, 0, 20, 5, 45, 32, 620, 669, 516, 118, 148, 3, 975, 42, 567, 383, 196,
				2698, 18, 350, 56, 659, 31, 47, 59, 337, 587, 83, 19, 342, 126, 191,
				341, 25, 54, 200, 3234, 155, 779, 581, 644, 285, 1114, 137, 209,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*extensions*/,
				i /*instantiation*/,
				w /*reactiveStorageService*/,
				E /*telemetry*/,
				C /*promptBarService*/,
				d /*reducerService*/,
				m /*aiTaskServiceInterface*/,
				r /*aiService*/,
				u /*aiserver_pb*/,
				a /*lifecycle*/,
				h /*aiWatcherHelpers*/,
				c /*resolverService*/,
				n /*aiUtilsService*/,
				g /*inlineDiffService*/,
				p /*lineRange*/,
				o /*floatingPromptBarUtils*/,
				f /*editorService*/,
				b /*folding*/,
				s /*editorBrowser*/,
				l /*foldingRanges*/,
				y /*commands*/,
				$ /*uuid*/,
				v /*map*/,
				S /*chatDataService*/,
				I /*linesDiffComputers*/,
				T /*utils_pb*/,
				P /*resources*/,
				k /*rangeMapping*/,
				L /*chat_pb*/,
				D /*utils*/,
				M /*aiserver_connectweb*/,
				N /*workspace*/,
				A /*path*/,
				R /*editorWorker*/,
				O /*duplicateAsyncIterable*/,
				B /*undoRedo*/,
				U /*inlineDiffUndoRedoElement*/,
				z /*fastapply_pb*/,
				F /*cmdk_pb*/,
				x /*backendClient*/,
				H /*fastapply_connectweb*/,
				q /*aiMiscServices*/,
				V /*composerDataService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$a0b = e.$_9b = e.$$9b = void 0),
					(e.$$9b = (0, i.$Mi)("fastEditService")),
					(e.$_9b = "speculative-multi-file"),
					(e.$a0b = "speculative-full-file");
				let G = class {
					constructor(
						J,
						W,
						X,
						Y,
						ie,
						ne,
						ee,
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
					) {
						(this.f = J),
							(this.g = W),
							(this.h = X),
							(this.j = Y),
							(this.k = ie),
							(this.l = ne),
							(this.m = ee),
							(this.n = _),
							(this.o = te),
							(this.q = Q),
							(this.t = Z),
							(this.u = se),
							(this.v = re),
							(this.w = le),
							(this.x = ae),
							(this.y = pe),
							(this.z = new v.$Jc(10)),
							(this.c = oe.createInstance(x.$q6b, { service: H.$9ab }));
					}
					async performChatEditFinetunedModel(J) {
						const W = (0, $.$9g)();
						this.l.setNonPersistentStorage(
							"nonPersistentChatMetadata",
							({ bubbleId: oe, tabId: ae }) =>
								oe === J.generationMetadata.bubbleId &&
								ae === J.generationMetadata.tabId,
							"editUuid",
							W,
						);
						const [X, Y] = this.g.registerNewGeneration({
							metadata: { ...J.generationMetadata, type: "apply" },
							generationUUID: J.generationUUID,
						});
						this.h.setIntentDetermined(
							J.generationMetadata.bubbleId,
							J.generationMetadata.tabId,
						);
						const ie = new T.$Zs({ modelName: J.privateFtModel.modelName });
						this.j.publicLogCapture("Submitted /edit");
						const ne = this.g.getLastActiveFileEditor()?.input?.resource;
						if (ne === void 0)
							throw new Error("Failed to get last active file editor");
						const ee = this.l.nonPersistentStorage.inlineDiffs
							.filter((oe) => P.$dh.isEqual(oe.uri, ne))
							.map((oe) => oe.id);
						for (const oe of ee)
							this.o.cancelDiff(oe), this.o.rejectDiff(oe, { close: !0 });
						let _ = `
`;
						try {
							_ = (
								await this.n.createModelReference(ne)
							).object.textEditorModel.getEOL();
						} catch (oe) {
							console.warn("modelReference couldnt be created", oe);
						}
						const te = {
								currentFile: await this.g.getCurrentFileInfo(ne, {
									includeNotebookCells: !0,
								}),
								conversation: J.conversationHistory,
								modelDetails: ie,
								explicitContext: await this.g.getExplicitContext(),
								summary: J.generationMetadata.summaryText,
								summaryUpUntilIndex: J.generationMetadata.summaryUpUntilIndex,
								isCmdI: !1,
								files: [],
								useFastApply: !1,
								fastApplyModelType:
									u.SlashEditRequest_FastApplyModelType.DEFAULT,
							},
							Z = (await this.g.aiClient()).slashEdit(te, {
								signal: Y.signal,
								headers: (0, D.$m6b)(J.generationUUID),
							});
						let se = "";
						for (const [oe, ae] of [
							...J.conversationHistory.entries(),
						].reverse())
							if (
								ae.type === L.ConversationMessage_MessageType.HUMAN &&
								ae.text !== ""
							) {
								se = J.conversationHistory[oe].text;
								break;
							}
						this.g.addToPromptHistory({
							prompt: se,
							commandType: C.CommandType.CHAT,
						});
						const re = this.handleSlashEditResponseSingleDiff({
								streamer: Z,
								eol: _,
								editUuid: W,
								generationMetadata: J.generationMetadata,
								generationUUID: J.generationUUID,
								request: te,
								abortController: Y,
								uri: ne,
							}),
							le = M.$q0.typeName + "/" + M.$q0.methods.slashEdit.name;
						return this.g.streamResponse({
							modelDetails: ie,
							generationUUID: J.generationUUID,
							source: "chat",
							streamer: re,
							streamerURL: le,
							rethrowCancellation: !0,
							rerun: J.options?.rerun,
							failSilently: J.options?.failSilently,
						});
					}
					async warmFastApply(J) {
						const W =
							J.uri ?? this.g.getLastActiveFileEditor()?.input?.resource;
						if (W === void 0)
							throw new Error("Failed to get last active file editor");
						const X = {
							conversation: J.conversationHistory,
							currentFile: await this.g.getCurrentFileInfo(W, {
								actuallyReadFromOverrideURI: !0,
								includeNotebookCells: !0,
							}),
							explicitContext: await this.g.getExplicitContext(),
							source: J.source,
							willingToPayExtraForSpeed: !0,
						};
						await (await this.c.get()).warmApply(X, {
							headers: (0, D.$m6b)(J.generationUUID),
						});
					}
					async performChatEdit(J) {
						const W = await this.performAndYieldChatEdit(J);
						if (W !== void 0) for await (const X of W);
					}
					async performAndYieldChatEdit(J) {
						const W = (0, $.$9g)();
						J.generationMetadata &&
							this.l.setNonPersistentStorage(
								"nonPersistentChatMetadata",
								({ bubbleId: ge, tabId: be }) =>
									ge === J.generationMetadata.bubbleId &&
									be === J.generationMetadata.tabId,
								"editUuid",
								W,
							);
						const X =
								J.options?.overrideCurrentFileURI ??
								this.g.getLastActiveFileEditor()?.input?.resource,
							[Y, ie] = this.g.registerNewGeneration({
								metadata: J.generationMetadata
									? { ...J.generationMetadata, type: "apply" }
									: {
											type: "apply",
											textDescription:
												X && this.v.asRelativePath(X).split("/").pop(),
										},
								generationUUID: J.generationUUID,
							});
						J.generationMetadata &&
							this.h.setIntentDetermined(
								J.generationMetadata.bubbleId,
								J.generationMetadata.tabId,
							);
						const ne =
							J.options?.overrideModelDetails ||
							this.g.getModelDetails({ specificModelField: "regular-chat" });
						if ((this.j.publicLogCapture("Submitted /edit"), X === void 0))
							throw new Error("Failed to get last active file editor");
						const ee = () =>
								this.l.nonPersistentStorage.inlineDiffs
									.filter((ge) => P.$dh.isEqual(ge.uri, X))
									.map((ge) => ge.id),
							_ = (ge) => {
								const be = ee();
								for (const Ce of be)
									this.o.cancelDiff(Ce),
										this.o.rejectDiff(Ce, {
											close: !0,
											rejectSilently: !0,
											dontBreakConsolidation: ge?.dontBreakConsolidation,
										}),
										J.onPreviousDiffReject?.(Ce);
							},
							te = ee().length > 0,
							Q = J.shouldChainPrevious && te && !J.options?.rejectChangesInURI;
						let Z = "";
						if (!Q) {
							J.options?.rejectChangesInURI !== !1 && _();
							const ge = await this.n.createModelReference(X);
							(Z = ge.object.textEditorModel.getValue()), ge.dispose();
						}
						let se = `
`;
						try {
							se = (
								await this.n.createModelReference(X)
							).object.textEditorModel.getEOL();
						} catch (ge) {
							console.warn("modelReference couldnt be created", ge);
						}
						console.log(
							"using fast apply model type",
							this.l.applicationUserPersistentStorage.fastApplyModelType,
						);
						const re = J.isBackgroundApply !== !0,
							le = {
								currentFile: await this.g.getCurrentFileInfo(X, {
									actuallyReadFromOverrideURI: !0,
									includeNotebookCells: !0,
								}),
								conversation: J.conversationHistory,
								modelDetails: ne,
								parentRequestId: J.parentRequestId,
								source: J.source,
								explicitContext: await this.g.getExplicitContext(),
								summary: J.generationMetadata?.summaryText ?? "",
								summaryUpUntilIndex:
									J.generationMetadata?.summaryUpUntilIndex ?? 0,
								isCmdI: !1,
								shouldUseTurboDebugPrompt: !0,
								editSelection: J.options?.overrideLineRange
									? {
											startLineNumber:
												J.options?.overrideLineRange.startLineNumber,
											endLineNumberInclusive:
												J.options?.overrideLineRange.endLineNumberExclusive - 1,
										}
									: void 0,
								files: [],
								clickedCodeBlockContents: J.clickedCodeBlockContents,
								specificInstructions: J.specificInstructions,
								isAnOptimisticRequestForCachingAndLinting:
									J.inlineDiffServiceLookalike !== void 0 ||
									J.source === z.FastApplySource.CACHED_APPLY,
								useFastApply: !1,
								fastApplyModelType:
									u.SlashEditRequest_FastApplyModelType.DEFAULT,
								useChunkSpeculationForLongFiles: re,
								isReapply: J.isReapply,
								willingToPayExtraForSpeed: J.willingToPayExtraForSpeed,
							};
						let oe = "",
							ae = "",
							pe;
						if (Q) {
							(pe = new U.$y7b(
								"Undo Chain Diff",
								"undo-chain-diff",
								void 0,
								X,
								() => {},
								() => {},
							)),
								this.o.pushUndoElement(pe, { breakConsolidation: !0 });
							const ge = await this.n.createModelReference(X),
								be = ge.object.textEditorModel,
								Ce = be.getValue();
							_({ dontBreakConsolidation: !0 }),
								(oe = be.getValue()),
								(ae = Ce);
							const Le = be.getLineCount(),
								Fe = {
									startLineNumber: 1,
									endLineNumber: Le,
									startColumn: 1,
									endColumn: be.getLineMaxColumn(Le),
								},
								Oe = be.applyEdits([{ range: Fe, text: Ce }], !0);
							pe.push(
								new U.$y7b(
									"Undo Chain Diff",
									"undo-chain-diff",
									void 0,
									X,
									() => {
										be.applyEdits(Oe, !1);
									},
									() => {
										be.applyEdits([{ range: Fe, text: Ce }], !1);
									},
								),
							),
								ge.dispose();
						}
						let $e;
						if (J.existingStreamer !== void 0) $e = J.existingStreamer;
						else {
							const be = (await this.g.aiClient()).slashEdit(le, {
								signal: ie.signal,
								headers: (0, D.$m6b)(J.generationUUID),
							});
							if (J.onStreamerCreated) {
								const Ce = (0, O.$09b)(be);
								($e = Ce()), J.onStreamerCreated(Ce());
							} else $e = be;
						}
						let ye = "";
						for (const [ge, be] of [
							...J.conversationHistory.entries(),
						].reverse())
							if (
								be.type === L.ConversationMessage_MessageType.HUMAN &&
								be.text !== ""
							) {
								ye = J.conversationHistory[ge].text;
								break;
							}
						J.skipAddToPromptHistory ||
							this.g.addToPromptHistory({
								prompt: ye,
								commandType: C.CommandType.CHAT,
							});
						let ue;
						if (J.shouldComputeOriginalLineTokens) {
							const ge = await this.n.createModelReference(X),
								be = ge.object.textEditorModel,
								Le = {
									startLineNumber: 1,
									endLineNumberExclusive: be.getLineCount() + 1,
								};
							ue = [];
							for (
								let Fe = Le.startLineNumber;
								Fe < Le.endLineNumberExclusive;
								Fe++
							)
								ue.push(be.tokenization.getLineTokens(Fe).extractObject());
							ge.dispose();
						}
						const fe = {
							streamer: $e,
							eol: se,
							editUuid: W,
							generationMetadata: J.generationMetadata,
							generationUUID: J.generationUUID,
							request: le,
							abortController: ie,
							uri: X,
							lineRange: J.options?.overrideLineRange,
							source: J.options?.overrideSource,
							inlineDiffServiceLookalike: J.inlineDiffServiceLookalike,
							composerMetadata: J.composerMetadata,
							onCreateInlineDiff: Q ? void 0 : J.onCreateInlineDiff,
							linesDiffComputerOptions: J.linesDiffComputerOptions,
							originalLineTokens: ue,
							onFailed: async () => {
								if (Q) {
									const ge = oe,
										be = await this.n.createModelReference(X),
										Ce = be.object.textEditorModel,
										Le = Ce.getValue();
									_({ dontBreakConsolidation: !0 });
									const Fe = Ce.getLineCount(),
										Oe = {
											startLineNumber: 1,
											endLineNumber: Fe,
											startColumn: 1,
											endColumn: Ce.getLineMaxColumn(Fe),
										},
										xe = Ce.applyEdits([{ range: Oe, text: ge }], !0);
									pe.push(
										new U.$y7b(
											"Undo Chain Diff",
											"undo-chain-diff",
											void 0,
											X,
											() => {
												Ce.applyEdits(xe, !1);
											},
											() => {
												Ce.applyEdits([{ range: Oe, text: ge }], !1);
											},
										),
									);
									const Ke = {
											startLineNumber: 1,
											endLineNumberExclusive: Ce.getLineCount() + 1,
										},
										Je = Ce.getLinesContent().slice(
											Ke.startLineNumber - 1,
											Ke.endLineNumberExclusive - 1,
										),
										Te = (0, $.$9g)(),
										Ee = {
											uri: X,
											generationUUID: Te,
											currentRange: Ke,
											originalTextLines: Je,
											prompt: "hi",
											isHidden: !1,
											attachedToPromptBar: !1,
											source: e.$a0b,
											createdAt: Date.now(),
											composerMetadata: J.composerMetadata,
										},
										Ie = (
											await (
												J.inlineDiffServiceLookalikePure ?? this.o
											).addActiveDiff(Ee)
										).id;
									(J.inlineDiffServiceLookalikePure ?? this.o).addLinesToDiff(
										Ie,
										Le.split(se),
									),
										(
											J.inlineDiffServiceLookalikePure ?? this.o
										).finishDiffSuccess(Ie),
										be.dispose(),
										J.onCreateInlineDiff?.(X, Ie);
								}
								J.onApplyFailed?.();
							},
							onFinish: Q
								? async (ge) => {
										const be = this.applyDiffToLines(ae.split(se), ge);
										_({ dontBreakConsolidation: !0 });
										const Ce = await this.n.createModelReference(X),
											Le = Ce.object.textEditorModel,
											Fe = Le.getLineCount(),
											Oe = {
												startLineNumber: 1,
												endLineNumber: Fe,
												startColumn: 1,
												endColumn: Le.getLineMaxColumn(Fe),
											},
											xe = Le.applyEdits([{ range: Oe, text: oe }], !0);
										pe.push(
											new U.$y7b(
												"Undo Chain Diff",
												"undo-chain-diff",
												void 0,
												X,
												() => {
													Le.applyEdits(xe, !1);
												},
												() => {
													Le.applyEdits([{ range: Oe, text: oe }], !1);
												},
											),
										);
										const Ke = {
												startLineNumber: 1,
												endLineNumberExclusive: Le.getLineCount() + 1,
											},
											Je = Le.getLinesContent().slice(
												Ke.startLineNumber - 1,
												Ke.endLineNumberExclusive - 1,
											),
											Te = [];
										for (
											let Be = Ke.startLineNumber;
											Be < Ke.endLineNumberExclusive;
											Be++
										)
											Te.push(
												Le.tokenization.getLineTokens(Be).extractObject(),
											);
										const Ee = {
											uri: X,
											generationUUID: J.generationUUID,
											currentRange: Ke,
											originalTextLines: Je,
											prompt: "hi",
											isHidden: !1,
											attachedToPromptBar: !1,
											source: e.$a0b,
											createdAt: Date.now(),
											composerMetadata: J.composerMetadata,
										};
										Ce.dispose();
										const Ie = (
											await (
												J.inlineDiffServiceLookalikePure ?? this.o
											).addActiveDiff(Ee)
										).id;
										(J.inlineDiffServiceLookalikePure ?? this.o).addLinesToDiff(
											Ie,
											be,
										),
											(
												J.inlineDiffServiceLookalikePure ?? this.o
											).finishDiffSuccess(Ie),
											Ce.dispose(),
											J.onCreateInlineDiff?.(X, Ie),
											J.onApplyDone?.({
												newModelLines: be,
												originalModelLines: Je,
												isChained: !0,
											});
									}
								: async (ge) => {
										const be = this.applyDiffToLines(Z.split(se), ge);
										J.onApplyDone?.({
											newModelLines: be,
											originalModelLines: Z.split(se),
										});
									},
						};
						let me;
						J.inlineDiffServiceLookalikePure === void 0
							? (me = this.handleSlashEditResponseSingleDiff(fe))
							: (me = this.handleSlashEditResponseSingleDiffPure({
									...fe,
									inlineDiffServiceLookalike: J.inlineDiffServiceLookalikePure,
								}));
						const ve = M.$q0.typeName + "/" + M.$q0.methods.slashEdit.name;
						return this.g.streamResponse({
							modelDetails: ne,
							generationUUID: J.generationUUID,
							source: "other",
							streamer: me,
							streamerURL: ve,
							rethrowCancellation: !0,
							rerun: J.options?.rerun,
							failSilently: J.options?.failSilently,
						});
					}
					rejectSlashEdit(J) {
						const W = this.z.get(J);
						W !== void 0 && this.o.rejectDiff(W.diffId);
					}
					getDiffId(J) {
						const W = this.z.get(J);
						if (W !== void 0) return W.diffId;
					}
					acceptSlashEdit(J) {
						const W = this.z.get(J);
						W !== void 0 && this.o.acceptDiff(W.diffId);
					}
					async *handleSlashEditResponseSingleDiffPure({
						eol: J,
						editUuid: W,
						generationMetadata: X,
						composerMetadata: Y,
						streamer: ie,
						request: ne,
						generationUUID: ee,
						abortController: _,
						uri: te,
						lineRange: Q,
						source: Z,
						inlineDiffServiceLookalike: se,
						onCreateInlineDiff: re,
						linesDiffComputerOptions: le,
						onFinish: oe,
						onFailed: ae,
						originalLineTokens: pe,
					}) {
						let $e = !1,
							ye;
						yield "Performing edit...";
						const ue =
								Q ??
								new p.$rL(
									1,
									(ne.currentFile?.contents.split(J).length ?? 1) + 1,
								),
							fe = ne.currentFile?.contents
								.split(J)
								.slice(ue.startLineNumber - 1, ue.endLineNumberExclusive - 1),
							me = [];
						let ve = 1;
						const ge = [];
						let be = Date.now();
						const Ce = () => {
								ye !== void 0 && se.addLinesToDiff(ye, ge),
									(ge.length = 0),
									(be = Date.now());
							},
							Le = () => {
								Date.now() - be < 250 || Ce();
							};
						try {
							if (fe === void 0)
								throw new Error("Failed to get current file info");
							const Fe = {
								uri: te,
								generationUUID: ee,
								currentRange: ue,
								originalTextLines: fe,
								prompt: "hi4",
								isHidden: !1,
								attachedToPromptBar: !1,
								source: Z ?? e.$a0b,
								createdAt: Date.now(),
								composerMetadata: Y,
								originalLineTokens: pe,
							};
							(ye = (await se.addActiveDiff(Fe)).id),
								ye !== void 0 &&
									(this.z.set(W, { diffId: ye }), re && re(te, ye));
							let Oe = "";
							for await (const xe of ie) {
								if (
									this.l.nonPersistentStorage.composerState
										.shouldSimulateApplyHanging
								) {
									await new Promise((Ke) => setTimeout(Ke, 1e5));
									continue;
								}
								if (
									this.l.nonPersistentStorage.composerState
										.shouldSimulateApplyError
								)
									throw (
										(this.l.setNonPersistentStorage(
											"composerState",
											"shouldSimulateApplyError",
											!1,
										),
										new Error("Simulated apply error"))
									);
								yield "";
								const He = xe.cmdKResponse?.response;
								if (
									!(
										He?.case !== "editEnd" &&
										He?.case !== "editStart" &&
										He?.case !== "editStream"
									)
								)
									switch (He.case) {
										case "editStart": {
											for (; ve < He.value.startLineNumber; ve++) {
												const Ke = ve - ue.startLineNumber + 1;
												Ke <= fe.length &&
													(ge.push(fe[Ke - 1]), Le(), me.push(fe[Ke - 1]));
											}
											break;
										}
										case "editStream": {
											for (
												Oe += He.value.text;
												Oe.includes(`
`);
											) {
												const Ke = Oe.slice(
													0,
													Oe.indexOf(`
`),
												);
												ge.push(Ke),
													Le(),
													me.push(Ke),
													(Oe = Oe.slice(
														Oe.indexOf(`
`) + 1,
													));
											}
											break;
										}
										case "editEnd": {
											Oe.length > 0 && (ge.push(Oe), Le(), me.push(Oe)),
												(Oe = ""),
												(ve = He.value.endLineNumberExclusive);
											break;
										}
									}
							}
							for (; ve <= fe.length; ve++)
								ge.push(fe[ve - 1]), Le(), me.push(fe[ve - 1]);
							Ce(), ($e = !0), ye !== void 0 && se.finishDiffSuccess(ye);
						} catch (Fe) {
							console.error(
								"[balta] error in handleSlashEditResponseSingleDiffPure",
								Fe,
							);
						} finally {
							if ($e) {
								if ((yield " done!", fe !== void 0)) {
									const Fe = await this.m.computeLinesDiff(fe, me, {
										ignoreTrimWhitespace: !1,
										computeMoves: !1,
										maxComputationTimeMs: 500,
										...le,
									});
									let Oe = Fe.changes;
									Fe.hitTimeout &&
										(Oe = [new k.$CL(ue, new p.$rL(1, me.length + 1), void 0)]);
									const xe = Oe.map((Ke) => ({
										original: Ke.original,
										modified: me.slice(
											Ke.modified.startLineNumber - 1,
											Ke.modified.endLineNumberExclusive - 1,
										),
									}));
									oe?.(xe),
										X &&
											this.u.setChatData(
												"tabs",
												(Ke, Je) => Ke.tabId === X.tabId,
												"bubbles",
												(Ke) => Ke.id === X.aiBubbleId && Ke.type === "ai",
												"suggestedDiffs",
												[
													new L.$9A({
														relativeWorkspacePath:
															ne.currentFile?.relativeWorkspacePath ?? "",
														chunks: Oe.map((Ke) => {
															let Je = new L.$0A();
															return (
																(Je.oldLines = fe.slice(
																	Ke.original.startLineNumber - 1,
																	Ke.original.endLineNumberExclusive - 1,
																)),
																(Je.newLines = me.slice(
																	Ke.modified.startLineNumber - 1,
																	Ke.modified.endLineNumberExclusive - 1,
																)),
																(Je.oldRange = new T.$Ms({
																	startLineNumber: Ke.original.startLineNumber,
																	endLineNumberInclusive:
																		Ke.original.endLineNumberExclusive - 1,
																})),
																(Je.newRange = new T.$Ms({
																	startLineNumber: Ke.modified.startLineNumber,
																	endLineNumberInclusive:
																		Ke.modified.endLineNumberExclusive - 1,
																})),
																Je
															);
														}),
													}).toJson(),
												],
											);
								}
							} else yield " failed.", ae?.();
							_.abort(),
								$e || (ye !== void 0 && (Ce(), se.cancelDiff(ye))),
								(ye === void 0 ||
									this.l.nonPersistentStorage.inlineDiffs.find(
										(Fe) => Fe.id === ye,
									) === void 0) &&
									X &&
									this.l.setNonPersistentStorage(
										"nonPersistentChatMetadata",
										({ bubbleId: Fe, tabId: Oe }) =>
											Fe === X.bubbleId && Oe === X.tabId,
										"editUuid",
										void 0,
									);
						}
					}
					async *handleSlashEditResponseSingleDiff({
						eol: J,
						editUuid: W,
						generationMetadata: X,
						composerMetadata: Y,
						streamer: ie,
						request: ne,
						generationUUID: ee,
						abortController: _,
						uri: te,
						lineRange: Q,
						source: Z,
						inlineDiffServiceLookalike: se,
						onCreateInlineDiff: re,
						linesDiffComputerOptions: le,
						onFinish: oe,
						onFailed: ae,
					}) {
						let pe = !1,
							$e;
						yield "Performing edit...";
						const ye =
								Q ??
								new p.$rL(
									1,
									(ne.currentFile?.contents.split(J).length ?? 1) + 1,
								),
							ue = ne.currentFile?.contents
								.split(J)
								.slice(ye.startLineNumber - 1, ye.endLineNumberExclusive - 1);
						se && ne.currentFile && se.usedCurrentFileInfo(ne.currentFile);
						const fe = [];
						let me = 1;
						const ve = [];
						let ge = Date.now();
						const be = () => {
								$e !== void 0 && this.o.addLinesToDiff($e, ve),
									(ve.length = 0),
									(ge = Date.now());
							},
							Ce = () => {
								Date.now() - ge < 250 || be();
							};
						try {
							if (ue === void 0)
								throw new Error("Failed to get current file info");
							const Le = {
								uri: te,
								generationUUID: ee,
								currentRange: ye,
								originalTextLines: ue,
								prompt: "hi5",
								isHidden: !1,
								attachedToPromptBar: !1,
								source: Z ?? e.$a0b,
								createdAt: Date.now(),
								composerMetadata: Y,
							};
							($e = se ? void 0 : (await this.o.addActiveDiff(Le)).id),
								$e !== void 0 &&
									(this.z.set(W, { diffId: $e }), re && re(te, $e));
							let Fe = "";
							for await (const Oe of ie) {
								const xe = Oe.cmdKResponse?.response;
								if (
									!(
										xe?.case !== "editEnd" &&
										xe?.case !== "editStart" &&
										xe?.case !== "editStream"
									)
								)
									switch (xe.case) {
										case "editStart": {
											for (; me < xe.value.startLineNumber; me++) {
												const He = me - ye.startLineNumber + 1;
												He <= ue.length &&
													(ve.push(ue[He - 1]), Ce(), fe.push(ue[He - 1]));
											}
											break;
										}
										case "editStream": {
											for (
												Fe += xe.value.text;
												Fe.includes(`
`);
											) {
												const He = Fe.slice(
													0,
													Fe.indexOf(`
`),
												);
												ve.push(He),
													Ce(),
													fe.push(He),
													(Fe = Fe.slice(
														Fe.indexOf(`
`) + 1,
													));
											}
											break;
										}
										case "editEnd": {
											Fe.length > 0 && (ve.push(Fe), Ce(), fe.push(Fe)),
												(Fe = ""),
												(me = xe.value.endLineNumberExclusive);
											break;
										}
									}
							}
							for (; me <= ue.length; me++)
								ve.push(ue[me - 1]), Ce(), fe.push(ue[me - 1]);
							be(), (pe = !0), $e !== void 0 && this.o.finishDiffSuccess($e);
						} finally {
							if (pe) {
								if ((yield " done!", ue !== void 0)) {
									const Le = await this.m.computeLinesDiff(ue, fe, {
										ignoreTrimWhitespace: !1,
										computeMoves: !1,
										maxComputationTimeMs: 500,
										...le,
									});
									let Fe = Le.changes;
									Le.hitTimeout &&
										(Fe = [new k.$CL(ye, new p.$rL(1, fe.length + 1), void 0)]);
									const Oe = Fe.map((He) => ({
										original: He.original,
										modified: fe.slice(
											He.modified.startLineNumber - 1,
											He.modified.endLineNumberExclusive - 1,
										),
									}));
									oe?.(Oe),
										se && se.finish(Oe),
										X &&
											this.u.setChatData(
												"tabs",
												(He, Ke) => He.tabId === X.tabId,
												"bubbles",
												(He) => He.id === X.aiBubbleId && He.type === "ai",
												"suggestedDiffs",
												[
													new L.$9A({
														relativeWorkspacePath:
															ne.currentFile?.relativeWorkspacePath ?? "",
														chunks: Fe.map((He) => {
															let Ke = new L.$0A();
															return (
																(Ke.oldLines = ue.slice(
																	He.original.startLineNumber - 1,
																	He.original.endLineNumberExclusive - 1,
																)),
																(Ke.newLines = fe.slice(
																	He.modified.startLineNumber - 1,
																	He.modified.endLineNumberExclusive - 1,
																)),
																(Ke.oldRange = new T.$Ms({
																	startLineNumber: He.original.startLineNumber,
																	endLineNumberInclusive:
																		He.original.endLineNumberExclusive - 1,
																})),
																(Ke.newRange = new T.$Ms({
																	startLineNumber: He.modified.startLineNumber,
																	endLineNumberInclusive:
																		He.modified.endLineNumberExclusive - 1,
																})),
																Ke
															);
														}),
													}).toJson(),
												],
											);
								}
							} else yield " failed.", ae?.();
							_.abort(),
								pe ||
									($e !== void 0
										? (be(), this.o.cancelDiff($e))
										: se && se.cancel()),
								se === void 0 &&
									($e === void 0 ||
										this.l.nonPersistentStorage.inlineDiffs.find(
											(Le) => Le.id === $e,
										) === void 0) &&
									X &&
									this.l.setNonPersistentStorage(
										"nonPersistentChatMetadata",
										({ bubbleId: Le, tabId: Fe }) =>
											Le === X.bubbleId && Fe === X.tabId,
										"editUuid",
										void 0,
									);
						}
					}
					async A({
						streamer: J,
						request: W,
						generationUUID: X,
						abortController: Y,
						uri: ie,
					}) {
						const ne = new a.$Zc();
						try {
							const ee = await this.n.createModelReference(ie);
							ne.add(ee);
							const _ = new h.$59b(ee, [
								ee.object.textEditorModel.getFullModelRange(),
							]);
							ne.add(_);
							const te = new Map(),
								Q = new Set(),
								Z = W.currentFile?.contents.split(`
`) ?? [""],
								se = Z.length;
							for await (const re of J) {
								const le = re.cmdKResponse?.response;
								if (
									(le?.case !== "editEnd" &&
										le?.case !== "editStart" &&
										le?.case !== "editStream") ||
									Q.has(le.value.editId)
								)
									continue;
								let oe = te.get(le.value.editId),
									ae = oe?.diffId,
									pe = oe?.active;
								switch (le.case) {
									case "editStart": {
										if (ae !== void 0 || pe !== void 0)
											throw new Error("BAD BAD BAD YELL AT ARVID PLS");
										let $e = _.getUpdatedLineNumber(le.value.startLineNumber),
											ye = le.value.maxEndLineNumberExclusive
												? _.getUpdatedLineNumber(
														le.value.maxEndLineNumberExclusive,
													)
												: void 0;
										if (
											(ye === null &&
												le.value.maxEndLineNumberExclusive !== void 0 &&
												((ye = _.getUpdatedLineNumber(se)),
												ye !== null && (ye += 1)),
											$e === null &&
												(($e = _.getUpdatedLineNumber(se)),
												$e !== null && ($e += 1)),
											ye === void 0 &&
												((ye = _.getUpdatedLineNumber(se)),
												ye !== null && (ye += 1)),
											$e === null || ye === null)
										) {
											Q.add(le.value.editId),
												console.error(
													"BAD BAD BAD YELL AT ARVID PLS Failed to update line numbers for edit",
													le.value.editId,
												);
											continue;
										}
										const ue = new p.$rL($e, ye),
											fe = Z.slice(le.value.startLineNumber - 1),
											me = {
												uri: ie,
												generationUUID: X,
												currentRange: ue,
												originalTextLines: fe,
												prompt: "hi6",
												isHidden: !1,
												attachedToPromptBar: !1,
											},
											ve = await this.o.addActiveDiff(me);
										te.set(le.value.editId, {
											diffId: ve.id,
											active: !0,
											lineBuffer: "",
											startLine: le.value.startLineNumber,
										}),
											(ae = ve.id),
											ee.object.textEditorModel.setNonPersistentReactiveStorage(
												"topPromptBarData",
												"diffIds",
												(be) => [...be, ve.id],
											),
											(pe = !0),
											te.size === 1 && this.o.revealDiff(ve.id);
										const ge = Array.from(te.values()).map((be) => be.diffId);
										this.potentiallyFold(ge, ve.id);
										break;
									}
									case "editStream": {
										const $e = te.get(le.value.editId);
										if ($e === void 0)
											throw new Error("BAD BAD BAD YELL AT ARVID PLS");
										for (
											$e.lineBuffer += le.value.text;
											$e.lineBuffer.includes(`
`);
										) {
											const ye = $e.lineBuffer.slice(
												0,
												$e.lineBuffer.indexOf(`
`),
											);
											this.o.addLineToDiff($e.diffId, ye),
												($e.lineBuffer = $e.lineBuffer.slice(
													$e.lineBuffer.indexOf(`
`) + 1,
												));
										}
										break;
									}
									case "editEnd": {
										const $e = te.get(le.value.editId);
										if ($e === void 0)
											throw new Error("BAD BAD BAD YELL AT ARVID PLS");
										$e.lineBuffer.length > 0 &&
											this.o.addLineToDiff($e.diffId, $e.lineBuffer);
										const ye =
											this.l.nonPersistentStorage.inlineDiffs.find(
												(Le) => Le.id === ae,
											)?.currentRange.startLineNumber ?? null;
										if (ye === null)
											throw new Error("BAD BAD BAD YELL AT ARVID PLS");
										const ue = (0, g.$57b)(
												this.l.nonPersistentStorage.inlineDiffs.find(
													(Le) => Le.id === ae,
												),
											),
											fe = le.value.endLineNumberExclusive,
											me = _.getUpdatedLineNumber(fe) ?? Z.length,
											ve = new p.$rL(ye, me),
											ge = Z.slice($e.startLine, fe);
										this.o.rejectDiff($e.diffId),
											ee.object.textEditorModel.setNonPersistentReactiveStorage(
												"topPromptBarData",
												"diffIds",
												(Le) => Le.filter((Fe) => Fe !== $e.diffId),
											);
										const be = {
												uri: ie,
												generationUUID: X,
												currentRange: ve,
												originalTextLines: ge,
												prompt: "hi",
												isHidden: !1,
												attachedToPromptBar: !1,
											},
											Ce = await this.o.addActiveDiff(be);
										(ae = Ce.id),
											ee.object.textEditorModel.setNonPersistentReactiveStorage(
												"topPromptBarData",
												"diffIds",
												(Le) => [...Le, Ce.id],
											);
										for (const Le of ue) this.o.addLineToDiff(Ce.id, Le);
										this.o.finishDiffSuccess(ae);
										break;
									}
								}
							}
						} finally {
							ne.dispose(), Y.abort();
						}
					}
					async cancelEdit(J) {
						const W = await this.n.createModelReference(J);
						try {
							const X =
								W.object.textEditorModel.nonPersistentReactiveStorage
									.topPromptBarData.lastGenerationUUID;
							X !== void 0 &&
								this.l.setNonPersistentStorage("inprogressAIGenerations", (Y) =>
									Y.filter((ie) => ie.generationUUID !== X),
								);
						} finally {
							W.dispose();
						}
						this.t.executeCommand("editor.unfoldAll");
					}
					async acceptEdit(J) {
						this.x.trackEvent("composer.accept_diff", { source: "editor" }),
							await this.cancelEdit(J);
						const W = await this.n.createModelReference(J);
						try {
							const X = (0, o.$89b)(W.object.textEditorModel, this.l);
							for (let Y = 0; Y < X.length; Y++)
								this.o.acceptDiff(X[Y], { dontBreakConsolidation: Y !== 0 });
						} finally {
							W.dispose();
						}
						this.t.executeCommand("editor.unfoldAll");
					}
					async hasRunningOrPendingEdit(J) {
						const W = await this.n.createModelReference(J);
						try {
							return !!(
								(0, o.$89b)(W.object.textEditorModel, this.l).length > 0 ||
								(0, o.$99b)(W.object.textEditorModel, this.l)
							);
						} finally {
							W.dispose();
						}
					}
					async clearAndMoveFocusToEditor(J) {
						const W = await this.n.createModelReference(J);
						try {
							(await this.hasRunningOrPendingEdit(J)) ||
								(W.object.textEditorModel.nonPersistentReactiveStorage.topPromptBarData.userBubbleDelegate.clear(),
								W.object.textEditorModel.setNonPersistentReactiveStorage(
									"topPromptBarData",
									"shown",
									!1,
								),
								W.object.textEditorModel.setNonPersistentReactiveStorage(
									"topPromptBarData",
									"initText",
									"",
								));
						} finally {
							W.dispose();
						}
						await new Promise((X) => setTimeout(X, 10)),
							this.q.activeEditorPane?.focus();
					}
					async maybeCancelAndDefinitelyRejectEdit(J) {
						await this.cancelEdit(J);
						const W = await this.n.createModelReference(J);
						try {
							const X = (0, o.$89b)(W.object.textEditorModel, this.l);
							for (let Y = 0; Y < X.length; Y++)
								this.o.rejectDiff(X[Y], { dontBreakConsolidation: Y !== 0 });
						} finally {
							W.dispose();
						}
						this.t.executeCommand("editor.unfoldAll");
					}
					async performMultiFileFastEdit({
						aiReferencedCodeBlockURIs: J,
						conversationHistory: W,
						generationMetadata: X,
						generationUUID: Y,
						dontAddConversationChunks: ie,
						onCreateInlineDiff: ne,
					}) {
						const [ee, _] = this.g.registerNewGeneration({
								metadata: X ? { ...X, type: "apply" } : { type: "apply" },
								generationUUID: Y,
							}),
							te = J,
							Q = W.filter(
								($e) => $e.type === L.ConversationMessage_MessageType.HUMAN,
							).at(-1);
						Q &&
							!ie &&
							Q.attachedCodeChunks.forEach(($e) => {
								te.push(this.v.resolveRelativePath($e.relativeWorkspacePath));
							}),
							this.j.publicLogCapture("Submitted multi file fast edit");
						const Z = this.g.getModelDetails({
							specificModelField: "regular-chat",
						});
						let se = [];
						if (te.length > 0)
							for (const $e of te) {
								const ye = await this.n.createModelReference($e);
								try {
									se.push({
										currentFileInfo: new T.$Ws({
											contents: ye.object.textEditorModel.getValue(),
											relativeWorkspacePath: this.v.asRelativePath($e),
											contentsStartAtLine: 1,
											dataframes: [],
											diagnostics: [],
											languageId: "",
											totalNumberOfLines:
												ye.object.textEditorModel.getLineCount(),
											cursorPosition: void 0,
											selection: void 0,
										}),
										uri: $e,
									});
								} finally {
									ye.dispose();
								}
							}
						const re = {
							currentFile: void 0,
							conversation: W,
							modelDetails: Z,
							explicitContext: await this.g.getExplicitContext(),
							summary: "",
							summaryUpUntilIndex: 0,
							isCmdI: !1,
							files: se.map(($e) => $e.currentFileInfo),
							useFastApply: !1,
							fastApplyModelType: u.SlashEditRequest_FastApplyModelType.DEFAULT,
						};
						if (re.files.length === 0)
							throw new Error("Failed to find files to edit");
						const oe = (await this.g.aiClient()).slashEdit(re, {
								signal: _.signal,
								headers: (0, D.$m6b)(Y),
							}),
							ae = this.handleMultiFileSlashEditResponse({
								streamer: oe,
								generationUUID: Y,
								abortController: _,
								files: se,
								onCreateInlineDiff: ne,
							}),
							pe = M.$q0.typeName + "/" + M.$q0.methods.slashEdit.name;
						return this.g.streamResponse({
							modelDetails: Z,
							generationUUID: Y,
							source: "chat",
							streamer: ae,
							streamerURL: pe,
							rethrowCancellation: !0,
							rerun: () => {},
						});
					}
					async *handleMultiFileSlashEditResponse({
						streamer: J,
						generationUUID: W,
						abortController: X,
						files: Y,
						onCreateInlineDiff: ie,
					}) {
						try {
							let ne = {};
							const ee = (Q) => {
									Q.diffId !== void 0 &&
										(this.o.addLinesToDiff(Q.diffId, Q.diffLinesBuffer),
										(Q.diffLinesBuffer.length = 0),
										(Q.diffBufferLastFlushedAt = Date.now()));
								},
								_ = () => {
									Object.values(ne).forEach((Q) => {
										Date.now() - Q.diffBufferLastFlushedAt < 250 || ee(Q);
									});
								};
							yield `Performing multi-file edit on ${Y.map((Q) => (0, A.$sc)(Q.currentFileInfo.relativeWorkspacePath)).join(", ")}...`;
							let te;
							try {
								for await (const Q of J) {
									const Z = Q.cmdKResponse?.response;
									if (
										Z?.case !== "editEnd" &&
										Z?.case !== "editStart" &&
										Z?.case !== "editStream"
									)
										continue;
									const se = Z.value.filePath;
									if (se === void 0) continue;
									if (!(se in ne) && Z.case !== "editEnd") {
										const le = Y.find(
											(fe) => fe.currentFileInfo.relativeWorkspacePath === se,
										);
										if (le === void 0) continue;
										let oe = `
`;
										const ae = await this.n.createModelReference(le.uri);
										try {
											oe = ae.object.textEditorModel.getEOL();
										} finally {
											ae.dispose();
										}
										const pe = le.currentFileInfo.contents.split(oe);
										if (pe === void 0)
											throw new Error("Failed to get current file info");
										const $e = new p.$rL(1, pe.length + 1),
											ye = {
												uri: le.uri,
												generationUUID: W,
												currentRange: $e,
												originalTextLines: pe,
												prompt: "hi",
												isHidden: !1,
												attachedToPromptBar: !1,
												source: e.$_9b,
												createdAt: Date.now(),
											},
											ue = await this.o.addActiveDiff(ye);
										ie && ie(le.uri, ue.id),
											(ne[se] = {
												handler: ue,
												diffId: ue.id,
												currentFileLines: pe,
												newFileLines: [],
												nextFileLineNumber: 1,
												lineBuffer: "",
												diffBufferLastFlushedAt: Date.now(),
												diffLinesBuffer: [],
											});
									}
									const re = ne[se];
									if (re !== void 0) {
										if (te !== void 0 && te !== se) {
											const le = ne[te];
											if (le !== void 0) {
												for (
													;
													le.nextFileLineNumber <= le.currentFileLines.length;
													le.nextFileLineNumber++
												)
													le.diffLinesBuffer.push(
														le.currentFileLines[le.nextFileLineNumber - 1],
													),
														le.newFileLines.push(
															le.currentFileLines[le.nextFileLineNumber - 1],
														);
												ee(le);
											}
										}
										switch (((te = se), Z.case)) {
											case "editStart": {
												for (
													;
													re.nextFileLineNumber < Z.value.startLineNumber;
													re.nextFileLineNumber++
												)
													re.newFileLines.push(
														re.currentFileLines[re.nextFileLineNumber - 1],
													),
														re.diffLinesBuffer.push(
															re.currentFileLines[re.nextFileLineNumber - 1],
														);
												ee(re);
												break;
											}
											case "editStream": {
												for (
													re.lineBuffer += Z.value.text;
													re.lineBuffer.includes(`
`);
												) {
													const le = re.lineBuffer.slice(
														0,
														re.lineBuffer.indexOf(`
`),
													);
													re.newFileLines.push(le),
														re.diffLinesBuffer.push(le),
														_(),
														(re.lineBuffer = re.lineBuffer.slice(
															re.lineBuffer.indexOf(`
`) + 1,
														));
												}
												break;
											}
											case "editEnd": {
												re.lineBuffer.length > 0 &&
													(re.newFileLines.push(re.lineBuffer),
													re.diffLinesBuffer.push(re.lineBuffer),
													ee(re),
													(re.lineBuffer = "")),
													re.nextFileLineNumber <
														Z.value.endLineNumberExclusive &&
														(re.nextFileLineNumber =
															Z.value.endLineNumberExclusive);
												break;
											}
										}
									}
								}
								for (const Q of Y) {
									const Z = ne[Q.currentFileInfo.relativeWorkspacePath];
									if (Z !== void 0) {
										for (
											Z.lineBuffer.length > 0 &&
											(Z.diffLinesBuffer.push(Z.lineBuffer),
											Z.newFileLines.push(Z.lineBuffer));
											Z.nextFileLineNumber <= Z.currentFileLines.length;
											Z.nextFileLineNumber++
										)
											Z.diffLinesBuffer.push(
												Z.currentFileLines[Z.nextFileLineNumber - 1],
											),
												Z.newFileLines.push(
													Z.currentFileLines[Z.nextFileLineNumber - 1],
												),
												await new Promise((se) => setTimeout(se, 10));
										ee(Z), this.o.finishDiffSuccess(Z.handler.id);
									}
								}
							} finally {
								for (const Q of Y) {
									const Z = ne[Q.currentFileInfo.relativeWorkspacePath];
									if (Z !== void 0 && Z.currentFileLines !== void 0) {
										const se = I.$qxb
											.getDefault()
											.computeDiff(Z.currentFileLines, Z.newFileLines, {
												ignoreTrimWhitespace: !1,
												computeMoves: !1,
												maxComputationTimeMs: 500,
											});
										let re = se.changes;
										se.hitTimeout &&
											(re = [
												new k.$CL(
													new p.$rL(1, Z.currentFileLines.length + 1),
													new p.$rL(1, Z.newFileLines.length + 1),
													void 0,
												),
											]);
									}
								}
								yield ` done!

(Tip: use /followUp to further modify the changes!)`,
									X.abort();
							}
						} finally {
							this.l.setNonPersistentStorage("inprogressAIGenerations", (ne) =>
								ne.filter((ee) => ee.generationUUID !== W),
							);
						}
					}
					async performFollowUpOnChanges({
						conversationHistory: J,
						generationMetadata: W,
						generationUUID: X,
					}) {
						const [Y, ie] = this.g.registerNewGeneration({
								metadata: W ? { ...W, type: "apply" } : { type: "apply" },
								generationUUID: X,
							}),
							ne = this.l.nonPersistentStorage.inlineDiffs.filter(
								(oe) => oe.source === e.$_9b || oe.source === e.$a0b,
							);
						if (ne.length === 0) return;
						const ee = [];
						for (const oe of ne) {
							const ae = this.o.getGroupedChanges({ diffId: oe.id });
							for (const pe of ae) ee.push({ sortedChanges: pe, uri: oe.uri });
						}
						const _ = [];
						for (const oe of ee) {
							const ae = oe.sortedChanges.at(0),
								pe = oe.sortedChanges.at(-1);
							if (ae === void 0 || pe === void 0) continue;
							const $e = [];
							let ye = [];
							const ue = await this.n.createModelReference(oe.uri);
							try {
								const fe = ue.object.textEditorModel,
									me = Math.max(ae.addedRange.startLineNumber - 5, 1),
									ve = Math.min(
										pe.addedRange.endLineNumberExclusive + 5,
										fe.getLineCount(),
									);
								let ge = me;
								for (const Ce of oe.sortedChanges) {
									if (ge < Ce.addedRange.startLineNumber) {
										const Le = fe
											.getLinesContent()
											.slice(ge, Ce.addedRange.startLineNumber - 1);
										$e.push(...Le);
									}
									$e.push(...Ce.removedTextLines),
										(ge = Ce.addedRange.endLineNumberExclusive - 1);
								}
								const be = fe.getLinesContent().slice(ge, ve);
								$e.push(...be),
									(ye = fe.getLinesContent().slice(me, ve)),
									_.push({
										originalLines: $e,
										newLines: ye,
										range: {
											startLineNumber: me,
											endLineNumberInclusive: ve - 1,
										},
										relativeWorkspacePath: this.v.asRelativePath(oe.uri),
									});
							} finally {
								ue.dispose();
							}
						}
						const te = await this.g.aiClient(),
							Q = this.g.getModelDetails({
								specificModelField: "regular-chat",
							}),
							Z = { conversation: J, modelDetails: Q, previousEdits: _ },
							se = te.slashEditFollowUpWithPreviousEdits(Z, {
								signal: ie.signal,
								headers: (0, D.$m6b)(X),
							}),
							re = this.handleFollowUp({
								streamer: se,
								generationUUID: X,
								abortController: ie,
								conversationHistory: J,
								generationMetadata: W,
							}),
							le = M.$q0.typeName + "/" + M.$q0.methods.slashEdit.name;
						return this.g.streamResponse({
							modelDetails: Q,
							generationUUID: X,
							source: "chat",
							streamer: re,
							streamerURL: le,
							rethrowCancellation: !0,
							rerun: () => {},
						});
					}
					async *handleFollowUp({
						streamer: J,
						generationUUID: W,
						abortController: X,
						conversationHistory: Y,
						generationMetadata: ie,
					}) {
						try {
							let ne = "";
							for await (let ee of J)
								if (ee.response.case === "chat")
									(ne += ee.response.value.text), yield ee.response.value.text;
								else if (ee.response.case === "editsToUpdate") {
									X.abort(),
										Y.push(
											new L.$SA({
												text: ne,
												type: L.ConversationMessage_MessageType.AI,
											}),
										),
										Y.push(
											new L.$SA({
												text: "apply the changes that were just described to the following selection, if relevant",
												type: L.ConversationMessage_MessageType.HUMAN,
											}),
										);
									const _ = Array.from(
										new Set(
											ee.response.value.previousEdits.map((Q) =>
												this.v.resolveRelativePath(Q.relativeWorkspacePath),
											),
										),
									);
									for (const Q of _) {
										const Z = async (pe) => {
												const $e = [];
												let ye = [];
												const ue = pe[0],
													fe = pe[pe.length - 1];
												let me = ue.addedRange.startLineNumber,
													ve = await this.n.createModelReference(Q);
												try {
													const ge = ve.object.textEditorModel;
													for (const be of pe) {
														if (me < be.addedRange.startLineNumber) {
															const Ce = ge
																.getLinesContent()
																.slice(me, be.addedRange.startLineNumber - 1);
															$e.push(...Ce);
														}
														$e.push(...be.removedTextLines),
															(me = be.addedRange.endLineNumberExclusive);
													}
													ye = ge
														.getLinesContent()
														.slice(
															ue.addedRange.startLineNumber,
															fe.addedRange.endLineNumberExclusive,
														);
												} finally {
													ve.dispose();
												}
												return { originalLines: $e, newLines: ye };
											},
											se = this.l.nonPersistentStorage.inlineDiffs.filter(
												(pe) =>
													P.$dh.isEqual(pe.uri, Q) &&
													(pe.source === e.$_9b || pe.source === e.$a0b),
											),
											re = se
												.flatMap((pe) => pe.changes)
												.sort(
													(pe, $e) =>
														pe.addedRange.startLineNumber -
														$e.addedRange.startLineNumber,
												);
										let le = 0;
										const oe = [],
											ae = ee.response.value.previousEdits
												.filter((pe) =>
													P.$dh.isEqual(
														this.v.resolveRelativePath(
															pe.relativeWorkspacePath,
														),
														Q,
													),
												)
												.sort(
													(pe, $e) =>
														pe.range?.startLineNumber ??
														1 - ($e.range?.startLineNumber ?? 1),
												);
										for (const pe of ae) {
											if (!pe.range) continue;
											const $e = [];
											for (; le < re.length; ) {
												const ye = re[le];
												if (
													ye.addedRange.endLineNumberExclusive <=
													pe.range.startLineNumber
												)
													$e.push(ye);
												else if (
													ye.addedRange.startLineNumber >
													pe.range.endLineNumberInclusive
												)
													break;
												le += 1;
											}
											if ($e.length > 0) {
												const ye = $e.sort(
														(ve, ge) =>
															ve.addedRange.startLineNumber -
															ge.addedRange.startLineNumber,
													),
													{ originalLines: ue, newLines: fe } = await Z(ye),
													me = {
														uri: Q,
														generationUUID: W,
														currentRange: new p.$rL(
															ye[0].removedLinesOriginalRange.startLineNumber,
															ye[ye.length - 1].removedLinesOriginalRange
																.endLineNumberExclusive,
														),
														originalTextLines: ue,
														isHidden: !1,
														attachedToPromptBar: !1,
														source: e.$_9b,
														createdAt: Date.now(),
														prompt: "hi",
													};
												oe.push({ diff: me, newLines: fe });
											}
										}
										if (le < re.length) {
											const $e = re
													.slice(le)
													.sort(
														(me, ve) =>
															me.addedRange.startLineNumber -
															ve.addedRange.startLineNumber,
													),
												{ originalLines: ye, newLines: ue } = await Z($e),
												fe = {
													uri: Q,
													generationUUID: W,
													currentRange: new p.$rL(
														$e[0].removedLinesOriginalRange.startLineNumber,
														$e[$e.length - 1].removedLinesOriginalRange
															.endLineNumberExclusive,
													),
													originalTextLines: ye,
													isHidden: !1,
													attachedToPromptBar: !1,
													source: e.$_9b,
													createdAt: Date.now(),
													prompt: "hi",
												};
											oe.push({ diff: fe, newLines: ue });
										}
										se.forEach((pe) => this.o.rejectDiff(pe.id));
										for (const { diff: pe, newLines: $e } of oe) {
											const ye = await this.o.addActiveDiff(pe);
											ye.addLinesToDiff($e), this.o.finishDiffSuccess(ye.id);
										}
									}
									const te = [];
									for (const Q of ee.response.value.previousEdits)
										te.push(
											(async () => {
												if (Q.range !== void 0) {
													const Z = await this.performAndYieldChatEdit({
														conversationHistory: Y,
														generationMetadata: ie,
														generationUUID: W,
														options: {
															overrideCurrentFileURI:
																this.v.resolveRelativePath(
																	Q.relativeWorkspacePath,
																),
															overrideLineRange: new p.$rL(
																Q.range.startLineNumber,
																Q.range.endLineNumberInclusive + 1,
															),
															overrideSource: e.$_9b,
															rejectChangesInURI: !1,
														},
													});
													if (Z) for await (const se of Z);
												}
											})(),
										);
									await Promise.all(te);
								}
						} finally {
							this.l.setNonPersistentStorage("inprogressAIGenerations", (ne) =>
								ne.filter((ee) => ee.generationUUID !== W),
							);
						}
					}
					async performFastEdit({ query: J, uri: W }) {
						const [X, Y] = this.g.registerNewGeneration({ metadata: void 0 }),
							ie = new a.$Zc(),
							ne = await this.n.createModelReference(W);
						ie.add(ne),
							ne.object.textEditorModel.setNonPersistentReactiveStorage(
								"topPromptBarData",
								"lastGenerationUUID",
								X,
							);
						try {
							this.j.publicLogCapture("Submitted fast edit");
							const ee = this.g.getModelDetails({
									specificModelField: "regular-chat",
								}),
								_ = new u.$wG({
									query: J,
									currentFile: await this.g.getCurrentFileInfo(W, {
										includeNotebookCells: !0,
									}),
									repositories: this.g.repositories.map((le) => le.repoInfo),
									explicitContext: await this.g.getExplicitContext(),
									workspaceRootPath: this.f.getWorkspaceRootPath(),
									modelDetails: ee,
								});
							if (_.currentFile === void 0)
								throw new Error("Failed to get current file info");
							const te = new h.$59b(ne, [
								ne.object.textEditorModel.getFullModelRange(),
							]);
							this.g.addToPromptHistory({
								prompt: J,
								commandType: C.CommandType.CHAT,
							});
							const Z = (await this.g.aiClient()).streamFastEdit(_, {
									signal: Y.signal,
									headers: (0, D.$m6b)(X),
								}),
								se = new Map(),
								re = new Set();
							for await (const le of Z) {
								if (re.has(le.editUuid)) continue;
								let oe = se.get(le.editUuid),
									ae = oe?.diffId,
									pe = oe?.active;
								if (ae === void 0 || pe === void 0) {
									let $e = te.getUpdatedLineNumber(le.lineNumber),
										ye = te.getUpdatedLineNumber(
											le.lineNumber + le.replaceNumLines,
										);
									if (
										(ye === null &&
											((ye = te.getUpdatedLineNumber(
												_.currentFile.contents.split(`
`).length,
											)),
											ye !== null && (ye += 1)),
										$e === null &&
											(($e = te.getUpdatedLineNumber(
												_.currentFile.contents.split(`
`).length,
											)),
											$e !== null && ($e += 1)),
										$e === null || ye === null)
									) {
										re.add(le.editUuid),
											console.error(
												"BAD BAD BAD YELL AT ARVID PLS Failed to update line numbers for edit",
												le.editUuid,
											);
										continue;
									}
									const ue = new p.$rL($e, ye),
										fe = _.currentFile.contents
											.split(`
`)
											.slice(
												le.lineNumber - 1,
												le.lineNumber + le.replaceNumLines - 1,
											),
										me = {
											uri: W,
											generationUUID: X,
											currentRange: ue,
											originalTextLines: fe,
											prompt: _.query,
											isHidden: !1,
											attachedToPromptBar: !1,
										},
										ve = await this.o.addActiveDiff(me);
									se.set(le.editUuid, { diffId: ve.id, active: !0 }),
										(ae = ve.id),
										ne.object.textEditorModel.setNonPersistentReactiveStorage(
											"topPromptBarData",
											"diffIds",
											(be) => [...be, ve.id],
										),
										(pe = !0),
										se.size === 1 && this.o.revealDiff(ve.id);
									const ge = Array.from(se.values()).map((be) => be.diffId);
									this.potentiallyFold(ge, ve.id);
								}
								pe
									? (le.newLine !== void 0 &&
											this.o.addLineToDiff(ae, le.newLine),
										le.done === !0 &&
											(this.o.finishDiffSuccess(ae),
											se.set(le.editUuid, { diffId: ae, active: !1 })))
									: console.log("Skipping inactive edit FOR NOW", le.editUuid);
							}
						} finally {
							ie.dispose(),
								this.l.setNonPersistentStorage(
									"inprogressAIGenerations",
									(ee) => ee.filter((_) => _.generationUUID !== X),
								);
						}
					}
					async potentiallyFold(J, W) {
						const X = this.l.nonPersistentStorage.inlineDiffs.find(
							(ye) => ye.id === W,
						);
						if (X === void 0) return;
						const Y = J.filter((ye) => ye !== W);
						if (Y.length === 0) return;
						const ie = Y.map((ye) => {
							const ue = this.l.nonPersistentStorage.inlineDiffs.find(
								(be) => be.id === ye,
							);
							if (ue === void 0) return 1 / 0;
							const fe = ue.currentRange,
								me = X.currentRange,
								ve = Math.abs(fe.endLineNumberExclusive - me.startLineNumber),
								ge = Math.abs(fe.startLineNumber - me.endLineNumberExclusive);
							return Math.min(ve, ge);
						});
						let ne = 0,
							ee = ie[0];
						for (let ye = 1; ye < ie.length; ye++)
							ie[ye] < ee && ((ne = ye), (ee = ie[ye]));
						const _ = Y[ne],
							te = this.l.nonPersistentStorage.inlineDiffs.find(
								(ye) => ye.id === _,
							);
						if (te === void 0 || ee < 10) return;
						const Q = this.q.activeEditorPane;
						if (Q === void 0) return;
						const Z = Q.getControl();
						if (Z === void 0 || !(0, s.$0sb)(Z)) return;
						const se = b.$ZNb.get(Z);
						if (!se) return;
						const re = se.getFoldingModel();
						if (!re) return;
						const le = await re;
						if (!le) return;
						const oe =
								X.currentRange.startLineNumber < te.currentRange.startLineNumber
									? X
									: te,
							ae =
								X.currentRange.startLineNumber < te.currentRange.startLineNumber
									? te
									: X,
							pe = {
								startLineNumber: oe.currentRange.endLineNumberExclusive + 5,
								endLineNumber: ae.currentRange.startLineNumber - 5,
								type: void 0,
								isCollapsed: !0,
								source: l.FoldSource.userDefined,
							},
							$e = l.$ANb.sanitizeAndMerge(
								le.regions,
								[pe],
								Z.getModel()?.getLineCount(),
							);
						le.updatePost(l.$ANb.fromFoldRanges($e));
					}
					applyDiffToLines(J, W) {
						const X = [];
						let Y = 0;
						for (let ie = 0; ie < J.length; ie++) {
							const ne = J[ie];
							if (Y < W.length) {
								const { original: ee, modified: _ } = W[Y];
								if (
									ie === ee.startLineNumber - 1 &&
									(X.push(..._),
									Y++,
									ee.endLineNumberExclusive !== ee.startLineNumber)
								) {
									ie += ee.endLineNumberExclusive - ee.startLineNumber - 1;
									continue;
								}
							}
							X.push(ne);
						}
						for (; Y < W.length; ) {
							const { original: ie, modified: ne } = W[Y];
							X.push(...ne), Y++;
						}
						return X;
					}
					B(J) {
						const W = J.split(`
`),
							X = W.findIndex((ne) => ne.trim() !== ""),
							Y = [...W].reverse().findIndex((ne) => ne.trim() !== ""),
							ie = W.length - 1 - Y;
						return X === -1 || Y === -1
							? ""
							: W.slice(X, ie + 1).join(`
`);
					}
					C(J, W) {
						return {
							[Symbol.asyncIterator]: async function* () {
								yield new u.$qG({
									cmdKResponse: new F.$KC({
										response: {
											case: "editStart",
											value: new F.$LC({ startLineNumber: 1 }),
										},
									}),
								}),
									yield new u.$qG({
										cmdKResponse: new F.$KC({
											response: {
												case: "editStream",
												value: new F.$MC({ text: J, editId: 0 }),
											},
										}),
									}),
									yield new u.$qG({
										cmdKResponse: new F.$KC({
											response: {
												case: "editEnd",
												value: new F.$NC({
													editId: 0,
													endLineNumberExclusive:
														W.split(`
`).length + 2,
												}),
											},
										}),
									});
							},
						};
					}
				};
				(G = Ne(
					[
						j(0, n.$36b),
						j(1, r.$Nfc),
						j(2, d.$Z6b),
						j(3, E.$km),
						j(4, m.$a9b),
						j(5, w.$0zb),
						j(6, R.$Cxb),
						j(7, c.$MO),
						j(8, g.$27b),
						j(9, f.$IY),
						j(10, y.$ek),
						j(11, S.$kgc),
						j(12, N.$Vi),
						j(13, B.$GN),
						j(14, i.$Li),
						j(15, q.$ifc),
						j(16, V.IComposerDataService),
					],
					G,
				)),
					(0, t.$lK)(e.$$9b, G, t.InstantiationType.Delayed);
			},
		),
		