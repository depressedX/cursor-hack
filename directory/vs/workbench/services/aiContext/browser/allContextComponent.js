import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/solid.js';
import '../../../../../proto/aiserver/v1/context_pb.js';
import '../../../../base/common/path.js';
import '../../../../base/common/types.js';
import '../../../contrib/aichat/browser/components/InputBoxSelectionContainer.js';
import '../../../contrib/ui/browser/scrollableDiv.js';
import '../../../contrib/controlCommon/browser/solid.js';
define(
			de[4365],
			he([1, 0, 2, 2, 2, 13, 228, 54, 28, 1365, 135, 36]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*solid*/,
 C /*context_pb*/,
 d /*path*/,
 m /*types*/,
 r /*InputBoxSelectionContainer*/,
 u /*scrollableDiv*/,
 a /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Mdc = p);
				const h = (0, t.template)("<span><span></span><span></span><span>"),
					c = (0, t.template)(
						"<div><span>DEV ONLY</span>Ranked Contexts Viewer",
					),
					n = (0, t.template)("<pre>"),
					g = (o) => {
						const f = (0, a.$odc)(),
							b = (0, E.createMemo)(() =>
								o.item.intent?.type === C.ContextIntent_Type.AUTOMATIC
									? "auto"
									: o.item.intent?.type === C.ContextIntent_Type.USER_ADDED
										? "user"
										: "unspecified",
							),
							s = (0, E.createMemo)(() => {
								if (o.item.item.case === "fileChunk") {
									const l = (0, d.$sc)(o.item.item.value.relativeWorkspacePath),
										y = o.item.item.value.startLineNumber;
									return `${l}:${y}`;
								}
								return null;
							});
						return (() => {
							const l = h(),
								y = l.firstChild,
								$ = y.nextSibling,
								v = $.nextSibling;
							return (
								l.style.setProperty("display", "flex"),
								l.style.setProperty("align-items", "center"),
								l.style.setProperty("gap", "4px"),
								l.style.setProperty("color", "var(--vscode-editor-foreground)"),
								y.style.setProperty("opacity", "0.3"),
								y.style.setProperty(
									"background",
									"var(--vscode-input-placeholderForeground)",
								),
								y.style.setProperty("padding", "1px 2px"),
								y.style.setProperty("line-height", "90%"),
								y.style.setProperty("border-radius", "2px"),
								(0, w.insert)(y, b),
								(0, w.insert)($, () => o.item.item.case),
								v.style.setProperty("opacity", "0.5"),
								(0, w.insert)(v, s),
								l
							);
						})();
					};
				function p(o) {
					const f = (0, a.$odc)(),
						b = (0, E.createMemo)(() =>
							f.aiContextSessionService.getReactiveReadonlyContextSession(
								o.contextSessionUuid,
							),
						),
						s = (0, E.createMemo)(() => {
							const l = b()
								?.intents.map((y) => y.items)
								.flat()
								.filter(m.$tg);
							return l
								? l.sort(
										(y, $) => ($?.status?.score ?? 0) - (y?.status?.score ?? 0),
									)
								: [];
						});
					return (0, i.createComponent)(r.$ecc, {
						get title() {
							return (() => {
								const l = c(),
									y = l.firstChild;
								return (
									y.style.setProperty("background", "teal"),
									y.style.setProperty("color", "white"),
									y.style.setProperty("padding", "1px 2px"),
									y.style.setProperty("line-height", "90%"),
									y.style.setProperty("border-radius", "2px"),
									y.style.setProperty("margin-right", "4px"),
									l
								);
							})();
						},
						collapseByDefault: !0,
						renderItemBorders: !0,
						collapseOthersOnAdd: !0,
						get isRunning() {
							return o.isRunning;
						},
						get stopRunning() {
							return o.stopRunning;
						},
						get startRunning() {
							return o.startRunning;
						},
						get isFocused() {
							return o.isFocused;
						},
						get stopFocused() {
							return o.stopFocused;
						},
						get containerRef() {
							return o.containerRef;
						},
						get each() {
							return s();
						},
						class: "prompt-bar-selection-container",
						style: { "background-color": "#606d7822" },
						type: "all-context-items-by-score",
						get show() {
							return s().length > 0;
						},
						boxPropsFunc: (l) => ({
							title: (0, i.createComponent)(g, {
								get item() {
									return l.item;
								},
							}),
							subTitle: `Score: ${l.status?.score === void 0 ? "no score" : l.status?.score}`,
							onTitleClick: () => {
								console.log(JSON.parse(JSON.stringify(l)));
							},
						}),
						children: (l) =>
							(0, i.createComponent)(u.$w0b, {
								scrollingDirection: "both",
								get children() {
									const y = n();
									return (
										y.style.setProperty("min-height", "100px"),
										y.style.setProperty("padding", "0.5rem"),
										(0, w.insert)(y, () => JSON.stringify(l.item, null, 2)),
										y
									);
								},
							}),
					});
				}
			},
		),
		define(
			de[2e3],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 13, 228, 14, 12, 19, 26, 9, 116, 1365,
				156, 523, 4181, 135, 36, 2537,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Idc = F),
					(e.$Jdc = ne),
					(e.$Kdc = ee),
					(e.$Ldc = _);
				const v = (0, t.template)("<div>"),
					S = (0, t.template)(
						'<div class="context-file-mode-selector"><div class="context-file-mode-selector-tooltip">Change mode',
					),
					I = (0, t.template)("<div>Change mode"),
					T = (0, t.template)("<div>Chat history"),
					P = (0, t.template)("<div><div></div><div>"),
					k = (0, t.template)("<div>todo: "),
					L = (0, t.template)("<div><code>"),
					D = (0, t.template)("<div>:<pre><code>"),
					M = (0, t.template)("<div>Nearby definitions"),
					N = (0, t.template)(
						'<div class="context-file-mode-selector-tooltip"><span>View context',
					),
					A = (0, t.template)(
						'<div class="clickable context-view-context-button"><span>',
					),
					R = (0, t.template)("<span>(hold <!>)"),
					O = (0, t.template)("<div><div></div><div><span></span></div><div>"),
					B = (0, t.template)("<div>View context");
				function U(te, Q) {
					if (te === Q) return !0;
					if (
						typeof te != "object" ||
						typeof Q != "object" ||
						te == null ||
						Q == null
					)
						return !1;
					const Z = Object.keys(te),
						se = Object.keys(Q);
					if (Z.length !== se.length) return !1;
					for (const re of Z)
						if (!se.includes(re) || !U(te[re], Q[re])) return !1;
					return !0;
				}
				let z = !0;
				z = !1;
				function F(te) {
					const Q = (0, $.$odc)(),
						Z = (0, u.createMemo)(() =>
							Q.aiContextSessionService.getReactiveReadonlyContextSession(
								te.contextSessionUuid,
							),
						),
						[se, re] = (0, u.createSignal)(!1),
						le = (0, u.createMemo)(
							() =>
								Z()?.intents.filter(
									(ge) => ge.intent.type === a.ContextIntent_Type.USER_ADDED,
								) ?? [],
						),
						oe = (0, u.createMemo)(() =>
							le().filter((ge) => ge.intent.intent.case === "codeSelection"),
						),
						ae = (0, u.createMemo)(() =>
							le().filter((ge) => ge.intent.intent.case === "file"),
						),
						pe = (0, u.createMemo)(() =>
							le().filter((ge) => ge.intent.intent.case === "cmdKDefinitions"),
						),
						$e = (0, u.createMemo)(() =>
							le().filter((ge) => ge.intent.intent.case === "chatHistory"),
						),
						ye = (0, u.createMemo)(
							() =>
								Z()?.intents.filter(
									(ge) => ge.intent.type === a.ContextIntent_Type.AUTOMATIC,
								) ?? [],
						),
						[ue, fe] = (0, u.createSignal)(void 0),
						me = (0, u.createMemo)(() => ({
							class: "prompt-bar-selection-container",
							renderItemBorders: !0,
							stopRunning: () => te.setRunningSection?.(null),
							stopFocused: te.stopFocusedSection,
							containerRef: te.containerRef,
							collapseOthersOnAdd: !0,
							collapseByDefault: te.collapseByDefault ?? !1,
						})),
						ve = (0, u.createMemo)(() => le().length > 0);
					return (0, m.createComponent)(u.Show, {
						get when() {
							return !z && Z();
						},
						get fallback() {
							return (() => {
								const ge = v();
								return ge.style.setProperty("height", "4px"), ge;
							})();
						},
						children: (ge) => [
							(0, m.createComponent)(u.Show, {
								get when() {
									return pe().length > 0;
								},
								get children() {
									return (0, m.createComponent)(
										f.$ecc,
										(0, d.mergeProps)(
											{
												title: "Definitions",
												get each() {
													return pe();
												},
												get isFocused() {
													return te.focusedSection === "ctx-definitions";
												},
												get isRunning() {
													return te.runningSection === "ctx-definitions";
												},
												type: "intent-definition",
												get show() {
													return pe().length > 0;
												},
												startRunning: () =>
													te.setRunningSection?.("ctx-definitions"),
											},
											me,
											{
												boxPropsFunc: (be) => ({
													title: "Nearby definitions",
													icon: g.ThemeIcon.asClassName(
														h.$ak.symbolTypeParameter,
													),
													customToolbar: (0, m.createComponent)(ee, {
														intent: be,
														get contextSession() {
															return ge();
														},
													}),
													onRemove: () => {
														Q.aiContextSessionService.updateContextSession(
															ge().uuid,
															{
																removedIntentUuids: [be.intent.uuid],
																upsertedIntents: [],
																rerankEndpoint: void 0,
															},
														);
													},
													alwaysShowToolbar: !0,
												}),
												children: (be) =>
													(0, m.createComponent)(Y, { intent: be }),
											},
										),
									);
								},
							}),
							(0, m.createComponent)(u.Show, {
								get when() {
									return $e().length > 0;
								},
								get children() {
									return (0, m.createComponent)(
										f.$ecc,
										(0, d.mergeProps)(
											{
												title: "Chat history",
												get each() {
													return $e();
												},
												get show() {
													return $e().length > 0;
												},
												get isFocused() {
													return te.focusedSection === "ctx-chat-history";
												},
												get isRunning() {
													return te.runningSection === "ctx-chat-history";
												},
												startRunning: () =>
													te.setRunningSection?.("ctx-chat-history"),
												type: "intent-chat-history",
											},
											me,
											{
												boxPropsFunc: (be) => ({
													title: "Chat history",
													icon: g.ThemeIcon.asClassName(
														h.$ak.commentDiscussion,
													),
													customToolbar: (0, m.createComponent)(ee, {
														intent: be,
														get contextSession() {
															return ge();
														},
													}),
													onRemove: () => {
														Q.aiContextSessionService.updateContextSession(
															ge().uuid,
															{
																removedIntentUuids: [be.intent.uuid],
																upsertedIntents: [],
																rerankEndpoint: void 0,
															},
														);
													},
													alwaysShowToolbar: !0,
												}),
												children: (be) =>
													(0, m.createComponent)(W, { intent: be }),
											},
										),
									);
								},
							}),
							(0, m.createComponent)(u.Show, {
								get when() {
									return oe().length > 0;
								},
								get children() {
									return (0, m.createComponent)(
										f.$ecc,
										(0, d.mergeProps)(
											{
												title: "Code",
												get each() {
													return oe();
												},
												get show() {
													return oe().length > 0;
												},
												type: "intent-code",
												get isFocused() {
													return te.focusedSection === "ctx-code";
												},
												startRunning: () => te.setRunningSection?.("ctx-code"),
												get isRunning() {
													return te.runningSection === "ctx-code";
												},
											},
											me,
											{
												boxPropsFunc: (be) => {
													const Ce =
															Q.workspaceContextService.resolveRelativePath(
																be.intent.intent.value.relativeWorkspacePath,
															),
														Le = () => {
															Q.openerService.open(Ce, {
																openToSide: !1,
																editorOptions: {
																	revealIfVisible: !0,
																	revealIfOpened: !0,
																	source: o.EditorOpenSource.USER,
																},
																fromUserGesture: !0,
															});
														};
													return {
														title: (0, n.$kh)(Ce),
														icon: (0, m.createComponent)(b.$k$b, {
															get fileName() {
																return Ce.fsPath;
															},
															get workspaceContextService() {
																return Q.workspaceContextService;
															},
															get modelService() {
																return Q.modelService;
															},
															get languageService() {
																return Q.languageService;
															},
														}),
														subTitle:
															be.intent.intent.value.relativeWorkspacePath,
														onTitleClick: Le,
														customToolbar: (0, m.createComponent)(ee, {
															intent: be,
															get contextSession() {
																return ge();
															},
														}),
														onRemove: () => {
															Q.aiContextSessionService.updateContextSession(
																ge().uuid,
																{
																	removedIntentUuids: [be.intent.uuid],
																	upsertedIntents: [],
																	rerankEndpoint: void 0,
																},
															);
														},
														alwaysShowToolbar: !0,
													};
												},
												children: (be) =>
													(0, m.createComponent)(K, { intent: be }),
											},
										),
									);
								},
							}),
							(0, m.createComponent)(u.Show, {
								get when() {
									return ae().length > 0;
								},
								get children() {
									return (0, m.createComponent)(
										f.$ecc,
										(0, d.mergeProps)(
											{
												title: "Files",
												get each() {
													return ae();
												},
												get show() {
													return ae().length > 0;
												},
												type: "intent-file",
											},
											me,
											{
												get isFocused() {
													return te.focusedSection === "ctx-files";
												},
												startRunning: () => te.setRunningSection?.("ctx-files"),
												get isRunning() {
													return te.runningSection === "ctx-files";
												},
												onKeyboardDown: (be, Ce) => {
													if (
														(be.key === "m" || be.key === "/") &&
														(be.ctrlKey || be.metaKey)
													) {
														be.preventDefault(), be.stopImmediatePropagation();
														const Le = Object.keys(a.ContextIntent_File_Mode)
																.map((He) => parseInt(He))
																.filter((He) => !isNaN(He)),
															Fe = Ce.intent.intent.value.mode,
															Oe = Le.indexOf(Fe);
														if (Oe === -1) {
															console.warn("wot?");
															return;
														}
														const xe =
															Le[
																((be.shiftKey && be.key !== "/"
																	? Oe - 1
																	: Oe + 1) +
																	Le.length) %
																	Le.length
															];
														Q.aiContextSessionService.updateContextSession(
															ge().uuid,
															{
																removedIntentUuids: [],
																upsertedIntents: [
																	{
																		uuid: Ce.intent.uuid,
																		type: Ce.intent.type,
																		intent: {
																			case: "file",
																			value: {
																				relativeWorkspacePath:
																					Ce.intent.intent.value
																						.relativeWorkspacePath,
																				mode: xe,
																			},
																		},
																	},
																],
																rerankEndpoint: void 0,
															},
														);
													}
												},
												boxPropsFunc: (be, Ce, Le) => {
													const Fe =
															Q.workspaceContextService.resolveRelativePath(
																be.intent.intent.value.relativeWorkspacePath,
															),
														Oe = () => {
															Q.openerService.open(Fe, {
																openToSide: !1,
																editorOptions: {
																	revealIfVisible: !0,
																	revealIfOpened: !0,
																	source: o.EditorOpenSource.USER,
																},
																fromUserGesture: !0,
															});
														};
													return {
														title: (0, n.$kh)(Fe),
														icon: (0, m.createComponent)(b.$k$b, {
															get fileName() {
																return Fe.fsPath;
															},
															get workspaceContextService() {
																return Q.workspaceContextService;
															},
															get modelService() {
																return Q.modelService;
															},
															get languageService() {
																return Q.languageService;
															},
														}),
														subTitle:
															be.intent.intent.value.relativeWorkspacePath,
														onTitleClick: Oe,
														customToolbar: Le
															? []
															: [
																	(() => {
																		const xe = S(),
																			He = xe.firstChild;
																		return (
																			xe.addEventListener("click", (Ke) => {
																				Ke.stopPropagation();
																			}),
																			xe.style.setProperty(
																				"position",
																				"relative",
																			),
																			He.style.setProperty("z-index", "100"),
																			He.style.setProperty("height", "17px"),
																			He.style.setProperty(
																				"position",
																				"absolute",
																			),
																			He.style.setProperty(
																				"top",
																				"calc(100% + 4px)",
																			),
																			He.style.setProperty("left", "50%"),
																			He.style.setProperty(
																				"transform",
																				"translateX(-50%)",
																			),
																			He.style.setProperty(
																				"padding",
																				"2px 4px",
																			),
																			He.style.setProperty(
																				"border-radius",
																				"2px",
																			),
																			He.style.setProperty(
																				"background-color",
																				"var(--vscode-editorWidget-background)",
																			),
																			He.style.setProperty(
																				"border",
																				"1px solid var(--vscode-input-border)",
																			),
																			He.style.setProperty(
																				"font-size",
																				"0.6rem",
																			),
																			He.style.setProperty("flex", "1"),
																			(0, E.insert)(
																				xe,
																				(0, m.createComponent)(s.$Mbc, {
																					get value() {
																						return a.ContextIntent_File_Mode[
																							be.intent.intent.value.mode
																						];
																					},
																					buttonStyle: {
																						"font-size": "0.8em",
																						"margin-right": "3px",
																					},
																					get items() {
																						return Object.keys(
																							a.ContextIntent_File_Mode,
																						)
																							.flatMap((Ke) => {
																								const Je = parseInt(Ke);
																								return isNaN(Je) ? [] : [Je];
																							})
																							.map((Ke) => ({
																								id: a.ContextIntent_File_Mode[
																									Ke
																								],
																								label: (() => {
																									switch (Ke) {
																										case a
																											.ContextIntent_File_Mode
																											.FULL:
																											return "full file";
																										case a
																											.ContextIntent_File_Mode
																											.OUTLINE:
																											return "outline";
																										case a
																											.ContextIntent_File_Mode
																											.CHUNKS:
																											return "chunks";
																										case a
																											.ContextIntent_File_Mode
																											.UNSPECIFIED:
																											return "auto";
																										default:
																											return "unknown";
																									}
																								})(),
																							}));
																					},
																					origLabel: "",
																					useLabel: !0,
																					onSelect: (Ke) => {
																						const Je =
																							a.ContextIntent_File_Mode[Ke];
																						Q.aiContextSessionService.updateContextSession(
																							ge().uuid,
																							{
																								removedIntentUuids: [],
																								upsertedIntents: [
																									{
																										uuid: be.intent.uuid,
																										type: be.intent.type,
																										intent: {
																											case: "file",
																											value: {
																												relativeWorkspacePath:
																													be.intent.intent.value
																														.relativeWorkspacePath,
																												mode: Je,
																											},
																										},
																									},
																								],
																								rerankEndpoint: void 0,
																							},
																						);
																					},
																				}),
																				null,
																			),
																			xe
																		);
																	})(),
																	(0, m.createComponent)(ee, {
																		intent: be,
																		get contextSession() {
																			return ge();
																		},
																	}),
																],
														onRemove: () => {
															Q.aiContextSessionService.updateContextSession(
																ge().uuid,
																{
																	removedIntentUuids: [be.intent.uuid],
																	upsertedIntents: [],
																	rerankEndpoint: void 0,
																},
															);
														},
														alwaysShowToolbar: !0,
													};
												},
												children: (be) =>
													(0, m.createComponent)(q, { intent: be }),
											},
										),
									);
								},
							}),
							(0, m.createComponent)(u.Show, {
								get when() {
									return ve() && te.bottomHeightWhenVisible;
								},
								get children() {
									const be = v();
									return (
										(0, C.effect)(() =>
											`${te.bottomHeightWhenVisible}px` != null
												? be.style.setProperty(
														"height",
														`${te.bottomHeightWhenVisible}px`,
													)
												: be.style.removeProperty("height"),
										),
										be
									);
								},
							}),
						],
					});
				}
				function x(te) {
					return (() => {
						const Q = v();
						return (
							Q.style.setProperty(
								"border",
								"1px solid var(--vscode-input-border)",
							),
							(0, E.insert)(
								Q,
								(0, m.createComponent)(u.Switch, {
									get children() {
										return [
											(0, m.createComponent)(u.Match, {
												get when() {
													return (
														te.intent.intent.intent.case === "cmdKDefinitions"
													);
												},
												get children() {
													return (0, m.createComponent)(ie, {
														get intent() {
															return te.intent;
														},
														get contextSession() {
															return te.contextSession;
														},
													});
												},
											}),
											(0, m.createComponent)(u.Match, {
												get when() {
													return te.intent.intent.intent.case === "chatHistory";
												},
												get children() {
													return (0, m.createComponent)(J, {
														get intent() {
															return te.intent;
														},
														get contextSession() {
															return te.contextSession;
														},
													});
												},
											}),
											(0, m.createComponent)(u.Match, {
												get when() {
													return te.intent.intent.intent.case === "file";
												},
												get children() {
													return (0, m.createComponent)(H, {
														get intent() {
															return te.intent;
														},
														get contextSession() {
															return te.contextSession;
														},
													});
												},
											}),
											(0, m.createComponent)(u.Match, {
												get when() {
													return (
														te.intent.intent.intent.case === "codeSelection"
													);
												},
												get children() {
													return (0, m.createComponent)(G, {
														get intent() {
															return te.intent;
														},
														get contextSession() {
															return te.contextSession;
														},
													});
												},
											}),
										];
									},
								}),
							),
							Q
						);
					})();
				}
				function H(te) {
					const Q = (0, $.$odc)(),
						Z = (0, u.createMemo)(() =>
							Q.workspaceContextService.resolveRelativePath(
								te.intent.intent.intent.value.relativeWorkspacePath,
							),
						),
						se = () => {
							Q.openerService.open(Z(), {
								openToSide: !1,
								editorOptions: {
									revealIfVisible: !0,
									revealIfOpened: !0,
									source: o.EditorOpenSource.USER,
								},
								fromUserGesture: !0,
							});
						},
						[re, le] = (0, u.createSignal)(!1);
					return [
						(0, m.createComponent)(_, {
							get contextSession() {
								return te.contextSession;
							},
							get leftItems() {
								return [
									(0, m.createComponent)(b.$k$b, {
										get fileName() {
											return Z().fsPath;
										},
										get workspaceContextService() {
											return Q.workspaceContextService;
										},
										get modelService() {
											return Q.modelService;
										},
										get languageService() {
											return Q.languageService;
										},
									}),
									(() => {
										const oe = v();
										return (
											oe.addEventListener("click", se),
											oe.style.setProperty("cursor", "pointer"),
											(0, E.insert)(oe, () => (0, n.$kh)(Z())),
											oe
										);
									})(),
									(() => {
										const oe = v();
										return (
											oe.addEventListener("click", se),
											oe.style.setProperty("opacity", "0.5"),
											oe.style.setProperty("margin-left", "5px"),
											oe.style.setProperty("flex-shrink", "1"),
											oe.style.setProperty("min-width", "0"),
											oe.style.setProperty("cursor", "pointer"),
											oe.style.setProperty("font-size", "0.8em"),
											(0, E.insert)(
												oe,
												(0, m.createComponent)(y.$w0b, {
													scrollingDirection: "horizontal",
													style: { width: "100%", "white-space": "nowrap" },
													get children() {
														return te.intent.intent.intent.value
															.relativeWorkspacePath;
													},
												}),
											),
											oe
										);
									})(),
								];
							},
							get rightItems() {
								return (() => {
									const oe = v();
									return (
										oe.addEventListener("mouseleave", () => le(!1)),
										oe.addEventListener("mouseenter", () => le(!0)),
										oe.style.setProperty("position", "relative"),
										(0, E.insert)(
											oe,
											(() => {
												const ae = (0, r.memo)(() => !!re());
												return () =>
													ae() &&
													(() => {
														const pe = I();
														return (
															pe.style.setProperty("z-index", "100"),
															pe.style.setProperty("position", "absolute"),
															pe.style.setProperty("top", "22px"),
															pe.style.setProperty("right", "0px"),
															pe.style.setProperty("padding", "2px 4px"),
															pe.style.setProperty("border-radius", "2px"),
															pe.style.setProperty(
																"background-color",
																"var(--vscode-editorWidget-background)",
															),
															pe.style.setProperty(
																"border",
																"1px solid var(--vscode-input-border)",
															),
															pe.style.setProperty("font-size", "1em"),
															pe.style.setProperty("width", "fit-content"),
															pe.style.setProperty("white-space", "nowrap"),
															pe
														);
													})();
											})(),
											null,
										),
										(0, E.insert)(
											oe,
											(0, m.createComponent)(s.$Mbc, {
												get value() {
													return a.ContextIntent_File_Mode[
														te.intent.intent.intent.value.mode
													];
												},
												buttonStyle: {
													"font-size": "0.8em",
													"margin-right": "3px",
												},
												get items() {
													return Object.keys(a.ContextIntent_File_Mode)
														.flatMap((ae) => {
															const pe = parseInt(ae);
															return isNaN(pe) ? [] : [pe];
														})
														.map((ae) => ({
															id: a.ContextIntent_File_Mode[ae],
															label: (() => {
																switch (ae) {
																	case a.ContextIntent_File_Mode.FULL:
																		return "full file";
																	case a.ContextIntent_File_Mode.OUTLINE:
																		return "outline";
																	case a.ContextIntent_File_Mode.CHUNKS:
																		return "chunks";
																	case a.ContextIntent_File_Mode.UNSPECIFIED:
																		return "auto";
																	default:
																		return "unknown";
																}
															})(),
														}));
												},
												origLabel: "",
												useLabel: !0,
												onSelect: (ae) => {
													const pe = a.ContextIntent_File_Mode[ae];
													Q.aiContextSessionService.updateContextSession(
														te.contextSession.uuid,
														{
															removedIntentUuids: [],
															upsertedIntents: [
																{
																	uuid: te.intent.intent.uuid,
																	type: te.intent.intent.type,
																	intent: {
																		case: "file",
																		value: {
																			relativeWorkspacePath:
																				te.intent.intent.intent.value
																					.relativeWorkspacePath,
																			mode: pe,
																		},
																	},
																},
															],
															rerankEndpoint: void 0,
														},
													);
												},
											}),
											null,
										),
										oe
									);
								})();
							},
							get intent() {
								return te.intent;
							},
						}),
						(0, m.createComponent)(l.$Hdc, {
							get content() {
								return { case: "file", uri: Z() };
							},
							style: {
								border: "none",
								background: "var(--vscode-editor-background)",
							},
						}),
					];
				}
				function q(te) {
					const Q = (0, $.$odc)(),
						Z = (0, u.createMemo)(() =>
							Q.workspaceContextService.resolveRelativePath(
								te.intent.intent.intent.value.relativeWorkspacePath,
							),
						);
					return (0, m.createComponent)(l.$Hdc, {
						get content() {
							return { case: "file", uri: Z() };
						},
						style: {
							border: "none",
							background: "var(--vscode-editor-background)",
						},
					});
				}
				function V() {
					let te = "abcdefghijklmnopqrstuvwxyz",
						Q = "";
					for (let Z = 0; Z < 10; Z++)
						Q += te.charAt(Math.floor(Math.random() * te.length));
					return p.URI.parse(`aichat-code-block-anysphere://${Q}`);
				}
				function G(te) {
					const Q = (0, $.$odc)(),
						Z = (0, u.createMemo)(() => te.intent);
					let se = "";
					const le = /```(\w*)/.exec(Z().intent.intent.value.text);
					le && (se = le[1]);
					const oe =
						Q.languageService.createByLanguageNameOrFilepathOrFirstLine(
							se,
							null,
							void 0,
						);
					Q.languageService.createByLanguageNameOrFilepathOrFirstLine(
						se,
						null,
						void 0,
					);
					let ae = V();
					const pe = Z()
							.intent.intent.value.text.split(`
`)
							.slice(1, -1),
						$e = Q.modelService.createModel(
							pe.join(`
`),
							oe,
							ae,
							!1,
						),
						ye = (0, u.createMemo)(() =>
							Q.workspaceContextService.resolveRelativePath(
								Z().intent.intent.value.relativeWorkspacePath,
							),
						),
						ue = () => {
							Q.openerService.open(ye(), {
								openToSide: !1,
								editorOptions: {
									revealIfVisible: !0,
									revealIfOpened: !0,
									source: o.EditorOpenSource.USER,
								},
								fromUserGesture: !0,
							});
						};
					return [
						(0, m.createComponent)(_, {
							get contextSession() {
								return te.contextSession;
							},
							get leftItems() {
								return [
									(0, m.createComponent)(b.$k$b, {
										get fileName() {
											return ye().fsPath;
										},
										get workspaceContextService() {
											return Q.workspaceContextService;
										},
										get modelService() {
											return Q.modelService;
										},
										get languageService() {
											return Q.languageService;
										},
									}),
									(() => {
										const fe = v();
										return (
											fe.addEventListener("click", ue),
											fe.style.setProperty("cursor", "pointer"),
											(0, E.insert)(fe, () => (0, n.$kh)(ye())),
											fe
										);
									})(),
									(() => {
										const fe = v();
										return (
											fe.addEventListener("click", ue),
											fe.style.setProperty("opacity", "0.5"),
											fe.style.setProperty("margin-left", "5px"),
											fe.style.setProperty("flex-shrink", "1"),
											fe.style.setProperty("min-width", "0"),
											fe.style.setProperty("cursor", "pointer"),
											fe.style.setProperty("font-size", "0.8em"),
											(0, E.insert)(
												fe,
												(0, m.createComponent)(y.$w0b, {
													scrollingDirection: "horizontal",
													style: { width: "100%", "white-space": "nowrap" },
													get children() {
														return te.intent.intent.intent.value
															.relativeWorkspacePath;
													},
												}),
											),
											fe
										);
									})(),
								];
							},
							get rightItems() {
								return [];
							},
							get intent() {
								return te.intent;
							},
						}),
						(0, m.createComponent)(l.$Hdc, {
							content: { case: "model", model: $e },
							style: {
								border: "none",
								background: "var(--vscode-editor-background)",
							},
						}),
					];
				}
				function K(te) {
					const Q = (0, $.$odc)(),
						Z = (0, u.createMemo)(() => te.intent);
					let se = "";
					const le = /```(\w*)/.exec(Z().intent.intent.value.text);
					le && (se = le[1]);
					const oe =
						Q.languageService.createByLanguageNameOrFilepathOrFirstLine(
							se,
							null,
							void 0,
						);
					Q.languageService.createByLanguageNameOrFilepathOrFirstLine(
						se,
						null,
						void 0,
					);
					let ae = V();
					const pe = Z()
							.intent.intent.value.text.split(`
`)
							.slice(1, -1),
						$e = Q.modelService.createModel(
							pe.join(`
`),
							oe,
							ae,
							!1,
						);
					return (0, m.createComponent)(l.$Hdc, {
						content: { case: "model", model: $e },
						style: {
							border: "none",
							background: "var(--vscode-editor-background)",
						},
					});
				}
				function J(te) {
					return [
						(0, m.createComponent)(_, {
							get contextSession() {
								return te.contextSession;
							},
							get leftItems() {
								return [
									(() => {
										const Q = v();
										return (
											Q.style.setProperty("font-size", "1em"),
											Q.style.setProperty("margin-right", "5px"),
											Q.style.setProperty("margin-left", "2px"),
											(0, C.effect)(() =>
												(0, w.className)(
													Q,
													g.ThemeIcon.asClassName(h.$ak.commentDiscussion),
												),
											),
											Q
										);
									})(),
									T(),
								];
							},
							get rightItems() {
								return [];
							},
							get intent() {
								return te.intent;
							},
						}),
						(0, m.createComponent)(y.$w0b, {
							scrollingDirection: "horizontal",
							get children() {
								const Q = v();
								return (
									Q.style.setProperty("display", "flex"),
									Q.style.setProperty("flex-direction", "row"),
									Q.style.setProperty("height", "150px"),
									(0, E.insert)(
										Q,
										(0, m.createComponent)(u.For, {
											get each() {
												return te.intent.items;
											},
											children: (Z) =>
												(0, m.createComponent)(u.Show, {
													get when() {
														return (
															Z.item.item.case === "chatHistory" &&
															Z.item.item.value
														);
													},
													children: (se) =>
														(0, m.createComponent)(X, {
															get item() {
																return se();
															},
														}),
												}),
										}),
									),
									Q
								);
							},
						}),
					];
				}
				function W(te) {
					return (0, m.createComponent)(y.$w0b, {
						scrollingDirection: "horizontal",
						get children() {
							const Q = v();
							return (
								Q.style.setProperty("display", "flex"),
								Q.style.setProperty("flex-direction", "row"),
								Q.style.setProperty("height", "150px"),
								(0, E.insert)(
									Q,
									(0, m.createComponent)(u.For, {
										get each() {
											return te.intent.items;
										},
										children: (Z) =>
											(0, m.createComponent)(u.Show, {
												get when() {
													return (
														Z.item.item.case === "chatHistory" &&
														Z.item.item.value
													);
												},
												children: (se) =>
													(0, m.createComponent)(X, {
														get item() {
															return se();
														},
													}),
											}),
									}),
								),
								Q
							);
						},
					});
				}
				function X(te) {
					const Q = (0, u.createMemo)(() => {
						const Z = [],
							se = [];
						let re = te.item;
						for (; re !== void 0; )
							Z.push(re.userMessage),
								se.push(re.assistantResponse),
								(re = re.chatHistory);
						return (
							Z.reverse(),
							se.reverse(),
							{ userMessages: Z, assistantResponses: se }
						);
					});
					return (() => {
						const Z = v();
						return (
							(0, E.insert)(
								Z,
								(0, m.createComponent)(u.For, {
									get each() {
										return Q().userMessages;
									},
									children: (se, re) =>
										(() => {
											const le = P(),
												oe = le.firstChild,
												ae = oe.nextSibling;
											return (
												(0, E.insert)(oe, se),
												(0, E.insert)(ae, () => Q().assistantResponses[re()]),
												le
											);
										})(),
								}),
							),
							Z
						);
					})();
				}
				function Y(te) {
					return (0, m.createComponent)(y.$w0b, {
						scrollingDirection: "horizontal",
						get children() {
							const Q = v();
							return (
								Q.style.setProperty("display", "flex"),
								Q.style.setProperty("flex-direction", "row"),
								Q.style.setProperty("height", "150px"),
								(0, E.insert)(
									Q,
									(0, m.createComponent)(u.Show, {
										get when() {
											return te.intent.items.length === 0;
										},
										children: "Loading...",
									}),
									null,
								),
								(0, E.insert)(
									Q,
									(0, m.createComponent)(u.For, {
										get each() {
											return te.intent.items;
										},
										children: (Z) =>
											(0, m.createComponent)(u.Switch, {
												get children() {
													return [
														(0, m.createComponent)(u.Match, {
															get when() {
																return (
																	Z.item.item.case === "goToDefinitionResult" &&
																	Z.item.item.value
																);
															},
															children: (se) =>
																(() => {
																	const re = v();
																	return (
																		re.style.setProperty("font-size", "7px"),
																		re.style.setProperty("width", "180px"),
																		re.style.setProperty("line-height", "7px"),
																		re.style.setProperty("overflow", "hidden"),
																		(0, E.insert)(
																			re,
																			(0, m.createComponent)(u.Show, {
																				get when() {
																					return se().definitionChunk;
																				},
																				children: (le) =>
																					(() => {
																						const oe = L(),
																							ae = oe.firstChild;
																						return (
																							ae.style.setProperty(
																								"white-space",
																								"pre-wrap",
																							),
																							(0, E.insert)(
																								ae,
																								() => le().chunkContents,
																							),
																							oe
																						);
																					})(),
																			}),
																		),
																		re
																	);
																})(),
														}),
														(0, m.createComponent)(u.Match, {
															get when() {
																return (
																	Z.item.item.case === "fileChunk" &&
																	Z.item.item.value
																);
															},
															children: (se) =>
																(() => {
																	const re = D(),
																		le = re.firstChild,
																		oe = le.nextSibling,
																		ae = oe.firstChild;
																	return (
																		(0, E.insert)(
																			re,
																			() => se().relativeWorkspacePath,
																			le,
																		),
																		(0, E.insert)(
																			re,
																			() => se().startLineNumber,
																			oe,
																		),
																		(0, E.insert)(ae, () => se().chunkContents),
																		re
																	);
																})(),
														}),
														(0, m.createComponent)(u.Match, {
															when: !0,
															get children() {
																const se = k(),
																	re = se.firstChild;
																return (
																	(0, E.insert)(
																		se,
																		() => Z.item.item.case,
																		null,
																	),
																	se
																);
															},
														}),
													];
												},
											}),
									}),
									null,
								),
								Q
							);
						},
					});
				}
				function ie(te) {
					return [
						(0, m.createComponent)(_, {
							get contextSession() {
								return te.contextSession;
							},
							get leftItems() {
								return [
									(() => {
										const Q = v();
										return (
											Q.style.setProperty("font-size", "1em"),
											Q.style.setProperty("margin-right", "5px"),
											Q.style.setProperty("margin-left", "2px"),
											(0, C.effect)(() =>
												(0, w.className)(
													Q,
													g.ThemeIcon.asClassName(h.$ak.symbolTypeParameter),
												),
											),
											Q
										);
									})(),
									M(),
								];
							},
							get rightItems() {
								return [];
							},
							get intent() {
								return te.intent;
							},
						}),
						(0, m.createComponent)(y.$w0b, {
							scrollingDirection: "horizontal",
							get children() {
								const Q = v();
								return (
									Q.style.setProperty("display", "flex"),
									Q.style.setProperty("flex-direction", "row"),
									Q.style.setProperty("height", "150px"),
									(0, E.insert)(
										Q,
										(0, m.createComponent)(u.Show, {
											get when() {
												return te.intent.items.length === 0;
											},
											children: "Loading...",
										}),
										null,
									),
									(0, E.insert)(
										Q,
										(0, m.createComponent)(u.For, {
											get each() {
												return te.intent.items;
											},
											children: (Z) =>
												(0, m.createComponent)(u.Switch, {
													get children() {
														return [
															(0, m.createComponent)(u.Match, {
																get when() {
																	return (
																		Z.item.item.case ===
																			"goToDefinitionResult" &&
																		Z.item.item.value
																	);
																},
																children: (se) =>
																	(() => {
																		const re = v();
																		return (
																			re.style.setProperty("font-size", "7px"),
																			re.style.setProperty("width", "180px"),
																			re.style.setProperty(
																				"line-height",
																				"7px",
																			),
																			re.style.setProperty(
																				"overflow",
																				"hidden",
																			),
																			(0, E.insert)(
																				re,
																				(0, m.createComponent)(u.Show, {
																					get when() {
																						return se().definitionChunk;
																					},
																					children: (le) =>
																						(() => {
																							const oe = L(),
																								ae = oe.firstChild;
																							return (
																								ae.style.setProperty(
																									"white-space",
																									"pre-wrap",
																								),
																								(0, E.insert)(
																									ae,
																									() => le().chunkContents,
																								),
																								oe
																							);
																						})(),
																				}),
																			),
																			re
																		);
																	})(),
															}),
															(0, m.createComponent)(u.Match, {
																get when() {
																	return (
																		Z.item.item.case === "fileChunk" &&
																		Z.item.item.value
																	);
																},
																children: (se) =>
																	(() => {
																		const re = D(),
																			le = re.firstChild,
																			oe = le.nextSibling,
																			ae = oe.firstChild;
																		return (
																			(0, E.insert)(
																				re,
																				() => se().relativeWorkspacePath,
																				le,
																			),
																			(0, E.insert)(
																				re,
																				() => se().startLineNumber,
																				oe,
																			),
																			(0, E.insert)(
																				ae,
																				() => se().chunkContents,
																			),
																			re
																		);
																	})(),
															}),
															(0, m.createComponent)(u.Match, {
																when: !0,
																get children() {
																	const se = k(),
																		re = se.firstChild;
																	return (
																		(0, E.insert)(
																			se,
																			() => Z.item.item.case,
																			null,
																		),
																		se
																	);
																},
															}),
														];
													},
												}),
										}),
										null,
									),
									Q
								);
							},
						}),
					];
				}
				function ne(te) {
					let Q;
					switch (te.item.item.case) {
						case "fileChunk":
							Q = `${te.item.item.value.relativeWorkspacePath} from line ${te.item.item.value.startLineNumber}:

${te.item.item.value.chunkContents}`;
							break;
						case "outlineChunk":
							Q = `Outline of ${te.item.item.value.relativeWorkspacePath} from line ${te.item.item.value.fullRange?.startLineNumber} to ${te.item.item.value.fullRange?.endLineNumberInclusive}:

${te.item.item.value.contents}`;
							break;
						default:
							Q = `unknown case ${te.item.item.case}`;
							break;
					}
					return (
						(te.status?.shownToTheModel === !0 ? "SHOWN" : "NOT SHOWN") +
						": " +
						Q
					);
				}
				function ee(te) {
					const Q = (0, $.$odc)(),
						Z = (0, u.createMemo)(() =>
							te.intent.items.filter((oe) => oe.status?.shownToTheModel === !0),
						),
						se = (0, u.createMemo)(() =>
							Z().length === 0 &&
							te.intent.error !== void 0 &&
							te.intent.error.message.length > 0
								? te.intent.error.message
								: void 0,
						),
						[re, le] = (0, u.createSignal)(!1);
					return (() => {
						const oe = A(),
							ae = oe.firstChild;
						return (
							oe.addEventListener("click", (pe) => {
								pe.stopPropagation();
								const $e = [...te.intent.items]
										.sort((me, ve) =>
											me.status?.score === void 0
												? 1
												: ve.status?.score === void 0
													? -1
													: ve.status.score - me.status.score,
										)
										.map((me) => ne(me))
										.join(`

----------------

`),
									ye = Q.languageService.createById("plaintext"),
									fe = {
										resource: Q.modelService.createModel(se() ?? $e, ye).uri,
										options: {
											preserveFocus: !1,
											pinned: !0,
											revealIfVisible: !0,
										},
									};
								Q.editorService.openEditor(fe);
							}),
							oe.addEventListener("mouseleave", () => {
								le(!1);
							}),
							oe.addEventListener("mouseenter", () => le(!0)),
							oe.style.setProperty("font-size", "0.8em"),
							oe.style.setProperty("cursor", "pointer"),
							oe.style.setProperty("display", "flex"),
							oe.style.setProperty("flex-direction", "row"),
							oe.style.setProperty("align-items", "center"),
							oe.style.setProperty("gap", "2px"),
							oe.style.setProperty("position", "relative"),
							oe.style.setProperty("border-radius", "2px"),
							oe.style.setProperty("z-index", "100"),
							oe.style.setProperty("padding", "0px 2px"),
							(0, E.insert)(
								oe,
								(0, m.createComponent)(u.Show, {
									get when() {
										return re();
									},
									get children() {
										const pe = N(),
											$e = pe.firstChild;
										return (
											pe.style.setProperty("z-index", "100"),
											pe.style.setProperty("position", "absolute"),
											pe.style.setProperty("top", "calc(100% + 4px)"),
											pe.style.setProperty("left", "50%"),
											pe.style.setProperty("transform", "translateX(-50%)"),
											pe.style.setProperty("padding", "2px 4px"),
											pe.style.setProperty("border-radius", "2px"),
											pe.style.setProperty(
												"background-color",
												"var(--vscode-editorWidget-background)",
											),
											pe.style.setProperty(
												"border",
												"1px solid var(--vscode-input-border)",
											),
											pe.style.setProperty("font-size", "0.6rem"),
											pe.style.setProperty("flex", "1"),
											$e.style.setProperty("display", "block"),
											(0, E.insert)(
												pe,
												(() => {
													const ye = (0, r.memo)(
														() =>
															!!["file", "codeSelection"].includes(
																te.intent.intent.intent.case,
															),
													);
													return () =>
														ye() &&
														(() => {
															const ue = R(),
																fe = ue.firstChild,
																me = fe.nextSibling,
																ve = me.nextSibling;
															return (
																(0, E.insert)(ue, c.$m ? "\u2325" : "alt", me),
																ue
															);
														})();
												})(),
												null,
											),
											pe
										);
									},
								}),
								ae,
							),
							(0, E.insert)(
								oe,
								(0, m.createComponent)(u.Show, {
									get when() {
										return te.intent.items.every((pe) => pe.status === void 0);
									},
									get fallback() {
										return [
											(0, r.memo)(() => Z().length),
											"/",
											(0, r.memo)(() => te.intent.items.length),
										];
									},
									get children() {
										return te.intent.items.length;
									},
								}),
								ae,
							),
							ae.addEventListener("click", (pe) => {
								pe.stopPropagation(),
									Q.aiContextSessionService.updateContextSession(
										te.contextSession.uuid,
										{
											removedIntentUuids: [te.intent.intent.uuid],
											upsertedIntents: [],
											rerankEndpoint: void 0,
										},
									);
							}),
							ae.style.setProperty("font-size", "1em"),
							ae.style.setProperty("margin-left", "1px"),
							(0, C.effect)(
								(pe) => {
									const $e = se(),
										ye =
											Z().length === 0 &&
											!(
												te.intent.items.every((fe) => fe.status === void 0) &&
												se() === void 0
											)
												? "red"
												: "var(--vscode-foreground)",
										ue =
											te.intent.items.every((fe) => fe.status === void 0) &&
											se() === void 0
												? g.ThemeIcon.asClassName(h.$ak.issues)
												: Z().length === 0
													? g.ThemeIcon.asClassName(h.$ak.error)
													: g.ThemeIcon.asClassName(h.$ak.pass);
									return (
										$e !== pe._v$ &&
											(0, i.setAttribute)(oe, "title", (pe._v$ = $e)),
										ye !== pe._v$2 &&
											((pe._v$2 = ye) != null
												? ae.style.setProperty("color", ye)
												: ae.style.removeProperty("color")),
										ue !== pe._v$3 && (0, w.className)(ae, (pe._v$3 = ue)),
										pe
									);
								},
								{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
							),
							oe
						);
					})();
				}
				function _(te) {
					const Q = (0, $.$odc)(),
						Z = (0, u.createMemo)(() =>
							te.intent.items.filter((oe) => oe.status?.shownToTheModel === !0),
						),
						se = (0, u.createMemo)(() =>
							Z().length === 0 &&
							te.intent.error !== void 0 &&
							te.intent.error.message.length > 0
								? te.intent.error.message
								: void 0,
						),
						[re, le] = (0, u.createSignal)(!1);
					return (() => {
						const oe = O(),
							ae = oe.firstChild,
							pe = ae.nextSibling,
							$e = pe.firstChild,
							ye = pe.nextSibling;
						return (
							oe.style.setProperty("display", "flex"),
							oe.style.setProperty("flex-direction", "row"),
							oe.style.setProperty(
								"background-color",
								"var(--vscode-input-background)",
							),
							oe.style.setProperty(
								"border-bottom",
								"1px solid var(--vscode-input-border)",
							),
							oe.style.setProperty("align-items", "center"),
							oe.style.setProperty("position", "relative"),
							(0, E.insert)(oe, () => te.leftItems, ae),
							ae.style.setProperty("flex-grow", "1"),
							ae.style.setProperty("margin-right", "2px"),
							ae.style.setProperty("margin-left", "2px"),
							(0, E.insert)(oe, () => te.rightItems, pe),
							(0, E.insert)(
								oe,
								(() => {
									const ue = (0, r.memo)(() => !!re());
									return () =>
										ue() &&
										(() => {
											const fe = B(),
												me = fe.firstChild;
											return (
												fe.style.setProperty("z-index", "100"),
												fe.style.setProperty("position", "absolute"),
												fe.style.setProperty("top", "24px"),
												fe.style.setProperty("right", "2px"),
												fe.style.setProperty("padding", "2px 4px"),
												fe.style.setProperty("border-radius", "2px"),
												fe.style.setProperty(
													"background-color",
													"var(--vscode-editorWidget-background)",
												),
												fe.style.setProperty(
													"border",
													"1px solid var(--vscode-input-border)",
												),
												fe.style.setProperty("font-size", "1em"),
												(0, E.insert)(
													fe,
													(() => {
														const ve = (0, r.memo)(
															() =>
																te.intent.intent.intent.case === "file" ||
																te.intent.intent.intent.case ===
																	"codeSelection",
														);
														return () =>
															ve()
																? [
																		" ",
																		(() => {
																			const ge = R(),
																				be = ge.firstChild,
																				Ce = be.nextSibling,
																				Le = Ce.nextSibling;
																			return (
																				ge.style.setProperty(
																					"font-size",
																					"0.8em",
																				),
																				(0, E.insert)(
																					ge,
																					c.$m ? "\u2325" : "alt",
																					Ce,
																				),
																				ge
																			);
																		})(),
																	]
																: null;
													})(),
													null,
												),
												fe
											);
										})();
								})(),
								pe,
							),
							pe.addEventListener("click", () => {
								const ue = [...te.intent.items]
										.sort((ge, be) =>
											ge.status?.score === void 0
												? 1
												: be.status?.score === void 0
													? -1
													: be.status.score - ge.status.score,
										)
										.map((ge) => ne(ge))
										.join(`

----------------

`),
									fe = Q.languageService.createById("plaintext"),
									ve = {
										resource: Q.modelService.createModel(se() ?? ue, fe).uri,
										options: {
											preserveFocus: !1,
											pinned: !0,
											revealIfVisible: !0,
										},
									};
								Q.editorService.openEditor(ve);
							}),
							pe.addEventListener("mouseleave", () => {
								le(!1);
							}),
							pe.addEventListener("mouseenter", () => le(!0)),
							pe.style.setProperty("font-size", "0.8em"),
							pe.style.setProperty("cursor", "pointer"),
							pe.style.setProperty("display", "flex"),
							pe.style.setProperty("flex-direction", "row"),
							pe.style.setProperty("align-items", "center"),
							pe.style.setProperty("margin-right", "3px"),
							pe.style.setProperty("opacity", "0.5"),
							pe.style.setProperty(
								"background-color",
								"var(--vscode-toolbar-hoverBackground)",
							),
							pe.style.setProperty("margin", "2px 4px 2px 0px"),
							pe.style.setProperty("padding", "0px 2px 0px 4px"),
							pe.style.setProperty("border-radius", "2px"),
							(0, E.insert)(
								pe,
								(0, m.createComponent)(u.Show, {
									get when() {
										return te.intent.items.every((ue) => ue.status === void 0);
									},
									get fallback() {
										return [
											(0, r.memo)(() => Z().length),
											"/",
											(0, r.memo)(() => te.intent.items.length),
										];
									},
									get children() {
										return te.intent.items.length;
									},
								}),
								$e,
							),
							$e.addEventListener("click", (ue) => {
								Q.aiContextSessionService.updateContextSession(
									te.contextSession.uuid,
									{
										removedIntentUuids: [te.intent.intent.uuid],
										upsertedIntents: [],
										rerankEndpoint: void 0,
									},
								);
							}),
							$e.style.setProperty("font-size", "1em"),
							$e.style.setProperty("margin-left", "1px"),
							ye.addEventListener("click", (ue) => {
								Q.aiContextSessionService.updateContextSession(
									te.contextSession.uuid,
									{
										removedIntentUuids: [te.intent.intent.uuid],
										upsertedIntents: [],
										rerankEndpoint: void 0,
									},
								);
							}),
							ye.style.setProperty("cursor", "pointer"),
							ye.style.setProperty("z-index", "1"),
							ye.style.setProperty("font-size", "1em"),
							ye.style.setProperty("margin-right", "3px"),
							ye.style.setProperty(
								"border-left",
								"1px solid var(--vscode-input-border)",
							),
							ye.style.setProperty("padding-left", "3px"),
							(0, C.effect)(
								(ue) => {
									const fe = se(),
										me =
											Z().length === 0 &&
											!(
												te.intent.items.every((be) => be.status === void 0) &&
												se() === void 0
											)
												? "red"
												: "var(--vscode-foreground)",
										ve =
											te.intent.items.every((be) => be.status === void 0) &&
											se() === void 0
												? g.ThemeIcon.asClassName(h.$ak.issues)
												: Z().length === 0
													? g.ThemeIcon.asClassName(h.$ak.error)
													: g.ThemeIcon.asClassName(h.$ak.pass),
										ge = g.ThemeIcon.asClassName(h.$ak.x);
									return (
										fe !== ue._v$4 &&
											(0, i.setAttribute)(pe, "title", (ue._v$4 = fe)),
										me !== ue._v$5 &&
											((ue._v$5 = me) != null
												? $e.style.setProperty("color", me)
												: $e.style.removeProperty("color")),
										ve !== ue._v$6 && (0, w.className)($e, (ue._v$6 = ve)),
										ge !== ue._v$7 && (0, w.className)(ye, (ue._v$7 = ge)),
										ue
									);
								},
								{ _v$4: void 0, _v$5: void 0, _v$6: void 0, _v$7: void 0 },
							),
							oe
						);
					})();
				}
			},
		),
		