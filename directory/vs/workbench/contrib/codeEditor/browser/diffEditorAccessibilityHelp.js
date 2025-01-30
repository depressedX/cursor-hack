import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/browser/widget/diffEditor/commands.js';
import '../../../../editor/browser/widget/diffEditor/diffEditorWidget.js';
import '../../../../nls.js';
import '../../../../platform/accessibility/browser/accessibleView.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../accessibility/browser/accessibilityConfiguration.js';
import '../../accessibility/browser/editorAccessibilityHelp.js';
import '../../../services/editor/common/editorService.js';
define(
			de[3766],
			he([1, 0, 65, 1217, 309, 4, 178, 8, 39, 130, 1901, 18]),
			function (ce /*require*/,
 e /*exports*/,
 t /*codeEditorService*/,
 i /*commands*/,
 w /*diffEditorWidget*/,
 E /*nls*/,
 C /*accessibleView*/,
 d /*contextkey*/,
 m /*keybinding*/,
 r /*accessibilityConfiguration*/,
 u /*editorAccessibilityHelp*/,
 a /*editorService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$MXc = void 0);
				class h {
					constructor() {
						(this.priority = 105),
							(this.name = "diff-editor"),
							(this.when = d.$Rj.create("isInDiffEditor", !0)),
							(this.type = C.AccessibleViewType.Help);
					}
					getProvider(n) {
						const g = n.get(a.$IY),
							p = n.get(t.$dtb),
							o = n.get(m.$uZ),
							f = n.get(d.$6j);
						if (!(g.activeTextEditorControl instanceof w.$3yb)) return;
						const b = p.getActiveCodeEditor() || p.getFocusedCodeEditor();
						if (!b) return;
						const s = (0, E.localize)(
								4852,
								null,
								"<keybinding:diffEditor.switchSide>",
							),
							l = (0, E.localize)(4853, null),
							y = [
								"accessibility.signals.diffLineDeleted",
								"accessibility.signals.diffLineInserted",
								"accessibility.signals.diffLineModified",
							],
							$ = [
								(0, E.localize)(4854, null),
								(0, E.localize)(
									4855,
									null,
									"<keybinding:" + i.$_yb.id + ">",
									"<keybinding:" + i.$azb.id + ">",
								),
								s,
								l,
								(0, E.localize)(4856, null, y.join(", ")),
							],
							v = (0, u.$KXc)(o, f, b);
						return (
							v && $.push(v),
							new C.$ILb(
								C.AccessibleViewProviderId.DiffEditor,
								{ type: C.AccessibleViewType.Help },
								() =>
									$.join(`
`),
								() => b.focus(),
								r.AccessibilityVerbositySettingId.DiffEditor,
							)
						);
					}
				}
				e.$MXc = h;
			},
		),
		