import '../../../../../require.js';
import '../../../../../exports.js';
import './range.js';
define(de[2214], he([1, 0, 1131]), function (ce /*require*/,
 e /*exports*/,
 t /*range*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$2qb = void 0);
			class i {
				constructor(E, C, d, m, r, u) {
					(this.text = E),
						(this.range = C),
						(this.finalModelHash = r),
						(this.relativePath = d),
						(this.timestamp = m),
						(this.finalModelRange = u);
				}
				turnToZeroIndexed() {
					(this.range.start.lineNumber -= 1),
						(this.range.start.column -= 1),
						(this.range.end.lineNumber -= 1),
						(this.range.end.column -= 1);
				}
				getFinalModelRange() {
					const E = this.text.split(`
`),
						C = this.range.start.copy(),
						d = new t.$jqb(C.lineNumber + E.length - 1, E[E.length - 1].length);
					return new t.$kqb(C, d);
				}
				moveDownByLines(E) {
					return this.range.moveDownByLines(E), this;
				}
				lineDelta() {
					return (
						this.text.split(`
`).length - this.range.numberOfLines()
					);
				}
				toString() {
					return `${this.relativePath}, ${this.range.toString()}, ${this.timestamp}, numNewLines: ${
						this.text.split(`
`).length
					}`;
				}
				copy() {
					return new i(
						this.text,
						this.range.copy(),
						this.relativePath,
						this.timestamp,
						this.finalModelHash,
						this.finalModelRange?.copy(),
					);
				}
				updateTimestamp(E) {
					this.timestamp = E;
				}
			}
			e.$2qb = i;
		})
