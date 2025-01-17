import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../browser/editorExtensions.js';
import '../../../browser/services/codeEditorService.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../contextmenu/browser/contextmenu.js';
import '../../../../platform/progress/common/progress.js';
import '../../../browser/widget/diffEditor/diffEditorWidget.js';
import '../../../../platform/accessibilitySignal/browser/accessibilitySignalService.js';
define(
			de[1689],
			he([1, 0, 46, 65, 8, 5, 375, 84, 309, 184]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zbc = e.$ybc = void 0),
					(e.$ybc = new w.$5j("commentEditorFocused", !1));
				let u = class extends m.$3yb {
					constructor(h, c, n, g, p, o, f) {
						const b = {
							originalEditor: {
								isSimpleWidget: !0,
								contributions:
									t.EditorExtensionsRegistry.getSomeEditorContributions([
										C.$2Mb.ID,
									]),
							},
							modifiedEditor: {
								isSimpleWidget: !0,
								contributions:
									t.EditorExtensionsRegistry.getSomeEditorContributions([
										C.$2Mb.ID,
									]),
							},
						};
						super(h, c, b, g, n, f, o, p);
					}
					db() {
						return t.EditorExtensionsRegistry.getEditorActions();
					}
					static getEditorOptions(h) {
						return {
							renderSideBySide: !1,
							renderMarginRevertIcon: !1,
							originalEditable: !1,
							diffCodeLens: !1,
							renderOverviewRuler: !1,
							readOnly: !0,
							wordWrap: "off",
							glyphMargin: !1,
							lineDecorationsWidth: 0,
							lineNumbersMinChars: 0,
							lineNumbers: "off",
							folding: !1,
							fontFamily: h.getValue("editor.fontFamily"),
							scrollbar: {
								vertical: "hidden",
								horizontal: "auto",
								verticalScrollbarSize: 0,
								handleMouseWheel: !0,
								alwaysConsumeMouseWheel: !1,
								useShadows: !0,
								verticalHasArrows: !1,
								horizontalHasArrows: !1,
								horizontalScrollbarSize: 10,
							},
							scrollBeyondLastLine: !1,
							renderLineHighlight: "none",
							renderWhitespace: "none",
							minimap: { enabled: !1 },
							quickSuggestions: !1,
							automaticLayout: !0,
							automaticLayoutIgnoreHeight: !0,
							guides: { indentation: !1 },
						};
					}
				};
				(e.$zbc = u),
					(e.$zbc = u =
						Ne(
							[
								j(2, E.$Li),
								j(3, w.$6j),
								j(4, d.$bO),
								j(5, r.$Owb),
								j(6, i.$dtb),
							],
							u,
						));
			},
		),
		