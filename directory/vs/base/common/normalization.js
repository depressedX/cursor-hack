import '../../../require.js';
import '../../../exports.js';
import './map.js';
define(Pe[132], Ne([1, 0, 33]), function (we, t, e) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }),
				(t.$Dm = void 0),
				(t.$Bm = S),
				(t.$Cm = P);
			const r = new e.$Jc(1e4);
			function S(n) {
				return l(n, "NFC", r);
			}
			const N = new e.$Jc(1e4);
			function P(n) {
				return l(n, "NFD", N);
			}
			const I = /[^\u0000-\u0080]/;
			function l(n, p, y) {
				if (!n) return n;
				const d = y.get(n);
				if (d) return d;
				let k;
				return I.test(n) ? (k = n.normalize(p)) : (k = n), y.set(n, k), k;
			}
			t.$Dm = (function () {
				const n = /[\u0300-\u036f]/g;
				return function (p) {
					return P(p).replace(n, "");
				};
			})();
		}),
		