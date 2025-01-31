import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../browser/editorExtensions.js';
import '../../../common/core/editorColorRegistry.js';
import '../../../../nls.js';
import '../../../../platform/theme/common/colorUtils.js';
import './placeholderTextContribution.js';
import '../../../../platform/observable/common/wrapInReloadableClass.js';
import '../../../../css!vs/editor/contrib/placeholderText/browser/placeholderText.js';
define(
			de[2861],
			he([1, 0, 46, 307, 4, 306, 1185, 1624, 2317]),
			function (ce /*require*/,
 e /*exports*/,
 t /*editorExtensions*/,
 i /*editorColorRegistry*/,
 w /*nls*/,
 E /*colorUtils*/,
 C /*placeholderTextContribution*/,
 d /*wrapInReloadableClass*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, t.$qtb)(
						C.$Ujc.ID,
						(0, d.$_jc)(() => C.$Ujc),
						t.EditorContributionInstantiation.Eager,
					),
					(0, E.$wP)(
						"editor.placeholder.foreground",
						i.$6T,
						(0, w.localize)(1360, null),
					);
			},
		)
