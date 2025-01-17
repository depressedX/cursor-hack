import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arrays.js';
import '../../../base/common/json.js';
import '../../../base/common/jsonEdit.js';
import '../../../base/common/jsonFormatter.js';
import '../../../base/common/objects.js';
import './content.js';
import './userDataSync.js';
define(
			de[1670],
			he([1, 0, 24, 187, 586, 585, 82, 1669, 150]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Lwc = r),
					(e.$Mwc = h),
					(e.$Nwc = c),
					(e.$Owc = n),
					(e.$Pwc = p),
					(e.$Qwc = f),
					(C = mt(C)),
					(d = mt(d));
				function r(P, k, L) {
					let D = [];
					L ? (D = a(L)) : (D = u(k));
					const M = [],
						N = [...(0, m.$IRb)()];
					if (Array.isArray(D))
						for (const A of D)
							A.startsWith("-") ? N.push(A.substring(1)) : M.push(A);
					return (0, t.$Qb)([...P, ...M].filter((A) => !N.includes(A)));
				}
				function u(P) {
					let k = P.inspect("settingsSync.ignoredSettings").userValue;
					return k !== void 0 ||
						((k = P.inspect("sync.ignoredSettings").userValue), k !== void 0)
						? k
						: P.getValue("settingsSync.ignoredSettings") || [];
				}
				function a(P) {
					const k = (0, i.$do)(P);
					return k
						? k["settingsSync.ignoredSettings"] ||
								k["sync.ignoredSettings"] ||
								[]
						: [];
				}
				function h(P, k) {
					const L = (0, i.$do)(P) || {};
					let D = "{}";
					for (const M of Object.keys(L)) {
						const N = (0, w.$ro)(D, [M], L[M], k);
						D = (0, w.$uo)(D, N);
					}
					return D;
				}
				function c(P, k, L, D) {
					if (L.length) {
						const M = T(k),
							N = (0, i.$do)(k) || {},
							A = (0, i.$do)(P);
						if (!A) return P;
						const R = [];
						for (const O of L) {
							const B = N[O],
								U = A[O];
							B === void 0
								? (P = d.edit(P, [O], void 0, D))
								: U !== void 0
									? (P = d.edit(P, [O], B, D))
									: R.push(y(O, M));
						}
						R.sort((O, B) => O.startOffset - B.startOffset),
							R.forEach((O) => (P = f(O.setting.key, k, P, D)));
					}
					return P;
				}
				function n(P, k, L, D, M, N) {
					const A = c(P, k, D, N),
						R = L !== A,
						O = L !== k;
					if (!R && !O)
						return {
							conflictsSettings: [],
							localContent: null,
							remoteContent: null,
							hasConflicts: !1,
						};
					if (R && !O)
						return {
							conflictsSettings: [],
							localContent: null,
							remoteContent: A,
							hasConflicts: !1,
						};
					if (O && !R)
						return {
							conflictsSettings: [],
							localContent: c(k, P, D, N),
							remoteContent: null,
							hasConflicts: !1,
						};
					if (L === null && p(P)) {
						const ne = g(P, k, D) ? null : c(k, P, D, N);
						return {
							conflictsSettings: [],
							localContent: ne,
							remoteContent: null,
							hasConflicts: !1,
						};
					}
					let B = P,
						U = k;
					const z = (0, i.$do)(P),
						F = (0, i.$do)(k),
						x = L ? (0, i.$do)(L) : null,
						H = D.reduce((ne, ee) => (ne.add(ee), ne), new Set()),
						q = o(z, F, H),
						V = o(x, z, H),
						G = o(x, F, H),
						K = new Map(),
						J = new Set(),
						W = (ne) => {
							J.add(ne);
							const ee = M.filter(({ key: _ }) => _ === ne)[0];
							ee
								? ((B = d.edit(B, [ne], ee.value, N)),
									(U = d.edit(U, [ne], ee.value, N)))
								: K.set(ne, { key: ne, localValue: z[ne], remoteValue: F[ne] });
						};
					for (const ne of V.removed.values())
						G.updated.has(ne) ? W(ne) : (U = d.edit(U, [ne], void 0, N));
					for (const ne of G.removed.values())
						J.has(ne) ||
							(V.updated.has(ne) ? W(ne) : (B = d.edit(B, [ne], void 0, N)));
					for (const ne of V.updated.values())
						J.has(ne) ||
							(G.updated.has(ne)
								? q.updated.has(ne) && W(ne)
								: (U = d.edit(U, [ne], z[ne], N)));
					for (const ne of G.updated.values())
						J.has(ne) ||
							(V.updated.has(ne)
								? q.updated.has(ne) && W(ne)
								: (B = d.edit(B, [ne], F[ne], N)));
					for (const ne of V.added.values())
						J.has(ne) ||
							(G.added.has(ne)
								? q.updated.has(ne) && W(ne)
								: (U = f(ne, B, U, N)));
					for (const ne of G.added.values())
						J.has(ne) ||
							(V.added.has(ne)
								? q.updated.has(ne) && W(ne)
								: (B = f(ne, U, B, N)));
					const X = K.size > 0 || !g(B, U, D),
						Y = X || !g(B, P, []),
						ie = X || !g(U, k, []);
					return {
						localContent: Y ? B : null,
						remoteContent: ie ? U : null,
						conflictsSettings: [...K.values()],
						hasConflicts: X,
					};
				}
				function g(P, k, L) {
					if (P === k) return !0;
					const D = (0, i.$do)(P),
						M = (0, i.$do)(k),
						N = L.reduce((O, B) => (O.add(B), O), new Set()),
						A = T(P).filter((O) => !(O.setting && N.has(O.setting.key))),
						R = T(k).filter((O) => !(O.setting && N.has(O.setting.key)));
					if (A.length !== R.length) return !1;
					for (let O = 0; O < A.length; O++) {
						const B = A[O],
							U = R[O];
						if (B.setting && U.setting) {
							if (
								B.setting.key !== U.setting.key ||
								!C.$zo(D[B.setting.key], M[B.setting.key])
							)
								return !1;
						} else if (!B.setting && !U.setting) {
							if (B.value !== U.value) return !1;
						} else return !1;
					}
					return !0;
				}
				function p(P) {
					return P ? T(P).length === 0 : !0;
				}
				function o(P, k, L) {
					const D = P ? Object.keys(P).filter((O) => !L.has(O)) : [],
						M = Object.keys(k).filter((O) => !L.has(O)),
						N = M.filter((O) => !D.includes(O)).reduce(
							(O, B) => (O.add(B), O),
							new Set(),
						),
						A = D.filter((O) => !M.includes(O)).reduce(
							(O, B) => (O.add(B), O),
							new Set(),
						),
						R = new Set();
					if (P)
						for (const O of D) {
							if (A.has(O)) continue;
							const B = P[O],
								U = k[O];
							C.$zo(B, U) || R.add(O);
						}
					return { added: N, removed: A, updated: R };
				}
				function f(P, k, L, D) {
					const M = (0, i.$do)(k),
						N = T(k),
						A = T(L),
						R = b(P, N, A);
					return s(L, P, M[P], R, A, D);
				}
				function b(P, k, L) {
					const D = k.findIndex((N) => N.setting?.key === P),
						M = k[D - 1];
					if (M) {
						if (M.setting) {
							const A = y(M.setting.key, L);
							if (A) return { index: L.indexOf(A), insertAfter: !0 };
						} else {
							const A = $(D, k);
							if (A) {
								const R = y(A.setting.key, L);
								if (R) {
									const O = v(L.indexOf(R), L),
										B = S(k, A, k[D]);
									if (O) {
										const U = S(L, R, O),
											z = I(B, U);
										return z
											? { index: L.indexOf(z), insertAfter: !0 }
											: { index: L.indexOf(O), insertAfter: !1 };
									} else {
										const U = S(L, R, L[L.length - 1]),
											z = I(B, U);
										return z
											? { index: L.indexOf(z), insertAfter: !0 }
											: { index: L.length - 1, insertAfter: !0 };
									}
								}
							}
						}
						const N = k[D + 1];
						if (N)
							if (N.setting) {
								const A = y(N.setting.key, L);
								if (A) return { index: L.indexOf(A), insertAfter: !1 };
							} else {
								const A = v(D, k);
								if (A) {
									const R = y(A.setting.key, L);
									if (R) {
										const O = $(L.indexOf(R), L),
											B = S(k, k[D], A);
										if (O) {
											const U = S(L, O, R),
												z = I(B.reverse(), U.reverse());
											return z
												? { index: L.indexOf(z), insertAfter: !1 }
												: { index: L.indexOf(O), insertAfter: !0 };
										} else {
											const U = S(L, L[0], R),
												z = I(B.reverse(), U.reverse());
											return z
												? { index: L.indexOf(z), insertAfter: !1 }
												: { index: 0, insertAfter: !1 };
										}
									}
								}
							}
					}
					return { index: L.length - 1, insertAfter: !0 };
				}
				function s(P, k, L, D, M, N) {
					let A;
					return (
						D.index === -1
							? (A = (0, w.$ro)(P, [k], L, N))
							: (A = l(P, k, L, D, M, N).map((R) => (0, w.$so)(P, R, N)[0])),
						(0, w.$uo)(P, A)
					);
				}
				function l(P, k, L, D, M, N) {
					const A = `${JSON.stringify(k)}: ${JSON.stringify(L)}`,
						R = (0, E.$oo)(N, P),
						O = M[D.index];
					if (D.insertAfter) {
						const B = [];
						if (O.setting)
							B.push({ offset: O.endOffset, length: 0, content: "," + A });
						else {
							const U = v(D.index, M),
								z = $(D.index, M),
								F = z?.setting?.commaOffset;
							z &&
								F === void 0 &&
								B.push({ offset: z.endOffset, length: 0, content: "," });
							const x = F !== void 0 && F > O.endOffset;
							B.push({
								offset: x ? F + 1 : O.endOffset,
								length: 0,
								content: U ? R + A + "," : R + A,
							});
						}
						return B;
					} else {
						if (O.setting)
							return [{ offset: O.startOffset, length: 0, content: A + "," }];
						const B =
							(M[D.index - 1] && !M[D.index - 1].setting ? R : "") +
							A +
							(v(D.index, M) ? "," : "") +
							R;
						return [{ offset: O.startOffset, length: 0, content: B }];
					}
				}
				function y(P, k) {
					return k.filter((L) => L.setting?.key === P)[0];
				}
				function $(P, k) {
					for (let L = P - 1; L >= 0; L--) if (k[L].setting) return k[L];
				}
				function v(P, k) {
					for (let L = P + 1; L < k.length; L++) if (k[L].setting) return k[L];
				}
				function S(P, k, L) {
					const D = P.indexOf(k),
						M = P.indexOf(L);
					return P.filter((N, A) => D < A && A < M);
				}
				function I(P, k) {
					if (P.length && k.length) {
						let L = 0;
						for (; L < k.length && L < P.length; L++)
							if (P[L].value !== k[L].value) return k[L - 1];
						return k[L - 1];
					}
				}
				function T(P) {
					const k = [];
					let L = -1,
						D,
						M;
					const N = {
						onObjectBegin: (A) => {
							L++;
						},
						onObjectProperty: (A, R, O) => {
							L === 0 && ((D = R), (M = A));
						},
						onObjectEnd: (A, R) => {
							L--,
								L === 0 &&
									k.push({
										startOffset: D,
										endOffset: A + R,
										value: P.substring(D, A + R),
										setting: { key: M, commaOffset: void 0 },
									});
						},
						onArrayBegin: (A, R) => {
							L++;
						},
						onArrayEnd: (A, R) => {
							L--,
								L === 0 &&
									k.push({
										startOffset: D,
										endOffset: A + R,
										value: P.substring(D, A + R),
										setting: { key: M, commaOffset: void 0 },
									});
						},
						onLiteralValue: (A, R, O) => {
							L === 0 &&
								k.push({
									startOffset: D,
									endOffset: R + O,
									value: P.substring(D, R + O),
									setting: { key: M, commaOffset: void 0 },
								});
						},
						onSeparator: (A, R, O) => {
							if (L === 0 && A === ",") {
								let B = k.length - 1;
								for (; B >= 0 && !k[B].setting; B--);
								const U = k[B];
								U &&
									k.splice(B, 1, {
										startOffset: U.startOffset,
										endOffset: U.endOffset,
										value: U.value,
										setting: { key: U.setting.key, commaOffset: R },
									});
							}
						},
						onComment: (A, R) => {
							L === 0 &&
								k.push({
									startOffset: A,
									endOffset: A + R,
									value: P.substring(A, A + R),
								});
						},
					};
					return (0, i.$ko)(P, N), k;
				}
			},
		),
		