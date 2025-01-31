import '../../../../require.js';
import '../../../../exports.js';
import '../../../solid/solid.js';
import '../../lexical-plain-text/api.js';
import '../../lexical-utils/api.js';
import '../../../solid/web.js';
define(
			de[2613],
			he([1, 0, 13, 2599, 304, 2]),
			function (ce /*require*/,
 e /*exports*/,
 t /*solid*/,
 i /*api*/,
 w /*api*/,
 E /*web*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.usePlainTextSetup = C);
				function C(d) {
					E.isServer ||
						(0, t.onCleanup)((0, w.mergeRegister)((0, i.registerPlainText)(d)));
				}
			},
		)
