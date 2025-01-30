import '../../../../../require.js';
import '../../../../../exports.js';
import '../../environment/electron-sandbox/environmentService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../editor/common/editorService.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../common/configurationResolver.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../browser/baseConfigurationResolverService.js';
import '../../../../platform/label/common/label.js';
import '../../environment/electron-sandbox/shellEnvironmentService.js';
import '../../path/common/pathService.js';
import '../../extensions/common/extensions.js';
import '../../../../platform/storage/common/storage.js';
define(
			de[3581],
			he([1, 0, 151, 10, 31, 25, 18, 63, 358, 20, 3252, 73, 1020, 165, 53, 21]),
			function (ce /*require*/,
 e /*exports*/,
 t /*environmentService*/,
 i /*configuration*/,
 w /*commands*/,
 E /*workspace*/,
 C /*editorService*/,
 d /*quickInput*/,
 m /*configurationResolver*/,
 r /*extensions*/,
 u /*baseConfigurationResolverService*/,
 a /*label*/,
 h /*shellEnvironmentService*/,
 c /*pathService*/,
 n /*extensions*/,
 g /*storage*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Edd = void 0);
				let p = class extends u.$N5c {
					constructor(f, b, s, l, y, $, v, S, I, T, P) {
						super(
							{ getAppRoot: () => b.appRoot, getExecPath: () => b.execPath },
							S.getShellEnv(),
							f,
							s,
							l,
							y,
							$,
							v,
							I,
							T,
							P,
						);
					}
				};
				(e.$Edd = p),
					(e.$Edd = p =
						Ne(
							[
								j(0, C.$IY),
								j(1, t.$ucd),
								j(2, i.$gj),
								j(3, w.$ek),
								j(4, E.$Vi),
								j(5, d.$DJ),
								j(6, a.$3N),
								j(7, h.$Cdd),
								j(8, c.$I8),
								j(9, n.$q2),
								j(10, g.$lq),
							],
							p,
						)),
					(0, r.$lK)(m.$zeb, p, r.InstantiationType.Delayed);
			},
		),
		