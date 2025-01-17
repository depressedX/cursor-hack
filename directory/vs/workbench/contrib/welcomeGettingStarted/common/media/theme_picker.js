import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/strings.js';
import '../../../../../nls.js';
import '../../../../services/themes/common/workbenchThemeService.js';
define(de[3722], he([1, 0, 37, 4, 333]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.default = () => `
<checklist>
	<div class="theme-picker-row">
		<checkbox when-checked="setTheme:${w.ThemeSettingDefaults.COLOR_THEME_DARK}" checked-on="config.workbench.colorTheme == '${w.ThemeSettingDefaults.COLOR_THEME_DARK}'">
			<img width="200" src="./dark.png"/>
			${(0, t.$nf)((0, i.localize)(11633, null))}
		</checkbox>
		<checkbox when-checked="setTheme:${w.ThemeSettingDefaults.COLOR_THEME_LIGHT}" checked-on="config.workbench.colorTheme == '${w.ThemeSettingDefaults.COLOR_THEME_LIGHT}'">
			<img width="200" src="./light.png"/>
			${(0, t.$nf)((0, i.localize)(11634, null))}
		</checkbox>
	</div>
	<div class="theme-picker-row">
		<checkbox when-checked="setTheme:${w.ThemeSettingDefaults.COLOR_THEME_HC_DARK}" checked-on="config.workbench.colorTheme == '${w.ThemeSettingDefaults.COLOR_THEME_HC_DARK}'">
			<img width="200" src="./dark-hc.png"/>
			${(0, t.$nf)((0, i.localize)(11635, null))}
		</checkbox>
		<checkbox when-checked="setTheme:${w.ThemeSettingDefaults.COLOR_THEME_HC_LIGHT}" checked-on="config.workbench.colorTheme == '${w.ThemeSettingDefaults.COLOR_THEME_HC_LIGHT}'">
			<img width="200" src="./light-hc.png"/>
			${(0, t.$nf)((0, i.localize)(11636, null))}
		</checkbox>
	</div>
</checklist>
<checkbox class="theme-picker-link" when-checked="command:workbench.action.selectTheme" checked-on="false">
	${(0, t.$nf)((0, i.localize)(11637, null))}
</checkbox>
`);
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	