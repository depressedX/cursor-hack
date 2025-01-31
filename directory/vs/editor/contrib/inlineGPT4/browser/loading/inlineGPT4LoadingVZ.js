import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../platform/keybinding/common/keybinding.js';
import '../../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import './renderInlineGPT4LoadingVZ.js';
define(
			de[2754],
			he([1, 0, 7, 3, 39, 45, 2700]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*lifecycle*/,
 w /*keybinding*/,
 E /*reactiveStorageService*/,
 C /*renderInlineGPT4LoadingVZ*/) {
				"use strict";
				var d;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ydc = void 0),
					(t = mt(t));
				let m = class extends i.$1c {
					static {
						d = this;
					}
					static {
						this.a = 0;
					}
					constructor(u, a, h) {
						super(),
							(this.c = u),
							(this.keybindingService = a),
							(this.f = h),
							(this.id = `InlineGPT4LoadingZone${d.a++}`),
							(this.reactiveStorageRoot = this.D(this.f.createScoped(this))),
							(this.b = t.$("div.inlineGPT4LoadingViewZone")),
							this.D((0, C.$Xdc)(this.b, this));
					}
					dispose() {
						super.dispose();
					}
					getDomNode() {
						return this.b;
					}
				};
				(e.$Ydc = m), (e.$Ydc = m = d = Ne([j(1, w.$uZ), j(2, E.$0zb)], m));
			},
		)
