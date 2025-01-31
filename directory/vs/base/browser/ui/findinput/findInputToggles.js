import '../../../../../require.js';
import '../../../../../exports.js';
import '../hover/hoverDelegateFactory.js';
import '../toggle/toggle.js';
import '../../../common/codicons.js';
import '../../../../nls.js';
define(de[1581], he([1, 0, 95, 268, 14, 4]), function (ce /*require*/,
 e /*exports*/,
 t /*hoverDelegateFactory*/,
 i /*toggle*/,
 w /*codicons*/,
 E /*nls*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Tob = e.$Sob = e.$Rob = void 0),
				(E = mt(E));
			const C = E.localize(10, null),
				d = E.localize(11, null),
				m = E.localize(12, null);
			class r extends i.$8ib {
				constructor(c) {
					super({
						icon: w.$ak.caseSensitive,
						title: C + c.appendTitle,
						isChecked: c.isChecked,
						hoverDelegate: c.hoverDelegate ?? (0, t.$cib)("element"),
						inputActiveOptionBorder: c.inputActiveOptionBorder,
						inputActiveOptionForeground: c.inputActiveOptionForeground,
						inputActiveOptionBackground: c.inputActiveOptionBackground,
					});
				}
			}
			e.$Rob = r;
			class u extends i.$8ib {
				constructor(c) {
					super({
						icon: w.$ak.wholeWord,
						title: d + c.appendTitle,
						isChecked: c.isChecked,
						hoverDelegate: c.hoverDelegate ?? (0, t.$cib)("element"),
						inputActiveOptionBorder: c.inputActiveOptionBorder,
						inputActiveOptionForeground: c.inputActiveOptionForeground,
						inputActiveOptionBackground: c.inputActiveOptionBackground,
					});
				}
			}
			e.$Sob = u;
			class a extends i.$8ib {
				constructor(c) {
					super({
						icon: w.$ak.regex,
						title: m + c.appendTitle,
						isChecked: c.isChecked,
						hoverDelegate: c.hoverDelegate ?? (0, t.$cib)("element"),
						inputActiveOptionBorder: c.inputActiveOptionBorder,
						inputActiveOptionForeground: c.inputActiveOptionForeground,
						inputActiveOptionBackground: c.inputActiveOptionBackground,
					});
				}
			}
			e.$Tob = a;
		})
