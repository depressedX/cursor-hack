import '../../../../require.js';
import '../../../../exports.js';
import '../connect-error.js';
import '../code.js';
import './limit-io.js';
define(de[872], he([1, 0, 213, 202, 1081]), function (ce /*require*/,
 e /*exports*/,
 t /*connect-error*/,
 i /*code*/,
 w /*limit-io*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.getJsonOptions = E),
				(e.createMethodSerializationLookup = C),
				(e.createClientMethodSerializers = d),
				(e.limitSerialization = m),
				(e.createBinarySerialization = r),
				(e.createJsonSerialization = u);
			function E(a) {
				const h = { ...a };
				return (h.ignoreUnknownFields ??= !0), h;
			}
			function C(a, h, c, n) {
				const g = m(r(a.I, h), n),
					p = m(u(a.I, c), n),
					o = m(r(a.O, h), n),
					f = m(u(a.O, c), n);
				return {
					getI(b) {
						return b ? g : p;
					},
					getO(b) {
						return b ? o : f;
					},
				};
			}
			function d(a, h, c, n) {
				const g = h ? r(a.I, n) : u(a.I, c);
				return {
					parse: (h ? r(a.O, n) : u(a.O, c)).parse,
					serialize: g.serialize,
				};
			}
			function m(a, h) {
				return {
					serialize(c) {
						const n = a.serialize(c);
						return (0, w.assertWriteMaxBytes)(h.writeMaxBytes, n.byteLength), n;
					},
					parse(c) {
						return (
							(0, w.assertReadMaxBytes)(h.readMaxBytes, c.byteLength, !0),
							a.parse(c)
						);
					},
				};
			}
			function r(a, h) {
				return {
					parse(c) {
						try {
							return a.fromBinary(c, h);
						} catch (n) {
							const g = n instanceof Error ? n.message : String(n);
							throw new t.ConnectError(`parse binary: ${g}`, i.Code.Internal);
						}
					},
					serialize(c) {
						try {
							return c.toBinary(h);
						} catch (n) {
							const g = n instanceof Error ? n.message : String(n);
							throw new t.ConnectError(
								`serialize binary: ${g}`,
								i.Code.Internal,
							);
						}
					},
				};
			}
			function u(a, h) {
				const c = h?.textEncoder ?? new TextEncoder(),
					n = h?.textDecoder ?? new TextDecoder(),
					g = E(h);
				return {
					parse(p) {
						try {
							const o = n.decode(p);
							return a.fromJsonString(o, g);
						} catch (o) {
							throw t.ConnectError.from(o, i.Code.InvalidArgument);
						}
					},
					serialize(p) {
						try {
							const o = p.toJsonString(g);
							return c.encode(o);
						} catch (o) {
							throw t.ConnectError.from(o, i.Code.Internal);
						}
					},
				};
			}
		})
