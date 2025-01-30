import '../../../../../require.js';
import '../../../../../exports.js';
import './solid-primitives/utils/utils.js';
import './create-controllable-signal.js';
define(de[2189], he([1, 0, 302, 897]), function (ce /*require*/,
 e /*exports*/,
 t /*utils*/,
 i /*create-controllable-signal*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Xkb = w);
			function w(E = {}) {
				const [C, d] = (0, i.$pkb)({
					value: () => (0, t.$_jb)(E.isSelected),
					defaultValue: () => !!(0, t.$_jb)(E.defaultIsSelected),
					onChange: (u) => E.onSelectedChange?.(u),
				});
				return {
					isSelected: C,
					setIsSelected: (u) => {
						!(0, t.$_jb)(E.isReadOnly) && !(0, t.$_jb)(E.isDisabled) && d(u);
					},
					toggle: () => {
						!(0, t.$_jb)(E.isReadOnly) && !(0, t.$_jb)(E.isDisabled) && d(!C());
					},
				};
			}
		}),
		