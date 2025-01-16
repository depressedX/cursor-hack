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
		define(
			de[575],
			he([1, 0, 202, 213, 2020, 1081, 2025]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.pipeTo = d),
					(e.sinkAll = r),
					(e.sinkAllBytes = u),
					(e.pipe = a),
					(e.transformCatch = c),
					(e.transformCatchFinally = n),
					(e.transformAppend = g),
					(e.transformPrepend = p),
					(e.transformReadAllBytes = o),
					(e.transformSerializeEnvelope = f),
					(e.transformParseEnvelope = b),
					(e.transformCompressEnvelope = s),
					(e.transformDecompressEnvelope = l),
					(e.transformJoinEnvelopes = y),
					(e.transformSplitEnvelope = $),
					(e.readAllBytes = v),
					(e.untilFirst = I),
					(e.makeIterableAbortable = T),
					(e.createWritableIterable = P),
					(e.createAsyncIterable = k);
				function d(L, ...D) {
					const [M, N, A] = m(D);
					let R = L,
						O;
					return (
						A?.propagateDownStreamError === !0 && (R = O = T(R)),
						(R = a(R, ...M, { propagateDownStreamError: !1 })),
						N(R).catch((B) =>
							O ? O.abort(B).then(() => Promise.reject(B)) : Promise.reject(B),
						)
					);
				}
				function m(L) {
					let D;
					typeof L[L.length - 1] != "function" && (D = L.pop());
					const M = L.pop();
					return [L, M, D];
				}
				function r() {
					return async function (L) {
						const D = [];
						for await (const M of L) D.push(M);
						return D;
					};
				}
				function u(L, D) {
					return async function (M) {
						return await v(M, L, D);
					};
				}
				async function* a(L, ...D) {
					const [M, N] = h(D);
					let A;
					const R = L[Symbol.asyncIterator]();
					let B = {
						[Symbol.asyncIterator]() {
							return R;
						},
					};
					N?.propagateDownStreamError === !0 && (B = A = T(B));
					for (const z of M) B = z(B);
					const U = B[Symbol.asyncIterator]();
					try {
						for (;;) {
							const z = await U.next();
							if (z.done === !0) break;
							if (!A) {
								yield z.value;
								continue;
							}
							try {
								yield z.value;
							} catch (F) {
								throw (await A.abort(F), F);
							}
						}
					} finally {
						N?.propagateDownStreamError === !0 && R.return?.().catch(() => {});
					}
				}
				function h(L) {
					let D;
					return typeof L[L.length - 1] != "function" && (D = L.pop()), [L, D];
				}
				function c(L) {
					return async function* (D) {
						const M = D[Symbol.asyncIterator]();
						for (;;) {
							let N;
							try {
								N = await M.next();
							} catch (A) {
								const R = await L(A);
								R !== void 0 && (yield R);
								break;
							}
							if (N.done === !0) break;
							yield N.value;
						}
					};
				}
				function n(L) {
					return async function* (D) {
						let M;
						const N = D[Symbol.asyncIterator]();
						for (;;) {
							let R;
							try {
								R = await N.next();
							} catch (O) {
								M = O;
								break;
							}
							if (R.done === !0) break;
							yield R.value;
						}
						const A = await L(M);
						A !== void 0 && (yield A);
					};
				}
				function g(L) {
					return async function* (D) {
						for await (const N of D) yield N;
						const M = await L();
						M !== void 0 && (yield M);
					};
				}
				function p(L) {
					return async function* (D) {
						const M = await L();
						M !== void 0 && (yield M);
						for await (const N of D) yield N;
					};
				}
				function o(L, D) {
					return async function* (M) {
						yield await v(M, L, D);
					};
				}
				function f(L, D, M) {
					return D === void 0 || M === void 0
						? async function* (N) {
								for await (const A of N)
									yield { flags: 0, data: L.serialize(A) };
							}
						: async function* (N) {
								for await (const A of N) {
									let R,
										O = 0;
									A.end
										? ((O = O | D), (R = M.serialize(A.value)))
										: (R = L.serialize(A.value)),
										yield { flags: O, data: R };
								}
							};
				}
				function b(L, D, M) {
					return M && D !== void 0
						? async function* (N) {
								for await (const { flags: A, data: R } of N)
									(A & D) === D
										? yield { value: M.parse(R), end: !0 }
										: yield { value: L.parse(R), end: !1 };
							}
						: async function* (N) {
								for await (const { flags: A, data: R } of N) {
									if (D !== void 0 && (A & D) === D) {
										if (M === null)
											throw new i.ConnectError(
												"unexpected end flag",
												t.Code.InvalidArgument,
											);
										continue;
									}
									yield L.parse(R);
								}
							};
				}
				function s(L, D) {
					return async function* (M) {
						for await (const N of M)
							yield await (0, w.envelopeCompress)(N, L, D);
					};
				}
				function l(L, D) {
					return async function* (M) {
						for await (const N of M)
							yield await (0, w.envelopeDecompress)(N, L, D);
					};
				}
				function y() {
					return async function* (L) {
						for await (const { flags: D, data: M } of L)
							yield (0, w.encodeEnvelope)(D, M);
					};
				}
				function $(L) {
					function D(N, A) {
						if (N.byteLength < 5 + A.length) return;
						const R = N.subarray(5, 5 + A.length);
						return N.consume(5 + A.length), { flags: A.flags, data: R };
					}
					function M(N) {
						if (N.byteLength < 5) return;
						const A = N.subarray(0, 5),
							R = new DataView(A.buffer, A.byteOffset, A.byteLength),
							O = R.getUint32(1),
							B = R.getUint8(0);
						return { length: O, flags: B };
					}
					return async function* (N) {
						const A = new C.Uint8ArrayList();
						for await (const R of N)
							for (A.append(R); ; ) {
								const O = M(A);
								if (!O) break;
								(0, E.assertReadMaxBytes)(L, O.length, !0);
								const B = D(A, O);
								if (!B) break;
								yield B;
							}
						if (A.byteLength > 0) {
							const R = M(A);
							let O = "protocol error: incomplete envelope";
							throw (
								(R &&
									(O = `protocol error: promised ${R.length} bytes in enveloped message, got ${A.byteLength - 5} bytes`),
								new i.ConnectError(O, t.Code.InvalidArgument))
							);
						}
					};
				}
				async function v(L, D, M) {
					const [N, A] = S(M);
					if (N) {
						A > D && (0, E.assertReadMaxBytes)(D, A, !0);
						const z = new Uint8Array(A);
						let F = 0;
						for await (const x of L) {
							if (F + x.byteLength > A)
								throw new i.ConnectError(
									`protocol error: promised ${A} bytes, received ${F + x.byteLength}`,
									t.Code.InvalidArgument,
								);
							z.set(x, F), (F += x.byteLength);
						}
						if (F < A)
							throw new i.ConnectError(
								`protocol error: promised ${A} bytes, received ${F}`,
								t.Code.InvalidArgument,
							);
						return z;
					}
					const R = [];
					let O = 0;
					for await (const z of L)
						(O += z.byteLength), (0, E.assertReadMaxBytes)(D, O), R.push(z);
					const B = new Uint8Array(O);
					let U = 0;
					for (let z = R.shift(); z; z = R.shift())
						B.set(z, U), (U += z.byteLength);
					return B;
				}
				function S(L) {
					if (L == null) return [!1, 0];
					const D = typeof L == "string" ? parseInt(L, 10) : L;
					return !Number.isSafeInteger(D) || D < 0 ? [!1, D] : [!0, D];
				}
				async function I(L) {
					const D = L[Symbol.asyncIterator]();
					let M = await D.next();
					return {
						[Symbol.asyncIterator]() {
							const N = {
								async next() {
									if (M !== null) {
										const A = M;
										return (M = null), A;
									}
									return await D.next();
								},
							};
							return (
								D.throw !== void 0 && (N.throw = (A) => D.throw(A)),
								D.return !== void 0 && (N.return = (A) => D.return(A)),
								N
							);
						},
					};
				}
				function T(L) {
					const D = L[Symbol.asyncIterator]();
					if (D.throw === void 0)
						throw new Error("AsyncIterable does not implement throw");
					const M = D;
					let N,
						A,
						R = {
							next() {
								return (
									(A = M.next().finally(() => {
										A = void 0;
									})),
									A
								);
							},
							throw(B) {
								return M.throw(B);
							},
						};
					D.return !== void 0 &&
						(R = {
							...R,
							return(B) {
								return M.return(B);
							},
						});
					let O = !1;
					return {
						abort(B) {
							if (N) return N.state;
							const U = () =>
								M.throw(B).then(
									(z) => (z.done === !0 ? "completed" : "caught"),
									() => "rethrown",
								);
							return A
								? ((N = { reason: B, state: A.then(U, U) }), N.state)
								: ((N = { reason: B, state: U() }), N.state);
						},
						[Symbol.asyncIterator]() {
							if (O) throw new Error("AsyncIterable cannot be re-used");
							return (O = !0), R;
						},
					};
				}
				function P() {
					const L = [],
						D = [];
					let M,
						N,
						A,
						R = new Promise((U, z) => {
							(N = U), (A = z);
						}),
						O = !1;
					function B() {
						for (const U of L.splice(0, L.length))
							U({ done: !0, value: void 0 });
					}
					return {
						close() {
							(O = !0), B();
						},
						async write(U) {
							if (O)
								throw (
									M ??
									new Error("cannot write, WritableIterable already closed")
								);
							const z = L.shift();
							if (z === void 0) D.push(U);
							else if ((z({ done: !1, value: U }), L.length > 0)) return;
							const F = D.length + 1;
							for (let x = 0; x < F; x++) await R;
						},
						[Symbol.asyncIterator]() {
							return {
								next() {
									N(),
										(R = new Promise((x, H) => {
											(N = x), (A = H);
										}));
									const U = D.shift();
									if (U !== void 0)
										return Promise.resolve({ done: !1, value: U });
									if (O) return Promise.resolve({ done: !0, value: void 0 });
									let z;
									const F = new Promise((x) => (z = x));
									return L.push(z), F;
								},
								throw(U) {
									return (
										(M = U),
										(O = !0),
										D.splice(0, D.length),
										R.catch(() => {}),
										A(M),
										B(),
										Promise.resolve({ done: !0, value: void 0 })
									);
								},
								return() {
									return (
										(O = !0),
										D.splice(0, D.length),
										N(),
										(R = Promise.reject(
											new Error("cannot write, consumer called return"),
										)),
										R.catch(() => {}),
										B(),
										Promise.resolve({ done: !0, value: void 0 })
									);
								},
							};
						},
					};
				}
				async function* k(L) {
					yield* L;
				}
			},
		),
		define(
			de[2026],
			he([1, 0, 202, 213, 575, 1082]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.createUniversalHandlerClient = C);
				function C(m) {
					const r = new Map();
					for (const u of m) r.set(u.requestPath, u);
					return async (u) => {
						const a = new URL(u.url).pathname,
							h = r.get(a);
						if (!h)
							throw new i.ConnectError(
								`RouterHttpClient: no handler registered for ${a}`,
								t.Code.Unimplemented,
							);
						const c = u.signal ?? new AbortController().signal,
							n = await d(
								c,
								h({
									body: u.body ?? (0, w.createAsyncIterable)([]),
									httpVersion: "2.0",
									method: u.method,
									url: u.url,
									header: u.header,
									signal: c,
								}),
							),
							g = n.body ?? (0, w.createAsyncIterable)([]);
						return {
							body: (0, w.pipe)(g, (p) => ({
								[Symbol.asyncIterator]() {
									const o = p[Symbol.asyncIterator](),
										f = {
											next() {
												return d(c, o.next());
											},
										};
									return (
										o.throw !== void 0 && (f.throw = (b) => o.throw(b)),
										o.return !== void 0 && (f.return = (b) => o.return(b)),
										f
									);
								},
							})),
							header: new Headers(n.header),
							status: n.status,
							trailer: new Headers(n.trailer),
						};
					};
				}
				function d(m, r) {
					let u;
					const a = new Promise((h, c) => {
						const n = () => c((0, E.getAbortSignalReason)(m));
						if (m.aborted) return n();
						m.addEventListener("abort", n),
							(u = () => m.removeEventListener("abort", n));
					});
					return Promise.race([a, r]).finally(u);
				}
			},
		),
		