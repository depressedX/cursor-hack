import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/editor/editorInput.js';
import '../../../../nls.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/theme/common/iconRegistry.js';
define(de[797], he([1, 0, 223, 4, 14, 79]), function (ce /*require*/,
 e /*exports*/,
 t /*editorInput*/,
 i /*nls*/,
 w /*codicons*/,
 E /*iconRegistry*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$G3 = void 0);
			const C = (0, E.$$O)(
				"disassembly-editor-label-icon",
				w.$ak.debug,
				(0, i.localize)(5902, null),
			);
			class d extends t.$LO {
				constructor() {
					super(...arguments), (this.resource = void 0);
				}
				static {
					this.ID = "debug.disassemblyView.input";
				}
				get typeId() {
					return d.ID;
				}
				static get instance() {
					return (
						(!d._instance || d._instance.isDisposed()) &&
							(d._instance = new d()),
						d._instance
					);
				}
				getName() {
					return (0, i.localize)(5903, null);
				}
				getIcon() {
					return C;
				}
				matches(r) {
					return r instanceof d;
				}
			}
			e.$G3 = d;
		}),
		