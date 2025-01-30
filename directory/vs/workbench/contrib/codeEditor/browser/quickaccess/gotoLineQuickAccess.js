import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../nls.js';
import '../../../../../platform/quickinput/common/quickInput.js';
import '../../../../services/editor/common/editorService.js';
import '../../../../../editor/contrib/quickAccess/browser/gotoLineQuickAccess.js';
import '../../../../../platform/registry/common/platform.js';
import '../../../../../platform/quickinput/common/quickAccess.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../services/editor/common/editorGroupsService.js';
define(
			de[3264],
			he([1, 0, 4, 63, 18, 1666, 30, 348, 10, 11, 27, 43, 66]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*quickInput*/,
 w /*editorService*/,
 E /*gotoLineQuickAccess*/,
 C /*platform*/,
 d /*quickAccess*/,
 m /*configuration*/,
 r /*actions*/,
 u /*keyCodes*/,
 a /*keybindingsRegistry*/,
 h /*editorGroupsService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$QXc = void 0);
				let c = class extends E.$uNc {
					constructor(p, o, f) {
						super(),
							(this.t = p),
							(this.u = o),
							(this.v = f),
							(this.h = this.t.onDidActiveEditorChange);
					}
					get w() {
						const p = this.v.getValue().workbench?.editor;
						return {
							openEditorPinned:
								!p?.enablePreviewFromQuickOpen || !p?.enablePreview,
						};
					}
					get i() {
						return this.t.activeTextEditorControl;
					}
					f(p, o) {
						if (
							(o.keyMods.alt ||
								(this.w.openEditorPinned && o.keyMods.ctrlCmd) ||
								o.forceSideBySide) &&
							this.t.activeEditor
						) {
							p.restoreViewState?.();
							const f = {
								selection: o.range,
								pinned: o.keyMods.ctrlCmd || this.w.openEditorPinned,
								preserveFocus: o.preserveFocus,
							};
							this.u.sideGroup.openEditor(this.t.activeEditor, f);
						} else super.f(p, o);
					}
				};
				(e.$QXc = c),
					(e.$QXc = c = Ne([j(0, w.$IY), j(1, h.$EY), j(2, m.$gj)], c));
				class n extends r.$3X {
					static {
						this.ID = "workbench.action.gotoLine";
					}
					constructor() {
						super({
							id: n.ID,
							title: (0, t.localize2)(4892, "Go to Line/Column..."),
							f1: !0,
							keybinding: {
								weight: a.KeybindingWeight.WorkbenchContrib,
								when: null,
								primary: u.KeyMod.CtrlCmd | u.KeyCode.KeyG,
								mac: { primary: u.KeyMod.WinCtrl | u.KeyCode.KeyG },
							},
						});
					}
					async run(p) {
						p.get(i.$DJ).quickAccess.show(c.PREFIX);
					}
				}
				(0, r.$4X)(n),
					C.$Io
						.as(d.$1r.Quickaccess)
						.registerQuickAccessProvider({
							ctor: c,
							prefix: E.$uNc.PREFIX,
							placeholder: (0, t.localize)(4890, null),
							helpEntries: [
								{ description: (0, t.localize)(4891, null), commandId: n.ID },
							],
						});
			},
		),
		