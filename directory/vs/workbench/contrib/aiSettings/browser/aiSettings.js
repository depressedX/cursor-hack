import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../services/aiSettings/browser/aiSettingsService.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/contributions.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/opener/common/opener.js';
import '../../../services/editor/common/editorService.js';
import './aiSettingsEditor.js';
define(
			de[1997],
			he([1, 0, 5, 315, 3, 30, 55, 52, 8, 41, 18, 1383]),
			function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/,
 i /*aiSettingsService*/,
 w /*lifecycle*/,
 E /*platform*/,
 C /*contributions*/,
 d /*lifecycle*/,
 m /*contextkey*/,
 r /*opener*/,
 u /*editorService*/,
 a /*aiSettingsEditor*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$TDc = void 0),
					(e.$TDc = new m.$5j("isSettingsPaneOpen", !1));
				let h = class extends w.$1c {
					constructor(n, g, p, o, f) {
						super(),
							(this.b = n),
							(this.c = g),
							(this.f = p),
							(this.g = o),
							(this.h = f),
							this.b.addPopupListener(this.renderPopup.bind(this)),
							this.b.addClosePopupListener(this.dispose.bind(this)),
							(this.a = e.$TDc.bindTo(p));
					}
					renderPopup(n, g, p, o) {
						this.h.openEditor(new a.$QDc(p, o));
					}
				};
				(h = Ne(
					[j(0, i.$S6b), j(1, t.$Li), j(2, m.$6j), j(3, r.$7rb), j(4, u.$IY)],
					h,
				)),
					E.$Io
						.as(C.Extensions.Workbench)
						.registerWorkbenchContribution(h, d.LifecyclePhase.Restored);
			},
		)
