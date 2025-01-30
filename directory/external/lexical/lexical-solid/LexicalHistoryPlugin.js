import '../../../require.js';
import '../../../exports.js';
import './LexicalComposerContext.js';
import './shared/useHistory.js';
import '../lexical-history/api.js';
define(de[2610], he([1, 0, 181, 1565, 922]), function (ce /*require*/,
 e /*exports*/,
 t /*LexicalComposerContext*/,
 i /*useHistory*/,
 w /*api*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.createEmptyHistoryState = void 0),
				(e.HistoryPlugin = E);
			function E(C) {
				const [d] = (0, t.useLexicalComposerContext)();
				return (0, i.useHistory)(d, () => C.externalHistoryState), null;
			}
			Object.defineProperty(e, "createEmptyHistoryState", {
				enumerable: !0,
				get: function () {
					return w.createEmptyHistoryState;
				},
			});
		}),
		