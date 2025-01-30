import '../../../../require.js';
import '../../../../exports.js';
import '../core/range.js';
import '../core/selection.js';
define(de[1527], he([1, 0, 17, 104]), function (ce /*require*/,
 e /*exports*/,
 t /*range*/,
 i /*selection*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Ttb = e.$Stb = void 0);
			class w {
				constructor(d, m, r) {
					(this.a = d), (this.b = m), (this.c = r);
				}
				getEditOperations(d, m) {
					m.addTrackedEditOperation(
						new t.$iL(
							this.a.startLineNumber,
							this.a.startColumn,
							this.a.startLineNumber,
							this.a.startColumn,
						),
						this.b,
					),
						m.addTrackedEditOperation(
							new t.$iL(
								this.a.endLineNumber,
								this.a.endColumn,
								this.a.endLineNumber,
								this.a.endColumn,
							),
							this.c,
						);
				}
				computeCursorState(d, m) {
					const r = m.getInverseEditOperations(),
						u = r[0].range,
						a = r[1].range;
					return new i.$kL(
						u.endLineNumber,
						u.endColumn,
						a.endLineNumber,
						a.endColumn - this.c.length,
					);
				}
			}
			e.$Stb = w;
			class E {
				constructor(d, m, r) {
					(this.a = d), (this.b = m), (this.c = r);
				}
				getEditOperations(d, m) {
					m.addTrackedEditOperation(
						new t.$iL(
							this.a.lineNumber,
							this.a.column,
							this.a.lineNumber,
							this.a.column,
						),
						this.b + this.c,
					);
				}
				computeCursorState(d, m) {
					const u = m.getInverseEditOperations()[0].range;
					return new i.$kL(
						u.endLineNumber,
						u.startColumn,
						u.endLineNumber,
						u.endColumn - this.c.length,
					);
				}
			}
			e.$Ttb = E;
		}),
		