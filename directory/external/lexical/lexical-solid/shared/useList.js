import '../../../../require.js';
import '../../../../exports.js';
import '../../lexical-list/api.js';
import '../../lexical-utils/api.js';
import '../../lexical/api.js';
import '../../../solid/solid.js';
define(
			de[2611],
			he([1, 0, 924, 304, 164, 13]),
			function (ce /*require*/,
 e /*exports*/,
 t /*api*/,
 i /*api*/,
 w /*api*/,
 E /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.useList = C);
				function C(d) {
					(0, E.onCleanup)(
						(0, i.mergeRegister)(
							d.registerCommand(
								t.INSERT_ORDERED_LIST_COMMAND,
								() => ((0, t.insertList)(d, "number"), !0),
								w.COMMAND_PRIORITY_LOW,
							),
							d.registerCommand(
								t.INSERT_UNORDERED_LIST_COMMAND,
								() => ((0, t.insertList)(d, "bullet"), !0),
								w.COMMAND_PRIORITY_LOW,
							),
							d.registerCommand(
								t.REMOVE_LIST_COMMAND,
								() => ((0, t.removeList)(d), !0),
								w.COMMAND_PRIORITY_LOW,
							),
							d.registerCommand(
								w.INSERT_PARAGRAPH_COMMAND,
								() => !!(0, t.$handleListInsertParagraph)(),
								w.COMMAND_PRIORITY_LOW,
							),
						),
					);
				}
			},
		),
		