define(de[1739], he([1, 0, 48, 458]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$pZb = w),
				(e.$qZb = E),
				(e.$rZb = C),
				(e.$sZb = d),
				(e.$tZb = m);
			function w(r, u) {
				return !(
					u.lineNumber < r.startLineNumber ||
					u.lineNumber > r.endLineNumber ||
					(u.lineNumber === r.startLineNumber && u.column < r.startColumn) ||
					(u.lineNumber === r.endLineNumber && u.column >= r.endColumn)
				);
			}
			function E(r) {
				return r.startLineNumber === r.endLineNumber
					? new i.$tL(0, r.endColumn - r.startColumn)
					: new i.$tL(r.endLineNumber - r.startLineNumber, r.endColumn - 1);
			}
			function C(r, u) {
				return r.lineNumber === u.lineNumber
					? new i.$tL(0, u.column - r.column)
					: new i.$tL(u.lineNumber - r.lineNumber, u.column - 1);
			}
			function d(r, u) {
				return u.lineCount === 0
					? new t.$hL(r.lineNumber, r.column + u.columnCount)
					: new t.$hL(r.lineNumber + u.lineCount, u.columnCount + 1);
			}
			function m(r, u) {
				return (
					r.endLineNumber < u.startLineNumber ||
					(r.endLineNumber === u.startLineNumber &&
						r.endColumn <= u.startColumn)
				);
			}
		}),
		