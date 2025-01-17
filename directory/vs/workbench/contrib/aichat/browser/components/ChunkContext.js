import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/themables.js';
import '../../../controlCommon/browser/solid.js';
import './Utils.js';
import '../../../../../platform/editor/common/editor.js';
import '../../../../../platform/opener/common/opener.js';
import '../../../../../base/common/path.js';
import '../../../../../base/common/uri.js';
import '../chatData.js';
import './icons.js';
import '../../../ui/browser/aiInput/plugins/mentions/pureIcon.js';
import './SimpleCodeSelection.js';
import '../../../../../css!vs/workbench/contrib/aichat/browser/components/ChunkContext.js';
define(
			de[1986],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 26, 36, 242, 116, 41, 54, 9, 140, 502,
				156, 4144, 2376,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$g_b = e.$f_b = e.$e_b = e.$d_b = e.$c_b = void 0);
				const l = (0, t.template)("<br>"),
					y = (0, t.template)("<span>"),
					$ = (0, t.template)('<div class="results-container-header"><div>'),
					v = (0, t.template)("<div>"),
					S = (0, t.template)("<div><div>"),
					I = (0, t.template)(
						'<div class="chunk-context-item"><div class="chunk-context-item-content"><div class="chunk-context-item-icon"></div><div class="chunk-context-item-title"></div><div class="chunk-context-item-subtitle"></div><div class="chunk-context-item-subtitle2"> - ',
					),
					T = (0, t.template)("<div><div><div></div><div></div></div><div>"),
					P = (N, A, R) => {
						const O = p.URI.file(N)
							.path.split("/")
							.filter((x) => x !== "");
						let B = "",
							U = 0,
							z = !1,
							F = 0;
						for (let x = O.length - 1; x >= 0; x--) {
							const H = O[x],
								q = H.length * R;
							if (U + q > A) {
								z = !0;
								break;
							}
							F++, (B = H + (B ? "/" + B : "")), (U += q);
						}
						return F <= 1 ? (0, g.$sc)(N) : z ? ".../" + B : B;
					};
				e.$c_b = P;
				const k = (N) => {
					const A = (0, r.useContext)(o.$ygc),
						[R, O] = (0, r.createSignal)(!1);
					(0, r.createEffect)(() => {
						(H()?.intermediateChunks ?? []).find(
							(K) => K.completeText.length > 100,
						) !== void 0 && O(!0);
					});
					const B = (0, r.createMemo)(() => {
							const G = A.chatData.tabs.find((K) => K.tabId === N.tabId);
							return G
								? G?.bubbles.flatMap((K) =>
										K.type === o.BubbleType.USER_CHAT
											? (K.folderSelections ?? [])
											: [],
									)
								: [];
						}),
						[U, z] = (0, r.createSignal)(!1);
					(0, r.createEffect)(() => {
						N.emptyText &&
							R() &&
							H()?.intermediateSectionType === "long-file" &&
							z(!0),
							!N.emptyText &&
								H()?.intermediateSectionType === "long-file" &&
								z(!1);
					});
					const F = (0, a.$odc)(),
						x = (0, r.createMemo)(() =>
							F.reactiveStorageService.nonPersistentStorage.nonPersistentChatMetadata.find(
								(G) => G.bubbleId === N.userBubbleId && G.tabId === N.tabId,
							),
						),
						H = (0, r.createMemo)(() =>
							F.reactiveStorageService.workspaceUserPersistentStorage.persistentChatMetadata.find(
								(G) => G.bubbleId === N.userBubbleId && G.tabId === N.tabId,
							),
						),
						[q, V] = (0, r.createSignal)([]);
					return (
						(0, r.createEffect)(() => {
							const G = H()?.intermediateChunks ?? [];
							JSON.stringify(G.map((K) => K.chunkIdentity)) !==
								JSON.stringify(q()) && V(G.map((K) => K.chunkIdentity));
						}),
						(() => {
							const G = S(),
								K = G.firstChild;
							return (
								G.style.setProperty("display", "flex"),
								G.style.setProperty("flex-direction", "column"),
								G.style.setProperty("margin-bottom", "8px"),
								G.style.setProperty("gap", "2px"),
								K.style.setProperty(
									"color",
									"var(--vscode-input-placeholderForeground)",
								),
								K.style.setProperty("display", "flex"),
								K.style.setProperty("padding", "0px 4px"),
								(0, C.insert)(
									K,
									(0, d.createComponent)(r.Show, {
										get when() {
											return (
												(0, m.memo)(() => !!N.emptyText)() &&
												H()?.intermediateSectionType === "long-file"
											);
										},
										get children() {
											return [
												"Reading ",
												(0, m.memo)(() => H()?.intermediateSectionType),
												" ",
												(0, d.createComponent)(h.$C$b, { show: !0 }),
												" ",
												l(),
											];
										},
									}),
									null,
								),
								(0, C.insert)(
									K,
									(0, d.createComponent)(r.Show, {
										get when() {
											return !N.emptyText;
										},
										get children() {
											const J = $(),
												W = J.firstChild;
											return (
												J.addEventListener("click", () => {
													z((X) => !X);
												}),
												J.style.setProperty("display", "flex"),
												J.style.setProperty("justify-content", "space-between"),
												J.style.setProperty("width", "100%"),
												J.style.setProperty("align-items", "center"),
												J.style.setProperty("border-radius", "8px"),
												J.style.setProperty("padding", "2px 4px"),
												(0, C.insert)(
													W,
													() =>
														({
															codebase:
																B().length == 0
																	? "Final Codebase Context"
																	: B().length == 1
																		? "Final Context in Folder"
																		: "Final Context in Folders",
															"long-file": "Long-file Details",
															docs: "Final Documentation Context",
														})[H()?.intermediateSectionType ?? "long-file"],
												),
												(0, C.insert)(
													J,
													(0, d.createComponent)(r.Show, {
														get when() {
															return U();
														},
														get fallback() {
															return (() => {
																const X = y();
																return (
																	(0, E.effect)(() =>
																		(0, w.className)(
																			X,
																			u.ThemeIcon.asClassName(f.$E0b),
																		),
																	),
																	X
																);
															})();
														},
														get children() {
															const X = y();
															return (
																(0, E.effect)(() =>
																	(0, w.className)(
																		X,
																		u.ThemeIcon.asClassName(f.$F0b),
																	),
																),
																X
															);
														},
													}),
													null,
												),
												J
											);
										},
									}),
									null,
								),
								(0, C.insert)(
									G,
									(0, d.createComponent)(r.Show, {
										get when() {
											return (
												(0, m.memo)(
													() => (H()?.intermediateChunks ?? []).length > 0,
												)() && U()
											);
										},
										get children() {
											const J = v();
											return (
												J.style.setProperty("display", "block"),
												J.style.setProperty("padding", "0px 2px"),
												(0, C.insert)(
													J,
													(0, d.createComponent)(r.For, {
														get each() {
															return q();
														},
														children: (W, X) => {
															const Y = { selection: W, vsContext: F };
															return (0, d.createComponent)(r.Switch, {
																get children() {
																	return [
																		(0, d.createComponent)(r.Match, {
																			get when() {
																				return (
																					H()?.intermediateSectionType ===
																					"codebase"
																				);
																			},
																			get children() {
																				return (0, d.createComponent)(
																					e.$f_b,
																					(0, i.mergeProps)(Y, {
																						get belowCodeText() {
																							return (
																								(H()?.intermediateChunks ?? [])[
																									X()
																								]?.completeText ?? ""
																							);
																						},
																					}),
																				);
																			},
																		}),
																		(0, d.createComponent)(r.Match, {
																			get when() {
																				return (
																					H()?.intermediateSectionType ===
																					"docs"
																				);
																			},
																			get children() {
																				return (0, d.createComponent)(
																					e.$g_b,
																					(0, i.mergeProps)(Y, {
																						get belowCodeText() {
																							return (
																								(H()?.intermediateChunks ?? [])[
																									X()
																								]?.completeText ?? ""
																							);
																						},
																					}),
																				);
																			},
																		}),
																		(0, d.createComponent)(r.Match, {
																			get when() {
																				return (
																					H()?.intermediateSectionType ===
																					"long-file"
																				);
																			},
																			get children() {
																				return (0, d.createComponent)(
																					e.$e_b,
																					(0, i.mergeProps)(Y, {
																						get belowCodeText() {
																							return (
																								(H()?.intermediateChunks ?? [])[
																									X()
																								]?.completeText ?? ""
																							);
																						},
																					}),
																				);
																			},
																		}),
																	];
																},
															});
														},
													}),
												),
												J
											);
										},
									}),
									null,
								),
								G
							);
						})()
					);
				};
				e.$d_b = k;
				const L = (N) => {
					const [A, R] = (0, r.createSignal)(0),
						O = (0, a.$odc)();
					(0, r.createEffect)(() => {
						R((U) => U + 1);
					});
					const B = () => {
						const U = O.openerService;
						if (!U) return;
						const z = O.workspaceContextService.resolveRelativePath(
							N.selection.fileName,
						);
						U.open(
							(0, n.$8rb)(z, {
								startLineNumber: N.selection.startLine,
								startColumn: 1,
								endLineNumber: N.selection.endLine + 1,
								endColumn: 1,
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
					};
					return (() => {
						const U = I(),
							z = U.firstChild,
							F = z.firstChild,
							x = F.nextSibling,
							H = x.nextSibling,
							q = H.nextSibling,
							V = q.firstChild;
						return (
							U.addEventListener("click", B),
							(0, C.insert)(
								F,
								(0, d.createComponent)(b.$k$b, {
									get fileName() {
										return (0, g.$sc)(N.selection.fileName);
									},
									get workspaceContextService() {
										return O.workspaceContextService;
									},
									get modelService() {
										return O.modelService;
									},
									get languageService() {
										return O.languageService;
									},
								}),
							),
							(0, C.insert)(x, () => (0, g.$sc)(N.selection.fileName)),
							(0, C.insert)(H, () => N.selection.fileName),
							(0, C.insert)(q, () => N.selection.startLine, V),
							(0, C.insert)(q, () => N.selection.endLine, null),
							U
						);
					})();
				};
				e.$e_b = L;
				const D = (N) => {
					const A = (0, a.$odc)(),
						R = () => {
							const O = A.openerService;
							if (!O) return;
							const B = N.vsContext.workspaceContextService.resolveRelativePath(
								N.selection.fileName,
							);
							O.open(
								(0, n.$8rb)(B, {
									startLineNumber: N.selection.startLine,
									startColumn: 1,
									endLineNumber: N.selection.endLine + 1,
									endColumn: 1,
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
						};
					return (() => {
						const O = I(),
							B = O.firstChild,
							U = B.firstChild,
							z = U.nextSibling,
							F = z.nextSibling,
							x = F.nextSibling,
							H = x.firstChild;
						return (
							O.addEventListener("click", R),
							(0, C.insert)(
								U,
								(0, d.createComponent)(b.$k$b, {
									get fileName() {
										return (0, g.$sc)(N.selection.fileName);
									},
									get workspaceContextService() {
										return A.workspaceContextService;
									},
									get modelService() {
										return A.modelService;
									},
									get languageService() {
										return A.languageService;
									},
								}),
							),
							(0, C.insert)(z, () => (0, g.$sc)(N.selection.fileName)),
							(0, C.insert)(F, () => N.selection.fileName),
							(0, C.insert)(x, () => N.selection.startLine, H),
							(0, C.insert)(x, () => N.selection.endLine, null),
							O
						);
					})();
				};
				e.$f_b = D;
				const M = (N) => {
					const [A, R] = (0, r.createSignal)(0);
					(0, r.createEffect)(() => {
						R((U) => U + 1);
					});
					const O = (0, a.$odc)(),
						B = () => {
							O.openerService && O.openerService.open(N.selection.fileName);
						};
					return (() => {
						const U = T(),
							z = U.firstChild,
							F = z.firstChild,
							x = F.nextSibling,
							H = z.nextSibling;
						return (
							U.style.setProperty("margin", "16px 0px"),
							z.addEventListener("click", () => {
								B();
							}),
							z.style.setProperty("display", "flex"),
							z.style.setProperty("margin-bottom", "4px"),
							z.style.setProperty("cursor", "pointer"),
							F.style.setProperty(
								"color",
								"var(--vscode-input-placeholderForeground)",
							),
							F.style.setProperty("display", "flex"),
							(0, C.insert)(F, () => N.selection.fileName),
							x.style.setProperty("flex-grow", "1"),
							(0, C.insert)(
								U,
								(0, d.createComponent)(s.$b_b, {
									get selection() {
										return {
											text: N.selection.text
												.split(`
`)
												.filter((q) => q.trim() !== "")
												.join(`
`),
											uri: N.vsContext.workspaceContextService.resolveRelativePath(
												N.selection.fileName,
											),
											range: {
												selectionStartLineNumber: N.selection.startLine,
												selectionStartColumn: 1,
												positionLineNumber: N.selection.endLine + 1,
												positionColumn: 1,
											},
										};
									},
									lines: 4,
									notLink: !0,
								}),
								H,
							),
							H.style.setProperty("padding", "0px 0px 12px 0px"),
							U
						);
					})();
				};
				e.$g_b = M;
			},
		),
		