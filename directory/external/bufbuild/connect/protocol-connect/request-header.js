import '../../../../require.js';
import '../../../../exports.js';
import '../../protobuf.js';
import './headers.js';
import './version.js';
import './content-type.js';
define(
			de[2047],
			he([1, 0, 86, 574, 1080, 1079]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.requestHeader = C),
					(e.requestHeaderWithCompression = d);
				function C(m, r, u, a, h) {
					const c = new Headers(a ?? {});
					return (
						u !== void 0 && c.set(i.headerTimeout, `${u}`),
						c.set(
							i.headerContentType,
							m == t.MethodKind.Unary
								? r
									? E.contentTypeUnaryProto
									: E.contentTypeUnaryJson
								: r
									? E.contentTypeStreamProto
									: E.contentTypeStreamJson,
						),
						c.set(i.headerProtocolVersion, w.protocolVersion),
						h && c.set(i.headerUserAgent, "CONNECT_ES_USER_AGENT"),
						c
					);
				}
				function d(m, r, u, a, h, c, n) {
					const g = C(m, r, u, a, n);
					if (c != null) {
						const p =
							m == t.MethodKind.Unary
								? i.headerUnaryEncoding
								: i.headerStreamEncoding;
						g.set(p, c.name);
					}
					if (h.length > 0) {
						const p =
							m == t.MethodKind.Unary
								? i.headerUnaryAcceptEncoding
								: i.headerStreamAcceptEncoding;
						g.set(p, h.map((o) => o.name).join(","));
					}
					return g;
				}
			},
		),
		