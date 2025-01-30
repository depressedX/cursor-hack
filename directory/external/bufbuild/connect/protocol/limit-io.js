import '../../../../require.js';
import '../../../../exports.js';
import '../connect-error.js';
import '../code.js';
define(de[1081], he([1, 0, 213, 202]), function (ce /*require*/,
 e /*exports*/,
 t /*connect-error*/,
 i /*code*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.validateReadWriteMaxBytes = d),
				(e.assertWriteMaxBytes = m),
				(e.assertReadMaxBytes = r);
			const w = 4294967295,
				E = w,
				C = 1024;
			function d(u, a, h) {
				if (((a ??= E), (u ??= w), (h ??= C), a < 1 || a > E))
					throw new t.ConnectError(
						`writeMaxBytes ${a} must be >= 1 and <= ${E}`,
						i.Code.Internal,
					);
				if (u < 1 || u > w)
					throw new t.ConnectError(
						`readMaxBytes ${u} must be >= 1 and <= ${w}`,
						i.Code.Internal,
					);
				return { readMaxBytes: u, writeMaxBytes: a, compressMinBytes: h };
			}
			function m(u, a) {
				if (a > u)
					throw new t.ConnectError(
						`message size ${a} is larger than configured writeMaxBytes ${u}`,
						i.Code.ResourceExhausted,
					);
			}
			function r(u, a, h = !1) {
				if (a > u) {
					let c = `message size is larger than configured readMaxBytes ${u}`;
					throw (
						(h &&
							(c = `message size ${a} is larger than configured readMaxBytes ${u}`),
						new t.ConnectError(c, i.Code.ResourceExhausted))
					);
				}
			}
		}),
		