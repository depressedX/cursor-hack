import '../../../require.js';
import '../../../exports.js';
import '../utils/index.js';
import './currentScopes.js';
define(de[2105], he([1, 0, 80, 234]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*currentScopes*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.captureFeedback = w);
			function w(E, C = {}, d = (0, i.getCurrentScope)()) {
				const {
						message: m,
						name: r,
						email: u,
						url: a,
						source: h,
						associatedEventId: c,
						tags: n,
					} = E,
					g = {
						contexts: {
							feedback: (0, t.dropUndefinedKeys)({
								contact_email: u,
								name: r,
								message: m,
								url: a,
								source: h,
								associated_event_id: c,
							}),
						},
						type: "feedback",
						level: "info",
						tags: n,
					},
					p = (d && d.getClient()) || (0, i.getClient)();
				return p && p.emit("beforeSendFeedback", g, C), d.captureEvent(g, C);
			}
		}),
		