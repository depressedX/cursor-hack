import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../css!vs/workbench/contrib/ui/browser/optionSection/optionSection.js';
define(de[3206], he([1, 0, 2, 2, 2524]), function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$xfd = void 0);
			const w = (0, t.template)(
					'<div class="cursor-option-section"><div class="cursor-option-title"></div><div class="cursor-option-subtitle">',
				),
				E = (C) =>
					(() => {
						const d = w(),
							m = d.firstChild,
							r = m.nextSibling;
						return (
							(0, i.insert)(m, () => C.title),
							(0, i.insert)(r, () => C.subtitle),
							(0, i.insert)(d, () => C.children, null),
							d
						);
					})();
			e.$xfd = E;
		})
