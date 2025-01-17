import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/registry/common/platform.js';
import '../../../browser/editor.js';
import './notepadEditorInput.js';
import './notepadEditor.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../common/editor.js';
import '../../../common/views.js';
import '../../files/browser/explorerViewlet.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../nls.js';
import '../../../../base/common/codicons.js';
import './notepadPane.js';
import './constants.js';
import '../../../../platform/contextkey/common/contextkey.js';
define(
			de[4330],
			he([
				1, 0, 30, 192, 1744, 4329, 102, 44, 60, 864, 79, 4, 14, 4027, 558, 8,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$yAc = void 0),
					t.$Io
						.as(d.$a1.EditorPane)
						.registerEditorPane(
							i.$vVb.create(E.$nAc, E.$nAc.ID, "Notepad Editor"),
							[new C.$Ji(w.$6zc)],
						),
					t.$Io
						.as(d.$a1.EditorFactory)
						.registerEditorSerializer(w.$6zc.TypeID, w.$7zc);
				const p = (0, u.$$O)(
					"timeline-view-icon",
					h.$ak.history,
					(0, a.localize)(8236, null),
				);
				class o {
					constructor() {
						(this.id = n.$B9b),
							(this.name = { value: "Notepads", original: "Notepads" }),
							(this.containerIcon = p),
							(this.ctorDescriptor = new C.$Ji(c.$xAc)),
							(this.order = 2),
							(this.weight = 30),
							(this.collapsed = !0),
							(this.canToggleVisibility = !1),
							(this.hideByDefault = !0),
							(this.canMoveView = !0),
							(this.when = g.$Kj.equals("notepadIsEnabled", !0)),
							(this.focusCommand = { id: "notepad.focus" });
					}
				}
				(e.$yAc = o),
					t.$Io.as(m.Extensions.ViewsRegistry).registerViews([new o()], r.$sAc);
			},
		),
		