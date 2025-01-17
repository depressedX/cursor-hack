import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import '../tracing/dynamicSamplingContext.js';
import './spanUtils.js';
define(de[1450], he([1, 0, 80, 639, 301]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.applyScopeDataToEvent = E),
				(e.mergeScopeData = C),
				(e.mergeAndOverwriteScopeData = d),
				(e.mergeArray = m);
			function E(n, g) {
				const {
					fingerprint: p,
					span: o,
					breadcrumbs: f,
					sdkProcessingMetadata: b,
				} = g;
				r(n, g), o && h(n, o), c(n, p), u(n, f), a(n, b);
			}
			function C(n, g) {
				const {
					extra: p,
					tags: o,
					user: f,
					contexts: b,
					level: s,
					sdkProcessingMetadata: l,
					breadcrumbs: y,
					fingerprint: $,
					eventProcessors: v,
					attachments: S,
					propagationContext: I,
					transactionName: T,
					span: P,
				} = g;
				d(n, "extra", p),
					d(n, "tags", o),
					d(n, "user", f),
					d(n, "contexts", b),
					d(n, "sdkProcessingMetadata", l),
					s && (n.level = s),
					T && (n.transactionName = T),
					P && (n.span = P),
					y.length && (n.breadcrumbs = [...n.breadcrumbs, ...y]),
					$.length && (n.fingerprint = [...n.fingerprint, ...$]),
					v.length && (n.eventProcessors = [...n.eventProcessors, ...v]),
					S.length && (n.attachments = [...n.attachments, ...S]),
					(n.propagationContext = { ...n.propagationContext, ...I });
			}
			function d(n, g, p) {
				if (p && Object.keys(p).length) {
					n[g] = { ...n[g] };
					for (const o in p)
						Object.prototype.hasOwnProperty.call(p, o) && (n[g][o] = p[o]);
				}
			}
			function m(n, g, p) {
				const o = n[g];
				if (!p.length && (!o || o.length)) return;
				const f = [...(o || []), ...p];
				n[g] = f.length ? f : void 0;
			}
			function r(n, g) {
				const {
						extra: p,
						tags: o,
						user: f,
						contexts: b,
						level: s,
						transactionName: l,
					} = g,
					y = (0, t.dropUndefinedKeys)(p);
				y && Object.keys(y).length && (n.extra = { ...y, ...n.extra });
				const $ = (0, t.dropUndefinedKeys)(o);
				$ && Object.keys($).length && (n.tags = { ...$, ...n.tags });
				const v = (0, t.dropUndefinedKeys)(f);
				v && Object.keys(v).length && (n.user = { ...v, ...n.user });
				const S = (0, t.dropUndefinedKeys)(b);
				S && Object.keys(S).length && (n.contexts = { ...S, ...n.contexts }),
					s && (n.level = s),
					l && n.type !== "transaction" && (n.transaction = l);
			}
			function u(n, g) {
				const p = [...(n.breadcrumbs || []), ...g];
				n.breadcrumbs = p.length ? p : void 0;
			}
			function a(n, g) {
				n.sdkProcessingMetadata = { ...n.sdkProcessingMetadata, ...g };
			}
			function h(n, g) {
				(n.contexts = { trace: (0, w.spanToTraceContext)(g), ...n.contexts }),
					(n.sdkProcessingMetadata = {
						dynamicSamplingContext: (0, i.getDynamicSamplingContextFromSpan)(g),
						...n.sdkProcessingMetadata,
					});
				const p = (0, w.getRootSpan)(g),
					o = (0, w.spanToJSON)(p).description;
				o && !n.transaction && n.type === "transaction" && (n.transaction = o);
			}
			function c(n, g) {
				(n.fingerprint = n.fingerprint ? (0, t.arrayify)(n.fingerprint) : []),
					g && (n.fingerprint = n.fingerprint.concat(g)),
					n.fingerprint && !n.fingerprint.length && delete n.fingerprint;
			}
		}),
		