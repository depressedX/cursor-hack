import '../../../require.js';
import '../../../exports.js';
import './binary-encoding.js';
define(de[2031], he([1, 0, 1085]), function (ce /*require*/,
 e /*exports*/,
 t /*binary-encoding*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.protoDelimited = void 0),
				(e.protoDelimited = {
					enc(i, w) {
						const E = i.getType().runtime.bin.makeWriteOptions(w);
						return E.writerFactory().bytes(i.toBinary(E)).finish();
					},
					dec(i, w, E) {
						const C = i.runtime.bin.makeReadOptions(E);
						return i.fromBinary(C.readerFactory(w).bytes(), C);
					},
					async *decStream(i, w) {
						function E(d, m) {
							const r = new Uint8Array(d.byteLength + m.byteLength);
							return r.set(d), r.set(m, d.length), r;
						}
						let C = new Uint8Array(0);
						for await (const d of w)
							for (C = E(C, d); ; ) {
								const m = e.protoDelimited.peekSize(C);
								if (m.eof || m.offset + m.size > C.byteLength) break;
								yield e.protoDelimited.dec(i, C),
									(C = C.subarray(m.offset + m.size));
							}
						if (C.byteLength > 0) throw new Error("incomplete data");
					},
					peekSize(i) {
						const w = { eof: !0, size: null, offset: null };
						for (let E = 0; E < 10; E++) {
							if (E > i.byteLength) return w;
							if (!(i[E] & 128)) {
								const C = new t.BinaryReader(i);
								let d;
								try {
									d = C.uint32();
								} catch (m) {
									if (m instanceof RangeError) return w;
									throw m;
								}
								return { eof: !1, size: d, offset: C.pos };
							}
						}
						throw new Error("invalid varint");
					},
				});
		}),
		