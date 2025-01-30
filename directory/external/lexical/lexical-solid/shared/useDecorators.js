import '../../../../require.js';
import '../../../../exports.js';
import '../../../solid/web.js';
import '../../../solid/solid.js';
import '../../../solid/web.js';
define(de[2158], he([1, 0, 2, 13, 2]), function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*solid*/,
 w /*web*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.useDecorators = E);
			function E(C, d) {
				const [m, r] = (0, i.createSignal)(C.getDecorators());
				return (
					(0, i.onCleanup)(
						C.registerDecoratorListener((u) => {
							r(u);
						}),
					),
					(0, i.onMount)(() => {
						r(C.getDecorators());
					}),
					(0, i.createMemo)(() => {
						const u = [],
							a = Object.keys(m());
						for (let h = 0; h < a.length; h++) {
							const c = a[h],
								n = (0, t.createComponent)(d, {
									onError: (p, o) => C._onError(p),
									get children() {
										return (0, t.createComponent)(i.Suspense, {
											fallback: null,
											get children() {
												return m()[c];
											},
										});
									},
								}),
								g = C.getElementByKey(c);
							g !== null &&
								u.push(
									(0, i.createComponent)(w.Portal, { mount: g, children: n }),
								);
						}
						return u;
					})
				);
			}
		}),
		