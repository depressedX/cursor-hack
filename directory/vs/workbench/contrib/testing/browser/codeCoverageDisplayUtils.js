define(
			de[1266],
			he([1, 0, 229, 201, 4, 51, 306, 443, 1e3]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.labels = e.$1Jc = e.$ZJc = e.$YJc = e.$XJc = void 0),
					(e.$2Jc = g);
				const r = (o) =>
					(0, i.$Zm)(o.total === 0 ? 1 : o.covered / o.total, 0, 1);
				e.$XJc = r;
				const u = [
						{ color: `var(${(0, C.$qP)(E.$NR)})`, key: "red" },
						{ color: `var(${(0, C.$qP)(E.$PR)})`, key: "yellow" },
						{ color: `var(${(0, C.$qP)(E.$RR)})`, key: "green" },
					],
					a = (o, f) => {
						let b = u[0].color,
							s = o;
						for (const { key: l, color: y } of u) {
							const $ = f[l] / 100;
							$ && o >= $ && o - $ < s && ((b = y), (s = o - $));
						}
						return b;
					};
				e.$YJc = a;
				const h = 1e-7,
					c = (o, f = 2) => {
						const b = (o * 100).toFixed(f);
						return o < 1 - h && b === "100" ? `${100 - 10 ** -f}%` : `${b}%`;
					};
				e.$ZJc = c;
				const n = (o, f) => {
					switch (f) {
						case d.TestingDisplayedCoveragePercent.Statement:
							return (0, e.$XJc)(o.statement);
						case d.TestingDisplayedCoveragePercent.Minimum: {
							let b = (0, e.$XJc)(o.statement);
							return (
								o.branch && (b = Math.min(b, (0, e.$XJc)(o.branch))),
								o.declaration && (b = Math.min(b, (0, e.$XJc)(o.declaration))),
								b
							);
						}
						case d.TestingDisplayedCoveragePercent.TotalCoverage:
							return (0, m.$F4)(o.statement, o.branch, o.declaration);
						default:
							(0, t.$kd)(f);
					}
				};
				e.$1Jc = n;
				function g(o, f, b) {
					const s = [];
					for (const l of f.idsFromRoot()) {
						const y = o.getTestById(l.toString());
						if (!y) break;
						s.push(y.label);
					}
					return s.slice(b).join(" \u203A ");
				}
				var p;
				(function (o) {
					(o.showingFilterFor = (f) => (0, w.localize)(10627, null, f)),
						(o.clickToChangeFiltering = (0, w.localize)(10628, null)),
						(o.percentCoverage = (f, b) =>
							(0, w.localize)(10629, null, (0, e.$ZJc)(f, b))),
						(o.allTests = (0, w.localize)(10630, null)),
						(o.pickShowCoverage = (0, w.localize)(10631, null));
				})(p || (e.labels = p = {}));
			},
		),
		