import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/solid.js';
import '../../../controlCommon/browser/solid.js';
define(de[177], he([1, 0, 13, 36]), function (ce /*require*/,
 e /*exports*/,
 t /*solid*/,
 i /*solid*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.useComposerDataHandle = w);
			function w(E) {
				const C = (0, i.$odc)(),
					{ composerDataService: d } = C,
					m = (0, t.createMemo)(() => {
						const h = E().clone();
						return (
							(0, t.onCleanup)(() => {
								h.dispose();
							}),
							h
						);
					}),
					r = (0, t.createMemo)(() => m().data),
					u = (h) => {
						m().setData(h);
					},
					a = (0, t.createMemo)(() => d.getComposerForceMode(m()));
				return {
					composerDataHandle: m,
					currentComposer: r,
					updateCurrentComposer: u,
					forceMode: a,
				};
			}
		})
