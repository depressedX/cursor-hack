import '../../../../../../require.js';
import '../../../../../../exports.js';
import './getNearestOverflowAncestor.js';
import './getWindow.js';
import './is.js';
define(de[1163], he([1, 0, 2660, 537, 324]), function (ce /*require*/,
 e /*exports*/,
 t /*getNearestOverflowAncestor*/,
 i /*getWindow*/,
 w /*is*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Amb = E);
			function E(C, d = []) {
				const m = (0, t.$zmb)(C),
					r = m === C.ownerDocument?.body,
					u = (0, i.$cmb)(m);
				return r
					? d.concat(u, u.visualViewport || [], (0, w.$jmb)(m) ? m : [])
					: d.concat(m, E(m));
			}
		})
