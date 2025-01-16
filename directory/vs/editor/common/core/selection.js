define(de[104], he([1, 0, 48, 17]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$kL = e.SelectionDirection = void 0);
			var w;
			(function (C) {
				(C[(C.LTR = 0)] = "LTR"), (C[(C.RTL = 1)] = "RTL");
			})(w || (e.SelectionDirection = w = {}));
			class E extends i.$iL {
				constructor(d, m, r, u) {
					super(d, m, r, u),
						(this.selectionStartLineNumber = d),
						(this.selectionStartColumn = m),
						(this.positionLineNumber = r),
						(this.positionColumn = u);
				}
				toString() {
					return (
						"[" +
						this.selectionStartLineNumber +
						"," +
						this.selectionStartColumn +
						" -> " +
						this.positionLineNumber +
						"," +
						this.positionColumn +
						"]"
					);
				}
				equalsSelection(d) {
					return E.selectionsEqual(this, d);
				}
				static selectionsEqual(d, m) {
					return (
						d.selectionStartLineNumber === m.selectionStartLineNumber &&
						d.selectionStartColumn === m.selectionStartColumn &&
						d.positionLineNumber === m.positionLineNumber &&
						d.positionColumn === m.positionColumn
					);
				}
				getDirection() {
					return this.selectionStartLineNumber === this.startLineNumber &&
						this.selectionStartColumn === this.startColumn
						? w.LTR
						: w.RTL;
				}
				setEndPosition(d, m) {
					return this.getDirection() === w.LTR
						? new E(this.startLineNumber, this.startColumn, d, m)
						: new E(d, m, this.startLineNumber, this.startColumn);
				}
				getPosition() {
					return new t.$hL(this.positionLineNumber, this.positionColumn);
				}
				getSelectionStart() {
					return new t.$hL(
						this.selectionStartLineNumber,
						this.selectionStartColumn,
					);
				}
				setStartPosition(d, m) {
					return this.getDirection() === w.LTR
						? new E(d, m, this.endLineNumber, this.endColumn)
						: new E(this.endLineNumber, this.endColumn, d, m);
				}
				static fromPositions(d, m = d) {
					return new E(d.lineNumber, d.column, m.lineNumber, m.column);
				}
				static fromRange(d, m) {
					return m === w.LTR
						? new E(
								d.startLineNumber,
								d.startColumn,
								d.endLineNumber,
								d.endColumn,
							)
						: new E(
								d.endLineNumber,
								d.endColumn,
								d.startLineNumber,
								d.startColumn,
							);
				}
				static liftSelection(d) {
					return new E(
						d.selectionStartLineNumber,
						d.selectionStartColumn,
						d.positionLineNumber,
						d.positionColumn,
					);
				}
				static selectionsArrEqual(d, m) {
					if ((d && !m) || (!d && m)) return !1;
					if (!d && !m) return !0;
					if (d.length !== m.length) return !1;
					for (let r = 0, u = d.length; r < u; r++)
						if (!this.selectionsEqual(d[r], m[r])) return !1;
					return !0;
				}
				static isISelection(d) {
					return (
						d &&
						typeof d.selectionStartLineNumber == "number" &&
						typeof d.selectionStartColumn == "number" &&
						typeof d.positionLineNumber == "number" &&
						typeof d.positionColumn == "number"
					);
				}
				static createWithDirection(d, m, r, u, a) {
					return a === w.LTR ? new E(d, m, r, u) : new E(r, u, d, m);
				}
			}
			e.$kL = E;
		}),
		