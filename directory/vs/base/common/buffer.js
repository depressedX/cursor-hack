import '../../../require.js';
import '../../../exports.js';
import './lazy.js';
import './stream.js';
define(de[76], he([1, 0, 149, 408]), function (ce /*require*/,
 e /*exports*/,
 t /*lazy*/,
 i /*stream*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Te = void 0),
				(e.$Ue = r),
				(e.$Ve = u),
				(e.$We = a),
				(e.$Xe = h),
				(e.$Ye = c),
				(e.$Ze = n),
				(e.$1e = g),
				(e.$2e = p),
				(e.$3e = o),
				(e.$4e = f),
				(e.$5e = b),
				(e.$6e = s),
				(e.$7e = l),
				(e.$8e = y),
				(e.$9e = $),
				(e.$0e = v),
				(e.$$e = S),
				(e.$_e = I),
				(e.$af = T),
				(e.$bf = P),
				(e.$cf = D),
				(i = mt(i));
			const w = typeof Buffer < "u",
				E = new t.$Y(() => new Uint8Array(256));
			let C, d;
			class m {
				static alloc(N) {
					return w ? new m(Buffer.allocUnsafe(N)) : new m(new Uint8Array(N));
				}
				static wrap(N) {
					return (
						w &&
							!Buffer.isBuffer(N) &&
							(N = Buffer.from(N.buffer, N.byteOffset, N.byteLength)),
						new m(N)
					);
				}
				static fromString(N, A) {
					return !(A?.dontUseNodeBuffer || !1) && w
						? new m(Buffer.from(N))
						: (C || (C = new TextEncoder()), new m(C.encode(N)));
				}
				static fromByteArray(N) {
					const A = m.alloc(N.length);
					for (let R = 0, O = N.length; R < O; R++) A.buffer[R] = N[R];
					return A;
				}
				static concat(N, A) {
					if (typeof A > "u") {
						A = 0;
						for (let B = 0, U = N.length; B < U; B++) A += N[B].byteLength;
					}
					const R = m.alloc(A);
					let O = 0;
					for (let B = 0, U = N.length; B < U; B++) {
						const z = N[B];
						R.set(z, O), (O += z.byteLength);
					}
					return R;
				}
				constructor(N) {
					(this.buffer = N), (this.byteLength = this.buffer.byteLength);
				}
				clone() {
					const N = m.alloc(this.byteLength);
					return N.set(this), N;
				}
				toString() {
					return w
						? this.buffer.toString()
						: (d || (d = new TextDecoder()), d.decode(this.buffer));
				}
				slice(N, A) {
					return new m(this.buffer.subarray(N, A));
				}
				set(N, A) {
					if (N instanceof m) this.buffer.set(N.buffer, A);
					else if (N instanceof Uint8Array) this.buffer.set(N, A);
					else if (N instanceof ArrayBuffer)
						this.buffer.set(new Uint8Array(N), A);
					else if (ArrayBuffer.isView(N))
						this.buffer.set(
							new Uint8Array(N.buffer, N.byteOffset, N.byteLength),
							A,
						);
					else throw new Error("Unknown argument 'array'");
				}
				readUInt32BE(N) {
					return h(this.buffer, N);
				}
				writeUInt32BE(N, A) {
					c(this.buffer, N, A);
				}
				readUInt32LE(N) {
					return n(this.buffer, N);
				}
				writeUInt32LE(N, A) {
					g(this.buffer, N, A);
				}
				readUInt8(N) {
					return p(this.buffer, N);
				}
				writeUInt8(N, A) {
					o(this.buffer, N, A);
				}
				indexOf(N, A = 0) {
					return r(this.buffer, N instanceof m ? N.buffer : N, A);
				}
			}
			e.$Te = m;
			function r(M, N, A = 0) {
				const R = N.byteLength,
					O = M.byteLength;
				if (R === 0) return 0;
				if (R === 1) return M.indexOf(N[0]);
				if (R > O - A) return -1;
				const B = E.value;
				B.fill(N.length);
				for (let x = 0; x < N.length; x++) B[N[x]] = N.length - x - 1;
				let U = A + N.length - 1,
					z = U,
					F = -1;
				for (; U < O; )
					if (M[U] === N[z]) {
						if (z === 0) {
							F = U;
							break;
						}
						U--, z--;
					} else (U += Math.max(N.length - z, B[M[U]])), (z = N.length - 1);
				return F;
			}
			function u(M, N) {
				return ((M[N + 0] << 0) >>> 0) | ((M[N + 1] << 8) >>> 0);
			}
			function a(M, N, A) {
				(M[A + 0] = N & 255), (N = N >>> 8), (M[A + 1] = N & 255);
			}
			function h(M, N) {
				return (
					M[N] * 2 ** 24 + M[N + 1] * 2 ** 16 + M[N + 2] * 2 ** 8 + M[N + 3]
				);
			}
			function c(M, N, A) {
				(M[A + 3] = N),
					(N = N >>> 8),
					(M[A + 2] = N),
					(N = N >>> 8),
					(M[A + 1] = N),
					(N = N >>> 8),
					(M[A] = N);
			}
			function n(M, N) {
				return (
					((M[N + 0] << 0) >>> 0) |
					((M[N + 1] << 8) >>> 0) |
					((M[N + 2] << 16) >>> 0) |
					((M[N + 3] << 24) >>> 0)
				);
			}
			function g(M, N, A) {
				(M[A + 0] = N & 255),
					(N = N >>> 8),
					(M[A + 1] = N & 255),
					(N = N >>> 8),
					(M[A + 2] = N & 255),
					(N = N >>> 8),
					(M[A + 3] = N & 255);
			}
			function p(M, N) {
				return M[N];
			}
			function o(M, N, A) {
				M[A] = N;
			}
			function f(M) {
				return i.$Ie(M, (N) => m.concat(N));
			}
			function b(M) {
				return i.$Pe(M);
			}
			function s(M) {
				return i.$Ke(M, (N) => m.concat(N));
			}
			async function l(M) {
				return M.ended
					? m.concat(M.buffer)
					: m.concat([...M.buffer, await s(M.stream)]);
			}
			function y(M) {
				return i.$Ne(M, (N) => m.concat(N));
			}
			function $(M) {
				return i.$Qe(
					M,
					{ data: (N) => (typeof N == "string" ? m.fromString(N) : m.wrap(N)) },
					(N) => m.concat(N),
				);
			}
			function v(M) {
				return i.$He((N) => m.concat(N), M);
			}
			function S(M, N) {
				return i.$Re(M, N, (A) => m.concat(A));
			}
			function I(M, N) {
				return i.$Se(M, N, (A) => m.concat(A));
			}
			function T(M) {
				let N = 0,
					A = 0,
					R = 0;
				const O = new Uint8Array(Math.floor((M.length / 4) * 3)),
					B = (z) => {
						switch (A) {
							case 3:
								(O[R++] = N | z), (A = 0);
								break;
							case 2:
								(O[R++] = N | (z >>> 2)), (N = z << 6), (A = 3);
								break;
							case 1:
								(O[R++] = N | (z >>> 4)), (N = z << 4), (A = 2);
								break;
							default:
								(N = z << 2), (A = 1);
						}
					};
				for (let z = 0; z < M.length; z++) {
					const F = M.charCodeAt(z);
					if (F >= 65 && F <= 90) B(F - 65);
					else if (F >= 97 && F <= 122) B(F - 97 + 26);
					else if (F >= 48 && F <= 57) B(F - 48 + 52);
					else if (F === 43 || F === 45) B(62);
					else if (F === 47 || F === 95) B(63);
					else {
						if (F === 61) break;
						throw new SyntaxError(`Unexpected base64 character ${M[z]}`);
					}
				}
				const U = R;
				for (; A > 0; ) B(0);
				return m.wrap(O).slice(0, U);
			}
			function P(M) {
				const N = M.split(".")[1],
					A = T(N);
				return JSON.parse(A.toString());
			}
			const k =
					"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
				L = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
			function D({ buffer: M }, N = !0, A = !1) {
				const R = A ? L : k;
				let O = "";
				const B = M.byteLength % 3;
				let U = 0;
				for (; U < M.byteLength - B; U += 3) {
					const z = M[U + 0],
						F = M[U + 1],
						x = M[U + 2];
					(O += R[z >>> 2]),
						(O += R[((z << 4) | (F >>> 4)) & 63]),
						(O += R[((F << 2) | (x >>> 6)) & 63]),
						(O += R[x & 63]);
				}
				if (B === 1) {
					const z = M[U + 0];
					(O += R[z >>> 2]), (O += R[(z << 4) & 63]), N && (O += "==");
				} else if (B === 2) {
					const z = M[U + 0],
						F = M[U + 1];
					(O += R[z >>> 2]),
						(O += R[((z << 4) | (F >>> 4)) & 63]),
						(O += R[(F << 2) & 63]),
						N && (O += "=");
				}
				return O;
			}
		}),
		