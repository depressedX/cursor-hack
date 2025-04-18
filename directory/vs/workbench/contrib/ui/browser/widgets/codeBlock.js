import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../editor/browser/editorExtensions.js';
import '../../../../../editor/browser/services/codeEditorService.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/commands/common/commands.js';
import '../../../codeEditor/browser/menuPreventer.js';
import '../../../../../editor/contrib/contextmenu/browser/contextmenu.js';
import '../../../../../platform/theme/common/themeService.js';
import '../../../../../platform/notification/common/notification.js';
import '../../../../../platform/accessibility/common/accessibility.js';
import '../../../../../editor/common/languages/languageConfigurationRegistry.js';
import '../../../../../editor/common/services/languageFeatures.js';
import '../../../../../platform/tooltipService/common/tooltipService.js';
import '../../../../../editor/contrib/dropOrPasteInto/browser/copyPasteController.js';
import '../../../../../editor/browser/widget/codeEditor/codeEditorWidget.js';
import '../../../../../editor/contrib/semanticTokens/browser/viewportSemanticTokens.js';
define(
			de[312],
			he([
				1, 0, 46, 65, 8, 5, 31, 394, 375, 35, 40, 91, 152, 69, 308, 609, 206,
				956,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*editorExtensions*/,
 i /*codeEditorService*/,
 w /*contextkey*/,
 E /*instantiation*/,
 C /*commands*/,
 d /*menuPreventer*/,
 m /*contextmenu*/,
 r /*themeService*/,
 u /*notification*/,
 a /*accessibility*/,
 h /*languageConfigurationRegistry*/,
 c /*languageFeatures*/,
 n /*tooltipService*/,
 g /*copyPasteController*/,
 p /*codeEditorWidget*/,
 o /*viewportSemanticTokens*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$X0b = e.$W0b = e.$V0b = void 0),
					(e.$V0b = new w.$5j("commentEditorFocused", !1)),
					(e.$W0b = 10);
				let f = class extends p.$rwb {
					constructor(s, l, y, $, v, S, I, T, P, k, L, D, M) {
						const N = {
							isSimpleWidget: y.overwriteIsSimpleWidget ?? !0,
							isChatCodeblock: !0,
							isHallucinatedFunctionPreviewBox:
								y.isHallucinatedFunctionPreviewBox,
							cursorCodeBlockType: y.isHallucinatedFunctionPreviewBox
								? "hallucinatedFunctionPreviewBox"
								: "chatCodeblock",
							contributions:
								t.EditorExtensionsRegistry.getSomeEditorContributions([
									d.$_Xb.ID,
									m.$2Mb.ID,
									g.$zAb.ID,
									...(y.enableSemanticSyntaxHighlighting ? [o.$iPb.ID] : []),
									...(y.customContributions ?? []),
								]),
						};
						super(s, l, N, $, v, S, I, T, P, k, L, D, M);
					}
					$() {
						return t.EditorExtensionsRegistry.getEditorActions();
					}
					static getEditorOptions(s) {
						return {
							readOnly: !0,
							wordWrap: "off",
							wordWrapOverride1: "off",
							wordWrapOverride2: "off",
							glyphMargin: !1,
							lineDecorationsWidth: 0,
							lineNumbersMinChars: 0,
							lineNumbers: "off",
							folding: !1,
							fontFamily: s.getValue("editor.fontFamily"),
							fontLigatures: s.getValue("editor.fontLigatures"),
							fontSize: s.getValue("editor.fontSize"),
							lineHeight: s.getValue("editor.lineHeight"),
							scrollbar: {
								vertical: "hidden",
								horizontal: "auto",
								verticalScrollbarSize: 0,
								handleMouseWheel: !0,
								alwaysConsumeMouseWheel: !1,
								useShadows: !0,
								verticalHasArrows: !1,
								horizontalHasArrows: !1,
								horizontalScrollbarSize: e.$W0b,
							},
							scrollBeyondLastLine: !1,
							renderLineHighlight: "none",
							renderWhitespace: "none",
							minimap: { enabled: !1 },
							quickSuggestions: !1,
							automaticLayout: !1,
							automaticLayoutIgnoreHeight: !0,
							guides: { indentation: !1 },
						};
					}
				};
				(e.$X0b = f),
					(e.$X0b = f =
						Ne(
							[
								j(3, E.$Li),
								j(4, i.$dtb),
								j(5, C.$ek),
								j(6, w.$6j),
								j(7, r.$iP),
								j(8, u.$4N),
								j(9, a.$XK),
								j(10, h.$aN),
								j(11, c.$k3),
								j(12, n.$5X),
							],
							f,
						));
			},
		)
