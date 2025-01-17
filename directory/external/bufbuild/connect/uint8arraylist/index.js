import '../../../../require.js';
import '../../../../exports.js';
import '../uint8arrays/alloc.js';
import '../uint8arrays/concat.js';
import '../uint8arrays/equals.js';
define(de[2025], he([1, 0, 1394, 2024, 2022]), function (ce, e, t, i, w) {
			"use strict";
			var E;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.Uint8ArrayList = void 0),
				(e.isUint8ArrayList = m);
			const C = Symbol.for("@achingbrain/uint8arraylist");
			function d(u, a) {
				if (a == null || a < 0) throw new RangeError("index is out of bounds");
				let h = 0;
				for (const c of u) {
					const n = h + c.byteLength;
					if (a < n) return { buf: c, index: a - h };
					h = n;
				}
				throw new RangeError("index is out of bounds");
			}
			function m(u) {
				return !!u?.[C];
			}
			class r {
				constructor(...a) {
					(this[E] = !0),
						(this.bufs = []),
						(this.length = 0),
						a.length > 0 && this.appendAll(a);
				}
				*[((E = C), Symbol.iterator)]() {
					yield* this.bufs;
				}
				get byteLength() {
					return this.length;
				}
				append(...a) {
					this.appendAll(a);
				}
				appendAll(a) {
					let h = 0;
					for (const c of a)
						if (c instanceof Uint8Array) (h += c.byteLength), this.bufs.push(c);
						else if (m(c)) (h += c.byteLength), this.bufs.push(...c.bufs);
						else
							throw new Error(
								"Could not append value, must be an Uint8Array or a Uint8ArrayList",
							);
					this.length += h;
				}
				prepend(...a) {
					this.prependAll(a);
				}
				prependAll(a) {
					let h = 0;
					for (const c of a.reverse())
						if (c instanceof Uint8Array)
							(h += c.byteLength), this.bufs.unshift(c);
						else if (m(c)) (h += c.byteLength), this.bufs.unshift(...c.bufs);
						else
							throw new Error(
								"Could not prepend value, must be an Uint8Array or a Uint8ArrayList",
							);
					this.length += h;
				}
				get(a) {
					const h = d(this.bufs, a);
					return h.buf[h.index];
				}
				set(a, h) {
					const c = d(this.bufs, a);
					c.buf[c.index] = h;
				}
				write(a, h = 0) {
					if (a instanceof Uint8Array)
						for (let c = 0; c < a.length; c++) this.set(h + c, a[c]);
					else if (m(a))
						for (let c = 0; c < a.length; c++) this.set(h + c, a.get(c));
					else
						throw new Error(
							"Could not write value, must be an Uint8Array or a Uint8ArrayList",
						);
				}
				consume(a) {
					if (((a = Math.trunc(a)), !(Number.isNaN(a) || a <= 0))) {
						if (a === this.byteLength) {
							(this.bufs = []), (this.length = 0);
							return;
						}
						for (; this.bufs.length > 0; )
							if (a >= this.bufs[0].byteLength)
								(a -= this.bufs[0].byteLength),
									(this.length -= this.bufs[0].byteLength),
									this.bufs.shift();
							else {
								(this.bufs[0] = this.bufs[0].subarray(a)), (this.length -= a);
								break;
							}
					}
				}
				slice(a, h) {
					const { bufs: c, length: n } = this._subList(a, h);
					return (0, i.concat)(c, n);
				}
				subarray(a, h) {
					const { bufs: c, length: n } = this._subList(a, h);
					return c.length === 1 ? c[0] : (0, i.concat)(c, n);
				}
				sublist(a, h) {
					const { bufs: c, length: n } = this._subList(a, h),
						g = new r();
					return (g.length = n), (g.bufs = [...c]), g;
				}
				_subList(a, h) {
					if (
						((a = a ?? 0),
						(h = h ?? this.length),
						a < 0 && (a = this.length + a),
						h < 0 && (h = this.length + h),
						a < 0 || h > this.length)
					)
						throw new RangeError("index is out of bounds");
					if (a === h) return { bufs: [], length: 0 };
					if (a === 0 && h === this.length)
						return { bufs: this.bufs, length: this.length };
					const c = [];
					let n = 0;
					for (let g = 0; g < this.bufs.length; g++) {
						const p = this.bufs[g],
							o = n,
							f = o + p.byteLength;
						if (((n = f), a >= f)) continue;
						const b = a >= o && a < f,
							s = h > o && h <= f;
						if (b && s) {
							if (a === o && h === f) {
								c.push(p);
								break;
							}
							const l = a - o;
							c.push(p.subarray(l, l + (h - a)));
							break;
						}
						if (b) {
							if (a === 0) {
								c.push(p);
								continue;
							}
							c.push(p.subarray(a - o));
							continue;
						}
						if (s) {
							if (h === f) {
								c.push(p);
								break;
							}
							c.push(p.subarray(0, h - o));
							break;
						}
						c.push(p);
					}
					return { bufs: c, length: h - a };
				}
				indexOf(a, h = 0) {
					if (!m(a) && !(a instanceof Uint8Array))
						throw new TypeError(
							'The "value" argument must be a Uint8ArrayList or Uint8Array',
						);
					const c = a instanceof Uint8Array ? a : a.subarray();
					if (
						((h = Number(h ?? 0)),
						isNaN(h) && (h = 0),
						h < 0 && (h = this.length + h),
						h < 0 && (h = 0),
						a.length === 0)
					)
						return h > this.length ? this.length : h;
					const n = c.byteLength;
					if (n === 0)
						throw new TypeError("search must be at least 1 byte long");
					const g = 256,
						p = new Int32Array(g);
					for (let l = 0; l < g; l++) p[l] = -1;
					for (let l = 0; l < n; l++) p[c[l]] = l;
					const o = p,
						f = this.byteLength - c.byteLength,
						b = c.byteLength - 1;
					let s;
					for (let l = h; l <= f; l += s) {
						s = 0;
						for (let y = b; y >= 0; y--) {
							const $ = this.get(l + y);
							if (c[y] !== $) {
								s = Math.max(1, y - o[$]);
								break;
							}
						}
						if (s === 0) return l;
					}
					return -1;
				}
				getInt8(a) {
					const h = this.subarray(a, a + 1);
					return new DataView(h.buffer, h.byteOffset, h.byteLength).getInt8(0);
				}
				setInt8(a, h) {
					const c = (0, t.allocUnsafe)(1);
					new DataView(c.buffer, c.byteOffset, c.byteLength).setInt8(0, h),
						this.write(c, a);
				}
				getInt16(a, h) {
					const c = this.subarray(a, a + 2);
					return new DataView(c.buffer, c.byteOffset, c.byteLength).getInt16(
						0,
						h,
					);
				}
				setInt16(a, h, c) {
					const n = (0, t.alloc)(2);
					new DataView(n.buffer, n.byteOffset, n.byteLength).setInt16(0, h, c),
						this.write(n, a);
				}
				getInt32(a, h) {
					const c = this.subarray(a, a + 4);
					return new DataView(c.buffer, c.byteOffset, c.byteLength).getInt32(
						0,
						h,
					);
				}
				setInt32(a, h, c) {
					const n = (0, t.alloc)(4);
					new DataView(n.buffer, n.byteOffset, n.byteLength).setInt32(0, h, c),
						this.write(n, a);
				}
				getBigInt64(a, h) {
					const c = this.subarray(a, a + 8);
					return new DataView(c.buffer, c.byteOffset, c.byteLength).getBigInt64(
						0,
						h,
					);
				}
				setBigInt64(a, h, c) {
					const n = (0, t.alloc)(8);
					new DataView(n.buffer, n.byteOffset, n.byteLength).setBigInt64(
						0,
						h,
						c,
					),
						this.write(n, a);
				}
				getUint8(a) {
					const h = this.subarray(a, a + 1);
					return new DataView(h.buffer, h.byteOffset, h.byteLength).getUint8(0);
				}
				setUint8(a, h) {
					const c = (0, t.allocUnsafe)(1);
					new DataView(c.buffer, c.byteOffset, c.byteLength).setUint8(0, h),
						this.write(c, a);
				}
				getUint16(a, h) {
					const c = this.subarray(a, a + 2);
					return new DataView(c.buffer, c.byteOffset, c.byteLength).getUint16(
						0,
						h,
					);
				}
				setUint16(a, h, c) {
					const n = (0, t.alloc)(2);
					new DataView(n.buffer, n.byteOffset, n.byteLength).setUint16(0, h, c),
						this.write(n, a);
				}
				getUint32(a, h) {
					const c = this.subarray(a, a + 4);
					return new DataView(c.buffer, c.byteOffset, c.byteLength).getUint32(
						0,
						h,
					);
				}
				setUint32(a, h, c) {
					const n = (0, t.alloc)(4);
					new DataView(n.buffer, n.byteOffset, n.byteLength).setUint32(0, h, c),
						this.write(n, a);
				}
				getBigUint64(a, h) {
					const c = this.subarray(a, a + 8);
					return new DataView(
						c.buffer,
						c.byteOffset,
						c.byteLength,
					).getBigUint64(0, h);
				}
				setBigUint64(a, h, c) {
					const n = (0, t.alloc)(8);
					new DataView(n.buffer, n.byteOffset, n.byteLength).setBigUint64(
						0,
						h,
						c,
					),
						this.write(n, a);
				}
				getFloat32(a, h) {
					const c = this.subarray(a, a + 4);
					return new DataView(c.buffer, c.byteOffset, c.byteLength).getFloat32(
						0,
						h,
					);
				}
				setFloat32(a, h, c) {
					const n = (0, t.alloc)(4);
					new DataView(n.buffer, n.byteOffset, n.byteLength).setFloat32(
						0,
						h,
						c,
					),
						this.write(n, a);
				}
				getFloat64(a, h) {
					const c = this.subarray(a, a + 8);
					return new DataView(c.buffer, c.byteOffset, c.byteLength).getFloat64(
						0,
						h,
					);
				}
				setFloat64(a, h, c) {
					const n = (0, t.alloc)(8);
					new DataView(n.buffer, n.byteOffset, n.byteLength).setFloat64(
						0,
						h,
						c,
					),
						this.write(n, a);
				}
				equals(a) {
					if (
						a == null ||
						!(a instanceof r) ||
						a.bufs.length !== this.bufs.length
					)
						return !1;
					for (let h = 0; h < this.bufs.length; h++)
						if (!(0, w.equals)(this.bufs[h], a.bufs[h])) return !1;
					return !0;
				}
				static fromUint8Arrays(a, h) {
					const c = new r();
					return (
						(c.bufs = a),
						h == null && (h = a.reduce((n, g) => n + g.byteLength, 0)),
						(c.length = h),
						c
					);
				}
			}
			e.Uint8ArrayList = r;
		}),
		