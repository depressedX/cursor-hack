import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../platform/keybinding/common/keybinding.js';
import './renderInlineGPT4HintViewZone.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/reactivestorage/browser/reactiveStorageService.js';
define(
			de[2753],
			he([1, 0, 7, 3, 39, 2699, 5, 45]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*lifecycle*/,
 w /*keybinding*/,
 E /*renderInlineGPT4HintViewZone*/,
 C /*instantiation*/,
 d /*reactiveStorageService*/) {
				"use strict";
				var m;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3dc = void 0),
					(t = mt(t));
				let r = class extends i.$1c {
					static {
						m = this;
					}
					static {
						this.a = 0;
					}
					constructor(a, h, c, n) {
						super(),
							(this.c = a),
							(this.keybindingService = h),
							(this.f = c),
							(this.g = n),
							(this.id = `InlineGPT4HintViewZone${m.a++}`),
							(this.reactiveStorageRoot = this.D(this.g.createScoped(this))),
							(this.b = t.$("div.inlineGPT4HintViewZone")),
							this.D((0, E.$2dc)(this.b, this));
					}
					dispose() {
						super.dispose();
					}
					getDomNode() {
						return this.b;
					}
				};
				(e.$3dc = r),
					(e.$3dc = r = m = Ne([j(1, w.$uZ), j(2, C.$Li), j(3, d.$0zb)], r));
			},
		)
