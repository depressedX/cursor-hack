import '../../../require.js';
import '../../../exports.js';
define(de[2072], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.validSeverityLevels = void 0),
				(e.severityLevelFromString = t),
				(e.validSeverityLevels = [
					"fatal",
					"error",
					"warning",
					"log",
					"info",
					"debug",
				]);
			function t(i) {
				return i === "warn"
					? "warning"
					: e.validSeverityLevels.includes(i)
						? i
						: "log";
			}
		}),
		