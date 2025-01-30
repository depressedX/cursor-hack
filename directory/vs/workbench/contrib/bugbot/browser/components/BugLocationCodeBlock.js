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
import '../../../ui/browser/widgets/codeBlock.js';
import '../../../../../base/common/uri.js';
import '../../../../../base/common/lifecycle.js';
import '../../../controlCommon/browser/solid.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/themables.js';
import '../../../ui/browser/aiInput/plugins/mentions/pureIcon.js';
import '../../../../../base/common/path.js';
import '../../../../services/selectedContext/browser/utils.js';
import '../../../../services/workspaces/browser/sourceFilesService.js';
import '../../../../../base/common/uuid.js';
import '../../../../../../proto/aiserver/v1/bugbot_pb.js';
import '../../../../../base/common/keyCodes.js';
import '../utils.js';
import '../../../ui/browser/codeRenderers/diffCodeRender.js';
import '../../../ui/browser/hooks/useIsUsingFileIconTheme.js';
define(
			de[4182],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 312, 9, 3, 36, 14, 26, 156, 54, 299, 632,
				47, 642, 27, 1269, 4180, 428,
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
				u /*codeBlock*/,
				a /*uri*/,
				h /*lifecycle*/,
				c /*solid*/,
				n /*codicons*/,
				g /*themables*/,
				p /*pureIcon*/,
				o /*path*/,
				f /*utils*/,
				b /*sourceFilesService*/,
				s /*uuid*/,
				l /*bugbot_pb*/,
				y /*keyCodes*/,
				$ /*utils*/,
				v /*diffCodeRender*/,
				S /*useIsUsingFileIconTheme*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1zc = void 0);
				const I = (0, t.template)("<div>"),
					T = (0, t.template)('<div class="bugbot-clickable"><div>'),
					P = (0, t.template)(
						'<div><div></div><div></div><div class="bugbot-clickable"><div></div>Open',
					),
					k = (0, t.template)('<div class="bugbot-bug-location-code">'),
					L = (0, t.template)('<div tabindex="0">'),
					D = (A) => {
						const R = (0, c.$odc)(),
							O = {
								display: "flex",
								"align-items": "center",
								gap: "4px",
								padding: "0px 6px",
								cursor: "pointer",
								"font-size": "0.8em",
								"border-left":
									"1px solid var(--vscode-commandCenter-inactiveBorder)",
								"white-space": "nowrap",
							},
							B = (F) => {
								console.log("show diff"),
									A.showDiffCallback(),
									F.stopImmediatePropagation(),
									F.stopPropagation();
							},
							U = (F) => {
								R.bugbotService.openInEditorSideEffects(
									A.bugbotId,
									A.report.id,
									new l.$tv(A.location),
								),
									F.stopImmediatePropagation(),
									F.stopPropagation(),
									(0, f.$9gc)(R, {
										filePathOrUri:
											R.workspaceContextService.resolveRelativePath(
												A.location.file,
											),
										selection: {
											startLineNumber: A.location.startLine,
											startColumn: 1,
											endLineNumber: A.location.endLine,
											endColumn: 1e3,
										},
										openToSide: !0,
										fromGroup: A.delegate.group,
										preserveFocus: !1,
									});
							},
							z = (0, S.$b$b)();
						return (() => {
							const F = P(),
								x = F.firstChild,
								H = x.nextSibling,
								q = H.nextSibling,
								V = q.firstChild;
							return (
								F.addEventListener("click", U),
								F.style.setProperty("display", "flex"),
								F.style.setProperty("flex-direction", "row"),
								F.style.setProperty("align-items", "center"),
								F.style.setProperty(
									"border-bottom",
									"1px solid var(--vscode-editorWidget-border)",
								),
								F.style.setProperty("box-sizing", "border-box"),
								F.style.setProperty(
									"background-color",
									"var(--vscode-editor-background)",
								),
								F.style.setProperty("width", "100%"),
								F.style.setProperty("height", "22px"),
								F.style.setProperty("cursor", "pointer"),
								(0, d.insert)(
									F,
									(0, m.createComponent)(r.Show, {
										get when() {
											return z();
										},
										get children() {
											const G = I();
											return (
												G.style.setProperty("display", "flex"),
												G.style.setProperty("align-items", "center"),
												G.style.setProperty("padding-left", "2px"),
												G.style.setProperty("margin-right", "-4px"),
												(0, d.insert)(
													G,
													(0, m.createComponent)(p.$k$b, {
														get fileName() {
															return (0, o.$sc)(A.location.file);
														},
														get workspaceContextService() {
															return R.workspaceContextService;
														},
														get modelService() {
															return R.modelService;
														},
														get languageService() {
															return R.languageService;
														},
													}),
												),
												G
											);
										},
									}),
									x,
								),
								x.style.setProperty("font-size", "0.8em"),
								x.style.setProperty("margin-left", "4px"),
								x.style.setProperty("overflow", "hidden"),
								x.style.setProperty("text-overflow", "ellipsis"),
								(0, d.insert)(x, () =>
									(0, b.$K9b)(
										R.labelService.getUriLabel(
											R.workspaceContextService.resolveRelativePath(
												A.location.file,
											),
											{ relative: !0 },
										),
									),
								),
								H.style.setProperty("flex-grow", "1"),
								(0, d.insert)(
									F,
									(0, m.createComponent)(r.Show, {
										get when() {
											return A.canShowDiff;
										},
										get children() {
											const G = T(),
												K = G.firstChild;
											return (
												G.addEventListener("click", B),
												(0, C.style)(G, O),
												K.style.setProperty("font-size", "1em"),
												(0, d.insert)(
													G,
													() => (A.showDiff ? "Hide Diff" : "Show Diff"),
													null,
												),
												(0, E.effect)(() =>
													(0, w.className)(
														K,
														g.ThemeIcon.asClassName(n.$ak.diff),
													),
												),
												G
											);
										},
									}),
									q,
								),
								q.addEventListener("click", U),
								(0, C.style)(q, O),
								V.style.setProperty("font-size", "1em"),
								(0, E.effect)(() =>
									(0, w.className)(V, g.ThemeIcon.asClassName(n.$ak.goToFile)),
								),
								F
							);
						})();
					},
					M = (A) => {
						const [R, O] = (0, r.createSignal)(!1),
							B = () =>
								U.workspaceContextService.resolveRelativePath(A.location.file),
							U = (0, c.$odc)(),
							[z, F] = (0, r.createSignal)(300),
							[x, H] = (0, r.createSignal)(1),
							[q, V] = (0, r.createSignal)(1);
						return (() => {
							const G = k();
							return (
								(0, d.insert)(
									G,
									(0, m.createComponent)(D, {
										get bugbotId() {
											return A.bugbotId;
										},
										get report() {
											return A.report;
										},
										get location() {
											return A.location;
										},
										get delegate() {
											return A.delegate;
										},
										get showDiff() {
											return R();
										},
										showDiffCallback: () => O((K) => !K),
										get canShowDiff() {
											return (
												A.fileSnapshotPreDiff !== void 0 &&
												A.fileSnapshot !== void 0
											);
										},
									}),
									null,
								),
								(0, d.insert)(
									G,
									(0, m.createComponent)(r.Show, {
										get when() {
											return R();
										},
										get fallback() {
											return (0, m.createComponent)(N, {
												get content() {
													return ((0, $.$Pyc)(A.fileSnapshot) ?? []).join(`
`);
												},
												get startLine() {
													return A.location.startLine;
												},
												get endLine() {
													return A.location.endLine;
												},
												get uri() {
													return B();
												},
												setContainerHeight: F,
												setStartLine: H,
												setEndLine: V,
											});
										},
										get children() {
											return (0, m.createComponent)(v.$nzc, {
												get original() {
													return (
														(0, $.$Pyc)(A.fileSnapshotPreDiff) ?? []
													).join(`
`);
												},
												get modified() {
													return ((0, $.$Pyc)(A.fileSnapshot) ?? []).join(`
`);
												},
												get language() {
													return U.languageService.createByLanguageNameOrFilepathOrFirstLine(
														null,
														B(),
														void 0,
													).languageId;
												},
												get style() {
													return { height: `${z()}px` };
												},
												diffEditorOptions: {
													renderSideBySide: !0,
													scrollBeyondLastLine: !1,
													hideUnchangedRegions: { enabled: !1 },
												},
												get startLine() {
													return x();
												},
												get endLine() {
													return q();
												},
												shouldNotCollapse: !0,
												editorCallback: ({
													editor: K,
													modifiedModel: J,
													originalModel: W,
												}) => {},
												enableScrollOnFocus: !0,
											});
										},
									}),
									null,
								),
								G
							);
						})();
					};
				e.$1zc = M;
				const N = (A) => {
					let R;
					const [O, B] = (0, r.createSignal)(),
						U = new h.$Zc(),
						z = (0, c.$odc)(),
						F = async (V) => {
							if (((R = V), !R || O())) return;
							const G = 4,
								K = Math.max(1, A.startLine - G),
								J = A.endLine + G;
							try {
								const W = a.URI.parse(A.uri + (0, s.$9g)() + "-anysphere"),
									X = A.content,
									Y =
										z.languageService.createByLanguageNameOrFilepathOrFirstLine(
											null,
											A.uri,
											void 0,
										),
									ie = U.add(z.modelService.createModel(X, Y, W, !0)),
									ne = 19,
									ee = 10,
									_ = J - K + 1,
									te = Math.min(800, Math.max(300, _ * ne + ee * 2));
								R.style.height = `${te}px`;
								const Q = U.add(
									z.instantiationService.createInstance(
										u.$X0b,
										R,
										{
											lineNumbers: "on",
											lineNumbersMinChars: 6,
											scrollBeyondLastLine: !1,
											readOnly: !0,
											minimap: { enabled: !1 },
											scrollbar: {
												vertical: "hidden",
												horizontal: "hidden",
												handleMouseWheel: !1,
												useShadows: !1,
												verticalHasArrows: !1,
												horizontalHasArrows: !1,
												ignoreHorizontalScrollbarInContentHeight: !0,
											},
										},
										{ overwriteIsSimpleWidget: !1 },
									),
								);
								B(Q),
									Q.setModel(ie),
									Q.revealLinesNearTop(K, J),
									A.setStartLine(K),
									A.setEndLine(J),
									H(Q, ie),
									q(Q),
									x(R, Q),
									U.add(ie);
							} catch (W) {
								console.error("Failed to load file:", W);
							}
						},
						x = (V, G) => {
							const K = new ResizeObserver(() => {
								G.layout(),
									A.setContainerHeight((J) => Math.max(J, V.offsetHeight));
							});
							K.observe(V), U.add({ dispose: () => K.disconnect() });
						},
						H = (V, G) => {
							const K = Math.min(A.endLine, G.getLineCount()),
								J = Math.min(A.startLine, K),
								W = V.deltaDecorations(
									[],
									[
										{
											range: {
												startLineNumber: J,
												endLineNumber: K,
												startColumn: 1,
												endColumn: G.getLineMaxColumn(K),
											},
											options: {
												isWholeLine: !0,
												className: "bugbot-bug-highlight-line",
												description: "Bug Location",
											},
										},
									],
								);
							U.add({
								dispose: () => {
									V.deltaDecorations(W, []);
								},
							});
						},
						q = (V) => {
							U.add(
								V.onDidFocusEditorWidget(() => {
									V.updateOptions({
										scrollbar: {
											vertical: "visible",
											horizontal: "visible",
											handleMouseWheel: !0,
										},
									});
								}),
							),
								U.add(
									V.onDidBlurEditorWidget(() => {
										V.updateOptions({
											scrollbar: {
												vertical: "hidden",
												horizontal: "hidden",
												handleMouseWheel: !1,
											},
										});
									}),
								),
								U.add(
									V.onKeyDown((G) => {
										G.keyCode === y.KeyCode.Escape &&
											(R?.focus(),
											V.updateOptions({
												scrollbar: {
													vertical: "hidden",
													horizontal: "hidden",
													handleMouseWheel: !1,
												},
											}));
									}),
								);
						};
					return (
						(0, r.onCleanup)(() => {
							U.dispose();
						}),
						(() => {
							const V = L();
							return (
								(0, i.use)((G) => F(G), V),
								V.style.setProperty("outline", "none"),
								V
							);
						})()
					);
				};
			},
		),
		