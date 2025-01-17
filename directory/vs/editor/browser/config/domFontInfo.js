import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/browser/fastDomNode.js';
define(de[321], he([1, 0, 194]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$jsb = i),
				(e.$ksb = w);
			function i(E, C) {
				E instanceof t.$Rhb
					? (E.setFontFamily(C.getMassagedFontFamily()),
						E.setFontWeight(C.fontWeight),
						E.setFontSize(C.fontSize),
						E.setFontFeatureSettings(C.fontFeatureSettings),
						E.setFontVariationSettings(C.fontVariationSettings),
						E.setLineHeight(C.lineHeight),
						E.setLetterSpacing(C.letterSpacing))
					: ((E.style.fontFamily = C.getMassagedFontFamily()),
						(E.style.fontWeight = C.fontWeight),
						(E.style.fontSize = C.fontSize + "px"),
						(E.style.fontFeatureSettings = C.fontFeatureSettings),
						(E.style.fontVariationSettings = C.fontVariationSettings),
						(E.style.lineHeight = C.lineHeight + "px"),
						(E.style.letterSpacing = C.letterSpacing + "px"));
			}
			function w(E) {
				E instanceof t.$Rhb
					? (E.setFontFamily(""),
						E.setFontWeight(""),
						E.setFontSize(0),
						E.setFontFeatureSettings(""),
						E.setFontVariationSettings(""),
						E.setLineHeight(0),
						E.setLetterSpacing(0))
					: ((E.style.fontFamily = ""),
						(E.style.fontWeight = ""),
						(E.style.fontSize = ""),
						(E.style.fontFeatureSettings = ""),
						(E.style.fontVariationSettings = ""),
						(E.style.lineHeight = ""),
						(E.style.letterSpacing = ""));
			}
		}),
		