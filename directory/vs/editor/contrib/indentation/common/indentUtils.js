define(de[1553], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$xic = t),
				(e.$yic = i);
			function t(w, E) {
				let C = 0;
				for (let d = 0; d < w.length; d++)
					w.charAt(d) === "	" ? (C += E) : C++;
				return C;
			}
			function i(w, E, C) {
				w = w < 0 ? 0 : w;
				let d = "";
				if (!C) {
					const m = Math.floor(w / E);
					w = w % E;
					for (let r = 0; r < m; r++) d += "	";
				}
				for (let m = 0; m < w; m++) d += " ";
				return d;
			}
		}),
		