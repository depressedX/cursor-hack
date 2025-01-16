define(de[2020], he([1, 0, 213, 202, 869]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.createEnvelopeReadableStream = E),
				(e.envelopeCompress = C),
				(e.envelopeDecompress = d),
				(e.encodeEnvelope = m),
				(e.encodeEnvelopes = r);
			function E(u) {
				let a,
					h = new Uint8Array(0);
				function c(n) {
					const g = new Uint8Array(h.length + n.length);
					g.set(h), g.set(n, h.length), (h = g);
				}
				return new ReadableStream({
					start() {
						a = u.getReader();
					},
					async pull(n) {
						let g;
						for (;;) {
							if (g === void 0 && h.byteLength >= 5) {
								let f = 0;
								for (let b = 1; b < 5; b++) f = (f << 8) + h[b];
								g = { flags: h[0], length: f };
							}
							if (g !== void 0 && h.byteLength >= g.length + 5) break;
							const o = await a.read();
							if (o.done) break;
							c(o.value);
						}
						if (g === void 0) {
							if (h.byteLength == 0) {
								n.close();
								return;
							}
							n.error(
								new t.ConnectError("premature end of stream", i.Code.DataLoss),
							);
							return;
						}
						const p = h.subarray(5, 5 + g.length);
						(h = h.subarray(5 + g.length)),
							n.enqueue({ flags: g.flags, data: p });
					},
				});
			}
			async function C(u, a, h) {
				let { flags: c, data: n } = u;
				if ((c & w.compressedFlag) === w.compressedFlag)
					throw new t.ConnectError(
						"invalid envelope, already compressed",
						i.Code.Internal,
					);
				return (
					a &&
						n.byteLength >= h &&
						((n = await a.compress(n)), (c = c | w.compressedFlag)),
					{ data: n, flags: c }
				);
			}
			async function d(u, a, h) {
				let { flags: c, data: n } = u;
				if ((c & w.compressedFlag) === w.compressedFlag) {
					if (!a)
						throw new t.ConnectError(
							"received compressed envelope, but do not know how to decompress",
							i.Code.Internal,
						);
					(n = await a.decompress(n, h)), (c = c ^ w.compressedFlag);
				}
				return { data: n, flags: c };
			}
			function m(u, a) {
				const h = new Uint8Array(a.length + 5);
				h.set(a, 5);
				const c = new DataView(h.buffer, h.byteOffset, h.byteLength);
				return c.setUint8(0, u), c.setUint32(1, a.length), h;
			}
			function r(...u) {
				const a = u.reduce((g, p) => g + p.data.length + 5, 0),
					h = new Uint8Array(a),
					c = new DataView(h.buffer);
				let n = 0;
				for (const g of u)
					c.setUint8(n, g.flags),
						c.setUint32(n + 1, g.data.length),
						h.set(g.data, n + 5),
						(n += g.data.length + 5);
				return h;
			}
		}),
		