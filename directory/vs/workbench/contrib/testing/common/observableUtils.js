import '../../../../../require.js';
import '../../../../../exports.js';
define(de[3176], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$SKc = t);
			function t(i, w) {
				const E = {
					beginUpdate() {},
					endUpdate() {},
					handlePossibleChange(C) {
						C.reportChanges();
					},
					handleChange(C, d) {
						w(d);
					},
				};
				return (
					i.addObserver(E),
					{
						dispose() {
							i.removeObserver(E);
						},
					}
				);
			}
		}),
		