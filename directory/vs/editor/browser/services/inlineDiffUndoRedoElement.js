import '../../../../require.js';
import '../../../../exports.js';
import '../../../platform/undoRedo/common/undoRedo.js';
define(de[779], he([1, 0, 155]), function (ce /*require*/,
 e /*exports*/,
 t /*undoRedo*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$y7b = void 0);
			class i {
				get type() {
					return t.UndoRedoElementType.Resource;
				}
				constructor(E, C, d, m, r, u) {
					(this.label = E),
						(this.code = C),
						(this.diffId = d),
						(this.resource = m),
						(this.a = []),
						(this.b = []),
						(this.confirmBeforeUndo = !1),
						this.a.push(r),
						this.b.push(u);
				}
				push(E) {
					this.a.push(...E.a), this.b.push(...E.b);
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
				rebase() {}
				toString() {
					return `InlineDiffUndoRedoElement: ${this.label}`;
				}
			}
			e.$y7b = i;
		})
