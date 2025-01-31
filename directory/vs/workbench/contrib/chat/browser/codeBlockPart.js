import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/formattedTextRenderer.js';
import '../../../../base/browser/ui/button/button.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/network.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/uri.js';
import '../../../../editor/browser/config/tabFocus.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/browser/widget/codeEditor/codeEditorWidget.js';
import '../../../../editor/browser/widget/diffEditor/diffEditorWidget.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/editorCommon.js';
import '../../../../editor/common/languages.js';
import '../../../../editor/common/model.js';
import '../../../../editor/common/model/textModelText.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/services/modelService.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../editor/contrib/bracketMatching/browser/bracketMatching.js';
import '../../../../editor/contrib/colorPicker/browser/colorDetector.js';
import '../../../../editor/contrib/contextmenu/browser/contextmenu.js';
import '../../../../editor/contrib/gotoSymbol/browser/link/goToDefinitionAtPosition.js';
import '../../../../editor/contrib/hover/browser/contentHoverController2.js';
import '../../../../editor/contrib/hover/browser/marginHoverController.js';
import '../../../../editor/contrib/links/browser/links.js';
import '../../../../editor/contrib/message/browser/messageController.js';
import '../../../../editor/contrib/semanticTokens/browser/viewportSemanticTokens.js';
import '../../../../editor/contrib/smartSelect/browser/smartSelect.js';
import '../../../../editor/contrib/wordHighlighter/browser/wordHighlighter.js';
import '../../../../nls.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../../../../platform/actions/browser/toolbar.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/instantiation/common/serviceCollection.js';
import '../../../../platform/label/common/label.js';
import '../../../../platform/opener/common/opener.js';
import '../../../browser/labels.js';
import '../../../common/contextkeys.js';
import '../../accessibility/browser/accessibilityConfiguration.js';
import '../common/chatContextKeys.js';
import '../common/chatViewModel.js';
import '../../codeEditor/browser/menuPreventer.js';
import '../../codeEditor/browser/selectionClipboard.js';
import '../../codeEditor/browser/simpleEditorOptions.js';
import '../../../../base/common/types.js';
import '../../../../css!vs/workbench/contrib/chat/browser/codeBlockPart.js';
define(
			de[845],
			he([
				1, 0, 7, 595, 183, 14, 6, 3, 23, 19, 9, 653, 46, 65, 206, 309, 38, 17,
				98, 74, 64, 1540, 67, 960, 42, 1684, 785, 375, 1037, 448, 603, 963, 440,
				956, 1646, 964, 4, 91, 173, 10, 8, 57, 22, 5, 128, 73, 41, 233, 100,
				130, 207, 283, 394, 504, 521, 28, 2391,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*formattedTextRenderer*/,
				w /*button*/,
				E /*codicons*/,
				C /*event*/,
				d /*lifecycle*/,
				m /*network*/,
				r /*resources*/,
				u /*uri*/,
				a /*tabFocus*/,
				h /*editorExtensions*/,
				c /*codeEditorService*/,
				n /*codeEditorWidget*/,
				g /*diffEditorWidget*/,
				p /*editorOptions*/,
				o /*range*/,
				f /*editorCommon*/,
				b /*languages*/,
				s /*model*/,
				l /*textModelText*/,
				y /*model*/,
				$ /*modelService*/,
				v /*resolverService*/,
				S /*bracketMatching*/,
				I /*colorDetector*/,
				T /*contextmenu*/,
				P /*goToDefinitionAtPosition*/,
				k /*contentHoverController2*/,
				L /*marginHoverController*/,
				D /*links*/,
				M /*messageController*/,
				N /*viewportSemanticTokens*/,
				A /*smartSelect*/,
				R /*wordHighlighter*/,
				O /*nls*/,
				B /*accessibility*/,
				U /*toolbar*/,
				z /*configuration*/,
				F /*contextkey*/,
				x /*dialogs*/,
				H /*files*/,
				q /*instantiation*/,
				V /*serviceCollection*/,
				G /*label*/,
				K /*opener*/,
				J /*labels*/,
				W /*contextkeys*/,
				X /*accessibilityConfiguration*/,
				Y /*chatContextKeys*/,
				ie /*chatViewModel*/,
				ne /*menuPreventer*/,
				ee /*selectionClipboard*/,
				_ /*simpleEditorOptions*/,
				te /*types*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$FYb = e.$EYb = e.$DYb = e.$CYb = e.$AYb = void 0),
					(e.$BYb = Z),
					(t = mt(t));
				const Q = t.$;
				e.$AYb = "vscode-local-file";
				function Z(pe) {
					let $e;
					try {
						$e = JSON.parse(pe);
					} catch {
						throw new Error("Could not parse code block local file data");
					}
					let ye;
					try {
						ye = u.URI.revive($e?.uri);
					} catch {
						throw new Error("Invalid code block local file data URI");
					}
					let ue;
					return (
						$e.range &&
							(ue = new o.$iL(
								$e.range.startLineNumber + 1,
								$e.range.startColumn + 1,
								$e.range.endLineNumber + 1,
								$e.range.endColumn + 1,
							)),
						{ uri: ye, range: ue }
					);
				}
				const se = 10;
				let re = class extends d.$1c {
					constructor($e, ye, ue, fe, me, ve, ge, be, Ce) {
						super(),
							(this.r = $e),
							(this.menuId = ye),
							(this.s = ge),
							(this.t = be),
							(this.u = Ce),
							(this.a = this.D(new C.$re())),
							(this.onDidChangeContentHeight = this.a.event),
							(this.j = 0),
							(this.m = this.D(new d.$Zc())),
							(this.n = !1),
							(this.element = Q(".interactive-result-code-block")),
							(this.q = this.D(me.createInstance(W.$BQb))),
							(this.c = this.D(ve.createScoped(this.element)));
						const Le = this.D(me.createChild(new V.$Ki([F.$6j, this.c]))),
							Fe = t.$fhb(this.element, Q(".interactive-result-editor"));
						this.editor = this.w(Le, Fe, {
							...(0, _.$xYb)(this.t),
							readOnly: !0,
							lineNumbers: "off",
							selectOnLineNumbers: !0,
							scrollBeyondLastLine: !1,
							lineDecorationsWidth: 8,
							dragAndDrop: !1,
							padding: { top: se, bottom: se },
							mouseWheelZoom: !1,
							scrollbar: { vertical: "hidden", alwaysConsumeMouseWheel: !1 },
							definitionLinkOpensInPeek: !1,
							gotoLocation: {
								multiple: "goto",
								multipleDeclarations: "goto",
								multipleDefinitions: "goto",
								multipleImplementations: "goto",
							},
							ariaLabel: (0, O.localize)(4716, null),
							overflowWidgetsDomNode: fe,
							...this.C(),
						});
						const Oe = t.$fhb(
								this.element,
								Q(".interactive-result-code-block-toolbar"),
							),
							xe = this.editor.contextKeyService.createScoped(Oe),
							He = this.D(Le.createChild(new V.$Ki([F.$6j, xe])));
						this.b = this.D(
							He.createInstance(U.$Tyb, Oe, ye, {
								menuOptions: { shouldForwardArgs: !0 },
							}),
						);
						const Ke = t.$fhb(this.element, Q(".interactive-result-vulns")),
							Je = t.$fhb(Ke, Q(".interactive-result-vulns-header", void 0));
						(this.f = this.D(
							new w.$oob(Je, {
								buttonBackground: void 0,
								buttonBorder: void 0,
								buttonForeground: void 0,
								buttonHoverBackground: void 0,
								buttonSecondaryBackground: void 0,
								buttonSecondaryForeground: void 0,
								buttonSecondaryHoverBackground: void 0,
								buttonSeparator: void 0,
								supportIcons: !0,
							}),
						)),
							(this.g = t.$fhb(Ke, Q("ul.interactive-result-vulns-list"))),
							this.D(
								this.f.onDidClick(() => {
									const Te = this.h.element;
									(Te.vulnerabilitiesListExpanded =
										!Te.vulnerabilitiesListExpanded),
										(this.f.label = this.I()),
										this.element.classList.toggle(
											"chat-vulnerabilities-collapsed",
											!Te.vulnerabilitiesListExpanded,
										),
										this.a.fire();
								}),
							),
							this.D(
								this.b.onDidChangeDropdownVisibility((Te) => {
									Oe.classList.toggle("force-visibility", Te);
								}),
							),
							this.z(),
							this.D(this.u.onDidChangeScreenReaderOptimized(() => this.z())),
							this.D(
								this.t.onDidChangeConfiguration((Te) => {
									Te.affectedKeys.has(X.AccessibilityVerbositySettingId.Chat) &&
										this.z();
								}),
							),
							this.D(
								this.r.onDidChange(() => {
									this.editor.updateOptions(this.C());
								}),
							),
							this.D(
								this.editor.onDidScrollChange((Te) => {
									this.j = Te.scrollWidth;
								}),
							),
							this.D(
								this.editor.onDidContentSizeChange((Te) => {
									Te.contentHeightChanged && this.a.fire();
								}),
							),
							this.D(
								this.editor.onDidBlurEditorWidget(() => {
									this.element.classList.remove("focused"),
										R.$rPb.get(this.editor)?.stopHighlighting(),
										this.G();
								}),
							),
							this.D(
								this.editor.onDidFocusEditorWidget(() => {
									this.element.classList.add("focused"),
										R.$rPb.get(this.editor)?.restoreViewState(!0);
								}),
							),
							ue.onDidScroll &&
								this.D(
									ue.onDidScroll((Te) => {
										this.G();
									}),
								);
					}
					dispose() {
						(this.n = !0), super.dispose();
					}
					get uri() {
						return this.editor.getModel()?.uri;
					}
					w($e, ye, ue) {
						return this.D(
							$e.createInstance(n.$rwb, ye, ue, {
								isSimpleWidget: !1,
								contributions:
									h.EditorExtensionsRegistry.getSomeEditorContributions([
										ne.$_Xb.ID,
										ee.$aYb,
										T.$2Mb.ID,
										R.$rPb.ID,
										N.$iPb.ID,
										S.$ezb.ID,
										A.$kPb.ID,
										k.$whc.ID,
										L.$2Ob.ID,
										M.$Szb.ID,
										P.$YOb.ID,
										I.$YBb.ID,
										D.$6Ob.ID,
									]),
							}),
						);
					}
					focus() {
						this.editor.focus();
					}
					y() {
						const $e = this.j > this.editor.getLayoutInfo().contentWidth,
							ye = this.editor.getLayoutInfo().horizontalScrollbarHeight,
							ue = $e ? Math.max(se - ye, 2) : se;
						this.editor.updateOptions({ padding: { top: se, bottom: ue } });
					}
					z() {
						const $e = this.b.getElement();
						this.u.isScreenReaderOptimized()
							? (($e.style.display = "block"),
								($e.ariaLabel = this.t.getValue(
									X.AccessibilityVerbositySettingId.Chat,
								)
									? (0, O.localize)(4717, null)
									: (0, O.localize)(4718, null)))
							: ($e.style.display = "");
					}
					C() {
						return {
							wordWrap: this.r.configuration.resultEditor.wordWrap,
							fontLigatures: this.r.configuration.resultEditor.fontLigatures,
							bracketPairColorization:
								this.r.configuration.resultEditor.bracketPairColorization,
							fontFamily:
								this.r.configuration.resultEditor.fontFamily === "default"
									? p.EDITOR_FONT_DEFAULTS.fontFamily
									: this.r.configuration.resultEditor.fontFamily,
							fontSize: this.r.configuration.resultEditor.fontSize,
							fontWeight: this.r.configuration.resultEditor.fontWeight,
							lineHeight: this.r.configuration.resultEditor.lineHeight,
						};
					}
					layout($e) {
						const ye = this.F();
						this.editor.layout({ width: $e - 2, height: ye }), this.y();
					}
					F() {
						if (this.h?.range) {
							const $e =
									this.h.range.endLineNumber - this.h.range.startLineNumber + 1,
								ye = this.editor.getOption(p.EditorOption.lineHeight);
							return $e * ye;
						}
						return this.editor.getContentHeight();
					}
					async render($e, ye, ue) {
						(this.h = $e),
							$e.parentContextKeyService &&
								this.c.updateParent($e.parentContextKeyService),
							this.r.configuration.resultEditor.wordWrap === "on" &&
								this.layout(ye),
							await this.H($e),
							!this.n &&
								(this.layout(ye),
								ue &&
									(this.m.clear(),
									this.m.add(
										this.editor.onDidFocusEditorWidget(() =>
											a.$rsb.setTabFocusMode(!0),
										),
									),
									this.m.add(
										this.editor.onDidBlurEditorWidget(() =>
											a.$rsb.setTabFocusMode(!1),
										),
									)),
								this.editor.updateOptions({
									ariaLabel: (0, O.localize)(4719, null, $e.codeBlockIndex + 1),
									readOnly: !ue,
								}),
								$e.hideToolbar
									? t.hide(this.b.getElement())
									: t.show(this.b.getElement()),
								$e.vulns?.length && (0, ie.$$Tb)($e.element)
									? (t.$9fb(this.g),
										this.element.classList.remove("no-vulns"),
										this.element.classList.toggle(
											"chat-vulnerabilities-collapsed",
											!$e.element.vulnerabilitiesListExpanded,
										),
										t.$fhb(
											this.g,
											...$e.vulns.map((fe) =>
												Q(
													"li",
													void 0,
													Q("span.chat-vuln-title", void 0, fe.title),
													" " + fe.description,
												),
											),
										),
										(this.f.label = this.I()))
									: this.element.classList.add("no-vulns"));
					}
					reset() {
						this.G();
					}
					G() {
						k.$whc.get(this.editor)?.hideContentHover(),
							L.$2Ob.get(this.editor)?.hideContentHover();
					}
					async H($e) {
						const ye = (await $e.textModel).textEditorModel;
						this.editor.setModel(ye),
							$e.range &&
								(this.editor.setSelection($e.range),
								this.editor.revealRangeInCenter(
									$e.range,
									f.ScrollType.Immediate,
								)),
							(this.b.context = {
								code: ye
									.getTextBuffer()
									.getValueInRange(
										$e.range ?? ye.getFullModelRange(),
										s.EndOfLinePreference.TextDefined,
									),
								codeBlockIndex: $e.codeBlockIndex,
								element: $e.element,
								languageId: ye.getLanguageId(),
							}),
							this.q.set(ye.uri);
					}
					I() {
						return !this.h || !this.h.vulns
							? ""
							: `${this.h.vulns.length > 1 ? ((0, O.localize))(4720, null, this.h.vulns.length) : ((0, O.localize))(4721, null, 1)} $(${((ue) => (ue.vulnerabilitiesListExpanded ? E.$ak.chevronDown : E.$ak.chevronRight))(this.h.element).id})`;
					}
				};
				(e.$CYb = re),
					(e.$CYb = re =
						Ne(
							[j(4, q.$Li), j(5, F.$6j), j(6, y.$QO), j(7, z.$gj), j(8, B.$XK)],
							re,
						));
				let le = class extends d.$1c {
					constructor($e, ye) {
						super(),
							(this.a = ye),
							this.D(
								$e.registerTextModelContentProvider(
									m.Schemas.vscodeChatCodeBlock,
									this,
								),
							);
					}
					async provideTextContent($e) {
						const ye = this.a.getModel($e);
						return ye || this.a.createModel("", null, $e);
					}
				};
				(e.$DYb = le), (e.$DYb = le = Ne([j(0, v.$MO), j(1, y.$QO)], le));
				let oe = class extends d.$1c {
					constructor($e, ye, ue, fe, me, ve, ge, be, Ce, Le, Fe) {
						super(),
							(this.n = $e),
							(this.menuId = ye),
							(this.q = ge),
							(this.r = be),
							(this.s = Ce),
							(this.t = Le),
							(this.u = Fe),
							(this.a = this.D(new C.$re())),
							(this.onDidChangeContentHeight = this.a.event),
							(this.j = this.B.add(new d.$2c())),
							(this.m = 0),
							(this.element = Q(".interactive-result-code-block")),
							this.element.classList.add("compare"),
							(this.h = t.$fhb(this.element, Q(".message"))),
							this.h.setAttribute("role", "status"),
							(this.h.tabIndex = 0),
							(this.b = this.D(ve.createScoped(this.element)));
						const Oe = this.D(me.createChild(new V.$Ki([F.$6j, this.b]))),
							xe = t.$fhb(
								this.element,
								Q(".interactive-result-header.show-file-icons"),
							),
							He = t.$fhb(this.element, Q(".interactive-result-editor"));
						(this.c = this.w(Oe, He, {
							...(0, _.$xYb)(this.r),
							lineNumbers: "on",
							selectOnLineNumbers: !0,
							scrollBeyondLastLine: !1,
							lineDecorationsWidth: 12,
							dragAndDrop: !1,
							padding: { top: se, bottom: se },
							mouseWheelZoom: !1,
							scrollbar: { vertical: "hidden", alwaysConsumeMouseWheel: !1 },
							definitionLinkOpensInPeek: !1,
							gotoLocation: {
								multiple: "goto",
								multipleDeclarations: "goto",
								multipleDefinitions: "goto",
								multipleImplementations: "goto",
							},
							ariaLabel: (0, O.localize)(4722, null),
							overflowWidgetsDomNode: fe,
							...this.C(),
						})),
							(this.f = this.D(
								Oe.createInstance(J.$vPb, xe, { supportIcons: !0 }),
							));
						const Ke = this.c
								.getModifiedEditor()
								.contextKeyService.createScoped(xe),
							Je = this.D(Oe.createChild(new V.$Ki([F.$6j, Ke])));
						(this.g = this.D(
							Je.createInstance(U.$Tyb, xe, ye, {
								menuOptions: { shouldForwardArgs: !0 },
							}),
						)),
							this.z(),
							this.D(this.s.onDidChangeScreenReaderOptimized(() => this.z())),
							this.D(
								this.r.onDidChangeConfiguration((Te) => {
									Te.affectedKeys.has(X.AccessibilityVerbositySettingId.Chat) &&
										this.z();
								}),
							),
							this.D(
								this.n.onDidChange(() => {
									this.c.updateOptions(this.C());
								}),
							),
							this.D(
								this.c.getModifiedEditor().onDidScrollChange((Te) => {
									this.m = Te.scrollWidth;
								}),
							),
							this.D(
								this.c.onDidContentSizeChange((Te) => {
									Te.contentHeightChanged && this.a.fire();
								}),
							),
							this.D(
								this.c.getModifiedEditor().onDidBlurEditorWidget(() => {
									this.element.classList.remove("focused"),
										R.$rPb.get(this.c.getModifiedEditor())?.stopHighlighting(),
										this.G();
								}),
							),
							this.D(
								this.c.getModifiedEditor().onDidFocusEditorWidget(() => {
									this.element.classList.add("focused"),
										R.$rPb
											.get(this.c.getModifiedEditor())
											?.restoreViewState(!0);
								}),
							),
							ue.onDidScroll &&
								this.D(
									ue.onDidScroll((Te) => {
										this.G();
									}),
								);
					}
					get uri() {
						return this.c.getModifiedEditor().getModel()?.uri;
					}
					w($e, ye, ue) {
						const fe = {
							isSimpleWidget: !1,
							contributions:
								h.EditorExtensionsRegistry.getSomeEditorContributions([
									ne.$_Xb.ID,
									ee.$aYb,
									T.$2Mb.ID,
									R.$rPb.ID,
									N.$iPb.ID,
									S.$ezb.ID,
									A.$kPb.ID,
									k.$whc.ID,
									L.$2Ob.ID,
									P.$YOb.ID,
								]),
						};
						return this.D(
							$e.createInstance(
								g.$3yb,
								ye,
								{
									scrollbar: {
										useShadows: !1,
										alwaysConsumeMouseWheel: !1,
										ignoreHorizontalScrollbarInContentHeight: !0,
									},
									renderMarginRevertIcon: !1,
									diffCodeLens: !1,
									scrollBeyondLastLine: !1,
									stickyScroll: { enabled: !1 },
									originalAriaLabel: (0, O.localize)(4723, null),
									modifiedAriaLabel: (0, O.localize)(4724, null),
									diffAlgorithm: "advanced",
									readOnly: !1,
									isInEmbeddedEditor: !0,
									useInlineViewWhenSpaceIsLimited: !0,
									experimental: { useTrueInlineView: !0 },
									renderSideBySideInlineBreakpoint: 300,
									renderOverviewRuler: !1,
									compactMode: !0,
									hideUnchangedRegions: { enabled: !0, contextLineCount: 1 },
									renderGutterMenu: !1,
									lineNumbersMinChars: 1,
									...ue,
								},
								{ originalEditor: fe, modifiedEditor: fe },
							),
						);
					}
					focus() {
						this.c.focus();
					}
					y() {
						const $e =
								this.m >
								this.c.getModifiedEditor().getLayoutInfo().contentWidth,
							ye = this.c
								.getModifiedEditor()
								.getLayoutInfo().horizontalScrollbarHeight,
							ue = $e ? Math.max(se - ye, 2) : se;
						this.c.updateOptions({ padding: { top: se, bottom: ue } });
					}
					z() {
						const $e = this.g.getElement();
						this.s.isScreenReaderOptimized()
							? (($e.style.display = "block"),
								($e.ariaLabel = this.r.getValue(
									X.AccessibilityVerbositySettingId.Chat,
								)
									? (0, O.localize)(4725, null)
									: (0, O.localize)(4726, null)))
							: ($e.style.display = "");
					}
					C() {
						return {
							wordWrap: this.n.configuration.resultEditor.wordWrap,
							fontLigatures: this.n.configuration.resultEditor.fontLigatures,
							bracketPairColorization:
								this.n.configuration.resultEditor.bracketPairColorization,
							fontFamily:
								this.n.configuration.resultEditor.fontFamily === "default"
									? p.EDITOR_FONT_DEFAULTS.fontFamily
									: this.n.configuration.resultEditor.fontFamily,
							fontSize: this.n.configuration.resultEditor.fontSize,
							fontWeight: this.n.configuration.resultEditor.fontWeight,
							lineHeight: this.n.configuration.resultEditor.lineHeight,
						};
					}
					layout($e) {
						const ye = this.F(),
							fe = { width: $e - 2, height: ye };
						(this.element.style.height = `${fe.height}px`),
							(this.element.style.width = `${fe.width}px`),
							this.c.layout(fe),
							this.y();
					}
					F() {
						return this.c.getModel()
							? this.c.getContentHeight()
							: t.$zgb(this.h);
					}
					async render($e, ye, ue) {
						$e.parentContextKeyService &&
							this.b.updateParent($e.parentContextKeyService),
							this.n.configuration.resultEditor.wordWrap === "on" &&
								this.layout(ye),
							await this.H($e, ue),
							this.layout(ye),
							this.c.updateOptions({ ariaLabel: (0, O.localize)(4727, null) }),
							this.f.element.setFile($e.edit.uri, {
								fileKind: H.FileKind.FILE,
								fileDecorations: { colors: !0, badges: !1 },
							});
					}
					reset() {
						this.G();
					}
					G() {
						k.$whc.get(this.c.getOriginalEditor())?.hideContentHover(),
							k.$whc.get(this.c.getModifiedEditor())?.hideContentHover(),
							L.$2Ob.get(this.c.getOriginalEditor())?.hideContentHover(),
							L.$2Ob.get(this.c.getModifiedEditor())?.hideContentHover();
					}
					async H($e, ye) {
						if (!(0, ie.$$Tb)($e.element)) return;
						const ue = !!($e.edit.state?.applied ?? 0);
						if (
							(Y.$Z1.bindTo(this.b).set(ue),
							this.element.classList.toggle("no-diff", ue),
							ue)
						) {
							(0, te.$vg)($e.edit.state?.applied);
							const me = this.t.getUriLabel($e.edit.uri, {
								relative: !0,
								noPrefix: !0,
							});
							let ve;
							$e.edit.state.applied === 1
								? (ve = (0, O.localize)(4728, null, me))
								: $e.edit.state.applied < 0
									? (ve = (0, O.localize)(4729, null, me))
									: (ve = (0, O.localize)(
											4730,
											null,
											$e.edit.state.applied,
											me,
										));
							const ge = (0, i.$kib)(ve, {
								renderCodeSegments: !0,
								actionHandler: {
									callback: () => {
										this.u.open($e.edit.uri, {
											fromUserGesture: !0,
											allowCommands: !1,
										});
									},
									disposables: this.B,
								},
							});
							t.$hhb(this.h, ge);
						}
						const fe = await $e.diffData;
						if (!ue && fe) {
							const me = this.c.createViewModel({
								original: fe.original,
								modified: fe.modified,
							});
							if ((await me.waitForDiff(), ye.isCancellationRequested)) return;
							const ve = C.Event.any(
								fe.original.onWillDispose,
								fe.modified.onWillDispose,
							)(() => {
								this.c.setModel(null);
							});
							this.c.setModel(me), (this.j.value = (0, d.$Xc)(ve, me));
						} else
							this.c.setModel(null), (this.j.value = void 0), this.a.fire();
						this.g.context = {
							edit: $e.edit,
							element: $e.element,
							diffEditor: this.c,
						};
					}
				};
				(e.$EYb = oe),
					(e.$EYb = oe =
						Ne(
							[
								j(4, q.$Li),
								j(5, F.$6j),
								j(6, y.$QO),
								j(7, z.$gj),
								j(8, B.$XK),
								j(9, G.$3N),
								j(10, K.$7rb),
							],
							oe,
						));
				let ae = class {
					constructor($e, ye, ue) {
						(this.b = $e),
							(this.c = ye),
							(this.d = ue),
							(this.a = new $.$1Mb());
					}
					async apply($e, ye, ue) {
						if (!$e.response.value.includes(ye) || ye.state?.applied) return;
						if (!ue)
							for (const me of this.c.listDiffEditors()) {
								if (!me.getContainerDomNode().isConnected) continue;
								const ve = me.getModel();
								if (
									!ve ||
									!(0, r.$gh)(ve.original.uri, ye.uri) ||
									ve.modified.uri.scheme !==
										m.Schemas.vscodeChatCodeCompareBlock
								) {
									ue = me;
									break;
								}
							}
						const fe = ue ? await this.f(ue, ye) : await this.g(ye);
						$e.setEditApplied(ye, fe);
					}
					async f($e, ye) {
						const ue = $e.getModel();
						if (!ue) return 0;
						const fe = $e.getDiffComputationResult();
						if (!fe || fe.identical || !(await this.h(ue.original, ye)))
							return 0;
						const me = new l.$iyb(ue.modified),
							ve = fe.changes2.map((ge) =>
								ge.toRangeMapping().toTextEdit(me).toSingleEditOperation(),
							);
						return (
							ue.original.pushStackElement(),
							ue.original.pushEditOperations(null, ve, () => null),
							ue.original.pushStackElement(),
							ve.length
						);
					}
					async g($e) {
						const ye = await this.b.createModelReference($e.uri);
						try {
							if (!(await this.h(ye.object.textEditorModel, $e))) return 0;
							ye.object.textEditorModel.pushStackElement();
							let ue = 0;
							for (const fe of $e.edits) {
								const me = fe.map(b.$iM.asEditOperation);
								ye.object.textEditorModel.pushEditOperations(
									null,
									me,
									() => null,
								),
									(ue += me.length);
							}
							return ye.object.textEditorModel.pushStackElement(), ue;
						} finally {
							ye.dispose();
						}
					}
					async h($e, ye) {
						return !(
							ye.state?.sha1 &&
							this.a.computeSHA1($e) &&
							this.a.computeSHA1($e) !== ye.state.sha1 &&
							!(
								await this.d.confirm({
									message: (0, O.localize)(4731, null),
									detail: (0, O.localize)(4732, null),
								})
							).confirmed
						);
					}
					discard($e, ye) {
						$e.response.value.includes(ye) &&
							(ye.state?.applied || $e.setEditApplied(ye, -1));
					}
				};
				(e.$FYb = ae),
					(e.$FYb = ae = Ne([j(0, v.$MO), j(1, c.$dtb), j(2, x.$GO)], ae));
			},
		)
