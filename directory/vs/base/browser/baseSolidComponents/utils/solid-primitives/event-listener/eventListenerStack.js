import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../utils/utils.js';
import '../../../../../../../external/solid/solid.js';
import './eventListener.js';
import '../../../../../../../external/solid/web.js';
define(de[2191], he([1, 0, 302, 13, 898, 2]), function (ce /*require*/,
 e /*exports*/,
 t /*utils*/,
 i /*solid*/,
 w /*eventListener*/,
 E /*web*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$clb = C);
			function C(d, m) {
				if (E.isServer) return [() => () => {}, () => {}];
				const { push: r, execute: u } = (0, t.$jkb)();
				return [
					(a, h, c) => {
						const n = (0, w.$8kb)(d, a, h, c ?? m);
						return r(n), n;
					},
					(0, i.onCleanup)(u),
				];
			}
		})
