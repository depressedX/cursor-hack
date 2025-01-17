import '../../../require.js';
import '../../../exports.js';
import './error.js';
import './syncpromise.js';
define(de[1426], he([1, 0, 1092, 1425]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.makePromiseBuffer = w);
			function w(E) {
				const C = [];
				function d() {
					return E === void 0 || C.length < E;
				}
				function m(a) {
					return C.splice(C.indexOf(a), 1)[0] || Promise.resolve(void 0);
				}
				function r(a) {
					if (!d())
						return (0, i.rejectedSyncPromise)(
							new t.SentryError(
								"Not adding Promise because buffer limit was reached.",
							),
						);
					const h = a();
					return (
						C.indexOf(h) === -1 && C.push(h),
						h.then(() => m(h)).then(null, () => m(h).then(null, () => {})),
						h
					);
				}
				function u(a) {
					return new i.SyncPromise((h, c) => {
						let n = C.length;
						if (!n) return h(!0);
						const g = setTimeout(() => {
							a && a > 0 && h(!1);
						}, a);
						C.forEach((p) => {
							(0, i.resolvedSyncPromise)(p).then(() => {
								--n || (clearTimeout(g), h(!0));
							}, c);
						});
					});
				}
				return { $: C, add: r, drain: u };
			}
		}),
		