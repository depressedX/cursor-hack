import '../../../require.js';
import '../../../exports.js';
import '../lexical-list/api.js';
import '../lexical-list/api.js';
import '../../solid/solid.js';
import './LexicalComposerContext.js';
import './shared/useList.js';
define(
			de[2612],
			he([1, 0, 924, 924, 13, 181, 2611]),
			function (ce /*require*/,
 e /*exports*/,
 t /*api*/,
 i /*api*/,
 w /*solid*/,
 E /*LexicalComposerContext*/,
 C /*useList*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ListPlugin = d);
				function d() {
					const [m] = (0, E.useLexicalComposerContext)();
					return (
						(0, w.createEffect)(() => {
							if (!m.hasNodes([i.ListNode, t.ListItemNode]))
								throw new Error(
									"ListPlugin: ListNode and/or ListItemNode not registered on editor",
								);
						}),
						(0, C.useList)(m),
						null
					);
				}
			},
		)
