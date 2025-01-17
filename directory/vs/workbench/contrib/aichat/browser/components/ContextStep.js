import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/themables.js';
import '../../../../../platform/opener/common/opener.js';
import '../../../aiMarkdown/browser/markdown.js';
import '../../../ui/browser/scrollableDiv.js';
import '../../../controlCommon/browser/solid.js';
import './Utils.js';
import '../../../ui/browser/aiInput/plugins/mentions/pureIcon.js';
import '../../../../../base/common/path.js';
define(
			de[4246],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 26, 41, 338, 135, 36, 242, 156, 54]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$_$b = S);
				const f = (0, t.template)(
						'<div><div class="context-step"><span></span><div></div><div>',
					),
					b = (0, t.template)("<span>(<!> files)"),
					s = (0, t.template)("<span>"),
					l = (0, t.template)("<div>"),
					y = (0, t.template)('<div class="show-file-icons">'),
					$ = (0, t.template)(
						'<div class="hoverable fade-in-slow-forward fade-in-initial" tabindex="0"><div></div><span>:<!>-</span><span></span><div>',
					),
					v = 15;
				function S(L) {
					const [D, M] = (0, m.createSignal)(!1),
						[N, A] = (0, m.createSignal)(!1);
					(0, m.createEffect)(() => {
						N() || M(L.defaultExpanded);
					});
					const R = (0, m.createMemo)(() =>
						N()
							? D() &&
								(L.step.type === "gathering" || L.step.type === "reranking"
									? L.step.files.length > 0
									: !0)
							: L.defaultExpanded,
					);
					return (() => {
						const O = f(),
							B = O.firstChild,
							U = B.firstChild,
							z = U.nextSibling,
							F = z.nextSibling;
						return (
							B.addEventListener("click", () => {
								M((x) => !x), A(!0);
							}),
							B.style.setProperty("display", "flex"),
							B.style.setProperty("flex-direction", "row"),
							B.style.setProperty("user-select", "none"),
							B.style.setProperty("cursor", "pointer"),
							B.style.setProperty("align-items", "center"),
							U.style.setProperty("font-size", "14px"),
							U.style.setProperty("margin-right", "4px"),
							U.style.setProperty("transition", "opacity 0.1s ease-in-out"),
							z.style.setProperty("font-size", "0.8em"),
							z.style.setProperty("transition", "opacity 0.1s ease-in-out"),
							(0, E.insert)(
								z,
								() => L.step.data.title.replace(/...$/, ""),
								null,
							),
							(0, E.insert)(
								z,
								(0, C.createComponent)(m.Show, {
									get fallback() {
										return (0, d.memo)(
											() =>
												L.step.type === "gathering" ||
												L.step.type === "reranking",
										)()
											? (() => {
													const x = b(),
														H = x.firstChild,
														q = H.nextSibling,
														V = q.nextSibling;
													return (
														x.style.setProperty("margin-left", "4px"),
														x.style.setProperty("opacity", "0.5"),
														(0, E.insert)(x, () => L.step.files.length, q),
														x
													);
												})()
											: (() => {
													const x = s();
													return (
														x.style.setProperty("margin-left", "4px"),
														x.style.setProperty("opacity", "0.5"),
														(0, w.effect)(() =>
															(0, i.className)(
																x,
																u.ThemeIcon.asClassName(r.$ak.check),
															),
														),
														x
													);
												})();
									},
									get when() {
										return L.step.type === "gathering" ||
											L.step.type === "reranking"
											? L.step.files.length === 0
											: L.isStepGenerating;
									},
									get children() {
										return (0, C.createComponent)(g.$C$b, { show: !0 });
									},
								}),
								null,
							),
							F.style.setProperty("flex", "1 1 auto"),
							(0, E.insert)(
								O,
								(0, C.createComponent)(m.Show, {
									get when() {
										return R();
									},
									get children() {
										return (0, C.createComponent)(m.Switch, {
											get children() {
												return [
													(0, C.createComponent)(m.Match, {
														get when() {
															return (
																(L.step.type === "gathering" ||
																	L.step.type === "reranking") &&
																L.step
															);
														},
														children: (x) =>
															(0, C.createComponent)(T, {
																get step() {
																	return x();
																},
																get hasToggledExpanded() {
																	return N();
																},
															}),
													}),
													(0, C.createComponent)(m.Match, {
														get when() {
															return L.step.type === "reasoning" && L.step;
														},
														children: (x) =>
															(0, C.createComponent)(I, {
																get step() {
																	return x();
																},
																get hasToggledExpanded() {
																	return N();
																},
															}),
													}),
												];
											},
										});
									},
								}),
								null,
							),
							(0, w.effect)(
								(x) => {
									const H = D() ? 0.8 : 0.5,
										q = D()
											? u.ThemeIcon.asClassName(r.$ak.chevronDown)
											: u.ThemeIcon.asClassName(r.$ak.chevronRight),
										V = D() ? 0.8 : 0.5;
									return (
										H !== x._v$ &&
											((x._v$ = H) != null
												? U.style.setProperty("opacity", H)
												: U.style.removeProperty("opacity")),
										q !== x._v$2 && (0, i.className)(U, (x._v$2 = q)),
										V !== x._v$3 &&
											((x._v$3 = V) != null
												? z.style.setProperty("opacity", V)
												: z.style.removeProperty("opacity")),
										x
									);
								},
								{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
							),
							O
						);
					})();
				}
				function I(L) {
					return (() => {
						const D = l();
						return (
							D.style.setProperty("height", "300px"),
							D.style.setProperty(
								"border",
								"1px solid var(--vscode-input-border)",
							),
							D.style.setProperty("border-radius", "2px"),
							D.style.setProperty("overflow", "hidden"),
							(0, E.insert)(
								D,
								(0, C.createComponent)(c.$w0b, {
									style: { width: "100%", height: "100%", padding: "8px" },
									nonReactiveElementOptions: {
										useShadows: !1,
										verticalScrollbarSize: 6,
									},
									scrollingDirection: "vertical",
									get children() {
										return (0, C.createComponent)(m.For, {
											get each() {
												return L.step.substeps;
											},
											children: (M, N) =>
												(() => {
													const A = l();
													return (
														A.style.setProperty("padding-bottom", "10px"),
														(0, E.insert)(
															A,
															(0, C.createComponent)(h.$4$b, {
																get rawText() {
																	return M.markdownExplanation;
																},
																finished: !0,
																codeBlockProps: { shouldRecompute: 0 },
															}),
														),
														A
													);
												})(),
										});
									},
								}),
							),
							D
						);
					})();
				}
				function T(L) {
					const D = (0, n.$odc)(),
						M = (0, m.createMemo)(() =>
							[...L.step.files].sort((A, R) => R.score - A.score),
						),
						N = (A, R) => {
							const O = M()[A],
								B = D.workspaceContextService.resolveRelativePath(
									O.relativeWorkspacePath ?? "",
								),
								U = (0, a.$8rb)(B, {
									startLineNumber: O.range?.startLineNumber || 1,
									startColumn: O.range?.startColumn || 1,
									endLineNumber: O.range?.endLineNumberInclusive || 1,
									endColumn: O.range?.endColumn || 1,
								});
							D.openerService.open(U, { openToSide: R });
						};
					return (() => {
						const A = y();
						return (
							A.style.setProperty(
								"border",
								"1px solid var(--vscode-input-border)",
							),
							A.style.setProperty("border-radius", "2px"),
							A.style.setProperty("overflow", "hidden"),
							(0, E.insert)(
								A,
								(0, C.createComponent)(c.$w0b, {
									style: { width: "100%", height: "100%" },
									nonReactiveElementOptions: {
										useShadows: !1,
										verticalScrollbarSize: 6,
									},
									scrollingDirection: "vertical",
									get children() {
										return (0, C.createComponent)(m.For, {
											get each() {
												return M();
											},
											children: (R, O) =>
												(0, C.createComponent)(P, {
													get file() {
														return { type: L.step.type, file: R };
													},
													get index() {
														return O();
													},
													onClickFile: N,
												}),
										});
									},
								}),
							),
							(0, w.effect)(() =>
								`${22 * Math.min(v, M().length)}px` != null
									? A.style.setProperty(
											"height",
											`${22 * Math.min(v, M().length)}px`,
										)
									: A.style.removeProperty("height"),
							),
							A
						);
					})();
				}
				function P(L) {
					const D = (0, n.$odc)(),
						[M, N] = (0, m.createSignal)(!1),
						A = (0, m.createMemo)(() =>
							D.workspaceContextService.resolveRelativePath(
								L.file.file.relativeWorkspacePath,
							),
						),
						R = (0, m.createMemo)(() =>
							D.workspaceContextService.resolveRelativePath(
								(0, o.$rc)(L.file.file.relativeWorkspacePath),
							),
						);
					return (() => {
						const O = $(),
							B = O.firstChild,
							U = B.nextSibling,
							z = U.firstChild,
							F = z.nextSibling,
							x = F.nextSibling,
							H = U.nextSibling,
							q = H.nextSibling;
						return (
							O.addEventListener("click", (V) => {
								const G = V.metaKey || V.ctrlKey || V.altKey;
								L.onClickFile(L.index, G);
							}),
							O.style.setProperty("white-space", "nowrap"),
							O.style.setProperty("overflow", "hidden"),
							O.style.setProperty("text-overflow", "ellipsis"),
							O.style.setProperty("font-size", "0.75rem"),
							O.style.setProperty("display", "flex"),
							O.style.setProperty("align-items", "center"),
							O.style.setProperty("gap", "3px"),
							O.style.setProperty("cursor", "pointer"),
							O.style.setProperty("border-radius", "4px"),
							O.style.setProperty("padding", "2px"),
							B.style.setProperty("margin-right", "-6px"),
							(0, E.insert)(
								B,
								(0, C.createComponent)(p.$k$b, {
									get fileName() {
										return (0, o.$sc)(A().fsPath);
									},
									get languageService() {
										return D.languageService;
									},
									get modelService() {
										return D.modelService;
									},
									get workspaceContextService() {
										return D.workspaceContextService;
									},
								}),
							),
							U.style.setProperty("color", "var(--vscode-editor-foreground)"),
							(0, E.insert)(U, () => (0, o.$sc)(A().fsPath), z),
							(0, E.insert)(
								U,
								() => L.file.file.range?.startLineNumber ?? 1,
								F,
							),
							(0, E.insert)(
								U,
								() => L.file.file.range?.endLineNumberInclusive ?? 1,
								null,
							),
							H.style.setProperty(
								"color",
								"var(--vscode-input-placeholderForeground)",
							),
							H.style.setProperty("white-space", "nowrap"),
							H.style.setProperty("overflow", "hidden"),
							H.style.setProperty("text-overflow", "ellipsis"),
							H.style.setProperty("direction", "rtl"),
							(0, E.insert)(H, () => R().toString()),
							q.addEventListener("click", (V) => {
								V.stopPropagation(), N((G) => !G);
							}),
							q.style.setProperty("font-size", "10px"),
							q.style.setProperty("border-radius", "3px"),
							q.style.setProperty("padding", "0px 2px"),
							q.style.setProperty("color", "var(--vscode-input-foreground)"),
							q.style.setProperty("line-height", "120%"),
							(0, E.insert)(q, () => L.file.file.score.toFixed(2)),
							(0, E.insert)(
								O,
								(0, C.createComponent)(m.Show, {
									get when() {
										return M();
									},
									get children() {
										const V = l();
										return (
											V.style.setProperty("font-size", "10px"),
											V.style.setProperty("opacity", "0.5"),
											V.style.setProperty("padding", "0px 10px 5px 10px"),
											(0, E.insert)(
												V,
												(0, C.createComponent)(m.Switch, {
													get children() {
														return (0, C.createComponent)(m.Match, {
															get when() {
																return L.file.type === "reranking" && L.file;
															},
															children: (G) =>
																(0, d.memo)(
																	(() => {
																		const K = (0, d.memo)(
																			() => G().file.reason.length > 0,
																		);
																		return () =>
																			K()
																				? G().file.reason
																				: "(No details available.)";
																	})(),
																),
														});
													},
												}),
											),
											V
										);
									},
								}),
								null,
							),
							(0, w.effect)(
								(V) => {
									const G = `${L.index * 20}ms`,
										K = k(L.file)
											? "rgba(255, 0, 0, 0.5)"
											: "var(--vscode-input-background)";
									return (
										G !== V._v$4 &&
											((V._v$4 = G) != null
												? O.style.setProperty("animation-delay", G)
												: O.style.removeProperty("animation-delay")),
										K !== V._v$5 &&
											((V._v$5 = K) != null
												? q.style.setProperty("background-color", K)
												: q.style.removeProperty("background-color")),
										V
									);
								},
								{ _v$4: void 0, _v$5: void 0 },
							),
							O
						);
					})();
				}
				function k(L) {
					return L.type === "gathering"
						? !1
						: L.type === "reranking"
							? L.file.failed
							: !1;
				}
			},
		),
		