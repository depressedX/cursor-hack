import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/storage/common/storage.js';
define(
			de[832],
			he([1, 0, 20, 5, 10, 21, 21]),
			function (ce /*require*/,
 e /*exports*/,
 t /*extensions*/,
 i /*instantiation*/,
 w /*configuration*/,
 E /*storage*/,
 C /*storage*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$v0b = e.$u0b = void 0),
					(e.$u0b = (0, i.$Mi)("jsService"));
				const d =
					"workbench.contrib.onboarding.browser.gettingStarted.contribution.ts.firsttime";
				let m = class {
					constructor(u, a) {
						(this.b = u),
							(this.c = a),
							(this.a = "workbench.statusBar.visible");
					}
					activate() {
						this.c.get(d, C.StorageScope.APPLICATION, "true") === "true" &&
							(this.b.updateValue(this.a, !0),
							this.b.updateValue("window.commandCenter", 1));
					}
				};
				(e.$v0b = m),
					(e.$v0b = m = Ne([j(0, w.$gj), j(1, E.$lq)], m)),
					(0, t.$lK)(e.$u0b, m, t.InstantiationType.Eager);
			},
		)
