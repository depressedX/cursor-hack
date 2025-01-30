import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../platform/undoRedo/common/undoRedo.js';
define(de[3112], he([1, 0, 155]), function (ce /*require*/,
 e /*exports*/,
 t /*undoRedo*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$a6 = e.$_5 = e.$$5 = void 0);
			class i {
				get label() {
					return this.b === 1 ? "Move Cell" : "Move Cells";
				}
				constructor(d, m, r, u, a, h, c) {
					(this.resource = d),
						(this.a = m),
						(this.b = r),
						(this.c = u),
						(this.d = a),
						(this.e = h),
						(this.f = c),
						(this.type = t.UndoRedoElementType.Resource),
						(this.code = "undoredo.textBufferEdit");
				}
				undo() {
					if (!this.d.moveCell)
						throw new Error("Notebook Move Cell not implemented for Undo/Redo");
					this.d.moveCell(this.c, this.b, this.a, this.f, this.e);
				}
				redo() {
					if (!this.d.moveCell)
						throw new Error("Notebook Move Cell not implemented for Undo/Redo");
					this.d.moveCell(this.a, this.b, this.c, this.e, this.f);
				}
				rebase(d, m, r, u) {}
			}
			e.$$5 = i;
			class w {
				get label() {
					return this.a.length === 1 && this.a[0][1].length === 0
						? this.a[0][2].length > 1
							? "Insert Cells"
							: "Insert Cell"
						: this.a.length === 1 && this.a[0][2].length === 0
							? this.a[0][1].length > 1
								? "Delete Cells"
								: "Delete Cell"
							: "Insert Cell";
				}
				constructor(d, m, r, u, a) {
					(this.resource = d),
						(this.a = m),
						(this.b = r),
						(this.c = u),
						(this.d = a),
						(this.type = t.UndoRedoElementType.Resource),
						(this.code = "undoredo.textBufferEdit");
				}
				rebase(d, m, r, u) {}
				undo() {
					if (!this.b.replaceCell)
						throw new Error(
							"Notebook Replace Cell not implemented for Undo/Redo",
						);
					this.a.forEach((d) => {
						this.b.replaceCell(d[0], d[2].length, d[1], this.c);
					});
				}
				redo() {
					if (!this.b.replaceCell)
						throw new Error(
							"Notebook Replace Cell not implemented for Undo/Redo",
						);
					this.a.reverse().forEach((d) => {
						this.b.replaceCell(d[0], d[1].length, d[2], this.d);
					});
				}
			}
			e.$_5 = w;
			class E {
				constructor(d, m, r, u, a) {
					(this.resource = d),
						(this.index = m),
						(this.oldMetadata = r),
						(this.newMetadata = u),
						(this.a = a),
						(this.type = t.UndoRedoElementType.Resource),
						(this.label = "Update Cell Metadata"),
						(this.code = "undoredo.textBufferEdit");
				}
				rebase(d, m, r, u) {}
				undo() {
					this.a.updateCellMetadata &&
						this.a.updateCellMetadata(this.index, this.oldMetadata);
				}
				redo() {
					this.a.updateCellMetadata &&
						this.a.updateCellMetadata(this.index, this.newMetadata);
				}
			}
			e.$a6 = E;
		}),
		