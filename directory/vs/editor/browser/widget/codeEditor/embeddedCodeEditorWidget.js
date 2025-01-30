import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/objects.js';
import '../../services/codeEditorService.js';
import './codeEditorWidget.js';
import '../../../common/languages/languageConfigurationRegistry.js';
import '../../../common/services/languageFeatures.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/tooltipService/common/tooltipService.js';
define(
			de[281],
			he([1, 0, 82, 65, 206, 152, 69, 91, 31, 8, 5, 40, 35, 308]),
			function (ce /*require*/,
 e /*exports*/,
 t /*objects*/,
 i /*codeEditorService*/,
 w /*codeEditorWidget*/,
 E /*languageConfigurationRegistry*/,
 C /*languageFeatures*/,
 d /*accessibility*/,
 m /*commands*/,
 r /*contextkey*/,
 u /*instantiation*/,
 a /*notification*/,
 h /*themeService*/,
 c /*tooltipService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wDb = void 0),
					(t = mt(t));
				let n = class extends w.$rwb {
					constructor(p, o, f, b, s, l, y, $, v, S, I, T, P, k) {
						super(
							p,
							{
								...b.getRawOptions(),
								overflowWidgetsDomNode: b.getOverflowWidgetsDomNode(),
							},
							f,
							s,
							l,
							y,
							$,
							v,
							S,
							I,
							T,
							P,
							k,
						),
							(this.$ = b),
							(this.kb = o),
							super.updateOptions(this.kb),
							this.D(b.onDidChangeConfiguration((L) => this.mc(L)));
					}
					getParentEditor() {
						return this.$;
					}
					mc(p) {
						super.updateOptions(this.$.getRawOptions()),
							super.updateOptions(this.kb);
					}
					updateOptions(p) {
						t.$yo(this.kb, p, !0), super.updateOptions(this.kb);
					}
				};
				(e.$wDb = n),
					(e.$wDb = n =
						Ne(
							[
								j(4, u.$Li),
								j(5, i.$dtb),
								j(6, m.$ek),
								j(7, r.$6j),
								j(8, h.$iP),
								j(9, a.$4N),
								j(10, d.$XK),
								j(11, E.$aN),
								j(12, C.$k3),
								j(13, c.$5X),
							],
							n,
						));
			},
		),
		