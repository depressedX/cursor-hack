import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/solid.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/solidComponents/switch/switch.js';
import '../../../../base/common/path.js';
import '../../aichat/browser/components/Utils.js';
import './constants.js';
import '../../ui/browser/aiInput/plugins/mentions/pureIcon.js';
import '../../ui/browser/scrollableDiv.js';
import '../../ui/browser/simpleButton/simpleButton.js';
import '../../controlCommon/browser/solid.js';
define(
			de[4295],
			he([1, 0, 2, 2, 2, 2, 13, 7, 650, 54, 242, 1728, 156, 135, 147, 36]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*solid*/,
 d /*dom*/,
 m /*switch*/,
 r /*path*/,
 u /*Utils*/,
 a /*constants*/,
 h /*pureIcon*/,
 c /*scrollableDiv*/,
 n /*simpleButton*/,
 g /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$bDc = S);
				const p = (0, t.template)("<div>"),
					o = (0, t.template)("<div>Setting up"),
					f = (0, t.template)("<div><div>Auto-reload"),
					b = (0, t.template)("<div><div>Related Files</div><div>Base: <span>"),
					s = (0, t.template)("<div>No related files (yet)"),
					l = (0, t.template)("<div>\u2387"),
					y = (0, t.template)(
						'<div class="context-graph-clickable"><div></div><span></span><span>(<!>)</span><span>',
					),
					$ = (0, t.template)(
						"<div><div><div></div></div><div><div>Status: <span></span></div><div><div>%",
					),
					v = (0, t.template)("<div><div>DEBUG</div><pre><code>");
				function S() {
					const I = (0, g.$odc)(),
						[T, P] = (0, C.createSignal)(null),
						[k, L] = (0, C.createSignal)(!1);
					(0, C.createEffect)(() => {
						const R = (0, d.$Ogb)(),
							O = async () => {
								const U =
									await I.gitGraphService.getWorkspaceContextSyncStatus();
								P(U);
							},
							B = R.setInterval(O, 1e3);
						O(),
							(0, C.onCleanup)(() => {
								R.clearInterval(B);
							});
					});
					const D = (R) =>
							((R.successfulCommits + R.failedCommits) / R.totalCommits) * 100,
						M = (0, C.createMemo)(
							() =>
								I.reactiveStorageService.nonPersistentStorage.contextGraphState
									.relatedFiles,
						),
						N = (0, C.createMemo)(
							() =>
								I.reactiveStorageService.applicationUserPersistentStorage
									.shouldHotReloadContextGraphRelatedFiles || !1,
						);
					(0, C.createEffect)(async () => {
						if (!k() && T()) {
							if (!N()) return;
							L(!0), await I.gitGraphService.updateCurrentEditorRelatedFiles();
						}
					});
					const A = () => {
						const R = M();
						if (R) {
							const O = JSON.stringify(R, null, 2);
							I.clipboardService.writeText(O);
						}
					};
					return (() => {
						const R = p();
						return (
							R.style.setProperty("padding", "16px"),
							R.style.setProperty("display", "flex"),
							R.style.setProperty("flex-direction", "column"),
							R.style.setProperty("gap", "8px"),
							R.style.setProperty("height", "100%"),
							(0, w.insert)(
								R,
								(0, E.createComponent)(C.Show, {
									get when() {
										return T();
									},
									get fallback() {
										return (() => {
											const O = o(),
												B = O.firstChild;
											return (
												O.style.setProperty("opacity", "0.6"),
												(0, w.insert)(
													O,
													(0, E.createComponent)(u.$C$b, { show: !0 }),
													null,
												),
												O
											);
										})();
									},
									children: (O) => [
										(() => {
											const B = p();
											return (
												B.style.setProperty("display", "flex"),
												B.style.setProperty("gap", "4px"),
												B.style.setProperty("align-items", "center"),
												(0, w.insert)(
													B,
													(0, E.createComponent)(n.$rdc, {
														onClick: () => {
															(async () => {
																const F = (
																	I.codeEditorService.getFocusedCodeEditor() ||
																	I.codeEditorService.getActiveCodeEditor()
																)?.getModel();
																if (!F) {
																	console.error(
																		"[context graph] workspaceId or model not found",
																	);
																	return;
																}
																const x =
																	await I.gitGraphService.getRelatedFiles({
																		uri: F.uri,
																		maxNumFiles: a.$aEb,
																	});
																I.reactiveStorageService.setNonPersistentStorage(
																	"contextGraphState",
																	"relatedFiles",
																	{
																		baseRelativePath:
																			I.workspaceContextService.asRelativePath(
																				F.uri,
																			),
																		nodes: x
																			.slice(0, a.$aEb)
																			.map((H) => ({
																				relativePath:
																					I.workspaceContextService.asRelativePath(
																						H.uri,
																					),
																				weight: H.weight,
																			})),
																	},
																);
															})();
														},
														title: "Get Related Files",
														type: "tertiary",
													}),
												),
												B
											);
										})(),
										(() => {
											const B = f(),
												U = B.firstChild,
												z = U.firstChild;
											return (
												B.style.setProperty("display", "flex"),
												B.style.setProperty("gap", "4px"),
												B.style.setProperty("align-items", "center"),
												(0, w.insert)(
													B,
													(0, E.createComponent)(C.Show, {
														get when() {
															return M();
														},
														get children() {
															return [
																(0, E.createComponent)(n.$rdc, {
																	onClick: () => {
																		I.reactiveStorageService.setNonPersistentStorage(
																			"contextGraphState",
																			"relatedFiles",
																			null,
																		);
																	},
																	title: "Clear",
																	type: "tertiary",
																}),
																(0, E.createComponent)(n.$rdc, {
																	onClick: A,
																	title: "Copy as JSON",
																	type: "tertiary",
																}),
															];
														},
													}),
													U,
												),
												U.style.setProperty("margin-left", "4px"),
												U.style.setProperty("display", "flex"),
												U.style.setProperty("align-items", "center"),
												U.style.setProperty("gap", "4px"),
												(0, w.insert)(
													U,
													(0, E.createComponent)(m.$dob, {
														get value() {
															return N();
														},
														onToggle: () => {
															I.reactiveStorageService.setApplicationUserPersistentStorage(
																"shouldHotReloadContextGraphRelatedFiles",
																!I.reactiveStorageService
																	.applicationUserPersistentStorage
																	.shouldHotReloadContextGraphRelatedFiles,
															);
														},
													}),
													z,
												),
												B
											);
										})(),
										(0, E.createComponent)(C.Show, {
											get when() {
												return M();
											},
											children: (B) =>
												(() => {
													const U = b(),
														z = U.firstChild,
														F = z.nextSibling,
														x = F.firstChild,
														H = x.nextSibling;
													return (
														U.style.setProperty("display", "flex"),
														U.style.setProperty("flex-direction", "column"),
														U.style.setProperty("gap", "4px"),
														U.style.setProperty("padding", "2px 0px"),
														z.style.setProperty("font-weight", "500"),
														z.style.setProperty("text-transform", "uppercase"),
														z.style.setProperty(
															"color",
															"var(--vscode-editor-foreground)",
														),
														F.style.setProperty(
															"border-left",
															"3px solid var(--vscode-input-placeholderForeground)",
														),
														F.style.setProperty(
															"color",
															"var(--vscode-input-placeholderForeground)",
														),
														F.style.setProperty("padding", "0px 4px"),
														F.style.setProperty("font-size", "0.85rem"),
														F.style.setProperty("overflow", "hidden"),
														F.style.setProperty("white-space", "nowrap"),
														H.style.setProperty("direction", "rtl"),
														H.style.setProperty("text-overflow", "ellipsis"),
														H.style.setProperty("overflow", "hidden"),
														H.style.setProperty("white-space", "nowrap"),
														(0, w.insert)(H, () => B().baseRelativePath),
														(0, w.insert)(
															U,
															(0, E.createComponent)(C.For, {
																get each() {
																	return B().nodes;
																},
																get fallback() {
																	return (() => {
																		const q = s();
																		return (
																			q.style.setProperty("opacity", "0.6"), q
																		);
																	})();
																},
																children: (q, V) =>
																	(() => {
																		const G = y(),
																			K = G.firstChild,
																			J = K.nextSibling,
																			W = J.nextSibling,
																			X = W.firstChild,
																			Y = X.nextSibling,
																			ie = Y.nextSibling,
																			ne = W.nextSibling;
																		return (
																			G.addEventListener("click", () => {
																				I.openerService.open(
																					I.workspaceContextService.resolveRelativePath(
																						q.relativePath,
																					),
																					{
																						openToSide: !1,
																						editorOptions: {
																							revealIfOpened: !0,
																						},
																					},
																				);
																			}),
																			G.style.setProperty(
																				"white-space",
																				"nowrap",
																			),
																			G.style.setProperty("overflow", "hidden"),
																			G.style.setProperty(
																				"text-overflow",
																				"ellipsis",
																			),
																			G.style.setProperty(
																				"font-size",
																				"0.85rem",
																			),
																			G.style.setProperty("display", "flex"),
																			G.style.setProperty(
																				"align-items",
																				"center",
																			),
																			G.style.setProperty("gap", "3px"),
																			G.style.setProperty("cursor", "pointer"),
																			G.style.setProperty(
																				"border-radius",
																				"4px",
																			),
																			K.style.setProperty(
																				"margin-right",
																				"-6px",
																			),
																			(0, w.insert)(
																				K,
																				(0, E.createComponent)(h.$k$b, {
																					get fileName() {
																						return (0, r.$sc)(q.relativePath);
																					},
																					get languageService() {
																						return I.languageService;
																					},
																					get modelService() {
																						return I.modelService;
																					},
																					get workspaceContextService() {
																						return I.workspaceContextService;
																					},
																				}),
																			),
																			J.style.setProperty(
																				"color",
																				"var(--vscode-editor-foreground)",
																			),
																			(0, w.insert)(J, () =>
																				(0, r.$sc)(q.relativePath),
																			),
																			(0, w.insert)(
																				G,
																				(0, E.createComponent)(C.Show, {
																					get when() {
																						return V() < a.$_Db;
																					},
																					get children() {
																						const ee = l(),
																							_ = ee.firstChild;
																						return (
																							ee.style.setProperty(
																								"color",
																								"var(--vscode-editorWarning-foreground)",
																							),
																							(0, w.insert)(
																								ee,
																								() => V() + 1,
																								null,
																							),
																							ee
																						);
																					},
																				}),
																				W,
																			),
																			W.style.setProperty(
																				"color",
																				"var(--vscode-input-placeholderForeground)",
																			),
																			W.style.setProperty(
																				"white-space",
																				"nowrap",
																			),
																			(0, w.insert)(
																				W,
																				() =>
																					(
																						Math.round(q.weight * 1e3) / 1e3
																					).toFixed(3),
																				Y,
																			),
																			ne.style.setProperty(
																				"color",
																				"var(--vscode-input-placeholderForeground)",
																			),
																			ne.style.setProperty(
																				"white-space",
																				"nowrap",
																			),
																			ne.style.setProperty(
																				"overflow",
																				"hidden",
																			),
																			ne.style.setProperty(
																				"text-overflow",
																				"ellipsis",
																			),
																			ne.style.setProperty("direction", "rtl"),
																			(0, w.insert)(ne, () => q.relativePath),
																			G
																		);
																	})(),
															}),
															null,
														),
														U
													);
												})(),
										}),
										(0, E.createComponent)(C.For, {
											get each() {
												return O();
											},
											children: (B) => [
												(() => {
													const U = $(),
														z = U.firstChild,
														F = z.firstChild,
														x = z.nextSibling,
														H = x.firstChild,
														q = H.firstChild,
														V = q.nextSibling,
														G = H.nextSibling,
														K = G.firstChild,
														J = K.firstChild;
													return (
														U.style.setProperty("display", "flex"),
														U.style.setProperty("flex-direction", "column"),
														U.style.setProperty("gap", "4px"),
														z.style.setProperty("height", "16px"),
														z.style.setProperty("width", "100%"),
														z.style.setProperty(
															"background",
															"var(--vscode-button-secondaryBackground)",
														),
														z.style.setProperty("border-radius", "4px"),
														z.style.setProperty("overflow", "hidden"),
														F.style.setProperty("height", "100%"),
														F.style.setProperty(
															"background",
															"var(--vscode-progressBar-background)",
														),
														x.style.setProperty("display", "flex"),
														x.style.setProperty("align-items", "center"),
														x.style.setProperty(
															"justify-content",
															"space-between",
														),
														(0, w.insert)(V, () => B.status),
														G.style.setProperty("display", "flex"),
														G.style.setProperty("align-items", "center"),
														G.style.setProperty("gap", "4px"),
														(0, w.insert)(
															G,
															(0, E.createComponent)(C.Show, {
																get when() {
																	return B.status === "loading";
																},
																get children() {
																	return (0, E.createComponent)(u.$C$b, {
																		show: !0,
																	});
																},
															}),
															K,
														),
														(0, w.insert)(
															K,
															() =>
																Math.min(
																	((B.successfulCommits + B.failedCommits) /
																		B.totalCommits) *
																		100,
																	100,
																).toFixed(2),
															J,
														),
														(0, i.effect)(
															(W) => {
																const X = `${D(B)}%`,
																	Y =
																		B.status === "loading"
																			? "var(--vscode-editorWarning-foreground)"
																			: B.status === "error"
																				? "var(--vscode-editorError-foreground)"
																				: "var(--vscode-charts-green)";
																return (
																	X !== W._v$ &&
																		((W._v$ = X) != null
																			? F.style.setProperty("width", X)
																			: F.style.removeProperty("width")),
																	Y !== W._v$2 &&
																		((W._v$2 = Y) != null
																			? V.style.setProperty("color", Y)
																			: V.style.removeProperty("color")),
																	W
																);
															},
															{ _v$: void 0, _v$2: void 0 },
														),
														U
													);
												})(),
												(() => {
													const U = p();
													return (
														U.style.setProperty("flex", "1"),
														U.style.setProperty("height", "100%"),
														(0, w.insert)(
															U,
															(0, E.createComponent)(c.$w0b, {
																scrollingDirection: "vertical",
																style: { height: "100%", width: "100%" },
																innerContainerStyle: {
																	display: "flex",
																	"flex-direction": "column",
																	gap: "6px",
																	"padding-bottom": "50px",
																},
																get children() {
																	const z = v(),
																		F = z.firstChild,
																		x = F.nextSibling,
																		H = x.firstChild;
																	return (
																		z.style.setProperty("display", "flex"),
																		z.style.setProperty(
																			"flex-direction",
																			"column",
																		),
																		z.style.setProperty("gap", "2px"),
																		F.style.setProperty("font-weight", "500"),
																		F.style.setProperty(
																			"text-transform",
																			"uppercase",
																		),
																		F.style.setProperty(
																			"color",
																			"var(--vscode-editor-foreground)",
																		),
																		x.style.setProperty(
																			"white-space",
																			"pre-wrap",
																		),
																		x.style.setProperty(
																			"word-wrap",
																			"break-word",
																		),
																		x.style.setProperty("margin", "0px"),
																		x.style.setProperty(
																			"margin-bottom",
																			"65px",
																		),
																		x.style.setProperty("user-select", "text"),
																		x.style.setProperty(
																			"-webkit-user-select",
																			"text",
																		),
																		x.style.setProperty(
																			"-moz-user-select",
																			"text",
																		),
																		x.style.setProperty(
																			"-ms-user-select",
																			"text",
																		),
																		(0, w.insert)(H, () =>
																			JSON.stringify(B, null, 2),
																		),
																		z
																	);
																},
															}),
														),
														U
													);
												})(),
											],
										}),
									],
								}),
							),
							R
						);
					})();
				}
			},
		),
		