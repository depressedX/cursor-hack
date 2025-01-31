import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/charCode.js';
import '../../core/position.js';
import '../../core/range.js';
import '../../model.js';
import './rbTreeBase.js';
import '../textModelSearch.js';
define(
			de[1628],
			he([1, 0, 120, 48, 17, 64, 2567, 543]),
			function (ce /*require*/,
 e /*exports*/,
 t /*charCode*/,
 i /*position*/,
 w /*range*/,
 E /*model*/,
 C /*rbTreeBase*/,
 d /*textModelSearch*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$8U = e.$7U = e.$6U = void 0),
					(e.$4U = a),
					(e.$5U = h);
				const m = 65535;
				function r(f) {
					let b;
					return (
						f[f.length - 1] < 65536
							? (b = new Uint16Array(f.length))
							: (b = new Uint32Array(f.length)),
						b.set(f, 0),
						b
					);
				}
				class u {
					constructor(b, s, l, y, $) {
						(this.lineStarts = b),
							(this.cr = s),
							(this.lf = l),
							(this.crlf = y),
							(this.isBasicASCII = $);
					}
				}
				function a(f, b = !0) {
					const s = [0];
					let l = 1;
					for (let y = 0, $ = f.length; y < $; y++) {
						const v = f.charCodeAt(y);
						v === t.CharCode.CarriageReturn
							? y + 1 < $ && f.charCodeAt(y + 1) === t.CharCode.LineFeed
								? ((s[l++] = y + 2), y++)
								: (s[l++] = y + 1)
							: v === t.CharCode.LineFeed && (s[l++] = y + 1);
					}
					return b ? r(s) : s;
				}
				function h(f, b) {
					(f.length = 0), (f[0] = 0);
					let s = 1,
						l = 0,
						y = 0,
						$ = 0,
						v = !0;
					for (let I = 0, T = b.length; I < T; I++) {
						const P = b.charCodeAt(I);
						P === t.CharCode.CarriageReturn
							? I + 1 < T && b.charCodeAt(I + 1) === t.CharCode.LineFeed
								? ($++, (f[s++] = I + 2), I++)
								: (l++, (f[s++] = I + 1))
							: P === t.CharCode.LineFeed
								? (y++, (f[s++] = I + 1))
								: v && P !== t.CharCode.Tab && (P < 32 || P > 126) && (v = !1);
					}
					const S = new u(r(f), l, y, $, v);
					return (f.length = 0), S;
				}
				class c {
					constructor(b, s, l, y, $) {
						(this.bufferIndex = b),
							(this.start = s),
							(this.end = l),
							(this.lineFeedCnt = y),
							(this.length = $);
					}
				}
				e.$6U = c;
				class n {
					constructor(b, s) {
						(this.buffer = b), (this.lineStarts = s);
					}
				}
				e.$7U = n;
				class g {
					constructor(b, s) {
						(this.a = []),
							(this.c = b),
							(this.d = s),
							(this.b = 0),
							b.root !== C.$OU &&
								b.iterate(
									b.root,
									(l) => (l !== C.$OU && this.a.push(l.piece), !0),
								);
					}
					read() {
						return this.a.length === 0
							? this.b === 0
								? (this.b++, this.d)
								: null
							: this.b > this.a.length - 1
								? null
								: this.b === 0
									? this.d + this.c.getPieceContent(this.a[this.b++])
									: this.c.getPieceContent(this.a[this.b++]);
					}
				}
				class p {
					constructor(b) {
						(this.a = b), (this.b = []);
					}
					get(b) {
						for (let s = this.b.length - 1; s >= 0; s--) {
							const l = this.b[s];
							if (
								l.nodeStartOffset <= b &&
								l.nodeStartOffset + l.node.piece.length >= b
							)
								return l;
						}
						return null;
					}
					get2(b) {
						for (let s = this.b.length - 1; s >= 0; s--) {
							const l = this.b[s];
							if (
								l.nodeStartLineNumber &&
								l.nodeStartLineNumber < b &&
								l.nodeStartLineNumber + l.node.piece.lineFeedCnt >= b
							)
								return l;
						}
						return null;
					}
					set(b) {
						this.b.length >= this.a && this.b.shift(), this.b.push(b);
					}
					validate(b) {
						let s = !1;
						const l = this.b;
						for (let y = 0; y < l.length; y++) {
							const $ = l[y];
							if ($.node.parent === null || $.nodeStartOffset >= b) {
								(l[y] = null), (s = !0);
								continue;
							}
						}
						if (s) {
							const y = [];
							for (const $ of l) $ !== null && y.push($);
							this.b = y;
						}
					}
				}
				class o {
					constructor(b, s, l) {
						this.create(b, s, l);
					}
					create(b, s, l) {
						(this.a = [new n("", [0])]),
							(this.g = { line: 0, column: 0 }),
							(this.root = C.$OU),
							(this.b = 1),
							(this.c = 0),
							(this.d = s),
							(this.e = s.length),
							(this.f = l);
						let y = null;
						for (let $ = 0, v = b.length; $ < v; $++)
							if (b[$].buffer.length > 0) {
								b[$].lineStarts || (b[$].lineStarts = a(b[$].buffer));
								const S = new c(
									$ + 1,
									{ line: 0, column: 0 },
									{
										line: b[$].lineStarts.length - 1,
										column:
											b[$].buffer.length -
											b[$].lineStarts[b[$].lineStarts.length - 1],
									},
									b[$].lineStarts.length - 1,
									b[$].buffer.length,
								);
								this.a.push(b[$]), (y = this.S(y, S));
							}
						(this.h = new p(1)),
							(this.j = { lineNumber: 0, value: "" }),
							this.y();
					}
					normalizeEOL(b) {
						const s = m,
							l = s - Math.floor(s / 3),
							y = l * 2;
						let $ = "",
							v = 0;
						const S = [];
						if (
							(this.iterate(this.root, (I) => {
								const T = this.R(I),
									P = T.length;
								if (v <= l || v + P < y) return ($ += T), (v += P), !0;
								const k = $.replace(/\r\n|\r|\n/g, b);
								return S.push(new n(k, a(k))), ($ = T), (v = P), !0;
							}),
							v > 0)
						) {
							const I = $.replace(/\r\n|\r|\n/g, b);
							S.push(new n(I, a(I)));
						}
						this.create(S, b, !0);
					}
					getEOL() {
						return this.d;
					}
					setEOL(b) {
						(this.d = b), (this.e = this.d.length), this.normalizeEOL(b);
					}
					createSnapshot(b) {
						return new g(this, b);
					}
					equal(b) {
						if (
							this.getLength() !== b.getLength() ||
							this.getLineCount() !== b.getLineCount()
						)
							return !1;
						let s = 0;
						return this.iterate(this.root, (y) => {
							if (y === C.$OU) return !0;
							const $ = this.R(y),
								v = $.length,
								S = b.G(s),
								I = b.G(s + v),
								T = b.getValueInRange2(S, I);
							return (s += v), $ === T;
						});
					}
					getOffsetAt(b, s) {
						let l = 0,
							y = this.root;
						for (; y !== C.$OU; )
							if (y.left !== C.$OU && y.lf_left + 1 >= b) y = y.left;
							else if (y.lf_left + y.piece.lineFeedCnt + 1 >= b) {
								l += y.size_left;
								const $ = this.B(y, b - y.lf_left - 2);
								return (l += $ + s - 1);
							} else
								(b -= y.lf_left + y.piece.lineFeedCnt),
									(l += y.size_left + y.piece.length),
									(y = y.right);
						return l;
					}
					getPositionAt(b) {
						(b = Math.floor(b)), (b = Math.max(0, b));
						let s = this.root,
							l = 0;
						const y = b;
						for (; s !== C.$OU; )
							if (s.size_left !== 0 && s.size_left >= b) s = s.left;
							else if (s.size_left + s.piece.length >= b) {
								const $ = this.A(s, b - s.size_left);
								if (((l += s.lf_left + $.index), $.index === 0)) {
									const v = this.getOffsetAt(l + 1, 1),
										S = y - v;
									return new i.$hL(l + 1, S + 1);
								}
								return new i.$hL(l + 1, $.remainder + 1);
							} else if (
								((b -= s.size_left + s.piece.length),
								(l += s.lf_left + s.piece.lineFeedCnt),
								s.right === C.$OU)
							) {
								const $ = this.getOffsetAt(l + 1, 1),
									v = y - b - $;
								return new i.$hL(l + 1, v + 1);
							} else s = s.right;
						return new i.$hL(1, 1);
					}
					getValueInRange(b, s) {
						if (
							b.startLineNumber === b.endLineNumber &&
							b.startColumn === b.endColumn
						)
							return "";
						const l = this.H(b.startLineNumber, b.startColumn),
							y = this.H(b.endLineNumber, b.endColumn),
							$ = this.getValueInRange2(l, y);
						return s
							? s !== this.d || !this.f
								? $.replace(/\r\n|\r|\n/g, s)
								: s === this.getEOL() && this.f
									? $
									: $.replace(/\r\n|\r|\n/g, s)
							: $;
					}
					getValueInRange2(b, s) {
						if (b.node === s.node) {
							const S = b.node,
								I = this.a[S.piece.bufferIndex].buffer,
								T = this.u(S.piece.bufferIndex, S.piece.start);
							return I.substring(T + b.remainder, T + s.remainder);
						}
						let l = b.node;
						const y = this.a[l.piece.bufferIndex].buffer,
							$ = this.u(l.piece.bufferIndex, l.piece.start);
						let v = y.substring($ + b.remainder, $ + l.piece.length);
						for (l = l.next(); l !== C.$OU; ) {
							const S = this.a[l.piece.bufferIndex].buffer,
								I = this.u(l.piece.bufferIndex, l.piece.start);
							if (l === s.node) {
								v += S.substring(I, I + s.remainder);
								break;
							} else v += S.substr(I, l.piece.length);
							l = l.next();
						}
						return v;
					}
					getLinesContent() {
						const b = [];
						let s = 0,
							l = "",
							y = !1;
						return (
							this.iterate(this.root, ($) => {
								if ($ === C.$OU) return !0;
								const v = $.piece;
								let S = v.length;
								if (S === 0) return !0;
								const I = this.a[v.bufferIndex].buffer,
									T = this.a[v.bufferIndex].lineStarts,
									P = v.start.line,
									k = v.end.line;
								let L = T[P] + v.start.column;
								if (
									y &&
									(I.charCodeAt(L) === t.CharCode.LineFeed && (L++, S--),
									(b[s++] = l),
									(l = ""),
									(y = !1),
									S === 0)
								)
									return !0;
								if (P === k)
									return (
										!this.f &&
										I.charCodeAt(L + S - 1) === t.CharCode.CarriageReturn
											? ((y = !0), (l += I.substr(L, S - 1)))
											: (l += I.substr(L, S)),
										!0
									);
								(l += this.f
									? I.substring(L, Math.max(L, T[P + 1] - this.e))
									: I.substring(L, T[P + 1]).replace(/(\r\n|\r|\n)$/, "")),
									(b[s++] = l);
								for (let D = P + 1; D < k; D++)
									(l = this.f
										? I.substring(T[D], T[D + 1] - this.e)
										: I.substring(T[D], T[D + 1]).replace(/(\r\n|\r|\n)$/, "")),
										(b[s++] = l);
								return (
									!this.f &&
									I.charCodeAt(T[k] + v.end.column - 1) ===
										t.CharCode.CarriageReturn
										? ((y = !0),
											v.end.column === 0
												? s--
												: (l = I.substr(T[k], v.end.column - 1)))
										: (l = I.substr(T[k], v.end.column)),
									!0
								);
							}),
							y && ((b[s++] = l), (l = "")),
							(b[s++] = l),
							b
						);
					}
					getLength() {
						return this.c;
					}
					getLineCount() {
						return this.b;
					}
					getLineContent(b) {
						return this.j.lineNumber === b
							? this.j.value
							: ((this.j.lineNumber = b),
								b === this.b
									? (this.j.value = this.getLineRawContent(b))
									: this.f
										? (this.j.value = this.getLineRawContent(b, this.e))
										: (this.j.value = this.getLineRawContent(b).replace(
												/(\r\n|\r|\n)$/,
												"",
											)),
								this.j.value);
					}
					l(b) {
						if (b.remainder === b.node.piece.length) {
							const s = b.node.next();
							if (!s) return 0;
							const l = this.a[s.piece.bufferIndex],
								y = this.u(s.piece.bufferIndex, s.piece.start);
							return l.buffer.charCodeAt(y);
						} else {
							const s = this.a[b.node.piece.bufferIndex],
								y =
									this.u(b.node.piece.bufferIndex, b.node.piece.start) +
									b.remainder;
							return s.buffer.charCodeAt(y);
						}
					}
					getLineCharCode(b, s) {
						const l = this.H(b, s + 1);
						return this.l(l);
					}
					getLineLength(b) {
						if (b === this.getLineCount()) {
							const s = this.getOffsetAt(b, 1);
							return this.getLength() - s;
						}
						return this.getOffsetAt(b + 1, 1) - this.getOffsetAt(b, 1) - this.e;
					}
					getCharCode(b) {
						const s = this.G(b);
						return this.l(s);
					}
					getNearestChunk(b) {
						const s = this.G(b);
						if (s.remainder === s.node.piece.length) {
							const l = s.node.next();
							if (!l || l === C.$OU) return "";
							const y = this.a[l.piece.bufferIndex],
								$ = this.u(l.piece.bufferIndex, l.piece.start);
							return y.buffer.substring($, $ + l.piece.length);
						} else {
							const l = this.a[s.node.piece.bufferIndex],
								y = this.u(s.node.piece.bufferIndex, s.node.piece.start),
								$ = y + s.remainder,
								v = y + s.node.piece.length;
							return l.buffer.substring($, v);
						}
					}
					findMatchesInNode(b, s, l, y, $, v, S, I, T, P, k) {
						const L = this.a[b.piece.bufferIndex],
							D = this.u(b.piece.bufferIndex, b.piece.start),
							M = this.u(b.piece.bufferIndex, $),
							N = this.u(b.piece.bufferIndex, v);
						let A;
						const R = { line: 0, column: 0 };
						let O, B;
						s._wordSeparators
							? ((O = L.buffer.substring(M, N)), (B = (U) => U + M), s.reset(0))
							: ((O = L.buffer), (B = (U) => U), s.reset(M));
						do
							if (((A = s.next(O)), A)) {
								if (B(A.index) >= N) return P;
								this.s(b, B(A.index) - D, R);
								const U = this.t(b.piece.bufferIndex, $, R),
									z =
										R.line === $.line ? R.column - $.column + y : R.column + 1,
									F = z + A[0].length;
								if (
									((k[P++] = (0, d.$ZU)(new w.$iL(l + U, z, l + U, F), A, I)),
									B(A.index) + A[0].length >= N || P >= T)
								)
									return P;
							}
						while (A);
						return P;
					}
					findMatchesLineByLine(b, s, l, y) {
						const $ = [];
						let v = 0;
						const S = new d.$3U(s.wordSeparators, s.regex);
						let I = this.H(b.startLineNumber, b.startColumn);
						if (I === null) return [];
						const T = this.H(b.endLineNumber, b.endColumn);
						if (T === null) return [];
						let P = this.s(I.node, I.remainder);
						const k = this.s(T.node, T.remainder);
						if (I.node === T.node)
							return (
								this.findMatchesInNode(
									I.node,
									S,
									b.startLineNumber,
									b.startColumn,
									P,
									k,
									s,
									l,
									y,
									v,
									$,
								),
								$
							);
						let L = b.startLineNumber,
							D = I.node;
						for (; D !== T.node; ) {
							const N = this.t(D.piece.bufferIndex, P, D.piece.end);
							if (N >= 1) {
								const R = this.a[D.piece.bufferIndex].lineStarts,
									O = this.u(D.piece.bufferIndex, D.piece.start),
									B = R[P.line + N],
									U = L === b.startLineNumber ? b.startColumn : 1;
								if (
									((v = this.findMatchesInNode(
										D,
										S,
										L,
										U,
										P,
										this.s(D, B - O),
										s,
										l,
										y,
										v,
										$,
									)),
									v >= y)
								)
									return $;
								L += N;
							}
							const A = L === b.startLineNumber ? b.startColumn - 1 : 0;
							if (L === b.endLineNumber) {
								const R = this.getLineContent(L).substring(A, b.endColumn - 1);
								return (v = this.n(s, S, R, b.endLineNumber, A, v, $, l, y)), $;
							}
							if (
								((v = this.n(
									s,
									S,
									this.getLineContent(L).substr(A),
									L,
									A,
									v,
									$,
									l,
									y,
								)),
								v >= y)
							)
								return $;
							L++,
								(I = this.H(L, 1)),
								(D = I.node),
								(P = this.s(I.node, I.remainder));
						}
						if (L === b.endLineNumber) {
							const N = L === b.startLineNumber ? b.startColumn - 1 : 0,
								A = this.getLineContent(L).substring(N, b.endColumn - 1);
							return (v = this.n(s, S, A, b.endLineNumber, N, v, $, l, y)), $;
						}
						const M = L === b.startLineNumber ? b.startColumn : 1;
						return (
							(v = this.findMatchesInNode(
								T.node,
								S,
								L,
								M,
								P,
								k,
								s,
								l,
								y,
								v,
								$,
							)),
							$
						);
					}
					n(b, s, l, y, $, v, S, I, T) {
						const P = b.wordSeparators;
						if (!I && b.simpleSearch) {
							const L = b.simpleSearch,
								D = L.length,
								M = l.length;
							let N = -D;
							for (; (N = l.indexOf(L, N + D)) !== -1; )
								if (
									(!P || (0, d.$2U)(P, l, M, N, D)) &&
									((S[v++] = new E.$MN(
										new w.$iL(y, N + 1 + $, y, N + 1 + D + $),
										null,
									)),
									v >= T)
								)
									return v;
							return v;
						}
						let k;
						s.reset(0);
						do
							if (
								((k = s.next(l)),
								k &&
									((S[v++] = (0, d.$ZU)(
										new w.$iL(
											y,
											k.index + 1 + $,
											y,
											k.index + 1 + k[0].length + $,
										),
										k,
										I,
									)),
									v >= T))
							)
								return v;
						while (k);
						return v;
					}
					insert(b, s, l = !1) {
						if (
							((this.f = this.f && l),
							(this.j.lineNumber = 0),
							(this.j.value = ""),
							this.root !== C.$OU)
						) {
							const { node: y, remainder: $, nodeStartOffset: v } = this.G(b),
								S = y.piece,
								I = S.bufferIndex,
								T = this.s(y, $);
							if (
								y.piece.bufferIndex === 0 &&
								S.end.line === this.g.line &&
								S.end.column === this.g.column &&
								v + S.length === b &&
								s.length < m
							) {
								this.F(y, s), this.y();
								return;
							}
							if (v === b) this.o(s, y), this.h.validate(b);
							else if (v + y.piece.length > b) {
								const P = [];
								let k = new c(
									S.bufferIndex,
									T,
									S.end,
									this.t(S.bufferIndex, T, S.end),
									this.u(I, S.end) - this.u(I, T),
								);
								if (this.K() && this.M(s) && this.I(y, $) === 10) {
									const N = { line: k.start.line + 1, column: 0 };
									(k = new c(
										k.bufferIndex,
										N,
										k.end,
										this.t(k.bufferIndex, N, k.end),
										k.length - 1,
									)),
										(s += `
`);
								}
								if (this.K() && this.L(s))
									if (this.I(y, $ - 1) === 13) {
										const N = this.s(y, $ - 1);
										this.C(y, N),
											(s = "\r" + s),
											y.piece.length === 0 && P.push(y);
									} else this.C(y, T);
								else this.C(y, T);
								const L = this.w(s);
								k.length > 0 && this.S(y, k);
								let D = y;
								for (let M = 0; M < L.length; M++) D = this.S(D, L[M]);
								this.v(P);
							} else this.q(s, y);
						} else {
							const y = this.w(s);
							let $ = this.T(null, y[0]);
							for (let v = 1; v < y.length; v++) $ = this.S($, y[v]);
						}
						this.y();
					}
					delete(b, s) {
						if (
							((this.j.lineNumber = 0),
							(this.j.value = ""),
							s <= 0 || this.root === C.$OU)
						)
							return;
						const l = this.G(b),
							y = this.G(b + s),
							$ = l.node,
							v = y.node;
						if ($ === v) {
							const L = this.s($, l.remainder),
								D = this.s($, y.remainder);
							if (l.nodeStartOffset === b) {
								if (s === $.piece.length) {
									const M = $.next();
									(0, C.$TU)(this, $), this.N(M), this.y();
									return;
								}
								this.D($, D), this.h.validate(b), this.N($), this.y();
								return;
							}
							if (l.nodeStartOffset + $.piece.length === b + s) {
								this.C($, L), this.O($), this.y();
								return;
							}
							this.E($, L, D), this.y();
							return;
						}
						const S = [],
							I = this.s($, l.remainder);
						this.C($, I), this.h.validate(b), $.piece.length === 0 && S.push($);
						const T = this.s(v, y.remainder);
						this.D(v, T), v.piece.length === 0 && S.push(v);
						const P = $.next();
						for (let L = P; L !== C.$OU && L !== v; L = L.next()) S.push(L);
						const k = $.piece.length === 0 ? $.prev() : $;
						this.v(S), this.O(k), this.y();
					}
					o(b, s) {
						const l = [];
						if (this.K() && this.M(b) && this.L(s)) {
							const v = s.piece,
								S = { line: v.start.line + 1, column: 0 },
								I = new c(
									v.bufferIndex,
									S,
									v.end,
									this.t(v.bufferIndex, S, v.end),
									v.length - 1,
								);
							(s.piece = I),
								(b += `
`),
								(0, C.$VU)(this, s, -1, -1),
								s.piece.length === 0 && l.push(s);
						}
						const y = this.w(b);
						let $ = this.T(s, y[y.length - 1]);
						for (let v = y.length - 2; v >= 0; v--) $ = this.T($, y[v]);
						this.N($), this.v(l);
					}
					q(b, s) {
						this.Q(b, s) &&
							(b += `
`);
						const l = this.w(b),
							y = this.S(s, l[0]);
						let $ = y;
						for (let v = 1; v < l.length; v++) $ = this.S($, l[v]);
						this.N(y);
					}
					s(b, s, l) {
						const y = b.piece,
							$ = b.piece.bufferIndex,
							v = this.a[$].lineStarts,
							I = v[y.start.line] + y.start.column + s;
						let T = y.start.line,
							P = y.end.line,
							k = 0,
							L = 0,
							D = 0;
						for (
							;
							T <= P && ((k = (T + (P - T) / 2) | 0), (D = v[k]), k !== P);
						)
							if (((L = v[k + 1]), I < D)) P = k - 1;
							else if (I >= L) T = k + 1;
							else break;
						return l
							? ((l.line = k), (l.column = I - D), null)
							: { line: k, column: I - D };
					}
					t(b, s, l) {
						if (l.column === 0) return l.line - s.line;
						const y = this.a[b].lineStarts;
						if (l.line === y.length - 1) return l.line - s.line;
						const $ = y[l.line + 1],
							v = y[l.line] + l.column;
						if ($ > v + 1) return l.line - s.line;
						const S = v - 1;
						return this.a[b].buffer.charCodeAt(S) === 13
							? l.line - s.line + 1
							: l.line - s.line;
					}
					u(b, s) {
						return this.a[b].lineStarts[s.line] + s.column;
					}
					v(b) {
						for (let s = 0; s < b.length; s++) (0, C.$TU)(this, b[s]);
					}
					w(b) {
						if (b.length > m) {
							const P = [];
							for (; b.length > m; ) {
								const L = b.charCodeAt(m - 1);
								let D;
								L === t.CharCode.CarriageReturn || (L >= 55296 && L <= 56319)
									? ((D = b.substring(0, m - 1)), (b = b.substring(m - 1)))
									: ((D = b.substring(0, m)), (b = b.substring(m)));
								const M = a(D);
								P.push(
									new c(
										this.a.length,
										{ line: 0, column: 0 },
										{ line: M.length - 1, column: D.length - M[M.length - 1] },
										M.length - 1,
										D.length,
									),
								),
									this.a.push(new n(D, M));
							}
							const k = a(b);
							return (
								P.push(
									new c(
										this.a.length,
										{ line: 0, column: 0 },
										{ line: k.length - 1, column: b.length - k[k.length - 1] },
										k.length - 1,
										b.length,
									),
								),
								this.a.push(new n(b, k)),
								P
							);
						}
						let s = this.a[0].buffer.length;
						const l = a(b, !1);
						let y = this.g;
						if (
							this.a[0].lineStarts[this.a[0].lineStarts.length - 1] === s &&
							s !== 0 &&
							this.L(b) &&
							this.M(this.a[0].buffer)
						) {
							(this.g = { line: this.g.line, column: this.g.column + 1 }),
								(y = this.g);
							for (let P = 0; P < l.length; P++) l[P] += s + 1;
							(this.a[0].lineStarts = this.a[0].lineStarts.concat(l.slice(1))),
								(this.a[0].buffer += "_" + b),
								(s += 1);
						} else {
							if (s !== 0) for (let P = 0; P < l.length; P++) l[P] += s;
							(this.a[0].lineStarts = this.a[0].lineStarts.concat(l.slice(1))),
								(this.a[0].buffer += b);
						}
						const $ = this.a[0].buffer.length,
							v = this.a[0].lineStarts.length - 1,
							S = $ - this.a[0].lineStarts[v],
							I = { line: v, column: S },
							T = new c(0, y, I, this.t(0, y, I), $ - s);
						return (this.g = I), [T];
					}
					getLinesRawContent() {
						return this.U(this.root);
					}
					getLineRawContent(b, s = 0) {
						let l = this.root,
							y = "";
						const $ = this.h.get2(b);
						if ($) {
							l = $.node;
							const v = this.B(l, b - $.nodeStartLineNumber - 1),
								S = this.a[l.piece.bufferIndex].buffer,
								I = this.u(l.piece.bufferIndex, l.piece.start);
							if ($.nodeStartLineNumber + l.piece.lineFeedCnt === b)
								y = S.substring(I + v, I + l.piece.length);
							else {
								const T = this.B(l, b - $.nodeStartLineNumber);
								return S.substring(I + v, I + T - s);
							}
						} else {
							let v = 0;
							const S = b;
							for (; l !== C.$OU; )
								if (l.left !== C.$OU && l.lf_left >= b - 1) l = l.left;
								else if (l.lf_left + l.piece.lineFeedCnt > b - 1) {
									const I = this.B(l, b - l.lf_left - 2),
										T = this.B(l, b - l.lf_left - 1),
										P = this.a[l.piece.bufferIndex].buffer,
										k = this.u(l.piece.bufferIndex, l.piece.start);
									return (
										(v += l.size_left),
										this.h.set({
											node: l,
											nodeStartOffset: v,
											nodeStartLineNumber: S - (b - 1 - l.lf_left),
										}),
										P.substring(k + I, k + T - s)
									);
								} else if (l.lf_left + l.piece.lineFeedCnt === b - 1) {
									const I = this.B(l, b - l.lf_left - 2),
										T = this.a[l.piece.bufferIndex].buffer,
										P = this.u(l.piece.bufferIndex, l.piece.start);
									y = T.substring(P + I, P + l.piece.length);
									break;
								} else
									(b -= l.lf_left + l.piece.lineFeedCnt),
										(v += l.size_left + l.piece.length),
										(l = l.right);
						}
						for (l = l.next(); l !== C.$OU; ) {
							const v = this.a[l.piece.bufferIndex].buffer;
							if (l.piece.lineFeedCnt > 0) {
								const S = this.B(l, 0),
									I = this.u(l.piece.bufferIndex, l.piece.start);
								return (y += v.substring(I, I + S - s)), y;
							} else {
								const S = this.u(l.piece.bufferIndex, l.piece.start);
								y += v.substr(S, l.piece.length);
							}
							l = l.next();
						}
						return y;
					}
					y() {
						let b = this.root,
							s = 1,
							l = 0;
						for (; b !== C.$OU; )
							(s += b.lf_left + b.piece.lineFeedCnt),
								(l += b.size_left + b.piece.length),
								(b = b.right);
						(this.b = s), (this.c = l), this.h.validate(this.c);
					}
					A(b, s) {
						const l = b.piece,
							y = this.s(b, s),
							$ = y.line - l.start.line;
						if (
							this.u(l.bufferIndex, l.end) - this.u(l.bufferIndex, l.start) ===
							s
						) {
							const v = this.t(b.piece.bufferIndex, l.start, y);
							if (v !== $) return { index: v, remainder: 0 };
						}
						return { index: $, remainder: y.column };
					}
					B(b, s) {
						if (s < 0) return 0;
						const l = b.piece,
							y = this.a[l.bufferIndex].lineStarts,
							$ = l.start.line + s + 1;
						return $ > l.end.line
							? y[l.end.line] + l.end.column - y[l.start.line] - l.start.column
							: y[$] - y[l.start.line] - l.start.column;
					}
					C(b, s) {
						const l = b.piece,
							y = l.lineFeedCnt,
							$ = this.u(l.bufferIndex, l.end),
							v = s,
							S = this.u(l.bufferIndex, v),
							I = this.t(l.bufferIndex, l.start, v),
							T = I - y,
							P = S - $,
							k = l.length + P;
						(b.piece = new c(l.bufferIndex, l.start, v, I, k)),
							(0, C.$VU)(this, b, P, T);
					}
					D(b, s) {
						const l = b.piece,
							y = l.lineFeedCnt,
							$ = this.u(l.bufferIndex, l.start),
							v = s,
							S = this.t(l.bufferIndex, v, l.end),
							I = this.u(l.bufferIndex, v),
							T = S - y,
							P = $ - I,
							k = l.length + P;
						(b.piece = new c(l.bufferIndex, v, l.end, S, k)),
							(0, C.$VU)(this, b, P, T);
					}
					E(b, s, l) {
						const y = b.piece,
							$ = y.start,
							v = y.end,
							S = y.length,
							I = y.lineFeedCnt,
							T = s,
							P = this.t(y.bufferIndex, y.start, T),
							k = this.u(y.bufferIndex, s) - this.u(y.bufferIndex, $);
						(b.piece = new c(y.bufferIndex, y.start, T, P, k)),
							(0, C.$VU)(this, b, k - S, P - I);
						const L = new c(
								y.bufferIndex,
								l,
								v,
								this.t(y.bufferIndex, l, v),
								this.u(y.bufferIndex, v) - this.u(y.bufferIndex, l),
							),
							D = this.S(b, L);
						this.N(D);
					}
					F(b, s) {
						this.Q(s, b) &&
							(s += `
`);
						const l = this.K() && this.L(s) && this.M(b),
							y = this.a[0].buffer.length;
						this.a[0].buffer += s;
						const $ = a(s, !1);
						for (let D = 0; D < $.length; D++) $[D] += y;
						if (l) {
							const D = this.a[0].lineStarts[this.a[0].lineStarts.length - 2];
							this.a[0].lineStarts.pop(),
								(this.g = { line: this.g.line - 1, column: y - D });
						}
						this.a[0].lineStarts = this.a[0].lineStarts.concat($.slice(1));
						const v = this.a[0].lineStarts.length - 1,
							S = this.a[0].buffer.length - this.a[0].lineStarts[v],
							I = { line: v, column: S },
							T = b.piece.length + s.length,
							P = b.piece.lineFeedCnt,
							k = this.t(0, b.piece.start, I),
							L = k - P;
						(b.piece = new c(b.piece.bufferIndex, b.piece.start, I, k, T)),
							(this.g = I),
							(0, C.$VU)(this, b, s.length, L);
					}
					G(b) {
						let s = this.root;
						const l = this.h.get(b);
						if (l)
							return {
								node: l.node,
								nodeStartOffset: l.nodeStartOffset,
								remainder: b - l.nodeStartOffset,
							};
						let y = 0;
						for (; s !== C.$OU; )
							if (s.size_left > b) s = s.left;
							else if (s.size_left + s.piece.length >= b) {
								y += s.size_left;
								const $ = {
									node: s,
									remainder: b - s.size_left,
									nodeStartOffset: y,
								};
								return this.h.set($), $;
							} else
								(b -= s.size_left + s.piece.length),
									(y += s.size_left + s.piece.length),
									(s = s.right);
						return null;
					}
					H(b, s) {
						let l = this.root,
							y = 0;
						for (; l !== C.$OU; )
							if (l.left !== C.$OU && l.lf_left >= b - 1) l = l.left;
							else if (l.lf_left + l.piece.lineFeedCnt > b - 1) {
								const $ = this.B(l, b - l.lf_left - 2),
									v = this.B(l, b - l.lf_left - 1);
								return (
									(y += l.size_left),
									{
										node: l,
										remainder: Math.min($ + s - 1, v),
										nodeStartOffset: y,
									}
								);
							} else if (l.lf_left + l.piece.lineFeedCnt === b - 1) {
								const $ = this.B(l, b - l.lf_left - 2);
								if ($ + s - 1 <= l.piece.length)
									return { node: l, remainder: $ + s - 1, nodeStartOffset: y };
								s -= l.piece.length - $;
								break;
							} else
								(b -= l.lf_left + l.piece.lineFeedCnt),
									(y += l.size_left + l.piece.length),
									(l = l.right);
						for (l = l.next(); l !== C.$OU; ) {
							if (l.piece.lineFeedCnt > 0) {
								const $ = this.B(l, 0),
									v = this.J(l);
								return {
									node: l,
									remainder: Math.min(s - 1, $),
									nodeStartOffset: v,
								};
							} else if (l.piece.length >= s - 1) {
								const $ = this.J(l);
								return { node: l, remainder: s - 1, nodeStartOffset: $ };
							} else s -= l.piece.length;
							l = l.next();
						}
						return null;
					}
					I(b, s) {
						if (b.piece.lineFeedCnt < 1) return -1;
						const l = this.a[b.piece.bufferIndex],
							y = this.u(b.piece.bufferIndex, b.piece.start) + s;
						return l.buffer.charCodeAt(y);
					}
					J(b) {
						if (!b) return 0;
						let s = b.size_left;
						for (; b !== this.root; )
							b.parent.right === b &&
								(s += b.parent.size_left + b.parent.piece.length),
								(b = b.parent);
						return s;
					}
					K() {
						return !(
							this.f &&
							this.d ===
								`
`
						);
					}
					L(b) {
						if (typeof b == "string") return b.charCodeAt(0) === 10;
						if (b === C.$OU || b.piece.lineFeedCnt === 0) return !1;
						const s = b.piece,
							l = this.a[s.bufferIndex].lineStarts,
							y = s.start.line,
							$ = l[y] + s.start.column;
						return y === l.length - 1 || l[y + 1] > $ + 1
							? !1
							: this.a[s.bufferIndex].buffer.charCodeAt($) === 10;
					}
					M(b) {
						return typeof b == "string"
							? b.charCodeAt(b.length - 1) === 13
							: b === C.$OU || b.piece.lineFeedCnt === 0
								? !1
								: this.I(b, b.piece.length - 1) === 13;
					}
					N(b) {
						if (this.K() && this.L(b)) {
							const s = b.prev();
							this.M(s) && this.P(s, b);
						}
					}
					O(b) {
						if (this.K() && this.M(b)) {
							const s = b.next();
							this.L(s) && this.P(b, s);
						}
					}
					P(b, s) {
						const l = [],
							y = this.a[b.piece.bufferIndex].lineStarts;
						let $;
						b.piece.end.column === 0
							? ($ = {
									line: b.piece.end.line - 1,
									column: y[b.piece.end.line] - y[b.piece.end.line - 1] - 1,
								})
							: ($ = {
									line: b.piece.end.line,
									column: b.piece.end.column - 1,
								});
						const v = b.piece.length - 1,
							S = b.piece.lineFeedCnt - 1;
						(b.piece = new c(b.piece.bufferIndex, b.piece.start, $, S, v)),
							(0, C.$VU)(this, b, -1, -1),
							b.piece.length === 0 && l.push(b);
						const I = { line: s.piece.start.line + 1, column: 0 },
							T = s.piece.length - 1,
							P = this.t(s.piece.bufferIndex, I, s.piece.end);
						(s.piece = new c(s.piece.bufferIndex, I, s.piece.end, P, T)),
							(0, C.$VU)(this, s, -1, -1),
							s.piece.length === 0 && l.push(s);
						const k = this.w(`\r
`);
						this.S(b, k[0]);
						for (let L = 0; L < l.length; L++) (0, C.$TU)(this, l[L]);
					}
					Q(b, s) {
						if (this.K() && this.M(b)) {
							const l = s.next();
							if (this.L(l)) {
								if (
									((b += `
`),
									l.piece.length === 1)
								)
									(0, C.$TU)(this, l);
								else {
									const y = l.piece,
										$ = { line: y.start.line + 1, column: 0 },
										v = y.length - 1,
										S = this.t(y.bufferIndex, $, y.end);
									(l.piece = new c(y.bufferIndex, $, y.end, S, v)),
										(0, C.$VU)(this, l, -1, -1);
								}
								return !0;
							}
						}
						return !1;
					}
					iterate(b, s) {
						if (b === C.$OU) return s(C.$OU);
						const l = this.iterate(b.left, s);
						return l && s(b) && this.iterate(b.right, s);
					}
					R(b) {
						if (b === C.$OU) return "";
						const s = this.a[b.piece.bufferIndex],
							l = b.piece,
							y = this.u(l.bufferIndex, l.start),
							$ = this.u(l.bufferIndex, l.end);
						return s.buffer.substring(y, $);
					}
					getPieceContent(b) {
						const s = this.a[b.bufferIndex],
							l = this.u(b.bufferIndex, b.start),
							y = this.u(b.bufferIndex, b.end);
						return s.buffer.substring(l, y);
					}
					S(b, s) {
						const l = new C.$NU(s, C.NodeColor.Red);
						if (
							((l.left = C.$OU),
							(l.right = C.$OU),
							(l.parent = C.$OU),
							(l.size_left = 0),
							(l.lf_left = 0),
							this.root === C.$OU)
						)
							(this.root = l), (l.color = C.NodeColor.Black);
						else if (b.right === C.$OU) (b.right = l), (l.parent = b);
						else {
							const $ = (0, C.$PU)(b.right);
							($.left = l), (l.parent = $);
						}
						return (0, C.$UU)(this, l), l;
					}
					T(b, s) {
						const l = new C.$NU(s, C.NodeColor.Red);
						if (
							((l.left = C.$OU),
							(l.right = C.$OU),
							(l.parent = C.$OU),
							(l.size_left = 0),
							(l.lf_left = 0),
							this.root === C.$OU)
						)
							(this.root = l), (l.color = C.NodeColor.Black);
						else if (b.left === C.$OU) (b.left = l), (l.parent = b);
						else {
							const y = (0, C.$QU)(b.left);
							(y.right = l), (l.parent = y);
						}
						return (0, C.$UU)(this, l), l;
					}
					U(b) {
						let s = "";
						return this.iterate(b, (l) => ((s += this.R(l)), !0)), s;
					}
				}
				e.$8U = o;
			},
		)
