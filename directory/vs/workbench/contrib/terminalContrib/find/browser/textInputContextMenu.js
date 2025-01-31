import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/browser/mouseEvent.js';
import '../../../../../base/common/actions.js';
import '../../../../../base/common/platform.js';
import '../../../../../nls.js';
define(
			de[3155],
			he([1, 0, 7, 168, 50, 12, 4]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*mouseEvent*/,
 w /*actions*/,
 E /*platform*/,
 C /*nls*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$SVc = d);
				function d(m, r, u, a) {
					const h = new i.$2fb(m, r),
						c = [];
					c.push(
						new w.$rj(
							"undo",
							(0, C.localize)(10522, null),
							void 0,
							!0,
							async () => (0, t.$Ogb)().document.execCommand("undo"),
						),
						new w.$rj(
							"redo",
							(0, C.localize)(10523, null),
							void 0,
							!0,
							async () => (0, t.$Ogb)().document.execCommand("redo"),
						),
						new w.$tj(),
						new w.$rj(
							"editor.action.clipboardCutAction",
							(0, C.localize)(10524, null),
							void 0,
							!0,
							async () => (0, t.$Ogb)().document.execCommand("cut"),
						),
						new w.$rj(
							"editor.action.clipboardCopyAction",
							(0, C.localize)(10525, null),
							void 0,
							!0,
							async () => (0, t.$Ogb)().document.execCommand("copy"),
						),
						new w.$rj(
							"editor.action.clipboardPasteAction",
							(0, C.localize)(10526, null),
							void 0,
							!0,
							async (n) => {
								if (E.$p) (0, t.$Ogb)().document.execCommand("paste");
								else {
									const g = await u.readText();
									if ((0, t.$2gb)(n) || (0, t.$3gb)(n)) {
										const p = n.selectionStart || 0,
											o = n.selectionEnd || 0;
										(n.value = `${n.value.substring(0, p)}${g}${n.value.substring(o, n.value.length)}`),
											(n.selectionStart = p + g.length),
											(n.selectionEnd = n.selectionStart);
									}
								}
							},
						),
						new w.$tj(),
						new w.$rj(
							"editor.action.selectAll",
							(0, C.localize)(10527, null),
							void 0,
							!0,
							async () => (0, t.$Ogb)().document.execCommand("selectAll"),
						),
					),
						a.showContextMenu({
							getAnchor: () => h,
							getActions: () => c,
							getActionsContext: () => r.target,
						});
				}
			},
		)
