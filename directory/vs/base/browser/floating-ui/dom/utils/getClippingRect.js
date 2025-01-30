import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../core/core.js';
import './getBoundingClientRect.js';
import './getComputedStyle.js';
import './getDocumentElement.js';
import './getDocumentRect.js';
import './getOverflowAncestors.js';
import './getParentNode.js';
import './getScale.js';
import './getViewportRect.js';
import './getVisualOffsets.js';
import './is.js';
import './math.js';
import './node.js';
define(
			de[2666],
			he([
				1, 0, 899, 663, 662, 538, 2665, 1163, 1162, 929, 2662, 1573, 324, 900,
				594,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*core*/,
 i /*getBoundingClientRect*/,
 w /*getComputedStyle*/,
 E /*getDocumentElement*/,
 C /*getDocumentRect*/,
 d /*getOverflowAncestors*/,
 m /*getParentNode*/,
 r /*getScale*/,
 u /*getViewportRect*/,
 a /*getVisualOffsets*/,
 h /*is*/,
 c /*math*/,
 n /*node*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Hmb = b);
				function g(s, l) {
					const y = (0, i.$wmb)(s, !0, l === "fixed"),
						$ = y.top + s.clientTop,
						v = y.left + s.clientLeft,
						S = (0, h.$gmb)(s) ? (0, r.$umb)(s) : { x: 1, y: 1 },
						I = s.clientWidth * S.x,
						T = s.clientHeight * S.y,
						P = v * S.x,
						k = $ * S.y;
					return { width: I, height: T, x: P, y: k };
				}
				function p(s, l, y) {
					let $;
					if (l === "viewport") $ = (0, u.$Gmb)(s, y);
					else if (l === "document") $ = (0, C.$Fmb)((0, E.$xmb)(s));
					else if ((0, h.$hmb)(l)) $ = g(l, y);
					else {
						const v = (0, a.$vmb)(s);
						$ = { ...l, x: l.x - v.x, y: l.y - v.y };
					}
					return (0, t.rectToClientRect)($);
				}
				function o(s, l) {
					const y = (0, m.$ymb)(s);
					return y === l || !(0, h.$hmb)(y) || (0, h.$nmb)(y)
						? !1
						: (0, w.$dmb)(y).position === "fixed" || o(y, l);
				}
				function f(s, l) {
					const y = l.get(s);
					if (y) return y;
					let $ = (0, d.$Amb)(s).filter(
							(T) => (0, h.$hmb)(T) && (0, n.$fmb)(T) !== "body",
						),
						v = null;
					const S = (0, w.$dmb)(s).position === "fixed";
					let I = S ? (0, m.$ymb)(s) : s;
					for (; (0, h.$hmb)(I) && !(0, h.$nmb)(I); ) {
						const T = (0, w.$dmb)(I),
							P = (0, h.$lmb)(I);
						!P && T.position === "fixed" && (v = null),
							(
								S
									? !P && !v
									: (!P &&
											T.position === "static" &&
											!!v &&
											["absolute", "fixed"].includes(v.position)) ||
										((0, h.$jmb)(I) && !P && o(s, I))
							)
								? ($ = $.filter((L) => L !== I))
								: (v = T),
							(I = (0, m.$ymb)(I));
					}
					return l.set(s, $), $;
				}
				function b({ element: s, boundary: l, rootBoundary: y, strategy: $ }) {
					const S = [
							...(l === "clippingAncestors" ? f(s, this._c) : [].concat(l)),
							y,
						],
						I = S[0],
						T = S.reduce(
							(P, k) => {
								const L = p(s, k, $);
								return (
									(P.top = (0, c.max)(L.top, P.top)),
									(P.right = (0, c.min)(L.right, P.right)),
									(P.bottom = (0, c.min)(L.bottom, P.bottom)),
									(P.left = (0, c.max)(L.left, P.left)),
									P
								);
							},
							p(s, I, $),
						);
					return {
						width: T.right - T.left,
						height: T.bottom - T.top,
						x: T.left,
						y: T.top,
					};
				}
			},
		),
		