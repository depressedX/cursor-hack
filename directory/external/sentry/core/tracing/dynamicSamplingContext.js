import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import '../constants.js';
import '../currentScopes.js';
import '../semanticAttributes.js';
import '../utils/hasTracingEnabled.js';
import '../utils/spanUtils.js';
define(
			de[639],
			he([1, 0, 80, 879, 234, 453, 638, 301]),
			function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*constants*/,
 w /*currentScopes*/,
 E /*semanticAttributes*/,
 C /*hasTracingEnabled*/,
 d /*spanUtils*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.freezeDscOnSpan = r),
					(e.getDynamicSamplingContextFromClient = u),
					(e.getDynamicSamplingContextFromSpan = a),
					(e.spanToBaggageHeader = h);
				const m = "_frozenDsc";
				function r(c, n) {
					const g = c;
					(0, t.addNonEnumerableProperty)(g, m, n);
				}
				function u(c, n) {
					const g = n.getOptions(),
						{ publicKey: p } = n.getDsn() || {},
						o = (0, t.dropUndefinedKeys)({
							environment: g.environment || i.DEFAULT_ENVIRONMENT,
							release: g.release,
							public_key: p,
							trace_id: c,
						});
					return n.emit("createDsc", o), o;
				}
				function a(c) {
					const n = (0, w.getClient)();
					if (!n) return {};
					const g = u((0, d.spanToJSON)(c).trace_id || "", n),
						p = (0, d.getRootSpan)(c),
						o = p[m];
					if (o) return o;
					const f = p.spanContext().traceState,
						b = f && f.get("sentry.dsc"),
						s = b && (0, t.baggageHeaderToDynamicSamplingContext)(b);
					if (s) return s;
					const l = (0, d.spanToJSON)(p),
						y = l.data || {},
						$ = y[E.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
					$ != null && (g.sample_rate = `${$}`);
					const v = y[E.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
						S = l.description;
					return (
						v !== "url" && S && (g.transaction = S),
						(0, C.hasTracingEnabled)() &&
							(g.sampled = String((0, d.spanIsSampled)(p))),
						n.emit("createDsc", g, p),
						g
					);
				}
				function h(c) {
					const n = a(c);
					return (0, t.dynamicSamplingContextToSentryBaggageHeader)(n);
				}
			},
		)
