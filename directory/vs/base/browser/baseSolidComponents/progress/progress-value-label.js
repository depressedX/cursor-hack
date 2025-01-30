import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../utils/polymorphic.js';
import './progress-context.js';
define(de[2622], he([1, 0, 2, 2, 494, 738]), function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*polymorphic*/,
 E /*progress-context*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$_nb = C);
			function C(d) {
				const m = (0, E.$7nb)();
				return (0, t.createComponent)(
					w.$5kb,
					(0, i.mergeProps)(
						{
							as: "div",
							get children() {
								return m.valueLabel();
							},
						},
						() => m.dataset(),
						d,
					),
				);
			}
		}),
		