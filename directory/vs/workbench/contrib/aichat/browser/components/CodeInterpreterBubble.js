import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../chatData.js';
import '../../../controlCommon/browser/solid.js';
import '../../../aiMarkdown/browser/markdown.js';
import '../../../ui/browser/simpleButton/simpleButton.js';
import '../../../../../platform/reactivestorage/browser/reactiveStorageTypes.js';
import '../../../../../base/common/path.js';
import './Utils.js';
import '../../../../../../proto/aiserver/v1/ai_project_pb.js';
import '../../../ui/browser/widgets/codeBlock.js';
import '../../../../../platform/opener/common/opener.js';
import '../../../../../platform/editor/common/editor.js';
import '../../../../services/ai/browser/aiProjectService.js';
import '../../../aiSettings/browser/components/settings/hooks.js';
import '../../../../../css!vs/workbench/contrib/aichat/browser/components/AiBubble.js';
define(
			de[4245],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 140, 36, 338, 147, 205, 54, 242, 1111, 312,
				41, 116, 1932, 722, 907,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*web*/,
				i /*web*/,
				w /*web*/,
				E /*web*/,
				C /*web*/,
				d /*web*/,
				m /*solid*/,
				r /*chatData*/,
				u /*solid*/,
				a /*markdown*/,
				h /*simpleButton*/,
				c /*reactiveStorageTypes*/,
				n /*path*/,
				g /*Utils*/,
				p /*ai_project_pb*/,
				o /*codeBlock*/,
				f /*opener*/,
				b /*editor*/,
				s /*aiProjectService*/,
				l /*hooks*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$a_b = D);
				const y = (0, t.template)("<h1>Project Spec:"),
					$ = (0, t.template)("<h1>Breakdown Steps:"),
					v = (0, t.template)("<div>"),
					S = (0, t.template)("<div><div>"),
					I = (0, t.template)("<br>"),
					T = (0, t.template)("<div><div><div><div>"),
					P = (0, t.template)("<h2>"),
					k = (0, t.template)("<p>"),
					L = (0, t.template)(
						'<div><div class="input-box-code-selection-path"><a class="link"></a></div><div class="input-box-code-selection"><div>',
					);
				function D(U) {
					const z = (0, u.$odc)(),
						F = (0, m.useContext)(r.$ygc),
						[x, H] = (0, m.createSignal)(!0),
						[q, V] = (0, m.createSignal)(!1),
						G = (0, m.createMemo)(() =>
							F.chatData.codeInterpreterTabs.find((le) => le.tabId === U.tabId),
						),
						K = (0, m.createMemo)(
							() => G()?.additionalData.aiProjectSteps ?? [],
						),
						J = (0, m.createMemo)(() => {
							const le = G()?.bubbles;
							if (le !== void 0) return [...le].reverse();
						}),
						W = (0, m.createMemo)(() => {
							const le = J();
							if (le === void 0) return;
							let oe;
							for (const ae of le) {
								if (ae.id === U.bubbleId) return oe;
								oe = ae;
							}
						}),
						X = (0, m.createMemo)(
							() => W()?.type === r.BubbleType.AI_CODE_INTERPRETER,
						),
						[Y, ie] = (0, m.createSignal)();
					(0, m.createEffect)(() => {
						const oe =
							z.reactiveStorageService.workspaceUserPersistentStorage.persistentChatMetadata.find(
								(ae) => ae.bubbleId === U.userBubbleId && ae.tabId === U.tabId,
							);
						ie(oe);
					});
					const ne = (0, m.createMemo)(() => !0);
					(0, m.createEffect)(() => {
						if (U.data.text === "") return;
						H(!1);
						const oe = setTimeout(() => {
							H(!0);
						}, 1200);
						(0, m.onCleanup)(() => {
							clearTimeout(oe);
						});
					});
					const [ee, _] = (0, m.createSignal)(0);
					(0, m.createEffect)(() => {
						U.isChatVisible && _((le) => le + 1);
					});
					const [te, Q] = (0, l.$B$b)(),
						Z = (0, m.createMemo)(() => ({
							maxTokensHit:
								z.reactiveStorageService.nonPersistentStorage.maxTokensHit,
							isLastAiBubble: U.isLastAiBubble,
						}));
					(0, m.createEffect)(() => {
						Z().maxTokensHit &&
							Z().isLastAiBubble &&
							!z.reactiveStorageService.nonPersistentStorage.continueBubbles.includes(
								U.bubbleId,
							) &&
							(z.reactiveStorageService.setNonPersistentStorage(
								"maxTokensHit",
								!1,
							),
							z.reactiveStorageService.setNonPersistentStorage(
								"continueBubbles",
								[
									...z.reactiveStorageService.nonPersistentStorage
										.continueBubbles,
									U.bubbleId,
								],
							));
					}, Z);
					const se = (0, m.createMemo)(() => {
							const le = Y()?.predictedContext?.usedCurrentFile;
							if (typeof le == "object") return (0, n.$sc)(le.relativeFilePath);
						}),
						re = () => {
							const le = Y()?.predictedContext?.usedDocs || [],
								oe = Y()?.injectedContext?.usedDocs || [],
								ae = [...le, ...oe];
							return ae.filter(
								($e, ye) => ae.findIndex((ue) => ue.docId === $e.docId) === ye,
							);
						};
					return (() => {
						const le = T(),
							oe = le.firstChild,
							ae = oe.firstChild,
							pe = ae.firstChild;
						return (
							le.style.setProperty("user-select", "text"),
							le.style.setProperty("position", "relative"),
							le.style.setProperty("padding", "0 1rem"),
							oe.style.setProperty("margin-bottom", "12px"),
							ae.style.setProperty("display", "flex"),
							ae.style.setProperty("margin-bottom", "2px"),
							pe.style.setProperty("margin", "0px 0px"),
							pe.style.setProperty("font-size", "8px"),
							pe.style.setProperty("text-transform", "uppercase"),
							pe.style.setProperty(
								"color",
								"var(--vscode-input-placeholderForeground)",
							),
							(0, E.insert)(
								le,
								(0, d.createComponent)(m.Show, {
									get when() {
										return U.data.text !== "";
									},
									get children() {
										return (0, d.createComponent)(m.Switch, {
											get children() {
												return [
													(0, d.createComponent)(m.Match, {
														get when() {
															return (
																U.data.bubbleState === c.NewProjectState.plan
															);
														},
														get children() {
															return y();
														},
													}),
													(0, d.createComponent)(m.Match, {
														get when() {
															return (
																U.data.bubbleState ===
																c.NewProjectState.breakdown
															);
														},
														get children() {
															return $();
														},
													}),
												];
											},
										});
									},
								}),
								null,
							),
							(0, E.insert)(
								le,
								(0, d.createComponent)(m.Show, {
									get when() {
										return (
											U.data.bubbleState === c.NewProjectState.steps ||
											U.data.bubbleState === c.NewProjectState.stepsFeedback
										);
									},
									get fallback() {
										return (0, d.createComponent)(a.$4$b, {
											get rawText() {
												return U.data.text;
											},
											get codeBlockProps() {
												return {
													runAsCellReceiver: F.chatData.editorContext.isNotebook
														? ($e) => z.aiService.insertCodeCellAndRun($e)
														: void 0,
													shouldRecompute: ee(),
												};
											},
											get finished() {
												return !U.isGenerating;
											},
										});
									},
									get children() {
										return (0, d.createComponent)(M, {
											get steps() {
												return K();
											},
											get data() {
												return U.data;
											},
											state: F,
											get recompute() {
												return ee();
											},
											get isGenerating() {
												return U.isGenerating;
											},
										});
									},
								}),
								null,
							),
							(0, E.insert)(
								le,
								(0, d.createComponent)(m.Show, {
									get when() {
										return (
											(0, C.memo)(() => !!(x() && U.isGenerating))() && ne()
										);
									},
									get children() {
										return (0, d.createComponent)(g.$C$b, { show: !0 });
									},
								}),
								null,
							),
							(0, E.insert)(
								le,
								(0, d.createComponent)(m.Show, {
									get when() {
										return (
											z.reactiveStorageService.nonPersistentStorage.continueBubbles.includes(
												U.bubbleId,
											) && U.isLastAiBubble
										);
									},
									get children() {
										return [
											(() => {
												const $e = v();
												return (
													$e.style.setProperty("height", "0.5rem"),
													$e.style.setProperty("width", "100%"),
													$e
												);
											})(),
											(() => {
												const $e = S(),
													ye = $e.firstChild;
												return (
													$e.style.setProperty("display", "flex"),
													$e.style.setProperty("align-items", "center"),
													$e.style.setProperty("flex-direction", "row"),
													$e.style.setProperty("justify-content", "flex-end"),
													$e.style.setProperty("gap", "0.5rem"),
													$e.style.setProperty("margin-bottom", "0.5rem"),
													ye.style.setProperty("flex-grow", "1"),
													ye.style.setProperty("display", "flex"),
													ye.style.setProperty("justify-content", "flex-start"),
													$e
												);
											})(),
										];
									},
								}),
								null,
							),
							(0, E.insert)(
								le,
								(0, d.createComponent)(m.Show, {
									get when() {
										return (0, C.memo)(() => !U.isGenerating)() && X();
									},
									get children() {
										return [
											I(),
											(0, d.createComponent)(h.$rdc, {
												style: {
													"max-width": "fit-content",
													"max-height": "fit-content",
													"margin-top": "1em",
													"margin-bottom": "1em",
												},
												onClick: () => {
													U.data.bubbleState === c.NewProjectState.steps
														? z.aiProjectService.nextStep(
																U.tabId,
																U.bubbleId,
																U.data.stepIndex + 1,
															)
														: U.data.nextBubbleState === c.NewProjectState.steps
															? z.aiProjectService.nextStep(
																	U.tabId,
																	U.bubbleId,
																	0,
																)
															: z.aiProjectService.nextStep(
																	U.tabId,
																	U.bubbleId,
																);
												},
												title: "Re-Run from here",
											}),
										];
									},
								}),
								null,
							),
							le
						);
					})();
				}
				function M(U) {
					const z = (0, u.$odc)(),
						F = (0, m.createMemo)(() => U.steps[U.data.stepIndex]);
					return [
						(0, d.createComponent)(m.Show, {
							get when() {
								return U.data.bubbleState === c.NewProjectState.steps;
							},
							get children() {
								return [
									(() => {
										const x = P();
										return (
											(0, E.insert)(x, () => `Step ${U.data.stepIndex + 1}`), x
										);
									})(),
									(() => {
										const x = k();
										return (0, E.insert)(x, () => F().description), x;
									})(),
								];
							},
						}),
						(0, d.createComponent)(m.Switch, {
							get fallback() {
								return (0, d.createComponent)(a.$4$b, {
									get rawText() {
										return U.data.text;
									},
									get codeBlockProps() {
										return {
											runAsCellReceiver: U.state.chatData.editorContext
												.isNotebook
												? (x) => z.aiService.insertCodeCellAndRun(x)
												: void 0,
											shouldRecompute: U.recompute,
										};
									},
									get finished() {
										return !U.isGenerating;
									},
								});
							},
							get children() {
								return [
									(0, d.createComponent)(m.Match, {
										get when() {
											return (
												F().stepType === p.AiProjectStepType.READ_WRITE_FILE
											);
										},
										get children() {
											return (0, d.createComponent)(
												O,
												(0, w.mergeProps)(U, {
													get currentStep() {
														return F();
													},
													get text() {
														return U.data.text;
													},
												}),
											);
										},
									}),
									(0, d.createComponent)(m.Match, {
										get when() {
											return (
												F().stepType === p.AiProjectStepType.CREATE_RM_FILES
											);
										},
										get children() {
											return (0, d.createComponent)(
												A,
												(0, w.mergeProps)(U, {
													get currentStep() {
														return F();
													},
												}),
											);
										},
									}),
								];
							},
						}),
					];
				}
				function N(U, z) {
					const F = { folders: {}, files: [] };
					U.forEach((q) => {
						let V = F;
						q.split("/").forEach((G) => {
							G !== "" &&
								(V.folders[G] || (V.folders[G] = { folders: {}, files: [] }),
								(V = V.folders[G]));
						});
					}),
						z.forEach((q) => {
							let V = F;
							const G = q.split("/");
							G.forEach((K, J) => {
								K !== "" &&
									(J === G.length - 1
										? V.files.push(K)
										: (V.folders[K] ||
												(V.folders[K] = { folders: {}, files: [] }),
											(V = V.folders[K])));
							});
						});
					const x = (q, V = 0) => {
						let G = "";
						return (
							Object.keys(q.folders).forEach((K, J, W) => {
								G += "\u2502   ".repeat(V);
								const X = x(q.folders[K], V + 1);
								X.length > 0 || J < W.length - 1 || q.files.length > 0
									? (G += "\u251C\u2500\u2500 ")
									: (G += "\u2514\u2500\u2500 "),
									(G +=
										K +
										`
`),
									(G += X);
							}),
							q.files.forEach((K, J, W) => {
								(G += "\u2502   ".repeat(V)),
									(G +=
										J < W.length - 1
											? "\u251C\u2500\u2500 "
											: "\u2514\u2500\u2500 "),
									(G +=
										K +
										`
`);
							}),
							G
						);
					};
					return "```\n" + x(F) + "```";
				}
				function A(U) {
					const z = (0, u.$odc)(),
						[F, x] = (0, m.createSignal)(""),
						H = (0, m.createMemo)(() =>
							U.currentStep.stepPayload?.type ===
							p.AiProjectStepType.CREATE_RM_FILES
								? U.currentStep.stepPayload.directories
								: [],
						),
						q = (0, m.createMemo)(() =>
							U.currentStep.stepPayload?.type ===
							p.AiProjectStepType.CREATE_RM_FILES
								? U.currentStep.stepPayload.fileNames
								: [],
						),
						V = (0, m.createMemo)(() => N(H(), q()));
					return (
						(0, m.createEffect)(() => {
							const G = N(H(), q());
							x(G);
						}),
						(0, d.createComponent)(a.$4$b, {
							get codeBlockProps() {
								return {
									runAsCellReceiver: U.state.chatData.editorContext.isNotebook
										? (G) => z.aiService.insertCodeCellAndRun(G)
										: void 0,
									shouldRecompute: U.recompute,
								};
							},
							get finished() {
								return !U.isGenerating;
							},
							get rawText() {
								return V();
							},
						})
					);
				}
				function R(U) {
					const [z, F] = (0, m.createSignal)();
					return (
						(0, m.onCleanup)(() => {
							F(U);
						}),
						z
					);
				}
				function O(U) {
					const z = (0, u.$odc)(),
						F = (0, m.createMemo)(() => {
							const V = U.currentStep.stepPayload;
							return V?.type === p.AiProjectStepType.READ_WRITE_FILE
								? V.fileName
								: "";
						}),
						x = (0, m.createMemo)(() => U.text),
						[H, q] = (0, m.createSignal)([{ type: "text", text: "" }]);
					return (
						(0, m.createEffect)((V) => {
							const G = x(),
								K = G.slice(V.length ?? 0);
							if (K.length === 0) return G;
							const J = H(),
								X = new RegExp(
									`[\\s\\S]*?${s.$rcc}([\\s\\S]*?)${s.$scc}`,
									"gm",
								).exec(K);
							if (X !== null) {
								const Y = X[1];
								return (
									q((ie) => [...ie, { type: "codeblock", fileName: Y }]),
									V + X[0]
								);
							} else {
								const Y = J[J.length - 1];
								return (
									Y.type === "text"
										? q((ie) => [
												...ie.slice(0, -1),
												{ type: "text", text: Y.text + K },
											])
										: q((ie) => [...ie, { type: "text", text: K }]),
									G
								);
							}
						}, ""),
						(0, d.createComponent)(m.For, {
							get each() {
								return H();
							},
							children: (V) =>
								(0, d.createComponent)(m.Switch, {
									get children() {
										return [
											(0, d.createComponent)(m.Match, {
												get when() {
													return V.type === "text" && V.text;
												},
												keyed: !0,
												children: (G) =>
													(0, d.createComponent)(a.$4$b, {
														rawText: G,
														get codeBlockProps() {
															return {
																runAsCellReceiver: U.state.chatData
																	.editorContext.isNotebook
																	? (K) => z.aiService.insertCodeCellAndRun(K)
																	: void 0,
																shouldRecompute: U.recompute,
															};
														},
														get finished() {
															return !U.isGenerating;
														},
													}),
											}),
											(0, d.createComponent)(m.Match, {
												get when() {
													return V.type === "codeblock" && V.fileName;
												},
												keyed: !0,
												children: (G) =>
													(0, d.createComponent)(B, { fileName: G }),
											}),
										];
									},
								}),
						})
					);
				}
				function B(U) {
					const F = (0, u.$odc)(),
						[x, H] = (0, m.createSignal)(!1),
						[q, V] = (0, m.createSignal)(0),
						[G, K] = (0, m.createSignal)(0),
						J = (() => {
							const ne = v();
							return (
								ne.style.setProperty("width", "100%"),
								ne.style.setProperty("height", "100%"),
								ne.style.setProperty("box-sizing", "border-box"),
								ne
							);
						})();
					(0, m.createEffect)(() => {
						q() > 24 ? (H(!0), K(24 * 19)) : (H(!1), K(q() * 19));
					});
					const W = !0,
						X = F.instantiationService.createInstance(
							o.$X0b,
							J,
							{ ...o.$X0b.getEditorOptions(F.configurationService) },
							{},
						),
						Y = (0, m.createMemo)(() =>
							F.workspaceContextService.resolveRelativePath(U.fileName),
						);
					(0, m.onCleanup)(() => {
						J.remove(), X.dispose();
					}),
						(0, m.createEffect)(async () => {
							const ne = await F.textModelService.createModelReference(Y()),
								ee = ne.object.textEditorModel;
							X.setModel(ee), V(ee.getFullModelRange().endLineNumber);
							const _ = ee.onDidChangeContent((te) => {
								V(ee.getFullModelRange().endLineNumber);
							});
							(0, m.onCleanup)(() => {
								ne.dispose(), _.dispose();
							});
						}),
						(0, m.createEffect)(() => {
							x()
								? (X.updateOptions({
										scrollbar: {
											vertical: "auto",
											verticalScrollbarSize: 10,
											horizontal: "auto",
											handleMouseWheel: !0,
											alwaysConsumeMouseWheel: !0,
											horizontalScrollbarSize: 10,
										},
									}),
									X.updateOptions({}))
								: (X.updateOptions({
										scrollbar: {
											vertical: "hidden",
											verticalScrollbarSize: 0,
											horizontal: "hidden",
											handleMouseWheel: !1,
											alwaysConsumeMouseWheel: !1,
											horizontalScrollbarSize: 0,
										},
									}),
									X.setScrollTop(0),
									X.setScrollLeft(0));
						});
					const ie = async (ne, ee, _) => {
						console.log("openRelevantFile", ne, _);
						let te = ne;
						_ !== void 0 &&
							(te = (0, f.$8rb)(ne, {
								startLineNumber: _.selectionStartLineNumber,
								startColumn: _.selectionStartColumn,
								endLineNumber: _.positionLineNumber,
								endColumn: _.positionColumn,
							})),
							ee.open(te, {
								openToSide: !0,
								editorOptions: {
									revealIfVisible: !0,
									revealIfOpened: !0,
									source: b.EditorOpenSource.USER,
								},
								fromUserGesture: !0,
							});
					};
					return (() => {
						const ne = L(),
							ee = ne.firstChild,
							_ = ee.firstChild,
							te = ee.nextSibling,
							Q = te.firstChild;
						return (
							ne.style.setProperty("margin-bottom", "0.5rem"),
							ee.style.setProperty("text-align", "right"),
							ee.style.setProperty("text-overflow", "ellipsis"),
							ee.style.setProperty("overflow", "hidden"),
							ee.style.setProperty("direction", "rtl"),
							_.addEventListener("click", () => {
								const Z = F.openerService;
								Z && Y && ie(Y(), Z);
							}),
							_.style.setProperty("text-decoration", "underline"),
							_.style.setProperty("white-space", "nowrap"),
							(0, E.insert)(_, () => U.fileName),
							te.style.setProperty("position", "relative"),
							te.style.setProperty(
								"border",
								"1px solid var(--vscode-editorWidget-border)",
							),
							te.style.setProperty("overflow", "hidden"),
							Q.style.setProperty("white-space", "pre"),
							Q.style.setProperty("padding", "0.75rem"),
							Q.style.setProperty("padding-bottom", "1.5rem"),
							(0, E.insert)(Q, J),
							(0, i.effect)(() =>
								`${G()}px` != null
									? Q.style.setProperty("height", `${G()}px`)
									: Q.style.removeProperty("height"),
							),
							ne
						);
					})();
				}
			},
		),
		