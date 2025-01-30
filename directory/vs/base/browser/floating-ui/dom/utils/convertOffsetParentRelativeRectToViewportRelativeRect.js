import '../../../../../../require.js';
import '../../../../../../exports.js';
import './getBoundingClientRect.js';
import './getDocumentElement.js';
import './getNodeScroll.js';
import './getScale.js';
import './is.js';
import './node.js';
define(
			de[2664],
			he([1, 0, 663, 538, 928, 929, 324, 594]),
			function (ce /*require*/,
 e /*exports*/,
 t /*getBoundingClientRect*/,
 i /*getDocumentElement*/,
 w /*getNodeScroll*/,
 E /*getScale*/,
 C /*is*/,
 d /*node*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Dmb = m);
				function m({ rect: r, offsetParent: u, strategy: a }) {
					const h = (0, C.$gmb)(u),
						c = (0, i.$xmb)(u);
					if (u === c) return r;
					let n = { scrollLeft: 0, scrollTop: 0 },
						g = { x: 1, y: 1 };
					const p = { x: 0, y: 0 };
					if (
						(h || (!h && a !== "fixed")) &&
						(((0, d.$fmb)(u) !== "body" || (0, C.$jmb)(c)) &&
							(n = (0, w.$Cmb)(u)),
						(0, C.$gmb)(u))
					) {
						const o = (0, t.$wmb)(u);
						(g = (0, E.$umb)(u)),
							(p.x = o.x + u.clientLeft),
							(p.y = o.y + u.clientTop);
					}
					return {
						width: r.width * g.x,
						height: r.height * g.y,
						x: r.x * g.x - n.scrollLeft * g.x + p.x,
						y: r.y * g.y - n.scrollTop * g.y + p.y,
					};
				}
			},
		),
		