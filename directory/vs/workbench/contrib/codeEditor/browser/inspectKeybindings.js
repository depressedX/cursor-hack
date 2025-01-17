import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../services/editor/common/editorService.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../../platform/actions/common/actions.js';
define(
			de[3263],
			he([1, 0, 4, 39, 18, 99, 11]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				class d extends C.$3X {
					constructor() {
						super({
							id: "workbench.action.inspectKeyMappings",
							title: (0, t.localize2)(4880, "Inspect Key Mappings"),
							category: E.$ck.Developer,
							f1: !0,
						});
					}
					run(u, a) {
						const h = u.get(i.$uZ);
						u.get(w.$IY).openEditor({
							resource: void 0,
							contents: h._dumpDebugInfo(),
							options: { pinned: !0 },
						});
					}
				}
				(0, C.$4X)(d);
				class m extends C.$3X {
					constructor() {
						super({
							id: "workbench.action.inspectKeyMappingsJSON",
							title: (0, t.localize2)(4881, "Inspect Key Mappings (JSON)"),
							category: E.$ck.Developer,
							f1: !0,
						});
					}
					async run(u) {
						const a = u.get(w.$IY),
							h = u.get(i.$uZ);
						await a.openEditor({
							resource: void 0,
							contents: h._dumpDebugInfoJSON(),
							options: { pinned: !0 },
						});
					}
				}
				(0, C.$4X)(m);
			},
		),
		