import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/buffer.js';
import '../../../base/common/errors.js';
import '../../../nls.js';
import './files.js';
define(de[2731], he([1, 0, 76, 29, 4, 22]), function (ce /*require*/,
 e /*exports*/,
 t /*buffer*/,
 i /*errors*/,
 w /*nls*/,
 E /*files*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$rr = C);
			async function C(u, a, h, c, n, g) {
				let p;
				try {
					await d(u, a, h, c, n, g);
				} catch (o) {
					p = o;
				} finally {
					p && n.errorTransformer && (p = n.errorTransformer(p)),
						typeof p < "u" && h.error(p),
						h.end();
				}
			}
			async function d(u, a, h, c, n, g) {
				m(g);
				const p = await u.open(a, { create: !1 });
				try {
					m(g);
					let o = 0,
						f = 0,
						b = n && typeof n.length == "number" ? n.length : void 0,
						s = t.$Te.alloc(
							Math.min(n.bufferSize, typeof b == "number" ? b : n.bufferSize),
						),
						l = n && typeof n.position == "number" ? n.position : 0,
						y = 0;
					do
						(f = await u.read(p, l, s.buffer, y, s.byteLength - y)),
							(l += f),
							(y += f),
							(o += f),
							typeof b == "number" && (b -= f),
							y === s.byteLength &&
								(await h.write(c(s)),
								(s = t.$Te.alloc(
									Math.min(
										n.bufferSize,
										typeof b == "number" ? b : n.bufferSize,
									),
								)),
								(y = 0));
					while (f > 0 && (typeof b != "number" || b > 0) && m(g) && r(o, n));
					if (y > 0) {
						let $ = y;
						typeof b == "number" && ($ = Math.min(y, b)),
							h.write(c(s.slice(0, $)));
					}
				} catch (o) {
					throw (0, E.$zl)(o);
				} finally {
					await u.close(p);
				}
			}
			function m(u) {
				if (u.isCancellationRequested) throw (0, i.$0)();
				return !0;
			}
			function r(u, a) {
				if (typeof a?.limits?.size == "number" && u > a.limits.size)
					throw (0, E.$yl)(
						(0, w.localize)(1910, null),
						E.FileSystemProviderErrorCode.FileTooLarge,
					);
				return !0;
			}
		}),
		