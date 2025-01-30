import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../../proto/aiserver/v1/chat_pb.js';
import '../../../aichat/browser/components/ChunkContext.js';
import '../../../aichat/browser/components/Utils.js';
import '../../../controlCommon/browser/solid.js';
import '../../../ui/browser/contextDisplay/listContextDisplay.js';
import '../../../../../platform/opener/common/opener.js';
import '../../../../../platform/editor/common/editor.js';
import '../../../ui/browser/scrollableDiv.js';
import '../../../ui/browser/collapsible/collapsible.js';
define(
			de[4273],
			he([1, 0, 2, 2, 2, 2, 13, 126, 1986, 242, 36, 1070, 41, 116, 135, 696]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*solid*/,
 d /*chat_pb*/,
 m /*ChunkContext*/,
 r /*Utils*/,
 u /*solid*/,
 a /*listContextDisplay*/,
 h /*opener*/,
 c /*editor*/,
 n /*scrollableDiv*/,
 g /*collapsible*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerContextChunkSection = void 0);
				const p = (0, t.template)("<div>Reading <!> <!> <br>"),
					o = (0, t.template)("<div>"),
					f = (b) => {
						const s = (0, u.$odc)(),
							{ composerDataService: l } = s,
							[y, $] = (0, C.createSignal)(!1),
							v = (0, C.createMemo)(() =>
								l.getComposerBubble(b.composerId, b.bubbleId),
							);
						(0, C.createEffect)(() => {
							(v()?.intermediateChunks ?? []).find(
								(A) => A.completeText.length > 100,
							) !== void 0 && $(!0);
						});
						const S = (0, C.createMemo)(() => {
								const N = l.getComposerData(b.composerId);
								return N
									? N.conversation.flatMap((A) =>
											A.type === d.ConversationMessage_MessageType.HUMAN
												? (A.context?.folderSelections ?? [])
												: [],
										)
									: [];
							}),
							[I, T] = (0, C.createSignal)(!1);
						(0, C.createEffect)(() => {
							b.emptyText &&
								y() &&
								v()?.intermediateSectionType === "long-file" &&
								T(!0),
								!b.emptyText &&
									v()?.intermediateSectionType === "long-file" &&
									T(!1);
						});
						const [P, k] = (0, C.createSignal)([]);
						(0, C.createEffect)(() => {
							const N = v()?.intermediateChunks ?? [];
							JSON.stringify(N.map((A) => A.chunkIdentity)) !==
								JSON.stringify(P()) && k(N.map((A) => A.chunkIdentity));
						});
						const L = (0, C.createMemo)(() =>
								P().map((N) => ({
									uri: s.workspaceContextService.resolveRelativePath(
										N.fileName,
									),
									selection: {
										startLineNumber: N.startLine,
										endLineNumber: N.endLine,
										startColumn: 1,
										endColumn: 1,
									},
									onClick: (A) => {
										console.log("[ian] item", A),
											s.openerService.open(
												(0, h.$8rb)(A.uri, {
													startLineNumber: A.selection?.startLineNumber ?? 0,
													startColumn: 1,
													endLineNumber: A.selection?.endLineNumber ?? 0,
													endColumn: 1e3,
												}),
												{
													openToSide: !1,
													editorOptions: {
														revealIfVisible: !0,
														revealIfOpened: !0,
														source: c.EditorOpenSource.USER,
													},
													fromUserGesture: !0,
												},
											);
									},
								})),
							),
							D = (0, C.createMemo)(() => {
								const N = v()?.intermediateSectionType ?? "long-file";
								return {
									codebase:
										S().length == 0
											? "Final Codebase Context"
											: S().length == 1
												? "Final Context in Folder"
												: "Final Context in Folders",
									"long-file": "Long-file Details",
									docs: "Final Documentation Context",
								}[N];
							}),
							M = (0, C.createMemo)(() => {
								const N = v()?.intermediateSectionType,
									A = v()?.intermediateChunks ?? [];
								return N !== void 0 && (N !== "long-file" || A.length > 0);
							});
						return (0, w.createComponent)(C.Show, {
							get when() {
								return M();
							},
							get children() {
								const N = o();
								return (
									N.style.setProperty("display", "flex"),
									N.style.setProperty("flex-direction", "column"),
									N.style.setProperty("margin-bottom", "8px"),
									N.style.setProperty("margin-top", "16px"),
									N.style.setProperty("gap", "2px"),
									(0, i.insert)(
										N,
										(0, w.createComponent)(C.Show, {
											get when() {
												return (
													(0, E.memo)(() => !!b.emptyText)() &&
													v()?.intermediateSectionType === "long-file"
												);
											},
											get children() {
												const A = p(),
													R = A.firstChild,
													O = R.nextSibling,
													B = O.nextSibling,
													U = B.nextSibling,
													z = U.nextSibling;
												return (
													A.style.setProperty(
														"color",
														"var(--vscode-input-placeholderForeground)",
													),
													A.style.setProperty("display", "flex"),
													A.style.setProperty("padding", "0px 4px"),
													(0, i.insert)(
														A,
														() => v()?.intermediateSectionType,
														O,
													),
													(0, i.insert)(
														A,
														(0, w.createComponent)(r.$C$b, { show: !0 }),
														U,
													),
													A
												);
											},
										}),
										null,
									),
									(0, i.insert)(
										N,
										(0, w.createComponent)(C.Show, {
											get when() {
												return !b.emptyText;
											},
											get children() {
												return (0, w.createComponent)(g.$Zcc, {
													get isOpen() {
														return I();
													},
													setIsOpen: T,
													get title() {
														return D();
													},
													get isLoading() {
														return b.emptyText;
													},
													get children() {
														const A = o();
														return (
															A.style.setProperty("height", "200px"),
															(0, i.insert)(
																A,
																(0, w.createComponent)(n.$w0b, {
																	style: { height: "100%" },
																	scrollingDirection: "vertical",
																	get children() {
																		return (0, w.createComponent)(C.Switch, {
																			get children() {
																				return [
																					(0, w.createComponent)(C.Match, {
																						get when() {
																							return (
																								v()?.intermediateSectionType ===
																								"codebase"
																							);
																						},
																						get children() {
																							return (0, w.createComponent)(
																								a.$1cc,
																								{
																									get files() {
																										return L();
																									},
																									variant: "compact",
																								},
																							);
																						},
																					}),
																					(0, w.createComponent)(C.Match, {
																						get when() {
																							return (
																								v()?.intermediateSectionType ===
																								"docs"
																							);
																						},
																						get children() {
																							return (0, w.createComponent)(
																								a.$1cc,
																								{
																									get files() {
																										return L();
																									},
																									variant: "compact",
																								},
																							);
																						},
																					}),
																					(0, w.createComponent)(C.Match, {
																						get when() {
																							return (
																								v()?.intermediateSectionType ===
																								"long-file"
																							);
																						},
																						get children() {
																							return (0, w.createComponent)(
																								C.For,
																								{
																									get each() {
																										return P();
																									},
																									children: (R, O) =>
																										(0, w.createComponent)(
																											m.$e_b,
																											{
																												selection: R,
																												vsContext: s,
																												get belowCodeText() {
																													return (
																														(v()
																															?.intermediateChunks ??
																															[])[O()]
																															?.completeText ??
																														""
																													);
																												},
																											},
																										),
																								},
																							);
																						},
																					}),
																				];
																			},
																		});
																	},
																}),
															),
															A
														);
													},
												});
											},
										}),
										null,
									),
									N
								);
							},
						});
					};
				e.ComposerContextChunkSection = f;
			},
		),
		