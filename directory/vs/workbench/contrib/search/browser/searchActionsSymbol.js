import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../common/constants.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/quickinput/common/quickInput.js';
define(
			de[3134],
			he([1, 0, 4, 377, 11, 43, 27, 63]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*constants*/,
 w /*actions*/,
 E /*keybindingsRegistry*/,
 C /*keyCodes*/,
 d /*quickInput*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(t = mt(t)),
					(i = mt(i)),
					(0, w.$4X)(
						class Ma extends w.$3X {
							static {
								this.ID = "workbench.action.showAllSymbols";
							}
							static {
								this.LABEL = t.localize(9261, null);
							}
							static {
								this.ALL_SYMBOLS_PREFIX = "#";
							}
							constructor() {
								super({
									id: i.SearchCommandIds.ShowAllSymbolsActionId,
									title: {
										...t.localize2(9263, "Go to Symbol in Workspace..."),
										mnemonicTitle: t.localize(9262, null),
									},
									f1: !0,
									keybinding: {
										weight: E.KeybindingWeight.WorkbenchContrib,
										primary: C.KeyMod.CtrlCmd | C.KeyCode.KeyT,
									},
									menu: {
										id: w.$XX.MenubarGoMenu,
										group: "3_global_nav",
										order: 2,
									},
								});
							}
							async run(r) {
								r.get(d.$DJ).quickAccess.show(Ma.ALL_SYMBOLS_PREFIX);
							}
						},
					);
			},
		)
