import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../common/constants.js';
import '../../../../platform/actions/common/actions.js';
import './searchActionsBase.js';
import '../../../../platform/quickinput/common/quickInput.js';
import './quickTextSearch/textSearchQuickAccess.js';
import '../../../services/editor/common/editorService.js';
import '../../../../platform/configuration/common/configuration.js';
import './searchView.js';
define(
			de[4172],
			he([1, 0, 4, 377, 11, 483, 63, 1972, 18, 10, 1068]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*constants*/,
 w /*actions*/,
 E /*searchActionsBase*/,
 C /*quickInput*/,
 d /*textSearchQuickAccess*/,
 m /*editorService*/,
 r /*configuration*/,
 u /*searchView*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(t = mt(t)),
					(i = mt(i)),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: i.SearchCommandIds.QuickTextSearchActionId,
									title: t.localize2(9264, "Quick Search"),
									category: E.$oOc,
									f1: !0,
								});
							}
							async run(c, n) {
								const g = c.get(C.$DJ),
									p = a(c) ?? "";
								g.quickAccess.show(d.$hPc + p, { preserveValue: !!p });
							}
						},
					);
				function a(h) {
					const c = h.get(m.$IY),
						n = h.get(r.$gj),
						g = c.activeTextEditorControl;
					return !g ||
						!g.hasTextFocus() ||
						!n.getValue("editor.find.seedSearchStringFromSelection")
						? null
						: (0, u.$fPc)(!1, g);
				}
			},
		)
