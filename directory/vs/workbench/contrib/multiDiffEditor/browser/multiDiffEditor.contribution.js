import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../platform/registry/common/platform.js';
import '../../../browser/editor.js';
import '../../../common/contributions.js';
import '../../../common/editor.js';
import './multiDiffEditor.js';
import './multiDiffEditorInput.js';
import './actions.js';
import './multiDiffSourceResolverService.js';
import '../../../../platform/instantiation/common/extensions.js';
import './scmMultiDiffSourceResolver.js';
define(
			de[1918],
			he([
				1, 0, 4, 11, 81, 102, 30, 192, 55, 44, 1883, 712, 3691, 800, 20, 1801,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*actions*/,
 w /*configurationRegistry*/,
 E /*descriptors*/,
 C /*platform*/,
 d /*editor*/,
 m /*contributions*/,
 r /*editor*/,
 u /*multiDiffEditor*/,
 a /*multiDiffEditorInput*/,
 h /*actions*/,
 c /*multiDiffSourceResolverService*/,
 n /*extensions*/,
 g /*scmMultiDiffSourceResolver*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, i.$4X)(h.$jSc),
					(0, i.$4X)(h.$kSc),
					(0, i.$4X)(h.$lSc),
					C.$Io
						.as(w.$No.Configuration)
						.registerConfiguration({
							properties: {
								"multiDiffEditor.experimental.enabled": {
									type: "boolean",
									default: !0,
									description: "Enable experimental multi diff editor.",
								},
							},
						}),
					(0, n.$lK)(c.$Inc, c.$Knc, n.InstantiationType.Delayed),
					(0, m.$s6)(a.$Mnc.ID, a.$Mnc, m.WorkbenchPhase.BlockStartup),
					C.$Io
						.as(r.$a1.EditorPane)
						.registerEditorPane(
							d.$vVb.create(u.$iSc, u.$iSc.ID, (0, t.localize)(7697, null)),
							[new E.$Ji(a.$Lnc)],
						),
					C.$Io
						.as(r.$a1.EditorFactory)
						.registerEditorSerializer(a.$Lnc.ID, a.$Nnc),
					(0, i.$4X)(g.$XPc),
					(0, m.$s6)(g.$WPc.ID, g.$WPc, m.WorkbenchPhase.BlockStartup);
			},
		),
		