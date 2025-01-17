import '../../../require.js';
import '../../../exports.js';
import './envelope.js';
import './time.js';
define(de[2084], he([1, 0, 1432, 1093]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.createClientReportEnvelope = w);
			function w(E, C, d) {
				const m = [
					{ type: "client_report" },
					{
						timestamp: d || (0, i.dateTimestampInSeconds)(),
						discarded_events: E,
					},
				];
				return (0, t.createEnvelope)(C ? { dsn: C } : {}, [m]);
			}
		}),
		