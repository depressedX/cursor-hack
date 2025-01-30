import '../../../require.js';
import '../../../exports.js';
import './is.js';
import './misc.js';
import './normalize.js';
import './object.js';
define(
			de[2081],
			he([1, 0, 430, 727, 882, 528]),
			function (ce /*require*/,
 e /*exports*/,
 t /*is*/,
 i /*misc*/,
 w /*normalize*/,
 E /*object*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.parseStackFrames = C),
					(e.exceptionFromError = d),
					(e.eventFromUnknownInput = h),
					(e.eventFromMessage = c);
				function C(n, g) {
					return n(g.stack || "", 1);
				}
				function d(n, g) {
					const p = { type: g.name || g.constructor.name, value: g.message },
						o = C(n, g);
					return o.length && (p.stacktrace = { frames: o }), p;
				}
				function m(n) {
					for (const g in n)
						if (Object.prototype.hasOwnProperty.call(n, g)) {
							const p = n[g];
							if (p instanceof Error) return p;
						}
				}
				function r(n) {
					if ("name" in n && typeof n.name == "string") {
						let o = `'${n.name}' captured as exception`;
						return (
							"message" in n &&
								typeof n.message == "string" &&
								(o += ` with message '${n.message}'`),
							o
						);
					} else if ("message" in n && typeof n.message == "string")
						return n.message;
					const g = (0, E.extractExceptionKeysForMessage)(n);
					if ((0, t.isErrorEvent)(n))
						return `Event \`ErrorEvent\` captured as exception with message \`${n.message}\``;
					const p = u(n);
					return `${p && p !== "Object" ? `'${p}'` : "Object"} captured as exception with keys: ${g}`;
				}
				function u(n) {
					try {
						const g = Object.getPrototypeOf(n);
						return g ? g.constructor.name : void 0;
					} catch {}
				}
				function a(n, g, p, o) {
					if ((0, t.isError)(p)) return [p, void 0];
					if (((g.synthetic = !0), (0, t.isPlainObject)(p))) {
						const b = n && n.getOptions().normalizeDepth,
							s = { __serialized__: (0, w.normalizeToSize)(p, b) },
							l = m(p);
						if (l) return [l, s];
						const y = r(p),
							$ = (o && o.syntheticException) || new Error(y);
						return ($.message = y), [$, s];
					}
					const f = (o && o.syntheticException) || new Error(p);
					return (f.message = `${p}`), [f, void 0];
				}
				function h(n, g, p, o) {
					const b = (o && o.data && o.data.mechanism) || {
							handled: !0,
							type: "generic",
						},
						[s, l] = a(n, b, p, o),
						y = { exception: { values: [d(g, s)] } };
					return (
						l && (y.extra = l),
						(0, i.addExceptionTypeValue)(y, void 0, void 0),
						(0, i.addExceptionMechanism)(y, b),
						{ ...y, event_id: o && o.event_id }
					);
				}
				function c(n, g, p = "info", o, f) {
					const b = { event_id: o && o.event_id, level: p };
					if (f && o && o.syntheticException) {
						const s = C(n, o.syntheticException);
						s.length &&
							(b.exception = {
								values: [{ value: g, stacktrace: { frames: s } }],
							});
					}
					if ((0, t.isParameterizedString)(g)) {
						const {
							__sentry_template_string__: s,
							__sentry_template_values__: l,
						} = g;
						return (b.logentry = { message: s, params: l }), b;
					}
					return (b.message = g), b;
				}
			},
		),
		