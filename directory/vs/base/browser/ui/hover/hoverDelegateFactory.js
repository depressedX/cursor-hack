import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/lazy.js';
define(de[95], he([1, 0, 149]), function (ce /*require*/,
 e /*exports*/,
 t /*lazy*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$bib = d),
				(e.$cib = m),
				(e.$dib = r);
			let w = () => ({
				get delay() {
					return -1;
				},
				dispose: () => {},
				showHover: () => {},
			});
			const E = new t.$Y(() => w("mouse", !1)),
				C = new t.$Y(() => w("element", !1));
			function d(u) {
				w = u;
			}
			function m(u) {
				return u === "element" ? C.value : E.value;
			}
			function r() {
				return w("element", !0);
			}
		}),
		