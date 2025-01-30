import '../../../../../../require.js';
import '../../../../../../exports.js';
import './getComputedStyle.js';
import './getParentNode.js';
import './getWindow.js';
import './is.js';
import './node.js';
define(
			de[2661],
			he([1, 0, 662, 1162, 537, 324, 594]),
			function (ce /*require*/,
 e /*exports*/,
 t /*getComputedStyle*/,
 i /*getParentNode*/,
 w /*getWindow*/,
 E /*is*/,
 C /*node*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Jmb = r);
				function d(u, a) {
					return !(0, E.$gmb)(u) || (0, t.$dmb)(u).position === "fixed"
						? null
						: a
							? a(u)
							: u.offsetParent;
				}
				function m(u) {
					let a = (0, i.$ymb)(u);
					for (; (0, E.$gmb)(a) && !(0, E.$nmb)(a); ) {
						if ((0, E.$lmb)(a)) return a;
						a = (0, i.$ymb)(a);
					}
					return null;
				}
				function r(u, a) {
					const h = (0, w.$cmb)(u);
					if (!(0, E.$gmb)(u)) return h;
					let c = d(u, a);
					for (; c && (0, E.$kmb)(c) && (0, t.$dmb)(c).position === "static"; )
						c = d(c, a);
					return c &&
						((0, C.$fmb)(c) === "html" ||
							((0, C.$fmb)(c) === "body" &&
								(0, t.$dmb)(c).position === "static" &&
								!(0, E.$lmb)(c)))
						? h
						: c || m(u) || h;
				}
			},
		),
		