import '../../../../require.js';
import '../../../../exports.js';
import './alloc.js';
import './util/as-uint8array.js';
define(de[2024], he([1, 0, 1394, 2023]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.concat = w);
			function w(E, C) {
				C == null && (C = E.reduce((r, u) => r + u.length, 0));
				const d = (0, t.allocUnsafe)(C);
				let m = 0;
				for (const r of E) d.set(r, m), (m += r.length);
				return (0, i.asUint8Array)(d);
			}
		}),
		