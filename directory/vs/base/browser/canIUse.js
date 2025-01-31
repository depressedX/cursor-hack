import '../../../require.js';
import '../../../exports.js';
import './browser.js';
import './window.js';
import '../common/platform.js';
define(de[459], he([1, 0, 139, 75, 12]), function (ce /*require*/,
 e /*exports*/,
 t /*browser*/,
 i /*window*/,
 w /*platform*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Yfb = e.KeyboardSupport = void 0),
				(t = mt(t)),
				(w = mt(w));
			var E;
			(function (C) {
				(C[(C.Always = 0)] = "Always"),
					(C[(C.FullScreen = 1)] = "FullScreen"),
					(C[(C.None = 2)] = "None");
			})(E || (e.KeyboardSupport = E = {})),
				(e.$Yfb = {
					clipboard: {
						writeText:
							w.$p ||
							(document.queryCommandSupported &&
								document.queryCommandSupported("copy")) ||
							!!(
								navigator &&
								navigator.clipboard &&
								navigator.clipboard.writeText
							),
						readText:
							w.$p ||
							!!(
								navigator &&
								navigator.clipboard &&
								navigator.clipboard.readText
							),
					},
					keyboard:
						w.$p || t.$Vfb()
							? E.Always
							: navigator.keyboard || t.$Rfb
								? E.FullScreen
								: E.None,
					touch: "ontouchstart" in i.$Bfb || navigator.maxTouchPoints > 0,
					pointerEvents:
						i.$Bfb.PointerEvent &&
						("ontouchstart" in i.$Bfb || navigator.maxTouchPoints > 0),
				});
		})
