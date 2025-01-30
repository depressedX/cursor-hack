import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/constants.js';
import '../markdownData.js';
import '../../../../services/selectedContext/browser/utils.js';
define(
			de[3616],
			he([1, 0, 2, 2, 13, 58, 236, 299]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*solid*/,
 E /*constants*/,
 C /*markdownData*/,
 d /*utils*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$a$b = void 0);
				const m = (0, t.template)('<span class="markdown-inline-code">');
				e.$a$b = {
					elementType: C.MarkdownElementType.INLINE_CODE,
					start: (r, u) => {
						if (r.length === 1) return { state: "failed" };
						const a = r[r.length - 1];
						return a.type === C.MarkdownElementType.INLINE_CODE ||
							a.type === C.MarkdownElementType.BLOCK_CODE ||
							a.type === C.MarkdownElementType.BLOCK_LATEX ||
							a.type === C.MarkdownElementType.BASH_RESPONSE
							? { state: "failed" }
							: u.startsWith("`")
								? {
										state: "success",
										length: 1,
										elementType: C.MarkdownElementType.INLINE_CODE,
										startOrEnd: "start",
									}
								: { state: "failed" };
					},
					end: (r, u) =>
						r[r.length - 1].type !== C.MarkdownElementType.INLINE_CODE
							? { state: "failed" }
							: u.startsWith("`")
								? {
										state: "success",
										length: 1,
										elementType: C.MarkdownElementType.INLINE_CODE,
										startOrEnd: "end",
									}
								: { state: "failed" },
					createElement: (r, u, a, h, c) => {
						const n = (() => {
								const o = m();
								return (
									o.style.setProperty(
										"background-color",
										"var(--vscode-textCodeBlock-background)",
									),
									o.style.setProperty("border-radius", "4px"),
									o.style.setProperty("padding", "1px 4px"),
									o.style.setProperty("word-break", "break-word"),
									(0, i.effect)(() =>
										h.configurationService.getValue("editor.fontFamily") != null
											? o.style.setProperty(
													"font-family",
													h.configurationService.getValue("editor.fontFamily"),
												)
											: o.style.removeProperty("font-family"),
									),
									o
								);
							})(),
							g = {
								type: C.MarkdownElementType.INLINE_CODE,
								ref: n,
								endElementHook: () => {
									const o = async (y) => {
											const $ = h.workspaceContextService.resolveRelativePath(
													y.relativeWorkspacePath,
												),
												v = await h.textModelService.createModelReference($),
												S = v.object.textEditorModel;
											try {
												const I = y.roughLineNumber,
													T = Math.max(1, I - 10),
													P = Math.min(S.getLineCount(), I + 10),
													k = S.getValueInRange({
														startLineNumber: T,
														startColumn: 1,
														endLineNumber: P,
														endColumn: S.getLineMaxColumn(P),
													}).split(`
`),
													L = Math.floor(k.length / 2);
												for (let D = 0; D < k.length; D++) {
													let M = L;
													if (D % 2 === 0) {
														let R = Math.floor(D / 2);
														M = Math.min(k.length - 1, M + R);
													} else {
														let R = Math.floor(D / 2);
														M = Math.max(0, M - R);
													}
													const A = k[M].indexOf(y.symbolSearchString);
													if (A !== -1)
														return {
															location: {
																uri: $,
																range: {
																	startLineNumber: T + M,
																	startColumn: A + 1,
																	endLineNumber: T + M,
																	endColumn:
																		A + y.symbolSearchString.length + 1,
																},
															},
															good: !0,
														};
												}
												return {
													location: {
														uri: $,
														range: {
															startLineNumber: I,
															startColumn: 1,
															endLineNumber: I,
															endColumn: 1,
														},
													},
													good: !1,
												};
											} catch {
											} finally {
												v.dispose();
											}
										},
										f = async (y) => {
											const $ =
												h.workspaceContextService.resolveRelativePath(y);
											if (
												(await h.fileService.exists($)) &&
												(await h.fileService.stat($)).isFile
											)
												return $;
										},
										b = (y) => {
											if (!c.symbolLinks) return !1;
											let v;
											for (const S of c.symbolLinks ?? [])
												S.symbolName === y && (v = S);
											return v
												? ((n.onclick = () => {
														o(v)
															.then(async (S) => {
																if (S) {
																	const { location: I, good: T } = S,
																		P = await h.commandService.executeCommand(
																			E.$BV,
																			I,
																			v,
																			!T,
																		);
																	P &&
																		((v.relativeWorkspacePath =
																			P.relativeWorkspacePath),
																		(v.roughLineNumber = P.roughLineNumber),
																		(v.symbolSearchString =
																			P.symbolSearchString));
																} else
																	(n.style.cursor = "default"),
																		(n.style.color = "inherit");
															})
															.catch(console.log);
													}),
													(n.style.cursor = "pointer"),
													(n.style.color = "var(--vscode-textLink-foreground)"),
													!0)
												: !1;
										},
										s = (y) => {
											if (!c.fileLinks) return !1;
											let v;
											for (const S of c.fileLinks ?? [])
												S.displayName === y && (v = S);
											return v
												? ((n.onclick = () => {
														const S =
															h.workspaceContextService.resolveRelativePath(
																v.relativeWorkspacePath,
															);
														(0, d.$9gc)(h, { filePathOrUri: S });
													}),
													(n.style.cursor = "pointer"),
													(n.style.color = "var(--vscode-textLink-foreground)"),
													!0)
												: !1;
										};
									let l = { hasFound: !1 };
									return (
										(0, w.createRoot)((y) => {
											a.push({ dispose: () => y() }),
												(0, w.createEffect)(() => {
													const $ = n.textContent ?? n.innerHTML,
														v = s($);
													if (((l.hasFound = v || l.hasFound), !v)) {
														const S = b($);
														(l.hasFound = S || l.hasFound),
															S ||
																f($)
																	.then((I) => {
																		l.hasFound ||
																			(I && n.onclick === null
																				? ((n.onclick = () =>
																						(0, d.$9gc)(h, {
																							filePathOrUri: I,
																						})),
																					(n.style.cursor = "pointer"),
																					(n.style.color =
																						"var(--vscode-textLink-foreground)"))
																				: ((n.style.cursor = "default"),
																					(n.style.color = "inherit")));
																	})
																	.catch(console.log);
													}
												});
										}),
										""
									);
								},
							};
						r[r.length - 1].ref.appendChild(n), r.push(g);
					},
				};
			},
		),
		