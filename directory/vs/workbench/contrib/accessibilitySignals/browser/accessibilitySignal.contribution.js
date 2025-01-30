import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/accessibilitySignal/browser/accessibilitySignalService.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../common/contributions.js';
import './accessibilitySignalDebuggerContribution.js';
import './commands.js';
import './editorTextPropertySignalsContribution.js';
import '../../../../platform/observable/common/wrapInReloadableClass.js';
define(
			de[3533],
			he([1, 0, 184, 11, 20, 55, 3050, 3532, 3258, 1624]),
			function (ce /*require*/,
 e /*exports*/,
 t /*accessibilitySignalService*/,
 i /*actions*/,
 w /*extensions*/,
 E /*contributions*/,
 C /*accessibilitySignalDebuggerContribution*/,
 d /*commands*/,
 m /*editorTextPropertySignalsContribution*/,
 r /*wrapInReloadableClass*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, w.$lK)(t.$Owb, t.$Qwb, w.InstantiationType.Delayed),
					(0, E.$s6)(
						"EditorTextPropertySignalsContribution",
						(0, r.$$jc)(() => m.$z2c),
						E.WorkbenchPhase.AfterRestored,
					),
					(0, E.$s6)(
						"AccessibilitySignalLineDebuggerContribution",
						C.$w2c,
						E.WorkbenchPhase.AfterRestored,
					),
					(0, i.$4X)(d.$x2c),
					(0, i.$4X)(d.$y2c);
			},
		),
		