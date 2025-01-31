import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/core/range.js';
define(de[2583], he([1, 0, 17]), function (ce /*require*/,
 e /*exports*/,
 t /*range*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$81b = void 0);
			class i {
				constructor(E, C, d) {
					(this.a = E), (this.c = C), (this.d = d), (this.b = null);
				}
				getEditOperations(E, C) {
					if (this.c.length > 0) {
						const d = [];
						for (let u = 0; u < this.c.length; u++)
							d.push({ range: this.c[u], text: this.d[u] });
						d.sort((u, a) => t.$iL.compareRangesUsingStarts(u.range, a.range));
						const m = [];
						let r = d[0];
						for (let u = 1; u < d.length; u++)
							r.range.endLineNumber === d[u].range.startLineNumber &&
							r.range.endColumn === d[u].range.startColumn
								? ((r.range = r.range.plusRange(d[u].range)),
									(r.text = r.text + d[u].text))
								: (m.push(r), (r = d[u]));
						m.push(r);
						for (const u of m) C.addEditOperation(u.range, u.text);
					}
					this.b = C.trackSelection(this.a);
				}
				computeCursorState(E, C) {
					return C.getTrackedSelection(this.b);
				}
			}
			e.$81b = i;
		})
