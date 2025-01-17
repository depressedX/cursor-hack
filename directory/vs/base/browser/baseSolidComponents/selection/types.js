import '../../../../../require.js';
import '../../../../../exports.js';
define(de[739], he([1, 0]), function (ce, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Omb = void 0);
		class t extends Set {
			constructor(w, E, C) {
				super(w),
					w instanceof t
						? ((this.anchorKey = E || w.anchorKey),
							(this.currentKey = C || w.currentKey))
						: ((this.anchorKey = E), (this.currentKey = C));
			}
		}
		e.$Omb = t;
	}); /*!
	 * Portions of this file are based on code from react-spectrum.
	 * Apache License Version 2.0, Copyright 2020 Adobe.
	 *
	 * Credits to the React Spectrum team:
	 * https://github.com/adobe/react-spectrum/blob/bfce84fee12a027d9cbc38b43e1747e3e4b4b169/packages/@react-stately/selection/src/SelectionManager.ts
	 */
	