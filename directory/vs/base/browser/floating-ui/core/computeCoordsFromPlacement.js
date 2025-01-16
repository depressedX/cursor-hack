define(
			de[2199],
			he([1, 0, 582, 1119, 583, 487]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$amb = C);
				function C({ reference: d, floating: m }, r, u) {
					const a = d.x + d.width / 2 - m.width / 2,
						h = d.y + d.height / 2 - m.height / 2,
						c = (0, w.$Olb)(r),
						n = (0, i.$Mlb)(c),
						g = d[n] / 2 - m[n] / 2,
						p = (0, E.$Nlb)(r),
						o = c === "x";
					let f;
					switch (p) {
						case "top":
							f = { x: a, y: d.y - m.height };
							break;
						case "bottom":
							f = { x: a, y: d.y + d.height };
							break;
						case "right":
							f = { x: d.x + d.width, y: h };
							break;
						case "left":
							f = { x: d.x - m.width, y: h };
							break;
						default:
							f = { x: d.x, y: d.y };
					}
					switch ((0, t.$Llb)(r)) {
						case "start":
							f[c] -= g * (u && o ? -1 : 1);
							break;
						case "end":
							f[c] += g * (u && o ? -1 : 1);
							break;
						default:
					}
					return f;
				}
			},
		),
		