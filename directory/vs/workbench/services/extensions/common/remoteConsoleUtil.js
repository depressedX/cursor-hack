define(de[3377], he([1, 0, 1560]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Smc = i),
				(e.$Tmc = w);
			function i(E, C, d = null) {
				const m = (0, t.$Gr)(C).args;
				let r = m.shift();
				if (typeof r == "string")
					switch (
						(C.severity || (C.severity = "info"),
						d &&
							(/^\[/.test(d) || (d = `[${d}]`),
							/ $/.test(d) || (d = `${d} `),
							(r = d + r)),
						C.severity)
					) {
						case "log":
						case "info":
							E.info(r, ...m);
							break;
						case "warn":
							E.warn(r, ...m);
							break;
						case "error":
							E.error(r, ...m);
							break;
					}
			}
			function w(E, C, d) {
				const m = (0, t.$Gr)(C).args,
					r = m.shift();
				typeof r != "string" ||
					C.severity !== "error" ||
					(/^\[/.test(d) || (d = `[${d}]`),
					/ $/.test(d) || (d = `${d} `),
					E.error(d + r, ...m));
			}
		}),
		