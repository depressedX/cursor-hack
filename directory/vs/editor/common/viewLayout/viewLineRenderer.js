import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../../base/common/charCode.js';
import '../../../base/common/strings.js';
import '../core/stringBuilder.js';
import './lineDecorations.js';
import '../viewModel.js';
import './linePart.js';
define(
			de[598],
			he([1, 0, 4, 120, 37, 462, 533, 290, 1545]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*charCode*/,
 w /*strings*/,
 E /*stringBuilder*/,
 C /*lineDecorations*/,
 d /*viewModel*/,
 m /*linePart*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Oub =
						e.$Mub =
						e.ForeignElementType =
						e.$Lub =
						e.$Kub =
						e.$Jub =
						e.$Iub =
						e.RenderWhitespace =
							void 0),
					(e.$Nub = o),
					(e.$Pub = b),
					(t = mt(t)),
					(w = mt(w));
				var r;
				(function (M) {
					(M[(M.None = 0)] = "None"),
						(M[(M.Boundary = 1)] = "Boundary"),
						(M[(M.Selection = 2)] = "Selection"),
						(M[(M.Trailing = 3)] = "Trailing"),
						(M[(M.All = 4)] = "All");
				})(r || (e.RenderWhitespace = r = {}));
				class u {
					constructor(N, A) {
						(this.startOffset = N), (this.endOffset = A);
					}
					equals(N) {
						return (
							this.startOffset === N.startOffset &&
							this.endOffset === N.endOffset
						);
					}
				}
				e.$Iub = u;
				class a {
					constructor(
						N,
						A,
						R,
						O,
						B,
						U,
						z,
						F,
						x,
						H,
						q,
						V,
						G,
						K,
						J,
						W,
						X,
						Y,
						ie,
					) {
						(this.useMonospaceOptimizations = N),
							(this.canUseHalfwidthRightwardsArrow = A),
							(this.lineContent = R),
							(this.continuesWithWrappedLine = O),
							(this.isBasicASCII = B),
							(this.containsRTL = U),
							(this.fauxIndentLength = z),
							(this.lineTokens = F),
							(this.lineDecorations = x.sort(C.$Fub.compare)),
							(this.tabSize = H),
							(this.startVisibleColumn = q),
							(this.spaceWidth = V),
							(this.stopRenderingLineAfter = J),
							(this.renderWhitespace =
								W === "all"
									? r.All
									: W === "boundary"
										? r.Boundary
										: W === "selection"
											? r.Selection
											: W === "trailing"
												? r.Trailing
												: r.None),
							(this.renderControlCharacters = X),
							(this.fontLigatures = Y),
							(this.selectionsOnLine =
								ie &&
								ie.sort((_, te) => (_.startOffset < te.startOffset ? -1 : 1)));
						const ne = Math.abs(K - V),
							ee = Math.abs(G - V);
						ne < ee
							? ((this.renderSpaceWidth = K),
								(this.renderSpaceCharCode = 11825))
							: ((this.renderSpaceWidth = G), (this.renderSpaceCharCode = 183));
					}
					c(N) {
						if (this.selectionsOnLine === null) return N === null;
						if (N === null || N.length !== this.selectionsOnLine.length)
							return !1;
						for (let A = 0; A < this.selectionsOnLine.length; A++)
							if (!this.selectionsOnLine[A].equals(N[A])) return !1;
						return !0;
					}
					equals(N) {
						return (
							this.useMonospaceOptimizations === N.useMonospaceOptimizations &&
							this.canUseHalfwidthRightwardsArrow ===
								N.canUseHalfwidthRightwardsArrow &&
							this.lineContent === N.lineContent &&
							this.continuesWithWrappedLine === N.continuesWithWrappedLine &&
							this.isBasicASCII === N.isBasicASCII &&
							this.containsRTL === N.containsRTL &&
							this.fauxIndentLength === N.fauxIndentLength &&
							this.tabSize === N.tabSize &&
							this.startVisibleColumn === N.startVisibleColumn &&
							this.spaceWidth === N.spaceWidth &&
							this.renderSpaceWidth === N.renderSpaceWidth &&
							this.renderSpaceCharCode === N.renderSpaceCharCode &&
							this.stopRenderingLineAfter === N.stopRenderingLineAfter &&
							this.renderWhitespace === N.renderWhitespace &&
							this.renderControlCharacters === N.renderControlCharacters &&
							this.fontLigatures === N.fontLigatures &&
							C.$Fub.equalsArr(this.lineDecorations, N.lineDecorations) &&
							this.lineTokens.equals(N.lineTokens) &&
							this.c(N.selectionsOnLine)
						);
					}
				}
				e.$Jub = a;
				var h;
				(function (M) {
					(M[(M.PART_INDEX_MASK = 4294901760)] = "PART_INDEX_MASK"),
						(M[(M.CHAR_INDEX_MASK = 65535)] = "CHAR_INDEX_MASK"),
						(M[(M.CHAR_INDEX_OFFSET = 0)] = "CHAR_INDEX_OFFSET"),
						(M[(M.PART_INDEX_OFFSET = 16)] = "PART_INDEX_OFFSET");
				})(h || (h = {}));
				class c {
					constructor(N, A) {
						(this.partIndex = N), (this.charIndex = A);
					}
				}
				e.$Kub = c;
				class n {
					static c(N) {
						return (N & h.PART_INDEX_MASK) >>> h.PART_INDEX_OFFSET;
					}
					static d(N) {
						return (N & h.CHAR_INDEX_MASK) >>> h.CHAR_INDEX_OFFSET;
					}
					constructor(N, A) {
						(this.length = N),
							(this.e = new Uint32Array(this.length)),
							(this.f = new Uint32Array(this.length));
					}
					setColumnInfo(N, A, R, O) {
						const B =
							((A << h.PART_INDEX_OFFSET) | (R << h.CHAR_INDEX_OFFSET)) >>> 0;
						(this.e[N - 1] = B), (this.f[N - 1] = O);
					}
					getHorizontalOffset(N) {
						return this.f.length === 0 ? 0 : this.f[N - 1];
					}
					g(N) {
						return this.length === 0
							? 0
							: N < 0
								? this.e[0]
								: N >= this.length
									? this.e[this.length - 1]
									: this.e[N];
					}
					getDomPosition(N) {
						const A = this.g(N - 1),
							R = n.c(A),
							O = n.d(A);
						return new c(R, O);
					}
					getColumn(N, A) {
						return this.h(N.partIndex, A, N.charIndex) + 1;
					}
					h(N, A, R) {
						if (this.length === 0) return 0;
						const O =
							((N << h.PART_INDEX_OFFSET) | (R << h.CHAR_INDEX_OFFSET)) >>> 0;
						let B = 0,
							U = this.length - 1;
						for (; B + 1 < U; ) {
							const J = (B + U) >>> 1,
								W = this.e[J];
							if (W === O) return J;
							W > O ? (U = J) : (B = J);
						}
						if (B === U) return B;
						const z = this.e[B],
							F = this.e[U];
						if (z === O) return B;
						if (F === O) return U;
						const x = n.c(z),
							H = n.d(z),
							q = n.c(F);
						let V;
						x !== q ? (V = A) : (V = n.d(F));
						const G = R - H,
							K = V - R;
						return G <= K ? B : U;
					}
					inflate() {
						const N = [];
						for (let A = 0; A < this.length; A++) {
							const R = this.e[A],
								O = n.c(R),
								B = n.d(R),
								U = this.f[A];
							N.push([O, B, U]);
						}
						return N;
					}
				}
				e.$Lub = n;
				var g;
				(function (M) {
					(M[(M.None = 0)] = "None"),
						(M[(M.Before = 1)] = "Before"),
						(M[(M.After = 2)] = "After");
				})(g || (e.ForeignElementType = g = {}));
				class p {
					constructor(N, A, R) {
						(this._renderLineOutputBrand = void 0),
							(this.characterMapping = N),
							(this.containsRTL = A),
							(this.containsForeignElements = R);
					}
				}
				e.$Mub = p;
				function o(M, N) {
					if (M.lineContent.length === 0) {
						if (M.lineDecorations.length > 0) {
							N.appendString("<span>");
							let A = 0,
								R = 0,
								O = g.None;
							for (const U of M.lineDecorations)
								(U.type === d.InlineDecorationType.Before ||
									U.type === d.InlineDecorationType.After) &&
									(N.appendString('<span class="'),
									N.appendString(U.className),
									N.appendString('"></span>'),
									U.type === d.InlineDecorationType.Before &&
										((O |= g.Before), A++),
									U.type === d.InlineDecorationType.After &&
										((O |= g.After), R++));
							N.appendString("</span>");
							const B = new n(1, A + R);
							return B.setColumnInfo(1, A, 0, 0), new p(B, !1, O);
						}
						return (
							N.appendString("<span><span></span></span>"),
							new p(new n(0, 0), !1, g.None)
						);
					}
					return k(l(M), N);
				}
				class f {
					constructor(N, A, R, O) {
						(this.characterMapping = N),
							(this.html = A),
							(this.containsRTL = R),
							(this.containsForeignElements = O);
					}
				}
				e.$Oub = f;
				function b(M) {
					const N = new E.$KL(1e4),
						A = o(M, N);
					return new f(
						A.characterMapping,
						N.build(),
						A.containsRTL,
						A.containsForeignElements,
					);
				}
				class s {
					constructor(N, A, R, O, B, U, z, F, x, H, q, V, G, K, J, W) {
						(this.fontIsMonospace = N),
							(this.canUseHalfwidthRightwardsArrow = A),
							(this.lineContent = R),
							(this.len = O),
							(this.isOverflowing = B),
							(this.overflowingCharCount = U),
							(this.parts = z),
							(this.containsForeignElements = F),
							(this.fauxIndentLength = x),
							(this.tabSize = H),
							(this.startVisibleColumn = q),
							(this.containsRTL = V),
							(this.spaceWidth = G),
							(this.renderSpaceCharCode = K),
							(this.renderWhitespace = J),
							(this.renderControlCharacters = W);
					}
				}
				function l(M) {
					const N = M.lineContent;
					let A, R, O;
					M.stopRenderingLineAfter !== -1 && M.stopRenderingLineAfter < N.length
						? ((A = !0),
							(R = N.length - M.stopRenderingLineAfter),
							(O = M.stopRenderingLineAfter))
						: ((A = !1), (R = 0), (O = N.length));
					let B = y(N, M.containsRTL, M.lineTokens, M.fauxIndentLength, O);
					M.renderControlCharacters && !M.isBasicASCII && (B = I(N, B)),
						(M.renderWhitespace === r.All ||
							M.renderWhitespace === r.Boundary ||
							(M.renderWhitespace === r.Selection && M.selectionsOnLine) ||
							(M.renderWhitespace === r.Trailing &&
								!M.continuesWithWrappedLine)) &&
							(B = T(M, N, O, B));
					let U = g.None;
					if (M.lineDecorations.length > 0) {
						for (let z = 0, F = M.lineDecorations.length; z < F; z++) {
							const x = M.lineDecorations[z];
							x.type === d.InlineDecorationType.RegularAffectingLetterSpacing ||
							x.type === d.InlineDecorationType.Before
								? (U |= g.Before)
								: x.type === d.InlineDecorationType.After && (U |= g.After);
						}
						B = P(N, O, B, M.lineDecorations);
					}
					return (
						M.containsRTL || (B = v(N, B, !M.isBasicASCII || M.fontLigatures)),
						new s(
							M.useMonospaceOptimizations,
							M.canUseHalfwidthRightwardsArrow,
							N,
							O,
							A,
							R,
							B,
							U,
							M.fauxIndentLength,
							M.tabSize,
							M.startVisibleColumn,
							M.containsRTL,
							M.spaceWidth,
							M.renderSpaceCharCode,
							M.renderWhitespace,
							M.renderControlCharacters,
						)
					);
				}
				function y(M, N, A, R, O) {
					const B = [];
					let U = 0;
					R > 0 && (B[U++] = new m.$Eub(R, "", 0, !1));
					let z = R;
					for (let F = 0, x = A.getCount(); F < x; F++) {
						const H = A.getEndOffset(F);
						if (H <= R) continue;
						const q = A.getClassName(F);
						if (H >= O) {
							const G = N ? w.$1f(M.substring(z, O)) : !1;
							B[U++] = new m.$Eub(O, q, 0, G);
							break;
						}
						const V = N ? w.$1f(M.substring(z, H)) : !1;
						(B[U++] = new m.$Eub(H, q, 0, V)), (z = H);
					}
					return B;
				}
				var $;
				(function (M) {
					M[(M.LongToken = 50)] = "LongToken";
				})($ || ($ = {}));
				function v(M, N, A) {
					let R = 0;
					const O = [];
					let B = 0;
					if (A)
						for (let U = 0, z = N.length; U < z; U++) {
							const F = N[U],
								x = F.endIndex;
							if (R + $.LongToken < x) {
								const H = F.type,
									q = F.metadata,
									V = F.containsRTL;
								let G = -1,
									K = R;
								for (let J = R; J < x; J++)
									M.charCodeAt(J) === i.CharCode.Space && (G = J),
										G !== -1 &&
											J - K >= $.LongToken &&
											((O[B++] = new m.$Eub(G + 1, H, q, V)),
											(K = G + 1),
											(G = -1));
								K !== x && (O[B++] = new m.$Eub(x, H, q, V));
							} else O[B++] = F;
							R = x;
						}
					else
						for (let U = 0, z = N.length; U < z; U++) {
							const F = N[U],
								x = F.endIndex,
								H = x - R;
							if (H > $.LongToken) {
								const q = F.type,
									V = F.metadata,
									G = F.containsRTL,
									K = Math.ceil(H / $.LongToken);
								for (let J = 1; J < K; J++) {
									const W = R + J * $.LongToken;
									O[B++] = new m.$Eub(W, q, V, G);
								}
								O[B++] = new m.$Eub(x, q, V, G);
							} else O[B++] = F;
							R = x;
						}
					return O;
				}
				function S(M) {
					return M < 32
						? M !== i.CharCode.Tab
						: M === 127 ||
								(M >= 8234 && M <= 8238) ||
								(M >= 8294 && M <= 8297) ||
								(M >= 8206 && M <= 8207) ||
								M === 1564;
				}
				function I(M, N) {
					const A = [];
					let R = new m.$Eub(0, "", 0, !1),
						O = 0;
					for (const B of N) {
						const U = B.endIndex;
						for (; O < U; O++) {
							const z = M.charCodeAt(O);
							S(z) &&
								(O > R.endIndex &&
									((R = new m.$Eub(O, B.type, B.metadata, B.containsRTL)),
									A.push(R)),
								(R = new m.$Eub(O + 1, "mtkcontrol", B.metadata, !1)),
								A.push(R));
						}
						O > R.endIndex &&
							((R = new m.$Eub(U, B.type, B.metadata, B.containsRTL)),
							A.push(R));
					}
					return A;
				}
				function T(M, N, A, R) {
					const O = M.continuesWithWrappedLine,
						B = M.fauxIndentLength,
						U = M.tabSize,
						z = M.startVisibleColumn,
						F = M.useMonospaceOptimizations,
						x = M.selectionsOnLine,
						H = M.renderWhitespace === r.Boundary,
						q = M.renderWhitespace === r.Trailing,
						V = M.renderSpaceWidth !== M.spaceWidth,
						G = [];
					let K = 0,
						J = 0,
						W = R[J].type,
						X = R[J].containsRTL,
						Y = R[J].endIndex;
					const ie = R.length;
					let ne = !1,
						ee = w.$Bf(N),
						_;
					ee === -1 ? ((ne = !0), (ee = A), (_ = A)) : (_ = w.$Df(N));
					let te = !1,
						Q = 0,
						Z = x && x[Q],
						se = z % U;
					for (let le = B; le < A; le++) {
						const oe = N.charCodeAt(le);
						Z && le >= Z.endOffset && (Q++, (Z = x && x[Q]));
						let ae;
						if (le < ee || le > _) ae = !0;
						else if (oe === i.CharCode.Tab) ae = !0;
						else if (oe === i.CharCode.Space)
							if (H)
								if (te) ae = !0;
								else {
									const pe =
										le + 1 < A ? N.charCodeAt(le + 1) : i.CharCode.Null;
									ae = pe === i.CharCode.Space || pe === i.CharCode.Tab;
								}
							else ae = !0;
						else ae = !1;
						if (
							(ae && x && (ae = !!Z && Z.startOffset <= le && Z.endOffset > le),
							ae && q && (ae = ne || le > _),
							ae && X && le >= ee && le <= _ && (ae = !1),
							te)
						) {
							if (!ae || (!F && se >= U)) {
								if (V) {
									const pe = K > 0 ? G[K - 1].endIndex : B;
									for (let $e = pe + 1; $e <= le; $e++)
										G[K++] = new m.$Eub(
											$e,
											"mtkw",
											m.LinePartMetadata.IS_WHITESPACE,
											!1,
										);
								} else
									G[K++] = new m.$Eub(
										le,
										"mtkw",
										m.LinePartMetadata.IS_WHITESPACE,
										!1,
									);
								se = se % U;
							}
						} else
							(le === Y || (ae && le > B)) &&
								((G[K++] = new m.$Eub(le, W, 0, X)), (se = se % U));
						for (
							oe === i.CharCode.Tab ? (se = U) : w.$5f(oe) ? (se += 2) : se++,
								te = ae;
							le === Y && (J++, J < ie);
						)
							(W = R[J].type), (X = R[J].containsRTL), (Y = R[J].endIndex);
					}
					let re = !1;
					if (te)
						if (O && H) {
							const le = A > 0 ? N.charCodeAt(A - 1) : i.CharCode.Null,
								oe = A > 1 ? N.charCodeAt(A - 2) : i.CharCode.Null;
							(le === i.CharCode.Space &&
								oe !== i.CharCode.Space &&
								oe !== i.CharCode.Tab) ||
								(re = !0);
						} else re = !0;
					if (re)
						if (V) {
							const le = K > 0 ? G[K - 1].endIndex : B;
							for (let oe = le + 1; oe <= A; oe++)
								G[K++] = new m.$Eub(
									oe,
									"mtkw",
									m.LinePartMetadata.IS_WHITESPACE,
									!1,
								);
						} else
							G[K++] = new m.$Eub(
								A,
								"mtkw",
								m.LinePartMetadata.IS_WHITESPACE,
								!1,
							);
					else G[K++] = new m.$Eub(A, W, 0, X);
					return G;
				}
				function P(M, N, A, R) {
					R.sort(C.$Fub.compare);
					const O = C.$Hub.normalize(M, R),
						B = O.length;
					let U = 0;
					const z = [];
					let F = 0,
						x = 0;
					for (let q = 0, V = A.length; q < V; q++) {
						const G = A[q],
							K = G.endIndex,
							J = G.type,
							W = G.metadata,
							X = G.containsRTL;
						for (; U < B && O[U].startOffset < K; ) {
							const Y = O[U];
							if (
								(Y.startOffset > x &&
									((x = Y.startOffset), (z[F++] = new m.$Eub(x, J, W, X))),
								Y.endOffset + 1 <= K)
							)
								(x = Y.endOffset + 1),
									(z[F++] = new m.$Eub(
										x,
										J + " " + Y.className,
										W | Y.metadata,
										X,
									)),
									U++;
							else {
								(x = K),
									(z[F++] = new m.$Eub(
										x,
										J + " " + Y.className,
										W | Y.metadata,
										X,
									));
								break;
							}
						}
						K > x && ((x = K), (z[F++] = new m.$Eub(x, J, W, X)));
					}
					const H = A[A.length - 1].endIndex;
					if (U < B && O[U].startOffset === H)
						for (; U < B && O[U].startOffset === H; ) {
							const q = O[U];
							(z[F++] = new m.$Eub(x, q.className, q.metadata, !1)), U++;
						}
					return z;
				}
				function k(M, N) {
					const A = M.fontIsMonospace,
						R = M.canUseHalfwidthRightwardsArrow,
						O = M.containsForeignElements,
						B = M.lineContent,
						U = M.len,
						z = M.isOverflowing,
						F = M.overflowingCharCount,
						x = M.parts,
						H = M.fauxIndentLength,
						q = M.tabSize,
						V = M.startVisibleColumn,
						G = M.containsRTL,
						K = M.spaceWidth,
						J = M.renderSpaceCharCode,
						W = M.renderWhitespace,
						X = M.renderControlCharacters,
						Y = new n(U + 1, x.length);
					let ie = !1,
						ne = 0,
						ee = V,
						_ = 0,
						te = 0,
						Q = 0;
					G ? N.appendString('<span dir="ltr">') : N.appendString("<span>");
					for (let Z = 0, se = x.length; Z < se; Z++) {
						const re = x[Z],
							le = re.endIndex,
							oe = re.type,
							ae = re.containsRTL,
							pe = W !== r.None && re.isWhitespace(),
							$e = pe && !A && (oe === "mtkw" || !O),
							ye = ne === le && re.isPseudoAfter();
						if (
							((_ = 0),
							N.appendString("<span "),
							ae && N.appendString('style="unicode-bidi:isolate" '),
							N.appendString('class="'),
							N.appendString($e ? "mtkz" : oe),
							N.appendASCIICharCode(i.CharCode.DoubleQuote),
							pe)
						) {
							let ue = 0;
							{
								let fe = ne,
									me = ee;
								for (; fe < le; fe++) {
									const ge =
										(B.charCodeAt(fe) === i.CharCode.Tab ? q - (me % q) : 1) |
										0;
									(ue += ge), fe >= H && (me += ge);
								}
							}
							for (
								$e &&
									(N.appendString(' style="width:'),
									N.appendString(String(K * ue)),
									N.appendString('px"')),
									N.appendASCIICharCode(i.CharCode.GreaterThan);
								ne < le;
								ne++
							) {
								Y.setColumnInfo(ne + 1, Z - Q, _, te), (Q = 0);
								const fe = B.charCodeAt(ne);
								let me, ve;
								if (fe === i.CharCode.Tab) {
									(me = (q - (ee % q)) | 0),
										(ve = me),
										!R || ve > 1
											? N.appendCharCode(8594)
											: N.appendCharCode(65515);
									for (let ge = 2; ge <= ve; ge++) N.appendCharCode(160);
								} else
									(me = 2),
										(ve = 1),
										N.appendCharCode(J),
										N.appendCharCode(8204);
								(_ += me), (te += ve), ne >= H && (ee += ve);
							}
						} else
							for (
								N.appendASCIICharCode(i.CharCode.GreaterThan);
								ne < le;
								ne++
							) {
								Y.setColumnInfo(ne + 1, Z - Q, _, te), (Q = 0);
								const ue = B.charCodeAt(ne);
								let fe = 1,
									me = 1;
								switch (ue) {
									case i.CharCode.Tab:
										(fe = q - (ee % q)), (me = fe);
										for (let ve = 1; ve <= fe; ve++) N.appendCharCode(160);
										break;
									case i.CharCode.Space:
										N.appendCharCode(160);
										break;
									case i.CharCode.LessThan:
										N.appendString("&lt;");
										break;
									case i.CharCode.GreaterThan:
										N.appendString("&gt;");
										break;
									case i.CharCode.Ampersand:
										N.appendString("&amp;");
										break;
									case i.CharCode.Null:
										X ? N.appendCharCode(9216) : N.appendString("&#00;");
										break;
									case i.CharCode.UTF8_BOM:
									case i.CharCode.LINE_SEPARATOR:
									case i.CharCode.PARAGRAPH_SEPARATOR:
									case i.CharCode.NEXT_LINE:
										N.appendCharCode(65533);
										break;
									default:
										w.$5f(ue) && me++,
											X && ue < 32
												? N.appendCharCode(9216 + ue)
												: X && ue === 127
													? N.appendCharCode(9249)
													: X && S(ue)
														? (N.appendString("[U+"),
															N.appendString(L(ue)),
															N.appendString("]"),
															(fe = 8),
															(me = fe))
														: N.appendCharCode(ue);
								}
								(_ += fe), (te += me), ne >= H && (ee += me);
							}
						ye ? Q++ : (Q = 0),
							ne >= U &&
								!ie &&
								re.isPseudoAfter() &&
								((ie = !0), Y.setColumnInfo(ne + 1, Z, _, te)),
							N.appendString("</span>");
					}
					return (
						ie || Y.setColumnInfo(U + 1, x.length - 1, _, te),
						z &&
							(N.appendString('<span class="mtkoverflow">'),
							N.appendString(t.localize(857, null, D(F))),
							N.appendString("</span>")),
						N.appendString("</span>"),
						new p(Y, G, O)
					);
				}
				function L(M) {
					return M.toString(16).toUpperCase().padStart(4, "0");
				}
				function D(M) {
					return M < 1024
						? t.localize(858, null, M)
						: M < 1024 * 1024
							? `${(M / 1024).toFixed(1)} KB`
							: `${(M / 1024 / 1024).toFixed(1)} MB`;
				}
			},
		)
