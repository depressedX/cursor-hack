import '../../../../../require.js';
import '../../../../../exports.js';
import './solid-primitives/utils/utils.js';
import './create-controllable-signal.js';
define(de[2188], he([1, 0, 302, 897]), function (ce /*require*/,
 e /*exports*/,
 t /*utils*/,
 i /*create-controllable-signal*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Ckb = w);
			function w(E = {}) {
				const [C, d] = (0, i.$pkb)({
						value: () => (0, t.$_jb)(E.open),
						defaultValue: () => !!(0, t.$_jb)(E.defaultOpen),
						onChange: (a) => E.onOpenChange?.(a),
					}),
					m = () => {
						d(!0);
					},
					r = () => {
						d(!1);
					};
				return {
					isOpen: C,
					setIsOpen: d,
					open: m,
					close: r,
					toggle: () => {
						C() ? r() : m();
					},
				};
			}
		})
