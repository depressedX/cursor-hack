import '../../../../require.js';
import '../../../../exports.js';
import '../../protobuf.js';
import '../code.js';
import './http-status.js';
import '../connect-error.js';
import './content-type.js';
import './headers.js';
define(
			de[2048],
			he([1, 0, 86, 202, 1388, 213, 1079, 574]),
			function (ce /*require*/,
 e /*exports*/,
 t /*protobuf*/,
 i /*code*/,
 w /*http-status*/,
 E /*connect-error*/,
 C /*content-type*/,
 d /*headers*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.validateResponse = m),
					(e.validateResponseWithCompression = r);
				function m(u, a, h, c) {
					const n = c.get(d.headerContentType),
						g = (0, C.parseContentType)(n);
					if (h !== 200) {
						const o = new E.ConnectError(
							`HTTP ${h}`,
							(0, w.codeFromHttpStatus)(h),
							c,
						);
						if (u == t.MethodKind.Unary && g && !g.binary)
							return { isUnaryError: !0, unaryError: o };
						throw o;
					}
					const p = { binary: a, stream: u !== t.MethodKind.Unary };
					if (g?.binary !== p.binary || g.stream !== p.stream)
						throw new E.ConnectError(
							`unsupported content type ${n}`,
							g === void 0 ? i.Code.Unknown : i.Code.Internal,
							c,
						);
					return { isUnaryError: !1 };
				}
				function r(u, a, h, c, n) {
					let g;
					const p = n.get(
						u == t.MethodKind.Unary
							? d.headerUnaryEncoding
							: d.headerStreamEncoding,
					);
					if (
						p != null &&
						p.toLowerCase() !== "identity" &&
						((g = a.find((o) => o.name === p)), !g)
					)
						throw new E.ConnectError(
							`unsupported response encoding "${p}"`,
							i.Code.Internal,
							n,
						);
					return { compression: g, ...m(u, h, c, n) };
				}
			},
		),
		