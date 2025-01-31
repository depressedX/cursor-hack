import '../../../require.js';
import '../../../exports.js';
import '../../solid/solid.js';
define(de[181], he([1, 0, 13]), function (ce /*require*/,
 e /*exports*/,
 t /*solid*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.useLexicalComposerContext = e.LexicalComposerContext = void 0),
				(e.createLexicalComposerContext = i);
			function i(E, C) {
				let d = null;
				E != null && (d = E[1]);
				function m() {
					return C ?? (d != null ? d.getTheme() : null);
				}
				return { getTheme: m };
			}
			e.LexicalComposerContext = (0, t.createContext)(null);
			const w = () => {
				const E = (0, t.useContext)(e.LexicalComposerContext);
				if (!E)
					throw Error(
						"useLexicalComposerContext: cannot find a LexicalComposerContext",
					);
				return E;
			};
			e.useLexicalComposerContext = w;
		})
