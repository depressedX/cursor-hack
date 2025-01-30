import '../../../../../../require.js';
import '../../../../../../exports.js';
import './getAlignment.js';
import './getOppositeAlignmentPlacement.js';
import './getSide.js';
define(de[2202], he([1, 0, 582, 1120, 487]), function (ce /*require*/,
 e /*exports*/,
 t /*getAlignment*/,
 i /*getOppositeAlignmentPlacement*/,
 w /*getSide*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$2lb = C);
			function E(d, m, r) {
				const u = ["left", "right"],
					a = ["right", "left"],
					h = ["top", "bottom"],
					c = ["bottom", "top"];
				switch (d) {
					case "top":
					case "bottom":
						return r ? (m ? a : u) : m ? u : a;
					case "left":
					case "right":
						return m ? h : c;
					default:
						return [];
				}
			}
			function C(d, m, r, u) {
				const a = (0, t.$Llb)(d);
				let h = E((0, w.$Nlb)(d), r === "start", u);
				return (
					a &&
						((h = h.map((c) => `${c}-${a}`)),
						m && (h = h.concat(h.map(i.$Xlb)))),
					h
				);
			}
		}),
		