import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../editor/browser/editorExtensions.js';
import '../../../../../editor/browser/services/codeEditorService.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/commands/common/commands.js';
import '../../../../../editor/browser/editorBrowser.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/event.js';
import '../../../../../editor/common/languages.js';
import '../../../../../editor/common/services/languageFeatures.js';
import '../../../codeEditor/browser/menuPreventer.js';
import '../../../../../editor/contrib/contextmenu/browser/contextmenu.js';
import '../../../../../platform/theme/common/themeService.js';
import '../../../../../platform/notification/common/notification.js';
import '../../../../../platform/accessibility/common/accessibility.js';
import '../../../../../editor/common/languages/languageConfigurationRegistry.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/tooltipService/common/tooltipService.js';
import '../../../../../editor/contrib/dropOrPasteInto/browser/copyPasteController.js';
import '../../../../../editor/browser/widget/codeEditor/codeEditorWidget.js';
import '../../../../../editor/contrib/semanticTokens/browser/viewportSemanticTokens.js';
import '../../../../../editor/contrib/suggest/browser/suggestController.js';
import '../../../../../editor/contrib/snippet/browser/snippetController2.js';
import '../../../../../editor/common/core/range.js';
import '../../common/constants.js';
import '../../../../../base/common/uuid.js';
import '../../../../../editor/common/model.js';
import '../../common/suggestionProvider.js';
import '../../../../../editor/contrib/suggest/browser/suggest.js';
import './aiEditorBoxHoverContributions.js';
import '../../../../../editor/contrib/gotoSymbol/browser/peek/referencesController.js';
import '../../../../../editor/contrib/find/browser/findController.js';
import '../../../../../editor/contrib/gotoError/browser/gotoError.js';
import '../../../../../editor/contrib/gotoSymbol/browser/link/goToDefinitionAtPosition.js';
import '../../../../../editor/common/services/model.js';
define(
			de[1369],
			he([
				1, 0, 46, 65, 8, 5, 31, 56, 7, 6, 74, 69, 394, 375, 35, 40, 91, 152, 10,
				308, 609, 206, 956, 328, 254, 17, 1780, 47, 64, 3209, 373, 3189, 840,
				618, 857, 1037, 67,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*editorExtensions*/,
				i /*codeEditorService*/,
				w /*contextkey*/,
				E /*instantiation*/,
				C /*commands*/,
				d /*editorBrowser*/,
				m /*dom*/,
				r /*event*/,
				u /*languages*/,
				a /*languageFeatures*/,
				h /*menuPreventer*/,
				c /*contextmenu*/,
				n /*themeService*/,
				g /*notification*/,
				p /*accessibility*/,
				o /*languageConfigurationRegistry*/,
				f /*configuration*/,
				b /*tooltipService*/,
				s /*copyPasteController*/,
				l /*codeEditorWidget*/,
				y /*viewportSemanticTokens*/,
				$ /*suggestController*/,
				v /*snippetController2*/,
				S /*range*/,
				I /*constants*/,
				T /*uuid*/,
				P /*model*/,
				k /*suggestionProvider*/,
				L /*suggest*/,
				D /*aiEditorBoxHoverContributions*/,
				M /*referencesController*/,
				N /*findController*/,
				A /*gotoError*/,
				R /*goToDefinitionAtPosition*/,
				O /*model*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gAc = e.$fAc = void 0),
					(m = mt(m)),
					(u = mt(u));
				class B {
					constructor(F, x, H, q, V = {}) {
						(this.label = F),
							(this.description = x),
							(this.callback = H),
							(this.definition = q),
							(this.isActionLabel = V.isActionLabel ?? !1);
					}
				}
				e.$fAc = B;
				let U = class extends l.$rwb {
					static {
						this.kb = new Map();
					}
					constructor(F, x, H, q = "", V, G, K, J, W, X, Y, ie, ne, ee, _, te) {
						const Q = {
							contributions:
								t.EditorExtensionsRegistry.getSomeEditorContributions([
									h.$_Xb.ID,
									c.$2Mb.ID,
									s.$zAb.ID,
									$.$KDb.ID,
									v.$aDb.ID,
									N.$ufc.ID,
									A.$7hc.ID,
									M.$EOb.ID,
									R.$YOb.ID,
									...(H.enableSemanticSyntaxHighlighting ? [y.$iPb.ID] : []),
									...(H.enableHover ? [D.$eAc.ID] : []),
									...(H.customContributions ?? []),
								]),
						};
						super(F, x, Q, V, G, K, J, W, X, Y, ie, ne, ee),
							(this.wc = q),
							(this.xc = _),
							(this.yc = te),
							(this.mc = []),
							(this.nc = new Map()),
							(this.oc = []),
							(this.pc = new Set()),
							(this.qc = null),
							(this.rc = null),
							(this.sc = null),
							(this.tc = new Map()),
							(this.vc = new r.$re()),
							(this.onDidRemoveDecoration = this.vc.event),
							(this.Ac = (Z, se) => {
								const re = this,
									le = (ae, pe, $e, ye) => {
										if (re.getModel()) {
											const fe = $e.startColumn,
												me = fe + ae.trim().length,
												ve = new S.$iL(pe.lineNumber, fe, pe.lineNumber, me);
											return this.addDecoration(ve, ye);
										}
										return null;
									};
								return this.oc.map((ae) => {
									const pe = `@${ae.label}`,
										$e = ae.isActionLabel ? "@" : `@${ae.label}`,
										ye = this.getModel();
									if (!ye) throw new Error("No model");
									const fe =
											ye
												.getLineContent(Z.lineNumber)
												.slice(0, Z.column)
												.lastIndexOf("@") + 1,
										me = new S.$iL(Z.lineNumber, fe, Z.lineNumber, Z.column);
									return {
										label: pe,
										kind: u.CompletionItemKind.Keyword,
										insertText: $e,
										range: me,
										command: {
											id: I.$8zc,
											title: "Accept Suggestion",
											arguments: [
												() => {
													let ve = null;
													ae.isActionLabel ||
														(ve = le($e, Z, me, ae.definition)),
														ae.callback(ve);
												},
											],
										},
										detail: ae.description,
										sortText: pe,
									};
								});
							}),
							this.D(
								this.onDidChangeModelContent((Z) => {
									this.Dc(Z);
								}),
							),
							(this.pc = new Set([(0, k.$_zc)(this.Ac, (0, T.$9g)())]));
						for (const Z of this.pc)
							this.D(
								ne.completionProvider.register(
									{ scheme: "aiEditorBox-anysphere" },
									Z,
								),
							);
						this.D(
							this.onDidChangeModel(() => {
								this.Hc();
							}),
						),
							this.Gc(),
							this.Ic(),
							(this.uc = H.disableGoToDefinition ?? !1),
							this.uc ||
								this.D(
									ne.definitionProvider.register(
										{ scheme: "aiEditorBox-anysphere" },
										{
											provideDefinition: (Z, se, re) => {
												const le = this.Jc(se);
												if (le) {
													const oe = this.tc.get(le);
													if (oe) return [oe];
												}
												return [];
											},
										},
									),
								);
					}
					zc() {
						return t.EditorExtensionsRegistry.getEditorActions();
					}
					static getEditorOptions(F) {
						return {
							wordWrap: "on",
							glyphMargin: !1,
							lineNumbers: "off",
							lineDecorationsWidth: 0,
							lineNumbersMinChars: 0,
							folding: !1,
							fontLigatures: F.getValue("editor.fontLigatures"),
							fontFamily: F.getValue("editor.fontFamily"),
							fontSize: F.getValue("editor.fontSize"),
							lineHeight: F.getValue("editor.lineHeight"),
							scrollBeyondLastLine: !1,
							scrollbar: {
								vertical: "auto",
								horizontal: "auto",
								handleMouseWheel: !0,
								alwaysConsumeMouseWheel: !1,
								useShadows: !0,
								verticalHasArrows: !1,
								horizontalHasArrows: !1,
							},
							renderLineHighlight: "none",
							renderWhitespace: "none",
							minimap: { enabled: !1 },
							automaticLayout: !0,
							automaticLayoutIgnoreHeight: !0,
							guides: { indentation: !1 },
						};
					}
					isSuggestionMenuVisible() {
						return L.$YCb.Visible.getValue(this.contextKeyService) ?? !1;
					}
					updateSuggestions(F, x = !1) {
						(this.oc = F),
							this.oc.length > 0 &&
								(this.isSuggestionMenuVisible() || x) &&
								this.Bc();
					}
					removeDecorationByDecorationId(F, x = !1) {
						const H = this.getModel();
						if (H) {
							const q = H.getDecorationRange(F);
							q &&
								(x
									? this.removeDecorationPure(F)
									: this.removeDecorationContent(H, q, F));
						}
					}
					removeDecorationPure(F) {
						const x = this.getModel();
						x && x.deltaDecorations([F], []), this.pruneDecorationIdData(F);
					}
					removeDecorationContent(F, x, H) {
						F.pushEditOperations(null, [{ range: x, text: "" }], () => null),
							this.pruneDecorationIdData(H);
					}
					pruneDecorationIdData(F) {
						(this.mc = this.mc.filter((x) => x !== F)),
							this.nc.delete(F),
							this.tc.delete(F);
					}
					setDecorationDefinitions(F, x) {
						this.tc.set(F, x);
					}
					addDecoration(F, x) {
						const H = this.getModel();
						if (!H) return null;
						const q = [
								{
									range: F,
									options: {
										isWholeLine: !1,
										className: "suggestion-accepted-decoration",
										stickiness:
											P.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
										description: "suggestion-accepted",
									},
								},
							],
							[V] = H.deltaDecorations([], q);
						this.nc.set(V, H.getValueInRange(F)), this.mc.push(V);
						const G = x ?? { uri: H.uri, range: F };
						return this.tc.set(V, G), V;
					}
					Bc() {
						this.Fc().triggerSuggest(new Set(this.pc));
					}
					Cc(F, x) {
						F.pushEditOperations(
							null,
							[
								{
									range: new S.$iL(
										x.lineNumber,
										x.column,
										x.lineNumber,
										x.column,
									),
									text: " ",
								},
							],
							() => null,
						);
					}
					Dc(F) {
						const x = this.getModel();
						if (!x) return;
						const H = [];
						this.mc.forEach((q) => {
							const V = x.getDecorationRange(q);
							if (!V) {
								H.push(q);
								return;
							}
							const G = this.nc.get(q),
								K = x.getValueInRange(V);
							G !== K && H.push(q);
						}),
							H.length > 0 && this.Ec(H);
					}
					Ec(F) {
						const x = this.getModel();
						x &&
							(F.forEach((H) => {
								const q = x.getDecorationRange(H);
								this.nc.delete(H);
								const V = this.mc.indexOf(H);
								V > -1 && this.mc.splice(V, 1),
									this.vc.fire(H),
									this.tc.delete(H),
									q && this.removeDecorationContent(x, q, H);
							}),
							x.deltaDecorations(F, []));
					}
					Fc() {
						return this.getContribution($.$KDb.ID);
					}
					Gc() {
						if (!this.wc) return;
						const F = m.$(".ai-editor-placeholder");
						(F.textContent = this.wc),
							(F.className = "ai-editor-placeholder"),
							(F.style.position = "absolute"),
							(F.style.pointerEvents = "none"),
							(F.style.overflow = "hidden"),
							(F.style.textOverflow = "ellipsis"),
							(F.style.whiteSpace = "nowrap"),
							(F.style.top = "0"),
							(F.style.left = "0"),
							(F.style.color = "var(--vscode-input-placeholderForeground)"),
							(F.style.fontFamily = this.xc.getValue("editor.fontFamily")),
							(F.style.fontSize = `${this.xc.getValue("editor.fontSize")}px`),
							(F.style.opacity = "0.5"),
							(this.qc = {
								getId: () => "ai.editor.placeholder",
								getDomNode: () => F,
								getPosition: () => ({
									position: { lineNumber: 1, column: 1 },
									preference: [d.ContentWidgetPositionPreference.EXACT],
								}),
							});
					}
					Hc() {
						this.sc && (this.sc.dispose(), (this.sc = null)),
							(this.rc = this.getModel()),
							this.rc &&
								((this.sc = this.rc.onDidChangeContent(() => {
									this.Ic();
								})),
								this.Ic());
					}
					Ic() {
						if (!this.qc) return;
						const F = this.getModel(),
							x = this.qc.getDomNode().style;
						F && F.getValueLength() === 0 && x.display !== "block"
							? (this.addContentWidget(this.qc),
								(this.qc.getDomNode().style.display = "block"))
							: F &&
								F.getValueLength() > 0 &&
								x.display === "block" &&
								(this.removeContentWidget(this.qc),
								(this.qc.getDomNode().style.display = "none"));
					}
					Jc(F) {
						const x = this.getModel();
						if (!x) return null;
						const H = x.getDecorationsInRange({
							startLineNumber: F.lineNumber,
							startColumn: F.column,
							endLineNumber: F.lineNumber,
							endColumn: F.column,
						});
						for (const q of H)
							if (q.options.className === "suggestion-accepted-decoration")
								return q.id;
						return null;
					}
					dispose() {
						this.qc && this.removeContentWidget(this.qc), super.dispose();
					}
					static getOrCreateModel(F, x, H, q, V, G) {
						if (this.kb.has(x)) return this.kb.get(x);
						const K = F.createModel(H, q, V, !1);
						return this.kb.set(x, K), G?.(K), K;
					}
					static disposeModel(F) {
						const x = this.kb.get(F);
						x && (x.dispose(), this.kb.delete(F));
					}
				};
				(e.$gAc = U),
					(e.$gAc = U =
						Ne(
							[
								j(4, E.$Li),
								j(5, i.$dtb),
								j(6, C.$ek),
								j(7, w.$6j),
								j(8, n.$iP),
								j(9, g.$4N),
								j(10, p.$XK),
								j(11, o.$aN),
								j(12, a.$k3),
								j(13, b.$5X),
								j(14, f.$gj),
								j(15, O.$QO),
							],
							U,
						));
			},
		)
