import '../../../../../require.js';
import '../../../../../exports.js';
import '../utils/api.js';
import '../../../../../external/solid/solid.js';
import '../selection/api.js';
import './list-keyboard-delegate.js';
define(
		de[2648],
		he([1, 0, 115, 13, 927, 1491]),
		function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Ymb = C);
			function C(d, m, r) {
				const u = (0, i.createMemo)(() => {
					const a = (0, t.access)(d.keyboardDelegate);
					return a || new E.$Xmb(d.collection, m);
				});
				return (0, w.$Smb)(
					{
						selectionManager: () => (0, t.access)(d.selectionManager),
						keyboardDelegate: u,
						autoFocus: () => (0, t.access)(d.autoFocus),
						deferAutoFocus: () => (0, t.access)(d.deferAutoFocus),
						shouldFocusWrap: () => (0, t.access)(d.shouldFocusWrap),
						disallowEmptySelection: () =>
							(0, t.access)(d.disallowEmptySelection),
						selectOnFocus: () => (0, t.access)(d.selectOnFocus),
						disallowTypeAhead: () => (0, t.access)(d.disallowTypeAhead),
						shouldUseVirtualFocus: () => (0, t.access)(d.shouldUseVirtualFocus),
						allowsTabNavigation: () => (0, t.access)(d.allowsTabNavigation),
						isVirtualized: () => (0, t.access)(d.isVirtualized),
						scrollToKey: (a) => (0, t.access)(d.scrollToKey)?.(a),
					},
					m,
					r,
				);
			}
		},
	); /*!
	 * Portions of this file are based on code from react-spectrum.
	 * Apache License Version 2.0, Copyright 2020 Adobe.
	 *
	 * Credits to the React Spectrum team:
	 * https://github.com/adobe/react-spectrum/blob/8f2f2acb3d5850382ebe631f055f88c704aa7d17/packages/@react-stately/list/src/useSingleSelectListState.ts
	 */
	