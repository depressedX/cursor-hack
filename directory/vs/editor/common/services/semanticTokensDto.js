import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/buffer.js';
import '../../../base/common/platform.js';
define(de[1591], he([1, 0, 76, 12]), function (ce /*require*/,
 e /*exports*/,
 t /*buffer*/,
 i /*platform*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$7Ob = m),
				(e.$8Ob = u),
				(i = mt(i));
			var w;
			(function (a) {
				(a[(a.Full = 1)] = "Full"), (a[(a.Delta = 2)] = "Delta");
			})(w || (w = {}));
			function E(a) {
				for (let h = 0, c = a.length; h < c; h += 4) {
					const n = a[h + 0],
						g = a[h + 1],
						p = a[h + 2],
						o = a[h + 3];
					(a[h + 0] = o), (a[h + 1] = p), (a[h + 2] = g), (a[h + 3] = n);
				}
			}
			function C(a) {
				const h = new Uint8Array(a.buffer, a.byteOffset, a.length * 4);
				return i.$G() || E(h), t.$Te.wrap(h);
			}
			function d(a) {
				const h = a.buffer;
				if ((i.$G() || E(h), h.byteOffset % 4 === 0))
					return new Uint32Array(h.buffer, h.byteOffset, h.length / 4);
				{
					const c = new Uint8Array(h.byteLength);
					return (
						c.set(h), new Uint32Array(c.buffer, c.byteOffset, c.length / 4)
					);
				}
			}
			function m(a) {
				const h = new Uint32Array(r(a));
				let c = 0;
				if (((h[c++] = a.id), a.type === "full"))
					(h[c++] = w.Full),
						(h[c++] = a.data.length),
						h.set(a.data, c),
						(c += a.data.length);
				else {
					(h[c++] = w.Delta), (h[c++] = a.deltas.length);
					for (const n of a.deltas)
						(h[c++] = n.start),
							(h[c++] = n.deleteCount),
							n.data
								? ((h[c++] = n.data.length),
									h.set(n.data, c),
									(c += n.data.length))
								: (h[c++] = 0);
				}
				return C(h);
			}
			function r(a) {
				let h = 0;
				if (((h += 2), a.type === "full")) h += 1 + a.data.length;
				else {
					(h += 1), (h += 3 * a.deltas.length);
					for (const c of a.deltas) c.data && (h += c.data.length);
				}
				return h;
			}
			function u(a) {
				const h = d(a);
				let c = 0;
				const n = h[c++];
				if (h[c++] === w.Full) {
					const f = h[c++],
						b = h.subarray(c, c + f);
					return (c += f), { id: n, type: "full", data: b };
				}
				const p = h[c++],
					o = [];
				for (let f = 0; f < p; f++) {
					const b = h[c++],
						s = h[c++],
						l = h[c++];
					let y;
					l > 0 && ((y = h.subarray(c, c + l)), (c += l)),
						(o[f] = { start: b, deleteCount: s, data: y });
				}
				return { id: n, type: "delta", deltas: o };
			}
		}),
		