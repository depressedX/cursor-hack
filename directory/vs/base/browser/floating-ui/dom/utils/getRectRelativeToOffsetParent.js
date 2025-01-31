import '../../../../../../require.js';
import '../../../../../../exports.js';
import './getBoundingClientRect.js';
import './getDocumentElement.js';
import './getNodeScroll.js';
import './getWindowScrollBarX.js';
import './is.js';
import './node.js';
define(
			de[2667],
			he([1, 0, 663, 538, 928, 1575, 324, 594]),
			function (ce /*require*/,
 e /*exports*/,
 t /*getBoundingClientRect*/,
 i /*getDocumentElement*/,
 w /*getNodeScroll*/,
 E /*getWindowScrollBarX*/,
 C /*is*/,
 d /*node*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Kmb = m);
				function m(r, u, a) {
					const h = (0, C.$gmb)(u),
						c = (0, i.$xmb)(u),
						n = a === "fixed",
						g = (0, t.$wmb)(r, !0, n, u);
					let p = { scrollLeft: 0, scrollTop: 0 };
					const o = { x: 0, y: 0 };
					if (h || (!h && !n))
						if (
							(((0, d.$fmb)(u) !== "body" || (0, C.$jmb)(c)) &&
								(p = (0, w.$Cmb)(u)),
							(0, C.$gmb)(u))
						) {
							const f = (0, t.$wmb)(u, !0, n, u);
							(o.x = f.x + u.clientLeft), (o.y = f.y + u.clientTop);
						} else c && (o.x = (0, E.$Emb)(c));
					return {
						x: g.left + p.scrollLeft - o.x,
						y: g.top + p.scrollTop - o.y,
						width: g.width,
						height: g.height,
					};
				}
			},
		)
