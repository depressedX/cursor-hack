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
import './commands/commands.js';
import './commands/devCommands.js';
import './mergeEditorInput.js';
import './view/mergeEditor.js';
import '../../../services/lifecycle/common/lifecycle.js';
import './mergeEditorSerializer.js';
define(
			de[3869],
			he([
				1, 0, 4, 11, 81, 102, 30, 192, 55, 44, 3867, 3868, 711, 1050, 52, 3690,
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
 u /*commands*/,
 a /*devCommands*/,
 h /*mergeEditorInput*/,
 c /*mergeEditor*/,
 n /*lifecycle*/,
 g /*mergeEditorSerializer*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					C.$Io
						.as(r.$a1.EditorPane)
						.registerEditorPane(
							d.$vVb.create(c.$TRc, c.$TRc.ID, (0, t.localize)(7589, null)),
							[new E.$Ji(h.$Enc)],
						),
					C.$Io
						.as(r.$a1.EditorFactory)
						.registerEditorSerializer(h.$Enc.ID, g.$hSc),
					C.$Io
						.as(w.$No.Configuration)
						.registerConfiguration({
							properties: {
								"mergeEditor.diffAlgorithm": {
									type: "string",
									enum: ["legacy", "advanced"],
									default: "advanced",
									markdownEnumDescriptions: [
										(0, t.localize)(7590, null),
										(0, t.localize)(7591, null),
									],
								},
								"mergeEditor.showDeletionMarkers": {
									type: "boolean",
									default: !0,
									description:
										"Controls if deletions in base or one of the inputs should be indicated by a vertical bar.",
								},
							},
						}),
					(0, i.$4X)(u.$4Rc),
					(0, i.$4X)(u.$XRc),
					(0, i.$4X)(u.$YRc),
					(0, i.$4X)(u.$WRc),
					(0, i.$4X)(u.$$Rc),
					(0, i.$4X)(u.$ZRc),
					(0, i.$4X)(u.$1Rc),
					(0, i.$4X)(u.$2Rc),
					(0, i.$4X)(u.$3Rc),
					(0, i.$4X)(u.$5Rc),
					(0, i.$4X)(u.$6Rc),
					(0, i.$4X)(u.$7Rc),
					(0, i.$4X)(u.$8Rc),
					(0, i.$4X)(u.$9Rc),
					(0, i.$4X)(u.$0Rc),
					(0, i.$4X)(u.$_Rc),
					(0, i.$4X)(u.$aSc),
					(0, i.$4X)(u.$bSc),
					(0, i.$4X)(u.$dSc),
					(0, i.$4X)(u.$cSc),
					(0, i.$4X)(a.$eSc),
					(0, i.$4X)(a.$fSc),
					(0, i.$4X)(a.$gSc),
					C.$Io
						.as(m.Extensions.Workbench)
						.registerWorkbenchContribution(c.$URc, n.LifecyclePhase.Restored),
					(0, m.$s6)(c.$VRc.ID, c.$VRc, m.WorkbenchPhase.BlockStartup);
			},
		)
