define(de[1131], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$kqb = e.$jqb = e.OverlapBehaviour = void 0);
			var t;
			(function (E) {
				(E[(E.None = 0)] = "None"),
					(E[(E.PartialTop = 1)] = "PartialTop"),
					(E[(E.PartialBottom = 2)] = "PartialBottom"),
					(E[(E.ContainedWithin = 3)] = "ContainedWithin"),
					(E[(E.Containing = 4)] = "Containing");
			})(t || (e.OverlapBehaviour = t = {}));
			class i {
				constructor(C, d) {
					(this.lineNumber = C), (this.column = d);
				}
				isAfterOrEqual(C) {
					return (
						this.lineNumber > C.lineNumber ||
						(this.lineNumber === C.lineNumber && this.column >= C.column)
					);
				}
				isAfter(C) {
					return (
						this.lineNumber > C.lineNumber ||
						(this.lineNumber === C.lineNumber && this.column > C.column)
					);
				}
				isBeforeOrEqual(C) {
					return (
						this.lineNumber < C.lineNumber ||
						(this.lineNumber === C.lineNumber && this.column <= C.column)
					);
				}
				isBefore(C) {
					return (
						this.lineNumber < C.lineNumber ||
						(this.lineNumber === C.lineNumber && this.column < C.column)
					);
				}
				isLineAfterOrEqual(C) {
					return this.lineNumber >= C;
				}
				isLineAfter(C) {
					return this.lineNumber > C;
				}
				isLineBeforeOrEqual(C) {
					return this.lineNumber <= C;
				}
				isLineBefore(C) {
					return this.lineNumber < C;
				}
				copy() {
					return new i(this.lineNumber, this.column);
				}
				min(C) {
					return this.isBefore(C) ? this : C;
				}
				max(C) {
					return this.isAfter(C) ? this : C;
				}
			}
			e.$jqb = i;
			class w {
				constructor(C, d, m, r) {
					if (
						typeof C == "number" &&
						typeof d == "number" &&
						typeof m == "number" &&
						typeof r == "number"
					)
						(this.start = new i(C, d)), (this.end = new i(m, r));
					else if (typeof C == "object" && typeof d == "object")
						(this.start = C), (this.end = d);
					else throw new Error("Invalid arguments for Range constructor");
				}
				numberOfLines() {
					return this.end.lineNumber - this.start.lineNumber + 1;
				}
				getOverlap(C) {
					if (this.start.isAfter(C.end) || this.end.isBefore(C.start))
						return t.None;
					if (
						this.start.isBeforeOrEqual(C.start) &&
						this.end.isBeforeOrEqual(C.end)
					)
						return t.PartialTop;
					if (
						this.start.isAfterOrEqual(C.start) &&
						this.end.isAfterOrEqual(C.end)
					)
						return t.PartialBottom;
					if (
						this.start.isAfterOrEqual(C.start) &&
						this.end.isBeforeOrEqual(C.end)
					)
						return t.ContainedWithin;
					if (
						this.start.isBeforeOrEqual(C.start) &&
						this.end.isAfterOrEqual(C.end)
					)
						return t.Containing;
					throw new Error("Invalid overlap behaviour");
				}
				getOverlapByLines(C) {
					if (
						this.start.isLineAfter(C.end.lineNumber) ||
						this.end.isLineBefore(C.start.lineNumber)
					)
						return t.None;
					if (
						this.start.isLineBeforeOrEqual(C.start.lineNumber) &&
						this.end.isLineBeforeOrEqual(C.end.lineNumber)
					)
						return t.PartialTop;
					if (
						this.start.isLineAfterOrEqual(C.start.lineNumber) &&
						this.end.isLineAfterOrEqual(C.end.lineNumber)
					)
						return t.PartialBottom;
					if (
						this.start.isLineAfterOrEqual(C.start.lineNumber) &&
						this.end.isLineBeforeOrEqual(C.end.lineNumber)
					)
						return t.ContainedWithin;
					if (
						this.start.isLineBeforeOrEqual(C.start.lineNumber) &&
						this.end.isLineAfterOrEqual(C.end.lineNumber)
					)
						return t.Containing;
					throw new Error("Invalid overlap behaviour");
				}
				static merge(C, d) {
					if (C == null && d == null)
						throw new Error("Cannot merge two null ranges");
					return C == null && d
						? d.copy()
						: d == null && C
							? C.copy()
							: new w(
									C.copy().start.min(d.copy().start),
									C.end.max(d.copy().end),
								);
				}
				static getRangeExpandedByLines(C, d, m) {
					return new w(
						new i(C.start.lineNumber - d, C.start.column),
						new i(C.end.lineNumber + m, C.end.column),
					);
				}
				static getRNGRangeOfSizeContainingRange(C, d, m = 100) {
					if (d < C.numberOfLines()) return new w(C.start, C.end);
					const r = d - C.numberOfLines();
					let u = Math.round(Math.random() * r),
						a = r - u;
					return (
						u < 0 && ((a += Math.abs(u)), (u = 0)),
						a > m && (a = m),
						(u = Math.max(0, u)),
						(a = Math.min(m, a)),
						{
							range: w.getRangeExpandedByLines(C, u, a),
							extraLinesOnTop: u,
							extraLinesOnBottom: a,
						}
					);
				}
				static getRNGRangesOfSizeContainingRanges(C, d, m, r, u) {
					const a = C.copy(),
						h = d.copy();
					if (m < a.numberOfLines() || m < h.numberOfLines())
						return {
							range1: new w(a.start, a.end),
							range2: new w(h.start, h.end),
						};
					const c = m - a.numberOfLines();
					let n = Math.round(Math.random() * c),
						g = c - n;
					n < 0 && ((g += Math.abs(n)), (n = 0)),
						(g > r || g > u) && (g = Math.min(r, u));
					const p = w.getRangeExpandedByLines(a, n, g),
						o = w.getRangeExpandedByLines(h, n, g);
					return { range1: p, range2: o };
				}
				asZeroIndexed() {
					return (
						(this.start.lineNumber -= 1),
						(this.start.column -= 1),
						(this.end.lineNumber -= 1),
						(this.end.column -= 1),
						this
					);
				}
				print() {
					console.log(
						`[${this.start.lineNumber}-${this.start.column}:${this.end.lineNumber}-${this.end.column}]`,
					);
				}
				toString() {
					return `[${this.start.lineNumber}-${this.start.column}:${this.end.lineNumber}-${this.end.column}]`;
				}
				static createFromIRange(C) {
					return new w(
						C.startLineNumber,
						C.startColumn,
						C.endLineNumber,
						C.endColumn,
					);
				}
				copy() {
					return new w(
						this.start.lineNumber,
						this.start.column,
						this.end.lineNumber,
						this.end.column,
					);
				}
				moveDownByLines(C) {
					return (this.start.lineNumber += C), (this.end.lineNumber += C), this;
				}
			}
			e.$kqb = w;
		}),
		