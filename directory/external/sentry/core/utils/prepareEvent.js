import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import '../constants.js';
import '../currentScopes.js';
import '../eventProcessors.js';
import '../scope.js';
import './applyScopeDataToEvent.js';
define(
			de[1101],
			he([1, 0, 80, 879, 234, 1437, 732, 1450]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.prepareEvent = m),
					(e.applyDebugIds = a),
					(e.applyDebugMeta = h),
					(e.parseEventHintOrCaptureContext = p);
				function m(s, l, y, $, v, S) {
					const { normalizeDepth: I = 3, normalizeMaxBreadth: T = 1e3 } = s,
						P = {
							...l,
							event_id: l.event_id || y.event_id || (0, t.uuid4)(),
							timestamp: l.timestamp || (0, t.dateTimestampInSeconds)(),
						},
						k = y.integrations || s.integrations.map((O) => O.name);
					r(P, s),
						c(P, k),
						v && v.emit("applyFrameMetadata", l),
						l.type === void 0 && a(P, s.stackParser);
					const L = g($, y.captureContext);
					y.mechanism && (0, t.addExceptionMechanism)(P, y.mechanism);
					const D = v ? v.getEventProcessors() : [],
						M = (0, w.getGlobalScope)().getScopeData();
					if (S) {
						const O = S.getScopeData();
						(0, d.mergeScopeData)(M, O);
					}
					if (L) {
						const O = L.getScopeData();
						(0, d.mergeScopeData)(M, O);
					}
					const N = [...(y.attachments || []), ...M.attachments];
					N.length && (y.attachments = N), (0, d.applyScopeDataToEvent)(P, M);
					const A = [...D, ...M.eventProcessors];
					return (0, E.notifyEventProcessors)(A, P, y).then(
						(O) => (O && h(O), typeof I == "number" && I > 0 ? n(O, I, T) : O),
					);
				}
				function r(s, l) {
					const {
						environment: y,
						release: $,
						dist: v,
						maxValueLength: S = 250,
					} = l;
					"environment" in s ||
						(s.environment = "environment" in l ? y : i.DEFAULT_ENVIRONMENT),
						s.release === void 0 && $ !== void 0 && (s.release = $),
						s.dist === void 0 && v !== void 0 && (s.dist = v),
						s.message && (s.message = (0, t.truncate)(s.message, S));
					const I = s.exception && s.exception.values && s.exception.values[0];
					I && I.value && (I.value = (0, t.truncate)(I.value, S));
					const T = s.request;
					T && T.url && (T.url = (0, t.truncate)(T.url, S));
				}
				const u = new WeakMap();
				function a(s, l) {
					const y = t.GLOBAL_OBJ._sentryDebugIds;
					if (!y) return;
					let $;
					const v = u.get(l);
					v ? ($ = v) : (($ = new Map()), u.set(l, $));
					const S = Object.entries(y).reduce((I, [T, P]) => {
						let k;
						const L = $.get(T);
						L ? (k = L) : ((k = l(T)), $.set(T, k));
						for (let D = k.length - 1; D >= 0; D--) {
							const M = k[D];
							if (M.filename) {
								I[M.filename] = P;
								break;
							}
						}
						return I;
					}, {});
					try {
						s.exception.values.forEach((I) => {
							I.stacktrace.frames.forEach((T) => {
								T.filename && (T.debug_id = S[T.filename]);
							});
						});
					} catch {}
				}
				function h(s) {
					const l = {};
					try {
						s.exception.values.forEach(($) => {
							$.stacktrace.frames.forEach((v) => {
								v.debug_id &&
									(v.abs_path
										? (l[v.abs_path] = v.debug_id)
										: v.filename && (l[v.filename] = v.debug_id),
									delete v.debug_id);
							});
						});
					} catch {}
					if (Object.keys(l).length === 0) return;
					(s.debug_meta = s.debug_meta || {}),
						(s.debug_meta.images = s.debug_meta.images || []);
					const y = s.debug_meta.images;
					Object.entries(l).forEach(([$, v]) => {
						y.push({ type: "sourcemap", code_file: $, debug_id: v });
					});
				}
				function c(s, l) {
					l.length > 0 &&
						((s.sdk = s.sdk || {}),
						(s.sdk.integrations = [...(s.sdk.integrations || []), ...l]));
				}
				function n(s, l, y) {
					if (!s) return null;
					const $ = {
						...s,
						...(s.breadcrumbs && {
							breadcrumbs: s.breadcrumbs.map((v) => ({
								...v,
								...(v.data && { data: (0, t.normalize)(v.data, l, y) }),
							})),
						}),
						...(s.user && { user: (0, t.normalize)(s.user, l, y) }),
						...(s.contexts && { contexts: (0, t.normalize)(s.contexts, l, y) }),
						...(s.extra && { extra: (0, t.normalize)(s.extra, l, y) }),
					};
					return (
						s.contexts &&
							s.contexts.trace &&
							$.contexts &&
							(($.contexts.trace = s.contexts.trace),
							s.contexts.trace.data &&
								($.contexts.trace.data = (0, t.normalize)(
									s.contexts.trace.data,
									l,
									y,
								))),
						s.spans &&
							($.spans = s.spans.map((v) => ({
								...v,
								...(v.data && { data: (0, t.normalize)(v.data, l, y) }),
							}))),
						$
					);
				}
				function g(s, l) {
					if (!l) return s;
					const y = s ? s.clone() : new C.Scope();
					return y.update(l), y;
				}
				function p(s) {
					if (s)
						return o(s)
							? { captureContext: s }
							: b(s)
								? { captureContext: s }
								: s;
				}
				function o(s) {
					return s instanceof C.Scope || typeof s == "function";
				}
				const f = [
					"user",
					"level",
					"extra",
					"contexts",
					"tags",
					"fingerprint",
					"requestSession",
					"propagationContext",
				];
				function b(s) {
					return Object.keys(s).some((l) => f.includes(l));
				}
			},
		),
		