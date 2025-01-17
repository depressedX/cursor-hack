import '../../../../../../require.js';
import '../../../../../../exports.js';
import './getCssDimensions.js';
import './is.js';
import './math.js';
import './unwrapElement.js';
define(
			de[929],
			he([1, 0, 1572, 324, 900, 1574]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tmb = void 0),
					(e.$umb = C),
					(e.$tmb = { x: 1, y: 1 });
				function C(d) {
					const m = (0, E.$smb)(d);
					if (!(0, i.$gmb)(m)) return e.$tmb;
					const r = m.getBoundingClientRect(),
						{ width: u, height: a, fallback: h } = (0, t.$rmb)(m);
					let c = (h ? (0, w.$qmb)(r.width) : r.width) / u,
						n = (h ? (0, w.$qmb)(r.height) : r.height) / a;
					return (
						(!c || !Number.isFinite(c)) && (c = 1),
						(!n || !Number.isFinite(n)) && (n = 1),
						{ x: c, y: n }
					);
				}
			},
		),
		