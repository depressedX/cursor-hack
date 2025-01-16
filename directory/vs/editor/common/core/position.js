define(de[48], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$hL = void 0);
			class t {
				constructor(w, E) {
					(this.lineNumber = w), (this.column = E);
				}
				with(w = this.lineNumber, E = this.column) {
					return w === this.lineNumber && E === this.column
						? this
						: new t(w, E);
				}
				delta(w = 0, E = 0) {
					return this.with(this.lineNumber + w, this.column + E);
				}
				equals(w) {
					return t.equals(this, w);
				}
				static equals(w, E) {
					return !w && !E
						? !0
						: !!w &&
								!!E &&
								w.lineNumber === E.lineNumber &&
								w.column === E.column;
				}
				isBefore(w) {
					return t.isBefore(this, w);
				}
				static isBefore(w, E) {
					return w.lineNumber < E.lineNumber
						? !0
						: E.lineNumber < w.lineNumber
							? !1
							: w.column < E.column;
				}
				isBeforeOrEqual(w) {
					return t.isBeforeOrEqual(this, w);
				}
				static isBeforeOrEqual(w, E) {
					return w.lineNumber < E.lineNumber
						? !0
						: E.lineNumber < w.lineNumber
							? !1
							: w.column <= E.column;
				}
				static compare(w, E) {
					const C = w.lineNumber | 0,
						d = E.lineNumber | 0;
					if (C === d) {
						const m = w.column | 0,
							r = E.column | 0;
						return m - r;
					}
					return C - d;
				}
				clone() {
					return new t(this.lineNumber, this.column);
				}
				toString() {
					return "(" + this.lineNumber + "," + this.column + ")";
				}
				static lift(w) {
					return new t(w.lineNumber, w.column);
				}
				static isIPosition(w) {
					return (
						w && typeof w.lineNumber == "number" && typeof w.column == "number"
					);
				}
				toJSON() {
					return { lineNumber: this.lineNumber, column: this.column };
				}
			}
			e.$hL = t;
		}),
		