import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/contrib/clipboard/browser/clipboard.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import './webview.js';
import '../../webviewPanel/browser/webviewEditorInput.js';
import '../../../services/editor/common/editorService.js';
define(
			de[1803],
			he([1, 0, 7, 46, 787, 4, 11, 8, 355, 566, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$X4b = void 0),
					(E = mt(E));
				const a = 100;
				function h(c, n) {
					c?.addImplementation(a, "webview", (g) => {
						const o = g.get(m.$3Ib).activeWebview;
						if (o?.isFocused) return n(o), !0;
						if ((0, t.$Jgb)()?.classList.contains("action-menu-item")) {
							const f = g.get(u.$IY);
							if (f.activeEditor instanceof r.$W4b)
								return n(f.activeEditor.webview), !0;
						}
						return !1;
					});
				}
				h(i.$stb, (c) => c.undo()),
					h(i.$ttb, (c) => c.redo()),
					h(i.$utb, (c) => c.selectAll()),
					h(w.$BAb, (c) => c.copy()),
					h(w.$CAb, (c) => c.paste()),
					h(w.$AAb, (c) => c.cut()),
					(e.$X4b = "preventDefaultContextMenuItems"),
					w.$AAb &&
						C.$ZX.appendMenuItem(C.$XX.WebviewContext, {
							command: { id: w.$AAb.id, title: E.localize(11365, null) },
							group: "5_cutcopypaste",
							order: 1,
							when: d.$Kj.not(e.$X4b),
						}),
					w.$BAb &&
						C.$ZX.appendMenuItem(C.$XX.WebviewContext, {
							command: { id: w.$BAb.id, title: E.localize(11366, null) },
							group: "5_cutcopypaste",
							order: 2,
							when: d.$Kj.not(e.$X4b),
						}),
					w.$CAb &&
						C.$ZX.appendMenuItem(C.$XX.WebviewContext, {
							command: { id: w.$CAb.id, title: E.localize(11367, null) },
							group: "5_cutcopypaste",
							order: 3,
							when: d.$Kj.not(e.$X4b),
						});
			},
		),
		