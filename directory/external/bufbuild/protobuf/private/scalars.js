import '../../../../require.js';
import '../../../../exports.js';
import '../proto-int64.js';
import '../scalar.js';
define(de[526], he([1, 0, 525, 429]), function (ce /*require*/,
 e /*exports*/,
 t /*proto-int64*/,
 i /*scalar*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.scalarEquals = w),
				(e.scalarZeroValue = E),
				(e.isScalarZeroValue = C);
			function w(d, m, r) {
				if (m === r) return !0;
				if (d == i.ScalarType.BYTES) {
					if (
						!(m instanceof Uint8Array) ||
						!(r instanceof Uint8Array) ||
						m.length !== r.length
					)
						return !1;
					for (let u = 0; u < m.length; u++) if (m[u] !== r[u]) return !1;
					return !0;
				}
				switch (d) {
					case i.ScalarType.UINT64:
					case i.ScalarType.FIXED64:
					case i.ScalarType.INT64:
					case i.ScalarType.SFIXED64:
					case i.ScalarType.SINT64:
						return m == r;
				}
				return !1;
			}
			function E(d, m) {
				switch (d) {
					case i.ScalarType.BOOL:
						return !1;
					case i.ScalarType.UINT64:
					case i.ScalarType.FIXED64:
					case i.ScalarType.INT64:
					case i.ScalarType.SFIXED64:
					case i.ScalarType.SINT64:
						return m == 0 ? t.protoInt64.zero : "0";
					case i.ScalarType.DOUBLE:
					case i.ScalarType.FLOAT:
						return 0;
					case i.ScalarType.BYTES:
						return new Uint8Array(0);
					case i.ScalarType.STRING:
						return "";
					default:
						return 0;
				}
			}
			function C(d, m) {
				switch (d) {
					case i.ScalarType.BOOL:
						return m === !1;
					case i.ScalarType.STRING:
						return m === "";
					case i.ScalarType.BYTES:
						return m instanceof Uint8Array && !m.byteLength;
					default:
						return m == 0;
				}
			}
		})
