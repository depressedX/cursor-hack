import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/configuration.js';
define(de[3553], he([1, 0, 30, 224]), function (ce /*require*/,
 e /*exports*/,
 t /*platform*/,
 i /*configuration*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				t.$Io.as(i.$z6.ConfigurationMigration).registerConfigurationMigrations([
					{
						key: "debug.autoExpandLazyVariables",
						migrateFn: (w) => {
							let E;
							return (
								w === !0 ? (E = "on") : w === !1 && (E = "off"),
								[["debug.autoExpandLazyVariables", { value: E }]]
							);
						},
					},
				]);
		}),
		