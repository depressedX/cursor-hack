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
import '../../../../../editor/browser/widget/codeEditor/codeEditorWidget.js';
define(
			de[3020],
			he([1, 0, 46, 65, 8, 5, 31, 394, 375, 35, 40, 91, 152, 69, 308, 206]),
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
 g /*codeEditorWidget*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vZc = e.$uZc = e.$tZc = void 0),
					(e.$tZc = new w.$5j("commentEditorFocused", !1)),
					(e.$uZc = 10);
				let p = class extends g.$rwb {
					constructor(f, b, s, l, y, $, v, S, I, T, P, k) {
						const L = {
							isSimpleWidget: !0,
							contributions:
								t.EditorExtensionsRegistry.getSomeEditorContributions([
									d.$_Xb.ID,
									m.$2Mb.ID,
								]),
						};
						super(f, b, L, s, l, y, $, v, S, I, T, P, k);
					}
					$() {
						return t.EditorExtensionsRegistry.getEditorActions();
					}
					static getEditorOptions(f) {
						return {
							wordWrap: "off",
							glyphMargin: !1,
							fontFamily: f.getValue("editor.fontFamily"),
							scrollbar: {
								vertical: "hidden",
								horizontal: "auto",
								verticalScrollbarSize: 0,
								handleMouseWheel: !0,
								alwaysConsumeMouseWheel: !1,
								useShadows: !0,
								verticalHasArrows: !1,
								horizontalHasArrows: !1,
								horizontalScrollbarSize: e.$uZc,
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
				(e.$vZc = p),
					(e.$vZc = p =
						Ne(
							[
								j(2, E.$Li),
								j(3, i.$dtb),
								j(4, C.$ek),
								j(5, w.$6j),
								j(6, r.$iP),
								j(7, u.$4N),
								j(8, a.$XK),
								j(9, h.$aN),
								j(10, c.$k3),
								j(11, n.$5X),
							],
							p,
						));
			},
		)
