import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import '../../utils/index.js';
define(de[1096], he([1, 0, 80, 80]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*index*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.stripUrlQueryAndFragment = void 0),
				(e.setCapturedScopesOnSpan = C),
				(e.getCapturedScopesOnSpan = d),
				Object.defineProperty(e, "stripUrlQueryAndFragment", {
					enumerable: !0,
					get: function () {
						return i.stripUrlQueryAndFragment;
					},
				});
			const w = "_sentryScope",
				E = "_sentryIsolationScope";
			function C(m, r, u) {
				m &&
					((0, t.addNonEnumerableProperty)(m, E, u),
					(0, t.addNonEnumerableProperty)(m, w, r));
			}
			function d(m) {
				return { scope: m[w], isolationScope: m[E] };
			}
		}),
		