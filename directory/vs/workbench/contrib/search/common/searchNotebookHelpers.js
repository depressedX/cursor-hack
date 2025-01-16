define(de[1864], he([1, 0, 186, 17]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$T7 = void 0),
				(e.$S7 = w),
				(e.$U7 = E);
			function w(C) {
				return "cellResults" in C;
			}
			e.$T7 = "rawCell#";
			function E(C, d) {
				let m = -1;
				const r = [];
				let u = [];
				return (
					C.forEach((h) => {
						h.range.startLineNumber !== m &&
							u.length > 0 &&
							(r.push([...u]), (u = [])),
							u.push(h),
							(m = h.range.endLineNumber);
					}),
					u.length > 0 && r.push([...u]),
					r.map((h) => {
						const c = [],
							n = h[0].range.startLineNumber,
							g = h[h.length - 1].range.endLineNumber;
						for (let p = n; p <= g; p++) c.push(d.getLineContent(p));
						return new t.$u7(
							c.join(`
`) +
								`
`,
							h.map(
								(p) =>
									new i.$iL(
										p.range.startLineNumber - 1,
										p.range.startColumn - 1,
										p.range.endLineNumber - 1,
										p.range.endColumn - 1,
									),
							),
						);
					})
				);
			}
		}),
		