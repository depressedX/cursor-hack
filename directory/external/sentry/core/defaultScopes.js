import '../../../require.js';
import '../../../exports.js';
import '../utils/index.js';
import './scope.js';
define(de[1441], he([1, 0, 80, 732]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*scope*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.getDefaultCurrentScope = w),
				(e.getDefaultIsolationScope = E);
			function w() {
				return (0, t.getGlobalSingleton)(
					"defaultCurrentScope",
					() => new i.Scope(),
				);
			}
			function E() {
				return (0, t.getGlobalSingleton)(
					"defaultIsolationScope",
					() => new i.Scope(),
				);
			}
		})
