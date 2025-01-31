import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/solid.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/path.js';
import '../../../../base/common/uri.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../../editor/contrib/documentSymbols/browser/outlineModel.js';
import '../../../../platform/opener/common/opener.js';
import '../../controlCommon/browser/solid.js';
import '../../ui/browser/scrollableDiv.js';
import '../../ui/browser/simpleCodeRender/simpleCodeRender.js';
import '../../ui/browser/utils.js';
import '../../ui/browser/widgets/codeBlock.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../editor/contrib/stickyScroll/browser/stickyScrollController.js';
import '../../ui/browser/aiInput/plugins/mentions/pureIcon.js';
import '../../ui/browser/hooks/useIsUsingFileIconTheme.js';
import './utils.js';
import '../../../../css!vs/workbench/contrib/quickInput2/browser/QuickInputBoxPreviewBoxMain.js';
define(
			de[4346],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 7, 33, 54, 9, 38, 204, 41, 36, 135, 865,
				476, 312, 17, 56, 1317, 156, 428, 1746, 2481,
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
				u /*dom*/,
				a /*cancellation*/,
				h /*path*/,
				c /*uri*/,
				n /*editorOptions*/,
				g /*outlineModel*/,
				p /*opener*/,
				o /*solid*/,
				f /*scrollableDiv*/,
				b /*simpleCodeRender*/,
				s /*utils*/,
				l /*codeBlock*/,
				y /*range*/,
				$ /*editorBrowser*/,
				v /*stickyScrollController*/,
				S /*pureIcon*/,
				I /*useIsUsingFileIconTheme*/,
				T /*utils*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jZc = q),
					(u = mt(u));
				const P = (0, t.template)(
						'<div><span></span><span class="label-description monaco-highlighted-label">',
					),
					k = (0, t.template)('<div class="outline-breadcrumb">'),
					L = (0, t.template)("<span><i>"),
					D = (0, t.template)("<span>/"),
					M = (0, t.template)("<div>"),
					N = (0, t.template)("<div>This file type cannot be previewed."),
					A = (0, t.template)("<div><div>"),
					R = (0, t.template)("<div><div><span>Output:"),
					O = (0, t.template)("<div><span>Input:"),
					B = (0, t.template)(
						"<div><div><span></span><div><span></span></div></div><div><div><span><span>ttft:</span> <!>ms</span><span><span>server ttft:</span> <!>ms</span><span><span>total:</span> <!>ms</span></div><div><span>requestId:</span> ",
					),
					U = 20,
					z = 16;
				function F(V) {
					const G = (0, h.$tc)(V).toLowerCase();
					return (
						{
							".ts": "typescript",
							".tsx": "typescriptreact",
							".js": "javascript",
							".jsx": "javascriptreact",
							".py": "python",
							".cpp": "cpp",
							".c": "c",
							".h": "cpp",
							".hpp": "cpp",
							".cs": "csharp",
							".java": "java",
							".go": "go",
							".rs": "rust",
							".rb": "ruby",
							".php": "php",
							".swift": "swift",
							".kt": "kotlin",
							".scala": "scala",
							".dart": "dart",
							".r": "r",
							".sh": "shell",
							".bash": "shell",
							".zsh": "shell",
							".fish": "shell",
							".ps1": "powershell",
							".psm1": "powershell",
							".sql": "sql",
							".vue": "vue",
							".html": "html",
							".css": "css",
							".scss": "scss",
							".less": "less",
							".json": "json",
							".xml": "xml",
							".yaml": "yaml",
							".yml": "yaml",
							".md": "markdown",
							".lua": "lua",
							".m": "objective-c",
							".mm": "objective-c",
							".f90": "fortran",
							".f95": "fortran",
							".f03": "fortran",
							".f08": "fortran",
							".jl": "julia",
							".ex": "elixir",
							".exs": "elixir",
							".elm": "elm",
							".fs": "fsharp",
							".fsx": "fsharp",
							".pl": "perl",
							".pm": "perl",
							".hs": "haskell",
							".lhs": "haskell",
							".clj": "clojure",
							".cljs": "clojure",
							".erl": "erlang",
							".hrl": "erlang",
						}[G] || "plaintext"
					);
				}
				const x = (V) => {
						const G = (0, o.$odc)(),
							K = (W) => {
								W.preventDefault(), W.stopPropagation();
								const X = c.URI.file(V.fsPath);
								G.openerService.open(X);
							},
							J = (0, I.$b$b)();
						return (() => {
							const W = P(),
								X = W.firstChild,
								Y = X.nextSibling;
							return (
								W.addEventListener("mousedown", K),
								W.style.setProperty("height", "16px"),
								W.style.setProperty("display", "flex"),
								W.style.setProperty("align-items", "center"),
								W.style.setProperty(
									"border-bottom",
									"1px solid var(--vscode-quickInput-border)",
								),
								W.style.setProperty("margin-bottom", "2px"),
								W.style.setProperty("cursor", "pointer"),
								W.style.setProperty("padding", "6px 11px"),
								W.style.setProperty("padding-top", "6px"),
								W.style.setProperty("padding-bottom", "2px"),
								(0, d.insert)(
									W,
									(0, m.createComponent)(r.Show, {
										when: J,
										get children() {
											return (0, m.createComponent)(S.$k$b, {
												get fileName() {
													return V.fsPath;
												},
												get workspaceContextService() {
													return G.workspaceContextService;
												},
												get modelService() {
													return G.modelService;
												},
												get languageService() {
													return G.languageService;
												},
											});
										},
									}),
									X,
								),
								X.style.setProperty("margin", "0"),
								X.style.setProperty("font-size", "12px"),
								X.style.setProperty("overflow", "hidden"),
								X.style.setProperty("text-overflow", "ellipsis"),
								X.style.setProperty("white-space", "nowrap"),
								(0, d.insert)(X, () => V.label),
								Y.style.setProperty("margin-top", "0"),
								Y.style.setProperty("margin-bottom", "0"),
								Y.style.setProperty("margin-left", "4px"),
								Y.style.setProperty("font-size", "12px"),
								Y.style.setProperty("opacity", "0.7"),
								Y.style.setProperty("overflow", "hidden"),
								Y.style.setProperty("text-overflow", "ellipsis"),
								Y.style.setProperty("white-space", "nowrap"),
								(0, d.insert)(Y, () => V.description),
								(0, C.effect)(() =>
									(0, E.setAttribute)(W, "title", `Open ${V.fsPath}`),
								),
								W
							);
						})();
					},
					H = (V) => {
						const G = (0, o.$odc)(),
							K = (Y) => {
								const ie = [];
								let ne = Y;
								for (; ne && ne.symbol; )
									ie.unshift(ne), (ne = J(V.outlineModel, ne.id));
								return ie;
							},
							J = (Y, ie) => {
								if (!(!Y || !("children" in Y)))
									for (const ne of Y.children) {
										if (ne.id === ie) return Y;
										const ee = J(ne, ie);
										if (ee) return ee;
									}
							},
							W = (0, r.createMemo)(() => K(V.relevantLeaf)),
							X = (Y, ie) => {
								if ((Y.preventDefault(), Y.stopPropagation(), V.outlineModel)) {
									const ne = V.outlineModel.uri;
									G.openerService.open(
										(0, p.$8rb)(ne, {
											startLineNumber: ie.symbol.range.startLineNumber,
											startColumn: ie.symbol.range.startColumn,
										}),
									);
								}
							};
						return (0, m.createComponent)(r.Show, {
							get when() {
								return V.outlineModel && V.relevantLeaf;
							},
							get children() {
								const Y = k();
								return (
									Y.style.setProperty("display", "flex"),
									Y.style.setProperty("align-items", "center"),
									Y.style.setProperty("font-size", "12px"),
									Y.style.setProperty("margin-bottom", "4px"),
									Y.style.setProperty("overflow", "hidden"),
									Y.style.setProperty("white-space", "nowrap"),
									Y.style.setProperty(
										"font-family",
										"var(--vscode-font-family)",
									),
									Y.style.setProperty("width", "fit-content"),
									Y.style.setProperty("padding-left", "1px"),
									Y.style.setProperty("padding", "0px 21px"),
									(0, d.insert)(
										Y,
										(0, m.createComponent)(r.For, {
											get each() {
												return W();
											},
											children: (ie, ne) => [
												(() => {
													const ee = L(),
														_ = ee.firstChild;
													return (
														ee.addEventListener("mousedown", (te) => X(te, ie)),
														ee.style.setProperty("display", "inline-flex"),
														ee.style.setProperty("align-items", "center"),
														ee.style.setProperty("justify-content", "flex-end"),
														ee.style.setProperty("flex-shrink", "0"),
														ee.style.setProperty("overflow", "hidden"),
														ee.style.setProperty("text-overflow", "ellipsis"),
														ee.style.setProperty("cursor", "pointer"),
														ee.style.setProperty("padding", "0px 2px"),
														_.style.setProperty("margin-right", "4px"),
														_.style.setProperty("font-size", "14px"),
														(0, d.insert)(ee, () => ie.symbol.name, null),
														(0, C.effect)(
															(te) => {
																const Q = `outline-item ${ne() === W().length - 1 ? "leaf" : ""}`,
																	Z =
																		ne() === W().length - 1
																			? "var(--vscode-editor-foreground)"
																			: "var(--vscode-descriptionForeground)",
																	se =
																		ne() === W().length - 1 ? "500" : "normal",
																	re = `codicon ${(0, T.$R9b)(ie.symbol.kind)}`;
																return (
																	Q !== te._v$ &&
																		(0, i.className)(ee, (te._v$ = Q)),
																	Z !== te._v$2 &&
																		((te._v$2 = Z) != null
																			? ee.style.setProperty("color", Z)
																			: ee.style.removeProperty("color")),
																	se !== te._v$3 &&
																		((te._v$3 = se) != null
																			? ee.style.setProperty("font-weight", se)
																			: ee.style.removeProperty("font-weight")),
																	re !== te._v$4 &&
																		(0, i.className)(_, (te._v$4 = re)),
																	te
																);
															},
															{
																_v$: void 0,
																_v$2: void 0,
																_v$3: void 0,
																_v$4: void 0,
															},
														),
														ee
													);
												})(),
												(0, m.createComponent)(r.Show, {
													get when() {
														return ne() < W().length - 1;
													},
													get children() {
														const ee = D();
														return (
															ee.style.setProperty("margin", "0 2px"),
															ee.style.setProperty(
																"color",
																"var(--vscode-descriptionForeground)",
															),
															ee.style.setProperty("opacity", "0.6"),
															ee
														);
													},
												}),
											],
										}),
									),
									Y
								);
							},
						});
					};
				function q() {
					const V = (0, o.$odc)(),
						[G, K] = (0, r.createSignal)(),
						[J, W] = (0, r.createSignal)(),
						[X, Y] = (0, r.createSignal)(),
						ie = (0, r.createMemo)(
							() =>
								V.reactiveStorageService.nonPersistentStorage
									.quickInputCurrentItem,
						);
					let ne, ee, _;
					const [te, Q] = (0, r.createSignal)(!0),
						Z = [
							".obj",
							".png",
							".jpg",
							".jpeg",
							".gif",
							".bmp",
							".ico",
							".icns",
							".webp",
							".mp3",
							".wav",
							".ogg",
							".flac",
							".mp4",
							".webm",
							".avi",
							".mov",
							".zip",
							".rar",
							".7z",
							".tar",
							".gz",
							".exe",
							".dll",
							".so",
							".dylib",
							".pdf",
							".doc",
							".docx",
							".xls",
							".xlsx",
							".ppt",
							".pptx",
							".ttf",
							".otf",
							".woff",
							".woff2",
						],
						se = async (me) => {
							const ve = V.fileService;
							try {
								const ge = await ve.resolve(me, { resolveMetadata: !0 }),
									be = me.path.split(".").pop()?.toLowerCase();
								Q(!!be && !Z.includes(`.${be}`));
							} catch (ge) {
								console.error("Error checking file previewability:", ge), Q(!1);
							}
						};
					(0, r.createEffect)(() => {
						const me = ie();
						me && me.resource && se(me.resource);
					});
					let re = null,
						le;
					const oe = async (me) => {
							ae();
							try {
								ee = await V.textModelService.createModelReference(me);
								const ve = ee.object.textEditorModel,
									ge = u.$("div.quick-input-preview-editor");
								(ne = V.instantiationService.createInstance(
									l.$X0b,
									ge,
									{
										...l.$X0b.getEditorOptions(V.configurationService),
										lineNumbers: "off",
										glyphMargin: !0,
										folding: !1,
										scrollbar: {
											vertical: "auto",
											horizontal: "hidden",
											horizontalScrollbarSize: 0,
											horizontalHasArrows: !1,
										},
										hover: { enabled: !1 },
										readOnly: !0,
										wordWrap: "off",
										wordWrapOverride1: "off",
										wordWrapOverride2: "off",
										stickyScroll: {
											enabled: !0,
											defaultModel: "outlineModel",
											maxLineCount: 2,
										},
									},
									{},
								)),
									ne.setModel(ve);
								const be = ne.getOption(n.EditorOption.lineHeight),
									Ce = ve.getLineCount(),
									Le = ne.getOption(n.EditorOption.fontInfo),
									Fe = Le.spaceWidth;
								let Oe = 0;
								const xe = ve.getOptions().tabSize;
								for (let Ie = 1; Ie <= Ce; Ie++) {
									const Be = ve.getLineContent(Ie);
									let Se = 0;
									for (let ke = 0; ke < Be.length; ke++)
										Be[ke] === "	" ? (Se += xe) : (Se += 1);
									Oe = Math.max(Oe, Se);
								}
								let He = Math.max(z, Math.min(Ce, U)),
									Ke = 0;
								const Te = ie();
								if (Te.range) {
									Te.range && fe(me, Te.range);
									const Ie = Te.range.startLineNumber,
										Se = Te.range.endLineNumber - Ie + 1;
									if (Se <= He) {
										const ke = Math.floor((He - Se) / 2);
										Ke = Math.max(Ie - 1 - ke, 0);
									} else (Ke = Ie - 1), (He = Math.min(Se, U));
								}
								ne.setScrollTop(Ke * be);
								const Ee = ie()?.semSearchData?.highlightRange;
								Ee &&
									ne.changeDecorations((Ie) => {
										Ie.addDecoration(Ee, {
											className: "sem-search-highlight",
											description: "Semantic Search Highlight",
											isWholeLine: !0,
										});
									}),
									(ge.style.height = "100%"),
									(ge.style.width = "100%"),
									(ge.style.fontFamily = Le.fontFamily),
									(ge.style.fontSize = `${Le.fontSize}px`),
									(ge.style.fontWeight = Le.fontWeight),
									(ge.style.letterSpacing = `${Le.letterSpacing}px`),
									(ge.style.overflow = "hidden"),
									K(ge),
									ne.onMouseMove((Ie) => {
										const Be = Ie.target;
										if (
											Be.type === $.MouseTargetType.CONTENT_TEXT &&
											Be.position
										) {
											const Se = Be.position.lineNumber;
											pe(Se);
										} else $e();
									}),
									ne.onMouseDown((Ie) => {
										const Be = Ie.target;
										if (
											Be.type === $.MouseTargetType.CONTENT_TEXT &&
											Be.position
										) {
											const Se = Be.position.lineNumber;
											ye(Se);
										}
									}),
									(_ = new ResizeObserver(() => {
										ne && ne.layout();
									})),
									_.observe(ge),
									(le = V.instantiationService.createInstance(v.$pkc, ne)),
									le.hijackOnClickItem((Ie, Be) => {
										Be && (Ie.preventDefault(), Ie.stopPropagation(), ye(Be));
									});
							} catch (ve) {
								console.error("Failed to create preview editor:", ve), ae();
							}
						},
						ae = () => {
							ne &&
								(le && (le.dispose(), (le = void 0)),
								ne.dispose(),
								(ne = void 0)),
								ee && (ee.dispose(), (ee = void 0)),
								_ && (_.disconnect(), (_ = void 0)),
								$e();
						},
						pe = (me) => {
							ne &&
								($e(),
								(re = ne.deltaDecorations(
									[],
									[
										{
											range: new y.$iL(me, 1, me, Number.MAX_VALUE),
											options: {
												isWholeLine: !0,
												className: "hovered-line",
												hoverMessage: {
													value: "Click to navigate to this line",
												},
												description: "Hover decoration",
												inlineClassName: "hovered-line-inline",
											},
										},
									],
								)[0]));
						},
						$e = () => {
							ne && re && (ne.deltaDecorations([re], []), (re = null));
						},
						ye = (me) => {
							const ve = ie();
							if (ve && ve.resource) {
								const ge = ve.resource;
								V.openerService.open(
									(0, p.$8rb)(ge, {
										startLineNumber: me,
										startColumn: 1,
										endLineNumber: me,
										endColumn: 1,
									}),
								);
							}
						},
						ue = (me, ve) => {
							const ge = (xe, He) => {
									const Ke = Math.max(xe.startLineNumber, He.startLineNumber),
										Je = Math.min(xe.endLineNumber, He.endLineNumber);
									return Ke > Je ? 0 : Je - Ke + 1;
								},
								be = me.endLineNumber - me.startLineNumber + 1,
								Ce = ve.endLineNumber - ve.startLineNumber + 1,
								Le = ge(me, ve),
								Fe = be + Ce - Le;
							return Le / Fe;
						},
						fe = async (me, ve) => {
							const ge = a.CancellationToken.None,
								Ce = await V.outlineService.getOrCreate(
									(await V.textModelService.createModelReference(me)).object
										.textEditorModel,
									ge,
								);
							W(Ce);
							const Le = (Oe) => {
									if (
										Oe instanceof g.$8Db ||
										("children" in Oe && Oe.children.size > 0)
									) {
										let xe,
											He = -1;
										const Ke = (Oe instanceof g.$8Db, Oe.children.values());
										for (const Je of Ke) {
											const Te = Le(Je);
											if (Te) {
												const Ee = ue(Te.symbol.range, ve);
												Ee > He && ((He = Ee), (xe = Te));
											}
										}
										return xe;
									} else if ("symbol" in Oe) return Oe;
								},
								Fe = Le(Ce);
							Y(Fe);
						};
					return (
						(0, r.onMount)(() => {
							(0, r.onCleanup)(() => {
								ae();
							});
						}),
						(0, r.createEffect)(() => {
							const me = ie();
							me && me.resource
								? te() &&
									(oe(me.resource),
									me.semSearchData?.outlineModel &&
										(W(me.semSearchData.outlineModel),
										Y(me.semSearchData.relevantLeaf)))
								: ae();
						}),
						(0, m.createComponent)(r.Show, {
							get when() {
								return (
									(0, w.memo)(
										() =>
											!!(ie() && (ie().semSearchData || ie().cppReportEvent)),
									)() && ie()
								);
							},
							children: (me) =>
								(0, m.createComponent)(r.Switch, {
									get children() {
										return [
											(0, m.createComponent)(r.Match, {
												get when() {
													return (
														(0, w.memo)(() => !!me().semSearchData)() &&
														me().resource
													);
												},
												children: (ve) => (
													te() && oe(ve()),
													(() => {
														const ge = A(),
															be = ge.firstChild;
														return (
															ge.style.setProperty("display", "flex"),
															ge.style.setProperty("flex-direction", "column"),
															ge.style.setProperty(
																"background",
																"var(--vscode-quickInput-background)",
															),
															ge.style.setProperty(
																"border",
																"1px solid var(--vscode-widget-border)",
															),
															ge.style.setProperty("border-radius", "6px"),
															ge.style.setProperty(
																"box-shadow",
																"0 0 8px 2px var(--vscode-widget-shadow)",
															),
															ge.style.setProperty("padding", "5px"),
															ge.style.setProperty("z-index", "1000"),
															ge.style.setProperty("overflow", "hidden"),
															ge.style.setProperty("height", "256px"),
															be.style.setProperty(
																"background",
																"var(--vscode-editor-background)",
															),
															be.style.setProperty(
																"border",
																"1px solid var(--vscode-quickInput-border)",
															),
															be.style.setProperty("border-radius", "4px"),
															be.style.setProperty("height", "100%"),
															be.style.setProperty("box-sizing", "border-box"),
															be.style.setProperty("overflow", "hidden"),
															be.style.setProperty("display", "flex"),
															be.style.setProperty("flex-direction", "column"),
															(0, d.insert)(
																be,
																(0, m.createComponent)(x, {
																	get label() {
																		return me().label;
																	},
																	get description() {
																		return me().description ?? "";
																	},
																	get fsPath() {
																		return ve().fsPath;
																	},
																}),
																null,
															),
															(0, d.insert)(
																be,
																(0, m.createComponent)(r.Show, {
																	get when() {
																		return te();
																	},
																	get children() {
																		return [
																			(0, m.createComponent)(H, {
																				get outlineModel() {
																					return me().semSearchData
																						?.outlineModel;
																				},
																				get relevantLeaf() {
																					return me().semSearchData
																						?.relevantLeaf;
																				},
																			}),
																			(() => {
																				const Ce = M();
																				return (
																					Ce.style.setProperty("flex", "1"),
																					Ce.style.setProperty(
																						"overflow",
																						"hidden",
																					),
																					(0, d.insert)(Ce, G),
																					Ce
																				);
																			})(),
																		];
																	},
																}),
																null,
															),
															(0, d.insert)(
																be,
																(0, m.createComponent)(r.Show, {
																	get when() {
																		return !te();
																	},
																	get children() {
																		const Ce = N();
																		return (
																			Ce.style.setProperty("display", "flex"),
																			Ce.style.setProperty(
																				"align-items",
																				"center",
																			),
																			Ce.style.setProperty(
																				"justify-content",
																				"center",
																			),
																			Ce.style.setProperty("height", "100%"),
																			Ce.style.setProperty(
																				"color",
																				"var(--vscode-descriptionForeground)",
																			),
																			Ce
																		);
																	},
																}),
																null,
															),
															(0, C.effect)(() =>
																(te() ? "0px" : "42px") != null
																	? be.style.setProperty(
																			"padding-bottom",
																			te() ? "0px" : "42px",
																		)
																	: be.style.removeProperty("padding-bottom"),
															),
															ge
														);
													})()
												),
											}),
											(0, m.createComponent)(r.Match, {
												get when() {
													return me().cppReportEvent;
												},
												children: (ve) => {
													const ge = ve();
													return (() => {
														const be = M();
														return (
															be.style.setProperty(
																"background",
																"var(--vscode-editor-background)",
															),
															be.style.setProperty(
																"border",
																"1px solid var(--vscode-widget-border)",
															),
															be.style.setProperty("border-radius", "4px"),
															be.style.setProperty(
																"box-shadow",
																"0 0 8px 2px var(--vscode-widget-shadow)",
															),
															be.style.setProperty("z-index", "1000"),
															be.style.setProperty("width", "100%"),
															be.style.setProperty("box-sizing", "border-box"),
															be.style.setProperty("height", "360px"),
															be.style.setProperty(
																"font-family",
																"var(--monaco-monospace-font)",
															),
															be.style.setProperty("font-size", "12px"),
															be.style.setProperty("overflow", "hidden"),
															be.style.setProperty("cursor", "not-allowed"),
															(0, d.insert)(
																be,
																(0, m.createComponent)(f.$w0b, {
																	scrollingDirection: "vertical",
																	style: { height: "100%" },
																	get children() {
																		const Ce = B(),
																			Le = Ce.firstChild,
																			Fe = Le.firstChild,
																			Oe = Fe.nextSibling,
																			xe = Oe.firstChild,
																			He = Le.nextSibling,
																			Ke = He.firstChild,
																			Je = Ke.firstChild,
																			Te = Je.firstChild,
																			Ee = Te.nextSibling,
																			Ie = Ee.nextSibling,
																			Be = Ie.nextSibling,
																			Se = Je.nextSibling,
																			ke = Se.firstChild,
																			Ue = ke.nextSibling,
																			qe = Ue.nextSibling,
																			Ae = qe.nextSibling,
																			Me = Se.nextSibling,
																			De = Me.firstChild,
																			Re = De.nextSibling,
																			je = Re.nextSibling,
																			Ve = je.nextSibling,
																			Ze = Ke.nextSibling,
																			et = Ze.firstChild,
																			rt = et.nextSibling;
																		return (
																			Ce.style.setProperty("padding", "6px"),
																			Ce.style.setProperty("display", "flex"),
																			Ce.style.setProperty(
																				"flex-direction",
																				"column",
																			),
																			Ce.style.setProperty("gap", "8px"),
																			Le.style.setProperty("display", "flex"),
																			Le.style.setProperty(
																				"justify-content",
																				"space-between",
																			),
																			Le.style.setProperty(
																				"align-items",
																				"center",
																			),
																			Fe.style.setProperty(
																				"color",
																				"var(--vscode-textLink-foreground)",
																			),
																			(0, d.insert)(Fe, () => ge.modelName),
																			Oe.style.setProperty("display", "flex"),
																			Oe.style.setProperty("gap", "12px"),
																			Oe.style.setProperty(
																				"align-items",
																				"center",
																			),
																			xe.style.setProperty("opacity", "0.7"),
																			(0, d.insert)(xe, () =>
																				(0, s.$Pac)(ge.timestamp),
																			),
																			He.style.setProperty("display", "flex"),
																			He.style.setProperty(
																				"flex-direction",
																				"column",
																			),
																			He.style.setProperty("gap", "4px"),
																			Ke.style.setProperty("display", "flex"),
																			Ke.style.setProperty("gap", "16px"),
																			Ke.style.setProperty("font-size", "11px"),
																			Ke.style.setProperty(
																				"font-family",
																				"var(--monaco-monospace-font)",
																			),
																			Ke.style.setProperty("opacity", "0.8"),
																			Te.style.setProperty("opacity", "0.7"),
																			(0, d.insert)(
																				Je,
																				() =>
																					ge.metrics.timeToFirstToken.toFixed(
																						0,
																					),
																				Ie,
																			),
																			ke.style.setProperty("opacity", "0.7"),
																			(0, d.insert)(
																				Se,
																				() =>
																					ge.metrics.serverTimeToFirstToken.toFixed(
																						0,
																					),
																				qe,
																			),
																			De.style.setProperty("opacity", "0.7"),
																			(0, d.insert)(
																				Me,
																				() => ge.metrics.totalTime.toFixed(0),
																				je,
																			),
																			et.style.setProperty("opacity", "0.7"),
																			(0, d.insert)(
																				Ze,
																				() => ge.requestId,
																				null,
																			),
																			(0, d.insert)(
																				Ce,
																				(0, m.createComponent)(r.Show, {
																					get when() {
																						return ge.debugInfo?.modelOutput;
																					},
																					get children() {
																						const ft = R(),
																							bt = ft.firstChild,
																							nt = bt.firstChild;
																						return (
																							ft.style.setProperty(
																								"display",
																								"flex",
																							),
																							ft.style.setProperty(
																								"flex-direction",
																								"column",
																							),
																							ft.style.setProperty(
																								"gap",
																								"4px",
																							),
																							ft.style.setProperty(
																								"pointer-events",
																								"none",
																							),
																							bt.style.setProperty(
																								"font-size",
																								"11px",
																							),
																							nt.style.setProperty(
																								"color",
																								"var(--vscode-textLink-foreground)",
																							),
																							(0, d.insert)(
																								ft,
																								(0, m.createComponent)(b.$Ibc, {
																									get text() {
																										return (
																											ge.debugInfo
																												.modelOutput ?? ""
																										);
																									},
																									get language() {
																										return F(
																											ge.relativeWorkspacePath,
																										);
																									},
																									get nonReactiveEditorOptions() {
																										return {
																											...l.$X0b.getEditorOptions(
																												V.configurationService,
																											),
																											readOnly: !0,
																											scrollbar: {
																												vertical: "hidden",
																												horizontal: "hidden",
																												handleMouseWheel: !1,
																											},
																											hover: { enabled: !1 },
																											minimap: { enabled: !1 },
																											lineNumbers: "off",
																										};
																									},
																								}),
																								null,
																							),
																							ft
																						);
																					},
																				}),
																				null,
																			),
																			(0, d.insert)(
																				Ce,
																				(0, m.createComponent)(r.Show, {
																					get when() {
																						return ge.debugInfo?.modelInput;
																					},
																					get children() {
																						const ft = O(),
																							bt = ft.firstChild;
																						return (
																							ft.style.setProperty(
																								"display",
																								"flex",
																							),
																							ft.style.setProperty(
																								"flex-direction",
																								"column",
																							),
																							ft.style.setProperty(
																								"gap",
																								"4px",
																							),
																							ft.style.setProperty(
																								"font-size",
																								"11px",
																							),
																							ft.style.setProperty(
																								"white-space",
																								"pre-wrap",
																							),
																							ft.style.setProperty(
																								"line-height",
																								"14px",
																							),
																							bt.style.setProperty(
																								"color",
																								"var(--vscode-textLink-foreground)",
																							),
																							(0, d.insert)(
																								ft,
																								() => ge.debugInfo.modelInput,
																								null,
																							),
																							ft
																						);
																					},
																				}),
																				null,
																			),
																			Ce
																		);
																	},
																}),
															),
															be
														);
													})();
												},
											}),
										];
									},
								}),
						})
					);
				}
			},
		)
