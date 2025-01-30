import '../../../../../../require.js';
import '../../../../../../exports.js';
define(de[1234], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$j7b = i);
			const t = !0;
			function i(w) {
				const E = [];
				let C = !0;
				return (
					(async () => {
						for await (const m of w) {
							const r = { value: m, done: !1 };
							E.forEach((u) => u(r));
						}
						const d = { value: void 0, done: !0 };
						E.forEach((m) => m(d)), (C = !1);
					})(),
					function () {
						let m = [],
							r = null;
						const u = (h) => {
							r ? (r(h), (r = null)) : m.push(h);
						};
						E.push(u);
						async function* a() {
							try {
								for (; C || m.length; )
									m.length
										? yield m.shift().value
										: await new Promise((h) => {
												r = (c) => {
													h(), c.done || m.push(c);
												};
											});
							} finally {
								const h = E.indexOf(u);
								h !== -1 && E.splice(h, 1);
							}
						}
						return {
							[Symbol.asyncIterator]() {
								return a();
							},
						};
					}
				);
			}
		}),
		