import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/editor/diffEditorInput.js';
define(de[1828], he([1, 0, 296]), function (ce /*require*/,
 e /*exports*/,
 t /*diffEditorInput*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ComposerDiffEditorInput = void 0);
			class i extends t.$GVb {
				static {
					this.ID = "workbench.editors.composerDiffEditorInput";
				}
				get typeId() {
					return i.ID;
				}
				get resource() {
					return this.modified.resource;
				}
				getUniqueId() {
					return `${this.original.resource?.toString()}-${this.modified.resource?.toString()}`;
				}
				toJSON() {}
				register(E) {
					this.D(E);
				}
			}
			e.ComposerDiffEditorInput = i;
		})
