import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../common/contributions.js';
import '../../../../editor/browser/services/treeSitter/treeSitterParserService.js';
import '../../../../editor/common/services/treeSitterParserService.js';
import './treeSitterTokenizationFeature.js';
define(
			de[3743],
			he([1, 0, 20, 55, 2797, 763, 3742]),
			function (ce /*require*/,
 e /*exports*/,
 t /*extensions*/,
 i /*contributions*/,
 w /*treeSitterParserService*/,
 E /*treeSitterParserService*/,
 C /*treeSitterTokenizationFeature*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let d = class {
					static {
						this.ID = "workbench.contrib.treeSitterTokenizationInstantiator";
					}
					constructor(r, u) {}
				};
				(d = Ne([j(0, E.$nV), j(1, C.$NAc)], d)),
					(0, t.$lK)(E.$nV, w.$MAc, t.InstantiationType.Eager),
					(0, i.$s6)(d.ID, d, i.WorkbenchPhase.BlockRestore);
			},
		),
		