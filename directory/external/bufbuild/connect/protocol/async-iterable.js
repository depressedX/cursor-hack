import '../../../../require.js';
import '../../../../exports.js';
import '../code.js';
import '../connect-error.js';
import './envelope.js';
import './limit-io.js';
import '../uint8arraylist/index.js';
define(
			de[575],
			he([1, 0, 202, 213, 2020, 1081, 2025]),
			function (ce /*require*/,
 e /*exports*/,
 t /*code*/,
 i /*connect-error*/,
 w /*envelope*/,
 E /*limit-io*/,
 C /*index*/) {
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
		)
