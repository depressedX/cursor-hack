import '../../../require.js';
import '../../../exports.js';
import '../utils/index.js';
define(de[578], he([1, 0, 80]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.getMainCarrier = i),
				(e.getSentryCarrier = w);
			function i() {
				return w(t.GLOBAL_OBJ), t.GLOBAL_OBJ;
			}
			function w(E) {
				const C = (E.__SENTRY__ = E.__SENTRY__ || {});
				return (
					(C.version = C.version || t.SDK_VERSION),
					(C[t.SDK_VERSION] = C[t.SDK_VERSION] || {})
				);
			}
		})
