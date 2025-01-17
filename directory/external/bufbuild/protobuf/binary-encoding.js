import '../../../require.js';
import '../../../exports.js';
import './google/varint.js';
import './private/assert.js';
import './proto-int64.js';
define(de[1085], he([1, 0, 1395, 451, 525]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.BinaryReader = e.BinaryWriter = e.WireType = void 0);
			var E;
			(function (m) {
				(m[(m.Varint = 0)] = "Varint"),
					(m[(m.Bit64 = 1)] = "Bit64"),
					(m[(m.LengthDelimited = 2)] = "LengthDelimited"),
					(m[(m.StartGroup = 3)] = "StartGroup"),
					(m[(m.EndGroup = 4)] = "EndGroup"),
					(m[(m.Bit32 = 5)] = "Bit32");
			})(E || (e.WireType = E = {}));
			class C {
				constructor(r) {
					(this.stack = []),
						(this.textEncoder = r ?? new TextEncoder()),
						(this.chunks = []),
						(this.buf = []);
				}
				finish() {
					this.chunks.push(new Uint8Array(this.buf));
					let r = 0;
					for (let h = 0; h < this.chunks.length; h++)
						r += this.chunks[h].length;
					let u = new Uint8Array(r),
						a = 0;
					for (let h = 0; h < this.chunks.length; h++)
						u.set(this.chunks[h], a), (a += this.chunks[h].length);
					return (this.chunks = []), u;
				}
				fork() {
					return (
						this.stack.push({ chunks: this.chunks, buf: this.buf }),
						(this.chunks = []),
						(this.buf = []),
						this
					);
				}
				join() {
					let r = this.finish(),
						u = this.stack.pop();
					if (!u) throw new Error("invalid state, fork stack empty");
					return (
						(this.chunks = u.chunks),
						(this.buf = u.buf),
						this.uint32(r.byteLength),
						this.raw(r)
					);
				}
				tag(r, u) {
					return this.uint32(((r << 3) | u) >>> 0);
				}
				raw(r) {
					return (
						this.buf.length &&
							(this.chunks.push(new Uint8Array(this.buf)), (this.buf = [])),
						this.chunks.push(r),
						this
					);
				}
				uint32(r) {
					for ((0, i.assertUInt32)(r); r > 127; )
						this.buf.push((r & 127) | 128), (r = r >>> 7);
					return this.buf.push(r), this;
				}
				int32(r) {
					return (0, i.assertInt32)(r), (0, t.varint32write)(r, this.buf), this;
				}
				bool(r) {
					return this.buf.push(r ? 1 : 0), this;
				}
				bytes(r) {
					return this.uint32(r.byteLength), this.raw(r);
				}
				string(r) {
					let u = this.textEncoder.encode(r);
					return this.uint32(u.byteLength), this.raw(u);
				}
				float(r) {
					(0, i.assertFloat32)(r);
					let u = new Uint8Array(4);
					return new DataView(u.buffer).setFloat32(0, r, !0), this.raw(u);
				}
				double(r) {
					let u = new Uint8Array(8);
					return new DataView(u.buffer).setFloat64(0, r, !0), this.raw(u);
				}
				fixed32(r) {
					(0, i.assertUInt32)(r);
					let u = new Uint8Array(4);
					return new DataView(u.buffer).setUint32(0, r, !0), this.raw(u);
				}
				sfixed32(r) {
					(0, i.assertInt32)(r);
					let u = new Uint8Array(4);
					return new DataView(u.buffer).setInt32(0, r, !0), this.raw(u);
				}
				sint32(r) {
					return (
						(0, i.assertInt32)(r),
						(r = ((r << 1) ^ (r >> 31)) >>> 0),
						(0, t.varint32write)(r, this.buf),
						this
					);
				}
				sfixed64(r) {
					let u = new Uint8Array(8),
						a = new DataView(u.buffer),
						h = w.protoInt64.enc(r);
					return a.setInt32(0, h.lo, !0), a.setInt32(4, h.hi, !0), this.raw(u);
				}
				fixed64(r) {
					let u = new Uint8Array(8),
						a = new DataView(u.buffer),
						h = w.protoInt64.uEnc(r);
					return a.setInt32(0, h.lo, !0), a.setInt32(4, h.hi, !0), this.raw(u);
				}
				int64(r) {
					let u = w.protoInt64.enc(r);
					return (0, t.varint64write)(u.lo, u.hi, this.buf), this;
				}
				sint64(r) {
					let u = w.protoInt64.enc(r),
						a = u.hi >> 31,
						h = (u.lo << 1) ^ a,
						c = ((u.hi << 1) | (u.lo >>> 31)) ^ a;
					return (0, t.varint64write)(h, c, this.buf), this;
				}
				uint64(r) {
					let u = w.protoInt64.uEnc(r);
					return (0, t.varint64write)(u.lo, u.hi, this.buf), this;
				}
			}
			e.BinaryWriter = C;
			class d {
				constructor(r, u) {
					(this.varint64 = t.varint64read),
						(this.uint32 = t.varint32read),
						(this.buf = r),
						(this.len = r.length),
						(this.pos = 0),
						(this.view = new DataView(r.buffer, r.byteOffset, r.byteLength)),
						(this.textDecoder = u ?? new TextDecoder());
				}
				tag() {
					let r = this.uint32(),
						u = r >>> 3,
						a = r & 7;
					if (u <= 0 || a < 0 || a > 5)
						throw new Error("illegal tag: field no " + u + " wire type " + a);
					return [u, a];
				}
				skip(r, u) {
					let a = this.pos;
					switch (r) {
						case E.Varint:
							for (; this.buf[this.pos++] & 128; );
							break;
						case E.Bit64:
							this.pos += 4;
						case E.Bit32:
							this.pos += 4;
							break;
						case E.LengthDelimited:
							let h = this.uint32();
							this.pos += h;
							break;
						case E.StartGroup:
							for (;;) {
								const [c, n] = this.tag();
								if (n === E.EndGroup) {
									if (u !== void 0 && c !== u)
										throw new Error("invalid end group tag");
									break;
								}
								this.skip(n, c);
							}
							break;
						default:
							throw new Error("cant skip wire type " + r);
					}
					return this.assertBounds(), this.buf.subarray(a, this.pos);
				}
				assertBounds() {
					if (this.pos > this.len) throw new RangeError("premature EOF");
				}
				int32() {
					return this.uint32() | 0;
				}
				sint32() {
					let r = this.uint32();
					return (r >>> 1) ^ -(r & 1);
				}
				int64() {
					return w.protoInt64.dec(...this.varint64());
				}
				uint64() {
					return w.protoInt64.uDec(...this.varint64());
				}
				sint64() {
					let [r, u] = this.varint64(),
						a = -(r & 1);
					return (
						(r = ((r >>> 1) | ((u & 1) << 31)) ^ a),
						(u = (u >>> 1) ^ a),
						w.protoInt64.dec(r, u)
					);
				}
				bool() {
					let [r, u] = this.varint64();
					return r !== 0 || u !== 0;
				}
				fixed32() {
					return this.view.getUint32((this.pos += 4) - 4, !0);
				}
				sfixed32() {
					return this.view.getInt32((this.pos += 4) - 4, !0);
				}
				fixed64() {
					return w.protoInt64.uDec(this.sfixed32(), this.sfixed32());
				}
				sfixed64() {
					return w.protoInt64.dec(this.sfixed32(), this.sfixed32());
				}
				float() {
					return this.view.getFloat32((this.pos += 4) - 4, !0);
				}
				double() {
					return this.view.getFloat64((this.pos += 8) - 8, !0);
				}
				bytes() {
					let r = this.uint32(),
						u = this.pos;
					return (
						(this.pos += r), this.assertBounds(), this.buf.subarray(u, u + r)
					);
				}
				string() {
					return this.textDecoder.decode(this.bytes());
				}
			}
			e.BinaryReader = d;
		}),
		