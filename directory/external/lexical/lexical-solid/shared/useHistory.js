import '../../../../require.js';
import '../../../../exports.js';
import '../../lexical-history/api.js';
import '../../../solid/solid.js';
define(de[1565], he([1, 0, 922, 13]), function (ce /*require*/,
 e /*exports*/,
 t /*api*/,
 i /*solid*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.useHistory = w),
				(e.useExternalHistory = E);
			function w(C, d, m = 1e3) {
				const r = () => d() || (0, t.createEmptyHistoryState)();
				(0, i.createEffect)(() => {
					(0, i.onCleanup)((0, t.registerHistory)(C, r(), m));
				});
			}
			function E(C, d, m = 1e3, r, u, a) {
				const h = () => d() || (0, t.createEmptyHistoryState)();
				(0, i.createEffect)(() => {
					(0, i.onCleanup)((0, t.registerExternalHistory)(C, h(), m, r, u, a));
				});
			}
		}),
		