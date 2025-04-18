import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../common/editor.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/themeService.js';
import './sideBySideEditor.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './binaryEditor.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
define(
			de[1915],
			he([1, 0, 4, 44, 32, 35, 825, 5, 1336, 21, 10, 125, 66, 18]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*editor*/,
 w /*telemetry*/,
 E /*themeService*/,
 C /*sideBySideEditor*/,
 d /*instantiation*/,
 m /*binaryEditor*/,
 r /*storage*/,
 u /*configuration*/,
 a /*textResourceConfiguration*/,
 h /*editorGroupsService*/,
 c /*editorService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$quc = void 0);
				let n = class extends C.$AVb {
					static {
						this.ID = i.$e1;
					}
					constructor(p, o, f, b, s, l, y, $, v) {
						super(p, o, f, b, s, l, y, $, v);
					}
					getMetadata() {
						const p = this.getPrimaryEditorPane(),
							o = this.getSecondaryEditorPane();
						if (p instanceof m.$puc && o instanceof m.$puc)
							return (0, t.localize)(
								3063,
								null,
								o.getMetadata(),
								p.getMetadata(),
							);
					}
				};
				(e.$quc = n),
					(e.$quc = n =
						Ne(
							[
								j(1, w.$km),
								j(2, d.$Li),
								j(3, E.$iP),
								j(4, r.$lq),
								j(5, u.$gj),
								j(6, a.$XO),
								j(7, c.$IY),
								j(8, h.$EY),
							],
							n,
						));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	