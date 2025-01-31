import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/registry/common/platform.js';
import '../../../browser/editor.js';
import './bugbotEditorInput.js';
import './bugbotEditor.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../common/editor.js';
define(
			de[4263],
			he([1, 0, 30, 192, 1719, 4262, 102, 44]),
			function (ce /*require*/,
 e /*exports*/,
 t /*platform*/,
 i /*editor*/,
 w /*bugbotEditorInput*/,
 E /*bugbotEditor*/,
 C /*descriptors*/,
 d /*editor*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					t.$Io
						.as(d.$a1.EditorPane)
						.registerEditorPane(
							i.$vVb.create(E.$4zc, E.$4zc.ID, "Bug Bot Report"),
							[new C.$Ji(w.$jzc)],
						),
					t.$Io
						.as(d.$a1.EditorFactory)
						.registerEditorSerializer(w.$jzc.TypeID, w.$kzc);
			},
		)
