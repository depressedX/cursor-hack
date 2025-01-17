import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/browser/trustedTypes.js';
import '../../../base/common/charCode.js';
import '../../../base/common/strings.js';
import '../../../base/common/types.js';
import '../config/domFontInfo.js';
import '../../common/config/editorOptions.js';
import '../../common/core/stringBuilder.js';
import '../../common/modelLineProjectionData.js';
import '../../common/textModelEvents.js';
define(
			de[2762],
			he([1, 0, 432, 120, 37, 28, 321, 38, 462, 1629, 590]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Pvb = void 0),
					(w = mt(w));
				const a = (0, t.$bjb)("domLineBreaksComputer", {
					createHTML: (b) => b,
				});
				class h {
					static create(s) {
						return new h(new WeakRef(s));
					}
					constructor(s) {
						this.a = s;
					}
					createLineBreaksComputer(s, l, y, $, v) {
						const S = [],
							I = [];
						return {
							addRequest: (T, P, k) => {
								S.push(T), I.push(P);
							},
							finalize: () =>
								c((0, E.$wg)(this.a.deref()), S, s, l, y, $, v, I),
						};
					}
				}
				e.$Pvb = h;
				function c(b, s, l, y, $, v, S, I) {
					function T(V) {
						const G = I[V];
						if (G) {
							const K = u.$uN.applyInjectedText(s[V], G),
								J = G.map((X) => X.options),
								W = G.map((X) => X.column - 1);
							return new r.$usb(W, J, [K.length], [], 0);
						} else return null;
					}
					if ($ === -1) {
						const V = [];
						for (let G = 0, K = s.length; G < K; G++) V[G] = T(G);
						return V;
					}
					const P = Math.round($ * l.typicalHalfwidthCharacterWidth),
						k =
							v === d.WrappingIndent.DeepIndent
								? 2
								: v === d.WrappingIndent.Indent
									? 1
									: 0,
						L = Math.round(y * k),
						D = Math.ceil(l.spaceWidth * L),
						M = document.createElement("div");
					(0, C.$jsb)(M, l);
					const N = new m.$KL(1e4),
						A = [],
						R = [],
						O = [],
						B = [],
						U = [];
					for (let V = 0; V < s.length; V++) {
						const G = u.$uN.applyInjectedText(s[V], I[V]);
						let K = 0,
							J = 0,
							W = P;
						if (v !== d.WrappingIndent.None)
							if (((K = w.$Bf(G)), K === -1)) K = 0;
							else {
								for (let ne = 0; ne < K; ne++) {
									const ee =
										G.charCodeAt(ne) === i.CharCode.Tab ? y - (J % y) : 1;
									J += ee;
								}
								const ie = Math.ceil(l.spaceWidth * J);
								ie + l.typicalFullwidthCharacterWidth > P
									? ((K = 0), (J = 0))
									: (W = P - ie);
							}
						const X = G.substr(K),
							Y = g(X, J, y, W, N, D);
						(A[V] = K), (R[V] = J), (O[V] = X), (B[V] = Y[0]), (U[V] = Y[1]);
					}
					const z = N.build(),
						F = a?.createHTML(z) ?? z;
					(M.innerHTML = F),
						(M.style.position = "absolute"),
						(M.style.top = "10000"),
						S === "keepAll"
							? ((M.style.wordBreak = "keep-all"),
								(M.style.overflowWrap = "anywhere"))
							: ((M.style.wordBreak = "inherit"),
								(M.style.overflowWrap = "break-word")),
						b.document.body.appendChild(M);
					const x = document.createRange(),
						H = Array.prototype.slice.call(M.children, 0),
						q = [];
					for (let V = 0; V < s.length; V++) {
						const G = H[V],
							K = p(x, G, O[V], B[V]);
						if (K === null) {
							q[V] = T(V);
							continue;
						}
						const J = A[V],
							W = R[V] + L,
							X = U[V],
							Y = [];
						for (let _ = 0, te = K.length; _ < te; _++) Y[_] = X[K[_]];
						if (J !== 0) for (let _ = 0, te = K.length; _ < te; _++) K[_] += J;
						let ie, ne;
						const ee = I[V];
						ee
							? ((ie = ee.map((_) => _.options)),
								(ne = ee.map((_) => _.column - 1)))
							: ((ie = null), (ne = null)),
							(q[V] = new r.$usb(ne, ie, K, Y, W));
					}
					return M.remove(), q;
				}
				var n;
				(function (b) {
					b[(b.SPAN_MODULO_LIMIT = 16384)] = "SPAN_MODULO_LIMIT";
				})(n || (n = {}));
				function g(b, s, l, y, $, v) {
					if (v !== 0) {
						const D = String(v);
						$.appendString('<div style="text-indent: -'),
							$.appendString(D),
							$.appendString("px; padding-left: "),
							$.appendString(D),
							$.appendString("px; box-sizing: border-box; width:");
					} else $.appendString('<div style="width:');
					$.appendString(String(y)), $.appendString('px;">');
					const S = b.length;
					let I = s,
						T = 0;
					const P = [],
						k = [];
					let L = 0 < S ? b.charCodeAt(0) : i.CharCode.Null;
					$.appendString("<span>");
					for (let D = 0; D < S; D++) {
						D !== 0 &&
							D % n.SPAN_MODULO_LIMIT === 0 &&
							$.appendString("</span><span>"),
							(P[D] = T),
							(k[D] = I);
						const M = L;
						L = D + 1 < S ? b.charCodeAt(D + 1) : i.CharCode.Null;
						let N = 1,
							A = 1;
						switch (M) {
							case i.CharCode.Tab:
								(N = l - (I % l)), (A = N);
								for (let R = 1; R <= N; R++)
									R < N
										? $.appendCharCode(160)
										: $.appendASCIICharCode(i.CharCode.Space);
								break;
							case i.CharCode.Space:
								L === i.CharCode.Space
									? $.appendCharCode(160)
									: $.appendASCIICharCode(i.CharCode.Space);
								break;
							case i.CharCode.LessThan:
								$.appendString("&lt;");
								break;
							case i.CharCode.GreaterThan:
								$.appendString("&gt;");
								break;
							case i.CharCode.Ampersand:
								$.appendString("&amp;");
								break;
							case i.CharCode.Null:
								$.appendString("&#00;");
								break;
							case i.CharCode.UTF8_BOM:
							case i.CharCode.LINE_SEPARATOR:
							case i.CharCode.PARAGRAPH_SEPARATOR:
							case i.CharCode.NEXT_LINE:
								$.appendCharCode(65533);
								break;
							default:
								w.$5f(M) && A++,
									M < 32 ? $.appendCharCode(9216 + M) : $.appendCharCode(M);
						}
						(T += N), (I += A);
					}
					return (
						$.appendString("</span>"),
						(P[b.length] = T),
						(k[b.length] = I),
						$.appendString("</div>"),
						[P, k]
					);
				}
				function p(b, s, l, y) {
					if (l.length <= 1) return null;
					const $ = Array.prototype.slice.call(s.children, 0),
						v = [];
					try {
						o(b, $, y, 0, null, l.length - 1, null, v);
					} catch (S) {
						return console.log(S), null;
					}
					return v.length === 0 ? null : (v.push(l.length), v);
				}
				function o(b, s, l, y, $, v, S, I) {
					if (
						y === v ||
						(($ = $ || f(b, s, l[y], l[y + 1])),
						(S = S || f(b, s, l[v], l[v + 1])),
						Math.abs($[0].top - S[0].top) <= 0.1)
					)
						return;
					if (y + 1 === v) {
						I.push(v);
						return;
					}
					const T = (y + (v - y) / 2) | 0,
						P = f(b, s, l[T], l[T + 1]);
					o(b, s, l, y, $, T, P, I), o(b, s, l, T, P, v, S, I);
				}
				function f(b, s, l, y) {
					return (
						b.setStart(
							s[(l / n.SPAN_MODULO_LIMIT) | 0].firstChild,
							l % n.SPAN_MODULO_LIMIT,
						),
						b.setEnd(
							s[(y / n.SPAN_MODULO_LIMIT) | 0].firstChild,
							y % n.SPAN_MODULO_LIMIT,
						),
						b.getClientRects()
					);
				}
			},
		),
		