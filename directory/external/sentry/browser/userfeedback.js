import '../../../require.js';
import '../../../exports.js';
import '../utils/index.js';
define(de[1435], he([1, 0, 80]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.createUserFeedbackEnvelope = i);
			function i(E, { metadata: C, tunnel: d, dsn: m }) {
				const r = {
						event_id: E.event_id,
						sent_at: new Date().toISOString(),
						...(C &&
							C.sdk && { sdk: { name: C.sdk.name, version: C.sdk.version } }),
						...(!!d && !!m && { dsn: (0, t.dsnToString)(m) }),
					},
					u = w(E);
				return (0, t.createEnvelope)(r, [u]);
			}
			function w(E) {
				return [{ type: "user_report" }, E];
			}
		})
