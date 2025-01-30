import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/core/range.js';
import '../../../common/core/selection.js';
define(de[2582], he([1, 0, 17, 104]), function (ce /*require*/,
 e /*exports*/,
 t /*range*/,
 i /*selection*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Ghc = void 0);
			class w {
				constructor(C, d, m) {
					(this.a = C), (this.b = d), (this.d = m), (this.c = null);
				}
				getEditOperations(C, d) {
					const m = C.getValueInRange(this.a);
					if (
						(this.d || d.addEditOperation(this.a, null),
						d.addEditOperation(
							new t.$iL(
								this.b.lineNumber,
								this.b.column,
								this.b.lineNumber,
								this.b.column,
							),
							m,
						),
						this.a.containsPosition(this.b) &&
							!(
								this.d &&
								(this.a.getEndPosition().equals(this.b) ||
									this.a.getStartPosition().equals(this.b))
							))
					) {
						this.c = this.a;
						return;
					}
					if (this.d) {
						this.c = new i.$kL(
							this.b.lineNumber,
							this.b.column,
							this.a.endLineNumber - this.a.startLineNumber + this.b.lineNumber,
							this.a.startLineNumber === this.a.endLineNumber
								? this.b.column + this.a.endColumn - this.a.startColumn
								: this.a.endColumn,
						);
						return;
					}
					if (this.b.lineNumber > this.a.endLineNumber) {
						this.c = new i.$kL(
							this.b.lineNumber - this.a.endLineNumber + this.a.startLineNumber,
							this.b.column,
							this.b.lineNumber,
							this.a.startLineNumber === this.a.endLineNumber
								? this.b.column + this.a.endColumn - this.a.startColumn
								: this.a.endColumn,
						);
						return;
					}
					if (this.b.lineNumber < this.a.endLineNumber) {
						this.c = new i.$kL(
							this.b.lineNumber,
							this.b.column,
							this.b.lineNumber + this.a.endLineNumber - this.a.startLineNumber,
							this.a.startLineNumber === this.a.endLineNumber
								? this.b.column + this.a.endColumn - this.a.startColumn
								: this.a.endColumn,
						);
						return;
					}
					this.a.endColumn <= this.b.column
						? (this.c = new i.$kL(
								this.b.lineNumber -
									this.a.endLineNumber +
									this.a.startLineNumber,
								this.a.startLineNumber === this.a.endLineNumber
									? this.b.column - this.a.endColumn + this.a.startColumn
									: this.b.column - this.a.endColumn + this.a.startColumn,
								this.b.lineNumber,
								this.a.startLineNumber === this.a.endLineNumber
									? this.b.column
									: this.a.endColumn,
							))
						: (this.c = new i.$kL(
								this.b.lineNumber -
									this.a.endLineNumber +
									this.a.startLineNumber,
								this.b.column,
								this.b.lineNumber,
								this.b.column + this.a.endColumn - this.a.startColumn,
							));
				}
				computeCursorState(C, d) {
					return this.c;
				}
			}
			e.$Ghc = w;
		}),
		