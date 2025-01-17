import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../chatEditorInput.js';
import '../../../../services/editor/common/editorService.js';
define(de[1288], he([1, 0, 552, 18]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$1Yb = w);
			async function w(E, C) {
				const d = E.get(i.$IY);
				if (!C) {
					const m = d.activeEditor;
					C = m instanceof t.$cMb ? m : void 0;
				}
				if (C instanceof t.$cMb) {
					const m = d.findEditors(C.resource)[0];
					await d.replaceEditors(
						[
							{
								editor: C,
								replacement: {
									resource: t.$cMb.getNewEditorUri(),
									options: { pinned: !0 },
								},
							},
						],
						m.groupId,
					);
				}
			}
		}),
		