import '../../../../../require.js';
import '../../../../../exports.js';
define(de[3234], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$09b = t);
			function t(i) {
				const w = [];
				let E = !0;
				return (
					(async () => {
						for await (const d of i) {
							const m = { value: d, done: !1 };
							w.forEach((r) => r(m));
						}
						const C = { value: void 0, done: !0 };
						w.forEach((d) => d(C)), (E = !1);
					})(),
					function () {
						let d = [],
							m = null;
						const r = (a) => {
							m ? (m(a), (m = null)) : d.push(a);
						};
						w.push(r);
						async function* u() {
							try {
								for (; E || d.length; )
									d.length
										? yield d.shift().value
										: await new Promise((a) => {
												m = (h) => {
													a(), h.done || d.push(h);
												};
											});
							} finally {
								const a = w.indexOf(r);
								a !== -1 && w.splice(a, 1);
							}
						}
						return {
							[Symbol.asyncIterator]() {
								return u();
							},
						};
					}
				);
			}
		}),
		