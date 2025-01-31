import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../core/core.js';
import './getScale.js';
import './getVisualOffsets.js';
import './getWindow.js';
import './is.js';
import './unwrapElement.js';
define(
			de[663],
			he([1, 0, 899, 929, 1573, 537, 324, 1574]),
			function (ce /*require*/,
 e /*exports*/,
 t /*core*/,
 i /*getScale*/,
 w /*getVisualOffsets*/,
 E /*getWindow*/,
 C /*is*/,
 d /*unwrapElement*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$wmb = m);
				function m(r, u = !1, a = !1, h) {
					const c = r.getBoundingClientRect(),
						n = (0, d.$smb)(r);
					let g = i.$tmb;
					u &&
						(h ? (0, C.$hmb)(h) && (g = (0, i.$umb)(h)) : (g = (0, i.$umb)(r)));
					const p = (0, w.$vmb)(n, a, h);
					let o = (c.left + p.x) / g.x,
						f = (c.top + p.y) / g.y,
						b = c.width / g.x,
						s = c.height / g.y;
					if (n) {
						const l = (0, E.$cmb)(n),
							y = h && (0, C.$hmb)(h) ? (0, E.$cmb)(h) : h;
						let $ = l.frameElement;
						for (; $ && h && y !== l; ) {
							const v = (0, i.$umb)($),
								S = $.getBoundingClientRect(),
								I = l.getComputedStyle($);
							(S.x += ($.clientLeft + parseFloat(I.paddingLeft)) * v.x),
								(S.y += ($.clientTop + parseFloat(I.paddingTop)) * v.y),
								(o *= v.x),
								(f *= v.y),
								(b *= v.x),
								(s *= v.y),
								(o += S.x),
								(f += S.y),
								($ = (0, E.$cmb)($).frameElement);
						}
					}
					return (0, t.rectToClientRect)({ width: b, height: s, x: o, y: f });
				}
			},
		)
