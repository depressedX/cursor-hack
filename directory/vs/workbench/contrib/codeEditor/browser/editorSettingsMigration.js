import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../editor/browser/config/migrateOptions.js';
import '../../../common/configuration.js';
define(de[3552], he([1, 0, 30, 1524, 224]), function (ce /*require*/,
 e /*exports*/,
 t /*platform*/,
 i /*migrateOptions*/,
 w /*configuration*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				t.$Io.as(w.$z6.ConfigurationMigration).registerConfigurationMigrations(
					i.$psb.items.map((E) => ({
						key: `editor.${E.key}`,
						migrateFn: (C, d) => {
							const m = [],
								r = (u, a) => m.push([`editor.${u}`, { value: a }]);
							return E.migrate(C, (u) => d(`editor.${u}`), r), m;
						},
					})),
				);
		}),
		