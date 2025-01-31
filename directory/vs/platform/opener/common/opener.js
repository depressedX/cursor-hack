import '../../../../require.js';
import '../../../../exports.js';
import '../../instantiation/common/instantiation.js';
define(de[41], he([1, 0, 5]), function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$7rb = void 0),
				(e.$8rb = i),
				(e.$9rb = w),
				(e.$7rb = (0, t.$Mi)("openerService"));
			function i(E, C) {
				return E.with({
					fragment: `${C.startLineNumber},${C.startColumn}${C.endLineNumber ? `-${C.endLineNumber}${C.endColumn ? `,${C.endColumn}` : ""}` : ""}`,
				});
			}
			function w(E) {
				let C;
				const d = /^L?(\d+)(?:,(\d+))?(-L?(\d+)(?:,(\d+))?)?/.exec(E.fragment);
				return (
					d &&
						((C = {
							startLineNumber: parseInt(d[1]),
							startColumn: d[2] ? parseInt(d[2]) : 1,
							endLineNumber: d[4] ? parseInt(d[4]) : void 0,
							endColumn: d[4] ? (d[5] ? parseInt(d[5]) : 1) : void 0,
						}),
						(E = E.with({ fragment: "" }))),
					{ selection: C, uri: E }
				);
			}
		})
