import '../../../require.js';
import '../../../exports.js';
import './dom.js';
import '../common/lifecycle.js';
import '../common/observable.js';
define(de[2658], he([1, 0, 7, 3, 77]), function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*lifecycle*/,
 w /*observable*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$mjb = E);
			function E(C) {
				const d = new i.$Zc(),
					m = d.add((0, t.$Qgb)());
				return (
					d.add(
						(0, w.autorun)((r) => {
							m.setStyle(C.read(r));
						}),
					),
					d
				);
			}
		}),
		