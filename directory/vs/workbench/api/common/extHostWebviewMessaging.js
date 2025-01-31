import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/buffer.js';
import './extHost.protocol.js';
define(de[3374], he([1, 0, 76, 88]), function (ce /*require*/,
 e /*exports*/,
 t /*buffer*/,
 i /*extHost.protocol*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Jmc = E),
				(e.$Kmc = d),
				(i = mt(i));
			class w {
				constructor() {
					this.buffers = [];
				}
				add(r) {
					let u = this.buffers.indexOf(r);
					return u < 0 && ((u = this.buffers.length), this.buffers.push(r)), u;
				}
			}
			function E(m, r) {
				if (r.serializeBuffersForPostMessage) {
					const u = new w(),
						h = JSON.stringify(m, (n, g) => {
							if (g instanceof ArrayBuffer)
								return {
									$$vscode_array_buffer_reference$$: !0,
									index: u.add(g),
								};
							if (ArrayBuffer.isView(g)) {
								const p = C(g);
								if (p)
									return {
										$$vscode_array_buffer_reference$$: !0,
										index: u.add(g.buffer),
										view: {
											type: p,
											byteLength: g.byteLength,
											byteOffset: g.byteOffset,
										},
									};
							}
							return g;
						}),
						c = u.buffers.map((n) => {
							const g = new Uint8Array(n);
							return t.$Te.wrap(g);
						});
					return { message: h, buffers: c };
				} else return { message: JSON.stringify(m), buffers: [] };
			}
			function C(m) {
				switch (m.constructor.name) {
					case "Int8Array":
						return i.WebviewMessageArrayBufferViewType.Int8Array;
					case "Uint8Array":
						return i.WebviewMessageArrayBufferViewType.Uint8Array;
					case "Uint8ClampedArray":
						return i.WebviewMessageArrayBufferViewType.Uint8ClampedArray;
					case "Int16Array":
						return i.WebviewMessageArrayBufferViewType.Int16Array;
					case "Uint16Array":
						return i.WebviewMessageArrayBufferViewType.Uint16Array;
					case "Int32Array":
						return i.WebviewMessageArrayBufferViewType.Int32Array;
					case "Uint32Array":
						return i.WebviewMessageArrayBufferViewType.Uint32Array;
					case "Float32Array":
						return i.WebviewMessageArrayBufferViewType.Float32Array;
					case "Float64Array":
						return i.WebviewMessageArrayBufferViewType.Float64Array;
					case "BigInt64Array":
						return i.WebviewMessageArrayBufferViewType.BigInt64Array;
					case "BigUint64Array":
						return i.WebviewMessageArrayBufferViewType.BigUint64Array;
				}
			}
			function d(m, r) {
				const u = r.map((c) => {
						const n = new ArrayBuffer(c.byteLength);
						return new Uint8Array(n).set(c.buffer), n;
					}),
					a = r.length
						? (c, n) => {
								if (
									n &&
									typeof n == "object" &&
									n.$$vscode_array_buffer_reference$$
								) {
									const g = n,
										{ index: p } = g,
										o = u[p];
									if (g.view)
										switch (g.view.type) {
											case i.WebviewMessageArrayBufferViewType.Int8Array:
												return new Int8Array(
													o,
													g.view.byteOffset,
													g.view.byteLength / Int8Array.BYTES_PER_ELEMENT,
												);
											case i.WebviewMessageArrayBufferViewType.Uint8Array:
												return new Uint8Array(
													o,
													g.view.byteOffset,
													g.view.byteLength / Uint8Array.BYTES_PER_ELEMENT,
												);
											case i.WebviewMessageArrayBufferViewType
												.Uint8ClampedArray:
												return new Uint8ClampedArray(
													o,
													g.view.byteOffset,
													g.view.byteLength /
														Uint8ClampedArray.BYTES_PER_ELEMENT,
												);
											case i.WebviewMessageArrayBufferViewType.Int16Array:
												return new Int16Array(
													o,
													g.view.byteOffset,
													g.view.byteLength / Int16Array.BYTES_PER_ELEMENT,
												);
											case i.WebviewMessageArrayBufferViewType.Uint16Array:
												return new Uint16Array(
													o,
													g.view.byteOffset,
													g.view.byteLength / Uint16Array.BYTES_PER_ELEMENT,
												);
											case i.WebviewMessageArrayBufferViewType.Int32Array:
												return new Int32Array(
													o,
													g.view.byteOffset,
													g.view.byteLength / Int32Array.BYTES_PER_ELEMENT,
												);
											case i.WebviewMessageArrayBufferViewType.Uint32Array:
												return new Uint32Array(
													o,
													g.view.byteOffset,
													g.view.byteLength / Uint32Array.BYTES_PER_ELEMENT,
												);
											case i.WebviewMessageArrayBufferViewType.Float32Array:
												return new Float32Array(
													o,
													g.view.byteOffset,
													g.view.byteLength / Float32Array.BYTES_PER_ELEMENT,
												);
											case i.WebviewMessageArrayBufferViewType.Float64Array:
												return new Float64Array(
													o,
													g.view.byteOffset,
													g.view.byteLength / Float64Array.BYTES_PER_ELEMENT,
												);
											case i.WebviewMessageArrayBufferViewType.BigInt64Array:
												return new BigInt64Array(
													o,
													g.view.byteOffset,
													g.view.byteLength / BigInt64Array.BYTES_PER_ELEMENT,
												);
											case i.WebviewMessageArrayBufferViewType.BigUint64Array:
												return new BigUint64Array(
													o,
													g.view.byteOffset,
													g.view.byteLength / BigUint64Array.BYTES_PER_ELEMENT,
												);
											default:
												throw new Error("Unknown array buffer view type");
										}
									return o;
								}
								return n;
							}
						: void 0;
				return { message: JSON.parse(m, a), arrayBuffers: u };
			}
		})
