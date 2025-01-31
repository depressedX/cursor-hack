import '../../../../../require.js';
import '../../../../../exports.js';
define(de[2960], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Oed = void 0);
			class t {
				constructor(w) {
					(this.b = w), (this.a = []);
				}
				addEdit(w) {
					this.a.push(w), this.a.length > this.b && this.a.shift();
				}
				checkChangeExists(w, E) {
					if (w.changes.length !== 1) return !1;
					const C = w.changes[0],
						d = this.a.find(
							(m) =>
								m.range.startColumn === C.range.startColumn &&
								m.range.startLineNumber === C.range.startLineNumber &&
								m.range.endColumn === C.range.endColumn &&
								m.range.endLineNumber === C.range.endLineNumber &&
								m.text === C.text,
						);
					return d ? (E && (this.a = this.a.filter((m) => m !== d)), !0) : !1;
				}
			}
			e.$Oed = t;
		})
