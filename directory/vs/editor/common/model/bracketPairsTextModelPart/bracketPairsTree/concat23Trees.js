import '../../../../../../require.js';
import '../../../../../../exports.js';
import './ast.js';
define(de[2563], he([1, 0, 658]), function (ce /*require*/,
 e /*exports*/,
 t /*ast*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$3O = i),
				(e.$4O = w);
			function i(r) {
				if (r.length === 0) return null;
				if (r.length === 1) return r[0];
				let u = 0;
				function a() {
					if (u >= r.length) return null;
					const g = u,
						p = r[g].listHeight;
					for (u++; u < r.length && r[u].listHeight === p; ) u++;
					return u - g >= 2
						? w(g === 0 && u === r.length ? r : r.slice(g, u), !1)
						: r[g];
				}
				let h = a(),
					c = a();
				if (!c) return h;
				for (let g = a(); g; g = a())
					E(h, c) <= E(c, g) ? ((h = C(h, c)), (c = g)) : (c = C(c, g));
				return C(h, c);
			}
			function w(r, u = !1) {
				if (r.length === 0) return null;
				if (r.length === 1) return r[0];
				let a = r.length;
				for (; a > 3; ) {
					const h = a >> 1;
					for (let c = 0; c < h; c++) {
						const n = c << 1;
						r[c] = t.$mN.create23(
							r[n],
							r[n + 1],
							n + 3 === a ? r[n + 2] : null,
							u,
						);
					}
					a = h;
				}
				return t.$mN.create23(r[0], r[1], a >= 3 ? r[2] : null, u);
			}
			function E(r, u) {
				return Math.abs(r.listHeight - u.listHeight);
			}
			function C(r, u) {
				return r.listHeight === u.listHeight
					? t.$mN.create23(r, u, null, !1)
					: r.listHeight > u.listHeight
						? d(r, u)
						: m(u, r);
			}
			function d(r, u) {
				r = r.toMutable();
				let a = r;
				const h = [];
				let c;
				for (;;) {
					if (u.listHeight === a.listHeight) {
						c = u;
						break;
					}
					if (a.kind !== t.AstNodeKind.List) throw new Error("unexpected");
					h.push(a), (a = a.makeLastElementMutable());
				}
				for (let n = h.length - 1; n >= 0; n--) {
					const g = h[n];
					c
						? g.childrenLength >= 3
							? (c = t.$mN.create23(g.unappendChild(), c, null, !1))
							: (g.appendChildOfSameHeight(c), (c = void 0))
						: g.handleChildrenChanged();
				}
				return c ? t.$mN.create23(r, c, null, !1) : r;
			}
			function m(r, u) {
				r = r.toMutable();
				let a = r;
				const h = [];
				for (; u.listHeight !== a.listHeight; ) {
					if (a.kind !== t.AstNodeKind.List) throw new Error("unexpected");
					h.push(a), (a = a.makeFirstElementMutable());
				}
				let c = u;
				for (let n = h.length - 1; n >= 0; n--) {
					const g = h[n];
					c
						? g.childrenLength >= 3
							? (c = t.$mN.create23(c, g.unprependChild(), null, !1))
							: (g.prependChildOfSameHeight(c), (c = void 0))
						: g.handleChildrenChanged();
				}
				return c ? t.$mN.create23(c, r, null, !1) : r;
			}
		}),
		