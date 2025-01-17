import '../../../require.js';
import '../../../exports.js';
import '../protobuf.js';
import './connect-error.js';
import './code.js';
define(de[876], he([1, 0, 86, 213, 202]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.encodeBinaryHeader = E),
				(e.decodeBinaryHeader = C),
				(e.appendHeaders = d);
			function E(m) {
				let r;
				return (
					typeof m == "object" && "getType" in m
						? (r = m.toBinary())
						: typeof m == "string"
							? (r = new TextEncoder().encode(m))
							: (r = m instanceof Uint8Array ? m : new Uint8Array(m)),
					t.protoBase64.enc(r).replace(/=+$/, "")
				);
			}
			function C(m, r, u) {
				try {
					const a = t.protoBase64.dec(m);
					return r ? r.fromBinary(a, u) : a;
				} catch (a) {
					throw i.ConnectError.from(a, w.Code.DataLoss);
				}
			}
			function d(...m) {
				const r = new Headers();
				for (const u of m)
					u.forEach((a, h) => {
						r.append(h, a);
					});
				return r;
			}
		}),
		