import '../../../../require.js';
import '../../../../exports.js';
define(de[664], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$NMb = t);
			function t(i) {
				return (
					i
						.lookupKeybinding("history.showPrevious")
						?.getElectronAccelerator() === "Up" &&
					i.lookupKeybinding("history.showNext")?.getElectronAccelerator() ===
						"Down"
				);
			}
		}),
		