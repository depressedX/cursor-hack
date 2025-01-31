import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../common/workbenchThemeService.js';
import '../common/themeConfiguration.js';
import '../../../../base/common/platform.js';
define(
			de[3730],
			he([1, 0, 4, 30, 81, 333, 1891, 12]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*platform*/,
 w /*configurationRegistry*/,
 E /*workbenchThemeService*/,
 C /*themeConfiguration*/,
 d /*platform*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					i.$Io
						.as(w.$No.Configuration)
						.registerConfiguration({
							properties: {
								[E.ThemeSettings.SYSTEM_COLOR_THEME]: {
									type: "string",
									enum: ["default", "auto", "light", "dark"],
									enumDescriptions: [
										(0, t.localize)(12897, null),
										(0, t.localize)(12898, null),
										(0, t.localize)(12899, null),
										(0, t.localize)(12900, null),
									],
									markdownDescription: (0, t.localize)(
										12901,
										null,
										(0, C.$3vc)(E.ThemeSettings.COLOR_THEME),
										(0, C.$3vc)(E.ThemeSettings.DETECT_COLOR_SCHEME),
									),
									default: "default",
									included: !d.$n,
									scope: w.ConfigurationScope.APPLICATION,
									tags: [C.$4vc],
								},
							},
						});
			},
		)
