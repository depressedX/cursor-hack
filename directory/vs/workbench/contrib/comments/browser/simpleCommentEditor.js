import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/browser/widget/codeEditor/codeEditorWidget.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/commands/common/commands.js';
import '../../codeEditor/browser/menuPreventer.js';
import '../../codeEditor/browser/dictation/editorDictation.js';
import '../../../../editor/contrib/contextmenu/browser/contextmenu.js';
import '../../../../editor/contrib/suggest/browser/suggestController.js';
import '../../../../editor/contrib/snippet/browser/snippetController2.js';
import '../../snippets/browser/tabCompletion.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../common/commentContextKeys.js';
import '../../../../editor/common/languages/languageConfigurationRegistry.js';
import '../../../../editor/common/services/languageFeatures.js';
import '../../../../base/common/numbers.js';
import '../../../../platform/tooltipService/common/tooltipService.js';
import '../../../../editor/contrib/dropOrPasteInto/browser/copyPasteController.js';
import '../../../../editor/contrib/codeAction/browser/codeActionController.js';
import '../../../../editor/contrib/dropOrPasteInto/browser/dropIntoEditorController.js';
import '../../../../editor/contrib/inlineCompletions/browser/controller/inlineCompletionsController.js';
import '../../../../editor/contrib/links/browser/links.js';
import '../../../../editor/contrib/message/browser/messageController.js';
import '../../codeEditor/browser/selectionClipboard.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../editor/contrib/hover/browser/contentHoverController2.js';
import '../../../../editor/contrib/hover/browser/marginHoverController.js';
define(
			de[846],
			he([
				1, 0, 38, 46, 65, 206, 8, 5, 31, 394, 1259, 375, 328, 254, 714, 35, 40,
				91, 505, 152, 69, 201, 308, 609, 500, 962, 501, 963, 440, 504, 11, 448,
				603,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$k3b = e.$j3b = e.$i3b = e.$h3b = void 0),
					(e.$l3b = A),
					(e.$h3b = new C.$5j("commentEditorFocused", !1)),
					(e.$i3b = 5 * 18),
					(e.$j3b = 25 * 18);
				let N = class extends E.$rwb {
					constructor(O, B, U, z, F, x, H, q, V, G, K, J, W) {
						const X = {
							contributions: [
								{
									id: r.$_Xb.ID,
									ctor: r.$_Xb,
									instantiation:
										i.EditorContributionInstantiation.BeforeFirstInteraction,
								},
								{
									id: a.$2Mb.ID,
									ctor: a.$2Mb,
									instantiation:
										i.EditorContributionInstantiation.BeforeFirstInteraction,
								},
								{
									id: h.$KDb.ID,
									ctor: h.$KDb,
									instantiation: i.EditorContributionInstantiation.Eager,
								},
								{
									id: c.$aDb.ID,
									ctor: c.$aDb,
									instantiation: i.EditorContributionInstantiation.Lazy,
								},
								{
									id: n.$wYb.ID,
									ctor: n.$wYb,
									instantiation: i.EditorContributionInstantiation.Eager,
								},
								{
									id: u.$_2b.ID,
									ctor: u.$_2b,
									instantiation: i.EditorContributionInstantiation.Lazy,
								},
								...i.EditorExtensionsRegistry.getSomeEditorContributions([
									$.$zAb.ID,
									S.$g3b.ID,
									T.$6Ob.ID,
									P.$Szb.ID,
									D.$whc.ID,
									M.$2Ob.ID,
									k.$aYb,
									I.$O1b.ID,
									v.$BBb.ID,
								]),
							],
							contextMenuId: L.$XX.SimpleEditorContext,
						};
						super(O, B, X, F, x, H, U, q, V, G, K, J, W),
							(this.kb = e.$h3b.bindTo(U)),
							(this.mc = f.CommentContextKeys.commentIsEmpty.bindTo(U)),
							this.mc.set(!this.getModel()?.getValueLength()),
							(this.$ = z),
							this.D(this.onDidFocusEditorWidget((Y) => this.kb.set(!0))),
							this.D(
								this.onDidChangeModelContent((Y) =>
									this.mc.set(!this.getModel()?.getValueLength()),
								),
							),
							this.D(this.onDidBlurEditorWidget((Y) => this.kb.reset()));
					}
					getParentThread() {
						return this.$;
					}
					nc() {
						return i.EditorExtensionsRegistry.getEditorActions();
					}
					static getEditorOptions(O) {
						return {
							wordWrap: "on",
							glyphMargin: !1,
							lineNumbers: "off",
							folding: !1,
							selectOnLineNumbers: !1,
							scrollbar: {
								vertical: "visible",
								verticalScrollbarSize: 14,
								horizontal: "auto",
								useShadows: !0,
								verticalHasArrows: !1,
								horizontalHasArrows: !1,
								alwaysConsumeMouseWheel: !1,
							},
							overviewRulerLanes: 2,
							lineDecorationsWidth: 0,
							scrollBeyondLastLine: !1,
							renderLineHighlight: "none",
							fixedOverflowWidgets: !0,
							acceptSuggestionOnEnter: "smart",
							minimap: { enabled: !1 },
							dropIntoEditor: { enabled: !0 },
							autoClosingBrackets: O.getValue("editor.autoClosingBrackets"),
							quickSuggestions: !1,
							accessibilitySupport: O.getValue("editor.accessibilitySupport"),
							fontFamily: O.getValue("editor.fontFamily"),
						};
					}
				};
				(e.$k3b = N),
					(e.$k3b = N =
						Ne(
							[
								j(4, d.$Li),
								j(5, w.$dtb),
								j(6, m.$ek),
								j(7, g.$iP),
								j(8, p.$4N),
								j(9, o.$XK),
								j(10, b.$aN),
								j(11, s.$k3),
								j(12, y.$5X),
							],
							N,
						));
				function A(R, O, B) {
					const U = O.getLayoutInfo(),
						z = O.getOption(t.EditorOption.lineHeight),
						F = O._getViewModel()?.getLineCount() * z;
					if (F > U.height || (F < U.height && B > e.$i3b)) {
						const x = Math.ceil((F - U.height) / z),
							H = U.height + z * x;
						return (0, l.$Zm)(
							H,
							e.$i3b,
							(0, l.$Zm)(R.getLayoutInfo().height - 90, e.$i3b, e.$j3b),
						);
					}
					return B;
				}
			},
		),
		