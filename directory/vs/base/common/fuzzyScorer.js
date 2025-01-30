import '../../../require.js';
import '../../../exports.js';
import './charCode.js';
import './comparers.js';
import './filters.js';
import './hash.js';
import './path.js';
import './platform.js';
import './strings.js';
define(
			de[322],
			he([1, 0, 120, 535, 132, 136, 54, 12, 37]),
			function (ce /*require*/,
 e /*exports*/,
 t /*charCode*/,
 i /*comparers*/,
 w /*filters*/,
 E /*hash*/,
 C /*path*/,
 d /*platform*/,
 m /*strings*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ds = a),
					(e.$es = o),
					(e.$fs = S),
					(e.$gs = M),
					(e.$hs = U),
					(e.$is = F);
				const r = 0,
					u = [r, []];
				function a(x, H, q, V) {
					if (!x || !H) return u;
					const G = x.length,
						K = H.length;
					if (G < K) return u;
					const J = x.toLowerCase();
					return h(H, q, K, x, J, G, V);
				}
				function h(x, H, q, V, G, K, J) {
					const W = [],
						X = [];
					for (let ee = 0; ee < q; ee++) {
						const _ = ee * K,
							te = _ - K,
							Q = ee > 0,
							Z = x[ee],
							se = H[ee];
						for (let re = 0; re < K; re++) {
							const le = re > 0,
								oe = _ + re,
								ae = oe - 1,
								pe = te + re - 1,
								$e = le ? W[ae] : 0,
								ye = Q && le ? W[pe] : 0,
								ue = Q && le ? X[pe] : 0;
							let fe;
							!ye && Q ? (fe = 0) : (fe = c(Z, se, V, G, re, ue)),
								fe && ye + fe >= $e && (J || Q || G.startsWith(H, re))
									? ((X[oe] = ue + 1), (W[oe] = ye + fe))
									: ((X[oe] = r), (W[oe] = $e));
						}
					}
					const Y = [];
					let ie = q - 1,
						ne = K - 1;
					for (; ie >= 0 && ne >= 0; ) {
						const ee = ie * K + ne;
						X[ee] === r || (Y.push(ne), ie--), ne--;
					}
					return [W[q * K - 1], Y.reverse()];
				}
				function c(x, H, q, V, G, K) {
					let J = 0;
					if (!n(H, V[G])) return J;
					if (
						((J += 1), K > 0 && (J += K * 5), x === q[G] && (J += 1), G === 0)
					)
						J += 8;
					else {
						const W = g(q.charCodeAt(G - 1));
						W ? (J += W) : (0, w.$Wk)(q.charCodeAt(G)) && K === 0 && (J += 2);
					}
					return J;
				}
				function n(x, H) {
					return x === H
						? !0
						: x === "/" || x === "\\"
							? H === "/" || H === "\\"
							: !1;
				}
				function g(x) {
					switch (x) {
						case t.CharCode.Slash:
						case t.CharCode.Backslash:
							return 5;
						case t.CharCode.Underline:
						case t.CharCode.Dash:
						case t.CharCode.Period:
						case t.CharCode.Space:
						case t.CharCode.SingleQuote:
						case t.CharCode.DoubleQuote:
						case t.CharCode.Colon:
							return 4;
						default:
							return 0;
					}
				}
				const p = [void 0, []];
				function o(x, H, q = 0, V = 0) {
					const G = H;
					return G.values && G.values.length > 1
						? f(x, G.values, q, V)
						: b(x, H, q, V);
				}
				function f(x, H, q, V) {
					let G = 0;
					const K = [];
					for (const J of H) {
						const [W, X] = b(x, J, q, V);
						if (typeof W != "number") return p;
						(G += W), K.push(...X);
					}
					return [G, L(K)];
				}
				function b(x, H, q, V) {
					const G = (0, w.$6k)(
						H.original,
						H.originalLowercase,
						q,
						x,
						x.toLowerCase(),
						V,
						{ firstMatchCanBeWeak: !0, boostFullMatch: !0 },
					);
					return G ? [G[0], (0, w.$3k)(G)] : p;
				}
				const s = Object.freeze({ score: 0 }),
					l = 1 << 18,
					y = 1 << 17,
					$ = 65536;
				function v(x, H, q, V) {
					const G = V.values ? V.values : [V];
					return (0, E.$Aj)({
						[V.normalized]: {
							values: G.map((J) => ({
								value: J.normalized,
								expectContiguousMatch: J.expectContiguousMatch,
							})),
							label: x,
							description: H,
							allowNonContiguousMatches: q,
						},
					});
				}
				function S(x, H, q, V, G) {
					if (!x || !H.normalized) return s;
					const K = V.getItemLabel(x);
					if (!K) return s;
					const J = V.getItemDescription(x),
						W = v(K, J, q, H),
						X = G[W];
					if (X) return X;
					const Y = I(K, J, V.getItemPath(x), H, q);
					return (G[W] = Y), Y;
				}
				function I(x, H, q, V, G) {
					const K = !q || !V.containsPathSeparator;
					return q &&
						(d.$n ? V.pathNormalized === q : (0, m.$Mf)(V.pathNormalized, q))
						? {
								score: l,
								labelMatch: [{ start: 0, end: x.length }],
								descriptionMatch: H ? [{ start: 0, end: H.length }] : void 0,
							}
						: V.values && V.values.length > 1
							? T(x, H, q, V.values, K, G)
							: P(x, H, q, V, K, G);
				}
				function T(x, H, q, V, G, K) {
					let J = 0;
					const W = [],
						X = [];
					for (const Y of V) {
						const {
							score: ie,
							labelMatch: ne,
							descriptionMatch: ee,
						} = P(x, H, q, Y, G, K);
						if (ie === r) return s;
						(J += ie), ne && W.push(...ne), ee && X.push(...ee);
					}
					return { score: J, labelMatch: L(W), descriptionMatch: L(X) };
				}
				function P(x, H, q, V, G, K) {
					if (G || !H) {
						const [J, W] = a(
							x,
							V.normalized,
							V.normalizedLowercase,
							K && !V.expectContiguousMatch,
						);
						if (J) {
							const X = (0, w.$Tk)(V.normalized, x);
							let Y;
							if (X) {
								Y = y;
								const ie = Math.round((V.normalized.length / x.length) * 100);
								Y += ie;
							} else Y = $;
							return { score: Y + J, labelMatch: X || k(W) };
						}
					}
					if (H) {
						let J = H;
						q && (J = `${H}${C.sep}`);
						const W = J.length,
							X = `${J}${x}`,
							[Y, ie] = a(
								X,
								V.normalized,
								V.normalizedLowercase,
								K && !V.expectContiguousMatch,
							);
						if (Y) {
							const ne = k(ie),
								ee = [],
								_ = [];
							return (
								ne.forEach((te) => {
									te.start < W && te.end > W
										? (ee.push({ start: 0, end: te.end - W }),
											_.push({ start: te.start, end: W }))
										: te.start >= W
											? ee.push({ start: te.start - W, end: te.end - W })
											: _.push(te);
								}),
								{ score: Y, labelMatch: ee, descriptionMatch: _ }
							);
						}
					}
					return s;
				}
				function k(x) {
					const H = [];
					if (!x) return H;
					let q;
					for (const V of x)
						q && q.end === V
							? (q.end += 1)
							: ((q = { start: V, end: V + 1 }), H.push(q));
					return H;
				}
				function L(x) {
					const H = x.sort((G, K) => G.start - K.start),
						q = [];
					let V;
					for (const G of H)
						!V || !D(V, G)
							? ((V = G), q.push(G))
							: ((V.start = Math.min(V.start, G.start)),
								(V.end = Math.max(V.end, G.end)));
					return q;
				}
				function D(x, H) {
					return !(x.end < H.start || H.end < x.start);
				}
				function M(x, H, q, V, G, K) {
					const J = S(x, q, V, G, K),
						W = S(H, q, V, G, K),
						X = J.score,
						Y = W.score;
					if ((X === l || Y === l) && X !== Y) return X === l ? -1 : 1;
					if (X > $ || Y > $) {
						if (X !== Y) return X > Y ? -1 : 1;
						if (X < y && Y < y) {
							const Z = A(J.labelMatch, W.labelMatch);
							if (Z !== 0) return Z;
						}
						const te = G.getItemLabel(x) || "",
							Q = G.getItemLabel(H) || "";
						if (te.length !== Q.length) return te.length - Q.length;
					}
					if (X !== Y) return X > Y ? -1 : 1;
					const ie = Array.isArray(J.labelMatch) && J.labelMatch.length > 0,
						ne = Array.isArray(W.labelMatch) && W.labelMatch.length > 0;
					if (ie && !ne) return -1;
					if (ne && !ie) return 1;
					const ee = N(x, J, G),
						_ = N(H, W, G);
					return ee && _ && ee !== _ ? (_ > ee ? -1 : 1) : R(x, H, q, G);
				}
				function N(x, H, q) {
					let V = -1,
						G = -1;
					if (
						(H.descriptionMatch && H.descriptionMatch.length
							? (V = H.descriptionMatch[0].start)
							: H.labelMatch &&
								H.labelMatch.length &&
								(V = H.labelMatch[0].start),
						H.labelMatch && H.labelMatch.length)
					) {
						if (
							((G = H.labelMatch[H.labelMatch.length - 1].end),
							H.descriptionMatch && H.descriptionMatch.length)
						) {
							const K = q.getItemDescription(x);
							K && (G += K.length);
						}
					} else
						H.descriptionMatch &&
							H.descriptionMatch.length &&
							(G = H.descriptionMatch[H.descriptionMatch.length - 1].end);
					return G - V;
				}
				function A(x, H) {
					if ((!x && !H) || ((!x || !x.length) && (!H || !H.length))) return 0;
					if (!H || !H.length) return -1;
					if (!x || !x.length) return 1;
					const q = x[0].start,
						G = x[x.length - 1].end - q,
						K = H[0].start,
						W = H[H.length - 1].end - K;
					return G === W ? 0 : W < G ? 1 : -1;
				}
				function R(x, H, q, V) {
					const G = V.getItemLabel(x) || "",
						K = V.getItemLabel(H) || "",
						J = V.getItemDescription(x),
						W = V.getItemDescription(H),
						X = G.length + (J ? J.length : 0),
						Y = K.length + (W ? W.length : 0);
					if (X !== Y) return X - Y;
					const ie = V.getItemPath(x),
						ne = V.getItemPath(H);
					return ie && ne && ie.length !== ne.length
						? ie.length - ne.length
						: G !== K
							? (0, i.$bs)(G, K, q.normalized)
							: J && W && J !== W
								? (0, i.$bs)(J, W, q.normalized)
								: ie && ne && ie !== ne
									? (0, i.$bs)(ie, ne, q.normalized)
									: 0;
				}
				function O(x) {
					return x.startsWith('"') && x.endsWith('"');
				}
				const B = " ";
				function U(x) {
					typeof x != "string" && (x = "");
					const H = x.toLowerCase(),
						{ pathNormalized: q, normalized: V, normalizedLowercase: G } = z(x),
						K = q.indexOf(C.sep) >= 0,
						J = O(x);
					let W;
					const X = x.split(B);
					if (X.length > 1)
						for (const Y of X) {
							const ie = O(Y),
								{
									pathNormalized: ne,
									normalized: ee,
									normalizedLowercase: _,
								} = z(Y);
							ee &&
								(W || (W = []),
								W.push({
									original: Y,
									originalLowercase: Y.toLowerCase(),
									pathNormalized: ne,
									normalized: ee,
									normalizedLowercase: _,
									expectContiguousMatch: ie,
								}));
						}
					return {
						original: x,
						originalLowercase: H,
						pathNormalized: q,
						normalized: V,
						normalizedLowercase: G,
						values: W,
						containsPathSeparator: K,
						expectContiguousMatch: J,
					};
				}
				function z(x) {
					let H;
					d.$l ? (H = x.replace(/\//g, C.sep)) : (H = x.replace(/\\/g, C.sep));
					const q = (0, m.$wf)(H).replace(/\s|"/g, "");
					return {
						pathNormalized: H,
						normalized: q,
						normalizedLowercase: q.toLowerCase(),
					};
				}
				function F(x) {
					return Array.isArray(x)
						? U(x.map((H) => H.original).join(B))
						: U(x.original);
				}
			},
		),
		