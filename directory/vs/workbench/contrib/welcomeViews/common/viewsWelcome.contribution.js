import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/contributions.js';
import './viewsWelcomeContribution.js';
import './viewsWelcomeExtensionPoint.js';
import '../../../services/extensions/common/extensionsRegistry.js';
define(
			de[3443],
			he([1, 0, 5, 52, 30, 55, 3316, 1786, 175]),
			function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/,
 i /*lifecycle*/,
 w /*platform*/,
 E /*contributions*/,
 C /*viewsWelcomeContribution*/,
 d /*viewsWelcomeExtensionPoint*/,
 m /*extensionsRegistry*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				const r = m.$n2.registerExtensionPoint(d.$AYc);
				let u = class {
					constructor(h) {
						h.createInstance(C.$BYc, r);
					}
				};
				(u = Ne([j(0, t.$Li)], u)),
					w.$Io
						.as(E.Extensions.Workbench)
						.registerWorkbenchContribution(u, i.LifecyclePhase.Restored);
			},
		),
		