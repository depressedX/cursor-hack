import '../../../../../../require.js';
import '../../../../../../exports.js';
import './getComputedStyle.js';
import './getWindow.js';
import './node.js';
define(de[324], he([1, 0, 662, 537, 594]), function (ce /*require*/,
 e /*exports*/,
 t /*getComputedStyle*/,
 i /*getWindow*/,
 w /*node*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$gmb = E),
				(e.$hmb = C),
				(e.$imb = d),
				(e.$jmb = m),
				(e.$kmb = r),
				(e.$lmb = u),
				(e.$mmb = a),
				(e.$nmb = h);
			function E(c) {
				return c instanceof (0, i.$cmb)(c).HTMLElement;
			}
			function C(c) {
				return c instanceof (0, i.$cmb)(c).Element;
			}
			function d(c) {
				if (typeof ShadowRoot > "u") return !1;
				const n = (0, i.$cmb)(c).ShadowRoot;
				return c instanceof n || c instanceof ShadowRoot;
			}
			function m(c) {
				const {
					overflow: n,
					overflowX: g,
					overflowY: p,
					display: o,
				} = (0, t.$dmb)(c);
				return (
					/auto|scroll|overlay|hidden|clip/.test(n + p + g) &&
					!["inline", "contents"].includes(o)
				);
			}
			function r(c) {
				return ["table", "td", "th"].includes((0, w.$fmb)(c));
			}
			function u(c) {
				const n = a(),
					g = (0, t.$dmb)(c);
				return (
					g.transform !== "none" ||
					g.perspective !== "none" ||
					(!n && (g.backdropFilter ? g.backdropFilter !== "none" : !1)) ||
					(!n && (g.filter ? g.filter !== "none" : !1)) ||
					["transform", "perspective", "filter"].some((p) =>
						(g.willChange || "").includes(p),
					) ||
					["paint", "layout", "strict", "content"].some((p) =>
						(g.contain || "").includes(p),
					)
				);
			}
			function a() {
				return typeof CSS > "u" || !CSS.supports
					? !1
					: CSS.supports("-webkit-backdrop-filter", "none");
			}
			function h(c) {
				return ["html", "body", "#document"].includes((0, w.$fmb)(c));
			}
		})
