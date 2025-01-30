import '../../../../require.js';
import '../../../../exports.js';
import '../../core/index.js';
define(de[2147], he([1, 0, 144]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.getScopeData = i),
				(e.addScopeListener = w);
			function i() {
				const E = (0, t.getIsolationScope)().getScopeData();
				return (
					(0, t.mergeScopeData)(E, (0, t.getCurrentScope)().getScopeData()),
					(E.eventProcessors = []),
					E
				);
			}
			function w(E) {
				(0, t.getIsolationScope)().addScopeListener((C) => {
					const d = i();
					E(d, C);
				}),
					(0, t.getCurrentScope)().addScopeListener((C) => {
						const d = i();
						E(d, C);
					});
			}
		}),
		