define(
			de[2767],
			he([1, 0, 120, 37, 38, 654, 590, 1629]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Svb = void 0),
					(i = mt(i));
				class m {
					static create(s) {
						return new m(
							s.get(w.EditorOption.wordWrapBreakBeforeCharacters),
							s.get(w.EditorOption.wordWrapBreakAfterCharacters),
						);
					}
					constructor(s, l) {
						this.a = new u(s, l);
					}
					createLineBreaksComputer(s, l, y, $, v) {
						const S = [],
							I = [],
							T = [];
						return {
							addRequest: (P, k, L) => {
								S.push(P), I.push(k), T.push(L);
							},
							finalize: () => {
								const P =
										s.typicalFullwidthCharacterWidth /
										s.typicalHalfwidthCharacterWidth,
									k = [];
								for (let L = 0, D = S.length; L < D; L++) {
									const M = I[L],
										N = T[L];
									N && !N.injectionOptions && !M
										? (k[L] = c(this.a, N, S[L], l, y, P, $, v))
										: (k[L] = n(this.a, S[L], M, l, y, P, $, v));
								}
								return (a.length = 0), (h.length = 0), k;
							},
						};
					}
				}
				e.$Svb = m;
				var r;
				(function (b) {
					(b[(b.NONE = 0)] = "NONE"),
						(b[(b.BREAK_BEFORE = 1)] = "BREAK_BEFORE"),
						(b[(b.BREAK_AFTER = 2)] = "BREAK_AFTER"),
						(b[(b.BREAK_IDEOGRAPHIC = 3)] = "BREAK_IDEOGRAPHIC");
				})(r || (r = {}));
				class u extends E.$NL {
					constructor(s, l) {
						super(r.NONE);
						for (let y = 0; y < s.length; y++)
							this.set(s.charCodeAt(y), r.BREAK_BEFORE);
						for (let y = 0; y < l.length; y++)
							this.set(l.charCodeAt(y), r.BREAK_AFTER);
					}
					get(s) {
						return s >= 0 && s < 256
							? this.a[s]
							: (s >= 12352 && s <= 12543) ||
									(s >= 13312 && s <= 19903) ||
									(s >= 19968 && s <= 40959)
								? r.BREAK_IDEOGRAPHIC
								: this.b.get(s) || this.c;
					}
				}
				let a = [],
					h = [];
				function c(b, s, l, y, $, v, S, I) {
					if ($ === -1) return null;
					const T = l.length;
					if (T <= 1) return null;
					const P = I === "keepAll",
						k = s.breakOffsets,
						L = s.breakOffsetsVisibleColumn,
						D = f(l, y, $, v, S),
						M = $ - D,
						N = a,
						A = h;
					let R = 0,
						O = 0,
						B = 0,
						U = $;
					const z = k.length;
					let F = 0;
					if (F >= 0) {
						let x = Math.abs(L[F] - U);
						for (; F + 1 < z; ) {
							const H = Math.abs(L[F + 1] - U);
							if (H >= x) break;
							(x = H), F++;
						}
					}
					for (; F < z; ) {
						let x = F < 0 ? 0 : k[F],
							H = F < 0 ? 0 : L[F];
						O > x && ((x = O), (H = B));
						let q = 0,
							V = 0,
							G = 0,
							K = 0;
						if (H <= U) {
							let W = H,
								X = x === 0 ? t.CharCode.Null : l.charCodeAt(x - 1),
								Y = x === 0 ? r.NONE : b.get(X),
								ie = !0;
							for (let ne = x; ne < T; ne++) {
								const ee = ne,
									_ = l.charCodeAt(ne);
								let te, Q;
								if (
									(i.$Qf(_)
										? (ne++, (te = r.NONE), (Q = 2))
										: ((te = b.get(_)), (Q = g(_, W, y, v))),
									ee > O && o(X, Y, _, te, P) && ((q = ee), (V = W)),
									(W += Q),
									W > U)
								) {
									ee > O ? ((G = ee), (K = W - Q)) : ((G = ne + 1), (K = W)),
										W - V > M && (q = 0),
										(ie = !1);
									break;
								}
								(X = _), (Y = te);
							}
							if (ie) {
								R > 0 &&
									((N[R] = k[k.length - 1]), (A[R] = L[k.length - 1]), R++);
								break;
							}
						}
						if (q === 0) {
							let W = H,
								X = l.charCodeAt(x),
								Y = b.get(X),
								ie = !1;
							for (let ne = x - 1; ne >= O; ne--) {
								const ee = ne + 1,
									_ = l.charCodeAt(ne);
								if (_ === t.CharCode.Tab) {
									ie = !0;
									break;
								}
								let te, Q;
								if (
									(i.$Rf(_)
										? (ne--, (te = r.NONE), (Q = 2))
										: ((te = b.get(_)), (Q = i.$5f(_) ? v : 1)),
									W <= U)
								) {
									if ((G === 0 && ((G = ee), (K = W)), W <= U - M)) break;
									if (o(_, te, X, Y, P)) {
										(q = ee), (V = W);
										break;
									}
								}
								(W -= Q), (X = _), (Y = te);
							}
							if (q !== 0) {
								const ne = M - (K - V);
								if (ne <= y) {
									const ee = l.charCodeAt(G);
									let _;
									i.$Qf(ee) ? (_ = 2) : (_ = g(ee, K, y, v)),
										ne - _ < 0 && (q = 0);
								}
							}
							if (ie) {
								F--;
								continue;
							}
						}
						if ((q === 0 && ((q = G), (V = K)), q <= O)) {
							const W = l.charCodeAt(O);
							i.$Qf(W)
								? ((q = O + 2), (V = B + 2))
								: ((q = O + 1), (V = B + g(W, B, y, v)));
						}
						for (
							O = q, N[R] = q, B = V, A[R] = V, R++, U = V + M;
							F < 0 || (F < z && L[F] < V);
						)
							F++;
						let J = Math.abs(L[F] - U);
						for (; F + 1 < z; ) {
							const W = Math.abs(L[F + 1] - U);
							if (W >= J) break;
							(J = W), F++;
						}
					}
					return R === 0
						? null
						: ((N.length = R),
							(A.length = R),
							(a = s.breakOffsets),
							(h = s.breakOffsetsVisibleColumn),
							(s.breakOffsets = N),
							(s.breakOffsetsVisibleColumn = A),
							(s.wrappedTextIndentLength = D),
							s);
				}
				function n(b, s, l, y, $, v, S, I) {
					const T = C.$uN.applyInjectedText(s, l);
					let P, k;
					if (
						(l && l.length > 0
							? ((P = l.map((V) => V.options)),
								(k = l.map((V) => V.column - 1)))
							: ((P = null), (k = null)),
						$ === -1)
					)
						return P ? new d.$usb(k, P, [T.length], [], 0) : null;
					const L = T.length;
					if (L <= 1) return P ? new d.$usb(k, P, [T.length], [], 0) : null;
					const D = I === "keepAll",
						M = f(T, y, $, v, S),
						N = $ - M,
						A = [],
						R = [];
					let O = 0,
						B = 0,
						U = 0,
						z = $,
						F = T.charCodeAt(0),
						x = b.get(F),
						H = g(F, 0, y, v),
						q = 1;
					i.$Qf(F) && ((H += 1), (F = T.charCodeAt(1)), (x = b.get(F)), q++);
					for (let V = q; V < L; V++) {
						const G = V,
							K = T.charCodeAt(V);
						let J, W;
						i.$Qf(K)
							? (V++, (J = r.NONE), (W = 2))
							: ((J = b.get(K)), (W = g(K, H, y, v))),
							o(F, x, K, J, D) && ((B = G), (U = H)),
							(H += W),
							H > z &&
								((B === 0 || H - U > N) && ((B = G), (U = H - W)),
								(A[O] = B),
								(R[O] = U),
								O++,
								(z = U + N),
								(B = 0)),
							(F = K),
							(x = J);
					}
					return O === 0 && (!l || l.length === 0)
						? null
						: ((A[O] = L), (R[O] = H), new d.$usb(k, P, A, R, M));
				}
				function g(b, s, l, y) {
					return b === t.CharCode.Tab
						? l - (s % l)
						: i.$5f(b) || b < 32
							? y
							: 1;
				}
				function p(b, s) {
					return s - (b % s);
				}
				function o(b, s, l, y, $) {
					return (
						l !== t.CharCode.Space &&
						((s === r.BREAK_AFTER && y !== r.BREAK_AFTER) ||
							(s !== r.BREAK_BEFORE && y === r.BREAK_BEFORE) ||
							(!$ && s === r.BREAK_IDEOGRAPHIC && y !== r.BREAK_AFTER) ||
							(!$ && y === r.BREAK_IDEOGRAPHIC && s !== r.BREAK_BEFORE))
					);
				}
				function f(b, s, l, y, $) {
					let v = 0;
					if ($ !== w.WrappingIndent.None) {
						const S = i.$Bf(b);
						if (S !== -1) {
							for (let T = 0; T < S; T++) {
								const P = b.charCodeAt(T) === t.CharCode.Tab ? p(v, s) : 1;
								v += P;
							}
							const I =
								$ === w.WrappingIndent.DeepIndent
									? 2
									: $ === w.WrappingIndent.Indent
										? 1
										: 0;
							for (let T = 0; T < I; T++) {
								const P = p(v, s);
								v += P;
							}
							v + y > l && (v = 0);
						}
					}
					return v;
				}
			},
		),
		