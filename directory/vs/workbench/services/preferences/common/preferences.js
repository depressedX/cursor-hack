import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../common/editor.js';
define(de[131], he([1, 0, 5, 44]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$_Z =
					e.$$Z =
					e.$0Z =
					e.$9Z =
					e.$8Z =
					e.$7Z =
					e.SettingMatchType =
					e.SettingValueType =
						void 0),
				(e.$6Z = C);
			var w;
			(function (d) {
				(d.Null = "null"),
					(d.Enum = "enum"),
					(d.String = "string"),
					(d.MultilineString = "multiline-string"),
					(d.Integer = "integer"),
					(d.Number = "number"),
					(d.Boolean = "boolean"),
					(d.Array = "array"),
					(d.Exclude = "exclude"),
					(d.Include = "include"),
					(d.Complex = "complex"),
					(d.NullableInteger = "nullable-integer"),
					(d.NullableNumber = "nullable-number"),
					(d.Object = "object"),
					(d.BooleanObject = "boolean-object"),
					(d.LanguageTag = "language-tag"),
					(d.ExtensionToggle = "extension-toggle");
			})(w || (e.SettingValueType = w = {}));
			var E;
			(function (d) {
				(d[(d.None = 0)] = "None"),
					(d[(d.LanguageTagSettingMatch = 1)] = "LanguageTagSettingMatch"),
					(d[(d.RemoteMatch = 2)] = "RemoteMatch"),
					(d[(d.DescriptionOrValueMatch = 4)] = "DescriptionOrValueMatch"),
					(d[(d.KeyMatch = 8)] = "KeyMatch");
			})(E || (e.SettingMatchType = E = {}));
			function C(d) {
				return { ...d, override: i.$b1.id, pinned: !0 };
			}
			(e.$7Z = (0, t.$Mi)("preferencesService")),
				(e.$8Z = "editor.contrib.defineKeybinding"),
				(e.$9Z = ".vscode/settings.json"),
				(e.$0Z = "workbench.settings.openDefaultSettings"),
				(e.$$Z = "workbench.settings.useSplitJSON"),
				(e.$_Z = "settings");
		}),
		