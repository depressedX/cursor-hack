define(de[1102], he([1, 0, 144, 366]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.isMeasurementValue = w),
				(e.startAndEndSpan = E),
				(e.startStandaloneWebVitalSpan = C),
				(e.getBrowserPerformanceAPI = d),
				(e.msToSec = m);
			function w(r) {
				return typeof r == "number" && isFinite(r);
			}
			function E(r, u, a, { ...h }) {
				const c = (0, t.spanToJSON)(r).start_timestamp;
				return (
					c &&
						c > u &&
						typeof r.updateStartTime == "function" &&
						r.updateStartTime(u),
					(0, t.withActiveSpan)(r, () => {
						const n = (0, t.startInactiveSpan)({ startTime: u, ...h });
						return n && n.end(a), n;
					})
				);
			}
			function C(r) {
				const u = (0, t.getClient)();
				if (!u) return;
				const { name: a, transaction: h, attributes: c, startTime: n } = r,
					{ release: g, environment: p } = u.getOptions(),
					o = u.getIntegrationByName("Replay"),
					f = o && o.getReplayId(),
					b = (0, t.getCurrentScope)(),
					s = b.getUser(),
					l = s !== void 0 ? s.email || s.id || s.ip_address : void 0;
				let y;
				try {
					y = b.getScopeData().contexts.profile.profile_id;
				} catch {}
				const $ = {
					release: g,
					environment: p,
					user: l || void 0,
					profile_id: y || void 0,
					replay_id: f || void 0,
					transaction: h,
					"user_agent.original":
						i.WINDOW.navigator && i.WINDOW.navigator.userAgent,
					...c,
				};
				return (0, t.startInactiveSpan)({
					name: a,
					attributes: $,
					startTime: n,
					experimental: { standalone: !0 },
				});
			}
			function d() {
				return i.WINDOW && i.WINDOW.addEventListener && i.WINDOW.performance;
			}
			function m(r) {
				return r / 1e3;
			}
		}),
		