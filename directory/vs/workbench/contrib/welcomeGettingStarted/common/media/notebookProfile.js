import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/strings.js';
import '../../../../../nls.js';
define(de[3215], he([1, 0, 37, 4]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
			const w = (C) => encodeURIComponent(JSON.stringify({ profile: C })),
				E = 400;
			e.default = () => `
<vertically-centered>
<checklist>
	<checkbox on-checked="command:notebook.setProfile?${w("default")}" checked-on="config.notebook.cellFocusIndicator == 'border' && config.notebook.insertToolbarLocation == 'both' && config.notebook.globalToolbar == false && config.notebook.compactView == true && config.notebook.showCellStatusBar == 'visible'">
		<img width="${E}" src="./notebookThemes/default.png"/>
		${(0, t.$nf)((0, i.localize)(11630, null))}
	</checkbox>
	<checkbox on-checked="command:notebook.setProfile?${w("jupyter")}" checked-on="config.notebook.cellFocusIndicator == 'gutter' && config.notebook.insertToolbarLocation == 'notebookToolbar' && config.notebook.globalToolbar == true && config.notebook.compactView == true  && config.notebook.showCellStatusBar == 'visible'">
		<img width="${E}" src="./notebookThemes/jupyter.png"/>
		${(0, t.$nf)((0, i.localize)(11631, null))}
	</checkbox>
	<checkbox on-checked="command:notebook.setProfile?${w("colab")}" checked-on="config.notebook.cellFocusIndicator == 'border' && config.notebook.insertToolbarLocation == 'betweenCells' && config.notebook.globalToolbar == false && config.notebook.compactView == false && config.notebook.showCellStatusBar == 'hidden'">
		<img width="${E}" src="./notebookThemes/colab.png"/>
		${(0, t.$nf)((0, i.localize)(11632, null))}
	</checkbox>
</checklist>
</vertically-centered>
`;
		}),
		