import '../../../require.js';
import '../../../exports.js';
import '../core/index.js';
import '../core/index.js';
import '../core/index.js';
import '../utils/index.js';
import '../browser-utils/index.js';
import '../core/index.js';
import './client.js';
import './debug-build.js';
import './helpers.js';
import './integrations/breadcrumbs.js';
import './integrations/browserapierrors.js';
import './integrations/globalhandlers.js';
import './integrations/httpcontext.js';
import './integrations/linkederrors.js';
import './stack-parsers.js';
import './transports/fetch.js';
define(
			de[2142],
			he([
				1, 0, 144, 144, 144, 80, 641, 144, 1453, 452, 386, 1454, 1455, 1456,
				1457, 1458, 1434, 1104,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.getDefaultIntegrations = f),
					(e.init = l),
					(e.showReportDialog = y),
					(e.forceLoad = $),
					(e.onLoad = v),
					(e.captureUserFeedback = I);
				function f(T) {
					return [
						(0, i.inboundFiltersIntegration)(),
						(0, i.functionToStringIntegration)(),
						(0, h.browserApiErrorsIntegration)(),
						(0, a.breadcrumbsIntegration)(),
						(0, c.globalHandlersIntegration)(),
						(0, g.linkedErrorsIntegration)(),
						(0, d.dedupeIntegration)(),
						(0, n.httpContextIntegration)(),
					];
				}
				function b(T = {}) {
					const P = {
						defaultIntegrations: f(T),
						release:
							typeof __SENTRY_RELEASE__ == "string"
								? __SENTRY_RELEASE__
								: u.WINDOW.SENTRY_RELEASE && u.WINDOW.SENTRY_RELEASE.id
									? u.WINDOW.SENTRY_RELEASE.id
									: void 0,
						autoSessionTracking: !0,
						sendClientReports: !0,
					};
					return (
						T.defaultIntegrations == null && delete T.defaultIntegrations,
						{ ...P, ...T }
					);
				}
				function s() {
					const T = typeof u.WINDOW.window < "u" && u.WINDOW;
					if (!T) return !1;
					const P = T.chrome ? "chrome" : "browser",
						k = T[P],
						L = k && k.runtime && k.runtime.id,
						D = (u.WINDOW.location && u.WINDOW.location.href) || "",
						M = [
							"chrome-extension:",
							"moz-extension:",
							"ms-browser-extension:",
							"safari-web-extension:",
						],
						N =
							!!L &&
							u.WINDOW === u.WINDOW.top &&
							M.some((R) => D.startsWith(`${R}//`)),
						A = typeof T.nw < "u";
					return !!L && !N && !A;
				}
				function l(T = {}) {
					const P = b(T);
					if (s()) {
						(0, E.consoleSandbox)(() => {
							console.error(
								"[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/",
							);
						});
						return;
					}
					r.DEBUG_BUILD &&
						((0, E.supportsFetch)() ||
							E.logger.warn(
								"No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.",
							));
					const k = {
							...P,
							stackParser: (0, E.stackParserFromStackParserOptions)(
								P.stackParser || p.defaultStackParser,
							),
							integrations: (0, w.getIntegrationsToSetup)(P),
							transport: P.transport || o.makeFetchTransport,
						},
						L = (0, w.initAndBind)(m.BrowserClient, k);
					return P.autoSessionTracking && S(), L;
				}
				function y(T = {}) {
					if (!u.WINDOW.document) {
						r.DEBUG_BUILD &&
							E.logger.error(
								"Global document not defined in showReportDialog call",
							);
						return;
					}
					const P = (0, t.getCurrentScope)(),
						k = P.getClient(),
						L = k && k.getDsn();
					if (!L) {
						r.DEBUG_BUILD &&
							E.logger.error("DSN not configured for showReportDialog call");
						return;
					}
					if ((P && (T.user = { ...P.getUser(), ...T.user }), !T.eventId)) {
						const A = (0, w.lastEventId)();
						A && (T.eventId = A);
					}
					const D = u.WINDOW.document.createElement("script");
					(D.async = !0),
						(D.crossOrigin = "anonymous"),
						(D.src = (0, w.getReportDialogEndpoint)(L, T)),
						T.onLoad && (D.onload = T.onLoad);
					const { onClose: M } = T;
					if (M) {
						const A = (R) => {
							if (R.data === "__sentry_reportdialog_closed__")
								try {
									M();
								} finally {
									u.WINDOW.removeEventListener("message", A);
								}
						};
						u.WINDOW.addEventListener("message", A);
					}
					const N = u.WINDOW.document.head || u.WINDOW.document.body;
					N
						? N.appendChild(D)
						: r.DEBUG_BUILD &&
							E.logger.error(
								"Not injecting report dialog. No injection point found in HTML",
							);
				}
				function $() {}
				function v(T) {
					T();
				}
				function S() {
					if (typeof u.WINDOW.document > "u") {
						r.DEBUG_BUILD &&
							E.logger.warn(
								"Session tracking in non-browser environment with ../browser/index is not supported.",
							);
						return;
					}
					(0, w.startSession)({ ignoreDuration: !0 }),
						(0, w.captureSession)(),
						(0, C.addHistoryInstrumentationHandler)(({ from: T, to: P }) => {
							T !== void 0 &&
								T !== P &&
								((0, w.startSession)({ ignoreDuration: !0 }),
								(0, w.captureSession)());
						});
				}
				function I(T) {
					const P = (0, w.getClient)();
					P && P.captureUserFeedback(T);
				}
			},
		),
		