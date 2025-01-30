import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/cursor/browser/aiEverythingProviderService.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/extensions.js';
define(
			de[1703],
			he([1, 0, 5, 280, 25, 3, 20]),
			function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/,
 i /*aiEverythingProviderService*/,
 w /*workspace*/,
 E /*lifecycle*/,
 C /*extensions*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$g0b = e.$f0b = e.$e0b = void 0),
					(e.$e0b = "everysphere_workspace_id"),
					(e.$f0b = (0, t.$Mi)("commitNotesService"));
				let d = class extends E.$1c {
					constructor(r, u) {
						super(),
							(this.a = r),
							(this.b = u),
							this.initialize().catch((a) => {});
					}
					getWorkspaceId() {
						return null;
					}
					async initialize() {}
				};
				(e.$g0b = d),
					(e.$g0b = d = Ne([j(0, i.$3Db), j(1, w.$Vi)], d)),
					(0, C.$lK)(e.$f0b, d, C.InstantiationType.Eager);
			},
		),
		