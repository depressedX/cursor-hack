define(de[1629], he([1, 0, 229, 48, 64]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$wsb = e.$vsb = e.$usb = void 0);
			class E {
				constructor(a, h, c, n, g) {
					(this.injectionOffsets = a),
						(this.injectionOptions = h),
						(this.breakOffsets = c),
						(this.breakOffsetsVisibleColumn = n),
						(this.wrappedTextIndentLength = g);
				}
				getOutputLineCount() {
					return this.breakOffsets.length;
				}
				getMinOutputOffset(a) {
					return a > 0 ? this.wrappedTextIndentLength : 0;
				}
				getLineLength(a) {
					const h = a > 0 ? this.breakOffsets[a - 1] : 0;
					let n = this.breakOffsets[a] - h;
					return a > 0 && (n += this.wrappedTextIndentLength), n;
				}
				getMaxOutputOffset(a) {
					return this.getLineLength(a);
				}
				translateToInputOffset(a, h) {
					a > 0 && (h = Math.max(0, h - this.wrappedTextIndentLength));
					let n = a === 0 ? h : this.breakOffsets[a - 1] + h;
					if (this.injectionOffsets !== null)
						for (
							let g = 0;
							g < this.injectionOffsets.length && n > this.injectionOffsets[g];
							g++
						)
							n <
							this.injectionOffsets[g] + this.injectionOptions[g].content.length
								? (n = this.injectionOffsets[g])
								: (n -= this.injectionOptions[g].content.length);
					return n;
				}
				translateToOutputPosition(a, h = w.PositionAffinity.None) {
					let c = a;
					if (this.injectionOffsets !== null)
						for (
							let n = 0;
							n < this.injectionOffsets.length &&
							!(
								a < this.injectionOffsets[n] ||
								(h !== w.PositionAffinity.Right &&
									a === this.injectionOffsets[n])
							);
							n++
						)
							c += this.injectionOptions[n].content.length;
					return this.a(c, h);
				}
				a(a, h = w.PositionAffinity.None) {
					let c = 0,
						n = this.breakOffsets.length - 1,
						g = 0,
						p = 0;
					for (; c <= n; ) {
						g = (c + (n - c) / 2) | 0;
						const f = this.breakOffsets[g];
						if (
							((p = g > 0 ? this.breakOffsets[g - 1] : 0),
							h === w.PositionAffinity.Left)
						)
							if (a <= p) n = g - 1;
							else if (a > f) c = g + 1;
							else break;
						else if (a < p) n = g - 1;
						else if (a >= f) c = g + 1;
						else break;
					}
					let o = a - p;
					return g > 0 && (o += this.wrappedTextIndentLength), new r(g, o);
				}
				normalizeOutputPosition(a, h, c) {
					if (this.injectionOffsets !== null) {
						const n = this.b(a, h),
							g = this.c(n, c);
						if (g !== n) return this.a(g, c);
					}
					if (c === w.PositionAffinity.Left) {
						if (a > 0 && h === this.getMinOutputOffset(a))
							return new r(a - 1, this.getMaxOutputOffset(a - 1));
					} else if (c === w.PositionAffinity.Right) {
						const n = this.getOutputLineCount() - 1;
						if (a < n && h === this.getMaxOutputOffset(a))
							return new r(a + 1, this.getMinOutputOffset(a + 1));
					}
					return new r(a, h);
				}
				b(a, h) {
					return (
						a > 0 && (h = Math.max(0, h - this.wrappedTextIndentLength)),
						(a > 0 ? this.breakOffsets[a - 1] : 0) + h
					);
				}
				c(a, h) {
					const c = this.d(a);
					if (!c) return a;
					if (h === w.PositionAffinity.None) {
						if (
							a === c.offsetInInputWithInjections + c.length &&
							C(this.injectionOptions[c.injectedTextIndex].cursorStops)
						)
							return c.offsetInInputWithInjections + c.length;
						{
							let n = c.offsetInInputWithInjections;
							if (d(this.injectionOptions[c.injectedTextIndex].cursorStops))
								return n;
							let g = c.injectedTextIndex - 1;
							for (
								;
								g >= 0 &&
								this.injectionOffsets[g] ===
									this.injectionOffsets[c.injectedTextIndex] &&
								!(
									C(this.injectionOptions[g].cursorStops) ||
									((n -= this.injectionOptions[g].content.length),
									d(this.injectionOptions[g].cursorStops))
								);
							)
								g--;
							return n;
						}
					} else if (
						h === w.PositionAffinity.Right ||
						h === w.PositionAffinity.RightOfInjectedText
					) {
						let n = c.offsetInInputWithInjections + c.length,
							g = c.injectedTextIndex;
						for (
							;
							g + 1 < this.injectionOffsets.length &&
							this.injectionOffsets[g + 1] === this.injectionOffsets[g];
						)
							(n += this.injectionOptions[g + 1].content.length), g++;
						return n;
					} else if (
						h === w.PositionAffinity.Left ||
						h === w.PositionAffinity.LeftOfInjectedText
					) {
						let n = c.offsetInInputWithInjections,
							g = c.injectedTextIndex;
						for (
							;
							g - 1 >= 0 &&
							this.injectionOffsets[g - 1] === this.injectionOffsets[g];
						)
							(n -= this.injectionOptions[g - 1].content.length), g--;
						return n;
					}
					(0, t.$kd)(h);
				}
				getInjectedText(a, h) {
					const c = this.b(a, h),
						n = this.d(c);
					return n
						? { options: this.injectionOptions[n.injectedTextIndex] }
						: null;
				}
				d(a) {
					const h = this.injectionOffsets,
						c = this.injectionOptions;
					if (h !== null) {
						let n = 0;
						for (let g = 0; g < h.length; g++) {
							const p = c[g].content.length,
								o = h[g] + n,
								f = h[g] + n + p;
							if (o > a) break;
							if (a <= f)
								return {
									injectedTextIndex: g,
									offsetInInputWithInjections: o,
									length: p,
								};
							n += p;
						}
					}
				}
			}
			e.$usb = E;
			function C(u) {
				return u == null
					? !0
					: u === w.InjectedTextCursorStops.Right ||
							u === w.InjectedTextCursorStops.Both;
			}
			function d(u) {
				return u == null
					? !0
					: u === w.InjectedTextCursorStops.Left ||
							u === w.InjectedTextCursorStops.Both;
			}
			class m {
				constructor(a) {
					this.options = a;
				}
			}
			e.$vsb = m;
			class r {
				constructor(a, h) {
					(this.outputLineIndex = a), (this.outputOffset = h);
				}
				toString() {
					return `${this.outputLineIndex}:${this.outputOffset}`;
				}
				toPosition(a) {
					return new i.$hL(a + this.outputLineIndex, this.outputOffset + 1);
				}
			}
			e.$wsb = r;
		}),
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
		