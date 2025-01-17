import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../select/hidden-select-base.js';
import './combobox-context.js';
define(de[2655], he([1, 0, 2, 2, 2654, 486]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$unb = C);
			function C(d) {
				const m = (0, E.$2mb)();
				return (0, t.createComponent)(
					w.$tnb,
					(0, i.mergeProps)(
						{
							get collection() {
								return m.listState().collection();
							},
							get selectionManager() {
								return m.listState().selectionManager();
							},
							get isOpen() {
								return m.isOpen();
							},
							get isMultiple() {
								return m.isMultiple();
							},
							get isVirtualized() {
								return m.isVirtualized();
							},
							focusTrigger: () => m.inputRef()?.focus(),
						},
						d,
					),
				);
			}
		}),
		