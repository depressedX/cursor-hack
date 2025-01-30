import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/solid.js';
import '../utils/polymorphic.js';
import './progress-context.js';
define(
			de[2618],
			he([1, 0, 2, 2, 13, 494, 738]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*solid*/,
 E /*polymorphic*/,
 C /*progress-context*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$8nb = d);
				function d(m) {
					const r = (0, C.$7nb)(),
						[u, a] = (0, w.splitProps)(m, ["style"]);
					return (0, t.createComponent)(
						E.$5kb,
						(0, i.mergeProps)(
							{
								as: "div",
								get style() {
									return { ...u.style, width: r.progressFillWidth() };
								},
							},
							() => r.dataset(),
							a,
						),
					);
				}
			},
		),
		