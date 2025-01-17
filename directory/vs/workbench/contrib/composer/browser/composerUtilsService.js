import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './composerDataService.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../services/ai/browser/aiService.js';
import '../../../services/selectedContext/browser/utils.js';
import '../../../services/editor/common/editorService.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/cursor/browser/aiEverythingProviderService.js';
import '../../../../platform/files/common/files.js';
import '../../../../base/common/uri.js';
import '../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../../proto/aiserver/v1/chat_pb.js';
import '../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../services/ai/browser/repositoryService.js';
import '../../contextGraph/browser/gitGraphService.js';
import '../../../../../proto/aiserver/v1/chat_pb.js';
import './composerData.js';
import '../../../services/selectedContext/browser/selectedContext.js';
import '../../../../editor/common/services/editorWorker.js';
import '../../../../base/browser/hash.js';
import '../../../services/utils/browser/generateImageProtos.js';
import '../../../services/search/common/ignoreFile.js';
import '../../../../base/common/cppUtils/utils.js';
import '../../../../base/common/types.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../editor/common/services/resolverService.js';
import './composerCapabilities.js';
import '../../../services/aiTasks/browser/aiTaskServiceInterface.js';
import './utils.js';
import '../../../services/history/common/history.js';
import '../../../../base/common/network.js';
import '../../../../../proto/aiserver/v1/composer_pb.js';
import '../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../../../proto/aiserver/v1/tools_pb.js';
import '../../aiFeatureStatusService/browser/aiFeatureStatusService.js';
import '../../../../platform/tracing/common/tracing.js';
import './utils.js';
import '../../../../base/common/event.js';
import '../../../../base/common/cursorAsync.js';
import '../../../../base/common/map.js';
import '../../../../editor/common/core/lineRange.js';
import '../../../../editor/common/diff/rangeMapping.js';
import '../../../services/ai/browser/toolsV2/listDirHelper.js';
import '../../../services/workspaces/browser/sourceFilesService.js';
define(
		de[426],
		he([
			1, 0, 5, 209, 3, 20, 20, 118, 299, 18, 25, 280, 22, 9, 83, 126, 83, 226,
			715, 126, 225, 271, 200, 530, 1045, 1861, 646, 28, 45, 42, 262, 516, 246,
			245, 23, 167, 124, 124, 287, 216, 246, 6, 741, 59, 196, 342, 1790, 632,
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
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ComposerUtilsService = e.IComposerUtilsService = void 0);
			const W = { shouldGracefullyFallBackOnTimeout: !0 },
				X = 5,
				Y = 2;
			e.IComposerUtilsService = (0, t.$Mi)("composerUtilsService");
			let ie = class extends w.$1c {
				constructor(
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
				) {
					super(),
						(this._composerDataService = ee),
						(this._aiService = _),
						(this._workspaceContextService = te),
						(this._editorService = Q),
						(this._editorWorkerService = Z),
						(this._fileService = se),
						(this._everythingProviderService = re),
						(this._repositoryService = le),
						(this._gitGraphService = oe),
						(this._selectedContextService = ae),
						(this._reactiveStorageService = pe),
						(this._textModelService = $e),
						(this._aiTaskService = ye),
						(this._historyService = ue),
						(this._aiFeatureStatusService = fe),
						(this._instantiationService = me),
						(this._gitIgnoreFile = null),
						(this._composerDiffCache = new q.$Jc(50)),
						(this._composerDiffSemaphore = new H.$Opb(5)),
						(this._onShouldResetCodeBlockCount = this.D(new x.$re())),
						(this.onShouldResetCodeBlockCount =
							this._onShouldResetCodeBlockCount.event),
						this.initializeGitIgnoreFile();
				}
				async getContentsOfFile(ee, _) {
					if (!(await this._fileService.exists(_))) return null;
					try {
						return (
							await this._composerDataService.getMaybeCachedModelReference(
								ee,
								_,
							)
						).object.textEditorModel.getLinesContent();
					} catch (Q) {
						return (
							console.error("[composer] error getting content of file", _, Q),
							null
						);
					}
				}
				getSupportedTools(ee) {
					return [
						B.ClientSideToolV2.READ_FILE_FOR_IMPORTS,
						B.ClientSideToolV2.READ_SEMSEARCH_FILES,
						B.ClientSideToolV2.RIPGREP_SEARCH,
						B.ClientSideToolV2.RUN_TERMINAL_COMMAND,
						B.ClientSideToolV2.READ_FILE,
						B.ClientSideToolV2.LIST_DIR,
						B.ClientSideToolV2.EDIT_FILE,
						B.ClientSideToolV2.FILE_SEARCH,
						B.ClientSideToolV2.SEMANTIC_SEARCH_FULL,
						B.ClientSideToolV2.CREATE_FILE,
						B.ClientSideToolV2.DELETE_FILE,
						B.ClientSideToolV2.REAPPLY,
						B.ClientSideToolV2.GET_RELATED_FILES,
						B.ClientSideToolV2.PARALLEL_APPLY,
					];
				}
				async ensureCapabilitiesAreLoaded(ee) {
					const _ = await this._composerDataService.getComposerHandleById(ee);
					if (_ !== void 0)
						try {
							if (_.data.capabilities.length > 0) return;
							const Q = (0, L.getComposerCapabilities)(
								this._instantiationService,
								this._reactiveStorageService,
								ee,
							);
							if (Q.length === 0)
								throw new Error(
									`[composer] No capabilities found for composer ${ee}`,
								);
							_.setData({ capabilities: Q });
						} finally {
							_.dispose();
						}
				}
				async getShouldChatUseTools() {
					return (
						await this._aiFeatureStatusService
							.maybeRefreshFeatureStatus("chatUsesTools")
							.catch(() => {}),
						!!this._aiFeatureStatusService.getCachedFeatureStatus(
							"chatUsesTools",
						)
					);
				}
				getShouldAutoSaveAgenticEdits() {
					return (
						this._aiFeatureStatusService
							.maybeRefreshFeatureStatus("autoSaveAgenticEdits")
							.catch(() => {}),
						this._reactiveStorageService.applicationUserPersistentStorage
							.composerState.autoSaveAgenticEdits !== null &&
						this._reactiveStorageService.applicationUserPersistentStorage
							.composerState.autoSaveAgenticEdits !== void 0
							? this._reactiveStorageService.applicationUserPersistentStorage
									.composerState.autoSaveAgenticEdits
							: !!this._aiFeatureStatusService.getCachedFeatureStatus(
									"autoSaveAgenticEdits",
								)
					);
				}
				replacedBubbleForParallelApply(ee, _, te) {
					if (ee.additionalData === void 0 || _.codeBlockIdentifier === void 0)
						return te;
					const { codeBlockIdentifierToRawMessage: Q } = ee.additionalData;
					if (Q[_.codeBlockIdentifier] === void 0) return te;
					const Z = Q[_.codeBlockIdentifier];
					return new g.$SA({ ...te, text: Z });
				}
				replacedBubbleForEdit(ee, _, te) {
					if (ee.additionalData === void 0) return te;
					const { instructions: Q, previousBubbleText: Z } = ee.additionalData;
					if (Q === void 0 && Z === void 0) return te;
					let se = "";
					Z !== void 0 &&
						(se += `${Z}

`),
						Q !== void 0 &&
							(se += `${Q}

`);
					let re;
					try {
						re = this._workspaceContextService.asRelativePath(_.uri);
					} catch {
						re = _.uri.fsPath;
					}
					return (
						(se += `\`\`\`${re}
${_.content}
\`\`\``),
						new g.$SA({ ...te, text: se })
					);
				}
				replacedBubbleForFastEdit(ee, _, te) {
					const Q = this._composerDataService.getComposerCapability(
						ee,
						R.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_FORMER,
					);
					if (Q === void 0) return _;
					const Z = Q.getBubbleData(_.bubbleId);
					return Z
						? Z.tool === B.ClientSideToolV2.EDIT_FILE
							? this.replacedBubbleForEdit(Z, te, _)
							: Z.tool === B.ClientSideToolV2.PARALLEL_APPLY
								? this.replacedBubbleForParallelApply(Z, te, _)
								: _
						: _;
				}
				async isAgenticComposer(ee) {
					return (
						(await this._composerDataService.getComposerHandleById(ee))?.data
							.isAgentic ?? !1
					);
				}
				processConversationForFastEdit(ee, _, te) {
					const Q = _.findIndex(
							(le) =>
								le.type === g.ConversationMessage_MessageType.AI &&
								le.codeBlocks?.some(
									(oe) =>
										oe.version === te.version && (0, c.$Ac)(oe.uri, te.uri),
								),
						),
						se = _.slice(0, Q + 1).map((le, oe) => {
							if (
								le.type === g.ConversationMessage_MessageType.AI &&
								oe !== Q
							) {
								const ae = le.text.replace(/```[\s\S]*?```/g, "[old_code]");
								return new g.$SA({ ...le, text: ae });
							}
							return new g.$SA(le);
						}),
						re = _.at(Q);
					if (
						re.capabilityType ===
						R.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_FORMER
					) {
						const le = this.replacedBubbleForFastEdit(ee, re, te);
						se[se.length - 1] = le;
					}
					return se;
				}
				async populateCodeChunksInConversation(ee, _ = !1) {
					const te = new Map();
					return (
						ee.forEach((Q, Z) => {
							if (
								Q.type !== g.ConversationMessage_MessageType.HUMAN ||
								!Q.context
							)
								return;
							const { fileSelections: se } = Q.context;
							for (const re of se || [])
								try {
									const le = (0, m.$8gc)(re);
									te.set(le, Z);
								} catch (le) {
									console.error(`Error processing file selection: ${le}`);
								}
						}),
						await Promise.all(
							ee.map(async (Q, Z) => {
								if (
									Q.type !== g.ConversationMessage_MessageType.HUMAN ||
									!Q.context
								)
									return Q;
								const { fileSelections: se, selections: re } = Q.context;
								let le = [...(Q.attachedCodeChunks || [])];
								for (const oe of se || [])
									try {
										const ae = (0, m.$8gc)(oe);
										if (
											!le.some(
												(pe) =>
													pe.relativeWorkspacePath ===
														this._workspaceContextService.asRelativePath(
															c.URI.parse(ae),
														) &&
													(pe.intent ===
														g.ConversationMessage_CodeChunk_Intent
															.COMPOSER_FILE ||
														pe.intent ===
															g.ConversationMessage_CodeChunk_Intent
																.MENTIONED_FILE),
											)
										) {
											const pe = te.get(ae) === Z;
											if (_ || pe) {
												const $e = this._selectedContextService.getMentions(
													Q.context,
													"fileSelections",
													oe,
												);
												if (_ && oe.autoContext && $e.length === 0) continue;
												const ye =
													await this._selectedContextService.getCodeChunksFromFileSelections(
														[oe],
														{ context: Q.context },
													);
												le.push(...ye);
											} else {
												const ye =
													this._selectedContextService.getMentions(
														Q.context,
														"fileSelections",
														oe,
													).length > 0
														? g.ConversationMessage_CodeChunk_Intent
																.MENTIONED_FILE
														: g.ConversationMessage_CodeChunk_Intent
																.COMPOSER_FILE;
												le.push(
													new g.$TA({
														relativeWorkspacePath:
															this._workspaceContextService.asRelativePath(
																c.URI.parse(ae),
															),
														startLineNumber: 1,
														lines: [],
														contentsAreMissing: !0,
														summarizationStrategy:
															g
																.ConversationMessage_CodeChunk_SummarizationStrategy
																.NONE_UNSPECIFIED,
														intent: ye,
													}),
												);
											}
										}
									} catch (ae) {
										console.error(`Error processing file selection: ${ae}`);
									}
								for (const oe of re || [])
									try {
										if (
											!le.some((ae) =>
												this._selectedContextService.isCodeChunkEqualToSelection(
													ae,
													oe,
												),
											)
										) {
											const ae =
												await this._selectedContextService.getCodeChunksFromCodeSelection(
													oe,
													{},
												);
											ae && le.push(ae);
										}
									} catch (ae) {
										console.error(`Error processing code selection: ${ae}`);
									}
								return { ...Q, attachedCodeChunks: le };
							}),
						)
					);
				}
				async populateRedDiffsInConversation(ee) {
					try {
						const _ = new Map();
						return (
							ee.forEach((Q, Z) => {
								Q.type === g.ConversationMessage_MessageType.HUMAN &&
									Q.attachedCodeChunks.forEach((se) => {
										const {
												relativeWorkspacePath: re,
												contentsAreMissing: le,
											} = se,
											oe = se.lines.join(`
`);
										!_.has(re) &&
											this.codeChunkHasFullFileIntent(se) &&
											!le &&
											_.set(re, { content: oe, messageIndex: Z });
									});
							}),
							await Promise.all(
								ee.map(async (Q, Z) => {
									const se = Q.diffsForCompressingFiles,
										re = (
											await Promise.allSettled(
												Q.attachedCodeChunks.map(async (le) => {
													if (
														!this.codeChunkHasFullFileIntent(le) ||
														le.contentsAreMissing === !0
													)
														return;
													const oe = le.relativeWorkspacePath,
														ae = _.get(le.relativeWorkspacePath);
													if (ae === void 0 || ae.messageIndex >= Z) return;
													const { content: pe } = ae,
														$e = le.lines.join(`
`),
														ye = se.find(
															(ge) =>
																ge.relativeWorkspacePath ===
																le.relativeWorkspacePath,
														);
													if (ye !== void 0 && Z < ee.length - 1) return ye;
													const ue = await (0, $.$ojb)(pe),
														fe = await (0, $.$ojb)($e),
														me = ee
															.slice(0, Z)
															.flatMap((ge) =>
																ge.diffsForCompressingFiles.filter(
																	(be) =>
																		be.startHash === ue && be.endHash === fe,
																),
															)
															?.at(-1);
													if (me) return me;
													const ve = await this.computeLinesDiffWithSemaphore({
														first: pe,
														second: $e,
														options: {
															ignoreTrimWhitespace: !1,
															computeMoves: !1,
															maxComputationTimeMs: 500,
															...W,
														},
													});
													if (!ve.hitTimeout)
														return {
															relativeWorkspacePath: oe,
															redRanges: ve.changes.map((ge) => ({
																startLine: ge.original.startLineNumber,
																endLineInclusive:
																	ge.original.endLineNumberExclusive - 1,
															})),
															redRangesReversed: ve.changes.map((ge) => ({
																startLine: ge.modified.startLineNumber,
																endLineInclusive:
																	ge.modified.endLineNumberExclusive - 1,
															})),
															startHash: ue,
															endHash: fe,
														};
												}),
											)
										).flatMap((le) =>
											le.status === "fulfilled" && le.value !== void 0
												? [le.value]
												: [],
										);
									return { ...Q, diffsForCompressingFiles: re };
								}),
							)
						);
					} catch {
						return ee;
					}
				}
				async getRecentEdits(ee) {
					try {
						const _ = this._composerDataService.getComposerData(ee);
						if (!_) throw new Error("No composer data found");
						const { conversation: te, codeBlockData: Q } = _,
							Z =
								te.at(-1)?.type === g.ConversationMessage_MessageType.AI
									? te.at(-1)
									: te.at(-2);
						if (Z?.type !== g.ConversationMessage_MessageType.AI) return;
						const re = (Z.codeBlocks ?? [])
								.map((ae) => {
									const pe = Q[ae.uri.toString()].find(
										($e) => $e.version === ae.version,
									);
									if (pe) return pe;
								})
								.filter(T.$tg)
								.sort((ae, pe) => pe.version - ae.version)
								.map((ae) => {
									const pe = this.getCodeBlockOriginalModelLines(
											ee,
											ae.uri,
											ae.version,
										),
										$e = this.getCodeBlockNewModelLines(ee, ae.uri, ae.version);
									return {
										relativeWorkspacePath:
											this._workspaceContextService.asRelativePath(ae.uri),
										contentBefore: pe?.join(`
`),
										contentAfter: $e?.join(`
`),
										generationUuid: ae.latestApplyGenerationUUID,
										version: ae.version,
									};
								}),
							le = [...new Set(re.map((ae) => ae.relativeWorkspacePath))],
							oe = (
								await Promise.all(
									le.map(async (ae) => {
										const pe = await this._aiService.getCurrentFileInfo(
											this._workspaceContextService.resolveRelativePath(ae),
											{ actuallyReadFromOverrideURI: !0 },
										);
										if (pe)
											return {
												relativeWorkspacePath: ae,
												content: pe.contents,
											};
									}),
								)
							).filter(T.$tg);
						return {
							codeBlockInfo: re,
							finalFileValues: oe,
							editsBelongToComposerGenerationUuid: _.latestChatGenerationUUID,
						};
					} catch {
						return;
					}
				}
				async getRecentlyViewedFileInfo(ee) {
					const _ = await ee,
						te = [...this._historyService.getHistory()].flatMap((ye) => {
							const ue = ye.resource;
							if (
								!ue ||
								(!this._fileService.hasProvider(ue) &&
									ue.scheme !== A.Schemas.untitled &&
									ue.scheme !== A.Schemas.vscodeTerminal &&
									ue.scheme !== A.Schemas.aiChat)
							)
								return [];
							const fe = this._workspaceContextService.asRelativePath(ue);
							return fe ? [{ relativeWorkspacePath: fe, uri: ue }] : [];
						}),
						Q = 3,
						Z = 20,
						se = 4e3,
						re = _.filter((ye) => this.codeChunkHasFullFileIntent(ye)).map(
							(ye) => ye.relativeWorkspacePath,
						),
						le = te
							.map(({ relativeWorkspacePath: ye }) => ye)
							.filter((ye) => !re.includes(ye))
							.slice(0, Q),
						ae = (
							await Promise.allSettled(
								te.map(async ({ relativeWorkspacePath: ye, uri: ue }) => {
									if (re.includes(ye))
										return _.filter(
											(ve) =>
												ve.relativeWorkspacePath === ye &&
												this.codeChunkHasFullFileIntent(ve),
										).map(
											(ve) =>
												new g.$TA({
													...ve,
													contentsAreMissing: !0,
													lines: void 0,
												}),
										);
									if (!le.includes(ye))
										return [
											new g.$TA({
												relativeWorkspacePath: ye,
												contentsAreMissing: !0,
											}),
										];
									const me =
										await this._selectedContextService.getCodeChunksFromFileSelections(
											[{ uri: ue }],
										);
									for (const ve of me) ve.lines = ve.lines.slice(0, se);
									return me;
								}),
							)
						)
							.flatMap((ye) => (ye.status === "fulfilled" ? ye.value : []))
							.map(
								(ye) =>
									new g.$TA({
										...ye,
										intent:
											g.ConversationMessage_CodeChunk_Intent
												.RECENTLY_VIEWED_FILE,
									}),
							)
							.slice(0, Z);
					return {
						recentLocationsHistory: this._historyService
							.getRecentLocations(50)
							.flatMap((ye) => {
								const ue = this._workspaceContextService.asRelativePath(ye.uri);
								return te.some((fe) => ue === fe.relativeWorkspacePath)
									? [
											new g.$3A({
												relativeWorkspacePath: ue,
												lineNumber: ye.location.startLineNumber,
											}),
										]
									: [];
							}),
						recentlyViewedFiles: ae,
					};
				}
				async *handleStreamComposer(ee) {
					let _ = !1;
					for await (const te of ee.streamer) {
						const Q = this._composerDataService.getComposerData(ee.composerId);
						if (!Q) continue;
						const Z = Q.conversation[Q.conversation.length - 1],
							se = [...Q.conversation]
								.reverse()
								.find(
									(re) => re.type === g.ConversationMessage_MessageType.HUMAN,
								);
						if (
							("conversationSummary" in te &&
								te.conversationSummary &&
								Z !== void 0 &&
								this._composerDataService.updateComposerDataSetStore(
									ee.composerId,
									(re) =>
										re(
											"conversation",
											(le) => le.bubbleId === Z.bubbleId,
											"conversationSummary",
											te.conversationSummary,
										),
								),
							"serverBubbleId" in te &&
								te.serverBubbleId &&
								typeof te.serverBubbleId == "string" &&
								te.serverBubbleId !== "" &&
								Z !== void 0 &&
								this._composerDataService.updateComposerDataSetStore(
									ee.composerId,
									(re) =>
										re(
											"conversation",
											(le) => le.bubbleId === Z.bubbleId,
											"serverBubbleId",
											te.serverBubbleId,
										),
								),
							te !== null &&
								typeof te == "object" &&
								"webCitation" in te &&
								te.webCitation !== void 0 &&
								te.webCitation !== null &&
								Z &&
								this._composerDataService.updateComposerDataSetStore(
									ee.composerId,
									(re) =>
										re(
											"conversation",
											(le) => le.bubbleId === Z.bubbleId,
											"webCitations",
											te.webCitation?.references ?? [],
										),
								),
							te !== null &&
								typeof te == "object" &&
								"docsReference" in te &&
								te.docsReference !== void 0 &&
								te.docsReference !== null &&
								Z &&
								this._composerDataService.updateComposerDataSetStore(
									ee.composerId,
									(re) =>
										re(
											"conversation",
											(le) => le.bubbleId === Z.bubbleId,
											"docsCitations",
											(le) => [...(le ?? []), te.docsReference],
										),
								),
							te !== null &&
								typeof te == "object" &&
								"statusUpdates" in te &&
								te.statusUpdates !== void 0 &&
								te.statusUpdates !== null &&
								Z &&
								this._composerDataService.updateComposerDataSetStore(
									ee.composerId,
									(re) =>
										re(
											"conversation",
											(le) => le.bubbleId === Z.bubbleId,
											"statusUpdates",
											te.statusUpdates,
										),
								),
							te !== null &&
								typeof te == "object" &&
								"serviceStatusUpdate" in te &&
								te.serviceStatusUpdate !== void 0 &&
								te.serviceStatusUpdate !== null &&
								Z &&
								this._composerDataService.updateComposerDataSetStore(
									ee.composerId,
									(re) =>
										re(
											"conversation",
											(le) => le.bubbleId === Z.bubbleId,
											"serviceStatusUpdate",
											te.serviceStatusUpdate,
										),
								),
							te !== null &&
								typeof te == "object" &&
								"usedCode" in te &&
								te.usedCode !== void 0 &&
								te.usedCode !== null &&
								te.usedCode.codeResults &&
								Z &&
								se)
						) {
							const re = te.usedCode;
							this._composerDataService.updateComposerDataSetStore(
								ee.composerId,
								(le) =>
									le(
										"conversation",
										(oe) => oe.bubbleId === se.bubbleId,
										"codebaseContextChunks",
										re.codeResults.map((oe) => oe.codeBlock).filter(T.$tg),
									),
							),
								this._composerDataService.updateComposerDataSetStore(
									ee.composerId,
									(le) =>
										le(
											"conversation",
											(oe) => oe.bubbleId === Z.bubbleId,
											"statusUpdates",
											{ updates: [] },
										),
								);
						}
						if (
							te !== null &&
							typeof te == "object" &&
							"symbolLink" in te &&
							te.symbolLink !== void 0 &&
							te.symbolLink !== null &&
							Z
						) {
							const re = te.symbolLink;
							this._composerDataService.updateComposerDataSetStore(
								ee.composerId,
								(le) =>
									le(
										"conversation",
										(oe) => oe.bubbleId === Z.bubbleId,
										"symbolLinks",
										(oe) => (oe ? [...oe, re] : [re]),
									),
							);
						}
						if (
							te !== null &&
							typeof te == "object" &&
							"fileLink" in te &&
							te.fileLink !== void 0 &&
							te.fileLink !== null &&
							Z
						) {
							const re = te.fileLink;
							this._composerDataService.updateComposerDataSetStore(
								ee.composerId,
								(le) =>
									le(
										"conversation",
										(oe) => oe.bubbleId === Z.bubbleId,
										"fileLinks",
										(oe) => (oe ? [...oe, re] : [re]),
									),
							);
						}
						te !== null &&
							typeof te == "object" &&
							"viewableGitContext" in te &&
							te.viewableGitContext !== void 0 &&
							te.viewableGitContext !== null &&
							Z &&
							this._composerDataService.updateComposerDataSetStore(
								ee.composerId,
								(re) =>
									re(
										"conversation",
										(le) => le.bubbleId === Z.bubbleId,
										"gitContext",
										te.viewableGitContext,
									),
							),
							yield te,
							_ === !1 &&
								(te.text?.length ?? 0) > 0 &&
								((_ = !0),
								console.log(
									`[composer] ttft is ${Date.now() - ee.startTime}ms`,
								));
					}
				}
				intermediateChunkMiddleware(ee, _, te) {
					const Q = () => {
						this._composerDataService.updateComposerDataSetStore(_, (le) =>
							le(
								"conversation",
								(oe) => oe.bubbleId === te,
								"intermediateChunks",
								[],
							),
						);
					};
					Q();
					const Z = (le) => {
						this._composerDataService.updateComposerDataSetStore(_, (oe) =>
							oe(
								"conversation",
								(ae) => ae.bubbleId === te,
								"intermediateSectionType",
								le,
							),
						);
					};
					Z();
					const se = (le, oe) => {
						const ae = this._composerDataService.getComposerBubble(
								_,
								te,
							)?.intermediateSectionType,
							pe =
								oe.chunkType === b.ChunkType.CODEBASE
									? "codebase"
									: oe.chunkType === b.ChunkType.LONG_FILE
										? "long-file"
										: "docs";
						ae !== pe && Q(), Z(pe);
						const $e = this._composerDataService.getComposerBubble(_, te);
						if ($e === void 0) return;
						let ye = $e.intermediateChunks ?? [];
						const ue = (ge, be) =>
							ge.startLine === be.startLine && ge.fileName === be.fileName;
						let fe = ye.findIndex((ge) => ue(ge.chunkIdentity, oe));
						fe === -1 && (fe = ye.length);
						const me = ye.find((ge) => ue(ge.chunkIdentity, oe));
						ye = [...ye.filter((ge) => !ue(ge.chunkIdentity, oe))];
						const ve = {
							chunkIdentity: me?.chunkIdentity ?? oe,
							completeText: (me?.completeText ?? "") + le,
						};
						ye.splice(fe, 0, ve),
							this._composerDataService.updateComposerDataSetStore(_, (ge) =>
								ge(
									"conversation",
									(be) => be.bubbleId === te,
									"intermediateChunks",
									ye,
								),
							);
					};
					return (async function* () {
						for await (const le of ee)
							le !== null &&
								typeof le == "object" &&
								"isBigFile" in le &&
								le.isBigFile &&
								Z("long-file"),
								le !== null &&
									typeof le == "object" &&
									"chunkIdentity" in le &&
									le.chunkIdentity !== void 0 &&
									se(le.intermediateText ?? "", le.chunkIdentity),
								yield le;
					})();
				}
				async getAutoContextFiles(ee) {
					const _ = this._composerDataService.getComposerData(ee);
					if (!_) return [];
					const te = await this._repositoryService
							.parallelSearch(_.text, 30, 10, {
								fast: !0,
								abortSignal: void 0,
								raceNRequests: 6,
							})
							.then((oe) =>
								oe
									.map((ae) =>
										ae.codeBlock
											? {
													uri: this._workspaceContextService.resolveRelativePath(
														ae.codeBlock.relativeWorkspacePath,
													),
													score: ae.score,
												}
											: void 0,
									)
									.filter(
										(ae) => ({ uri: ae?.uri, score: ae?.score }) !== void 0,
									),
							),
						Q = new Set(),
						Z = [];
					for (const oe of te) {
						const ae = (0, m.$8gc)(oe);
						Q.has(ae) || (Q.add(ae), Z.push(oe));
					}
					Z.sort((oe, ae) => ae.score - oe.score);
					const se = [];
					for (const oe of Z) {
						const ae = c.URI.revive(oe.uri);
						se.push({
							relativeWorkspacePath:
								this._workspaceContextService.asRelativePath(ae),
							fileContent: await this.readFileContents(ae),
						});
					}
					const re = await this._aiService.aiClient(),
						{ rankedFiles: le } = await re.autoContext({
							text: _.text,
							candidateFiles: se,
						});
					return le.map((oe) => ({
						uri: this._workspaceContextService.resolveRelativePath(
							oe.relativeWorkspacePath,
						),
						score: oe.rerankingScore,
					}));
				}
				async readFileContents(ee) {
					return (await this._fileService.readFile(ee)).value.toString();
				}
				async populateConversationWithExtraContext(ee, _, te) {
					te = { ...(te ?? {}), disableImageRemoval: !1 };
					const Q = new Map();
					return (
						ee.forEach((Z, se) => {
							if (Z.type !== g.ConversationMessage_MessageType.AI) {
								const re =
									se === ee.length - 1
										? (te?.lastBubbleContext ?? Z.context)
										: Z.context;
								if (re?.notepads)
									for (const le of re.notepads) Q.set(le.notepadId, se);
							}
						}),
						await Promise.all(
							ee.map(async (Z, se) => {
								if (Z.type !== g.ConversationMessage_MessageType.AI) {
									let re = Z.context;
									te.lastBubbleContext &&
										se === ee.length - 1 &&
										(re = te.lastBubbleContext);
									const le = re?.selectedCommits
											? this._selectedContextService.getCommitDetailsFromPartialCommits(
													re.selectedCommits,
												)
											: [],
										oe = re?.selectedPullRequests
											? this._selectedContextService.getPullRequestDetailsFromPartialPullRequests(
													re.selectedPullRequests,
												)
											: [],
										ae =
											re?.gitDiff || re?.gitDiffFromBranchToMain
												? this._selectedContextService.getDiffDetailsFromGitDiff(
														{
															gitDiff: re.gitDiff,
															gitDiffFromBranchToMain:
																re.gitDiffFromBranchToMain,
														},
													)
												: [],
										pe = re?.notepads
											? this._selectedContextService.getNotepadsContext({
													...re,
													notepads: re.notepads.filter(
														(Le) => Q.get(Le.notepadId) === se,
													),
												})
											: [],
										$e = re?.selectedImages
											? Promise.all(
													re.selectedImages.map(async (Le) => {
														try {
															return await (0, v.$F7b)(
																Le,
																() => {
																	if (
																		!te.disableImageRemoval &&
																		te.removeContext
																	) {
																		const xe = this._composerDataService
																			.getComposerData(_)
																			?.context.selectedImages?.findIndex(
																				(He) => He.path === Le.path,
																			);
																		xe !== void 0 &&
																			xe !== -1 &&
																			te.removeContext({
																				composerId: _,
																				contextType: "selectedImages",
																				index: xe,
																			});
																	}
																},
																this._fileService,
															);
														} catch (Fe) {
															console.error(Fe);
															return;
														}
													}),
												)
											: [],
										ye = Promise.all(
											(re?.folderSelections ?? []).map(async (Le) => {
												const Fe =
													this._workspaceContextService.resolveRelativePath(
														(0, J.$K9b)(Le.relativePath),
													);
												if (Fe)
													try {
														return await (0, K.$3cc)(
															Fe,
															this._fileService,
															this._selectedContextService,
														);
													} catch (Oe) {
														console.error(
															`Failed to list directory for ${Le.relativePath}:`,
															Oe,
														);
														return;
													}
											}),
										),
										[ue, fe, me, ve, ge, be] = await Promise.all([
											le,
											oe,
											ae,
											pe,
											$e,
											ye,
										]),
										Ce = ge.filter((Le) => Le !== void 0);
									return {
										...Z,
										commits: ue,
										pullRequests: fe,
										gitDiffs: me,
										notepads: ve,
										images: Ce,
										attachedFoldersListDirResults: be.filter(T.$tg),
									};
								} else {
									const re = (() => {
										if (
											Z.capabilityType ===
											R.ComposerCapabilityRequest_ComposerCapabilityType
												.TOOL_FORMER
										) {
											const le =
												this._composerDataService.getComposerCapability(
													_,
													R.ComposerCapabilityRequest_ComposerCapabilityType
														.TOOL_FORMER,
												);
											if (!le) return;
											const oe = le.getBubbleData(Z.bubbleId);
											if (!oe) return;
											let ae;
											switch (oe.tool) {
												case B.ClientSideToolV2.UNSPECIFIED:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.UNSPECIFIED,
													});
													break;
												case B.ClientSideToolV2.READ_SEMSEARCH_FILES:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.READ_SEMSEARCH_FILES,
														result:
															oe.result !== void 0
																? {
																		case: "readSemsearchFilesResult",
																		value: oe.result,
																	}
																: void 0,
													});
													break;
												case B.ClientSideToolV2.READ_FILE_FOR_IMPORTS:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.READ_FILE_FOR_IMPORTS,
														result:
															oe.result !== void 0
																? {
																		case: "readFileForImportsResult",
																		value: oe.result,
																	}
																: void 0,
													});
													break;
												case B.ClientSideToolV2.RIPGREP_SEARCH:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.RIPGREP_SEARCH,
														result:
															oe.result !== void 0
																? {
																		case: "ripgrepSearchResult",
																		value: oe.result,
																	}
																: void 0,
													});
													break;
												case B.ClientSideToolV2.RUN_TERMINAL_COMMAND_V2:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.RUN_TERMINAL_COMMAND_V2,
														result:
															oe.result !== void 0
																? {
																		case: "runTerminalCommandV2Result",
																		value: oe.result,
																	}
																: void 0,
													});
													break;
												case B.ClientSideToolV2.READ_FILE:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.READ_FILE,
														result:
															oe.result !== void 0
																? { case: "readFileResult", value: oe.result }
																: void 0,
													});
													break;
												case B.ClientSideToolV2.LIST_DIR:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.LIST_DIR,
														result:
															oe.result !== void 0
																? { case: "listDirResult", value: oe.result }
																: void 0,
													});
													break;
												case B.ClientSideToolV2.EDIT_FILE:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.EDIT_FILE,
														result:
															oe.result !== void 0
																? { case: "editFileResult", value: oe.result }
																: void 0,
													});
													break;
												case B.ClientSideToolV2.FILE_SEARCH:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.FILE_SEARCH,
														result:
															oe.result !== void 0
																? { case: "fileSearchResult", value: oe.result }
																: void 0,
													});
													break;
												case B.ClientSideToolV2.SEMANTIC_SEARCH_FULL:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.SEMANTIC_SEARCH_FULL,
														result:
															oe.result !== void 0
																? {
																		case: "semanticSearchFullResult",
																		value: oe.result,
																	}
																: void 0,
													});
													break;
												case B.ClientSideToolV2.DELETE_FILE:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.DELETE_FILE,
														result:
															oe.result !== void 0
																? { case: "deleteFileResult", value: oe.result }
																: void 0,
													});
													break;
												case B.ClientSideToolV2.CREATE_FILE:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.CREATE_FILE,
														result:
															oe.result !== void 0
																? { case: "createFileResult", value: oe.result }
																: void 0,
													});
													break;
												case B.ClientSideToolV2.REAPPLY:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.REAPPLY,
														result:
															oe.result !== void 0
																? { case: "reapplyResult", value: oe.result }
																: void 0,
													});
													break;
												case B.ClientSideToolV2.PARALLEL_APPLY:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.PARALLEL_APPLY,
														result:
															oe.result !== void 0
																? {
																		case: "parallelApplyResult",
																		value: oe.result,
																	}
																: void 0,
													});
													break;
												case B.ClientSideToolV2.GET_RELATED_FILES:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.GET_RELATED_FILES,
														result:
															oe.result !== void 0
																? {
																		case: "getRelatedFilesResult",
																		value: oe.result,
																	}
																: void 0,
													});
													break;
												case B.ClientSideToolV2.RUN_TERMINAL_COMMAND:
													ae = new O.$Mx({
														tool: B.ClientSideToolV2.RUN_TERMINAL_COMMAND,
														result:
															oe.result !== void 0
																? {
																		case: "runTerminalCommandResult",
																		value: oe.result,
																	}
																: void 0,
													});
													break;
												default: {
													const pe = oe;
													throw new Error(`Tool ${pe} is not supported`);
												}
											}
											return new g.$UA({
												toolCallId: oe.toolCallId,
												toolName: oe.name,
												rawArgs: oe.rawArgs,
												result: ae,
												error: oe.error,
											});
										}
									})();
									return {
										...Z,
										webReferences: Z.webCitations ?? [],
										docsReferences: Z.docsCitations ?? [],
										toolResults: re ? [re] : [],
										suggestedCodeBlocks:
											Z.codeBlocks?.map((le) => ({
												relativeWorkspacePath:
													this._workspaceContextService.asRelativePath(le.uri),
											})) ?? [],
									};
								}
							}),
						)
					);
				}
				addContinuationPromptToConversation(ee, _, te) {
					const Q = _.text.split(`
`),
						Z = Q[Q.length - 1] || "",
						se = Z.trim()
							? `Continue writing exactly where you left off. Do not repeat yourself. Start your response with: ${Z}`
							: "Continue your previous response. Do not repeat yourself.",
						re = [
							...ee,
							{
								...(0, s.createDefaultConversationMessage)(),
								text: `Your response got cut off, because you only have limited response space. ${se}`,
							},
						],
						le = _.text
							.split(`
`)
							.slice(0, -1)
							.join(`
`);
					return (
						this._composerDataService.updateComposerDataSetStore(te, (oe) =>
							oe(
								"conversation",
								(ae) => ae.bubbleId === _.bubbleId,
								"text",
								le,
							),
						),
						(_.text = le),
						re
					);
				}
				getUrisForCheckpoints(ee) {
					const _ = new Set();
					for (const te of Object.keys(ee.codeBlockData)) _.add(te);
					for (const te of ee.conversation)
						if (
							te.capabilityType ===
							R.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_FORMER
						) {
							const Q = this._composerDataService
								.getComposerCapability(
									ee.composerId,
									R.ComposerCapabilityRequest_ComposerCapabilityType
										.TOOL_FORMER,
								)
								?.getBubbleData(te.bubbleId);
							if (
								Q?.tool === B.ClientSideToolV2.DELETE_FILE &&
								Q.params?.relativeWorkspacePath
							) {
								const Z = this._workspaceContextService.resolveRelativePath(
									Q.params.relativeWorkspacePath,
								);
								_.add(Z.toString());
							}
						}
					return _;
				}
				async createCurrentCheckpoint(ee, _) {
					const te = this._composerDataService.getComposerData(ee);
					if (!te)
						throw new Error("[composer] No composer found for the given ID");
					if (this._composerDataService.getComposerForceMode(ee) === "chat")
						return;
					const Q = (0, s.createEmptyCheckpoint)(),
						Z = this.getUrisForCheckpoints(te);
					for (const se of Z) {
						const re = c.URI.parse(se);
						if (!(await this._fileService.exists(re))) {
							Q.nonExistentFiles.push({ uri: re });
							continue;
						}
						try {
							const le = this._composerDataService.getInlineDiff(ee, re);
							if (le) {
								if ("newTextLines" in le && "originalTextLines" in le) {
									const oe = le.composerMetadata?.version ?? 0,
										ae = await this.computeLineDiffs(
											ee,
											re,
											le.originalTextLines,
										),
										pe = await this.computeLineDiffs(ee, re, le.newTextLines);
									this._composerDataService.updateComposerCodeBlock(
										ee,
										re,
										oe,
										{ newModelDiffWrtV0: pe, originalModelDiffWrtV0: ae },
									),
										Q.activeInlineDiffs.push({ uri: re, version: oe });
								}
							} else {
								const oe =
										await this._textModelService.createModelReference(re),
									ae = oe.object.textEditorModel,
									pe = await this.computeLineDiffs(
										ee,
										re,
										ae.getLinesContent(),
									);
								Q.files.push({ uri: re, originalModelDiffWrtV0: pe }),
									oe.dispose();
							}
						} catch (le) {
							console.error(
								`[composer] Error saving latest state for file ${se}:`,
								le,
							);
						}
					}
					if (_) {
						const se = _.files.filter(
							(re) =>
								re.isNewlyCreated &&
								!Q.files.find((le) => le.uri.toString() === re.uri.toString()),
						);
						Q.files.push(...se),
							(Q.newlyCreatedFolders = [..._.newlyCreatedFolders]);
					}
					return (
						(Q.inlineDiffNewlyCreatedResources = {
							files: [...te.newlyCreatedFiles],
							folders: [...te.newlyCreatedFolders],
						}),
						Q
					);
				}
				getCodeBlockDataFromBubbleId(ee, _) {
					const te = this._composerDataService.getComposerData(ee);
					if (!te)
						throw new Error("[composer] No composer found for the given ID");
					const Q = te.conversation.findIndex((re) => re.bubbleId === _);
					if (Q === -1)
						throw new Error(
							"[composer] No bubble found with the given bubble ID",
						);
					const Z = {};
					te.conversation.slice(Q).forEach((re) => {
						re.codeBlocks?.forEach((le) => {
							const oe = le.uri.toString();
							(!(oe in Z) || le.version < Z[oe]) && (Z[oe] = le.version);
						});
					});
					const se = { ...te.codeBlockData };
					if (Object.keys(Z).length > 0) {
						for (const [re, le] of Object.entries(Z))
							if (se[re]) {
								const oe = se[re].findIndex((ae) => ae.version === le);
								oe !== -1 && (se[re] = se[re].slice(0, oe)),
									se[re].length === 0 && delete se[re];
							}
					}
					return se;
				}
				removeMessagesAfterBubble(ee, _) {
					const te = this._composerDataService.getComposerData(ee);
					if (!te || _ === void 0) return;
					const Q = te.conversation.findIndex((oe) => oe.bubbleId === _);
					if (Q === -1) return;
					const Z = this.getCodeBlockDataFromBubbleId(ee, _);
					this._composerDataService.updateComposerDataSetStore(ee, (oe) =>
						oe("currentBubbleId", void 0),
					),
						this._composerDataService.updateComposerDataSetStore(ee, (oe) =>
							oe("latestCheckpoint", void 0),
						);
					const se = te.conversation.slice(0, Q);
					this._composerDataService.updateComposerDataSetStore(ee, (oe) =>
						oe("conversation", se),
					);
					const re = Object.keys(te.codeBlockData).filter((oe) => !(oe in Z));
					for (const oe of re)
						this._composerDataService.updateComposerDataSetStore(ee, (ae) =>
							ae("codeBlockData", oe, void 0),
						);
					for (const oe of Object.keys(Z))
						this._composerDataService.updateComposerDataSetStore(ee, (ae) =>
							ae("codeBlockData", oe, Z[oe]),
						);
					const le = [{ type: "extra" }, { type: "composer" }];
					for (const oe of Object.keys(Z))
						le.push({
							type: "code",
							uri: c.URI.parse(oe),
							version: Z[oe][Z[oe].length - 1].version,
						});
					this._composerDataService.updateComposerDataSetStore(ee, (oe) =>
						oe("tabs", le),
					);
				}
				applyDiffToLines(ee, _) {
					const te = [];
					let Q = 0;
					for (let Z = 0; Z < ee.length; Z++) {
						const se = ee[Z];
						if (Q < _.length) {
							const { original: re, modified: le } = _[Q];
							if (
								Z === re.startLineNumber - 1 &&
								(te.push(...le),
								Q++,
								re.endLineNumberExclusive !== re.startLineNumber)
							) {
								Z += re.endLineNumberExclusive - re.startLineNumber - 1;
								continue;
							}
						}
						te.push(se);
					}
					for (; Q < _.length; ) {
						const { original: Z, modified: se } = _[Q];
						te.push(...se), Q++;
					}
					return te;
				}
				async runCapabilitiesForProcess(ee, _, te, Q) {
					const Z = this._composerDataService.getComposerData(ee);
					if (!Z) return _ === "composer-settled" ? !1 : void 0;
					const se = (0, L.getCapabilitiesForProcess)(Z.capabilities, _, te);
					if (_ === "process-stream") {
						let le = te.stream;
						for (const oe of se)
							oe.processStream && (le = await oe.processStream(te));
						return le;
					}
					if (_ === "mutate-request") {
						for (const le of se)
							await le.runInPlaceMutateRequestBeforeSubmit?.(Q?.request, te);
						return;
					}
					if (_ === "start-submit-chat") {
						const le = se
							.filter((oe) => oe.onStartSubmitChatReturnShouldStop)
							.sort((oe, ae) => oe.priority - ae.priority);
						for (const oe of le)
							if (await oe.onStartSubmitChatReturnShouldStop?.(te)) return !0;
					}
					if (_ === "before-submit-chat") {
						const le = se
							.filter((oe) => oe.onBeforeSubmitChat)
							.sort((oe, ae) => oe.priority - ae.priority);
						for (const oe of le)
							if (await oe.onBeforeSubmitChat?.(te)) return !0;
						return !1;
					}
					const re = await Promise.all(
						se.map(async (le) => {
							switch (_) {
								case "process-codeblock":
									await le.processCodeBlock?.(te);
									return;
								case "after-submit-chat":
									await le.onAfterSubmitChat?.(te);
									return;
								case "after-apply":
									await le.onAfterApply?.(te);
									return;
								case "composer-done":
									await le.onComposerDone?.(te);
									return;
								case "composer-settled":
									return (
										(await le.onComposerSettledReturnShouldLoop?.(te)) ?? !1
									);
								default:
									return;
							}
						}),
					);
					if (_ === "composer-settled") return re.some((le) => le === !0);
				}
				async *handleTaskStreamChatContextResponse(ee, _, te, Q) {
					const Z = { stack: [], error: void 0, hasError: !1 };
					try {
						const se = ms(
								Z,
								(0, z.span)(
									"ComposerUtilsService.handleTaskStreamChatContextResponse",
								),
								!1,
							),
							re = this._aiTaskService.handleTaskGetStream(ee, Q);
						for await (const le of re)
							switch (le.response.case) {
								case "output": {
									yield { text: le.response.value.text };
									break;
								}
								case "gatheringStep": {
									this._composerDataService.updateComposerBubble(_, te, {
										steps: [
											...(this._composerDataService.getComposerBubble(_, te)
												?.steps || []),
											{ type: "gathering", data: le.response.value, files: [] },
										],
									});
									break;
								}
								case "rerankingStep": {
									this._composerDataService.updateComposerBubble(_, te, {
										steps: [
											...(this._composerDataService.getComposerBubble(_, te)
												?.steps || []),
											{ type: "reranking", data: le.response.value, files: [] },
										],
									});
									break;
								}
								case "reasoningStep": {
									this._composerDataService.updateComposerBubble(_, te, {
										steps: [
											...(this._composerDataService.getComposerBubble(_, te)
												?.steps || []),
											{
												type: "reasoning",
												data: le.response.value,
												substeps: [],
											},
										],
									});
									break;
								}
								case "reasoningSubstep": {
									this._composerDataService.updateComposerDataSetStore(
										_,
										(oe) =>
											oe(
												"conversation",
												(ae) => ae.bubbleId === te,
												"steps",
												(ae) =>
													ae.type === "reasoning" &&
													ae.data.index === le.response.value.stepIndex,
												"substeps",
												(ae) => [...ae, le.response.value],
											),
									);
									break;
								}
								case "gatheringFile": {
									this._composerDataService.updateComposerDataSetStore(
										_,
										(oe) =>
											oe(
												"conversation",
												(ae) => ae.bubbleId === te,
												"steps",
												(ae) =>
													ae.type === "gathering" &&
													ae.data.index === le.response.value.stepIndex,
												"files",
												(ae) => [...ae, le.response.value],
											),
									);
									break;
								}
								case "rerankingFile": {
									this._composerDataService.updateComposerDataSetStore(
										_,
										(oe) =>
											oe(
												"conversation",
												(ae) => ae.bubbleId === te,
												"steps",
												(ae) =>
													ae.type === "reranking" &&
													ae.data.index === le.response.value.stepIndex,
												"files",
												(ae) => [...ae, le.response.value],
											),
									);
									break;
								}
							}
					} catch (se) {
						(Z.error = se), (Z.hasError = !0);
					} finally {
						ps(Z);
					}
				}
				selectNextComposer() {
					const ee = this._composerDataService.selectedComposerId,
						_ = (0, M.sortComposers)([
							...this._composerDataService.allComposersData.allComposers.filter(
								(Q) =>
									this._composerDataService.getComposerForceMode(Q) !== "chat",
							),
						]),
						te = _.findIndex((Q) => Q.composerId === ee);
					if (te > 0) {
						const Q = _[te - 1].composerId;
						this._composerDataService.setAllComposersData(
							"selectedComposerId",
							Q,
						);
					} else
						this._composerDataService.setAllComposersData(
							"selectedComposerId",
							_[_.length - 1].composerId,
						);
				}
				selectPrevComposer() {
					const ee = this._composerDataService.selectedComposerId,
						_ = (0, M.sortComposers)([
							...this._composerDataService.allComposersData.allComposers.filter(
								(Q) =>
									this._composerDataService.getComposerForceMode(Q) !== "chat",
							),
						]),
						te = _.findIndex((Q) => Q.composerId === ee);
					if (te < _.length - 1) {
						const Q = _[te + 1].composerId;
						this._composerDataService.setAllComposersData(
							"selectedComposerId",
							Q,
						);
					} else
						this._composerDataService.setAllComposersData(
							"selectedComposerId",
							_[0].composerId,
						);
				}
				selectNextComposerChat() {
					const ee = this._composerDataService.selectedChatId,
						_ = (0, M.sortComposers)([
							...this._composerDataService.allComposersData.allComposers.filter(
								(Q) =>
									this._composerDataService.getComposerForceMode(Q) === "chat",
							),
						]),
						te = _.findIndex((Q) => Q.composerId === ee);
					if (te > 0) {
						const Q = _[te - 1].composerId;
						this._composerDataService.setAllComposersData("selectedChatId", Q);
					} else
						this._composerDataService.setAllComposersData(
							"selectedChatId",
							_[_.length - 1].composerId,
						);
				}
				selectPrevComposerChat() {
					const ee = this._composerDataService.selectedChatId,
						_ = (0, M.sortComposers)([
							...this._composerDataService.allComposersData.allComposers.filter(
								(Q) =>
									this._composerDataService.getComposerForceMode(Q) === "chat",
							),
						]),
						te = _.findIndex((Q) => Q.composerId === ee);
					if (te < _.length - 1) {
						const Q = _[te + 1].composerId;
						this._composerDataService.setAllComposersData("selectedChatId", Q);
					} else
						this._composerDataService.setAllComposersData(
							"selectedChatId",
							_[0].composerId,
						);
				}
				async computeDiff(ee, _, te) {
					if (ee === _) return new g.$dB({ chunks: [], hitTimeout: !1 });
					const Q = await this.computeLinesDiffWithSemaphore({
						first: ee,
						second: _,
						options: {
							ignoreTrimWhitespace: !0,
							computeMoves: !1,
							maxComputationTimeMs: 1e3,
						},
					});
					if (Q.hitTimeout) return new g.$dB({ chunks: [], hitTimeout: !0 });
					const re = Q.changes
						.map((le) => {
							const oe = ee
									.split(`
`)
									.slice(
										le.original.startLineNumber - 1,
										le.original.endLineNumberExclusive - 1,
									)
									.map((pe) => "- " + pe),
								ae = _.split(`
`)
									.slice(
										le.modified.startLineNumber - 1,
										le.modified.endLineNumberExclusive - 1,
									)
									.map((pe) => "+ " + pe);
							return new g.$eB({
								diffString: [...oe, ...ae].join(`
`),
								oldStart: le.original.startLineNumber,
								newStart: le.modified.startLineNumber,
								oldLines:
									le.original.endLineNumberExclusive -
									le.original.startLineNumber,
								newLines:
									le.modified.endLineNumberExclusive -
									le.modified.startLineNumber,
								linesAdded:
									le.modified.endLineNumberExclusive -
									le.modified.startLineNumber,
								linesRemoved:
									le.original.endLineNumberExclusive -
									le.original.startLineNumber,
							});
						})
						.reduce((le, oe) => {
							if (le.length === 0) return [oe];
							const ae = le[le.length - 1];
							return (
								this.shouldMergeChunks(ae, oe)
									? (le[le.length - 1] = this.mergeChunks(ae, oe, ee, _))
									: le.push(oe),
								le
							);
						}, [])
						.map((le) => this.growChunk(le, ee, _));
					return new g.$dB({ chunks: re, hitTimeout: !1 });
				}
				computeLinesDiffWithSemaphore({ first: ee, second: _, options: te }) {
					return this._composerDiffSemaphore.withSemaphore(async () => {
						const Q = await (0, $.$ojb)(ee),
							Z = await (0, $.$ojb)(_),
							se = JSON.stringify({ firstSha1: Q, secondSha1: Z }),
							re = this._composerDiffCache.get(se);
						if (re) return re;
						const le = await this._editorWorkerService.computeLinesDiff(
							ee.split(`
`),
							_.split(`
`),
							te,
						);
						return this._composerDiffCache.set(se, le), le;
					});
				}
				shouldMergeChunks(ee, _) {
					return _.newStart - (ee.newStart + ee.newLines) <= X;
				}
				mergeChunks(ee, _, te, Q) {
					const Z = Q.split(`
`)
						.slice(ee.newStart + ee.newLines - 1, _.newStart - 1)
						.map((se) => "  " + se);
					return new g.$eB({
						diffString:
							ee.diffString +
							(Z.length > 0
								? `
` +
									Z.join(`
`) +
									`
`
								: `
`) +
							_.diffString,
						oldStart: ee.oldStart,
						newStart: ee.newStart,
						oldLines: _.oldStart + _.oldLines - ee.oldStart,
						newLines: _.newStart + _.newLines - ee.newStart,
						linesRemoved: ee.linesRemoved + _.linesRemoved,
						linesAdded: ee.linesAdded + _.linesAdded,
					});
				}
				growChunk(ee, _, te) {
					const Q = _.split(`
`),
						Z = te.split(`
`),
						se = Math.max(1, ee.newStart - Y),
						re = Math.min(Z.length + 1, ee.newStart + ee.newLines + Y),
						le = Math.max(1, ee.oldStart - Y),
						oe = Math.min(Q.length + 1, ee.oldStart + ee.oldLines + Y),
						ae = Z.slice(se - 1, ee.newStart - 1).map((ye) => "  " + ye),
						pe = Z.slice(ee.newStart + ee.newLines - 1, re - 1).map(
							(ye) => "  " + ye,
						),
						$e = ee.diffString.split(`
`);
					return new g.$eB({
						diffString: [...ae, ...$e, ...pe].join(`
`),
						oldStart: le,
						newStart: se,
						oldLines: oe - le,
						newLines: re - se,
						linesAdded: ee.linesAdded,
						linesRemoved: ee.linesRemoved,
					});
				}
				codeChunkHasFullFileIntent(ee) {
					return (
						ee.intent !== void 0 &&
						[
							g.ConversationMessage_CodeChunk_Intent.COMPOSER_FILE,
							g.ConversationMessage_CodeChunk_Intent.MENTIONED_FILE,
						].includes(ee.intent)
					);
				}
				async getRootFolderFileTreeWithDistance(ee, _) {
					const te = async (Z, se = 0, re = "", le = !0) => {
							if (se > _) return "";
							const oe = await this._fileService.resolve(Z, {
									resolveMetadata: !0,
								}),
								ae = "/" + this._workspaceContextService.asRelativePath(Z);
							if (
								this._gitIgnoreFile &&
								ae !== "/" &&
								this._gitIgnoreFile.isArbitraryPathIgnored(
									Z.path,
									oe.isDirectory,
								)
							)
								return "";
							let pe =
								re +
								(le ? "\u2514\u2500\u2500 " : "\u251C\u2500\u2500 ") +
								oe.name +
								`
`;
							if (oe.isDirectory && oe.children) {
								const $e = oe.children.sort((ye, ue) =>
									ye.isDirectory === ue.isDirectory
										? ye.name.localeCompare(ue.name)
										: ye.isDirectory
											? -1
											: 1,
								);
								for (let ye = 0; ye < $e.length; ye++) {
									const ue = $e[ye],
										fe = c.URI.joinPath(Z, ue.name),
										me = re + (le ? "    " : "\u2502   "),
										ve = ye === $e.length - 1;
									pe += await te(fe, se + 1, me, ve);
								}
							}
							return pe;
						},
						Q = await te(ee);
					return (
						console.log(
							`[composer] root folder file tree within distance ${_}:`,
							Q,
						),
						Q
					);
				}
				async getFileTreeWithinDistance(ee, _) {
					const te =
							this._workspaceContextService.getWorkspace().folders[0].uri,
						Q = this._workspaceContextService.asRelativePath(ee);
					if (Q === "" || Q.indexOf("/") === -1)
						return this.getRootFolderFileTreeWithDistance(te, _ - 1);
					const Z = (oe) => c.URI.joinPath(oe, ".."),
						se = async (oe, ae, pe, $e = "", ye = !0) => {
							const ue = await this._fileService.resolve(oe, {
									resolveMetadata: !0,
								}),
								fe = "/" + this._workspaceContextService.asRelativePath(oe);
							if (
								this._gitIgnoreFile &&
								fe !== "/" &&
								this._gitIgnoreFile.isArbitraryPathIgnored(
									oe.path,
									ue.isDirectory,
								)
							)
								return "";
							let me =
								$e +
								(ye ? "\u2514\u2500\u2500 " : "\u251C\u2500\u2500 ") +
								ue.name +
								`
`;
							if (pe > 0 && ue.isDirectory && ue.children) {
								const ve = ue.children.sort((ge, be) =>
									ge.isDirectory === be.isDirectory
										? ge.name.localeCompare(be.name)
										: ge.isDirectory
											? -1
											: 1,
								);
								for (let ge = 0; ge < ve.length; ge++) {
									const be = ve[ge],
										Ce = c.URI.joinPath(oe, be.name),
										Le = $e + (ye ? "    " : "\u2502   "),
										Fe = ge === ve.length - 1;
									this.getDistance(Ce, ae) <= _ &&
										(me += await se(Ce, ae, pe - 1, Le, Fe));
								}
							}
							return me;
						};
					let re = ee;
					for (
						let oe = 0;
						oe < _ && !re.toString().startsWith(te.toString());
						oe++
					) {
						const ae = Z(re);
						if (ae.toString() === re.toString()) break;
						re = ae;
					}
					const le = await se(re, ee, _);
					return (
						console.log(
							`[composer] file tree within distance ${_} of ${ee.fsPath}:`,
							le,
						),
						le
					);
				}
				getDistance(ee, _) {
					const te = ee.path.split("/").filter(Boolean),
						Q = _.path.split("/").filter(Boolean);
					let Z = 0;
					for (; Z < te.length && Z < Q.length && te[Z] === Q[Z]; ) Z++;
					return te.length - Z + (Q.length - Z);
				}
				async getGitIgnoreFile(ee) {
					const _ = c.URI.joinPath(ee, ".gitignore");
					try {
						if (!(await this._fileService.exists(_))) return null;
						const Q = await this._fileService.readFile(_);
						return new S.$sXb(Q.value.toString(), ee.path);
					} catch (te) {
						return console.error("Error reading .gitignore file:", te), null;
					}
				}
				async initializeGitIgnoreFile() {
					const ee =
						this._workspaceContextService.getWorkspace().folders[0]?.uri;
					if (ee) {
						const _ = c.URI.joinPath(ee, "node_modules");
						this._gitIgnoreFile = await this.getGitIgnoreFile(ee);
					}
				}
				async getFileDiff(ee, _, te) {
					const se = (
							await new I.$rqb().diffLines(
								_.join(`
`),
								ee.join(`
`),
								!1,
								{ ignoreWhitespace: !0 },
							)
						).flatMap((ye) =>
							ye.value
								.split(`
`)
								.map((ue) => ({
									added: ye.added,
									removed: ye.removed,
									value: ue,
								})),
						),
						re = [],
						le = 3,
						oe = (ye) => ye.trim() === "";
					let ae = null,
						pe = -1;
					for (let ye = 0; ye < se.length; ye++) {
						const ue = se[ye],
							fe = (ue.added || ue.removed) && !oe(ue.value);
						if (fe || (ae && ye - pe <= le)) {
							if (!ae) {
								ae = { lines: [], startLine: Math.max(0, ye - le) };
								for (let me = Math.max(0, ye - le); me < ye; me++)
									ae.lines.push(` ${se[me].value}`);
							}
							fe
								? (ae.lines.push(`${ue.added ? "+" : "-"} ${ue.value}`),
									(pe = ye))
								: ae.lines.push(`  ${ue.value}`);
						} else
							ae &&
								(re.push(
									new n.$Es({
										content: `@@ -${ae.startLine + 1},${ae.lines.length} +${ae.startLine + 1},${ae.lines.length} @@`,
										lines: ae.lines,
									}),
								),
								(ae = null));
					}
					return (
						ae &&
							re.push(
								new n.$Es({
									content: `@@ -${ae.startLine + 1},${ae.lines.length} +${ae.startLine + 1},${ae.lines.length} @@`,
									lines: ae.lines,
								}),
							),
						new p.$Ds({ from: te, to: te, chunks: re })
					);
				}
				shouldShowCancel(ee) {
					const _ = this._composerDataService.getComposerData(ee);
					return _
						? this._composerDataService.getPendingUserDecisionGroup(ee).length >
								0 ||
							_.status === "generating" ||
							this._composerDataService
								.getCodeBlocksOfStatuses(ee, "applying")
								.filter((Z) => !Z.isNotApplied).length > 0
							? !0
							: this._composerDataService.isRunningCapabilities(ee)
						: !1;
				}
				changeCodeBlockUri(ee, _, te, Q) {
					const Z = this._composerDataService.getComposerData(ee);
					if (!Z)
						throw new Error("[composer] No composer found for the given ID");
					const se = _.toString(),
						re = te.toString(),
						le = Z.conversation.findIndex((pe) =>
							pe.codeBlocks?.some(
								($e) => $e.uri.toString() === se && $e.version === Q,
							),
						);
					if (le === -1)
						throw new Error(
							"[composer] No message found containing the specified codeblock",
						);
					const oe = Z.conversation[le].codeBlocks?.findIndex(
						(pe) => pe.uri.toString() === se && pe.version === Q,
					);
					if (oe === void 0 || oe === -1)
						throw new Error("[composer] Codeblock not found in the message");
					const ae = this.determineNewVersion(Z, re, le, oe);
					if (
						(this.updateCodeBlockVersions(ee, _, te, Q, ae, le),
						Z.codeBlockData[se])
					) {
						const pe = Z.codeBlockData[se],
							$e = pe.findIndex((ye) => ye.version === Q);
						if ($e !== -1) {
							const ye = { ...pe[$e], uri: te, version: ae },
								ue = pe.filter((fe, me) => me !== $e);
							ue.length === 0
								? this._composerDataService.updateComposerDataSetStore(
										ee,
										(fe) => fe("codeBlockData", se, void 0),
									)
								: this._composerDataService.updateComposerDataSetStore(
										ee,
										(fe) => fe("codeBlockData", se, ue),
									),
								this._composerDataService.updateComposerDataSetStore(ee, (fe) =>
									fe("codeBlockData", re, (me = []) =>
										[...me, ye].sort((ge, be) => ge.version - be.version),
									),
								);
						}
					}
					this._onShouldResetCodeBlockCount.fire({
						composerId: ee,
						messageIndex: le,
					}),
						Z.conversation.forEach((pe, $e) => {
							if (pe.codeBlocks) {
								const ye = pe.codeBlocks.map((ue) =>
									ue.uri.toString() === se && ue.version === Q
										? { ...ue, uri: te, version: ae }
										: ue,
								);
								if (
									(this._composerDataService.updateComposerDataSetStore(
										ee,
										(ue) => ue("conversation", $e, "codeBlocks", ye),
									),
									$e === le)
								) {
									const ue = this._workspaceContextService.asRelativePath(te),
										fe = (0, F.replaceUriInCodeBlock)(pe.text, oe, ue);
									this._composerDataService.updateComposerDataSetStore(
										ee,
										(me) => me("conversation", $e, "text", fe),
									);
								}
							}
						});
					for (let pe = le + 1; pe < Z.conversation.length; pe++)
						if (
							Z.conversation[pe].type === g.ConversationMessage_MessageType.AI
						) {
							const $e = Z.conversation[pe].text;
							this._composerDataService.updateComposerDataSetStore(ee, (ye) =>
								ye("conversation", pe, "text", $e + " "),
							),
								this._composerDataService.updateComposerDataSetStore(ee, (ye) =>
									ye("conversation", pe, "text", $e),
								);
						}
					return ae;
				}
				determineNewVersion(ee, _, te, Q) {
					const Z = new Set();
					for (let re = 0; re <= te; re++)
						ee.conversation[re].codeBlocks?.forEach((oe, ae) => {
							oe.uri.toString() === _ &&
								(re < te || (re === te && ae < Q)) &&
								Z.add(oe.version);
						});
					let se = 0;
					for (; Z.has(se); ) se++;
					return se;
				}
				updateCodeBlockVersions(ee, _, te, Q, Z, se) {
					const re = this._composerDataService.getComposerData(ee);
					if (!re) return;
					const le = _.toString(),
						oe = te.toString();
					if (re.codeBlockData[le]) {
						const ae = re.codeBlockData[le].map((pe) =>
							pe.version > Q ? { ...pe, version: pe.version - 1 } : pe,
						);
						this._composerDataService.updateComposerDataSetStore(ee, (pe) =>
							pe("codeBlockData", le, ae),
						);
					}
					if (re.codeBlockData[oe]) {
						const ae = re.codeBlockData[oe].map((pe) =>
							pe.version >= Z ? { ...pe, version: pe.version + 1 } : pe,
						);
						this._composerDataService.updateComposerDataSetStore(ee, (pe) =>
							pe(
								"codeBlockData",
								oe,
								ae.sort(($e, ye) => $e.version - ye.version),
							),
						);
					}
					re.conversation.forEach((ae, pe) => {
						if (pe >= se && ae.codeBlocks) {
							const $e = ae.codeBlocks.map((ye) =>
								ye.uri.toString() === le && ye.version > Q
									? { ...ye, version: ye.version - 1 }
									: ye.uri.toString() === oe && ye.version >= Z
										? { ...ye, version: ye.version + 1 }
										: ye,
							);
							this._composerDataService.updateComposerDataSetStore(ee, (ye) =>
								ye("conversation", pe, "codeBlocks", $e),
							);
						}
					});
				}
				getFilesToRevertForCheckpoint(ee, _, te, Q) {
					const Z = this._composerDataService.getComposerData(ee);
					if (!Z)
						throw new Error("[composer] No composer found for the given ID");
					const se = new Set(
							Q.activeInlineDiffs?.map(($e) => $e.uri.toString()) ?? [],
						),
						re = new Set(),
						le = new Map();
					Q.newlyCreatedFolders.forEach(($e) => {
						re.add($e.uri.toString());
					});
					const oe = _ + 1,
						ae = te;
					for (const $e of Z.conversation.slice(oe, ae)) {
						const ye = $e.checkpoint;
						ye &&
							(ye.files.forEach((ue) => {
								const fe = ue.uri.toString();
								!Q.files.some((me) => me.uri.toString() === fe) &&
									!le.has(fe) &&
									!se.has(fe) &&
									le.set(fe, { checkpoint: ye });
							}),
							ye.newlyCreatedFolders.forEach((ue) => {
								re.add(ue.uri.toString());
							}));
					}
					return {
						filesToRevert: new Set([
							...Q.files
								.filter(($e) => !se.has($e.uri.toString()))
								.map(($e) => $e.uri.toString()),
							...le.keys(),
						]),
						intermediateFiles: le,
						foldersToDelete: re,
					};
				}
				async isCheckpointSameAsCurrent(ee, _) {
					const te = this._composerDataService.getComposerData(ee);
					if (!te) return !1;
					let Q,
						Z = new Set(),
						se = new Map(),
						re = new Set();
					if (typeof _ == "string") {
						const oe = te.conversation.findIndex(($e) => $e.bubbleId === _);
						if (oe === -1)
							return (
								console.error(
									"[composer] No message found with the given bubble ID",
								),
								!1
							);
						const ae = te.conversation[oe].checkpoint;
						if (!ae) return !0;
						Q = ae;
						const pe = te.currentBubbleId
							? te.conversation.findIndex(
									($e) => $e.bubbleId === te.currentBubbleId,
								)
							: te.conversation.length - 1;
						({
							filesToRevert: Z,
							intermediateFiles: se,
							foldersToDelete: re,
						} = this.getFilesToRevertForCheckpoint(ee, oe, pe, Q));
					} else {
						Q = _;
						const oe = new Set(
							Q.activeInlineDiffs?.map((ae) => ae.uri.toString()) ?? [],
						);
						Z = new Set(
							Q.files
								.map((ae) => ae.uri.toString())
								.filter((ae) => !oe.has(ae)),
						);
					}
					const le = await this._composerDataService.getCurrentFilesContent(
						Array.from(Z),
					);
					for (const oe of Z) {
						let ae;
						if (Q.files.some(($e) => $e.uri.toString() === oe))
							ae = Q.files.find(($e) => $e.uri.toString() === oe);
						else {
							const $e = se.get(oe);
							$e &&
								(ae = $e.checkpoint.files.find(
									(ye) => ye.uri.toString() === oe,
								));
						}
						const pe = le.get(oe) || [];
						if (ae)
							if (ae.isNewlyCreated) {
								if (await this._fileService.exists(ae.uri)) return !1;
							} else {
								if (!(await this._fileService.exists(ae.uri))) return !1;
								const $e =
									this.getCodeBlockLinesByDiff(
										te.composerId,
										ae.uri,
										ae.originalModelDiffWrtV0 ?? [],
									) ?? [];
								if (!this.areContentsEqual(pe, $e ?? [])) return !1;
							}
						else if (pe.length > 0) return !1;
					}
					if (re.size > 0 || Q.nonExistentFiles.length > 0) return !1;
					for (const oe of Q.activeInlineDiffs ?? []) {
						const { uri: ae, version: pe } = oe,
							$e =
								this._reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
									(ye) => ye.uri.toString() === ae.toString(),
								);
						if (
							!$e ||
							pe !== $e.composerMetadata?.version ||
							te.composerId !== $e.composerMetadata?.composerId
						)
							return !1;
					}
					return !0;
				}
				areContentsEqual(ee, _) {
					if (ee.length !== _.length) return !1;
					for (let te = 0; te < ee.length; te++)
						if (ee[te] !== _[te]) return !1;
					return !0;
				}
				async computeLineDiffs(ee, _, te) {
					const Q = this.getCodeBlockV0ModelLines(ee, _);
					if (!Q) return [];
					const Z = await this._editorWorkerService.computeLinesDiff(Q, te, {
						ignoreTrimWhitespace: !1,
						computeMoves: !1,
						maxComputationTimeMs: 500,
						...W,
					});
					let se = Z.changes;
					return (
						Z.hitTimeout &&
							(se = [
								new G.$CL(
									new V.$rL(1, Q.length + 1),
									new V.$rL(1, te.length + 1),
									void 0,
								),
							]),
						se.map((le) => ({
							original: le.original,
							modified: te.slice(
								le.modified.startLineNumber - 1,
								le.modified.endLineNumberExclusive - 1,
							),
						}))
					);
				}
				createCodeBlockCacheKey(ee, _, te) {
					return `${typeof ee == "string" ? ee : ee.data.composerId}-${_.toString()}-${te}`;
				}
				getCodeBlockLinesByDiff(ee, _, te) {
					if (!this._composerDataService.getComposerData(ee)) return null;
					const Z = this.getCodeBlockV0ModelLines(ee, _);
					return te.length === 0
						? (Z ?? [])
						: this.applyDiffToLines(Z ?? [], te);
				}
				getCodeBlockV0ModelLines(ee, _) {
					const te = this._composerDataService.getComposerData(ee);
					return te
						? te.originalModelLines[_.toString()]
							? te.originalModelLines[_.toString()]
							: (this._composerDataService.getComposerCodeBlock(ee, _, 0)
									?.originalModelLines ?? null)
						: null;
				}
				getCodeBlockOriginalModelLines(ee, _, te, Q) {
					if (!this._composerDataService.getComposerData(ee)) return null;
					const se = this._composerDataService.getComposerCodeBlock(ee, _, te);
					if (!se || !se.originalModelDiffWrtV0) return null;
					if (!Q?.shouldChain && se.isChained) {
						const re = this._composerDataService.getComposerCodeBlock(
							ee,
							_,
							te - 1,
						);
						return !re || !re.newModelDiffWrtV0
							? null
							: this.getCodeBlockLinesByDiff(ee, _, re.newModelDiffWrtV0 ?? []);
					}
					return this.getCodeBlockLinesByDiff(
						ee,
						_,
						se.originalModelDiffWrtV0 ?? [],
					);
				}
				getCodeBlockNewModelLines(ee, _, te) {
					if (!this._composerDataService.getComposerData(ee)) return null;
					const Z = this._composerDataService.getComposerCodeBlock(ee, _, te);
					return !Z || !Z.newModelDiffWrtV0
						? null
						: this.getCodeBlockLinesByDiff(ee, _, Z.newModelDiffWrtV0 ?? []);
				}
				constructDiffResources(ee) {
					const _ = this._composerDataService.getComposerData(ee);
					return _
						? _.tabs
								.filter((Q) => Q.type === "code")
								.filter(
									(Q) =>
										!!this._composerDataService.getInlineDiff(
											_.composerId,
											Q.uri,
										),
								)
								.map((Q) => {
									const Z = this.getCodeBlockOriginalModelLines(
											ee,
											Q.uri,
											Q.version,
										),
										se = this.getCodeBlockNewModelLines(ee, Q.uri, Q.version),
										re =
											Z?.join(`
`) ?? "",
										le =
											se?.join(`
`) ?? "";
									return {
										original: {
											resource: Q.uri.with({ fragment: "original" }),
											contents: re,
										},
										modified: { resource: Q.uri, contents: le },
									};
								})
						: [];
				}
				shouldShowCheckpointInToolFormerMessage(ee, _) {
					switch (_.tool) {
						case B.ClientSideToolV2.EDIT_FILE: {
							if (!_.params?.relativeWorkspacePath) return !1;
							const Q = this._workspaceContextService.resolveRelativePath(
								_.params.relativeWorkspacePath,
							);
							if (!Q) return !1;
							const Z = _.additionalData?.version;
							if (Z === void 0) return !1;
							const se = this._composerDataService.getComposerCodeBlock(
								ee,
								Q,
								Z,
							);
							return se ? !["generating", "aborted"].includes(se.status) : !1;
						}
						case B.ClientSideToolV2.PARALLEL_APPLY:
							return !0;
						case B.ClientSideToolV2.DELETE_FILE:
							return _.userDecision === "accepted";
						default:
							return !1;
					}
				}
			};
			(e.ComposerUtilsService = ie),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.ensureCapabilitiesAreLoaded")],
					ie.prototype,
					"ensureCapabilitiesAreLoaded",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.getShouldChatUseTools")],
					ie.prototype,
					"getShouldChatUseTools",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.getShouldAutoSaveAgenticEdits")],
					ie.prototype,
					"getShouldAutoSaveAgenticEdits",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.replacedBubbleForFastEdit")],
					ie.prototype,
					"replacedBubbleForFastEdit",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.processConversationForFastEdit")],
					ie.prototype,
					"processConversationForFastEdit",
					null,
				),
				Ne(
					[
						(0, z.$KOb)(
							"ComposerUtilsService.populateCodeChunksInConversation",
						),
					],
					ie.prototype,
					"populateCodeChunksInConversation",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.populateRedDiffsInConversation")],
					ie.prototype,
					"populateRedDiffsInConversation",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.getRecentEdits")],
					ie.prototype,
					"getRecentEdits",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.getRecentlyViewedFileInfo")],
					ie.prototype,
					"getRecentlyViewedFileInfo",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.handleStreamComposer")],
					ie.prototype,
					"handleStreamComposer",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.intermediateChunkMiddleware")],
					ie.prototype,
					"intermediateChunkMiddleware",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.getAutoContextFiles")],
					ie.prototype,
					"getAutoContextFiles",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.readFileContents")],
					ie.prototype,
					"readFileContents",
					null,
				),
				Ne(
					[
						(0, z.$KOb)(
							"ComposerUtilsService.populateConversationWithExtraContext",
						),
					],
					ie.prototype,
					"populateConversationWithExtraContext",
					null,
				),
				Ne(
					[
						(0, z.$KOb)(
							"ComposerUtilsService.addContinuationPromptToConversation",
						),
					],
					ie.prototype,
					"addContinuationPromptToConversation",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.getUrisForCheckpoints")],
					ie.prototype,
					"getUrisForCheckpoints",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.createCurrentCheckpoint")],
					ie.prototype,
					"createCurrentCheckpoint",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.getCodeBlockDataFromBubbleId")],
					ie.prototype,
					"getCodeBlockDataFromBubbleId",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.removeMessagesAfterBubble")],
					ie.prototype,
					"removeMessagesAfterBubble",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.runCapabilitiesForProcess")],
					ie.prototype,
					"runCapabilitiesForProcess",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.selectNextComposer")],
					ie.prototype,
					"selectNextComposer",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.selectPrevComposer")],
					ie.prototype,
					"selectPrevComposer",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.selectNextComposerChat")],
					ie.prototype,
					"selectNextComposerChat",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.selectPrevComposerChat")],
					ie.prototype,
					"selectPrevComposerChat",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.computeDiff")],
					ie.prototype,
					"computeDiff",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.growChunk")],
					ie.prototype,
					"growChunk",
					null,
				),
				Ne(
					[
						(0, z.$KOb)(
							"ComposerUtilsService.getRootFolderFileTreeWithDistance",
						),
					],
					ie.prototype,
					"getRootFolderFileTreeWithDistance",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.getGitIgnoreFile")],
					ie.prototype,
					"getGitIgnoreFile",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.initializeGitIgnoreFile")],
					ie.prototype,
					"initializeGitIgnoreFile",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.getFileDiff")],
					ie.prototype,
					"getFileDiff",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.shouldShowCancel")],
					ie.prototype,
					"shouldShowCancel",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.changeCodeBlockUri")],
					ie.prototype,
					"changeCodeBlockUri",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.getFilesToRevertForCheckpoint")],
					ie.prototype,
					"getFilesToRevertForCheckpoint",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.isCheckpointSameAsCurrent")],
					ie.prototype,
					"isCheckpointSameAsCurrent",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.areContentsEqual")],
					ie.prototype,
					"areContentsEqual",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.computeLineDiffs")],
					ie.prototype,
					"computeLineDiffs",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.getCodeBlockLinesByDiff")],
					ie.prototype,
					"getCodeBlockLinesByDiff",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.getCodeBlockV0ModelLines")],
					ie.prototype,
					"getCodeBlockV0ModelLines",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.getCodeBlockOriginalModelLines")],
					ie.prototype,
					"getCodeBlockOriginalModelLines",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.getCodeBlockNewModelLines")],
					ie.prototype,
					"getCodeBlockNewModelLines",
					null,
				),
				Ne(
					[(0, z.$KOb)("ComposerUtilsService.constructDiffResources")],
					ie.prototype,
					"constructDiffResources",
					null,
				),
				(e.ComposerUtilsService = ie =
					Ne(
						[
							j(0, i.IComposerDataService),
							j(1, d.$Nfc),
							j(2, u.$Vi),
							j(3, r.$IY),
							j(4, y.$Cxb),
							j(5, h.$ll),
							j(6, a.$3Db),
							j(7, o.$J6b),
							j(8, f.$cEb),
							j(9, l.$Q9b),
							j(10, P.$0zb),
							j(11, k.$MO),
							j(12, D.$a9b),
							j(13, N.$Feb),
							j(14, U.$H7b),
							j(15, t.$Li),
						],
						ie,
					)),
				(0, E.$lK)(e.IComposerUtilsService, ie, C.InstantiationType.Delayed);
		},
	),
		