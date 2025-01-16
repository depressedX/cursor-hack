define(de[1461], he([1, 0, 1105, 80]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.electronRendererStackParser = void 0);
			const w = 50,
				[, E] = t.chromeStackLineParser,
				[, C] = (0, i.nodeStackLineParser)(),
				d = (m, r = 0) => {
					const u = [];
					for (const a of m
						.split(`
`)
						.slice(r)) {
						const h = E(a),
							c = C(a);
						if (
							(h && c?.in_app !== !1
								? u.push(h)
								: c && u.push((0, i.dropUndefinedKeys)(c)),
							u.length >= w)
						)
							break;
					}
					return (0, i.stripSentryFramesAndReverse)(u);
				};
			e.electronRendererStackParser = d;
		}),
		