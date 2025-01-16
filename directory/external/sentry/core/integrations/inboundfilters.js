define(de[2110], he([1, 0, 80, 263, 316]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.inboundFiltersIntegration = void 0);
			const E = [
					/^Script error\.?$/,
					/^Javascript error: Script error\.? on line 0$/,
					/^ResizeObserver loop completed with undelivered notifications.$/,
					/^Cannot redefine property: googletag$/,
					"undefined is not an object (evaluating 'a.L')",
					`can't redefine non-configurable property "solana"`,
					"vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)",
					"Can't find variable: _AutofillCallbackHandler",
				],
				C = "InboundFilters",
				d = (b = {}) => ({
					name: C,
					processEvent(s, l, y) {
						const $ = y.getOptions(),
							v = m(b, $);
						return r(s, v) ? null : s;
					},
				});
			e.inboundFiltersIntegration = (0, w.defineIntegration)(d);
			function m(b = {}, s = {}) {
				return {
					allowUrls: [...(b.allowUrls || []), ...(s.allowUrls || [])],
					denyUrls: [...(b.denyUrls || []), ...(s.denyUrls || [])],
					ignoreErrors: [
						...(b.ignoreErrors || []),
						...(s.ignoreErrors || []),
						...(b.disableErrorDefaults ? [] : E),
					],
					ignoreTransactions: [
						...(b.ignoreTransactions || []),
						...(s.ignoreTransactions || []),
					],
					ignoreInternal: b.ignoreInternal !== void 0 ? b.ignoreInternal : !0,
				};
			}
			function r(b, s) {
				return s.ignoreInternal && g(b)
					? (i.DEBUG_BUILD &&
							t.logger.warn(`Event dropped due to being internal Sentry Error.
Event: ${(0, t.getEventDescription)(b)}`),
						!0)
					: u(b, s.ignoreErrors)
						? (i.DEBUG_BUILD &&
								t.logger.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${(0, t.getEventDescription)(b)}`),
							!0)
						: f(b)
							? (i.DEBUG_BUILD &&
									t.logger.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${(0, t.getEventDescription)(b)}`),
								!0)
							: a(b, s.ignoreTransactions)
								? (i.DEBUG_BUILD &&
										t.logger.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${(0, t.getEventDescription)(b)}`),
									!0)
								: h(b, s.denyUrls)
									? (i.DEBUG_BUILD &&
											t.logger.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${(0, t.getEventDescription)(b)}.
Url: ${o(b)}`),
										!0)
									: c(b, s.allowUrls)
										? !1
										: (i.DEBUG_BUILD &&
												t.logger.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${(0, t.getEventDescription)(b)}.
Url: ${o(b)}`),
											!0);
			}
			function u(b, s) {
				return b.type || !s || !s.length
					? !1
					: n(b).some((l) => (0, t.stringMatchesSomePattern)(l, s));
			}
			function a(b, s) {
				if (b.type !== "transaction" || !s || !s.length) return !1;
				const l = b.transaction;
				return l ? (0, t.stringMatchesSomePattern)(l, s) : !1;
			}
			function h(b, s) {
				if (!s || !s.length) return !1;
				const l = o(b);
				return l ? (0, t.stringMatchesSomePattern)(l, s) : !1;
			}
			function c(b, s) {
				if (!s || !s.length) return !0;
				const l = o(b);
				return l ? (0, t.stringMatchesSomePattern)(l, s) : !0;
			}
			function n(b) {
				const s = [];
				b.message && s.push(b.message);
				let l;
				try {
					l = b.exception.values[b.exception.values.length - 1];
				} catch {}
				return (
					l &&
						l.value &&
						(s.push(l.value), l.type && s.push(`${l.type}: ${l.value}`)),
					s
				);
			}
			function g(b) {
				try {
					return b.exception.values[0].type === "SentryError";
				} catch {}
				return !1;
			}
			function p(b = []) {
				for (let s = b.length - 1; s >= 0; s--) {
					const l = b[s];
					if (
						l &&
						l.filename !== "<anonymous>" &&
						l.filename !== "[native code]"
					)
						return l.filename || null;
				}
				return null;
			}
			function o(b) {
				try {
					let s;
					try {
						s = b.exception.values[0].stacktrace.frames;
					} catch {}
					return s ? p(s) : null;
				} catch {
					return (
						i.DEBUG_BUILD &&
							t.logger.error(
								`Cannot extract url for event ${(0, t.getEventDescription)(b)}`,
							),
						null
					);
				}
			}
			function f(b) {
				return b.type ||
					!b.exception ||
					!b.exception.values ||
					b.exception.values.length === 0
					? !1
					: !b.message &&
							!b.exception.values.some(
								(s) =>
									s.stacktrace || (s.type && s.type !== "Error") || s.value,
							);
			}
		}),
		