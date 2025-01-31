import '../../../../../require.js';
import '../../../../../exports.js';
import './utils.js';
define(de[3209], he([1, 0, 3208]), function (ce /*require*/,
 e /*exports*/,
 t /*utils*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$_zc = i);
			function i(C, d) {
				return {
					_debugDisplayName: "ControlCommonSuggestionProvider" + d,
					triggerCharacters: ["@"],
					provideCompletionItems: (r, u, a, h) => {
						if (!w(r)) return { suggestions: [] };
						const c = E(r, u);
						return { suggestions: [...C(u, c)] };
					},
				};
			}
			function w(C) {
				return C.uri.scheme === "aiEditorBox-anysphere";
			}
			function E(C, d) {
				const r = C.getLineContent(d.lineNumber).substring(0, d.column),
					u = (0, t.$$zc)(r);
				return u
					? {
							startLineNumber: d.lineNumber,
							startColumn: d.column - u.replaceableString.length,
							endLineNumber: d.lineNumber,
							endColumn: d.column,
						}
					: {
							startLineNumber: d.lineNumber,
							startColumn: d.column,
							endLineNumber: d.lineNumber,
							endColumn: d.column,
						};
			}
		})
