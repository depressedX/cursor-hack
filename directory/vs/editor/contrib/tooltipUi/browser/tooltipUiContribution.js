import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../browser/editorExtensions.js';
import './tooltipUiController.js';
import '../../../../base/common/constants.js';
import '../../../../platform/actions/common/actions.js';
import '../../../browser/services/codeEditorService.js';
define(
			de[3167],
			he([1, 0, 46, 3166, 58, 11, 65]),
			function (ce /*require*/,
 e /*exports*/,
 t /*editorExtensions*/,
 i /*tooltipUiController*/,
 w /*constants*/,
 E /*actions*/,
 C /*codeEditorService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, E.$4X)(
						class extends E.$3X {
							constructor() {
								super({
									id: w.$NV,
									title: {
										value: "Cursor: Show Tooltip",
										original: "Cursor: Show Tooltip",
									},
									f1: !1,
								});
							}
							async run(m, r) {
								const { location: u, name: a, header: h, subheader: c } = r,
									g = m.get(C.$dtb).getActiveCodeEditor();
								g && i.$Mlc.get(g)?.show(u, a, h, c);
							}
						},
					),
					(0, t.$qtb)(
						i.$Mlc.ID,
						i.$Mlc,
						t.EditorContributionInstantiation.Eventually,
					);
			},
		),
		