import '../../../require.js';
import '../../../exports.js';
import '../utils/index.js';
import './constants.js';
import './currentScopes.js';
import './debug-build.js';
import './session.js';
import './utils/prepareEvent.js';
define(
			de[734],
			he([1, 0, 80, 879, 234, 263, 887, 1101]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.captureException = m),
					(e.captureMessage = r),
					(e.captureEvent = u),
					(e.setContext = a),
					(e.setExtras = h),
					(e.setExtra = c),
					(e.setTags = n),
					(e.setTag = g),
					(e.setUser = p),
					(e.lastEventId = o),
					(e.captureCheckIn = f),
					(e.withMonitor = b),
					(e.flush = s),
					(e.close = l),
					(e.isInitialized = y),
					(e.isEnabled = $),
					(e.addEventProcessor = v),
					(e.startSession = S),
					(e.endSession = I),
					(e.captureSession = P);
				function m(k, L) {
					return (0, w.getCurrentScope)().captureException(
						k,
						(0, d.parseEventHintOrCaptureContext)(L),
					);
				}
				function r(k, L) {
					const D = typeof L == "string" ? L : void 0,
						M = typeof L != "string" ? { captureContext: L } : void 0;
					return (0, w.getCurrentScope)().captureMessage(k, D, M);
				}
				function u(k, L) {
					return (0, w.getCurrentScope)().captureEvent(k, L);
				}
				function a(k, L) {
					(0, w.getIsolationScope)().setContext(k, L);
				}
				function h(k) {
					(0, w.getIsolationScope)().setExtras(k);
				}
				function c(k, L) {
					(0, w.getIsolationScope)().setExtra(k, L);
				}
				function n(k) {
					(0, w.getIsolationScope)().setTags(k);
				}
				function g(k, L) {
					(0, w.getIsolationScope)().setTag(k, L);
				}
				function p(k) {
					(0, w.getIsolationScope)().setUser(k);
				}
				function o() {
					return (0, w.getIsolationScope)().lastEventId();
				}
				function f(k, L) {
					const D = (0, w.getCurrentScope)(),
						M = (0, w.getClient)();
					if (!M)
						E.DEBUG_BUILD &&
							t.logger.warn("Cannot capture check-in. No client defined.");
					else if (!M.captureCheckIn)
						E.DEBUG_BUILD &&
							t.logger.warn(
								"Cannot capture check-in. Client does not support sending check-ins.",
							);
					else return M.captureCheckIn(k, L, D);
					return (0, t.uuid4)();
				}
				function b(k, L, D) {
					const M = f({ monitorSlug: k, status: "in_progress" }, D),
						N = (0, t.timestampInSeconds)();
					function A(R) {
						f({
							monitorSlug: k,
							status: R,
							checkInId: M,
							duration: (0, t.timestampInSeconds)() - N,
						});
					}
					return (0, w.withIsolationScope)(() => {
						let R;
						try {
							R = L();
						} catch (O) {
							throw (A("error"), O);
						}
						return (
							(0, t.isThenable)(R)
								? Promise.resolve(R).then(
										() => {
											A("ok");
										},
										() => {
											A("error");
										},
									)
								: A("ok"),
							R
						);
					});
				}
				async function s(k) {
					const L = (0, w.getClient)();
					return L
						? L.flush(k)
						: (E.DEBUG_BUILD &&
								t.logger.warn("Cannot flush events. No client defined."),
							Promise.resolve(!1));
				}
				async function l(k) {
					const L = (0, w.getClient)();
					return L
						? L.close(k)
						: (E.DEBUG_BUILD &&
								t.logger.warn(
									"Cannot flush events and disable SDK. No client defined.",
								),
							Promise.resolve(!1));
				}
				function y() {
					return !!(0, w.getClient)();
				}
				function $() {
					const k = (0, w.getClient)();
					return !!k && k.getOptions().enabled !== !1 && !!k.getTransport();
				}
				function v(k) {
					(0, w.getIsolationScope)().addEventProcessor(k);
				}
				function S(k) {
					const L = (0, w.getClient)(),
						D = (0, w.getIsolationScope)(),
						M = (0, w.getCurrentScope)(),
						{ release: N, environment: A = i.DEFAULT_ENVIRONMENT } =
							(L && L.getOptions()) || {},
						{ userAgent: R } = t.GLOBAL_OBJ.navigator || {},
						O = (0, C.makeSession)({
							release: N,
							environment: A,
							user: M.getUser() || D.getUser(),
							...(R && { userAgent: R }),
							...k,
						}),
						B = D.getSession();
					return (
						B &&
							B.status === "ok" &&
							(0, C.updateSession)(B, { status: "exited" }),
						I(),
						D.setSession(O),
						M.setSession(O),
						O
					);
				}
				function I() {
					const k = (0, w.getIsolationScope)(),
						L = (0, w.getCurrentScope)(),
						D = L.getSession() || k.getSession();
					D && (0, C.closeSession)(D), T(), k.setSession(), L.setSession();
				}
				function T() {
					const k = (0, w.getIsolationScope)(),
						L = (0, w.getCurrentScope)(),
						D = (0, w.getClient)(),
						M = L.getSession() || k.getSession();
					M && D && D.captureSession(M);
				}
				function P(k = !1) {
					if (k) {
						I();
						return;
					}
					T();
				}
			},
		),
		