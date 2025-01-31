import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/extensions.js';
import './textMateTokenizationFeature.js';
import './textMateTokenizationFeatureImpl.js';
import '../../../common/contributions.js';
define(
			de[3725],
			he([1, 0, 20, 841, 3724, 55]),
			function (ce /*require*/,
 e /*exports*/,
 t /*extensions*/,
 i /*textMateTokenizationFeature*/,
 w /*textMateTokenizationFeatureImpl*/,
 E /*contributions*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let C = class {
					static {
						this.ID = "workbench.contrib.textMateTokenizationInstantiator";
					}
					constructor(m) {}
				};
				(C = Ne([j(0, i.$N6b)], C)),
					(0, t.$lK)(i.$N6b, w.$Kyc, t.InstantiationType.Eager),
					(0, E.$s6)(C.ID, C, E.WorkbenchPhase.BlockRestore);
			},
		)
