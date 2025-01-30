import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/strings.js';
import '../../core/range.js';
import '../../model.js';
import './pieceTreeBase.js';
import '../../core/eolCounter.js';
import '../../core/textChange.js';
import '../../../../base/common/lifecycle.js';
define(
			de[1194],
			he([1, 0, 6, 37, 17, 64, 1628, 531, 1589, 3]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*strings*/,
 w /*range*/,
 E /*model*/,
 C /*pieceTreeBase*/,
 d /*eolCounter*/,
 m /*textChange*/,
 r /*lifecycle*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9U = void 0),
					(i = mt(i));
				class u extends r.$1c {
					constructor(h, c, n, g, p, o, f) {
						super(),
							(this.m = this.D(new t.$re())),
							(this.onDidChangeContent = this.m.event),
							(this.f = c),
							(this.j = !o),
							(this.g = g),
							(this.h = p),
							(this.c = new C.$8U(h, n, f));
					}
					equals(h) {
						return !(h instanceof u) ||
							this.f !== h.f ||
							this.getEOL() !== h.getEOL()
							? !1
							: this.c.equal(h.c);
					}
					mightContainRTL() {
						return this.g;
					}
					mightContainUnusualLineTerminators() {
						return this.h;
					}
					resetMightContainUnusualLineTerminators() {
						this.h = !1;
					}
					mightContainNonBasicASCII() {
						return this.j;
					}
					getBOM() {
						return this.f;
					}
					getEOL() {
						return this.c.getEOL();
					}
					createSnapshot(h) {
						return this.c.createSnapshot(h ? this.f : "");
					}
					getOffsetAt(h, c) {
						return this.c.getOffsetAt(h, c);
					}
					getPositionAt(h) {
						return this.c.getPositionAt(h);
					}
					getRangeAt(h, c) {
						const n = h + c,
							g = this.getPositionAt(h),
							p = this.getPositionAt(n);
						return new w.$iL(g.lineNumber, g.column, p.lineNumber, p.column);
					}
					getValueInRange(h, c = E.EndOfLinePreference.TextDefined) {
						if (h.isEmpty()) return "";
						const n = this.n(c);
						return this.c.getValueInRange(h, n);
					}
					getValueLengthInRange(h, c = E.EndOfLinePreference.TextDefined) {
						if (h.isEmpty()) return 0;
						if (h.startLineNumber === h.endLineNumber)
							return h.endColumn - h.startColumn;
						const n = this.getOffsetAt(h.startLineNumber, h.startColumn),
							g = this.getOffsetAt(h.endLineNumber, h.endColumn);
						let p = 0;
						const o = this.n(c),
							f = this.getEOL();
						if (o.length !== f.length) {
							const b = o.length - f.length,
								s = h.endLineNumber - h.startLineNumber;
							p = b * s;
						}
						return g - n + p;
					}
					getCharacterCountInRange(h, c = E.EndOfLinePreference.TextDefined) {
						if (this.j) {
							let n = 0;
							const g = h.startLineNumber,
								p = h.endLineNumber;
							for (let o = g; o <= p; o++) {
								const f = this.getLineContent(o),
									b = o === g ? h.startColumn - 1 : 0,
									s = o === p ? h.endColumn - 1 : f.length;
								for (let l = b; l < s; l++)
									i.$Qf(f.charCodeAt(l))
										? ((n = n + 1), (l = l + 1))
										: (n = n + 1);
							}
							return (n += this.n(c).length * (p - g)), n;
						}
						return this.getValueLengthInRange(h, c);
					}
					getNearestChunk(h) {
						return this.c.getNearestChunk(h);
					}
					getLength() {
						return this.c.getLength();
					}
					getLineCount() {
						return this.c.getLineCount();
					}
					getLinesContent() {
						return this.c.getLinesContent();
					}
					getLineContent(h) {
						return this.c.getLineContent(h);
					}
					getLineCharCode(h, c) {
						return this.c.getLineCharCode(h, c);
					}
					getCharCode(h) {
						return this.c.getCharCode(h);
					}
					getLineLength(h) {
						return this.c.getLineLength(h);
					}
					getLineMinColumn(h) {
						return 1;
					}
					getLineMaxColumn(h) {
						return this.getLineLength(h) + 1;
					}
					getLineFirstNonWhitespaceColumn(h) {
						const c = i.$Bf(this.getLineContent(h));
						return c === -1 ? 0 : c + 1;
					}
					getLineLastNonWhitespaceColumn(h) {
						const c = i.$Df(this.getLineContent(h));
						return c === -1 ? 0 : c + 2;
					}
					n(h) {
						switch (h) {
							case E.EndOfLinePreference.LF:
								return `
`;
							case E.EndOfLinePreference.CRLF:
								return `\r
`;
							case E.EndOfLinePreference.TextDefined:
								return this.getEOL();
							default:
								throw new Error("Unknown EOL preference");
						}
					}
					setEOL(h) {
						this.c.setEOL(h);
					}
					applyEdits(h, c, n) {
						let g = this.g,
							p = this.h,
							o = this.j,
							f = !0,
							b = [];
						for (let I = 0; I < h.length; I++) {
							const T = h[I];
							f && T._isTracked && (f = !1);
							const P = T.range;
							if (T.text) {
								let N = !0;
								o || ((N = !i.$2f(T.text)), (o = N)),
									!g && N && (g = i.$1f(T.text)),
									!p && N && (p = i.$4f(T.text));
							}
							let k = "",
								L = 0,
								D = 0,
								M = 0;
							if (T.text) {
								let N;
								[L, D, M, N] = (0, d.$6L)(T.text);
								const A = this.getEOL(),
									R =
										A ===
										`\r
`
											? d.StringEOL.CRLF
											: d.StringEOL.LF;
								N === d.StringEOL.Unknown || N === R
									? (k = T.text)
									: (k = T.text.replace(/\r\n|\r|\n/g, A));
							}
							b[I] = {
								sortIndex: I,
								identifier: T.identifier || null,
								range: P,
								rangeOffset: this.getOffsetAt(P.startLineNumber, P.startColumn),
								rangeLength: this.getValueLengthInRange(P),
								text: k,
								eolCount: L,
								firstLineLength: D,
								lastLineLength: M,
								forceMoveMarkers: !!T.forceMoveMarkers,
								isAutoWhitespaceEdit: T.isAutoWhitespaceEdit || !1,
							};
						}
						b.sort(u.t);
						let s = !1;
						for (let I = 0, T = b.length - 1; I < T; I++) {
							const P = b[I].range.getEndPosition(),
								k = b[I + 1].range.getStartPosition();
							if (k.isBeforeOrEqual(P)) {
								if (k.isBefore(P))
									throw new Error("Overlapping ranges are not allowed!");
								s = !0;
							}
						}
						f && (b = this.q(b));
						const l = n || c ? u._getInverseEditRanges(b) : [],
							y = [];
						if (c)
							for (let I = 0; I < b.length; I++) {
								const T = b[I],
									P = l[I];
								if (T.isAutoWhitespaceEdit && T.range.isEmpty())
									for (let k = P.startLineNumber; k <= P.endLineNumber; k++) {
										let L = "";
										(k === P.startLineNumber &&
											((L = this.getLineContent(T.range.startLineNumber)),
											i.$Bf(L) !== -1)) ||
											y.push({ lineNumber: k, oldContent: L });
									}
							}
						let $ = null;
						if (n) {
							let I = 0;
							$ = [];
							for (let T = 0; T < b.length; T++) {
								const P = b[T],
									k = l[T],
									L = this.getValueInRange(P.range),
									D = P.rangeOffset + I;
								(I += P.text.length - L.length),
									($[T] = {
										sortIndex: P.sortIndex,
										identifier: P.identifier,
										range: k,
										text: L,
										textChange: new m.$LL(P.rangeOffset, L, D, P.text),
									});
							}
							s || $.sort((T, P) => T.sortIndex - P.sortIndex);
						}
						(this.g = g), (this.h = p), (this.j = o);
						const v = this.s(b);
						let S = null;
						if (c && y.length > 0) {
							y.sort((I, T) => T.lineNumber - I.lineNumber), (S = []);
							for (let I = 0, T = y.length; I < T; I++) {
								const P = y[I].lineNumber;
								if (I > 0 && y[I - 1].lineNumber === P) continue;
								const k = y[I].oldContent,
									L = this.getLineContent(P);
								L.length === 0 || L === k || i.$Bf(L) !== -1 || S.push(P);
							}
						}
						return this.m.fire(), new E.$SN($, v, S);
					}
					q(h) {
						return h.length < 1e3 ? h : [this._toSingleEditOperation(h)];
					}
					_toSingleEditOperation(h) {
						let c = !1;
						const n = h[0].range,
							g = h[h.length - 1].range,
							p = new w.$iL(
								n.startLineNumber,
								n.startColumn,
								g.endLineNumber,
								g.endColumn,
							);
						let o = n.startLineNumber,
							f = n.startColumn;
						const b = [];
						for (let v = 0, S = h.length; v < S; v++) {
							const I = h[v],
								T = I.range;
							(c = c || I.forceMoveMarkers),
								b.push(
									this.getValueInRange(
										new w.$iL(o, f, T.startLineNumber, T.startColumn),
									),
								),
								I.text.length > 0 && b.push(I.text),
								(o = T.endLineNumber),
								(f = T.endColumn);
						}
						const s = b.join(""),
							[l, y, $] = (0, d.$6L)(s);
						return {
							sortIndex: 0,
							identifier: h[0].identifier,
							range: p,
							rangeOffset: this.getOffsetAt(p.startLineNumber, p.startColumn),
							rangeLength: this.getValueLengthInRange(
								p,
								E.EndOfLinePreference.TextDefined,
							),
							text: s,
							eolCount: l,
							firstLineLength: y,
							lastLineLength: $,
							forceMoveMarkers: c,
							isAutoWhitespaceEdit: !1,
						};
					}
					s(h) {
						h.sort(u.u);
						const c = [];
						for (let n = 0; n < h.length; n++) {
							const g = h[n],
								p = g.range.startLineNumber,
								o = g.range.startColumn,
								f = g.range.endLineNumber,
								b = g.range.endColumn;
							if (p === f && o === b && g.text.length === 0) continue;
							g.text
								? (this.c.delete(g.rangeOffset, g.rangeLength),
									this.c.insert(g.rangeOffset, g.text, !0))
								: this.c.delete(g.rangeOffset, g.rangeLength);
							const s = new w.$iL(p, o, f, b);
							c.push({
								range: s,
								rangeLength: g.rangeLength,
								text: g.text,
								rangeOffset: g.rangeOffset,
								forceMoveMarkers: g.forceMoveMarkers,
							});
						}
						return c;
					}
					findMatchesLineByLine(h, c, n, g) {
						return this.c.findMatchesLineByLine(h, c, n, g);
					}
					getPieceTree() {
						return this.c;
					}
					static _getInverseEditRange(h, c) {
						const n = h.startLineNumber,
							g = h.startColumn,
							[p, o, f] = (0, d.$6L)(c);
						let b;
						if (c.length > 0) {
							const s = p + 1;
							s === 1
								? (b = new w.$iL(n, g, n, g + o))
								: (b = new w.$iL(n, g, n + s - 1, f + 1));
						} else b = new w.$iL(n, g, n, g);
						return b;
					}
					static _getInverseEditRanges(h) {
						const c = [];
						let n = 0,
							g = 0,
							p = null;
						for (let o = 0, f = h.length; o < f; o++) {
							const b = h[o];
							let s, l;
							p
								? p.range.endLineNumber === b.range.startLineNumber
									? ((s = n),
										(l = g + (b.range.startColumn - p.range.endColumn)))
									: ((s =
											n + (b.range.startLineNumber - p.range.endLineNumber)),
										(l = b.range.startColumn))
								: ((s = b.range.startLineNumber), (l = b.range.startColumn));
							let y;
							if (b.text.length > 0) {
								const $ = b.eolCount + 1;
								$ === 1
									? (y = new w.$iL(s, l, s, l + b.firstLineLength))
									: (y = new w.$iL(s, l, s + $ - 1, b.lastLineLength + 1));
							} else y = new w.$iL(s, l, s, l);
							(n = y.endLineNumber), (g = y.endColumn), c.push(y), (p = b);
						}
						return c;
					}
					static t(h, c) {
						const n = w.$iL.compareRangesUsingEnds(h.range, c.range);
						return n === 0 ? h.sortIndex - c.sortIndex : n;
					}
					static u(h, c) {
						const n = w.$iL.compareRangesUsingEnds(h.range, c.range);
						return n === 0 ? c.sortIndex - h.sortIndex : -n;
					}
				}
				e.$9U = u;
			},
		),
		