import '../../../require.js';
import '../../../exports.js';
import './misc.js';
define(de[2082], he([1, 0, 727]), function (ce /*require*/,
 e /*exports*/,
 t /*misc*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.generatePropagationContext = i);
			function i() {
				return {
					traceId: (0, t.uuid4)(),
					spanId: (0, t.uuid4)().substring(16),
				};
			}
		})
