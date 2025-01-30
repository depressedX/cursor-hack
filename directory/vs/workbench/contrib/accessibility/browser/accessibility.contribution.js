import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/extensions.js';
import './accessibilityConfiguration.js';
import '../../../common/contributions.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/registry/common/platform.js';
import './unfocusedViewDimmingContribution.js';
import './accessibilityStatus.js';
import './editorAccessibilityHelp.js';
import '../../accessibilitySignals/browser/saveAccessibilitySignal.js';
import '../../accessibilitySignals/browser/openDiffEditorAnnouncement.js';
import '../../speech/browser/speechAccessibilitySignal.js';
import '../../../services/accessibility/common/accessibleViewInformationService.js';
import '../../../../platform/accessibility/browser/accessibleView.js';
import './accessibleView.js';
import './accessibleViewContributions.js';
import './extensionAccesibilityHelp.contribution.js';
define(
			de[3863],
			he([
				1, 0, 20, 130, 55, 52, 30, 3545, 3627, 1901, 3862, 3546, 3138, 1278,
				178, 3761, 3544, 3803,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*extensions*/,
 i /*accessibilityConfiguration*/,
 w /*contributions*/,
 E /*lifecycle*/,
 C /*platform*/,
 d /*unfocusedViewDimmingContribution*/,
 m /*accessibilityStatus*/,
 r /*editorAccessibilityHelp*/,
 u /*saveAccessibilitySignal*/,
 a /*openDiffEditorAnnouncement*/,
 h /*speechAccessibilitySignal*/,
 c /*accessibleViewInformationService*/,
 n /*accessibleView*/,
 g /*accessibleView*/,
 p /*accessibleViewContributions*/,
 o /*extensionAccesibilityHelp.contribution*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, i.$1Lb)(),
					(0, t.$lK)(n.$HLb, g.$H2c, t.InstantiationType.Delayed),
					(0, t.$lK)(c.$QMb, c.$RMb, t.InstantiationType.Delayed);
				const f = C.$Io.as(w.Extensions.Workbench);
				f.registerWorkbenchContribution(r.$JXc, E.LifecyclePhase.Eventually),
					f.registerWorkbenchContribution(d.$A2c, E.LifecyclePhase.Restored),
					f.registerWorkbenchContribution(p.$I2c, E.LifecyclePhase.Eventually),
					f.registerWorkbenchContribution(p.$J2c, E.LifecyclePhase.Eventually),
					(0, w.$s6)(m.$B2c.ID, m.$B2c, w.WorkbenchPhase.BlockRestore),
					(0, w.$s6)(o.$K2c.ID, o.$K2c, w.WorkbenchPhase.BlockRestore),
					(0, w.$s6)(u.$C2c.ID, u.$C2c, w.WorkbenchPhase.AfterRestored),
					(0, w.$s6)(h.$E2c.ID, h.$E2c, w.WorkbenchPhase.AfterRestored),
					(0, w.$s6)(a.$D2c.ID, a.$D2c, w.WorkbenchPhase.AfterRestored),
					(0, w.$s6)(i.$3Lb.ID, i.$3Lb, w.WorkbenchPhase.AfterRestored);
			},
		),
		