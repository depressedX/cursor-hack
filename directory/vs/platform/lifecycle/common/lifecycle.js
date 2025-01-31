import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/async.js';
define(de[1619], he([1, 0, 15]), function (ce /*require*/,
 e /*exports*/,
 t /*async*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$G4c = i);
			function i(w, E) {
				if (w.length === 0) return Promise.resolve(!1);
				const C = [];
				let d = !1;
				for (const m of w) {
					if (m === !0) return Promise.resolve(!0);
					(0, t.$yh)(m) &&
						C.push(
							m.then(
								(r) => {
									r && (d = !0);
								},
								(r) => {
									E(r), (d = !0);
								},
							),
						);
				}
				return t.Promises.settled(C).then(() => d);
			}
		})
