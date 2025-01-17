import '../../../../require.js';
import '../../../../exports.js';
import '../../instantiation/common/instantiation.js';
define(de[32], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.TelemetryConfiguration =
					e.TelemetryLevel =
					e.$ym =
					e.$xm =
					e.$wm =
					e.$vm =
					e.$um =
					e.$tm =
					e.$sm =
					e.$rm =
					e.$qm =
					e.$pm =
					e.$om =
					e.$nm =
					e.$mm =
					e.$lm =
					e.$km =
						void 0),
				(e.$km = (0, t.$Mi)("telemetryService")),
				(e.$lm = "inlineDiffAccept"),
				(e.$mm = "inlineDiffReject"),
				(e.$nm = (0, t.$Mi)("customEndpointTelemetryService")),
				(e.$om = "telemetry.currentSessionDate"),
				(e.$pm = "telemetry.firstSessionDate"),
				(e.$qm = "telemetry.lastSessionDate"),
				(e.$rm = "telemetry.machineId"),
				(e.$sm = "telemetry.macMachineId"),
				(e.$tm = "telemetry.sqmId"),
				(e.$um = "telemetry.devDeviceId"),
				(e.$vm = "crashReporting"),
				(e.$wm = "crashReporting.enabled"),
				(e.$xm = "telemetry.enableCrashReporter"),
				(e.$ym = "telemetry.enableTelemetry");
			var i;
			(function (E) {
				(E[(E.NONE = 0)] = "NONE"),
					(E[(E.CRASH = 1)] = "CRASH"),
					(E[(E.ERROR = 2)] = "ERROR"),
					(E[(E.USAGE = 3)] = "USAGE");
			})(i || (e.TelemetryLevel = i = {}));
			var w;
			(function (E) {
				(E.OFF = "off"), (E.ON = "all");
			})(w || (e.TelemetryConfiguration = w = {}));
		}),
		