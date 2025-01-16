define(
			de[490],
			he([1, 0, 229, 29, 48, 2549, 17, 458]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$AL = e.$zL = e.$yL = e.$xL = e.$wL = e.$vL = void 0);
				class m {
					static single(p, o) {
						return new m([new r(p, o)]);
					}
					constructor(p) {
						(this.edits = p),
							(0, t.$nd)(() =>
								(0, t.$od)(p, (o, f) =>
									o.range
										.getEndPosition()
										.isBeforeOrEqual(f.range.getStartPosition()),
								),
							);
					}
					normalize() {
						const p = [];
						for (const o of this.edits)
							if (
								p.length > 0 &&
								p[p.length - 1].range
									.getEndPosition()
									.equals(o.range.getStartPosition())
							) {
								const f = p[p.length - 1];
								p[p.length - 1] = new r(
									f.range.plusRange(o.range),
									f.text + o.text,
								);
							} else o.isEmpty || p.push(o);
						return new m(p);
					}
					mapPosition(p) {
						let o = 0,
							f = 0,
							b = 0;
						for (const s of this.edits) {
							const l = s.range.getStartPosition(),
								y = s.range.getEndPosition();
							if (p.isBeforeOrEqual(l)) break;
							const $ = d.$tL.ofText(s.text);
							if (p.isBefore(y)) {
								const v = new w.$hL(
										l.lineNumber + o,
										l.column + (l.lineNumber + o === f ? b : 0),
									),
									S = $.addToPosition(v);
								return u(v, S);
							}
							(o +=
								$.lineCount -
								(s.range.endLineNumber - s.range.startLineNumber)),
								$.lineCount === 0
									? y.lineNumber !== l.lineNumber
										? (b += $.columnCount - (y.column - 1))
										: (b += $.columnCount - (y.column - l.column))
									: (b = $.columnCount),
								(f = y.lineNumber + o);
						}
						return new w.$hL(
							p.lineNumber + o,
							p.column + (p.lineNumber + o === f ? b : 0),
						);
					}
					mapRange(p) {
						function o(l) {
							return l instanceof w.$hL ? l : l.getStartPosition();
						}
						function f(l) {
							return l instanceof w.$hL ? l : l.getEndPosition();
						}
						const b = o(this.mapPosition(p.getStartPosition())),
							s = f(this.mapPosition(p.getEndPosition()));
						return u(b, s);
					}
					inverseMapPosition(p, o) {
						return this.inverse(o).mapPosition(p);
					}
					inverseMapRange(p, o) {
						return this.inverse(o).mapRange(p);
					}
					apply(p) {
						let o = "",
							f = new w.$hL(1, 1);
						for (const s of this.edits) {
							const l = s.range,
								y = l.getStartPosition(),
								$ = l.getEndPosition(),
								v = u(f, y);
							v.isEmpty() || (o += p.getValueOfRange(v)),
								(o += s.text),
								(f = $);
						}
						const b = u(f, p.endPositionExclusive);
						return b.isEmpty() || (o += p.getValueOfRange(b)), o;
					}
					applyToString(p) {
						const o = new n(p);
						return this.apply(o);
					}
					inverse(p) {
						const o = this.getNewRanges();
						return new m(
							this.edits.map((f, b) => new r(o[b], p.getValueOfRange(f.range))),
						);
					}
					getNewRanges() {
						const p = [];
						let o = 0,
							f = 0,
							b = 0;
						for (const s of this.edits) {
							const l = d.$tL.ofText(s.text),
								y = w.$hL.lift({
									lineNumber: s.range.startLineNumber + f,
									column:
										s.range.startColumn +
										(s.range.startLineNumber === o ? b : 0),
								}),
								$ = l.createRange(y);
							p.push($),
								(f = $.endLineNumber - s.range.endLineNumber),
								(b = $.endColumn - s.range.endColumn),
								(o = s.range.endLineNumber);
						}
						return p;
					}
				}
				e.$vL = m;
				class r {
					constructor(p, o) {
						(this.range = p), (this.text = o);
					}
					get isEmpty() {
						return this.range.isEmpty() && this.text.length === 0;
					}
					static equals(p, o) {
						return p.range.equalsRange(o.range) && p.text === o.text;
					}
					toSingleEditOperation() {
						return { range: this.range, text: this.text };
					}
				}
				e.$wL = r;
				function u(g, p) {
					if (
						g.lineNumber === p.lineNumber &&
						g.column === Number.MAX_SAFE_INTEGER
					)
						return C.$iL.fromPositions(p, p);
					if (!g.isBeforeOrEqual(p))
						throw new i.$gb("start must be before end");
					return new C.$iL(g.lineNumber, g.column, p.lineNumber, p.column);
				}
				class a {
					get endPositionExclusive() {
						return this.length.addToPosition(new w.$hL(1, 1));
					}
					getValue() {
						return this.getValueOfRange(this.length.toRange());
					}
				}
				e.$xL = a;
				class h extends a {
					constructor(p, o) {
						(0, t.$ld)(o >= 1), super(), (this.c = p), (this.d = o);
					}
					getValueOfRange(p) {
						if (p.startLineNumber === p.endLineNumber)
							return this.c(p.startLineNumber).substring(
								p.startColumn - 1,
								p.endColumn - 1,
							);
						let o = this.c(p.startLineNumber).substring(p.startColumn - 1);
						for (let f = p.startLineNumber + 1; f < p.endLineNumber; f++)
							o +=
								`
` + this.c(f);
						return (
							(o +=
								`
` + this.c(p.endLineNumber).substring(0, p.endColumn - 1)),
							o
						);
					}
					get length() {
						const p = this.c(this.d);
						return new d.$tL(this.d - 1, p.length);
					}
				}
				e.$yL = h;
				class c extends h {
					constructor(p) {
						super((o) => p[o - 1], p.length);
					}
				}
				e.$zL = c;
				class n extends a {
					constructor(p) {
						super(), (this.value = p), (this.c = new E.$uL(this.value));
					}
					getValueOfRange(p) {
						return this.c.getOffsetRange(p).substring(this.value);
					}
					get length() {
						return this.c.textLength;
					}
				}
				e.$AL = n;
			},
		),
		