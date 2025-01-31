import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../utils/api.js';
import '../../../../../external/solid/solid.js';
import '../utils/api.js';
import './form-control-context.js';
define(
			de[2632],
			he([1, 0, 2, 2, 115, 13, 115, 737]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*api*/,
 E /*solid*/,
 C /*api*/,
 d /*form-control-context*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$0mb = m);
				function m(r) {
					const u = (0, d.$5mb)(),
						a = (0, w.$wjb)({ id: u.generateId("description") }, r);
					return (
						(0, E.createEffect)(() =>
							(0, E.onCleanup)(u.registerDescription(a.id)),
						),
						(0, t.createComponent)(
							C.$5kb,
							(0, i.mergeProps)({ as: "div" }, () => u.dataset(), a),
						)
					);
				}
			},
		)
