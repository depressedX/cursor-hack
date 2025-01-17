import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/bufbuild/connect.js';
import '../../../../../external/solid/store.js';
import '../../../../../proto/aiserver/v1/aiserver_connectweb.js';
import '../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../../../proto/aiserver/v1/chat_connectweb.js';
import '../../../../../proto/aiserver/v1/chat_pb.js';
import '../../../../../proto/aiserver/v1/composer_pb.js';
import '../../../../../proto/aiserver/v1/fastapply_pb.js';
import '../../../../../proto/aiserver/v1/repository_pb.js';
import '../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../base/common/async.js';
import '../../../../base/common/asyncPromiseQueue.js';
import '../../../../base/common/buffer.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/network.js';
import '../../../../base/common/path.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/types.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/uuid.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/browser/services/genericUndoRedoElement.js';
import '../../../../editor/browser/services/inlineDiffService.js';
import '../../../../editor/common/core/lineRange.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/diff/rangeMapping.js';
import '../../../../editor/common/languages/language.js';
import '../../../../editor/common/services/editorWorker.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../platform/aiAssert/browser/aiAssertService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/cursor/browser/aiEverythingProviderService.js';
import '../../../../platform/editor/common/editor.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/label/common/label.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../../../../platform/undoRedo/common/undoRedo.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../common/editor.js';
import '../../../common/editor/textResourceEditorInput.js';
import '../../aichat/browser/codeSelections.js';
import '../../aiContextBank/browser/contextBankService.js';
import '../../aiFeatureStatusService/browser/aiFeatureStatusService.js';
import '../../bugbot/browser/utils.js';
import './composer.js';
import './composerCapabilities.js';
import './composerContextKeys.js';
import './composerData.js';
import './composerDataCreation.js';
import './composerDataService.js';
import './composerDiffEditorInput.js';
import './composerUtilsService.js';
import './composerViews.js';
import '../../files/browser/editors/fileEditorInput.js';
import '../../multiDiffEditor/browser/multiDiffEditorInput.js';
import '../../recentFilesTrackerService/browser/recentFilesTrackerService.js';
import '../../terminal/browser/terminal.js';
import '../../utils/browser/chatAndComposerSuggestedFileReranking.js';
import '../../../services/ai/browser/aiFileInfoService.js';
import '../../../services/ai/browser/aiMiscServices.js';
import '../../../services/ai/browser/aiService.js';
import '../../../services/ai/browser/backendClient.js';
import '../../../services/ai/browser/cursorCredsService.js';
import '../../../services/ai/browser/fastEditService.js';
import '../../../services/ai/browser/gitContextService.js';
import '../../../services/ai/browser/repositoryService.js';
import '../../../services/ai/browser/toolsV2/toolsV2Service.js';
import '../../../services/ai/browser/utils.js';
import '../../../services/ai/common/dataScrubbingService.js';
import '../../../services/aiErrors/browser/aiErrorService.js';
import '../../../services/cursorAuth/browser/authenticationService.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../services/selectedContext/browser/selectedContext.js';
import '../../../services/selectedContext/browser/selectedContextData.js';
import '../../../services/selectedContext/browser/utils.js';
import '../../../services/views/common/viewsService.js';
import '../../aichat/browser/utils.js';
import '../../../../platform/markers/common/markers.js';
import '../../../../base/common/constants.js';
import '../../../../platform/tracing/common/tracing.js';
import '../../../../../proto/aiserver/v1/tools_pb.js';
import '../../aiApplyToFileActionsService/browser/aiApplyToFileActionsService.js';
import '../../terminal/browser/terminalExecutionService.js';
import '../../prettyDialog/browser/prettyDialog.js';
import '../../../services/ai/browser/toolsV2/toolsV2HandlerRegistryService.js';
import '../../../../editor/browser/services/inlineDiffUndoRedoElement.js';
import '../../../services/filesConfiguration/common/filesConfigurationService.js';
import '../../../services/textfile/common/textfiles.js';
import '../../../common/editor/resourceEditorInput.js';
import './constants.js';
import '../../../../base/browser/baseSolidComponents/utils/solid-primitives/utils/utils.js';
import './mocks/index.js';
import './mocks/utils.js';
define(
		de[4364],
		he([
			1, 0, 340, 193, 341, 148, 1112, 126, 167, 581, 272, 83, 15, 1497, 76, 6,
			3, 23, 54, 19, 28, 9, 47, 65, 606, 383, 196, 17, 342, 61, 200, 67, 42,
			668, 10, 8, 280, 116, 22, 20, 5, 73, 41, 45, 134, 155, 25, 44, 478, 354,
			1053, 287, 1269, 219, 262, 793, 225, 1318, 209, 1828, 426, 506, 844, 712,
			560, 107, 1007, 837, 137, 118, 285, 477, 480, 359, 226, 4363, 191, 356,
			401, 232, 66, 18, 52, 271, 298, 299, 89, 397, 90, 58, 216, 124, 852, 617,
			559, 398, 779, 170, 85, 1296, 169, 302, 3044, 795,
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
			D,
			M,
			N,
			A,
			R,
			O,
			B,
			U,
			z,
			F,
			x,
			H,
			q,
			V,
			G,
			K,
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
			$e,
			ye,
			ue,
			fe,
			me,
			ve,
			ge,
			be,
			Ce,
			Le,
			Fe,
			Oe,
			xe,
			He,
			Ke,
			Je,
			Te,
			Ee,
			Ie,
			Be,
			Se,
			ke,
			Ue,
			qe,
			Ae,
			Me,
			De,
			Re,
			je,
			Ve,
			Ze,
			et,
			rt,
			ft,
			bt,
			nt,
			lt,
			ct,
			gt,
			ht,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
			const Rt = !1,
				Nt = 500,
				jt = 1e3,
				ti = 10,
				kt = 1e6,
				hi = { shouldGracefullyFallBackOnTimeout: !0 };
			let Kt = class extends p.$1c {
				constructor(
					Ye,
					ze,
					Xe,
					It,
					Lt,
					xt,
					Vt,
					Bt,
					Gt,
					Mt,
					Ut,
					ei,
					mi,
					ii,
					Dt,
					Jt,
					si,
					Zt,
					ci,
					ri,
					$i,
					Wt,
					tt,
					at,
					pi,
					Li,
					Di,
					Ui,
					Wi,
					Gi,
					qi,
					Oi,
					yi,
					Ai,
					li,
					Vi,
					wi,
					_t,
					ai,
					Ft,
					Xt,
					$t,
					ut,
					Et,
					Tt,
					qt,
					At,
				) {
					super(),
						(this.reactiveStorageService = Ye),
						(this.instantiationService = ze),
						(this.workspaceContextService = Xe),
						(this.aiService = It),
						(this.textModelService = Lt),
						(this.dataScrubbingService = xt),
						(this.fastEditService = Vt),
						(this.inlineDiffService = Bt),
						(this.fileService = Gt),
						(this.editorService = Mt),
						(this.cursorCredsService = Ut),
						(this.editorGroupsService = ei),
						(this.contextKeyService = mi),
						(this.openerService = ii),
						(this.repositoryService = Dt),
						(this.viewsService = Jt),
						(this.composerDataService = si),
						(this.cursorAuthenticationService = Zt),
						(this.editorWorkerService = ci),
						(this.terminalService = ri),
						(this.recentFilesTrackerService = $i),
						(this.aiErrorService = Wt),
						(this.selectedContextService = tt),
						(this.aiFeatureStatusService = at),
						(this.everythingProviderService = pi),
						(this.aiAssertService = Li),
						(this.gitContextService = Di),
						(this.lifecycleService = Ui),
						(this.undoRedoService = Wi),
						(this.configurationService = Gi),
						(this.modelService = qi),
						(this.languageService = Oi),
						(this.composerViewsService = yi),
						(this.labelService = Ai),
						(this.contextBankService = li),
						(this.composerUtilsService = Vi),
						(this._codeEditorService = wi),
						(this.aiFileInfoService = _t),
						(this.toolV2Service = ai),
						(this.analyticsService = Ft),
						(this.markerService = Xt),
						(this.aiApplyToFileActionsService = $t),
						(this.terminalExecutionService = ut),
						(this.prettyDialogService = Et),
						(this.toolsV2HandlerRegistryService = Tt),
						(this.filesConfigurationService = qt),
						(this.textFileService = At),
						(this._shouldOpenNextAppliedFile = !1),
						(this._composerEditingStates = new Map()),
						(this._isTurningCachedCodeBlocksToDiffs = !1),
						(this._fileWatchers = new Map()),
						(this._uriToCachedCodeBlocks = new Map()),
						(this._uriToCachedCodeBlocksQueue = new Map()),
						(this._composerApplyingDiffsState = new Map()),
						(this._ignoreChangesToContext = new Set()),
						(this._fastApplyQueue = new h.$Sh(ti)),
						(this._skipHandleAbortChat = new Set()),
						(this._recentlyResumed = !1),
						(this._onDidReset = this.D(new g.$re())),
						(this.onDidReset = this._onDidReset.event),
						(this._onDidOpenComposer = this.D(new g.$re())),
						(this.onDidOpenComposer = this._onDidOpenComposer.event),
						(this._onDidInsertTerminalText = this.D(new g.$re())),
						(this.onDidInsertTerminalText =
							this._onDidInsertTerminalText.event),
						(this._onContextRemoved = this.D(new g.$re())),
						(this.onContextRemoved = this._onContextRemoved.event),
						(this._onProjectContextRemoved = this.D(new g.$re())),
						(this.onProjectContextRemoved =
							this._onProjectContextRemoved.event),
						(this._onDidEnableDisableComposer = this.D(new g.$re())),
						(this.onDidEnableDisableComposer =
							this._onDidEnableDisableComposer.event),
						(this._onShouldShowPreview = this.D(new g.$re())),
						(this.onShouldShowPreview = this._onShouldShowPreview.event),
						(this._onShouldClearLexical = this.D(new g.$re())),
						(this.onShouldClearLexical = this._onShouldClearLexical.event),
						(this._onTurningCodeBlockToCodePill = this.D(new g.$re())),
						(this.onTurningCodeBlockToCodePill =
							this._onTurningCodeBlockToCodePill.event),
						(this._onShouldForceText = this.D(new g.$re())),
						(this.onShouldForceText = this._onShouldForceText.event),
						(this._onDidSendRequest = this.D(new g.$re())),
						(this.onDidSendRequest = this._onDidSendRequest.event),
						(this._onDidAiEditFile = this.D(new g.$re())),
						(this.onDidAiEditFile = this._onDidAiEditFile.event),
						(this._onDidFinishApplyingCodeBlock = this.D(new g.$re())),
						(this.onDidFinishApplyingCodeBlock =
							this._onDidFinishApplyingCodeBlock.event),
						(this._onDidSubmitChat = this.D(new g.$re())),
						(this.onDidSubmitChat = this._onDidSubmitChat.event),
						(this._onDidFinishAiEditToolCall = this.D(new g.$re())),
						(this.onDidFinishAiEditToolCall =
							this._onDidFinishAiEditToolCall.event),
						(this.latestSubmitWarmCacheRequestTimes = []),
						(this.recentTimeWindow = 60 * 1e3),
						(this.maxRecentRequests = 10),
						(this.reapply = async (gi, ki, Pi) => {
							const Hi = { stack: [], error: void 0, hasError: !1 };
							try {
								const Ji = ms(Hi, (0, De.span)("ComposerService.reapply"), !1),
									cn = this.composerDataService.getComposerData(gi);
								if (!cn) return;
								const un = this.composerDataService.getLatestCodeBlockVersion(
										cn.composerId,
										ki,
									),
									yn = Pi !== void 0 ? Pi : un,
									Rn = cn.codeBlockData[ki.toString()][yn];
								Rn?.isNotApplied &&
									this.composerDataService.updateComposerCodeBlock(
										cn.composerId,
										ki,
										yn,
										{ isNotApplied: !1 },
									),
									Rn && cn.composerId
										? await this.runFastApplyOnCodeBlock(
												cn.composerId,
												{ ...Rn },
												{ isReapply: !0 },
											)
										: console.error(
												`[composer] Unable to reapply version ${yn} for ${ki.toString()}`,
											);
							} catch (Ji) {
								(Hi.error = Ji), (Hi.hasError = !0);
							} finally {
								ps(Hi);
							}
						}),
						(this.reapplyLastMessage = (gi) => {
							const ki = { stack: [], error: void 0, hasError: !1 };
							try {
								const Pi = ms(
										ki,
										(0, De.span)("ComposerService.reapplyLastMessage"),
										!1,
									),
									Hi = this.composerDataService.getLastAiBubble(gi);
								if (!Hi?.codeBlocks) return;
								for (const Ji of Hi.codeBlocks) {
									const cn = this.composerDataService.getComposerCodeBlock(
										gi,
										Ji.uri,
										Ji.version,
									);
									(cn?.isNoOp || cn?.status === "cancelled") &&
										this.reapply(gi, Ji.uri);
								}
							} catch (Pi) {
								(ki.error = Pi), (ki.hasError = !0);
							} finally {
								ps(ki);
							}
						}),
						(this.editorListeners = new Map()),
						this.composerViewsService.setOpenComposer(async (gi, ki) =>
							this.openComposer(gi, ki),
						),
						this.initializeEditorListeners().catch(console.error),
						this.reactiveStorageService.setApplicationUserPersistentStorage(
							"composerState",
							"isComposerEnabled2",
							!0,
						),
						(this.chatClient = this.instantiationService.createInstance(
							ge.$q6b,
							{ service: C.$cbb },
						));
					const Yt = (gi, ki, Pi) => {
							const Hi = { stack: [], error: void 0, hasError: !1 };
							try {
								const Ji = ms(
									Hi,
									(0, De.span)(
										"ComposerService.abortAndRemoveApplyGenerationUUID",
									),
									!1,
								);
								if (!this.getComposer(gi)) return;
								const un = this.composerDataService.getComposerCodeBlock(
									gi,
									ki,
									Pi,
								);
								un?.applyGenerationUUID &&
									(this.abortGenerationUUID(un.applyGenerationUUID),
									this.composerDataService.updateComposerCodeBlock(gi, ki, Pi, {
										applyGenerationUUID: void 0,
									}));
							} catch (Ji) {
								(Hi.error = Ji), (Hi.hasError = !0);
							} finally {
								ps(Hi);
							}
						},
						ni = (gi) => {
							const ki = { stack: [], error: void 0, hasError: !1 };
							try {
								const Pi = ms(
									ki,
									(0, De.span)("ComposerService.handleDiffRemoval"),
									!1,
								);
								if (!gi.composerId) return;
								gi.accepted ? fi(gi.diffInfo, !1) : bi(gi.diffInfo, !1);
							} catch (Pi) {
								(ki.error = Pi), (ki.hasError = !0);
							} finally {
								ps(ki);
							}
						},
						bi = (gi, ki = !0) => {
							const Pi = { stack: [], error: void 0, hasError: !1 };
							try {
								const Hi = ms(
										Pi,
										(0, De.span)("ComposerService.handleDiffReject"),
										!1,
									),
									{ composerId: Ji, version: cn } = gi.composerMetadata ?? {};
								if (!Ji || cn === void 0) return;
								const un = this.getComposer(Ji);
								if (
									!un ||
									!this.composerDataService.getComposerCodeBlock(Ji, gi.uri, cn)
								)
									return;
								if (!this.isCodeBlockRegisteredAsCached(Ji, gi.uri, cn)) {
									this.composerDataService.setCodeBlockStatus(
										Ji,
										gi.uri,
										cn,
										"rejected",
									);
									const _i = this.composerDataService.getLastHumanBubble(Ji),
										Bn = this.workspaceContextService.asRelativePath(gi.uri);
									if (_i) {
										const Mn = (zn) => {
											const $n = (zn ?? []).find((Ln) => Ln.filePath === Bn);
											if ($n) {
												const Ln = { ...$n };
												return (
													$n.userResponseType ===
													d.UserResponseToSuggestedCodeBlock_UserResponseType
														.REJECT
														? ((Ln.userResponseType =
																d.UserResponseToSuggestedCodeBlock_UserResponseType.REJECT),
															(Ln.userModificationsToSuggestedCodeBlocks =
																void 0))
														: (Ln.userResponseType =
																d.UserResponseToSuggestedCodeBlock_UserResponseType.MODIFY),
													[...(zn ?? []).filter((wn) => wn.filePath !== Bn), Ln]
												);
											} else
												return [
													...(zn ?? []),
													{
														userResponseType:
															d
																.UserResponseToSuggestedCodeBlock_UserResponseType
																.REJECT,
														filePath: Bn,
													},
												];
										};
										un.currentBubbleId
											? this.composerDataService.updateComposerDataSetStore(
													Ji,
													(zn) => {
														zn(
															"conversation",
															($n) => $n.bubbleId === un.currentBubbleId,
															"userResponsesToSuggestedCodeBlocks",
															Mn,
														);
													},
												)
											: this.composerDataService.updateComposerDataSetStore(
													Ji,
													(zn) => {
														zn("userResponsesToSuggestedCodeBlocks", Mn);
													},
												);
									}
									Yt(Ji, gi.uri, cn);
								}
								this.deleteNewFileAndMaybeFolder(Ji, gi.uri).then((_i) => {
									_i || (ki && this.saveFile(gi.uri, { force: !0 }));
								});
							} catch (Hi) {
								(Pi.error = Hi), (Pi.hasError = !0);
							} finally {
								ps(Pi);
							}
						},
						fi = (gi, ki = !0) => {
							const Pi = { stack: [], error: void 0, hasError: !1 };
							try {
								const Hi = ms(
										Pi,
										(0, De.span)("ComposerService.handleDiffAccept"),
										!1,
									),
									{ composerId: Ji, version: cn } = gi.composerMetadata ?? {};
								if (!Ji || cn === void 0) return;
								const un = this.getComposer(Ji);
								if (
									!un ||
									!this.composerDataService.getComposerCodeBlock(Ji, gi.uri, cn)
								)
									return;
								const Rn = this.workspaceContextService.asRelativePath(gi.uri);
								if (this.composerDataService.getLastHumanBubble(Ji)) {
									const Bn = (Mn) => {
										const zn = (Mn ?? []).find(($n) => $n.filePath === Rn);
										if (zn) {
											const $n = { ...zn };
											return (
												zn.userResponseType ===
												d.UserResponseToSuggestedCodeBlock_UserResponseType
													.ACCEPT
													? (($n.userResponseType =
															d.UserResponseToSuggestedCodeBlock_UserResponseType.ACCEPT),
														($n.userModificationsToSuggestedCodeBlocks =
															void 0))
													: ($n.userResponseType =
															d.UserResponseToSuggestedCodeBlock_UserResponseType.MODIFY),
												[...(Mn ?? []).filter((Ln) => Ln.filePath !== Rn), $n]
											);
										} else
											return [
												...(Mn ?? []),
												{
													userResponseType:
														d.UserResponseToSuggestedCodeBlock_UserResponseType
															.ACCEPT,
													filePath: Rn,
												},
											];
									};
									un.currentBubbleId
										? this.composerDataService.updateComposerDataSetStore(
												Ji,
												(Mn) => {
													Mn(
														"conversation",
														(zn) => zn.bubbleId === un.currentBubbleId,
														"userResponsesToSuggestedCodeBlocks",
														Bn,
													);
												},
											)
										: this.composerDataService.updateComposerDataSetStore(
												Ji,
												(Mn) => {
													Mn("userResponsesToSuggestedCodeBlocks", Bn);
												},
											);
								}
								ki && this.saveFile(gi.uri, { force: !0 }),
									this.composerDataService.setCodeBlockStatus(
										Ji,
										gi.uri,
										cn,
										"accepted",
									),
									Yt(Ji, gi.uri, cn),
									this.removeFileFromNewlyCreatedFilesAndFolders(Ji, gi.uri);
							} catch (Hi) {
								(Pi.error = Hi), (Pi.hasError = !0);
							} finally {
								ps(Pi);
							}
						},
						Ti = (gi, ki) => {
							const Pi = { stack: [], error: void 0, hasError: !1 };
							try {
								const Hi = ms(
										Pi,
										(0, De.span)("ComposerService.handlePartialDiff"),
										!1,
									),
									{ composerId: Ji, version: cn } =
										gi.diffInfo.composerMetadata ?? {};
								if (!Ji || cn === void 0) return;
								const un = this.getComposer(Ji);
								if (!un) return;
								const { diffInfo: yn, isDone: Rn, change: _i } = gi;
								if (!_i) return;
								const Bn = this.composerDataService.getLastHumanBubble(Ji),
									Mn = this.workspaceContextService.asRelativePath(yn.uri);
								if (Bn) {
									let zn;
									if (ki === "rejected") {
										const Ln = _i.rejected.map((Yn) => `- ${Yn}`),
											wn = _i.accepted.map((Yn) => `+ ${Yn}`),
											Hn = [...Ln, ...wn];
										zn = new a.$Es({ content: "", lines: Hn });
									}
									const $n = (Ln) => {
										const wn = (Ln ?? []).find((Hn) => Hn.filePath === Mn);
										if (wn) {
											const Hn = { ...wn };
											return (
												zn &&
													Hn.userModificationsToSuggestedCodeBlocks?.chunks.push(
														zn,
													),
												wn.userResponseType ===
													d.UserResponseToSuggestedCodeBlock_UserResponseType
														.ACCEPT && ki === "accepted"
													? (Hn.userResponseType =
															d.UserResponseToSuggestedCodeBlock_UserResponseType.ACCEPT)
													: wn.userResponseType ===
																d
																	.UserResponseToSuggestedCodeBlock_UserResponseType
																	.REJECT && ki === "rejected"
														? (Hn.userResponseType =
																d.UserResponseToSuggestedCodeBlock_UserResponseType.REJECT)
														: (Hn.userResponseType =
																d.UserResponseToSuggestedCodeBlock_UserResponseType.MODIFY),
												[...(Ln ?? []).filter((Yn) => Yn.filePath !== Mn), Hn]
											);
										} else
											return [
												...(Ln ?? []),
												{
													userResponseType:
														ki === "accepted"
															? d
																	.UserResponseToSuggestedCodeBlock_UserResponseType
																	.ACCEPT
															: d
																	.UserResponseToSuggestedCodeBlock_UserResponseType
																	.REJECT,
													filePath: Mn,
													userModificationsToSuggestedCodeBlocks: new a.$Ds({
														from: Mn,
														to: Mn,
														chunks: zn ? [zn] : [],
													}),
												},
											];
									};
									un.currentBubbleId
										? this.composerDataService.updateComposerDataSetStore(
												Ji,
												(Ln) => {
													Ln(
														"conversation",
														(wn) => wn.bubbleId === un.currentBubbleId,
														"userResponsesToSuggestedCodeBlocks",
														$n,
													);
												},
											)
										: this.composerDataService.updateComposerDataSetStore(
												Ji,
												(Ln) => {
													Ln("userResponsesToSuggestedCodeBlocks", $n);
												},
											);
								}
								Rn && (ki === "accepted" ? fi(yn) : bi(yn));
							} catch (Hi) {
								(Pi.error = Hi), (Pi.hasError = !0);
							} finally {
								ps(Pi);
							}
						},
						wt = (gi) => {
							const ki = { stack: [], error: void 0, hasError: !1 };
							try {
								const Pi = ms(
										ki,
										(0, De.span)("ComposerService.handleAddDiffFromUndoRedo"),
										!1,
									),
									{ composerId: Hi, version: Ji } = gi.composerMetadata ?? {};
								if (
									!Hi ||
									Ji === void 0 ||
									!this.getComposer(Hi) ||
									!this.composerDataService.getComposerCodeBlock(Hi, gi.uri, Ji)
								)
									return;
								this.composerDataService.updateComposerCodeBlock(
									Hi,
									gi.uri,
									Ji,
									{ status: "completed" },
								),
									console.log(
										`[composer] Restored diff for ${gi.uri.toString()} with version ${Ji}`,
									);
							} catch (Pi) {
								(ki.error = Pi), (ki.hasError = !0);
							} finally {
								ps(ki);
							}
						};
					if (
						(this.D(this.inlineDiffService.onDidAcceptDiff(fi)),
						this.D(this.inlineDiffService.onDidRejectDiff((gi) => bi(gi))),
						this.D(
							this.inlineDiffService.onDidRemoveDiffFromUndoRedo((gi) =>
								ni(gi),
							),
						),
						this.D(
							this.inlineDiffService.onDidAddDiffFromUndoRedo((gi) => wt(gi)),
						),
						this.D(
							this.inlineDiffService.onDidAcceptPartialDiff((gi) =>
								Ti(gi, "accepted"),
							),
						),
						this.D(
							this.inlineDiffService.onDidRejectPartialDiff((gi) =>
								Ti(gi, "rejected"),
							),
						),
						this.D(
							this.editorService.onDidVisibleEditorsChange((gi) => {
								const ki = { stack: [], error: void 0, hasError: !1 };
								try {
									const Pi = ms(
											ki,
											(0, De.span)("ComposerService.onDidVisibleEditorsChange"),
											!1,
										),
										Hi = this.composerDataService.getComposerData(
											this.composerDataService.selectedComposerId,
										);
									Hi &&
										!Hi.hasChangedContext &&
										(this.isComposerEmpty(
											this.composerDataService.selectedComposerId,
										) ||
											Hi.conversation.length === 0) &&
										this.refreshReactiveContextItem(
											this.composerDataService.selectedComposerId,
										);
									const Ji = this.composerDataService.getComposerData(
										this.composerDataService.selectedChatId,
									);
									Ji &&
										!Ji.hasChangedContext &&
										this.refreshReactiveContextItem(
											this.composerDataService.selectedChatId,
										);
								} catch (Pi) {
									(ki.error = Pi), (ki.hasError = !0);
								} finally {
									ps(ki);
								}
							}),
						),
						this.D(
							this.editorService.onDidActiveEditorChange((gi) => {
								const ki = { stack: [], error: void 0, hasError: !1 };
								try {
									const Pi = ms(
											ki,
											(0, De.span)("ComposerService.onDidActiveEditorChange"),
											!1,
										),
										Hi = this.composerDataService.getComposerData(
											this.composerDataService.selectedComposerId,
										);
									Hi &&
										!Hi.hasChangedContext &&
										(this.isComposerEmpty(
											this.composerDataService.selectedComposerId,
										) ||
											Hi.conversation.length === 0) &&
										this.refreshReactiveContextItem(
											this.composerDataService.selectedComposerId,
										);
									const Ji = this.composerDataService.getComposerData(
										this.composerDataService.selectedChatId,
									);
									Ji &&
										!Ji.hasChangedContext &&
										(this.isComposerEmpty(
											this.composerDataService.selectedChatId,
										) ||
											Ji.conversation.length === 0) &&
										this.refreshReactiveContextItem(
											this.composerDataService.selectedChatId,
										);
								} catch (Pi) {
									(ki.error = Pi), (ki.hasError = !0);
								} finally {
									ps(ki);
								}
							}),
						),
						this.D(
							this.reactiveStorageService.onChangeEffectManuallyDisposed({
								deps: [
									() =>
										this.reactiveStorageService.applicationUserPersistentStorage
											.composerState.mainComposerMode,
								],
								onChange: () => {
									const gi = { stack: [], error: void 0, hasError: !1 };
									try {
										const ki = ms(
												gi,
												(0, De.span)(
													"ComposerService.onChangeEffectManuallyDisposed",
												),
												!1,
											),
											Pi = this.composerDataService.getComposerData(
												this.composerDataService.selectedComposerId,
											);
										Pi &&
											!Pi.hasChangedContext &&
											(this.isComposerEmpty(
												this.composerDataService.selectedComposerId,
											) ||
												Pi.conversation.length === 0) &&
											this.refreshReactiveContextItem(
												this.composerDataService.selectedComposerId,
											);
										const Hi = this.composerDataService.getComposerData(
											this.composerDataService.selectedChatId,
										);
										Hi &&
											!Hi.hasChangedContext &&
											(this.isComposerEmpty(
												this.composerDataService.selectedChatId,
											) ||
												Hi.conversation.length === 0) &&
											this.refreshReactiveContextItem(
												this.composerDataService.selectedChatId,
											);
									} catch (ki) {
										(gi.error = ki), (gi.hasError = !0);
									} finally {
										ps(gi);
									}
								},
							}),
						),
						this.D(
							this.fileService.onDidFilesChange((gi) => {
								const ki = Array.from(
									new Set([
										...this._uriToCachedCodeBlocks.keys(),
										...this._uriToCachedCodeBlocksQueue.keys(),
									]),
								);
								for (const Pi of ki) {
									const Hi = l.URI.parse(Pi);
									if (gi.contains(Hi)) {
										const Ji =
											this._uriToCachedCodeBlocksQueue.get(Hi.toString()) ?? [];
										this.markUriAsOutdated(Hi, Ji.length > 0),
											Ji.length > 0 &&
												(this._uriToCachedCodeBlocks.set(Hi.toString(), Ji),
												this._uriToCachedCodeBlocksQueue.delete(Hi.toString()));
									}
								}
							}),
						),
						!this.reactiveStorageService.workspaceUserPersistentStorage
							.composerState)
					) {
						const gi = { stack: [], error: void 0, hasError: !1 };
						try {
							const ki = ms(
								gi,
								(0, De.span)(
									"ComposerService.setWorkspaceUserPersistentStorage",
								),
								!1,
							);
							this.reactiveStorageService.setWorkspaceUserPersistentStorage(
								"composerState",
								{ horizontalBarSize: 520, tabHeight: 400 },
							);
						} catch (ki) {
							(gi.error = ki), (gi.hasError = !0);
						} finally {
							ps(gi);
						}
					}
					const We = te.composerIsEnabled.bindTo(this.contextKeyService);
					We.set(
						this.reactiveStorageService.applicationUserPersistentStorage
							.composerState.isComposerEnabled2,
					),
						this.D(
							this.reactiveStorageService.onChangeEffectManuallyDisposed({
								deps: [
									() =>
										this.reactiveStorageService.applicationUserPersistentStorage
											.composerState.isComposerEnabled2,
								],
								onChange: ({ deps: gi }) => {
									const ki = { stack: [], error: void 0, hasError: !1 };
									try {
										const Pi = ms(
											ki,
											(0, De.span)(
												"ComposerService.onChangeEffectManuallyDisposed",
											),
											!1,
										);
										this._onDidEnableDisableComposer.fire({ enabled: gi[0] });
									} catch (Pi) {
										(ki.error = Pi), (ki.hasError = !0);
									} finally {
										ps(ki);
									}
								},
							}),
						),
						this.D(
							this.reactiveStorageService.onChangeEffectManuallyDisposed({
								deps: [
									() => {
										const gi =
											this.composerDataService.allComposersData
												.selectedComposerHandle;
										return gi ? gi.data.context.fileSelections : [];
									},
								],
								onChange: () => {
									const gi = { stack: [], error: void 0, hasError: !1 };
									try {
										const ki = ms(
											gi,
											(0, De.span)(
												"ComposerService.onChangeEffectManuallyDisposed",
											),
											!1,
										);
										this.composerDataService.getContextGraphFilesFromFileSelections(
											this.composerDataService.selectedComposerId,
										);
									} catch (ki) {
										(gi.error = ki), (gi.hasError = !0);
									} finally {
										ps(gi);
									}
								},
							}),
						),
						this.D(
							this.reactiveStorageService.onChangeEffectManuallyDisposed({
								deps: [
									() => {
										const gi =
											this.composerDataService.allComposersData
												.selectedChatHandle;
										return gi ? gi.data.context.fileSelections : [];
									},
								],
								onChange: () => {
									const gi = { stack: [], error: void 0, hasError: !1 };
									try {
										const ki = ms(
											gi,
											(0, De.span)(
												"ComposerService.onChangeEffectManuallyDisposed",
											),
											!1,
										);
										this.composerDataService.getContextGraphFilesFromFileSelections(
											this.composerDataService.selectedChatId,
										);
									} catch (ki) {
										(gi.error = ki), (gi.hasError = !0);
									} finally {
										ps(gi);
									}
								},
							}),
						);
					const _e = (gi) => {
						const ki = [];
						for (const Pi of Se.$Xgc)
							ki.push(() => {
								const Hi = this.composerDataService.getComposerData(
									gi
										? this.composerDataService.selectedChatId
										: this.composerDataService.selectedComposerId,
								);
								return Hi ? Hi.context[Pi] : [];
							});
						return ki;
					};
					this.D(
						this.reactiveStorageService.onChangeEffectManuallyDisposed({
							deps: _e(),
							onChange: () => {
								const gi = { stack: [], error: void 0, hasError: !1 };
								try {
									const ki = ms(
										gi,
										(0, De.span)(
											"ComposerService.onChangeEffectManuallyDisposed",
										),
										!1,
									);
									if (
										this._ignoreChangesToContext.has(
											this.composerDataService.selectedComposerId,
										)
									)
										this._ignoreChangesToContext.delete(
											this.composerDataService.selectedComposerId,
										);
									else
										try {
											this.updateComposer(
												this.composerDataService.selectedComposerId,
												{ hasChangedContext: !0 },
											);
										} catch {}
								} catch (ki) {
									(gi.error = ki), (gi.hasError = !0);
								} finally {
									ps(gi);
								}
							},
						}),
					),
						this.D(
							this.reactiveStorageService.onChangeEffectManuallyDisposed({
								deps: _e(!0),
								onChange: () => {
									const gi = { stack: [], error: void 0, hasError: !1 };
									try {
										const ki = ms(
											gi,
											(0, De.span)(
												"ComposerService.onChangeEffectManuallyDisposed",
											),
											!1,
										);
										if (
											this._ignoreChangesToContext.has(
												this.composerDataService.selectedChatId,
											)
										)
											this._ignoreChangesToContext.delete(
												this.composerDataService.selectedChatId,
											);
										else
											try {
												this.updateComposer(
													this.composerDataService.selectedChatId,
													{ hasChangedContext: !0 },
												);
											} catch {}
									} catch (ki) {
										(gi.error = ki), (gi.hasError = !0);
									} finally {
										ps(gi);
									}
								},
							}),
						),
						We.set(this.isComposerEnabled()),
						this.selectedContextService.addOnCursorIgnoreLoadedCallback(() => {
							this.refreshReactiveContextItemAtStartup().catch(console.error);
						}),
						this.D(
							this.reactiveStorageService.onChangeEffectManuallyDisposed({
								deps: [
									() =>
										this.reactiveStorageService.applicationUserPersistentStorage
											.aiSettings.composerModel,
								],
								onChange: () => {
									this.handleUserSwitchedModel(
										this.composerDataService.selectedComposerId,
									);
								},
							}),
						),
						this.D(
							this.reactiveStorageService.onChangeEffectManuallyDisposed({
								deps: [() => this.composerDataService.selectedComposerId],
								onChange: ({ deps: gi, prevDeps: ki }) => {
									const Pi = gi?.[0],
										Hi = ki?.[0];
									Pi !== Hi && Hi && this.close(Hi, { skipHiding: !0 });
								},
							}),
						),
						this.D(
							this.composerViewsService.onDidChangeChatPaneVisibility((gi) => {
								this.reactiveStorageService.setNonPersistentStorage({
									shouldShowInsertChatWidget: gi,
								});
							}),
						),
						this.composerDataService.setOnInlineDiffsLoadedHook(
							this.onInlineDiffsLoadedHook.bind(this),
						);
					let Si = !0;
					this.aiFeatureStatusService.maybeRefreshFeatureStatus(
						"autoSaveAgenticEdits",
					);
				}
				get applicationComposerSettings() {
					return this.reactiveStorageService.applicationUserPersistentStorage
						.composerState;
				}
				shouldCache(Ye, ze) {
					const Xe = this.composerDataService.getComposerFromIdOrHandle(Ye);
					if (!Xe)
						throw new Error(
							"[composer] shouldCache called for non-existent composer",
						);
					if (ze !== void 0) {
						const It = this.composerDataService.getComposerCodeBlock(
							Ye,
							ze.uri,
							ze.version,
						);
						if (It && It.isNotApplied) return !0;
					}
					return this.composerDataService.getComposerForceMode(Ye) === "chat"
						? !1
						: Xe.composerId !== this.composerDataService.selectedComposerId ||
								this.isBackground(Xe.composerId);
				}
				updateComposer(Ye, ze) {
					this.composerDataService.updateComposerData(Ye, ze);
				}
				getComposer(Ye) {
					const ze = this.composerDataService.getComposerData(Ye);
					if (!ze) {
						console.error(
							"[composer] getComposer called for non-existent composer",
							Ye,
						);
						return;
					}
					return ze;
				}
				getComposerEditingState(Ye) {
					let ze = this._composerEditingStates.get(Ye);
					return (
						ze ||
							((ze = {
								fastApplyQueue: {},
								fastApplyRunningMap: {},
								codeEditorsMap: {},
							}),
							this._composerEditingStates.set(Ye, ze)),
						ze
					);
				}
				getApplyingDiffsState(Ye) {
					let ze = this._composerApplyingDiffsState.get(Ye);
					return (
						ze ||
							((ze = {
								isReactivatingApplyingDiffs: {},
								applyingDiffsBacklogLines: {},
							}),
							this._composerApplyingDiffsState.set(Ye, ze)),
						ze
					);
				}
				resetComposerEditingState(Ye) {
					this._composerEditingStates.delete(Ye);
				}
				unregisterCachedCodeBlock(Ye, ze, Xe) {
					this.composerDataService.updateComposerCodeBlock(Ye, ze, Xe, {
						isCached: !1,
						isNotApplied: !1,
					});
					const It = typeof Ye == "string" ? Ye : Ye.data.composerId,
						xt = (this._uriToCachedCodeBlocks.get(ze.toString()) ?? []).filter(
							(Gt) => Gt.composerId !== It || Gt.version !== Xe,
						),
						Bt = (
							this._uriToCachedCodeBlocksQueue.get(ze.toString()) ?? []
						).filter((Gt) => Gt.composerId !== It || Gt.version !== Xe);
					if (xt.length === 0 && Bt.length === 0) {
						this._fileWatchers.get(ze.toString())?.dispose(),
							this._fileWatchers.delete(ze.toString()),
							this._uriToCachedCodeBlocks.delete(ze.toString()),
							this._uriToCachedCodeBlocksQueue.delete(ze.toString());
						return;
					}
					this._uriToCachedCodeBlocks.set(ze.toString(), xt),
						this._uriToCachedCodeBlocksQueue.set(ze.toString(), Bt);
				}
				unregisterAllCachedCodeBlocks(Ye) {
					const ze = this.composerDataService.getAllCachedCodeBlocks(Ye);
					for (const Xe of ze)
						this.unregisterCachedCodeBlock(Ye, Xe.uri, Xe.version);
				}
				registerCachedCodeBlock(Ye, ze, Xe, It) {
					if (
						(this.composerDataService.updateComposerCodeBlock(Ye, ze, Xe, {
							isCached: !0,
						}),
						!this._fileWatchers.has(ze.toString()))
					) {
						const Lt = this.fileService.watch(ze);
						this._fileWatchers.set(ze.toString(), Lt);
					}
					if (It) {
						const Lt =
							this._uriToCachedCodeBlocksQueue.get(ze.toString()) ?? [];
						this._uriToCachedCodeBlocksQueue.set(ze.toString(), [
							...Lt.filter((Bt) => Bt.composerId !== Ye || Bt.version !== Xe),
							{ composerId: Ye, version: Xe },
						]);
						const Vt = (
							this._uriToCachedCodeBlocks.get(ze.toString()) ?? []
						).filter((Bt) => Bt.composerId !== Ye || Bt.version !== Xe);
						this._uriToCachedCodeBlocks.set(ze.toString(), Vt);
					} else {
						const Lt = this._uriToCachedCodeBlocks.get(ze.toString()) ?? [];
						this._uriToCachedCodeBlocks.set(ze.toString(), [
							...Lt.filter((xt) => xt.composerId !== Ye || xt.version !== Xe),
							{ composerId: Ye, version: Xe },
						]);
					}
				}
				markUriAsOutdated(Ye, ze) {
					if (
						!this._uriToCachedCodeBlocks.has(Ye.toString()) ||
						!this._fileWatchers.has(Ye.toString())
					)
						return;
					const Xe = this._uriToCachedCodeBlocks.get(Ye.toString()) ?? [];
					for (const { composerId: It, version: Lt } of Xe) {
						const xt = this.composerDataService.getComposerCodeBlock(
							It,
							Ye,
							Lt,
						);
						xt && xt.isNotApplied
							? (this.composerDataService.updateComposerDataSetStore(It, (Vt) =>
									Vt(
										"codeBlockData",
										Ye.toString(),
										(Bt) => Bt.version === Lt,
										"originalModelDiffWrtV0",
										void 0,
									),
								),
								this.composerDataService.updateComposerDataSetStore(It, (Vt) =>
									Vt(
										"codeBlockData",
										Ye.toString(),
										(Bt) => Bt.version === Lt,
										"newModelDiffWrtV0",
										void 0,
									),
								))
							: (this.composerDataService.setCodeBlockStatus(
									It,
									Ye,
									Lt,
									"outdated",
								),
								this.composerDataService.updateComposerCodeBlock(It, Ye, Lt, {
									isCached: !1,
								}));
					}
					ze ||
						(this._fileWatchers.get(Ye.toString())?.dispose(),
						this._fileWatchers.delete(Ye.toString())),
						this._uriToCachedCodeBlocks.delete(Ye.toString()),
						this._uriToCachedCodeBlocksQueue.delete(Ye.toString());
				}
				isNewFile(Ye, ze) {
					return !!this.getComposer(Ye)?.newlyCreatedFiles.some(
						(It) => It.uri.toString() === ze.toString(),
					);
				}
				async createNewFileAndMaybeFolder(Ye, ze, Xe) {
					if (!this.getComposer(Ye) || !Ye) return [];
					const Lt = await this.fileService.exists(ze),
						xt = [];
					if (!Lt) {
						let Vt = ze.fsPath;
						for (; Vt.length > 0; ) {
							const Mt = Vt.split("/").slice(0, -1).join("/");
							if (await this.fileService.exists(l.URI.file(Mt))) break;
							xt.push({ uri: l.URI.file(Mt) }), (Vt = Mt);
						}
						await this.fileService.createFile(ze, n.$Te.fromString(" "), {
							overwrite: Xe,
						});
						const Bt = 10;
						let Gt = 0;
						for (; !(await this.fileService.exists(ze)) && Gt < Bt; )
							await new Promise((Mt) => setTimeout(Mt, Nt)), Gt++;
						if (Gt === Bt)
							return (
								console.error(
									`[composer] Failed to create file ${ze.toString()} after ${Bt} attempts`,
								),
								[]
							);
					}
					return xt;
				}
				async checkToCreateNewFile(Ye, ze, Xe) {
					const It = this.composerDataService.getComposerFromIdOrHandle(Ye);
					if (!It || !Ye) return [];
					if (await this.fileService.exists(ze)) return [];
					const xt = await this.createNewFileAndMaybeFolder(Ye, ze, Xe),
						Vt = [],
						Bt = new Set(
							It?.newlyCreatedFolders.map((Ut) => Ut.uri.toString()) ?? [],
						);
					for (const Ut of xt) Bt.has(Ut.uri.toString()) || Vt.push(Ut);
					const Mt = !It?.newlyCreatedFiles?.some(
						(Ut) => Ut.uri.toString() === ze.toString(),
					)
						? [{ uri: ze }]
						: [];
					return (
						this.updateComposer(Ye, {
							newlyCreatedFiles: [...(It?.newlyCreatedFiles ?? []), ...Mt],
							newlyCreatedFolders: [...(It?.newlyCreatedFolders ?? []), ...Vt],
						}),
						xt
					);
				}
				async deleteFolder(Ye) {
					if (await this.fileService.exists(Ye))
						try {
							await this.fileService.del(Ye, { recursive: !0 });
						} catch (ze) {
							console.error(`Error deleting folder ${Ye.toString()}:`, ze);
						}
				}
				async deleteFile(Ye) {
					const ze = this.inlineDiffService.diffInfos.filter(
						(Xe) => Xe.uri.toString() === Ye.toString(),
					);
					for (const Xe of ze) this.inlineDiffService.remove(Xe.diffId);
					try {
						if (await this.fileService.exists(Ye)) {
							const It = await this.textModelService.createModelReference(Ye);
							It.object.textEditorModel.setValue(" ");
							const Lt = this.filesConfigurationService.disableAutoSave(Ye);
							await this.saveFile(Ye, {
								force: !0,
								waitForEditorToOpen: !0,
								overwrite: !0,
							}),
								Lt.dispose(),
								It.dispose(),
								await this.fileService.del(Ye, { recursive: !0 });
						}
						const Xe = this.editorService.findEditors(Ye);
						if (Xe.length > 0)
							for (const It of Xe)
								await this.editorService.revert(It, { force: !0 }),
									await this.editorService.closeEditor(It);
					} catch (Xe) {
						console.error(`Error deleting file ${Ye.toString()}:`, Xe);
					}
				}
				async deleteNewFileAndMaybeFolder(Ye, ze) {
					const Xe = this.getComposer(Ye);
					if (
						!Xe ||
						!Ye ||
						!Xe.newlyCreatedFiles?.find(
							(Lt) => Lt.uri.toString() === ze.toString(),
						)
					)
						return !1;
					try {
						await this.deleteFile(ze);
						const Lt =
							Xe.newlyCreatedFiles?.filter(
								(Bt) => Bt.uri.toString() !== ze.toString(),
							) ?? [];
						let xt = (0, i.unwrap)(Xe.newlyCreatedFolders) ?? [];
						const Vt = xt.filter((Bt) =>
							ze.toString().startsWith(Bt.uri.toString()),
						);
						for (const Bt of Vt)
							(
								(
									await this.fileService.resolve(Bt.uri, {
										resolveMetadata: !0,
									})
								).children ?? []
							).filter((Ut) => !Ut.isDirectory).length === 0 &&
								(await this.fileService.del(Bt.uri, {
									recursive: !0,
									useTrash: !0,
								}),
								(xt = xt.filter(
									(Ut) => Ut.uri.toString() !== Bt.uri.toString(),
								)));
						return (
							this.updateComposer(Ye, {
								newlyCreatedFiles: Lt,
								newlyCreatedFolders: xt,
							}),
							!0
						);
					} catch (Lt) {
						return (
							console.error(`Error deleting file ${ze.toString()}:`, Lt), !1
						);
					}
				}
				removeFileFromNewlyCreatedFilesAndFolders(Ye, ze) {
					const Xe = this.getComposer(Ye);
					!Xe ||
						!Ye ||
						this.updateComposer(Ye, {
							newlyCreatedFiles:
								Xe.newlyCreatedFiles?.filter(
									(It) => It.uri.toString() !== ze.toString(),
								) ?? [],
							newlyCreatedFolders:
								Xe.newlyCreatedFolders?.filter(
									(It) => !ze.toString().startsWith(It.uri.toString()),
								) ?? [],
						});
				}
				async saveFiles(Ye, ze) {
					await Promise.allSettled(
						Ye.map(async (Xe) => {
							await this.saveFile(Xe, ze);
						}),
					);
				}
				async saveFile(Ye, ze) {
					if (ze?.overwrite)
						return !!(await this.textFileService.save(Ye, {
							reason: J.SaveReason.EXPLICIT,
							skipSaveParticipants: ze?.skipSaveParticipants ?? !1,
							force: ze?.force ?? !1,
							ignoreModifiedSince: !0,
						}));
					let Xe = this.editorService.findEditors(Ye);
					if (
						(Xe.length === 0 &&
							ze?.waitForEditorToOpen &&
							(await new Promise((Lt) => {
								setTimeout(Lt, 1e3),
									this.editorService.onWillOpenEditor((xt) => {
										xt.editor.resource?.toString() === Ye.toString() &&
											Lt(void 0);
									});
							})),
						(Xe = this.editorService.findEditors(Ye)),
						Xe.length === 0)
					) {
						const Lt = this.editorService.editors
							.filter(
								(xt) =>
									xt instanceof nt.$RIb &&
									xt.preferredResource.toString() === Ye.toString(),
							)
							.map((xt) => xt.resource)
							.filter((xt) => xt !== void 0);
						Lt.length > 0 && (Xe = this.editorService.findEditors(Lt[0]));
					}
					return Xe.length === 0
						? !!(await this.textFileService.save(Ye, {
								reason: J.SaveReason.EXPLICIT,
								skipSaveParticipants: ze?.skipSaveParticipants ?? !1,
								force: ze?.force ?? !1,
								showPrettyDialogOnError: !0,
							}))
						: (
								await this.editorService.save(Xe, {
									reason: J.SaveReason.EXPLICIT,
									skipSaveParticipants: ze?.skipSaveParticipants ?? !1,
									force: ze?.force ?? !1,
									showPrettyDialogOnError: !0,
								})
							).success;
				}
				cleanUpComposer(Ye, ze) {
					const Xe = this.getComposer(Ye);
					if (!Xe) {
						console.error("[composer] no composer found for id", Ye);
						return;
					}
					this.cancelAll(Ye, {
						skipRejectDiffs: ze?.skipRejectDiffs,
						rejectSilently: ze?.rejectSilently,
					}),
						this.resetComposerEditingState(Ye),
						this._composerApplyingDiffsState.set(Ye, {
							isReactivatingApplyingDiffs: {},
							applyingDiffsBacklogLines: {},
						}),
						this.unregisterAllCachedCodeBlocks(Ye),
						ze?.skipCapabilitiesDisposal ||
							Xe.capabilities.forEach((It) => It.dispose());
				}
				async resetComposer(Ye, ze, Xe) {
					const It = this.getComposer(Ye);
					if (
						!It ||
						(this.shouldShowAcceptRejectAll(Ye) &&
							(await this.prettyDialogService.openDialog({
								title: "Are you sure to reset?",
								message:
									"You have changes that have not been accepted or rejected. Resetting will revert these changes.",
								cancelButton: { id: "cancel", label: "Cancel" },
								primaryButton: { id: "reset", label: "Reset" },
							})) !== "reset")
					)
						return;
					const xt = !this.isComposerContextUntouched(Ye),
						Vt = It.text,
						Bt = It.richText,
						Gt = ze?.text ? ze.text : xt ? Vt : "",
						Mt = ze?.richText ? ze.richText : xt ? Bt : "",
						Ut = this.composerDataService.getComposerForceMode(Ye),
						ei = (0, Z.getComposerDataToSave)(It, !1),
						mi = await this.composerUtilsService.createCurrentCheckpoint(Ye);
					this.cleanUpComposer(Ye);
					let ii = [],
						Dt = (0, Se.$2gc)();
					if (xt) {
						for (const si of Se.$Xgc)
							!It.context[si] ||
								!It.context.mentions[si] ||
								((0, Se.$Ygc)(si)
									? (Dt[si] = It.context[si].filter((Zt) => {
											const ci = (0, Se.$Zgc)(si, Zt);
											return (
												It.context.mentions[si] &&
												It.context.mentions[si][ci]?.length > 0
											);
										}))
									: It.context.mentions[si]?.length > 0 &&
										(Dt[si] = It.context[si]));
						Dt.mentions = (0, Se.$3gc)();
						for (const si of Se.$Xgc)
							if ((0, Se.$Ygc)(si))
								for (const Zt of Dt[si]) {
									const ci = (0, Se.$Zgc)(si, Zt);
									Dt.mentions[si] || (Dt.mentions[si] = {}),
										(Dt.mentions[si][ci] = It.context.mentions[si]?.[ci] || []);
								}
							else Dt.mentions[si] = It.context.mentions[si];
					}
					ii = (0, _.getComposerCapabilities)(
						this.instantiationService,
						this.reactiveStorageService,
						Ye,
						[],
					);
					const Jt = {
						...(0, Q.createEmptyComposer)(),
						forceMode: Ut,
						composerId: It.composerId ?? (0, y.$9g)(),
						createdAt: It.createdAt ?? Date.now(),
						richText: Mt,
						text: Gt,
						hasChangedContext: !1,
						context: Dt,
						backgroundInfo: It.backgroundInfo,
						capabilities: ii,
						isAgentic: this.getIsNewConversationAgentic(Ut),
						...ze,
					};
					console.log("[composer] new state", Jt, ze),
						this.undoRedoService.removeElements(
							this.getUndoRedoUri(Jt.composerId),
						),
						this.undoRedoService.pushElement(
							new v.$x7b(
								"Reset Composer",
								"reset-composer",
								this.getUndoRedoUri(Jt.composerId),
								() => {
									this.cleanUpComposer(Jt.composerId, {
										skipCapabilitiesDisposal: !0,
									}),
										ei.tabs[0].type !== "extra" &&
											(ei.tabs = [{ type: "extra" }, ...ei.tabs]),
										(ei.selectedTabIndex = ei.tabs.findIndex(
											(ci) => ci.type === "composer",
										));
									const { capabilities: si, ...Zt } = ei;
									this.updateComposer(Jt.composerId, Zt),
										mi !== void 0 &&
											this.checkoutToCheckpoint(Jt.composerId, mi);
								},
								() => {
									this._ignoreChangesToContext.add(Jt.composerId),
										this.updateComposer(Jt.composerId, Jt),
										Xe || this.refreshReactiveContextItem(Jt.composerId),
										this._onDidReset.fire({ composerId: Jt.composerId });
								},
							),
						),
						this.composerViewsService.isPrevBubbleFocused(Jt.composerId) &&
							this.focus(Jt.composerId),
						this._ignoreChangesToContext.add(Jt.composerId),
						this.updateComposer(Jt.composerId, Jt),
						Xe || this.refreshReactiveContextItem(Jt.composerId),
						this._onDidReset.fire({ composerId: Jt.composerId });
				}
				acceptDiff(Ye, ze) {
					this.analyticsService.trackEvent("composer.accept_diff", {
						source: "composer",
					});
					const Xe = this.composerDataService.getInlineDiff(Ye, ze);
					if (!Xe) {
						console.error("[composer] no diff id for uri", ze);
						return;
					}
					this.inlineDiffService.acceptDiff(Xe.id);
				}
				rejectDiff(Ye, ze, Xe) {
					this.analyticsService.trackEvent("composer.reject_diff", {
						source: "composer",
					});
					const It = this.composerDataService.getInlineDiff(Ye, ze);
					if (!It) {
						console.error("[composer] no diff id for uri", ze);
						return;
					}
					this.inlineDiffService.rejectDiff(It.id, {
						dontBreakConsolidation: Xe?.dontBreakConsolidation,
						rejectSilently: Xe?.rejectSilently,
					}),
						this.inlineDiffService.remove(It.id);
				}
				async acceptCached(Ye, ze, Xe) {
					if (!this.composerDataService.getComposerData(Ye)) return;
					const Lt = this.composerDataService.getComposerCodeBlock(Ye, ze, Xe);
					if (!Lt || Lt.isCached !== !0 || !Lt.newModelDiffWrtV0) {
						console.error("[composer] no cached code block for uri", ze);
						return;
					}
					this.unregisterCachedCodeBlock(Ye, ze, Lt.version);
					const xt = this.composerUtilsService.getCodeBlockNewModelLines(
						Ye,
						ze,
						Lt.version,
					);
					if (!xt) {
						console.error("[composer] no new model lines for uri", ze);
						return;
					}
					await this.inlineDiffService.applyNewModelLinesToFile({
						uri: ze,
						newModelLines: xt,
					}),
						this.composerDataService.setCodeBlockStatus(
							Ye,
							ze,
							Lt.version,
							"accepted",
						);
				}
				rejectCached(Ye, ze) {
					const Xe = this.composerDataService.getComposerData(Ye);
					if (!Xe) return;
					const It = Xe.codeBlockData[ze.toString()].find(
						(Lt) => Lt.isCached === !0,
					);
					if (!It || It.isCached !== !0) {
						console.error("[composer] no cached code block for uri", ze);
						return;
					}
					this.unregisterCachedCodeBlock(Ye, ze, It.version),
						this.composerDataService.setCodeBlockStatus(
							Ye,
							ze,
							It.version,
							"rejected",
						);
				}
				async accept(Ye, ze, Xe) {
					this.shouldCache(Ye)
						? this.acceptCached(Ye, ze, Xe)
						: this.acceptDiff(Ye, ze);
				}
				reject(Ye, ze, Xe) {
					this.shouldCache(Ye)
						? this.rejectCached(Ye, ze)
						: this.rejectDiff(Ye, ze);
				}
				async acceptAllCached(Ye) {
					const ze = this.composerDataService.getComposerData(Ye);
					if (!ze) return;
					const Xe = this.composerDataService.getAllCachedCodeBlocks(
							ze.composerId,
						),
						It = new Map();
					for (const Lt of Xe) It.set(Lt.uri, Lt.version);
					for (const [Lt, xt] of It) this.acceptCached(Ye, Lt, xt);
				}
				rejectAllCached(Ye) {
					const ze = this.composerDataService.getAllCachedCodeBlocks(Ye);
					this.unregisterAllCachedCodeBlocks(Ye);
					for (const Xe of ze)
						this.composerDataService.setCodeBlockStatus(
							Ye,
							Xe.uri,
							Xe.version,
							"rejected",
						);
				}
				acceptAllDiffs(Ye) {
					const ze = this.composerDataService.getAllInlineDiffs(Ye);
					for (const Xe of ze) this.acceptDiff(Ye, Xe.uri);
				}
				rejectAllDiffs(Ye, ze) {
					const Xe = this.composerDataService.getComposerData(Ye);
					if (!Xe) return;
					const It = this.getComposerEditingState(Ye);
					for (const xt of Object.keys(It.fastApplyQueue)) {
						const Vt = l.URI.parse(xt),
							Bt = It.fastApplyQueue[xt];
						if (!(xt in Xe.codeBlockData)) {
							delete It.fastApplyQueue[xt];
							continue;
						}
						const Gt = Xe.codeBlockData[Vt.toString()].filter(
							(Mt) => Mt.status === "apply_pending",
						);
						for (const Mt of Gt)
							this.composerDataService.setCodeBlockStatus(
								Ye,
								Mt.uri,
								Mt.version,
								"rejected",
							);
						Bt.clear(), delete It.fastApplyQueue[xt];
					}
					const Lt = this.composerDataService.getAllInlineDiffs(Ye);
					for (const xt of Lt)
						this.rejectDiff(Ye, xt.uri, { rejectSilently: ze?.rejectSilently });
					(It.fastApplyQueue = {}), (It.fastApplyRunningMap = {});
				}
				async acceptAll(Ye) {
					this.analyticsService.trackEvent("composer.accept_all"),
						this.shouldCache(Ye)
							? await this.acceptAllCached(Ye)
							: this.acceptAllDiffs(Ye);
				}
				rejectAll(Ye, ze) {
					this.analyticsService.trackEvent("composer.reject_all"),
						this.shouldCache(Ye)
							? this.rejectAllCached(Ye)
							: this.rejectAllDiffs(Ye, ze);
				}
				shouldShowAcceptRejectAll(Ye) {
					const ze = this.composerDataService.getComposerData(Ye);
					if (!ze) return !1;
					const Xe = this.composerDataService.getAllInlineDiffs(Ye);
					return this.shouldCache(ze.composerId)
						? this.composerDataService
								.getAllCachedCodeBlocks(ze.composerId)
								.some(
									(Lt) =>
										Lt.status === "cancelled" || Lt.status === "completed",
								)
						: Xe.length > 0;
				}
				shouldShowAcceptReject(Ye, ze, Xe) {
					const It = this.composerDataService.getComposerData(Ye);
					if (
						!It ||
						(It.codeBlockData[ze.toString()] ?? []).some(
							(xt) => xt.status === "applying" || xt.status === "generating",
						)
					)
						return !1;
					if (this.shouldCache(It.composerId))
						return (It.codeBlockData[ze.toString()] ?? []).some(
							(Vt) =>
								(Vt.status === "cancelled" || Vt.status === "completed") &&
								Vt.isCached === !0,
						);
					{
						const xt = this.composerDataService.getInlineDiff(
							It.composerId,
							ze,
						);
						return xt
							? Xe !== void 0
								? xt.composerMetadata?.version === Xe
								: !0
							: !1;
					}
				}
				cacheAllDiffs(Ye) {
					const ze = this.composerDataService.getComposerFromIdOrHandle(Ye);
					if (!ze) return;
					const Xe = this.composerDataService.getAllInlineDiffs(ze.composerId);
					for (const It of Xe) {
						if (
							(console.log("[composer] caching diff", It.uri.toString()),
							It.composerMetadata?.version === void 0)
						) {
							console.error(
								"[composer] caching diff with undefined version",
								It.uri.toString(),
							);
							continue;
						}
						this.registerCachedCodeBlock(
							ze.composerId,
							It.uri,
							It.composerMetadata.version,
							!0,
						),
							this.rejectDiff(ze.composerId, It.uri, {
								dontBreakConsolidation: !0,
							});
					}
				}
				cancelOrRejectAllCodeBlocks(Ye) {
					const ze = this.getComposerEditingState(Ye);
					(ze.fastApplyQueue = {}), (ze.fastApplyRunningMap = {});
					const Xe = this.composerDataService.getComposerData(Ye);
					if (Xe) {
						for (const It of Object.keys(Xe.codeBlockData ?? {})) {
							const Lt = l.URI.parse(It),
								xt = this.composerDataService.getLatestCodeBlockVersion(Ye, Lt),
								Vt = this.composerDataService.getCodeBlockStatus(Ye, Lt, xt);
							Vt === "applying"
								? this.cancelApply(Ye, Lt)
								: Vt === "generating" &&
									this.composerDataService.updateComposerCodeBlock(Ye, Lt, xt, {
										status: "aborted",
									});
						}
						this.rejectAllDiffs(Ye);
					}
				}
				cancelApply(Ye, ze) {
					const Xe = this.composerDataService.getComposerData(Ye);
					if (!Xe) return !1;
					const It = Xe.codeBlockData[ze.toString()].find(
						(Lt) => Lt.status === "applying",
					);
					return It
						? (It.applyGenerationUUID &&
								this.abortGenerationUUID(It.applyGenerationUUID),
							this.composerDataService.updateComposerCodeBlock(
								Ye,
								ze,
								It.version,
								{ status: "cancelled", applyGenerationUUID: void 0 },
							),
							this.saveFile(ze, { force: !0 }),
							!0)
						: (console.error(
								"[composer] cancelApply called for uri that is not applying",
								ze,
							),
							!1);
				}
				cancelChat(Ye) {
					const ze = this.composerDataService.getComposerData(Ye);
					!ze ||
						ze.status !== "generating" ||
						(this.cancelAllCapabilities(ze.composerId),
						ze.chatGenerationUUID &&
							this.abortGenerationUUID(ze.chatGenerationUUID),
						this.updateComposer(ze.composerId, {
							chatGenerationUUID: void 0,
							status: "aborted",
						}),
						this.composerDataService.setGeneratingCapabilitiesToAborted(
							ze.composerId,
						),
						this.composerDataService.setLoadingToolFormerToolsToCancelled(
							ze.composerId,
						));
				}
				async cancelCurrentStep(Ye) {
					const ze = this.getComposer(Ye);
					if (!ze) return;
					if (
						ze.status === "generating" &&
						!this.composerDataService.getIsBlockingUserDecision(Ye)
					) {
						await this.cancelChat(Ye);
						return;
					}
					const Xe = this.composerDataService.getPendingUserDecisionGroup(Ye);
					if (Xe.length > 0) {
						for (const Lt of Xe) Lt.reject();
						return;
					}
					if (
						this.composerDataService
							.getCodeBlocksOfStatuses(Ye, "applying")
							.filter((Lt) => !Lt.isNotApplied).length > 0
					) {
						await this.cancelAllApplies(Ye);
						return;
					}
					if (this.composerDataService.isRunningCapabilities(Ye)) {
						await this.cancelAllCapabilities(Ye);
						return;
					}
				}
				cancelAllApplies(Ye) {
					const ze = this.composerDataService.getComposerData(Ye);
					if (!ze) return;
					const Xe = this.getComposerEditingState(ze.composerId);
					(Xe.fastApplyQueue = {}), (Xe.fastApplyRunningMap = {});
					const It = this.composerDataService.getCodeBlocksOfStatuses(
						ze.composerId,
						"apply_pending",
					);
					for (const Vt of It)
						this.composerDataService.setCodeBlockStatus(
							ze.composerId,
							Vt.uri,
							Vt.version,
							"cancelled",
						);
					const Lt = this.composerDataService.getCodeBlocksOfStatuses(
							ze.composerId,
							"applying",
						),
						xt = new Set(Lt.map(({ uri: Vt }) => Vt.toString()));
					for (const Vt of xt) this.cancelApply(Ye, l.URI.parse(Vt));
				}
				cancelAllCapabilities(Ye) {
					const ze = this.composerDataService.getComposerData(Ye);
					ze &&
						ze.capabilities.forEach((Xe) => {
							typeof Xe.cancel == "function" && Xe.cancel();
						});
				}
				cancelAll(Ye, ze) {
					const Xe = this.composerDataService.getComposerData(Ye);
					Xe &&
						(this.cancelChat(Xe.composerId),
						this.cancelAllApplies(Xe.composerId),
						this.cancelAllCapabilities(Xe.composerId),
						ze?.skipRejectDiffs ||
							this.rejectAllDiffs(Xe.composerId, {
								rejectSilently: ze?.rejectSilently,
							}));
				}
				computeCacheKey(Ye) {
					const ze = {
						fileSelections: Ye.context.fileSelections.length,
						selections: Ye.context.selections.length,
						folderSelections: Ye.context.folderSelections?.length ?? 0,
						selectedCommits: Ye.context.selectedCommits?.length ?? 0,
						selectedPullRequests: Ye.context.selectedPullRequests?.length ?? 0,
						selectedDocs: Ye.context.selectedDocs?.length ?? 0,
						externalLinks: Ye.context.externalLinks?.length ?? 0,
						bubbleId: Ye.conversation.at(-1)?.bubbleId,
						modelName:
							this.reactiveStorageService.applicationUserPersistentStorage
								.aiSettings.composerModel,
					};
					return (
						(ze.files = Ye.context.fileSelections.map((Xe) => ({
							uri: Xe.uri.toString(),
							isCurrentFile: Xe.isCurrentFile,
						}))),
						(ze.folders = Ye.context.folderSelections?.map((Xe) => ({
							uri: Xe.relativePath,
						}))),
						JSON.stringify(ze)
					);
				}
				handleUserDidType(Ye) {
					if (
						((async () => {
							try {
								await Promise.resolve(),
									await this.aiFeatureStatusService.maybeRefreshFeatureStatus(
										"cacheComposerPrompts",
									);
								const Gt = this.aiFeatureStatusService.getCachedFeatureStatus(
									"cacheComposerPrompts",
								);
								Gt !==
									this.reactiveStorageService.applicationUserPersistentStorage
										.cacheComposerPrompts &&
									this.reactiveStorageService.setApplicationUserPersistentStorage(
										"cacheComposerPrompts",
										Gt,
									);
							} catch (Gt) {
								console.error(
									"[composer] error refreshing cacheComposerPrompts",
									Gt,
								);
							}
						})(),
						!this.reactiveStorageService.applicationUserPersistentStorage
							.cacheComposerPrompts)
					)
						return;
					this.maybeInvalidateCache(Ye);
					const ze = this.getComposer(Ye);
					if (!ze) return;
					let Xe = ze.cachingStatus ?? {
						promptIsCached: !1,
						numCharsTypedSincePromptChanged: 0,
					};
					const It =
						ze.conversation.filter(
							(Gt) => Gt.type === d.ConversationMessage_MessageType.AI,
						).length > 0;
					(async () => {
						await this.aiFeatureStatusService.maybeRefreshConfig(
							"composerKeystrokesBeforeCaching",
						),
							await this.aiFeatureStatusService.maybeRefreshConfig(
								"composerKeystrokesBeforeCachingFollowups",
							),
							await this.aiFeatureStatusService.maybeRefreshConfig(
								"composerKeystrokesBeforeCachingFollowupsTurboMode",
							);
					})().catch(() => {});
					const Lt =
							this.aiFeatureStatusService.getCachedConfig(
								"composerKeystrokesBeforeCaching",
							) ?? 3,
						xt =
							this.aiFeatureStatusService.getCachedConfig(
								"composerKeystrokesBeforeCachingFollowups",
							) ?? 25,
						Vt =
							this.aiFeatureStatusService.getCachedConfig(
								"composerKeystrokesBeforeCachingFollowupsTurboMode",
							) ?? 5,
						Bt = It
							? this.reactiveStorageService.applicationUserPersistentStorage
									.turboModeOptions.useTurboMode === !0
								? Vt
								: xt
							: Lt;
					Xe.promptIsCached ||
						(Xe.numCharsTypedSincePromptChanged > Bt
							? (this.maybeSubmitWarmCacheRequest(Ye, ze.text, {
									richText: ze.richText,
								}),
								this.updateComposer(Ye, {
									cachingStatus: {
										promptIsCached: !0,
										promptLastCachedAt: Date.now(),
										cacheKey: this.computeCacheKey(ze),
									},
								}))
							: this.updateComposer(Ye, {
									cachingStatus: {
										...Xe,
										numCharsTypedSincePromptChanged:
											Xe.numCharsTypedSincePromptChanged + 1,
									},
								}));
				}
				handleUserUsedFilePicker(Ye) {
					this.reactiveStorageService.applicationUserPersistentStorage
						.cacheComposerPrompts && this.maybeInvalidateCache(Ye);
				}
				handleUserSwitchedModel(Ye) {
					this.maybeInvalidateCache(Ye);
				}
				maybeInvalidateCache(Ye) {
					const ze = this.getComposer(Ye);
					if (!ze) return;
					const Xe = 5 * 60 * 1e3,
						{ cachingStatus: It } = ze;
					It?.promptIsCached === !0 &&
						(Date.now() - It.promptLastCachedAt > Xe ||
							It.cacheKey !== this.computeCacheKey(ze)) &&
						this.updateComposer(Ye, {
							cachingStatus: {
								promptIsCached: !1,
								numCharsTypedSincePromptChanged: 0,
							},
						});
				}
				async maybeSubmitWarmCacheRequest(Ye, ze, Xe) {
					if (
						!this.reactiveStorageService.applicationUserPersistentStorage
							.cacheComposerPrompts
					)
						return;
					const It = this.composerDataService.getComposerForceMode(Ye);
					if (
						It === "edit" &&
						(this.latestSubmitWarmCacheRequestTimes.push(Date.now()),
						(this.latestSubmitWarmCacheRequestTimes =
							this.latestSubmitWarmCacheRequestTimes.filter(
								(Lt) => Date.now() - Lt < this.recentTimeWindow,
							)),
						this.aiAssertService.assert(
							this.latestSubmitWarmCacheRequestTimes.length <=
								this.maxRecentRequests,
							"Too many recent warm cache requests! Please post in #bug-reports!",
						),
						!(
							this.latestSubmitWarmCacheRequestTimes.length >
							this.maxRecentRequests
						))
					)
						try {
							let Lt = this.getComposer(Ye);
							if (
								!Lt ||
								!!Lt.isAgentic ||
								[...Lt.conversation]
									.reverse()
									.find(
										(ut) => ut.type === d.ConversationMessage_MessageType.HUMAN,
									)?.isAgentic === !0
							)
								return;
							try {
								if (
									await this.composerUtilsService.runCapabilitiesForProcess(
										Ye,
										"start-submit-chat",
										{
											composerId: Ye,
											isCapabilityIteration: !1,
											submitChatProps: { text: ze, extra: Xe },
											isCacheWarming: !0,
										},
									)
								)
									return;
							} catch {
								return;
							}
							let Bt = (0, ke.$6gc)(Lt.context),
								Gt = [...(Lt.userResponsesToSuggestedCodeBlocks ?? [])];
							const Mt = Lt.currentBubbleId;
							let Ut = [...Lt.conversation];
							if (Mt !== void 0) {
								const ut = this.composerDataService.getComposerBubble(Ye, Mt);
								if (!ut) throw Error("[composer] bubble is undefined");
								const Et = ut.context;
								if (!Et) throw Error("[composer] bubble context is undefined");
								(Bt = (0, ke.$6gc)(Et)),
									(Gt = [...(ut.userResponsesToSuggestedCodeBlocks ?? [])]);
								const Tt = (0, ke.$bhc)((0, ke.$6gc)(Et));
							}
							const ei = Bt.fileSelections.map((ut) => (0, ke.$8gc)(ut)),
								mi = Lt.tabs
									.filter((ut) => ut.type === "code")
									.map((ut) => ut.uri.toString()),
								ii = Array.from(new Set([...ei, ...mi])).map((ut) => ({
									uri: l.URI.parse(ut),
									fileName: (0, f.$sc)(ut),
								})),
								Dt = {
									...Bt,
									usesCodebase:
										Bt.usesCodebase !== void 0 && Bt.usesCodebase !== !1
											? Bt
											: void 0,
									useDiffReview: !1,
								},
								Jt = { ...Dt, fileSelections: ii };
							if (Jt.useWeb || Jt.usesCodebase) return;
							const si = await this.aiService.aiClient(),
								Zt = (0, Q.createDefaultConversationMessage)();
							Ut = [
								...Ut,
								{
									...Zt,
									richText: Xe?.richText ?? ze,
									context: Dt,
									text: ze,
									userResponsesToSuggestedCodeBlocks: Gt,
								},
							];
							let ci,
								ri = (0, y.$9g)(),
								[$i, Wt] = this.aiService.registerNewGeneration({
									generationUUID: ri,
									metadata: void 0,
								});
							const tt = new Set([
									...Object.keys(Lt.codeBlockData ?? {}),
									...ii.map((ut) => ut.uri.toString()),
								]),
								at = Array.from(tt).map((ut) => l.URI.parse(ut)),
								pi = this.selectedContextService.getLinterErrorsForFiles(at),
								Li = this.selectedContextService.getCodeChunks(
									{ ...Jt },
									{ worktreePath: Lt.backgroundInfo?.worktreePath },
								),
								Di = this.composerDataService.getRelevantFiles(Ye),
								Ui =
									It === "edit"
										? this.composerUtilsService.getRecentlyViewedFileInfo(Li)
										: () => Promise.resolve([]),
								[Wi, Gi, qi, Oi] = await Promise.all([Li, Di, pi, Ui]),
								yi = Ut.at(-1);
							if (yi === void 0) throw new Error("last message is undefined");
							(Ut = [
								...Ut.slice(0, -1),
								{
									...yi,
									attachedCodeChunks: Wi,
									relevantFiles: [
										...Gi.map((ut) =>
											this.workspaceContextService.asRelativePath(
												l.URI.revive(ut.uri),
											),
										),
									],
									multiFileLinterErrors: [
										...qi.map((ut) => new a.$5s({ ...ut })),
									],
									...Oi,
								},
							]),
								(Lt = this.getComposer(Ye));
							const Ai =
								await this.composerUtilsService.populateCodeChunksInConversation(
									Ut,
								);
							let li = Ai;
							if (
								(It === "edit" &&
									(li =
										await this.composerUtilsService.populateRedDiffsInConversation(
											Ai,
										)),
								!this.getComposer(Ye) || Wt.signal.aborted)
							)
								return;
							const wi =
									await this.composerUtilsService.populateConversationWithExtraContext(
										li,
										Ye,
										{ disableImageRemoval: !0, lastBubbleContext: Jt },
									),
								ai = this.getModelDetails("composer");
							let Ft = await this.aiService.getCurrentFileInfo();
							const Xt = {
								conversation: wi,
								allowLongFileScan: !0,
								explicitContext: await this.aiService.getExplicitContext(),
								documentationIdentifiers: (Dt.selectedDocs ?? []).map(
									(ut) => ut.docId,
								),
								quotes: Jt.quotes ?? [],
								canHandleFilenamesAfterLanguageIds: !0,
								modelDetails: ai,
								useWeb: Jt.useWeb ? "full_search" : void 0,
								externalLinks: Jt.externalLinks ?? [],
								projectContext: ci,
								diffsForCompressingFiles: [],
								compressEdits: !0,
								shouldCache:
									this.reactiveStorageService.applicationUserPersistentStorage
										.cacheComposerPrompts,
								multiFileLinterErrors: qi,
								currentFile: Ft,
								useNewCompressionScheme: !0,
								additionalRankedContext: [],
								fileDiffHistories: [],
							};
							try {
								await this.composerUtilsService.runCapabilitiesForProcess(
									Ye,
									"mutate-request",
									{
										composerId: Ye,
										humanBubbleId: Zt.bubbleId,
										isCapabilityIteration: !1,
										contextUsed: Jt,
										isCacheWarming: !0,
									},
									{ request: Xt },
								);
							} catch {
								return;
							}
							const $t = await si.warmComposerCache(Xt, { signal: Wt.signal });
							ri && this.abortGenerationUUID(ri);
						} catch {
						} finally {
						}
				}
				async debouncedMaybeKeepComposerCacheWarm(Ye, ze, Xe) {
					const It = this.composerDataService.getComposerForceMode(Ye);
					await this.aiFeatureStatusService
						.maybeRefreshConfig("keepCacheWarmTimeout")
						.catch(() => {});
					const Lt =
						this.aiFeatureStatusService.getCachedConfig(
							"keepCacheWarmTimeout",
						) ?? 4.5 * 60 * 1e3;
					let xt;
					const Vt = this.D(
						this.onDidSendRequest(() => {
							xt !== void 0 && clearTimeout(xt), Vt.dispose();
						}),
					);
					xt = setTimeout(async () => {
						if (
							(Vt.dispose(),
							this.composerDataService.getSelectedIdByForceMode(It) !== Ye)
						)
							return;
						(await this.aiService.aiClient())
							.keepComposerCacheWarm({
								request: Xe,
								requestId: ze,
								isComposerVisible: this.composerViewsService.isShowing(Ye),
							})
							.catch((Mt) => {});
					}, Lt);
				}
				shouldSkipCapabilities(Ye, ze) {
					return Ye === "*" || (Ye ?? []).includes(ze);
				}
				async submitChatMaybeAbortCurrent(Ye, ze, Xe) {
					try {
						await this.composerUtilsService.ensureCapabilitiesAreLoaded(Ye);
					} catch (ri) {
						console.error(
							"[composer] error ensuring capabilities are loaded",
							ri,
						);
						return;
					}
					this._onDidSubmitChat.fire({
						composerId: Ye,
						bubbleId: Xe?.bubbleId,
					});
					const It = Date.now(),
						Lt = this.applicationComposerSettings.unification
							? this.applicationComposerSettings.isAutoApplyEnabled
								? "edit"
								: "chat"
							: this.composerDataService.getComposerForceMode(Ye);
					Xe = {
						skipRegisteringCodeBlocks: Xe?.isThought ? !0 : void 0,
						capabilityProcessesToSkip:
							Lt === "chat"
								? [
										"start-submit-chat",
										"before-submit-chat",
										"after-submit-chat",
										"composer-settled",
									]
								: Xe?.capabilityProcessesToSkip,
						...(Xe ?? {}),
					};
					const xt = this.getComposer(Ye);
					if (!xt) {
						console.error("[composer] submitted without state!");
						return;
					}
					const Vt = !!xt.isAgentic;
					if (
						(this.reactiveStorageService.nonPersistentStorage.composerState
							.isTestingHttp2Disabled
							? !0
							: (this.configurationService.getValue(V.$xJ) ?? !1)) &&
						Vt
					) {
						await this.prettyDialogService.openDialog({
							title: "HTTP2 Not Supported",
							message: "Agentic mode is not supported when HTTP2 is disabled",
							primaryButton: { id: "dismiss", label: "Dismiss" },
						}),
							this.cancelChat(Ye),
							console.error("[composer] HTTP2 Not Supported");
						return;
					}
					if (
						!this.shouldSkipCapabilities(
							Xe?.capabilityProcessesToSkip,
							"start-submit-chat",
						)
					)
						try {
							if (
								await this.composerUtilsService.runCapabilitiesForProcess(
									Ye,
									"start-submit-chat",
									{
										composerId: Ye,
										isCapabilityIteration: Xe?.isCapabilityIteration,
										submitChatProps: { text: ze, extra: Xe },
									},
								)
							)
								return;
						} catch (ri) {
							console.error(
								"[composer] error running capabilities for start-submit-chat",
								ri,
							),
								this.updateComposer(Ye, { status: "aborted" });
							return;
						}
					let Gt = new AbortController(),
						Mt = !1,
						Ut = !1,
						ei = !1,
						mi = (0, y.$9g)(),
						ii,
						Dt,
						Jt = (0, Se.$2gc)();
					const si = () => {
							const ri = this.composerDataService.getLastAiBubbleId(Ye);
							ri &&
								(this.composerDataService.updateComposerBubble(Ye, ri, {
									errorDetails: void 0,
								}),
								(this._recentlyResumed = !0),
								this.submitChatMaybeAbortCurrent(Ye, "", {
									...Xe,
									isCapabilityIteration: !0,
									bubbleId: void 0,
									skipAddNewHumanMessage: !0,
								}));
						},
						Zt = () => {
							ii &&
								this.submitChatMaybeAbortCurrent(Ye, ze, {
									...Xe,
									bubbleId: ii.bubbleId,
								});
						},
						ci = (ri) => {
							const $i =
									this.aiErrorService.shouldShowImmediateErrorMessage(ri),
								Wt = this.getComposer(Ye),
								tt = this.composerDataService.getLastAiBubbleId(Ye),
								at =
									Vt &&
									this.composerDataService
										.getLastAiBubbles(Ye)
										.some((pi) => (pi.text.length ?? 0) > 0);
							if ($i && Wt) {
								const pi = (0, Ke.$X6b)(ri);
								this.composerDataService.updateComposerDataSetStore(Ye, (Li) =>
									Li(
										"conversation",
										(Di) => Di.bubbleId === tt,
										"errorDetails",
										{
											generationUUID: mi,
											error: pi,
											message: ri?.rawMessage,
											rerun: Zt,
											resume: at ? si : void 0,
										},
									),
								);
							}
						};
					try {
						this.updateComposer(Ye, { status: "generating" }),
							this.composerDataService.clearActionButtons(Ye),
							(Xe.bubbleId = Xe?.bubbleId ?? xt.currentBubbleId);
						let ri = (0, ke.$6gc)(xt.context),
							$i = [...(xt.userResponsesToSuggestedCodeBlocks ?? [])];
						if (Xe?.bubbleId !== void 0) {
							const fi = this.composerDataService.getComposerBubble(
								Ye,
								Xe.bubbleId,
							);
							if (fi && fi.context) {
								const Ti = fi.context;
								(ri = (0, ke.$6gc)(Ti)),
									($i = [...(fi.userResponsesToSuggestedCodeBlocks ?? [])]);
								const wt = (0, ke.$bhc)((0, ke.$6gc)(Ti));
								this.updateComposer(Ye, { context: wt });
							}
						}
						this.composerDataService.updateComposerDataSetStore(Ye, (fi) =>
							fi("currentBubbleId", void 0),
						),
							this.composerDataService.updateComposerDataSetStore(Ye, (fi) =>
								fi("latestCheckpoint", void 0),
							),
							this.undoRedoService.setElementsValidFlag(
								this.getUndoRedoUri(Ye),
								!1,
								(fi) => fi.code === "reset-composer",
							);
						const Wt = {
							...ri,
							usesCodebase:
								ri.usesCodebase !== void 0 && ri.usesCodebase !== !1
									? ri
									: Xe?.usesCodebase,
							useDiffReview: ri.useDiffReview ?? Xe?.useDiffReview,
						};
						if (!Xe?.isCapabilityIteration) {
							if ((this.removeNonPersistentContext(Ye), Lt === "chat")) {
								this.removeAllListContext({
									composerId: Ye,
									contextType: "fileSelections",
									addToUndoRedo: !1,
								});
								const fi = this.getCurrentFile();
								fi !== void 0 &&
									ri.fileSelections.some(
										(Ti) =>
											(0, Se.$Zgc)("fileSelections", Ti) ===
											(0, Se.$Zgc)("fileSelections", fi),
									) &&
									this.resetContext(Ye);
							}
							this._onShouldClearLexical.fire({
								composerId: Ye,
								bubbleId: Xe?.bubbleId,
							}),
								this.composerViewsService.focus(Ye, !0);
						}
						const tt = (0, _.getFilteredAndSortedCapabilities)(xt.capabilities);
						if (tt.length === 0 && Xe?.isCapabilityIteration) {
							console.error(
								"[composer] submitted capability iteration without capabilities!",
							);
							return;
						}
						const at = await this.aiService.aiClient();
						let pi,
							Li = !1;
						if (Xe?.bubbleId) {
							const fi = Xe.bubbleId ?? xt.currentBubbleId,
								Ti = this.composerDataService.getComposerBubble(Ye, fi),
								wt = xt.conversation.findIndex((Ji) => Ji.bubbleId === fi);
							if (!Ti) throw Error("[composer] current bubble is undefined");
							let We;
							Ti.type === d.ConversationMessage_MessageType.HUMAN
								? ((We =
										wt !== -1 ? xt.conversation[wt + 1]?.bubbleId : void 0),
									(Li = !0))
								: (We = fi);
							const _e = xt.conversation.slice(wt + 1),
								Si = xt.conversation.slice(0, wt),
								gi = (Ji) => {
									const cn = this.composerDataService.getComposerCapability(
										Ye,
										m.ComposerCapabilityRequest_ComposerCapabilityType
											.TOOL_FORMER,
									);
									if (!cn) return !1;
									const un = cn.getBubbleData(Ji.bubbleId);
									return un
										? un.tool === Re.ClientSideToolV2.RUN_TERMINAL_COMMAND_V2
										: !1;
								},
								ki = _e.some(gi),
								Pi = Si.some(gi);
							if (ki) {
								const Ji = tt.find(
									(cn) =>
										cn.type ===
										m.ComposerCapabilityRequest_ComposerCapabilityType
											.TOOL_FORMER,
								);
								Ji && Ji.clearSessionId();
							}
							We && this.composerUtilsService.removeMessagesAfterBubble(Ye, We);
							const Hi =
								await this.composerUtilsService.createCurrentCheckpoint(Ye);
							Li
								? this.composerDataService.updateComposerBubble(Ye, fi, {
										...(0, Q.createDefaultConversationMessage)(),
										richText: Xe?.richText ?? ze,
										text: ze,
										userResponsesToSuggestedCodeBlocks: $i,
										context: Wt,
										checkpoint: Hi,
										isCapabilityIteration: Xe?.isCapabilityIteration,
										existedSubsequentTerminalCommand: ki,
										existedPreviousTerminalCommand: Pi,
									})
								: this.composerDataService.updateComposerBubble(Ye, fi, {
										existedSubsequentTerminalCommand: ki,
										existedPreviousTerminalCommand: Pi,
									});
						}
						const Di = Wt.fileSelections.map((fi) => (0, ke.$8gc)(fi)),
							Ui = Lt === "edit" ? Object.keys(xt.codeBlockData) : [],
							Gi = (
								await Promise.all(
									(
										await Promise.all(
											Array.from(new Set([...Di, ...Ui])).map(async (fi) => ({
												uri: fi,
												exists: await this.fileService.exists(l.URI.parse(fi)),
											})),
										)
									)
										.filter((fi) => fi.exists)
										.map((fi) => fi.uri),
								)
							).map((fi) => ({
								uri: l.URI.parse(fi),
								fileName: (0, f.$sc)(fi),
							}));
						if (
							((Jt = { ...Wt, fileSelections: Gi }),
							(Vt || Jt.usesCodebase) &&
								this.reactiveStorageService.applicationUserPersistentStorage
									.checklistState?.doneCommandEnter !== !0)
						) {
							const fi =
								this.reactiveStorageService.applicationUserPersistentStorage
									.checklistState;
							this.reactiveStorageService.setApplicationUserPersistentStorage(
								"checklistState",
								(Ti) => ({ ...(Ti ?? {}), doneCommandEnter: !0 }),
							);
						}
						if (Xe?.skipAddNewHumanMessage || Li) {
							const fi = this.composerDataService.getLastHumanBubbleId(Ye);
							if (!fi)
								throw new Error(
									"[composer] submitted capability iteration without a last human bubble id!",
								);
							const Ti = this.composerDataService.getComposerBubble(Ye, fi);
							if (!Ti)
								throw new Error(
									"[composer] submitted capability iteration without a last human message!",
								);
							ii = Ti;
						} else {
							const fi =
								await this.composerUtilsService.createCurrentCheckpoint(Ye);
							(ii = {
								...(0, Q.createDefaultConversationMessage)(),
								richText: Xe?.richText ?? ze,
								text: ze,
								userResponsesToSuggestedCodeBlocks: $i,
								context: Wt,
								checkpoint: fi,
								isCapabilityIteration: Xe?.isCapabilityIteration,
							}),
								this.composerDataService.updateComposerDataSetStore(Ye, (Ti) =>
									Ti("conversation", [...xt.conversation, ii]),
								);
						}
						if (
							!this.shouldSkipCapabilities(
								Xe?.capabilityProcessesToSkip,
								"before-submit-chat",
							)
						)
							try {
								if (
									await this.composerUtilsService.runCapabilitiesForProcess(
										Ye,
										"before-submit-chat",
										{
											composerId: Ye,
											humanBubbleId: ii.bubbleId,
											isCapabilityIteration: Xe?.isCapabilityIteration,
											contextUsed: Jt,
											submitChatProps: { text: ze, extra: Xe },
										},
									)
								)
									return;
							} catch (fi) {
								console.error(
									"[composer] error running capabilities for before-submit-chat",
									fi,
								),
									this.handleAbortChat(Ye, ii.bubbleId);
								return;
							}
						if (
							(this.updateComposer(Ye, {
								currentBubbleId: void 0,
								editingBubbleId: void 0,
							}),
							xt.chatGenerationUUID)
						) {
							const fi = xt.chatGenerationUUID;
							this.updateComposer(Ye, { chatGenerationUUID: void 0 }),
								this._skipHandleAbortChat.add(Ye),
								this.abortGenerationUUID(fi),
								await new Promise((Ti) => setTimeout(Ti, 50)),
								this._skipHandleAbortChat.delete(Ye);
						}
						(Gt = this.aiService.registerNewGeneration({
							generationUUID: mi,
							metadata:
								Lt === "chat"
									? {
											type: "chat",
											tabId: xt.composerId,
											bubbleId: ii.bubbleId,
											chatType: "chat",
										}
									: { type: "composer", textDescription: ze },
						})[1]),
							this.updateComposer(Ye, {
								chatGenerationUUID: mi,
								latestChatGenerationUUID: mi,
								generatingBubbleIds: [],
								status: "generating",
								lastUpdatedAt: Date.now(),
							}),
							(Dt = {
								...(0, Q.createDefaultConversationMessage)(),
								codeBlocks: [],
								type: d.ConversationMessage_MessageType.AI,
								text: "",
								isThought: Xe?.isThought,
								isCapabilityIteration: Xe?.isCapabilityIteration,
								timingInfo: {
									clientStartTime: It,
									clientRpcSendTime: Date.now(),
								},
							});
						const qi = this.isUsingAPIKeys(Ye),
							Oi = this.cursorAuthenticationService.membershipType();
						if (
							qi &&
							Lt !== "chat" &&
							Oi === V.MembershipType.FREE &&
							this.cursorAuthenticationService.isAuthenticated()
						) {
							this.updateComposer(Ye, {
								conversation: [...xt.conversation, Dt],
								status: "aborted",
							}),
								this.composerDataService.updateComposerDataSetStore(Ye, (fi) =>
									fi(
										"conversation",
										(Ti) => Ti.bubbleId === Dt.bubbleId,
										"errorDetails",
										{
											generationUUID: mi,
											error: new a.$at({
												error: a.ErrorDetails_Error.UNSPECIFIED,
												details: {
													title: "Cursor Pro Required",
													detail:
														"Composer relies on custom models that cannot be billed to an API key. Please disable API keys and use a Pro or Business subscription.",
												},
											}),
											message:
												"Composer relies on custom models that cannot be billed to an API key. Please disable API keys and use a Pro or Business subscription.",
											rerun: Zt,
										},
									),
								);
							return;
						}
						const yi = new Set([
								...Object.keys(xt.codeBlockData ?? {}),
								...Gi.map((fi) => fi.uri.toString()),
							]),
							Ai = Array.from(yi).map((fi) => l.URI.parse(fi)),
							li =
								Lt === "chat"
									? Promise.resolve([])
									: this.selectedContextService.getLinterErrorsForFiles(Ai),
							Vi = this.selectedContextService.getCodeChunks(
								{ ...Jt, folderSelections: Vt ? [] : Jt.folderSelections },
								{ worktreePath: xt.backgroundInfo?.worktreePath },
							),
							wi = this.composerDataService.getRelevantFiles(Ye),
							_t = this.getEnvironmentInfo(),
							ai =
								Lt === "edit"
									? this.composerUtilsService.getRecentlyViewedFileInfo(Vi)
									: () => Promise.resolve([]),
							[Ft, Xt, $t, ut, Et] = await Promise.all([li, Vi, wi, ai, _t]);
						(pi = Ft),
							this.composerDataService.updateComposerDataSetStore(Ye, (fi) =>
								fi("conversation", (Ti) => Ti.bubbleId === ii.bubbleId, {
									attachedCodeChunks: Lt !== "chat" ? Xt : [],
									relevantFiles: [
										...$t.map((Ti) =>
											this.workspaceContextService.asRelativePath(
												l.URI.revive(Ti.uri),
											),
										),
									],
									multiFileLinterErrors: [
										...pi.map(
											(Ti) => new a.$4s({ ...Ti, fileContents: void 0 }),
										),
									],
									...ut,
									isAgentic: Vt,
								}),
							);
						const Tt = (0, i.unwrap)(xt.conversation).map((fi) => ({ ...fi }));
						if (Lt === "chat") {
							const fi = Tt.findIndex((Ti) => Ti.bubbleId === ii.bubbleId);
							Tt[fi].attachedCodeChunks = Xt;
						}
						const qt =
							await this.composerUtilsService.populateCodeChunksInConversation(
								Tt,
								Lt === "chat",
							);
						let At = qt;
						Lt === "edit" &&
							(At =
								await this.composerUtilsService.populateRedDiffsInConversation(
									qt,
								));
						for (const fi of At)
							this.composerDataService.updateComposerDataSetStore(Ye, (Ti) =>
								Ti(
									"conversation",
									(wt) => wt.bubbleId === fi.bubbleId,
									"diffsForCompressingFiles",
									fi.diffsForCompressingFiles,
								),
							);
						this.updateComposer(Ye, { userResponsesToSuggestedCodeBlocks: [] });
						let Yt = "";
						const ni =
							await this.composerUtilsService.populateConversationWithExtraContext(
								At,
								Ye,
								{
									lastBubbleContext: Jt,
									removeContext: (fi) => this.removeContext(fi),
								},
							);
						await (async () => {
							if (!Gt.signal.aborted)
								try {
									const fi = ni,
										Ti = Lt === "chat" ? "regular-chat" : "composer",
										wt = this.getModelDetails(Ti);
									Xe?.modelOverride && (wt.modelName = Xe.modelOverride);
									let We = await this.aiService.getCurrentFileInfo();
									const _e = await this.repositoryService.getNewRepoInfo();
									let Si;
									_e &&
										this.repositoryService.isIndexedMainLocalRepository() &&
										(Si = new u.$mv(_e));
									const gi = [...fi]
											.reverse()
											.map((Nn) => Nn.conversationSummary)
											.filter((Nn) => Nn !== void 0)[0],
										ki = gi?.clientShouldStartSendingFromInclusiveBubbleId;
									let Pi = ki
										? fi.findIndex(
												(Nn) => (Nn.serverBubbleId ?? Nn.bubbleId) === ki,
											)
										: 0;
									Pi === -1 && (Pi = 0);
									const Hi = fi.slice(Pi);
									if (Lt === "chat") {
										Jt.fileSelections.some(
											(Fn) =>
												this.workspaceContextService.asRelativePath(
													l.URI.revive(Fn.uri),
												) === We?.relativeWorkspacePath,
										) || (We = void 0);
										const Nn = new Map();
										Hi.forEach((Fn, Gn) => {
											Fn.type === d.ConversationMessage_MessageType.HUMAN &&
												((Fn.attachedCodeChunks = Fn.attachedCodeChunks.filter(
													(Dn) =>
														Dn.startLineNumber !== 1 ||
														Dn.relativeWorkspacePath !==
															We?.relativeWorkspacePath,
												)),
												Fn.attachedCodeChunks.forEach((Dn) => {
													if (Dn.startLineNumber === 1)
														if (!Nn.has(Dn.relativeWorkspacePath))
															Nn.set(Dn.relativeWorkspacePath, {
																firstMentionIndex: Gn,
																lastMentionIndex: Gn,
															});
														else {
															const jn = Nn.get(Dn.relativeWorkspacePath);
															jn &&
																jn.lastMentionIndex < Gn &&
																(jn.lastMentionIndex = Gn);
														}
												}));
										}),
											Hi.forEach((Fn, Gn) => {
												Fn.type === d.ConversationMessage_MessageType.HUMAN &&
													Fn.attachedCodeChunks.forEach((Dn) => {
														if (Dn.startLineNumber !== 1) return;
														const jn = Nn.get(Dn.relativeWorkspacePath);
														if (
															jn !== void 0 &&
															Gn === jn.firstMentionIndex &&
															jn.firstMentionIndex !== jn.lastMentionIndex
														) {
															const rs = Hi.at(
																jn.lastMentionIndex,
															)?.attachedCodeChunks;
															rs &&
																(Dn.lines =
																	rs.find(
																		(Js) =>
																			Dn.relativeWorkspacePath ===
																			Js.relativeWorkspacePath,
																	)?.lines ?? Dn.lines);
														}
													});
											}),
											Hi.forEach((Fn, Gn) => {
												Fn.type === d.ConversationMessage_MessageType.HUMAN &&
													(Fn.attachedCodeChunks = Fn.attachedCodeChunks.filter(
														(Dn) => {
															if (
																Dn.startLineNumber !== 1 ||
																Dn.intent ===
																	d.ConversationMessage_CodeChunk_Intent
																		.MENTIONED_FILE ||
																(Dn.intent ===
																	d.ConversationMessage_CodeChunk_Intent
																		.COMPOSER_FILE &&
																	Hi.slice(0, Gn)
																		.reverse()
																		.find(
																			(ts) =>
																				ts.type ===
																				d.ConversationMessage_MessageType.HUMAN,
																		)
																		?.attachedCodeChunks.some(
																			(ts) =>
																				ts.relativeWorkspacePath ===
																					ts.relativeWorkspacePath &&
																				(ts.intent ===
																					d.ConversationMessage_CodeChunk_Intent
																						.MENTIONED_FILE ||
																					ts.intent ===
																						d
																							.ConversationMessage_CodeChunk_Intent
																							.COMPOSER_FILE),
																		) === void 0)
															)
																return !0;
															const jn = Nn.get(Dn.relativeWorkspacePath);
															return !(
																jn !== void 0 && Gn !== jn.firstMentionIndex
															);
														},
													));
											});
									}
									const Ji = {
										conversation: Hi,
										fullConversationHeadersOnly: fi.map((Nn) => ({
											bubbleId: Nn.bubbleId,
											type: Nn.type,
											serverBubbleId: Nn.serverBubbleId,
										})),
										conversationSummary: gi,
										allowLongFileScan: !0,
										explicitContext: await this.aiService.getExplicitContext(),
										documentationIdentifiers: (Jt.selectedDocs ?? []).map(
											(Nn) => Nn.docId,
										),
										quotes: Jt.quotes ?? [],
										canHandleFilenamesAfterLanguageIds: !0,
										modelDetails: wt,
										multiFileLinterErrors: [],
										useWeb: Jt.useWeb ? "full_search" : void 0,
										externalLinks: Jt.externalLinks ?? [],
										diffsForCompressingFiles: [],
										compressEdits: !0,
										shouldCache:
											this.reactiveStorageService
												.applicationUserPersistentStorage.cacheComposerPrompts,
										currentFile: We,
										fileDiffHistories: [],
										useNewCompressionScheme: !0,
										additionalRankedContext: [],
										isChat: Lt === "chat",
										conversationId: xt.composerId,
										repositoryInfo: Si,
										repositoryInfoShouldQueryStaging: this.cursorCredsService
											.getRepoBackendUrl()
											.includes("dev-staging.cursor.sh"),
										environmentInfo: Et,
										isAgentic: Vt,
										linterErrors:
											Lt === "chat" && Jt.useLinterErrors
												? await (0, qe.$0fc)(
														this.markerService,
														this.workspaceContextService,
														this.aiService,
													)
												: void 0,
										supportedTools:
											this.toolsV2HandlerRegistryService.getAvailableTools(),
										enableYoloMode:
											this.reactiveStorageService
												.applicationUserPersistentStorage.composerState
												.useYoloMode ?? !1,
										yoloPrompt:
											this.reactiveStorageService
												.applicationUserPersistentStorage.composerState
												.yoloPrompt ?? "",
									};
									if (
										!this.shouldSkipCapabilities(
											Xe?.capabilityProcessesToSkip,
											"mutate-request",
										)
									)
										try {
											await this.composerUtilsService.runCapabilitiesForProcess(
												Ye,
												"mutate-request",
												{
													composerId: Ye,
													humanBubbleId: ii.bubbleId,
													isCapabilityIteration: Xe?.isCapabilityIteration,
													contextUsed: Jt,
												},
												{ request: Ji },
											);
										} catch (Nn) {
											console.error(
												"[composer] error running capabilities for mutate-request",
												Nn,
											),
												this.handleAbortChat(Ye, ii.bubbleId);
											return;
										}
									if (
										((Dt.capabilitiesRan =
											this.composerDataService.getComposerBubble(
												Ye,
												ii.bubbleId,
											)?.capabilitiesRan),
										Gt.signal.aborted)
									)
										return;
									const cn = await this.chatClient.get(),
										un = new d.$AA(Ji);
									let yn;
									const Rn =
										await this.composerUtilsService.getShouldChatUseTools();
									if (Lt === "chat" && (!Vt || !Rn))
										Jt.usesCodebase
											? (yn = at.streamChatContext(Ji, {
													signal: Gt.signal,
													headers: (0, xe.$m6b)(mi),
												}))
											: (yn = at.streamChat(Ji, {
													signal: Gt.signal,
													headers: (0, xe.$m6b)(mi),
												}));
									else if (Vt) {
										const Nn = new c.$Kpb(6e5);
										Nn.push(
											new d.$hA({
												request: {
													case: "streamUnifiedChatRequest",
													value: Ji,
												},
											}),
										);
										const Fn = cn.streamUnifiedChatWithTools(Nn, {
											signal: Gt.signal,
											headers: (0, xe.$m6b)(mi),
										});
										yn = this.toolV2Service.toolWrappedStream(Nn, Fn, Gt, {
											composerId: Ye,
										});
									} else
										Jt.usesCodebase
											? (yn = at.streamComposerContext(Ji, {
													signal: Gt.signal,
													headers: (0, xe.$m6b)(mi),
												}))
											: (yn = cn.streamUnifiedChat(un, {
													signal: Gt.signal,
													headers: (0, xe.$m6b)(mi),
												}));
									this.updateComposer(Ye, {
										conversation: [...xt.conversation, Dt],
										generatingBubbleIds: [
											...(xt.generatingBubbleIds ?? []),
											Dt.bubbleId,
										],
										status: "generating",
									});
									let _i = (0, ve.$Mfc)(yn);
									const Bn = this.composerUtilsService.handleStreamComposer({
										streamer:
											this.composerUtilsService.intermediateChunkMiddleware(
												_i,
												Ye,
												Dt.bubbleId,
											),
										abortController: Gt,
										generationUUID: mi,
										composerId: Ye,
										startTime: It,
									});
									this._onDidSendRequest.fire(),
										(async () => {
											await this.aiFeatureStatusService
												.maybeRefreshFeatureStatus("keepComposerCacheWarm")
												.catch(() => {}),
												this.aiFeatureStatusService.getCachedFeatureStatus(
													"keepComposerCacheWarm",
												) &&
													(await this.debouncedMaybeKeepComposerCacheWarm(
														Ye,
														mi,
														new E.$iH(Ji),
													));
										})().catch((Nn) => {});
									const Mn = this.aiService.streamResponse({
											modelDetails: wt,
											generationUUID: mi,
											streamer: Bn,
											streamerURL:
												w.$q0.typeName +
												"/" +
												w.$q0.methods.streamComposer.name,
											source: "composer",
											rethrowCancellation: !0,
											failSilently: !1,
										}),
										zn =
											await this.composerUtilsService.runCapabilitiesForProcess(
												Ye,
												"process-stream",
												{
													composerId: Ye,
													humanBubbleId: ii.bubbleId,
													aiBubbleId: Dt.bubbleId,
													stream: Mn,
													generationUUID: mi,
													startTime: It,
													submitChatProps: { text: ze, extra: Xe },
												},
											),
										$n =
											this.reactiveStorageService
												.applicationUserPersistentStorage.composerState
												.selectedFakeStreamerId,
										Ln = $n
											? gt.allComposerFakeStreamers.find((Nn) => Nn.id === $n)
											: void 0,
										wn = Ln ? (0, ht.createComposerFakeStreamer)(Ln)() : zn,
										Hn = this.processCodeBlocks(Ye, wn, {
											skipRegisteringCodeBlocks: Xe?.skipRegisteringCodeBlocks,
											skipOnSettled: this.shouldSkipCapabilities(
												Xe?.capabilityProcessesToSkip,
												"composer-settled",
											),
											isCapabilityIteration: Xe?.isCapabilityIteration,
											isChatMode: Lt === "chat",
											passTimingInfo: !0,
										});
									let Yn,
										Es = Dt.text;
									for await (const Nn of Hn) {
										const Fn = this.composerDataService.getLastAiBubbleId(Ye);
										if (!Fn) throw new Error("[composer] No ai bubble id");
										if (
											(Yn !== Fn &&
												((Yn = Fn),
												(Es =
													this.composerDataService.getComposerBubble(Ye, Fn)
														?.text ?? "")),
											(ei = !0),
											Nn.timingInfo)
										) {
											Dt.timingInfo &&
												this.composerDataService.updateComposerDataSetStore(
													Ye,
													(Dn) => {
														Dn(
															"conversation",
															(jn) => jn.bubbleId === Fn,
															"timingInfo",
															(jn) => {
																const rs = Nn.timingInfo;
																if (!(!rs || !jn))
																	return {
																		...jn,
																		serverStartTime: rs.serverStartTime,
																		serverFirstTokenTime:
																			rs.serverFirstTokenTime,
																		serverRequestSentTime:
																			rs.serverRequestSentTime,
																		serverEndTime: rs.serverEndTime,
																	};
															},
														);
													},
												);
											continue;
										}
										if (
											this.reactiveStorageService.nonPersistentStorage
												.composerState.shouldSimulateServerError
										)
											throw (
												(console.log("[composer] Simulating server error"),
												new t.ConnectError("Simulated server error"))
											);
										if (
											this.reactiveStorageService.nonPersistentStorage
												.composerState.shouldSimulateTimeoutServerErrorOnce
										) {
											console.log("[composer] Simulating timeout server error");
											const Dn = new t.ConnectError(
												"Simulated timeout server error",
												t.Code.DeadlineExceeded,
												void 0,
												[new a.$at({ error: a.ErrorDetails_Error.TIMEOUT })],
											);
											throw (
												(this.reactiveStorageService.setNonPersistentStorage(
													"composerState",
													"shouldSimulateTimeoutServerErrorOnce",
													!1,
												),
												Dn)
											);
										}
										const { text: Gn } = Nn;
										if (!Gn) {
											Nn.isBigFile &&
												this.updateComposer(Ye, { isReadingLongFile: !0 });
											continue;
										}
										xt?.isReadingLongFile &&
											this.updateComposer(Ye, { isReadingLongFile: !1 }),
											(Es += Gn),
											(Yt += Gn),
											this.composerDataService.updateComposerDataSetStore(
												Ye,
												(Dn) =>
													Dn(
														"conversation",
														(jn) => jn.bubbleId === Fn,
														"text",
														Es,
													),
											);
									}
									(Ut = !0), (this._recentlyResumed = !1);
								} catch (fi) {
									if (
										(console.error("[composer] Error in AI response:", fi),
										fi instanceof t.ConnectError && !this._recentlyResumed)
									) {
										const Ti = (0, Ke.$X6b)(fi);
										if (Ti && Ti.error === a.ErrorDetails_Error.TIMEOUT) {
											si();
											return;
										}
									}
									(this._recentlyResumed = !1),
										(Mt = !0),
										this.composerDataService.setGeneratingCodeBlocksToAborted(
											Ye,
										),
										this.composerDataService.setGeneratingCapabilitiesToAborted(
											Ye,
										),
										this.composerDataService.setGeneratingCapabilityCodeBlocksToAborted(
											Ye,
										),
										ci(fi),
										ii && this.handleAbortChat(Ye, ii.bubbleId);
								}
						})();
					} catch (ri) {
						(Mt = !0),
							console.error(
								"[composer] submitChatMaybeAbortCurrent errored!",
								ri,
							);
					} finally {
						const ri = Gt.signal.aborted || xt?.status === "aborted";
						!ei && !ri && ci(new t.ConnectError("No response from model")),
							mi && this.abortGenerationUUID(mi);
						let $i;
						const Wt = [];
						if (Dt) {
							const at = xt.conversation.findIndex(
								(pi) => pi.bubbleId === Dt.bubbleId,
							);
							for (let pi = at; pi < xt.conversation.length; pi++) {
								const Li = xt.conversation[pi];
								if (Li.type === d.ConversationMessage_MessageType.AI)
									Wt.push(Li.bubbleId), ($i = Li.bubbleId);
								else break;
							}
						}
						const tt =
							xt.chatGenerationUUID !== void 0 &&
							this.isActiveGeneration(xt.chatGenerationUUID);
						if (
							(this.updateComposer(Ye, {
								generatingBubbleIds:
									xt?.generatingBubbleIds?.filter((at) => !Wt.includes(at)) ??
									[],
								chatGenerationUUID: tt ? xt.chatGenerationUUID : void 0,
							}),
							!Ut || !ei || Mt || xt?.status === "aborted"
								? (console.error(
										"[composer] Failed to get complete AI response",
									),
									xt?.conversation.length
										? this.updateComposer(Ye, { status: "aborted" })
										: this.updateComposer(Ye, { status: "none" }))
								: this.updateComposer(Ye, { status: "completed" }),
							!this.shouldSkipCapabilities(
								Xe?.capabilityProcessesToSkip,
								"after-submit-chat",
							) &&
								xt.status !== "aborted" &&
								$i &&
								ii)
						)
							try {
								await this.composerUtilsService.runCapabilitiesForProcess(
									Ye,
									"after-submit-chat",
									{
										composerId: Ye,
										humanBubbleId: ii.bubbleId,
										aiBubbleId: $i,
										isCapabilityIteration: Xe?.isCapabilityIteration,
									},
								);
							} catch (at) {
								console.error(
									"[composer] error running capabilities for after-submit-chat",
									at,
								),
									this.updateComposer(Ye, { status: "aborted" });
							}
						if (
							(Xe?.onFinish?.(),
							this.reactiveStorageService.applicationUserPersistentStorage
								.checklistState?.doneCommandL !== !0)
						) {
							const at =
								this.reactiveStorageService.applicationUserPersistentStorage
									.checklistState;
							this.reactiveStorageService.setApplicationUserPersistentStorage(
								"checklistState",
								(pi) => ({ ...(pi ?? {}), doneCommandL: !0 }),
							);
						}
						if (
							this.reactiveStorageService.applicationUserPersistentStorage
								.checklistState?.doneAddingCodeSelection !== !0 &&
							(Jt.fileSelections.length > 0 || Jt.selections.length > 0)
						) {
							const at =
								this.reactiveStorageService.applicationUserPersistentStorage
									.checklistState;
							this.reactiveStorageService.setApplicationUserPersistentStorage(
								"checklistState",
								(pi) => ({ ...(pi ?? {}), doneAddingCodeSelection: !0 }),
							);
						}
						this.shouldSkipCapabilities(
							Xe?.capabilityProcessesToSkip,
							"composer-settled",
						) || this.maybeRunOnComposerSettled(Ye),
							await this.renameComposer(Ye),
							Dt &&
								Dt.timingInfo &&
								this.composerDataService.updateComposerDataSetStore(Ye, (at) =>
									at(
										"conversation",
										(pi) => pi.bubbleId === Dt.bubbleId,
										"timingInfo",
										(pi) => {
											if (pi)
												return {
													...pi,
													clientSettleTime: Date.now(),
													clientEndTime: Date.now(),
												};
										},
									),
								);
					}
				}
				async warmFastApply(Ye, ze) {
					const Xe = this.getComposer(Ye),
						It = this.composerDataService.getComposerForceMode(Ye);
					if (!Xe) {
						console.error("[composer] No composer found for warmFastApply");
						return;
					}
					if (
						!this.composerDataService.getComposerCodeBlock(
							Ye,
							ze.uri,
							ze.version,
						)
					) {
						console.error(
							"[composer] No reactive code block found for warmFastApply",
						);
						return;
					}
					if (!this.composerDataService.getLastHumanBubble(Ye)) {
						console.error(
							"[composer] No last user message found for warmFastApply",
						);
						return;
					}
					if (!(await this.fileService.exists(ze.uri))) return;
					let Vt;
					It === "chat"
						? (Vt = r.FastApplySource.CACHED_APPLY)
						: (Vt = (await this.composerUtilsService.isAgenticComposer(Ye))
								? r.FastApplySource.COMPOSER_AGENT
								: r.FastApplySource.COMPOSER);
					try {
						await this.fastEditService.warmFastApply({
							uri: ze.uri,
							conversationHistory:
								this.composerUtilsService.processConversationForFastEdit(
									Ye,
									Xe.conversation,
									ze,
								),
							generationUUID: (0, y.$9g)(),
							source: Vt,
						});
					} catch (Bt) {
						console.error("[composer] Error in warmFastApply:", Bt);
					}
				}
				handleAbortChat(Ye, ze) {
					const Xe = this.getComposer(Ye);
					if (!Xe || this._skipHandleAbortChat.has(Ye)) return;
					const It = this.composerDataService.getComposerBubble(Ye, ze),
						Lt = Xe.conversation.findIndex((Gt) => Gt.bubbleId === ze);
					if (!It || ze !== this.composerDataService.getLastHumanBubbleId(Ye))
						return;
					const xt = Xe.conversation
						.slice(Lt + 1)
						.filter((Gt) => Gt.type === d.ConversationMessage_MessageType.AI)
						.map((Gt) =>
							this.composerDataService.getComposerBubble(Ye, Gt.bubbleId),
						)
						.filter(s.$tg);
					if (
						xt.some((Gt) =>
							(Gt.codeBlocks ?? [])
								.map((Ut) =>
									this.composerDataService.getComposerCodeBlock(
										Ye,
										Ut.uri,
										Ut.version,
									),
								)
								.filter(s.$tg)
								.some(
									(Ut) => Ut.status !== "generating" && Ut.status !== "aborted",
								),
						)
					)
						return;
					if (
						xt.every((Gt) => Gt.text.length === 0 && Gt.errorDetails === void 0)
					) {
						this.composerDataService.updateComposerDataSetStore(Ye, (ei) =>
							ei("conversation", (mi) => mi.slice(0, Lt)),
						);
						const Gt = (0, ke.$6gc)(It.context || (0, Se.$2gc)()),
							Mt = It.text,
							Ut = It.richText;
						this.updateComposer(Ye, { text: Mt, richText: Ut, context: Gt }),
							this._onShouldForceText.fire({ composerId: Ye }),
							this.composerViewsService.focus(Ye, !0);
					} else
						Xe.text.length === 0 &&
							!It.isCapabilityIteration &&
							this.composerDataService.getLastHumanBubbleId(Ye) === ze &&
							!xt.some((Gt) => Gt.capabilityType !== void 0) &&
							(this.updateComposer(Ye, { editingBubbleId: ze }),
							this.composerViewsService.focusPrevBubble(Ye));
				}
				async runFastApplyOnCodeBlock(Ye, ze, Xe) {
					const It = this.composerDataService.getCodeBlockStatus(
						Ye,
						ze.uri,
						ze.version,
					);
					if (
						(this.composerDataService.setCodeBlockStatus(
							Ye,
							ze.uri,
							ze.version,
							"apply_pending",
						),
						Xe?.shouldAutoApply === !1)
					)
						return this._fastApplyQueue.queue(() =>
							this.runFastApplyOnCodeBlockInternal(Ye, ze, {
								...Xe,
								cameFromGenerating:
									It === "generating" || Xe?.cameFromGenerating,
								isReapply: Xe?.isReapply,
							}),
						);
					const Lt = ze.uri.toString(),
						xt = this.getComposerEditingState(Ye);
					xt.fastApplyQueue[Lt] || (xt.fastApplyQueue[Lt] = new h.$Sh(1));
					const Vt = xt.fastApplyQueue[Lt].queue(() =>
						this._fastApplyQueue.queue(() =>
							this.runFastApplyOnCodeBlockInternal(Ye, ze, {
								...Xe,
								cameFromGenerating:
									It === "generating" || Xe?.cameFromGenerating,
								isReapply: Xe?.isReapply,
							}),
						),
					);
					return (
						(xt.fastApplyRunningMap[Lt] = !0),
						xt.fastApplyQueue[Lt].whenIdle().then(() => {
							(xt.fastApplyRunningMap[Lt] = !1), delete xt.fastApplyQueue[Lt];
						}),
						Vt
					);
				}
				async runFastApplyOnCodeBlockInternal(Ye, ze, Xe) {
					Xe = { shouldAutoApply: !0, ...Xe };
					let It = this.getComposer(Ye);
					if (!It) {
						console.log("[composer] no state");
						return;
					}
					let Lt = ze.uri;
					if (
						(Lt ||
							(It &&
								It.context.fileSelections.length === 1 &&
								(Lt = l.URI.revive(It.context.fileSelections[0].uri))),
						!Lt)
					) {
						console.log("[composer] no path found for codeblock");
						return;
					}
					const xt = this.composerDataService.getComposerForceMode(Ye);
					let Vt = It.codeBlockData?.[Lt.toString()]?.find((Dt) => Dt.isCached);
					for (; Vt; )
						this.unregisterCachedCodeBlock(Ye, Lt, Vt.version),
							(Vt = It.codeBlockData?.[Lt.toString()]?.find(
								(Dt) => Dt.isCached,
							));
					const Bt = ze.version,
						Gt = Lt.toString();
					console.log("[composer] running fast apply on", Gt, Bt),
						this.composerDataService.setCodeBlockStatus(Ye, Lt, Bt, "applying");
					const Mt = (0, y.$9g)(),
						ei = !(await this.fileService.exists(Lt));
					let mi = [];
					if (ei && Xe?.shouldAutoApply)
						mi = await this.checkToCreateNewFile(Ye, Lt, !0);
					else if (ei && !Xe?.shouldAutoApply) return;
					this._shouldOpenNextAppliedFile &&
						(this.openerService.open(Lt, {
							openToSide: !1,
							editorOptions: {
								revealIfVisible: !0,
								revealIfOpened: !0,
								source: B.EditorOpenSource.USER,
								preserveFocus: !0,
							},
							fromUserGesture: !0,
						}),
						(this._shouldOpenNextAppliedFile = !1));
					let ii = !1;
					try {
						if (xt === "edit") {
							const pi = this.composerDataService.getLastBubbleWhere(
									Ye,
									(Di) => !!Di.checkpoint,
								),
								Li = pi?.checkpoint;
							if (
								pi &&
								Xe?.cameFromGenerating &&
								!Li?.files.some((Ui) => Ui.uri.toString() === ze.uri.toString())
							) {
								const Wi = (
										await this.composerDataService.getMaybeCachedModelReference(
											Ye,
											ze.uri,
										)
									).object.textEditorModel.getLinesContent(),
									Gi = await this.composerUtilsService.computeLineDiffs(
										Ye,
										ze.uri,
										Wi,
									),
									qi = [
										"conversation",
										(Oi) => Oi.bubbleId === pi.bubbleId,
										"checkpoint",
									];
								Li === void 0 &&
									!this.isChat(Ye) &&
									this.composerDataService.updateComposerDataSetStore(
										Ye,
										(Oi) => Oi(...qi, (0, Q.createEmptyCheckpoint)()),
									),
									this.composerDataService.updateComposerDataSetStore(
										Ye,
										(Oi) =>
											Oi(
												...qi,
												(0, i.produce)((yi) => {
													yi &&
														(yi.files.push({
															uri: ze.uri,
															originalModelDiffWrtV0: Gi,
															isNewlyCreated: ei,
														}),
														yi.newlyCreatedFolders.push(...mi));
												}),
											),
									);
							}
						}
						const Dt = ze.content;
						let Jt,
							si = new Promise((pi) => {
								Jt = pi;
							}),
							Zt,
							ci = 0,
							ri = !1;
						const Wt =
								(this.composerDataService.getInlineDiff(Ye, Lt, Bt) !==
									void 0 &&
									!ze.isChained) ||
								Xe?.shouldAutoApply === !1,
							tt = async ({
								newModelLines: pi,
								originalModelLines: Li,
								isChained: Di,
							}) => {
								if ((console.log("[composer] apply done"), xt === "edit")) {
									const [Ui, Wi] = await Promise.all([
											this.composerUtilsService.computeLineDiffs(Ye, Lt, pi),
											this.composerUtilsService.computeLineDiffs(Ye, Lt, Li),
										]),
										Gi = [
											{ key: "isChained", value: Di ?? !1 },
											{ key: "newModelDiffWrtV0", value: Ui ?? [] },
											{ key: "originalModelDiffWrtV0", value: Wi ?? [] },
										];
									for (const qi of Gi)
										this.composerDataService.updateComposerDataSetStore(
											Ye,
											(Oi) =>
												Oi(
													"codeBlockData",
													Lt.toString(),
													Bt,
													qi.key,
													qi.value,
												),
										);
								}
								(ri = !0), (ii = !1), Jt();
							},
							at = () => {
								(ri = !0), (ii = !0), Jt();
							};
						for (; ci < lt.COMPOSER_STREAM_RETRY_MAX_ATTEMPTS && !ri; ) {
							if (
								(ci++,
								this.isChat(Ye) &&
									!this.applicationComposerSettings.unification)
							) {
								ri = !0;
								const Li = this.getComposer(Ye);
								if (!Li) {
									console.log("[composer] no state");
									return;
								}
								const Di = Xe?.overrideUri ?? ze.uri;
								let Ui = !0;
								if (Xe?.shouldAutoApply === !1) {
									this.aiApplyToFileActionsService.cacheCodeBlockApplyComposer({
										uri: Di,
										codeblock: ze.content,
										source: r.FastApplySource.CACHED_APPLY,
										parentRequestId:
											Li?.latestChatGenerationUUID ?? Li?.chatGenerationUUID,
										conversationHistory:
											this.composerUtilsService.processConversationForFastEdit(
												Ye,
												Li.conversation,
												ze,
											),
										onApplyDone: tt,
										onApplyFailed: at,
									});
									return;
								} else
									Xe?.range === void 0 &&
										Xe?.isReapply !== !0 &&
										(await this.aiApplyToFileActionsService.maybeApplyCachedEntry(
											{
												uri: Di,
												codeblockContent: ze.content,
												menuString: je.$S0b,
												range: "fullfile",
												composerMetadata: { composerId: Ye, version: Bt },
											},
										)) === "didApply" &&
										((Ui = !1), (si = Promise.resolve()));
								Ui &&
									(await this.aiApplyToFileActionsService.applyComposerMaybeWithExistingStreamer(
										{
											uri: Di,
											codeblock: ze.content,
											source: r.FastApplySource.CLICKED_APPLY,
											parentRequestId:
												Li?.latestChatGenerationUUID ?? Li?.chatGenerationUUID,
											conversationHistory:
												this.composerUtilsService.processConversationForFastEdit(
													Ye,
													Li.conversation,
													ze,
												),
											isReapply: Xe?.isReapply ?? !1,
											range: Xe?.range,
											onApplyDone: tt,
											onApplyFailed: at,
											composerMetadata: { composerId: Ye, version: Bt },
										},
									));
							} else {
								const Li = (await this.composerUtilsService.isAgenticComposer(
									Ye,
								))
									? r.FastApplySource.COMPOSER_AGENT
									: r.FastApplySource.COMPOSER;
								Zt = await this.fastEditService.performAndYieldChatEdit({
									skipAddToPromptHistory: !0,
									composerMetadata: { composerId: Ye, version: Bt },
									conversationHistory:
										this.composerUtilsService.processConversationForFastEdit(
											Ye,
											It.conversation,
											ze,
										),
									source: Li,
									generationUUID: Mt,
									parentRequestId:
										It?.latestChatGenerationUUID ?? It?.chatGenerationUUID,
									clickedCodeBlockContents: Dt,
									options: {
										overrideCurrentFileURI: Xe?.overrideUri ?? Lt,
										overrideLineRange: Xe?.range,
										rejectChangesInURI:
											Xe?.shouldAutoApply === !1 ? !1 : void 0,
										rerun: () => {
											this.reapply(Ye, Lt, Bt);
										},
									},
									shouldChainPrevious: !Wt,
									linesDiffComputerOptions: hi,
									inlineDiffServiceLookalikePure:
										this.getInlineDiffServiceLookalikePure(Ye, Lt, Bt),
									onApplyDone: tt,
									onApplyFailed: at,
									isReapply: Xe?.isReapply,
								});
							}
							this.composerDataService.updateComposerCodeBlock(
								Ye,
								ze.uri,
								ze.version,
								{ applyGenerationUUID: Mt, latestApplyGenerationUUID: Mt },
							);
							let pi = !1;
							if (Zt) {
								let Li = ct.noop;
								const Di = new Promise((Gi) => {
									Li = () => Gi(void 0);
								});
								let Ui;
								Ui = setTimeout(() => {
									Li(), (pi = !0);
								}, lt.COMPOSER_STREAM_CHUNK_TIMEOUT_MS);
								const Wi = new Promise((Gi) => {
									(async () => {
										if (!Zt) {
											Gi(void 0);
											return;
										}
										try {
											for await (const qi of Zt)
												clearTimeout(Ui),
													(Ui = setTimeout(() => {
														Li(), (pi = !0);
													}, lt.COMPOSER_STREAM_CHUNK_TIMEOUT_MS));
										} catch (qi) {
											console.error("[balta] error in stream", qi);
										} finally {
											Gi(void 0);
										}
									})();
								});
								await Promise.race([Wi, Di]),
									ci === 0 &&
										pi &&
										this.reactiveStorageService.nonPersistentStorage
											.composerState.shouldSimulateApplyHanging &&
										this.reactiveStorageService.setNonPersistentStorage(
											"composerState",
											"shouldSimulateApplyHanging",
											!1,
										);
							}
							pi ? this.abortGenerationUUID(Mt) : await si;
						}
						this.composerDataService.getCodeBlockStatus(Ye, Lt, Bt) !==
							"outdated" &&
							this.composerDataService.setCodeBlockStatus(
								Ye,
								Lt,
								Bt,
								"completed",
							),
							this.shouldCache(Ye, { uri: Lt, version: Bt }) ||
								this._onDidAiEditFile.fire({ path: Lt, version: Bt });
					} catch (Dt) {
						(ii = !0),
							console.error("[composer] error in runFastApplyOnCodeBlock", Dt);
					} finally {
						ii &&
							(this.composerDataService.setCodeBlockStatus(
								Ye,
								Lt,
								Bt,
								"cancelled",
							),
							(Xe.skipOnSettled = !0)),
							this.composerDataService.updateComposerDataSetStore(Ye, (ri) =>
								ri(
									"codeBlockData",
									Lt.toString(),
									Bt,
									"intermediateModelLines",
									[],
								),
							);
						const Dt = this.composerDataService.getInlineDiff(Ye, Lt, Bt),
							Jt = Dt && Dt.changes.length === 0;
						Jt && this.inlineDiffService.remove(Dt.id),
							this.composerDataService.updateComposerCodeBlock(
								Ye,
								ze.uri,
								ze.version,
								{ applyGenerationUUID: void 0, isNoOp: Jt },
							),
							await this.runAfterApply(Ye, Mt);
						const si = await this.textModelService.createModelReference(Lt),
							Zt = si.object.textEditorModel.getValue(),
							ci = this.workspaceContextService.asRelativePath(
								si.object.textEditorModel.uri,
							);
						await this.everythingProviderService.onlyLocalProvider?.runCommand(
							V.ComposerEditHistoryActions.ResetModel,
							{ relativePath: ci, currentModelValue: Zt, modelVersion: Bt },
						),
							si.dispose(),
							Xe?.cameFromGenerating &&
								!Xe?.skipOnSettled &&
								this.maybeRunOnComposerSettled(Ye),
							this._onDidFinishApplyingCodeBlock.fire({
								composerId: Ye,
								uri: Lt,
								version: Bt,
							}),
							console.log("[composer] fast apply done", Ye, Gt, Bt);
					}
				}
				async runAfterApply(Ye, ze) {
					const Xe = this.composerDataService.getLastHumanBubbleId(Ye),
						It = Xe
							? this.composerDataService.getComposerBubble(Ye, Xe)
							: void 0,
						Lt = this.composerDataService.getLastBubbleId(Ye),
						xt = this.composerDataService.getLastBubble(Ye);
					if (!Xe || !It) {
						console.error(
							"[composer] after apply was run without a previous human bubble",
						);
						return;
					}
					if (!Lt || !xt || xt.type !== d.ConversationMessage_MessageType.AI) {
						console.error(
							"[composer] after apply was run without a previous ai bubble",
						);
						return;
					}
					await this.composerUtilsService.runCapabilitiesForProcess(
						Ye,
						"after-apply",
						{ composerId: Ye, humanBubbleId: Xe, aiBubbleId: Lt },
					);
				}
				async fixLinterErrorWithAI({
					errorMessage: Ye,
					editorUri: ze,
					range: Xe,
					addToCurrent: It = !1,
					forceMode: Lt,
				}) {
					const xt = this.composerDataService.getSelectedIdByForceMode(Lt),
						Vt = this._codeEditorService.getActiveCodeEditor();
					if ((this.openComposer(xt), !Vt?.hasModel())) return;
					const Bt = Vt.getModel();
					if (!Bt) return;
					const Gt = Vt.getPosition();
					(!Gt || !Xe.containsPosition(Gt)) &&
						Vt.setPosition(Xe.getStartPosition());
					const Mt = Math.max(1, Xe.startLineNumber - 1),
						Ut = Math.min(Bt.getLineCount(), Xe.endLineNumber + 2),
						ei = new T.$iL(Mt, 1, Ut, Bt.getLineMaxColumn(Ut)),
						mi = `For the code present, we get this error:
\`\`\`
${Ye}
\`\`\`
How can I resolve this? If you propose a fix, please make it concise.`;
					if (
						this.composerDataService.getLastHumanBubble(xt)?.text === mi &&
						this.getComposer(xt)?.status === "generating"
					)
						return;
					It || (await this.createComposer({ forceMode: Lt }));
					const ii = this.composerDataService.getSelectedIdByForceMode(Lt);
					this.updateComposer(ii, { text: mi, richText: mi });
					const Dt = await this.getEditorCode(ei, Vt);
					Dt &&
						this.addContext({
							composerId: ii,
							contextType: "selections",
							value: Dt,
							shouldShowPreview: !1,
						}),
						this.addContext({
							composerId: ii,
							contextType: "fileSelections",
							value: { uri: l.URI.parse(ze) },
							shouldShowPreview: !1,
						}),
						this._onShouldForceText.fire({ composerId: ii }),
						await this.submitChatMaybeAbortCurrent(ii, mi, { mode: "edit" });
				}
				async fixBugReport(Ye, ze, Xe, It) {
					await this.createComposer({ forceMode: It });
					const Lt = new Set(),
						xt = new Set(),
						Vt = this.composerDataService.getSelectedIdByForceMode(It);
					for (const Mt of Ye.locations) {
						const Ut = this.workspaceContextService.resolveRelativePath(
							Mt.file,
						);
						if (!Ut) {
							console.error("[composer] no uri for", Mt.file);
							continue;
						}
						Lt.add(Ut), xt.add(Mt.file);
						const ei = ze[Mt.file];
						if (!ei) {
							console.error("[composer] no file contents for", Mt.file);
							continue;
						}
						const mi = (0, ne.$Ryc)(
							Mt,
							ei,
							this.workspaceContextService,
							this.languageService,
						);
						if (!mi) {
							console.error("[composer] no selection for", Mt);
							continue;
						}
						this.addContext({
							composerId: Vt,
							contextType: "selections",
							value: mi,
							shouldShowPreview: !1,
						}),
							this.addContext({
								composerId: Vt,
								contextType: "fileSelections",
								value: { uri: Ut },
								shouldShowPreview: !1,
							});
					}
					const Bt = `Fix this bug in ${Array.from(xt)
						.map((Mt) => `\`${Mt}\``)
						.join(", ")}:
\`\`\`
${Ye.description}
\`\`\``;
					this.updateComposer(Vt, { text: Bt });
					const Gt = await (0, ne.$Qyc)({
						report: Ye,
						fileSnapshots: ze,
						fileSnapshotsPreDiff: Xe,
						workspaceContextService: this.workspaceContextService,
						modelService: this.modelService,
						editorWorkerService: this.editorWorkerService,
					});
					Gt &&
						this.addContext({
							composerId: Vt,
							contextType: "selections",
							value: Gt,
							shouldShowPreview: !1,
						}),
						await this.submitChatMaybeAbortCurrent(Vt, Bt);
				}
				async turnCachedCodeBlockToDiff(Ye, ze, Xe) {
					const It = this.composerDataService.getComposerCodeBlock(Ye, ze, Xe);
					!It ||
						It.isCached !== !0 ||
						(this.unregisterCachedCodeBlock(Ye, ze, Xe),
						await this.turnApplyToInlineDiff(Ye, ze, Xe));
				}
				async turnAllCachedCodeBlocksToDiffs(Ye) {
					if (this._isTurningCachedCodeBlocksToDiffs) {
						console.log(
							"[composer] turnAllCachedCodeBlocksToDiffs is already running, skipping",
						);
						return;
					}
					this._isTurningCachedCodeBlocksToDiffs = !0;
					try {
						const ze = this.composerDataService.getComposerFromIdOrHandle(Ye);
						if (!ze) return;
						const Xe = this.composerDataService.getAllCachedCodeBlocks(
							ze.composerId,
						);
						for (const It of Xe)
							It.status !== "applying" &&
								(await this.turnCachedCodeBlockToDiff(
									ze.composerId,
									It.uri,
									It.version,
								));
					} finally {
						this._isTurningCachedCodeBlocksToDiffs = !1;
					}
				}
				async turnApplyToInlineDiff(Ye, ze, Xe, It) {
					const Lt = this.composerDataService.getComposerCodeBlock(Ye, ze, Xe);
					if (!Lt || !Lt.newModelDiffWrtV0) {
						console.error("[composer] no latest code block for uri", ze);
						return;
					}
					if (It?.shouldChain) {
						const si = new rt.$y7b(
							"Undo Chain Diff",
							"undo-chain-diff",
							void 0,
							ze,
							() => {},
							() => {},
						);
						this.inlineDiffService.pushUndoElement(si, {
							breakConsolidation: !0,
						});
						const Zt =
							this.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
								(ci) => ci.uri.toString() === ze.toString(),
							);
						if (!Zt) {
							console.error(
								"[composer] cannot chain apply without prev inline diff",
								ze,
							);
							return;
						}
						this.inlineDiffService.cancelDiff(Zt.id),
							this.inlineDiffService.rejectDiff(Zt.id, {
								close: !0,
								rejectSilently: !0,
								dontBreakConsolidation: !0,
							});
					} else {
						const si =
							this.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
								(Zt) => Zt.uri.toString() === ze.toString(),
							);
						si && this.inlineDiffService.remove(si.id);
					}
					console.log("[composer] turning cached to diff", ze, Lt.status),
						(await this.fileService.exists(ze)) ||
							(await this.checkToCreateNewFile(Ye, ze, !0));
					const Bt = (
						await this.composerDataService.getMaybeCachedModelReference(Ye, ze)
					).object;
					if (It?.setOriginalModelLines) {
						const si =
							await this.composerUtilsService.getCodeBlockOriginalModelLines(
								Ye,
								ze,
								Xe,
								{ shouldChain: !0 },
							);
						si &&
							Bt.textEditorModel.setValue(
								si.join(`
`),
							);
					}
					const Mt = {
							startLineNumber: 1,
							endLineNumberExclusive: Bt.textEditorModel.getLineCount() + 1,
						},
						Ut = Bt.textEditorModel
							.getLinesContent()
							.slice(Mt.startLineNumber - 1, Mt.endLineNumberExclusive - 1),
						ei = (0, y.$9g)(),
						mi = {
							uri: ze,
							generationUUID: ei,
							currentRange: Mt,
							originalTextLines: Ut,
							prompt: "hi2",
							isHidden: !1,
							attachedToPromptBar: !1,
							source: Ce.$a0b,
							createdAt: Date.now(),
							composerMetadata: { composerId: Ye, version: Xe },
						},
						Dt = (await this.inlineDiffService.addActiveDiff(mi)).id,
						Jt = this.composerUtilsService.getCodeBlockNewModelLines(
							Ye,
							ze,
							Xe,
						);
					if (!Jt) {
						console.error("[composer] no new model lines for", ze, Xe);
						return;
					}
					this.inlineDiffService.addLinesToDiff(Dt, Jt),
						this.inlineDiffService.finishDiffSuccess(Dt),
						this.composerDataService.updateComposerCodeBlock(Ye, ze, Xe, {
							lastDiffId: Dt,
						}),
						this.composerDataService.setCodeBlockStatus(
							Ye,
							ze,
							Lt.version,
							"completed",
						),
						this._onDidAiEditFile.fire({ path: ze, version: Lt.version });
				}
				async reactivateApplyingCodeBlocks(Ye) {
					const ze = this.composerDataService.getComposerFromIdOrHandle(Ye);
					if (!ze) return;
					const Xe = this.composerDataService.getCodeBlocksOfStatuses(
						Ye,
						"applying",
					);
					for (const It of Xe)
						It.isCached &&
							(this.composerDataService.doesFileHaveInlineDiff(
								ze.composerId,
								It.uri,
							) ||
								(await this.reactivateApplyingCodeBlock(Ye, It)));
				}
				async reactivateApplyingCodeBlock(Ye, ze) {
					if (!ze || ze.status !== "applying") {
						console.error("[composer] no latest code block for", ze);
						return;
					}
					console.log(
						"[composer] reactivating applying code block",
						ze.uri,
						ze.status,
					),
						this.unregisterCachedCodeBlock(Ye, ze.uri, ze.version);
					const Xe = ze.uri;
					(await this.fileService.exists(Xe)) ||
						(await this.checkToCreateNewFile(Ye, Xe, !0));
					const xt = (
							await this.composerDataService.getMaybeCachedModelReference(
								typeof Ye == "string" ? Ye : Ye.data.composerId,
								Xe,
							)
						).object,
						Vt = xt.textEditorModel.getValue(),
						Bt = xt.textEditorModel.getLineCount(),
						Gt = new I.$rL(1, Bt + 1),
						Mt = xt.textEditorModel
							.getLinesContent()
							.slice(Gt.startLineNumber - 1, Gt.endLineNumberExclusive - 1),
						Ut = (0, y.$9g)(),
						ei = {
							uri: Xe,
							generationUUID: Ut,
							currentRange: Gt,
							originalTextLines: Mt,
							prompt: "hi3",
							isHidden: !1,
							attachedToPromptBar: !1,
							source: Ce.$a0b,
							createdAt: Date.now(),
							composerMetadata: {
								composerId: typeof Ye == "string" ? Ye : Ye.data.composerId,
								version: ze.version,
							},
						},
						mi = this.getApplyingDiffsState(
							typeof Ye == "string" ? Ye : Ye.data.composerId,
						);
					mi.isReactivatingApplyingDiffs[Xe.toString()] = !0;
					try {
						const ii = ze.intermediateModelLines ?? [];
						let Dt = [];
						if (ii.length > 0) {
							const Zt = await this.editorWorkerService.computeLinesDiff(
								Mt,
								ii,
								{
									ignoreTrimWhitespace: !1,
									computeMoves: !1,
									maxComputationTimeMs: 500,
									...hi,
								},
							);
							let ci = Zt.changes;
							Zt.hitTimeout &&
								(ci = [new P.$CL(Gt, new I.$rL(1, ii.length + 1), void 0)]);
							const ri = ci.map(($i) => ({
								original: $i.original,
								modified: ii.slice(
									$i.modified.startLineNumber - 1,
									$i.modified.endLineNumberExclusive - 1,
								),
							}));
							Dt = this.fastEditService.applyDiffToLines(
								Vt.split(`
`),
								ri,
							);
						}
						if (
							!ze.isNotApplied &&
							(this.shouldCache(Ye, { uri: Xe, version: ze.version }) ||
								mi.isReactivatingApplyingDiffs[Xe.toString()] === !1)
						) {
							(mi.applyingDiffsBacklogLines[Xe.toString()] = []),
								(mi.isReactivatingApplyingDiffs[Xe.toString()] = !1);
							return;
						}
						const si = (await this.inlineDiffService.addActiveDiff(ei)).id;
						this.inlineDiffService.addLinesToDiff(si, Dt);
					} catch (ii) {
						console.error(
							"[composer] error in reactivateApplyingCodeBlock",
							ii,
						);
					} finally {
						mi.isReactivatingApplyingDiffs[Xe.toString()] = !1;
					}
				}
				async computeGlobalDiffTrajectories(Ye) {
					if (Ye || !this.applicationComposerSettings.useDiffHistory) return [];
					try {
						return await this.everythingProviderService.onlyLocalProvider?.runCommand(
							V.ComposerEditHistoryActions.CompileGlobalDiffTrajectories,
							{},
						);
					} catch (ze) {
						return (
							console.error(
								"[composer] error in computeGlobalDiffTrajectories",
								ze,
							),
							[]
						);
					}
				}
				async getEnvironmentInfo() {
					const Ye =
						await this.everythingProviderService.onlyLocalProvider?.runCommand(
							V.ExtHostInfoActions.GetExtHostInfo,
							null,
						);
					return {
						exthostPlatform: Ye?.platform,
						exthostArch: Ye?.arch,
						exthostRelease: Ye?.release,
						exthostShell: Ye?.shell,
						localTimestamp: new Date().toISOString(),
						workspaceUris: this.workspaceContextService
							.getWorkspace()
							.folders.map((ze) => ze.uri.toString()),
					};
				}
				setHorizontalBarSize(Ye) {
					this.updateWorkspacePersistentState({ horizontalBarSize: Ye });
				}
				setTabHeight(Ye) {
					this.updateWorkspacePersistentState({ tabHeight: Ye });
				}
				getHorizontalBarSize() {
					return (
						this.reactiveStorageService.workspaceUserPersistentStorage
							.composerState?.horizontalBarSize ?? 520
					);
				}
				getTabHeight() {
					return (
						this.reactiveStorageService.workspaceUserPersistentStorage
							.composerState?.tabHeight ?? 400
					);
				}
				isComposerEnabled() {
					return this.applicationComposerSettings.isComposerEnabled2;
				}
				setIsComposerEnabled(Ye) {
					this.reactiveStorageService.setApplicationUserPersistentStorage(
						"composerState",
						"isComposerEnabled2",
						Ye,
					);
				}
				async referenceOpenEditors(Ye) {
					const Xe = this.editorGroupsService
							.getGroups(Te.GroupsOrder.MOST_RECENTLY_ACTIVE)
							.map((Vt) =>
								Vt.editors
									.filter(
										(Bt) =>
											Bt.resource &&
											this.isCompatibleScheme(Bt.resource.scheme),
									)
									.map((Bt) => Bt.resource),
							)
							.flat(),
						It = Xe.filter(
							(Vt) =>
								Vt.scheme !== o.Schemas.notepad &&
								Vt.scheme !== o.Schemas.vscodeTerminal,
						),
						Lt = Xe.filter((Vt) => Vt.scheme === o.Schemas.vscodeTerminal),
						xt = Xe.filter((Vt) => Vt.scheme === o.Schemas.notepad);
					for (const Vt of It)
						this.addContext({
							composerId: Ye,
							contextType: "fileSelections",
							value: { uri: Vt },
						});
					for (const Vt of Lt)
						this.addContext({
							composerId: Ye,
							contextType: "terminalFiles",
							value: { uri: Vt },
						});
					for (const Vt of xt)
						this.addContext({
							composerId: Ye,
							contextType: "notepads",
							value: { notepadId: Vt.path },
						});
				}
				async shouldComposerAutoApply(Ye) {
					const ze = this.getComposer(Ye);
					return ze
						? this.applicationComposerSettings.unification
							? !!ze.isAgentic
							: this.composerDataService.getComposerForceMode(Ye) === "edit"
						: !1;
				}
				async shouldAutoApplyURI(Ye, ze) {
					return this.getComposer(Ye)
						? this.applicationComposerSettings.autoApplyFilesOutsideContext ||
							this.composerDataService
								.getAssociatedFileUris(Ye)
								.some((Lt) => Lt.toString() === ze.toString())
							? !0
							: !(await this.fileService.exists(ze))
						: !1;
				}
				isUsingAPIKeys(Ye) {
					const ze =
						this.reactiveStorageService.applicationUserPersistentStorage
							.aiSettings.composerModel ?? "claude-3.5-sonnet";
					return ze.toLowerCase().includes("gpt")
						? this.reactiveStorageService.applicationUserPersistentStorage
								.useOpenAIKey
						: ze.toLowerCase().includes("claude")
							? this.reactiveStorageService.applicationUserPersistentStorage
									.useClaudeKey
							: ze.toLowerCase().includes("gemini")
								? this.reactiveStorageService.applicationUserPersistentStorage
										.useGoogleKey
								: !0;
				}
				async *processCodeBlocks(Ye, ze, Xe) {
					let It = null,
						Lt = !1,
						xt = "",
						Vt,
						Bt,
						Gt = !1,
						Mt = null,
						Ut = Xe?.offsetCodeBlockIdx ?? 0,
						ei = 0;
					const mi = (si, Zt, ci, ri) => {
							const $i = this.composerDataService.getComposerBubble(Ye, Zt);
							if (!$i) throw new Error("[composer] Bubble not found");
							Mt.content += xt.slice(0, ri);
							const Wt = $i.capabilityCodeBlocks.length - 1;
							if (!this.composerDataService.getComposerData(Ye))
								throw new Error("[composer] Composer not found");
							this.composerDataService.updateComposerCapabilityCodeBlock(
								Ye,
								Zt,
								Wt,
								{ content: Mt.content },
							);
							const at = {
								composerId: Ye,
								humanBubbleId: ci,
								aiBubbleId: Zt,
								isCapabilityIteration: Xe?.isCapabilityIteration,
								capabilityCodeBlock: Mt,
							};
							this.composerUtilsService.runCapabilitiesForProcess(
								Ye,
								"process-codeblock",
								at,
							),
								Ut++,
								(Mt = null);
						},
						ii = async (si, Zt) => {
							const ci = xt.slice(0, Zt);
							if (
								si &&
								si.uri !== void 0 &&
								si.version !== void 0 &&
								!Xe?.skipRegisteringCodeBlocks
							)
								if (
									((It.content += ci),
									this.composerDataService.updateComposerCodeBlock(
										Ye,
										It.uri,
										It.version,
										{ content: It.content },
									),
									Xe?.runApplyOnCodeBlock)
								)
									await Xe.runApplyOnCodeBlock(Ye, {
										uri: It.uri,
										version: It.version,
										content: It.content,
										status: "none",
									});
								else {
									const $i = this.composerDataService.getComposerCodeBlock(
										Ye,
										It.uri,
										It.version,
									);
									(It.isNotApplied && $i?.status !== "generating") ||
										this.runFastApplyOnCodeBlock(
											Ye,
											{
												uri: It.uri,
												version: It.version,
												content: It.content,
												status: "generating",
											},
											{
												shouldAutoApply: !It.isNotApplied,
												skipOnSettled: Xe?.skipOnSettled,
												mode: Xe?.isChatMode ? "chat" : "edit",
											},
										);
								}
							Ut++, (It = null);
						};
					for await (const si of ze) {
						const Zt = this.composerDataService.getLastAiBubbleId(Ye),
							ci = this.composerDataService.getLastHumanBubbleId(Ye);
						if (!Zt || !ci)
							throw new Error("[composer] No ai or human bubble id");
						const { text: ri } = si;
						if (!ri) {
							Xe?.passTimingInfo && si.timingInfo !== void 0 && (yield si);
							continue;
						}
						for (xt += ri; xt.length > 0; )
							if (Lt) {
								const $i = Gt && Mt,
									Wt =
										It &&
										It.uri !== void 0 &&
										It.version !== void 0 &&
										!Xe?.skipRegisteringCodeBlocks;
								if (lt.ENABLED_BETTER_MARKDOWN_PARSING) {
									const Di = xt.match(
										new RegExp(`^(?:\\r?\\n)([\\t ]${Bt})\`{${Vt}}\\S+`),
									);
									if (Di) {
										ei++,
											$i
												? (Mt.content += xt.slice(0, Di.index + Di[0].length))
												: Wt &&
													((It.content += xt.slice(0, Di.index + Di[0].length)),
													this.composerDataService.updateComposerCodeBlock(
														Ye,
														It.uri,
														It.version,
														{ content: It.content },
													)),
											(xt = xt.slice(Di.index + Di[0].length));
										continue;
									}
								}
								const tt = new RegExp(
										`^(?:\\r?\\n)([\\t ]{${Bt}})\`{${Vt}}\\s*(?:\\r?\\n)`,
									),
									at = /^(?:\r?\n)[\t ]*`*\s*/,
									pi = new RegExp(`^(?:\\r?\\n)([\\t ]{${Bt}})\`{${Vt}}`),
									Li = xt.match(tt);
								if (Li) {
									if (lt.ENABLED_BETTER_MARKDOWN_PARSING && ei > 0) {
										ei--,
											$i
												? (Mt.content += xt.slice(0, Li.index + Li[0].length))
												: Wt &&
													((It.content += xt.slice(0, Li.index + Li[0].length)),
													this.composerDataService.updateComposerCodeBlock(
														Ye,
														It.uri,
														It.version,
														{ content: It.content },
													)),
											(xt = xt.slice(Li.index + Li[0].length));
										continue;
									}
									(Lt = !1),
										$i ? mi(Mt, Zt, ci, Li.index) : It && ii(It, Li.index),
										(xt = xt.slice(Li.index + Li[0].length)),
										(Vt = void 0),
										(Bt = void 0),
										(Gt = !1);
								} else {
									const Di = xt.match(at),
										Ui = xt.match(pi);
									if ((Di && Di[0].length === xt.length) || Ui) break;
									{
										const Wi = xt.charAt(0);
										$i
											? (Mt.content += Wi)
											: Wt &&
												((It.content += Wi),
												this.composerDataService.updateComposerCodeBlock(
													Ye,
													It.uri,
													It.version,
													{ content: It.content },
												)),
											(xt = xt.slice(Wi.length));
									}
								}
							} else {
								const $i = /^(\n|\n\n)?[\t ]*```+([^\n]*)\n/,
									Wt = /^(\n|\n\n)?[\t ]*```+[^\n]*$/,
									tt = xt.match($i);
								if (tt) {
									Lt = !0;
									const at = tt[0],
										pi = tt[2];
									(Vt = at.match(/^(\n|\n\n)?(```+)/)?.[2]?.length ?? 3),
										(Bt =
											at.match(/^(\n|\n\n)?([\t ]*)```+/m)?.[2]?.length ?? 0);
									let Li = "",
										Di = null;
									if (pi.includes(":")) {
										const Wi = pi.split(":");
										Wi.length === 2 &&
											((Li = Wi[0].trim()), (Di = Wi[1].trim()));
									} else
										pi?.includes(".")
											? ((Li = pi.split(".").pop()?.trim() ?? ""), (Di = pi))
											: (Li = pi?.trim() ?? "");
									const Ui = Q.ComposerCapabilitiesCodeBlockAliases.find(
										(Wi) => Wi === Li,
									);
									if (((xt = xt.slice(tt[0].length)), Ui))
										(Gt = !0),
											(Mt = {
												type: Ui,
												content: "",
												status: "generating",
												codeBlockIdx: Ut,
												arg: Di ?? void 0,
											}),
											this.composerDataService.updateComposerDataSetStore(
												Ye,
												(Wi) =>
													Wi(
														"conversation",
														(Gi) => Gi.bubbleId === Zt,
														"capabilityCodeBlocks",
														(Gi) => [
															...(Gi ?? []),
															{
																type: Ui,
																status: "generating",
																codeBlockIdx: Ut,
																arg: Di ?? void 0,
															},
														],
													),
											);
									else if (
										((It = { language: Li, filePath: Di, content: "" }), Di)
									) {
										const Wi =
												this.workspaceContextService.resolveRelativePath(Di),
											Gi = await this.shouldComposerAutoApply(Ye),
											qi = await this.shouldAutoApplyURI(Ye, Wi);
										if (!Xe?.skipRegisteringCodeBlocks) {
											const { languageId: Oi } =
													this.languageService.createByLanguageNameOrFilepathOrFirstLine(
														Li ?? "",
														null,
														void 0,
													),
												yi = this.registerNewCodeBlock(Ye, Wi, It.content, Ut, {
													languageId: Oi,
													status: "generating",
													isNotApplied:
														(!Gi || !qi) &&
														(!this.applicationComposerSettings
															.isAutoApplyEnabled ||
															!this.applicationComposerSettings.unification),
													ignoreTurningCodeBlockToCodePill:
														Xe?.ignoreTurningCodeBlockToCodePill,
												});
											this.warmFastApply(Ye, {
												uri: yi.uri,
												version: yi.version,
												content: It.content,
												status: "generating",
											}),
												(It.uri = yi.uri),
												(It.version = yi.version),
												(It.isNotApplied = yi.isNotApplied);
										}
									}
								} else {
									if (xt.match(Wt)) break;
									{
										const pi = xt.indexOf(`
`);
										if (pi !== -1) xt = xt.slice(pi + 1);
										else break;
									}
								}
							}
						yield si;
					}
					const Dt = this.composerDataService.getLastAiBubbleId(Ye),
						Jt = this.composerDataService.getLastHumanBubbleId(Ye);
					if (!Dt || !Jt)
						throw new Error("[composer] No ai or human bubble id");
					if (Lt) {
						const si = Gt && Mt,
							Zt =
								It &&
								It.uri !== void 0 &&
								It.version !== void 0 &&
								!Xe?.skipRegisteringCodeBlocks,
							ci = new RegExp(`^(?:\\r?\\n)([\\t ]{${Bt}})\`{${Vt}}$`),
							ri = xt.match(ci);
						ri
							? ((Lt = !1),
								si ? mi(Mt, Dt, Jt, ri.index) : Zt && ii(It, ri.index),
								(xt = xt.slice(ri.index + ri[0].length)),
								(Vt = void 0),
								(Bt = void 0),
								(Gt = !1))
							: si
								? this.composerDataService.updateComposerCapabilityCodeBlock(
										Ye,
										Dt,
										Ut,
										{ status: "aborted" },
									)
								: Zt &&
									(this.composerDataService.updateComposerCodeBlock(
										Ye,
										It.uri,
										It.version,
										{ content: It.content },
									),
									this.composerDataService.setCodeBlockStatus(
										Ye,
										It.uri,
										It.version,
										"aborted",
									));
					}
				}
				updateWorkspacePersistentState(Ye) {
					this.reactiveStorageService.setWorkspaceUserPersistentStorage(
						"composerState",
						{
							...this.reactiveStorageService.workspaceUserPersistentStorage
								.composerState,
							...Ye,
						},
					);
				}
				abortGenerationUUID(Ye) {
					const ze = this.aiService.streamingAbortControllers.get(Ye);
					ze &&
						(ze.abort(), this.aiService.streamingAbortControllers.delete(Ye));
				}
				isActiveGeneration(Ye) {
					return this.aiService.streamingAbortControllers.has(Ye);
				}
				removeNonPersistentContext(Ye) {
					this.removeAllListContext({
						composerId: Ye,
						contextType: "selectedImages",
						addToUndoRedo: !1,
					}),
						this.removeAllListContext({
							composerId: Ye,
							contextType: "selections",
							addToUndoRedo: !1,
						}),
						this.removeAllListContext({
							composerId: Ye,
							contextType: "terminalSelections",
							addToUndoRedo: !1,
						}),
						this.removeAllListContext({
							composerId: Ye,
							contextType: "externalLinks",
							addToUndoRedo: !1,
						}),
						this.removeAllListContext({
							composerId: Ye,
							contextType: "editTrailContexts",
							addToUndoRedo: !1,
						});
				}
				async refreshReactiveContextItemAtStartup() {
					const Ye = await this.composerDataService.getSelectedComposerHandle();
					try {
						Ye && this.refreshReactiveContextItem(Ye.data.composerId);
					} finally {
						Ye?.dispose();
					}
				}
				refreshReactiveContextItem(Ye, ze, Xe) {
					const It = this.getComposer(Ye);
					if (
						!It ||
						(It.hasChangedContext && !Xe) ||
						!this.selectedContextService.isCursorIgnoreLoaded()
					)
						return;
					const Lt = ze
						? this.composerDataService.getComposerBubble(Ye, ze)?.context
						: It.context;
					if (!Lt) throw new Error("[composer] Context not found");
					const xt = this.composerDataService.getComposerForceMode(Ye),
						Vt = Lt.fileSelections,
						Bt = Lt.notepads ?? [],
						Gt = Lt.terminalFiles ?? [],
						Mt = [],
						Ut = [],
						ei = [];
					if (xt === "edit") {
						const si = this.editorService.getEditors(
								J.EditorsOrder.MOST_RECENTLY_ACTIVE,
							),
							Zt = new Set(si.map((ri) => ri.groupId)),
							ci = Array.from(Zt)
								.map(
									(ri) => this.editorGroupsService.getGroup(ri)?.activeEditor,
								)
								.filter(s.$tg);
						for (const ri of ci)
							if (
								!(!ri?.resource || !this.isCompatibleScheme(ri.resource.scheme))
							)
								if (ri.resource.scheme === o.Schemas.notepad) {
									const $i = ri.resource.path;
									Ut.push({
										notepadId: $i,
										addedWithoutMention: !0,
										autoContext: !0,
									});
								} else if (ri.resource.scheme === o.Schemas.vscodeTerminal) {
									const $i = ri.resource;
									ei.push({
										uri: $i,
										addedWithoutMention: !0,
										autoContext: !0,
									});
								} else {
									const $i = ri.resource;
									this.selectedContextService.shouldIgnoreUri($i) ||
										Mt.push({
											uri: $i,
											addedWithoutMention: !0,
											autoContext: !0,
										});
								}
					} else if (xt === "chat") {
						const Zt = this.getCurrentFile()?.uri;
						if (!Zt) return;
						if (Zt.scheme === o.Schemas.notepad) {
							const ci = Zt.path;
							ci &&
								Ut.push({
									notepadId: ci,
									addedWithoutMention: !0,
									autoContext: !0,
								});
						} else
							Zt.scheme === o.Schemas.vscodeTerminal
								? ei.push({ uri: Zt, addedWithoutMention: !0, autoContext: !0 })
								: this.selectedContextService.shouldIgnoreUri(Zt) ||
									Mt.push({
										uri: Zt,
										addedWithoutMention: !0,
										autoContext: !0,
									});
					}
					Vt.forEach((si) => {
						Mt.some((Zt) =>
							b.$dh.isEqual(l.URI.revive(Zt.uri), l.URI.revive(si.uri)),
						) ||
							(this.selectedContextService.getMentions(Lt, "fileSelections", si)
								.length > 0 &&
								!this.selectedContextService.shouldIgnoreUri(si.uri) &&
								Mt.push(si));
					}),
						Bt.forEach((si) => {
							Ut.some((Zt) => Zt.notepadId === si.notepadId) ||
								(this.selectedContextService.getMentions(Lt, "notepads", si)
									.length > 0 &&
									Ut.push(si));
						}),
						Gt.forEach((si) => {
							ei.some((Zt) =>
								b.$dh.isEqual(l.URI.revive(Zt.uri), l.URI.revive(si.uri)),
							) ||
								(this.selectedContextService.getMentions(
									Lt,
									"terminalFiles",
									si,
								).length > 0 &&
									ei.push(si));
						});
					const mi = (si, Zt) => {
							const ci = new Map();
							return (
								si.forEach((ri) => {
									const $i = (0, Se.$Zgc)(Zt, ri);
									ci.has($i) || ci.set($i, ri);
								}),
								Array.from(ci.values())
							);
						},
						ii = mi(Mt, "fileSelections"),
						Dt = mi(Ut, "notepads"),
						Jt = mi(ei, "terminalFiles");
					this._ignoreChangesToContext.add(Ye),
						ze
							? this.composerDataService.updateComposerDataSetStore(
									Ye,
									(si) => {
										si("conversation", (Zt) => Zt.bubbleId === ze, "context", {
											fileSelections: ii,
											notepads: Dt,
											terminalFiles: Jt,
										});
									},
								)
							: this.composerDataService.updateComposerDataSetStore(
									Ye,
									(si) => {
										si("context", {
											fileSelections: ii,
											notepads: Dt,
											terminalFiles: Jt,
										});
									},
								);
				}
				async insertSelectionIntoComposer(Ye, ze) {
					if (!this.getComposer(Ye)) return;
					let It;
					ze?.origin === "editor"
						? (It = await this.getEditorCode())
						: ze?.origin === "terminal" && (It = await this.getTerminalText()),
						It &&
							this.addContextToLastFocused({
								composerId: Ye,
								contextType:
									ze?.origin === "terminal"
										? "terminalSelections"
										: "selections",
								value: It,
							});
				}
				async getEditorCode(Ye, ze) {
					return await (0, X.$Yfc)(
						this.aiService,
						this.dataScrubbingService,
						Ye,
						ze,
					);
				}
				isComposerEmpty(Ye) {
					const ze = this.getComposer(Ye);
					return ze
						? ze.conversation.length === 0 && ze.text.trim() === ""
						: !0;
				}
				isComposerConversationEmpty(Ye) {
					const ze = this.getComposer(Ye);
					return ze ? ze.conversation.length === 0 : !0;
				}
				isComposerContextUntouched(Ye) {
					const ze = this.getComposer(Ye);
					return ze ? ze.hasChangedContext !== !0 : !0;
				}
				isComposerUntouched(Ye) {
					return (
						this.isComposerEmpty(Ye) && this.isComposerContextUntouched(Ye)
					);
				}
				canComposerSubmit(Ye, ze) {
					const Xe = this.getComposer(Ye);
					if (!Xe) return !1;
					const It = this.composerDataService.getPendingUserDecisionGroup(Ye);
					if (Xe.status === "generating" && !ze && !It) return !1;
					const Lt = this.composerDataService.getComposerCapability(
						Ye,
						m.ComposerCapabilityRequest_ComposerCapabilityType.EDIT_TRAIL,
					);
					if (ze) {
						const Bt = Xe.conversation.find((Ut) => Ut.bubbleId === ze);
						if (!Bt) return !1;
						const Gt =
								(Bt.context?.editTrailContexts?.length ?? 0) > 0 ||
								(Xe.chatGenerationUUID === void 0 &&
									(Lt?.state?.().hasModifiedAnyModel ?? !1)),
							Mt =
								(Bt.context?.notepads?.length ?? 0) > 0 &&
								Xe.status !== "generating";
						return Bt.text.trim() !== "" || Gt || Mt;
					}
					const xt =
							(Xe.context.editTrailContexts?.length ?? 0) > 0 ||
							(Xe.chatGenerationUUID === void 0 &&
								(Lt?.state?.().hasModifiedAnyModel ?? !1)),
						Vt =
							(Xe.context.notepads?.length ?? 0) > 0 &&
							Xe.status !== "generating";
					return Xe.text.trim() !== "" || xt || Vt;
				}
				async close(Ye, ze) {
					const Xe = this.composerDataService.getComposerForceMode(Ye);
					if (
						(ze?.skipHiding || (this.hide(Ye), this.blur(Ye)),
						(this.composerViewsService.isShowing(Ye) && !ze?.skipHiding) ||
							Xe === "chat" ||
							Ye === this.composerDataService.selectedComposerId)
					)
						return;
					const It = await this.composerDataService.getComposerHandleById(Ye);
					if (!It) throw new Error("[composer] No composer data handle found");
					try {
						const Lt = this.composerDataService.getAllInlineDiffs(Ye);
						for (const xt of Lt) {
							if (xt?.composerMetadata?.version === void 0) {
								console.error("[composer] Inline diff has no version", xt);
								continue;
							}
							if (xt && "newTextLines" in xt && "originalTextLines" in xt) {
								const Vt = await this.composerUtilsService.computeLineDiffs(
										Ye,
										xt.uri,
										xt.newTextLines,
									),
									Bt = await this.composerUtilsService.computeLineDiffs(
										Ye,
										xt.uri,
										xt.originalTextLines,
									);
								Vt &&
									this.composerDataService.updateComposerCodeBlock(
										It,
										xt.uri,
										xt.composerMetadata.version,
										{ newModelDiffWrtV0: Vt, originalModelDiffWrtV0: Bt },
									);
							}
						}
						this.cacheAllDiffs(It),
							setTimeout(() => {
								this.saveFiles(
									Lt.map((xt) => xt.uri),
									{ force: !0 },
								);
							}, 100);
					} finally {
						It.dispose();
					}
				}
				handleOpenComposerPane(Ye, ze) {
					this.openComposer(Ye, { ...ze, view: "pane" });
				}
				handleOpenComposerEditor(Ye, ze) {
					this.openComposer(Ye, { ...ze, view: "editor" });
				}
				handleOpenComposerBar(Ye, ze) {
					this.openComposer(Ye, { ...ze, view: "bar" });
				}
				handleOpenComposer(Ye, ze) {
					switch (this.getComposerLocation(Ye)) {
						case "editor":
							this.handleOpenComposerEditor(Ye, ze);
							break;
						case "pane":
							this.handleOpenComposerPane(Ye, ze);
							break;
						case "bar":
							this.handleOpenComposerBar(Ye, ze);
							break;
					}
				}
				async openComposer(Ye, ze) {
					const Xe = this.composerDataService.getComposerForceMode(Ye),
						It = this.composerDataService.getSelectedIdByForceMode(Xe);
					if (ze?.insertSelection) {
						const Vt = this.terminalService.getActiveInstance()?.hasFocus ?? !1;
						await this.insertSelectionIntoComposer(Ye, {
							origin: Vt ? "terminal" : "editor",
						});
					}
					if (Ye === It) {
						await this.showAndFocus(Ye, ze);
						return;
					}
					if (Xe !== "chat") {
						if (
							this.composerDataService.selectedChatId === Ye &&
							!this.applicationComposerSettings.unification
						) {
							console.error(
								"[balta] For some reason, we are opening an edit composer but that same composer is already selected as a chat composer, for now we will just open the chat composer",
							);
							return;
						}
						this.composerDataService.setAllComposersData(
							"selectedComposerId",
							Ye,
						);
					} else {
						if (this.composerDataService.selectedComposerId === Ye) {
							console.error(
								"[balta] For some reason, we are opening a chat composer but that same composer is already selected as an edit composer, for now we will just open the edit composer",
							);
							return;
						}
						this.composerDataService.setAllComposersData("selectedChatId", Ye);
					}
					const Lt = await this.composerDataService.getComposerHandleById(Ye);
					if (!Lt) throw new Error("[composer] No composer data handle found");
					try {
						await this.showAndFocus(Ye, ze),
							Xe === "edit" &&
								(this._onDidOpenComposer.fire(),
								this.shouldCache(Lt) ||
									(await this.turnAllCachedCodeBlocksToDiffs(Lt),
									await this.reactivateApplyingCodeBlocks(Lt)));
					} finally {
						Lt.dispose();
					}
				}
				getIsNewConversationAgentic(Ye) {
					return Ye === "chat"
						? !1
						: this.reactiveStorageService.applicationUserPersistentStorage
								.composerState.defaultUseToolsInEdit === !0;
				}
				async createComposer(Ye) {
					Ye = { ...Ye, forceMode: Ye?.forceMode ?? "edit" };
					const Xe = this.terminalService.getActiveInstance()?.hasFocus ?? !1;
					this.applicationComposerSettings.unification &&
						(Ye.forceMode = "edit");
					const It = this.composerDataService.getSelectedIdByForceMode(
							Ye.forceMode,
						),
						Lt = this.composerDataService.getComposerData(It);
					if (this.shouldShowAcceptRejectAll(It) && Lt?.forceMode !== "chat") {
						const Jt = await this.prettyDialogService.openDialog({
							title: "Are you sure to create a new composer?",
							message: [
								{
									message:
										"You have changes that have not been accepted or rejected, and creating a new composer will undo these changes.",
								},
								{
									message:
										"Note: You can always come back to this composer later.",
									isDeemphasized: !0,
								},
							],
							cancelButton: { id: "cancel", label: "Cancel" },
							extraButtons: [
								{ id: "create_and_close", label: "Create and close changes" },
							],
							primaryButton: { id: "create", label: "Create and keep changes" },
						});
						if (Jt !== "create" && Jt !== "create_and_close") return;
						Jt === "create" && (await this.acceptAll(It));
					}
					if (
						!Ye?.ignoreEmptyCheck &&
						this.isComposerEmpty(It) &&
						(!Ye?.backgroundInfo || !!Lt?.backgroundInfo)
					) {
						await this.resetComposer(
							It,
							Ye?.partialState,
							Ye?.dontRefreshReactiveContext,
						),
							Ye?.insertSelection &&
								(await this.insertSelectionIntoComposer(It, {
									origin: Xe ? "terminal" : "editor",
								})),
							await this.showAndFocus(It, Ye);
						return;
					}
					const Bt = (0, y.$9g)();
					let Gt, Mt, Ut, ei;
					const mi = (0, _.getComposerCapabilities)(
							this.instantiationService,
							this.reactiveStorageService,
							Bt,
							[],
						),
						ii = Ye?.forceMode ?? "edit",
						Dt = {
							...(0, Q.createEmptyComposer)(Bt),
							...Ye?.partialState,
							backgroundInfo: Gt,
							capabilities: mi,
							forceMode: ii,
							isAgentic: this.getIsNewConversationAgentic(ii),
						};
					if (
						(this.composerDataService.appendComposer(Dt),
						Ye?.forceMode === "chat" &&
							this.composerDataService.selectedComposerId === Bt)
					) {
						console.error(
							"[balta] For some reason, we are opening a chat composer but that same composer is already selected as an edit composer, for now we will just exit early",
						);
						return;
					} else if (
						Ye?.forceMode !== "chat" &&
						this.composerDataService.selectedChatId === Bt &&
						!this.applicationComposerSettings.unification
					) {
						console.error(
							"[balta] For some reason, we are opening an edit composer but that same composer is already selected as a chat composer, for now we will just exit early",
						);
						return;
					}
					this.composerDataService.setAllComposersData(
						Ye?.forceMode === "chat" ? "selectedChatId" : "selectedComposerId",
						Bt,
					),
						await this.resetComposer(
							Bt,
							Ye?.partialState,
							Ye?.dontRefreshReactiveContext,
						),
						Ye?.insertSelection &&
							(await this.insertSelectionIntoComposer(Bt, {
								origin: Xe ? "terminal" : "editor",
							})),
						await this.showAndFocus(Bt, Ye);
				}
				async deleteComposer(Ye) {
					const ze = await this.composerDataService.getComposerHandleById(Ye);
					if (!ze) {
						console.error(
							"[composer] trying to delete non-existent composer",
							Ye,
						);
						return;
					}
					const Xe = this.composerDataService.getComposerForceMode(Ye),
						It = this.composerDataService.getSelectedIdByForceMode(Xe);
					try {
						const Lt = ze.data;
						if ((console.log("[composer] deleting composer", Ye), Ye === It)) {
							const xt =
								this.composerDataService.allComposersData.allComposers.filter(
									(Vt) =>
										Vt.composerId !== Ye &&
										this.composerDataService.getComposerForceMode(Vt) === Xe,
								);
							if (xt.length > 0) {
								const Vt = xt[0].composerId;
								this.openComposer(Vt, { skipShowAndFocus: !0 });
							} else {
								this.resetComposer(Ye), this.close(Ye);
								return;
							}
						}
						try {
							this.cleanUpComposer(Ye);
						} catch (xt) {
							console.error(`[composer] Error cleaning up composer ${Ye}:`, xt);
						}
						this.composerDataService.deleteComposer(Ye);
					} finally {
						ze?.dispose();
					}
				}
				async saveAll(Ye, ze) {
					this.analyticsService.trackEvent("composer.save_all");
					const Xe = this.composerDataService
						.getLatestCodeBlocksOfStatuses(Ye, Q.SAVE_RELATED_STATUSES)
						.map((It) => It.uri);
					await this.saveFiles(Xe, ze);
				}
				maybeUpdateFileSelectionsFromCmdI(Ye) {
					const ze = this.getComposer(Ye);
					if (!ze) return;
					const Xe = ze.context.fileSelections,
						It = ze.context.notepads ?? [],
						Lt = ze.context.terminalFiles ?? [],
						xt = this.editorService.getEditors(
							J.EditorsOrder.MOST_RECENTLY_ACTIVE,
						),
						Vt = new Set(xt.map((Dt) => Dt.groupId)),
						Bt = Array.from(Vt)
							.map((Dt) => this.editorGroupsService.getGroup(Dt)?.activeEditor)
							.filter(s.$tg),
						Gt = [],
						Mt = [],
						Ut = [];
					for (const Dt of Bt)
						!Dt?.resource ||
							!this.isCompatibleScheme(Dt.resource.scheme) ||
							(Dt.resource.scheme === o.Schemas.notepad &&
							Dt.resource &&
							!Mt.some((Jt) => Jt.notepadId === Dt.resource.path)
								? Mt.push({ notepadId: Dt.resource.path })
								: Dt.resource.scheme === o.Schemas.vscodeTerminal &&
										Dt.resource &&
										!Ut.some((Jt) =>
											b.$dh.isEqual(
												l.URI.revive(Jt.uri),
												l.URI.revive(Dt.resource),
											),
										)
									? Ut.push({ uri: Dt.resource })
									: Dt.resource &&
										!Gt.some((Jt) =>
											b.$dh.isEqual(
												l.URI.revive(Jt.uri),
												l.URI.revive(Dt.resource),
											),
										) &&
										(this.selectedContextService.shouldIgnoreUri(Dt.resource) ||
											Gt.push({ uri: Dt.resource })));
					const ei =
							Xe.length === Gt.length &&
							Xe.every((Dt) =>
								Gt.some((Jt) =>
									b.$dh.isEqual(l.URI.revive(Jt.uri), l.URI.revive(Dt.uri)),
								),
							),
						mi =
							It.length === Mt.length &&
							It.every((Dt) => Mt.some((Jt) => Jt.notepadId === Dt.notepadId)),
						ii =
							Lt.length === Ut.length &&
							Lt.every((Dt) =>
								Ut.some((Jt) =>
									b.$dh.isEqual(l.URI.revive(Jt.uri), l.URI.revive(Dt.uri)),
								),
							);
					if (ei && mi && ii) {
						const Dt = this.editorService.activeEditor;
						if (Dt && Dt.resource) {
							const Jt = [],
								si = [],
								Zt = [];
							Dt.resource.scheme === o.Schemas.notepad
								? Jt.push({ notepadId: Dt.resource.path })
								: Dt.resource.scheme === o.Schemas.vscodeTerminal
									? si.push({ uri: Dt.resource })
									: this.selectedContextService.shouldIgnoreUri(Dt.resource) ||
										Zt.push({ uri: Dt.resource }),
								this._ignoreChangesToContext.add(Ye),
								this.composerDataService.updateComposerDataSetStore(Ye, (ci) =>
									ci("context", {
										fileSelections: Zt,
										notepads: Jt,
										terminalFiles: si,
									}),
								);
						}
					} else
						Xe.length + It.length + Lt.length === 1 &&
							this.refreshReactiveContextItem(Ye);
				}
				isCompatibleScheme(Ye) {
					return [
						o.Schemas.file,
						o.Schemas.vscodeRemote,
						o.Schemas.vscodeNotebook,
						o.Schemas.notepad,
						o.Schemas.vscodeTerminal,
					].includes(Ye);
				}
				getCurrentFile() {
					const Ye = this.aiFileInfoService.getLastActiveFileEditor();
					if (!Ye) return;
					const ze = J.$A1.getOriginalUri(Ye.input);
					if (ze && this.isCompatibleScheme(ze.scheme))
						return { uri: ze, isCurrentFile: !0 };
				}
				getInlineDiffServiceLookalikePure(Ye, ze, Xe) {
					return {
						addLinesToDiff: (It, Lt) => {
							this.composerDataService.updateComposerDataSetStore(Ye, (Vt) =>
								Vt(
									"codeBlockData",
									ze.toString(),
									(Bt) => Bt.status === "applying",
									"intermediateModelLines",
									(Bt) => [...(Bt ?? []), ...Lt],
								),
							);
							const xt = this.getApplyingDiffsState(Ye);
							if (!this.shouldCache(Ye, { uri: ze, version: Xe }))
								if (xt.isReactivatingApplyingDiffs[ze.toString()])
									xt.applyingDiffsBacklogLines[ze.toString()] ||
										(xt.applyingDiffsBacklogLines[ze.toString()] = []),
										xt.applyingDiffsBacklogLines[ze.toString()].push(...Lt);
								else {
									if (!this.getComposer(Ye))
										throw new Error("[composer] composer not found");
									const Bt = this.composerDataService.getInlineDiff(Ye, ze);
									if (Bt) {
										const Gt = xt.applyingDiffsBacklogLines[ze.toString()];
										return (
											Gt &&
												Gt.length > 0 &&
												(console.log("[composer] backlog lines", Gt),
												(Lt = [...Gt, ...Lt]),
												(xt.applyingDiffsBacklogLines[ze.toString()] = [])),
											this.inlineDiffService.addLinesToDiff(Bt.id, Lt)
										);
									} else console.error("[composer] no diff id for uri", ze);
								}
						},
						addActiveDiff: async (It) => {
							const Lt = { stack: [], error: void 0, hasError: !1 };
							try {
								const xt = ms(
									Lt,
									(0, De.span)(
										"ComposerService.getInlineDiffServiceLookalikePure.addActiveDiff",
									),
									!1,
								);
								this.composerDataService.updateComposerDataSetStore(Ye, (Bt) =>
									Bt(
										"codeBlockData",
										ze.toString(),
										(Gt) => Gt.status === "applying",
										"intermediateModelLines",
										[],
									),
								);
								const Vt = this.getApplyingDiffsState(Ye);
								if (
									((Vt.applyingDiffsBacklogLines[ze.toString()] = []),
									(Vt.isReactivatingApplyingDiffs[ze.toString()] = !1),
									this.shouldCache(Ye, { uri: ze, version: Xe }))
								) {
									const Bt = (0, y.$9g)();
									return this.registerCachedCodeBlock(Ye, ze, Xe), { id: Bt };
								} else {
									const Bt = await this.inlineDiffService.addActiveDiff(It);
									return (
										this.composerDataService.updateComposerCodeBlock(
											Ye,
											ze,
											Xe,
											{ lastDiffId: Bt.id },
										),
										Bt
									);
								}
							} catch (xt) {
								(Lt.error = xt), (Lt.hasError = !0);
							} finally {
								ps(Lt);
							}
						},
						finishDiffSuccess: (It) => {
							const Lt = { stack: [], error: void 0, hasError: !1 };
							try {
								const xt = ms(
									Lt,
									(0, De.span)(
										"ComposerService.getInlineDiffServiceLookalikePure.finishDiffSuccess",
									),
									!1,
								);
								if (!this.shouldCache(Ye, { uri: ze, version: Xe })) {
									if (!this.getComposer(Ye))
										throw new Error("[composer] composer not found");
									const Bt = this.composerDataService.getInlineDiff(Ye, ze);
									if (Bt)
										return this.inlineDiffService.finishDiffSuccess(Bt.id);
									console.error("[composer] no diff id for uri", ze);
								}
							} catch (xt) {
								(Lt.error = xt), (Lt.hasError = !0);
							} finally {
								ps(Lt);
							}
						},
						cancelDiff: (It) => {
							const Lt = { stack: [], error: void 0, hasError: !1 };
							try {
								const xt = ms(
									Lt,
									(0, De.span)(
										"ComposerService.getInlineDiffServiceLookalikePure.cancelDiff",
									),
									!1,
								);
								if (!this.shouldCache(Ye, { uri: ze, version: Xe })) {
									if (!this.getComposer(Ye))
										throw new Error("[composer] composer not found");
									const Bt = this.composerDataService.getInlineDiff(Ye, ze);
									if (Bt) return this.inlineDiffService.cancelDiff(Bt.id);
									console.error("[composer] no diff id for uri", ze);
								}
							} catch (xt) {
								(Lt.error = xt), (Lt.hasError = !0);
							} finally {
								ps(Lt);
							}
						},
					};
				}
				isCodeBlockRegisteredAsCached(Ye, ze, Xe) {
					const It =
							!!this._uriToCachedCodeBlocks
								.get(ze.toString())
								?.some((xt) => xt.version === Xe && xt.composerId === Ye) ||
							!!this._uriToCachedCodeBlocksQueue
								.get(ze.toString())
								?.some((xt) => xt.version === Xe && xt.composerId === Ye),
						Lt = this.composerDataService.getComposerCodeBlock(
							Ye,
							ze,
							Xe,
						)?.isCached;
					return It && Lt;
				}
				async getTerminalText(Ye) {
					return await (0, X.$Zfc)(
						this.terminalService,
						this.dataScrubbingService,
						!1,
						Ye,
					);
				}
				getUndoRedoUri(Ye, ze) {
					return l.URI.from({
						scheme: "composer",
						path: `${Ye}${ze ? `:${ze}` : ""}`,
					});
				}
				addContext(Ye) {
					const {
						composerId: ze,
						contextType: Xe,
						value: It,
						uuid: Lt,
						addToUndoRedo: xt = !0,
						shouldShowPreview: Vt = !0,
					} = Ye;
					this.selectedContextService.addContext({
						contextType: Xe,
						value: It,
						setContext: (...Bt) => {
							this.composerDataService.updateComposerDataSetStore(ze, (Gt) =>
								Gt("context", ...Bt),
							);
						},
						getContext: () => {
							const Bt = this.getComposer(ze);
							if (!Bt) throw new Error("[composer] Composer not found");
							return Bt.context;
						},
						undoRedoUri: xt ? this.getUndoRedoUri(ze) : void 0,
						mention: Lt ? { uuid: Lt } : void 0,
					}),
						Vt &&
							setTimeout(() => {
								let Bt;
								const Gt = this.getComposer(ze);
								if (!Gt) throw new Error("[composer] Composer not found");
								(0, Se.$Ygc)(Xe) &&
									(Bt = Gt.context[Xe].findIndex((Mt) =>
										(0, Se.$1gc)(Xe, Mt, It),
									)),
									Bt !== -1 &&
										this._onShouldShowPreview.fire({
											composerId: ze,
											contextType: Xe,
											index: Bt,
										});
							});
				}
				removeAllListContext(Ye) {
					const {
							composerId: ze,
							bubbleId: Xe,
							contextType: It,
							addToUndoRedo: Lt = !0,
						} = Ye,
						xt = this.selectedContextService.removeAllListContext({
							contextType: It,
							setContext: (...Vt) => {
								Xe
									? this.composerDataService.updateComposerDataSetStore(
											ze,
											(Bt) =>
												Bt(
													"conversation",
													(Gt) => Gt.bubbleId === Xe,
													"context",
													...Vt,
												),
										)
									: this.composerDataService.updateComposerDataSetStore(
											ze,
											(Bt) => Bt("context", ...Vt),
										);
							},
							getContext: () => {
								const Vt = this.getComposer(ze);
								if (!Vt) throw new Error("[composer] Composer not found");
								if (Xe) {
									const Bt = this.composerDataService.getComposerBubble(ze, Xe);
									if (!Bt || !Bt.context)
										throw new Error("[composer] Bubble not found");
									return Bt.context;
								}
								return Vt.context;
							},
							undoRedoUri: Lt ? this.getUndoRedoUri(ze, Xe) : void 0,
						});
					return (
						this._onContextRemoved.fire({
							composerId: ze,
							contextType: It,
							removedMentionIds: xt.map((Vt) => Vt.uuid),
						}),
						xt
					);
				}
				removeContext(Ye) {
					const {
							composerId: ze,
							contextType: Xe,
							index: It,
							addToUndoRedo: Lt = !0,
						} = Ye,
						xt = this.selectedContextService.removeContext({
							contextType: Xe,
							setContext: (...Vt) => {
								this.composerDataService.updateComposerDataSetStore(ze, (Bt) =>
									Bt("context", ...Vt),
								);
							},
							getContext: () => {
								const Vt = this.getComposer(ze);
								if (!Vt) throw new Error("[composer] Composer not found");
								return Vt.context;
							},
							index: It,
							undoRedoUri: Lt ? this.getUndoRedoUri(ze) : void 0,
						});
					return (
						this._onContextRemoved.fire({
							composerId: ze,
							contextType: Xe,
							removedMentionIds: xt.map((Vt) => Vt.uuid),
						}),
						xt
					);
				}
				removeMention(Ye, ze) {
					this.selectedContextService.removeMention({
						uuid: ze,
						setContext: (...Xe) => {
							this.composerDataService.updateComposerDataSetStore(Ye, (It) =>
								It("context", ...Xe),
							);
						},
						getContext: () => {
							const Xe = this.getComposer(Ye);
							if (!Xe) throw new Error("[composer] Composer not found");
							return Xe.context;
						},
						undoRedoUri: this.getUndoRedoUri(Ye),
					});
				}
				addBubbleContext(Ye) {
					const {
						composerId: ze,
						bubbleId: Xe,
						contextType: It,
						value: Lt,
						uuid: xt,
						addToUndoRedo: Vt = !0,
					} = Ye;
					this.selectedContextService.addContext({
						contextType: It,
						value: Lt,
						setContext: (...Bt) => {
							this.composerDataService.updateComposerDataSetStore(ze, (Gt) =>
								Gt(
									"conversation",
									(Mt) => Mt.bubbleId === Xe,
									"context",
									...Bt,
								),
							);
						},
						getContext: () => {
							const Bt = this.composerDataService.getComposerBubble(ze, Xe);
							if (!Bt || !Bt.context)
								throw new Error("[composer] Bubble not found");
							return Bt.context;
						},
						undoRedoUri: Vt ? this.getUndoRedoUri(ze, Xe) : void 0,
						mention: xt ? { uuid: xt } : void 0,
					});
				}
				removeBubbleContext(Ye) {
					const {
							composerId: ze,
							bubbleId: Xe,
							contextType: It,
							index: Lt,
							addToUndoRedo: xt = !0,
						} = Ye,
						Vt = this.selectedContextService.removeContext({
							contextType: It,
							setContext: (...Bt) => {
								this.composerDataService.updateComposerDataSetStore(ze, (Gt) =>
									Gt(
										"conversation",
										(Mt) => Mt.bubbleId === Xe,
										"context",
										...Bt,
									),
								);
							},
							getContext: () => {
								const Bt = this.composerDataService.getComposerBubble(ze, Xe);
								if (!Bt || !Bt.context)
									throw new Error("[composer] Bubble not found");
								return Bt.context;
							},
							index: Lt,
							undoRedoUri: xt ? this.getUndoRedoUri(ze, Xe) : void 0,
						});
					return (
						this._onContextRemoved.fire({
							composerId: ze,
							bubbleId: Xe,
							contextType: It,
							removedMentionIds: Vt.map((Bt) => Bt.uuid),
						}),
						Vt
					);
				}
				removeBubbleMention(Ye, ze, Xe) {
					this.selectedContextService.removeMention({
						uuid: Xe,
						setContext: (...It) => {
							this.composerDataService.updateComposerDataSetStore(Ye, (Lt) =>
								Lt(
									"conversation",
									(xt) => xt.bubbleId === ze,
									"context",
									...It,
								),
							);
						},
						getContext: () => {
							const It = this.composerDataService.getComposerBubble(Ye, ze);
							if (!It || !It.context)
								throw new Error("[composer] Bubble not found");
							return It.context;
						},
						undoRedoUri: this.getUndoRedoUri(Ye, ze),
					});
				}
				resetContext(Ye, ze) {
					if (!this.getComposer(Ye)) {
						console.error(`[composer] No composer found for ID: ${Ye}`);
						return;
					}
					for (const It of Se.$Xgc)
						(0, Se.$Ygc)(It)
							? this.removeAllListContext({
									composerId: Ye,
									bubbleId: ze,
									contextType: It,
									addToUndoRedo: !1,
								})
							: ze
								? this.removeBubbleContext({
										composerId: Ye,
										bubbleId: ze,
										contextType: It,
										addToUndoRedo: !1,
									})
								: this.removeContext({
										composerId: Ye,
										contextType: It,
										addToUndoRedo: !1,
									});
					ze || this.updateComposer(Ye, { hasChangedContext: !1 }),
						this.refreshReactiveContextItem(Ye, ze, !0),
						console.log(`[composer] Reset context for composer ID: ${Ye}`);
				}
				addContextToLastFocused(Ye) {
					const ze = this.getComposer(Ye.composerId);
					ze &&
						(ze.lastFocusedBubbleId
							? this.addBubbleContext({
									...Ye,
									bubbleId: ze.lastFocusedBubbleId,
								})
							: this.addContext({ ...Ye }));
				}
				async checkoutToCheckpoint(Ye, ze, Xe) {
					const It = this.composerDataService.getComposerFromIdOrHandle(Ye);
					if (!It) {
						console.error("[composer] No composer found for the given ID");
						return;
					}
					const Lt = It.composerId,
						xt = typeof ze == "string";
					if (xt && It.currentBubbleId === ze) {
						console.log("[composer] Already at the target message");
						return;
					}
					let Vt;
					if (
						xt &&
						((Vt = It.conversation.findIndex((Dt) => Dt.bubbleId === ze)),
						Vt === -1)
					) {
						console.error(
							"[composer] No message found with the given bubble ID or message has no checkpoint",
						);
						return;
					}
					if (
						await this.composerUtilsService.isCheckpointSameAsCurrent(Lt, ze)
					) {
						console.log(
							"[composer] Checkout to message is the same as current",
						),
							this.cancelChat(Lt),
							this.updateComposer(Lt, {
								currentBubbleId: xt ? ze : void 0,
								editingBubbleId: xt ? ze : void 0,
							}),
							setTimeout(() => {
								this.getPrevEditingBubbleInputDelegate(Lt).focus();
							}, 0);
						return;
					}
					if (
						!Xe?.skipDialog &&
						xt &&
						(await this.prettyDialogService.openDialog({
							title: "Revert file changes?",
							message:
								'This will undo all changes after this point. You can restore them via "Checkout to latest changes" at the end of the conversation.',
							cancelButton: { id: "cancel", label: "Cancel" },
							primaryButton: { id: "continue", label: "Continue" },
						})) !== "continue"
					)
						return;
					this.cancelChat(Lt);
					let Gt = new Set(),
						Mt = new Map(),
						Ut = new Set();
					const ei = It.currentBubbleId
						? It.conversation.findIndex(
								(Dt) => Dt.bubbleId === It.currentBubbleId,
							)
						: It.conversation.length;
					let mi = !xt;
					if (
						(Vt && (mi = Vt > ei),
						this.analyticsService.trackEvent("composer.checkout_to_message", {
							messageIndex: Vt,
							isMovingForward: mi,
						}),
						It.currentBubbleId === void 0)
					) {
						const Dt = await this.composerUtilsService.createCurrentCheckpoint(
							Lt,
							It.latestCheckpoint,
						);
						if (!Dt) return;
						this.updateComposer(Lt, { latestCheckpoint: Dt });
					} else {
						const Dt = It.conversation.find(
							(Jt) => Jt.bubbleId === It.currentBubbleId,
						);
						if (Dt) {
							const Jt = Dt.checkpoint,
								si = await this.composerUtilsService.createCurrentCheckpoint(
									Lt,
									Jt,
								);
							if (!si) return;
							this.composerDataService.updateComposerDataSetStore(Lt, (Zt) =>
								Zt(
									"conversation",
									(ci) => ci.bubbleId === It.currentBubbleId,
									"checkpoint",
									si,
								),
							);
						}
					}
					const ii = xt ? It.conversation[Vt].checkpoint : ze;
					if (!ii)
						throw new Error(
							"[composer] No checkpoint found for the given bubble ID",
						);
					if (xt)
						({
							filesToRevert: Gt,
							intermediateFiles: Mt,
							foldersToDelete: Ut,
						} = this.composerUtilsService.getFilesToRevertForCheckpoint(
							Lt,
							Vt,
							ei,
							ii,
						));
					else {
						const Dt = new Set(
							ii.activeInlineDiffs?.map((Jt) => Jt.uri.toString()) ?? [],
						);
						Gt = new Set(
							ii.files
								.map((Jt) => Jt.uri.toString())
								.filter((Jt) => !Dt.has(Jt)),
						);
					}
					for (const Dt of Gt)
						try {
							const Jt = l.URI.parse(Dt);
							let si;
							if (ii.files.some((Zt) => Zt.uri.toString() === Dt))
								si = ii.files.find((Zt) => Zt.uri.toString() === Dt);
							else {
								const Zt = Mt.get(Dt);
								Zt &&
									(si = Zt.checkpoint.files.find(
										(ci) => ci.uri.toString() === Dt,
									));
							}
							if (si) {
								if (si.isNewlyCreated)
									await this.deleteFile(Jt),
										console.log(`[composer] Deleted newly created file ${Dt}`);
								else {
									await this.createNewFileAndMaybeFolder(Lt, si.uri, !0);
									const ri = (
											await this.composerDataService.getMaybeCachedModelReference(
												Lt,
												Jt,
											)
										).object.textEditorModel,
										$i = ri.getLinesContent(),
										Wt =
											this.composerUtilsService.getCodeBlockLinesByDiff(
												Lt,
												Jt,
												si.originalModelDiffWrtV0 ?? [],
											) ?? [];
									if (Wt.length === 0) {
										console.error(
											`[composer] Empty originalModelLines for ${Jt.toString()}`,
										);
										continue;
									}
									($i.length !== Wt.length ||
										$i.join(`
`) !==
											Wt.join(`
`)) &&
										(ri.setValue(
											Wt.join(`
`),
										),
										await this.saveFile(Jt, {
											force: !0,
											waitForEditorToOpen: !0,
											overwrite: !0,
										}));
								}
								const Zt =
									this.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
										(ci) => ci.uri.toString() === Dt,
									);
								Zt && this.inlineDiffService.remove(Zt.id),
									console.log(
										`[composer] Processed file ${Dt} for revert operation`,
									);
							}
						} catch (Jt) {
							console.error(`[composer] Error processing file ${Dt}:`, Jt);
						}
					for (const Dt of Ut)
						try {
							await this.deleteFolder(l.URI.parse(Dt)),
								console.log(`[composer] Deleted newly created folder ${Dt}`);
						} catch (Jt) {
							console.error(`[composer] Error deleting folder ${Dt}:`, Jt);
						}
					for (const Dt of ii.nonExistentFiles)
						await this.deleteFile(Dt.uri),
							console.log(
								`[composer] Deleted non existent file ${Dt.uri.toString()}`,
							);
					this.updateComposer(Lt, {
						currentBubbleId: xt ? ze : void 0,
						editingBubbleId: xt ? ze : void 0,
						newlyCreatedFiles: [...ii.inlineDiffNewlyCreatedResources.files],
						newlyCreatedFolders: [
							...ii.inlineDiffNewlyCreatedResources.folders,
						],
					}),
						setTimeout(() => {
							this.getPrevEditingBubbleInputDelegate(Lt).focus();
						}, 0),
						ii.activeInlineDiffs.forEach(async (Dt) => {
							const { uri: Jt, version: si } = Dt;
							await this.turnApplyToInlineDiff(Lt, Jt, si, {
								setOriginalModelLines: !0,
							});
						}),
						console.log(
							`[composer] Completed reverting to ${xt ? "message " + ze : "checkpoint"}`,
						);
				}
				async checkoutToLatest(Ye) {
					const ze = this.composerDataService.getComposerFromIdOrHandle(Ye);
					if (!ze) {
						console.error("[composer] No composer found for the given ID");
						return;
					}
					if (!ze.latestCheckpoint) {
						console.error(
							"[composer] No latest checkpoint found for the composer",
						);
						return;
					}
					return this.checkoutToCheckpoint(Ye, ze.latestCheckpoint);
				}
				async syncComposerWorktreeBranch(Ye) {
					const ze = this.composerDataService.getComposerData(Ye);
					if (!ze || !ze.backgroundInfo)
						throw new Error(
							"[composer] No composer found for the given ID, or no background info",
						);
					const { localBranchName: Xe, worktreePath: It } = ze.backgroundInfo;
					try {
						await this.acceptAllCached(Ye);
						const Lt = Object.keys(ze.codeBlockData);
						for (const xt of Lt) {
							const Vt = ze.codeBlockData[xt],
								Bt = Vt[Vt.length - 1],
								Mt = this.composerUtilsService
									.getCodeBlockNewModelLines(Ye, l.URI.parse(xt), Bt.version)
									?.join(`
`);
							!Mt ||
								Mt.length === 0 ||
								(await this.fileService.writeFile(
									l.URI.parse(xt),
									n.$Te.fromString(Mt),
								));
						}
						await this.gitContextService.syncWorktreeToBranch(It, Xe);
					} catch (Lt) {
						console.error(
							`[composer] Error syncing worktree for composer ${ze.composerId}:`,
							Lt,
						);
					}
				}
				async checkIfBackgroundComposerIsCorrupted(Ye) {
					const ze = this.getComposer(Ye);
					if (!ze || !ze.backgroundInfo) return !1;
					const { worktreePath: Xe } = ze.backgroundInfo;
					return !(await this.fileService.exists(l.URI.parse(Xe)));
				}
				isBackground(Ye) {
					return (
						this.composerDataService.getComposerFromIdOrHandle(Ye)
							?.backgroundInfo !== void 0
					);
				}
				getModelDetails(Ye) {
					const ze = this.aiService.getModelDetails({
							specificModelField: Ye ?? "composer",
						}),
						Xe = ["claude-3.5-sonnet", "claude-3-5-sonnet-20241022"];
					return ze.apiKey === void 0 &&
						this.reactiveStorageService.applicationUserPersistentStorage
							.turboModeOptions.useTurboMode === !0 &&
						ze.modelName !== void 0 &&
						Xe.includes(ze.modelName)
						? new a.$Zs({ ...ze, modelName: "claude-3-5-sonnet-turbo" })
						: ze;
				}
				showInfoBox(Ye) {
					this.reactiveStorageService.setNonPersistentStorage(
						"composerState",
						"infoBoxMessage",
						Ye,
					);
				}
				getAllCachedCodeBlocks(Ye) {
					const ze = this.getComposer(Ye);
					if (!ze) throw Error("[composer] composer doesn't exist");
					const { codeBlockData: Xe } = ze;
					return Object.values(Xe)
						.flat()
						.filter(({ isCached: Lt }) => Lt === !0);
				}
				async readFileContents(Ye) {
					try {
						return (await this.fileService.readFile(Ye)).value.toString();
					} catch (ze) {
						return console.error("Error reading file:", ze), "";
					}
				}
				async getSortedCandidateFiles(Ye, ze) {
					const Xe = this.getComposer(Ye);
					if (!Xe) return [];
					const It = Xe.text,
						Lt = ze?.skipSemSearch ?? !1,
						[xt, Vt, Bt, Gt, Mt] = await Promise.all([
							this.recentFilesTrackerService.getRecentlyViewedFiles(ue.$h0b),
							Lt
								? Promise.resolve([])
								: this.repositoryService.parallelSearch(It, 30, 15, {
										raceNRequests: 6,
										fast: !0,
									}),
							Xe?.gitGraphFileSuggestions?.length
								? Promise.resolve(Xe.gitGraphFileSuggestions)
								: this.composerDataService.getContextGraphFilesFromFileSelections(
										Ye,
									),
							this.everythingProviderService.onlyLocalProvider?.runCommand(
								V.EditHistoryActions.CompileGlobalDiffTrajectories,
								{},
							),
							this.aiService.aiClient(),
						]),
						Ut = Vt.sort((Zt, ci) => ci.score - Zt.score)
							.map((Zt) => {
								if (Zt.codeBlock)
									return {
										uri: this.workspaceContextService.resolveRelativePath(
											Zt.codeBlock.relativeWorkspacePath,
										),
										score: Zt.score,
									};
							})
							.filter(s.$tg)
							.slice(0, ue.$i0b);
					if (!Xe) return [];
					const ei =
							Xe.context.fileSelections.length > 0
								? l.URI.revive(Xe.context.fileSelections[0].uri)
								: void 0,
						[mi, ii] = ei
							? await Promise.all([
									this.readFileContents(ei),
									{
										line: this.editorService.activeTextEditorControl?.getPosition()
											?.lineNumber,
										column:
											this.editorService.activeTextEditorControl?.getPosition()
												?.column,
									},
								])
							: [void 0, void 0],
						Dt = ei
							? {
									relativeWorkspacePath:
										this.workspaceContextService.asRelativePath(ei),
									contents: mi,
									cursorPosition: ii,
								}
							: void 0,
						Jt = [
							{ text: Xe.text, type: d.ConversationMessage_MessageType.HUMAN },
						],
						si =
							(Xe.text === void 0 || Xe.text.trim().length === 0) &&
							Xe.context.fileSelections.length === 1;
					return await (0, ue.$l0b)(
						Gt,
						Bt,
						xt,
						Ut,
						si,
						Dt,
						Jt,
						Mt,
						this.workspaceContextService,
						this.fileService,
					);
				}
				shouldRenameComposer(Ye) {
					const ze = Ye.conversation.filter(
						(Xe) => Xe.type === d.ConversationMessage_MessageType.AI,
					).length;
					return ze >= 1 && (!Ye.name || ze === 1);
				}
				async renameComposer(Ye) {
					const ze = this.getComposer(Ye);
					if (!(!ze || !this.shouldRenameComposer(ze)))
						try {
							const It = await (await this.aiService.aiClient()).nameTab({
								messages: ze.conversation,
							});
							if (It.name)
								await this.composerDataService.updateComposerDataAsync(
									Ye,
									(Lt) => Lt("name", It.name),
								);
							else {
								const Lt = ze.conversation[0];
								Lt &&
									Lt.type === d.ConversationMessage_MessageType.HUMAN &&
									(await this.composerDataService.updateComposerDataAsync(
										Ye,
										(xt) =>
											xt(
												"name",
												Lt.text
													.trim()
													.split(`
`)[0]
													.split(" ")
													.slice(0, 10)
													.join(" ") ?? "",
											),
									));
							}
						} catch (Xe) {
							console.error("Error renaming composer", Xe);
						}
				}
				maybeRunOnComposerSettled(Ye) {
					return this.isComposerSettled(Ye)
						? (this.onComposerSettled(Ye), !0)
						: !1;
				}
				isComposerSettled(Ye) {
					const ze = this.getComposer(Ye);
					if (!ze) return !0;
					const Xe = (
							this.composerDataService.getLastAiBubble(Ye)?.codeBlocks ?? []
						)
							.map((Vt) =>
								this.composerDataService.getComposerCodeBlock(
									Ye,
									Vt.uri,
									Vt.version,
								),
							)
							.filter(s.$tg),
						It = Xe.some((Vt) => Vt.status === "applying"),
						Lt = Xe.some((Vt) => Vt.status === "cancelled"),
						xt = ze.status === "generating";
					return !It && !xt && !Lt;
				}
				async onComposerSettled(Ye) {
					let ze = this.getComposer(Ye);
					if (!ze || ze.status === "aborted") return;
					console.log("[composer] on composer settled", Ye);
					const Xe = this.composerDataService.getLastHumanBubbleId(Ye),
						It = Xe
							? this.composerDataService.getComposerBubble(Ye, Xe)
							: void 0,
						Lt = this.composerDataService.getLastBubbleId(Ye),
						xt = this.composerDataService.getLastBubble(Ye);
					if (!Xe || !It) {
						console.error(
							"[composer] on settled was run without a previous human bubble",
						);
						return;
					}
					if (!Lt || !xt || xt.type !== d.ConversationMessage_MessageType.AI) {
						console.error(
							"[composer] on settled was run without a previous ai bubble",
						);
						return;
					}
					this.composerDataService.updateComposerDataSetStore(Ye, (Bt) =>
						Bt(
							"conversation",
							(Gt) => Gt.bubbleId === Lt,
							"timingInfo",
							(Gt) => {
								if (Gt) return { ...Gt, clientSettleTime: Date.now() };
							},
						),
					);
					const Vt = {
						composerId: Ye,
						humanBubbleId: Xe,
						aiBubbleId: Lt,
						isCapabilityIteration: !!It.isCapabilityIteration,
					};
					try {
						(await this.composerUtilsService.runCapabilitiesForProcess(
							Ye,
							"composer-settled",
							Vt,
						))
							? this.submitChatMaybeAbortCurrent(Ye, "", {
									isCapabilityIteration: !0,
								})
							: this.isComposerSettled(Ye) && this.onComposerDone(Ye, Vt);
					} catch (Bt) {
						console.error(
							"[composer] error running capabilities for composer-settled",
							Bt,
						);
					}
				}
				async onComposerDone(Ye, ze) {
					await this.composerUtilsService.runCapabilitiesForProcess(
						Ye,
						"composer-done",
						ze,
					);
				}
				dispose() {
					super.dispose();
				}
				registerNewCodeBlock(Ye, ze, Xe, It, Lt) {
					const xt = this.getComposer(Ye);
					if (!xt)
						throw new Error("[composer] No composer found for the given ID");
					const Vt = Lt?.bubbleId
							? xt.conversation.findIndex((Jt) => Jt.bubbleId === Lt.bubbleId)
							: xt.conversation.length - 1,
						Bt = xt.conversation[Vt];
					if (!Bt || Bt.type !== d.ConversationMessage_MessageType.AI)
						throw new Error("[composer] No AI message found");
					const Gt = ze.toString(),
						Mt = Bt.codeBlocks?.filter((Jt) => Jt.uri.toString() === Gt) ?? [],
						Ut = this.composerDataService.getLatestCodeBlockVersionForMessage(
							Ye,
							ze,
							Vt,
							It,
						);
					let ei,
						mi = [];
					const ii = Mt.findIndex((Jt) => Jt.codeBlockIdx > It);
					ii === -1
						? (ei = Ut + 1)
						: ((ei = Mt[ii].version),
							(mi = Mt.slice(ii).map((Jt) => ({
								version: Jt.version,
								codeBlockIdx: Jt.codeBlockIdx,
								messageIdx: Vt,
							}))));
					for (let Jt = Vt + 1; Jt < xt.conversation.length; Jt++) {
						const si =
							xt.conversation[Jt].codeBlocks?.filter(
								(Zt) => Zt.uri.toString() === Gt && Zt.version >= ei,
							) ?? [];
						mi.push(
							...si.map((Zt) => ({
								version: Zt.version,
								codeBlockIdx: Zt.codeBlockIdx,
								messageIdx: Jt,
							})),
						);
					}
					xt.status !== "generating" &&
						!Lt?.ignoreTurningCodeBlockToCodePill &&
						this._onTurningCodeBlockToCodePill.fire({
							uri: ze,
							version: ei,
							messageIndex: Vt,
						});
					for (let Jt = mi.length - 1; Jt >= 0; Jt--) {
						const { version: si, codeBlockIdx: Zt, messageIdx: ci } = mi[Jt];
						this.updateCodeBlockVersion(Ye, ze, si, si + 1, Zt, ci);
					}
					const Dt = {
						uri: ze,
						content: Xe,
						version: ei,
						status: Lt?.status ?? "none",
						isNotApplied: Lt?.isNotApplied,
						languageId: Lt?.languageId,
						codeBlockIdentifier: Lt?.codeBlockIdentifier,
					};
					return (
						this.composerDataService.updateComposerDataSetStore(Ye, (Jt) =>
							Jt("codeBlockData", Gt, (si) => {
								const Zt = [...(si || [])],
									ci = Zt.findIndex((ri) => ri.version >= ei);
								return ci === -1 ? Zt.push(Dt) : Zt.splice(ci, 0, Dt), Zt;
							}),
						),
						this.composerDataService.updateComposerDataSetStore(Ye, (Jt) =>
							Jt("conversation", Vt, "codeBlocks", (si) => {
								const Zt = [...(si || [])],
									ci = Zt.findIndex(($i) => $i.codeBlockIdx > It),
									ri = { uri: ze, version: ei, codeBlockIdx: It };
								return ci === -1 ? Zt.push(ri) : Zt.splice(ci, 0, ri), Zt;
							}),
						),
						this.composerDataService.updateComposerDataSetStore(Ye, (Jt) =>
							Jt("tabs", (si) => {
								const Zt = { type: "code", uri: ze, version: ei },
									ci = si.findIndex(
										(ri) => ri.type === "code" && ri.uri.toString() === Gt,
									);
								return (
									ci !== -1 && si.splice(ci, 1),
									[si[0], si[1], Zt, ...si.slice(2)]
								);
							}),
						),
						this.composerDataService.getComposerForceMode(Ye) !== "chat" &&
							Dt.version === 0 &&
							xt.originalModelLines[Gt] === void 0 &&
							this.composerUtilsService.getContentsOfFile(Ye, ze).then((si) => {
								(si = si ?? [" "]),
									this.composerDataService.updateComposerDataSetStore(
										Ye,
										(Zt) => Zt("originalModelLines", Gt, si),
									);
							}),
						Dt
					);
				}
				updateCodeBlockVersion(Ye, ze, Xe, It, Lt, xt) {
					if (!this.getComposer(Ye))
						throw new Error("[composer] No composer found for the given ID");
					const Bt = ze.toString();
					this.composerDataService.updateComposerDataSetStore(Ye, (Gt) =>
						Gt(
							"codeBlockData",
							Bt,
							(Mt) =>
								Mt?.map((Ut) =>
									Ut.version === Xe ? { ...Ut, version: It } : Ut,
								) ?? [],
						),
					),
						this.composerDataService.updateComposerDataSetStore(Ye, (Gt) =>
							Gt(
								"conversation",
								(Mt, Ut) => Ut === xt,
								"codeBlocks",
								(Mt) =>
									Mt?.map((Ut) =>
										Ut.uri.toString() === Bt &&
										Ut.version === Xe &&
										Ut.codeBlockIdx === Lt
											? { ...Ut, version: It }
											: Ut,
									) ?? [],
							),
						);
				}
				async openDiffEditor(Ye, ze) {
					const Xe = this.getComposer(Ye);
					if (!Xe) return;
					const It = Xe.tabs.find(
						(xt) => xt.type === "code" && xt.uri.toString() === ze.toString(),
					);
					if (!It) return;
					const Lt = this.editorService.findEditors({
						typeId: re.ComposerDiffEditorInput.ID,
						resource: ze,
					});
					if (Lt.length > 0) await this.editorService.openEditor(Lt[0].editor);
					else {
						const xt = Date.now(),
							Vt = l.URI.parse(`inmemory://diff/original/${xt}`),
							Bt =
								this.languageService.createByLanguageNameOrFilepathOrFirstLine(
									null,
									It.uri,
									void 0,
								);
						if (!Bt) return;
						const Gt = Xe.codeBlockData[ze.toString()]?.find(
								(ci) => ci.version === It.version,
							),
							Ut = (
								this.composerUtilsService.getCodeBlockLinesByDiff(
									Xe.composerId,
									ze,
									Gt?.originalModelDiffWrtV0 ?? [],
								) ?? []
							).join(`
`),
							ei = this.modelService.createModel(Ut, Bt, Vt),
							mi = this.instantiationService.createInstance(
								W.$S1b,
								Vt,
								"Original",
								void 0,
								Bt.languageId,
								Ut,
							),
							ii = this.instantiationService.createInstance(
								ae.$nec,
								ze,
								void 0,
								void 0,
								void 0,
								void 0,
								void 0,
								void 0,
							),
							Dt = this.composerDataService.getLatestCodeBlockVersion(
								Xe.composerId,
								ze,
							),
							Jt = It.version,
							si = this.instantiationService.createInstance(
								re.ComposerDiffEditorInput,
								`Review: ${this.labelService.getUriBasenameLabel(ze)}`,
								`${Jt + 1}/${Dt + 1}`,
								mi,
								ii,
								void 0,
							);
						await this.editorGroupsService.activeGroup.openEditor(si),
							si.register(this.D(ei)),
							si.register(this.D(ii)),
							si.register(
								this.D({
									dispose: () => {
										this.closeDiffEditor(ze);
									},
								}),
							);
					}
				}
				async closeDiffEditor(Ye) {
					const ze = this.editorService.findEditors({
						typeId: re.ComposerDiffEditorInput.ID,
						resource: Ye,
					});
					for (const Xe of ze) await this.editorService.closeEditor(Xe);
				}
				async openOrUpdateMultiDiffEditor(Ye) {
					const ze = this.composerDataService.selectedComposer;
					if (!ze) return;
					const Xe = this.composerUtilsService.constructDiffResources(
							ze.composerId,
						),
						It = this.editorService.findEditors({
							typeId: pe.$Lnc.ID,
							resource: Q.MULTI_DIFF_SOURCE,
						});
					if (Xe.length === 0) {
						It.length > 0 &&
							(await this.editorService.closeEditor({
								editor: It[0].editor,
								groupId: this.editorGroupsService.activeGroup.id,
							}));
						return;
					}
					const Lt = pe.$Lnc.fromResourceMultiDiffEditorInput(
						{
							label: "Review: Active Composer",
							resources: Xe,
							multiDiffSource: Q.MULTI_DIFF_SOURCE,
						},
						this.instantiationService,
					);
					It.length > 0
						? this.editorService.activeEditor === It[0].editor
							? await this.editorService.replaceEditors(
									[{ editor: It[0].editor, replacement: Lt }],
									this.editorGroupsService.activeGroup,
								)
							: (await this.editorService.closeEditor({
									editor: It[0].editor,
									groupId: this.editorGroupsService.activeGroup.id,
								}),
								await this.editorService.openEditor(Lt, {
									inactive: !!Ye?.skipOpen,
									pinned: !0,
								}))
						: Ye?.skipOpen ||
							(await this.editorService.openEditor(Lt, {
								inactive: !!Ye?.skipOpen,
								pinned: !0,
							}));
				}
				showComposerHistory() {
					this.reactiveStorageService.setNonPersistentStorage(
						"composerState",
						"shouldShowComposerHistory",
						!0,
					),
						this.composerViewsService.getComposerLocation(
							this.composerDataService.selectedComposerId,
						) !== "pane" && this.viewsService.openView(Me.$FX);
				}
				showChatHistory() {
					this.reactiveStorageService.setNonPersistentStorage(
						"composerState",
						"shouldShowChatHistory",
						!0,
					),
						this.composerViewsService.getComposerLocation(
							this.composerDataService.selectedChatId,
						) === "editor" && this.viewsService.openView(Me.$GX);
				}
				async insertIntoChat(Ye, ze) {
					this.updateComposer(Ye, { text: ze.message, richText: ze.message }),
						this.getInputDelegate(Ye).focus(),
						await this.submitChatMaybeAbortCurrent(
							this.composerDataService.selectedChatId,
							ze.message,
							{ usesCodebase: ze.isCodebaseContext },
						);
				}
				async applyCachedCodeBlock(Ye, ze, Xe, It) {
					const Lt = It?.applyToCurrentFile
						? this.editorService.activeEditor?.resource
						: ze;
					if (!Lt) return;
					let xt = this.composerDataService.getComposerCodeBlock(Ye, ze, Xe);
					if (
						!(!xt || !xt.isNotApplied) &&
						(xt.uri.toString() !== Lt.toString() &&
							(Xe = this.composerUtilsService.changeCodeBlockUri(
								Ye,
								ze,
								Lt,
								Xe,
							)),
						(xt = this.composerDataService.getComposerCodeBlock(Ye, Lt, Xe)),
						!!xt)
					) {
						if (
							(this.unregisterCachedCodeBlock(Ye, Lt, Xe),
							this.applicationComposerSettings.unification)
						) {
							if (xt.status === "applying")
								await this.reactivateApplyingCodeBlock(Ye, xt);
							else {
								let Vt = !1;
								const Bt = !!xt.newModelDiffWrtV0,
									Gt =
										this.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
											(ei) => ei.uri.toString() === Lt.toString(),
										)?.id,
									Mt = await this.composerUtilsService.getContentsOfFile(
										Ye,
										Lt,
									),
									Ut = this.composerUtilsService.getCodeBlockOriginalModelLines(
										Ye,
										Lt,
										Xe,
									);
								Mt &&
									Ut &&
									Mt.join(`
`) !==
										Ut.join(`
`) &&
									(Vt = !0),
									Bt && !Vt
										? Gt
											? await this.turnApplyToInlineDiff(Ye, ze, Xe, {
													shouldChain: !0,
												})
											: await this.turnApplyToInlineDiff(Ye, ze, Xe)
										: this.runFastApplyOnCodeBlock(Ye, xt, {
												range: It?.range,
											});
							}
							return;
						}
						this.composerDataService.updateComposerCodeBlock(Ye, Lt, Xe, {
							newModelDiffWrtV0: void 0,
							originalModelDiffWrtV0: void 0,
							intermediateModelLines: void 0,
						}),
							this.runFastApplyOnCodeBlock(Ye, xt, { range: It?.range });
					}
				}
				handleAiEditToolCallFinished() {
					this._onDidFinishAiEditToolCall.fire();
				}
				getDebugInfo() {
					return {
						shouldOpenNextAppliedFile: this._shouldOpenNextAppliedFile,
						composerEditingStates: this._composerEditingStates,
						isTurningCachedCodeBlocksToDiffs:
							this._isTurningCachedCodeBlocksToDiffs,
						fileWatchers: this._fileWatchers,
						uriToCachedCodeBlocks: this._uriToCachedCodeBlocks,
						uriToCachedCodeBlocksQueue: this._uriToCachedCodeBlocksQueue,
						composerApplyingDiffsState: this._composerApplyingDiffsState,
						ignoreChangesToContext: this._ignoreChangesToContext,
						fastApplyQueue: this._fastApplyQueue,
						settings: this.applicationComposerSettings,
					};
				}
				async formatDiffHistory(Ye, ze, Xe, It) {
					if (Xe.getValueLength() > kt) return;
					const Lt =
						await this.everythingProviderService.onlyLocalProvider?.runCommand(
							V.ComposerEditHistoryActions.FormatDiffHistory,
							{
								uri: Xe.uri.toString(),
								changes: Ye.changes,
								behavior: { type: "whitespace compatible" },
								modelVersion: Xe.getVersionId(),
								eol: It,
							},
						);
					if (Lt === void 0)
						throw new Error(
							"Format Diff History not registered in extension host",
						);
					return Lt;
				}
				async registerModelListenerToEditorModel(Ye, ze) {
					const Xe = this.workspaceContextService.asRelativePath(ze.uri);
					if (
						[
							"vscode-notebook-cell",
							"file",
							"vscode-remote",
							"untitled",
							"inmemory-anysphere",
						].includes(ze.uri.scheme)
					) {
						if (
							(await this.everythingProviderService.onlyLocalProvider?.runCommand(
								V.ComposerEditHistoryActions.GetModelValue,
								{ relativePath: Xe },
							)) === void 0
						) {
							let Lt = ze.getValue();
							if (Lt !== void 0) {
								const xt =
									await this.everythingProviderService.onlyLocalProvider?.runCommand(
										V.ComposerEditHistoryActions.InitModel,
										{
											relativePath: Xe,
											currentModelValue: Lt,
											modelVersion: ze.getVersionId(),
										},
									);
							}
						}
						this.D(
							ze.onDidChangeContent(async (Lt) => {
								try {
									await this.formatDiffHistory(Lt, Ye, ze, ze.getEOL());
								} catch (xt) {
									console.error(
										"[ComposerService] formatDiffHistory error",
										xt,
									);
								}
							}),
						);
					}
				}
				async registerEditorListenersToEditor(Ye) {
					const ze = Ye.getId();
					this.editorListeners.set(ze, [
						Ye.onDidDispose(() => {
							this.editorListeners.get(ze)?.forEach((Xe) => Xe.dispose()),
								this.editorListeners.delete(ze);
						}),
					]);
					try {
						this.editorListeners.has(ze) || this.editorListeners.set(ze, []);
						const Xe = Ye.getModel();
						Xe !== null &&
							(await this.registerModelListenerToEditorModel(Ye, Xe)),
							this.editorListeners.has(ze) || this.editorListeners.set(ze, []),
							this.editorListeners.get(ze).push(
								this.D(
									Ye.onDidChangeModel(() => {
										const It = Ye.getModel();
										It !== null &&
											this.registerModelListenerToEditorModel(Ye, It);
									}),
								),
							),
							this.editorListeners.has(ze) || this.editorListeners.set(ze, []);
					} catch (Xe) {
						console.error("ComposerService: error", Xe);
					}
				}
				async initializeEditorListeners() {
					if (Rt) {
						for (
							let Ye = 0;
							Ye < 1e3 &&
							(await this.everythingProviderService.onlyLocalProvider?.runCommand(
								V.ComposerEditHistoryActions.Ack,
								null,
							)) !== !0;
							Ye++
						)
							await new Promise((ze) => setTimeout(ze, 50));
						for (let Ye of this._codeEditorService.listCodeEditors())
							await this.registerEditorListenersToEditor(Ye);
						this.editorListeners.set("global", [
							this.D(
								this._codeEditorService.onCodeEditorAdd((Ye) => {
									this.registerEditorListenersToEditor(Ye);
								}),
							),
						]);
					}
				}
				async applyCachedCodeBlocksOfLastMessage(Ye) {
					const ze = this.composerDataService.getLastAiBubble(Ye);
					if (ze)
						for (const Xe of ze.codeBlocks ?? [])
							await this.applyCachedCodeBlock(Ye, Xe.uri, Xe.version);
				}
				clearText(Ye) {
					this.composerDataService.updateComposerData(Ye, {
						text: "",
						richText: "",
					}),
						this._onShouldClearLexical.fire({ composerId: Ye });
				}
				async onInlineDiffsLoadedHook(Ye) {
					const ze = new Set();
					console.log("[balta] onInlineDiffsLoadedHook", Ye);
					for (const Xe of Ye) {
						if (
							Xe.composerId !== this.composerDataService.selectedComposerId ||
							ze.has(Xe.uri.toString())
						)
							continue;
						const It = await this.composerUtilsService.getContentsOfFile(
							Xe.composerId,
							Xe.uri,
						);
						if (!It) continue;
						const Lt = await this.composerUtilsService.computeLineDiffs(
							Xe.composerId,
							Xe.uri,
							It,
						);
						this.composerDataService.updateComposerCodeBlock(
							Xe.composerId,
							Xe.uri,
							Xe.version,
							{ newModelDiffWrtV0: Lt },
						);
						const xt = this.textFileService.isDirty(Xe.uri);
						await this.turnApplyToInlineDiff(
							Xe.composerId,
							Xe.uri,
							Xe.version,
							{ setOriginalModelLines: !0 },
						),
							ze.add(Xe.uri.toString()),
							xt || (await this.saveFile(Xe.uri, { force: !0 }));
					}
				}
				focus(Ye, ze) {
					this.composerViewsService.focus(Ye, ze);
				}
				getComposerLocation(Ye) {
					return this.composerViewsService.getComposerLocation(Ye);
				}
				setComposerLocation(Ye, ze) {
					this.composerViewsService.setComposerLocation(Ye, ze);
				}
				getInputDelegate(Ye) {
					return this.composerViewsService.getInputDelegate(Ye);
				}
				getPrevEditingBubbleInputDelegate(Ye) {
					return this.composerViewsService.getPrevEditingBubbleInputDelegate(
						Ye,
					);
				}
				hide(Ye) {
					this.composerViewsService.hide(Ye);
				}
				blur(Ye) {
					this.composerViewsService.blur(Ye);
				}
				focusPrevBubble(Ye) {
					this.composerViewsService.focusPrevBubble(Ye);
				}
				async showAndFocus(Ye, ze) {
					await this.composerViewsService.showAndFocus(Ye, ze);
				}
				isChat(Ye) {
					const ze = this.getComposer(Ye);
					return this.composerDataService.getComposerForceMode(Ye) === "chat";
				}
			};
			Ne(
				[(0, De.$KOb)("ComposerService.updateComposer")],
				Kt.prototype,
				"updateComposer",
				null,
			),
				Ne(
					[(0, De.$KOb)("ComposerService.getComposer")],
					Kt.prototype,
					"getComposer",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.getComposerEditingState")],
					Kt.prototype,
					"getComposerEditingState",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.getApplyingDiffsState")],
					Kt.prototype,
					"getApplyingDiffsState",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.resetComposerEditingState")],
					Kt.prototype,
					"resetComposerEditingState",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.unregisterCachedCodeBlock")],
					Kt.prototype,
					"unregisterCachedCodeBlock",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.unregisterAllCachedCodeBlocks")],
					Kt.prototype,
					"unregisterAllCachedCodeBlocks",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.registerCachedCodeBlock")],
					Kt.prototype,
					"registerCachedCodeBlock",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.markUriAsOutdated")],
					Kt.prototype,
					"markUriAsOutdated",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.isNewFile")],
					Kt.prototype,
					"isNewFile",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.createNewFileAndMaybeFolder")],
					Kt.prototype,
					"createNewFileAndMaybeFolder",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.checkToCreateNewFile")],
					Kt.prototype,
					"checkToCreateNewFile",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.deleteFolder")],
					Kt.prototype,
					"deleteFolder",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.deleteFile")],
					Kt.prototype,
					"deleteFile",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.deleteNewFileAndMaybeFolder")],
					Kt.prototype,
					"deleteNewFileAndMaybeFolder",
					null,
				),
				Ne(
					[
						(0, De.$KOb)(
							"ComposerService.removeFileFromNewlyCreatedFilesAndFolders",
						),
					],
					Kt.prototype,
					"removeFileFromNewlyCreatedFilesAndFolders",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.saveFiles")],
					Kt.prototype,
					"saveFiles",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.saveFile")],
					Kt.prototype,
					"saveFile",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.cleanUpComposer")],
					Kt.prototype,
					"cleanUpComposer",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.resetComposer")],
					Kt.prototype,
					"resetComposer",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.isComposerContextUntouched")],
					Kt.prototype,
					"isComposerContextUntouched",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.isComposerUntouched")],
					Kt.prototype,
					"isComposerUntouched",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.canComposerSubmit")],
					Kt.prototype,
					"canComposerSubmit",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.close")],
					Kt.prototype,
					"close",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.handleOpenComposerPane")],
					Kt.prototype,
					"handleOpenComposerPane",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.handleOpenComposerEditor")],
					Kt.prototype,
					"handleOpenComposerEditor",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.handleOpenComposerBar")],
					Kt.prototype,
					"handleOpenComposerBar",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.handleOpenComposer")],
					Kt.prototype,
					"handleOpenComposer",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.openComposer")],
					Kt.prototype,
					"openComposer",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.createComposer")],
					Kt.prototype,
					"createComposer",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.deleteComposer")],
					Kt.prototype,
					"deleteComposer",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.saveAll")],
					Kt.prototype,
					"saveAll",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.maybeUpdateFileSelectionsFromCmdI")],
					Kt.prototype,
					"maybeUpdateFileSelectionsFromCmdI",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.getCurrentFile")],
					Kt.prototype,
					"getCurrentFile",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.getInlineDiffServiceLookalikePure")],
					Kt.prototype,
					"getInlineDiffServiceLookalikePure",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.isCodeBlockRegisteredAsCached")],
					Kt.prototype,
					"isCodeBlockRegisteredAsCached",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.getTerminalText")],
					Kt.prototype,
					"getTerminalText",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.getUndoRedoUri")],
					Kt.prototype,
					"getUndoRedoUri",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.addContext")],
					Kt.prototype,
					"addContext",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.removeAllListContext")],
					Kt.prototype,
					"removeAllListContext",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.removeContext")],
					Kt.prototype,
					"removeContext",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.removeMention")],
					Kt.prototype,
					"removeMention",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.addBubbleContext")],
					Kt.prototype,
					"addBubbleContext",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.removeBubbleContext")],
					Kt.prototype,
					"removeBubbleContext",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.removeBubbleMention")],
					Kt.prototype,
					"removeBubbleMention",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.resetContext")],
					Kt.prototype,
					"resetContext",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.addContextToLastFocused")],
					Kt.prototype,
					"addContextToLastFocused",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.checkoutToCheckpoint")],
					Kt.prototype,
					"checkoutToCheckpoint",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.checkoutToLatest")],
					Kt.prototype,
					"checkoutToLatest",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.syncComposerWorktreeBranch")],
					Kt.prototype,
					"syncComposerWorktreeBranch",
					null,
				),
				Ne(
					[
						(0, De.$KOb)(
							"ComposerService.checkIfBackgroundComposerIsCorrupted",
						),
					],
					Kt.prototype,
					"checkIfBackgroundComposerIsCorrupted",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.isBackground")],
					Kt.prototype,
					"isBackground",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.getModelDetails")],
					Kt.prototype,
					"getModelDetails",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.showInfoBox")],
					Kt.prototype,
					"showInfoBox",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.getAllCachedCodeBlocks")],
					Kt.prototype,
					"getAllCachedCodeBlocks",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.readFileContents")],
					Kt.prototype,
					"readFileContents",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.getSortedCandidateFiles")],
					Kt.prototype,
					"getSortedCandidateFiles",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.shouldRenameComposer")],
					Kt.prototype,
					"shouldRenameComposer",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.renameComposer")],
					Kt.prototype,
					"renameComposer",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.maybeRunOnComposerSettled")],
					Kt.prototype,
					"maybeRunOnComposerSettled",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.isComposerSettled")],
					Kt.prototype,
					"isComposerSettled",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.onComposerSettled")],
					Kt.prototype,
					"onComposerSettled",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.registerNewCodeBlock")],
					Kt.prototype,
					"registerNewCodeBlock",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.updateCodeBlockVersion")],
					Kt.prototype,
					"updateCodeBlockVersion",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.openDiffEditor")],
					Kt.prototype,
					"openDiffEditor",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.closeDiffEditor")],
					Kt.prototype,
					"closeDiffEditor",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.openOrUpdateMultiDiffEditor")],
					Kt.prototype,
					"openOrUpdateMultiDiffEditor",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.showComposerHistory")],
					Kt.prototype,
					"showComposerHistory",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.showChatHistory")],
					Kt.prototype,
					"showChatHistory",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.insertIntoChat")],
					Kt.prototype,
					"insertIntoChat",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.applyCachedCodeBlock")],
					Kt.prototype,
					"applyCachedCodeBlock",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.handleAiEditToolCallFinished")],
					Kt.prototype,
					"handleAiEditToolCallFinished",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.getDebugInfo")],
					Kt.prototype,
					"getDebugInfo",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.formatDiffHistory")],
					Kt.prototype,
					"formatDiffHistory",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.registerModelListenerToEditorModel")],
					Kt.prototype,
					"registerModelListenerToEditorModel",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.registerEditorListenersToEditor")],
					Kt.prototype,
					"registerEditorListenersToEditor",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.initializeEditorListeners")],
					Kt.prototype,
					"initializeEditorListeners",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.applyCachedCodeBlocksOfLastMessage")],
					Kt.prototype,
					"applyCachedCodeBlocksOfLastMessage",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.applyCachedCodeBlocksOfLastMessage")],
					Kt.prototype,
					"onInlineDiffsLoadedHook",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.focus")],
					Kt.prototype,
					"focus",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.getComposerLocation")],
					Kt.prototype,
					"getComposerLocation",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.setComposerLocation")],
					Kt.prototype,
					"setComposerLocation",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.getInputDelegate")],
					Kt.prototype,
					"getInputDelegate",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.getPrevEditingBubbleInputDelegate")],
					Kt.prototype,
					"getPrevEditingBubbleInputDelegate",
					null,
				),
				Ne([(0, De.$KOb)("ComposerService.hide")], Kt.prototype, "hide", null),
				Ne([(0, De.$KOb)("ComposerService.blur")], Kt.prototype, "blur", null),
				Ne(
					[(0, De.$KOb)("ComposerService.focusPrevBubble")],
					Kt.prototype,
					"focusPrevBubble",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.showAndFocus")],
					Kt.prototype,
					"showAndFocus",
					null,
				),
				(Kt = Ne(
					[
						j(0, q.$0zb),
						j(1, F.$Li),
						j(2, K.$Vi),
						j(3, ve.$Nfc),
						j(4, M.$MO),
						j(5, He.$zIb),
						j(6, Ce.$$9b),
						j(7, S.$27b),
						j(8, U.$ll),
						j(9, Ee.$IY),
						j(10, be.$i6b),
						j(11, Te.$EY),
						j(12, R.$6j),
						j(13, H.$7rb),
						j(14, Fe.$J6b),
						j(15, Ue.$HMb),
						j(16, se.IComposerDataService),
						j(17, Je.$x6b),
						j(18, L.$Cxb),
						j(19, ye.$iIb),
						j(20, $e.$lcc),
						j(21, Ke.$W6b),
						j(22, Be.$Q9b),
						j(23, ie.$H7b),
						j(24, O.$3Db),
						j(25, N.$kcc),
						j(26, Le.$$Db),
						j(27, Ie.$n6),
						j(28, G.$GN),
						j(29, A.$gj),
						j(30, D.$QO),
						j(31, k.$nM),
						j(32, oe.IComposerViewsService),
						j(33, x.$3N),
						j(34, Y.$Wcc),
						j(35, le.IComposerUtilsService),
						j(36, $.$dtb),
						j(37, fe.$N9b),
						j(38, Oe.$dzc),
						j(39, me.$ifc),
						j(40, Ae.$aM),
						j(41, je.$R0b),
						j(42, Ve.$Ycc),
						j(43, Ze.$hdc),
						j(44, et.$Tyc),
						j(45, ft.$_Y),
						j(46, bt.$kZ),
					],
					Kt,
				)),
				(0, z.$lK)(ee.IComposerService, Kt, z.InstantiationType.Delayed);
		},
	),
		