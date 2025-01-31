import '../../../require.js';
import '../../../exports.js';
define(de[98], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.Handler = e.EditorType = e.ScrollType = void 0),
				(e.isThemeColor = i);
			var t;
			(function (E) {
				(E[(E.Smooth = 0)] = "Smooth"), (E[(E.Immediate = 1)] = "Immediate");
			})(t || (e.ScrollType = t = {}));
			function i(E) {
				return E && typeof E.id == "string";
			}
			e.EditorType = {
				ICodeEditor: "vs.editor.ICodeEditor",
				IDiffEditor: "vs.editor.IDiffEditor",
				InlineMultiDiffEditor: "cursor.editor.IInlineMultiDiffEditor",
			};
			var w;
			(function (E) {
				(E.CompositionStart = "compositionStart"),
					(E.CompositionEnd = "compositionEnd"),
					(E.Type = "type"),
					(E.ReplacePreviousChar = "replacePreviousChar"),
					(E.CompositionType = "compositionType"),
					(E.Paste = "paste"),
					(E.Cut = "cut");
			})(w || (e.Handler = w = {}));
		})
