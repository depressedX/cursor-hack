import '../../../../require.js';
import '../../../../exports.js';
import '../../../platform/undoRedo/common/undoRedo.js';
define(de[606], he([1, 0, 155]), function (ce /*require*/,
 e /*exports*/,
 t /*undoRedo*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$x7b = void 0);
			class i {
				get type() {
					return t.UndoRedoElementType.Resource;
				}
				constructor(E, C, d, m, r) {
					(this.label = E),
						(this.code = C),
						(this.resource = d),
						(this.a = []),
						(this.b = []),
						(this.confirmBeforeUndo = !1),
						this.a.push(m),
						this.b.push(r);
				}
				async undo() {
					for (let E = this.a.length - 1; E >= 0; E--) {
						const C = this.a[E],
							d = C();
						d instanceof Promise && (await d);
					}
				}
				async redo() {
					for (let E = 0; E < this.b.length; E++) {
						const C = this.b[E],
							d = C();
						d instanceof Promise && (await d);
					}
				}
				rebase(E, C, d, m, r, u, a, h) {}
			}
			e.$x7b = i;
		})
