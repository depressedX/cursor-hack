import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/browser/dom.js';
import '../../../../../../base/common/arrays.js';
import '../../../../../../base/common/async.js';
import '../../../../../../base/common/buffer.js';
import '../../../../../../base/common/event.js';
import '../../../../../../base/common/mime.js';
import '../../../../../../base/common/network.js';
import '../../../../../../base/common/objects.js';
import '../../../../../../base/common/path.js';
import '../../../../../../base/common/platform.js';
import '../../../../../../base/common/resources.js';
import '../../../../../../base/common/uri.js';
import '../../../../../../base/common/uuid.js';
import '../../../../../../editor/common/languages.js';
import '../../../../../../editor/common/languages/language.js';
import '../../../../../../editor/common/languages/supports/tokenization.js';
import '../../../../../../editor/common/languages/textToHtmlTokenizer.js';
import '../../../../../../nls.js';
import '../../../../../../platform/actions/common/actions.js';
import '../../../../../../platform/configuration/common/configuration.js';
import '../../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../../platform/contextview/browser/contextView.js';
import '../../../../../../platform/dialogs/common/dialogs.js';
import '../../../../../../platform/files/common/files.js';
import '../../../../../../platform/opener/common/opener.js';
import '../../../../../../platform/storage/common/storage.js';
import '../../../../../../platform/telemetry/common/telemetry.js';
import '../../../../../../platform/theme/common/colorRegistry.js';
import '../../../../../../platform/theme/common/themeService.js';
import '../../../../../../platform/workspace/common/workspace.js';
import '../../../../../../platform/workspace/common/workspaceTrust.js';
import '../../notebookBrowser.js';
import '../notebookCellList.js';
import './webviewPreloads.js';
import './webviewThemeMapping.js';
import '../../viewModel/markupCellViewModel.js';
import '../../../common/notebookCommon.js';
import '../../../common/notebookLoggingService.js';
import '../../../common/notebookService.js';
import '../../../../webview/browser/webview.js';
import '../../../../webview/browser/webviewWindowDragMonitor.js';
import '../../../../webview/common/webview.js';
import '../../../../../services/editor/common/editorGroupsService.js';
import '../../../../../services/environment/common/environmentService.js';
import '../../../../../services/path/common/pathService.js';
define(
			de[1963],
			he([
				1, 0, 7, 24, 15, 76, 6, 266, 23, 82, 54, 12, 19, 9, 47, 74, 61, 913,
				597, 4, 11, 10, 8, 49, 57, 22, 41, 21, 32, 51, 35, 25, 174, 108, 1962,
				3103, 3104, 855, 70, 557, 161, 355, 1274, 1784, 66, 78, 165,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*arrays*/,
				w /*async*/,
				E /*buffer*/,
				C /*event*/,
				d /*mime*/,
				m /*network*/,
				r /*objects*/,
				u /*path*/,
				a /*platform*/,
				h /*resources*/,
				c /*uri*/,
				n /*uuid*/,
				g /*languages*/,
				p /*language*/,
				o /*tokenization*/,
				f /*textToHtmlTokenizer*/,
				b /*nls*/,
				s /*actions*/,
				l /*configuration*/,
				y /*contextkey*/,
				$ /*contextView*/,
				v /*dialogs*/,
				S /*files*/,
				I /*opener*/,
				T /*storage*/,
				P /*telemetry*/,
				k /*colorRegistry*/,
				L /*themeService*/,
				D /*workspace*/,
				M /*workspaceTrust*/,
				N /*notebookBrowser*/,
				A /*notebookCellList*/,
				R /*webviewPreloads*/,
				O /*webviewThemeMapping*/,
				B /*markupCellViewModel*/,
				U /*notebookCommon*/,
				z /*notebookLoggingService*/,
				F /*notebookService*/,
				x /*webview*/,
				H /*webviewWindowDragMonitor*/,
				q /*webview*/,
				V /*editorGroupsService*/,
				G /*environmentService*/,
				K /*pathService*/,
) {
				"use strict";
				var J;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$X2b = void 0),
					(u = mt(u)),
					(n = mt(n)),
					(b = mt(b));
				const W = /:([\d]+)(?::([\d]+))?$/,
					X = /line=(\d+)$/,
					Y = /^(.*)#([^#]*)$/;
				let ie = class extends L.$pP {
					static {
						J = this;
					}
					static b(Q) {
						return (
							(this.a ??= new x.$5Ib("notebook.backlayerWebview.origins", Q)),
							this.a
						);
					}
					constructor(
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
						be,
						Ce,
						Le,
						Fe,
						Oe,
						xe,
						He,
						Ke,
						Je,
						Te,
					) {
						super(Je),
							(this.notebookEditor = Q),
							(this.F = Z),
							(this.notebookViewType = se),
							(this.documentUri = re),
							(this.G = le),
							(this.H = oe),
							(this.I = ae),
							(this.J = pe),
							(this.L = $e),
							(this.M = ye),
							(this.N = ue),
							(this.O = fe),
							(this.P = me),
							(this.Q = ve),
							(this.R = ge),
							(this.S = be),
							(this.U = Ce),
							(this.W = Le),
							(this.X = Fe),
							(this.Y = Oe),
							(this.Z = xe),
							(this.$ = He),
							(this.ab = Ke),
							(this.bb = Te),
							(this.webview = void 0),
							(this.insetMapping = new Map()),
							(this.pendingWebviewIdleCreationRequest = new Map()),
							(this.pendingWebviewIdleInsetMapping = new Map()),
							(this.c = new Map()),
							(this.markupPreviewMapping = new Map()),
							(this.f = new Set()),
							(this.g = new Map()),
							(this.j = void 0),
							(this.m = this.D(new C.$re())),
							(this.r = new Set()),
							(this.onMessage = this.m.event),
							(this.s = !1),
							(this.u = !0),
							(this.C = n.$9g()),
							this.cb("Creating backlayer webview for notebook"),
							(this.element = document.createElement("div")),
							(this.element.style.height = "1400px"),
							(this.element.style.position = "absolute"),
							oe &&
								(this.D(oe),
								(oe.receiveMessageHandler = (Ee, Ie) =>
									!this.webview || this.s
										? Promise.resolve(!1)
										: (this.Eb({
												__vscode_notebook_message: !0,
												type: "customRendererMessage",
												rendererId: Ee,
												message: Ie,
											}),
											Promise.resolve(!0)))),
							this.D(
								be.onDidChangeTrust((Ee) => {
									const Ie = this.jb(this.lb(), void 0),
										Be = this.gb(Ie.toString());
									this.webview?.setHtml(Be);
								}),
							),
							this.D(
								g.$lM.onDidChange(() => {
									this.Eb({ type: "tokenizedStylesChanged", css: ee() });
								}),
							);
					}
					updateOptions(Q) {
						(this.G = Q), this.db(), this.eb();
					}
					cb(Q) {
						this.ab.debug(
							"BacklayerWebview",
							`${this.documentUri} (${this.F}) - ${Q}`,
						);
					}
					db() {
						this.Eb({ type: "notebookStyles", styles: this.fb() });
					}
					eb() {
						this.Eb({
							type: "notebookOptions",
							options: { dragAndDropEnabled: this.G.dragAndDropEnabled },
							renderOptions: {
								lineLimit: this.G.outputLineLimit,
								outputScrolling: this.G.outputScrolling,
								outputWordWrap: this.G.outputWordWrap,
								linkifyFilePaths: this.G.outputLinkifyFilePaths,
								minimalError: this.G.minimalError,
							},
						});
					}
					fb() {
						return {
							"notebook-output-left-margin": `${this.G.leftMargin + this.G.runGutter}px`,
							"notebook-output-width": `calc(100% - ${this.G.leftMargin + this.G.rightMargin + this.G.runGutter}px)`,
							"notebook-output-node-padding": `${this.G.outputNodePadding}px`,
							"notebook-run-gutter": `${this.G.runGutter}px`,
							"notebook-preview-node-padding": `${this.G.previewNodePadding}px`,
							"notebook-markdown-left-margin": `${this.G.markdownLeftMargin}px`,
							"notebook-output-node-left-padding": `${this.G.outputNodeLeftPadding}px`,
							"notebook-markdown-min-height": `${this.G.previewNodePadding * 2}px`,
							"notebook-markup-font-size":
								typeof this.G.markupFontSize == "number" &&
								this.G.markupFontSize > 0
									? `${this.G.markupFontSize}px`
									: `calc(${this.G.fontSize}px * 1.2)`,
							"notebook-markdown-line-height":
								typeof this.G.markdownLineHeight == "number" &&
								this.G.markdownLineHeight > 0
									? `${this.G.markdownLineHeight}px`
									: "normal",
							"notebook-cell-output-font-size": `${this.G.outputFontSize || this.G.fontSize}px`,
							"notebook-cell-output-line-height": `${this.G.outputLineHeight}px`,
							"notebook-cell-output-max-height": `${this.G.outputLineHeight * this.G.outputLineLimit + 2}px`,
							"notebook-cell-output-font-family":
								this.G.outputFontFamily || this.G.fontFamily,
							"notebook-cell-markup-empty-content": b.localize(8210, null),
							"notebook-cell-renderer-not-found-error": b.localize(8211, null),
							"notebook-cell-renderer-fallbacks-exhausted": b.localize(
								8212,
								null,
							),
						};
					}
					gb(Q) {
						const Z = this.hb(),
							se = this.ib(),
							re = {
								lineLimit: this.G.outputLineLimit,
								outputScrolling: this.G.outputScrolling,
								outputWordWrap: this.G.outputWordWrap,
								linkifyFilePaths: this.G.outputLinkifyFilePaths,
								minimalError: this.G.minimalError,
							},
							le = (0, R.$N2b)(
								{ ...this.G, tokenizationCss: ee() },
								{ dragAndDropEnabled: this.G.dragAndDropEnabled },
								re,
								Z,
								se,
								this.S.isWorkspaceTrusted(),
								this.C,
							),
							oe = this.U.getValue("notebook.experimental.enableCsp"),
							ae = this.w(k.$wQ),
							pe = this.w(k.$yQ);
						return `
		<html lang="en">
			<head>
				<meta charset="UTF-8">
				<base href="${Q}/" />
				${
					oe
						? `<meta http-equiv="Content-Security-Policy" content="
					default-src 'none';
					script-src ${q.$U2b} 'unsafe-inline' 'unsafe-eval';
					style-src ${q.$U2b} 'unsafe-inline';
					img-src ${q.$U2b} https: http: data:;
					font-src ${q.$U2b} https:;
					connect-src https:;
					child-src https: data:;
				">`
						: ""
				}
				<style nonce="${this.C}">
					::highlight(find-highlight) {
						background-color: var(--vscode-editor-findMatchBackground, ${pe});
					}

					::highlight(current-find-highlight) {
						background-color: var(--vscode-editor-findMatchHighlightBackground, ${ae});
					}

					#container .cell_container {
						width: 100%;
					}

					#container .output_container {
						width: 100%;
					}

					#container > div > div > div.output {
						font-size: var(--notebook-cell-output-font-size);
						width: var(--notebook-output-width);
						margin-left: var(--notebook-output-left-margin);
						background-color: var(--theme-notebook-output-background);
						padding-top: var(--notebook-output-node-padding);
						padding-right: var(--notebook-output-node-padding);
						padding-bottom: var(--notebook-output-node-padding);
						padding-left: var(--notebook-output-node-left-padding);
						box-sizing: border-box;
						border-top: none;
					}

					/* markdown */
					#container div.preview {
						width: 100%;
						padding-right: var(--notebook-preview-node-padding);
						padding-left: var(--notebook-markdown-left-margin);
						padding-top: var(--notebook-preview-node-padding);
						padding-bottom: var(--notebook-preview-node-padding);

						box-sizing: border-box;
						white-space: nowrap;
						overflow: hidden;
						white-space: initial;

						font-size: var(--notebook-markup-font-size);
						line-height: var(--notebook-markdown-line-height);
						color: var(--theme-ui-foreground);
					}

					#container div.preview.draggable {
						user-select: none;
						-webkit-user-select: none;
						-ms-user-select: none;
						cursor: grab;
					}

					#container div.preview.selected {
						background: var(--theme-notebook-cell-selected-background);
					}

					#container div.preview.dragging {
						background-color: var(--theme-background);
						opacity: 0.5 !important;
					}

					.monaco-workbench.vs-dark .notebookOverlay .cell.markdown .latex img,
					.monaco-workbench.vs-dark .notebookOverlay .cell.markdown .latex-block img {
						filter: brightness(0) invert(1)
					}

					#container .markup > div.nb-symbolHighlight {
						background-color: var(--theme-notebook-symbol-highlight-background);
					}

					#container .nb-symbolHighlight .output_container .output {
						background-color: var(--theme-notebook-symbol-highlight-background);
					}

					#container .markup > div.nb-multiCellHighlight {
						background-color: var(--theme-notebook-symbol-highlight-background);
					}

					#container .nb-multiCellHighlight .output_container .output {
						background-color: var(--theme-notebook-symbol-highlight-background);
					}

					#container .nb-chatGenerationHighlight .output_container .output {
						background-color: var(--vscode-notebook-selectedCellBackground);
					}

					#container > div.nb-cellDeleted .output_container {
						background-color: var(--theme-notebook-diff-removed-background);
					}

					#container > div.nb-cellAdded .output_container {
						background-color: var(--theme-notebook-diff-inserted-background);
					}

					#container > div > div:not(.preview) > div {
						overflow-x: auto;
					}

					#container .no-renderer-error {
						color: var(--vscode-editorError-foreground);
					}

					body {
						padding: 0px;
						height: 100%;
						width: 100%;
					}

					table, thead, tr, th, td, tbody {
						border: none;
						border-color: transparent;
						border-spacing: 0;
						border-collapse: collapse;
					}

					table, th, tr {
						vertical-align: middle;
						text-align: right;
					}

					thead {
						font-weight: bold;
						background-color: rgba(130, 130, 130, 0.16);
					}

					th, td {
						padding: 4px 8px;
					}

					tr:nth-child(even) {
						background-color: rgba(130, 130, 130, 0.08);
					}

					tbody th {
						font-weight: normal;
					}

					.find-match {
						background-color: var(--vscode-editor-findMatchHighlightBackground);
					}

					.current-find-match {
						background-color: var(--vscode-editor-findMatchBackground);
					}

					#_defaultColorPalatte {
						color: var(--vscode-editor-findMatchHighlightBackground);
						background-color: var(--vscode-editor-findMatchBackground);
					}
				</style>
			</head>
			<body style="overflow: hidden;">
				<div id='findStart' tabIndex=-1></div>
				<div id='container' class="widgetarea" style="position: absolute;width:100%;top: 0px"></div>
				<div id="_defaultColorPalatte"></div>
				<script type="module">${le}</script>
			</body>
		</html>`;
					}
					hb() {
						return this.L.getRenderers().map((Q) => {
							const Z = {
								extends: Q.entrypoint.extends,
								path: this.jb(
									Q.entrypoint.path,
									Q.extensionLocation,
								).toString(),
							};
							return {
								id: Q.id,
								entrypoint: Z,
								mimeTypes: Q.mimeTypes,
								messaging: Q.messaging !== U.RendererMessagingSpec.Never,
								isBuiltin: Q.isBuiltin,
							};
						});
					}
					ib() {
						return Array.from(
							this.L.getStaticPreloads(this.notebookViewType),
							(Q) => ({
								entrypoint: this.jb(Q.entrypoint, Q.extensionLocation)
									.toString()
									.toString(),
							}),
						);
					}
					jb(Q, Z) {
						return (0, q.$V2b)(
							Q,
							Z?.scheme === m.Schemas.vscodeRemote
								? { isRemote: !0, authority: Z.authority }
								: void 0,
						);
					}
					postKernelMessage(Q) {
						this.Eb({
							__vscode_notebook_message: !0,
							type: "customKernelMessage",
							message: Q,
						});
					}
					kb(Q) {
						const Z = this.g.get(Q);
						return Z
							? { cellInfo: this.insetMapping.get(Z).cellInfo, output: Z }
							: void 0;
					}
					isResolved() {
						return !!this.webview;
					}
					createWebview(Q) {
						const Z = this.jb(this.lb(), void 0),
							se = this.gb(Z.toString());
						return this.nb(se, Q);
					}
					lb() {
						if (this.documentUri.scheme === m.Schemas.untitled) {
							const Q = this.X.getWorkspaceFolder(this.documentUri);
							if (Q) return Q.uri;
							const Z = this.X.getWorkspace().folders;
							if (Z.length) return Z[0].uri;
						}
						return (0, h.$mh)(this.documentUri);
					}
					mb() {
						return this.documentUri.path.toLowerCase().endsWith(".ipynb")
							? a.$r
								? []
								: [(0, h.$mh)(m.$7g.asFileUri("vs/loader.js"))]
							: [];
					}
					nb(Q, Z) {
						if (
							!(0, t.getWindow)(this.element).document.body.contains(
								this.element,
							)
						)
							throw new Error("Element is already detached from the DOM tree");
						(this.webview = this.ub(this.I, Q)),
							this.webview.mountTo(this.element, Z),
							this.D(this.webview),
							this.D(new H.$R2b(Z, () => this.webview));
						const se = new w.$0h();
						return (
							this.D(
								this.webview.onFatalError((re) => {
									se.error(
										new Error(`Could not initialize webview: ${re.message}}`),
									);
								}),
							),
							this.D(
								this.webview.onMessage(async (re) => {
									const le = re.message;
									if (!this.s && le.__vscode_notebook_message)
										switch (le.type) {
											case "initialized": {
												se.complete(), this.wb();
												break;
											}
											case "initializedMarkup": {
												this.z?.requestId === le.requestId &&
													(this.z?.p.complete(), (this.z = void 0));
												break;
											}
											case "dimension": {
												for (const oe of le.updates) {
													const ae = oe.height;
													if (oe.isOutput) {
														const pe = this.kb(oe.id);
														if (pe) {
															const { cellInfo: $e, output: ye } = pe;
															this.notebookEditor.updateOutputHeight(
																$e,
																ye,
																ae,
																!!oe.init,
																"webview#dimension",
															),
																this.notebookEditor.scheduleOutputHeightAck(
																	$e,
																	oe.id,
																	ae,
																);
														} else if (oe.init) {
															const $e = this.c.get(oe.id);
															if ($e) {
																const ye =
																	this.pendingWebviewIdleInsetMapping.get($e);
																this.pendingWebviewIdleCreationRequest.delete(
																	$e,
																),
																	this.pendingWebviewIdleCreationRequest.delete(
																		$e,
																	);
																const ue = ye.cellInfo;
																this.g.set(oe.id, $e),
																	this.insetMapping.set($e, ye),
																	this.notebookEditor.updateOutputHeight(
																		ue,
																		$e,
																		ae,
																		!!oe.init,
																		"webview#dimension",
																	),
																	this.notebookEditor.scheduleOutputHeightAck(
																		ue,
																		oe.id,
																		ae,
																	);
															}
															this.c.delete(oe.id);
														}
														{
															if (!oe.init) continue;
															const $e = this.g.get(oe.id);
															if (!$e) continue;
															const ye = this.insetMapping.get($e);
															ye.initialized = !0;
														}
													} else
														this.notebookEditor.updateMarkupCellHeight(
															oe.id,
															ae,
															!!oe.init,
														);
												}
												break;
											}
											case "mouseenter": {
												const oe = this.kb(le.id);
												if (oe) {
													const ae = this.notebookEditor.getCellByInfo(
														oe.cellInfo,
													);
													ae && (ae.outputIsHovered = !0);
												}
												break;
											}
											case "mouseleave": {
												const oe = this.kb(le.id);
												if (oe) {
													const ae = this.notebookEditor.getCellByInfo(
														oe.cellInfo,
													);
													ae && (ae.outputIsHovered = !1);
												}
												break;
											}
											case "outputFocus": {
												const oe = this.kb(le.id);
												if (oe) {
													const ae = this.notebookEditor.getCellByInfo(
														oe.cellInfo,
													);
													ae &&
														((ae.outputIsFocused = !0),
														this.notebookEditor.focusNotebookCell(
															ae,
															"output",
															{
																outputId: oe.output.model.outputId,
																skipReveal: !0,
																outputWebviewFocused: !0,
															},
														));
												}
												break;
											}
											case "outputBlur": {
												const oe = this.kb(le.id);
												if (oe) {
													const ae = this.notebookEditor.getCellByInfo(
														oe.cellInfo,
													);
													ae &&
														((ae.outputIsFocused = !1),
														(ae.inputInOutputIsFocused = !1));
												}
												break;
											}
											case "scroll-ack":
												break;
											case "scroll-to-reveal": {
												this.notebookEditor.setScrollTop(le.scrollTop - A.$A2b);
												break;
											}
											case "did-scroll-wheel": {
												this.notebookEditor.triggerScroll({
													...le.payload,
													preventDefault: () => {},
													stopPropagation: () => {},
												});
												break;
											}
											case "focus-editor": {
												const oe = this.notebookEditor.getCellById(le.cellId);
												oe &&
													(le.focusNext
														? this.notebookEditor.focusNextNotebookCell(
																oe,
																"editor",
															)
														: await this.notebookEditor.focusNotebookCell(
																oe,
																"editor",
															));
												break;
											}
											case "clicked-data-url": {
												this.tb(le);
												break;
											}
											case "clicked-link": {
												if ((0, m.$Vg)(le.href, m.Schemas.command)) {
													const oe = c.URI.parse(le.href);
													if (oe.path === "workbench.action.openLargeOutput") {
														const pe = oe.query,
															$e = this.Y.activeGroup;
														$e &&
															$e.activeEditor &&
															$e.pinEditor($e.activeEditor),
															this.J.open(
																U.CellUri.generateCellOutputUri(
																	this.documentUri,
																	pe,
																),
															);
														return;
													}
													if (oe.path === "cellOutput.enableScrolling") {
														const pe = oe.query,
															$e = this.g.get(pe);
														$e &&
															(this.bb.publicLog2("workbenchActionExecuted", {
																id: "notebook.cell.toggleOutputScrolling",
																from: "inlineLink",
															}),
															$e.cellViewModel.outputsViewModels.forEach(
																(ye) => {
																	ye.model.metadata &&
																		((ye.model.metadata.scrollable = !0),
																		ye.resetRenderer());
																},
															));
														return;
													}
													this.J.open(le.href, {
														fromUserGesture: !0,
														fromWorkspace: !0,
														allowCommands: !1
															? !0
															: [
																	"github-issues.authNow",
																	"workbench.extensions.search",
																	"workbench.action.openSettings",
																	"_notebook.selectKernel",
																	"jupyter.viewOutput",
																],
													});
													return;
												}
												if (
													(0, m.$Wg)(
														le.href,
														m.Schemas.http,
														m.Schemas.https,
														m.Schemas.mailto,
													)
												)
													this.J.open(le.href, {
														fromUserGesture: !0,
														fromWorkspace: !0,
													});
												else if (
													(0, m.$Vg)(le.href, m.Schemas.vscodeNotebookCell)
												) {
													const oe = c.URI.parse(le.href);
													await this.pb(oe);
												} else
													/^[\w\-]+:/.test(le.href)
														? u.$nc(le.href)
															? this.rb(c.URI.file(le.href))
															: this.rb(c.URI.parse(le.href))
														: await this.qb(_(le.href));
												break;
											}
											case "customKernelMessage": {
												this.m.fire({ message: le.message });
												break;
											}
											case "customRendererMessage": {
												this.H?.postMessage(le.rendererId, le.message);
												break;
											}
											case "clickMarkupCell": {
												const oe = this.notebookEditor.getCellById(le.cellId);
												oe &&
													(le.shiftKey || (a.$m ? le.metaKey : le.ctrlKey)
														? this.notebookEditor.toggleNotebookCellSelection(
																oe,
																le.shiftKey,
															)
														: await this.notebookEditor.focusNotebookCell(
																oe,
																"container",
																{ skipReveal: !0 },
															));
												break;
											}
											case "contextMenuMarkupCell": {
												const oe = this.notebookEditor.getCellById(le.cellId);
												if (oe) {
													await this.notebookEditor.focusNotebookCell(
														oe,
														"container",
														{ skipReveal: !0 },
													);
													const ae = this.element.getBoundingClientRect();
													this.Q.showContextMenu({
														menuId: s.$XX.NotebookCellTitle,
														contextKeyService: this.R,
														getAnchor: () => ({
															x: ae.x + le.clientX,
															y: ae.y + le.clientY,
														}),
													});
												}
												break;
											}
											case "toggleMarkupPreview": {
												const oe = this.notebookEditor.getCellById(le.cellId);
												oe &&
													!this.notebookEditor.creationOptions.isReadOnly &&
													(this.notebookEditor.setMarkupCellEditState(
														le.cellId,
														N.CellEditState.Editing,
													),
													await this.notebookEditor.focusNotebookCell(
														oe,
														"editor",
														{ skipReveal: !0 },
													));
												break;
											}
											case "mouseEnterMarkupCell": {
												const oe = this.notebookEditor.getCellById(le.cellId);
												oe instanceof B.$41b && (oe.cellIsHovered = !0);
												break;
											}
											case "mouseLeaveMarkupCell": {
												const oe = this.notebookEditor.getCellById(le.cellId);
												oe instanceof B.$41b && (oe.cellIsHovered = !1);
												break;
											}
											case "cell-drag-start": {
												this.notebookEditor.didStartDragMarkupCell(
													le.cellId,
													le,
												);
												break;
											}
											case "cell-drag": {
												this.notebookEditor.didDragMarkupCell(le.cellId, le);
												break;
											}
											case "cell-drop": {
												this.notebookEditor.didDropMarkupCell(le.cellId, {
													dragOffsetY: le.dragOffsetY,
													ctrlKey: le.ctrlKey,
													altKey: le.altKey,
												});
												break;
											}
											case "cell-drag-end": {
												this.notebookEditor.didEndDragMarkupCell(le.cellId);
												break;
											}
											case "renderedMarkup": {
												const oe = this.notebookEditor.getCellById(le.cellId);
												oe instanceof B.$41b && (oe.renderedHtml = le.html),
													this.sb(le.codeBlocks);
												break;
											}
											case "renderedCellOutput": {
												this.sb(le.codeBlocks);
												break;
											}
											case "outputResized": {
												this.notebookEditor.didResizeOutput(le.cellId);
												break;
											}
											case "getOutputItem": {
												const ae = this.kb(
													le.outputId,
												)?.output.model.outputs.find(
													(pe) => pe.mime === le.mime,
												);
												this.Eb({
													type: "returnOutputItem",
													requestId: le.requestId,
													output: ae
														? { mime: ae.mime, valueBytes: ae.data.buffer }
														: void 0,
												});
												break;
											}
											case "logRendererDebugMessage": {
												this.cb(
													`${le.message}${le.data ? " " + JSON.stringify(le.data, null, 4) : ""}`,
												);
												break;
											}
											case "notebookPerformanceMessage": {
												this.notebookEditor.updatePerformanceMetadata(
													le.cellId,
													le.executionId,
													le.duration,
													le.rendererId,
												),
													le.mimeType &&
														le.outputSize &&
														le.rendererId === "vscode.builtin-renderer" &&
														this.ob(le.mimeType, le.outputSize, le.duration);
												break;
											}
											case "outputInputFocus": {
												const oe = this.kb(le.id);
												if (oe) {
													const ae = this.notebookEditor.getCellByInfo(
														oe.cellInfo,
													);
													ae && (ae.inputInOutputIsFocused = le.inputFocused);
												}
												this.notebookEditor.didFocusOutputInputChange(
													le.inputFocused,
												);
											}
										}
								}),
							),
							se.p
						);
					}
					ob(Q, Z, se) {
						const re = { mimeType: Q, outputSize: Z, renderTime: se };
						this.bb.publicLog2("NotebookCellOutputRender", re);
					}
					pb(Q) {
						const Z = Q.path.length > 0 ? Q : this.documentUri,
							se = /(?:^|&)line=([^&]+)/.exec(Q.query);
						let re;
						if (se) {
							const ae = parseInt(se[1], 10);
							isNaN(ae) ||
								(re = { selection: { startLineNumber: ae, startColumn: 1 } });
						}
						const le = /(?:^|&)execution_count=([^&]+)/.exec(Q.query);
						if (le) {
							const ae = parseInt(le[1], 10);
							if (!isNaN(ae)) {
								const $e = this.L.getNotebookTextModel(Z)
									?.cells.slice()
									.reverse()
									.find((ye) => ye.internalMetadata.executionOrder === ae);
								if ($e?.uri)
									return this.J.open($e.uri, {
										fromUserGesture: !0,
										fromWorkspace: !0,
										editorOptions: re,
									});
							}
						}
						const oe = /\?line=(\d+)$/.exec(Q.fragment);
						if (oe) {
							const ae = parseInt(oe[1], 10);
							if (!isNaN(ae)) {
								const pe = ae + 1,
									$e = Q.fragment.substring(0, oe.index),
									ye = {
										selection: {
											startLineNumber: pe,
											startColumn: 1,
											endLineNumber: pe,
											endColumn: 1,
										},
									};
								return this.J.open(Z.with({ fragment: $e }), {
									fromUserGesture: !0,
									fromWorkspace: !0,
									editorOptions: ye,
								});
							}
						}
						return this.J.open(Z, { fromUserGesture: !0, fromWorkspace: !0 });
					}
					async qb(Q) {
						let Z, se;
						const re = Y.exec(Q);
						if ((re && ((Q = re[1]), (se = re[2])), Q.startsWith("/"))) {
							Z = await this.$.fileURI(Q);
							const le = this.X.getWorkspace().folders;
							le.length &&
								(Z = Z.with({
									scheme: le[0].uri.scheme,
									authority: le[0].uri.authority,
								}));
						} else if (Q.startsWith("~")) {
							const le = await this.$.userHome();
							le && (Z = c.URI.joinPath(le, Q.substring(2)));
						} else if (this.documentUri.scheme === m.Schemas.untitled) {
							const le = this.X.getWorkspace().folders;
							if (!le.length) return;
							Z = c.URI.joinPath(le[0].uri, Q);
						} else Z = c.URI.joinPath((0, h.$mh)(this.documentUri), Q);
						Z && (se && (Z = Z.with({ fragment: se })), this.rb(Z));
					}
					rb(Q) {
						let Z, se;
						const re = W.exec(Q.path);
						re &&
							((Q = Q.with({
								path: Q.path.slice(0, re.index),
								fragment: `L${re[0].slice(1)}`,
							})),
							(Z = parseInt(re[1], 10)),
							(se = parseInt(re[2], 10)));
						const le = X.exec(Q.query);
						if (le) {
							const ae = parseInt(le[1], 10);
							isNaN(ae) ||
								((Z = ae + 1), (se = 1), (Q = Q.with({ fragment: `L${Z}` })));
						}
						Q = Q.with({ query: null });
						let oe;
						for (const ae of this.Y.groups) {
							const pe = ae.editors.find(
								($e) => $e.resource && (0, h.$gh)($e.resource, Q, !0),
							);
							if (pe) {
								oe = { group: ae, editor: pe };
								break;
							}
						}
						if (oe) {
							const ae =
									Z !== void 0 && se !== void 0
										? { startLineNumber: Z, startColumn: se }
										: void 0,
								pe = { selection: ae };
							oe.group.openEditor(oe.editor, ae ? pe : void 0);
						} else this.J.open(Q, { fromUserGesture: !0, fromWorkspace: !0 });
					}
					sb(Q) {
						for (const { id: Z, value: se, lang: re } of Q) {
							const le = this.W.getLanguageIdByLanguageName(re);
							le &&
								(0, f.$cwb)(this.W, se, le).then((oe) => {
									this.s ||
										this.Eb({
											type: "tokenizedCodeBlock",
											html: oe,
											codeBlockId: Z,
										});
								});
						}
					}
					async tb(Q) {
						if (typeof Q.data != "string") return;
						const [Z, se] = Q.data.split(";base64,");
						if (!se || !Z) return;
						const re =
							(0, h.$lh)(this.documentUri) === ".interactive"
								? (this.X.getWorkspace().folders[0]?.uri ??
									(await this.O.defaultFilePath()))
								: (0, h.$mh)(this.documentUri);
						let le;
						if (Q.downloadName) le = Q.downloadName;
						else {
							const $e = Z.replace(/^data:/, ""),
								ye = $e && (0, d.$HK)($e);
							le = ye ? `download${ye}` : "download";
						}
						const oe = (0, h.$nh)(re, le),
							ae = await this.O.showSaveDialog({ defaultUri: oe });
						if (!ae) return;
						const pe = (0, E.$af)(se);
						await this.P.writeFile(ae, pe), await this.J.open(ae);
					}
					ub(Q, Z) {
						this.j = this.vb();
						const se = Q.createWebviewElement({
							origin: J.b(this.Z).getOrigin(this.notebookViewType, void 0),
							title: b.localize(8213, null),
							options: {
								purpose: x.WebviewContentPurpose.NotebookRenderer,
								enableFindWidget: !1,
								transformCssVariables: O.$O2b,
							},
							contentOptions: {
								allowMultipleAPIAcquire: !0,
								allowScripts: !0,
								localResourceRoots: this.j,
							},
							extension: void 0,
							providedViewType: "notebook.output",
						});
						return se.setHtml(Z), se.setContextKeyService(this.R), se;
					}
					vb() {
						const Q = this.M.getWorkspace().folders.map((se) => se.uri),
							Z = this.lb();
						return [
							this.L.getNotebookProviderResourceRoots(),
							this.L.getRenderers().map((se) => (0, h.$mh)(se.entrypoint.path)),
							...Array.from(
								this.L.getStaticPreloads(this.notebookViewType),
								(se) => [(0, h.$mh)(se.entrypoint), ...se.localResourceRoots],
							),
							Q,
							Z,
							this.mb(),
						].flat();
					}
					wb() {
						this.r.clear(), this.t && this.Cb(this.t);
						for (const [Q, Z] of this.insetMapping.entries())
							this.Eb({ ...Z.cachedCreation, initiallyHidden: this.f.has(Q) });
						if (!this.z?.isFirstInit) {
							const Q = [...this.markupPreviewMapping.values()];
							this.markupPreviewMapping.clear(), this.initializeMarkup(Q);
						}
						this.db(), this.eb();
					}
					xb(Q, Z, se, re) {
						if (this.s || ("isOutputCollapsed" in Q && Q.isOutputCollapsed))
							return !1;
						if (this.f.has(Z)) return !0;
						const le = this.insetMapping.get(Z);
						return !(
							!le ||
							(re === le.cachedCreation.outputOffset &&
								se === le.cachedCreation.cellTop)
						);
					}
					ackHeight(Q) {
						this.Eb({ type: "ack-dimension", updates: Q });
					}
					updateScrollTops(Q, Z) {
						if (this.s) return;
						const se = (0, i.$Lb)(
							Q.map((re) => {
								const le = this.insetMapping.get(re.output);
								if (
									!le ||
									(!re.forceDisplay &&
										!this.xb(re.cell, re.output, re.cellTop, re.outputOffset))
								)
									return;
								const oe = le.outputId;
								return (
									(le.cachedCreation.cellTop = re.cellTop),
									(le.cachedCreation.outputOffset = re.outputOffset),
									this.f.delete(re.output),
									{
										cellId: re.cell.id,
										outputId: oe,
										cellTop: re.cellTop,
										outputOffset: re.outputOffset,
										forceDisplay: re.forceDisplay,
									}
								);
							}),
						);
						(!se.length && !Z.length) ||
							this.Eb({ type: "view-scroll", widgets: se, markupCells: Z });
					}
					async yb(Q) {
						if (!this.s) {
							if (this.markupPreviewMapping.has(Q.cellId)) {
								console.error(
									"Trying to create markup preview that already exists",
								);
								return;
							}
							this.markupPreviewMapping.set(Q.cellId, Q),
								this.Eb({ type: "createMarkupCell", cell: Q });
						}
					}
					async showMarkupPreview(Q) {
						if (this.s) return;
						const Z = this.markupPreviewMapping.get(Q.cellId);
						if (!Z) return this.yb(Q);
						const se = Q.content === Z.content,
							re = (0, r.$zo)(Q.metadata, Z.metadata);
						(!se || !re || !Z.visible) &&
							this.Eb({
								type: "showMarkupCell",
								id: Q.cellId,
								handle: Q.cellHandle,
								content: se ? void 0 : Q.content,
								top: Q.offset,
								metadata: re ? void 0 : Q.metadata,
							}),
							(Z.metadata = Q.metadata),
							(Z.content = Q.content),
							(Z.offset = Q.offset),
							(Z.visible = !0);
					}
					async hideMarkupPreviews(Q) {
						if (this.s) return;
						const Z = [];
						for (const se of Q) {
							const re = this.markupPreviewMapping.get(se);
							re && re.visible && (Z.push(se), (re.visible = !1));
						}
						Z.length && this.Eb({ type: "hideMarkupCells", ids: Z });
					}
					async unhideMarkupPreviews(Q) {
						if (this.s) return;
						const Z = [];
						for (const se of Q) {
							const re = this.markupPreviewMapping.get(se);
							re
								? re.visible || ((re.visible = !0), Z.push(se))
								: console.error(
										`Trying to unhide a preview that does not exist: ${se}`,
									);
						}
						this.Eb({ type: "unhideMarkupCells", ids: Z });
					}
					async deleteMarkupPreviews(Q) {
						if (!this.s) {
							for (const Z of Q)
								this.markupPreviewMapping.has(Z) ||
									console.error(
										`Trying to delete a preview that does not exist: ${Z}`,
									),
									this.markupPreviewMapping.delete(Z);
							Q.length && this.Eb({ type: "deleteMarkupCell", ids: Q });
						}
					}
					async updateMarkupPreviewSelections(Q) {
						this.s ||
							this.Eb({
								type: "updateSelectedMarkupCells",
								selectedCellIds: Q.filter((Z) =>
									this.markupPreviewMapping.has(Z),
								),
							});
					}
					async initializeMarkup(Q) {
						if (this.s) return;
						this.z?.p.complete();
						const Z = n.$9g();
						(this.z = { p: new w.$0h(), requestId: Z, isFirstInit: this.u }),
							(this.u = !1);
						for (const se of Q) this.markupPreviewMapping.set(se.cellId, se);
						return (
							this.Eb({ type: "initializeMarkup", cells: Q, requestId: Z }),
							this.z.p.p
						);
					}
					zb(Q, Z) {
						return Z.type === N.RenderOutputType.Extension
							? Q.renderer?.id === Z.renderer.id
							: Q.cachedCreation.type === "html";
					}
					requestCreateOutputWhenWebviewIdle(Q, Z, se, re) {
						this.s ||
							this.insetMapping.has(Z.source) ||
							this.pendingWebviewIdleCreationRequest.has(Z.source) ||
							this.pendingWebviewIdleInsetMapping.has(Z.source) ||
							this.pendingWebviewIdleCreationRequest.set(
								Z.source,
								(0, w.$3h)(() => {
									const {
										message: le,
										renderer: oe,
										transfer: ae,
									} = this.Bb(Q, Z, se, re, !0, !0);
									this.Eb(le, ae),
										this.pendingWebviewIdleInsetMapping.set(Z.source, {
											outputId: le.outputId,
											versionId: Z.source.model.versionId,
											cellInfo: Q,
											renderer: oe,
											cachedCreation: le,
										}),
										this.c.set(le.outputId, Z.source),
										this.pendingWebviewIdleCreationRequest.delete(Z.source);
								}),
							);
					}
					createOutput(Q, Z, se, re) {
						if (this.s) return;
						const le = this.insetMapping.get(Z.source);
						if (
							(this.pendingWebviewIdleCreationRequest.get(Z.source)?.dispose(),
							this.pendingWebviewIdleCreationRequest.delete(Z.source),
							this.pendingWebviewIdleInsetMapping.delete(Z.source),
							le && this.c.delete(le.outputId),
							le && this.zb(le, Z))
						) {
							this.f.delete(Z.source),
								this.Eb({
									type: "showOutput",
									cellId: le.cellInfo.cellId,
									outputId: le.outputId,
									cellTop: se,
									outputOffset: re,
								});
							return;
						}
						const {
							message: oe,
							renderer: ae,
							transfer: pe,
						} = this.Bb(Q, Z, se, re, !1, !1);
						this.Eb(oe, pe),
							this.insetMapping.set(Z.source, {
								outputId: oe.outputId,
								versionId: Z.source.model.versionId,
								cellInfo: Q,
								renderer: ae,
								cachedCreation: oe,
							}),
							this.f.delete(Z.source),
							this.g.set(oe.outputId, Z.source);
					}
					Ab(Q, Z) {
						if (Z.startsWith("image")) {
							const se = Q.outputs.find((re) => re.mime === "text/plain")?.data
								.buffer;
							if (se?.length && se?.length > 0) {
								const re = new TextDecoder().decode(se);
								return { ...Q.metadata, vscode_altText: re };
							}
						}
						return Q.metadata;
					}
					Bb(Q, Z, se, re, le, oe) {
						const ae = {
								type: "html",
								executionId: Q.executionId,
								cellId: Q.cellId,
								cellTop: se,
								outputOffset: re,
								left: 0,
								requiredPreloads: [],
								createOnIdle: le,
							},
							pe = [];
						let $e, ye;
						if (Z.type === N.RenderOutputType.Extension) {
							const ue = Z.source.model;
							ye = Z.renderer;
							const fe = ue.outputs.find((ge) => ge.mime === Z.mimeType),
								me = this.Ab(ue, Z.mimeType),
								ve = ne(fe.data.buffer, pe);
							$e = {
								...ae,
								outputId: ue.outputId,
								rendererId: Z.renderer.id,
								content: {
									type: N.RenderOutputType.Extension,
									outputId: ue.outputId,
									metadata: me,
									output: { mime: fe.mime, valueBytes: ve },
									allOutputs: ue.outputs.map((ge) => ({ mime: ge.mime })),
								},
								initiallyHidden: oe,
							};
						} else
							$e = {
								...ae,
								outputId: n.$9g(),
								content: { type: Z.type, htmlContent: Z.htmlContent },
								initiallyHidden: oe,
							};
						return { message: $e, renderer: ye, transfer: pe };
					}
					updateOutput(Q, Z, se, re) {
						if (this.s) return;
						if (!this.insetMapping.has(Z.source)) {
							this.createOutput(Q, Z, se, re);
							return;
						}
						const le = this.insetMapping.get(Z.source);
						if (le.versionId === Z.source.model.versionId) return;
						this.f.delete(Z.source);
						let oe;
						const ae = [];
						if (Z.type === N.RenderOutputType.Extension) {
							const pe = Z.source.model,
								$e = pe.outputs.find((me) => me.mime === Z.mimeType),
								ye = pe.appendedSinceVersion(le.versionId, Z.mimeType),
								ue = ye
									? { valueBytes: ye.buffer, previousVersion: le.versionId }
									: void 0,
								fe = ne($e.data.buffer, ae);
							oe = {
								type: N.RenderOutputType.Extension,
								outputId: le.outputId,
								metadata: pe.metadata,
								output: { mime: Z.mimeType, valueBytes: fe, appended: ue },
								allOutputs: pe.outputs.map((me) => ({ mime: me.mime })),
							};
						}
						this.Eb(
							{
								type: "showOutput",
								cellId: le.cellInfo.cellId,
								outputId: le.outputId,
								cellTop: se,
								outputOffset: re,
								content: oe,
							},
							ae,
						),
							(le.versionId = Z.source.model.versionId);
					}
					async copyImage(Q) {
						this.Eb({
							type: "copyImage",
							outputId: Q.model.outputId,
							altOutputId: Q.model.alternativeOutputId,
						});
					}
					removeInsets(Q) {
						if (!this.s)
							for (const Z of Q) {
								const se = this.insetMapping.get(Z);
								if (!se) continue;
								const re = se.outputId;
								this.Eb({
									type: "clearOutput",
									rendererId: se.cachedCreation.rendererId,
									cellUri: se.cellInfo.cellUri.toString(),
									outputId: re,
									cellId: se.cellInfo.cellId,
								}),
									this.insetMapping.delete(Z),
									this.pendingWebviewIdleCreationRequest.get(Z)?.dispose(),
									this.pendingWebviewIdleCreationRequest.delete(Z),
									this.pendingWebviewIdleInsetMapping.delete(Z),
									this.c.delete(re),
									this.g.delete(re);
							}
					}
					hideInset(Q) {
						if (this.s) return;
						const Z = this.insetMapping.get(Q);
						Z &&
							(this.f.add(Q),
							this.Eb({
								type: "hideOutput",
								outputId: Z.outputId,
								cellId: Z.cellInfo.cellId,
							}));
					}
					focusWebview() {
						this.s || this.webview?.focus();
					}
					selectOutputContents(Q) {
						if (this.s) return;
						const Z = Q.outputsViewModels.find(
								(re) => re.model.outputId === Q.focusedOutputId,
							),
							se = Z ? this.insetMapping.get(Z)?.outputId : void 0;
						this.Eb({
							type: "select-output-contents",
							cellOrOutputId: se || Q.id,
						});
					}
					selectInputContents(Q) {
						if (this.s) return;
						const Z = Q.outputsViewModels.find(
								(re) => re.model.outputId === Q.focusedOutputId,
							),
							se = Z ? this.insetMapping.get(Z)?.outputId : void 0;
						this.Eb({
							type: "select-input-contents",
							cellOrOutputId: se || Q.id,
						});
					}
					focusOutput(Q, Z, se) {
						this.s ||
							(se || this.webview?.focus(),
							this.Eb({
								type: "focus-output",
								cellOrOutputId: Q,
								alternateId: Z,
							}));
					}
					blurOutput() {
						this.s || this.Eb({ type: "blur-output" });
					}
					async find(Q, Z) {
						if (Q === "")
							return this.Eb({ type: "findStop", ownerID: Z.ownerID }), [];
						const se = new Promise((le) => {
							const oe = this.webview?.onMessage((ae) => {
								ae.message.type === "didFind" &&
									(le(ae.message.matches), oe?.dispose());
							});
						});
						return this.Eb({ type: "find", query: Q, options: Z }), await se;
					}
					findStop(Q) {
						this.Eb({ type: "findStop", ownerID: Q });
					}
					async findHighlightCurrent(Q, Z) {
						const se = new Promise((le) => {
							const oe = this.webview?.onMessage((ae) => {
								ae.message.type === "didFindHighlightCurrent" &&
									(le(ae.message.offset), oe?.dispose());
							});
						});
						return (
							this.Eb({ type: "findHighlightCurrent", index: Q, ownerID: Z }),
							await se
						);
					}
					async findUnHighlightCurrent(Q, Z) {
						this.Eb({ type: "findUnHighlightCurrent", index: Q, ownerID: Z });
					}
					deltaCellContainerClassNames(Q, Z, se) {
						this.Eb({
							type: "decorations",
							cellId: Q,
							addedClassNames: Z,
							removedClassNames: se,
						});
					}
					updateOutputRenderers() {
						if (!this.webview) return;
						const Q = this.hb();
						this.j = this.vb();
						const Z = [
							...(this.j || []),
							...(this.t ? [this.t.localResourceRoot] : []),
						];
						(this.webview.localResourcesRoot = Z),
							this.Eb({ type: "updateRenderers", rendererData: Q });
					}
					async updateKernelPreloads(Q) {
						if (this.s || Q === this.t) return;
						const Z = this.t;
						(this.t = Q),
							Z && Z.preloadUris.length > 0
								? this.webview?.reload()
								: Q && this.Cb(Q);
					}
					Cb(Q) {
						const Z = [];
						for (const se of Q.preloadUris) {
							const re =
								this.N.isExtensionDevelopment &&
								(se.scheme === "http" || se.scheme === "https")
									? se
									: this.jb(se, void 0);
							this.r.has(re.toString()) ||
								(Z.push({ uri: re.toString(), originalUri: se.toString() }),
								this.r.add(re.toString()));
						}
						Z.length && this.Db(Z);
					}
					Db(Q) {
						if (!this.webview) return;
						const Z = [
							...(this.j || []),
							...(this.t ? [this.t.localResourceRoot] : []),
						];
						(this.webview.localResourcesRoot = Z),
							this.Eb({ type: "preload", resources: Q });
					}
					Eb(Q, Z) {
						this.s || this.webview?.postMessage(Q, Z);
					}
					dispose() {
						(this.s = !0),
							this.webview?.dispose(),
							(this.webview = void 0),
							(this.notebookEditor = null),
							this.insetMapping.clear(),
							this.pendingWebviewIdleCreationRequest.clear(),
							super.dispose();
					}
				};
				(e.$X2b = ie),
					(e.$X2b =
						ie =
						J =
							Ne(
								[
									j(6, x.$3Ib),
									j(7, I.$7rb),
									j(8, F.$MIb),
									j(9, D.$Vi),
									j(10, G.$r8),
									j(11, v.$IO),
									j(12, S.$ll),
									j(13, $.$Xxb),
									j(14, y.$6j),
									j(15, M.$pO),
									j(16, l.$gj),
									j(17, p.$nM),
									j(18, D.$Vi),
									j(19, V.$EY),
									j(20, T.$lq),
									j(21, K.$I8),
									j(22, z.$P2b),
									j(23, L.$iP),
									j(24, P.$km),
								],
								ie,
							));
				function ne(te, Q) {
					if (te.byteLength === te.buffer.byteLength) return te;
					{
						const Z = new Uint8Array(te);
						return Q.push(Z.buffer), Z;
					}
				}
				function ee() {
					const te = g.$lM.getColorMap();
					return te ? (0, o.$M2b)(te) : "";
				}
				function _(te) {
					try {
						return decodeURIComponent(te);
					} catch {
						return te;
					}
				}
			},
		),
		