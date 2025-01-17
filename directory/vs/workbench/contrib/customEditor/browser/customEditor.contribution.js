import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/registry/common/platform.js';
import '../../../browser/editor.js';
import '../../../common/contributions.js';
import '../../../common/editor.js';
import './customEditorInputFactory.js';
import '../common/customEditor.js';
import '../../webviewPanel/browser/webviewEditor.js';
import './customEditorInput.js';
import './customEditors.js';
define(
			de[3879],
			he([1, 0, 102, 20, 30, 192, 55, 44, 3877, 625, 1025, 849, 3878]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, i.$lK)(r.$jnc, h.$CSc, i.InstantiationType.Delayed),
					w.$Io
						.as(d.$a1.EditorPane)
						.registerEditorPane(
							E.$vVb.create(u.$pnc, u.$pnc.ID, "Webview Editor"),
							[new t.$Ji(a.$tnc)],
						),
					w.$Io
						.as(d.$a1.EditorFactory)
						.registerEditorSerializer(m.$Xoc.ID, m.$Xoc),
					(0, C.$s6)(m.$Yoc.ID, m.$Yoc, C.WorkbenchPhase.BlockStartup);
			},
		),
		