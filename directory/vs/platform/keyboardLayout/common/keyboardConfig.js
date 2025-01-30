import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../../base/common/platform.js';
import '../../configuration/common/configurationRegistry.js';
import '../../registry/common/platform.js';
define(de[2780], he([1, 0, 4, 12, 81, 30]), function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*platform*/,
 w /*configurationRegistry*/,
 E /*platform*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.DispatchConfig = void 0),
				(e.$w4c = d),
				(t = mt(t));
			var C;
			(function (u) {
				(u[(u.Code = 0)] = "Code"), (u[(u.KeyCode = 1)] = "KeyCode");
			})(C || (e.DispatchConfig = C = {}));
			function d(u) {
				const a = u.getValue("keyboard"),
					h = a?.dispatch === "keyCode" ? C.KeyCode : C.Code,
					c = !!a?.mapAltGrToCtrlAlt;
				return { dispatch: h, mapAltGrToCtrlAlt: c };
			}
			const m = E.$Io.as(w.$No.Configuration),
				r = {
					id: "keyboard",
					order: 15,
					type: "object",
					title: t.localize(1937, null),
					properties: {
						"keyboard.dispatch": {
							scope: w.ConfigurationScope.APPLICATION,
							type: "string",
							enum: ["code", "keyCode"],
							default: "code",
							markdownDescription: t.localize(1938, null),
							included:
								i.OS === i.OperatingSystem.Macintosh ||
								i.OS === i.OperatingSystem.Linux,
						},
						"keyboard.mapAltGrToCtrlAlt": {
							scope: w.ConfigurationScope.APPLICATION,
							type: "boolean",
							default: !1,
							markdownDescription: t.localize(1939, null),
							included: i.OS === i.OperatingSystem.Windows,
						},
					},
				};
			m.registerConfiguration(r);
		}),
		