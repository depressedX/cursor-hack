import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/solid.js';
import '../../../contrib/ui/browser/simpleButton/simpleButton.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/labels.js';
import '../../../../platform/label/common/label.js';
import '../../../../platform/workspaces/common/workspaces.js';
import '../../../contrib/controlCommon/browser/solid.js';
import '../../actions/windowActions.js';
import '../../../contrib/extensions/common/extensions.js';
import '../../../common/views.js';
import '../../../../css!vs/workbench/browser/parts/editor/renderEditorEmptyScreen.js';
define(
			de[4223],
			he([1, 0, 2, 2, 2, 13, 147, 14, 222, 73, 256, 36, 571, 141, 60, 2347]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*solid*/,
 C /*simpleButton*/,
 d /*codicons*/,
 m /*labels*/,
 r /*label*/,
 u /*workspaces*/,
 a /*solid*/,
 h /*windowActions*/,
 c /*extensions*/,
 n /*views*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Cuc = s);
				const g = (0, t.template)(
						'<div class="on-hover-please-highlight-editor-empty-screen">More...',
					),
					p = (0, t.template)("<div><div>"),
					o = (0, t.template)("<div>"),
					f = (0, t.template)(
						'<div class="on-hover-please-highlight-editor-empty-screen"> <span>',
					),
					b = [
						"workspacesService",
						"commandService",
						"labelService",
						"hostService",
						"remoteAgentService",
						"extensionService",
						"paneCompositeService",
					];
				function s(y, $) {
					return (0, a.$ndc)(() => (0, w.createComponent)(l, {}), y, $, {
						restrictToServices: b,
					});
				}
				function l() {
					const y = (0, a.$pdc)(),
						[$, v] = (0, E.createSignal)([]);
					(0, E.onMount)(() => {
						(async () => {
							const T = await y.workspacesService.getRecentlyOpened();
							v(T.workspaces);
						})();
					});
					const S = () => y.remoteAgentService.getConnection() !== null;
					return (() => {
						const I = o();
						return (
							I.style.setProperty("display", "flex"),
							I.style.setProperty("justify-content", "center"),
							I.style.setProperty("align-items", "center"),
							I.style.setProperty("height", "100%"),
							I.style.setProperty("width", "100%"),
							I.style.setProperty("flex-direction", "column"),
							(0, i.insert)(
								I,
								(0, w.createComponent)(C.$rdc, {
									title: "Open a folder",
									type: "primary",
									get codicon() {
										return d.$ak.folder;
									},
									style: {
										"font-size": "16px",
										"padding-top": "14px",
										"padding-bottom": "14px",
										"padding-left": "23px",
										"padding-right": "23px",
										"border-radius": "6px",
										margin: "8px",
									},
									codiconStyle: { "font-size": "16px", "margin-right": "6px" },
									onClick: () => {
										y.commandService.executeCommand(
											"workbench.action.files.openFolder",
										);
									},
								}),
								null,
							),
							(0, i.insert)(
								I,
								(0, w.createComponent)(E.Show, {
									get when() {
										return !S();
									},
									get children() {
										return (0, w.createComponent)(C.$rdc, {
											title: "Open with SSH",
											type: "secondary",
											get codicon() {
												return d.$ak.terminal;
											},
											style: {
												"font-size": "16px",
												"padding-top": "14px",
												"padding-bottom": "14px",
												"padding-left": "23px",
												"padding-right": "23px",
												"border-radius": "6px",
											},
											codiconStyle: {
												"font-size": "16px",
												"margin-right": "6px",
											},
											onClick: () => {
												const T = y.extensionService,
													P = y.commandService,
													k = y.paneCompositeService;
												(async () => {
													const L = await T.getExtension(
															"ms-vscode-remote.remote-ssh",
														),
														D = await T.getExtension(
															"jeanp413.open-remote-ssh",
														);
													if (L)
														P.executeCommand(
															"opensshremotes.openEmptyWindowInCurrentWindow",
														);
													else if (D)
														P.executeCommand(
															"openremotessh.openEmptyWindowInCurrentWindow",
														);
													else
														return k
															.openPaneComposite(
																c.$LQb,
																n.ViewContainerLocation.Sidebar,
																!0,
															)
															.then((M) => {
																M &&
																	((M?.getViewPaneContainer()).search(
																		"@recommended:remotes",
																	),
																	M.focus());
															});
												})();
											},
										});
									},
								}),
								null,
							),
							(0, i.insert)(
								I,
								(0, w.createComponent)(E.Show, {
									get when() {
										return $().length > 0;
									},
									get children() {
										const T = p(),
											P = T.firstChild;
										return (
											T.style.setProperty("margin-top", "20px"),
											P.style.setProperty("display", "flex"),
											P.style.setProperty("flex-direction", "column"),
											P.style.setProperty("gap", "5px"),
											P.style.setProperty("font-size", "14px"),
											(0, i.insert)(
												P,
												(0, w.createComponent)(E.For, {
													get each() {
														return $().slice(0, 5);
													},
													children: (k, L) => {
														let D, M;
														(0, u.$eRb)(k)
															? ((M = { folderUri: k.folderUri }),
																(D =
																	k.label ||
																	y.labelService.getWorkspaceLabel(
																		k.folderUri,
																		{ verbose: r.Verbosity.LONG },
																	)))
															: ((D =
																	k.label ||
																	y.labelService.getWorkspaceLabel(
																		k.workspace,
																		{ verbose: r.Verbosity.LONG },
																	)),
																(M = { workspaceUri: k.workspace.configPath }));
														const { name: N, parentPath: A } = (0, m.$FO)(D);
														return (() => {
															const R = f(),
																O = R.firstChild,
																B = O.nextSibling;
															return (
																R.addEventListener("click", (U) => {
																	y.hostService.openWindow([M], {
																		forceNewWindow: U.ctrlKey || U.metaKey,
																		remoteAuthority: k.remoteAuthority || null,
																	}),
																		U.preventDefault(),
																		U.stopPropagation();
																}),
																R.style.setProperty("cursor", "pointer"),
																R.style.setProperty("opacity", "0.7"),
																R.style.setProperty("margin", "2px"),
																(0, i.insert)(R, N, O),
																B.style.setProperty("margin-left", "10px"),
																B.style.setProperty("opacity", "0.5"),
																(0, i.insert)(B, A),
																R
															);
														})();
													},
												}),
												null,
											),
											(0, i.insert)(
												P,
												(0, w.createComponent)(E.Show, {
													get when() {
														return $().length > 5;
													},
													get children() {
														const k = g();
														return (
															k.addEventListener("click", (L) => {
																y.commandService.executeCommand(h.$Yqc.ID);
															}),
															k.style.setProperty("cursor", "pointer"),
															k.style.setProperty("opacity", "0.7"),
															k
														);
													},
												}),
												null,
											),
											T
										);
									},
								}),
								null,
							),
							I
						);
					})();
				}
			},
		)
