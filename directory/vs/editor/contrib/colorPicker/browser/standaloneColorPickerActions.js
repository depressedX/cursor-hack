import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../browser/editorExtensions.js';
import '../../../../base/common/keyCodes.js';
import '../../../../nls.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import './standaloneColorPickerWidget.js';
import '../../../common/editorContextKeys.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../css!vs/editor/contrib/colorPicker/browser/colorPicker.js';
define(
			de[2911],
			he([1, 0, 46, 27, 4, 43, 2910, 71, 11, 1136]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ahc = void 0);
				class r extends t.$ktb {
					constructor() {
						super({
							id: "editor.action.showOrFocusStandaloneColorPicker",
							title: {
								...(0, w.localize2)(
									957,
									"Show or Focus Standalone Color Picker",
								),
								mnemonicTitle: (0, w.localize)(954, null),
							},
							precondition: void 0,
							menu: [{ id: m.$XX.CommandPalette }],
							metadata: {
								description: (0, w.localize2)(
									958,
									"Show or focus a standalone color picker which uses the default color provider. It displays hex/rgb/hsl colors.",
								),
							},
						});
					}
					runEditorCommand(c, n) {
						C.$yhc.get(n)?.showOrFocus();
					}
				}
				e.$Ahc = r;
				class u extends t.$itb {
					constructor() {
						super({
							id: "editor.action.hideColorPicker",
							label: (0, w.localize)(955, null),
							alias: "Hide the Color Picker",
							precondition:
								d.EditorContextKeys.standaloneColorPickerVisible.isEqualTo(!0),
							kbOpts: {
								primary: i.KeyCode.Escape,
								weight: E.KeybindingWeight.EditorContrib,
							},
							metadata: {
								description: (0, w.localize2)(
									959,
									"Hide the standalone color picker.",
								),
							},
						});
					}
					run(c, n) {
						C.$yhc.get(n)?.hide();
					}
				}
				class a extends t.$itb {
					constructor() {
						super({
							id: "editor.action.insertColorWithStandaloneColorPicker",
							label: (0, w.localize)(956, null),
							alias: "Insert Color with Standalone Color Picker",
							precondition:
								d.EditorContextKeys.standaloneColorPickerFocused.isEqualTo(!0),
							kbOpts: {
								primary: i.KeyCode.Enter,
								weight: E.KeybindingWeight.EditorContrib,
							},
							metadata: {
								description: (0, w.localize2)(
									960,
									"Insert hex/rgb/hsl colors with the focused standalone color picker.",
								),
							},
						});
					}
					run(c, n) {
						C.$yhc.get(n)?.insertColor();
					}
				}
				(0, t.$ntb)(u), (0, t.$ntb)(a), (0, m.$4X)(r);
			},
		),
		