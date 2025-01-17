import '../../../../../../require.js';
import '../../../../../../exports.js';
import './getComputedStyle.js';
import './getDocumentElement.js';
import './getNodeScroll.js';
import './getWindowScrollBarX.js';
import './math.js';
define(
			de[2665],
			he([1, 0, 662, 538, 928, 1575, 900]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Fmb = d);
				function d(m) {
					const r = (0, i.$xmb)(m),
						u = (0, w.$Cmb)(m),
						a = m.ownerDocument.body,
						h = (0, C.max)(
							r.scrollWidth,
							r.clientWidth,
							a.scrollWidth,
							a.clientWidth,
						),
						c = (0, C.max)(
							r.scrollHeight,
							r.clientHeight,
							a.scrollHeight,
							a.clientHeight,
						);
					let n = -u.scrollLeft + (0, E.$Emb)(m);
					const g = -u.scrollTop;
					return (
						(0, t.$dmb)(a).direction === "rtl" &&
							(n += (0, C.max)(r.clientWidth, a.clientWidth) - h),
						{ width: h, height: c, x: n, y: g }
					);
				}
			},
		),
		