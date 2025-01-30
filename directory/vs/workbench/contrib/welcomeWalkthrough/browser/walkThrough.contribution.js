import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import './walkThroughInput.js';
import './walkThroughPart.js';
import './walkThroughActions.js';
import '../common/walkThroughContentProvider.js';
import './editor/editorWalkThrough.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/editor.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../platform/actions/common/actions.js';
import '../../../common/contributions.js';
import '../../../browser/editor.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
define(
			de[3873],
			he([1, 0, 4, 1277, 1811, 3317, 1276, 3283, 30, 44, 102, 11, 55, 192, 43]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*walkThroughInput*/,
 w /*walkThroughPart*/,
 E /*walkThroughActions*/,
 C /*walkThroughContentProvider*/,
 d /*editorWalkThrough*/,
 m /*platform*/,
 r /*editor*/,
 u /*descriptors*/,
 a /*actions*/,
 h /*contributions*/,
 c /*editor*/,
 n /*keybindingsRegistry*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					m.$Io
						.as(r.$a1.EditorPane)
						.registerEditorPane(
							c.$vVb.create(w.$rYc, w.$rYc.ID, (0, t.localize)(11660, null)),
							[new u.$Ji(i.$oYc)],
						),
					(0, a.$4X)(d.$xYc),
					m.$Io
						.as(r.$a1.EditorFactory)
						.registerEditorSerializer(d.$yYc.ID, d.$yYc),
					(0, h.$s6)(C.$nYc.ID, C.$nYc, { editorTypeId: w.$rYc.ID }),
					n.$TX.registerCommandAndKeybindingRule(E.$sYc),
					n.$TX.registerCommandAndKeybindingRule(E.$tYc),
					n.$TX.registerCommandAndKeybindingRule(E.$uYc),
					n.$TX.registerCommandAndKeybindingRule(E.$vYc),
					a.$ZX.appendMenuItem(a.$XX.MenubarHelpMenu, {
						group: "1_welcome",
						command: {
							id: "workbench.action.showInteractivePlayground",
							title: (0, t.localize)(11661, null),
						},
						order: 3,
					});
			},
		),
		