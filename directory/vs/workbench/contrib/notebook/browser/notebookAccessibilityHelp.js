import '../../../../../require.js';
import '../../../../../exports.js';
import '../common/notebookContextKeys.js';
import '../../../../nls.js';
import '../../../../platform/accessibility/browser/accessibleView.js';
import '../../accessibility/browser/accessibilityConfiguration.js';
import '../../../services/editor/common/editorService.js';
import '../../../../editor/browser/services/codeEditorService.js';
define(
			de[3558],
			he([1, 0, 176, 4, 178, 130, 18, 65]),
			function (ce /*require*/,
 e /*exports*/,
 t /*notebookContextKeys*/,
 i /*nls*/,
 w /*accessibleView*/,
 E /*accessibilityConfiguration*/,
 C /*editorService*/,
 d /*codeEditorService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nIc = void 0),
					(e.$oIc = r),
					(e.$pIc = u);
				class m {
					constructor() {
						(this.priority = 105),
							(this.name = "notebook"),
							(this.when = t.$pJb),
							(this.type = w.AccessibleViewType.Help);
					}
					getProvider(h) {
						const c =
							h.get(d.$dtb).getActiveCodeEditor() ||
							h.get(d.$dtb).getFocusedCodeEditor() ||
							h.get(C.$IY).activeEditorPane;
						if (c) return u(h, c);
					}
				}
				e.$nIc = m;
				function r() {
					return [
						(0, i.localize)(8071, null),
						(0, i.localize)(8072, null, "<keybinding:notebook.cell.edit>"),
						(0, i.localize)(8073, null, "<keybinding:notebook.cell.quitEdit>"),
						(0, i.localize)(
							8074,
							null,
							"<keybinding:notebook.cell.focusInOutput>",
						),
						(0, i.localize)(
							8075,
							null,
							"<keybinding:notebook.focusNextEditor>",
						),
						(0, i.localize)(
							8076,
							null,
							"<keybinding:notebook.focusPreviousEditor>",
						),
						(0, i.localize)(8077, null),
						(0, i.localize)(
							8078,
							null,
							"<keybinding:notebook.cell.executeAndFocusContainer>",
						),
						(0, i.localize)(
							8079,
							null,
							"<keybinding:notebook.cell.insertCodeCellAbove>",
							"<keybinding:notebook.cell.insertCodeCellBelow>",
						),
						(0, i.localize)(8080, null),
					].join(`
`);
				}
				function u(a, h) {
					const c = r();
					return new w.$ILb(
						w.AccessibleViewProviderId.Notebook,
						{ type: w.AccessibleViewType.Help },
						() => c,
						() => h.focus(),
						E.AccessibilityVerbositySettingId.Notebook,
					);
				}
			},
		)
