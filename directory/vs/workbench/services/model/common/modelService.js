import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/services/modelService.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/undoRedo/common/undoRedo.js';
import '../../path/common/pathService.js';
import '../../../../platform/instantiation/common/instantiation.js';
define(
			de[3586],
			he([1, 0, 67, 960, 125, 10, 20, 155, 165, 5]),
			function (ce /*require*/,
 e /*exports*/,
 t /*model*/,
 i /*modelService*/,
 w /*textResourceConfiguration*/,
 E /*configuration*/,
 C /*extensions*/,
 d /*undoRedo*/,
 m /*pathService*/,
 r /*instantiation*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Rvc = void 0);
				let u = class extends i.$ZMb {
					constructor(h, c, n, g, p) {
						super(h, c, n, p), (this.Q = g);
					}
					M(h) {
						return super.M(h) || h.scheme === this.Q.defaultUriScheme;
					}
				};
				(e.$Rvc = u),
					(e.$Rvc = u =
						Ne(
							[j(0, E.$gj), j(1, w.$YO), j(2, d.$GN), j(3, m.$I8), j(4, r.$Li)],
							u,
						)),
					(0, C.$lK)(t.$QO, u, C.InstantiationType.Delayed);
			},
		),
		