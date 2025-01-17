import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../utils/utils.js';
import './eventListener.js';
import '../../../../window.js';
define(de[2212], he([1, 0, 2, 302, 898, 75]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$blb = e.$alb = void 0);
			const C = (r, u) => {
					(0, i.keys)(u).forEach((a) => {
						a.startsWith("on") &&
							typeof u[a] == "function" &&
							(0, w.$8kb)(r, a.substring(2).toLowerCase(), u[a]);
					});
				},
				d = (r) => {
					if (t.isServer) return null;
					C(E.$Bfb, r);
				};
			e.$alb = d;
			const m = (r) => {
				if (t.isServer) return null;
				C(document, r);
			};
			e.$blb = m;
		});
	var Yi =
		(this && this.__exportStar) ||
		function (ce, e) {
			for (var t in ce)
				t !== "default" &&
					!Object.prototype.hasOwnProperty.call(e, t) &&
					Ns(e, ce, t);
		};
	