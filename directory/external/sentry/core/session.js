define(de[887], he([1, 0, 80]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.makeSession = i),
				(e.updateSession = w),
				(e.closeSession = E);
			function i(d) {
				const m = (0, t.timestampInSeconds)(),
					r = {
						sid: (0, t.uuid4)(),
						init: !0,
						timestamp: m,
						started: m,
						duration: 0,
						status: "ok",
						errors: 0,
						ignoreDuration: !1,
						toJSON: () => C(r),
					};
				return d && w(r, d), r;
			}
			function w(d, m = {}) {
				if (
					(m.user &&
						(!d.ipAddress &&
							m.user.ip_address &&
							(d.ipAddress = m.user.ip_address),
						!d.did &&
							!m.did &&
							(d.did = m.user.id || m.user.email || m.user.username)),
					(d.timestamp = m.timestamp || (0, t.timestampInSeconds)()),
					m.abnormal_mechanism && (d.abnormal_mechanism = m.abnormal_mechanism),
					m.ignoreDuration && (d.ignoreDuration = m.ignoreDuration),
					m.sid && (d.sid = m.sid.length === 32 ? m.sid : (0, t.uuid4)()),
					m.init !== void 0 && (d.init = m.init),
					!d.did && m.did && (d.did = `${m.did}`),
					typeof m.started == "number" && (d.started = m.started),
					d.ignoreDuration)
				)
					d.duration = void 0;
				else if (typeof m.duration == "number") d.duration = m.duration;
				else {
					const r = d.timestamp - d.started;
					d.duration = r >= 0 ? r : 0;
				}
				m.release && (d.release = m.release),
					m.environment && (d.environment = m.environment),
					!d.ipAddress && m.ipAddress && (d.ipAddress = m.ipAddress),
					!d.userAgent && m.userAgent && (d.userAgent = m.userAgent),
					typeof m.errors == "number" && (d.errors = m.errors),
					m.status && (d.status = m.status);
			}
			function E(d, m) {
				let r = {};
				m
					? (r = { status: m })
					: d.status === "ok" && (r = { status: "exited" }),
					w(d, r);
			}
			function C(d) {
				return (0, t.dropUndefinedKeys)({
					sid: `${d.sid}`,
					init: d.init,
					started: new Date(d.started * 1e3).toISOString(),
					timestamp: new Date(d.timestamp * 1e3).toISOString(),
					status: d.status,
					errors: d.errors,
					did:
						typeof d.did == "number" || typeof d.did == "string"
							? `${d.did}`
							: void 0,
					duration: d.duration,
					abnormal_mechanism: d.abnormal_mechanism,
					attrs: {
						release: d.release,
						environment: d.environment,
						ip_address: d.ipAddress,
						user_agent: d.userAgent,
					},
				});
			}
		}),
		