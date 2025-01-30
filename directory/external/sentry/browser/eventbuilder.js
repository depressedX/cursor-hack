import '../../../require.js';
import '../../../exports.js';
import '../core/index.js';
import '../utils/index.js';
define(de[889], he([1, 0, 144, 80]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*index*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.exceptionFromError = w),
				(e.extractType = h),
				(e.extractMessage = c),
				(e.eventFromException = n),
				(e.eventFromMessage = g),
				(e.eventFromUnknownInput = p);
			function w(l, y) {
				const $ = d(l, y),
					v = { type: h(y), value: c(y) };
				return (
					$.length && (v.stacktrace = { frames: $ }),
					v.type === void 0 &&
						v.value === "" &&
						(v.value = "Unrecoverable error caught"),
					v
				);
			}
			function E(l, y, $, v) {
				const S = (0, t.getClient)(),
					I = S && S.getOptions().normalizeDepth,
					T = s(y),
					P = { __serialized__: (0, i.normalizeToSize)(y, I) };
				if (T) return { exception: { values: [w(l, T)] }, extra: P };
				const k = {
					exception: {
						values: [
							{
								type: (0, i.isEvent)(y)
									? y.constructor.name
									: v
										? "UnhandledRejection"
										: "Error",
								value: f(y, { isUnhandledRejection: v }),
							},
						],
					},
					extra: P,
				};
				if ($) {
					const L = d(l, $);
					L.length && (k.exception.values[0].stacktrace = { frames: L });
				}
				return k;
			}
			function C(l, y) {
				return { exception: { values: [w(l, y)] } };
			}
			function d(l, y) {
				const $ = y.stacktrace || y.stack || "",
					v = r(y),
					S = u(y);
				try {
					return l($, v, S);
				} catch {}
				return [];
			}
			const m = /Minified React error #\d+;/i;
			function r(l) {
				return l && m.test(l.message) ? 1 : 0;
			}
			function u(l) {
				return typeof l.framesToPop == "number" ? l.framesToPop : 0;
			}
			function a(l) {
				return typeof WebAssembly < "u" && typeof WebAssembly.Exception < "u"
					? l instanceof WebAssembly.Exception
					: !1;
			}
			function h(l) {
				const y = l && l.name;
				return !y && a(l)
					? l.message && Array.isArray(l.message) && l.message.length == 2
						? l.message[0]
						: "WebAssembly.Exception"
					: y;
			}
			function c(l) {
				const y = l && l.message;
				return y
					? y.error && typeof y.error.message == "string"
						? y.error.message
						: a(l) && Array.isArray(l.message) && l.message.length == 2
							? l.message[1]
							: y
					: "No error message";
			}
			function n(l, y, $, v) {
				const S = ($ && $.syntheticException) || void 0,
					I = p(l, y, S, v);
				return (
					(0, i.addExceptionMechanism)(I),
					(I.level = "error"),
					$ && $.event_id && (I.event_id = $.event_id),
					(0, i.resolvedSyncPromise)(I)
				);
			}
			function g(l, y, $ = "info", v, S) {
				const I = (v && v.syntheticException) || void 0,
					T = o(l, y, I, S);
				return (
					(T.level = $),
					v && v.event_id && (T.event_id = v.event_id),
					(0, i.resolvedSyncPromise)(T)
				);
			}
			function p(l, y, $, v, S) {
				let I;
				if ((0, i.isErrorEvent)(y) && y.error) return C(l, y.error);
				if ((0, i.isDOMError)(y) || (0, i.isDOMException)(y)) {
					const T = y;
					if ("stack" in y) I = C(l, y);
					else {
						const P =
								T.name || ((0, i.isDOMError)(T) ? "DOMError" : "DOMException"),
							k = T.message ? `${P}: ${T.message}` : P;
						(I = o(l, k, $, v)), (0, i.addExceptionTypeValue)(I, k);
					}
					return (
						"code" in T &&
							(I.tags = { ...I.tags, "DOMException.code": `${T.code}` }),
						I
					);
				}
				return (0, i.isError)(y)
					? C(l, y)
					: (0, i.isPlainObject)(y) || (0, i.isEvent)(y)
						? ((I = E(l, y, $, S)),
							(0, i.addExceptionMechanism)(I, { synthetic: !0 }),
							I)
						: ((I = o(l, y, $, v)),
							(0, i.addExceptionTypeValue)(I, `${y}`, void 0),
							(0, i.addExceptionMechanism)(I, { synthetic: !0 }),
							I);
			}
			function o(l, y, $, v) {
				const S = {};
				if (v && $) {
					const I = d(l, $);
					I.length &&
						(S.exception = {
							values: [{ value: y, stacktrace: { frames: I } }],
						});
				}
				if ((0, i.isParameterizedString)(y)) {
					const {
						__sentry_template_string__: I,
						__sentry_template_values__: T,
					} = y;
					return (S.logentry = { message: I, params: T }), S;
				}
				return (S.message = y), S;
			}
			function f(l, { isUnhandledRejection: y }) {
				const $ = (0, i.extractExceptionKeysForMessage)(l),
					v = y ? "promise rejection" : "exception";
				return (0, i.isErrorEvent)(l)
					? `Event \`ErrorEvent\` captured as ${v} with message \`${l.message}\``
					: (0, i.isEvent)(l)
						? `Event \`${b(l)}\` (type=${l.type}) captured as ${v}`
						: `Object captured as ${v} with keys: ${$}`;
			}
			function b(l) {
				try {
					const y = Object.getPrototypeOf(l);
					return y ? y.constructor.name : void 0;
				} catch {}
			}
			function s(l) {
				for (const y in l)
					if (Object.prototype.hasOwnProperty.call(l, y)) {
						const $ = l[y];
						if ($ instanceof Error) return $;
					}
			}
		}),
		