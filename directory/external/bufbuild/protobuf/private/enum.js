import '../../../../require.js';
import '../../../../exports.js';
import './assert.js';
define(de[1083], he([1, 0, 451]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.getEnumType = w),
				(e.setEnumType = E),
				(e.makeEnumType = C),
				(e.makeEnum = d);
			const i = Symbol("@bufbuild/protobuf/enum-type");
			function w(r) {
				const u = r[i];
				return (0, t.assert)(u, "missing enum type on enum object"), u;
			}
			function E(r, u, a, h) {
				r[i] = C(
					u,
					a.map((c) => ({ no: c.no, name: c.name, localName: r[c.no] })),
					h,
				);
			}
			function C(r, u, a) {
				const h = Object.create(null),
					c = Object.create(null),
					n = [];
				for (const g of u) {
					const p = m(g);
					n.push(p), (h[g.name] = p), (c[g.no] = p);
				}
				return {
					typeName: r,
					values: n,
					findName(g) {
						return h[g];
					},
					findNumber(g) {
						return c[g];
					},
				};
			}
			function d(r, u, a) {
				const h = {};
				for (const c of u) {
					const n = m(c);
					(h[n.localName] = n.no), (h[n.no] = n.localName);
				}
				return E(h, r, u, a), h;
			}
			function m(r) {
				return "localName" in r ? r : { ...r, localName: r.name };
			}
		}),
		