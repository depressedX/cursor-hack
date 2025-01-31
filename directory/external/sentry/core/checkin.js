import '../../../require.js';
import '../../../exports.js';
import '../utils/index.js';
define(de[1436], he([1, 0, 80]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.createCheckInEnvelope = i);
			function i(E, C, d, m, r) {
				const u = { sent_at: new Date().toISOString() };
				d && d.sdk && (u.sdk = { name: d.sdk.name, version: d.sdk.version }),
					m && r && (u.dsn = (0, t.dsnToString)(r)),
					C && (u.trace = (0, t.dropUndefinedKeys)(C));
				const a = w(E);
				return (0, t.createEnvelope)(u, [a]);
			}
			function w(E) {
				return [{ type: "check_in" }, E];
			}
		})
