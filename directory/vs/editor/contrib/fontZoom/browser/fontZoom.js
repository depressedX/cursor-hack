import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../browser/editorExtensions.js';
import '../../../common/config/editorZoom.js';
import '../../../../nls.js';
define(de[2808], he([1, 0, 46, 909, 4]), function (ce /*require*/,
 e /*exports*/,
 t /*editorExtensions*/,
 i /*editorZoom*/,
 w /*nls*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (w = mt(w));
			class E extends t.$itb {
				constructor() {
					super({
						id: "editor.action.fontZoomIn",
						label: w.localize(1075, null),
						alias: "Increase Editor Font Size",
						precondition: void 0,
					});
				}
				run(r, u) {
					i.EditorZoom.setZoomLevel(i.EditorZoom.getZoomLevel() + 1);
				}
			}
			class C extends t.$itb {
				constructor() {
					super({
						id: "editor.action.fontZoomOut",
						label: w.localize(1076, null),
						alias: "Decrease Editor Font Size",
						precondition: void 0,
					});
				}
				run(r, u) {
					i.EditorZoom.setZoomLevel(i.EditorZoom.getZoomLevel() - 1);
				}
			}
			class d extends t.$itb {
				constructor() {
					super({
						id: "editor.action.fontZoomReset",
						label: w.localize(1077, null),
						alias: "Reset Editor Font Size",
						precondition: void 0,
					});
				}
				run(r, u) {
					i.EditorZoom.setZoomLevel(0);
				}
			}
			(0, t.$ntb)(E), (0, t.$ntb)(C), (0, t.$ntb)(d);
		})
