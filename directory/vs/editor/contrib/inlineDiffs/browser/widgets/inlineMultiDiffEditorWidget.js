import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/uri.js';
import '../../../../../workbench/contrib/controlCommon/browser/solid.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../workbench/contrib/ui/browser/widgets/codeBlock.js';
import '../../../../../platform/opener/common/opener.js';
import '../../../../../base/common/resources.js';
import '../../../../../workbench/contrib/ui/browser/scrollableDiv.js';
import '../controllers/inlineDiffController.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/themables.js';
import '../../../../../workbench/services/ai/browser/fastEditService.js';
import '../../../../common/editorCommon.js';
define(
			de[4194],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 3, 9, 36, 13, 312, 41, 19, 135, 851, 14, 26,
				480, 98,
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
					(e.$7Zc = void 0),
					(e.$8Zc = T),
					(e.$9Zc = k),
					(s = mt(s));
				const l = (0, t.template)("<div>No changes found"),
					y = (0, t.template)("<div>"),
					$ = (0, t.template)("<div> - "),
					v = (0, t.template)("<div><div><div><span></span><div></div><div>"),
					S = (0, t.template)(
						'<div class="cursor-ai-contains-simple-code-block">',
					);
				class I extends m.$1c {
					constructor(D, M) {
						super(),
							(this.f = D),
							(this.instantiationService = M),
							(this.c = []),
							this.D(k(this.f, this, this.instantiationService));
					}
					layout(D) {}
					getURIs() {
						return this.c;
					}
					setURIs(D) {
						this.c = D;
					}
					getActiveControl() {}
					getEditorType() {
						return s.EditorType.InlineMultiDiffEditor;
					}
					getPosition() {
						return null;
					}
					getSelection() {
						return null;
					}
				}
				e.$7Zc = I;
				function T() {
					const L = (0, u.$odc)();
					let D;
					const [M, N] = (0, a.createSignal)(0);
					(0, a.onMount)(() => {
						const H = new ResizeObserver((q) => {
							for (const V of q) {
								const { width: G, height: K } = V.contentRect;
								N(G);
							}
						});
						D && H.observe(D),
							(0, a.onCleanup)(() => {
								H.disconnect();
							});
					});
					const A = (0, a.createMemo)(() =>
							L.reactiveStorageService.nonPersistentStorage.inlineDiffs
								.filter((H) => H.source === b.$_9b || H.source === b.$a0b)
								.sort((H, q) => (H.createdAt ?? 0) - (q.createdAt ?? 0)),
						),
						[R, O] = (0, a.createSignal)([]),
						[B, U] = (0, a.createSignal)(new Map()),
						[z, F] = (0, a.createSignal)([]),
						x = (H) =>
							`${H.uri.toString()}-${H.changes[0].addedRange.startLineNumber}`;
					return (
						(0, a.createEffect)(() => {
							const H = new Map();
							for (const q of A()) {
								const V = L.inlineDiffService.getGroupedChanges({
									diffId: q.id,
								});
								for (const G of V) {
									const K = {
										inlineDiffId: q.id,
										uri: q.uri,
										changes: G,
										startLineNumber:
											(G.at(0)?.addedRange.startLineNumber ?? 1) +
											q.currentRange.startLineNumber,
										endLineNumberExclusive:
											(G.at(-1)?.addedRange.endLineNumberExclusive ?? 1) +
											q.currentRange.startLineNumber,
									};
									H.set(x(K), K);
								}
							}
							U(H), F(Array.from(H.keys()));
						}),
						(0, d.createComponent)(g.$w0b, {
							scrollingDirection: "vertical",
							style: { width: "100%", height: "100%" },
							ref(H) {
								const q = D;
								typeof q == "function" ? q(H) : (D = H);
							},
							get children() {
								return (0, d.createComponent)(a.For, {
									get each() {
										return z();
									},
									get fallback() {
										return l();
									},
									children: (H) =>
										(0, d.createComponent)(a.Show, {
											get when() {
												return B().has(H);
											},
											get children() {
												const q = v(),
													V = q.firstChild,
													G = V.firstChild,
													K = G.firstChild,
													J = K.nextSibling,
													W = J.nextSibling;
												return (
													V.addEventListener("click", () => {
														O((X) =>
															X.includes(H)
																? X.filter((Y) => Y !== H)
																: [...X, H],
														);
													}),
													V.style.setProperty("display", "flex"),
													V.style.setProperty("margin-bottom", "4px"),
													V.style.setProperty("cursor", "pointer"),
													V.style.setProperty("flex-direction", "row"),
													V.style.setProperty("align-items", "center"),
													V.style.setProperty(
														"justify-content",
														"space-between",
													),
													V.style.setProperty(
														"background-color",
														"var(--vscode-peekViewTitle-background)",
													),
													V.style.setProperty("height", "40px"),
													V.style.setProperty("font-size", "1.2em"),
													V.style.setProperty(
														"border",
														"1px solid var(--border-color)",
													),
													G.style.setProperty(
														"color",
														"var(--vscode-input-placeholderForeground)",
													),
													G.style.setProperty("display", "flex"),
													K.style.setProperty("margin-left", "10px"),
													J.style.setProperty("cursor", "pointer"),
													J.style.setProperty("margin-left", "5px"),
													(0, C.insert)(J, () =>
														(0, n.$kh)(B().get(H)?.uri ?? r.URI.file("")),
													),
													W.style.setProperty("opacity", "0.5"),
													W.style.setProperty("margin-left", "5px"),
													W.style.setProperty("flex-shrink", "1"),
													W.style.setProperty("min-width", "0"),
													W.style.setProperty("font-size", "0.8em"),
													W.style.setProperty("display", "flex"),
													(0, C.insert)(
														W,
														(0, d.createComponent)(g.$w0b, {
															scrollingDirection: "horizontal",
															style: { width: "100%", "white-space": "nowrap" },
															get children() {
																return L.workspaceContextService.asRelativePath(
																	B().get(H)?.uri ?? r.URI.file(""),
																);
															},
														}),
													),
													(0, C.insert)(
														V,
														(0, d.createComponent)(a.Show, {
															get when() {
																return R().includes(H);
															},
															get children() {
																return [
																	(() => {
																		const X = y();
																		return (
																			X.style.setProperty("flex-grow", "1"), X
																		);
																	})(),
																	(() => {
																		const X = $(),
																			Y = X.firstChild;
																		return (
																			X.style.setProperty(
																				"color",
																				"var(--vscode-input-placeholderForeground)",
																			),
																			X.style.setProperty("display", "flex"),
																			X.style.setProperty("font-size", "0.8em"),
																			X.style.setProperty(
																				"margin-right",
																				"5px",
																			),
																			(0, C.insert)(
																				X,
																				() => B().get(H)?.startLineNumber ?? 1,
																				Y,
																			),
																			(0, C.insert)(
																				X,
																				() =>
																					(B().get(H)?.endLineNumberExclusive ??
																						1) - 1,
																				null,
																			),
																			X
																		);
																	})(),
																];
															},
														}),
														null,
													),
													(0, C.insert)(
														q,
														(0, d.createComponent)(a.Show, {
															get when() {
																return (
																	(0, E.memo)(() => !R().includes(H))() &&
																	B().has(H)
																);
															},
															get children() {
																return (0, d.createComponent)(P, {
																	get changes() {
																		return B().get(H);
																	},
																});
															},
														}),
														null,
													),
													(0, w.effect)(() =>
														(0, i.className)(
															K,
															R().includes(H)
																? f.ThemeIcon.asClassName(o.$ak.chevronRight)
																: f.ThemeIcon.asClassName(o.$ak.chevronDown),
														),
													),
													q
												);
											},
										}),
								});
							},
						})
					);
				}
				const P = (L) => {
					const D = (0, u.$odc)(),
						M = (() => {
							const J = y();
							return (
								J.style.setProperty("width", "100%"),
								J.style.setProperty("height", "100%"),
								J.style.setProperty("box-sizing", "border-box"),
								J
							);
						})(),
						N = h.$X0b.getEditorOptions(D.configurationService);
					(N.lineNumbers = "on"),
						(N.lineDecorationsWidth = 10),
						(N.glyphMargin = !0),
						N.scrollbar &&
							((N.scrollbar.vertical = "hidden"),
							(N.scrollbar.horizontal = "auto"),
							(N.scrollbar.handleMouseWheel = !0),
							(N.scrollbar.alwaysConsumeMouseWheel = !1),
							(N.scrollbar.horizontalScrollbarSize = 10),
							(N.scrollbar.ignoreVerticalScrolling = !0));
					const A = D.instantiationService.createInstance(h.$X0b, M, N, {}),
						R = D.instantiationService.createInstance(p.$Ddc, A);
					R.setShowPartialAcceptRejectWidgets(!1);
					const [O, B] = (0, a.createSignal)(1),
						[U, z] = (0, a.createSignal)(1),
						[F, x] = (0, a.createSignal)(1);
					let H = A.getLayoutInfo().width;
					const q = A.onDidLayoutChange((J) => {
						J.width !== H && (x(V(O(), U())), (H = J.width));
					});
					(0, a.createEffect)(() => {
						x(V(O(), U()));
					});
					const V = (J, W) =>
						L.changes === void 0
							? 0
							: W -
								J +
								R.getRemovedNumLinesInRange(L.changes.inlineDiffId, {
									startLineNumber: J,
									startColumn: 1,
									endLineNumber: W,
									endColumn: 1,
								});
					let G;
					(0, a.onMount)(async () => {
						if (
							(G && G.dispose(),
							(G = await D.textModelService.createModelReference(
								L.changes.uri,
							)),
							!(L.changes === void 0 || L.changes.uri === void 0))
						)
							try {
								A.setModel(G.object.textEditorModel);
								const J = Math.max((L.changes.startLineNumber ?? 1) - 5, 1),
									W = Math.min(
										(L.changes.endLineNumberExclusive ?? 1) + 5,
										A.getModel()?.getLineCount() ?? 1,
									);
								B(J),
									z(W),
									A.revealLine(J, s.ScrollType.Immediate),
									A.revealLine(W, s.ScrollType.Immediate),
									A.revealLine(J, s.ScrollType.Immediate);
								for (let X = 0; X < 10; X++)
									setTimeout(() => {
										x(V(O(), U()));
									}, X * 100);
							} catch (J) {
								console.error(J);
							} finally {
							}
					}),
						(0, a.createEffect)(() => {
							const J = Math.max((L.changes.startLineNumber ?? 1) - 5, 1),
								W = Math.min(
									(L.changes.endLineNumberExclusive ?? 1) + 5,
									A.getModel()?.getLineCount() ?? 1,
								);
							B(J),
								z(W),
								A.revealLine(J, s.ScrollType.Immediate),
								A.revealLine(W, s.ScrollType.Immediate),
								A.revealLine(J, s.ScrollType.Immediate);
							for (let X = 0; X < 10; X++)
								setTimeout(() => {
									x(V(O(), U()));
								}, X * 100);
						});
					const K = async (J, W) => {
						D.openerService &&
							D.openerService.open(
								(0, c.$8rb)(r.URI.from(J), {
									startLineNumber: W,
									startColumn: 1,
									endLineNumber: W,
									endColumn: 1,
								}),
							);
					};
					return (
						A.onMouseDown((J) => {
							J.event.preventDefault(),
								J.event.stopPropagation(),
								K(L.changes.uri, O());
						}),
						A.onMouseWheel((J) => {}),
						(0, a.onCleanup)(() => {
							M.remove(), A?.dispose(), G?.dispose(), R.dispose(), q.dispose();
						}),
						(() => {
							const J = S();
							return (
								(0, C.insert)(J, M),
								(0, w.effect)(() =>
									`${(F() + 2) * 18}px` != null
										? J.style.setProperty("height", `${(F() + 2) * 18}px`)
										: J.style.removeProperty("height"),
								),
								J
							);
						})()
					);
				};
				function k(L, D, M) {
					return (0, u.$ndc)(() => (0, d.createComponent)(T, {}), L, M);
				}
			},
		),
		