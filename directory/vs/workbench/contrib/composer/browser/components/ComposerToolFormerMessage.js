import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../controlCommon/browser/solid.js';
import '../../../../../../proto/aiserver/v1/composer_pb.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import './toolCalls/ComposerSemanticSearchToolCallBlock.js';
import '../../../../../platform/opener/common/opener.js';
import '../../../../../platform/editor/common/editor.js';
import './toolCalls/ComposerGrepSearchToolCallBlock.js';
import './toolCalls/ComposerTerminalToolCallBlock.js';
import './toolCalls/ComposerReadFileToolCallBlock.js';
import '../../../../../platform/label/common/label.js';
import './toolCalls/ComposerErrorToolCallBlock.js';
import './toolCalls/ComposerListDirToolCallBlock.js';
import '../../../../../base/common/uri.js';
import '../../../../services/selectedContext/browser/utils.js';
import '../hooks/useComposerDataHandle.js';
import './ComposerMessageCodeblock.js';
import './toolCalls/ComposerFileSearchToolCallBlock.js';
import './ComposerMessageCodePill.js';
import './toolCalls/ComposerCreateFileToolCallBlock.js';
import './toolCalls/ComposerDeleteFileToolCallBlock.js';
import '../../../aiConfig/browser/aiConfigHelper.js';
import '../../../../../base/common/constants.js';
import './toolCalls/ComposerParallelApplyToolCallBlock.js';
import './toolCalls/ComposerGetRelatedFilesToolCallBlock.js';
import './toolCalls/ComposerLintingToolCallBlock.js';
import '../hooks/useComposerHoverTooltip.js';
import '../constants.js';
import '../../../../../base/common/themables.js';
import '../../../../../base/common/codicons.js';
define(
			de[4343],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 13, 36, 167, 124, 4211, 41, 116, 4209,
				4342, 4294, 73, 3203, 4210, 9, 299, 177, 1378, 4207, 1974, 4292, 4293,
				270, 58, 4291, 4208, 4149, 311, 169, 26, 14,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*web*/,
				i /*web*/,
				w /*web*/,
				E /*web*/,
				C /*web*/,
				d /*web*/,
				m /*web*/,
				r /*web*/,
				u /*solid*/,
				a /*solid*/,
				h /*composer_pb*/,
				c /*tools_pb*/,
				n /*ComposerSemanticSearchToolCallBlock*/,
				g /*opener*/,
				p /*editor*/,
				o /*ComposerGrepSearchToolCallBlock*/,
				f /*ComposerTerminalToolCallBlock*/,
				b /*ComposerReadFileToolCallBlock*/,
				s /*label*/,
				l /*ComposerErrorToolCallBlock*/,
				y /*ComposerListDirToolCallBlock*/,
				$ /*uri*/,
				v /*utils*/,
				S /*useComposerDataHandle*/,
				I /*ComposerMessageCodeblock*/,
				T /*ComposerFileSearchToolCallBlock*/,
				P /*ComposerMessageCodePill*/,
				k /*ComposerCreateFileToolCallBlock*/,
				L /*ComposerDeleteFileToolCallBlock*/,
				D /*aiConfigHelper*/,
				M /*constants*/,
				N /*ComposerParallelApplyToolCallBlock*/,
				A /*ComposerGetRelatedFilesToolCallBlock*/,
				R /*ComposerLintingToolCallBlock*/,
				O /*useComposerHoverTooltip*/,
				B /*constants*/,
				U /*themables*/,
				z /*codicons*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerToolFormerMessage = void 0);
				const F = (0, t.template)('<div class="composer-tool-former-message">'),
					x = (0, t.template)(
						'<div class="revert-to-message-icon fade-in-fast"><div></div><span></span><span class="revert-to-message-icon-text">',
					),
					H = (0, t.template)("<div>"),
					q = (V) => {
						const G = (0, a.$odc)(),
							{ composerDataService: K, composerService: J } = G,
							{
								currentComposer: W,
								forceMode: X,
								composerDataHandle: Y,
							} = (0, S.useComposerDataHandle)(() => V.composerDataHandle),
							ie = (0, u.createMemo)(() =>
								K.getComposerBubble(W().composerId, V.bubbleId),
							),
							ne = (0, u.createMemo)(() =>
								K.getComposerCapability(
									W().composerId,
									h.ComposerCapabilityRequest_ComposerCapabilityType
										.TOOL_FORMER,
								),
							),
							ee = (0, u.createMemo)(() => {
								const ye = ne();
								if (!ye) return;
								const ue = ye.getBubbleData(V.bubbleId);
								if (ue) return ue;
							});
						function _(ye) {
							const ue = ee();
							return ue && ue.tool === ye ? ue : !1;
						}
						const te = (ye, ue) => {
								G.openerService.open(
									ue
										? (0, g.$8rb)(ye, {
												startLineNumber: ue.startLineNumber,
												startColumn: 1,
												endLineNumber: ue.endLineNumber,
												endColumn: 1,
											})
										: ye,
									{
										openToSide: !1,
										editorOptions: {
											revealIfVisible: !0,
											revealIfOpened: !0,
											source: p.EditorOpenSource.USER,
										},
										fromUserGesture: !0,
									},
								);
							},
							[Q] = (0, D.$K0b)(M.$HW, G.configurationService, !1),
							Z = (0, u.createMemo)(
								() => (Q() || V.location === "bar") && X() !== "chat",
							),
							se = (0, u.createMemo)(() => {
								const ye = ee();
								if (ye) return ye.toolCallId;
							}),
							re = (0, u.createMemo)(() =>
								G.composerDataService.getPendingUserDecisionGroup(
									W().composerId,
								),
							),
							le = (0, u.createMemo)(() => {
								const ye = re();
								return ye ? ye.some((ue) => ue.toolCallId === se()) : !1;
							}),
							oe = (0, u.createMemo)(() => {
								const ye = ee(),
									ue = ie();
								return !ye || !ue
									? !1
									: ue.checkpoint &&
											G.composerUtilsService.shouldShowCheckpointInToolFormerMessage(
												W().composerId,
												ye,
											) &&
											(W().currentBubbleId === void 0 ||
												W().currentBubbleId !== V.bubbleId);
							}),
							{ showHover: ae, hideHover: pe } = (0, O.useComposerHoverTooltip)(
								{ delay: B.COMPOSER_HOVER_TOOLTIP_DELAY },
							),
							$e = (ye) => {
								ye.stopPropagation(),
									V.bubbleId &&
										J.checkoutToCheckpoint(W().composerId, V.bubbleId);
							};
						return (0, r.createComponent)(u.Show, {
							get when() {
								return ne();
							},
							children: (ye) =>
								(() => {
									const ue = F();
									return (
										(0, m.insert)(
											ue,
											(0, r.createComponent)(u.Show, {
												get when() {
													return ee();
												},
												children: (fe) => [
													(0, r.createComponent)(u.Show, {
														get when() {
															return oe();
														},
														get children() {
															const me = x(),
																ve = me.firstChild,
																ge = ve.nextSibling,
																be = ge.nextSibling;
															return (
																me.style.setProperty("flex-shrink", "0"),
																me.style.setProperty("flex-wrap", "wrap"),
																me.style.setProperty("padding-left", "4px"),
																(0, m.insert)(ge, B.CHECKPOINT_MAIN_MESSAGE),
																(0, d.addEventListener)(be, "mouseleave", pe),
																be.addEventListener("mouseenter", (Ce) =>
																	ae(Ce, B.CHECKPOINT_HINT),
																),
																be.addEventListener("click", $e),
																(0, m.insert)(be, B.CHECKPOINT_CTA),
																(0, C.effect)(() =>
																	(0, E.className)(
																		ve,
																		`codicon ${U.ThemeIcon.asClassName(z.$ak.bookmark)} revert-to-message-icon-pin`,
																	),
																),
																me
															);
														},
													}),
													(0, r.createComponent)(u.Switch, {
														get children() {
															return [
																(0, r.createComponent)(u.Match, {
																	get when() {
																		return fe().status === "error";
																	},
																	children: (me) =>
																		(0, r.createComponent)(
																			l.ComposerErrorToolCallBlock,
																			{
																				get error() {
																					return (
																						fe().error
																							?.clientVisibleErrorMessage ||
																						"An unknown error occurred"
																					);
																				},
																			},
																		),
																}),
																(0, r.createComponent)(u.Match, {
																	get when() {
																		return _(c.ClientSideToolV2.EDIT_FILE);
																	},
																	children: (me) => {
																		const ve = (0, u.createMemo)(() => {
																			const ge =
																					G.workspaceContextService.resolveRelativePath(
																						me().params
																							?.relativeWorkspacePath ?? "",
																					),
																				be = me().additionalData?.version ?? -1;
																			return K.getComposerCodeBlock(Y(), ge, be)
																				?.content;
																		});
																		return (0, r.createComponent)(u.Show, {
																			get when() {
																				return (
																					(0, w.memo)(
																						() => ve() !== void 0,
																					)() && ve() !== ""
																				);
																			},
																			get fallback() {
																				return (0, r.createComponent)(u.Show, {
																					get when() {
																						return (
																							me().additionalData?.version !==
																							void 0
																						);
																					},
																					children: (ge) =>
																						(0, r.createComponent)(
																							P.ComposerMessageCodePill,
																							{
																								get codeBlock() {
																									return {
																										uri: G.workspaceContextService.resolveRelativePath(
																											me().params
																												?.relativeWorkspacePath ??
																												"",
																										),
																										version:
																											me().additionalData
																												?.version ?? -1,
																									};
																								},
																								get composerDataHandle() {
																									return V.composerDataHandle;
																								},
																							},
																						),
																				});
																			},
																			children: (ge) =>
																				(0, r.createComponent)(u.Show, {
																					get when() {
																						return !Z();
																					},
																					get fallback() {
																						return (0, r.createComponent)(
																							P.ComposerMessageCodePill,
																							{
																								get codeBlock() {
																									return {
																										uri: G.workspaceContextService.resolveRelativePath(
																											me().params
																												?.relativeWorkspacePath ??
																												"",
																										),
																										version:
																											me().additionalData
																												?.version ?? -1,
																									};
																								},
																								get composerDataHandle() {
																									return V.composerDataHandle;
																								},
																								get style() {
																									return {
																										outline: le()
																											? "1px solid var(--vscode-notebook-focusedCellBorder)"
																											: void 0,
																									};
																								},
																							},
																						);
																					},
																					get children() {
																						return [
																							(() => {
																								const be = H();
																								return (
																									be.style.setProperty(
																										"border-radius",
																										"2px",
																									),
																									(0, m.insert)(
																										be,
																										(0, r.createComponent)(
																											I.ComposerMessageCodeblock,
																											{
																												get codeBlock() {
																													return {
																														uri: G.workspaceContextService.resolveRelativePath(
																															me().params
																																?.relativeWorkspacePath ??
																																"",
																														),
																														version:
																															me()
																																.additionalData
																																?.version ?? -1,
																													};
																												},
																												get composerDataHandle() {
																													return V.composerDataHandle;
																												},
																											},
																										),
																									),
																									(0, C.effect)(() =>
																										(le()
																											? "1px solid var(--vscode-notebook-focusedCellBorder)"
																											: void 0) != null
																											? be.style.setProperty(
																													"outline",
																													le()
																														? "1px solid var(--vscode-notebook-focusedCellBorder)"
																														: void 0,
																												)
																											: be.style.removeProperty(
																													"outline",
																												),
																									),
																									be
																								);
																							})(),
																							(0, r.createComponent)(u.Show, {
																								get when() {
																									return me().additionalData
																										?.lintingStatus;
																								},
																								children: (be) =>
																									(0, r.createComponent)(
																										R.ComposerLintingToolCallBlock,
																										{
																											get lintingStatus() {
																												return be();
																											},
																											get linterErrors() {
																												return me().result
																													?.linterErrors;
																											},
																										},
																									),
																							}),
																						];
																					},
																				}),
																		});
																	},
																}),
																(0, r.createComponent)(u.Match, {
																	get when() {
																		return _(c.ClientSideToolV2.READ_FILE);
																	},
																	children: (me) =>
																		(0, r.createComponent)(
																			b.ComposerReadFileToolCallBlock,
																			{
																				get relativeWorkspacePath() {
																					return (
																						me().params
																							?.relativeWorkspacePath ?? ""
																					);
																				},
																				get startLine() {
																					return me().params
																						?.startLineOneIndexed;
																				},
																				get endLine() {
																					return me().params
																						?.endLineOneIndexedInclusive;
																				},
																				onClick: () => {
																					const ve =
																							G.workspaceContextService.resolveRelativePath(
																								me().params
																									?.relativeWorkspacePath ?? "",
																							),
																						ge =
																							me().params?.startLineOneIndexed,
																						be =
																							me().params
																								?.endLineOneIndexedInclusive;
																					(0, v.$9gc)(G, {
																						filePathOrUri: ve,
																						selection: ge
																							? {
																									startLineNumber: ge,
																									endLineNumber: be ?? ge,
																									startColumn: 1,
																									endColumn:
																										(be ?? ge) - ge > 0
																											? 1e3
																											: 1,
																								}
																							: void 0,
																					});
																				},
																				get isLoading() {
																					return fe().status === "loading";
																				},
																				get composerId() {
																					return W().composerId;
																				},
																				get bubbleData() {
																					return fe();
																				},
																			},
																		),
																}),
																(0, r.createComponent)(u.Match, {
																	get when() {
																		return _(
																			c.ClientSideToolV2
																				.RUN_TERMINAL_COMMAND_V2,
																		);
																	},
																	children: (me) => {
																		const ve = (0, u.createMemo)(() => {
																				if (fe().userDecision === "rejected")
																					return {
																						status: "cancelled",
																						stdout: "",
																						stderr: "",
																					};
																				switch (me().additionalData?.status) {
																					case "pending":
																					case "loading":
																						return {
																							status:
																								me().additionalData?.status,
																						};
																					default:
																						return {
																							status:
																								me().additionalData?.status,
																							stdout: me().result?.output ?? "",
																							stderr: "",
																						};
																				}
																			}),
																			ge = (0, u.createMemo)(() => {
																				const Ce =
																					me().additionalData?.sessionId;
																				if (
																					!(
																						!Ce ||
																						ye().getLastBubbleIdWithTerminalSessionIdShownReactive(
																							Ce,
																						) === V.bubbleId
																					)
																				)
																					return "output";
																			}),
																			be = (0, u.createMemo)(() => {
																				const Ce =
																					me().additionalData?.sessionId;
																				if (Ce)
																					return G.terminalExecutionService.getTerminalInstance(
																						Ce,
																					);
																			});
																		return (0, r.createComponent)(
																			f.ComposerTerminalToolCallBlock,
																			(0, i.mergeProps)(
																				{
																					get command() {
																						return me().params?.command;
																					},
																					get root() {
																						return G.labelService.getWorkspaceLabel(
																							G.workspaceContextService.getWorkspace(),
																							{ verbose: s.Verbosity.LONG },
																						);
																					},
																					get isBlocking() {
																						return !me().params?.isBackground;
																					},
																					onExecute: () => {
																						ye().acceptToolCall(
																							fe().toolCallId,
																						);
																					},
																					onCancel: () => {
																						ye().rejectToolCall(
																							fe().toolCallId,
																						),
																							G.composerService.cancelCurrentStep(
																								W().composerId,
																							),
																							G.composerService.focus(
																								W().composerId,
																							);
																						const Ce =
																							me().additionalData?.sessionId;
																						if (Ce)
																							try {
																								G.terminalExecutionService.cancelStream(
																									Ce,
																								);
																							} catch (Le) {
																								console.error(Le);
																							}
																					},
																					onReset: () => {
																						const Ce =
																							me().additionalData?.sessionId;
																						if (Ce)
																							try {
																								G.terminalExecutionService.cancelStream(
																									Ce,
																								);
																							} catch (Le) {
																								console.error(Le);
																							}
																					},
																					get componentToShowInsteadOfTerminalInstance() {
																						return ge();
																					},
																					showOpenInExternalTerminalCallback: (
																						Ce,
																					) => {
																						G.terminalExecutionService.leakTerminalInstance(
																							Ce,
																						),
																							ye().popOutTerminalIntoBackground();
																					},
																					get terminalInstance() {
																						return be();
																					},
																					get startAtBufferLine() {
																						return me().additionalData
																							?.startAtBufferLine;
																					},
																				},
																				ve,
																				{
																					get composerId() {
																						return W().composerId;
																					},
																					get bubbleData() {
																						return fe();
																					},
																					onCommandChange: (Ce) => {
																						ye().updateToolCallParams(
																							fe().toolCallId,
																							{ ...me().params, command: Ce },
																						);
																					},
																				},
																			),
																		);
																	},
																}),
																(0, r.createComponent)(u.Match, {
																	get when() {
																		return _(c.ClientSideToolV2.RIPGREP_SEARCH);
																	},
																	children: (me) =>
																		(0, r.createComponent)(
																			o.ComposerGrepSearchToolCallBlock,
																			{
																				get query() {
																					return (
																						me().params?.patternInfo?.pattern ||
																						""
																					);
																				},
																				searchDirectory: "",
																				get matchPerLine() {
																					return (
																						me().params?.patternInfo
																							?.isWordMatch ?? !1
																					);
																				},
																				get caseInsensitive() {
																					return (
																						me().params?.patternInfo
																							?.isCaseSensitive ?? !0
																					);
																				},
																				get includes() {
																					return me().params?.options
																						?.includePattern?.pattern;
																				},
																				onResultClick: (ve) => {
																					te(ve);
																				},
																				get results() {
																					return (
																						me().result?.internal?.results ?? []
																					).flatMap((ve) =>
																						ve.results.flatMap((ge) => {
																							if (
																								ge.result &&
																								ge.result.case === "match"
																							) {
																								const be = ge.result.value;
																								return be === void 0
																									? []
																									: {
																											uri: $.URI.parse(
																												ve.resource,
																											),
																											lineNumber:
																												be.rangeLocations.at(0)
																													?.source
																													?.startLineNumber,
																											lineContent:
																												be.previewText,
																										};
																							}
																							return [];
																						}),
																					);
																				},
																				get isLoading() {
																					return fe().status === "loading";
																				},
																				get composerId() {
																					return W().composerId;
																				},
																				get bubbleData() {
																					return fe();
																				},
																			},
																		),
																}),
																(0, r.createComponent)(u.Match, {
																	get when() {
																		return _(c.ClientSideToolV2.LIST_DIR);
																	},
																	children: (me) =>
																		(0, r.createComponent)(
																			y.ComposerListDirToolCallBlock,
																			{
																				get dirName() {
																					return (
																						me().params?.directoryPath ?? ""
																					);
																				},
																				get results() {
																					return (
																						me().result?.files?.map((ve) => ({
																							uri: G.workspaceContextService.resolveRelativePath(
																								`${me().params?.directoryPath}/${ve.name}`,
																							),
																							name: ve.name,
																							isDirectory: ve.isDirectory,
																							size:
																								ve.size !== void 0
																									? Number(ve.size)
																									: 0,
																							lastModified:
																								ve.lastModified !== void 0
																									? Number(
																											ve.lastModified.seconds,
																										) * 1e3
																									: 0,
																						})) ?? []
																					);
																				},
																				onResultClick: (ve) => te(ve),
																				get isLoading() {
																					return fe().status === "loading";
																				},
																				get composerId() {
																					return W().composerId;
																				},
																				get bubbleData() {
																					return fe();
																				},
																			},
																		),
																}),
																(0, r.createComponent)(u.Match, {
																	get when() {
																		return _(c.ClientSideToolV2.FILE_SEARCH);
																	},
																	children: (me) =>
																		(0, r.createComponent)(
																			T.ComposerFileSearchToolCallBlock,
																			{
																				get query() {
																					return me().params?.query ?? "";
																				},
																				get results() {
																					return (
																						me().result?.files?.map((ve) => ({
																							uri: G.workspaceContextService.resolveRelativePath(
																								ve.uri,
																							),
																						})) ?? []
																					);
																				},
																				onResultClick: (ve) => te(ve),
																				get isLoading() {
																					return fe().status === "loading";
																				},
																				get composerId() {
																					return W().composerId;
																				},
																				get bubbleData() {
																					return fe();
																				},
																			},
																		),
																}),
																(0, r.createComponent)(u.Match, {
																	get when() {
																		return _(
																			c.ClientSideToolV2.READ_SEMSEARCH_FILES,
																		);
																	},
																	children: (me) =>
																		(0, r.createComponent)(
																			n.ComposerSemanticSearchToolCallBlock,
																			{
																				get query() {
																					return me().params?.query ?? "";
																				},
																				get results() {
																					return (
																						me()
																							.result?.codeResults.filter(
																								(ve) => !!ve.codeBlock,
																							)
																							.map((ve) => ({
																								uri: G.workspaceContextService.resolveRelativePath(
																									ve.codeBlock
																										?.relativeWorkspacePath ??
																										"",
																								),
																								score: ve.score,
																								range: ve.codeBlock?.range,
																							})) ?? []
																					);
																				},
																				get isLoading() {
																					return fe().status === "loading";
																				},
																				get composerId() {
																					return W().composerId;
																				},
																				get bubbleData() {
																					return fe();
																				},
																				onResultClick: (ve) =>
																					te(
																						ve.uri,
																						ve.range && {
																							startLineNumber:
																								ve.range.startPosition?.line ??
																								0,
																							endLineNumber:
																								ve.range.endPosition?.line ?? 0,
																						},
																					),
																			},
																		),
																}),
																(0, r.createComponent)(u.Match, {
																	get when() {
																		return _(
																			c.ClientSideToolV2.SEMANTIC_SEARCH_FULL,
																		);
																	},
																	children: (me) =>
																		(0, r.createComponent)(
																			n.ComposerSemanticSearchToolCallBlock,
																			{
																				get query() {
																					return me().params?.query ?? "";
																				},
																				get includePattern() {
																					return me().params?.includePattern;
																				},
																				get excludePattern() {
																					return me().params?.excludePattern;
																				},
																				get results() {
																					return (
																						me()
																							.result?.codeResults.filter(
																								(ve) => !!ve.codeBlock,
																							)
																							.map((ve) => ({
																								uri: G.workspaceContextService.resolveRelativePath(
																									ve.codeBlock
																										?.relativeWorkspacePath ??
																										"",
																								),
																								score: ve.score,
																								range: ve.codeBlock?.range,
																							})) ?? []
																					);
																				},
																				get isLoading() {
																					return fe().status === "loading";
																				},
																				onResultClick: (ve) =>
																					te(
																						ve.uri,
																						ve.range && {
																							startLineNumber:
																								ve.range.startPosition?.line ??
																								0,
																							endLineNumber:
																								ve.range.endPosition?.line ?? 0,
																						},
																					),
																				get composerId() {
																					return W().composerId;
																				},
																				get bubbleData() {
																					return fe();
																				},
																			},
																		),
																}),
																(0, r.createComponent)(u.Match, {
																	get when() {
																		return _(c.ClientSideToolV2.CREATE_FILE);
																	},
																	children: (me) =>
																		(0, r.createComponent)(
																			k.ComposerCreateFileToolCallBlock,
																			{
																				get relativeWorkspacePath() {
																					return me().params
																						?.relativeWorkspacePath;
																				},
																				onClick: () => {
																					const ve =
																						G.workspaceContextService.resolveRelativePath(
																							me().params
																								?.relativeWorkspacePath ?? "",
																						);
																					te(ve);
																				},
																				get isLoading() {
																					return fe().status === "loading";
																				},
																				get composerId() {
																					return W().composerId;
																				},
																				get bubbleData() {
																					return fe();
																				},
																			},
																		),
																}),
																(0, r.createComponent)(u.Match, {
																	get when() {
																		return _(c.ClientSideToolV2.DELETE_FILE);
																	},
																	children: (me) => {
																		const ve = (0, u.createMemo)(
																			() => fe().userDecision,
																		);
																		return (0, r.createComponent)(
																			L.ComposerDeleteFileToolCallBlock,
																			{
																				get relativeWorkspacePath() {
																					return me().params
																						?.relativeWorkspacePath;
																				},
																				onClick: () => {
																					const ge =
																						G.workspaceContextService.resolveRelativePath(
																							me().params
																								?.relativeWorkspacePath ?? "",
																						);
																					te(ge);
																				},
																				get isLoading() {
																					return fe().status === "loading";
																				},
																				onAccept: () =>
																					ye().acceptToolCall(fe().toolCallId),
																				onReject: () =>
																					ye().rejectToolCall(fe().toolCallId),
																				get decision() {
																					return fe().status !== "loading"
																						? () => "rejected"
																						: ve;
																				},
																				get composerId() {
																					return W().composerId;
																				},
																				get bubbleData() {
																					return fe();
																				},
																			},
																		);
																	},
																}),
																(0, r.createComponent)(u.Match, {
																	get when() {
																		return _(c.ClientSideToolV2.PARALLEL_APPLY);
																	},
																	children: (me) =>
																		(0, r.createComponent)(
																			N.ComposerParallelApplyToolCallBlock,
																			{
																				get planText() {
																					return me().params?.editPlan;
																				},
																				get filesToEdit() {
																					return (
																						me().params?.fileRegions ?? []
																					).map((ve) => ({
																						uri: G.workspaceContextService.resolveRelativePath(
																							ve.relativeWorkspacePath,
																						),
																						version: 0,
																						range: ve.range && {
																							startLineNumber:
																								ve.range.startLineNumber ?? 0,
																							endLineNumber:
																								ve.range
																									.endLineNumberInclusive ?? 0,
																						},
																					}));
																				},
																				get isLoading() {
																					return fe().status === "loading";
																				},
																				get composerId() {
																					return W().composerId;
																				},
																				get bubbleData() {
																					return fe();
																				},
																				get composerDataHandle() {
																					return V.composerDataHandle;
																				},
																			},
																		),
																}),
																(0, r.createComponent)(u.Match, {
																	get when() {
																		return _(
																			c.ClientSideToolV2.GET_RELATED_FILES,
																		);
																	},
																	children: (me) =>
																		(() => {
																			const ve = H();
																			return (
																				ve.style.setProperty(
																					"border-radius",
																					"2px",
																				),
																				(0, m.insert)(
																					ve,
																					(0, r.createComponent)(
																						A.ComposerGetRelatedFilesToolCallBlock,
																						{
																							get targetFiles() {
																								return (
																									me().params?.targetFiles ?? []
																								);
																							},
																							get results() {
																								return (
																									me().result?.files ?? []
																								).map((ge) => ({
																									uri: G.workspaceContextService.resolveRelativePath(
																										ge.uri,
																									),
																									score: ge.score,
																								}));
																							},
																							onResultClick: (ge) => te(ge),
																							get isLoading() {
																								return (
																									fe().status === "loading"
																								);
																							},
																							get composerId() {
																								return W().composerId;
																							},
																							get bubbleData() {
																								return fe();
																							},
																						},
																					),
																				),
																				(0, C.effect)(() =>
																					(le()
																						? "1px solid var(--vscode-notebook-focusedCellBorder)"
																						: void 0) != null
																						? ve.style.setProperty(
																								"outline",
																								le()
																									? "1px solid var(--vscode-notebook-focusedCellBorder)"
																									: void 0,
																							)
																						: ve.style.removeProperty(
																								"outline",
																							),
																				),
																				ve
																			);
																		})(),
																}),
															];
														},
													}),
												],
											}),
										),
										ue
									);
								})(),
						});
					};
				e.ComposerToolFormerMessage = q;
			},
		)
