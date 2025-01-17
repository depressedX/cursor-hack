import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
define(de[356], he([1, 0, 3, 20, 5]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$HIb =
					e.$GIb =
					e.$FIb =
					e.$EIb =
					e.$DIb =
					e.$CIb =
					e.$BIb =
					e.$AIb =
					e.$zIb =
						void 0),
				(e.$zIb = (0, w.$Mi)("dataScrubbingService")),
				(e.$AIb = {
					passForward: async (l, y) =>
						y ? await y.passForward(l, void 0) : [l.value],
				});
			const E = (l) =>
				l.length == 0
					? e.$AIb
					: {
							passForward: async ($, v) =>
								l.length == 1
									? await l[0].passForward($, v)
									: await l[0].passForward($, E(l.slice(1))),
						};
			function C(l) {
				return async (y) => (l ? await l.passForward(y, void 0) : [y.value]);
			}
			class d {
				constructor(y) {
					this.c = y;
				}
				async passForward(y, $) {
					const v = C($);
					let S = [""];
					const I = async (P) => {
						const k = await v(P);
						k.length > 0 && ((S[S.length - 1] += k[0]), S.push(...k.slice(1)));
					};
					let T = 0;
					for (; T < y.value.length; ) {
						const P = this.c
							.map((k) => [y.value.indexOf(k, T), k])
							.filter(([k, L]) => k !== -1)
							.sort((k, L) => k[0] - L[0])[0];
						if (P === void 0) {
							await I({
								value: y.value.substring(T, y.value.length),
								range: { lo: y.range.lo + T, hi: y.range.hi },
							});
							break;
						}
						await I({
							value: y.value.substring(T, P[0]),
							range: { lo: y.range.lo + T, hi: y.range.lo + P[0] },
						}),
							(T = P[0] + P[1].length),
							(S[S.length - 1] += P[1]);
					}
					return S;
				}
			}
			e.$BIb = d;
			class m {
				constructor(y) {
					this.c = y;
				}
				async passForward(y, $) {
					let v = "",
						S = "";
					for (; y.value.length >= 2; ) {
						let T = !1;
						for (const P of this.c)
							if (y.value[0] === P[0] && y.value[y.value.length - 1] === P[1]) {
								(v += P[0]),
									(S = P[1] + S),
									(y.value = y.value.substring(1, y.value.length - 1)),
									y.range.lo++,
									y.range.hi--,
									(T = !0);
								break;
							}
						if (!T) break;
					}
					let I = await C($)(y);
					return (I[0] = v + I[0]), (I[I.length - 1] = I[I.length - 1] + S), I;
				}
			}
			e.$CIb = m;
			const r = /[\x21-\x7E]+/g;
			class u {
				constructor() {}
				async passForward(y, $) {
					const v = C($);
					let S,
						I = [""],
						T = 0;
					for (; (S = r.exec(y.value)) !== null; ) {
						const P = S.index,
							k = P + S[0].length;
						P > T && (I[I.length - 1] += y.value.substring(T, P));
						const L = y.value.substring(P, k),
							D = await v({
								value: L,
								range: { lo: y.range.lo + P, hi: y.range.lo + k },
							});
						D.length > 0 && ((I[I.length - 1] += D[0]), I.push(...D.slice(1))),
							(T = k);
					}
					return (
						T < y.value.length &&
							(I[I.length - 1] += y.value.substring(T, y.value.length)),
						I
					);
				}
			}
			e.$DIb = u;
			const a =
				/(([a-z]{4,}:\/\/)?(([a-z0-9_]+)(:[a-z0-9_]+)?@)?(([a-z0-9\-\.]+\.[a-z]{2,4})|localhost|(((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}))(\/[^\s]*)?)/gi;
			class h {
				async passForward(y, $) {
					let v,
						S = [""],
						I = 0;
					const T = C($),
						P = async (k) => {
							const L = await T(k);
							L.length > 0 &&
								((S[S.length - 1] += L[0]), S.push(...L.slice(1)));
						};
					for (; (v = a.exec(y.value)) !== null; ) {
						const k = v.index,
							L = k + v[0].length;
						if (
							(k > I &&
								(await P({
									value: y.value.substring(I, k),
									range: { lo: y.range.lo + I, hi: y.range.lo + k },
								})),
							v[5] !== void 0)
						) {
							const D = v.index + v[0].indexOf(v[5]),
								M = D + v[5].length;
							(S[S.length - 1] += y.value.substring(k, D)),
								S.push(y.value.substring(M, L));
						} else S[S.length - 1] += v[0];
						I = L;
					}
					return (
						I < y.value.length &&
							(await P({
								value: y.value.substring(I, y.value.length),
								range: { lo: y.range.lo + I, hi: y.range.hi },
							})),
						S
					);
				}
			}
			e.$EIb = h;
			class c {
				constructor(y, $ = 16) {
					(this.c = y), (this.d = $);
				}
				async passForward(y, $) {
					if (y.value.length < this.d) return [y.value];
					let v = [""],
						S = "",
						I = "",
						T = "";
					const P = () => {
							S.length >= this.d && !S.match(/^[0-9]+$/)
								? v.push("")
								: (v[v.length - 1] += S),
								(S = "");
						},
						k = ":{}[]()-_.,/\\+-!?",
						L = (O) => {
							I.length > 0
								? (P(),
									(v[v.length - 1] += I),
									(v[v.length - 1] += T),
									(v[v.length - 1] += O),
									(I = ""),
									(T = ""))
								: S.length > 0
									? (I = O)
									: (v[v.length - 1] += O);
						},
						D = (O) => {
							I.length > 0 && T === "" && O.length == 1 && k.indexOf(O) !== -1
								? (T = O)
								: ((S += I), (S += T), (S += O), (I = ""), (T = ""));
						},
						M = this.getTokensInRange(y.range.lo, y.range.hi);
					let N = 0;
					for (let O = 0; O < M.length; O++) {
						const B = M[O],
							U = y.value.substring(N, N + B.length);
						(N += B.length), U.length <= 2 || U.match(/^[0-9]+$/) ? D(U) : L(U);
					}
					(S += I), (S += T), P();
					let A = [];
					const R = C($);
					for (const O of v)
						A.push(...(await R({ value: O, range: { lo: -1, hi: -1 } })));
					return A;
				}
				getTokensInRange(y, $) {
					let v = 0,
						S = this.c.length - 1;
					for (; v < S; ) {
						const k = Math.floor((v + S) / 2);
						this.c[k][1].hi > y ? (S = k) : (v = k + 1);
					}
					const I = v;
					for (S = this.c.length - 1; v < S; ) {
						const k = Math.floor((v + S) / 2);
						this.c[k][1].lo >= $ ? (S = k) : (v = k + 1);
					}
					const T = v,
						P = [];
					for (let k = I; k < T; k++) {
						let L = this.c[k][0];
						const D = Math.max(0, y - this.c[k][1].lo),
							M = Math.max(0, this.c[k][1].hi - $);
						P.push(L.text.substring(D, L.text.length - M));
					}
					return P;
				}
			}
			e.$FIb = c;
			class n {
				constructor(y) {
					this.c = y;
				}
				async passForward(y, $) {
					let v,
						S = [""],
						I = 0;
					const T = C($);
					for (; (v = this.c.exec(y.value)) !== null; ) {
						const P = v.index,
							k = P + v[0].length;
						if (P > I) {
							const L = await T({
								value: y.value.substring(I, P),
								range: { lo: y.range.lo + I, hi: y.range.lo + P },
							});
							(S[S.length - 1] += L[0]), S.push(...L.slice(1));
						}
						(S[S.length - 1] += v[0]), (I = k);
					}
					if (I < y.value.length) {
						const P = await T({
							value: y.value.substring(I, y.value.length),
							range: { lo: y.range.lo + I, hi: y.range.hi },
						});
						(S[S.length - 1] += P[0]), S.push(...P.slice(1));
					}
					return S;
				}
			}
			e.$GIb = n;
			const g = [
					new u(),
					new h(),
					new d([";", "=", "/"]),
					new m(['""', "''", "``", "()", "[]", "{}", "<>"]),
				],
				p = /^(#\s+)?[A-Z0-9\_]{2,}=/gm,
				o = new n(p),
				f = /(^(\s+)?[a-zA-Z0-9\_]{2,}:)|(^(\s+)?-)/gm,
				b = new n(f);
			class s extends t.$1c {
				constructor() {
					super(), (this.c = void 0);
				}
				async tokenizeTexts(y) {
					return this.c === void 0
						? []
						: (await this.c.tokenizeBPE(y, "cl100k_base")) || [];
				}
				async cleanText(y, $) {
					return y.length > 1e5, y;
				}
				registerBPETokenizerProvider(y) {
					this.c = y;
				}
			}
			(e.$HIb = s), (0, i.$lK)(e.$zIb, s, i.InstantiationType.Delayed);
		}),
		