import '../../../require.js';
import '../../../exports.js';
import './canUseDOM.js';
define(de[1416], he([1, 0, 1415]), function (ce /*require*/,
 e /*exports*/,
 t /*canUseDOM*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.IS_APPLE_WEBKIT =
					e.IS_CHROME =
					e.IS_IOS =
					e.IS_SAFARI =
					e.CAN_USE_BEFORE_INPUT =
					e.IS_FIREFOX =
					e.IS_APPLE =
						void 0);
			const i =
				t.CAN_USE_DOM && "documentMode" in document
					? document.documentMode
					: null;
			(e.IS_APPLE =
				t.CAN_USE_DOM && /Mac|iPod|iPhone|iPad/.test(navigator.platform)),
				(e.IS_FIREFOX =
					t.CAN_USE_DOM &&
					/^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent)),
				(e.CAN_USE_BEFORE_INPUT =
					t.CAN_USE_DOM && "InputEvent" in window && !i
						? "getTargetRanges" in new window.InputEvent("input")
						: !1),
				(e.IS_SAFARI =
					t.CAN_USE_DOM && /Version\/[\d.]+.*Safari/.test(navigator.userAgent)),
				(e.IS_IOS =
					t.CAN_USE_DOM &&
					/iPad|iPhone|iPod/.test(navigator.userAgent) &&
					!window.MSStream),
				(e.IS_CHROME =
					t.CAN_USE_DOM && /^(?=.*Chrome).*/i.test(navigator.userAgent)),
				(e.IS_APPLE_WEBKIT =
					t.CAN_USE_DOM &&
					/AppleWebKit\/[\d.]+/.test(navigator.userAgent) &&
					!e.IS_CHROME);
		})
