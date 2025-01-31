import '../../../require.js';
import '../../../exports.js';
import './dsn.js';
import './normalize.js';
import './object.js';
import './worldwide.js';
define(
			de[1432],
			he([1, 0, 1431, 882, 528, 365]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dsn*/,
 i /*normalize*/,
 w /*object*/,
 E /*worldwide*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.createEnvelope = C),
					(e.addItemToEnvelope = d),
					(e.forEachEnvelopeItem = m),
					(e.envelopeContainsItemType = r),
					(e.serializeEnvelope = h),
					(e.parseEnvelope = n),
					(e.createSpanEnvelopeItem = g),
					(e.createAttachmentEnvelopeItem = p),
					(e.envelopeItemTypeToDataCategory = f),
					(e.getSdkMetadataForEnvelopeHeader = b),
					(e.createEventEnvelopeHeaders = s);
				function C(l, y = []) {
					return [l, y];
				}
				function d(l, y) {
					const [$, v] = l;
					return [$, [...v, y]];
				}
				function m(l, y) {
					const $ = l[1];
					for (const v of $) {
						const S = v[0].type;
						if (y(v, S)) return !0;
					}
					return !1;
				}
				function r(l, y) {
					return m(l, ($, v) => y.includes(v));
				}
				function u(l) {
					return E.GLOBAL_OBJ.__SENTRY__ &&
						E.GLOBAL_OBJ.__SENTRY__.encodePolyfill
						? E.GLOBAL_OBJ.__SENTRY__.encodePolyfill(l)
						: new TextEncoder().encode(l);
				}
				function a(l) {
					return E.GLOBAL_OBJ.__SENTRY__ &&
						E.GLOBAL_OBJ.__SENTRY__.decodePolyfill
						? E.GLOBAL_OBJ.__SENTRY__.decodePolyfill(l)
						: new TextDecoder().decode(l);
				}
				function h(l) {
					const [y, $] = l;
					let v = JSON.stringify(y);
					function S(I) {
						typeof v == "string"
							? (v = typeof I == "string" ? v + I : [u(v), I])
							: v.push(typeof I == "string" ? u(I) : I);
					}
					for (const I of $) {
						const [T, P] = I;
						if (
							(S(`
${JSON.stringify(T)}
`),
							typeof P == "string" || P instanceof Uint8Array)
						)
							S(P);
						else {
							let k;
							try {
								k = JSON.stringify(P);
							} catch {
								k = JSON.stringify((0, i.normalize)(P));
							}
							S(k);
						}
					}
					return typeof v == "string" ? v : c(v);
				}
				function c(l) {
					const y = l.reduce((S, I) => S + I.length, 0),
						$ = new Uint8Array(y);
					let v = 0;
					for (const S of l) $.set(S, v), (v += S.length);
					return $;
				}
				function n(l) {
					let y = typeof l == "string" ? u(l) : l;
					function $(T) {
						const P = y.subarray(0, T);
						return (y = y.subarray(T + 1)), P;
					}
					function v() {
						let T = y.indexOf(10);
						return T < 0 && (T = y.length), JSON.parse(a($(T)));
					}
					const S = v(),
						I = [];
					for (; y.length; ) {
						const T = v(),
							P = typeof T.length == "number" ? T.length : void 0;
						I.push([T, P ? $(P) : v()]);
					}
					return [S, I];
				}
				function g(l) {
					return [{ type: "span" }, l];
				}
				function p(l) {
					const y = typeof l.data == "string" ? u(l.data) : l.data;
					return [
						(0, w.dropUndefinedKeys)({
							type: "attachment",
							length: y.length,
							filename: l.filename,
							content_type: l.contentType,
							attachment_type: l.attachmentType,
						}),
						y,
					];
				}
				const o = {
					session: "session",
					sessions: "session",
					attachment: "attachment",
					transaction: "transaction",
					event: "error",
					client_report: "internal",
					user_report: "default",
					profile: "profile",
					profile_chunk: "profile",
					replay_event: "replay",
					replay_recording: "replay",
					check_in: "monitor",
					feedback: "feedback",
					span: "span",
					statsd: "metric_bucket",
				};
				function f(l) {
					return o[l];
				}
				function b(l) {
					if (!l || !l.sdk) return;
					const { name: y, version: $ } = l.sdk;
					return { name: y, version: $ };
				}
				function s(l, y, $, v) {
					const S =
						l.sdkProcessingMetadata &&
						l.sdkProcessingMetadata.dynamicSamplingContext;
					return {
						event_id: l.event_id,
						sent_at: new Date().toISOString(),
						...(y && { sdk: y }),
						...(!!$ && v && { dsn: (0, t.dsnToString)(v) }),
						...(S && { trace: (0, w.dropUndefinedKeys)({ ...S }) }),
					};
				}
			},
		)
