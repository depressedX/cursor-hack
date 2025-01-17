import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../common/editor.js';
import '../../../../base/common/lifecycle.js';
import '../../editor/common/editorService.js';
define(
			de[403],
			he([1, 0, 6, 5, 20, 44, 3, 18]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cZ = e.$bZ = void 0),
					(e.$bZ = (0, i.$Mi)("workingCopyEditorService"));
				let m = class extends C.$1c {
					constructor(u) {
						super(),
							(this.c = u),
							(this.a = this.D(new t.$re())),
							(this.onDidRegisterHandler = this.a.event),
							(this.b = new Set());
					}
					registerHandler(u) {
						return (
							this.b.add(u), this.a.fire(u), (0, C.$Yc)(() => this.b.delete(u))
						);
					}
					findEditor(u) {
						for (const a of this.c.getEditors(
							E.EditorsOrder.MOST_RECENTLY_ACTIVE,
						))
							if (this.f(u, a.editor)) return a;
					}
					f(u, a) {
						for (const h of this.b) if (h.isOpen(u, a)) return !0;
						return !1;
					}
				};
				(e.$cZ = m),
					(e.$cZ = m = Ne([j(0, d.$IY)], m)),
					(0, w.$lK)(e.$bZ, m, w.InstantiationType.Delayed);
			},
		),
		