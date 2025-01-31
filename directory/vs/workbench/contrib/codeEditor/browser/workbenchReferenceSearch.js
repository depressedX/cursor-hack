import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/contrib/gotoSymbol/browser/peek/referencesController.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/storage/common/storage.js';
define(
			de[3613],
			he([1, 0, 46, 65, 840, 10, 8, 5, 40, 21]),
			function (ce /*require*/,
 e /*exports*/,
 t /*editorExtensions*/,
 i /*codeEditorService*/,
 w /*referencesController*/,
 E /*configuration*/,
 C /*contextkey*/,
 d /*instantiation*/,
 m /*notification*/,
 r /*storage*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1Xc = void 0);
				let u = class extends w.$EOb {
					constructor(h, c, n, g, p, o, f) {
						super(!1, h, c, n, g, p, o, f);
					}
				};
				(e.$1Xc = u),
					(e.$1Xc = u =
						Ne(
							[
								j(1, C.$6j),
								j(2, i.$dtb),
								j(3, m.$4N),
								j(4, d.$Li),
								j(5, r.$lq),
								j(6, E.$gj),
							],
							u,
						)),
					(0, t.$qtb)(w.$EOb.ID, u, t.EditorContributionInstantiation.Lazy);
			},
		)
