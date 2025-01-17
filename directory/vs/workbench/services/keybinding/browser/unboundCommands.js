import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../base/common/arrays.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../platform/actions/common/actions.js';
define(de[1824], he([1, 0, 31, 24, 46, 11]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$pvc = C);
			function C(d) {
				const m = [],
					r = new Map(),
					u = (a, h) => {
						if (
							!r.has(a) &&
							(r.set(a, !0),
							!(a[0] === "_" || a.indexOf("vscode.") === 0) && d.get(a) !== !0)
						) {
							if (!h) {
								const c = t.$fk.getCommand(a);
								if (
									c &&
									typeof c.metadata == "object" &&
									(0, i.$Pb)(c.metadata.args)
								)
									return;
							}
							m.push(a);
						}
					};
				for (const a of E.$ZX.getMenuItems(E.$XX.CommandPalette))
					(0, E.$VX)(a) && u(a.command.id, !0);
				for (const a of w.EditorExtensionsRegistry.getEditorActions())
					u(a.id, !0);
				for (const a of t.$fk.getCommands().keys()) u(a, !1);
				return m;
			}
		}),
		