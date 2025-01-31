import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/observable.js';
import '../../../base/common/observableInternal/utils.js';
define(de[326], he([1, 0, 77, 457]), function (ce /*require*/,
 e /*exports*/,
 t /*observable*/,
 i /*utils*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Mwb = w),
				(e.$Nwb = E);
			function w(C, d, m) {
				return (0, i.$zd)(
					{ debugName: () => `Configuration Key "${C}"` },
					(r) =>
						m.onDidChangeConfiguration((u) => {
							u.affectsConfiguration(C) && r(u);
						}),
					() => m.getValue(C) ?? d,
				);
			}
			function E(C, d, m) {
				const r = C.bindTo(d);
				return (0, t.autorunOpts)(
					{ debugName: () => `Set Context Key "${C.key}"` },
					(u) => {
						r.set(m(u));
					},
				);
			}
		})
