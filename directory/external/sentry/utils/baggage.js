define(de[1430], he([1, 0, 577, 430, 527]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.MAX_BAGGAGE_STRING_LENGTH =
					e.SENTRY_BAGGAGE_KEY_PREFIX_REGEX =
					e.SENTRY_BAGGAGE_KEY_PREFIX =
					e.BAGGAGE_HEADER_NAME =
						void 0),
				(e.baggageHeaderToDynamicSamplingContext = E),
				(e.dynamicSamplingContextToSentryBaggageHeader = C),
				(e.parseBaggageHeader = d),
				(e.BAGGAGE_HEADER_NAME = "baggage"),
				(e.SENTRY_BAGGAGE_KEY_PREFIX = "sentry-"),
				(e.SENTRY_BAGGAGE_KEY_PREFIX_REGEX = /^sentry-/),
				(e.MAX_BAGGAGE_STRING_LENGTH = 8192);
			function E(u) {
				const a = d(u);
				if (!a) return;
				const h = Object.entries(a).reduce((c, [n, g]) => {
					if (n.match(e.SENTRY_BAGGAGE_KEY_PREFIX_REGEX)) {
						const p = n.slice(e.SENTRY_BAGGAGE_KEY_PREFIX.length);
						c[p] = g;
					}
					return c;
				}, {});
				if (Object.keys(h).length > 0) return h;
			}
			function C(u) {
				if (!u) return;
				const a = Object.entries(u).reduce(
					(h, [c, n]) => (
						n && (h[`${e.SENTRY_BAGGAGE_KEY_PREFIX}${c}`] = n), h
					),
					{},
				);
				return r(a);
			}
			function d(u) {
				if (!(!u || (!(0, i.isString)(u) && !Array.isArray(u))))
					return Array.isArray(u)
						? u.reduce((a, h) => {
								const c = m(h);
								return (
									Object.entries(c).forEach(([n, g]) => {
										a[n] = g;
									}),
									a
								);
							}, {})
						: m(u);
			}
			function m(u) {
				return u
					.split(",")
					.map((a) => a.split("=").map((h) => decodeURIComponent(h.trim())))
					.reduce((a, [h, c]) => (h && c && (a[h] = c), a), {});
			}
			function r(u) {
				if (Object.keys(u).length !== 0)
					return Object.entries(u).reduce((a, [h, c], n) => {
						const g = `${encodeURIComponent(h)}=${encodeURIComponent(c)}`,
							p = n === 0 ? g : `${a},${g}`;
						return p.length > e.MAX_BAGGAGE_STRING_LENGTH
							? (t.DEBUG_BUILD &&
									w.logger.warn(
										`Not adding key: ${h} with val: ${c} to baggage header due to exceeding baggage size limits.`,
									),
								a)
							: p;
					}, "");
			}
		}),
		