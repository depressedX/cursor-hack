import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import '../debug-build.js';
import '../utils/spanUtils.js';
define(de[1100], he([1, 0, 80, 263, 301]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.logSpanStart = E),
				(e.logSpanEnd = C);
			function E(d) {
				if (!i.DEBUG_BUILD) return;
				const {
						description: m = "< unknown name >",
						op: r = "< unknown op >",
						parent_span_id: u,
					} = (0, w.spanToJSON)(d),
					{ spanId: a } = d.spanContext(),
					h = (0, w.spanIsSampled)(d),
					c = (0, w.getRootSpan)(d),
					n = c === d,
					g = `[Tracing] Starting ${h ? "sampled" : "unsampled"} ${n ? "root " : ""}span`,
					p = [`op: ${r}`, `name: ${m}`, `ID: ${a}`];
				if ((u && p.push(`parent ID: ${u}`), !n)) {
					const { op: o, description: f } = (0, w.spanToJSON)(c);
					p.push(`root ID: ${c.spanContext().spanId}`),
						o && p.push(`root op: ${o}`),
						f && p.push(`root description: ${f}`);
				}
				t.logger.log(`${g}
  ${p.join(`
  `)}`);
			}
			function C(d) {
				if (!i.DEBUG_BUILD) return;
				const {
						description: m = "< unknown name >",
						op: r = "< unknown op >",
					} = (0, w.spanToJSON)(d),
					{ spanId: u } = d.spanContext(),
					h = (0, w.getRootSpan)(d) === d,
					c = `[Tracing] Finishing "${r}" ${h ? "root " : ""}span "${m}" with ID ${u}`;
				t.logger.log(c);
			}
		}),
		