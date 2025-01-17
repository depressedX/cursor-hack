import '../../../../require.js';
import '../../../../exports.js';
import './traceData.js';
define(de[2130], he([1, 0, 1452]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.getTraceMetaTags = i);
			function i() {
				return Object.entries((0, t.getTraceData)())
					.map(([w, E]) => `<meta name="${w}" content="${E}"/>`)
					.join(`
`);
			}
		});
	var Yi =
		(this && this.__exportStar) ||
		function (ce, e) {
			for (var t in ce)
				t !== "default" &&
					!Object.prototype.hasOwnProperty.call(e, t) &&
					Ns(e, ce, t);
		};
	