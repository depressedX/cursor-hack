import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import '../debug-build.js';
define(de[2102], he([1, 0, 80, 263]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*debug-build*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.START_DELAY = e.MIN_DELAY = void 0),
				(e.makeOfflineTransport = E),
				(e.MIN_DELAY = 100),
				(e.START_DELAY = 5e3);
			const w = 36e5;
			function E(C) {
				function d(...m) {
					i.DEBUG_BUILD && t.logger.info("[Offline]:", ...m);
				}
				return (m) => {
					const r = C(m);
					if (!m.createStore)
						throw new Error("No `createStore` function was provided");
					const u = m.createStore(m);
					let a = e.START_DELAY,
						h;
					function c(o, f, b) {
						return (0, t.envelopeContainsItemType)(o, ["client_report"])
							? !1
							: m.shouldStore
								? m.shouldStore(o, f, b)
								: !0;
					}
					function n(o) {
						h && clearTimeout(h),
							(h = setTimeout(async () => {
								h = void 0;
								const f = await u.shift();
								f &&
									(d("Attempting to send previously queued event"),
									(f[0].sent_at = new Date().toISOString()),
									p(f, !0).catch((b) => {
										d("Failed to retry sending", b);
									}));
							}, o)),
							typeof h != "number" && h.unref && h.unref();
					}
					function g() {
						h || (n(a), (a = Math.min(a * 2, w)));
					}
					async function p(o, f = !1) {
						if (
							!f &&
							(0, t.envelopeContainsItemType)(o, [
								"replay_event",
								"replay_recording",
							])
						)
							return await u.push(o), n(e.MIN_DELAY), {};
						try {
							const b = await r.send(o);
							let s = e.MIN_DELAY;
							if (b) {
								if (b.headers && b.headers["retry-after"])
									s = (0, t.parseRetryAfterHeader)(b.headers["retry-after"]);
								else if (b.headers && b.headers["x-sentry-rate-limits"])
									s = 6e4;
								else if ((b.statusCode || 0) >= 400) return b;
							}
							return n(s), (a = e.START_DELAY), b;
						} catch (b) {
							if (await c(o, b, a))
								return (
									f ? await u.unshift(o) : await u.push(o),
									g(),
									d("Error sending. Event queued.", b),
									{}
								);
							throw b;
						}
					}
					return m.flushAtStartup && g(), { send: p, flush: (o) => r.flush(o) };
				};
			}
		}),
		