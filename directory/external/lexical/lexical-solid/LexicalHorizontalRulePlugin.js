import '../../../require.js';
import '../../../exports.js';
import './LexicalComposerContext.js';
import './LexicalHorizontalRuleNode.js';
import '../lexical-utils/api.js';
import '../lexical/api.js';
import '../../solid/solid.js';
define(
			de[2602],
			he([1, 0, 181, 1564, 304, 164, 13]),
			function (ce /*require*/,
 e /*exports*/,
 t /*LexicalComposerContext*/,
 i /*LexicalHorizontalRuleNode*/,
 w /*api*/,
 E /*api*/,
 C /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.HorizontalRulePlugin = d);
				function d() {
					const [m] = (0, t.useLexicalComposerContext)();
					return (
						(0, C.onCleanup)(
							m.registerCommand(
								i.INSERT_HORIZONTAL_RULE_COMMAND,
								(r) => {
									const u = (0, E.$getSelection)();
									if (!(0, E.$isRangeSelection)(u)) return !1;
									if (u.focus.getNode() !== null) {
										const h = (0, i.$createHorizontalRuleNode)();
										(0, w.$insertNodeToNearestRoot)(h);
									}
									return !0;
								},
								E.COMMAND_PRIORITY_EDITOR,
							),
						),
						null
					);
				}
			},
		)
