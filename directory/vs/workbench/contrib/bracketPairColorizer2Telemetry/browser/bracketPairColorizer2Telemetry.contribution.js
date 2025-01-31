import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/errors.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../common/contributions.js';
import '../../extensions/common/extensions.js';
import '../../../services/extensionManagement/common/extensionManagement.js';
import '../../../services/lifecycle/common/lifecycle.js';
define(
			de[3413],
			he([1, 0, 29, 10, 30, 32, 55, 141, 157, 52]),
			function (ce /*require*/,
 e /*exports*/,
 t /*errors*/,
 i /*configuration*/,
 w /*platform*/,
 E /*telemetry*/,
 C /*contributions*/,
 d /*extensions*/,
 m /*extensionManagement*/,
 r /*lifecycle*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let u = class {
					constructor(h, c, n) {
						(this.a = h), (this.b = c), (this.c = n), this.d().catch(t.$4);
					}
					async d() {
						const h = "coenraads.bracket-pair-colorizer-2";
						await this.b.queryLocal();
						const c = this.b.installed.find((p) => p.identifier.id === h);
						if (
							!c ||
							(c.enablementState !== m.EnablementState.EnabledGlobally &&
								c.enablementState !== m.EnablementState.EnabledWorkspace)
						)
							return;
						const g = !!this.a.getValue(
							"editor.bracketPairColorization.enabled",
						);
						this.c.publicLog2("bracketPairColorizerTwoUsage", {
							nativeColorizationEnabled: g,
						});
					}
				};
				(u = Ne([j(0, i.$gj), j(1, d.$MQb), j(2, E.$km)], u)),
					w.$Io
						.as(C.Extensions.Workbench)
						.registerWorkbenchContribution(u, r.LifecyclePhase.Restored);
			},
		)
