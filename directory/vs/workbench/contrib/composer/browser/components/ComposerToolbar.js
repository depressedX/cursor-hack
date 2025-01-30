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
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../composerData.js';
import '../../../aichat/browser/components/Utils.js';
import '../constants.js';
import '../hooks/useComposerCollectedStatuses.js';
import '../../../controlCommon/browser/solid.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/themables.js';
import './ComposerToolbarSimpleButton.js';
import '../../../ui/browser/AutoCollapseDivGroup.js';
import '../hooks/useComposerChatStatus.js';
import '../hooks/useComposerHoverTooltip.js';
import '../../../../../../proto/aiserver/v1/composer_pb.js';
import '../../../../../base/common/types.js';
import '../hooks/useShouldShowChatToolbar.js';
import '../../../ui/browser/aiInput/plugins/mentions/pureIcon.js';
import '../../../ui/browser/scrollableDiv.js';
import '../../../../../base/common/path.js';
import './ComposerGeneralStatusIndicator.js';
import '../utils.js';
import '../../../../../platform/editor/common/editor.js';
import '../hooks/useComposerDataHandle.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../ui/browser/hooks/useIsUsingFileIconTheme.js';
import '../hooks/useShouldShowApplyLastMessage.js';
import '../../../../../css!vs/workbench/contrib/composer/browser/components/ComposerToolbar.js';
define(
			de[4288],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 225, 242, 169, 1366, 36, 14, 26,
				485, 1004, 858, 311, 167, 28, 4158, 156, 135, 54, 565, 246, 116, 177,
				124, 428, 1066, 2418,
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
				u /*web*/,
				a /*web*/,
				h /*solid*/,
				c /*composerData*/,
				n /*Utils*/,
				g /*constants*/,
				p /*useComposerCollectedStatuses*/,
				o /*solid*/,
				f /*codicons*/,
				b /*themables*/,
				s /*ComposerToolbarSimpleButton*/,
				l /*AutoCollapseDivGroup*/,
				y /*useComposerChatStatus*/,
				$ /*useComposerHoverTooltip*/,
				v /*composer_pb*/,
				S /*types*/,
				I /*useShouldShowChatToolbar*/,
				T /*pureIcon*/,
				P /*scrollableDiv*/,
				k /*path*/,
				L /*ComposerGeneralStatusIndicator*/,
				D /*utils*/,
				M /*editor*/,
				N /*useComposerDataHandle*/,
				A /*tools_pb*/,
				R /*useIsUsingFileIconTheme*/,
				O /*useShouldShowApplyLastMessage*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerDiffReviewToolbar = W),
					(e.ComposerToolbar = Y),
					(e.ComposerChatToolbar = ie),
					(e.ComposerToolFormerToolbar = ne);
				const B = (0, t.template)("<span>"),
					U = (0, t.template)("<span>(<!> file<!> changed)"),
					z = (0, t.template)("<div><div><div><div>Reviewing"),
					F = (0, t.template)("<div>"),
					x = (0, t.template)(
						'<div class="composer-file-list-item"><div><span></span><span>/',
					),
					H = (0, t.template)("<span>Generating"),
					q = (0, t.template)("<span>Applying"),
					V = (0, t.template)("<span>Running capabilities"),
					G = (0, t.template)("<div><div><div><div>"),
					K = (0, t.template)("<div><div><span>"),
					J = () => ({
						display: "flex",
						"align-items": "center",
						gap: "4px",
						cursor: "pointer",
						height: "18.5px",
						"flex-shrink": 0,
					});
				function W(ee) {
					const _ = (0, o.$odc)(),
						{ composerDataService: te } = _,
						{
							composerDataHandle: Q,
							currentComposer: Z,
							updateCurrentComposer: se,
						} = (0, N.useComposerDataHandle)(() => ee.composerDataHandle),
						{ showHover: re, hideHover: le } = (0, $.useComposerHoverTooltip)({
							delay: g.COMPOSER_HOVER_TOOLTIP_DELAY,
						}),
						oe = (0, h.createMemo)(() => ee.diffReviewCapability),
						ae = (0, h.createMemo)(() => {
							const fe = oe();
							if (!fe) return [];
							const me = fe.relevantUris();
							return me
								? me
										.map((ve) => {
											const ge = ve.toString(),
												be =
													_.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
														(Ce) => Ce.uri.toString() === ge,
													);
											return !be || "isMultiInlineDiff" in be ? null : be.id;
										})
										.filter(S.$tg)
								: [];
						}),
						pe = (0, h.createMemo)(() => ae().length > 0),
						$e = async () => {
							const fe = oe();
							if (!fe || !Z()) return;
							const ve = fe.relevantUris();
							if (ve && ve.length !== 0)
								for (const ge of ve) {
									const be =
										_.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
											(Ce) => Ce.uri.toString() === ge.toString(),
										)?.id;
									be && (await _.inlineDiffService.acceptDiff(be));
								}
						},
						ye = async () => {
							const fe = oe();
							if (!fe || !Z()) return;
							const ve = fe.relevantUris();
							if (ve)
								for (const ge of ve) {
									const be =
										_.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
											(Ce) => Ce.uri.toString() === ge.toString(),
										)?.id;
									be && (await _.inlineDiffService.rejectDiff(be));
								}
						},
						ue = async () => {
							const fe = oe();
							fe && (await fe.abort());
						};
					return (() => {
						const fe = z(),
							me = fe.firstChild,
							ve = me.firstChild,
							ge = ve.firstChild,
							be = ge.firstChild;
						return (
							me.style.setProperty("display", "flex"),
							me.style.setProperty("justify-content", "space-between"),
							me.style.setProperty("align-items", "center"),
							me.style.setProperty("width", "100%"),
							ve.addEventListener("mouseup", () => {
								ee.isDragging?.() || ee.onToggleFileList();
							}),
							ve.style.setProperty("text-wrap", "nowrap"),
							ve.style.setProperty("text-overflow", "ellipsis"),
							ve.style.setProperty("overflow", "hidden"),
							ve.style.setProperty("flex-grow", "1"),
							ve.style.setProperty("flex-basis", "0"),
							ve.style.setProperty("display", "inline-flex"),
							ve.style.setProperty("align-items", "center"),
							ve.style.setProperty("flex-wrap", "nowrap"),
							ve.style.setProperty("gap", "4px"),
							(0, d.insert)(
								ve,
								(0, r.createComponent)(h.Show, {
									get when() {
										return ee.canShowFileList;
									},
									get children() {
										const Ce = B();
										return (
											Ce.style.setProperty(
												"color",
												"var(--vscode-input-placeholderForeground)",
											),
											Ce.style.setProperty("font-size", "10px"),
											Ce.style.setProperty("flex-shrink", "0"),
											(0, a.effect)(
												(Le) => {
													const Fe = ee.isFileListExpanded()
															? "rotate(90deg)"
															: "rotate(0deg)",
														Oe = b.ThemeIcon.asClassName(f.$ak.chevronRight);
													return (
														Fe !== Le._v$ &&
															((Le._v$ = Fe) != null
																? Ce.style.setProperty("transform", Fe)
																: Ce.style.removeProperty("transform")),
														Oe !== Le._v$2 &&
															(0, u.className)(Ce, (Le._v$2 = Oe)),
														Le
													);
												},
												{ _v$: void 0, _v$2: void 0 },
											),
											Ce
										);
									},
								}),
								ge,
							),
							ge.style.setProperty(
								"color",
								"var(--vscode-input-placeholderForeground)",
							),
							ge.style.setProperty("margin", "0"),
							ge.style.setProperty("font-size", "10px"),
							ge.style.setProperty("flex-shrink", "0"),
							ge.style.setProperty("white-space", "nowrap"),
							ge.style.setProperty("text-overflow", "ellipsis"),
							ge.style.setProperty("overflow", "hidden"),
							ge.style.setProperty("flex-basis", "0"),
							ge.style.setProperty("flex-grow", "1"),
							(0, d.insert)(
								ge,
								(0, r.createComponent)(h.Show, {
									get when() {
										return ee.shouldShowFileCount;
									},
									get children() {
										const Ce = U(),
											Le = Ce.firstChild,
											Fe = Le.nextSibling,
											Oe = Fe.nextSibling,
											xe = Oe.nextSibling,
											He = xe.nextSibling;
										return (
											Ce.style.setProperty("margin-left", "4px"),
											(0, d.insert)(Ce, () => ee.numFiles(), Fe),
											(0, d.insert)(
												Ce,
												() => (ee.numFiles() > 1 ? "s" : ""),
												xe,
											),
											Ce
										);
									},
								}),
								null,
							),
							(0, d.insert)(
								me,
								(0, r.createComponent)(l.$q$b, {
									noTransition: !0,
									style: {
										display: "flex",
										"align-items": "center",
										"justify-content": "flex-end",
										margin: "0px",
										padding: "0",
									},
									forceGap: 4,
									get children() {
										return [
											(0, r.createComponent)(s.ComposerToolbarSimpleButton, {
												type: "secondary",
												onClick: ue,
												get style() {
													return J();
												},
												hintText:
													"Abort review and and undo all accept/rejects",
												children: "Abort review",
											}),
											(0, r.createComponent)(h.Show, {
												get when() {
													return pe();
												},
												get children() {
													return (0, r.createComponent)(
														s.ComposerToolbarSimpleButton,
														{
															type: "secondary",
															onClick: ye,
															get style() {
																return J();
															},
															get hintText() {
																return `Reject all expanded changes (${(0, D.getShortcut)("\u232B")})`;
															},
															children: "Reject changes",
														},
													);
												},
											}),
											(0, r.createComponent)(h.Show, {
												get when() {
													return pe();
												},
												get children() {
													return (0, r.createComponent)(
														s.ComposerToolbarSimpleButton,
														{
															type: "primary",
															onClick: $e,
															get style() {
																return J();
															},
															get hintText() {
																return `Accept all expanded changes (${(0, D.getShortcut)("\u23CE")})`;
															},
															children: "Accept changes",
														},
													);
												},
											}),
										];
									},
								}),
								null,
							),
							(0, a.effect)(
								(Ce) => {
									const Le = { ...ee.styles },
										Fe = ee.isFileListExpanded()
											? "auto"
											: `${g.COMPOSER_TOOLBAR_HEIGHT}px`,
										Oe = ee.isFileListExpanded() ? "3px" : "0px",
										xe = ee.canShowFileList() ? "pointer" : "default";
									return (
										(Ce._v$3 = (0, C.style)(fe, Le, Ce._v$3)),
										Fe !== Ce._v$4 &&
											((Ce._v$4 = Fe) != null
												? me.style.setProperty("height", Fe)
												: me.style.removeProperty("height")),
										Oe !== Ce._v$5 &&
											((Ce._v$5 = Oe) != null
												? me.style.setProperty("padding-top", Oe)
												: me.style.removeProperty("padding-top")),
										xe !== Ce._v$6 &&
											((Ce._v$6 = xe) != null
												? ve.style.setProperty("cursor", xe)
												: ve.style.removeProperty("cursor")),
										Ce
									);
								},
								{ _v$3: void 0, _v$4: void 0, _v$5: void 0, _v$6: void 0 },
							),
							fe
						);
					})();
				}
				function X(ee) {
					const _ = (0, o.$odc)(),
						{ composerDataService: te, composerService: Q } = _,
						[Z, se] = (0, h.createSignal)(0),
						[re, le] = (0, h.createSignal)(null),
						oe = (0, h.createMemo)(() => {
							const $e = ee.currentComposer.tabs.filter(
								(ye) => ye.type === "code",
							);
							return $e
								? $e.filter(
										(ye) =>
											!te.getComposerCodeBlock(
												ee.composerDataHandle,
												ye.uri,
												ye.version,
											)?.isNotApplied,
									)
								: [];
						});
					(0, h.createEffect)(() => {
						const $e = oe().length;
						se(re()?.clientHeight ?? 0);
					}),
						(0, h.createEffect)(() => {
							(0, h.onMount)(() => {
								setTimeout(() => {
									se(re()?.clientHeight ?? 0);
								});
							});
						});
					const ae = ($e, ye, ue) => {
							if (ye) {
								(0, D.openCodeSelectionInEditor)(
									{
										uri: $e,
										range: {
											positionLineNumber: ye.startLineNumber,
											positionColumn: 1,
											selectionStartLineNumber: ye.startLineNumber,
											selectionStartColumn: 1,
										},
										text: "",
									},
									_.workspaceContextService,
									_.openerService,
								);
								return;
							}
							_.openerService.open($e, {
								editorOptions: {
									revealIfVisible: !0,
									revealIfOpened: !0,
									source: M.EditorOpenSource.USER,
									preserveFocus: !0,
								},
								openToSide: ue ?? !1,
							});
						},
						pe = (0, R.$b$b)();
					return (0, r.createComponent)(h.Show, {
						get when() {
							return ee.shouldShowFileList;
						},
						get children() {
							const $e = F();
							return (
								$e.style.setProperty("width", "100%"),
								$e.style.setProperty("margin-top", "3px"),
								$e.style.setProperty("margin-bottom", "5px"),
								$e.style.setProperty(
									"background",
									"var(--vscode-editor-background)",
								),
								$e.style.setProperty("border-radius", "2px"),
								$e.style.setProperty(
									"border",
									"1px solid var(--vscode-commandCenter-inactiveBorder)",
								),
								$e.style.setProperty("contain", "paint"),
								(0, d.insert)(
									$e,
									(0, r.createComponent)(P.$w0b, {
										style: { height: "100%" },
										contentStyle: {
											display: "flex",
											"flex-direction": "column",
										},
										innerContainerStyle: { "min-height": "unset" },
										scrollingDirection: "vertical",
										nonReactiveElementOptions: { alwaysConsumeMouseWheel: !0 },
										get children() {
											const ye = F();
											return (
												(0, E.use)(le, ye),
												(0, d.insert)(
													ye,
													(0, r.createComponent)(h.For, {
														get each() {
															return oe();
														},
														children: (ue) => {
															const fe = (0, h.createMemo)(() =>
																	te.getLatestCodeBlockVersion(
																		ee.composerId,
																		ue.uri,
																	),
																),
																me = (0, h.createMemo)(
																	() =>
																		te.getCodeBlockStatus(
																			ee.composerId,
																			ue.uri,
																			ue.version,
																		) ?? "none",
																),
																[ve, ge] = (0, h.createSignal)(!1),
																be = (0, h.createMemo)(() =>
																	te.getInlineDiff(ee.composerId, ue.uri),
																),
																Ce = (0, h.createMemo)(
																	() => (be()?.changes.length ?? 0) > 0,
																);
															return (() => {
																const Le = x(),
																	Fe = Le.firstChild,
																	Oe = Fe.firstChild,
																	xe = Oe.nextSibling,
																	He = xe.firstChild;
																return (
																	Le.addEventListener("click", (Ke) => {
																		if (Ke.defaultPrevented) return;
																		const Je = be()?.changes?.[0];
																		ae(
																			ue.uri,
																			Je && {
																				startLineNumber:
																					Je.addedRange.startLineNumber,
																			},
																			Ke.altKey,
																		);
																	}),
																	Le.addEventListener("mouseleave", () =>
																		ge(!1),
																	),
																	Le.addEventListener("mouseenter", () =>
																		ge(!0),
																	),
																	Le.style.setProperty("display", "flex"),
																	Le.style.setProperty("align-items", "center"),
																	Le.style.setProperty(
																		"justify-content",
																		"space-between",
																	),
																	Le.style.setProperty("gap", "4px"),
																	Le.style.setProperty("cursor", "pointer"),
																	Le.style.setProperty("padding", "0px 4px"),
																	Le.style.setProperty("height", "20px"),
																	Fe.style.setProperty("display", "flex"),
																	Fe.style.setProperty("align-items", "center"),
																	Fe.style.setProperty("gap", "4px"),
																	Fe.style.setProperty("min-width", "0"),
																	Fe.style.setProperty("flex", "1"),
																	(0, d.insert)(
																		Fe,
																		(0, r.createComponent)(h.Show, {
																			get when() {
																				return pe();
																			},
																			get children() {
																				const Ke = B();
																				return (
																					Ke.style.setProperty(
																						"margin-right",
																						"-4px",
																					),
																					Ke.style.setProperty("scale", "0.8"),
																					Ke.style.setProperty(
																						"height",
																						"14px",
																					),
																					Ke.style.setProperty(
																						"display",
																						"flex",
																					),
																					Ke.style.setProperty(
																						"align-items",
																						"center",
																					),
																					(0, d.insert)(
																						Ke,
																						(0, r.createComponent)(T.$k$b, {
																							get fileName() {
																								return ue.uri.fsPath;
																							},
																							get workspaceContextService() {
																								return _.workspaceContextService;
																							},
																							get modelService() {
																								return _.modelService;
																							},
																							get languageService() {
																								return _.languageService;
																							},
																							height: 14,
																						}),
																					),
																					Ke
																				);
																			},
																		}),
																		Oe,
																	),
																	Oe.style.setProperty("font-size", "11px"),
																	Oe.style.setProperty("white-space", "nowrap"),
																	Oe.style.setProperty("overflow", "hidden"),
																	Oe.style.setProperty(
																		"text-overflow",
																		"ellipsis",
																	),
																	Oe.style.setProperty("line-height", "120%"),
																	Oe.style.setProperty(
																		"color",
																		"var(--vscode-input-foreground)",
																	),
																	(0, d.insert)(Oe, () =>
																		(0, k.$sc)(ue.uri.fsPath),
																	),
																	xe.style.setProperty("opacity", "0.7"),
																	xe.style.setProperty("font-size", "10px"),
																	xe.style.setProperty(
																		"color",
																		"var(--vscode-input-placeholderForeground)",
																	),
																	xe.style.setProperty(
																		"font-variant-numeric",
																		"tabular-nums",
																	),
																	(0, d.insert)(xe, () => ue.version + 1, He),
																	(0, d.insert)(xe, () => fe() + 1, null),
																	(0, d.insert)(
																		Fe,
																		(0, r.createComponent)(
																			L.ComposerGeneralStatusIndicator,
																			{
																				get status() {
																					return me();
																				},
																			},
																		),
																		null,
																	),
																	(0, d.insert)(
																		Le,
																		(0, r.createComponent)(l.$q$b, {
																			noTransition: !0,
																			get outerContainerStyle() {
																				return {
																					"align-items": "center",
																					opacity: ve() ? "1" : "0",
																				};
																			},
																			get children() {
																				return [
																					(0, r.createComponent)(h.Show, {
																						get when() {
																							return c.REAPPLY_RELATED_STATUSES.includes(
																								me(),
																							);
																						},
																						get children() {
																							return (0, r.createComponent)(
																								s.ComposerToolbarSimpleButton,
																								{
																									type: "secondary",
																									get style() {
																										return { ...J() };
																									},
																									onClick: (Ke) => {
																										Ke.stopPropagation(),
																											Q.reapply(
																												ee.composerId,
																												ue.uri,
																												ue.version,
																											);
																									},
																									hintText: "Reapply",
																									get codicon() {
																										return f.$ak.refresh;
																									},
																								},
																							);
																						},
																					}),
																					(0, r.createComponent)(h.Show, {
																						get when() {
																							return Q.shouldShowAcceptReject(
																								ee.composerId,
																								ue.uri,
																								ue.version,
																							);
																						},
																						get children() {
																							return (0, r.createComponent)(
																								s.ComposerToolbarSimpleButton,
																								{
																									type: "secondary",
																									get codicon() {
																										return f.$ak.close;
																									},
																									get style() {
																										return J();
																									},
																									onClick: (Ke) => {
																										Ke.stopPropagation(),
																											Q.reject(
																												ee.composerId,
																												ue.uri,
																												ue.version,
																											);
																									},
																									hintText: "Reject",
																								},
																							);
																						},
																					}),
																					(0, r.createComponent)(h.Show, {
																						get when() {
																							return Q.shouldShowAcceptReject(
																								ee.composerId,
																								ue.uri,
																								ue.version,
																							);
																						},
																						get children() {
																							return (0, r.createComponent)(
																								s.ComposerToolbarSimpleButton,
																								{
																									type: "secondary",
																									get codicon() {
																										return f.$ak.check;
																									},
																									get style() {
																										return J();
																									},
																									onClick: (Ke) => {
																										Ke.stopPropagation(),
																											Q.accept(
																												ee.composerId,
																												ue.uri,
																												ue.version,
																											);
																									},
																									hintText: "Accept",
																								},
																							);
																						},
																					}),
																					(0, r.createComponent)(h.Show, {
																						get when() {
																							return Ce();
																						},
																						get children() {
																							return (0, r.createComponent)(
																								s.ComposerToolbarSimpleButton,
																								{
																									type: "secondary",
																									get codicon() {
																										return f.$ak.diff;
																									},
																									get style() {
																										return J();
																									},
																									onClick: (Ke) => {
																										Ke.preventDefault(),
																											Ke.stopImmediatePropagation(),
																											Ke.stopPropagation(),
																											_.composerService.openDiffEditor(
																												ee.composerId,
																												ue.uri,
																											);
																									},
																									hintText: "Open Diff Editor",
																								},
																							);
																						},
																					}),
																				];
																			},
																		}),
																		null,
																	),
																	Le
																);
															})();
														},
													}),
												),
												ye
											);
										},
									}),
								),
								(0, a.effect)(() =>
									Math.min(Z(), 80) + "px" != null
										? $e.style.setProperty("height", Math.min(Z(), 80) + "px")
										: $e.style.removeProperty("height"),
								),
								$e
							);
						},
					});
				}
				function Y(ee) {
					const _ = (0, o.$odc)(),
						{ composerDataService: te } = _,
						{
							currentComposer: Q,
							composerDataHandle: Z,
							updateCurrentComposer: se,
						} = (0, N.useComposerDataHandle)(() => ee.composerDataHandle),
						re = (0, y.useComposerChatStatus)(Z),
						le = (0, h.createMemo)(() => {
							const Oe = Q().tabs.filter((xe) => xe.type === "code");
							return Oe
								? Oe.filter(
										(xe) =>
											!te.getComposerCodeBlock(Z(), xe.uri, xe.version)
												?.isNotApplied,
									)
								: [];
						}),
						oe = (0, h.createMemo)(() => le().length),
						ae = (0, h.createMemo)(() => oe() > 0),
						pe = (0, h.createMemo)(
							() => oe() > 0 && (re() === "completed" || re() === "cancelled"),
						),
						$e = (0, h.createMemo)(() => ae() && Q().isFileListExpanded),
						ye = (0, h.createMemo)(() => ({
							...ee.style,
							display: "flex",
							"flex-direction": "column",
							height: "auto",
							gap: "0px",
							padding: "0 6px",
						})),
						ue = (0, h.createMemo)(() =>
							te.getPendingUserDecisionGroup(
								ee.composerDataHandle.data.composerId,
							),
						),
						fe = (0, h.createMemo)(() =>
							te.getIsBlockingUserDecision(
								ee.composerDataHandle.data.composerId,
							),
						),
						me = (0, I.useShouldShowChatToolbar)(Z),
						ve = {
							canShowFileList: ae,
							shouldShowFileCount: pe,
							numFiles: oe,
							isFileListExpanded: () => Q().isFileListExpanded ?? !1,
							onToggleFileList: () => {
								se({ isFileListExpanded: !Q().isFileListExpanded });
							},
							chatStatus: () => re(),
						},
						ge = (0, h.createMemo)(() => {
							const Oe = Q();
							return Oe
								? Oe.conversation[Oe.conversation.length - 1].bubbleId
								: "";
						}),
						be = (0, h.createMemo)(() => {
							const Oe = Q();
							if (Oe)
								return Oe.capabilities.find(
									(xe) =>
										xe.type ===
										v.ComposerCapabilityRequest_ComposerCapabilityType
											.DIFF_REVIEW,
								);
						}),
						Ce = (0, h.createMemo)(() => {
							const Oe = be();
							if (Oe) return Oe.diffReviewData;
						}),
						Le = (0, h.createMemo)(() => {
							const Oe = be(),
								xe = Ce();
							return !Oe || !xe || xe.length === 0 || Oe.aiBubbleId() !== ge()
								? !1
								: (xe.some((He) => He.fileChanges.length > 0) ?? !1);
						}),
						Fe = () =>
							(0, r.createComponent)(h.Switch, {
								get children() {
									return [
										(0, r.createComponent)(h.Match, {
											get when() {
												return ue().length > 0;
											},
											get children() {
												return (0, r.createComponent)(
													ne,
													(0, w.mergeProps)(
														{
															get composerDataHandle() {
																return Z();
															},
															get pendingDecisionGroup() {
																return ue();
															},
															get isBlockingUserDecision() {
																return fe();
															},
															get onStartDrag() {
																return ee.onStartDrag;
															},
															get isDragging() {
																return ee.isDragging;
															},
														},
														ve,
													),
												);
											},
										}),
										(0, r.createComponent)(h.Match, {
											get when() {
												return Le();
											},
											get children() {
												return (0, r.createComponent)(
													W,
													(0, w.mergeProps)(
														{
															styles: {},
															get composerDataHandle() {
																return Z();
															},
															get diffReviewCapability() {
																return be();
															},
															get onStartDrag() {
																return ee.onStartDrag;
															},
															get isDragging() {
																return ee.isDragging;
															},
														},
														ve,
													),
												);
											},
										}),
										(0, r.createComponent)(h.Match, {
											when: !0,
											get children() {
												return (0, r.createComponent)(
													ie,
													(0, w.mergeProps)(
														{
															styles: {},
															get composerDataHandle() {
																return Z();
															},
															get onStartDrag() {
																return ee.onStartDrag;
															},
															get isDragging() {
																return ee.isDragging;
															},
														},
														ve,
													),
												);
											},
										}),
									];
								},
							});
					return (0, r.createComponent)(h.Show, {
						get when() {
							return me() || ae();
						},
						get children() {
							const Oe = F();
							return (
								Oe.addEventListener("mousedown", (xe) => ee.onStartDrag?.(xe)),
								(0, d.insert)(Oe, Fe, null),
								(0, d.insert)(
									Oe,
									(0, r.createComponent)(X, {
										get composerId() {
											return Q().composerId;
										},
										get composerDataHandle() {
											return Z();
										},
										get currentComposer() {
											return Q();
										},
										get shouldShowFileList() {
											return $e() ?? !1;
										},
									}),
									null,
								),
								(0, a.effect)((xe) => (0, C.style)(Oe, ye(), xe)),
								Oe
							);
						},
					});
				}
				function ie(ee) {
					const _ = (0, o.$odc)(),
						{ composerDataService: te, composerService: Q } = _,
						{ composerDataHandle: Z, currentComposer: se } = (0,
						N.useComposerDataHandle)(() => ee.composerDataHandle),
						re = (0, h.createMemo)(() => se().composerId),
						{
							shouldShowCancel: le,
							shouldShowSaveAll: oe,
							shouldShowAcceptAll: ae,
							shouldShowRejectAll: pe,
							shouldShowReapplyLastMessage: $e,
						} = (0, p.useComposerCollectedStatuses)(Z),
						ye = (0, O.useShouldShowApplyLastMessage)(Z),
						{ showHover: ue, hideHover: fe } = (0, $.useComposerHoverTooltip)({
							delay: g.COMPOSER_HOVER_TOOLTIP_DELAY,
						}),
						[me, ve] = (0, h.createSignal)(!1),
						ge = (be) => ["generating", "applying", "running"].includes(be);
					return (() => {
						const be = G(),
							Ce = be.firstChild,
							Le = Ce.firstChild,
							Fe = Le.firstChild;
						return (
							Ce.style.setProperty("display", "flex"),
							Ce.style.setProperty("justify-content", "space-between"),
							Ce.style.setProperty("align-items", "center"),
							Ce.style.setProperty("width", "100%"),
							Le.addEventListener("mouseup", () =>
								ee.isDragging?.() ? void 0 : ee.onToggleFileList(),
							),
							Le.style.setProperty("text-wrap", "nowrap"),
							Le.style.setProperty("text-overflow", "ellipsis"),
							Le.style.setProperty("overflow", "hidden"),
							Le.style.setProperty("flex-grow", "1"),
							Le.style.setProperty("flex-basis", "0"),
							Le.style.setProperty("min-width", "120px"),
							Le.style.setProperty("display", "inline-flex"),
							Le.style.setProperty("align-items", "center"),
							Le.style.setProperty("flex-wrap", "nowrap"),
							Le.style.setProperty("gap", "4px"),
							(0, d.insert)(
								Le,
								(0, r.createComponent)(h.Show, {
									get when() {
										return ee.canShowFileList();
									},
									get children() {
										const Oe = B();
										return (
											Oe.style.setProperty("font-size", "10px"),
											Oe.style.setProperty("flex-shrink", "0"),
											(0, a.effect)(
												(xe) => {
													const He =
															ee.chatStatus() === "cancelled"
																? "var(--vscode-testing-iconFailed)"
																: "var(--vscode-input-placeholderForeground)",
														Ke = ee.isFileListExpanded()
															? "rotate(90deg)"
															: "rotate(0deg)",
														Je = b.ThemeIcon.asClassName(f.$ak.chevronRight);
													return (
														He !== xe._v$7 &&
															((xe._v$7 = He) != null
																? Oe.style.setProperty("color", He)
																: Oe.style.removeProperty("color")),
														Ke !== xe._v$8 &&
															((xe._v$8 = Ke) != null
																? Oe.style.setProperty("transform", Ke)
																: Oe.style.removeProperty("transform")),
														Je !== xe._v$9 &&
															(0, u.className)(Oe, (xe._v$9 = Je)),
														xe
													);
												},
												{ _v$7: void 0, _v$8: void 0, _v$9: void 0 },
											),
											Oe
										);
									},
								}),
								Fe,
							),
							Fe.style.setProperty("margin", "0"),
							Fe.style.setProperty("font-size", "10px"),
							Fe.style.setProperty("flex-shrink", "0"),
							Fe.style.setProperty("white-space", "nowrap"),
							Fe.style.setProperty("text-overflow", "ellipsis"),
							Fe.style.setProperty("overflow", "hidden"),
							Fe.style.setProperty("flex-basis", "0"),
							Fe.style.setProperty("flex-grow", "1"),
							(0, d.insert)(
								Fe,
								(0, r.createComponent)(h.Switch, {
									get fallback() {
										return [];
									},
									get children() {
										return [
											(0, r.createComponent)(h.Match, {
												get when() {
													return ee.chatStatus() === "generating";
												},
												get children() {
													const Oe = H(),
														xe = Oe.firstChild;
													return (
														(0, d.insert)(
															Oe,
															(0, r.createComponent)(n.$C$b, { show: !0 }),
															null,
														),
														Oe
													);
												},
											}),
											(0, r.createComponent)(h.Match, {
												get when() {
													return ee.chatStatus() === "applying";
												},
												get children() {
													const Oe = q(),
														xe = Oe.firstChild;
													return (
														(0, d.insert)(
															Oe,
															(0, r.createComponent)(n.$C$b, { show: !0 }),
															null,
														),
														Oe
													);
												},
											}),
											(0, r.createComponent)(h.Match, {
												get when() {
													return ee.chatStatus() === "running";
												},
												get children() {
													const Oe = V(),
														xe = Oe.firstChild;
													return (
														(0, d.insert)(
															Oe,
															(0, r.createComponent)(n.$C$b, { show: !0 }),
															null,
														),
														Oe
													);
												},
											}),
											(0, r.createComponent)(h.Match, {
												get when() {
													return ee.chatStatus() === "cancelled";
												},
												get children() {
													return "Cancelled";
												},
											}),
											(0, r.createComponent)(h.Match, {
												get when() {
													return ee.chatStatus() === "completed";
												},
												get children() {
													return "Completed";
												},
											}),
										];
									},
								}),
								null,
							),
							(0, d.insert)(
								Fe,
								(0, r.createComponent)(h.Show, {
									get when() {
										return (
											(0, m.memo)(() => !!ee.shouldShowFileCount())() &&
											!ge(ee.chatStatus())
										);
									},
									get children() {
										const Oe = U(),
											xe = Oe.firstChild,
											He = xe.nextSibling,
											Ke = He.nextSibling,
											Je = Ke.nextSibling,
											Te = Je.nextSibling;
										return (
											Oe.style.setProperty("margin-left", "4px"),
											(0, d.insert)(Oe, () => ee.numFiles(), He),
											(0, d.insert)(
												Oe,
												() => (ee.numFiles() > 1 ? "s" : ""),
												Je,
											),
											Oe
										);
									},
								}),
								null,
							),
							(0, d.insert)(
								Ce,
								(0, r.createComponent)(l.$q$b, {
									get forceRerender() {
										return ee.chatStatus();
									},
									noTransition: !0,
									style: {
										display: "flex",
										"align-items": "center",
										"justify-content": "flex-end",
										margin: "0px",
										padding: "0",
									},
									forceGap: 4,
									get children() {
										return [
											(0, r.createComponent)(h.Show, {
												get when() {
													return le();
												},
												get children() {
													return (0, r.createComponent)(
														s.ComposerToolbarSimpleButton,
														{
															type: "secondary",
															onClick: () => Q.cancelCurrentStep(re()),
															get style() {
																return J();
															},
															get hintText() {
																return (0, D.getShortcut)("\u232B");
															},
															children: "Cancel",
														},
													);
												},
											}),
											(0, r.createComponent)(h.Show, {
												get when() {
													return $e();
												},
												get children() {
													return (0, r.createComponent)(
														s.ComposerToolbarSimpleButton,
														{
															type: "secondary",
															onClick: (Oe) => {
																Q.reapplyLastMessage(re());
															},
															get style() {
																return J();
															},
															children: "Reapply above",
														},
													);
												},
											}),
											(0, r.createComponent)(h.Show, {
												get when() {
													return oe();
												},
												get children() {
													return (0, r.createComponent)(
														s.ComposerToolbarSimpleButton,
														{
															type: "secondary",
															onClick: (Oe) => {
																Q.saveAll(re()),
																	ve(!0),
																	setTimeout(() => ve(!1), 500);
															},
															get style() {
																return {
																	...J(),
																	...(me() ? { opacity: 0.5 } : {}),
																};
															},
															get hintText() {
																return (0, D.getShortcut)("S");
															},
															children: "Save all",
														},
													);
												},
											}),
											(0, r.createComponent)(h.Show, {
												get when() {
													return pe();
												},
												get children() {
													return (0, r.createComponent)(
														s.ComposerToolbarSimpleButton,
														{
															type: "secondary",
															onClick: () => Q.rejectAll(re()),
															get style() {
																return J();
															},
															get hintText() {
																return (0, D.getShortcut)("\u232B");
															},
															children: "Reject all",
														},
													);
												},
											}),
											(0, r.createComponent)(h.Show, {
												get when() {
													return ae();
												},
												get children() {
													return (0, r.createComponent)(h.Show, {
														get when() {
															return !ye();
														},
														get fallback() {
															return (0, r.createComponent)(
																s.ComposerToolbarSimpleButton,
																{
																	type: "secondary",
																	onClick: () => Q.acceptAll(re()),
																	get style() {
																		return J();
																	},
																	get hintText() {
																		return (0, D.getShortcut)("\u21E7\u23CE");
																	},
																	children: "Accept all",
																},
															);
														},
														get children() {
															return (0, r.createComponent)(
																s.ComposerToolbarSimpleButton,
																{
																	type: "primary",
																	onClick: () => Q.acceptAll(re()),
																	get style() {
																		return J();
																	},
																	get hintText() {
																		return (0, D.getShortcut)("\u23CE");
																	},
																	children: "Accept all",
																},
															);
														},
													});
												},
											}),
											(0, r.createComponent)(h.Show, {
												get when() {
													return ye();
												},
												get children() {
													return (0, r.createComponent)(
														s.ComposerToolbarSimpleButton,
														{
															type: "primary",
															onClick: () =>
																Q.applyCachedCodeBlocksOfLastMessage(re()),
															get style() {
																return J();
															},
															get hintText() {
																return (0, D.getShortcut)("\u23CE");
															},
															children: "Apply all",
														},
													);
												},
											}),
										];
									},
								}),
								null,
							),
							(0, a.effect)(
								(Oe) => {
									const xe = { ...ee.styles },
										He = ee.isFileListExpanded()
											? "auto"
											: `${g.COMPOSER_TOOLBAR_HEIGHT}px`,
										Ke = ee.isFileListExpanded() ? "3px" : "0px",
										Je = ee.canShowFileList() ? "pointer" : "default",
										Te =
											ee.chatStatus() === "cancelled"
												? "var(--vscode-testing-iconFailed)"
												: "var(--vscode-input-placeholderForeground)";
									return (
										(Oe._v$10 = (0, C.style)(be, xe, Oe._v$10)),
										He !== Oe._v$11 &&
											((Oe._v$11 = He) != null
												? Ce.style.setProperty("height", He)
												: Ce.style.removeProperty("height")),
										Ke !== Oe._v$12 &&
											((Oe._v$12 = Ke) != null
												? Ce.style.setProperty("padding-top", Ke)
												: Ce.style.removeProperty("padding-top")),
										Je !== Oe._v$13 &&
											((Oe._v$13 = Je) != null
												? Le.style.setProperty("cursor", Je)
												: Le.style.removeProperty("cursor")),
										Te !== Oe._v$14 &&
											((Oe._v$14 = Te) != null
												? Fe.style.setProperty("color", Te)
												: Fe.style.removeProperty("color")),
										Oe
									);
								},
								{
									_v$10: void 0,
									_v$11: void 0,
									_v$12: void 0,
									_v$13: void 0,
									_v$14: void 0,
								},
							),
							be
						);
					})();
				}
				function ne(ee) {
					const _ = (0, o.$odc)(),
						{ composerService: te } = _,
						{ showHover: Q, hideHover: Z } = (0, $.useComposerHoverTooltip)({
							delay: g.COMPOSER_HOVER_TOOLTIP_DELAY,
						}),
						se = (0, h.createMemo)(() =>
							_.composerDataService.getToolFormer(
								ee.composerDataHandle.data.composerId,
							),
						),
						re = (0, h.createMemo)(
							() => ee.pendingDecisionGroup[0].clientSideTool,
						),
						le = (0, h.createMemo)(() => {
							if (ee.pendingDecisionGroup.length > 1) return "Accept all";
							const $e = re();
							return (
								c.TOOL_FORMER_TOOL_CALL_DECISION_PHRASES[$e]?.accept ?? "Accept"
							);
						}),
						oe = (0, h.createMemo)(() => {
							if (ee.pendingDecisionGroup.length > 1) return "Reject all";
							const $e = re();
							return (
								c.TOOL_FORMER_TOOL_CALL_DECISION_PHRASES[$e]?.reject ?? "Reject"
							);
						}),
						ae = (0, h.createMemo)(() => re() === A.ClientSideToolV2.EDIT_FILE),
						pe = ($e) => ["generating", "applying", "running"].includes($e);
					return (0, r.createComponent)(h.Show, {
						get when() {
							return se();
						},
						children: ($e) =>
							(() => {
								const ye = K(),
									ue = ye.firstChild,
									fe = ue.firstChild;
								return (
									ye.style.setProperty("display", "flex"),
									ye.style.setProperty("justify-content", "space-between"),
									ye.style.setProperty("align-items", "center"),
									ye.style.setProperty("width", "100%"),
									(0, i.addEventListener)(
										ue,
										"mouseup",
										ee.isDragging?.() ? void 0 : ee.onToggleFileList,
									),
									ue.style.setProperty("text-wrap", "nowrap"),
									ue.style.setProperty("text-overflow", "ellipsis"),
									ue.style.setProperty("overflow", "hidden"),
									ue.style.setProperty("flex-grow", "1"),
									ue.style.setProperty("flex-basis", "0"),
									ue.style.setProperty("min-width", "120px"),
									ue.style.setProperty("display", "inline-flex"),
									ue.style.setProperty("align-items", "center"),
									ue.style.setProperty("flex-wrap", "nowrap"),
									ue.style.setProperty("gap", "4px"),
									(0, d.insert)(
										ue,
										(0, r.createComponent)(h.Show, {
											get when() {
												return ee.canShowFileList();
											},
											get children() {
												const me = B();
												return (
													me.style.setProperty("font-size", "10px"),
													me.style.setProperty("flex-shrink", "0"),
													(0, a.effect)(
														(ve) => {
															const ge =
																	ee.chatStatus() === "cancelled"
																		? "var(--vscode-testing-iconFailed)"
																		: "var(--vscode-input-placeholderForeground)",
																be = ee.isFileListExpanded()
																	? "rotate(90deg)"
																	: "rotate(0deg)",
																Ce = b.ThemeIcon.asClassName(
																	f.$ak.chevronRight,
																);
															return (
																ge !== ve._v$15 &&
																	((ve._v$15 = ge) != null
																		? me.style.setProperty("color", ge)
																		: me.style.removeProperty("color")),
																be !== ve._v$16 &&
																	((ve._v$16 = be) != null
																		? me.style.setProperty("transform", be)
																		: me.style.removeProperty("transform")),
																Ce !== ve._v$17 &&
																	(0, u.className)(me, (ve._v$17 = Ce)),
																ve
															);
														},
														{ _v$15: void 0, _v$16: void 0, _v$17: void 0 },
													),
													me
												);
											},
										}),
										fe,
									),
									fe.style.setProperty("margin", "0"),
									fe.style.setProperty("font-size", "10px"),
									fe.style.setProperty("flex-shrink", "0"),
									fe.style.setProperty("white-space", "nowrap"),
									fe.style.setProperty("text-overflow", "ellipsis"),
									fe.style.setProperty("overflow", "hidden"),
									fe.style.setProperty("flex-basis", "0"),
									fe.style.setProperty("flex-grow", "1"),
									(0, d.insert)(
										fe,
										(0, r.createComponent)(h.Switch, {
											get fallback() {
												return [];
											},
											get children() {
												return [
													(0, r.createComponent)(h.Match, {
														get when() {
															return ee.chatStatus() === "generating";
														},
														get children() {
															const me = H(),
																ve = me.firstChild;
															return (
																(0, d.insert)(
																	me,
																	(0, r.createComponent)(n.$C$b, { show: !0 }),
																	null,
																),
																me
															);
														},
													}),
													(0, r.createComponent)(h.Match, {
														get when() {
															return ee.chatStatus() === "applying";
														},
														get children() {
															const me = q(),
																ve = me.firstChild;
															return (
																(0, d.insert)(
																	me,
																	(0, r.createComponent)(n.$C$b, { show: !0 }),
																	null,
																),
																me
															);
														},
													}),
													(0, r.createComponent)(h.Match, {
														get when() {
															return ee.chatStatus() === "running";
														},
														get children() {
															const me = V(),
																ve = me.firstChild;
															return (
																(0, d.insert)(
																	me,
																	(0, r.createComponent)(n.$C$b, { show: !0 }),
																	null,
																),
																me
															);
														},
													}),
													(0, r.createComponent)(h.Match, {
														get when() {
															return ee.chatStatus() === "cancelled";
														},
														get children() {
															return "Cancelled";
														},
													}),
													(0, r.createComponent)(h.Match, {
														get when() {
															return ee.chatStatus() === "completed";
														},
														get children() {
															return "Completed";
														},
													}),
												];
											},
										}),
										null,
									),
									(0, d.insert)(
										fe,
										(0, r.createComponent)(h.Show, {
											get when() {
												return (
													(0, m.memo)(() => !!ee.shouldShowFileCount())() &&
													!pe(ee.chatStatus())
												);
											},
											get children() {
												const me = U(),
													ve = me.firstChild,
													ge = ve.nextSibling,
													be = ge.nextSibling,
													Ce = be.nextSibling,
													Le = Ce.nextSibling;
												return (
													me.style.setProperty("margin-left", "4px"),
													(0, d.insert)(me, () => ee.numFiles(), ge),
													(0, d.insert)(
														me,
														() => (ee.numFiles() > 1 ? "s" : ""),
														Ce,
													),
													me
												);
											},
										}),
										null,
									),
									(0, d.insert)(
										ye,
										(0, r.createComponent)(l.$q$b, {
											noTransition: !0,
											style: {
												display: "flex",
												"align-items": "center",
												"justify-content": "flex-end",
												margin: "0px",
												padding: "0",
											},
											forceGap: 4,
											get children() {
												return [
													(0, r.createComponent)(h.Show, {
														get when() {
															return ae();
														},
														get children() {
															return (0, r.createComponent)(
																s.ComposerToolbarSimpleButton,
																{
																	type: "secondary",
																	onClick: () => {
																		te.saveAll(
																			ee.composerDataHandle.data.composerId,
																		);
																	},
																	get style() {
																		return J();
																	},
																	get hintText() {
																		return (0, D.getShortcut)("S");
																	},
																	children: "Save all",
																},
															);
														},
													}),
													(0, r.createComponent)(h.Show, {
														get when() {
															return (
																ee.chatStatus() === "generating" &&
																!ee.isBlockingUserDecision
															);
														},
														get fallback() {
															return (0, r.createComponent)(
																s.ComposerToolbarSimpleButton,
																{
																	type: "secondary",
																	onClick: () => {
																		for (const me of ee.pendingDecisionGroup)
																			$e().rejectToolCall(me.toolCallId);
																	},
																	get style() {
																		return J();
																	},
																	get hintText() {
																		return `${oe()} (${(0, D.getShortcut)("\u232B")})`;
																	},
																	get children() {
																		return (
																			oe() + " " + (0, D.getShortcut)("\u232B")
																		);
																	},
																},
															);
														},
														get children() {
															return (0, r.createComponent)(
																s.ComposerToolbarSimpleButton,
																{
																	type: "secondary",
																	onClick: () =>
																		te.cancelCurrentStep(
																			ee.composerDataHandle.data.composerId,
																		),
																	get style() {
																		return J();
																	},
																	get hintText() {
																		return (0, D.getShortcut)("\u232B");
																	},
																	get children() {
																		return (
																			"Cancel " + (0, D.getShortcut)("\u232B")
																		);
																	},
																},
															);
														},
													}),
													(0, r.createComponent)(
														s.ComposerToolbarSimpleButton,
														{
															type: "primary",
															onClick: () => {
																for (const me of ee.pendingDecisionGroup)
																	$e().acceptToolCall(me.toolCallId);
															},
															get style() {
																return J();
															},
															get hintText() {
																return `${le()} (${(0, D.getShortcut)("\u23CE")})`;
															},
															get children() {
																return (
																	le() + " " + (0, D.getShortcut)("\u23CE")
																);
															},
														},
													),
												];
											},
										}),
										null,
									),
									(0, a.effect)(
										(me) => {
											const ve = ee.isFileListExpanded()
													? "auto"
													: `${g.COMPOSER_TOOLBAR_HEIGHT}px`,
												ge = ee.isFileListExpanded() ? "3px" : "0px",
												be = ee.canShowFileList() ? "pointer" : "default",
												Ce =
													ee.chatStatus() === "cancelled"
														? "var(--vscode-testing-iconFailed)"
														: "var(--vscode-input-placeholderForeground)";
											return (
												ve !== me._v$18 &&
													((me._v$18 = ve) != null
														? ye.style.setProperty("height", ve)
														: ye.style.removeProperty("height")),
												ge !== me._v$19 &&
													((me._v$19 = ge) != null
														? ye.style.setProperty("padding-top", ge)
														: ye.style.removeProperty("padding-top")),
												be !== me._v$20 &&
													((me._v$20 = be) != null
														? ue.style.setProperty("cursor", be)
														: ue.style.removeProperty("cursor")),
												Ce !== me._v$21 &&
													((me._v$21 = Ce) != null
														? fe.style.setProperty("color", Ce)
														: fe.style.removeProperty("color")),
												me
											);
										},
										{
											_v$18: void 0,
											_v$19: void 0,
											_v$20: void 0,
											_v$21: void 0,
										},
									),
									ye
								);
							})(),
					});
				}
			},
		),
		