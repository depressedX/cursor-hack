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
import '../../../../../base/common/path.js';
import '../../../../../base/common/themables.js';
import '../../../../../platform/opener/common/opener.js';
import './PseudocodeRenderer.js';
import '../../../ui/browser/aiInput/plugins/mentions/pureIcon.js';
import '../../../ui/browser/scrollableDiv.js';
import '../../../controlCommon/browser/solid.js';
import '../../../utils/browser/copyToClipboard.js';
import '../../../../../css!vs/workbench/contrib/aiReader/browser/components/AiReaderPane.js';
define(
			de[4199],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 54, 26, 41, 4133, 156, 135, 36, 1008,
				2369,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$xZc = l);
				const f = (0, t.template)("<div>"),
					b = (0, t.template)(
						'<div><div class="reader-data-btn"><div></div><div></div></div><div class="reader-data-btn"><div></div><div>Copy',
					),
					s = (0, t.template)("<div><div><div></div><span></span><span>");
				function l() {
					const y = (0, p.$odc)(),
						[$, v] = (0, m.createSignal)(""),
						[S, I] = (0, m.createSignal)([]),
						[T, P] = (0, m.createSignal)([]),
						[k, L] = (0, m.createSignal)(""),
						[D, M] = (0, m.createSignal)("not-started"),
						[N, A] = (0, m.createSignal)(void 0),
						[R, O] = (0, m.createSignal)(!1),
						B = (0, m.createMemo)(() => y.aiReaderService.state);
					return (
						(0, m.createEffect)(() => {
							(async () => {
								const {
									relativeWorkspacePath: z,
									target: F,
									currentFileInfo: x,
								} = B();
								if ((P([]), I([]), v(""), !z || !F || !x)) return;
								M("loading-code");
								const H = await y.textModelService.createModelReference(
										y.workspaceContextService.resolveRelativePath(z),
									),
									q = H.object.textEditorModel.getLanguageId(),
									V = y.languageService.createById(q);
								A(V), H.dispose();
								const K = (
									await y.aiService.aiClient()
								).streamPseudocodeGenerator({ target: F, currentFile: x });
								let J = "",
									W = 1,
									X = 1;
								const Y = [];
								for await (const ie of K)
									try {
										(J = ie.text), L(J);
										const ee = ie.text.split(`
`),
											_ = ee[ee.length - 1],
											te = (
												_.startsWith("//\u2206:") || "//\u2206:".startsWith(_)
													? ee.slice(0, -1)
													: ee
											).filter((Z) => !Z.trim().startsWith("//\u2206:")),
											Q = te.length;
										if (_.includes("//\u2206:")) {
											const [Z, se] = _.split("//\u2206:")[1]
												.split("-")
												.map((re) => parseInt(re.trim(), 10));
											(W = Z),
												(X = se),
												console.log(
													`[AI Reader] Setting start line: ${W}, end line: ${X}`,
												);
										} else
											console.log(
												`[AI Reader] Adding selection with start line: ${W}, end line: ${X}, at current line number: ${Q}`,
											),
												Y.push({
													line: Q,
													startLineNumber: W,
													endLineNumber: X,
												}),
												I(Y);
										P(te);
									} catch {}
								P(
									J.split(`
`).filter((ie) => !ie.trim().startsWith("//\u2206:")),
								),
									I(Y),
									M("done");
							})();
						}, [B]),
						(0, C.createComponent)(m.Show, {
							get when() {
								return (
									(0, d.memo)(() => !!B().relativeWorkspacePath)() && B().target
								);
							},
							get children() {
								return (0, C.createComponent)(g.$w0b, {
									scrollingDirection: "vertical",
									style: { "flex-grow": 1, height: "100%" },
									get children() {
										const U = s(),
											z = U.firstChild,
											F = z.firstChild,
											x = F.nextSibling,
											H = x.nextSibling;
										return (
											U.style.setProperty("display", "flex"),
											U.style.setProperty("flex-direction", "column"),
											U.style.setProperty("gap", "4px"),
											z.style.setProperty("display", "flex"),
											z.style.setProperty("padding", "16px"),
											z.style.setProperty("align-items", "center"),
											z.style.setProperty("gap", "4px"),
											z.style.setProperty("overflow", "hidden"),
											z.style.setProperty("text-overflow", "ellipsis"),
											z.style.setProperty("white-space", "nowrap"),
											F.style.setProperty("margin-right", "-6px"),
											(0, E.insert)(
												F,
												(0, C.createComponent)(n.$k$b, {
													get fileName() {
														return (0, u.$sc)(B()?.relativeWorkspacePath);
													},
													get languageService() {
														return y.languageService;
													},
													get modelService() {
														return y.modelService;
													},
													get workspaceContextService() {
														return y.workspaceContextService;
													},
												}),
											),
											(0, E.insert)(x, () =>
												(0, u.$sc)(B().relativeWorkspacePath),
											),
											H.style.setProperty(
												"color",
												"var(--vscode-input-placeholderForeground)",
											),
											H.style.setProperty("overflow", "hidden"),
											H.style.setProperty("text-overflow", "ellipsis"),
											H.style.setProperty("white-space", "nowrap"),
											(0, E.insert)(H, () => B().relativeWorkspacePath),
											(0, E.insert)(
												U,
												(0, C.createComponent)(m.Show, {
													get when() {
														return (0, d.memo)(() => !!N())() && T().length > 0;
													},
													get children() {
														const q = f();
														return (
															q.style.setProperty("position", "relative"),
															(0, E.insert)(
																q,
																(0, C.createComponent)(c.$wZc, {
																	get language() {
																		return N();
																	},
																	get editable() {
																		return R();
																	},
																	get rawText() {
																		return (0, d.memo)(() => T().length > 0)()
																			? T().join(`
`)
																			: "";
																	},
																	get onCodeChange() {
																		return R()
																			? (V) => {
																					P(
																						V.split(`
`),
																					);
																				}
																			: void 0;
																	},
																	onLineClick: (V) => {
																		const G = B().target;
																		if (!G) return;
																		const J = [
																			...S(),
																			...(D() === "done"
																				? [
																						{
																							line: T().length,
																							startLineNumber:
																								G.range.endLineNumber,
																							endLineNumber:
																								G.range.endLineNumber - 1,
																						},
																					]
																				: []),
																		].find((W) => W.line === V);
																		!J ||
																			!J.startLineNumber ||
																			!J.endLineNumber ||
																			y.openerService.open(
																				(0, h.$8rb)(
																					y.workspaceContextService.resolveRelativePath(
																						B().relativeWorkspacePath,
																					),
																					{
																						startLineNumber: J.startLineNumber,
																						startColumn: 1,
																						endLineNumber: J.endLineNumber,
																						endColumn: 1e3,
																					},
																				),
																				{
																					editorOptions: {
																						pinned: !1,
																						revealIfOpened: !0,
																					},
																				},
																			);
																	},
																}),
																null,
															),
															(0, E.insert)(
																q,
																(0, C.createComponent)(c.$wZc, {
																	get language() {
																		return N();
																	},
																	get rawText() {
																		return k();
																	},
																}),
																null,
															),
															q
														);
													},
												}),
												null,
											),
											(0, E.insert)(
												U,
												(0, C.createComponent)(m.Show, {
													get when() {
														return D() === "done";
													},
													get children() {
														const q = b(),
															V = q.firstChild,
															G = V.firstChild,
															K = G.nextSibling,
															J = V.nextSibling,
															W = J.firstChild;
														return (
															q.style.setProperty("margin", "12px 16px"),
															q.style.setProperty("display", "flex"),
															q.style.setProperty(
																"justify-content",
																"flex-end",
															),
															q.style.setProperty("gap", "8px"),
															V.addEventListener("click", () => {
																O(!R());
															}),
															G.style.setProperty("font-size", "12px"),
															(0, E.insert)(K, () =>
																R() ? "Stop Editing" : "Start Editing",
															),
															J.addEventListener("click", () => {
																const X = B().target,
																	Y = B().relativeWorkspacePath,
																	ie = B().currentFileInfo;
																(0, o.$Y$b)(
																	JSON.stringify({
																		target: X,
																		relativeWorkspacePath: Y,
																		currentFileInfo: ie,
																		code: T().join(`
`),
																	}),
																);
															}),
															W.style.setProperty("font-size", "12px"),
															(0, w.effect)(
																(X) => {
																	const Y = a.ThemeIcon.asClassName(
																			R() ? r.$ak.stop : r.$ak.edit,
																		),
																		ie = a.ThemeIcon.asClassName(r.$ak.copy);
																	return (
																		Y !== X._v$ &&
																			(0, i.className)(G, (X._v$ = Y)),
																		ie !== X._v$2 &&
																			(0, i.className)(W, (X._v$2 = ie)),
																		X
																	);
																},
																{ _v$: void 0, _v$2: void 0 },
															),
															q
														);
													},
												}),
												null,
											),
											(0, E.insert)(
												U,
												(0, C.createComponent)(m.Show, {
													get when() {
														return $();
													},
													get children() {
														return (0, C.createComponent)(c.$wZc, {
															get rawText() {
																return $();
															},
															get editable() {
																return R();
															},
														});
													},
												}),
												null,
											),
											U
										);
									},
								});
							},
						})
					);
				}
			},
		),
		