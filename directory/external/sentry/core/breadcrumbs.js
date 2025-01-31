import '../../../require.js';
import '../../../exports.js';
import '../utils/index.js';
import './currentScopes.js';
define(de[1442], he([1, 0, 80, 234]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*currentScopes*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.addBreadcrumb = E);
			const w = 100;
			function E(C, d) {
				const m = (0, i.getClient)(),
					r = (0, i.getIsolationScope)();
				if (!m) return;
				const { beforeBreadcrumb: u = null, maxBreadcrumbs: a = w } =
					m.getOptions();
				if (a <= 0) return;
				const c = { timestamp: (0, t.dateTimestampInSeconds)(), ...C },
					n = u ? (0, t.consoleSandbox)(() => u(c, d)) : c;
				n !== null &&
					(m.emit && m.emit("beforeAddBreadcrumb", n, d),
					r.addBreadcrumb(n, a));
			}
		})
