import '../../../../../require.js';
import '../../../../../exports.js';
import '../utils/api.js';
import '../../../../../external/solid/solid.js';
import '../utils/api.js';
import '../selection/api.js';
import './list-collection.js';
define(
		de[1569],
		he([1, 0, 115, 13, 115, 927, 1490]),
		function (ce /*require*/,
 e /*exports*/,
 t /*api*/,
 i /*solid*/,
 w /*api*/,
 E /*api*/,
 C /*list-collection*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Wmb = d);
			function d(m) {
				const r = (0, E.$Qmb)(m),
					u = (c) => (m.filter ? new C.$Vmb(m.filter(c)) : new C.$Vmb(c)),
					a = (0, w.$Akb)(
						{
							dataSource: () => (0, t.access)(m.dataSource),
							getKey: () => (0, t.access)(m.getKey),
							getTextValue: () => (0, t.access)(m.getTextValue),
							getDisabled: () => (0, t.access)(m.getDisabled),
							getSectionChildren: () => (0, t.access)(m.getSectionChildren),
							factory: u,
						},
						[() => m.filter],
					),
					h = new E.$Umb(a, r);
				return (
					(0, i.createComputed)(() => {
						const c = r.focusedKey();
						c != null && !a().getItem(c) && r.setFocusedKey(void 0);
					}),
					{ collection: a, selectionManager: () => h }
				);
			}
		},
	); /*!
	 * Portions of this file are based on code from react-spectrum.
	 * Apache License Version 2.0, Copyright 2020 Adobe.
	 *
	 * Credits to the React Spectrum team:
	 * https://github.com/adobe/react-spectrum/blob/8f2f2acb3d5850382ebe631f055f88c704aa7d17/packages/@react-aria/selection/src/useSelectableList.ts
	 */
	