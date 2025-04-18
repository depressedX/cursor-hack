import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../platform/keybinding/common/keybinding.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import './renderInlineGPT4CancelVZ.js';
define(
			de[2752],
			he([1, 0, 7, 3, 39, 5, 45, 1595]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*lifecycle*/,
 w /*keybinding*/,
 E /*instantiation*/,
 C /*reactiveStorageService*/,
 d /*renderInlineGPT4CancelVZ*/) {
				"use strict";
				var m;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7dc = void 0),
					(t = mt(t));
				let r = class extends i.$1c {
					static {
						m = this;
					}
					static {
						this.a = 0;
					}
					constructor(a, h, c, n, g, p) {
						super(),
							(this.c = a),
							(this.f = h),
							(this.keybindingService = n),
							(this.g = g),
							(this.h = p),
							(this.id = `InlineGPT4HintViewZone${m.a++}`),
							(this.reactiveStorageRoot = this.D(this.h.createScoped(this))),
							(this.b = t.$("div.inlineGPT4CancelViewZone")),
							this.D((0, d.$6dc)(this.b, c, this));
					}
					cancelAndDispose() {
						this.f(), this.dispose();
					}
					dispose() {
						super.dispose();
					}
					getDomNode() {
						return this.b;
					}
				};
				(e.$7dc = r),
					(e.$7dc = r = m = Ne([j(3, w.$uZ), j(4, E.$Li), j(5, C.$0zb)], r));
			},
		)
