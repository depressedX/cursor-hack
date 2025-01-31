import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../services/editor/common/editorService.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/workspace/common/workspace.js';
define(
			de[3259],
			he([1, 0, 18, 9, 3, 5, 20, 25]),
			function (ce /*require*/,
 e /*exports*/,
 t /*editorService*/,
 i /*uri*/,
 w /*lifecycle*/,
 E /*instantiation*/,
 C /*extensions*/,
 d /*workspace*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vIb = e.$uIb = void 0),
					(e.$uIb = (0, E.$Mi)("currentFileService"));
				let m = class extends w.$1c {
					constructor(u, a) {
						super(), (this.a = u), (this.b = a);
					}
					getCurrentFile() {
						const u = this.a.activeEditorPane;
						if (!u) return null;
						const a = u.input?.resource;
						return !a || !(a instanceof i.URI)
							? null
							: { relativePath: this.b.asRelativePath(a) };
					}
				};
				(e.$vIb = m),
					(e.$vIb = m = Ne([j(0, t.$IY), j(1, d.$Vi)], m)),
					(0, C.$lK)(e.$uIb, m, C.InstantiationType.Delayed);
			},
		)
