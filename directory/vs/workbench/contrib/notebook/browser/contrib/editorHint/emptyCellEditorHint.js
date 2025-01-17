import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/network.js';
import '../../../../../../editor/browser/editorExtensions.js';
import '../../../../../../platform/commands/common/commands.js';
import '../../../../../../platform/configuration/common/configuration.js';
import '../../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../../platform/contextview/browser/contextView.js';
import '../../../../../../platform/hover/browser/hover.js';
import '../../../../../../platform/keybinding/common/keybinding.js';
import '../../../../../../platform/product/common/productService.js';
import '../../../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../../../platform/telemetry/common/telemetry.js';
import '../../../../codeEditor/browser/emptyTextEditorHint/emptyTextEditorHint.js';
import '../../notebookBrowser.js';
import '../../../../../services/editor/common/editorGroupsService.js';
import '../../../../../services/editor/common/editorService.js';
define(
			de[3984],
			he([1, 0, 23, 46, 31, 10, 8, 49, 72, 39, 62, 45, 32, 1933, 108, 66, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$KFc = void 0);
				let o = class extends c.$JFc {
					static {
						this.CONTRIB_ID = "notebook.editor.contrib.emptyCellEditorHint";
					}
					constructor(b, s, l, y, $, v, S, I, T, P, k, L) {
						super(b, l, y, $, v, S, I, T, P, k, L), (this.s = s);
						const D = (0, n.$eJb)(this.s.activeEditorPane);
						D && this.a.push(D.onDidChangeActiveCell(() => this.r()));
					}
					p() {
						return { clickable: !1 };
					}
					q() {
						if (!super.q()) return !1;
						const s = this.c.getModel();
						if (!s || !(s?.uri.scheme === t.Schemas.vscodeNotebookCell))
							return !1;
						const y = (0, n.$eJb)(this.s.activeEditorPane);
						return !(!y || y.getActiveCell()?.uri.fragment !== s.uri.fragment);
					}
				};
				(e.$KFc = o),
					(e.$KFc = o =
						Ne(
							[
								j(1, p.$IY),
								j(2, g.$EY),
								j(3, w.$ek),
								j(4, E.$gj),
								j(5, C.$6j),
								j(6, m.$Uyb),
								j(7, r.$uZ),
								j(8, a.$0zb),
								j(9, h.$km),
								j(10, u.$Bk),
								j(11, d.$Xxb),
							],
							o,
						)),
					(0, i.$qtb)(o.CONTRIB_ID, o, i.EditorContributionInstantiation.Eager);
			},
		),
		