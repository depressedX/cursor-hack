define(de[2181], he([1, 0, 13]), function (ce, e, t) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Tkb = i);
		function i(C, d) {
			(0, t.createEffect)(
				(0, t.on)(C, (m) => {
					if (m == null) return;
					const r = w(m);
					r != null &&
						(r.addEventListener("reset", d, { passive: !0 }),
						(0, t.onCleanup)(() => {
							r.removeEventListener("reset", d);
						}));
				}),
			);
		}
		function w(C) {
			return E(C) ? C.form : C.closest("form");
		}
		function E(C) {
			return C.matches("textarea, input, select, button");
		}
	}); /*!
	 * Portions of this file are based on code from react-spectrum.
	 * Apache License Version 2.0, Copyright 2020 Adobe.
	 *
	 * Credits to the React Spectrum team:
	 * https://github.com/adobe/react-spectrum/blob/8f2f2acb3d5850382ebe631f055f88c704aa7d17/packages/@react-aria/utils/src/scrollIntoView.ts
	 */
	