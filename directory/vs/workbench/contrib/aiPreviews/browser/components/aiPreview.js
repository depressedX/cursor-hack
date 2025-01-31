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
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/themables.js';
import '../../../ui/browser/aiInput/plugins/mentions/pureIcon.js';
import '../../../controlCommon/browser/solid.js';
import '../../../../../base/common/uri.js';
import '../../../../../platform/opener/common/opener.js';
import '../../../../../base/common/platform.js';
import '../../../../../editor/contrib/aiActions/browser/aiActions.contribution.js';
import './constants.js';
import './aiPreviewRelatedFilesSection.js';
import './aiPreviewRelatedCommitsSection.js';
import './aiPreviewSummarySection.js';
import '../../../../../base/common/constants.js';
import '../../../../../css!vs/workbench/contrib/aiPreviews/browser/components/aiPreview.js';
define(
			de[4236],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 14, 26, 156, 36, 9, 41, 12, 1241, 972,
				4132, 4131, 4235, 58, 2368,
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
				r /*solid*/,
				u /*codicons*/,
				a /*themables*/,
				h /*pureIcon*/,
				c /*solid*/,
				n /*uri*/,
				g /*opener*/,
				p /*platform*/,
				o /*aiActions.contribution*/,
				f /*constants*/,
				b /*aiPreviewRelatedFilesSection*/,
				s /*aiPreviewRelatedCommitsSection*/,
				l /*aiPreviewSummarySection*/,
				y /*constants*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$fZc = L);
				const $ = (0, t.template)("<div><div></div><div>"),
					v = (0, t.template)("<div><div></div><div><span></span><span>"),
					S = (0, t.template)(
						'<div class="ai-preview-toolbar-item"> ask a question ',
					),
					I = (0, t.template)(
						'<div class="ai-preview" tabindex="-1"><div></div><div class="ai-preview-toolbar"><div><p><span></span>navigate</p><p><span>\u23CE</span>select</p><p><span></span>toggle',
					),
					T = (0, t.template)(
						"<div><div></div><div><span>Line <!>:</span><span>",
					),
					P = (0, t.template)('<div class="ai-preview-feature-toggle-menu">'),
					k = (0, t.template)(
						'<div class="ai-preview-feature-toggle-menu-item"><div></div><span>',
					);
				function L(D) {
					const M = (0, c.$odc)(),
						[N, A] = (0, r.createSignal)([]),
						[R, O] = (0, r.createSignal)(null),
						[B, U] = (0, r.createSignal)(null),
						[z, F] = (0, r.createSignal)(null);
					(0, r.createEffect)(() => {
						(async () => {
							const ee =
								await M.gitContextService.getGitLineBlameWithAbsolutePath(
									D.target.path,
									D.cursorPosition.lineNumber || 0,
									3,
								);
							if (!ee) return;
							const { commits: _ } = ee;
							A(_);
						})();
					});
					const x = (0, r.createMemo)(
							() =>
								M.reactiveStorageService.applicationUserPersistentStorage
									.aiPreviewSettings,
						),
						H = (0, r.createMemo)(() => {
							const ne = x()?.enabledFeatures;
							return Object.entries(ne ?? {}).sort(([ee], [_]) => {
								const te = f.$aZc[ee],
									Q = f.$aZc[_],
									Z = f.$_Yc.indexOf(te),
									se = f.$_Yc.indexOf(Q);
								return Z - se;
							});
						}),
						q = (ne) =>
							ne === "summary"
								? !!x()?.enabledFeatures.summary
								: ne === "related-commits"
									? !!x()?.enabledFeatures.relatedCommits
									: ne === "related-files"
										? !!x()?.enabledFeatures.relatedFiles
										: (console.warn("UNKNOWN AI PREVIEW FEATURE: ", ne), !0),
						V = (ne) =>
							M.workspaceContextService.asRelativePath(n.URI.file(ne)),
						G = (0, r.createMemo)(() => ({
							summary: q("summary"),
							"related-files": q("related-files") && D.relatedFiles.length > 0,
							"related-commits": q("related-commits") && N().length > 0,
						})),
						K = ["summary", "related-files", "related-commits"],
						J = (0, r.createMemo)(() => ({
							summary: x()?.summary?.isExpanded ?? !0,
							"related-files": x()?.relatedFiles?.isExpanded ?? !0,
							"related-commits": x()?.relatedCommits?.isExpanded ?? !0,
						})),
						W = (0, r.createMemo)(() => ({
							summary: (ne) => {
								M.reactiveStorageService.setApplicationUserPersistentStorage(
									"aiPreviewSettings",
									{
										...x(),
										summary: {
											...x()?.summary,
											isExpanded:
												ne !== void 0 ? ne : !x()?.summary?.isExpanded,
										},
									},
								);
							},
							"related-files": (ne) => {
								M.reactiveStorageService.setApplicationUserPersistentStorage(
									"aiPreviewSettings",
									{
										...x(),
										relatedFiles: {
											...x()?.relatedFiles,
											isExpanded:
												ne !== void 0 ? ne : !x()?.relatedFiles?.isExpanded,
										},
									},
								);
							},
							"related-commits": (ne) => {
								M.reactiveStorageService.setApplicationUserPersistentStorage(
									"aiPreviewSettings",
									{
										...x(),
										relatedCommits: {
											...x()?.relatedCommits,
											isExpanded:
												ne !== void 0 ? ne : !x()?.relatedCommits?.isExpanded,
										},
									},
								);
							},
						}));
					(0, r.createEffect)(() => {
						const ne = R();
						ne && !q(ne) && O(null);
					}),
						(0, r.createEffect)(() => {
							const ne = (_) => {
									const te = _.ctrlKey || _.metaKey,
										Q = (se) =>
											_.key === se &&
											!_.altKey &&
											!_.shiftKey &&
											!_.ctrlKey &&
											!_.metaKey;
									if (te && _.key === "l") {
										_.stopImmediatePropagation(),
											_.preventDefault(),
											M.commandService.executeCommand(o.$_lc);
										return;
									}
									if (_.key === "Escape") {
										_.stopImmediatePropagation(),
											_.preventDefault(),
											B()
												? U(null)
												: (M.aiPreviewService.clear(),
													M.codeEditorService.getActiveCodeEditor()?.focus());
										return;
									}
									if (_.altKey) {
										let se = "240px";
										switch (_.code) {
											case "Digit1":
												se = "240px";
												break;
											case "Digit2":
												se = "280px";
												break;
											case "Digit3":
												se = "320px";
												break;
											case "Digit4":
												se = "360px";
												break;
											case "Digit5":
												se = "400px";
												break;
											case "Digit6":
												se = "440px";
												break;
											case "Digit7":
												se = "480px";
												break;
											case "Digit8":
												se = "520px";
												break;
											case "Digit9":
												se = "560px";
												break;
										}
										const re =
											M.window.document.querySelector(".aiPreviewWidget");
										re &&
											(_.stopImmediatePropagation(),
											_.preventDefault(),
											(re.style.width = se));
										return;
									}
									const Z = f.$_Yc.filter((se) => G()[se]);
									if (!B()) {
										if (_.key === "ArrowDown" || _.key === "j") {
											_.stopImmediatePropagation(), _.preventDefault();
											const se = R();
											if (!se) O(Z[0]);
											else {
												const re = Z.indexOf(se);
												if (re === -1) return;
												if (re === Z.length - 1) {
													O(Z[0]);
													return;
												}
												O(Z[re + 1]);
											}
											return;
										} else if (_.key === "ArrowUp" || _.key === "k") {
											_.stopImmediatePropagation(), _.preventDefault();
											const se = R();
											if (!se) O(Z[Z.length - 1]);
											else {
												const re = Z.indexOf(se);
												if (re === -1) return;
												if (re === 0) {
													O(Z[Z.length - 1]);
													return;
												}
												O(Z[re - 1]);
											}
											return;
										}
										if (Q("r")) {
											_.stopImmediatePropagation(),
												_.preventDefault(),
												O("related-files");
											return;
										}
										if (Q("c")) {
											_.stopImmediatePropagation(),
												_.preventDefault(),
												O("related-commits");
											return;
										}
										if (Q("s")) {
											_.stopImmediatePropagation(),
												_.preventDefault(),
												O("summary");
											return;
										}
										if (_.key === "Enter" || _.key === " ") {
											_.stopImmediatePropagation(), _.preventDefault();
											const se = R();
											if (!se) return;
											_.ctrlKey || _.metaKey
												? W()[se]()
												: J()[se] && K.includes(se)
													? J()[se] && U(se)
													: W()[se](!0);
											return;
										}
									}
								},
								ee = (_) => {
									if (!z()) return;
									const te = Y?.querySelector(
										".ai-preview-feature-toggle-menu",
									);
									te && !te.contains(_.target) && F(null);
								};
							M.window.document.addEventListener("keydown", ne),
								M.window.document.addEventListener("mousedown", ee),
								(0, r.onCleanup)(() => {
									M.window.document.removeEventListener("keydown", ne),
										M.window.document.removeEventListener("mousedown", ee);
								});
						});
					const X =
						M.themeService.getColorTheme().type === "dark"
							? "rgba(0, 0, 0, 0.1)"
							: "rgba(255, 255, 255, 0.5)";
					let Y;
					(0, r.createEffect)(() => {
						Y && Y.focus();
					});
					const ie = (() => {
						const ne = $(),
							ee = ne.firstChild,
							_ = ee.nextSibling;
						return (
							ne.style.setProperty("display", "flex"),
							ne.style.setProperty("align-items", "center"),
							ne.style.setProperty("gap", "4px"),
							ne.style.setProperty("margin-right", "0.25rem"),
							ne.style.setProperty("margin-left", "auto"),
							ee.addEventListener("click", (te) => {
								if ((te.preventDefault(), te.stopPropagation(), z())) {
									F(null);
									return;
								}
								const Q = te.currentTarget.getBoundingClientRect();
								F({ x: Q.right + 4, y: Q.top });
							}),
							ee.style.setProperty("height", "16px"),
							ee.style.setProperty("font-size", "13px"),
							ee.style.setProperty("margin-left", "auto"),
							ee.style.setProperty("display", "flex"),
							ee.style.setProperty("align-items", "center"),
							ee.style.setProperty("justify-content", "center"),
							_.addEventListener("click", (te) => {
								te.preventDefault(),
									te.stopPropagation(),
									M.aiPreviewService.clear(),
									M.codeEditorService.getActiveCodeEditor()?.focus();
							}),
							_.style.setProperty("height", "16px"),
							_.style.setProperty("font-size", "13px"),
							_.style.setProperty("margin-left", "auto"),
							_.style.setProperty("display", "flex"),
							_.style.setProperty("align-items", "center"),
							_.style.setProperty("justify-content", "center"),
							(0, m.effect)(
								(te) => {
									const Q =
											a.ThemeIcon.asClassName(u.$ak.ellipsis) +
											" ai-preview-toolbar-item",
										Z =
											a.ThemeIcon.asClassName(u.$ak.x) +
											" ai-preview-toolbar-item";
									return (
										Q !== te._v$ && (0, d.className)(ee, (te._v$ = Q)),
										Z !== te._v$2 && (0, d.className)(_, (te._v$2 = Z)),
										te
									);
								},
								{ _v$: void 0, _v$2: void 0 },
							),
							ne
						);
					})();
					return (() => {
						const ne = I(),
							ee = ne.firstChild,
							_ = ee.nextSibling,
							te = _.firstChild,
							Q = te.firstChild,
							Z = Q.firstChild,
							se = Q.nextSibling,
							re = se.nextSibling,
							le = re.firstChild;
						return (
							(0, C.use)((oe) => (Y = oe), ne),
							(0, w.insert)(
								ne,
								(0, E.createComponent)(r.Show, {
									get when() {
										return D.word;
									},
									get fallback() {
										return (() => {
											const oe = T(),
												ae = oe.firstChild,
												pe = ae.nextSibling,
												$e = pe.firstChild,
												ye = $e.firstChild,
												ue = ye.nextSibling,
												fe = ue.nextSibling,
												me = $e.nextSibling;
											return (
												oe.addEventListener("click", () => {
													const ve =
														M.workspaceContextService.resolveRelativePath(
															D.target.path,
														);
													M.openerService.open(
														(0, g.$8rb)(ve, {
															startLineNumber: D.cursorPosition.lineNumber,
															startColumn: D.cursorPosition.column,
															endLineNumber: D.cursorPosition.lineNumber,
															endColumn: D.cursorPosition.column,
														}),
													);
												}),
												oe.style.setProperty("display", "flex"),
												oe.style.setProperty("gap", "2px"),
												oe.style.setProperty("padding", "4px"),
												X != null
													? oe.style.setProperty("background", X)
													: oe.style.removeProperty("background"),
												oe.style.setProperty(
													"border-bottom",
													"1px solid var(--vscode-input-border)",
												),
												oe.style.setProperty("overflow", "hidden"),
												oe.style.setProperty("align-items", "center"),
												oe.style.setProperty("cursor", "pointer"),
												(0, w.insert)(
													ae,
													(0, E.createComponent)(h.$k$b, {
														get fileName() {
															return D.target.fileName;
														},
														get workspaceContextService() {
															return M.workspaceContextService;
														},
														get modelService() {
															return M.modelService;
														},
														get languageService() {
															return M.languageService;
														},
													}),
												),
												pe.style.setProperty("display", "flex"),
												pe.style.setProperty("align-items", "center"),
												pe.style.setProperty("gap", "4px"),
												pe.style.setProperty("overflow", "hidden"),
												$e.style.setProperty(
													"color",
													"var(--vscode-editor-foreground)",
												),
												$e.style.setProperty("font-size", "0.8rem"),
												$e.style.setProperty("flex-shrink", "0"),
												$e.style.setProperty("display", "flex"),
												(0, w.insert)(
													$e,
													() => D.cursorPosition.lineNumber,
													ue,
												),
												(0, w.insert)($e, () => D.cursorPosition.column, null),
												me.style.setProperty(
													"color",
													"var(--vscode-input-placeholderForeground)",
												),
												me.style.setProperty("white-space", "nowrap"),
												me.style.setProperty("overflow", "hidden"),
												me.style.setProperty("text-overflow", "ellipsis"),
												me.style.setProperty("font-size", "0.6rem"),
												(0, w.insert)(me, () => V(D.target.path)),
												(0, w.insert)(oe, ie, null),
												(0, m.effect)(() =>
													(0, i.setAttribute)(oe, "title", D.target.path),
												),
												oe
											);
										})();
									},
									get children() {
										const oe = v(),
											ae = oe.firstChild,
											pe = ae.nextSibling,
											$e = pe.firstChild,
											ye = $e.nextSibling;
										return (
											oe.addEventListener("click", () => {
												const ue =
													M.workspaceContextService.resolveRelativePath(
														D.source.path,
													);
												M.openerService.open(
													(0, g.$8rb)(ue, {
														startLineNumber:
															D.source.range?.startLineNumber || 0,
														startColumn: D.source.range?.startColumn || 0,
														endLineNumber: D.source.range?.endLineNumber || 0,
														endColumn: D.source.range?.endColumn || 0,
													}),
												);
											}),
											oe.style.setProperty("display", "flex"),
											oe.style.setProperty("gap", "2px"),
											oe.style.setProperty("padding", "4px"),
											X != null
												? oe.style.setProperty("background", X)
												: oe.style.removeProperty("background"),
											oe.style.setProperty(
												"border-bottom",
												"1px solid var(--vscode-input-border)",
											),
											oe.style.setProperty("overflow", "hidden"),
											oe.style.setProperty("align-items", "center"),
											oe.style.setProperty("cursor", "pointer"),
											(0, w.insert)(
												ae,
												(0, E.createComponent)(h.$k$b, {
													get fileName() {
														return D.source.fileName;
													},
													get workspaceContextService() {
														return M.workspaceContextService;
													},
													get modelService() {
														return M.modelService;
													},
													get languageService() {
														return M.languageService;
													},
												}),
											),
											pe.style.setProperty("display", "flex"),
											pe.style.setProperty("align-items", "center"),
											pe.style.setProperty("gap", "4px"),
											pe.style.setProperty("overflow", "hidden"),
											$e.style.setProperty(
												"color",
												"var(--vscode-editor-foreground)",
											),
											$e.style.setProperty("font-size", "0.8rem"),
											(0, w.insert)($e, () => D.word),
											ye.style.setProperty(
												"color",
												"var(--vscode-input-placeholderForeground)",
											),
											ye.style.setProperty("white-space", "nowrap"),
											ye.style.setProperty("overflow", "hidden"),
											ye.style.setProperty("text-overflow", "ellipsis"),
											ye.style.setProperty("font-size", "0.6rem"),
											(0, w.insert)(ye, () => V(D.source.path)),
											(0, w.insert)(oe, ie, null),
											(0, m.effect)(() =>
												(0, i.setAttribute)(oe, "title", D.source.path),
											),
											oe
										);
									},
								}),
								ee,
							),
							(0, w.insert)(
								ne,
								(0, E.createComponent)(r.Show, {
									get when() {
										return z();
									},
									children: (oe) =>
										(() => {
											const ae = P();
											return (
												(0, w.insert)(
													ae,
													(0, E.createComponent)(r.For, {
														get each() {
															return H();
														},
														children: (pe) => {
															const [$e, ye] = pe,
																ue = f.$aZc[$e];
															return (() => {
																const fe = k(),
																	me = fe.firstChild,
																	ve = me.nextSibling;
																return (
																	fe.addEventListener("click", (ge) => {
																		ge.stopPropagation();
																		const be = Object.entries(
																			x()?.enabledFeatures ?? {},
																		).filter(([, Le]) => Le);
																		(be.length === 1 && be[0][0] === $e) ||
																			M.reactiveStorageService.setApplicationUserPersistentStorage(
																				"aiPreviewSettings",
																				"enabledFeatures",
																				$e,
																				!ye,
																			);
																	}),
																	me.style.setProperty("width", "13px"),
																	me.style.setProperty("height", "13px"),
																	me.style.setProperty("font-size", "13px"),
																	me.style.setProperty("display", "flex"),
																	me.style.setProperty("align-items", "center"),
																	me.style.setProperty(
																		"justify-content",
																		"center",
																	),
																	(ye ? "visible" : "hidden") != null
																		? me.style.setProperty(
																				"visibility",
																				ye ? "visible" : "hidden",
																			)
																		: me.style.removeProperty("visibility"),
																	ve.style.setProperty("font-size", "13px"),
																	(0, w.insert)(ve, () => f.$bZc[ue]),
																	(0, m.effect)(() =>
																		(0, d.className)(
																			me,
																			a.ThemeIcon.asClassName(u.$ak.check),
																		),
																	),
																	fe
																);
															})();
														},
													}),
												),
												(0, m.effect)(
													(pe) => {
														const $e = oe().y + "px",
															ye = oe().x + "px";
														return (
															$e !== pe._v$3 &&
																((pe._v$3 = $e) != null
																	? ae.style.setProperty("top", $e)
																	: ae.style.removeProperty("top")),
															ye !== pe._v$4 &&
																((pe._v$4 = ye) != null
																	? ae.style.setProperty("left", ye)
																	: ae.style.removeProperty("left")),
															pe
														);
													},
													{ _v$3: void 0, _v$4: void 0 },
												),
												ae
											);
										})(),
								}),
								ee,
							),
							ee.style.setProperty("padding", "2px"),
							(0, w.insert)(
								ee,
								(0, E.createComponent)(r.Show, {
									get when() {
										return (
											q("summary") &&
											!!D.realContextProto &&
											!!D.realContextProto.originalSymbolNameAndSymbolRange &&
											!!D.realContextProto.definitions &&
											D.realContextProto.definitions.length > 0
										);
									},
									get children() {
										return (0, E.createComponent)(l.$eZc, {
											get isRunning() {
												return B() === "summary";
											},
											stopRunning: () => {
												U(null);
											},
											get isSelected() {
												return R() === "summary";
											},
											get isOpen() {
												return x()?.summary?.isExpanded ?? !0;
											},
											get realContext() {
												return D.realContextProto;
											},
											setIsOpen: (oe) => {
												W().summary(oe), O(null);
											},
										});
									},
								}),
								null,
							),
							(0, w.insert)(
								ee,
								(0, E.createComponent)(r.Show, {
									get when() {
										return q("related-files");
									},
									get children() {
										return (0, E.createComponent)(b.$cZc, {
											get isSelected() {
												return R() === "related-files";
											},
											get isOpen() {
												return x()?.relatedFiles?.isExpanded ?? !0;
											},
											get isRunning() {
												return B() === "related-files";
											},
											stopRunning: () => {
												U(null);
											},
											setIsOpen: (oe) => {
												W()["related-files"](oe), O(null);
											},
											get relatedFiles() {
												return D.relatedFiles;
											},
											maxToShow: 3,
										});
									},
								}),
								null,
							),
							(0, w.insert)(
								ee,
								(0, E.createComponent)(r.Show, {
									get when() {
										return q("related-commits");
									},
									get children() {
										return (0, E.createComponent)(s.$dZc, {
											get isSelected() {
												return R() === "related-commits";
											},
											get isOpen() {
												return x()?.relatedCommits?.isExpanded ?? !0;
											},
											setIsOpen: (oe) => {
												W()["related-commits"](oe), O(null);
											},
											get isRunning() {
												return B() === "related-commits";
											},
											stopRunning: () => {
												U(null);
											},
											get relatedCommits() {
												return N();
											},
										});
									},
								}),
								null,
							),
							_.style.setProperty("display", "flex"),
							_.style.setProperty("justify-content", "space-between"),
							_.style.setProperty("gap", "4px"),
							_.style.setProperty("padding", "2px 4px"),
							X != null
								? _.style.setProperty("background", X)
								: _.style.removeProperty("background"),
							_.style.setProperty(
								"border-top",
								"1px solid var(--vscode-input-border)",
							),
							_.style.setProperty("overflow", "hidden"),
							_.style.setProperty("align-items", "center"),
							te.style.setProperty("display", "flex"),
							te.style.setProperty("gap", "4px"),
							te.style.setProperty("align-items", "center"),
							te.style.setProperty(
								"color",
								"var(--vscode-input-placeholderForeground)",
							),
							te.style.setProperty("font-size", "0.55rem"),
							Q.style.setProperty("display", "flex"),
							Q.style.setProperty("gap", "4px"),
							Q.style.setProperty("align-items", "center"),
							Q.style.setProperty("margin", "0"),
							Z.style.setProperty("transform", "rotate(90deg)"),
							Z.style.setProperty("font-size", "0.55rem"),
							se.style.setProperty("display", "flex"),
							se.style.setProperty("gap", "4px"),
							se.style.setProperty("align-items", "center"),
							se.style.setProperty("margin", "0"),
							re.style.setProperty("display", "flex"),
							re.style.setProperty("gap", "4px"),
							re.style.setProperty("align-items", "center"),
							re.style.setProperty("margin", "0"),
							(0, w.insert)(le, `${p.$m ? "\u2318" : "ctrl+"}\u23CE`),
							(0, w.insert)(
								_,
								(0, E.createComponent)(r.Show, {
									get when() {
										return D.realContextProto;
									},
									get children() {
										const oe = S(),
											ae = oe.firstChild;
										return (
											oe.addEventListener("click", () => {
												M.commandService.executeCommand(y.$nX, {
													symbolContext: D.realContextProto,
													gitCommits: N().map((pe) => ({
														sha: pe.commit,
														message: pe.message,
													})),
												});
											}),
											(0, w.insert)(oe, `${p.$m ? "\u2318" : "ctrl+"}L`, ae),
											oe
										);
									},
								}),
								null,
							),
							(0, m.effect)(() =>
								(0, d.className)(Z, a.ThemeIcon.asClassName(u.$ak.arrowSwap)),
							),
							ne
						);
					})();
				}
			},
		)
