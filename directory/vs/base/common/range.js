import '../../../require.js';
import '../../../exports.js';
define(de[902], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.Range = void 0);
			var t;
			(function (i) {
				function w(m, r) {
					if (m.start >= r.end || r.start >= m.end) return { start: 0, end: 0 };
					const u = Math.max(m.start, r.start),
						a = Math.min(m.end, r.end);
					return a - u <= 0 ? { start: 0, end: 0 } : { start: u, end: a };
				}
				i.intersect = w;
				function E(m) {
					return m.end - m.start <= 0;
				}
				i.isEmpty = E;
				function C(m, r) {
					return !E(w(m, r));
				}
				i.intersects = C;
				function d(m, r) {
					const u = [],
						a = { start: m.start, end: Math.min(r.start, m.end) },
						h = { start: Math.max(r.end, m.start), end: m.end };
					return E(a) || u.push(a), E(h) || u.push(h), u;
				}
				i.relativeComplement = d;
			})(t || (e.Range = t = {}));
		}),
		