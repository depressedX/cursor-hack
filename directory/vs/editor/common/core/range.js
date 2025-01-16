define(de[17], he([1, 0, 48]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$iL = void 0);
			class i {
				constructor(E, C, d, m) {
					let r, u, a, h;
					E == null || typeof E == "number" || Number.isNaN(E)
						? ((r = E), (u = C), (a = d), (h = m))
						: "startLineNumber" in E && "startColumn" in E
							? ((r = E.startLineNumber),
								(u = E.startColumn),
								(a = E.endLineNumber),
								(h = E.endColumn))
							: ((r = E.startLineNumber),
								(u = 1),
								(a = E.endLineNumberExclusive),
								(h = 1)),
						r > a || (r === a && u > h)
							? ((this.startLineNumber = a),
								(this.startColumn = h),
								(this.endLineNumber = r),
								(this.endColumn = u))
							: ((this.startLineNumber = r),
								(this.startColumn = u),
								(this.endLineNumber = a),
								(this.endColumn = h));
				}
				asIRange() {
					return {
						startLineNumber: this.startLineNumber,
						startColumn: this.startColumn,
						endLineNumber: this.endLineNumber,
						endColumn: this.endColumn,
					};
				}
				isEmpty() {
					return i.isEmpty(this);
				}
				static isEmpty(E) {
					return (
						E.startLineNumber === E.endLineNumber &&
						E.startColumn === E.endColumn
					);
				}
				containsPosition(E) {
					return i.containsPosition(this, E);
				}
				static containsPosition(E, C) {
					return !(
						C.lineNumber < E.startLineNumber ||
						C.lineNumber > E.endLineNumber ||
						(C.lineNumber === E.startLineNumber && C.column < E.startColumn) ||
						(C.lineNumber === E.endLineNumber && C.column > E.endColumn)
					);
				}
				static strictContainsPosition(E, C) {
					return !(
						C.lineNumber < E.startLineNumber ||
						C.lineNumber > E.endLineNumber ||
						(C.lineNumber === E.startLineNumber && C.column <= E.startColumn) ||
						(C.lineNumber === E.endLineNumber && C.column >= E.endColumn)
					);
				}
				containsRange(E) {
					return i.containsRange(this, E);
				}
				static containsRange(E, C) {
					return !(
						C.startLineNumber < E.startLineNumber ||
						C.endLineNumber < E.startLineNumber ||
						C.startLineNumber > E.endLineNumber ||
						C.endLineNumber > E.endLineNumber ||
						(C.startLineNumber === E.startLineNumber &&
							C.startColumn < E.startColumn) ||
						(C.endLineNumber === E.endLineNumber && C.endColumn > E.endColumn)
					);
				}
				strictContainsRange(E) {
					return i.strictContainsRange(this, E);
				}
				static strictContainsRange(E, C) {
					return !(
						C.startLineNumber < E.startLineNumber ||
						C.endLineNumber < E.startLineNumber ||
						C.startLineNumber > E.endLineNumber ||
						C.endLineNumber > E.endLineNumber ||
						(C.startLineNumber === E.startLineNumber &&
							C.startColumn <= E.startColumn) ||
						(C.endLineNumber === E.endLineNumber && C.endColumn >= E.endColumn)
					);
				}
				plusRange(E) {
					return i.plusRange(this, E);
				}
				static getRangeAbove(E, C) {
					const d = Math.max(E.startLineNumber - C, 1),
						m = E.startLineNumber;
					return new i(d, E.startColumn, m, E.startColumn);
				}
				static getRangeOnBelow(E, C, d) {
					const m = E.endLineNumber,
						r = Math.min(E.endLineNumber + C, d);
					return new i(m, E.endColumn, r, E.endColumn);
				}
				static getExtendedRange(E, C, d) {
					const m = Math.max(E.startLineNumber - C, 0),
						r = Math.min(E.endLineNumber + C, d);
					return new i(m, E.startColumn, r, E.endColumn);
				}
				static plusRange(E, C) {
					let d, m, r, u;
					return (
						C.startLineNumber < E.startLineNumber
							? ((d = C.startLineNumber), (m = C.startColumn))
							: C.startLineNumber === E.startLineNumber
								? ((d = C.startLineNumber),
									(m = Math.min(C.startColumn, E.startColumn)))
								: ((d = E.startLineNumber), (m = E.startColumn)),
						C.endLineNumber > E.endLineNumber
							? ((r = C.endLineNumber), (u = C.endColumn))
							: C.endLineNumber === E.endLineNumber
								? ((r = C.endLineNumber),
									(u = Math.max(C.endColumn, E.endColumn)))
								: ((r = E.endLineNumber), (u = E.endColumn)),
						new i(d, m, r, u)
					);
				}
				intersectRanges(E) {
					return i.intersectRanges(this, E);
				}
				static intersectRanges(E, C) {
					let d = E.startLineNumber,
						m = E.startColumn,
						r = E.endLineNumber,
						u = E.endColumn;
					const a = C.startLineNumber,
						h = C.startColumn,
						c = C.endLineNumber,
						n = C.endColumn;
					return (
						d < a ? ((d = a), (m = h)) : d === a && (m = Math.max(m, h)),
						r > c ? ((r = c), (u = n)) : r === c && (u = Math.min(u, n)),
						d > r || (d === r && m > u) ? null : new i(d, m, r, u)
					);
				}
				static inverseEditRange(E, C) {
					return {
						startLineNumber: E.startLineNumber,
						startColumn: E.startColumn,
						endLineNumber:
							E.startLineNumber +
							C.split(`
`).length -
							1,
						endColumn:
							C.lastIndexOf(`
`) === -1
								? E.startColumn + C.length
								: C.length -
									C.lastIndexOf(`
`),
					};
				}
				whereIs(E) {
					return E.endLineNumber < this.startLineNumber ||
						(E.endLineNumber === this.startLineNumber &&
							E.endColumn <= this.startColumn)
						? "before"
						: E.startLineNumber > this.endLineNumber ||
								(E.startLineNumber === this.endLineNumber &&
									E.startColumn >= this.endColumn)
							? "after"
							: "overlapping";
				}
				static rangeAfterEdit(E, C) {
					const d = i.lift(E).whereIs(C.range);
					switch (d) {
						case "overlapping":
							throw new Error(
								"Range is overlapping. The range after edit is ambiguous.",
							);
						case "after":
							return E;
						case "before": {
							const m =
								C.text.split(`
`).length -
								1 -
								(C.range.endLineNumber - C.range.startLineNumber);
							if (C.range.endLineNumber < E.startLineNumber)
								return {
									startLineNumber: E.startLineNumber + m,
									startColumn: E.startColumn,
									endLineNumber: E.endLineNumber + m,
									endColumn: E.endColumn,
								};
							{
								const r =
										C.text.lastIndexOf(`
`) === -1
											? C.text.length
											: C.text.length -
												C.text.lastIndexOf(`
`) -
												1,
									u =
										C.range.startLineNumber === C.range.endLineNumber
											? C.range.endColumn - C.range.startColumn
											: C.range.endColumn - 1,
									a = r - u;
								return {
									startLineNumber: E.startLineNumber + m,
									startColumn: E.startColumn + a,
									endLineNumber: E.endLineNumber + m,
									endColumn:
										E.startLineNumber === E.endLineNumber
											? E.endColumn + a
											: E.endColumn,
								};
							}
						}
						default: {
							const m = d;
							return E;
						}
					}
				}
				equalsRange(E) {
					return i.equalsRange(this, E);
				}
				static equalsRange(E, C) {
					return !E && !C
						? !0
						: !!E &&
								!!C &&
								E.startLineNumber === C.startLineNumber &&
								E.startColumn === C.startColumn &&
								E.endLineNumber === C.endLineNumber &&
								E.endColumn === C.endColumn;
				}
				getEndPosition() {
					return i.getEndPosition(this);
				}
				static getEndPosition(E) {
					return new t.$hL(E.endLineNumber, E.endColumn);
				}
				getStartPosition() {
					return i.getStartPosition(this);
				}
				static getStartPosition(E) {
					return new t.$hL(E.startLineNumber, E.startColumn);
				}
				toString() {
					return (
						"[" +
						this.startLineNumber +
						"," +
						this.startColumn +
						" -> " +
						this.endLineNumber +
						"," +
						this.endColumn +
						"]"
					);
				}
				setEndPosition(E, C) {
					return new i(this.startLineNumber, this.startColumn, E, C);
				}
				setStartPosition(E, C) {
					return new i(E, C, this.endLineNumber, this.endColumn);
				}
				collapseToStart() {
					return i.collapseToStart(this);
				}
				static collapseToStart(E) {
					return new i(
						E.startLineNumber,
						E.startColumn,
						E.startLineNumber,
						E.startColumn,
					);
				}
				collapseToEnd() {
					return i.collapseToEnd(this);
				}
				static collapseToEnd(E) {
					return new i(
						E.endLineNumber,
						E.endColumn,
						E.endLineNumber,
						E.endColumn,
					);
				}
				delta(E) {
					return new i(
						this.startLineNumber + E,
						this.startColumn,
						this.endLineNumber + E,
						this.endColumn,
					);
				}
				static fromPositions(E, C = E) {
					return new i(E.lineNumber, E.column, C.lineNumber, C.column);
				}
				static lift(E) {
					return E
						? new i(
								E.startLineNumber,
								E.startColumn,
								E.endLineNumber,
								E.endColumn,
							)
						: null;
				}
				static isIRange(E) {
					return (
						E &&
						typeof E.startLineNumber == "number" &&
						typeof E.startColumn == "number" &&
						typeof E.endLineNumber == "number" &&
						typeof E.endColumn == "number"
					);
				}
				static areIntersectingOrTouching(E, C) {
					return !(
						E.endLineNumber < C.startLineNumber ||
						(E.endLineNumber === C.startLineNumber &&
							E.endColumn < C.startColumn) ||
						C.endLineNumber < E.startLineNumber ||
						(C.endLineNumber === E.startLineNumber &&
							C.endColumn < E.startColumn)
					);
				}
				static areIntersecting(E, C) {
					return !(
						E.endLineNumber < C.startLineNumber ||
						(E.endLineNumber === C.startLineNumber &&
							E.endColumn <= C.startColumn) ||
						C.endLineNumber < E.startLineNumber ||
						(C.endLineNumber === E.startLineNumber &&
							C.endColumn <= E.startColumn)
					);
				}
				static compareRangesUsingStarts(E, C) {
					if (E && C) {
						const r = E.startLineNumber | 0,
							u = C.startLineNumber | 0;
						if (r === u) {
							const a = E.startColumn | 0,
								h = C.startColumn | 0;
							if (a === h) {
								const c = E.endLineNumber | 0,
									n = C.endLineNumber | 0;
								if (c === n) {
									const g = E.endColumn | 0,
										p = C.endColumn | 0;
									return g - p;
								}
								return c - n;
							}
							return a - h;
						}
						return r - u;
					}
					return (E ? 1 : 0) - (C ? 1 : 0);
				}
				static compareRangesUsingEnds(E, C) {
					return E.endLineNumber === C.endLineNumber
						? E.endColumn === C.endColumn
							? E.startLineNumber === C.startLineNumber
								? E.startColumn - C.startColumn
								: E.startLineNumber - C.startLineNumber
							: E.endColumn - C.endColumn
						: E.endLineNumber - C.endLineNumber;
				}
				static spansMultipleLines(E) {
					return E.endLineNumber > E.startLineNumber;
				}
				toJSON() {
					return this;
				}
			}
			e.$iL = i;
		}),
		