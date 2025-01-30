import '../../../../../require.js';
import '../../../../../exports.js';
import '../utils/api.js';
import '../../../../../external/solid/solid.js';
import '../../window.js';
define(de[1568], he([1, 0, 115, 13, 75]), function (ce /*require*/,
 e /*exports*/,
 t /*api*/,
 i /*solid*/,
 w /*window*/) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Rmb = E);
		function E(m) {
			const [r, u] = (0, i.createSignal)(""),
				[a, h] = (0, i.createSignal)(-1);
			return {
				typeSelectHandlers: {
					onKeyDown: (n) => {
						if ((0, t.access)(m.isDisabled)) return;
						const g = (0, t.access)(m.keyboardDelegate),
							p = (0, t.access)(m.selectionManager);
						if (!g.getKeyForSearch) return;
						const o = C(n.key);
						if (!o || n.ctrlKey || n.metaKey) return;
						o === " " &&
							r().trim().length > 0 &&
							(n.preventDefault(), n.stopPropagation());
						let f = u((s) => (s += o)),
							b = g.getKeyForSearch(f, p.focusedKey()) ?? g.getKeyForSearch(f);
						b == null &&
							d(f) &&
							((f = f[0]),
							(b =
								g.getKeyForSearch(f, p.focusedKey()) ?? g.getKeyForSearch(f))),
							b != null && (p.setFocusedKey(b), m.onTypeSelect?.(b)),
							clearTimeout(a()),
							h(w.$Bfb.setTimeout(() => u(""), 500));
					},
				},
			};
		}
		function C(m) {
			return m.length === 1 || !/^[A-Z]/i.test(m) ? m : "";
		}
		function d(m) {
			return m.split("").every((r) => r === m[0]);
		}
	}); /*!
	 * Portions of this file are based on code from react-spectrum.
	 * Apache License Version 2.0, Copyright 2020 Adobe.
	 *
	 * Credits to the React Spectrum team:
	 * https://github.com/adobe/react-spectrum/blob/8f2f2acb3d5850382ebe631f055f88c704aa7d17/packages/@react-aria/selection/src/useSelectableCollection.ts
	 */
	