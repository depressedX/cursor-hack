import '../../../../../../require.js';
import '../../../../../../exports.js';
import './getAlignment.js';
import './getLengthFromAxis.js';
import './getMainAxisFromPlacement.js';
import './getOppositePlacement.js';
define(
			de[1495],
			he([1, 0, 582, 1119, 583, 1121]),
			function (ce /*require*/,
 e /*exports*/,
 t /*getAlignment*/,
 i /*getLengthFromAxis*/,
 w /*getMainAxisFromPlacement*/,
 E /*getOppositePlacement*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Wlb = C);
				function C(d, m, r = !1) {
					const u = (0, t.$Llb)(d),
						a = (0, w.$Olb)(d),
						h = (0, i.$Mlb)(a);
					let c =
						a === "x"
							? u === (r ? "end" : "start")
								? "right"
								: "left"
							: u === "start"
								? "bottom"
								: "top";
					return (
						m.reference[h] > m.floating[h] && (c = (0, E.$Vlb)(c)),
						{ main: c, cross: (0, E.$Vlb)(c) }
					);
				}
			},
		),
		