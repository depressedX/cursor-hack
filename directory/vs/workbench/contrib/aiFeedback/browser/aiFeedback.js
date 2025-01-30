import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/layout/browser/layoutService.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/registry/common/platform.js';
import './entrypoint.js';
import '../../../common/contributions.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/commands/common/commands.js';
import './aiFeedbackOpenService.js';
import '../../../services/editor/common/editorService.js';
define(
			de[4312],
			he([1, 0, 5, 180, 3, 30, 4311, 55, 52, 31, 1705, 18]),
			function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/,
 i /*layoutService*/,
 w /*lifecycle*/,
 E /*platform*/,
 C /*entrypoint*/,
 d /*contributions*/,
 m /*lifecycle*/,
 r /*commands*/,
 u /*aiFeedbackOpenService*/,
 a /*editorService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let h = class extends w.$1c {
					constructor(n, g, p, o, f) {
						super(),
							(this.a = n),
							(this.b = g),
							(this.c = p),
							(this.f = o),
							(this.g = f),
							this.f.addPopupListener(this.renderPopup.bind(this)),
							this.f.addClosePopupListener(this.dispose.bind(this));
					}
					renderPopup(n, g, p) {
						console.log("renderPopup running in AI feedback popup handler");
						const o = (0, C.$YZc)(n.activeContainer, g, p, this.g, () =>
							o.dispose(),
						);
					}
				};
				(h = Ne(
					[j(0, i.$jEb), j(1, t.$Li), j(2, r.$ek), j(3, u.$ZZc), j(4, a.$IY)],
					h,
				)),
					E.$Io
						.as(d.Extensions.Workbench)
						.registerWorkbenchContribution(h, m.LifecyclePhase.Restored);
			},
		),
		