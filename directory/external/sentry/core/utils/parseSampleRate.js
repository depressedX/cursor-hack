import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import '../debug-build.js';
define(de[1098], he([1, 0, 80, 263]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.parseSampleRate = w);
			function w(E) {
				if (typeof E == "boolean") return Number(E);
				const C = typeof E == "string" ? parseFloat(E) : E;
				if (typeof C != "number" || isNaN(C) || C < 0 || C > 1) {
					i.DEBUG_BUILD &&
						t.logger.warn(
							`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(E)} of type ${JSON.stringify(typeof E)}.`,
						);
					return;
				}
				return C;
			}
		}),
		